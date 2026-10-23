import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const VW = 400;
const VH = 600;
const BEST_KEY = "nibras-kosmos-v1";
const TAU = Math.PI * 2;

type Mode = "idle" | "running" | "paused" | "over";
type WaveState = "intro" | "fight" | "clear";
type EnemyType = "grunt" | "zigzag" | "shooter" | "tank" | "boss";
type Power = "W" | "S" | "H" | "B";
type Announce = { kind: "wave" | "boss" | "clear" | "weapon" | "shield" | "life" | "bomb"; level?: number; n: number } | null;

type Enemy = {
  type: EnemyType;
  x: number;
  baseX: number;
  y: number;
  vx: number;
  vy: number;
  t: number;
  r: number;
  hp: number;
  maxHp: number;
  fireTimer: number;
  hoverY: number;
  phase: number;
};
type Bullet = { x: number; y: number; vx: number; vy: number; r: number; dmg: number; friendly: boolean; life: number };
type Drop = { x: number; y: number; vy: number; r: number; type: Power; t: number };
type Bit = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; color: string };
type Star = { x: number; y: number; r: number; sp: number; a: number; tw: number };

const COPY: Record<string, Record<Lang, string>> = {
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  wave: { az: "Dalğa", en: "Wave", tr: "Dalga", ar: "الموجة", ru: "Волна" },
  lives: { az: "Can", en: "Lives", tr: "Can", ar: "الحياة", ru: "Жизни" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  gun: { az: "Silah", en: "Gun", tr: "Silah", ar: "السلاح", ru: "Оружие" },
  start: { az: "Başla", en: "Start", tr: "Başla", ar: "ابدأ", ru: "Старт" },
  resume: { az: "Davam et", en: "Continue", tr: "Devam et", ar: "أكمل", ru: "Дальше" },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  pause: { az: "Pauza", en: "Pause", tr: "Duraklat", ar: "توقف", ru: "Пауза" },
  over: { az: "Oyun bitdi", en: "Game over", tr: "Oyun bitti", ar: "انتهت اللعبة", ru: "Игра окончена" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  lead: {
    az: "Düşmən dalğalarını məhv et, gücləndirmələri topla. Hər 5-ci dalğa bosdur.",
    en: "Destroy the waves and grab upgrades. Every 5th wave is a boss.",
    tr: "Düşman dalgalarını yok et, güçlendirmeleri topla. Her 5. dalga bosstur.",
    ar: "دمّر الموجات واجمع التعزيزات. كل موجة خامسة زعيم.",
    ru: "Уничтожай волны и бери усиления. Каждая 5-я волна — босс.",
  },
  wait: { az: "Kosmos səni gözləyir.", en: "Space is waiting.", tr: "Uzay seni bekliyor.", ar: "الفضاء ينتظرك.", ru: "Космос ждёт." },
  keys: {
    az: "Oxlar və ya WASD. Boşluq pauzadır. Barmaqla sürüşdür.",
    en: "Arrows or WASD. Space pauses. Drag to move.",
    tr: "Oklar ya da WASD. Boşluk duraklatır. Sürükle.",
    ar: "الأسهم أو WASD. المسافة توقف. اسحب للتحريك.",
    ru: "Стрелки или WASD. Пробел — пауза. Тяни пальцем.",
  },
  clear: { az: "Təmizləndi", en: "Cleared", tr: "Temizlendi", ar: "تم التنظيف", ru: "Чисто" },
  shield: { az: "Qalxan", en: "Shield", tr: "Kalkan", ar: "درع", ru: "Щит" },
  life: { az: "+1 can", en: "+1 life", tr: "+1 can", ar: "+1 حياة", ru: "+1 жизнь" },
  bomb: { az: "Bomba", en: "Bomb", tr: "Bomba", ar: "قنبلة", ru: "Бомба" },
  boss: { az: "Bos", en: "Boss", tr: "Boss", ar: "زعيم", ru: "Босс" },
};

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const rndi = (a: number, b: number) => Math.floor(rnd(a, b + 1));
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const hit = (a: { x: number; y: number }, b: { x: number; y: number; r?: number }, r: number) => {
  const br = r + (b.r || 0);
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2 < br * br;
};

function readBest() {
  try {
    return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0;
  } catch {
    return 0;
  }
}

function rounded(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

export function KosmosGame() {
  const { lang } = useI18n();
  const game = gameBySlug("kosmos")!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const api = useRef({ start: () => {}, pause: () => {}, resume: () => {} });
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [wave, setWave] = useState(1);
  const [lives, setLives] = useState(3);
  const [best, setBest] = useState(0);
  const [record, setRecord] = useState(false);
  const [weapon, setWeapon] = useState(1);
  const [announce, setAnnounce] = useState<Announce>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const boardEl = boardRef.current;
    if (!canvas || !boardEl) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const G = { mode: "idle" as Mode, wave: 0, waveState: "intro" as WaveState, waveTimer: 0, score: 0, best: readBest(), lives: 3, shake: 0, flash: 0 };
    const player = { x: VW / 2, y: VH - 70, tx: VW / 2, ty: VH - 70, r: 13, speed: 350, fireTimer: 0, fireRate: 0.13, weapon: 1, shield: 0, invuln: 0 };
    let bullets: Bullet[] = [];
    let enemies: Enemy[] = [];
    let powerups: Drop[] = [];
    let particles: Bit[] = [];
    let spawnQueue: { t: number; type: EnemyType; x: number }[] = [];
    const stars: Star[] = [];
    const keys = { left: false, right: false, up: false, down: false };
    let dragging = false;
    let alive = true;
    let last = 0;
    let actx: AudioContext | null = null;

    for (let i = 0; i < 100; i += 1) {
      const layer = rndi(0, 2);
      stars.push({
        x: rnd(0, VW),
        y: rnd(0, VH),
        r: layer === 0 ? rnd(0.4, 0.9) : layer === 1 ? rnd(0.9, 1.5) : rnd(1.5, 2.3),
        sp: layer === 0 ? 25 : layer === 1 ? 55 : 105,
        a: layer === 0 ? 0.3 : layer === 1 ? 0.55 : 0.95,
        tw: rnd(0, TAU),
      });
    }

    const sfx = (freq: number, dur = 0.08, type: OscillatorType = "square", vol = 0.03) => {
      try {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!actx) actx = new AC();
        if (actx.state === "suspended") void actx.resume();
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, actx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.6), actx.currentTime + dur);
        gain.gain.setValueAtTime(vol, actx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start();
        osc.stop(actx.currentTime + dur);
      } catch {
        /* ignore */
      }
    };

    const sync = (popRecord = false) => {
      setScore(G.score);
      setWave(Math.max(1, G.wave));
      setLives(G.lives);
      setBest(Math.max(G.best, G.score));
      setWeapon(player.weapon);
      if (popRecord) setRecord(false);
    };

    const say = (kind: NonNullable<Announce>["kind"], level?: number) => {
      setAnnounce({ kind, level, n: Date.now() });
    };

    const burst = (x: number, y: number, color: string, count = 12, power = 1) => {
      for (let i = 0; i < count; i += 1) {
        const a = Math.random() * TAU;
        const sp = rnd(40, 180) * power;
        particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: rnd(1.6, 2.8), size: rnd(1.5, 3.5) * power, color });
      }
      if (particles.length > 420) particles.splice(0, particles.length - 420);
    };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(VW * dpr);
      canvas.height = Math.round(VH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pickEnemyType = (n: number): EnemyType => {
      const r = Math.random();
      if (n <= 2) return r < 0.8 ? "grunt" : "zigzag";
      if (n <= 4) return r < 0.5 ? "grunt" : r < 0.8 ? "zigzag" : "shooter";
      if (n <= 7) return r < 0.32 ? "grunt" : r < 0.58 ? "zigzag" : r < 0.85 ? "shooter" : "tank";
      return r < 0.24 ? "grunt" : r < 0.5 ? "zigzag" : r < 0.76 ? "shooter" : "tank";
    };

    const spawnEnemy = (type: EnemyType, x: number) => {
      const e: Enemy = { type, x, baseX: x, y: -30, vx: 0, vy: 0, t: 0, r: 13, hp: 1, maxHp: 1, fireTimer: rnd(0.6, 1.6), hoverY: 0, phase: rnd(0, TAU) };
      if (type === "grunt") { e.hp = e.maxHp = 1; e.vy = 62 + G.wave * 4; e.r = 13; }
      if (type === "zigzag") { e.hp = e.maxHp = 2; e.vy = 55 + G.wave * 4; e.r = 12; }
      if (type === "shooter") { e.hp = e.maxHp = 3; e.vy = 70; e.hoverY = 70 + Math.random() * 110; e.r = 14; }
      if (type === "tank") { e.hp = e.maxHp = 9 + Math.floor(G.wave * 0.8); e.vy = 32; e.r = 20; }
      if (type === "boss") { e.hp = e.maxHp = 55 + Math.floor(G.wave / 5) * 38; e.vy = 45; e.r = 46; e.fireTimer = 1.2; }
      enemies.push(e);
    };

    const enemyShoot = (e: Enemy) => {
      const dx = player.x - e.x;
      const dy = player.y - e.y;
      const d = Math.hypot(dx, dy) || 1;
      bullets.push({ x: e.x, y: e.y + e.r * 0.5, vx: (dx / d) * 170, vy: (dy / d) * 170, r: 4, dmg: 1, friendly: false, life: 4 });
      sfx(260, 0.05, "sawtooth", 0.015);
    };

    const bossAttack = (b: Enemy) => {
      const n = 7;
      const base = Math.atan2(player.y - b.y, player.x - b.x);
      for (let i = 0; i < n; i += 1) {
        const a = base + (i - (n - 1) / 2) * 0.17;
        bullets.push({ x: b.x, y: b.y + 20, vx: Math.cos(a) * 155, vy: Math.sin(a) * 155, r: 5, dmg: 1, friendly: false, life: 5 });
      }
      sfx(160, 0.12, "sawtooth", 0.025);
    };

    const firePlayer = () => {
      const bs = -580;
      const mk = (x: number, y: number, vx: number, vy: number) => bullets.push({ x, y, vx, vy, r: 3.5, dmg: 1, friendly: true, life: 2.5 });
      const lvl = player.weapon;
      if (lvl === 1) mk(player.x, player.y - 16, 0, bs);
      else if (lvl === 2) { mk(player.x - 8, player.y - 14, 0, bs); mk(player.x + 8, player.y - 14, 0, bs); }
      else if (lvl === 3) { mk(player.x, player.y - 17, 0, bs); mk(player.x - 10, player.y - 10, -95, bs); mk(player.x + 10, player.y - 10, 95, bs); }
      else { mk(player.x - 7, player.y - 14, 0, bs); mk(player.x + 7, player.y - 14, 0, bs); mk(player.x - 13, player.y - 6, -150, bs); mk(player.x + 13, player.y - 6, 150, bs); }
    };

    const dropPowerup = (x: number, y: number, forced?: Power) => {
      const roll = Math.random();
      const type: Power = forced ?? (roll < 0.45 ? "W" : roll < 0.75 ? "S" : roll < 0.95 ? "H" : "B");
      powerups.push({ x, y, vy: 70, r: 13, type, t: 0 });
    };

    const killEnemy = (e: Enemy, index: number) => {
      enemies.splice(index, 1);
      G.shake = Math.max(G.shake, e.type === "boss" ? 14 : 3);
      const table: Record<EnemyType, number> = { grunt: 15, zigzag: 20, shooter: 30, tank: 45, boss: 500 + G.wave * 50 };
      G.score += table[e.type];
      sync(true);
      const color: Record<EnemyType, string> = { grunt: "#ff5c7a", zigzag: "#a78bfa", shooter: "#fb923c", tank: "#ef4444", boss: "#f472b6" };
      burst(e.x, e.y, color[e.type], e.type === "boss" ? 60 : 14, e.type === "boss" ? 2 : 1);
      sfx(e.type === "boss" ? 90 : 220, e.type === "boss" ? 0.5 : 0.12, "sawtooth", e.type === "boss" ? 0.07 : 0.03);
      if (e.type === "boss") {
        dropPowerup(e.x - 22, e.y, "W");
        dropPowerup(e.x, e.y, "S");
        dropPowerup(e.x + 22, e.y, "H");
        G.flash = 0.45;
      } else if (Math.random() < (e.type === "tank" ? 0.35 : 0.12)) dropPowerup(e.x, e.y);
    };

    const gameOver = () => {
      G.mode = "over";
      setMode("over");
      const isRec = G.score > G.best;
      if (isRec) {
        G.best = G.score;
        try { localStorage.setItem(BEST_KEY, String(G.best)); } catch { /* ignore */ }
      }
      setRecord(isRec);
      sync();
    };

    const damagePlayer = () => {
      if (player.invuln > 0 || G.mode !== "running") return;
      if (player.shield > 0) {
        player.shield = 0;
        player.invuln = 1;
        burst(player.x, player.y, "#60a5fa", 18, 1.2);
        G.shake = 5;
        sfx(320, 0.18, "sine", 0.05);
        return;
      }
      G.lives -= 1;
      player.invuln = 2;
      player.weapon = Math.max(1, player.weapon - 1);
      sync();
      burst(player.x, player.y, "#ff5c7a", 26, 1.4);
      G.shake = 9;
      G.flash = 0.6;
      sfx(200, 0.25, "sawtooth", 0.06);
      bullets = bullets.filter((b) => b.friendly);
      if (G.lives <= 0) gameOver();
    };

    const applyPowerup = (p: Drop) => {
      if (p.type === "W") {
        if (player.weapon < 4) { player.weapon += 1; say("weapon", player.weapon); sfx(880, 0.1, "sine", 0.04); window.setTimeout(() => sfx(1180, 0.12, "sine", 0.04), 80); }
        else { G.score += 150; }
        sync();
      } else if (p.type === "S") {
        player.shield = 1;
        say("shield");
        sfx(520, 0.12, "sine", 0.04);
      } else if (p.type === "H") {
        if (G.lives < 5) { G.lives += 1; say("life"); sfx(660, 0.1, "sine", 0.04); }
        else G.score += 200;
        sync();
      } else {
        bullets = bullets.filter((b) => b.friendly);
        for (let i = enemies.length - 1; i >= 0; i -= 1) {
          enemies[i].hp -= 4;
          burst(enemies[i].x, enemies[i].y, "#ffd166", 6, 0.8);
          if (enemies[i].hp <= 0) killEnemy(enemies[i], i);
        }
        G.shake = 8;
        G.flash = 0.5;
        say("bomb");
        sfx(120, 0.3, "sawtooth", 0.05);
      }
    };

    const startWave = (n: number) => {
      G.wave = n;
      G.waveState = "intro";
      G.waveTimer = 1.5;
      spawnQueue = [];
      const isBoss = n % 5 === 0;
      say(isBoss ? "boss" : "wave", n);
      if (isBoss) spawnQueue.push({ t: 0.7, type: "boss", x: VW / 2 });
      else {
        const count = Math.min(26, 5 + Math.floor(n * 1.6));
        let t = 0.55;
        for (let i = 0; i < count; i += 1) {
          spawnQueue.push({ t, type: pickEnemyType(n), x: rnd(50, VW - 50) });
          t += rnd(0.25, 0.52) / (1 + n * 0.06);
        }
      }
      sync();
    };

    const updateWave = (dt: number) => {
      if (G.waveState === "intro") {
        G.waveTimer -= dt;
        if (G.waveTimer <= 0) G.waveState = "fight";
        return;
      }
      if (G.waveState === "fight") {
        for (let i = spawnQueue.length - 1; i >= 0; i -= 1) {
          spawnQueue[i].t -= dt;
          if (spawnQueue[i].t <= 0) {
            spawnEnemy(spawnQueue[i].type, spawnQueue[i].x);
            spawnQueue.splice(i, 1);
          }
        }
        if (spawnQueue.length === 0 && enemies.length === 0) {
          G.waveState = "clear";
          G.waveTimer = 1.1;
          G.score += 50;
          sync(true);
          say("clear");
          sfx(660, 0.1, "sine", 0.035);
        }
        return;
      }
      G.waveTimer -= dt;
      if (G.waveTimer <= 0) startWave(G.wave + 1);
    };

    const updateEnemies = (dt: number) => {
      for (let i = enemies.length - 1; i >= 0; i -= 1) {
        const e = enemies[i];
        e.t += dt;
        if (e.type === "grunt") e.y += e.vy * dt;
        else if (e.type === "zigzag") { e.y += e.vy * dt; e.x = e.baseX + Math.sin(e.t * 3 + e.phase) * 46; }
        else if (e.type === "shooter") {
          if (e.y < e.hoverY) e.y += e.vy * dt;
          else {
            e.x += Math.sin(e.t * 1.6) * 55 * dt;
            e.fireTimer -= dt;
            if (e.fireTimer <= 0) { enemyShoot(e); e.fireTimer = Math.max(0.55, 1.7 - G.wave * 0.045); }
          }
        } else if (e.type === "tank") { e.y += e.vy * dt; e.x = e.baseX + Math.sin(e.t * 0.9) * 28; }
        else if (e.y < 95) e.y += e.vy * dt;
        else {
          e.x = VW / 2 + Math.sin(e.t * 0.75) * (VW / 2 - 78);
          e.fireTimer -= dt;
          if (e.fireTimer <= 0) { bossAttack(e); e.fireTimer = Math.max(0.55, 1.05 - G.wave * 0.015); }
        }
        if (e.y > VH + 60) enemies.splice(i, 1);
      }
    };

    const collide = () => {
      for (let i = bullets.length - 1; i >= 0; i -= 1) {
        const b = bullets[i];
        if (!b.friendly) continue;
        for (let j = enemies.length - 1; j >= 0; j -= 1) {
          const e = enemies[j];
          if (!hit(b, e, b.r)) continue;
          e.hp -= b.dmg;
          burst(b.x, b.y, "#a7f3d0", 3, 0.5);
          bullets.splice(i, 1);
          if (e.hp <= 0) killEnemy(e, j);
          break;
        }
      }
      for (let i = bullets.length - 1; i >= 0; i -= 1) {
        const b = bullets[i];
        if (b.friendly) continue;
        if (hit(b, player, b.r + player.r)) {
          burst(b.x, b.y, "#ff5c7a", 6, 0.7);
          bullets.splice(i, 1);
          damagePlayer();
          if (G.mode !== "running") return;
        }
      }
      for (let j = enemies.length - 1; j >= 0; j -= 1) {
        const e = enemies[j];
        if (!hit(e, player, e.r * 0.8)) continue;
        damagePlayer();
        if (e.type !== "boss") killEnemy(e, j);
        if (G.mode !== "running") return;
      }
    };

    const drawEnemy = (e: Enemy) => {
      ctx.save();
      ctx.translate(e.x, e.y);
      if (e.type === "grunt") {
        ctx.shadowColor = "#ff5c7a"; ctx.shadowBlur = 14; ctx.fillStyle = "#ff5c7a";
        ctx.beginPath(); ctx.moveTo(0, 13); ctx.lineTo(11, -11); ctx.lineTo(0, -5); ctx.lineTo(-11, -11); ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.beginPath(); ctx.arc(0, 3, 2.6, 0, TAU); ctx.fill();
      } else if (e.type === "zigzag") {
        ctx.rotate(e.t * 1.6); ctx.shadowColor = "#a78bfa"; ctx.shadowBlur = 14; ctx.fillStyle = "#a78bfa";
        ctx.beginPath(); ctx.moveTo(0, -12); ctx.lineTo(12, 0); ctx.lineTo(0, 12); ctx.lineTo(-12, 0); ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.beginPath(); ctx.arc(0, 0, 3, 0, TAU); ctx.fill();
      } else if (e.type === "shooter") {
        ctx.shadowColor = "#fb923c"; ctx.shadowBlur = 14; ctx.fillStyle = "#fb923c"; ctx.beginPath();
        for (let i = 0; i < 6; i += 1) {
          const a = (i / 6) * TAU - Math.PI / 2;
          const px = Math.cos(a) * 13; const py = Math.sin(a) * 13;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.fill(); ctx.shadowBlur = 0; ctx.fillStyle = "rgba(255,255,255,.9)"; ctx.beginPath(); ctx.arc(0, 0, 3.6, 0, TAU); ctx.fill();
      } else if (e.type === "tank") {
        ctx.shadowColor = "#ef4444"; ctx.shadowBlur = 16;
        const tg = ctx.createLinearGradient(0, -18, 0, 18); tg.addColorStop(0, "#fca5a5"); tg.addColorStop(1, "#b91c1c");
        ctx.fillStyle = tg; rounded(ctx, -17, -17, 34, 34, 7); ctx.fill(); ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(255,255,255,.55)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-7, 0); ctx.lineTo(7, 0); ctx.moveTo(0, -7); ctx.lineTo(0, 7); ctx.stroke();
        if (e.hp < e.maxHp) {
          ctx.fillStyle = "rgba(0,0,0,.5)"; rounded(ctx, -16, -26, 32, 3, 2); ctx.fill();
          ctx.fillStyle = "#ef4444"; rounded(ctx, -16, -26, 32 * (e.hp / e.maxHp), 3, 2); ctx.fill();
        }
      } else {
        const pulse = 1 + Math.sin(e.t * 2.2) * 0.04;
        ctx.scale(pulse, pulse); ctx.shadowColor = "#f472b6"; ctx.shadowBlur = 30;
        const bg = ctx.createRadialGradient(0, 0, 6, 0, 0, 48); bg.addColorStop(0, "#f9a8d4"); bg.addColorStop(1, "#be185d");
        ctx.fillStyle = bg; ctx.beginPath(); ctx.moveTo(0, -44); ctx.lineTo(46, -10); ctx.lineTo(30, 30); ctx.lineTo(0, 44); ctx.lineTo(-30, 30); ctx.lineTo(-46, -10); ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = "rgba(255,255,255,.92)"; ctx.beginPath(); ctx.arc(0, 0, 9, 0, TAU); ctx.fill();
        ctx.fillStyle = "#f472b6"; ctx.beginPath(); ctx.arc(0, 0, 5, 0, TAU); ctx.fill();
        const hp = Math.max(0, e.hp / e.maxHp);
        ctx.fillStyle = "rgba(0,0,0,.55)"; rounded(ctx, -45, -68, 90, 5, 3); ctx.fill();
        ctx.fillStyle = hp > 0.5 ? "#f472b6" : hp > 0.25 ? "#fb923c" : "#ef4444";
        rounded(ctx, -45, -68, 90 * hp, 5, 3); ctx.fill();
      }
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, VW, VH);
      ctx.save();
      if (G.shake > 0) ctx.translate(rnd(-1, 1) * G.shake, rnd(-1, 1) * G.shake);
      for (const s of stars) {
        ctx.globalAlpha = s.a * (0.75 + Math.sin(s.tw) * 0.25);
        ctx.fillStyle = "#cfe9ff"; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, TAU); ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (const p of powerups) {
        const bob = Math.sin(p.t * 6) * 2;
        const color = p.type === "W" ? "#6ee7b7" : p.type === "S" ? "#60a5fa" : p.type === "H" ? "#ff5c7a" : "#ffd166";
        ctx.save(); ctx.translate(p.x, p.y + bob); ctx.shadowColor = color; ctx.shadowBlur = 18; ctx.strokeStyle = color; ctx.lineWidth = 2;
        rounded(ctx, -11, -11, 22, 22, 6); ctx.stroke(); ctx.shadowBlur = 0; ctx.fillStyle = `${color}22`; rounded(ctx, -11, -11, 22, 22, 6); ctx.fill();
        ctx.fillStyle = color; ctx.font = "800 12px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(p.type, 0, 0.5); ctx.restore();
      }
      enemies.forEach(drawEnemy);
      for (const b of bullets) {
        ctx.shadowBlur = 12;
        if (b.friendly) { ctx.shadowColor = "#a7f3d0"; ctx.fillStyle = "#d1fae5"; ctx.beginPath(); ctx.ellipse(b.x, b.y, b.r * 0.8, b.r * 1.7, 0, 0, TAU); ctx.fill(); }
        else { ctx.shadowColor = "#ff5c7a"; ctx.fillStyle = "#fecdd3"; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, TAU); ctx.fill(); }
        ctx.shadowBlur = 0;
      }
      if (!(player.invuln > 0 && Math.floor(player.invuln * 14) % 2 === 0)) {
        ctx.save(); ctx.translate(player.x, player.y);
        const f = 1 + Math.sin(performance.now() / 40) * 0.3;
        const fg = ctx.createLinearGradient(0, 9, 0, 30 * f); fg.addColorStop(0, "rgba(110,231,183,.95)"); fg.addColorStop(1, "rgba(34,211,167,0)");
        ctx.fillStyle = fg; ctx.beginPath(); ctx.moveTo(-5, 9); ctx.lineTo(5, 9); ctx.lineTo(0, 27 * f); ctx.closePath(); ctx.fill();
        ctx.shadowColor = "#6ee7b7"; ctx.shadowBlur = 18;
        const bg = ctx.createLinearGradient(0, -18, 0, 14); bg.addColorStop(0, "#d1fae5"); bg.addColorStop(1, "#22d3a7");
        ctx.fillStyle = bg; ctx.beginPath(); ctx.moveTo(0, -18); ctx.lineTo(13, 10); ctx.lineTo(0, 5); ctx.lineTo(-13, 10); ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = "rgba(255,255,255,.9)"; ctx.beginPath(); ctx.arc(0, -4, 3.4, 0, TAU); ctx.fill();
        if (player.shield > 0) { ctx.strokeStyle = "rgba(96,165,250,.85)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, 25, 0, TAU); ctx.stroke(); }
        ctx.restore();
      }
      for (const p of particles) { ctx.globalAlpha = Math.max(0, p.life); ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, TAU); ctx.fill(); }
      ctx.globalAlpha = 1;
      ctx.restore();
      if (G.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${G.flash * 0.14})`; ctx.fillRect(0, 0, VW, VH); }
      if (G.lives === 1 && G.mode === "running") {
        const a = 0.07 + Math.sin(performance.now() / 220) * 0.05;
        const g = ctx.createLinearGradient(0, VH, 0, VH - 120);
        g.addColorStop(0, `rgba(255,92,122,${a})`); g.addColorStop(1, "rgba(255,92,122,0)");
        ctx.fillStyle = g; ctx.fillRect(0, VH - 120, VW, 120);
      }
    };

    const update = (dt: number) => {
      let kx = 0; let ky = 0;
      if (keys.left) kx -= 1; if (keys.right) kx += 1; if (keys.up) ky -= 1; if (keys.down) ky += 1;
      if (kx || ky) {
        const len = Math.hypot(kx, ky) || 1;
        player.x += (kx / len) * player.speed * dt;
        player.y += (ky / len) * player.speed * dt;
        player.tx = player.x; player.ty = player.y;
      } else {
        const k = 1 - Math.exp(-20 * dt);
        player.x = lerp(player.x, player.tx, k);
        player.y = lerp(player.y, player.ty, k);
      }
      player.x = clamp(player.x, player.r, VW - player.r);
      player.y = clamp(player.y, player.r + 20, VH - player.r);
      player.fireTimer -= dt;
      if (player.fireTimer <= 0) { firePlayer(); player.fireTimer = player.fireRate; sfx(1100 + player.weapon * 60, 0.025, "square", 0.008); }
      if (player.invuln > 0) player.invuln -= dt;
      for (let i = bullets.length - 1; i >= 0; i -= 1) {
        const b = bullets[i]; b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
        if (b.life <= 0 || b.y < -20 || b.y > VH + 20 || b.x < -20 || b.x > VW + 20) bullets.splice(i, 1);
      }
      updateEnemies(dt);
      for (let i = powerups.length - 1; i >= 0; i -= 1) {
        const p = powerups[i]; p.t += dt; p.y += p.vy * dt;
        if (p.y > VH + 30) { powerups.splice(i, 1); continue; }
        if (Math.hypot(p.x - player.x, p.y - player.y) < p.r + player.r + 6) { applyPowerup(p); burst(p.x, p.y, "#ffd166", 10, 0.9); powerups.splice(i, 1); }
      }
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i]; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 1 - 2.4 * dt; p.vy *= 1 - 2.4 * dt; p.life -= p.decay * dt;
        if (p.life <= 0) particles.splice(i, 1);
      }
      updateWave(dt);
      collide();
      if (G.shake > 0) G.shake = Math.max(0, G.shake - dt * 30);
      if (G.flash > 0) G.flash = Math.max(0, G.flash - dt * 2.2);
    };

    const loop = (ts: number) => {
      if (!alive) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000;
      last = ts;
      if (dt > 0.06) dt = 0.06;
      const speed = G.mode === "paused" ? 0 : 1;
      for (const s of stars) { s.y += s.sp * dt * speed; s.tw += dt * 2; if (s.y > VH + 4) { s.y = -4; s.x = rnd(0, VW); } }
      if (G.mode === "running") update(dt);
      else if (particles.length) {
        for (let i = particles.length - 1; i >= 0; i -= 1) {
          const p = particles[i]; p.life -= p.decay * dt; if (p.life <= 0) particles.splice(i, 1);
        }
      }
      draw();
      requestAnimationFrame(loop);
    };

    const start = () => {
      bullets = []; enemies = []; powerups = []; particles = []; spawnQueue = [];
      G.mode = "running"; G.score = 0; G.lives = 3; G.shake = 0; G.flash = 0;
      player.x = player.tx = VW / 2; player.y = player.ty = VH - 70;
      player.weapon = 1; player.shield = 0; player.invuln = 1.2; player.fireTimer = 0;
      setMode("running"); setRecord(false); setAnnounce(null); sync();
      startWave(1);
      sfx(520, 0.1, "sine", 0.04);
    };
    const pause = () => { if (G.mode !== "running") return; G.mode = "paused"; setMode("paused"); sfx(400, 0.1, "sine", 0.03); };
    const resume = () => { if (G.mode !== "paused") return; G.mode = "running"; setMode("running"); sfx(600, 0.1, "sine", 0.03); };
    api.current = { start, pause, resume };

    const keymap: Record<string, keyof typeof keys> = { ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right", ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down" };
    const onKey = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        if (G.mode === "idle" || G.mode === "over") start();
        else if (G.mode === "running") pause();
        else if (G.mode === "paused") resume();
        return;
      }
      const key = keymap[event.code];
      if (key) { event.preventDefault(); keys[key] = true; }
    };
    const onUp = (event: KeyboardEvent) => { const key = keymap[event.code]; if (key) { event.preventDefault(); keys[key] = false; } };
    const pos = (event: PointerEvent) => {
      const rect = boardEl.getBoundingClientRect();
      return { x: (event.clientX - rect.left) * (VW / rect.width), y: (event.clientY - rect.top) * (VH / rect.height) };
    };
    const down = (event: PointerEvent) => {
      if (G.mode !== "running") return;
      if ((event.target as HTMLElement).closest("button")) return;
      dragging = true;
      const p = pos(event);
      player.tx = clamp(p.x, player.r, VW - player.r);
      player.ty = clamp(p.y - 34, player.r + 10, VH - player.r);
    };
    const move = (event: PointerEvent) => {
      if (!dragging || G.mode !== "running") return;
      const p = pos(event);
      player.tx = clamp(p.x, player.r, VW - player.r);
      player.ty = clamp(p.y - 34, player.r + 10, VH - player.r);
    };
    const up = () => { dragging = false; };
    const onHide = () => { if (document.hidden && G.mode === "running") pause(); };

    fit();
    setBest(G.best);
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onUp);
    boardEl.addEventListener("pointerdown", down);
    boardEl.addEventListener("pointermove", move);
    boardEl.addEventListener("pointerup", up);
    boardEl.addEventListener("pointercancel", up);
    document.addEventListener("visibilitychange", onHide);
    const frame = requestAnimationFrame(loop);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onUp);
      boardEl.removeEventListener("pointerdown", down);
      boardEl.removeEventListener("pointermove", move);
      boardEl.removeEventListener("pointerup", up);
      boardEl.removeEventListener("pointercancel", up);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
  const banner = !announce ? ""
    : announce.kind === "wave" ? `${COPY.wave[lang]} ${announce.level}`
    : announce.kind === "boss" ? COPY.boss[lang]
    : announce.kind === "clear" ? COPY.clear[lang]
    : announce.kind === "weapon" ? `${COPY.gun[lang]} ${announce.level}`
    : announce.kind === "shield" ? COPY.shield[lang]
    : announce.kind === "life" ? COPY.life[lang]
    : COPY.bomb[lang];

  return (
    <main className="kosmos-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="kosmos-top">
        <p className="eyebrow"><i /><a href={gamePath(lang)}>{back}</a></p>
        <div className="kosmos-head">
          <h1>{game.name[lang]}</h1>
        </div>
      </div>
      <dl className="kosmos-hud">
        <div><dt>{COPY.score[lang]}</dt><dd>{score}</dd></div>
        <div><dt>{COPY.wave[lang]}</dt><dd>{wave}</dd></div>
        <div><dt>{COPY.lives[lang]}</dt><dd className="is-life">{"♥".repeat(Math.max(0, lives))}</dd></div>
      </dl>
      <div className="kosmos-board" ref={boardRef}>
        <canvas ref={canvasRef} />
        {announce ? <p key={announce.n} className="kosmos-ann">{banner}</p> : null}
        <p className="kosmos-gun"><span>{COPY.gun[lang]}</span>{[1, 2, 3, 4].map((n) => <i key={n} className={n <= weapon ? "is-on" : ""} />)}</p>
        {mode === "running" ? <button type="button" className="kosmos-pause" onClick={() => api.current.pause()} aria-label={COPY.pause[lang]}>❚❚</button> : null}
        {mode !== "running" ? (
          <div className="ilan-overlay">
            <div className="ilan-panel">
              <h2>{mode === "paused" ? COPY.pause[lang] : mode === "over" ? (record ? COPY.record[lang] : COPY.over[lang]) : game.name[lang]}</h2>
              {mode === "over" ? <p className="ilan-big">{score}</p> : <p>{mode === "paused" ? COPY.wait[lang] : COPY.lead[lang]}</p>}
              {mode === "over" ? <p className="ilan-mini">{COPY.wave[lang]} {wave} · {COPY.best[lang]} {Math.max(best, score)}</p> : null}
              <div className="ilan-actions">
                {mode === "paused" ? <button type="button" className="is-mint" onClick={() => api.current.resume()}>{COPY.resume[lang]}</button> : null}
                <button type="button" className={mode === "paused" ? "" : "is-mint"} onClick={() => api.current.start()}>{mode === "idle" ? COPY.start[lang] : COPY.again[lang]}</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <p className="ilan-hint">{COPY.keys[lang]}</p>
      <footer className="game-foot">
        <p className="xo-version">{GAME_VERSION}</p>
        <p className="why-lead">{game.blurb[lang]}</p>
      </footer>
    </main>
  );
}
