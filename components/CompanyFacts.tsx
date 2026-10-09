import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { products } from "@/lib/data/products";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

/** Doğrulanabilir şirket künyesi: unvan, kuruluş, adres, MERSİS, vergi, siteler */
export function CompanyFacts({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).facts;
  const founded = locale === "en" ? siteConfig.founded.labelEn : siteConfig.founded.label;
  const { street, district, city } = siteConfig.contact.address;

  const facts: { label: string; value: ReactNode }[] = [
    { label: t.legalName, value: siteConfig.legalName },
    { label: t.founded, value: t.foundedValue(founded) },
    {
      label: t.address,
      value: `${street}, ${district}/${city}${locale === "en" ? ", Türkiye" : ""}`,
    },
    { label: t.mersis, value: siteConfig.legal.mersisNumber },
    { label: t.tax, value: t.taxValue(siteConfig.legal.taxOffice, siteConfig.legal.taxNumber) },
    {
      label: t.email,
      value: (
        <a href={`mailto:${siteConfig.contact.email}`} className="text-accent-600 hover:underline">
          {siteConfig.contact.email}
        </a>
      ),
    },
    {
      label: t.websites,
      value: (
        <span className="flex flex-wrap gap-x-3 gap-y-1">
          <a href={siteConfig.url} className="text-accent-600 hover:underline">
            {siteConfig.domain}
          </a>
          {products.map((p) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:underline"
            >
              {p.url.replace("https://", "")}
            </a>
          ))}
        </span>
      ),
    },
  ];

  return (
    <dl className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
      {facts.map((f) => (
        <div
          key={f.label}
          className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[13rem_1fr] sm:gap-4"
        >
          <dt className="text-sm font-semibold text-navy-900">{f.label}</dt>
          <dd className="min-w-0 break-words text-sm text-navy-600">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
