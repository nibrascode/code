// Nibras /test — dini axtarış: Fətva (İbn Baz + İbn Useymin, Şamilə üzərindən) və Kitabxana (Şamilə + Dorar).
// Heç nə saxlanmır, sorğu mətni log edilmir. Şamilə cavabındakı `notice` sahəsi istifadə olunmur.
import https from "node:https";

const UA = "NibrasCode/1.0 (+https://nibrascode.com/test)";
const SHAMELA = "https://mcp.shamela.ws/";
const MAXQ = 300;
const FATWA_AUTHORS = ["ابن باز", "ابن عثيمين"];
const PAGE_CHARS = 2500;
const FULL_CHARS = 40000;

// ---- sadə rate limit (instansiya daxilində, IP üzrə) ----
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return arr.length > 20;
}

function clean(v) {
  return String(v || "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .replace(/[\u202a-\u202e\u2066-\u2069]/g, "")
    .replace(/\r\n?/g, "\n").replace(/[ \t\u00a0]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function clip(v, max) {
  return v.length <= max ? { text: v, truncated: false } : { text: v.slice(0, max).replace(/\s+\S*$/, "") + " …", truncated: true };
}
const int = (v) => (typeof v === "number" && Number.isSafeInteger(v) && v > 0 ? v : null);
const pageUrl = (b, p) => `https://shamela.ws/book/${b}/${p}`;

let rpcId = 0;
async function shamela(name, args, timeoutMs = 9000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(SHAMELA, {
      method: "POST", signal: ctrl.signal,
      headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream", "User-Agent": UA },
      body: JSON.stringify({ jsonrpc: "2.0", id: ++rpcId, method: "tools/call", params: { name, arguments: args } }),
    });
    if (!r.ok) throw new Error("upstream " + r.status);
    const ct = r.headers.get("content-type") || "";
    let body = (await r.text()).trim();
    let msg;
    if (!ct.includes("event-stream") && body.startsWith("{")) msg = JSON.parse(body);
    else for (const block of body.split(/\r?\n\r?\n/)) {
      const data = block.split(/\r?\n/).filter((l) => l.startsWith("data:")).map((l) => l.slice(5).trim()).join("\n");
      try { const p = JSON.parse(data); if (p.result || p.error) msg = p; } catch {}
    }
    if (!msg || msg.error || !msg.result || msg.result.isError) throw new Error("tool error");
    const text = msg.result.content?.find((c) => typeof c?.text === "string")?.text;
    if (text) try { return JSON.parse(text); } catch {}
    if (msg.result.structuredContent) return msg.result.structuredContent;
    throw new Error("unreadable");
  } finally { clearTimeout(timer); }
}

function citation(md) {
  const m = /^\[(.*)\]\((https:\/\/shamela\.ws\/[^\s)]+)\)\s*$/s.exec(String(md || "").trim());
  if (!m) return { title: "", label: "" };
  const inner = m[1].trim();
  const lm = /\(([^()]*)\)\s*$/.exec(inner);
  return { title: lm ? inner.slice(0, lm.index).trim() : inner, label: lm ? lm[1].trim() : "" };
}
function readSources(v) {
  if (!Array.isArray(v)) return [];
  return v.map((s) => s && {
    bookId: int(s.book_id), pageId: int(s.page_id), text: clean(s.text),
    citation: s.citation?.markdown || "", prev: int(s.navigation?.previous_page_id), next: int(s.navigation?.next_page_id),
  }).filter((s) => s && s.bookId && s.pageId && s.text);
}
function toItem(meta, src) {
  const c = citation(src?.citation || meta.citation);
  const { text, truncated } = clip(src ? src.text : meta.preview, PAGE_CHARS);
  return {
    bookId: meta.bookId, pageId: src?.pageId || meta.pageId, title: meta.title || c.title, author: meta.author, label: c.label,
    text, url: pageUrl(meta.bookId, src?.pageId || meta.pageId),
    prevPageId: src ? src.prev : meta.pageId > 1 ? meta.pageId - 1 : null, nextPageId: src ? src.next : meta.pageId + 1,
    truncated: truncated || !src,
  };
}

async function searchShamela(query, { cursor = null, seen = [], fatwa = false } = {}) {
  const args = { keywords: [query.slice(0, 200)], difficulty: "easy" };
  if (cursor) args.cursor = cursor;
  if (fatwa) {
    args.author_queries = ["عبد العزيز بن باز", "محمد بن صالح العثيمين"];
    args.book_queries = ["مجموع فتاوى ابن باز", "مجموع فتاوى ورسائل العثيمين", "فتاوى نور على الدرب"];
    
  }
  const found = await shamela("shamela_find", args, fatwa ? 8000 : 15000);
  const evidence = readSources(found.evidence?.sources);
  const seenSet = new Set(seen.map(String));
  const metas = [];
  const layers = (Array.isArray(found.layers) ? found.layers : []).sort((a, b) => (a.key === "main" ? 0 : 1) - (b.key === "main" ? 0 : 1));
  for (const layer of layers) for (const r of layer.results || []) {
    const bookId = int(r?.book_id), pageId = int(r?.page_id);
    if (!bookId || !pageId) continue;
    const author = clean(r.author);
    if (fatwa && !FATWA_AUTHORS.includes(author)) continue;
    const key = fatwa ? `${bookId}:${pageId}` : `${bookId}`;
    if (seenSet.has(key)) continue;
    seenSet.add(key);
    metas.push({ bookId, pageId, title: clean(r.title), author, preview: clean(r.preview), citation: r.citation?.markdown || "", key });
  }
  // Fətva rejimində eyni kitabdan bir neçə səhifə ola bilər (evidence-dəki digər səhifələr də).
  if (fatwa) for (const s of evidence) {
    const meta = metas.find((m) => m.bookId === s.bookId);
    if (meta && !seenSet.has(`${s.bookId}:${s.pageId}`) && Math.abs(s.pageId - meta.pageId) > 1) {
      seenSet.add(`${s.bookId}:${s.pageId}`);
      metas.push({ ...meta, pageId: s.pageId, key: `${s.bookId}:${s.pageId}`, preview: "", citation: s.citation });
    }
  }
  const page = metas.slice(0, 5);
  const missing = page.filter((m) => !evidence.some((s) => s.bookId === m.bookId && s.pageId === m.pageId));
  let opened = [];
  if (missing.length) {
    try {
      const r = await shamela("shamela_open_many", { pages: missing.map((m) => ({ book_id: m.bookId, page_id: m.pageId, max_chars: PAGE_CHARS })), context: 0, max_total_chars: PAGE_CHARS * missing.length });
      opened = readSources(r.sources);
    } catch {}
  }
  const all = [...evidence, ...opened];
  const items = page.map((m) => toItem(m, all.find((s) => s.bookId === m.bookId && s.pageId === m.pageId))).filter((i) => i.text);
  const next = typeof found.next_cursor === "string" && found.next_cursor ? found.next_cursor.slice(0, 4096) : null;
  const leftover = metas.length > 5;
  return { items, seen: [...seen.map(String), ...page.map((m) => m.key)], hasMore: leftover || Boolean(next), cursor: leftover ? cursor : next };
}

async function openPage(bookId, pageId) {
  let r = await shamela("shamela_open", { book_id: bookId, page_id: pageId, max_chars: 8000 });
  const [s] = readSources([r]);
  if (!s || s.bookId !== bookId) throw new Error("not found");
  let text = s.text;
  let more = typeof r.next_cursor === "string" && r.next_cursor ? r.next_cursor : null;
  const until = Date.now() + 12000;
  for (let i = 0; more && text.length < FULL_CHARS && i < 6 && until - Date.now() > 500; i++) {
    try { r = await shamela("shamela_open", { book_id: bookId, page_id: s.pageId, max_chars: 8000, cursor: more }, until - Date.now()); } catch { break; }
    const piece = clean(r.text);
    if (!piece) break;
    text += "\n" + piece;
    more = typeof r.next_cursor === "string" && r.next_cursor ? r.next_cursor : null;
  }
  const c = citation(s.citation);
  const cl = clip(text, FULL_CHARS);
  return { bookId, pageId: s.pageId, title: c.title, label: c.label, text: cl.text, url: pageUrl(bookId, s.pageId), prevPageId: s.prev, nextPageId: s.next, truncated: cl.truncated || Boolean(more) };
}

// ---- Fətvanın tam cavabı: cavab işarəsindən sonrakı sualadək (lazım olsa növbəti səhifələrlə) ----
const ANSWER_RE = /(?:^|\n|\s)(?:ج[\d٠-٩]*\s*[:：]|الجواب\s*[:：]|فأجاب(?:\s+(?:فضيلته|سماحته|رحمه الله(?: تعالى)?|الشيخ))*\s*(?:بقوله)?\s*[:：]?)/;
const NEXTQ_RE = /\n\s*(?:\*\s*\*\s*\*|[\d٠-٩]+\s*[-–]\s*[\u0600-\u06ff][^\n]{0,120}\n|(?:[\d٠-٩]+\s*[/\-–]\s*)?(?:س[\d٠-٩]*\s*[:：]|السؤال\s*[:：]?|سئل\s+(?:فضيلة|سماحة|الشيخ)|يقول السائل|سؤال\s*[:：]|المستمع))/;
function tidy(t) {
  return t.split(/\n_{5,}[\s\S]*?(?=\n\n|$)/)[0]
    .replace(/\s?\((?:[\d٠-٩]{1,3})\)(?=\s|[.,،]|$)/g, "")
    .replace(/\[ص:?\s*[\d٠-٩]+\]/g, "")
    .replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
async function fatwaFull(bookId, pageId) {
  const first = await openPage(bookId, pageId);
  const pageText = (p) => p.text.replace(/\s*…$/, "").split(/\n_{5,}/)[0];
  let text = pageText(first);
  const m = ANSWER_RE.exec(text);
  let body = m ? text.slice(m.index + m[0].length) : text;
  let ended = false;
  const cut = (t) => { const q = NEXTQ_RE.exec(t); if (q) { ended = true; return t.slice(0, q.index); } return t; };
  body = cut(body);
  let next = first.nextPageId, pages = 1;
  const until = Date.now() + 15000;
  while (!ended && next && pages < 5 && until - Date.now() > 1500) {
    let p;
    try { p = await openPage(bookId, next); } catch { break; }
    const piece = cut("\n" + pageText(p)).replace(/^\n+/, "");
    if (piece.trim()) body = body.replace(/\s+$/, "") + (/[.!؟?:»)]\s*$/.test(body.trim()) ? "\n\n" : " ") + piece;
    next = p.nextPageId; pages++;
  }
  return { bookId, pageId, title: first.title, label: first.label, url: first.url, answer: tidy(body.replace(/^[\s:：-]+/, "")), found: Boolean(m), pages };
}

// ---- Ən uyğun fətva: səhifələri sual/cavab vahidlərinə bölüb sualın özünə görə seçmək ----
const DIAC = /[\u064b-\u065f\u0670\u0640\u06d6-\u06ed]/g;
const nk = (v) => String(v || "").replace(DIAC, "").replace(/[إأآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const STOP = new Set(["ما", "من", "في", "علي", "على", "عن", "الي", "الى", "هل", "او", "و", "ثم", "مع", "هو", "هي", "ذلك", "هذا", "هذه", "التي", "الذي", "كيف", "لماذا", "متي", "يا", "ان", "قد", "لا", "به", "بها", "له", "لها"]);
const stem = (w) => { let x = w.replace(/^(?:وال|فال|بال|كال|لل|ال)/, ""); if (x.length > 4) x = x.replace(/^[وفبل]/, ""); if (x.length > 4) x = x.replace(/(?:ات|ين|ون|ان|ه|ها)$/, ""); return x; };
const words = (v) => nk(v).split(" ").filter((w) => w.length > 1 && !STOP.has(w));
// Cavab işarələri (sətir başında və ya boşluqdan sonra).
const ANS_G = /(?:^|\n)[ \t]*(?:ج[\d٠-٩]*\s*[:：/]|الجواب\s*(?:[:：]|\n)|فالجواب\s*[:：])|(?:^|\n|[\s.؟?])(?:فأجاب|أجاب)(?:[^:：\n؟?]{0,60})[:：]/g;
// Sual başlanğıcı sətirləri.
const QLINE = /^(?:\(?[\d٠-٩]+\s*[)/\-–.]\s*)?(?:و?سُ?ئِ?ل|س[\d٠-٩]*\s*[:：/]|السؤال|سؤال\s*[:：]|(?:هذا |هذه )?(?:السائل|السائله|السائلة|المستمع|المستمعة)|يقول(?: السائل)?|تقول|يسأل|تسأل|ما حكم|ما الحكم)/;
const HEADLINE = /^(?:[\d٠-٩]+\s*[-–]\s*\S|(?:حكم|باب|فصل|مسألة)\s)/;
const SEP = /^\s*(?:\*\s*){3}\s*$/;

function segment(text, firstLen) {
  const lines = []; let pos = 0;
  for (const l of text.split("\n")) { lines.push({ s: pos, t: l }); pos += l.length + 1; }
  const lineAt = (i) => { let k = 0; while (k + 1 < lines.length && lines[k + 1].s <= i) k++; return k; };
  const marks = [];
  ANS_G.lastIndex = 0; let m;
  while ((m = ANS_G.exec(text))) {
    const st = m.index + (m[0].length - m[0].replace(/^[\s.؟?]+/, "").length);
    marks.push({ st, en: m.index + m[0].length });
  }
  const segs = [];
  let prevEnd = 0;
  const qStarts = marks.map((mk, i) => {
    const lo = i ? marks[i - 1].en : 0;
    let k = lineAt(mk.st), qk = null;
    const minK = lineAt(lo);
    // geriyə: sual sətrini tap (ən çox 8 sətir)
    for (let j = k, n = 0; j >= minK && n < 8; j--, n++) {
      const t = lines[j].t.trim();
      if (j < k && SEP.test(t)) { qk = j + 1; break; }
      if (QLINE.test(t) && (j > minK || i === 0 || lines[j].s >= lo)) qk = j;
      else if (qk !== null && t && !HEADLINE.test(t)) break;
    }
    if (qk === null) { // marker-siz sual: cavab işarəsindən əvvəlki boş olmayan sətir
      qk = k; if (!text.slice(lines[k].s, mk.st).trim()) { qk = k - 1; while (qk > minK && !lines[qk].t.trim()) qk--; }
      if (qk < minK) qk = minK;
    }
    // başlıq sətirləri (sualdan dərhal əvvəl, qısa)
    let hk = qk, heads = [];
    for (let j = qk - 1, n = 0; j >= minK && n < 3; j--, n++) {
      const t = lines[j].t.trim();
      if (!t) { if (heads.length) break; continue; }
      if (t.length < 110 && !/[.؟?:]$/.test(t) && (HEADLINE.test(t) || heads.length || /^(?:السؤال|الجواب)$/.test(lines[qk].t.trim()) || n === 0 && t.length < 80 && j > minK)) { heads.unshift(t); hk = j; }
      else break;
    }
    if (i === 0 && hk === minK && lines[hk].s < lo) {}
    return { qs: Math.max(lines[qk].s, lo), hs: Math.max(lines[hk].s, lo), heads };
  });
  marks.forEach((mk, i) => {
    const q = qStarts[i];
    const end = i + 1 < marks.length ? qStarts[i + 1].hs : text.length;
    if (q.qs >= firstLen) return;
    segs.push({ heading: q.heads.join(" ").replace(/^[\d٠-٩]+\s*[-–]\s*/, "").trim(), question: text.slice(q.qs, mk.st).trim(), answer: text.slice(mk.en, end), open: i + 1 >= marks.length });
  });
  return segs;
}
function cleanQ(q) {
  let prev;
  do { prev = q; q = q.replace(/^\s*\(?[\d٠-٩]+\s*[)/\-–.]\s*/, "").replace(/^(?:و?سُ?ئِ?ل[^:：]{0,80}[:：]\s*(?:عن\s+)?|س[\d٠-٩]*\s*[:：/]\s*|السؤال\s*[:：]?\s*)/, "")
    .replace(/^(?:(?:هذا |هذه )?(?:السائل|السائلة|المستمع|المستمعة)(?:[^:：،؟]{0,60}?(?:يقول|تقول|يسأل|تسأل))?\s*[:：]?\s*|(?:يقول|تقول)\s*[:：]?\s*)/, "").replace(/^(?:يا )?(?:سماحة|فضيلة) الشيخ[^،:]{0,40}[،:]\s*/, "").replace(/^ما\s*(?=حكم|الحكم)/, "").replace(/^(?:عن|هل)\s+/, "")
    .replace(/^(?:يا )?(?:سماحة|فضيلة) الشيخ[^،:]{0,40}[،:]\s*/, "")
    .replace(/\s*\([\d٠-٩]+\)/g, "").replace(/^ماحكم/, "حكم").replace(/\s+/g, " ").trim(); } while (q !== prev);
  return q;
}
function makeTitle(seg, query) {
  if (seg.heading && seg.heading.length >= 6 && seg.heading.length <= 90) return seg.heading.replace(/\s*\([\d٠-٩]+\)\s*$/, "");
  let q = cleanQ(seg.question).split(/[؟?]/)[0].replace(/[،,:]\s*$/, "").trim();
  const ws = q.split(" ");
  if (q && ws.length <= 9) return q.replace(/[،,]\s*(?:نرجو|آمل|أفيدونا|أفتونا|جزاكم)[^،]*$/, "");
  const m = /(?:ما|عن)\s+(حكم\s+[^،؟?.]{3,60})/.exec(q);
  if (m) return m[1].split(" ").slice(0, 8).join(" ");
  return q ? ws.slice(0, 8).join(" ") + " …" : query;
}
function scoreSeg(seg, qw, qphrase, rank) {
  const head = nk(seg.heading + " " + cleanQ(seg.question)), hw = head.split(" ").filter(Boolean), hs = new Set(hw.map(stem));
  const aw = new Set(words(seg.answer.slice(0, 600)).map(stem));
  let s = 0;
  for (const w of qw) { const st = stem(w); if (hs.has(st) || head.includes(w)) s += 3; else if (aw.has(st)) s += 0.7; }
  if (qphrase.length > 3 && head.includes(qphrase)) s += 6;
  const core = qw.filter((w) => w !== "حكم");
  if (core.length && core.every((w) => hs.has(stem(w)) || head.includes(w))) s += 3;
  const hit = hw.filter((w) => qw.some((x) => stem(x) === stem(w) || x === w)).length;
  s += 5 * (hit / Math.max(hw.length, qw.length, 1));
  s -= Math.max(0, hw.length - qw.length - 3) * 0.15;
  if (!seg.question.trim()) s -= 3;
  if (seg.answer.trim().length < 40) s -= 4;
  return s - rank * 0.25;
}
function finishAnswer(t) {
  return tidy(t.replace(/^[\s:：\-–]+/, "").replace(/^-?\s*(?:رحمه الله(?: تعالى)?|جزاه الله خيرا?ً?|حفظه الله)\s*-?\s*(?:قائلا?ً?|بقوله)?\s*[:：]\s*/, "").replace(/\n\s*(?:\*\s*){3}[\s\S]*$/, ""))
    .replace(/\n[^\n]{0,80}$/, (l) => (HEADLINE.test(l.trim()) && !/[.]$/.test(l.trim()) ? "" : l)).trim();
}
const joinP = (a, b) => a.replace(/\s+$/, "") + (/[.!؟?:»)\]]\s*$/.test(a) ? "\n" : " ") + b;
const pageBody = (p) => p.text.replace(/\s*…$/, "").split(/\n_{5,}/)[0].replace(/\n\s*(?:\(?[\d٠-٩]+\)?\s*)$/, "");
async function fatwaBest(query) {
  const r = await searchShamela(query, { fatwa: true });
  const qw = words(query), qphrase = nk(query).split(" ").filter((w) => !STOP.has(w)).join(" ");
  const cands = r.items.slice(0, 5);
  const opened = await Promise.all(cands.map(async (it, rank) => {
    try {
      const a = await openPage(it.bookId, it.pageId);
      let b = null;
      if (a.nextPageId) try { b = await openPage(it.bookId, a.nextPageId); } catch {}
      return { it, rank, a, b };
    } catch { return null; }
  }));
  let best = null;
  for (const o of opened.filter(Boolean)) {
    const t1 = pageBody(o.a), text = o.b ? joinP(t1, pageBody(o.b)) : t1;
    for (const seg of segment(text, t1.length)) {
      const sc = scoreSeg(seg, qw, qphrase, o.rank);
      if (!best || sc > best.sc) best = { sc, seg, o };
    }
  }
  if (!best) {
    const it = cands[0];
    if (!it) return { found: false };
    const f = await fatwaFull(it.bookId, it.pageId);
    return { ...f, heading: query, item: it };
  }
  let { seg, o } = best;
  let window = o.b ? joinP(pageBody(o.a), pageBody(o.b)) : pageBody(o.a), next = o.b?.nextPageId, pages = o.b ? 2 : 1;
  const qi = window.indexOf(seg.question);
  const until = Date.now() + 15000;
  while (seg.open && o.b && next && pages < 8 && until - Date.now() > 1500) {
    let p; try { p = await openPage(o.it.bookId, next); } catch { break; }
    const pb = pageBody(p), first = pb.split("\n")[0].trim();
    if (/[.!؟?»)]\s*$/.test(window.trim()) && first.length < 90 && !/[.،,:؟?]$/.test(first) && (HEADLINE.test(first) || /^[\d٠-٩]+\s*[)/\-–.]/.test(first) || QLINE.test(first) || pb.split("\n").length > 1)) break;
    window = joinP(window, pb); next = p.nextPageId; pages++;
    const again = segment(window, window.length).find((x) => x.question === seg.question && window.indexOf(x.question) === qi);
    if (!again) break;
    seg = again;
    if (/\n\s*(?:\*\s*){3}/.test(seg.answer)) break;
  }
  const answer = seg.answer;
  const it = o.it;
  return { found: true, bookId: it.bookId, pageId: it.pageId, title: o.a.title, label: o.a.label, url: o.a.url, heading: makeTitle(seg, query), question: cleanQ(seg.question), answer: finishAnswer(answer), item: it, score: Math.round(best.sc * 10) / 10 };
}

// ---- Dorar (node:https — Vercel Node fetch-i Cloudflare tərəfindən 403 alır) ----
const DORAR_HEADERS = { "User-Agent": UA, Accept: "application/json, text/javascript, */*;q=0.1", "Accept-Language": "ar,az;q=0.8,en;q=0.6", Referer: "https://nibrascode.com/" };
function httpGet(url, headers, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    let done = false;
    const fin = (e, v) => { if (done) return; done = true; clearTimeout(t); e ? reject(e) : resolve(v); };
    const req = https.request(new URL(url), { method: "GET", headers }, (res) => {
      const chunks = []; let size = 0;
      res.on("data", (c) => { size += c.length; if (size > 2e6) { req.destroy(); fin(new Error("too large")); } else chunks.push(c); });
      res.on("end", () => fin(null, { status: res.statusCode || 0, ct: String(res.headers["content-type"] || ""), body: Buffer.concat(chunks).toString("utf8") }));
      res.on("error", () => fin(new Error("unavailable")));
    });
    const t = setTimeout(() => { req.destroy(); fin(new Error("timeout")); }, timeoutMs);
    req.on("error", () => fin(new Error("unavailable")));
    req.end();
  });
}
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", laquo: "«", raquo: "»" };
const decode = (v) => v.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (w, e) => e[0] === "#" ? String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENT[e.toLowerCase()] ?? w);
const h2t = (h) => clean(decode(h.replace(/<(script|style|head)[\s\S]*?<\/\1\s*>/gi, " ").replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]*>/g, " ")).replace(/[<>]/g, " "));
const LABELS = [["narrator", "الراوي"], ["muhaddith", "المحدث"], ["source", "المصدر"], ["page", "الصفحة أو الرقم"], ["grading", "خلاصة حكم المحدث"]];
function normDorar(raw, api) {
  let t = raw.replace(/\s+/g, " ").trim();
  if (api) t = t.replace(/\s*\.\s*$/, "").trim();
  const abridged = /(?:\.\s*){3,}$|…$/.test(t) || /الحديث[\s.]*$/.test(t.replace(/[\u064b-\u065f\u0670]/g, ""));
  return { text: t.replace(/(?:\s*\.){3,}\s*$/, " …").replace(/\s+\.$/, ".").trim(), abridged };
}
async function searchDorar(q) {
  const r = await httpGet(`https://dorar.net/dorar_api.json?skey=${encodeURIComponent(q.slice(0, 200))}`, DORAR_HEADERS);
  if (r.status !== 200) throw new Error(r.status === 403 || r.status === 429 ? "blocked" : "unavailable");
  const html = JSON.parse(r.body.trim())?.ahadith?.result;
  if (typeof html !== "string") return [];
  const out = [];
  const re = /<div[^>]*class=["']hadith["'][^>]*>([\s\S]*?)<\/div>\s*(?:<div[^>]*class=["']hadith-info["'][^>]*>([\s\S]*?)<\/div>)?/gi;
  let m;
  while ((m = re.exec(html)) && out.length < 15) {
    const { text, abridged } = normDorar(h2t(m[1]).replace(/^\d+\s*-\s*/, ""), true);
    if (!text) continue;
    const it = { text, abridged, narrator: "", muhaddith: "", source: "", page: "", grading: "" };
    for (const part of (m[2] || "").split(/<span[^>]*class=["']info-subtitle["'][^>]*>/i).slice(1)) {
      const ci = part.search(/<\/span>/i);
      if (ci < 0) continue;
      const label = h2t(part.slice(0, ci)).replace(/[:：]\s*$/, "").trim();
      const value = h2t(part.slice(ci + 7)).replace(/^[:：]\s*/, "").trim();
      const k = LABELS.find(([, a]) => a === label)?.[0];
      if (k && value) it[k] = value.slice(0, 500);
    }
    out.push(it);
  }
  return out;
}
// «Davamı»: Dorar-ın axtarış səhifəsindən tam mətn + daimi keçid, lazım olsa «أصول الحديث».
const akey = (v) => v.replace(/[\u064b-\u065f\u0670\u0640\u06d6-\u06ed]/g, "").replace(/[إأآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
function field(block, label) {
  let from = 0;
  for (;;) {
    const i = block.indexOf(label, from);
    if (i < 0) return "";
    from = i + label.length;
    if (label === "المحدث" && /حكم\s*$/.test(block.slice(Math.max(0, i - 8), i))) continue;
    const s = /^\s*:?\s*(?:<a\b[^>]*>\s*)?<span\b[^>]*>([\s\S]*?)<\/span>/i.exec(block.slice(from));
    if (s) return h2t(s[1]).slice(0, 1500);
  }
}
async function hadithFull(ref) {
  const H = { ...DORAR_HEADERS, Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5" };
  const frag = ref.text.replace(/\[[^\]]*\]/g, " ").replace(/…|\.{3,}/g, " ").replace(/[«»"]/g, " ").replace(/\s+/g, " ").trim().split(" ").slice(0, 8).join(" ");
  const deadline = Date.now() + 20000;
  let match = null;
  for (const q of [...new Set([ref.query, frag].filter((x) => x && x.length >= 2))]) {
    if (deadline - Date.now() < 500) break;
    try {
      const r = await httpGet(`https://dorar.net/hadith/search?q=${encodeURIComponent(q.slice(0, 200))}`, H, Math.min(9000, deadline - Date.now()));
      if (r.status !== 200) continue;
      const re = /<article\b[^>]*>\s*<h5\b[^>]*>([\s\S]*?)<\/h5>\s*<\/article>([\s\S]*?)(?=<article\b|$)/gi;
      let m; const cands = [];
      while ((m = re.exec(r.body)) && cands.length < 120) {
        const info = m[2].slice(0, 12000);
        const n = normDorar(h2t(m[1]).replace(/^\s*\d*\s*-\s*/, ""), false);
        cands.push({ ...n, id: /href="(?:https:\/\/dorar\.net)?\/h\/([A-Za-z0-9]{4,32})(?:"|\?)/.exec(info)?.[1] || null, source: field(info, "المصدر"), muhaddith: field(info, "المحدث"), page: field(info, "الصفحة أو الرقم"), takhrij: field(info, "التخريج") });
      }
      const same = (a, b) => a && b && akey(a) === akey(b);
      const head = akey(frag).split(" ").slice(0, 6).join(" ");
      match = cands.find((c) => same(ref.muhaddith, c.muhaddith) && same(ref.source, c.source) && (ref.page || "").replace(/\s+/g, "") === c.page.replace(/\s+/g, ""))
        || cands.find((c) => same(ref.source, c.source) && head.length > 4 && akey(c.text).includes(head)) || null;
    } catch {}
    if (match) break;
  }
  const link = match?.id ? `https://dorar.net/h/${match.id}` : null;
  if (match && !match.abridged) return { status: "full", text: match.text.slice(0, 6000), sourceTitle: match.source || null, takhrij: match.takhrij || null, url: link };
  if (match?.id && deadline - Date.now() > 800) {
    try {
      const r = await httpGet(`${link}?osoul=1`, H, Math.min(9000, deadline - Date.now()));
      const re = /<article\b[^>]*>\s*<h5\b[^>]*>([\s\S]*?)<\/h5>/gi; let m, i = 0;
      while ((m = re.exec(r.body))) {
        if (++i === 1) continue;
        const t = h2t(m[1]).replace(/^\s*-\s*/, "").trim();
        if (t.length > 20) return { status: "origin", text: t.slice(0, 6000), sourceTitle: (/^\[\s*\[?\s*([^\]]{2,120})\]/.exec(t)?.[1] || "").trim() || null, takhrij: match.takhrij || null, url: `${link}?osoul=1` };
      }
    } catch {}
  }
  return { status: "fragment", text: match?.text || ref.text, sourceTitle: match?.source || ref.source || null, takhrij: match?.takhrij || null, url: link || `https://dorar.net/hadith/search?q=${encodeURIComponent(frag || ref.query)}` };
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") try { return JSON.parse(req.body); } catch { return {}; }
  const chunks = []; let n = 0;
  for await (const c of req) { n += c.length; if (n > 20000) break; chunks.push(c); }
  try { return JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { return {}; }
}

// Qısa ömürlü yaddaş keşi (yalnız funksiya instansiyasının RAM-ında, 10 dəq, ən çox 200 açar; bazaya yazılmır).
const cache = new Map();
async function cached(key, fn) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.t < 600000) return hit.v;
  const v = await fn();
  if (cache.size > 200) cache.delete(cache.keys().next().value);
  cache.set(key, { t: Date.now(), v });
  return v;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex");
  if (req.method !== "POST") { res.status(405).json({ error: "method" }); return; }
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "anon";
  if (limited(ip)) { res.status(429).json({ error: "rate" }); return; }
  const b = await readBody(req);
  const action = String(b.action || "");
  const original = clean(b.query).slice(0, MAXQ);
  const q = original;
  if (action !== "hadith" && action !== "open" && action !== "fatwaFull" && !/[\u0600-\u06ff]/.test(q)) { res.status(400).json({ error: "arabic_only", message: "Only Arabic queries are accepted. يرجى كتابة السؤال باللغة العربية." }); return; }
  try {
    if (action === "fatwa" || action === "shamela") {
      if (q.length < 2) { res.status(400).json({ error: "query" }); return; }
      const opts = { cursor: typeof b.cursor === "string" ? b.cursor : null, seen: Array.isArray(b.seen) ? b.seen.slice(0, 300) : [], fatwa: action === "fatwa" };
      const r = await cached(JSON.stringify([action, q, opts.cursor, opts.seen]), () => searchShamela(q, opts));
      res.status(200).json({ kind: action, query: q, original, ...r });
    } else if (action === "dorar") {
      if (q.length < 2) { res.status(400).json({ error: "query" }); return; }
      try { res.status(200).json({ kind: "dorar", query: q, original, items: await cached("d" + q, () => searchDorar(q)) }); }
      catch (e) { res.status(200).json({ kind: "dorar", query: q, items: [], error: e.message === "blocked" ? "blocked" : "unavailable" }); }
    } else if (action === "fatwaBest") {
      if (q.length < 2) { res.status(400).json({ error: "query" }); return; }
      res.status(200).json(await cached("b" + q, () => fatwaBest(q)));
    } else if (action === "fatwaFull") {
      const bookId = int(Number(b.bookId)), pageId = int(Number(b.pageId));
      if (!bookId || !pageId) { res.status(400).json({ error: "page" }); return; }
      res.status(200).json(await cached(`f${bookId}:${pageId}`, () => fatwaFull(bookId, pageId)));
    } else if (action === "open") {
      const bookId = int(Number(b.bookId)), pageId = int(Number(b.pageId));
      if (!bookId || !pageId) { res.status(400).json({ error: "page" }); return; }
      res.status(200).json(await cached(`o${bookId}:${pageId}`, () => openPage(bookId, pageId)));
    } else if (action === "hadith") {
      const ref = { query: q, text: clean(b.text).slice(0, 3000), source: clean(b.source).slice(0, 300), muhaddith: clean(b.muhaddith).slice(0, 300), page: clean(b.page).slice(0, 100) };
      if (!ref.text) { res.status(400).json({ error: "text" }); return; }
      res.status(200).json(await hadithFull(ref));
    } else res.status(400).json({ error: "action" });
  } catch {
    res.status(502).json({ error: "unavailable" });
  }
}

export { fatwaBest, segment, openPage, scoreSeg, words, nk, pageBody, searchShamela };
