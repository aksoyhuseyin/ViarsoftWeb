import type { IconName } from "@/components/Icon";
import type { Locale } from "@/lib/i18n";

/** "Neden Viarsoft?" güven bölümü (6 madde) */
export interface Advantage {
  title: string;
  icon: IconName;
  description: string;
}

export const advantages: Record<Locale, Advantage[]> = {
  tr: [
    {
      title: "İhtiyaca Özel Analiz",
      icon: "search",
      description:
        "Kod yazmadan önce süreçlerinizi dinler, gerçek ihtiyacı doğru tanımlarız.",
    },
    {
      title: "Temiz ve Sürdürülebilir Kod",
      icon: "sparkles",
      description:
        "Okunabilir, test edilebilir ve uzun vadede bakımı kolay bir kod tabanı üretiriz.",
    },
    {
      title: "Ölçeklenebilir Mimari",
      icon: "expand",
      description:
        "Büyüyen veri ve kullanıcı hacmine uyum sağlayan esnek mimariler tasarlarız.",
    },
    {
      title: "Güvenli Yazılım Geliştirme",
      icon: "shield",
      description:
        "Güvenlik en baştan tasarıma dahildir; veri ve erişim güvenliğini önceliklendiririz.",
    },
    {
      title: "Uzun Vadeli Teknik Destek",
      icon: "lifebuoy",
      description:
        "Teslimden sonra da yanınızdayız; sürekli bakım ve destek sağlarız.",
    },
    {
      title: "Şeffaf Proje Süreci",
      icon: "eye",
      description:
        "Her aşamada net iletişim, düzenli demo ve öngörülebilir ilerleme sunarız.",
    },
  ],
  en: [
    {
      title: "Needs-Driven Analysis",
      icon: "search",
      description:
        "Before writing any code, we listen to your processes and define the real need correctly.",
    },
    {
      title: "Clean, Maintainable Code",
      icon: "sparkles",
      description:
        "We produce a readable, testable codebase that stays easy to maintain over time.",
    },
    {
      title: "Scalable Architecture",
      icon: "expand",
      description:
        "We design flexible architectures that grow with your data and user volume.",
    },
    {
      title: "Secure Development",
      icon: "shield",
      description:
        "Security is part of the design from day one; we prioritise data and access security.",
    },
    {
      title: "Long-Term Technical Support",
      icon: "lifebuoy",
      description:
        "We stay with you after delivery, with ongoing maintenance and support.",
    },
    {
      title: "Transparent Process",
      icon: "eye",
      description:
        "Clear communication, regular demos and predictable progress at every stage.",
    },
  ],
};

/** Proje süreci adımları (5 adım) */
export interface ProcessStep {
  step: string;
  title: string;
  icon: IconName;
  description: string;
}

export const processSteps: Record<Locale, ProcessStep[]> = {
  tr: [
    {
      step: "01",
      title: "Analiz",
      icon: "search",
      description:
        "İhtiyaçlarınızı, iş süreçlerinizi ve hedeflerinizi detaylıca inceleriz.",
    },
    {
      step: "02",
      title: "Planlama",
      icon: "compass",
      description:
        "Kapsam, mimari, teknoloji ve zaman planını netleştiren yol haritası çıkarırız.",
    },
    {
      step: "03",
      title: "Tasarım",
      icon: "layers",
      description:
        "Kullanıcı deneyimi ve arayüz tasarımıyla çözümü somut hale getiririz.",
    },
    {
      step: "04",
      title: "Geliştirme",
      icon: "code",
      description:
        "Temiz kod ve düzenli demolarla, şeffaf biçimde yazılımı hayata geçiririz.",
    },
    {
      step: "05",
      title: "Test, Teslimat & Destek",
      icon: "rocket",
      description:
        "Test eder, canlıya alır ve uzun vadeli teknik destekle sürekliliği sağlarız.",
    },
  ],
  en: [
    {
      step: "01",
      title: "Analysis",
      icon: "search",
      description:
        "We examine your needs, business processes and goals in detail.",
    },
    {
      step: "02",
      title: "Planning",
      icon: "compass",
      description:
        "We produce a roadmap that pins down scope, architecture, technology and timeline.",
    },
    {
      step: "03",
      title: "Design",
      icon: "layers",
      description:
        "We make the solution concrete through user experience and interface design.",
    },
    {
      step: "04",
      title: "Development",
      icon: "code",
      description:
        "We build the software transparently, with clean code and regular demos.",
    },
    {
      step: "05",
      title: "Testing, Delivery & Support",
      icon: "rocket",
      description:
        "We test, go live and keep things running with long-term technical support.",
    },
  ],
};

/** Ana sayfa ve kurumsal sayfada kullanılan istatistikler */
export const stats: Record<Locale, { value: string; label: string }[]> = {
  tr: [
    { value: "2026", label: "Kuruluş yılı" },
    { value: "2", label: "Kendi yazılım ürünümüz" },
    { value: "16+", label: "Kullanılan teknoloji" },
    { value: "%100", label: "İhtiyaca özel çözüm" },
  ],
  en: [
    { value: "2026", label: "Year founded" },
    { value: "2", label: "In-house software products" },
    { value: "16+", label: "Technologies we use" },
    { value: "100%", label: "Tailor-made solutions" },
  ],
};
