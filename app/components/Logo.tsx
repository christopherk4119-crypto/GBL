import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

// Client's real logo (transparent PNGs cut from their artwork):
//   /logo-mark.png      fire-and-ice ring only
//   /logo-wordmark.png  "GBL HVAC LTD" lettering only
//   /logo.png           full stacked logo (ring above lettering)

export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return <Image src="/logo-mark.png" alt="" width={400} height={407} className={`object-contain ${className}`} />;
}

// Header: ring beside the wordmark so the name stays readable at header size.
// Footer: the full stacked logo.
export default function Logo({ variant = "inline" }: { variant?: "inline" | "stacked" }) {
  if (variant === "stacked") {
    return (
      <Link href="/" aria-label={`${SITE.name} home`} className="inline-block">
        <Image src="/logo.png" alt={`${SITE.name} logo`} width={800} height={491} className="h-auto w-48" />
      </Link>
    );
  }
  return (
    <Link href="/" className="flex h-[56px] items-center gap-2.5 md:h-[80px]" aria-label={`${SITE.name} home`}>
      <LogoMark className="h-12 w-12 shrink-0 md:h-[68px] md:w-[68px]" />
      <Image
        src="/logo-wordmark.png"
        alt={SITE.name}
        width={800}
        height={84}
        priority
        className="h-auto w-24 sm:w-32 md:w-40 lg:w-44"
      />
    </Link>
  );
}
