import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline" | "success" | "warning" | "brand" | "destructive";

const variants: Record<Variant, string> = {
  default: "bg-muted text-foreground border border-border",
  secondary: "bg-secondary text-muted-foreground",
  outline: "text-foreground/75 border border-border",
  success: "bg-success/10 text-success border border-success/20",
  warning: "bg-warning/10 text-warning border border-warning/20",
  brand: "bg-brand/10 text-brand border border-brand/20",
  destructive: "bg-destructive/10 text-destructive border border-destructive/20",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium leading-5 whitespace-nowrap",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
