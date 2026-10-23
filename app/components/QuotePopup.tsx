"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Phone, X } from "lucide-react";
import { LogoMark } from "./Logo";
import { SITE } from "@/lib/site";

const DELAY_MS = 4000;
const SEEN_KEY = "gbl-quote-popup-seen";

// After 4 seconds on the site, offer: call now or request a free quote.
// Shows once per browser session. On phones it's a bottom sheet rather than a
// full-screen overlay, so it doesn't hide the page (Google penalises intrusive interstitials).
export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;

    const t = window.setTimeout(() => {
      // Don't interrupt someone already filling in the quote form.
      if (document.activeElement?.closest("form")) return;
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:items-center md:p-6">
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 hidden cursor-default bg-black/60 backdrop-blur-sm md:block"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-popup-title"
        className="relative w-full animate-popup-in rounded-t-3xl border border-ice/30 bg-navy-dark p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_60px_rgba(0,0,0,0.6)] outline-none md:max-w-md md:rounded-3xl md:p-8 md:shadow-[0_0_60px_rgba(168,221,232,0.2)]"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-3">
          <LogoMark id="pop" className="h-12 w-12 shrink-0" />
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open 24/7
          </span>
        </div>
        <h2 id="quote-popup-title" className="mt-4 text-2xl font-black leading-tight md:text-3xl">
          Need heating or cooling help?
        </h2>
        <p className="mt-2 text-white/75">Talk to Quinn now, or send a quick request and we&apos;ll get back to you shortly.</p>

        <div className="mt-6 grid gap-3">
          <a href={SITE.tel} onClick={() => setOpen(false)} className="btn-flame w-full py-4 text-lg">
            <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-ice w-full py-4 text-lg">
            <FileText className="h-5 w-5" aria-hidden /> Request a Free Quote
          </a>
        </div>
        <button type="button" onClick={() => setOpen(false)} className="mt-4 w-full py-2 text-sm text-white/50 hover:text-white/80">
          No thanks, just looking
        </button>
      </div>
    </div>
  );
}
