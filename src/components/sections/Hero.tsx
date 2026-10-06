import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/animations/border-beam";
import { GridBackground } from "@/components/backgrounds/grid";
import { ArrowDown, Send, Terminal, Sparkles } from "lucide-react";
import { BlurText } from "@/components/animations/blur-text";
import { fa } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4">
      {/* والپیپر کیهانی نیمه‌شفاف ارسالی کاربر در پس‌زمینه */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        <img
          src="/hero-bg.jpg"
          alt="Cosmic Background"
          className="size-full object-cover object-top opacity-25 sm:opacity-30 filter contrast-110"
        />
        {/* گرادیانت‌های نرم برای محو شدن شیک در تم تیره */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      </div>

      <GridBackground size={52} className="opacity-30" />

      {/* نور محیطی ملایم در پشت هیرو */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* نشان بالای هیرو */}
        <div className="mb-6 flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1 bg-card/60 backdrop-blur border-border text-foreground/80 gap-1.5">
            <Sparkles className="size-3.5 text-brand" />
            <span>پروفایل رسمی توسعه‌دهنده</span>
          </Badge>
        </div>

        {/* تصویر آواتار با حاشیه نورانی گرد */}
        <div className="relative mb-6">
          <div className="relative p-1 rounded-full border border-border/80 bg-card shadow-2xl">
            <Avatar
              name="Aporis"
              src="https://avatars.githubusercontent.com/u/233422463?v=4"
              size="xl"
              className="size-28 sm:size-32 border-2 border-border/50 ring-4 ring-card/80"
            />
            {/* استاتوس دات پالس‌دار */}
            <span
              className="absolute bottom-2 start-2 size-4 rounded-full bg-success ring-4 ring-card"
              title="آنلاین و در حال یادگیری"
            />
          </div>
        </div>

        {/* نام و عنوان اصلی */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          آپوریس <span className="text-brand font-semibold text-2xl sm:text-3xl font-sans">/ Aporis</span>
        </h1>

        {/* توضیح کوتاه هیرو - با انیمیشن ظهور تار BlurText */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8 font-medium">
          <BlurText text="علاقه‌مند به دنیای کامپیوتر، برنامه‌نویسی" delay={80} />
        </p>

        {/* آمار خلاصه با فونت وزیرمتن و آیکون باکیفیت Icons8 */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg mb-8">
          <div className="p-3.5 rounded-xl border border-border/70 bg-card/70 backdrop-blur text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-normal font-sans">
              {fa(16)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">ریپازیتوری</div>
          </div>

          <div className="p-3.5 rounded-xl border border-border/70 bg-card/70 backdrop-blur text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-normal font-sans flex items-center justify-center gap-1.5">
              <span>{fa(33)}</span>
              <img src="/icons/star.png" alt="Star" className="size-5 shrink-0 inline-block drop-shadow-sm" />
            </div>
            <div className="text-xs text-muted-foreground mt-1">ستاره دریافت شده</div>
          </div>

          <div className="p-3.5 rounded-xl border border-border/70 bg-card/70 backdrop-blur text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-success tracking-normal font-sans flex items-center justify-center gap-1" dir="ltr">
              <span className="text-xl">+</span>
              <span>{fa(1)}٪</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">مسیر پایتون</div>
          </div>
        </div>

        {/* دکمه‌های اقدام اصلی با آیکون‌های رسمی Icons8 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#intro">
            <Button variant="default" size="md" className="gap-2">
              <Terminal className="size-4 text-background" />
              <span>معرفی و ترمینال</span>
              <ArrowDown className="size-3.5" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="brand" size="md" className="gap-2">
              <span>راه‌های ارتباطی</span>
            </Button>
          </a>
          <a href="https://github.com/Aporis3674" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="md" className="gap-2">
              <img src="/icons/github-light.png" alt="GitHub" className="size-4 shrink-0" />
              <span>پروفایل گیت‌هاب</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
