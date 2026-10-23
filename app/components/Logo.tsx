import Image from "next/image";
import Link from "next/link";
import { logoSvgInner } from "@/lib/logo-svg.mjs";
import { SITE } from "@/lib/site";

// REPLACE WITH LOGO PNG — transparent background
// Drop the client's logo at /public/logo.png and set this to "/logo.png".
// It renders inside a reserved 200x80px slot in the header and footer.
const LOGO_PNG: string | null = null;

export function LogoMark({ id = "gbl", className = "h-12 w-12" }: { id?: string; className?: string }) {
  return (
    <svg
      viewBox="-8 -8 136 136"
      className={className}
      role="img"
      aria-label={`${SITE.name} logo`}
      dangerouslySetInnerHTML={{ __html: logoSvgInner(id) }}
    />
  );
}

export default function Logo({ id = "gbl" }: { id?: string }) {
  return (
    <Link href="/" className="flex h-[56px] max-w-[200px] items-center gap-2.5 md:h-[80px]" aria-label={`${SITE.name} home`}>
      {LOGO_PNG ? (
        <Image src={LOGO_PNG} alt={SITE.name} width={200} height={80} priority className="h-full w-auto object-contain" />
      ) : (
        <>
          <LogoMark id={id} className="h-12 w-12 shrink-0 md:h-14 md:w-14" />
          <span className="font-display text-lg font-extrabold leading-none tracking-tight text-ice md:text-xl">
            GBL HVAC
            <span className="block text-xs font-bold tracking-[0.35em] text-ice/80">LTD</span>
          </span>
        </>
      )}
    </Link>
  );
}
