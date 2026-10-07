// Müəyyən suallar modelə getmir: hava, məzənnə, qısa izah, paket.
// extraReply(message) -> mətn və ya null.

const UA = "NibrasAI/1.0 (https://www.nibrascode.com; nibrascode@gmail.com)";

const FRANKFURTER = "https://api.frankfurter.dev/v1/latest";
const RATES = "https://open.er-api.com/v6/latest/";

const WX = {
  az: ["açıq", "az buludlu", "buludlu", "dumanlı", "çiskin", "yağışlı", "qarlı", "leysan", "qar leysanı", "ildırımlı"],
  en: ["clear", "partly cloudy", "cloudy", "foggy", "drizzle", "rain", "snow", "showers", "snow showers", "thunder"],
  tr: ["açık", "az bulutlu", "bulutlu", "sisli", "çisenti", "yağmurlu", "karlı", "sağanak", "kar sağanağı", "gök gürültülü"],
  ru: ["ясно", "малооблачно", "пасмурно", "туман", "морось", "дождь", "снег", "ливень", "снежный ливень", "гроза"],
  ar: ["صحو", "غائم جزئياً", "غائم", "ضباب", "رذاذ", "مطر", "ثلج", "زخات", "زخات ثلج", "رعد"],
};

const RATE_WORD = {
  az: { usd: "dollar", eur: "avro", azn: "manat", try: "lirə", gbp: "funt", rub: "rubl" },
  en: { usd: "dollar", eur: "euro", azn: "manat", try: "lira", gbp: "pound", rub: "ruble" },
  tr: { usd: "dolar", eur: "avro", azn: "manat", try: "lira", gbp: "sterlin", rub: "ruble" },
  ru: { usd: "доллар", eur: "евро", azn: "манат", try: "лира", gbp: "фунт", rub: "рубль" },
  ar: { usd: "دولار", eur: "يورو", azn: "مانات", try: "ليرة", gbp: "جنيه", rub: "روبل" },
};

function hasWord(text, words) {
  return words.some((word) => new RegExp("(^|[^\\p{L}\\p{N}])" + word + "([^\\p{L}\\p{N}]|$)", "iu").test(text));
}

function guessLang(raw) {
  if (/[\u0600-\u06FF]/.test(raw)) return "ar";
  if (/[\u0400-\u04FF]/.test(raw)) return "ru";
  if (/[əƏ]/.test(raw)) return "az";
  const q = raw.toLowerCase();
  if (hasWord(q, ["hava", "merhaba", "kaç", "kac", "nasıl", "nasil", "nerede", "nedir", "hakkında", "hakkinda", "kısaca", "bugün", "lira", "dolar"])) return "tr";
  if (hasWord(q, ["weather", "how", "about", "what", "who", "where", "package", "briefly", "dollar", "dollars"])) return "en";
  return "az";
}

async function getJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" }, signal: AbortSignal.timeout(7000) });
  if (!res.ok) return null;
  return res.json();
}

function weatherKind(code) {
  const n = Number(code);
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (n === 3) return 2;
  if (n <= 48) return 3;
  if (n <= 57) return 4;
  if (n <= 67) return 5;
  if (n <= 77) return 6;
  if (n <= 82) return 7;
  if (n <= 86) return 8;
  if (n >= 95) return 9;
  return 2;
}

function stripPlace(name) {
  return String(name || "").replace(/(?:['’])?(?:da|də|de|ta|te)$/i, "").trim();
}

function weatherCity(raw) {
  const text = raw.replace(/[?؟!]/g, " ").replace(/\s+/g, " ").trim();
  let m = text.match(/(?:^|\s)(?:in|в|في)\s+(\S{2,40})\s*$/i);
  if (/(hava|weather|погода|طقس)/i.test(text) && m) return stripPlace(m[1]);
  m = text.match(/^(.{2,40}?)\s+(?:bugünkü|bugunku|indiki|today|сегодня)?\s*(?:hava|havası|havasi|hava durumu|weather|погода|الطقس)\b/i);
  if (m) return stripPlace(m[1]);
  m = text.match(/\b(?:hava|weather|погода|الطقس)\b\s+(?:indiki|bugün|bugun|necədir|necedir|nasıl|nasil|how is|какая)?\s*(.{2,40})/i);
  if (m) return stripPlace(m[1].replace(/^(?:in|at|в|في)\s+/i, "").replace(/\b(necədir|necedir|nasıl|nasil|bugün|indi|now)\b/gi, "").trim());
  return "";
}

async function weatherReply(message) {
  if (!/(hava|weather|погода|الطقس)/i.test(message)) return null;
  const city = weatherCity(message);
  if (city.length < 2) return null;
  const lang = guessLang(message);
  const geo = await getJson("https://geocoding-api.open-meteo.com/v1/search?count=1&language=" + lang + "&name=" + encodeURIComponent(city));
  const hit = geo?.results?.[0];
  if (!hit) return null;
  const cur = await getJson(
    "https://api.open-meteo.com/v1/forecast?timezone=auto&current=temperature_2m,weather_code,precipitation,wind_speed_10m&latitude=" + hit.latitude + "&longitude=" + hit.longitude,
  );
  const now = cur?.current;
  if (!now) return null;
  const name = hit.name || city;
  const words = WX[lang] || WX.az;
  const sky = words[weatherKind(now.weather_code)] || words[2];
  const temp = Math.round(Number(now.temperature_2m));
  const rain = Number(now.precipitation || 0);
  const wind = Math.round(Number(now.wind_speed_10m || 0));
  if (lang === "en") return name + ": " + temp + "°, " + sky + ". Rain " + rain + " mm. Wind " + wind + " km/h.";
  if (lang === "tr") return name + ": " + temp + "°, " + sky + ". Yağış " + rain + " mm. Rüzgar " + wind + " km/saat.";
  if (lang === "ru") return name + ": " + temp + "°, " + sky + ". Осадки " + rain + " мм. Ветер " + wind + " км/ч.";
  if (lang === "ar") return name + ": " + temp + "°، " + sky + ". المطر " + rain + " مم. الرياح " + wind + " كم/س.";
  return name + ": " + temp + "°, " + sky + ". Yağıntı " + rain + " mm. Külək " + wind + " km/saat.";
}

const CURRENCY = [
  ["usd", /dollars?|dollar|dolar|usd|доллар\w*|دولار/i],
  ["eur", /avro|euros?|euro|eur\b|евро|يورو/i],
  ["azn", /manat\w*|azn|манат\w*|مانات/i],
  ["try", /lirə\w*|lirasi|lira\w*|try\b|лир\w*|ليرة/i],
  ["gbp", /funt\w*|gbp|pounds?|фунт\w*|جنيه/i],
  ["rub", /rubl\w*|rub\b|рубл\w*|روبل/i],
];

function rateAsk(message) {
  if (!/(neçə|nece|kaç|kac|how much|сколько|بكم|məzənn|mezenn|kur\b|rate)/i.test(message)) return null;
  const found = [];
  for (const [code, re] of CURRENCY) {
    const hit = message.match(re);
    if (hit) found.push({ code, at: hit.index });
  }
  found.sort((a, b) => a.at - b.at);
  const unique = [...new Set(found.map((item) => item.code))];
  if (!unique.length) return null;
  let from = unique[0];
  let to = unique[1] || (from === "azn" ? "usd" : "azn");
  const amount = Number(String(message).match(/\d+(?:[.,]\d+)?/)?.[0]?.replace(",", ".") || 1);
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1e9) return null;
  return { from, to, amount };
}

function dotDate(raw) {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return "";
  const [day, month, year] = new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", day: "2-digit", month: "2-digit", year: "numeric" }).format(d).split("/");
  return day + "." + month + "." + year;
}

async function directRate(from, to) {
  const base = from.toUpperCase();
  const quote = to.toUpperCase();
  if (base === "AZN" || quote === "AZN") {
    const data = await getJson(RATES + base);
    const rate = data?.rates?.[quote];
    if (!rate) return null;
    return { rate, date: dotDate(data.time_last_update_utc) };
  }
  const data = await getJson(FRANKFURTER + "?from=" + base + "&to=" + quote);
  const rate = data?.rates?.[quote];
  if (!rate) return null;
  return { rate, date: String(data.date || "").split("-").reverse().join(".") };
}

async function rateReply(message) {
  const ask = rateAsk(message);
  if (!ask) return null;
  const lang = guessLang(message);
  const names = RATE_WORD[lang] || RATE_WORD.az;
  const quote = await directRate(ask.from, ask.to);
  if (!quote) return null;
  const value = (ask.amount * quote.rate).toLocaleString("en-US", { maximumFractionDigits: 4 }).replace(/,/g, " ");
  const left = (ask.amount === 1 ? "1" : String(ask.amount)) + " " + names[ask.from];
  return left + " = " + value + " " + names[ask.to] + (quote.date ? " (" + quote.date + ")" : "");
}

function wikiTopic(raw) {
  return raw
    .replace(/[?؟!]/g, " ")
    .replace(/\b(haqqında|haqqinda|qısaca|qisaca|qisa|hakkında|hakkinda|kısaca|kisaca|about|briefly|кратко|расскажи|نبذة|باختصار|عن)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function wikiReply(message) {
  if (!/(haqqında|haqqinda|qısaca|qisaca|hakkında|hakkinda|kısaca|about|briefly|кратко|расскажи|نبذة|باختصار)/i.test(message)) return null;
  const topic = wikiTopic(message);
  if (topic.length < 2) return null;
  const lang = guessLang(message);
  const host = lang + ".wikipedia.org";
  const found = await getJson("https://" + host + "/w/api.php?action=query&list=search&utf8=1&format=json&srlimit=3&srsearch=" + encodeURIComponent(topic));
  const title = found?.query?.search?.[0]?.title;
  if (!title) return null;
  const page = await getJson("https://" + host + "/api/rest_v1/page/summary/" + encodeURIComponent(title));
  if (!page || page.type === "disambiguation") return null;
  const text = String(page.extract || "").replace(/\s+/g, " ").trim();
  if (text.length < 40) return null;
  const short = text.length > 700 ? text.slice(0, 700).replace(/\s+\S*$/, "") + "…" : text;
  return short;
}

const PY_NAMES = new Set(["requests", "flask", "django", "numpy", "pandas", "scipy", "pillow", "matplotlib", "fastapi", "beautifulsoup4"]);
const CODE_NAMES = new Set([...PY_NAMES, "react", "vue", "express", "vite", "lodash", "axios", "webpack", "next", "redux", "jquery", "typescript"]);
const SKIP_PKG = new Set(["apk", "html", "css", "sql", "git", "api", "json", "python", "javascript", "typescript", "java", "php", "node", "npm", "pip", "android", "ios", "hava", "dollar", "manat"]);

function packageTopic(raw) {
  const text = raw.replace(/[?؟!]/g, " ").replace(/\s+/g, " ").trim();
  const hinted = /(npm|pypi|pip\b|paket|package|kitabxana|kütüphane|kutuphane|библиотека|حزمة)/i.test(text);
  const asked = (
    text.match(/(?:npm|pypi|pip)\s+([A-Za-z][A-Za-z0-9._-]{1,40})/i)?.[1] ||
    text.match(/(?:what is|что такое|ما هو|ما هي)\s+([A-Za-z][A-Za-z0-9._-]{1,40})/i)?.[1] ||
    text.match(/([A-Za-z][A-Za-z0-9._-]{1,40})\s+(?:nədir|nedir|nedır|paketi|package)/i)?.[1] ||
    ""
  );
  const name = asked.toLowerCase();
  if (!name || SKIP_PKG.has(name)) return null;
  const codeLike = CODE_NAMES.has(name) || /[.\-]/.test(name);
  if (!hinted && !codeLike && /[A-Z]/.test(asked)) return null;
  if (!hinted && !/(nədir|nedir|nedır|what is|что такое|ما هو|ما هي)/i.test(text)) return null;
  const py = /(pypi|pip\b|python)/i.test(text) || PY_NAMES.has(name);
  const node = /(npm|node|javascript)/i.test(text);
  return { name, prefer: py && !node ? "pypi" : "npm" };
}

async function packageReply(message) {
  const topic = packageTopic(message);
  if (!topic) return null;
  const lang = guessLang(message);
  const npm = await getJson("https://registry.npmjs.org/" + encodeURIComponent(topic.name));
  const pypi = await getJson("https://pypi.org/pypi/" + encodeURIComponent(topic.name) + "/json");
  const npmOk = npm && npm.error == null && npm["dist-tags"]?.latest;
  const pypiOk = pypi?.info?.version;
  let pick = null;
  if (topic.prefer === "pypi" && pypiOk) pick = "pypi";
  else if (topic.prefer === "npm" && npmOk) pick = "npm";
  else if (npmOk) pick = "npm";
  else if (pypiOk) pick = "pypi";
  if (!pick) return null;
  const via = { az: ["npm paketi", "PyPI paketi"], en: ["npm package", "PyPI package"], tr: ["npm paketi", "PyPI paketi"], ru: ["пакет npm", "пакет PyPI"], ar: ["حزمة npm", "حزمة PyPI"] };
  const label = (via[lang] || via.az)[pick === "npm" ? 0 : 1];
  if (pick === "npm") return topic.name + " — " + String(npm.description || "").trim() + "\n" + label + " " + npm["dist-tags"].latest;
  return topic.name + " — " + String(pypi.info.summary || "").trim() + "\n" + label + " " + pypi.info.version;
}

export async function extraReply(message) {
  const raw = String(message || "").trim();
  if (raw.length < 3 || raw.length > 180) return null;
  if (/(quran|qurani|hədis|hadis|təfsir|tefsir|fətva|fetva|nibras)/i.test(raw)) return null;
  try {
    const weather = await weatherReply(raw);
    if (weather) return weather;
  } catch { /* növbəti mənbə */ }
  try {
    const rate = await rateReply(raw);
    if (rate) return rate;
  } catch { /* növbəti mənbə */ }
  try {
    const about = await wikiReply(raw);
    if (about) return about;
  } catch { /* növbəti mənbə */ }
  try {
    return await packageReply(raw);
  } catch {
    return null;
  }
}
