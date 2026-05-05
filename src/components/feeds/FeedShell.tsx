import { ReactNode } from "react";
import { EditableText } from "@/components/editor/EditableText";
import { BrandLogoMark } from "@/components/editor/LogoUpload";

export const FeedShell = ({
  children,
  background = "bg-brand-gradient",
  light = false,
  footerId = "footer.brand",
}: {
  children: ReactNode;
  background?: string;
  light?: boolean;
  footerId?: string;
}) => (
  <div className={`relative h-full w-full ${background}`}>
    {/* subtle grain / mesh */}
    <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-soft-light" />
    <div className="relative flex h-full w-full flex-col p-[6%] pb-[4%]">
      <div className="min-h-0 flex-1">{children}</div>
      <BrandFooter light={light} id={footerId} />
    </div>
  </div>
);

export const BrandTag = ({ light = false }: { light?: boolean }) => (
  <div className={`flex items-center gap-2 ${light ? "text-white/90" : "text-foreground/80"}`}>
    <BrandLogoMark size={24} light={light} />
    <span className="font-display text-sm font-semibold tracking-tight">
      ByteCorner<span className="opacity-60">.id</span>
    </span>
  </div>
);

export const BrandFooter = ({ light = false, id = "footer.brand" }: { light?: boolean; id?: string }) => (
  <div
    className={`mt-3 flex shrink-0 items-center justify-between border-t pt-2.5 ${
      light ? "border-white/15 text-white/70" : "border-foreground/10 text-foreground/60"
    }`}
  >
    <div className="flex items-center gap-1.5">
      <BrandLogoMark size={16} light={light} rounded="rounded-[5px]" />
      <EditableText id={id} className="font-display text-[10px] font-semibold tracking-tight">
        ByteCorner.id
      </EditableText>
    </div>
    <EditableText id={`${id}.tag`} className="font-mono-code text-[9px] uppercase tracking-[0.2em] opacity-80">
      digital studio · jakarta
    </EditableText>
  </div>
);
