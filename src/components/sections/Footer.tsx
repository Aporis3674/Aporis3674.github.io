import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-border/60 bg-card/40 backdrop-blur-md py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* راست: مشخصات آپوریس */}
        <div className="flex items-center gap-3">
          <Avatar
            name="Aporis"
            src="https://avatars.githubusercontent.com/u/233422463?v=4"
            size="sm"
            className="border border-border"
          />
          <div className="flex flex-col text-start">
            <span className="font-bold text-sm text-foreground">آپوریس (Aporis)</span>
            <span className="text-xs text-muted-foreground font-mono" dir="ltr">
              aporis3674 • Aryellea
            </span>
          </div>
        </div>

        {/* وسط: حق نشر ساده */}
        <div className="text-center text-xs text-muted-foreground leading-relaxed">
          <p>وب‌سایت شخصی و پورتفولیو آپوریس</p>
        </div>

        {/* چپ: دکمه بازگشت به بالا */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="text-xs gap-1.5 h-8 border-border hover:border-brand cursor-pointer"
            title="بازگشت به ابتدای صفحه"
          >
            <span>بالای صفحه</span>
            <ArrowUp className="size-3" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
