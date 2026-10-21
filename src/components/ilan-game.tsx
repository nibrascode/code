import { useEffect, useRef, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const COLS = 20;
const ROWS = 20;
const BASE_TICK = 150;
const MIN_TICK = 72;
const TICK_STEP = 3;
const BEST_KEY = "nibras-ilan-v1";

type Mode = "idle" | "running" | "paused" | "over";
type Cell = { x: number; y: number };
type Dir = { x: number; y: number };

const COPY: Record<string, Record<Lang, string>> = {
  score: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
  best: { az: "Rekord", en: "Best", tr: "Rekor", ar: "الرقم", ru: "Рекорд" },
  speed: { az: "Sürət", en: "Speed", tr: "Hız", ar: "السرعة", ru: "Скорость" },
  food: { az: "Yemək", en: "Food", tr: "Yem", ar: "الأكل", ru: "Еда" },
  start: { az: "Başla", en: "Start", tr: "Başla", ar: "ابدأ", ru: "Старт" },
  resume: { az: "Davam et", en: "Continue", tr: "Devam et", ar: "أكمل", ru: "Дальше" },
  again: { az: "Yenidən", en: "Again", tr: "Yeniden", ar: "من جديد", ru: "Заново" },
  pause: { az: "Pauza", en: "Pause", tr: "Duraklat", ar: "توقف", ru: "Пауза" },
  over: { az: "Oyun bitdi", en: "Game over", tr: "Oyun bitti", ar: "انتهت اللعبة", ru: "Игра окончена" },
  win: { az: "Mükəmməl", en: "Perfect", tr: "Mükemmel", ar: "ممتاز", ru: "Идеально" },
  record: { az: "Yeni rekord", en: "New record", tr: "Yeni rekor", ar: "رقم جديد", ru: "Новый рекорд" },
  lead: {
    az: "Yeməyi ye, uzan. Divara və özünə toxunma. Hər yemək sürəti artırır.",
    en: "Eat, grow, and do not hit the wall or yourself. Each bite gets faster.",
    tr: "Yemi ye, uzan. Duvara ve kendine değme. Her yem hızı artırır.",
    ar: "كُلْ وتقدّم. لا تلمس الجدار ولا نفسك. كل لقمة تزيد السرعة.",
    ru: "Ешь и расти. Не врежься в стену и в себя. Каждый кусок быстрее.",
  },
  wait: { az: "İlan səni gözləyir.", en: "The snake is waiting.", tr: "Yılan seni bekliyor.", ar: "الأفعى تنتظرك.", ru: "Змейка ждёт." },
  keys: {
    az: "Oxlar və ya WASD. Boşluq pauzadır.",
    en: "Arrows or WASD. Space pauses.",
    tr: "Oklar ya da WASD. Boşluk duraklatır.",
    ar: "الأسهم أو WASD. المسافة توقف.",
    ru: "Стрелки или WASD. Пробел — пауза.",
  },
};

type Hud = { score: number; best: number; speed: number; eaten: number; record: boolean; win: boolean };

function readBest() {
  try {
    return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0;
  } catch {
    return 0;
  }
}

export function IlanGame() {
  const { lang } = useI18n();
  const game = gameBySlug("ilan")!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const [hud, setHud] = useState<Hud>({ score: 0, best: 0, speed: 1, eaten: 0, record: false, win: false });
  const [shake, setShake] = useState(false);
  const api = useRef({ start: () => {}, pause: () => {}, resume: () => {}, turn: (_x: number, _y: number) => {} });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let cell = 0;
    const state = {
      mode: "idle" as Mode,
      snake: [] as Cell[],
      prev: [] as Cell[],
      dir: { x: 1, y: 0 },
      queue: [] as Dir[],
      food: { x: 0, y: 0 },
      eaten: 0,
      score: 0,
      best: readBest(),
      tick: BASE_TICK,
      acc: 0,
      t: 1,
      particles: [] as { x: number; y: number; vx: number; vy: number; life: number; size: number }[],
      flash: 0,
    };
    let lastTS = 0;
    let alive = true;
    let actx: AudioContext | null = null;

    const beep = (freq: number, dur = 0.1, type: OscillatorType = "sine", vol = 0.05) => {
      try {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!actx) actx = new AC();
        if (actx.state === "suspended") void actx.resume();
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
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

    const publish = (extra?: Partial<Hud>) => {
      setHud({
        score: state.score,
        best: Math.max(state.best, state.score),
        speed: 1 + Math.floor(state.eaten / 5),
        eaten: state.eaten,
        record: false,
        win: false,
        ...extra,
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = rect.width;
      H = rect.height;
      cell = W / COLS;
    };

    const placeFood = () => {
      const free: Cell[] = [];
      for (let y = 0; y < ROWS; y += 1) {
        for (let x = 0; x < COLS; x += 1) {
          if (!state.snake.some((part) => part.x === x && part.y === y)) free.push({ x, y });
        }
      }
      state.food = free.length ? free[Math.floor(Math.random() * free.length)] : { x: -1, y: -1 };
    };

    const reset = () => {
      const cy = Math.floor(ROWS / 2);
      state.snake = [{ x: 8, y: cy }, { x: 7, y: cy }, { x: 6, y: cy }];
      state.prev = state.snake.map((part) => ({ ...part }));
      state.dir = { x: 1, y: 0 };
      state.queue = [];
      state.eaten = 0;
      state.score = 0;
      state.tick = BASE_TICK;
      state.acc = 0;
      state.t = 1;
      state.particles = [];
      state.flash = 0;
      placeFood();
      publish();
    };

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const segColor = (f: number) => {
      const r = Math.round(lerp(110, 13, f));
      const g = Math.round(lerp(231, 148, f));
      const b = Math.round(lerp(183, 136, f));
      return `rgb(${r},${g},${b})`;
    };

    const spawn = (px: number, py: number) => {
      for (let i = 0; i < 16; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * 130;
        state.particles.push({
          x: px,
          y: py,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: cell * (0.07 + Math.random() * 0.1),
        });
      }
    };

    const gameOver = (win = false) => {
      state.mode = "over";
      state.t = 1;
      setMode("over");
      setShake(false);
      requestAnimationFrame(() => setShake(true));
      if (win) {
        beep(660, 0.1);
        window.setTimeout(() => beep(880, 0.12), 110);
        window.setTimeout(() => beep(1320, 0.2), 230);
      } else {
        beep(220, 0.18, "sawtooth", 0.06);
        window.setTimeout(() => beep(150, 0.28, "sawtooth", 0.05), 130);
      }
      const record = state.score > state.best;
      if (record) {
        state.best = state.score;
        try {
          localStorage.setItem(BEST_KEY, String(state.best));
        } catch {
          /* ignore */
        }
      }
      publish({ record, win });
    };

    const step = () => {
      state.prev = state.snake.map((part) => ({ ...part }));
      if (state.queue.length) state.dir = state.queue.shift()!;
      const head = { x: state.snake[0].x + state.dir.x, y: state.snake[0].y + state.dir.y };
      if (head.x < 0 || head.y < 0 || head.x >= COLS || head.y >= ROWS) {
        gameOver();
        return;
      }
      for (let i = 0; i < state.snake.length - 1; i += 1) {
        if (state.snake[i].x === head.x && state.snake[i].y === head.y) {
          gameOver();
          return;
        }
      }
      state.snake.unshift(head);
      if (head.x === state.food.x && head.y === state.food.y) {
        state.eaten += 1;
        state.score += 10;
        state.tick = Math.max(MIN_TICK, BASE_TICK - state.eaten * TICK_STEP);
        state.flash = 1;
        spawn((state.food.x + 0.5) * cell, (state.food.y + 0.5) * cell);
        beep(720, 0.07, "triangle", 0.05);
        window.setTimeout(() => beep(1040, 0.09, "triangle", 0.045), 60);
        placeFood();
        publish();
        if (state.snake.length >= COLS * ROWS) gameOver(true);
      } else {
        state.snake.pop();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,.04)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 1; i < COLS; i += 1) {
        const p = Math.round(i * cell) + 0.5;
        ctx.moveTo(p, 0);
        ctx.lineTo(p, H);
        ctx.moveTo(0, p);
        ctx.lineTo(W, p);
      }
      ctx.stroke();
      ctx.restore();

      if (state.food.x >= 0) {
        const pulse = 1 + Math.sin(performance.now() / 1000 * 4.2) * 0.11;
        const cx = (state.food.x + 0.5) * cell;
        const cy = (state.food.y + 0.5) * cell;
        const radius = cell * 0.29 * pulse;
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * 1.25);
        glow.addColorStop(0, "rgba(255,209,102,.42)");
        glow.addColorStop(0.55, "rgba(255,209,102,.10)");
        glow.addColorStop(1, "rgba(255,209,102,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, cell * 1.25, 0, 7);
        ctx.fill();
        ctx.save();
        ctx.shadowColor = "rgba(255,209,102,.9)";
        ctx.shadowBlur = cell * 0.9;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 7);
        ctx.fillStyle = "#ffd166";
        ctx.fill();
        ctx.restore();
        ctx.beginPath();
        ctx.arc(cx - radius * 0.3, cy - radius * 0.32, radius * 0.34, 0, 7);
        ctx.fillStyle = "rgba(255,255,255,.85)";
        ctx.fill();
      }

      const snake = state.snake;
      const t = state.mode === "running" ? state.t : 1;
      const pad = cell * 0.1;
      const rad = cell * 0.3;
      for (let i = snake.length - 1; i >= 0; i -= 1) {
        const cur = snake[i];
        const prev = state.prev[i] || state.prev[state.prev.length - 1] || cur;
        const px = lerp(prev.x, cur.x, t) * cell;
        const py = lerp(prev.y, cur.y, t) * cell;
        const f = snake.length > 1 ? i / (snake.length - 1) : 0;
        ctx.fillStyle = segColor(f);
        if (i === 0) {
          ctx.save();
          ctx.shadowColor = "rgba(110,231,183,.85)";
          ctx.shadowBlur = cell * 0.85;
          roundRect(px + pad * 0.55, py + pad * 0.55, cell - pad * 1.1, cell - pad * 1.1, rad);
          ctx.fill();
          ctx.restore();
        } else {
          const shrink = pad * (0.15 + f * 0.5);
          roundRect(px + pad + shrink, py + pad + shrink, cell - (pad + shrink) * 2, cell - (pad + shrink) * 2, rad * (1 - f * 0.35));
          ctx.fill();
        }
      }
      if (snake[0]) {
        const head = snake[0];
        const prev = state.prev[0] || head;
        const hx = lerp(prev.x, head.x, t) * cell + cell / 2;
        const hy = lerp(prev.y, head.y, t) * cell + cell / 2;
        const perp = { x: -state.dir.y, y: state.dir.x };
        ctx.fillStyle = "#04121a";
        for (const side of [-1, 1]) {
          ctx.beginPath();
          ctx.arc(hx + perp.x * cell * 0.19 * side + state.dir.x * cell * 0.15, hy + perp.y * cell * 0.19 * side + state.dir.y * cell * 0.15, Math.max(1.4, cell * 0.085), 0, 7);
          ctx.fill();
        }
      }
      for (const particle of state.particles) {
        ctx.globalAlpha = Math.max(0, particle.life);
        ctx.fillStyle = "#ffd166";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, 7);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (state.flash > 0) {
        ctx.fillStyle = `rgba(255,209,102,${state.flash * 0.07})`;
        ctx.fillRect(0, 0, W, H);
      }
    };

    const loop = (ts: number) => {
      if (!alive) return;
      if (!lastTS) lastTS = ts;
      let dt = ts - lastTS;
      lastTS = ts;
      if (dt > 200) dt = 200;
      if (state.mode === "running") {
        state.acc += dt;
        let guard = 0;
        while (state.acc >= state.tick && state.mode === "running" && guard < 6) {
          state.acc -= state.tick;
          step();
          guard += 1;
        }
        state.t = Math.min(1, state.acc / state.tick);
      }
      const k = dt / 1000;
      for (let i = state.particles.length - 1; i >= 0; i -= 1) {
        const particle = state.particles[i];
        particle.x += particle.vx * k;
        particle.y += particle.vy * k;
        particle.vx *= 0.94;
        particle.vy *= 0.94;
        particle.life -= k * 2.1;
        if (particle.life <= 0) state.particles.splice(i, 1);
      }
      if (state.flash > 0) state.flash = Math.max(0, state.flash - k * 3.2);
      draw();
      requestAnimationFrame(loop);
    };

    const start = () => {
      resize();
      reset();
      state.mode = "running";
      lastTS = 0;
      setMode("running");
      setShake(false);
      beep(560, 0.08);
      window.setTimeout(() => beep(840, 0.1), 80);
    };
    const pause = () => {
      if (state.mode !== "running") return;
      state.mode = "paused";
      setMode("paused");
      beep(420, 0.09, "sine", 0.04);
    };
    const resume = () => {
      if (state.mode !== "paused") return;
      state.mode = "running";
      lastTS = 0;
      setMode("running");
      beep(620, 0.09, "sine", 0.04);
    };
    const turn = (x: number, y: number) => {
      if (state.mode !== "running") return;
      const last = state.queue.length ? state.queue[state.queue.length - 1] : state.dir;
      if (last.x === -x && last.y === -y) return;
      if (last.x === x && last.y === y) return;
      if (state.queue.length < 2) state.queue.push({ x, y });
    };
    api.current = { start, pause, resume, turn };

    const keys: Record<string, Dir> = {
      ArrowUp: { x: 0, y: -1 },
      KeyW: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      KeyS: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      KeyA: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
      KeyD: { x: 1, y: 0 },
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "Enter") {
        if (state.mode === "idle" || state.mode === "over") {
          event.preventDefault();
          start();
          return;
        }
        if (state.mode === "running" || state.mode === "paused") {
          event.preventDefault();
          state.mode === "running" ? pause() : resume();
          return;
        }
      }
      const dir = keys[event.code];
      if (!dir) return;
      event.preventDefault();
      turn(dir.x, dir.y);
    };

    let touch: { x: number; y: number } | null = null;
    const touchStart = (event: TouchEvent) => {
      const point = event.changedTouches[0];
      touch = { x: point.clientX, y: point.clientY };
    };
    const touchEnd = (event: TouchEvent) => {
      if (!touch) return;
      const point = event.changedTouches[0];
      const dx = point.clientX - touch.x;
      const dy = point.clientY - touch.y;
      touch = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 22) return;
      if (Math.abs(dx) > Math.abs(dy)) turn(dx > 0 ? 1 : -1, 0);
      else turn(0, dy > 0 ? 1 : -1);
    };
    const onHide = () => {
      if (document.hidden && state.mode === "running") pause();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    reset();
    setHud((prev) => ({ ...prev, best: state.best }));
    window.addEventListener("keydown", onKey);
    canvas.addEventListener("touchstart", touchStart, { passive: true });
    canvas.addEventListener("touchend", touchEnd, { passive: true });
    document.addEventListener("visibilitychange", onHide);
    const frame = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("touchstart", touchStart);
      canvas.removeEventListener("touchend", touchEnd);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, []);

  const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";

  return (
    <main className="ilan-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="ilan-top">
        <p className="eyebrow">
          <i />
          <a href={gamePath(lang)}>{back}</a>
        </p>
        <div className="ilan-head">
          <h1>{game.name[lang]}</h1>
          <p className="xo-version">{GAME_VERSION}</p>
          <dl>
            <div><dt>{COPY.score[lang]}</dt><dd>{hud.score}</dd></div>
            <div><dt>{COPY.best[lang]}</dt><dd>{hud.best}</dd></div>
            <div><dt>{COPY.speed[lang]}</dt><dd>{hud.speed}</dd></div>
          </dl>
        </div>
      </div>
      <div className={`ilan-board${shake ? " is-shake" : ""}`} ref={wrapRef}>
        <canvas ref={canvasRef} />
        {mode === "running" ? (
          <button type="button" className="ilan-pause" onClick={() => api.current.pause()} aria-label={COPY.pause[lang]}>❚❚</button>
        ) : null}
        {mode !== "running" ? (
          <div className="ilan-overlay">
            <div className="ilan-panel">
              <h2>{mode === "paused" ? COPY.pause[lang] : mode === "over" ? (hud.win ? COPY.win[lang] : COPY.over[lang]) : game.name[lang]}</h2>
              {mode === "over" ? <p className="ilan-big">{hud.score}</p> : <p>{mode === "paused" ? COPY.wait[lang] : COPY.lead[lang]}</p>}
              {mode === "over" && hud.record ? <p className="ilan-rec">{COPY.record[lang]}</p> : null}
              {mode === "over" ? (
                <p className="ilan-mini">{COPY.food[lang]} {hud.eaten} · {COPY.best[lang]} {hud.best}</p>
              ) : null}
              <div className="ilan-actions">
                {mode === "paused" ? <button type="button" className="is-gold" onClick={() => api.current.resume()}>{COPY.resume[lang]}</button> : null}
                <button type="button" className={mode === "paused" ? "" : "is-gold"} onClick={() => api.current.start()}>
                  {mode === "idle" ? COPY.start[lang] : COPY.again[lang]}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="ilan-dpad" dir="ltr">
        <button type="button" className="up" onPointerDown={(event) => { event.preventDefault(); api.current.turn(0, -1); }} aria-label="up">▲</button>
        <button type="button" className="left" onPointerDown={(event) => { event.preventDefault(); api.current.turn(-1, 0); }} aria-label="left">◀</button>
        <button type="button" className="right" onPointerDown={(event) => { event.preventDefault(); api.current.turn(1, 0); }} aria-label="right">▶</button>
        <button type="button" className="down" onPointerDown={(event) => { event.preventDefault(); api.current.turn(0, 1); }} aria-label="down">▼</button>
      </div>
      <p className="ilan-hint">{COPY.keys[lang]}</p>
    </main>
  );
}
