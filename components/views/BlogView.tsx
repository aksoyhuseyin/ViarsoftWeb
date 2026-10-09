import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { routes, type Locale } from "@/lib/i18n";

// İçerik hazır olduğunda konu listesi gerçek yazılarla doldurulup
// blog/[slug] dinamik rotası eklenebilir.
export function BlogView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.pages.blog;
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={[
          { name: d.nav.home, path: routes.home[locale] },
          { name: d.nav.blog, path: routes.blog[locale] },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <Reveal className="mb-12 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50/50 px-4 py-2 text-sm font-medium text-navy-600">
            <Icon name="clock" className="h-4 w-4 text-accent-600" />
            {t.notice}
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.topics.map((topic, i) => (
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
                    {t.soon}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA locale={locale} title={t.ctaTitle} description={t.ctaText} />
    </>
  );
}
