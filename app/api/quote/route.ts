import { NextResponse } from "next/server";

// Receives quote requests from the contact form.
//
// REPLACE WITH YOUR FORM ENDPOINT
// Set FORM_FORWARD_URL in Vercel (e.g. https://formspree.io/f/xxxxxxx) and every
// submission is forwarded there as JSON. Or swap the forwarding block below for
// an email provider (Resend, Postmark, SendGrid) that emails gblhvac@hotmail.com.
const FORWARD_URL = process.env.FORM_FORWARD_URL;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot filled in: silently accept and drop.
  if (body._gotcha) return NextResponse.json({ ok: true });

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    email: String(body.email ?? "").trim(),
    propertyType: String(body.propertyType ?? ""),
    service: String(body.service ?? ""),
    emergency: String(body.emergency ?? "No"),
    message: String(body.message ?? "").slice(0, 5000),
    submittedAt: new Date().toISOString(),
  };

  if (!FORWARD_URL) {
    // Not configured yet. In development, log and succeed so the form can be tested.
    // In production, fail loudly so the visitor is told to call instead of a lead being lost.
    if (process.env.NODE_ENV !== "production") {
      console.log("[quote] FORM_FORWARD_URL not set; lead not delivered:", lead);
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[quote] FORM_FORWARD_URL not set; cannot deliver lead");
    return NextResponse.json({ ok: false, error: "Form not configured" }, { status: 503 });
  }

  const res = await fetch(FORWARD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    console.error("[quote] forward failed", res.status);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
