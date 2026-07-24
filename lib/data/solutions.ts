import type { IconName } from "@/components/Icon";

export interface Solution {
  title: string;
  icon: IconName;
  description: string;
}

/** "Çözümler" bölümü — Viarsoft'un çözüm geliştirdiği alanlar */
export const solutions: Solution[] = [
  {
    title: "Stok ve Depo Yönetimi",
    icon: "box",
    description:
      "Gerçek zamanlı stok takibi, depo lokasyon yönetimi ve barkodlu giriş/çıkış süreçleri.",
  },
  {
    title: "Üretim Takip Sistemleri",
    icon: "factory",
    description:
      "İş emri, hat takibi ve üretim raporlaması ile şeffaf ve verimli üretim yönetimi.",
  },
  {
    title: "Servis ve Bakım Takibi",
    icon: "wrench",
    description:
      "Arıza kaydı, saha servisi, periyodik bakım ve garanti takibi için uçtan uca çözüm.",
  },
  {
    title: "Cari Hesap & Müşteri Yönetimi",
    icon: "users",
    description:
      "Cari kartlar, bakiye takibi ve müşteri ilişkileri yönetimi tek panelde.",
  },
  {
    title: "Raporlama ve Dashboard",
    icon: "chart",
    description:
      "Anlık KPI'lar, grafikler ve yönetim panelleri ile veriye dayalı karar desteği.",
  },
  {
    title: "E-Ticaret Entegrasyonları",
    icon: "cart",
    description:
      "Pazaryeri ve mağaza entegrasyonu, sipariş, stok ve fiyat senkronizasyonu.",
  },
  {
    title: "Muhasebe & ERP Entegrasyonları",
    icon: "calculator",
    description:
      "Fatura, cari ve stok verilerinin muhasebe ve ERP sistemleriyle otomatik akışı.",
  },
  {
    title: "Kurumsal Yönetim Panelleri",
    icon: "grid",
    description:
      "Rol bazlı yetkilendirme ile tüm operasyonu yöneten merkezi kontrol panelleri.",
  },
];
