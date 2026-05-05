import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import { toPng } from "html-to-image";
import { SlideProvider } from "./editor/SlideContext";
import type { DesignSet } from "./feeds/Feeds";

interface Props {
  design: DesignSet;
  index: number;
}

export const SlideCard = ({ design, index }: Props) => {
  const [active, setActive] = useState(0);
  const slide = design.slides[active];

  return (
    <SlideProvider key={design.key}>
      <SlideCardInner design={design} index={index} active={active} setActive={setActive} key={slide.id} slideKey={slide.id}>
        {slide.render()}
      </SlideCardInner>
    </SlideProvider>
  );
};

const SlideCardInner = ({
  design,
  index,
  active,
  setActive,
  children,
  slideKey,
}: {
  design: DesignSet;
  index: number;
  active: number;
  setActive: (n: number) => void;
  children: React.ReactNode;
  slideKey: string;
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const onDownload = async () => {
    if (!frameRef.current) return;
    setDownloading(true);
    try {
      // IG portrait feed: 1080 x 1350. Frame is rendered at its CSS size; we
      // upscale via pixelRatio to reach HD output.
      const node = frameRef.current;
      const rect = node.getBoundingClientRect();
      const targetW = 1080;
      const pixelRatio = targetW / rect.width;
      const dataUrl = await toPng(node, {
        pixelRatio,
        cacheBust: true,
        backgroundColor: "#ffffff",
        filter: (el) => {
          if (!(el instanceof HTMLElement)) return true;
          return el.dataset.exportHide === undefined;
        },
      });
      const link = document.createElement("a");
      link.download = `bytecorner-${design.key}-slide-${active + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Export failed", e);
    } finally {
      setDownloading(false);
    }
  };

  const total = design.slides.length;
  return (
    <div className="group">
      {/* Frame (exported) */}
      <div
        ref={frameRef}
        className="relative aspect-feed w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="absolute inset-0 overflow-hidden">{children}</div>

        {/* Slide nav arrows — overlay, not exported */}
        <button
          type="button"
          data-export-hide
          onClick={() => setActive((active - 1 + total) % total)}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/85 p-1.5 text-[#1F2937] shadow-soft backdrop-blur-md transition hover:bg-white group-hover:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          data-export-hide
          onClick={() => setActive((active + 1) % total)}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/85 p-1.5 text-[#1F2937] shadow-soft backdrop-blur-md transition hover:bg-white group-hover:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Card meta + slide switcher + download */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono-code text-xs text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
          <span className="truncate text-sm font-medium text-foreground">{design.label}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Slide tabs */}
          <div className="flex items-center gap-1 rounded-full bg-foreground/5 p-1">
            {design.slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-5 w-5 rounded-full font-mono-code text-[10px] font-semibold transition ${
                  i === active
                    ? "bg-[#1F2937] text-white shadow-soft"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onDownload}
            disabled={downloading}
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB] px-3 py-1.5 text-[11px] font-semibold text-[#1F2937] shadow-soft transition hover:opacity-90 disabled:opacity-60"
            title="Download HD PNG"
          >
            {downloading ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Download className="h-3 w-3" />
            )}
            HD
          </button>
        </div>
      </div>
    </div>
  );
};