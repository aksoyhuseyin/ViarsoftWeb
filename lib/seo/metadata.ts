import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/** path'i mutlak URL'e çevirir. trailingSlash: true ile uyumlu. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Ana sayfa hariç sonda slash olduğundan emin ol
  const normalized =
    clean !== "/" && !clean.endsWith("/") ? `${clean}/` : clean;
  return `${siteConfig.url}${normalized}`;
}

interface BuildMetadataArgs {
  /** Marka adı olmadan sayfa başlığı (template ile "... | Viarsoft" olur) */
  title?: string;
  description?: string;
  /** Örn: "/hizmetler/" — canonical ve OG url için kullanılır */
  path?: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
  /** Marka son ekini bastırıp tam başlığı kullan */
  absoluteTitle?: string;
}

/**
 * Her sayfa için tutarlı Metadata üretir:
 * title/description + canonical + Open Graph + Twitter Card.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords,
  ogType = "website",
  noIndex = false,
  absoluteTitle,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const ogImage = `${siteConfig.url}${siteConfig.ogImage}`;
  const metaTitle = absoluteTitle ?? title ?? siteConfig.slogan;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: metaTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
