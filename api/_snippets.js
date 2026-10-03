// Hazır kod nümunələri: Python və HTML üçün sorğuya AI-yə getmədən cavab verir.
// snippetReply(message, mode) -> cavab mətni və ya null (null olanda normal axın davam edir).
import pythonSnippets from "./_snippets/python.js";
import htmlSnippets from "./_snippets/html.js";

const LANGS = {
  python: { label: "Python", fence: "python", list: pythonSnippets },
  html: { label: "HTML", fence: "html", list: htmlSnippets },
};

const LEVEL_NAMES = {
  python: [
    "Əsaslar: print, dəyişənlər, f-string",
    "Tiplər, mətn metodları, if/else",
    "for və while dövrləri, şərtlər",
    "Siyahılar və comprehension",
    "Dövr məsələləri: faktorial, fibonaççi, sadə ədəd",
    "Funksiyalar, *args, lambda",
    "Mətn alqoritmləri: palindrom, şifrələmə",
    "Lüğət, çoxluq, tuple",
    "Fayl, JSON, tarix, random, math",
    "Xəta idarəsi, with, unittest",
    "Rekursiya, axtarış və sıralama",
    "OOP: sinif, varislik, property",
    "zip, collections, itertools",
    "Generator və iteratorlar",
    "Dekoratorlar və keş",
    "dataclass, enum, tip göstəriciləri",
    "Sıralama və qraf alqoritmləri",
    "Dinamik proqramlaşdırma, backtracking, matris",
    "asyncio, threading, paralel icra",
    "Mini layihələr: bank, XO, parser, SQLite",
  ],
  html: [
    "HTML əsasları: başlıq, mətn, keçid",
    "Siyahı, cədvəl, şəkil, düymə",
    "CSS əsasları: rəng, qutu, şrift",
    "Formlar və semantik struktur",
    "Flexbox, Grid, kart, animasiya",
    "Responsiv dizayn, menyu, sticky",
    "JavaScript əsasları: klik, sayğac, input",
    "DOM: saat, siyahı, tablar, parol gücü",
    "Akkordeon, slayder, modal, lightbox",
    "Doğrulama, To-Do, BMI, oyun",
    "Kalkulyator və çeviricilər",
    "Dark mode, hamburger menyu, scroll, filtr, wizard",
    "Tətbiqlər: To-Do, qeyd, səbət, quiz",
    "Taymer, generatorlar, analoq saat",
    "Canvas: rəsm, qrafik, animasiya",
    "Canvas oyunları: ilan, pong, flappy",
    "Lövhə və söz oyunları: XO, 2048, yaddaş",
    "Tam səhifələr: landing, portfolio, dashboard",
    "Böyük tətbiqlər: elmi kalkulyator, kanban",
    "Mürəkkəb layihələr: Tetris, mina axtaran, Excel",
  ],
};

const AZ_SUFFIX = ["ci", "ci", "cü", "cü", "ci", "cı", "ci", "ci", "cu", "cu", "ci", "ci", "cü", "cü", "ci", "cı", "ci", "ci", "cu", "ci"];

function norm(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\u0307/g, "")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[إأآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ё/g, "е")
    .replace(/ı/g, "i")
    .replace(/ə/g, "e")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/[’'`´ʻʼ‘]/g, "")
    .replace(/c\+\+/g, " cpp ")
    .replace(/c#/g, " csharp ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

// ---------- Hazırlıq: hər nümunə üçün normallaşmış açar sözlər ----------
function prepare(list) {
  return list.map((snippet) => {
    const kws = snippet.keywords.map((k) => {
      const n = norm(k);
      return { n, tokens: n.split(" ").filter(Boolean) };
    });
    const tokens = new Set();
    kws.forEach((k) => k.tokens.forEach((t) => tokens.add(t)));
    norm(snippet.title)
      .split(" ")
      .filter(Boolean)
      .forEach((t) => tokens.add(t));
    return { snippet, kws, tokens: [...tokens] };
  });
}
const POOLS = { python: prepare(pythonSnippets), html: prepare(htmlSnippets) };

// ---------- Söz siyahıları (hamısı norm() ilə normallaşmış formada) ----------
const CODE_WORDS = new Set(
  (
    "kod kodu kodlar kodlari kodunu kodlarini kodum code codes coding snippet snippets script scripts skript skriptler " +
    "numune numuneler numunesi numuneleri ornek ornekler ornegi orneklerini example examples sample samples demo " +
    "proqram proqrami proqramlar program programi programlar programlari kod-numune " +
    "пример примеры примера код коды кода скрипт программа программу " +
    "كود اكواد مثال امثله مثالا سكريبت برنامج شيفره كودا"
  ).split(" "),
);
const ACTION_WORDS = new Set(
  (
    "yaz yazin yazarsan yazarmisan yazsana yazi goster gosterin ver verin verersen hazirla hazirlayin duzelt duzeltsene qur qurun " +
    "write show give make create generate need want yapar yapin gonder " +
    "напиши напишите покажи покажите дай дайте сделай создай приведи " +
    "اكتب اكتبي اعطني اعطيني ارني اريد"
  ).split(" "),
);
const LEVEL_WORDS = /^(level|levels|seviye|seviyye|seviyeler|seviyyeler|seviyyenin|seviyyeni|seviyyede|seviyyeden|seviyyesi|seviyyesinden|uroven|уровень|уровня|уровни|уровне|مستوي|مستوى|سطح)$/;
const LIST_WORDS = new Set(
  (
    "siyahi siyahisi siyahini list listesi liste listele lists levels butun hamisi hamsi hamisini all every katalog kataloq " +
    "movzular movzulari movzu-siyahisi mevzular konular topics outline " +
    "список списки перечень все всё весь " +
    "قايمه قائمه كل جميع"
  ).split(" "),
);
const EASY_TO_HARD = /(asandan\s+cetine|asandan\s+cetin|kolaydan\s+zora|kolaydan\s+zor|asan\s+dan\s+cetin|easy\s+to\s+(hard|advanced)|beginner\s+to\s+advanced|от\s+простого\s+к\s+сложному|от\s+легкого\s+к\s+сложному|من\s+السهل\s+الى\s+الصعب)/;

const EASY_WORDS = new Set("sade asan asani basit kolay easy simple beginner basic baslangic basiti ilkin yeni sadece простой простые легкий лёгкий начальный базовый بسيط سهل مبتدئ".split(" "));
const MEDIUM_WORDS = new Set("orta ortasi medium intermediate средний среднего متوسط".split(" "));
const HARD_WORDS = new Set("cetin cetini cetinleri murekkeb murekkebi agir hard advanced complex difficult zor karmasik ileri сложный сложные продвинутый сложная صعب متقدم معقد".split(" "));

const FILLER = new Set(
  (
    "bir bu bunu bize mene mana mene bana meni ucun ucun ile ilen ve ya yaxud da de ki ya-da ucun icin ucun " +
    "zehmet zehmet-olmasa olmasa lutfen please pls plz bele nece nasil haqqinda haqda hakkinda " +
    "sen siz men ben sene sana ona bizim " +
    "nedir nedur neydi hansi hansilar " +
    "for-example " +
    "the a an of to for me my some any with in on about and or please can could you your " +
    "дай мне пожалуйста для на по про и в с ты вы мой мои какой какие " +
    "لي من في على الى عن و ال " +
    "olar olarmi olursa bilersen bilersiniz bilirsen varmi var varmidir " +
    "lazimdir lazim isteyirem isteyirik istiyorum istiyoruz isterim istedim isteyirem " +
    "lehine daha bir-nece nece-dene bir-dene dene " +
    "hazir hazirki hazir-kod " +
    "yeniden yoxdur " +
    "verin ver " +
    "ne neyin " +
    "ci cu cı cü nci ncu inci uncu th st nd rd"
  ).split(" "),
);

// python/html adı olmayan, lakin başqa dil/kitabxana soruşan mesajlar (bu halda null qaytarırıq)
const OTHER_TOKENS = new Set(
  (
    "java cpp csharp php ruby rust golang kotlin swift dart flutter sql mysql postgres postgresql sqlite3-yox bash shell powershell lua perl scala typescript " +
    "react vue angular jquery bootstrap tailwind nodejs node django flask fastapi pygame tkinter numpy pandas requests selenium bs4 beautifulsoup scrapy " +
    "opencv cv2 tensorflow keras torch pytorch sklearn scikit matplotlib discord telebot aiogram kivy unity unreal arduino laravel wordpress " +
    "svelte nextjs nuxt express mongodb redis docker git github android ios xcode vscode excel photoshop"
  ).split(" "),
);
const JS_TOKENS = new Set(["javascript", "js", "ecmascript", "jsx", "ts", "джаваскрипт", "жс"]);
const CSS_ONLY_TOKENS = new Set(["css", "scss", "sass", "css3"]);
const DEBUG_WORDS = /\b(xeta|xetasi|xetani|xetalar|error|errors|bug|bugs|isleme(?:r|yir|di|z)|isl?emir|ishlemir|calismiyor|hata|hatasi|hatayi|exception|traceback|duzelt|duzeltsene|fix|debug|не работает|ошибк\w*|исправь|почему|niye|niyə|why|neden|nicin|не получается)\b/;

// Ərəb mövzu sözləri -> ingilis açar sözlər (açar sözlər az/tr/en/ru-dadır)
const AR_TOPICS = [
  [/حلق[ةه]|تكرار/, "loop for while dövr"],
  [/دال[ةه]|وظيف[ةه]/, "function funksiya"],
  [/قايم[ةه]|قائم[ةه]|مصفوف/, "list siyahi"],
  [/قاموس/, "dict dictionary lüğət"],
  [/نموذج|استمار/, "form"],
  [/زر|ازرار/, "button duyme"],
  [/جدول/, "table cedvel"],
  [/ال[ةه] حاسب[ةه]|حاسب[ةه]/, "calculator kalkulyator"],
  [/لعب[ةه]|العاب/, "game oyun"],
  [/ثعبان|افعي/, "snake ilan"],
  [/ساع[ةه]/, "clock saat"],
  [/صفح[ةه]|موقع/, "page sehife"],
  [/تصميم/, "css"],
  [/متغير/, "variable dəyişən"],
  [/فئ[ةه]|كلاس|صنف/, "class sinif"],
  [/ملف/, "file fayl"],
  [/ترتيب|فرز/, "sort sıralama"],
  [/اول[ةه]|رياض/, "math"],
  [/مرحبا|اهلا|السلام/, "hello world salam dünya"],
];

// ---------- Dil/niyyət aşkarlama ----------
function tokensOf(q) {
  return q ? q.split(" ").filter(Boolean) : [];
}

function findLanguages(q, tokens) {
  const found = [];
  tokens.forEach((t, i) => {
    if (/^(py(th|ht|t)on|paython|piton|питон|пайтон|بايثون|بايثن|بيثون)[\p{L}\p{N}]{0,5}$/u.test(t)) found.push({ lang: "python", at: i });
    else if (/^(html5?|хтмл|хтмл5)[\p{L}\p{N}]{0,4}$/u.test(t)) found.push({ lang: "html", at: i });
  });
  if (/اتش تي ام ال|ايتش تي ام ال/.test(q)) found.push({ lang: "html", at: 0 });
  return found;
}

function replyLang(raw, q, tokens) {
  if (/[\u0600-\u06FF]/.test(raw)) return "ar";
  if (/[\u0400-\u04FF]/.test(raw)) return "ru";
  if (/[əƏ]/.test(raw)) return "az";
  const has = (re) => re.test(q);
  const tr = has(/\b(ornek|ornegi|ornekler|nasil|bana|icin|gonder|goster|yapar|kodu\s+yaz|lutfen|dongusu|donguler|baslangic|seviye|kolay|zor|degisken|fonksiyon|liste)\b/) || /[ğışöüç]/i.test(raw) && !/ə/.test(raw) && has(/\b(bir|bana|icin|nasil|ornek|kodu|yaz)\b/);
  const en = has(/\b(example|examples|write|show|give|please|simple|easy|hard|level|loop|how|with|code|sample|me|beginner|advanced|page|form|button|function)\b/);
  const az = has(/\b(numune|numunesi|movzu|seviyye|seviyyeli|yaz|ver|hazirla|asan|sade|dovru|dovr|funksiya|siyahi|kodu|kodlar|menim|mene|ucun|ile|haqqinda|hamisi|butun|cetin)\b/);
  if (az && !tr) return "az";
  if (tr && !az) return "tr";
  if (en && !az && !tr) return "en";
  if (tr && az) return /\b(ornek|bana|icin|nasil|seviye|kolay)\b/.test(q) ? "tr" : "az";
  return "az";
}

function levelFrom(q, tokens, langIdxs) {
  const levelWord = "(?:level|levels|seviye|seviy+e\\w*|uroven|уровен\\w*|уровн\\w*|مستوي|مستوى)";
  const ord = "(?:\\s*-?\\s*(?:ci|cu|nci|ncu|inci|uncu|th|nd|rd|st|й|ый|ой|ий|ом))?";
  let m = new RegExp("\\b" + levelWord + "\\s*[:№#-]?\\s*(\\d{1,2})\\b").exec(q);
  if (m) return Number(m[1]);
  m = new RegExp("(?:^|\\s)(\\d{1,2})" + ord + "\\s*\\.?\\s*" + levelWord).exec(q);
  if (m) return Number(m[1]);
  // "python 10 kod ver", "10 python kod", "html 7"
  for (const i of langIdxs) {
    const next = tokens[i + 1], prev = tokens[i - 1];
    if (next && /^\d{1,3}$/.test(next)) return Number(next);
    if (prev && /^\d{1,3}$/.test(prev)) return Number(prev);
  }
  m = /(?:^|\s)(\d{1,3})\s+(?:kod|kodu|kodlar|code|codes|код|коды|كود)(?:\s|$)/.exec(q);
  if (m) return Number(m[1]);
  return null;
}

function difficultyOf(tokens) {
  if (tokens.some((t) => HARD_WORDS.has(t))) return "hard";
  if (tokens.some((t) => MEDIUM_WORDS.has(t))) return "medium";
  if (tokens.some((t) => EASY_WORDS.has(t))) return "easy";
  return null;
}

// ---------- Xal hesablama ----------
function scoreEntry(queryTokens, qSpaced, entry) {
  let score = 0;
  const used = new Set();
  for (const kw of entry.kws) {
    if (kw.n && qSpaced.includes(" " + kw.n + " ")) {
      score += 2 + 1.5 * kw.tokens.length;
      kw.tokens.forEach((t) => used.add(t));
    }
  }
  let matched = 0;
  for (const q of queryTokens) {
    if (used.has(q)) {
      matched++;
      continue;
    }
    let best = 0;
    for (const t of entry.tokens) {
      if (t === q) {
        best = 1.5;
        break;
      }
      if (q.length >= 4 && t.length >= 4 && (q.startsWith(t) || t.startsWith(q))) best = Math.max(best, 1);
    }
    if (best) matched++;
    score += best;
  }
  if (queryTokens.length) score += (2 * matched) / queryTokens.length;
  return score;
}

function bestMatches(lang, queryTokens) {
  const qSpaced = " " + queryTokens.join(" ") + " ";
  return POOLS[lang]
    .map((entry) => ({ entry, score: scoreEntry(queryTokens, qSpaced, entry) }))
    .sort((a, b) => b.score - a.score || a.entry.snippet.level - b.entry.snippet.level);
}

// ---------- Cavab mətnləri ----------
const TXT = {
  az: {
    intro: (l, t, n) => `${l} nümunəsi: ${t} (səviyyə ${n}/20)`,
    easy: (l, t, n) => `${l} üçün sadə nümunə: ${t} (səviyyə ${n}/20)`,
    next: (l, n, ex) => `Növbəti üçün "${l} ${n}-${AZ_SUFFIX[n - 1]} səviyyə" yaz, ya da mövzu de (məs. "${l} ${ex}"). Bütün səviyyələr: "${l} siyahı".`,
    last: (l, ex) => `Bu ən çətin səviyyədir. Başqa mövzu üçün yaz (məs. "${l} ${ex}"). Bütün səviyyələr: "${l} siyahı".`,
    listHead: (l) => `${l} kod nümunələri: 100 kod, 20 səviyyə (asandan çətinə):`,
    levelHead: (l, n, name) => `${l} ${n}-${AZ_SUFFIX[n - 1]} səviyyə: ${name}`,
    how: (l, ex) => `Necə istəməli: "${l} 7-${AZ_SUFFIX[6]} səviyyə" və ya mövzu ilə: "${l} ${ex}".`,
    examples: { python: "for dövrü nümunə", html: "form nümunə" },
  },
  tr: {
    intro: (l, t, n) => `${l} örneği: ${t} (seviye ${n}/20)`,
    easy: (l, t, n) => `${l} için basit örnek: ${t} (seviye ${n}/20)`,
    next: (l, n, ex) => `Devamı için "${l} ${n}. seviye" yaz, ya da konu söyle (örn. "${l} ${ex}"). Tüm seviyeler: "${l} liste".`,
    last: (l, ex) => `Bu en zor seviye. Başka konu için yaz (örn. "${l} ${ex}"). Tüm seviyeler: "${l} liste".`,
    listHead: (l) => `${l} kod örnekleri: 100 kod, 20 seviye (kolaydan zora):`,
    levelHead: (l, n, name) => `${l} seviye ${n}: ${name}`,
    how: (l, ex) => `Nasıl istenir: "${l} 7. seviye" veya konuyla: "${l} ${ex}".`,
    examples: { python: "for döngüsü örnek", html: "form örnek" },
  },
  en: {
    intro: (l, t, n) => `${l} example: ${t} (level ${n}/20)`,
    easy: (l, t, n) => `A simple ${l} example: ${t} (level ${n}/20)`,
    next: (l, n, ex) => `For more, ask "${l} level ${n}" or name a topic (e.g. "${l} ${ex}"). All levels: "${l} list".`,
    last: (l, ex) => `This is the hardest level. Ask for another topic (e.g. "${l} ${ex}"). All levels: "${l} list".`,
    listHead: (l) => `${l} code examples: 100 snippets, 20 levels (easy to hard):`,
    levelHead: (l, n, name) => `${l} level ${n}: ${name}`,
    how: (l, ex) => `How to ask: "${l} level 7" or by topic: "${l} ${ex}".`,
    examples: { python: "for loop example", html: "form example" },
  },
  ru: {
    intro: (l, t, n) => `Пример ${l}: ${t} (уровень ${n}/20)`,
    easy: (l, t, n) => `Простой пример ${l}: ${t} (уровень ${n}/20)`,
    next: (l, n, ex) => `Дальше: напиши "${l} уровень ${n}" или назови тему (например, "${l} ${ex}"). Все уровни: "${l} список".`,
    last: (l, ex) => `Это самый сложный уровень. Назови другую тему (например, "${l} ${ex}"). Все уровни: "${l} список".`,
    listHead: (l) => `Примеры кода ${l}: 100 кодов, 20 уровней (от простого к сложному):`,
    levelHead: (l, n, name) => `${l}, уровень ${n}: ${name}`,
    how: (l, ex) => `Как просить: "${l} уровень 7" или по теме: "${l} ${ex}".`,
    examples: { python: "цикл for пример", html: "форма пример" },
  },
  ar: {
    intro: (l, t, n) => `مثال ${l}: ${t} (المستوى ${n}/20)`,
    easy: (l, t, n) => `مثال بسيط في ${l}: ${t} (المستوى ${n}/20)`,
    next: (l, n, ex) => `للمزيد اكتب "${l} المستوى ${n}" أو اذكر موضوعًا (مثل "${l} ${ex}"). كل المستويات: "${l} قائمة".`,
    last: (l, ex) => `هذا أصعب مستوى. اذكر موضوعًا آخر (مثل "${l} ${ex}"). كل المستويات: "${l} قائمة".`,
    listHead: (l) => `أمثلة أكواد ${l}: 100 كود، 20 مستوى (من السهل إلى الصعب):`,
    levelHead: (l, n, name) => `${l} المستوى ${n}: ${name}`,
    how: (l, ex) => `طريقة الطلب: "${l} المستوى 7" أو بالموضوع: "${l} ${ex}".`,
    examples: { python: "for loop example", html: "form example" },
  },
};

function codeReply(lang, snippet, ui, easy) {
  const info = LANGS[lang];
  const t = TXT[ui];
  const ex = t.examples[lang];
  const label = lang === "python" ? "python" : "html";
  const head = easy ? t.easy(info.label, snippet.title, snippet.level) : t.intro(info.label, snippet.title, snippet.level);
  const tail = snippet.level >= 20 ? t.last(label, ex) : t.next(label, snippet.level + 1, ex);
  return head + "\n\n```" + info.fence + "\n" + snippet.code.replace(/\n+$/, "") + "\n```\n\n" + tail;
}

function listReply(langs, ui) {
  const t = TXT[ui];
  const blocks = langs.map((lang) => {
    const info = LANGS[lang];
    const lines = LEVEL_NAMES[lang].map((name, i) => `${i + 1}. ${name}`);
    return t.listHead(info.label) + "\n" + lines.join("\n");
  });
  const l = langs[0];
  return blocks.join("\n\n") + "\n\n" + t.how(l, t.examples[l]);
}

function levelListReply(lang, level, ui) {
  const t = TXT[ui];
  const info = LANGS[lang];
  const items = info.list.filter((s) => s.level === level);
  const lines = items.map((s, i) => `${i + 1}. ${s.title}`);
  return t.levelHead(info.label, level, LEVEL_NAMES[lang][level - 1]) + "\n" + lines.join("\n") + "\n\n" + t.how(lang, t.examples[lang]);
}

function pickRandom(list, rand) {
  return list[Math.min(list.length - 1, Math.floor(rand() * list.length))];
}

// ---------- Əsas funksiya ----------
export function snippetReply(message, mode, rand = Math.random) {
  const raw = String(message || "").trim();
  if (!raw || raw.length > 220) return null;
  if (raw.includes("```") || /\n\s{2,}\S/.test(raw) || (raw.match(/\n/g) || []).length > 3) return null;

  const codeMode = mode === "code";
  let q = norm(raw);
  if (!q) return null;
  if (DEBUG_WORDS.test(q) || DEBUG_WORDS.test(raw.toLowerCase())) return null;

  // Ərəb mövzu sözlərini ingilis açar sözlərə çevir
  const isArabic = /[\u0600-\u06FF]/.test(raw);
  let extra = "";
  if (isArabic) {
    for (const [re, add] of AR_TOPICS) if (re.test(q)) extra += " " + add;
  }
  const allTokens = tokensOf(q + extra);
  const tokens = tokensOf(q);

  const langsFound = findLanguages(q, tokens);
  const explicit = [...new Set(langsFound.sort((a, b) => a.at - b.at).map((x) => x.lang))];
  const hasJs = allTokens.some((t) => JS_TOKENS.has(t));
  const hasOther = allTokens.some((t) => OTHER_TOKENS.has(t));
  const hasCssOnly = allTokens.some((t) => CSS_ONLY_TOKENS.has(t));

  if (hasOther) return null;
  if (!explicit.length && (hasJs || hasCssOnly)) return null;
  if (explicit.includes("python") && hasJs) return null;
  if (explicit.length === 1 && explicit[0] === "python" && hasCssOnly) return null;

  const langIdxs = langsFound.map((x) => x.at);
  const ui = replyLang(raw, q, tokens);

  // Səviyyə / siyahı niyyəti
  const level = levelFrom(q, tokens, langIdxs);
  const hasLevelWord = tokens.some((t) => LEVEL_WORDS.test(t));
  const listWanted =
    EASY_TO_HARD.test(q) ||
    tokens.some((t) => LIST_WORDS.has(t)) ||
    /\bhamisi\b|\bbutun\s+seviy|\ball\s+levels\b|\bвсе\s+уровни\b/.test(q);

  // Mövzu sözləri
  const langTokenIdx = new Set(langsFound.map((x) => x.at));
  const levelNumberTokens = new Set();
  tokens.forEach((t, i) => {
    if (/^\d{1,3}$/.test(t)) levelNumberTokens.add(i);
  });
  const topicTokens = allTokens.filter((t, i) => {
    if (i < tokens.length && langTokenIdx.has(i)) return false;
    if (/^\d+$/.test(t)) return false;
    if (CODE_WORDS.has(t) || ACTION_WORDS.has(t) || LIST_WORDS.has(t)) return false;
    if (LEVEL_WORDS.test(t) || FILLER.has(t)) return false;
    if (EASY_WORDS.has(t) || MEDIUM_WORDS.has(t) || HARD_WORDS.has(t)) return false;
    if (t.length < 2) return false;
    if (/^(easy|hard|asandan|cetine|cetin|kolaydan|zora|from|to|ot|от|до|простого|сложному|легкого|и|сложному)$/.test(t)) return false;
    return true;
  });

  const hasCodeWord = allTokens.some((t) => CODE_WORDS.has(t)) || /how to write|necə yazılır|nece yazilir|nasil yazilir/.test(raw.toLowerCase());
  const hasAction = allTokens.some((t) => ACTION_WORDS.has(t));

  // "python nədir", "html haqqında" kimi məlumat sualları AI-yə qalır
  if (!hasCodeWord && !hasLevelWord && /\b(nedir|nedur|ne demek|ne demekdir|what is|whats|what are|who|kimdir|что такое|кто такой|ما هو|ما هي|haqqinda melumat|tarixcesi|avantaj|ustunluk|ferqi|difference|vs)\b/.test(q)) return null;

  let lang = explicit[0] || null;
  const bothMentioned = explicit.length > 1;

  // Dil adı yoxdur: yalnız kod rejimində və güclü uyğunluqda
  if (!lang) {
    if (!codeMode) return null;
    const py = bestMatches("python", topicTokens)[0];
    const ht = bestMatches("html", topicTokens)[0];
    if (!topicTokens.length) return null;
    const strong = 5;
    if (py.score >= strong && py.score > ht.score + 0.5) lang = "python";
    else if (ht.score >= strong && ht.score > py.score + 0.5) lang = "html";
    else return null;
    const ranked = bestMatches(lang, topicTokens);
    return codeReply(lang, ranked[0].entry.snippet, ui, false);
  }

  // Niyyət: kod/nümunə sözü, səviyyə, siyahı, ya da fel + mövzu
  const levelAsked = level !== null && (hasLevelWord || hasCodeWord);
  const intent = codeMode || hasCodeWord || levelAsked || listWanted || hasLevelWord;

  // Siyahı sorğusu
  if (listWanted && (hasCodeWord || hasLevelWord || codeMode || topicTokens.length === 0 || tokens.length <= 6)) {
    if (level && level >= 1 && level <= 20 && (hasLevelWord || hasCodeWord)) return levelListReply(lang, level, ui);
    return listReply(bothMentioned ? explicit : [lang], ui);
  }

  if (!intent && !(hasAction && topicTokens.length)) return null;

  // Səviyyə verilibsə
  if (level !== null) {
    if (level < 1 || level > 20) return listReply([lang], ui);
    const inLevel = POOLS[lang].filter((e) => e.snippet.level === level);
    if (topicTokens.length) {
      const qSpaced = " " + topicTokens.join(" ") + " ";
      const ranked = inLevel.map((e) => ({ e, s: scoreEntry(topicTokens, qSpaced, e) })).sort((a, b) => b.s - a.s);
      if (ranked[0].s >= 3) return codeReply(lang, ranked[0].e.snippet, ui, false);
    }
    return codeReply(lang, pickRandom(inLevel, rand).snippet, ui, false);
  }

  // Mövzu yoxdur: çətinliyə görə təsadüfi nümunə
  if (!topicTokens.length) {
    const diff = difficultyOf(allTokens);
    const [lo, hi] = diff === "hard" ? [16, 20] : diff === "medium" ? [8, 12] : [1, 3];
    const pool = POOLS[lang].filter((e) => e.snippet.level >= lo && e.snippet.level <= hi);
    return codeReply(lang, pickRandom(pool, rand).snippet, ui, !diff || diff === "easy");
  }

  // Mövzu var: xalla
  const ranked = bestMatches(lang, topicTokens);
  const top = ranked[0];
  if (top.score >= 3) return codeReply(lang, top.entry.snippet, ui, false);
  return null;
}

export const __internals = { norm, LEVEL_NAMES };
