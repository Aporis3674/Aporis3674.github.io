import * as React from "react";
import { cn } from "@/lib/utils";
import { Terminal as TerminalIcon, RotateCcw } from "lucide-react";

export type TerminalLine = {
  type: "cmd" | "out" | "ok" | "err";
  text: string;
};

/** ترمینال انیمیشنی VibeFarsi */
export function Terminal({
  lines,
  speed = 35,
  title = "aporis@terminal ~",
  className,
}: {
  lines: TerminalLine[];
  speed?: number;
  title?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [go, setGo] = React.useState(true);
  const [n, setN] = React.useState(0); // lines fully shown
  const [typed, setTyped] = React.useState(0); // characters of the current command
  const [resetKey, setResetKey] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setGo(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGo(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [resetKey]);

  React.useEffect(() => {
    if (!go || n >= lines.length) return;
    const line = lines[n];
    const typing = line.type === "cmd" && typed < line.text.length;
    const id = window.setTimeout(
      () => {
        if (typing) {
          setTyped((t) => t + 1);
        } else {
          setN((x) => x + 1);
          setTyped(0);
        }
      },
      typing ? speed : line.type === "cmd" ? 350 : 200,
    );
    return () => window.clearTimeout(id);
  }, [go, n, typed, lines, speed, resetKey]);

  const handleRestart = () => {
    setN(0);
    setTyped(0);
    setGo(true);
    setResetKey((k) => k + 1);
  };

  const shown = lines.slice(0, n);
  const current =
    n < lines.length && lines[n].type === "cmd"
      ? { ...lines[n], text: lines[n].text.slice(0, typed) }
      : null;

  const row = (l: TerminalLine, i: number, cursor = false) =>
    l.type === "cmd" ? (
      <div key={i} className="flex items-center gap-2 text-foreground font-mono" dir="ltr">
        <span className="select-none text-brand font-bold">$</span>
        <span>
          {l.text}
          {cursor && (
            <span
              aria-hidden
              className="ms-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] bg-brand animate-pulse-soft"
            />
          )}
        </span>
      </div>
    ) : (
      <div
        key={i}
        className={cn(
          "flex items-start gap-2 ps-2 leading-relaxed font-sans",
          l.type === "ok" && "text-success",
          l.type === "err" && "text-destructive",
          l.type === "out" && "text-muted-foreground",
        )}
      >
        {l.type === "ok" && <span aria-hidden className="shrink-0 text-success font-mono">✓</span>}
        {l.type === "err" && <span aria-hidden className="shrink-0 text-destructive font-mono">✗</span>}
        <span className="break-words">{l.text}</span>
      </div>
    );

  return (
    <div
      ref={ref}
      role="log"
      aria-live="polite"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card text-[13px] sm:text-sm leading-6 shadow-2xl relative isolate",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span aria-hidden className="size-3 rounded-full bg-destructive/80 inline-block shadow-sm" />
            <span aria-hidden className="size-3 rounded-full bg-warning/80 inline-block shadow-sm" />
            <span aria-hidden className="size-3 rounded-full bg-success/80 inline-block shadow-sm" />
          </div>
          <div className="ms-2 flex items-center gap-1.5 text-xs text-muted-foreground font-mono" dir="ltr">
            <TerminalIcon className="size-3.5 text-muted-foreground" />
            <span>{title}</span>
          </div>
        </div>
        <button
          onClick={handleRestart}
          title="اجرای مجدد ترمینال"
          className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-muted/60"
        >
          <RotateCcw className="size-3.5" />
        </button>
      </div>

      <div className="min-h-48 space-y-2 p-4 text-start font-mono bg-[#0c0d12]/90 backdrop-blur-md">
        {shown.map((l, i) => row(l, i))}
        {current && row(current, n, true)}
        {!current && n >= lines.length && (
          <div className="flex items-center gap-2 text-foreground font-mono" dir="ltr">
            <span className="text-brand font-bold">$</span>
            <span
              aria-hidden
              className="inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] bg-brand animate-pulse-soft"
            />
          </div>
        )}
      </div>
    </div>
  );
}
