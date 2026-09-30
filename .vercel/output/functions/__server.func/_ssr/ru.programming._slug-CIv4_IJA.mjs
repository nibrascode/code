import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$2 } from "./router-BgYxfTN7.mjs";
import { i as PythonArticle, r as ProgrammingArticle } from "./library-page-C9Qc30hl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.programming._slug-CIv4_IJA.js
var import_jsx_runtime = require_jsx_runtime();
function LocaleRoute() {
	const { page, privacy } = Route$2.useLoaderData();
	if (page.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, { privacy });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		title: page.title,
		sections: page.sections
	});
}
//#endregion
export { LocaleRoute as component };
