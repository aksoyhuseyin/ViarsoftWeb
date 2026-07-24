import Link from "next/link";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/jsonld";

/**
 * Görsel breadcrumb + BreadcrumbList JSON-LD birlikte.
 * items[0] genelde { name: "Ana Sayfa", path: "/" } olmalı.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-navy-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-navy-700" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-accent-600"
                  >
                    {item.name}
                  </Link>
                  <Icon
                    name="arrow-right"
                    className="h-3.5 w-3.5 text-navy-300"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
