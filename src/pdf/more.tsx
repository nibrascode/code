// Options and runners for: flatten, metadata, compare, excel-csv, csv-excel (browser-only) and url-pdf (page text + optional JPEG/PNG images fetched via /api/url-text, PDF built in the browser; no layout).
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import * as eng from "./lib/engine";
import { sheetsToXlsx } from "./lib/office";
import { docxToText } from "./lib/docx";
import { diffTexts, diffReportHtml, diffReportText } from "./lib/wordDiff";
import { field, Label } from "./ui";
import type { Out } from "./ui";

export const MORE_TOOLS = ["flatten", "metadata", "compare", "excel-csv", "csv-excel", "url-pdf"] as const;
export type MoreTool = (typeof MORE_TOOLS)[number];
export const isMoreTool = (t: string): t is MoreTool => (MORE_TOOLS as readonly string[]).includes(t);

export type Meta = { title: string; author: string; subject: string; keywords: string; creator: string; producer: string };
const EMPTY: Meta = { title: "", author: "", subject: "", keywords: "", creator: "", producer: "" };
let metaDraft: Meta = { ...EMPTY };

type S = Record<"flatNote" | "metaNote" | "title" | "author" | "subject" | "keywords" | "creator" | "producer" | "pages" | "created" | "modified" | "noFields" | "flatDone" | "cmpNote" | "same" | "diffs" | "onlyA" | "onlyB" | "page" | "noText" | "csvNote" | "xlsxNote" | "sep", string>;
const W: Record<Lang, S> = {
  az: { flatNote: "Doldurulmuş form sahələri səhifənin sabit hissəsi olur: sonra dəyişdirilmir. Mətn seçilə bilən qalır.", metaNote: "Faylın xassələri (Başlıq, Müəllif və s.) dəyişir. Səhifələrə toxunulmur.", title: "Başlıq", author: "Müəllif", subject: "Mövzu", keywords: "Açar sözlər (vergüllə)", creator: "Yaradan proqram", producer: "PDF istehsalçısı", pages: "Səhifə", created: "Yaradılıb", modified: "Dəyişdirilib", noFields: "Bu PDF-də doldurulan form sahəsi tapılmadı; fayl olduğu kimi yazıldı.", flatDone: "form sahəsi sabitləndi", cmpNote: "Mətn brauzerdə söz-söz müqayisə olunur: PDF, DOCX və ya TXT (istənilən cüt). Silinən qırmızı, əlavə olunan yaşıl. Fayl serverə getmir. Şəkil və dizayn fərqi görünmür; skan PDF üçün əvvəl OCR edin.", same: "Mətn eynidir.", diffs: "fərq", onlyA: "Yalnız 1-ci faylda", onlyB: "Yalnız 2-ci faylda", noText: "Fayllardan birində oxunan mətn yoxdur. Skan PDF-dirsə, əvvəl OCR edin.", page: "Səhifə", csvNote: "Hər vərəq ayrıca CSV olur (UTF-8). Formul yox, yalnız dəyərlər.", xlsxNote: "CSV cədvəli XLSX faylına köçdü.", sep: "Ayırıcı" },
  en: { flatNote: "Filled form fields become a fixed part of the page and can no longer be edited. Text stays selectable.", metaNote: "Changes the file properties (Title, Author, etc.). Pages are not touched.", title: "Title", author: "Author", subject: "Subject", keywords: "Keywords (comma separated)", creator: "Creator app", producer: "Producer", pages: "Pages", created: "Created", modified: "Modified", noFields: "No fillable form fields found; the file was saved as is.", flatDone: "form fields flattened", cmpNote: "Text is compared word by word in your browser: PDF, DOCX or TXT (any pair). Removed is red, added is green. Files are not uploaded. Image and layout changes are not detected; for scanned PDFs, run OCR first.", same: "The text is identical.", diffs: "differences", onlyA: "Only in file 1", onlyB: "Only in file 2", noText: "One of the files has no readable text. If it is a scanned PDF, run OCR first.", page: "Page", csvNote: "Each sheet becomes its own CSV (UTF-8). Values only, no formulas.", xlsxNote: "The CSV table was copied into an XLSX file.", sep: "Separator" },
  tr: { flatNote: "Doldurulmuş form alanları sayfanın sabit parçası olur, artık düzenlenemez. Metin seçilebilir kalır.", metaNote: "Dosya özelliklerini (Başlık, Yazar vb.) değiştirir. Sayfalara dokunulmaz.", title: "Başlık", author: "Yazar", subject: "Konu", keywords: "Anahtar kelimeler (virgülle)", creator: "Oluşturan uygulama", producer: "Üretici", pages: "Sayfa", created: "Oluşturulma", modified: "Değiştirilme", noFields: "Doldurulabilir form alanı yok; dosya olduğu gibi kaydedildi.", flatDone: "form alanı sabitlendi", cmpNote: "Metin tarayıcıda kelime kelime karşılaştırılır: PDF, DOCX veya TXT (herhangi bir çift). Silinen kırmızı, eklenen yeşil. Dosyalar yüklenmez. Görsel ve düzen farkları görünmez; taranmış PDF için önce OCR yapın.", same: "Metin aynı.", diffs: "fark", onlyA: "Sadece 1. dosyada", onlyB: "Sadece 2. dosyada", noText: "Dosyalardan birinde okunabilir metin yok. Taranmış PDF ise önce OCR yapın.", page: "Sayfa", csvNote: "Her sayfa ayrı CSV olur (UTF-8). Formül yok, sadece değerler.", xlsxNote: "CSV tablosu XLSX dosyasına aktarıldı.", sep: "Ayırıcı" },
  ar: { flatNote: "تصبح حقول النماذج المعبأة جزءاً ثابتاً من الصفحة ولا يمكن تعديلها بعد ذلك. يبقى النص قابلاً للتحديد.", metaNote: "يغيّر خصائص الملف (العنوان، المؤلف...). لا تُمس الصفحات.", title: "العنوان", author: "المؤلف", subject: "الموضوع", keywords: "كلمات مفتاحية (بفواصل)", creator: "التطبيق المنشئ", producer: "المنتج", pages: "الصفحات", created: "أُنشئ", modified: "عُدّل", noFields: "لا توجد حقول نماذج قابلة للتعبئة؛ حُفظ الملف كما هو.", flatDone: "حقل نموذج ثُبّت", cmpNote: "يُقارن النص كلمةً بكلمة داخل متصفحك: PDF أو DOCX أو TXT (أي زوج). المحذوف بالأحمر والمضاف بالأخضر. لا تُرفع الملفات. لا تُكتشف فروق الصور والتنسيق؛ للملفات الممسوحة شغّل OCR أولاً.", same: "النص متطابق.", diffs: "فرق", onlyA: "في الملف 1 فقط", onlyB: "في الملف 2 فقط", noText: "أحد الملفين لا يحتوي نصاً مقروءاً. إن كان PDF ممسوحاً فشغّل OCR أولاً.", page: "الصفحة", csvNote: "كل ورقة تصبح ملف CSV مستقلاً (UTF-8). القيم فقط بلا صيغ.", xlsxNote: "نُقل جدول CSV إلى ملف XLSX.", sep: "الفاصل" },
  ru: { flatNote: "Заполненные поля форм становятся неизменяемой частью страницы. Текст остаётся выделяемым.", metaNote: "Меняет свойства файла (Заголовок, Автор и т. д.). Страницы не меняются.", title: "Заголовок", author: "Автор", subject: "Тема", keywords: "Ключевые слова (через запятую)", creator: "Программа-создатель", producer: "Производитель PDF", pages: "Страниц", created: "Создан", modified: "Изменён", noFields: "Заполняемых полей нет; файл сохранён как есть.", flatDone: "полей формы закреплено", cmpNote: "Текст сравнивается по словам прямо в браузере: PDF, DOCX или TXT (любая пара). Удалённое — красным, добавленное — зелёным. Файлы не загружаются. Изменения картинок и вёрстки не видны; для сканов сначала сделайте OCR.", same: "Текст совпадает.", diffs: "различий", onlyA: "Только в файле 1", onlyB: "Только в файле 2", noText: "В одном из файлов нет читаемого текста. Если это скан PDF, сначала сделайте OCR.", page: "Стр.", csvNote: "Каждый лист — отдельный CSV (UTF-8). Только значения, без формул.", xlsxNote: "Таблица CSV перенесена в XLSX.", sep: "Разделитель" },
};
const mw = (l: Lang) => W[l] ?? W.en;

export const moreKind = (t: MoreTool) => (t === "compare" ? "pdfs" : t === "excel-csv" || t === "csv-excel" ? "sheet" : t === "url-pdf" ? "none" : "pdf") as "pdf" | "pdfs" | "sheet" | "none";

async function lib() { return (await eng.getEngine()).lib; }

export async function readMeta(bytes: Uint8Array) {
  const { PDFDocument } = await lib();
  const d = await PDFDocument.load(bytes, { updateMetadata: false, ignoreEncryption: true });
  return {
    meta: { title: d.getTitle() ?? "", author: d.getAuthor() ?? "", subject: d.getSubject() ?? "", keywords: d.getKeywords() ?? "", creator: d.getCreator() ?? "", producer: d.getProducer() ?? "" } as Meta,
    pages: d.getPageCount(), created: d.getCreationDate()?.toISOString().slice(0, 10) ?? "", modified: d.getModificationDate()?.toISOString().slice(0, 10) ?? "",
  };
}

const csvCell = (v: string, sep: string) => (/["\n\r]/.test(v) || v.includes(sep) ? `"${v.replace(/"/g, '""')}"` : v);
export const toCsv = (rows: string[][], sep = ",") => rows.map((r) => r.map((c) => csvCell(String(c ?? ""), sep)).join(sep)).join("\r\n");

/** Line diff via LCS (capped for very long texts). */
export function diffLines(a: string[], b: string[]) {
  const n = a.length, m = b.length;
  if (n * m > 4_000_000) { const sb = new Set(b), sa = new Set(a); return { onlyA: a.filter((x) => !sb.has(x)), onlyB: b.filter((x) => !sa.has(x)) }; }
  const dp = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const onlyA: string[] = [], onlyB: string[] = [];
  let i = 0, j = 0;
  while (i < n && j < m) { if (a[i] === b[j]) { i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) onlyA.push(a[i++]); else onlyB.push(b[j++]); }
  while (i < n) onlyA.push(a[i++]);
  while (j < m) onlyB.push(b[j++]);
  return { onlyA, onlyB };
}

type U = Record<"label" | "ph" | "works" | "limits" | "imgs" | "imgNote" | "print" | "imgDone" | "bad" | "fetch" | "empty" | "type" | "size" | "status" | "done", string>;
const UW: Record<Lang, U> = {
  az: { imgs: "Şəkilləri də əlavə et (JPEG/PNG, 8-ə qədər)", imgNote: "Şəkillər mətndən sonra, ayrıca səhifələrdə gəlir — orijinal yerində yox.", print: "Dəqiq dizayn lazımdırsa: səhifəni öz brauzerində aç → Çap (Ctrl+P) → «PDF kimi saxla». Bunu server tərəfdə etmək ödənişli brauzer xidməti tələb edir.", imgDone: "şəkil", label: "Səhifə linki", ph: "https://...", works: "İşləyir: açıq (girişsiz) məqalə, blog, xəbər, sənəd səhifələri. Səhifənin əsas mətni başlıq və siyahılarla birlikdə PDF olur.", limits: "İşləmir: rənglər və dizayn (layout) köçmür; JavaScript ilə yüklənən saytlar (SPA), giriş tələb edən və ya botları bloklayan səhifələr boş gələ bilər. Link Nibras serverindən açılır (yalnız ictimai ünvanlar).", bad: "Link düzgün deyil və ya ictimai ünvan deyil.", fetch: "Səhifə açılmadı (sayt cavab vermədi və ya bloklayır).", empty: "Səhifədə oxunan mətn tapılmadı (çox güman ki, JavaScript ilə yüklənir).", type: "Bu link HTML səhifə deyil.", size: "Səhifə çox böyükdür (3 MB-dan çox).", status: "Sayt xəta qaytardı", done: "simvol mətn · dizayn yoxdur" },
  en: { imgs: "Also add images (JPEG/PNG, up to 8)", imgNote: "Images come after the text on their own pages — not in their original position.", print: "Need the exact design? Open the page in your own browser → Print (Ctrl+P) → \"Save as PDF\". Doing that on the server needs a paid headless-browser service.", imgDone: "images", label: "Page link", ph: "https://...", works: "Works: public (no login) articles, blogs, news and docs pages. The page's main text, with headings and lists, becomes a PDF.", limits: "Doesn't work: colours and layout are not kept; JavaScript-rendered sites (SPAs), pages behind a login or that block bots may come back empty. The link is opened from the Nibras server (public addresses only).", bad: "The link is invalid or not a public address.", fetch: "The page could not be opened (the site did not respond or blocks us).", empty: "No readable text found on the page (it is probably rendered with JavaScript).", type: "This link is not an HTML page.", size: "The page is too large (over 3 MB).", status: "The site returned an error", done: "characters of text · no layout" },
  tr: { imgs: "Görselleri de ekle (JPEG/PNG, en fazla 8)", imgNote: "Görseller metinden sonra ayrı sayfalarda gelir — orijinal yerlerinde değil.", print: "Tam tasarım mı lazım? Sayfayı kendi tarayıcında aç → Yazdır (Ctrl+P) → \"PDF olarak kaydet\". Bunu sunucuda yapmak ücretli bir tarayıcı hizmeti gerektirir.", imgDone: "görsel", label: "Sayfa bağlantısı", ph: "https://...", works: "Çalışır: herkese açık (girişsiz) makale, blog, haber ve doküman sayfaları. Sayfanın ana metni başlık ve listelerle PDF olur.", limits: "Çalışmaz: renkler ve tasarım (düzen) aktarılmaz; JavaScript ile yüklenen siteler (SPA), giriş isteyen veya botları engelleyen sayfalar boş gelebilir. Bağlantı Nibras sunucusundan açılır (yalnızca herkese açık adresler).", bad: "Bağlantı geçersiz veya herkese açık bir adres değil.", fetch: "Sayfa açılamadı (site yanıt vermedi veya engelliyor).", empty: "Sayfada okunabilir metin yok (büyük olasılıkla JavaScript ile yükleniyor).", type: "Bu bağlantı bir HTML sayfası değil.", size: "Sayfa çok büyük (3 MB üstü).", status: "Site hata döndürdü", done: "karakter metin · tasarım yok" },
  ar: { imgs: "أضف الصور أيضاً (JPEG/PNG، حتى 8)", imgNote: "تأتي الصور بعد النص في صفحات مستقلة — وليس في مكانها الأصلي.", print: "تحتاج التصميم الدقيق؟ افتح الصفحة في متصفحك ← طباعة (Ctrl+P) ← «حفظ كـ PDF». فعل ذلك على الخادم يتطلب خدمة متصفح مدفوعة.", imgDone: "صور", label: "رابط الصفحة", ph: "https://...", works: "يعمل مع: صفحات المقالات والمدونات والأخبار والتوثيق العامة (بلا تسجيل دخول). يصبح النص الرئيسي مع العناوين والقوائم ملف PDF.", limits: "لا يعمل مع: الألوان والتنسيق لا تُنقل؛ المواقع التي تُبنى بـ JavaScript والصفحات التي تتطلب تسجيل الدخول أو تحجب الروبوتات قد تعود فارغة. يُفتح الرابط من خادم نبراس (العناوين العامة فقط).", bad: "الرابط غير صالح أو ليس عنواناً عاماً.", fetch: "تعذّر فتح الصفحة (الموقع لم يستجب أو يحجبنا).", empty: "لم يُعثر على نص مقروء (غالباً تُبنى الصفحة بـ JavaScript).", type: "هذا الرابط ليس صفحة HTML.", size: "الصفحة كبيرة جداً (أكثر من 3 ميغابايت).", status: "أعاد الموقع خطأ", done: "حرفاً من النص · بلا تنسيق" },
  ru: { imgs: "Добавить и картинки (JPEG/PNG, до 8)", imgNote: "Картинки идут после текста на отдельных страницах — не на своих местах.", print: "Нужен точный дизайн? Откройте страницу в своём браузере → Печать (Ctrl+P) → «Сохранить как PDF». На сервере это требует платного сервиса headless-браузера.", imgDone: "картинок", label: "Ссылка на страницу", ph: "https://...", works: "Работает: открытые (без входа) статьи, блоги, новости и документация. Основной текст страницы с заголовками и списками становится PDF.", limits: "Не работает: цвета и вёрстка не сохраняются; сайты на JavaScript (SPA), страницы за логином или блокирующие ботов могут вернуться пустыми. Ссылка открывается с сервера Nibras (только публичные адреса).", bad: "Ссылка неверна или это не публичный адрес.", fetch: "Не удалось открыть страницу (сайт не ответил или блокирует).", empty: "На странице нет читаемого текста (вероятно, она строится на JavaScript).", type: "Эта ссылка не HTML-страница.", size: "Страница слишком большая (более 3 МБ).", status: "Сайт вернул ошибку", done: "символов текста · без вёрстки" },
};
const uw = (l: Lang) => UW[l] ?? UW.en;
let urlDraft = "";
let urlImages = true;
export class UrlError extends Error {}

function UrlOptions({ lang }: { lang: Lang }) {
  const w = uw(lang);
  const [v, setV] = useState(urlDraft);
  const [img, setImg] = useState(urlImages);
  return (
    <div className="space-y-3">
      <div><Label>{w.label}</Label><input className={field} type="url" inputMode="url" dir="ltr" placeholder={w.ph} value={v} onChange={(e) => { urlDraft = e.target.value; setV(e.target.value); }} data-testid="url-input" /></div>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={img} onChange={(e) => { urlImages = e.target.checked; setImg(e.target.checked); }} data-testid="url-images" />{w.imgs}</label>
      <p className="text-xs text-muted">✓ {w.works}</p>
      <p className="text-xs text-muted">✓ {w.imgNote}</p>
      <p className="text-xs text-muted">✗ {w.limits}</p>
      <p className="text-xs text-muted">ⓘ {w.print}</p>
    </div>
  );
}

export function MoreOptions({ tool, lang, pdf, sheetCount }: { tool: string; lang: Lang; pdf: Uint8Array | null; sheetCount: number }) {
  const w = mw(lang);
  const [m, setM] = useState<Meta>(metaDraft);
  const [info, setInfo] = useState<{ pages: number; created: string; modified: string } | null>(null);
  useEffect(() => {
    if (tool !== "metadata" || !pdf) return;
    let live = true;
    readMeta(pdf).then((r) => { if (!live) return; metaDraft = r.meta; setM(r.meta); setInfo(r); }).catch(() => setInfo(null));
    return () => { live = false; };
  }, [tool, pdf]);
  if (tool === "url-pdf") return <UrlOptions lang={lang} />;
  if (tool === "flatten") return <p className="text-sm text-muted">{w.flatNote}</p>;
  if (tool === "compare") return <p className="text-sm text-muted">{w.cmpNote}</p>;
  if (tool === "excel-csv") return <p className="text-sm text-muted">{w.csvNote}{sheetCount > 1 ? ` (${sheetCount})` : ""}</p>;
  if (tool === "csv-excel") return <p className="text-sm text-muted">{w.xlsxNote}</p>;
  if (tool !== "metadata") return null;
  const set = (k: keyof Meta, v: string) => setM((s) => { const n = { ...s, [k]: v }; metaDraft = n; return n; });
  return (
    <div className="space-y-3">
      {info ? <p className="text-xs text-muted" dir="auto">{w.pages}: {info.pages}{info.created ? ` · ${w.created}: ${info.created}` : ""}{info.modified ? ` · ${w.modified}: ${info.modified}` : ""}</p> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {(Object.keys(EMPTY) as (keyof Meta)[]).map((k) => (
          <div key={k}><Label>{w[k]}</Label><input className={field} dir="auto" value={m[k]} onChange={(e) => set(k, e.target.value)} data-testid={`meta-${k}`} /></div>
        ))}
      </div>
      <p className="text-xs text-muted">{w.metaNote}</p>
    </div>
  );
}

type F = { name: string; bytes?: Uint8Array };
export async function runMore(tool: MoreTool, lang: Lang, files: F[], sheets: { name: string; rows: string[][] }[] | null, progress: (d: number, n: number) => void): Promise<Out[]> {
  const w = mw(lang);
  const base = (n: string) => n.replace(/\.[^.]+$/, "") || "document";
  const pdfOut = (name: string, bytes: Uint8Array, note?: string): Out => ({ name, blob: new Blob([bytes as BlobPart], { type: "application/pdf" }), kind: "pdf", note });
  if (tool === "excel-csv") {
    const list = (sheets ?? []).filter((s) => s.rows.length);
    return list.map((s) => {
      const text = toCsv(s.rows);
      const nm = `${base(files[0]?.name ?? "table")}${list.length > 1 ? `-${s.name.replace(/[^\w-]+/g, "_")}` : ""}.csv`;
      return { name: nm, blob: new Blob(["\uFEFF" + text], { type: "text/csv;charset=utf-8" }), kind: "text", text, note: `${s.rows.length} rows` } as Out;
    });
  }
  if (tool === "csv-excel") {
    const list = (sheets ?? []).filter((s) => s.rows.length);
    const bytes = await sheetsToXlsx(list.map((s, i) => ({ name: list.length > 1 ? s.name.slice(0, 28) || `Sheet${i + 1}` : "Sheet1", rows: s.rows })));
    return [{ name: `${base(files[0]?.name ?? "table")}.xlsx`, blob: new Blob([bytes as BlobPart], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), kind: "xlsx", note: w.xlsxNote }];
  }
  if (tool === "url-pdf") {
    const u = uw(lang);
    let raw = urlDraft.trim();
    if (raw && !/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
    try { new URL(raw); } catch { throw new UrlError(u.bad); }
    progress(0, 1);
    const r = await fetch(`/api/url-text?url=${encodeURIComponent(raw)}${urlImages ? "&images=1" : ""}`);
    const j = (await r.json().catch(() => ({}))) as { title?: string; text?: string; url?: string; error?: string; status?: number; images?: { type: "jpg" | "png"; data: string; alt: string }[] };
    if (!r.ok || !j.text) {
      const e = j.error;
      throw new UrlError(e === "bad-url" ? u.bad : e === "empty" ? u.empty : e === "type" ? u.type : e === "size" ? u.size : e === "status" ? `${u.status}${j.status ? ` (${j.status})` : ""}.` : u.fetch);
    }
    const title = (j.title || new URL(j.url || raw).hostname).slice(0, 200);
    let bytes = await eng.textToPdf(`${j.url || raw}\n\n${j.text}`, { size: "a4", fontSize: 11, align: "left", bold: false, margin: 48, pageNumbers: true, title });
    let nImg = 0;
    if (j.images?.length) {
      const { PDFDocument } = await lib();
      const d = await PDFDocument.load(bytes);
      for (const im of j.images) {
        try {
          const raw8 = Uint8Array.from(atob(im.data), (c) => c.charCodeAt(0));
          const e = im.type === "png" ? await d.embedPng(raw8) : await d.embedJpg(raw8);
          const W = 595.28, H = 841.89, M = 48;
          const k = Math.min((W - 2 * M) / e.width, (H - 2 * M) / e.height, 1);
          const pg = d.addPage([W, H]);
          pg.drawImage(e, { x: (W - e.width * k) / 2, y: H - M - e.height * k, width: e.width * k, height: e.height * k });
          nImg++;
        } catch { /* skip unreadable image */ }
      }
      if (nImg) bytes = await d.save();
    }
    progress(1, 1);
    const host = new URL(j.url || raw).hostname.replace(/^www\./, "").replace(/[^\w.-]+/g, "-") || "page";
    return [pdfOut(`${host}.pdf`, bytes, `${j.text.length} ${u.done}${nImg ? ` · ${nImg} ${u.imgDone}` : ""}`)];
  }
  const f = files[0];
  if (tool === "flatten") {
    const { PDFDocument } = await lib();
    const d = await PDFDocument.load(f.bytes!);
    let n = 0;
    try { const form = d.getForm(); n = form.getFields().length; if (n) form.flatten(); } catch { n = 0; }
    return [pdfOut(`${base(f.name)}-flat.pdf`, await d.save(), n ? `${n} ${w.flatDone}` : w.noFields)];
  }
  if (tool === "metadata") {
    const { PDFDocument } = await lib();
    const d = await PDFDocument.load(f.bytes!);
    const m = metaDraft;
    d.setTitle(m.title); d.setAuthor(m.author); d.setSubject(m.subject);
    d.setKeywords(m.keywords.split(",").map((s) => s.trim()).filter(Boolean));
    d.setCreator(m.creator); d.setProducer(m.producer || "Nibras PDF"); d.setModificationDate(new Date());
    return [pdfOut(`${base(f.name)}.pdf`, await d.save())];
  }
  if (tool === "compare") {
    const [A, B] = files;
    const isPdf = (f: { name: string }) => /\.pdf$/i.test(f.name);
    const read = async (f: typeof A) => {
      if (isPdf(f)) return (await eng.pdfToText(f.bytes!, progress)).join("\n\n");
      if (/\.docx$/i.test(f.name)) return docxToText(f.bytes!);
      return new TextDecoder("utf-8").decode(f.bytes!);
    };
    const ta = await read(A), tb = await read(B);
    if (!ta.trim() || !tb.trim()) throw new Error(w.noText);
    const result = diffTexts(ta, tb, { pdfA: isPdf(A), pdfB: isPdf(B) });
    const html = diffReportHtml(result, A.name, B.name, `${A.name} ↔ ${B.name}`);
    const txt = diffReportText(result, A.name, B.name);
    return [{
      name: "compare-report.html", blob: new Blob([html], { type: "text/html;charset=utf-8" }), kind: "text", text: txt,
      diff: { result, nameA: A.name, nameB: B.name },
      note: result.changes ? `${result.changes} ${w.diffs} · −${result.removed} / +${result.added}` : w.same,
      extra: [{ label: "TXT", name: "compare.txt", blob: new Blob([txt], { type: "text/plain;charset=utf-8" }) }],
    }];
  }
  return [];
}
