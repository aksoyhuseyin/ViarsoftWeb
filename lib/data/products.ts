/**
 * Viarsoft'un kendi geliştirip işlettiği ürünler.
 * Ana sayfa, Hakkımızda ve İngilizce tanıtım sayfası (/en/) buradan beslenir.
 */
import type { Locale } from "@/lib/i18n";

export type { Locale };

export interface ProductLink {
  label: Record<Locale, string>;
  href: string;
}

export interface Product {
  slug: string;
  name: string;
  /** public/ altındaki uygulama ikonu */
  logo: string;
  url: string;
  category: Record<Locale, string>;
  status: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  links: ProductLink[];
  /** JSON-LD SoftwareApplication alanları */
  schema: {
    applicationCategory: string;
    operatingSystem: string;
  };
}

export const products: Product[] = [
  {
    slug: "kocpro",
    name: "KoçPro",
    logo: "/urunler/kocpro.png",
    url: "https://kocpro.com.tr",
    category: {
      tr: "B2B SaaS · Yaşam koçları ve beslenme kulüpleri",
      en: "B2B SaaS · Life coaches & nutrition clubs",
    },
    status: { tr: "Yayında", en: "Live" },
    tagline: {
      tr: "Danışanlarınızı, ekibinizi ve kulübünüzü tek ekrandan yönetin.",
      en: "Manage clients, team and club from a single screen.",
    },
    description: {
      tr: "Yaşam koçları ve beslenme kulübü işletmecileri için danışan ve üyelik takibi, ürün satışı ve stok, cari ve kasa, ölçüm ve tartı günü, randevu, ekip ve kariyer yönetimi ile raporlamayı tek sistemde toplayan abonelik tabanlı platform.",
      en: "A subscription platform for life coaches and nutrition club owners: client and membership tracking, product sales and stock, customer accounts and cash ledger, body measurements, appointments, team and career management, and reporting in one system.",
    },
    highlights: {
      tr: [
        "Web, iOS ve Android",
        "Koç, personel ve danışan portalı",
        "Aylık / yıllık abonelik modeli",
      ],
      en: [
        "Web, iOS and Android",
        "Coach, staff and client portals",
        "Monthly / yearly subscription model",
      ],
    },
    links: [
      { label: { tr: "Web sitesi", en: "Website" }, href: "https://kocpro.com.tr" },
      {
        label: { tr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/tr/app/ko%C3%A7pro/id6795246036",
      },
      {
        label: { tr: "Google Play", en: "Google Play" },
        href: "https://play.google.com/store/apps/details?id=com.viarsoft.kocpro",
      },
    ],
    schema: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
    },
  },
  {
    slug: "expercebimde",
    name: "Exper Cebimde",
    logo: "/urunler/expercebimde.png",
    url: "https://expercebimde.com",
    category: {
      tr: "Pazar yeri · Uzaktan oto ekspertiz",
      en: "Marketplace · Remote vehicle inspection",
    },
    status: { tr: "Web'de yayında", en: "Live on the web" },
    tagline: {
      tr: "Şehir dışındaki aracı görmeye gitmeden ekspertizden geçirin.",
      en: "Get a used car inspected without travelling to see it.",
    },
    description: {
      tr: "İkinci el araç alıcılarını, aracın bulunduğu ildeki TSE belgeli ekspertiz firmalarıyla buluşturan pazar yeri. Yerinde inceleme, plaka ile geçmiş ekspertiz raporu sorgulama ve iki tarafı da koruyan güvenceli ödeme tek uygulamada.",
      en: "A marketplace that connects used-car buyers with TSE-certified vehicle inspection companies in the city where the car is located. On-site inspection, past inspection report lookup by licence plate, and escrow-style payments that protect both sides, in one app.",
    },
    highlights: {
      tr: [
        "Web'de yayında, iOS ve Android yakında",
        "TSE belgeli ekspertiz firmaları",
        "Güvenceli (havuz) ödeme",
      ],
      en: [
        "Live on the web; iOS and Android coming soon",
        "TSE-certified inspection partners",
        "Escrow-style secure payments",
      ],
    },
    links: [
      { label: { tr: "Web sitesi", en: "Website" }, href: "https://expercebimde.com" },
      {
        label: { tr: "Web uygulaması", en: "Web app" },
        href: "https://app.expercebimde.com",
      },
    ],
    schema: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
    },
  },
];
