import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-zd9ZyQUJ.mjs";
import { n as PDF_PRIVACY, t as ARABIC_PRIVACY } from "./pdf-privacy-yrRm7nDf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-privacy-DeC_3tlB.js
var import_jsx_runtime = require_jsx_runtime();
function RichText({ text }) {
	const parts = text.split(/(nibrascode@gmail\.com|nibrascode\.com)/gi);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => {
		const lower = part.toLowerCase();
		if (lower === "nibrascode@gmail.com") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "mailto:nibrascode@gmail.com",
			children: part
		}, index);
		if (lower === "nibrascode.com") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "https://nibrascode.com",
			children: part
		}, index);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
	}) });
}
var NAMES = {
	"nibras-arabic": "Nibras Arabic",
	"nibras-pdf": "Nibras PDF",
	"nibras-docs": "Nibras Docs",
	"nibras-plans": "Nibras Plans"
};
function AppPrivacyView({ slug, rows }) {
	const { lang } = useI18n();
	const live = rows.find((row) => row.slug === slug && row.lang === lang);
	const fallback = slug === "nibras-pdf" ? PDF_PRIVACY[lang] : slug === "nibras-arabic" ? ARABIC_PRIVACY : null;
	const copy = live ? {
		title: live.title,
		updated: live.updated_label,
		paragraphs: live.body.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean)
	} : fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page privacy-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), NAMES[slug] ?? slug]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: copy?.title || "Məxfilik siyasəti" }),
			copy?.updated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "privacy-updated",
				children: copy.updated
			}) : null,
			copy?.paragraphs.map((paragraph) => /^\d+\.\s/.test(paragraph) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: paragraph }, paragraph) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: paragraph }) }, paragraph))
		]
	});
}
//#endregion
export { AppPrivacyView as t };
