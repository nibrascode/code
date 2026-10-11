// Lemon Squeezy webhook → public.web_purchases → merged public.entitlements.
// verify_jwt off; authenticated by X-Signature (HMAC-SHA256 of the raw body).
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { ACCEPT_TEST_ORDERS, adminClient, getSecret, json, planForVariant } from "../_shared/lemon.ts";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

type Order = {
  meta?: { event_name?: string; test_mode?: boolean; custom_data?: { user_id?: string } };
  data?: {
    id?: string;
    type?: string;
    attributes?: {
      status?: string;
      created_at?: string;
      user_email?: string;
      total_usd?: number;
      test_mode?: boolean;
      refunded?: boolean;
      first_order_item?: { variant_id?: number };
    };
  };
};

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  const raw = await req.text();
  const secret = await getSecret("LEMON_WEBHOOK_SECRET", "lemon_webhook_secret");
  if (!secret) return json({ error: "not configured" }, 503);
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const expected = hex(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(raw)));
  if (!safeEqual(expected, (req.headers.get("x-signature") ?? "").trim().toLowerCase())) return json({ error: "bad signature" }, 401);

  let ev: Order;
  try {
    ev = JSON.parse(raw) as Order;
  } catch {
    return json({ error: "bad json" }, 400);
  }
  const name = ev.meta?.event_name ?? "";
  const orderId = ev.data?.id ? String(ev.data.id) : null;
  const db = adminClient();
  await db.from("lemon_events").insert({ event_name: name, order_id: orderId, payload: ev });

  if (ev.data?.type !== "orders" || !orderId || !["order_created", "order_refunded"].includes(name)) return json({ ignored: name });
  const a = ev.data.attributes ?? {};
  const userId = ev.meta?.custom_data?.user_id ?? "";
  const plan = planForVariant(a.first_order_item?.variant_id);
  const testMode = Boolean(a.test_mode ?? ev.meta?.test_mode);
  if (!UUID.test(userId)) return json({ ignored: "no user_id" });
  if (!plan) return json({ ignored: "unknown variant" });
  if (testMode && !ACCEPT_TEST_ORDERS) return json({ ignored: "test order" });

  const paid = name === "order_created" && a.status === "paid" && !a.refunded;
  const refunded = name === "order_refunded" || a.status === "refunded" || a.refunded === true;
  if (!paid && !refunded) return json({ ignored: `status ${a.status}` });

  const purchasedAt = a.created_at ? new Date(a.created_at) : new Date();
  const row = {
    order_id: orderId,
    user_id: userId,
    provider: "lemon",
    variant_id: String(a.first_order_item?.variant_id),
    plan,
    status: refunded ? "refunded" : "paid",
    test_mode: testMode,
    purchased_at: purchasedAt.toISOString(),
    expires_at: plan === "lifetime" ? null : new Date(purchasedAt.getTime() + 365 * 86400_000).toISOString(),
    email: a.user_email ?? null,
    total_usd: typeof a.total_usd === "number" ? a.total_usd / 100 : null,
    updated_at: new Date().toISOString(),
  };
  const { error } = await db.from("web_purchases").upsert(row, { onConflict: "order_id" });
  // 23503: user no longer exists → nothing to grant.
  if (error && error.code !== "23503") {
    console.error("save failed", error.message);
    return json({ error: "store failed" }, 500); // Lemon retries
  }
  if (!error) {
    const { error: e2 } = await db.rpc("refresh_entitlement", { uid: userId });
    if (e2) {
      console.error("refresh failed", e2.message);
      return json({ error: "refresh failed" }, 500);
    }
  }
  return json({ ok: true, status: row.status, plan });
});
