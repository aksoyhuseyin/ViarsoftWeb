import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo/jsonld";

/**
 * İç sayfaların üst bölümü: açık zemin + hafif mavi aydınlanma + breadcrumb + H1.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs: BreadcrumbItem[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-100 bg-white">
      <div className="absolute inset-0 bg-mesh-hero" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-dot-grid [background-size:26px_26px] [mask-image:radial-gradient(46rem_26rem_at_20%_-20%,black,transparent_72%)]"
        aria-hidden="true"
      />
      <div className="container relative py-16 lg:py-24">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 max-w-3xl">
          {eyebrow && <span className="badge mb-5">{eyebrow}</span>}
          <h1 className="font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
