import type { Locale } from "@/lib/i18n";

export interface Technology {
  name: string;
  category: TechCategory;
}

export type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops";

export const technologies: Technology[] = [
  { name: "C#", category: "languages" },
  { name: ".NET", category: "backend" },
  { name: "Java", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Delphi", category: "languages" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "REST API", category: "backend" },
  { name: "SQL Server", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "Cloudflare", category: "devops" },
];

const categoryLabels: Record<Locale, Record<TechCategory, string>> = {
  tr: {
    languages: "Diller",
    frontend: "Frontend",
    backend: "Backend & API",
    database: "Veritabanı",
    devops: "DevOps & Cloud",
  },
  en: {
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend & API",
    database: "Databases",
    devops: "DevOps & Cloud",
  },
};

export const techCategories: TechCategory[] = [
  "languages",
  "frontend",
  "backend",
  "database",
  "devops",
];

/** Kategoriye göre gruplanmış teknolojiler (etiket dile göre) */
export const technologiesByCategory = (
  locale: Locale
): { label: string; techs: Technology[] }[] =>
  techCategories.map((cat) => ({
    label: categoryLabels[locale][cat],
    techs: technologies.filter((t) => t.category === cat),
  }));
