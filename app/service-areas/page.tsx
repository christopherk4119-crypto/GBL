import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Contact from "../components/Contact";
import FaqSection from "../components/FaqSection";
import PageHero from "../components/PageHero";
import type { Faq } from "@/lib/services";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const title = "HVAC Service Areas | Calgary, Airdrie, Okotoks & More";
const description =
  "GBL HVAC LTD serves all of Calgary plus Airdrie, Cochrane, Chestermere, Okotoks, High River, Strathmore, Canmore, Banff and Red Deer. Open 24/7.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/service-areas" });

// Example communities only; we serve the whole city.
const QUADRANTS = [
  { name: "NW Calgary", examples: "Panorama Hills, Tuscany, Royal Oak, Varsity, Edgemont, Evanston, Kensington" },
  { name: "NE Calgary", examples: "Saddle Ridge, Redstone, Cityscape, Martindale, Taradale, Skyview Ranch, Bridgeland" },
  { name: "SW Calgary", examples: "Aspen Woods, Springbank Hill, Signal Hill, Altadore, Marda Loop, Evergreen, Woodbine" },
  { name: "SE Calgary", examples: "Mahogany, Auburn Bay, McKenzie Towne, Cranston, Seton, Copperfield, Inglewood" },
];

const TOWNS = [
  { name: "Airdrie", where: "just north of Calgary" },
  { name: "Cochrane", where: "west of Calgary" },
  { name: "Chestermere", where: "east of Calgary" },
  { name: "Strathmore", where: "east on the Trans-Canada" },
  { name: "Okotoks", where: "south of Calgary" },
  { name: "High River", where: "south of Okotoks" },
  { name: "Canmore", where: "in the Bow Valley" },
  { name: "Banff", where: "in the Bow Valley" },
  { name: "Red Deer", where: "north up the QEII" },
];

const FAQS: Faq[] = [
  { q: "Do you cover all of Calgary?", a: "Yes. NW, NE, SW and SE Calgary, every community." },
  { q: "Do you come out to Canmore, Banff or Red Deer?", a: `Yes. For towns further from Calgary, call ${SITE.phone} to check timing for your job.` },
  { q: "My town isn't listed. Can you still come?", a: `Maybe. Call ${SITE.phone} and ask. We'll tell you straight.` },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas: Calgary & Surrounding Towns"
        lede="Heating, cooling and refrigeration service across all of Calgary and nearby towns, 24 hours a day."
        crumb="Service Areas"
        path="/service-areas"
      />
      <div className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">All of Calgary</h2>
          <p className="mt-2 text-white/75">Every quadrant, every community. A few examples:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {QUADRANTS.map((q) => (
              <div key={q.name} className="card p-5">
                <h3 className="flex items-center gap-2 text-lg font-extrabold">
                  <MapPin className="h-5 w-5 text-flame" aria-hidden /> {q.name}
                </h3>
                <p className="mt-2 text-white/75">{q.examples}, and more.</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-extrabold md:text-3xl">Surrounding towns</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TOWNS.map((t) => (
              <li key={t.name} className="card flex items-center gap-3 p-4">
                <MapPin className="h-5 w-5 shrink-0 text-ice" aria-hidden />
                <span>
                  <span className="font-bold">{t.name}</span> <span className="text-white/65">· {t.where}</span>
                </span>
              </li>
            ))}
          </ul>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <h2 className="text-xl font-extrabold">For homes</h2>
              <p className="mt-2 text-white/75">
                <Link href="/heating/furnace-repair" className="text-ice hover:underline">Furnace repair</Link>,{" "}
                <Link href="/heating/furnace-installation" className="text-ice hover:underline">new furnaces</Link>,{" "}
                <Link href="/air-conditioning" className="text-ice hover:underline">air conditioning</Link>,{" "}
                <Link href="/water-heaters" className="text-ice hover:underline">hot water tanks</Link> and{" "}
                <Link href="/ventilation/hrv" className="text-ice hover:underline">HRVs</Link>.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-extrabold">For businesses</h2>
              <p className="mt-2 text-white/75">
                <Link href="/rooftop-units" className="text-ice hover:underline">Rooftop units</Link>,{" "}
                <Link href="/refrigeration/walk-in-coolers-freezers" className="text-ice hover:underline">walk-ins</Link>,{" "}
                <Link href="/refrigeration/ice-machines" className="text-ice hover:underline">ice machines</Link> and{" "}
                <Link href="/ventilation/hood-fans-make-up-air" className="text-ice hover:underline">hood fans &amp; make-up air</Link>.{" "}
                <Link href="/commercial" className="font-bold text-flame hover:underline">All commercial services</Link>
              </p>
            </div>
          </section>

          <div className="mt-10">
            <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
              <Phone className="h-5 w-5" aria-hidden /> Not sure if we cover you? Call {SITE.phone}
            </a>
          </div>

          <div className="max-w-4xl">
            <FaqSection faqs={FAQS} />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
