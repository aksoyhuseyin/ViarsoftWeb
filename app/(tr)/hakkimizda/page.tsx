import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";
import { pageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata("about", "tr", routes.about);

export default function Page() {
  return <AboutView locale="tr" />;
}
