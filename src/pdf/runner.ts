/**
 * Nibras PDF runner for the AI chat surfaces (public/ai, public/ai.html, the page assistant).
 * Built as a separate lazy bundle (vite.runner.config.ts → /pdf-assets/runner/runner.js) so the static chat
 * pages can run every PDF tool in the browser. Nothing here uploads files.
 */
import { zipSync } from "fflate";
import type { Lang } from "@/lib/i18n";
import { COPY } from "./copy";
import * as eng from "./lib/engine";
import { closePdf, openPdf, renderPageToCanvas } from "./lib/pdfjs";
import { createDocxFromText, docxToText } from "./lib/docx";
import { extractTextSmart } from "./lib/extract";
import * as it from "./lib/imgtools";
import { detectOcrLangs, ocrDetailed, ocrLangForSite, preprocessForOcr, type OcrConfig, type OcrLang } from "./lib/ocr";

export type RunResult = { name: string; blob: Blob; kind: "pdf" | "image" | "zip" | "docx" | "text"; card?: boolean; text?: string; note?: string; extra?: { label: string; name: string; blob: Blob }[] };
export type Params = { range?: string; every?: number; w?: number; h?: number; pct?: number; maxKb?: number; ratio?: number; vertical?: boolean; to?: "png" | "jpeg" | "webp"; level?: "light" | "strong"; angle?: number; format?: "png" | "jpeg"; mode?: "light" | "strong"; text?: string; position?: string; forceOcr?: boolean };
export type Action = { tool: string; params?: Params };
export type HandleOptions = { action: Action; files: File[]; lang: Lang; container: HTMLElement; onStatus?: (s: string) => void };

type Kind = "pdf" | "image" | "docx" | "other";
const kindOf = (f: File): Kind => {
  const n = f.name.toLowerCase();
  if (f.type === "application/pdf" || n.endsWith(".pdf")) return "pdf";
  if (f.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|bmp)$/.test(n)) return "image";
  if (n.endsWith(".docx")) return "docx";
  return "other";
};
// The runner is a separate bundle: pdf.js loads its worker from the file emitted next to runner.js.
(globalThis as { __NIBRAS_PDF_WORKER__?: string }).__NIBRAS_PDF_WORKER__ = new URL(/* @vite-ignore */ "./pdf.worker.min.mjs", import.meta.url).href;

const base = (n: string) => n.replace(/\.[^.]+$/, "") || "document";

type S = {
  working: string; done: string; cancel: string; cancelled: string; failed: string; pwdOpen: (n: string) => string; pwdNew: (n: string) => string;
  pwdPh: string; pwd2Ph: string; apply: string; wrong: string; mismatch: string; short: string; zip: string; download: string; copy: string; copied: string;
  noFile: string; needPdf: string; needTwo: string; needImg: string; imgBefore: string; imgAlready: string; needDocx: string; needRange: string; notLocked: string; pagesN: (n: number) => string; more: (n: number) => string;
};
const CHAT: Record<Lang, S> = {
  az: { working: "İşlənir…", done: "Hazırdır", cancel: "Ləğv et", cancelled: "Ləğv edildi.", failed: "Əməliyyat alınmadı.", pwdOpen: (n) => `«${n}» parolla qorunur. Parolu daxil edin.`, pwdNew: (n) => `«${n}» üçün parol təyin edin.`, pwdPh: "Parol", pwd2Ph: "Parolu təkrar yazın", apply: "Təsdiqlə", wrong: "Parol səhvdir.", mismatch: "Parollar eyni deyil.", short: "Parol ən az 4 simvol olmalıdır.", zip: "Hamısını yüklə (ZIP)", download: "Yüklə", copy: "Kopyala", copied: "Kopyalandı", noFile: "Əvvəlcə fayl əlavə edin.", needPdf: "PDF fayl lazımdır.", needTwo: "Birləşdirmək üçün ən az iki PDF lazımdır.", needImg: "Şəkil lazımdır.", imgBefore: "Ölçü:", imgAlready: "Şəkil artıq kifayət qədər kiçikdir, orijinal saxlanıldı.", needDocx: "DOCX fayl lazımdır.", needRange: "Səhifə aralığı lazımdır, məsələn 1-3, 5.", notLocked: "Bu PDF parolla qorunmur.", pagesN: (n) => `${n} səhifə`, more: (n) => `və daha ${n} fayl (ZIP-də)` },
  en: { working: "Working…", done: "Done", cancel: "Cancel", cancelled: "Cancelled.", failed: "The operation failed.", pwdOpen: (n) => `“${n}” is password-protected. Enter the password.`, pwdNew: (n) => `Set a password for “${n}”.`, pwdPh: "Password", pwd2Ph: "Repeat password", apply: "Confirm", wrong: "Wrong password.", mismatch: "The passwords do not match.", short: "Use at least 4 characters.", zip: "Download all (ZIP)", download: "Download", copy: "Copy", copied: "Copied", noFile: "Attach a file first.", needPdf: "A PDF file is needed.", needTwo: "At least two PDFs are needed to merge.", needImg: "An image is needed.", imgBefore: "Size:", imgAlready: "The image is already small; the original was kept.", needDocx: "A DOCX file is needed.", needRange: "A page range is needed, for example 1-3, 5.", notLocked: "This PDF is not password-protected.", pagesN: (n) => `${n} pages`, more: (n) => `and ${n} more files (in the ZIP)` },
  tr: { working: "İşleniyor…", done: "Hazır", cancel: "İptal", cancelled: "İptal edildi.", failed: "İşlem başarısız.", pwdOpen: (n) => `“${n}” parola korumalı. Parolayı girin.`, pwdNew: (n) => `“${n}” için parola belirleyin.`, pwdPh: "Parola", pwd2Ph: "Parolayı tekrar yazın", apply: "Onayla", wrong: "Parola yanlış.", mismatch: "Parolalar aynı değil.", short: "En az 4 karakter kullanın.", zip: "Hepsini indir (ZIP)", download: "İndir", copy: "Kopyala", copied: "Kopyalandı", noFile: "Önce bir dosya ekleyin.", needPdf: "PDF dosyası gerekli.", needTwo: "Birleştirmek için en az iki PDF gerekir.", needImg: "Görsel gerekli.", imgBefore: "Boyut:", imgAlready: "Görsel zaten yeterince küçük, orijinal korundu.", needDocx: "DOCX dosyası gerekli.", needRange: "Sayfa aralığı gerekli, örneğin 1-3, 5.", notLocked: "Bu PDF parola korumalı değil.", pagesN: (n) => `${n} sayfa`, more: (n) => `ve ${n} dosya daha (ZIP içinde)` },
  ar: { working: "جارٍ المعالجة…", done: "تم", cancel: "إلغاء", cancelled: "تم الإلغاء.", failed: "فشلت العملية.", pwdOpen: (n) => `الملف «${n}» محمي بكلمة مرور. أدخلها.`, pwdNew: (n) => `عيّن كلمة مرور للملف «${n}».`, pwdPh: "كلمة المرور", pwd2Ph: "أعد كتابة كلمة المرور", apply: "تأكيد", wrong: "كلمة المرور خاطئة.", mismatch: "كلمتا المرور غير متطابقتين.", short: "استخدم 4 أحرف على الأقل.", zip: "تنزيل الكل (ZIP)", download: "تنزيل", copy: "نسخ", copied: "تم النسخ", noFile: "أرفق ملفاً أولاً.", needPdf: "مطلوب ملف PDF.", needTwo: "يلزم ملفا PDF على الأقل للدمج.", needImg: "مطلوبة صورة.", imgBefore: "الحجم:", imgAlready: "الصورة صغيرة أصلاً، أُبقيت النسخة الأصلية.", needDocx: "مطلوب ملف DOCX.", needRange: "مطلوب نطاق صفحات، مثل 1-3, 5.", notLocked: "هذا الملف غير محمي بكلمة مرور.", pagesN: (n) => `${n} صفحة`, more: (n) => `و${n} ملفات أخرى (داخل ZIP)` },
  ru: { working: "Обработка…", done: "Готово", cancel: "Отмена", cancelled: "Отменено.", failed: "Операция не удалась.", pwdOpen: (n) => `«${n}» защищён паролем. Введите пароль.`, pwdNew: (n) => `Задайте пароль для «${n}».`, pwdPh: "Пароль", pwd2Ph: "Повторите пароль", apply: "Подтвердить", wrong: "Неверный пароль.", mismatch: "Пароли не совпадают.", short: "Минимум 4 символа.", zip: "Скачать всё (ZIP)", download: "Скачать", copy: "Копировать", copied: "Скопировано", noFile: "Сначала прикрепите файл.", needPdf: "Нужен PDF-файл.", needTwo: "Для объединения нужно минимум два PDF.", needImg: "Нужно изображение.", imgBefore: "Размер:", imgAlready: "Изображение и так небольшое, оставлен оригинал.", needDocx: "Нужен файл DOCX.", needRange: "Нужен диапазон страниц, например 1-3, 5.", notLocked: "Этот PDF не защищён паролем.", pagesN: (n) => `${n} стр.`, more: (n) => `и ещё ${n} файлов (в ZIP)` },
};

const CSS = `
.nbp{margin-top:10px;display:flex;flex-direction:column;gap:10px;font:14px/1.45 system-ui,sans-serif;color:inherit;max-width:100%}
.nbp *{box-sizing:border-box}
.nbp-card{border:1px solid rgba(128,140,180,.28);background:rgba(128,140,180,.09);border-radius:14px;padding:12px;backdrop-filter:blur(6px);animation:nbp-in .35s cubic-bezier(.2,.8,.2,1) both}
.nbp-row{display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap}
.nbp-name{font-weight:600;word-break:break-all}.nbp-meta{opacity:.7;font-size:12px}.nbp-note{font-size:12px;opacity:.85;margin-top:4px}
.nbp-btn{appearance:none;cursor:pointer;border:1px solid rgba(128,140,180,.4);background:rgba(128,140,180,.14);color:inherit;border-radius:10px;padding:7px 12px;font:600 13px system-ui,sans-serif;transition:transform .15s,background .15s}
.nbp-btn:hover{background:rgba(128,140,180,.26);transform:translateY(-1px)}.nbp-btn:disabled{opacity:.5;cursor:default;transform:none}
.nbp-pri{background:linear-gradient(135deg,#6d84ff,#7a6bff);border-color:transparent;color:#fff}.nbp-pri:hover{filter:brightness(1.1);background:linear-gradient(135deg,#6d84ff,#7a6bff)}
.nbp-btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.nbp-in{width:100%;border:1px solid rgba(128,140,180,.4);background:rgba(0,0,0,.18);color:inherit;border-radius:10px;padding:8px 10px;font:inherit;margin-top:6px}
.nbp-text{height:170px;resize:vertical;font:13px/1.5 ui-monospace,monospace;margin-top:8px}
.nbp-thumb{width:64px;height:84px;object-fit:contain;border-radius:8px;background:#fff;flex:none}
.nbp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:8px;margin-top:8px}.nbp-grid img{width:100%;border-radius:8px;background:#fff}
.nbp-bar{height:6px;border-radius:99px;background:rgba(128,140,180,.25);overflow:hidden;margin-top:8px}.nbp-bar i{display:block;height:100%;width:4%;background:linear-gradient(90deg,#6d84ff,#7ee7ff);transition:width .25s}
.nbp-live{position:relative;display:grid;grid-template-columns:auto 1fr auto;align-items:center;column-gap:12px;row-gap:8px;padding:10px 4px;margin-top:8px;animation:nbp-in .35s ease both}
.nbp-orb{position:relative;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fb2ff 35%,#6d84ff 65%,#7a6bff);box-shadow:0 0 18px rgba(109,132,255,.7),0 0 40px rgba(126,231,255,.35);animation:nbp-pulse 2.2s ease-in-out infinite}
.nbp-orb:before{content:"";position:absolute;inset:-5px;border-radius:50%;background:conic-gradient(from 0deg,transparent,#7ee7ff,#a78bfa,transparent 70%);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 1px));mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 1px));animation:nbp-spin 1.6s linear infinite}
.nbp-stage{font:600 14px/1.3 system-ui,sans-serif;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:linear-gradient(90deg,currentColor 35%,#7ee7ff 50%,currentColor 65%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:nbp-shim 2.4s linear infinite}
.nbp-pct{font:700 13px ui-monospace,monospace;opacity:.85;font-variant-numeric:tabular-nums}
.nbp-line{grid-column:1/-1;height:2px;border-radius:2px;background:rgba(128,140,180,.18);overflow:hidden}.nbp-line i{display:block;height:100%;width:4%;background:linear-gradient(90deg,#6d84ff,#7ee7ff,#a78bfa);box-shadow:0 0 8px #7ee7ff;transition:width .3s}
.nbp-ghost{grid-column:1/-1;justify-self:start;appearance:none;border:0;background:none;color:inherit;opacity:.6;font:500 12px system-ui,sans-serif;cursor:pointer;padding:2px 0;transition:opacity .15s}.nbp-ghost:hover{opacity:1;text-decoration:underline}
@keyframes nbp-spin{to{transform:rotate(360deg)}}@keyframes nbp-pulse{50%{transform:scale(.88);filter:brightness(1.15)}}@keyframes nbp-shim{to{background-position:-250% 0}}
.msg[data-pdf]:has(.nbp-live){background:none!important;border-color:transparent!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;padding-left:0!important;padding-right:0!important}
.nbp-err{color:#ff9d9d;font-size:13px;margin-top:6px}
@keyframes nbp-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.nbp-card,.nbp-live{animation:none}.nbp-orb,.nbp-orb:before,.nbp-stage{animation:none}.nbp-stage{-webkit-text-fill-color:currentColor}.nbp-btn{transition:none}}
`;
function css() {
  if (document.getElementById("nbp-css")) return;
  const s = document.createElement("style");
  s.id = "nbp-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
const fmt = (n: number) => (n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB` : `${(n / 1048576).toFixed(1)} MB`);
function save(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = el("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

class UserError extends Error {}

function askPassword(box: HTMLElement, s: S, name: string, mode: "open" | "new", wrong: boolean): Promise<string | null> {
  const status = box.querySelector<HTMLElement>('[data-nbp="status"]');
  if (status) status.style.display = "none";
  return new Promise((resolve) => {
    const done = (v: string | null) => { if (status) status.style.display = ""; resolve(v); };
    const card = el("form", "nbp-card");
    card.setAttribute("data-nbp", "password");
    card.append(el("div", "nbp-name", mode === "open" ? s.pwdOpen(name) : s.pwdNew(name)));
    const p1 = el("input", "nbp-in");
    p1.type = "password";
    p1.placeholder = s.pwdPh;
    p1.autocomplete = "new-password";
    p1.setAttribute("data-nbp", "pwd");
    card.append(p1);
    let p2: HTMLInputElement | null = null;
    if (mode === "new") {
      p2 = el("input", "nbp-in");
      p2.type = "password";
      p2.placeholder = s.pwd2Ph;
      p2.autocomplete = "new-password";
      p2.setAttribute("data-nbp", "pwd2");
      card.append(p2);
    }
    const msg = el("div", "nbp-err", wrong ? s.wrong : "");
    card.append(msg);
    const btns = el("div", "nbp-btns");
    const ok = el("button", "nbp-btn nbp-pri", s.apply);
    ok.type = "submit";
    ok.setAttribute("data-nbp", "pwd-ok");
    const no = el("button", "nbp-btn", s.cancel);
    no.type = "button";
    btns.append(ok, no);
    card.append(btns);
    card.addEventListener("submit", (e) => {
      e.preventDefault();
      if (p1.value.length < (mode === "new" ? 4 : 1)) { msg.textContent = s.short; return; }
      if (p2 && p2.value !== p1.value) { msg.textContent = s.mismatch; return; }
      const v = p1.value;
      p1.value = "";
      if (p2) p2.value = "";
      card.remove();
      done(v);
    });
    no.onclick = () => { card.remove(); done(null); };
    box.append(card);
    p1.focus();
  });
}

async function firstPageThumb(blob: Blob): Promise<string | null> {
  try {
    const doc = await openPdf(new Uint8Array(await blob.arrayBuffer()));
    const c = await renderPageToCanvas(doc, 1, 0.4);
    const url = c.toDataURL("image/jpeg", 0.7);
    await closePdf(doc);
    return url;
  } catch {
    return null;
  }
}

function renderResults(box: HTMLElement, results: RunResult[], s: S) {
  const wrap = el("div", "nbp-card");
  wrap.setAttribute("data-nbp", "results");
  const zip = results.find((r) => r.kind === "zip");
  const images = results.filter((r) => r.kind === "image" && !r.card);
  const rest = results.filter((r) => (r.kind !== "image" || r.card) && r.kind !== "zip");
  if (zip) {
    const row = el("div", "nbp-row");
    const info = el("div");
    info.append(el("div", "nbp-name", zip.name), el("div", "nbp-meta", fmt(zip.blob.size)));
    if (zip.note) info.append(el("div", "nbp-note", zip.note));
    const b = el("button", "nbp-btn nbp-pri", s.zip);
    b.setAttribute("data-nbp", "download-zip");
    b.onclick = () => save(zip.name, zip.blob);
    row.append(info);
    wrap.append(row);
    wrap.append(Object.assign(el("div", "nbp-btns"), {}));
    wrap.lastElementChild!.append(b);
  }
  if (images.length) {
    const g = el("div", "nbp-grid");
    images.slice(0, 12).forEach((r) => {
      const a = el("a");
      a.href = "#";
      a.title = r.name;
      const img = el("img");
      img.alt = r.name;
      img.src = URL.createObjectURL(r.blob);
      a.append(img);
      a.onclick = (e) => { e.preventDefault(); save(r.name, r.blob); };
      g.append(a);
    });
    wrap.append(g);
    if (images.length > 12) wrap.append(el("div", "nbp-meta", s.more(images.length - 12)));
  }
  for (const r of rest) {
    const card = el("div", "nbp-row");
    card.style.marginTop = "10px";
    card.setAttribute("data-nbp", "result");
    card.setAttribute("data-kind", r.kind);
    if (r.kind === "image") {
      const img = el("img", "nbp-thumb");
      img.alt = "";
      img.src = URL.createObjectURL(r.blob);
      img.style.background = "repeating-conic-gradient(#ddd 0 25%,#fff 0 50%) 50%/12px 12px";
      card.append(img);
    }
    if (r.kind === "pdf") {
      const img = el("img", "nbp-thumb");
      img.alt = "";
      img.style.display = "none";
      card.append(img);
      void firstPageThumb(r.blob).then((u) => { if (u) { img.src = u; img.style.display = ""; } });
    }
    const info = el("div");
    info.style.flex = "1";
    info.style.minWidth = "0";
    info.append(el("div", "nbp-name", r.name), el("div", "nbp-meta", fmt(r.blob.size)));
    if (r.note) info.append(el("div", "nbp-note", r.note));
    if (r.kind === "text") {
      const ta = el("textarea", "nbp-in nbp-text");
      ta.readOnly = true;
      ta.value = r.text ?? "";
      ta.dir = "auto";
      ta.setAttribute("data-nbp", "text");
      info.append(ta);
    }
    const btns = el("div", "nbp-btns");
    const d = el("button", "nbp-btn nbp-pri", r.kind === "text" ? "TXT" : s.download);
    d.setAttribute("data-nbp", "download");
    d.onclick = () => save(r.name, r.blob);
    btns.append(d);
    r.extra?.forEach((x) => {
      const b = el("button", "nbp-btn", x.label);
      b.setAttribute("data-nbp", `download-${x.label.toLowerCase()}`);
      b.onclick = () => save(x.name, x.blob);
      btns.append(b);
    });
    if (r.kind === "text") {
      const c = el("button", "nbp-btn", s.copy);
      c.setAttribute("data-nbp", "copy");
      c.onclick = async () => {
        try { await navigator.clipboard.writeText(r.text ?? ""); } catch { const t = info.querySelector("textarea")!; t.select(); document.execCommand("copy"); }
        c.textContent = s.copied;
        setTimeout(() => (c.textContent = s.copy), 1600);
      };
      btns.append(c);
    }
    info.append(btns);
    card.append(info);
    wrap.append(card);
  }
  box.append(wrap);
}

function zipOut(name: string, files: { name: string; data: Uint8Array }[]): RunResult {
  const z = zipSync(Object.fromEntries(files.map((f) => [f.name, [f.data, { level: 0 }] as [Uint8Array, { level: 0 }]])));
  return { name, blob: new Blob([z as BlobPart], { type: "application/zip" }), kind: "zip" };
}
const imgOut = (name: string, blob: Blob, note?: string): RunResult => ({ name, blob, kind: "image", note, card: true });
const pdfOut = (name: string, bytes: Uint8Array, note?: string): RunResult => ({ name, blob: new Blob([bytes as BlobPart], { type: "application/pdf" }), kind: "pdf", note });
const docxBlob = (text: string) => new Blob([createDocxFromText(text) as BlobPart], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
const textOut = (name: string, text: string, note?: string): RunResult => ({ name: `${name}.txt`, blob: new Blob([text], { type: "text/plain;charset=utf-8" }), kind: "text", text, note, extra: [{ label: "DOCX", name: `${name}.docx`, blob: docxBlob(text) }] });

type Ctx = { lang: Lang; t: (typeof COPY)[Lang]; s: S; box: HTMLElement; progress: (label: string, frac: number) => void; cancelled: () => boolean };

async function loadPdf(f: File, ctx: Ctx): Promise<{ bytes: Uint8Array; pages: number }> {
  let bytes = new Uint8Array(await f.arrayBuffer());
  for (let tries = 0; tries < 4; tries++) {
    try {
      return { bytes, pages: await eng.pageCount(bytes) };
    } catch (e) {
      if (!eng.isEncryptedError(e)) throw new UserError(ctx.t.errNotPdf);
      const pwd = await askPassword(ctx.box, ctx.s, f.name, "open", tries > 0);
      if (pwd === null) throw new UserError(ctx.s.cancelled);
      try {
        bytes = new Uint8Array(await eng.unlockPdf(new Uint8Array(await f.arrayBuffer()), pwd));
        return { bytes, pages: await eng.pageCount(bytes) };
      } catch {
        bytes = new Uint8Array(await f.arrayBuffer());
      }
    }
  }
  throw new UserError(ctx.s.wrong);
}

const OCR_ALL: OcrLang[] = ["aze", "eng", "tur", "rus", "ara"];

export async function runTool(action: Action, files: File[], ctx: Ctx): Promise<RunResult[]> {
  const { t, s } = ctx;
  const p = action.params ?? {};
  const pdfs = files.filter((f) => kindOf(f) === "pdf");
  const imgs = files.filter((f) => kindOf(f) === "image");
  const docx = files.filter((f) => kindOf(f) === "docx");
  const firstPdf = () => { if (!pdfs.length) throw new UserError(s.needPdf); return pdfs[0]; };
  const range = (total: number) => { if (!p.range) throw new UserError(s.needRange); const r = eng.parseRange(p.range, total); if (!r) throw new UserError(t.errBadRange); return r; };
  const out: RunResult[] = [];
  switch (action.tool) {
    case "img-bg":
    case "img-compress":
    case "img-resize":
    case "img-convert":
    case "img-crop":
    case "img-rotate":
    case "img-flip":
    case "img-gray": {
      if (!imgs.length) throw new UserError(s.needImg);
      const verb = action.tool.slice(4);
      for (let i = 0; i < imgs.length; i++) {
        const f = imgs[i];
        const part = (x: number) => ctx.progress(t.working, (i + x) / imgs.length);
        part(0.02);
        const b = base(f.name);
        const srcFmt = it.fmtOf(f);
        if (verb === "bg") {
          const blob = await it.removeBg(f, (x) => part(x));
          if (ctx.cancelled()) throw new UserError(s.cancelled);
          out.push(imgOut(`${b}-nobg.png`, blob, `${s.imgBefore} ${fmt(f.size)} → ${fmt(blob.size)}`));
          continue;
        }
        const cv = await it.decode(f);
        part(0.4);
        let blob: Blob, fm: "png" | "jpeg" | "webp" = srcFmt, suffix = verb, note = "";
        if (verb === "compress") {
          const r = await it.compress(cv, srcFmt, p.level ?? "strong", p.maxKb);
          blob = r.blob; fm = r.fmt;
          if (blob.size >= f.size) { blob = f; fm = srcFmt; note = s.imgAlready; }
        } else if (verb === "resize") {
          const c = it.resize(cv, { w: p.w, h: p.h, pct: p.pct });
          blob = await it.encode(c, srcFmt, 0.92);
          note = `${cv.width}×${cv.height} → ${c.width}×${c.height}`;
        } else if (verb === "convert") {
          fm = p.to ?? (srcFmt === "png" ? "jpeg" : "png");
          blob = await it.encode(cv, fm, 0.92);
          suffix = "converted";
        } else if (verb === "crop") {
          const c = it.cropAspect(cv, p.ratio ?? 1);
          blob = await it.encode(c, srcFmt, 0.92);
          note = `${cv.width}×${cv.height} → ${c.width}×${c.height}`;
        } else if (verb === "rotate") {
          blob = await it.encode(it.rotate(cv, p.angle ?? 90), srcFmt, 0.92);
        } else if (verb === "flip") {
          blob = await it.encode(it.flip(cv, !!p.vertical), srcFmt, 0.92);
        } else {
          blob = await it.encode(it.gray(cv), srcFmt, 0.92);
          suffix = "gray";
        }
        part(1);
        out.push(imgOut(`${b}-${suffix}.${it.EXT[fm]}`, blob, [note, `${s.imgBefore} ${fmt(f.size)} → ${fmt(blob.size)}`].filter(Boolean).join(" · ")));
      }
      if (out.length > 1) out.unshift(zipOut("images.zip", await Promise.all(out.map(async (r) => ({ name: r.name, data: new Uint8Array(await r.blob.arrayBuffer()) })))));
      break;
    }
    case "merge": {
      if (pdfs.length < 2) throw new UserError(s.needTwo);
      const loaded: Uint8Array[] = [];
      for (const f of pdfs) loaded.push((await loadPdf(f, ctx)).bytes);
      out.push(pdfOut("merged.pdf", await eng.mergePdfs(loaded)));
      break;
    }
    case "split": {
      const f = firstPdf();
      const { bytes, pages } = await loadPdf(f, ctx);
      const b = base(f.name);
      let groups: number[][] | null;
      if (p.range) { const g = eng.parseRange(p.range, pages); if (!g) throw new UserError(t.errBadRange); groups = [g]; }
      else if (p.every) groups = eng.splitGroups(pages, { mode: "every", n: p.every });
      else groups = eng.splitGroups(pages, { mode: "each" });
      const parts = await eng.splitInto(bytes, groups!, (d, n) => ctx.progress(t.working, d / n), ctx.cancelled);
      const label = (g: number[]) => (g.length === 1 ? `p${g[0] + 1}` : g[g.length - 1] - g[0] + 1 === g.length ? `p${g[0] + 1}-${g[g.length - 1] + 1}` : `p${g.map((x) => x + 1).slice(0, 4).join('_')}${g.length > 4 ? '_etc' : ''}`);
      const list = parts.map((x, i) => ({ name: `${b}-${label(groups![i])}.pdf`, data: x }));
      if (list.length > 1) out.push(zipOut(`${b}-split.zip`, list));
      list.slice(0, 5).forEach((x) => out.push(pdfOut(x.name, x.data)));
      break;
    }
    case "extract-pages":
    case "delete-pages": {
      const f = firstPdf();
      const { bytes, pages } = await loadPdf(f, ctx);
      const sel = range(pages);
      const keep = action.tool === "extract-pages" ? sel : [...Array(pages).keys()].filter((i) => !sel.includes(i));
      if (!keep.length) throw new UserError(t.errNoSel);
      out.push(pdfOut(`${base(f.name)}-${action.tool === "extract-pages" ? "pages" : "edited"}.pdf`, await eng.extractPages(bytes, keep)));
      break;
    }
    case "rotate": {
      const f = firstPdf();
      const { bytes, pages } = await loadPdf(f, ctx);
      const sel = p.range ? range(pages) : undefined;
      out.push(pdfOut(`${base(f.name)}-rotated.pdf`, await eng.rotatePdf(bytes, p.angle ?? 90, sel)));
      break;
    }
    case "compress": {
      const f = firstPdf();
      const { bytes } = await loadPdf(f, ctx);
      const o = p.mode === "light" ? await eng.compressLight(bytes) : await eng.compressStrong(bytes, "balanced", (n, tot) => ctx.progress(t.working, n / tot), ctx.cancelled);
      if (!o) throw new UserError(s.cancelled);
      const smaller = o.byteLength < bytes.byteLength;
      out.push(pdfOut(`${base(f.name)}-compressed.pdf`, smaller ? o : bytes, smaller ? `${t.size}: ${fmt(bytes.byteLength)} → ${fmt(o.byteLength)} (${t.saved} ${Math.round((1 - o.byteLength / bytes.byteLength) * 100)}%)` : t.larger));
      break;
    }
    case "watermark": {
      const f = firstPdf();
      const { bytes, pages } = await loadPdf(f, ctx);
      const sel = p.range ? range(pages) : undefined;
      out.push(pdfOut(`${base(f.name)}-watermark.pdf`, await eng.watermarkPdf(bytes, (p.text || "NIBRAS PDF").slice(0, 80), (p.position as never) || "center", sel)));
      break;
    }
    case "protect": {
      const f = firstPdf();
      const { bytes } = await loadPdf(f, ctx);
      const pwd = await askPassword(ctx.box, s, f.name, "new", false);
      if (pwd === null) throw new UserError(s.cancelled);
      out.push(pdfOut(`${base(f.name)}-protected.pdf`, await eng.protectPdf(bytes, pwd), t.protectNote));
      break;
    }
    case "unlock": {
      const f = firstPdf();
      const raw = new Uint8Array(await f.arrayBuffer());
      try {
        await eng.pageCount(raw);
        throw new UserError(s.notLocked);
      } catch (e) {
        if (e instanceof UserError) throw e;
        if (!eng.isEncryptedError(e)) throw new UserError(t.errNotPdf);
      }
      const { bytes } = await loadPdf(f, ctx);
      out.push(pdfOut(`${base(f.name)}-unlocked.pdf`, new Uint8Array(await eng.mergePdfs([bytes]))));
      break;
    }
    case "pdf-image": {
      const f = firstPdf();
      const { bytes } = await loadPdf(f, ctx);
      const fmtId = p.format === "jpeg" ? "jpeg" : "png";
      const blobs = await eng.pdfToImages(bytes, fmtId, "balanced", (n, tot) => ctx.progress(t.working, n / tot), ctx.cancelled);
      const ext = fmtId === "png" ? "png" : "jpg";
      const b = base(f.name);
      const buf = await Promise.all(blobs.map(async (x) => new Uint8Array(await x.arrayBuffer())));
      out.push(zipOut(`${b}-images.zip`, buf.map((d, i) => ({ name: `${b}-${i + 1}.${ext}`, data: d }))));
      blobs.slice(0, 12).forEach((x, i) => out.push({ name: `${b}-${i + 1}.${ext}`, blob: x, kind: "image" }));
      break;
    }
    case "extract-text":
    case "pdf-word":
    case "ocr": {
      if (action.tool === "ocr" && !pdfs.length) {
        if (!imgs.length) throw new UserError(s.needImg);
        const canvases: HTMLCanvasElement[] = [];
        for (const f of imgs) {
          const bmp = await createImageBitmap(f);
          const k = Math.max(1, Math.min(3, 3000 / Math.max(bmp.width, bmp.height)));
          const c = document.createElement("canvas");
          c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
          const cx = c.getContext("2d", { willReadFrequently: true })!;
          cx.fillStyle = "#fff"; cx.fillRect(0, 0, c.width, c.height); cx.drawImage(bmp, 0, 0, c.width, c.height); bmp.close();
          canvases.push(preprocessForOcr(c));
        }
        const langs = await detectOcrLangs(canvases[0], ocrLangForSite(ctx.lang));
        const res = await ocrDetailed(canvases, langs, { onProgress: (d, n, fr) => ctx.progress(`${t.ocrWorking} ${d + 1}/${n}`, (d + fr) / n), shouldCancel: ctx.cancelled });
        const text = res.map((r) => r.text).join("\n\n").trim();
        if (!text) throw new UserError(t.errNoText);
        const avg = Math.round(res.reduce((a, r) => a + r.confidence, 0) / Math.max(1, res.length));
        out.push(textOut(base(imgs[0].name), text, `${t.confidence}: ${avg}%`));
        break;
      }
      const f = firstPdf();
      const { bytes } = await loadPdf(f, ctx);
      const r = await extractTextSmart(bytes, {
        uiLang: ctx.lang,
        ocr: action.tool === "ocr" || p.forceOcr ? "force" : "auto",
        langs: "auto",
        shouldCancel: ctx.cancelled,
        onProgress: (x) => ctx.progress(`${x.phase === "ocr" ? t.ocrWorking : x.phase === "render" ? t.preparing : t.working} ${x.page}/${x.total}`, x.phase === "text" ? x.fraction * 0.2 : 0.2 + x.fraction * 0.8),
      });
      if (!r.text.trim()) throw new UserError(t.errNoText);
      const note = [r.usedOcr ? `${t.ocrUsed} (${r.langs.join("+")})${r.avgConfidence != null ? ` · ${t.confidence}: ${r.avgConfidence}%` : ""}` : t.textLayer, r.lowConfidencePages.length ? `${t.lowConf}: ${r.lowConfidencePages.join(", ")}` : ""].filter(Boolean).join(" · ");
      if (action.tool === "pdf-word") out.push({ name: `${base(f.name)}.docx`, blob: docxBlob(r.text), kind: "docx", note: `${note} · ${t.wordNote}` });
      else out.push(textOut(base(f.name), r.text, note));
      break;
    }
    case "image-pdf": {
      if (!imgs.length) throw new UserError(s.needImg);
      out.push(pdfOut("images.pdf", await eng.imagesToPdf(imgs, "a4", "balanced", (n, tot) => ctx.progress(t.working, n / tot))));
      break;
    }
    case "word-pdf": {
      if (!docx.length) throw new UserError(s.needDocx);
      let text: string;
      try { text = docxToText(new Uint8Array(await docx[0].arrayBuffer())); } catch { throw new UserError(t.errNotDocx); }
      if (!text) throw new UserError(t.errNoText);
      out.push(pdfOut(`${base(docx[0].name)}.pdf`, await eng.textToPdf(text, { size: "a4", fontSize: 12, align: "left", bold: false, margin: 56, pageNumbers: true }), t.textOnly));
      break;
    }
    default:
      throw new UserError(s.failed);
  }
  return out;
}

/** Runs the action, shows progress, password prompts and result cards inside `container`. */
export async function handle(o: HandleOptions): Promise<RunResult[]> {
  css();
  const lang = (CHAT[o.lang] ? o.lang : "az") as Lang;
  const s = CHAT[lang];
  const t = COPY[lang];
  const box = el("div", "nbp");
  box.setAttribute("data-nbp", "root");
  box.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  o.container.append(box);
  const st = el("div", "nbp-live");
  st.setAttribute("data-nbp", "status");
  const orb = el("span", "nbp-orb");
  const label = el("div", "nbp-stage", s.working);
  const pct = el("span", "nbp-pct", "0%");
  const bar = el("div", "nbp-line");
  const fill = el("i");
  bar.append(fill);
  let stop = false;
  const cancel = el("button", "nbp-ghost", s.cancel);
  cancel.onclick = () => { stop = true; };
  st.append(orb, label, pct, bar, cancel);
  box.append(st);
  const progress = (l: string, f: number) => { const n = Math.max(0, Math.min(100, Math.round(f * 100))); label.textContent = l; pct.textContent = `${n}%`; fill.style.width = `${Math.max(4, n)}%`; o.onStatus?.(l); };
  try {
    const res = await runTool(o.action, o.files, { lang, t, s, box, progress, cancelled: () => stop });
    st.remove();
    if (stop) throw new UserError(s.cancelled);
    renderResults(box, res, s);
    return res;
  } catch (e) {
    st.remove();
    const msg = e instanceof UserError ? e.message : (() => { console.error(e); return /encrypt|password/i.test(String((e as Error)?.message)) ? t.errLocked : t.errFailed; })();
    const card = el("div", "nbp-card");
    card.setAttribute("data-nbp", "error");
    card.append(el("div", "nbp-err", msg));
    box.append(card);
    throw e;
  }
}

/** OCR one image file with the same pipeline as the "ocr" tool (also used by the accuracy benchmark). */
/** Debug/test helper: the image exactly as the OCR engine sees it (PNG data URL) plus detected line bands. */
export async function ocrPrepare(file: File, config: Partial<OcrConfig> = {}) {
  const bmp = await createImageBitmap(file);
  const c = document.createElement("canvas");
  c.width = bmp.width; c.height = bmp.height;
  const cx = c.getContext("2d", { willReadFrequently: true })!;
  cx.fillStyle = "#fff"; cx.fillRect(0, 0, c.width, c.height); cx.drawImage(bmp, 0, 0); bmp.close();
  const pre = preprocessForOcr(c, true, config);
  return { url: pre.toDataURL("image/png"), w: pre.width, h: pre.height };
}

export async function ocrFile(file: File, o: { uiLang?: Lang; langs?: OcrLang[]; config?: Partial<OcrConfig> } = {}) {
  const bmp = await createImageBitmap(file);
  const c = document.createElement("canvas");
  c.width = bmp.width; c.height = bmp.height;
  const cx = c.getContext("2d", { willReadFrequently: true })!;
  cx.fillStyle = "#fff"; cx.fillRect(0, 0, c.width, c.height); cx.drawImage(bmp, 0, 0); bmp.close();
  const pre = preprocessForOcr(c, true, o.config);
  const langs = o.langs ?? (await detectOcrLangs(pre, ocrLangForSite(o.uiLang ?? "az")));
  const [res] = await ocrDetailed([pre], langs, { config: o.config });
  return { text: res.text, confidence: res.confidence, langs, mode: res.mode };
}

export const accepts = (f: File) => kindOf(f) !== "other";
export const fileKind = kindOf;
const api = { version: 1, handle, accepts, fileKind, ocrFile, ocrPrepare };
(globalThis as unknown as { NibrasPdf?: typeof api }).NibrasPdf = api;
export default api;
