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
  return pages;
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
