import { ChevronDown } from "lucide-react";
import JsonLd from "./JsonLd";
import type { Faq } from "@/lib/services";

// FAQ accordion with automatic FAQPage schema.
export default function FaqSection({ faqs, heading = "Frequently Asked Questions" }: { faqs: Faq[]; heading?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="mt-16">
      <JsonLd data={schema} />
      <h2 className="text-2xl font-extrabold md:text-3xl">{heading}</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="card group p-5 open:border-ice/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
              {f.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-ice transition group-open:rotate-180" aria-hidden />
            </summary>
            <p className="mt-3 leading-relaxed text-white/80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
