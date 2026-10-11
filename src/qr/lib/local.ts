/** localStorage persistence for the web QR tool (saved codes). */
import type { QrDesign, QrFields, QrType } from "./types";

export type LocalQr = {
  id: string;
  name: string;
  type: QrType;
  fields: QrFields;
  design: QrDesign;
  value: string;
  createdAt: number;
  updatedAt: number;
};

/** Same free vs Pro limits as the app. */
export const LIMITS = {
  free: { saved: 3, history: 50 },
  pro: { saved: 5000, history: 5000 },
} as const;

const CODES_KEY = "nibras-qr.saved.v1";

function read(): LocalQr[] {
  try {
    const raw = localStorage.getItem(CODES_KEY);
    return raw ? (JSON.parse(raw) as LocalQr[]) : [];
  } catch {
    return [];
  }
}

export function listCodes(): LocalQr[] {
  return read().sort((a, b) => b.updatedAt - a.updatedAt);
}

/** Insert or update. Returns "limit" when a new code would exceed the plan limit. */
export function upsertCode(code: LocalQr, max: number): "ok" | "limit" {
  const all = read();
  const i = all.findIndex((c) => c.id === code.id);
  if (i >= 0) all[i] = code;
  else {
    if (all.length >= max) return "limit";
    all.push(code);
  }
  localStorage.setItem(CODES_KEY, JSON.stringify(all));
  return "ok";
}

export function deleteCode(id: string): void {
  localStorage.setItem(CODES_KEY, JSON.stringify(read().filter((c) => c.id !== id)));
}

export function newLocalId(): string {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
