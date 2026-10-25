/** Build a minimal valid .docx (WordprocessingML) from plain text. */
export async function textToDocx(text: string, title?: string): Promise<Blob> {
  const { zipSync, strToU8 } = await import("fflate");
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const rtl = (s: string) => /[\u0590-\u08FF]/.test(s);
  const para = (s: string, bold = false) =>
    `<w:p>${rtl(s) ? "<w:pPr><w:bidi/></w:pPr>" : ""}<w:r><w:rPr>${bold ? "<w:b/><w:sz w:val=\"32\"/>" : ""}${rtl(s) ? "<w:rtl/>" : ""}</w:rPr><w:t xml:space="preserve">${esc(s)}</w:t></w:r></w:p>`;
  const body = (title ? para(title, true) : "") + text.split(/\r?\n/).map((l) => para(l)).join("");
  const files = {
    "[Content_Types].xml": strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`),
    "_rels/.rels": strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`),
    "word/document.xml": strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="0" w:footer="0" w:gutter="0"/></w:sectPr></w:body></w:document>`),
  };
  return new Blob([zipSync(files) as BlobPart], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
}

export async function filesToZip(files: { name: string; content: string }[]): Promise<Blob> {
  const { zipSync, strToU8 } = await import("fflate");
  const map: Record<string, Uint8Array> = {};
  for (const f of files) map[f.name] = strToU8(f.content);
  return new Blob([zipSync(map) as BlobPart], { type: "application/zip" });
}

/** One HTML document for the sandboxed preview: CSS and JS files inlined, console forwarded. */
export function buildPreview(files: { name: string; content: string }[]): string {
  const html = files.find((f) => f.name.toLowerCase() === "index.html") ?? files.find((f) => /\.html?$/i.test(f.name));
  const css = files.filter((f) => /\.css$/i.test(f.name)).map((f) => f.content).join("\n");
  const js = files.filter((f) => /\.(m?js)$/i.test(f.name)).map((f) => f.content).join("\n;\n");
  const bridge = `<script>(function(){var s=function(t,a){try{parent.postMessage({__nw:1,t:t,m:Array.prototype.map.call(a,function(x){try{return typeof x==='object'?JSON.stringify(x):String(x)}catch(e){return String(x)}}).join(' ')},'*')}catch(e){}};['log','warn','error','info'].forEach(function(k){var o=console[k];console[k]=function(){s(k,arguments);o.apply(console,arguments)}});addEventListener('error',function(e){s('error',[e.message+(e.lineno?' (line '+e.lineno+')':'')])});})();<\/script>`;
  let doc = html?.content ?? "<!doctype html><html><head></head><body></body></html>";
  // Linked local files are inlined, so drop their tags.
  doc = doc.replace(/<link[^>]+href=["'](?!https?:)[^"']+\.css["'][^>]*>/gi, "").replace(/<script[^>]+src=["'](?!https?:)[^"']+\.m?js["'][^>]*>\s*<\/script>/gi, "");
  const head = `${bridge}<style>${css}</style>`;
  doc = /<head[^>]*>/i.test(doc) ? doc.replace(/<head[^>]*>/i, (m) => m + head) : head + doc;
  const tail = `<script>${js.replace(/<\/script/gi, "<\\/script")}<\/script>`;
  doc = /<\/body>/i.test(doc) ? doc.replace(/<\/body>(?![\s\S]*<\/body>)/i, tail + "</body>") : doc + tail;
  return doc;
}
