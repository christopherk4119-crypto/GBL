import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Contact from "../components/Contact";
import FaqSection from "../components/FaqSection";
import { SERVICES, type Faq } from "@/lib/services";
import { SERVICE_AREAS, SITE } from "@/lib/site";

const title = "HVAC FAQ Calgary | Furnace, AC & Refrigeration";
const description =
  "Answers to common Calgary heating, cooling, refrigeration and water heater questions from GBL HVAC LTD. Open 24/7. Call 403-970-6988.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq", siteName: SITE.name, locale: "en_CA", type: "website" },
};

// Questions about the business itself. Only these carry FAQPage schema on this page;
// service questions already have it on their own pages.
const GENERAL: Faq[] = [
  {
    q: "Are you really open 24 hours?",
    a: `Yes. ${SITE.name} is open 24 hours a day, 7 days a week, including weekends and holidays. Call ${SITE.phone} any time.`,
  },
  {
    q: "Who will I talk to when I call?",
    a: "You talk directly to Quinn, the owner. No call centre and no answering service.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Both. We handle furnaces, air conditioning, water heaters and ventilation for homes, and rooftop units, walk-in coolers and freezers, ice machines, hood fans, make-up air and commercial refrigeration for businesses.",
  },
  {
    q: "What areas do you serve?",
    a: `All of Calgary (${SERVICE_AREAS.filter((a) => a.includes("Calgary")).join(", ")}) plus ${SERVICE_AREAS.filter((a) => !a.includes("Calgary")).join(", ")}. Not sure if you're covered? Call ${SITE.phone}.`,
  },
  {
    q: "How do I get a quote?",
    a: `Call ${SITE.phone}, or fill in the free quote form at the bottom of any page and we'll get back to you shortly. For emergencies, calling is fastest.`,
  },
  {
    q: "Do you charge extra for after-hours calls?",
    a: "Ask when you call. We'll explain how the visit is charged before we come out, so there are no surprises.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="section-title">Calgary HVAC Questions, Answered</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/75">
            Straight answers about heating, cooling, refrigeration and water heaters. Don&apos;t see your question? Call us any time.
          </p>
          <div className="mt-8 text-center">
            <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
              <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
            </a>
          </div>

          <FaqSection faqs={GENERAL} heading="About GBL HVAC LTD" />

          {SERVICES.map((s) => (
            <div key={s.slug}>
              <FaqSection faqs={s.faqs} heading={s.h1.replace(/ in Calgary$/, "")} schema={false} />
              <Link href={`/${s.slug}`} className="mt-4 inline-flex items-center gap-2 font-bold text-flame hover:text-flame-light">
                More about {s.name.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}
