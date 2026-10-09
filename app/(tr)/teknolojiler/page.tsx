import type { Metadata } from "next";
import { TechnologiesView } from "@/components/views/TechnologiesView";
import { pageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata("technologies", "tr", routes.technologies);

export default function Page() {
  return <TechnologiesView locale="tr" />;
}
