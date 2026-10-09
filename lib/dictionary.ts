import type { Locale } from "@/lib/i18n";

/**
 * Arayüz metinleri (iki dil). Veri içerikleri (hizmetler, ürünler,
 * teknolojiler, süreç) lib/data/* altında dile göre tutulur.
 */
const tr = {
  site: {
    slogan: "İşletmeniz İçin Modern ve Güvenilir Yazılım Çözümleri",
    description:
      "Viarsoft; KoçPro ve Exper Cebimde gibi kendi yazılım ürünlerini geliştiren, işletmelere özel web, mobil ve entegrasyon çözümleri sunan bir yazılım şirketidir.",
  },
  nav: {
    home: "Ana Sayfa",
    products: "Ürünler",
    services: "Hizmetler",
    technologies: "Teknolojiler",
    about: "Hakkımızda",
    contact: "İletişim",
    blog: "Blog",
  },
  header: {
    cta: "Teklif Al",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    skip: "İçeriğe geç",
    language: "Dil seçimi",
  },
  logoLabel: "Viarsoft ana sayfa",
  footer: {
    about:
      "Viarsoft; kendi yazılım ürünlerini geliştiren ve işletmelere özel web, mobil ve entegrasyon çözümleri sunan bir yazılım şirketidir.",
    products: "Ürünlerimiz",
    services: "Hizmetler",
    corporate: "Kurumsal",
    contact: "İletişim",
    technologies: "Teknolojiler",
    rights: "Tüm hakları saklıdır.",
    founded: "Kuruluş",
    mersis: "MERSİS No",
    tax: (office: string, no: string) => `${office} V.D. ${no}`,
  },
  hero: {
    badge: "Kurumsal Yazılım Çözümleri",
    titleBefore: "Modern ve ",
    titleAccent: "güvenilir",
    titleAfter: " yazılım çözümleri",
    text: "Kendi yazılım ürünlerimizi geliştiriyor; işletmenize özel web, mobil ve entegrasyon çözümleri sunuyoruz — ölçeklenebilir, güvenli ve uzun ömürlü.",
    primary: "Projenizi Konuşalım",
    secondary: "Ürünlerimiz",
    trust: ["İhtiyaca özel", "Uzun vadeli destek", "Güvenli mimari"],
  },
  mockup: {
    live: "Canlı",
    kpis: [
      { label: "Aktif Sipariş", value: "1.284" },
      { label: "Stok Kalemi", value: "8.640" },
      { label: "Gelir", value: "₺2.1M" },
    ],
    weekly: "Haftalık Performans",
  },
  sections: {
    products: {
      eyebrow: "Ürünlerimiz",
      title: "Kendi ürünlerimizi geliştiriyor ve işletiyoruz",
      description:
        "Viarsoft'un sıfırdan tasarlayıp geliştirdiği ve kendisinin işlettiği yazılım ürünleri.",
      logoAlt: (name: string) => `${name} logosu`,
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Uçtan uca yazılım hizmetleri",
      description: "Fikirden canlıya, tüm yazılım ihtiyaçlarınızda yanınızdayız.",
      more: "Detaylı bilgi",
    },
    whyUs: {
      eyebrow: "Neden Viarsoft?",
      title: "Güvenilir bir yazılım ortağı",
      description: "Kod yazmaktan fazlasını yapıyoruz; uzun vadede yanınızdayız.",
    },
    technologies: {
      eyebrow: "Teknolojiler",
      title: "Kanıtlanmış teknolojiler",
      description:
        "Performans, güvenlik ve sürdürülebilirlik için sektör standardı araçlar.",
    },
    process: {
      eyebrow: "Süreç",
      title: "Şeffaf ve öngörülebilir",
      description: "Her projeyi net adımlarla yönetir, her aşamada bilgilendiririz.",
    },
  },
  cta: {
    title: "Yazılım Projenizi Birlikte Hayata Geçirelim",
    description:
      "İş süreçlerinize değer katacak özel yazılım çözümleri için Viarsoft ile iletişime geçin.",
    button: "İletişime Geç",
  },
  facts: {
    legalName: "Ticaret unvanı",
    founded: "Kuruluş",
    foundedValue: (label: string) => `${label}, Samsun`,
    address: "Adres",
    mersis: "MERSİS No",
    tax: "Vergi dairesi / No",
    taxValue: (office: string, no: string) => `${office} / ${no}`,
    email: "E-posta",
    websites: "Web siteleri",
  },
  pages: {
    home: {
      title: "Viarsoft — İşletmeniz İçin Modern ve Güvenilir Yazılım Çözümleri",
    },
    services: {
      metaTitle: "Hizmetlerimiz",
      metaDescription:
        "Viarsoft yazılım hizmetleri: özel yazılım geliştirme, web ve mobil uygulamalar, masaüstü yazılımlar, ERP/CRM ve API entegrasyonları, yazılım danışmanlığı.",
      keywords: [
        "yazılım hizmetleri",
        "özel yazılım geliştirme",
        "web uygulaması",
        "mobil uygulama",
        "api entegrasyonu",
      ],
      eyebrow: "Hizmetler",
      title: "Uçtan Uca Yazılım Hizmetleri",
      description:
        "İşletmenizin dijital ihtiyaçlarını karşılayan geniş hizmet yelpazemizle, fikir aşamasından canlı sisteme kadar yanınızdayız.",
      view: "İncele",
    },
    serviceDetail: {
      eyebrow: "Hizmet",
      quote: "Teklif Alın",
      featuresTitle: "Öne Çıkan Yetkinlikler",
      scopeTitle: "Bu kapsamda neler yapıyoruz?",
      scopeIntro: (name: string) =>
        `${name} alanında, işletmenizin ihtiyaçlarına göre özelleştirilmiş çözümler sunuyoruz. Başlıca çalışma alanlarımız:`,
      sideTitle: "Projenize başlamaya hazır mısınız?",
      sideText:
        "İhtiyacınızı birlikte analiz edelim, size en uygun çözümü ve yol haritasını sunalım. İlk görüşme ve teklif ücretsizdir.",
      contact: "İletişime Geç",
      all: "Tüm Hizmetler",
      related: "Diğer Hizmetler",
    },
    technologies: {
      metaTitle: "Teknolojiler",
      metaDescription:
        "Viarsoft'un kullandığı teknolojiler: C#, .NET, Java, JavaScript, TypeScript, React, Next.js, Python, C++, Delphi, SQL Server, PostgreSQL, Docker ve daha fazlası.",
      keywords: [
        "yazılım teknolojileri",
        ".net geliştirme",
        "react next.js",
        "sql server postgresql",
        "docker",
      ],
      eyebrow: "Teknolojiler",
      title: "Kullandığımız Teknolojiler",
      description:
        "Her projede ihtiyaca en uygun, kanıtlanmış ve güncel teknolojileri seçiyoruz. Modern araçlarla performanslı ve güvenli çözümler üretiyoruz.",
      highlights: [
        {
          icon: "bolt" as const,
          title: "Performans",
          description:
            "Doğru teknoloji seçimiyle hızlı, ölçeklenebilir ve verimli sistemler kurarız.",
        },
        {
          icon: "shield" as const,
          title: "Güvenlik",
          description:
            "Güvenli kodlama pratikleri ve güncel araçlarla veri güvenliğini önceliklendiririz.",
        },
        {
          icon: "refresh" as const,
          title: "Sürdürülebilirlik",
          description:
            "Uzun ömürlü, bakımı kolay ve topluluk desteği güçlü teknolojileri tercih ederiz.",
        },
      ],
    },
    about: {
      metaTitle: "Hakkımızda",
      metaDescription:
        "Viarsoft; Temmuz 2026'da Samsun'da kurulan, KoçPro ve Exper Cebimde gibi kendi yazılım ürünlerini geliştiren ve işletmelere özel çözümler sunan bir yazılım şirketidir.",
      keywords: ["Viarsoft hakkında", "yazılım firması", "kurumsal yazılım", "hakkımızda"],
      eyebrow: "Hakkımızda",
      title: "İşletmeler İçin Güvenilir Yazılım Ortağı",
      description:
        "Viarsoft; Temmuz 2026'da Samsun'da kurulan, kendi yazılım ürünlerini geliştiren ve işletmelere özel web, mobil ve entegrasyon çözümleri sunan bir yazılım şirketidir.",
      storyBadge: "Biz Kimiz?",
      storyTitle: "İşinizi anlayan bir ekip",
      story: [
        "Viarsoft, Temmuz 2026'da Samsun'da kuruldu. Yaşam koçları için abonelik tabanlı yönetim platformu KoçPro ile uzaktan oto ekspertiz pazar yeri Exper Cebimde'yi kendimiz geliştiriyor ve işletiyoruz.",
        "Ürünlerimizin yanında, işletmelerin kendine özgü iş süreçlerini derinlemesine anlayarak, bu süreçlere birebir uyan yazılım çözümleri geliştiriyoruz. Hazır kalıpların ötesine geçip, her müşterimiz için sürdürülebilir ve ölçeklenebilir sistemler kuruyoruz.",
        "Web, masaüstü ve mobil platformlarda; ERP/CRM ve API entegrasyonlarında edindiğimiz deneyimle, KOBİ'lerden üretim, servis ve ticaret firmalarına kadar geniş bir yelpazede projeler hayata geçiriyoruz. Temiz kod, güvenli mimari ve uzun vadeli destek anlayışımızla fark yaratıyoruz.",
      ],
      values: [
        {
          icon: "compass" as const,
          title: "Misyonumuz",
          description:
            "İşletmelerin dijital dönüşümünü, ihtiyaca özel ve sürdürülebilir yazılımlarla hızlandırmak; teknolojiyi erişilebilir ve değer üreten bir araç haline getirmek.",
        },
        {
          icon: "rocket" as const,
          title: "Vizyonumuz",
          description:
            "Kurumların uzun vadeli teknoloji ortağı olmak; kalite, güven ve şeffaflıkla anılan bir yazılım markası olarak sürdürülebilir çözümler üretmek.",
        },
      ],
      valuesBadge: "Değerlerimiz",
      valuesTitle: "Bizi biz yapan ilkeler",
      valuesText: "Müşterilerimizle kurduğumuz ilişkiyi şekillendiren temel değerler.",
      companyBadge: "Şirket",
      companyTitle: "Şirket bilgileri",
      companyText:
        "Viarsoft, Türkiye'de kayıtlı bir limited şirkettir. İki ürünümüz de ekibimiz tarafından geliştirilir ve her ürünün web sitesinde işletmeci şirket olarak Viarsoft yer alır.",
    },
    contact: {
      metaTitle: "İletişim",
      metaDescription:
        "Viarsoft ile iletişime geçin. Özel yazılım, web, mobil ve entegrasyon projeleriniz için ücretsiz görüşme ve teklif alın.",
      keywords: ["Viarsoft iletişim", "yazılım teklifi", "yazılım firması iletişim"],
      eyebrow: "İletişim",
      title: "Projenizi Konuşalım",
      description:
        "İhtiyacınızı anlatın, size en uygun çözümü ve yol haritasını birlikte belirleyelim. İlk görüşme ve teklif ücretsizdir.",
      infoTitle: "İletişim Bilgileri",
      infoText: "Aşağıdaki kanallardan bize ulaşabilir veya formu doldurabilirsiniz.",
      email: "E-posta",
      address: "Adres",
      companyTitle: "Şirket Bilgileri",
      formTitle: "Bize Yazın",
      formText: "Formu doldurun, en kısa sürede size dönüş yapalım.",
    },
    blog: {
      metaTitle: "Blog",
      metaDescription:
        "Viarsoft blog: yazılım geliştirme, kurumsal dijital dönüşüm, entegrasyon ve teknoloji üzerine güncel yazılar yakında burada.",
      keywords: ["yazılım blog", "teknoloji yazıları", "dijital dönüşüm"],
      eyebrow: "Blog",
      title: "Yazılım ve Teknoloji Üzerine",
      description:
        "Yazılım geliştirme, dijital dönüşüm ve entegrasyon konularında deneyimlerimizi paylaşacağımız içerikler yakında yayında.",
      notice: "İçeriklerimiz hazırlanıyor — planladığımız konulardan bazıları:",
      soon: "Yakında",
      topics: [
        {
          icon: "code" as const,
          category: "Yazılım Geliştirme",
          title: "Özel Yazılım mı, Hazır Paket mi?",
          excerpt:
            "İşletmeniz için doğru kararı verirken göz önünde bulundurmanız gereken kriterler.",
        },
        {
          icon: "refresh" as const,
          category: "Entegrasyon",
          title: "ERP Entegrasyonlarında Sık Yapılan Hatalar",
          excerpt:
            "Veri bütünlüğünü koruyan sağlam entegrasyonlar için pratik öneriler.",
        },
        {
          icon: "shield" as const,
          category: "Güvenlik",
          title: "Kurumsal Yazılımlarda Güvenlik Kontrol Listesi",
          excerpt:
            "Uygulamalarınızı korumak için temel güvenlik pratikleri ve öneriler.",
        },
      ],
      ctaTitle: "Sorularınız mı var?",
      ctaText:
        "Yazılım ihtiyaçlarınız hakkında konuşmak için blog içeriklerini beklemenize gerek yok. Bugün bize ulaşın.",
    },
  },
  form: {
    name: "Ad Soyad",
    email: "E-posta",
    company: "Firma",
    subject: "Konu",
    message: "Mesajınız",
    placeholder: "Projeniz veya ihtiyaçlarınız hakkında kısaca bahsedin...",
    submit: "Mesajı Gönder",
    sent: "E-posta uygulamanız hazır taslakla açıldı.",
    noteBefore: "Form gönderiminde varsayılan e-posta uygulamanız açılır. Dilerseniz doğrudan",
    noteAfter: " adresine yazabilirsiniz.",
    defaultSubject: "İletişim Talebi",
  },
};

export type Dictionary = typeof tr;

const en: Dictionary = {
  site: {
    slogan: "Modern and Reliable Software Solutions for Your Business",
    description:
      "Viarsoft is a software company that builds its own software products, such as KoçPro and Exper Cebimde, and delivers custom web, mobile and integration solutions for businesses.",
  },
  nav: {
    home: "Home",
    products: "Products",
    services: "Services",
    technologies: "Technologies",
    about: "About",
    contact: "Contact",
    blog: "Blog",
  },
  header: {
    cta: "Get a Quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    language: "Language",
  },
  logoLabel: "Viarsoft home page",
  footer: {
    about:
      "Viarsoft is a software company that builds its own software products and delivers custom web, mobile and integration solutions for businesses.",
    products: "Our products",
    services: "Services",
    corporate: "Company",
    contact: "Contact",
    technologies: "Technologies",
    rights: "All rights reserved.",
    founded: "Founded",
    mersis: "MERSİS No",
    tax: (office: string, no: string) => `Tax ID ${no} (${office} Tax Office)`,
  },
  hero: {
    badge: "Business Software Solutions",
    titleBefore: "Modern and ",
    titleAccent: "reliable",
    titleAfter: " software solutions",
    text: "We build our own software products and deliver custom web, mobile and integration solutions for your business: scalable, secure and built to last.",
    primary: "Let's Talk About Your Project",
    secondary: "Our Products",
    trust: ["Tailored to your needs", "Long-term support", "Secure architecture"],
  },
  mockup: {
    live: "Live",
    kpis: [
      { label: "Active Orders", value: "1,284" },
      { label: "Stock Items", value: "8,640" },
      { label: "Revenue", value: "₺2.1M" },
    ],
    weekly: "Weekly Performance",
  },
  sections: {
    products: {
      eyebrow: "Our products",
      title: "We build and operate our own software products",
      description: "Software products designed, built and operated in-house by Viarsoft.",
      logoAlt: (name: string) => `${name} logo`,
    },
    services: {
      eyebrow: "Services",
      title: "End-to-end software services",
      description: "From idea to production, we support all your software needs.",
      more: "Learn more",
    },
    whyUs: {
      eyebrow: "Why Viarsoft?",
      title: "A reliable software partner",
      description: "We do more than write code; we're with you for the long run.",
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Proven technologies",
      description:
        "Industry-standard tools for performance, security and maintainability.",
    },
    process: {
      eyebrow: "Process",
      title: "Transparent and predictable",
      description:
        "We run every project in clear steps and keep you informed at each stage.",
    },
  },
  cta: {
    title: "Let's Build Your Software Project Together",
    description:
      "Get in touch with Viarsoft for custom software that adds value to your business processes.",
    button: "Get in Touch",
  },
  facts: {
    legalName: "Legal name",
    founded: "Founded",
    foundedValue: (label: string) => `${label}, Samsun, Türkiye`,
    address: "Registered address",
    mersis: "MERSİS no. (Central Registry)",
    tax: "Tax ID",
    taxValue: (office: string, no: string) => `${no} (${office} Tax Office)`,
    email: "Email",
    websites: "Websites",
  },
  pages: {
    home: {
      title: "Viarsoft — Modern and Reliable Software Solutions for Your Business",
    },
    services: {
      metaTitle: "Our Services",
      metaDescription:
        "Viarsoft software services: custom software development, web and mobile applications, desktop software, ERP/CRM and API integrations, and software consulting.",
      keywords: [
        "software services",
        "custom software development",
        "web application",
        "mobile app",
        "api integration",
      ],
      eyebrow: "Services",
      title: "End-to-End Software Services",
      description:
        "With a broad range of services covering your business's digital needs, we're with you from the idea stage to a live system.",
      view: "View",
    },
    serviceDetail: {
      eyebrow: "Service",
      quote: "Get a Quote",
      featuresTitle: "Key Capabilities",
      scopeTitle: "What do we do in this area?",
      scopeIntro: (name: string) =>
        `In ${name}, we deliver solutions tailored to your business needs. Our main areas of work:`,
      sideTitle: "Ready to start your project?",
      sideText:
        "Let's analyse your needs together and present the most suitable solution and roadmap. The first meeting and quote are free.",
      contact: "Get in Touch",
      all: "All Services",
      related: "Other Services",
    },
    technologies: {
      metaTitle: "Technologies",
      metaDescription:
        "Technologies Viarsoft uses: C#, .NET, Java, JavaScript, TypeScript, React, Next.js, Python, C++, Delphi, SQL Server, PostgreSQL, Docker and more.",
      keywords: [
        "software technologies",
        ".net development",
        "react next.js",
        "sql server postgresql",
        "docker",
      ],
      eyebrow: "Technologies",
      title: "Technologies We Use",
      description:
        "For every project we choose proven, up-to-date technologies that fit the need, building fast and secure solutions with modern tools.",
      highlights: [
        {
          icon: "bolt" as const,
          title: "Performance",
          description:
            "We build fast, scalable and efficient systems by choosing the right technology.",
        },
        {
          icon: "shield" as const,
          title: "Security",
          description:
            "We prioritise data security with secure coding practices and up-to-date tooling.",
        },
        {
          icon: "refresh" as const,
          title: "Sustainability",
          description:
            "We prefer long-lived, maintainable technologies with strong community support.",
        },
      ],
    },
    about: {
      metaTitle: "About Us",
      metaDescription:
        "Viarsoft is a software company founded in July 2026 in Samsun, Türkiye. We build our own software products, KoçPro and Exper Cebimde, and deliver custom solutions for businesses.",
      keywords: ["about Viarsoft", "software company Türkiye", "KoçPro", "Exper Cebimde"],
      eyebrow: "About Us",
      title: "A Reliable Software Partner for Businesses",
      description:
        "Viarsoft is a software company founded in July 2026 in Samsun, Türkiye. We build our own software products and deliver custom web, mobile and integration solutions for businesses.",
      storyBadge: "Who We Are",
      storyTitle: "A team that understands your business",
      story: [
        "Viarsoft was founded in July 2026 in Samsun, Türkiye. We develop and operate our own products: KoçPro, a subscription-based management platform for life coaches, and Exper Cebimde, a remote vehicle inspection marketplace.",
        "Alongside our products, we build software that fits each business's own processes, based on a deep understanding of how they work. Going beyond ready-made templates, we build sustainable and scalable systems for every client.",
        "With our experience across web, desktop and mobile platforms and in ERP/CRM and API integrations, we deliver projects for a wide range of companies, from SMEs to manufacturing, service and trading businesses. Clean code, secure architecture and long-term support are what set us apart.",
      ],
      values: [
        {
          icon: "compass" as const,
          title: "Our Mission",
          description:
            "To accelerate businesses' digital transformation with tailored, sustainable software, and to make technology an accessible tool that creates value.",
        },
        {
          icon: "rocket" as const,
          title: "Our Vision",
          description:
            "To be a long-term technology partner for organisations, and a software brand known for quality, trust and transparency.",
        },
      ],
      valuesBadge: "Our Values",
      valuesTitle: "The principles that define us",
      valuesText: "The core values that shape our relationships with our clients.",
      companyBadge: "Company",
      companyTitle: "Company information",
      companyText:
        "Viarsoft is a limited liability company registered in Türkiye. Both products are developed in-house by our team, and each product website names Viarsoft as the operating company.",
    },
    contact: {
      metaTitle: "Contact",
      metaDescription:
        "Get in touch with Viarsoft. Free consultation and quote for your custom software, web, mobile and integration projects.",
      keywords: ["Viarsoft contact", "software quote", "software company contact"],
      eyebrow: "Contact",
      title: "Let's Talk About Your Project",
      description:
        "Tell us what you need and we'll work out the best solution and roadmap together. The first meeting and quote are free.",
      infoTitle: "Contact Details",
      infoText: "Reach us through the channels below or fill in the form.",
      email: "Email",
      address: "Address",
      companyTitle: "Company Information",
      formTitle: "Write to Us",
      formText: "Fill in the form and we'll get back to you shortly.",
    },
    blog: {
      metaTitle: "Blog",
      metaDescription:
        "Viarsoft blog: articles on software development, digital transformation, integration and technology, coming soon.",
      keywords: ["software blog", "technology articles", "digital transformation"],
      eyebrow: "Blog",
      title: "On Software and Technology",
      description:
        "Articles sharing our experience in software development, digital transformation and integration are coming soon.",
      notice: "Our articles are in preparation. Some of the topics we have planned:",
      soon: "Coming soon",
      topics: [
        {
          icon: "code" as const,
          category: "Software Development",
          title: "Custom Software or Off-the-Shelf?",
          excerpt:
            "Criteria to consider when making the right decision for your business.",
        },
        {
          icon: "refresh" as const,
          category: "Integration",
          title: "Common Mistakes in ERP Integrations",
          excerpt:
            "Practical tips for robust integrations that protect data integrity.",
        },
        {
          icon: "shield" as const,
          category: "Security",
          title: "A Security Checklist for Business Software",
          excerpt:
            "Core security practices and recommendations to protect your applications.",
        },
      ],
      ctaTitle: "Have questions?",
      ctaText:
        "You don't have to wait for our blog to talk about your software needs. Contact us today.",
    },
  },
  form: {
    name: "Full name",
    email: "Email",
    company: "Company",
    subject: "Subject",
    message: "Your message",
    placeholder: "Briefly tell us about your project or needs...",
    submit: "Send Message",
    sent: "Your email app opened with a ready draft.",
    noteBefore: "Submitting the form opens your default email app. You can also write directly to",
    noteAfter: ".",
    defaultSubject: "Contact Request",
  },
};

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
