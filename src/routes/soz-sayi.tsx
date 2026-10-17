import { useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";

export const Route = createFileRoute("/soz-sayi")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/soz-sayi"), replace: true });
  },
  component: WordCountPage,
});

const COPY: Record<Lang, { h1: string; lead: string; placeholder: string; words: string; chars: string; nospace: string; lines: string }> = {
  az: { h1: "Söz sayı", lead: "Mətndə neçə söz, hərf və sətir olduğunu say. Pulsuz, mətn brauzerdən çıxmır.", placeholder: "Mətni bura yaz", words: "Söz", chars: "Hərf", nospace: "Boşluqsuz", lines: "Sətir" },
  en: { h1: "Word count", lead: "Count the words, letters and lines in a text. Free, the text stays in your browser.", placeholder: "Write the text here", words: "Words", chars: "Characters", nospace: "No spaces", lines: "Lines" },
  tr: { h1: "Söz sayısı", lead: "Metinde kaç söz, harf ve satır olduğunu say. Ücretsiz, metin tarayıcıdan çıkmaz.", placeholder: "Metni buraya yaz", words: "Söz", chars: "Harf", nospace: "Boşluksuz", lines: "Satır" },
  ar: { h1: "عدد الكلمات", lead: "عدّ الكلمات والحروف والأسطر في النص. مجاناً، والنص يبقى في المتصفح.", placeholder: "اكتب النص هنا", words: "كلمة", chars: "حرف", nospace: "بلا فراغ", lines: "سطر" },
  ru: { h1: "Количество слов", lead: "Посчитайте слова, буквы и строки в тексте. Бесплатно, текст остаётся в браузере.", placeholder: "Напишите текст здесь", words: "Слова", chars: "Буквы", nospace: "Без пробелов", lines: "Строки" },
};

export function WordCountPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/soz-sayi"];
  const [text, setText] = useState("");
  const chars = Array.from(text).length;
  const nospace = Array.from(text.replace(/\s/g, "")).length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text.length ? text.split(/\n/).length : 0;
  const stats = [
    [copy.words, words],
    [copy.chars, chars],
    [copy.nospace, nospace],
    [copy.lines, lines],
  ] as const;

  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      <textarea
        className="mb-4 min-h-40 w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-sm"
        placeholder={copy.placeholder}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
            <div className="font-display text-2xl font-bold">{value}</div>
            <div className="mt-1 text-xs text-muted">{label}</div>
          </div>
        ))}
      </div>
      <section className="space-y-3" aria-labelledby="soz-faq">
        <h2 id="soz-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
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
