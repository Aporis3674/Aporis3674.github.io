import { cn } from "@/lib/utils";

/** ظهور تار (BlurText). Each word fades in from a blur, right to left. */
export function BlurText({
  text,
  delay = 90,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline", className)} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block"
          style={{
            animation: `blur-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * delay}ms both`,
          }}
        >
          {w}&nbsp;
        </span>
      ))}
    </span>
  );
}
