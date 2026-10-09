import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: false },
  // Kök layout'taki canonical ("/") miras alınmasın: 404 sayfasının ana
  // sayfayı standart sayfa olarak göstermesi yanlış sinyal verir.
  alternates: null,
};

// Kök not-found dil layout'larının dışında kalır: Header/Footer burada çizilir.
export default function NotFound() {
  return (
    <>
      <Header locale="tr" />
      <main id="main">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
          <div className="container relative text-center">
            <p className="font-display text-7xl font-bold text-accent-600 sm:text-8xl">
              404
            </p>
            <h1 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Aradığınız sayfa bulunamadı
            </h1>
            <p className="mx-auto mt-3 max-w-md text-navy-600">
              Sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek devam
              edebilirsiniz.
            </p>
            <p lang="en" className="mx-auto mt-2 max-w-md text-sm text-navy-400">
              Page not found.{" "}
              <Link href="/en/" className="font-medium text-accent-600 hover:underline">
                Go to the English homepage
              </Link>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/" icon="arrow-right" size="lg">
                Ana Sayfaya Dön
              </ButtonLink>
              <ButtonLink href="/hizmetler/" variant="ghost" size="lg">
                Hizmetleri İncele
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="tr" />
    </>
  );
}
