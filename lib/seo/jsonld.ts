import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo/metadata";
import type { Service } from "@/lib/data/services";
import type { Product } from "@/lib/data/products";
import { servicePath, type Locale } from "@/lib/i18n";

/**
 * JSON-LD yapısal veri üreticileri.
 * Çıktılar <JsonLd> bileşeni ile <script type="application/ld+json"> olarak basılır.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    foundingDate: siteConfig.founded.iso,
    taxID: siteConfig.legal.taxNumber,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "MERSIS",
      value: siteConfig.legal.mersisNumber,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.district,
      addressRegion: siteConfig.contact.address.city,
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.email,
      availableLanguage: ["Turkish", "English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: ["tr-TR", "en"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  /** "/hizmetler/" gibi göreli path */
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: Service, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    url: absoluteUrl(servicePath(locale, service.slug)),
    description: service.seo.description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
  };
}

export function productSchema(product: Product, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    url: product.url,
    description: product.description[locale],
    applicationCategory: product.schema.applicationCategory,
    operatingSystem: product.schema.operatingSystem,
    image: `${siteConfig.url}${product.logo}`,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
