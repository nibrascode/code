import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const VW = 480;
const VH = 640;
const COLS = 8;
const ROWS = 6;
const BRICK_LEFT = 20;
const BRICK_TOP = 80;
const BRICK_PAD = 5;
const BRICK_W = (VW - BRICK_LEFT * 2 - BRICK_PAD * (COLS - 1)) / COLS;
const BRICK_H = 28;
const PADDLE_Y = VH - 40;
const PADDLE_H = 12;
const PADDLE_W = 90;
const PADDLE_WIDE = 130;
const BALL_R = 7;
const BASE_SPEED = 380;
const MAX_SPEED = 620;
const ROW_COLORS = ["#a78bfa", "#60a5fa", "#6ee7b7", "#ffd166", "#fb923c", "#ff5c7a"];
const BEST_KEY = "nibras-neon-v1";
const TAU = Math.PI * 2;

type Mode = "idle" | "playing" | "paused" | "levelclear" | "over";
type Power = "wide" | "multi" | "life";
type ToastKey = "wide" | "narrow" | "multi" | "life" | "clear";
type Brick = { x: number; y: number; w: number; h: number; hp: number; maxHp: number; color: string; flash: number };
type Ball = { x: number; y: number; vx: number; vy: number; radius: number; stuck: boolean; trail: { x: number; y: number }[] };
type Drop = { x: number; y: number; vy: number; type: Power; t: number };
type Bit = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; color: string };
type Floater = { x: number; y: number; text: string; color: string; life: number; vy: number };
type Toast = { key: ToastKey; n: number; bonus?: number; level?: number };

const COPY: Record<string, Record<Lang, string>> = {
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  lives: { az: "Can", en: "Lives", tr: "Can", ar: "الحياة", ru: "Жизни" },
  level: { az: "Səviyyə", en: "Level", tr: "Seviye", ar: "المستوى", ru: "Уровень" },
  combo: { az: "Kombo", en: "Combo", tr: "Kombo", ar: "سلسلة", ru: "Серия" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  start: { az: "Başla", en: "Start", tr: "Başla", ar: "ابدأ", ru: "Старт" },
  resume: { az: "Davam et", en: "Continue", tr: "Devam et", ar: "أكمل", ru: "Дальше" },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  pause: { az: "Pauza", en: "Pause", tr: "Duraklat", ar: "توقف", ru: "Пауза" },
  over: { az: "Oyun bitdi", en: "Game over", tr: "Oyun bitti", ar: "انتهت اللعبة", ru: "Игра окончена" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  lead: {
    az: "Topu idarə et, kərpicləri sındır. Kombo qur, gücləndirməni tut.",
    en: "Steer the ball and break every brick. Build a combo and catch upgrades.",
    tr: "Topu yönet, tuğlaları kır. Kombo kur, güçlendirmeyi tut.",
    ar: "وجّه الكرة وحطّم الطوب. ابنِ سلسلة والتقط التعزيز.",
    ru: "Веди мяч и разбей кирпичи. Собирай серию и лови усиления.",
  },
  wait: { az: "Top səni gözləyir.", en: "The ball is waiting.", tr: "Top seni bekliyor.", ar: "الكرة تنتظرك.", ru: "Мяч ждёт." },
  hint: {
    az: "Oxlar və ya A D. Boşluq topu buraxır. P pauzadır.",
    en: "Arrows or A D. Space launches. P pauses.",
    tr: "Oklar ya da A D. Boşluk topu bırakır. P duraklatır.",
    ar: "الأسهم أو A D. المسافة تطلق الكرة. P توقف.",
    ru: "Стрелки или A D. Пробел запускает. P — пауза.",
  },
  launch: { az: "Toxun və ya boşluq", en: "Tap or space", tr: "Dokun ya da boşluk", ar: "المس أو المسافة", ru: "Нажми или пробел" },
  wide: { az: "Geniş pad", en: "Wide paddle", tr: "Geniş raket", ar: "مضرب عريض", ru: "Широкая ракетка" },
  narrow: { az: "Pad daraldı", en: "Paddle is narrow again", tr: "Raket daraldı", ar: "عاد المضرب ضيقًا", ru: "Ракетка снова узкая" },
  multi: { az: "Çox top", en: "Multi-ball", tr: "Çok top", ar: "كرات أكثر", ru: "Несколько мячей" },
  life: { az: "+1 can", en: "+1 life", tr: "+1 can", ar: "+1 حياة", ru: "+1 жизнь" },
  cleared: { az: "Səviyyə təmizləndi", en: "Level cleared", tr: "Seviye temizlendi", ar: "تم تنظيف المستوى", ru: "Уровень зачищен" },
};

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

function readBest() {
  try { return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; } catch { return 0; }
}

function rounded(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

export function NeonGame() {
  const { lang } = useI18n();
  const game = gameBySlug("neon")!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const api = useRef({ start: () => {}, pause: () => {}, resume: () => {} });
  const launchRef = useRef(COPY.launch[lang]);
  launchRef.current = COPY.launch[lang];
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [record, setRecord] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const G = { mode: "idle" as Mode, score: 0, lives: 3, level: 1, combo: 0, best: readBest(), shake: 0, flash: 0, clear: 0 };
    const paddle = { x: VW / 2, targetX: VW / 2, y: PADDLE_Y, w: PADDLE_W, h: PADDLE_H, wideUntil: 0 };
    let balls: Ball[] = [];
    let bricks: Brick[] = [];
    let drops: Drop[] = [];
    let particles: Bit[] = [];
    let floaters: Floater[] = [];
    const keys = { left: false, right: false };
    let alive = true;
    let last = 0;
    let actx: AudioContext | null = null;

    const sfx = (freq: number, dur = 0.06, type: OscillatorType = "square", vol = 0.02) => {
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
    const sync = () => { setScore(G.score); setLives(G.lives); setLevel(G.level); setCombo(G.combo); setBest(Math.max(G.best, G.score)); };
    const say = (key: ToastKey, extra?: Partial<Toast>) => setToast({ key, n: Date.now(), ...extra });
    const burst = (x: number, y: number, color: string, count = 10, power = 1) => {
      for (let i = 0; i < count; i += 1) {
        const a = Math.random() * TAU;
        const sp = (50 + Math.random() * 150) * power;
        particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 1.6 + Math.random() * 1.4, size: 1.8 + Math.random() * 2.6 * power, color });
      }
      if (particles.length > 320) particles.splice(0, particles.length - 320);
    };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(VW * dpr);
      canvas.height = Math.round(VH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildLevel = (levelNo: number) => {
      bricks = [];
      for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
          const hp = Math.min(5, Math.max(1, Math.ceil((ROWS - r) / 2)) + Math.floor((levelNo - 1) / 2));
          bricks.push({ x: BRICK_LEFT + c * (BRICK_W + BRICK_PAD), y: BRICK_TOP + r * (BRICK_H + BRICK_PAD), w: BRICK_W, h: BRICK_H, hp, maxHp: hp, color: ROW_COLORS[r], flash: 0 });
        }
      }
    };
    const spawnBall = () => { balls = [{ x: paddle.x, y: paddle.y - BALL_R - 2, vx: 0, vy: 0, radius: BALL_R, stuck: true, trail: [] }]; };
    const launchAll = () => {
      for (const ball of balls) {
        if (!ball.stuck) continue;
        ball.stuck = false;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.5;
        const speed = BASE_SPEED + (G.level - 1) * 18;
        ball.vx = Math.cos(angle) * speed;
        ball.vy = Math.sin(angle) * speed;
      }
      sfx(560, 0.08, "sine", 0.035);
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
    const advance = () => {
      G.level += 1;
      buildLevel(G.level);
      paddle.w = PADDLE_W;
      paddle.wideUntil = 0;
      paddle.x = paddle.targetX = VW / 2;
      drops = [];
      spawnBall();
      G.mode = "playing";
      setMode("playing");
      sync();
    };
    const nextLevel = () => {
      G.mode = "levelclear";
      G.clear = 2;
      const bonus = 200 + G.level * 50;
      G.score += bonus;
      G.flash = 0.6;
      sync();
      say("clear", { bonus, level: G.level });
      sfx(660, 0.1, "sine", 0.04);
    };

    const dropPower = (x: number, y: number) => {
      const roll = Math.random() * 100;
      const type: Power = roll < 40 ? "wide" : roll < 80 ? "multi" : "life";
      drops.push({ x, y, vy: 130, type, t: 0 });
    };
    const applyPower = (drop: Drop) => {
      if (drop.type === "wide") { paddle.w = PADDLE_WIDE; paddle.wideUntil = 10; say("wide"); sfx(880, 0.1, "sine", 0.04); }
      else if (drop.type === "multi") {
        const base = balls[0];
        if (base) {
          for (let i = 0; i < 2; i += 1) {
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
            const sp = Math.hypot(base.vx, base.vy) || BASE_SPEED;
            balls.push({ x: base.x, y: base.y, vx: Math.cos(angle) * sp, vy: Math.sin(angle) * sp, radius: BALL_R, stuck: false, trail: [] });
          }
        }
        say("multi");
        sfx(700, 0.08, "sine", 0.04);
      } else { G.lives += 1; sync(); say("life"); sfx(660, 0.1, "sine", 0.04); }
      burst(drop.x, drop.y, "#ffd166", 10, 0.9);
    };
    const hitBrick = (brick: Brick, index: number) => {
      brick.hp -= 1;
      brick.flash = 0.16;
      if (brick.hp > 0) { burst(brick.x + brick.w / 2, brick.y + brick.h / 2, brick.color, 4, 0.7); sfx(280, 0.04, "square", 0.015); return; }
      bricks.splice(index, 1);
      G.combo += 1;
      const points = Math.round(10 * (1 + Math.min(G.combo, 30) * 0.05));
      G.score += points;
      sync();
      burst(brick.x + brick.w / 2, brick.y + brick.h / 2, brick.color, 14);
      floaters.push({ x: brick.x + brick.w / 2, y: brick.y + brick.h / 2, text: `+${points}`, color: brick.color, life: 1, vy: -50 });
      sfx(380 + Math.min(G.combo * 25, 700), 0.05, "square", 0.02);
      if (Math.random() < 0.16) dropPower(brick.x + brick.w / 2, brick.y + brick.h / 2);
      if (bricks.length === 0) nextLevel();
    };
    const ballVsBrick = (ball: Ball) => {
      for (let i = bricks.length - 1; i >= 0; i -= 1) {
        const brick = bricks[i];
        if (ball.x + ball.radius < brick.x || ball.x - ball.radius > brick.x + brick.w) continue;
        if (ball.y + ball.radius < brick.y || ball.y - ball.radius > brick.y + brick.h) continue;
        const oL = ball.x + ball.radius - brick.x;
        const oR = brick.x + brick.w - (ball.x - ball.radius);
        const oT = ball.y + ball.radius - brick.y;
        const oB = brick.y + brick.h - (ball.y - ball.radius);
        const m = Math.min(oL, oR, oT, oB);
        if (m === oL) { ball.x = brick.x - ball.radius; ball.vx = -Math.abs(ball.vx); }
        else if (m === oR) { ball.x = brick.x + brick.w + ball.radius; ball.vx = Math.abs(ball.vx); }
        else if (m === oT) { ball.y = brick.y - ball.radius; ball.vy = -Math.abs(ball.vy); }
        else { ball.y = brick.y + brick.h + ball.radius; ball.vy = Math.abs(ball.vy); }
        hitBrick(brick, i);
        return;
      }
    };

    const update = (dt: number) => {
      if (keys.left) paddle.targetX -= 620 * dt;
      if (keys.right) paddle.targetX += 620 * dt;
      paddle.targetX = clamp(paddle.targetX, paddle.w / 2, VW - paddle.w / 2);
      paddle.x = clamp(paddle.x + (paddle.targetX - paddle.x) * Math.min(1, dt * 20), paddle.w / 2, VW - paddle.w / 2);
      if (paddle.wideUntil > 0) {
        paddle.wideUntil -= dt;
        if (paddle.wideUntil <= 0) { paddle.w = PADDLE_W; say("narrow"); }
      }
      for (let i = balls.length - 1; i >= 0; i -= 1) {
        const ball = balls[i];
        if (ball.stuck) { ball.x = clamp(paddle.x, ball.radius, VW - ball.radius); ball.y = paddle.y - ball.radius - 2; continue; }
        ball.trail.push({ x: ball.x, y: ball.y });
        if (ball.trail.length > 10) ball.trail.shift();
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;
        if (ball.x - ball.radius < 0) { ball.x = ball.radius; ball.vx = Math.abs(ball.vx); }
        if (ball.x + ball.radius > VW) { ball.x = VW - ball.radius; ball.vx = -Math.abs(ball.vx); }
        if (ball.y - ball.radius < 0) { ball.y = ball.radius; ball.vy = Math.abs(ball.vy); }
        if (ball.y - ball.radius > VH) { balls.splice(i, 1); continue; }
        if (ball.vy > 0 && ball.y + ball.radius >= paddle.y && ball.y - ball.radius <= paddle.y + paddle.h && ball.x >= paddle.x - paddle.w / 2 && ball.x <= paddle.x + paddle.w / 2) {
          const rel = (ball.x - paddle.x) / (paddle.w / 2);
          const angle = rel * (Math.PI / 3);
          const speed = Math.min(MAX_SPEED, Math.hypot(ball.vx, ball.vy) * 1.02);
          ball.vx = Math.sin(angle) * speed;
          ball.vy = -Math.abs(Math.cos(angle) * speed);
          ball.y = paddle.y - ball.radius - 1;
          sfx(680, 0.04, "sine", 0.02);
        }
        ballVsBrick(ball);
      }
      if (balls.length === 0 && G.mode === "playing") {
        G.lives -= 1;
        G.combo = 0;
        paddle.w = PADDLE_W;
        paddle.wideUntil = 0;
        G.shake = 5;
        sync();
        if (G.lives <= 0) gameOver();
        else { spawnBall(); sfx(200, 0.2, "sawtooth", 0.05); }
      }
      for (let i = drops.length - 1; i >= 0; i -= 1) {
        const drop = drops[i];
        drop.t += dt;
        drop.y += drop.vy * dt;
        if (drop.y > VH + 20) { drops.splice(i, 1); continue; }
        if (drop.y + 12 >= paddle.y && drop.y - 12 <= paddle.y + paddle.h && drop.x + 12 >= paddle.x - paddle.w / 2 && drop.x - 12 <= paddle.x + paddle.w / 2) {
          applyPower(drop);
          drops.splice(i, 1);
        }
      }
    };
    const updateFx = (dt: number) => {
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const bit = particles[i];
        bit.x += bit.vx * dt; bit.y += bit.vy * dt; bit.vx *= 1 - 2.6 * dt; bit.vy *= 1 - 2.6 * dt; bit.life -= bit.decay * dt;
        if (bit.life <= 0) particles.splice(i, 1);
      }
      for (let i = floaters.length - 1; i >= 0; i -= 1) {
        const floater = floaters[i];
        floater.y += floater.vy * dt; floater.vy *= 1 - 1.6 * dt; floater.life -= dt * 1.4;
        if (floater.life <= 0) floaters.splice(i, 1);
      }
      for (const brick of bricks) if (brick.flash > 0) brick.flash = Math.max(0, brick.flash - dt);
      if (G.shake > 0) G.shake = Math.max(0, G.shake - dt * 30);
      if (G.flash > 0) G.flash = Math.max(0, G.flash - dt * 2.2);
    };

    const draw = () => {
      ctx.save();
      if (G.shake > 0) ctx.translate((Math.random() - 0.5) * G.shake, (Math.random() - 0.5) * G.shake);
      ctx.fillStyle = "#060a14";
      ctx.fillRect(0, 0, VW, VH);
      ctx.strokeStyle = "rgba(255,255,255,.03)";
      ctx.beginPath();
      for (let y = 0; y < VH; y += 40) { ctx.moveTo(0, y + 0.5); ctx.lineTo(VW, y + 0.5); }
      for (let x = 0; x < VW; x += 40) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, VH); }
      ctx.stroke();
      for (const brick of bricks) {
        ctx.globalAlpha = 0.4 + (brick.hp / brick.maxHp) * 0.6;
        ctx.fillStyle = brick.color;
        rounded(ctx, brick.x, brick.y, brick.w, brick.h, 6);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = brick.color;
        ctx.stroke();
        if (brick.maxHp > 1) {
          ctx.fillStyle = "rgba(0,0,0,.55)";
          ctx.font = "900 12px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(String(brick.hp), brick.x + brick.w / 2, brick.y + brick.h / 2);
        }
        if (brick.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${brick.flash * 4})`; rounded(ctx, brick.x, brick.y, brick.w, brick.h, 6); ctx.fill(); }
      }
      for (const drop of drops) {
        const color = drop.type === "wide" ? "#60a5fa" : drop.type === "multi" ? "#a78bfa" : "#ff5c7a";
        ctx.save();
        ctx.translate(drop.x, drop.y + Math.sin(drop.t * 6) * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        rounded(ctx, -11, -11, 22, 22, 6);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = "900 11px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(drop.type === "wide" ? "↔" : drop.type === "multi" ? "●" : "♥", 0, 1);
        ctx.restore();
      }
      ctx.fillStyle = "#22d3a7";
      rounded(ctx, paddle.x - paddle.w / 2, paddle.y, paddle.w, paddle.h, 6);
      ctx.fill();
      for (const ball of balls) {
        for (let i = 0; i < ball.trail.length; i += 1) {
          ctx.globalAlpha = (i / ball.trail.length) * 0.4;
          ctx.fillStyle = "#6ee7b7";
          ctx.beginPath();
          ctx.arc(ball.trail[i].x, ball.trail[i].y, ball.radius * 0.7, 0, TAU);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#d1fae5";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, TAU);
        ctx.fill();
      }
      for (const bit of particles) { ctx.globalAlpha = Math.max(0, bit.life); ctx.fillStyle = bit.color; ctx.beginPath(); ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU); ctx.fill(); }
      ctx.globalAlpha = 1;
      for (const floater of floaters) {
        ctx.globalAlpha = Math.max(0, floater.life);
        ctx.fillStyle = floater.color;
        ctx.font = "900 14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(floater.text, floater.x, floater.y);
      }
      ctx.globalAlpha = 1;
      if (G.mode === "playing" && balls.length && balls.every((ball) => ball.stuck)) {
        ctx.fillStyle = "rgba(255,209,102,.9)";
        ctx.font = "800 13px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(launchRef.current, VW / 2, paddle.y - 48);
      }
      ctx.restore();
      if (G.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${G.flash * 0.15})`; ctx.fillRect(0, 0, VW, VH); }
    };

    const loop = (ts: number) => {
      if (!alive) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000;
      last = ts;
      if (dt > 0.06) dt = 0.06;
      if (G.mode === "playing") { update(dt); updateFx(dt); }
      else if (G.mode === "levelclear") { G.clear -= dt; updateFx(dt); if (G.clear <= 0) advance(); }
      else updateFx(dt);
      draw();
      requestAnimationFrame(loop);
    };

    const start = () => {
      G.mode = "playing"; G.score = 0; G.lives = 3; G.level = 1; G.combo = 0; G.shake = 0; G.flash = 0; G.clear = 0;
      paddle.w = PADDLE_W; paddle.wideUntil = 0; paddle.x = paddle.targetX = VW / 2;
      particles = []; floaters = []; drops = [];
      buildLevel(1); spawnBall();
      setMode("playing"); setRecord(false); setToast(null); sync();
      sfx(520, 0.1, "sine", 0.04);
    };
    const pause = () => { if (G.mode !== "playing") return; G.mode = "paused"; setMode("paused"); };
    const resume = () => { if (G.mode !== "paused") return; G.mode = "playing"; setMode("playing"); };
    api.current = { start, pause, resume };

    const pointerX = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return (event.clientX - rect.left) * (VW / rect.width);
    };
    const down = (event: PointerEvent) => {
      if (G.mode !== "playing") return;
      paddle.targetX = paddle.x = clamp(pointerX(event), paddle.w / 2, VW - paddle.w / 2);
      if (balls.length && balls.every((ball) => ball.stuck)) launchAll();
    };
    const move = (event: PointerEvent) => {
      if (G.mode !== "playing") return;
      if (event.buttons === 0 && event.pointerType === "mouse") return;
      paddle.targetX = clamp(pointerX(event), paddle.w / 2, VW - paddle.w / 2);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        if (G.mode === "idle" || G.mode === "over") start();
        else if (G.mode === "playing" && balls.every((ball) => ball.stuck)) launchAll();
        else if (G.mode === "paused") resume();
        return;
      }
      if (event.code === "ArrowLeft" || event.code === "KeyA") { event.preventDefault(); keys.left = true; }
      if (event.code === "ArrowRight" || event.code === "KeyD") { event.preventDefault(); keys.right = true; }
      if (event.code === "KeyP" || event.code === "Escape") { if (G.mode === "playing") pause(); else if (G.mode === "paused") resume(); }
    };
    const onUp = (event: KeyboardEvent) => {
      if (event.code === "ArrowLeft" || event.code === "KeyA") keys.left = false;
      if (event.code === "ArrowRight" || event.code === "KeyD") keys.right = false;
    };
    const onHide = () => { if (document.hidden && G.mode === "playing") pause(); };

    fit();
    setBest(G.best);
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onUp);
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    document.addEventListener("visibilitychange", onHide);
    const frame = requestAnimationFrame(loop);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onUp);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
  const toastText = !toast ? ""
    : toast.key === "wide" ? COPY.wide[lang]
    : toast.key === "narrow" ? COPY.narrow[lang]
    : toast.key === "multi" ? COPY.multi[lang]
    : toast.key === "life" ? COPY.life[lang]
    : `${COPY.cleared[lang]} +${toast.bonus}`;

  return (
    <main className="neon-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="qala-top">
        <p className="eyebrow"><i /><a href={gamePath(lang)}>{back}</a></p>
        <div className="kosmos-head"><h1>{game.name[lang]}</h1></div>
      </div>
      <dl className="qala-hud">
        <div><dt>{COPY.score[lang]}</dt><dd className="is-gold">{score}</dd></div>
        <div><dt>{COPY.lives[lang]}</dt><dd className="is-life">{"♥".repeat(Math.max(0, lives)) || "0"}</dd></div>
        <div><dt>{COPY.level[lang]}</dt><dd>{level}</dd></div>
        <div><dt>{COPY.combo[lang]}</dt><dd>{combo}</dd></div>
      </dl>
      <div className="neon-board">
        <canvas ref={canvasRef} />
        {toast ? <p key={toast.n} className="qala-toast">{toastText}</p> : null}
        {mode === "playing" ? <button type="button" className="kosmos-pause" onClick={() => api.current.pause()} aria-label={COPY.pause[lang]}>❚❚</button> : null}
        {mode !== "playing" && mode !== "levelclear" ? (
          <div className="ilan-overlay">
            <div className="ilan-panel">
              <h2>{mode === "paused" ? COPY.pause[lang] : mode === "over" ? (record ? COPY.record[lang] : COPY.over[lang]) : game.name[lang]}</h2>
              {mode === "over" ? <p className="ilan-big">{score}</p> : <p>{mode === "paused" ? COPY.wait[lang] : COPY.lead[lang]}</p>}
              {mode === "over" ? <p className="ilan-mini">{COPY.level[lang]} {level} · {COPY.best[lang]} {Math.max(best, score)}</p> : null}
              <div className="ilan-actions">
                {mode === "paused" ? <button type="button" className="is-mint" onClick={() => api.current.resume()}>{COPY.resume[lang]}</button> : null}
                <button type="button" className={mode === "paused" ? "" : "is-mint"} onClick={() => api.current.start()}>{mode === "idle" ? COPY.start[lang] : COPY.again[lang]}</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <p className="ilan-hint">{COPY.hint[lang]}</p>
      <footer className="game-foot">
        <p className="xo-version">{GAME_VERSION}</p>
        <p className="why-lead">{game.blurb[lang]}</p>
      </footer>
    </main>
  );
}
