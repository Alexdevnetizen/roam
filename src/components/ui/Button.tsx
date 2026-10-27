import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ButtonVariant = "ink" | "ivory" | "terracotta" | "ghost" | "ghost-light";

type BaseProps = { variant?: ButtonVariant };

export function ButtonLink({
  variant = "ink",
  className,
  children,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn("btn", `btn--${variant}`, className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant = "ink",
  className,
  children,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={cn("btn", `btn--${variant}`, className)} {...rest}>
      {children}
    </button>
  );
}
