import { BrandTag, FeedShell } from "./FeedShell";
import { EditableText as E } from "@/components/editor/EditableText";
import { EditableImage } from "@/components/editor/EditableImage";
import type { DesignSet } from "./Feeds";

/* =====================================================================
   D10 — Newest Article (editorial / magazine)
   ===================================================================== */
const ArticleMock = () => (
  <div className="h-full w-full bg-gradient-to-br from-[#1F2937] to-[#4FB7C5] p-4">
    <p className="font-mono-code text-[9px] uppercase tracking-widest text-white/70">issue · 014</p>
    <p className="mt-3 font-display text-[20px] leading-tight text-white">The future of<br />slow design.</p>
    <div className="mt-3 flex gap-1">
      <div className="h-1 w-10 rounded-full bg-[#EAE5C9]" />
      <div className="h-1 w-3 rounded-full bg-white/40" />
    </div>
  </div>
);
const D10: DesignSet = {
  key: "article",
  label: "Newest Article",
  accent: "#1F2937",
  slides: [
    {
      id: "art-1",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d10s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <span className="rounded-full bg-[#1F2937] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-white">
                <E id="d10s1.tag">Journal · 014</E>
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
              <span className="h-px w-8 bg-[#6CC6CB]" /> <E id="d10s1.kicker">Newest article</E>
            </div>
            <h2 className="mt-3 font-display text-[34px] font-semibold leading-[0.98] text-foreground">
              <E id="d10s1.title" multiline>{`The quiet power\nof slow design.`}</E>
            </h2>
            <p className="mt-4 max-w-[88%] text-[12.5px] leading-relaxed text-[#6B7280]">
              <E id="d10s1.desc">Kenapa brand premium justru memilih untuk tidak terburu-buru — dan apa yang bisa kita pelajari dari mereka.</E>
            </p>
            <div className="mt-5 flex-1 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <EditableImage id="d10s1.img" fallback={<ArticleMock />} rounded="rounded-2xl" className="h-full w-full" />
            </div>
            <div className="mt-3 flex items-center justify-between text-[10.5px] text-[#6B7280]">
              <E id="d10s1.author">By ByteCorner Editorial</E>
              <E id="d10s1.read">7 min read</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "art-2",
      render: () => (
        <FeedShell background="bg-white" footerId="d10s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d10s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Excerpt · 014</E>
            </div>
            <E id="d10s2.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">From the article</E>
            <blockquote className="mt-4 border-l-2 border-[#6CC6CB] pl-4 font-display text-[22px] leading-[1.15] text-foreground">
              <E id="d10s2.quote" multiline>{`"Speed adalah\nkecepatan eksekusi.\nKualitas adalah\nkesabaran berpikir."`}</E>
            </blockquote>
            <div className="mt-6 flex-1 space-y-3">
              {[
                { t: "Less, but better", d: "Kurangi elemen, perkuat narasi inti." },
                { t: "Whitespace = trust", d: "Ruang kosong adalah bahasa premium." },
                { t: "Typography first", d: "Hirarki tipografi mengalahkan dekorasi." },
              ].map((s, i) => (
                <div key={i} className="flex gap-3 rounded-xl bg-[#F5F7F8] p-3">
                  <span className="font-mono-code text-[10px] font-semibold text-[#4FB7C5]">0{i + 1}</span>
                  <div>
                    <p className="font-display text-[13px] font-semibold text-foreground"><E id={`d10s2.t${i}`}>{s.t}</E></p>
                    <p className="text-[10.5px] text-[#6B7280]"><E id={`d10s2.d${i}`}>{s.d}</E></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "art-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d10s3.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d10s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Read it · 014</E>
            </div>
            <div className="mt-auto">
              <E id="d10s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-foreground/70">Available now</E>
              <h2 className="mt-3 font-display text-[34px] font-semibold leading-[0.95] text-foreground">
                <E id="d10s3.title" multiline>{`Read the full\nessay on our journal.`}</E>
              </h2>
              <div className="mt-5 inline-flex rounded-full bg-[#1F2937] px-5 py-2.5 text-[11px] font-semibold text-white">
                <E id="d10s3.cta">bytecorner.id/journal →</E>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   D11 — Launch Announcement (bold reveal)
   ===================================================================== */
const D11: DesignSet = {
  key: "launch",
  label: "Launch Announcement",
  accent: "#FFD6A5",
  slides: [
    {
      id: "lan-1",
      render: () => (
        <FeedShell background="bg-[#1F2937]" light footerId="d11s1.footer">
          <div className="relative flex h-full flex-col text-white">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#FFD6A5]/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[#4FB7C5]/30 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <BrandTag light />
              <span className="rounded-full bg-[#FFD6A5] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-[#1F2937]">
                <E id="d11s1.tag">New · 2026</E>
              </span>
            </div>
            <div className="relative mt-auto">
              <E id="d11s1.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.45em] text-[#FFD6A5]">Now launching</E>
              <h2 className="mt-3 font-display text-[58px] font-semibold leading-[0.92]">
                <E id="d11s1.title" multiline>{`Studio OS\nv2.`}</E>
              </h2>
              <p className="mt-4 max-w-[80%] text-[12.5px] leading-relaxed text-white/70">
                <E id="d11s1.desc">Sistem desain & development internal kami — sekarang lebih cepat, lebih modular, dan dibuka untuk klien terpilih.</E>
              </p>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "lan-2",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#F5F7F8] to-[#EAE5C9]" footerId="d11s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d11s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Features · 02</E>
            </div>
            <E id="d11s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">What's inside</E>
            <h2 className="mt-2 font-display text-[28px] leading-[1.05] text-foreground">
              <E id="d11s2.title">Tiga hal yang bikin v2 berbeda.</E>
            </h2>
            <div className="mt-5 flex-1 grid grid-cols-1 gap-3">
              {[
                { n: "01", t: "Component library 2x lebih cepat", d: "Sistem token baru, render time turun 47%." },
                { n: "02", t: "AI-assisted layout", d: "Drafting halaman dari brief — dalam hitungan menit." },
                { n: "03", t: "Real-time client preview", d: "Klien lihat progress secara live, no email bolak-balik." },
              ].map((f, i) => (
                <div key={i} className="glass rounded-2xl p-3.5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[18px] text-gradient">
                      <E id={`d11s2.n${i}`}>{f.n}</E>
                    </span>
                    <p className="font-display text-[14px] font-semibold text-foreground">
                      <E id={`d11s2.t${i}`}>{f.t}</E>
                    </p>
                  </div>
                  <p className="mt-1.5 pl-9 text-[11px] text-foreground/65">
                    <E id={`d11s2.d${i}`}>{f.d}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "lan-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#6CC6CB] to-[#1F2937]" light footerId="d11s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d11s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">Get access · 03</E>
            </div>
            <div className="mt-auto">
              <E id="d11s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-[#A7F3D0]">Limited spots</E>
              <h2 className="mt-3 font-display text-[40px] font-semibold leading-[0.95]">
                <E id="d11s3.title" multiline>{`Join the\nearly access list.`}</E>
              </h2>
              <p className="mt-3 max-w-[80%] text-[12px] leading-relaxed text-white/75">
                <E id="d11s3.desc">Hanya 12 brand kami terima per kuartal. Slot Q1 dibuka minggu ini.</E>
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <div className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#1F2937]">
                  <E id="d11s3.cta1">Request access →</E>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-md">
                  <E id="d11s3.cta2">bytecorner.id/v2</E>
                </div>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   D12 — Client Testimonial (portrait-driven)
   ===================================================================== */
const Avatar = () => (
  <div className="h-full w-full bg-gradient-to-br from-[#FFD6A5] via-[#EAE5C9] to-[#6CC6CB]">
    <div className="flex h-full w-full items-end justify-center">
      <div className="mb-3 h-2/3 w-3/4 rounded-t-full bg-[#1F2937]/20" />
    </div>
  </div>
);
const D12: DesignSet = {
  key: "testimonial",
  label: "Client Testimonial",
  accent: "#FFD6A5",
  slides: [
    {
      id: "ts-1",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d12s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d12s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Voices · 01</E>
            </div>
            <E id="d12s1.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">Client testimonial</E>
            <div className="mt-4 flex-1 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5">
              <div className="grid h-full grid-cols-5">
                <div className="col-span-2 overflow-hidden">
                  <EditableImage id="d12s1.img" fallback={<Avatar />} rounded="rounded-none" className="h-full w-full" />
                </div>
                <div className="col-span-3 flex flex-col justify-between p-5">
                  <p className="font-display text-[8xl] leading-none text-[#6CC6CB]">"</p>
                  <blockquote className="font-display text-[18px] leading-[1.2] text-foreground">
                    <E id="d12s1.quote" multiline>{`Mereka tidak\nsekadar bikin\nwebsite — mereka\nmembentuk brand.`}</E>
                  </blockquote>
                  <div>
                    <p className="font-display text-[13px] font-semibold text-foreground">
                      <E id="d12s1.who">Sarah W.</E>
                    </p>
                    <p className="text-[10.5px] text-[#6B7280]">
                      <E id="d12s1.role">Founder, Lumen Studio</E>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "ts-2",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d12s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d12s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Impact · 02</E>
            </div>
            <E id="d12s2.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/70">After working with us</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d12s2.title">Hasil nyata, bukan janji manis.</E>
            </h2>
            <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
              {[
                { v: "+212%", l: "organic traffic" },
                { v: "4.9★", l: "client rating" },
                { v: "18 hari", l: "rata-rata delivery" },
                { v: "100%", l: "client retention" },
              ].map((m, i) => (
                <div key={i} className="glass flex flex-col justify-center rounded-2xl p-4 shadow-soft">
                  <p className="font-display text-[28px] leading-none text-gradient">
                    <E id={`d12s2.v${i}`}>{m.v}</E>
                  </p>
                  <p className="mt-2 text-[10.5px] text-foreground/65">
                    <E id={`d12s2.l${i}`}>{m.l}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "ts-3",
      render: () => (
        <FeedShell background="bg-white" footerId="d12s3.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d12s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">More voices · 03</E>
            </div>
            <E id="d12s3.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">What others say</E>
            <div className="mt-4 flex-1 space-y-3">
              {[
                { q: "Profesional, on-time, dan hasilnya melampaui ekspektasi.", w: "Andi P. — CEO Nusa" },
                { q: "Komunikasinya enak banget, kerasa kayak in-house team.", w: "Mira K. — Brand Lead Halo" },
                { q: "Best decision tahun ini. Branding kami akhirnya 'klik'.", w: "Reza S. — Founder Kava" },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl border border-black/5 bg-[#F5F7F8] p-4">
                  <p className="font-display text-[13px] leading-snug text-foreground">
                    "<E id={`d12s3.q${i}`}>{t.q}</E>"
                  </p>
                  <p className="mt-2 text-[10px] text-[#6B7280]">
                    <E id={`d12s3.w${i}`}>{t.w}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   D13 — Industry Trend (data / chart)
   ===================================================================== */
const D13: DesignSet = {
  key: "trend",
  label: "Industry Trend",
  accent: "#A7F3D0",
  slides: [
    {
      id: "tr-1",
      render: () => (
        <FeedShell background="bg-white" footerId="d13s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <span className="rounded-full bg-[#A7F3D0] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-[#1F2937]">
                <E id="d13s1.tag">Trend · Q1</E>
              </span>
            </div>
            <E id="d13s1.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">Industry pulse · 2026</E>
            <h2 className="mt-2 font-display text-[28px] leading-[1.0] text-foreground">
              <E id="d13s1.title" multiline>{`AI-driven design\nadalah standar baru.`}</E>
            </h2>
            <div className="mt-6 flex-1 rounded-2xl border border-black/5 bg-[#F5F7F8] p-4">
              <p className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Adoption rate · agencies</p>
              <div className="mt-4 flex h-32 items-end gap-2">
                {[28, 42, 51, 67, 78, 89].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-[#6CC6CB] to-[#A7F3D0]"
                      style={{ height: `${h}%` }}
                    />
                    <span className="font-mono-code text-[8px] text-[#6B7280]">'2{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[10.5px] text-[#6B7280]">
                <E id="d13s1.note">Source: ByteCorner Annual Design Report.</E>
              </p>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "tr-2",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d13s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d13s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Stats · 02</E>
            </div>
            <E id="d13s2.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">By the numbers</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d13s2.title">Apa yang berubah di 2026?</E>
            </h2>
            <div className="mt-5 flex-1 space-y-3">
              {[
                { v: "73%", l: "brand prioritaskan motion design" },
                { v: "2.4x", l: "permintaan AI integration" },
                { v: "61%", l: "pindah ke headless CMS" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <p className="font-display text-[34px] leading-none text-gradient">
                    <E id={`d13s2.v${i}`}>{s.v}</E>
                  </p>
                  <p className="max-w-[55%] text-right text-[11px] text-[#6B7280]">
                    <E id={`d13s2.l${i}`}>{s.l}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "tr-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#1F2937] to-[#4FB7C5]" light footerId="d13s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d13s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">Takeaway · 03</E>
            </div>
            <div className="mt-auto">
              <E id="d13s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-[#A7F3D0]">The takeaway</E>
              <h2 className="mt-3 font-display text-[36px] font-semibold leading-[0.98]">
                <E id="d13s3.title" multiline>{`Brand yang adopsi\nlebih awal —\nyang menang.`}</E>
              </h2>
              <p className="mt-3 max-w-[82%] text-[12px] leading-relaxed text-white/75">
                <E id="d13s3.desc">Mau strategi adoption AI design untuk brand kamu? Kita bantu petakan roadmap-nya.</E>
              </p>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   D14 — Product Update / Changelog
   ===================================================================== */
const D14: DesignSet = {
  key: "changelog",
  label: "Product Update",
  accent: "#A7F3D0",
  slides: [
    {
      id: "cl-1",
      render: () => (
        <FeedShell background="bg-white" footerId="d14s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A7F3D0] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-[#1F2937]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F2937]" /> <E id="d14s1.tag">Shipped</E>
              </span>
            </div>
            <E id="d14s1.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">Changelog · v2.4</E>
            <h2 className="mt-2 font-display text-[32px] font-semibold leading-[0.98] text-foreground">
              <E id="d14s1.title" multiline>{`This week\nwe shipped.`}</E>
            </h2>
            <div className="mt-6 flex-1 space-y-3">
              {[
                { t: "Realtime collab cursor", d: "Lihat aktivitas tim langsung di canvas." },
                { t: "Smart export presets", d: "Export 1080² IG, 1200×630 OG sekali klik." },
                { t: "Dark mode tokens", d: "Auto-generate dark theme dari brand palette." },
              ].map((s, i) => (
                <div key={i} className="flex gap-3 border-b border-black/5 pb-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6CC6CB]" />
                  <div>
                    <p className="font-display text-[14px] font-semibold text-foreground">
                      <E id={`d14s1.t${i}`}>{s.t}</E>
                    </p>
                    <p className="text-[11px] text-[#6B7280]">
                      <E id={`d14s1.d${i}`}>{s.d}</E>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "cl-2",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#F5F7F8] to-[#EAE5C9]" footerId="d14s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d14s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Highlight · 02</E>
            </div>
            <E id="d14s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">Feature spotlight</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d14s2.title">Smart export, sekarang lebih pintar.</E>
            </h2>
            <div className="mt-5 flex-1 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <EditableImage
                id="d14s2.img"
                rounded="rounded-2xl"
                className="h-full w-full"
                fallback={
                  <div className="h-full w-full bg-gradient-to-br from-[#1F2937] to-[#4FB7C5] p-5">
                    <p className="font-mono-code text-[9px] uppercase tracking-widest text-white/70">export.preset</p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {["IG 1:1", "IG 4:5", "OG 1.91", "Story 9:16"].map((p, i) => (
                        <div key={i} className="rounded-lg bg-white/10 p-2 text-[10px] font-semibold text-white ring-1 ring-white/15">{p}</div>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex rounded-full bg-[#A7F3D0] px-3 py-1 text-[9px] font-bold text-[#1F2937]">Export all →</div>
                  </div>
                }
              />
            </div>
            <p className="mt-3 text-[11px] text-foreground/65">
              <E id="d14s2.desc">Pilih preset, export semua format sekaligus — tinggal kirim ke klien.</E>
            </p>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "cl-3",
      render: () => (
        <FeedShell background="bg-[#1F2937]" light footerId="d14s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d14s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">What's next · 03</E>
            </div>
            <div className="mt-auto">
              <E id="d14s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-[#A7F3D0]">Coming next</E>
              <h2 className="mt-3 font-display text-[36px] font-semibold leading-[0.95]">
                <E id="d14s3.title" multiline>{`Next on the\nroadmap.`}</E>
              </h2>
              <div className="mt-5 space-y-2.5">
                {["AI brand generator", "Figma → live import", "Client approval flow"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <span className="font-mono-code text-[10px] text-[#A7F3D0]">→</span>
                    <span className="text-[12px] text-white/85">
                      <E id={`d14s3.r${i}`}>{s}</E>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   D15 — Design System Spotlight
   ===================================================================== */
const D15: DesignSet = {
  key: "system",
  label: "Design System Spotlight",
  accent: "#6CC6CB",
  slides: [
    {
      id: "ds-1",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d15s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d15s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">System · 01</E>
            </div>
            <E id="d15s1.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">Design system</E>
            <h2 className="mt-2 font-display text-[30px] font-semibold leading-[0.98] text-foreground">
              <E id="d15s1.title" multiline>{`A palette\nbuilt to last.`}</E>
            </h2>
            <div className="mt-6 flex-1">
              <p className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Color tokens</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { c: "#EAE5C9", n: "sand" },
                  { c: "#6CC6CB", n: "aqua" },
                  { c: "#4FB7C5", n: "teal" },
                  { c: "#1F2937", n: "ink" },
                  { c: "#FFD6A5", n: "peach" },
                  { c: "#A7F3D0", n: "mint" },
                ].map((t, i) => (
                  <div key={i} className="overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-black/5">
                    <div className="h-14" style={{ background: t.c }} />
                    <div className="p-2">
                      <p className="font-display text-[11px] font-semibold text-foreground">
                        <E id={`d15s1.n${i}`}>{t.n}</E>
                      </p>
                      <p className="font-mono-code text-[8.5px] text-[#6B7280]">
                        <E id={`d15s1.c${i}`}>{t.c}</E>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "ds-2",
      render: () => (
        <FeedShell background="bg-white" footerId="d15s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d15s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Type · 02</E>
            </div>
            <E id="d15s2.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">Typography</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d15s2.title">Two voices, one rhythm.</E>
            </h2>
            <div className="mt-6 flex-1 space-y-4">
              <div className="rounded-2xl bg-[#F5F7F8] p-5">
                <p className="font-mono-code text-[9px] uppercase tracking-widest text-[#6B7280]">Display · Josefin Sans</p>
                <p className="mt-2 font-display text-[40px] leading-[0.95] text-foreground">
                  <E id="d15s2.disp">Aa Bb 01</E>
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 p-5">
                <p className="font-mono-code text-[9px] uppercase tracking-widest text-[#6B7280]">Body · Inter</p>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/80">
                  <E id="d15s2.body" multiline>The quick brown fox jumps over the lazy dog — clean, neutral, dependable.</E>
                </p>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "ds-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d15s3.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d15s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Principles · 03</E>
            </div>
            <E id="d15s3.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.4em] text-foreground/70">Our principles</E>
            <h2 className="mt-2 font-display text-[28px] leading-[1.05] text-foreground">
              <E id="d15s3.title">Empat aturan yang kami pegang.</E>
            </h2>
            <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
              {[
                { n: "01", t: "Clarity over clever" },
                { n: "02", t: "Whitespace is sacred" },
                { n: "03", t: "Motion has meaning" },
                { n: "04", t: "Consistency wins" },
              ].map((p, i) => (
                <div key={i} className="glass flex flex-col justify-between rounded-2xl p-4 shadow-soft">
                  <p className="font-display text-[16px] text-gradient">
                    <E id={`d15s3.n${i}`}>{p.n}</E>
                  </p>
                  <p className="mt-2 font-display text-[14px] font-semibold leading-tight text-foreground">
                    <E id={`d15s3.t${i}`}>{p.t}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

export const EXTRA_DESIGNS: DesignSet[] = [D10, D11, D12, D13, D14, D15];
