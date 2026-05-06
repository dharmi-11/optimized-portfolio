import { NextResponse } from "next/server";

type VitalPayload = {
  id: string;
  name: "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";
  value: number;
  delta: number;
  rating?: "good" | "needs-improvement" | "poor";
  navigationType?: string;
};

const validMetricNames = new Set<VitalPayload["name"]>([
  "CLS",
  "FCP",
  "FID",
  "INP",
  "LCP",
  "TTFB",
]);

function isVitalPayload(value: unknown): value is VitalPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const payload = value as Partial<VitalPayload>;

  return (
    typeof payload.id === "string" &&
    typeof payload.value === "number" &&
    typeof payload.delta === "number" &&
    typeof payload.name === "string" &&
    validMetricNames.has(payload.name as VitalPayload["name"])
  );
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!isVitalPayload(payload)) {
      return NextResponse.json({ error: "Invalid web-vitals payload." }, { status: 400 });
    }

    if (process.env.NODE_ENV !== "production") {
      console.info("[web-vitals]", payload);
    }

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Malformed JSON body." }, { status: 400 });
  }
}
