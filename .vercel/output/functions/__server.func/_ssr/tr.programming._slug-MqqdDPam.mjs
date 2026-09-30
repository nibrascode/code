import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-qUzH4Rlj.mjs";
import { i as PythonArticle, r as ProgrammingArticle } from "./library-page-CClTw0f7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tr.programming._slug-MqqdDPam.js
var import_jsx_runtime = require_jsx_runtime();
function LocaleRoute() {
	const { page, privacy } = Route.useLoaderData();
	if (page.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, { privacy });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title,
		sections: page.sections
	});
}
//#endregion
export { LocaleRoute as component };
