import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, TelegramIcon, YoutubeIcon } from "@/components/icons/GithubIcon";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent border-b border-border/30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* راست: آواتار و نام کاربر */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative inline-flex shrink-0">
            <Avatar
              name="Aporis"
              src="https://avatars.githubusercontent.com/u/233422463?v=4"
              size="md"
              className="border-2 border-border/80 group-hover:border-brand transition-colors"
            />
            <span
              className="absolute bottom-0.5 start-0.5 size-2.5 rounded-full bg-success ring-2 ring-background"
              title="آنلاین و آماده یادگیری"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-foreground tracking-tight group-hover:text-brand transition-colors">
              آپوریس
            </span>
            <span className="text-xs text-brand font-semibold font-sans" dir="ltr">
              Aporis
            </span>
          </div>
        </a>

        {/* وسط: ناوبری */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-sm text-muted-foreground">
          <a href="#intro" className="hover:text-foreground transition-colors">
            معرفی
          </a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">
            نقشه راه
          </a>
          <a
            href="https://parsabordbar.github.io/get-git/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
            title="آموزش گیت (Get-Git اثر پارسا بردبار)"
          >
            آموزش گیت
          </a>
          <a href="#workspace" className="hover:text-foreground transition-colors">
            محیط کاربری
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            ارتباط
          </a>
          <a href="#games" className="hover:text-foreground transition-colors">
            بازی‌ها
          </a>
          <a href="#repos" className="hover:text-foreground transition-colors">
            ریپازیتوری‌ها
          </a>
        </nav>

        {/* چپ: دکمه‌های شبکه با استایل کاملاً هماهنگ و یکدست */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://youtube.com/@Rivenixi"
            target="_blank"
            rel="noopener noreferrer"
            title="چنل یوتیوب Rivenixi"
          >
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-xl border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-muted/60 transition-all cursor-pointer"
            >
              <YoutubeIcon className="size-4" />
            </Button>
          </a>
          <a
            href="https://github.com/Aporis3674"
            target="_blank"
            rel="noopener noreferrer"
            title="گیت‌هاب آپوریس"
          >
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-xl border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-muted/60 transition-all cursor-pointer"
            >
              <GithubIcon className="size-4" />
            </Button>
          </a>
          <a
            href="https://t.me/Aryellea"
            target="_blank"
            rel="noopener noreferrer"
            title="ارسال پیام در تلگرام"
          >
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-xl border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-muted/60 transition-all cursor-pointer"
            >
              <TelegramIcon className="size-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
