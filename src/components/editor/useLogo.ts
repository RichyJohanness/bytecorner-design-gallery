import { useEffect, useState, useCallback } from "react";

const KEY = "bytecorner.logo";
const EVT = "bytecorner-logo-change";

export const useLogo = () => {
  const [logo, setLogoState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handler = () => {
      try {
        setLogoState(localStorage.getItem(KEY));
      } catch {
        setLogoState(null);
      }
    };
    window.addEventListener(EVT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const setLogo = useCallback((dataUrl: string | null) => {
    try {
      if (dataUrl) localStorage.setItem(KEY, dataUrl);
      else localStorage.removeItem(KEY);
    } catch {}
    setLogoState(dataUrl);
    window.dispatchEvent(new Event(EVT));
  }, []);

  return { logo, setLogo };
};
