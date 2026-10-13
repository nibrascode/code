import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

type Quality = "small" | "medium" | "large";
type Bg = "clear" | "white" | "black" | "color" | "blur" | "photo";
type Format = "png" | "jpeg" | "webp";
type Hand = "off" | "erase" | "restore";

const COPY: Record<Lang, Record<string, string>> = {
  az: {
    drop: "Şəkil seç", run: "Fonu sil", working: "İşlənir…", ready: "Hazırdır.", empty: "Əvvəl şəkil seç",
    private: "Şəkil cihazda qalır. Hesab lazım deyil.", again: "Başqa şəkil", download: "Yüklə",
    wait: "Dəqiq model yüklənir…", fail: "Fon silinmədi. Başqa şəkil yoxla.",
    quality: "Keyfiyyət", qSmall: "Sürətli", qMedium: "Orta", qLarge: "Ən yaxşı",
    background: "Fon", clear: "Şəffaf", white: "Ağ", black: "Qara", color: "Rəng", blur: "Bulanıq", photo: "Şəkil",
    format: "Format", pad: "Boşluq", shadow: "Kölgə", size: "Ölçü", circle: "Dairə", flip: "Çevir", trim: "Kəs", copy: "Kopyala",
    hand: "Əl ilə", erase: "Sil", restore: "Qaytar", brush: "Fırça", edge: "Kənar",
    hint: "Qalan fonu barmaq və ya siçanla sil. Səhv getsə, qaytar.",
  },
  en: {
    drop: "Choose a photo", run: "Remove background", working: "Working…", ready: "Done.", empty: "Choose a photo first",
    private: "The photo stays on your device. No account.", again: "Another photo", download: "Download",
    wait: "Loading the precise model…", fail: "Could not remove the background. Try another photo.",
    quality: "Quality", qSmall: "Fast", qMedium: "Medium", qLarge: "Best",
    background: "Background", clear: "Clear", white: "White", black: "Black", color: "Color", blur: "Blur", photo: "Photo",
    format: "Format", pad: "Padding", shadow: "Shadow", size: "Size", circle: "Circle", flip: "Flip", trim: "Trim", copy: "Copy",
    hand: "By hand", erase: "Erase", restore: "Restore", brush: "Brush", edge: "Edge",
    hint: "Paint away leftover background. Restore if you erase too much.",
  },
  tr: {
    drop: "Fotoğraf seç", run: "Arka planı sil", working: "İşleniyor…", ready: "Hazır.", empty: "Önce fotoğraf seç",
    private: "Fotoğraf cihazda kalır. Hesap gerekmez.", again: "Başka fotoğraf", download: "İndir",
    wait: "Hassas model yükleniyor…", fail: "Arka plan silinemedi. Başka fotoğraf dene.",
    quality: "Kalite", qSmall: "Hızlı", qMedium: "Orta", qLarge: "En iyi",
    background: "Arka plan", clear: "Şeffaf", white: "Beyaz", black: "Siyah", color: "Renk", blur: "Bulanık", photo: "Foto",
    format: "Biçim", pad: "Boşluk", shadow: "Gölge", size: "Boyut", circle: "Daire", flip: "Çevir", trim: "Kırp", copy: "Kopyala",
    hand: "Elle", erase: "Sil", restore: "Geri al", brush: "Fırça", edge: "Kenar",
    hint: "Kalan arka planı parmak veya fareyle sil. Fazla silersen geri al.",
  },
  ar: {
    drop: "اختر صورة", run: "أزل الخلفية", working: "جارٍ العمل…", ready: "تم.", empty: "اختر صورة أولاً",
    private: "الصورة تبقى على جهازك. بلا حساب.", again: "صورة أخرى", download: "تنزيل",
    wait: "يتم تحميل النموذج الأدق…", fail: "تعذّرت إزالة الخلفية. جرّب صورة أخرى.",
    quality: "الجودة", qSmall: "سريع", qMedium: "متوسط", qLarge: "الأفضل",
    background: "الخلفية", clear: "شفاف", white: "أبيض", black: "أسود", color: "لون", blur: "ضبابي", photo: "صورة",
    format: "الصيغة", pad: "هامش", shadow: "ظل", size: "الحجم", circle: "دائرة", flip: "اقلب", trim: "قص", copy: "انسخ",
    hand: "باليد", erase: "امسح", restore: "أعد", brush: "الفرشاة", edge: "الحافة",
    hint: "امسح الخلفية المتبقية بإصبعك أو الفأرة. أعد ما مُسح بالخطأ.",
  },
  ru: {
    drop: "Выберите фото", run: "Удалить фон", working: "Обработка…", ready: "Готово.", empty: "Сначала выберите фото",
    private: "Фото остаётся на устройстве. Аккаунт не нужен.", again: "Другое фото", download: "Скачать",
    wait: "Загрузка точной модели…", fail: "Не удалось убрать фон. Попробуйте другое фото.",
    quality: "Качество", qSmall: "Быстро", qMedium: "Средне", qLarge: "Лучшее",
    background: "Фон", clear: "Прозрачный", white: "Белый", black: "Чёрный", color: "Цвет", blur: "Размытие", photo: "Фото",
    format: "Формат", pad: "Отступ", shadow: "Тень", size: "Размер", circle: "Круг", flip: "Отразить", trim: "Обрезать", copy: "Копировать",
    hand: "Вручную", erase: "Стереть", restore: "Вернуть", brush: "Кисть", edge: "Край",
    hint: "Сотрите остатки фона пальцем или мышью. Лишнее верните.",
  },
};

const SIZES = [0, 1024, 1600, 2400];

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
  return new Promise<Blob>((resolve) => canvas.toBlob((blob) => resolve(blob!), type, quality));
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
            if (xx < 0 || yy < 0 || xx >= width || yy >= height) {
              min = 0;
              continue;
            }
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

export function EraseTool() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const cutRef = useRef<HTMLCanvasElement | null>(null);
  const baseRef = useRef<HTMLCanvasElement | null>(null);
  const originalRef = useRef<HTMLImageElement | null>(null);
  const paintRef = useRef<HTMLCanvasElement | null>(null);
  const painting = useRef(false);
  const [file, setFile] = useState<File | null>(null);
  const [source, setSource] = useState("");
  const [readyCut, setReadyCut] = useState(false);
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [note, setNote] = useState("");
  const [quality, setQuality] = useState<Quality>("large");
  const [bg, setBg] = useState<Bg>("clear");
  const [color, setColor] = useState("#f4f1ea");
  const [format, setFormat] = useState<Format>("png");
  const [pad, setPad] = useState(8);
  const [shadow, setShadow] = useState(false);
  const [size, setSize] = useState(0);
  const [hand, setHand] = useState<Hand>("erase");
  const [brush, setBrush] = useState(28);
  const [edge, setEdge] = useState(0);
  const [bgPhoto, setBgPhoto] = useState("");
  const [circle, setCircle] = useState(false);
  const [flip, setFlip] = useState(false);
  const [trim, setTrim] = useState(false);

  const mime = format === "jpeg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png";
  const canClear = bg === "clear" && format === "png";

  function pick(next: File | null) {
    if (source) URL.revokeObjectURL(source);
    if (preview) URL.revokeObjectURL(preview);
    cutRef.current = null;
    baseRef.current = null;
    originalRef.current = null;
    setFile(next);
    setSource(next ? URL.createObjectURL(next) : "");
    setReadyCut(false);
    setPreview("");
    setProgress(0);
    setNote("");
    if (bgPhoto) URL.revokeObjectURL(bgPhoto);
    setBgPhoto("");
    setCircle(false);
    setFlip(false);
    setTrim(false);
  }

  async function compose() {
    const subject = cutRef.current;
    const original = originalRef.current;
    if (!subject || !original) return null;
    const padPx = Math.round((Math.max(subject.width, subject.height) * pad) / 100);
    const width = subject.width + padPx * 2;
    const height = subject.height + padPx * 2;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    if (bg === "photo" && bgPhoto) {
      const backdrop = await loadImage(bgPhoto);
      const cover = Math.max(width / backdrop.width, height / backdrop.height);
      const dw = backdrop.width * cover;
      const dh = backdrop.height * cover;
      ctx.drawImage(backdrop, (width - dw) / 2, (height - dh) / 2, dw, dh);
    } else if (bg === "blur") {
      ctx.filter = "blur(18px)";
      ctx.drawImage(original, -20, -20, width + 40, height + 40);
      ctx.filter = "none";
    } else if (bg !== "clear") {
      ctx.fillStyle = bg === "white" ? "#ffffff" : bg === "black" ? "#111111" : color;
      ctx.fillRect(0, 0, width, height);
    }
    if (shadow) {
      ctx.save();
      ctx.filter = "blur(16px)";
      ctx.globalAlpha = 0.35;
      ctx.drawImage(subject, padPx + 8, padPx + 18);
      ctx.restore();
    }
    ctx.drawImage(subject, padPx, padPx);
    let current = canvas;
    if (trim && bg === "clear") {
      const data = current.getContext("2d")!.getImageData(0, 0, current.width, current.height).data;
      let minX = current.width;
      let minY = current.height;
      let maxX = 0;
      let maxY = 0;
      for (let y = 0; y < current.height; y++) {
        for (let x = 0; x < current.width; x++) {
          if (data[(y * current.width + x) * 4 + 3] > 8) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }
      if (maxX > minX && maxY > minY) {
        const cropped = document.createElement("canvas");
        cropped.width = maxX - minX + 1;
        cropped.height = maxY - minY + 1;
        cropped.getContext("2d")!.drawImage(current, minX, minY, cropped.width, cropped.height, 0, 0, cropped.width, cropped.height);
        current = cropped;
      }
    }
    if (flip) {
      const flipped = document.createElement("canvas");
      flipped.width = current.width;
      flipped.height = current.height;
      const fctx = flipped.getContext("2d")!;
      fctx.translate(flipped.width, 0);
      fctx.scale(-1, 1);
      fctx.drawImage(current, 0, 0);
      current = flipped;
    }
    if (circle) {
      const side = Math.min(current.width, current.height);
      const round = document.createElement("canvas");
      round.width = side;
      round.height = side;
      const rctx = round.getContext("2d")!;
      rctx.beginPath();
      rctx.arc(side / 2, side / 2, side / 2, 0, Math.PI * 2);
      rctx.clip();
      rctx.drawImage(current, (current.width - side) / 2, (current.height - side) / 2, side, side, 0, 0, side, side);
      current = round;
    }
    let out = current;
    if (size > 0 && Math.max(current.width, current.height) > size) {
      const scale = size / Math.max(current.width, current.height);
      const resized = document.createElement("canvas");
      resized.width = Math.round(current.width * scale);
      resized.height = Math.round(current.height * scale);
      resized.getContext("2d")!.drawImage(current, 0, 0, resized.width, resized.height);
      out = resized;
    }
    const blob = await canvasBlob(out, canClear ? "image/png" : mime, 0.92);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(blob));
    return blob;
  }

  useEffect(() => {
    if (!readyCut || busy) return;
    compose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyCut, bg, color, bgPhoto, pad, shadow, size, format, circle, flip, trim]);

  function paintAt(clientX: number, clientY: number) {
    const view = paintRef.current;
    const cut = cutRef.current;
    const original = originalRef.current;
    if (!view || !cut || !original || hand === "off") return;
    const rect = view.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * cut.width;
    const y = ((clientY - rect.top) / rect.height) * cut.height;
    const ctx = cut.getContext("2d")!;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, (brush / rect.width) * cut.width, 0, Math.PI * 2);
    ctx.clip();
    if (hand === "erase") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cut.width, cut.height);
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(original, 0, 0, cut.width, cut.height);
    }
    ctx.restore();
  }

  function pointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!readyCut || hand === "off") return;
    painting.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    paintAt(event.clientX, event.clientY);
  }

  function pointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!painting.current) return;
    paintAt(event.clientX, event.clientY);
  }

  async function pointerUp() {
    if (!painting.current) return;
    painting.current = false;
    if (cutRef.current) {
      const copy = document.createElement("canvas");
      copy.width = cutRef.current.width;
      copy.height = cutRef.current.height;
      copy.getContext("2d")!.drawImage(cutRef.current, 0, 0);
      baseRef.current = copy;
    }
    await compose();
  }

  async function applyEdge(next: number) {
    setEdge(next);
    const base = baseRef.current;
    if (!base) return;
    const fresh = document.createElement("canvas");
    fresh.width = base.width;
    fresh.height = base.height;
    fresh.getContext("2d")!.drawImage(base, 0, 0);
    if (next < 0) for (let i = 0; i < -next; i++) refineEdge(fresh, -1);
    if (next > 0) for (let i = 0; i < next; i++) refineEdge(fresh, 1);
    cutRef.current = fresh;
    await compose();
  }

  async function run() {
    if (!file) {
      setNote(t.empty);
      return;
    }
    setBusy(true);
    setProgress(4);
    setNote(t.wait);
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const runModel = async (device: "gpu" | "cpu") =>
        removeBackground(file, {
          model: quality,
          device,
          rescale: true,
          output: { format: "image/png", quality: 1 },
          progress: (_key, current, total) => {
            if (total > 0) setProgress(Math.min(96, Math.round((current / total) * 100)));
          },
        });
      const out = await runModel("gpu").catch(() => runModel("cpu"));
      const image = await loadImage(URL.createObjectURL(out));
      const original = await loadImage(source);
      originalRef.current = original;
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext("2d")!.drawImage(image, 0, 0);
      cutRef.current = canvas;
      baseRef.current = canvas;
      setReadyCut(true);
      setProgress(100);
      setHand("erase");
      await compose();
      setNote(t.ready);
    } catch {
      setNote(t.fail);
    } finally {
      setBusy(false);
    }
  }

  async function exportNow() {
    const blob = await compose();
    if (blob) download(`nibras-erase.${canClear ? "png" : format}`, blob);
  }

  async function copyNow() {
    const blob = await compose();
    if (!blob) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setNote(t.copy);
    } catch {
      setNote(t.fail);
    }
  }

  return (
    <div className="files-tool">
      <section className="files-card">
        <label className="files-drop">
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => pick(e.target.files?.[0] ?? null)} />
          <b>{t.drop}</b>
          <span>{file?.name || t.private}</span>
        </label>
        <div className="erase-row">
          <span>{t.quality}</span>
          {(["small", "medium", "large"] as Quality[]).map((id) => (
            <button key={id} type="button" className={quality === id ? "is-on" : ""} onClick={() => setQuality(id)}>
              {id === "small" ? t.qSmall : id === "medium" ? t.qMedium : t.qLarge}
            </button>
          ))}
        </div>
        <div className="erase-row">
          <span>{t.background}</span>
          {(["clear", "white", "black", "color", "blur", "photo"] as Bg[]).map((id) => (
            <button key={id} type="button" className={bg === id ? "is-on" : ""} onClick={() => setBg(id)}>{t[id]}</button>
          ))}
          {bg === "color" ? <input type="color" value={color} onChange={(e) => setColor(e.target.value)} aria-label={t.color} /> : null}
          {bg === "photo" ? (
            <label className="files-ghost">
              {t.photo}
              <input type="file" accept="image/*" hidden onChange={(e) => {
                const next = e.target.files?.[0];
                if (!next) return;
                if (bgPhoto) URL.revokeObjectURL(bgPhoto);
                setBgPhoto(URL.createObjectURL(next));
              }} />
            </label>
          ) : null}
        </div>
        <div className="erase-row">
          <span>{t.format}</span>
          {(["png", "jpeg", "webp"] as Format[]).map((id) => (
            <button key={id} type="button" className={format === id ? "is-on" : ""} onClick={() => setFormat(id)}>{id.toUpperCase()}</button>
          ))}
        </div>
        <label className="erase-slider"><span>{t.pad} {pad}%</span><input type="range" min={0} max={30} value={pad} onChange={(e) => setPad(Number(e.target.value))} /></label>
        <label className="erase-slider">
          <span>{t.size}</span>
          <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
            <option value={0}>{lang === "az" ? "Orijinal" : "Original"}</option>
            {SIZES.filter(Boolean).map((px) => <option key={px} value={px}>{px}px</option>)}
          </select>
        </label>
        <label className="erase-check"><input type="checkbox" checked={shadow} onChange={(e) => setShadow(e.target.checked)} />{t.shadow}</label>
        <label className="erase-check"><input type="checkbox" checked={circle} onChange={(e) => setCircle(e.target.checked)} />{t.circle}</label>
        <label className="erase-check"><input type="checkbox" checked={flip} onChange={(e) => setFlip(e.target.checked)} />{t.flip}</label>
        <label className="erase-check"><input type="checkbox" checked={trim} onChange={(e) => setTrim(e.target.checked)} />{t.trim}</label>
        {readyCut ? (
          <>
            <div className="erase-row">
              <span>{t.hand}</span>
              <button type="button" className={hand === "erase" ? "is-on" : ""} onClick={() => setHand("erase")}>{t.erase}</button>
              <button type="button" className={hand === "restore" ? "is-on" : ""} onClick={() => setHand("restore")}>{t.restore}</button>
            </div>
            <label className="erase-slider"><span>{t.brush} {brush}</span><input type="range" min={8} max={90} value={brush} onChange={(e) => setBrush(Number(e.target.value))} /></label>
            <label className="erase-slider"><span>{t.edge}</span><input type="range" min={-4} max={4} value={edge} onChange={(e) => applyEdge(Number(e.target.value))} /></label>
            <p className="files-lead">{t.hint}</p>
          </>
        ) : null}
        {source || preview ? (
          <div className="files-compare erase-edit">
            {source ? <img src={source} alt="" /> : null}
            <div className={`erase-stage${canClear ? " is-cut" : ""}`}>
              {preview ? <img src={preview} alt="" /> : null}
              {readyCut ? (
                <canvas
                  ref={paintRef}
                  className={hand === "off" ? "" : "is-hand"}
                  onPointerDown={pointerDown}
                  onPointerMove={pointerMove}
                  onPointerUp={pointerUp}
                  onPointerCancel={pointerUp}
                />
              ) : null}
            </div>
          </div>
        ) : null}
        {busy ? <div className="erase-bar"><span style={{ width: `${progress}%` }} /></div> : null}
        <div className="files-actions">
          <button type="button" className="files-run" disabled={busy || !file} onClick={run}>{busy ? t.working : t.run}</button>
          {readyCut ? <button type="button" className="files-ghost" onClick={exportNow}>{t.download}</button> : null}
          {readyCut ? <button type="button" className="files-ghost" onClick={copyNow}>{t.copy}</button> : null}
          {file ? <button type="button" className="files-ghost" onClick={() => pick(null)}>{t.again}</button> : null}
        </div>
      </section>
      {note ? <p className="files-note">{note}</p> : null}
    </div>
  );
}
