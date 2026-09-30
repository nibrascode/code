import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  LANGS,
  STORAGE_KEY,
  translations,
  type Lang,
  type TKey,
} from "@/lib/i18n";
import { langFromLocation } from "@/lib/seo";

type I18nValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: (key: TKey) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

function isLang(value: string | null): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

function applyDocumentLang(lang: Lang) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const urlLang = langFromLocation(pathname, searchStr);
  const pathLocked =
    pathname === "/ru" ||
    pathname.startsWith("/ru/") ||
    pathname.startsWith("/en/") ||
    pathname.startsWith("/tr/") ||
    pathname.startsWith("/ar/");
  const urlHasLang = pathLocked || new URLSearchParams(searchStr.replace(/^\?/, "")).has("lang");
  const [lang, setLangState] = useState<Lang>(urlLang);

  useEffect(() => {
    if (urlHasLang) {
      applyDocumentLang(urlLang);
      return;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) {
        setLangState(stored);
        applyDocumentLang(stored);
        return;
      }
    } catch {
      /* ignore */
    }
    applyDocumentLang(urlLang);
  }, [urlHasLang, urlLang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyDocumentLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(() => {
    const dict = translations[lang];
    return {
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      t: (key) => dict[key],
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
