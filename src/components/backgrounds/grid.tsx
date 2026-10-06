import { cn } from "@/lib/utils";

/** شبکه VibeFarsi. Hairline grid that fades toward the bottom. */
export function GridBackground({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_90%)]",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
