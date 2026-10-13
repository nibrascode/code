import * as R from "./_tool-run.js";

const SITE = "https://www.nibrascode.com/tools";
const SECRET = new Set(["password", "md5", "sha256", "hash", "jwt", "base64"]);

const TOOLS = [
  { id: "json-min", slug: "json-minifier", test: /json\s*(?:sıx|six|minify|minifier|sıkıştır|ضغط)/i, run: (t) => R.minifyJson(t) },
  { id: "json", slug: "json", test: /json\s*(?:düzəlt|duzelt|format|formatter|düzəld|beautify|düzenle|تنسيق)/i, run: (t) => R.formatJson(t) },
  { id: "jsonyaml", slug: "json-to-yaml", test: /json\s*(?:dan|dən|-)?\s*yaml|json to yaml/i, run: (t) => R.jsonToYaml(t) },
  { id: "yamljson", slug: "yaml-to-json", test: /yaml\s*(?:dan|dən|-)?\s*json|yaml to json/i, run: (t) => R.yamlToJson(t) },
  { id: "jsoncsv", slug: "json-to-csv", test: /json\s*(?:dan|dən|-)?\s*csv|json to csv/i, run: (t) => R.jsonToCsv(t) },
  { id: "keys", slug: "json-keys", test: /json\s*(?:açar|acar|keys|açarlar)/i, run: (t) => R.jsonKeys(t) },
  { id: "escape", slug: "json-escape", test: /json\s*(?:qaçış|qacis|escape)/i, run: (t) => R.escapeJson(t) },
  { id: "sha256", slug: "sha-256", test: /sha-?256/i, run: (t) => hash(t, "sha256") },
  { id: "md5", slug: "md5", test: /\bmd5\b/i, run: (t) => R.md5Hex(t) },
  { id: "hash", slug: "hash", test: /sha-?1\b|\bhash\b/i, run: (t) => hash(t, "sha1") },
  { id: "base64", slug: "base64", test: /base\s*64/i, run: (t, raw) => /aç|decode|dekod/i.test(raw) ? R.decodeBase64(t) : R.encodeBase64(t) },
  { id: "url", slug: "url", test: /url\s*(?:kod|encode|decode|kodla|aç)/i, run: (t, raw) => /aç|decode/i.test(raw) ? R.decodeUrl(t) : R.encodeUrl(t) },
  { id: "htmlmd", slug: "html-to-markdown", test: /html(?:\s*|-)*(?:dən|den)?(?:\s*|-)*markdown|html to markdown/i, run: (t) => R.htmlToMarkdown(t) },
  { id: "strip", slug: "html-to-text", test: /html\s*(?:dən|den)\s*(?:mətn|metin|text)|html to text/i, run: (t) => R.stripHtml(t) },
  { id: "htmlfmt", slug: "html-formatter", test: /html\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatHtml(t) },
  { id: "html-min", slug: "html-minifier", test: /html\s*(?:sıx|six|minify|sıkıştır)/i, run: (t) => R.minifyHtml(t) },
  { id: "html", slug: "html", test: /html\s*(?:kod|encode|decode|kodla)/i, run: (t, raw) => /aç|decode/i.test(raw) ? R.decodeHtml(t) : R.encodeHtml(t) },
  { id: "css-min", slug: "css-minifier", test: /css\s*(?:sıx|six|minify|sıkıştır)/i, run: (t) => R.minifyCss(t) },
  { id: "cssvar", slug: "css-variable", test: /css\s*(?:dəyişən|deyisen|variable)/i, run: (t) => R.cssVariable(t) },
  { id: "css", slug: "css", test: /css\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatCss(t) },
  { id: "js-min", slug: "javascript-minifier", test: /(?:js|javascript)\s*(?:sıx|six|minify|sıkıştır)/i, run: (t) => R.minifyJs(t) },
  { id: "js", slug: "javascript", test: /(?:js|javascript)\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatJs(t) },
  { id: "python", slug: "python", test: /python\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatPython(t) },
  { id: "php", slug: "php", test: /php\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatPhp(t) },
  { id: "sql-min", slug: "sql-minifier", test: /sql\s*(?:sıx|six|minify|sıkıştır)/i, run: (t) => R.minifySql(t) },
  { id: "sql", slug: "sql", test: /sql\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatSql(t) },
  { id: "xml-min", slug: "xml-minifier", test: /xml\s*(?:sıx|six|minify|sıkıştır)/i, run: (t) => R.minifyXml(t) },
  { id: "xml", slug: "xml", test: /xml\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatXml(t) },
  { id: "yaml", slug: "yaml", test: /yaml\s*(?:düzəlt|duzelt|format|formatter|düzenle)/i, run: (t) => R.formatYaml(t) },
  { id: "markdown", slug: "markdown-html", test: /markdown\s*(?:dan|dən|-)?\s*html|markdown to html/i, run: (t) => R.markdownHtml(t) },
  { id: "uuid", slug: "uuid", test: /\buuid\b/i, none: true, run: () => R.makeUuid() },
  { id: "password", slug: "password", test: /(?:təsadüfi|tesadufi|random)\s*(?:şifrə|sifre|parol|password)|şifrə\s*(?:yarat|ver|generate)/i, none: true, run: () => R.randomPassword(16) },
  { id: "lorem", slug: "lorem-ipsum", test: /lorem/i, none: true, run: () => R.lorem(2) },
  { id: "name", slug: "random-name", test: /(?:təsadüfi|tesadufi|random)\s*(?:ad|isim|name)/i, none: true, run: () => R.randomName() },
  { id: "text", slug: "random-text", test: /(?:təsadüfi|tesadufi|random)\s*(?:mətn|metin|text)/i, none: true, run: () => R.randomText(12) },
  { id: "number", slug: "random-number", test: /(?:təsadüfi|tesadufi|random)\s*(?:rəqəm|reqem|sayı|number|ədəd)/i, none: true, run: () => R.randomNumber(1, 100) },
  { id: "count", slug: "word-count", test: /söz\s*say|soz\s*say|word\s*count|söz sayğacı/i, run: (t) => fmt(R.textStats(t), ["words", "chars", "nospace", "lines"], ["Söz", "Simvol", "Boşluqsuz", "Sətir"]) },
  { id: "chars", slug: "character-count", test: /simvol\s*say|character\s*count/i, run: (t) => fmt(R.charCount(t), ["chars"], ["Simvol"]) },
  { id: "case", slug: "letter-case", test: /hərf\s*forma|herf\s*forma|letter\s*case|camelcase|snake_case/i, run: (t) => fmt(R.caseForms(t), ["upper", "lower", "camel", "snake", "slug"], ["Böyük", "Kiçik", "camelCase", "snake_case", "slug"]) },
  { id: "unix", slug: "unix-time", test: /unix\s*(?:vaxt|zaman|time)/i, run: (t) => R.unixConvert(t) },
  { id: "color", slug: "color", test: /rəng\s*kod|reng\s*kod|color\s*code|#(?:[0-9a-f]{6})/i, run: (t) => R.convertColor(t) },
  { id: "base", slug: "binary-hex", test: /ikilik|onaltılıq|binary|hex(?:adecimal)?\s*(?:çevir|convert)/i, run: (t) => R.convertBase(t) },
  { id: "pxrem", slug: "px-rem", test: /\b\d+(?:\.\d+)?\s*(?:px|rem)\b/i, run: (t) => R.convertPxRem(t, "16") },
  { id: "jwt", slug: "jwt", test: /\bjwt\b/i, run: (t) => R.readJwt(t) },
  { id: "cron", slug: "cron", test: /\bcron\b/i, run: (t) => R.explainCron(t) },
  { id: "chmod", slug: "chmod", test: /\bchmod\b/i, run: (t) => R.convertChmod(t) },
  { id: "robots", slug: "robots-txt", test: /robots\.txt/i, run: (t) => R.makeRobots(t) },
  { id: "slug", slug: "slug", test: /\bslug\b/i, run: (t) => R.makeSlug(t) },
  { id: "percent", slug: "percent", test: /faiz|percent|\d+(?:\.\d+)?%\s*(?:of|dən|den)?\s*\d+/i, run: (t) => R.percentOf((t.match(/\d+(?:\.\d+)?%?\s+\d+/) || [t])[0]) },
  { id: "mime", slug: "mime", test: /\bmime\b/i, run: (t) => R.mimeType(t) },
  { id: "meta", slug: "meta", test: /\bmeta\s*(?:tag|yarat|ver)/i, run: (t) => R.makeMeta(t, "", "") },
  { id: "sitemap", slug: "sitemap", test: /\bsitemap\b/i, run: (t) => R.makeSitemap(t) },
  { id: "utm", slug: "utm", test: /\butm\b/i, run: (t) => R.makeUtm(t, "nibras", "chat") },
  { id: "days", slug: "date-diff", test: /tarix\s*fərq|tarix\s*ferq|date\s*diff/i, run: (t) => R.dateDiff(...two(t)) },
  { id: "shadow", slug: "css-shadow", test: /css\s*kölgə|css\s*kolge|box-shadow|css shadow/i, run: (t) => R.cssShadow(t) },
  { id: "htaccess", slug: "htaccess", test: /htaccess/i, run: (t) => R.makeRedirect(...two(t)) },
  { id: "gradient", slug: "css-gradient", test: /css\s*gradient|gradient\s*yarat/i, run: (t) => R.cssGradient(...two(t)) },
  { id: "strength", slug: "password-strength", test: /şifrə\s*güc|sifre\s*guc|password\s*strength/i, run: (t) => R.passwordStrength(t) },
  { id: "table", slug: "html-table", test: /html\s*cədvəl|html\s*cedvel|html table/i, run: (t) => R.htmlTable(t) },
  { id: "radius", slug: "css-radius", test: /css\s*radius|border-radius/i, run: (t) => R.cssRadius(t) },
  { id: "trim", slug: "trim-spaces", test: /boşluq\s*təmiz|bosluq\s*temiz|trim\s*space/i, run: (t) => R.trimSpaces(t) },
  { id: "lines", slug: "line-numbers", test: /sətir\s*nömr|setir\s*nomr|line\s*number/i, run: (t) => R.lineNumbers(t) },
  { id: "palette", slug: "color-palette", test: /rəng\s*palitr|reng\s*palitr|color palette/i, run: (t) => R.colorPalette(t) },
  { id: "link", slug: "link-check", test: /link\s*yoxla|link check/i, run: (t) => R.checkLink(t) },
  { id: "email", slug: "email-check", test: /e-?poçt\s*yoxla|email\s*yoxla|email check/i, run: (t) => R.checkEmail(t) },
  { id: "words", slug: "number-words", test: /ədəd\s*söz|eded\s*soz|number\s*words|rəqəm\s*söz/i, run: (t) => R.numberWords(t, "az") },
  { id: "ip", slug: "ip-check", test: /\bip\s*yoxla|ip check|\b\d{1,3}(?:\.\d{1,3}){3}\b/i, run: (t) => R.checkIp(t) },
  { id: "sort", slug: "sort-lines", test: /sətir\s*sırala|setir\s*sirala|sort lines/i, run: (t) => R.sortLines(t) },
  { id: "unique", slug: "remove-duplicates", test: /təkrarı\s*sil|tekrari\s*sil|remove duplicates/i, run: (t) => R.uniqueLines(t) },
  { id: "roman", slug: "roman-numeral", test: /roma\s*rəqəm|roma\s*reqem|roman numeral/i, run: (t) => R.romanConvert(t) },
  { id: "morse", slug: "morse-code", test: /morze|morse|морзе/i, run: (t) => R.morseConvert(t) },
  { id: "read", slug: "reading-time", test: /oxuma\s*vaxt|reading time/i, run: (t) => R.readingTime(t, "az") },
  { id: "binary", slug: "binary-text", test: /ikili\s*kod|binary text/i, run: (t) => R.textBinary(t) },
  { id: "hex", slug: "hex-text", test: /hex\s*kod|hex text/i, run: (t) => R.textHex(t) },
  { id: "temp", slug: "temperature", test: /selsi|celsius|fahrenheit|farengeyt|°[cf]/i, run: (t) => R.convertTemp(t) },
  { id: "domain", slug: "extract-domain", test: /domen\s*çıx|domen\s*cix|extract domain|alan adı/i, run: (t) => R.extractDomain(t) },
  { id: "length", slug: "centimeter", test: /santimetr|centimeter|\bcm\b.*\bin\b/i, run: (t) => R.convertLength(t) },
  { id: "weight", slug: "weight", test: /çəki|ceki|weight|\bkg\b.*\blb\b/i, run: (t) => R.convertWeight(t) },
  { id: "join", slug: "join-lines", test: /sətir\s*birləş|setir\s*birles|join lines/i, run: (t) => R.joinLines(t) },
  { id: "blank", slug: "remove-blank-lines", test: /boş\s*sətir\s*sil|bos\s*setir\s*sil|remove blank/i, run: (t) => R.removeBlank(t) },
  { id: "speed", slug: "speed", test: /sürət|suret|km\/h|mph/i, run: (t) => R.convertSpeed(t) },
  { id: "area", slug: "area", test: /\bsahə\b|\bsahe\b|area/i, run: (t) => R.convertArea(t) },
  { id: "vat", slug: "vat", test: /\bədv\b|\bvat\b|кдс/i, run: (t) => R.calcVat(t) },
  { id: "weekday", slug: "weekday", test: /həftə\s*günü|hefte\s*gunu|weekday/i, run: (t) => R.weekdayOf(t, "az") },
  { id: "prefix", slug: "add-to-lines", test: /sətirə\s*əlavə|setire\s*elave|prefix lines/i, run: (t) => R.prefixLines(t, extraOf(t) || "- ") },
  { id: "replace", slug: "find-replace", test: /tap\s*və\s*dəyiş|tap\s*ve\s*deyis|find.?replace/i, run: (t) => R.findReplace(t, extraOf(t)) },
  { id: "freq", slug: "word-frequency", test: /söz\s*tezli|soz\s*tezli|word frequency/i, run: (t) => R.wordFrequency(t) },
  { id: "discount", slug: "discount", test: /endirim|discount/i, run: (t) => R.calcDiscount(...nums(t)) },
  { id: "tip", slug: "tip", test: /çay\s*pul|cay\s*pul|tip/i, run: (t) => R.calcTip(...nums(t)) },
  { id: "split", slug: "split-bill", test: /hesab\s*böl|hesab\s*bol|split bill/i, run: (t) => R.splitBill(...nums(t)) },
  { id: "leap", slug: "leap-year", test: /artıq\s*il|artiq\s*il|leap year/i, run: (t) => R.leapYear((t.match(/\d{3,4}/) || [t])[0]) === "yes" ? "Bəli, artıq ildir." : "Xeyr, artıq il deyil." },
  { id: "query", slug: "query-string", test: /sorğu\s*çıx|sorgu\s*cix|query string/i, run: (t) => R.queryString(t) },
  { id: "regex", slug: "regex", test: /\bregex\b|regular expression/i, run: (t) => R.testRegex(extraOf(t) || t, t) },
  { id: "diff", slug: "text-diff", test: /mətn\s*fərq|metin\s*ferq|text diff/i, run: (t) => R.diffText(...two(t)) },
  { id: "contrast", slug: "color-contrast", test: /rəng\s*kontrast|reng\s*kontrast|color contrast/i, run: (t) => R.colorContrast(...two(t)) },
  { id: "csv", slug: "json-csv", test: /json\s*(?:və|ve)\s*csv|json csv/i, run: (t) => R.convertTable(t) },
];

import { createHash } from "node:crypto";
function hash(text, name) {
  return createHash(name).update(text, "utf8").digest("hex");
}
function fmt(value, keys, labels) {
  if (value && typeof value === "object") return keys.map((key, i) => `${labels[i]}: ${value[key]}`).join("\n");
  return String(value);
}
function payload(text, tool) {
  const cut = text.split(/[:：]\s*/);
  if (cut.length > 1) return cut.slice(1).join(":").trim();
  const stripped = text.replace(tool?.test || /$^/, " ").replace(/\s+/g, " ").trim();
  return stripped || text.trim();
}
function two(text) {
  const parts = text.split(/\s*(?:->|→|\|)\s*/);
  if (parts.length > 1) return [parts[0].trim(), parts.slice(1).join(" ").trim()];
  const nums = text.match(/-?\d+(?:\.\d+)?/g) || [];
  return [nums[0] || text, nums[1] || ""];
}
function nums(text) {
  const found = text.match(/-?\d+(?:\.\d+)?/g) || [];
  return [found[0] || "", found[1] || ""];
}
function extraOf(text) {
  const parts = text.split(/\s*(?:->|→|\|)\s*/);
  return parts.length > 1 ? parts.slice(1).join(" ").trim() : "";
}
function tail(slug) {
  return `\n\nXidmət: ${SITE}/${slug}`;
}

export function toolsReply(message) {
  const text = String(message || "").trim();
  if (!text || text.length > 5000) return null;
  if (/xidmətlər|xidmetler|hansı alət|hansi alet|services list/i.test(text) && text.length < 60) {
    return `Xidmətlər açıqdır. Adını və mətni yaz, məsələn «JSON düzəlt: {"a":1}» və ya «UUID yarat».\n\nSəhifə: ${SITE}`;
  }
  if (/nədir|nedir|what is|necə işləyir|ne ise yarar/i.test(text) && !/[:：]/.test(text) && text.length < 80) return null;
  const tool = TOOLS.find((item) => item.test.test(text));
  if (!tool) return null;
  const body = tool.none ? "" : payload(text, tool);
  if (!tool.none && body.length < 1) return null;
  try {
    let out = tool.run(body, text);
    if (out == null || out === false) return null;
    if (typeof out === "object") out = JSON.stringify(out, null, 2);
    const bodyText = `${out}${tail(tool.slug)}`;
    return SECRET.has(tool.id) ? `::vault::\n${bodyText}` : bodyText;
  } catch {
    return null;
  }
}
