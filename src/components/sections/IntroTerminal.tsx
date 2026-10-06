import * as React from "react";
import { Terminal, type TerminalLine } from "@/components/animations/terminal";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/animations/border-beam";
import { BlurText } from "@/components/animations/blur-text";
import { Terminal as TerminalIcon, Sparkles, Code2, Globe, Heart } from "lucide-react";

export function IntroTerminal() {
  const terminalLines: TerminalLine[] = [
    { type: "cmd", text: "whoami" },
    { type: "ok", text: "آپوریس (Aporis)" },
    { type: "cmd", text: "cat intro.txt" },
    {
      type: "out",
      text: "درود! اسم من آپوریسه، و علاقه‌مند به حوزه کامپیوتر و برنامه‌نویسی و طراحی سایت هستم.",
    },
    { type: "cmd", text: "cat goals.txt" },
    {
      type: "out",
      text: "در حال حاضر:",
    },
    {
      type: "ok",
      text: "۱. دارم پایتون یاد می‌گیرم",
    },
    {
      type: "ok",
      text: "۲. دوست دارم وب‌سایتم رو طراحی کنم",
    },
    {
      type: "ok",
      text: "۳. و همچنین می‌خوام روی پروژه‌های اوپن‌سورس فعالیت و علاقه خودم رو نشون بدم",
    },
  ];

  return (
    <section id="intro" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-10">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <TerminalIcon className="size-3.5" />
          <span>ترمینال و معرفی</span>
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
          معرفی آپوریس
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          وضعیت فعلی و اهداف یادگیری
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* سمت راست: کارت پیام معرفی اختصاصی */}
        <div className="lg:col-span-5 flex flex-col">
          <BorderBeam
            duration={5}
            color="var(--brand)"
            containerClassName="h-full"
            className="p-6 flex flex-col justify-between h-full bg-card/90"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="size-2.5 rounded-full bg-brand animate-ping inline-block" />
                <span className="text-xs font-semibold text-brand tracking-wider">
                  پیام معرفی اختصاصی
                </span>
              </div>

              <div className="p-4 rounded-xl bg-muted/40 border border-border/80 mb-5">
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  <BlurText
                    text="درود اسم من آپوریسه، و علاقه‌مند به حوزه کامپیوتر و برنامه‌نویسی و طراحی سایت هستم، در حال حاضر:"
                    delay={60}
                  />
                </p>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-foreground/90 font-medium">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-background/50 border border-border/40">
                  <Code2 className="size-5 text-brand shrink-0 mt-0.5" />
                  <span>دارم پایتون یاد می‌گیرم</span>
                </div>
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-background/50 border border-border/40">
                  <Globe className="size-5 text-brand shrink-0 mt-0.5" />
                  <span>دوست دارم وب‌سایتم رو طراحی کنم</span>
                </div>
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-background/50 border border-border/40">
                  <Heart className="size-5 text-brand shrink-0 mt-0.5" />
                  <span>و همچنین می‌خوام روی پروژه‌های اوپن‌سورس فعالیت و علاقه خودم رو نشون بدم.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between text-xs text-muted-foreground font-mono" dir="ltr">
              <span>status: active_learner</span>
              <span className="text-brand">progress: 1%</span>
            </div>
          </BorderBeam>
        </div>

        {/* سمت چپ: ترمینال */}
        <div className="lg:col-span-7 flex flex-col">
          <Terminal
            lines={terminalLines}
            speed={28}
            title="aporis@workspace ~"
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}
