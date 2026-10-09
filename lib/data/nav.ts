import { getDictionary } from "@/lib/dictionary";
import { routes, sectionIds, type Locale } from "@/lib/i18n";

export interface NavItem {
  label: string;
  href: string;
}

/** Header ana menü */
export function mainNav(locale: Locale): NavItem[] {
  const t = getDictionary(locale).nav;
  return [
    { label: t.home, href: routes.home[locale] },
    { label: t.products, href: `${routes.home[locale]}#${sectionIds.products[locale]}` },
    { label: t.services, href: routes.services[locale] },
    { label: t.technologies, href: routes.technologies[locale] },
    { label: t.about, href: routes.about[locale] },
    { label: t.contact, href: routes.contact[locale] },
  ];
}

/** Footer kurumsal linkleri */
export function footerCorporate(locale: Locale): NavItem[] {
  const t = getDictionary(locale).nav;
  return [
    { label: t.about, href: routes.about[locale] },
    { label: t.technologies, href: routes.technologies[locale] },
    { label: t.blog, href: routes.blog[locale] },
    { label: t.contact, href: routes.contact[locale] },
  ];
}
