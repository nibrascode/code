import { i as __toESM } from "../_runtime.mjs";
import { m as hrefForLang, n as LANG_META, t as LANGS } from "./programming-DwqnMd8d.mjs";
import { H as require_react, b as require_jsx_runtime, d as useRouterState, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DGwClzr6.mjs";
import { _ as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-DewU9mDX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LanguageSwitch() {
	const { lang, setLang, t } = useI18n();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const router = useRouter();
	const [open, setOpen] = (0, import_react.useState)(false);
	const rootRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		};
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	const choose = (code) => {
		setLang(code);
		const href = hrefForLang(pathname, code);
		if (href && href !== pathname) router.history.push(href);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "lang-menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "lang-trigger",
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			"aria-label": t("lang_label"),
			onClick: () => setOpen((value) => !value),
			children: [LANG_META[lang].label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("lang-chev", open && "is-open") })]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lang-pop",
			role: "listbox",
			"aria-label": t("lang_label"),
			children: LANGS.map((code) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "option",
					"aria-selected": lang === code,
					onClick: () => {
						choose(code);
						setOpen(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: LANG_META[code].label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: LANG_META[code].native })]
				}, code);
			})
		}) : null]
	});
}
var LIBRARY = {
	resources: {
		title: "nav_resources",
		topics: [
			{
				slug: "pdf",
				label: "res_pdf"
			},
			{
				slug: "ereb-dili",
				label: "res_arabic"
			},
			{
				slug: "android",
				label: "res_android"
			},
			{
				slug: "fayl-aletleri",
				label: "res_files"
			},
			{
				slug: "tehsil",
				label: "res_edu"
			},
			{
				slug: "senedler",
				label: "res_docs"
			}
		]
	},
	guides: {
		title: "nav_guides",
		topics: [
			{
				slug: "pdf",
				label: "guide_pdf"
			},
			{
				slug: "android",
				label: "guide_android"
			},
			{
				slug: "ereb-dili",
				label: "guide_arabic"
			}
		]
	},
	programming: {
		title: "nav_programming",
		topics: [
			{
				slug: "python",
				label: "prog_python"
			},
			{
				slug: "javascript",
				label: "prog_javascript"
			},
			{
				slug: "java",
				label: "prog_java"
			},
			{
				slug: "csharp",
				label: "prog_csharp"
			},
			{
				slug: "typescript",
				label: "prog_typescript"
			},
			{
				slug: "html-css",
				label: "prog_html"
			},
			{
				slug: "sql",
				label: "prog_sql"
			}
		]
	}
};
function findTopic(section, slug) {
	return LIBRARY[section].topics.find((topic) => topic.slug === slug) ?? null;
}
//#endregion
export { findTopic as i, LanguageSwitch as n, cn as r, LIBRARY as t };
