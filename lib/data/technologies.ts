export interface Technology {
  name: string;
  category: TechCategory;
}

export type TechCategory =
  | "Diller"
  | "Frontend"
  | "Backend & API"
  | "Veritabanı"
  | "DevOps & Cloud";

export const technologies: Technology[] = [
  { name: "C#", category: "Diller" },
  { name: ".NET", category: "Backend & API" },
  { name: "Java", category: "Diller" },
  { name: "JavaScript", category: "Diller" },
  { name: "TypeScript", category: "Diller" },
  { name: "Python", category: "Diller" },
  { name: "C++", category: "Diller" },
  { name: "Delphi", category: "Diller" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "REST API", category: "Backend & API" },
  { name: "SQL Server", category: "Veritabanı" },
  { name: "PostgreSQL", category: "Veritabanı" },
  { name: "Docker", category: "DevOps & Cloud" },
  { name: "Cloudflare", category: "DevOps & Cloud" },
];

export const techCategories: TechCategory[] = [
  "Diller",
  "Frontend",
  "Backend & API",
  "Veritabanı",
  "DevOps & Cloud",
];

/** Kategoriye göre gruplanmış teknolojiler */
export const technologiesByCategory = (): Record<TechCategory, Technology[]> => {
  const grouped = {} as Record<TechCategory, Technology[]>;
  for (const cat of techCategories) {
    grouped[cat] = technologies.filter((t) => t.category === cat);
  }
  return grouped;
};
