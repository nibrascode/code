type GapKind = "door" | "window";

type PlanItem = {
  type: GapKind;
  width: number;
  height?: number;
  isEntrance: boolean;
  offset: number;
};

type WallGeom = { x0: number; y0: number; x1: number; y1: number };

type StageKey = "kerpic" | "suvaq" | "bitirme";

const kerpicOlculeri: Record<string, [number, number, number]> = {
  adi: [250, 120, 65],
  birbucaq: [250, 120, 88],
  ikiqat: [250, 120, 138],
  silikat: [250, 120, 65],
  bos: [250, 120, 138],
  qazbeton: [600, 200, 300],
};

const stageDefs: {
  name: string;
  short: string;
  blurb: string;
  parts: string[];
  keys: StageKey[];
}[] = [
  {
    name: "1/5 — Təməl",
    short: "Təməl",
    blurb: "3D həcm başlayır. Beton əsas görünür, divar hələ qalxmayıb.",
    parts: ["bottom"],
    keys: [],
  },
  {
    name: "2/5 — Divarlar",
    short: "Divar",
    blurb: "Kərpic hörgüsü qalxır. Bu andan kərpic xərci smetaya düşür.",
    parts: ["bottom", "walls"],
    keys: ["kerpic"],
  },
  {
    name: "3/5 — Dam",
    short: "Dam",
    blurb: "Kirəmit örtük bağlanır. Ev bağlanır, xərc hələ hörgü ilə eynidir.",
    parts: ["bottom", "walls", "roof"],
    keys: ["kerpic"],
  },
  {
    name: "4/5 — Bölmələr",
    short: "Suvaq",
    blurb: "Otaq divarları və suvaq gəlir. Sement xərci əlavə olunur.",
    parts: ["bottom", "walls", "roof", "interior"],
    keys: ["kerpic", "suvaq"],
  },
  {
    name: "5/5 — Bitirmə",
    short: "Bitirmə",
    blurb: "Boya və döşəmə. Model hazır evdir, tam smeta buradadır.",
    parts: ["bottom", "walls", "roof", "interior"],
    keys: ["kerpic", "suvaq", "bitirme"],
  },
];

function must<T extends Element = HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Nibras Planner: #${id} tapılmadı`);
  return el as unknown as T;
}

export function mountPlanner(root: HTMLElement): () => void {
  const cleanups: Array<() => void> = [];
  const on = (
    el: EventTarget | null,
    type: string,
    fn: EventListener,
    opts?: AddEventListenerOptions,
  ) => {
    if (!el) return;
    el.addEventListener(type, fn, opts);
    cleanups.push(() => el.removeEventListener(type, fn, opts));
  };

  const home = must("home");
  const project = must("project");
  const cube = must("cube");
  const scene = must("scene");

  const anaSehife = () => {
    project.classList.add("hidden");
    home.classList.remove("hidden");
    allowSave = false;
    showContinue();
  };
  const yeniLayihe = () => {
    localStorage.removeItem(saveKey);
    planState.n = 0;
    planState.items = {};
    openingsReady = false;
    must<HTMLInputElement>("uzunluq").value = "10";
    must<HTMLInputElement>("en").value = "6";
    must<HTMLInputElement>("hund").value = "3";
    must<HTMLInputElement>("otaqSayi").value = "3";
    home.classList.add("hidden");
    project.classList.remove("hidden");
    allowSave = true;
    hesabla();
  };
  const devamEt = () => {
    const data = readSave();
    if (!data) return yeniLayihe();
    applySave(data);
    home.classList.add("hidden");
    project.classList.remove("hidden");
    allowSave = true;
    hesabla();
  };
  const togglePanel = (id: string) => {
    must(id).classList.toggle("open");
  };
  const toggleMat = (id: string) => {
    must(id).parentElement?.classList.toggle("open");
  };

  const kerpicSecimDeyisdi = () => {
    const secim = must<HTMLSelectElement>("kerpicSecim").value;
    if (secim === "ferdi") return;
    const size = kerpicOlculeri[secim];
    if (!size) return;
    const [L, W, H] = size;
    must<HTMLInputElement>("kUzun").value = String(L);
    must<HTMLInputElement>("kEn").value = String(W);
    must<HTMLInputElement>("kHund").value = String(H);
    hesabla();
  };
  const qalinliqDeyisdi = () => {
    const val = must<HTMLSelectElement>("divarQalinliq").value;
    must("qalinliqFerdi").style.display = val === "ferdi" ? "block" : "none";
    hesabla();
  };

  let rotX = -22;
  let rotY = 35;
  let zoomScale = 1;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  const autoSpin = true;
  const activePointers = new Map<number, { x: number; y: number }>();
  let pinchStartDist: number | null = null;
  let pinchStartZoom = 1;
  let rafId = 0;

  const zoomBy = (delta: number) => {
    zoomScale = Math.max(0.5, Math.min(2.5, zoomScale + delta));
  };
  const pointerDist = () => {
    const pts = [...activePointers.values()];
    if (pts.length < 2) return null;
    return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  };
  const spinLoop = () => {
    rafId = requestAnimationFrame(spinLoop);
    if (autoSpin && !dragging && activePointers.size === 0) rotY += 0.07;
    cube.style.transform = `scale(${zoomScale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  on(scene, "pointerdown", (event) => {
    const e = event as PointerEvent;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    scene.setPointerCapture(e.pointerId);
    if (activePointers.size === 2) {
      pinchStartDist = pointerDist();
      pinchStartZoom = zoomScale;
      dragging = false;
    } else if (activePointers.size === 1) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });
  on(scene, "pointermove", (event) => {
    const e = event as PointerEvent;
    if (!activePointers.has(e.pointerId)) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.size === 2) {
      const d = pointerDist();
      if (pinchStartDist && d)
        zoomScale = Math.max(0.5, Math.min(2.5, pinchStartZoom * (d / pinchStartDist)));
      return;
    }
    if (!dragging) return;
    rotY += (e.clientX - lastX) * 0.5;
    rotX -= (e.clientY - lastY) * 0.5;
    rotX = Math.max(-85, Math.min(85, rotX));
    lastX = e.clientX;
    lastY = e.clientY;
  });
  const endPointer = (event: Event) => {
    const e = event as PointerEvent;
    activePointers.delete(e.pointerId);
    if (activePointers.size < 2) pinchStartDist = null;
    dragging = activePointers.size === 1;
  };
  on(scene, "pointerup", endPointer);
  on(scene, "pointercancel", endPointer);
  on(
    scene,
    "wheel",
    (event) => {
      const e = event as WheelEvent;
      e.preventDefault();
      zoomBy(e.deltaY < 0 ? 0.12 : -0.12);
    },
    { passive: false },
  );
  spinLoop();

  const brickTexture = (
    scale: number,
    kLmm: number,
    kHmm: number,
    tikisMm: number,
    shade: string,
  ) => {
    const bw = Math.max(3, (kLmm / 1000) * scale);
    const bh = Math.max(2, (kHmm / 1000) * scale);
    const j = Math.max(1, (tikisMm / 1000) * scale);
    const courseH = bh + j;
    const mortar = "#cbb89a";
    const sun = "linear-gradient(180deg,rgba(255,255,255,.2),rgba(0,0,0,.12))";
    return (
      `background-color:${shade};` +
      `background-image:${sun},` +
      `linear-gradient(${mortar} ${j}px,transparent ${j}px),` +
      `linear-gradient(90deg,${mortar} ${j}px,transparent ${j}px),` +
      `linear-gradient(90deg,${mortar} ${j}px,transparent ${j}px);` +
      `background-size:100% 100%,100% ${courseH}px,${bw + j}px ${courseH * 2}px,${bw + j}px ${courseH * 2}px;` +
      `background-position:0 0,0 0,0 0,${(bw + j) / 2}px ${courseH}px;`
    );
  };

  const planState: {
    n: number;
    cols: number;
    rowFracs: number[];
    colFracsPerRow: number[][];
    items: Record<string, PlanItem>;
    Lm: number;
    Wm: number;
    _wallGeom: Record<string, WallGeom>;
  } = {
    n: 0,
    cols: 1,
    rowFracs: [0, 1],
    colFracsPerRow: [[0, 1]],
    items: {},
    Lm: 1,
    Wm: 1,
    _wallGeom: {},
  };
  let weCurrentWall: string | null = null;
  let weType: GapKind = "door";
  let openingsReady = false;
  let allowSave = false;
  const saveKey = "nibras-planner-v1";

  const stageCosts: Record<StageKey, number> = { kerpic: 0, suvaq: 0, bitirme: 0 };

  const resetPlanGrid = (n: number) => {
    const cols = Math.ceil(Math.sqrt(n));
    const fullRows = Math.floor(n / cols);
    const remainder = n - fullRows * cols;
    const rows = remainder > 0 ? fullRows + 1 : fullRows;
    planState.n = n;
    planState.cols = cols;
    planState.rowFracs = Array.from({ length: rows + 1 }, (_, i) => i / rows);
    planState.colFracsPerRow = [];
    for (let r = 0; r < rows; r++) {
      const isLast = r === rows - 1 && remainder > 0;
      const cells = isLast ? remainder : cols;
      planState.colFracsPerRow.push(Array.from({ length: cells + 1 }, (_, i) => i / cells));
    }
    const kept: Record<string, PlanItem> = {};
    for (const id of ["ext-N", "ext-S", "ext-E", "ext-W"]) {
      if (planState.items[id]) kept[id] = planState.items[id];
    }
    planState.items = kept;
    if (!openingsReady && Object.keys(kept).length === 0) {
      openingsReady = true;
      planState.items["ext-S"] = {
        type: "door",
        width: 0.9,
        height: 2.1,
        isEntrance: true,
        offset: 0.5,
      };
      planState.items["ext-N"] = {
        type: "window",
        width: 1.4,
        height: 1.2,
        isEntrance: false,
        offset: 0.5,
      };
      planState.items["ext-E"] = {
        type: "window",
        width: 1.2,
        height: 1.2,
        isEntrance: false,
        offset: 0.5,
      };
      planState.items["ext-W"] = {
        type: "window",
        width: 1.2,
        height: 1.2,
        isEntrance: false,
        offset: 0.5,
      };
    }
  };

  const currentWallMm = () => {
    const v = must<HTMLSelectElement>("divarQalinliq").value;
    return v === "ferdi"
      ? parseFloat(must<HTMLInputElement>("qalinliqFerdi").value) || 250
      : parseFloat(v);
  };

  const updateStageDisplay = () => {
    const stage = parseInt(must<HTMLInputElement>("stageSlider").value, 10) || 5;
    const def = stageDefs[stage - 1];
    if (!def) return;
    const show = (part: string) => def.parts.includes(part);
    must("f-bottom").style.opacity = show("bottom") ? "1" : "0";
    must("f-plinth").style.opacity = show("bottom") ? "1" : "0";
    cube.querySelectorAll<HTMLElement>(".lawn").forEach((el) => {
      el.style.opacity = show("bottom") ? "1" : "0";
    });
    cube.querySelectorAll<HTMLElement>(".ext-wall").forEach((el) => {
      el.style.opacity = show("walls") ? "1" : "0";
    });
    cube.querySelectorAll<HTMLElement>(".roof-bit").forEach((el) => {
      el.style.opacity = show("roof") ? "1" : "0";
    });
    must("f-top").style.display = "none";
    must("f-ridge").style.display = "none";
    cube.querySelectorAll<HTMLElement>(".iface").forEach((el) => {
      el.style.opacity = show("interior") ? "1" : "0";
    });
    cube.dataset.stage = String(stage);
    must("scene").dataset.stage = String(stage);
    const rail = must("stageRail");
    rail.dataset.stage = String(stage);
    rail.querySelectorAll<HTMLElement>("[data-stage]").forEach((btn) => {
      const n = parseInt(btn.dataset.stage || "0", 10);
      btn.classList.toggle("is-on", n <= stage);
      btn.classList.toggle("is-current", n === stage);
    });
    const sum = def.keys.reduce((s, key) => s + (stageCosts[key] || 0), 0);
    must("fiveCostAmt").textContent = sum.toFixed(2);
    must("sceneBadge").textContent = `${stage}/5 · ${def.short}`;
    const note =
      stage <= 1
        ? " Təməl xərci bu smetada yoxdur."
        : stage === 3
          ? " Dam ayrıca qiymətlənməyib."
          : "";
    must("stageLabel").innerHTML =
      `<b>${def.name}</b> — ${def.blurb}<br>Bu mərhələyə qədər: <b>${sum.toFixed(2)} AZN</b>` +
      (note ? `<span class="stage-note">${note}</span>` : "");
  };

  const update3D = (
    L: number,
    W: number,
    H: number,
    wallMm: number,
    kL: number,
    kH: number,
    tikis: number,
    roomCount: number,
  ) => {
    const hasDims = L > 0 && W > 0 && H > 0;
    must("sceneEmpty").style.display = hasDims ? "none" : "flex";
    cube.style.visibility = hasDims ? "visible" : "hidden";
    const maxDim = Math.max(L, W, H, 0.1);
    const scale = Math.max(14, Math.min(95, 280 / maxDim));
    const lp = Math.max(L, 0.1) * scale;
    const wp = Math.max(W, 0.1) * scale;
    const hp = Math.max(H, 0.1) * scale;
    const bw = Math.max(2, Math.min(14, ((wallMm || 250) / 1000) * scale));

    cube.style.width = `${lp}px`;
    cube.style.height = `${hp}px`;
    cube.style.marginLeft = `${-lp / 2}px`;
    cube.style.marginTop = `${-hp / 2}px`;

    const bwStyle = "border:none;";
    const stageNow = parseInt(must<HTMLInputElement>("stageSlider").value, 10) || 5;
    const finish = stageNow >= 5;
    const skirting = Math.max(7, hp * 0.07);
    const plaster =
      `background:linear-gradient(#c8b08a,#c8b08a) bottom/100% ${skirting}px no-repeat,` +
      `linear-gradient(180deg,#fbf6ee,#eadcc6);box-shadow:inset 0 -10px 14px rgba(80,50,20,.08);`;
    const texFront = finish ? plaster : brickTexture(scale, kL, kH, tikis, "#b85a34");
    const texSide = finish ? plaster : brickTexture(scale, kL, kH, tikis, "#8d4328");
    const texBack = finish ? plaster : brickTexture(scale, kL, kH, tikis, "#7a3b24");
    cube.querySelectorAll(".iface, .ext-wall, .roof-bit, .lawn").forEach((el) => el.remove());

    const windowSkin =
      "background:" +
      "linear-gradient(#f6f0e4,#f6f0e4) 0 0/100% 6px no-repeat," +
      "linear-gradient(#f6f0e4,#f6f0e4) 0 100%/100% 6px no-repeat," +
      "linear-gradient(#f6f0e4,#f6f0e4) 0 0/6px 100% no-repeat," +
      "linear-gradient(#f6f0e4,#f6f0e4) 100% 0/6px 100% no-repeat," +
      "linear-gradient(#efe2cc,#efe2cc) 50% 0/2px 100% no-repeat," +
      "linear-gradient(#efe2cc,#efe2cc) 0 48%/100% 2px no-repeat," +
      "linear-gradient(120deg,rgba(255,255,255,.75),rgba(255,255,255,0) 46%)," +
      "linear-gradient(180deg,#d7f0ff,#7eb6d4 62%,#f4fbff);" +
      "box-shadow:inset 0 0 0 2px #6a4630,0 2px 0 rgba(255,255,255,.35);border:none;";
    const doorSkin = (entrance: boolean) => {
      const wood = entrance ? "#7b4322" : "#8d5b36";
      const panel = entrance ? "#4e2b16" : "#684028";
      return (
        `background:radial-gradient(circle at 80% 54%,#f0d48a 1.6px,transparent 2.2px),` +
        `linear-gradient(${panel},${panel}) 16% 10%/30% 34% no-repeat,` +
        `linear-gradient(${panel},${panel}) 54% 10%/30% 34% no-repeat,` +
        `linear-gradient(${panel},${panel}) 16% 52%/30% 36% no-repeat,` +
        `linear-gradient(${panel},${panel}) 54% 52%/30% 36% no-repeat,` +
        `linear-gradient(180deg,${wood},#3d2414);` +
        `box-shadow:inset 0 0 0 3px #3a2416;border:none;`
      );
    };

    type Hole = {
      offset: number;
      widthPx: number;
      kind: "door" | "window";
      entrance?: boolean;
      heightM?: number;
    };
    const facadeHoles = (id: string, full: number): Hole[] => {
      const user = planState.items[id];
      if (user) {
        const widthPx = Math.min(full * 0.82, Math.max(16, user.width * scale));
        return [
          {
            offset: user.offset ?? 0.5,
            widthPx,
            kind: user.type,
            entrance: user.isEntrance,
            heightM: user.height,
          },
        ];
      }
      const win = Math.min(full * 0.2, Math.max(18, 1.15 * scale));
      const door = Math.min(full * 0.22, Math.max(20, 0.95 * scale));
      if (id === "ext-S" && full > door + win * 2 + 12) {
        return [
          { offset: 0.22, widthPx: win, kind: "window" },
          { offset: 0.5, widthPx: door, kind: "door", entrance: true },
          { offset: 0.78, widthPx: win, kind: "window" },
        ];
      }
      if ((id === "ext-N" || id === "ext-S") && full > win * 2 + 16) {
        return [
          { offset: 0.3, widthPx: win, kind: "window" },
          { offset: 0.7, widthPx: win, kind: "window" },
        ];
      }
      return [{ offset: 0.5, widthPx: Math.min(win, full * 0.46), kind: "window" }];
    };

    const addWall = (
      id: string,
      full: number,
      tex: string,
      transform: string,
      baseLeft: number,
    ) => {
      const mk = (left: number, w: number, h: number, top: number, style: string, proud = "") => {
        const d = document.createElement("div");
        d.className = "face ext-wall";
        d.style.cssText = `width:${w}px;height:${h}px;left:${baseLeft + left}px;top:${top}px;transform:${transform}${proud};${bwStyle}${style}`;
        cube.appendChild(d);
      };
      mk(0, full, hp, 0, tex);
      for (const hole of facadeHoles(id, full)) {
        const left = Math.max(
          3,
          Math.min(full - hole.widthPx - 3, hole.offset * full - hole.widthPx / 2),
        );
        if (hole.kind === "window") {
          const h = hole.heightM
            ? Math.max(16, Math.min(hp * 0.9, (hole.heightM / Math.max(H, 0.1)) * hp))
            : Math.max(16, hp * 0.34);
          const top = Math.max(4, Math.min(hp - h - 4, hp * 0.22));
          mk(left, hole.widthPx, h, top, windowSkin, " translateZ(1.6px)");
        } else {
          const h = hole.heightM
            ? Math.max(20, Math.min(hp * 0.94, (hole.heightM / Math.max(H, 0.1)) * hp))
            : Math.max(20, hp * 0.66);
          mk(left, hole.widthPx, h, hp - h, doorSkin(Boolean(hole.entrance)), " translateZ(1.6px)");
        }
      }
    };

    addWall("ext-N", lp, texBack, `translateZ(${wp / 2}px)`, 0);
    addWall("ext-S", lp, texFront, `rotateY(180deg) translateZ(${wp / 2}px)`, 0);
    addWall("ext-E", wp, texSide, `rotateY(90deg) translateZ(${lp / 2}px)`, lp / 2 - wp / 2);
    addWall("ext-W", wp, texSide, `rotateY(-90deg) translateZ(${lp / 2}px)`, lp / 2 - wp / 2);

    const eave = Math.max(10, bw + 4);
    const rise = Math.max(26, wp * 0.34);
    const run = wp / 2 + eave;
    const slopeLen = Math.hypot(run, rise);
    const pitch = (Math.atan2(rise, run) * 180) / Math.PI;
    const rot = 90 - pitch;
    const tile =
      "background-color:#8d3b2b;background-image:linear-gradient(180deg,rgba(255,214,180,.45) 0 1px,rgba(0,0,0,.28) 1px 3px,transparent 4px),linear-gradient(90deg,rgba(0,0,0,.22) 1px,transparent 1px);background-size:100% 13px,20px 100%;border:none;box-shadow:inset 0 -12px 16px rgba(40,10,6,.28);";
    const addRoof = (transform: string) => {
      const d = document.createElement("div");
      d.className = "face roof-bit";
      d.style.cssText = `width:${lp + eave * 2}px;height:${slopeLen}px;left:${-eave}px;top:${-slopeLen}px;transform-origin:center bottom;transform:${transform};${tile}`;
      cube.appendChild(d);
    };
    addRoof(`translateZ(${wp / 2 + eave}px) rotateX(${rot}deg)`);
    addRoof(`translateZ(${-(wp / 2 + eave)}px) rotateX(${-rot}deg)`);

    const gableTex = finish ? plaster : brickTexture(scale, kL, kH, tikis, "#9a4a30");
    const addGable = (transform: string) => {
      const d = document.createElement("div");
      d.className = "face roof-bit";
      d.style.cssText = `width:${wp}px;height:${rise}px;left:${lp / 2 - wp / 2}px;top:${-rise}px;transform:${transform};clip-path:polygon(0 100%,50% 0,100% 100%);${gableTex}border:none;`;
      cube.appendChild(d);
    };
    addGable(`rotateY(90deg) translateZ(${lp / 2 - 1}px)`);
    addGable(`rotateY(-90deg) translateZ(${lp / 2 - 1}px)`);

    const cw = Math.max(12, lp * 0.07);
    const cd = Math.max(10, wp * 0.12);
    const ch = Math.max(20, rise * 0.72);
    const cx = lp * 0.66;
    const chimneyBrick = brickTexture(scale, kL, kH, tikis, "#6e3424");
    const chimney = (css: string) => {
      const d = document.createElement("div");
      d.className = "face roof-bit";
      d.style.cssText = css;
      cube.appendChild(d);
    };
    chimney(
      `width:${cw}px;height:${ch}px;left:${cx}px;top:${-rise - ch + 6}px;transform:translateZ(${cd / 2}px);${chimneyBrick}border:none;`,
    );
    chimney(
      `width:${cw}px;height:${ch}px;left:${cx}px;top:${-rise - ch + 6}px;transform:rotateY(180deg) translateZ(${cd / 2}px);${chimneyBrick}border:none;`,
    );
    chimney(
      `width:${cd}px;height:${ch}px;left:${cx + cw / 2 - cd / 2}px;top:${-rise - ch + 6}px;transform:rotateY(90deg) translateZ(${cw / 2}px);${chimneyBrick}border:none;`,
    );
    chimney(
      `width:${cd}px;height:${ch}px;left:${cx + cw / 2 - cd / 2}px;top:${-rise - ch + 6}px;transform:rotateY(-90deg) translateZ(${cw / 2}px);${chimneyBrick}border:none;`,
    );
    chimney(
      `width:${cw + 4}px;height:${cd + 4}px;left:${cx - 2}px;top:${-rise - ch + 4}px;transform:rotateX(90deg) translateZ(${ch / 2}px);background:#4d2a22;border:none;`,
    );

    const floor = finish
      ? "background-color:#e4cfaa;background-image:linear-gradient(rgba(110,70,30,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(110,70,30,.22) 1px,transparent 1px);background-size:18px 18px;border:none;"
      : "background:linear-gradient(160deg,#d5d0c8,#9a958d);border:none;";
    must("f-bottom").style.cssText =
      `width:${lp}px;height:${wp}px;top:${hp / 2 - wp / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2}px);${floor}`;
    const plinth = Math.max(8, hp * 0.06);
    must("f-plinth").style.cssText =
      `width:${lp + 16}px;height:${wp + 16}px;left:-8px;top:${hp / 2 - (wp + 16) / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2 + plinth}px);border:none;background:linear-gradient(180deg,#cfc8bc,#7e7870);`;
    const gw = lp * 1.9;
    const gd = wp * 2.25;
    const lawn = document.createElement("div");
    lawn.className = "face lawn";
    lawn.style.cssText =
      `width:${gw}px;height:${gd}px;left:${(lp - gw) / 2}px;top:${hp / 2 - gd / 2}px;` +
      `transform:rotateX(-90deg) translateZ(${hp / 2 + plinth + 6}px);border:none;` +
      `background:radial-gradient(closest-side at 50% 46%,rgba(20,40,10,.22),transparent 68%),repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0 1px,transparent 1px 8px),linear-gradient(180deg,#8fce62,#4f8d38 55%,#356828);`;
    cube.appendChild(lawn);

    const n = Math.max(1, Math.round(roomCount) || 1);
    if (n !== planState.n) resetPlanGrid(n);
    const iw = Math.max(2, bw * 0.55);
    const texIn = "background:#e9e3d6; box-shadow:inset 0 0 0 2px rgba(0,0,0,.1);";
    const rows = planState.rowFracs.length - 1;
    for (let j = 1; j < rows; j++) {
      const dz = planState.rowFracs[j] * wp - wp / 2;
      const d = document.createElement("div");
      d.className = "face iface";
      d.style.cssText = `width:${lp}px;height:${hp}px;transform:translateZ(${dz}px);border-width:${iw}px;${texIn}`;
      cube.appendChild(d);
    }
    const uniqueColFracs = new Set<string>();
    planState.colFracsPerRow.forEach((cf) => {
      for (let c = 1; c < cf.length - 1; c++) uniqueColFracs.add(cf[c].toFixed(3));
    });
    uniqueColFracs.forEach((fracStr) => {
      const dx = parseFloat(fracStr) * lp - lp / 2;
      const d = document.createElement("div");
      d.className = "face iface";
      d.style.cssText = `width:${wp}px;height:${hp}px;left:${lp / 2 - wp / 2}px;transform:rotateY(90deg) translateZ(${dx}px);border-width:${iw}px;${texIn}`;
      cube.appendChild(d);
    });

    must("dimsLabel").innerHTML =
      `Uzunluq: <b>${L || 0}</b> m · En: <b>${W || 0}</b> m · Hündürlük: <b>${H || 0}</b> m · Otaq: <b>${n}</b>`;
  };

  const wallTitle = (id: string) => {
    const names: Record<string, string> = {
      "ext-N": "Arxa divar",
      "ext-S": "Ön divar",
      "ext-E": "Sağ divar",
      "ext-W": "Sol divar",
    };
    return names[id] || "Otaq bölməsi";
  };
  const openWallEditor = (id: string) => {
    weCurrentWall = id;
    const item = planState.items[id];
    weType = item ? item.type : "door";
    must("weTitle").textContent = wallTitle(id);
    must<HTMLInputElement>("weWidth").value = String(
      item ? item.width : weType === "door" ? 0.9 : 1.2,
    );
    must<HTMLInputElement>("weHeight").value = String(
      item?.height ?? (weType === "door" ? 2.1 : 1.2),
    );
    must<HTMLInputElement>("weEntrance").checked = Boolean(item && item.isEntrance);
    weRefreshTypeButtons();
    must("wallEditor").classList.remove("hidden");
    must("wallEditor").scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  const weSetType = (t: GapKind) => {
    weType = t;
    must<HTMLInputElement>("weWidth").value = t === "door" ? "0.9" : "1.2";
    must<HTMLInputElement>("weHeight").value = t === "door" ? "2.1" : "1.2";
    weRefreshTypeButtons();
  };
  const weRefreshTypeButtons = () => {
    must("we-door").classList.toggle("active", weType === "door");
    must("we-window").classList.toggle("active", weType === "window");
    must("weEntranceRow").style.display = weType === "door" ? "flex" : "none";
  };
  const weSave = () => {
    if (!weCurrentWall) return;
    const width = parseFloat(must<HTMLInputElement>("weWidth").value) || 0.9;
    const height =
      parseFloat(must<HTMLInputElement>("weHeight").value) || (weType === "door" ? 2.1 : 1.2);
    const isEntrance = weType === "door" && must<HTMLInputElement>("weEntrance").checked;
    if (isEntrance) {
      Object.values(planState.items).forEach((it) => {
        if (it.isEntrance) it.isEntrance = false;
      });
    }
    const existingOffset = planState.items[weCurrentWall]
      ? planState.items[weCurrentWall].offset
      : 0.5;
    planState.items[weCurrentWall] = {
      type: weType,
      width,
      height,
      isEntrance,
      offset: existingOffset,
    };
    weClose();
    hesabla();
  };
  const weDelete = () => {
    if (weCurrentWall) delete planState.items[weCurrentWall];
    weClose();
    hesabla();
  };
  const weClose = () => {
    must("wallEditor").classList.add("hidden");
    weCurrentWall = null;
  };

  const renderFloorPlan = (L: number, W: number, roomCount: number, wallMm: number) => {
    const n = Math.max(1, Math.round(roomCount) || 1);
    if (n !== planState.n) resetPlanGrid(n);
    const Lm = Math.max(L, 0.1);
    const Wm = Math.max(W, 0.1);
    planState.Lm = Lm;
    planState.Wm = Wm;
    const SC = 100;
    const vbW = Lm * SC;
    const vbH = Wm * SC;
    const svg = must<SVGSVGElement>("planSvg");
    svg.setAttribute("viewBox", `0 0 ${vbW} ${vbH}`);
    const wallPx = Math.max(2, Math.min(vbW, vbH) * 0.03, ((wallMm || 250) / 1000) * SC * 0.4);
    const rows = planState.rowFracs.length - 1;
    let html = "";
    let roomNo = 1;
    for (let r = 0; r < rows; r++) {
      const y0 = planState.rowFracs[r] * vbH;
      const y1 = planState.rowFracs[r + 1] * vbH;
      const cf = planState.colFracsPerRow[r];
      for (let c = 0; c < cf.length - 1; c++) {
        const x0 = cf[c] * vbW;
        const x1 = cf[c + 1] * vbW;
        const areaM2 = ((x1 - x0) / SC) * ((y1 - y0) / SC);
        const fs = Math.min(x1 - x0, y1 - y0) * 0.15;
        html += `<text x="${(x0 + x1) / 2}" y="${(y0 + y1) / 2 - fs * 0.4}" text-anchor="middle" font-size="${fs}" fill="var(--text)" font-weight="600">Otaq ${roomNo}</text>`;
        html += `<text x="${(x0 + x1) / 2}" y="${(y0 + y1) / 2 + fs * 0.9}" text-anchor="middle" font-size="${fs * 0.85}" fill="var(--muted)">${areaM2.toFixed(1)} m²</text>`;
        roomNo++;
      }
    }

    const wallGeom: Record<string, WallGeom> = {};
    const wallLine = (
      id: string,
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      thick: number,
    ) => {
      wallGeom[id] = { x0, y0, x1, y1 };
      const item = planState.items[id];
      if (!item) {
        return `<line data-wall="${id}" x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/>`;
      }
      const len = Math.hypot(x1 - x0, y1 - y0) || 1;
      const gap = Math.max(6, item.width * SC);
      const minOff = gap / 2 / len;
      const maxOff = 1 - minOff;
      const off = Math.max(minOff, Math.min(maxOff, item.offset != null ? item.offset : 0.5));
      item.offset = off;
      const midX = x0 + (x1 - x0) * off;
      const midY = y0 + (y1 - y0) * off;
      const ux = (x1 - x0) / len;
      const uy = (y1 - y0) / len;
      const gx0 = midX - ux * (gap / 2);
      const gy0 = midY - uy * (gap / 2);
      const gx1 = midX + ux * (gap / 2);
      const gy1 = midY + uy * (gap / 2);
      const color = item.type === "window" ? "#9fd0e8" : item.isEntrance ? "#4caf50" : "#f2d9a8";
      const icon = item.type === "window" ? "🪟" : item.isEntrance ? "🏠" : "🚪";
      return (
        `<line data-wall="${id}" x1="${x0}" y1="${y0}" x2="${gx0}" y2="${gy0}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/>` +
        `<line data-wall="${id}" x1="${gx1}" y1="${gy1}" x2="${x1}" y2="${y1}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/>` +
        `<line data-drag-item="${id}" x1="${gx0}" y1="${gy0}" x2="${gx1}" y2="${gy1}" stroke="${color}" stroke-width="${thick * 1.6}" style="cursor:grab;"/>` +
        `<text data-drag-item="${id}" x="${midX}" y="${midY - thick}" text-anchor="middle" font-size="${thick * 3}" style="cursor:grab;">${icon}</text>`
      );
    };

    html += wallLine("ext-N", 0, 0, vbW, 0, wallPx);
    html += wallLine("ext-S", 0, vbH, vbW, vbH, wallPx);
    html += wallLine("ext-W", 0, 0, 0, vbH, wallPx);
    html += wallLine("ext-E", vbW, 0, vbW, vbH, wallPx);
    for (let j = 1; j < rows; j++) {
      const y = planState.rowFracs[j] * vbH;
      html += wallLine(`rowdiv-${j}`, 0, y, vbW, y, wallPx * 0.6);
      html += `<line data-drag-row="1" data-idx="${j}" x1="0" y1="${y}" x2="${vbW}" y2="${y}" stroke="transparent" stroke-width="${wallPx * 3 + 10}" style="cursor:row-resize;"/>`;
    }
    for (let r = 0; r < rows; r++) {
      const y0v = planState.rowFracs[r] * vbH;
      const y1v = planState.rowFracs[r + 1] * vbH;
      const cf = planState.colFracsPerRow[r];
      for (let c = 1; c < cf.length - 1; c++) {
        const x = cf[c] * vbW;
        html += wallLine(`coldiv-${r}-${c}`, x, y0v, x, y1v, wallPx * 0.6);
        html += `<line data-drag-col="1" data-row="${r}" data-idx="${c}" x1="${x}" y1="${y0v}" x2="${x}" y2="${y1v}" stroke="transparent" stroke-width="${wallPx * 3 + 10}" style="cursor:col-resize;"/>`;
      }
    }
    svg.innerHTML = html;
    planState._wallGeom = wallGeom;

    const wallPointerDown = (event: Event) => {
      event.stopPropagation();
      const id = (event.currentTarget as SVGElement).dataset.wall;
      if (id) openWallEditor(id);
    };
    const dragPointerDown = (event: Event) => {
      event.stopPropagation();
      const el = event.currentTarget as SVGElement;
      const ev0 = event as PointerEvent;
      const rect = svg.getBoundingClientRect();
      const isRow = Boolean(el.dataset.dragRow);
      const j = parseInt(el.dataset.idx || "0", 10);
      const rIdx = parseInt(el.dataset.row || "0", 10);
      const startX = ev0.clientX;
      const startY = ev0.clientY;
      let moved = false;
      svg.setPointerCapture(ev0.pointerId);
      const onMove = (ev: PointerEvent) => {
        if (Math.abs(ev.clientX - startX) > 4 || Math.abs(ev.clientY - startY) > 4) moved = true;
        if (isRow) {
          const fracY = (ev.clientY - rect.top) / rect.height;
          const minGap = 1.3 / planState.Wm;
          const lo = planState.rowFracs[j - 1] + minGap;
          const hi = planState.rowFracs[j + 1] - minGap;
          planState.rowFracs[j] = Math.max(lo, Math.min(hi, fracY));
        } else {
          const fracX = (ev.clientX - rect.left) / rect.width;
          const cf = planState.colFracsPerRow[rIdx];
          const minGap = 1.3 / planState.Lm;
          const lo = cf[j - 1] + minGap;
          const hi = cf[j + 1] - minGap;
          cf[j] = Math.max(lo, Math.min(hi, fracX));
        }
        renderFloorPlan(planState.Lm, planState.Wm, planState.n, currentWallMm());
      };
      const onUp = () => {
        svg.removeEventListener("pointermove", onMove);
        svg.removeEventListener("pointerup", onUp);
        if (!moved) openWallEditor(isRow ? `rowdiv-${j}` : `coldiv-${rIdx}-${j}`);
      };
      svg.addEventListener("pointermove", onMove);
      svg.addEventListener("pointerup", onUp);
    };
    const itemDragPointerDown = (event: Event) => {
      event.stopPropagation();
      const id = (event.currentTarget as SVGElement).dataset.dragItem || "";
      const geom = planState._wallGeom[id];
      const item = planState.items[id];
      if (!geom || !item) return;
      const ev0 = event as PointerEvent;
      const rect = svg.getBoundingClientRect();
      const vb = svg.viewBox.baseVal;
      const startX = ev0.clientX;
      const startY = ev0.clientY;
      let moved = false;
      svg.setPointerCapture(ev0.pointerId);
      const dx = geom.x1 - geom.x0;
      const dy = geom.y1 - geom.y0;
      const len2 = dx * dx + dy * dy || 1;
      const onMove = (ev: PointerEvent) => {
        if (Math.abs(ev.clientX - startX) > 4 || Math.abs(ev.clientY - startY) > 4) moved = true;
        const px = ((ev.clientX - rect.left) / rect.width) * vb.width;
        const py = ((ev.clientY - rect.top) / rect.height) * vb.height;
        const t = ((px - geom.x0) * dx + (py - geom.y0) * dy) / len2;
        item.offset = Math.max(0, Math.min(1, t));
        renderFloorPlan(planState.Lm, planState.Wm, planState.n, currentWallMm());
      };
      const onUp = () => {
        svg.removeEventListener("pointermove", onMove);
        svg.removeEventListener("pointerup", onUp);
        if (!moved) openWallEditor(id);
        else hesabla();
      };
      svg.addEventListener("pointermove", onMove);
      svg.addEventListener("pointerup", onUp);
    };
    svg
      .querySelectorAll<SVGElement>("[data-wall]")
      .forEach((el) => el.addEventListener("pointerdown", wallPointerDown));
    svg
      .querySelectorAll<SVGElement>("[data-drag-row], [data-drag-col]")
      .forEach((el) => el.addEventListener("pointerdown", dragPointerDown));
    svg
      .querySelectorAll<SVGElement>("[data-drag-item]")
      .forEach((el) => el.addEventListener("pointerdown", itemDragPointerDown));
  };

  const hesabla = () => {
    const L = parseFloat(must<HTMLInputElement>("uzunluq").value) || 0;
    const W = parseFloat(must<HTMLInputElement>("en").value) || 0;
    const H = parseFloat(must<HTMLInputElement>("hund").value) || 0;
    const otaqSayi = parseFloat(must<HTMLInputElement>("otaqSayi").value) || 1;
    const wallArea = 2 * (L + W) * H;
    const floorArea = L * W;
    const lines: Array<[string, number]> = [];
    let total = 0;
    const kL = parseFloat(must<HTMLInputElement>("kUzun").value) || 1;
    const kW = parseFloat(must<HTMLInputElement>("kEn").value) || 1;
    const kH = parseFloat(must<HTMLInputElement>("kHund").value) || 1;
    const tikis = parseFloat(must<HTMLInputElement>("tikis").value) || 0;
    const qalinRaw = must<HTMLSelectElement>("divarQalinliq").value;
    const divarQalinliq =
      qalinRaw === "ferdi"
        ? parseFloat(must<HTMLInputElement>("qalinliqFerdi").value) || kW
        : parseFloat(qalinRaw);

    update3D(L, W, H, divarQalinliq, kL, kH, tikis, otaqSayi);
    renderFloorPlan(L, W, otaqSayi, divarQalinliq);

    let openingArea = 0;
    for (const [id, item] of Object.entries(planState.items)) {
      if (!id.startsWith("ext-")) continue;
      const h = Math.min(H, item.height ?? (item.type === "door" ? 2.1 : 1.2));
      openingArea += Math.max(0, item.width) * Math.max(0, h);
    }
    openingArea = Math.min(openingArea, wallArea);
    const netWall = Math.max(0, wallArea - openingArea);

    const layers = Math.max(1, Math.round(divarQalinliq / (kW + tikis)));
    const brickFace = (kL + tikis) * (kH + tikis);
    const brickCount = brickFace > 0 ? Math.ceil((netWall * 1e6 * layers) / brickFace) : 0;
    const brickPrice = parseFloat(must<HTMLInputElement>("qKerpic").value) || 0;
    stageCosts.suvaq = 0;
    stageCosts.bitirme = 0;
    if (must<HTMLInputElement>("c-kerpic").checked) {
      const brickCost = brickCount * brickPrice;
      total += brickCost;
      lines.push([`Kərpic — ${brickCount.toLocaleString("az")} əd (${layers} sıra)`, brickCost]);
      stageCosts.kerpic = brickCost;
    } else stageCosts.kerpic = 0;

    if (must<HTMLInputElement>("c-sement").checked) {
      const qty = Math.ceil(netWall * (parseFloat(must<HTMLInputElement>("p-sement").value) || 0));
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-sement").value) || 0);
      total += cost;
      lines.push([`Sement — ${qty} kg`, cost]);
      stageCosts.suvaq = cost;
    }
    if (must<HTMLInputElement>("c-boya").checked) {
      const qty =
        Math.round(netWall * (parseFloat(must<HTMLInputElement>("p-boya").value) || 0) * 10) / 10;
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-boya").value) || 0);
      total += cost;
      lines.push([`Boya — ${qty} litr`, cost]);
      stageCosts.bitirme += cost;
    }
    if (must<HTMLInputElement>("c-kafel").checked) {
      const qty =
        Math.round(floorArea * (parseFloat(must<HTMLInputElement>("p-kafel").value) || 0) * 10) /
        10;
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-kafel").value) || 0);
      total += cost;
      lines.push([`Kafel/laminat — ${qty} m²`, cost]);
      stageCosts.bitirme += cost;
    }

    must("totalPrice").textContent = `${total.toFixed(2)} AZN`;
    must("estLines").innerHTML = lines
      .map(
        ([name, cost]) =>
          `<div class="line"><span>${name}</span><span>${cost.toFixed(2)} AZN</span></div>`,
      )
      .join("");
    const chips = [
      `Divar ${netWall.toFixed(1)} m²`,
      `Döşəmə ${floorArea.toFixed(1)} m²`,
      openingArea > 0 ? `Açılış −${openingArea.toFixed(1)} m²` : "Açılış yoxdur",
    ];
    must("qtyChips").innerHTML = chips.map((text) => `<span>${text}</span>`).join("");
    updateStageDisplay();
    if (allowSave) persist();
  };

  const smetaText = () => {
    const title = "Nibras smeta";
    const dims = must("dimsLabel").innerText.replace(/\s+/g, " ").trim();
    const chips = must("qtyChips").innerText.replace(/\s+/g, " ").trim();
    const lines = Array.from(must("estLines").querySelectorAll(".line")).map((el) =>
      el.textContent?.replace(/\s+/g, " ").trim(),
    );
    return [title, dims, chips, "", ...lines, "", must("totalPrice").textContent]
      .filter((line) => line !== undefined)
      .join("\n");
  };
  const persist = () => {
    try {
      const fields: Record<string, string> = {};
      project
        .querySelectorAll<HTMLInputElement | HTMLSelectElement>("input[id], select[id]")
        .forEach((el) => {
          fields[el.id] =
            el instanceof HTMLInputElement && el.type === "checkbox"
              ? el.checked
                ? "1"
                : "0"
              : el.value;
        });
      localStorage.setItem(
        saveKey,
        JSON.stringify({
          fields,
          plan: {
            n: planState.n,
            cols: planState.cols,
            rowFracs: planState.rowFracs,
            colFracsPerRow: planState.colFracsPerRow,
            items: planState.items,
          },
        }),
      );
    } catch {
      /* private mode */
    }
  };
  const readSave = () => {
    try {
      const raw = localStorage.getItem(saveKey);
      return raw
        ? (JSON.parse(raw) as { fields: Record<string, string>; plan: typeof planState })
        : null;
    } catch {
      return null;
    }
  };
  const applySave = (data: NonNullable<ReturnType<typeof readSave>>) => {
    for (const [id, value] of Object.entries(data.fields)) {
      const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
      if (!el || !project.contains(el)) continue;
      if (el instanceof HTMLInputElement && el.type === "checkbox") el.checked = value === "1";
      else el.value = value;
    }
    const plan = data.plan;
    if (plan) {
      planState.n = plan.n;
      planState.cols = plan.cols;
      planState.rowFracs = plan.rowFracs;
      planState.colFracsPerRow = plan.colFracsPerRow;
      planState.items = plan.items || {};
      openingsReady = true;
    }
  };
  const showContinue = () => {
    must("btnContinue").classList.toggle("hidden", !readSave());
  };

  on(root.querySelector('[data-act="yeni"]'), "click", yeniLayihe);
  on(root.querySelector('[data-act="davam"]'), "click", devamEt);
  on(root.querySelector('[data-act="ana"]'), "click", anaSehife);
  on(root.querySelector('[data-act="print"]'), "click", () => window.print());
  on(root.querySelector('[data-act="copy"]'), "click", async () => {
    const text = smetaText();
    const btn = root.querySelector('[data-act="copy"]');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      root.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    if (btn) {
      const prev = btn.textContent;
      btn.textContent = "Kopyalandı";
      window.setTimeout(() => {
        btn.textContent = prev;
      }, 1400);
    }
  });
  root.querySelectorAll<HTMLElement>("[data-size]").forEach((btn) => {
    on(btn, "click", () => {
      const [l, w, h, rooms] = (btn.dataset.size || "").split(",");
      must<HTMLInputElement>("uzunluq").value = l;
      must<HTMLInputElement>("en").value = w;
      must<HTMLInputElement>("hund").value = h;
      must<HTMLInputElement>("otaqSayi").value = rooms;
      hesabla();
    });
  });
  root.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
    const id = el.dataset.panel;
    if (id) on(el, "click", () => togglePanel(id));
  });
  on(root.querySelector('[data-act="zoom-in"]'), "click", () => zoomBy(0.2));
  on(root.querySelector('[data-act="zoom-out"]'), "click", () => zoomBy(-0.2));
  root.querySelectorAll<HTMLElement>("#stageRail [data-stage]").forEach((btn) => {
    on(btn, "click", () => {
      const slider = must<HTMLInputElement>("stageSlider");
      slider.value = btn.dataset.stage || "5";
      slider.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
  root.querySelectorAll<HTMLElement>("[data-mat]").forEach((el) => {
    const id = el.dataset.mat;
    if (id) on(el, "click", () => toggleMat(id));
  });
  root.querySelectorAll<HTMLElement>(".mat-chev").forEach((el) => {
    const id = el.id.replace(/^chev-/, "");
    if (id) on(el, "click", () => toggleMat(id));
  });
  on(must("kerpicSecim"), "change", kerpicSecimDeyisdi);
  on(must("divarQalinliq"), "change", qalinliqDeyisdi);
  on(root.querySelector('[data-act="we-door"]'), "click", () => weSetType("door"));
  on(root.querySelector('[data-act="we-window"]'), "click", () => weSetType("window"));
  on(root.querySelector('[data-act="we-save"]'), "click", weSave);
  on(root.querySelector('[data-act="we-del"]'), "click", weDelete);
  on(root.querySelector('[data-act="we-close"]'), "click", weClose);
  on(project, "input", hesabla);
  on(project, "change", hesabla);
  showContinue();

  return () => {
    cancelAnimationFrame(rafId);
    cleanups.forEach((fn) => fn());
  };
}
