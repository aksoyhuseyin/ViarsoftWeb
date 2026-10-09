import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { advantages, stats } from "@/lib/data/content";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export function WhyUs({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).sections.whyUs;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* İstatistik şeridi — koyu premium panel */}
        <Reveal className="mt-16 overflow-hidden rounded-3xl bg-navy-950 shadow-panel">
          <div className="relative grid grid-cols-2 gap-px bg-navy-800/60 lg:grid-cols-4">
            <div className="pointer-events-none absolute inset-0 bg-dark-glow" aria-hidden="true" />
            {stats[locale].map((stat) => (
              <div key={stat.label} className="relative bg-navy-950 px-6 py-10 text-center">
                <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-2 text-sm text-navy-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
