import { useMemo, useState, type FormEvent } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";
import { NextLinks } from "@/components/next-links";
import { planFromIdea } from "@/lib/flow-plan";

export const Route = createFileRoute("/flow")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/flow"), replace: true });
  },
  component: FlowPage,
});

const COPY: Record<Lang, { h1: string; lead: string; label: string; button: string; kind: string; pages: string; tree: string; steps: string; files: string; copy: string; copied: string }> = {
  az: { h1: "Nibras Flow", lead: "İdeyanı yaz. Səhifələrin xəritəsi, qovluq, iş sırası və başlanğıc fayl adları burada qurulur. Kod yazılmır və heç yerə göndərilmir.", label: "İdeya", button: "Plan qur", kind: "Növ", pages: "Səhifələr", tree: "Qovluq", steps: "İş sırası", files: "Fayllar", copy: "Kopyala", copied: "Kopyalandı" },
  en: { h1: "Nibras Flow", lead: "Write the idea. The page map, folders, work order, and starter file names are built here. No code is written and nothing is sent.", label: "Idea", button: "Make a plan", kind: "Kind", pages: "Pages", tree: "Folders", steps: "Work order", files: "Files", copy: "Copy", copied: "Copied" },
  tr: { h1: "Nibras Flow", lead: "Fikri yaz. Sayfa haritası, klasör, iş sırası ve başlangıç dosya adları burada kurulur. Kod yazılmaz ve hiçbir yere gönderilmez.", label: "Fikir", button: "Plan kur", kind: "Tür", pages: "Sayfalar", tree: "Klasör", steps: "İş sırası", files: "Dosyalar", copy: "Kopyala", copied: "Kopyalandı" },
  ar: { h1: "Nibras Flow", lead: "اكتب الفكرة. تُبنى هنا خريطة الصفحات والمجلدات وترتيب العمل وأسماء الملفات الأولى. لا يُكتب كود ولا يُرسل شيء.", label: "الفكرة", button: "ابنِ الخطة", kind: "النوع", pages: "الصفحات", tree: "المجلدات", steps: "ترتيب العمل", files: "الملفات", copy: "انسخ", copied: "تم النسخ" },
  ru: { h1: "Nibras Flow", lead: "Напишите идею. Карта страниц, папки, порядок работы и имена начальных файлов собираются здесь. Код не пишется и никуда не отправляется.", label: "Идея", button: "Собрать план", kind: "Вид", pages: "Страницы", tree: "Папки", steps: "Порядок работы", files: "Файлы", copy: "Копировать", copied: "Скопировано" },
};

export function FlowPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/flow"];
  const [idea, setIdea] = useState("");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const plan = useMemo(() => (ready ? planFromIdea(idea, lang) : null), [ready, idea, lang]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setCopied(false);
    setReady(true);
  }

  async function onCopy() {
    if (!plan) return;
    const text = [plan.name, plan.kindLabel, "", ...plan.pages.map((page) => `${page.path}  ${page.name}  ${page.job}`), "", plan.tree, "", ...plan.steps, "", ...plan.files.map((file) => `${file.path}  ${file.job}`)].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <span className="nx-tool-mark" aria-hidden="true"><b><i /><i /><i /><i /><i /><i /></b></span>
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      <form className="mb-6 grid gap-3" onSubmit={onSubmit}>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.label}</span>
          <textarea
            className="min-h-28 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
            value={idea}
            onChange={(event) => {
              setIdea(event.target.value);
              setReady(false);
            }}
          />
        </label>
        <button className="nx-go w-fit rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60" disabled={!idea.trim()}>
          {copy.button}
        </button>
      </form>
      {plan ? (
        <div className="nx-panel mb-8 grid gap-6 text-sm">
          <p>
            <span className="text-muted">{copy.kind}. </span>
            {plan.kindLabel}
          </p>
          <section>
            <h2 className="mb-2 text-base font-semibold">{copy.pages}</h2>
            {plan.pages.map((page) => (
              <p key={page.path} className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-white/10 py-2">
                <span className="text-muted">{page.path}</span>
                <span>
                  <b>{page.name}.</b> {page.job}
                </span>
              </p>
            ))}
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold">{copy.tree}</h2>
            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-5">{plan.tree}</pre>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold">{copy.steps}</h2>
            <ol className="list-decimal space-y-1 pl-5">
              {plan.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold">{copy.files}</h2>
            {plan.files.map((file) => (
              <p key={file.path} className="grid gap-1 border-b border-white/10 py-2 sm:grid-cols-[14rem_1fr]">
                <span className="break-all text-muted">{file.path}</span>
                <span>{file.job}</span>
              </p>
            ))}
          </section>
          <button type="button" className="w-fit rounded-xl border border-white/15 px-4 py-2" onClick={onCopy}>
            {copied ? copy.copied : copy.copy}
          </button>
        </div>
      ) : null}
      <NextLinks
        links={[
          { href: "/seo", label: { az: "SEO yoxla", en: "Check SEO", tr: "SEO bak", ar: "فحص SEO", ru: "Проверить SEO" } },
          { href: "/tools", label: { az: "Xidmətlər", en: "Tools", tr: "Araçlar", ar: "الأدوات", ru: "Сервисы" } },
        ]}
      />
      <section className="space-y-3" aria-labelledby="flow-faq">
        <h2 id="flow-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
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
