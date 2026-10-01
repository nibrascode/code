import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-page-CPEHgpe6.js
var import_jsx_runtime = require_jsx_runtime();
function FaqView({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), "Nibras Code"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: page.heading }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: page.intro
			}),
			page.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.a })] }, item.q))
		]
	});
}
//#endregion
export { FaqView as t };
