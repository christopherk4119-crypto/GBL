import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Contact from "../components/Contact";
import FaqSection from "../components/FaqSection";
import PageHero from "../components/PageHero";
import { getService, type Faq } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

const title = "Commercial HVAC Calgary | Rooftop Units & Refrigeration";
const description =
  "Commercial HVAC and refrigeration in Calgary: rooftop units, walk-ins, ice machines, hood fans, make-up air and maintenance. Open 24/7. 403-970-6988.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/commercial" });

const SERVICES = [
  "rooftop-units",
  "refrigeration",
  "refrigeration/walk-in-coolers-freezers",
  "refrigeration/ice-machines",
  "ventilation/hood-fans-make-up-air",
  "heating",
  "air-conditioning/ac-repair",
  "maintenance-plans",
];

const WHO = ["Restaurants and cafés", "Grocery and convenience stores", "Bars and hotels", "Offices and retail", "Warehouses and shops", "Caterers and food businesses"];

const WHY = [
  "Open 24/7: a failure at closing time gets a real answer",
  "One company for every system: heating, cooling, ventilation, refrigeration",
  "Talk to the owner: no call centre",
  "Scheduled around your hours: before opening, after close, overnight",
  "Straight answers: options and cost before work starts",
];

const STEPS = [
  "Call 403-970-6988 any hour: tell us the equipment and what it's doing",
  "Protect the business: we tell you what to do while we're on the way",
  "Diagnose: the whole system, not just the first part we see",
  "Repair, or a straight repair-vs-replace answer",
  "Prevent the next one: maintenance timed around your hours",
];

const FAQS: Faq[] = [
  { q: "Do you answer commercial calls after hours?", a: "Yes. We're open 24 hours, 7 days a week, for restaurants, stores, offices and other businesses." },
  { q: "Can you work around our opening hours?", a: "Yes. We can schedule repairs and maintenance before opening, after close or overnight." },
  { q: "Do you offer maintenance contracts?", a: "Yes. We set up scheduled maintenance for rooftop units, heating, make-up air, walk-ins, ice machines and refrigeration, with every visit documented." },
  { q: "Can one company handle everything in our building?", a: "That's the idea: heating, cooling, ventilation, kitchen exhaust and make-up air, and refrigeration, all from one call." },
  { q: "Do you clean kitchen hoods or service fire suppression?", a: "No. Grease cleaning and fire suppression are separate specialties. We repair the hood fans and make-up air units." },
];

export default function CommercialPage() {
  const services = SERVICES.map(getService).filter((s) => s !== undefined);
  return (
    <>
      <PageHero
        title="Commercial HVAC & Refrigeration in Calgary"
        lede="Rooftop units, walk-in coolers and freezers, ice machines, hood fans and make-up air for Calgary businesses. One call, any system, any hour."
        crumb="Commercial"
        path="/commercial"
      />
      <div className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">Commercial services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="card card-hover flex flex-col justify-between gap-3 p-5">
                <span>
                  <span className="block text-lg font-extrabold">{s.h1.replace(/ in Calgary$/, "")}</span>
                  <span className="mt-1 block text-sm text-white/70">{s.lede}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-flame" aria-hidden />
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="card p-6">
              <h2 className="text-xl font-extrabold md:text-2xl">Who we work for</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {WHO.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ice" aria-hidden /> {w}
                  </li>
                ))}
              </ul>
            </section>
            <section className="card p-6">
              <h2 className="text-xl font-extrabold md:text-2xl">Why businesses call us</h2>
              <ul className="mt-4 space-y-2.5">
                {WHY.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-flame" aria-hidden /> {w}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-extrabold md:text-3xl">How a commercial call runs</h2>
            <ol className="mt-5 grid gap-3">
              {STEPS.map((step, i) => (
                <li key={step} className="card flex items-start gap-4 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flame font-black text-white">{i + 1}</span>
                  <span className="pt-1.5 text-white/85">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="max-w-4xl">
            <FaqSection faqs={FAQS} />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
