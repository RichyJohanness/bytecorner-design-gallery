import { ReactNode } from "react";
import { BrandTag, FeedShell } from "./FeedShell";
import { EditableText as E } from "@/components/editor/EditableText";
import { EditableImage } from "@/components/editor/EditableImage";

export type SlideDef = {
  id: string;
  render: () => ReactNode;
};
export type DesignSet = {
  key: string;
  label: string;
  accent: string; // small color chip for the card
  slides: [SlideDef, SlideDef, SlideDef];
};

/* =====================================================================
   DESIGN 01 — FAQ
   ===================================================================== */
const D01: DesignSet = {
  key: "faq",
  label: "FAQ Carousel",
  accent: "#6CC6CB",
  slides: [
    {
      id: "faq-1",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d01s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d01s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">#FAQ · 01</E>
            </div>
            <div className="mt-6">
              <E id="d01s1.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/60">Frequently Asked</E>
              <h2 className="mt-2 font-display text-[28px] leading-[1.05] text-foreground">
                <E id="d01s1.title">Pertanyaan yang sering ditanyakan klien kami.</E>
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
                    <span className="font-mono-code text-[10px] font-semibold text-[#4FB7C5]">Q{i + 1}</span>
                    <p className="text-[12px] font-semibold leading-snug text-foreground">
                      <E id={`d01s1.q${i}`}>{f.q}</E>
                    </p>
                  </div>
                  <p className="mt-1.5 pl-6 text-[11px] leading-snug text-foreground/70">
                    <E id={`d01s1.a${i}`}>{f.a}</E>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-foreground/60">
              <E id="d01s1.hint">Swipe untuk lihat lebih →</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "faq-2",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#F5F7F8] to-[#EAE5C9]" footerId="d01s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d01s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">#FAQ · 02</E>
            </div>
            <E id="d01s2.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/60">Lanjutan</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d01s2.title">Soal harga, payment & garansi project.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-2.5">
              {[
                { q: "Berapa estimasi budget project?", a: "Mulai dari 8 juta untuk landing page." },
                { q: "Sistem pembayarannya gimana?", a: "DP 50% di awal, sisanya saat go-live." },
                { q: "Ada garansi setelah launching?", a: "Free maintenance 30 hari pertama." },
                { q: "Bisa cicil per milestone?", a: "Bisa, untuk project di atas 25 juta." },
              ].map((f, i) => (
                <div key={i} className="rounded-xl bg-white/70 p-2.5 backdrop-blur-md ring-1 ring-black/5">
                  <p className="text-[11.5px] font-semibold text-foreground">
                    <span className="text-[#4FB7C5]">Q.</span> <E id={`d01s2.q${i}`}>{f.q}</E>
                  </p>
                  <p className="mt-1 text-[10.5px] text-foreground/65">
                    <E id={`d01s2.a${i}`}>{f.a}</E>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10px] text-foreground/60">
              <E id="d01s2.hint">Masih ada pertanyaan? Geser ke slide berikutnya →</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "faq-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#4FB7C5]" light footerId="d01s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d01s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">#FAQ · 03</E>
            </div>

            <div className="mt-auto">
              <E id="d01s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#A7F3D0]">Tanya langsung</E>
              <h2 className="mt-3 font-display text-[34px] leading-[1.0]">
                <E id="d01s3.title">Belum nemu jawabannya?</E>
              </h2>
              <p className="mt-3 max-w-[85%] text-[12.5px] leading-relaxed text-white/75">
                <E id="d01s3.desc">DM kami atau email langsung — biasanya kami balas di hari yang sama.</E>
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <div className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#1F2937]">
                  <E id="d01s3.cta1">DM Instagram</E>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-md">
                  <E id="d01s3.cta2">hi@bytecorner.id</E>
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
   DESIGN 02 — Portfolio
   ===================================================================== */
const PortfolioMock = () => (
  <div className="h-full w-full bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB] p-4">
    <p className="font-display text-xs font-semibold text-[#1F2937]/70">LUMEN</p>
    <p className="mt-1 font-display text-[18px] leading-tight text-[#1F2937]">Light up your<br />digital presence.</p>
    <div className="mt-3 flex gap-2">
      <div className="h-12 flex-1 rounded-lg bg-white/60" />
      <div className="h-12 flex-1 rounded-lg bg-white/40" />
      <div className="h-12 flex-1 rounded-lg bg-white/30" />
    </div>
    <div className="mt-2 inline-flex rounded-full bg-[#1F2937] px-3 py-1 text-[9px] font-semibold text-white">Get Started →</div>
  </div>
);

const D02: DesignSet = {
  key: "portfolio",
  label: "Portfolio Showcase",
  accent: "#1F2937",
  slides: [
    {
      id: "pf-1",
      render: () => (
        <FeedShell background="bg-[#1F2937]" light footerId="d02s1.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d02s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">Case · 02</E>
            </div>
            <E id="d02s1.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6CC6CB]">Latest Work</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05]">
              <E id="d02s1.title">Lumen Studio — Brand Website Redesign.</E>
            </h2>

            <div className="mt-5 flex-1 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <EditableImage id="d02s1.img" fallback={<PortfolioMock />} rounded="rounded-2xl" className="h-full w-full" />
            </div>

            <div className="mt-4 flex items-center gap-3 text-[10px] text-white/60">
              <E id="d02s1.m1"><b>+184% traffic</b></E>
              <E id="d02s1.m2"><b>3.2s load</b></E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "pf-2",
      render: () => (
        <FeedShell background="bg-[#0f1620]" light footerId="d02s2.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d02s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">Process · 02</E>
            </div>
            <E id="d02s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6CC6CB]">Behind the build</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05]">
              <E id="d02s2.title">Dari sketsa ke pixel-perfect dalam 18 hari.</E>
            </h2>

            <div className="mt-5 grid flex-1 grid-cols-2 gap-2.5">
              <EditableImage id="d02s2.imgA" rounded="rounded-xl" className="aspect-[4/5]" fallback={
                <div className="h-full w-full bg-gradient-to-br from-[#EAE5C9] via-white to-[#6CC6CB] p-3">
                  <p className="font-mono-code text-[9px] uppercase tracking-widest text-[#1F2937]/60">01 · Wireframe</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1 w-2/3 rounded bg-[#1F2937]/30" />
                    <div className="h-1 w-full rounded bg-[#1F2937]/20" />
                    <div className="h-10 rounded bg-[#1F2937]/15" />
                    <div className="h-1 w-4/5 rounded bg-[#1F2937]/20" />
                  </div>
                </div>
              } />
              <EditableImage id="d02s2.imgB" rounded="rounded-xl" className="aspect-[4/5]" fallback={
                <div className="h-full w-full bg-gradient-to-br from-[#1F2937] to-[#4FB7C5] p-3">
                  <p className="font-mono-code text-[9px] uppercase tracking-widest text-white/70">02 · Hi-Fi UI</p>
                  <p className="mt-2 font-display text-[14px] leading-tight text-white">Lumen.</p>
                  <div className="mt-2 h-12 rounded-lg bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" />
                  <div className="mt-2 inline-flex rounded-full bg-white px-2 py-0.5 text-[8px] font-bold text-[#1F2937]">Live →</div>
                </div>
              } />
            </div>

            <div className="mt-3 flex gap-2 text-[10px] text-white/60">
              <span className="rounded-full bg-white/10 px-2 py-0.5"><E id="d02s2.tag1">design</E></span>
              <span className="rounded-full bg-white/10 px-2 py-0.5"><E id="d02s2.tag2">webflow</E></span>
              <span className="rounded-full bg-white/10 px-2 py-0.5"><E id="d02s2.tag3">cms</E></span>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "pf-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d02s3.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d02s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Result · 02</E>
            </div>
            <E id="d02s3.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/70">Client says</E>
            <h2 className="mt-2 font-display text-[24px] leading-[1.1] text-foreground">
              <E id="d02s3.title">"Website-nya kayak naik kelas dua tingkat — feels premium."</E>
            </h2>

            <div className="mt-auto">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { v: "+184%", l: "traffic" },
                  { v: "+62%", l: "leads" },
                  { v: "3.2s", l: "load" },
                ].map((m, i) => (
                  <div key={i} className="glass rounded-2xl p-3 shadow-soft">
                    <p className="font-display text-[20px] leading-none text-gradient">
                      <E id={`d02s3.v${i}`}>{m.v}</E>
                    </p>
                    <p className="mt-1 text-[10px] text-foreground/65">
                      <E id={`d02s3.l${i}`}>{m.l}</E>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <E id="d02s3.who" className="text-[10.5px] text-foreground/70">— Sarah W., Founder Lumen Studio</E>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   DESIGN 03 — Insight
   ===================================================================== */
const D03: DesignSet = {
  key: "insight",
  label: "Editorial Insight",
  accent: "#F5F7F8",
  slides: [
    {
      id: "in-1",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d03s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <span className="rounded-full bg-[#1F2937] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-white">
                <E id="d03s1.tag">Insight · 03</E>
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.25em] text-[#6B7280]">
              <span className="h-px w-6 bg-[#6CC6CB]" /> <E id="d03s1.read">5 min read</E>
            </div>
            <h2 className="mt-3 font-display text-[30px] leading-[1.0] text-foreground">
              <E id="d03s1.title">Why slow websites are quietly killing your conversion.</E>
            </h2>
            <p className="mt-4 text-[12px] leading-relaxed text-[#6B7280]">
              <E id="d03s1.desc">Setiap detik tambahan dalam load time bisa menurunkan konversi hingga 7%. Kecepatan bukan lagi pilihan — ia adalah identitas brand kamu.</E>
            </p>
            <div className="mt-5 grid flex-1 grid-cols-3 gap-2.5">
              {[
                { v: "53%", l: "users leave >3s" },
                { v: "1.8x", l: "more sales" },
                { v: "2.4s", l: "ideal LCP" },
              ].map((s, i) => (
                <div key={i} className="glass flex flex-col justify-center rounded-2xl p-3 shadow-soft">
                  <p className="font-display text-[22px] leading-none text-gradient">
                    <E id={`d03s1.v${i}`}>{s.v}</E>
                  </p>
                  <p className="mt-1.5 text-[10px] leading-tight text-[#6B7280]">
                    <E id={`d03s1.l${i}`}>{s.l}</E>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[10px] text-[#6B7280]">
              <E id="d03s1.by">By <b className="text-foreground">ByteCorner Team</b></E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "in-2",
      render: () => (
        <FeedShell background="bg-white" footerId="d03s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d03s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Insight · 02</E>
            </div>
            <E id="d03s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">The hidden cost</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d03s2.title">3 alasan website lemot bikin orang kabur.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-3">
              {[
                { n: "01", t: "First impression rusak", d: "Loading lebih dari 3 detik = 53% user pergi." },
                { n: "02", t: "SEO ranking turun", d: "Google menurunkan posisi situs lambat di hasil pencarian." },
                { n: "03", t: "Trust hilang", d: "Site lambat dianggap kurang profesional & tidak aman." },
              ].map((s, i) => (
                <div key={i} className="flex gap-3 rounded-xl border border-black/5 bg-[#F5F7F8] p-3">
                  <span className="font-display text-[20px] leading-none text-gradient">
                    <E id={`d03s2.n${i}`}>{s.n}</E>
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[13px] font-semibold text-foreground">
                      <E id={`d03s2.t${i}`}>{s.t}</E>
                    </p>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-[#6B7280]">
                      <E id={`d03s2.d${i}`}>{s.d}</E>
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
      id: "in-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#6CC6CB] via-[#4FB7C5] to-[#1F2937]" light footerId="d03s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d03s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">Action · 03</E>
            </div>

            <div className="mt-auto">
              <E id="d03s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-white/70">What to do now</E>
              <h2 className="mt-3 font-display text-[30px] leading-[1.0]">
                <E id="d03s3.title">Audit kecepatan website kamu — gratis.</E>
              </h2>
              <p className="mt-3 max-w-[85%] text-[12px] leading-relaxed text-white/80">
                <E id="d03s3.desc">Kami review LCP, CLS, dan struktur asset lalu kirim laporan singkat ke email kamu.</E>
              </p>
              <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#1F2937] shadow-soft">
                <E id="d03s3.cta">Request free audit →</E>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   DESIGN 04 — Website Tips
   ===================================================================== */
const D04: DesignSet = {
  key: "tips",
  label: "Website Tips",
  accent: "#4FB7C5",
  slides: [
    {
      id: "tp-1",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#6CC6CB] via-[#4FB7C5] to-[#1F2937]" light footerId="d04s1.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d04s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">Tips · 04</E>
            </div>
            <E id="d04s1.kicker" className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.3em] text-white/70">5 Website Tips</E>
            <h2 className="mt-2 font-display text-[28px] leading-[1.0]">
              <E id="d04s1.title">Make your website feel premium in 5 small moves.</E>
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
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[11px] font-bold text-[#4FB7C5]">{i + 1}</span>
                  <p className="text-[12px] font-medium leading-snug">
                    <E id={`d04s1.t${i}`}>{t}</E>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[10px] text-white/70">
              <E id="d04s1.hint">Save this post 🔖</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "tp-2",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d04s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d04s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Tips · 02</E>
            </div>
            <E id="d04s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">Common mistakes</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d04s2.title">5 hal kecil yang bikin website terlihat murahan.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-2">
              {[
                "Stock photo generic tanpa konteks brand.",
                "Drop shadow keras + border tebal.",
                "Terlalu banyak gradient warna ramai.",
                "Tombol-tombol dengan ikon emoji acak.",
                "Font bawaan template tanpa hierarki.",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-xl bg-white p-2.5 ring-1 ring-black/5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-100 text-[10px] font-bold text-red-500">×</span>
                  <p className="text-[11.5px] leading-snug text-foreground">
                    <E id={`d04s2.t${i}`}>{t}</E>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10px] text-[#6B7280]">
              <E id="d04s2.hint">→ Solusinya ada di slide berikutnya</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "tp-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] via-white to-[#6CC6CB]" footerId="d04s3.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d04s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Tips · 03</E>
            </div>
            <E id="d04s3.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/65">Pro toolkit</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d04s3.title">Tools yang kami pakai bikin website premium.</E>
            </h2>

            <div className="mt-5 grid flex-1 grid-cols-2 gap-2.5">
              {[
                { t: "Figma", d: "Design system & prototype" },
                { t: "Framer", d: "No-code interaction" },
                { t: "Webflow", d: "Production CMS" },
                { t: "Linear", d: "Project tracking" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/70 p-3 shadow-soft ring-1 ring-black/5 backdrop-blur-md">
                  <p className="font-display text-[15px] font-semibold text-foreground">
                    <E id={`d04s3.t${i}`}>{s.t}</E>
                  </p>
                  <p className="mt-1 text-[10.5px] text-foreground/65">
                    <E id={`d04s3.d${i}`}>{s.d}</E>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10px] text-foreground/60">
              <E id="d04s3.hint">Save & share ke timmu 💡</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   DESIGN 05 — Coding Tips
   ===================================================================== */
const D05: DesignSet = {
  key: "code",
  label: "Coding Tips",
  accent: "#0f1620",
  slides: [
    {
      id: "cd-1",
      render: () => (
        <FeedShell background="bg-[#0f1620]" light footerId="d05s1.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d05s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">Dev · 05</E>
            </div>
            <h2 className="mt-5 font-display text-[26px] leading-[1.05]">
              <E id="d05s1.title">Stop writing if-else hell.</E>
            </h2>
            <p className="mt-1.5 text-[11px] text-white/60">
              <E id="d05s1.sub">A cleaner way to map state to UI.</E>
            </p>
            <div className="mt-4 flex-1 overflow-hidden rounded-2xl bg-[#0a1018] p-4 ring-1 ring-white/10 shadow-glass">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FFD6A5]" />
                <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />
                <span className="h-2 w-2 rounded-full bg-[#6CC6CB]" />
                <span className="ml-2 font-mono-code text-[9px] text-white/40">
                  <E id="d05s1.file">status.ts</E>
                </span>
              </div>
              <pre className="whitespace-pre-wrap font-mono-code text-[10.5px] leading-[1.55] text-white/85">
                <E id="d05s1.code" multiline>{`const variants = {
  idle:    "bg-muted",
  loading: "bg-aqua animate-pulse",
  success: "bg-mint text-ink",
  error:   "bg-red-500 text-white",
} as const;

export const Pill = ({ status }) => (
  <span className={variants[status]}>
    {status}
  </span>
);`}</E>
              </pre>
            </div>
            <div className="mt-3 flex items-center text-[10px] text-white/50">
              <span className="rounded-full bg-white/10 px-2 py-1 font-mono-code">
                <E id="d05s1.hash">#typescript</E>
              </span>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "cd-2",
      render: () => (
        <FeedShell background="bg-[#0f1620]" light footerId="d05s2.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d05s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">Dev · 02</E>
            </div>
            <h2 className="mt-5 font-display text-[26px] leading-[1.05]">
              <E id="d05s2.title">Better: tiny lookup utility.</E>
            </h2>
            <p className="mt-1.5 text-[11px] text-white/60">
              <E id="d05s2.sub">Type-safe & easy to extend.</E>
            </p>
            <div className="mt-4 flex-1 overflow-hidden rounded-2xl bg-[#0a1018] p-4 ring-1 ring-white/10 shadow-glass">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FFD6A5]" />
                <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />
                <span className="h-2 w-2 rounded-full bg-[#6CC6CB]" />
                <span className="ml-2 font-mono-code text-[9px] text-white/40">
                  <E id="d05s2.file">match.ts</E>
                </span>
              </div>
              <pre className="whitespace-pre-wrap font-mono-code text-[10.5px] leading-[1.55] text-white/85">
                <E id="d05s2.code" multiline>{`type Status = "idle" | "loading" | "success" | "error";

export const match = <T,>(
  k: Status,
  m: Record<Status, T>
): T => m[k];

const color = match(status, {
  idle: "muted",
  loading: "aqua",
  success: "mint",
  error: "red",
});`}</E>
              </pre>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-white/50">
              <span className="rounded-full bg-white/10 px-2 py-1 font-mono-code">
                <E id="d05s2.hash">#cleancode</E>
              </span>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "cd-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#4FB7C5]" light footerId="d05s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d05s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">Dev · 03</E>
            </div>

            <div className="mt-auto">
              <E id="d05s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#A7F3D0]">Takeaways</E>
              <h2 className="mt-3 font-display text-[30px] leading-[1.0]">
                <E id="d05s3.title">3 prinsip clean state code.</E>
              </h2>

              <div className="mt-5 space-y-2.5">
                {[
                  "Map > if-else untuk state diskrit.",
                  "Tipe dulu, implementasi belakangan.",
                  "Satu source of truth per concern.",
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 p-2.5 ring-1 ring-white/15 backdrop-blur-md">
                    <span className="font-mono-code text-[12px] font-bold text-[#A7F3D0]">0{i + 1}</span>
                    <p className="text-[12px] font-medium">
                      <E id={`d05s3.t${i}`}>{t}</E>
                    </p>
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
   DESIGN 06 — Branding
   ===================================================================== */
const D06: DesignSet = {
  key: "branding",
  label: "Agency Branding",
  accent: "#EAE5C9",
  slides: [
    {
      id: "br-1",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d06s1.footer">
          <div className="relative flex h-full flex-col">
            <BrandTag />
            <div className="mt-auto">
              <E id="d06s1.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-foreground/60">We are ByteCorner</E>
              <h2 className="mt-3 font-display text-[44px] font-semibold leading-[0.95] text-foreground">
                <E id="d06s1.title" multiline>{`We design\ndigital corners\nworth living in.`}</E>
              </h2>
              <p className="mt-4 max-w-[80%] text-[12px] leading-relaxed text-foreground/70">
                <E id="d06s1.desc">Brand, web & product studio yang membantu bisnis tumbuh lewat desain yang jujur dan engineering yang rapi.</E>
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-2">
                {["#1F2937", "#4FB7C5", "#FFD6A5", "#A7F3D0"].map((c, i) => (
                  <div key={i} className="h-7 w-7 rounded-full ring-2 ring-white" style={{ background: c }} />
                ))}
              </div>
              <div className="rounded-full bg-[#1F2937] px-4 py-2 text-[11px] font-semibold text-white">
                <E id="d06s1.cta">Let's build →</E>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "br-2",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d06s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d06s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Manifesto · 02</E>
            </div>
            <E id="d06s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/60">What we believe</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d06s2.title">4 prinsip kerja kami.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-2.5">
              {[
                { t: "Honest design", d: "Desain yang melayani user, bukan ego." },
                { t: "Built to last", d: "Code yang rapi, scalable, dan documented." },
                { t: "Slow is smooth", d: "Kami tidak buru-buru — kami presisi." },
                { t: "Partnership", d: "Bukan vendor — kami partner pertumbuhanmu." },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-black/5 bg-white p-3">
                  <p className="font-display text-[13px] font-semibold text-foreground">
                    <E id={`d06s2.t${i}`}>{s.t}</E>
                  </p>
                  <p className="mt-0.5 text-[10.5px] text-foreground/65">
                    <E id={`d06s2.d${i}`}>{s.d}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "br-3",
      render: () => (
        <FeedShell background="bg-[#1F2937]" light footerId="d06s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d06s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">Team · 03</E>
            </div>
            <E id="d06s3.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6CC6CB]">By the numbers</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05]">
              <E id="d06s3.title">Kecil, tajam, dan independen.</E>
            </h2>

            <div className="mt-5 grid flex-1 grid-cols-2 gap-2.5">
              {[
                { v: "08", l: "designers & devs" },
                { v: "60+", l: "projects shipped" },
                { v: "4.9★", l: "client rating" },
                { v: "2021", l: "since" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-md">
                  <p className="font-display text-[26px] leading-none text-gradient">
                    <E id={`d06s3.v${i}`}>{s.v}</E>
                  </p>
                  <p className="mt-1.5 text-[10px] text-white/65">
                    <E id={`d06s3.l${i}`}>{s.l}</E>
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
   DESIGN 07 — Case Study
   ===================================================================== */
const NordvestMock = () => (
  <div className="h-full w-full bg-gradient-to-br from-[#1F2937] to-[#4FB7C5] p-3">
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
);

const D07: DesignSet = {
  key: "case",
  label: "Case Study",
  accent: "#FFFFFF",
  slides: [
    {
      id: "cs-1",
      render: () => (
        <FeedShell background="bg-white" footerId="d07s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d07s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Case · 07</E>
            </div>
            <E id="d07s1.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">Client · Nordvest Coffee</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d07s1.title">From local roastery to a +212% online order growth.</E>
            </h2>
            <div className="mt-4">
              <EditableImage id="d07s1.img" rounded="rounded-2xl" className="aspect-[16/9] w-full ring-1 ring-black/5 shadow-soft" fallback={<NordvestMock />} />
            </div>
            <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
              {[
                { v: "+212%", l: "Orders" },
                { v: "−38%", l: "Bounce" },
                { v: "4.9★", l: "Rating" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-black/5 bg-[#F5F7F8] p-2.5">
                  <p className="font-display text-[18px] leading-none text-foreground">
                    <E id={`d07s1.v${i}`}>{s.v}</E>
                  </p>
                  <p className="mt-1 text-[10px] text-[#6B7280]">
                    <E id={`d07s1.l${i}`}>{s.l}</E>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "cs-2",
      render: () => (
        <FeedShell background="bg-[#F5F7F8]" footerId="d07s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d07s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Challenge · 02</E>
            </div>
            <E id="d07s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">The problem</E>
            <h2 className="mt-2 font-display text-[24px] leading-[1.1] text-foreground">
              <E id="d07s2.title">Website lama yang tidak konversi.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-3">
              <div className="rounded-2xl bg-white p-3.5 ring-1 ring-black/5">
                <p className="font-mono-code text-[9px] uppercase tracking-widest text-red-500">Before</p>
                <p className="mt-1 text-[12px] leading-snug text-foreground">
                  <E id="d07s2.before">Load time 6.4s · checkout drop-off 71% · brand voice tidak konsisten.</E>
                </p>
              </div>
              <div className="rounded-2xl bg-white p-3.5 ring-1 ring-black/5">
                <p className="font-mono-code text-[9px] uppercase tracking-widest text-[#4FB7C5]">After</p>
                <p className="mt-1 text-[12px] leading-snug text-foreground">
                  <E id="d07s2.after">Load time 1.6s · checkout drop-off 22% · konsisten dari hero sampai email.</E>
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
              <span className="rounded-full bg-[#1F2937] px-2.5 py-1 text-white"><E id="d07s2.tg1">Brand audit</E></span>
              <span className="rounded-full bg-[#1F2937] px-2.5 py-1 text-white"><E id="d07s2.tg2">UX rewrite</E></span>
              <span className="rounded-full bg-[#1F2937] px-2.5 py-1 text-white"><E id="d07s2.tg3">Shopify build</E></span>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "cs-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d07s3.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d07s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Result · 03</E>
            </div>
            <E id="d07s3.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-foreground/65">Outcome · 6 months</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d07s3.title">Sustained growth, bukan spike sesaat.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-3">
              {[
                { v: "+212%", l: "Online orders YoY" },
                { v: "+58%", l: "Average order value" },
                { v: "4.9★", l: "Customer satisfaction" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl bg-white/70 p-3 backdrop-blur-md ring-1 ring-black/5">
                  <p className="text-[11.5px] font-medium text-foreground/70">
                    <E id={`d07s3.l${i}`}>{s.l}</E>
                  </p>
                  <p className="font-display text-[22px] leading-none text-gradient">
                    <E id={`d07s3.v${i}`}>{s.v}</E>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10.5px] text-foreground/70">
              <E id="d07s3.who">— Mira N., Owner Nordvest Coffee</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

/* =====================================================================
   DESIGN 08 — Quick Guide
   ===================================================================== */
const D08: DesignSet = {
  key: "guide",
  label: "Quick Guide",
  accent: "#A7F3D0",
  slides: [
    {
      id: "qg-1",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#F5F7F8] via-white to-[#EAE5C9]" footerId="d08s1.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <span className="rounded-full bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB] px-2.5 py-1 font-mono-code text-[9px] uppercase tracking-widest text-[#1F2937]">
                <E id="d08s1.tag">Guide · 08</E>
              </span>
            </div>
            <E id="d08s1.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">In 4 steps</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d08s1.title">How we launch a website in under 14 days.</E>
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
                  <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-aqua text-[11px] font-bold text-white">{i + 1}</span>
                  <div className="min-w-0">
                    <p className="font-display text-[13px] font-semibold leading-tight text-foreground">
                      <E id={`d08s1.t${i}`}>{s.t}</E>
                    </p>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-[#6B7280]">
                      <E id={`d08s1.d${i}`}>{s.d}</E>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 text-[10px] text-[#6B7280]">
              <E id="d08s1.hint">Save this checklist 🔖</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "qg-2",
      render: () => (
        <FeedShell background="bg-white" footerId="d08s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d08s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Guide · 02</E>
            </div>
            <E id="d08s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">Pre-launch</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d08s2.title">Checklist sebelum website kamu go-live.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-2">
              {[
                "Mobile responsive — diuji di 3 device",
                "Page speed > 90 (Lighthouse)",
                "SEO meta + Open Graph image siap",
                "Form & CTA terhubung ke email/CRM",
                "Backup + analytics terpasang",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl bg-[#F5F7F8] p-2.5 ring-1 ring-black/5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#A7F3D0] text-[10px] font-bold text-[#1F2937]">✓</span>
                  <p className="text-[11.5px] leading-snug text-foreground">
                    <E id={`d08s2.t${i}`}>{t}</E>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10px] text-[#6B7280]">
              <E id="d08s2.hint">Pakai checklist ini di project berikutnya</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "qg-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#4FB7C5]" light footerId="d08s3.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d08s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/60">Guide · 03</E>
            </div>

            <div className="mt-auto">
              <E id="d08s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#A7F3D0]">After launch</E>
              <h2 className="mt-3 font-display text-[28px] leading-[1.0]">
                <E id="d08s3.title">3 hal yang harus kamu pantau di 30 hari pertama.</E>
              </h2>

              <div className="mt-5 space-y-2.5">
                {[
                  { t: "Performance", d: "Cek Core Web Vitals tiap minggu." },
                  { t: "Conversion", d: "A/B test CTA & headline utama." },
                  { t: "Feedback", d: "Wawancara 5 user awal — gali friction." },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl bg-white/10 p-2.5 ring-1 ring-white/15 backdrop-blur-md">
                    <p className="font-display text-[13px] font-semibold">
                      <E id={`d08s3.t${i}`}>{s.t}</E>
                    </p>
                    <p className="mt-0.5 text-[10.5px] text-white/70">
                      <E id={`d08s3.d${i}`}>{s.d}</E>
                    </p>
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
   DESIGN 09 — Soft Selling
   ===================================================================== */
const D09: DesignSet = {
  key: "soft",
  label: "Soft-Selling",
  accent: "#1F2937",
  slides: [
    {
      id: "sf-1",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#4FB7C5]" light footerId="d09s1.footer">
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <BrandTag light />
              <E id="d09s1.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-white/50">09 · Hello</E>
            </div>
            <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#A7F3D0]" />
              <E id="d09s1.badge" className="text-[10px] font-medium">Open for 3 projects · Q2</E>
            </div>
            <h2 className="mt-4 font-display text-[30px] leading-[1.0]">
              <E id="d09s1.title" multiline>{`Punya ide?\nMari kita rapikan.`}</E>
            </h2>
            <p className="mt-3 max-w-[85%] text-[12px] leading-relaxed text-white/75">
              <E id="d09s1.desc">Kami membantu founder, UMKM, dan brand membangun website yang bukan cuma terlihat bagus — tapi benar-benar bekerja.</E>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {[
                { t: "Web Design", d: "Landing & company site" },
                { t: "Webflow Dev", d: "CMS + animation" },
                { t: "UI/UX", d: "Product & dashboard" },
                { t: "Branding", d: "Identity sistem" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-white/10 p-2.5 ring-1 ring-white/10 backdrop-blur-md">
                  <p className="font-display text-[13px] font-semibold">
                    <E id={`d09s1.t${i}`}>{s.t}</E>
                  </p>
                  <p className="mt-0.5 text-[10px] text-white/65">
                    <E id={`d09s1.d${i}`}>{s.d}</E>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2 pt-4">
              <div className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#1F2937]">
                <E id="d09s1.cta">DM "HELLO"</E>
              </div>
              <E id="d09s1.note" className="text-[10px] text-white/65">we reply &lt; 24h</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "sf-2",
      render: () => (
        <FeedShell background="bg-white" footerId="d09s2.footer">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d09s2.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-[#6B7280]">Pricing · 02</E>
            </div>
            <E id="d09s2.kicker" className="mt-5 font-mono-code text-[10px] uppercase tracking-[0.3em] text-[#4FB7C5]">Transparent pricing</E>
            <h2 className="mt-2 font-display text-[26px] leading-[1.05] text-foreground">
              <E id="d09s2.title">Pilih paket yang sesuai project kamu.</E>
            </h2>

            <div className="mt-5 flex-1 space-y-2.5">
              {[
                { t: "Starter", p: "Rp 8jt", d: "1 page · landing · launch 7 hari" },
                { t: "Growth", p: "Rp 22jt", d: "5 page · CMS · animasi halus", featured: true },
                { t: "Scale", p: "Custom", d: "Multi-page · integrasi · ongoing" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between rounded-2xl p-3 ring-1 ${
                    s.featured
                      ? "bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB] ring-[#4FB7C5]/30 shadow-soft"
                      : "bg-[#F5F7F8] ring-black/5"
                  }`}
                >
                  <div>
                    <p className="font-display text-[14px] font-semibold text-foreground">
                      <E id={`d09s2.t${i}`}>{s.t}</E>
                    </p>
                    <p className="mt-0.5 text-[10.5px] text-foreground/65">
                      <E id={`d09s2.d${i}`}>{s.d}</E>
                    </p>
                  </div>
                  <p className="font-display text-[18px] font-semibold text-foreground">
                    <E id={`d09s2.p${i}`}>{s.p}</E>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10px] text-[#6B7280]">
              <E id="d09s2.hint">DM untuk penawaran khusus tim & startup ✨</E>
            </div>
          </div>
        </FeedShell>
      ),
    },
    {
      id: "sf-3",
      render: () => (
        <FeedShell background="bg-gradient-to-br from-[#EAE5C9] to-[#6CC6CB]" footerId="d09s3.footer">
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between">
              <BrandTag />
              <E id="d09s3.tag" className="font-mono-code text-[10px] uppercase tracking-widest text-foreground/60">Contact · 03</E>
            </div>

            <div className="mt-auto">
              <E id="d09s3.kicker" className="font-mono-code text-[10px] uppercase tracking-[0.4em] text-foreground/60">Let's talk</E>
              <h2 className="mt-3 font-display text-[40px] font-semibold leading-[0.95] text-foreground">
                <E id="d09s3.title" multiline>{`Bangun corner\ndigitalmu\nbersama kami.`}</E>
              </h2>
              <p className="mt-3 max-w-[80%] text-[12px] leading-relaxed text-foreground/75">
                <E id="d09s3.desc">Free 30-min discovery call. Tidak ada hard-sell — kami dengar dulu.</E>
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <div className="rounded-full bg-[#1F2937] px-4 py-2 text-[11px] font-semibold text-white">
                  <E id="d09s3.cta1">Book a call →</E>
                </div>
                <div className="rounded-full bg-white/70 px-4 py-2 text-[11px] font-semibold text-foreground ring-1 ring-black/5 backdrop-blur-md">
                  <E id="d09s3.cta2">hi@bytecorner.id</E>
                </div>
              </div>
            </div>
          </div>
        </FeedShell>
      ),
    },
  ],
};

export const DESIGNS: DesignSet[] = [D01, D02, D03, D04, D05, D06, D07, D08, D09];