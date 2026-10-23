import { MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICE_AREAS, SITE } from "@/lib/site";

export default function ServiceArea() {
  return (
    <section id="service-area" className="section">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow">Service Area</p>
        <h2 className="section-title">Serving Calgary &amp; Surrounding Areas</h2>

        <Reveal>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((a) => (
              <li key={a} className="card flex w-[calc(50%-0.375rem)] items-center justify-center gap-2 px-4 py-4 font-semibold sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5625rem)]">
                <MapPin className="h-5 w-5 shrink-0 text-flame" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-10 text-lg text-white/80">Not sure if we cover you?</p>
        <a href={SITE.tel} className="btn-flame mt-4 px-8 py-4 text-lg">
          <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
        </a>
      </div>
    </section>
  );
}
