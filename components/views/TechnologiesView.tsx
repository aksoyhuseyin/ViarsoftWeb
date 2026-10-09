import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { technologiesByCategory } from "@/lib/data/technologies";
import { getDictionary } from "@/lib/dictionary";
import { routes, type Locale } from "@/lib/i18n";

export function TechnologiesView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.pages.technologies;
  const grouped = technologiesByCategory(locale);

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={[
          { name: d.nav.home, path: routes.home[locale] },
          { name: d.nav.technologies, path: routes.technologies[locale] },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container space-y-6">
          {grouped.map(({ label, techs }, i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="card-lift grid items-center gap-4 rounded-2xl border border-navy-100 bg-white p-6 sm:grid-cols-[200px_1fr] lg:p-8">
                <h2 className="font-display text-sm font-semibold text-navy-900">
                  {label}
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-lg bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-700 transition-colors duration-200 hover:bg-accent-50 hover:text-accent-700"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Neden bu teknolojiler */}
      <section className="border-t border-navy-100 bg-navy-50/50 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="card-lift h-full rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {h.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA locale={locale} />
    </>
  );
}
