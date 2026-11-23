# MEMORY — PA (Personal Assistant)

## User Profile
- **Name**: Adam Michael Erickson
- **Location**: 914 Benston Rd, Whitehall MI 49461 (ET)
- **Family**:
  - Partner: Hailee Scofiled 4/25/1999
  - Kids: Azreal Knifght Erickson 05/12/2006, Micah Aiden Erickson 06/03/2008, Scarlett Candita Erickson 12/05/1996, Charity Michelle Erickson 4/15/1998
- **Allergies**: None documented — needs verification
- **School**: Whitehall Public Schools (calendar synced)

## Finances
- **Budget**: $5K/month (flag if exceeded)
- **Accounts**:
  - Chase (personal)
  - QuickBooks (personal only, read-only)
- **Recurring Expenses**:
  - Aldi: $800/month (groceries)
  - Meijer: $300/month (household)
  - Amazon Prime: $15/month (bulk items)

## Calendar
- **Family Events**:
  - Adam: Piano lessons (everyday 7PM)
- **Personal Reminders**:
  - Aldi (primary), Meijer (backup)
- **Errands**: Amazon Prime for bulk items

## Communication
- **Primary**: iMsg
- **Fallback**: Telegram

## People
- **Emergency Contacts**:
  - Mother: +12317662692
  - Father: +12317800860
- **Service Providers**:
  - Dentist: Need to document

## Medical Information
- **Allergies**: None documented — needs verification/update
- **Conditions**: None documented
- **Medications**: None documented
- **Doctors**: None documented
- **Notes**: Medical records stored in `~/.openclaw/workspace/test-medical.txt` (personal-medical bucket)

## Legal Documents
- **Business Entities**:
  - Vet Tech Solutions LLC (SDVOSB)
  - Eleven Entertainment / Electric Life Productions (DBA elve.us)
- **Contracts**: Tracked via VTS agent
- **Insurance**: Not documented
- **Will/Power of Attorney**: Not documented
- **IDs/Passports**: Not documented

## Education & Certifications
- **Schools Attended**: Not fully documented
- **Degrees/Certifications**: Not fully documented
- **Professional Licenses**: Not documented
- **Military Service**: VTS SDVOSB status implies veteran status — details unknown
- **Technical Skills**: Extensive (oracle, PostgreSQL, MySQL, Redis, security frameworks, testing)

## Long-Term Goals
- **Career**: $100k+ remote work (FBI CJIS contingent offer at Trilogy Innovations)
- **Federal Contracting**: Land VTS contract (active pursuit)
- **Music Business**: Electric Forest festival performance, scale 11 to 15-20 bookings/month
- **Skill Development**: Piano lessons (daily at 7PM)
- **Financial**: Maintain $5K/month budget, grow business revenue

## Calendar Management Directive (2026-09-06)
- **Goal**: Manage Adam's personal calendar (erickson.adam.m@gmail.com, `--client personal`) in addition to email.
- **Ownership**: PA owns personal calendar management (read + create/modify/delete, subject to Adam's approval gates).
- **Workflow**:
  1. Scan events: `gog --client personal calendar events --from <date> --to <date> --plain --all-pages --calendars "<ids>"`
  2. For each event, check `calendar-rules.md` for a matching event-pattern rule.
  3. No matching rule → ask Adam what to do (create/modify/delete/ignore/remind/etc.).
  4. Once Adam decides, record a durable rule (event pattern → action) in `calendar-rules.md` and auto-apply to future matches.
  5. NEVER auto-create/modify/delete an event without Adam's explicit decision.
- **Rules file**: `calendar-rules.md` (workspace root).
- **Calendars (from `gog calendar calendars`)**:
  - `erickson.adam.m@gmail.com` — "Adam" (primary, owner)
  - `family01647135156556232360@group.calendar.google.com` — "Family" (owner)
  - `db57d2a07f2764adeac6b3e40624b11ec51aa99a9f1abfdba466f284fbb2851f@group.calendar.google.com` — "11" (owner)
  - `68c7509a9ca969e8b3af528244ad7555e88e4f121535b481c182151ddae8ec07@group.calendar.google.com` — "PA" (owner)
  - `f7d0729eb5432a9c40f846a81984d8eca02e0ec7621983301991753fc440e998@group.calendar.google.com` — "VTS" (owner)
  - `erickson.kim.a@gmail.com` — "kimberly erickson" (reader)
  - `beckas13@gmail.com` — "Mom S" (reader)
  - `erickson.charity.m@gmail.com` — "Daughter Charity <3" (reader)
  - `en.christian#holiday@group.v.calendar.google.com` — "Christian Holidays" (reader)
- **Note**: `--calendars` flag accepts calendar IDs (not display names); passing display names like "11" is interpreted as an index and errors. Use full IDs.

## Email Automation Directive (2026-09-06)
- **Goal**: Automate personal email (erickson.adam.m@gmail.com, `--client personal`) by learning Adam's preferences.
- **Workflow**:
  1. Scan unread inbox: `gog --client personal gmail search 'is:unread' --max 50`
  2. For each email, check `email-rules.md` for a matching sender/subject pattern.
  3. No matching rule → ask Adam what to do (reply/archive/forward/ignore/label/etc.).
  4. Once Adam decides, record a durable rule (sender + subject pattern → action) in `email-rules.md` and auto-apply to future matches.
  5. NEVER auto-act on a first-time sender/subject without Adam's explicit decision.
- **Rules file**: `email-rules.md` (workspace root).

## Application Form Auto-Fill Defaults (STANDING RULES)
- **Always scan for ALL fields** on any application form (including screening questions, EEO/demographic, signature, date, and any radio/checkbox groups below the fold). Never assume the form is complete until every field has been checked.
- **Gender**: always select **Male**.
- **Signature (type name)**: always fill **Adam M. Erickson**.
- **Date**: always fill **today's date**.
- **⚠️ Signature vs Date fields**: these are often two adjacent text inputs with opaque names (e.g., `qtn_..._...1` / `..._...2`). NEVER assume which is which by name ordering — always read the actual label text next to each input and verify the value lands in the correct field before submit.
- **Race/Ethnicity**: always select **White (Not Hispanic or Latino)** / Caucasian.
- **Veteran status**: always select **Yes / I am a Veteran**, and **Protected Veteran** if that option exists.
- **U.S. Citizenship**: always **Yes** (Adam is a U.S. citizen).
- **Clearance**: always **Secret** (active DoD Secret, Tier 3). Never select TS/SCI or polygraph.
- **Resume**: always generate a custom, ATS-friendly resume from `master-resume.md` tailored to the specific JD — never reuse a generic resume.

## Lessons Learned

## Promoted From Short-Term Memory (2026-08-25)

<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:27:30 -->
- Daily Dashboard (07:00 EDT): Sent formatted dashboard to Adam via iMessage; Job pipeline: 16 packages (6 ready, 10 pending JD review); ⚠️ Unemployment weekly cert (week ending 8/16) now 3 days past due; Habits: 0/0/0 — goals not yet defined [score=0.844 recalls=0 avg=0.620 source=memory/2026-08-19.md:27-30]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:31:32 -->
- Daily Dashboard (07:00 EDT): Finances: within $5K budget; No new calendar conflicts, vehicle data, or email items [score=0.844 recalls=0 avg=0.620 source=memory/2026-08-19.md:31-32]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:4:7 -->
- Heartbeat Checks (00:42 - 04:42 EDT): All hourly checks completed — no escalations, no blockers, no new items; 16 apply-ready packages still awaiting Adam's APPROVE; Unemployment weekly certification (week ending 8/16) still unconfirmed; Finances: month-to-date within $5K budget [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:4-7]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:8:8 -->
- Heartbeat Checks (00:42 - 04:42 EDT): No new email, calendar conflicts, or vehicle updates [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:8-8]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:11:13 -->
- Upcoming Today: Daily dashboard: 07:00 EDT; Daily job discovery: 08:00 EDT; Daily follow-up check: 10:00 EDT [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:11-13]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:16:18 -->
- Heartbeat Check (05:11 EDT): PA hourly heartbeat executed; No blockers or escalations detected; Status: Operational [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:16-18]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:21:24 -->
- Heartbeat Check (07:11 EDT): PA hourly heartbeat executed; No blockers or escalations detected; ⚠️ Unemployment weekly certification (week ending 8/16) now 3 days past due — escalated urgency; Status: Operational [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:21-24]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:35:38 -->
- Daily Job Discovery (08:00 EDT): Scanned ClearanceJobs, LinkedIn, USAJobs for cleared Java/SWE roles; **1 new ≥80% match:** AVUM INC — Software Engineer Senior (Remote, Secret, $115-160K, Java/Spring) — logged to job_applications.md; **1 stretch (75%):** GDIT — Software Engineer (Active Secret, Remote, $107-144K, generalist SWE); No new blockers; no applications submitted (all require Adam approval) [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:35-38]
<!-- openclaw-memory-promotion:memory:memory/2026-08-18.md:32:35 -->
- Next Actions: Adam: Confirm unemployment weekly certification completion (week ending 8/16); Adam: Review 15 apply-ready packages; Adam: Provide vehicle details for maintenance tracking; Adam: Sync school calendar and define piano goals [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-18.md:32-35]

## Promoted From Short-Term Memory (2026-08-26)

<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:39:39 -->
- Daily Job Discovery (08:00 EDT): Pipeline now: 17 apply-ready/review packages (6 ready in apply_ready/, 11 pending JD review) [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:39-39]
<!-- openclaw-memory-promotion:memory:memory/2026-08-19.md:42:44 -->
- Heartbeat Check (09:12 EDT): PA hourly heartbeat executed; No blockers or escalations detected; Status: Operational [score=0.812 recalls=0 avg=0.620 source=memory/2026-08-19.md:42-44]

## Promoted From Short-Term Memory (2026-08-30)

<!-- openclaw-memory-promotion:memory:memory/2026-08-18.md:43:43 -->
- Job Discovery Scan (08:00 EDT): All new matches logged to `memory/job_applications.md`. [score=0.800 recalls=0 avg=0.620 source=memory/2026-08-18.md:43-43]

## Promoted From Short-Term Memory (2026-09-01)

<!-- openclaw-memory-promotion:memory:memory/2026-08-18.md:39:42 -->
- Job Discovery Scan (08:00 EDT): Ran daily discovery across ClearanceJobs/LinkedIn/USAJobs via web search (no browser tool).; **1 new ≥80% match**: TEKsystems c/o Allegis — Senior Java SWE (Remote, Secret) — 82% fit → package ready.; 3 stretch matches (70-75%): Flexgen (Secret, mostly remote, needs Security+), IntelliDyne (DC onsite), Accenture Federal (Arlington onsite).; 8 roles rejected for clearance > Secret/polygraph (per weekly batch already logged). [score=0.810 recalls=0 avg=0.620 source=memory/2026-08-18.md:39-42]
<!-- openclaw-memory-promotion:memory:memory/2026-08-28.md:4:7 -->
- PA Daily Job Discovery (4:10 PM ET): **Status**: Browser control service unavailable on MacBook Pro. All web-based job scans (ClearanceJobs, LinkedIn, USAJobs) failed with connection errors. Same outage as Aug 24 heartbeat — no progress on browser restart.; **Heartbeat check**: HEARTBEAT.md last updated Aug 24 — still reports network outage, all external services down. No changes since then.; **Job applications tracker**: Last updated 2026-08-19. No new roles discovered today.... [score=0.801 recalls=0 avg=0.620 source=memory/2026-08-28.md:4-7]

## Promoted From Short-Term Memory (2026-09-02)

<!-- openclaw-memory-promotion:memory:memory/2026-08-28.md:11:11 -->
- PA Daily Job Discovery (4:10 PM ET): *Entry recorded at 4:10 PM ET by PA Daily Job Discovery cron.* [score=0.805 recalls=0 avg=0.620 source=memory/2026-08-28.md:11-11]
