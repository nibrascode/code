import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { I as Route$37 } from "./router-Da_pLWIk.mjs";
import { t as ToolsPage } from "./tools-page-DdciRs3Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.tools._slug-CAhRV9ZX.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { id, guide } = Route$37.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPage, {
		lang: "en",
		focus: id,
		guide
	});
}
//#endregion
export { Page as component };
