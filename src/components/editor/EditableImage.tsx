import { useRef, ReactNode } from "react";
import { Upload } from "lucide-react";
import { useSlide } from "./SlideContext";

interface Props {
  id: string;
  /** Fallback content (mock graphic) when no image uploaded */
  fallback: ReactNode;
  className?: string;
  rounded?: string;
}

export const EditableImage = ({ id, fallback, className = "", rounded = "rounded-2xl" }: Props) => {
  const { images, setImage } = useSlide();
  const inputRef = useRef<HTMLInputElement>(null);
  const src = images[id];

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(id, reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className={`group/img relative overflow-hidden ${rounded} ${className}`}>
      {src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      ) : (
        <div className="absolute inset-0">{fallback}</div>
      )}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        data-export-hide
        className="absolute bottom-2 right-2 z-20 hidden items-center gap-1 rounded-full bg-[#1F2937]/90 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md transition group-hover/img:flex hover:bg-[#4FB7C5]"
      >
        <Upload className="h-3 w-3" />
        Replace
      </button>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onPick} />
    </div>
  );
};