import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fa } from "@/lib/utils";
import { BookCheck, Flame, GitBranch } from "lucide-react";

export function LearningProgress() {
  return (
    <section id="learning" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <BookCheck className="size-3.5" />
          <span>مهارت‌ها و مسیر یادگیری</span>
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
          مسیر یادگیری و مهارت‌ها
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          در حال حاضر روی یادگیری این دو مهارت تمرکز دارم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ۱. پایتون - ۱٪ پیشرفت */}
        <Card className="p-6 border-brand/40 bg-gradient-to-br from-card via-card to-brand/5 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center p-2.5">
                  <img src="/icons/python.png" alt="Python" className="size-7 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      پایتون
                    </h3>
                    <span className="text-xs text-brand font-mono font-medium" dir="ltr">
                      (Python)
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    زبان برنامه‌نویسی برای اسکریپت‌نویسی، اتوماسیون و ساخت بات‌ها
                  </p>
                </div>
              </div>
              <Badge variant="brand" className="text-xs">
                در حال یادگیری
              </Badge>
            </div>

            {/* کارت هایلایت متن ۱ درصد */}
            <div className="p-3.5 rounded-xl bg-muted/50 border border-border/70 mb-5 flex items-center gap-2.5">
              <Flame className="size-5 text-brand shrink-0" />
              <span className="text-sm sm:text-base font-bold text-foreground">
                {fa(1)} درصد پایتون یاد گرفته
              </span>
            </div>

            {/* نوار پیشرفت ۱٪ */}
            <Progress
              value={1}
              max={100}
              label={<span className="text-xs sm:text-sm font-semibold text-foreground">پیشرفت فعلی:</span>}
              showValue={true}
              size="md"
              className="mt-2"
            />
          </div>

          <div className="pt-4 border-t border-border/50 mt-6 flex items-center justify-between text-xs text-muted-foreground font-mono" dir="ltr">
            <span>language: python</span>
            <span className="text-brand font-semibold">1%</span>
          </div>
        </Card>

        {/* ۲. گیت - ۱٪ پیشرفت */}
        <Card className="p-6 border-border hover:border-brand/40 bg-card shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center p-2.5">
                  <GitBranch className="size-6 text-brand" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      گیت
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono font-medium" dir="ltr">
                      (Git)
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    سیستم کنترل نسخه و مدیریت سورس‌کد و پروژه‌های متن‌باز
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                در حال یادگیری
              </Badge>
            </div>

            {/* کارت هایلایت متن ۱ درصد */}
            <div className="p-3.5 rounded-xl bg-muted/50 border border-border/70 mb-5 flex items-center gap-2.5">
              <Flame className="size-5 text-brand shrink-0" />
              <span className="text-sm sm:text-base font-bold text-foreground">
                {fa(1)} درصد گیت یاد گرفته
              </span>
            </div>

            {/* نوار پیشرفت ۱٪ */}
            <Progress
              value={1}
              max={100}
              label={<span className="text-xs sm:text-sm font-semibold text-foreground">پیشرفت فعلی:</span>}
              showValue={true}
              size="md"
              className="mt-2"
            />
          </div>

          <div className="pt-4 border-t border-border/50 mt-6 flex items-center justify-between text-xs text-muted-foreground font-mono" dir="ltr">
            <span>tool: git & github</span>
            <span className="text-brand font-semibold">1%</span>
          </div>
        </Card>
      </div>
    </section>
  );
}
