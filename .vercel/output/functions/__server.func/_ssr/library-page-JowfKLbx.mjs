import { a as findProgramming } from "./programming-CXghkyLq.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DImZvOyv.mjs";
import { x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as LanguageSwitch, t as LIBRARY } from "./library-Du0OmG2U.mjs";
import { i as libParagraphs, o as savedLib, r as libItems } from "./library-admin-BhTSF4pY.mjs";
import { r as pythonSections } from "./lessons-YGBqSek4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-page-JowfKLbx.js
var import_jsx_runtime = require_jsx_runtime();
function topicLink(section, slug, lang) {
	if (section === "resources" && slug === "pdf") return {
		to: lang === "ru" ? "/ru/resources/$slug" : "/resurslar/$slug",
		params: { slug: "pdf" }
	};
	return {
		to: `/${section}/$topic`,
		params: { topic: slug }
	};
}
function LibraryIndex({ section, rows = [] }) {
	const { t, lang } = useI18n();
	const page = LIBRARY[section];
	const group = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
	const extras = group ? libItems(group, rows).filter((item) => item.custom) : [];
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t(page.title) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "lib-list",
				children: [page.topics.map((topic) => {
					const link = topicLink(section, topic.slug, lang);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: link.to,
						params: link.params,
						children: [t(topic.label), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					}) }, topic.slug);
				}), extras.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: section === "resources" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/resurslar/$slug",
					params: { slug: item.id },
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/guides/$topic",
					params: { topic: item.id },
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) }, item.id))]
			})
		]
	});
}
function ProgrammingArticle({ title, sections }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prog-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/programming",
						children: t("nav_programming")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prog-sections",
				children: sections?.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					id: item.id,
					className: "prog-fold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: item.title }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prog-fold-body",
						children: item.blocks?.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							block.heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: block.heading }) : null,
							block.paragraphs?.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)),
							block.list ? block.ordered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: block.list.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: block.list.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line)) }) : null,
							block.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								dir: "ltr",
								children: block.code
							}) : null,
							block.after?.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
						] }, block.heading ?? block.paragraphs?.[0] ?? block.code))
					})]
				}, item.id))
			})
		]
	});
}
function PythonArticle({ privacy }) {
	const { lang } = useI18n();
	const page = findProgramming("python");
	const title = page?.seo[lang]?.title.replace(/ — Nibras Code$/, "") ?? page?.title ?? "Python";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title,
		sections: pythonSections(lang, privacy)
	});
}
function LibraryTopicPage({ section, topic, rows = [] }) {
	const { t, lang } = useI18n();
	const page = section === "programming" && topic.slug !== "python" ? findProgramming(topic.slug) : null;
	if (page) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title,
		sections: page.sections
	});
	const group = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
	const saved = group ? savedLib(group, topic.slug, lang, rows) : null;
	const heading = saved?.title || t(topic.label);
	const paragraphs = saved ? libParagraphs(saved.body) : [];
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
					to: `/${section}`,
					children: t(LIBRARY[section].title)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: heading }),
			paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
		]
	});
}
//#endregion
export { PythonArticle as i, LibraryTopicPage as n, ProgrammingArticle as r, LibraryIndex as t };
