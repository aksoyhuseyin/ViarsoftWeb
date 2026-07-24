import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/seo/metadata";

/**
 * Statik export sırasında out/sitemap.xml olarak üretilir.
 * trailingSlash: true ile uyumlu (tüm URL'ler sonda / taşır).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/hizmetler/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/teknolojiler/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/hakkimizda/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iletisim/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/blog/", priority: 0.6, changeFrequency: "weekly" },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/hizmetler/${service.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
