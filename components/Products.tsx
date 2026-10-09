import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/data/products";
import { getDictionary } from "@/lib/dictionary";
import { sectionIds, type Locale } from "@/lib/i18n";

/** Ürün kartları bölümü (ana sayfa + Hakkımızda) */
export function Products({ locale }: { locale: Locale }) {
  const h = getDictionary(locale).sections.products;
  return (
    <section
      id={sectionIds.products[locale]}
      className="scroll-mt-24 border-y border-navy-100 bg-navy-50/50 py-24 lg:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={h.eyebrow} title={h.title} description={h.description} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200 sm:p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src={product.logo}
                    alt={h.logoAlt(product.name)}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-2xl border border-navy-100 bg-white"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-bold text-navy-900">
                        {product.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        {product.status[locale]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-navy-500">{product.category[locale]}</p>
                  </div>
                </div>

                <p className="mt-6 font-display text-lg font-semibold leading-snug text-navy-900">
                  {product.tagline[locale]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {product.description[locale]}
                </p>

                <ul className="mt-5 flex-1 space-y-2">
                  {product.highlights[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {product.links.map((link, li) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                        li === 0
                          ? "bg-accent-600 text-white hover:bg-accent-700"
                          : "border border-navy-200 bg-white text-navy-800 hover:border-navy-300 hover:bg-navy-50"
                      }`}
                    >
                      {link.label[locale]}
                      {li === 0 && <Icon name="arrow-right" className="h-4 w-4" />}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
