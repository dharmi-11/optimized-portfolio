import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { WebVitals } from "@/components/web-vitals";
import { navItems, siteConfig } from "@/lib/site";

const bodyFont = localFont({
  src: "./fonts/segoeui.ttf",
  variable: "--font-body",
  display: "swap",
});

const displayFont = localFont({
  src: "./fonts/bahnschrift.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-visual.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio production optimization dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/hero-visual.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="site-shell">
          <Navigation items={navItems} />
          {children}
          <footer className="site-footer">
            <p>{siteConfig.name}</p>
            <div className="site-footer-links">
              <span>Production-ready Next.js portfolio</span>
              <span>Image optimization, SEO, performance, security, deployment</span>
            </div>
          </footer>
        </div>
        <WebVitals />
      </body>
    </html>
  );
}
