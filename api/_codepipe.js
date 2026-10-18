// Kod tapşırıqları üçün çoxaddımlı boru kəməri: 1) tələb təhlili (yoxlama siyahısı) → 2) güclü modellə yazılış →
// 3) statik yoxlama (JS/HTML parse, Python mötərizə/girinti, yer tutucu) → 4) siyahıya görə özünü yoxlama və düzəliş.
// Model kodu serverdə İCRA OLUNMUR (yalnız parse) — istifadəçi sorğusu ilə yazılmış kodu funksiya daxilində işə salmaq təhlükəlidir.
import vm from "node:vm";
import { askModel, aiConfig } from "./_ai.js";
import { analyzeRequest, verifyAnswer } from "./_codeanalyze.js";

// [provayder, model]: ən güclüdən zəifə. 2026-10-18 yoxlanışı: xai/deepseek krediti bitib, cerebras/nvidia/hf/github işləmir;
// işləyənlər: groq gpt-oss-120b, ollama gpt-oss:120b / nemotron-3-ultra, mistral codestral, openrouter free modelləri, llm7.
// Uğursuz model 10 dəqiqə kənara qoyulur; kredit bərpa olunsa xai/deepseek yenidən birinci sınanır.
export const GEN_MODELS = [
  ["xai", "grok-4.7"],
  ["deepseek", "deepseek-v4-flash"],
  ["groq", "openai/gpt-oss-120b"],
  ["mistral", "codestral-latest"],
  ["ollama", "gpt-oss:120b"],
  ["openrouter", "nvidia/nemotron-3-ultra-550b-a55b:free"],
  ["ollama", "nemotron-3-ultra"],
  ["openrouter", "meta-llama/llama-3.3-70b-instruct"],
  ["llm7", "default"],
];
export const FAST_MODELS = [
  ["mistral", "mistral-small-latest"],
  ["ollama", "gpt-oss:20b"],
  ["groq", "openai/gpt-oss-120b"],
  ["openrouter", "meta-llama/llama-3.3-70b-instruct"],
  ["llm7", "fast"],
];
// Rəy üçün ayrı kvota (ollama) birinci: groq-un dəqiqəlik token həddi yazılışa qalır
export const REVIEW_MODELS = [
  ["xai", "grok-4.7"],
  ["ollama", "gpt-oss:120b"],
  ["groq", "openai/gpt-oss-120b"],
  ["mistral", "codestral-latest"],
  ["openrouter", "nvidia/nemotron-3-ultra-550b-a55b:free"],
];
const cool = new Map(); // "pv/model" -> vaxt (ms) qədər istifadə olunmur
const key = (m) => m[0] + "/" + m[1];
const reasoning = (effort) => (model) => (/gpt-oss/.test(model) ? { reasoning_effort: effort } : null);

const LANG_NAME = { az: "Azerbaijani", en: "English", ru: "Russian", tr: "Turkish", ar: "Arabic" };

export const CODE_RULES = [
  "You are a senior software engineer answering a coding request on Nibras AI.",
  "Write COMPLETE, runnable, correct code that satisfies EVERY item of the requirement checklist exactly (texts, colors, sizes, names, behaviour, edge cases).",
  "Never leave placeholders, TODO, '...', 'your code here' or omitted parts. Never invent APIs or libraries.",
  "Use idiomatic, modern code; validate inputs and handle edge cases and errors explicitly; avoid security bugs (e.g. never put user text into innerHTML — use textContent; parameterize SQL).",
  "HTML/CSS/JS requests: ONE self-contained file (<!DOCTYPE html> … </html>) with inline <style> and <script>, no external dependencies unless asked; it must work when opened directly in a browser.",
  "Python/JavaScript: standard library only unless asked; include a small usage example (and for interactive programs a main guard). Code should run as-is in an online editor (NibrasCode Studio).",
  "A request for a JavaScript/Python function, class or algorithm (no UI asked) gets plain ```javascript / ```python code with the function at top level — NOT an HTML page.",
  "Never mutate the caller's arguments (including nested lists/objects) unless asked; copy first. Check off-by-one, empty input, None/null, negative numbers, duplicates and unicode.",
  "Azerbaijani/Turkish text: str.lower()/toLowerCase() turns 'İ' into 'i̇' (two chars) and 'I' into 'i' — when matching letters, list both cases explicitly (e.g. set('aıoueəiöüAIOUEƏİÖÜ')) or use locale-aware toLocaleLowerCase('tr'/'az').",
  "When the user pasted code to fix or modify: keep their structure and names, change only what is needed, return the full updated code, and say briefly what was wrong / what changed.",
  "Code comments and the explanation must be in the user's language. Format: one short sentence of what the code does, then the code in ONE fenced block with the language tag (```html, ```python, …) unless several files are truly needed, then 2–5 short bullet points: key points and how to run.",
].join("\n");

const ANALYZE_SYS = `You analyze a programming request before code is written. Output ONLY compact JSON, no prose:
{"language":"python|javascript|html|css|sql|c|cpp|java|...","target":"browser single html file|python script|node|sql (dialect)|c program|...","task":"one line","requirements":["each explicit requirement, keep exact texts/colors/sizes/names verbatim"],"edge_cases":["important edge cases/errors to handle"],"defaults":["sensible choices for anything ambiguous"],"modify_existing":true|false}
Max 12 requirements, 6 edge cases, 4 defaults. Be precise and short.`;

function withCfg(system, tokens, ms, extra, fn) {
  const until = Date.now() + ms;
  return aiConfig.run({ system, tokens: () => tokens, timeout: () => AbortSignal.timeout(Math.max(2000, until - Date.now())), temperature: 0.2, ...extra }, fn);
}

async function firstOk(models, system, history, tokens, deadline, perCallMs, effort) {
  for (const m of models) {
    if ((cool.get(key(m)) || 0) > Date.now()) continue;
    const left = deadline - Date.now();
    if (left < 4000) break;
    const r = await withCfg(system, tokens, Math.min(perCallMs, left - 1000), { extraBody: reasoning(effort) }, () => askModel(m[0], m[1], history)).catch((e) => ({ ok: false, detail: String(e && e.name) }));
    if (r && r.skipped) continue;
    if (r && r.ok && String(r.reply || "").trim()) return { name: m[0], model: m[1], reply: String(r.reply) };
    // kredit/limit/açar xətası: model 10 dəq kənarda; vaxt aşımı: 2 dəq
    const d = String((r && r.detail) || "");
    cool.set(key(m), Date.now() + (/rate.?limit|too many|429|TPM|tokens per minute|concurrent/i.test(d) ? 45000 : /Timeout|abort/i.test(d) ? 120000 : 600000));
  }
  return null;
}

export function parseChecklist(text) {
  const m = String(text || "").match(/\{[\s\S]*\}/);
  if (!m) return null;
  try {
    const j = JSON.parse(m[0]);
    if (!j || !Array.isArray(j.requirements)) return null;
    const arr = (x, n) => (Array.isArray(x) ? x.map((s) => String(s).slice(0, 200)).filter(Boolean).slice(0, n) : []);
    return { language: String(j.language || "").slice(0, 30), target: String(j.target || "").slice(0, 80), task: String(j.task || "").slice(0, 200), requirements: arr(j.requirements, 12), edge_cases: arr(j.edge_cases, 6), defaults: arr(j.defaults, 4), modify: !!j.modify_existing };
  } catch {
    return null;
  }
}

export function checklistText(c) {
  if (!c) return "";
  const L = (t, a) => (a.length ? t + "\n" + a.map((x) => "- " + x).join("\n") : "");
  return ["REQUIREMENT CHECKLIST (must all be satisfied):", c.task ? "Task: " + c.task : "", c.language ? "Language: " + c.language + (c.target ? " — target: " + c.target : "") : "", L("Requirements:", c.requirements), L("Edge cases to handle:", c.edge_cases), L("Defaults for unspecified details:", c.defaults)].filter(Boolean).join("\n");
}

// ---------- statik yoxlama ----------
export function codeBlocks(text) {
  const out = [];
  const re = /```([\w+#.-]*)[^\n]*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(String(text || "")))) out.push({ lang: (m[1] || "").toLowerCase(), code: m[2] });
  return out;
}

function parseJs(code, label) {
  let src = String(code)
    .replace(/^\s*import\s[^;\n]*;?\s*$/gm, "")
    .replace(/^\s*export\s+default\s+/gm, "")
    .replace(/^\s*export\s+(?=(async\s+)?function|const|let|var|class)/gm, "")
    .replace(/^\s*export\s*\{[^}]*\};?\s*$/gm, "");
  try {
    new vm.Script(src, { filename: label });
    return null;
  } catch (e) {
    try {
      new vm.Script("(async function(){\n" + src + "\n})", { filename: label }); // üst səviyyə await/return
      return null;
    } catch {
      /* ilk (sadə skript) xətası göstərilir */
    }
    const ln = String(e.stack || "").match(/:(\d+)\n/);
    return `${label}: ${e.name}: ${e.message}${ln ? " (line " + ln[1] + ")" : ""}`;
  }
}

// Python: mötərizə/dırnaq balansı, «:» sonrası blok, tab+boşluq qarışığı (server tərəfdə Python yoxdur)
function checkPython(code) {
  const errs = [];
  const lines = String(code).split("\n");
  const stack = [];
  let inStr = null;
  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    if (!inStr && /^\t+ +\S|^ +\t+\S/.test(line)) errs.push(`python: line ${li + 1}: mixed tabs and spaces`);
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inStr) {
        if (ch === "\\") { i++; continue; }
        if (inStr.length === 3 ? line.startsWith(inStr, i) : ch === inStr) { i += inStr.length - 1; inStr = null; }
        continue;
      }
      if (ch === "#") break;
      if (ch === '"' || ch === "'") { inStr = line.startsWith(ch.repeat(3), i) ? ch.repeat(3) : ch; i += inStr.length - 1; continue; }
      if ("([{".includes(ch)) stack.push([ch, li + 1]);
      else if (")]}".includes(ch)) {
        const top = stack.pop();
        if (!top || "([{".indexOf(top[0]) !== ")]}".indexOf(ch)) { errs.push(`python: line ${li + 1}: unmatched '${ch}'`); return errs; }
      }
    }
    if (inStr && inStr.length === 1) { errs.push(`python: line ${li + 1}: unterminated string`); inStr = null; }
    if (!inStr && !stack.length && /^\s*(def|class|if|elif|else|for|while|try|except|finally|with)\b[^#]*:\s*(#.*)?$/.test(line)) {
      const ind = line.match(/^\s*/)[0].length;
      let j = li + 1;
      while (j < lines.length && !lines[j].trim()) j++;
      if (j >= lines.length || lines[j].match(/^\s*/)[0].length <= ind) errs.push(`python: line ${li + 1}: expected an indented block`);
    }
  }
  if (stack.length) errs.push(`python: line ${stack[stack.length - 1][1]}: '${stack[stack.length - 1][0]}' never closed`);
  if (inStr) errs.push("python: unterminated triple-quoted string");
  return errs;
}

function checkHtml(code) {
  const errs = [];
  const src = String(code);
  const full = /<html|<!doctype/i.test(src);
  if (full && !/<\/html>\s*$/i.test(src.trim())) errs.push("html: file is incomplete (missing </html> at the end)");
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m, n = 0;
  while ((m = re.exec(src))) {
    n++;
    if (/\bsrc=|type=["']?(text\/(template|x-)|application\/(json|ld))/i.test(m[1])) continue;
    const e = parseJs(m[2], "html <script> #" + n);
    if (e) errs.push(e);
  }
  if ((src.match(/<script\b/gi) || []).length !== (src.match(/<\/script>/gi) || []).length) errs.push("html: unbalanced <script> tags");
  if ((src.match(/<style\b/gi) || []).length !== (src.match(/<\/style>/gi) || []).length) errs.push("html: unbalanced <style> tags");
  const css = [...src.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((x) => x[1]).join("\n");
  if (css && (css.match(/\{/g) || []).length !== (css.match(/\}/g) || []).length) errs.push("css: unbalanced braces in <style>");
  return errs;
}

const PLACEHOLDER = /(\/\/|#|<!--|\/\*)\s*(TODO\b|FIXME|[Yy]our code here|add (the )?rest|rest of (the )?code|kodun qalanı|остальной код|\.\.\.\s*(-->|\*\/)?\s*$)|^\s*(\.\.\.|…)\s*$/m;

export function staticCheck(reply) {
  const bs = codeBlocks(reply);
  const errs = [];
  if ((String(reply).match(/```/g) || []).length % 2) errs.push("answer: a code block is not closed (truncated)");
  if (!bs.length) return { errs: errs.concat(["answer: no fenced code block"]), blocks: 0 };
  bs.forEach((b, i) => {
    const label = `block ${i + 1} (${b.lang || "?"})`;
    if (PLACEHOLDER.test(b.code)) errs.push(label + ": contains a placeholder/omitted part");
    if (/^(js|javascript|mjs|node|jsx)$/.test(b.lang)) { const e = parseJs(b.code, label); if (e) errs.push(e); }
    else if (/^(html|htm)$/.test(b.lang)) errs.push(...checkHtml(b.code));
    else if (/^(python|py)$/.test(b.lang)) errs.push(...checkPython(b.code));
    else if (b.lang === "json") { try { JSON.parse(b.code); } catch (e) { errs.push(label + ": invalid JSON: " + e.message); } }
    else if (b.lang === "css" && (b.code.match(/\{/g) || []).length !== (b.code.match(/\}/g) || []).length) errs.push(label + ": unbalanced braces");
  });
  return { errs: errs.slice(0, 8), blocks: bs.length };
}

const REVIEW_SYS = (lang) => `You are a strict code reviewer. You get a user's programming request, a requirement checklist, a candidate answer and automatic check results.
Check the code line by line and mentally run it on the checklist edge cases and on 2–3 tricky inputs of your own (empty input, boundaries, unicode such as Azerbaijani/Turkish İ/ı, input mutation, repeated calls/timers). Does it satisfy EVERY checklist item exactly (texts, colors, sizes, names, behaviour)? Does it run without syntax/runtime errors? Are edge cases and invalid input handled? Any security bug (innerHTML with user text, SQL injection)? Any placeholder or omitted code? Is the explanation correct and in ${lang}?
If automatic checks report errors you MUST fix them. If everything is correct reply with exactly: APPROVED
Otherwise reply with the COMPLETE corrected final answer for the user (same format: one sentence, full code in one fenced block, short bullets), with no mention of review, checklist or previous version.`;

function isApproved(t) {
  return /^\s*\**APPROVED\**\.?\s*$/i.test(String(t || "").split("\n").slice(0, 2).join(" ").trim()) || (/^\s*\**APPROVED/i.test(t) && !/```/.test(t));
}

// history: normalizeHistory nəticəsi (son element istifadəçi mesajıdır); baseSystem: chat.js SYSTEM (uydurma qadağası və s.)
export async function codePipeline({ message, history, baseSystem, uiLang = "az", kbText = "", deadline, genModels = GEN_MODELS, noReview = false }) {
  const t0 = Date.now();
  const steps = [];
  const langName = LANG_NAME[uiLang] || "the user's language";
  const userHist = history.filter((h) => h.role !== "system");
  const kbHist = kbText ? [{ role: "system", text: kbText }] : [];

  // 1) tələb təhlili: öz deterministik analizatorumuz (LLM-siz); yalnız hədəf/dil bilinmirsə LLM ehtiyat kimi
  const sec = () => "@" + Math.round((Date.now() - t0) / 1000) + "s";
  const ana = analyzeRequest(message, userHist);
  let checklist = ana;
  if (ana.confidence < 0.6) {
    const an = await firstOk(FAST_MODELS, ANALYZE_SYS, userHist.slice(-4), 1500, Math.min(deadline, t0 + 12000), 8000, "low");
    const llm = an ? parseChecklist(an.reply) : null;
    if (llm) checklist = { ...llm, requirements: [...new Set([...ana.requirements, ...llm.requirements])].slice(0, 14), expect: ana.expect };
    steps.push((llm ? "analyze:llm:" + an.name : "analyze:local-low") + sec());
  } else steps.push("analyze:local" + sec());

  // 2) yazılış (güclü model)
  const genSystem = [baseSystem, CODE_RULES, `Answer in ${langName} (match the user's message language if it differs).`, checklistText(checklist)].filter(Boolean).join("\n\n");
  const gen = await firstOk(genModels, genSystem, [...kbHist, ...history.filter((h) => h.role !== "system" || h.text !== kbText)], 8000, deadline - 8000, 50000, "medium");
  if (!gen) return null;
  let answer = gen.reply;
  let engine = gen.name + (gen.model ? "/" + gen.model : "");
  steps.push("generate:" + engine + sec());

  // 3) yerli yoxlama: sintaksis + yoxlama siyahısı (mətn, rəng, ölçü, ad, dil, HTML-siz funksiya, localStorage…)
  const fullCheck = (txt) => { const st = staticCheck(txt); return { blocks: st.blocks, errs: [...st.errs, ...verifyAnswer(txt, checklist)].slice(0, 10) }; };
  let check = fullCheck(answer);
  const accept = (cand, by, tag) => {
    const c2 = fullCheck(cand);
    // düzəliş yalnız kod bloku olan və yerli xətası çox olmayan cavabla qəbul edilir
    if (c2.blocks && c2.errs.length <= check.errs.length) { answer = cand; check = c2; steps.push(tag + ":" + by + sec()); return true; }
    steps.push(tag + ":rejected");
    return false;
  };
  const fixLocal = async () => {
    const fixMsg = "Your previous answer fails these automatic checks:\n- " + check.errs.join("\n- ") + "\n\nFix ALL of them. Return the COMPLETE corrected final answer (same format), nothing else.\n\nPREVIOUS ANSWER:\n" + answer;
    const fx = await firstOk([[gen.name, gen.model], ...REVIEW_MODELS], genSystem, [{ role: "user", text: message }, { role: "user", text: fixMsg }], 8000, deadline - 3000, Math.min(40000, Math.max(10000, deadline - Date.now() - 4000)), "medium");
    if (!fx) { steps.push("fix:fail"); return false; }
    return accept(fx.reply, fx.name, "fix");
  };
  // a) yerli problem varsa — birbaşa yazan modelə düzəliş (rəyçi LLM-siz)
  if (check.errs.length && !noReview && deadline - Date.now() > 15000) await fixLocal();
  // b) LLM rəyçi yalnız mürəkkəb tapşırıqda (alqoritm, düzəliş/dəyişiklik, çox tələb) və ya yerli xəta qalıbsa
  const complex = (checklist.complexity ?? ana.complexity) >= 2;
  if (!noReview && (complex || check.errs.length) && deadline - Date.now() > 20000) {
    const reviewMsg = [
      "USER REQUEST:\n" + message,
      checklistText(checklist) || "(no checklist; infer requirements from the request)",
      "AUTOMATIC CHECKS: " + (check.errs.length ? "\n- " + check.errs.join("\n- ") : "no problems detected by local checks (still verify logic and edge cases)"),
      "CANDIDATE ANSWER:\n" + answer,
    ].join("\n\n");
    const rv = await firstOk(REVIEW_MODELS, [baseSystem, REVIEW_SYS(langName)].join("\n\n"), [{ role: "user", text: reviewMsg }], 8000, deadline - 3000, Math.min(40000, deadline - Date.now() - 4000), "medium");
    if (!rv) steps.push("review:fail");
    else if (isApproved(rv.reply)) steps.push("review:approved:" + rv.name + sec());
    else accept(rv.reply.replace(/^\s*(CORRECTED( ANSWER)?)\s*:?\s*/i, ""), rv.name, "review:fixed");
    if (check.errs.length && deadline - Date.now() > 15000) await fixLocal();
  } else if (!check.errs.length) steps.push("review:skip-local-ok");
  if (check.errs.length) steps.push("errs:" + check.errs.length);
  // bəzi modellər «‑» (U+2011) və dar boşluq yazır: kodda xəta verməsin deyə ASCII-yə çevrilir
  answer = answer.replace(/[\u2010\u2011]/g, "-").replace(/[\u202F\u00A0]/g, " ");
  return { reply: answer, engine, steps, ms: Date.now() - t0, checklist };
}
