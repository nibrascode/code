/** Image preparation for OCR: illumination flattening, noise removal, adaptive binarization, size normalization, line segmentation. */

export type Gray = { w: number; h: number; d: Uint8ClampedArray };

export function toGray(c: HTMLCanvasElement): Gray {
  const w = c.width, h = c.height;
  const px = c.getContext("2d", { willReadFrequently: true })!.getImageData(0, 0, w, h).data;
  const d = new Uint8ClampedArray(w * h);
  for (let i = 0, j = 0; i < d.length; i++, j += 4) d[i] = (px[j] * 299 + px[j + 1] * 587 + px[j + 2] * 114) / 1000;
  return { w, h, d };
}

export function fromGray(g: Gray): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = g.w; c.height = g.h;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(g.w, g.h);
  for (let i = 0, j = 0; i < g.d.length; i++, j += 4) { img.data[j] = img.data[j + 1] = img.data[j + 2] = g.d[i]; img.data[j + 3] = 255; }
  ctx.putImageData(img, 0, 0);
  return c;
}

/** Box blur through an integral image. */
export function boxBlur(g: Gray, r: number): Float32Array {
  const { w, h, d } = g;
  const W = w + 1;
  const I = new Float64Array(W * (h + 1));
  for (let y = 0; y < h; y++) {
    let row = 0;
    for (let x = 0; x < w; x++) { row += d[y * w + x]; I[(y + 1) * W + x + 1] = I[y * W + x + 1] + row; }
  }
  const out = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      out[y * w + x] = (I[y1 * W + x1] - I[y0 * W + x1] - I[y1 * W + x0] + I[y0 * W + x0]) / ((x1 - x0) * (y1 - y0));
    }
  }
  return out;
}

/** Divide by the local background: removes shadows, gradients and tinted paper; then stretches contrast. */
export function flatten(g: Gray): Gray {
  const r = Math.max(12, Math.round(Math.min(g.w, g.h) / 18));
  // background estimate: blur of an image where dark (text) pixels are lifted to the local mean
  const m = boxBlur(g, r);
  const lifted: Gray = { w: g.w, h: g.h, d: new Uint8ClampedArray(g.d.length) };
  for (let i = 0; i < g.d.length; i++) lifted.d[i] = g.d[i] < m[i] * 0.85 ? m[i] : g.d[i];
  const bg = boxBlur(lifted, r);
  const out: Gray = { w: g.w, h: g.h, d: new Uint8ClampedArray(g.d.length) };
  const hist = new Uint32Array(256);
  for (let i = 0; i < g.d.length; i++) { const v = Math.min(255, (g.d[i] / Math.max(1, bg[i])) * 245); out.d[i] = v; hist[v | 0]++; }
  const total = g.d.length;
  let lo = 0, hi = 255, acc = 0;
  for (let i = 0; i < 256; i++) { acc += hist[i]; if (acc > total * 0.005) { lo = i; break; } }
  acc = 0;
  for (let i = 255; i >= 0; i--) { acc += hist[i]; if (acc > total * 0.2) { hi = i; break; } }
  if (hi - lo > 30) { const k = 255 / (hi - lo); for (let i = 0; i < out.d.length; i++) out.d[i] = Math.max(0, Math.min(255, (out.d[i] - lo) * k)); }
  return out;
}

/** 3×3 median: kills salt-and-pepper and sensor noise while keeping stroke edges. */
export function median3(g: Gray): Gray {
  const { w, h, d } = g;
  const o = new Uint8ClampedArray(d.length);
  const v = new Array<number>(9);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let n = 0;
    for (let dy = -1; dy <= 1; dy++) { const yy = Math.min(h - 1, Math.max(0, y + dy)); for (let dx = -1; dx <= 1; dx++) v[n++] = d[yy * w + Math.min(w - 1, Math.max(0, x + dx))]; }
    for (let i = 1; i < 9; i++) { const t = v[i]; let j = i - 1; while (j >= 0 && v[j] > t) { v[j + 1] = v[j]; j--; } v[j + 1] = t; }
    o[y * w + x] = v[4];
  }
  return { w, h, d: o };
}

export function otsu(g: Gray): number {
  const hist = new Uint32Array(256);
  for (let i = 0; i < g.d.length; i++) hist[g.d[i]]++;
  const total = g.d.length;
  let sum = 0;
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  let wB = 0, sB = 0, best = 0, thr = 128;
  for (let t = 0; t < 256; t++) {
    wB += hist[t];
    if (!wB) continue;
    const wF = total - wB;
    if (!wF) break;
    sB += t * hist[t];
    const mB = sB / wB, mF = (sum - sB) / wF;
    const v = wB * wF * (mB - mF) ** 2;
    if (v >= best && v > 0) { best = v; thr = t; }
  }
  return thr;
}

/** Sauvola adaptive threshold (handles uneven light better than a global threshold). */
export function sauvola(g: Gray, win: number, k = 0.2): Gray {
  const { w, h, d } = g;
  const r = Math.max(3, win >> 1);
  const W = w + 1;
  const S = new Float64Array(W * (h + 1)), Q = new Float64Array(W * (h + 1));
  for (let y = 0; y < h; y++) {
    let rs = 0, rq = 0;
    for (let x = 0; x < w; x++) { const v = d[y * w + x]; rs += v; rq += v * v; S[(y + 1) * W + x + 1] = S[y * W + x + 1] + rs; Q[(y + 1) * W + x + 1] = Q[y * W + x + 1] + rq; }
  }
  const o = new Uint8ClampedArray(d.length);
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      const n = (x1 - x0) * (y1 - y0);
      const s = S[y1 * W + x1] - S[y0 * W + x1] - S[y1 * W + x0] + S[y0 * W + x0];
      const q = Q[y1 * W + x1] - Q[y0 * W + x1] - Q[y1 * W + x0] + Q[y0 * W + x0];
      const mean = s / n, sd = Math.sqrt(Math.max(0, q / n - mean * mean));
      o[y * w + x] = d[y * w + x] > mean * (1 + k * (sd / 128 - 1)) ? 255 : 0;
    }
  }
  return { w, h, d: o };
}

export type Band = { y0: number; y1: number };

/** Text-line bands from the horizontal ink profile (diacritic dots stay attached to their line). */
export function lineBands(g: Gray, thr: number): Band[] {
  const { w, h, d } = g;
  const row = new Uint32Array(h);
  for (let y = 0; y < h; y++) { let n = 0; for (let x = 0; x < w; x++) if (d[y * w + x] < thr) n++; row[y] = n; }
  const min = Math.max(2, w * 0.002);
  let raw: Band[] = [];
  for (let y = 0; y < h; ) {
    if (row[y] > min) { let e = y; while (e < h && row[e] > min) e++; raw.push({ y0: y, y1: e }); y = e; } else y++;
  }
  if (!raw.length) return [];
  const heights = raw.map((b) => b.y1 - b.y0).sort((a, b) => a - b);
  const med = heights[heights.length >> 1];
  // merge bands separated by a tiny gap (dots, harakat) or too thin to be a line on their own
  const merged: Band[] = [];
  for (const b of raw) {
    const last = merged[merged.length - 1];
    const hb = b.y1 - b.y0;
    if (last && (b.y0 - last.y1 < med * 0.18 || (hb < med * 0.35 && b.y0 - last.y1 < med * 0.6) || (last.y1 - last.y0 < med * 0.35 && b.y0 - last.y1 < med * 0.6))) last.y1 = b.y1;
    else merged.push({ ...b });
  }
  return merged.filter((b) => b.y1 - b.y0 >= med * 0.3);
}

export function medianBandHeight(bands: Band[]): number {
  if (!bands.length) return 0;
  const hs = bands.map((b) => b.y1 - b.y0).sort((a, b) => a - b);
  return hs[hs.length >> 1];
}

/** Photo of a sheet on a darker surface: find the paper rectangle (null when the image already is a plain page). */
export function paperBox(g: Gray): { x: number; y: number; w: number; h: number } | null {
  const { w, h, d } = g;
  const thr = otsu(g);
  // border darker than the threshold -> there is a surface around the paper
  let bs = 0, bn = 0;
  const edge = (x: number, y: number) => { bs += d[y * w + x]; bn++; };
  for (let x = 0; x < w; x += 4) { edge(x, 0); edge(x, h - 1); }
  for (let y = 0; y < h; y += 4) { edge(0, y); edge(w - 1, y); }
  if (bs / bn > thr * 0.8) return null;
  const rows = new Float32Array(h), cols = new Float32Array(w);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[y * w + x] > thr) { rows[y]++; cols[x]++; }
  const find = (a: Float32Array, n: number, full: number) => {
    let s = 0, e = n - 1;
    while (s < n && a[s] < full * 0.45) s++;
    while (e > s && a[e] < full * 0.45) e--;
    return [s, e] as const;
  };
  const [y0, y1] = find(rows, h, w);
  const [x0, x1] = find(cols, w, h);
  const bw = x1 - x0, bh = y1 - y0;
  if (bw < w * 0.25 || bh < h * 0.1 || (bw > w * 0.96 && bh > h * 0.96)) return null;
  const m = Math.round(Math.min(bw, bh) * 0.02);
  return { x: x0 + m, y: y0 + m, w: bw - 2 * m, h: bh - 2 * m };
}
