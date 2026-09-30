import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-qUzH4Rlj.mjs";
import { i as libParagraphs, o as savedLib } from "./library-admin-BS4_SRai.mjs";
import { n as RuResourcePage } from "./resurs-page-BP1rCb1Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.resources._slug-DtbIKVj5.js
var import_jsx_runtime = require_jsx_runtime();
function RuRoute() {
	const { page, privacy, id } = Route$1.useLoaderData();
	const saved = savedLib("resurs", id, "ru", privacy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuResourcePage, {
		page: page ?? void 0,
		title: saved?.title,
		paragraphs: saved ? libParagraphs(saved.body) : void 0
	});
}
//#endregion
export { RuRoute as component };
