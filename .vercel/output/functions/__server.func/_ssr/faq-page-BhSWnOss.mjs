import { a as faqSlug, c as faqTopicPath, s as faqTopicHref } from "./faq-CS6D-sSC.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { or as CircleHelp } from "../_libs/lucide-react.mjs";
import { Ln as InfoCard, Rn as InfoCards } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-page-BhSWnOss.js
var import_jsx_runtime = require_jsx_runtime();
var RELATED = {
	az: "Rəsmi səhifə",
	en: "Official page",
	tr: "Resmi sayfa",
	ar: "الصفحة الرسمية",
	ru: "Официальная страница"
};
function FaqBody({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.a }),
		item.points?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "faq-points",
			children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
		}) : null,
		item.notes?.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "faq-note",
			children: note
		}, note))
	] });
}
function FaqView({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		lang: page.lang,
		dir: page.lang === "ar" ? "rtl" : "ltr",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "faq-links",
				"aria-label": page.heading,
				children: page.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					children: link.label
				}, link.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prog-sections",
				children: page.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					id: item.id,
					className: "prog-fold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: item.q }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prog-fold-body",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqBody, { item })
					})]
				}, item.id))
			})
		]
	});
}
function FaqTopic({ page, item }) {
	const related = faqTopicHref(item.id, page.lang);
	const others = page.items.filter((entry) => entry.id !== item.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		lang: page.lang,
		dir: page.lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: page.path,
					children: page.heading
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: item.q }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-lead",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqBody, { item })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "faq-links",
				"aria-label": page.heading,
				children: [related ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: related,
					...related.startsWith("http") ? {
						target: "_blank",
						rel: "noopener noreferrer"
					} : {},
					children: RELATED[page.lang]
				}) : null, page.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					children: link.label
				}, link.href))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: others.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: CircleHelp,
				title: entry.q,
				href: faqTopicPath(page.lang, faqSlug(entry.id))
			}, entry.id)) })
		]
	});
}
//#endregion
export { FaqView as n, FaqTopic as t };
