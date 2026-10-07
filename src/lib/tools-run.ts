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
