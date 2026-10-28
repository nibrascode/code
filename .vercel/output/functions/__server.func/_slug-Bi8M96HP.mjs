import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./_ssr/i18n-context-BAcGBjAs.mjs";
import { ar as GuideSection, gt as Route$153 } from "./_ssr/router-Da_pLWIk.mjs";
import { n as ResursPageView } from "./_ssr/resurs-page-DKeBowa-.mjs";
import { i as libParagraphs, o as savedLib } from "./_ssr/library-admin-BpkK6xum.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Bi8M96HP.js
var import_jsx_runtime = require_jsx_runtime();
function ResursRoute() {
	const { page, privacy, slug, guides } = Route$153.useLoaderData();
	const { lang } = useI18n();
	const saved = savedLib("resurs", slug, lang, privacy) ?? (page ? null : savedLib("resurs", slug, "az", privacy));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResursPageView, {
		page: page ?? void 0,
		title: saved?.title,
		paragraphs: saved ? libParagraphs(saved.body) : void 0
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide: guides?.[lang],
			lang
		})
	})] });
}
//#endregion
export { ResursRoute as component };
