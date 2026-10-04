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

type Act = "wave" | "hop" | "look" | "turn" | "cheer" | "rest";
const ACTS: Act[] = ["wave", "hop", "look", "turn", "cheer", "rest"];
const SPEEDS = [150, 70, 32, 14]; // px/san: sürətli, orta, yavaş, daha yavaş
const STEP = 8;
const BLEND = 8;

const rand = (min: number, max: number) => min + Math.random() * (max - min);
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
function startWalker(bot: SVGSVGElement, host: HTMLElement) {
  let s = host.offsetWidth * 0.12;
  let dir = 1;
  let lastAct: Act | null = null;
  let stopped = false;
  let paused = false;
  let timer = 0;
  let due = 0;
  let remaining = 0;
  let pending: (() => void) | null = null;
  let anim: Animation | null = null;
  let inView = true;

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
      anim?.pause();
    } else {
      if (pending) timer = window.setTimeout(fire, remaining);
      anim?.play();
    }
  };

  const idle = () => {
    let act = pick(ACTS);
    if (act === lastAct) act = pick(ACTS);
    lastAct = act;
    bot.dataset.act = act;
    bot.style.removeProperty("--gait");
    later(plan, rand(900, act === "rest" ? 4200 : 3200));
  };

  const plan = () => {
    const [W, H] = dims();
    const P = 2 * (W + H);
    const r = Math.random();
    let dist: number;
    if (r < 0.35) dist = rand(70, 170); // eyni istiqamətdə davam
    else if (r < 0.65) {
      dir = -dir; // dönüb geri
      dist = rand(40, 150);
    } else if (r < 0.82) {
      dir = Math.random() < 0.5 ? 1 : -1; // irəli atlayır
      dist = rand(P * 0.25, P * 0.6);
    } else if (r < 0.92) {
      dir = -dir; // bir addım geri
      dist = rand(18, 45);
    } else dist = rand(200, 300);
    const parts = pick([1, 1, 2, 3]);
    const segs: { len: number; speed: number }[] = [];
    for (let k = 0; k < parts; k++) {
      let speed = pick(SPEEDS);
      const len = dist / parts;
      speed = Math.max(speed, len / 7); // bir hissə 7 saniyədən uzun çəkməsin
      segs.push({ len, speed });
    }
    bot.dataset.act = "walk";
    run(segs, 0);
  };

  const run = (segs: { len: number; speed: number }[], idx: number) => {
    if (stopped) return;
    if (idx >= segs.length) {
      idle();
      return;
    }
    const [W, H] = dims();
    const P = 2 * (W + H);
    s = ((s % P) + P) % P;
    const { len, speed } = segs[idx];
    const s1 = s + dir * len;
    const n = Math.max(2, Math.ceil(len / STEP));
    const frames: Keyframe[] = [];
    for (let k = 0; k <= n; k++) {
      frames.push({ transform: poseCss(s + ((s1 - s) * k) / n, W, H), offset: k / n });
    }
    bot.style.setProperty("--gait", `${(0.25 + 18 / speed).toFixed(2)}s`);
    const a = bot.animate(frames, {
      duration: Math.max(500, (len / speed) * 1000),
      easing: speed > 100 ? "linear" : "ease-in-out",
      fill: "forwards",
    });
    anim = a;
    if (paused) a.pause();
    a.onfinish = () => {
      if (stopped) return;
      s = s1;
      setPose();
      a.cancel();
      anim = null;
      if (idx + 1 < segs.length && Math.random() < 0.5) {
        // yolun ortasında qısa dayanma
        bot.dataset.act = "rest";
        later(() => {
          bot.dataset.act = "walk";
          run(segs, idx + 1);
        }, rand(300, 900));
      } else run(segs, idx + 1);
    };
  };

  bot.style.left = "0";
  bot.style.top = "0";
  setPose();
  bot.dataset.act = "rest";
  later(plan, rand(600, 1500));

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
      stop = mq.matches ? null : startWalker(bot, host);
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
