"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Görünüme girince hedef sayıya kadar animasyonlu sayan bileşen.
 * Sayısal olmayan önek/sonekleri (ör. "+", "%", "₺", "7/24") korur.
 *
 * - prefers-reduced-motion: son değeri anında gösterir.
 * - Statik export uyumlu; yalnızca istemcide çalışır, SSR'de son değeri basar.
 */
interface CountUpProps {
  /** Gösterilecek nihai metin, ör. "50+", "%98", "7/24", "12" */
  value: string;
  /** Animasyon süresi, ms */
  duration?: number;
  className?: string;
}

export function CountUp({ value, duration = 1400, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  // Metinden ilk sayıyı ayıkla: önek + sayı + sonek
  const match = value.match(/^(\D*)(\d[\d.,]*)(.*)$/);

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numberRaw, suffix] = match;
    // "7/24" gibi durumlarda sonekte de rakam varsa animasyonu atla
    if (/\d/.test(suffix)) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numberRaw.replace(/\./g, "").replace(",", "."));
    const usesThousandDot = numberRaw.includes(".");

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const format = (n: number) => {
      const rounded = Math.round(n);
      const str = usesThousandDot
        ? rounded.toLocaleString("tr-TR")
        : String(rounded);
      return `${prefix}${str}${suffix}`;
    };

    // Başlangıçta düşük değeri göster (SSR ile eşleşmeyi bozmamak için mount sonrası)
    setDisplay(reduce ? value : format(0));

    if (reduce || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(format(target * eased));
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
