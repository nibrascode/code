// Nibras kod bazası: Hugging Face Storage Bucket-dəki (Mahir99980/nibras-programming-code-bucket) süzülmüş açıq mənbə kod parçaları.
// Məlumat Vercel-də saxlanmır: indeks və lazım olan parçalar (shard) sorğu zamanı HF-dən oxunur, funksiya yaddaşında keşlənir.
// codeContext(message, history) -> { text, refs, langs } | null. Proqramlaşdırma sualına uyğun 1-3 nümunə AI-yə kontekst kimi verilir.
import zlib from "node:zlib";

const BASE = (process.env.CODE_KB_BASE || "https://huggingface.co/buckets/Mahir99980/nibras-programming-code-bucket/resolve/knowledge/programming/index/v2").replace(/\/$/, "");
const LANGS = ["python", "javascript", "typescript", "tsx", "java", "kotlin", "android", "csharp", "cpp", "c", "go", "rust", "php", "sql", "html", "css"];
const FENCE = { python: "python", javascript: "javascript", typescript: "typescript", tsx: "tsx", java: "java", kotlin: "kotlin", android: "java", csharp: "csharp", cpp: "cpp", c: "c", go: "go", rust: "rust", php: "php", sql: "sql", html: "html", css: "css" };

// dil işarələri (az/en/ru/tr/ar sualında)
const LANG_CUES = [
  ["python", /\b(python|py|django|flask|fastapi|pandas|numpy|pytorch|tensorflow|pip)\b|питон|пайтон|بايثون/i],
  ["tsx", /\b(react|jsx|tsx|next\.?js|usestate|useeffect)\b|реакт/i],
  ["typescript", /\b(typescript|ts|angular|nest\.?js|deno)\b|тайпскрипт/i],
  ["javascript", /\b(javascript|js|node\.?js|node|express|dom|vue|jquery|ecmascript|npm)\b|джаваскрипт|جافا\s*سكريبت/i],
  ["kotlin", /\b(kotlin|jetpack|compose)\b|котлин/i],
  ["android", /\b(android)\b|андроид|أندرويد/i],
  ["java", /\b(java|spring|jvm|maven|gradle)\b(?!\s*script)|джава(?!\s*скрипт)|جافا(?!\s*سكريبت)/i],
  ["csharp", /(c#|\bcsharp\b|\.net\b|\bdotnet\b|\bunity\b|\basp\.net\b|си\s*шарп)/i],
  ["cpp", /(c\+\+|\bcpp\b|\bqt\b|\bstl\b|си\s*плюс)/i],
  ["c", /((^|[\s(])c[ -](dili|dilində|dilinde|language|program|ilə|də|proqram)|\bin c\b|\bc language\b|\bc program|\bansi c\b|(^|\s)на си([\s,.?!]|$)|язык[ае]? си([\s,.?!]|$)|\bc ilə\b|\bc-də\b|\bmalloc\b|\bprintf\b)/i],
  ["go", /\b(golang|go dili|go dilində|in go|goroutine)\b|(^|\s)на go\b|\bGo\b(?=.*\b(http|server|func|kod|code|struct|channel|api)\b|.*(сервер|функц|код))/i],
  ["rust", /\b(rust|cargo|tokio)\b|раст/i],
  ["php", /\b(php|laravel|symfony|wordpress)\b/i],
  ["sql", /\b(sql|mysql|postgres|postgresql|sqlite|select|join|query)\b|запрос/i],
  ["html", /\b(html|web\s*page|landing)\b|veb\s*səhifə|səhifə/i],
  ["css", /\b(css|flexbox|grid|tailwind|animation|scss|sass)\b/i],
];

// az/ru/tr/ar -> en açar sözlər (kod şərhləri və adları ingiliscədir)
const DICT = [
  [/fayl|файл|dosya|ملف/, "file"], [/oxu|читат|прочит|okuma|oku\b|قراءة/, "read"], [/yaz(?!ıl)|запис|yazma/, "write"],
  [/sırala|sirala|çeşidlə|сортир|sırala|ترتيب/, "sort"], [/siyahı|siyahi|список|liste|قائمة/, "list"], [/massiv|массив|dizi|مصفوفة/, "array"],
  [/sorğu|sorgu|запрос|طلب/, "request query"], [/verilənlər baz|veri taban|баз[аы] данн|قاعدة بيانات/, "database"], [/düymə|кнопк|buton|زر/, "button"],
  [/şəkil|изображ|картин|resim|صورة/, "image"], [/tarix\b|дата|tarih|تاريخ/, "date"], [/vaxt|время|zaman|وقت/, "time"], [/istifadəçi|пользоват|kullanıcı|مستخدم/, "user"],
  [/giriş|логин|вход|login|تسجيل/, "login auth"], [/şifrə|пароль|parola|كلمة مرور/, "password"], [/axtar|поиск|ara\b|arama|بحث/, "search"],
  [/sətir|строк|metin|نص/, "string"], [/ədəd|rəqəm|число|sayı|رقم/, "number"], [/cədvəl|таблиц|tablo|جدول/, "table"], [/forma\b|форм|form/, "form"],
  [/yüklə|загруз|yükle|رفع/, "upload load"], [/endir|скача|indir|تنزيل/, "download"], [/sinif|sinf|класс|sınıf|صنف/, "class"], [/funksiya|функци|fonksiyon|دالة/, "function"],
  [/rekursi|рекурс|özyineleme/, "recursion recursive"], [/dövr|цикл|döngü|حلقة/, "loop"], [/serverə|server|сервер|خادم/, "server"], [/müştəri|клиент|istemci/, "client"],
  [/soket|сокет/, "socket"], [/axın|поток|thread/, "thread stream"], [/oyun|игр|oyun|لعبة/, "game"], [/kalkulyator|калькулят|hesap makinesi|آلة حاسبة/, "calculator"],
  [/menyu|меню|menü|قائمة/, "menu"], [/animasiya|анимац|animasyon/, "animation"], [/şəbəkə|сеть/, "network http"], [/xəta|ошибк|hata|خطأ/, "error exception"],
  [/test\b|тест/, "test"], [/qovluq|папк|klasör|مجلد/, "directory folder"], [/silmək|sil\b|удал|سحذف/, "delete remove"], [/əlavə et|добав|ekle|إضافة/, "add insert"],
  [/yenilə|обнов|güncelle|تحديث/, "update"], [/şifrələ|шифр|şifrele|تشفير/, "encrypt hash"], [/ağac|дерев|ağaç|شجرة/, "tree"], [/qraf|граф|graf/, "graph"],
  [/növbə|очеред|kuyruk/, "queue"], [/stek|стек|yığın/, "stack"], [/bağlı siyahı|связн|bağlı liste/, "linked list node"], [/список/, "list"], [/ikili axtarış|бинарн|ikili arama/, "binary search"],
  [/mətn|текст|متن/, "text"], [/e-?poçt|почт|e-posta|بريد/, "email mail"], [/ödəniş|оплат|ödeme|دفع/, "payment"], [/səbət|корзин|sepet/, "cart"],
  [/saat|часы/, "clock timer"], [/taymer|таймер|zamanlayıcı/, "timer"], [/hava|погод|hava durumu|طقس/, "weather"], [/tərcümə|перевод|çeviri/, "translate"],
  [/söhbət|чат|sohbet|دردشة/, "chat message"], [/bildiriş|уведомл|bildirim/, "notification"], [/kamera|камер/, "camera"], [/xəritə|карт[аы]|harita/, "map"],
  [/json/, "json parse"], [/regex|regulyar|регуляр/, "regex pattern match"], [/api\b/, "api fetch http"], [/token/, "token jwt"],
];
const STOP = new Set("the a an of to in for on and or is are be this that with it by as at from how what why can you me my please write code example show make using use create build give need want do does get python javascript typescript java kotlin android csharp cpp golang rust php sql html css react node program script function simple basic small".split(" "));

export function isCodingQuestion(message, mode) {
  if (mode === "code") return true;
  const q = String(message || "");
  if (q.includes("```") || /[{};]\s*\n.*[{};]/s.test(q)) return true;
  if (LANG_CUES.some(([, re]) => re.test(q)) && /(kod|code|код|كود|yaz|write|напиш|funksiya|function|функц|class|sinif|klass|necə|how|как|nasıl|كيف|error|xəta|ошибк|bug|izah|explain|объясн|analiz|analy|анализ|dəyiş|modify|change|измени|düzəlt|fix|исправ|refactor|optimiz|misal|nümunə|example|пример|fonksiyon|örnek|düzelt|açıkla|اكتب|دالة|دالّة|برنامج|كود|شرح|اشرح|خطأ|عدّل|عدل|صحح|مثال)/i.test(q)) return true;
  return /(proqramlaş|programming|программир|algoritm|algorithm|алгоритм|regex|рекурс|recursion|rekursi)/i.test(q);
}

export function detectLangs(message, history) {
  const found = [];
  const scan = (t) => { for (const [l, re] of LANG_CUES) if (re.test(t) && !found.includes(l)) found.push(l); };
  scan(String(message || ""));
  if (!found.length && Array.isArray(history)) {
    // əvvəlki mesajlarda kod bloku dili («```python»)
    for (const h of history.slice(-4).reverse()) {
      const m = String((h && h.text) || "").match(/```([a-z+#]+)/i);
      if (m) { const l = m[1].toLowerCase().replace("c++", "cpp").replace("c#", "csharp").replace(/^js$/, "javascript").replace(/^py$/, "python").replace(/^ts$/, "typescript"); if (LANGS.includes(l)) { found.push(l); break; } }
    }
  }
  // react/android: əsas dil də əlavə olunur
  if (found.includes("android") && !found.includes("kotlin") && !found.includes("java")) found.push("kotlin");
  if (found.includes("tsx") && !found.includes("javascript") && !found.includes("typescript")) found.push("javascript");
  // html sualında css də uyğun ola bilər (və əksinə) — ilk iki dil kifayətdir
  return found.filter((l) => LANGS.includes(l)).slice(0, 2);
}

function splitIdent(w) {
  return w.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().split(/[_\s.]+/).filter((x) => x.length > 2);
}
export function queryTerms(message) {
  const raw = String(message || "").replace(/```[\s\S]*?```/g, (m) => m.slice(0, 1500));
  const low = raw.toLowerCase();
  const terms = new Map();
  const add = (w, wt) => { if (w && w.length > 2 && w.length < 25 && !STOP.has(w)) terms.set(w, Math.max(terms.get(w) || 0, wt)); };
  for (const [re, en] of DICT) if (re.test(low)) en.split(" ").forEach((w) => add(w, 1.2));
  for (const w of raw.match(/[\p{L}_][\p{L}\p{N}_.]{2,40}/gu) || []) {
    if (/[^\x00-\x7f]/.test(w)) continue; // yalnız latın identifikatorlar (az sözləri DICT ilə)
    if (/^(yaz|yazın|necə|nədir|nümunə|misal|kodu|kod|funksiya|izah|edin|olsun|ilə|üçün|bir|bu|və|da|də|niye|nece|nedir|sual)$/i.test(w)) continue;
    if (/\./.test(w)) add(w.toLowerCase().replace(/\.$/, ""), 1.4);
    for (const s of splitIdent(w)) add(s, 1);
  }
  return terms;
}

// --- HF oxuma + keş ---
// v2 formatı (scripts: /workspace/hfcode/build2.mjs): <lang>/meta.json, <lang>/t/XXX.json.gz (term -> [df, docId...] çəkiyə görə sıralı), <lang>/d/NNNNN.json.gz (400 sənəd)
const mem = { meta: new Map(), term: new Map(), doc: new Map() };
const LRU_MAX = { term: 120, doc: 40 };
async function getGz(url, ms) {
  const r = await fetch(url, { signal: AbortSignal.timeout(ms), headers: { "User-Agent": "NibrasAI/1.0" } });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const buf = Buffer.from(await r.arrayBuffer());
  const body = buf[0] === 0x1f && buf[1] === 0x8b ? zlib.gunzipSync(buf) : buf;
  return JSON.parse(body.toString("utf8"));
}
function lruGet(kind, key) { const m = mem[kind]; if (!m.has(key)) return undefined; const v = m.get(key); m.delete(key); m.set(key, v); return v; }
function lruSet(kind, key, v) { const m = mem[kind]; m.set(key, v); while (m.size > LRU_MAX[kind]) m.delete(m.keys().next().value); }
async function loadMeta(lang, ms) {
  const hit = mem.meta.get(lang);
  if (hit && (hit.data || Date.now() - hit.at < 60000)) return hit.data || null; // uğursuz yükləmə 1 dəq təkrarlanmır
  try { const data = await getGz(`${BASE}/${lang}/meta.json`, ms); mem.meta.set(lang, { data, at: Date.now() }); return data; }
  catch { mem.meta.set(lang, { data: null, at: Date.now() }); return null; }
}
export function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h; }
async function loadTermShard(lang, i, ms) {
  const key = lang + "/" + i;
  const hit = lruGet("term", key);
  if (hit) return hit;
  const v = await getGz(`${BASE}/${lang}/t/${String(i).padStart(3, "0")}.json.gz`, ms);
  lruSet("term", key, v);
  return v;
}
async function loadDocShard(lang, s, ms) {
  const key = lang + "/" + s;
  const hit = lruGet("doc", key);
  if (hit) return hit;
  const v = await getGz(`${BASE}/${lang}/d/${String(s).padStart(5, "0")}.json.gz`, ms);
  lruSet("doc", key, v);
  return v;
}
// postings: [df, id1, id2, ...] (ən uyğun əvvəl). Skor: idf × sıra çəkisi; bir neçə termin üst-üstə düşməsi gücləndirilir.
export function rankPostings(meta, lists, k = 3) {
  const N = meta.n;
  const acc = new Map();
  for (const { qt, post } of lists) {
    if (!post) continue;
    const df = post[0];
    const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
    for (let r = 1; r < post.length; r++) {
      const id = post[r];
      const w = qt * idf * (1 / (1 + (r - 1) / 40));
      const a = acc.get(id);
      if (a) { a.sc += w; a.hits++; } else acc.set(id, { id, sc: w, hits: 1 });
    }
  }
  const out = [...acc.values()].map((a) => ({ ...a, sc: a.sc * (1 + 0.35 * (a.hits - 1)) }));
  out.sort((a, b) => b.sc - a.sc);
  return out.slice(0, k);
}

const LICENSE_RE = /(licensed under|permission is hereby granted|gnu (general|lesser) public|apache license|mit license|copyright|all rights reserved|spdx-license)/i;
export function stripLicenseHeader(code) {
  const m = String(code).match(/^\s*(\/\*[\s\S]*?\*\/|(?:[ \t]*(?:\/\/|#(?!include|define|!))[^\n]*\n)+|<!--[\s\S]*?-->)\s*/);
  return m && LICENSE_RE.test(m[1]) ? String(code).slice(m[0].length) : String(code);
}

export async function codeContext(message, history, { budgetMs = 3500, k = 3 } = {}) {
  const started = Date.now();
  const left = () => Math.max(300, budgetMs - (Date.now() - started));
  let langs = detectLangs(message, history);
  if (!langs.length) langs = ["python", "javascript"];
  const terms = [...queryTerms(message).entries()].slice(0, 10);
  if (!terms.length) return null;
  try {
    const metas = (await Promise.all(langs.map((l) => loadMeta(l, left())))).filter(Boolean);
    if (!metas.length) return null;
    let cand = [];
    await Promise.all(metas.map(async (meta) => {
      const need = [...new Set(terms.map(([w]) => fnv(w) % meta.termShards))];
      const shards = new Map();
      await Promise.all(need.map(async (i) => shards.set(i, await loadTermShard(meta.lang, i, left()).catch(() => null))));
      const lists = terms.map(([w, qt]) => ({ qt, post: shards.get(fnv(w) % meta.termShards)?.[w] }));
      for (const r of rankPostings(meta, lists, k)) cand.push({ ...r, lang: meta.lang, dps: meta.docsPerShard });
    }));
    cand.sort((a, b) => b.sc - a.sc);
    // zəif uyğunluq kontekst kimi verilmir (yanlış yönləndirməsin)
    cand = cand.filter((c) => c.hits >= 2 || c.sc >= 6).slice(0, k + 2);
    if (!cand.length) return null;
    const docs = await Promise.all(cand.map((c) => loadDocShard(c.lang, Math.floor(c.id / c.dps), left()).then((sh) => sh[c.id % c.dps]).catch(() => null)));
    let refs = [];
    cand.forEach((c, i) => {
      const doc = docs[i];
      if (!doc || !doc.c) return;
      // AI-yə göndərilərkən baş lisenziya şərhi atılır (bucket-dəki məlumat dəyişmir); test/stub fayllar bir az geri çəkilir
      const code = stripLicenseHeader(doc.c);
      const sc = c.sc * (/test|spec|mock|\.pyi$|\.d\.ts$/i.test(doc.p) ? 0.7 : 1);
      refs.push({ lang: c.lang, path: doc.p, code: code.length > 1800 ? code.slice(0, 1800) + "\n…" : code, score: Math.round(sc * 10) / 10 });
    });
    refs = refs.sort((a, b) => b.score - a.score).slice(0, k);
    if (!refs.length) return null;
    const text =
      "Nibras kod bazasından (açıq mənbə layihələrdən real kod nümunələri) bu suala uyğun parçalar tapıldı. " +
      "Onları yalnız faydalıdırsa istifadə et: təhlil et, sualın ehtiyacına uyğunlaşdır və dəyişdir, lazımsız hissələri at. Kor-koranə köçürmə, fayl adlarını və ya «kod bazası» sözünü cavaba yazmağa ehtiyac yoxdur. " +
      "Cavabdakı kodu ``` dil ``` blokunda ver və bloku bağla.\n\n" +
      refs.map((r, i) => `[Nümunə ${i + 1} — ${r.lang}, ${r.path}]\n\`\`\`${FENCE[r.lang] || ""}\n${r.code}\n\`\`\``).join("\n\n");
    return { text, refs, langs, ms: Date.now() - started };
  } catch {
    return null;
  }
}
