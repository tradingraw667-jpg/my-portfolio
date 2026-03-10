"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { type Lang, translations, type Translations } from "@/lib/translations";

interface LangContextValue {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("EN");

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    // Apply dir and lang to <html> for proper RTL rendering
    const dir = next === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = next.toLowerCase();
    document.documentElement.dir = dir;
  }, []);

  // Sync on first mount
  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
