import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RU_RESOURCES, r as RESURSLAR } from "./ru-resources-CVCupnGQ.mjs";
import { x as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resurs-page-B3zv8mxG.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleBody({ title, paragraphs, steps, backLabel, moreLabel, others, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/resources",
					children: backLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
			paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: paragraph === paragraphs[0] ? "why-lead" : void 0,
				children: paragraph
			}, paragraph)),
			steps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "lib-steps",
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: moreLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lib-list",
				children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					params: { slug: item.slug },
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) }, item.slug))
			})] })
		]
	});
}
function ResursPageView({ page, title, paragraphs }) {
	const shown = paragraphs ?? page?.paragraphs ?? [];
	const heading = title || page?.title || "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
		title: heading,
		paragraphs: shown,
		steps: paragraphs ? void 0 : page?.steps,
		backLabel: "Resurslar",
		moreLabel: page?.slug === "pdf" ? "PDF haqqında yazılar" : "Digər PDF yazıları",
		others: RESURSLAR.filter((item) => item.slug !== page?.slug),
		to: "/resurslar/$slug"
	});
}
function RuResourcePage({ page, title, paragraphs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
		title: title || page?.title || "",
		paragraphs: paragraphs ?? page?.paragraphs ?? [],
		steps: paragraphs ? void 0 : page?.steps,
		backLabel: "Ресурсы",
		moreLabel: page?.slug === "pdf" ? "Статьи о PDF" : "Другие статьи о PDF",
		others: RU_RESOURCES.filter((item) => item.slug !== page?.slug),
		to: "/ru/resources/$slug"
	});
}
//#endregion
export { RuResourcePage as n, ResursPageView as t };
