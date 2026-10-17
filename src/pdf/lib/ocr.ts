import type { Lang } from "@/lib/i18n";
import { cleanExtractedText } from "./arabicText";
import { fromGray, flatten, paperBox, lineBands, median3, medianBandHeight, otsu, sauvola, toGray, type Gray } from "./ocr-pre";

export type OcrLang = "eng" | "rus" | "ara" | "tur" | "aze";
export const OCR_LANGS: { id: OcrLang; label: string }[] = [
  { id: "eng", label: "English" },
  { id: "aze", label: "Azərbaycan" },
  { id: "tur", label: "Türkçe" },
  { id: "rus", label: "Русский" },
  { id: "ara", label: "العربية" },
];
export const ocrLangForSite = (lang: Lang): OcrLang => ({ az: "aze", en: "eng", tr: "tur", ar: "ara", ru: "rus" } as const)[lang];

const BASE = "/pdf-assets/ocr";

export type OcrPage = { text: string; confidence: number; mode?: string };

export type OcrConfig = {
  /** legacy: gray + contrast; flat: illumination flattening; sauvola: flattening + adaptive binarization */
  pre: "legacy" | "flat" | "sauvola";
  denoise: boolean;
  /** page: whole page (columns split) ; lines: every text line on its own (single-line mode) ; auto: try both, keep the better */
  mode: "page" | "lines" | "auto";
  /** target median text-line height in pixels after normalization */
  target: number;
  psm: number;
  /** use the larger "best" Arabic model (loaded on demand) */
  best: boolean;
};
export const DEFAULT_CONFIG: OcrConfig = { pre: "flat", denoise: true, mode: "auto", target: 64, psm: 3, best: false };

function rotateCanvas(c: HTMLCanvasElement, deg: number): HTMLCanvasElement {
  const rot = document.createElement("canvas");
  rot.width = c.width; rot.height = c.height;
  const r = rot.getContext("2d")!;
  r.fillStyle = "#fff";
  r.fillRect(0, 0, c.width, c.height);
  r.translate(c.width / 2, c.height / 2);
  r.rotate((-deg * Math.PI) / 180);
  r.drawImage(c, -c.width / 2, -c.height / 2);
  return rot;
}

/** Prepare a page/photo for OCR: flatten light, denoise, deskew, normalize text size, optional adaptive binarization. */
export function preprocessForOcr(src: HTMLCanvasElement, deskew = true, cfg: Partial<OcrConfig> = {}): HTMLCanvasElement {
  const o = { ...DEFAULT_CONFIG, ...cfg };
  if (o.pre === "legacy") return legacyPreprocess(src, deskew);
  let g = toGray(src);
  const box = paperBox(g);
  if (box) {
    src = crop(src, box.x, box.y, box.w, box.h);
    g = toGray(src);
  }
  let c = src;
  if (deskew) {
    const ang = estimateSkew(c);
    if (Math.abs(ang) >= 0.3) { c = rotateCanvas(c, ang); g = toGray(c); }
  }
  // normalize the size of the text: Tesseract is most accurate when a text line is ~60-80px tall
  const bands = lineBands(flatten(g), otsu(flatten(g)));
  const H = medianBandHeight(bands);
  let k = H > 6 ? o.target / H : 1;
  k = Math.max(0.5, Math.min(4, k));
  k = Math.min(k, Math.sqrt(22_000_000 / (g.w * g.h)), 4600 / Math.max(g.w, g.h));
  if (Math.abs(k - 1) > 0.06) {
    const s = document.createElement("canvas");
    s.width = Math.max(1, Math.round(g.w * k)); s.height = Math.max(1, Math.round(g.h * k));
    const sc = s.getContext("2d")!;
    sc.imageSmoothingQuality = "high";
    sc.drawImage(c, 0, 0, s.width, s.height);
    c = s;
    g = toGray(c);
  }
  g = flatten(g);
  if (o.denoise && g.w * g.h < 12_000_000) g = median3(g);
  c = fromGray(g);
  if (o.pre === "sauvola") {
    const hh = Math.max(20, Math.round(H * k));
    const win = Math.round(hh * 0.9) | 1;
    return fromGray(sauvola(g, win, 0.2));
  }
  return c;
}

function legacyPreprocess(src: HTMLCanvasElement, deskew = true): HTMLCanvasElement {
  const w = src.width;
  const h = src.height;
  const ctx = src.getContext("2d", { willReadFrequently: true })!;
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const hist = new Uint32Array(256);
  for (let i = 0; i < d.length; i += 4) {
    const g = (d[i] * 299 + d[i + 1] * 587 + d[i + 2] * 114) / 1000;
    d[i] = d[i + 1] = d[i + 2] = g;
    hist[g | 0]++;
  }
  const total = w * h;
  let lo = 0, hi = 255, acc = 0;
  for (let i = 0; i < 256; i++) { acc += hist[i]; if (acc > total * 0.01) { lo = i; break; } }
  acc = 0;
  for (let i = 255; i >= 0; i--) { acc += hist[i]; if (acc > total * 0.01) { hi = i; break; } }
  if (hi - lo > 20) {
    const k = 255 / (hi - lo);
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.max(0, Math.min(255, (d[i] - lo) * k));
      d[i] = d[i + 1] = d[i + 2] = v;
    }
  }
  const out = document.createElement("canvas");
  out.width = w; out.height = h;
  out.getContext("2d")!.putImageData(img, 0, 0);
  if (!deskew) return out;
  const angle = estimateSkew(out);
  return Math.abs(angle) < 0.3 ? out : rotateCanvas(out, angle);
}

/** Skew angle in degrees (positive = text runs clockwise down), via projection-profile variance. */
export function estimateSkew(c: HTMLCanvasElement): number {
  const scale = Math.min(1, 700 / c.width);
  const w = Math.max(1, Math.round(c.width * scale));
  const h = Math.max(1, Math.round(c.height * scale));
  const t = document.createElement("canvas");
  t.width = w; t.height = h;
  t.getContext("2d")!.drawImage(c, 0, 0, w, h);
  const d = t.getContext("2d", { willReadFrequently: true })!.getImageData(0, 0, w, h).data;
  let sum = 0;
  for (let i = 0; i < d.length; i += 4) sum += d[i];
  const thr = (sum / (d.length / 4)) * 0.8;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4] < thr) { xs.push(x - w / 2); ys.push(y - h / 2); }
  if (xs.length < 200) return 0;
  const score = (deg: number) => {
    const r = (deg * Math.PI) / 180;
    const sin = Math.sin(r), cos = Math.cos(r);
    const bins = new Float64Array(h * 2 + 4);
    for (let i = 0; i < xs.length; i++) bins[Math.round(ys[i] * cos - xs[i] * sin + h)]++;
    let v = 0;
    for (let i = 1; i < bins.length; i++) v += (bins[i] - bins[i - 1]) ** 2;
    return v;
  };
  let best = 0, bs = -1;
  for (let a = -6; a <= 6; a += 0.5) { const sc = score(a); if (sc > bs) { bs = sc; best = a; } }
  for (let a = best - 0.5; a <= best + 0.5; a += 0.1) { const sc = score(a); if (sc > bs) { bs = sc; best = a; } }
  return best;
}

type TessWorker = {
  recognize: (img: never) => Promise<{ data: { text: string; confidence: number } }>;
  setParameters: (p: Record<string, string>) => Promise<unknown>;
  reinitialize: (langs: string | string[], oem?: number) => Promise<unknown>;
  terminate: () => Promise<unknown>;
};

const langDir = (langs: OcrLang[], best: boolean) => `${BASE}/${best && langs.includes("ara") ? "best" : "lang"}`;

async function makeWorker(langs: OcrLang[], best: boolean, logger?: (m: { status: string; progress: number }) => void): Promise<TessWorker> {
  const { createWorker } = await import("tesseract.js");
  return (await createWorker(langs, 1, {
    workerPath: `${location.origin}${BASE}/worker.min.js`,
    corePath: `${location.origin}${BASE}/core.wasm.js`,
    langPath: `${location.origin}${langDir(langs, best)}`,
    workerBlobURL: false,
    gzip: true,
    ...(logger ? { logger } : {}),
  } as never)) as unknown as TessWorker;
}

/** True when a page has (almost) no dark pixels at all, e.g. an empty scan. */
function isBlank(c: HTMLCanvasElement): boolean {
  const g = toGray(c);
  let dark = 0;
  for (let i = 0; i < g.d.length; i += 3) if (g.d[i] < 120) dark++;
  return dark < g.d.length * 0.0004;
}

/** Choose OCR languages: read a sample with each script family and keep the one the engine is most sure about. */
export async function detectOcrLangs(sample: HTMLCanvasElement, fallback: OcrLang): Promise<OcrLang[]> {
  if (isBlank(sample)) return fallback === "eng" ? ["eng"] : [fallback, "eng"];
  const top = Math.min(sample.height, Math.max(220, Math.round(sample.height * 0.7)));
  const part = crop(sample, 0, 0, sample.width, top);
  const cands: OcrLang[][] = [["ara"], ["aze", "tur", "eng"], ["rus", "eng"]];
  const worker = await makeWorker(cands[0], false);
  let best: { langs: OcrLang[]; conf: number; text: string } | null = null;
  let ara = { letters: 0, conf: 0, share: 0 };
  let lat = 0;
  let latConf = 0;
  try {
    for (let i = 0; i < cands.length; i++) {
      const c = cands[i];
      if (i > 0) await worker.reinitialize(c.join("+"));
      await worker.setParameters({ tessedit_pageseg_mode: "3", user_defined_dpi: "300" });
      let r = await worker.recognize(part as never);
      if ((r.data.text.match(/\p{L}/gu) || []).length < 8) {
        await worker.setParameters({ tessedit_pageseg_mode: "6" });
        r = await worker.recognize(part as never);
      }
      const letters = (r.data.text.match(/\p{L}/gu) || []).length;
      const flat = r.data.text.replace(/\s+/g, "");
      const clean = flat.length ? (flat.match(/[\p{L}\p{N}.,;:!?'"()-]/gu) || []).length / flat.length : 0;
      const arShare = (r.data.text.match(/[\u0621-\u064A]/g) || []).length / Math.max(1, letters);
      const conf = letters < 8 || (i > 0 && clean < 0.88) || (i === 0 && arShare < 0.5) ? 0 : r.data.confidence;
      if (i === 0) ara = { letters: (r.data.text.match(/[\u0621-\u064A]/g) || []).length, conf: r.data.confidence, share: arShare };
      if (i === 1) { lat = letters; latConf = r.data.confidence; }
      if (!best || conf > best.conf) best = { langs: c, conf, text: r.data.text };
      if (i <= 1 && conf >= (i === 0 ? 78 : 80)) break;
    }
  } finally {
    await worker.terminate();
  }
  // a page the Arabic model can read letter by letter is Arabic, even when another model is "confident" about junk
  if (best && best.langs[0] !== "ara" && ara.letters >= 12 && ((ara.conf >= 35 && ara.share >= 0.6 && ara.letters >= 25 && ara.conf >= latConf - 10) || (ara.share >= 0.8 && ara.letters >= 30 && best.conf < 70))) return ["ara"];
  if (!best || best.conf === 0) return fallback === "eng" ? ["eng"] : [fallback, "eng"];
  if (best.langs[0] !== "aze") return best.langs[0] === "ara" ? ["ara"] : best.langs;
  const t = best.text;
  if (/[əƏ]/.test(t)) return ["aze", "eng"];
  if ((t.match(/[ğĞıİşŞ]/g) || []).length >= 1) return ["tur", "eng"];
  return ["eng"];
}

const dehyphenate = (t: string) => t.replace(/(\p{L}{2})[-\u00AD]\n(\p{Ll})/gu, "$1$2");

type Src = HTMLCanvasElement | Blob | string;
export type OcrSource = Src | (() => Promise<HTMLCanvasElement>);

function crop(c: HTMLCanvasElement, x: number, y: number, w: number, h: number, scale = 1): HTMLCanvasElement {
  const o = document.createElement("canvas");
  o.width = Math.max(1, Math.round(w * scale)); o.height = Math.max(1, Math.round(h * scale));
  const cx = o.getContext("2d")!;
  cx.fillStyle = "#fff"; cx.fillRect(0, 0, o.width, o.height);
  cx.drawImage(c, x, y, w, h, 0, 0, o.width, o.height);
  return o;
}

/** Split a multi-column page image into reading-order blocks (full-width bands stay whole). Returns null for single-column pages. */
export function splitColumns(c: HTMLCanvasElement, rtl: boolean): { img: HTMLCanvasElement; join: "\n" | "\n\n" }[] | null {
  const W = 900;
  const k = Math.min(1, W / c.width);
  const w = Math.round(c.width * k), h = Math.round(c.height * k);
  const t = document.createElement("canvas");
  t.width = w; t.height = h;
  t.getContext("2d")!.drawImage(c, 0, 0, w, h);
  const d = t.getContext("2d", { willReadFrequently: true })!.getImageData(0, 0, w, h).data;
  const ink = (x: number, y: number) => d[(y * w + x) * 4] < 140;
  const col = new Uint32Array(w);
  const row = new Uint32Array(h);
  let total = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (ink(x, y)) { col[x]++; row[y]++; total++; }
  if (total < 500) return null;
  // gutter: widest low-ink run near the middle
  let top = 0, bottom = h - 1;
  while (top < h && row[top] <= 3) top++;
  while (bottom > top && row[bottom] <= 3) bottom--;
  const contentH = bottom - top + 1;
  if (contentH < h * 0.08) return null;
  // a column layout needs enough lines: a short paragraph's aligned word gaps are not a gutter
  let nLines = 0;
  for (let y = top; y <= bottom; ) {
    if (row[y] > 3) { nLines++; let e = y; while (e <= bottom && row[e] > 3) e++; y = e; } else y++;
  }
  if (nLines < 8) return null;
  const lim = Math.max(3, contentH * 0.04);
  let best: [number, number] | null = null;
  for (let x = Math.floor(w * 0.2); x < w * 0.8; ) {
    if (col[x] <= lim) {
      let e = x;
      while (e < w * 0.8 && col[e] <= lim) e++;
      if (e - x >= w * 0.02 && e - x <= w * 0.15 && (!best || e - x > best[1] - best[0])) best = [x, e];
      x = e;
    } else x++;
  }
  if (!best) return null;
  const [g0, g1] = best;
  let left = 0, right = 0;
  for (let x = 0; x < g0; x++) left += col[x];
  for (let x = g1; x < w; x++) right += col[x];
  if (left < total * 0.15 || right < total * 0.15) return null;
  // rows whose ink crosses the gutter belong to full-width bands (titles, banners)
  const gw = g1 - g0;
  const cross = new Uint8Array(h);
  for (let y = 0; y < h; y++) {
    let n = 0;
    for (let x = g0; x < g1; x++) if (ink(x, y)) n++;
    cross[y] = n >= Math.max(2, gw * 0.1) ? 1 : 0;
  }
  const ivs: [number, number][] = [];
  for (let y = 0; y < h; ) {
    if (cross[y]) {
      let e = y, gap = 0;
      while (e < h && gap < 10) { if (cross[e]) gap = 0; else gap++; e++; }
      const end = e - gap;
      if (end - y >= 5) ivs.push([y, end]);
      y = e;
    } else y++;
  }
  let colRows = contentH;
  for (const [a0, a1] of ivs) colRows -= a1 - a0;
  if (colRows < contentH * 0.3) return null;
  const bands: { y0: number; y1: number; full: boolean }[] = [];
  let cursor = 0;
  for (const [a0, a1] of ivs) {
    if (a0 > cursor) bands.push({ y0: cursor, y1: a0, full: false });
    bands.push({ y0: a0, y1: a1, full: true });
    cursor = a1;
  }
  if (cursor < h) bands.push({ y0: cursor, y1: h, full: false });
  const inkRows = (b: { y0: number; y1: number }) => { let n = 0; for (let y = b.y0; y < b.y1; y++) n += row[y]; return n; };
  const live = bands.filter((b) => b.full || inkRows(b) > 40);
  bands.length = 0;
  bands.push(...live);
  if (!bands.some((b) => !b.full)) return null;
  const out: { img: HTMLCanvasElement; join: "\n" | "\n\n" }[] = [];
  const pad = 6;
  bands.forEach((b, i) => {
    const top = i === 0 ? b.y0 : (bands[i - 1].y1 + b.y0) / 2;
    const bot = i === bands.length - 1 ? b.y1 : (b.y1 + bands[i + 1].y0) / 2;
    const Y = top / k, H = (bot - top) / k;
    if (b.full) out.push({ img: crop(c, 0, Y, c.width, H), join: "\n\n" });
    else {
      const mid = (g0 + g1) / 2 / k;
      const L = crop(c, 0, Y, mid + pad, H);
      const R = crop(c, mid - pad, Y, c.width - mid + pad, H);
      if (rtl) out.push({ img: R, join: "\n" }, { img: L, join: "\n\n" });
      else out.push({ img: L, join: "\n" }, { img: R, join: "\n\n" });
    }
  });
  return out;
}

/** Every text line on its own (single-line mode): keeps large titles, and stops stray layout guesses from dropping or merging lines. */
function binarize(c: HTMLCanvasElement): HTMLCanvasElement {
  const g = toGray(c);
  const H = medianBandHeight(lineBands(g, otsu(g))) || 40;
  return fromGray(sauvola(g, Math.round(H * 0.9) | 1, 0.2));
}

async function recognizeLines(worker: TessWorker, img: HTMLCanvasElement, tick: (f: number) => void): Promise<{ text: string; conf: number; weight: number }> {
  const g = toGray(img);
  const bands = lineBands(g, otsu(g));
  if (!bands.length) return { text: "", conf: 0, weight: 0 };
  const H = medianBandHeight(bands);
  const pad = Math.round(H * 0.35);
  await worker.setParameters({ tessedit_pageseg_mode: "7" });
  const lines: string[] = [];
  let cw = 0, ct = 0, prevEnd = -1;
  for (let i = 0; i < bands.length; i++) {
    const b = bands[i];
    const c = crop(img, 0, b.y0 - pad, img.width, b.y1 - b.y0 + pad * 2);
    let r = await worker.recognize(c as never);
    tick((i + 1) / bands.length);
    let tx = r.data.text.replace(/\s+/g, " ").trim();
    if (!tx || r.data.confidence < 45) {
      // bold headings / odd sizes: re-read at other scales and in raw-line mode, keep the most confident non-empty reading
      for (const [sc, psm] of [[0.7, "7"], [1.4, "7"], [1, "13"], [0.5, "7"]] as const) {
        await worker.setParameters({ tessedit_pageseg_mode: psm });
        const v = sc === 1 ? c : crop(c, 0, 0, c.width, c.height, sc);
        const r2 = await worker.recognize(v as never);
        const t2 = r2.data.text.replace(/\s+/g, " ").trim();
        if (t2 && (!tx || r2.data.confidence > r.data.confidence)) { r = r2; tx = t2; }
        if (tx && r.data.confidence >= 60) break;
      }
      await worker.setParameters({ tessedit_pageseg_mode: "7" });
    }
    if (!tx) continue;
    if (prevEnd >= 0 && b.y0 - prevEnd > H * 1.1) lines.push("");
    lines.push(tx);
    prevEnd = b.y1;
    cw += r.data.confidence * tx.length; ct += tx.length;
  }
  return { text: lines.join("\n"), conf: ct ? cw / ct : 0, weight: ct };
}

async function recognizeBlocks(worker: TessWorker, img: HTMLCanvasElement, rtl: boolean, cfg: OcrConfig, tick: (f: number) => void): Promise<{ text: string; conf: number; weight: number }> {
  const parts = splitColumns(img, rtl) ?? [{ img, join: "\n\n" as const }];
  let text = "";
  let cw = 0, ct = 0;
  for (let j = 0; j < parts.length; j++) {
    let tx: string, conf: number;
    if (cfg.mode === "lines") {
      const r = await recognizeLines(worker, parts[j].img, (f) => tick((j + f) / parts.length));
      tx = r.text; conf = r.conf;
    } else {
      await worker.setParameters({ tessedit_pageseg_mode: String(cfg.psm) });
      const r = await worker.recognize(parts[j].img as never);
      tick((j + 1) / parts.length);
      tx = r.data.text.trim(); conf = r.data.confidence;
    }
    tx = tx.trim();
    if (tx) { text += (text ? parts[j - 1]?.join ?? "\n" : "") + tx; cw += conf * tx.length; ct += tx.length; }
  }
  return { text, conf: ct ? cw / ct : 0, weight: ct };
}

export async function ocrDetailed(
  sources: OcrSource[],
  langs: OcrLang[],
  opts: { onProgress?: (done: number, total: number, fraction: number) => void; shouldCancel?: () => boolean; columns?: boolean; config?: Partial<OcrConfig> } = {},
): Promise<OcrPage[]> {
  const cfg: OcrConfig = { ...DEFAULT_CONFIG, ...opts.config };
  let current = 0;
  let frac = 0;
  const worker = await makeWorker(langs, cfg.best);
  await worker.setParameters({ preserve_interword_spaces: "1", user_defined_dpi: "300" });
  const out: OcrPage[] = [];
  const rtl = langs[0] === "ara";
  try {
    for (let i = 0; i < sources.length; i++) {
      if (opts.shouldCancel?.()) break;
      current = i;
      opts.onProgress?.(i, sources.length, 0);
      const s = sources[i];
      const src: Src = typeof s === "function" ? await s() : s;
      const tick = (f: number) => { frac = f; opts.onProgress?.(current, sources.length, frac); };
      type R = { text: string; conf: number; weight: number };
      const score = (r: R) => (r.weight * Math.max(0, r.conf - 40)) / 60;
      let r: R;
      let mode: string = cfg.mode;
      if (src instanceof HTMLCanvasElement && isBlank(src)) {
        r = { text: "", conf: 0, weight: 0 };
      } else if (!(src instanceof HTMLCanvasElement)) {
        await worker.setParameters({ tessedit_pageseg_mode: String(cfg.psm) });
        const x = await worker.recognize(src as never);
        r = { text: x.data.text, conf: x.data.confidence, weight: x.data.text.length };
      } else if (cfg.mode === "auto") {
        // several settings, keep the one with the most confidently read text
        const tries: { r: R; mode: string; img: HTMLCanvasElement }[] = [];
        const run = async (img: HTMLCanvasElement, m: "page" | "lines", f0: number, f1: number) => {
          const rr = await recognizeBlocks(worker, img, rtl, { ...cfg, mode: m }, (f) => tick(f0 + f * (f1 - f0)));
          tries.push({ r: rr, mode: m + (img === src ? "" : "+bin"), img });
        };
        await run(src, "page", 0, 0.3);
        await run(src, "lines", 0.3, 0.6);
        let top = tries.reduce((a, b) => (score(b.r) > score(a.r) ? b : a));
        if (top.r.conf < 72) {
          const bin = binarize(src);
          await run(bin, "page", 0.6, 0.8);
          await run(bin, "lines", 0.8, 0.95);
          top = tries.reduce((a, b) => (score(b.r) > score(a.r) ? b : a));
        }
        // Arabic with Latin words / digits (e-mail, URLs, brands): re-read with the English model added
        if (rtl && !langs.includes("eng") && /[A-Za-z@]{2,}|\d[\d\s.,:/-]{3,}|[©»«*#<>{}\[\]]\S*[A-Za-z0-9]/.test(top.r.text)) {
          await worker.reinitialize(`${langs.join("+")}+eng`);
          await worker.setParameters({ preserve_interword_spaces: "1", user_defined_dpi: "300" });
          const m2 = top.mode.startsWith("lines") ? "lines" : "page";
          const rr = await recognizeBlocks(worker, top.img, rtl, { ...cfg, mode: m2 }, () => {});
          await worker.reinitialize(langs.join("+"));
          await worker.setParameters({ preserve_interword_spaces: "1", user_defined_dpi: "300" });
          if (score(rr) > score(top.r) * 1.02) top = { r: rr, mode: top.mode + "+eng", img: top.img };
        }
        r = top.r;
        mode = top.mode;
      } else {
        r = await recognizeBlocks(worker, src, rtl, cfg, tick);
      }
      out.push({ text: dehyphenate(cleanExtractedText(r.text)), confidence: Math.round(r.conf), mode });
    }
  } finally {
    await worker.terminate();
  }
  return out;
}

export async function ocrImages(
  sources: OcrSource[],
  langs: OcrLang[],
  opts: { onProgress?: (done: number, total: number, fraction: number) => void; shouldCancel?: () => boolean } = {},
): Promise<string[]> {
  return (await ocrDetailed(sources, langs, opts)).map((p) => p.text);
}
