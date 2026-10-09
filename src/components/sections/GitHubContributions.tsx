import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn, fa } from "@/lib/utils";
import fallbackData from "@/data/contributions-fallback.json";
import { Activity, ExternalLink, GitCommit } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const LEVEL_COLORS = [
  "bg-[#161b22] border border-[#262c36]/50",
  "bg-[#0e4429] border border-[#0e4429]",
  "bg-[#006d32] border border-[#006d32]",
  "bg-[#26a641] border border-[#26a641]",
  "bg-[#39d353] border border-[#39d353] shadow-[0_0_6px_rgba(57,211,83,0.4)]",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function GitHubContributions() {
  const [data, setData] = React.useState<{
    total: number;
    contributions: ContributionDay[];
  }>({
    total: 89,
    contributions: (fallbackData as any).contributions || [],
  });

  React.useEffect(() => {
    let active = true;
    fetch("https://github-contributions-api.jogruber.de/v4/Aporis3674?y=last")
      .then((res) => res.json())
      .then((json) => {
        if (active && json && Array.isArray(json.contributions)) {
          const total = json.total?.lastYear ?? 89;
          setData({ total, contributions: json.contributions });
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // دسته‌بندی روزها در ستون‌های ۷ تایی (هفته‌ها)
  const weeks = React.useMemo(() => {
    const list: ContributionDay[][] = [];
    const days = data.contributions;
    for (let i = 0; i < days.length; i += 7) {
      list.push(days.slice(i, i + 7));
    }
    return list;
  }, [data.contributions]);

  return (
    <div className="w-full mb-10 p-5 rounded-3xl bg-card/90 border border-border/80 shadow-2xl">
      {/* هدر گراف: تعداد فعالیت‌ها و وضعیت زنده */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Activity className="size-4 text-emerald-400" />
          <h3 className="text-sm sm:text-base font-bold text-foreground">
            {fa(data.total)} فعالیت و کامیت در سال اخیر
          </h3>
          <span className="text-xs font-mono text-muted-foreground hidden sm:inline" dir="ltr">
            ({data.total} contributions)
          </span>
        </div>

        <a
          href="https://github.com/Aporis3674"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-brand transition-colors font-mono"
          dir="ltr"
        >
          <span>github.com/Aporis3674</span>
          <ExternalLink className="size-3" />
        </a>
      </div>

      {/* ناحیه اسکرول افقی هیت‌مپ گیت‌هاب */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none" dir="ltr">
        <div className="min-w-[700px] flex flex-col gap-2 p-2">
          {/* ردیف ماه‌ها */}
          <div className="grid grid-cols-12 text-[11px] font-mono text-muted-foreground ps-7 pe-2">
            {MONTHS.map((m) => (
              <span key={m} className="text-start">
                {m}
              </span>
            ))}
          </div>

          {/* شبکه مربع‌های فعالیت */}
          <div className="flex items-start gap-2">
            {/* روزهای هفته (Mon, Wed, Fri) */}
            <div className="flex flex-col justify-between text-[10px] font-mono text-muted-foreground h-[86px] pt-2 pb-1 shrink-0 select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* ۵۳ ستون هفته‌ها */}
            <div className="flex gap-[3px] flex-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                      className={cn(
                        "size-[10px] sm:size-[11px] rounded-[2px] transition-transform hover:scale-125 cursor-pointer",
                        LEVEL_COLORS[Math.min(4, Math.max(0, day.level))]
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* فوتر هیت‌مپ: راهنمای شدت فعالیت (Less ... More) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-border/40 text-[11px] text-muted-foreground">
        <span className="font-mono text-xs">
          Live GitHub Activity Graph
        </span>

        {/* Legend */}
        <div className="flex items-center gap-1.5 font-mono text-[10px]" dir="ltr">
          <span className="me-1">Less</span>
          {LEVEL_COLORS.map((c, i) => (
            <span key={i} className={cn("size-2.5 rounded-[2px]", c)} />
          ))}
          <span className="ms-1">More</span>
        </div>
      </div>
    </div>
  );
}
