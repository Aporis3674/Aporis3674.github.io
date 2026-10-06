import { cn, faPercent } from "@/lib/utils";

export interface ProgressProps {
  value: number;
  max?: number;
  label?: React.ReactNode;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  indicatorClassName?: string;
}

/** پیشرفت VibeFarsi. Fills from the inline-start; the percent label uses Persian digits. */
export function Progress({
  value,
  max = 100,
  label,
  showValue = true,
  size = "md",
  className,
  indicatorClassName,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="font-medium text-foreground">{label}</span>
          {showValue && (
            <span className="font-bold text-brand tabular-nums tracking-wider font-sans text-sm sm:text-base">
              {faPercent(pct)}
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "w-full overflow-hidden rounded-full bg-muted/80 border border-border/60 p-[2px]",
          size === "sm" ? "h-2" : size === "lg" ? "h-4" : "h-2.5"
        )}
      >
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-l from-brand via-sky-400 to-blue-500 transition-all duration-1000 ease-out shadow-[0_0_14px_rgba(56,189,248,0.4)]",
            indicatorClassName
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
