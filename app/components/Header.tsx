"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV, SITE } from "@/lib/site";

const MOBILE_BAR_LABELS = ["Home", "Services", "Contact"];
const MOBILE_BAR = NAV.filter((n) => MOBILE_BAR_LABELS.includes(n.label));
const MENU_ONLY = NAV.filter((n) => !MOBILE_BAR_LABELS.includes(n.label));

function OpenBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      Open 24/7
    </span>
  );
}

export default function Header({ services }: { services: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-ice/15 bg-navy-dark/95 shadow-lg shadow-black/30 backdrop-blur" : "border-transparent bg-navy-dark/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Logo id="hdr" />

        {/* Centre: open badge + phone */}
        <div className="hidden flex-col items-center gap-1 md:flex lg:flex-row lg:gap-4">
          <OpenBadge />
          <a href={SITE.tel} className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white transition hover:text-ice lg:text-2xl">
            <Phone className="h-5 w-5 text-flame" aria-hidden />
            {SITE.phone}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-flame hidden px-5 py-3 md:inline-flex">
            Get a Free Quote
          </a>
          {/* Mobile: compact call + menu */}
          <a href={SITE.tel} className="flex flex-col items-end leading-tight md:hidden" aria-label={`Call ${SITE.phone}`}>
            <OpenBadge className="px-2 py-0.5 text-[10px]" />
            <span className="mt-1 text-sm font-extrabold text-white">{SITE.phone}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-ice md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden border-t border-white/5 md:block" aria-label="Main">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-6 py-3 text-lg font-bold lg:gap-14 lg:text-xl">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-white/85 transition hover:text-ice">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: main links always visible, the rest live in the menu */}
      <nav className="border-t border-white/5 md:hidden" aria-label="Main">
        <ul className="grid grid-cols-3 text-center text-base font-bold">
          {MOBILE_BAR.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-white/85 transition hover:text-ice">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-white/10 bg-navy-dark px-4 pb-8 pt-2 md:hidden"
          aria-label="More"
        >
          <ul className="flex flex-col">
            {MENU_ONLY.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 text-lg font-semibold text-white/90 hover:text-ice"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-ice">Our services</p>
          <ul className="mt-1 flex flex-col">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 font-semibold text-white/80 hover:text-ice"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <a href={SITE.tel} className="btn-flame w-full text-lg">
              <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-ice w-full">
              Get a Free Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
