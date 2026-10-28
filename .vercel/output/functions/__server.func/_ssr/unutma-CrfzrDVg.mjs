import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Sr as Bookmark } from "../_libs/lucide-react.mjs";
import { Ht as Route$268, In as unutmaFromRow, Ln as InfoCard, Rn as InfoCards } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unutma-CrfzrDVg.js
var import_jsx_runtime = require_jsx_runtime();
function UnutmaPage() {
	const { lang } = useI18n();
	const row = Route$268.useLoaderData().privacy.find((item) => item.slug === "unutma" && item.lang === lang);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: copy.notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Bookmark,
				muted: String(index + 1).padStart(2, "0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: note })
			}, note)) })
		]
	});
}
//#endregion
export { UnutmaPage as component };
