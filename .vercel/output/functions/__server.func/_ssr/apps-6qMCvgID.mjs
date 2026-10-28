//#region node_modules/.nitro/vite/services/ssr/assets/apps-6qMCvgID.js
var play_facts_default = {
	"nibras-arabic": {
		"listed": true,
		"playUrl": "https://play.google.com/store/apps/details?id=com.nibrasarabic.app",
		"version": "1.2.1",
		"minAndroid": "7.0",
		"updated": "2026-10-26"
	},
	"nibras-docs": { "listed": false },
	"nibras-qr": { "listed": false },
	"nibras-pdf": {
		"listed": true,
		"playUrl": "https://play.google.com/store/apps/details?id=com.nibras.pdf",
		"version": "1.0.5",
		"minAndroid": "7.0",
		"updated": "2026-10-21"
	},
	"nibras-office": { "listed": false },
	"majmu-al-fatawa": { "listed": false }
};
var PLAY_MAP = play_facts_default.apps ?? play_facts_default;
/** Play URL from the synced public Play data: listed → Play URL, unlisted (404) → null, unknown → fallback. */
function syncedPlayUrl(slug, fallback) {
	const f = PLAY_MAP[slug];
	if (f?.listed === true && f.playUrl) return f.playUrl;
	if (f?.listed === false) return null;
	return (fallback || "").trim() || null;
}
var STUDIO_APPS = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic",
		icon: "/apps/nibras-arabic-v2.webp",
		playStoreUrl: "https://play.google.com/store/apps/details?id=com.nibrasarabic.app",
		huaweiStoreUrl: "https://urldra.cloud.huawei.com/CkyddvOyXK",
		leadKey: "arabic_lead",
		bodyKey: "arabic_body",
		features: [
			"arabic_f1",
			"arabic_f2",
			"arabic_f3",
			"arabic_f4",
			"arabic_f5",
			"arabic_f6"
		],
		shots: [
			"/shots/nibras-arabic-1.jpg",
			"/shots/nibras-arabic-2.jpg",
			"/shots/nibras-arabic-3.jpg",
			"/shots/nibras-arabic-4.jpg",
			"/shots/nibras-arabic-5.jpg"
		]
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs",
		icon: "/apps/nibras-docs.jpg",
		playStoreUrl: null,
		leadKey: "docs_lead",
		bodyKey: "docs_body",
		features: [
			"docs_f1",
			"docs_f2",
			"docs_f3"
		],
		shots: []
	},
	{
		slug: "nibras-plans",
		name: "Nibras Plans",
		icon: "/apps/nibras-plans.jpg",
		playStoreUrl: null,
		leadKey: "plans_lead",
		bodyKey: "plans_body",
		features: [
			"plans_f1",
			"plans_f2",
			"plans_f3"
		],
		shots: []
	},
	{
		slug: "nibras-note",
		name: "Nibras Note",
		icon: "/apps/nibras-note.webp",
		playStoreUrl: null,
		leadKey: "note_lead",
		bodyKey: "note_body",
		features: [
			"note_f1",
			"note_f2",
			"note_f3"
		],
		shots: []
	},
	{
		slug: "nibras-scan",
		name: "Nibras Scan",
		icon: "/apps/nibras-scan.webp",
		playStoreUrl: null,
		leadKey: "scan_lead",
		bodyKey: "scan_body",
		features: [
			"scan_f1",
			"scan_f2",
			"scan_f3"
		],
		shots: []
	},
	{
		slug: "nibras-pdf",
		name: "Nibras PDF",
		icon: "/apps/nibras-pdf.jpg",
		playStoreUrl: "https://play.google.com/store/apps/details?id=com.nibras.pdf",
		leadKey: "pdf_lead",
		bodyKey: "pdf_body",
		features: [
			"pdf_f1",
			"pdf_f2",
			"pdf_f3"
		],
		shots: []
	},
	{
		slug: "nibras-qr",
		name: "Nibras QR",
		icon: "/apps/nibras-qr-v2.jpg",
		playStoreUrl: "https://play.google.com/store/apps/details?id=com.nibras.qr",
		leadKey: "qr_lead",
		bodyKey: "qr_body",
		features: [
			"qr_f1",
			"qr_f2",
			"qr_f3"
		],
		shots: []
	},
	{
		slug: "nibras-office",
		name: "Nibras Office",
		icon: "/apps/nibras-office.jpg",
		playStoreUrl: null,
		huaweiStoreUrl: "https://appgallery.huawei.com/app/C119512365",
		leadKey: "office_lead",
		bodyKey: "office_body",
		features: [
			"office_f1",
			"office_f2",
			"office_f3"
		],
		shots: []
	},
	{
		slug: "majmu-al-fatawa",
		name: "مجموع الفتاوى",
		icon: "/apps/majmu-al-fatawa.jpg",
		playStoreUrl: null,
		leadKey: "fatawa_lead",
		bodyKey: "fatawa_body",
		features: [
			"fatawa_f1",
			"fatawa_f2",
			"fatawa_f3"
		],
		shots: []
	}
];
for (const app of STUDIO_APPS) app.playStoreUrl = syncedPlayUrl(app.slug, app.playStoreUrl);
function getAppBySlug(slug) {
	return STUDIO_APPS.find((app) => app.slug === slug);
}
function appStoreLinks(app, live) {
	const play = app.slug ? syncedPlayUrl(app.slug, live?.play_url || app.playStoreUrl) || "" : (live?.play_url || app.playStoreUrl || "").trim();
	const huawei = (live?.huawei_url || app.huaweiStoreUrl || "").trim();
	return [play ? {
		id: "play",
		label: "Google Play",
		href: play
	} : null, huawei ? {
		id: "huawei",
		label: "Huawei",
		href: huawei
	} : null].filter((item) => Boolean(item));
}
var APP_STATUS = {
	"nibras-arabic": "ready",
	"nibras-pdf": "ready",
	"nibras-office": "ready",
	"nibras-docs": "building",
	"nibras-qr": "building",
	"nibras-scan": "building",
	"majmu-al-fatawa": "building",
	"nibras-note": "planned",
	"nibras-plans": "planned"
};
var APP_STATUS_LABEL = {
	ready: {
		az: "Hazırdır",
		en: "Available",
		tr: "Hazır",
		ar: "متاح",
		ru: "Доступно"
	},
	beta: {
		az: "Beta",
		en: "Beta",
		tr: "Beta",
		ar: "تجريبي",
		ru: "Бета"
	},
	building: {
		az: "Hazırlanır",
		en: "In development",
		tr: "Hazırlanıyor",
		ar: "قيد التطوير",
		ru: "В разработке"
	},
	planned: {
		az: "Planlaşdırılır",
		en: "Planned",
		tr: "Planlanıyor",
		ar: "مخطط له",
		ru: "Планируется"
	}
};
function appStatus(slug) {
	return APP_STATUS[slug] ?? "planned";
}
function appStatusLabel(slug, lang) {
	const l = APP_STATUS_LABEL[appStatus(slug)];
	return l[lang] ?? l.en;
}
/** Store links only for released/beta apps; never a Play link that is not listed. */
function statusStoreLinks(app, live) {
	const s = appStatus(app.slug);
	if (s !== "ready" && s !== "beta") return [];
	return appStoreLinks(app, live);
}
//#endregion
export { play_facts_default as a, getAppBySlug as i, appStatus as n, statusStoreLinks as o, appStatusLabel as r, syncedPlayUrl as s, STUDIO_APPS as t };
