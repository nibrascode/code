/** CodeMirror 6 editor with Nibras' dark theme. One view; each file keeps its own state (undo history, cursor). */
import { useEffect, useRef } from "react";
import { EditorState, type Extension } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection, dropCursor, rectangularSelection, highlightSpecialChars } from "@codemirror/view";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { bracketMatching, foldGutter, foldKeymap, indentOnInput, syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { closeBrackets, closeBracketsKeymap, autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search";
import { tags as t } from "@lezer/highlight";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";

export function langOf(name: string): string {
  const ext = name.toLowerCase().split(".").pop() ?? "";
  return ({ html: "HTML", htm: "HTML", css: "CSS", js: "JavaScript", mjs: "JavaScript", jsx: "JSX", ts: "TypeScript", tsx: "TSX", json: "JSON", md: "Markdown", svg: "SVG", txt: "Text" } as Record<string, string>)[ext] ?? "Text";
}

function language(name: string): Extension {
  const ext = name.toLowerCase().split(".").pop() ?? "";
  if (ext === "html" || ext === "htm" || ext === "svg") return html();
  if (ext === "css") return css();
  if (ext === "js" || ext === "mjs") return javascript();
  if (ext === "jsx") return javascript({ jsx: true });
  if (ext === "ts") return javascript({ typescript: true });
  if (ext === "tsx") return javascript({ jsx: true, typescript: true });
  if (ext === "json") return json();
  if (ext === "md") return markdown();
  return [];
}

const palette = HighlightStyle.define([
  { tag: [t.keyword, t.controlKeyword, t.moduleKeyword, t.operatorKeyword], color: "#c792ff" },
  { tag: [t.definitionKeyword, t.modifier], color: "#c792ff" },
  { tag: [t.string, t.special(t.string), t.regexp], color: "#a5e075" },
  { tag: [t.number, t.bool, t.null, t.atom], color: "#ffb86b" },
  { tag: [t.comment, t.lineComment, t.blockComment], color: "#5d6b8a", fontStyle: "italic" },
  { tag: [t.function(t.variableName), t.function(t.propertyName)], color: "#6fb6ff" },
  { tag: [t.definition(t.variableName), t.variableName], color: "#e6ebff" },
  { tag: [t.propertyName, t.attributeName], color: "#7fd8ff" },
  { tag: [t.typeName, t.className, t.namespace], color: "#ffd479" },
  { tag: [t.tagName, t.angleBracket], color: "#ff7a9a" },
  { tag: [t.attributeValue], color: "#a5e075" },
  { tag: [t.operator, t.punctuation, t.separator, t.bracket], color: "#9aa7c7" },
  { tag: [t.heading], color: "#6fb6ff", fontWeight: "700" },
  { tag: [t.link, t.url], color: "#7fd8ff", textDecoration: "underline" },
  { tag: [t.unit, t.color], color: "#ffb86b" },
  { tag: t.invalid, color: "#ff5c7a" },
]);

const theme = EditorView.theme(
  {
    "&": { height: "100%", backgroundColor: "transparent", color: "#e6ebff", fontSize: "var(--nb-code-size, 13px)" },
    ".cm-scroller": { fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", lineHeight: "1.65" },
    ".cm-content": { caretColor: "#7aa2ff", padding: "10px 0" },
    ".cm-cursor, .cm-dropCursor": { borderLeftColor: "#7aa2ff", borderLeftWidth: "2px" },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection": { backgroundColor: "#2f6bff44 !important" },
    ".cm-gutters": { backgroundColor: "transparent", color: "#3f4a66", border: "none", paddingInlineStart: "6px" },
    ".cm-lineNumbers .cm-gutterElement": { padding: "0 12px 0 6px", minWidth: "34px" },
    ".cm-activeLine": { backgroundColor: "#2f6bff14" },
    ".cm-activeLineGutter": { backgroundColor: "transparent", color: "#9fb4ff" },
    ".cm-matchingBracket": { backgroundColor: "#2f6bff33", outline: "1px solid #2f6bff88" },
    ".cm-selectionMatch": { backgroundColor: "#ffffff14" },
    ".cm-foldGutter .cm-gutterElement": { color: "#46516e" },
    ".cm-tooltip": { backgroundColor: "#121a2e", border: "1px solid #ffffff1f", borderRadius: "10px", color: "#e6ebff" },
    ".cm-tooltip-autocomplete ul li[aria-selected]": { backgroundColor: "#2f6bff", color: "#fff" },
    ".cm-panels": { backgroundColor: "#0f1526", color: "#e6ebff", borderTop: "1px solid #ffffff14" },
    ".cm-panel input, .cm-panel button": { color: "#e6ebff", background: "#ffffff10", border: "1px solid #ffffff22", borderRadius: "6px" },
  },
  { dark: true },
);

function makeState(doc: string, name: string, wrap: boolean, onChange: (v: string) => void, onCursor: (l: number, c: number) => void, onRun: () => void) {
  return EditorState.create({
    doc,
    extensions: [
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([{ key: "Mod-Enter", run: () => (onRun(), true) }, ...closeBracketsKeymap, ...defaultKeymap, ...searchKeymap, ...historyKeymap, ...foldKeymap, ...completionKeymap, indentWithTab]),
      language(name),
      syntaxHighlighting(palette),
      theme,
      wrap ? EditorView.lineWrapping : [],
      EditorView.contentAttributes.of({ "aria-label": name, spellcheck: "false", autocapitalize: "off", autocorrect: "off" }),
      EditorView.updateListener.of((u) => {
        if (u.docChanged) onChange(u.state.doc.toString());
        if (u.docChanged || u.selectionSet) {
          const h = u.state.selection.main.head;
          const line = u.state.doc.lineAt(h);
          onCursor(line.number, h - line.from + 1);
        }
      }),
    ],
  });
}

export type EditorApi = { goto: (line: number) => void; focus: () => void };

export function CodeEditor({ name, value, wrap, onChange, onCursor, onRun, apiRef }: { name: string; value: string; wrap: boolean; onChange: (v: string) => void; onCursor: (l: number, c: number) => void; onRun: () => void; apiRef?: React.MutableRefObject<EditorApi | null> }) {
  const host = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const states = useRef(new Map<string, EditorState>());
  const cb = useRef({ onChange, onCursor, onRun });
  cb.current = { onChange, onCursor, onRun };
  const fresh = (doc: string) => makeState(doc, name, wrap, (v) => cb.current.onChange(v), (l, c) => cb.current.onCursor(l, c), () => cb.current.onRun());

  useEffect(() => {
    view.current = new EditorView({ parent: host.current!, state: fresh(value) });
    return () => view.current?.destroy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Switch file (or wrap setting): keep the old file's state for undo, restore or create the new one.
  const shown = useRef(`${name}|${wrap}`);
  useEffect(() => {
    const v = view.current;
    if (!v) return;
    const key = `${name}|${wrap}`;
    if (shown.current === key) return;
    states.current.set(shown.current, v.state);
    shown.current = key;
    const cached = states.current.get(key);
    v.setState(cached && cached.doc.toString() === value ? cached : fresh(value));
  }, [name, wrap]); // eslint-disable-line react-hooks/exhaustive-deps

  // Outside edits (rename, template insert) replace the document.
  useEffect(() => {
    const v = view.current;
    if (v && v.state.doc.toString() !== value) v.dispatch({ changes: { from: 0, to: v.state.doc.length, insert: value } });
  }, [value]);

  useEffect(() => {
    if (!apiRef) return;
    apiRef.current = {
      goto: (line) => {
        const v = view.current;
        if (!v) return;
        const l = v.state.doc.line(Math.max(1, Math.min(line, v.state.doc.lines)));
        v.dispatch({ selection: { anchor: l.from }, effects: EditorView.scrollIntoView(l.from, { y: "center" }) });
        v.focus();
      },
      focus: () => view.current?.focus(),
    };
  }, [apiRef]);

  return <div ref={host} className="h-full min-h-0 overflow-hidden" dir="ltr" data-testid="ws-code" />;
}
