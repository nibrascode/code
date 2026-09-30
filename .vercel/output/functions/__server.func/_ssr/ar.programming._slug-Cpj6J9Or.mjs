import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Route$6 } from "./router-CO0mP3lI.mjs";
import { i as PythonArticle, r as ProgrammingArticle } from "./library-page-DlT0cuop.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ar.programming._slug-Cpj6J9Or.js
var import_jsx_runtime = require_jsx_runtime();
function LocaleRoute() {
	const { page, privacy } = Route$6.useLoaderData();
	if (page.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, { privacy });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title,
		sections: page.sections
	});
}
//#endregion
export { LocaleRoute as component };
