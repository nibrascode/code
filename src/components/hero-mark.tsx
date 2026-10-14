import { useEffect, useRef } from "react";

const FACES: [string, number, string][] = [
  ["N", 190, ""],
  ["AI", 300, "rotateY(180deg)"],
  ["</>", 215, "rotateY(90deg)"],
  ["PDF", 335, "rotateY(-90deg)"],
  ["{ }", 160, "rotateX(90deg)"],
  ["✦", 250, "rotateX(-90deg)"],
];

export function HeroMark() {
  const stage = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const world = useRef<HTMLDivElement>(null);
  const dust = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stageEl = stage.current;
    const sceneEl = scene.current;
    const worldEl = world.current;
    const dustEl = dust.current;
    if (!stageEl || !sceneEl || !worldEl || !dustEl) return;

    worldEl.replaceChildren();
    dustEl.replaceChildren();

    const el = (cls: string, parent: HTMLElement) => {
      const node = document.createElement("div");
      node.className = cls;
      parent.appendChild(node);
      return node;
    };
    const cube = (cls: string, withText: boolean) => {
      const node = el("nx-5d-cube " + cls, worldEl);
      for (const [text, hue, rot] of FACES) {
        const face = document.createElement("div");
        face.className = "nx-5d-face";
        face.style.cssText =
          "--h:" + hue + ";transform:" + rot + " translateZ(calc(var(--s) / 2 + var(--g)))";
        if (withText) face.textContent = text;
        node.appendChild(face);
      }
    };
    cube("nx-5d-core", false);
    cube("nx-5d-shell", true);

    (
      [
        ["rotateX(72deg)", 10, 190, false],
        ["rotateY(72deg) rotateZ(38deg)", 13, 300, true],
        ["rotateX(-34deg) rotateY(58deg)", 16, 160, false],
      ] as const
    ).forEach(([transform, duration, hue, reverse]) => {
      const orb = el("nx-5d-orb", worldEl);
      orb.style.transform = transform;
      const ring = el("nx-5d-ring", orb);
      ring.style.cssText =
        "--h:" + hue + ";animation-duration:" + duration + "s" + (reverse ? ";animation-direction:reverse" : "");
    });

    for (let i = 0; i < 46; i++) {
      const u = Math.random() * 2 - 1;
      const a = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      const r = 1.35 + Math.random() * 0.6;
      const p = el("nx-5d-p", dustEl);
      p.style.cssText =
        "--h:" +
        [190, 215, 270, 300, 160][i % 5] +
        ";--z:" +
        (2 + Math.random() * 3).toFixed(1) +
        "px;animation-delay:-" +
        (Math.random() * 3).toFixed(2) +
        "s;transform:translate3d(calc(var(--S) * " +
        (r * s * Math.cos(a)).toFixed(3) +
        "),calc(var(--S) * " +
        (r * s * Math.sin(a)).toFixed(3) +
        "),calc(var(--S) * " +
        (r * u).toFixed(3) +
        "))";
    }

    const mul = (a: number[], b: number[]) => {
      const out: number[] = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          out[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j];
        }
      }
      return out;
    };
    const inc = (x: number, y: number) => {
      const cx = Math.cos(x);
      const sx = Math.sin(x);
      const cy = Math.cos(y);
      const sy = Math.sin(y);
      return mul([1, 0, 0, 0, cx, -sx, 0, sx, cx], [cy, 0, sy, 0, 1, 0, -sy, 0, cy]);
    };
    const css = (m: number[]) =>
      "matrix3d(" + [m[0], m[3], m[6], 0, m[1], m[4], m[7], 0, m[2], m[5], m[8], 0, 0, 0, 0, 1].join(",") + ")";

    let R = inc(-0.45, 0.65);
    let P = inc(0.3, -0.2);
    const fit = () => sceneEl.style.setProperty("--S", stageEl.clientWidth * 0.27 + "px");
    fit();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clamp = (v: number) => Math.max(-0.4, Math.min(0.4, v));
    let down = 0;
    let over = 0;
    let lx = 0;
    let ly = 0;
    let mv = 0;
    let pdx = 0;
    let pdy = 0;
    let vx = 0;
    let vy = 0;
    let frame = 0;

    const onEnter = (event: PointerEvent) => {
      over = 1;
      lx = event.clientX;
      ly = event.clientY;
      stageEl.classList.add("hot");
    };
    const onLeave = () => {
      over = 0;
      down = 0;
      stageEl.classList.remove("hot");
    };
    const onDown = (event: PointerEvent) => {
      down = 1;
      mv = 0;
      lx = event.clientX;
      ly = event.clientY;
      try {
        stageEl.setPointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
      stageEl.classList.add("hot");
    };
    const onUp = () => {
      down = 0;
      if (mv < 6) {
        vx = (Math.random() - 0.5) * 0.7;
        vy = (Math.random() - 0.5) * 0.7 + 0.25;
      }
    };
    const onMove = (event: PointerEvent) => {
      const box = stageEl.getBoundingClientRect();
      stageEl.style.setProperty("--mx", ((event.clientX - box.left) / box.width) * 100 + "%");
      stageEl.style.setProperty("--my", ((event.clientY - box.top) / box.height) * 100 + "%");
      const dx = event.clientX - lx;
      const dy = event.clientY - ly;
      lx = event.clientX;
      ly = event.clientY;
      pdx += dx;
      pdy += dy;
      if (down) mv += Math.abs(dx) + Math.abs(dy);
    };
    const tick = () => {
      if (pdx || pdy) {
        const k = down ? 0.011 : 0.0065;
        vy = clamp(pdx * k);
        vx = clamp(-pdy * k);
        pdx = 0;
        pdy = 0;
      }
      const ax = vx + (over || reduced ? 0 : 0.0012);
      const ay = vy + (over || reduced ? 0 : 0.0036);
      R = mul(inc(ax, ay), R);
      P = mul(inc(ax * 0.4, ay * 0.4), P);
      vx *= 0.93;
      vy *= 0.93;
      worldEl.style.transform = css(R);
      dustEl.style.transform = css(P);
      frame = requestAnimationFrame(tick);
    };

    stageEl.addEventListener("pointerenter", onEnter);
    stageEl.addEventListener("pointerleave", onLeave);
    stageEl.addEventListener("pointerdown", onDown);
    stageEl.addEventListener("pointerup", onUp);
    stageEl.addEventListener("pointermove", onMove);
    window.addEventListener("resize", fit);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      stageEl.removeEventListener("pointerenter", onEnter);
      stageEl.removeEventListener("pointerleave", onLeave);
      stageEl.removeEventListener("pointerdown", onDown);
      stageEl.removeEventListener("pointerup", onUp);
      stageEl.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <div className="nx-5d" ref={stage} role="img" aria-label="Nibras">
      <div className="nx-5d-floor" />
      <div className="nx-5d-scene" ref={scene}>
        <div className="nx-5d-dust" ref={dust} />
        <div className="nx-5d-world" ref={world} />
      </div>
    </div>
  );
}
