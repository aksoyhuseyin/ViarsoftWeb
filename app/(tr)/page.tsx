import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDictionary } from "@/lib/dictionary";
import { routes } from "@/lib/i18n";

const t = getDictionary("tr");

export const metadata: Metadata = buildMetadata({
  absoluteTitle: t.pages.home.title,
  description: t.site.description,
  path: routes.home.tr,
  locale: "tr",
  languages: routes.home,
});

export default function Page() {
  return <HomeView locale="tr" />;
}
