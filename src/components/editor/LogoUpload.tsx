import { useRef } from "react";
import { Upload, X, Image as ImgIcon } from "lucide-react";
import { useLogo } from "./useLogo";

export const LogoUpload = () => {
  const { logo, setLogo } = useLogo();
  const inputRef = useRef<HTMLInputElement>(null);

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div className="glass shadow-soft flex items-center gap-3 rounded-2xl p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/5">
        {logo ? (
          <img src={logo} alt="logo" className="h-full w-full object-contain p-1" />
        ) : (
          <ImgIcon className="h-4 w-4 text-foreground/50" />
        )}
      </div>
      <div className="flex-1">
        <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-foreground/60">
          Global Logo
        </p>
        <p className="text-[11px] text-foreground/70">
          {logo ? "Used across all designs" : "Upload once, used everywhere"}
        </p>
      </div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#EAE5C9] to-[#6CC6CB] px-3 py-1.5 text-[11px] font-semibold text-[#1F2937] shadow-soft transition hover:opacity-90"
      >
        <Upload className="h-3 w-3" />
        {logo ? "Replace" : "Upload"}
      </button>
      {logo && (
        <button
          type="button"
          onClick={() => setLogo(null)}
          className="rounded-full bg-foreground/5 p-1.5 text-foreground/60 hover:bg-foreground/10"
          aria-label="Remove logo"
        >
          <X className="h-3 w-3" />
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onPick} />
    </div>
  );
};

/** Renders the user-uploaded logo safely contained in a square box.
 *  Falls back to a "B" badge when no logo is uploaded. */
export const BrandLogoMark = ({
  size = 24,
  light = false,
  rounded = "rounded-md",
  fallbackText = "B",
}: {
  size?: number;
  light?: boolean;
  rounded?: string;
  fallbackText?: string;
}) => {
  const { logo } = useLogo();
  const style = { width: size, height: size };
  if (logo) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden ${rounded} ${
          light ? "bg-white/95" : "bg-white"
        } shadow-soft ring-1 ring-black/5`}
        style={style}
      >
        <img
          src={logo}
          alt="ByteCorner logo"
          className="h-full w-full object-contain"
          style={{ padding: Math.max(2, size * 0.08) }}
          crossOrigin="anonymous"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center ${rounded} bg-brand-aqua font-bold text-white shadow-soft`}
      style={{ ...style, fontSize: Math.max(8, size * 0.45) }}
    >
      {fallbackText}
    </div>
  );
};
