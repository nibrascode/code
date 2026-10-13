import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

type Quality = "small" | "medium" | "large";
type Bg = "clear" | "white" | "black" | "color" | "blur";
type Format = "png" | "jpeg" | "webp";

const COPY: Record<Lang, Record<string, string>> = {
  az: {
    drop: "Şəkil seç",
    run: "Fonu sil",
    working: "İşlənir…",
    ready: "Hazırdır.",
    empty: "Əvvəl şəkil seç",
    private: "Şəkil cihazda qalır. Hesab lazım deyil.",
    again: "Başqa şəkil",
    download: "Yüklə",
    wait: "Model yüklənir…",
    fail: "Fon silinmədi. Başqa şəkil yoxla.",
    quality: "Keyfiyyət",
    qSmall: "Sürətli",
    qMedium: "Orta",
    qLarge: "Ən yaxşı",
    background: "Fon",
    clear: "Şəffaf",
    white: "Ağ",
    black: "Qara",
    color: "Rəng",
    blur: "Bulanıq",
    format: "Format",
    pad: "Boşluq",
    shadow: "Kölgə",
    size: "Ölçü",
  },
  en: {
    drop: "Choose a photo",
    run: "Remove background",
    working: "Working…",
    ready: "Done.",
    empty: "Choose a photo first",
    private: "The photo stays on your device. No account.",
    again: "Another photo",
    download: "Download",
    wait: "Loading the model…",
    fail: "Could not remove the background. Try another photo.",
    quality: "Quality",
    qSmall: "Fast",
    qMedium: "Medium",
    qLarge: "Best",
    background: "Background",
    clear: "Clear",
    white: "White",
    black: "Black",
    color: "Color",
    blur: "Blur",
    format: "Format",
    pad: "Padding",
    shadow: "Shadow",
    size: "Size",
  },
  tr: {
    drop: "Fotoğraf seç",
    run: "Arka planı sil",
    working: "İşleniyor…",
    ready: "Hazır.",
    empty: "Önce fotoğraf seç",
    private: "Fotoğraf cihazda kalır. Hesap gerekmez.",
    again: "Başka fotoğraf",
    download: "İndir",
    wait: "Model yükleniyor…",
    fail: "Arka plan silinemedi. Başka fotoğraf dene.",
    quality: "Kalite",
    qSmall: "Hızlı",
    qMedium: "Orta",
    qLarge: "En iyi",
    background: "Arka plan",
    clear: "Şeffaf",
    white: "Beyaz",
    black: "Siyah",
    color: "Renk",
    blur: "Bulanık",
    format: "Biçim",
    pad: "Boşluk",
    shadow: "Gölge",
    size: "Boyut",
  },
  ar: {
    drop: "اختر صورة",
    run: "أزل الخلفية",
    working: "جارٍ العمل…",
    ready: "تم.",
    empty: "اختر صورة أولاً",
    private: "الصورة تبقى على جهازك. بلا حساب.",
    again: "صورة أخرى",
    download: "تنزيل",
    wait: "يتم تحميل النموذج…",
    fail: "تعذّرت إزالة الخلفية. جرّب صورة أخرى.",
    quality: "الجودة",
    qSmall: "سريع",
    qMedium: "متوسط",
    qLarge: "الأفضل",
    background: "الخلفية",
    clear: "شفاف",
    white: "أبيض",
    black: "أسود",
    color: "لون",
    blur: "ضبابي",
    format: "الصيغة",
    pad: "هامش",
    shadow: "ظل",
    size: "الحجم",
  },
  ru: {
    drop: "Выберите фото",
    run: "Удалить фон",
    working: "Обработка…",
    ready: "Готово.",
    empty: "Сначала выберите фото",
    private: "Фото остаётся на устройстве. Аккаунт не нужен.",
    again: "Другое фото",
    download: "Скачать",
    wait: "Загрузка модели…",
    fail: "Не удалось убрать фон. Попробуйте другое фото.",
    quality: "Качество",
    qSmall: "Быстро",
    qMedium: "Средне",
    qLarge: "Лучшее",
    background: "Фон",
    clear: "Прозрачный",
    white: "Белый",
    black: "Чёрный",
    color: "Цвет",
    blur: "Размытие",
    format: "Формат",
    pad: "Отступ",
    shadow: "Тень",
    size: "Размер",
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

export function EraseTool() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const [file, setFile] = useState<File | null>(null);
  const [source, setSource] = useState("");
  const [cutout, setCutout] = useState("");
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [note, setNote] = useState("");
  const [quality, setQuality] = useState<Quality>("medium");
  const [bg, setBg] = useState<Bg>("clear");
  const [color, setColor] = useState("#f4f1ea");
  const [format, setFormat] = useState<Format>("png");
  const [pad, setPad] = useState(8);
  const [shadow, setShadow] = useState(false);
  const [size, setSize] = useState(0);

  const mime = format === "jpeg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png";
  const canClear = bg === "clear" && format === "png";

  function pick(next: File | null) {
    if (source) URL.revokeObjectURL(source);
    if (cutout) URL.revokeObjectURL(cutout);
    if (preview) URL.revokeObjectURL(preview);
    setFile(next);
    setSource(next ? URL.createObjectURL(next) : "");
    setCutout("");
    setPreview("");
    setProgress(0);
    setNote("");
  }

  async function compose(cutoutUrl: string, originalUrl: string) {
    const subject = await loadImage(cutoutUrl);
    const original = await loadImage(originalUrl);
    const padPx = Math.round((Math.max(subject.width, subject.height) * pad) / 100);
    const width = subject.width + padPx * 2;
    const height = subject.height + padPx * 2;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;

    if (bg === "blur") {
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
      ctx.drawImage(subject, padPx + 8, padPx + 18, subject.width, subject.height);
      ctx.restore();
    }
    ctx.drawImage(subject, padPx, padPx);

    let out = canvas;
    if (size > 0 && Math.max(width, height) > size) {
      const scale = size / Math.max(width, height);
      const resized = document.createElement("canvas");
      resized.width = Math.round(width * scale);
      resized.height = Math.round(height * scale);
      resized.getContext("2d")!.drawImage(canvas, 0, 0, resized.width, resized.height);
      out = resized;
    }

    const blob = await canvasBlob(out, canClear ? "image/png" : mime, 0.92);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(blob));
    return blob;
  }

  useEffect(() => {
    if (!cutout || !source || busy) return;
    let alive = true;
    compose(cutout, source).then(() => {
      if (!alive) return;
    });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cutout, bg, color, pad, shadow, size, format]);

  async function exportNow() {
    if (!cutout || !source) return;
    const blob = await compose(cutout, source);
    download(`nibras-erase.${canClear ? "png" : format}`, blob);
    setNote(t.ready);
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
      const out = await removeBackground(file, {
        model: quality,
        device: "gpu",
        output: { format: "image/png", quality: 1 },
        progress: (_key, current, total) => {
          if (total > 0) setProgress(Math.min(96, Math.round((current / total) * 100)));
        },
      });
      if (cutout) URL.revokeObjectURL(cutout);
      const url = URL.createObjectURL(out);
      setCutout(url);
      setProgress(100);
      await compose(url, source);
      setNote(t.ready);
    } catch {
      try {
        const { removeBackground } = await import("@imgly/background-removal");
        const out = await removeBackground(file, {
          model: quality,
          device: "cpu",
          output: { format: "image/png", quality: 1 },
        });
        const url = URL.createObjectURL(out);
        setCutout(url);
        await compose(url, source);
        setNote(t.ready);
      } catch {
        setNote(t.fail);
      }
    } finally {
      setBusy(false);
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
          {(["clear", "white", "black", "color", "blur"] as Bg[]).map((id) => (
            <button key={id} type="button" className={bg === id ? "is-on" : ""} onClick={() => setBg(id)}>
              {t[id]}
            </button>
          ))}
          {bg === "color" ? <input type="color" value={color} onChange={(e) => setColor(e.target.value)} aria-label={t.color} /> : null}
        </div>
        <div className="erase-row">
          <span>{t.format}</span>
          {(["png", "jpeg", "webp"] as Format[]).map((id) => (
            <button key={id} type="button" className={format === id ? "is-on" : ""} onClick={() => setFormat(id)}>
              {id.toUpperCase()}
            </button>
          ))}
        </div>
        <label className="erase-slider">
          <span>{t.pad} {pad}%</span>
          <input type="range" min={0} max={30} value={pad} onChange={(e) => setPad(Number(e.target.value))} />
        </label>
        <label className="erase-slider">
          <span>{t.size}</span>
          <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
            <option value={0}>{lang === "az" ? "Orijinal" : "Original"}</option>
            {SIZES.filter(Boolean).map((px) => (
              <option key={px} value={px}>{px}px</option>
            ))}
          </select>
        </label>
        <label className="erase-check">
          <input type="checkbox" checked={shadow} onChange={(e) => setShadow(e.target.checked)} />
          {t.shadow}
        </label>

        {source || preview ? (
          <div className="files-compare">
            {source ? <img src={source} alt="" /> : null}
            {preview ? <img className={canClear ? "is-cut" : ""} src={preview} alt="" /> : null}
          </div>
        ) : null}
        {busy ? <div className="erase-bar"><span style={{ width: `${progress}%` }} /></div> : null}
        <div className="files-actions">
          <button type="button" className="files-run" disabled={busy || !file} onClick={run}>
            {busy ? t.working : t.run}
          </button>
          {cutout ? (
            <button type="button" className="files-ghost" onClick={exportNow}>
              {t.download}
            </button>
          ) : null}
          {file ? (
            <button type="button" className="files-ghost" onClick={() => pick(null)}>
              {t.again}
            </button>
          ) : null}
        </div>
      </section>
      {note ? <p className="files-note">{note}</p> : null}
    </div>
  );
}
