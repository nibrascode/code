/** Logic Lab circuit model and simulation (pure functions, no DOM). */
export type GateType = "AND" | "OR" | "NOT" | "NAND" | "XOR" | "NOR" | "XNOR" | "INPUT" | "OUTPUT";
export type Gate = { id: string; type: GateType; x: number; y: number; v?: 0 | 1; label?: string };
export type Wire = { id: string; from: string; to: string; pin: number };
export type Circuit = { gates: Gate[]; wires: Wire[] };

export const TYPES: GateType[] = ["AND", "OR", "NOT", "NAND", "XOR", "NOR", "XNOR", "INPUT", "OUTPUT"];
export const pins = (t: GateType) => (t === "INPUT" ? 0 : t === "NOT" || t === "OUTPUT" ? 1 : 2);
export const size = (t: GateType) => (t === "INPUT" || t === "OUTPUT" ? { w: 56, h: 56 } : { w: 92, h: 56 });

export function apply(t: GateType, a: number[]): 0 | 1 {
  const [x = 0, y = 0] = a;
  switch (t) {
    case "AND": return (x & y) as 0 | 1;
    case "OR": return (x | y) as 0 | 1;
    case "NOT": return (x ? 0 : 1);
    case "NAND": return (x & y ? 0 : 1);
    case "NOR": return (x | y ? 0 : 1);
    case "XOR": return (x ^ y) as 0 | 1;
    case "XNOR": return (x ^ y ? 0 : 1);
    case "OUTPUT": return (x ? 1 : 0);
    default: return 0;
  }
}

/** Input/output names: A, B, C… and Y, Y2… in creation order. */
export function names(c: Circuit) {
  const m = new Map<string, string>();
  let i = 0, o = 0;
  for (const g of c.gates) {
    if (g.type === "INPUT") m.set(g.id, g.label || String.fromCharCode(65 + i++));
    if (g.type === "OUTPUT") { o++; m.set(g.id, g.label || (o === 1 ? "Y" : "Y" + o)); }
  }
  return m;
}

/** Full (settled) evaluation. Unconnected pins read 0; loops read 0. */
export function evaluate(c: Circuit, inputs?: Map<string, 0 | 1>) {
  const byId = new Map(c.gates.map((g) => [g.id, g]));
  const into = new Map<string, (string | undefined)[]>();
  for (const w of c.wires) { const a = into.get(w.to) ?? []; a[w.pin] = w.from; into.set(w.to, a); }
  const val = new Map<string, 0 | 1>();
  const busy = new Set<string>();
  const get = (id: string): 0 | 1 => {
    if (val.has(id)) return val.get(id)!;
    const g = byId.get(id);
    if (!g || busy.has(id)) return 0;
    if (g.type === "INPUT") { const v = inputs?.get(id) ?? g.v ?? 0; val.set(id, v); return v; }
    busy.add(id);
    const src = into.get(id) ?? [];
    const v = apply(g.type, Array.from({ length: pins(g.type) }, (_, k) => (src[k] ? get(src[k]!) : 0)));
    busy.delete(id); val.set(id, v);
    return v;
  };
  for (const g of c.gates) get(g.id);
  return val;
}

/** One synchronous clock tick: each gate reads the previous values of its sources. */
export function tick(c: Circuit, prev: Map<string, 0 | 1>) {
  const into = new Map<string, (string | undefined)[]>();
  for (const w of c.wires) { const a = into.get(w.to) ?? []; a[w.pin] = w.from; into.set(w.to, a); }
  const next = new Map<string, 0 | 1>();
  for (const g of c.gates) {
    if (g.type === "INPUT") { next.set(g.id, g.v ?? 0); continue; }
    const src = into.get(g.id) ?? [];
    next.set(g.id, apply(g.type, Array.from({ length: pins(g.type) }, (_, k) => (src[k] ? prev.get(src[k]!) ?? 0 : 0))));
  }
  return next;
}

/** Boolean expression for a gate's output. */
export function expr(c: Circuit, id: string, nm = names(c)): string {
  const byId = new Map(c.gates.map((g) => [g.id, g]));
  const into = new Map<string, (string | undefined)[]>();
  for (const w of c.wires) { const a = into.get(w.to) ?? []; a[w.pin] = w.from; into.set(w.to, a); }
  const seen = new Set<string>();
  const go = (gid: string | undefined, top = false): string => {
    if (!gid) return "0";
    const g = byId.get(gid);
    if (!g) return "0";
    if (g.type === "INPUT") return nm.get(gid) ?? "?";
    if (seen.has(gid)) return "↺";
    seen.add(gid);
    const s = into.get(gid) ?? [];
    const a = go(s[0]), b = go(s[1]);
    seen.delete(gid);
    const wrap = (x: string) => (top ? x : `(${x})`);
    switch (g.type) {
      case "OUTPUT": return go(s[0], true);
      case "NOT": return /^[A-Z0-9]+$|^¬|^\(/.test(a) ? `¬${a}` : `¬(${a})`;
      case "AND": return wrap(`${a} · ${b}`);
      case "OR": return wrap(`${a} + ${b}`);
      case "XOR": return wrap(`${a} ⊕ ${b}`);
      case "NAND": return `¬(${a} · ${b})`;
      case "NOR": return `¬(${a} + ${b})`;
      case "XNOR": return `¬(${a} ⊕ ${b})`;
      default: return "?";
    }
  };
  return go(id, true);
}

/** Truth table rows over all inputs (max 6 inputs = 64 rows). */
export function truth(c: Circuit) {
  const ins = c.gates.filter((g) => g.type === "INPUT").slice(0, 6);
  const outs = c.gates.filter((g) => g.type === "OUTPUT");
  const rows: { ins: (0 | 1)[]; outs: (0 | 1)[] }[] = [];
  for (let m = 0; m < 1 << ins.length; m++) {
    const map = new Map<string, 0 | 1>();
    const bits = ins.map((g, k) => ((m >> (ins.length - 1 - k)) & 1) as 0 | 1);
    ins.forEach((g, k) => map.set(g.id, bits[k]));
    const v = evaluate(c, map);
    rows.push({ ins: bits, outs: outs.map((o) => v.get(o.id) ?? 0) });
  }
  return { ins, outs, rows };
}

export type Challenge = { id: string; inputs: number; allowed: GateType[] | null; f: (b: number[]) => number };
export const CHALLENGES: Challenge[] = [
  { id: "and", inputs: 2, allowed: null, f: ([a, b]) => a & b },
  { id: "not-nand", inputs: 1, allowed: ["NAND"], f: ([a]) => (a ? 0 : 1) },
  { id: "xor-basic", inputs: 2, allowed: ["AND", "OR", "NOT"], f: ([a, b]) => a ^ b },
  { id: "or-nand", inputs: 2, allowed: ["NAND"], f: ([a, b]) => a | b },
  { id: "majority", inputs: 3, allowed: null, f: ([a, b, c]) => ((a & b) | (a & c) | (b & c)) },
];

export function check(c: Circuit, ch: Challenge): { ok: boolean; reason: "inputs" | "output" | "gates" | "table" | "ok"; bad?: number[] } {
  const ins = c.gates.filter((g) => g.type === "INPUT");
  const outs = c.gates.filter((g) => g.type === "OUTPUT");
  if (ins.length !== ch.inputs) return { ok: false, reason: "inputs" };
  if (outs.length !== 1) return { ok: false, reason: "output" };
  if (ch.allowed && c.gates.some((g) => g.type !== "INPUT" && g.type !== "OUTPUT" && !ch.allowed!.includes(g.type))) return { ok: false, reason: "gates" };
  const t = truth(c);
  for (const r of t.rows) if (r.outs[0] !== ch.f(r.ins)) return { ok: false, reason: "table", bad: r.ins };
  return { ok: true, reason: "ok" };
}

export const encode = (c: Circuit) => btoa(unescape(encodeURIComponent(JSON.stringify({ g: c.gates.map((g) => [g.id, g.type, Math.round(g.x), Math.round(g.y), g.v ?? 0]), w: c.wires.map((w) => [w.from, w.to, w.pin]) })))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
export function decode(s: string): Circuit | null {
  try {
    const j = JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/")))));
    const gates: Gate[] = (j.g as unknown[][]).filter((g) => TYPES.includes(g[1] as GateType)).slice(0, 300).map((g) => ({ id: String(g[0]), type: g[1] as GateType, x: Number(g[2]) || 0, y: Number(g[3]) || 0, v: g[4] ? 1 : 0 }));
    const ids = new Set(gates.map((g) => g.id));
    const wires: Wire[] = (j.w as unknown[][]).filter((w) => ids.has(String(w[0])) && ids.has(String(w[1]))).slice(0, 600).map((w, i) => ({ id: "w" + i, from: String(w[0]), to: String(w[1]), pin: Number(w[2]) ? 1 : 0 }));
    return { gates, wires };
  } catch { return null; }
}

export function sample(): Circuit {
  return {
    gates: [
      { id: "a", type: "INPUT", x: 60, y: 80, v: 1 }, { id: "b", type: "INPUT", x: 60, y: 260, v: 0 },
      { id: "g1", type: "AND", x: 240, y: 60 }, { id: "g2", type: "NOT", x: 400, y: 60 },
      { id: "g3", type: "XOR", x: 240, y: 300 }, { id: "g4", type: "OR", x: 560, y: 170 },
      { id: "y", type: "OUTPUT", x: 730, y: 170 },
    ],
    wires: [
      { id: "w1", from: "a", to: "g1", pin: 0 }, { id: "w2", from: "b", to: "g1", pin: 1 }, { id: "w3", from: "g1", to: "g2", pin: 0 },
      { id: "w4", from: "a", to: "g3", pin: 0 }, { id: "w5", from: "b", to: "g3", pin: 1 }, { id: "w6", from: "g2", to: "g4", pin: 0 },
      { id: "w7", from: "g3", to: "g4", pin: 1 }, { id: "w8", from: "g4", to: "y", pin: 0 },
    ],
  };
}
