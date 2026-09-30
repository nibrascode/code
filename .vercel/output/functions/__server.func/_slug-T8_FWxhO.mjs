import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./_ssr/i18n-context-BrBUReEa.mjs";
import { c as Route$7 } from "./_ssr/router-BFD3_SUM.mjs";
import { i as libParagraphs, o as savedLib } from "./_ssr/library-admin-B6I6iYIF.mjs";
import { t as ResursPageView } from "./_ssr/resurs-page-DDp9NCSj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-T8_FWxhO.js
var import_jsx_runtime = require_jsx_runtime();
function ResursRoute() {
	const { page, privacy, slug } = Route$7.useLoaderData();
	const { lang } = useI18n();
	const saved = savedLib("resurs", slug, lang, privacy) ?? (page ? null : savedLib("resurs", slug, "az", privacy));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResursPageView, {
		page: page ?? void 0,
		title: saved?.title,
		paragraphs: saved ? libParagraphs(saved.body) : void 0
	});
}
//#endregion
export { ResursRoute as component };
