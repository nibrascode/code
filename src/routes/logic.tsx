import { useEffect, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";
import { NextLinks } from "@/components/next-links";
import { MAX_STEPS, decodeTree, encodeTree, sampleTree, tokenFromHash, type Step } from "@/lib/logic-tree";

export const Route = createFileRoute("/logic")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/logic"), replace: true });
  },
  component: LogicPage,
});

const COPY: Record<Lang, {
  h1: string; lead: string; q: string; a: string; b: string; to: string; end: string; add: string; remove: string;
  try: string; link: string; copied: string; edit: string; restart: string; done: string; loop: string; step: string;
}> = {
  az: { h1: "Nibras Logic", lead: "Sual yaz, hər suala iki cavab ver. Cavab növbəti suala və ya sona gedir. Sonra yolu özün gəz. Link ünvanın içindədir, heç nə saxlanmır.", q: "Sual", a: "Cavab A", b: "Cavab B", to: "Gedər", end: "Son", add: "Sual əlavə et", remove: "Sil", try: "Yoxla", link: "Linki kopyala", copied: "Kopyalandı", edit: "Dəyiş", restart: "Başa qayıt", done: "Bu sondur.", loop: "Eyni yerə döndün. Başdan başla.", step: "Sual" },
  en: { h1: "Nibras Logic", lead: "Write a question and give it two answers. An answer goes to the next question or to the end. Then walk the path. The link is in the address. Nothing is stored.", q: "Question", a: "Answer A", b: "Answer B", to: "Goes to", end: "End", add: "Add a question", remove: "Remove", try: "Try", link: "Copy link", copied: "Copied", edit: "Edit", restart: "Start over", done: "This is the end.", loop: "You returned to the same place. Start over.", step: "Question" },
  tr: { h1: "Nibras Logic", lead: "Soru yaz, her soruya iki cevap ver. Cevap sonraki soruya ya da sona gider. Sonra yolu kendin gez. Bağlantı adresin içindedir, hiçbir şey saklanmaz.", q: "Soru", a: "Cevap A", b: "Cevap B", to: "Gider", end: "Son", add: "Soru ekle", remove: "Sil", try: "Dene", link: "Bağlantıyı kopyala", copied: "Kopyalandı", edit: "Değiştir", restart: "Başa dön", done: "Bu sondur.", loop: "Aynı yere döndün. Baştan başla.", step: "Soru" },
  ar: { h1: "Nibras Logic", lead: "اكتب سؤالاً وأعطه جوابين. الجواب يذهب إلى السؤال التالي أو إلى النهاية. ثم اسلك الطريق. الرابط داخل العنوان ولا يُحفظ شيء.", q: "سؤال", a: "جواب أ", b: "جواب ب", to: "يذهب إلى", end: "النهاية", add: "أضف سؤالاً", remove: "احذف", try: "جرّب", link: "انسخ الرابط", copied: "تم النسخ", edit: "عدّل", restart: "من البداية", done: "هذه النهاية.", loop: "عدت إلى المكان نفسه. ابدأ من جديد.", step: "سؤال" },
  ru: { h1: "Nibras Logic", lead: "Напишите вопрос и дайте два ответа. Ответ ведёт к следующему вопросу или к концу. Потом пройдите путь. Ссылка внутри адреса, ничего не сохраняется.", q: "Вопрос", a: "Ответ А", b: "Ответ Б", to: "Ведёт", end: "Конец", add: "Добавить вопрос", remove: "Удалить", try: "Проверить", link: "Копировать ссылку", copied: "Скопировано", edit: "Изменить", restart: "Сначала", done: "Это конец.", loop: "Вы вернулись на то же место. Начните сначала.", step: "Вопрос" },
};

function writeHash(steps: Step[]) {
  const next = `#t=${encodeTree(steps)}`;
  if (window.location.hash !== next) window.history.replaceState(null, "", next);
  return `${window.location.origin}${window.location.pathname}${window.location.search}${next}`;
}

export function LogicPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/logic"];
  const [steps, setSteps] = useState<Step[]>(() => sampleTree(lang));
  const [mode, setMode] = useState<"edit" | "walk">("edit");
  const [at, setAt] = useState(0);
  const [seen, setSeen] = useState<number[]>([]);
  const [end, setEnd] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const shared = decodeTree(tokenFromHash(window.location.hash));
    if (!shared) return;
    setSteps(shared);
    setMode("walk");
  }, []);

  function update(index: number, next: Step) {
    setSteps((list) => list.map((item, i) => (i === index ? next : item)));
    setCopied(false);
  }

  function add() {
    setSteps((list) => (list.length >= MAX_STEPS ? list : [...list, { q: "", a: { t: "", to: null }, b: { t: "", to: null } }]));
  }

  function remove(index: number) {
    setSteps((list) => {
      if (list.length === 1) return list;
      return list.filter((_, i) => i !== index).map((step) => ({
        ...step,
        a: { ...step.a, to: step.a.to === null ? null : step.a.to === index ? null : step.a.to > index ? step.a.to - 1 : step.a.to },
        b: { ...step.b, to: step.b.to === null ? null : step.b.to === index ? null : step.b.to > index ? step.b.to - 1 : step.b.to },
      }));
    });
  }

  function choose(to: number | null, label: string) {
    if (to === null || !steps[to]) {
      setEnd(label || copy.done);
      return;
    }
    if (to === at || seen.includes(to) || seen.length > 12) {
      setEnd(copy.loop);
      return;
    }
    setSeen((list) => [...list, at]);
    setAt(to);
  }

  function restart(nextMode: "edit" | "walk") {
    setMode(nextMode);
    setAt(0);
    setSeen([]);
    setEnd("");
    setCopied(false);
  }

  async function share() {
    const url = writeHash(steps);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const step = steps[at] ?? steps[0];

  return (
    <main className="nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <span className="nx-tool-mark" aria-hidden="true"><b><i /><i /><i /><i /><i /><i /></b></span>
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      {mode === "edit" ? (
        <div className="nx-panel mb-8 grid gap-4">
          {steps.map((item, index) => (
            <fieldset key={index} className="grid gap-2 rounded-xl border border-white/10 p-3">
              <legend className="px-1 text-sm text-muted">{copy.step} {index + 1}</legend>
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" placeholder={copy.q} value={item.q} maxLength={80} onChange={(event) => update(index, { ...item, q: event.target.value })} />
              {(["a", "b"] as const).map((side) => (
                <div key={side} className="grid gap-2 sm:grid-cols-[1fr_9rem]">
                  <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" placeholder={copy[side]} value={item[side].t} maxLength={80} onChange={(event) => update(index, { ...item, [side]: { ...item[side], t: event.target.value } })} />
                  <select className="rounded-xl border border-white/15 bg-white/5 px-3 py-2" value={item[side].to === null ? "end" : String(item[side].to)} onChange={(event) => update(index, { ...item, [side]: { ...item[side], to: event.target.value === "end" ? null : Number(event.target.value) } })} aria-label={copy.to}>
                    <option value="end">{copy.end}</option>
                    {steps.map((_, other) => (
                      <option key={other} value={other}>{copy.step} {other + 1}</option>
                    ))}
                  </select>
                </div>
              ))}
              {steps.length > 1 ? <button type="button" className="w-fit text-sm text-muted" onClick={() => remove(index)}>{copy.remove}</button> : null}
            </fieldset>
          ))}
          <div className="nx-row">
            <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm" onClick={add} disabled={steps.length >= MAX_STEPS}>{copy.add}</button>
            <button type="button" className="nx-go rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white" onClick={() => { writeHash(steps); restart("walk"); }}>{copy.try}</button>
            <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm" onClick={share}>{copied ? copy.copied : copy.link}</button>
          </div>
        </div>
      ) : (
        <div className="nx-panel mb-8 grid gap-4">
          {end ? (
            <p className="text-lg">{end}</p>
          ) : (
            <>
              <p className="text-lg">{step?.q || `${copy.step} ${at + 1}`}</p>
              <div className="nx-row">
                <button type="button" className="nx-go rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white" onClick={() => choose(step.a.to, step.a.t)}>{step.a.t || copy.a}</button>
                <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm" onClick={() => choose(step.b.to, step.b.t)}>{step.b.t || copy.b}</button>
              </div>
            </>
          )}
          <div className="nx-row">
            <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm" onClick={() => restart("walk")}>{copy.restart}</button>
            <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm" onClick={() => restart("edit")}>{copy.edit}</button>
          </div>
        </div>
      )}
      <NextLinks
        links={[
          { href: "/flow", label: { az: "Plan hazırla", en: "Make a plan", tr: "Plan hazırla", ar: "جهّز خطة", ru: "Собрать план" } },
          { href: "/tools", label: { az: "Xidmətlər", en: "Tools", tr: "Araçlar", ar: "الأدوات", ru: "Сервисы" } },
        ]}
      />
      <section className="space-y-3" aria-labelledby="logic-faq">
        <h2 id="logic-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
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
