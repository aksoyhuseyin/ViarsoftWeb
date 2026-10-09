import type { IconName } from "@/components/Icon";
import type { Locale } from "@/lib/i18n";

export interface Service {
  /** Diller arası ortak kimlik (dil düğmesi karşılığı bulur) */
  id: string;
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

const servicesTr: Service[] = [
  {
    id: "custom",
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
    id: "web",
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
    id: "desktop",
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
    id: "mobile",
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
    id: "erp-crm",
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
    id: "api",
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
    id: "consulting",
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


const servicesEn: Service[] = [
  {
    id: "custom",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    icon: "code",
    excerpt:
      "Scalable, maintainable business software built around the way your processes actually work.",
    intro:
      "We build custom software designed around your business's real needs rather than the limits of off-the-shelf packages, and we run the whole process with you, from analysis to delivery.",
    features: [
      {
        title: "Needs-Driven Analysis",
        description:
          "We study your processes on site and shape the software around your workflow.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Modular architecture that keeps up with growing users and data.",
      },
      {
        title: "Maintainable Code",
        description:
          "A testable, documented codebase that stays easy to maintain over the long term.",
      },
    ],
    deliverables: [
      "Business management panels and automation systems",
      "Process digitisation and workflow software",
      "Modernisation and rewrites of existing systems",
      "Secure role- and permission-based user management",
    ],
    seo: {
      title: "Custom Software Development",
      description:
        "Custom, scalable and maintainable business software development. Digital transformation with Viarsoft, from analysis to delivery.",
      keywords: [
        "custom software development",
        "business software",
        "software development company",
        "process automation",
      ],
    },
  },
  {
    id: "web",
    slug: "web-applications",
    title: "Web Application Development",
    shortTitle: "Web Applications",
    icon: "globe",
    excerpt:
      "Fast, secure and modern web applications: business dashboards, portals and SaaS products.",
    intro:
      "We build fast, secure and mobile-friendly web applications with modern web technologies, from internal admin panels to customer portals.",
    features: [
      {
        title: "Modern Stack",
        description:
          "Maintainable, high-performance interfaces built with React, Next.js and TypeScript.",
      },
      {
        title: "Security First",
        description:
          "Authorisation, data validation and secure session management come as standard.",
      },
      {
        title: "High Performance",
        description:
          "Optimisation and caching for fast loads and a smooth user experience.",
      },
    ],
    deliverables: [
      "Business admin dashboards",
      "Customer and dealer portals",
      "SaaS products and multi-tenant systems",
      "Reporting and data visualisation interfaces",
    ],
    seo: {
      title: "Web Application Development",
      description:
        "Business web applications, admin dashboards and SaaS products. Fast, secure and scalable web software built with Next.js and React.",
      keywords: [
        "web application development",
        "web-based software",
        "saas development",
        "admin dashboard",
      ],
    },
  },
  {
    id: "desktop",
    slug: "desktop-software",
    title: "Desktop Software Development",
    shortTitle: "Desktop Software",
    icon: "monitor",
    excerpt:
      "Windows desktop applications: high-performance business tools that also work offline.",
    intro:
      "We build robust desktop applications for scenarios that need local hardware access and offline operation, delivering stable, fast and secure solutions with .NET, C# and C++.",
    features: [
      {
        title: "High Performance",
        description:
          "Architecture suited to heavy data processing and hardware access.",
      },
      {
        title: "Offline Operation",
        description:
          "Applications that keep working without an internet connection and sync later.",
      },
      {
        title: "System Integration",
        description:
          "Hardware integration with barcode scanners, scales, printers and production-line devices.",
      },
    ],
    deliverables: [
      "Warehouse, production and field operations applications",
      "Barcode / label and hardware-integrated systems",
      "Kiosk and point-of-sale (POS) applications",
      "Modernisation of legacy desktop applications",
    ],
    seo: {
      title: "Desktop Software Development",
      description:
        "Windows desktop application development with .NET, C# and C++: offline-capable, hardware-integrated business software.",
      keywords: [
        "desktop software development",
        "windows application",
        ".net desktop",
        "c# software",
      ],
    },
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: "smartphone",
    excerpt: "User-friendly, fast and secure mobile apps for iOS and Android.",
    intro:
      "We build mobile apps for field teams, customers and business partners, putting your business in their pocket with intuitive interfaces and solid infrastructure.",
    features: [
      {
        title: "Cross-Platform",
        description:
          "Efficient, consistent experiences on iOS and Android from a single codebase.",
      },
      {
        title: "Online & Offline",
        description:
          "Sync infrastructure that prevents data loss when the connection drops.",
      },
      {
        title: "Backend Integration",
        description:
          "Seamless data exchange with your existing ERP, CRM and APIs.",
      },
    ],
    deliverables: [
      "Field sales and service tracking apps",
      "Customer loyalty and ordering apps",
      "Warehouse counting and barcode scanning apps",
      "Internal (B2E) enterprise mobile solutions",
    ],
    seo: {
      title: "Mobile App Development",
      description:
        "iOS and Android app development. Fast, secure and scalable mobile solutions for field, sales, service and customer apps.",
      keywords: [
        "mobile app development",
        "ios android app",
        "enterprise mobile app",
        "field service app",
      ],
    },
  },
  {
    id: "erp-crm",
    slug: "erp-crm-integrations",
    title: "ERP / CRM Integrations",
    shortTitle: "ERP / CRM Integrations",
    icon: "refresh",
    excerpt:
      "We integrate your ERP and CRM systems with your other software to keep your data consistent.",
    intro:
      "We integrate the ERP and CRM systems you use with your e-commerce, accounting, production and field applications, bringing all your business processes into a single data flow.",
    features: [
      {
        title: "Data Integrity",
        description:
          "Two-way, consistent and error-free synchronisation between systems.",
      },
      {
        title: "Automation",
        description: "Automated transfers that eliminate manual data entry.",
      },
      {
        title: "Flexible Architecture",
        description:
          "An adapter-based design that works across versions and vendors.",
      },
    ],
    deliverables: [
      "ERP ↔ e-commerce / marketplace integration",
      "CRM ↔ accounting and invoicing integration",
      "Stock, customer account and order synchronisation",
      "Custom reporting and consolidation solutions",
    ],
    seo: {
      title: "ERP / CRM Integrations",
      description:
        "ERP and CRM integration services. Secure integrations that bring your e-commerce, accounting and production systems into one data flow.",
      keywords: [
        "erp integration",
        "crm integration",
        "system integration",
        "data synchronization",
      ],
    },
  },
  {
    id: "api",
    slug: "api-integrations",
    title: "API and System Integrations",
    shortTitle: "API Integrations",
    icon: "plug",
    excerpt:
      "REST API development, third-party service integration and data bridges between systems.",
    intro:
      "We make different software talk to each other. We build secure REST APIs and integrate third-party services such as payments, shipping, e-invoicing and marketplaces into your systems.",
    features: [
      {
        title: "Secure APIs",
        description:
          "Enterprise-grade APIs with authentication, rate limiting and versioning.",
      },
      {
        title: "Third-Party Services",
        description:
          "Ready integrations for payment, shipping, e-invoice, SMS and marketplace services.",
      },
      {
        title: "Resilience",
        description:
          "Fault-tolerant bridges with retry and logging mechanisms.",
      },
    ],
    deliverables: [
      "REST API design, development and documentation",
      "Payment / shipping / e-invoice service integrations",
      "Marketplace integrations (Trendyol, Hepsiburada, etc.)",
      "Webhook and real-time data flow solutions",
    ],
    seo: {
      title: "API and System Integrations",
      description:
        "REST API development and system integration services. We securely connect payment, shipping, e-invoicing and marketplace services to your systems.",
      keywords: [
        "api integration",
        "rest api development",
        "system integration",
        "marketplace integration",
      ],
    },
  },
  {
    id: "consulting",
    slug: "software-consulting",
    title: "Software Consulting, Maintenance and Support",
    shortTitle: "Software Consulting",
    icon: "compass",
    excerpt:
      "Software architecture consulting, code quality audits, maintenance and long-term technical support.",
    intro:
      "We help you choose the right technology, build a solid architecture and keep your code maintainable. We take over the maintenance of your existing software and provide long-term technical support.",
    features: [
      {
        title: "Architecture Consulting",
        description:
          "Technology selection, architecture design and scalability planning.",
      },
      {
        title: "Code Audit",
        description:
          "Code quality, security and performance audits with an improvement roadmap.",
      },
      {
        title: "Maintenance & Support",
        description:
          "SLA-based, predictable and continuous technical support.",
      },
    ],
    deliverables: [
      "Software architecture and technology consulting",
      "Code quality, security and performance audits",
      "Taking over and maintaining existing projects",
      "SLA-based continuous technical support",
    ],
    seo: {
      title: "Software Consulting, Maintenance and Support",
      description:
        "Software architecture consulting, code audits, maintenance and long-term technical support for sustainable, secure software. Viarsoft.",
      keywords: [
        "software consulting",
        "software architecture consulting",
        "software maintenance support",
        "code audit",
      ],
    },
  },
];

const servicesByLocale: Record<Locale, Service[]> = {
  tr: servicesTr,
  en: servicesEn,
};

export const getServices = (locale: Locale): Service[] => servicesByLocale[locale];

/** Slug -> Service hızlı erişim */
export const serviceBySlug = (locale: Locale, slug: string): Service | undefined =>
  servicesByLocale[locale].find((s) => s.slug === slug);

/**
 * Ana sayfa hizmet grid'i. İstenen 8 kartı karşılar:
 * 7 hizmet detay sayfasına linklenir + "Yazılım Mimari Danışmanlığı"
 * kartı danışmanlık sayfasına yönlenir.
 */
const architectureCard: Record<Locale, { title: string; excerpt: string }> = {
  tr: {
    title: "Yazılım Mimari Danışmanlığı",
    excerpt:
      "Doğru mimari kararlar, teknoloji seçimi ve ölçeklenebilirlik planlaması ile projelerinizi sağlam temele oturtuyoruz.",
  },
  en: {
    title: "Software Architecture Consulting",
    excerpt:
      "We put your projects on solid ground with the right architecture decisions, technology choices and scalability planning.",
  },
};

export const homeServiceCards = (
  locale: Locale,
  servicePath: (locale: Locale, slug: string) => string
): { title: string; icon: IconName; excerpt: string; href: string }[] => {
  const list = servicesByLocale[locale];
  const consulting = list.find((s) => s.id === "consulting")!;
  return [
    ...list.map((s) => ({
      title: s.shortTitle,
      icon: s.icon,
      excerpt: s.excerpt,
      href: servicePath(locale, s.slug),
    })),
    {
      ...architectureCard[locale],
      icon: "layers" as IconName,
      href: servicePath(locale, consulting.slug),
    },
  ];
};
