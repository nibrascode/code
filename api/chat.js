const SYSTEM = "Sən Nibras AI-san, Nibras Code saytının köməkçisisən. Cavabların qısa, aydın və nəzakətli olsun. İstifadəçi hansı dildə yazırsa, o dildə cavab ver. Tibbi, hüquqi və maliyyə məsləhəti vermə.";

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
    const message = String(body.message || "").trim().slice(0, 800);
    if (!message) {
      res.status(400).json({ success: false, reply: "Mesaj boş ola bilməz." });
      return;
    }
    const history = normalizeHistory(body.messages, message);

    const grokKeys = listGrokKeys();
    let grokDetail = "";
    for (const grokKey of grokKeys) {
      const grok = await askGrok(history, grokKey);
      if (grok.ok) {
        res.status(200).json({ success: true, reply: grok.reply });
        return;
      }
      grokDetail = grok.detail || grokDetail;
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      const gemini = await askGemini(message, geminiKey);
      if (gemini.ok) {
        res.status(200).json({ success: true, reply: gemini.reply });
        return;
      }
    }

    if (grokKeys.length && /incorrect|invalid|unauthorized|api key|permission/i.test(grokDetail)) {
      res.status(200).json({
        success: false,
        reply: "Grok açarı qəbul olunmadı. Vercel-də adını XAI_API_KEY qoyun, dəyəri xai- ilə başlasın və Production üçün yenidən deploy edin.",
      });
      return;
    }

    res.status(200).json({
      success: false,
      reply: "Grok indi cavab verə bilmədi. Bir az sonra yenidən yoxlayın.",
    });
  } catch {
    res.status(200).json({
      success: false,
      reply: "Server xətası. Bir az sonra yenidən cəhd edin.",
    });
  }
}

function listGrokKeys() {
  const preferred = ["XAI_API_KEY", "GROK_API_KEY", "GROK_API", "XAI_KEY", "GROK_KEY", "XAI_API"];
  const names = Object.keys(process.env);
  const values = [];
  const push = (value) => {
    const clean = String(value || "").trim().replace(/^Bearer\s+/i, "").replace(/^["']|["']$/g, "").trim();
    if (clean.length >= 16 && !values.includes(clean)) values.push(clean);
  };
  for (const name of preferred) {
    const hit = names.find((key) => key.toUpperCase() === name);
    if (hit) push(process.env[hit]);
  }
  for (const name of names) {
    if (/grok|xai/i.test(name)) push(process.env[name]);
  }
  values.sort((a, b) => Number(b.startsWith("xai-")) - Number(a.startsWith("xai-")));
  return values;
}

function normalizeHistory(raw, message) {
  const list = Array.isArray(raw) ? raw : [];
  const cleaned = list
    .map((item) => ({
      role: item && item.role === "assistant" ? "assistant" : "user",
      text: String(item && item.text || "").trim().slice(0, 800),
    }))
    .filter((item) => item.text)
    .slice(-8);
  if (!cleaned.length || cleaned[cleaned.length - 1].text !== message) {
    cleaned.push({ role: "user", text: message });
  }
  return cleaned;
}

async function askGrok(history, apiKey) {
  const models = ["grok-4.5", "grok-3-mini", "grok-3"];
  let detail = "Model cavab qaytarmadı.";
  for (const model of models) {
    const upstream = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model,
        temperature: 0.5,
        max_tokens: 700,
        messages: [
          { role: "system", content: SYSTEM },
          ...history.map((item) => ({ role: item.role, content: item.text })),
        ],
      }),
    });
    const data = await upstream.json().catch(() => ({}));
    const reply = String(data.choices?.[0]?.message?.content || "").trim();
    if (upstream.ok && reply) return { ok: true, reply };
    detail = String(data.error?.message || data.error || detail);
    const retryable = /model|not found|does not exist|high demand|unavailable|overloaded|not supported/i.test(detail) || upstream.status === 404;
    if (!retryable) break;
  }
  return { ok: false, detail };
}

async function askGemini(message, apiKey) {
  const models = ["gemini-3.8-flash", "gemini-2.0-flash", "gemini-flash-latest"];
  let detail = "Model cavab qaytarmadı.";
  for (const model of models) {
    const upstream = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { temperature: 0.5, maxOutputTokens: 700 },
        }),
      },
    );
    const data = await upstream.json().catch(() => ({}));
    const reply = (data.candidates?.[0]?.content?.parts || []).map((part) => part.text || "").join("").trim();
    if (upstream.ok && reply) return { ok: true, reply };
    detail = String(data.error?.message || detail);
    const retryable = /high demand|unavailable|not found|no longer available|overloaded|quota/i.test(detail);
    if (!retryable) break;
  }
  return { ok: false, detail };
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
