import * as React from "react";
import { X, Cat, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export function CatEasterEgg() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const next = !isMuted;
      videoRef.current.muted = next;
      setIsMuted(next);
    }
  };

  return (
    <>
      {/* دکمه شناور در گوشه پایین */}
      <div className="fixed bottom-5 start-5 z-40">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "size-12 rounded-full border border-border/80 bg-card/95 shadow-2xl backdrop-blur-md",
            "flex items-center justify-center transition-all duration-300 cursor-pointer",
            "hover:scale-110 hover:border-brand/60 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]",
            isOpen ? "border-brand ring-2 ring-brand/30" : "animate-bounce"
          )}
          title="مشاهده ویدیو"
          aria-label="مشاهده ویدیو"
        >
          <Cat className="size-5 text-brand" />
        </button>
      </div>

      {/* پنجره پاپ‌آپ ویدیوی گربه */}
      {isOpen && (
        <div className="fixed bottom-20 start-5 z-50 w-72 sm:w-80 rounded-2xl border border-border/90 bg-card/95 shadow-2xl backdrop-blur-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-border/60">
            <span className="text-xs font-bold text-foreground">
              مود بعد از ساعت‌ها دیباگ
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={toggleMute}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                title={isMuted ? "وصل صدا" : "قطع صدا"}
              >
                {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-brand" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                title="بستن"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* کادر ویدیو با صدا */}
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-black aspect-square flex items-center justify-center">
            <video
              ref={videoRef}
              src="/cat.mp4"
              autoPlay
              loop
              playsInline
              className="size-full object-cover"
            />
          </div>

          <p className="text-[11px] text-muted-foreground text-center mt-2.5">
            لحظه فیکس شدن آخرین باگ و آرامش پس از آن
          </p>
        </div>
      )}
    </>
  );
}
