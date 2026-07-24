import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services, serviceBySlug } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/jsonld";

// Statik export: yalnızca aşağıdaki slug'lar HTML olarak üretilir.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/hizmetler/${service.slug}/`,
    keywords: service.seo.keywords,
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceBySlug(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />

      <PageHeader
        eyebrow="Hizmet"
        title={service.title}
        description={service.intro}
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler/" },
          { name: service.shortTitle, path: `/hizmetler/${service.slug}/` },
        ]}
      >
        <ButtonLink href="/iletisim/" icon="arrow-right" size="lg">
          Teklif Alın
        </ButtonLink>
      </PageHeader>

      {/* Öne çıkan yetenekler */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Öne Çıkan Yetkinlikler
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 70}>
                <div className="card-lift h-full rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neler yapıyoruz */}
      <section className="border-y border-navy-100 bg-navy-50/50 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Bu kapsamda neler yapıyoruz?
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                {service.shortTitle} alanında, işletmenizin ihtiyaçlarına göre
                özelleştirilmiş çözümler sunuyoruz. Başlıca çalışma alanlarımız:
              </p>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Yan bilgi kartı */}
            <Reveal delay={120} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-lift">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-soft">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                Projenize başlamaya hazır mısınız?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                İhtiyacınızı birlikte analiz edelim, size en uygun çözümü ve yol
                haritasını sunalım. İlk görüşme ve teklif ücretsizdir.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/iletisim/" icon="arrow-right">
                  İletişime Geç
                </ButtonLink>
                <ButtonLink href="/hizmetler/" variant="ghost">
                  Tüm Hizmetler
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* İlgili hizmetler */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Diğer Hizmetler
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/hizmetler/${s.slug}/`}
                  className="card-lift group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 hover:border-accent-200"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:ring-accent-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {s.shortTitle}
                    </h3>
                    <p className="mt-1 text-sm text-navy-600 line-clamp-2">
                      {s.excerpt}
                    </p>
                  </div>
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
