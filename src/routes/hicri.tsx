import { useMemo, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/hicri")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/hicri"), replace: true });
  },
  component: HijriPage,
});

const COPY: Record<Lang, { h1: string; lead: string; g2h: string; h2g: string; today: string; year: string; month: string; day: string; result: string; note: string; bad: string }> = {
  az: { h1: "Hicri tarix", lead: "Miladi tarixi Hicri təqvimə və əksinə çevir. Pulsuz, brauzerdə.", g2h: "Miladi → Hicri", h2g: "Hicri → Miladi", today: "Bu gün", year: "İl", month: "Ay", day: "Gün", result: "Nəticə", note: "Ümmül-Qura hesablamasına əsaslanır; yerli rəsmi təqvimdən 1 gün fərqlənə bilər.", bad: "Tarix tapılmadı" },
  en: { h1: "Hijri date", lead: "Convert a Gregorian date to the Hijri calendar and back. Free, in your browser.", g2h: "Gregorian → Hijri", h2g: "Hijri → Gregorian", today: "Today", year: "Year", month: "Month", day: "Day", result: "Result", note: "Based on the Umm al-Qura calculation; may differ by a day from a local official calendar.", bad: "Date not found" },
  tr: { h1: "Hicri tarih", lead: "Miladi tarihi Hicri takvime ve tersine çevir. Ücretsiz, tarayıcıda.", g2h: "Miladi → Hicri", h2g: "Hicri → Miladi", today: "Bugün", year: "Yıl", month: "Ay", day: "Gün", result: "Sonuç", note: "Ümmü'l-Kurâ hesabına dayanır; yerel resmî takvimden 1 gün farklı olabilir.", bad: "Tarih bulunamadı" },
  ar: { h1: "التاريخ الهجري", lead: "حوّل التاريخ الميلادي إلى الهجري والعكس. مجاناً وفي المتصفح.", g2h: "ميلادي ← هجري", h2g: "هجري ← ميلادي", today: "اليوم", year: "السنة", month: "الشهر", day: "اليوم", result: "النتيجة", note: "يعتمد على حساب أم القرى؛ قد يختلف بيوم عن التقويم الرسمي المحلي.", bad: "لم يُعثر على التاريخ" },
  ru: { h1: "Дата по хиджре", lead: "Переведите григорианскую дату в календарь хиджры и обратно. Бесплатно, в браузере.", g2h: "Григ. → Хиджра", h2g: "Хиджра → Григ.", today: "Сегодня", year: "Год", month: "Месяц", day: "День", result: "Результат", note: "По расчёту Умм аль-Кура; может отличаться на день от местного официального календаря.", bad: "Дата не найдена" },
};
const LOC: Record<Lang, string> = { az: "az", en: "en", tr: "tr", ar: "ar-SA", ru: "ru" };
const CAL = "islamic-umalqura";
const partsOf = (d: Date) => {
  const p = new Intl.DateTimeFormat("en-u-ca-" + CAL, { year: "numeric", month: "numeric", day: "numeric", timeZone: "UTC" }).formatToParts(d);
  const g = (t: string) => parseInt(p.find((x) => x.type === t)?.value ?? "0", 10);
  return { y: g("year"), m: g("month"), d: g("day") };
};
/** Finds the Gregorian day whose Umm al-Qura date is y/m/d (search around an estimate). */
function hijriToDate(y: number, m: number, d: number): Date | null {
  const est = Date.UTC(622, 6, 16) + ((y - 1) * 354.367 + (m - 1) * 29.53 + (d - 1)) * 864e5;
  for (let off = -40; off <= 40; off++) {
    const t = new Date(est + off * 864e5);
    const p = partsOf(t);
    if (p.y === y && p.m === m && p.d === d) return t;
  }
  return null;
}

export function HijriPage() {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.en;
  const todayIso = new Date().toISOString().slice(0, 10);
  const [g, setG] = useState(todayIso);
  const th = partsOf(new Date(todayIso + "T00:00:00Z"));
  const [h, setH] = useState(th);
  const fmtH = (d: Date) => new Intl.DateTimeFormat(LOC[lang] + "-u-ca-" + CAL, { dateStyle: "full", timeZone: "UTC" }).format(d);
  const fmtG = (d: Date) => new Intl.DateTimeFormat(LOC[lang] + "-u-ca-gregory", { dateStyle: "full", timeZone: "UTC" }).format(d);
  const gRes = useMemo(() => { const d = new Date(g + "T00:00:00Z"); return isNaN(+d) ? c.bad : fmtH(d); }, [g, lang]);
  const hRes = useMemo(() => { const d = hijriToDate(h.y, h.m, h.d); return d ? fmtG(d) : c.bad; }, [h, lang]);
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => { const d = hijriToDate(1447, i + 1, 1); return d ? new Intl.DateTimeFormat(LOC[lang] + "-u-ca-" + CAL, { month: "long", timeZone: "UTC" }).format(d) : String(i + 1); }), [lang]);
  const box = "rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-3";
  const inp = "rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm";
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{c.h1}</h1>
      <p className="mt-1 mb-6 text-sm text-muted">{c.lead}</p>
      <section className={box + " mb-4"}>
        <h2 className="font-semibold">{c.g2h}</h2>
        <div className="flex flex-wrap gap-2"><input type="date" className={inp} value={g} onChange={(e) => setG(e.target.value)} />
          <button type="button" className={inp} onClick={() => setG(todayIso)}>{c.today}</button></div>
        <p className="text-lg" data-testid="hijri-out">{gRes}</p>
      </section>
      <section className={box}>
        <h2 className="font-semibold">{c.h2g}</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <label className="grid gap-1">{c.day}<input type="number" min={1} max={30} className={inp + " w-20"} value={h.d} onChange={(e) => setH({ ...h, d: +e.target.value })} /></label>
          <label className="grid gap-1">{c.month}<select className={inp} value={h.m} onChange={(e) => setH({ ...h, m: +e.target.value })}>{months.map((n, i) => <option key={i} value={i + 1}>{i + 1}. {n}</option>)}</select></label>
          <label className="grid gap-1">{c.year}<input type="number" min={1300} max={1600} className={inp + " w-24"} value={h.y} onChange={(e) => setH({ ...h, y: +e.target.value })} /></label>
        </div>
        <p className="text-lg">{hRes}</p>
      </section>
      <p className="mt-4 text-xs text-subtle">{c.note}</p>
    </main>
  );
}
