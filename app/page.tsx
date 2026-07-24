import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { WhyUs } from "@/components/WhyUs";
import { Technologies } from "@/components/Technologies";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  absoluteTitle: `${siteConfig.name} — ${siteConfig.slogan}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <WhyUs />
      <Technologies />
      <Process />
      <CTA />
    </>
  );
}
