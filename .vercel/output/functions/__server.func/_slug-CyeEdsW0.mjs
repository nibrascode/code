import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { s as useI18n } from "./_ssr/i18n-context-D9YCCSnn.mjs";
import { c as Route$7 } from "./_ssr/router-CXpt8tCx.mjs";
import { i as libParagraphs, o as savedLib } from "./_ssr/library-admin-3rVzQv4I.mjs";
import { t as ResursPageView } from "./_ssr/resurs-page-B3zv8mxG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CyeEdsW0.js
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
