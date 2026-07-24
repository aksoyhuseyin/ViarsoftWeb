import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  /** h2 varsayılan; ana sayfa hero altında h2, sayfa başlıklarında h1 istenebilir */
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <span className="badge mb-5">{eyebrow}</span>}
      <Tag className="font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-navy-600 sm:text-lg ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
