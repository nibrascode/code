import { RecentFiles } from "@/components/recent-files";
import { takeHandOff } from "@/lib/handoff";
import { DOC_TEMPLATES, TEMPLATE_LABEL } from "./templates";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, Camera, Check, FileText, FileType2, Files, Image as ImageIcon, Layers, Lock, Minimize2,
  PenLine, RotateCw, ScanText, Scissors, Droplet, ListOrdered, Eye, FilePlus2, FileOutput, FileImage, ScanLine, X, Hash, Unlock, Crop, Contrast, Table2, EyeOff, Receipt, Sheet, Presentation, Layers2, Info, GitCompare, FileSpreadsheet } from "lucide-react";
import { isMoreTool, MoreOptions, runMore } from "./more";
import { zipSync } from "fflate";
import type { Lang } from "@/lib/i18n";
import { COPY, type Dict } from "./copy";
import { TOOL_IDS, TOOL_TEXT, type ToolId } from "./tool-text";
import {
  btn, btnPrimary, card, field, FileDrop, fmtSize, Label, PdfCanvas, PdfViewer, ResultCard, Seg, usePageThumbs, type Out,
} from "./ui";
import * as eng from "./lib/engine";
import { closePdf, openPdf, renderPageToCanvas } from "./lib/pdfjs";
import { OCR_LANGS, detectOcrLangs, ocrDetailed, preprocessForOcr, ocrLangForSite, type OcrLang } from "./lib/ocr";
import { extractTextSmart } from "./lib/extract";
import { createDocxFromText, docxToText } from "./lib/docx";
import type { WatermarkPosition } from "./lib/pdfOperations";
import { pdfToTables, pptxToPdf, sheetsToXlsx } from "./lib/office";
import { ExtraOptions, EXTRA_ACCEPT, readSheetFile, runExtra, UserError, X_DEFAULT } from "./extra";

const ICONS: Record<ToolId, typeof FileText> = {
  "write-pdf": PenLine, merge: Files, split: Scissors, compress: Minimize2, "image-pdf": ImageIcon, "pdf-image": FileImage,
  rotate: RotateCw, protect: Lock, watermark: Droplet, pages: ListOrdered, scan: ScanLine, sign: PenLine, ocr: ScanText,
  "pdf-ocr": FileType2, "pdf-word": FileOutput, preview: Eye, batch: Layers, "extract-pages": Check, "word-pdf": FilePlus2, "page-numbers": Hash,
  unlock: Unlock, crop: Crop, grayscale: Contrast, "excel-pdf": Table2, redact: EyeOff, invoice: Receipt, "pdf-excel": Sheet, "ppt-pdf": Presentation, "pdf-ppt": Presentation,
  flatten: Layers2, metadata: Info, compare: GitCompare, "excel-csv": FileSpreadsheet, "csv-excel": FileSpreadsheet,
};

type Kind = "pdf" | "pdfs" | "images" | "docx" | "sheet" | "pptx" | "none";
const KIND: Record<ToolId, Kind> = {
  "write-pdf": "none", merge: "pdfs", split: "pdf", compress: "pdf", "image-pdf": "images", "pdf-image": "pdf", rotate: "pdf",
  protect: "pdf", watermark: "pdf", pages: "pdf", scan: "images", sign: "pdf", ocr: "images", "pdf-ocr": "pdf", "pdf-word": "pdf",
  preview: "pdf", batch: "pdfs", "extract-pages": "pdf", "word-pdf": "docx", "page-numbers": "pdf",
  unlock: "pdf", crop: "pdf", grayscale: "pdf", "excel-pdf": "sheet", redact: "pdf", invoice: "none", "pdf-excel": "pdf", "ppt-pdf": "pptx", "pdf-ppt": "pdf",
  flatten: "pdf", metadata: "pdf", compare: "pdfs", "excel-csv": "sheet", "csv-excel": "sheet",
};

type Item = { id: number; file: File; name: string; bytes?: Uint8Array; pages?: number; locked?: boolean; wasLocked?: boolean; bad?: boolean };
let nextId = 1;
const baseName = (n: string) => n.replace(/\.[^.]+$/, "") || "document";
const WM_POS: { id: WatermarkPosition; s: string }[] = [
  { id: "top-left", s: "↖" }, { id: "top-center", s: "↑" }, { id: "top-right", s: "↗" },
  { id: "center-left", s: "←" }, { id: "center", s: "•" }, { id: "center-right", s: "→" },
  { id: "bottom-left", s: "↙" }, { id: "bottom-center", s: "↓" }, { id: "bottom-right", s: "↘" },
];

const GROUPS: { id: string; tools: ToolId[]; label: Record<Lang, string> }[] = [
  { id: "organize", tools: ["merge", "split", "pages", "extract-pages", "rotate", "page-numbers", "crop", "flatten", "batch"], label: { az: "Səhifələri idarə et", en: "Organize", tr: "Sayfaları düzenle", ar: "تنظيم الصفحات", ru: "Страницы и файлы" } },
  { id: "convert", tools: ["pdf-image", "pdf-word", "word-pdf", "pdf-excel", "excel-pdf", "ppt-pdf", "pdf-ppt", "excel-csv", "csv-excel", "pdf-ocr", "ocr", "grayscale", "compare", "metadata", "preview"], label: { az: "Çevir və oxu", en: "Convert & read", tr: "Dönüştür ve oku", ar: "تحويل وقراءة", ru: "Конвертация и чтение" } },
  { id: "create", tools: ["write-pdf", "image-pdf", "scan", "invoice"], label: { az: "Hazırla", en: "Create", tr: "Oluştur", ar: "إنشاء", ru: "Создание" } },
  { id: "secure", tools: ["compress", "protect", "unlock", "redact", "watermark", "sign"], label: { az: "Optimallaşdır və qoru", en: "Optimize & protect", tr: "Optimize et ve koru", ar: "تحسين وحماية", ru: "Сжатие и защита" } },
];

const NUM_POS: { id: eng.NumPos; s: string }[] = [
  { id: "top-left", s: "↖" }, { id: "top-center", s: "↑" }, { id: "top-right", s: "↗" },
  { id: "bottom-left", s: "↙" }, { id: "bottom-center", s: "↓" }, { id: "bottom-right", s: "↘" },
];
const NUM_T: Record<Lang, { from: string; fromHint: string; start: string; startHint: string; pos: string; fmt: string; size: string; margin: string; preview: string; page: string }> = {
  az: { from: "Hansı səhifədən başlasın", fromHint: "Üz qabığını nömrəsiz saxlamaq üçün 2 yazın.", start: "İlk rəqəm", startHint: "Nömrələnən ilk səhifədə görünən rəqəm.", pos: "Yer", fmt: "Görünüş", size: "Şrift ölçüsü", margin: "Kənardan məsafə", preview: "Nümunə", page: "səhifə" },
  en: { from: "Start on page", fromHint: "Set 2 to keep the cover unnumbered.", start: "First number", startHint: "The number shown on the first numbered page.", pos: "Position", fmt: "Format", size: "Font size", margin: "Distance from edge", preview: "Preview", page: "page" },
  tr: { from: "Başlangıç sayfası", fromHint: "Kapağı numarasız bırakmak için 2 yazın.", start: "İlk sayı", startHint: "Numaralanan ilk sayfada görünen sayı.", pos: "Konum", fmt: "Biçim", size: "Yazı boyutu", margin: "Kenardan uzaklık", preview: "Örnek", page: "sayfa" },
  ar: { from: "البدء من الصفحة", fromHint: "اكتب 2 لترك الغلاف بلا رقم.", start: "الرقم الأول", startHint: "الرقم الذي يظهر على أول صفحة مرقّمة.", pos: "الموضع", fmt: "الشكل", size: "حجم الخط", margin: "المسافة من الحافة", preview: "مثال", page: "صفحة" },
  ru: { from: "Начать со страницы", fromHint: "Укажите 2, чтобы обложка осталась без номера.", start: "Первое число", startHint: "Число на первой нумеруемой странице.", pos: "Место", fmt: "Вид", size: "Размер шрифта", margin: "Отступ от края", preview: "Пример", page: "стр." },
};
const OX: Record<Lang, Record<"pickPptx" | "errPptx" | "noTable" | "rows" | "xlNote" | "sheets" | "perPage" | "oneSheet" | "slides" | "pptNote", string>> = {
  az: { pickPptx: "PPTX seçin", errPptx: "Bu fayl PPTX deyil. Köhnə .ppt-ni PowerPoint-də PPTX kimi saxlayın.", noTable: "Mətn tapılmadı. Skan PDF-dirsə əvvəl «PDF-dən mətn (OCR)» alətini işlədin.", rows: "sətir", xlNote: "Sütunlar mətnin yerinə görə qurulur. Sadə cədvəllər yaxşı çıxır; birləşmiş xana və mürəkkəb cədvəli yoxlayın.", sheets: "Vərəqlər", perPage: "Hər səhifə ayrı vərəq", oneSheet: "Hamısı bir vərəqdə", slides: "slayd", pptNote: "Mətn qutuları və şəkillər yerində çəkilir. Tema fonu, qrafik, SmartArt və effektlər köçmür." },
  en: { pickPptx: "Choose a PPTX", errPptx: "This is not a PPTX file. Save an old .ppt as PPTX in PowerPoint.", noTable: "No text found. If it's a scanned PDF, run «PDF to text (OCR)» first.", rows: "rows", xlNote: "Columns are rebuilt from text positions. Simple tables work well; check merged cells and complex tables.", sheets: "Sheets", perPage: "One sheet per page", oneSheet: "All in one sheet", slides: "slides", pptNote: "Text boxes and pictures are drawn in place. Theme backgrounds, charts, SmartArt and effects are not copied." },
  tr: { pickPptx: "PPTX seçin", errPptx: "Bu dosya PPTX değil. Eski .ppt'yi PowerPoint'te PPTX olarak kaydedin.", noTable: "Metin bulunamadı. Taranmış PDF ise önce «PDF'ten metin (OCR)» aracını kullanın.", rows: "satır", xlNote: "Sütunlar metnin konumuna göre kurulur. Basit tablolar iyi çıkar; birleşik hücre ve karmaşık tabloları kontrol edin.", sheets: "Sayfalar", perPage: "Her sayfa ayrı sayfa", oneSheet: "Hepsi tek sayfada", slides: "slayt", pptNote: "Metin kutuları ve görseller yerinde çizilir. Tema arka planı, grafik, SmartArt ve efektler aktarılmaz." },
  ar: { pickPptx: "اختر ملف PPTX", errPptx: "هذا ليس ملف PPTX. احفظ ملف ppt القديم بصيغة PPTX في PowerPoint.", noTable: "لم يُعثر على نص. إن كان PDF ممسوحاً فاستخدم أداة OCR أولاً.", rows: "صف", xlNote: "تُبنى الأعمدة من مواضع النص. الجداول البسيطة تخرج جيداً؛ افحص الخلايا المدمجة والجداول المعقدة.", sheets: "الأوراق", perPage: "ورقة لكل صفحة", oneSheet: "الكل في ورقة واحدة", slides: "شريحة", pptNote: "تُرسم مربعات النص والصور في مكانها. لا تُنقل خلفيات السمة والرسوم البيانية وSmartArt والتأثيرات." },
  ru: { pickPptx: "Выберите PPTX", errPptx: "Это не PPTX. Сохраните старый .ppt как PPTX в PowerPoint.", noTable: "Текст не найден. Если это скан, сначала запустите «PDF в текст (OCR)».", rows: "строк", xlNote: "Столбцы восстанавливаются по положению текста. Простые таблицы выходят хорошо; проверьте объединённые ячейки и сложные таблицы.", sheets: "Листы", perPage: "Каждая страница — лист", oneSheet: "Всё на одном листе", slides: "слайдов", pptNote: "Текстовые блоки и картинки рисуются на своих местах. Фон темы, диаграммы, SmartArt и эффекты не переносятся." },
};
const basePath = (lang: Lang) => (lang === "az" ? "/pdf" : `/${lang}/pdf`);

export function PdfTool({ lang, tool }: { lang: Lang; tool: ToolId | null }) {
  const t = COPY[lang];
  const names = TOOL_TEXT[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const navigate = useNavigate();
  const base = basePath(lang);
  const go = (to: string) => {
    void navigate({ to: to as never });
    window.scrollTo({ top: 0 });
  };
  const link = (to: string) => ({
    href: to,
    onClick: (e: React.MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      go(to);
    },
  });

  // Old deep links (/pdf#merge) move to the real per-tool page.
  useEffect(() => {
    const h = location.hash.replace("#", "");
    if (!tool && (TOOL_IDS as readonly string[]).includes(h)) void navigate({ to: `${base}/${h}` as never, replace: true });
  }, [tool, base, navigate]);

  return (
    <div dir={dir} className="pdf-tool">
      {tool ? (
        <>
          <a {...link(base)} className={`${btn} mb-4`} data-testid="back">
            {dir === "rtl" ? <ArrowRight className="size-4" /> : <ArrowLeft className="size-4" />}
            {t.back}
          </a>
          <Workspace key={tool} tool={tool} lang={lang} t={t} title={names[tool].title} desc={names[tool].description} />
        </>
      ) : (
        <div data-testid="tool-grid">
          {GROUPS.map((g, gi) => (
            <section key={g.id} aria-label={g.label[lang]}>
              <h2 className="pdf-group-title">{g.label[lang]}</h2>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {g.tools.map((id, i) => {
                  const Icon = ICONS[id];
                  return (
                    <a key={id} {...link(`${base}/${id}`)} data-tool={id} className="pdf-tile" style={{ ["--i" as string]: gi * 3 + i }}>
                      <span className="pdf-ico"><Icon className="size-5" /></span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{names[id].title}</span>
                        <span className="mt-0.5 block text-xs leading-snug text-muted">{names[id].description}</span>
                      </span>
                      <ArrowRight className="pdf-arrow size-4 shrink-0 self-center" />
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
          <p className="mt-8 text-center text-xs text-muted">{t.privateNote}</p>
        </div>
      )}
    </div>
  );
}

function Workspace({ tool, lang, t, title, desc }: { tool: ToolId; lang: Lang; t: Dict; title: string; desc: string }) {
  const kind = KIND[tool];
  const ox = OX[lang] ?? OX.en;
  const [xlMode, setXlMode] = useState<"pages" | "one">("pages");
  const [items, setItems] = useState<Item[]>([]);
  const [outs, setOuts] = useState<Out[]>([]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState<{ frac: number; label: string } | null>(null);
  const cancelled = useRef(false);

  // options
  const [pageSize, setPageSize] = useState<eng.PageSizeId | "fit">("a4");
  const [quality, setQuality] = useState<eng.Quality>("balanced");
  const [mode, setMode] = useState<"light" | "strong">("strong");
  const [rot, setRot] = useState(90);
  const [scope, setScope] = useState<"all" | "range">("all");
  const [range, setRange] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [wm, setWm] = useState(t.wmDefault);
  const [wmPos, setWmPos] = useState<WatermarkPosition>("center");
  const [imgFmt, setImgFmt] = useState<"png" | "jpeg">("png");
  const [ocrLang, setOcrLang] = useState<OcrLang | "auto" | "all">("auto");
  const [batchOp, setBatchOp] = useState<"compress" | "rotate" | "watermark" | "split">("compress");
  const [numFrom, setNumFrom] = useState(1);
  const [numStart, setNumStart] = useState(1);
  const [numPos, setNumPos] = useState<eng.NumPos>("bottom-center");
  const [numFmt, setNumFmt] = useState<eng.NumFormat>("n");
  const [numSize, setNumSize] = useState(11);
  const [numMargin, setNumMargin] = useState(28);
  const [forceOcr, setForceOcr] = useState(false);
  const [xs, setXs] = useState(X_DEFAULT);
  const [sheets, setSheets] = useState<{ name: string; rows: string[][] }[] | null>(null);
  const [viewZoom, setViewZoom] = useState(1);
  const [openOut, setOpenOut] = useState<Out | null>(null);
  const [openBytes, setOpenBytes] = useState<Uint8Array | null>(null);
  // text writer
  const [wText, setWText] = useState("");
  const [wTitle, setWTitle] = useState("");
  const [wSize, setWSize] = useState(12);
  const [wAlign, setWAlign] = useState<"left" | "center" | "right">("left");
  const [wBold, setWBold] = useState(false);
  const [wMargin, setWMargin] = useState(54);
  const [wNums, setWNums] = useState(true);
  const [wPage, setWPage] = useState<eng.PageSizeId>("a4");
  // pages / extract
  const [order, setOrder] = useState<{ index: number; del: boolean }[]>([]);
  const [sel, setSel] = useState<Set<number>>(new Set());
  // split
  const [splitMode, setSplitMode] = useState<"pick" | "every" | "each" | "ranges">("pick");
  const [splitText, setSplitText] = useState("");
  const [splitN, setSplitN] = useState(10);
  const [splitRows, setSplitRows] = useState<string[]>([""]);
  // sign
  const [sigPng, setSigPng] = useState<Uint8Array | null>(null);
  const [sigUrl, setSigUrl] = useState("");
  const [sigPage, setSigPage] = useState(0);
  const [sigPos, setSigPos] = useState<{ x: number; y: number } | null>(null);
  const [sigSize, setSigSize] = useState(0.25);
  const [signCanvas, setSignCanvas] = useState<HTMLCanvasElement | null>(null);

  const first = items[0];
  const firstBytes = first?.bytes && !first.locked ? first.bytes : null;
  const needsThumbs = tool === "pages" || tool === "extract-pages" || (tool === "split" && splitMode === "pick");
  const thumbs = usePageThumbs(needsThumbs ? firstBytes : null, 0.35, tool === "split" ? 60 : 200);

  // writer draft
  useEffect(() => {
    if (tool !== "write-pdf") return;
    try {
      const d = JSON.parse(localStorage.getItem("nibras-pdf-draft") ?? "null");
      if (d?.text) { setWText(d.text); setWTitle(d.title ?? ""); }
    } catch { /* ignore */ }
  }, [tool]);
  useEffect(() => {
    if (tool !== "write-pdf") return;
    const id = new URLSearchParams(location.search).get("t");
    const tp = id && DOC_TEMPLATES.find((x) => x.id === id);
    if (tp) { setWTitle(tp.title[lang] ?? tp.title.az); setWText(tp.body[lang] ?? tp.body.az); }
  }, [tool, lang]);
  useEffect(() => {
    if (tool !== "write-pdf") return;
    const h = setTimeout(() => localStorage.setItem("nibras-pdf-draft", JSON.stringify({ text: wText, title: wTitle })), 400);
    return () => clearTimeout(h);
  }, [tool, wText, wTitle]);

  // reset page-level state when the source file changes
  useEffect(() => {
    if (first?.pages) setOrder(Array.from({ length: first.pages }, (_, i) => ({ index: i, del: false })));
    else setOrder([]);
    setSel(new Set());
    setSigPage(0);
    setSigPos(null);
  }, [first?.id, first?.pages]);

  // sign page render
  useEffect(() => {
    if (tool !== "sign" || !firstBytes) { setSignCanvas(null); return; }
    let dead = false;
    (async () => {
      const d = await openPdf(firstBytes);
      try {
        const c = await renderPageToCanvas(d, sigPage + 1, 1.4);
        if (!dead) setSignCanvas(c);
      } finally { await closePdf(d); }
    })().catch(() => undefined);
    return () => { dead = true; };
  }, [tool, firstBytes, sigPage]);

  useEffect(() => {
    if (!openOut) { setOpenBytes(null); return; }
    openOut.blob.arrayBuffer().then((b) => setOpenBytes(new Uint8Array(b)));
  }, [openOut]);

  const accept = kind === "pptx" ? ".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation" : kind === "sheet" ? EXTRA_ACCEPT : kind === "images" ? "image/*" : kind === "docx" ? ".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" : "application/pdf,.pdf";
  const multiple = kind === "pdfs" || kind === "images";

  const addFiles = useCallback(async (files: File[]) => {
    setErr("");
    setOuts([]);
    const list = multiple ? files : files.slice(0, 1);
    const made: Item[] = [];
    for (const file of list) {
      const item: Item = { id: nextId++, file, name: file.name };
      if (kind === "images") {
        if (!file.type.startsWith("image/")) { setErr(t.errNoImages); continue; }
      } else if (kind === "sheet") {
        try { const sh = await readSheetFile(file, lang); setSheets(sh); setXs((x) => ({ ...x, sheetIdx: 0 })); } catch (e) { setErr((e as Error).message); continue; }
      } else if (kind === "pptx") {
        if (!/\.pptx$/i.test(file.name)) { setErr(ox.errPptx); continue; }
        item.bytes = new Uint8Array(await file.arrayBuffer());
      } else if (kind === "docx") {
        if (!/\.docx$/i.test(file.name)) { setErr(t.errNotDocx); continue; }
        item.bytes = new Uint8Array(await file.arrayBuffer());
      } else {
        if (!/\.pdf$/i.test(file.name) && file.type !== "application/pdf") { setErr(t.errNotPdf); continue; }
        item.bytes = new Uint8Array(await file.arrayBuffer());
        try {
          item.pages = await eng.pageCount(item.bytes);
        } catch (e) {
          if (eng.isEncryptedError(e)) item.locked = true;
          else { setErr(t.errNotPdf); continue; }
        }
      }
      made.push(item);
    }
    setItems((cur) => (multiple ? [...cur, ...made] : made));
  }, [kind, multiple, t, lang]);
  useEffect(() => {
    if (kind !== "images") return;
    const h = takeHandOff();
    if (h.length) void addFiles(h);
  }, [kind, addFiles]);

  const unlock = async (id: number, password: string) => {
    const it = items.find((i) => i.id === id);
    if (!it?.bytes) return;
    try {
      const bytes = await eng.unlockPdf(it.bytes, password);
      const pages = await eng.pageCount(bytes);
      setItems((cur) => cur.map((i) => (i.id === id ? { ...i, bytes, pages, locked: false, wasLocked: true } : i)));
      setErr("");
    } catch (e) {
      console.error("[pdf] unlock", (e as Error)?.stack ?? String(e));
      setErr(t.errLocked);
    }
  };

  const move = (i: number, d: number) =>
    setItems((cur) => {
      const j = i + d;
      if (j < 0 || j >= cur.length) return cur;
      const c = cur.slice();
      [c[i], c[j]] = [c[j], c[i]];
      return c;
    });

  const progress = (label: string) => (done: number, total: number) => setBusy({ label, frac: total ? done / total : 0 });
  const stop = () => cancelled.current;
  const pdfOut = (name: string, bytes: Uint8Array, note?: string): Out => ({ name, blob: new Blob([bytes as BlobPart], { type: "application/pdf" }), kind: "pdf", note });
  const zipOut = (name: string, files: { name: string; data: Uint8Array }[]): Out => {
    const z = zipSync(Object.fromEntries(files.map((f) => [f.name, [f.data, { level: 0 }] as [Uint8Array, { level: 0 }]])));
    return { name, blob: new Blob([z as BlobPart], { type: "application/zip" }), kind: "zip" };
  };
  const docxBlob = (text: string) => new Blob([createDocxFromText(text) as BlobPart], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  const textOut = (name: string, text: string, note?: string): Out => ({
    name: `${name}.txt`,
    blob: new Blob([text], { type: "text/plain;charset=utf-8" }),
    kind: "text",
    text,
    note,
    extra: [{ label: "DOCX", name: `${name}.docx`, blob: docxBlob(text) }],
  });
  const pagesSel = (total: number): number[] | undefined | null => {
    if (scope === "all") return undefined;
    return eng.parseRange(range, total);
  };

  const run = async () => {
    setErr("");
    setOuts([]);
    cancelled.current = false;
    try {
      const res: Out[] = [];
      const need = (n = 1) => {
        if (kind !== "none" && items.length < n) { throw new Error(n > 1 ? t.errNeedTwo : t.errNoFile); }
        if (items.some((i) => i.locked)) throw new Error(t.errLocked);
      };
      setBusy({ label: t.working, frac: 0 });
      const f = items[0];
      switch (tool) {
        case "merge": {
          need(2);
          res.push(pdfOut("merged.pdf", await eng.mergePdfs(items.map((i) => i.bytes!))));
          break;
        }
        case "split": {
          need();
          const total = f.pages ?? (await eng.pageCount(f.bytes!));
          const b = baseName(f.name);
          let groups: number[][] | null;
          if (splitMode === "pick") { const g = eng.parseRange(splitText, total); groups = g ? [g] : null; }
          else groups = eng.splitGroups(total, { mode: splitMode, n: splitN, ranges: splitRows });
          if (!groups) throw new Error(splitMode === "ranges" || splitMode === "pick" ? t.splitBad : t.errNoSel);
          const parts = await eng.splitInto(f.bytes!, groups, (d, n) => setBusy({ label: t.working, frac: d / n }), stop);
          const label = (g: number[]) => (g.length === 1 ? `p${g[0] + 1}` : g[g.length - 1] - g[0] + 1 === g.length ? `p${g[0] + 1}-${g[g.length - 1] + 1}` : `p${g.map((x) => x + 1).slice(0, 4).join('_')}${g.length > 4 ? '_etc' : ''}`);
          const files = parts.map((x, i) => ({ name: parts.length === 1 ? `${b}-${label(groups![0])}.pdf` : `${b}-${label(groups![i])}.pdf`, data: x }));
          if (files.length > 1) res.push(zipOut(`${b}-split.zip`, files));
          files.slice(0, 20).forEach((x) => res.push(pdfOut(x.name, x.data)));
          break;
        }
        case "compress": {
          need();
          const b = baseName(f.name);
          let out: Uint8Array | null = mode === "strong" ? await eng.compressStrong(f.bytes!, quality, progress(t.working), stop) : await eng.compressLight(f.bytes!);
          if (!out) break;
          const smaller = out.byteLength < f.bytes!.byteLength;
          res.push(pdfOut(`${b}-compressed.pdf`, smaller ? out : f.bytes!, smaller ? `${t.size}: ${fmtSize(f.bytes!.byteLength)} → ${fmtSize(out.byteLength)} (${t.saved} ${Math.round((1 - out.byteLength / f.bytes!.byteLength) * 100)}%)` : t.larger));
          out = null;
          break;
        }
        case "image-pdf":
        case "scan": {
          if (!items.length) throw new Error(t.errNoImages);
          res.push(pdfOut(tool === "scan" ? "scan.pdf" : "images.pdf", await eng.imagesToPdf(items.map((i) => i.file), pageSize, quality, progress(t.working))));
          break;
        }
        case "pdf-image": {
          need();
          const blobs = await eng.pdfToImages(f.bytes!, imgFmt, quality, progress(t.working), stop);
          const ext = imgFmt === "png" ? "png" : "jpg";
          const b = baseName(f.name);
          const buf = await Promise.all(blobs.map(async (x) => new Uint8Array(await x.arrayBuffer())));
          res.push(zipOut(`${b}-images.zip`, buf.map((d, i) => ({ name: `${b}-${i + 1}.${ext}`, data: d }))));
          blobs.slice(0, 20).forEach((x, i) => res.push({ name: `${b}-${i + 1}.${ext}`, blob: x, kind: "image" }));
          break;
        }
        case "rotate": {
          need();
          const p = pagesSel(f.pages ?? 0);
          if (p === null) throw new Error(t.errBadRange);
          res.push(pdfOut(`${baseName(f.name)}-rotated.pdf`, await eng.rotatePdf(f.bytes!, rot, p)));
          break;
        }
        case "protect": {
          need();
          if (pwd.length < 4) throw new Error(t.errPwdShort);
          if (pwd !== pwd2) throw new Error(t.errPwdMismatch);
          res.push(pdfOut(`${baseName(f.name)}-protected.pdf`, await eng.protectPdf(f.bytes!, pwd)));
          break;
        }
        case "watermark": {
          need();
          const p = pagesSel(f.pages ?? 0);
          if (p === null) throw new Error(t.errBadRange);
          res.push(pdfOut(`${baseName(f.name)}-watermark.pdf`, await eng.watermarkPdf(f.bytes!, wm.trim() || "NIBRAS PDF", wmPos, p)));
          break;
        }
        case "page-numbers": {
          need();
          res.push(pdfOut(`${baseName(f.name)}-numbered.pdf`, await eng.addPageNumbers(f.bytes!, { fromPage: numFrom, start: numStart, position: numPos, format: numFmt, size: Math.max(6, Math.min(36, numSize || 11)), margin: Math.max(8, Math.min(120, numMargin || 28)) })));
          break;
        }
        case "pages": {
          need();
          const keep = order.filter((o) => !o.del).map((o) => o.index);
          if (!keep.length) throw new Error(t.errNoSel);
          res.push(pdfOut(`${baseName(f.name)}-pages.pdf`, await eng.reorderPages(f.bytes!, keep)));
          break;
        }
        case "extract-pages": {
          need();
          const idx = [...sel].sort((a, b) => a - b);
          if (!idx.length) throw new Error(t.errNoSel);
          res.push(pdfOut(`${baseName(f.name)}-extract.pdf`, await eng.extractPages(f.bytes!, idx)));
          break;
        }
        case "sign": {
          need();
          if (!sigPng) throw new Error(t.errNoSign);
          if (!sigPos) throw new Error(t.signHint);
          res.push(pdfOut(`${baseName(f.name)}-signed.pdf`, await eng.signPdf(f.bytes!, sigPng, sigPage, sigPos.x, sigPos.y, sigSize)));
          break;
        }
        case "ocr": {
          if (!items.length) throw new Error(t.errNoImages);
          const canvases: HTMLCanvasElement[] = [];
          for (const it of items) {
            const bmp = await createImageBitmap(it.file);
            const k = Math.min(3, 3000 / Math.max(bmp.width, bmp.height));
            const c = document.createElement("canvas");
            c.width = Math.round(bmp.width * Math.max(k, 1)); c.height = Math.round(bmp.height * Math.max(k, 1));
            const cx = c.getContext("2d", { willReadFrequently: true })!;
            cx.fillStyle = "#fff"; cx.fillRect(0, 0, c.width, c.height); cx.drawImage(bmp, 0, 0, c.width, c.height); bmp.close();
            canvases.push(preprocessForOcr(c));
          }
          const langs: OcrLang[] = ocrLang === "auto" ? await detectOcrLangs(canvases[0], ocrLangForSite(lang)) : ocrLang === "all" ? ["aze", "eng", "tur", "rus", "ara"] : [ocrLang];
          const pagesOut = await ocrDetailed(canvases, langs, { onProgress: (d, n, fr) => setBusy({ label: `${t.ocrWorking} ${d + 1}/${n}`, frac: (d + fr) / n }), shouldCancel: stop });
          const text = pagesOut.map((p) => p.text).join("\n\n").trim();
          if (!text) throw new Error(t.errNoText);
          const avg = Math.round(pagesOut.reduce((a, p) => a + p.confidence, 0) / Math.max(1, pagesOut.length));
          res.push(textOut("text", text, `${t.confidence}: ${avg}%`));
          break;
        }
        case "pdf-ocr":
        case "pdf-word": {
          need();
          const r = await extractTextSmart(f.bytes!, {
            uiLang: lang,
            ocr: tool === "pdf-ocr" && forceOcr ? "force" : "auto",
            langs: ocrLang === "auto" ? "auto" : ocrLang === "all" ? ["aze", "eng", "tur", "rus", "ara"] : [ocrLang, ...(ocrLang === "eng" ? [] : (["eng"] as OcrLang[]))],
            shouldCancel: stop,
            onProgress: (p) => setBusy({ label: `${p.phase === "ocr" ? t.ocrWorking : p.phase === "render" ? t.preparing : t.working} ${p.page}/${p.total}`, frac: p.phase === "text" ? p.fraction * 0.2 : 0.2 + p.fraction * 0.8 }),
          });
          if (!r.text.trim()) throw new Error(t.errNoText);
          const note = [r.usedOcr ? `${t.ocrUsed} (${r.langs.join("+")})${r.avgConfidence != null ? ` · ${t.confidence}: ${r.avgConfidence}%` : ""}` : t.textLayer, r.lowConfidencePages.length ? `${t.lowConf}: ${r.lowConfidencePages.join(", ")}` : ""].filter(Boolean).join(" · ");
          if (tool === "pdf-word") res.push({ name: `${baseName(f.name)}.docx`, blob: docxBlob(r.text), kind: "docx", note: `${note} · ${t.wordNote}` });
          else res.push(textOut(baseName(f.name), r.text, note));
          break;
        }
        case "word-pdf": {
          need();
          let text: string;
          try { text = docxToText(f.bytes!); } catch { throw new Error(t.errNotDocx); }
          if (!text) throw new Error(t.errNoText);
          res.push(pdfOut(`${baseName(f.name)}.pdf`, await eng.textToPdf(text, { size: "a4", fontSize: 12, align: "left", bold: false, margin: 56, pageNumbers: true }), t.textOnly));
          break;
        }
        case "write-pdf": {
          if (!wText.trim() && !wTitle.trim()) throw new Error(t.errNoText);
          res.push(pdfOut("document.pdf", await eng.textToPdf(wText, { size: wPage, fontSize: wSize, align: wAlign, bold: wBold, margin: wMargin, pageNumbers: wNums, title: wTitle })));
          break;
        }
        case "batch": {
          need(1);
          const files: { name: string; data: Uint8Array }[] = [];
          for (let i = 0; i < items.length; i++) {
            if (stop()) break;
            setBusy({ label: t.working, frac: i / items.length });
            const it = items[i];
            const b = baseName(it.name);
            if (batchOp === "compress") files.push({ name: `${b}-compressed.pdf`, data: await eng.compressLight(it.bytes!) });
            else if (batchOp === "rotate") files.push({ name: `${b}-rotated.pdf`, data: await eng.rotatePdf(it.bytes!, 90) });
            else if (batchOp === "watermark") files.push({ name: `${b}-watermark.pdf`, data: await eng.watermarkPdf(it.bytes!, wm.trim() || "NIBRAS PDF", wmPos) });
            else (await eng.splitPdf(it.bytes!)).forEach((p, k) => files.push({ name: `${b}-${k + 1}.pdf`, data: p }));
          }
          res.push(zipOut("batch.zip", files));
          if (files.length <= 10) files.forEach((x) => res.push(pdfOut(x.name, x.data)));
          break;
        }
        case "pdf-ppt": {
          need();
          const blobs = await eng.pdfToImages(f.bytes!, "jpeg", "high", progress(t.working), stop);
          const { imagesToPptx } = await import("./lib/images-to-pptx");
          res.push({ name: `${baseName(f.name)}.pptx`, blob: await imagesToPptx(blobs, "jpg"), kind: "zip", note: `${blobs.length} slides` });
          break;
        }
        case "pdf-excel": {
          need();
          const pagesT = await pdfToTables(f.bytes!, progress(t.working), stop);
          const sheets = xlMode === "one" ? [{ name: "PDF", rows: pagesT.flatMap((sh, i) => (i && sh.rows.length ? [[], ...sh.rows] : sh.rows)) }] : pagesT;
          const cells = sheets.reduce((a, sh) => a + sh.rows.length, 0);
          if (!cells) throw new UserError(ox.noTable);
          const blob = new Blob([(await sheetsToXlsx(sheets.filter((sh) => sh.rows.length))) as BlobPart], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
          res.push({ name: `${baseName(f.name)}.xlsx`, blob, kind: "xlsx", note: `${cells} ${ox.rows} · ${ox.xlNote}` });
          break;
        }
        case "ppt-pdf": {
          need();
          let r: { bytes: Uint8Array; slides: number };
          try { r = await pptxToPdf(f.bytes!, progress(t.working)); } catch (e) { if (e instanceof Error && /not-pptx|zip|invalid/i.test(e.message)) throw new UserError(ox.errPptx); throw e; }
          res.push(pdfOut(`${baseName(f.name)}.pdf`, r.bytes, `${r.slides} ${ox.slides} · ${ox.pptNote}`));
          break;
        }
        case "preview":
          need();
          break;
        case "flatten": case "metadata": case "compare": case "excel-csv": case "csv-excel": {
          if (tool === "compare") need(2); else if (kind === "pdf") need();
          if (kind === "sheet" && !sheets?.length) throw new Error(t.errNoFile);
          if (isMoreTool(tool)) res.push(...(await runMore(tool, lang, items, sheets, progress(t.working))));
          break;
        }
        case "unlock": case "crop": case "grayscale": case "excel-pdf": case "redact": case "invoice": {
          if (kind === "pdf") need();
          const o = await runExtra(tool, lang, xs, f, sheets, progress(t.working), t.errNoFile, t.errBadRange);
          if (o) res.push(pdfOut(o.name, o.bytes, o.note));
          break;
        }
      }
      if (!cancelled.current) setOuts(res);
    } catch (e) {
      const msg = (e as Error)?.message ?? "";
      const known = Object.values(t).includes(msg as never) || msg === t.noTextHint || e instanceof UserError;
      setErr(known ? msg : eng.isEncryptedError(e) ? t.errLocked : t.errFailed);
      if (!known) console.error("[pdf]", (e as Error)?.stack ?? String(e));
    } finally {
      setBusy(null);
    }
  };

  // signature pad
  const sigPad = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const pt = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * e.currentTarget.width, y: ((e.clientY - r.top) / r.height) * e.currentTarget.height };
  };
  const exportSig = () => {
    const c = sigPad.current!;
    const ctx = c.getContext("2d")!;
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    let x0 = c.width, y0 = c.height, x1 = 0, y1 = 0;
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (d[(y * c.width + x) * 4 + 3] > 0) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    if (x1 <= x0 || y1 <= y0) { setSigPng(null); setSigUrl(""); return; }
    const pad = 6;
    const out = document.createElement("canvas");
    out.width = x1 - x0 + pad * 2;
    out.height = y1 - y0 + pad * 2;
    out.getContext("2d")!.drawImage(c, x0 - pad, y0 - pad, out.width, out.height, 0, 0, out.width, out.height);
    const url = out.toDataURL("image/png");
    setSigUrl(url);
    const bin = atob(url.split(",")[1]);
    setSigPng(Uint8Array.from(bin, (ch) => ch.charCodeAt(0)));
  };

  // camera
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cam, setCam] = useState<MediaStream | null>(null);
  const startCam = async () => {
    setErr("");
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      setCam(s);
    } catch { setErr(t.errCamera); }
  };
  useEffect(() => {
    if (cam && videoRef.current) { videoRef.current.srcObject = cam; void videoRef.current.play().catch(() => undefined); }
    return () => { cam?.getTracks().forEach((x) => x.stop()); };
  }, [cam]);
  const capture = () => {
    const v = videoRef.current;
    if (!v || !v.videoWidth) return;
    const c = document.createElement("canvas");
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext("2d")!.drawImage(v, 0, 0);
    c.toBlob((b) => b && addFiles([new File([b], `scan-${Date.now()}.jpg`, { type: "image/jpeg" })]), "image/jpeg", 0.92);
  };
  const imgUrls = useMemo(() => (kind === "images" ? items.map((i) => URL.createObjectURL(i.file)) : []), [items, kind]);
  useEffect(() => () => imgUrls.forEach((u) => URL.revokeObjectURL(u)), [imgUrls]);

  const showRange = tool === "rotate" || tool === "watermark";
  const hasFiles = kind === "none" || items.length > 0;
  const noRun = tool === "preview";

  return (
    <div className="space-y-4" data-testid={`tool-${tool}`}>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-1 text-sm text-muted">{desc}</p>
      </div>

      {kind !== "none" ? (
        <FileDrop
          accept={accept}
          multiple={multiple}
          label={items.length && multiple ? t.add : kind === "images" ? t.pickImages : kind === "pdfs" ? t.pickPdfs : kind === "docx" ? t.pickDocx : kind === "pptx" ? ox.pickPptx : kind === "sheet" ? (lang === "az" ? "XLSX və ya CSV seçin" : lang === "tr" ? "XLSX veya CSV seçin" : lang === "ar" ? "اختر XLSX أو CSV" : lang === "ru" ? "Выберите XLSX или CSV" : "Choose an XLSX or CSV") : t.pickPdf}
          hint={t.dropHint}
          onFiles={addFiles}
          compact={items.length > 0}
          testId="pick"
        />
      ) : null}
      {kind !== "none" && !items.length ? <RecentFiles accept={accept} onPick={(f) => void addFiles([f])} /> : null}

      {tool === "scan" ? (
        <div className={card}>
          <p className="mb-3 text-sm text-muted">{t.camHint}</p>
          {cam ? (
            <div className="space-y-3">
              <video ref={videoRef} playsInline muted className="max-h-[50vh] w-full rounded-xl bg-black" data-testid="cam-video" />
              <div className="flex gap-2">
                <button type="button" className={btnPrimary} onClick={capture} data-testid="capture"><Camera className="size-4" />{t.capture}</button>
                <button type="button" className={btn} onClick={() => setCam(null)}>{t.cancel}</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <button type="button" className={btn} onClick={startCam} data-testid="cam-open"><Camera className="size-4" />{t.camStart}</button>
              <label className={`${btn} cursor-pointer`}>
                <Camera className="size-4" />{t.takePhoto}
                <input type="file" accept="image/*" capture="environment" hidden onChange={(e) => { const f = [...(e.target.files ?? [])]; e.target.value = ""; if (f.length) addFiles(f); }} />
              </label>
            </div>
          )}
        </div>
      ) : null}

      {items.length > 0 ? (
        <ul className="space-y-2" data-testid="file-list">
          {items.map((it, i) => (
            <li key={it.id} className="pdf-surface flex flex-wrap items-center gap-3 px-3 py-2 text-sm">
              {kind === "images" ? <img src={imgUrls[i]} alt="" className="size-12 rounded-md object-cover" /> : <FileText className="size-5 text-primary" />}
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium" title={it.name}>{it.name}</div>
                <div className="text-xs text-muted">{fmtSize(it.file.size)}{it.pages ? ` · ${t.nPages(it.pages)}` : ""}</div>
              </div>
              {it.locked ? <UnlockRow t={t} onUnlock={(p) => unlock(it.id, p)} /> : null}
              {multiple && items.length > 1 ? (
                <span className="flex gap-1">
                  <button type="button" className={btn} aria-label={t.moveLeft} onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
                  <button type="button" className={btn} aria-label={t.moveRight} onClick={() => move(i, 1)} disabled={i === items.length - 1}>↓</button>
                </span>
              ) : null}
              <button type="button" className={btn} aria-label={t.remove} onClick={() => { setItems((c) => c.filter((x) => x.id !== it.id)); setOuts([]); }}><X className="size-4" /></button>
            </li>
          ))}
        </ul>
      ) : null}

      {hasFiles && tool !== "preview" ? (
        <div className={`${card} space-y-4`} data-testid="options">
          {(tool === "image-pdf" || tool === "scan") ? (
            <>
              <div><Label>{t.pageSize}</Label><Seg name={t.pageSize} value={pageSize} onChange={setPageSize} options={[{ id: "a4", label: "A4" }, { id: "a5", label: "A5" }, { id: "letter", label: "Letter" }, { id: "legal", label: "Legal" }, { id: "fit", label: t.fit }]} /></div>
              <QualityPick t={t} v={quality} set={setQuality} />
            </>
          ) : null}
          {tool === "compress" ? (
            <>
              <div><Label>{t.mode}</Label><Seg name={t.mode} value={mode} onChange={setMode} options={[{ id: "light", label: t.modeLight }, { id: "strong", label: t.modeStrong }]} /><p className="mt-2 text-xs text-muted">{t.modeHint}{mode === "strong" ? ` ${t.strongNote}` : ""}</p></div>
              {mode === "strong" ? <QualityPick t={t} v={quality} set={setQuality} /> : null}
            </>
          ) : null}
          {tool === "pdf-image" ? (
            <>
              <div><Label>{t.format}</Label><Seg name={t.format} value={imgFmt} onChange={setImgFmt} options={[{ id: "png", label: "PNG" }, { id: "jpeg", label: "JPG" }]} /></div>
              <QualityPick t={t} v={quality} set={setQuality} />
            </>
          ) : null}
          {tool === "rotate" ? (
            <div><Label>{t.mode}</Label><Seg name="rotation" value={String(rot)} onChange={(v) => setRot(Number(v))} options={[{ id: "270", label: t.rotLeft }, { id: "90", label: t.rotRight }, { id: "180", label: t.rot180 }]} /></div>
          ) : null}
          <ExtraOptions tool={tool} lang={lang} x={xs} setX={setXs} pdf={firstBytes} pages={first?.pages ?? 0} sheets={sheets} t={t} />
          <MoreOptions tool={tool} lang={lang} pdf={firstBytes} sheetCount={sheets?.length ?? 0} />
          {tool === "page-numbers" ? (() => {
            const nt = NUM_T[lang];
            const total = first?.pages ?? 0;
            const last = numStart + Math.max(0, total - numFrom);
            const sample = numFmt === "n-of" ? `${numStart} / ${total ? last : "N"}` : numFmt === "dash" ? `- ${numStart} -` : String(numStart);
            return (
              <div className="grid gap-3 sm:grid-cols-2" data-testid="num-ui">
                <div><Label>{nt.from}</Label><input type="number" min={1} max={total || undefined} className={field} value={numFrom} onChange={(e) => setNumFrom(Math.max(1, Number(e.target.value) || 1))} data-testid="num-from" /><p className="mt-1 text-xs text-muted">{nt.fromHint}</p></div>
                <div><Label>{nt.start}</Label><input type="number" min={0} className={field} value={numStart} onChange={(e) => setNumStart(Math.max(0, Number(e.target.value) || 0))} data-testid="num-start" /><p className="mt-1 text-xs text-muted">{nt.startHint}</p></div>
                <div>
                  <Label>{nt.pos}</Label>
                  <div className="grid w-36 grid-cols-3 gap-1.5" dir="ltr">
                    {NUM_POS.map((p) => (
                      <button key={p.id} type="button" aria-label={p.id} data-pos={p.id} onClick={() => setNumPos(p.id)} className={`aspect-square rounded-lg border text-lg ${numPos === p.id ? "border-primary bg-primary/25" : "border-border bg-white/5"}`}>{p.s}</button>
                    ))}
                  </div>
                </div>
                <div><Label>{nt.fmt}</Label><Seg name={nt.fmt} value={numFmt} onChange={setNumFmt} options={[{ id: "n", label: "1" }, { id: "n-of", label: "1 / N" }, { id: "dash", label: "- 1 -" }]} /></div>
                <div><Label>{nt.size}</Label><input type="number" min={6} max={36} className={field} value={numSize} onChange={(e) => setNumSize(Number(e.target.value))} data-testid="num-size" /></div>
                <div><Label>{nt.margin}</Label><input type="number" min={8} max={120} className={field} value={numMargin} onChange={(e) => setNumMargin(Number(e.target.value))} data-testid="num-margin" /></div>
                <p className="text-xs text-muted sm:col-span-2">{nt.preview}: <b dir="ltr">{sample}</b> — {nt.page} {numFrom}{total ? ` … ${total}` : ""}</p>
              </div>
            );
          })() : null}
          {tool === "protect" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <div><Label>{t.password}</Label><input type="password" autoComplete="new-password" className={field} value={pwd} onChange={(e) => setPwd(e.target.value)} data-testid="pwd" /></div>
              <div><Label>{t.confirm}</Label><input type="password" autoComplete="new-password" className={field} value={pwd2} onChange={(e) => setPwd2(e.target.value)} data-testid="pwd2" /></div>
              <p className="text-xs text-muted sm:col-span-2">{t.protectNote}</p>
            </div>
          ) : null}
          {(tool === "watermark" || (tool === "batch" && batchOp === "watermark")) ? (
            <>
              <div><Label>{t.wmText}</Label><input className={field} value={wm} dir="auto" onChange={(e) => setWm(e.target.value)} data-testid="wm-text" /></div>
              <div>
                <Label>{t.position}</Label>
                <div className="grid w-36 grid-cols-3 gap-1.5" dir="ltr">
                  {WM_POS.map((p) => (
                    <button key={p.id} type="button" aria-label={p.id} data-pos={p.id} onClick={() => setWmPos(p.id)} className={`aspect-square rounded-lg border text-lg ${wmPos === p.id ? "border-primary bg-primary/25" : "border-border bg-white/5"}`}>{p.s}</button>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          {tool === "split" && firstBytes ? (
            <div className="space-y-3" data-testid="split-ui">
              <p className="text-xs text-muted">{t.splitHint}{first?.pages ? ` ${t.splitInfo(first.pages)}.` : ""}</p>
              <Seg name="split-mode" value={splitMode} onChange={setSplitMode} options={[{ id: "pick", label: t.splitPick }, { id: "every", label: t.splitEvery }, { id: "each", label: t.splitEach }, { id: "ranges", label: t.splitRanges }]} />
              {splitMode === "pick" ? (
                <div className="space-y-2">
                  <input className={`${field} max-w-xs`} dir="ltr" placeholder="2, 5-7" value={splitText} onChange={(e) => setSplitText(e.target.value)} data-testid="split-text" />
                  <p className="text-xs text-muted">{t.splitPickHint}</p>
                  {thumbs.length ? (
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8" dir="ltr" data-testid="split-grid">
                      {thumbs.map((src, i) => {
                        const chosen = new Set(eng.parseRange(splitText, first?.pages ?? 9999) ?? []);
                        return (
                          <button key={i} type="button" data-page={i} onClick={() => {
                            const c = new Set(chosen);
                            if (c.has(i)) c.delete(i); else c.add(i);
                            const a = [...c].sort((x, y) => x - y);
                            const parts: string[] = [];
                            for (let k = 0; k < a.length;) { let e = k; while (e + 1 < a.length && a[e + 1] === a[e] + 1) e++; parts.push(e > k ? `${a[k] + 1}-${a[e] + 1}` : `${a[k] + 1}`); k = e + 1; }
                            setSplitText(parts.join(", "));
                          }} className={`relative rounded-lg border p-1 ${chosen.has(i) ? "border-primary bg-primary/20" : "border-border"}`}>
                            <img src={src} alt="" className="w-full rounded bg-white" />
                            <span className="block text-center text-[11px] text-muted">{i + 1}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : null}
              {splitMode === "every" ? (
                <div><Label>{t.splitN}</Label><input type="number" min={1} className={`${field} max-w-[8rem]`} dir="ltr" value={splitN} onChange={(e) => setSplitN(Math.max(1, Number(e.target.value) || 1))} data-testid="split-n" />{first?.pages ? <p className="mt-1 text-xs text-muted">{t.splitFiles(Math.ceil(first.pages / splitN))}</p> : null}</div>
              ) : null}
              {splitMode === "each" && first?.pages ? <p className="text-xs text-muted">{t.splitFiles(first.pages)}</p> : null}
              {splitMode === "ranges" ? (
                <div className="space-y-2" data-testid="split-rows">
                  {splitRows.map((r, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-20 shrink-0 text-xs text-muted">{t.splitRow} {i + 1}</span>
                      <input className={`${field} min-w-0 flex-1 max-w-xs`} dir="ltr" placeholder="1-3, 5" value={r} onChange={(e) => setSplitRows((c) => c.map((x, k) => (k === i ? e.target.value : x)))} />
                      {splitRows.length > 1 ? <button type="button" className={btn} aria-label="remove" onClick={() => setSplitRows((c) => c.filter((_, k) => k !== i))}>×</button> : null}
                    </div>
                  ))}
                  <button type="button" className={btn} onClick={() => setSplitRows((c) => [...c, ""])}>+ {t.splitAdd}</button>
                </div>
              ) : null}
            </div>
          ) : null}
          {showRange ? (
            <div>
              <Label>{t.pagesScope}</Label>
              <Seg name={t.pagesScope} value={scope} onChange={setScope} options={[{ id: "all", label: t.scopeAll }, { id: "range", label: t.scopeRange }]} />
              {scope === "range" ? <input className={`${field} mt-2 max-w-xs`} dir="ltr" placeholder={t.rangePlaceholder} value={range} onChange={(e) => setRange(e.target.value)} data-testid="range" /> : null}
            </div>
          ) : null}
          {(tool === "ocr" || tool === "pdf-ocr" || tool === "pdf-word") ? (
            <div className="space-y-2"><Label>{t.ocrLang}</Label><Seg name={t.ocrLang} value={ocrLang} onChange={setOcrLang} options={[{ id: "auto", label: t.auto }, ...OCR_LANGS.map((l) => ({ id: l.id, label: l.label })), { id: "all", label: t.allLangs }]} />{tool === "pdf-ocr" ? <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={forceOcr} onChange={(e) => setForceOcr(e.target.checked)} />{t.forceOcr}</label> : null}<p className="text-xs text-muted">{t.ocrFirst}</p></div>
          ) : null}
          {tool === "word-pdf" ? <p className="text-xs text-muted">{t.textOnly}</p> : null}
          {tool === "pdf-word" ? <p className="text-xs text-muted">{t.wordNote}</p> : null}
          {tool === "pdf-excel" ? (
            <div className="space-y-2"><Label>{ox.sheets}</Label><Seg name={ox.sheets} value={xlMode} onChange={setXlMode} options={[{ id: "pages", label: ox.perPage }, { id: "one", label: ox.oneSheet }]} /><p className="text-xs text-muted">{ox.xlNote}</p></div>
          ) : null}
          {tool === "ppt-pdf" ? <p className="text-xs text-muted">{ox.pptNote}</p> : null}
          {tool === "batch" ? (
            <div><Label>{t.batchOp}</Label><Seg name={t.batchOp} value={batchOp} onChange={setBatchOp} options={[{ id: "compress", label: t.opCompress }, { id: "rotate", label: t.opRotate }, { id: "watermark", label: t.opWatermark }, { id: "split", label: t.opSplit }]} /></div>
          ) : null}
          {tool === "write-pdf" ? (
            <div className="space-y-3">
              <div data-testid="w-templates">
                <Label>{TEMPLATE_LABEL[lang] ?? TEMPLATE_LABEL.az}</Label>
                <div className="flex flex-wrap gap-2">
                  {DOC_TEMPLATES.map((tp) => (
                    <a key={tp.id} href={`?t=${tp.id}`} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm hover:bg-white/10" onClick={(e) => { e.preventDefault(); if ((wText.trim() && !confirm(tp.label[lang] + "?"))) return; setWTitle(tp.title[lang] ?? tp.title.az); setWText(tp.body[lang] ?? tp.body.az); history.replaceState(null, "", `?t=${tp.id}`); }}>{tp.label[lang] ?? tp.label.az}</a>
                  ))}
                </div>
              </div>
              <input className={field} dir="auto" placeholder={t.docTitle} value={wTitle} onChange={(e) => setWTitle(e.target.value)} data-testid="w-title" />
              <textarea className={`${field} h-56 resize-y`} dir="auto" placeholder={t.writePlaceholder} value={wText} onChange={(e) => setWText(e.target.value)} data-testid="w-text" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>{t.pageSize}</Label><Seg name={t.pageSize} value={wPage} onChange={setWPage} options={[{ id: "a4", label: "A4" }, { id: "a5", label: "A5" }, { id: "letter", label: "Letter" }]} /></div>
                <div><Label>{t.fontSize}</Label><Seg name={t.fontSize} value={String(wSize)} onChange={(v) => setWSize(Number(v))} options={[10, 12, 14, 18].map((n) => ({ id: String(n), label: String(n) }))} /></div>
                <div><Label>{t.align}</Label><Seg name={t.align} value={wAlign} onChange={setWAlign} options={[{ id: "left", label: t.left }, { id: "center", label: t.center }, { id: "right", label: t.right }]} /></div>
                <div><Label>{t.margins}</Label><Seg name={t.margins} value={String(wMargin)} onChange={(v) => setWMargin(Number(v))} options={[{ id: "36", label: "S" }, { id: "54", label: "M" }, { id: "72", label: "L" }]} /></div>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={wBold} onChange={(e) => setWBold(e.target.checked)} />{t.bold}</label>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={wNums} onChange={(e) => setWNums(e.target.checked)} />{t.pageNumbers}</label>
              </div>
            </div>
          ) : null}
          {tool === "sign" ? (
            <div className="space-y-4">
              <div>
                <Label>{t.drawSign}</Label>
                <canvas
                  ref={sigPad}
                  width={600}
                  height={200}
                  data-testid="sig-pad"
                  className="w-full max-w-xl touch-none rounded-xl border border-border bg-white"
                  onPointerDown={(e) => { drawing.current = true; e.currentTarget.setPointerCapture(e.pointerId); const c = e.currentTarget.getContext("2d")!; const p = pt(e); c.lineWidth = 3; c.lineCap = "round"; c.lineJoin = "round"; c.strokeStyle = "#0b1b4d"; c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x + 0.1, p.y + 0.1); c.stroke(); }}
                  onPointerMove={(e) => { if (!drawing.current) return; const c = e.currentTarget.getContext("2d")!; const p = pt(e); c.lineTo(p.x, p.y); c.stroke(); }}
                  onPointerUp={() => { drawing.current = false; exportSig(); }}
                  onPointerCancel={() => { drawing.current = false; exportSig(); }}
                />
                <button type="button" className={`${btn} mt-2`} onClick={() => { const c = sigPad.current!; c.getContext("2d")!.clearRect(0, 0, c.width, c.height); setSigPng(null); setSigUrl(""); }}>{t.signClear}</button>
              </div>
              {first?.pages && first.pages > 1 ? (
                <div><Label>{t.signPage}</Label><Seg name={t.signPage} value={String(sigPage)} onChange={(v) => { setSigPage(Number(v)); setSigPos(null); }} options={Array.from({ length: Math.min(first.pages, 30) }, (_, i) => ({ id: String(i), label: String(i + 1) }))} /></div>
              ) : null}
              <div><Label>{t.signSize}</Label><input type="range" min={0.08} max={0.6} step={0.01} value={sigSize} onChange={(e) => setSigSize(Number(e.target.value))} className="w-full max-w-xs" /></div>
              <p className="text-xs text-muted">{t.signHint}</p>
              {signCanvas ? (
                <div
                  className="relative inline-block max-w-full cursor-crosshair overflow-hidden rounded-lg bg-white shadow-lg"
                  data-testid="sign-stage"
                  onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setSigPos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }); }}
                >
                  <PdfCanvas canvasSource={signCanvas} className="block h-auto max-w-full" />
                  {sigPos && sigUrl ? <img src={sigUrl} alt="" className="pointer-events-none absolute" style={{ left: `${sigPos.x * 100}%`, top: `${sigPos.y * 100}%`, width: `${sigSize * 100}%`, transform: "translate(-50%,-50%)" }} /> : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {tool === "pages" && thumbs.length ? (
            <div>
              <p className="mb-2 text-xs text-muted">{t.pagesHint}</p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6" dir="ltr" data-testid="page-grid">
                {order.map((o, pos) => (
                  <div key={o.index} className={`rounded-xl border p-1.5 ${o.del ? "border-red-400/60 opacity-40" : "border-border"}`}>
                    <img src={thumbs[o.index]} alt="" className="w-full rounded bg-white" />
                    <div className="mt-1 text-center text-[11px] text-muted">{o.index + 1}</div>
                    <div className="mt-1 flex justify-center gap-1">
                      <button type="button" className="rounded border border-border px-1.5 text-xs" aria-label={t.moveLeft} onClick={() => setOrder((c) => { const j = pos - 1; if (j < 0) return c; const n = c.slice(); [n[j], n[pos]] = [n[pos], n[j]]; return n; })}>←</button>
                      <button type="button" className="rounded border border-border px-1.5 text-xs" aria-label={t.deleteMark} data-del={o.index} onClick={() => setOrder((c) => c.map((x) => (x.index === o.index ? { ...x, del: !x.del } : x)))}>✕</button>
                      <button type="button" className="rounded border border-border px-1.5 text-xs" aria-label={t.moveRight} onClick={() => setOrder((c) => { const j = pos + 1; if (j >= c.length) return c; const n = c.slice(); [n[j], n[pos]] = [n[pos], n[j]]; return n; })}>→</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {tool === "extract-pages" && thumbs.length ? (
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span>{t.extractHint}</span>
                <button type="button" className={btn} onClick={() => setSel(new Set(thumbs.map((_, i) => i)))}>{t.selectAll}</button>
                <button type="button" className={btn} onClick={() => setSel(new Set())}>{t.selectNone}</button>
                <span>{sel.size} {t.selected}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6" dir="ltr" data-testid="extract-grid">
                {thumbs.map((src, i) => (
                  <button key={i} type="button" data-page={i} onClick={() => setSel((c) => { const n = new Set(c); if (n.has(i)) n.delete(i); else n.add(i); return n; })} className={`relative rounded-xl border p-1.5 ${sel.has(i) ? "border-primary bg-primary/20" : "border-border"}`}>
                    <img src={src} alt="" className="w-full rounded bg-white" />
                    <span className="mt-1 block text-center text-[11px] text-muted">{i + 1}</span>
                    {sel.has(i) ? <Check className="absolute end-2 top-2 size-4 rounded-full bg-primary p-0.5 text-white" /> : null}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {!noRun ? (
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className={btnPrimary} disabled={!!busy} onClick={run} data-testid="run">{t.run}</button>
            </div>
          ) : null}
        </div>
      ) : null}

      {tool === "preview" && firstBytes ? (
        <div className={`${card} space-y-3`}>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted">{t.zoom}</span>
            <button type="button" className={btn} onClick={() => setViewZoom((z) => Math.max(0.4, +(z - 0.2).toFixed(1)))} aria-label="-">−</button>
            <span className="w-12 text-center" data-testid="zoom">{Math.round(viewZoom * 100)}%</span>
            <button type="button" className={btn} onClick={() => setViewZoom((z) => Math.min(3, +(z + 0.2).toFixed(1)))} aria-label="+">+</button>
          </div>
          <PdfViewer bytes={firstBytes} zoom={viewZoom} label={t.page} />
        </div>
      ) : null}

      {busy ? (
        <div className={card} role="status" data-testid="busy">
          <div className="mb-2 text-sm">{busy.label}</div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="pdf-bar h-full rounded-full transition-all" style={{ width: `${Math.max(4, Math.round(busy.frac * 100))}%` }} /></div>
          <button type="button" className={`${btn} mt-3`} onClick={() => { cancelled.current = true; }}>{t.cancel}</button>
        </div>
      ) : null}

      {err ? <div role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200" data-testid="error">{err}</div> : null}

      {outs.length ? (
        <div className={`${card} space-y-3`} data-testid="results">
          <div className="flex items-center gap-2 font-semibold text-emerald-300"><Check className="size-4" />{t.done}</div>
          {outs.map((o, i) => <ResultCard key={i} out={o} t={t} onOpen={() => setOpenOut(o)} />)}
        </div>
      ) : null}

      {openOut && openBytes ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/80 p-3 md:p-8" onClick={() => setOpenOut(null)}>
          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated p-3" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 flex items-center justify-between"><span className="truncate text-sm font-semibold">{openOut.name}</span><button type="button" className={btn} onClick={() => setOpenOut(null)} aria-label={t.cancel}><X className="size-4" /></button></div>
            <PdfViewer bytes={openBytes} zoom={1} label={t.page} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function QualityPick({ t, v, set }: { t: Dict; v: eng.Quality; set: (q: eng.Quality) => void }) {
  return (
    <div><Label>{t.quality}</Label><Seg name={t.quality} value={v} onChange={set} options={[{ id: "high", label: t.qHigh }, { id: "balanced", label: t.qBalanced }, { id: "small", label: t.qSmall }]} /></div>
  );
}

function UnlockRow({ t, onUnlock }: { t: Dict; onUnlock: (p: string) => void }) {
  const [p, setP] = useState("");
  return (
    <form className="flex items-center gap-2" onSubmit={(e) => { e.preventDefault(); onUnlock(p); }}>
      <Lock className="size-4 text-amber-300" />
      <input type="password" className={`${field} w-36`} placeholder={t.password} value={p} onChange={(e) => setP(e.target.value)} data-testid="unlock-pwd" aria-label={t.unlockHint} />
      <button type="submit" className={btn} data-testid="unlock">{t.unlock}</button>
    </form>
  );
}
