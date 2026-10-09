import { getServices } from "@/lib/data/services";

/**
 * İki dil: Türkçe kökte (mevcut adresler korunur), İngilizce /en/ altında.
 */
export type Locale = "tr" | "en";
export const locales: Locale[] = ["tr", "en"];

/** Sayfa anahtarı → dile göre yol (trailingSlash uyumlu). */
export const routes = {
  home: { tr: "/", en: "/en/" },
  services: { tr: "/hizmetler/", en: "/en/services/" },
  technologies: { tr: "/teknolojiler/", en: "/en/technologies/" },
  about: { tr: "/hakkimizda/", en: "/en/about/" },
  contact: { tr: "/iletisim/", en: "/en/contact/" },
  blog: { tr: "/blog/", en: "/en/blog/" },
} as const;

export type RouteKey = keyof typeof routes;

/** Ana sayfadaki bölüm çapaları (dile göre) */
export const sectionIds = {
  products: { tr: "urunler", en: "products" },
  services: { tr: "hizmetler", en: "services" },
  technologies: { tr: "teknolojiler", en: "technologies" },
  process: { tr: "surec", en: "process" },
} as const;

export function servicePath(locale: Locale, slug: string): string {
  return `${routes.services[locale]}${slug}/`;
}

export function localeOfPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? "en" : "tr";
}

/**
 * Bulunulan sayfanın hedef dildeki karşılığı (dil düğmesi için).
 * Eşleşme yoksa hedef dilin ana sayfasına düşer.
 */
export function alternatePath(pathname: string, target: Locale): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const from = localeOfPath(path);
  if (from === target) return path;

  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][from] === path) return routes[key][target];
  }

  const prefix = routes.services[from];
  if (path.startsWith(prefix)) {
    const slug = path.slice(prefix.length).replace(/\/$/, "");
    const service = getServices(from).find((s) => s.slug === slug);
    const twin = service && getServices(target).find((s) => s.id === service.id);
    if (twin) return servicePath(target, twin.slug);
  }

  return routes.home[target];
}

/** Bir hizmetin iki dildeki yolları (hreflang için) */
export function serviceLanguages(id: string): Record<Locale, string> {
  const pick = (l: Locale) => servicePath(l, getServices(l).find((s) => s.id === id)!.slug);
  return { tr: pick("tr"), en: pick("en") };
}
