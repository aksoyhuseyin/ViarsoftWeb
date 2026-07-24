import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/lib/data/solutions";

export function Solutions() {
  return (
    <section
      id="cozumler"
      className="scroll-mt-24 border-y border-navy-100 bg-navy-50/50 py-24 lg:py-32"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Çözümler"
            title="İşinize özel dijital çözümler"
            description="Sektörünüzün ihtiyaçlarına göre şekillenen çözüm alanları."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 60}>
              <div className="card-lift group h-full rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:ring-accent-600">
                  <Icon name={solution.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-navy-900">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {solution.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
