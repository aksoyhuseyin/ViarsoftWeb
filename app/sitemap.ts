import type { MetadataRoute } from "next";
import { getServices } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/seo/metadata";
import { locales, routes, servicePath } from "@/lib/i18n";

/**
 * Statik export sırasında out/sitemap.xml olarak üretilir.
 * trailingSlash: true ile uyumlu (tüm URL'ler sonda / taşır).
 * İki dil: Türkçe kökte, İngilizce /en/ altında.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: {
    key: keyof typeof routes;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { key: "home", priority: 1.0, changeFrequency: "weekly" },
    { key: "services", priority: 0.9, changeFrequency: "monthly" },
    { key: "technologies", priority: 0.7, changeFrequency: "monthly" },
    { key: "about", priority: 0.8, changeFrequency: "monthly" },
    { key: "contact", priority: 0.8, changeFrequency: "yearly" },
    { key: "blog", priority: 0.6, changeFrequency: "weekly" },
  ];

  const entries = locales.flatMap((locale) => [
    ...staticRoutes.map((r) => ({
      path: routes[r.key][locale],
      priority: locale === "tr" ? r.priority : r.priority - 0.1,
      changeFrequency: r.changeFrequency,
    })),
    ...getServices(locale).map((service) => ({
      path: servicePath(locale, service.slug),
      priority: locale === "tr" ? 0.8 : 0.7,
      changeFrequency: "monthly" as const,
    })),
  ]);

  return entries.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: Math.round(route.priority * 10) / 10,
  }));
}
