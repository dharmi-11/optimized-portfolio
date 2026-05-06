import type { Metadata } from "next";
import Link from "next/link";
import styles from "./playbook.module.css";
import { deploymentChecklist, learningGoals, resources, sprintDays } from "@/lib/content";

export const metadata: Metadata = {
  title: "Week 20 Playbook",
  description:
    "Daily production optimization and deployment plan covering image optimization, SEO, performance monitoring, security, and Vercel launch.",
  alternates: {
    canonical: "/playbook",
  },
};

export default function PlaybookPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tag}>Learning goals</p>
          <h1>Week 20 playbook for production optimization + deployment.</h1>
          <p>
            This page mirrors the image brief directly and turns it into an implementation
            checklist for the app. Every daily topic is included so the project is easy to
            explain, validate, and deploy.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryAction}>
              View the live portfolio
            </Link>
            <a href="#daily-schedule" className={styles.secondaryAction}>
              Jump to daily tasks
            </a>
          </div>
        </div>

        <div className={styles.goalPanel}>
          <h2>Learning goals from the image</h2>
          <ul>
            {learningGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <div>
          <p className={styles.tag}>Resources</p>
          <h2>Production references worth opening before deployment.</h2>
        </div>

        <div className={styles.resourceGrid}>
          {resources.map((resource) => (
            <a
              key={resource.title}
              className={styles.resourceCard}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{resource.label}</span>
              <strong>{resource.title}</strong>
              <p>{resource.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="daily-schedule" className={styles.scheduleSection}>
        <div>
          <p className={styles.tag}>Daily tasks</p>
          <h2>All five days are preserved, with their topics expanded into build steps.</h2>
        </div>

        <div className={styles.dayGrid}>
          {sprintDays.map((day) => (
            <article key={day.day} className={styles.dayCard}>
              <p className={styles.dayLabel}>{day.day}</p>
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

      <section className={styles.deploySection}>
        <div>
          <p className={styles.tag}>Day 5 deliverable</p>
          <h2>Production-ready Next.js app, ready for Vercel.</h2>
          <p>
            The codebase includes metadata routes, headers, performance capture, and a clear
            environment template so deployment is straightforward instead of rushed.
          </p>
        </div>

        <div className={styles.checklist}>
          {deploymentChecklist.map((item) => (
            <div key={item} className={styles.checklistItem}>
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.envSection}>
        <div>
          <p className={styles.tag}>Environment variables</p>
          <h2>Use safe defaults locally, then set real values in Vercel.</h2>
        </div>

        <pre className={styles.codeBlock}>
          <code>{`NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_WEB_VITALS=true
LIGHTHOUSE_TARGET_SCORE=95`}</code>
        </pre>
      </section>
    </main>
  );
}
