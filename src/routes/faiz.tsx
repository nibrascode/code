import { useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";

export const Route = createFileRoute("/faiz")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/faiz"), replace: true });
  },
  component: PercentPage,
});

const COPY: Record<Lang, { h1: string; lead: string; rate: string; of: string; result: string; part: string; whole: string; share: string }> = {
  az: { h1: "Faiz hesabla", lead: "Faizin nəticəsini və bir ədədin neçə faiz olduğunu hesabla. Pulsuz, hesabsız.", rate: "Faiz", of: "Ədəd", result: "Nəticə", part: "Bu ədəd", whole: "Bundan", share: "Neçə faizdir" },
  en: { h1: "Calculate a percent", lead: "Find a percent of a number, and what percent one number is of another. Free, no account.", rate: "Percent", of: "Number", result: "Result", part: "This number", whole: "Of this", share: "What percent" },
  tr: { h1: "Yüzde hesapla", lead: "Yüzdenin sonucunu ve bir sayının yüzde kaç olduğunu hesapla. Ücretsiz, hesapsız.", rate: "Yüzde", of: "Sayı", result: "Sonuç", part: "Bu sayı", whole: "Bundan", share: "Yüzde kaç" },
  ar: { h1: "احسب النسبة", lead: "احسب ناتج النسبة وكم بالمئة عدد من آخر. مجاناً وبلا حساب.", rate: "النسبة", of: "العدد", result: "النتيجة", part: "هذا العدد", whole: "من هذا", share: "كم بالمئة" },
  ru: { h1: "Посчитать процент", lead: "Найдите процент от числа и сколько процентов одно число составляет от другого. Бесплатно, без аккаунта.", rate: "Процент", of: "Число", result: "Результат", part: "Это число", whole: "От этого", share: "Сколько процентов" },
};

function num(value: string) {
  const next = Number(value.replace(",", "."));
  return Number.isFinite(next) ? next : NaN;
}

function show(value: number) {
  if (!Number.isFinite(value)) return "—";
  return String(Math.round(value * 100) / 100);
}

export function PercentPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/faiz"];
  const [rate, setRate] = useState("15");
  const [whole, setWhole] = useState("200");
  const [part, setPart] = useState("30");
  const [base, setBase] = useState("200");
  const amount = (num(rate) * num(whole)) / 100;
  const share = num(base) ? (num(part) / num(base)) * 100 : NaN;

  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.rate}</span>
          <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.of}</span>
          <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" inputMode="decimal" value={whole} onChange={(event) => setWhole(event.target.value)} />
        </label>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
          <div className="text-muted">{copy.result}</div>
          <div className="font-display text-2xl font-bold">{show(amount)}</div>
        </div>
      </div>
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.part}</span>
          <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" inputMode="decimal" value={part} onChange={(event) => setPart(event.target.value)} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.whole}</span>
          <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" inputMode="decimal" value={base} onChange={(event) => setBase(event.target.value)} />
        </label>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
          <div className="text-muted">{copy.share}</div>
          <div className="font-display text-2xl font-bold">{show(share)}%</div>
        </div>
      </div>
      <section className="space-y-3" aria-labelledby="faiz-faq">
        <h2 id="faiz-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
        {faq.items[lang].map((item) => (
          <div key={item.q}>
            <h3 className="text-sm font-semibold">{item.q}</h3>
            <p className="mt-1 text-sm text-muted">{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
