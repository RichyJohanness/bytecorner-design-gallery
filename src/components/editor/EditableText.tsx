import { useRef, useEffect, KeyboardEvent, FocusEvent, CSSProperties } from "react";
import { X } from "lucide-react";
import { useSlide } from "./SlideContext";

interface Props {
  id: string;
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
  multiline?: boolean;
  /** When true, removable via × button (default true) */
  removable?: boolean;
}

export const EditableText = ({
  id,
  children,
  as = "span",
  className = "",
  style,
  multiline = false,
  removable = true,
}: Props) => {
  const { texts, hidden, setText, hide } = useSlide();
  const ref = useRef<HTMLElement>(null);
  const value = texts[id] ?? children;
  const isHidden = hidden[id];

  // Keep DOM in sync when external state changes (e.g., reset)
  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, [value]);

  if (isHidden) return null;

  const handleBlur = (e: FocusEvent<HTMLElement>) => {
    setText(id, e.currentTarget.innerText);
  };
  const handleKey = (e: KeyboardEvent<HTMLElement>) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
  };

  const Tag = as as any;
  return (
    <span className="group/edit relative inline-block max-w-full align-baseline" data-no-export-controls>
      <Tag
        ref={ref as any}
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        onKeyDown={handleKey}
        spellCheck={false}
        className={`outline-none focus:ring-2 focus:ring-[#4FB7C5]/60 focus:rounded-[6px] focus:bg-white/40 hover:ring-1 hover:ring-[#4FB7C5]/30 hover:rounded-[6px] transition-all ${className}`}
        style={style}
      >
        {value}
      </Tag>
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            hide(id);
          }}
          aria-label="Remove text"
          data-export-hide
          className="absolute -top-2 -right-2 z-20 hidden h-4 w-4 items-center justify-center rounded-full bg-[#1F2937] text-white shadow-soft hover:bg-red-500 group-hover/edit:flex"
        >
          <X className="h-2.5 w-2.5" />
        </button>
      )}
    </span>
  );
};