// /api/admin — NX Studio admin API
//   POST ?op=login   {email,password}  -> {session}   (5 uğursuz cəhd / 15 dəq kilid, refresh token httpOnly cookie-də)
//   POST ?op=refresh                   -> {session}   (cookie ilə)
//   POST ?op=logout                    -> cookie silinir
//   GET  ?op=overview  (Authorization: Bearer)  -> sağlamlıq, Nibras AI sayğacı, söhbət sayı
import {
  ADMIN_EMAIL,
  MAX_FAILS,
  addFail,
  clearFails,
  clientIp,
  failState,
  overview,
  passwordLogin,
  readCookie,
  refreshLogin,
  sessionCookie,
  sessionOut,
  supaLogout,
  verifyAdmin,
} from "./_admin.js";
import { appsData, coverImage, coverList, deleteChat, deploys, libraryStats, listChats, providerHealth, readChat, runPlaySync, setAppSize } from "./_nx.js";

export const config = { maxDuration: 15 };

async function readBody(req) {
  let body = req.body;
  if (body === undefined || body === null) {
    if (typeof req[Symbol.asyncIterator] !== "function") return {};
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 4096) return null;
      chunks.push(chunk);
    }
    body = Buffer.concat(chunks);
  }
  if (Buffer.isBuffer(body)) body = body.toString("utf8");
  if (typeof body === "string") {
    if (body.length > 4096) return null;
    try {
      return JSON.parse(body || "{}");
    } catch {
      return null;
    }
  }
  return typeof body === "object" ? body : null;
}

function sameOrigin(req) {
  const origin = String(req.headers.origin || "");
  if (!origin) return true;
  try {
    return new URL(origin).host === String(req.headers["x-forwarded-host"] || req.headers.host || "");
  } catch {
    return false;
  }
}

function isSecure(req) {
  const host = String(req.headers.host || "");
  return !/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
}

function bearer(req) {
  const h = String(req.headers.authorization || "");
  return h.startsWith("Bearer ") ? h.slice(7).trim() : "";
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  const url = new URL(req.url || "/", "http://localhost");
  const op = url.searchParams.get("op") || "";
  const send = (code, body) => res.status(code).json(body);

  try {
    if (req.method === "POST") {
      if (req.headers["x-nxs"] !== "1" || !sameOrigin(req)) return send(403, { ok: false, error: "forbidden" });
      const secure = isSecure(req);

      if (op === "login") {
        const ip = clientIp(req);
        const state = await failState(ip);
        if (state.retryAfter > 0) {
          res.setHeader("Retry-After", String(state.retryAfter));
          return send(429, { ok: false, error: "locked", retryAfter: state.retryAfter });
        }
        const body = await readBody(req);
        const email = String(body?.email || "").trim().toLowerCase().slice(0, 200);
        const password = String(body?.password || "").slice(0, 200);
        if (!email || !password) return send(400, { ok: false, error: "missing" });
        const data = email === ADMIN_EMAIL ? await passwordLogin(email, password) : null;
        const owner = data && String(data.user?.email || "").toLowerCase() === ADMIN_EMAIL;
        if (!owner) {
          await addFail(ip);
          const after = await failState(ip);
          return send(401, { ok: false, error: "wrong", left: Math.max(0, MAX_FAILS - after.count) });
        }
        await clearFails(ip);
        res.setHeader("Set-Cookie", sessionCookie(data.refresh_token, { secure }));
        return send(200, { ok: true, session: sessionOut(data) });
      }

      if (op === "refresh") {
        const token = readCookie(req);
        if (!token) return send(401, { ok: false, error: "nosession" });
        const data = await refreshLogin(token);
        if (!data || String(data.user?.email || "").toLowerCase() !== ADMIN_EMAIL) {
          res.setHeader("Set-Cookie", sessionCookie("", { secure }));
          return send(401, { ok: false, error: "expired" });
        }
        res.setHeader("Set-Cookie", sessionCookie(data.refresh_token, { secure }));
        return send(200, { ok: true, session: sessionOut(data) });
      }

      // Aşağıdakı bütün əməliyyatlar yalnız təsdiqlənmiş sahib üçündür
      if (op === "chatdel" || op === "setsize" || op === "playsync") {
        if (!(await verifyAdmin(bearer(req)))) return send(401, { ok: false, error: "auth" });
        const body = (await readBody(req)) || {};
        const out =
          op === "chatdel"
            ? await deleteChat(String(body.id || ""))
            : op === "setsize"
              ? await setAppSize({ slug: body.slug, size: body.size, sizeVersion: body.sizeVersion })
              : await runPlaySync();
        return send(out.status, out.body);
      }

      if (op === "logout") {
        await supaLogout(bearer(req));
        res.setHeader("Set-Cookie", sessionCookie("", { secure }));
        return send(200, { ok: true });
      }
      return send(404, { ok: false, error: "op" });
    }

    if (req.method === "GET" && op === "overview") {
      if (!(await verifyAdmin(bearer(req)))) return send(401, { ok: false, error: "auth" });
      const days = Math.max(7, Math.min(90, Number(url.searchParams.get("days")) || 30));
      return send(200, { ok: true, ...(await overview({ days })) });
    }

    const NX_GET = new Set(["chats", "chat", "providers", "library", "apps", "covers", "cover", "deploys"]);
    if (req.method === "GET" && NX_GET.has(op)) {
      if (!(await verifyAdmin(bearer(req)))) return send(401, { ok: false, error: "auth" });
      const fresh = url.searchParams.get("fresh") === "1";
      const p = (k) => url.searchParams.get(k) || "";
      if (op === "chats") return send(200, { ok: true, ...(await listChats({ q: p("q"), offset: p("offset"), limit: p("limit") })) });
      if (op === "chat") {
        const out = await readChat(p("id"));
        return send(out.status, out.body);
      }
      if (op === "providers") return send(200, { ok: true, ...(await providerHealth({ fresh })) });
      if (op === "library") return send(200, { ok: true, ...(await libraryStats({ fresh })) });
      if (op === "apps") return send(200, { ok: true, ...(await appsData({ fresh })) });
      if (op === "covers") return send(200, { ok: true, ...(await coverList({ fresh })) });
      if (op === "deploys") return send(200, { ok: true, ...(await deploys({ fresh })) });
      if (op === "cover") {
        const out = await coverImage(p("file"));
        if (out.status !== 200) return send(out.status, { ok: false });
        res.setHeader("Content-Type", out.type);
        res.setHeader("Cache-Control", "private, max-age=86400");
        res.status(200);
        return res.end(out.buf);
      }
    }

    return send(405, { ok: false, error: "method" });
  } catch {
    return send(500, { ok: false, error: "server" });
  }
}
