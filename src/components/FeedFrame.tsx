import { ReactNode } from "react";

interface FeedFrameProps {
  children: ReactNode;
  label: string;
  index: number;
}

export const FeedFrame = ({ children, label, index }: FeedFrameProps) => (
  <div className="group">
    <div className="relative aspect-feed w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1">
      <div className="absolute inset-0 overflow-hidden">{children}</div>
    </div>
    <div className="mt-4 flex items-center justify-between px-1">
      <div className="flex items-center gap-2">
        <span className="font-mono-code text-xs text-muted-foreground">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <span className="font-mono-code text-[10px] uppercase tracking-widest text-muted-foreground">
        1080×1350
      </span>
    </div>
  </div>
);
