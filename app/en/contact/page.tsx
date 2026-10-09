import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
import { pageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata("contact", "en", routes.contact);

export default function Page() {
  return <ContactView locale="en" />;
}
