import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  GitBranch,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Terminal,
  FolderGit2,
  GitMerge,
  RotateCcw,
  Archive,
  AlertTriangle,
  FileCode,
} from "lucide-react";

interface GitTopic {
  id: string;
  titleFa: string;
  titleEn: string;
  icon: React.ReactNode;
  summary: string;
  cards: {
    title: string;
    description: string;
    command?: string;
    explanation?: string;
  }[];
}

export function GitTutorial() {
  const [activeTab, setActiveTab] = React.useState("basics");
  const [copiedCmd, setCopiedCmd] = React.useState<string | null>(null);

  const topics: GitTopic[] = [
    {
      id: "basics",
      titleFa: "مبانی روزمره",
      titleEn: "Basics",
      icon: <Terminal className="size-4" />,
      summary: "دستوراتی که هر روز برای ثبت و ارسال کد استفاده می‌کنید.",
      cards: [
        {
          title: "شروع مخزن محلی",
          description: "ایجاد یک ریپازیتوری خالی گیت در پوشه جاری پروژه.",
          command: "git init",
          explanation: "پوشه مخفی .git ساخته می‌شود و ردگیری فایل‌ها آغاز می‌گردد.",
        },
        {
          title: "بررسی وضعیت فایل‌ها",
          description: "مشاهده فایل‌های تغییریافته، اضافه شده یا استیج‌نشده.",
          command: "git status",
          explanation: "همیشه قبل از هر کامیت وضعیت فعلی ورکینگ‌تری را چک کنید.",
        },
        {
          title: "استیج کردن فایل‌ها",
          description: "آماده‌سازی فایل‌ها برای ثبت در کامیت بعدی.",
          command: "git add .",
          explanation: "نقطه (.) به معنای اضافه کردن تمام فایل‌های تغییریافته است.",
        },
        {
          title: "ثبت کامیت (Commit)",
          description: "ذخیره تغییرات استیج‌شده همراه با پیام توضیحی استاندارد.",
          command: 'git commit -m "feat: توضیح مختصر تغییرات"',
          explanation: "یک اسنپ‌شات پایدار از نسخه فعلی کد در تاریخچه ثبت می‌شود.",
        },
        {
          title: "ارسال به سرور (Push)",
          description: "آپلود کامیت‌های محلی به مخزن ریموت گیت‌هاب.",
          command: "git push origin main",
          explanation: "تغییرات شما به برنچ اصلی در گیت‌هاب ارسال می‌شود.",
        },
      ],
    },
    {
      id: "changes",
      titleFa: "بررسی تغییرات",
      titleEn: "Changes & Diff",
      icon: <FileCode className="size-4" />,
      summary: "مشاهده دقیق خطوط تغییر کرده و تاریخچه کامیت‌ها.",
      cards: [
        {
          title: "مشاهده تغییرات خط‌به‌خط",
          description: "دیدن تغییرات اعمال‌شده در فایل‌ها قبل از مرحله استیج.",
          command: "git diff",
          explanation: "خطوط سبز (+) موارد اضافه شده و قرمز (-) موارد حذف شده هستند.",
        },
        {
          title: "تاریخچه خلاصه کامیت‌ها",
          description: "مشاهده یک‌خطی لاگ کامیت‌های قبلی همراه با کد هش.",
          command: "git log --oneline -n 5",
          explanation: "پنج کامیت آخر را به شکل تمیز و تک‌خطی نمایش می‌دهد.",
        },
        {
          title: "بازگردانی فایل به حالت قبل",
          description: "لغو تغییرات ذخیره‌نشده یک فایل و بازگشت به آخرین کامیت.",
          command: "git restore <file_name>",
          explanation: "تغییرات فایل انتخابی حذف و با آخرین نسخه کامیت‌شده جایگزین می‌شود.",
        },
      ],
    },
    {
      id: "branches",
      titleFa: "شاخه‌ها (Branches)",
      titleEn: "Branches",
      icon: <GitBranch className="size-4" />,
      summary: "ایجاد شاخه‌های مجزا برای توسعه بدون تداخل در کد اصلی.",
      cards: [
        {
          title: "لیست شاخه‌ها",
          description: "نمایش تمام برنچ‌های محلی و مشخص کردن برنچ فعال فعلی.",
          command: "git branch",
          explanation: "ستاره (*) کنار نام برنچ نشان‌دهنده برنچ فعال است.",
        },
        {
          title: "ساخت و سوییچ به برنچ جدید",
          description: "ایجاد یک شاخه تازه برای قابلیت جدید و ورود همزمان به آن.",
          command: "git checkout -b feature/login",
          explanation: "دستور جدیدتر: git switch -c feature/login",
        },
        {
          title: "تغییر برنچ فعال",
          description: "جابه‌جایی بین شاخه‌های موجود در پروژه.",
          command: "git switch main",
          explanation: "مطمئن شوید تغییرات ذخیره‌نشده روی شاخه قبلی نمانده باشد.",
        },
      ],
    },
    {
      id: "merge",
      titleFa: "ادغام شاخه‌ها",
      titleEn: "Merge",
      icon: <GitMerge className="size-4" />,
      summary: "ترکیب کدهای توسعه‌یافته در یک شاخه با شاخه اصلی.",
      cards: [
        {
          title: "ادغام یک برنچ به برنچ فعلی",
          description: "انتقال کدهای برنچ جدید به برنچ اصلی.",
          command: "git merge feature/login",
          explanation: "ابتدا روی برنچ مقصد (main) بروید و سپس این دستور را بزنید.",
        },
        {
          title: "لغو ادغام در صورت تداخل",
          description: "انصراف کامل از مرج و بازگشت به وضعیت قبل از شروع ادغام.",
          command: "git merge --abort",
          explanation: "در مواقعی که کانفلیکت پیچیده پیش آمده و می‌خواهید لغوش کنید.",
        },
      ],
    },
    {
      id: "stash",
      titleFa: "ذخیره موقت (Stash)",
      titleEn: "Stash",
      icon: <Archive className="size-4" />,
      summary: "پارک کردن موقت کدهای ناتمام برای تغییر سریع برنچ.",
      cards: [
        {
          title: "ذخیره موقت تغییرات",
          description: "انتقال تغییرات ناتمام به حافظه موقت و تمیز شدن ورکینگ‌تری.",
          command: "git stash",
          explanation: "کد شما پاک نمی‌شود، در کش گیت ذخیره می‌شود تا بعداً برگردید.",
        },
        {
          title: "بازگردانی کار ذخیره‌شده",
          description: "خروج آخرین کدهای پارک‌شده از حافظه موقت و اعمال به پروژه.",
          command: "git stash pop",
          explanation: "تغییرات را از استش خارج کرده و کش را پاک می‌کند.",
        },
      ],
    },
    {
      id: "undo",
      titleFa: "لغو و بازگردانی",
      titleEn: "Undo & Recovery",
      icon: <RotateCcw className="size-4" />,
      summary: "اصلاح اشتباهات و بازگشت امن به نسخه‌های قبلی.",
      cards: [
        {
          title: "اصلاح آخرین کامیت",
          description: "اضافه کردن تغییرات جاافتاده به همان کامیت قبلی بدون کامیت جدید.",
          command: "git commit --amend --no-edit",
          explanation: "تغییرات جدید در کامیت قبلی ادغام می‌شوند.",
        },
        {
          title: "لغو امن یک کامیت عمومی",
          description: "ساخت یک کامیت معکوس برای بازگردانی تغییرات بدون پاک کردن تاریخچه.",
          command: "git revert <commit_hash>",
          explanation: "امن‌ترین روش برای لغو کدهایی که قبلاً روی گیت‌هاب پوش شده‌اند.",
        },
      ],
    },
  ];

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const activeTopic = topics.find((t) => t.id === activeTab) || topics[0];

  return (
    <section id="git-tutorial" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش آموزش گیت */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-brand border-brand/30 gap-1.5 font-mono" dir="ltr">
            <GitBranch className="size-3.5" />
            <span>Get-Git Reference</span>
          </Badge>
          <span className="text-xs text-muted-foreground">• فلش‌کارت‌های کاربردی گیت</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          آموزش گیت (Git Crash Course)
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed mb-6">
          دستورات حیاتی و کاربردی که در ۸۰٪ سناریوهای واقعی توسعه با آن‌ها سر و کار دارید.
        </p>

        {/* کارت معرفی و تقدیر از پروژه و سازنده */}
        <div className="w-full max-w-2xl p-4 rounded-2xl bg-card border border-border/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-start">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
              <FolderGit2 className="size-5 text-orange-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-foreground">
                  پروژه متن‌باز Get-Git
                </span>
                <Badge variant="outline" className="text-[10px] py-0 font-mono" dir="ltr">
                  Open Source
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                توسعه داده شده توسط <strong className="text-foreground">پارسا بردبار (Parsa Bordbar)</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://github.com/ParsaBordbar/get-git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 border-border">
                <span>سورس گیت‌هاب</span>
                <ExternalLink className="size-3" />
              </Button>
            </a>
            <a
              href="https://parsabordbar.github.io/get-git/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="brand" size="sm" className="h-8 text-xs gap-1.5">
                <span>سایت Get-Git</span>
                <ExternalLink className="size-3" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* تب‌های دسته‌بندی موضوعات */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {topics.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border shrink-0",
                isActive
                  ? "bg-brand text-brand-foreground border-brand shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  : "bg-card/70 border-border text-muted-foreground hover:text-foreground hover:bg-card"
              )}
            >
              {t.icon}
              <span>{t.titleFa}</span>
              <span className="text-[11px] opacity-75 font-mono hidden sm:inline" dir="ltr">
                ({t.titleEn})
              </span>
            </button>
          );
        })}
      </div>

      {/* نمایش فلش‌کارت‌های بخش فعال */}
      <div className="p-6 rounded-3xl bg-card/60 border border-border shadow-xl">
        <div className="mb-6 pb-4 border-b border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <span>{activeTopic.titleFa}</span>
              <span className="text-xs text-brand font-mono font-medium" dir="ltr">
                [{activeTopic.titleEn}]
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {activeTopic.summary}
            </p>
          </div>
          <Badge variant="outline" className="text-xs font-mono" dir="ltr">
            {activeTopic.cards.length} Commands
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeTopic.cards.map((card, idx) => (
            <Card
              key={idx}
              className="p-4 bg-card/90 border-border/80 hover:border-brand/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-brand inline-block" />
                  <span>{card.title}</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {card.description}
                </p>

                {/* کادر دستور ترمینال */}
                {card.command && (
                  <div
                    className="p-2.5 rounded-lg bg-black/80 border border-border/70 flex items-center justify-between gap-2 font-mono text-xs mb-3 group/cmd"
                    dir="ltr"
                  >
                    <span className="text-brand font-semibold overflow-x-auto whitespace-nowrap scrollbar-none">
                      {card.command}
                    </span>
                    <button
                      onClick={() => handleCopy(card.command!)}
                      className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                      title="کپی دستور"
                    >
                      {copiedCmd === card.command ? (
                        <Check className="size-3.5 text-success" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {card.explanation && (
                <div className="pt-2 border-t border-border/40 text-[11px] text-muted-foreground">
                  <span>نکته: {card.explanation}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
