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
  az: { pick: "Video seçin", picks: "Videoları seçin", drop: "və ya bura buraxın", loading: "Video mühərriki yüklənir (~30 MB, bir dəfə)…", ready: "Hazırdır", start: "Başlanğıc (san)", end: "Son (san)", fast: "Sürətli (yenidən kodlaşdırmadan)", run: "Başla", working: "İşlənir", download: "Yüklə", before: "Əvvəl", after: "Sonra", fail: "Alınmadı. Başqa format və ya daha kiçik video yoxlayın.", format: "Format", width: "En", fps: "Kadr/san", orig: "Orijinal", up: "Yuxarı", down: "Aşağı", remove: "Sil", add: "Video əlavə et", need2: "Ən azı 2 video seçin.", setStart: "Bu an başlanğıc", setEnd: "Bu an son", engineFail: "Mühərrik yüklənmədi. Səhifəni yeniləyin.", sel: "Seçilən hissə", preview: "Seçimi izlə", hint: "Zolaqda tutub sürüşdürün: sol tutacaq başlanğıc, sağ tutacaq son.", open: "Aç", zIn: "Yaxınlaşdır", zOut: "Uzaqlaşdır", zSel: "Seçimə yaxınlaş", zAll: "Hamısı", frame: "kadr", mode: "Kəsmə üsulu", exact: "Dəqiq (kadra qədər, yenidən kodlaşdırma)", fastShort: "Sürətli (açar kadra yuvarlanır)", keys: "Ox düymələri: 1 kadr · Shift: 1 san · tutacağa klik edib istifadə edin.", goA: "Başlanğıca get", goB: "Sona get" },
  en: { pick: "Choose a video", picks: "Choose videos", drop: "or drop here", loading: "Loading the video engine (~30 MB, once)…", ready: "Ready", start: "Start (s)", end: "End (s)", fast: "Fast (no re-encode)", run: "Start", working: "Working", download: "Download", before: "Before", after: "After", fail: "That did not work. Try another format or a smaller video.", format: "Format", width: "Width", fps: "FPS", orig: "Original", up: "Up", down: "Down", remove: "Remove", add: "Add video", need2: "Choose at least 2 videos.", setStart: "Set start here", setEnd: "Set end here", engineFail: "The engine did not load. Reload the page.", sel: "Selected part", preview: "Play selection", hint: "Drag on the bar: left handle is the start, right handle is the end.", open: "Open", zIn: "Zoom in", zOut: "Zoom out", zSel: "Zoom to selection", zAll: "All", frame: "frame", mode: "Cut mode", exact: "Exact (frame-accurate, re-encode)", fastShort: "Fast (snaps to keyframes)", keys: "Arrow keys: 1 frame · Shift: 1 s · click a handle first.", goA: "Go to start", goB: "Go to end" },
  tr: { pick: "Video seçin", picks: "Videoları seçin", drop: "veya buraya bırakın", loading: "Video motoru yükleniyor (~30 MB, bir kez)…", ready: "Hazır", start: "Başlangıç (sn)", end: "Bitiş (sn)", fast: "Hızlı (yeniden kodlamasız)", run: "Başlat", working: "İşleniyor", download: "İndir", before: "Önce", after: "Sonra", fail: "Olmadı. Başka biçim veya daha küçük video deneyin.", format: "Biçim", width: "Genişlik", fps: "Kare/sn", orig: "Orijinal", up: "Yukarı", down: "Aşağı", remove: "Sil", add: "Video ekle", need2: "En az 2 video seçin.", setStart: "Başlangıç burası", setEnd: "Bitiş burası", engineFail: "Motor yüklenmedi. Sayfayı yenileyin.", sel: "Seçilen kısım", preview: "Seçimi oynat", hint: "Çubukta sürükleyin: sol tutamaç başlangıç, sağ tutamaç bitiş.", open: "Aç", zIn: "Yakınlaştır", zOut: "Uzaklaştır", zSel: "Seçime yakınlaş", zAll: "Tümü", frame: "kare", mode: "Kesme yöntemi", exact: "Hassas (kare kare, yeniden kodlama)", fastShort: "Hızlı (anahtar kareye yuvarlanır)", keys: "Ok tuşları: 1 kare · Shift: 1 sn · önce tutamaca tıklayın.", goA: "Başlangıca git", goB: "Sona git" },
  ar: { pick: "اختر فيديو", picks: "اختر الفيديوهات", drop: "أو أفلته هنا", loading: "جارٍ تحميل محرك الفيديو (~30 ميغابايت، مرة واحدة)…", ready: "جاهز", start: "البداية (ث)", end: "النهاية (ث)", fast: "سريع (بلا إعادة ترميز)", run: "ابدأ", working: "جارٍ المعالجة", download: "تنزيل", before: "قبل", after: "بعد", fail: "لم ينجح. جرّب صيغة أخرى أو فيديو أصغر.", format: "الصيغة", width: "العرض", fps: "إطار/ث", orig: "الأصلي", up: "أعلى", down: "أسفل", remove: "حذف", add: "إضافة فيديو", need2: "اختر فيديوهين على الأقل.", setStart: "البداية هنا", setEnd: "النهاية هنا", engineFail: "لم يُحمَّل المحرك. أعد تحميل الصفحة.", sel: "الجزء المحدد", preview: "تشغيل التحديد", hint: "اسحب على الشريط: المقبض الأيسر للبداية والأيمن للنهاية.", open: "فتح", zIn: "تكبير", zOut: "تصغير", zSel: "تكبير إلى التحديد", zAll: "الكل", frame: "إطار", mode: "طريقة القص", exact: "دقيق (حتى الإطار، إعادة ترميز)", fastShort: "سريع (يلتصق بالإطارات المفتاحية)", keys: "الأسهم: إطار واحد · Shift: ثانية · انقر على المقبض أولاً.", goA: "اذهب إلى البداية", goB: "اذهب إلى النهاية" },
  ru: { pick: "Выбрать видео", picks: "Выбрать видео", drop: "или перетащите сюда", loading: "Загружается видеодвижок (~30 МБ, один раз)…", ready: "Готово", start: "Начало (с)", end: "Конец (с)", fast: "Быстро (без перекодирования)", run: "Начать", working: "Обработка", download: "Скачать", before: "До", after: "После", fail: "Не получилось. Попробуйте другой формат или видео поменьше.", format: "Формат", width: "Ширина", fps: "Кадр/с", orig: "Исходная", up: "Вверх", down: "Вниз", remove: "Убрать", add: "Добавить видео", need2: "Выберите минимум 2 видео.", setStart: "Начало здесь", setEnd: "Конец здесь", engineFail: "Движок не загрузился. Обновите страницу.", sel: "Выбранный фрагмент", preview: "Проиграть выбор", hint: "Тяните по полосе: левый маркер — начало, правый — конец.", open: "Открыть", zIn: "Приблизить", zOut: "Отдалить", zSel: "К выделению", zAll: "Всё", frame: "кадр", mode: "Способ резки", exact: "Точно (до кадра, перекодирование)", fastShort: "Быстро (по ключевым кадрам)", keys: "Стрелки: 1 кадр · Shift: 1 с · сначала нажмите на маркер.", goA: "К началу", goB: "К концу" },
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
    <div className="mb-3 text-sm"><span>{t.working}… {pct}%</span><div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#2f6bff] to-[#8b5cf6] transition-[width]" style={{ width: `${pct}%` }} /></div></div>
  );
  return <p className="mb-3 text-sm text-muted" data-testid="video-ready">{t.ready}</p>;
}

function Out({ t, before, blob, name }: { t: Record<string, string>; before: number; blob: Blob | null; name: string }) {
  const url = useMemo(() => (blob ? URL.createObjectURL(blob) : ""), [blob]);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  if (!blob) return null;
  const kind = blob.type.split("/")[0];
  return (
    <div className="mt-4 space-y-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-3">
      {blob.type === "image/gif" ? <img src={url} alt="" className="max-h-80 rounded-xl" /> : kind === "audio" ? <audio src={url} controls className="w-full" /> : <video src={url} controls className="max-h-80 w-full rounded-2xl bg-black ring-1 ring-white/10" />}
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

const fmt = (n: number, ms = false) => { const m = Math.floor(n / 60); const s = n - m * 60; return `${m}:${s < 10 ? "0" : ""}${s.toFixed(ms ? 3 : 1)}`; };
const r3 = (n: number) => Math.round(n * 1000) / 1000;

/** Range selector with zoom: drag handles or tap the bar; nearest handle jumps there. Always LTR. */
function Timeline({ t, dur, fps, a, b, now, setA, setB, seek }: { t: Record<string, string>; dur: number; fps: number; a: number; b: number; now: number; setA: (n: number) => void; setB: (n: number) => void; seek: (n: number) => void }) {
  const bar = useRef<HTMLDivElement>(null);
  const drag = useRef<"a" | "b" | null>(null);
  const [view, setView] = useState<[number, number]>([0, dur]);
  useEffect(() => setView([0, dur]), [dur]);
  const [v0, v1] = view; const span = Math.max(v1 - v0, 1e-6); const zoomed = span < dur - 1e-3;
  const fr = 1 / fps; const snap = (n: number) => r3(Math.round(n * fps) / fps);
  const at = (x: number) => { const r = bar.current!.getBoundingClientRect(); return snap(Math.max(0, Math.min(dur, v0 + Math.max(0, Math.min(1, (x - r.left) / r.width)) * span))); };
  const apply = (which: "a" | "b", v: number) => { v = Math.max(0, Math.min(dur, v)); if (which === "a") { v = Math.min(v, Math.max(0, b - fr)); setA(r3(v)); } else { v = Math.max(v, Math.min(dur, a + fr)); setB(r3(v)); } seek(v); };
  const zoomTo = (c0: number, c1: number) => { let w = Math.max(c1 - c0, Math.min(dur, fr * 20)); w = Math.min(w, dur); let s0 = Math.max(0, (c0 + c1) / 2 - w / 2); if (s0 + w > dur) s0 = dur - w; setView([s0, s0 + w]); };
  const pcRaw = (n: number) => ((n - v0) / span) * 100;
  const pc = (n: number) => `${Math.max(-2, Math.min(102, pcRaw(n)))}%`;
  const vis = (n: number) => n >= v0 - 1e-6 && n <= v1 + 1e-6;
  const ticks: number[] = []; { const steps = [1 / fps, 0.1, 0.5, 1, 2, 5, 10, 30, 60, 300, 600]; const st = steps.find((x) => span / x <= 10) ?? 1200; for (let x = Math.ceil(v0 / st) * st; x <= v1 + 1e-9; x += st) ticks.push(x); }
  const handle = (w: "a" | "b") => vis(w === "a" ? a : b) ? (
    <div role="slider" aria-label={w === "a" ? t.start : t.end} aria-valuemin={0} aria-valuemax={r3(dur)} aria-valuenow={w === "a" ? a : b} tabIndex={0}
      onKeyDown={(e) => { const d = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : 0; if (d) { e.preventDefault(); apply(w, snap((w === "a" ? a : b) + d * (e.shiftKey ? 1 : fr))); } }}
      onPointerDown={(e) => { e.stopPropagation(); (e.currentTarget as HTMLElement).focus(); drag.current = w; bar.current?.setPointerCapture(e.pointerId); }}
      className="absolute top-1/2 z-10 flex h-11 w-7 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center outline-none focus-visible:[&>span]:ring-2 focus-visible:[&>span]:ring-white" style={{ left: pc(w === "a" ? a : b) }} data-testid={`trim-handle-${w}`}>
      <span className="flex h-12 w-4 items-center justify-center rounded-md bg-gradient-to-b from-[#5b8cff] to-[#2f6bff] shadow-[0_4px_14px_rgba(47,107,255,0.55)] ring-1 ring-white/70 transition-transform active:scale-110"><span className="h-5 w-0.5 rounded-full bg-white/90" /></span>
    </div>
  ) : null;
  const zb = "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs transition hover:border-white/25 hover:bg-white/10 disabled:opacity-40";
  return (
    <div className="space-y-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] sm:p-4">
      <div dir="ltr" className="flex flex-wrap items-center gap-1.5" data-testid="trim-zoom">
        <button type="button" className={zb} onClick={() => zoomTo(v0 + span * 0.25, v1 - span * 0.25)}>＋ {t.zIn}</button>
        <button type="button" className={zb} disabled={!zoomed} onClick={() => zoomTo(v0 - span / 2, v1 + span / 2)}>－ {t.zOut}</button>
        <button type="button" className={zb} onClick={() => zoomTo(a - (b - a) * 0.1, b + (b - a) * 0.1)}>⤢ {t.zSel}</button>
        <button type="button" className={zb} disabled={!zoomed} onClick={() => setView([0, dur])}>{t.zAll}</button>
        {zoomed ? <span className="ml-auto text-xs text-muted">{fmt(v0, true)} – {fmt(v1, true)}</span> : null}
      </div>
      <div dir="ltr" ref={bar} className="relative h-16 cursor-pointer touch-none select-none overflow-hidden rounded-xl bg-black/30 ring-1 ring-inset ring-white/5" data-testid="trim-timeline"
        onWheel={(e) => { if (!e.ctrlKey && Math.abs(e.deltaX) <= Math.abs(e.deltaY) && !e.altKey) return; const c = at(e.clientX); const k = e.deltaY > 0 ? 1.25 : 0.8; zoomTo(c - (c - v0) * k, c + (v1 - c) * k); }}
        onPointerDown={(e) => { const v = at(e.clientX); drag.current = Math.abs(v - a) <= Math.abs(v - b) ? "a" : "b"; bar.current?.setPointerCapture(e.pointerId); apply(drag.current, v); }}
        onPointerMove={(e) => { if (drag.current) apply(drag.current, at(e.clientX)); }}
        onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}>
        {ticks.map((x) => <div key={x} className="pointer-events-none absolute top-0 h-2.5 w-px bg-white/25" style={{ left: pc(x) }} />)}
        <div className="absolute inset-x-2 top-1/2 h-8 -translate-y-1/2 rounded-lg bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0_2px,transparent_2px_6px)]" />
        <div className="absolute top-1/2 h-8 -translate-y-1/2 rounded-md border-y-2 border-[#5b8cff] bg-gradient-to-b from-[#2f6bff]/45 to-[#8b5cf6]/30 shadow-[0_0_24px_rgba(47,107,255,0.35)]" style={{ left: pc(Math.max(a, v0)), width: `${Math.max(0, pcRaw(Math.min(b, v1)) - pcRaw(Math.max(a, v0)))}%` }} />
        {vis(now) ? <div className="pointer-events-none absolute top-1 bottom-1 w-0.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ left: pc(now) }} /> : null}
        {handle("a")}{handle("b")}
      </div>
      {zoomed ? <input dir="ltr" type="range" aria-label="scroll" className="w-full" min={0} max={r3(dur - span)} step={fr} value={v0} onChange={(e) => { const s0 = Number(e.target.value); setView([s0, s0 + span]); }} /> : null}
      <div dir="ltr" className="flex items-center justify-between font-mono text-xs text-muted tabular-nums"><span>{fmt(a, true)}</span><span className="rounded-full bg-[#2f6bff]/15 px-2.5 py-0.5 font-medium text-[#9db8ff]">{t.sel}: {fmt(Math.max(0, b - a), true)} · {Math.round((b - a) * fps)} {t.frame}</span><span>{fmt(b, true)}</span></div>
      <p className="text-xs text-muted">{t.hint} {t.keys}</p>
    </div>
  );
}

function Trim({ t }: { t: Record<string, string> }) {
  const job = useJob();
  const [file, setFile] = useState<File | null>(null);
  const [dur, setDur] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [fast, setFast] = useState(false);
  const [fps, setFps] = useState(30);
  const [now, setNow] = useState(0);
  const stopAt = useRef<number | null>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const src = useMemo(() => (file ? URL.createObjectURL(file) : ""), [file]);
  useEffect(() => () => { if (src) URL.revokeObjectURL(src); }, [src]);
  const ext = file ? extOf(file.name) : "mp4";
  const outExt = fast ? ext : "mp4";
  const fr = 1 / fps;
  const seek = (n: number) => { stopAt.current = null; const v = vid.current; if (v) { v.pause(); v.currentTime = Math.max(0, Math.min(dur, n)); setNow(v.currentTime); } };
  const cur = () => vid.current?.currentTime ?? 0;
  const sb = "min-w-[2.75rem] rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs tabular-nums transition hover:border-white/25 hover:bg-white/10 active:scale-95";
  return (
    <div className="space-y-3">
      <Status t={t} ff={job.ff} err={job.err} busy={job.busy} pct={job.pct} />
      <Picker t={t} onFiles={(f) => { if (f[0]) { setFile(f[0]); job.setOut(null); } }} />
      {file ? (
        <>
          <video ref={vid} src={src} controls className="max-h-[26rem] w-full rounded-2xl bg-black shadow-[0_20px_60px_-20px_rgba(47,107,255,0.45)] ring-1 ring-white/10" onLoadedMetadata={(e) => { const d = e.currentTarget.duration || 0; setDur(d); setA(0); setB(r3(d)); }}
            onTimeUpdate={(e) => { const c = e.currentTarget.currentTime; setNow(c); if (stopAt.current !== null && c >= stopAt.current) { e.currentTarget.pause(); stopAt.current = null; } }} />
          {dur > 0 ? <Timeline t={t} dur={dur} fps={fps} a={a} b={b} now={now} setA={setA} setB={setB} seek={seek} /> : null}
          <div dir="ltr" className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-2.5" data-testid="trim-step">
            <button type="button" className={sb} onClick={() => seek(cur() - 1)}>−1s</button>
            <button type="button" className={sb} onClick={() => seek(cur() - fr)}>−1 {t.frame}</button>
            <span className="rounded-lg bg-black/40 px-3 py-1.5 font-mono text-sm tabular-nums ring-1 ring-white/10">{fmt(now, true)}</span>
            <button type="button" className={sb} onClick={() => seek(cur() + fr)}>+1 {t.frame}</button>
            <button type="button" className={sb} onClick={() => seek(cur() + 1)}>+1s</button>
            <label className="ml-auto flex items-center gap-1 text-xs text-muted">{t.fps}
              <select className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5" value={fps} onChange={(e) => setFps(Number(e.target.value))}>{[24, 25, 30, 50, 60].map((x) => <option key={x} value={x}>{x}</option>)}</select></label>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={ui.btn} onClick={() => { const c = r3(cur()); if (c < b) setA(c); }}>{t.setStart}</button>
            <button type="button" className={ui.btn} onClick={() => { const c = r3(cur()); if (c > a) setB(c); }}>{t.setEnd}</button>
            <button type="button" className={ui.btn} onClick={() => seek(a)}>⇤ {t.goA}</button>
            <button type="button" className={ui.btn} onClick={() => seek(b)}>{t.goB} ⇥</button>
            <button type="button" className={`${ui.btn} border-[#2f6bff]/50 bg-[#2f6bff]/15`} disabled={b <= a} onClick={() => { const v = vid.current; if (!v) return; v.currentTime = a; stopAt.current = b; void v.play(); }} data-testid="trim-preview">▶ {t.preview}</button>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm">
            <label>{t.start}<input className={ui.field} type="number" min={0} step={0.001} max={dur || undefined} value={a} onChange={(e) => setA(r3(Math.max(0, Number(e.target.value))))} /></label>
            <label>{t.end}<input className={ui.field} type="number" min={0} step={0.001} max={dur || undefined} value={b} onChange={(e) => setB(r3(Math.min(dur || Infinity, Number(e.target.value))))} /></label>
          </div>
          <fieldset className="grid gap-2 text-sm sm:grid-cols-2" data-testid="trim-mode"><legend className="mb-1.5 text-xs text-muted">{t.mode}</legend>
            {([[false, t.exact], [true, t.fastShort]] as [boolean, string][]).map(([f, l]) => (
              <label key={String(f)} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 transition ${fast === f ? "border-[#2f6bff]/70 bg-[#2f6bff]/15 shadow-[0_0_20px_-6px_rgba(47,107,255,0.6)]" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"}`}><input type="radio" name="trim-mode" className="accent-[#2f6bff]" checked={fast === f} onChange={() => setFast(f)} />{l}</label>
            ))}
          </fieldset>
          <button type="button" className={`${ui.primary} w-full py-3 text-base shadow-[0_10px_30px_-10px_rgba(47,107,255,0.7)] sm:w-auto sm:px-8`} disabled={!job.ff || job.busy || b <= a} data-testid="video-run"
            onClick={() => job.go((ff) => run(ff, [file], ([n]) => fast
              ? ["-ss", a.toFixed(3), "-i", n, "-t", (b - a).toFixed(3), "-c", "copy", "-avoid_negative_ts", "make_zero", `out.${outExt}`]
              : ["-i", n, "-ss", a.toFixed(3), "-to", b.toFixed(3), "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-pix_fmt", "yuv420p", "-c:a", "aac", "-movflags", "+faststart", `out.${outExt}`], `out.${outExt}`))}>{t.run}</button>
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
            <a key={id} href={localeHref(lang, `/video/${id}`)} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-[#2f6bff]/40 hover:shadow-[0_12px_40px_-16px_rgba(47,107,255,0.6)]" data-testid={`video-card-${id}`}>
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
