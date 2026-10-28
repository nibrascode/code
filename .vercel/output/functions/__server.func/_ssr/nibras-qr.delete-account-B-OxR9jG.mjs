import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { R as ShieldCheck, y as Trash2 } from "../_libs/lucide-react.mjs";
import { Ln as InfoCard, Rn as InfoCards } from "./router-Da_pLWIk.mjs";
import { n as QR_DELETE, r as groupPolicy } from "./app-privacy-BKW7NNSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nibras-qr.delete-account-B-OxR9jG.js
var import_jsx_runtime = require_jsx_runtime();
function linkify(text) {
	return text.split(/(nibrascode@gmail\.com)/gi).map((part, index) => part.toLowerCase() === "nibrascode@gmail.com" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "mailto:nibrascode@gmail.com?subject=Nibras%20QR%20account%20deletion",
		children: part
	}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index));
}
function NibrasQrDeleteAccountPage() {
	const { lang } = useI18n();
	const copy = lang === "az" ? QR_DELETE.az : QR_DELETE.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page privacy-page",
		lang: lang === "az" ? "az" : "en",
		dir: "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), "Nibras QR"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: copy.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "privacy-updated",
				children: copy.updated
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [groupPolicy(copy.paragraphs).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Trash2,
				title: g.title,
				children: g.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: linkify(paragraph) }, paragraph))
			}, (g.title ?? "") + i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: ShieldCheck,
				href: "/privacy/nibras-qr",
				title: lang === "az" ? "Məxfilik siyasəti — Nibras QR" : "Privacy policy — Nibras QR"
			})] })
		]
	});
}
//#endregion
export { NibrasQrDeleteAccountPage as component };
