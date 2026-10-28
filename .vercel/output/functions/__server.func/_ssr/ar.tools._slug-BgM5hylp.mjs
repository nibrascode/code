import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { X as Route$52 } from "./router-Da_pLWIk.mjs";
import { t as ToolsPage } from "./tools-page-DdciRs3Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ar.tools._slug-BgM5hylp.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { id, guide } = Route$52.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPage, {
		lang: "ar",
		focus: id,
		guide
	});
}
//#endregion
export { Page as component };
