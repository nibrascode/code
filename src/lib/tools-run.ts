import { md5 } from "@/lib/md5";

const LOREM = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
const WORDS = "səhifə kod fayl rəng düymə mətn şəkil sətir ad rəqəm qovluq sayt ekran yazı".split(" ");
const FIRST = ["Aysel", "Murad", "Leyla", "Elvin", "Nigar", "Kamran", "Sara", "Emil", "Maya", "Rauf"];
const LAST = ["Əliyev", "Məmmədova", "Həsənli", "Quliyeva", "İsmayılov", "Kərimli", "Novruzlu", "Səfərova"];

function pick<T>(list: readonly T[]) {
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return list[bytes[0] % list.length];
}

function between(min: number, max: number) {
  const low = Math.ceil(Math.min(min, max));
  const high = Math.floor(Math.max(min, max));
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return low + (bytes[0] % (high - low + 1));
}

export function lorem(paragraphs: number) {
  const count = Math.min(8, Math.max(1, paragraphs || 1));
  return Array.from({ length: count }, (_, index) => {
    const words = Array.from({ length: 28 }, (__, word) => LOREM[(index * 7 + word) % LOREM.length]);
    const line = words.join(" ");
    return line.charAt(0).toUpperCase() + line.slice(1) + ".";
  }).join("\n\n");
}

export function randomText(words: number) {
  const count = Math.min(80, Math.max(1, words || 12));
  return Array.from({ length: count }, () => pick(WORDS)).join(" ");
}

export function randomNumber(min: number, max: number) {
  return String(between(Number.isFinite(min) ? min : 1, Number.isFinite(max) ? max : 100));
}

export function randomName() {
  return `${pick(FIRST)} ${pick(LAST)}`;
}

export function randomPassword(length: number) {
  const size = Math.min(64, Math.max(6, length || 16));
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
  return Array.from({ length: size }, () => pick(alphabet.split(""))).join("");
}

export function makeUuid() {
  return crypto.randomUUID();
}

export function md5Hex(text: string) {
  return md5(text);
}

export function encodeBase64(text: string) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

export function decodeBase64(text: string) {
  const binary = atob(text.trim());
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function encodeUrl(text: string) {
  return encodeURIComponent(text);
}

export function decodeUrl(text: string) {
  return decodeURIComponent(text);
}

const AMP = "&" + "amp;";
const LT = "&" + "lt;";
const GT = "&" + "gt;";
const QUOT = "&" + "quot;";

export function encodeHtml(text: string) {
  const map: Record<string, string> = { "&": AMP, "<": LT, ">": GT, '"': QUOT, "'": "&#39;" };
  return text.replace(/[&<>"']/g, (char) => map[char] ?? char);
}

export function decodeHtml(text: string) {
  return text
    .replaceAll(LT, "<")
    .replaceAll(GT, ">")
    .replaceAll(QUOT, '"')
    .replaceAll("&#39;", "'")
    .replaceAll(AMP, "&");
}

export function formatJson(text: string) {
  return JSON.stringify(JSON.parse(text), null, 2);
}

export function minifyJson(text: string) {
  return JSON.stringify(JSON.parse(text));
}

export function formatXml(text: string) {
  const compact = text.replace(/>\s+</g, "><").trim();
  if (!compact.startsWith("<") || !compact.includes(">")) throw new Error("xml");
  let pad = 0;
  return compact
    .replace(/(>)(<)/g, "$1\n$2")
    .split("\n")
    .map((line) => {
      if (line.match(/^<\/.+>/)) pad = Math.max(0, pad - 1);
      const next = `${"  ".repeat(pad)}${line}`;
      if (line.match(/^<[^!?/][^>]*[^/]>$/)) pad += 1;
      return next;
    })
    .join("\n");
}

export function formatSql(text: string) {
  const keys = ["select", "from", "where", "and", "or", "join", "left join", "right join", "inner join", "group by", "order by", "limit", "insert into", "values", "update", "set", "delete from"];
  let next = text.replace(/\s+/g, " ").trim();
  if (!next) throw new Error("sql");
  for (const key of keys) {
    const pattern = new RegExp(`\\b${key}\\b`, "ig");
    next = next.replace(pattern, `\n${key.toUpperCase()}`);
  }
  return next.trim();
}

function walkCode(text: string, open: string, close: string) {
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
      out += `${char}\n${"  ".repeat(pad + 1)}`;
      pad += 1;
      continue;
    }
    if (char === ";") {
      out += ";\n" + "  ".repeat(pad);
      continue;
    }
    out += char;
  }
  return out
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line, index, all) => line.trim() || (all[index - 1] && all[index - 1].trim()))
    .join("\n")
    .trim();
}

export function formatJs(text: string) {
  return walkCode(text, "{", "}");
}

export function formatCss(text: string) {
  return walkCode(text, "{", "}");
}

export function minifyHtml(text: string) {
  const next = text.replace(/<!--[\s\S]*?-->/g, "").replace(/>\s+</g, "><").replace(/\s{2,}/g, " ").trim();
  if (!next.includes("<")) throw new Error("html");
  return next;
}

export function minifyCss(text: string) {
  const next = text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([{}:;,])\s*/g, "$1").trim();
  if (!next.includes("{")) throw new Error("css");
  return next;
}

const AZ: Record<string, string> = {
  ə: "e",
  ö: "o",
  ü: "u",
  ı: "i",
  ğ: "g",
  ş: "s",
  ç: "c",
  Ə: "e",
  Ö: "o",
  Ü: "u",
  I: "i",
  İ: "i",
  Ğ: "g",
  Ş: "s",
  Ç: "c",
};

function wordsOf(text: string) {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^0-9A-Za-zəöüğıışçƏÖÜĞIİŞÇ]+/)
    .filter(Boolean);
}

export function caseForms(text: string) {
  const words = wordsOf(text.trim());
  if (!words.length) throw new Error("empty");
  const lowerWords = words.map((word) => word.toLowerCase());
  const camel = lowerWords.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))).join("");
  const snake = lowerWords.join("_");
  const slug = [...text]
    .map((char) => AZ[char] ?? char)
    .join("")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return { upper: text.toUpperCase(), lower: text.toLowerCase(), camel, snake, slug };
}

export function textStats(text: string) {
  const chars = Array.from(text).length;
  const nospace = Array.from(text.replace(/\s/g, "")).length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text.length ? text.split(/\n/).length : 0;
  return { words, chars, nospace, lines };
}

export function unixConvert(text: string) {
  const raw = text.trim();
  if (/^-?\d+(\.\d+)?$/.test(raw)) {
    const value = Number(raw);
    const ms = Math.abs(value) < 1e11 ? value * 1000 : value;
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) throw new Error("time");
    return date.toISOString().replace(".000Z", " UTC").replace("T", " ").replace("Z", " UTC");
  }
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) throw new Error("time");
  return String(Math.floor(date.getTime() / 1000));
}

function parseCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
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

function csvEscape(value: string) {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

export function convertTable(text: string) {
  const raw = text.trim();
  if (!raw) throw new Error("empty");
  if (raw.startsWith("{") || raw.startsWith("[")) {
    const data = JSON.parse(raw) as unknown;
    const rows = Array.isArray(data) ? data : [data];
    if (!rows.length || rows.some((row) => !row || typeof row !== "object" || Array.isArray(row))) throw new Error("json");
    const keys = [...new Set(rows.flatMap((row) => Object.keys(row as Record<string, unknown>)))];
    const body = rows.map((row) =>
      keys
        .map((key) => {
          const value = (row as Record<string, unknown>)[key];
          if (value == null) return "";
          return csvEscape(typeof value === "object" ? JSON.stringify(value) : String(value));
        })
        .join(","),
    );
    return [keys.join(","), ...body].join("\n");
  }
  const table = parseCsv(raw);
  if (table.length < 2) throw new Error("csv");
  const [head, ...rest] = table;
  return JSON.stringify(
    rest.map((line) => Object.fromEntries(head.map((key, index) => [key, line[index] ?? ""]))),
    null,
    2,
  );
}

export function testRegex(pattern: string, text: string) {
  const wrapped = pattern.trim().match(/^\/(.+)\/([a-z]*)$/);
  const source = wrapped ? wrapped[1] : pattern;
  const flags = wrapped ? wrapped[2] : "g";
  if (!source) throw new Error("regex");
  const re = new RegExp(source, flags.includes("g") ? flags : `${flags}g`);
  return [...text.matchAll(re)].map((match) => match[0]).filter((part) => part !== "");
}

function clampColor(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function hslToRgb(h: number, s: number, l: number) {
  const hue = ((h % 360) + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = l - c / 2;
  const part =
    hue < 60 ? [c, x, 0] : hue < 120 ? [x, c, 0] : hue < 180 ? [0, c, x] : hue < 240 ? [0, x, c] : hue < 300 ? [x, 0, c] : [c, 0, x];
  return part.map((channel) => clampColor((channel + m) * 255));
}

function rgbToHsl(r: number, g: number, b: number) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = d / (1 - Math.abs(2 * l - 1));
  const h = max === rn ? ((gn - bn) / d) % 6 : max === gn ? (bn - rn) / d + 2 : (rn - gn) / d + 4;
  return [Math.round((h * 60 + 360) % 360), Math.round(s * 100), Math.round(l * 100)];
}

export function convertColor(text: string) {
  const raw = text.trim();
  let channels: number[] | null = null;
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
  return `${hexOut}\nrgb(${r}, ${g}, ${b})\nhsl(${h}, ${s}%, ${l}%)`;
}

export function diffText(leftText: string, rightText: string) {
  const left = leftText.replace(/\r\n/g, "\n").split("\n");
  const right = rightText.replace(/\r\n/g, "\n").split("\n");
  if (left.length * right.length > 40000) throw new Error("big");
  const dp = Array.from({ length: left.length + 1 }, () => new Uint16Array(right.length + 1));
  for (let i = left.length - 1; i >= 0; i -= 1) {
    for (let j = right.length - 1; j >= 0; j -= 1) {
      dp[i][j] = left[i] === right[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const out: string[] = [];
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

export function convertBase(text: string) {
  const raw = text.trim().toLowerCase().replace(/[\s_]/g, "");
  if (!raw) throw new Error("base");
  let value: bigint;
  if (raw.startsWith("0b")) value = BigInt(raw);
  else if (raw.startsWith("0x")) value = BigInt(raw);
  else if (/^[0-9]+$/.test(raw)) value = BigInt(raw);
  else if (/^[0-9a-f]+$/.test(raw) && /[a-f]/.test(raw)) value = BigInt(`0x${raw}`);
  else throw new Error("base");
  return `10: ${value.toString(10)}\n2: ${value.toString(2)}\n16: ${value.toString(16)}`;
}

function trimNumber(value: number) {
  return String(Math.round(value * 1000) / 1000);
}

export function convertPxRem(text: string, root: string) {
  const base = Number(root);
  if (!Number.isFinite(base) || base <= 0) throw new Error("px");
  const raw = text.trim().toLowerCase();
  const px = raw.match(/^(-?\d+(?:\.\d+)?)\s*px$/);
  const rem = raw.match(/^(-?\d+(?:\.\d+)?)\s*rem$/);
  const plain = raw.match(/^(-?\d+(?:\.\d+)?)$/);
  if (px) return `${px[1]}px\n${trimNumber(Number(px[1]) / base)}rem`;
  if (rem) return `${trimNumber(Number(rem[1]) * base)}px\n${rem[1]}rem`;
  if (plain) return `${plain[1]}px\n${trimNumber(Number(plain[1]) / base)}rem`;
  throw new Error("px");
}

function readBase64Url(part: string) {
  const pad = part.replace(/-/g, "+").replace(/_/g, "/");
  const padded = pad + "=".repeat((4 - (pad.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function readJwt(token: string) {
  const parts = token.trim().split(".");
  if (parts.length < 2) throw new Error("jwt");
  const header = JSON.stringify(JSON.parse(readBase64Url(parts[0])), null, 2);
  const payload = JSON.stringify(JSON.parse(readBase64Url(parts[1])), null, 2);
  return `header\n${header}\n\npayload\n${payload}`;
}

const WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function cronPart(part: string, names?: string[]) {
  if (part === "*") return "*";
  if (part.startsWith("*/")) return `*/${part.slice(2)}`;
  if (names && /^\d+$/.test(part)) {
    const at = Number(part);
    return names[at] ? `${part} (${names[at]})` : part;
  }
  return part;
}

export function explainCron(text: string) {
  const parts = text.trim().split(/\s+/);
  if (parts.length !== 5 || parts.some((part) => !/^[\d*,/-]+$/.test(part))) throw new Error("cron");
  const [minute, hour, day, month, weekday] = parts;
  return [
    `minute: ${cronPart(minute)}`,
    `hour: ${cronPart(hour)}`,
    `day: ${cronPart(day)}`,
    `month: ${cronPart(month, ["", ...MONTH])}`,
    `weekday: ${cronPart(weekday, WEEK)}`,
  ].join("\n");
}

const CHMOD_BITS = ["---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"];

export function convertChmod(text: string) {
  const raw = text.trim().toLowerCase();
  if (/^[0-7]{3,4}$/.test(raw)) {
    const oct = raw.slice(-3);
    return `${raw}\n${[...oct].map((digit) => CHMOD_BITS[Number(digit)]).join("")}`;
  }
  if (/^[rwx-]{9}$/.test(raw)) {
    const oct = raw.match(/.{3}/g)!.map((group) => CHMOD_BITS.indexOf(group)).join("");
    if (oct.includes("-1")) throw new Error("chmod");
    return `${oct}\n${raw}`;
  }
  throw new Error("chmod");
}

export function makeRobots(text: string) {
  const paths = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (line.startsWith("/") ? line : `/${line}`));
  const body = paths.length ? paths.map((path) => `Disallow: ${path}`).join("\n") : "Allow: /";
  return `User-agent: *\n${body}`;
}

function channel(hex: string, at: number) {
  const value = parseInt(hex.slice(at, at + 2), 16) / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  return 0.2126 * channel(hex, 0) + 0.7152 * channel(hex, 2) + 0.0722 * channel(hex, 4);
}

export function colorContrast(front: string, back: string) {
  const read = (value: string) => {
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
  return `#${a} / #${b}\n${shown}:1\nAA: ${ratio >= 4.5 ? "ok" : "no"}\nAAA: ${ratio >= 7 ? "ok" : "no"}`;
}

export function makeSlug(text: string) {
  const map: Record<string, string> = { ə: "e", ı: "i", ö: "o", ü: "u", ğ: "g", ş: "s", ç: "c", â: "a", î: "i", û: "u" };
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/[əıöüğşçâîû]/g, (letter) => map[letter] || letter)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!slug) throw new Error("slug");
  return slug;
}

export function percentOf(text: string) {
  const raw = text.trim().replace(/,/g, ".");
  const ratio = raw.match(/^(-?\d+(?:\.\d+)?)\s*(?:\/|of)\s*(-?\d+(?:\.\d+)?)$/i);
  if (ratio) {
    const part = Number(ratio[1]);
    const whole = Number(ratio[2]);
    if (!whole) throw new Error("percent");
    return `${part} / ${whole}\n${Math.round((part / whole) * 10000) / 100}%`;
  }
  const pct = raw.match(/^(-?\d+(?:\.\d+)?)\s*%?\s+(?:of\s+)?(-?\d+(?:\.\d+)?)$/i);
  if (!pct) throw new Error("percent");
  const rate = Number(pct[1]);
  const whole = Number(pct[2]);
  return `${rate}% of ${whole}\n${Math.round(whole * rate) / 100}`;
}

const MIME: Record<string, string> = {
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
  woff2: "font/woff2",
};

export function mimeType(text: string) {
  const ext = text.trim().toLowerCase().replace(/^\./, "").split(".").pop() || "";
  const type = MIME[ext];
  if (!type) throw new Error("mime");
  return `.${ext}\n${type}`;
}

function esc(value: string) {
  return value.split("&").join("\u0026amp;").split("<").join("\u0026lt;").split(">").join("\u0026gt;").split('"').join("\u0026quot;");
}

export function makeMeta(title: string, description: string, image: string) {
  const name = title.trim();
  const about = description.trim();
  if (!name) throw new Error("meta");
  const picture = image.trim();
  const lines = [`<title>${esc(name)}</title>`, `<meta name="description" content="${esc(about)}">`, `<meta property="og:title" content="${esc(name)}">`, `<meta property="og:description" content="${esc(about)}">`];
  if (picture) lines.push(`<meta property="og:image" content="${esc(picture)}">`);
  return lines.join("\n");
}

export function makeSitemap(text: string) {
  const urls = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => /^https?:\/\//i.test(line));
  if (!urls.length) throw new Error("sitemap");
  const body = urls.map((url) => `  <url>\n    <loc>${esc(url)}</loc>\n  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
}

export function makeUtm(url: string, source: string, campaign: string) {
  const raw = url.trim();
  if (!/^https?:\/\//i.test(raw)) throw new Error("utm");
  const link = new URL(raw);
  if (source.trim()) link.searchParams.set("utm_source", source.trim());
  if (campaign.trim()) link.searchParams.set("utm_campaign", campaign.trim());
  return link.toString();
}

export function dateDiff(start: string, end: string) {
  const a = new Date(start.trim());
  const b = new Date(end.trim());
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) throw new Error("date");
  const days = Math.round((b.getTime() - a.getTime()) / 86400000);
  return `${start.trim()} → ${end.trim()}\n${days}`;
}

export function cssShadow(text: string) {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 3) throw new Error("shadow");
  const [x, y, blur, color = "#111111"] = parts;
  if ([x, y, blur].some((part) => !/^-?\d+$/.test(part))) throw new Error("shadow");
  return `box-shadow: ${x}px ${y}px ${blur}px ${color};`;
}

export function makeRedirect(from: string, to: string) {
  const oldUrl = from.trim();
  const next = to.trim();
  if (!oldUrl || !next) throw new Error("redirect");
  return `Redirect 301 ${oldUrl} ${next}`;
}

export function cssGradient(from: string, to: string) {
  const read = (value: string) => {
    const hex = value.trim().replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
    if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("gradient");
    return `#${full.toLowerCase()}`;
  };
  return `background: linear-gradient(90deg, ${read(from)}, ${read(to)});`;
}

export function passwordStrength(text: string) {
  const raw = text.trim();
  if (!raw) throw new Error("strength");
  const notes = [];
  if (raw.length < 8) notes.push("short");
  if (!/[a-z]/.test(raw) || !/[A-Z]/.test(raw)) notes.push("case");
  if (!/\d/.test(raw)) notes.push("digit");
  if (!/[^A-Za-z0-9]/.test(raw)) notes.push("symbol");
  if (/(.)\1{2,}/.test(raw)) notes.push("repeat");
  const weak = new Set(["123456", "password", "qwerty", "111111", "sifre", "parol"]);
  if (weak.has(raw.toLowerCase())) notes.push("common");
  return notes.length ? notes.join("\n") : "ok";
}

export function htmlTable(text: string) {
  const rows = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(",").map((cell) => cell.trim()));
  if (!rows.length) throw new Error("table");
  const body = rows
    .map((row, index) => {
      const tag = index === 0 ? "th" : "td";
      return `  <tr>${row.map((cell) => `<${tag}>${esc(cell)}</${tag}>`).join("")}</tr>`;
    })
    .join("\n");
  return `<table>\n${body}\n</table>`;
}

export function cssRadius(text: string) {
  const raw = text.trim();
  if (!/^\d{1,3}$/.test(raw)) throw new Error("radius");
  return `border-radius: ${raw}px;`;
}

export function trimSpaces(text: string) {
  const lines = text.split(/\n/).map((line) => line.trim().replace(/[ \t]{2,}/g, " "));
  return lines.join("\n").trim();
}

export function lineNumbers(text: string) {
  const lines = text.replace(/\n$/, "").split("\n");
  if (!lines.length || (lines.length === 1 && !lines[0])) throw new Error("lines");
  const width = String(lines.length).length;
  return lines.map((line, index) => `${String(index + 1).padStart(width, " ")}  ${line}`).join("\n");
}

export function jsonToCsv(text: string) {
  const data = JSON.parse(text);
  const rows = Array.isArray(data) ? data : [data];
  if (!rows.length || rows.some((row) => !row || typeof row !== "object" || Array.isArray(row))) throw new Error("jsoncsv");
  const keys = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  const cell = (value: unknown) => {
    const shown = value == null ? "" : String(value);
    return /[",\n]/.test(shown) ? `"${shown.replace(/"/g, '""')}"` : shown;
  };
  return [keys.join(","), ...rows.map((row) => keys.map((key) => cell((row as Record<string, unknown>)[key])).join(","))].join("\n");
}

function mix(hex: string, toward: number, amount: number) {
  const parts = [0, 2, 4].map((at) => {
    const value = parseInt(hex.slice(at, at + 2), 16);
    return Math.round(value + (toward - value) * amount).toString(16).padStart(2, "0");
  });
  return `#${parts.join("")}`;
}

export function colorPalette(text: string) {
  const hex = text.trim().replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
  if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("palette");
  const base = full.toLowerCase();
  return [`#${base}`, mix(base, 255, 0.35), mix(base, 0, 0.35)].join("\n");
}

export function formatHtml(text: string) {
  const raw = text.trim();
  if (!raw.includes("<")) throw new Error("html");
  const tokens = raw.replace(/>\s+</g, "><").split(/(<[^>]+>)/).filter(Boolean);
  let pad = 0;
  const lines: string[] = [];
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

export function minifyJs(text: string) {
  const next = text
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}();,=+\-*/<>])\s*/g, "$1")
    .trim();
  if (!next) throw new Error("js");
  return next;
}

export function formatPython(text: string) {
  const raw = text.replace(/\t/g, "    ").replace(/\r/g, "");
  if (!raw.trim()) throw new Error("python");
  const lines = raw.split("\n").map((line) => line.trimEnd());
  return lines
    .filter((line, index, all) => line.trim() || (index > 0 && all[index - 1].trim()))
    .join("\n")
    .trim();
}

export function formatPhp(text: string) {
  if (!/<\?php|\$[A-Za-z_]/.test(text)) throw new Error("php");
  return walkCode(text, "{", "}");
}

export function minifySql(text: string) {
  const next = text.replace(/--.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
  if (!/\b(select|insert|update|delete|create)\b/i.test(next)) throw new Error("sql");
  return next;
}

export function minifyXml(text: string) {
  const next = text.replace(/<!--[\s\S]*?-->/g, "").replace(/>\s+</g, "><").trim();
  if (!next.includes("<")) throw new Error("xml");
  return next;
}

export function cssVariable(text: string) {
  const hex = text.trim().replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex;
  if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error("cssvar");
  return `--reng: #${full.toLowerCase()};`;
}

export function checkLink(text: string) {
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

export function charCount(text: string, limit = 160) {
  const count = Array.from(text).length;
  return `${count}\n${limit}\n${count <= limit ? "ok" : "over"}`;
}

export function formatYaml(text: string) {
  const lines = text.replace(/\t/g, "  ").split(/\n/).map((line) => line.trimEnd());
  if (!lines.some((line) => line.includes(":"))) throw new Error("yaml");
  return lines.join("\n").trim();
}

export function markdownHtml(text: string) {
  const raw = text.trim();
  if (!raw) throw new Error("markdown");
  const escHtml = (value: string) => value.split("&").join("\u0026amp;").split("<").join("\u0026lt;").split(">").join("\u0026gt;");
  const inline = (value: string) =>
    escHtml(value)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
  return raw
    .split(/\n{2,}/)
    .map((block) => {
      const line = block.trim();
      const head = line.match(/^(#{1,3})\s+(.+)$/);
      if (head) return `<h${head[1].length}>${inline(head[2])}</h${head[1].length}>`;
      return `<p>${inline(line).replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");
}

export function checkEmail(text: string) {
  const raw = text.trim();
  if (!raw) throw new Error("email");
  const notes = [];
  if (!raw.includes("@")) notes.push("at");
  if ((raw.split("@")[1] || "").indexOf(".") < 1) notes.push("dot");
  if (/\s/.test(raw)) notes.push("space");
  return notes.length ? notes.join("\n") : "ok";
}

const SMALL: Record<string, string[]> = {
  az: ["sıfır", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz", "on", "on bir", "on iki", "on üç", "on dörd", "on beş", "on altı", "on yeddi", "on səkkiz", "on doqquz"],
  en: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
  tr: ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on", "on bir", "on iki", "on üç", "on dört", "on beş", "on altı", "on yedi", "on sekiz", "on dokuz"],
  ar: ["صفر", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"],
  ru: ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"],
};
const TENS: Record<string, string[]> = {
  az: ["", "", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"],
  en: ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
  tr: ["", "", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"],
  ar: ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"],
  ru: ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"],
};

function underHundred(value: number, lang: string) {
  if (value < 20) return SMALL[lang][value];
  const ten = TENS[lang][Math.floor(value / 10)];
  const one = value % 10;
  if (!one) return ten;
  return lang === "ar" ? `${SMALL[lang][one]} و${ten}` : `${ten} ${SMALL[lang][one]}`;
}

export function numberWords(text: string, lang: string): string {
  const raw = text.trim();
  if (!/^\d{1,6}$/.test(raw)) throw new Error("words");
  const value = Number(raw);
  const code = SMALL[lang] ? lang : "az";
  if (value < 100) return underHundred(value, code);
  if (value < 1000) {
    const hundred = Math.floor(value / 100);
    const rest = value % 100;
    const word = code === "en" ? "hundred" : code === "tr" ? "yüz" : code === "ar" ? "مئة" : code === "ru" ? "сто" : "yüz";
    const head = hundred === 1 && code !== "en" ? word : `${underHundred(hundred, code)} ${word}`;
    return rest ? `${head} ${underHundred(rest, code)}` : head;
  }
  const thousand = Math.floor(value / 1000);
  const rest = value % 1000;
  const word = code === "en" ? "thousand" : code === "ar" ? "ألف" : code === "ru" ? "тысяча" : "min";
  const head = `${underHundred(thousand, code)} ${word}`;
  return rest ? `${head} ${numberWords(String(rest), code)}` : head;
}

export function checkIp(text: string) {
  const raw = text.trim();
  const parts = raw.split(".");
  if (parts.length !== 4 || parts.some((part) => !/^\d{1,3}$/.test(part) || Number(part) > 255)) throw new Error("ip");
  return `${raw}\nok`;
}

export function sortLines(text: string) {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error("sort");
  return [...lines].sort((a, b) => a.localeCompare(b)).join("\n");
}

export function uniqueLines(text: string) {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error("unique");
  return [...new Set(lines)].join("\n");
}

export function jsonKeys(text: string) {
  const data = JSON.parse(text) as unknown;
  const row = Array.isArray(data) ? data[0] : data;
  if (!row || typeof row !== "object" || Array.isArray(row)) throw new Error("keys");
  return Object.keys(row).join("\n");
}

export function stripHtml(text: string) {
  if (!text.includes("<")) throw new Error("strip");
  return text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function yamlValue(value: unknown, pad = 0): string {
  const space = "  ".repeat(pad);
  if (value == null) return "null";
  if (typeof value === "string") return /[:#\n]/.test(value) ? JSON.stringify(value) : value;
  if (typeof value !== "object") return String(value);
  if (Array.isArray(value)) return value.map((item) => `\n${space}- ${yamlValue(item, pad + 1).trimStart()}`).join("");
  return Object.entries(value)
    .map(([key, item]) => {
      const shown = yamlValue(item, pad + 1);
      return shown.startsWith("\n") ? `\n${space}${key}:${shown}` : `\n${space}${key}: ${shown}`;
    })
    .join("");
}

export function jsonToYaml(text: string) {
  const data = JSON.parse(text) as unknown;
  return yamlValue(data).replace(/^\n/, "");
}

function parseYamlValue(raw: string): unknown {
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (raw === "null") return null;
  if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
  if (raw.startsWith('"') || raw.startsWith("'")) return raw.slice(1, -1);
  return raw;
}

export function yamlToJson(text: string) {
  const lines = text.replace(/\t/g, "  ").split(/\n/).filter((line) => line.trim() && !line.trim().startsWith("#"));
  if (!lines.length) throw new Error("yaml");
  const root: Record<string, unknown> = {};
  const stack: { pad: number; target: Record<string, unknown> | unknown[] }[] = [{ pad: -1, target: root }];
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

const ROMAN: [number, string][] = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];

export function romanConvert(text: string) {
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

const MORSE: Record<string, string> = {
  a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---",
  k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-",
  u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};
const FROM_MORSE = Object.fromEntries(Object.entries(MORSE).map(([letter, code]) => [code, letter]));

export function morseConvert(text: string, back = false) {
  const raw = text.trim();
  if (!raw) throw new Error("morse");
  if (back || /^[.\- /]+$/.test(raw)) {
    return raw.split(" / ").map((word) => word.split(" ").map((code) => FROM_MORSE[code] ?? "").join("")).join(" ");
  }
  return raw.toLowerCase().split(/\s+/).map((word) => [...word].map((letter) => MORSE[letter] ?? "").filter(Boolean).join(" ")).join(" / ");
}

export function readingTime(text: string, lang: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  if (!words) throw new Error("read");
  const minutes = Math.max(1, Math.round(words / 200));
  const label = lang === "en" ? "min" : lang === "tr" ? "dk" : lang === "ar" ? "د" : lang === "ru" ? "мин" : "dəq";
  return `${words}\n${minutes} ${label}`;
}

export function textBinary(text: string, back = false) {
  const raw = text.trim();
  if (!raw) throw new Error("binary");
  if (back || /^[01 ]+$/.test(raw)) {
    const bytes = raw.split(/\s+/).map((part) => parseInt(part, 2));
    if (bytes.some((byte) => Number.isNaN(byte) || byte > 255)) throw new Error("binary");
    return new TextDecoder().decode(new Uint8Array(bytes));
  }
  return [...new TextEncoder().encode(raw)].map((byte) => byte.toString(2).padStart(8, "0")).join(" ");
}

export function textHex(text: string, back = false) {
  const raw = text.trim();
  if (!raw) throw new Error("hex");
  if (back || /^(?:[0-9a-f]{2}\s*)+$/i.test(raw)) {
    const hex = raw.replace(/\s+/g, "");
    if (hex.length % 2) throw new Error("hex");
    const bytes = hex.match(/../g)!.map((part) => parseInt(part, 16));
    return new TextDecoder().decode(new Uint8Array(bytes));
  }
  return [...new TextEncoder().encode(raw)].map((byte) => byte.toString(16).padStart(2, "0")).join(" ");
}

export function convertTemp(text: string) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*([cf])?$/);
  if (!match) throw new Error("temp");
  const value = Number(match[1]);
  const fromC = match[2] !== "f";
  const next = fromC ? (value * 9) / 5 + 32 : ((value - 32) * 5) / 9;
  return fromC ? `${next.toFixed(1)} F` : `${next.toFixed(1)} C`;
}

export function extractDomain(text: string) {
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

export function convertLength(text: string) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(cm|in|inch)?$/);
  if (!match) throw new Error("length");
  const value = Number(match[1]);
  const fromCm = match[2] !== "in" && match[2] !== "inch";
  const next = fromCm ? value / 2.54 : value * 2.54;
  return fromCm ? `${next.toFixed(2)} in` : `${next.toFixed(2)} cm`;
}

export function convertWeight(text: string) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(kg|lb|lbs)?$/);
  if (!match) throw new Error("weight");
  const value = Number(match[1]);
  const fromKg = match[2] !== "lb" && match[2] !== "lbs";
  const next = fromKg ? value * 2.20462 : value / 2.20462;
  return fromKg ? `${next.toFixed(2)} lb` : `${next.toFixed(2)} kg`;
}

export function joinLines(text: string) {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error("join");
  return lines.join(", ");
}

export function escapeJson(text: string, back = false) {
  if (!text) throw new Error("escape");
  if (back) return JSON.parse(`"${text.replace(/^"|"$/g, "")}"`);
  return JSON.stringify(text).slice(1, -1);
}

export function removeBlank(text: string) {
  const lines = text.split(/\n/).filter((line) => line.trim());
  if (!lines.length) throw new Error("blank");
  return lines.join("\n");
}

export function convertSpeed(text: string) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(km|mph|mi)?$/);
  if (!match) throw new Error("speed");
  const value = Number(match[1]);
  const fromKm = match[2] !== "mph" && match[2] !== "mi";
  const next = fromKm ? value * 0.621371 : value / 0.621371;
  return fromKm ? `${next.toFixed(2)} mph` : `${next.toFixed(2)} km/h`;
}

export function convertArea(text: string) {
  const raw = text.trim().toLowerCase();
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*(m2|ft2|m|ft)?$/);
  if (!match) throw new Error("area");
  const value = Number(match[1]);
  const fromM = match[2] !== "ft2" && match[2] !== "ft";
  const next = fromM ? value * 10.7639 : value / 10.7639;
  return fromM ? `${next.toFixed(2)} ft2` : `${next.toFixed(2)} m2`;
}

export function calcVat(text: string, rate = 18) {
  const value = Number(text.trim().replace(",", "."));
  if (!Number.isFinite(value)) throw new Error("vat");
  const tax = (value * rate) / 100;
  return `${tax.toFixed(2)}\n${(value + tax).toFixed(2)}`;
}

export function weekdayOf(text: string, lang: string) {
  const date = new Date(text.trim());
  if (Number.isNaN(date.getTime())) throw new Error("weekday");
  const names: Record<string, string[]> = {
    az: ["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    tr: ["pazar", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi"],
    ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    ru: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  };
  return (names[lang] ?? names.az)[date.getUTCDay()];
}

export function prefixLines(text: string, extra: string) {
  const lines = text.split(/\n/);
  if (!lines.some((line) => line.trim()) || !extra.trim()) throw new Error("prefix");
  return lines.map((line) => (line.trim() ? `${extra}${line}` : line)).join("\n");
}

export function findReplace(text: string, extra: string) {
  const cut = extra.indexOf("=>");
  if (cut < 1) throw new Error("replace");
  const from = extra.slice(0, cut);
  const to = extra.slice(cut + 2);
  if (!from) throw new Error("replace");
  return text.split(from).join(to);
}

export function wordFrequency(text: string) {
  const words = text.toLowerCase().match(/[0-9A-Za-zəöüğıışçƏÖÜĞIİŞÇ]+/g) ?? [];
  if (!words.length) throw new Error("freq");
  const count = new Map<string, number>();
  for (const word of words) count.set(word, (count.get(word) ?? 0) + 1);
  return [...count.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([word, times]) => `${word} ${times}`).join("\n");
}

export function htmlToMarkdown(text: string) {
  if (!text.includes("<")) throw new Error("htmlmd");
  return text
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n")
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function calcDiscount(text: string, extra: string) {
  const value = Number(text.trim());
  const rate = Number(extra.trim());
  if (!Number.isFinite(value) || !Number.isFinite(rate)) throw new Error("discount");
  return (value - (value * rate) / 100).toFixed(2);
}

export function calcTip(text: string, extra: string) {
  const value = Number(text.trim());
  const rate = Number(extra.trim() || "10");
  if (!Number.isFinite(value)) throw new Error("tip");
  return ((value * rate) / 100).toFixed(2);
}

export function splitBill(text: string, extra: string) {
  const value = Number(text.trim());
  const people = Number(extra.trim() || "2");
  if (!Number.isFinite(value) || people < 1) throw new Error("split");
  return (value / people).toFixed(2);
}

export function leapYear(text: string) {
  const year = Number(text.trim());
  if (!Number.isInteger(year) || year < 1) throw new Error("leap");
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? "yes" : "no";
}

export function queryString(text: string) {
  const raw = text.trim();
  const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://nibrascode.com/${raw}`);
  if (!url.search) throw new Error("query");
  return [...url.searchParams.entries()].map(([key, value]) => `${key}=${value}`).join("\n");
}
