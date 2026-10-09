import { Icon } from "@/components/Icon";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

/**
 * Sade, açık temalı ürün/panel kartı — CSS ile üretilmiştir.
 * Havadar minimal his için tek katman, az efekt.
 */
export function DashboardMockup({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).mockup;
  const bars = [46, 62, 52, 74, 68, 88, 80];

  return (
    <div className="relative mx-auto max-w-md">
      {/* Arkada hafif ofset katman (derinlik) */}
      <div
        className="absolute inset-0 translate-x-4 translate-y-5 rounded-[1.4rem] border border-navy-100 bg-gradient-to-br from-navy-50 to-white"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[1.4rem] border border-navy-100 bg-white shadow-panel ring-1 ring-navy-900/5">
        {/* Başlık çubuğu */}
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-600 text-white">
              <Icon name="chart" className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-navy-900">
              Viarsoft Panel
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-semibold text-accent-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {t.live}
          </span>
        </div>

        <div className="space-y-5 p-5">
          {/* KPI kartları */}
          <div className="grid grid-cols-3 gap-3">
            {t.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-navy-100 bg-navy-50/50 p-3"
              >
                <div className="text-[10px] text-navy-500">{kpi.label}</div>
                <div className="mt-1 text-base font-bold text-navy-900">
                  {kpi.value}
                </div>
              </div>
            ))}
          </div>

          {/* Grafik kartı */}
          <div className="rounded-xl border border-navy-100 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-navy-700">
                {t.weekly}
              </span>
              <span className="text-xs font-semibold text-accent-600">+18%</span>
            </div>
            <div className="flex h-28 items-end justify-between gap-2.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-md ${
                    i === bars.length - 2
                      ? "bg-gradient-to-t from-accent-600 to-accent-400"
                      : "bg-accent-100"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
