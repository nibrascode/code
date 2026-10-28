import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as play_facts_default } from "./apps-6qMCvgID.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio.functions-DsBMrwfm.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadStudioBundle = createServerFn({ method: "GET" }).handler(createSsrRpc("519616068c9ea61d7d898c414e7170fbaae397de6c1a2569ed0660f883997ffd"));
var loadHomeApps = createServerFn({ method: "GET" }).handler(createSsrRpc("325ab8184b6e10635a8c62416a9b8873ab82bd3b8ac1c6521a3c3dd2c1f3a5dd"));
var syncStudioToGithub = createServerFn({ method: "POST" }).validator((input) => {
	const accessToken = input.accessToken?.trim() ?? "";
	if (accessToken.length < 20 || accessToken.length > 4e3) throw new Error("Sessiya yanlışdır.");
	const privacy = input.privacy?.slug ? {
		slug: String(input.privacy.slug).slice(0, 140),
		lang: String(input.privacy.lang || "az").slice(0, 8),
		title: String(input.privacy.title || "").slice(0, 400),
		updated_label: String(input.privacy.updated_label || "").slice(0, 80),
		body: String(input.privacy.body || "").slice(0, 2e5)
	} : null;
	const app = input.app?.slug ? {
		...input.app,
		slug: String(input.app.slug).slice(0, 80),
		name: String(input.app.name || "").slice(0, 120)
	} : null;
	return {
		accessToken,
		privacy,
		dropSlug: input.dropSlug ? String(input.dropSlug).slice(0, 140) : "",
		app,
		dropApp: input.dropApp ? String(input.dropApp).slice(0, 80) : ""
	};
}).handler(createSsrRpc("eeb2b86ddeb133b0894dbb47463d7981736804ceb2649523d5ecd8d5f2aed4a0"));
var recordHit = createServerFn({ method: "POST" }).validator((input) => {
	return {
		kind: input.kind === "download" ? "download" : "view",
		slug: typeof input.slug === "string" ? input.slug.slice(0, 64) : ""
	};
}).handler(createSsrRpc("32767ffa08db701344b383dca8bcfbbfe190c3f4a456643a7499e4f81d98c88c"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/app-store-D7Bnka1x.js
var app_sizes_default = {};
var range = (base, n) => Array.from({ length: n }, (_, i) => `/shots/${base}-${i + 1}`);
var BOOKS = {
	en: "Books & Reference",
	az: "Kitablar və məlumat",
	ar: "كتب ومراجع",
	ru: "Книги и справочники",
	tr: "Kitap ve Referans"
};
var TOOLS = {
	en: "Productivity",
	az: "Məhsuldarlıq",
	ar: "الإنتاجية",
	ru: "Продуктивность",
	tr: "Verimlilik"
};
var STORE = {
	"nibras-arabic": {
		category: {
			en: "Education",
			az: "Təhsil",
			ar: "التعليم",
			ru: "Образование",
			tr: "Eğitim"
		},
		privacyUrl: "/privacy/nibras-arabic",
		shots: {
			az: range("nibras-arabic", 5),
			en: range("nibras-arabic", 5)
		}
	},
	"nibras-docs": {
		version: "1.0.1",
		updated: "2026-10-19",
		size: "16.8 MB",
		pkg: "com.nibras.docs",
		minAndroid: "7.0",
		category: TOOLS,
		apkUrl: "https://github.com/nibrascode/docs/releases/download/v1.0.1/nibras-docs-arm64.apk",
		apkLabel: "APK · arm64",
		privacyUrl: "/privacy/nibras-docs",
		shots: { en: range("nibras-docs", 8) },
		whatsNew: {
			en: "No photo or storage permissions needed anymore. Interface translated into 4 languages, cleaner title bar, scrollable export menu.",
			az: "Artıq foto və yaddaş icazəsi lazım deyil. İnterfeys 4 dilə tərcümə olundu, başlıq paneli sadələşdi, ixrac menyusu sürüşdürülə bilir.",
			ar: "لم تعد هناك حاجة لإذن الصور أو التخزين. ترجمة الواجهة إلى 4 لغات، وشريط عنوان أنظف، وقائمة تصدير قابلة للتمرير.",
			ru: "Больше не нужны разрешения на фото и хранилище. Интерфейс переведён на 4 языка, чище заголовок, прокручиваемое меню экспорта.",
			tr: "Artık fotoğraf ve depolama izni gerekmiyor. Arayüz 4 dile çevrildi, başlık çubuğu sadeleşti, dışa aktarma menüsü kaydırılabilir."
		},
		about: {
			en: "What you see on screen is what you get in the PDF: same margins, fonts, line breaks and page ends. Chapters, automatic table of contents, footnotes, tables, images and more than 100 cover designs. Export to PDF, Word (DOCX), EPUB and TXT. Arabic lines switch to right-to-left automatically. All features are currently free.",
			az: "Ekranda nə görürsənsə, PDF-də də odur: eyni kənar boşluqlar, şriftlər, sətir və səhifə sonları. Fəsillər, avtomatik mündəricat, haşiyələr, cədvəllər, şəkillər və 100-dən çox üz qabığı dizaynı. PDF, Word (DOCX), EPUB və TXT ixracı. Ərəb sətirləri avtomatik sağdan sola keçir. Hazırda bütün funksiyalar pulsuzdur.",
			ar: "ما تراه على الشاشة هو ما تحصل عليه في PDF: الهوامش والخطوط وفواصل الأسطر والصفحات نفسها. فصول وفهرس تلقائي وحواشٍ وجداول وصور وأكثر من 100 تصميم غلاف. تصدير إلى PDF وWord وEPUB وTXT. الأسطر العربية تتحول تلقائيًا من اليمين إلى اليسار. جميع الميزات مجانية حاليًا.",
			ru: "Что на экране, то и в PDF: те же поля, шрифты, переносы и концы страниц. Главы, автоматическое оглавление, сноски, таблицы, изображения и более 100 обложек. Экспорт в PDF, Word (DOCX), EPUB и TXT. Арабские строки автоматически идут справа налево. Сейчас все функции бесплатны.",
			tr: "Ekranda ne görürsen PDF'te de o: aynı kenar boşlukları, yazı tipleri, satır ve sayfa sonları. Bölümler, otomatik içindekiler, dipnotlar, tablolar, görseller ve 100'den fazla kapak tasarımı. PDF, Word (DOCX), EPUB ve TXT dışa aktarma. Arapça satırlar otomatik olarak sağdan sola geçer. Şu an tüm özellikler ücretsiz."
		},
		permissions: {
			en: "Internet, camera, network state. No photo, media or storage permission.",
			az: "İnternet, kamera, şəbəkə vəziyyəti. Foto, media və yaddaş icazəsi yoxdur.",
			ar: "الإنترنت، الكاميرا، حالة الشبكة. لا إذن للصور أو الوسائط أو التخزين.",
			ru: "Интернет, камера, состояние сети. Без доступа к фото, медиа и хранилищу.",
			tr: "İnternet, kamera, ağ durumu. Fotoğraf, medya veya depolama izni yok."
		}
	},
	"nibras-qr": {
		version: "1.0.2",
		updated: "2026-10-12",
		pkg: "com.nibras.qr",
		minAndroid: "7.0",
		category: TOOLS,
		privacyUrl: "/privacy/nibras-qr"
	},
	"nibras-pdf": {
		version: "1.0.5",
		updated: "2026-10-19",
		released: "2026-10-21",
		size: "50.10 MB",
		sizeVersion: "1.0.5",
		minAndroid: "7.0",
		iap: true,
		pkg: "com.nibras.pdf",
		category: TOOLS,
		privacyUrl: "/privacy/nibras-pdf"
	},
	"nibras-plans": {
		soon: true,
		privacyUrl: "/privacy/nibras-plans"
	},
	"nibras-note": {
		soon: true,
		pkg: "com.nibras.note",
		privacyUrl: "/privacy/nibras-note"
	},
	"nibras-scan": {
		soon: true,
		pkg: "com.nibras.scan",
		privacyUrl: "/privacy/nibras-scan"
	},
	"nibras-office": {
		version: "1.0.1",
		updated: "2026-10-26",
		pkg: "com.nibrascode.pdf",
		minAndroid: "8.0",
		category: TOOLS,
		soon: false,
		privacyUrl: "/nibras-office/privacy",
		shots: { en: range("nibras-office-en", 6) },
		shotLabels: [
			"Your PDFs, beautifully organized",
			"Pen, highlighter & shapes",
			"Search, OCR & password",
			"Organize pages",
			"Distraction-free reading",
			"5 languages, night mode, full screen"
		],
		permissions: {
			en: "Files stay on your device. Internet is used only once to download OCR language files (~10 MB).",
			az: "Fayllar cihazında qalır. İnternet yalnız OCR dil fayllarını bir dəfə yükləmək üçündür (~10 MB).",
			ar: "تبقى الملفات على جهازك. يُستخدم الإنترنت مرة واحدة فقط لتنزيل ملفات لغة OCR (نحو 10 ميغابايت).",
			ru: "Файлы остаются на устройстве. Интернет нужен один раз — скачать языковые файлы OCR (~10 МБ).",
			tr: "Dosyalar cihazında kalır. İnternet yalnızca OCR dil dosyalarını bir kez indirmek için kullanılır (~10 MB)."
		}
	},
	"majmu-al-fatawa": {
		version: "1.0.0",
		pkg: "com.nibrascode.fatawa",
		minAndroid: "7.0",
		category: BOOKS,
		soon: true,
		privacyUrl: "https://library.nibrascode.com/fatawa/privacy",
		shots: { en: range("majmu-al-fatawa", 7) },
		permissions: {
			en: "No permissions at all — the app never connects to the internet. No accounts, ads or analytics.",
			az: "Heç bir icazə yoxdur — tətbiq internetə qoşulmur. Hesab, reklam və analitika yoxdur.",
			ar: "لا أذونات إطلاقًا — التطبيق لا يتصل بالإنترنت. بلا حسابات ولا إعلانات ولا تحليلات.",
			ru: "Никаких разрешений — приложение не выходит в интернет. Без аккаунтов, рекламы и аналитики.",
			tr: "Hiç izin yok — uygulama internete bağlanmaz. Hesap, reklam ve analiz yok."
		}
	}
};
function shotsFor(facts, lang) {
	return facts?.shots?.[lang] ?? facts?.shots?.en ?? [];
}
function pick(rec, lang) {
	return rec ? rec[lang] ?? rec.en : void 0;
}
var SIZE_OVERRIDES = app_sizes_default;
var PLAY_FACTS = play_facts_default;
/** Manual facts merged with the auto-synced Play data (scripts/sync-play.mjs). */
function effectiveApp(app) {
	const stored = STORE[app.slug] ?? { privacyUrl: `/privacy/${app.slug}` };
	const sized = SIZE_OVERRIDES[app.slug];
	const base = sized?.size ? {
		...stored,
		size: sized.size,
		sizeVersion: sized.sizeVersion || void 0
	} : stored;
	const play = PLAY_FACTS[app.slug];
	if (!play) return {
		app,
		facts: base
	};
	if (!play.listed) return {
		app: {
			...app,
			playStoreUrl: null
		},
		facts: base
	};
	const facts = {
		...base,
		soon: false,
		version: play.version ?? base.version,
		updated: play.updated ?? base.updated,
		minAndroid: play.minAndroid ?? base.minAndroid
	};
	if (base.sizeVersion && play.version && play.version !== base.sizeVersion) delete facts.size;
	return {
		app: {
			...app,
			playStoreUrl: play.playUrl ?? app.playStoreUrl
		},
		facts
	};
}
function playListed(slug) {
	return PLAY_FACTS[slug]?.listed;
}
//#endregion
export { loadHomeApps as a, syncStudioToGithub as c, shotsFor as i, pick as n, loadStudioBundle as o, playListed as r, recordHit as s, effectiveApp as t };
