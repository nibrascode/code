export const config = { maxDuration: 60 };

const MODELS = ["grok-imagine-image", "grok-imagine-image-2.0", "grok-imagine-image-quality"];

function env(name) {
  const hit = Object.keys(process.env).find((key) => key.toUpperCase() === name.toUpperCase());
  return hit ? String(process.env[hit] || "").trim().replace(/^Bearer\s+/i, "").replace(/^["']|["']$/g, "") : "";
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ success: false, reply: "Yalnız POST sorğusu qəbul olunur." });
    return;
  }

  try {
    const body = await readJson(req);
    const prompt = String(body.prompt || body.message || "").trim().slice(0, 800);
    const image = String(body.image || "");
    if (!prompt) {
      res.status(400).json({ success: false, reply: "Şəkli qısa təsvir et." });
      return;
    }
    if (image && !/^data:image\/(png|jpeg|jpg|webp);base64,/i.test(image)) {
      res.status(400).json({ success: false, reply: "Şəkil PNG və ya JPG olmalıdır." });
      return;
    }
    if (image.length > 2_800_000) {
      res.status(400).json({ success: false, reply: "Şəkil çox böyükdür. Daha kiçik şəkil seç." });
      return;
    }
    const apiKey = env("XAI_API_KEY");
    if (!apiKey) {
      res.status(503).json({ success: false, reply: "Şəkil xidməti hazırda bağlıdır." });
      return;
    }

    let last = "Şəkil hazırlanmadı.";
    for (const model of MODELS) {
      const result = await imagine(apiKey, model, prompt, image);
      if (result.ok) {
        res.status(200).json({ success: true, url: result.url, reply: image ? "Şəkil düzəldildi." : "Şəkil hazırdır." });
        return;
      }
      last = result.detail || last;
      console.error("image model failed", model, result.status, last);
      if (result.status === 401 || result.status === 403 || result.status === 429) break;
    }
    let reply = "Şəkil hazırlanmadı. Bir az sonra yenidən yoxla.";
    if (/credit|balance|billing|spending|limit/i.test(last)) reply = "Şəkil xidmətinin balansı və ya limiti bitib. Bir az sonra yenidən yoxla.";
    else if (/moderation|policy|safety|content/i.test(last)) reply = "Bu təsvirlə şəkil hazırlamaq olmadı. Başqa cür yaz.";
    else if (/api key|unauthor|invalid.*key|permission/i.test(last)) reply = "Şəkil xidmətinin açarı düzgün deyil.";
    res.status(502).json({ success: false, reply });
  } catch {
    res.status(500).json({ success: false, reply: "Şəkil xidmətinə çatmaq olmadı." });
  }
}

async function imagine(apiKey, model, prompt, image) {
  const editing = Boolean(image);
  const upstream = await fetch(editing ? "https://api.x.ai/v1/images/edits" : "https://api.x.ai/v1/images/generations", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + apiKey },
    signal: AbortSignal.timeout(20000),
    body: JSON.stringify(
      editing
        ? { model, prompt, image: { url: image, type: "image_url" } }
        : model === "grok-imagine-image-2.0" ? { model, prompt, n: 1, quality: "low" } : { model, prompt, n: 1 },
    ),
  });
  const data = await upstream.json().catch(() => ({}));
  const first = Array.isArray(data.data) ? data.data[0] : null;
  const url = first?.url || data.url || (first?.b64_json ? "data:image/png;base64," + first.b64_json : "");
  if (upstream.ok && url) return { ok: true, url };
  const detail = data.error?.message || data.error || data.message || String(upstream.status);
  return { ok: false, status: upstream.status, detail: typeof detail === "string" ? detail : JSON.stringify(detail) };
}

async function readJson(req) {
  const body = req.body;
  if (body && typeof body === "object" && !Buffer.isBuffer(body)) return body;
  if (typeof body === "string") return JSON.parse(body || "{}");
  if (Buffer.isBuffer(body)) return JSON.parse(body.toString("utf8") || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}
