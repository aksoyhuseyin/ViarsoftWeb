import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data/content";
import { getDictionary } from "@/lib/dictionary";
import { sectionIds, type Locale } from "@/lib/i18n";

export function Process({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).sections.process;
  return (
    <section id={sectionIds.process[locale]} className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Bağlantı çizgisi (masaüstü) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-navy-300 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps[locale].map((step, i) => (
              <Reveal
                as="li"
                key={step.step}
                delay={i * 80}
                className="relative flex flex-col items-start"
              >
                <div className="group relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-navy-100 bg-white text-navy-900 shadow-lift transition-colors duration-300 hover:border-accent-200 hover:text-accent-600">
                  <Icon name={step.icon} className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-[11px] font-bold text-white shadow-soft">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
