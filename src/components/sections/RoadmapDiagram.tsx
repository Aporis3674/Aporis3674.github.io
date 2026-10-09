import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn, fa, faPercent } from "@/lib/utils";
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
      status: "current",
      topics: [
        { title: "Learn the basics", status: "current" },
        { title: "Writing Semantic HTML", status: "next" },
        { title: "Forms and Validations", status: "next" },
        { title: "Accessibility (a11y)", status: "next" },
        { title: "SEO Basics & RTL", status: "next" },
      ],
    },
    {
      id: "css",
      name: "CSS",
      side: "right",
      status: "next",
      topics: [
        { title: "Learn the basics", status: "next" },
        { title: "Making Layouts (Flexbox & Grid)", status: "next" },
        { title: "Responsive Design", status: "next" },
        { title: "Tailwind CSS & Variables", status: "next" },
      ],
    },
    {
      id: "javascript",
      name: "JavaScript",
      side: "left",
      status: "next",
      topics: [
        { title: "Basic Syntax & Data Types", status: "next" },
        { title: "DOM Manipulation", status: "next" },
        { title: "Fetch API & Async / Await", status: "next" },
        { title: "ES6+ Modules & Scope", status: "next" },
      ],
    },
    {
      id: "git",
      name: "Version Control (Git)",
      side: "right",
      status: "next",
      topics: [
        { title: "Basic Git Commands", status: "next" },
        { title: "GitHub & Remote Repos", status: "next" },
        { title: "Branching & Merging", status: "next" },
        { title: "Git Workflow & PRs", status: "next" },
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
        { title: "Vite & Tooling Setup", status: "next" },
        { title: "Routing & Project Architecture", status: "next" },
      ],
    },
  ];

  const allTopics = steps.flatMap((s) => s.topics);
  const totalCount = allTopics.length;
  const doneCount = allTopics.filter((t) => t.status === "done").length;
  const progressPercent = Math.round((doneCount / totalCount) * 100);

  return (
    <section id="roadmap" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش نقشه راه */}
      <div className="flex flex-col items-center text-center mb-8">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <Compass className="size-3.5" />
          <span>نقشه راه یادگیری</span>
        </Badge>

        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          مسیر توسعه‌دهنده فرانت‌اند
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-6">
          فلوچارت گام‌به‌گام مهارت‌های فرانت‌اند؛ مباحث تکمیل‌شده با تیک سبز مشخص شده‌اند.
        </p>

        {/* نوار پیشرفت نقشه راه */}
        <div className="w-full max-w-lg p-4 rounded-2xl bg-card border border-border/80 shadow-lg mb-4 text-start">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2.5">
            <span className="text-foreground font-semibold">پیشرفت نقشه راه فرانت‌اند:</span>
            <span className="font-bold text-brand font-sans text-sm sm:text-base">
              {fa(doneCount)} از {fa(totalCount)} مبحث ({faPercent(progressPercent)})
            </span>
          </div>

          <Progress
            value={progressPercent}
            max={100}
            showValue={false}
            size="md"
            indicatorClassName="bg-gradient-to-l from-brand via-sky-400 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
          />

          <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-3 pt-2.5 border-t border-border/50">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400 inline-block" />
              <span>فقط بخش اینترنت ({fa(doneCount)} مورد) تکمیل شده</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-brand animate-pulse inline-block" />
              <span>گام بعدی: مبانی HTML</span>
            </span>
          </div>
        </div>

        {/* راهنمای وضعیت‌ها با تراز عمودی دقیق */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3 py-2 px-5 rounded-2xl bg-card/60 border border-border text-xs select-none">
          <div className="inline-flex items-center gap-2">
            <span className="size-4.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <Check className="size-2.5 stroke-[3]" />
            </span>
            <span className="text-muted-foreground font-medium leading-none">یاد گرفته شده</span>
          </div>

          <div className="inline-flex items-center gap-2">
            <span className="size-4.5 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center shrink-0 animate-pulse">
              <span className="size-1.5 rounded-full bg-brand" />
            </span>
            <span className="text-brand font-semibold leading-none">در دست یادگیری</span>
          </div>

          <div className="inline-flex items-center gap-2">
            <span className="size-4.5 rounded-full bg-muted/40 border border-border flex items-center justify-center shrink-0">
              <span className="size-1.5 rounded-full border border-muted-foreground/60" />
            </span>
            <span className="text-muted-foreground font-medium leading-none">گام‌های بعدی</span>
          </div>
        </div>
      </div>

      {/* بوم فلوچارت درختی با محور کاملاً مرکزی */}
      <div
        className="relative py-12 px-4 sm:px-8 bg-card/60 rounded-3xl border border-border shadow-2xl overflow-hidden"
        dir="ltr"
      >
        {/* خط اتصال پیوسته مرکزی (عمود و دقیقاً وسط محور ۵۰٪) */}
        <div
          aria-hidden
          className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#ffe599] via-brand to-border/30 hidden md:block z-0"
        />

        <div className="flex flex-col gap-12 relative z-10">
          {steps.map((step) => {
            const isLeft = step.side === "left";
            const isDone = step.status === "done";
            const isCurrent = step.status === "current";

            const renderTopics = () => (
              <div className="w-full max-w-sm flex flex-col gap-2">
                {step.topics.map((t, tIdx) => (
                  <div
                    key={tIdx}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-mono transition-all",
                      t.status === "done" && "bg-card border-border/80 text-foreground/90 hover:border-emerald-500/40",
                      t.status === "current" && "bg-brand/10 border-brand text-foreground font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]",
                      t.status === "next" && "bg-muted/30 border-border/40 text-muted-foreground"
                    )}
                  >
                    <span className="truncate">{t.title}</span>
                    <span
                      className={cn(
                        "size-5 rounded-full flex items-center justify-center shrink-0 ms-2",
                        t.status === "done" && "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
                        t.status === "current" && "bg-brand text-brand-foreground shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-pulse",
                        t.status === "next" && "bg-muted/40 border border-border"
                      )}
                    >
                      {t.status === "done" ? (
                        <Check className="size-3 stroke-[3]" />
                      ) : t.status === "current" ? (
                        <span className="size-1.5 rounded-full bg-white" />
                      ) : (
                        <span className="size-1.5 rounded-full border border-muted-foreground/60" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            );

            return (
              <div
                key={step.id}
                className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-0 relative"
              >
                {/* ستون چپ (در دسکتاپ دقیقاً 1fr) */}
                <div className="hidden md:flex items-center justify-end w-full">
                  {isLeft ? (
                    <>
                      {renderTopics()}
                      <div
                        aria-hidden
                        className="w-8 border-t-2 border-dashed border-border/80 shrink-0"
                      />
                    </>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* گره اصلی مرکزی (دقیقاً سوار بر خط وسط) */}
                <div className="z-20 justify-self-center my-1 shrink-0">
                  <div
                    className={cn(
                      "min-w-[150px] px-6 py-2.5 rounded-xl font-bold font-mono text-sm sm:text-base border-2 shadow-lg transition-transform hover:scale-105 select-none text-center",
                      isDone && "bg-[#ffe599] text-black border-black shadow-[0_4px_16px_rgba(255,229,153,0.3)]",
                      isCurrent && "bg-brand text-brand-foreground border-white/80 shadow-[0_0_20px_rgba(56,189,248,0.5)] animate-pulse",
                      !isDone && !isCurrent && "bg-card text-muted-foreground border-border/80"
                    )}
                  >
                    {step.name}
                  </div>
                </div>

                {/* ستون راست (در دسکتاپ دقیقاً 1fr) */}
                <div className="hidden md:flex items-center justify-start w-full">
                  {!isLeft ? (
                    <>
                      <div
                        aria-hidden
                        className="w-8 border-t-2 border-dashed border-border/80 shrink-0"
                      />
                      {renderTopics()}
                    </>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* در موبایل: موضوعات زیر باکس مرکزی قرار می‌گیرند */}
                <div className="flex md:hidden w-full justify-center">
                  {renderTopics()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
