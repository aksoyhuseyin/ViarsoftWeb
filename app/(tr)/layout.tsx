import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/** Türkçe sayfalar: mevcut adresler (kök) korunur */
export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="tr" />
      <main id="main">{children}</main>
      <Footer locale="tr" />
    </>
  );
}
