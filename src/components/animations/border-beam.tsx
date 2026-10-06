import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * حاشیه‌ی نورانی VibeFarsi (BorderBeam)
 * پرتو نوری که دور کارت می‌چرخه.
 */
export function BorderBeam({
  children,
  className,
  containerClassName,
  duration = 4,
  color = "var(--brand)",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
  color?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl p-[1px]", containerClassName)}>
      <span
        aria-hidden
        className="absolute inset-[-100%] pointer-events-none"
        style={{
          background: `conic-gradient(from var(--beam-angle), transparent 0 75%, ${color} 90%, transparent 100%)`,
          animation: `beam ${duration}s linear infinite`,
        }}
      />
      <div className={cn("relative rounded-[calc(var(--radius)+6px)] bg-card h-full w-full", className)}>
        {children}
      </div>
    </div>
  );
}
