import { SlideCard } from "@/components/SlideCard";
import { DESIGNS } from "@/components/feeds/Feeds";
import { EXTRA_DESIGNS } from "@/components/feeds/FeedsExtra";
import { LogoUpload } from "@/components/editor/LogoUpload";
import { WelcomeWide } from "@/components/WelcomeWide";

const Index = () => {
  return (
    <main className="min-h-screen w-full">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FB7C5] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 shadow-soft">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4FB7C5]" />
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-foreground/70">
                  Instagram Design Showcase
                </span>
              </div>
              <h1 className="mt-5 font-display text-[44px] font-semibold leading-[1.0] text-foreground md:text-[64px]">
                Nine feeds.<br />
                One <span className="text-gradient italic">premium</span> brand system.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#6B7280]">
                A curated visual board of 9 Instagram-ready post designs for
                <span className="font-semibold text-foreground"> ByteCorner.id</span> —
                exploring FAQs, portfolios, case studies, coding tips, and soft-sell
                content in a single, consistent design language.
              </p>
            </div>

            <div className="glass shadow-glass rounded-2xl p-5">
              <p className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                Brand Palette
              </p>
              <div className="mt-3 flex gap-1.5">
                {["#EAE5C9", "#6CC6CB", "#4FB7C5", "#1F2937", "#F5F7F8", "#FFD6A5", "#A7F3D0"].map(
                  (c) => (
                    <div
                      key={c}
                      className="h-9 w-9 rounded-lg ring-1 ring-black/5 shadow-soft"
                      style={{ background: c }}
                      title={c}
                    />
                  ),
                )}
              </div>
              <p className="mt-3 font-mono-code text-[10px] text-foreground/60">
                linear-gradient(135deg, #EAE5C9 → #6CC6CB)
              </p>
            </div>
            <LogoUpload />
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-8 flex items-end justify-between border-t border-foreground/10 pt-8">
          <div>
            <p className="font-mono-code text-[11px] uppercase tracking-[0.3em] text-[#6B7280]">
              The Grid
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-foreground">
              9 designs · 27 slides · 4:5 ratio
            </h2>
            <p className="mt-1 text-[12px] text-[#6B7280]">
              Click any text to edit · hover image to replace · download each slide in HD.
            </p>
          </div>
          <span className="hidden font-mono-code text-[11px] text-[#6B7280] md:inline">
            09 × 03
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {DESIGNS.map((d, i) => (
            <SlideCard key={d.key} design={d} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Wide Welcome Canvas */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between border-t border-foreground/10 pt-8">
          <div>
            <p className="font-mono-code text-[11px] uppercase tracking-[0.3em] text-[#6B7280]">
              Bonus · Wide Canvas
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-foreground">
              The welcome banner · 3:1 (3240 × 1080)
            </h2>
            <p className="mt-1 text-[12px] text-[#6B7280]">
              One continuous opening composition for ByteCorner.id — crop into 3 IG posts after export.
            </p>
          </div>
        </div>
        <WelcomeWide />
      </section>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-center md:flex-row md:text-left">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.3em] text-[#6B7280]">
            ByteCorner.id — design preview · 2025
          </p>
          <p className="text-[12px] text-[#6B7280]">
            Built with care · Josefin Sans + Inter · 135° gradient system
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
