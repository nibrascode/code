type GapKind = "door" | "window";

type PlanItem = {
  type: GapKind;
  width: number;
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

const stageDefs: { name: string; parts: string[]; keys: StageKey[] }[] = [
  { name: "1/5 — Təməl", parts: ["bottom"], keys: [] },
  { name: "2/5 — Divarlar (kərpic hörgüsü)", parts: ["bottom", "walls"], keys: ["kerpic"] },
  { name: "3/5 — Dam", parts: ["bottom", "walls", "roof"], keys: ["kerpic"] },
  {
    name: "4/5 — Otaq bölmələri (suvaq)",
    parts: ["bottom", "walls", "roof", "interior"],
    keys: ["kerpic", "suvaq"],
  },
  {
    name: "5/5 — Bitirmə (boya, kafel)",
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
  };
  const yeniLayihe = () => {
    home.classList.add("hidden");
    project.classList.remove("hidden");
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
    if (autoSpin && !dragging && activePointers.size === 0) rotY += 0.12;
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
    const mortar = "#d8c3a5";
    return (
      `background-color:${shade};` +
      `background-image:linear-gradient(${mortar} ${j}px,transparent ${j}px),` +
      `linear-gradient(90deg,${mortar} ${j}px,transparent ${j}px),` +
      `linear-gradient(90deg,${mortar} ${j}px,transparent ${j}px);` +
      `background-size:100% ${courseH}px,${bw + j}px ${courseH * 2}px,${bw + j}px ${courseH * 2}px;` +
      `background-position:0 0,0 0,${(bw + j) / 2}px ${courseH}px;`
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
    planState.items = {};
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
    cube.querySelectorAll<HTMLElement>(".ext-wall").forEach((el) => {
      el.style.opacity = show("walls") ? "1" : "0";
    });
    must("f-top").style.opacity = show("roof") ? "1" : "0";
    cube.querySelectorAll<HTMLElement>(".iface").forEach((el) => {
      el.style.opacity = show("interior") ? "1" : "0";
    });
    cube.style.filter = stage === 5 ? "saturate(0.85) brightness(1.08)" : "none";
    const sum = def.keys.reduce((s, key) => s + (stageCosts[key] || 0), 0);
    const skipped: string[] = [];
    if (stage <= 1) skipped.push("təməl");
    if (stage === 3) skipped.push("dam");
    must("stageLabel").innerHTML =
      `<b>${def.name}</b><br>Bu mərhələyə qədər xərc: <b>${sum.toFixed(2)} AZN</b>` +
      (skipped.length
        ? ` <span style="opacity:.7">(${skipped.join(", ")} xərci hesablanmır)</span>`
        : "");
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

    const bwStyle = `border-width:${bw}px;`;
    const texFront = brickTexture(scale, kL, kH, tikis, "#a8562e");
    const texSide = brickTexture(scale, kL, kH, tikis, "#8a4423");
    cube.querySelectorAll(".iface, .ext-wall").forEach((el) => el.remove());

    const gapColor = (item: PlanItem) =>
      item.type === "window" ? "#9fd0e8" : item.isEntrance ? "#6fcf73" : "#f2d9a8";
    const addWallSegments = (
      itemId: string,
      full: number,
      tex: string,
      extraTransform: string,
      baseLeft: number,
    ) => {
      const item = planState.items[itemId];
      const mk = (left: number, w: number, style: string) => {
        const d = document.createElement("div");
        d.className = "face ext-wall";
        d.style.cssText = `width:${w}px;height:${hp}px;left:${baseLeft + left}px;${bwStyle}${extraTransform}${style}`;
        cube.appendChild(d);
      };
      if (!item) {
        mk(0, full, tex);
        return;
      }
      const gap = Math.min(full * 0.9, Math.max(bw * 2, item.width * scale));
      const center = Math.max(
        gap / 2,
        Math.min(full - gap / 2, (item.offset != null ? item.offset : 0.5) * full),
      );
      const leftW = center - gap / 2;
      const rightW = full - (center + gap / 2);
      if (leftW > 0.5) mk(0, leftW, tex);
      if (rightW > 0.5) mk(center + gap / 2, rightW, tex);
      mk(center - gap / 2, gap, `background:${gapColor(item)};`);
    };

    addWallSegments("ext-N", lp, texFront, `transform:translateZ(${wp / 2}px);`, 0);
    addWallSegments("ext-S", lp, texFront, `transform:rotateY(180deg) translateZ(${wp / 2}px);`, 0);
    addWallSegments(
      "ext-E",
      wp,
      texSide,
      `transform:rotateY(90deg) translateZ(${lp / 2}px);`,
      lp / 2 - wp / 2,
    );
    addWallSegments(
      "ext-W",
      wp,
      texSide,
      `transform:rotateY(-90deg) translateZ(${lp / 2}px);`,
      lp / 2 - wp / 2,
    );

    must("f-top").style.cssText =
      `width:${lp}px;height:${wp}px;top:${hp / 2 - wp / 2}px;transform:rotateX(90deg) translateZ(${hp / 2}px);border-width:${bw * 0.4}px;background:#8a8478;`;
    must("f-bottom").style.cssText =
      `width:${lp}px;height:${wp}px;top:${hp / 2 - wp / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2}px);border-width:${bw * 0.4}px;background:#c9b79c;`;

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
    updateStageDisplay();
  };

  const openWallEditor = (id: string) => {
    weCurrentWall = id;
    const item = planState.items[id];
    weType = item ? item.type : "door";
    must("weTitle").textContent = "Divar seçildi";
    must<HTMLInputElement>("weWidth").value = String(
      item ? item.width : weType === "door" ? 0.9 : 1.2,
    );
    must<HTMLInputElement>("weEntrance").checked = Boolean(item && item.isEntrance);
    weRefreshTypeButtons();
    must("wallEditor").classList.remove("hidden");
    must("wallEditor").scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  const weSetType = (t: GapKind) => {
    weType = t;
    must<HTMLInputElement>("weWidth").value = t === "door" ? "0.9" : "1.2";
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
    const isEntrance = weType === "door" && must<HTMLInputElement>("weEntrance").checked;
    if (isEntrance) {
      Object.values(planState.items).forEach((it) => {
        if (it.isEntrance) it.isEntrance = false;
      });
    }
    const existingOffset = planState.items[weCurrentWall]
      ? planState.items[weCurrentWall].offset
      : 0.5;
    planState.items[weCurrentWall] = { type: weType, width, isEntrance, offset: existingOffset };
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

    const layers = Math.max(1, Math.round(divarQalinliq / (kW + tikis)));
    const brickFace = (kL + tikis) * (kH + tikis);
    const brickCount = brickFace > 0 ? Math.ceil((wallArea * 1e6 * layers) / brickFace) : 0;
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
      const qty = Math.ceil(wallArea * (parseFloat(must<HTMLInputElement>("p-sement").value) || 0));
      const cost = qty * (parseFloat(must<HTMLInputElement>("q-sement").value) || 0);
      total += cost;
      lines.push([`Sement — ${qty} kg`, cost]);
      stageCosts.suvaq = cost;
    }
    if (must<HTMLInputElement>("c-boya").checked) {
      const qty =
        Math.round(wallArea * (parseFloat(must<HTMLInputElement>("p-boya").value) || 0) * 10) / 10;
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
  };

  on(root.querySelector('[data-act="yeni"]'), "click", yeniLayihe);
  on(root.querySelector('[data-act="ana"]'), "click", anaSehife);
  on(root.querySelector('[data-act="print"]'), "click", () => window.print());
  root.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
    const id = el.dataset.panel;
    if (id) on(el, "click", () => togglePanel(id));
  });
  on(root.querySelector('[data-act="zoom-in"]'), "click", () => zoomBy(0.2));
  on(root.querySelector('[data-act="zoom-out"]'), "click", () => zoomBy(-0.2));
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

  return () => {
    cancelAnimationFrame(rafId);
    cleanups.forEach((fn) => fn());
  };
}
