import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fa, faNumber } from "@/lib/utils";
import {
  GitFork,
  Star,
  ExternalLink,
  Code2,
  FolderGit2,
  Search,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface RepoItem {
  name: string;
  description: string;
  stars: number;
  forks?: number;
  language: string;
  languageColor: string;
  url: string;
  isPopular?: boolean;
}

export function Repositories() {
  const [filter, setFilter] = React.useState<"all" | "starred" | "python" | "telegram">("all");
  const [copiedRepo, setCopiedRepo] = React.useState<string | null>(null);

  const repos: RepoItem[] = [
    {
      name: "TelegramFreeRich",
      description: "ویرایشگر متن پیشرفته رایگان برای پیام‌های تلگرام (Free Rich Text Editor for Telegram)",
      stars: 24,
      forks: 3,
      language: "JavaScript",
      languageColor: "#f7df1e",
      url: "https://github.com/Aporis3674/TelegramFreeRich",
      isPopular: true,
    },
    {
      name: "telegram-to-r2",
      description: "ربات تلگرام انتقال مستقیم فایل‌ها و مدیاها به فضای ابری ذخیره‌سازی Cloudflare R2",
      stars: 8,
      forks: 1,
      language: "Shell",
      languageColor: "#89e051",
      url: "https://github.com/Aporis3674/telegram-to-r2",
      isPopular: true,
    },
    {
      name: "telegram-helper-bot",
      description: "دستیار هوش مصنوعی تلگرام با قابلیت جست‌وجوی وب، استدلال و درک کانتکست گروه‌ها",
      stars: 0,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/Aporis3674/telegram-helper-bot",
    },
    {
      name: "RVG",
      description: "پنل مدیریت پروکسی چند پروتکله توسعه یافته با پایتون و FastAPI قابل اجرا روی Railway",
      stars: 0,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/Aporis3674/RVG",
    },
    {
      name: "apitestllm",
      description: "تست و بررسی خروجی‌ها و زمان پاسخ‌دهی API مدل‌های بزرگ زبانی (LLMs)",
      stars: 1,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/Aporis3674/apitestllm",
    },
    {
      name: "v01",
      description: "ربات رابط تلگرام برای بررسی و ثبت پیشنهادات پروموشن Gemini و Google One",
      stars: 0,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/Aporis3674/v01",
    },
    {
      name: "pomodorus",
      description: "ابزار متمرکزسازی زمان کار و برنامه‌نویسی با متدولوژی پرطرفدار پومودورو",
      stars: 0,
      language: "TypeScript",
      languageColor: "#3178c6",
      url: "https://github.com/Aporis3674/pomodorus",
    },
    {
      name: "Aporis3674.github.io",
      description: "سورس صفحه شخصی و پورتفولیو توسعه‌دهنده بر روی گیت‌هاب پیجز",
      stars: 0,
      language: "React / HTML",
      languageColor: "#61dafb",
      url: "https://github.com/Aporis3674/Aporis3674.github.io",
    },
  ];

  const handleCopyClone = (cloneUrl: string, name: string) => {
    navigator.clipboard.writeText(`git clone ${cloneUrl}.git`);
    setCopiedRepo(name);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  const filteredRepos = repos.filter((r) => {
    if (filter === "starred") return r.stars > 0;
    if (filter === "python") return r.language.toLowerCase().includes("python");
    if (filter === "telegram") return r.name.toLowerCase().includes("telegram");
    return true;
  });

  return (
    <section id="repos" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش ریپازیتوری‌ها */}
      <div className="flex flex-col items-center text-center mb-10">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <FolderGit2 className="size-3.5" />
          <span>پروژه‌های متن‌باز</span>
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          ریپازیتوری‌های گیت‌هاب
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          کدها، پروژه‌های منتشر شده و ابزارهایی که تا کنون توسعه داده‌ام به همراه آمار استارها
        </p>
      </div>

      {/* فیلترهای دسته‌بندی */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-border/60">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="text-xs h-8"
          >
            همه ریپوها ({fa(repos.length)})
          </Button>
          <Button
            variant={filter === "starred" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("starred")}
            className="text-xs h-8 gap-1.5"
          >
            <img src="/icons/star.png" alt="Star" className="size-3.5 object-contain" />
            <span>ستاره‌دار</span>
          </Button>
          <Button
            variant={filter === "python" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("python")}
            className="text-xs h-8"
          >
            پایتون (Python)
          </Button>
          <Button
            variant={filter === "telegram" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("telegram")}
            className="text-xs h-8"
          >
            ربات‌های تلگرام
          </Button>
        </div>

        <a
          href="https://github.com/Aporis3674?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground hover:text-foreground">
            <span>مشاهده همه در گیت‌هاب</span>
            <ExternalLink className="size-3" />
          </Button>
        </a>
      </div>

      {/* شبکه کارت‌های ریپازیتوری */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepos.map((repo) => (
          <Card
            key={repo.name}
            className="p-5 flex flex-col justify-between hover:border-brand/40 transition-all duration-200 group bg-card/80 hover:bg-card"
          >
            <div>
              {/* بالای کارت: نام ریپو و تعداد استارها */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group-hover:text-brand transition-colors"
                >
                  <FolderGit2 className="size-4 text-brand shrink-0" />
                  <span className="font-bold text-base text-foreground font-mono group-hover:text-brand transition-colors" dir="ltr">
                    {repo.name}
                  </span>
                </a>

                {/* آیکون استار با ارقام فارسی وزیرمتن */}
                <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md bg-muted/70 border border-border/80">
                  <img
                    src="/icons/star.png"
                    alt="Star"
                    className="size-3.5 object-contain"
                  />
                  <span className="text-xs font-bold text-foreground font-sans">
                    {fa(repo.stars)}
                  </span>
                </div>
              </div>

              {/* توضیحات ریپو */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {repo.description}
              </p>
            </div>

            {/* پایین کارت: زبان برنامه‌نویسی و دکمه‌ها */}
            <div className="pt-3 border-t border-border/50 flex items-center justify-between">
              {/* زبان */}
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 rounded-full inline-block"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <span className="text-xs font-mono text-muted-foreground" dir="ltr">
                  {repo.language}
                </span>
              </div>

              {/* دکمه‌های کپی و لینک */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopyClone(repo.url, repo.name)}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors text-xs flex items-center gap-1"
                  title="کپی دستور کلون گیت"
                >
                  {copiedRepo === repo.name ? (
                    <Check className="size-3.5 text-success" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-muted-foreground hover:text-brand hover:bg-muted rounded transition-colors"
                  title="مشاهده در گیت‌هاب"
                >
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
