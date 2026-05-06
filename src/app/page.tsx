import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {
  deploymentChecklist,
  featuredProjects,
  performanceHighlights,
  sprintDays,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Week 20 - Production Optimization + Deployment</p>
            <h1>Ship a portfolio that is fast, searchable, measurable, and ready for launch.</h1>
            <p className={styles.lead}>
              This Next.js app turns the image brief into a polished production build. It
              covers every daily topic: image and font optimization, SEO metadata and
              sitemap work, Lighthouse-minded performance monitoring, environment-variable
              hygiene, security, and Vercel deployment readiness.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/playbook">
                Open the 5-day playbook
              </Link>
              <a className={styles.secondaryAction} href="#implementation">
                See the production stack
              </a>
            </div>
            <ul className={styles.heroChecklist}>
              <li>`next/image` + responsive `sizes`</li>
              <li>`next/font` with self-hosted local fonts</li>
              <li>Metadata, robots, sitemap, manifest</li>
              <li>Web-vitals reporting + security headers</li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualFrame}>
              <Image
                src="/hero-visual.svg"
                alt="Abstract dashboard showing optimization, analytics, and deployment panels"
                width={1200}
                height={960}
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                suppressHydrationWarning
              />
            </div>
          </div>
        </section>

        <section className={styles.metricsStrip} aria-label="Production metrics">
          {performanceHighlights.map((item) => (
            <article key={item.label} className={styles.metricCard}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section id="implementation" className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionTag}>Production checklist</p>
            <h2>Every topic from the image is implemented in the app, not just mentioned.</h2>
          </div>

          <div className={styles.featureGrid}>
            {featuredProjects.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <p className={styles.featureTone}>{feature.tone}</p>
                <h3>{feature.title}</h3>
                <p>{feature.summary}</p>
                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionTag}>5-day sprint</p>
            <h2>The delivery follows the exact day-by-day structure from the image.</h2>
          </div>

          <div className={styles.timeline}>
            {sprintDays.map((day) => (
              <article key={day.day} className={styles.dayCard}>
                <div className={styles.dayBadge}>{day.day}</div>
                <h3>{day.title}</h3>
                <p>{day.summary}</p>
                <ul>
                  {day.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaPanel}>
          <div>
            <p className={styles.sectionTag}>Deployment-ready</p>
            <h2>Vercel handoff, environment setup, and performance guardrails are already planned.</h2>
            <p className={styles.ctaCopy}>
              The app includes safe headers, an environment template, SEO routes, and a
              web-vitals endpoint so you can ship without backtracking through production
              chores later.
            </p>
          </div>

          <div className={styles.ctaList}>
            {deploymentChecklist.map((item) => (
              <div key={item} className={styles.ctaListItem}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
