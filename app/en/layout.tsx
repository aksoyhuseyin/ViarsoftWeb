import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  description: getDictionary("en").site.description,
};

/** İngilizce sayfalar: /en/ altında; içerik lang="en" ile işaretlenir */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <Header locale="en" />
      <main id="main">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
