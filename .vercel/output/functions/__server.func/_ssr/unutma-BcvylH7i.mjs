import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DGwClzr6.mjs";
import { v as Route$19 } from "./router-BkPcp-t2.mjs";
import { s as unutmaFromRow } from "./pages-B2tFtcF8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unutma-BcvylH7i.js
var import_jsx_runtime = require_jsx_runtime();
function UnutmaPage() {
	const { lang } = useI18n();
	const row = Route$19.useLoaderData().privacy.find((item) => item.slug === "unutma" && item.lang === lang);
	const copy = unutmaFromRow(row, lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), copy.eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: copy.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-verse",
				lang: "ar",
				dir: "rtl",
				children: copy.verse
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "remind-list",
				children: copy.notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: note })] }, note))
			})
		]
	});
}
//#endregion
export { UnutmaPage as component };
