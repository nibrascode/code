/** File Check: real type by magic bytes, hashing with progress, comparing. Runs only in the browser. */
export type Detected = { kind: string; label: string; mime: string; exts: string[] };
const D = (kind: string, label: string, mime: string, exts: string[]): Detected => ({ kind, label, mime, exts });
const T = {
  png: D("png", "PNG image", "image/png", ["png"]), jpg: D("jpg", "JPEG image", "image/jpeg", ["jpg", "jpeg", "jfif", "jpe"]), gif: D("gif", "GIF image", "image/gif", ["gif"]),
  webp: D("webp", "WebP image", "image/webp", ["webp"]), bmp: D("bmp", "BMP image", "image/bmp", ["bmp", "dib"]), ico: D("ico", "Icon", "image/x-icon", ["ico", "cur"]),
  tiff: D("tiff", "TIFF image", "image/tiff", ["tif", "tiff", "dng", "nef", "cr2"]), heic: D("heic", "HEIC/HEIF image", "image/heic", ["heic", "heif"]), avif: D("avif", "AVIF image", "image/avif", ["avif"]),
  psd: D("psd", "Photoshop document", "image/vnd.adobe.photoshop", ["psd"]), svg: D("svg", "SVG image", "image/svg+xml", ["svg"]),
  pdf: D("pdf", "PDF document", "application/pdf", ["pdf", "ai"]), zip: D("zip", "ZIP archive", "application/zip", ["zip"]),
  docx: D("docx", "Word document (DOCX)", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ["docx", "docm", "dotx"]),
  xlsx: D("xlsx", "Excel workbook (XLSX)", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ["xlsx", "xlsm", "xltx"]),
  pptx: D("pptx", "PowerPoint (PPTX)", "application/vnd.openxmlformats-officedocument.presentationml.presentation", ["pptx", "pptm", "ppsx"]),
  odf: D("odf", "OpenDocument file", "application/vnd.oasis.opendocument", ["odt", "ods", "odp", "odg"]), epub: D("epub", "EPUB book", "application/epub+zip", ["epub"]),
  apk: D("apk", "Android app (APK)", "application/vnd.android.package-archive", ["apk", "aab", "apks", "xapk"]), jar: D("jar", "Java archive (JAR)", "application/java-archive", ["jar", "war", "ear"]),
  ole: D("ole", "Old Office file (DOC/XLS/PPT/MSI)", "application/x-ole-storage", ["doc", "xls", "ppt", "msi", "msg", "dot", "xlt", "pps"]),
  rar: D("rar", "RAR archive", "application/vnd.rar", ["rar"]), sevenz: D("7z", "7-Zip archive", "application/x-7z-compressed", ["7z"]), gz: D("gz", "GZIP archive", "application/gzip", ["gz", "tgz"]),
  bz2: D("bz2", "BZIP2 archive", "application/x-bzip2", ["bz2", "tbz2"]), xz: D("xz", "XZ archive", "application/x-xz", ["xz", "txz"]), tar: D("tar", "TAR archive", "application/x-tar", ["tar"]),
  mp3: D("mp3", "MP3 audio", "audio/mpeg", ["mp3"]), wav: D("wav", "WAV audio", "audio/wav", ["wav"]), ogg: D("ogg", "Ogg media", "audio/ogg", ["ogg", "oga", "ogv", "opus"]), flac: D("flac", "FLAC audio", "audio/flac", ["flac"]),
  mp4: D("mp4", "MP4 / QuickTime video", "video/mp4", ["mp4", "m4v", "m4a", "mov", "3gp", "3g2", "m4b"]), mkv: D("mkv", "Matroska / WebM", "video/x-matroska", ["mkv", "webm", "mka"]), avi: D("avi", "AVI video", "video/x-msvideo", ["avi"]),
  exe: D("exe", "Windows program (EXE/DLL)", "application/vnd.microsoft.portable-executable", ["exe", "dll", "sys", "scr", "com", "efi", "ocx", "cpl"]), elf: D("elf", "Linux program (ELF)", "application/x-elf", ["", "so", "o", "elf", "bin", "run"]),
  macho: D("macho", "macOS program (Mach-O)", "application/x-mach-binary", ["", "dylib", "bundle"]), classfile: D("class", "Java class / universal binary", "application/java-vm", ["class", ""]),
  dex: D("dex", "Android DEX", "application/x-dex", ["dex"]), wasm: D("wasm", "WebAssembly", "application/wasm", ["wasm"]), sqlite: D("sqlite", "SQLite database", "application/vnd.sqlite3", ["sqlite", "sqlite3", "db", "db3"]),
  rtf: D("rtf", "Rich Text (RTF)", "application/rtf", ["rtf"]), ps: D("ps", "PostScript", "application/postscript", ["ps", "eps"]), woff: D("woff", "WOFF font", "font/woff", ["woff"]), woff2: D("woff2", "WOFF2 font", "font/woff2", ["woff2"]),
  ttf: D("ttf", "TrueType font", "font/ttf", ["ttf", "ttc"]), otf: D("otf", "OpenType font", "font/otf", ["otf"]),
  html: D("html", "HTML page", "text/html", ["html", "htm", "xhtml"]), xml: D("xml", "XML document", "application/xml", ["xml", "svg", "plist", "xsd", "rss", "kml", "gpx", "xlf", "csproj", "config", "resx"]),
  json: D("json", "JSON", "application/json", ["json", "geojson", "map", "webmanifest", "ipynb", "har", "lock"]),
  text: D("text", "Plain text", "text/plain", []), empty: D("empty", "Empty file", "", []), unknown: D("unknown", "Unknown binary", "application/octet-stream", []),
};
export const TEXT_EXTS = ["txt", "md", "csv", "tsv", "log", "ini", "cfg", "conf", "yml", "yaml", "toml", "js", "mjs", "cjs", "ts", "tsx", "jsx", "css", "scss", "less", "py", "rb", "php", "java", "kt", "kts", "swift", "c", "h", "cpp", "hpp", "cs", "go", "rs", "sh", "bat", "ps1", "sql", "srt", "vtt", "env", "gradle", "properties", "dart", "lua", "r", "pl", "vue", "svelte", "tex", "bib", "gitignore", "dockerfile", "makefile", "json", "xml", "html", "htm", "svg", "rtf", "ics", "vcf", "eml", "pem", "crt", "key", "asc", "rst", "adoc", "jsonl", "ndjson"];

const at = (b: Uint8Array, o: number, sig: number[]) => sig.every((v, i) => b[o + i] === v);
const ascii = (b: Uint8Array, o: number, s: string) => [...s].every((ch, i) => b[o + i] === ch.charCodeAt(0));

/** Detects the real file type from the first bytes (head) and, for ZIPs, entry names. */
export function sniff(head: Uint8Array, size: number, zipNames?: string[]): Detected {
  const b = head;
  if (!size) return T.empty;
  if (at(b, 0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return T.png;
  if (at(b, 0, [0xff, 0xd8, 0xff])) return T.jpg;
  if (ascii(b, 0, "GIF87a") || ascii(b, 0, "GIF89a")) return T.gif;
  if (ascii(b, 0, "RIFF") && ascii(b, 8, "WEBP")) return T.webp;
  if (ascii(b, 0, "RIFF") && ascii(b, 8, "WAVE")) return T.wav;
  if (ascii(b, 0, "RIFF") && ascii(b, 8, "AVI ")) return T.avi;
  if (ascii(b, 4, "ftyp")) { const brand = String.fromCharCode(...b.slice(8, 12)); if (/^(heic|heix|hevc|heim|heis|mif1|msf1)$/.test(brand)) return T.heic; if (/^avi[fs]$/.test(brand)) return T.avif; return T.mp4; }
  if (ascii(b, 0, "%PDF-")) return T.pdf;
  if (at(b, 0, [0x50, 0x4b, 0x03, 0x04]) || at(b, 0, [0x50, 0x4b, 0x05, 0x06])) {
    const n = zipNames ?? [];
    if (n.includes("mimetype") && n.some((x) => x.startsWith("META-INF/container.xml"))) return T.epub;
    if (n.includes("AndroidManifest.xml") || n.includes("base/manifest/AndroidManifest.xml") || n.includes("toc.pb")) return T.apk;
    if (n.some((x) => x.startsWith("word/"))) return T.docx;
    if (n.some((x) => x.startsWith("xl/"))) return T.xlsx;
    if (n.some((x) => x.startsWith("ppt/"))) return T.pptx;
    if (n.includes("mimetype") && n.includes("content.xml")) return T.odf;
    if (n.includes("META-INF/MANIFEST.MF")) return T.jar;
    return T.zip;
  }
  if (at(b, 0, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])) return T.ole;
  if (ascii(b, 0, "Rar!\x1a\x07")) return T.rar;
  if (at(b, 0, [0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c])) return T.sevenz;
  if (at(b, 0, [0x1f, 0x8b])) return T.gz;
  if (ascii(b, 0, "BZh")) return T.bz2;
  if (at(b, 0, [0xfd, 0x37, 0x7a, 0x58, 0x5a, 0x00])) return T.xz;
  if (b.length > 262 && ascii(b, 257, "ustar")) return T.tar;
  if (ascii(b, 0, "ID3") || (b[0] === 0xff && (b[1] & 0xe0) === 0xe0 && (b[1] & 0x06) !== 0)) return T.mp3;
  if (ascii(b, 0, "OggS")) return T.ogg;
  if (ascii(b, 0, "fLaC")) return T.flac;
  if (at(b, 0, [0x1a, 0x45, 0xdf, 0xa3])) return T.mkv;
  if (ascii(b, 0, "MZ")) return T.exe;
  if (at(b, 0, [0x7f, 0x45, 0x4c, 0x46])) return T.elf;
  if (at(b, 0, [0xfe, 0xed, 0xfa, 0xce]) || at(b, 0, [0xfe, 0xed, 0xfa, 0xcf]) || at(b, 0, [0xce, 0xfa, 0xed, 0xfe]) || at(b, 0, [0xcf, 0xfa, 0xed, 0xfe])) return T.macho;
  if (at(b, 0, [0xca, 0xfe, 0xba, 0xbe])) return T.classfile;
  if (ascii(b, 0, "dex\n")) return T.dex;
  if (at(b, 0, [0x00, 0x61, 0x73, 0x6d])) return T.wasm;
  if (ascii(b, 0, "SQLite format 3\0")) return T.sqlite;
  if (ascii(b, 0, "8BPS")) return T.psd;
  if (ascii(b, 0, "wOFF")) return T.woff;
  if (ascii(b, 0, "wOF2")) return T.woff2;
  if (at(b, 0, [0x00, 0x01, 0x00, 0x00, 0x00]) || ascii(b, 0, "ttcf") || ascii(b, 0, "true")) return T.ttf;
  if (ascii(b, 0, "OTTO")) return T.otf;
  if (at(b, 0, [0x00, 0x00, 0x01, 0x00]) && b[4] > 0) return T.ico;
  if (ascii(b, 0, "II*\0") || ascii(b, 0, "MM\0*")) return T.tiff;
  if (ascii(b, 0, "BM") && b.length > 14 && b[14] >= 12 && b[14] <= 124 && b[15] === 0) return T.bmp;
  if (ascii(b, 0, "{\\rtf")) return T.rtf;
  if (ascii(b, 0, "%!PS")) return T.ps;
  // Text-like: no NUL bytes in the sample and valid UTF-8.
  const sample = b.slice(0, 4096);
  if (!sample.includes(0)) {
    let s = "";
    try { s = new TextDecoder("utf-8", { fatal: true }).decode(sample.length === 4096 ? trimUtf8(sample) : sample); } catch { return T.unknown; }
    const st = s.replace(/^\uFEFF/, "").trimStart().slice(0, 400).toLowerCase();
    if (st.startsWith("<!doctype html") || st.startsWith("<html")) return T.html;
    if (st.startsWith("<svg") || (st.startsWith("<?xml") && st.includes("<svg"))) return T.svg;
    if (st.startsWith("<?xml") || /^<[a-z][\w:-]*[\s>]/.test(st)) return T.xml;
    if (/^[{[]/.test(st)) { try { if (sample.length === size) { JSON.parse(s); return T.json; } } catch { return T.text; } return T.json; }
    return T.text;
  }
  // UTF-16 text with BOM.
  if ((b[0] === 0xff && b[1] === 0xfe) || (b[0] === 0xfe && b[1] === 0xff)) return { ...T.text, label: "Text (UTF-16)" };
  return T.unknown;
}
function trimUtf8(b: Uint8Array) { let e = b.length; let i = e - 1, n = 0; while (i >= 0 && n < 4 && (b[i] & 0xc0) === 0x80) { i--; n++; } if (i >= 0 && b[i] >= 0xc0) e = i; return b.slice(0, e); }

export function extOf(name: string) { const m = name.toLowerCase().match(/\.([a-z0-9]{1,12})$/); return m ? m[1] : ""; }
/** "ok" when the extension fits, "mismatch" when it clearly does not, "unknown" when we cannot tell. */
export function extVerdict(d: Detected, name: string): "ok" | "mismatch" | "unknown" | "none" {
  const e = extOf(name);
  if (d.kind === "empty" || d.kind === "unknown") return "unknown";
  if (d.kind === "text") return !e || TEXT_EXTS.includes(e) ? "ok" : "mismatch";
  if (["json", "xml", "html", "svg"].includes(d.kind)) return d.exts.includes(e) || TEXT_EXTS.includes(e) ? "ok" : "mismatch";
  if (!e) return d.exts.includes("") ? "ok" : "none";
  if (d.exts.includes(e)) return "ok";
  if (d.kind === "zip" && ["zip", "cbz", "xpi", "crx", "kmz", "sketch", "nupkg", "vsix", "whl", "ipa", "aar", "3mf", "usdz"].includes(e)) return "ok";
  return "mismatch";
}

/** Reads ZIP entry names from the central directory (returns null when it is not easy). */
export async function zipInfo(f: File): Promise<{ count: number; names: string[] } | null> {
  const tailLen = Math.min(f.size, 65557);
  const tail = new Uint8Array(await f.slice(f.size - tailLen).arrayBuffer());
  let p = -1; for (let i = tail.length - 22; i >= 0; i--) if (tail[i] === 0x50 && tail[i + 1] === 0x4b && tail[i + 2] === 0x05 && tail[i + 3] === 0x06) { p = i; break; }
  if (p < 0) return null;
  const dv = new DataView(tail.buffer, tail.byteOffset);
  let count = dv.getUint16(p + 10, true), cdSize = dv.getUint32(p + 12, true), cdOff = dv.getUint32(p + 16, true);
  if (count === 0xffff || cdOff === 0xffffffff) { // ZIP64 locator
    const lp = p - 20; if (lp >= 0 && dv.getUint32(lp, true) === 0x07064b50) { const off = Number(dv.getBigUint64(lp + 8, true)); const z = new DataView(await f.slice(off, off + 56).arrayBuffer()); if (z.getUint32(0, true) === 0x06064b50) { count = Number(z.getBigUint64(32, true)); cdSize = Number(z.getBigUint64(40, true)); cdOff = Number(z.getBigUint64(48, true)); } }
  }
  const names: string[] = [];
  if (cdSize > 0 && cdSize < 16e6 && cdOff + cdSize <= f.size) {
    const cd = new Uint8Array(await f.slice(cdOff, cdOff + cdSize).arrayBuffer()); const v = new DataView(cd.buffer);
    const dec = new TextDecoder();
    for (let i = 0; i + 46 <= cd.length && names.length < 200000;) { if (v.getUint32(i, true) !== 0x02014b50) break; const n = v.getUint16(i + 28, true), x = v.getUint16(i + 30, true), c = v.getUint16(i + 32, true); names.push(dec.decode(cd.slice(i + 46, i + 46 + n))); i += 46 + n + x + c; }
  }
  return { count, names };
}

export type Algo = "SHA-1" | "SHA-256" | "SHA-512";
export const CHUNK = 4 * 1024 * 1024;
const WEBCRYPTO_MAX = 256 * 1024 * 1024;
const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join("");

/** Hashes a file in chunks with progress. Web Crypto for files up to 256 MB, streaming WASM above that. */
export async function hashFile(f: File, algos: Algo[], onProgress: (p: number) => void, cancelled: () => boolean): Promise<Partial<Record<Algo, string>>> {
  const out: Partial<Record<Algo, string>> = {};
  if (f.size <= WEBCRYPTO_MAX) {
    const all = new Uint8Array(f.size);
    for (let o = 0; o < f.size; o += CHUNK) { if (cancelled()) throw new Error("cancel"); all.set(new Uint8Array(await f.slice(o, o + CHUNK).arrayBuffer()), o); onProgress(Math.min(0.95, ((o + CHUNK) / Math.max(1, f.size)) * 0.95)); }
    for (const a of algos) out[a] = hex(await crypto.subtle.digest(a, all));
    onProgress(1); return out;
  }
  const hw = await import("hash-wasm");
  const hs = await Promise.all(algos.map((a) => (a === "SHA-1" ? hw.createSHA1() : a === "SHA-256" ? hw.createSHA256() : hw.createSHA512())));
  hs.forEach((h) => h.init());
  for (let o = 0; o < f.size; o += CHUNK) { if (cancelled()) throw new Error("cancel"); const c = new Uint8Array(await f.slice(o, o + CHUNK).arrayBuffer()); hs.forEach((h) => h.update(c)); onProgress(Math.min(1, (o + CHUNK) / f.size)); }
  algos.forEach((a, i) => { out[a] = hs[i].digest("hex"); });
  onProgress(1); return out;
}

/** Byte-by-byte comparison; returns the first differing offset or -1 when equal. */
export async function compareFiles(a: File, b: File, onProgress: (p: number) => void): Promise<{ equal: boolean; offset: number; sizeDiff: boolean }> {
  const n = Math.min(a.size, b.size);
  for (let o = 0; o < n; o += CHUNK) {
    const [x, y] = await Promise.all([a.slice(o, o + CHUNK).arrayBuffer(), b.slice(o, o + CHUNK).arrayBuffer()]).then((r) => r.map((v) => new Uint8Array(v)));
    for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return { equal: false, offset: o + i, sizeDiff: a.size !== b.size };
    onProgress(Math.min(1, (o + CHUNK) / Math.max(1, n)));
  }
  onProgress(1);
  return a.size === b.size ? { equal: true, offset: -1, sizeDiff: false } : { equal: false, offset: n, sizeDiff: true };
}

export function algoForHash(h: string): Algo | "MD5" | null { const l = h.length; return l === 40 ? "SHA-1" : l === 64 ? "SHA-256" : l === 128 ? "SHA-512" : l === 32 ? "MD5" : null; }
/** Parses "hash  filename" lines (sha256sum style) and plain hashes. */
export function parseChecksums(text: string) {
  const map = new Map<string, string>(); const loose: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const s = line.trim(); if (!s) continue;
    let m = s.match(/^([a-f0-9]{32,128})\s+\*?(.+)$/i); if (m) { map.set(m[2].trim().replace(/^\.\//, ""), m[1].toLowerCase()); continue; }
    m = s.match(/^SHA(?:1|256|512)\s*\((.+)\)\s*=\s*([a-f0-9]+)$/i); if (m) { map.set(m[1].trim(), m[2].toLowerCase()); continue; }
    m = s.match(/^([a-f0-9]{32,128})$/i); if (m) loose.push(m[1].toLowerCase());
  }
  return { map, loose };
}

export async function pdfInfo(f: File): Promise<{ version: string; pages: number | null }> {
  const head = new TextDecoder().decode(new Uint8Array(await f.slice(0, 16).arrayBuffer()));
  const version = head.match(/%PDF-(\d\.\d)/)?.[1] ?? "?";
  if (f.size > 150e6) return { version, pages: null };
  try { const { pageCount } = await import("@/pdf/lib/engine"); return { version, pages: await pageCount(new Uint8Array(await f.arrayBuffer())) }; }
  catch {
    // Encrypted or damaged: count page objects as a rough fallback.
    try { const s = new TextDecoder("latin1").decode(new Uint8Array(await f.arrayBuffer())); const n = (s.match(/\/Type\s*\/Page(?![s\w])/g) ?? []).length; return { version, pages: n || null }; } catch { return { version, pages: null }; }
  }
}
export async function imageSize(f: File): Promise<{ w: number; h: number } | null> {
  try { const bm = await createImageBitmap(f); const r = { w: bm.width, h: bm.height }; bm.close(); return r; }
  catch {
    return await new Promise((res) => { const u = URL.createObjectURL(f); const im = new Image(); im.onload = () => { res({ w: im.naturalWidth, h: im.naturalHeight }); URL.revokeObjectURL(u); }; im.onerror = () => { res(null); URL.revokeObjectURL(u); }; im.src = u; });
  }
}
