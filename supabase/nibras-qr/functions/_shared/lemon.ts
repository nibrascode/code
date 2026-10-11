// Shared Lemon Squeezy + Supabase helpers for the Nibras QR web-payment functions.
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2";

export const LEMON_STORE_ID = Deno.env.get("LEMON_STORE_ID") ?? "473626";
/** Variant ids per plan. Defaults = TEST-mode product 1430771; live ids come from function secrets. */
export const VARIANTS = {
  "1y": Deno.env.get("LEMON_VARIANT_1Y") ?? "2234529",
  lifetime: Deno.env.get("LEMON_VARIANT_LIFETIME") ?? "2234537",
} as const;
export type Plan = keyof typeof VARIANTS;
export const planForVariant = (id: string | number | null | undefined): Plan | null => {
  const s = String(id ?? "");
  return s === VARIANTS["1y"] ? "1y" : s === VARIANTS.lifetime ? "lifetime" : null;
};
/** Checkouts are created in test mode while this is "true". */
export const TEST_MODE = (Deno.env.get("LEMON_TEST_MODE") ?? "true").toLowerCase() === "true";
/** Whether test-mode orders may grant Pro (keep "true" only while testing). */
export const ACCEPT_TEST_ORDERS = (Deno.env.get("LEMON_ACCEPT_TEST") ?? "true").toLowerCase() === "true";
export const RETURN_URL = Deno.env.get("LEMON_RETURN_URL") ?? "https://www.nibrascode.com/qr?purchase=success";

export const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });

let admin: SupabaseClient | null = null;
export function adminClient(): SupabaseClient {
  admin ??= createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return admin;
}

/** Function secret (env) first, then Supabase Vault via public.app_secret(). */
export async function getSecret(envName: string, vaultName: string): Promise<string | null> {
  const env = Deno.env.get(envName)?.trim();
  if (env) return env;
  const { data, error } = await adminClient().rpc("app_secret", { secret_name: vaultName });
  if (error) throw new Error(`secret lookup failed: ${error.message}`);
  return typeof data === "string" && data.trim() ? data.trim() : null;
}
