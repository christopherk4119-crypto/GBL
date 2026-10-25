import { ArrowRight, CalendarCheck, Droplets, Fan, Flame, Refrigerator, Snowflake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

type Service = { title: string; href: string; text: string; icon: LucideIcon; tone: "warm" | "cool" };

const SERVICES: Service[] = [
  { title: "Heating", href: "/heating", icon: Flame, tone: "warm", text: "Furnace and boiler installation, repair and maintenance. Keep your home warm all Calgary winter." },
  { title: "Air Conditioning", href: "/air-conditioning", icon: Snowflake, tone: "cool", text: "AC installation, repair and tune-ups so you're ready for summer heat." },
  { title: "Refrigeration", href: "/refrigeration", icon: Refrigerator, tone: "cool", text: "Commercial refrigeration and walk-in cooler service for restaurants, stores and businesses." },
  { title: "Ventilation", href: "/ventilation", icon: Fan, tone: "cool", text: "Ventilation, air exchangers and ductwork for cleaner, healthier air." },
  { title: "Water Heater", href: "/water-heaters", icon: Droplets, tone: "warm", text: "Hot water tank repair and replacement for homes and businesses." },
  { title: "Maintenance Plans", href: "/maintenance-plans", icon: CalendarCheck, tone: "warm", text: "Seasonal furnace and AC tune-ups that prevent breakdowns and lower energy bills." },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Our Services</p>
        <h2 className="section-title">Everything HVAC. One Call.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/75">
          Heat, cooling, fresh air, hot water and refrigeration. Installed, repaired and maintained by one crew you can reach any hour.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const warm = s.tone === "warm";
            return (
              <Reveal key={s.title} delay={(i % 3) * 100} as="article" className="h-full">
                <div className="card card-hover relative flex h-full flex-col p-7">
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      warm ? "bg-flame/15 text-flame ring-1 ring-flame/40" : "bg-ice/15 text-ice ring-1 ring-ice/40"
                    }`}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    {/* Whole card links to the service page; "Get Quote" sits above it */}
                    <Link href={s.href} className="after:absolute after:inset-0 after:rounded-2xl hover:text-ice">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-white/75">{s.text}</p>
                  <a href="#contact" className="relative z-10 mt-6 inline-flex w-fit items-center gap-1.5 font-bold text-flame transition hover:gap-3 hover:text-flame-light">
                    Get Quote <ArrowRight className="h-4 w-4" aria-hidden />
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
