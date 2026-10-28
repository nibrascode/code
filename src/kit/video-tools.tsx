import { useEffect, useMemo, useRef, useState } from "react";
import type { FFmpeg } from "@ffmpeg/ffmpeg";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { KitShell, kb, ui } from "./shell";
import { VIDEO_KIT } from "./video-meta";

export const VIDEO_TOOLS = ["trim", "convert", "merge", "audio"] as const;
export type VideoTool = (typeof VIDEO_TOOLS)[number];
export const isVideoTool = (v: string): v is VideoTool => (VIDEO_TOOLS as readonly string[]).includes(v);
export const VIDEO_FAMILY = ["/video", "/video/trim", "/video/convert", "/video/merge", "/video/audio"];

const T: Record<Lang, Record<string, string>> = {
  az: { pick: "Video seçin", picks: "Videoları seçin", drop: "və ya bura buraxın", loading: "Video mühərriki yüklənir (~30 MB, bir dəfə)…", ready: "Hazırdır", start: "Başlanğıc (san)", end: "Son (san)", fast: "Sürətli (yenidən kodlaşdırmadan)", run: "Başla", working: "İşlənir", download: "Yüklə", before: "Əvvəl", after: "Sonra", fail: "Alınmadı. Başqa format və ya daha kiçik video yoxlayın.", format: "Format", width: "En", fps: "Kadr/san", orig: "Orijinal", up: "Yuxarı", down: "Aşağı", remove: "Sil", add: "Video əlavə et", need2: "Ən azı 2 video seçin.", setStart: "Bu an başlanğıc", setEnd: "Bu an son", engineFail: "Mühərrik yüklənmədi. Səhifəni yeniləyin.", open: "Aç" },
  en: { pick: "Choose a video", picks: "Choose videos", drop: "or drop here", loading: "Loading the video engine (~30 MB, once)…", ready: "Ready", start: "Start (s)", end: "End (s)", fast: "Fast (no re-encode)", run: "Start", working: "Working", download: "Download", before: "Before", after: "After", fail: "That did not work. Try another format or a smaller video.", format: "Format", width: "Width", fps: "FPS", orig: "Original", up: "Up", down: "Down", remove: "Remove", add: "Add video", need2: "Choose at least 2 videos.", setStart: "Set start here", setEnd: "Set end here", engineFail: "The engine did not load. Reload the page.", open: "Open" },
  tr: { pick: "Video seçin", picks: "Videoları seçin", drop: "veya buraya bırakın", loading: "Video motoru yükleniyor (~30 MB, bir kez)…", ready: "Hazır", start: "Başlangıç (sn)", end: "Bitiş (sn)", fast: "Hızlı (yeniden kodlamasız)", run: "Başlat", working: "İşleniyor", download: "İndir", before: "Önce", after: "Sonra", fail: "Olmadı. Başka biçim veya daha küçük video deneyin.", format: "Biçim", width: "Genişlik", fps: "Kare/sn", orig: "Orijinal", up: "Yukarı", down: "Aşağı", remove: "Sil", add: "Video ekle", need2: "En az 2 video seçin.", setStart: "Başlangıç burası", setEnd: "Bitiş burası", engineFail: "Motor yüklenmedi. Sayfayı yenileyin.", open: "Aç" },
  ar: { pick: "اختر فيديو", picks: "اختر الفيديوهات", drop: "أو أفلته هنا", loading: "جارٍ تحميل محرك الفيديو (~30 ميغابايت، مرة واحدة)…", ready: "جاهز", start: "البداية (ث)", end: "النهاية (ث)", fast: "سريع (بلا إعادة ترميز)", run: "ابدأ", working: "جارٍ المعالجة", download: "تنزيل", before: "قبل", after: "بعد", fail: "لم ينجح. جرّب صيغة أخرى أو فيديو أصغر.", format: "الصيغة", width: "العرض", fps: "إطار/ث", orig: "الأصلي", up: "أعلى", down: "أسفل", remove: "حذف", add: "إضافة فيديو", need2: "اختر فيديوهين على الأقل.", setStart: "البداية هنا", setEnd: "النهاية هنا", engineFail: "لم يُحمَّل المحرك. أعد تحميل الصفحة.", open: "فتح" },
  ru: { pick: "Выбрать видео", picks: "Выбрать видео", drop: "или перетащите сюда", loading: "Загружается видеодвижок (~30 МБ, один раз)…", ready: "Готово", start: "Начало (с)", end: "Конец (с)", fast: "Быстро (без перекодирования)", run: "Начать", working: "Обработка", download: "Скачать", before: "До", after: "После", fail: "Не получилось. Попробуйте другой формат или видео поменьше.", format: "Формат", width: "Ширина", fps: "Кадр/с", orig: "Исходная", up: "Вверх", down: "Вниз", remove: "Убрать", add: "Добавить видео", need2: "Выберите минимум 2 видео.", setStart: "Начало здесь", setEnd: "Конец здесь", engineFail: "Движок не загрузился. Обновите страницу.", open: "Открыть" },
};

let ffPromise: Promise<FFmpeg> | null = null;
/** ffmpeg.wasm is fetched only when a video tool page is opened. */
function getFF(): Promise<FFmpeg> {
  if (!ffPromise) {
    ffPromise = (async () => {
      const { FFmpeg } = await import("@ffmpeg/ffmpeg");
      const ff = new FFmpeg();
      const base = `${location.origin}/ffmpeg`;
      await ff.load({ coreURL: `${base}/ffmpeg-core.js`, wasmURL: `${base}/ffmpeg-core.wasm` });
      return ff;
    })().catch((e) => { ffPromise = null; throw e; });
  }
  return ffPromise;
}

const extOf = (n: string) => (n.match(/\.([a-z0-9]+)$/i)?.[1] ?? "mp4").toLowerCase();
const baseName = (n: string) => n.replace(/\.[^.]+$/, "") || "video";
const MIME: Record<string, string> = { mp4: "video/mp4", webm: "video/webm", gif: "image/gif", mp3: "audio/mpeg", m4a: "audio/mp4", wav: "audio/wav", mov: "video/quicktime", mkv: "video/x-matroska" };

function useEngine() {
  const [ff, setFF] = useState<FFmpeg | null>(null);
  const [err, setErr] = useState(false);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let dead = false;
    getFF().then((f) => { if (!dead) setFF(f); }).catch(() => !dead && setErr(true));
    return () => { dead = true; };
  }, []);
  useEffect(() => {
    if (!ff) return;
    const on = ({ progress }: { progress: number }) => setPct(Math.max(0, Math.min(100, Math.round(progress * 100))));
    ff.on("progress", on);
    return () => ff.off("progress", on);
  }, [ff]);
  return { ff, err, pct, setPct };
}

async function run(ff: FFmpeg, inputs: File[], args: (names: string[]) => string[], out: string): Promise<Blob> {
  const { fetchFile } = await import("@ffmpeg/util");
  const names = inputs.map((f, i) => `in${i}.${extOf(f.name)}`);
  for (let i = 0; i < inputs.length; i++) await ff.writeFile(names[i], await fetchFile(inputs[i]));
  try {
    const code = await ff.exec(args(names));
    const data = (await ff.readFile(out)) as Uint8Array;
    if (code !== 0 && !data.length) throw new Error("ffmpeg");
    if (!data.length) throw new Error("empty");
    return new Blob([data.slice().buffer], { type: MIME[extOf(out)] ?? "application/octet-stream" });
  } finally {
    for (const n of [...names, out]) await ff.deleteFile(n).catch(() => {});
  }
}

function Picker({ t, multiple, onFiles }: { t: Record<string, string>; multiple?: boolean; onFiles: (f: File[]) => void }) {
  return (
    <label className={ui.drop} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onFiles([...e.dataTransfer.files].filter((f) => f.type.startsWith("video/") || /\.(mp4|mov|mkv|webm|avi|m4v|3gp)$/i.test(f.name))); }}>
      <span><b>{multiple ? t.picks : t.pick}</b><br /><span className="text-muted">{t.drop}</span></span>
      <input className="sr-only" type="file" accept="video/*,.mkv,.avi,.mov" multiple={multiple} onChange={(e) => { onFiles([...(e.target.files ?? [])]); e.target.value = ""; }} data-testid="video-pick" />
    </label>
  );
}

function Status({ t, ff, err, busy, pct }: { t: Record<string, string>; ff: FFmpeg | null; err: boolean; busy: boolean; pct: number }) {
  if (err) return <p className="mb-3 text-sm text-red-400">{t.engineFail}</p>;
  if (!ff) return <p className="mb-3 text-sm text-muted" data-testid="video-engine">{t.loading}</p>;
  if (busy) return (
    <div className="mb-3 text-sm"><span>{t.working}… {pct}%</span><div className="mt-1 h-2 w-full overflow-hidden rounded bg-white/10"><div className="h-full bg-[#2f6bff]" style={{ width: `${pct}%` }} /></div></div>
  );
  return <p className="mb-3 text-sm text-muted" data-testid="video-ready">{t.ready}</p>;
}

function Out({ t, before, blob, name }: { t: Record<string, string>; before: number; blob: Blob | null; name: string }) {
  const url = useMemo(() => (blob ? URL.createObjectURL(blob) : ""), [blob]);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  if (!blob) return null;
  const kind = blob.type.split("/")[0];
  return (
    <div className="mt-4 space-y-3">
      {blob.type === "image/gif" ? <img src={url} alt="" className="max-h-80 rounded-xl" /> : kind === "audio" ? <audio src={url} controls className="w-full" /> : <video src={url} controls className="max-h-80 w-full rounded-xl bg-black" />}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {before ? <span>{t.before}: {kb(before)}</span> : null}<span>{t.after}: {kb(blob.size)}</span>
        <a className={ui.primary} href={url} download={name} data-testid="video-download">{t.download}</a>
      </div>
    </div>
  );
}

function Opts<V extends string | number>({ label, v, set, opts }: { label: string; v: V; set: (v: V) => void; opts: [V, string][] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="w-24 shrink-0">{label}</span>
      {opts.map(([id, l]) => <button key={String(id)} type="button" className={`${ui.btn} ${v === id ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`} onClick={() => set(id)}>{l}</button>)}
    </div>
  );
}

function useJob() {
  const eng = useEngine();
  const [busy, setBusy] = useState(false);
  const [out, setOut] = useState<Blob | null>(null);
  const [fail, setFail] = useState(false);
  const go = async (fn: (ff: FFmpeg) => Promise<Blob>) => {
    if (!eng.ff || busy) return;
    setBusy(true); setFail(false); setOut(null); eng.setPct(0);
    try { setOut(await fn(eng.ff)); } catch { setFail(true); } finally { setBusy(false); }
  };
  return { ...eng, busy, out, fail, go, setOut };
}

function Trim({ t }: { t: Record<string, string> }) {
  const job = useJob();
  const [file, setFile] = useState<File | null>(null);
  const [dur, setDur] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [fast, setFast] = useState(true);
  const vid = useRef<HTMLVideoElement>(null);
  const src = useMemo(() => (file ? URL.createObjectURL(file) : ""), [file]);
  useEffect(() => () => { if (src) URL.revokeObjectURL(src); }, [src]);
  const ext = file ? extOf(file.name) : "mp4";
  const outExt = fast ? ext : "mp4";
  const r = (n: number) => Math.round(n * 10) / 10;
  return (
    <div className="space-y-3">
      <Status t={t} ff={job.ff} err={job.err} busy={job.busy} pct={job.pct} />
      <Picker t={t} onFiles={(f) => { if (f[0]) { setFile(f[0]); job.setOut(null); } }} />
      {file ? (
        <>
          <video ref={vid} src={src} controls className="max-h-80 w-full rounded-xl bg-black" onLoadedMetadata={(e) => { const d = e.currentTarget.duration || 0; setDur(d); setA(0); setB(r(d)); }} />
          <div className="flex flex-wrap gap-2">
            <button type="button" className={ui.btn} onClick={() => setA(r(vid.current?.currentTime ?? 0))}>{t.setStart}</button>
            <button type="button" className={ui.btn} onClick={() => setB(r(vid.current?.currentTime ?? dur))}>{t.setEnd}</button>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <label>{t.start}<input className={ui.field} type="number" min={0} step={0.1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
            <label>{t.end}<input className={ui.field} type="number" min={0} step={0.1} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
          </div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={fast} onChange={(e) => setFast(e.target.checked)} />{t.fast}</label>
          <button type="button" className={ui.primary} disabled={!job.ff || job.busy || b <= a} data-testid="video-run"
            onClick={() => job.go((ff) => run(ff, [file], ([n]) => ["-ss", String(a), "-i", n, "-t", String(r(b - a)), ...(fast ? ["-c", "copy", "-avoid_negative_ts", "make_zero"] : ["-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-c:a", "aac", "-movflags", "+faststart"]), `out.${outExt}`], `out.${outExt}`))}>{t.run}</button>
        </>
      ) : null}
      {job.fail ? <p className="text-sm text-red-400">{t.fail}</p> : null}
      <Out t={t} before={file?.size ?? 0} blob={job.out} name={`${baseName(file?.name ?? "video")}-kesik.${outExt}`} />
    </div>
  );
}

function Convert({ t }: { t: Record<string, string> }) {
  const job = useJob();
  const [file, setFile] = useState<File | null>(null);
  const [fmt, setFmt] = useState<"mp4" | "webm" | "gif">("mp4");
  const [w, setW] = useState(0);
  const [fps, setFps] = useState(12);
  const isGif = fmt === "gif";
  const width = isGif && !w ? 480 : w;
  const scale = width ? [`scale=${width}:-2:flags=lanczos`] : [];
  const args = (n: string): string[] => {
    if (fmt === "gif") return ["-i", n, "-vf", `fps=${fps},${scale[0] ?? "scale=480:-2"},split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`, "-loop", "0", "out.gif"];
    const vf = scale.length ? ["-vf", scale[0]] : [];
    if (fmt === "webm") return ["-i", n, ...vf, "-c:v", "libvpx", "-b:v", "1M", "-deadline", "realtime", "-cpu-used", "8", "-c:a", "libvorbis", "out.webm"];
    return ["-i", n, ...vf, "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p", "-c:a", "aac", "-movflags", "+faststart", "out.mp4"];
  };
  return (
    <div className="space-y-3">
      <Status t={t} ff={job.ff} err={job.err} busy={job.busy} pct={job.pct} />
      <Picker t={t} onFiles={(f) => { if (f[0]) { setFile(f[0]); job.setOut(null); } }} />
      {file ? <p className="text-sm">{file.name} · {kb(file.size)}</p> : null}
      <Opts label={t.format} v={fmt} set={setFmt} opts={[["mp4", "MP4"], ["webm", "WebM"], ["gif", "GIF"]]} />
      <Opts label={t.width} v={w} set={setW} opts={[[0, isGif ? "480 px" : t.orig], [320, "320"], [640, "640"], [1280, "1280"]]} />
      {isGif ? <Opts label={t.fps} v={fps} set={setFps} opts={[[8, "8"], [12, "12"], [15, "15"], [24, "24"]]} /> : null}
      <button type="button" className={ui.primary} disabled={!file || !job.ff || job.busy} data-testid="video-run"
        onClick={() => file && job.go((ff) => run(ff, [file], ([n]) => args(n), `out.${fmt}`))}>{t.run}</button>
      {job.fail ? <p className="text-sm text-red-400">{t.fail}</p> : null}
      <Out t={t} before={file?.size ?? 0} blob={job.out} name={`${baseName(file?.name ?? "video")}.${fmt}`} />
    </div>
  );
}

function Merge({ t }: { t: Record<string, string> }) {
  const job = useJob();
  const [files, setFiles] = useState<File[]>([]);
  const [h, setH] = useState(720);
  const move = (i: number, d: number) => setFiles((l) => { const n = [...l]; const j = i + d; if (j < 0 || j >= n.length) return l; [n[i], n[j]] = [n[j], n[i]]; return n; });
  const args = (names: string[]) => {
    const W = Math.round((h * 16) / 9 / 2) * 2;
    const parts = names.map((_, i) => `[${i}:v]scale=${W}:${h}:force_original_aspect_ratio=decrease,pad=${W}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30,format=yuv420p[v${i}];[${i}:a]aresample=44100,aformat=channel_layouts=stereo[a${i}]`);
    const cat = names.map((_, i) => `[v${i}][a${i}]`).join("") + `concat=n=${names.length}:v=1:a=1[v][a]`;
    return [...names.flatMap((n) => ["-i", n]), "-filter_complex", `${parts.join(";")};${cat}`, "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-c:a", "aac", "-movflags", "+faststart", "out.mp4"];
  };
  const argsNoAudio = (names: string[]) => {
    const W = Math.round((h * 16) / 9 / 2) * 2;
    const parts = names.map((_, i) => `[${i}:v]scale=${W}:${h}:force_original_aspect_ratio=decrease,pad=${W}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30,format=yuv420p[v${i}]`);
    return [...names.flatMap((n) => ["-i", n]), "-filter_complex", `${parts.join(";")};${names.map((_, i) => `[v${i}]`).join("")}concat=n=${names.length}:v=1:a=0[v]`, "-map", "[v]", "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-movflags", "+faststart", "out.mp4"];
  };
  return (
    <div className="space-y-3">
      <Status t={t} ff={job.ff} err={job.err} busy={job.busy} pct={job.pct} />
      <Picker t={t} multiple onFiles={(f) => { setFiles((l) => [...l, ...f]); job.setOut(null); }} />
      {files.length ? (
        <ol className="space-y-2 text-sm">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex flex-wrap items-center gap-2 rounded-xl border border-white/10 px-3 py-2">
              <span className="min-w-0 flex-1 truncate">{i + 1}. {f.name} · {kb(f.size)}</span>
              <button type="button" className={ui.btn} onClick={() => move(i, -1)} aria-label={t.up}>↑</button>
              <button type="button" className={ui.btn} onClick={() => move(i, 1)} aria-label={t.down}>↓</button>
              <button type="button" className={ui.btn} onClick={() => setFiles((l) => l.filter((_, j) => j !== i))}>{t.remove}</button>
            </li>
          ))}
        </ol>
      ) : null}
      {files.length === 1 ? <p className="text-sm text-muted">{t.need2}</p> : null}
      <Opts label="" v={h} set={setH} opts={[[480, "480p"], [720, "720p"], [1080, "1080p"]]} />
      <button type="button" className={ui.primary} disabled={files.length < 2 || !job.ff || job.busy} data-testid="video-run"
        onClick={() => job.go(async (ff) => { try { return await run(ff, files, args, "out.mp4"); } catch { return run(ff, files, argsNoAudio, "out.mp4"); } })}>{t.run}</button>
      {job.fail ? <p className="text-sm text-red-400">{t.fail}</p> : null}
      <Out t={t} before={files.reduce((s, f) => s + f.size, 0)} blob={job.out} name="nibras-video.mp4" />
    </div>
  );
}

function Audio({ t }: { t: Record<string, string> }) {
  const job = useJob();
  const [file, setFile] = useState<File | null>(null);
  const [fmt, setFmt] = useState<"mp3" | "m4a" | "wav">("mp3");
  const args = (n: string): string[] =>
    fmt === "mp3" ? ["-i", n, "-vn", "-c:a", "libmp3lame", "-q:a", "2", "out.mp3"]
    : fmt === "wav" ? ["-i", n, "-vn", "-c:a", "pcm_s16le", "out.wav"]
    : ["-i", n, "-vn", "-c:a", "aac", "-b:a", "192k", "out.m4a"];
  return (
    <div className="space-y-3">
      <Status t={t} ff={job.ff} err={job.err} busy={job.busy} pct={job.pct} />
      <Picker t={t} onFiles={(f) => { if (f[0]) { setFile(f[0]); job.setOut(null); } }} />
      {file ? <p className="text-sm">{file.name} · {kb(file.size)}</p> : null}
      <Opts label={t.format} v={fmt} set={setFmt} opts={[["mp3", "MP3"], ["m4a", "M4A"], ["wav", "WAV"]]} />
      <button type="button" className={ui.primary} disabled={!file || !job.ff || job.busy} data-testid="video-run"
        onClick={() => file && job.go((ff) => run(ff, [file], ([n]) => args(n), `out.${fmt}`))}>{t.run}</button>
      {job.fail ? <p className="text-sm text-red-400">{t.fail}</p> : null}
      <Out t={t} before={file?.size ?? 0} blob={job.out} name={`${baseName(file?.name ?? "video")}.${fmt}`} />
    </div>
  );
}

export function VideoToolPage({ tool }: { tool: VideoTool }) {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const C = { trim: Trim, convert: Convert, merge: Merge, audio: Audio }[tool];
  return (
    <KitShell path={`/video/${tool}`} lang={lang} next={[...VIDEO_FAMILY, "/voice"]}>
      {mounted ? <C t={t} /> : <div className="h-40 animate-pulse rounded-2xl bg-white/5" />}
    </KitShell>
  );
}

export function VideoHubPage() {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  return (
    <KitShell path="/video" lang={lang} next={["/image", "/pdf/merge", "/zip"]}>
      <div className="grid gap-3 sm:grid-cols-2">
        {VIDEO_TOOLS.map((id) => {
          const k = VIDEO_KIT[`/video/${id}`][lang];
          return (
            <a key={id} href={localeHref(lang, `/video/${id}`)} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10" data-testid={`video-card-${id}`}>
              <b className="block">{k.h1}</b>
              <span className="mt-1 block text-sm text-muted">{k.lead}</span>
              <span className="mt-2 inline-block text-sm text-[#7aa2ff]">{t.open} →</span>
            </a>
          );
        })}
      </div>
    </KitShell>
  );
}
