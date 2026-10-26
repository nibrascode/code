// Nibras Error Help: proqramçının xəta mesajını yeni başlayan üçün izah edir (mövcud Nibras AI provayderləri)
import { askProvider, aiConfig, configuredProviders } from "./_ai.js";
import { langDirective } from "./_lang.js";
import { watch5xx } from "./_ops.js";

export const config = { maxDuration: 45 };

const LANGS = ["az", "en", "tr", "ru", "ar"];
const STACKS = { auto: "Auto-detect", python: "Python", javascript: "JavaScript", android: "Android/Gradle" };
const ORDER = ["groq", "mistral-code", "cerebras", "openrouter", "github", "deepseek", "xai", "sambanova", "nvidia", "gemini", "llm7"];
const GAP_MS = 4000;
const seen = new Map();

const SYSTEM = [
  "You are Nibras Error Help on nibrascode.com. A programmer pastes an error message or stack trace.",
  "Explain it for a beginner: what it means, the likely causes, what to check, and a short example.",
  "Focus areas: Python, JavaScript/TypeScript/Node, Android/Gradle/Kotlin/Java. Other stacks are fine too.",
  "Never invent APIs, flags, functions, Gradle options or library versions that do not exist. If unsure, say so plainly in 'meaning'.",
  "If the text is not an error message, say so in 'meaning' and leave the lists short.",
  "Keep the example short (under 15 lines) and runnable when possible: show the broken line and the fixed line.",
  "Respond with ONLY a JSON object, no markdown fences, with keys:",
  '{"meaning": string, "causes": string[] (2-5), "checklist": string[] (3-6), "example": string (code), "stack": "python"|"javascript"|"android"|"other"}.',
  "Code identifiers and the example code stay in their original language; the explanation text uses the reply language.",
].join(" ");

function clientIp(req) {
  return String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "0";
}
function limited(ip) {
  const now = Date.now();
  if (seen.size > 500) for (const [k, at] of seen) if (now - at > GAP_MS) seen.delete(k);
  if (now - (seen.get(ip) || 0) < GAP_MS) return true;
  seen.set(ip, now);
  return false;
}

export function parseAnswer(text) {
  const raw = String(text || "").replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
  const a = raw.indexOf("{"), b = raw.lastIndexOf("}");
  if (a < 0 || b <= a) return null;
  let j;
  try { j = JSON.parse(raw.slice(a, b + 1)); } catch { return null; }
  const list = (v) => (Array.isArray(v) ? v : []).map((x) => String(x).trim()).filter(Boolean).slice(0, 8);
  const meaning = String(j.meaning || "").trim();
  if (!meaning) return null;
  return { meaning, causes: list(j.causes), checklist: list(j.checklist), example: String(j.example || "").trim().slice(0, 4000), stack: String(j.stack || "other") };
}

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const error = String(body?.error || "").trim().slice(0, 6000);
  const lang = LANGS.includes(body?.lang) ? body.lang : "en";
  const stack = STACKS[body?.stack] ? body.stack : "auto";
  if (error.length < 3) return res.status(400).json({ ok: false, error: "empty" });
  if (limited(clientIp(req))) return res.status(429).json({ ok: false, error: "rate" });

  const have = new Set(configuredProviders());
  const names = ORDER.filter((n) => have.has(n.replace(/-code$/, "")));
  const hint = stack === "auto" ? "Stack: detect from the text." : `Stack hint from the user: ${STACKS[stack]}.`;
  const message = `${hint}\n\nError message:\n<<<\n${error}\n>>>`;
  const history = [{ role: "user", content: message }];
  const run = { system: SYSTEM + langDirective(lang), tokens: () => 1200, timeout: (base) => AbortSignal.timeout(Math.min(base, 20000)), temperature: 0.2 };
  const deadline = Date.now() + 38000;
  for (const name of names) {
    if (Date.now() > deadline) break;
    try {
      const r = await aiConfig.run(run, () => askProvider(name, history, message));
      const text = typeof r === "string" ? r : r?.text || r?.reply || r?.content;
      const ans = parseAnswer(text);
      if (ans) return res.status(200).json({ ok: true, ...ans });
    } catch { /* növbəti provayder */ }
  }
  return res.status(503).json({ ok: false, error: "ai" });
}
export default watch5xx("error-help", handler);
