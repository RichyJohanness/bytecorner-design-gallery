import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";
import { SlideProvider } from "./editor/SlideContext";
import { EditableText as E } from "./editor/EditableText";
import { BrandLogoMark } from "./editor/LogoUpload";
import { BrandFooter } from "./feeds/FeedShell";

/**
 * Wide welcoming canvas — 3240 x 1080 (3:1).
 * Built to mirror the website hero banner style: same chip, same headline
 * structure with an italic gradient highlight, the same palette card,
 * and the same restrained editorial spacing.
 */
const WelcomeCanvas = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F5F7F8]">
      {/* Same radial mesh background as the website hero */}
      <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
      {/* Top hairline accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#4FB7C5] to-transparent" />

      {/* Disciplined column layout — header / hero / footer all contained */}
      <div className="relative flex h-full w-full flex-col px-[4%] py-[3.5%]">
        {/* Header row */}
        <div className="flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogoMark size={40} rounded="rounded-xl" />
            <p className="font-display text-[20px] font-semibold leading-none text-[#1F2937]">
              ByteCorner<span className="opacity-50">.id</span>
            </p>
          </div>
          <E
            id="welcome.metaRight"
            className="font-mono-code text-[12px] uppercase tracking-[0.3em] text-foreground/55"
          >
            welcome · banner · 3:1
          </E>
        </div>

        {/* Hero row — fills remaining space, two columns, centered vertically */}
        <div className="grid min-h-0 flex-1 grid-cols-[1.45fr_1fr] items-center gap-[4%] py-[2%]">
          {/* Left: chip + headline + sub + CTAs */}
          <div className="flex min-w-0 flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 shadow-soft">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4FB7C5]" />
              <E
                id="welcome.chip"
                className="font-mono-code text-[13px] uppercase tracking-[0.2em] text-foreground/70"
              >
                Welcome · Digital Studio
              </E>
            </div>

            <h1 className="mt-6 font-display text-[88px] font-semibold leading-[0.95] tracking-tight text-[#1F2937]">
              <E id="welcome.h1a">Hello,</E>{" "}
              <E id="welcome.h1b">we're</E>
              <br />
              <E id="welcome.h1c" className="italic text-gradient">ByteCorner.id</E>
            </h1>

            <p className="mt-6 max-w-[85%] text-[19px] leading-relaxed text-[#6B7280]">
              <E id="welcome.sub" multiline>
                A small studio building brand systems, websites, and digital products with quiet confidence — for founders who care about the details.
              </E>
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="rounded-full bg-[#1F2937] px-6 py-3 font-display text-[15px] font-semibold text-white shadow-soft">
                <E id="welcome.cta1">Start a project →</E>
              </div>
              <div className="rounded-full glass px-6 py-3 font-display text-[15px] font-semibold text-[#1F2937] shadow-soft">
                <E id="welcome.cta2">hi@bytecorner.id</E>
              </div>
            </div>
          </div>

          {/* Right: brand palette card */}
          <div className="flex min-w-0 justify-end">
            <div className="glass shadow-glass rounded-3xl p-6 w-full max-w-[600px]">
              <E
                id="welcome.paletteKicker"
                className="font-mono-code text-[12px] uppercase tracking-[0.3em] text-foreground/60"
              >
                Brand Palette
              </E>
              <div className="mt-3 flex flex-wrap gap-2">
                {["#EAE5C9", "#6CC6CB", "#4FB7C5", "#1F2937", "#F5F7F8", "#FFD6A5", "#A7F3D0"].map(
                  (c) => (
                    <div
                      key={c}
                      className="h-12 w-12 rounded-xl ring-1 ring-black/5 shadow-soft"
                      style={{ background: c }}
                      title={c}
                    />
                  ),
                )}
              </div>
              <p className="mt-3 font-mono-code text-[11px] text-foreground/60">
                <E id="welcome.gradientLabel">linear-gradient(135deg, #EAE5C9 → #6CC6CB)</E>
              </p>
              <div className="mt-3 h-2.5 w-full rounded-full bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB]" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/60 p-3 ring-1 ring-black/5">
                  <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-foreground/55">Display</p>
                  <p className="mt-1 font-display text-[18px] font-semibold text-[#1F2937]">Josefin Sans</p>
                </div>
                <div className="rounded-2xl bg-white/60 p-3 ring-1 ring-black/5">
                  <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-foreground/55">Body</p>
                  <p className="mt-1 text-[14px] text-[#1F2937]">Inter · 15px</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer row — in flow, never overlaps */}
        <div className="shrink-0">
          <BrandFooter id="welcome.footer" />
        </div>
      </div>

      {/* Subtle 3-column crop guides (not exported) */}
      <div className="pointer-events-none absolute inset-0 flex" data-export-hide>
        <div className="flex-1 border-r border-[#1F2937]/10" />
        <div className="flex-1 border-r border-[#1F2937]/10" />
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
