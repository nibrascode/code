import { useEffect, useRef, useState } from "react";
import { Circle, ClipboardPaste, Copy, Crop, Download, Layers, Merge, Scissors, Square, Trash2, Undo2, Upload, ZoomIn, ZoomOut, ArrowUp, ArrowDown, Wand2 } from "lucide-react";
import toWav from "audiobuffer-to-wav";
import type { Lang } from "@/lib/i18n";

type L = Record<Lang, string>;
const T = (az: string, en: string, tr: string, ar: string, ru: string): L => ({ az, en, tr, ar, ru });
const S = {
  title: T("Səs yazıcı və redaktor", "Voice recorder & editor", "Ses kaydedici ve editör", "مسجّل ومحرّر الصوت", "Диктофон и редактор"),
  lead: T("Yaz və ya bir neçə fayl yüklə; yaxınlaşdır, kəs, köçür, yapışdır, toplu normallaşdır və WAV yüklə. Səs cihazdan çıxmır.", "Record or load several files; zoom, cut, copy, paste, batch-normalize and export WAV. Audio never leaves your device.", "Kaydet veya birden çok dosya yükle; yakınlaştır, kes, kopyala, yapıştır, toplu normalleştir ve WAV indir. Ses cihazdan çıkmaz.", "سجّل أو حمّل عدة ملفات؛ كبّر، قصّ، انسخ، ألصق، سوِّ المستوى دفعةً واحدة ونزّل WAV. الصوت لا يغادر جهازك.", "Запишите или загрузите несколько файлов; масштаб, вырезать, копировать, вставить, пакетная нормализация и WAV. Звук не покидает устройство."),
  rec: T("Yazmağa başla", "Start recording", "Kayda başla", "ابدأ التسجيل", "Начать запись"),
  stop: T("Dayandır", "Stop", "Durdur", "إيقاف", "Стоп"),
  open: T("Fayllar aç", "Open files", "Dosya aç", "فتح ملفات", "Открыть файлы"),
  gain: T("Səs səviyyəsi", "Volume", "Ses seviyesi", "مستوى الصوت", "Громкость"),
  norm: T("Normallaşdır", "Normalize", "Normalleştir", "تسوية المستوى", "Нормализовать"),
  wav: T("WAV yüklə", "Download WAV", "WAV indir", "تنزيل WAV", "Скачать WAV"),
  del: T("Sil", "Delete", "Sil", "حذف", "Удалить"),
  cut: T("Kəs", "Cut", "Kes", "قص", "Вырезать"),
  copy: T("Köçür", "Copy", "Kopyala", "نسخ", "Копировать"),
  paste: T("Yapışdır", "Paste", "Yapıştır", "لصق", "Вставить"),
  crop: T("Yalnız seçiləni saxla", "Keep selection", "Sadece seçimi tut", "إبقاء التحديد", "Оставить выделение"),
  toClip: T("Seçiləni yeni klip et", "Selection → new clip", "Seçimi yeni klip yap", "التحديد ← مقطع جديد", "Выделение → новый клип"),
  undo: T("Geri al", "Undo", "Geri al", "تراجع", "Отменить"),
  play: T("Seçiləni dinlə", "Play selection", "Seçimi dinle", "تشغيل التحديد", "Слушать выделение"),
  hint: T("Sürüklə = seç · klik = kursor (yapışdırma yeri) · təkər/düymələr = zoom", "Drag = select · click = cursor (paste point) · wheel/buttons = zoom", "Sürükle = seç · tıkla = imleç (yapıştırma yeri) · tekerlek/düğmeler = zoom", "اسحب = تحديد · انقر = المؤشر (مكان اللصق) · العجلة/الأزرار = تكبير", "Тяни = выделить · клик = курсор (место вставки) · колесо/кнопки = масштаб"),
  clips: T("Kliplər (toplu emal)", "Clips (batch)", "Klipler (toplu)", "المقاطع (دفعة)", "Клипы (пакет)"),
  normAll: T("Hamısını normallaşdır", "Normalize all", "Hepsini normalleştir", "تسوية الكل", "Нормализовать все"),
  trimAll: T("Sükutu kəs (hamısı)", "Trim silence (all)", "Sessizliği kes (hepsi)", "قص الصمت (الكل)", "Обрезать тишину (все)"),
  expAll: T("Hamısını WAV yüklə", "Export all WAV", "Hepsini WAV indir", "تنزيل الكل WAV", "Скачать все WAV"),
  merge: T("Birləşdir (sıra ilə)", "Merge in order", "Sırayla birleştir", "دمج بالترتيب", "Склеить по порядку"),
  clipboard: T("Bufer", "Clipboard", "Pano", "الحافظة", "Буфер"),
  bad: T("Bu fayl oxunmadı", "Could not decode", "Dosya okunamadı", "تعذّر قراءة الملف", "Не удалось прочитать"),
  noMic: T("Mikrofona icazə yoxdur və ya tapılmadı.", "Microphone blocked or not found.", "Mikrofon izni yok veya bulunamadı.", "الميكروفون محظور أو غير موجود.", "Микрофон заблокирован или не найден."),
};

type Clip = { id: number; name: string; buf: AudioBuffer; gain: number };
const fmt = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toFixed(2).padStart(5, "0")}`;
let nid = 1;
let sharedAc: AudioContext | null = null;
const ctx = () => (sharedAc ??= new AudioContext());

function mk(len: number, ch: number, sr: number) { return new AudioBuffer({ length: Math.max(1, len), numberOfChannels: ch, sampleRate: sr }); }
function slice(b: AudioBuffer, s: number, e: number) {
  const o = mk(e - s, b.numberOfChannels, b.sampleRate);
  for (let c = 0; c < b.numberOfChannels; c++) o.getChannelData(c).set(b.getChannelData(c).subarray(s, e));
  return o;
}
function concat(list: AudioBuffer[]) {
  const ch = Math.max(...list.map((x) => x.numberOfChannels)), sr = list[0].sampleRate;
  const o = mk(list.reduce((n, x) => n + x.length, 0), ch, sr); let off = 0;
  for (const x of list) { for (let c = 0; c < ch; c++) o.getChannelData(c).set(x.getChannelData(Math.min(c, x.numberOfChannels - 1)), off); off += x.length; }
  return o;
}
async function resample(b: AudioBuffer, sr: number) {
  if (b.sampleRate === sr) return b;
  const oc = new OfflineAudioContext(b.numberOfChannels, Math.ceil(b.duration * sr), sr);
  const s = oc.createBufferSource(); s.buffer = b; s.connect(oc.destination); s.start(); return oc.startRendering();
}
function withGain(b: AudioBuffer, g: number) {
  if (g === 1) return b; const o = slice(b, 0, b.length);
  for (let c = 0; c < o.numberOfChannels; c++) { const d = o.getChannelData(c); for (let i = 0; i < d.length; i++) d[i] = Math.max(-1, Math.min(1, d[i] * g)); }
  return o;
}
function peakOf(b: AudioBuffer, s = 0, e = b.length) { let p = 0; for (let c = 0; c < b.numberOfChannels; c++) { const d = b.getChannelData(c); for (let i = s; i < e; i++) { const v = Math.abs(d[i]); if (v > p) p = v; } } return p; }
function trimSilence(b: AudioBuffer, th = 0.02) {
  const d = b.getChannelData(0); let s = 0, e = d.length;
  while (s < e && Math.abs(d[s]) < th) s++; while (e > s && Math.abs(d[e - 1]) < th) e--;
  const pad = Math.floor(b.sampleRate * 0.05); return slice(b, Math.max(0, s - pad), Math.min(d.length, e + pad));
}
function download(b: AudioBuffer, name: string) {
  const u = URL.createObjectURL(new Blob([toWav(b)], { type: "audio/wav" }));
  const el = document.createElement("a"); el.href = u; el.download = name.replace(/\.[^.]+$/, "") + ".wav"; el.click();
  setTimeout(() => URL.revokeObjectURL(u), 4000);
}

export function Recorder({ lang }: { lang: Lang }) {
  const t = (k: keyof typeof S) => S[k][lang] ?? S[k].az;
  const [rec, setRec] = useState(false);
  const [secs, setSecs] = useState(0);
  const [clips, setClips] = useState<Clip[]>([]);
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<[number, number] | null>(null); // seconds
  const [cursor, setCursor] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [view, setView] = useState(0); // view start in seconds
  const [clip, setClipboard] = useState<AudioBuffer | null>(null);
  const [hist, setHist] = useState<Clip[][]>([]);
  const [err, setErr] = useState("");
  const cv = useRef<HTMLCanvasElement>(null);
  const fileIn = useRef<HTMLInputElement>(null);
  const drag = useRef<number | null>(null);
  const playing = useRef<AudioBufferSourceNode | null>(null);
  const live = useRef<{ mr: MediaRecorder; st: MediaStream; ac: AudioContext; raf: number; t0: number } | null>(null);

  const c = clips[cur];
  const buf = c?.buf ?? null;
  const dur = buf?.duration ?? 0;
  const span = dur / zoom;

  useEffect(() => () => stopAll(), []);
  function stopAll() { const l = live.current; if (!l) return; cancelAnimationFrame(l.raf); l.st.getTracks().forEach((x) => x.stop()); l.ac.close().catch(() => {}); live.current = null; }

  function commit(next: Clip[], idx = cur) { setHist((h) => [...h.slice(-19), clips]); setClips(next); setCur(Math.max(0, Math.min(idx, next.length - 1))); }
  function setBuf(nb: AudioBuffer, keepSel = false) { if (!c) return; commit(clips.map((x, i) => (i === cur ? { ...x, buf: nb } : x))); if (!keepSel) setSel(null); setView((v) => Math.min(v, Math.max(0, nb.duration - nb.duration / zoom))); }
  function undo() { setHist((h) => { if (!h.length) return h; const p = h[h.length - 1]; setClips(p); setCur((i) => Math.min(i, p.length - 1)); setSel(null); return h.slice(0, -1); }); }
  function addClips(list: Clip[]) { commit([...clips, ...list], clips.length); setSel(null); setZoom(1); setView(0); setCursor(0); }
  function select(i: number) { setCur(i); setSel(null); setZoom(1); setView(0); setCursor(0); }

  async function start() {
    setErr("");
    try {
      const st = await navigator.mediaDevices.getUserMedia({ audio: { noiseSuppression: true, echoCancellation: true, autoGainControl: true } });
      const ac = new AudioContext();
      const an = ac.createAnalyser(); an.fftSize = 1024; ac.createMediaStreamSource(st).connect(an);
      const mr = new MediaRecorder(st); const parts: Blob[] = [];
      mr.ondataavailable = (e) => { if (e.data.size) parts.push(e.data); };
      mr.onstop = async () => {
        const bl = new Blob(parts, { type: mr.mimeType || "audio/webm" });
        try { const b = await ctx().decodeAudioData(await bl.arrayBuffer()); addClipsRef.current([{ id: nid++, name: `nibras-${Date.now()}`, buf: b, gain: 1 }]); } catch { setErr(t("bad")); }
      };
      const data = new Uint8Array(an.fftSize);
      const draw = () => {
        const cc = cv.current, l = live.current; if (!cc || !l) return;
        const g = cc.getContext("2d")!; an.getByteTimeDomainData(data);
        g.clearRect(0, 0, cc.width, cc.height); g.strokeStyle = "#fcd34d"; g.lineWidth = 2; g.beginPath();
        data.forEach((v, i) => { const x = (i / data.length) * cc.width, y = (v / 255) * cc.height; if (i) g.lineTo(x, y); else g.moveTo(x, y); });
        g.stroke(); setSecs((performance.now() - l.t0) / 1000); l.raf = requestAnimationFrame(draw);
      };
      mr.start(250);
      live.current = { mr, st, ac, raf: 0, t0: performance.now() };
      setRec(true); draw();
    } catch { setErr(t("noMic")); }
  }
  const addClipsRef = useRef(addClips); addClipsRef.current = addClips;
  function stop() { live.current?.mr.stop(); stopAll(); setRec(false); }

  async function openFiles(fl: FileList | null) {
    if (!fl?.length) return; setErr(""); const out: Clip[] = []; const bad: string[] = [];
    for (const f of Array.from(fl)) { try { out.push({ id: nid++, name: f.name, buf: await ctx().decodeAudioData(await f.arrayBuffer()), gain: 1 }); } catch { bad.push(f.name); } }
    if (out.length) addClips(out); if (bad.length) setErr(`${t("bad")}: ${bad.join(", ")}`);
  }

  // waveform (zoomed window)
  useEffect(() => {
    const cc = cv.current; if (!cc || !buf || rec) return;
    const g = cc.getContext("2d")!, d = buf.getChannelData(0), W = cc.width, H = cc.height, sr = buf.sampleRate;
    const s0 = Math.floor(view * sr), spp = (span * sr) / W, gn = c.gain;
    g.clearRect(0, 0, W, H);
    for (let x = 0; x < W; x++) {
      let mn = 1, mx = -1; const i0 = s0 + Math.floor(x * spp), i1 = Math.max(i0 + 1, s0 + Math.floor((x + 1) * spp));
      const stride = Math.max(1, Math.floor((i1 - i0) / 400));
      for (let i = i0; i < i1 && i < d.length; i += stride) { const v = d[i] * gn; if (v < mn) mn = v; if (v > mx) mx = v; }
      if (mx < mn) continue;
      const tt = view + (x / W) * span, inSel = sel && tt >= sel[0] && tt <= sel[1];
      g.fillStyle = inSel ? "#fcd34d" : "rgba(255,255,255,.3)";
      const top = ((1 - Math.min(1, mx)) / 2) * H; g.fillRect(x, top, 1, Math.max(1, ((Math.min(1, mx) - Math.max(-1, mn)) / 2) * H));
    }
    const cx = ((cursor - view) / span) * W; g.fillStyle = "#38bdf8"; g.fillRect(cx - 1, 0, 2, H);
    // time ticks
    g.fillStyle = "rgba(255,255,255,.5)"; g.font = "10px sans-serif";
    for (let k = 0; k <= 4; k++) g.fillText(fmt(view + (k / 4) * span), Math.min(W - 40, (k / 4) * W + 2), H - 3);
  }, [buf, sel, cursor, zoom, view, rec, c?.gain, span]);

  const toTime = (e: React.PointerEvent | React.WheelEvent) => { const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); return Math.max(0, Math.min(dur, view + ((e.clientX - r.left) / r.width) * span)); };
  function setZoomAt(z: number, at = view + span / 2) { const nz = Math.max(1, Math.min(500, z)); const ns = dur / nz; setZoom(nz); setView(Math.max(0, Math.min(dur - ns, at - ((at - view) / span) * ns))); }
  function zoomSel() { if (!sel) return; const z = dur / Math.max(0.05, sel[1] - sel[0]); const nz = Math.max(1, Math.min(500, z)); setZoom(nz); setView(Math.max(0, Math.min(dur - dur / nz, sel[0]))); }

  const rng = (): [number, number] | null => { if (!buf || !sel) return null; const sr = buf.sampleRate; const s = Math.floor(sel[0] * sr), e = Math.floor(sel[1] * sr); return e - s > 10 ? [s, e] : null; };
  function doCopy() { const r = rng(); if (r && buf) setClipboard(slice(buf, ...r)); }
  function doCut() { const r = rng(); if (!r || !buf) return; setClipboard(slice(buf, ...r)); setBuf(concat([slice(buf, 0, r[0]), slice(buf, r[1], buf.length)])); setCursor(sel![0]); }
  function doDelete() { const r = rng(); if (!r || !buf) return; setBuf(concat([slice(buf, 0, r[0]), slice(buf, r[1], buf.length)])); setCursor(sel![0]); }
  function doCrop() { const r = rng(); if (r && buf) { setBuf(slice(buf, ...r)); setCursor(0); setView(0); setZoom(1); } }
  async function doPaste() {
    if (!clip || !buf) return; const p = await resample(clip, buf.sampleRate); const at = Math.floor(cursor * buf.sampleRate);
    setBuf(concat([slice(buf, 0, at), p, slice(buf, at, buf.length)]));
    setSel([cursor, cursor + p.duration]);
  }
  function toNewClip() { const r = rng(); if (r && buf) addClips([{ id: nid++, name: `${c.name.replace(/\.[^.]+$/, "")}-part`, buf: slice(buf, ...r), gain: c.gain }]); }
  function play() {
    if (!buf) return; playing.current?.stop(); const ac = ctx(); const s = ac.createBufferSource(); const g = ac.createGain();
    s.buffer = buf; g.gain.value = c.gain; s.connect(g).connect(ac.destination);
    const [a, b] = sel ?? [cursor, dur]; s.start(0, a, Math.max(0.01, b - a)); playing.current = s;
  }
  const setGain = (i: number, g: number) => setClips((cs) => cs.map((x, j) => (j === i ? { ...x, gain: g } : x)));
  function normAll() { setClips((cs) => cs.map((x) => ({ ...x, gain: Math.min(8, 0.98 / (peakOf(x.buf) || 1)) }))); }
  function trimAll() { commit(clips.map((x) => ({ ...x, buf: trimSilence(x.buf) }))); setSel(null); setView(0); setZoom(1); }
  function move(i: number, d: number) { const j = i + d; if (j < 0 || j >= clips.length) return; const n = [...clips]; [n[i], n[j]] = [n[j], n[i]]; commit(n, cur === i ? j : cur === j ? i : cur); }
  function remove(i: number) { commit(clips.filter((_, j) => j !== i), cur > i ? cur - 1 : cur); setSel(null); }
  function exportAll() { clips.forEach((x, i) => setTimeout(() => download(withGain(x.buf, x.gain), `${String(i + 1).padStart(2, "0")}-${x.name}`), i * 400)); }
  async function mergeAll() { if (clips.length < 2) return; const sr = clips[0].buf.sampleRate; const parts = await Promise.all(clips.map(async (x) => withGain(await resample(x.buf, sr), x.gain))); addClips([{ id: nid++, name: `nibras-merged-${Date.now()}`, buf: concat(parts), gain: 1 }]); }

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey) || (e.target as HTMLElement)?.closest("input,textarea,[contenteditable]")) return;
      const m: Record<string, () => void> = { x: doCut, c: doCopy, v: doPaste, z: undo };
      const f = m[e.key.toLowerCase()]; if (f && buf) { e.preventDefault(); f(); }
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  });

  const B = ({ on, icon, k, dis }: { on: () => void; icon: React.ReactNode; k: keyof typeof S; dis?: boolean }) =>
    <button type="button" className="voice-btn" onClick={on} disabled={dis} title={t(k)}>{icon}{t(k)}</button>;

  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <h2 className="font-display text-lg font-bold">{t("title")}</h2>
      <p className="mt-1 text-sm text-muted">{t("lead")}</p>
      <canvas ref={cv} width={1000} height={120} dir="ltr"
        className="mt-3 h-28 w-full touch-none rounded-xl bg-black/30"
        onPointerDown={(e) => { if (!buf || rec) return; (e.target as HTMLElement).setPointerCapture(e.pointerId); const tt = toTime(e); drag.current = tt; setCursor(tt); setSel(null); }}
        onPointerMove={(e) => { if (drag.current == null) return; const tt = toTime(e), a = drag.current; if (Math.abs(tt - a) > span / 300) setSel([Math.min(a, tt), Math.max(a, tt)]); }}
        onPointerUp={() => { drag.current = null; }}
        onWheel={(e) => { if (!buf) return; if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) { setView((v) => Math.max(0, Math.min(dur - span, v + ((e.deltaX || e.deltaY) / 1000) * span))); } else setZoomAt(zoom * (e.deltaY < 0 ? 1.25 : 0.8), toTime(e)); }} />
      {buf && !rec ? <>
        <input type="range" aria-label="scroll" min={0} max={Math.max(0, dur - span)} step={span / 200 || 0.01} value={view} disabled={zoom <= 1} onChange={(e) => setView(+e.target.value)} className="mt-1 w-full" />
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
          <button type="button" className="voice-btn" onClick={() => setZoomAt(zoom / 2)} disabled={zoom <= 1}><ZoomOut size={15} /></button>
          <span>{zoom.toFixed(zoom < 10 ? 1 : 0)}×</span>
          <button type="button" className="voice-btn" onClick={() => setZoomAt(zoom * 2, sel ? (sel[0] + sel[1]) / 2 : cursor)}><ZoomIn size={15} /></button>
          <button type="button" className="voice-btn" onClick={zoomSel} disabled={!sel}><ZoomIn size={15} />⟦⟧</button>
          <button type="button" className="voice-btn" onClick={() => { setZoom(1); setView(0); }}>1×</button>
          <span>▸ {fmt(cursor)}{sel ? ` · ⟦${fmt(sel[0])} – ${fmt(sel[1])}⟧ ${(sel[1] - sel[0]).toFixed(2)}s` : ""} / {fmt(dur)}</span>
        </div>
        <p className="mt-1 text-xs text-muted">{t("hint")}</p>
      </> : null}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {rec
          ? <button type="button" className="voice-btn warn" onClick={stop}><Square size={15} />{t("stop")} · {fmt(secs)}</button>
          : <button type="button" className="voice-btn" onClick={start}><Circle size={15} className="text-red-400" />{t("rec")}</button>}
        <button type="button" className="voice-btn" onClick={() => fileIn.current?.click()} disabled={rec}><Upload size={15} />{t("open")}</button>
        <input ref={fileIn} type="file" accept="audio/*,video/*" multiple hidden onChange={(e) => { openFiles(e.target.files); e.target.value = ""; }} />
      </div>
      {err ? <p className="mt-2 text-sm text-red-300">{err}</p> : null}
      {buf && !rec ? <div className="mt-3 grid gap-2 text-sm">
        <div className="flex flex-wrap gap-2">
          <B on={play} icon={<Circle size={13} />} k="play" />
          <B on={doCut} icon={<Scissors size={15} />} k="cut" dis={!sel} />
          <B on={doCopy} icon={<Copy size={15} />} k="copy" dis={!sel} />
          <B on={doPaste} icon={<ClipboardPaste size={15} />} k="paste" dis={!clip} />
          <B on={doDelete} icon={<Trash2 size={15} />} k="del" dis={!sel} />
          <B on={doCrop} icon={<Crop size={15} />} k="crop" dis={!sel} />
          <B on={toNewClip} icon={<Layers size={15} />} k="toClip" dis={!sel} />
          <B on={undo} icon={<Undo2 size={15} />} k="undo" dis={!hist.length} />
        </div>
        {clip ? <p className="text-xs text-muted">{t("clipboard")}: {clip.duration.toFixed(2)}s → {t("paste")} @ {fmt(cursor)}</p> : null}
        <label className="flex items-center gap-2"><span className="w-28 text-muted">{t("gain")} {Math.round(c.gain * 100)}%</span><input type="range" min={0.2} max={8} step={0.05} value={c.gain} onChange={(e) => setGain(cur, +e.target.value)} className="flex-1" />
          <button type="button" className="voice-btn" onClick={() => setGain(cur, Math.min(8, 0.98 / (peakOf(buf) || 1)))}>{t("norm")}</button></label>
        <B on={() => download(withGain(buf, c.gain), c.name)} icon={<Download size={15} />} k="wav" />
      </div> : null}
      {clips.length && !rec ? <div className="mt-4 rounded-xl border border-white/10 p-3">
        <h3 className="text-sm font-bold">{t("clips")} · {clips.length}</h3>
        <ol className="mt-2 grid gap-1 text-sm">
          {clips.map((x, i) => <li key={x.id} className={`flex items-center gap-2 rounded-lg px-2 py-1 ${i === cur ? "bg-white/10" : ""}`}>
            <button type="button" className="flex-1 truncate text-start" onClick={() => select(i)}>{i + 1}. {x.name} <span className="text-muted">· {fmt(x.buf.duration)} · {Math.round(x.gain * 100)}%</span></button>
            <button type="button" aria-label="up" onClick={() => move(i, -1)} disabled={!i}><ArrowUp size={14} /></button>
            <button type="button" aria-label="down" onClick={() => move(i, 1)} disabled={i === clips.length - 1}><ArrowDown size={14} /></button>
            <button type="button" aria-label="wav" onClick={() => download(withGain(x.buf, x.gain), x.name)}><Download size={14} /></button>
            <button type="button" aria-label={t("del")} onClick={() => remove(i)}><Trash2 size={14} /></button>
          </li>)}
        </ol>
        <div className="mt-2 flex flex-wrap gap-2">
          <B on={normAll} icon={<Wand2 size={15} />} k="normAll" />
          <B on={trimAll} icon={<Scissors size={15} />} k="trimAll" />
          <B on={mergeAll} icon={<Merge size={15} />} k="merge" dis={clips.length < 2} />
          <B on={exportAll} icon={<Download size={15} />} k="expAll" />
        </div>
      </div> : null}
    </section>
  );
}
