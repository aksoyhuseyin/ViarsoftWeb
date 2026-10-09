"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/lib/data/nav";
import { getDictionary } from "@/lib/dictionary";
import { alternatePath, locales, routes, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/";
  const t = getDictionary(locale);
  const nav = mainNav(locale);
  const home = routes.home[locale];
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;

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
    if (href === home) return current === home;
    if (href.includes("#")) return false;
    return current.startsWith(href);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        {t.header.skip}
      </a>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-navy-100 bg-white/90 backdrop-blur-md"
            : "border-b border-transparent bg-white/70 backdrop-blur"
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Logo href={home} label={t.logoLabel} />

          {/* Masaüstü menü */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
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

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch locale={locale} pathname={current} label={t.header.language} />
            <ButtonLink href={routes.contact[locale]} icon="arrow-right" size="md">
              {t.header.cta}
            </ButtonLink>
          </div>

          {/* Mobil: dil + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitch locale={locale} pathname={current} label={t.header.language} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 text-navy-900 transition-colors hover:bg-navy-50"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
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
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
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
                href={routes.contact[locale]}
                icon="arrow-right"
                size="lg"
                className="mt-2 w-full"
              >
                {t.header.cta}
              </ButtonLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

/** TR | EN: bulunulan sayfanın diğer dildeki karşılığına geçer */
function LanguageSwitch({
  locale,
  pathname,
  label,
}: {
  locale: Locale;
  pathname: string;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-lg border border-navy-100 bg-white p-0.5 text-xs font-semibold"
    >
      {locales.map((l) =>
        l === locale ? (
          <span
            key={l}
            aria-current="true"
            className="rounded-md bg-navy-900 px-2.5 py-1.5 text-white"
          >
            {l.toUpperCase()}
          </span>
        ) : (
          <Link
            key={l}
            href={alternatePath(pathname, l)}
            hrefLang={l}
            lang={l}
            className="rounded-md px-2.5 py-1.5 text-navy-500 transition-colors hover:text-accent-600"
          >
            {l.toUpperCase()}
          </Link>
        )
      )}
    </div>
  );
}
