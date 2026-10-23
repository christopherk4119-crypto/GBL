import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import LightStreak from "./LightStreak";
import { NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const SERVICE_LIST = ["Install", "Maintenance", "Commercial", "Residential", "Heating", "Air Conditioning", "Refrigeration", "Ventilation", "Water Heater"];

export default function Footer() {
  return (
    <footer className="relative bg-[#0E1529] pb-28 md:pb-10">
      <LightStreak />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-6 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo id="ftr" />
          <p className="mt-4 max-w-xs text-white/70">{SITE.tagline}</p>
        </div>

        <div className="space-y-3">
          <a href={SITE.tel} className="flex items-center gap-3 text-xl font-extrabold hover:text-ice">
            <Phone className="h-5 w-5 text-flame" aria-hidden /> {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/80 hover:text-ice">
            <Mail className="h-5 w-5 text-ice" aria-hidden /> {SITE.email}
          </a>
          <p className="flex items-center gap-3 text-white/80">
            <Clock className="h-5 w-5 text-emerald-400" aria-hidden /> Open 24 Hours
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-ice">Services</h2>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-white/80 hover:text-ice">
                  {s.h1.replace(/ in Calgary$/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-ice">Company</h2>
          <ul className="grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/80 hover:text-ice">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 sm:px-6">
        <p className="text-center text-sm text-ice/80">{SERVICE_LIST.join(" · ")}</p>
        <p className="mt-4 text-center text-sm text-white/50">© 2026 GBL HVAC LTD, Calgary, AB</p>
      </div>
    </footer>
  );
}
