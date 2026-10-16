import type { Lang } from "@/lib/i18n";
import { cleanExtractedText } from "./arabicText";

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

export type OcrPage = { text: string; confidence: number };

/** Grayscale, contrast stretch and deskew: makes scans and photos read noticeably better. */
export function preprocessForOcr(src: HTMLCanvasElement, deskew = true): HTMLCanvasElement {
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
  const octx = out.getContext("2d")!;
  octx.putImageData(img, 0, 0);
  if (!deskew) return out;
  const angle = estimateSkew(out);
  if (Math.abs(angle) < 0.3) return out;
  const rot = document.createElement("canvas");
  rot.width = w; rot.height = h;
  const rctx = rot.getContext("2d")!;
  rctx.fillStyle = "#fff";
  rctx.fillRect(0, 0, w, h);
  rctx.translate(w / 2, h / 2);
  rctx.rotate((-angle * Math.PI) / 180);
  rctx.drawImage(out, -w / 2, -h / 2);
  return rot;
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

/** Choose OCR languages from a quick pass over a sample page. */
export async function detectOcrLangs(sample: HTMLCanvasElement, fallback: OcrLang): Promise<OcrLang[]> {
  const small = document.createElement("canvas");
  const k = Math.min(1, 1400 / Math.max(sample.width, sample.height));
  small.width = Math.round(sample.width * k); small.height = Math.round(sample.height * k);
  small.getContext("2d")!.drawImage(sample, 0, 0, small.width, small.height);
  const [res] = await ocrDetailed([small], ["eng", "rus", "ara"]);
  const t = res?.text ?? "";
  const ar = (t.match(/[\u0600-\u06FF]/g) || []).length;
  const cy = (t.match(/[\u0400-\u04FF]/g) || []).length;
  const la = (t.match(/[A-Za-zƏəĞğİıÖöŞşÜüÇç]/g) || []).length;
  const all = ar + cy + la || 1;
  const latin: OcrLang[] = /[əƏ]/.test(t) ? ["aze", "eng"] : (t.match(/[ğĞıİşŞ]/g) || []).length >= 2 ? ["tur", "eng"] : ["eng"];
  const parts: [number, OcrLang[]][] = [[ar / all, ["ara"]], [cy / all, ["rus"]], [la / all, latin]];
  const picked = parts.filter(([share]) => share >= 0.12).sort((x, y) => y[0] - x[0]).flatMap(([, l]) => l);
  const uniq = [...new Set(picked)];
  if (!uniq.length) return fallback === "eng" ? ["eng"] : [fallback, "eng"];
  return uniq.length === 1 && uniq[0] === "ara" ? ["ara"] : uniq;
}

const dehyphenate = (t: string) => t.replace(/(\p{L}{2})[-\u00AD]\n(\p{Ll})/gu, "$1$2");

type Src = HTMLCanvasElement | Blob | string;
export type OcrSource = Src | (() => Promise<HTMLCanvasElement>);

function crop(c: HTMLCanvasElement, x: number, y: number, w: number, h: number): HTMLCanvasElement {
  const o = document.createElement("canvas");
  o.width = Math.max(1, Math.round(w)); o.height = Math.max(1, Math.round(h));
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
  const lim = Math.max(3, contentH * 0.04);
  let best: [number, number] | null = null;
  for (let x = Math.floor(w * 0.2); x < w * 0.8; ) {
    if (col[x] <= lim) {
      let e = x;
      while (e < w * 0.8 && col[e] <= lim) e++;
      if (e - x >= w * 0.012 && e - x <= w * 0.15 && (!best || e - x > best[1] - best[0])) best = [x, e];
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

export async function ocrDetailed(
  sources: OcrSource[],
  langs: OcrLang[],
  opts: { onProgress?: (done: number, total: number, fraction: number) => void; shouldCancel?: () => boolean; columns?: boolean } = {},
): Promise<OcrPage[]> {
  const { createWorker } = await import("tesseract.js");
  let current = 0;
  let sub = 0;
  let subN = 1;
  const worker = await createWorker(langs, 1, {
    workerPath: `${location.origin}${BASE}/worker.min.js`,
    corePath: `${location.origin}${BASE}/core.wasm.js`,
    langPath: `${location.origin}${BASE}/lang`,
    workerBlobURL: false,
    gzip: true,
    logger: (m: { status: string; progress: number }) => {
      if (m.status === "recognizing text") opts.onProgress?.(current, sources.length, (sub + m.progress) / subN);
    },
  } as never);
  const out: OcrPage[] = [];
  const rtl = langs[0] === "ara";
  try {
    for (let i = 0; i < sources.length; i++) {
      if (opts.shouldCancel?.()) break;
      current = i;
      opts.onProgress?.(i, sources.length, 0);
      const s = sources[i];
      const src: Src = typeof s === "function" ? await s() : s;
      const parts = opts.columns !== false && src instanceof HTMLCanvasElement ? splitColumns(src, rtl) : null;
      if (!parts) {
        sub = 0; subN = 1;
        const res = await worker.recognize(src as never);
        out.push({ text: dehyphenate(cleanExtractedText(res.data.text)), confidence: Math.round(res.data.confidence) });
      } else {
        subN = parts.length;
        let text = "";
        let cw = 0, ct = 0;
        for (let j = 0; j < parts.length; j++) {
          sub = j;
          const res = await worker.recognize(parts[j].img as never);
          const tx = res.data.text.trim();
          if (tx) { text += (text ? parts[j - 1]?.join ?? "\n" : "") + tx; const wt = tx.length; cw += res.data.confidence * wt; ct += wt; }
        }
        out.push({ text: dehyphenate(cleanExtractedText(text)), confidence: ct ? Math.round(cw / ct) : 0 });
      }
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
