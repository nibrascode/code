import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { a as searchPath, t as SEARCH } from "./search-pages-DC4DCEux.mjs";
import { i as comparePath, n as COMPARE_ITEMS, o as compareTopicPath, t as COMPARE } from "./learn-pages-BHxENIQ7.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Cr as BookOpen, Xt as ListChecks, in as Info, pn as GitCompare } from "../_libs/lucide-react.mjs";
import { Ln as InfoCard, Rn as InfoCards } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-pages-DXykNAXk.js
var import_jsx_runtime = require_jsx_runtime();
var PROG = {
	az: "Proqramlaşdırma",
	en: "Programming",
	tr: "Programlama",
	ar: "البرمجة",
	ru: "Программирование"
};
function CompareIndex({ lang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), "Nibras Code"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: COMPARE.heading[lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: COMPARE.intro[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "faq-links",
				"aria-label": COMPARE.heading[lang],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: searchPath(lang, "soz"),
						children: SEARCH.soz.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: searchPath(lang, "xeta"),
						children: SEARCH.xeta.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: localeHref(lang, "/programming"),
						children: PROG[lang]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: COMPARE_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: GitCompare,
				title: item.title[lang],
				href: compareTopicPath(lang, item.slug)
			}, item.slug)) })
		]
	});
}
function CompareTopic({ lang, slug }) {
	const item = COMPARE_ITEMS.find((entry) => entry.slug === slug);
	if (!item) return null;
	const others = COMPARE_ITEMS.filter((entry) => entry.slug !== slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: comparePath(lang),
					children: COMPARE.heading[lang]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: item.title[lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: BookOpen,
					children: item.lead[lang].split(/\n\n+/).map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: ListChecks,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: item.points[lang].map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point)) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Info,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.note[lang] })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: others.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: GitCompare,
				title: entry.title[lang],
				href: compareTopicPath(lang, entry.slug)
			}, entry.slug)) })
		]
	});
}
//#endregion
export { CompareTopic as n, CompareIndex as t };
