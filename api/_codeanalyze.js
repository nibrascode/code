// Kod tapşırığının öz (LLM-siz) təhlili və cavabın yoxlama siyahısına görə deterministik yoxlanışı.
// az/en/ru/ar/tr ifadələri. Nəticə _codepipe.js-in istifadə etdiyi checklist quruluşundadır (+ yoxlama üçün «expect»).

const LANGS = [
  ["html", /\b(html5?|xhtml|web\s*-?\s*(page|site)|landing|veb\s*səhifə|vebsayt|веб[- ]?страниц|html[- ]?страниц|web sayfası|صفحة\s*(ويب|html))\b|səhifə(si|sini|də)?\b|страниц|sayfa(sı)?\b|صفحة/i],
  ["css", /\bcss3?\b|стил[ья]\b|stil(ləri)?\b/i],
  ["typescript", /\b(typescript|ts)\b/i],
  ["javascript", /\b(javascript|js|node\.?js|vanilla js|ecmascript|dom)\b|جافا\s*سكريبت|джаваскрипт/i],
  ["python", /\b(python|py|pandas|django|flask|numpy)\b|python'?(da|də|un|ın|ile|ilə)|питон|بايثون|بايتون/i],
  ["sql", /\b(sql|sqlite|postgres(ql)?|mysql|mariadb|select\s+\*|sorğu)\b|запрос\w* sql|sql\s*sorgusu|استعلام/i],
  ["cpp", /c\+\+|\bcpp\b|си\s*плюс/i],
  ["csharp", /c#|\bcsharp\b|\.net\b/i],
  ["c", /((^|[\s(])c[ -](dili|dilində|dilinde|language|program|proqram|function|funksiya|fonksiyon|kod|code|функци)|\bin c\b|\bansi c\b|(^|\s)на си([\s,.?!]|$)|язык[ае]? си([\s,.?!]|$)|\bc-də\b|\bc ilə\b|بلغة\s*c\b)/i],
  ["java", /\bjava\b(?!\s*script)/i],
  ["php", /\bphp\b/i],
  ["go", /\b(golang|go dilində|in go)\b/i],
  ["rust", /\brust\b/i],
  ["kotlin", /\bkotlin\b/i],
  ["bash", /\b(bash|shell script|sh script)\b/i],
];
const UI_WORDS = /(button|düymə|кнопк|buton|düğme|زر|form|forma|форм|input|sahə|поле|alan|حقل|page|səhifə|страниц|sayfa|صفحة|canvas|oyun|game|игр|لعبة|kart|card|карточк|menu|menyu|меню|modal|tab|вкладк|sekme|navbar|layout|design|dizayn|дизайн|tasarım|تصميم|ekranda|на экране|göstər|show|display|покаж|отобраз|göster|اعرض|يعرض)/i;
const FUNC_WORDS = /(function|funksiya|функци|fonksiyon|دالة|دالّة|\bclass\b|klass|sinif|класс|sınıf|صنف|method|metod|метод|algorithm|algoritm|алгоритм|الخوارزمية|\w+\([\w\s,=*]*\))/i;
const MODIFY_WORDS = /(düzəlt|fix|исправ|düzelt|أصلح|صحح|dəyiş|modify|change|измени|переделай|değiştir|عدّل|عدل|refactor|optimiz|təkmilləşdir|улучш|iyileştir|حسّن|xəta|bug|ошибк|hata|خطأ)/i;

// Rənglər: ad (5 dil) -> çalar sinfi; yoxlama kodda həmin çalarda istənilən rəng axtarır
const W = (alts) => new RegExp("(?<![\\p{L}\\p{N}])(" + alts + ")(?![\\p{L}\\p{N}])", "iu"); // tam söz (unicode)
const S = (alts) => new RegExp("(?<![\\p{L}\\p{N}])(" + alts + ")", "iu"); // kök + şəkilçi
const COLORS = [
  ["blue", W("blue|navy|mavi|göy|mavisi|lacivert|أزرق|زرقاء|كحلي|بالأزرق|باللون الأزرق") , S("син(ий|его|им|ем|ей|юю|яя|ее)|голуб|mavi")],
  ["red", W("red|qırmızı|kırmızı|أحمر|حمراء|بالأحمر"), S("красн|qırmızı|kırmızı")],
  ["green", W("green|yaşıl|yeşil|أخضر|خضراء|بالأخضر"), S("зел[её]н|yaşıl|yeşil")],
  ["yellow", W("yellow|sarı|أصفر|صفراء"), S("ж[её]лт")],
  ["orange", W("orange|narıncı|turuncu|برتقالي"), S("оранж")],
  ["purple", W("purple|violet|bənövşəyi|mor|بنفسجي"), S("фиолет|пурпур")],
  ["pink", W("pink|çəhrayı|pembe|وردي"), S("розов")],
  ["black", W("black|qara|siyah|أسود|سوداء"), S("ч[её]рн")],
  ["white", W("white|ağ|beyaz|أبيض|بيضاء"), S("бел(ый|ого|ым|ом|ая|ую|ой|ые)(?!\\p{L})")],
  ["gray", W("gray|grey|boz|gri|رمادي"), S("сер(ый|ого|ым|ом|ая|ую|ой|ые)(?!\\p{L})")],
].map(([c, a, b]) => [c, { test: (t) => a.test(t) || b.test(t) }]);
const NAMED = { blue: "blue", navy: "blue", royalblue: "blue", dodgerblue: "blue", steelblue: "blue", skyblue: "blue", deepskyblue: "blue", darkblue: "blue", mediumblue: "blue", cornflowerblue: "blue", lightblue: "blue", red: "red", crimson: "red", darkred: "red", firebrick: "red", tomato: "red", green: "green", lime: "green", forestgreen: "green", seagreen: "green", darkgreen: "green", limegreen: "green", mediumseagreen: "green", yellow: "yellow", gold: "yellow", orange: "orange", darkorange: "orange", purple: "purple", violet: "purple", indigo: "purple", rebeccapurple: "purple", pink: "pink", hotpink: "pink", deeppink: "pink", black: "black", white: "white", gray: "gray", grey: "gray", silver: "gray", lightgray: "gray", lightgrey: "gray", darkgray: "gray", gainsboro: "gray", whitesmoke: "white" };

function rgbClass(r, g, b) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 510, d = mx - mn;
  const s = d === 0 ? 0 : d / (255 - Math.abs(mx + mn - 255));
  if (s < 0.18 || d < 25) return l > 0.9 ? "white" : l < 0.16 ? "black" : "gray";
  let h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h = (h * 60 + 360) % 360;
  if (h < 15 || h >= 340) return l > 0.7 ? "pink" : "red";
  if (h < 42) return "orange";
  if (h < 68) return "yellow";
  if (h < 170) return "green";
  if (h < 255) return "blue";
  if (h < 300) return "purple";
  return "pink";
}
export function colorClassesIn(code) {
  const found = new Set();
  const src = String(code || "");
  for (const m of src.matchAll(/#([0-9a-f]{3}|[0-9a-f]{6})(?![0-9a-z])/gi)) {
    let h = m[1];
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    found.add(rgbClass(parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)));
  }
  for (const m of src.matchAll(/rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/gi)) found.add(rgbClass(+m[1], +m[2], +m[3]));
  for (const m of src.matchAll(/hsla?\(\s*(\d+)/gi)) { const h = +m[1]; found.add(h < 15 || h >= 340 ? "red" : h < 42 ? "orange" : h < 68 ? "yellow" : h < 170 ? "green" : h < 255 ? "blue" : h < 300 ? "purple" : "pink"); }
  for (const m of src.matchAll(/(?<![\w-])([a-z]{3,20})(?![\w-])/gi)) { const c = NAMED[m[1].toLowerCase()]; if (c && /:\s*[^;{}]*$|=\s*["']?$|["'`]\s*$/.test(src.slice(Math.max(0, m.index - 40), m.index))) found.add(c); }
  return found;
}

const FEATURES = [
  ["responsive", /(responsive|mobil|мобил|адаптив|duyarlı|متجاوب|телефон|phone|telefon)/i, "Responsive: works on mobile widths (≥320px) — use a viewport meta tag and flexible layout/@media.", /@media|viewport|flex-wrap|auto-fit|auto-fill|clamp\(|min\(|max-width/i],
  ["storage", /(localstorage|yaddaşda saxla|yadda saxla|yadda qalsın|сохран\w* (в localstorage|в браузере|после перезагруз|между)|kaydet|kaydedil|persist|حفظ|التخزين المحلي)/i, "Persist data in localStorage (load on start, save on every change; handle invalid stored JSON).", /localStorage/],
  ["dark", /(dark mode|dark theme|qaranlıq (rejim|tema)|тёмн\w* (тем|режим)|темн\w* (тем|режим)|karanlık (mod|tema)|الوضع الداكن|الوضع الليلي)/i, "Dark mode support.", /prefers-color-scheme|dark/i],
  ["animation", /(animat|анимац|animasyon|animasiya|حركة|متحرك)/i, "Smooth animation (CSS transition/@keyframes or requestAnimationFrame); respect prefers-reduced-motion.", /@keyframes|transition|requestAnimationFrame|animate\(/],
  ["validation", /(validat|doğrula|yoxlansın|yoxlanılsın|yoxla(maq)?|провер|валид|تحقق|kontrol)/i, "Validate input and show clear error messages next to the field; don't submit invalid data.", /preventDefault|checkValidity|setCustomValidity|test\(|match\(|\.length|includes\(/],
  ["fetch", /(\bfetch\b|\bapi\b|https?:\/\/|загружа|yüklə(yən|sin)|ajax|axios|استدعاء)/i, "Network: check response.ok, catch network errors, show/raise a clear error.", /fetch\(|XMLHttpRequest|axios|requests\.|urllib|http/],
  ["keyboard", /(arrow|ox düymə|стрелк|ok tuş|\benter\b|\bspace\b|boşluq|пробел|klaviatura|клавиатур|klavye|لوحة المفاتيح|الأسهم)/i, "Keyboard controls as requested (use event.key values).", /key(down|up|press)|\.key\b|keyCode/],
  ["tests", /(\btests?\b|unit test|тест|assert|اختبار|testlə)/i, "Include tests/asserts that demonstrate correctness.", /assert|test|expect\(|console\.assert/i],
  ["immutable", /(don'?t (change|modify|mutate)|without (changing|modifying|mutating)|dəyişməsin|dəyişdirməsin|toxunmasın|не (изменя|меня|мутир)|değiştirmesin|değiştirmeden|لا\s*(تغير|تعدل)|orijinal\w* (massiv|siyahı|dizi)|original (array|list))/i, "Do NOT mutate the input (copy before sorting/changing, including nested items).", null],
  ["errors", /(xəta vermə|xəta verməsin|error handling|handle errors|обрабатыва\w* ошиб|не пада|hata verme|hataları|معالجة الأخطاء|ValueError|exception|istisna|исключени)/i, "Explicit error handling for invalid input as requested.", null],
  ["unicode", { test: (t) => /(azərbaycan|азербайджан|azerbaycan|türkçe|турец|[əıİğş])/i.test(t) && /(hərf|sait|samit|mətn|metn|metin|string|sətir|text|harf|ünlü|буква|глас|строк|текст|حرف|نص|palindrom|lower|upper|böyük|kiçik|büyük|küçük|регистр)/i.test(t) }, null, null],
];

const EDGE = {
  html: ["Empty/whitespace input must not produce empty items", "Works on mobile width (360px) and desktop", "User text is inserted with textContent, never innerHTML"],
  javascript: ["Empty input / empty array", "Invalid argument types", "Repeated calls / timers cleared correctly", "Does not mutate arguments"],
  typescript: ["Empty input", "Strict types, no any", "Does not mutate arguments"],
  python: ["Empty input (empty string/list) and None", "Boundary values (0, 1, negative numbers)", "Invalid input raises a clear exception or is handled", "Does not mutate arguments"],
  sql: ["NULL values", "Ties and duplicates", "Empty tables return no rows (or NULL where asked)"],
  c: ["Buffer sizes and bounds (no overflow)", "EOF / invalid input", "Return codes"],
  cpp: ["Empty input", "Bounds checks"],
  css: ["Long text wrapping", "Mobile widths"],
};
const DEFAULTS = {
  html: ["Single self-contained .html file, inline CSS/JS, no external libraries", "System font stack, centered layout, <meta name=viewport>"],
  javascript: ["Modern ES2020+, no libraries", "Runs in browser console and Node"],
  typescript: ["Strict TypeScript, no libraries"],
  python: ["Python 3.10+, standard library only", "Small usage example under if __name__ == '__main__'"],
  sql: ["Standard SQL that runs in SQLite and PostgreSQL unless a dialect is named"],
  c: ["C11, only the standard library, compiles with gcc -Wall without warnings"],
  cpp: ["C++17, standard library only"],
  css: ["Plain CSS, no frameworks"],
};
const TARGET = { html: "browser single html file", css: "browser (CSS inside a single html file)", javascript: "javascript", typescript: "typescript", python: "python script", sql: "sql query", c: "c program", cpp: "c++ program", csharp: "c# program", java: "java program", php: "php script", go: "go program", rust: "rust program", kotlin: "kotlin program", bash: "bash script" };

function pastedCode(message) {
  const m = String(message || "").match(/```([\w+#.-]*)[^\n]*\n([\s\S]*?)(```|$)/);
  if (m) return { lang: normLang(m[1]) || sniffLang(m[2]), code: m[2] };
  const lines = String(message).split("\n");
  if (lines.length >= 4 && /[{};()=<>]/.test(message)) { const code = lines.slice(1).join("\n"); return { lang: sniffLang(code), code }; }
  return null;
}
function normLang(l) {
  l = String(l || "").toLowerCase();
  return { js: "javascript", javascript: "javascript", node: "javascript", jsx: "javascript", ts: "typescript", typescript: "typescript", py: "python", python: "python", html: "html", htm: "html", css: "css", sql: "sql", c: "c", cpp: "cpp", "c++": "cpp", cs: "csharp", csharp: "csharp", java: "java", php: "php", go: "go", rust: "rust", kotlin: "kotlin", bash: "bash", sh: "bash" }[l] || "";
}
export function sniffLang(code) {
  const c = String(code || "");
  if (/<!doctype|<html|<(div|button|body|p|span|h1|canvas|script)\b/i.test(c)) return "html";
  if (/#include\s*</.test(c)) return /std::|cout|cin\b|#include\s*<(iostream|vector|string)>/.test(c) ? "cpp" : "c";
  if (/^\s*(def |class \w+.*:|import \w+$|from \w+ import|print\()/m.test(c) || /:\s*\n\s{2,}\S/.test(c)) return "python";
  if (/^\s*(select|insert|update|create table|with)\b/im.test(c)) return "sql";
  if (/\b(function|const|let|var)\b|=>|document\.|console\.log/.test(c)) return "javascript";
  if (/[.#]?[\w-]+\s*\{[^}]*:[^}]*;/.test(c)) return "css";
  return "";
}

function quotedTexts(msg) {
  const out = [];
  const re = /«([^«»\n]{1,80})»|“([^“”\n]{1,80})”|„([^„“”\n]{1,80})[“”]|"([^"\n]{1,80})"|(?<![\p{L}\p{N}])'([^'\n]{1,60})'(?![\p{L}\p{N}])|‘([^‘’\n]{1,60})’/gu;
  // kod blokundakı dırnaqlar tələb deyil
  const plain = String(msg).replace(/```[\s\S]*?(```|$)/g, " ");
  for (const m of plain.matchAll(re)) {
    const t = (m[1] || m[2] || m[3] || m[4] || m[5] || m[6] || "").trim();
    if (!t || /^https?:/.test(t) || /^[\w.]+\(.*\)$/.test(t)) continue;
    if (!out.includes(t)) out.push(t);
  }
  // «Mahir Əliyev yazısını …» — dırnaqsız göstəriləcək mətn
  const az = plain.match(/((?:\p{Lu}[\p{L}'’-]*)(?:\s+\p{Lu}[\p{L}'’-]*){0,3})\s+(yazısını|yazısı|adını|mətnini|sözünü|yazısıyla|yazısını)/u);
  if (az && !out.includes(az[1])) out.push(az[1]);
  return out.slice(0, 8);
}

export function analyzeRequest(message, history = []) {
  const msg = String(message || "");
  const plain = msg.replace(/```[\s\S]*?(```|$)/g, " ");
  const pasted = pastedCode(msg);
  const modify = !!pasted && MODIFY_WORDS.test(plain);
  const langsFound = LANGS.filter(([, re]) => re.test(plain)).map(([l]) => l);
  let language = pasted && pasted.lang ? pasted.lang : "";
  // açıq deyilən dil yapışdırılmış koddan üstündür (məs. «bunu python-a çevir»)
  const explicit = langsFound.filter((l) => !(l === "css" && langsFound.includes("html")));
  if (explicit.length && (!language || !modify)) language = explicit.includes("python") ? "python" : explicit.includes("sql") ? "sql" : explicit.includes("c") && !explicit.includes("html") ? "c" : explicit[0];
  if (!language && history.length) {
    for (const h of history.slice(-4).reverse()) { const m = String((h && h.text) || "").match(/```([\w+#]+)/); if (m && normLang(m[1])) { language = normLang(m[1]); break; } }
  }
  const ui = UI_WORDS.test(plain);
  const fnWords = FUNC_WORDS.test(plain);
  if (!language && ui) language = "html";
  // JS + interfeys (səhifə/düymə/DOM) => brauzer üçün tək html fayl
  let target = TARGET[language] || "";
  const domJs = (language === "javascript" || language === "css") && (ui || /\bdom\b|document|html/i.test(plain));
  if (domJs) target = "browser single html file (inline <script>)";
  const functionOnly = !!language && !["html", "css", "sql"].includes(language) && !domJs && fnWords && !/(page|səhifə|страниц|sayfa|صفحة|html)/i.test(plain);
  if (language === "javascript" && functionOnly) target = "javascript (plain code, function at top level, no HTML page)";
  if (language === "python" && functionOnly) target = "python (function/class at top level + short usage example)";
  if (language === "sql") { const d = plain.match(/sqlite|postgres(ql)?|mysql|mariadb|ms ?sql|sql server|oracle/i); target = "sql query" + (d ? " (" + d[0] + ")" : " (SQLite/PostgreSQL compatible)"); }

  const texts = quotedTexts(msg);
  const colors = COLORS.filter(([, re]) => re.test(plain)).map(([c]) => c);
  const hexes = [...new Set((plain.match(/#[0-9a-f]{6}\b|#[0-9a-f]{3}\b/gi) || []).map((h) => h.toLowerCase()))];
  const sizes = [...new Set((plain.match(/\b\d+(?:\.\d+)?\s?(?:px|rem|em|vh|vw|pt|%)(?![\w])/gi) || []).map((s) => s.replace(/\s+/g, "")))];
  const pxWords = plain.match(/\b(\d+)\s*(piksel|пиксел\w*|pixels?|بكسل)/i);
  if (pxWords) sizes.push(pxWords[1] + "px");
  // ad( — boşluqsuz; və ya snake_case/camelCase ad + boşluq + (
  const names = language === "sql" ? [] : [...new Set([...plain.matchAll(/(?<![\p{L}\p{N}_.])([A-Za-z_][A-Za-z0-9_]{2,})(\s*)\(/gu)].filter((m) => !m[2] || /_|[a-z][A-Z]/.test(m[1])).map((m) => m[1]).filter((n) => !/^(rgb|rgba|hsl|hsla|fetch|print|console|Math|len|range|int|str|alert|setTimeout|max|min|sum|sorted|open|main|var|calc|url|translate|scale|JavaScript|TypeScript|JavaScripts|NodeJS|PostgreSQL|SQLite|MySQL)$/i.test(n)))];
  const classes = [...new Set([...plain.matchAll(/(?:\bclass|klass|sinif|класс|sınıf)\s+([A-Z][A-Za-z0-9_]+)/g)].map((m) => m[1]))];
  const camel = [...new Set([...plain.matchAll(/(?<![\p{L}\p{N}_])([A-Z][a-z]+(?:[A-Z][a-z0-9]+)+)(?![\p{L}\p{N}_])/gu)].map((m) => m[1]))].filter((c) => !classes.includes(c) && !names.includes(c) && !/(Error|Exception)$/.test(c) && /class|klass|sinif|класс|sınıf/i.test(plain));
  const ids = [...new Set([...plain.matchAll(/\bid\s*=\s*["']?([\w-]+)/gi)].map((m) => m[1]))];
  const numbers = [...new Set((plain.match(/(?<![\w#.])\d+(?:[.,]\d+)?(?:\s*[-–]\s*\d+)?(?![\w%])/g) || []).filter((n) => !sizes.some((s) => s.startsWith(n))))].slice(0, 8);
  const feats = FEATURES.filter(([, re]) => re.test(plain));

  const requirements = [];
  if (modify) requirements.push("Modify the user's pasted " + (pasted.lang || "") + " code: keep its structure and names, change only what is needed, return the FULL updated code and say what was wrong/changed");
  else if (pasted) requirements.push("Use the user's pasted code as the base");
  const uiTask = !functionOnly && ["html", "css", "javascript", "typescript", "php"].includes(language);
  if (uiTask || (!functionOnly && texts.length && language !== "sql")) texts.forEach((t) => requirements.push(`Exact text must appear verbatim: "${t}"`));
  else if (texts.length) requirements.push("Examples/values given by the user (must work exactly): " + texts.map((t) => `"${t}"`).join(", "));
  colors.forEach((c) => requirements.push(`Colour requested: ${c}` + (hexes.length ? "" : " (use a clear " + c + ")")));
  hexes.forEach((h) => requirements.push(`Exact colour value: ${h}`));
  sizes.forEach((s) => requirements.push(`Exact size: ${s}`));
  [...classes, ...camel].forEach((c) => requirements.push(`Class name exactly: ${c}`));
  names.forEach((n) => requirements.push(`Function/method name exactly: ${n}(...) with the requested parameters`));
  ids.forEach((i) => requirements.push(`Element id: ${i}`));
  feats.forEach(([, , req]) => req && requirements.push(req));
  if (numbers.length) requirements.push("Respect the numbers/limits given: " + numbers.join(", "));
  if (functionOnly) requirements.push("Return plain " + language + " code (no HTML page)");

  const edge = [...(EDGE[language] || [])];
  if (feats.some((f) => f[0] === "unicode")) edge.push("Azerbaijani/Turkish letters (ə, ı/I, İ/i, ö, ü, ş, ç, ğ): handle case explicitly, not via plain lower()");
  if (/(case[- ]?insensitive|böyük.{0,15}kiçik|регистр|büyük.{0,15}küçük|حالة الأحرف)/i.test(plain)) edge.push("Case-insensitive handling");
  if (/(punctuation|durğu|пунктуац|noktalama|علامات الترقيم)/i.test(plain)) edge.push("Ignore punctuation as requested");

  // etibar: dil/hədəf aydındırsa yüksək
  let confidence = 0.2;
  if (language) confidence += 0.5;
  if (explicit.length || pasted) confidence += 0.2;
  if (requirements.length) confidence += 0.1;
  const complexity =
    (modify ? 2 : 0) + (requirements.length >= 6 ? 1 : 0) + (plain.length > 300 ? 1 : 0) + feats.filter((f) => !["unicode", "responsive"].includes(f[0])).length +
    2 * (/(edge|invalid|valid|ValueError|raise|throw|ignore|yok say|игнор|ties?|alphabetic|O\(1\)|recurs|circular|dövri|цикл|throttle|debounce|parse|sort|merge|regex|roman|рим|LRU|cache|interval|aralık|clone|kopyala|копир|algorithm|algoritm|алгоритм|class|klass|sinif|класс|sınıf)/i.test(plain) ? 1 : 0) +
    (/(game|oyun|игр|لعبة|canvas)/i.test(plain) ? 1 : 0);

  return {
    language,
    target,
    task: plain.replace(/\s+/g, " ").trim().slice(0, 200),
    requirements: requirements.slice(0, 14),
    edge_cases: [...new Set(edge)].slice(0, 6),
    defaults: (DEFAULTS[language] || []).slice(0, 3),
    modify,
    confidence: Math.min(1, confidence),
    complexity,
    expect: { texts: uiTask || (!functionOnly && language !== "sql") ? texts : [], colors, hexes, sizes, names, classes: [...classes, ...camel], ids, functionOnly, language, features: feats.map((f) => f[0]), pastedLang: pasted ? pasted.lang : "" },
  };
}

const COMPAT = { javascript: ["javascript", "js", "html", "mjs", "node", "jsx"], typescript: ["typescript", "ts", "tsx"], html: ["html", "htm"], css: ["css", "html"], python: ["python", "py"], sql: ["sql", "sqlite", "postgresql", "postgres", "mysql", "plpgsql"], c: ["c", "h"], cpp: ["cpp", "c++", "cc", "hpp"], csharp: ["csharp", "cs", "c#"], java: ["java"], php: ["php", "html"], go: ["go", "golang"], rust: ["rust", "rs"], kotlin: ["kotlin", "kt"], bash: ["bash", "sh", "shell", "zsh"] };

// Cavabın yoxlama siyahısına deterministik uyğunluğu; qaytarır: problemlərin siyahısı (ingiliscə, yazan modelə ötürülür)
export function verifyAnswer(answer, ana) {
  if (!ana || !ana.expect) return [];
  const e = ana.expect;
  const blocks = [...String(answer || "").matchAll(/```([\w+#.-]*)[^\n]*\n([\s\S]*?)```/g)].map((m) => ({ lang: (m[1] || "").toLowerCase(), code: m[2] }));
  if (!blocks.length) return [];
  const code = blocks.map((b) => b.code).join("\n");
  const norm = (s) => String(s).replace(/[−–—]/g, "-").replace(/[’‘]/g, "'").replace(/[“”«»„]/g, '"').replace(/\s+/g, " ").replace(/&nbsp;/g, " ");
  const codeN = norm(code.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
  const probs = [];
  if (e.language && COMPAT[e.language] && !blocks.some((b) => COMPAT[e.language].includes(b.lang) || (!b.lang && e.language))) probs.push(`language: the code must be ${e.language} (got ${blocks.map((b) => b.lang || "?").join(", ")})`);
  const texts = e.texts.flatMap((t) => (/^[\p{L}\s]+\/[\p{L}\s/]+$/u.test(t) ? t.split("/").map((x) => x.trim()).filter(Boolean) : [t]));
  for (const t of texts) if (!codeN.includes(norm(t)) && !codeN.toLowerCase().includes(norm(t).toLowerCase())) probs.push(`missing exact text: "${t}"`);
  if (e.colors.length) {
    const have = colorClassesIn(code);
    for (const c of e.colors) if (!have.has(c) && !(c === "white" && /#fff\b|#ffffff/i.test(code))) probs.push(`colour ${c} requested but no ${c} colour value found`);
  }
  for (const h of e.hexes) if (!code.toLowerCase().includes(h)) probs.push(`exact colour ${h} not used`);
  for (const s of e.sizes) { const [, n, u] = s.match(/^([\d.]+)(.*)$/) || []; if (n && !new RegExp("(^|[^\\d.])" + n.replace(".", "\\.") + "\\s*" + u.replace("%", "%"), "i").test(code)) probs.push(`exact size ${s} not used`); }
  for (const n of e.names) if (!new RegExp("(def|function|fn|func|void|int|char|double|float|bool|long|auto|static|const|let|var|async function|public|private)\\s+\\**\\s*" + n + "\\s*[(=<]|" + n + "\\s*[:=]\\s*(async\\s*)?(function|\\(|[a-z_]+\\s*=>)|\\b" + n + "\\s*\\([^)]*\\)\\s*\\{", "").test(code) && !(e.language === "sql")) probs.push(`function ${n} is not defined with that exact name`);
  for (const c of e.classes) if (!new RegExp("class\\s+" + c + "\\b").test(code)) probs.push(`class ${c} is not defined with that exact name`);
  for (const i of e.ids) if (!new RegExp("id\\s*=\\s*[\"']?" + i + "\\b").test(code)) probs.push(`element id "${i}" missing`);
  if (e.functionOnly && blocks.some((b) => /<!doctype|<html/i.test(b.code))) probs.push("the user asked for plain code (function/class), not an HTML page — give plain code");
  if (e.features.includes("storage") && !/localStorage/.test(code)) probs.push("localStorage persistence missing");
  if (e.features.includes("keyboard") && !/key(down|up|press)|\.key\b|keyCode|input\(|scanf|fgets|submit/.test(code)) probs.push("keyboard handling missing");
  if (e.features.includes("dark") && !/prefers-color-scheme|dark/i.test(code)) probs.push("dark mode missing");
  if (["html"].includes(e.language) && /innerHTML\s*[+]?=\s*[^;]*(\.value|input|text\b|todo|item|name)/i.test(code)) probs.push("possible XSS: user text inserted with innerHTML — use textContent/createElement");
  if (/\bstructuredClone\b/.test(code) && /structuredClone/i.test(ana.task || "")) probs.push("structuredClone was forbidden by the user");
  return probs.slice(0, 8);
}
