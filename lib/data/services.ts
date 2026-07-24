import type { IconName } from "@/components/Icon";

export interface Service {
  slug: string;
  title: string;
  /** Kart ve menülerde kullanılan kısa başlık */
  shortTitle: string;
  icon: IconName;
  /** Kart üzerindeki kısa açıklama */
  excerpt: string;
  /** Detay sayfası hero özeti */
  intro: string;
  /** Detay sayfasında öne çıkan yetenekler */
  features: { title: string; description: string }[];
  /** Detay sayfasında "Neler yapıyoruz" maddeleri */
  deliverables: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: Service[] = [
  {
    slug: "ozel-yazilim-gelistirme",
    title: "Özel Yazılım Geliştirme",
    shortTitle: "Özel Yazılım",
    icon: "code",
    excerpt:
      "İş süreçlerinize birebir uyan, ölçeklenebilir ve sürdürülebilir kurumsal yazılımlar geliştiriyoruz.",
    intro:
      "Hazır paketlerin sınırlarına takılmadan, işletmenizin gerçek ihtiyaçlarına göre tasarlanan özel yazılımlar geliştiriyoruz. Analizden teslimata kadar tüm süreci sizinle birlikte yürütüyoruz.",
    features: [
      {
        title: "İhtiyaca Özel Analiz",
        description:
          "Süreçlerinizi yerinde inceleyip yazılımı iş akışınıza göre kurgularız.",
      },
      {
        title: "Ölçeklenebilir Mimari",
        description:
          "Büyüyen kullanıcı ve veri hacmine uyum sağlayan modüler mimari tasarlarız.",
      },
      {
        title: "Sürdürülebilir Kod",
        description:
          "Test edilebilir, dokümante ve uzun vadede bakımı kolay kod tabanı üretiriz.",
      },
    ],
    deliverables: [
      "Kurumsal iş yönetim panelleri ve otomasyon sistemleri",
      "Süreç dijitalleştirme ve iş akışı yazılımları",
      "Mevcut sistemlerin modernizasyonu ve yeniden yazımı",
      "Rol/yetki bazlı güvenli kullanıcı yönetimi",
    ],
    seo: {
      title: "Özel Yazılım Geliştirme",
      description:
        "İşletmenize özel, ölçeklenebilir ve sürdürülebilir kurumsal yazılım geliştirme hizmeti. Analizden teslimata Viarsoft ile dijital dönüşüm.",
      keywords: [
        "özel yazılım geliştirme",
        "kurumsal yazılım",
        "yazılım geliştirme firması",
        "süreç otomasyonu",
      ],
    },
  },
  {
    slug: "web-uygulamalari",
    title: "Web Uygulamaları Geliştirme",
    shortTitle: "Web Uygulamaları",
    icon: "globe",
    excerpt:
      "Hızlı, güvenli ve modern web uygulamaları; kurumsal paneller, portallar ve SaaS çözümleri.",
    intro:
      "Modern web teknolojileriyle hızlı açılan, güvenli ve mobil uyumlu web uygulamaları geliştiriyoruz. Kurumsal yönetim panellerinden müşteri portallarına kadar geniş bir yelpazede çalışıyoruz.",
    features: [
      {
        title: "Modern Teknoloji",
        description:
          "React, Next.js ve TypeScript ile bakımı kolay, performanslı arayüzler.",
      },
      {
        title: "Güvenlik Odaklı",
        description:
          "Yetkilendirme, veri doğrulama ve güvenli oturum yönetimi standart olarak gelir.",
      },
      {
        title: "Yüksek Performans",
        description:
          "Optimizasyon ve önbellekleme ile hızlı açılan, akıcı kullanıcı deneyimi.",
      },
    ],
    deliverables: [
      "Kurumsal yönetim panelleri (admin dashboard)",
      "Müşteri ve bayi portalları",
      "SaaS ürünleri ve çok kiracılı (multi-tenant) sistemler",
      "Raporlama ve veri görselleştirme arayüzleri",
    ],
    seo: {
      title: "Web Uygulamaları Geliştirme",
      description:
        "Kurumsal web uygulamaları, yönetim panelleri ve SaaS çözümleri. Next.js ve React ile hızlı, güvenli ve ölçeklenebilir web yazılımları.",
      keywords: [
        "web uygulaması geliştirme",
        "web tabanlı yazılım",
        "saas geliştirme",
        "yönetim paneli",
      ],
    },
  },
  {
    slug: "masaustu-yazilim",
    title: "Masaüstü Yazılım Geliştirme",
    shortTitle: "Masaüstü Yazılımlar",
    icon: "monitor",
    excerpt:
      "Windows masaüstü uygulamaları; yüksek performanslı, çevrimdışı çalışabilen kurumsal çözümler.",
    intro:
      "Yerel donanım ve çevrimdışı çalışma gerektiren senaryolar için güçlü masaüstü uygulamaları geliştiriyoruz. .NET, C# ve C++ ile stabil, hızlı ve güvenli çözümler üretiyoruz.",
    features: [
      {
        title: "Yüksek Performans",
        description:
          "Yoğun veri işleme ve donanım erişimi gereken senaryolara uygun mimari.",
      },
      {
        title: "Çevrimdışı Çalışma",
        description:
          "İnternet bağlantısı olmadan da çalışan, sonradan senkronize olan yapılar.",
      },
      {
        title: "Sistem Entegrasyonu",
        description:
          "Barkod, terazi, yazıcı ve üretim hattı cihazlarıyla donanım entegrasyonu.",
      },
    ],
    deliverables: [
      "Depo, üretim ve saha operasyon uygulamaları",
      "Barkod / etiket ve donanım entegrasyonlu sistemler",
      "Kiosk ve nokta (POS) uygulamaları",
      "Eski (legacy) masaüstü uygulamalarının modernizasyonu",
    ],
    seo: {
      title: "Masaüstü Yazılım Geliştirme",
      description:
        "Windows masaüstü uygulama geliştirme. .NET, C# ve C++ ile çevrimdışı çalışabilen, donanım entegrasyonlu kurumsal masaüstü yazılımları.",
      keywords: [
        "masaüstü yazılım geliştirme",
        "windows uygulama",
        ".net masaüstü",
        "c# yazılım",
      ],
    },
  },
  {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama Geliştirme",
    shortTitle: "Mobil Uygulamalar",
    icon: "smartphone",
    excerpt:
      "iOS ve Android için kullanıcı dostu, hızlı ve güvenli mobil uygulamalar.",
    intro:
      "Saha ekipleri, müşteriler ve iş ortakları için mobil uygulamalar geliştiriyoruz. Sezgisel arayüzler ve güçlü altyapılarla işinizi cebe taşıyoruz.",
    features: [
      {
        title: "Çok Platform",
        description:
          "Tek kod tabanıyla iOS ve Android için verimli, tutarlı deneyimler.",
      },
      {
        title: "Çevrimiçi & Çevrimdışı",
        description:
          "Bağlantı kesildiğinde veri kaybı yaşatmayan senkronizasyon altyapısı.",
      },
      {
        title: "Backend Entegrasyonu",
        description:
          "Mevcut ERP, CRM ve API'lerinizle sorunsuz veri alışverişi.",
      },
    ],
    deliverables: [
      "Saha satış ve servis takip uygulamaları",
      "Müşteri sadakat ve sipariş uygulamaları",
      "Depo/sayım ve barkod okuma uygulamaları",
      "Kurumsal iç kullanım (B2E) mobil çözümleri",
    ],
    seo: {
      title: "Mobil Uygulama Geliştirme",
      description:
        "iOS ve Android mobil uygulama geliştirme. Saha, satış, servis ve müşteri uygulamaları için hızlı, güvenli ve ölçeklenebilir mobil çözümler.",
      keywords: [
        "mobil uygulama geliştirme",
        "ios android uygulama",
        "kurumsal mobil uygulama",
        "saha uygulaması",
      ],
    },
  },
  {
    slug: "erp-crm-entegrasyonlari",
    title: "ERP / CRM Entegrasyonları",
    shortTitle: "ERP / CRM Entegrasyonları",
    icon: "refresh",
    excerpt:
      "ERP ve CRM sistemlerinizi diğer yazılımlarınızla entegre ederek veri bütünlüğü sağlıyoruz.",
    intro:
      "Kullandığınız ERP ve CRM sistemlerini e-ticaret, muhasebe, üretim ve saha uygulamalarınızla entegre ederek tüm iş süreçlerinizi tek bir veri akışında birleştiriyoruz.",
    features: [
      {
        title: "Veri Bütünlüğü",
        description:
          "Sistemler arası çift yönlü, tutarlı ve hatasız veri senkronizasyonu.",
      },
      {
        title: "Otomasyon",
        description:
          "Manuel veri girişini ortadan kaldıran otomatik aktarım süreçleri.",
      },
      {
        title: "Esnek Mimari",
        description:
          "Farklı sürüm ve sağlayıcılara uyum sağlayan adaptör tabanlı yapı.",
      },
    ],
    deliverables: [
      "ERP ↔ e-ticaret / pazaryeri entegrasyonu",
      "CRM ↔ muhasebe ve faturalama entegrasyonu",
      "Stok, cari ve sipariş senkronizasyonu",
      "Özel raporlama ve konsolidasyon çözümleri",
    ],
    seo: {
      title: "ERP / CRM Entegrasyonları",
      description:
        "ERP ve CRM entegrasyon hizmetleri. E-ticaret, muhasebe ve üretim sistemlerinizi tek veri akışında birleştiren güvenli entegrasyon çözümleri.",
      keywords: [
        "erp entegrasyonu",
        "crm entegrasyonu",
        "sistem entegrasyonu",
        "veri senkronizasyonu",
      ],
    },
  },
  {
    slug: "api-entegrasyonlari",
    title: "API ve Sistem Entegrasyonları",
    shortTitle: "API Entegrasyonları",
    icon: "plug",
    excerpt:
      "REST API geliştirme, üçüncü parti servis entegrasyonu ve sistemler arası veri köprüleri.",
    intro:
      "Farklı yazılımların birbiriyle konuşmasını sağlıyoruz. Güvenli REST API'ler geliştiriyor, ödeme, kargo, e-fatura ve pazaryeri gibi üçüncü parti servisleri sistemlerinize entegre ediyoruz.",
    features: [
      {
        title: "Güvenli API",
        description:
          "Kimlik doğrulama, hız sınırlama ve sürümleme ile kurumsal düzeyde API'ler.",
      },
      {
        title: "Üçüncü Parti Servisler",
        description:
          "Ödeme, kargo, e-fatura, SMS ve pazaryeri servislerine hazır entegrasyon.",
      },
      {
        title: "Dayanıklılık",
        description:
          "Hata toleranslı, yeniden deneme ve kayıt (log) mekanizmalı köprüler.",
      },
    ],
    deliverables: [
      "REST API tasarımı, geliştirme ve dokümantasyonu",
      "Ödeme / kargo / e-fatura servis entegrasyonları",
      "Pazaryeri (Trendyol, Hepsiburada vb.) entegrasyonları",
      "Webhook ve gerçek zamanlı veri akışı çözümleri",
    ],
    seo: {
      title: "API ve Sistem Entegrasyonları",
      description:
        "REST API geliştirme ve sistem entegrasyonu hizmetleri. Ödeme, kargo, e-fatura ve pazaryeri servislerini güvenle sistemlerinize bağlıyoruz.",
      keywords: [
        "api entegrasyonu",
        "rest api geliştirme",
        "sistem entegrasyonu",
        "pazaryeri entegrasyonu",
      ],
    },
  },
  {
    slug: "yazilim-danismanligi",
    title: "Yazılım Danışmanlığı, Bakım ve Destek",
    shortTitle: "Yazılım Danışmanlığı",
    icon: "compass",
    excerpt:
      "Yazılım mimarisi danışmanlığı, kod kalitesi denetimi, bakım ve uzun vadeli teknik destek.",
    intro:
      "Doğru teknoloji seçimi, sağlam mimari ve sürdürülebilir kod için yanınızdayız. Mevcut yazılımlarınızın bakımını üstleniyor, uzun vadeli teknik destek sağlıyoruz.",
    features: [
      {
        title: "Mimari Danışmanlık",
        description:
          "Teknoloji seçimi, mimari tasarım ve ölçeklenebilirlik planlaması.",
      },
      {
        title: "Kod Denetimi",
        description:
          "Kod kalitesi, güvenlik ve performans denetimi ile iyileştirme yol haritası.",
      },
      {
        title: "Bakım & Destek",
        description:
          "SLA temelli, öngörülebilir ve sürekli teknik destek hizmeti.",
      },
    ],
    deliverables: [
      "Yazılım mimarisi ve teknoloji danışmanlığı",
      "Kod kalitesi, güvenlik ve performans denetimi",
      "Mevcut projelerin devralınması ve bakımı",
      "SLA temelli sürekli teknik destek",
    ],
    seo: {
      title: "Yazılım Danışmanlığı, Bakım ve Destek",
      description:
        "Yazılım mimarisi danışmanlığı, kod denetimi, bakım ve uzun vadeli teknik destek hizmetleri. Sürdürülebilir ve güvenli yazılımlar için Viarsoft.",
      keywords: [
        "yazılım danışmanlığı",
        "yazılım mimarisi danışmanlığı",
        "yazılım bakım destek",
        "kod denetimi",
      ],
    },
  },
];

/** Slug -> Service hızlı erişim */
export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/**
 * Ana sayfa hizmet grid'i. İstenen 8 kartı karşılar:
 * 7 hizmet detay sayfasına linklenir + "Yazılım Mimari Danışmanlığı"
 * kartı danışmanlık sayfasına yönlenir.
 */
export const homeServiceCards: {
  title: string;
  icon: IconName;
  excerpt: string;
  href: string;
}[] = [
  ...services.map((s) => ({
    title: s.shortTitle,
    icon: s.icon,
    excerpt: s.excerpt,
    href: `/hizmetler/${s.slug}/`,
  })),
  {
    title: "Yazılım Mimari Danışmanlığı",
    icon: "layers",
    excerpt:
      "Doğru mimari kararlar, teknoloji seçimi ve ölçeklenebilirlik planlaması ile projelerinizi sağlam temele oturtuyoruz.",
    href: "/hizmetler/yazilim-danismanligi/",
  },
];
