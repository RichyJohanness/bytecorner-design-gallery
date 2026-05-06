import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Loader2, Send, Layers } from "lucide-react";
import { toPng, toJpeg } from "html-to-image";
import { SlideProvider } from "./editor/SlideContext";
import type { DesignSet } from "./feeds/Feeds";
import { usePosts } from "./profile/usePosts";
import { toast } from "@/hooks/use-toast";

interface Props {
  design: DesignSet;
  index: number;
}

export const SlideCard = ({ design, index }: Props) => {
  const [active, setActive] = useState(0);
  const slidesRefs = useRef<Record<number, HTMLDivElement | null>>({});

  return (
    <SlideProvider key={design.key}>
      <SlideCardInner
        design={design}
        index={index}
        active={active}
        setActive={setActive}
        slidesRefs={slidesRefs}
      />
    </SlideProvider>
  );
};

const captureNode = async (node: HTMLDivElement, targetW = 1080) => {
  const prevRadius = node.style.borderRadius;
  node.style.borderRadius = "0px";
  try {
    const rect = node.getBoundingClientRect();
    const pixelRatio = targetW / rect.width;
    return await toPng(node, {
      pixelRatio,
      cacheBust: true,
      backgroundColor: "#ffffff",
      style: { borderRadius: "0px" },
      filter: (el) => {
        if (!(el instanceof HTMLElement)) return true;
        return el.dataset.exportHide === undefined;
      },
    });
  } finally {
    node.style.borderRadius = prevRadius;
  }
};

const SlideCardInner = ({
  design,
  index,
  active,
  setActive,
  slidesRefs,
}: {
  design: DesignSet;
  index: number;
  active: number;
  setActive: (n: number) => void;
  slidesRefs: React.MutableRefObject<Record<number, HTMLDivElement | null>>;
}) => {
  const [downloading, setDownloading] = useState(false);
  const [posting, setPosting] = useState<"none" | "single" | "carousel">("none");
  const { addPost } = usePosts();

  const onDownload = async () => {
    const node = slidesRefs.current[active];
    if (!node) return;
    setDownloading(true);
    try {
      const dataUrl = await captureNode(node);
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

  const captureSlide = async (i: number) => {
    const node = slidesRefs.current[i];
    if (!node) throw new Error("Slide not ready");
    // Posted thumbnails: smaller JPEG to keep localStorage small (avoid quota / silent cap)
    const prevRadius = node.style.borderRadius;
    node.style.borderRadius = "0px";
    try {
      const rect = node.getBoundingClientRect();
      const targetW = 540; // 4:5 → 540x675, plenty for grid + viewer, ~10x smaller than 1080
      const pixelRatio = targetW / rect.width;
      return await toJpeg(node, {
        pixelRatio,
        cacheBust: true,
        quality: 0.82,
        backgroundColor: "#ffffff",
        style: { borderRadius: "0px" },
        filter: (el) => {
          if (!(el instanceof HTMLElement)) return true;
          return el.dataset.exportHide === undefined;
        },
      });
    } finally {
      node.style.borderRadius = prevRadius;
    }
  };

  const onPostSingle = async () => {
    setPosting("single");
    try {
      const img = await captureSlide(active);
      addPost({
        designKey: design.key,
        designLabel: design.label,
        images: [img],
      });
      toast({ title: "Posted to profile", description: `${design.label} · slide ${active + 1}` });
    } catch (e) {
      console.error(e);
    } finally {
      setPosting("none");
    }
  };

  const onPostCarousel = async () => {
    setPosting("carousel");
    try {
      const imgs: string[] = [];
      for (let i = 0; i < design.slides.length; i++) {
        imgs.push(await captureSlide(i));
      }
      addPost({
        designKey: design.key,
        designLabel: design.label,
        images: imgs,
      });
      toast({ title: "Carousel posted", description: `${design.label} · ${imgs.length} slides` });
    } catch (e) {
      console.error(e);
    } finally {
      setPosting("none");
    }
  };

  const total = design.slides.length;
  return (
    <div className="group">
      {/* Frame stack — render every slide; only active is visible. All are mounted so they can be captured. */}
      <div className="relative aspect-feed w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1">
        {design.slides.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => (slidesRefs.current[i] = el)}
            className="absolute inset-0 overflow-hidden"
            style={{
              opacity: i === active ? 1 : 0,
              pointerEvents: i === active ? "auto" : "none",
              zIndex: i === active ? 1 : 0,
            }}
            aria-hidden={i !== active}
          >
            {s.render()}
          </div>
        ))}

        {/* Slide nav arrows */}
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

      {/* Card meta */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono-code text-xs text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
          <span className="truncate text-sm font-medium text-foreground">{design.label}</span>
        </div>

        <div className="flex items-center gap-2">
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
            {downloading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Download className="h-3 w-3" />}
            HD
          </button>
        </div>
      </div>

      {/* Post actions row */}
      <div className="mt-2 flex items-center gap-2 px-1">
        <button
          type="button"
          onClick={onPostSingle}
          disabled={posting !== "none"}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1F2937] px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft transition hover:opacity-90 disabled:opacity-60"
          title="Post current slide as single"
        >
          {posting === "single" ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
          Post slide {active + 1}
        </button>
        <button
          type="button"
          onClick={onPostCarousel}
          disabled={posting !== "none"}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-[#1F2937] ring-1 ring-foreground/10 shadow-soft transition hover:bg-white disabled:opacity-60"
          title="Post all 3 slides as carousel"
        >
          {posting === "carousel" ? <Loader2 className="h-3 w-3 animate-spin" /> : <Layers className="h-3 w-3" />}
          Post carousel
        </button>
      </div>
    </div>
  );
};
