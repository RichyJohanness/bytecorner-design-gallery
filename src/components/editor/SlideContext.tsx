import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type SlideStore = {
  texts: Record<string, string>;
  hidden: Record<string, boolean>;
  images: Record<string, string>;
  setText: (id: string, v: string) => void;
  hide: (id: string) => void;
  setImage: (id: string, dataUrl: string) => void;
};

const SlideCtx = createContext<SlideStore | null>(null);

export const SlideProvider = ({ children }: { children: ReactNode }) => {
  const [texts, setTexts] = useState<Record<string, string>>({});
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const [images, setImages] = useState<Record<string, string>>({});

  const setText = useCallback((id: string, v: string) => {
    setTexts((p) => ({ ...p, [id]: v }));
  }, []);
  const hide = useCallback((id: string) => {
    setHidden((p) => ({ ...p, [id]: true }));
  }, []);
  const setImage = useCallback((id: string, dataUrl: string) => {
    setImages((p) => ({ ...p, [id]: dataUrl }));
  }, []);

  return (
    <SlideCtx.Provider value={{ texts, hidden, images, setText, hide, setImage }}>
      {children}
    </SlideCtx.Provider>
  );
};

export const useSlide = () => {
  const ctx = useContext(SlideCtx);
  if (!ctx) throw new Error("useSlide must be used inside SlideProvider");
  return ctx;
};