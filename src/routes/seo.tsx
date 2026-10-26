import { useState, type FormEvent } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";
import { NextLinks } from "@/components/next-links";

export const Route = createFileRoute("/seo")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/seo"), replace: true });
  },
  component: SeoPage,
});

type Copy = {
  h1: string;
  lead: string;
  label: string;
  button: string;
  working: string;
  empty: string;
  rows: Record<string, string>;
  notes: Record<string, string>;
  errors: Record<string, string>;
  yes: string;
  no: string;
};

const COPY: Record<Lang, Copy> = {
  az: {
    h1: "Nibras SEO Check",
    lead: "Bir səhifənin title, description, canonical, robots və sitemap vəziyyətinə bax. Başqa səhifələr açılmır. Ünvan saxlanmır.",
    label: "Sayt ünvanı",
    button: "Yoxla",
    working: "Yoxlanır…",
    empty: "—",
    yes: "Bəli",
    no: "Xeyr",
    rows: { status: "Cavab", time: "Vaxt", https: "HTTPS", title: "Title", description: "Description", canonical: "Canonical", robots: "Robots", h1: "H1", images: "Şəkillər", alt: "Alt-ı olmayan", robotsFile: "robots.txt", sitemap: "Sitemap" },
    notes: { "no-https": "Ünvan HTTPS deyil.", redirect: "Ünvan başqa ünvana keçir.", "no-title": "Title yoxdur.", "title-long": "Title 60 simvoldan uzundur.", "no-description": "Description yoxdur.", "description-long": "Description 160 simvoldan uzundur.", "no-canonical": "Canonical yoxdur.", noindex: "Səhifə noindex-dir.", "h1-none": "H1 yoxdur.", "h1-many": "H1 birdən çoxdur.", "alt-missing": "Bəzi şəkillərdə alt yoxdur.", "robots-missing": "robots.txt tapılmadı.", "robots-block": "robots.txt bu ünvanı bağlayır.", "sitemap-missing": "Sitemap tapılmadı.", truncated: "Fayl böyük olduğu üçün bir hissəsi oxundu." },
    errors: { "bad-url": "Ünvan http və ya https olmalıdır.", blocked: "Bu ünvan yoxlanmır.", unreachable: "Sayt açılmadı.", rate: "Bir az gözlə, sonra yenidən yoxla.", "not-html": "Cavab HTML deyil." },
  },
  en: {
    h1: "Nibras SEO Check",
    lead: "Check one page for title, description, canonical, robots, and sitemap. Other pages are not opened. The address is not stored.",
    label: "Site address",
    button: "Check",
    working: "Checking…",
    empty: "—",
    yes: "Yes",
    no: "No",
    rows: { status: "Status", time: "Time", https: "HTTPS", title: "Title", description: "Description", canonical: "Canonical", robots: "Robots", h1: "H1", images: "Images", alt: "Images without alt", robotsFile: "robots.txt", sitemap: "Sitemap" },
    notes: { "no-https": "The address is not HTTPS.", redirect: "The address redirects.", "no-title": "There is no title.", "title-long": "The title is longer than 60 characters.", "no-description": "There is no description.", "description-long": "The description is longer than 160 characters.", "no-canonical": "There is no canonical.", noindex: "The page is noindex.", "h1-none": "There is no H1.", "h1-many": "There is more than one H1.", "alt-missing": "Some images have no alt.", "robots-missing": "robots.txt was not found.", "robots-block": "robots.txt blocks this address.", "sitemap-missing": "No sitemap was found.", truncated: "Only part of a large file was read." },
    errors: { "bad-url": "The address must be http or https.", blocked: "This address is not checked.", unreachable: "The site did not open.", rate: "Wait a moment, then check again.", "not-html": "The response is not HTML." },
  },
  tr: {
    h1: "Nibras SEO Check",
    lead: "Bir sayfanın title, description, canonical, robots ve sitemap durumuna bak. Başka sayfalar açılmaz. Adres saklanmaz.",
    label: "Site adresi",
    button: "Bak",
    working: "Bakılıyor…",
    empty: "—",
    yes: "Evet",
    no: "Hayır",
    rows: { status: "Yanıt", time: "Süre", https: "HTTPS", title: "Title", description: "Description", canonical: "Canonical", robots: "Robots", h1: "H1", images: "Görseller", alt: "Alt olmayan", robotsFile: "robots.txt", sitemap: "Sitemap" },
    notes: { "no-https": "Adres HTTPS değil.", redirect: "Adres başka adrese gider.", "no-title": "Title yok.", "title-long": "Title 60 karakterden uzun.", "no-description": "Description yok.", "description-long": "Description 160 karakterden uzun.", "no-canonical": "Canonical yok.", noindex: "Sayfa noindex.", "h1-none": "H1 yok.", "h1-many": "H1 birden fazla.", "alt-missing": "Bazı görsellerde alt yok.", "robots-missing": "robots.txt bulunamadı.", "robots-block": "robots.txt bu adresi kapatıyor.", "sitemap-missing": "Sitemap bulunamadı.", truncated: "Dosya büyük olduğu için bir kısmı okundu." },
    errors: { "bad-url": "Adres http veya https olmalıdır.", blocked: "Bu adres bakılmaz.", unreachable: "Site açılmadı.", rate: "Biraz bekle, sonra yeniden bak.", "not-html": "Yanıt HTML değil." },
  },
  ar: {
    h1: "Nibras SEO Check",
    lead: "يفحص صفحة واحدة: العنوان والوصف والرابط الأساسي وrobots وsitemap. لا تُفتح الصفحات الأخرى. لا يُحفظ العنوان.",
    label: "عنوان الموقع",
    button: "افحص",
    working: "جارٍ الفحص…",
    empty: "—",
    yes: "نعم",
    no: "لا",
    rows: { status: "الرد", time: "الوقت", https: "HTTPS", title: "Title", description: "Description", canonical: "Canonical", robots: "Robots", h1: "H1", images: "الصور", alt: "بلا alt", robotsFile: "robots.txt", sitemap: "Sitemap" },
    notes: { "no-https": "العنوان ليس HTTPS.", redirect: "العنوان يحوّل إلى عنوان آخر.", "no-title": "لا يوجد title.", "title-long": "العنوان أطول من 60 حرفاً.", "no-description": "لا يوجد description.", "description-long": "الوصف أطول من 160 حرفاً.", "no-canonical": "لا يوجد canonical.", noindex: "الصفحة noindex.", "h1-none": "لا يوجد H1.", "h1-many": "أكثر من H1.", "alt-missing": "بعض الصور بلا alt.", "robots-missing": "لم يُعثر على robots.txt.", "robots-block": "robots.txt يغلق هذا العنوان.", "sitemap-missing": "لم يُعثر على sitemap.", truncated: "قُرئ جزء من ملف كبير." },
    errors: { "bad-url": "يجب أن يكون العنوان http أو https.", blocked: "لا يُفحص هذا العنوان.", unreachable: "الموقع لم يفتح.", rate: "انتظر قليلاً ثم أعد الفحص.", "not-html": "الرد ليس HTML." },
  },
  ru: {
    h1: "Nibras SEO Check",
    lead: "Проверка одной страницы: title, description, canonical, robots и sitemap. Другие страницы не открываются. Адрес не сохраняется.",
    label: "Адрес сайта",
    button: "Проверить",
    working: "Проверка…",
    empty: "—",
    yes: "Да",
    no: "Нет",
    rows: { status: "Ответ", time: "Время", https: "HTTPS", title: "Title", description: "Description", canonical: "Canonical", robots: "Robots", h1: "H1", images: "Картинки", alt: "Без alt", robotsFile: "robots.txt", sitemap: "Sitemap" },
    notes: { "no-https": "Адрес не HTTPS.", redirect: "Адрес перенаправляет.", "no-title": "Нет title.", "title-long": "Title длиннее 60 символов.", "no-description": "Нет description.", "description-long": "Description длиннее 160 символов.", "no-canonical": "Нет canonical.", noindex: "Страница noindex.", "h1-none": "Нет H1.", "h1-many": "H1 больше одного.", "alt-missing": "У части картинок нет alt.", "robots-missing": "robots.txt не найден.", "robots-block": "robots.txt закрывает этот адрес.", "sitemap-missing": "Sitemap не найден.", truncated: "Большой файл прочитан частично." },
    errors: { "bad-url": "Адрес должен быть http или https.", blocked: "Этот адрес не проверяется.", unreachable: "Сайт не открылся.", rate: "Подождите немного и проверьте снова.", "not-html": "Ответ не HTML." },
  },
};

type Report = {
  ok: true;
  finalUrl: string;
  status: number;
  ms: number;
  https: boolean;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: number;
  images: number;
  missingAlt: number;
  notes: string[];
  robotsFound: boolean;
  sitemap: { found: boolean; url: string; kind: string; count: number };
};

export function SeoPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/seo"];
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [report, setReport] = useState<Report | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setReport(null);
    try {
      const response = await fetch("/api/seo-check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = (await response.json()) as Report & { ok: false; error?: string };
      if (!data.ok) setError(copy.errors[data.error || "unreachable"] || copy.errors.unreachable);
      else setReport(data);
    } catch {
      setError(copy.errors.unreachable);
    } finally {
      setBusy(false);
    }
  }

  const sitemapText = report
    ? report.sitemap.found
      ? report.sitemap.kind === "index"
        ? `${report.sitemap.count} sitemap`
        : `${report.sitemap.count}`
      : copy.no
    : "";

  return (
    <main className="nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <span className="nx-tool-mark" aria-hidden="true"><b><i /><i /><i /><i /><i /><i /></b></span>
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      <form className="mb-6 grid gap-3" onSubmit={onSubmit}>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.label}</span>
          <input
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
            value={url}
            inputMode="url"
            placeholder="https://"
            onChange={(event) => setUrl(event.target.value)}
          />
        </label>
        <button className="nx-go w-fit rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60" disabled={busy || !url.trim()}>
          {busy ? copy.working : copy.button}
        </button>
      </form>
      {error ? <p className="mb-6 text-sm text-red-300">{error}</p> : null}
      {report ? (
        <div className="nx-panel mb-8 grid gap-2 text-sm">
          <p className="break-all text-muted">{report.finalUrl}</p>
          {[
            [copy.rows.status, String(report.status)],
            [copy.rows.time, `${report.ms} ms`],
            [copy.rows.https, report.https ? copy.yes : copy.no],
            [copy.rows.title, report.title || copy.empty],
            [copy.rows.description, report.description || copy.empty],
            [copy.rows.canonical, report.canonical || copy.empty],
            [copy.rows.robots, report.robots || copy.empty],
            [copy.rows.h1, String(report.h1)],
            [copy.rows.images, String(report.images)],
            [copy.rows.alt, String(report.missingAlt)],
            [copy.rows.robotsFile, report.robotsFound ? copy.yes : copy.no],
            [copy.rows.sitemap, sitemapText],
          ].map(([label, value]) => (
            <p key={label} className="grid grid-cols-[9rem_1fr] gap-3 border-b border-white/10 py-2">
              <span className="text-muted">{label}</span>
              <span className="break-words">{value}</span>
            </p>
          ))}
          {report.notes.length ? (
            <ul className="mt-2 list-disc pl-5 text-muted">
              {report.notes.map((note) => (
                <li key={note}>{copy.notes[note] || note}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      <NextLinks
        links={[
          { href: "/tools", label: { az: "Xidmətlər", en: "Tools", tr: "Araçlar", ar: "الأدوات", ru: "Сервисы" } },
          { href: "/wifi", label: { az: "Wi-Fi QR", en: "Wi-Fi QR", tr: "Wi-Fi QR", ar: "Wi-Fi QR", ru: "Wi-Fi QR" } },
        ]}
      />
      <section className="space-y-3" aria-labelledby="seo-faq">
        <h2 id="seo-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
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
