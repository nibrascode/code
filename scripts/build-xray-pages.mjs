// Builds the static Nibras X-Ray workbench pages (public/xray + /en|tr|ar|ru/xray)
// from tools/nibras-xray/nibras_xray.html. Analysis runs fully in the browser; no API function.
// Usage: node scripts/build-xray-pages.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SRC = new URL("../tools/nibras-xray/nibras_xray.html", import.meta.url);
const BASE = "https://nibrascode.com";
const LANGS = ["az", "en", "tr", "ar", "ru"];
const T = {
  az: { title: "Nibras X-Ray — Kod analizi və arxitektura xəritəsi | Nibras Code",
        desc: "JS/TS/Python layihə ZIP-ini brauzerdə analiz et: asılılıq qrafı, xətalar, təhlükəsizlik riskləri, mürəkkəblik. Kod cihazdan çıxmır.",
        note: "Brauzerdə işləyir: ZIP/fayllar cihazınızda analiz olunur, serverə göndərilmir. JS/TS sintaksisi @babel/parser ilə yoxlanır; Python və digər dillər üçün nəticələr evristikdir (təxmini). GitHub idxalı yalnız public repolar üçün GitHub API-yə müraciət edir.",
        back: "Nibras Code" },
  en: { title: "Nibras X-Ray — Code analysis & architecture map | Nibras Code",
        desc: "Analyze a JS/TS/Python project ZIP in your browser: dependency graph, bugs, security risks, complexity. Your code stays on your device.",
        note: "Runs in your browser: ZIPs/files are analyzed on your device and never uploaded. JS/TS syntax is checked with @babel/parser; Python and other languages use heuristic (approximate) checks. GitHub import calls the public GitHub API for public repos only.",
        back: "Nibras Code" },
  tr: { title: "Nibras X-Ray — Kod analizi ve mimari haritası | Nibras Code",
        desc: "JS/TS/Python proje ZIP'ini tarayıcıda analiz et: bağımlılık grafiği, hatalar, güvenlik riskleri, karmaşıklık. Kod cihazından çıkmaz.",
        note: "Tarayıcıda çalışır: ZIP/dosyalar cihazınızda analiz edilir, sunucuya yüklenmez. JS/TS sözdizimi @babel/parser ile kontrol edilir; Python ve diğer diller için sonuçlar sezgiseldir (yaklaşık). GitHub içe aktarma yalnızca herkese açık depolar için GitHub API'sini kullanır.",
        back: "Nibras Code" },
  ar: { title: "Nibras X-Ray — تحليل الكود وخريطة البنية | Nibras Code",
        desc: "حلّل ملف ZIP لمشروع JS/TS/Python في المتصفح: مخطط الاعتماديات، الأخطاء، المخاطر الأمنية، التعقيد. يبقى الكود على جهازك.",
        note: "يعمل في المتصفح: يتم تحليل الملفات على جهازك ولا تُرفع إلى أي خادم. يُفحص JS/TS بواسطة ‎@babel/parser؛ أما Python واللغات الأخرى فالفحص تقريبي. استيراد GitHub يستخدم واجهة GitHub العامة للمستودعات العامة فقط.",
        back: "Nibras Code" },
  ru: { title: "Nibras X-Ray — Анализ кода и карта архитектуры | Nibras Code",
        desc: "Анализ ZIP-проекта JS/TS/Python в браузере: граф зависимостей, ошибки, риски безопасности, сложность. Код остаётся на устройстве.",
        note: "Работает в браузере: файлы анализируются на вашем устройстве и не загружаются на сервер. Синтаксис JS/TS проверяется @babel/parser; для Python и других языков проверки эвристические (приблизительные). Импорт с GitHub использует публичный API только для публичных репозиториев.",
        back: "Nibras Code" },
};
const url = (l) => `${BASE}${l === "az" ? "" : "/" + l}/xray`;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

let src = readFileSync(SRC, "utf8");
// @babel/parser's CDN file is CommonJS and never defined window.babelParser; load the ESM build instead.
src = src.replace(/\s*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@babel\/parser@[^"]+"><\/script>/,
  `\n  <script type="module">import * as p from "https://esm.sh/@babel/parser@7.24.4";window.babelParser=p;const b=document.getElementById("engineStatusBadge");if(b)b.textContent="Browser: @babel/parser (JS/TS) · heuristic (Python, other)";</script>`);
// Honest default badge (updated once the parser loads).
src = src.replace(">AST Engine: @babel/parser + Python AST<", ">Browser engine: heuristic (loading @babel/parser…)<");
// Privacy hard-lock: the browser itself blocks any fetch/XHR/beacon/WebSocket except the public GitHub GET import,
// and blocks form posts. Scripts may load from the library CDNs only (no user data is sent to them).
const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src https://api.github.com https://raw.githubusercontent.com https://esm.sh; worker-src 'self' blob:; frame-src 'self' blob:; form-action 'none'; base-uri 'self'";

for (const l of LANGS) {
  const t = T[l];
  const head = [
    `<title>${esc(t.title)}</title>`,
    `<meta name="description" content="${esc(t.desc)}" />`,
    `<link rel="canonical" href="${url(l)}" />`,
    ...LANGS.map((x) => `<link rel="alternate" hreflang="${x}" href="${url(x)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${url("az")}" />`,
    `<meta property="og:title" content="${esc(t.title)}" />`,
    `<meta property="og:description" content="${esc(t.desc)}" />`,
    `<meta property="og:url" content="${url(l)}" />`,
    `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
    `<meta name="referrer" content="no-referrer" />`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" />`,
  ].join("\n  ");
  const banner = `<div id="nxOfflineNote" dir="${l === "ar" ? "rtl" : "ltr"}" style="font:12px/1.4 system-ui,sans-serif;background:#0b1120;color:#cbd5e1;border-bottom:1px solid #1e293b;padding:6px 12px;display:flex;gap:10px;align-items:center"><a href="${l === "az" ? "/" : "/" + l}" style="color:#22d3ee;text-decoration:none;font-weight:600;white-space:nowrap">← ${t.back}</a><span>🔒 ${esc(t.note)}</span></div>`;
  let html = src
    .replace(/<html lang="en"/, `<html lang="${l}"${l === "ar" ? "" : ""}`)
    .replace(/<title>[\s\S]*?<\/title>/, head)
    .replace(/(<body[^>]*>)/, `$1\n${banner}`);
  const dir = new URL(`../public/${l === "az" ? "" : l + "/"}xray/`, import.meta.url);
  mkdirSync(dir, { recursive: true });
  writeFileSync(new URL("index.html", dir), html);
}
console.log("xray pages:", LANGS.map(url).join(" "));
