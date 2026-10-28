/** «Son fayllarım»: account-free recent files in this browser's IndexedDB. Nothing leaves the device. */
export type RecentMeta = { id: string; name: string; type: string; size: number; at: number; from: string };
type Row = RecentMeta & { blob: Blob };

const DB = "nibras-recent";
const STORE = "files";
const MAX_ITEMS = 20;
const MAX_BYTES = 150 * 1024 * 1024;
const MAX_ONE = 60 * 1024 * 1024;
const EVT = "nibras-recent-change";

function open(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    if (typeof indexedDB === "undefined") return rej(new Error("no-idb"));
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: "id" });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}

async function tx<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await open();
  return new Promise((res, rej) => {
    const t = db.transaction(STORE, mode);
    const q = fn(t.objectStore(STORE));
    t.oncomplete = () => { res(q.result); db.close(); };
    t.onerror = () => { rej(t.error); db.close(); };
  });
}

const all = () => tx<Row[]>("readonly", (s) => s.getAll() as IDBRequest<Row[]>).catch(() => [] as Row[]);

export async function listRecent(): Promise<RecentMeta[]> {
  const rows = await all();
  return rows.sort((a, b) => b.at - a.at).map(({ blob: _b, ...m }) => m);
}

export async function getRecent(id: string): Promise<File | null> {
  const r = await tx<Row | undefined>("readonly", (s) => s.get(id) as IDBRequest<Row | undefined>).catch(() => undefined);
  return r ? new File([r.blob], r.name, { type: r.type, lastModified: r.at }) : null;
}

export async function addRecent(blob: Blob, name: string, from: string): Promise<void> {
  if (!blob.size || blob.size > MAX_ONE) return;
  try {
    const rows = await all();
    const same = rows.find((r) => r.name === name && r.size === blob.size);
    const id = same?.id ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    await tx("readwrite", (s) => s.put({ id, name, type: blob.type || "application/octet-stream", size: blob.size, at: Date.now(), from, blob } satisfies Row));
    // Trim oldest beyond limits.
    const left = (await all()).sort((a, b) => b.at - a.at);
    let bytes = 0;
    const drop: string[] = [];
    left.forEach((r, i) => { bytes += r.size; if (i >= MAX_ITEMS || bytes > MAX_BYTES) drop.push(r.id); });
    for (const d of drop) await tx("readwrite", (s) => s.delete(d));
    window.dispatchEvent(new Event(EVT));
  } catch { /* private mode / quota: ignore */ }
}

export async function removeRecent(id?: string) {
  await tx("readwrite", (s) => (id ? s.delete(id) : s.clear())).catch(() => undefined);
  window.dispatchEvent(new Event(EVT));
}

export const RECENT_EVENT = EVT;
