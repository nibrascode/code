import { useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";

const CARDS = [
  { slug: "nibras-arabic", name: "Nibras Arabic", icon: "/apps/nibras-arabic.jpg" },
  { slug: "nibras-pdf", name: "Nibras PDF", icon: "/apps/nibras-pdf.jpg" },
  { slug: "nibras-docs", name: "Nibras Docs", icon: "/apps/nibras-docs.jpg" },
  { slug: "nibras-plans", name: "Nibras Plans", icon: "/apps/nibras-plans.jpg" },
] as const;

const LABEL = {
  az: "Tövsiyə",
  en: "Suggested",
  tr: "Öneri",
  ar: "اقتراح",
  ru: "Рекомендуем",
} as const;

type Act = "wave" | "hop" | "look" | "turn" | "cheer" | "rest" | "spin";
const ACTS: Act[] = ["wave", "hop", "look", "turn", "cheer", "rest", "spin"];
type Behavior = "cruise" | "zigzag" | "dash" | "creep" | "skip" | "sprint" | "reverse" | "midpause" | "sulk";
const BEHAVIORS: [Behavior, number][] = [
  ["cruise", 5],
  ["zigzag", 3],
  ["dash", 3],
  ["creep", 2],
  ["skip", 2],
  ["sprint", 2],
  ["reverse", 3],
  ["midpause", 1],
  ["sulk", 1],
];
const STEP = 8;
const INTRO_MS = 10000; // səhifə açılandan (görünən vaxtla) bu qədər sonra bir dəfəlik giriş ssenarisi
const ASK_TEXT = "Niyə yükləmirsən tətbiqi?";
const OK_TEXT = "Deyəsən yüklədin";
let introState = 0; // 0: başlamayıb, 1: gedir, 2: bitib (səhifə yüklənməsi başına bir dəfə)
const BLEND = 8;

const rand = (min: number, max: number) => min + Math.random() * (max - min);
/** Loqarifmik təsadüfi sürət: yavaşdan çox sürətliyə qədər fərqli ritmlər. */
const speedIn = (min: number, max: number) => Math.exp(rand(Math.log(min), Math.log(max)));
const pick = <T,>(list: readonly T[]): T => list[Math.floor(Math.random() * list.length)];

/** Kartın haşiyəsi boyunca (saat əqrəbi istiqamətində) s məsafəsindəki mövqe və bucaq. */
function poseAt(s: number, W: number, H: number) {
  const P = 2 * (W + H);
  const cp = [0, W, W + H, 2 * W + H];
  const lap = Math.floor(s / P);
  const u = s - lap * P;
  let i = 0;
  while (i < 3 && u >= cp[i + 1]) i++;
  const m = 4 * lap + i;
  const pos = (n: number) => Math.floor(n / 4) * P + cp[((n % 4) + 4) % 4];
  let x: number;
  let y: number;
  if (i === 0) [x, y] = [u, 0];
  else if (i === 1) [x, y] = [W, u - W];
  else if (i === 2) [x, y] = [W - (u - W - H), H];
  else [x, y] = [0, H - (u - 2 * W - H)];
  let a = 90 * m;
  const d1 = s - pos(m);
  const d2 = pos(m + 1) - s;
  if (d1 < BLEND) a = 90 * (m - 1) + 90 * ((d1 + BLEND) / (2 * BLEND));
  else if (d2 < BLEND) a = 90 * m + 90 * ((BLEND - d2) / (2 * BLEND));
  return { x, y, a };
}

const poseCss = (s: number, W: number, H: number) => {
  const { x, y, a } = poseAt(s, W, H);
  return `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%) rotate(${a.toFixed(1)}deg)`;
};

/**
 * Robotun kart haşiyəsi boyunca gözlənilməz gəzintisi: dayanır, fərqli sürətlə gedir,
 * istiqaməti dəyişir, irəli atlayır, geri qayıdır. Yalnız transform (WAAPI), bir taymer.
 * Tab gizli və ya kart görünməzdirsə dayanır. Qaytarılan funksiya hər şeyi təmizləyir.
 */
function startWalker(bot: SVGSVGElement, host: HTMLElement, bubble: HTMLElement | null) {
  let s = host.offsetWidth * 0.12;
  let dir = 1;
  let lastAct: Act | null = null;
  let stopped = false;
  let paused = document.hidden;
  let timer = 0;
  let due = 0;
  let remaining = 0;
  let pending: (() => void) | null = null;
  let anim: Animation | null = null;
  let inView = true;
  let curMove: { s0: number; s1: number } | null = null;
  let introLeft = INTRO_MS;
  let introAt = 0;
  let introTimer = 0;
  let introWaiting = false;
  let busy = false; // təsadüfi qabarcıq/küsmə gedir: giriş ssenarisi gözləyir

  const dims = () => [Math.max(host.offsetWidth, 40), Math.max(host.offsetHeight, 20)] as const;
  const setPose = () => {
    const [W, H] = dims();
    bot.style.transform = poseCss(s, W, H);
  };
  const later = (fn: () => void, ms: number) => {
    pending = fn;
    due = performance.now() + ms;
    remaining = ms;
    if (!paused) timer = window.setTimeout(fire, ms);
  };
  const fire = () => {
    const fn = pending;
    pending = null;
    timer = 0;
    if (fn && !stopped) fn();
  };
  const sync = () => {
    const shouldPause = document.hidden || !inView;
    if (shouldPause === paused) return;
    paused = shouldPause;
    if (paused) {
      if (timer) {
        window.clearTimeout(timer);
        timer = 0;
        remaining = Math.max(0, due - performance.now());
      }
      if (introTimer) {
        window.clearTimeout(introTimer);
        introTimer = 0;
        introLeft = Math.max(0, introAt - performance.now());
      }
      anim?.pause();
    } else {
      if (pending) timer = window.setTimeout(fire, remaining);
      if (introState === 0 && !introTimer && !introWaiting && !stopped) armIntro();
      anim?.play();
    }
  };

  type Seg = { len: number; speed: number; easing: string; step?: number; pause?: number };
  let walked = 0; // son dayanmadan bəri yeriyiş vaxtı (ms)
  let lastBehavior: Behavior | null = null;
  let afterRun: (() => void) | null = null;
  let sulkAway: [number, number] = [3600, 4600];
  let sulkBack: (() => void) | null = null;
  let lastBubble = performance.now() - 20000; // ilk 25 san qabarcıq yoxdur

  const bubbleText = bubble?.querySelector<HTMLElement>(".suggest-bubble-text") ?? null;
  const bubbleBadge = bubble?.querySelector<HTMLElement>(".suggest-bubble-badge") ?? null;

  const hideBubble = () => bubble?.classList.remove("on");

  /** Qabarcığı robotun üstündə (üst xətt), altında (alt xətt) və ya yan xətdə kartın üstündə göstərir. */
  const showBubble = (text: string, ok: boolean, force: boolean) => {
    if (!bubble) return false;
    const [W, H] = dims();
    const { x, y } = poseAt(s, W, H);
    const top = y < 1;
    const bottom = y > H - 1;
    if (!top && !bottom && !force) return false; // təsadüfi qabarcıq: kartın mətnini örtməsin
    if (bubbleText) bubbleText.textContent = text;
    if (bubbleBadge) bubbleBadge.textContent = ok ? "✓" : "!";
    bubble.dataset.kind = ok ? "ok" : "ask";
    const bw = bubble.offsetWidth;
    const bh = bubble.offsetHeight;
    const rect = host.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const minL = 8 - rect.left;
    const maxL = vw - 8 - rect.left - bw;
    const left = Math.min(Math.max(x - bw / 2, minL), Math.max(minL, maxL));
    bubble.style.left = `${left.toFixed(1)}px`;
    bubble.style.top = `${(bottom ? H + 14 : top ? -bh - 14 : -bh - 8).toFixed(1)}px`;
    bubble.style.setProperty("--tail", `${Math.min(Math.max(x - left, 12), bw - 12).toFixed(1)}px`);
    bubble.dataset.side = bottom ? "bottom" : "top";
    bubble.classList.add("on");
    return true;
  };

  /** Dayananda bəzən «tətbiqi yüklə» qabarcığı, sonra qısa fasilə və küsüb getmə. */
  const bubbleStop = () => {
    if (!showBubble(ASK_TEXT, false, false)) return false;
    busy = true;
    lastBubble = performance.now();
    lastAct = null;
    bot.dataset.act = "alert";
    bot.style.removeProperty("--gait");
    walked = 0;
    later(() => {
      hideBubble();
      later(() => {
        lastBehavior = "sulk";
        sulk();
      }, 900);
    }, 2800);
    return true;
  };

  /** Bir WAAPI animasiyasını işə salır; tab gizlidirsə dayanıq saxlayır. */
  const play = (frames: Keyframe[], duration: number, easing: string, done: () => void) => {
    const a = bot.animate(frames, { duration, easing, fill: "forwards" });
    anim = a;
    if (paused) a.pause();
    a.onfinish = () => {
      if (stopped) return;
      a.cancel();
      anim = null;
      done();
    };
  };

  /** Küsmə: haşiyədə kənara yürüyür, ekrandan çıxır, ~4 san kənarda qalır, yavaşca qayıdır. */
  const sulk = () => {
    const [W, H] = dims();
    const P = 2 * (W + H);
    const rtl = document.documentElement.dir === "rtl";
    // yalnız "qeyri-sürüşən" tərəfə çıxır: LTR-də sola, RTL-də sağa (üfüqi scroll yaranmasın)
    const target = rtl ? W + H / 2 : 2 * W + H + H / 2;
    s = ((s % P) + P) % P;
    let delta = (((target - s) % P) + P) % P;
    if (delta > P / 2) delta -= P;
    dir = delta < 0 ? -1 : 1;
    busy = true;
    bot.dataset.act = "sulk";
    afterRun = leave;
    run([{ len: Math.max(Math.abs(delta), 1), speed: Math.max(34, Math.abs(delta) / 7), easing: "ease-in-out" }], 0);
  };

  const leave = () => {
    if (stopped) return;
    const [W, H] = dims();
    const rtl = document.documentElement.dir === "rtl";
    const rect = host.getBoundingClientRect();
    const out = rtl ? window.innerWidth - rect.right + 40 : rect.left + 40;
    const x0 = rtl ? W : 0;
    const x1 = rtl ? W + out : -out;
    const y = H / 2;
    const a0 = poseAt(s, W, H).a;
    const up = Math.round(a0 / 360) * 360; // dik duruş
    const at = (x: number, a: number) => `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%) rotate(${a.toFixed(1)}deg)`;
    const turnMs = 700;
    const walkMs = Math.max(2500, (out / 40) * 1000);
    const total = turnMs + walkMs;
    bot.style.setProperty("--gait", "1.1s");
    play(
      [
        { transform: at(x0, a0), offset: 0, easing: "ease-in-out" },
        { transform: at(x0, up), offset: turnMs / total, easing: "ease-in" },
        { transform: at(x1, up), offset: 1 },
      ],
      total,
      "linear",
      () => {
        bot.style.transform = at(x1, up);
        const [awayMin, awayMax] = sulkAway;
        sulkAway = [3600, 4600];
        later(() => {
          if (stopped) return;
          const back = Math.max(3500, (out / 30) * 1000);
          const total2 = back + turnMs;
          play(
            [
              { transform: at(x1, up), offset: 0, easing: "ease-out" },
              { transform: at(x0, up), offset: back / total2, easing: "ease-in-out" },
              { transform: at(x0, a0), offset: 1 },
            ],
            total2,
            "linear",
            () => {
              setPose();
              bot.style.removeProperty("--gait");
              walked = 0;
              const back2 = sulkBack ?? idle;
              sulkBack = null;
              back2();
            },
          );
        }, rand(awayMin, awayMax));
      },
    );
  };

  const idle = () => {
    busy = false;
    if (introWaiting) {
      introWaiting = false;
      startIntro();
      return;
    }
    if (introState === 2 && performance.now() - lastBubble > 45000 && Math.random() < 0.3 && bubbleStop()) return;
    const act = pick(ACTS.filter((x) => x !== lastAct));
    lastAct = act;
    bot.dataset.act = act;
    bot.style.removeProperty("--gait");
    walked = 0;
    later(() => plan(true), rand(800, act === "rest" ? 4000 : 3200));
  };

  /** Gedişi olduğu yerdə dondurur (animasiya, taymerlər), mövqeyi s-ə yazır. */
  const interrupt = () => {
    window.clearTimeout(timer);
    timer = 0;
    pending = null;
    afterRun = null;
    if (anim) {
      if (curMove) {
        const p = anim.effect?.getComputedTiming().progress ?? 0;
        s = curMove.s0 + (curMove.s1 - curMove.s0) * Math.min(Math.max(p, 0), 1);
      }
      anim.cancel();
      anim = null;
    }
    curMove = null;
    setPose();
  };

  const introBubble1 = () => {
    if (stopped) return;
    bot.dataset.act = "alert";
    bot.style.removeProperty("--gait");
    showBubble(ASK_TEXT, false, true);
    later(() => {
      hideBubble();
      later(() => {
        lastBehavior = "sulk";
        sulkAway = [4600, 5400];
        sulkBack = introReturned;
        sulk();
      }, 900);
    }, 2800);
  };

  const introReturned = () => {
    if (stopped) return;
    bot.dataset.act = "cheer";
    bot.style.removeProperty("--gait");
    showBubble(OK_TEXT, true, true);
    later(() => {
      hideBubble();
      introState = 2;
      busy = false;
      walked = 0;
      lastBubble = performance.now();
      later(() => plan(true), 800);
    }, 3000);
  };

  const startIntro = () => {
    introTimer = 0;
    if (stopped || introState !== 0) return;
    if (busy) {
      introWaiting = true; // təsadüfi qabarcıq/küsmə bitəndə başlayacaq
      return;
    }
    introState = 1;
    interrupt();
    const [W, H] = dims();
    const P = 2 * (W + H);
    const { y } = poseAt(s, W, H);
    if (y < 1 || y > H - 1) {
      introBubble1();
      return;
    }
    // yan xətdədirsə, ən yaxın üst/alt nöqtəyə yeriyir
    let best = 0;
    let bestAbs = Infinity;
    for (const c of [24, W - 24, W + H + 24, 2 * W + H - 24]) {
      let d = (((c - s) % P) + P) % P;
      if (d > P / 2) d -= P;
      if (Math.abs(d) < bestAbs) {
        bestAbs = Math.abs(d);
        best = d;
      }
    }
    s = ((s % P) + P) % P;
    dir = best < 0 ? -1 : 1;
    bot.dataset.act = "walk";
    afterRun = introBubble1;
    run([{ len: Math.max(bestAbs, 1), speed: Math.max(90, bestAbs / 2.5), easing: "ease-in-out" }], 0);
  };

  const armIntro = () => {
    introAt = performance.now() + introLeft;
    introTimer = window.setTimeout(startIntro, introLeft);
  };

  const pickBehavior = (): Behavior => {
    const pool = BEHAVIORS.filter(([b]) => b !== lastBehavior);
    let total = 0;
    for (const [, w] of pool) total += w;
    let r = Math.random() * total;
    for (const [b, w] of pool) {
      r -= w;
      if (r <= 0) return b;
    }
    return pool[0][0];
  };

  const plan = (afterStop = false) => {
    const [W, H] = dims();
    const P = 2 * (W + H);
    let behavior = pickBehavior();
    if (afterStop && behavior === "sprint" && Math.random() < 0.5) behavior = "cruise";
    lastBehavior = behavior;
    if (behavior === "sulk") {
      sulk();
      return;
    }
    const segs: Seg[] = [];
    let forceStop = false;
    let flip = false;
    if (Math.random() < 0.3) dir = -dir; // istiqamət də təsadüfidir
    switch (behavior) {
      case "sprint": {
        // çox sürətli: 1-5 tam dövrə, sonra yavaşlayıb dayanır
        const laps = pick([1, 2, 2, 3, 3, 4, 5]);
        const dist = laps * P;
        segs.push({ len: dist, speed: Math.max(speedIn(380, 800), dist / 13), easing: "ease-in-out", step: 12 });
        forceStop = true;
        break;
      }
      case "dash": {
        // qəfil qısa atılma
        segs.push({ len: rand(100, 420), speed: speedIn(260, 560), easing: "linear" });
        break;
      }
      case "creep": {
        segs.push({ len: rand(35, 110), speed: speedIn(7, 18), easing: "ease-in-out" });
        break;
      }
      case "skip": {
        segs.push({ len: rand(P * 0.2, P * 0.65), speed: speedIn(120, 260), easing: "ease-in-out" });
        break;
      }
      case "zigzag": {
        // sürət növbə ilə artıb azalır
        const parts = Math.floor(rand(4, 8));
        let fast = Math.random() < 0.5;
        for (let k = 0; k < parts; k++) {
          const len = rand(25, 110);
          segs.push({ len, speed: fast ? speedIn(110, 300) : speedIn(10, 34), easing: "linear" });
          fast = !fast;
        }
        break;
      }
      case "reverse": {
        // gedir, dönüb əks istiqamətə gedir
        segs.push({ len: rand(50, 160), speed: speedIn(30, 160), easing: "ease-out" });
        flip = true;
        segs.push({ len: rand(80, 260), speed: speedIn(40, 220), easing: "ease-in" });
        break;
      }
      case "midpause": {
        const parts = Math.floor(rand(2, 4));
        for (let k = 0; k < parts; k++) {
          segs.push({
            len: rand(60, 200),
            speed: speedIn(25, 160),
            easing: k === 0 ? "ease-in" : "ease-in-out",
            pause: k < parts - 1 ? rand(250, 900) : 0,
          });
        }
        break;
      }
      default: {
        const parts = Math.floor(rand(2, 5));
        for (let k = 0; k < parts; k++) {
          segs.push({ len: rand(60, 240), speed: speedIn(18, 170), easing: "linear" });
        }
      }
    }
    // dayanma nadirdir: uzun yeriyişdən sonra, ehtimalla
    const stopAfter = forceStop || (walked > 9000 && Math.random() < 0.3) || walked > 38000;
    if (stopAfter && segs[segs.length - 1].easing === "linear") segs[segs.length - 1].easing = "ease-out";
    bot.dataset.act = behavior === "sprint" ? "sprint" : "walk";
    run(segs, 0, stopAfter, flip);
  };

  const run = (segs: Seg[], idx: number, stopAfter = false, flip = false) => {
    if (stopped) return;
    if (idx >= segs.length) {
      if (afterRun) {
        const f = afterRun;
        afterRun = null;
        f();
      } else if (stopAfter) idle();
      else plan();
      return;
    }
    const [W, H] = dims();
    const P = 2 * (W + H);
    s = ((s % P) + P) % P;
    const { len, speed, easing, step, pause } = segs[idx];
    if (flip && idx === 1) dir = -dir;
    const s1 = s + dir * len;
    const n = Math.max(2, Math.ceil(len / (step ?? STEP)));
    const frames: Keyframe[] = [];
    for (let k = 0; k <= n; k++) {
      frames.push({ transform: poseCss(s + ((s1 - s) * k) / n, W, H), offset: k / n });
    }
    bot.style.setProperty("--gait", `${Math.max(0.12, 0.25 + 18 / speed - (speed > 300 ? 0.2 : 0)).toFixed(2)}s`);
    curMove = { s0: s, s1 };
    play(frames, Math.max(500, (len / speed) * 1000), easing, () => {
      curMove = null;
      s = s1;
      setPose();
      walked += (len / speed) * 1000;
      if (pause) {
        bot.dataset.act = "rest";
        later(() => {
          bot.dataset.act = "walk";
          run(segs, idx + 1, stopAfter, flip);
        }, pause);
      } else run(segs, idx + 1, stopAfter, flip);
    });
  };

  bot.style.left = "0";
  bot.style.top = "0";
  setPose();
  bot.dataset.act = "rest";
  later(() => plan(true), rand(600, 1500));
  if (introState === 0 && !paused) armIntro();

  const onVis = () => sync();
  document.addEventListener("visibilitychange", onVis);
  const io =
    typeof IntersectionObserver === "function"
      ? new IntersectionObserver((entries) => {
          inView = entries[entries.length - 1].isIntersecting;
          sync();
        })
      : null;
  io?.observe(host);

  return () => {
    stopped = true;
    window.clearTimeout(timer);
    anim?.cancel();
    window.clearTimeout(introTimer);
    if (introState === 1) introState = 2;
    bubble?.classList.remove("on");
    document.removeEventListener("visibilitychange", onVis);
    io?.disconnect();
    bot.style.left = "";
    bot.style.top = "";
    bot.style.transform = "";
    bot.style.removeProperty("--gait");
    delete bot.dataset.act;
  };
}

export function AppSuggest() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { lang } = useI18n();
  const botRef = useRef<SVGSVGElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const card = pathname.startsWith("/nx-studio")
    ? undefined
    : CARDS.find((item) => !pathname.startsWith(`/apps/${item.slug}`));
  const show = Boolean(card);

  useEffect(() => {
    const bot = botRef.current;
    const host = bot?.parentElement;
    if (!show || !bot || !host || typeof bot.animate !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop: (() => void) | null = null;
    const apply = () => {
      stop?.();
      stop = mq.matches ? null : startWalker(bot, host, bubbleRef.current);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      stop?.();
    };
  }, [show]);

  if (!card) return null;

  return (
    <aside className="app-suggest">
      <Link to="/apps/$slug" params={{ slug: card.slug }}>
        <img src={card.icon} alt="" />
        <b>{card.name}</b>
        <small>{LABEL[lang]}</small>
        <span ref={bubbleRef} className="suggest-bubble" aria-hidden="true">
          <span className="suggest-bubble-badge">!</span>
          <span className="suggest-bubble-text">Niyə yükləmirsən tətbiqi?</span>
        </span>
        <svg ref={botRef} className="suggest-bot" viewBox="-1.5 -2 19 21" aria-hidden="true">
          <g className="bot-sparks" fill="#fff6c2">
            <path className="bot-spark bot-spark-a" d="M14.6 1.2l.45 1.1 1.1.45-1.1.45-.45 1.1-.45-1.1-1.1-.45 1.1-.45z" />
            <path className="bot-spark bot-spark-b" d="M1.6 3.2l.35.85.85.35-.85.35-.35.85-.35-.85-.85-.35.85-.35z" />
          </g>
          <ellipse className="bot-shadow" cx="8" cy="16.6" rx="4.2" ry="0.7" fill="#000" opacity="0.35" />
          <g className="bot-hop">
            <g className="bot-feet">
              <rect className="bot-foot bot-foot-l" x="4.15" y="12.7" width="2.5" height="2.55" rx="0.8" fill="#c5d2ea" />
              <rect className="bot-foot bot-foot-r" x="9.35" y="12.7" width="2.5" height="2.55" rx="0.8" fill="#c5d2ea" />
            </g>
            <g className="bot-arm bot-arm-l">
              <rect x="0.9" y="7.2" width="2.1" height="4.4" rx="1.05" fill="#c5d2ea" />
            </g>
            <g className="bot-arm bot-arm-r">
              <rect x="13" y="7.2" width="2.1" height="4.4" rx="1.05" fill="#c5d2ea" />
            </g>
            <g className="bot-head">
              <g className="bot-antenna">
                <path d="M8 2.1v2.3" stroke="#9fd6ff" strokeWidth="1" strokeLinecap="round" />
                <circle className="bot-tip" cx="8" cy="1.15" r="1.05" fill="#c9b6ff" />
              </g>
              <rect x="3.1" y="4.4" width="9.8" height="8.6" rx="3" fill="#e7eefc" />
              <rect x="4.2" y="5.8" width="7.6" height="4.6" rx="2" fill="#16203a" />
              <rect className="bot-face-glow" x="4.2" y="5.8" width="7.6" height="4.6" rx="2" fill="#7fe3ff" />
              <rect x="6.6" y="11.3" width="2.8" height="0.8" rx="0.4" fill="#8ea6cc" />
            </g>
          </g>
        </svg>
      </Link>
    </aside>
  );
}
