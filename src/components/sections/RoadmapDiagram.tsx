import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Compass, Check } from "lucide-react";

interface SubTopic {
  title: string;
  status: "done" | "current" | "next";
}

interface DiagramStep {
  id: string;
  name: string;
  side: "left" | "right";
  status: "done" | "current" | "next";
  topics: SubTopic[];
}

export function RoadmapDiagram() {
  const steps: DiagramStep[] = [
    {
      id: "internet",
      name: "Internet",
      side: "right",
      status: "done",
      topics: [
        { title: "How does the internet work?", status: "done" },
        { title: "What is HTTP / HTTPS?", status: "done" },
        { title: "Domain Name & DNS", status: "done" },
        { title: "Hosting & Servers", status: "done" },
        { title: "Browsers & Rendering", status: "done" },
      ],
    },
    {
      id: "html",
      name: "HTML",
      side: "left",
      status: "done",
      topics: [
        { title: "Learn the basics", status: "done" },
        { title: "Writing Semantic HTML", status: "done" },
        { title: "Forms and Validations", status: "done" },
        { title: "Accessibility (a11y)", status: "done" },
        { title: "SEO Basics & RTL", status: "done" },
      ],
    },
    {
      id: "css",
      name: "CSS",
      side: "right",
      status: "done",
      topics: [
        { title: "Learn the basics", status: "done" },
        { title: "Making Layouts (Flexbox & Grid)", status: "done" },
        { title: "Responsive Design", status: "done" },
        { title: "Tailwind CSS & Variables", status: "done" },
      ],
    },
    {
      id: "javascript",
      name: "JavaScript",
      side: "left",
      status: "current",
      topics: [
        { title: "Basic Syntax & Data Types", status: "done" },
        { title: "DOM Manipulation", status: "current" },
        { title: "Fetch API & Async / Await", status: "current" },
        { title: "ES6+ Modules & Scope", status: "next" },
      ],
    },
    {
      id: "git",
      name: "Version Control (Git)",
      side: "right",
      status: "current",
      topics: [
        { title: "Basic Git Commands", status: "done" },
        { title: "GitHub & Remote Repos", status: "done" },
        { title: "Branching & Merging", status: "current" },
        { title: "Git Workflow & PRs", status: "current" },
      ],
    },
    {
      id: "framework",
      name: "React (Framework)",
      side: "left",
      status: "next",
      topics: [
        { title: "Components & JSX", status: "next" },
        { title: "State & Props (Hooks)", status: "next" },
        { title: "Vite & Tooling Setup", status: "done" },
        { title: "Routing & Project Architecture", status: "next" },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش نقشه راه */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-brand border-brand/30 gap-1.5 font-mono" dir="ltr">
            <Compass className="size-3.5" />
            <span>Frontend Pathway</span>
          </Badge>
          <span className="text-xs text-muted-foreground">• فلوچارت نقشه راه</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          Frontend Developer Roadmap
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          فلوچارت یادگیری فرانت‌اند با اتصال شاخه‌ای موضوعات و وضعیت مهارت‌ها
        </p>

        {/* راهنمای وضعیت‌ها */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 p-2.5 px-5 rounded-2xl bg-card border border-border text-xs">
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold">
              ✓
            </span>
            <span className="text-muted-foreground">تکمیل شده</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-full bg-brand/20 text-brand border border-brand/50 flex items-center justify-center text-[8px] animate-pulse">
              ●
            </span>
            <span className="text-brand font-semibold">ایستگاه فعلی</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-full bg-muted border border-border flex items-center justify-center text-[8px] text-muted-foreground">
              ○
            </span>
            <span className="text-muted-foreground">گام آینده</span>
          </div>
        </div>
      </div>

      {/* بوم فلوچارت درختی */}
      <div className="relative py-10 px-4 sm:px-8 bg-card/60 rounded-3xl border border-border shadow-2xl">
        {/* خط اتصال پیوسته مرکزی (عمودی) */}
        <div
          aria-hidden
          className="absolute inset-y-12 start-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-400/80 via-brand to-border/40 hidden md:block"
        />

        <div className="flex flex-col gap-12 relative z-10">
          {steps.map((step, idx) => {
            const isLeft = step.side === "left";
            const isCurrent = step.status === "current";
            const isDone = step.status === "done";

            return (
              <div
                key={step.id}
                className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 relative"
              >
                {/* شاخه‌های سمت چپ (دسکتاپ) */}
                <div
                  className={cn(
                    "w-full md:w-[42%] flex flex-col gap-2 relative",
                    !isLeft && "md:order-1 order-2 md:opacity-0 md:pointer-events-none hidden md:flex",
                    isLeft && "order-2 md:order-1 items-center md:items-end"
                  )}
                >
                  {isLeft && (
                    <div className="w-full max-w-sm flex flex-col gap-2 relative">
                      {/* خط‌چین افقی متصل‌کننده به مرکز در دسکتاپ */}
                      <div
                        aria-hidden
                        className="absolute top-1/2 -end-8 w-8 border-t-2 border-dashed border-border/80 hidden md:block pointer-events-none"
                      />

                      {step.topics.map((t, tIdx) => (
                        <div
                          key={tIdx}
                          className={cn(
                            "flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-mono transition-all",
                            t.status === "done" && "bg-card border-border/80 text-foreground/90 hover:border-emerald-500/40",
                            t.status === "current" && "bg-brand/10 border-brand text-foreground font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]",
                            t.status === "next" && "bg-muted/30 border-border/40 text-muted-foreground"
                          )}
                          dir="ltr"
                        >
                          <span className="truncate">{t.title}</span>
                          <span
                            className={cn(
                              "size-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ms-2",
                              t.status === "done" && "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
                              t.status === "current" && "bg-brand text-brand-foreground shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-pulse",
                              t.status === "next" && "bg-muted border border-border text-muted-foreground"
                            )}
                          >
                            {t.status === "done" ? "✓" : t.status === "current" ? "●" : "○"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* گره اصلی مرکزی (Center Node Box به سبک زرد معروف roadmap.sh) */}
                <div className="shrink-0 relative z-20 order-1 md:order-2 my-1">
                  <div
                    className={cn(
                      "px-6 py-2.5 rounded-xl font-bold font-mono text-sm sm:text-base border-2 shadow-lg transition-transform hover:scale-105 select-none text-center",
                      isDone && "bg-[#ffe599] text-black border-black shadow-[0_4px_16px_rgba(255,229,153,0.3)]",
                      isCurrent && "bg-brand text-brand-foreground border-white/80 shadow-[0_0_20px_rgba(56,189,248,0.5)] animate-pulse",
                      !isDone && !isCurrent && "bg-card text-foreground border-border"
                    )}
                    dir="ltr"
                  >
                    {step.name}
                  </div>
                </div>

                {/* شاخه‌های سمت راست (دسکتاپ) */}
                <div
                  className={cn(
                    "w-full md:w-[42%] flex flex-col gap-2 relative",
                    isLeft && "md:order-3 order-3 md:opacity-0 md:pointer-events-none hidden md:flex",
                    !isLeft && "order-2 md:order-3 items-center md:items-start"
                  )}
                >
                  {!isLeft && (
                    <div className="w-full max-w-sm flex flex-col gap-2 relative">
                      {/* خط‌چین افقی متصل‌کننده به مرکز در دسکتاپ */}
                      <div
                        aria-hidden
                        className="absolute top-1/2 -start-8 w-8 border-t-2 border-dashed border-border/80 hidden md:block pointer-events-none"
                      />

                      {step.topics.map((t, tIdx) => (
                        <div
                          key={tIdx}
                          className={cn(
                            "flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-mono transition-all",
                            t.status === "done" && "bg-card border-border/80 text-foreground/90 hover:border-emerald-500/40",
                            t.status === "current" && "bg-brand/10 border-brand text-foreground font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]",
                            t.status === "next" && "bg-muted/30 border-border/40 text-muted-foreground"
                          )}
                          dir="ltr"
                        >
                          <span className="truncate">{t.title}</span>
                          <span
                            className={cn(
                              "size-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ms-2",
                              t.status === "done" && "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
                              t.status === "current" && "bg-brand text-brand-foreground shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-pulse",
                              t.status === "next" && "bg-muted border border-border text-muted-foreground"
                            )}
                          >
                            {t.status === "done" ? "✓" : t.status === "current" ? "●" : "○"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
