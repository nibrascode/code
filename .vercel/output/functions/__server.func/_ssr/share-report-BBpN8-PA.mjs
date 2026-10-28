import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Pn as FileDown, Qt as Link2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/share-report-BBpN8-PA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var T = {
	az: {
		link: "Hesabat linkini kopyala",
		copied: "Link kopyalandı",
		pdf: "Nəticəni PDF kimi endir"
	},
	en: {
		link: "Copy report link",
		copied: "Link copied",
		pdf: "Download result as PDF"
	},
	tr: {
		link: "Rapor linkini kopyala",
		copied: "Link kopyalandı",
		pdf: "Sonucu PDF olarak indir"
	},
	ar: {
		link: "انسخ رابط التقرير",
		copied: "تم نسخ الرابط",
		pdf: "نزّل النتيجة PDF"
	},
	ru: {
		link: "Копировать ссылку на отчёт",
		copied: "Ссылка скопирована",
		pdf: "Скачать результат в PDF"
	}
};
/** Share bar for check tools: a link that re-runs the same check, and print-to-PDF of the report. */
function ShareReport({ lang, params, className = "" }) {
	const t = T[lang] ?? T.en;
	const [done, setDone] = (0, import_react.useState)(false);
	const link = () => {
		const u = new URL(location.pathname, location.origin);
		for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
		return u.toString();
	};
	const copy = async () => {
		const href = link();
		try {
			if (navigator.share && matchMedia("(pointer: coarse)").matches) await navigator.share({
				url: href,
				title: document.title
			});
			else await navigator.clipboard.writeText(href);
		} catch {
			await navigator.clipboard.writeText(href).catch(() => {});
		}
		history.replaceState(null, "", href);
		setDone(true);
		setTimeout(() => setDone(false), 1600);
	};
	const btn = "inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm font-semibold hover:bg-white/10";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "nx-share-report flex flex-wrap gap-2 " + className,
		"data-testid": "share-report",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: btn,
			onClick: () => void copy(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-4" }),
				" ",
				done ? t.copied : t.link
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: btn,
			onClick: () => window.print(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }),
				" ",
				t.pdf
			]
		})]
	});
}
//#endregion
export { ShareReport as t };
