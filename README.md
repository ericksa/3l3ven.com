# 3l3ven.com

DJ & Entertainment Booking Website for Eleven Entertainment

## Overview

This is the official website for 3l3ven.com, the digital presence of Eleven Entertainment. The site is built with VitePress and deployable to GitHub Pages.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

**Latest update**: 2026-11-26 - Site content ready for VitePress deployment

## Repository

- GitHub: https://github.com/ericksa/3l3ven.com

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The built output will be in `docs/.vitepress/dist/`.

## Domain

- Primary: 3l3ven.com
- GitHub Pages: ericksa.github.io/3l3ven.com (or custom domain)

## Project Structure

```
├── .github/
│   └── workflows/
│       └── pages-deploy.yml    # GitHub Actions deployment workflow
├── docs/
│   ├── index.md                # Home page
│   ├── about.md                # About Eleven Entertainment
│   ├── booking.md              # Booking form
│   ├── contact.md              # Contact information
│   └── .vitepress/
│       ├── config.ts           # VitePress configuration
│       └── cname               # Custom domain file
├── package.json
└── README.md
```

## Features

- Home page with hero section and key highlights
- About page with DJ biography and equipment info
- Booking form for event reservations
- Contact page with location map and contact info
- Responsive design for all devices
- SEO optimized with social preview images