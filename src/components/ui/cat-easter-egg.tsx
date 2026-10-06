import * as React from "react";
import { X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function CatEasterEgg() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* دکمه شناور پنجه گربه در گوشه پایین */}
      <div className="fixed bottom-5 start-5 z-40">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "size-12 rounded-full border border-border/80 bg-card/90 shadow-2xl backdrop-blur-md",
            "flex items-center justify-center text-xl transition-all duration-300 cursor-pointer",
            "hover:scale-110 hover:border-brand/60 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]",
            isOpen ? "border-brand ring-2 ring-brand/30" : "animate-bounce"
          )}
          title="ایستر اگ مخفی! کلیک کن 🐾"
          aria-label="ایستر اگ مخفی گربه"
        >
          🐾
        </button>
      </div>

      {/* پنجره پاپ‌آپ شیشه‌ای ویدیوی گربه */}
      {isOpen && (
        <div className="fixed bottom-20 start-5 z-50 w-72 sm:w-80 rounded-2xl border border-border/90 bg-card/95 shadow-2xl backdrop-blur-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-border/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <span>مود بعد از ساعت‌ها دیباگ 🛁</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              title="بستن"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* ویدیوی لوپ گربه */}
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-black aspect-square flex items-center justify-center">
            <video
              src="/cat.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover"
            />
          </div>

          <p className="text-[11px] text-muted-foreground text-center mt-2.5">
            وقتی بالاخره آخرین باگ هم فیکس میشه و به آرامش می‌رسی 🧼🐱
          </p>
        </div>
      )}
    </>
  );
}
