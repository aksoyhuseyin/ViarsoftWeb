"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Kaydırınca yumuşak beliriş (scroll reveal) — bağımlılıksız.
 * IntersectionObserver ile öğe görünüme girince fade-up uygular.
 *
 * - Sunucu ve istemci aynı `.reveal` sınıfıyla başlar (hydration uyumlu, flash yok).
 * - Hareket azaltma tercihinde (prefers-reduced-motion) anında görünür olur.
 * - JS kapalıysa layout <head>'indeki <noscript> stili içeriği açar.
 * - Layout kaymasına (CLS) yol açmaz; yalnızca opacity + translateY.
 */
interface RevealProps {
  children: ReactNode;
  /** Kademeli (stagger) gecikme, ms */
  delay?: number;
  /** Sarmalayıcı etiket (varsayılan div) */
  as?: ElementType;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
