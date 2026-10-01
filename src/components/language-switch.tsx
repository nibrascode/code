import { useEffect, useRef, useState } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { LANGS, LANG_META, type Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { hrefForLang } from "@/lib/pdf-pairs";
import { cn } from "@/lib/utils";

export function LanguageSwitch() {
  const { lang, setLang, t } = useI18n();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (code: Lang) => {
    setLang(code);
    const href = hrefForLang(pathname, code);
    if (href && href !== pathname) router.history.push(href);
  };

  return (
    <div ref={rootRef} className="lang-menu">
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang_label")}
        onClick={() => setOpen((value) => !value)}
      >
        {LANG_META[lang].label}
        <ChevronDown className={cn("lang-chev", open && "is-open")} />
      </button>
      {open ? (
        <div className="lang-pop" role="listbox" aria-label={t("lang_label")}>
          {LANGS.map((code) => {
            const active = lang === code;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  choose(code);
                  setOpen(false);
                }}
              >
                <b>{LANG_META[code].label}</b>
                <span>{LANG_META[code].native}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
