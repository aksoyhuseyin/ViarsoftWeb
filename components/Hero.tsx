import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { DashboardMockup } from "@/components/DashboardMockup";

const trust = ["İhtiyaca özel", "Uzun vadeli destek", "Güvenli mimari"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Katmanlı gradyan mesh + ince nokta dokusu (derinlik) */}
      <div className="absolute inset-0 bg-mesh-hero" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-dot-grid [background-size:26px_26px] [mask-image:radial-gradient(56rem_34rem_at_50%_-10%,black,transparent_72%)]"
        aria-hidden="true"
      />

      <div className="container relative py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Sol: metin */}
          <div className="animate-fade-up">
            <span className="badge">Kurumsal Yazılım Çözümleri</span>

            <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[1.04] tracking-tight text-navy-900 sm:text-6xl lg:text-[4rem]">
              Modern ve <span className="text-gradient">güvenilir</span>{" "}
              yazılım çözümleri
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
              İşletmenize özel web, mobil ve entegrasyon çözümleri geliştiriyoruz —
              ölçeklenebilir, güvenli ve uzun ömürlü.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/iletisim/" size="lg" icon="arrow-right">
                Projenizi Konuşalım
              </ButtonLink>
              <ButtonLink href="/hizmetler/" size="lg" variant="ghost">
                Hizmetlerimiz
              </ButtonLink>
            </div>

            {/* Sade güven satırı */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
              {trust.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-navy-500"
                >
                  <Icon name="check" className="h-4 w-4 text-accent-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: yüzen ürün paneli + glow */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-[2.5rem] bg-accent-400/25 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative animate-float motion-reduce:animate-none">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
