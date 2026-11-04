import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Contact from "../components/Contact";
import PageHero from "../components/PageHero";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const title = "About GBL HVAC LTD | Calgary 24/7 HVAC Company";
const description =
  "GBL HVAC LTD is a Calgary heating, cooling and refrigeration company owned by Quinn Lou. Open 24/7 for homes and businesses. Call 403-970-6988.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/about" });

const HOW = [
  "Open 24 hours, 7 days a week: when you call, someone answers",
  "You talk directly to Quinn: no call centre, no answering service",
  "Straight answers: what's wrong and your options before any work starts",
  "Honest repair-vs-replace advice: we don't push new equipment you don't need",
  "Homes and businesses: from family homes to restaurants and rooftop units",
];

const WHAT = [
  { label: "Furnaces & boilers", href: "/heating" },
  { label: "Air conditioning", href: "/air-conditioning" },
  { label: "Hot water tanks", href: "/water-heaters" },
  { label: "Ventilation & HRVs", href: "/ventilation" },
  { label: "Rooftop units", href: "/rooftop-units" },
  { label: "Walk-ins, ice machines & refrigeration", href: "/refrigeration" },
  { label: "Hood fans & make-up air", href: "/ventilation/hood-fans-make-up-air" },
  { label: "Maintenance plans", href: "/maintenance-plans" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GBL HVAC LTD"
        lede="A Calgary heating, cooling and refrigeration company, owned and run by Quinn Lou. Open 24/7 for homes and businesses."
        crumb="About"
        path="/about"
      />
      <div className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            {/* TODO(Quinn): 2–3 sentences on his story: when he started in the trade, why he started GBL. */}
            <h2 className="text-2xl font-extrabold md:text-3xl">One call, any system, any hour</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              {SITE.name} handles installation, maintenance and repair for heating, air conditioning, refrigeration, ventilation and hot water tanks. When
              a furnace dies at 2am in a Calgary cold snap, or a walk-in cooler starts warming up at closing time, Quinn picks up.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold md:text-3xl">How we work</h2>
            <ul className="mt-4 space-y-2.5">
              {HOW.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-flame" aria-hidden /> {h}
                </li>
              ))}
            </ul>

            {/* TODO(Quinn): licences and tickets (gas fitter, refrigeration mechanic / Red Seal), insurance, WCB, year started.
                Add them here as a "Licensed & insured" list ONLY once confirmed. Do not publish unconfirmed claims. */}

            <h2 className="mt-10 text-2xl font-extrabold md:text-3xl">What we do</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {WHAT.map((w) => (
                <li key={w.href}>
                  <Link href={w.href} className="flex items-center gap-2 font-semibold text-white/85 hover:text-ice">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-ice" aria-hidden /> {w.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-white/80">
              Based in Calgary, serving the whole city and nearby towns.{" "}
              <Link href="/service-areas" className="font-bold text-ice underline-offset-4 hover:underline">
                See our service areas
              </Link>
              .
            </p>
          </div>

          <div className="space-y-6">
            {/* TODO(Quinn): add a headshot of Quinn here, e.g. /images/quinn-lou-gbl-hvac.jpg */}
            <Image
              src="/images/gbl-hvac-service-van-calgary.jpg"
              alt="GBL HVAC LTD service van in a Calgary residential neighbourhood"
              width={1000}
              height={750}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
