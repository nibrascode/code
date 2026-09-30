import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-BzyiBZx0.mjs";
import { y as Route$23 } from "./router-BjPW94pq.mjs";
import { n as aboutFromRow } from "./pages-CxXBFHB2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-L4Fys55O.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { lang } = useI18n();
	const row = Route$23.useLoaderData().privacy.find((item) => item.slug === "about" && item.lang === lang);
	const copy = aboutFromRow(row, lang);
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
			copy.intro.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: paragraph === copy.intro[0] ? "why-lead" : void 0,
				children: paragraph
			}, paragraph)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.approachTitle }), copy.approach.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-success",
				children: copy.success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-verse",
				lang: "ar",
				dir: "rtl",
				children: copy.verse
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-verse-tr",
				children: copy.verseTr
			})
		]
	});
}
//#endregion
export { AboutPage as component };
