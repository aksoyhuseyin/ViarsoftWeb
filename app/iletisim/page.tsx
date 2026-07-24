import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Viarsoft ile iletişime geçin. Özel yazılım, web, mobil ve entegrasyon projeleriniz için ücretsiz görüşme ve teklif alın.",
  path: "/iletisim/",
  keywords: ["Viarsoft iletişim", "yazılım teklifi", "yazılım firması iletişim"],
});

const contactCards = [
  {
    icon: "mail" as const,
    label: "E-posta",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: "map-pin" as const,
    label: "Adres",
    value: siteConfig.contact.address.full,
    href: undefined,
  },
];

const companyInfo = [
  { label: "Ünvan", value: siteConfig.legalName },
  {
    label: "Vergi Dairesi / No",
    value: `${siteConfig.legal.taxOffice} / ${siteConfig.legal.taxNumber}`,
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        title="Projenizi Konuşalım"
        description="İhtiyacınızı anlatın, size en uygun çözümü ve yol haritasını birlikte belirleyelim. İlk görüşme ve teklif ücretsizdir."
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim/" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Sol: iletişim bilgileri */}
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                İletişim Bilgileri
              </h2>
              <p className="mt-3 text-navy-600">
                Aşağıdaki kanallardan bize ulaşabilir veya formu doldurabilirsiniz.
              </p>

              <div className="mt-8 space-y-4">
                {contactCards.map((card) => {
                  const inner = (
                    <div className="card-lift flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 hover:border-accent-200">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                        <Icon name={card.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                          {card.label}
                        </div>
                        <div className="mt-0.5 font-medium text-navy-900">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  );
                  return card.href ? (
                    <a key={card.label} href={card.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={card.label}>{inner}</div>
                  );
                })}
              </div>

              {/* Şirket bilgileri */}
              <div className="mt-10 rounded-2xl border border-navy-100 bg-navy-50/40 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                  Şirket Bilgileri
                </h3>
                <dl className="mt-3 space-y-2 text-sm">
                  {companyInfo.map((item) => (
                    <div key={item.label}>
                      <dt className="font-semibold text-navy-500">{item.label}</dt>
                      <dd className="text-navy-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Sağ: form */}
            <Reveal delay={120} className="lg:col-span-3">
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-lift sm:p-8">
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  Bize Yazın
                </h2>
                <p className="mt-2 text-sm text-navy-600">
                  Formu doldurun, en kısa sürede size dönüş yapalım.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
