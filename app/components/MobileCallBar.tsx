import { FileText, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

// Sticky bottom bar on mobile so the phone number is always one tap away.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ice/20 bg-navy-dark/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={SITE.tel} className="btn-flame px-3 py-3 text-base">
          <Phone className="h-5 w-5" aria-hidden /> Call Now
        </a>
        <a href="#contact" className="btn-ice px-3 py-3 text-base">
          <FileText className="h-5 w-5" aria-hidden /> Free Quote
        </a>
      </div>
    </div>
  );
}
