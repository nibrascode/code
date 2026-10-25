import { lazy, Suspense, useEffect, useState } from "react";
import { Cpu, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { LANGS, type Lang } from "@/lib/i18n";
import { localeHref } from "@/lib/locale-path";
import { COPY } from "./copy";
import { TOOL_IDS, TOOL_TEXT, type ToolId } from "./tool-text";
import { toolSeo } from "./tool-seo";
import { PageAssistant } from "@/components/page-assistant";
import "./pdf.css";

// The whole PDF suite (pdf-lib, pdf.js, OCR) is loaded only on this page and only after mount.
const PdfTool = lazy(() => import("./pdf-tool").then((m) => ({ default: m.PdfTool })));

const LANG_NAME: Record<Lang, string> = { az: "Azərbaycanca", en: "English", tr: "Türkçe", ar: "العربية", ru: "Русский" };
const ALL_TOOLS: Record<Lang, string> = { az: "Hamısı", en: "All tools", tr: "Hepsi", ar: "الكل", ru: "Все" };
const BADGES: Record<Lang, [string, string, string]> = {
  az: ["20 alət", "5 dil", "Cihazda emal"],
  en: ["20 tools", "5 languages", "On-device"],
  tr: ["20 araç", "5 dil", "Cihazda işlenir"],
  ar: ["20 أداة", "5 لغات", "على جهازك"],
  ru: ["20 инструментов", "5 языков", "На устройстве"],
};
const ASK_AI: Record<Lang, string> = {
  az: "Nibras AI ilə PDF-i danışıqla idarə et",
  en: "Use these tools by chatting with Nibras AI",
  tr: "Nibras AI ile PDF araçlarını sohbetle kullan",
  ar: "استخدم أدوات PDF عبر محادثة Nibras AI",
  ru: "Управляйте PDF в чате с Nibras AI",
};

const NEXT: Partial<Record<ToolId, ToolId[]>> = {
  "write-pdf": ["merge", "sign", "word-pdf"],
  merge: ["compress", "split", "image-pdf"],
  split: ["merge", "extract-pages", "compress"],
  compress: ["merge", "split", "pdf-image"],
  "image-pdf": ["pdf-image", "merge", "compress"],
  "pdf-image": ["image-pdf", "compress", "merge"],
  rotate: ["pages", "merge", "compress"],
  protect: ["sign", "watermark", "merge"],
  watermark: ["sign", "protect", "merge"],
  pages: ["split", "extract-pages", "rotate"],
  scan: ["ocr", "image-pdf", "merge"],
  sign: ["protect", "watermark", "merge"],
  ocr: ["pdf-ocr", "pdf-word", "scan"],
  "pdf-ocr": ["ocr", "pdf-word", "pdf-image"],
  "pdf-word": ["word-pdf", "pdf-ocr", "merge"],
  preview: ["merge", "split", "pages"],
  batch: ["merge", "compress", "split"],
  "extract-pages": ["split", "pages", "merge"],
  "word-pdf": ["pdf-word", "page-numbers", "merge"],
  "page-numbers": ["watermark", "pages", "merge"],
};

export function PdfPage({ tool }: { tool: ToolId | null }) {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const prefix = lang === "az" ? "" : `/${lang}`;
  const seo = tool ? toolSeo(lang, tool) : null;
  const here = tool ? `/pdf/${tool}` : "/pdf";
  const badges = BADGES[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <main className="pdf-root mx-auto w-full max-w-5xl px-4 pt-28 pb-16 md:px-6" dir={dir}>
      <header className={`pdf-hero p-5 md:p-8 ${seo ? "mb-4 md:mb-7" : "mb-7"}`}>
        <div className={`flex flex-wrap items-center justify-between gap-3 ${seo ? "mb-3 md:mb-4" : "mb-4"}`}>
          <nav className="pdf-langs flex flex-wrap items-center gap-1" aria-label="Language">
            <Globe2 className="me-1 size-4 text-muted" aria-hidden />
            {LANGS.map((l) => (
              <a key={l} href={localeHref(l, here)} hrefLang={l} lang={l} aria-current={l === lang ? "page" : undefined} title={LANG_NAME[l]} data-lang={l}>
                {l.toUpperCase()}
              </a>
            ))}
          </nav>
          <nav className="flex gap-4 text-sm text-muted">
            <a href={`${prefix}/apps/nibras-pdf`} className="transition hover:text-fg">{t.appPage}</a>
            <a href={localeHref(lang, "/privacy/nibras-pdf")} className="transition hover:text-fg">{t.privacy}</a>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <img src="/apps/nibras-pdf.jpg" alt="" width={72} height={72} className="size-14 shrink-0 rounded-2xl shadow-[0_14px_30px_-14px_var(--pdf-glow)] ring-1 ring-white/15 md:size-[4.5rem]" />
          <div className="min-w-0 flex-1 basis-64">
            <h1 className={`pdf-title font-display font-bold md:text-5xl ${seo ? "text-2xl" : "text-3xl"}`}>{seo ? seo.h1 : t.title}</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{seo ? seo.lead : t.lead}</p>
          </div>
        </div>
        <div className={`mt-5 flex-wrap items-center gap-2 ${seo ? "hidden md:flex" : "flex"}`}>
          <span className="pdf-badge"><Sparkles className="size-3.5" />{badges[0]}</span>
          <span className="pdf-badge"><Globe2 className="size-3.5" />{badges[1]}</span>
          <span className="pdf-badge"><ShieldCheck className="size-3.5" />{badges[2]}</span>
          <a href={localeHref(lang, "/ai")} className="pdf-badge transition hover:text-fg"><Cpu className="size-3.5" />{ASK_AI[lang]}</a>
        </div>
      </header>
      {mounted ? (
        <Suspense fallback={<Skeleton />}>
          <PdfTool lang={lang} tool={tool} />
        </Suspense>
      ) : tool ? (
        <Skeleton />
      ) : (
        <nav className="flex flex-wrap gap-2" aria-label={t.toolsHeading}>
          {TOOL_IDS.map((id) => <a key={id} href={localeHref(lang, `/pdf/${id}`)} className="pdf-chip">{TOOL_TEXT[lang][id].title}</a>)}
        </nav>
      )}
      <PageAssistant topic="pdf" />
      {tool && seo ? (
        <>
          <section className="pdf-surface mt-8 p-5 md:p-6" aria-labelledby="pdf-how">
            <h2 id="pdf-how" className="mb-3 text-base font-semibold">{seo.how}</h2>
            <ol className="space-y-2 text-sm text-muted [counter-reset:step]">
              {seo.steps.map((s) => <li key={s} className="pdf-step flex items-center">{s}</li>)}
            </ol>
          </section>
          {seo.faqs.length ? (
            <section className="pdf-surface mt-8 p-5 md:p-6" aria-labelledby="pdf-faq">
              <h2 id="pdf-faq" className="mb-3 text-base font-semibold">{seo.faqTitle}</h2>
              <div className="space-y-3">
                {seo.faqs.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-sm font-semibold">{item.q}</h3>
                    <p className="mt-1 text-sm text-muted">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          <section className="mt-8" aria-labelledby="pdf-more">
            <h2 id="pdf-more" className="mb-3 text-base font-semibold">{seo.related}</h2>
            <div className="flex flex-wrap gap-2">
              {(NEXT[tool] ?? []).map((id) => (
                <a key={id} href={localeHref(lang, `/pdf/${id}`)} className="pdf-chip">{toolSeo(lang, id).h1}</a>
              ))}
              <a href={localeHref(lang, "/pdf")} className="pdf-chip">{ALL_TOOLS[lang]}</a>
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
}

function Skeleton() {
  return <div className="h-96 animate-pulse rounded-3xl bg-white/[0.04]" />;
}
