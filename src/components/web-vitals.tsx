"use client";

import { useReportWebVitals } from "next/web-vitals";

type WebVitalMetric = {
  id: string;
  name: "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";
  value: number;
  delta: number;
  rating?: "good" | "needs-improvement" | "poor";
  navigationType?: string;
};

export function WebVitals() {
  useReportWebVitals((metric) => {
    const payload: WebVitalMetric = {
      id: metric.id,
      name: metric.name as WebVitalMetric["name"],
      value: metric.value,
      delta: metric.delta,
      rating: metric.rating,
      navigationType: "navigationType" in metric ? String(metric.navigationType) : undefined,
    };

    if (process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS === "false") {
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      console.info("[client-web-vitals]", payload);
      return;
    }

    const body = JSON.stringify(payload);

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/insights", body);
      return;
    }

    void fetch("/api/insights", {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      keepalive: true,
    });
  });

  return null;
}
