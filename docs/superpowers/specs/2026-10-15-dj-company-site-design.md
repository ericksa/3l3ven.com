---
title: DJ Company Site – Design Spec
date: 2026-10-15
---

# Overview

This document defines the architecture for **Celebrity Productions** (the DJ company) web site. The site will:

* showcase packages (DJ Ultimate, Premium, Essentials, Basics, Photo Booth, Silent Disco, etc.)
* allow visitors to select a date, time, venue, and add‑ons
* generate a transparent price quote in real‑time
* collect client contact details and music‑list preferences
* process payments via Stripe, PayPal, Cash App, or Square
* automatically create a Google Calendar event after successful payment
* keep the Supabase free‑tier project alive with a weekly keep‑alive ping

The implementation will use **Next 13 (App Router)** for the front‑end, **Cloudflare Workers** (Edge runtime) for API endpoints, and **Supabase** (PostgreSQL) for persistent data. Deployment targets **Cloudflare Pages** (free tier) with Workers attached.

---

## 1. Front‑end (Next 13 – App Router)

| Page | Path | Purpose |
|------|------|----------|
| Home | `/` | Brand intro, CTA to "Get a Quote" |
| Packages | `/packages` | List all service packages with transparent pricing |
| Package Detail | `/packages/[id]` | Show package details, selectable add‑ons, "Add to Quote" |
| Quote Builder | `/quote` | Assemble event date, time, venue, music preference, add‑ons; live total calculation |
| Booking Form | `/booking` | Collect client name, email, phone, special requests; creates a **pending** quote record |
| Confirmation | `/confirmation/[quoteId]` | Shows payment status, button to add event to Google Calendar |
| Admin Dashboard | `/admin` (basic‑auth) | List upcoming events, edit availability, manual payment status updates |

### UI Stack
* **React** with **Tailwind CSS** (no external UI libraries – keeps bundle small)
* **React Hook Form** + **Zod** for schema validation
* **next‑auth** (optional) for Google Workspace SSO on the admin route (fallback to basic auth)

---

## 2. Edge API (Cloudflare Workers – `pages_functions`)

All routes live under `/api/*` and are written in TypeScript.

| Route | Method | Input | Action | Auth |
|-------|--------|-------|--------|------|
| `/api/availability` | `POST` | `{date, startTime, endTime}` | Query Supabase `events` for overlapping rows | JWT (signed by front‑end) |
| `/api/create‑quote` | `POST` | `{packageId, addOns, musicPref, clientInfo}` | Insert row into `quotes` with status `pending`; return `quoteId` | JWT |
| `/api/init‑payment` | `POST` | `{quoteId, provider}` | Create Stripe Checkout Session **or** PayPal Order; store provider‑specific Paylink URL in `quotes`; return redirect URL | JWT |
| `/api/confirm‑booking` | `POST` (webhook) | Provider‑specific payload | Verify signature, update `quotes` → `paid`, insert into `events`, call Google Calendar API | Provider signing secret |
| `/api/ping` | `GET` | – | Simple `SELECT 1` on Supabase (keeps free tier active) | Public (no auth) |

All workers use **environment secrets** (set via `wrangler secret put`):
* `SUPABASE_URL`
* `SUPABASE_ANON_KEY`
* `STRIPE_SECRET_KEY`
* `PAYPAL_CLIENT_ID` / `PAYPAL_SECRET`
* `GCAL_SA_JSON` (service‑account JSON string)
* `JWT_SECRET`

---

## 3. Supabase Schema (Free tier – up to 500 MB)

```sql
-- quotes: provisional price calculation
create table quotes (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null,
  add_ons jsonb default '{}',
  music_pref text check (music_pref in ('free','low_cost','custom')),
  client_name text,
  client_email text,
  client_phone text,
  total_cents bigint not null,
  status text check (status in ('pending','paid','canceled')) default 'pending',
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- events: confirmed bookings (only after payment)
create table events (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid references quotes(id),
  start_ts timestamp not null,
  end_ts timestamp not null,
  venue text,
  package_id uuid not null,
  add_ons jsonb default '{}',
  created_at timestamp default now()
);

-- optional music selections attached to a quote
create table music_selections (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid references quotes(id),
  track_name text,
  artist text,
  source_url text
);
```

Indexes:
* `events(start_ts, end_ts)` – fast overlap check for availability.
* `quotes(status)` – filter pending vs paid.

---

## 4. Payment & Calendar Integration

### Stripe (preferred)
* **Checkout Session** – server‑side creation in `/api/init-payment`; client redirects.
* Webhook `checkout.session.completed` → `/api/confirm‑booking`.
* After verification, update `quotes.status = 'paid'` and insert into `events`.

### PayPal
* **Orders API** – similar flow; webhook `PAYMENT.SALE.COMPLETED` handled.

### Cash App & Square
* Generate a **Paylink** URL (static) stored on the `quotes` record.
* Display a button linking to that URL; admin can manually set status to `paid`.

### Google Calendar
* Service account with domain‑wide delegation (Google Workspace admin creates the SA, grants `calendar.events.insert`).
* In `/api/confirm‑booking` after DB update, call `calendar.events.insert` with:
  * `summary`: "Celebrity Productions – DJ Booking"
  * `description`: includes package, add‑ons, client name, and a link to the confirmation page.
  * `start` / `end` timestamps.
* Return the created event `htmlLink` to the front‑end so the client can add it to their own calendar.

---

## 5. Keep‑Alive Ping (weekly activity)

A tiny public endpoint `/api/ping` performs a non‑mutating `SELECT 1` against Supabase. To keep the free tier from pausing after 7 days of inactivity, run the following script on any machine you control (local laptop, Raspberry Pi, etc.) **once a week**.

```bash
#!/usr/bin/env node
// keep‑alive.js – weekly ping to Cloudflare Worker
import https from "https";

const url = "https://<YOUR-CLOUDFLARE-PAGES-DOMAIN>/api/ping";

https.get(url, (res) => {
  if (res.statusCode === 200) {
    console.log("✅ Supabase kept alive");
  } else {
    console.error(`❌ Ping failed: ${res.statusCode}`);
  }
  res.resume();
}).on('error', (e) => {
  console.error(`❌ Ping error: ${e.message}`);
});
```
Make it executable (`chmod +x keep‑alive.js`) and add a cron entry, e.g.:
```
0 3 * * 0 /absolute/path/keep‑alive.js >> ~/keep‑alive.log 2>&1
```
This runs every Sunday at 03:00 UTC.

---

## 6. Deployment & CI/CD

1. **GitHub repository** – `https://github.com/ericksa/3l3ven.com` (already cloned).
2. **GitHub Actions** workflow (`.github/workflows/deploy.yml`):
   * `npm install` (install Next deps in `client/` and `functions/`)
   * `npm run build` → generates `.next` output
   * `wrangler publish` – deploys pages + workers to Cloudflare
   * `supabase db push` – applies migrations from `supabase/migrations/`
3. **Secrets** stored in GitHub repo settings and referenced in the workflow via `${{ secrets.SUPABASE_URL }}` etc.
4. **Cloudflare configuration** – enable **Pages Functions** so `/api/*` routes are served by Workers.
5. **Domain** – point `celebrityproductions.com` (or the desired domain) to the Cloudflare Pages site.

---

## 7. Security Checklist

* All traffic forced over HTTPS (Cloudflare default).
* JWT signed with `JWT_SECRET`; short expiry (15 min).
* Stripe & PayPal webhook signatures verified before any DB mutation.
* CORS only allows origins from your domain.
* Rate‑limit `/api/availability` (max 5 req/sec per IP) using Cloudflare’s built‑in rate‑limiting rule.
* Admin dashboard protected by **basic auth** (username/password stored as Cloudflare secret) *or* Next‑Auth Google SSO.
* Supabase tables use Row Level Security (RLS) policies:
  * Public can `SELECT` from `quotes` where `status = 'paid'` (optional for public proof of payment).
  * Only the service role can `INSERT`/`UPDATE` `quotes` and `events`.

---

## 8. Monitoring & Alerts

* **Cloudflare Analytics** – monitor request counts, error rates.
* **Supabase Logs** – alert on failed queries (via Slack webhook).
* **Stripe webhook failures** – send a Slack message using a dedicated webhook URL.
* **Keep‑alive script logging** – append to `keep‑alive.log`; set up a simple alert (e.g., email) if the script fails for >2 consecutive weeks.

---

## 9. Open Issues / Decisions Needed

1. **Payment provider priority** – default to Stripe, but confirm if you want PayPal and Cash App links shown simultaneously.
2. **Admin authentication method** – basic auth vs. Next‑Auth Google SSO (requires client‑id/secret).
3. **Domain name** – confirm the final domain to configure DNS.
4. **Branding assets** – logo, color palette, images for package pages (will be placed in `/public`).

---

# Next Steps

1. Review this spec and confirm any changes or give final approval.
2. Once approved, I will commit the spec file, add Supabase migration scripts, create the GitHub Actions workflow, and then invoke the **writing‑plans** skill to generate a detailed implementation plan.

Please let me know if everything looks correct or if you’d like any adjustments before we move forward.
