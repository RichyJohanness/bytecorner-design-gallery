import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";
import { SlideProvider } from "./editor/SlideContext";
import { EditableText as E } from "./editor/EditableText";
import { BrandLogoMark } from "./editor/LogoUpload";
import { BrandFooter } from "./feeds/FeedShell";

/**
 * Wide welcoming canvas — 3240 x 1080 (3:1).
 * Clean, premium, editorial. One refined statement, lots of breathing space.
 */
const WelcomeCanvas = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]">
      {/* Subtle mesh + glow */}
      <div className="absolute inset-0 bg-mesh opacity-20 mix-blend-soft-light" />
      <div className="absolute -right-[8%] -top-[20%] h-[80%] w-[45%] rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -bottom-[30%] -left-[10%] h-[80%] w-[45%] rounded-full bg-[#A7F3D0]/25 blur-3xl" />

      {/* Top bar */}
      <div className="absolute left-[3.5%] right-[3.5%] top-[5%] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogoMark size={48} rounded="rounded-xl" />
          <p className="font-display text-[20px] font-semibold leading-none text-[#1F2937]">
            ByteCorner<span className="opacity-50">.id</span>
          </p>
        </div>
        <span className="rounded-full bg-white/60 px-4 py-1.5 font-mono-code text-[10px] uppercase tracking-[0.35em] text-[#1F2937]/75 ring-1 ring-white/70 backdrop-blur-md">
          <E id="welcome.badge">Digital studio · Est. 2025</E>
        </span>
      </div>

      {/* Hero — single centered statement */}
      <div className="relative flex h-full w-full items-center justify-center px-[8%]">
        <div className="max-w-[78%] text-center">
          <E
            id="welcome.eyebrow"
            className="font-mono-code text-[12px] uppercase tracking-[0.5em] text-[#1F2937]/55"
          >
            Hello, internet
          </E>
          <h1 className="mt-7 font-display text-[112px] font-semibold leading-[0.92] tracking-tight text-[#1F2937]">
            <E id="welcome.h1a">We design</E>{" "}
            <E id="welcome.h1b" className="italic text-gradient">digital corners</E>
            <br />
            <E id="welcome.h1c">that feel like home.</E>
          </h1>
          <p className="mx-auto mt-8 max-w-[58%] text-[18px] leading-relaxed text-[#1F2937]/65">
            <E id="welcome.sub" multiline>
              Brand, websites & digital products — crafted with quiet confidence for founders who care about details.
            </E>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-[8%] left-[3.5%] right-[3.5%] flex items-end justify-between">
        <div>
          <E
            id="welcome.leftFoot"
            className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-[#1F2937]/55"
          >
            Jakarta · Remote · Worldwide
          </E>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-[#1F2937] px-6 py-3 font-display text-[14px] font-semibold text-white shadow-soft">
            <E id="welcome.cta1">Start a project →</E>
          </div>
          <div className="rounded-full bg-white/70 px-6 py-3 font-display text-[14px] font-semibold text-[#1F2937] ring-1 ring-white/70 backdrop-blur-md">
            <E id="welcome.cta2">hi@bytecorner.id</E>
          </div>
        </div>
      </div>

      {/* Footer band — branding always visible */}
      <div className="absolute bottom-[1.5%] left-[3.5%] right-[3.5%]">
        <BrandFooter id="welcome.footer" />
      </div>

      {/* Subtle 3-column crop guides */}
      <div className="pointer-events-none absolute inset-0 flex" data-export-hide>
        <div className="flex-1 border-r border-white/25" />
        <div className="flex-1 border-r border-white/25" />
        <div className="flex-1" />
      </div>
    </div>
  );
};

export const WelcomeWide = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const onDownload = async () => {
    if (!ref.current) return;
    setDownloading(true);
    const node = ref.current;
    const prevRadius = node.style.borderRadius;
    node.style.borderRadius = "0px";
    try {
      const rect = node.getBoundingClientRect();
      const targetW = 3240;
      const pixelRatio = targetW / rect.width;
      const dataUrl = await toPng(node, {
        pixelRatio,
        cacheBust: true,
        backgroundColor: "#ffffff",
        style: { borderRadius: "0px" },
        filter: (el) => {
          if (!(el instanceof HTMLElement)) return true;
          return el.dataset.exportHide === undefined;
        },
      });
      const link = document.createElement("a");
      link.download = `bytecorner-welcome-3240x1080.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Export failed", e);
    } finally {
      node.style.borderRadius = prevRadius;
      setDownloading(false);
    }
  };

  return (
    <SlideProvider>
      <div className="space-y-4">
        <div
          ref={ref}
          className="relative w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5"
          style={{ aspectRatio: "3 / 1" }}
        >
          <WelcomeCanvas />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-1">
          <div className="min-w-0">
            <p className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
              Wide Welcome Canvas · 3240 × 1080 px
            </p>
            <p className="text-[12px] text-[#6B7280]">
              One continuous composition · crop into 3 square IG posts after download.
            </p>
          </div>
          <button
            type="button"
            onClick={onDownload}
            disabled={downloading}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB] px-4 py-2 text-[12px] font-semibold text-[#1F2937] shadow-soft transition hover:opacity-90 disabled:opacity-60"
          >
            {downloading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
            Download HD (3240×1080)
          </button>
        </div>
      </div>
    </SlideProvider>
  );
};
