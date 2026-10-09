import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { homeServiceCards } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionary";
import { sectionIds, servicePath, type Locale } from "@/lib/i18n";

export function Services({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).sections.services;
  return (
    <section id={sectionIds.services[locale]} className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServiceCards(locale, servicePath).map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <Link
                href={service.href}
                className="card-lift group relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:ring-accent-600">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {service.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-all duration-300 group-hover:gap-2.5">
                  {t.more}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
