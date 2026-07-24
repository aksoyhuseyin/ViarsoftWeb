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
    "Viarsoft; işletmelere özel web, masaüstü, mobil ve entegrasyon çözümleri geliştiren kurumsal yazılım firmasıdır. Sürdürülebilir, ölçeklenebilir ve güvenli yazılımlar.",
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
  legal: {
    taxOffice: "19 Mayıs",
    taxNumber: "9251336444",
  },
} as const;

export type SiteConfig = typeof siteConfig;
