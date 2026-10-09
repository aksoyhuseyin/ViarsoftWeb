import type { Metadata } from "next";
import { BlogView } from "@/components/views/BlogView";
import { pageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata("blog", "en", routes.blog);

export default function Page() {
  return <BlogView locale="en" />;
}
