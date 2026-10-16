import { strFromU8, strToU8, unzipSync, zipSync } from "fflate";

const xmlEscape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const xmlUnescape = (value: string) =>
  value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&");

/** Plain text of a .docx (paragraphs, tabs, line breaks). Formatting and images are not kept. */
export function docxToText(bytes: Uint8Array): string {
  const files = unzipSync(bytes, { filter: (f) => f.name === "word/document.xml" });
  const doc = files["word/document.xml"];
  if (!doc) throw new Error("not-docx");
  const xml = strFromU8(doc);
  return xmlUnescape(
    xml
      .replace(/<w:tab\s*\/>/g, "\t")
      .replace(/<w:(br|cr)\s*\/>/g, "\n")
      .replace(/<\/w:p>/g, "\n")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const ARABIC = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

function paragraph(line: string) {
  if (!line) return "<w:p/>";
  const rtl = ARABIC.test(line);
  const pr = rtl ? "<w:pPr><w:bidi/><w:jc w:val=\"right\"/></w:pPr><w:r><w:rPr><w:rtl/></w:rPr>" : "<w:r>";
  return `<w:p>${pr}<w:t xml:space="preserve">${xmlEscape(line)}</w:t></w:r></w:p>`;
}

export function createDocxFromText(text: string): Uint8Array {
  const body = text.replace(/\r/g, "").split("\n").map(paragraph).join("");
  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body></w:document>`;
  const types = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;
  const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`;
  return zipSync({
    "[Content_Types].xml": strToU8(types),
    "_rels/.rels": strToU8(rels),
    "word/document.xml": strToU8(documentXml),
    "word/_rels/document.xml.rels": strToU8(docRels),
  });
}
