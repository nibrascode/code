import { c as RESURSLAR, d as articlesForTopic, l as RU_RESOURCES, r as NIBRAS_PDF_GUIDE } from "./ru-resources-BOxHqTS-.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Ar as ArrowUpRight, Cr as BookOpen, in as Info } from "../_libs/lucide-react.mjs";
import { Ln as InfoCard, Rn as InfoCards, zn as splitSentences } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resurs-page-DKeBowa-.js
var import_jsx_runtime = require_jsx_runtime();
var BACK = {
	az: "Resurslar",
	en: "Resources",
	tr: "Kaynaklar",
	ar: "موارد",
	ru: "Ресурсы"
};
var MORE = {
	az: "Digər yazılar",
	en: "Other articles",
	tr: "Diğer yazılar",
	ar: "مقالات أخرى",
	ru: "Другие статьи"
};
function plainTitle(title) {
	return title.replace(/ — Nibras Code$/, "");
}
function ArticleBody({ title, paragraphs, steps, sections, backLabel, moreLabel, others, to, topic }) {
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
			paragraphs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: paragraphs.flatMap((paragraph, pi) => splitSentences(paragraph).map((sentence, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Info,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sentence })
			}, `p-${pi}-${i}`))) }) : null,
			steps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "lib-steps",
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
			}) : null,
			sections?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: sections.flatMap((section) => {
				const sentences = section.paragraphs.flatMap((paragraph) => splitSentences(paragraph));
				const cards = sentences.length ? sentences : [""];
				return cards.map((sentence, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
					icon: BookOpen,
					title: section.title,
					children: [sentence ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sentence }) : null, section.points && i === cards.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "lib-steps",
						children: section.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
					}) : null]
				}, `${section.title}-${i}`));
			}) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: moreLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lib-list",
				children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: topic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/resources/$topic/$article",
					params: {
						topic,
						article: item.slug
					},
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) : to === "/ru/resources/$slug" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ru/resources/$slug",
					params: { slug: item.slug },
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/resurslar/$slug",
					params: { slug: item.slug },
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) }, item.slug))
			})] })
		]
	});
}
function ResursPageView({ page, title, paragraphs }) {
	const { lang } = useI18n();
	const guide = page?.slug === "nibras-pdf" && !paragraphs ? NIBRAS_PDF_GUIDE[lang] : null;
	const seo = page?.seo[lang];
	const heading = title || guide?.title || (lang === "az" ? page?.title : seo ? plainTitle(seo.title) : page?.title) || "";
	const shown = paragraphs ?? guide?.lead ?? (lang === "az" || !seo ? page?.paragraphs : [seo.description]) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
		title: heading,
		paragraphs: shown,
		steps: paragraphs || lang !== "az" || guide ? void 0 : page?.steps,
		sections: guide?.sections,
		backLabel: BACK[lang],
		moreLabel: lang === "az" && page?.slug === "pdf" ? "PDF haqqında yazılar" : MORE[lang],
		others: RESURSLAR.filter((item) => item.slug !== page?.slug).map((item) => ({
			slug: item.slug,
			title: lang === "az" ? item.title : plainTitle(item.seo[lang].title)
		})),
		to: "/resurslar/$slug"
	});
}
function ResourceArticleView({ article, lang }) {
	const siblings = articlesForTopic(article.topic).filter((item) => item.slug !== article.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
		title: article.title[lang],
		paragraphs: article.paragraphs[lang],
		steps: article.steps?.[lang],
		backLabel: BACK[lang],
		moreLabel: MORE[lang],
		others: siblings.map((item) => ({
			slug: item.slug,
			title: item.title[lang]
		})),
		to: "/resources/$topic/$article",
		topic: article.topic
	});
}
function RuResourcePage({ page, title, paragraphs }) {
	const guide = page?.slug === "nibras-pdf" && !paragraphs ? NIBRAS_PDF_GUIDE.ru : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
		title: title || guide?.title || page?.title || "",
		paragraphs: paragraphs ?? guide?.lead ?? page?.paragraphs ?? [],
		steps: paragraphs || guide ? void 0 : page?.steps,
		sections: guide?.sections,
		backLabel: "Ресурсы",
		moreLabel: page?.slug === "pdf" ? "Статьи о PDF" : "Другие статьи о PDF",
		others: RU_RESOURCES.filter((item) => item.slug !== page?.slug),
		to: "/ru/resources/$slug"
	});
}
//#endregion
export { ResursPageView as n, RuResourcePage as r, ResourceArticleView as t };
