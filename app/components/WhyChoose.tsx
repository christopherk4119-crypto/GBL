import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const REASONS = [
  { emoji: "🕐", title: "Open 24 Hours", text: "Day, night, weekend or holiday, we pick up." },
  { emoji: "🔥❄️", title: "Heating AND Cooling", text: "One company for every system in your building." },
  { emoji: "🏠🏢", title: "Residential & Commercial", text: "From family homes to restaurants and offices." },
  { emoji: "📞", title: "Talk Directly to Quinn", text: "No call centres. You speak to the owner." },
];

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Why GBL</p>
        <h2 className="section-title">Why Calgary Calls GBL HVAC</h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 90} className="h-full">
              <div className="card card-hover h-full p-7 text-center">
                <div className="mb-4 text-4xl" aria-hidden>
                  {r.emoji}
                </div>
                <h3 className="text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-white/75">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
            <Phone className="h-5 w-5" aria-hidden /> Call Quinn: {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
