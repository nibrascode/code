import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-links-DdKXidFf.js
var import_jsx_runtime = require_jsx_runtime();
var HEAD = {
	az: "Sonra",
	en: "Next",
	tr: "Sonra",
	ar: "بعد ذلك",
	ru: "Дальше"
};
function NextLinks({ links }) {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "mb-8 flex flex-wrap items-center gap-2",
		"aria-label": HEAD[lang],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: HEAD[lang]
		}), links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: localeHref(lang, link.href),
			className: "rounded-full border border-white/15 px-3 py-1 text-sm",
			children: link.label[lang]
		}, link.href))]
	});
}
//#endregion
export { NextLinks as t };
