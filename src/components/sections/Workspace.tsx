import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal as TerminalIcon, Laptop } from "lucide-react";

export function Workspace() {
  const tools = [
    {
      label: "سیستم‌عامل",
      name: "Arch Linux",
      icon: "/icons/arch.png",
      detail: "توزیع مستقل و سبک لینوکس",
    },
    {
      label: "ویرایشگر کد",
      name: "VS Code",
      icon: "/icons/vscode.png",
      detail: "Visual Studio Code",
    },
    {
      label: "ترمینال و شل",
      name: "Zsh",
      customIcon: <TerminalIcon className="size-8 text-brand" />,
      detail: "Z Shell پیشرفته",
    },
  ];

  return (
    <section id="workspace" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <Badge variant="outline" className="mb-2.5 text-brand border-brand/30 gap-1.5">
          <Laptop className="size-3.5" />
          <span>محیط کاربری</span>
        </Badge>
        <h2 className="text-xl sm:text-3xl font-black text-foreground">
          ابزارها و سیستم کاری
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tools.map((item, idx) => (
          <Card
            key={idx}
            className="p-5 flex items-center gap-4 bg-card/80 hover:border-brand/40 transition-colors"
          >
            <div className="size-12 rounded-xl bg-muted/60 border border-border/80 flex items-center justify-center shrink-0 p-2">
              {item.icon ? (
                <img src={item.icon} alt={item.name} className="size-8 object-contain" />
              ) : (
                item.customIcon
              )}
            </div>
            <div>
              <span className="text-xs text-muted-foreground block font-medium">
                {item.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-foreground font-mono" dir="ltr">
                {item.name}
              </span>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {item.detail}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
