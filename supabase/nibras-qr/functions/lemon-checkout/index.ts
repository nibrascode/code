// Signed-in user → Lemon Squeezy checkout URL for Nibras QR Pro (web).
// POST { plan: "1y" | "lifetime" } with the user's Supabase JWT (verify_jwt on).
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { adminClient, getSecret, json, LEMON_STORE_ID, RETURN_URL, TEST_MODE, VARIANTS, type Plan } from "../_shared/lemon.ts";

const ORIGINS = new Set(["https://www.nibrascode.com", "https://nibrascode.com", "http://localhost:4174", "http://localhost:8080"]);
function cors(req: Request) {
  const o = req.headers.get("origin") ?? "";
  return {
    "access-control-allow-origin": ORIGINS.has(o) ? o : "https://www.nibrascode.com",
    "access-control-allow-headers": "authorization, x-client-info, apikey, content-type",
    "access-control-allow-methods": "POST, OPTIONS",
    vary: "origin",
  };
}

Deno.serve(async (req) => {
  const h = cors(req);
  if (req.method === "OPTIONS") return new Response("ok", { headers: h });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405, h);

  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  const { data: auth, error: authErr } = await adminClient().auth.getUser(token);
  if (authErr || !auth.user) return json({ error: "unauthorized" }, 401, h);
  const user = auth.user;

  let plan: Plan;
  try {
    const body = (await req.json()) as { plan?: string };
    if (body.plan !== "1y" && body.plan !== "lifetime") return json({ error: "bad plan" }, 400, h);
    plan = body.plan;
  } catch {
    return json({ error: "bad json" }, 400, h);
  }

  const key = await getSecret("LEMONSQUEEZY_API_KEY", "lemonsqueezy_api_key");
  if (!key) return json({ error: "payments not configured" }, 503, h);

  const meta = (user.user_metadata ?? {}) as Record<string, unknown>;
  const name = typeof meta.full_name === "string" ? meta.full_name : typeof meta.name === "string" ? meta.name : undefined;
  const payload = {
    data: {
      type: "checkouts",
      attributes: {
        checkout_data: { email: user.email ?? undefined, name, custom: { user_id: user.id } },
        product_options: { redirect_url: RETURN_URL, enabled_variants: [Number(VARIANTS[plan])] },
        checkout_options: { embed: false },
        expires_at: new Date(Date.now() + 2 * 3600_000).toISOString(),
        test_mode: TEST_MODE,
      },
      relationships: {
        store: { data: { type: "stores", id: LEMON_STORE_ID } },
        variant: { data: { type: "variants", id: VARIANTS[plan] } },
      },
    },
  };
  const res = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      authorization: `Bearer ${key}`,
      accept: "application/vnd.api+json",
      "content-type": "application/vnd.api+json",
    },
    body: JSON.stringify(payload),
  });
  const out = (await res.json().catch(() => null)) as { data?: { attributes?: { url?: string } }; errors?: unknown } | null;
  const url = out?.data?.attributes?.url;
  if (!res.ok || !url) {
    console.error("lemon checkout failed", res.status, JSON.stringify(out?.errors ?? out).slice(0, 500));
    return json({ error: "checkout failed" }, 502, h);
  }
  return json({ url, testMode: TEST_MODE }, 200, h);
});
