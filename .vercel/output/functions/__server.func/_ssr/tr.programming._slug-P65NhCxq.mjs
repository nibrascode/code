import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-fULI7LCk.mjs";
import { r as ProgrammingArticle } from "./library-page-C381UYqV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tr.programming._slug-P65NhCxq.js
var import_jsx_runtime = require_jsx_runtime();
function LocaleRoute() {
	const page = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title,
		sections: page.sections
	});
}
//#endregion
export { LocaleRoute as component };
