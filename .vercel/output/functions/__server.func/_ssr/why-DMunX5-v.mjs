import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DrTZEB-U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-DMunX5-v.js
var import_jsx_runtime = require_jsx_runtime();
var BELIEFS = [
	"why_b1",
	"why_b2",
	"why_b3",
	"why_b4",
	"why_b5",
	"why_b6"
];
var LINES = [
	"why_a1",
	"why_a2",
	"why_a3",
	"why_a4"
];
function WhyPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("why_kicker")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("why_btn") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: t("why_lead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_p1") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_p2") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("why_believe_h") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_believe_p") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-as",
					children: t("why_as")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: BELIEFS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t(key)] }, key)) })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("why_goal_h") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_goal_p1") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_goal_p2") })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("why_approach_h") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-lines",
				children: LINES.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(key) }, key))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-close",
				children: t("why_close")
			})
		]
	});
}
//#endregion
export { WhyPage as component };
