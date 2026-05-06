function resolveSiteUrl() {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (!candidate) {
    if (vercelUrl) {
      return `https://${vercelUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
    }

    return process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com";
  }

  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    if (vercelUrl) {
      return `https://${vercelUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
    }

    return process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com";
  }
}

export const siteConfig = {
  name: "Portfolio",
  description:
    "A production-ready Next.js portfolio that demonstrates image optimization, SEO, performance monitoring, security, and deployment best practices.",
  url: resolveSiteUrl(),
  author: "Codex",
  keywords: [
    "Next.js portfolio",
    "production optimization",
    "Vercel deployment",
    "technical portfolio",
    "web performance",
  ],
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/playbook", label: "Week 20 Playbook" },
  {
    href: "https://nextjs.org/docs/app/building-your-application/optimizing",
    label: "Next.js Docs",
  },
] as const;
