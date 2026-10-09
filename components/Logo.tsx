import Link from "next/link";

/**
 * Marka logosu: düz (flat) "VR" monogram karesi + "Viarsoft" wordmark.
 * Logodan türetilmiş, her boyutta keskin, açık/koyu zeminde çalışır.
 * variant="light" koyu zeminlerde (footer) kullanılır.
 */
export function Logo({
  variant = "dark",
  className = "",
  href = "/",
  label = "Viarsoft ana sayfa",
}: {
  variant?: "dark" | "light";
  className?: string;
  href?: string;
  label?: string;
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  return (
    <Link
      href={href}
      aria-label={label}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-600 transition-colors duration-200 group-hover:bg-accent-700">
        <svg
          viewBox="0 0 64 64"
          className="h-5 w-5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 19 L27 45 L32 45" />
          <path d="M34 45 L34 19 L43 19 A8 8 0 0 1 43 34 L35 34 L49 45" />
        </svg>
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${textColor}`}
      >
        Viarsoft
      </span>
    </Link>
  );
}
