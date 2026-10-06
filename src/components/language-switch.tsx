import { useRouterState } from "@tanstack/react-router";
import { LANGS, LANG_META, STORAGE_KEY, type Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { hrefForLang } from "@/lib/pdf-pairs";

export function LanguageSwitch() {
  const { lang, t } = useI18n();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });

  const choose = (code: Lang) => {
    if (code === lang) return;
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
    const href = hrefForLang(pathname, code);
    const next = href ?? (code === "az" ? pathname : `${pathname}?lang=${code}`);
    const here = `${pathname}${searchStr ?? ""}`;
    if (next === here) return;
    window.location.assign(next);
  };

  return (
    <label className="lang-menu">
      <span className="sr-only">{t("lang_label")}</span>
      <select
        className="lang-pick"
        value={lang}
        aria-label={t("lang_label")}
        onChange={(event) => choose(event.target.value as Lang)}
      >
        {LANGS.map((code) => (
          <option key={code} value={code}>
            {LANG_META[code].label}
          </option>
        ))}
      </select>
    </label>
  );
}
