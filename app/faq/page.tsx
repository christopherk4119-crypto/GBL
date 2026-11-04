import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Contact from "../components/Contact";
import FaqSection from "../components/FaqSection";
import { SERVICES } from "@/lib/services";
import { GENERAL_FAQS } from "@/lib/faq";
import { SITE } from "@/lib/site";

const title = "HVAC FAQ Calgary | Furnace, AC & Refrigeration";
const description =
  "Answers to common Calgary heating, cooling, refrigeration and water heater questions from GBL HVAC LTD. Open 24/7. Call 403-970-6988.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/faq" });


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

          <FaqSection faqs={GENERAL_FAQS} heading="About GBL HVAC LTD" schema={false} />

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
