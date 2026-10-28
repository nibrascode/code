import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { er as Compass, f as UserRound } from "../_libs/lucide-react.mjs";
import { An as aboutFromRow, Ln as InfoCard, Nn as founderCopy, Rn as InfoCards, sn as Route$308 } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DQy4QZ97.js
var import_jsx_runtime = require_jsx_runtime();
function AboutView({ privacy }) {
	const { lang } = useI18n();
	const row = privacy.find((item) => item.slug === "about" && item.lang === lang);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Compass,
				title: copy.approachTitle,
				children: copy.approach.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: UserRound,
				muted: founderCopy(lang).title,
				title: "Mahir Əliyev",
				children: founderCopy(lang).body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			})] }),
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
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutView, { privacy: Route$308.useLoaderData().privacy });
}
//#endregion
export { AboutView, AboutPage as component };
