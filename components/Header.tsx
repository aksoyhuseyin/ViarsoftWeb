"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/lib/data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menü açıkken arka plan kaymasını engelle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll'da header arka planını belirginleştir
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-accent-600"
                    : "text-navy-700 hover:text-accent-600"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-accent-600 transition-transform duration-200 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/iletisim/" icon="arrow-right" size="md">
            Teklif Al
          </ButtonLink>
        </div>

        {/* Mobil hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 text-navy-900 transition-colors hover:bg-navy-50 lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobil menü paneli */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`overflow-hidden border-t border-navy-100 bg-white transition-all duration-300 ${
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-accent-50 text-accent-700"
                    : "text-navy-800 hover:bg-navy-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/iletisim/"
              icon="arrow-right"
              size="lg"
              className="mt-2 w-full"
            >
              Teklif Al
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
