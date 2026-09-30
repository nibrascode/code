import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Route$5 } from "./router-Dtsiv1Tl.mjs";
import { i as PythonArticle, r as ProgrammingArticle } from "./library-page-BfP5ZIf-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.programming._slug-Ct3vvbUd.js
var import_jsx_runtime = require_jsx_runtime();
function LocaleRoute() {
	const { page, privacy } = Route$5.useLoaderData();
	if (page.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, { privacy });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title,
		sections: page.sections
	});
}
//#endregion
export { LocaleRoute as component };
