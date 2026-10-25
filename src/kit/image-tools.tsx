import { useEffect, useMemo, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { IMAGE_FAMILY, KitShell, kb, save, ui } from "./shell";

export const IMAGE_TOOLS = ["resize", "convert", "edit"] as const;
export type ImageTool = (typeof IMAGE_TOOLS)[number];
export const isImageTool = (v: string): v is ImageTool => (IMAGE_TOOLS as readonly string[]).includes(v);

type Fmt = "image/png" | "image/jpeg" | "image/webp";
const EXT: Record<Fmt, string> = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp" };
const T: Record<Lang, Record<string, string>> = {
  az: { pick: "Şəkil seçin", picks: "Şəkilləri seçin", drop: "və ya bura buraxın", width: "En (px)", height: "Hündürlük (px)", keep: "Nisbəti qoru", percent: "Faiz", format: "Format", quality: "Keyfiyyət", download: "Yüklə", all: "Hamısını yüklə (ZIP)", orig: "Əvvəl", res: "Sonra", bad: "Bu şəkil açılmadı. HEIC-dirsə, telefonda JPG kimi paylaşın.", ratio: "Nisbət", free: "Sərbəst", rotL: "Sola 90°", rotR: "Sağa 90°", flipH: "Üfüqi çevir", flipV: "Şaquli çevir", reset: "Sıfırla", cropHint: "Kəsmək üçün şəklin üstündə çərçivə dartın.", same: "Format", keepFmt: "Eyni format", jpgNote: "JPG şəffaflığı saxlamır: fon ağ olur." },
  en: { pick: "Choose a photo", picks: "Choose photos", drop: "or drop here", width: "Width (px)", height: "Height (px)", keep: "Keep ratio", percent: "Percent", format: "Format", quality: "Quality", download: "Download", all: "Download all (ZIP)", orig: "Before", res: "After", bad: "This photo could not be opened. If it is HEIC, share it as JPG from the phone.", ratio: "Ratio", free: "Free", rotL: "Left 90°", rotR: "Right 90°", flipH: "Flip horizontal", flipV: "Flip vertical", reset: "Reset", cropHint: "Drag a frame on the photo to crop.", same: "Format", keepFmt: "Same format", jpgNote: "JPG has no transparency: the background becomes white." },
  tr: { pick: "Fotoğraf seçin", picks: "Fotoğrafları seçin", drop: "veya buraya bırakın", width: "Genişlik (px)", height: "Yükseklik (px)", keep: "Oranı koru", percent: "Yüzde", format: "Biçim", quality: "Kalite", download: "İndir", all: "Hepsini indir (ZIP)", orig: "Önce", res: "Sonra", bad: "Fotoğraf açılamadı. HEIC ise telefondan JPG olarak paylaşın.", ratio: "Oran", free: "Serbest", rotL: "Sola 90°", rotR: "Sağa 90°", flipH: "Yatay çevir", flipV: "Dikey çevir", reset: "Sıfırla", cropHint: "Kırpmak için fotoğrafta çerçeve sürükleyin.", same: "Biçim", keepFmt: "Aynı biçim", jpgNote: "JPG şeffaflık tutmaz: arka plan beyaz olur." },
  ar: { pick: "اختر صورة", picks: "اختر الصور", drop: "أو أفلتها هنا", width: "العرض (px)", height: "الارتفاع (px)", keep: "حفظ التناسب", percent: "النسبة", format: "الصيغة", quality: "الجودة", download: "تنزيل", all: "تنزيل الكل (ZIP)", orig: "قبل", res: "بعد", bad: "تعذر فتح الصورة. إن كانت HEIC فشاركها من الهاتف بصيغة JPG.", ratio: "النسبة", free: "حر", rotL: "يسار 90°", rotR: "يمين 90°", flipH: "قلب أفقي", flipV: "قلب عمودي", reset: "إعادة", cropHint: "اسحب إطاراً على الصورة للقص.", same: "الصيغة", keepFmt: "نفس الصيغة", jpgNote: "صيغة JPG بلا شفافية: تصبح الخلفية بيضاء." },
  ru: { pick: "Выбрать фото", picks: "Выбрать фото", drop: "или перетащите сюда", width: "Ширина (px)", height: "Высота (px)", keep: "Сохранять пропорции", percent: "Процент", format: "Формат", quality: "Качество", download: "Скачать", all: "Скачать всё (ZIP)", orig: "До", res: "После", bad: "Фото не открылось. Если это HEIC, отправьте его с телефона как JPG.", ratio: "Пропорция", free: "Свободно", rotL: "Влево 90°", rotR: "Вправо 90°", flipH: "Отразить по горизонтали", flipV: "Отразить по вертикали", reset: "Сбросить", cropHint: "Протяните рамку по фото, чтобы обрезать.", same: "Формат", keepFmt: "Тот же формат", jpgNote: "JPG без прозрачности: фон станет белым." },
};

async function load(file: File): Promise<ImageBitmap> {
  return createImageBitmap(file, { imageOrientation: "from-image" } as ImageBitmapOptions);
}
function toBlob(c: HTMLCanvasElement, fmt: Fmt, q: number) {
  return new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("encode"))), fmt, q));
}
const fmtOf = (f: File): Fmt => (f.type === "image/png" ? "image/png" : f.type === "image/webp" ? "image/webp" : "image/jpeg");
const baseName = (n: string) => n.replace(/\.[^.]+$/, "") || "image";
async function encode(bmp: CanvasImageSource, w: number, h: number, fmt: Fmt, q: number, draw?: (ctx: CanvasRenderingContext2D) => void) {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  const ctx = c.getContext("2d")!;
  if (fmt === "image/jpeg") { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); }
  ctx.imageSmoothingQuality = "high";
  if (draw) draw(ctx); else ctx.drawImage(bmp, 0, 0, c.width, c.height);
  const b = await toBlob(c, fmt, q);
  c.width = c.height = 0;
  return b;
}

function Picker({ t, multiple, onFiles }: { t: Record<string, string>; multiple?: boolean; onFiles: (f: File[]) => void }) {
  return (
    <label className={ui.drop} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onFiles([...e.dataTransfer.files].filter((f) => f.type.startsWith("image/") || /\.heic$/i.test(f.name))); }}>
      <span><b>{multiple ? t.picks : t.pick}</b><br /><span className="text-muted">{t.drop}</span></span>
      <input className="sr-only" type="file" accept="image/*" multiple={multiple} onChange={(e) => { onFiles([...(e.target.files ?? [])]); e.target.value = ""; }} data-testid="img-pick" />
    </label>
  );
}
function FmtPick({ t, v, set, allowSame }: { t: Record<string, string>; v: Fmt | "same"; set: (v: Fmt | "same") => void; allowSame?: boolean }) {
  const opts: [Fmt | "same", string][] = [...(allowSame ? [["same", t.keepFmt] as [Fmt | "same", string]] : []), ["image/jpeg", "JPG"], ["image/png", "PNG"], ["image/webp", "WebP"]];
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="w-24 shrink-0">{t.format}</span>
      {opts.map(([id, label]) => <button key={id} type="button" className={`${ui.btn} ${v === id ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`} onClick={() => set(id)} data-fmt={id}>{label}</button>)}
    </div>
  );
}
function Quality({ t, q, set }: { t: Record<string, string>; q: number; set: (n: number) => void }) {
  return (
    <label className="flex items-center gap-3 text-sm">
      <span className="w-24 shrink-0">{t.quality}</span>
      <input type="range" min={0.4} max={1} step={0.05} value={q} onChange={(e) => set(Number(e.target.value))} />
      <span>{Math.round(q * 100)}%</span>
    </label>
  );
}
function Result({ t, before, blob, name }: { t: Record<string, string>; before: number; blob: Blob | null; name: string }) {
  const url = useMemo(() => (blob ? URL.createObjectURL(blob) : ""), [blob]);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  if (!blob) return null;
  return (
    <div className="mt-4 space-y-3">
      <img src={url} alt="" className="max-h-80 rounded-xl border border-white/10 bg-[repeating-conic-gradient(#ffffff10_0_25%,transparent_0_50%)] [background-size:16px_16px]" />
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span>{t.orig}: {kb(before)}</span><span>{t.res}: {kb(blob.size)}</span>
        <a className={ui.primary} href={url} download={name} data-testid="img-download">{t.download}</a>
      </div>
    </div>
  );
}

function Resize({ t }: { t: Record<string, string> }) {
  const [file, setFile] = useState<File | null>(null);
  const [nat, setNat] = useState({ w: 0, h: 0 });
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [keep, setKeep] = useState(true);
  const [fmt, setFmt] = useState<Fmt | "same">("same");
  const [q, setQ] = useState(0.9);
  const [out, setOut] = useState<Blob | null>(null);
  const [err, setErr] = useState("");
  const bmp = useRef<ImageBitmap | null>(null);
  const pick = async (f: File[]) => {
    if (!f[0]) return;
    setErr(""); setOut(null);
    try { bmp.current?.close(); bmp.current = await load(f[0]); } catch { setErr(t.bad); return; }
    setFile(f[0]);
    setNat({ w: bmp.current.width, h: bmp.current.height }); setW(bmp.current.width); setH(bmp.current.height);
  };
  const setWidth = (v: number) => { setW(v); if (keep && nat.w) setH(Math.round((v * nat.h) / nat.w)); };
  const setHeight = (v: number) => { setH(v); if (keep && nat.h) setW(Math.round((v * nat.w) / nat.h)); };
  useEffect(() => {
    if (!file || !bmp.current || w < 1 || h < 1 || w > 12000 || h > 12000) return;
    const f = fmt === "same" ? fmtOf(file) : fmt;
    let dead = false;
    const id = setTimeout(() => { void encode(bmp.current!, w, h, f, q).then((b) => { if (!dead) setOut(b); }); }, 250);
    return () => { dead = true; clearTimeout(id); };
  }, [file, w, h, fmt, q]);
  const f = file ? (fmt === "same" ? fmtOf(file) : fmt) : "image/jpeg";
  return (
    <div>
      <Picker t={t} onFiles={pick} />
      {err ? <p className="mb-3 text-sm text-red-400">{err}</p> : null}
      {file ? (
        <div className="space-y-3">
          <p className="text-xs text-muted" dir="ltr">{file.name} · {nat.w} × {nat.h}</p>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm"><span className="mb-1 block text-muted">{t.width}</span><input type="number" min={1} max={12000} className={ui.field} value={w || ""} onChange={(e) => setWidth(Number(e.target.value))} data-testid="rs-w" /></label>
            <label className="text-sm"><span className="mb-1 block text-muted">{t.height}</span><input type="number" min={1} max={12000} className={ui.field} value={h || ""} onChange={(e) => setHeight(Number(e.target.value))} data-testid="rs-h" /></label>
          </div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={keep} onChange={(e) => setKeep(e.target.checked)} />{t.keep}</label>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="w-24 shrink-0">{t.percent}</span>
            {[25, 50, 75, 150, 200].map((p) => <button key={p} type="button" className={ui.btn} onClick={() => { setW(Math.round((nat.w * p) / 100)); setH(Math.round((nat.h * p) / 100)); }}>{p}%</button>)}
          </div>
          <FmtPick t={t} v={fmt} set={setFmt} allowSame />
          {f !== "image/png" ? <Quality t={t} q={q} set={setQ} /> : null}
          <Result t={t} before={file.size} blob={out} name={`${baseName(file.name)}-${w}x${h}.${EXT[f]}`} />
        </div>
      ) : null}
    </div>
  );
}

function Convert({ t }: { t: Record<string, string> }) {
  const [files, setFiles] = useState<File[]>([]);
  const [fmt, setFmt] = useState<Fmt>("image/jpeg");
  const [q, setQ] = useState(0.9);
  const [outs, setOuts] = useState<{ name: string; blob: Blob; before: number }[]>([]);
  const [bad, setBad] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!files.length) return;
    let dead = false;
    setBusy(true);
    (async () => {
      const res: typeof outs = [];
      const fails: string[] = [];
      for (const f of files) {
        try {
          const b = await load(f);
          const blob = await encode(b, b.width, b.height, fmt, q);
          b.close();
          let name = `${baseName(f.name)}.${EXT[fmt]}`;
          for (let n = 2; res.some((r) => r.name === name); n++) name = `${baseName(f.name)}-${n}.${EXT[fmt]}`;
          res.push({ name, blob, before: f.size });
        } catch { fails.push(f.name); }
      }
      if (!dead) { setOuts(res); setBad(fails); setBusy(false); }
    })();
    return () => { dead = true; };
  }, [files, fmt, q]);
  const zipAll = async () => {
    const { zipSync } = await import("fflate");
    const entries: Record<string, Uint8Array> = {};
    for (const o of outs) entries[o.name] = new Uint8Array(await o.blob.arrayBuffer());
    save("images.zip", new Blob([zipSync(entries, { level: 0 }) as BlobPart], { type: "application/zip" }));
  };
  return (
    <div>
      <Picker t={t} multiple onFiles={(f) => f.length && setFiles(f)} />
      <div className="space-y-3">
        <FmtPick t={t} v={fmt} set={(v) => v !== "same" && setFmt(v)} />
        {fmt !== "image/png" ? <Quality t={t} q={q} set={setQ} /> : null}
        {fmt === "image/jpeg" ? <p className="text-xs text-muted">{t.jpgNote}</p> : null}
      </div>
      {bad.length ? <p className="mt-3 text-sm text-red-400">{t.bad} ({bad.join(", ")})</p> : null}
      {busy ? <p className="mt-3 text-sm text-muted">…</p> : null}
      {outs.length ? (
        <ul className="mt-4 space-y-2" data-testid="conv-list">
          {outs.map((o) => (
            <li key={o.name} className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 px-3 py-2 text-sm">
              <span className="min-w-0 flex-1 truncate" dir="ltr">{o.name}</span>
              <span className="text-muted">{kb(o.before)} → {kb(o.blob.size)}</span>
              <button type="button" className={ui.btn} onClick={() => save(o.name, o.blob)}>{t.download}</button>
            </li>
          ))}
          {outs.length > 1 ? <li><button type="button" className={ui.primary} onClick={zipAll}>{t.all}</button></li> : null}
        </ul>
      ) : null}
    </div>
  );
}

const RATIOS: [string, number | null][] = [["free", null], ["1:1", 1], ["4:3", 4 / 3], ["3:2", 3 / 2], ["16:9", 16 / 9], ["9:16", 9 / 16], ["3:4", 3 / 4]];
function Edit({ t }: { t: Record<string, string> }) {
  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<ImageBitmap | null>(null);
  const [rot, setRot] = useState(0);
  const [fh, setFh] = useState(false);
  const [fv, setFv] = useState(false);
  const [ratio, setRatio] = useState<number | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  const [fmt, setFmt] = useState<Fmt | "same">("same");
  const [q, setQ] = useState(0.92);
  const [preview, setPreview] = useState("");
  const [out, setOut] = useState<Blob | null>(null);
  const [err, setErr] = useState("");
  const box = useRef<HTMLDivElement>(null);
  const pick = async (f: File[]) => {
    if (!f[0]) return;
    setErr("");
    try { const b = await load(f[0]); src?.close(); setSrc(b); setFile(f[0]); setRot(0); setFh(false); setFv(false); setCrop(null); } catch { setErr(t.bad); }
  };
  // oriented (rotated/flipped) full image as canvas
  const oriented = useMemo(() => {
    if (!src) return null;
    const sw = rot % 180 ? src.height : src.width, sh = rot % 180 ? src.width : src.height;
    const c = document.createElement("canvas");
    c.width = sw; c.height = sh;
    const ctx = c.getContext("2d")!;
    ctx.translate(sw / 2, sh / 2);
    ctx.rotate((rot * Math.PI) / 180);
    ctx.scale(fh ? -1 : 1, fv ? -1 : 1);
    ctx.drawImage(src, -src.width / 2, -src.height / 2);
    return c;
  }, [src, rot, fh, fv]);
  useEffect(() => {
    if (!oriented) { setPreview(""); return; }
    const k = Math.min(1, 1200 / Math.max(oriented.width, oriented.height));
    const c = document.createElement("canvas");
    c.width = Math.round(oriented.width * k); c.height = Math.round(oriented.height * k);
    c.getContext("2d")!.drawImage(oriented, 0, 0, c.width, c.height);
    setPreview(c.toDataURL("image/jpeg", 0.85));
  }, [oriented]);
  useEffect(() => {
    if (!oriented || !file) return;
    const f = fmt === "same" ? fmtOf(file) : fmt;
    const r = crop ?? { x: 0, y: 0, w: 1, h: 1 };
    const W = oriented.width, H = oriented.height;
    let dead = false;
    const id = setTimeout(() => {
      void encode(oriented, r.w * W, r.h * H, f, q, (ctx) => ctx.drawImage(oriented, r.x * W, r.y * H, r.w * W, r.h * H, 0, 0, r.w * W, r.h * H)).then((b) => { if (!dead) setOut(b); });
    }, 250);
    return () => { dead = true; clearTimeout(id); };
  }, [oriented, crop, fmt, q, file]);
  const pos = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect();
    return { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
  };
  const update = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    let w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
    if (ratio && oriented) {
      const ar = ratio * (oriented.height / oriented.width); // in fraction units
      if (w / Math.max(h, 1e-6) > ar) w = h * ar; else h = w / ar;
    }
    const x = b.x < a.x ? a.x - w : a.x, y = b.y < a.y ? a.y - h : a.y;
    setCrop({ x: Math.max(0, x), y: Math.max(0, y), w: Math.min(w, 1 - Math.max(0, x)), h: Math.min(h, 1 - Math.max(0, y)) });
  };
  const f = file ? (fmt === "same" ? fmtOf(file) : fmt) : "image/jpeg";
  return (
    <div>
      <Picker t={t} onFiles={pick} />
      {err ? <p className="mb-3 text-sm text-red-400">{err}</p> : null}
      {file && preview ? (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button type="button" className={ui.btn} onClick={() => { setRot((r) => (r + 270) % 360); setCrop(null); }}>↺ {t.rotL}</button>
            <button type="button" className={ui.btn} onClick={() => { setRot((r) => (r + 90) % 360); setCrop(null); }} data-testid="rot-r">↻ {t.rotR}</button>
            <button type="button" className={ui.btn} onClick={() => { setFh((v) => !v); setCrop(null); }}>⇋ {t.flipH}</button>
            <button type="button" className={ui.btn} onClick={() => { setFv((v) => !v); setCrop(null); }}>⇵ {t.flipV}</button>
            <button type="button" className={ui.btn} onClick={() => { setRot(0); setFh(false); setFv(false); setCrop(null); }}>{t.reset}</button>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="w-24 shrink-0">{t.ratio}</span>
            {RATIOS.map(([id, r]) => <button key={id} type="button" className={`${ui.btn} ${ratio === r ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`} onClick={() => { setRatio(r); setCrop(null); }}>{id === "free" ? t.free : id}</button>)}
          </div>
          <p className="text-xs text-muted">{t.cropHint}</p>
          <div ref={box} className="relative mx-auto w-fit max-w-full touch-none select-none" data-testid="crop-box"
            onPointerDown={(e) => { (e.target as Element).setPointerCapture?.(e.pointerId); const p = pos(e); setDrag(p); setCrop(null); }}
            onPointerMove={(e) => { if (drag) update(drag, pos(e)); }}
            onPointerUp={() => { setDrag(null); setCrop((c) => (c && c.w > 0.01 && c.h > 0.01 ? c : null)); }}>
            <img src={preview} alt="" draggable={false} className="block max-h-[60vh] max-w-full rounded-lg" />
            {crop ? <div className="pointer-events-none absolute border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]" style={{ left: `${crop.x * 100}%`, top: `${crop.y * 100}%`, width: `${crop.w * 100}%`, height: `${crop.h * 100}%` }} /> : null}
          </div>
          <FmtPick t={t} v={fmt} set={setFmt} allowSame />
          {f !== "image/png" ? <Quality t={t} q={q} set={setQ} /> : null}
          <Result t={t} before={file.size} blob={out} name={`${baseName(file.name)}-edit.${EXT[f]}`} />
        </div>
      ) : null}
    </div>
  );
}

export function ImageToolPage({ tool }: { tool: ImageTool }) {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <KitShell path={`/image/${tool}`} lang={lang} icon="/apps/nibras-image.png" next={[...IMAGE_FAMILY, "/pdf/image-pdf"]}>
      {mounted ? (tool === "resize" ? <Resize t={t} /> : tool === "convert" ? <Convert t={t} /> : <Edit t={t} />) : <div className="h-40 animate-pulse rounded-2xl bg-white/5" />}
    </KitShell>
  );
}
