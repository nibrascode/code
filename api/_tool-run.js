// src/lib/md5.ts
function rot(value, shift) {
  return value << shift | value >>> 32 - shift;
}
function add(a, b) {
  return a + b >>> 0;
}
function md5(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  const bitLength = bytes.length * 8;
  bytes.push(128);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const lo = bitLength >>> 0;
  const hi = Math.floor(bitLength / 4294967296);
  for (let i = 0; i < 4; i += 1) bytes.push(lo >>> 8 * i & 255);
  for (let i = 0; i < 4; i += 1) bytes.push(hi >>> 8 * i & 255);
  let a0 = 1732584193;
  let b0 = 4023233417;
  let c0 = 2562383102;
  let d0 = 271733878;
  const shift = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  const table = Array.from({ length: 64 }, (_, index) => Math.floor(Math.abs(Math.sin(index + 1)) * 4294967296) >>> 0);
  for (let offset = 0; offset < bytes.length; offset += 64) {
    const word = Array.from({ length: 16 }, (_, index) => {
      const at = offset + index * 4;
      return (bytes[at] | bytes[at + 1] << 8 | bytes[at + 2] << 16 | bytes[at + 3] << 24) >>> 0;
    });
    let a = a0;
    let b = b0;
    let c = c0;
    let d = d0;
    for (let i = 0; i < 64; i += 1) {
      let f = 0;
      let g = 0;
      if (i < 16) {
        f = b & c | ~b & d;
        g = i;
      } else if (i < 32) {
        f = d & b | ~d & c;
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        f = b ^ c ^ d;
        g = (3 * i + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = 7 * i % 16;
      }
      f = add(add(add(f, a), table[i]), word[g]);
      a = d;
      d = c;
      c = b;
      b = add(b, rot(f, shift[(i >> 4) * 4 + i % 4]));
    }
    a0 = add(a0, a);
    b0 = add(b0, b);
    c0 = add(c0, c);
    d0 = add(d0, d);
  }
  return [a0, b0, c0, d0].map(
    (value) => [0, 8, 16, 24].map((shiftBy) => (value >>> shiftBy & 255).toString(16).padStart(2, "0")).join("")
  ).join("");
}

// src/lib/tools-run.ts
var LOREM = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
var WORDS = "s\u0259hif\u0259 kod fayl r\u0259ng d\xFCym\u0259 m\u0259tn \u015F\u0259kil s\u0259tir ad r\u0259q\u0259m qovluq sayt ekran yaz\u0131".split(" ");
var FIRST = ["Aysel", "Murad", "Leyla", "Elvin", "Nigar", "Kamran", "Sara", "Emil", "Maya", "Rauf"];
var LAST = ["\u018Fliyev", "M\u0259mm\u0259dova", "H\u0259s\u0259nli", "Quliyeva", "\u0130smay\u0131lov", "K\u0259rimli", "Novruzlu", "S\u0259f\u0259rova"];
function pick(list) {
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return list[bytes[0] % list.length];
}
function between(min, max) {
  const low = Math.ceil(Math.min(min, max));
  const high = Math.floor(Math.max(min, max));
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return low + bytes[0] % (high - low + 1);
}
function lorem(paragraphs) {
  const count = Math.min(8, Math.max(1, paragraphs || 1));
  return Array.from({ length: count }, (_, index) => {
    const words = Array.from({ length: 28 }, (__, word) => LOREM[(index * 7 + word) % LOREM.length]);
    const line = words.join(" ");
    return line.charAt(0).toUpperCase() + line.slice(1) + ".";
  }).join("\n\n");
}
function randomText(words) {
  const count = Math.min(80, Math.max(1, words || 12));
  return Array.from({ length: count }, () => pick(WORDS)).join(" ");
}
function randomNumber(min, max) {
  return String(between(Number.isFinite(min) ? min : 1, Number.isFinite(max) ? max : 100));
}
function randomName() {
  return `${pick(FIRST)} ${pick(LAST)}`;
}
function randomPassword(length) {
  const size = Math.min(64, Math.max(6, length || 16));
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
  return Array.from({ length: size }, () => pick(alphabet.split(""))).join("");
}
function makeUuid() {
  return crypto.randomUUID();
}
function md5Hex(text) {
  return md5(text);
}
function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}
function decodeBase64(text) {
  const binary = atob(text.trim());
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
function encodeUrl(text) {
  return encodeURIComponent(text);
}
function decodeUrl(text) {
  return decodeURIComponent(text);
}
var AMP = "&amp;";
var LT = "&lt;";
var GT = "&gt;";
var QUOT = "&quot;";
function encodeHtml(text) {
  const map = { "&": AMP, "<": LT, ">": GT, '"': QUOT, "'": "&#39;" };
  return text.replace(/[&<>"']/g, (char) => map[char] ?? char);
}
function decodeHtml(text) {
  return text.replaceAll(LT, "<").replaceAll(GT, ">").replaceAll(QUOT, '"').replaceAll("&#39;", "'").replaceAll(AMP, "&");
}
function formatJson(text) {
  return JSON.stringify(JSON.parse(text), null, 2);
}
function minifyJson(text) {
  return JSON.stringify(JSON.parse(text));
}
function formatXml(text) {
  const compact = text.replace(/>\s+</g, "><").trim();
  if (!compact.startsWith("<") || !compact.includes(">")) throw new Error("xml");
  let pad = 0;
  return compact.replace(/(>)(<)/g, "$1\n$2").split("\n").map((line) => {
    if (line.match(/^<\/.+>/)) pad = Math.max(0, pad - 1);
    const next = `${"  ".repeat(pad)}${line}`;
    if (line.match(/^<[^!?/][^>]*[^/]>$/)) pad += 1;
    return next;
  }).join("\n");
}
function formatSql(text) {
  const keys = ["select", "from", "where", "and", "or", "join", "left join", "right join", "inner join", "group by", "order by", "limit", "insert into", "values", "update", "set", "delete from"];
  let next = text.replace(/\s+/g, " ").trim();
  if (!next) throw new Error("sql");
  for (const key of keys) {
    const pattern = new RegExp(`\\b${key}\\b`, "ig");
    next = next.replace(pattern, `
${key.toUpperCase()}`);
  }
  return next.trim();
}
function walkCode(text, open, close) {
  let out = "";
  let pad = 0;
  let quote = "";
  const source = text.replace(/\r\n/g, "\n").trim();
  if (!source) throw new Error("code");
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      out += char;
      if (char === "\\" && source[i + 1]) {
        out += source[i + 1];
        i += 1;
      } else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      out += char;
      continue;
    }
    if (char === "\n") continue;
    if (char === close) {
      pad = Math.max(0, pad - 1);
      out = out.replace(/[ ]*$/, "");
      if (!out.endsWith("\n")) out += "\n";
      out += `${"  ".repeat(pad)}${char}`;
      continue;
    }
    if (char === open) {
      out += `${char}
${"  ".repeat(pad + 1)}`;
      pad += 1;
      continue;
    }
    if (char === ";") {
      out += ";\n" + "  ".repeat(pad);
      continue;
    }
    out += char;
  }
  return out.split("\n").map((line) => line.trimEnd()).filter((line, index, all) => line.trim() || all[index - 1] && all[index - 1].trim()).join("\n").trim();
}
function formatJs(text) {
  return walkCode(text, "{", "}");
}
function formatCss(text) {
  return walkCode(text, "{", "}");
}
function minifyHtml(text) {
  const next = text.replace(/<!--[\s\S]*?-->/g, "").replace(/>\s+</g, "><").replace(/\s{2,}/g, " ").trim();
  if (!next.includes("<")) throw new Error("html");
  return next;
}
function minifyCss(text) {
  const next = text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([{}:;,])\s*/g, "$1").trim();
  if (!next.includes("{")) throw new Error("css");
  return next;
}
var AZ = {
  \u0259: "e",
  \u00F6: "o",
  \u00FC: "u",
  \u0131: "i",
  \u011F: "g",
  \u015F: "s",
  \u00E7: "c",
  \u018F: "e",
  \u00D6: "o",
  \u00DC: "u",
  I: "i",
  \u0130: "i",
  \u011E: "g",
  \u015E: "s",
  \u00C7: "c"
};
function wordsOf(text) {
  return text.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(/[^0-9A-Za-zəöüğıışçƏÖÜĞIİŞÇ]+/).filter(Boolean);
}
function caseForms(text) {
  const words = wordsOf(text.trim());
  if (!words.length) throw new Error("empty");
  const lowerWords = words.map((word) => word.toLowerCase());
  const camel = lowerWords.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("");
  const snake = lowerWords.join("_");
  const slug = [...text].map((char) => AZ[char] ?? char).join("").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return { upper: text.toUpperCase(), lower: text.toLowerCase(), camel, snake, slug };
}
function textStats(text) {
  const chars = Array.from(text).length;
  const nospace = Array.from(text.replace(/\s/g, "")).length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text.length ? text.split(/\n/).length : 0;
  return { words, chars, nospace, lines };
}
function unixConvert(text) {
  const raw = text.trim();
  if (/^-?\d+(\.\d+)?$/.test(raw)) {
    const value = Number(raw);
    const ms = Math.abs(value) < 1e11 ? value * 1e3 : value;
    const date2 = new Date(ms);
    if (Number.isNaN(date2.getTime())) throw new Error("time");
    return date2.toISOString().replace(".000Z", " UTC").replace("T", " ").replace("Z", " UTC");
  }
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) throw new Error("time");
  return String(Math.floor(date.getTime() / 1e3));
}
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quote = false;
  const source = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (char === '"') {
        if (source[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else quote = false;
      } else cell += char;
      continue;
    }
    if (char === '"') quote = true;
    else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += char;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((line) => line.some((part) => part.trim()));
}
function csvEscape(value) {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}
function convertTable(text) {
  const raw = text.trim();
  if (!raw) throw new Error("empty");
  if (raw.startsWith("{") || raw.startsWith("[")) {
    const data = JSON.parse(raw);
    const rows = Array.isArray(data) ? data : [data];
    if (!rows.length || rows.some((row) => !row || typeof row !== "object" || Array.isArray(row))) throw new Error("json");
    const keys = [...new Set(rows.flatMap((row) => Object.keys(row)))];
    const body = rows.map(
      (row) => keys.map((key) => {
        const value = row[key];
        if (value == null) return "";
        return csvEscape(typeof value === "object" ? JSON.stringify(value) : String(value));
      }).join(",")
    );
    return [keys.join(","), ...body].join("\n");
  }
  const table = parseCsv(raw);
  if (table.length < 2) throw new Error("csv");
  const [head, ...rest] = table;
  return JSON.stringify(
    rest.map((line) => Object.fromEntries(head.map((key, index) => [key, line[index] ?? ""]))),
    null,
    2
  );
}
function testRegex(pattern, text) {
  const wrapped = pattern.trim().match(/^\/(.+)\/([a-z]*)$/);
  const source = wrapped ? wrapped[1] : pattern;
  const flags = wrapped ? wrapped[2] : "g";
  if (!source) throw new Error("regex");
  const re = new RegExp(source, flags.includes("g") ? flags : `${flags}g`);
  return [...text.matchAll(re)].map((match) => match[0]).filter((part) => part !== "");
}
function clampColor(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}
function hslToRgb(h, s, l) {
  const hue = (h % 360 + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(hue / 60 % 2 - 1));
  const m = l - c / 2;
  const part = hue < 60 ? [c, x, 0] : hue < 120 ? [x, c, 0] : hue < 180 ? [0, c, x] : hue < 240 ? [0, x, c] : hue < 300 ? [x, 0, c] : [c, 0, x];
  return part.map((channel2) => clampColor((channel2 + m) * 255));
}
function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = d / (1 - Math.abs(2 * l - 1));
  const h = max === rn ? (gn - bn) / d % 6 : max === gn ? (bn - rn) / d + 2 : (rn - gn) / d + 4;
  return [Math.round((h * 60 + 360) % 360), Math.round(s * 100), Math.round(l * 100)];
}
function convertColor(text) {
  const raw = text.trim();
  let channels = null;
  const hex = raw.match(/^#?([0-9a-f]{6})$/i);
  const short = raw.match(/^#?([0-9a-f]{3})$/i);
  const rgb = raw.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
  const hsl = raw.match(/^hsla?\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%/i);
  if (hex) channels = [0, 2, 4].map((at) => parseInt(hex[1].slice(at, at + 2), 16));
  else if (short) channels = [...short[1]].map((char) => parseInt(char + char, 16));
  else if (rgb) channels = [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  else if (hsl) channels = hslToRgb(Number(hsl[1]), Number(hsl[2]) / 100, Number(hsl[3]) / 100);
  if (!channels || channels.some((part) => part < 0 || part > 255 || Number.isNaN(part))) throw new Error("color");
  const [r, g, b] = channels;
  const hexOut = `#${[r, g, b].map((part) => part.toString(16).padStart(2, "0")).join("")}`;
  const [h, s, l] = rgbToHsl(r, g, b);
  return `${hexOut}
rgb(${r}, ${g}, ${b})
hsl(${h}, ${s}%, ${l}%)`;
}
function diffText(leftText, rightText) {
  const left = leftText.replace(/\r\n/g, "\n").split("\n");
  const right = rightText.replace(/\r\n/g, "\n").split("\n");
  if (left.length * right.length > 4e4) throw new Error("big");
  const dp = Array.from({ length: left.length + 1 }, () => new Uint16Array(right.length + 1));
  for (let i2 = left.length - 1; i2 >= 0; i2 -= 1) {
    for (let j2 = right.length - 1; j2 >= 0; j2 -= 1) {
      dp[i2][j2] = left[i2] === right[j2] ? dp[i2 + 1][j2 + 1] + 1 : Math.max(dp[i2 + 1][j2], dp[i2][j2 + 1]);
    }
  }
  const out = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      out.push(`  ${left[i]}`);
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      out.push(`- ${left[i]}`);
      i += 1;
    } else {
      out.push(`+ ${right[j]}`);
      j += 1;
    }
  }
  while (i < left.length) out.push(`- ${left[i++]}`);
  while (j < right.length) out.push(`+ ${right[j++]}`);
  return out.join("\n");
}
function convertBase(text) {
  const raw = text.trim().toLowerCase().replace(/[\s_]/g, "");
  if (!raw) throw new Error("base");
  let value;
  if (raw.startsWith("0b")) value = BigInt(raw);
  else if (raw.startsWith("0x")) value = BigInt(raw);
  else if (/^[0-9]+$/.test(raw)) value = BigInt(raw);
  else if (/^[0-9a-f]+$/.test(raw) && /[a-f]/.test(raw)) value = BigInt(`0x${raw}`);
  else throw new Error("base");
  return `10: ${value.toString(10)}
2: ${value.toString(2)}
16: ${value.toString(16)}`;
}
function trimNumber(value) {
  return String(Math.round(value * 1e3) / 1e3);
}
function convertPxRem(text, root) {
  const base = Number(root);
  if (!Number.isFinite(base) || base <= 0) throw new Error("px");
  const raw = text.trim().toLowerCase();
  const px = raw.match(/^(-?\d+(?:\.\d+)?)\s*px$/);
  const rem = raw.match(/^(-?\d+(?:\.\d+)?)\s*rem$/);
  const plain = raw.match(/^(-?\d+(?:\.\d+)?)$/);
  if (px) return `${px[1]}px
${trimNumber(Number(px[1]) / base)}rem`;
  if (rem) return `${trimNumber(Number(rem[1]) * base)}px
${rem[1]}rem`;
  if (plain) return `${plain[1]}px
${trimNumber(Number(plain[1]) / base)}rem`;
  throw new Error("px");
}
function readBase64Url(part) {
  const pad = part.replace(/-/g, "+").replace(/_/g, "/");
  const padded = pad + "=".repeat((4 - pad.length % 4) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
function readJwt(token) {
  const parts = token.trim().split(".");
  if (parts.length < 2) throw new Error("jwt");
  const header = JSON.stringify(JSON.parse(readBase64Url(parts[0])), null, 2);
  const payload = JSON.stringify(JSON.parse(readBase64Url(parts[1])), null, 2);
  return `header
${header}

payload
${payload}`;
}
var WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function cronPart(part, names) {
  if (part === "*") return "*";
  if (part.startsWith("*/")) return `*/${part.slice(2)}`;
  if (names && /^\d+$/.test(part)) {
    const at = Number(part);
    return names[at] ? `${part} (${names[at]})` : part;
  }
  return part;
}
function explainCron(text) {
  const parts = text.trim().split(/\s+/);
  if (parts.length !== 5 || parts.some((part) => !/^[\d*,/-]+$/.test(part))) throw new Error("cron");
  const [minute, hour, day, month, weekday] = parts;
  return [
    `minute: ${cronPart(minute)}`,
    `hour: ${cronPart(hour)}`,
    `day: ${cronPart(day)}`,
    `month: ${cronPart(month, ["", ...MONTH])}`,
    `weekday: ${cronPart(weekday, WEEK)}`
  ].join("\n");
}
var CHMOD_BITS = ["---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"];
function convertChmod(text) {
  const raw = text.trim().toLowerCase();
  if (/^[0-7]{3,4}$/.test(raw)) {
    const oct = raw.slice(-3);
    return `${raw}
${[...oct].map((digit) => CHMOD_BITS[Number(digit)]).join("")}`;
  }
  if (/^[rwx-]{9}$/.test(raw)) {
    const oct = raw.match(/.{3}/g).map((group) => CHMOD_BITS.indexOf(group)).join("");
    if (oct.includes("-1")) throw new Error("chmod");
    return `${oct}
${raw}`;
  }
  throw new Error("chmod");
}
function makeRobots(text) {
  const paths = text.split(/\n+/).map((line) => line.trim()).filter(Boolean).map((line) => line.startsWith("/") ? line : `/${line}`);
  const body = paths.length ? paths.map((path) => `Disallow: ${path}`).join("\n") : "Allow: /";
  return `User-agent: *
${body}`;
}
function channel(hex, at) {
  const value = parseInt(hex.slice(at, at + 2), 16) / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}
function luminance(hex) {
  return 0.2126 * channel(hex, 0) + 0.7152 * channel(hex, 2) + 0.0722 * channel(hex, 4);
}
function colorContrast(front, back) {
  const read = (value) => {
    const hex = value.trim().replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
    if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("color");
    return full.toLowerCase();
  };
  const a = read(front);
  const b = read(back);
  const light = Math.max(luminance(a), luminance(b));
  const dark = Math.min(luminance(a), luminance(b));
  const ratio = (light + 0.05) / (dark + 0.05);
  const shown = Math.round(ratio * 100) / 100;
  return `#${a} / #${b}
${shown}:1
AA: ${ratio >= 4.5 ? "ok" : "no"}
AAA: ${ratio >= 7 ? "ok" : "no"}`;
}
function makeSlug(text) {
  const map = { \u0259: "e", \u0131: "i", \u00F6: "o", \u00FC: "u", \u011F: "g", \u015F: "s", \u00E7: "c", \u00E2: "a", \u00EE: "i", \u00FB: "u" };
  const slug = text.trim().toLowerCase().replace(/[əıöüğşçâîû]/g, (letter) => map[letter] || letter).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  if (!slug) throw new Error("slug");
  return slug;
}
function percentOf(text) {
  const raw = text.trim().replace(/,/g, ".");
  const ratio = raw.match(/^(-?\d+(?:\.\d+)?)\s*(?:\/|of)\s*(-?\d+(?:\.\d+)?)$/i);
  if (ratio) {
    const part = Number(ratio[1]);
    const whole2 = Number(ratio[2]);
    if (!whole2) throw new Error("percent");
    return `${part} / ${whole2}
${Math.round(part / whole2 * 1e4) / 100}%`;
  }
  const pct = raw.match(/^(-?\d+(?:\.\d+)?)\s*%?\s+(?:of\s+)?(-?\d+(?:\.\d+)?)$/i);
  if (!pct) throw new Error("percent");
  const rate = Number(pct[1]);
  const whole = Number(pct[2]);
  return `${rate}% of ${whole}
${Math.round(whole * rate) / 100}`;
}
var MIME = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  pdf: "application/pdf",
  json: "application/json",
  xml: "application/xml",
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  txt: "text/plain",
  csv: "text/csv",
  zip: "application/zip",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  woff2: "font/woff2"
};
function mimeType(text) {
  const ext = text.trim().toLowerCase().replace(/^\./, "").split(".").pop() || "";
  const type = MIME[ext];
  if (!type) throw new Error("mime");
  return `.${ext}
${type}`;
}
function esc(value) {
  return value.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;");
}
function makeMeta(title, description, image) {
  const name = title.trim();
  const about = description.trim();
  if (!name) throw new Error("meta");
  const picture = image.trim();
  const lines = [`<title>${esc(name)}</title>`, `<meta name="description" content="${esc(about)}">`, `<meta property="og:title" content="${esc(name)}">`, `<meta property="og:description" content="${esc(about)}">`];
  if (picture) lines.push(`<meta property="og:image" content="${esc(picture)}">`);
  return lines.join("\n");
}
function makeSitemap(text) {
  const urls = text.split(/\n+/).map((line) => line.trim()).filter((line) => /^https?:\/\//i.test(line));
  if (!urls.length) throw new Error("sitemap");
  const body = urls.map((url) => `  <url>
    <loc>${esc(url)}</loc>
  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}
function makeUtm(url, source, campaign) {
  const raw = url.trim();
  if (!/^https?:\/\//i.test(raw)) throw new Error("utm");
  const link = new URL(raw);
  if (source.trim()) link.searchParams.set("utm_source", source.trim());
  if (campaign.trim()) link.searchParams.set("utm_campaign", campaign.trim());
  return link.toString();
}
function dateDiff(start, end) {
  const a = new Date(start.trim());
  const b = new Date(end.trim());
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) throw new Error("date");
  const days = Math.round((b.getTime() - a.getTime()) / 864e5);
  return `${start.trim()} \u2192 ${end.trim()}
${days}`;
}
function cssShadow(text) {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 3) throw new Error("shadow");
  const [x, y, blur, color = "#111111"] = parts;
  if ([x, y, blur].some((part) => !/^-?\d+$/.test(part))) throw new Error("shadow");
  return `box-shadow: ${x}px ${y}px ${blur}px ${color};`;
}
function makeRedirect(from, to) {
  const oldUrl = from.trim();
  const next = to.trim();
  if (!oldUrl || !next) throw new Error("redirect");
  return `Redirect 301 ${oldUrl} ${next}`;
}
function cssGradient(from, to) {
  const read = (value) => {
    const hex = value.trim().replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
    if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("gradient");
    return `#${full.toLowerCase()}`;
  };
  return `background: linear-gradient(90deg, ${read(from)}, ${read(to)});`;
}
function passwordStrength(text) {
  const raw = text.trim();
  if (!raw) throw new Error("strength");
  const notes = [];
  if (raw.length < 8) notes.push("short");
  if (!/[a-z]/.test(raw) || !/[A-Z]/.test(raw)) notes.push("case");
  if (!/\d/.test(raw)) notes.push("digit");
  if (!/[^A-Za-z0-9]/.test(raw)) notes.push("symbol");
  if (/(.)\1{2,}/.test(raw)) notes.push("repeat");
  const weak = /* @__PURE__ */ new Set(["123456", "password", "qwerty", "111111", "sifre", "parol"]);
  if (weak.has(raw.toLowerCase())) notes.push("common");
  return notes.length ? notes.join("\n") : "ok";
}
function htmlTable(text) {
  const rows = text.split(/\n+/).map((line) => line.trim()).filter(Boolean).map((line) => line.split(",").map((cell) => cell.trim()));
  if (!rows.length) throw new Error("table");
  const body = rows.map((row, index) => {
    const tag = index === 0 ? "th" : "td";
    return `  <tr>${row.map((cell) => `<${tag}>${esc(cell)}</${tag}>`).join("")}</tr>`;
  }).join("\n");
  return `<table>
${body}
</table>`;
}
function cssRadius(text) {
  const raw = text.trim();
  if (!/^\d{1,3}$/.test(raw)) throw new Error("radius");
  return `border-radius: ${raw}px;`;
}
function trimSpaces(text) {
  const lines = text.split(/\n/).map((line) => line.trim().replace(/[ \t]{2,}/g, " "));
  return lines.join("\n").trim();
}
function lineNumbers(text) {
  const lines = text.replace(/\n$/, "").split("\n");
  if (!lines.length || lines.length === 1 && !lines[0]) throw new Error("lines");
  const width = String(lines.length).length;
  return lines.map((line, index) => `${String(index + 1).padStart(width, " ")}  ${line}`).join("\n");
}
function jsonToCsv(text) {
  const data = JSON.parse(text);
  const rows = Array.isArray(data) ? data : [data];
  if (!rows.length || rows.some((row) => !row || typeof row !== "object" || Array.isArray(row))) throw new Error("jsoncsv");
  const keys = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  const cell = (value) => {
    const shown = value == null ? "" : String(value);
    return /[",\n]/.test(shown) ? `"${shown.replace(/"/g, '""')}"` : shown;
  };
  return [keys.join(","), ...rows.map((row) => keys.map((key) => cell(row[key])).join(","))].join("\n");
}
function mix(hex, toward, amount) {
  const parts = [0, 2, 4].map((at) => {
    const value = parseInt(hex.slice(at, at + 2), 16);
    return Math.round(value + (toward - value) * amount).toString(16).padStart(2, "0");
  });
  return `#${parts.join("")}`;
}
function colorPalette(text) {
  const hex = text.trim().replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
  if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("palette");
  const base = full.toLowerCase();
  return [`#${base}`, mix(base, 255, 0.35), mix(base, 0, 0.35)].join("\n");
}
function formatHtml(text) {
  const raw = text.trim();
  if (!raw.includes("<")) throw new Error("html");
  const tokens = raw.replace(/>\s+</g, "><").split(/(<[^>]+>)/).filter(Boolean);
  let pad = 0;
  const lines = [];
  for (const token of tokens) {
    if (!token.startsWith("<")) {
      const value = token.trim();
      if (value) lines.push(`${"  ".repeat(pad)}${value}`);
      continue;
    }
    const close = /^<\//.test(token);
    const empty = /\/>$/.test(token) || /^<(area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr)\b/i.test(token);
    if (close) pad = Math.max(0, pad - 1);
    lines.push(`${"  ".repeat(pad)}${token}`);
    if (!close && !empty && !token.startsWith("<!")) pad += 1;
  }
  return lines.join("\n");
}
function minifyJs(text) {
  const next = text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1").replace(/\s+/g, " ").replace(/\s*([{}();,=+\-*/<>])\s*/g, "$1").trim();
  if (!next) throw new Error("js");
  return next;
}
function formatPython(text) {
  const raw = text.replace(/\t/g, "    ").replace(/\r/g, "");
  if (!raw.trim()) throw new Error("python");
  const lines = raw.split("\n").map((line) => line.trimEnd());
  return lines.filter((line, index, all) => line.trim() || index > 0 && all[index - 1].trim()).join("\n").trim();
}
function formatPhp(text) {
  if (!/<\?php|\$[A-Za-z_]/.test(text)) throw new Error("php");
  return walkCode(text, "{", "}");
}
function minifySql(text) {
  const next = text.replace(/--.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
  if (!/\b(select|insert|update|delete|create)\b/i.test(next)) throw new Error("sql");
  return next;
}
function minifyXml(text) {
  const next = text.replace(/<!--[\s\S]*?-->/g, "").replace(/>\s+</g, "><").trim();
  if (!next.includes("<")) throw new Error("xml");
  return next;
}
function cssVariable(text) {
  const hex = text.trim().replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
  if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("cssvar");
  return `--reng: #${full.toLowerCase()};`;
}
function checkLink(text) {
  const raw = text.trim();
  const notes = [];
  if (!raw) throw new Error("link");
  if (/\s/.test(raw)) notes.push("space");
  if (!/^https?:\/\//i.test(raw)) notes.push("http");
  try {
    const url = new URL(raw);
    if (!url.hostname.includes(".")) notes.push("host");
  } catch {
    notes.push("bad");
  }
  return notes.length ? notes.join("\n") : "ok";
}
function charCount(text, limit = 160) {
  const count = Array.from(text).length;
  return `${count}
${limit}
${count <= limit ? "ok" : "over"}`;
}
function formatYaml(text) {
  const lines = text.replace(/\t/g, "  ").split(/\n/).map((line) => line.trimEnd());
  if (!lines.some((line) => line.includes(":"))) throw new Error("yaml");
  return lines.join("\n").trim();
}
function markdownHtml(text) {
  const raw = text.trim();
  if (!raw) throw new Error("markdown");
  const escHtml = (value) => value.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  const inline = (value) => escHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
  return raw.split(/\n{2,}/).map((block) => {
    const line = block.trim();
    const head = line.match(/^(#{1,3})\s+(.+)$/);
    if (head) return `<h${head[1].length}>${inline(head[2])}</h${head[1].length}>`;
    return `<p>${inline(line).replace(/\n/g, "<br>")}</p>`;
  }).join("\n");
}
function checkEmail(text) {
  const raw = text.trim();
  if (!raw) throw new Error("email");
  const notes = [];
  if (!raw.includes("@")) notes.push("at");
  if ((raw.split("@")[1] || "").indexOf(".") < 1) notes.push("dot");
  if (/\s/.test(raw)) notes.push("space");
  return notes.length ? notes.join("\n") : "ok";
}
var SMALL = {
  az: ["s\u0131f\u0131r", "bir", "iki", "\xFC\xE7", "d\xF6rd", "be\u015F", "alt\u0131", "yeddi", "s\u0259kkiz", "doqquz", "on", "on bir", "on iki", "on \xFC\xE7", "on d\xF6rd", "on be\u015F", "on alt\u0131", "on yeddi", "on s\u0259kkiz", "on doqquz"],
  en: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
  tr: ["s\u0131f\u0131r", "bir", "iki", "\xFC\xE7", "d\xF6rt", "be\u015F", "alt\u0131", "yedi", "sekiz", "dokuz", "on", "on bir", "on iki", "on \xFC\xE7", "on d\xF6rt", "on be\u015F", "on alt\u0131", "on yedi", "on sekiz", "on dokuz"],
  ar: ["\u0635\u0641\u0631", "\u0648\u0627\u062D\u062F", "\u0627\u062B\u0646\u0627\u0646", "\u062B\u0644\u0627\u062B\u0629", "\u0623\u0631\u0628\u0639\u0629", "\u062E\u0645\u0633\u0629", "\u0633\u062A\u0629", "\u0633\u0628\u0639\u0629", "\u062B\u0645\u0627\u0646\u064A\u0629", "\u062A\u0633\u0639\u0629", "\u0639\u0634\u0631\u0629", "\u0623\u062D\u062F \u0639\u0634\u0631", "\u0627\u062B\u0646\u0627 \u0639\u0634\u0631", "\u062B\u0644\u0627\u062B\u0629 \u0639\u0634\u0631", "\u0623\u0631\u0628\u0639\u0629 \u0639\u0634\u0631", "\u062E\u0645\u0633\u0629 \u0639\u0634\u0631", "\u0633\u062A\u0629 \u0639\u0634\u0631", "\u0633\u0628\u0639\u0629 \u0639\u0634\u0631", "\u062B\u0645\u0627\u0646\u064A\u0629 \u0639\u0634\u0631", "\u062A\u0633\u0639\u0629 \u0639\u0634\u0631"],
  ru: ["\u043D\u043E\u043B\u044C", "\u043E\u0434\u0438\u043D", "\u0434\u0432\u0430", "\u0442\u0440\u0438", "\u0447\u0435\u0442\u044B\u0440\u0435", "\u043F\u044F\u0442\u044C", "\u0448\u0435\u0441\u0442\u044C", "\u0441\u0435\u043C\u044C", "\u0432\u043E\u0441\u0435\u043C\u044C", "\u0434\u0435\u0432\u044F\u0442\u044C", "\u0434\u0435\u0441\u044F\u0442\u044C", "\u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0442\u0440\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0448\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0432\u043E\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u044C", "\u0434\u0435\u0432\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C"]
};
var TENS = {
  az: ["", "", "iyirmi", "otuz", "q\u0131rx", "\u0259lli", "altm\u0131\u015F", "yetmi\u015F", "s\u0259ks\u0259n", "doxsan"],
  en: ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
  tr: ["", "", "yirmi", "otuz", "k\u0131rk", "elli", "altm\u0131\u015F", "yetmi\u015F", "seksen", "doksan"],
  ar: ["", "", "\u0639\u0634\u0631\u0648\u0646", "\u062B\u0644\u0627\u062B\u0648\u0646", "\u0623\u0631\u0628\u0639\u0648\u0646", "\u062E\u0645\u0633\u0648\u0646", "\u0633\u062A\u0648\u0646", "\u0633\u0628\u0639\u0648\u0646", "\u062B\u0645\u0627\u0646\u0648\u0646", "\u062A\u0633\u0639\u0648\u0646"],
  ru: ["", "", "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C", "\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C", "\u0441\u043E\u0440\u043E\u043A", "\u043F\u044F\u0442\u044C\u0434\u0435\u0441\u044F\u0442", "\u0448\u0435\u0441\u0442\u044C\u0434\u0435\u0441\u044F\u0442", "\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442", "\u0432\u043E\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442", "\u0434\u0435\u0432\u044F\u043D\u043E\u0441\u0442\u043E"]
};
function underHundred(value, lang) {
  if (value < 20) return SMALL[lang][value];
  const ten = TENS[lang][Math.floor(value / 10)];
  const one = value % 10;
  if (!one) return ten;
  return lang === "ar" ? `${SMALL[lang][one]} \u0648${ten}` : `${ten} ${SMALL[lang][one]}`;
}
function numberWords(text, lang) {
  const raw = text.trim();
  if (!/^\d{1,6}$/.test(raw)) throw new Error("words");
  const value = Number(raw);
  const code = SMALL[lang] ? lang : "az";
  if (value < 100) return underHundred(value, code);
  if (value < 1e3) {
    const hundred = Math.floor(value / 100);
    const rest2 = value % 100;
    const word2 = code === "en" ? "hundred" : code === "tr" ? "y\xFCz" : code === "ar" ? "\u0645\u0626\u0629" : code === "ru" ? "\u0441\u0442\u043E" : "y\xFCz";
    const head2 = hundred === 1 && code !== "en" ? word2 : `${underHundred(hundred, code)} ${word2}`;
    return rest2 ? `${head2} ${underHundred(rest2, code)}` : head2;
  }
  const thousand = Math.floor(value / 1e3);
  const rest = value % 1e3;
  const word = code === "en" ? "thousand" : code === "ar" ? "\u0623\u0644\u0641" : code === "ru" ? "\u0442\u044B\u0441\u044F\u0447\u0430" : "min";
  const head = `${underHundred(thousand, code)} ${word}`;
  return rest ? `${head} ${numberWords(String(rest), code)}` : head;
}
function checkIp(text) {
  const raw = text.trim();
  const parts = raw.split(".");
  if (parts.length !== 4 || parts.some((part) => !/^\d{1,3}$/.test(part) || Number(part) > 255)) throw new Error("ip");
  return `${raw}
ok`;
}
function sortLines(text) {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error("sort");
  return [...lines].sort((a, b) => a.localeCompare(b)).join("\n");
}
function uniqueLines(text) {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error("unique");
  return [...new Set(lines)].join("\n");
}
function jsonKeys(text) {
  const data = JSON.parse(text);
  const row = Array.isArray(data) ? data[0] : data;
  if (!row || typeof row !== "object" || Array.isArray(row)) throw new Error("keys");
  return Object.keys(row).join("\n");
}
function stripHtml(text) {
  if (!text.includes("<")) throw new Error("strip");
  return text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function yamlValue(value, pad = 0) {
  const space = "  ".repeat(pad);
  if (value == null) return "null";
  if (typeof value === "string") return /[:#\n]/.test(value) ? JSON.stringify(value) : value;
  if (typeof value !== "object") return String(value);
  if (Array.isArray(value)) return value.map((item) => `
${space}- ${yamlValue(item, pad + 1).trimStart()}`).join("");
  return Object.entries(value).map(([key, item]) => {
    const shown = yamlValue(item, pad + 1);
    return shown.startsWith("\n") ? `
${space}${key}:${shown}` : `
${space}${key}: ${shown}`;
  }).join("");
}
function jsonToYaml(text) {
  const data = JSON.parse(text);
  return yamlValue(data).replace(/^\n/, "");
}
function parseYamlValue(raw) {
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (raw === "null") return null;
  if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
  if (raw.startsWith('"') || raw.startsWith("'")) return raw.slice(1, -1);
  return raw;
}
function yamlToJson(text) {
  const lines = text.replace(/\t/g, "  ").split(/\n/).filter((line) => line.trim() && !line.trim().startsWith("#"));
  if (!lines.length) throw new Error("yaml");
  const root = {};
  const stack = [{ pad: -1, target: root }];
  for (const line of lines) {
    const pad = line.match(/^ */)?.[0].length ?? 0;
    while (stack.length > 1 && pad <= stack[stack.length - 1].pad) stack.pop();
    const parent = stack[stack.length - 1].target;
    const body = line.trim();
    if (body.startsWith("- ")) {
      if (!Array.isArray(parent)) throw new Error("yaml");
      parent.push(parseYamlValue(body.slice(2)));
      continue;
    }
    const cut = body.indexOf(":");
    if (cut < 1 || Array.isArray(parent)) throw new Error("yaml");
    const key = body.slice(0, cut).trim();
    const rest = body.slice(cut + 1).trim();
    if (!rest) {
      const next = {};
      parent[key] = next;
      stack.push({ pad, target: next });
    } else parent[key] = parseYamlValue(rest);
  }
  return JSON.stringify(root, null, 2);
}
var ROMAN = [[1e3, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
function romanConvert(text) {
  const raw = text.trim();
  if (/^\d+$/.test(raw)) {
    const value = Number(raw);
    if (value < 1 || value > 3999) throw new Error("roman");
    let left = value;
    return ROMAN.map(([num, sign]) => {
      const count = Math.floor(left / num);
      left -= count * num;
      return sign.repeat(count);
    }).join("");
  }
  const upper = raw.toUpperCase();
  if (!/^[IVXLCDM]+$/.test(upper)) throw new Error("roman");
  let total = 0;
  for (let i = 0; i < upper.length; i += 1) {
    const now = ROMAN.find((item) => item[1] === upper[i])?.[0] ?? 0;
    const next = ROMAN.find((item) => item[1] === upper[i + 1])?.[0] ?? 0;
    total += now < next ? -now : now;
  }
  return String(total);
}
var MORSE = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----."
};
var FROM_MORSE = Object.fromEntries(Object.entries(MORSE).map(([letter, code]) => [code, letter]));
function morseConvert(text, back = false) {
  const raw = text.trim();
  if (!raw) throw new Error("morse");
  if (back || /^[.\- /]+$/.test(raw)) {
    return raw.split(" / ").map((word) => word.split(" ").map((code) => FROM_MORSE[code] ?? "").join("")).join(" ");
  }
  return raw.toLowerCase().split(/\s+/).map((word) => [...word].map((letter) => MORSE[letter] ?? "").filter(Boolean).join(" ")).join(" / ");
}
function readingTime(text, lang) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  if (!words) throw new Error("read");
  const minutes = Math.max(1, Math.round(words / 200));
  const label = lang === "en" ? "min" : lang === "tr" ? "dk" : lang === "ar" ? "\u062F" : lang === "ru" ? "\u043C\u0438\u043D" : "d\u0259q";
  return `${words}
${minutes} ${label}`;
}
function textBinary(text, back = false) {
  const raw = text.trim();
  if (!raw) throw new Error("binary");
  if (back || /^[01 ]+$/.test(raw)) {
    const bytes = raw.split(/\s+/).map((part) => parseInt(part, 2));
    if (bytes.some((byte) => Number.isNaN(byte) || byte > 255)) throw new Error("binary");
    return new TextDecoder().decode(new Uint8Array(bytes));
  }
  return [...new TextEncoder().encode(raw)].map((byte) => byte.toString(2).padStart(8, "0")).join(" ");
}
function textHex(text, back = false) {
  const raw = text.trim();
  if (!raw) throw new Error("hex");
  if (back || /^(?:[0-9a-f]{2}\s*)+$/i.test(raw)) {
    const hex = raw.replace(/\s+/g, "");
    if (hex.length % 2) throw new Error("hex");
    const bytes = hex.match(/../g).map((part) => parseInt(part, 16));
    return new TextDecoder().decode(new Uint8Array(bytes));
  }
  return [...new TextEncoder().encode(raw)].map((byte) => byte.toString(16).padStart(2, "0")).join(" ");
}
function convertTemp(text) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*([cf])?$/);
  if (!match) throw new Error("temp");
  const value = Number(match[1]);
  const fromC = match[2] !== "f";
  const next = fromC ? value * 9 / 5 + 32 : (value - 32) * 5 / 9;
  return fromC ? `${next.toFixed(1)} F` : `${next.toFixed(1)} C`;
}
function extractDomain(text) {
  const raw = text.trim();
  if (!raw) throw new Error("domain");
  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (!url.hostname.includes(".")) throw new Error("domain");
    return url.hostname.replace(/^www\./, "");
  } catch {
    throw new Error("domain");
  }
}
function convertLength(text) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(cm|in|inch)?$/);
  if (!match) throw new Error("length");
  const value = Number(match[1]);
  const fromCm = match[2] !== "in" && match[2] !== "inch";
  const next = fromCm ? value / 2.54 : value * 2.54;
  return fromCm ? `${next.toFixed(2)} in` : `${next.toFixed(2)} cm`;
}
function convertWeight(text) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(kg|lb|lbs)?$/);
  if (!match) throw new Error("weight");
  const value = Number(match[1]);
  const fromKg = match[2] !== "lb" && match[2] !== "lbs";
  const next = fromKg ? value * 2.20462 : value / 2.20462;
  return fromKg ? `${next.toFixed(2)} lb` : `${next.toFixed(2)} kg`;
}
function joinLines(text) {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error("join");
  return lines.join(", ");
}
function escapeJson(text, back = false) {
  if (!text) throw new Error("escape");
  if (back) return JSON.parse(`"${text.replace(/^"|"$/g, "")}"`);
  return JSON.stringify(text).slice(1, -1);
}
function removeBlank(text) {
  const lines = text.split(/\n/).filter((line) => line.trim());
  if (!lines.length) throw new Error("blank");
  return lines.join("\n");
}
function convertSpeed(text) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(km|mph|mi)?$/);
  if (!match) throw new Error("speed");
  const value = Number(match[1]);
  const fromKm = match[2] !== "mph" && match[2] !== "mi";
  const next = fromKm ? value * 0.621371 : value / 0.621371;
  return fromKm ? `${next.toFixed(2)} mph` : `${next.toFixed(2)} km/h`;
}
function convertArea(text) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(m2|ft2|m|ft)?$/);
  if (!match) throw new Error("area");
  const value = Number(match[1]);
  const fromM = match[2] !== "ft2" && match[2] !== "ft";
  const next = fromM ? value * 10.7639 : value / 10.7639;
  return fromM ? `${next.toFixed(2)} ft2` : `${next.toFixed(2)} m2`;
}
function calcVat(text, rate = 18) {
  const value = Number(text.trim().replace(",", "."));
  if (!Number.isFinite(value)) throw new Error("vat");
  const tax = value * rate / 100;
  return `${tax.toFixed(2)}
${(value + tax).toFixed(2)}`;
}
function weekdayOf(text, lang) {
  const date = new Date(text.trim());
  if (Number.isNaN(date.getTime())) throw new Error("weekday");
  const names = {
    az: ["bazar", "bazar ert\u0259si", "\xE7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131", "\xE7\u0259r\u015F\u0259nb\u0259", "c\xFCm\u0259 ax\u015Fam\u0131", "c\xFCm\u0259", "\u015F\u0259nb\u0259"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    tr: ["pazar", "pazartesi", "sal\u0131", "\xE7ar\u015Famba", "per\u015Fembe", "cuma", "cumartesi"],
    ar: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"],
    ru: ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0441\u0443\u0431\u0431\u043E\u0442\u0430"]
  };
  return (names[lang] ?? names.az)[date.getUTCDay()];
}
function prefixLines(text, extra) {
  const lines = text.split(/\n/);
  if (!lines.some((line) => line.trim()) || !extra.trim()) throw new Error("prefix");
  return lines.map((line) => line.trim() ? `${extra}${line}` : line).join("\n");
}
function findReplace(text, extra) {
  const cut = extra.indexOf("=>");
  if (cut < 1) throw new Error("replace");
  const from = extra.slice(0, cut);
  const to = extra.slice(cut + 2);
  if (!from) throw new Error("replace");
  return text.split(from).join(to);
}
function wordFrequency(text) {
  const words = text.toLowerCase().match(/[0-9A-Za-zəöüğıışçƏÖÜĞIİŞÇ]+/g) ?? [];
  if (!words.length) throw new Error("freq");
  const count = /* @__PURE__ */ new Map();
  for (const word of words) count.set(word, (count.get(word) ?? 0) + 1);
  return [...count.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([word, times]) => `${word} ${times}`).join("\n");
}
function htmlToMarkdown(text) {
  if (!text.includes("<")) throw new Error("htmlmd");
  return text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n").replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n").replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n").replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**").replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**").replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*").replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)").replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/\n{3,}/g, "\n\n").trim();
}
function calcDiscount(text, extra) {
  const value = Number(text.trim());
  const rate = Number(extra.trim());
  if (!Number.isFinite(value) || !Number.isFinite(rate)) throw new Error("discount");
  return (value - value * rate / 100).toFixed(2);
}
function calcTip(text, extra) {
  const value = Number(text.trim());
  const rate = Number(extra.trim() || "10");
  if (!Number.isFinite(value)) throw new Error("tip");
  return (value * rate / 100).toFixed(2);
}
function splitBill(text, extra) {
  const value = Number(text.trim());
  const people = Number(extra.trim() || "2");
  if (!Number.isFinite(value) || people < 1) throw new Error("split");
  return (value / people).toFixed(2);
}
function leapYear(text) {
  const year = Number(text.trim());
  if (!Number.isInteger(year) || year < 1) throw new Error("leap");
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ? "yes" : "no";
}
function queryString(text) {
  const raw = text.trim();
  const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://nibrascode.com/${raw}`);
  if (!url.search) throw new Error("query");
  return [...url.searchParams.entries()].map(([key, value]) => `${key}=${value}`).join("\n");
}
export {
  calcDiscount,
  calcTip,
  calcVat,
  caseForms,
  charCount,
  checkEmail,
  checkIp,
  checkLink,
  colorContrast,
  colorPalette,
  convertArea,
  convertBase,
  convertChmod,
  convertColor,
  convertLength,
  convertPxRem,
  convertSpeed,
  convertTable,
  convertTemp,
  convertWeight,
  cssGradient,
  cssRadius,
  cssShadow,
  cssVariable,
  dateDiff,
  decodeBase64,
  decodeHtml,
  decodeUrl,
  diffText,
  encodeBase64,
  encodeHtml,
  encodeUrl,
  escapeJson,
  explainCron,
  extractDomain,
  findReplace,
  formatCss,
  formatHtml,
  formatJs,
  formatJson,
  formatPhp,
  formatPython,
  formatSql,
  formatXml,
  formatYaml,
  htmlTable,
  htmlToMarkdown,
  joinLines,
  jsonKeys,
  jsonToCsv,
  jsonToYaml,
  leapYear,
  lineNumbers,
  lorem,
  makeMeta,
  makeRedirect,
  makeRobots,
  makeSitemap,
  makeSlug,
  makeUtm,
  makeUuid,
  markdownHtml,
  md5Hex,
  mimeType,
  minifyCss,
  minifyHtml,
  minifyJs,
  minifyJson,
  minifySql,
  minifyXml,
  morseConvert,
  numberWords,
  passwordStrength,
  percentOf,
  prefixLines,
  queryString,
  randomName,
  randomNumber,
  randomPassword,
  randomText,
  readJwt,
  readingTime,
  removeBlank,
  romanConvert,
  sortLines,
  splitBill,
  stripHtml,
  testRegex,
  textBinary,
  textHex,
  textStats,
  trimSpaces,
  uniqueLines,
  unixConvert,
  weekdayOf,
  wordFrequency,
  yamlToJson
};
