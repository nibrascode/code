// Side-by-side red/green word diff for /pdf/compare (in-page, browser only).
import { useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { DiffResult, Seg } from "./lib/wordDiff";
import { btn } from "./ui";

const L: Record<Lang, { prev: string; next: string; of: string; only: string; all: string; credit: string; none: string }> = {
  az: { prev: "Əvvəlki", next: "Növbəti", of: "/", only: "Yalnız fərqlər", all: "Hamısı", credit: "Fərq üsulu docdiff (MIT) əsasında uyğunlaşdırılıb", none: "Fərq yoxdur — mətn eynidir." },
  en: { prev: "Previous", next: "Next", of: "/", only: "Changes only", all: "Everything", credit: "Diff approach adapted from docdiff (MIT)", none: "No differences — the text is identical." },
  tr: { prev: "Önceki", next: "Sonraki", of: "/", only: "Sadece farklar", all: "Tümü", credit: "Fark yöntemi docdiff (MIT) temel alınarak uyarlandı", none: "Fark yok — metin aynı." },
  ar: { prev: "السابق", next: "التالي", of: "/", only: "الفروق فقط", all: "الكل", credit: "طريقة المقارنة مقتبسة من docdiff (MIT)", none: "لا فروق — النص متطابق." },
  ru: { prev: "Назад", next: "Далее", of: "/", only: "Только изменения", all: "Всё", credit: "Метод сравнения адаптирован из docdiff (MIT)", none: "Различий нет — текст совпадает." },
};

function Side({ segs }: { segs: Seg[] }) {
  return (
    <>{segs.map((s, i) => s.op === 0 ? <span key={i}>{s.t}</span>
      : s.op === -1 ? <del key={i} data-c={s.c} className="rounded bg-red-500/20 px-0.5 text-red-300 decoration-red-400/70">{s.t}</del>
      : <ins key={i} data-c={s.c} className="rounded bg-emerald-500/20 px-0.5 text-emerald-300 no-underline">{s.t}</ins>)}</>
  );
}

export function CompareView({ result, nameA, nameB, lang }: { result: DiffResult; nameA: string; nameB: string; lang: Lang }) {
  const w = L[lang] ?? L.en;
  const box = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(-1);
  const [onlyCh, setOnlyCh] = useState(false);
  const rows = useMemo(() => (onlyCh ? result.rows.filter((r) => r.changed) : result.rows), [result, onlyCh]);
  const go = (d: number) => {
    if (!result.changes) return;
    const n = (cur + d + result.changes) % result.changes;
    setCur(n);
    const root = box.current;
    if (!root) return;
    root.querySelectorAll("[data-active]").forEach((e) => e.removeAttribute("data-active"));
    const els = root.querySelectorAll(`[data-c="${n}"]`);
    els.forEach((e) => e.setAttribute("data-active", ""));
    els[0]?.scrollIntoView({ block: "center", behavior: "smooth" });
  };
  if (!result.changes) return <p className="text-sm text-emerald-300" data-testid="compare-same">{w.none}</p>;
  return (
    <div className="space-y-2" data-testid="compare-view">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <button type="button" className={btn} onClick={() => go(-1)}><ChevronUp className="size-4" />{w.prev}</button>
        <button type="button" className={btn} onClick={() => go(1)} data-testid="compare-next"><ChevronDown className="size-4" />{w.next}</button>
        <span className="tabular-nums text-muted">{cur + 1 > 0 ? cur + 1 : "–"} {w.of} {result.changes}</span>
        <span className="text-red-300">−{result.removed}</span><span className="text-emerald-300">+{result.added}</span>
        <label className="ms-auto flex items-center gap-1 text-muted"><input type="checkbox" checked={onlyCh} onChange={(e) => setOnlyCh(e.target.checked)} />{w.only}</label>
      </div>
      <div ref={box} className="max-h-[70vh] overflow-auto rounded-xl border border-[var(--pdf-edge,var(--color-border))] text-sm leading-relaxed [&_[data-active]]:outline [&_[data-active]]:outline-2 [&_[data-active]]:outline-amber-400">
        <div className="sticky top-0 z-10 grid grid-cols-2 bg-bg-elevated text-xs font-semibold">
          <div className="truncate border-e border-border px-3 py-2 text-red-300">− {nameA}</div>
          <div className="truncate px-3 py-2 text-emerald-300">+ {nameB}</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`grid grid-cols-2 border-t border-border/50 ${r.changed ? "bg-amber-400/5" : ""}`}>
            <div className="whitespace-pre-wrap break-words border-e border-border/50 px-3 py-1.5 [unicode-bidi:plaintext]"><Side segs={r.a} /></div>
            <div className="whitespace-pre-wrap break-words px-3 py-1.5 [unicode-bidi:plaintext]"><Side segs={r.b} /></div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted"><a className="underline" href="https://github.com/tschnorpfeil/docdiff" target="_blank" rel="noreferrer">{w.credit}</a></p>
    </div>
  );
}
