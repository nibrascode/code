import { n as findCourse, s as pagesOf, t as HUBS } from "./meta-Bb3__USb.mjs";
import { b as programmingLocalePath } from "./ru-resources-BOxHqTS-.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Ar as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as ProgrammingArticle } from "./library-page-C46BmQQi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/course-page-KvwwJm5L.js
var import_jsx_runtime = require_jsx_runtime();
var UI = {
	author: {
		az: "Müəllif: Nibras Code",
		en: "Author: Nibras Code",
		tr: "Yazar: Nibras Code",
		ar: "المؤلف: Nibras Code",
		ru: "Автор: Nibras Code"
	},
	hubBack: {
		az: "Bütün dərslər",
		en: "All lessons",
		tr: "Tüm dersler",
		ar: "كل الدروس",
		ru: "Все уроки"
	},
	qa: {
		az: "Sual-cavab",
		en: "Questions and answers",
		tr: "Soru-cevap",
		ar: "أسئلة وأجوبة",
		ru: "Вопросы и ответы"
	},
	book: {
		az: "Dərs fəsilləri",
		en: "Lesson chapters",
		tr: "Ders bölümleri",
		ar: "فصول الدروس",
		ru: "Главы уроков"
	},
	prev: {
		az: "Əvvəlki",
		en: "Previous",
		tr: "Önceki",
		ar: "السابق",
		ru: "Назад"
	},
	next: {
		az: "Növbəti",
		en: "Next",
		tr: "Sonraki",
		ar: "التالي",
		ru: "Далее"
	}
};
function Item({ href, label, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
	}), desc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
		className: "lib-desc",
		children: desc
	}) : null] });
}
function CourseHub({ kind }) {
	const { lang } = useI18n();
	const hub = HUBS[kind];
	const pages = pagesOf(kind);
	const own = pages.filter((p) => p.source === "own");
	const book = pages.filter((p) => p.source !== "own");
	const group = (title, list) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "prog-fold-body",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "lib-list",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				href: programmingLocalePath(lang, p.slug),
				label: p.title[lang],
				desc: p.description[lang]
			}, p.slug))
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: hub.title[lang],
		sections: [],
		intro: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: hub.intro[lang] }),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [own.length ? group(UI.qa[lang], own) : null, book.length ? group(UI.book[lang], book) : null] })
	});
}
function CourseLesson({ slug, sections }) {
	const { lang } = useI18n();
	const page = findCourse(slug);
	const hub = HUBS[page.kind];
	const list = pagesOf(page.kind).filter((p) => p.source === page.source);
	const index = list.findIndex((p) => p.slug === slug);
	const prev = list[index - 1];
	const next = list[index + 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title[lang],
		sections,
		openAll: true,
		intro: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: page.description[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "prog-try",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: programmingLocalePath(lang, hub.slug),
				children: [
					UI.hubBack[lang],
					" · ",
					hub.title[lang]
				]
			})
		})] }),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "prog-license prog-author",
			children: UI.author[lang]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "lib-list course-nav",
			children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				href: programmingLocalePath(lang, prev.slug),
				label: `← ${UI.prev[lang]}: ${prev.title[lang]}`
			}) : null, next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				href: programmingLocalePath(lang, next.slug),
				label: `${UI.next[lang]}: ${next.title[lang]}`
			}) : null]
		})] })
	});
}
//#endregion
export { CourseLesson as n, CourseHub as t };
