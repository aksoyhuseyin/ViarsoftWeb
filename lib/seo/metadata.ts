import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

const ogLocale: Record<Locale, string> = { tr: "tr_TR", en: "en_US" };

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
  locale?: Locale;
  /** Sayfanın iki dildeki yolları → hreflang bağlantıları */
  languages?: Record<Locale, string>;
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
  locale = "tr",
  languages,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const ogImage = `${siteConfig.url}${siteConfig.ogImage}`;
  const slogan = getDictionary(locale).site.slogan;
  const metaTitle = absoluteTitle ?? title ?? slogan;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(languages && {
        languages: {
          "tr-TR": absoluteUrl(languages.tr),
          en: absoluteUrl(languages.en),
          "x-default": absoluteUrl(languages.tr),
        },
      }),
    },
    openGraph: {
      type: ogType,
      locale: ogLocale[locale],
      url,
      siteName: siteConfig.name,
      title: metaTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${slogan}`,
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

/** Sözlükteki sayfa başlık/açıklamalarıyla, iki dilli sayfa metadata'sı */
export function pageMetadata(
  page: "services" | "technologies" | "about" | "contact" | "blog",
  locale: Locale,
  languages: Record<Locale, string>
): Metadata {
  const p = getDictionary(locale).pages[page];
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: languages[locale],
    keywords: p.keywords,
    locale,
    languages,
  });
}
