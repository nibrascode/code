// Generates public/tools.json — multilingual machine catalog of Nibras Code tools and apps for AI/LLM crawlers.
// Copy comes from src/lib/seo.ts (PAGES), src/kit/meta.ts (KIT), src/pdf/tool-text.ts and home-bar labels.
// Run: node scripts/gen-tools-json.mjs
import { writeFileSync } from "node:fs";
import { createServer } from "vite";
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const { PAGES } = await vite.ssrLoadModule("/src/lib/seo.ts");
const { KIT } = await vite.ssrLoadModule("/src/kit/meta.ts");
const { TOOL_IDS, TOOL_TEXT } = await vite.ssrLoadModule("/src/pdf/tool-text.ts");
const { BAR } = await vite.ssrLoadModule("/src/components/home-bars.tsx");
await vite.close();

const SITE = "https://nibrascode.com";
const LANGS = ["az", "en", "tr", "ar", "ru"];
const TODAY = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Riyadh" }).format(new Date());
const url = (l, p) => `${SITE}${l === "az" ? "" : "/" + l}${p === "/" ? (l === "az" ? "/" : "") : p}`;
const per = (f) => Object.fromEntries(LANGS.map((l) => [l, f(l)]));
const first = (s) => { const parts = String(s).trim().split(/(?<=[.!?。])\s+/); let out = parts[0].trim(); for (let i = 1; out.length < 45 && i < parts.length; i++) out += " " + parts[i].trim(); return out; };
const copy = (p) => { const c = PAGES[p] ?? KIT[p]; return c && per((l) => c[l] ?? c.en ?? c.az); };
const titleName = (t) => t.split(" — ")[0].replace(/\s*\((free|pulsuz|ücretsiz)\)$/i, "").trim();

// Who needs it (short, 5 languages).
const WHO = {
  pdf: { az: "Sənədlə işləyən tələbə, ofis işçisi və sahibkarlar", en: "Students, office workers and small businesses working with documents", tr: "Belgeyle çalışan öğrenciler, ofis çalışanları ve işletmeler", ar: "الطلاب وموظفو المكاتب وأصحاب الأعمال الذين يعملون بالمستندات", ru: "Студенты, офисные работники и малый бизнес, работающие с документами" },
  image: { az: "Sayt, sosial şəbəkə və ya sənəd üçün şəkil hazırlayanlar", en: "Anyone preparing photos for a site, social media or a document", tr: "Site, sosyal medya veya belge için fotoğraf hazırlayanlar", ar: "كل من يجهّز صوراً لموقع أو لوسائل التواصل أو لمستند", ru: "Все, кто готовит фото для сайта, соцсетей или документа" },
  qr: { az: "Kafe, mağaza, tədbir və vizit kartı üçün QR lazım olanlar", en: "Cafes, shops, events and anyone sharing a link, Wi-Fi or contact", tr: "Kafe, mağaza, etkinlik ve link, Wi-Fi veya kişi paylaşanlar", ar: "المقاهي والمتاجر والفعاليات ومن يشارك رابطاً أو Wi-Fi أو جهة اتصال", ru: "Кафе, магазины, мероприятия и все, кто делится ссылкой, Wi-Fi или контактом" },
  media: { az: "Qısa video və ya səs yazısı hazırlayanlar", en: "People making short videos or voice recordings", tr: "Kısa video veya ses kaydı hazırlayanlar", ar: "من يعدّ مقاطع فيديو قصيرة أو تسجيلات صوتية", ru: "Те, кто делает короткие видео или аудиозаписи" },
  utility: { az: "Gündəlik hesab, arxiv və ya cihaz yoxlaması lazım olanlar", en: "Everyday users needing a quick calculation, archive or device check", tr: "Günlük hesap, arşiv veya cihaz kontrolü gerekenler", ar: "المستخدمون الذين يحتاجون حساباً سريعاً أو أرشيفاً أو فحص جهاز", ru: "Все, кому нужен быстрый расчёт, архив или проверка устройства" },
  ai: { az: "Sual, kod və ya şəkil üçün köməkçi axtaranlar", en: "Anyone who wants help with a question, code or an image", tr: "Soru, kod veya görsel için yardımcı arayanlar", ar: "كل من يريد مساعدة في سؤال أو كود أو صورة", ru: "Все, кому нужна помощь с вопросом, кодом или изображением" },
  studio: { az: "Proqramçılar, sayt sahibləri və kod öyrənənlər", en: "Developers, site owners and people learning to code", tr: "Geliştiriciler, site sahipleri ve kod öğrenenler", ar: "المطورون وأصحاب المواقع ومتعلمو البرمجة", ru: "Разработчики, владельцы сайтов и те, кто учится программировать" },
  learn: { az: "Proqramlaşdırma və məntiq öyrənən tələbələr", en: "Students learning programming and logic", tr: "Programlama ve mantık öğrenen öğrenciler", ar: "الطلاب الذين يتعلمون البرمجة والمنطق", ru: "Студенты, изучающие программирование и логику" },
  app: { az: "Android telefon istifadəçiləri", en: "Android phone users", tr: "Android telefon kullanıcıları", ar: "مستخدمو هواتف Android", ru: "Пользователи Android-телефонов" },
};

const tools = [];
const add = (t) => tools.push({
  id: t.id, category: t.category,
  name: t.names.en, names: t.names,
  description: t.descriptions.en, descriptions: t.descriptions,
  audience: WHO[t.category],
  url: t.single ? `${SITE}${t.path}` : url("en", t.path),
  urls: t.single ? per(() => `${SITE}${t.path}`) : per((l) => url(l, t.path)),
  languages: LANGS, free: true, account: false, ads: false, clientSide: t.clientSide ?? true,
  ...(t.extra ?? {}),
});
const fromPage = (id, path, category, o = {}) => {
  const c = copy(path); if (!c) throw new Error("no copy " + path);
  add({ id, path, category, names: o.names ?? per((l) => titleName(c[l].title)), descriptions: per((l) => first(c[l].description)), ...o });
};

// Hubs and main tools (order follows the home bars).
add({ id: "nibras-ai", path: "/ai", category: "ai", single: true, clientSide: false,
  names: per(() => "Nibras AI"),
  descriptions: { az: "Nibras Code-un köməkçisi: sual ver, kod yaz və şəkil hazırla.", en: "Nibras Code's assistant: ask a question, write code and make an image.", tr: "Nibras Code'un yardımcısı: soru sor, kod yaz ve görsel hazırla.", ar: "مساعد Nibras Code: اطرح سؤالاً واكتب كوداً وأعدّ صورة.", ru: "Помощник Nibras Code: задайте вопрос, напишите код и сделайте изображение." },
  extra: { dataHandling: "Your message text is sent to an AI service to generate the answer." } });
fromPage("pdf", "/pdf", "pdf", { names: per(() => "Nibras PDF"), extra: { toolCount: TOOL_IDS.length } });
for (const id of TOOL_IDS) add({ id: `pdf-${id}`, path: `/pdf/${id}`, category: "pdf", names: per((l) => TOOL_TEXT[l][id].title), descriptions: per((l) => TOOL_TEXT[l][id].description.replace(/\.?$/, ".")) });
fromPage("qr", "/qr", "qr", { names: per(() => "Nibras QR") });
fromPage("wifi-qr", "/wifi", "qr");
fromPage("vcard-qr", "/vcard", "qr");
add({ id: "voice", path: "/voice", category: "media", names: BAR.audio,
  descriptions: { az: "Brauzerdə mikrofonla səs yaz və faylı endir.", en: "Record audio with your microphone in the browser and download the file.", tr: "Tarayıcıda mikrofonla ses kaydet ve dosyayı indir.", ar: "سجّل الصوت بالميكروفون في المتصفح ونزّل الملف.", ru: "Запишите звук с микрофона в браузере и скачайте файл." } });
fromPage("video", "/video", "media");
for (const v of ["trim", "convert", "merge", "audio", "compress", "crop", "resize", "mute"]) fromPage(`video-${v}`, `/video/${v}`, "media");
fromPage("background-remove", "/erase", "image");
fromPage("image-compress", "/image", "image");
for (const v of ["resize", "convert", "edit"]) fromPage(`image-${v}`, `/image/${v}`, "image");
add({ id: "calc", path: "/calc", category: "utility", single: true, names: BAR.calc,
  descriptions: { az: "Gündəlik hesablamalar üçün kalkulyatorlar.", en: "Calculators for everyday calculations.", tr: "Günlük hesaplamalar için hesap makineleri.", ar: "آلات حاسبة للحسابات اليومية.", ru: "Калькуляторы для повседневных расчётов." } });
fromPage("percent", "/faiz", "utility");
fromPage("word-count", "/soz-sayi", "utility");
fromPage("phone-check", "/telefon", "utility");
fromPage("zip", "/zip", "utility");
fromPage("filecheck", "/filecheck", "utility");
fromPage("builder", "/builder", "studio");
fromPage("seo-check", "/seo", "studio", { clientSide: false, extra: { dataHandling: "The page address you enter is fetched by the Nibras Code server to read its tags, robots.txt and sitemap." } });
fromPage("flow", "/flow", "studio");
fromPage("logic", "/logic", "studio");
fromPage("studio", "/studio", "studio");
add({ id: "xray", path: "/xray", category: "studio", single: true, names: BAR.xray,
  descriptions: { az: "Kodun strukturunu brauzerdə 3D-də təhlil et; kod yüklənmir.", en: "Analyze code structure in 3D in the browser; code is never uploaded.", tr: "Kod yapısını tarayıcıda 3D olarak analiz et; kod yüklenmez.", ar: "حلّل بنية الكود ثلاثياً في المتصفح؛ لا يُرفع الكود.", ru: "Анализируйте структуру кода в 3D в браузере; код не загружается." } });
fromPage("workspace", "/workspace", "studio");
fromPage("doctor", "/doctor", "studio", { clientSide: false, extra: { dataHandling: "The site address you enter is fetched by the Nibras Code server to check its pages." } });
fromPage("error-help", "/error-help", "studio", { clientSide: false, extra: { dataHandling: "The error text you paste is sent to an AI service for an explanation." } });
fromPage("mirror", "/mirror", "studio");
fromPage("shortcuts", "/shortcuts", "learn");
fromPage("schema", "/schema", "studio");
fromPage("learn", "/learn", "learn");
fromPage("logic-lab", "/learn/logic", "learn");
fromPage("planner", "/planner", "utility");

// Android apps (store links only where the site already publishes them).
const PLAY = { "nibras-arabic": "com.nibrasarabic.app", "nibras-pdf": "com.nibras.pdf", "nibras-qr": "com.nibras.qr" };
for (const p of Object.keys(PAGES).filter((p) => p.startsWith("/apps/"))) {
  const slug = p.slice(6);
  fromPage(`app-${slug}`, p, "app", { clientSide: undefined, extra: { platform: "android", ...(PLAY[slug] ? { stores: { googlePlay: `https://play.google.com/store/apps/details?id=${PLAY[slug]}` } } : {}) } });
}
for (const t of tools) if (t.category === "app") delete t.clientSide;

const categories = {};
for (const t of tools) categories[t.category] = (categories[t.category] ?? 0) + 1;
const catalog = {
  name: "Nibras Code tools catalog", publisher: "Nibras Code", author: "Mahir Aliyev", url: SITE, contact: "nibrascode@gmail.com",
  updated: TODAY, version: 2, count: tools.length, languages: LANGS,
  note: "clientSide:true means files are processed in the user's browser and are not uploaded to a server.",
  privacyNote: "PDF, QR, image, video, audio, ZIP, background removal and most studio tools run in the browser (clientSide:true). Nibras AI and Error Help send the text you type to an AI service; SEO Check and Site Doctor fetch the address you enter on the server (clientSide:false, see dataHandling). Apps are Android apps (platform:android).",
  links: {
    self: `${SITE}/tools.json`, llms: `${SITE}/llms.txt`, llmsFull: `${SITE}/llms-full.txt`,
    llmsByLang: per((l) => `${SITE}/llms-${l}.txt`), llmsFullByLang: per((l) => `${SITE}/llms-full-${l}.txt`),
    robots: `${SITE}/robots.txt`, sitemap: `${SITE}/sitemap.xml`, home: per((l) => url(l, "/")),
  },
  categories,
  tools,
};
writeFileSync("public/tools.json", JSON.stringify(catalog, null, 2) + "\n");
console.log("tools:", tools.length, categories);
