// NX Studio (admin panel) server-side helpers. Never imported by client code directly:
// only the handlers in nx-admin.functions.ts call these, so secrets stay on the server.
import { createHash } from "node:crypto";
import { getRequestIP, setResponseStatus } from "@tanstack/react-start/server";
import { env } from "@/lib/env.server";
import { STUDIO_EMAIL, STUDIO_KEY, STUDIO_URL } from "@/lib/studio";

export const SITE = (env("SITE_ORIGIN") || "https://nibrascode.com").replace(/\/+$/, "");
export const LIBRARY = (env("LIBRARY_URL") || "https://library.nibrascode.com").replace(/\/+$/, "");

// ---------- auth ----------
const verified = new Map<string, number>(); // sha256(token) -> expiry ms
const failures = new Map<string, { count: number; until: number }>(); // ip -> bad attempts
const VERIFY_TTL = 60_000;
const FAIL_WINDOW = 10 * 60_000;
const FAIL_LIMIT = 20;

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function clientIp() {
  try {
    return getRequestIP({ xForwardedFor: true }) || "unknown";
  } catch {
    return "unknown";
  }
}

export class AdminDenied extends Error {
  constructor(message = "NX_AUTH") {
    super(message);
  }
}

function deny(code: number, message: string): never {
  try {
    setResponseStatus(code);
  } catch {
    /* outside a request (tests) */
  }
  throw new AdminDenied(message);
}

/** Verifies the Supabase access token server-side: only the confirmed owner e-mail passes. */
export async function requireAdmin(token: unknown) {
  const ip = clientIp();
  const now = Date.now();
  const fail = failures.get(ip);
  if (fail && fail.until > now && fail.count >= FAIL_LIMIT) deny(429, "NX_RATE");
  const value = typeof token === "string" ? token.trim() : "";
  if (value.length < 20 || value.length > 4000) {
    noteFailure(ip, now);
    deny(401, "NX_AUTH");
  }
  const key = hash(value);
  const hit = verified.get(key);
  if (hit && hit > now) return;
  let ok = false;
  try {
    const response = await fetch(`${STUDIO_URL}/auth/v1/user`, {
      headers: { apikey: STUDIO_KEY, Authorization: `Bearer ${value}` },
      signal: AbortSignal.timeout(6000),
    });
    if (response.ok) {
      const user = (await response.json()) as { email?: string; email_confirmed_at?: string | null };
      ok = user.email?.toLowerCase() === STUDIO_EMAIL && Boolean(user.email_confirmed_at);
    }
  } catch {
    deny(503, "NX_AUTH_DOWN");
  }
  if (!ok) {
    noteFailure(ip, now);
    deny(401, "NX_AUTH");
  }
  if (verified.size > 200) verified.clear();
  verified.set(key, now + VERIFY_TTL);
}

function noteFailure(ip: string, now: number) {
  const current = failures.get(ip);
  if (!current || current.until < now) failures.set(ip, { count: 1, until: now + FAIL_WINDOW });
  else current.count += 1;
  if (failures.size > 5000) failures.clear();
}

// ---------- small cache ----------
const cache = new Map<string, { at: number; value: unknown }>();
export async function cached<T>(key: string, ttl: number, fresh: boolean, load: () => Promise<T>): Promise<T> {
  const hit = cache.get(key);
  if (!fresh && hit && Date.now() - hit.at < ttl) return hit.value as T;
  const value = await load();
  cache.set(key, { at: Date.now(), value });
  return value;
}

// ---------- fetch helpers ----------
export async function timed(url: string, init: RequestInit = {}, timeout = 10_000) {
  const t0 = Date.now();
  try {
    const response = await fetch(url, { ...init, signal: AbortSignal.timeout(timeout) });
    return { response, ms: Date.now() - t0, error: "" };
  } catch (error) {
    return { response: null, ms: Date.now() - t0, error: error instanceof Error ? error.name : "error" };
  }
}

export function githubToken() {
  return env("GITHUB_TOKEN") || env("GITHUB_TOKEN_NIBRASCODE");
}

export async function gh<T>(path: string, init: RequestInit = {}): Promise<{ ok: boolean; status: number; data: T | null }> {
  const token = githubToken();
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "nibrascode-nx-studio",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(init.headers as Record<string, string> | undefined),
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = path.startsWith("https://") ? path : `https://api.github.com${path}`;
  const { response } = await timed(url, { ...init, headers }, 12_000);
  if (!response) return { ok: false, status: 0, data: null };
  if (!response.ok) return { ok: false, status: response.status, data: null };
  if (response.status === 204) return { ok: true, status: 204, data: null };
  const data = (await response.json().catch(() => null)) as T | null;
  return { ok: true, status: response.status, data };
}

export function supaService() {
  const url = env("SUPABASE_URL") || env("NEXT_PUBLIC_SUPABASE_URL") || env("VITE_SUPABASE_URL") || "";
  const key = env("SUPABASE_SERVICE_ROLE_KEY") || env("SUPABASE_SERVICE_KEY") || env("SUPABASE_SECRET_KEY") || "";
  if (!/^https?:\/\//i.test(url) || !key) return null;
  return { url: url.replace(/\/+$/, ""), key };
}

export function hasEnv(...keys: string[]) {
  return keys.some((key) => Boolean(env(key)));
}
