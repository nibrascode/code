import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { C as Target, er as Compass, sn as Heart } from "../_libs/lucide-react.mjs";
import { Ln as InfoCard, Rn as InfoCards } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-DzTwLqnx.js
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
					icon: Heart,
					title: t("why_believe_h"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_believe_p") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_as") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "faq-points",
							children: BELIEFS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(key) }, key))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
					icon: Target,
					title: t("why_goal_h"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_goal_p1") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("why_goal_p2") })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Compass,
					title: t("why_approach_h"),
					children: LINES.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(key) }, key))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-close",
				children: t("why_close")
			})
		]
	});
}
//#endregion
export { WhyPage as component };
