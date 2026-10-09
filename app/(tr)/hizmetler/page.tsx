import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";
import { pageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata("services", "tr", routes.services);

export default function Page() {
  return <ServicesView locale="tr" />;
}
