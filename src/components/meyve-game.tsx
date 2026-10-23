import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const VW = 400;
const VH = 600;
const GRAVITY = 720;
const BEST_KEY = "nibras-meyve-v1";
const TAU = Math.PI * 2;

type Mode = "idle" | "playing" | "paused" | "over";
type FruitType = { emoji: string; color: string; glow: string; points: number };
type Fruit = { x: number; y: number; vx: number; vy: number; r: number; rotation: number; vrot: number; type: FruitType; isBomb: boolean; sliced: boolean };
type Trail = { x: number; y: number; t: number };
type Bit = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; color: string };
type Floater = { x: number; y: number; text: string; color: string; size: number; life: number; vy: number };
type Splatter = { x: number; y: number; color: string; blobs: { dx: number; dy: number; r: number }[]; life: number; decay: number };

const FRUITS: FruitType[] = [
  { emoji: "🍎", color: "#ff5c7a", glow: "rgba(255,92,122,.8)", points: 10 },
  { emoji: "🍊", color: "#fb923c", glow: "rgba(251,146,60,.8)", points: 10 },
  { emoji: "🍋", color: "#fbbf24", glow: "rgba(251,191,36,.8)", points: 10 },
  { emoji: "🍇", color: "#a78bfa", glow: "rgba(167,139,250,.8)", points: 12 },
  { emoji: "🍉", color: "#6ee7b7", glow: "rgba(110,231,183,.8)", points: 15 },
  { emoji: "🍓", color: "#f472b6", glow: "rgba(244,114,182,.8)", points: 12 },
  { emoji: "🥝", color: "#84cc16", glow: "rgba(132,204,22,.8)", points: 12 },
];
const BOMB: FruitType = { emoji: "💣", color: "#ef4444", glow: "rgba(239,68,68,.9)", points: 0 };

const COPY: Record<string, Record<Lang, string>> = {
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  lives: { az: "Can", en: "Lives", tr: "Can", ar: "الحياة", ru: "Жизни" },
  combo: { az: "Kombo", en: "Combo", tr: "Kombo", ar: "سلسلة", ru: "Серия" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  start: { az: "Başla", en: "Start", tr: "Başla", ar: "ابدأ", ru: "Старт" },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  resume: { az: "Davam et", en: "Continue", tr: "Devam et", ar: "أكمل", ru: "Дальше" },
  pause: { az: "Pauza", en: "Pause", tr: "Duraklat", ar: "توقف", ru: "Пауза" },
  over: { az: "Oyun bitdi", en: "Game over", tr: "Oyun bitti", ar: "انتهت اللعبة", ru: "Игра окончена" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  max: { az: "Ən uzun kombo", en: "Best combo", tr: "En uzun kombo", ar: "أطول سلسلة", ru: "Лучшая серия" },
  lead: {
    az: "Barmağını sürüşdür, meyvələri kəs. Bombaya toxunma.",
    en: "Swipe through the fruit. Do not touch the bomb.",
    tr: "Parmağını kaydır, meyveleri kes. Bombaya dokunma.",
    ar: "اسحب لتقطع الفاكهة. لا تلمس القنبلة.",
    ru: "Проведи по фруктам. Бомбу не трогай.",
  },
  miss: {
    az: "Qaçan meyvə bir can aparır.",
    en: "A missed fruit costs a life.",
    tr: "Kaçan meyve bir can götürür.",
    ar: "الفاكهة الفائتة تأخذ حياة.",
    ru: "Пропущенный фрукт стоит жизнь.",
  },
  wait: { az: "Meyvələr dayanıb.", en: "The fruit is waiting.", tr: "Meyveler durdu.", ar: "الفاكهة متوقفة.", ru: "Фрукты ждут." },
  hint: { az: "Sürüşdür və kəs. Bombaya toxunma.", en: "Swipe to slice. Avoid the bomb.", tr: "Kaydır ve kes. Bombaya dokunma.", ar: "اسحب واقطع. تجنّب القنبلة.", ru: "Режь смахиванием. Бомбу не трогай." },
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);
function readBest() {
  try { return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; } catch { return 0; }
}
function shade(hex: string, percent: number) {
  const num = Number.parseInt(hex.replace("#", ""), 16);
  const channel = (value: number) => Math.max(0, Math.min(255, value + percent));
  return `#${(0x1000000 + channel(num >> 16) * 0x10000 + channel((num >> 8) & 255) * 0x100 + channel(num & 255)).toString(16).slice(1)}`;
}
function pointSegDist(px: number, py: number, x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  if (!len2) return Math.hypot(px - x1, py - y1);
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len2));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

export function MeyveGame() {
  const { lang } = useI18n();
  const game = gameBySlug("meyve")!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const api = useRef({ start: () => {}, resume: () => {} });
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [record, setRecord] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = {
      mode: "idle" as Mode,
      fruits: [] as Fruit[],
      trail: [] as Trail[],
      particles: [] as Bit[],
      floaters: [] as Floater[],
      splatters: [] as Splatter[],
      ambient: [] as { x: number; y: number; r: number; sp: number; a: number; tw: number }[],
      score: 0,
      lives: 3,
      combo: 0,
      comboTimer: 0,
      maxCombo: 0,
      best: readBest(),
      spawnTimer: 0,
      time: 0,
      shake: 0,
      flash: 0,
      elapsed: 0,
    };
    let alive = true;
    let last = 0;
    let down = false;
    let actx: AudioContext | null = null;
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => { timers.delete(id); if (alive) fn(); }, ms);
      timers.add(id);
    };

    const sfx = (freq: number, dur = 0.06, type: OscillatorType = "sine", vol = 0.02) => {
      try {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!actx) actx = new AC();
        if (actx.state === "suspended") void actx.resume();
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, actx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.55), actx.currentTime + dur);
        gain.gain.setValueAtTime(vol, actx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start();
        osc.stop(actx.currentTime + dur);
      } catch { /* ignore */ }
    };
    const sync = () => { setScore(state.score); setLives(state.lives); setCombo(state.combo); setBest(Math.max(state.best, state.score)); setMaxCombo(state.maxCombo); };
    const stars = () => {
      state.ambient = Array.from({ length: 30 }, () => ({ x: Math.random() * VW, y: Math.random() * VH, r: 0.4 + Math.random() * 1.6, sp: 4 + Math.random() * 15, a: 0.1 + Math.random() * 0.3, tw: Math.random() * TAU }));
    };
    const burst = (x: number, y: number, color: string, count: number, power: number) => {
      for (let i = 0; i < count; i += 1) {
        const a = Math.random() * TAU;
        const sp = (80 + Math.random() * 250) * power;
        state.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 80, life: 1, decay: 1.8 + Math.random() * 1.4, size: 2 + Math.random() * 4 * power, color });
      }
    };
    const gameOver = () => {
      if (state.mode === "over") return;
      state.mode = "over";
      const isRec = state.score > state.best;
      if (isRec) {
        state.best = state.score;
        try { localStorage.setItem(BEST_KEY, String(state.best)); } catch { /* ignore */ }
      }
      setRecord(isRec);
      setMode("over");
      sync();
      sfx(200, 0.3, "sawtooth", 0.06);
    };
    const hurt = () => {
      state.lives -= 1;
      state.combo = 0;
      state.comboTimer = 0;
      state.shake = Math.max(state.shake, 4);
      state.flash = Math.max(state.flash, 0.2);
      sync();
      sfx(260, 0.15, "sawtooth", 0.03);
      if (state.lives <= 0) later(gameOver, 160);
    };
    const spawn = () => {
      const bomb = Math.random() < 0.14;
      const type = bomb ? BOMB : FRUITS[Math.floor(Math.random() * FRUITS.length)];
      const left = Math.random() < 0.5;
      const x = left ? rand(VW * 0.08, VW * 0.4) : rand(VW * 0.6, VW * 0.92);
      const targetX = VW * 0.5 + rand(-60, 60);
      const rise = rand(0.6, 0.8);
      const height = rand(VH * 0.55, VH * 0.78);
      state.fruits.push({
        x, y: VH + 40, vx: (targetX - x) / (rise * 2), vy: -Math.sqrt(2 * GRAVITY * height),
        r: bomb ? 26 : 28, rotation: rand(0, TAU), vrot: rand(-4, 4), type, isBomb: bomb, sliced: false,
      });
    };
    const sliced = (fruit: Fruit) => {
      fruit.sliced = true;
      if (fruit.isBomb) {
        burst(fruit.x, fruit.y, "#ef4444", 40, 1.8);
        burst(fruit.x, fruit.y, "#ffd166", 25, 1.5);
        state.shake = 14;
        state.flash = 0.8;
        hurt();
        sfx(90, 0.5, "sawtooth", 0.08);
        return;
      }
      state.combo += 1;
      state.comboTimer = 1.3;
      if (state.combo > state.maxCombo) state.maxCombo = state.combo;
      const points = fruit.type.points * state.combo;
      state.score += points;
      sync();
      burst(fruit.x, fruit.y, fruit.type.color, 16, 1.2);
      state.splatters.push({
        x: fruit.x, y: fruit.y, color: fruit.type.color, life: 1, decay: 0.32,
        blobs: Array.from({ length: 4 + Math.floor(Math.random() * 3) }, () => ({ dx: rand(-25, 25), dy: rand(-25, 25), r: rand(4, 12) })),
      });
      state.floaters.push({ x: fruit.x, y: fruit.y - 20, text: `+${points}`, color: fruit.type.color, size: state.combo > 1 ? 22 : 18, life: 1, vy: -90 });
      if (state.combo >= 3) state.floaters.push({ x: fruit.x, y: fruit.y - 50, text: `×${state.combo}`, color: "#ffd166", size: 16, life: 1, vy: -70 });
      sfx(500 + state.combo * 80, 0.07, "sine", 0.03);
      state.shake = Math.max(state.shake, 2);
    };
    const hit = (fruit: Fruit) => {
      const now = state.elapsed;
      for (let i = 1; i < state.trail.length; i += 1) {
        const a = state.trail[i - 1];
        const b = state.trail[i];
        if (now - b.t > 0.35) continue;
        if (pointSegDist(fruit.x, fruit.y, a.x, a.y, b.x, b.y) < fruit.r * 0.85) return true;
      }
      return false;
    };

    const start = () => {
      state.mode = "playing";
      state.fruits = []; state.trail = []; state.particles = []; state.floaters = []; state.splatters = [];
      state.score = 0; state.lives = 3; state.combo = 0; state.comboTimer = 0; state.maxCombo = 0;
      state.spawnTimer = 0.6; state.elapsed = 0; state.shake = 0; state.flash = 0;
      stars();
      setMode("playing"); setRecord(false); sync();
      sfx(520, 0.1, "sine", 0.04);
    };
    const resume = () => { if (state.mode !== "paused") return; state.mode = "playing"; setMode("playing"); };
    api.current = { start, resume };

    const update = (dt: number) => {
      if (state.mode !== "playing") return;
      state.elapsed += dt;
      if (state.comboTimer > 0) { state.comboTimer -= dt; if (state.comboTimer <= 0) { state.combo = 0; sync(); } }
      state.spawnTimer -= dt;
      if (state.spawnTimer <= 0) {
        const wait = Math.max(0.42, 1.05 - state.elapsed * 0.012);
        const count = state.elapsed > 20 || (state.elapsed > 10 && Math.random() < 0.5) ? 2 : 1;
        for (let i = 0; i < count; i += 1) later(spawn, i * 100);
        state.spawnTimer = wait + rand(-0.15, 0.25);
      }
      for (let i = state.fruits.length - 1; i >= 0; i -= 1) {
        const fruit = state.fruits[i];
        fruit.vy += GRAVITY * dt;
        fruit.x += fruit.vx * dt;
        fruit.y += fruit.vy * dt;
        fruit.rotation += fruit.vrot * dt;
        if (!fruit.sliced && hit(fruit)) sliced(fruit);
        if (fruit.y > VH + 80 && fruit.vy > 0) {
          if (!fruit.isBomb && !fruit.sliced) hurt();
          state.fruits.splice(i, 1);
        }
      }
      while (state.trail.length && state.elapsed - state.trail[0].t > 0.35) state.trail.shift();
    };
    const draw = () => {
      ctx.save();
      if (state.shake > 0) ctx.translate((Math.random() - 0.5) * state.shake, (Math.random() - 0.5) * state.shake);
      ctx.fillStyle = "#04070e";
      ctx.fillRect(0, 0, VW, VH);
      for (const star of state.ambient) {
        ctx.globalAlpha = star.a * (0.6 + Math.sin(star.tw) * 0.4);
        ctx.fillStyle = "#cfe9ff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (const mark of state.splatters) {
        ctx.globalAlpha = Math.max(0, mark.life * 0.55);
        ctx.fillStyle = mark.color;
        for (const blob of mark.blobs) { ctx.beginPath(); ctx.arc(mark.x + blob.dx, mark.y + blob.dy, blob.r * mark.life, 0, TAU); ctx.fill(); }
      }
      ctx.globalAlpha = 1;
      for (const fruit of state.fruits) {
        ctx.save();
        ctx.translate(fruit.x, fruit.y);
        ctx.rotate(fruit.rotation);
        const fill = ctx.createRadialGradient(-fruit.r * 0.3, -fruit.r * 0.3, 0, 0, 0, fruit.r);
        fill.addColorStop(0, fruit.type.color);
        fill.addColorStop(1, shade(fruit.type.color, -50));
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(0, 0, fruit.r, 0, TAU);
        ctx.fill();
        ctx.font = `${Math.round(fruit.r * 1.15)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(fruit.type.emoji, 0, 2);
        ctx.restore();
      }
      if (state.trail.length > 1) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 1; i < state.trail.length; i += 1) {
          const age = Math.min(1, (state.elapsed - state.trail[i].t) / 0.35);
          ctx.strokeStyle = `rgba(255,255,255,${1 - age})`;
          ctx.lineWidth = 4 * (1 - age) + 1;
          ctx.beginPath();
          ctx.moveTo(state.trail[i - 1].x, state.trail[i - 1].y);
          ctx.lineTo(state.trail[i].x, state.trail[i].y);
          ctx.stroke();
        }
      }
      for (const bit of state.particles) { ctx.globalAlpha = Math.max(0, bit.life); ctx.fillStyle = bit.color; ctx.beginPath(); ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU); ctx.fill(); }
      ctx.globalAlpha = 1;
      for (const floater of state.floaters) { ctx.globalAlpha = Math.max(0, floater.life); ctx.fillStyle = floater.color; ctx.font = `900 ${floater.size}px sans-serif`; ctx.textAlign = "center"; ctx.fillText(floater.text, floater.x, floater.y); }
      ctx.globalAlpha = 1;
      ctx.restore();
      if (state.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${state.flash * 0.18})`; ctx.fillRect(0, 0, VW, VH); }
      if (state.lives === 1 && state.mode === "playing") {
        const wash = ctx.createRadialGradient(VW / 2, VH / 2, VH * 0.3, VW / 2, VH / 2, VH * 0.75);
        wash.addColorStop(0, "rgba(255,92,122,0)");
        wash.addColorStop(1, `rgba(255,92,122,${0.06 + Math.sin(state.time * 4) * 0.04})`);
        ctx.fillStyle = wash;
        ctx.fillRect(0, 0, VW, VH);
      }
    };
    const fx = (dt: number) => {
      state.time += dt;
      for (const star of state.ambient) { star.y += star.sp * dt; star.tw += dt * 2; if (star.y > VH + 4) { star.y = -4; star.x = Math.random() * VW; } }
      for (let i = state.particles.length - 1; i >= 0; i -= 1) {
        const bit = state.particles[i];
        bit.x += bit.vx * dt; bit.y += bit.vy * dt; bit.vy += GRAVITY * 0.5 * dt; bit.life -= bit.decay * dt;
        if (bit.life <= 0) state.particles.splice(i, 1);
      }
      for (let i = state.floaters.length - 1; i >= 0; i -= 1) {
        const floater = state.floaters[i];
        floater.y += floater.vy * dt; floater.life -= dt * 1.4;
        if (floater.life <= 0) state.floaters.splice(i, 1);
      }
      for (let i = state.splatters.length - 1; i >= 0; i -= 1) {
        state.splatters[i].life -= state.splatters[i].decay * dt;
        if (state.splatters[i].life <= 0) state.splatters.splice(i, 1);
      }
      if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 35);
      if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2.4);
    };

    const xy = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: (event.clientX - rect.left) * (VW / rect.width), y: (event.clientY - rect.top) * (VH / rect.height) };
    };
    const pointerDown = (event: PointerEvent) => {
      if (state.mode !== "playing") return;
      down = true;
      const point = xy(event);
      state.trail.push({ ...point, t: state.elapsed });
    };
    const pointerMove = (event: PointerEvent) => {
      if (!down || state.mode !== "playing") return;
      const point = xy(event);
      state.trail.push({ ...point, t: state.elapsed });
    };
    const pointerUp = () => { down = false; };
    const onKey = (event: KeyboardEvent) => {
      if (event.code !== "Space" && event.code !== "Enter") return;
      event.preventDefault();
      if (state.mode === "idle" || state.mode === "over") start();
      else if (state.mode === "paused") resume();
    };
    const onHide = () => { if (document.hidden && state.mode === "playing") { state.mode = "paused"; down = false; setMode("paused"); } };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(VW * dpr);
      canvas.height = Math.round(VH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();
    stars();
    setBest(state.best);
    window.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onHide);
    canvas.addEventListener("pointerdown", pointerDown);
    canvas.addEventListener("pointermove", pointerMove);
    canvas.addEventListener("pointerup", pointerUp);
    canvas.addEventListener("pointercancel", pointerUp);
    const frame = requestAnimationFrame(function loop(ts: number) {
      if (!alive) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000;
      last = ts;
      if (dt > 0.06) dt = 0.06;
      update(dt);
      fx(dt);
      draw();
      requestAnimationFrame(loop);
    });
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onHide);
      canvas.removeEventListener("pointerdown", pointerDown);
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerup", pointerUp);
      canvas.removeEventListener("pointercancel", pointerUp);
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
  return (
    <main className="meyve-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="qala-top">
        <p className="eyebrow"><i /><a href={gamePath(lang)}>{back}</a></p>
        <div className="kosmos-head"><h1>{game.name[lang]}</h1><p className="xo-version">{GAME_VERSION}</p><p className="why-lead">{game.blurb[lang]}</p></div>
      </div>
      <dl className="qala-hud">
        <div><dt>{COPY.score[lang]}</dt><dd className="is-gold">{score}</dd></div>
        <div><dt>{COPY.lives[lang]}</dt><dd className="is-life">{"♥".repeat(Math.max(0, lives)) || "0"}</dd></div>
        <div><dt>{COPY.combo[lang]}</dt><dd>{combo}</dd></div>
        <div><dt>{COPY.best[lang]}</dt><dd>{Math.max(best, score)}</dd></div>
      </dl>
      <div className="meyve-board">
        <canvas ref={canvasRef} />
        {mode !== "playing" ? (
          <div className="ilan-overlay">
            <div className="ilan-panel">
              <h2>{mode === "paused" ? COPY.pause[lang] : mode === "over" ? (record ? COPY.record[lang] : COPY.over[lang]) : game.name[lang]}</h2>
              {mode === "over" ? <p className="ilan-big">{score}</p> : <p>{mode === "paused" ? COPY.wait[lang] : COPY.lead[lang]}</p>}
              {mode === "idle" ? <p className="ilan-mini">{COPY.miss[lang]}</p> : null}
              {mode === "over" ? <p className="ilan-mini">{COPY.max[lang]} {maxCombo} · {COPY.best[lang]} {Math.max(best, score)}</p> : null}
              <div className="ilan-actions">
                {mode === "paused" ? <button type="button" className="is-mint" onClick={() => api.current.resume()}>{COPY.resume[lang]}</button> : null}
                {mode !== "paused" ? <button type="button" className="is-mint" onClick={() => api.current.start()}>{mode === "idle" ? COPY.start[lang] : COPY.again[lang]}</button> : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <p className="ilan-hint">{COPY.hint[lang]}</p>
    </main>
  );
}
