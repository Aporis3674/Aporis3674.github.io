import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fa } from "@/lib/utils";
import {
  ExternalLink,
  FolderGit2,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
} from "lucide-react";

interface RepoItem {
  id?: number;
  name: string;
  description: string;
  stars: number;
  forks?: number;
  language: string;
  url: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

// اطلاعات اولیه برای بارگذاری سریع تا زمان دریافت زنده از API
const INITIAL_STARRED_REPOS: RepoItem[] = [
  {
    name: "TelegramFreeRich",
    description: "ویرایشگر متن پیشرفته رایگان برای پیام‌های تلگرام (Free Rich Text Editor for Telegram)",
    stars: 25,
    forks: 3,
    language: "JavaScript",
    url: "https://github.com/Aporis3674/TelegramFreeRich",
  },
  {
    name: "telegram-to-r2",
    description: "ربات تلگرام انتقال مستقیم فایل‌ها به فضای ابری ذخیره‌سازی Cloudflare R2",
    stars: 8,
    forks: 1,
    language: "Shell",
    url: "https://github.com/Aporis3674/telegram-to-r2",
  },
  {
    name: "apitestllm",
    description: "تست و ارزیابی پاسخ‌دهی و زمان تاخیر API مدل‌های بزرگ زبانی هوش مصنوعی",
    stars: 2,
    forks: 0,
    language: "Python",
    url: "https://github.com/Aporis3674/apitestllm",
  },
];

export function Repositories() {
  const [repos, setRepos] = React.useState<RepoItem[]>(INITIAL_STARRED_REPOS);
  const [loading, setLoading] = React.useState(false);
  const [copiedRepo, setCopiedRepo] = React.useState<string | null>(null);

  React.useEffect(() => {
    let isMounted = true;
    const fetchStarredRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users/Aporis3674/repos?per_page=100");
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && isMounted) {
          // فقط پروژه‌هایی که استار دارند
          const starred = data
            .filter((r: any) => (r.stargazers_count ?? 0) > 0)
            .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
            .map((r: any) => ({
              id: r.id,
              name: r.name,
              description: r.description || "پروژه منبع‌باز آپوریس در گیت‌هاب",
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language || "کد",
              url: r.html_url,
            }));

          if (starred.length > 0) {
            setRepos(starred);
          }
        }
      } catch {
        // در صورت عدم دسترسی به اینترنت، از کش اولیه استفاده می‌شود
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchStarredRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopyClone = (cloneUrl: string, name: string) => {
    navigator.clipboard.writeText(`git clone ${cloneUrl}.git`);
    setCopiedRepo(name);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

  return (
    <section id="repos" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش ریپازیتوری‌ها */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-brand border-brand/30 gap-1.5">
            <FolderGit2 className="size-3.5" />
            <span>پروژه‌های متن‌باز</span>
          </Badge>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground px-2 py-0.5 rounded-full bg-muted/40 border border-border/60">
            <span className={`size-1.5 rounded-full ${loading ? "bg-amber-400 animate-ping" : "bg-success"}`} />
            <span>اتصال زنده به گیت‌هاب</span>
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
          پروژه‌های ستاره‌دار
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          فهرست پروژه‌هایی که از جامعه گیت‌هاب ستاره دریافت کرده‌اند
        </p>
      </div>

      {/* نوار آمار ستاره‌ها و لینک گیت‌هاب */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">تعداد پروژه‌های ستاره‌دار:</span>
          <span className="text-xs font-bold text-foreground font-sans">{fa(repos.length)}</span>
          <span className="text-muted-foreground/40">•</span>
          <span className="text-xs text-muted-foreground">مجموع ستاره‌ها:</span>
          <span className="text-xs font-bold text-brand font-sans flex items-center gap-1">
            <img src="/icons/star.png" alt="Star" className="size-3.5 object-contain inline-block" />
            <span>{fa(totalStars)}</span>
          </span>
        </div>

        <a
          href="https://github.com/Aporis3674?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground hover:text-foreground">
            <span>مشاهده در گیت‌هاب</span>
            <ExternalLink className="size-3" />
          </Button>
        </a>
      </div>

      {/* کارت‌های پروژه‌های دارای استار */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <Card
            key={repo.name}
            className="p-5 flex flex-col justify-between hover:border-brand/50 transition-all duration-200 group bg-card/90 hover:bg-card shadow-lg"
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

                {/* استار با ارقام فارسی وزیرمتن و آیکون Icons8 */}
                <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md bg-muted/80 border border-border/80">
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
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {repo.description}
              </p>
            </div>

            {/* پایین کارت: زبان برنامه‌نویسی و دکمه‌ها */}
            <div className="pt-3 border-t border-border/50 flex items-center justify-between">
              {/* زبان */}
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 rounded-full inline-block"
                  style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#3b82f6" }}
                />
                <span className="text-xs font-mono text-muted-foreground" dir="ltr">
                  {repo.language}
                </span>
              </div>

              {/* دکمه‌های کپی و لینک */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopyClone(repo.url, repo.name)}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors text-xs flex items-center gap-1 cursor-pointer"
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
