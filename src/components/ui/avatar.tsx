import { cn } from "@/lib/utils";

export interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "size-8 text-xs",
  md: "size-11 text-sm",
  lg: "size-16 text-lg",
  xl: "size-24 text-2xl",
};

/** آواتار VibeFarsi */
export function Avatar({ name, src, size = "md", className }: AvatarProps) {
  const initial = name.trim().charAt(0);
  return (
    <span
      title={name}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold border border-border/80 shadow-md select-none",
        !src && "bg-muted text-foreground ring-1 ring-border",
        sizes[size],
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="size-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
        />
      ) : (
        initial
      )}
    </span>
  );
}
