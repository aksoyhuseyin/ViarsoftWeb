import type { IconName } from "@/components/Icon";

/** "Neden Viarsoft?" güven bölümü (6 madde) */
export interface Advantage {
  title: string;
  icon: IconName;
  description: string;
}

export const advantages: Advantage[] = [
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
];

/** Proje süreci adımları (5 adım) */
export interface ProcessStep {
  step: string;
  title: string;
  icon: IconName;
  description: string;
}

export const processSteps: ProcessStep[] = [
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
];

/** Ana sayfa ve kurumsal sayfada kullanılan istatistikler */
export const stats: { value: string; label: string }[] = [
  { value: "10+", label: "Yıllık sektör tecrübesi" },
  { value: "50+", label: "Tamamlanan proje" },
  { value: "16+", label: "Kullanılan teknoloji" },
  { value: "%100", label: "İhtiyaca özel çözüm" },
];
