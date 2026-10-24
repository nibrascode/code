import { validSession } from "@/lib/studio";

// NX Studio əlavə bölmələri üçün müştəri tərəfi: hər sorğu yaddaşdakı giriş tokeni ilə gedir, server onu Supabase-də yoxlayır.
async function token() {
  const s = await validSession();
  if (!s) throw new Error("auth");
  return s.access_token;
}

export async function nxGet<T>(op: string, params: Record<string, string | number | undefined> = {}): Promise<T> {
  const q = new URLSearchParams({ op });
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== "") q.set(k, String(v));
  const res = await fetch(`/api/admin?${q}`, { headers: { Authorization: `Bearer ${await token()}` }, credentials: "same-origin" });
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(res.status === 401 ? "auth" : data.error || String(res.status));
  return data;
}

export async function nxPost<T>(op: string, body: unknown): Promise<T> {
  const res = await fetch(`/api/admin?op=${op}`, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", "x-nxs": "1", Authorization: `Bearer ${await token()}` },
    body: JSON.stringify(body ?? {}),
  });
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(res.status === 401 ? "auth" : data.error || String(res.status));
  return data;
}

const blobs = new Map<string, string>();
export async function nxCover(file: string): Promise<string> {
  const hit = blobs.get(file);
  if (hit) return hit;
  const res = await fetch(`/api/admin?op=cover&file=${encodeURIComponent(file)}`, { headers: { Authorization: `Bearer ${await token()}` }, credentials: "same-origin" });
  if (!res.ok) throw new Error(String(res.status));
  const url = URL.createObjectURL(await res.blob());
  blobs.set(file, url);
  return url;
}

export type Provider = { id: string; name: string; configured: boolean; ok: boolean; status: number; ms: number };
export type Providers = { checkedAt: string; providers: Provider[] };
export type Library = {
  url: string;
  up: boolean;
  ms: number;
  catalog: { books: number; pages: number; sections: { id: string; title: Record<string, string>; books: number; pages: number }[] } | null;
  repo: { name: string; pushed_at: string; size_kb: number; url: string } | null;
  commits: { sha: string; msg: string; date: string; url: string }[];
  checkedAt: string;
};
export type Release = { tag: string; name: string; date: string; draft: boolean; pre: boolean; url: string; assets: { name: string; size: number; downloads: number; url: string }[] };
export type AppsData = {
  play: Record<string, { listed: boolean; playUrl?: string; version?: string; updated?: string; minAndroid?: string }> | null;
  sizes: Record<string, { size?: string; sizeVersion?: string }>;
  sync: { status: string; conclusion: string | null; at: string; url: string; event: string }[] | null;
  releases: { repo: string; slug: string; ok: boolean; items: Release[] }[];
  checkedAt: string;
};
export type Cover = { file: string; provider: string; model: string; premium: number | null; judge: string; w: number | null; h: number | null; created: string };
export type Covers = { ok: boolean; code?: number; covers: Cover[]; runs: { name: string; status: string; conclusion: string | null; at: string; url: string }[] };
export type Deploy = { id: number; env: string; sha: string; msg: string; created: string; state: string; updated: string; url: string; live: string };
export type Deploys = { ok: boolean; code?: number; items: Deploy[]; checkedAt?: string };
