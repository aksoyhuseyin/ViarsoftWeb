import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icon";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:pointer-events-none active:translate-y-0 motion-reduce:transform-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-card-hover",
  secondary:
    "bg-navy-900 text-white hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-card-hover",
  ghost:
    "bg-white text-navy-800 border border-navy-200 hover:border-navy-300 hover:bg-navy-50",
  white: "bg-white text-navy-900 border border-navy-200 hover:bg-navy-50",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      )}
    </Link>
  );
}

type NativeButtonProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: NativeButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      )}
    </button>
  );
}
