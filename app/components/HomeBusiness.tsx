import { Building2, CheckCircle2, Home } from "lucide-react";
import Reveal from "./Reveal";

const PANELS = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    title: "For Your Home",
    // Placeholder illustration: replace with a real project photo in /public/images/
    image: "/images/residential.svg",
    items: ["Furnace installation & repair", "AC installation & repair", "Seasonal tune-ups", "Water heaters (tank & tankless)", "Ventilation & air exchangers"],
    cta: "Book Home Service",
    accent: "flame",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    title: "For Your Business",
    // Placeholder illustration: replace with a real project photo in /public/images/
    image: "/images/commercial.svg",
    items: ["Rooftop units (RTUs)", "Commercial refrigeration", "Walk-in coolers & freezers", "Commercial ventilation", "Maintenance contracts"],
    cta: "Request Commercial Quote",
    accent: "ice",
  },
] as const;

export default function HomeBusiness() {
  return (
    <section className="section bg-navy-dark">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Residential &amp; Commercial</p>
        <h2 className="section-title">Homes and Businesses. We Do Both.</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PANELS.map((p, i) => {
            const Icon = p.icon;
            const isFlame = p.accent === "flame";
            return (
              <Reveal key={p.id} delay={i * 120}>
                <div
                  id={p.id}
                  className="group relative isolate flex min-h-[480px] scroll-mt-28 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-8 transition duration-300 hover:border-ice/60 md:p-10"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-dark via-navy-dark/75 to-navy/10" />

                  <span
                    className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                      isFlame ? "bg-flame/20 text-flame-light" : "bg-ice/20 text-ice"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden /> {p.label}
                  </span>
                  <h3 className="text-3xl font-black md:text-4xl">{p.title}</h3>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-white/85">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${isFlame ? "text-flame" : "text-ice"}`} aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`${isFlame ? "btn-flame" : "btn-ice"} mt-8 w-full sm:w-fit`}>
                    {p.cta}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
