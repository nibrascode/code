// POST /api/presence  {sid}  -> 204. Anonim canlı sayğac siqnalı; uğursuz olsa da səhifəyə təsir etmir.
import { touch } from "./_presence.js";
import { watch5xx } from "./_ops.js";

export const config = { maxDuration: 5 };

async function readSid(req) {
  let body = req.body;
  if (body === undefined || body === null) {
    if (typeof req[Symbol.asyncIterator] !== "function") return "";
    const chunks = [];
    let size = 0;
    for await (const c of req) {
      size += c.length;
      if (size > 512) return "";
      chunks.push(c);
    }
    body = Buffer.concat(chunks);
  }
  if (Buffer.isBuffer(body)) body = body.toString("utf8");
  if (typeof body === "string") {
    if (body.length > 512) return "";
    try {
      body = JSON.parse(body || "{}");
    } catch {
      return "";
    }
  }
  return body && typeof body === "object" ? body.sid : "";
}

async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex");
  if (req.method !== "POST") return res.status(405).end();
  try {
    await touch(await readSid(req));
  } catch {
    /* səssiz */
  }
  res.status(204).end();
}
export default watch5xx("presence", handler);
