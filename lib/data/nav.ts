export interface NavItem {
  label: string;
  href: string;
}

/** Header ana menü */
export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler/" },
  { label: "Teknolojiler", href: "/teknolojiler/" },
  { label: "Süreç", href: "/#surec" },
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "İletişim", href: "/iletisim/" },
];

/** Footer kurumsal linkleri */
export const footerCorporate: NavItem[] = [
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "Teknolojiler", href: "/teknolojiler/" },
  { label: "Blog", href: "/blog/" },
  { label: "İletişim", href: "/iletisim/" },
];
