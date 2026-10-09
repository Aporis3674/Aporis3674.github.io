import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { AvatarHover, type PersonItem } from "@/components/animations/avatar-hover";
import { GitPullRequest, Users } from "lucide-react";

export function Contributors() {
  const contributors: PersonItem[] = [
    {
      name: "mighro (Mighro)",
      src: "https://avatars.githubusercontent.com/u/309331631?v=4",
      url: "https://github.com/mighro",
    },
  ];

  return (
    <section id="contributors" className="py-12 px-4 max-w-4xl mx-auto">
      <div className="p-6 sm:p-8 rounded-3xl bg-card/80 border border-border shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
        {/* سمت راست: عنوان و توضیح */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <Badge variant="outline" className="text-brand border-brand/30 gap-1.5">
              <Users className="size-3.5" />
              <span>مشارکت‌کنندگان</span>
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1" dir="ltr">
              <GitPullRequest className="size-3 text-emerald-400" />
              <span>Merged PRs</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1.5">
            ممنون از کسایی که با من همکاری کردن
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
            توسعه‌دهندگانی که با ارسال Pull Request و پیشنهادهای خود در توسعه پروژه‌های متن‌باز مشارکت داشتند.
          </p>
        </div>

        {/* سمت چپ: آواتارهای هاوردار با انیمیشن فنری VibeFarsi */}
        <div className="flex items-center shrink-0">
          <AvatarHover people={contributors} size="lg" lift={10} />
        </div>
      </div>
    </section>
  );
}
