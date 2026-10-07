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
