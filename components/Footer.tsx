import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { getServices } from "@/lib/data/services";
import { footerCorporate } from "@/lib/data/nav";
import { technologies } from "@/lib/data/technologies";
import { products } from "@/lib/data/products";
import { getDictionary } from "@/lib/dictionary";
import { routes, servicePath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = 2026; // Statik export: build zamanında sabit tutulur
  const t = getDictionary(locale);
  const founded = locale === "en" ? siteConfig.founded.labelEn : siteConfig.founded.label;
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Marka + açıklama */}
          <div className="lg:col-span-4">
            <Logo variant="light" href={routes.home[locale]} label={t.logoLabel} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {t.footer.about}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy-400">
              {t.footer.products}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-300 transition-colors hover:text-accent-400"
                  >
                    {p.name}
                    <span className="text-navy-500"> — {p.url.replace("https://", "")}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="lg:col-span-3">
            <FooterHeading>{t.footer.services}</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {getServices(locale).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(locale, s.slug)}
                    className="text-navy-300 transition-colors hover:text-accent-400"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="lg:col-span-2">
            <FooterHeading>{t.footer.corporate}</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerCorporate(locale).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-300 transition-colors hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-3">
            <FooterHeading>{t.footer.contact}</FooterHeading>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-navy-300 transition-colors hover:text-accent-400"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-navy-300">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.district}/{siteConfig.contact.address.city}
                  {locale === "en" && ", Türkiye"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Teknoloji rozetleri */}
        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
            {t.footer.technologies}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="rounded-lg border border-navy-800 bg-navy-900/60 px-2.5 py-1 text-xs font-medium text-navy-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Telif */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-sm text-navy-400 sm:flex-row">
          <div className="text-center sm:text-left">
            <p>© {year} {siteConfig.legalName}. {t.footer.rights}</p>
            <p className="mt-1 text-xs text-navy-500">
              {t.footer.founded}: {founded} · {t.footer.mersis}: {siteConfig.legal.mersisNumber} ·{" "}
              {t.footer.tax(siteConfig.legal.taxOffice, siteConfig.legal.taxNumber)}
            </p>
          </div>
          <p className="text-navy-500">
            {t.site.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
      {children}
    </h3>
  );
}
