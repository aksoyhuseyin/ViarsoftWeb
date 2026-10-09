import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { getServices } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import { routes, servicePath, type Locale } from "@/lib/i18n";

export function ServicesView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.pages.services;
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={[
          { name: d.nav.home, path: routes.home[locale] },
          { name: d.nav.services, path: routes.services[locale] },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getServices(locale).map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  href={servicePath(locale, service.slug)}
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
                    {t.view}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA locale={locale} />
    </>
  );
}
