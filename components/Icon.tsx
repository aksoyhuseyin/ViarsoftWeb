import type { SVGProps } from "react";

/**
 * Bağımlılık eklemeden, tek dosyada satır (line) ikon seti.
 * Kullanım: <Icon name="code" className="h-6 w-6" />
 */
export type IconName =
  | "code"
  | "globe"
  | "monitor"
  | "smartphone"
  | "refresh"
  | "plug"
  | "headset"
  | "compass"
  | "box"
  | "factory"
  | "wrench"
  | "users"
  | "chart"
  | "cart"
  | "calculator"
  | "grid"
  | "search"
  | "sparkles"
  | "expand"
  | "shield"
  | "lifebuoy"
  | "eye"
  | "check"
  | "arrow-right"
  | "menu"
  | "close"
  | "mail"
  | "phone"
  | "map-pin"
  | "linkedin"
  | "github"
  | "x"
  | "layers"
  | "rocket"
  | "clock"
  | "bolt";

const paths: Record<IconName, JSX.Element> = {
  code: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
      <path d="m14.5 4-5 16" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 4v4h-4M3 20v-4h4" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v6M15 2v6" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
      <path d="M12 16v6" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2" y="13" width="4" height="7" rx="1.5" />
      <rect x="18" y="13" width="4" height="7" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 4h-3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V6l6 4v11H3Z" />
      <path d="M8 21v-4M13 21v-4M18 21v-4" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 5.5a4 4 0 0 0 5 5l-9 9a2.8 2.8 0 0 1-4-4l8-10Z" />
      <path d="m14.5 5.5 4 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M17.5 20a5.5 5.5 0 0 0-2.2-4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.4 12h11L21 8H6" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 11v6M8 19h4" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3Z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
    </>
  ),
  expand: (
    <>
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.8 4-1.4 7-5.4 7-9.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M4 5c0-1 .8-2 2-2h1.6c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1.1L8.4 9.6a12 12 0 0 0 6 6l1.7-1.7c.3-.3.7-.4 1.1-.3l3 .8c.5.1.8.5.8 1V17c0 1.2-1 2-2 2A15 15 0 0 1 4 5Z" />
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.4-4-2.2-6-2.5m12 5.5v-3.4c0-1 .3-1.6-.4-2.3 2.2-.2 4.4-1 4.4-4.9a3.8 3.8 0 0 0-1-2.6 3.5 3.5 0 0 0-.1-2.6s-.9-.3-2.9 1.1a10 10 0 0 0-5 0C6 3.4 5.1 3.7 5.1 3.7a3.5 3.5 0 0 0-.1 2.6 3.8 3.8 0 0 0-1 2.6c0 3.9 2.2 4.7 4.4 4.9-.6.6-.6 1.3-.5 2.3V22" />
  ),
  x: (
    <path d="M4 4l7.5 9.5L4.5 20h2.2l5.3-5.6L16.5 20H20l-7.8-9.9L19.4 4h-2.2l-4.9 5.2L8.1 4H4Z" />
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 8v5m18-5v5" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c3 0 6 1 6 6 0 4-4 7-7 8l-3-3c1-3 4-11 4-11Z" />
      <path d="M9 15c-2 0-4 1-4 5 4 0 5-2 5-4M14.5 9.5h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  bolt: <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
