import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Products } from "@/components/Products";
import { CompanyFacts } from "@/components/CompanyFacts";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { advantages, stats } from "@/lib/data/content";
import { getDictionary } from "@/lib/dictionary";
import { routes, type Locale } from "@/lib/i18n";

export function AboutView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.pages.about;
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={[
          { name: d.nav.home, path: routes.home[locale] },
          { name: d.nav.about, path: routes.about[locale] },
        ]}
      />

      {/* Şirket hikâyesi */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="prose-viar">
              <span className="badge mb-5">{t.storyBadge}</span>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {t.storyTitle}
              </h2>
              {t.story.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-navy-600">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            {/* İstatistik kartı */}
            <div className="grid grid-cols-2 gap-4">
              {stats[locale].map((stat, i) => (
                <Reveal key={stat.label} delay={i * 70}>
                  <div className="card-lift h-full rounded-2xl border border-navy-100 bg-navy-50/40 p-6 text-center hover:border-accent-200">
                    <div className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="mt-1 text-sm text-navy-600">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="border-y border-navy-100 bg-navy-50/50 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-lift h-full rounded-2xl border border-navy-100 bg-white p-8 hover:border-accent-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-soft">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-600">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <Reveal>
            <span className="badge mb-5">{t.valuesBadge}</span>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {t.valuesTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-navy-600">{t.valuesText}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages[locale].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="card-lift flex h-full gap-4 rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Products locale={locale} />

      {/* Şirket künyesi */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="badge mb-5">{t.companyBadge}</span>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {t.companyTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">{t.companyText}</p>
            </Reveal>
            <Reveal delay={80}>
              <CompanyFacts locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA locale={locale} />
    </>
  );
}
