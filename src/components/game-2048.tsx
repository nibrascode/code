import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const SIZE = 4;
const VW = 400;
const PAD = 10;
const GAP = 6;
const CELL = (VW - PAD * 2 - GAP * (SIZE - 1)) / SIZE;
const BEST_KEY = "nibras-2048-v1";
const TAU = Math.PI * 2;
const MOVE_DUR = 0.14;

type Dir = "left" | "right" | "up" | "down";
type Tile = {
  value: number;
  row: number;
  col: number;
  x: number;
  y: number;
  startX: number;
  startY: number;
  tx: number;
  ty: number;
  targetRow: number;
  targetCol: number;
  scale: number;
  popT: number;
  popIn: number;
  alive: boolean;
  pendingValue: number;
  isMergeTarget: boolean;
};
type Bit = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; color: string };
type Floater = { x: number; y: number; text: string; color: string; life: number; vy: number };

const COLORS: Record<number, { bg: string; bg2: string; text: string; glow: string }> = {
  2: { bg: "#dbeafe", bg2: "#bfdbfe", text: "#1e40af", glow: "rgba(191,219,254,.6)" },
  4: { bg: "#c7d2fe", bg2: "#a5b4fc", text: "#312e81", glow: "rgba(165,180,252,.6)" },
  8: { bg: "#67e8f9", bg2: "#22d3ee", text: "#083344", glow: "rgba(34,211,238,.7)" },
  16: { bg: "#60a5fa", bg2: "#3b82f6", text: "#ffffff", glow: "rgba(59,130,246,.8)" },
  32: { bg: "#a78bfa", bg2: "#8b5cf6", text: "#ffffff", glow: "rgba(139,92,246,.8)" },
  64: { bg: "#f472b6", bg2: "#ec4899", text: "#ffffff", glow: "rgba(236,72,153,.85)" },
  128: { bg: "#fb923c", bg2: "#f97316", text: "#ffffff", glow: "rgba(249,115,22,.9)" },
  256: { bg: "#f87171", bg2: "#ef4444", text: "#ffffff", glow: "rgba(239,68,68,.95)" },
  512: { bg: "#fbbf24", bg2: "#f59e0b", text: "#422006", glow: "rgba(245,158,11,1)" },
  1024: { bg: "#fde047", bg2: "#facc15", text: "#422006", glow: "rgba(250,204,21,1)" },
  2048: { bg: "#ffffff", bg2: "#fef3c7", text: "#7c2d12", glow: "rgba(255,255,255,1)" },
  4096: { bg: "#a3e635", bg2: "#84cc16", text: "#1a2e05", glow: "rgba(132,204,22,1)" },
};

const COPY: Record<string, Record<Lang, string>> = {
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  undo: { az: "Geri", en: "Undo", tr: "Geri", ar: "رجوع", ru: "Назад" },
  fresh: { az: "Yeni oyun", en: "New game", tr: "Yeni oyun", ar: "لعبة جديدة", ru: "Новая игра" },
  over: { az: "Oyun bitdi", en: "Game over", tr: "Oyun bitti", ar: "انتهت اللعبة", ru: "Игра окончена" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  stuck: { az: "Gediş qalmadı.", en: "No moves left.", tr: "Hamle kalmadı.", ar: "لم تبقَ حركة.", ru: "Ходов не осталось." },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  hint: { az: "Oxlar və ya WASD. Barmaqla sürüşdür.", en: "Arrows or WASD. Swipe on the board.", tr: "Oklar ya da WASD. Tahtayı kaydır.", ar: "الأسهم أو WASD. اسحب اللوحة.", ru: "Стрелки или WASD. Свайп по полю." },
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => 1 - (1 - t) ** 3;
const easeBack = (t: number) => {
  const c = 1.7;
  return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2;
};
const cellX = (col: number) => PAD + col * (CELL + GAP) + CELL / 2;
const cellY = (row: number) => PAD + row * (CELL + GAP) + CELL / 2;

function readBest() {
  try { return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; } catch { return 0; }
}

export function Game2048() {
  const { lang } = useI18n();
  const game = gameBySlug("2048")!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const api = useRef({ fresh: () => {}, undo: () => {} });
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [over, setOver] = useState(false);
  const [record, setRecord] = useState(false);
  const [toast, setToast] = useState<{ text: string; n: number } | null>(null);
  const [canUndo, setCanUndo] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = {
      grid: Array.from({ length: SIZE }, () => Array(SIZE).fill(0)) as number[][],
      tiles: [] as Tile[],
      particles: [] as Bit[],
      floaters: [] as Floater[],
      stars: Array.from({ length: 36 }, () => ({ x: Math.random() * VW, y: Math.random() * VW, r: 0.4 + Math.random() * 1.3, a: 0.08 + Math.random() * 0.22, tw: Math.random() * TAU })),
      score: 0,
      best: readBest(),
      raised: false,
      animating: false,
      animTime: 0,
      over: false,
      won2048: false,
      won4096: false,
      undo: [] as { values: number[][]; score: number }[],
      shake: 0,
      time: 0,
    };
    let alive = true;
    let last = 0;
    let touch: { x: number; y: number } | null = null;
    let actx: AudioContext | null = null;

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
    const sync = () => { setScore(state.score); setBest(Math.max(state.best, state.score)); setCanUndo(state.undo.length > 0 && !state.animating); };
    const say = (text: string) => setToast({ text, n: Date.now() });
    const paintGrid = () => {
      state.grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
      for (const tile of state.tiles) if (tile.alive) state.grid[tile.row][tile.col] = tile.value;
    };
    const make = (row: number, col: number, value: number): Tile => ({
      value, row, col, x: cellX(col), y: cellY(row), startX: cellX(col), startY: cellY(row), tx: cellX(col), ty: cellY(row),
      targetRow: row, targetCol: col, scale: 1, popT: 0, popIn: 1, alive: true, pendingValue: 0, isMergeTarget: false,
    });
    const spawn = () => {
      const empty: { r: number; c: number }[] = [];
      for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) if (!state.grid[r][c]) empty.push({ r, c });
      if (!empty.length) return;
      const pos = empty[Math.floor(Math.random() * empty.length)];
      const value = Math.random() < 0.9 ? 2 : 4;
      const tile = make(pos.r, pos.c, value);
      tile.popIn = 0;
      tile.scale = 0;
      state.tiles.push(tile);
      state.grid[pos.r][pos.c] = value;
    };
    const movesLeft = () => {
      for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) {
        if (!state.grid[r][c]) return true;
        if (r < SIZE - 1 && state.grid[r][c] === state.grid[r + 1][c]) return true;
        if (c < SIZE - 1 && state.grid[r][c] === state.grid[r][c + 1]) return true;
      }
      return false;
    };
    const endGame = () => {
      if (!alive) return;
      state.over = true;
      setOver(true);
      setRecord(state.raised && state.score > 0);
      sync();
      sfx(220, 0.25, "sawtooth", 0.05);
    };
    const burst = (x: number, y: number, color: string) => {
      for (let i = 0; i < 10; i += 1) {
        const a = Math.random() * TAU;
        const sp = 40 + Math.random() * 140;
        state.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 1.8 + Math.random(), size: 2, color });
      }
    };
    const fresh = () => {
      state.tiles = [];
      state.particles = [];
      state.floaters = [];
      state.score = 0;
      state.raised = false;
      state.animating = false;
      state.over = false;
      state.won2048 = false;
      state.won4096 = false;
      state.undo = [];
      state.grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
      spawn();
      spawn();
      setOver(false);
      setRecord(false);
      setToast(null);
      sync();
      sfx(520, 0.1, "sine", 0.04);
    };
    const undo = () => {
      if (state.animating || !state.undo.length) return;
      const snap = state.undo.pop()!;
      state.grid = snap.values.map((row) => row.slice());
      state.score = snap.score;
      state.over = false;
      state.tiles = [];
      for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) if (state.grid[r][c]) state.tiles.push(make(r, c, state.grid[r][c]));
      setOver(false);
      sync();
      sfx(560, 0.08, "sine", 0.03);
    };
    const move = (dir: Dir) => {
      if (state.animating || state.over) return;
      const lines: { r: number; c: number }[][] = [];
      for (let i = 0; i < SIZE; i += 1) {
        const line = [];
        for (let k = 0; k < SIZE; k += 1) {
          if (dir === "left") line.push({ r: i, c: k });
          if (dir === "right") line.push({ r: i, c: SIZE - 1 - k });
          if (dir === "up") line.push({ r: k, c: i });
          if (dir === "down") line.push({ r: SIZE - 1 - k, c: i });
        }
        lines.push(line);
      }
      let moved = false;
      let gained = 0;
      for (const tile of state.tiles) {
        tile.targetRow = tile.row;
        tile.targetCol = tile.col;
        tile.isMergeTarget = false;
        tile.pendingValue = 0;
      }
      for (const line of lines) {
        const tiles = line.map((pos) => state.tiles.find((tile) => tile.alive && tile.row === pos.r && tile.col === pos.c)).filter(Boolean) as Tile[];
        let write = 0;
        let i = 0;
        while (i < tiles.length) {
          const cur = tiles[i];
          const next = tiles[i + 1];
          const target = line[write];
          if (next && cur.value === next.value) {
            cur.targetRow = target.r;
            cur.targetCol = target.c;
            cur.isMergeTarget = true;
            cur.pendingValue = cur.value * 2;
            next.targetRow = target.r;
            next.targetCol = target.c;
            next.alive = false;
            gained += cur.value * 2;
            moved = true;
            i += 2;
          } else {
            cur.targetRow = target.r;
            cur.targetCol = target.c;
            if (cur.row !== target.r || cur.col !== target.c) moved = true;
            i += 1;
          }
          write += 1;
        }
      }
      if (!moved) { sfx(200, 0.05, "square", 0.015); return; }
      for (const tile of state.tiles) {
        if (!tile.alive) continue;
        tile.startX = tile.x;
        tile.startY = tile.y;
        tile.tx = cellX(tile.targetCol);
        tile.ty = cellY(tile.targetRow);
      }
      state.undo.push({ values: state.grid.map((row) => row.slice()), score: state.score });
      if (state.undo.length > 20) state.undo.shift();
      state.score += gained;
      state.animating = true;
      state.animTime = 0;
      sync();
      sfx(620, 0.05, "sine", 0.018);
    };

    const finish = () => {
      for (const tile of state.tiles) {
        if (!tile.alive) continue;
        tile.row = tile.targetRow;
        tile.col = tile.targetCol;
        tile.x = tile.tx;
        tile.y = tile.ty;
        if (!tile.isMergeTarget) continue;
        tile.value = tile.pendingValue;
        tile.isMergeTarget = false;
        tile.scale = 1.28;
        tile.popT = 1;
        const color = COLORS[tile.value] || COLORS[4096];
        burst(tile.x, tile.y, color.glow);
        state.floaters.push({ x: tile.x, y: tile.y - 8, text: `+${tile.value}`, color: color.bg, life: 1, vy: -60 });
        sfx(400 + Math.min(1200, Math.log2(tile.value) * 100), 0.1, "sine", 0.035);
        if (tile.value === 2048 && !state.won2048) { state.won2048 = true; state.shake = 8; say("2048"); }
        if (tile.value > 2048 && !state.won4096) { state.won4096 = true; state.shake = 10; say(String(tile.value)); }
      }
      state.tiles = state.tiles.filter((tile) => tile.alive);
      state.animating = false;
      spawn();
      paintGrid();
      if (state.score > state.best) {
        state.best = state.score;
        state.raised = true;
        try { localStorage.setItem(BEST_KEY, String(state.best)); } catch { /* ignore */ }
      }
      sync();
      if (!movesLeft()) window.setTimeout(endGame, 280);
    };

    const rounded = (x: number, y: number, w: number, h: number, r: number) => {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    };
    const draw = () => {
      ctx.save();
      if (state.shake > 0) ctx.translate((Math.random() - 0.5) * state.shake, (Math.random() - 0.5) * state.shake);
      ctx.fillStyle = "#04070e";
      ctx.fillRect(0, 0, VW, VW);
      for (const star of state.stars) {
        ctx.globalAlpha = star.a * (0.6 + Math.sin(state.time * 2 + star.tw) * 0.4);
        ctx.fillStyle = "#cfe9ff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) {
        const x = PAD + c * (CELL + GAP);
        const y = PAD + r * (CELL + GAP);
        ctx.fillStyle = "rgba(255,255,255,.045)";
        rounded(x, y, CELL, CELL, 12);
        ctx.fill();
      }
      for (const tile of [...state.tiles].sort((a, b) => a.value - b.value)) {
        const colors = COLORS[tile.value] || COLORS[4096];
        const size = CELL * tile.scale;
        if (size < 2) continue;
        const x = tile.x - size / 2;
        const y = tile.y - size / 2;
        const grad = ctx.createLinearGradient(x, y, x, y + size);
        grad.addColorStop(0, colors.bg);
        grad.addColorStop(1, colors.bg2);
        ctx.fillStyle = grad;
        rounded(x, y, size, size, 12);
        ctx.fill();
        const font = (tile.value < 100 ? 42 : tile.value < 1000 ? 34 : tile.value < 10000 ? 26 : 22) * tile.scale;
        ctx.fillStyle = colors.text;
        ctx.font = `900 ${font}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(tile.value), tile.x, tile.y + 1);
      }
      for (const bit of state.particles) {
        ctx.globalAlpha = Math.max(0, bit.life);
        ctx.fillStyle = bit.color;
        ctx.beginPath();
        ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (const floater of state.floaters) {
        ctx.globalAlpha = Math.max(0, floater.life);
        ctx.fillStyle = floater.color;
        ctx.font = "900 16px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(floater.text, floater.x, floater.y);
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const loop = (ts: number) => {
      if (!alive) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000;
      last = ts;
      if (dt > 0.06) dt = 0.06;
      state.time += dt;
      if (state.animating) {
        state.animTime += dt;
        const t = Math.min(1, state.animTime / MOVE_DUR);
        const eased = ease(t);
        for (const tile of state.tiles) {
          if (!tile.alive) continue;
          tile.x = lerp(tile.startX, tile.tx, eased);
          tile.y = lerp(tile.startY, tile.ty, eased);
        }
        if (t >= 1) finish();
      }
      for (const tile of state.tiles) {
        if (tile.popT > 0) { tile.popT = Math.max(0, tile.popT - dt / 0.18); tile.scale = 1 + tile.popT * 0.28; }
        if (tile.popIn < 1) { tile.popIn = Math.min(1, tile.popIn + dt * 5); tile.scale = easeBack(tile.popIn); }
      }
      for (let i = state.particles.length - 1; i >= 0; i -= 1) {
        const bit = state.particles[i];
        bit.x += bit.vx * dt; bit.y += bit.vy * dt; bit.life -= bit.decay * dt;
        if (bit.life <= 0) state.particles.splice(i, 1);
      }
      for (let i = state.floaters.length - 1; i >= 0; i -= 1) {
        const floater = state.floaters[i];
        floater.y += floater.vy * dt; floater.life -= dt * 1.3;
        if (floater.life <= 0) state.floaters.splice(i, 1);
      }
      if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 30);
      draw();
      requestAnimationFrame(loop);
    };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(VW * dpr);
      canvas.height = Math.round(VW * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.code === "KeyZ") { event.preventDefault(); undo(); return; }
      if (event.code === "KeyR") { event.preventDefault(); fresh(); return; }
      const dir = event.code === "ArrowLeft" || event.code === "KeyA" ? "left"
        : event.code === "ArrowRight" || event.code === "KeyD" ? "right"
        : event.code === "ArrowUp" || event.code === "KeyW" ? "up"
        : event.code === "ArrowDown" || event.code === "KeyS" ? "down" : null;
      if (dir) { event.preventDefault(); move(dir); }
    };
    const down = (event: PointerEvent) => { touch = { x: event.clientX, y: event.clientY }; };
    const up = (event: PointerEvent) => {
      if (!touch) return;
      const dx = event.clientX - touch.x;
      const dy = event.clientY - touch.y;
      touch = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
      move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
    };
    api.current = { fresh, undo };
    fit();
    setBest(state.best);
    fresh();
    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", () => { touch = null; });
    const frame = requestAnimationFrame(loop);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointerup", up);
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
  return (
    <main className="g2048-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="qala-top">
        <p className="eyebrow"><i /><a href={gamePath(lang)}>{back}</a></p>
        <div className="kosmos-head"><h1>{game.name[lang]}</h1></div>
      </div>
      <dl className="g2048-hud">
        <div><dt>{COPY.score[lang]}</dt><dd>{score}</dd></div>
        <div><dt>{COPY.best[lang]}</dt><dd className="is-gold">{Math.max(best, score)}</dd></div>
      </dl>
      <div className="g2048-board">
        <canvas ref={canvasRef} />
        {toast ? <p key={toast.n} className="qala-toast">{toast.text}</p> : null}
        {over ? (
          <div className="ilan-overlay">
            <div className="ilan-panel">
              <h2>{record ? COPY.record[lang] : COPY.over[lang]}</h2>
              <p className="ilan-big">{score}</p>
              <p>{COPY.stuck[lang]}</p>
              <div className="ilan-actions">
                <button type="button" className="is-mint" onClick={() => api.current.fresh()}>{COPY.again[lang]}</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="g2048-actions">
        <button type="button" disabled={!canUndo} onClick={() => api.current.undo()}>{COPY.undo[lang]}</button>
        <button type="button" className="is-mint" onClick={() => api.current.fresh()}>{COPY.fresh[lang]}</button>
      </div>
      <p className="ilan-hint">{COPY.hint[lang]}</p>
      <footer className="game-foot">
        <p className="xo-version">{GAME_VERSION}</p>
        <p className="why-lead">{game.blurb[lang]}</p>
      </footer>
    </main>
  );
}
