import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const COLS = 8;
const ROWS = 10;
const PATH: [number, number][] = [
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
  [6, 1], [6, 2],
  [5, 2], [4, 2], [3, 2], [2, 2], [1, 2], [0, 2],
  [0, 3], [0, 4],
  [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
  [6, 5], [6, 6],
  [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6],
  [0, 7], [0, 8],
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8],
];
const PATH_SET = new Set(PATH.map(([x, y]) => `${x},${y}`));
const BEST_KEY = "nibras-qala-v1";
const TAU = Math.PI * 2;

type LangMap = Record<Lang, string>;
type TowerType = "archer" | "cannon" | "frost";
type EnemyType = "basic" | "fast" | "tank" | "boss";
type Mode = "idle" | "running" | "over";
type ToastKey = "path" | "taken" | "gold" | "max" | "need" | "level" | "clear";

const ENEMY: Record<EnemyType, { hp: number; speed: number; gold: number; color: string; radius: number; hpScale: number }> = {
  basic: { hp: 30, speed: 1.2, gold: 8, color: "#ef4444", radius: 8, hpScale: 1.15 },
  fast: { hp: 20, speed: 2, gold: 10, color: "#fbbf24", radius: 6, hpScale: 1.12 },
  tank: { hp: 120, speed: 0.7, gold: 25, color: "#a78bfa", radius: 11, hpScale: 1.18 },
  boss: { hp: 500, speed: 0.55, gold: 150, color: "#f472b6", radius: 17, hpScale: 1.25 },
};

const TOWER: Record<TowerType, { cost: number; damage: number; range: number; rate: number; color: string; pSpeed: number; splash: number; slow: number }> = {
  archer: { cost: 40, damage: 12, range: 2.5, rate: 0.5, color: "#6ee7b7", pSpeed: 22, splash: 0, slow: 0 },
  cannon: { cost: 80, damage: 30, range: 2, rate: 1.2, color: "#fb923c", pSpeed: 14, splash: 1.3, slow: 0 },
  frost: { cost: 60, damage: 6, range: 2.2, rate: 0.7, color: "#60a5fa", pSpeed: 18, splash: 0, slow: 0.5 },
};

const COPY: Record<string, LangMap> = {
  wave: { az: "Dalğa", en: "Wave", tr: "Dalga", ar: "الموجة", ru: "Волна" },
  gold: { az: "Qızıl", en: "Gold", tr: "Altın", ar: "الذهب", ru: "Золото" },
  lives: { az: "Can", en: "Lives", tr: "Can", ar: "الحياة", ru: "Жизни" },
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  start: { az: "Başla", en: "Start", tr: "Başla", ar: "ابدأ", ru: "Старт" },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  fell: { az: "Qala düşdü", en: "The keep fell", tr: "Kale düştü", ar: "سقطت القلعة", ru: "Крепость пала" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  lead: {
    az: "Düşmən yolla gəlir. Qızıl topla, qüllə qur, qalanı qoru.",
    en: "Enemies follow the road. Gather gold, build towers, hold the fortress.",
    tr: "Düşman yoldan gelir. Altın topla, kule kur, kaleyi koru.",
    ar: "العدو يسير على الطريق. اجمع الذهب وابنِ الأبراج واحمِ القلعة.",
    ru: "Враг идёт по дороге. Собирай золото, строй башни, держи крепость.",
  },
  hint: {
    az: "Qüllə seç, boş xanaya toxun. Qülləyə toxunsa, yüksəlir.",
    en: "Pick a tower, then tap an empty cell. Tap a tower to upgrade it.",
    tr: "Kule seç, boş kareye dokun. Kuleye dokununca yükselir.",
    ar: "اختر برجًا ثم المس خانة فارغة. المس البرج لترقيته.",
    ru: "Выбери башню и нажми пустую клетку. Нажатие на башню улучшает её.",
  },
  next: { az: "Növbəti dalğa", en: "Next wave", tr: "Sonraki dalga", ar: "الموجة التالية", ru: "Следующая волна" },
  archer: { az: "Oxatan", en: "Archer", tr: "Okçu", ar: "الرامي", ru: "Лучник" },
  cannon: { az: "Top", en: "Cannon", tr: "Top", ar: "المدفع", ru: "Пушка" },
  frost: { az: "Buz", en: "Frost", tr: "Buz", ar: "الجليد", ru: "Лёд" },
  level: { az: "Səviyyə", en: "Level", tr: "Seviye", ar: "المستوى", ru: "Уровень" },
  path: { az: "Yolun üstündə qurmaq olmaz.", en: "You cannot build on the road.", tr: "Yolun üstüne kurulmaz.", ar: "لا يُبنى على الطريق.", ru: "На дороге строить нельзя." },
  taken: { az: "Burada qüllə var.", en: "A tower is already here.", tr: "Burada kule var.", ar: "هنا برج.", ru: "Здесь уже башня." },
  needGold: { az: "Qızıl çatmır.", en: "Not enough gold.", tr: "Altın yetmiyor.", ar: "الذهب لا يكفي.", ru: "Не хватает золота." },
  max: { az: "Maksimum səviyyə.", en: "Maximum level.", tr: "En yüksek seviye.", ar: "أعلى مستوى.", ru: "Максимальный уровень." },
  clear: { az: "Dalğa təmizləndi. +25", en: "Wave cleared. +25", tr: "Dalga temizlendi. +25", ar: "تم تنظيف الموجة. +25", ru: "Волна зачищена. +25" },
};

type Enemy = {
  type: EnemyType;
  hp: number;
  maxHp: number;
  speed: number;
  gold: number;
  color: string;
  radius: number;
  dist: number;
  x: number;
  y: number;
  slowUntil: number;
  slowFactor: number;
  dead: boolean;
};
type Tower = {
  type: TowerType;
  gx: number;
  gy: number;
  level: number;
  x: number;
  y: number;
  cooldown: number;
  angle: number;
  damage: number;
  rangeCells: number;
  color: string;
};
type Shot = { x: number; y: number; target: Enemy; speed: number; damage: number; splash: number; slow: number; color: string; size: number };
type Bit = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; color: string };
type Toast = { key: ToastKey; n: number; cost?: number; level?: number };

function readBest() {
  try { return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; } catch { return 0; }
}

export function QalaGame() {
  const { lang } = useI18n();
  const game = gameBySlug("qala")!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const api = useRef({ start: () => {}, pick: (_type: TowerType) => {} });
  const [mode, setMode] = useState<Mode>("idle");
  const [wave, setWave] = useState(0);
  const [gold, setGold] = useState(200);
  const [lives, setLives] = useState(20);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [record, setRecord] = useState(false);
  const [selected, setSelected] = useState<TowerType | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const boardEl = boardRef.current;
    if (!canvas || !boardEl) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let cell = 40;
    let offX = 0;
    let offY = 0;
    let pathPx: { x: number; y: number }[] = [];
    let pathLen = 0;
    const state = {
      mode: "idle" as Mode,
      wave: 0,
      gold: 200,
      lives: 20,
      score: 0,
      best: readBest(),
      selected: null as TowerType | null,
      towers: [] as Tower[],
      enemies: [] as Enemy[],
      shots: [] as Shot[],
      particles: [] as Bit[],
      queue: [] as { t: number; type: EnemyType }[],
      between: true,
      delay: 0,
      shake: 0,
      flash: 0,
    };
    let alive = true;
    let last = 0;
    let infoShown = "";
    let actx: AudioContext | null = null;

    const sfx = (freq: number, dur = 0.08, type: OscillatorType = "sine", vol = 0.03) => {
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
      } catch { /* ignore */ }
    };

    const sync = () => {
      setWave(state.wave);
      setGold(state.gold);
      setLives(state.lives);
      setScore(state.score);
      setBest(Math.max(state.best, state.score));
      setSelected(state.selected);
    };
    const say = (key: ToastKey, extra?: Partial<Toast>) => setToast({ key, n: Date.now(), ...extra });
    const showInfo = (text: string | null) => {
      const next = text ?? "";
      if (next === infoShown) return;
      infoShown = next;
      setInfo(text);
    };

    const burst = (x: number, y: number, color: string, count = 8, power = 1) => {
      for (let i = 0; i < count; i += 1) {
        const a = Math.random() * TAU;
        const sp = (40 + Math.random() * 120) * power;
        state.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 1.8 + Math.random() * 1.2, size: 1.5 + Math.random() * 2 * power, color });
      }
      if (state.particles.length > 300) state.particles.splice(0, state.particles.length - 300);
    };

    const layout = () => {
      const rect = boardEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = rect.width;
      H = rect.height;
      cell = Math.min(W / COLS, H / ROWS);
      offX = (W - COLS * cell) / 2;
      offY = (H - ROWS * cell) / 2;
      pathPx = PATH.map(([x, y]) => ({ x: offX + (x + 0.5) * cell, y: offY + (y + 0.5) * cell }));
      pathLen = 0;
      for (let i = 1; i < pathPx.length; i += 1) pathLen += Math.hypot(pathPx[i].x - pathPx[i - 1].x, pathPx[i].y - pathPx[i - 1].y);
      for (const tower of state.towers) {
        tower.x = offX + (tower.gx + 0.5) * cell;
        tower.y = offY + (tower.gy + 0.5) * cell;
      }
    };

    const posAt = (d: number) => {
      let left = d;
      for (let i = 1; i < pathPx.length; i += 1) {
        const a = pathPx[i - 1];
        const b = pathPx[i];
        const seg = Math.hypot(b.x - a.x, b.y - a.y);
        if (left <= seg) {
          const t = seg ? left / seg : 0;
          return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
        }
        left -= seg;
      }
      return pathPx[pathPx.length - 1] || { x: 0, y: 0 };
    };

    const killEnemy = (enemy: Enemy) => {
      const index = state.enemies.indexOf(enemy);
      if (index >= 0) state.enemies.splice(index, 1);
      state.gold += enemy.gold;
      state.score += enemy.gold * 2;
      sync();
      burst(enemy.x, enemy.y, enemy.color, enemy.type === "boss" ? 40 : 12, enemy.type === "boss" ? 2 : 1);
      sfx(enemy.type === "boss" ? 90 : 260, enemy.type === "boss" ? 0.4 : 0.1, "sawtooth", enemy.type === "boss" ? 0.06 : 0.025);
      if (enemy.type === "boss") { state.shake = 10; state.flash = 0.4; }
    };

    const gameOver = () => {
      state.mode = "over";
      showInfo(null);
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

    const spawnEnemy = (type: EnemyType, waveNo: number) => {
      const base = ENEMY[type];
      const hp = Math.round(base.hp * base.hpScale ** Math.max(0, waveNo - 1));
      const start = pathPx[0] || { x: 0, y: 0 };
      state.enemies.push({
        type, hp, maxHp: hp, speed: base.speed * cell, gold: base.gold + Math.floor(waveNo * 0.4),
        color: base.color, radius: Math.max(4, base.radius * Math.min(1, cell / 55)),
        dist: 0, x: start.x, y: start.y, slowUntil: 0, slowFactor: 1, dead: false,
      });
    };

    const startWave = () => {
      state.wave += 1;
      state.between = false;
      const w = state.wave;
      const queue: { t: number; type: EnemyType }[] = [];
      if (w % 5 === 0) {
        queue.push({ t: 0, type: "boss" });
        for (let i = 0; i < 4; i += 1) queue.push({ t: 1 + i * 0.6, type: "basic" });
      } else {
        const count = 5 + w * 2;
        for (let i = 0; i < count; i += 1) {
          let type: EnemyType = "basic";
          if (w >= 3 && Math.random() < 0.35) type = "fast";
          if (w >= 4 && Math.random() < 0.18) type = "tank";
          queue.push({ t: i * 0.65, type });
        }
      }
      state.queue = queue;
      sync();
      sfx(520, 0.1, "sine", 0.04);
    };

    const place = (gx: number, gy: number, type: TowerType) => {
      if (PATH_SET.has(`${gx},${gy}`)) { say("path"); sfx(220, 0.1, "square", 0.02); return; }
      if (state.towers.some((tower) => tower.gx === gx && tower.gy === gy)) { say("taken"); return; }
      const spec = TOWER[type];
      if (state.gold < spec.cost) { say("gold"); sfx(220, 0.1, "square", 0.02); return; }
      state.gold -= spec.cost;
      state.towers.push({
        type, gx, gy, level: 1,
        x: offX + (gx + 0.5) * cell, y: offY + (gy + 0.5) * cell,
        cooldown: 0, angle: -Math.PI / 2, damage: spec.damage, rangeCells: spec.range, color: spec.color,
      });
      state.selected = null;
      sync();
      sfx(660, 0.08, "sine", 0.04);
      burst(offX + (gx + 0.5) * cell, offY + (gy + 0.5) * cell, spec.color, 10, 0.8);
    };

    const upgrade = (tower: Tower) => {
      if (tower.level >= 3) { say("max"); return; }
      const cost = Math.round(TOWER[tower.type].cost * (tower.level === 1 ? 0.6 : 1));
      if (state.gold < cost) { say("need", { cost }); sfx(220, 0.1, "square", 0.02); return; }
      state.gold -= cost;
      tower.level += 1;
      tower.damage *= 1.5;
      tower.rangeCells *= 1.1;
      sync();
      burst(tower.x, tower.y, tower.color, 16, 1);
      say("level", { level: tower.level });
      sfx(880, 0.1, "sine", 0.045);
    };

    const hitEnemy = (shot: Shot, target: Enemy) => {
      target.hp -= shot.damage;
      burst(target.x, target.y, shot.color, 5, 0.7);
      if (shot.splash > 0) {
        for (const enemy of state.enemies) {
          if (enemy === target || enemy.dead) continue;
          const dx = enemy.x - target.x;
          const dy = enemy.y - target.y;
          if (dx * dx + dy * dy <= shot.splash * shot.splash) {
            enemy.hp -= shot.damage * 0.6;
            burst(enemy.x, enemy.y, shot.color, 3, 0.6);
          }
        }
        state.shake = Math.max(state.shake, 2);
      }
      if (shot.slow > 0) { target.slowUntil = 2; target.slowFactor = 1 - shot.slow; }
      for (let i = state.enemies.length - 1; i >= 0; i -= 1) {
        const enemy = state.enemies[i];
        if (enemy.hp <= 0 && !enemy.dead) { enemy.dead = true; killEnemy(enemy); }
      }
    };

    const update = (dt: number) => {
      if (state.between) {
        state.delay -= dt;
        if (state.delay > 0) showInfo(state.delay.toFixed(1));
        else { showInfo(null); startWave(); }
      } else {
        for (let i = state.queue.length - 1; i >= 0; i -= 1) {
          state.queue[i].t -= dt;
          if (state.queue[i].t <= 0) { spawnEnemy(state.queue[i].type, state.wave); state.queue.splice(i, 1); }
        }
        if (state.queue.length === 0 && state.enemies.length === 0 && state.mode === "running") {
          state.between = true;
          state.delay = 3.5;
          state.score += 25;
          sync();
          say("clear");
        }
      }
      for (let i = state.enemies.length - 1; i >= 0; i -= 1) {
        const enemy = state.enemies[i];
        enemy.dist += enemy.speed * (enemy.slowUntil > 0 ? enemy.slowFactor : 1) * dt;
        if (enemy.slowUntil > 0) enemy.slowUntil -= dt;
        if (enemy.dist >= pathLen) {
          enemy.dead = true;
          state.enemies.splice(i, 1);
          state.lives -= 1;
          state.shake = 6;
          const end = pathPx[pathPx.length - 1];
          if (end) burst(end.x, end.y, "#ff5c7a", 14, 1.2);
          sfx(180, 0.25, "sawtooth", 0.06);
          sync();
          if (state.lives <= 0) { gameOver(); return; }
          continue;
        }
        const point = posAt(enemy.dist);
        enemy.x = point.x;
        enemy.y = point.y;
      }
      for (const tower of state.towers) {
        tower.cooldown -= dt;
        if (tower.cooldown > 0) continue;
        let target: Enemy | null = null;
        let bestD = Infinity;
        const reach = tower.rangeCells * cell;
        for (const enemy of state.enemies) {
          const d2 = (tower.x - enemy.x) ** 2 + (tower.y - enemy.y) ** 2;
          if (d2 < reach * reach && d2 < bestD) { bestD = d2; target = enemy; }
        }
        if (!target) continue;
        tower.angle = Math.atan2(target.y - tower.y, target.x - tower.x);
        state.shots.push({
          x: tower.x, y: tower.y, target, speed: TOWER[tower.type].pSpeed * cell, damage: tower.damage,
          splash: TOWER[tower.type].splash * cell, slow: TOWER[tower.type].slow, color: tower.color,
          size: tower.type === "cannon" ? 5 : tower.type === "frost" ? 3.5 : 2.5,
        });
        tower.cooldown = TOWER[tower.type].rate;
        sfx(tower.type === "cannon" ? 180 : tower.type === "frost" ? 880 : 660, 0.04, "square", 0.015);
      }
      for (let i = state.shots.length - 1; i >= 0; i -= 1) {
        const shot = state.shots[i];
        if (shot.target.dead || shot.target.hp <= 0) { state.shots.splice(i, 1); continue; }
        const dx = shot.target.x - shot.x;
        const dy = shot.target.y - shot.y;
        const d = Math.hypot(dx, dy);
        const step = shot.speed * dt;
        if (d <= step + shot.target.radius) { hitEnemy(shot, shot.target); state.shots.splice(i, 1); }
        else { shot.x += (dx / d) * step; shot.y += (dy / d) * step; }
      }
      for (let i = state.particles.length - 1; i >= 0; i -= 1) {
        const bit = state.particles[i];
        bit.x += bit.vx * dt; bit.y += bit.vy * dt;
        bit.vx *= 1 - 3 * dt; bit.vy *= 1 - 3 * dt;
        bit.life -= bit.decay * dt;
        if (bit.life <= 0) state.particles.splice(i, 1);
      }
      if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 30);
      if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2.2);
    };

    const draw = () => {
      ctx.save();
      if (state.shake > 0) ctx.translate((Math.random() - 0.5) * state.shake, (Math.random() - 0.5) * state.shake);
      ctx.fillStyle = "#060a14";
      ctx.fillRect(0, 0, W, H);
      for (let y = 0; y < ROWS; y += 1) {
        for (let x = 0; x < COLS; x += 1) {
          const px = offX + x * cell;
          const py = offY + y * cell;
          ctx.fillStyle = PATH_SET.has(`${x},${y}`) ? "rgba(255,209,102,.05)" : state.selected ? "rgba(110,231,183,.045)" : "rgba(255,255,255,.018)";
          ctx.fillRect(px, py, cell, cell);
          ctx.strokeStyle = "rgba(255,255,255,.045)";
          ctx.strokeRect(px + 0.5, py + 0.5, cell - 1, cell - 1);
        }
      }
      if (pathPx.length > 1) {
        ctx.save();
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgba(0,0,0,.5)";
        ctx.lineWidth = cell * 0.95;
        ctx.beginPath();
        ctx.moveTo(pathPx[0].x, pathPx[0].y);
        pathPx.forEach((point, index) => { if (index) ctx.lineTo(point.x, point.y); });
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,209,102,.12)";
        ctx.lineWidth = cell * 0.72;
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,209,102,.4)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 7]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(110,231,183,.7)";
        ctx.beginPath(); ctx.arc(pathPx[0].x, pathPx[0].y, cell * 0.18, 0, TAU); ctx.fill();
        const end = pathPx[pathPx.length - 1];
        ctx.fillStyle = "rgba(255,92,122,.75)";
        ctx.beginPath(); ctx.arc(end.x, end.y, cell * 0.2, 0, TAU); ctx.fill();
        ctx.restore();
      }
      for (const tower of state.towers) {
        const r = cell * 0.32;
        ctx.fillStyle = "rgba(6,12,22,.85)";
        ctx.beginPath(); ctx.arc(tower.x, tower.y, r * 1.15, 0, TAU); ctx.fill();
        ctx.strokeStyle = tower.color; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.arc(tower.x, tower.y, r, 0, TAU); ctx.stroke();
        ctx.fillStyle = tower.color;
        if (tower.type === "cannon") {
          ctx.beginPath(); ctx.arc(tower.x, tower.y, r * 0.45, 0, TAU); ctx.fill();
          ctx.save(); ctx.translate(tower.x, tower.y); ctx.rotate(tower.angle);
          ctx.fillStyle = "#1a1204"; ctx.fillRect(0, -r * 0.18, r * 0.9, r * 0.36); ctx.restore();
        } else if (tower.type === "frost") {
          ctx.beginPath(); ctx.moveTo(tower.x, tower.y - r * 0.55); ctx.lineTo(tower.x + r * 0.5, tower.y); ctx.lineTo(tower.x, tower.y + r * 0.55); ctx.lineTo(tower.x - r * 0.5, tower.y); ctx.closePath(); ctx.fill();
        } else {
          ctx.beginPath(); ctx.moveTo(tower.x, tower.y - r * 0.55); ctx.lineTo(tower.x + r * 0.48, tower.y + r * 0.4); ctx.lineTo(tower.x - r * 0.48, tower.y + r * 0.4); ctx.closePath(); ctx.fill();
        }
        const dot = Math.max(1.6, cell * 0.05);
        for (let i = 0; i < tower.level; i += 1) {
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(tower.x - ((tower.level - 1) * dot * 2.2) / 2 + i * dot * 2.2, tower.y + r * 1.35, dot, 0, TAU);
          ctx.fill();
        }
      }
      for (const enemy of state.enemies) {
        ctx.fillStyle = enemy.color;
        ctx.beginPath(); ctx.arc(enemy.x, enemy.y, enemy.radius, 0, TAU); ctx.fill();
        if (enemy.slowUntil > 0) { ctx.strokeStyle = "rgba(96,165,250,.85)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(enemy.x, enemy.y, enemy.radius + 3, 0, TAU); ctx.stroke(); }
        if (enemy.hp < enemy.maxHp) {
          const w = enemy.radius * 2.4;
          const h = Math.max(3, cell * 0.055);
          const ratio = Math.max(0, enemy.hp / enemy.maxHp);
          ctx.fillStyle = "rgba(0,0,0,.6)";
          ctx.fillRect(enemy.x - w / 2, enemy.y - enemy.radius - h - 3, w, h);
          ctx.fillStyle = ratio > 0.5 ? "#4ade80" : ratio > 0.25 ? "#fbbf24" : "#ef4444";
          ctx.fillRect(enemy.x - w / 2, enemy.y - enemy.radius - h - 3, w * ratio, h);
        }
      }
      for (const shot of state.shots) { ctx.fillStyle = shot.color; ctx.beginPath(); ctx.arc(shot.x, shot.y, shot.size, 0, TAU); ctx.fill(); }
      for (const bit of state.particles) { ctx.globalAlpha = Math.max(0, bit.life); ctx.fillStyle = bit.color; ctx.beginPath(); ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU); ctx.fill(); }
      ctx.globalAlpha = 1;
      ctx.restore();
      if (state.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${state.flash * 0.13})`; ctx.fillRect(0, 0, W, H); }
    };

    const loop = (ts: number) => {
      if (!alive) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000;
      last = ts;
      if (dt > 0.08) dt = 0.08;
      if (state.mode === "running") update(dt);
      else {
        for (let i = state.particles.length - 1; i >= 0; i -= 1) {
          state.particles[i].life -= state.particles[i].decay * dt;
          if (state.particles[i].life <= 0) state.particles.splice(i, 1);
        }
      }
      draw();
      requestAnimationFrame(loop);
    };

    const start = () => {
      state.mode = "running";
      state.wave = 0; state.gold = 200; state.lives = 20; state.score = 0;
      state.selected = null; state.towers = []; state.enemies = []; state.shots = []; state.particles = []; state.queue = [];
      state.between = true; state.delay = 2.5; state.shake = 0; state.flash = 0;
      setMode("running"); setRecord(false); setToast(null); showInfo(null); sync();
      sfx(520, 0.1, "sine", 0.04);
    };
    const pick = (type: TowerType) => {
      if (state.mode !== "running") return;
      if (state.gold < TOWER[type].cost) { say("gold"); return; }
      state.selected = state.selected === type ? null : type;
      setSelected(state.selected);
      sfx(560, 0.06, "sine", 0.02);
    };
    api.current = { start, pick };

    const onKey = (event: KeyboardEvent) => {
      if (state.mode === "idle" || state.mode === "over") {
        if (event.code === "Space" || event.code === "Enter") { event.preventDefault(); start(); }
        return;
      }
      if (event.code === "Digit1") pick("archer");
      if (event.code === "Digit2") pick("cannon");
      if (event.code === "Digit3") pick("frost");
      if (event.code === "Escape") { state.selected = null; setSelected(null); }
    };
    const onPointer = (event: PointerEvent) => {
      if (state.mode !== "running") return;
      if ((event.target as HTMLElement).closest("button")) return;
      const rect = boardEl.getBoundingClientRect();
      const gx = Math.floor((event.clientX - rect.left - offX) / cell);
      const gy = Math.floor((event.clientY - rect.top - offY) / cell);
      if (gx < 0 || gy < 0 || gx >= COLS || gy >= ROWS) return;
      const existing = state.towers.find((tower) => tower.gx === gx && tower.gy === gy);
      if (existing) { upgrade(existing); return; }
      if (state.selected) place(gx, gy, state.selected);
    };

    const observer = new ResizeObserver(layout);
    observer.observe(boardEl);
    layout();
    setBest(state.best);
    window.addEventListener("keydown", onKey);
    boardEl.addEventListener("pointerdown", onPointer);
    const frame = requestAnimationFrame(loop);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
      boardEl.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
  const toastText = !toast ? ""
    : toast.key === "path" ? COPY.path[lang]
    : toast.key === "taken" ? COPY.taken[lang]
    : toast.key === "gold" ? COPY.needGold[lang]
    : toast.key === "max" ? COPY.max[lang]
    : toast.key === "need" ? `${COPY.needGold[lang]} ${toast.cost}`
    : toast.key === "level" ? `${COPY.level[lang]} ${toast.level}`
    : COPY.clear[lang];

  return (
    <main className="qala-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="qala-top">
        <p className="eyebrow"><i /><a href={gamePath(lang)}>{back}</a></p>
        <div className="kosmos-head"><h1>{game.name[lang]}</h1><p className="xo-version">{GAME_VERSION}</p></div>
      </div>
      <dl className="qala-hud">
        <div><dt>{COPY.wave[lang]}</dt><dd>{wave}</dd></div>
        <div><dt>{COPY.gold[lang]}</dt><dd className="is-gold">{gold}</dd></div>
        <div><dt>{COPY.lives[lang]}</dt><dd className="is-life">{lives}</dd></div>
        <div><dt>{COPY.score[lang]}</dt><dd>{score}</dd></div>
      </dl>
      <div className="qala-board" ref={boardRef}>
        <canvas ref={canvasRef} />
        {info ? <p className="qala-info">{COPY.next[lang]} <b>{info}</b></p> : null}
        {toast ? <p key={toast.n} className="qala-toast">{toastText}</p> : null}
        {mode !== "running" ? (
          <div className="ilan-overlay">
            <div className="ilan-panel">
              <h2>{mode === "over" ? (record ? COPY.record[lang] : COPY.fell[lang]) : game.name[lang]}</h2>
              {mode === "over" ? <p className="ilan-big">{score}</p> : <p>{COPY.lead[lang]}</p>}
              {mode === "over" ? <p className="ilan-mini">{COPY.wave[lang]} {wave} · {COPY.best[lang]} {Math.max(best, score)}</p> : null}
              <div className="ilan-actions">
                <button type="button" className="is-gold" onClick={() => api.current.start()}>{mode === "idle" ? COPY.start[lang] : COPY.again[lang]}</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="qala-tools">
        {(["archer", "cannon", "frost"] as TowerType[]).map((type) => (
          <button
            key={type}
            type="button"
            className={`${selected === type ? "is-on" : ""} ${gold < TOWER[type].cost ? "is-off" : ""}`}
            onClick={() => api.current.pick(type)}
          >
            <b>{COPY[type][lang]}</b>
            <span>{TOWER[type].cost}</span>
          </button>
        ))}
      </div>
      <p className="ilan-hint">{COPY.hint[lang]}</p>
    </main>
  );
}
