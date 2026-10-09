import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { routes, type Locale } from "@/lib/i18n";

interface CTAProps {
  locale: Locale;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTA({
  locale,
  title = getDictionary(locale).cta.title,
  description = getDictionary(locale).cta.description,
  buttonLabel = getDictionary(locale).cta.button,
  buttonHref = routes.contact[locale],
}: CTAProps) {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-16 shadow-panel sm:px-12 lg:px-16 lg:py-24">
          {/* Yumuşak aydınlanma */}
          <div className="absolute inset-0 bg-dark-glow" aria-hidden="true" />
          {/* İnce nokta dokusu */}
          <div
            className="absolute inset-0 bg-dot-grid [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(40rem_20rem_at_80%_-10%,black,transparent_70%)]"
            aria-hidden="true"
          />

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={buttonHref} size="lg" icon="arrow-right">
                {buttonLabel}
              </ButtonLink>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-medium text-navy-200 transition-colors hover:text-accent-300"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
