// Options and runners for: flatten, metadata, compare, excel-csv, csv-excel. All run in the browser.
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import * as eng from "./lib/engine";
import { sheetsToXlsx } from "./lib/office";
import { field, Label } from "./ui";
import type { Out } from "./ui";

export const MORE_TOOLS = ["flatten", "metadata", "compare", "excel-csv", "csv-excel"] as const;
export type MoreTool = (typeof MORE_TOOLS)[number];
export const isMoreTool = (t: string): t is MoreTool => (MORE_TOOLS as readonly string[]).includes(t);

export type Meta = { title: string; author: string; subject: string; keywords: string; creator: string; producer: string };
const EMPTY: Meta = { title: "", author: "", subject: "", keywords: "", creator: "", producer: "" };
let metaDraft: Meta = { ...EMPTY };

type S = Record<"flatNote" | "metaNote" | "title" | "author" | "subject" | "keywords" | "creator" | "producer" | "pages" | "created" | "modified" | "noFields" | "flatDone" | "cmpNote" | "same" | "diffs" | "onlyA" | "onlyB" | "page" | "csvNote" | "xlsxNote" | "sep", string>;
const W: Record<Lang, S> = {
  az: { flatNote: "Doldurulmuş form sahələri səhifənin sabit hissəsi olur: sonra dəyişdirilmir. Mətn seçilə bilən qalır.", metaNote: "Faylın xassələri (Başlıq, Müəllif və s.) dəyişir. Səhifələrə toxunulmur.", title: "Başlıq", author: "Müəllif", subject: "Mövzu", keywords: "Açar sözlər (vergüllə)", creator: "Yaradan proqram", producer: "PDF istehsalçısı", pages: "Səhifə", created: "Yaradılıb", modified: "Dəyişdirilib", noFields: "Bu PDF-də doldurulan form sahəsi tapılmadı; fayl olduğu kimi yazıldı.", flatDone: "form sahəsi sabitləndi", cmpNote: "İki PDF-in mətni sətir-sətir müqayisə olunur. Şəkil və dizayn fərqləri görünmür. Skan PDF-də mətn yoxdursa, əvvəl OCR edin.", same: "Mətn eynidir.", diffs: "fərq", onlyA: "Yalnız 1-ci faylda", onlyB: "Yalnız 2-ci faylda", page: "Səhifə", csvNote: "Hər vərəq ayrıca CSV olur (UTF-8). Formul yox, yalnız dəyərlər.", xlsxNote: "CSV cədvəli XLSX faylına köçdü.", sep: "Ayırıcı" },
  en: { flatNote: "Filled form fields become a fixed part of the page and can no longer be edited. Text stays selectable.", metaNote: "Changes the file properties (Title, Author, etc.). Pages are not touched.", title: "Title", author: "Author", subject: "Subject", keywords: "Keywords (comma separated)", creator: "Creator app", producer: "Producer", pages: "Pages", created: "Created", modified: "Modified", noFields: "No fillable form fields found; the file was saved as is.", flatDone: "form fields flattened", cmpNote: "The text of two PDFs is compared line by line. Image and layout changes are not detected. For scanned PDFs, run OCR first.", same: "The text is identical.", diffs: "differences", onlyA: "Only in file 1", onlyB: "Only in file 2", page: "Page", csvNote: "Each sheet becomes its own CSV (UTF-8). Values only, no formulas.", xlsxNote: "The CSV table was copied into an XLSX file.", sep: "Separator" },
  tr: { flatNote: "Doldurulmuş form alanları sayfanın sabit parçası olur, artık düzenlenemez. Metin seçilebilir kalır.", metaNote: "Dosya özelliklerini (Başlık, Yazar vb.) değiştirir. Sayfalara dokunulmaz.", title: "Başlık", author: "Yazar", subject: "Konu", keywords: "Anahtar kelimeler (virgülle)", creator: "Oluşturan uygulama", producer: "Üretici", pages: "Sayfa", created: "Oluşturulma", modified: "Değiştirilme", noFields: "Doldurulabilir form alanı yok; dosya olduğu gibi kaydedildi.", flatDone: "form alanı sabitlendi", cmpNote: "İki PDF'in metni satır satır karşılaştırılır. Görsel ve düzen farkları görünmez. Taranmış PDF için önce OCR yapın.", same: "Metin aynı.", diffs: "fark", onlyA: "Sadece 1. dosyada", onlyB: "Sadece 2. dosyada", page: "Sayfa", csvNote: "Her sayfa ayrı CSV olur (UTF-8). Formül yok, sadece değerler.", xlsxNote: "CSV tablosu XLSX dosyasına aktarıldı.", sep: "Ayırıcı" },
  ar: { flatNote: "تصبح حقول النماذج المعبأة جزءاً ثابتاً من الصفحة ولا يمكن تعديلها بعد ذلك. يبقى النص قابلاً للتحديد.", metaNote: "يغيّر خصائص الملف (العنوان، المؤلف...). لا تُمس الصفحات.", title: "العنوان", author: "المؤلف", subject: "الموضوع", keywords: "كلمات مفتاحية (بفواصل)", creator: "التطبيق المنشئ", producer: "المنتج", pages: "الصفحات", created: "أُنشئ", modified: "عُدّل", noFields: "لا توجد حقول نماذج قابلة للتعبئة؛ حُفظ الملف كما هو.", flatDone: "حقل نموذج ثُبّت", cmpNote: "يُقارن نص ملفي PDF سطراً بسطر. لا تُكتشف فروق الصور والتنسيق. للملفات الممسوحة شغّل OCR أولاً.", same: "النص متطابق.", diffs: "فرق", onlyA: "في الملف 1 فقط", onlyB: "في الملف 2 فقط", page: "الصفحة", csvNote: "كل ورقة تصبح ملف CSV مستقلاً (UTF-8). القيم فقط بلا صيغ.", xlsxNote: "نُقل جدول CSV إلى ملف XLSX.", sep: "الفاصل" },
  ru: { flatNote: "Заполненные поля форм становятся неизменяемой частью страницы. Текст остаётся выделяемым.", metaNote: "Меняет свойства файла (Заголовок, Автор и т. д.). Страницы не меняются.", title: "Заголовок", author: "Автор", subject: "Тема", keywords: "Ключевые слова (через запятую)", creator: "Программа-создатель", producer: "Производитель PDF", pages: "Страниц", created: "Создан", modified: "Изменён", noFields: "Заполняемых полей нет; файл сохранён как есть.", flatDone: "полей формы закреплено", cmpNote: "Текст двух PDF сравнивается построчно. Изменения картинок и вёрстки не видны. Для сканов сначала сделайте OCR.", same: "Текст совпадает.", diffs: "различий", onlyA: "Только в файле 1", onlyB: "Только в файле 2", page: "Стр.", csvNote: "Каждый лист — отдельный CSV (UTF-8). Только значения, без формул.", xlsxNote: "Таблица CSV перенесена в XLSX.", sep: "Разделитель" },
};
const mw = (l: Lang) => W[l] ?? W.en;

export const moreKind = (t: MoreTool) => (t === "compare" ? "pdfs" : t === "excel-csv" || t === "csv-excel" ? "sheet" : "pdf") as "pdf" | "pdfs" | "sheet";

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
    const ta = await eng.pdfToText(A.bytes!, progress), tb = await eng.pdfToText(B.bytes!, progress);
    const lines = (p: string[]) => p.flatMap((t) => t.split("\n")).map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);
    const r = diffLines(lines(ta), lines(tb));
    const total = r.onlyA.length + r.onlyB.length;
    const text = total ? [`− ${w.onlyA}: ${A.name}`, ...r.onlyA.map((s) => `- ${s}`), "", `+ ${w.onlyB}: ${B.name}`, ...r.onlyB.map((s) => `+ ${s}`)].join("\n") : w.same;
    return [{ name: "compare.txt", blob: new Blob([text], { type: "text/plain;charset=utf-8" }), kind: "text", text, note: total ? `${total} ${w.diffs} · ${ta.length}/${tb.length} ${w.page}` : w.same }];
  }
  return [];
}
