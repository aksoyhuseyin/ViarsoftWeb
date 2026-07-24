import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Viarsoft blog: yazılım geliştirme, kurumsal dijital dönüşüm, entegrasyon ve teknoloji üzerine güncel yazılar yakında burada.",
  path: "/blog/",
  keywords: ["yazılım blog", "teknoloji yazıları", "dijital dönüşüm"],
});

// İçerik hazır olduğunda buradaki liste gerçek yazılarla doldurulup
// app/blog/[slug]/page.tsx dinamik rotası eklenebilir.
const upcomingTopics = [
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
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Yazılım ve Teknoloji Üzerine"
        description="Yazılım geliştirme, dijital dönüşüm ve entegrasyon konularında deneyimlerimizi paylaşacağımız içerikler yakında yayında."
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <Reveal className="mb-12 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50/50 px-4 py-2 text-sm font-medium text-navy-600">
            <Icon name="clock" className="h-4 w-4 text-accent-600" />
            İçeriklerimiz hazırlanıyor — planladığımız konulardan bazıları:
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {upcomingTopics.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 70}>
                <article className="card-lift flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Icon name={topic.icon} className="h-5 w-5" />
                  </div>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent-600">
                    {topic.category}
                  </span>
                  <h2 className="mt-2 font-display text-lg font-semibold text-navy-900">
                    {topic.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {topic.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-400">
                    <Icon name="clock" className="h-4 w-4" />
                    Yakında
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Sorularınız mı var?"
        description="Yazılım ihtiyaçlarınız hakkında konuşmak için blog içeriklerini beklemenize gerek yok. Bugün bize ulaşın."
        buttonLabel="İletişime Geç"
      />
    </>
  );
}
