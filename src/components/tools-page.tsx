import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { TOOLS, TOOLS_PAGE, type ToolId } from "@/lib/tools";
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
} from "@/lib/tools-run";

const NEEDS_TEXT = new Set<ToolId>(["hash", "md5", "sha256", "base64", "url", "html", "json", "json-min", "xml", "sql", "js", "css", "html-min", "css-min"]);
const PAIR = new Set<ToolId>(["base64", "url", "html"]);

async function sha(text: string, name: "SHA-1" | "SHA-256") {
  const digest = await crypto.subtle.digest(name, new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function runSync(id: ToolId, text: string, count: string, low: string, high: string) {
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
  return "";
}

function undo(id: ToolId, text: string) {
  if (id === "base64") return decodeBase64(text);
  if (id === "url") return decodeUrl(text);
  return decodeHtml(text);
}

export function ToolsPage({ lang }: { lang: Lang }) {
  const [openId, setOpenId] = useState<ToolId | null>(null);
  const [text, setText] = useState("");
  const [count, setCount] = useState("3");
  const [low, setLow] = useState("1");
  const [high, setHigh] = useState("100");
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const copy = TOOLS_PAGE;

  async function make(mode: "do" | "undo") {
    if (!openId) return;
    setNote("");
    try {
      if (openId === "hash") setOutput(await sha(text, "SHA-1"));
      else if (openId === "sha256") setOutput(await sha(text, "SHA-256"));
      else setOutput(mode === "undo" ? undo(openId, text) : runSync(openId, text, count, low, high));
    } catch {
      setOutput("");
      setNote(copy.bad[lang]);
    }
  }

  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{copy.heading[lang]}</h1>
      <div className="prog-sections">
        <details className="prog-fold">
          <summary>
            <h2>{copy.group[lang]}</h2>
          </summary>
          <div className="prog-fold-body">
            <ul className="lib-list lib-list-2">
              {TOOLS.map((tool) => (
                <li key={tool.id}>
                  <button
                    type="button"
                    className={openId === tool.id ? "is-on" : undefined}
                    onClick={() => {
                      setOpenId(tool.id);
                      setOutput("");
                      setNote("");
                    }}
                  >
                    {tool.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
            {openId ? (
              <form
                className="paket-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void make("do");
                }}
              >
                {openId === "number" ? (
                  <div className="tool-row">
                    <input value={low} inputMode="numeric" aria-label="min" onChange={(event) => setLow(event.target.value)} />
                    <input value={high} inputMode="numeric" aria-label="max" onChange={(event) => setHigh(event.target.value)} />
                  </div>
                ) : null}
                {openId === "lorem" || openId === "text" || openId === "password" ? (
                  <input value={count} inputMode="numeric" aria-label="count" onChange={(event) => setCount(event.target.value)} />
                ) : null}
                {NEEDS_TEXT.has(openId) ? (
                  <textarea value={text} spellCheck={false} onChange={(event) => setText(event.target.value)} />
                ) : null}
                <div className="tool-row">
                  <button type="submit">{copy.run[lang]}</button>
                  {PAIR.has(openId) ? (
                    <button type="button" onClick={() => void make("undo")}>
                      {lang === "en" ? "Read" : lang === "tr" ? "Aç" : lang === "ar" ? "اقرأ" : lang === "ru" ? "Прочитать" : "Aç"}
                    </button>
                  ) : null}
                </div>
                {note ? <p className="paket-bad">{note}</p> : null}
                {output ? (
                  <>
                    <textarea readOnly value={output} />
                    <button
                      type="button"
                      onClick={() => {
                        void navigator.clipboard.writeText(output);
                        setNote(copy.copied[lang]);
                      }}
                    >
                      {copy.copy[lang]}
                    </button>
                  </>
                ) : null}
              </form>
            ) : null}
          </div>
        </details>
      </div>
    </main>
  );
}
