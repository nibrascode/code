import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { ar as GuideSection, x as Route$20 } from "./router-Da_pLWIk.mjs";
import { r as RuResourcePage } from "./resurs-page-DKeBowa-.mjs";
import { i as libParagraphs, o as savedLib } from "./library-admin-BpkK6xum.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.resources._slug-CdvcVuXj.js
var import_jsx_runtime = require_jsx_runtime();
function RuRoute() {
	const { page, privacy, id, guides } = Route$20.useLoaderData();
	const saved = savedLib("resurs", id, "ru", privacy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuResourcePage, {
		page: page ?? void 0,
		title: saved?.title,
		paragraphs: saved ? libParagraphs(saved.body) : void 0
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide: guides?.["ru"],
			lang: "ru"
		})
	})] });
}
//#endregion
export { RuRoute as component };
