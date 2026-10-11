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

type State = {
  ready: boolean;
  busy: boolean;
  user: QrUser | null;
  pro: boolean;
  init: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const useQrAuth = create<State>((set) => ({
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
    } catch {
      set({ ready: true });
    }
  },
  signIn: async () => {
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
