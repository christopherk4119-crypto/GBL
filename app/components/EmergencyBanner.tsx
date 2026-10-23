import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function EmergencyBanner() {
  return (
    <a
      href={SITE.tel}
      className="group block bg-gradient-to-r from-flame-deep via-flame to-flame-deep px-4 py-5 text-center text-white transition hover:brightness-110"
    >
      <span className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-lg font-bold md:flex-row md:gap-4 md:text-xl">
        <span>Furnace out? AC down? Walk-in cooler failing? We answer 24/7.</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-extrabold ring-1 ring-white/40 transition group-hover:bg-white/25">
          <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
        </span>
      </span>
    </a>
  );
}
