import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark, Grid3x3, MoreHorizontal, Trash2, X } from "lucide-react";
import { usePosts, type SavedPost } from "./usePosts";
import { BrandLogoMark } from "@/components/editor/LogoUpload";

const formatDate = (ts: number) => {
  const d = new Date(ts);
  const now = Date.now();
  const diff = (now - ts) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
  return d.toLocaleDateString();
};

export const InstagramProfile = () => {
  const { posts, removePost, clearAll } = usePosts();
  const [openId, setOpenId] = useState<string | null>(null);
  const open = posts.find((p) => p.id === openId) ?? null;

  return (
    <div className="rounded-3xl bg-white shadow-card ring-1 ring-black/5 overflow-hidden">
      {/* Top bar — Instagram-style */}
      <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-3">
        <p className="font-display text-[15px] font-semibold text-[#1F2937]">bytecorner.id</p>
        <button
          type="button"
          onClick={() => {
            if (confirm("Clear all saved posts?")) clearAll();
          }}
          className="text-foreground/40 hover:text-foreground/70"
          aria-label="More"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Profile header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-6 md:gap-12">
          {/* Avatar with gradient ring */}
          <div className="relative shrink-0">
            <div className="rounded-full bg-gradient-to-tr from-[#EAE5C9] via-[#6CC6CB] to-[#4FB7C5] p-[3px]">
              <div className="rounded-full bg-white p-[3px]">
                <div className="h-20 w-20 md:h-28 md:w-28 overflow-hidden rounded-full bg-white flex items-center justify-center ring-1 ring-black/5">
                  <BrandLogoMark size={112} rounded="rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <p className="font-display text-[18px] text-[#1F2937]">bytecorner.id</p>
              <button className="rounded-lg bg-[#0095F6] px-4 py-1 text-[12px] font-semibold text-white">
                Follow
              </button>
              <button className="rounded-lg bg-foreground/5 px-4 py-1 text-[12px] font-semibold text-[#1F2937]">
                Message
              </button>
            </div>
            <div className="flex gap-6 text-[13px] text-[#1F2937]">
              <div><span className="font-semibold">{posts.length}</span> <span className="text-foreground/70">posts</span></div>
              <div><span className="font-semibold">12.4k</span> <span className="text-foreground/70">followers</span></div>
              <div><span className="font-semibold">328</span> <span className="text-foreground/70">following</span></div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-5 max-w-xl text-[13px] leading-relaxed text-[#1F2937]">
          <p className="font-semibold">ByteCorner.id · Digital Studio</p>
          <p className="text-foreground/80">
            Brand · Websites · Digital products
            <br />
            We design digital corners that feel like home.
          </p>
          <p className="mt-1 text-[#0095F6]">bytecorner.id</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex items-center justify-center gap-12 border-t border-foreground/10">
        <button className="flex items-center gap-2 border-t-2 border-[#1F2937] py-3 text-[11px] font-semibold uppercase tracking-widest text-[#1F2937]">
          <Grid3x3 className="h-3.5 w-3.5" /> Posts
        </button>
      </div>

      {/* Grid */}
      {posts.length === 0 ? (
        <div className="px-6 py-20 text-center">
          <div className="mx-auto h-16 w-16 rounded-full ring-2 ring-[#1F2937]/80 flex items-center justify-center">
            <Grid3x3 className="h-7 w-7 text-[#1F2937]" />
          </div>
          <h3 className="mt-5 font-display text-[26px] font-semibold text-[#1F2937]">No Posts Yet</h3>
          <p className="mt-2 text-[13px] text-foreground/60">
            Use the <span className="font-semibold">Post slide</span> or <span className="font-semibold">Post carousel</span> buttons under any design above to publish to your profile.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1 p-1">
          {posts.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpenId(p.id)}
              className="group relative aspect-[4/5] overflow-hidden bg-foreground/5"
            >
              <img
                src={p.images[0]}
                alt={p.designLabel}
                className="h-full w-full object-cover transition group-hover:opacity-90"
              />
              {p.images.length > 1 && (
                <div className="absolute right-2 top-2 text-white drop-shadow">
                  <CarouselIcon />
                </div>
              )}
              <div className="absolute inset-0 hidden items-center justify-center gap-4 bg-black/30 text-white text-[13px] font-semibold group-hover:flex">
                <span className="flex items-center gap-1"><Heart className="h-4 w-4 fill-white" /> {(123 + p.id.charCodeAt(5) % 800)}</span>
                <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4 fill-white" /> {12 + p.id.charCodeAt(7) % 60}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {open && (
        <PostViewer post={open} onClose={() => setOpenId(null)} onDelete={() => { removePost(open.id); setOpenId(null); }} />
      )}
    </div>
  );
};

const CarouselIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="7" width="13" height="13" rx="2" />
    <path d="M4 16V6a2 2 0 0 1 2-2h10" />
  </svg>
);

const PostViewer = ({ post, onClose, onDelete }: { post: SavedPost; onClose: () => void; onDelete: () => void }) => {
  const [idx, setIdx] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => Math.min(i + 1, post.images.length - 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [post.images.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="flex max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image side */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-w-0">
          <img
            src={post.images[idx]}
            alt={`${post.designLabel} ${idx + 1}`}
            className="max-h-[92vh] w-full object-contain"
          />
          {post.images.length > 1 && (
            <>
              {idx > 0 && (
                <button
                  onClick={() => setIdx(idx - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-[#1F2937] shadow-soft hover:bg-white"
                  aria-label="Prev"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {idx < post.images.length - 1 && (
                <button
                  onClick={() => setIdx(idx + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-[#1F2937] shadow-soft hover:bg-white"
                  aria-label="Next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {post.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition ${i === idx ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-semibold text-white">
                {idx + 1}/{post.images.length}
              </div>
            </>
          )}
        </div>

        {/* Side panel — Instagram-like */}
        <aside className="hidden w-[340px] flex-col border-l border-foreground/10 md:flex">
          <div className="flex items-center gap-3 border-b border-foreground/10 px-4 py-3">
            <BrandLogoMark size={32} rounded="rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#1F2937]">bytecorner.id</p>
              <p className="text-[11px] text-foreground/60 truncate">{post.designLabel}</p>
            </div>
            <button
              onClick={onDelete}
              className="rounded-full p-1.5 text-foreground/50 hover:bg-foreground/5 hover:text-red-500"
              aria-label="Delete post"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 text-[13px]">
            <p className="text-[#1F2937]">
              <span className="font-semibold">bytecorner.id</span>{" "}
              <span className="text-foreground/80">
                {post.caption ?? `${post.designLabel} — crafted at ByteCorner.`}
              </span>
            </p>
            <p className="mt-2 text-[#0095F6] text-[13px]">
              #bytecorner #design #digitalstudio
            </p>
          </div>

          <div className="border-t border-foreground/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setLiked((v) => !v)} aria-label="Like">
                  <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : "text-[#1F2937]"}`} />
                </button>
                <MessageCircle className="h-6 w-6 text-[#1F2937]" />
                <Send className="h-6 w-6 text-[#1F2937]" />
              </div>
              <Bookmark className="h-6 w-6 text-[#1F2937]" />
            </div>
            <p className="mt-2 text-[13px] font-semibold text-[#1F2937]">{liked ? "1,248" : "1,247"} likes</p>
            <p className="mt-1 font-mono-code text-[10px] uppercase tracking-widest text-foreground/50">
              {formatDate(post.createdAt)}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
