import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Heart } from "lucide-react";

export function GitRecommendation() {
  return (
    <section id="git-recommendation" className="py-12 px-4 max-w-4xl mx-auto">
      <div className="p-6 rounded-3xl bg-card border border-border shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
        {/* سمت راست: آواتار سازنده و معرفی پروژه */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://github.com/ParsaBordbar"
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 group"
            title="پروفایل گیت‌هاب پارسا بردبار"
          >
            <img
              src="https://avatars.githubusercontent.com/u/124056966?v=4"
              alt="Parsa Bordbar"
              className="size-16 rounded-2xl border-2 border-border object-cover group-hover:border-brand transition-colors"
            />
            <span className="absolute -bottom-1 -end-1 size-5 rounded-full bg-brand text-brand-foreground text-[10px] flex items-center justify-center font-bold">
              <GitBranch className="size-3" />
            </span>
          </a>

          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-lg font-bold text-foreground">
                پروژه آموزش گیت (Get-Git)
              </h3>
              <Badge variant="outline" className="text-[10px] font-mono" dir="ltr">
                Open Source
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
              فلش‌کارت‌های تعاملی و کاربردی برای یادگیری سریع گیت و گیت‌هاب؛ توسعه‌داده‌شده توسط{" "}
              <a
                href="https://github.com/ParsaBordbar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-brand transition-colors inline-flex items-center gap-1"
                dir="ltr"
              >
                @ParsaBordbar
              </a>
            </p>
          </div>
        </div>

        {/* سمت چپ: دکمه‌های لینک مستقیم */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/ParsaBordbar/get-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="h-9 text-xs gap-1.5 border-border">
              <img src="/icons/github-light.png" alt="GitHub" className="size-3.5 shrink-0" />
              <span>گیت‌هاب</span>
              <ExternalLink className="size-3 opacity-60" />
            </Button>
          </a>
          <a
            href="https://parsabordbar.github.io/get-git/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="brand" size="sm" className="h-9 text-xs gap-1.5">
              <span>ورود به Get-Git</span>
              <ExternalLink className="size-3" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
