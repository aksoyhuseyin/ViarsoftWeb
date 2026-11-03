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

export type StoreId = "appStore" | "googlePlay" | "appGallery";

export interface BadgeImage {
  src: string;
  width: number;
  height: number;
}

/**
 * Resmî mağaza rozetleri (public/rozetler/). Üç mağaza da rozetin yeniden
 * çizilmesine izin vermez, kendi logolu düğme yapılmaz.
 * Apple kuralları: dizide İLK sırada, siyah, en az 40px yükseklik, rozet çevresi
 * boşluğu yüksekliğin en az ¼'ü. Huawei: AppGallery rozeti diğerlerinden küçük
 * olamaz (hepsi aynı yükseklikte). Kredi satırı: dictionary `footer.storeNotice`.
 * Google Play rozetlerinde yalnız kenardaki saydam boşluk kırpıldı.
 * ⚠ appgallery-en yok: İngilizce rozet yalnız AppGallery Connect'te üretiliyor,
 * /en/ şimdilik TR rozeti gösteriyor.
 */
export const storeBadges: {
  id: StoreId;
  /** Rozetin yazısı: ekran okuyucu metni (mağazanın resmî ifadesi). */
  label: Record<Locale, string>;
  image: Record<Locale, BadgeImage>;
}[] = [
  {
    id: "appStore",
    label: { tr: "App Store'dan indirin", en: "Download on the App Store" },
    image: {
      tr: { src: "/rozetler/app-store-tr.svg", width: 151, height: 40 },
      en: { src: "/rozetler/app-store-en.svg", width: 120, height: 40 },
    },
  },
  {
    id: "googlePlay",
    label: { tr: "Google Play'den indirin", en: "Get it on Google Play" },
    image: {
      tr: { src: "/rozetler/google-play-tr.png", width: 646, height: 192 },
      en: { src: "/rozetler/google-play-en.png", width: 564, height: 168 },
    },
  },
  {
    id: "appGallery",
    label: { tr: "AppGallery ile keşfedin", en: "Explore it on AppGallery" },
    image: {
      tr: { src: "/rozetler/appgallery-tr.png", width: 851, height: 256 },
      en: { src: "/rozetler/appgallery-tr.png", width: 851, height: 256 },
    },
  },
];

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
  /** Mobil mağaza adresleri; sıra ve görsel `storeBadges`'ten gelir. */
  stores: Record<StoreId, string>;
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
    stores: {
      appStore: "https://apps.apple.com/tr/app/ko%C3%A7pro/id6795246036",
      googlePlay: "https://play.google.com/store/apps/details?id=com.viarsoft.kocpro",
      appGallery: "https://appgallery.huawei.com/app/C119135011",
    },
    links: [
      { label: { tr: "Web sitesi", en: "Website" }, href: "https://kocpro.com.tr" },
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
    status: { tr: "Yayında", en: "Live" },
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
        "iOS ve Android'de yayında",
        "TSE belgeli ekspertiz firmaları",
        "Güvenceli (havuz) ödeme",
      ],
      en: [
        "Live on iOS and Android",
        "TSE-certified inspection partners",
        "Escrow-style secure payments",
      ],
    },
    stores: {
      appStore: "https://apps.apple.com/tr/app/exper-cebimde-oto-ekspertiz/id6819848147",
      googlePlay: "https://play.google.com/store/apps/details?id=com.expercebimde.exper_cebimde",
      appGallery: "https://url.cloud.huawei.com/CEQeX5uLIs?shareTo=qrcode",
    },
    links: [
      { label: { tr: "Web sitesi", en: "Website" }, href: "https://expercebimde.com" },
      {
        label: { tr: "Eksper paneli", en: "Inspector panel" },
        href: "https://app.expercebimde.com",
      },
    ],
    schema: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
    },
  },
];
