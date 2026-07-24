import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";
import { footerCorporate } from "@/lib/data/nav";
import { technologies } from "@/lib/data/technologies";

export function Footer() {
  const year = 2026; // Statik export: build zamanında sabit tutulur
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Marka + açıklama */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Viarsoft; işletmelere özel web, masaüstü, mobil ve entegrasyon
              çözümleri geliştiren kurumsal bir yazılım firmasıdır.
              Sürdürülebilir, ölçeklenebilir ve güvenli yazılımlar üretiyoruz.
            </p>
          </div>

          {/* Hizmetler */}
          <div className="lg:col-span-3">
            <FooterHeading>Hizmetler</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}/`}
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
            <FooterHeading>Kurumsal</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerCorporate.map((item) => (
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
            <FooterHeading>İletişim</FooterHeading>
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
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Teknoloji rozetleri */}
        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
            Teknolojiler
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span
                key={t.name}
                className="rounded-lg border border-navy-800 bg-navy-900/60 px-2.5 py-1 text-xs font-medium text-navy-300"
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Telif */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-sm text-navy-400 sm:flex-row">
          <p>© {year} {siteConfig.legalName}. Tüm hakları saklıdır.</p>
          <p className="text-navy-500">
            {siteConfig.slogan}
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
