import { useState } from "react";
import { FileDown, Link2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const T: Record<Lang, { link: string; copied: string; pdf: string }> = {
  az: { link: "Hesabat linkini kopyala", copied: "Link kopyalandı", pdf: "Nəticəni PDF kimi endir" },
  en: { link: "Copy report link", copied: "Link copied", pdf: "Download result as PDF" },
  tr: { link: "Rapor linkini kopyala", copied: "Link kopyalandı", pdf: "Sonucu PDF olarak indir" },
  ar: { link: "انسخ رابط التقرير", copied: "تم نسخ الرابط", pdf: "نزّل النتيجة PDF" },
  ru: { link: "Копировать ссылку на отчёт", copied: "Ссылка скопирована", pdf: "Скачать результат в PDF" },
};

/** Share bar for check tools: a link that re-runs the same check, and print-to-PDF of the report. */
export function ShareReport({ lang, params, className = "" }: { lang: Lang; params: Record<string, string>; className?: string }) {
  const t = T[lang] ?? T.en;
  const [done, setDone] = useState(false);
  const link = () => {
    const u = new URL(location.pathname, location.origin);
    for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
    return u.toString();
  };
  const copy = async () => {
    const href = link();
    try {
      if (navigator.share && matchMedia("(pointer: coarse)").matches) await navigator.share({ url: href, title: document.title });
      else await navigator.clipboard.writeText(href);
    } catch {
      await navigator.clipboard.writeText(href).catch(() => {});
    }
    history.replaceState(null, "", href);
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  };
  const btn = "inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm font-semibold hover:bg-white/10";
  return (
    <div className={"nx-share-report flex flex-wrap gap-2 " + className} data-testid="share-report">
      <button type="button" className={btn} onClick={() => void copy()}><Link2 className="size-4" /> {done ? t.copied : t.link}</button>
      <button type="button" className={btn} onClick={() => window.print()}><FileDown className="size-4" /> {t.pdf}</button>
    </div>
  );
}
