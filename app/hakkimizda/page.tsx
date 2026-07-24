import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { advantages, stats } from "@/lib/data/content";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Viarsoft; işletmelere özel yazılım geliştiren, sürdürülebilir ve güvenli çözümlere odaklanan kurumsal bir yazılım firmasıdır. Vizyonumuz ve değerlerimiz.",
  path: "/hakkimizda/",
  keywords: ["Viarsoft hakkında", "yazılım firması", "kurumsal yazılım", "hakkımızda"],
});

const values = [
  {
    icon: "compass" as const,
    title: "Misyonumuz",
    description:
      "İşletmelerin dijital dönüşümünü, ihtiyaca özel ve sürdürülebilir yazılımlarla hızlandırmak; teknolojiyi erişilebilir ve değer üreten bir araç haline getirmek.",
  },
  {
    icon: "rocket" as const,
    title: "Vizyonumuz",
    description:
      "Kurumların uzun vadeli teknoloji ortağı olmak; kalite, güven ve şeffaflıkla anılan bir yazılım markası olarak sürdürülebilir çözümler üretmek.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hakkımızda"
        title="İşletmeler İçin Güvenilir Yazılım Ortağı"
        description="Viarsoft; özel yazılım geliştirme, web ve mobil uygulamalar, masaüstü çözümler ve sistem entegrasyonları alanında hizmet veren kurumsal bir yazılım firmasıdır."
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda/" },
        ]}
      />

      {/* Şirket hikâyesi */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="prose-viar">
              <span className="badge mb-5">Biz Kimiz?</span>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                İşinizi anlayan bir ekip
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                Viarsoft olarak, işletmelerin kendine özgü iş süreçlerini derinlemesine
                anlayarak, bu süreçlere birebir uyan yazılım çözümleri geliştiriyoruz.
                Hazır kalıpların ötesine geçip, her müşterimiz için sürdürülebilir ve
                ölçeklenebilir sistemler kuruyoruz.
              </p>
              <p className="mt-4 leading-relaxed text-navy-600">
                Web, masaüstü ve mobil platformlarda; ERP/CRM ve API entegrasyonlarında
                edindiğimiz deneyimle, KOBİ'lerden üretim, servis ve ticaret firmalarına
                kadar geniş bir yelpazede projeler hayata geçiriyoruz. Temiz kod, güvenli
                mimari ve uzun vadeli destek anlayışımızla fark yaratıyoruz.
              </p>
            </Reveal>

            {/* İstatistik kartı */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 70}>
                  <div className="card-lift h-full rounded-2xl border border-navy-100 bg-navy-50/40 p-6 text-center hover:border-accent-200">
                    <div className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="mt-1 text-sm text-navy-600">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="border-y border-navy-100 bg-navy-50/50 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-lift h-full rounded-2xl border border-navy-100 bg-white p-8 hover:border-accent-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-soft">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-600">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <Reveal>
            <span className="badge mb-5">Değerlerimiz</span>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Bizi biz yapan ilkeler
            </h2>
            <p className="mt-3 max-w-2xl text-navy-600">
              Müşterilerimizle kurduğumuz ilişkiyi şekillendiren temel değerler.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="card-lift flex h-full gap-4 rounded-2xl border border-navy-100 bg-white p-7 hover:border-accent-200">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
