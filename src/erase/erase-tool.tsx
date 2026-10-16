import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { useQrAuth } from "@/qr/lib/auth";
import { COPY } from "./erase-copy";
import { PremiumDialog } from "./erase-premium";

type Quality = "small" | "medium" | "large";
type Bg = "clear" | "white" | "black" | "color" | "gradient" | "blur" | "photo";
type Format = "png" | "jpeg" | "webp";
type Hand = "erase" | "restore";
type Tab = "compare" | "edit";

export const FREE_MAX_SIDE = 1600;
export const FREE_DAILY = 5;
export const PRO_BATCH = 20;
const MAX_BYTES = 25 * 1024 * 1024;
const USAGE_KEY = "nibras_erase_usage";
const ASPECTS: { id: string; r: number }[] = [
  { id: "free", r: 0 },
  { id: "1:1", r: 1 },
  { id: "4:3", r: 4 / 3 },
  { id: "16:9", r: 16 / 9 },
  { id: "9:16", r: 9 / 16 },
];

type Item = {
  id: number;
  file: File;
  name: string;
  url: string;
  status: "queued" | "working" | "done" | "error";
  progress: number;
  original?: HTMLImageElement;
  base?: HTMLCanvasElement;
  cut?: HTMLCanvasElement;
  undo: HTMLCanvasElement[];
  redo: HTMLCanvasElement[];
  edge: number;
  ver: number;
  bb?: { ver: number; x: number; y: number; w: number; h: number };
};

type Opts = {
  bg: Bg; color: string; color2: string; bgPhoto: HTMLImageElement | null; pad: number; shadow: boolean;
  ratio: number; trim: boolean; flip: boolean; circle: boolean; watermark: boolean; format: Format;
};

function download(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

async function loadImage(src: string) {
  const image = new Image();
  image.src = src;
  await image.decode();
  return image;
}

function canvasBlob(canvas: HTMLCanvasElement, type: string, quality: number) {
  return new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("blob"))), type, quality));
}

function cloneCanvas(src: HTMLCanvasElement) {
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  c.getContext("2d")!.drawImage(src, 0, 0);
  return c;
}

function refineEdge(canvas: HTMLCanvasElement, amount: number) {
  if (!amount) return;
  const ctx = canvas.getContext("2d")!;
  const { width, height } = canvas;
  const image = ctx.getImageData(0, 0, width, height);
  const src = image.data;
  const next = new Uint8ClampedArray(src);
  const radius = Math.abs(amount);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4 + 3;
      if (amount < 0) {
        let min = 255;
        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            const xx = x + dx;
            const yy = y + dy;
            if (xx < 0 || yy < 0 || xx >= width || yy >= height) { min = 0; continue; }
            min = Math.min(min, src[(yy * width + xx) * 4 + 3]);
          }
        }
        next[i] = min;
      } else {
        let max = 0;
        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            const xx = Math.min(width - 1, Math.max(0, x + dx));
            const yy = Math.min(height - 1, Math.max(0, y + dy));
            max = Math.max(max, src[(yy * width + xx) * 4 + 3]);
          }
        }
        next[i] = max;
      }
    }
  }
  image.data.set(next);
  ctx.putImageData(image, 0, 0);
}

function boundsOf(item: Item) {
  const cut = item.cut!;
  if (item.bb && item.bb.ver === item.ver) return item.bb;
  const data = cut.getContext("2d")!.getImageData(0, 0, cut.width, cut.height).data;
  let minX = cut.width, minY = cut.height, maxX = -1, maxY = -1;
  for (let y = 0; y < cut.height; y++) {
    for (let x = 0; x < cut.width; x++) {
      if (data[(y * cut.width + x) * 4 + 3] > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const bb = maxX > minX && maxY > minY ? { ver: item.ver, x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 } : { ver: item.ver, x: 0, y: 0, w: cut.width, h: cut.height };
  item.bb = bb;
  return bb;
}

/** Builds the final picture. `maxSide` caps the longest side (0 = no cap); everything is drawn scaled in one pass. */
export function compose(item: Item, o: Opts, maxSide: number): HTMLCanvasElement {
  const cut = item.cut!;
  const original = item.original!;
  let sx = 0, sy = 0, sw = cut.width, sh = cut.height;
  if (o.trim) {
    const b = boundsOf(item);
    sx = b.x; sy = b.y; sw = b.w; sh = b.h;
  }
  const padPx = Math.round((Math.max(sw, sh) * o.pad) / 100);
  let W = sw + padPx * 2;
  let H = sh + padPx * 2;
  if (o.ratio) {
    if (W / H < o.ratio) W = Math.round(H * o.ratio);
    else H = Math.round(W / o.ratio);
  }
  let s = 1;
  if (maxSide > 0 && Math.max(W, H) > maxSide) s = maxSide / Math.max(W, H);
  const out = document.createElement("canvas");
  out.width = Math.max(1, Math.round(W * s));
  out.height = Math.max(1, Math.round(H * s));
  const ctx = out.getContext("2d")!;
  ctx.scale(s, s);
  const cover = (img: HTMLImageElement) => {
    const k = Math.max(W / img.width, H / img.height);
    const dw = img.width * k, dh = img.height * k;
    ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
  };
  if (o.bg === "photo" && o.bgPhoto) cover(o.bgPhoto);
  else if (o.bg === "blur") {
    ctx.filter = `blur(${Math.round(18 * s) || 1}px)`;
    ctx.save();
    ctx.scale(1 / s, 1 / s);
    // blur radius is in output pixels; draw the cover at output scale
    const k = Math.max(out.width / original.width, out.height / original.height) * 1.08;
    const dw = original.width * k, dh = original.height * k;
    ctx.drawImage(original, (out.width - dw) / 2, (out.height - dh) / 2, dw, dh);
    ctx.restore();
    ctx.filter = "none";
  } else if (o.bg === "gradient") {
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, o.color);
    g.addColorStop(1, o.color2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  } else if (o.bg !== "clear") {
    ctx.fillStyle = o.bg === "white" ? "#ffffff" : o.bg === "black" ? "#111111" : o.color;
    ctx.fillRect(0, 0, W, H);
  } else if (o.format === "jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
  }
  const ox = (W - sw) / 2;
  const oy = (H - sh) / 2;
  if (o.shadow) {
    ctx.save();
    ctx.filter = `blur(${Math.max(1, Math.round(16 * s))}px)`;
    ctx.globalAlpha = 0.35;
    ctx.drawImage(cut, sx, sy, sw, sh, ox + 8, oy + 18, sw, sh);
    ctx.restore();
  }
  ctx.drawImage(cut, sx, sy, sw, sh, ox, oy, sw, sh);
  let cur = out;
  if (o.flip) {
    const f = document.createElement("canvas");
    f.width = cur.width; f.height = cur.height;
    const fc = f.getContext("2d")!;
    fc.translate(f.width, 0);
    fc.scale(-1, 1);
    fc.drawImage(cur, 0, 0);
    cur = f;
  }
  if (o.circle) {
    const side = Math.min(cur.width, cur.height);
    const r = document.createElement("canvas");
    r.width = side; r.height = side;
    const rc = r.getContext("2d")!;
    rc.beginPath();
    rc.arc(side / 2, side / 2, side / 2, 0, Math.PI * 2);
    rc.clip();
    rc.drawImage(cur, (cur.width - side) / 2, (cur.height - side) / 2, side, side, 0, 0, side, side);
    cur = r;
  }
  if (o.watermark) {
    const wc = cur.getContext("2d")!;
    const size = Math.max(11, Math.round(Math.min(cur.width, cur.height) * 0.035));
    wc.font = `700 ${size}px sans-serif`;
    wc.textAlign = "center";
    wc.textBaseline = "bottom";
    wc.lineWidth = Math.max(2, size / 6);
    wc.strokeStyle = "rgba(0,0,0,0.55)";
    wc.fillStyle = "rgba(255,255,255,0.85)";
    const label = "nibrascode.com/erase";
    const y = cur.height - size * 0.5;
    wc.strokeText(label, cur.width / 2, y);
    wc.fillText(label, cur.width / 2, y);
  }
  return cur;
}

function usage() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const u = JSON.parse(localStorage.getItem(USAGE_KEY) || "null") as { d: string; c: number } | null;
    return u && u.d === today ? u : { d: today, c: 0 };
  } catch {
    return { d: today, c: 0 };
  }
}
function bumpUsage() {
  const u = usage();
  u.c += 1;
  try { localStorage.setItem(USAGE_KEY, JSON.stringify(u)); } catch { /* storage blocked */ }
}

export function EraseTool() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const pro = useQrAuth((s) => s.pro);
  const itemsRef = useRef<Item[]>([]);
  const idRef = useRef(1);
  const [tick, bump] = useReducer((n: number) => n + 1, 0);
  const [activeId, setActiveId] = useState(0);
  const [tab, setTab] = useState<Tab>("compare");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [lock, setLock] = useState<string | null>(null);
  const [drag, setDrag] = useState(false);
  const [quality, setQuality] = useState<Quality>("medium");
  const [bg, setBg] = useState<Bg>("clear");
  const [color, setColor] = useState("#f4f1ea");
  const [color2, setColor2] = useState("#7aa7ff");
  const [bgPhoto, setBgPhoto] = useState<HTMLImageElement | null>(null);
  const [format, setFormat] = useState<Format>("png");
  const [jq, setJq] = useState(92);
  const [pad, setPad] = useState(8);
  const [ratioId, setRatioId] = useState("free");
  const [shadow, setShadow] = useState(false);
  const [size, setSize] = useState(0);
  const [hand, setHand] = useState<Hand>("erase");
  const [brush, setBrush] = useState(28);
  const [circle, setCircle] = useState(false);
  const [flip, setFlip] = useState(false);
  const [trim, setTrim] = useState(false);
  const [split, setSplit] = useState(50);
  const [previewUrl, setPreviewUrl] = useState("");
  const [left, setLeft] = useState(FREE_DAILY);
  const editRef = useRef<HTMLCanvasElement | null>(null);
  const painting = useRef(false);
  const runningRef = useRef(false);

  useEffect(() => {
    void useQrAuth.getState().init();
    setLeft(Math.max(0, FREE_DAILY - usage().c));
  }, []);

  const items = itemsRef.current;
  const active = items.find((i) => i.id === activeId) ?? null;
  const ratio = ASPECTS.find((a) => a.id === ratioId)?.r ?? 0;
  const effQuality: Quality = pro || quality !== "large" ? quality : "medium";
  const effSize = pro ? size : size > 0 && size <= FREE_MAX_SIDE ? size : FREE_MAX_SIDE;
  const opts: Opts = useMemo(
    () => ({ bg: pro || bg !== "gradient" ? bg : "clear", color, color2, bgPhoto, pad, shadow, ratio, trim, flip, circle, watermark: !pro, format }),
    [pro, bg, color, color2, bgPhoto, pad, shadow, ratio, trim, flip, circle, format],
  );

  const ask = useCallback((reason: string) => setLock(reason), []);

  // ---- intake: file picker, drag & drop, paste
  const addFiles = useCallback(
    (all: File[]) => {
      let files = all.filter((f) => /^image\/(png|jpeg|webp)$/.test(f.type));
      if (!files.length) { setNote(t.badType); return; }
      if (files.some((f) => f.size > MAX_BYTES)) { setNote(t.tooBig); files = files.filter((f) => f.size <= MAX_BYTES); if (!files.length) return; }
      const isPro = useQrAuth.getState().pro;
      if (!isPro && files.length > 1) { files = files.slice(0, 1); setNote(t.batchLocked); ask(t.lockReasonBatch); }
      if (isPro) files = files.slice(0, PRO_BATCH);
      if (!isPro && FREE_DAILY - usage().c <= 0) { setNote(t.limitHit); ask(t.lockReasonLimit); return; }
      const fresh: Item[] = files.map((file) => ({ id: idRef.current++, file, name: file.name, url: URL.createObjectURL(file), status: "queued", progress: 0, undo: [], redo: [], edge: 0, ver: 0 }));
      const keep = isPro ? itemsRef.current : [];
      if (!isPro) itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url));
      itemsRef.current = [...keep, ...fresh].slice(0, PRO_BATCH);
      setActiveId(fresh[0].id);
      setTab("compare");
      setNote("");
      bump();
      void startAll();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, ask],
  );

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const files = Array.from(e.clipboardData?.files ?? []).filter((f) => f.type.startsWith("image/"));
      if (files.length) { e.preventDefault(); addFiles(files); }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [addFiles]);

  // ---- background removal
  async function runItem(item: Item) {
    item.status = "working";
    item.progress = 4;
    bump();
    setNote(t.wait);
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const q: Quality = useQrAuth.getState().pro ? quality : quality === "large" ? "medium" : quality;
      const runModel = (device: "gpu" | "cpu") =>
        removeBackground(item.file, {
          model: ({ small: "isnet_quint8", medium: "isnet_fp16", large: "isnet" } as const)[q],
          device,
          rescale: true,
          output: { format: "image/png", quality: 1 },
          progress: (_k, cur, total) => {
            if (total > 0) { item.progress = Math.min(96, Math.round((cur / total) * 100)); bump(); }
          },
        });
      const out = await runModel("gpu").catch(() => runModel("cpu"));
      const blobUrl = URL.createObjectURL(out);
      const image = await loadImage(blobUrl);
      URL.revokeObjectURL(blobUrl);
      item.original = await loadImage(item.url);
      item.base = cloneCanvas(Object.assign(document.createElement("canvas"), { width: image.width, height: image.height }));
      item.base.getContext("2d")!.drawImage(image, 0, 0);
      item.cut = item.base;
      item.edge = 0;
      item.undo = [];
      item.redo = [];
      item.ver++;
      item.progress = 100;
      item.status = "done";
      if (!useQrAuth.getState().pro) { bumpUsage(); setLeft(Math.max(0, FREE_DAILY - usage().c)); }
      setNote(t.ready);
    } catch {
      item.status = "error";
      setNote(t.fail);
    }
    bump();
  }

  async function startAll() {
    if (runningRef.current) return;
    runningRef.current = true;
    setBusy(true);
    try {
      for (;;) {
        const next = itemsRef.current.find((i) => i.status === "queued");
        if (!next) break;
        await runItem(next);
      }
    } finally {
      runningRef.current = false;
      setBusy(false);
    }
  }

  // ---- result preview (debounced)
  const doneKey = active ? `${active.id}:${active.ver}:${active.status}` : "";
  useEffect(() => {
    if (!active || active.status !== "done" || !active.cut) { setPreviewUrl(""); return; }
    let dead = false;
    const timer = setTimeout(async () => {
      try {
        const c = compose(active, opts, 1400);
        const blob = await canvasBlob(c, "image/png", 1);
        if (dead) return;
        const url = URL.createObjectURL(blob);
        setPreviewUrl((old) => { if (old) URL.revokeObjectURL(old); return url; });
      } catch { /* preview only */ }
    }, 120);
    return () => { dead = true; clearTimeout(timer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneKey, opts, tick > -1 && 0]);

  // ---- edit canvas
  const drawEdit = useCallback(() => {
    const view = editRef.current;
    const it = itemsRef.current.find((i) => i.id === activeId);
    if (!view || !it?.cut) return;
    const k = Math.min(1, 1600 / Math.max(it.cut.width, it.cut.height));
    const w = Math.round(it.cut.width * k), h = Math.round(it.cut.height * k);
    if (view.width !== w || view.height !== h) { view.width = w; view.height = h; }
    const c = view.getContext("2d")!;
    c.clearRect(0, 0, w, h);
    c.drawImage(painting.current && it.base ? it.base : it.cut, 0, 0, w, h);
  }, [activeId]);
  useEffect(() => { if (tab === "edit") drawEdit(); }, [tab, drawEdit, doneKey, tick]);

  function refreshCut(it: Item) {
    if (!it.base) return;
    if (it.edge === 0) it.cut = it.base;
    else {
      const f = cloneCanvas(it.base);
      for (let i = 0; i < Math.abs(it.edge); i++) refineEdge(f, it.edge < 0 ? -1 : 1);
      it.cut = f;
    }
    it.ver++;
  }

  function paintAt(clientX: number, clientY: number) {
    const view = editRef.current;
    if (!view || !active?.base || !active.original) return;
    const base = active.base;
    const rect = view.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * base.width;
    const y = ((clientY - rect.top) / rect.height) * base.height;
    const ctx = base.getContext("2d")!;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, (brush / rect.width) * base.width, 0, Math.PI * 2);
    ctx.clip();
    if (hand === "erase") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillRect(0, 0, base.width, base.height);
    } else {
      ctx.drawImage(active.original, 0, 0, base.width, base.height);
    }
    ctx.restore();
    drawEdit();
  }
  function pointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!active?.base) return;
    painting.current = true;
    active.undo.push(cloneCanvas(active.base));
    if (active.undo.length > 15) active.undo.shift();
    active.redo = [];
    e.currentTarget.setPointerCapture(e.pointerId);
    paintAt(e.clientX, e.clientY);
  }
  function pointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (painting.current) paintAt(e.clientX, e.clientY);
  }
  function pointerUp() {
    if (!painting.current || !active) return;
    painting.current = false;
    refreshCut(active);
    bump();
  }
  function undo() {
    if (!active?.base || !active.undo.length) return;
    active.redo.push(cloneCanvas(active.base));
    active.base = active.undo.pop()!;
    refreshCut(active);
    bump();
  }
  function redo() {
    if (!active?.base || !active.redo.length) return;
    active.undo.push(cloneCanvas(active.base));
    active.base = active.redo.pop()!;
    refreshCut(active);
    bump();
  }
  function setEdge(n: number) {
    if (!active?.base) return;
    active.edge = n;
    setTimeout(() => { refreshCut(active); bump(); }, 0);
    bump();
  }

  // ---- export
  async function renderBlob(it: Item) {
    const c = compose(it, opts, effSize);
    const type = format === "jpeg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png";
    return { blob: await canvasBlob(c, type, jq / 100), w: c.width, h: c.height };
  }
  const ext = format === "jpeg" ? "jpg" : format;
  const baseName = (n: string) => n.replace(/\.[^.]+$/, "") || "image";
  async function exportActive() {
    if (!active?.cut) return;
    const { blob } = await renderBlob(active);
    download(`${baseName(active.name)}-nibras-erase.${ext}`, blob);
  }
  async function exportAll() {
    const done = itemsRef.current.filter((i) => i.status === "done");
    if (done.length < 2) return exportActive();
    const { default: JSZip } = await import("jszip");
    const zip = new JSZip();
    const used = new Set<string>();
    for (const it of done) {
      const { blob } = await renderBlob(it);
      let n = `${baseName(it.name)}-nibras-erase.${ext}`;
      for (let k = 2; used.has(n); k++) n = `${baseName(it.name)}-nibras-erase-${k}.${ext}`;
      used.add(n);
      zip.file(n, blob);
    }
    download("nibras-erase.zip", await zip.generateAsync({ type: "blob" }));
  }
  async function copyNow() {
    if (!active?.cut) return;
    try {
      const c = compose(active, { ...opts, format: "png" }, effSize);
      const blob = await canvasBlob(c, "image/png", 1);
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      setNote(t.copied);
    } catch {
      setNote(t.fail);
    }
  }
  function clearAll() {
    itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url));
    itemsRef.current = [];
    setActiveId(0);
    setPreviewUrl("");
    setNote("");
    bump();
  }
  function removeOne(id: number) {
    const it = itemsRef.current.find((i) => i.id === id);
    if (it) URL.revokeObjectURL(it.url);
    itemsRef.current = itemsRef.current.filter((i) => i.id !== id);
    if (activeId === id) setActiveId(itemsRef.current[0]?.id ?? 0);
    bump();
  }

  const lockedMark = (locked: boolean) => (locked ? <em className="erase-pro">{t.lockedBadge}</em> : null);
  const doneCount = items.filter((i) => i.status === "done").length;
  const sizeOptions: { v: number; label: string; locked: boolean }[] = [
    { v: 640, label: "640", locked: false },
    { v: 1024, label: "1024", locked: false },
    { v: 1600, label: "1600", locked: false },
    { v: 4096, label: "4096", locked: true },
    { v: 0, label: t.original, locked: true },
  ];

  return (
    <div className="files-tool erase-app" dir={dir} data-pro={pro ? "1" : "0"}>
      <section className="files-card">
        <div className="erase-top">
          <span className={`erase-plan${pro ? " is-pro" : ""}`} data-testid="erase-plan">{pro ? `👑 ${t.proNote}` : t.freeNote}</span>
          {!pro ? <span className="erase-left">{left > 0 ? t.limitLeft.replace("{n}", String(left)) : t.limitHit}</span> : null}
          {!pro ? <button type="button" className="files-ghost erase-getpro" onClick={() => ask("")} data-testid="erase-getpro">👑 {t.getPremium}</button> : null}
        </div>

        <label
          className={`files-drop erase-drop${drag ? " is-drag" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(Array.from(e.dataTransfer.files)); }}
        >
          <input type="file" accept="image/jpeg,image/png,image/webp" multiple data-testid="erase-input" onChange={(e) => { addFiles(Array.from(e.target.files ?? [])); e.target.value = ""; }} />
          <b>{t.drop}</b>
          <span>{items.length ? items.map((i) => i.name).join(", ").slice(0, 120) : `${t.dropSub} ${t.private}`}</span>
        </label>

        {items.length > 1 ? (
          <ul className="erase-queue" aria-label={t.queue}>
            {items.map((i) => (
              <li key={i.id} className={i.id === activeId ? "is-on" : ""}>
                <button type="button" onClick={() => setActiveId(i.id)}>
                  <img src={i.url} alt="" />
                  <span>{i.name}</span>
                  <small data-status={i.status}>{t[`status_${i.status}`]}{i.status === "working" ? ` ${i.progress}%` : ""}</small>
                </button>
                <button type="button" className="erase-x" aria-label={t.remove} onClick={() => removeOne(i.id)}>×</button>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="erase-row">
          <span>{t.quality}</span>
          {(["small", "medium", "large"] as Quality[]).map((id) => (
            <button key={id} type="button" className={effQuality === id && quality === id ? "is-on" : ""} onClick={() => (id === "large" && !pro ? ask(t.lockReasonQuality) : setQuality(id))}>
              {id === "small" ? t.qSmall : id === "medium" ? t.qMedium : t.qLarge}{lockedMark(id === "large" && !pro)}
            </button>
          ))}
        </div>
        <div className="erase-row">
          <span>{t.background}</span>
          {(["clear", "white", "black", "color", "gradient", "blur", "photo"] as Bg[]).map((id) => (
            <button key={id} type="button" data-bg={id} className={bg === id ? "is-on" : ""} onClick={() => (id === "gradient" && !pro ? ask(t.lockReasonGradient) : setBg(id))}>
              {t[id]}{lockedMark(id === "gradient" && !pro)}
            </button>
          ))}
          {bg === "color" || bg === "gradient" ? <input type="color" value={color} onChange={(e) => setColor(e.target.value)} aria-label={t.color} /> : null}
          {bg === "gradient" ? <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} aria-label={t.gradient} /> : null}
          {bg === "photo" ? (
            <label className="files-ghost">
              {t.pickPhoto}
              <input type="file" accept="image/*" hidden onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                const u = URL.createObjectURL(f);
                setBgPhoto(await loadImage(u));
              }} />
            </label>
          ) : null}
        </div>
        <div className="erase-row">
          <span>{t.format}</span>
          {(["png", "jpeg", "webp"] as Format[]).map((id) => (
            <button key={id} type="button" className={format === id ? "is-on" : ""} onClick={() => setFormat(id)}>{id === "jpeg" ? "JPG" : id.toUpperCase()}</button>
          ))}
        </div>
        {format !== "png" ? <label className="erase-slider"><span>{t.jpgQuality} {jq}</span><input type="range" min={50} max={100} value={jq} onChange={(e) => setJq(Number(e.target.value))} /></label> : null}
        <div className="erase-row">
          <span>{t.size}</span>
          {sizeOptions.map((o) => (
            <button key={o.v} type="button" data-size={o.v} className={(pro ? size : effSize) === o.v ? "is-on" : ""} onClick={() => (o.locked && !pro ? ask(t.lockReasonSize) : setSize(o.v))}>
              {o.label}{lockedMark(o.locked && !pro)}
            </button>
          ))}
        </div>
        <div className="erase-row">
          <span>{t.aspect}</span>
          {ASPECTS.map((a) => (
            <button key={a.id} type="button" className={ratioId === a.id ? "is-on" : ""} onClick={() => setRatioId(a.id)}>{a.id === "free" ? t.free : a.id}</button>
          ))}
        </div>
        <label className="erase-slider"><span>{t.pad} {pad}%</span><input type="range" min={0} max={30} value={pad} onChange={(e) => setPad(Number(e.target.value))} /></label>
        <div className="erase-row">
          <label className="erase-check"><input type="checkbox" checked={shadow} onChange={(e) => setShadow(e.target.checked)} />{t.shadow}</label>
          <label className="erase-check"><input type="checkbox" checked={circle} onChange={(e) => setCircle(e.target.checked)} />{t.circle}</label>
          <label className="erase-check"><input type="checkbox" checked={flip} onChange={(e) => setFlip(e.target.checked)} />{t.flip}</label>
          <label className="erase-check"><input type="checkbox" checked={trim} onChange={(e) => setTrim(e.target.checked)} />{t.trim}</label>
        </div>

        {active?.status === "done" ? (
          <>
            <div className="erase-tabs" role="tablist">
              <button type="button" role="tab" aria-selected={tab === "compare"} className={tab === "compare" ? "is-on" : ""} onClick={() => setTab("compare")}>{t.tabCompare}</button>
              <button type="button" role="tab" aria-selected={tab === "edit"} className={tab === "edit" ? "is-on" : ""} onClick={() => setTab("edit")}>{t.tabEdit}</button>
            </div>
            {tab === "compare" ? (
              <div className="erase-compare" data-testid="erase-compare">
                <div className="erase-cmp-stage is-cut" style={{ aspectRatio: previewUrl ? undefined : `${active.cut!.width}/${active.cut!.height}` }}>
                  {previewUrl ? <img className="erase-after" src={previewUrl} alt={t.after} /> : null}
                  <img className="erase-before" src={active.url} alt={t.before} style={{ clipPath: `inset(0 ${dir === "rtl" ? 0 : 100 - split}% 0 ${dir === "rtl" ? 100 - split : 0}%)` }} />
                  <i className="erase-handle" style={{ [dir === "rtl" ? "right" : "left"]: `${split}%` }} />
                  <b className="erase-tag erase-tag-b">{t.before}</b>
                  <b className="erase-tag erase-tag-a">{t.after}</b>
                </div>
                <input type="range" min={0} max={100} value={split} aria-label={t.slider} data-testid="erase-split" onChange={(e) => setSplit(Number(e.target.value))} />
              </div>
            ) : (
              <div className="erase-editbox">
                <div className="erase-row">
                  <span>{t.hand}</span>
                  <button type="button" className={hand === "erase" ? "is-on" : ""} onClick={() => setHand("erase")}>{t.erase}</button>
                  <button type="button" className={hand === "restore" ? "is-on" : ""} onClick={() => setHand("restore")}>{t.restore}</button>
                  <button type="button" disabled={!active.undo.length} onClick={undo} data-testid="erase-undo">↶ {t.undo}</button>
                  <button type="button" disabled={!active.redo.length} onClick={redo}>↷ {t.redo}</button>
                </div>
                <label className="erase-slider"><span>{t.brush} {brush}</span><input type="range" min={8} max={90} value={brush} onChange={(e) => setBrush(Number(e.target.value))} /></label>
                <label className="erase-slider"><span>{t.edge} {active.edge}</span><input type="range" min={-4} max={4} value={active.edge} onChange={(e) => setEdge(Number(e.target.value))} /></label>
                <p className="files-lead">{t.hint}</p>
                <div className="erase-stage is-cut">
                  <canvas ref={editRef} data-testid="erase-edit" className="is-hand" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp} />
                </div>
              </div>
            )}
          </>
        ) : active ? (
          <div className="erase-stage"><img src={active.url} alt="" /></div>
        ) : null}

        {busy ? <div className="erase-bar"><span style={{ width: `${items.find((i) => i.status === "working")?.progress ?? 0}%` }} /></div> : null}
        <div className="files-actions">
          {items.some((i) => i.status === "queued" || i.status === "error") && !busy ? (
            <button type="button" className="files-run" onClick={() => { itemsRef.current.forEach((i) => { if (i.status === "error") i.status = "queued"; }); void startAll(); }}>{t.run}</button>
          ) : null}
          {active?.status === "done" ? <button type="button" className="files-run" onClick={() => void exportActive()} data-testid="erase-download">{t.download} {ext.toUpperCase()}</button> : null}
          {doneCount > 1 ? <button type="button" className="files-ghost" onClick={() => void exportAll()} data-testid="erase-download-all">{t.downloadAll} (ZIP)</button> : null}
          {active?.status === "done" ? <button type="button" className="files-ghost" onClick={() => void copyNow()}>{t.copy}</button> : null}
          {items.length ? <button type="button" className="files-ghost" onClick={clearAll}>{t.again}</button> : null}
        </div>
      </section>
      {note ? <p className="files-note" role="status">{note}</p> : null}
      {lock !== null ? <PremiumDialog t={t} reason={lock} dir={dir} onClose={() => setLock(null)} /> : null}
    </div>
  );
}
