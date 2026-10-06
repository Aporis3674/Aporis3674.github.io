import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/animations/border-beam";
import { Gamepad2 } from "lucide-react";

interface GameBanner {
  id: string;
  titleFa: string;
  titleEn: string;
  banner: string;
  featured?: boolean;
}

export function FavoriteGames() {
  const games: GameBanner[] = [
    {
      id: "terraria",
      titleFa: "تراریا",
      titleEn: "Terraria",
      banner: "/games/terraria.jpg",
      featured: true,
    },
    {
      id: "minecraft",
      titleFa: "ماینکرفت",
      titleEn: "Minecraft",
      banner: "/games/minecraft.jpg",
    },
  ];

  return (
    <section id="games" className="py-16 px-4 max-w-5xl mx-auto">
      {/* هدر بخش */}
      <div className="flex flex-col items-center text-center mb-10">
        <Badge variant="outline" className="mb-3 text-brand border-brand/30 gap-1.5">
          <Gamepad2 className="size-3.5" />
          <span>بازی‌های ویدیویی</span>
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-2">
          بازی‌های موردعلاقه
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          بنر بازی‌های موردعلاقه من
        </p>
      </div>

      <div className="space-y-6">
        {/* ۱. بنر ویژه تراریا با حاشیه نورانی VibeFarsi (BorderBeam) */}
        <BorderBeam
          duration={5}
          color="var(--brand)"
          className="overflow-hidden bg-card rounded-2xl"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[2.1/1] overflow-hidden group">
            <img
              src={games[0].banner}
              alt={games[0].titleFa}
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* گرادیانت تیره ملایم */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

            {/* برچسب نام بازی روی بنر */}
            <div className="absolute bottom-4 sm:bottom-6 start-4 sm:start-6 flex items-center gap-2.5">
              <span className="text-lg sm:text-2xl font-black text-white drop-shadow-lg">
                {games[0].titleFa}
              </span>
              <span
                className="text-xs sm:text-sm font-mono text-brand font-semibold px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur border border-brand/30"
                dir="ltr"
              >
                {games[0].titleEn}
              </span>
            </div>
          </div>
        </BorderBeam>

        {/* ۲. بنر ماینکرفت */}
        {games.slice(1).map((game) => (
          <div
            key={game.id}
            className="relative rounded-2xl overflow-hidden border border-border bg-card group hover:border-brand/50 transition-all duration-300 shadow-xl"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[2.1/1] overflow-hidden">
              <img
                src={game.banner}
                alt={game.titleFa}
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 sm:bottom-6 start-4 sm:start-6 flex items-center gap-2.5">
                <span className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                  {game.titleFa}
                </span>
                <span
                  className="text-xs sm:text-sm font-mono text-white/90 px-2.5 py-0.5 rounded bg-black/75 backdrop-blur border border-white/10"
                  dir="ltr"
                >
                  {game.titleEn}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
