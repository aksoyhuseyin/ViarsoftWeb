/**
 * Site geneli sabitler. Tek kaynaktan yönetim için tüm SEO/metadata ve
 * yapısal veri (JSON-LD) katmanları buradan beslenir.
 */
export const siteConfig = {
  name: "Viarsoft",
  legalName: "Viarsoft Yazılım Danışmanlık ve Ticaret Limited Şirketi",
  domain: "viarsoft.com",
  url: "https://viarsoft.com",
  locale: "tr_TR",
  lang: "tr",
  description:
    "Viarsoft; KoçPro ve Exper Cebimde gibi kendi yazılım ürünlerini geliştiren, işletmelere özel web, mobil ve entegrasyon çözümleri sunan bir yazılım şirketidir.",
  slogan: "İşletmeniz İçin Modern ve Güvenilir Yazılım Çözümleri",
  // OpenGraph / Twitter için sosyal görsel (public/og.png olarak eklenmeli).
  ogImage: "/og.png",
  contact: {
    // Telefon/sosyal medya netleşince eklenecek (bkz. viarsoft-todo).
    email: "info@viarsoft.com",
    address: {
      street: "Bahçelievler Mah. Hamdi Paşa Sk. No:2/10",
      district: "İlkadım",
      city: "Samsun",
      full: "Bahçelievler Mah. Hamdi Paşa Sk. No:2/10 İlkadım/Samsun",
    },
  },
  // Kuruluş: ticaret siciline tescil ayı (Temmuz 2026).
  founded: {
    iso: "2026-07",
    label: "Temmuz 2026",
    labelEn: "July 2026",
  },
  legal: {
    taxOffice: "19 Mayıs",
    taxNumber: "9251336444",
    mersisNumber: "0925133644400001",
  },
} as const;

export type SiteConfig = typeof siteConfig;
