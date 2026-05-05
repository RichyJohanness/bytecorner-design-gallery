import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";
import { SlideProvider } from "./editor/SlideContext";
import { EditableText as E } from "./editor/EditableText";
import { BrandLogoMark } from "./editor/LogoUpload";
import { BrandFooter } from "./feeds/FeedShell";

/**
 * Wide welcoming canvas — 3240 x 1080 (3:1).
 * Single connected composition meant to be cropped into 3 IG square posts later.
 */
const WelcomeCanvas = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]">
      {/* Soft mesh overlay */}
      <div className="absolute inset-0 bg-mesh opacity-25 mix-blend-soft-light" />
      {/* Decorative glow blobs */}
      <div className="absolute -left-[5%] top-[15%] h-[55%] w-[28%] rounded-full bg-[#A7F3D0]/40 blur-3xl" />
      <div className="absolute right-[5%] top-[-10%] h-[60%] w-[30%] rounded-full bg-[#FFD6A5]/30 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[40%] h-[55%] w-[35%] rounded-full bg-[#4FB7C5]/25 blur-3xl" />

      {/* 3-column visual rhythm — guides for IG crop */}
      <div className="absolute inset-0 flex pointer-events-none" data-export-hide>
        <div className="flex-1 border-r border-white/30" />
        <div className="flex-1 border-r border-white/30" />
        <div className="flex-1" />
      </div>

      {/* Content layout — 3 zones flowing as one */}
      <div className="relative flex h-full w-full p-[3.5%]">
        {/* LEFT — Brand mark + intro */}
        <div className="flex w-1/3 flex-col justify-between pr-[3%]">
          <div className="flex items-center gap-3">
            <BrandLogoMark size={56} rounded="rounded-2xl" />
            <div>
              <p className="font-display text-[22px] font-semibold leading-none text-[#1F2937]">
                ByteCorner<span className="opacity-60">.id</span>
              </p>
              <E
                id="welcome.kicker"
                className="mt-1.5 block font-mono-code text-[11px] uppercase tracking-[0.3em] text-[#1F2937]/60"
              >
                Digital Studio · Est. 2025
              </E>
            </div>
          </div>

          <div>
            <E
              id="welcome.eyebrow"
              className="font-mono-code text-[11px] uppercase tracking-[0.4em] text-[#4FB7C5]"
            >
              Hello, Internet —
            </E>
            <h1 className="mt-3 font-display text-[64px] font-semibold leading-[0.95] text-[#1F2937]">
              <E id="welcome.h1a">We craft</E>
              <br />
              <E id="welcome.h1b" className="italic text-gradient">
                digital corners
              </E>
              <br />
              <E id="welcome.h1c">that feel like home.</E>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-[#1F2937]/40" />
            <E
              id="welcome.leftFoot"
              className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#1F2937]/55"
            >
              swipe → meet the studio
            </E>
          </div>
        </div>

        {/* MIDDLE — Hero statement + glass card */}
        <div className="flex w-1/3 flex-col items-center justify-center px-[2%] text-center">
          <div className="glass shadow-glass w-full rounded-[28px] p-7">
            <E
              id="welcome.midKicker"
              className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-[#4FB7C5]"
            >
              Welcome to ByteCorner
            </E>
            <p className="mt-4 font-display text-[44px] font-semibold leading-[1.0] text-[#1F2937]">
              <E id="welcome.midTitle">A small studio with a big appetite for clean design.</E>
            </p>
            <p className="mt-5 text-[14px] leading-relaxed text-[#1F2937]/70">
              <E id="welcome.midDesc" multiline>
                We build websites, brand systems & digital products for founders who care about details — fast, premium, and quietly confident.
              </E>
            </p>

            <div className="mt-6 flex items-center justify-center gap-2">
              {["websites", "branding", "ui/ux", "no-code"].map((t, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/60 px-3 py-1 font-mono-code text-[10px] uppercase tracking-widest text-[#1F2937]/70 ring-1 ring-white/70"
                >
                  <E id={`welcome.tag${i}`}>{t}</E>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — CTA + service list */}
        <div className="flex w-1/3 flex-col justify-between pl-[3%]">
          <div className="flex items-center justify-end gap-2">
            <span className="rounded-full bg-[#1F2937] px-3 py-1.5 font-mono-code text-[10px] uppercase tracking-widest text-white">
              <E id="welcome.badge">Now Open · 2025</E>
            </span>
          </div>

          <div className="space-y-3">
            <E
              id="welcome.rightKicker"
              className="font-mono-code text-[11px] uppercase tracking-[0.4em] text-[#4FB7C5]"
            >
              What we do
            </E>
            {[
              { n: "01", t: "Brand Identity", d: "logo, system, guidelines" },
              { n: "02", t: "Website Design", d: "landing, marketing, e-comm" },
              { n: "03", t: "Digital Products", d: "ui/ux, web app, dashboards" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl bg-white/55 p-3.5 ring-1 ring-white/60 backdrop-blur-md"
              >
                <span className="font-mono-code text-[11px] font-semibold text-[#4FB7C5]">
                  <E id={`welcome.sn${i}`}>{s.n}</E>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[18px] font-semibold leading-none text-[#1F2937]">
                    <E id={`welcome.st${i}`}>{s.t}</E>
                  </p>
                  <p className="mt-1 text-[11px] text-[#1F2937]/65">
                    <E id={`welcome.sd${i}`}>{s.d}</E>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-end gap-3">
              <div className="rounded-full bg-[#1F2937] px-5 py-3 font-display text-[14px] font-semibold text-white shadow-soft">
                <E id="welcome.cta1">Start a project →</E>
              </div>
              <div className="rounded-full bg-white/70 px-5 py-3 font-display text-[14px] font-semibold text-[#1F2937] ring-1 ring-white/70 backdrop-blur-md">
                <E id="welcome.cta2">hi@bytecorner.id</E>
              </div>
            </div>
            <p className="mt-3 text-right font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#1F2937]/55">
              <E id="welcome.rightFoot">jakarta · remote · worldwide</E>
            </p>
          </div>
        </div>
      </div>

      {/* Footer band — branding always visible */}
      <div className="absolute bottom-[1.5%] left-[3.5%] right-[3.5%]">
        <BrandFooter id="welcome.footer" />
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
