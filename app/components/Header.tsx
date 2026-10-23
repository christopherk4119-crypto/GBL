"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV, SITE, type MenuKey, type MenuLink } from "@/lib/site";

const MOBILE_BAR_LABELS = ["Home", "Services", "Contact"];
const MOBILE_BAR = NAV.filter((n) => MOBILE_BAR_LABELS.includes(n.label));
const MENU_ONLY = NAV.filter((n) => !MOBILE_BAR_LABELS.includes(n.label));

// Splits a flat menu into [item, ...its sub-items] groups.
function groupMenu(menu: MenuLink[]): MenuLink[][] {
  const groups: MenuLink[][] = [];
  for (const m of menu) {
    if (m.sub && groups.length) groups[groups.length - 1].push(m);
    else groups.push([m]);
  }
  return groups;
}

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

export default function Header({ menus }: { menus: Record<MenuKey, MenuLink[]> }) {
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
          <a
            href={SITE.tel}
            className="flex items-center gap-2 rounded-xl border border-flame/60 bg-flame/10 px-4 py-2 text-xl font-extrabold tracking-tight text-white shadow-lg shadow-flame/30 transition hover:animate-glow-pulse hover:bg-flame/20 lg:text-2xl"
          >
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
            <span className="mt-1 rounded-lg border border-flame/60 bg-flame/10 px-2 py-0.5 text-sm font-extrabold text-white shadow-md shadow-flame/30">
              {SITE.phone}
            </span>
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
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6 text-base font-bold lg:gap-9 lg:text-lg xl:gap-12 xl:text-xl">
          {NAV.map((item) => {
            const menu = item.menu ? menus[item.menu] : undefined;
            const wide = menu && menu.length > 8;
            return (
              <li key={item.href} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 py-3 text-white/85 transition hover:text-ice group-hover:text-ice">
                  {item.label}
                  {menu && <ChevronDown className="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />}
                </Link>
                {menu && (
                  // Opens on hover and on keyboard focus; pt-2 bridges the gap so the menu doesn't close mid-move
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div
                      className={`rounded-2xl border border-ice/20 bg-navy-dark p-2 text-base font-semibold shadow-2xl shadow-black/60 ${
                        wide ? "w-[34rem] columns-2 gap-2" : "w-72"
                      }`}
                    >
                      {/* Each service stays in one column with its sub-pages */}
                      {groupMenu(menu).map((group) => (
                        <ul key={group[0].href} className="break-inside-avoid">
                          {group.map((m) => (
                            <li key={m.href}>
                              <Link
                                href={m.href}
                                className={`block rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-ice ${
                                  m.sub ? "pl-7 text-[0.95rem] text-white/70" : "text-white/90"
                                }`}
                              >
                                {m.sub && <span className="mr-1 text-flame">›</span>}
                                {m.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
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
            {menus.services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-white/5 py-3 font-semibold hover:text-ice ${s.sub ? "pl-5 text-white/65" : "text-white/80"}`}
                >
                  {s.sub && <span className="mr-1 text-flame">›</span>}
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
