import { n as findCourse } from "./meta-Bb3__USb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/load-dM_7jOIF.js
var BOOK = /* #__PURE__ */ Object.assign({
	"./book/html-basic-syntax.ts": () => import("./html-basic-syntax-BiSbLtVP.mjs"),
	"./book/html-debugging.ts": () => import("./html-debugging-IeL16DZH.mjs"),
	"./book/html-document-structure.ts": () => import("./html-document-structure-B-HhGhNw.mjs"),
	"./book/html-emphasis.ts": () => import("./html-emphasis-CTq2Ej0T.mjs"),
	"./book/html-forms.ts": () => import("./html-forms-DS0H1wNK.mjs"),
	"./book/html-headings-paragraphs.ts": () => import("./html-headings-paragraphs-D0aLem9j.mjs"),
	"./book/html-images.ts": () => import("./html-images-C8mWj8aj.mjs"),
	"./book/html-links.ts": () => import("./html-links-_9A-oOjj.mjs"),
	"./book/html-lists.ts": () => import("./html-lists-B6FHVqJI.mjs"),
	"./book/html-metadata.ts": () => import("./html-metadata-C-hC3lR5.mjs"),
	"./book/html-tables.ts": () => import("./html-tables-CJ0YGbWD.mjs"),
	"./book/python-basics.ts": () => import("./python-basics-DiSpAl72.mjs"),
	"./book/python-control-flow.ts": () => import("./python-control-flow-C0-TrPpu.mjs"),
	"./book/python-data-structures.ts": () => import("./python-data-structures-CptgSW-1.mjs"),
	"./book/python-exceptions.ts": () => import("./python-exceptions-N0IkUZXF.mjs"),
	"./book/python-first-steps.ts": () => import("./python-first-steps-BcnPWCfl.mjs"),
	"./book/python-functions.ts": () => import("./python-functions-DcMo_wG3.mjs"),
	"./book/python-input-output.ts": () => import("./python-input-output-Ju1LmCE7.mjs"),
	"./book/python-modules.ts": () => import("./python-modules-DUEbiptw.mjs"),
	"./book/python-oop.ts": () => import("./python-oop-C-pE6Gjf.mjs"),
	"./book/python-operators.ts": () => import("./python-operators-B7XL41e5.mjs"),
	"./book/python-problem-solving.ts": () => import("./python-problem-solving-ClxBn26F.mjs"),
	"./book/python-stdlib.ts": () => import("./python-stdlib-jTUggDCP.mjs")
});
function resolveOwn(sections, lang) {
	return sections.map((s) => ({
		id: s.id,
		title: s.title[lang],
		blocks: s.blocks.map((b) => ({
			...b.heading ? { heading: b.heading[lang] } : {},
			...b.paragraphs ? { paragraphs: b.paragraphs.map((p) => p[lang]) } : {},
			...b.list ? {
				list: b.list.map((p) => p[lang]),
				ordered: b.ordered
			} : {},
			...b.code ? { code: b.code } : {}
		}))
	}));
}
/** Lazy-loads the lesson body (a separate JS chunk per file). */
async function loadCourseSections(slug, lang) {
	const page = findCourse(slug);
	if (!page) return [];
	if (page.source === "own") return resolveOwn((await {
		python: () => import("./own-python-CvrHFAe4.mjs").then((mod) => mod.OWN_PYTHON),
		html: () => import("./own-html-DGnpGhbO.mjs").then((mod) => mod.OWN_HTML),
		javascript: () => import("./own-javascript-4iTYmqB4.mjs").then((mod) => mod.OWN_JS),
		css: () => import("./own-css-pzAkalLo.mjs").then((mod) => mod.OWN_CSS),
		sql: () => import("./own-sql-BTB5d0jq.mjs").then((mod) => mod.OWN_SQL)
	}[page.kind]())[page.file] ?? [], lang);
	const loader = BOOK[`./book/${page.kind}-${page.file}.ts`];
	if (!loader) return [];
	return resolveOwn((await loader()).default, lang);
}
//#endregion
export { loadCourseSections };
