"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, Phone, Send } from "lucide-react";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";

// REPLACE WITH YOUR FORM ENDPOINT
// Option A (Formspree): set NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx in Vercel.
// Option B (default): leave it unset and the form posts to the built-in API route
// at /api/quote, which forwards to FORM_FORWARD_URL (see app/api/quote/route.ts).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/quote";

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [emergency, setEmergency] = useState(false);
  const [property, setProperty] = useState<"Residential" | "Commercial">("Residential");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.propertyType = property;
    data.emergency = emergency ? "Yes" : "No";

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
      setEmergency(false);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-10 text-center" role="status">
        <CheckCircle2 className="h-16 w-16 text-emerald-400" aria-hidden />
        <p className="mt-5 text-2xl font-extrabold">Thanks! Quinn will get back to you shortly.</p>
        <p className="mt-3 text-white/70">Need help right now? Call anytime.</p>
        <a href={SITE.tel} className="btn-flame mt-6">
          <Phone className="h-5 w-5" aria-hidden /> {SITE.phone}
        </a>
      </div>
    );
  }

  const toggleBtn = (active: boolean) =>
    `min-h-[52px] rounded-xl border-2 px-4 py-3 font-bold transition ${
      active ? "border-ice bg-ice/15 text-ice" : "border-white/15 text-white/70 hover:border-white/40"
    }`;

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ice">Name *</span>
          <input name="name" required autoComplete="name" className="field" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ice">Phone *</span>
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field" placeholder="403-555-0123" />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-ice">Email</span>
        <input name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" />
      </label>

      <fieldset>
        <legend className="mb-2 block text-sm font-semibold text-ice">Property Type</legend>
        <div className="grid grid-cols-2 gap-3">
          {(["Residential", "Commercial"] as const).map((p) => (
            <button key={p} type="button" aria-pressed={property === p} onClick={() => setProperty(p)} className={toggleBtn(property === p)}>
              {p}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-ice">Service Needed</span>
        <select name="service" className="field appearance-none" defaultValue="Heating / Furnace">
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s} className="bg-navy-dark">
              {s}
            </option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className="mb-2 block text-sm font-semibold text-ice">Is this an emergency?</legend>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            aria-pressed={!emergency}
            onClick={() => setEmergency(false)}
            className={toggleBtn(!emergency)}
          >
            No
          </button>
          <button
            type="button"
            aria-pressed={emergency}
            onClick={() => setEmergency(true)}
            className={`min-h-[52px] rounded-xl border-2 px-4 py-3 font-bold transition ${
              emergency ? "border-flame bg-flame/20 text-flame-light" : "border-white/15 text-white/70 hover:border-white/40"
            }`}
          >
            Yes
          </button>
        </div>
      </fieldset>

      {emergency && (
        <div className="rounded-2xl border-2 border-flame bg-flame/15 p-5 text-center" role="alert">
          <p className="flex items-center justify-center gap-2 text-lg font-extrabold">
            <AlertTriangle className="h-6 w-6 text-flame" aria-hidden />
            For emergencies, calling is fastest: {SITE.phone}
          </p>
          <a href={SITE.tel} className="btn-flame mt-4 w-full animate-glow-pulse py-4 text-xl">
            <Phone className="h-6 w-6" aria-hidden /> Call {SITE.phone} Now
          </a>
        </div>
      )}

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-ice">Message</span>
        <textarea name="message" rows={4} className="field min-h-[120px]" placeholder="Tell us what's going on with your system." />
      </label>

      {/* Honeypot for basic spam protection */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status === "error" && (
        <p className="rounded-xl border border-flame/50 bg-flame/10 p-4 text-sm" role="alert">
          Sorry, your request didn&apos;t go through. Please call{" "}
          <a href={SITE.tel} className="font-bold text-flame underline">
            {SITE.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${SITE.email}`} className="font-bold text-ice underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-flame w-full py-4 text-lg disabled:opacity-60">
        <Send className="h-5 w-5" aria-hidden />
        {status === "sending" ? "Sending…" : "Request My Free Quote"}
      </button>
    </form>
  );
}
