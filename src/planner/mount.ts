import type { Lang } from "@/lib/i18n";
import { plannerCopy } from "./copy";

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

type WallUnit = {
  id: string;
  country: string;
  title: string;
  local: string;
  l: number;
  w: number;
  h: number;
  wall: number;
};

const wallUnits: WallUnit[] = [
  {
    id: "adi",
    country: "Azərbaycan",
    title: "Adi kərpic",
    local: "kərpic",
    l: 250,
    w: 120,
    h: 65,
    wall: 250,
  },
  {
    id: "birbucaq",
    country: "Azərbaycan",
    title: "Birbuçaqlı kərpic",
    local: "birbuçaqlı kərpic",
    l: 250,
    w: 120,
    h: 88,
    wall: 250,
  },
  {
    id: "ikiqat",
    country: "Azərbaycan",
    title: "İkiqat kərpic",
    local: "ikiqat kərpic",
    l: 250,
    w: 120,
    h: 138,
    wall: 250,
  },
  {
    id: "silikat",
    country: "Azərbaycan",
    title: "Silikat kərpic",
    local: "silikat",
    l: 250,
    w: 120,
    h: 65,
    wall: 250,
  },
  {
    id: "bos",
    country: "Azərbaycan",
    title: "Deşikli kərpic",
    local: "boş kərpic",
    l: 250,
    w: 120,
    h: 138,
    wall: 250,
  },
  {
    id: "qazbeton",
    country: "Azərbaycan",
    title: "Qazbeton blok",
    local: "qazbeton",
    l: 600,
    w: 200,
    h: 300,
    wall: 200,
  },
  {
    id: "tr-harman",
    country: "Türkiyə",
    title: "Harman kərpici",
    local: "tuğla",
    l: 190,
    w: 90,
    h: 50,
    wall: 190,
  },
  {
    id: "tr-delik",
    country: "Türkiyə",
    title: "Deşikli kərpic",
    local: "delikli tuğla",
    l: 190,
    w: 190,
    h: 135,
    wall: 190,
  },
  {
    id: "tr-bims",
    country: "Türkiyə",
    title: "Bims blok",
    local: "bims",
    l: 390,
    w: 190,
    h: 185,
    wall: 190,
  },
  {
    id: "tr-gaz",
    country: "Türkiyə",
    title: "Qazbeton",
    local: "gazbeton",
    l: 600,
    w: 250,
    h: 200,
    wall: 250,
  },
  {
    id: "de-nf",
    country: "Almaniya",
    title: "Normal kərpic",
    local: "Ziegel NF",
    l: 240,
    w: 115,
    h: 71,
    wall: 240,
  },
  {
    id: "de-df",
    country: "Almaniya",
    title: "Nazik kərpic",
    local: "Ziegel DF",
    l: 240,
    w: 115,
    h: 52,
    wall: 115,
  },
  {
    id: "uk",
    country: "Böyük Britaniya",
    title: "Standart kərpic",
    local: "brick",
    l: 215,
    w: 102.5,
    h: 65,
    wall: 215,
  },
  {
    id: "us-brick",
    country: "ABŞ",
    title: "Modul kərpic",
    local: "modular brick",
    l: 194,
    w: 92,
    h: 57,
    wall: 92,
  },
  {
    id: "us-cmu",
    country: "ABŞ",
    title: "Beton blok",
    local: "CMU",
    l: 390,
    w: 190,
    h: 190,
    wall: 190,
  },
  {
    id: "au",
    country: "Avstraliya",
    title: "Standart kərpic",
    local: "brick",
    l: 230,
    w: 110,
    h: 76,
    wall: 110,
  },
  {
    id: "in",
    country: "Hindistan",
    title: "Modul kərpic",
    local: "ईंट",
    l: 190,
    w: 90,
    h: 90,
    wall: 190,
  },
  {
    id: "cn",
    country: "Çin",
    title: "Standart kərpic",
    local: "砖",
    l: 240,
    w: 115,
    h: 53,
    wall: 240,
  },
  {
    id: "ir",
    country: "İran",
    title: "Sıxılmış kərpic",
    local: "آجر",
    l: 220,
    w: 110,
    h: 55,
    wall: 220,
  },
  {
    id: "eg",
    country: "Misir",
    title: "Qırmızı kərpic",
    local: "طوب",
    l: 250,
    w: 120,
    h: 60,
    wall: 120,
  },
  {
    id: "fr-brique",
    country: "Fransa",
    title: "Kərpic",
    local: "brique",
    l: 220,
    w: 105,
    h: 55,
    wall: 220,
  },
  {
    id: "fr-parpaing",
    country: "Fransa",
    title: "Beton blok",
    local: "parpaing",
    l: 500,
    w: 200,
    h: 200,
    wall: 200,
  },
  {
    id: "gulf",
    country: "BƏƏ və Körfəz",
    title: "Beton blok",
    local: "بلوك",
    l: 400,
    w: 200,
    h: 200,
    wall: 200,
  },
];

function unitById(id: string) {
  return wallUnits.find((unit) => unit.id === id);
}

type BuildForm = {
  id: string;
  country: string;
  title: string;
  local: string;
  note: string;
  unit: string;
  roof: "tile" | "steep" | "low" | "flat" | "shingle";
  skin: "brick" | "block" | "wood" | "plaster";
};

const buildForms: BuildForm[] = [
  {
    id: "az-brick",
    country: "Azərbaycan",
    title: "Kərpic hörgü",
    local: "kərpic ev",
    note: "Daşıyıcı kərpic divar, kirəmit dam.",
    unit: "adi",
    roof: "tile",
    skin: "brick",
  },
  {
    id: "az-qaz",
    country: "Azərbaycan",
    title: "Qazbeton",
    local: "qazbeton",
    note: "Blok divar, kirəmit dam.",
    unit: "qazbeton",
    roof: "tile",
    skin: "block",
  },
  {
    id: "tr-karkas",
    country: "Türkiyə",
    title: "Beton karkas",
    local: "betonarme",
    note: "Beton sütun, arası tuğla. Kirəmit dam.",
    unit: "tr-delik",
    roof: "tile",
    skin: "brick",
  },
  {
    id: "de-ziegel",
    country: "Almaniya",
    title: "Dik dam",
    local: "Ziegelhaus",
    note: "Kərpic hörgü, dik kirəmit dam.",
    unit: "de-nf",
    roof: "steep",
    skin: "brick",
  },
  {
    id: "uk-cavity",
    country: "Böyük Britaniya",
    title: "İkiqat divar",
    local: "cavity wall",
    note: "Çöldə kərpic, içəridə blok, arada boşluq.",
    unit: "uk",
    roof: "tile",
    skin: "brick",
  },
  {
    id: "us-wood",
    country: "ABŞ",
    title: "Taxta karkas",
    local: "wood frame",
    note: "Dirəklər 40 sm aralı. Üstü şingl dam.",
    unit: "us-brick",
    roof: "shingle",
    skin: "wood",
  },
  {
    id: "au-veneer",
    country: "Avstraliya",
    title: "Kərpic üzlük",
    local: "brick veneer",
    note: "İçəridə taxta, çöldə bir sıra kərpic.",
    unit: "au",
    roof: "tile",
    skin: "brick",
  },
  {
    id: "fr-parpaing",
    country: "Fransa",
    title: "Beton blok",
    local: "parpaing",
    note: "Blok hörülür, üstü suvaq. Kirəmit dam.",
    unit: "fr-parpaing",
    roof: "tile",
    skin: "plaster",
  },
  {
    id: "in-rcc",
    country: "Hindistan",
    title: "Beton karkas",
    local: "RCC",
    note: "Beton sütun, arası kərpic. Düz dam.",
    unit: "in",
    roof: "flat",
    skin: "brick",
  },
  {
    id: "eg-flat",
    country: "Misir",
    title: "Düz dam",
    local: "طوب",
    note: "Qırmızı kərpic, beton düz dam.",
    unit: "eg",
    roof: "flat",
    skin: "brick",
  },
  {
    id: "gulf-block",
    country: "BƏƏ və Körfəz",
    title: "Beton blok",
    local: "بلوك",
    note: "Blok divar, düz dam, alçaq parapet.",
    unit: "gulf",
    roof: "flat",
    skin: "block",
  },
  {
    id: "cn-brick",
    country: "Çin",
    title: "Kərpic-beton",
    local: "砖混",
    note: "Kərpic və beton. Az mailli dam.",
    unit: "cn",
    roof: "low",
    skin: "brick",
  },
  {
    id: "ir-brick",
    country: "İran",
    title: "Kərpic hörgü",
    local: "آجر",
    note: "Kərpic divar, az mailli dam.",
    unit: "ir",
    roof: "low",
    skin: "brick",
  },
];

function formById(id: string) {
  return buildForms.find((form) => form.id === id) || buildForms[0];
}

const stageDefs: {
  name: string;
  short: string;
  blurb: string;
  parts: string[];
  keys: StageKey[];
}[] = [
  {
    name: "1. Təməl",
    short: "Təməl",
    blurb: "Yalnız beton əsas görünür.",
    parts: ["bottom"],
    keys: [],
  },
  {
    name: "2. Divar",
    short: "Divar",
    blurb: "Divarlar hörülür. Material xərci buradan başlayır.",
    parts: ["bottom", "walls"],
    keys: ["kerpic"],
  },
  {
    name: "3. Otaq",
    short: "Otaq",
    blurb: "Dam yoxdur. Otaqlar yuxarıdan görünür.",
    parts: ["bottom", "walls", "interior"],
    keys: ["kerpic"],
  },
  {
    name: "4. Suvaq",
    short: "Suvaq",
    blurb: "Divar suvanır, döşəmə hazırlanır. Dam hələ açıqdır.",
    parts: ["bottom", "walls", "interior"],
    keys: ["kerpic", "suvaq", "bitirme"],
  },
  {
    name: "5. Dam",
    short: "Dam",
    blurb: "Dam bağlanır. Aşağıdakı məbləğ tam smetadır.",
    parts: ["bottom", "walls", "roof", "interior"],
    keys: ["kerpic", "suvaq", "bitirme"],
  },
];

function must<T extends Element = HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Nibras Planner: #${id} tapılmadı`);
  return el as unknown as T;
}

export function mountPlanner(root: HTMLElement, lang: Lang = "az"): () => void {
  const copy = plannerCopy(lang);
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

  const applyWallThickness = (mm: number) => {
    const thick = must<HTMLSelectElement>("divarQalinliq");
    const match = Array.from(thick.options).some((option) => option.value === String(mm));
    if (match) {
      thick.value = String(mm);
      must("qalinliqFerdi").style.display = "none";
    } else {
      thick.value = "ferdi";
      must<HTMLInputElement>("qalinliqFerdi").value = String(mm);
      must("qalinliqFerdi").style.display = "block";
    }
  };
  const refreshUnitNote = () => {
    const unit = unitById(must<HTMLSelectElement>("kerpicSecim").value);
    must("unitDims").classList.toggle("hidden", Boolean(unit));
    must("unitNote").textContent = unit
      ? copy.unitNote(copy.country(unit.country), unit.local, unit.wall)
      : copy.customSizeHint;
    if (document.getElementById("evForm")) refreshFormNote();
  };
  const fillUnitSelect = () => {
    const sel = must<HTMLSelectElement>("kerpicSecim");
    const current = sel.value || "adi";
    sel.innerHTML = "";
    const groups: string[] = [];
    for (const unit of wallUnits) {
      if (!groups.includes(unit.country)) groups.push(unit.country);
    }
    for (const country of groups) {
      const group = document.createElement("optgroup");
      group.label = copy.country(country);
      for (const unit of wallUnits.filter((item) => item.country === country)) {
        const option = document.createElement("option");
        option.value = unit.id;
        option.textContent = `${unit.local} · ${copy.unitTitle(unit.id, unit.title)} — ${unit.l}×${unit.w}×${unit.h}`;
        group.appendChild(option);
      }
      sel.appendChild(group);
    }
    const custom = document.createElement("option");
    custom.value = "ferdi";
    custom.textContent = copy.customUnit;
    sel.appendChild(custom);
    sel.value = unitById(current) || current === "ferdi" ? current : "adi";
  };
  const kerpicSecimDeyisdi = () => {
    const secim = must<HTMLSelectElement>("kerpicSecim").value;
    refreshUnitNote();
    if (secim === "ferdi") return;
    const unit = unitById(secim);
    if (!unit) return;
    must<HTMLInputElement>("kUzun").value = String(unit.l);
    must<HTMLInputElement>("kEn").value = String(unit.w);
    must<HTMLInputElement>("kHund").value = String(unit.h);
    applyWallThickness(unit.wall);
    hesabla();
  };
  const refreshFormNote = () => {
    const form = formById(must<HTMLSelectElement>("evForm").value);
    must("formNote").textContent = `${copy.country(form.country)} — ${copy.localName}: ${form.local}. ${copy.formNote(form.id, form.note)}`;
    const priceLabel = root.querySelector('label[for="qKerpic"]');
    if (priceLabel) {
      priceLabel.textContent = form.skin === "wood" ? copy.studPrice : copy.piecePrice;
    }
  };
  const fillFormSelect = () => {
    const sel = must<HTMLSelectElement>("evForm");
    const current = sel.value || "az-brick";
    sel.innerHTML = "";
    for (const form of buildForms) {
      const option = document.createElement("option");
      option.value = form.id;
      option.textContent = `${copy.country(form.country)} — ${copy.formTitle(form.id, form.title)}`;
      sel.appendChild(option);
    }
    sel.value = buildForms.some((form) => form.id === current) ? current : "az-brick";
  };
  const formaDeyisdi = () => {
    const form = formById(must<HTMLSelectElement>("evForm").value);
    const price = must<HTMLInputElement>("qKerpic");
    if (form.skin === "wood" && price.value === "0.35") price.value = "3.5";
    if (form.skin !== "wood" && price.value === "3.5") price.value = "0.35";
    must<HTMLSelectElement>("kerpicSecim").value = form.unit;
    kerpicSecimDeyisdi();
  };
  const qalinliqDeyisdi = () => {
    const val = must<HTMLSelectElement>("divarQalinliq").value;
    must("qalinliqFerdi").style.display = val === "ferdi" ? "block" : "none";
    hesabla();
  };

  let rotX = -18;
  let rotY = 208;
  let zoomScale = 1.12;
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
    const text = copy.stages[stage - 1];
    const sum = def.keys.reduce((s, key) => s + (stageCosts[key] || 0), 0);
    must("fiveCostAmt").textContent = sum.toFixed(2);
    must("sceneBadge").textContent = `${stage}/5 · ${text.short}`;
    const note = stage <= 1 ? copy.noteFoundation : stage === 5 ? copy.noteRoof : "";
    must("stageLabel").innerHTML =
      `<b>${text.name}</b> — ${text.blurb}<br>${copy.upTo}: <b>${sum.toFixed(2)} AZN</b>` +
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
    const finish = stageNow >= 4;
    const form = formById(must<HTMLSelectElement>("evForm").value);
    const sky = must<HTMLInputElement>("skyId").value || "day";
    must("scene").dataset.sky = sky;
    root.querySelectorAll<HTMLElement>("#skyPicks [data-sky]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.sky === sky);
    });
    const wallHi = sky === "night" ? "#b7b2a8" : sky === "dusk" ? "#f3d2ae" : "#fffdf8";
    const wallLo = sky === "night" ? "#7e7a72" : sky === "dusk" ? "#e4b48a" : "#efe2cc";
    const baseH = Math.max(9, hp * 0.14);
    const plasterOf = (hi: string, lo: string, shade: string) =>
      `background:` +
      `linear-gradient(#8d8680,#8d8680) bottom/100% ${baseH}px no-repeat,` +
      `linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px) bottom/${Math.max(18, baseH)}px ${baseH}px no-repeat,` +
      `radial-gradient(circle at 16% 20%,rgba(255,255,255,.28),transparent 22%),` +
      `linear-gradient(100deg,${shade},transparent 28%),` +
      `linear-gradient(180deg,${hi},${lo});` +
      `border:none;`;
    const plaster = plasterOf(wallHi, wallLo, "rgba(255,255,255,.2)");
    const plasterShade = plasterOf(
      sky === "night" ? "#8e8a84" : "#e4d5be",
      sky === "night" ? "#6a6660" : "#c9b496",
      "rgba(40,24,10,.18)",
    );
    const siding =
      "background:repeating-linear-gradient(#e7d3ae 0 12px,#c49a68 12px 14px,#d7bc90 14px 26px);border:none;";
    const blockSkin = (color: string) =>
      `background-color:${color};background-image:linear-gradient(rgba(255,255,255,.28) 0 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.16) 1px,transparent 1px);background-size:100% ${Math.max(16, kH * scale * 0.35)}px,${Math.max(22, kL * scale * 0.28)}px 100%;border:none;`;
    const rendered = (finish && form.skin !== "wood") || form.skin === "plaster";
    const texFront = rendered
      ? plaster
      : form.skin === "wood"
        ? siding
        : form.skin === "block"
          ? blockSkin("#c8bba8")
          : brickTexture(scale, kL, kH, tikis, "#c4653e");
    const texSide = rendered
      ? plasterShade
      : form.skin === "wood"
        ? siding
        : form.skin === "block"
          ? blockSkin("#a89886")
          : brickTexture(scale, kL, kH, tikis, "#8d4328");
    const texBack = rendered
      ? plasterShade
      : form.skin === "wood"
        ? siding
        : form.skin === "block"
          ? blockSkin("#9a8b7a")
          : brickTexture(scale, kL, kH, tikis, "#7a3b24");
    cube.querySelectorAll(".iface, .ext-wall, .roof-bit, .lawn").forEach((el) => el.remove());
    const roomsNow = Math.max(1, Math.round(roomCount) || 1);
    if (roomsNow !== planState.n) resetPlanGrid(roomsNow);

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
      const win = Math.min(full * 0.2, Math.max(18, 1.15 * scale));
      const door = Math.min(full * 0.22, Math.max(20, 0.95 * scale));
      const user = planState.items[id];
      if (user?.type === "door" && full > win * 2 + door) {
        return [
          { offset: 0.18, widthPx: win, kind: "window" },
          {
            offset: user.offset ?? 0.5,
            widthPx: Math.min(full * 0.28, Math.max(18, user.width * scale)),
            kind: "door",
            entrance: user.isEntrance,
            heightM: user.height,
          },
          { offset: 0.82, widthPx: win, kind: "window" },
        ];
      }
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
      wash = "linear-gradient(transparent,transparent)",
    ) => {
      const mk = (left: number, w: number, h: number, top: number, style: string, proud = "") => {
        const d = document.createElement("div");
        d.className = "face ext-wall";
        d.style.cssText = `width:${w}px;height:${h}px;left:${baseLeft + left}px;top:${top}px;transform:${transform}${proud};${bwStyle}${style}`;
        cube.appendChild(d);
      };
      mk(0, full, hp, 0, tex);
      // realism: soft shadow under the eaves, ground contact darkening and a light/shade wash
      mk(
        0,
        full,
        hp,
        0,
        `background:linear-gradient(180deg,rgba(25,12,4,${sky === "night" ? 0.4 : 0.34}) 0,rgba(25,12,4,.12) ${Math.max(10, hp * 0.1)}px,transparent ${Math.max(26, hp * 0.26)}px),linear-gradient(0deg,rgba(20,14,6,.28) 0,transparent ${Math.max(10, hp * 0.12)}px),${wash};border:none;pointer-events:none;`,
        " translateZ(0.5px)",
      );
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
          const t = Math.max(3, Math.min(6, hole.widthPx * 0.08));
          const frame =
            "background:linear-gradient(#fff,#e9e3d8);border:none;box-shadow:0 2px 3px rgba(40,24,10,.45),1px 0 2px rgba(40,24,10,.3);";
          const glass =
            sky === "night"
              ? "background:linear-gradient(180deg,#ffe7b0,#ffb15a);box-shadow:0 0 10px rgba(255,170,60,.8);border:none;"
              : "background:linear-gradient(115deg,rgba(255,255,255,.85),rgba(255,255,255,0) 38%),linear-gradient(180deg,rgba(0,0,0,.28),transparent 24%),linear-gradient(180deg,#e9f5fc 0%,#8dbad3 46%,#c4e0ef 47%,#6b9dbb);box-shadow:inset 0 3px 4px rgba(0,0,0,.35);border:none;";
          mk(left - 1, hole.widthPx + 2, t, top - 1, frame, " translateZ(2.4px)");
          mk(left - 1, hole.widthPx + 2, t, top + h - t, frame, " translateZ(2.4px)");
          mk(left - 1, t, h, top, frame, " translateZ(2.4px)");
          mk(left + hole.widthPx - t, t, h, top, frame, " translateZ(2.4px)");
          mk(left + t, hole.widthPx - t * 2, h - t * 2, top + t, glass, " translateZ(1.2px)");
          mk(left + hole.widthPx / 2 - 1, 2, h - t * 2, top + t, frame, " translateZ(1.8px)");
          mk(left + t, hole.widthPx - t * 2, 2, top + h * 0.46, frame, " translateZ(1.8px)");
          mk(
            left - 3,
            hole.widthPx + 6,
            Math.max(4, t + 1),
            top + h - 2,
            "background:linear-gradient(#fff,#d9cbb6);border:none;border-radius:1px;",
            " translateZ(3.4px)",
          );
        } else {
          const h = hole.heightM
            ? Math.max(20, Math.min(hp * 0.94, (hole.heightM / Math.max(H, 0.1)) * hp))
            : Math.max(20, hp * 0.66);
          const top = hp - h;
          const frame = "background:#f3eee6;border:none;box-shadow:0 2px 3px rgba(40,24,10,.45);";
          mk(left - 3, hole.widthPx + 6, 5, top - 4, frame, " translateZ(2.6px)");
          mk(left - 3, 4, h + 4, top - 4, frame, " translateZ(2.6px)");
          mk(left + hole.widthPx - 1, 4, h + 4, top - 4, frame, " translateZ(2.6px)");
          mk(left, hole.widthPx, h, top, doorSkin(Boolean(hole.entrance)), " translateZ(1.8px)");
          mk(
            left + hole.widthPx * 0.78,
            3,
            3,
            top + h * 0.48,
            "background:radial-gradient(circle,#f0d48a,#b08a3e);border:none;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.5);",
            " translateZ(2.8px)",
          );
        }
      }
    };

    const lit = sky === "night" ? 0.05 : 0.14;
    const washFront = `linear-gradient(105deg,rgba(255,244,214,${lit}),transparent 55%)`;
    const washDark = (a: number) =>
      `linear-gradient(90deg,rgba(20,16,30,${a}),rgba(20,16,30,${a / 3}))`;
    addWall("ext-N", lp, texBack, `translateZ(${wp / 2}px)`, 0, washDark(0.16));
    addWall("ext-S", lp, texFront, `rotateY(180deg) translateZ(${wp / 2}px)`, 0, washFront);
    addWall(
      "ext-E",
      wp,
      texSide,
      `rotateY(90deg) translateZ(${lp / 2}px)`,
      lp / 2 - wp / 2,
      washDark(0.1),
    );
    addWall(
      "ext-W",
      wp,
      texSide,
      `rotateY(-90deg) translateZ(${lp / 2}px)`,
      lp / 2 - wp / 2,
      washDark(0.28),
    );

    const eave = Math.max(10, bw + 4);
    const rise =
      form.roof === "flat"
        ? 0
        : form.roof === "steep"
          ? Math.max(40, wp * 0.58)
          : form.roof === "low"
            ? Math.max(16, wp * 0.16)
            : form.roof === "shingle"
              ? Math.max(22, wp * 0.28)
              : Math.max(26, wp * 0.34);
    const addBit = (css: string) => {
      const d = document.createElement("div");
      d.className = "face roof-bit";
      d.style.cssText = css;
      cube.appendChild(d);
    };
    if (form.roof === "flat") {
      const slab = Math.max(7, hp * 0.04);
      addBit(
        `width:${lp + 10}px;height:${wp + 10}px;left:-5px;top:${hp / 2 - (wp + 10) / 2}px;transform:rotateX(90deg) translateZ(${hp / 2 + slab}px);background:linear-gradient(#ddd6cb,#b7b1a6);border:none;`,
      );
      const ph = Math.max(12, hp * 0.07);
      const para = "background:#d5cfc3;border:none;";
      addBit(`width:${lp}px;height:${ph}px;top:${-ph}px;transform:translateZ(${wp / 2}px);${para}`);
      addBit(
        `width:${lp}px;height:${ph}px;top:${-ph}px;transform:rotateY(180deg) translateZ(${wp / 2}px);${para}`,
      );
      addBit(
        `width:${wp}px;height:${ph}px;left:${lp / 2 - wp / 2}px;top:${-ph}px;transform:rotateY(90deg) translateZ(${lp / 2}px);${para}`,
      );
      addBit(
        `width:${wp}px;height:${ph}px;left:${lp / 2 - wp / 2}px;top:${-ph}px;transform:rotateY(-90deg) translateZ(${lp / 2}px);${para}`,
      );
    } else {
      const run = wp / 2 + eave;
      const slopeLen = Math.hypot(run, rise);
      const pitch = (Math.atan2(rise, run) * 180) / Math.PI;
      const rot = 90 - pitch;
      const tile =
        form.roof === "shingle"
          ? "background-color:#5e646c;background-image:linear-gradient(90deg,rgba(0,0,0,.22) 1px,transparent 1px),repeating-linear-gradient(180deg,#8b929a 0 2px,#5a6168 3px 8px,#6d747c 9px 11px);background-size:26px 100%,100% 12px;border:none;box-shadow:inset 0 -10px 14px rgba(0,0,0,.25);"
          : "background-color:#8d3a2a;background-image:linear-gradient(90deg,rgba(0,0,0,.2) 1px,transparent 1px),repeating-linear-gradient(180deg,#d06a4e 0 2px,#8a3426 3px 8px,#b5523c 9px 13px);background-size:22px 100%,100% 14px;border:none;box-shadow:inset 0 -14px 16px rgba(40,10,6,.3);";
      const addRoof = (transform: string, light: string) => {
        const geo = `width:${lp + eave * 2}px;height:${slopeLen}px;left:${-eave}px;top:${-slopeLen}px;transform-origin:center bottom;`;
        addBit(`${geo}transform:${transform};${tile}`);
        addBit(
          `${geo}transform:${transform} translateZ(0.6px);pointer-events:none;background:linear-gradient(180deg,rgba(255,255,255,.12),transparent 30%),linear-gradient(0deg,rgba(0,0,0,.3),transparent 14%),${light};border:none;`,
        );
      };
      addRoof(
        `translateZ(${wp / 2 + eave}px) rotateX(${rot}deg)`,
        `linear-gradient(100deg,rgba(255,236,190,${sky === "night" ? 0.04 : 0.16}),transparent 60%)`,
      );
      addRoof(
        `translateZ(${-(wp / 2 + eave)}px) rotateX(${-rot}deg)`,
        "linear-gradient(90deg,rgba(15,10,30,.32),rgba(15,10,30,.18))",
      );
      // ridge cap + fascia boards for a finished roof edge
      const cap = "background:linear-gradient(90deg,#6b2a1e,#9a4230 50%,#6b2a1e);border:none;";
      addBit(
        `width:${lp + eave * 2}px;height:5px;left:${-eave}px;top:${-rise - 3}px;transform:translateZ(0.5px);${cap}`,
      );
      addBit(
        `width:${lp + eave * 2}px;height:5px;left:${-eave}px;top:${-rise - 3}px;transform:rotateY(180deg) translateZ(0.5px);${cap}`,
      );
      const fascia = "background:linear-gradient(#f4efe6,#cfc6b6);border:none;";
      const fh = Math.max(4, hp * 0.03);
      addBit(
        `width:${lp + eave * 2}px;height:${fh}px;left:${-eave}px;top:${-fh}px;transform:translateZ(${wp / 2 + eave}px);${fascia}`,
      );
      addBit(
        `width:${lp + eave * 2}px;height:${fh}px;left:${-eave}px;top:${-fh}px;transform:rotateY(180deg) translateZ(${wp / 2 + eave}px);${fascia}`,
      );
      const gableTex =
        form.skin === "wood"
          ? siding
          : finish
            ? plaster
            : brickTexture(scale, kL, kH, tikis, "#9a4a30");
      const addGable = (transform: string) => {
        addBit(
          `width:${wp}px;height:${rise}px;left:${lp / 2 - wp / 2}px;top:${-rise}px;transform:${transform};clip-path:polygon(2% 100%,50% 4%,98% 100%);${gableTex}border:none;`,
        );
      };
      addGable(`rotateY(90deg) translateZ(${lp / 2 - 3}px)`);
      addGable(`rotateY(-90deg) translateZ(${lp / 2 - 3}px)`);
      if (form.roof === "tile" || form.roof === "steep") {
        const cw = Math.max(12, lp * 0.07);
        const cd = Math.max(10, wp * 0.12);
        const ch = Math.max(20, rise * 0.55);
        const cx = lp * 0.62;
        const sink = Math.round(rise * 0.18);
        const chimneyBrick = `${brickTexture(scale, kL, kH, tikis, "#6e3424")}box-shadow:inset 0 -8px 10px rgba(0,0,0,.25);`;
        addBit(
          `width:${cw}px;height:${ch}px;left:${cx}px;top:${-rise - ch + sink}px;transform:translateZ(${cd / 2}px);${chimneyBrick}border:none;`,
        );
        addBit(
          `width:${cw}px;height:${ch}px;left:${cx}px;top:${-rise - ch + sink}px;transform:rotateY(180deg) translateZ(${cd / 2}px);${chimneyBrick}border:none;`,
        );
        addBit(
          `width:${cd}px;height:${ch}px;left:${cx + cw / 2 - cd / 2}px;top:${-rise - ch + sink}px;transform:rotateY(90deg) translateZ(${cw / 2}px);${chimneyBrick}border:none;`,
        );
        addBit(
          `width:${cd}px;height:${ch}px;left:${cx + cw / 2 - cd / 2}px;top:${-rise - ch + sink}px;transform:rotateY(-90deg) translateZ(${cw / 2}px);${chimneyBrick}border:none;`,
        );
      }
    }

    const floor = finish
      ? "background-color:#e4cfaa;background-image:linear-gradient(rgba(110,70,30,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(110,70,30,.22) 1px,transparent 1px);background-size:18px 18px;border:none;"
      : stageNow >= 3
        ? "background:linear-gradient(160deg,#f3e2c4,#d7b98a);border:none;"
        : "background:linear-gradient(160deg,#d5d0c8,#9a958d);border:none;";
    must("f-bottom").style.cssText =
      `width:${lp}px;height:${wp}px;top:${hp / 2 - wp / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2}px);${floor}`;
    const plinth = Math.max(6, hp * 0.045);
    const groundZ = hp / 2 + plinth + 1;
    must("f-plinth").style.cssText =
      `width:${lp + 18}px;height:${wp + 18}px;left:-9px;top:${hp / 2 - (wp + 18) / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2 + plinth}px);border:none;background:linear-gradient(180deg,#b7b1a6,#6f6a64);`;
    const gw = 1600;
    const gd = 1200;
    const site = (css: string) => {
      const d = document.createElement("div");
      d.className = "face lawn";
      d.style.cssText = css;
      cube.appendChild(d);
    };
    site(
      `width:${gw}px;height:${gd}px;left:${(lp - gw) / 2}px;top:${hp / 2 - gd / 2}px;` +
        `transform:rotateX(-90deg) translateZ(${groundZ}px);border:none;` +
        `-webkit-mask-image:radial-gradient(closest-side,#000 62%,transparent);mask-image:radial-gradient(closest-side,#000 62%,transparent);` +
        `background:` +
        (sky === "snow"
          ? `radial-gradient(ellipse at 30% 40%,rgba(255,255,255,.7),transparent 40%),linear-gradient(165deg,#ffffff,#e4edf5 55%,#d5e1ec);`
          : sky === "night"
            ? `radial-gradient(ellipse at 40% 45%,rgba(0,0,0,.2),transparent 46%),linear-gradient(165deg,#2a5a40,#173628 60%,#10241a);`
            : sky === "dusk"
              ? `radial-gradient(ellipse at 36% 40%,rgba(255,200,120,.12),transparent 40%),linear-gradient(165deg,#7d9456,#4a6236 52%,#314628);`
              : `radial-gradient(ellipse at 32% 42%,rgba(255,255,255,.12),transparent 36%),radial-gradient(ellipse at 70% 60%,rgba(20,40,8,.14),transparent 42%),linear-gradient(165deg,#b6e278,#5c9e40 48%,#3b7a2e);`),
    );
    site(
      `width:${lp * 1.4}px;height:${wp * 1.5}px;left:${(lp - lp * 1.4) / 2}px;top:${hp / 2 - (wp * 1.5) / 2}px;` +
        `transform:rotateX(-90deg) translateZ(${groundZ - 1.2}px);border:none;` +
        `background:radial-gradient(ellipse at center,rgba(20,16,10,.32),rgba(20,16,10,0) 70%);`,
    );
    const pathW = Math.max(18, lp * 0.15);
    const pathL = Math.max(78, wp);
    site(
      `width:${pathW}px;height:${pathL}px;left:${(lp - pathW) / 2}px;top:${hp / 2 - pathL / 2}px;` +
        `transform:rotateX(-90deg) translateZ(${groundZ - 2}px) translateY(${wp / 2 + pathL / 2 - 10}px);border:none;border-radius:10px;` +
        `background:${sky === "snow" ? "linear-gradient(#f4f7fb,#d5dee8)" : sky === "night" ? "linear-gradient(#3c4438,#2a3128)" : "linear-gradient(#f3e6c8,#c9b08a)"};`,
    );
    const tree = (x: number, z: number, tall: number) => {
      const th = Math.max(20, hp * tall);
      const crown = Math.max(30, th * 0.95);
      site(
        `width:7px;height:${th}px;left:${x}px;top:${hp - th}px;transform:translateZ(${z}px);background:linear-gradient(#8d5a34,#4e311c);border:none;border-radius:3px;`,
      );
      site(
        `width:${crown}px;height:${crown}px;left:${x - crown / 2 + 3}px;top:${hp - th - crown * 0.46}px;transform:translateZ(${z}px);background:radial-gradient(circle at 40% 38%,#def6a4,#3e8c32 60%,#1c541e);border:none;border-radius:50%;`,
      );
      site(
        `width:${crown * 0.82}px;height:${crown * 0.7}px;left:${x - crown * 0.32}px;top:${hp - th - crown * 0.2}px;transform:translateZ(${z}px) rotateY(80deg);background:radial-gradient(circle at 50% 40%,#b6dc70,#2a6e26 66%,#163e16);border:none;border-radius:50%;`,
      );
    };
    // soft cast shadows on the ground for the trees
    const treeShadow = (x: number, z: number, size: number) =>
      site(
        `width:${size * 1.5}px;height:${size * 0.8}px;left:${x - size * 0.6}px;top:${hp / 2 - (size * 0.8) / 2}px;transform:rotateX(-90deg) translateZ(${groundZ - 1.5}px) translateY(${-z + size * 0.1}px);border:none;background:radial-gradient(ellipse,rgba(10,20,6,.38),transparent 70%);`,
      );
    treeShadow(-78, wp * 0.55, Math.max(30, hp * 0.66 * 0.95));
    treeShadow(lp + 52, wp * 0.1, Math.max(30, hp * 0.82 * 0.95));
    // low shrubs along the front wall
    const bush = (x: number, z: number, size: number) => {
      const bgc =
        "background:radial-gradient(circle at 38% 32%,#bde27a,#4c8f38 58%,#1f5a22);border:none;border-radius:50%;";
      site(
        `width:${size}px;height:${size * 0.8}px;left:${x - size / 2}px;top:${hp - size * 0.8}px;transform:translateZ(${z}px);${bgc}`,
      );
      site(
        `width:${size}px;height:${size * 0.8}px;left:${x - size / 2}px;top:${hp - size * 0.8}px;transform:translateZ(${z}px) rotateY(75deg);${bgc}`,
      );
    };
    const bs = Math.max(24, Math.min(56, hp * 0.3));
    bush(lp * 0.1, -(wp / 2 + bs * 0.5), bs);
    bush(lp * 0.9, -(wp / 2 + bs * 0.5), bs * 1.1);
    bush(lp * 0.34, -(wp / 2 + bs * 0.4), bs * 0.8);
    tree(-78, wp * 0.55, 0.66);
    tree(lp + 52, wp * 0.1, 0.82);

    const n = Math.max(1, Math.round(roomCount) || 1);
    if (n !== planState.n) resetPlanGrid(n);
    const iw = Math.max(2, bw * 0.55);
    const openRooms = stageNow === 3;
    const interiorH = openRooms ? Math.max(22, hp * 0.55) : hp;
    const interiorTop = hp - interiorH;
    const texIn = openRooms
      ? "background:linear-gradient(180deg,#f6efe2,#d7b48a);box-shadow:inset 0 0 0 3px #8a5a32;border:none;"
      : "background:#e7dcc8;box-shadow:inset 0 0 0 2px rgba(0,0,0,.12);border:none;";
    const rows = planState.rowFracs.length - 1;
    for (let j = 1; j < rows; j++) {
      const dz = planState.rowFracs[j] * wp - wp / 2;
      const d = document.createElement("div");
      d.className = "face iface";
      d.style.cssText = `width:${lp}px;height:${interiorH}px;top:${interiorTop}px;transform:translateZ(${dz}px);border-width:${iw}px;${texIn}`;
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
      d.style.cssText = `width:${wp}px;height:${interiorH}px;top:${interiorTop}px;left:${lp / 2 - wp / 2}px;transform:rotateY(90deg) translateZ(${dx}px);border-width:${iw}px;${texIn}`;
      cube.appendChild(d);
    });

    must("dimsLabel").innerHTML = copy.dims(L || 0, W || 0, H || 0, n);
  };

  const wallTitle = (id: string) => copy.wall(id);
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
        html += `<text x="${(x0 + x1) / 2}" y="${(y0 + y1) / 2 - fs * 0.4}" text-anchor="middle" font-size="${fs}" fill="var(--text)" font-weight="600">${copy.room(roomNo)}</text>`;
        html += `<text x="${(x0 + x1) / 2}" y="${(y0 + y1) / 2 + fs * 0.9}" text-anchor="middle" font-size="${fs * 0.85}" fill="var(--muted)">${areaM2.toFixed(1)} m²</text>`;
        roomNo++;
      }
    }

    const wallGeom: Record<string, WallGeom> = {};
    const hits: string[] = [];
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
      const nx = vbW / 2 - (x0 + x1) / 2;
      const ny = vbH / 2 - (y0 + y1) / 2;
      const nlen = Math.hypot(nx, ny) || 1;
      const ix = (nx / nlen) * Math.max(10, thick * 2.2);
      const iy = (ny / nlen) * Math.max(10, thick * 2.2);
      const hit = `<line data-drag-item="${id}" x1="${x0 + ix}" y1="${y0 + iy}" x2="${x1 + ix}" y2="${y1 + iy}" stroke="rgba(0,0,0,0.015)" stroke-width="${Math.max(22, thick * 6)}" stroke-linecap="round" style="cursor:grab;"/>`;
      if (!item) {
        hits.push(
          `<line data-wall="${id}" x1="${x0 + ix}" y1="${y0 + iy}" x2="${x1 + ix}" y2="${y1 + iy}" stroke="rgba(0,0,0,0.015)" stroke-width="${Math.max(22, thick * 6)}" stroke-linecap="round" style="cursor:pointer;"/>`,
        );
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
      hits.push(hit);
      return (
        `<line data-wall="${id}" x1="${x0}" y1="${y0}" x2="${gx0}" y2="${gy0}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/>` +
        `<line data-wall="${id}" x1="${gx1}" y1="${gy1}" x2="${x1}" y2="${y1}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/>` +
        `<line data-drag-item="${id}" x1="${gx0}" y1="${gy0}" x2="${gx1}" y2="${gy1}" stroke="${color}" stroke-width="${thick * 1.8}" stroke-linecap="round" style="cursor:grab;"/>` +
        `<text data-drag-item="${id}" x="${midX + ix}" y="${midY + iy}" text-anchor="middle" dominant-baseline="middle" font-size="${thick * 3.2}" style="cursor:grab;">${icon}</text>`
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
    html += hits.join("");
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
      event.preventDefault();
      let activeId = (event.currentTarget as SVGElement).dataset.dragItem || "";
      if (!planState.items[activeId] || !planState._wallGeom[activeId]) return;
      const ev0 = event as PointerEvent;
      const startX = ev0.clientX;
      const startY = ev0.clientY;
      let moved = false;
      svg.setPointerCapture(ev0.pointerId);
      const toSvg = (ev: PointerEvent) => {
        const rect = svg.getBoundingClientRect();
        const vb = svg.viewBox.baseVal;
        return {
          px: ((ev.clientX - rect.left) / Math.max(rect.width, 1)) * vb.width,
          py: ((ev.clientY - rect.top) / Math.max(rect.height, 1)) * vb.height,
          reach: Math.min(vb.width, vb.height) * 0.22,
        };
      };
      const project = (id: string, px: number, py: number) => {
        const g = planState._wallGeom[id];
        const dx = g.x1 - g.x0;
        const dy = g.y1 - g.y0;
        const len2 = dx * dx + dy * dy || 1;
        const t = Math.max(0.06, Math.min(0.94, ((px - g.x0) * dx + (py - g.y0) * dy) / len2));
        const x = g.x0 + dx * t;
        const y = g.y0 + dy * t;
        return { t, dist: Math.hypot(px - x, py - y) };
      };
      const onMove = (ev: PointerEvent) => {
        if (Math.abs(ev.clientX - startX) > 3 || Math.abs(ev.clientY - startY) > 3) moved = true;
        const current = planState.items[activeId];
        if (!current) return;
        const { px, py, reach } = toSvg(ev);
        let bestId = activeId;
        let best = project(activeId, px, py);
        for (const id of Object.keys(planState._wallGeom)) {
          const cand = project(id, px, py);
          if (cand.dist < best.dist) {
            best = cand;
            bestId = id;
          }
        }
        if (bestId !== activeId && best.dist < reach) {
          const other = planState.items[bestId];
          if (other) planState.items[activeId] = { ...other, offset: current.offset };
          else delete planState.items[activeId];
          planState.items[bestId] = { ...current, offset: best.t };
          activeId = bestId;
        } else {
          current.offset = project(activeId, px, py).t;
        }
        renderFloorPlan(planState.Lm, planState.Wm, planState.n, currentWallMm());
      };
      const onUp = () => {
        svg.removeEventListener("pointermove", onMove);
        svg.removeEventListener("pointerup", onUp);
        if (!moved) openWallEditor(activeId);
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
      if (item.type === "door") {
        const wallLen = id === "ext-N" || id === "ext-S" ? L : W;
        if (wallLen > 5) openingArea += 1.2 * 1.2 * 2;
      }
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
      const form = formById(must<HTMLSelectElement>("evForm").value);
      const unit = unitById(must<HTMLSelectElement>("kerpicSecim").value);
      let brickCost = 0;
      if (form.skin === "wood") {
        const studs = Math.max(8, Math.ceil((2 * (L + W)) / 0.4));
        const boards = studs + Math.ceil((2 * (L + W)) / 2.4) * 3;
        brickCost = boards * brickPrice;
        lines.push([copy.studLine(boards.toLocaleString(copy.locale)), brickCost]);
      } else {
        const piece = unit ? unit.local : copy.element;
        brickCost = brickCount * brickPrice;
        lines.push([copy.pieceLine(piece, brickCount.toLocaleString(copy.locale), layers), brickCost]);
      }
      total += brickCost;
      stageCosts.kerpic = brickCost;
    } else stageCosts.kerpic = 0;

    if (must<HTMLInputElement>("c-sement").checked) {
      const qty = Math.ceil(netWall * (parseFloat(must<HTMLInputElement>("p-sement").value) || 0));
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-sement").value) || 0);
      total += cost;
      lines.push([copy.cementLine(qty), cost]);
      stageCosts.suvaq = cost;
    }
    if (must<HTMLInputElement>("c-boya").checked) {
      const qty =
        Math.round(netWall * (parseFloat(must<HTMLInputElement>("p-boya").value) || 0) * 10) / 10;
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-boya").value) || 0);
      total += cost;
      lines.push([copy.paintLine(qty), cost]);
      stageCosts.bitirme += cost;
    }
    if (must<HTMLInputElement>("c-kafel").checked) {
      const qty =
        Math.round(floorArea * (parseFloat(must<HTMLInputElement>("p-kafel").value) || 0) * 10) /
        10;
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-kafel").value) || 0);
      total += cost;
      lines.push([copy.floorLine(qty), cost]);
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
      copy.wallChip(netWall.toFixed(1)),
      copy.floorChip(floorArea.toFixed(1)),
      openingArea > 0 ? copy.openChip(openingArea.toFixed(1)) : copy.noOpen,
    ];
    must("qtyChips").innerHTML = chips.map((text) => `<span>${text}</span>`).join("");
    updateStageDisplay();
    refreshUnitNote();
    if (allowSave) persist();
  };

  const smetaText = () => {
    const title = copy.estimateTitle;
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
      btn.textContent = copy.copied;
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
  root.querySelectorAll<HTMLElement>("#skyPicks [data-sky]").forEach((btn) => {
    on(btn, "pointerdown", (event) => event.stopPropagation());
    on(btn, "click", () => {
      must<HTMLInputElement>("skyId").value = btn.dataset.sky || "day";
      hesabla();
    });
  });
  root.querySelectorAll<HTMLElement>("#stageRail [data-stage]").forEach((btn) => {
    on(btn, "click", () => {
      const slider = must<HTMLInputElement>("stageSlider");
      const next = btn.dataset.stage || "5";
      slider.value = next;
      if (next === "3") {
        rotX = -52;
        rotY = 36;
      } else if (next === "5") {
        rotX = -20;
        rotY = 208;
      }
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
  on(must("evForm"), "change", formaDeyisdi);
  fillUnitSelect();
  fillFormSelect();
  refreshUnitNote();
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
