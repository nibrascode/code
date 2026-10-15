/* Nibras Planner — WebGL (three.js) photoreal house view.
   Lazy-loaded from mount.ts. Falls back to the CSS 3D view if anything fails. */
import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky.js";

export type Hole = {
  offset: number; // 0..1 centre along the wall
  width: number; // m
  height: number; // m
  kind: "door" | "window";
  entrance?: boolean;
};
export type HouseParams = {
  L: number;
  W: number;
  H: number;
  wallM: number;
  roof: string;
  skin: string;
  brickColor: string;
  stage: number;
  sky: string;
  walls: { N: Hole[]; S: Hole[]; E: Hole[]; W: Hole[] };
  rowFracs: number[];
  colFracs: number[];
};
export type HouseView = {
  canvas: HTMLCanvasElement;
  update: (p: HouseParams) => void;
  render: (rotX: number, rotY: number, zoom: number) => void;
  resize: () => void;
  dispose: () => void;
};

/* ---------- helpers ---------- */
const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const mkCanvas = (w: number, h = w) => {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
};
const hexRgb = (hex: string) => {
  const c = new THREE.Color(hex);
  return [c.r * 255, c.g * 255, c.b * 255];
};
const shade = (rgb: number[], k: number) =>
  `rgb(${Math.max(0, Math.min(255, rgb[0] * k)) | 0},${Math.max(0, Math.min(255, rgb[1] * k)) | 0},${Math.max(0, Math.min(255, rgb[2] * k)) | 0})`;
const grain = (c: HTMLCanvasElement, amt: number, seed: number) => {
  const ctx = c.getContext("2d")!;
  const img = ctx.getImageData(0, 0, c.width, c.height);
  const r = rng(seed);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amt;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
};
/** draw fn at 9 offsets so the result tiles seamlessly */
const wrapDraw = (c: HTMLCanvasElement, fn: (ox: number, oy: number) => void) => {
  for (const ox of [-c.width, 0, c.width]) for (const oy of [-c.height, 0, c.height]) fn(ox, oy);
};

type TexSet = { map: HTMLCanvasElement; bump: HTMLCanvasElement };

function brickLike(opt: {
  cols: number;
  rows: number;
  base: string;
  mortar: string;
  vary: number;
  seed: number;
  gap: number;
}): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const bw = S / opt.cols;
  const bh = S / opt.rows;
  a.fillStyle = opt.mortar;
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#303030";
  b.fillRect(0, 0, S, S);
  const rgb = hexRgb(opt.base);
  const rnd = rng(opt.seed);
  const cell: number[][] = [];
  for (let r = 0; r < opt.rows; r++) {
    cell[r] = [];
    for (let i = 0; i < opt.cols; i++) cell[r][i] = 1 + (rnd() - 0.5) * opt.vary;
  }
  for (let r = 0; r < opt.rows; r++) {
    const off = r % 2 ? bw / 2 : 0;
    for (let i = -1; i <= opt.cols; i++) {
      const k = cell[r][((i % opt.cols) + opt.cols) % opt.cols];
      const x = i * bw + off + opt.gap / 2;
      const y = r * bh + opt.gap / 2;
      const w = bw - opt.gap;
      const h = bh - opt.gap;
      const g = a.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, shade(rgb, k * 1.08));
      g.addColorStop(1, shade(rgb, k * 0.9));
      a.fillStyle = g;
      a.fillRect(x, y, w, h);
      b.fillStyle = `rgb(${190 + (k - 1) * 60},${190 + (k - 1) * 60},${190 + (k - 1) * 60})`;
      b.fillRect(x, y, w, h);
      // chipped corners / dark burn marks
      for (let n = 0; n < 4; n++) {
        a.fillStyle = `rgba(30,12,6,${rnd() * 0.18})`;
        a.fillRect(x + rnd() * w, y + rnd() * h, 2 + rnd() * 8, 1 + rnd() * 3);
      }
    }
  }
  grain(map, 22, opt.seed + 1);
  grain(bump, 60, opt.seed + 2);
  return { map, bump };
}

function plasterTex(base: string, seed: number): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const rgb = hexRgb(base);
  a.fillStyle = shade(rgb, 1);
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#808080";
  b.fillRect(0, 0, S, S);
  const r = rng(seed);
  for (let i = 0; i < 90; i++) {
    const x = r() * S;
    const y = r() * S;
    const rad = 30 + r() * 90;
    const k = 0.94 + r() * 0.12;
    wrapDraw(map, (ox, oy) => {
      const g = a.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, rad);
      g.addColorStop(0, shade(rgb, k).replace("rgb", "rgba").replace(")", ",0.35)"));
      g.addColorStop(1, shade(rgb, k).replace("rgb", "rgba").replace(")", ",0)"));
      a.fillStyle = g;
      a.fillRect(x + ox - rad, y + oy - rad, rad * 2, rad * 2);
    });
  }
  grain(map, 16, seed + 1);
  grain(bump, 90, seed + 2);
  return { map, bump };
}

function sidingTex(): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const rnd = rng(7);
  const n = 8;
  const h = S / n;
  for (let i = 0; i < n; i++) {
    const k = 0.92 + rnd() * 0.16;
    a.fillStyle = `rgb(${(214 * k) | 0},${(178 * k) | 0},${(128 * k) | 0})`;
    a.fillRect(0, i * h, S, h);
    for (let j = 0; j < 40; j++) {
      a.fillStyle = `rgba(90,55,20,${rnd() * 0.18})`;
      a.fillRect(rnd() * S, i * h + rnd() * h, 40 + rnd() * 200, 1 + rnd() * 1.5);
    }
    a.fillStyle = "rgba(40,22,8,.75)";
    a.fillRect(0, i * h, S, 3);
    b.fillStyle = "#c0c0c0";
    b.fillRect(0, i * h, S, h);
    b.fillStyle = "#101010";
    b.fillRect(0, i * h, S, 4);
  }
  grain(map, 14, 8);
  grain(bump, 30, 9);
  return { map, bump };
}

function roofTex(kind: "tile" | "shingle"): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const rnd = rng(kind === "tile" ? 21 : 33);
  const cols = kind === "tile" ? 8 : 10;
  const rows = kind === "tile" ? 8 : 16;
  const cw = S / cols;
  const rh = S / rows;
  const base = kind === "tile" ? [176, 74, 48] : [92, 98, 106];
  a.fillStyle = "#1c0c08";
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#000";
  b.fillRect(0, 0, S, S);
  for (let r = rows - 1; r >= -1; r--) {
    const off = kind === "shingle" && r % 2 ? cw / 2 : 0;
    for (let i = -1; i <= cols; i++) {
      const k = 0.82 + rnd() * 0.3;
      const x = i * cw + off;
      const y = r * rh;
      const w = cw - 1;
      const h = rh * (kind === "tile" ? 1.45 : 1.05);
      const gv = a.createLinearGradient(0, y, 0, y + h);
      gv.addColorStop(0, shade(base, k * 1.05));
      gv.addColorStop(0.7, shade(base, k * 0.95));
      gv.addColorStop(1, shade(base, k * 0.45));
      a.fillStyle = gv;
      a.fillRect(x, y, w, h);
      if (kind === "tile") {
        const gh = a.createLinearGradient(x, 0, x + w, 0);
        gh.addColorStop(0, "rgba(0,0,0,.4)");
        gh.addColorStop(0.35, "rgba(255,255,255,.14)");
        gh.addColorStop(0.65, "rgba(255,255,255,.04)");
        gh.addColorStop(1, "rgba(0,0,0,.45)");
        a.fillStyle = gh;
        a.fillRect(x, y, w, h);
        const bh2 = b.createLinearGradient(x, 0, x + w, 0);
        bh2.addColorStop(0, "#202020");
        bh2.addColorStop(0.5, "#f0f0f0");
        bh2.addColorStop(1, "#202020");
        b.fillStyle = bh2;
        b.fillRect(x, y, w, h);
      } else {
        b.fillStyle = `rgb(${150 + rnd() * 70},${150 + rnd() * 70},${150 + rnd() * 70})`;
        b.fillRect(x, y, w, h);
        a.fillStyle = "rgba(0,0,0,.35)";
        a.fillRect(x + w, y, 1.5, h);
      }
      for (let n = 0; n < 3; n++) {
        a.fillStyle = `rgba(${kind === "tile" ? "40,60,20" : "30,30,30"},${rnd() * 0.25})`;
        a.fillRect(x + rnd() * w, y + rnd() * h, 3 + rnd() * 14, 2 + rnd() * 5);
      }
    }
  }
  grain(map, 20, 5);
  grain(bump, 40, 6);
  return { map, bump };
}

function woodTex(seed: number, base: number[]): TexSet {
  const S = 256;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const r = rng(seed);
  a.fillStyle = shade(base, 1);
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#808080";
  b.fillRect(0, 0, S, S);
  for (let i = 0; i < 160; i++) {
    const x = r() * S;
    const w = 1 + r() * 3;
    a.fillStyle = `rgba(${r() > 0.5 ? "30,14,4" : "255,220,170"},${0.05 + r() * 0.16})`;
    a.fillRect(x, 0, w, S);
    b.fillStyle = `rgba(${r() > 0.5 ? "0,0,0" : "255,255,255"},${0.1 + r() * 0.25})`;
    b.fillRect(x, 0, w, S);
  }
  return { map, bump };
}

function parquetTex(): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const r = rng(77);
  const rows = 8;
  const h = S / rows;
  for (let i = 0; i < rows; i++) {
    let x = -r() * 200;
    while (x < S) {
      const w = 160 + r() * 140;
      const k = 0.85 + r() * 0.3;
      a.fillStyle = `rgb(${(176 * k) | 0},${(122 * k) | 0},${(72 * k) | 0})`;
      a.fillRect(x, i * h, w, h);
      for (let n = 0; n < 12; n++) {
        a.fillStyle = `rgba(70,38,14,${r() * 0.2})`;
        a.fillRect(x + r() * w, i * h + r() * h, 30 + r() * 80, 1);
      }
      a.fillStyle = "rgba(30,14,4,.8)";
      a.fillRect(x, i * h, 2, h);
      a.fillRect(x, i * h, w, 2);
      x += w;
    }
  }
  b.fillStyle = "#b0b0b0";
  b.fillRect(0, 0, S, S);
  grain(map, 10, 3);
  return { map, bump };
}

function concreteTex(base: string, seed: number): TexSet {
  const S = 256;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  a.fillStyle = base;
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#808080";
  b.fillRect(0, 0, S, S);
  grain(map, 38, seed);
  grain(bump, 120, seed + 1);
  return { map, bump };
}

function paverTex(): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const r = rng(55);
  a.fillStyle = "#6a655c";
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#202020";
  b.fillRect(0, 0, S, S);
  const n = 4;
  const s = S / n;
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      const k = 0.88 + r() * 0.22;
      a.fillStyle = `rgb(${(188 * k) | 0},${(178 * k) | 0},${(160 * k) | 0})`;
      a.fillRect(x * s + 3, y * s + 3, s - 6, s - 6);
      b.fillStyle = "#c8c8c8";
      b.fillRect(x * s + 3, y * s + 3, s - 6, s - 6);
    }
  grain(map, 34, 56);
  grain(bump, 70, 57);
  return { map, bump };
}

function grassTex(snow: boolean, night: boolean): TexSet {
  const S = 512;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const r = rng(99);
  a.fillStyle = snow ? "#e9eef3" : "#6a9444";
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#808080";
  b.fillRect(0, 0, S, S);
  if (snow) {
    for (let i = 0; i < 900; i++) {
      a.fillStyle = `rgba(${r() > 0.5 ? "255,255,255" : "190,205,225"},${0.1 + r() * 0.25})`;
      wrapDraw(map, (ox, oy) =>
        a.fillRect(
          r() * 0 + ((i * 53.3) % S) + ox,
          ((i * 91.7) % S) + oy,
          6 + r() * 12,
          4 + r() * 8,
        ),
      );
    }
  } else {
    for (let i = 0; i < 5200; i++) {
      const x = r() * S;
      const y = r() * S;
      const l = 5 + r() * 12;
      const hue = 80 + r() * 40;
      const lig = night ? 16 + r() * 10 : 18 + r() * 20;
      a.strokeStyle = `hsl(${hue},${45 + r() * 25}%,${lig}%)`;
      a.lineWidth = 1 + r() * 1.5;
      wrapDraw(map, (ox, oy) => {
        a.beginPath();
        a.moveTo(x + ox, y + oy);
        a.lineTo(x + ox + (r() - 0.5) * 6, y + oy - l);
        a.stroke();
      });
    }
  }
  grain(bump, 140, 100);
  return { map, bump };
}

function leafTex(): TexSet {
  const S = 256;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const r = rng(13);
  a.fillStyle = "#264f1c";
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#606060";
  b.fillRect(0, 0, S, S);
  for (let i = 0; i < 1400; i++) {
    const x = r() * S;
    const y = r() * S;
    const l = 6 + r() * 9;
    const ang = r() * Math.PI;
    const lig = 20 + r() * 26;
    a.fillStyle = `hsl(${85 + r() * 40},${45 + r() * 30}%,${lig}%)`;
    b.fillStyle = `rgb(${60 + r() * 190},0,0)`.replace(
      /rgb\((\d+),0,0\)/,
      (_m, v) => `rgb(${v},${v},${v})`,
    );
    wrapDraw(map, (ox, oy) => {
      a.save();
      a.translate(x + ox, y + oy);
      a.rotate(ang);
      a.beginPath();
      a.ellipse(0, 0, l, l * 0.45, 0, 0, 7);
      a.fill();
      a.restore();
    });
    wrapDraw(bump, (ox, oy) => {
      b.save();
      b.translate(x + ox, y + oy);
      b.rotate(ang);
      b.beginPath();
      b.ellipse(0, 0, l, l * 0.45, 0, 0, 7);
      b.fill();
      b.restore();
    });
  }
  return { map, bump };
}

function barkTex(): TexSet {
  const S = 256;
  const map = mkCanvas(S);
  const bump = mkCanvas(S);
  const a = map.getContext("2d")!;
  const b = bump.getContext("2d")!;
  const r = rng(17);
  a.fillStyle = "#5a4130";
  a.fillRect(0, 0, S, S);
  b.fillStyle = "#808080";
  b.fillRect(0, 0, S, S);
  for (let i = 0; i < 220; i++) {
    const x = r() * S;
    const w = 2 + r() * 6;
    a.fillStyle = `rgba(${r() > 0.5 ? "25,15,8" : "130,100,70"},${0.2 + r() * 0.4})`;
    a.fillRect(x, r() * S, w, 30 + r() * 120);
    b.fillStyle = `rgba(${r() > 0.5 ? "0,0,0" : "255,255,255"},0.5)`;
    b.fillRect(x, r() * S, w, 30 + r() * 120);
  }
  return { map, bump };
}

/* ---------- sky presets ---------- */
type SkyPreset = {
  elev: number;
  az: number;
  turb: number;
  rayleigh: number;
  mie: number;
  mieG: number;
  exposure: number;
  sun: number; // directional intensity
  sunColor: number;
  hemi: number;
  hemiSky: number;
  hemiGround: number;
  fog: number;
  fogDensity: number;
  env: number;
};
const SKY: Record<string, SkyPreset> = {
  day: {
    elev: 42,
    az: 125,
    turb: 2,
    rayleigh: 2.4,
    mie: 0.004,
    mieG: 0.8,
    exposure: 0.7,
    sun: 3.0,
    sunColor: 0xfff1de,
    hemi: 0.28,
    hemiSky: 0xbfd8f2,
    hemiGround: 0x5f6f45,
    fog: 0xc3d6e6,
    fogDensity: 0.0085,
    env: 0.2,
  },
  sun: {
    elev: 14,
    az: 118,
    turb: 4,
    rayleigh: 2.6,
    mie: 0.006,
    mieG: 0.86,
    exposure: 0.7,
    sun: 3.0,
    sunColor: 0xffc27a,
    hemi: 0.25,
    hemiSky: 0xf6cf9c,
    hemiGround: 0x5a5030,
    fog: 0xf0cf9f,
    fogDensity: 0.009,
    env: 0.15,
  },
  dusk: {
    elev: 9,
    az: 112,
    turb: 3,
    rayleigh: 4,
    mie: 0.01,
    mieG: 0.92,
    exposure: 0.6,
    sun: 2.4,
    sunColor: 0xffcaa0,
    hemi: 0.45,
    hemiSky: 0x8aa0d8,
    hemiGround: 0x3a3a30,
    fog: 0xc08a78,
    fogDensity: 0.008,
    env: 0.5,
  },
  night: {
    elev: -7,
    az: 125,
    turb: 1,
    rayleigh: 1.2,
    mie: 0.002,
    mieG: 0.8,
    exposure: 0.55,
    sun: 0.0,
    sunColor: 0x9db4ff,
    hemi: 0.32,
    hemiSky: 0x2c4270,
    hemiGround: 0x0c1410,
    fog: 0x182a4e,
    fogDensity: 0.0075,
    env: 0.25,
  },
  snow: {
    elev: 24,
    az: 125,
    turb: 14,
    rayleigh: 0.5,
    mie: 0.04,
    mieG: 0.6,
    exposure: 0.6,
    sun: 1.3,
    sunColor: 0xeaf2ff,
    hemi: 0.5,
    hemiSky: 0xdfe8f2,
    hemiGround: 0xcfd8e2,
    fog: 0xdfe6ee,
    fogDensity: 0.0075,
    env: 0.45,
  },
};

/* ---------- main ---------- */
export function createHouseView(host: HTMLElement): HouseView | null {
  let renderer: THREE.WebGLRenderer;
  const canvas = document.createElement("canvas");
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }
  if (!renderer.getContext()) return null;
  const mobile =
    /Android|iPhone|iPad|Mobi/i.test(navigator.userAgent) ||
    Math.min(screen.width, screen.height) < 600;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  canvas.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;border-radius:inherit;";
  host.insertBefore(canvas, host.firstChild);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 6000);
  const world = new THREE.Group();
  scene.add(world);

  const sky = new Sky();
  sky.scale.setScalar(3000);
  scene.add(sky);
  const stars = (() => {
    const g = new THREE.BufferGeometry();
    const n = 700;
    const p = new Float32Array(n * 3);
    const r = rng(4);
    for (let i = 0; i < n; i++) {
      const th = r() * Math.PI * 2;
      const ph = Math.acos(0.08 + r() * 0.92);
      p[i * 3] = 2500 * Math.sin(ph) * Math.cos(th);
      p[i * 3 + 1] = 2500 * Math.cos(ph);
      p[i * 3 + 2] = 2500 * Math.sin(ph) * Math.sin(th);
    }
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    const m = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.6,
      sizeAttenuation: false,
      fog: false,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const pts = new THREE.Points(g, m);
    pts.visible = false;
    scene.add(pts);
    return pts;
  })();
  const moon = new THREE.Mesh(
    new THREE.CircleGeometry(60, 32),
    new THREE.MeshBasicMaterial({ color: 0xf4f1e2, fog: false }),
  );
  moon.visible = false;
  scene.add(moon);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  const smap = mobile ? 1024 : 2048;
  sun.shadow.mapSize.set(smap, smap);
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  sun.shadow.radius = 3.5;
  scene.add(sun);
  scene.add(sun.target);

  const pmrem = new THREE.PMREMGenerator(renderer);
  let envRT: THREE.WebGLRenderTarget | null = null;
  let skyKey = "";

  const applySky = (id: string) => {
    if (skyKey === id) return;
    skyKey = id;
    const P = SKY[id] || SKY.day;
    const u = sky.material.uniforms;
    const dir = new THREE.Vector3().setFromSphericalCoords(
      1,
      THREE.MathUtils.degToRad(90 - P.elev),
      THREE.MathUtils.degToRad(P.az),
    );
    u.turbidity.value = P.turb;
    u.rayleigh.value = P.rayleigh;
    u.mieCoefficient.value = P.mie;
    u.mieDirectionalG.value = P.mieG;
    u.sunPosition.value.copy(dir);
    renderer.toneMappingExposure = P.exposure;
    if (envRT) envRT.dispose();
    const es = new THREE.Scene();
    const s2 = new Sky();
    s2.scale.setScalar(1000);
    Object.keys(u).forEach((k) => {
      s2.material.uniforms[k].value = u[k].value;
    });
    es.add(s2);
    envRT = pmrem.fromScene(es, 0.02);
    s2.geometry.dispose();
    s2.material.dispose();
    scene.environment = envRT.texture;
    scene.environmentIntensity = P.env;
    scene.fog = new THREE.FogExp2(P.fog, P.fogDensity);
    hemi.color.set(P.hemiSky);
    hemi.groundColor.set(P.hemiGround);
    hemi.intensity = P.hemi;
    const night = id === "night";
    if (night) {
      sun.color.set(P.sunColor);
      sun.intensity = 1.9;
      sun.position.copy(
        new THREE.Vector3().setFromSphericalCoords(
          80,
          THREE.MathUtils.degToRad(35),
          THREE.MathUtils.degToRad(215),
        ),
      );
      moon.position.copy(sun.position).normalize().multiplyScalar(2400);
      moon.lookAt(0, 0, 0);
    } else {
      sun.color.set(P.sunColor);
      sun.intensity = P.sun;
      sun.position.copy(dir).multiplyScalar(80);
    }
    sky.visible = !night;
    scene.background = night ? new THREE.Color(0x294a8c) : null;
    stars.visible = night;
    moon.visible = night;
  };

  /* textures & materials */
  const texCache = new Map<string, THREE.CanvasTexture>();
  const setCache = new Map<string, TexSet>();
  const getSet = (key: string, make: () => TexSet) => {
    let s = setCache.get(key);
    if (!s) {
      s = make();
      setCache.set(key, s);
    }
    return s;
  };
  const tex = (key: string, c: HTMLCanvasElement, srgb: boolean, rx: number, ry: number) => {
    const k = `${key}|${rx.toFixed(2)}|${ry.toFixed(2)}`;
    let t = texCache.get(k);
    if (!t) {
      t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.anisotropy = maxAniso;
      t.repeat.set(rx, ry);
      texCache.set(k, t);
    }
    return t;
  };
  const pbr = (
    key: string,
    make: () => TexSet,
    rx: number,
    ry: number,
    o: THREE.MeshStandardMaterialParameters & { bumpScale?: number } = {},
  ) => {
    const s = getSet(key, make);
    return new THREE.MeshStandardMaterial({
      map: tex(key + "m", s.map, true, rx, ry),
      bumpMap: tex(key + "b", s.bump, false, rx, ry),
      bumpScale: o.bumpScale ?? 1.2,
      roughness: 0.9,
      metalness: 0,
      ...o,
    });
  };
  const mats: THREE.Material[] = [];
  const reg = <T extends THREE.Material>(m: T) => {
    mats.push(m);
    return m;
  };
  const disposables: THREE.BufferGeometry[] = [];
  const geo = <T extends THREE.BufferGeometry>(g: T) => {
    disposables.push(g);
    return g;
  };
  const mesh = (
    g: THREE.BufferGeometry,
    m: THREE.Material,
    parent: THREE.Object3D,
    cast = true,
    recv = true,
  ) => {
    const x = new THREE.Mesh(geo(g), m);
    x.castShadow = cast;
    x.receiveShadow = recv;
    parent.add(x);
    return x;
  };

  const clearWorld = () => {
    world.clear();
    disposables.splice(0).forEach((g) => g.dispose());
    mats.splice(0).forEach((m) => m.dispose());
  };

  const box = (
    w: number,
    h: number,
    d: number,
    m: THREE.Material,
    x: number,
    y: number,
    z: number,
    parent: THREE.Object3D,
    cast = true,
  ) => {
    const b = mesh(new THREE.BoxGeometry(w, h, d), m, parent, cast);
    b.position.set(x, y, z);
    return b;
  };

  let anim = { snow: null as THREE.Points | null, t: 0, lights: [] as THREE.PointLight[] };
  const curCam = { dist: 20, target: new THREE.Vector3() };

  /* ---------- build house ---------- */
  const build = (p: HouseParams) => {
    clearWorld();
    anim = { snow: null, t: anim.t, lights: [] };
    const { L, W, H } = p;
    const night = p.sky === "night";
    const snow = p.sky === "snow";
    const t = Math.max(0.12, Math.min(0.5, p.wallM));
    const FH = 0.35; // foundation height
    const stage = p.stage;
    const finish = stage >= 4;
    const skin = p.skin;
    const rendered = (finish && skin !== "wood") || skin === "plaster";

    /* walls material */
    const wallMat = reg(
      rendered
        ? pbr("plaster", () => plasterTex("#e9dec8", 3), 1 / 2, 1 / 2, {
            bumpScale: 1.5,
            roughness: 0.95,
          })
        : skin === "wood"
          ? pbr("siding", sidingTex, 1, 1, { bumpScale: 2.2, roughness: 0.8 })
          : skin === "block"
            ? pbr(
                "block",
                () =>
                  brickLike({
                    cols: 3,
                    rows: 6,
                    base: "#b9b2a6",
                    mortar: "#8f8a80",
                    vary: 0.12,
                    seed: 11,
                    gap: 5,
                  }),
                1 / 1.2,
                1 / 1.2,
                { bumpScale: 2 },
              )
            : pbr(
                "brick" + p.brickColor,
                () =>
                  brickLike({
                    cols: 4,
                    rows: 14,
                    base: p.brickColor,
                    mortar: "#c9b79a",
                    vary: 0.28,
                    seed: 5,
                    gap: 5,
                  }),
                1 / 1.04,
                1 / 1.05,
                { bumpScale: 2.6 },
              ),
    );
    wallMat.side = THREE.DoubleSide;
    const concrete = reg(
      pbr("conc", () => concreteTex("#a8a59d", 31), 1 / 2, 1 / 2, { bumpScale: 1.5 }),
    );
    const white = reg(new THREE.MeshStandardMaterial({ color: 0xf2eee6, roughness: 0.55 }));
    const glassMat = reg(
      new THREE.MeshStandardMaterial({
        color: night ? 0xffd08a : 0x5e7f98,
        metalness: night ? 0 : 0.9,
        roughness: night ? 0.5 : 0.04,
        emissive: night ? 0xffa940 : 0x000000,
        emissiveIntensity: night ? 1.35 : 0,
        envMapIntensity: 1.6,
      }),
    );
    const brass = reg(
      new THREE.MeshStandardMaterial({ color: 0xd2a74a, metalness: 1, roughness: 0.3 }),
    );

    /* ground */
    const R = 900;
    const gs = getSet(snow ? "gs" : night ? "gn" : "g", () => grassTex(snow, night));
    const gm = reg(
      new THREE.MeshStandardMaterial({
        map: tex((snow ? "gs" : night ? "gn" : "g") + "m", gs.map, true, R / 9, R / 9),
        bumpMap: tex((snow ? "gs" : night ? "gn" : "g") + "b", gs.bump, false, R / 9, R / 9),
        bumpScale: 3,
        roughness: snow ? 0.7 : 1,
      }),
    );
    gm.map!.repeat.set(R / 9, R / 9);
    gm.bumpMap!.repeat.set(R / 9, R / 9);
    const ground = mesh(new THREE.CircleGeometry(R, 64), gm, world, false, true);
    ground.rotation.x = -Math.PI / 2;
    // a fine near-ground detail layer with a larger tile scale
    const gm2 = reg(
      new THREE.MeshStandardMaterial({
        map: tex((snow ? "gs" : night ? "gn" : "g") + "m", gs.map, true, 28, 28),
        bumpMap: tex((snow ? "gs" : night ? "gn" : "g") + "b", gs.bump, false, 28, 28),
        bumpScale: 3,
        roughness: 1,
        transparent: true,
        alphaMap: (() => {
          const c = mkCanvas(128);
          const x = c.getContext("2d")!;
          const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
          g.addColorStop(0, "#fff");
          g.addColorStop(0.55, "#fff");
          g.addColorStop(1, "#000");
          x.fillStyle = g;
          x.fillRect(0, 0, 128, 128);
          return new THREE.CanvasTexture(c);
        })(),
        depthWrite: false,
      }),
    );
    gm2.map = tex((snow ? "gs" : night ? "gn" : "g") + "m", gs.map, true, 28, 28);
    const near = mesh(new THREE.CircleGeometry(60, 48), gm2, world, false, true);
    near.rotation.x = -Math.PI / 2;
    near.position.y = 0.004;

    /* foundation */
    const fnd = box(L + 0.5, FH, W + 0.5, concrete, 0, FH / 2, 0, world);
    fnd.receiveShadow = true;
    const floorY = FH;

    const entrance = p.walls.S.find((h) => h.kind === "door");
    const doorX = entrance ? (entrance.offset - 0.5) * L : 0;

    /* wall builder */
    const addWall = (
      holes: Hole[],
      len: number,
      pos: THREE.Vector3,
      rotY: number,
      doorStep: boolean,
      outward: THREE.Vector3,
    ) => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(len, 0);
      shape.lineTo(len, H);
      shape.lineTo(0, H);
      shape.closePath();
      const rects: { x: number; y: number; w: number; h: number; hole: Hole }[] = [];
      for (const h of holes) {
        const w = Math.min(h.width, len - 0.6);
        const hh = Math.min(h.height, H - 0.35);
        let cx = h.offset * len;
        cx = Math.max(0.3 + w / 2, Math.min(len - 0.3 - w / 2, cx));
        const y =
          h.kind === "door" ? 0 : Math.max(0.35, Math.min(H - hh - 0.25, H - H * 0.22 - hh));
        rects.push({ x: cx - w / 2, y, w, h: hh, hole: h });
      }
      for (const r of rects) {
        const hp = new THREE.Path();
        hp.moveTo(r.x, r.y);
        hp.lineTo(r.x, r.y + r.h);
        hp.lineTo(r.x + r.w, r.y + r.h);
        hp.lineTo(r.x + r.w, r.y);
        hp.closePath();
        shape.holes.push(hp);
      }
      const wall = mesh(
        new THREE.ExtrudeGeometry(shape, { depth: t, bevelEnabled: false }),
        wallMat,
        world,
      );
      wall.position.copy(pos);
      wall.rotation.y = rotY;
      const grp = new THREE.Group();
      grp.position.copy(pos);
      grp.rotation.y = rotY;
      world.add(grp);
      // everything inside grp is in wall-local coords (x along wall, y up, z through thickness)
      for (const r of rects) {
        const cx = r.x + r.w / 2;
        const cy = r.y + r.h / 2;
        const zc = t * 0.5;
        if (r.hole.kind === "window") {
          const fw = 0.065;
          // frame
          box(r.w + 0.0, fw, 0.1, white, cx, r.y + r.h - fw / 2, zc, grp);
          box(r.w, fw, 0.1, white, cx, r.y + fw / 2, zc, grp);
          box(fw, r.h, 0.1, white, r.x + fw / 2, cy, zc, grp);
          box(fw, r.h, 0.1, white, r.x + r.w - fw / 2, cy, zc, grp);
          if (r.w > 0.9) box(0.045, r.h - fw, 0.09, white, cx, cy, zc, grp);
          box(r.w - fw, 0.04, 0.09, white, cx, r.y + r.h * 0.5, zc, grp);
          const glass = mesh(
            new THREE.BoxGeometry(r.w - fw * 1.6, r.h - fw * 1.6, 0.025),
            glassMat,
            grp,
            false,
            false,
          );
          glass.position.set(cx, cy, zc);
          // sill (outside = local z<0 ... outside faces -z in wall-local for this construction)
          const sill = box(r.w + 0.22, 0.05, 0.17, white, cx, r.y - 0.025, -0.04, grp);
          sill.castShadow = true;
          // lintel
          box(r.w + 0.2, 0.09, 0.08, concrete, cx, r.y + r.h + 0.045, -0.015, grp);
          if (night) {
            const l = new THREE.PointLight(0xffb060, 5, 7, 1.6);
            const wp = new THREE.Vector3(cx, cy, t + 0.5)
              .applyEuler(new THREE.Euler(0, rotY, 0))
              .add(pos);
            l.position.copy(wp);
            world.add(l);
            anim.lights.push(l);
          }
        } else {
          const ent = r.hole.entrance;
          const dm = reg(
            pbr(
              ent ? "door1" : "door2",
              () => woodTex(ent ? 41 : 42, ent ? [104, 60, 32] : [128, 84, 50]),
              1,
              1,
              { bumpScale: 2, roughness: 0.5 },
            ),
          );
          const dw = r.w - 0.14;
          const dh = r.h - 0.07;
          box(dw, dh, 0.05, dm, cx, r.y + dh / 2, zc, grp);
          const pm = reg(
            new THREE.MeshStandardMaterial({ color: ent ? 0x3d2210 : 0x553520, roughness: 0.55 }),
          );
          for (const [px, py] of [
            [-0.23, 0.74],
            [0.23, 0.74],
            [-0.23, 0.26],
            [0.23, 0.26],
          ] as const) {
            box(dw * 0.38, dh * 0.34, 0.02, pm, cx + px * dw, r.y + py * dh, zc - 0.03, grp, false);
          }
          // frame
          box(0.07, dh + 0.07, 0.12, white, r.x + 0.035, r.y + (dh + 0.07) / 2, zc, grp);
          box(0.07, dh + 0.07, 0.12, white, r.x + r.w - 0.035, r.y + (dh + 0.07) / 2, zc, grp);
          box(r.w, 0.07, 0.12, white, cx, r.y + dh + 0.035, zc, grp);
          // handle
          const hdl = mesh(
            new THREE.CylinderGeometry(0.018, 0.018, 0.14, 12),
            brass,
            grp,
            false,
            false,
          );
          hdl.rotation.z = Math.PI / 2;
          hdl.position.set(cx + dw * 0.36, r.y + dh * 0.48, zc - 0.07);
          const knob = mesh(new THREE.SphereGeometry(0.035, 12, 8), brass, grp, false, false);
          knob.position.set(cx + dw * 0.36 - 0.07, r.y + dh * 0.48, zc - 0.075);
          if (doorStep) {
            // two-tier stoop on the outside of the foundation
            const wx = r.w + 0.5;
            const s1 = box(wx, 0.17, 0.55, concrete, cx, -FH + 0.085, -(0.25 + 0.275), grp);
            s1.receiveShadow = true;
            if (ent && night) {
              const lamp = mesh(
                new THREE.SphereGeometry(0.06, 12, 8),
                reg(
                  new THREE.MeshStandardMaterial({
                    color: 0xffe2a8,
                    emissive: 0xffc070,
                    emissiveIntensity: 3,
                  }),
                ),
                grp,
                false,
                false,
              );
              lamp.position.set(cx + r.w / 2 + 0.35, r.y + dh + 0.1, -0.12);
              const pl = new THREE.PointLight(0xffc880, 9, 10, 1.5);
              pl.position.copy(
                new THREE.Vector3(cx + r.w / 2 + 0.35, r.y + dh + 0.1, -0.35)
                  .applyEuler(new THREE.Euler(0, rotY, 0))
                  .add(pos),
              );
              world.add(pl);
              anim.lights.push(pl);
            }
          }
        }
      }
      // the group's own wall mesh and the group share a transform; wall mesh is added at the world root
      void outward;
      return grp;
    };
    /* wall-local frame: extrude goes +z (inside). Outside is -z. */
    if (stage >= 2) {
      const yb = floorY;
      // S (front, z=-W/2): outside = -z, local x -> +x
      addWall(
        p.walls.S,
        L,
        new THREE.Vector3(-L / 2, yb, -W / 2),
        0,
        true,
        new THREE.Vector3(0, 0, -1),
      );
      // N (back, z=+W/2): outside = +z; rotate by PI, extrude toward -z
      addWall(
        p.walls.N,
        L,
        new THREE.Vector3(L / 2, yb, W / 2),
        Math.PI,
        true,
        new THREE.Vector3(0, 0, 1),
      );
      // E (x=+L/2): outside +x; local x -> +z, extrude -x  => rotY = -PI/2 ... local z(+) -> world -x
      addWall(
        p.walls.E,
        W - 2 * t,
        new THREE.Vector3(L / 2, yb, -(W / 2 - t)),
        -Math.PI / 2,
        true,
        new THREE.Vector3(1, 0, 0),
      );
      addWall(
        p.walls.W,
        W - 2 * t,
        new THREE.Vector3(-L / 2, yb, W / 2 - t),
        Math.PI / 2,
        true,
        new THREE.Vector3(-1, 0, 0),
      );
    }

    /* floor + interior */
    if (stage >= 3) {
      const fl = reg(
        stage >= 4
          ? pbr("parq", parquetTex, (L - 2 * t) / 2, (W - 2 * t) / 2, {
              roughness: 0.45,
              bumpScale: 0.6,
            })
          : pbr("scr", () => concreteTex("#bdb8ad", 71), (L - 2 * t) / 2, (W - 2 * t) / 2, {
              bumpScale: 1,
            }),
      );
      const floor = mesh(new THREE.PlaneGeometry(L - 2 * t, W - 2 * t), fl, world, false, true);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = floorY + 0.01;
    } else if (stage >= 2) {
      const fl = reg(pbr("scr", () => concreteTex("#bdb8ad", 71), L / 2, W / 2));
      const floor = mesh(new THREE.PlaneGeometry(L - 2 * t, W - 2 * t), fl, world, false, true);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = floorY + 0.01;
    }
    if (stage >= 3) {
      const ih = stage === 3 ? Math.max(0.6, H * 0.55) : H;
      const pt = Math.max(0.1, t * 0.5);
      const partMat = (len: number) =>
        reg(
          stage >= 4
            ? pbr("plasterIn", () => plasterTex("#f1e9da", 8), len / 2, ih / 2)
            : pbr(
                "brickIn",
                () =>
                  brickLike({
                    cols: 4,
                    rows: 14,
                    base: "#b9b2a6",
                    mortar: "#8f8a80",
                    vary: 0.2,
                    seed: 15,
                    gap: 5,
                  }),
                len / 1.04,
                ih / 1.05,
              ),
        );
      for (let j = 1; j < p.rowFracs.length - 1; j++) {
        const z = p.rowFracs[j] * W - W / 2;
        box(L - 2 * t, ih, pt, partMat(L - 2 * t), 0, floorY + ih / 2, z, world);
      }
      for (const cf of p.colFracs) {
        const x = cf * L - L / 2;
        box(pt, ih, W - 2 * t, partMat(W - 2 * t), x, floorY + ih / 2, 0, world);
      }
    }

    /* roof */
    let rise = 0;
    const topY = floorY + H;
    if (stage >= 5) {
      const o = 0.35; // gable overhang
      if (p.roof === "flat") {
        const slab = box(L + 0.4, 0.22, W + 0.4, concrete, 0, topY + 0.11, 0, world);
        slab.receiveShadow = true;
        const par = 0.55;
        const pw = 0.2;
        box(L + 0.4, par, pw, concrete, 0, topY + 0.22 + par / 2, -(W + 0.4) / 2 + pw / 2, world);
        box(L + 0.4, par, pw, concrete, 0, topY + 0.22 + par / 2, (W + 0.4) / 2 - pw / 2, world);
        box(
          pw,
          par,
          W + 0.4 - 2 * pw,
          concrete,
          -(L + 0.4) / 2 + pw / 2,
          topY + 0.22 + par / 2,
          0,
          world,
        );
        box(
          pw,
          par,
          W + 0.4 - 2 * pw,
          concrete,
          (L + 0.4) / 2 - pw / 2,
          topY + 0.22 + par / 2,
          0,
          world,
        );
        box(
          L + 0.4 - 2 * pw,
          0.02,
          W + 0.4 - 2 * pw,
          reg(
            new THREE.MeshStandardMaterial({ color: snow ? 0xf4f7fb : 0x4a4a4a, roughness: 0.9 }),
          ),
          0,
          topY + 0.23,
          0,
          world,
          false,
        );
        rise = 0.8;
      } else {
        const k =
          p.roof === "steep" ? 0.55 : p.roof === "low" ? 0.16 : p.roof === "shingle" ? 0.28 : 0.34;
        rise = Math.max(0.8, W * k);
        const hw = W / 2;
        const eave = 0.55;
        const r = hw + eave;
        const phi = Math.atan2(rise, r);
        const thick = 0.12;
        const cosP = Math.cos(phi);
        const yb = topY + 0.02 + thick / 2 / cosP - rise * (1 - hw / r);
        const s = Math.hypot(r, rise);
        const kind = p.roof === "shingle" ? "shingle" : "tile";
        const slabLen = L + 2 * o;
        const roofMat = reg(
          pbr(kind, () => roofTex(kind), slabLen / 1.0, s / 1.0, {
            bumpScale: 1.2,
            roughness: 0.78,
          }),
        );
        for (const sgn of [-1, 1]) {
          const slab = mesh(new THREE.BoxGeometry(slabLen, thick, s), roofMat, world);
          slab.position.set(0, yb + rise / 2, (sgn * r) / 2);
          slab.rotation.x = sgn < 0 ? -phi : phi;
          if (snow) {
            const sm = reg(new THREE.MeshStandardMaterial({ color: 0xf6f9fc, roughness: 0.95 }));
            const cap = mesh(
              new THREE.BoxGeometry(slabLen - 0.35, 0.09, s - 0.28),
              sm,
              world,
              true,
              true,
            );
            const n = new THREE.Vector3(0, 1, 0).applyAxisAngle(
              new THREE.Vector3(1, 0, 0),
              slab.rotation.x,
            );
            cap.position.copy(slab.position).addScaledVector(n, thick / 2 + 0.035);
            cap.rotation.x = slab.rotation.x;
          }
          // eave fascia
          const fa = box(slabLen, 0.2, 0.035, white, 0, yb - 0.04, sgn * (r + 0.01), world);
          fa.rotation.x = 0;
          const gut = mesh(
            new THREE.CylinderGeometry(0.045, 0.045, slabLen - 0.1, 10, 1, false, 0, Math.PI),
            reg(
              new THREE.MeshStandardMaterial({ color: 0x5a5e63, metalness: 0.6, roughness: 0.4 }),
            ),
            world,
            true,
            false,
          );
          gut.rotation.set(0, 0, Math.PI / 2);
          gut.rotation.order = "ZXY";
          gut.position.set(0, yb - 0.17, sgn * (r + 0.07));
          // rake boards along gable edges
          for (const ex of [-1, 1]) {
            const rb = mesh(new THREE.BoxGeometry(0.045, thick + 0.1, s + 0.02), white, world);
            rb.position.set(ex * (slabLen / 2 + 0.0), yb + rise / 2, (sgn * r) / 2);
            rb.rotation.x = slab.rotation.x;
          }
        }
        // ridge cap
        const ridge = mesh(
          new THREE.BoxGeometry(slabLen + 0.02, 0.16, 0.16),
          reg(
            snow
              ? new THREE.MeshStandardMaterial({ color: 0xf0f4f8, roughness: 0.9 })
              : new THREE.MeshStandardMaterial({
                  color: kind === "tile" ? 0x7f3424 : 0x4e545c,
                  roughness: 0.75,
                }),
          ),
          world,
        );
        ridge.position.set(0, yb + rise + 0.02, 0);
        ridge.rotation.x = Math.PI / 4;
        // gable triangles, inside the roof volume
        const yu = (z: number) => yb - thick / 2 / cosP + rise * (1 - Math.abs(z) / r);
        const tri = new THREE.Shape();
        tri.moveTo(-hw, 0);
        tri.lineTo(hw, 0);
        tri.lineTo(hw, yu(hw) - topY + 0.04);
        tri.lineTo(0, yu(0) - topY + 0.04);
        tri.lineTo(-hw, yu(hw) - topY + 0.04);
        tri.closePath();
        const gMat = reg(
          skin === "wood"
            ? pbr("siding", sidingTex, 1, 1, { bumpScale: 2.2 })
            : rendered
              ? pbr("plaster", () => plasterTex("#e9dec8", 3), 1 / 2, 1 / 2)
              : pbr(
                  "brick" + p.brickColor,
                  () =>
                    brickLike({
                      cols: 4,
                      rows: 14,
                      base: p.brickColor,
                      mortar: "#c9b79a",
                      vary: 0.28,
                      seed: 5,
                      gap: 5,
                    }),
                  1 / 1.04,
                  1 / 1.05,
                  { bumpScale: 2.6 },
                ),
        );
        gMat.side = THREE.DoubleSide;
        for (const ex of [-1, 1]) {
          const g = mesh(
            new THREE.ExtrudeGeometry(tri, { depth: t, bevelEnabled: false }),
            gMat,
            world,
          );
          g.rotation.y = ex < 0 ? Math.PI / 2 : -Math.PI / 2;
          g.position.set(ex * (L / 2), topY, 0);
        }
        // chimney
        if (p.roof === "tile" || p.roof === "steep") {
          const cw = 0.62;
          const cx = L * 0.2;
          const cz = hw * 0.4;
          const cBase = topY - 0.2;
          const cTop = yb + rise + 0.95;
          const cm = reg(
            pbr(
              "brick#8a3a28",
              () =>
                brickLike({
                  cols: 4,
                  rows: 14,
                  base: "#8a3a28",
                  mortar: "#bba98d",
                  vary: 0.3,
                  seed: 25,
                  gap: 5,
                }),
              0.62 / 1.04,
              (cTop - cBase) / 1.05,
              { bumpScale: 2.6 },
            ),
          );
          box(cw, cTop - cBase, cw, cm, cx, (cBase + cTop) / 2, cz, world);
          box(cw + 0.16, 0.08, cw + 0.16, concrete, cx, cTop + 0.04, cz, world);
          box(
            cw * 0.55,
            0.05,
            cw * 0.55,
            reg(new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 1 })),
            cx,
            cTop + 0.085,
            cz,
            world,
            false,
          );
        }
      }
    }

    /* path + step apron */
    const pv = reg(pbr("paver", paverTex, 1.8 / 1, 7 / 1, { bumpScale: 2 }));
    const pw = 1.5;
    const plen = 7;
    const path = mesh(new THREE.PlaneGeometry(pw, plen), pv, world, false, true);
    path.rotation.x = -Math.PI / 2;
    path.position.set(doorX, 0.012, -(W / 2 + 0.25 + 0.55 + plen / 2));

    /* vegetation */
    const leaf = getSet("leaf", leafTex);
    const bark = getSet("bark", barkTex);
    const leafMat = (tint: number) =>
      reg(
        new THREE.MeshStandardMaterial({
          map: tex("leafm", leaf.map, true, 3, 3),
          bumpMap: tex("leafb", leaf.bump, false, 3, 3),
          bumpScale: 3,
          roughness: 0.85,
          color: snow ? 0x8fa58a : tint,
        }),
      );
    const barkMat = reg(
      new THREE.MeshStandardMaterial({
        map: tex("barkm", bark.map, true, 1, 3),
        bumpMap: tex("barkb", bark.bump, false, 1, 3),
        bumpScale: 3,
        roughness: 1,
      }),
    );
    const blob = (
      rad: number,
      seed: number,
      mat: THREE.Material,
      x: number,
      y: number,
      z: number,
    ) => {
      const g = new THREE.IcosahedronGeometry(rad, 4);
      const pos = g.attributes.position;
      const r = rng(seed);
      const f1 = r() * 6;
      const f2 = r() * 6;
      const v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const n = Math.sin(v.x * 2.1 + f1) * Math.cos(v.y * 2.3 + f2) * Math.sin(v.z * 2 + f1);
        v.multiplyScalar(1 + n * 0.16 + (r() - 0.5) * 0.05);
        pos.setXYZ(i, v.x, v.y, v.z);
      }
      g.computeVertexNormals();
      // uv from spherical coords for leaf texture
      const uv = new Float32Array(pos.count * 2);
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).normalize();
        uv[i * 2] = Math.atan2(v.z, v.x) / (Math.PI * 2) + 0.5;
        uv[i * 2 + 1] = v.y * 0.5 + 0.5;
      }
      g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
      const m = mesh(g, mat, world);
      m.position.set(x, y, z);
      return m;
    };
    const tree = (x: number, z: number, h: number, seed: number) => {
      const trunk = mesh(
        new THREE.CylinderGeometry(h * 0.025, h * 0.045, h * 0.5, 10),
        barkMat,
        world,
      );
      trunk.position.set(x, h * 0.25, z);
      const r = rng(seed);
      const lm = leafMat(0xe4f0cf);
      const cr = h * 0.3;
      blob(cr, seed, lm, x, h * 0.76, z);
      for (let i = 0; i < 6; i++) {
        const a = r() * Math.PI * 2;
        const d = cr * (0.5 + r() * 0.4);
        blob(
          cr * (0.55 + r() * 0.25),
          seed + i + 1,
          lm,
          x + Math.cos(a) * d,
          h * (0.58 + r() * 0.3),
          z + Math.sin(a) * d,
        );
      }
    };
    const shrub = (x: number, z: number, s: number, seed: number) => {
      const lm = leafMat(0xa8cf86);
      blob(s, seed, lm, x, s * 0.7, z);
      blob(s * 0.7, seed + 1, lm, x + s * 0.7, s * 0.5, z + s * 0.2);
      blob(s * 0.6, seed + 2, lm, x - s * 0.7, s * 0.45, z - s * 0.1);
    };
    const m = Math.max(L, W);
    tree(-(L / 2 + 5.5), W * 0.35, 6 + m * 0.05, 100);
    tree(L / 2 + 8, W * 0.9, 7 + m * 0.05, 200);
    tree(-L * 0.2, W / 2 + 8, 7.6 + m * 0.05, 300);
    tree(-(L / 2 + 10), -W / 2 - 7, 6.4, 400);
    if (stage >= 2) {
      const fz = -(W / 2 + 0.25 + 0.55);
      shrub(doorX - 2.3, fz + 0.1, 0.5, 500);
      shrub(doorX + 2.3, fz + 0.1, 0.55, 510);
      shrub(-L / 2 + 0.8, fz + 0.1, 0.5, 520);
      shrub(L / 2 - 0.8, fz + 0.1, 0.5, 530);
    }

    /* grass blades */
    if (!snow) {
      const count = mobile ? 2500 : 6000;
      const bg = new THREE.ConeGeometry(0.016, 0.2, 3, 1);
      bg.translate(0, 0.1, 0);
      const bm = reg(
        new THREE.MeshStandardMaterial({ roughness: 0.9, color: night ? 0x3b5a3a : 0xffffff }),
      );
      const inst = new THREE.InstancedMesh(geo(bg), bm, count);
      const r = rng(900);
      const dummy = new THREE.Object3D();
      const col = new THREE.Color();
      let n = 0;
      for (let i = 0; i < count * 3 && n < count; i++) {
        const ang = r() * Math.PI * 2;
        const rad = 0.2 + Math.pow(r(), 0.7) * 15;
        const x = Math.cos(ang) * rad * 1.3;
        const z = Math.sin(ang) * rad;
        if (Math.abs(x) < L / 2 + 0.9 && Math.abs(z) < W / 2 + 0.9) continue;
        if (Math.abs(x - doorX) < 1 && z < 0) continue;
        dummy.position.set(x, 0, z);
        dummy.rotation.set((r() - 0.5) * 0.5, r() * 6, (r() - 0.5) * 0.5);
        const sc = 0.6 + r() * 1.3;
        dummy.scale.set(1, sc, 1);
        dummy.updateMatrix();
        inst.setMatrixAt(n, dummy.matrix);
        col.setHSL(0.22 + r() * 0.08, 0.5 + r() * 0.2, (night ? 0.1 : 0.1) + r() * 0.14);
        inst.setColorAt(n, col);
        n++;
      }
      inst.count = n;
      inst.castShadow = false;
      inst.receiveShadow = true;
      world.add(inst);
    }

    /* snowfall */
    if (snow) {
      const n = mobile ? 900 : 2200;
      const g = new THREE.BufferGeometry();
      const a = new Float32Array(n * 3);
      const r = rng(77);
      for (let i = 0; i < n; i++) {
        a[i * 3] = (r() - 0.5) * 40;
        a[i * 3 + 1] = r() * 18;
        a[i * 3 + 2] = (r() - 0.5) * 40;
      }
      g.setAttribute("position", new THREE.BufferAttribute(a, 3));
      const pm = reg(
        new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.09,
          transparent: true,
          opacity: 0.9,
          depthWrite: false,
        }),
      );
      const pts = new THREE.Points(geo(g), pm);
      world.add(pts);
      anim.snow = pts;
    }

    /* shadow frustum + camera framing */
    const ext = Math.max(L, W) * 0.9 + 6;
    const sc = sun.shadow.camera;
    sc.left = -ext;
    sc.right = ext;
    sc.top = ext;
    sc.bottom = -ext;
    sc.near = 1;
    sc.far = 260;
    sc.updateProjectionMatrix();
    sun.target.position.set(0, 1, 0);
    const totalH = H + (stage >= 5 ? rise : 0) + FH;
    curCam.target.set(0, totalH * 0.95, 0);
    curCam.dist = Math.max(L, W) * 1.5 + totalH * 2.2 + 7;
  };

  let lastP: HouseParams | null = null;
  const update = (p: HouseParams) => {
    lastP = p;
    applySky(p.sky);
    build(p);
  };

  const size = { w: 0, h: 0 };
  const resize = () => {
    const w = host.clientWidth || 600;
    const h = host.clientHeight || 400;
    if (w === size.w && h === size.h) return;
    size.w = w;
    size.h = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w < h ? 44 : 32;
    camera.updateProjectionMatrix();
  };

  const render = (rotX: number, rotY: number, zoom: number) => {
    if (!lastP) return;
    resize();
    anim.t += 0.016;
    const th = THREE.MathUtils.degToRad(rotY);
    const el = THREE.MathUtils.degToRad(
      Math.max(3, Math.min(88, -rotX < 30 ? 3 + -rotX * 0.5 : 18 + (-rotX - 30) * 1.55)),
    );
    const d = curCam.dist / Math.max(0.3, zoom);
    camera.position.set(
      curCam.target.x - d * Math.cos(el) * Math.sin(th),
      Math.max(0.4, curCam.target.y + d * Math.sin(el)),
      curCam.target.z + d * Math.cos(el) * Math.cos(th),
    );
    camera.lookAt(curCam.target);
    if (anim.snow) {
      const a = anim.snow.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < a.count; i++) {
        let y = a.getY(i) - 0.02;
        if (y < 0) y += 18;
        a.setY(i, y);
        a.setX(i, a.getX(i) + Math.sin(anim.t + i) * 0.004);
      }
      a.needsUpdate = true;
    }
    renderer.render(scene, camera);
  };

  const dispose = () => {
    clearWorld();
    texCache.forEach((t) => t.dispose());
    texCache.clear();
    envRT?.dispose();
    pmrem.dispose();
    renderer.dispose();
    canvas.remove();
  };

  return { canvas, update, render, resize, dispose };
}
