## Portfolio

Production-ready Next.js portfolio app built from the Week 20 brief: production optimization + deployment.

## What is included

- Day 1: image optimization with `next/image` and font optimization with `next/font`
- Day 2: SEO metadata, canonical URLs, Open Graph, `robots.ts`, `sitemap.ts`, and `manifest.ts`
- Day 3: performance monitoring with `useReportWebVitals` and an `/api/insights` endpoint
- Day 4: environment-variable handling plus security headers in `next.config.ts`
- Day 5: deployment-ready portfolio and a `/playbook` page that documents the full sprint

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` and set values as needed:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_WEB_VITALS=true
LIGHTHOUSE_TARGET_SCORE=95
```

## Validate before deploy

```bash
npm run lint
npm run build
```

## Vercel deployment

1. Import the repository into Vercel.
2. Add the environment variables from `.env.example`.
3. Deploy and verify `/robots.txt`, `/sitemap.xml`, and link previews.
4. Run Lighthouse against the deployed URL and confirm the target score.
