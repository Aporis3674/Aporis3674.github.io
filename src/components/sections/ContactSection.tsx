import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/animations/border-beam";
import {
  Copy,
  Check,
  ExternalLink,
  Share2,
} from "lucide-react";

export function ContactSection() {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <Share2 className="size-3.5" />
          <span>پل‌های ارتباطی</span>
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          چطور با آپوریس در ارتباط باشم؟
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          برای گفت‌وگو در مورد پروژه‌ها، برنامه‌نویسی یا ایده‌های جدید از طریق راه‌های زیر در دسترسم:
        </p>
      </div>

      {/* دو پل ارتباطی اصلی: تلگرام و گیت‌هاب */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* ۱. تلگرام - با آیکون Icons8 و حاشیه نورانی اختصاصی */}
        <div className="flex flex-col">
          <BorderBeam
            duration={4}
            color="var(--brand)"
            containerClassName="h-full"
            className="p-6 flex flex-col justify-between h-full bg-card/90"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/30 flex items-center justify-center p-2">
                  <img src="/icons/telegram.png" alt="Telegram" className="size-8 object-contain" />
                </div>
                <Badge variant="brand" className="text-xs">
                  پاسخگویی سریع
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">
                تلگرام (Telegram)
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                سریع‌ترین راه برای گفت‌وگو، سوال و همکاری
              </p>

              <div className="p-3 rounded-lg bg-muted/60 border border-border flex items-center justify-between font-mono text-sm mb-4" dir="ltr">
                <span className="text-foreground font-semibold">@Aryellea</span>
                <button
                  onClick={() => handleCopy("@Aryellea", "tg")}
                  className="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition-colors flex items-center gap-1 text-xs font-sans cursor-pointer"
                  title="کپی آیدی"
                >
                  {copiedKey === "tg" ? (
                    <>
                      <Check className="size-3.5 text-success" />
                      <span className="text-[11px] text-success font-sans">کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span className="text-[11px] font-sans">کپی</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href="https://t.me/Aryellea"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="brand" size="md" className="w-full gap-2">
                <span>شروع گفت‌وگو در تلگرام</span>
                <ExternalLink className="size-3.5 opacity-70" />
              </Button>
            </a>
          </BorderBeam>
        </div>

        {/* ۲. گیت‌هاب - aporis3674 با آیکون Icons8 */}
        <div className="flex flex-col">
          <BorderBeam
            duration={6}
            color="var(--foreground)"
            containerClassName="h-full"
            className="p-6 flex flex-col justify-between h-full bg-card/90"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-foreground/10 border border-border flex items-center justify-center p-2">
                  <img src="/icons/github.png" alt="GitHub" className="size-8 object-contain" />
                </div>
                <Badge variant="outline" className="text-xs font-mono" dir="ltr">
                  16 Repos
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">
                گیت‌هاب (GitHub)
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                ریپازیتوری‌های متن‌باز، ستاره‌ها و کدهای منتشرشده
              </p>

              <div className="p-3 rounded-lg bg-muted/60 border border-border flex items-center justify-between font-mono text-sm mb-4" dir="ltr">
                <span className="text-foreground font-semibold">aporis3674</span>
                <button
                  onClick={() => handleCopy("aporis3674", "gh")}
                  className="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition-colors flex items-center gap-1 text-xs font-sans cursor-pointer"
                  title="کپی نام کاربری"
                >
                  {copiedKey === "gh" ? (
                    <>
                      <Check className="size-3.5 text-success" />
                      <span className="text-[11px] text-success font-sans">کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span className="text-[11px] font-sans">کپی</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href="https://github.com/Aporis3674"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" size="md" className="w-full gap-2">
                <img src="/icons/github-light.png" alt="GitHub" className="size-4 shrink-0" />
                <span>مشاهده پروفایل گیت‌هاب</span>
                <ExternalLink className="size-3.5 opacity-70" />
              </Button>
            </a>
          </BorderBeam>
        </div>
      </div>
    </section>
  );
}
