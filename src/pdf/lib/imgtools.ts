/** Canvas based image tools for the AI chat (compress, resize, convert, crop, rotate, flip, grayscale, background removal). Runs in the browser only. */
export type ImgFmt = "png" | "jpeg" | "webp";
const MIME: Record<ImgFmt, string> = { png: "image/png", jpeg: "image/jpeg", webp: "image/webp" };
export const EXT: Record<ImgFmt, string> = { png: "png", jpeg: "jpg", webp: "webp" };

export async function decode(file: Blob): Promise<HTMLCanvasElement> {
  const bmp = await createImageBitmap(file);
  const c = document.createElement("canvas");
  c.width = bmp.width;
  c.height = bmp.height;
  c.getContext("2d")!.drawImage(bmp, 0, 0);
  bmp.close?.();
  return c;
}

function flatten(src: HTMLCanvasElement, fmt: ImgFmt): HTMLCanvasElement {
  if (fmt !== "jpeg") return src;
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  const x = c.getContext("2d")!;
  x.fillStyle = "#fff";
  x.fillRect(0, 0, c.width, c.height);
  x.drawImage(src, 0, 0);
  return c;
}

export function encode(src: HTMLCanvasElement, fmt: ImgFmt, quality = 0.92): Promise<Blob> {
  const c = flatten(src, fmt);
  return new Promise((ok, no) => c.toBlob((b) => (b ? ok(b) : no(new Error("encode"))), MIME[fmt], quality));
}

export function fmtOf(file: File): ImgFmt {
  const n = file.name.toLowerCase();
  if (file.type === "image/png" || n.endsWith(".png")) return "png";
  if (file.type === "image/webp" || n.endsWith(".webp")) return "webp";
  return "jpeg";
}

/** Compress: keep the format when it is lossy, else convert to WebP/JPEG; optional target size in KB. */
export async function compress(src: HTMLCanvasElement, fmt: ImgFmt, level: "light" | "strong", maxKb?: number): Promise<{ blob: Blob; fmt: ImgFmt }> {
  const out: ImgFmt = fmt === "png" ? "webp" : fmt;
  let q = level === "light" ? 0.85 : 0.68;
  let canvas = src;
  let blob = await encode(canvas, out, q);
  if (maxKb) {
    for (let i = 0; i < 8 && blob.size > maxKb * 1024; i++) {
      if (q > 0.35) q -= 0.1;
      else {
        const c = document.createElement("canvas");
        c.width = Math.max(32, Math.round(canvas.width * 0.85));
        c.height = Math.max(32, Math.round(canvas.height * 0.85));
        c.getContext("2d")!.drawImage(canvas, 0, 0, c.width, c.height);
        canvas = c;
      }
      blob = await encode(canvas, out, q);
    }
  }
  return { blob, fmt: out };
}

export function resize(src: HTMLCanvasElement, o: { w?: number; h?: number; pct?: number }): HTMLCanvasElement {
  let w = src.width, h = src.height;
  if (o.pct) { w = Math.round(w * o.pct / 100); h = Math.round(h * o.pct / 100); }
  else if (o.w && o.h) { w = o.w; h = o.h; }
  else if (o.w) { h = Math.round(h * o.w / w); w = o.w; }
  else if (o.h) { w = Math.round(w * o.h / h); h = o.h; }
  w = Math.min(8000, Math.max(1, w));
  h = Math.min(8000, Math.max(1, h));
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const x = c.getContext("2d")!;
  x.imageSmoothingQuality = "high";
  x.drawImage(src, 0, 0, w, h);
  return c;
}

export function cropAspect(src: HTMLCanvasElement, ratio: number): HTMLCanvasElement {
  let w = src.width, h = Math.round(src.width / ratio);
  if (h > src.height) { h = src.height; w = Math.round(src.height * ratio); }
  const sx = Math.round((src.width - w) / 2), sy = Math.round((src.height - h) / 2);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  c.getContext("2d")!.drawImage(src, sx, sy, w, h, 0, 0, w, h);
  return c;
}

export function rotate(src: HTMLCanvasElement, angle: number): HTMLCanvasElement {
  const a = ((angle % 360) + 360) % 360;
  const swap = a === 90 || a === 270;
  const c = document.createElement("canvas");
  c.width = swap ? src.height : src.width;
  c.height = swap ? src.width : src.height;
  const x = c.getContext("2d")!;
  x.translate(c.width / 2, c.height / 2);
  x.rotate((a * Math.PI) / 180);
  x.drawImage(src, -src.width / 2, -src.height / 2);
  return c;
}

export function flip(src: HTMLCanvasElement, vertical: boolean): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  const x = c.getContext("2d")!;
  if (vertical) { x.translate(0, c.height); x.scale(1, -1); } else { x.translate(c.width, 0); x.scale(-1, 1); }
  x.drawImage(src, 0, 0);
  return c;
}

export function gray(src: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  const x = c.getContext("2d")!;
  x.filter = "grayscale(1)";
  x.drawImage(src, 0, 0);
  return c;
}

/** Background removal with the same model family as the /erase page (loaded lazily from the site's allowed CDN). */
export async function removeBg(file: Blob, onProgress: (f: number) => void): Promise<Blob> {
  const { removeBackground } = await import("@imgly/background-removal");
  const run = (device: "gpu" | "cpu") =>
    removeBackground(file, {
      model: "isnet_quint8",
      device,
      rescale: true,
      output: { format: "image/png", quality: 1 },
      progress: (_k: string, cur: number, total: number) => { if (total > 0) onProgress(Math.min(0.97, cur / total)); },
    });
  return run("gpu").catch(() => run("cpu"));
}
