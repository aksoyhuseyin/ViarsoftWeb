import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/views/ServiceDetailView";
import { getServices, serviceBySlug } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceLanguages, servicePath } from "@/lib/i18n";

// Statik export: yalnızca aşağıdaki slug'lar HTML olarak üretilir.
export const dynamicParams = false;

export function generateStaticParams() {
  return getServices("tr").map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = serviceBySlug("tr", params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: servicePath("tr", service.slug),
    keywords: service.seo.keywords,
    locale: "tr",
    languages: serviceLanguages(service.id),
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = serviceBySlug("tr", params.slug);
  if (!service) notFound();
  return <ServiceDetailView locale="tr" service={service} />;
}
