import { useState } from "react";
import {
  ArrowLeftRight,
  Binary,
  Braces,
  CaseSensitive,
  Clock,
  Code,
  Database,
  Dices,
  Diff,
  Fingerprint,
  FileCode,
  Hash,
  KeyRound,
  Link2,
  LockKeyhole,
  Minimize2,
  Palette,
  Pipette,
  Regex,
  Ruler,
  Scan,
  Sparkles,
  Table,
  TextQuote,
  Type,
  UserRound,
  WholeWord,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { TOOLS, TOOLS_PAGE, TOOL_GROUPS, relatedTools, toolPath, toolsPath, type ToolId } from "@/lib/tools";
import { TOOL_LEAD } from "@/lib/tools-seo";
import {
  decodeBase64,
  decodeHtml,
  decodeUrl,
  encodeBase64,
  encodeHtml,
  encodeUrl,
  formatCss,
  formatJs,
  formatJson,
  formatSql,
  formatXml,
  lorem,
  makeUuid,
  md5Hex,
  minifyCss,
  minifyHtml,
  minifyJson,
  randomName,
  randomNumber,
  randomPassword,
  randomText,
  caseForms,
  convertColor,
  convertTable,
  diffText,
  readJwt,
  testRegex,
  textStats,
  unixConvert,
  convertBase,
  convertPxRem,
} from "@/lib/tools-run";

const NEEDS_TEXT = new Set<ToolId>([
  "hash",
  "md5",
  "sha256",
  "base64",
  "url",
  "html",
  "json",
  "json-min",
  "xml",
  "sql",
  "js",
  "css",
  "html-min",
  "css-min",
  "unix",
  "case",
  "count",
  "csv",
  "regex",
  "color",
  "diff",
  "base",
  "pxrem",
  "jwt",
]);
const PAIR = new Set<ToolId>(["base64", "url", "html"]);

const GROUP_ICONS: Record<string, typeof Braces> = {
  gen: Sparkles,
  code: Binary,
  crypt: LockKeyhole,
  format: Braces,
  text: Type,
  turn: ArrowLeftRight,
};

const ICONS: Record<ToolId, typeof Braces> = {
  json: Braces,
  base64: Binary,
  uuid: Fingerprint,
  password: KeyRound,
  url: Link2,
  md5: Hash,
  sha256: LockKeyhole,
  lorem: TextQuote,
  "json-min": Minimize2,
  html: Code,
  hash: Hash,
  css: Palette,
  js: FileCode,
  "html-min": Minimize2,
  "css-min": Minimize2,
  number: Dices,
  xml: Code,
  sql: Database,
  text: Type,
  name: UserRound,
  case: CaseSensitive,
  count: WholeWord,
  diff: Diff,
  regex: Regex,
  unix: Clock,
  color: Pipette,
  csv: Table,
  base: Binary,
  pxrem: Ruler,
  jwt: Scan,
};

async function sha(text: string, name: "SHA-1" | "SHA-256") {
  const digest = await crypto.subtle.digest(name, new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function runSync(id: ToolId, text: string, count: string, low: string, high: string, extra: string, lang: Lang) {
  if (id === "lorem") return lorem(Number(count));
  if (id === "text") return randomText(Number(count));
  if (id === "number") return randomNumber(Number(low), Number(high));
  if (id === "name") return randomName();
  if (id === "password") return randomPassword(Number(count));
  if (id === "uuid") return makeUuid();
  if (id === "md5") return md5Hex(text);
  if (id === "base64") return encodeBase64(text);
  if (id === "url") return encodeUrl(text);
  if (id === "html") return encodeHtml(text);
  if (id === "json") return formatJson(text);
  if (id === "json-min") return minifyJson(text);
  if (id === "xml") return formatXml(text);
  if (id === "sql") return formatSql(text);
  if (id === "js") return formatJs(text);
  if (id === "css") return formatCss(text);
  if (id === "html-min") return minifyHtml(text);
  if (id === "css-min") return minifyCss(text);
  if (id === "unix") return unixConvert(text);
  if (id === "case") {
    const forms = caseForms(text);
    return [`${TOOLS_PAGE.upper[lang]}: ${forms.upper}`, `${TOOLS_PAGE.lower[lang]}: ${forms.lower}`, `camelCase: ${forms.camel}`, `snake_case: ${forms.snake}`, `slug: ${forms.slug}`].join("\n");
  }
  if (id === "count") {
    const stats = textStats(text);
    return [`${TOOLS_PAGE.words[lang]}: ${stats.words}`, `${TOOLS_PAGE.chars[lang]}: ${stats.chars}`, `${TOOLS_PAGE.nospace[lang]}: ${stats.nospace}`, `${TOOLS_PAGE.lines[lang]}: ${stats.lines}`].join("\n");
  }
  if (id === "csv") return convertTable(text);
  if (id === "color") return convertColor(text);
  if (id === "regex") {
    const found = testRegex(extra, text);
    return found.length ? found.join("\n") : TOOLS_PAGE.none[lang];
  }
  if (id === "diff") return diffText(text, extra);
  if (id === "base") return convertBase(text);
  if (id === "pxrem") return convertPxRem(text, count);
  if (id === "jwt") return readJwt(text);
  return "";
}

function fileKind(id: ToolId, body: string) {
  if (id === "xml") return "xml";
  const raw = body.trim();
  if (id === "csv" && (raw.startsWith("{") || raw.startsWith("["))) return "json";
  if (id === "csv") return "csv";
  return "txt";
}

function saveFile(id: ToolId, body: string) {
  const kind = fileKind(id, body);
  const blob = new Blob([body], {
    type: kind === "xml" ? "application/xml;charset=utf-8" : kind === "json" ? "application/json;charset=utf-8" : kind === "csv" ? "text/csv;charset=utf-8" : "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `nibras-${id}.${kind}`;
  link.click();
  URL.revokeObjectURL(url);
}

function undo(id: ToolId, text: string) {
  if (id === "base64") return decodeBase64(text);
  if (id === "url") return decodeUrl(text);
  return decodeHtml(text);
}

export function ToolsPage({ lang, focus }: { lang: Lang; focus?: ToolId }) {
  const current = focus ?? null;
  const [text, setText] = useState("");
  const [extra, setExtra] = useState("");
  const [count, setCount] = useState(focus === "pxrem" ? "16" : "3");
  const [low, setLow] = useState("1");
  const [high, setHigh] = useState("100");
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const copy = TOOLS_PAGE;

  async function make(mode: "do" | "undo") {
    if (!current) return;
    setNote("");
    try {
      if (current === "hash") setOutput(await sha(text, "SHA-1"));
      else if (current === "sha256") setOutput(await sha(text, "SHA-256"));
      else {
        const next = mode === "undo" ? undo(current, text) : runSync(current, text, count, low, high, extra, lang);
        setOutput(current === "jwt" && mode === "do" ? `${next}\n\n${copy.jwtNote[lang]}` : next);
      }
    } catch {
      setOutput("");
      setNote(copy.bad[lang]);
    }
  }

  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        {focus ? (
          <a href={toolsPath(lang)}>{copy.heading[lang]}</a>
        ) : (
          <>
            <i />
            Nibras Code
          </>
        )}
      </p>
      <h1>{focus ? TOOLS.find((item) => item.id === focus)!.label[lang] : copy.heading[lang]}</h1>
      {(focus ? TOOL_LEAD[focus][lang] : copy.description[lang]).split("\n\n").map((part) => (
        <p key={part}>{part}</p>
      ))}
      {focus ? null : (
      <div className="prog-sections">
        {TOOL_GROUPS.map((group) => {
          const tools = group.ids.map((id) => TOOLS.find((tool) => tool.id === id)!);
          const GroupIcon = GROUP_ICONS[group.id];
          return (
            <details key={group.id} className="prog-fold tool-fold">
              <summary>
                <h2>
                  <GroupIcon aria-hidden="true" />
                  {group.title[lang]}
                </h2>
              </summary>
              <div className="prog-fold-body">
                <ul className="lib-list">
                  {tools.map((tool) => {
                    const Icon = ICONS[tool.id];
                    return (
                      <li key={tool.id}>
                        <a href={toolPath(lang, tool.id)}>
                          <span className="tool-name">
                            <Icon aria-hidden="true" />
                            {tool.label[lang]}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
      )}
      {current ? (
              <form
                className="paket-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void make("do");
                }}
              >
                {current === "number" ? (
                  <div className="tool-row">
                    <input value={low} inputMode="numeric" aria-label="min" onChange={(event) => setLow(event.target.value)} />
                    <input value={high} inputMode="numeric" aria-label="max" onChange={(event) => setHigh(event.target.value)} />
                  </div>
                ) : null}
                {current === "lorem" || current === "text" || current === "password" || current === "pxrem" ? (
                  <input
                    value={count}
                    inputMode="decimal"
                    aria-label={current === "pxrem" ? copy.root[lang] : "count"}
                    onChange={(event) => setCount(event.target.value)}
                  />
                ) : null}
                {NEEDS_TEXT.has(current) ? (
                  <>
                    {current === "regex" ? (
                      <textarea
                        value={extra}
                        spellCheck={false}
                        aria-label={copy.pattern[lang]}
                        placeholder={copy.pattern[lang]}
                        onChange={(event) => setExtra(event.target.value)}
                      />
                    ) : null}
                    <label className="tool-file">
                      {copy.load[lang]}
                      <input
                        type="file"
                        accept={
                          current === "xml"
                            ? ".xml,.txt,text/plain,application/xml,text/xml"
                            : current === "csv"
                              ? ".csv,.json,.txt,text/plain,text/csv,application/json"
                              : ".txt,text/plain"
                        }
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (!file) return;
                          void file.text().then((value) => setText(value));
                        }}
                      />
                    </label>
                    <textarea value={text} spellCheck={false} onChange={(event) => setText(event.target.value)} />
                    {current === "diff" ? (
                      <textarea
                        value={extra}
                        spellCheck={false}
                        aria-label={copy.second[lang]}
                        placeholder={copy.second[lang]}
                        onChange={(event) => setExtra(event.target.value)}
                      />
                    ) : null}
                  </>
                ) : null}
                <div className="tool-row">
                  <button type="submit">{copy.run[lang]}</button>
                  {PAIR.has(current) ? (
                    <button type="button" onClick={() => void make("undo")}>
                      {lang === "en" ? "Read" : lang === "tr" ? "Aç" : lang === "ar" ? "اقرأ" : lang === "ru" ? "Прочитать" : "Aç"}
                    </button>
                  ) : null}
                </div>
                {note ? <p className="paket-bad">{note}</p> : null}
                {output ? (
                  <>
                    <textarea readOnly value={output} />
                    <div className="tool-row">
                      <button
                        type="button"
                        onClick={() => {
                          void navigator.clipboard.writeText(output);
                          setNote(copy.copied[lang]);
                        }}
                      >
                        {copy.copy[lang]}
                      </button>
                      <button type="button" onClick={() => saveFile(current, output)}>
                        {copy.save[lang]}
                      </button>
                    </div>
                  </>
                ) : null}
              </form>
      ) : null}
      {focus ? (
        <div className="prog-fold-body">
          <h2>{copy.related[lang]}</h2>
          <ul className="lib-list">
            {relatedTools(focus).map((id) => {
              const tool = TOOLS.find((item) => item.id === id)!;
              const Icon = ICONS[id];
              return (
                <li key={id}>
                  <a href={toolPath(lang, id)}>
                    <span className="tool-name">
                      <Icon aria-hidden="true" />
                      {tool.label[lang]}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </main>
  );
}
