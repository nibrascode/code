import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { KitShell, kb, save, ui } from "./shell";

const T: Record<Lang, Record<string, string>> = {
  az: { pack: "ZIP-ə yığ", open: "ZIP-i aç", pickFiles: "Faylları seçin", pickZip: "ZIP faylı seçin", drop: "və ya bura buraxın", name: "Arxiv adı", level: "Sıxma", fast: "Sürətli", best: "Ən kiçik", make: "ZIP hazırla", download: "Yüklə", all: "Hamısını yüklə", bad: "Bu ZIP açılmadı. Parollu ZIP, RAR və 7z dəstəklənmir.", files: "fayl", total: "Cəmi", remove: "Sil" },
  en: { pack: "Make a ZIP", open: "Open a ZIP", pickFiles: "Choose files", pickZip: "Choose a ZIP file", drop: "or drop here", name: "Archive name", level: "Compression", fast: "Fast", best: "Smallest", make: "Make ZIP", download: "Download", all: "Download all", bad: "Could not open this ZIP. Password ZIP, RAR and 7z are not supported.", files: "files", total: "Total", remove: "Remove" },
  tr: { pack: "ZIP'e topla", open: "ZIP aç", pickFiles: "Dosyaları seçin", pickZip: "ZIP dosyası seçin", drop: "veya buraya bırakın", name: "Arşiv adı", level: "Sıkıştırma", fast: "Hızlı", best: "En küçük", make: "ZIP hazırla", download: "İndir", all: "Hepsini indir", bad: "ZIP açılamadı. Parolalı ZIP, RAR ve 7z desteklenmez.", files: "dosya", total: "Toplam", remove: "Kaldır" },
  ar: { pack: "إنشاء ZIP", open: "فتح ZIP", pickFiles: "اختر الملفات", pickZip: "اختر ملف ZIP", drop: "أو أفلته هنا", name: "اسم الأرشيف", level: "الضغط", fast: "سريع", best: "الأصغر", make: "إعداد ZIP", download: "تنزيل", all: "تنزيل الكل", bad: "تعذر فتح ZIP. لا يُدعم ZIP بكلمة مرور ولا RAR و7z.", files: "ملفات", total: "المجموع", remove: "حذف" },
  ru: { pack: "Сжать в ZIP", open: "Открыть ZIP", pickFiles: "Выберите файлы", pickZip: "Выберите ZIP", drop: "или перетащите сюда", name: "Имя архива", level: "Сжатие", fast: "Быстро", best: "Меньше всего", make: "Собрать ZIP", download: "Скачать", all: "Скачать все", bad: "Не удалось открыть ZIP. ZIP с паролем, RAR и 7z не поддерживаются.", files: "файлов", total: "Всего", remove: "Убрать" },
};

function Drop({ label, hint, multiple, accept, onFiles }: { label: string; hint: string; multiple?: boolean; accept?: string; onFiles: (f: File[]) => void }) {
  return (
    <label className={ui.drop} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onFiles([...e.dataTransfer.files]); }}>
      <span><b>{label}</b><br /><span className="text-muted">{hint}</span></span>
      <input className="sr-only" type="file" multiple={multiple} accept={accept} onChange={(e) => { onFiles([...(e.target.files ?? [])]); e.target.value = ""; }} data-testid={multiple ? "zip-files" : "zip-open"} />
    </label>
  );
}

export function ZipPage() {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [mode, setMode] = useState<"pack" | "open">("pack");
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("archive");
  const [best, setBest] = useState(true);
  const [busy, setBusy] = useState(false);
  const [entries, setEntries] = useState<{ name: string; data: Uint8Array }[]>([]);
  const [err, setErr] = useState("");
  const make = async () => {
    setBusy(true);
    try {
      const { zip } = await import("fflate");
      const map: Record<string, [Uint8Array, { level: 0 | 6 | 9 }]> = {};
      for (const f of files) {
        let n = (f as File & { webkitRelativePath?: string }).webkitRelativePath || f.name;
        let k = 1;
        while (map[n]) n = n.replace(/(\.[^.]*)?$/, (m) => `-${k++}${m}`);
        const pre = /\.(zip|jpe?g|png|webp|gif|mp4|mp3|m4a|docx|xlsx|pptx|pdf|7z|rar|gz)$/i.test(f.name);
        map[n] = [new Uint8Array(await f.arrayBuffer()), { level: pre ? 0 : best ? 9 : 6 }];
      }
      const out = await new Promise<Uint8Array>((res, rej) => zip(map, (e, d) => (e ? rej(e) : res(d))));
      save(`${(name.trim() || "archive").replace(/\.zip$/i, "")}.zip`, new Blob([out as BlobPart], { type: "application/zip" }));
    } finally { setBusy(false); }
  };
  const open = async (f: File[]) => {
    if (!f[0]) return;
    setErr(""); setEntries([]); setBusy(true);
    try {
      const { unzip } = await import("fflate");
      const buf = new Uint8Array(await f[0].arrayBuffer());
      const out = await new Promise<Record<string, Uint8Array>>((res, rej) => unzip(buf, (e, d) => (e ? rej(e) : res(d))));
      setEntries(Object.entries(out).filter(([n]) => !n.endsWith("/") && !n.startsWith("__MACOSX/")).map(([n, data]) => ({ name: n, data })));
    } catch { setErr(t.bad); } finally { setBusy(false); }
  };
  const total = files.reduce((a, f) => a + f.size, 0);
  const saveAll = async () => { for (const e of entries) { save(e.name.split("/").pop() || e.name, new Blob([e.data as BlobPart])); await new Promise((r) => setTimeout(r, 350)); } };
  return (
    <KitShell path="/zip" lang={lang} next={["/pdf/merge", "/pdf/compress", "/image/convert", "/image"]}>
      <div className="mb-4 flex gap-2">
        {(["pack", "open"] as const).map((m) => <button key={m} type="button" className={`${ui.btn} ${mode === m ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`} onClick={() => setMode(m)} data-mode={m}>{t[m]}</button>)}
      </div>
      {mode === "pack" ? (
        <div>
          <Drop label={t.pickFiles} hint={t.drop} multiple onFiles={(f) => setFiles((c) => [...c, ...f])} />
          {files.length ? (
            <div className="space-y-3">
              <ul className="max-h-64 space-y-1 overflow-auto text-sm">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5">
                    <span className="min-w-0 flex-1 truncate" dir="ltr">{f.name}</span><span className="text-muted">{kb(f.size)}</span>
                    <button type="button" className="text-muted hover:text-fg" aria-label={t.remove} onClick={() => setFiles((c) => c.filter((_, j) => j !== i))}>×</button>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted">{files.length} {t.files} · {t.total}: {kb(total)}</p>
              <label className="block text-sm"><span className="mb-1 block text-muted">{t.name}</span><input className={ui.field} value={name} onChange={(e) => setName(e.target.value)} /></label>
              <div className="flex items-center gap-2 text-sm"><span className="w-24">{t.level}</span>
                <button type="button" className={`${ui.btn} ${!best ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`} onClick={() => setBest(false)}>{t.fast}</button>
                <button type="button" className={`${ui.btn} ${best ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`} onClick={() => setBest(true)}>{t.best}</button>
              </div>
              <button type="button" className={ui.primary} disabled={busy} onClick={make} data-testid="zip-make">{busy ? "…" : t.make}</button>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <Drop label={t.pickZip} hint={t.drop} accept=".zip,application/zip" onFiles={open} />
          {err ? <p className="text-sm text-red-400">{err}</p> : null}
          {busy ? <p className="text-sm text-muted">…</p> : null}
          {entries.length ? (
            <div className="space-y-2">
              <p className="text-xs text-muted">{entries.length} {t.files} · {t.total}: {kb(entries.reduce((a, e) => a + e.data.byteLength, 0))}</p>
              <ul className="max-h-80 space-y-1 overflow-auto text-sm" data-testid="zip-list">
                {entries.map((e) => (
                  <li key={e.name} className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5">
                    <span className="min-w-0 flex-1 truncate" dir="ltr">{e.name}</span><span className="text-muted">{kb(e.data.byteLength)}</span>
                    <button type="button" className={ui.btn} onClick={() => save(e.name.split("/").pop() || e.name, new Blob([e.data as BlobPart]))}>{t.download}</button>
                  </li>
                ))}
              </ul>
              {entries.length > 1 ? <button type="button" className={ui.primary} onClick={saveAll}>{t.all}</button> : null}
            </div>
          ) : null}
        </div>
      )}
    </KitShell>
  );
}
