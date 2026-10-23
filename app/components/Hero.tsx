import { CheckCircle2, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const TRUST = ["Open 24 Hours, 7 Days", "Residential & Commercial", "Install, Repair & Maintenance", "Serving All of Calgary"];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-dark">
      {/* Fire (left) and ice (right) glows */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-flame/25 blur-[120px]" />
        <div className="absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-ice/20 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark" />
      </div>

      {/* Signature light streak sweeping across */}
      <svg aria-hidden viewBox="0 0 1440 920" preserveAspectRatio="none" className="absolute inset-0 -z-10 h-full w-full">
        <defs>
          <linearGradient id="hero-streak" x1="0" x2="1">
            <stop offset="0" stopColor="#A8DDE8" stopOpacity="0" />
            <stop offset="0.35" stopColor="#D4F1F7" stopOpacity="0.9" />
            <stop offset="0.7" stopColor="#A8DDE8" stopOpacity="0.7" />
            <stop offset="1" stopColor="#A8DDE8" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-glow" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <path d="M-60 860 C 420 720, 940 420, 1500 300" fill="none" stroke="#A8DDE8" strokeWidth="22" opacity="0.18" filter="url(#hero-glow)" className="animate-shimmer" />
        <path d="M-60 860 C 420 720, 940 420, 1500 300" fill="none" stroke="url(#hero-streak)" strokeWidth="2.5" opacity="0.7" />
        <path
          d="M-60 860 C 420 720, 940 420, 1500 300"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="120 1480"
          opacity="0.8"
          className="animate-sweep"
        />
        <path d="M-60 900 C 460 780, 980 500, 1500 400" fill="none" stroke="url(#hero-streak)" strokeWidth="1" opacity="0.4" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ice/30 bg-ice/5 px-4 py-1.5 text-sm font-semibold text-ice">
            <span className="text-flame">●</span> {SITE.tagline}
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            No Heat? No Problem.
            <span className="mt-2 block bg-gradient-to-r from-flame-light via-white to-ice bg-clip-text text-transparent">
              Calgary&apos;s 24/7 HVAC Experts.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Heating, Air Conditioning, Refrigeration, Ventilation &amp; Water Heaters. Installation, Maintenance &amp; Repair for
            Homes and Businesses.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
              <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
            </a>
            <a href="#contact" className="btn-ice px-8 py-4 text-lg">
              Get a Free Quote
            </a>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy/60 px-4 py-3.5 text-sm font-semibold backdrop-blur-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
