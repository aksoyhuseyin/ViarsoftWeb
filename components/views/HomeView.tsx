import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Technologies } from "@/components/Technologies";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/lib/data/products";
import { productSchema } from "@/lib/seo/jsonld";
import type { Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd data={products.map((p) => productSchema(p, locale))} />
      <Hero locale={locale} />
      <Products locale={locale} />
      <Services locale={locale} />
      <WhyUs locale={locale} />
      <Technologies locale={locale} />
      <Process locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
