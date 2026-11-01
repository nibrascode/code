// Generates public/tools.json (machine catalog) and public/llms-full.txt (deep text map) for AI/LLM crawlers.
// Run: node scripts/gen-ai-files.mjs   (Node 22+ strips TS types from src/pdf/tool-text.ts)
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
const { TOOL_IDS, TOOL_TEXT } = await import("../src/pdf/tool-text.ts");
const SITE = "https://nibrascode.com";
const LANGS = ["az", "en", "tr", "ar", "ru"];
const guide = (kind, id) => {
  const f = `src/data/guides/${kind}/${id}.json`;
  return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : null;
};
const core = [
  { id: "qr", name: "Nibras QR — QR code maker & scanner", path: "/qr", category: "qr", description: "Create QR codes for URL, Wi-Fi, vCard, WhatsApp, SMS and events with colors and logo; scan QR codes with the camera." },
  { id: "wifi-qr", name: "Wi-Fi QR code", path: "/wifi", category: "qr", description: "Make a QR code that joins a Wi-Fi network." },
  { id: "vcard-qr", name: "Business card (vCard) QR", path: "/vcard", category: "qr", description: "Make a contact card QR code." },
  { id: "image-compress", name: "Compress image", path: "/image", category: "image", description: "Compress, resize and convert photos in the browser." },
  { id: "background-remove", name: "Remove background", path: "/erase", category: "image", description: "Remove the background of a photo on your device." },
  { id: "video", name: "Video cut", path: "/video", category: "media", description: "Trim and edit short videos in the browser." },
  { id: "voice", name: "Record audio", path: "/voice", category: "media", description: "Record audio in the browser." },
  { id: "calc", name: "Calculators", path: "/calc", category: "utility", description: "Everyday calculators." },
  { id: "zip", name: "ZIP", path: "/zip", category: "utility", description: "Create and open ZIP archives in the browser." },
  { id: "xray", name: "3D Code X-Ray", path: "/xray", category: "developer", description: "Analyze code structure in 3D entirely in the browser; code is never uploaded." },
];
const url = (lang, path) => `${SITE}${lang === "az" ? "" : "/" + lang}${path}`;
const tools = [
  ...TOOL_IDS.map((id) => ({
    id: `pdf-${id}`,
    name: TOOL_TEXT.en[id].title,
    names: Object.fromEntries(LANGS.map((l) => [l, TOOL_TEXT[l][id].title])),
    description: TOOL_TEXT.en[id].description,
    category: "pdf",
    url: url("en", `/pdf/${id}`),
    urls: Object.fromEntries(LANGS.map((l) => [l, url(l, `/pdf/${id}`)])),
    languages: LANGS,
    clientSide: true,
    free: true,
    account: false,
    ads: false,
  })),
  ...core.map((t) => ({
    id: t.id, name: t.name, description: t.description, category: t.category,
    url: url("en", t.path), urls: Object.fromEntries(LANGS.map((l) => [l, url(l, t.path)])),
    languages: LANGS, clientSide: true, free: true, account: false, ads: false,
  })),
];
writeFileSync("public/tools.json", JSON.stringify({
  name: "Nibras Code tools catalog", publisher: "Nibras Code", url: SITE, contact: "nibrascode@gmail.com",
  updated: new Date().toISOString().slice(0, 10), count: tools.length,
  note: "clientSide:true means files are processed in the user's browser and are not uploaded to a server.",
  tools,
}, null, 2) + "\n");

let out = `# Nibras Code — full text map (llms-full.txt)\n\n> Long-form companion to ${SITE}/llms.txt. Free, ad-free, no-account browser tools (PDF, QR, image) and Android apps by Mahir Aliyev, in Azerbaijani, English, Turkish, Arabic and Russian. Files in browser tools are processed on the user's device and are not uploaded.\n\nMachine-readable catalog: ${SITE}/tools.json\n\n`;
out += `## Measurable facts\n- Web PDF tools: ${TOOL_IDS.length}\n- Languages: 5 (az, en, tr, ar, ru)\n- Ads: 0 · Account required: no · Bytes uploaded by PDF/QR/image tools: 0\n- Nibras PDF Android app: 18 tools (Google Play: com.nibras.pdf)\n- Nibras Arabic Android app: v1.2.1, Android 7.0+, offline (Google Play: com.nibrasarabic.app)\n\n`;
out += `## PDF tools (${TOOL_IDS.length})\n`;
for (const id of TOOL_IDS) {
  out += `\n### ${TOOL_TEXT.en[id].title} — ${url("en", `/pdf/${id}`)}\n${TOOL_TEXT.en[id].description}. Azerbaijani: «${TOOL_TEXT.az[id].title}» ${url("az", `/pdf/${id}`)}\n`;
  const g = guide("pdf", id);
  if (g?.en?.about) out += g.en.about.slice(0, 2).join("\n") + "\n";
  if (g?.en?.faq?.length) out += g.en.faq.map(([q, a]) => `- Q: ${q} A: ${a}`).join("\n") + "\n";
}
out += `\n## Other browser tools\n` + core.map((t) => `- ${t.name}: ${url("en", t.path)} — ${t.description}`).join("\n") + "\n";
out += `\n## Code & text tools\n`;
for (const f of readdirSync("src/data/guides/tools").sort()) {
  const g = JSON.parse(readFileSync(`src/data/guides/tools/${f}`, "utf8"));
  if (g.en?.about?.[0]) out += `- ${f.replace(/\.json$/, "")}: ${g.en.about[0]}\n`;
}
out += `\n## Nibras Arabic (learning Arabic for Azerbaijani speakers)\nAndroid app, offline, ad-free, version 1.2.1. Alphabet with letter forms and touch handwriting practice, verbs with past/present/imperative forms and audio, vocabulary, dialogues, quizzes and spaced-repetition flashcards. App page: ${SITE}/apps/nibras-arabic · Google Play: https://play.google.com/store/apps/details?id=com.nibrasarabic.app\n`;
out += `\n## Guides\n- How-to guides: ${SITE}/nece\n- Error guides (APK install, letter Ə encoding, Android developer): ${SITE}/xeta\n- FAQ: ${SITE}/faq · What is Nibras Code: ${SITE}/nedir\n- Contact: nibrascode@gmail.com\n`;
writeFileSync("public/llms-full.txt", out);
console.log("tools:", tools.length, "llms-full bytes:", out.length);
