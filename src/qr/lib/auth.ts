/**
 * Optional Google sign-in for the web QR tool via the Nibras QR Supabase
 * project (same accounts as the Android app). Pro = a row in
 * public.entitlements (RLS: users read only their own row).
 * supabase-js is loaded lazily, only when someone signs in or already has a session.
 */
import { create } from "zustand";
import type { SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rbnhwyvpuobdmgqjdiyj.supabase.co";
// Publishable (public) key; data is protected by RLS.
const SUPABASE_KEY = "sb_publishable_05Dn4alWjic-532f_IRkVg_eQsll1NB";
const STORAGE_KEY = "sb-rbnhwyvpuobdmgqjdiyj-auth-token";

export type QrUser = { id: string; email: string | null; name: string | null; image: string | null };

let client: Promise<SupabaseClient> | null = null;
function sb(): Promise<SupabaseClient> {
  client ??= import("@supabase/supabase-js").then(({ createClient }) =>
    createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true, storageKey: STORAGE_KEY },
    }),
  );
  return client;
}

async function proFor(c: SupabaseClient, userId: string): Promise<boolean> {
  const { data } = await c.from("entitlements").select("is_pro, expires_at").eq("user_id", userId).maybeSingle();
  if (!data?.is_pro) return false;
  return !data.expires_at || Date.parse(data.expires_at) > Date.now();
}

const BACK_KEY = "nibras-after-auth";
function setBack(back?: string) {
  try {
    if (back && /^\/[a-z/]*$/.test(back)) localStorage.setItem(BACK_KEY, back + "|" + Date.now());
    else localStorage.removeItem(BACK_KEY);
  } catch {
    /* storage blocked */
  }
}
/** After the round-trip lands on /qr, send the user back to the page that asked (one-shot). */
function goBack() {
  try {
    const [back, at] = (localStorage.getItem(BACK_KEY) ?? "").split("|");
    localStorage.removeItem(BACK_KEY);
    if (!back || Date.now() - Number(at) > 30 * 60_000) return;
    if (window.location.pathname !== back) window.location.replace(back + window.location.search);
  } catch {
    /* storage blocked */
  }
}

type State = {
  ready: boolean;
  busy: boolean;
  user: QrUser | null;
  pro: boolean;
  init: () => Promise<void>;
  /** `back`: same-origin path to return to after the OAuth/checkout round-trip (e.g. "/erase"). Defaults to /qr. */
  signIn: (back?: string) => Promise<void>;
  signOut: () => Promise<void>;
  /** Signed-in only: open a Lemon Squeezy checkout for the plan. */
  buy: (plan: "1y" | "lifetime", back?: string) => Promise<void>;
  /** Re-read Pro from public.entitlements (e.g. after ?purchase=success). */
  refreshPro: () => Promise<boolean>;
};

export const useQrAuth = create<State>((set, get) => ({
  ready: false,
  busy: false,
  user: null,
  pro: false,
  init: async () => {
    const url = new URL(window.location.href);
    const returning = url.searchParams.has("code");
    let hasSession = false;
    try {
      hasSession = Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      /* storage blocked */
    }
    if (!returning && !hasSession) return set({ ready: true });
    try {
      const c = await sb();
      const { data } = await c.auth.getSession();
      const u = data.session?.user;
      if (returning) {
        url.searchParams.delete("code");
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      }
      if (!u) return set({ ready: true, user: null, pro: false });
      const meta = (u.user_metadata ?? {}) as Record<string, unknown>;
      const str = (v: unknown) => (typeof v === "string" && v ? v : null);
      set({
        user: { id: u.id, email: u.email ?? null, name: str(meta.full_name) ?? str(meta.name), image: str(meta.avatar_url) ?? str(meta.picture) },
        pro: await proFor(c, u.id),
        ready: true,
      });
      if (returning || url.searchParams.get("purchase") === "success") goBack();
    } catch {
      set({ ready: true });
    }
  },
  signIn: async (back) => {
    setBack(back);
    set({ busy: true });
    try {
      const c = await sb();
      await c.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/qr` },
      });
    } finally {
      set({ busy: false });
    }
  },
  buy: async (plan, back) => {
    setBack(back);
    set({ busy: true });
    try {
      const c = await sb();
      const { data, error } = await c.functions.invoke<{ url?: string }>("lemon-checkout", { body: { plan } });
      if (error || !data?.url) throw new Error("checkout failed");
      window.location.assign(data.url);
    } finally {
      set({ busy: false });
    }
  },
  refreshPro: async () => {
    const u = get().user;
    if (!u) return false;
    const pro = await proFor(await sb(), u.id);
    set({ pro });
    return pro;
  },
  signOut: async () => {
    set({ busy: true });
    try {
      const c = await sb();
      await c.auth.signOut({ scope: "local" });
    } finally {
      set({ busy: false, user: null, pro: false });
    }
  },
}));
