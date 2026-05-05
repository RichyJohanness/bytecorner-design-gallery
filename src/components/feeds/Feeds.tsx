import { BrandTag, FeedShell } from "./FeedShell";

/* ============ 1. FAQ ============ */
export const Feed01_FAQ = () => (
  <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]">
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <BrandTag />
        <span className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">
          #FAQ · 01
        </span>
      </div>
      <div className="mt-6">
        <p className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          Frequently Asked
        </p>
        <h2 className="mt-2 font-display text-[28px] leading-[1.05] text-foreground">
          Pertanyaan yang sering ditanyakan klien kami.
        </h2>
      </div>
      <div className="mt-6 flex-1 space-y-3">
        {[
          { q: "Berapa lama proses pembuatan website?", a: "Rata-rata 2–4 minggu tergantung skala." },
          { q: "Apakah include desain UI/UX?", a: "Ya, semua paket sudah termasuk desain custom." },
          { q: "Bisa request revisi berapa kali?", a: "Unlimited revisi sampai approve." },
        ].map((f, i) => (
          <div key={i} className="glass rounded-2xl p-3.5 shadow-soft">
            <div className="flex items-start gap-2">
              <span className="font-mono-code text-[10px] font-semibold text-[#4FB7C5]">
                Q{i + 1}
              </span>
              <p className="text-[12px] font-semibold leading-snug text-foreground">{f.q}</p>
            </div>
            <p className="mt-1.5 pl-6 text-[11px] leading-snug text-foreground/70">{f.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] text-foreground/60">
        <span>Swipe untuk lihat lebih →</span>
        <span className="font-mono-code">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 2. Portfolio Showcase ============ */
export const Feed02_Portfolio = () => (
  <FeedShell background="bg-[#1F2937]">
    <div className="flex h-full flex-col text-white">
      <div className="flex items-center justify-between">
        <BrandTag light />
        <span className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">
          Case · 02
        </span>
      </div>
      <p className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6CC6CB]">
        Latest Work
      </p>
      <h2 className="mt-2 font-display text-[26px] leading-[1.05]">
        Lumen Studio — Brand Website Redesign.
      </h2>

      <div className="relative mt-5 flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#EAE5C9]/20 to-[#6CC6CB]/30 p-3 ring-1 ring-white/10">
        {/* mock browser */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FFD6A5]" />
          <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />
          <span className="h-2 w-2 rounded-full bg-[#6CC6CB]" />
          <div className="ml-2 h-3 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="mt-3 overflow-hidden rounded-xl bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB] p-4">
          <p className="font-display text-xs font-semibold text-[#1F2937]/70">LUMEN</p>
          <p className="mt-1 font-display text-[18px] leading-tight text-[#1F2937]">
            Light up your<br />digital presence.
          </p>
          <div className="mt-3 flex gap-2">
            <div className="h-12 flex-1 rounded-lg bg-white/60" />
            <div className="h-12 flex-1 rounded-lg bg-white/40" />
            <div className="h-12 flex-1 rounded-lg bg-white/30" />
          </div>
          <div className="mt-2 inline-flex rounded-full bg-[#1F2937] px-3 py-1 text-[9px] font-semibold text-white">
            Get Started →
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-3 text-[10px] text-white/60">
          <span><b className="text-white">+184%</b> traffic</span>
          <span><b className="text-white">3.2s</b> load</span>
        </div>
        <span className="font-mono-code text-[10px] text-white/50">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 3. Article / Insight ============ */
export const Feed03_Insight = () => (
  <FeedShell background="bg-[#F5F7F8]">
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <BrandTag />
        <span className="rounded-full bg-[#1F2937] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-white">
          Insight · 03
        </span>
      </div>

      <div className="mt-6 flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.25em] text-[#6B7280]">
        <span className="h-px w-6 bg-[#6CC6CB]" /> 5 min read
      </div>

      <h2 className="mt-3 font-display text-[30px] leading-[1.0] text-foreground">
        Why slow websites are quietly killing your conversion.
      </h2>

      <p className="mt-4 text-[12px] leading-relaxed text-[#6B7280]">
        Setiap detik tambahan dalam load time bisa menurunkan konversi hingga 7%.
        Kecepatan bukan lagi pilihan — ia adalah identitas brand kamu.
      </p>

      <div className="mt-5 grid flex-1 grid-cols-3 gap-2.5">
        {[
          { v: "53%", l: "users leave >3s" },
          { v: "1.8x", l: "more sales" },
          { v: "2.4s", l: "ideal LCP" },
        ].map((s, i) => (
          <div key={i} className="glass flex flex-col justify-center rounded-2xl p-3 shadow-soft">
            <p className="font-display text-[22px] leading-none text-gradient">{s.v}</p>
            <p className="mt-1.5 text-[10px] leading-tight text-[#6B7280]">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#1F2937]/10 pt-3">
        <p className="text-[10px] text-[#6B7280]">By <b className="text-foreground">ByteCorner Team</b></p>
        <span className="font-mono-code text-[10px] text-[#6B7280]">→ swipe</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 4. Website Tips ============ */
export const Feed04_WebsiteTips = () => (
  <FeedShell background="bg-gradient-to-br from-[#6CC6CB] via-[#4FB7C5] to-[#1F2937]">
    <div className="flex h-full flex-col text-white">
      <div className="flex items-center justify-between">
        <BrandTag light />
        <span className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">
          Tips · 04
        </span>
      </div>

      <p className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-white/70">
        5 Website Tips
      </p>
      <h2 className="mt-2 font-display text-[28px] leading-[1.0]">
        Make your website feel premium in 5 small moves.
      </h2>

      <div className="mt-5 flex-1 space-y-2.5">
        {[
          "Gunakan max 2 typeface — jangan lebih.",
          "Konsisten pakai 1 sistem warna utama.",
          "Beri ruang putih, jangan takut kosong.",
          "Animasi halus, bukan animasi ramai.",
          "Tulis copy yang jujur, bukan jargon.",
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 p-2.5 backdrop-blur-md ring-1 ring-white/15">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[11px] font-bold text-[#4FB7C5]">
              {i + 1}
            </span>
            <p className="text-[12px] font-medium leading-snug">{t}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-[10px] text-white/70">
        <span>Save this post 🔖</span>
        <span className="font-mono-code">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 5. Coding Tips ============ */
export const Feed05_CodingTips = () => (
  <FeedShell background="bg-[#0f1620]">
    <div className="flex h-full flex-col text-white">
      <div className="flex items-center justify-between">
        <BrandTag light />
        <span className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">
          Dev · 05
        </span>
      </div>

      <h2 className="mt-5 font-display text-[26px] leading-[1.05]">
        Stop writing <span className="text-gradient">if-else</span> hell.
      </h2>
      <p className="mt-1.5 text-[11px] text-white/60">A cleaner way to map state to UI.</p>

      <div className="mt-4 flex-1 overflow-hidden rounded-2xl bg-[#0a1018] p-4 ring-1 ring-white/10 shadow-glass">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FFD6A5]" />
          <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />
          <span className="h-2 w-2 rounded-full bg-[#6CC6CB]" />
          <span className="ml-2 font-mono-code text-[9px] text-white/40">status.ts</span>
        </div>
        <pre className="font-mono-code text-[10.5px] leading-[1.55] text-white/80">
{`const variants = {
  idle:    "bg-muted",
  loading: "bg-aqua animate-pulse",
  success: "bg-mint text-ink",
  error:   "bg-red-500 text-white",
} as const;

export const Pill = ({ status }) => (
  `}<span className="text-[#A7F3D0]">{`<span className={variants[status]}>`}</span>{`
    {status}
  `}<span className="text-[#A7F3D0]">{`</span>`}</span>{`
);`}
        </pre>
      </div>

      <div className="mt-4 flex items-center justify-between text-[10px] text-white/50">
        <span className="rounded-full bg-white/10 px-2 py-1 font-mono-code">#typescript</span>
        <span className="font-mono-code">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 6. Digital Agency Branding ============ */
export const Feed06_Branding = () => (
  <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]">
    <div className="relative flex h-full flex-col">
      <BrandTag />

      {/* Big statement */}
      <div className="mt-auto">
        <p className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-foreground/60">
          We are ByteCorner
        </p>
        <h2 className="mt-3 font-display text-[44px] font-semibold leading-[0.95] text-foreground">
          We design<br />
          <span className="italic text-gradient">digital corners</span><br />
          worth living in.
        </h2>
        <p className="mt-4 max-w-[80%] text-[12px] leading-relaxed text-foreground/70">
          Brand, web & product studio yang membantu bisnis tumbuh
          lewat desain yang jujur dan engineering yang rapi.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex -space-x-2">
          {["#1F2937", "#4FB7C5", "#FFD6A5", "#A7F3D0"].map((c, i) => (
            <div key={i} className="h-7 w-7 rounded-full ring-2 ring-white" style={{ background: c }} />
          ))}
        </div>
        <div className="rounded-full bg-[#1F2937] px-4 py-2 text-[11px] font-semibold text-white">
          Let's build →
        </div>
      </div>
    </div>
  </FeedShell>
);

/* ============ 7. Case Study ============ */
export const Feed07_CaseStudy = () => (
  <FeedShell background="bg-white">
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <BrandTag />
        <span className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">
          Case Study · 07
        </span>
      </div>

      <p className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">
        Client · Nordvest Coffee
      </p>
      <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
        From local roastery to a +212% online order growth.
      </h2>

      {/* mock screenshot */}
      <div className="relative mt-4 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-soft">
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1F2937] to-[#4FB7C5] p-3">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          </div>
          <div className="mt-2 flex gap-2">
            <div className="flex-1 rounded-lg bg-white/90 p-2">
              <div className="h-1.5 w-10 rounded bg-[#1F2937]/70" />
              <div className="mt-1 h-1 w-16 rounded bg-[#6B7280]/40" />
              <div className="mt-2 h-8 rounded bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" />
            </div>
            <div className="flex-1 rounded-lg bg-white/90 p-2">
              <div className="h-1.5 w-12 rounded bg-[#1F2937]/70" />
              <div className="mt-1 h-1 w-10 rounded bg-[#6B7280]/40" />
              <div className="mt-2 h-8 rounded bg-gradient-to-br from-[#FFD6A5] to-[#6CC6CB]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
        {[
          { v: "+212%", l: "Orders" },
          { v: "−38%", l: "Bounce" },
          { v: "4.9★", l: "Rating" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl border border-black/5 bg-[#F5F7F8] p-2.5">
            <p className="font-display text-[18px] leading-none text-foreground">{s.v}</p>
            <p className="mt-1 text-[10px] text-[#6B7280]">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-3 text-[10px] text-[#6B7280]">
        <span>Read full case study →</span>
        <span className="font-mono-code">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 8. Quick Guide ============ */
export const Feed08_QuickGuide = () => (
  <FeedShell background="bg-gradient-to-br from-[#F5F7F8] via-white to-[#EAE5C9]">
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <BrandTag />
        <span className="rounded-full bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-[#1F2937]">
          Quick Guide · 08
        </span>
      </div>

      <p className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
        In 4 steps
      </p>
      <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
        How we launch a website in under 14 days.
      </h2>

      <div className="relative mt-5 flex-1">
        <div className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-[#6CC6CB] to-transparent" />
        {[
          { t: "Discovery", d: "Workshop singkat: goal, audience, brand voice." },
          { t: "Design", d: "Wireframe → high-fidelity UI dengan revisi cepat." },
          { t: "Build", d: "Frontend modern, CMS ringan, performa A+." },
          { t: "Launch", d: "QA, SEO basic, dan handover dokumentasi." },
        ].map((s, i) => (
          <div key={i} className="relative mb-2.5 flex gap-3 rounded-xl bg-white/70 p-2.5 backdrop-blur-md ring-1 ring-black/5">
            <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-aqua text-[11px] font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="font-display text-[13px] font-semibold leading-tight text-foreground">{s.t}</p>
              <p className="mt-0.5 text-[10.5px] leading-snug text-[#6B7280]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between text-[10px] text-[#6B7280]">
        <span>Save this checklist 🔖</span>
        <span className="font-mono-code">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);

/* ============ 9. Soft Selling Service ============ */
export const Feed09_Soft = () => (
  <FeedShell background="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#4FB7C5]">
    <div className="flex h-full flex-col text-white">
      <div className="flex items-center justify-between">
        <BrandTag light />
        <span className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">
          09 · Hello
        </span>
      </div>

      <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#A7F3D0]" />
        <span className="text-[10px] font-medium">Open for 3 projects · Q2</span>
      </div>

      <h2 className="mt-4 font-display text-[30px] leading-[1.0]">
        Punya ide?<br />
        <span className="text-gradient">Mari kita rapikan.</span>
      </h2>
      <p className="mt-3 max-w-[85%] text-[12px] leading-relaxed text-white/75">
        Kami membantu founder, UMKM, dan brand membangun website yang
        bukan cuma terlihat bagus — tapi benar-benar bekerja.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {[
          { t: "Web Design", d: "Landing & company site" },
          { t: "Webflow Dev", d: "CMS + animation" },
          { t: "UI/UX", d: "Product & dashboard" },
          { t: "Branding", d: "Identity sistem" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl bg-white/8 p-2.5 ring-1 ring-white/10 backdrop-blur-md">
            <p className="font-display text-[13px] font-semibold">{s.t}</p>
            <p className="mt-0.5 text-[10px] text-white/60">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#1F2937]">
            DM "HELLO"
          </div>
          <span className="text-[10px] text-white/60">we reply &lt; 24h</span>
        </div>
        <span className="font-mono-code text-[10px] text-white/50">bytecorner.id</span>
      </div>
    </div>
  </FeedShell>
);
