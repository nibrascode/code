/** Keyboard helpers: normalising combos, reading key events, layout for the heatmap. */
export type Platform = "win" | "mac";
const MOD_ORDER = ["Ctrl", "Meta", "Alt", "Shift"];
const ALIAS: Record<string, string> = { cmd: "Meta", win: "Meta", meta: "Meta", command: "Meta", option: "Alt", opt: "Alt", alt: "Alt", ctrl: "Ctrl", control: "Ctrl", shift: "Shift", esc: "Esc", escape: "Esc", del: "Delete", return: "Enter" };
export function normStep(step: string) {
  const parts = step.split("+").map((p) => p.trim()).filter(Boolean);
  // "Ctrl++" style is not used; "=" and "-" are plain keys.
  const mods = new Set<string>(); let key = "";
  for (const p of parts) { const a = ALIAS[p.toLowerCase()] ?? p; if (MOD_ORDER.includes(a)) mods.add(a); else key = a.length === 1 ? a.toUpperCase() : a; }
  if (!key && mods.size === 1) return [...mods][0];
  return [...MOD_ORDER.filter((m) => mods.has(m)), key].filter(Boolean).join("+");
}
export const steps = (combo: string) => combo.trim().split(/\s+/).map(normStep);

const CODE: Record<string, string> = { Backquote: "`", Minus: "-", Equal: "=", BracketLeft: "[", BracketRight: "]", Backslash: "\\", Semicolon: ";", Quote: "'", Comma: ",", Period: ".", Slash: "/", Space: "Space", Enter: "Enter", NumpadEnter: "Enter", Escape: "Esc", Backspace: "Backspace", Delete: "Delete", Tab: "Tab", ArrowLeft: "Left", ArrowRight: "Right", ArrowUp: "Up", ArrowDown: "Down", Home: "Home", End: "End", Insert: "Insert", PrintScreen: "PrtScn", PageUp: "PageUp", PageDown: "PageDown", NumpadAdd: "=", NumpadSubtract: "-" };
export function keyOf(code: string): string | null {
  if (/^Key[A-Z]$/.test(code)) return code.slice(3);
  if (/^Digit\d$/.test(code)) return code.slice(5);
  if (/^F\d{1,2}$/.test(code)) return code;
  return CODE[code] ?? null;
}
export const isModCode = (code: string) => /^(Shift|Control|Alt|Meta|OS)(Left|Right)?$/.test(code);
export function stepFromEvent(e: { code: string; ctrlKey: boolean; metaKey: boolean; altKey: boolean; shiftKey: boolean }) {
  const k = keyOf(e.code); if (!k) return null;
  return [e.ctrlKey && "Ctrl", e.metaKey && "Meta", e.altKey && "Alt", e.shiftKey && "Shift", k].filter(Boolean).join("+");
}
const MAC: Record<string, string> = { Meta: "⌘ Cmd", Alt: "⌥ Option", Shift: "⇧ Shift", Ctrl: "⌃ Ctrl", Backspace: "⌫ Delete", Enter: "↩ Return" };
const WIN: Record<string, string> = { Meta: "⊞ Win", Alt: "Alt", Shift: "Shift", Ctrl: "Ctrl" };
const ARROWS: Record<string, string> = { Left: "←", Right: "→", Up: "↑", Down: "↓" };
export const label = (k: string, p: Platform) => ARROWS[k] ?? (p === "mac" ? MAC[k] : WIN[k]) ?? k;

export type KeyCap = { id: string; label?: string; w?: number };
const row = (s: string) => s.split(" ").map((id) => ({ id }));
export const LAYOUT: KeyCap[][] = [
  [{ id: "Esc" }, ...Array.from({ length: 12 }, (_, i) => ({ id: `F${i + 1}` })), { id: "PrtScn" }, { id: "Insert" }, { id: "Delete" }],
  [...row("` 1 2 3 4 5 6 7 8 9 0 - ="), { id: "Backspace", w: 2 }, { id: "Home" }],
  [{ id: "Tab", w: 1.5 }, ...row("Q W E R T Y U I O P [ ]"), { id: "\\", w: 1.5 }, { id: "End" }],
  [{ id: "Caps", w: 1.75 }, ...row("A S D F G H J K L ; '"), { id: "Enter", w: 2.25 }, { id: "PageUp" }],
  [{ id: "Shift", w: 2.25 }, ...row("Z X C V B N M , . /"), { id: "Shift", w: 1.75 }, { id: "Up" }, { id: "PageDown" }],
  [{ id: "Ctrl", w: 1.25 }, { id: "Meta", w: 1.25 }, { id: "Alt", w: 1.25 }, { id: "Space", w: 6.25 }, { id: "Alt", w: 1.25 }, { id: "Meta", w: 1.25 }, { id: "Left" }, { id: "Down" }, { id: "Right" }],
];
