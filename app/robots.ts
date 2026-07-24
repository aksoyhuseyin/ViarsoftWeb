import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Statik export sırasında out/robots.txt olarak üretilir.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
