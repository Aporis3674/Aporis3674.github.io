import * as React from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { IntroTerminal } from "@/components/sections/IntroTerminal";
import { LearningProgress } from "@/components/sections/LearningProgress";
import { RoadmapDiagram } from "@/components/sections/RoadmapDiagram";
import { Workspace } from "@/components/sections/Workspace";
import { ContactSection } from "@/components/sections/ContactSection";
import { FavoriteGames } from "@/components/sections/FavoriteGames";
import { Repositories } from "@/components/sections/Repositories";
import { Footer } from "@/components/sections/Footer";
import { RetroGridBackground } from "@/components/backgrounds/retro-grid";

export function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-brand selection:text-brand-foreground">
      {/* هدر بالایی */}
      <Header />

      {/* محتوای اصلی صفحه */}
      <main className="flex-1 flex flex-col relative z-10">
        <Hero />
        <IntroTerminal />
        <LearningProgress />
        <RoadmapDiagram />
        <Workspace />
        <ContactSection />
        <FavoriteGames />
        <Repositories />
      </main>

      {/* پس‌زمینه شبکه‌ای پرسپکتیو در انتهای صفحه برای استایل مدرن VibeFarsi */}
      <div className="relative w-full h-44 overflow-hidden pointer-events-none opacity-40">
        <RetroGridBackground />
      </div>

      {/* فوتر */}
      <Footer />
    </div>
  );
}

export default App;
