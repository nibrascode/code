import { createPdfOperations, type WatermarkPosition } from "./pdfOperations";
import { containsArabic } from "./arabicText";
import { shapeArabicForPdf } from "./arabicShape";
import { canvasToBlob, closePdf, openPdf, renderPageToCanvas } from "./pdfjs";

export type PageSizeId = "a4" | "a5" | "letter" | "legal";
export const PAGE_SIZES: Record<PageSizeId, { width: number; height: number }> = {
  a4: { width: 595.28, height: 841.89 },
  a5: { width: 419.53, height: 595.28 },
  letter: { width: 612, height: 792 },
  legal: { width: 612, height: 1008 },
};
export type Quality = "high" | "balanced" | "small";
const IMAGE_LIMITS: Record<Quality, { max: number; jpeg: number }> = {
  high: { max: 3200, jpeg: 0.92 },
  balanced: { max: 2200, jpeg: 0.8 },
  small: { max: 1500, jpeg: 0.6 },
};
const RENDER: Record<Quality, { scale: number; jpeg: number }> = {
  high: { scale: 2, jpeg: 0.85 },
  balanced: { scale: 1.5, jpeg: 0.7 },
  small: { scale: 1.1, jpeg: 0.55 },
};

type Lib = typeof import("pdf-lib");
let enginePromise: Promise<{ lib: Lib; ops: ReturnType<typeof createPdfOperations> }> | null = null;
/** pdf-lib (MIT) is its own chunk, loaded on first use. Encryption uses the @cantoo/pdf-lib fork, loaded only for Protect/Unlock. */
export function getEngine() {
  enginePromise ??= (async () => {
    const [lib, fk] = await Promise.all([import("pdf-lib"), import("@pdf-lib/fontkit")]);
    const ops = createPdfOperations({
      PDFDocument: lib.PDFDocument,
      StandardFonts: lib.StandardFonts,
      degrees: lib.degrees,
      rgb: lib.rgb,
      PDFName: lib.PDFName,
      PDFDict: lib.PDFDict,
      PDFArray: lib.PDFArray,
      decodePDFRawStream: lib.decodePDFRawStream,
      fontkit: (fk as { default?: unknown }).default ?? fk,
    } as never);
    return { lib, ops };
  })();
  return enginePromise;
}

const fontCache = new Map<string, Promise<Uint8Array>>();
export function loadFont(name: "DejaVuSans" | "DejaVuSans-Bold" | "NotoNaskhArabic-Regular" | "NotoNaskhArabic-Bold") {
  let p = fontCache.get(name);
  if (!p) {
    p = fetch(`/pdf-assets/fonts/${name}.ttf`).then(async (r) => {
      if (!r.ok) throw new Error("font");
      return new Uint8Array(await r.arrayBuffer());
    });
    fontCache.set(name, p);
  }
  return p;
}

export async function pageCount(bytes: Uint8Array): Promise<number> {
  const { lib } = await getEngine();
  const doc = await lib.PDFDocument.load(bytes);
  return doc.getPageCount();
}

/** "1-3, 5" -> zero-based indices; null when empty/invalid. */
export function parseRange(input: string, total: number): number[] | null {
  const out = new Set<number>();
  for (const part of input.split(/[,;\s]+/).filter(Boolean)) {
    const m = part.match(/^(\d+)(?:-(\d+))?$/);
    if (!m) return null;
    const a = Number(m[1]);
    const b = m[2] ? Number(m[2]) : a;
    if (a < 1 || b < a || b > total) return null;
    for (let i = a; i <= b; i++) out.add(i - 1);
  }
  return out.size ? [...out].sort((x, y) => x - y) : null;
}

export async function mergePdfs(sources: Uint8Array[]) {
  const { ops } = await getEngine();
  return ops.mergePdfBytes(sources);
}

export async function splitPdf(bytes: Uint8Array) {
  const { ops } = await getEngine();
  return ops.splitPdfBytes(bytes);
}

/** Pages -> groups of zero-based indices for the split modes. */
export function splitGroups(total: number, o: { mode: "each" | "every" | "ranges"; n?: number; ranges?: string[] }): number[][] | null {
  if (o.mode === "each") return [...Array(total).keys()].map((i) => [i]);
  if (o.mode === "every") {
    const n = Math.max(1, Math.floor(o.n || 1));
    const out: number[][] = [];
    for (let i = 0; i < total; i += n) out.push([...Array(Math.min(n, total - i)).keys()].map((k) => i + k));
    return out;
  }
  const out: number[][] = [];
  for (const r of o.ranges ?? []) {
    if (!r.trim()) continue;
    const g = parseRange(r, total);
    if (!g) return null;
    out.push(g);
  }
  return out.length ? out : null;
}

export async function splitInto(bytes: Uint8Array, groups: number[][], onProgress?: (done: number, total: number) => void, shouldCancel?: () => boolean) {
  const { ops } = await getEngine();
  return ops.splitGroups(bytes, groups, onProgress, shouldCancel);
}

export async function extractPages(bytes: Uint8Array, pageIndices: number[]) {
  const { ops } = await getEngine();
  return (await ops.composePdfPages(pageIndices.map((pageIndex) => ({ bytes, pageIndex }))))!;
}

export async function rotatePdf(bytes: Uint8Array, delta: number, pages?: number[]) {
  const { lib } = await getEngine();
  const doc = await lib.PDFDocument.load(bytes);
  const only = pages ? new Set(pages) : null;
  doc.getPages().forEach((p, i) => {
    if (only && !only.has(i)) return;
    p.setRotation(lib.degrees((((p.getRotation().angle + delta) % 360) + 360) % 360));
  });
  return doc.save({ useObjectStreams: true });
}

export async function protectPdf(bytes: Uint8Array, password: string) {
  const { PDFDocument } = await import("@cantoo/pdf-lib");
  const doc = await PDFDocument.load(bytes);
  doc.encrypt({ userPassword: password, ownerPassword: password, algorithm: "AES-128", permissions: { printing: "highResolution" } } as never);
  return doc.save({ useObjectStreams: true });
}

export async function watermarkPdf(bytes: Uint8Array, text: string, position: WatermarkPosition, pages?: number[]) {
  const { ops } = await getEngine();
  const arabic = containsArabic(text);
  const wide = /[^\u0000-\u00ff]/.test(text);
  const font = arabic ? await loadFont("NotoNaskhArabic-Bold") : wide ? await loadFont("DejaVuSans-Bold") : undefined;
  return (await ops.transformPdfBytes(bytes, "watermark", text, position, pages, undefined, undefined, font))!;
}

export async function compressLight(bytes: Uint8Array) {
  const { ops } = await getEngine();
  return (await ops.transformPdfBytes(bytes, "compress"))!;
}

/** Rebuilds the PDF from JPEG renders of each page. Smaller, but text is no longer selectable. */
export async function compressStrong(bytes: Uint8Array, quality: Quality, onPage?: (n: number, total: number) => void, shouldCancel?: () => boolean) {
  const { lib } = await getEngine();
  const src = await openPdf(bytes);
  const out = await lib.PDFDocument.create();
  const cfg = RENDER[quality];
  try {
    for (let n = 1; n <= src.numPages; n++) {
      if (shouldCancel?.()) return null;
      onPage?.(n, src.numPages);
      const page = await src.getPage(n);
      const vp = page.getViewport({ scale: 1 });
      const canvas = await renderPageToCanvas(src, n, cfg.scale);
      const jpg = await out.embedJpg(new Uint8Array(await (await canvasToBlob(canvas, "image/jpeg", cfg.jpeg)).arrayBuffer()));
      const p = out.addPage([vp.width, vp.height]);
      p.drawImage(jpg, { x: 0, y: 0, width: vp.width, height: vp.height });
      canvas.width = canvas.height = 0;
    }
  } finally {
    await closePdf(src);
  }
  return out.save({ useObjectStreams: true });
}

async function normalizeImage(file: Blob, quality: Quality): Promise<{ bytes: Uint8Array; format: "png" | "jpg" }> {
  const bmp = await createImageBitmap(file);
  const lim = IMAGE_LIMITS[quality];
  const k = Math.min(1, lim.max / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bmp.width * k));
  canvas.height = Math.max(1, Math.round(bmp.height * k));
  const ctx = canvas.getContext("2d")!;
  const png = file.type === "image/png";
  if (!png) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close();
  const blob = await canvasToBlob(canvas, png ? "image/png" : "image/jpeg", lim.jpeg);
  return { bytes: new Uint8Array(await blob.arrayBuffer()), format: png ? "png" : "jpg" };
}

/** pageSize "fit" makes every page the size of its image. */
export async function imagesToPdf(files: Blob[], pageSize: PageSizeId | "fit", quality: Quality, onImage?: (n: number, total: number) => void) {
  const { lib } = await getEngine();
  const out = await lib.PDFDocument.create();
  for (let i = 0; i < files.length; i++) {
    onImage?.(i + 1, files.length);
    const img = await normalizeImage(files[i], quality);
    const emb = img.format === "png" ? await out.embedPng(img.bytes) : await out.embedJpg(img.bytes);
    if (pageSize === "fit") {
      const page = out.addPage([emb.width, emb.height]);
      page.drawImage(emb, { x: 0, y: 0, width: emb.width, height: emb.height });
      continue;
    }
    let { width: pw, height: ph } = PAGE_SIZES[pageSize];
    if (emb.width > emb.height) [pw, ph] = [ph, pw];
    const s = Math.min(pw / emb.width, ph / emb.height);
    const w = emb.width * s;
    const h = emb.height * s;
    out.addPage([pw, ph]).drawImage(emb, { x: (pw - w) / 2, y: (ph - h) / 2, width: w, height: h });
  }
  return out.save({ useObjectStreams: true });
}

export async function pdfToImages(
  bytes: Uint8Array,
  format: "png" | "jpeg",
  quality: Quality,
  onPage?: (n: number, total: number) => void,
  shouldCancel?: () => boolean,
) {
  const doc = await openPdf(bytes);
  const scale = { high: 2.5, balanced: 1.8, small: 1.2 }[quality];
  const out: Blob[] = [];
  try {
    for (let n = 1; n <= doc.numPages; n++) {
      if (shouldCancel?.()) break;
      onPage?.(n, doc.numPages);
      const canvas = await renderPageToCanvas(doc, n, scale);
      out.push(await canvasToBlob(canvas, `image/${format}`, 0.92));
      canvas.width = canvas.height = 0;
    }
  } finally {
    await closePdf(doc);
  }
  return out;
}

export async function reorderPages(bytes: Uint8Array, order: number[]) {
  return extractPages(bytes, order);
}

export async function signPdf(bytes: Uint8Array, signaturePng: Uint8Array, pageIndex: number, cx: number, cy: number, widthFraction: number) {
  const { lib } = await getEngine();
  const doc = await lib.PDFDocument.load(bytes);
  const img = await doc.embedPng(signaturePng);
  const page = doc.getPage(pageIndex);
  const rot = (((page.getRotation().angle % 360) + 360) % 360);
  const { width: W, height: H } = page.getSize();
  // cx, cy: centre on the displayed page as fractions from the top-left.
  const dispW = rot % 180 === 0 ? W : H;
  const dispH = rot % 180 === 0 ? H : W;
  const dx = cx * dispW;
  const dy = cy * dispH;
  const w = dispW * widthFraction;
  const h = (img.height / img.width) * w;
  const [ux, uy] = rot === 0 ? [dx, H - dy] : rot === 90 ? [dy, dx] : rot === 180 ? [W - dx, dy] : [W - dy, H - dx];
  const t = (rot * Math.PI) / 180;
  const ax = ux - ((w / 2) * Math.cos(t) - (h / 2) * Math.sin(t));
  const ay = uy - ((w / 2) * Math.sin(t) + (h / 2) * Math.cos(t));
  page.drawImage(img, { x: ax, y: ay, width: w, height: h, rotate: lib.degrees(rot) });
  return doc.save({ useObjectStreams: true });
}

export async function pdfToText(bytes: Uint8Array, onPage?: (n: number, total: number) => void) {
  const { extractPageLines } = await import("./pdfjs");
  const doc = await openPdf(bytes);
  const pages: string[] = [];
  try {
    for (let n = 1; n <= doc.numPages; n++) {
      onPage?.(n, doc.numPages);
      pages.push((await extractPageLines(doc, n)).join("\n"));
    }
  } finally {
    await closePdf(doc);
  }
  const { fixArabicDoc } = await import("./textLines");
  return fixArabicDoc(pages);
}

export type TextPdfOptions = {
  size: PageSizeId;
  fontSize: number;
  align: "left" | "center" | "right";
  bold: boolean;
  margin: number;
  pageNumbers: boolean;
  title?: string;
};

export async function textToPdf(text: string, o: TextPdfOptions) {
  const { lib } = await getEngine();
  const fk = (await import("@pdf-lib/fontkit")) as { default?: unknown };
  const doc = await lib.PDFDocument.create();
  doc.registerFontkit((fk.default ?? fk) as never);
  const needArabic = containsArabic(text) || (o.title ? containsArabic(o.title) : false);
  const latin = await doc.embedFont(await loadFont(o.bold ? "DejaVuSans-Bold" : "DejaVuSans"), { subset: true });
  const latinBold = await doc.embedFont(await loadFont("DejaVuSans-Bold"), { subset: true });
  const arabic = needArabic ? await doc.embedFont(await loadFont(o.bold ? "NotoNaskhArabic-Bold" : "NotoNaskhArabic-Regular"), { subset: true }) : null;
  const arabicBold = needArabic ? await doc.embedFont(await loadFont("NotoNaskhArabic-Bold"), { subset: true }) : null;
  const sets = new Map<unknown, Set<number>>();
  const charset = (f: unknown) => {
    let s = sets.get(f);
    if (!s) {
      s = new Set((f as { getCharacterSet(): number[] }).getCharacterSet());
      sets.set(f, s);
    }
    return s;
  };
  const clean = (s: string, f: unknown) => {
    const cs = charset(f);
    let r = "";
    for (const ch of s) {
      const cp = ch.codePointAt(0)!;
      if (cp === 9) r += "    ";
      else if (cp < 32 || (cp >= 0x200b && cp <= 0x200f) || cp === 0xfeff) continue;
      else r += cs.has(cp) ? ch : "?";
    }
    return r;
  };
  const { width: PW, height: PH } = PAGE_SIZES[o.size];
  const m = o.margin;
  const textColor = lib.rgb(0.07, 0.09, 0.12);
  let page = doc.addPage([PW, PH]);
  let y = PH - m;
  const newPage = () => {
    page = doc.addPage([PW, PH]);
    y = PH - m;
  };
  const drawLine = (raw: string, size: number, isArabic: boolean, bold: boolean, align: "left" | "center" | "right") => {
    const font = isArabic ? (bold ? arabicBold! : arabic!) : bold ? latinBold : latin;
    const lh = size * (isArabic ? 1.7 : 1.45);
    if (y - lh < m) newPage();
    y -= lh;
    const visual = isArabic ? shapeArabicForPdf(clean(raw, font)) : clean(raw, font);
    const w = font.widthOfTextAtSize(visual, size);
    const x = align === "center" ? (PW - w) / 2 : align === "right" ? PW - m - w : m;
    page.drawText(visual, { x, y: y + lh * 0.25, size, font, color: textColor });
  };
  const wrap = (para: string, size: number, isArabic: boolean, bold: boolean) => {
    const font = isArabic ? (bold ? arabicBold! : arabic!) : bold ? latinBold : latin;
    const max = PW - 2 * m;
    const words = para.split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let cur = "";
    const width = (s: string) => font.widthOfTextAtSize(isArabic ? shapeArabicForPdf(clean(s, font)) : clean(s, font), size);
    for (const w of words) {
      let word = w;
      const trial = cur ? `${cur} ${word}` : word;
      if (width(trial) <= max) {
        cur = trial;
        continue;
      }
      if (cur) lines.push(cur);
      cur = "";
      while (width(word) > max && word.length > 1) {
        let k = word.length - 1;
        while (k > 1 && width(word.slice(0, k)) > max) k--;
        lines.push(word.slice(0, k));
        word = word.slice(k);
      }
      cur = word;
    }
    if (cur) lines.push(cur);
    return lines.length ? lines : [""];
  };
  if (o.title?.trim()) {
    const ar = containsArabic(o.title);
    for (const l of wrap(o.title.trim(), o.fontSize * 1.6, ar, true)) drawLine(l, o.fontSize * 1.6, ar, true, "center");
    y -= o.fontSize * 0.8;
  }
  for (const para of text.replace(/\r/g, "").split("\n")) {
    if (!para.trim()) {
      y -= o.fontSize * 0.9;
      if (y < m) newPage();
      continue;
    }
    const ar = containsArabic(para);
    const align = ar && o.align === "left" ? "right" : o.align;
    for (const l of wrap(para, o.fontSize, ar, o.bold)) drawLine(l, o.fontSize, ar, o.bold, align);
  }
  if (o.pageNumbers) {
    doc.getPages().forEach((p, i) => {
      const s = String(i + 1);
      const w = latin.widthOfTextAtSize(s, 9);
      p.drawText(s, { x: (PW - w) / 2, y: m / 2 - 4, size: 9, font: latin, color: lib.rgb(0.4, 0.4, 0.45) });
    });
  }
  return doc.save({ useObjectStreams: true });
}

/** Opens a password-protected PDF and returns an unencrypted copy. */
export async function unlockPdf(bytes: Uint8Array, password: string) {
  const { PDFDocument } = await import("@cantoo/pdf-lib");
  const src = await PDFDocument.load(bytes, { password } as never);
  // Saving the decrypted document would encrypt it again, so copy its pages into a fresh one.
  const out = await PDFDocument.create();
  const pages = await out.copyPages(src, src.getPageIndices());
  pages.forEach((p) => out.addPage(p));
  return out.save({ useObjectStreams: true });
}

export function isEncryptedError(e: unknown) {
  return /encrypt|password/i.test(String((e as Error)?.message ?? e));
}

export type NumPos = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
export type NumFormat = "n" | "n-of" | "dash";
export async function addPageNumbers(bytes: Uint8Array, o: { fromPage: number; start: number; position: NumPos; format: NumFormat; size: number; margin: number }) {
  const lib = await import("@cantoo/pdf-lib");
  const doc = await lib.PDFDocument.load(bytes);
  const font = await doc.embedFont(lib.StandardFonts.Helvetica);
  const pages = doc.getPages();
  const from = Math.max(1, Math.min(pages.length, Math.floor(o.fromPage) || 1)) - 1;
  const start = Math.floor(o.start) || 0;
  const last = start + (pages.length - from) - 1;
  pages.forEach((p, i) => {
    if (i < from) return;
    const n = start + (i - from);
    const label = o.format === "n-of" ? `${n} / ${last}` : o.format === "dash" ? `- ${n} -` : String(n);
    const box = p.getCropBox();
    const w = font.widthOfTextAtSize(label, o.size);
    const x = o.position.endsWith("left") ? box.x + o.margin : o.position.endsWith("right") ? box.x + box.width - o.margin - w : box.x + (box.width - w) / 2;
    const y = o.position.startsWith("top") ? box.y + box.height - o.margin - o.size : box.y + o.margin;
    p.drawText(label, { x, y, size: o.size, font, color: lib.rgb(0.15, 0.15, 0.15) });
  });
  return doc.save({ useObjectStreams: true });
}

/** Hides the page edges: sets the visible box smaller. Margins are in mm. Content outside stays in the file. */
export async function cropPdf(bytes: Uint8Array, mm: { top: number; right: number; bottom: number; left: number }, pages?: number[]) {
  const lib = await import("@cantoo/pdf-lib");
  const doc = await lib.PDFDocument.load(bytes);
  const k = 72 / 25.4;
  doc.getPages().forEach((p, i) => {
    if (pages && !pages.includes(i)) return;
    const b = p.getCropBox();
    const l = mm.left * k, r = mm.right * k, t = mm.top * k, bo = mm.bottom * k;
    const w = b.width - l - r, h = b.height - t - bo;
    if (w < 20 || h < 20) throw new Error("crop-too-big");
    p.setCropBox(b.x + l, b.y + bo, w, h);
    p.setMediaBox(b.x + l, b.y + bo, w, h);
  });
  return doc.save({ useObjectStreams: true });
}

async function rasterPages(
  bytes: Uint8Array,
  paint: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, pageIndex: number, scale: number) => void,
  o: { scale: number; jpeg: number; only?: Set<number> },
  onPage?: (n: number, total: number) => void,
) {
  const lib = await import("@cantoo/pdf-lib");
  const orig = await lib.PDFDocument.load(bytes);
  const out = await lib.PDFDocument.create();
  const src = await openPdf(bytes);
  try {
    for (let n = 1; n <= src.numPages; n++) {
      onPage?.(n, src.numPages);
      if (o.only && !o.only.has(n - 1)) {
        const [cp] = await out.copyPages(orig, [n - 1]);
        out.addPage(cp);
        continue;
      }
      const vp = (await src.getPage(n)).getViewport({ scale: 1 });
      const canvas = await renderPageToCanvas(src, n, o.scale);
      const ctx = canvas.getContext("2d")!;
      paint(ctx, canvas, n - 1, canvas.width / vp.width);
      const jpg = await out.embedJpg(new Uint8Array(await (await canvasToBlob(canvas, "image/jpeg", o.jpeg)).arrayBuffer()));
      const p = out.addPage([vp.width, vp.height]);
      p.drawImage(jpg, { x: 0, y: 0, width: vp.width, height: vp.height });
      canvas.width = canvas.height = 0;
    }
  } finally {
    await closePdf(src);
  }
  return out.save({ useObjectStreams: true });
}

/** Renders each page to an image and turns it gray. Text is no longer selectable. */
export async function grayscalePdf(bytes: Uint8Array, quality: Quality, onPage?: (n: number, total: number) => void) {
  const cfg = RENDER[quality];
  return rasterPages(bytes, (ctx, c) => {
    const d = ctx.getImageData(0, 0, c.width, c.height);
    const a = d.data;
    for (let i = 0; i < a.length; i += 4) {
      const g = Math.round(a[i] * 0.299 + a[i + 1] * 0.587 + a[i + 2] * 0.114);
      a[i] = a[i + 1] = a[i + 2] = g;
    }
    ctx.putImageData(d, 0, 0);
  }, { scale: cfg.scale, jpeg: cfg.jpeg }, onPage);
}

/** Box in page fractions (0..1, top-left origin). */
export type RedactBox = { page: number; x: number; y: number; w: number; h: number };
/**
 * Draws black boxes. With flatten, the marked pages are rebuilt as images, so the text under the box is gone
 * from those pages; other pages are kept as they are.
 */
export async function redactPdf(bytes: Uint8Array, boxes: RedactBox[], flatten: boolean, onPage?: (n: number, total: number) => void) {
  if (flatten) {
    const only = new Set(boxes.map((b) => b.page));
    return rasterPages(bytes, (ctx, c, i) => {
      ctx.fillStyle = "#000";
      for (const b of boxes) if (b.page === i) ctx.fillRect(b.x * c.width, b.y * c.height, b.w * c.width, b.h * c.height);
    }, { scale: 2, jpeg: 0.9, only }, onPage);
  }
  const lib = await import("@cantoo/pdf-lib");
  const doc = await lib.PDFDocument.load(bytes);
  const pages = doc.getPages();
  for (const b of boxes) {
    const p = pages[b.page];
    if (!p) continue;
    const box = p.getCropBox();
    p.drawRectangle({ x: box.x + b.x * box.width, y: box.y + box.height - (b.y + b.h) * box.height, width: b.w * box.width, height: b.h * box.height, color: lib.rgb(0, 0, 0) });
  }
  return doc.save({ useObjectStreams: true });
}

/** Simple CSV parser: commas, semicolons or tabs, quoted fields. */
export function parseCsv(text: string): string[][] {
  const src = text.replace(/^\ufeff/, "");
  const firstLine = src.split(/\r?\n/, 1)[0] ?? "";
  const counts = [",", ";", "\t"].map((d) => [d, firstLine.split(d).length] as const);
  const sep = counts.sort((a, b) => b[1] - a[1])[0][0];
  const rows: string[][] = [];
  let row: string[] = [], cell = "", q = false;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (q) {
      if (ch === '"') { if (src[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === sep) { row.push(cell); cell = ""; }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && src[i + 1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim()));
}

/** Reads cell text (values, not formulas or styles) from every sheet of an .xlsx file. */
export async function readXlsx(bytes: Uint8Array): Promise<{ name: string; rows: string[][] }[]> {
  const { unzipSync, strFromU8 } = await import("fflate");
  const z = unzipSync(bytes);
  const get = (p: string) => (z[p] ? strFromU8(z[p]) : "");
  const dec = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&amp;/g, "&");
  const shared = [...get("xl/sharedStrings.xml").matchAll(/<si>([\s\S]*?)<\/si>/g)].map((m) => dec([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join("")));
  const wb = get("xl/workbook.xml");
  const rels = get("xl/_rels/workbook.xml.rels");
  const sheets = [...wb.matchAll(/<sheet\b[^>]*?name="([^"]*)"[^>]*?r:id="([^"]*)"/g)].map((m) => {
    const target = rels.match(new RegExp(`Id="${m[2]}"[^>]*Target="([^"]+)"`))?.[1] ?? rels.match(new RegExp(`Target="([^"]+)"[^>]*Id="${m[2]}"`))?.[1] ?? "";
    return { name: dec(m[1]), path: target.startsWith("/") ? target.slice(1) : `xl/${target}` };
  });
  const colIdx = (ref: string) => { let n = 0; for (const c of ref.replace(/\d+/g, "")) n = n * 26 + c.charCodeAt(0) - 64; return n - 1; };
  return sheets.map((s) => {
    const xml = get(s.path);
    const rows: string[][] = [];
    for (const r of xml.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)) {
      const row: string[] = [];
      for (const c of r[1].matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
        const attrs = c[1];
        const ref = attrs.match(/r="([A-Z]+\d+)"/)?.[1];
        const type = attrs.match(/t="([^"]+)"/)?.[1];
        const body = c[2] ?? "";
        let v = body.match(/<v>([\s\S]*?)<\/v>/)?.[1] ?? "";
        if (type === "s") v = shared[+v] ?? "";
        else if (type === "inlineStr") v = [...body.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join("");
        else if (type === "b") v = v === "1" ? "TRUE" : "FALSE";
        const idx = ref ? colIdx(ref) : row.length;
        while (row.length < idx) row.push("");
        row[idx] = dec(v);
      }
      rows.push(row);
    }
    return { name: s.name, rows: rows.filter((x) => x.some((c) => c.trim())) };
  }).filter((s) => s.rows.length);
}

type Fonts = { reg: import("pdf-lib").PDFFont; bold: import("pdf-lib").PDFFont; ar: import("pdf-lib").PDFFont; arBold: import("pdf-lib").PDFFont };
// Uses plain pdf-lib: font subsetting with @pdf-lib/fontkit crashes on save in the @cantoo fork.
async function docWithFonts() {
  const { lib } = await getEngine();
  const fk = (await import("@pdf-lib/fontkit")) as { default?: unknown };
  const doc = await lib.PDFDocument.create();
  doc.registerFontkit((fk.default ?? fk) as never);
  const f: Fonts = {
    reg: await doc.embedFont(await loadFont("DejaVuSans"), { subset: true }),
    bold: await doc.embedFont(await loadFont("DejaVuSans-Bold"), { subset: true }),
    ar: await doc.embedFont(await loadFont("NotoNaskhArabic-Regular"), { subset: true }),
    arBold: await doc.embedFont(await loadFont("NotoNaskhArabic-Bold"), { subset: true }),
  };
  const cs = new Map<unknown, Set<number>>();
  const vis = (s: string, bold = false) => {
    const isAr = containsArabic(s);
    const font = isAr ? (bold ? f.arBold : f.ar) : bold ? f.bold : f.reg;
    let set = cs.get(font);
    if (!set) { set = new Set((font as unknown as { getCharacterSet(): number[] }).getCharacterSet()); cs.set(font, set); }
    let r = "";
    for (const ch of s.replace(/[\r\n\t]+/g, " ")) { const cp = ch.codePointAt(0)!; if (cp < 32) continue; r += set.has(cp) ? ch : "?"; }
    return { text: isAr ? shapeArabicForPdf(r) : r, font, isAr };
  };
  const fit = (s: string, size: number, max: number, bold = false) => {
    let v = vis(s, bold);
    if (v.font.widthOfTextAtSize(v.text, size) <= max) return v;
    let t = s;
    while (t.length > 1) { t = t.slice(0, -1); v = vis(t + "…", bold); if (v.font.widthOfTextAtSize(v.text, size) <= max) return v; }
    return v;
  };
  return { lib, doc, vis, fit };
}

/** Draws rows as a table. The first row is the header, repeated on each page. Long cells are cut with «…». */
export async function tableToPdf(rows: string[][], o: { title?: string; header: boolean; landscape: "auto" | boolean; fontSize?: number }) {
  const { lib, doc, fit } = await docWithFonts();
  const cols = Math.max(1, ...rows.map((r) => r.length));
  const land = o.landscape === "auto" ? cols > 6 : o.landscape;
  const [PW, PH] = land ? [841.89, 595.28] : [595.28, 841.89];
  const m = 32, size = o.fontSize ?? (cols > 10 ? 7 : cols > 6 ? 8 : 9.5), rh = size * 1.9;
  const usable = PW - 2 * m;
  const len = Array.from({ length: cols }, (_, c) => Math.min(40, Math.max(3, ...rows.slice(0, 200).map((r) => (r[c] ?? "").length))));
  const sum = len.reduce((a, b) => a + b, 0);
  const widths = len.map((l) => (l / sum) * usable);
  const head = o.header ? rows[0] : null;
  const body = o.header ? rows.slice(1) : rows;
  let page = doc.addPage([PW, PH]);
  let y = PH - m;
  const line = lib.rgb(0.75, 0.77, 0.8);
  const drawRow = (r: string[], bold: boolean) => {
    if (y - rh < m) { page = doc.addPage([PW, PH]); y = PH - m; if (head && !bold) drawRow(head, true); }
    if (bold) page.drawRectangle({ x: m, y: y - rh, width: usable, height: rh, color: lib.rgb(0.92, 0.94, 0.97) });
    let x = m;
    for (let c = 0; c < cols; c++) {
      const v = fit(r[c] ?? "", size, widths[c] - 6, bold);
      const w = v.font.widthOfTextAtSize(v.text, size);
      page.drawText(v.text, { x: v.isAr ? x + widths[c] - 3 - w : x + 3, y: y - rh + size * 0.6, size, font: v.font, color: lib.rgb(0.07, 0.09, 0.12) });
      x += widths[c];
    }
    page.drawLine({ start: { x: m, y: y - rh }, end: { x: PW - m, y: y - rh }, thickness: 0.5, color: line });
    y -= rh;
  };
  if (o.title?.trim()) {
    const v = fit(o.title.trim(), 14, usable, true);
    page.drawText(v.text, { x: m, y: y - 14, size: 14, font: v.font });
    y -= 26;
  }
  if (head) drawRow(head, true);
  for (const r of body) drawRow(r, false);
  return doc.save({ useObjectStreams: true });
}

export type Invoice = {
  title: string; number: string; date: string; due: string; currency: string;
  seller: string; buyer: string; notes: string; taxPct: number;
  items: { name: string; qty: number; price: number }[];
  labels: { seller: string; buyer: string; item: string; qty: string; price: string; sum: string; subtotal: string; tax: string; total: string; number: string; date: string; due: string };
};
export const money = (n: number) => (Math.round(n * 100) / 100).toFixed(2);
export function invoiceTotals(inv: Pick<Invoice, "items" | "taxPct">) {
  const subtotal = inv.items.reduce((a, i) => a + (i.qty || 0) * (i.price || 0), 0);
  const tax = subtotal * (inv.taxPct || 0) / 100;
  return { subtotal, tax, total: subtotal + tax };
}
export async function invoicePdf(inv: Invoice) {
  const { lib, doc, fit } = await docWithFonts();
  const PW = 595.28, PH = 841.89, m = 48, W = PW - 2 * m;
  const page = doc.addPage([PW, PH]);
  const ink = lib.rgb(0.07, 0.09, 0.12), mute = lib.rgb(0.4, 0.42, 0.47);
  const txt = (s: string, x: number, y: number, size: number, o: { bold?: boolean; max?: number; right?: boolean; color?: typeof ink } = {}) => {
    const v = fit(s, size, o.max ?? W, o.bold);
    const w = v.font.widthOfTextAtSize(v.text, size);
    page.drawText(v.text, { x: o.right ? x - w : x, y, size, font: v.font, color: o.color ?? ink });
  };
  let y = PH - m - 20;
  txt(inv.title || "Invoice", m, y, 22, { bold: true });
  txt(`${inv.labels.number}: ${inv.number}`, PW - m, y + 6, 10, { right: true, max: 220 });
  txt(`${inv.labels.date}: ${inv.date}`, PW - m, y - 8, 10, { right: true, max: 220 });
  if (inv.due) txt(`${inv.labels.due}: ${inv.due}`, PW - m, y - 22, 10, { right: true, max: 220 });
  y -= 56;
  const block = (label: string, body: string, x: number) => {
    txt(label, x, y, 9, { bold: true, color: mute });
    body.split("\n").slice(0, 6).forEach((l, i) => txt(l, x, y - 15 - i * 13, 10, { max: W / 2 - 12 }));
  };
  block(inv.labels.seller, inv.seller, m);
  block(inv.labels.buyer, inv.buyer, m + W / 2 + 12);
  y -= 15 + 6 * 13 + 16;
  const cx = [m, m + W * 0.55, m + W * 0.7, m + W];
  page.drawRectangle({ x: m, y: y - 6, width: W, height: 20, color: lib.rgb(0.92, 0.94, 0.97) });
  txt(inv.labels.item, cx[0] + 4, y, 9.5, { bold: true });
  txt(inv.labels.qty, cx[1] + W * 0.1, y, 9.5, { bold: true, right: true });
  txt(inv.labels.price, cx[2] + W * 0.13, y, 9.5, { bold: true, right: true });
  txt(inv.labels.sum, cx[3] - 4, y, 9.5, { bold: true, right: true });
  y -= 22;
  for (const it of inv.items.filter((i) => i.name.trim() || i.price)) {
    if (y < m + 140) break;
    txt(it.name, cx[0] + 4, y, 10, { max: W * 0.53 });
    txt(String(it.qty), cx[1] + W * 0.1, y, 10, { right: true });
    txt(money(it.price), cx[2] + W * 0.13, y, 10, { right: true });
    txt(money(it.qty * it.price), cx[3] - 4, y, 10, { right: true });
    page.drawLine({ start: { x: m, y: y - 7 }, end: { x: PW - m, y: y - 7 }, thickness: 0.5, color: lib.rgb(0.85, 0.86, 0.88) });
    y -= 20;
  }
  const t = invoiceTotals(inv);
  y -= 8;
  const cur = inv.currency ? ` ${inv.currency}` : "";
  txt(`${inv.labels.subtotal}: ${money(t.subtotal)}${cur}`, PW - m - 4, y, 10, { right: true });
  if (inv.taxPct) { y -= 15; txt(`${inv.labels.tax} (${inv.taxPct}%): ${money(t.tax)}${cur}`, PW - m - 4, y, 10, { right: true }); }
  y -= 20;
  txt(`${inv.labels.total}: ${money(t.total)}${cur}`, PW - m - 4, y, 13, { right: true, bold: true });
  if (inv.notes.trim()) {
    y -= 36;
    inv.notes.split("\n").slice(0, 8).forEach((l, i) => txt(l, m, y - i * 13, 9.5, { color: mute }));
  }
  return doc.save({ useObjectStreams: true });
}
