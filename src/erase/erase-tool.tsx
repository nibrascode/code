import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const COPY: Record<Lang, {
  drop: string;
  run: string;
  working: string;
  ready: string;
  empty: string;
  private: string;
  again: string;
  download: string;
  wait: string;
  fail: string;
}> = {
  az: {
    drop: "Şəkil seç",
    run: "Fonu sil",
    working: "İşlənir…",
    ready: "Hazırdır. PNG endirildi.",
    empty: "Əvvəl şəkil seç",
    private: "Şəkil cihazda qalır. Hesab lazım deyil.",
    again: "Başqa şəkil",
    download: "Yenidən yüklə",
    wait: "İlk dəfə model yüklənir. Bir az çəkə bilər.",
    fail: "Fon silinmədi. Başqa şəkil yoxla.",
  },
  en: {
    drop: "Choose a photo",
    run: "Remove background",
    working: "Working…",
    ready: "Done. PNG downloaded.",
    empty: "Choose a photo first",
    private: "The photo stays on your device. No account.",
    again: "Another photo",
    download: "Download again",
    wait: "The model loads the first time. This can take a moment.",
    fail: "Could not remove the background. Try another photo.",
  },
  tr: {
    drop: "Fotoğraf seç",
    run: "Arka planı sil",
    working: "İşleniyor…",
    ready: "Hazır. PNG indirildi.",
    empty: "Önce fotoğraf seç",
    private: "Fotoğraf cihazda kalır. Hesap gerekmez.",
    again: "Başka fotoğraf",
    download: "Yeniden indir",
    wait: "Model ilk seferde iner. Biraz sürebilir.",
    fail: "Arka plan silinemedi. Başka fotoğraf dene.",
  },
  ar: {
    drop: "اختر صورة",
    run: "أزل الخلفية",
    working: "جارٍ العمل…",
    ready: "تم. نُزّل PNG.",
    empty: "اختر صورة أولاً",
    private: "الصورة تبقى على جهازك. بلا حساب.",
    again: "صورة أخرى",
    download: "نزّل مرة أخرى",
    wait: "يُحمَّل النموذج أول مرة. قد يستغرق لحظة.",
    fail: "تعذّرت إزالة الخلفية. جرّب صورة أخرى.",
  },
  ru: {
    drop: "Выберите фото",
    run: "Удалить фон",
    working: "Обработка…",
    ready: "Готово. PNG скачан.",
    empty: "Сначала выберите фото",
    private: "Фото остаётся на устройстве. Аккаунт не нужен.",
    again: "Другое фото",
    download: "Скачать снова",
    wait: "Модель грузится один раз. Это может занять время.",
    fail: "Не удалось убрать фон. Попробуйте другое фото.",
  },
};

function download(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function EraseTool() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const [file, setFile] = useState<File | null>(null);
  const [source, setSource] = useState("");
  const [result, setResult] = useState("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");

  function pick(next: File | null) {
    if (source) URL.revokeObjectURL(source);
    if (result) URL.revokeObjectURL(result);
    setFile(next);
    setSource(next ? URL.createObjectURL(next) : "");
    setResult("");
    setBlob(null);
    setNote("");
  }

  async function run() {
    if (!file) {
      setNote(t.empty);
      return;
    }
    setBusy(true);
    setNote(t.wait);
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const out = await removeBackground(file);
      if (result) URL.revokeObjectURL(result);
      setResult(URL.createObjectURL(out));
      setBlob(out);
      download("nibras-erase.png", out);
      setNote(t.ready);
    } catch {
      setNote(t.fail);
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
        {source || result ? (
          <div className="files-compare">
            {source ? <img src={source} alt="" /> : null}
            {result ? <img className="is-cut" src={result} alt="" /> : null}
          </div>
        ) : null}
        <div className="files-actions">
          <button type="button" className="files-run" disabled={busy || !file} onClick={run}>
            {busy ? t.working : t.run}
          </button>
          {blob ? (
            <button type="button" className="files-ghost" onClick={() => download("nibras-erase.png", blob)}>
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
