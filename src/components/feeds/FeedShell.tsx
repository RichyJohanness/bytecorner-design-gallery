import { ReactNode } from "react";

export const FeedShell = ({
  children,
  background = "bg-brand-gradient",
}: {
  children: ReactNode;
  background?: string;
}) => (
  <div className={`relative h-full w-full ${background}`}>
    {/* subtle grain / mesh */}
    <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-soft-light" />
    <div className="relative h-full w-full p-[6%]">{children}</div>
  </div>
);

export const BrandTag = ({ light = false }: { light?: boolean }) => (
  <div className={`flex items-center gap-2 ${light ? "text-white/90" : "text-foreground/80"}`}>
    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-aqua text-[10px] font-bold text-white shadow-soft">
      B
    </div>
    <span className="font-display text-sm font-semibold tracking-tight">
      ByteCorner<span className="opacity-60">.id</span>
    </span>
  </div>
);
