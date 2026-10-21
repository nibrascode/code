import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const COLS = 10;
const ROWS = 20;
const CELL = 30;
const BOARD_W = COLS * CELL;
const BOARD_H = ROWS * CELL;
const BEST_KEY = "nibras-tetris-v1";
const TAU = Math.PI * 2;

type Kind = "I" | "O" | "T" | "S" | "Z" | "J" | "L";
type Mode = "idle" | "playing" | "paused" | "clearing" | "over";
type Matrix = number[][];
type Piece = { type: Kind; matrix: Matrix; rotation: number; color: string; glow: string; x: number; y: number };
type Bit = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; color: string };

const PIECES: Record<Kind, { color: string; glow: string; matrix: Matrix }> = {
  I: { color: "#22d3ee", glow: "rgba(34,211,238,.8)", matrix: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]] },
  O: { color: "#ffd166", glow: "rgba(255,209,102,.8)", matrix: [[1, 1], [1, 1]] },
  T: { color: "#a78bfa", glow: "rgba(167,139,250,.8)", matrix: [[0, 1, 0], [1, 1, 1], [0, 0, 0]] },
  S: { color: "#6ee7b7", glow: "rgba(110,231,183,.8)", matrix: [[0, 1, 1], [1, 1, 0], [0, 0, 0]] },
  Z: { color: "#ff5c7a", glow: "rgba(255,92,122,.8)", matrix: [[1, 1, 0], [0, 1, 1], [0, 0, 0]] },
  J: { color: "#60a5fa", glow: "rgba(96,165,250,.8)", matrix: [[1, 0, 0], [1, 1, 1], [0, 0, 0]] },
  L: { color: "#fb923c", glow: "rgba(251,146,60,.8)", matrix: [[0, 0, 1], [1, 1, 1], [0, 0, 0]] },
};

const KICKS: Record<string, [number, number][]> = {
  "0>1": [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
  "1>0": [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
  "1>2": [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
  "2>1": [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
  "2>3": [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
  "3>2": [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
  "3>0": [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
  "0>3": [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
};
const KICKS_I: Record<string, [number, number][]> = {
  "0>1": [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
  "1>0": [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
  "1>2": [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
  "2>1": [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
  "2>3": [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
  "3>2": [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
  "3>0": [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
  "0>3": [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
};

const COPY: Record<string, Record<Lang, string>> = {
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  lines: { az: "Xətt", en: "Lines", tr: "Satır", ar: "الخطوط", ru: "Линии" },
  level: { az: "Səviyyə", en: "Level", tr: "Seviye", ar: "المستوى", ru: "Уровень" },
  combo: { az: "Kombo", en: "Combo", tr: "Kombo", ar: "سلسلة", ru: "Серия" },
  hold: { az: "Saxla", en: "Hold", tr: "Tut", ar: "احتفظ", ru: "Запас" },
  next: { az: "Sonrakı", en: "Next", tr: "Sonraki", ar: "التالي", ru: "Дальше" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  start: { az: "Başla", en: "Start", tr: "Başla", ar: "ابدأ", ru: "Старт" },
  resume: { az: "Davam et", en: "Continue", tr: "Devam et", ar: "أكمل", ru: "Дальше" },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  pause: { az: "Pauza", en: "Pause", tr: "Duraklat", ar: "توقف", ru: "Пауза" },
  over: { az: "Oyun bitdi", en: "Game over", tr: "Oyun bitti", ar: "انتهت اللعبة", ru: "Игра окончена" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  drop: { az: "Düş", en: "Drop", tr: "Düş", ar: "أسقط", ru: "Сброс" },
  lead: {
    az: "Sətirləri doldur. Hər 10 xətt yeni səviyyədir.",
    en: "Fill the rows. Every 10 lines is a new level.",
    tr: "Satırları doldur. Her 10 satır yeni seviye.",
    ar: "املأ الصفوف. كل 10 خطوط مستوى جديد.",
    ru: "Заполняй ряды. Каждые 10 линий — новый уровень.",
  },
  wait: { az: "Fiqur səni gözləyir.", en: "The piece is waiting.", tr: "Şekil seni bekliyor.", ar: "القطعة تنتظرك.", ru: "Фигура ждёт." },
  hint: {
    az: "Oxlar hərəkət. Yuxarı fırladır. Boşluq düşürür. C saxlayır.",
    en: "Arrows move. Up rotates. Space drops. C holds.",
    tr: "Oklar hareket. Yukarı döndürür. Boşluk düşürür. C tutar.",
    ar: "الأسهم تحرّك. الأعلى يدوّر. المسافة تُسقط. C يحفظ.",
    ru: "Стрелки двигают. Вверх крутит. Пробел роняет. C прячет.",
  },
};

function readBest() {
  try { return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; } catch { return 0; }
}
function clone(matrix: Matrix) { return matrix.map((row) => row.slice()); }
function rotateMatrix(matrix: Matrix, dir: number) {
  const n = matrix.length;
  const out = Array.from({ length: n }, () => Array(n).fill(0));
  for (let r = 0; r < n; r += 1) for (let c = 0; c < n; c += 1) out[dir === 1 ? c : n - 1 - c][dir === 1 ? n - 1 - r : r] = matrix[r][c];
  return out;
}
function shade(hex: string, percent: number) {
  const num = Number.parseInt(hex.replace("#", ""), 16);
  const channel = (value: number) => Math.max(0, Math.min(255, value + percent));
  const r = channel(num >> 16);
  const g = channel((num >> 8) & 255);
  const b = channel(num & 255);
  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
}

export function TetrisGame() {
  const { lang } = useI18n();
  const game = gameBySlug("tetris")!;
  const boardRef = useRef<HTMLCanvasElement>(null);
  const holdRef = useRef<HTMLCanvasElement>(null);
  const nextRef = useRef<HTMLCanvasElement>(null);
  const api = useRef({ start: () => {}, pause: () => {}, resume: () => {}, act: (_dir: string) => {} });
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [record, setRecord] = useState(false);

  useEffect(() => {
    const boardCanvas = boardRef.current;
    const holdCanvas = holdRef.current;
    const nextCanvas = nextRef.current;
    if (!boardCanvas || !holdCanvas || !nextCanvas) return;
    const bctx = boardCanvas.getContext("2d");
    const hctx = holdCanvas.getContext("2d");
    const nctx = nextCanvas.getContext("2d");
    if (!bctx || !hctx || !nctx) return;

    const G = {
      mode: "idle" as Mode,
      board: [] as (string | null)[][],
      current: null as Piece | null,
      hold: null as Kind | null,
      holdUsed: false,
      next: [] as Kind[],
      bag: [] as Kind[],
      score: 0,
      lines: 0,
      level: 1,
      combo: 0,
      best: readBest(),
      dropInterval: 1000,
      dropTimer: 0,
      lockTimer: 0,
      lockDelay: 500,
      lockResets: 0,
      particles: [] as Bit[],
      shake: 0,
      flash: 0,
      clearing: null as { rows: number[]; timer: number; duration: number } | null,
    };
    let alive = true;
    let last = 0;
    let actx: AudioContext | null = null;
    const repeats = new Map<string, number>();

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
    const sync = () => { setScore(G.score); setLines(G.lines); setLevel(G.level); setCombo(G.combo); setBest(Math.max(G.best, G.score)); };
    const empty = () => Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    const refill = () => {
      const types: Kind[] = ["I", "O", "T", "S", "Z", "J", "L"];
      for (let i = types.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [types[i], types[j]] = [types[j], types[i]];
      }
      G.bag.push(...types);
    };
    const take = () => { if (G.bag.length < 2) refill(); return G.bag.shift()!; };
    const make = (type: Kind): Piece => {
      const spec = PIECES[type];
      return { type, matrix: clone(spec.matrix), rotation: 0, color: spec.color, glow: spec.glow, x: Math.floor((COLS - spec.matrix.length) / 2), y: -1 };
    };
    const collides = (piece: Piece, dx: number, dy: number, matrix = piece.matrix) => {
      for (let r = 0; r < matrix.length; r += 1) {
        for (let c = 0; c < matrix[r].length; c += 1) {
          if (!matrix[r][c]) continue;
          const x = piece.x + c + dx;
          const y = piece.y + r + dy;
          if (x < 0 || x >= COLS || y >= ROWS) return true;
          if (y >= 0 && G.board[y][x]) return true;
        }
      }
      return false;
    };
    const gameOver = () => {
      G.mode = "over";
      const isRec = G.score > G.best;
      if (isRec) {
        G.best = G.score;
        try { localStorage.setItem(BEST_KEY, String(G.best)); } catch { /* ignore */ }
      }
      setRecord(isRec);
      setMode("over");
      sync();
      sfx(220, 0.25, "sawtooth", 0.05);
    };
    const spawn = () => {
      while (G.next.length < 2) G.next.push(take());
      const type = G.next.shift()!;
      G.next.push(take());
      G.current = make(type);
      G.holdUsed = false;
      if (collides(G.current, 0, 0)) gameOver();
    };
    const move = (dx: number, dy: number) => {
      if (G.mode !== "playing" || !G.current) return false;
      if (collides(G.current, dx, dy)) return false;
      G.current.x += dx;
      G.current.y += dy;
      if (dy === 0 && G.lockResets < 15) { G.lockTimer = 0; G.lockResets += 1; }
      return true;
    };
    const rotate = (dir: number) => {
      if (G.mode !== "playing" || !G.current) return;
      const piece = G.current;
      const from = piece.rotation;
      const to = (from + dir + 4) % 4;
      const matrix = rotateMatrix(piece.matrix, dir);
      const kicks = (piece.type === "I" ? KICKS_I : KICKS)[`${from}>${to}`] || [[0, 0]];
      for (const [kx, ky] of kicks) {
        if (!collides(piece, kx, -ky, matrix)) {
          piece.matrix = matrix;
          piece.rotation = to;
          piece.x += kx;
          piece.y -= ky;
          if (G.lockResets < 15) { G.lockTimer = 0; G.lockResets += 1; }
          sfx(720, 0.04, "sine", 0.015);
          return;
        }
      }
    };
    const lock = () => {
      const piece = G.current;
      if (!piece) return;
      for (let r = 0; r < piece.matrix.length; r += 1) {
        for (let c = 0; c < piece.matrix[r].length; c += 1) {
          if (!piece.matrix[r][c]) continue;
          const y = piece.y + r;
          const x = piece.x + c;
          if (y < 0) { gameOver(); return; }
          G.board[y][x] = piece.color;
        }
      }
      const full = G.board.map((row, index) => (row.every(Boolean) ? index : -1)).filter((index) => index >= 0);
      G.current = null;
      G.lockTimer = 0;
      G.lockResets = 0;
      if (!full.length) { G.combo = 0; sync(); spawn(); return; }
      G.mode = "clearing";
      setMode("playing");
      G.clearing = { rows: full, timer: 0, duration: 320 };
      const n = full.length;
      G.score += [0, 100, 300, 500, 800][n] * G.level + (G.combo > 0 ? 50 * G.combo * G.level : 0);
      G.lines += n;
      G.combo += 1;
      const nextLevel = Math.floor(G.lines / 10) + 1;
      if (nextLevel > G.level) { G.level = nextLevel; G.dropInterval = Math.max(80, 1000 - (G.level - 1) * 80); sfx(880, 0.15, "sine", 0.04); }
      for (const row of full) for (let c = 0; c < COLS; c += 1) {
        const color = G.board[row][c] || "#ffd166";
        const angle = Math.random() * TAU;
        const speed = 60 + Math.random() * 150;
        G.particles.push({ x: c * CELL + CELL / 2, y: row * CELL + CELL / 2, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, decay: 1.6 + Math.random(), size: 2, color });
      }
      G.shake = Math.min(10, 3 + n * 2);
      G.flash = Math.min(0.8, 0.2 + n * 0.15);
      sync();
      sfx(440 + n * 120, 0.1, "square", 0.03);
    };
    const hardDrop = () => {
      if (G.mode !== "playing" || !G.current) return;
      let dropped = 0;
      while (!collides(G.current, 0, 1)) { G.current.y += 1; dropped += 1; }
      G.score += dropped * 2;
      sync();
      lock();
      sfx(280, 0.08, "square", 0.03);
      G.shake = 3;
    };
    const softDrop = () => {
      if (!G.current || collides(G.current, 0, 1)) return;
      G.current.y += 1;
      G.score += 1;
      G.dropTimer = 0;
      sync();
    };
    const holdPiece = () => {
      if (G.mode !== "playing" || !G.current || G.holdUsed) return;
      const current = G.current.type;
      if (G.hold) { const saved = G.hold; G.hold = current; G.current = make(saved); }
      else { G.hold = current; spawn(); }
      G.holdUsed = true;
      sfx(560, 0.06, "sine", 0.025);
    };
    const finishClear = () => {
      const rows = [...(G.clearing?.rows || [])].sort((a, b) => b - a);
      for (const row of rows) { G.board.splice(row, 1); G.board.unshift(Array(COLS).fill(null)); }
      G.clearing = null;
      G.mode = "playing";
      spawn();
    };

    const drawBlock = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
      const gradient = ctx.createLinearGradient(x, y, x, y + size);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, shade(color, -30));
      ctx.fillStyle = gradient;
      ctx.fillRect(x + 1, y + 1, size - 2, size - 2);
      ctx.fillStyle = "rgba(255,255,255,.35)";
      ctx.fillRect(x + 3, y + 3, size - 6, 2);
    };
    const drawMini = (ctx: CanvasRenderingContext2D, type: Kind | null) => {
      ctx.clearRect(0, 0, 120, 120);
      ctx.fillStyle = "rgba(4,7,14,.45)";
      ctx.fillRect(0, 0, 120, 120);
      if (!type) return;
      const matrix = PIECES[type].matrix;
      let minR = matrix.length; let maxR = -1; let minC = matrix.length; let maxC = -1;
      matrix.forEach((row, r) => row.forEach((cell, c) => { if (cell) { minR = Math.min(minR, r); maxR = Math.max(maxR, r); minC = Math.min(minC, c); maxC = Math.max(maxC, c); } }));
      const size = 20;
      const startX = 60 - ((maxC - minC + 1) * size) / 2;
      const startY = 60 - ((maxR - minR + 1) * size) / 2;
      for (let r = minR; r <= maxR; r += 1) for (let c = minC; c <= maxC; c += 1) if (matrix[r][c]) drawBlock(ctx, startX + (c - minC) * size, startY + (r - minR) * size, size, PIECES[type].color);
    };
    const ghostY = () => {
      if (!G.current) return 0;
      let y = G.current.y;
      while (!collides(G.current, 0, y - G.current.y + 1)) y += 1;
      return y;
    };
    const draw = () => {
      bctx.fillStyle = "#04070e";
      bctx.fillRect(0, 0, BOARD_W, BOARD_H);
      bctx.strokeStyle = "rgba(255,255,255,.04)";
      bctx.beginPath();
      for (let c = 1; c < COLS; c += 1) { bctx.moveTo(c * CELL + 0.5, 0); bctx.lineTo(c * CELL + 0.5, BOARD_H); }
      for (let r = 1; r < ROWS; r += 1) { bctx.moveTo(0, r * CELL + 0.5); bctx.lineTo(BOARD_W, r * CELL + 0.5); }
      bctx.stroke();
      for (let r = 0; r < ROWS; r += 1) for (let c = 0; c < COLS; c += 1) {
        const color = G.board[r][c];
        if (!color) continue;
        const clearing = G.clearing?.rows.includes(r);
        bctx.globalAlpha = clearing ? 1 - (G.clearing!.timer / G.clearing!.duration) : 1;
        drawBlock(bctx, c * CELL, r * CELL, CELL, color);
      }
      bctx.globalAlpha = 1;
      if (G.current && G.mode === "playing") {
        const piece = G.current;
        const gy = ghostY();
        bctx.strokeStyle = piece.color;
        bctx.globalAlpha = 0.28;
        piece.matrix.forEach((row, r) => row.forEach((cell, c) => { if (cell && gy + r >= 0) bctx.strokeRect((piece.x + c) * CELL + 3, (gy + r) * CELL + 3, CELL - 6, CELL - 6); }));
        bctx.globalAlpha = 1;
        piece.matrix.forEach((row, r) => row.forEach((cell, c) => { if (cell && piece.y + r >= 0) drawBlock(bctx, (piece.x + c) * CELL, (piece.y + r) * CELL, CELL, piece.color); }));
      }
      for (const bit of G.particles) { bctx.globalAlpha = Math.max(0, bit.life); bctx.fillStyle = bit.color; bctx.beginPath(); bctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU); bctx.fill(); }
      bctx.globalAlpha = 1;
      if (G.flash > 0) { bctx.fillStyle = `rgba(255,255,255,${G.flash * 0.14})`; bctx.fillRect(0, 0, BOARD_W, BOARD_H); }
      drawMini(hctx, G.hold);
      drawMini(nctx, G.next[0] || null);
      boardCanvas.style.transform = G.shake > 0 ? `translate(${(Math.random() - 0.5) * G.shake}px, ${(Math.random() - 0.5) * G.shake}px)` : "";
    };

    const update = (dt: number) => {
      const sec = dt / 1000;
      for (let i = G.particles.length - 1; i >= 0; i -= 1) {
        const bit = G.particles[i];
        bit.x += bit.vx * sec; bit.y += bit.vy * sec; bit.life -= bit.decay * sec;
        if (bit.life <= 0) G.particles.splice(i, 1);
      }
      if (G.shake > 0) G.shake = Math.max(0, G.shake - sec * 30);
      if (G.flash > 0) G.flash = Math.max(0, G.flash - sec * 2.4);
      if (G.mode === "clearing" && G.clearing) { G.clearing.timer += dt; if (G.clearing.timer >= G.clearing.duration) finishClear(); return; }
      if (G.mode !== "playing" || !G.current) return;
      G.dropTimer += dt;
      if (G.dropTimer >= G.dropInterval) {
        G.dropTimer = 0;
        if (collides(G.current, 0, 1)) G.lockTimer += G.dropInterval;
        else { G.current.y += 1; G.lockResets = 0; }
      }
      if (G.current && collides(G.current, 0, 1)) { G.lockTimer += dt; if (G.lockTimer >= G.lockDelay) lock(); }
      else G.lockTimer = 0;
    };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      boardCanvas.width = BOARD_W * dpr;
      boardCanvas.height = BOARD_H * dpr;
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const start = () => {
      G.mode = "playing";
      G.board = empty();
      G.current = null; G.hold = null; G.holdUsed = false; G.next = []; G.bag = [];
      G.score = 0; G.lines = 0; G.level = 1; G.combo = 0; G.dropInterval = 1000; G.dropTimer = 0; G.lockTimer = 0; G.lockResets = 0;
      G.particles = []; G.shake = 0; G.flash = 0; G.clearing = null;
      refill();
      spawn();
      setMode("playing"); setRecord(false); sync();
      sfx(520, 0.1, "sine", 0.04);
    };
    const pause = () => { if (G.mode !== "playing") return; G.mode = "paused"; setMode("paused"); };
    const resume = () => { if (G.mode !== "paused") return; G.mode = "playing"; setMode("playing"); };
    const act = (dir: string) => {
      if (dir === "left") move(-1, 0);
      if (dir === "right") move(1, 0);
      if (dir === "rotate") rotate(1);
      if (dir === "soft") softDrop();
      if (dir === "hard") hardDrop();
      if (dir === "hold") holdPiece();
    };
    api.current = { start, pause, resume, act };

    const onKey = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        if (G.mode === "idle" || G.mode === "over") start();
        else if (G.mode === "playing") hardDrop();
        else if (G.mode === "paused") resume();
        return;
      }
      if (G.mode !== "playing") return;
      if (event.code === "ArrowLeft") { event.preventDefault(); move(-1, 0); }
      if (event.code === "ArrowRight") { event.preventDefault(); move(1, 0); }
      if (event.code === "ArrowDown") { event.preventDefault(); softDrop(); }
      if (event.code === "ArrowUp" || event.code === "KeyX") { event.preventDefault(); rotate(1); }
      if (event.code === "KeyZ") { event.preventDefault(); rotate(-1); }
      if (event.code === "KeyC") { event.preventDefault(); holdPiece(); }
      if (event.code === "KeyP" || event.code === "Escape") { event.preventDefault(); pause(); }
    };
    const onHide = () => { if (document.hidden && G.mode === "playing") pause(); };
    const press = (event: PointerEvent) => {
      const dir = (event.currentTarget as HTMLElement).dataset.dir;
      if (!dir) return;
      event.preventDefault();
      act(dir);
      if (dir === "left" || dir === "right" || dir === "soft") {
        const timer = window.setInterval(() => act(dir), 90);
        repeats.set(dir, timer);
      }
    };
    const release = (event: PointerEvent) => {
      const dir = (event.currentTarget as HTMLElement).dataset.dir;
      if (!dir) return;
      const timer = repeats.get(dir);
      if (timer) window.clearInterval(timer);
      repeats.delete(dir);
    };
    document.querySelectorAll<HTMLElement>(".tetris-controls button").forEach((button) => {
      button.addEventListener("pointerdown", press);
      button.addEventListener("pointerup", release);
      button.addEventListener("pointercancel", release);
      button.addEventListener("pointerleave", release);
    });

    fit();
    G.board = empty();
    setBest(G.best);
    window.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onHide);
    const frame = requestAnimationFrame(function loop(ts: number) {
      if (!alive) return;
      if (!last) last = ts;
      let dt = ts - last;
      last = ts;
      if (dt > 100) dt = 100;
      if (G.mode === "playing" || G.mode === "clearing") update(dt);
      draw();
      requestAnimationFrame(loop);
    });
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onHide);
      repeats.forEach((timer) => window.clearInterval(timer));
      document.querySelectorAll<HTMLElement>(".tetris-controls button").forEach((button) => {
        button.removeEventListener("pointerdown", press);
        button.removeEventListener("pointerup", release);
        button.removeEventListener("pointercancel", release);
        button.removeEventListener("pointerleave", release);
      });
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
  return (
    <main className="tetris-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="qala-top">
        <p className="eyebrow"><i /><a href={gamePath(lang)}>{back}</a></p>
        <div className="kosmos-head"><h1>{game.name[lang]}</h1><p className="xo-version">{GAME_VERSION}</p></div>
      </div>
      <div className="tetris-layout">
        <div className="tetris-side">
          <canvas ref={holdRef} width={120} height={120} aria-label={COPY.hold[lang]} />
          <p><b>{score}</b><span>{COPY.score[lang]}</span></p>
          <p><b>{lines}</b><span>{COPY.lines[lang]}</span></p>
        </div>
        <div className="tetris-board">
          <canvas ref={boardRef} />
          {mode === "playing" || mode === "clearing" ? <button type="button" className="kosmos-pause" onClick={() => api.current.pause()} aria-label={COPY.pause[lang]}>❚❚</button> : null}
          {mode !== "playing" && mode !== "clearing" ? (
            <div className="ilan-overlay">
              <div className="ilan-panel">
                <h2>{mode === "paused" ? COPY.pause[lang] : mode === "over" ? (record ? COPY.record[lang] : COPY.over[lang]) : game.name[lang]}</h2>
                {mode === "over" ? <p className="ilan-big">{score}</p> : <p>{mode === "paused" ? COPY.wait[lang] : COPY.lead[lang]}</p>}
                {mode === "over" ? <p className="ilan-mini">{COPY.lines[lang]} {lines} · {COPY.level[lang]} {level} · {COPY.best[lang]} {Math.max(best, score)}</p> : null}
                <div className="ilan-actions">
                  {mode === "paused" ? <button type="button" className="is-mint" onClick={() => api.current.resume()}>{COPY.resume[lang]}</button> : null}
                  <button type="button" className={mode === "paused" ? "" : "is-mint"} onClick={() => api.current.start()}>{mode === "idle" ? COPY.start[lang] : COPY.again[lang]}</button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="tetris-side">
          <canvas ref={nextRef} width={120} height={120} aria-label={COPY.next[lang]} />
          <p><b>{level}</b><span>{COPY.level[lang]}</span></p>
          <p><b>{combo}</b><span>{COPY.combo[lang]}</span></p>
        </div>
      </div>
      <div className="tetris-controls">
        <button type="button" data-dir="left" aria-label="left">◀</button>
        <button type="button" data-dir="rotate" aria-label="rotate">⟳</button>
        <button type="button" data-dir="right" aria-label="right">▶</button>
        <button type="button" data-dir="soft" aria-label="down">▼</button>
        <button type="button" data-dir="hard" className="is-wide">{COPY.drop[lang]}</button>
        <button type="button" data-dir="hold" className="is-wide">{COPY.hold[lang]}</button>
      </div>
      <p className="ilan-hint">{COPY.hint[lang]}</p>
    </main>
  );
}
