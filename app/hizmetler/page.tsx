import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hizmetlerimiz",
  description:
    "Viarsoft yazılım hizmetleri: özel yazılım geliştirme, web ve mobil uygulamalar, masaüstü yazılımlar, ERP/CRM ve API entegrasyonları, yazılım danışmanlığı.",
  path: "/hizmetler/",
  keywords: [
    "yazılım hizmetleri",
    "özel yazılım geliştirme",
    "web uygulaması",
    "mobil uygulama",
    "api entegrasyonu",
  ],
});

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hizmetler"
        title="Uçtan Uca Yazılım Hizmetleri"
        description="İşletmenizin dijital ihtiyaçlarını karşılayan geniş hizmet yelpazemizle, fikir aşamasından canlı sisteme kadar yanınızdayız."
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler/" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  href={`/hizmetler/${service.slug}/`}
                  className="card-lift group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:ring-accent-600">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold text-navy-900">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {service.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-all duration-300 group-hover:gap-2.5">
                    İncele
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
