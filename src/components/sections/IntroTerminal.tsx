import * as React from "react";
import { Terminal, type TerminalLine } from "@/components/animations/terminal";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/animations/border-beam";
import { Terminal as TerminalIcon } from "lucide-react";

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
    <section id="intro" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <TerminalIcon className="size-3.5" />
          <span>ترمینال و معرفی</span>
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          معرفی آپوریس
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          وضعیت فعلی و اهداف یادگیری در یک نگاه
        </p>
      </div>

      {/* ترمینال مرکزی و متمرکز */}
      <div className="w-full max-w-2xl mx-auto">
        <BorderBeam duration={6} color="var(--brand)" className="overflow-hidden bg-card/95 rounded-2xl">
          <Terminal
            lines={terminalLines}
            speed={28}
            title="aporis@workspace ~"
            className="w-full border-0 shadow-none"
          />
        </BorderBeam>
      </div>
    </section>
  );
}
