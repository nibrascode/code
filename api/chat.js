const SYSTEM = "Sən Nibras AI-san, Nibras Code saytının köməkçisisən. Cavabların qısa, aydın və nəzakətli olsun. İstifadəçi hansı dildə yazırsa, o dildə cavab ver. Tibbi, hüquqi və maliyyə məsləhəti vermə.";

export const config = { maxDuration: 25 };

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
    const order = pickOrder(message);
    const notes = [];
    const started = Date.now();

    for (const name of order) {
      if (Date.now() - started > 18000) break;
      const result = await ask(name, history, message);
      if (result.skipped) continue;
      if (result.ok) {
        res.status(200).json({ success: true, reply: result.reply, via: name });
        return;
      }
      notes.push(name + ": " + String(result.detail || "xəta").slice(0, 140));
      if (notes.length >= 5) break;
    }

    res.status(200).json({
      success: false,
      reply: notes.join(" | ") || "Heç bir AI açarı işləmədi.",
    });
  } catch {
    res.status(200).json({
      success: false,
      reply: "Server xətası. Bir az sonra yenidən cəhd edin.",
    });
  }
}

function pickOrder(message) {
  const q = message.toLowerCase();
  if (/(python|javascript|typescript|\bjava\b|c#|c\+\+|sql|html|css|\bkod\b|funksiya|function|\bbug\b|algoritm|regex|proqramlaş|react|node\.?js)/i.test(q)) {
    return ["mistral-code", "groq", "github", "openrouter", "gemini", "hf", "xai"];
  }
  if (/(niyə|nədən|neden|почему|hesabla|hesab|riyaz|riyazi|isbat|müqayisə|fərqi|analiz|\d+\s*[\+\-\*\/]\s*\d+|explain|solve)/i.test(q)) {
    return ["xai", "groq-reason", "mistral", "openrouter", "gemini", "hf"];
  }
  if (/(bu gün|bugün|today|xəbər|xeber|hava |qiymət|latest|dünən|sabah)/i.test(q)) {
    return ["xai", "openrouter", "groq", "gemini", "hf"];
  }
  if (/(şeir|hekayə|şer|yazı yaz|poem|story|yaradıcı)/i.test(q)) {
    return ["mistral", "xai", "groq", "gemini", "openrouter"];
  }
  return ["groq", "xai", "mistral", "gemini", "openrouter", "hf", "github"];
}

async function ask(name, history, message) {
  if (name === "groq") return askGroq(history, "llama-3.3-70b-versatile");
  if (name === "groq-reason") return askGroq(history, "deepseek-r1-distill-llama-70b", "llama-3.3-70b-versatile");
  if (name === "xai") return askXai(history);
  if (name === "mistral") return askMistral(history, ["mistral-small-latest", "codestral-latest"]);
  if (name === "mistral-code") return askMistral(history, ["codestral-latest", "mistral-small-latest"]);
  if (name === "openrouter") return askOpenRouter(history);
  if (name === "hf") return askHf(history);
  if (name === "gemini") return askGemini(message);
  if (name === "github") return askGithub(history);
  return { skipped: true };
}

function env(name) {
  const hit = Object.keys(process.env).find((key) => key.toUpperCase() === name.toUpperCase());
  return hit ? String(process.env[hit] || "").trim().replace(/^Bearer\s+/i, "").replace(/^["']|["']$/g, "") : "";
}

async function askGroq(history, model, fallback) {
  const apiKey = env("GROQ_API_KEY");
  if (!apiKey) return { skipped: true };
  const first = await complete({
    url: "https://api.groq.com/openai/v1/chat/completions",
    apiKey,
    model,
    history,
  });
  if (first.ok || !fallback) return first;
  return complete({
    url: "https://api.groq.com/openai/v1/chat/completions",
    apiKey,
    model: fallback,
    history,
  });
}

async function askXai(history) {
  const apiKey = env("XAI_API_KEY");
  if (!apiKey) return { skipped: true };
  for (const model of ["grok-4.5", "grok-3-mini", "grok-3"]) {
    const result = await complete({
      url: "https://api.x.ai/v1/chat/completions",
      apiKey,
      model,
      history,
    });
    if (result.ok) return result;
    if (!/model|not found|does not exist|unsupported/i.test(result.detail || "")) return result;
  }
  return { ok: false, detail: "xAI cavab vermədi." };
}

async function askMistral(history, models) {
  const apiKey = env("MISTRAL_API_KEY");
  if (!apiKey) return { skipped: true };
  let last = { ok: false, detail: "Mistral cavab vermədi." };
  for (const model of models) {
    last = await complete({
      url: "https://api.mistral.ai/v1/chat/completions",
      apiKey,
      model,
      history,
    });
    if (last.ok) return last;
    if (!/model|not found|unknown|invalid/i.test(last.detail || "")) return last;
  }
  return last;
}

async function askOpenRouter(history) {
  const apiKey = env("OPENROUTER_API_KEY");
  if (!apiKey) return { skipped: true };
  return complete({
    url: "https://openrouter.ai/api/v1/chat/completions",
    apiKey,
    model: "meta-llama/llama-3.3-70b-instruct",
    history,
    extraHeaders: {
      "HTTP-Referer": "https://www.nibrascode.com",
      "X-Title": "Nibras AI",
    },
  });
}

async function askHf(history) {
  const apiKey = env("HF_TOKEN");
  if (!apiKey) return { skipped: true };
  return complete({
    url: "https://router.huggingface.co/v1/chat/completions",
    apiKey,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    history,
  });
}

async function askGithub(history) {
  const apiKey = env("GITHUB_MODELS_TOKEN") || env("GH_MODELS_TOKEN") || env("GITHUB_TOKEN");
  if (!apiKey) return { skipped: true };
  return complete({
    url: "https://models.github.ai/inference/chat/completions",
    apiKey,
    model: "openai/gpt-4.1-mini",
    history,
  });
}

async function askGemini(message) {
  const apiKey = env("GEMINI_API_KEY");
  if (!apiKey) return { skipped: true };
  const models = ["gemini-3.8-flash", "gemini-2.0-flash", "gemini-flash-latest"];
  let detail = "Gemini cavab vermədi.";
  for (const model of models) {
    const upstream = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        signal: AbortSignal.timeout(6000),
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
    if (!/high demand|unavailable|not found|no longer available|overloaded|quota/i.test(detail)) break;
  }
  return { ok: false, detail };
}

async function complete({ url, apiKey, model, history, extraHeaders }) {
  const upstream = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
      ...(extraHeaders || {}),
    },
    signal: AbortSignal.timeout(8000),
    body: JSON.stringify({
      model,
      temperature: 0.4,
      max_tokens: 700,
      messages: [
        { role: "system", content: SYSTEM },
        ...history.map((item) => ({ role: item.role, content: item.text })),
      ],
    }),
  });
  const data = await upstream.json().catch(() => ({}));
  const reply = stripThink(String(data.choices?.[0]?.message?.content || ""));
  if (upstream.ok && reply) return { ok: true, reply };
  const detail = data.error?.message || data.error || data.message || upstream.status;
  return { ok: false, detail: typeof detail === "string" ? detail : JSON.stringify(detail) };
}

function stripThink(text) {
  return text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
}

function normalizeHistory(raw, message) {
  const list = Array.isArray(raw) ? raw : [];
  const cleaned = list
    .map((item) => ({
      role: item && item.role === "assistant" ? "assistant" : "user",
      text: String((item && item.text) || "").trim().slice(0, 800),
    }))
    .filter((item) => item.text)
    .slice(-8);
  if (!cleaned.length || cleaned[cleaned.length - 1].text !== message) {
    cleaned.push({ role: "user", text: message });
  }
  return cleaned;
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
