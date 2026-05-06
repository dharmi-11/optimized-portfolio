export const learningGoals = [
  "Image optimization (next/image)",
  "Font optimization (next/font)",
  "SEO (metadata, sitemap)",
  "Performance monitoring",
  "Vercel deployment",
];

export const resources = [
  {
    label: "Next.js",
    title: "Next.js Production Checklist",
    href: "https://nextjs.org/docs/app/guides/production-checklist",
    description: "A launch checklist for performance, caching, SEO, monitoring, and security.",
  },
  {
    label: "Vercel",
    title: "Vercel Documentation",
    href: "https://vercel.com/docs",
    description: "Deployment, environment variables, domains, analytics, and edge configuration.",
  },
];

export const sprintDays = [
  {
    day: "Day 1",
    title: "Image and font optimization",
    summary:
      "Use `next/image` for responsive media and `next/font` for self-hosted typography so the portfolio loads quickly and stays visually sharp.",
    topics: [
      "Hero artwork rendered with `next/image`, `priority`, and responsive `sizes`.",
      "Display and body fonts loaded through `next/font` with subset control and `display: swap`.",
      "Layout designed to avoid CLS by preserving media dimensions and stable typography.",
    ],
  },
  {
    day: "Day 2",
    title: "SEO best practices and metadata",
    summary:
      "Set up metadata, canonical URLs, social cards, robots rules, and a sitemap so the project is discoverable and shareable.",
    topics: [
      "Global metadata in the root layout with Open Graph and Twitter settings.",
      "Dedicated `robots.ts`, `sitemap.ts`, and `manifest.ts` routes.",
      "Structured data on the home page for a stronger search presence.",
    ],
  },
  {
    day: "Day 3",
    title: "Performance analysis (Lighthouse)",
    summary:
      "Design for Core Web Vitals from the start and capture metrics so Lighthouse improvements can be verified after deployment.",
    topics: [
      "Lean component structure with responsive media and minimal client-side JavaScript.",
      "A `useReportWebVitals` client hook posts metrics to an API endpoint.",
      "Performance targets are documented so Lighthouse review has clear expectations.",
    ],
  },
  {
    day: "Day 4",
    title: "Environment variables and security",
    summary:
      "Protect the deployment with safe defaults, explicit environment settings, and hardened response headers.",
    topics: [
      "Environment variable template for the public site URL and monitoring toggles.",
      "Security headers in `next.config.ts`, including CSP, `X-Frame-Options`, and HSTS.",
      "Server route validation for incoming performance payloads.",
    ],
  },
  {
    day: "Day 5",
    title: "Project: deploy optimized portfolio",
    summary:
      "Ship the finished portfolio to Vercel with metadata, monitoring, and documentation already in place.",
    topics: [
      "Deployment checklist for environment variables, build validation, and post-launch review.",
      "Playbook page that explains the entire five-day delivery clearly.",
      "Production-ready structure built for immediate Vercel deployment.",
    ],
  },
];

export const performanceHighlights = [
  {
    label: "Image Pipeline",
    value: "AVIF / WebP",
    description: "Configured for modern formats while using responsive `sizes` for hero media.",
  },
  {
    label: "SEO Surface",
    value: "100%",
    description: "Metadata, canonical links, robots, sitemap, and manifest are all present.",
  },
  {
    label: "Monitoring",
    value: "Web Vitals",
    description: "Client metrics are sent to `/api/insights` for production performance tracking.",
  },
  {
    label: "Launch Target",
    value: "Vercel",
    description: "Built to deploy cleanly with environment variables and hardened headers.",
  },
];

export const featuredProjects = [
  {
    tone: "Optimization",
    title: "Fast media and font delivery",
    summary:
      "The UI uses `next/image` and `next/font` so typography and visuals feel intentional without dragging performance.",
    points: [
      "Responsive hero art with reserved layout space.",
      "Self-hosted display and body fonts for consistent rendering.",
      "No oversized asset pipeline or decorative JS-heavy effects.",
    ],
  },
  {
    tone: "SEO",
    title: "Search-friendly architecture",
    summary:
      "The app is ready for indexing and link previews from the first deployment instead of needing cleanup later.",
    points: [
      "Open Graph + Twitter metadata for previews.",
      "Dynamic sitemap and robots generation in the App Router.",
      "Structured data JSON-LD to describe the site.",
    ],
  },
  {
    tone: "Monitoring",
    title: "Performance capture loop",
    summary:
      "Core Web Vitals can be measured after deployment, which makes Lighthouse analysis actionable rather than speculative.",
    points: [
      "Client hook reports CLS, FCP, FID, INP, LCP, and TTFB.",
      "API route validates the payload before accepting it.",
      "Monitoring can be toggled with a public environment variable.",
    ],
  },
  {
    tone: "Deployment",
    title: "Security and Vercel readiness",
    summary:
      "Headers, environment variables, and documentation are in place so the final deploy step is low-risk.",
    points: [
      "CSP and safety headers configured in `next.config.ts`.",
      "`.env.example` documents the required deployment values.",
      "README includes install, build, and deployment guidance.",
    ],
  },
];

export const deploymentChecklist = [
  "Set `NEXT_PUBLIC_SITE_URL` to the final production domain before launch.",
  "Leave `NEXT_PUBLIC_ENABLE_WEB_VITALS=true` in production so monitoring stays active.",
  "Run `npm run lint` and `npm run build` locally before deploying.",
  "Review generated metadata, `/robots.txt`, and `/sitemap.xml` after deployment.",
  "Connect the repository to Vercel and add the environment variables in project settings.",
];
