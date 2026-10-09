import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { technologiesByCategory } from "@/lib/data/technologies";
import { getDictionary } from "@/lib/dictionary";
import { sectionIds, type Locale } from "@/lib/i18n";

export function Technologies({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).sections.technologies;
  const categories = technologiesByCategory(locale);

  return (
    <section
      id={sectionIds.technologies[locale]}
      className="scroll-mt-24 border-y border-navy-100 bg-navy-50/50 py-24 lg:py-32"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
            <div className="divide-y divide-navy-100">
              {categories.map(({ label, techs }) => (
                <div
                  key={label}
                  className="grid items-center gap-4 px-6 py-6 sm:grid-cols-[200px_1fr] sm:px-8"
                >
                  <div className="font-display text-sm font-semibold text-navy-900">
                    {label}
                  </div>
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
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
