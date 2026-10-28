import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Route$3 } from "./router-Da_pLWIk.mjs";
import { t as ToolsPage } from "./tools-page-DdciRs3Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tr.tools._slug-BOHJjaFe.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { id, guide } = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPage, {
		lang: "tr",
		focus: id,
		guide
	});
}
//#endregion
export { Page as component };
