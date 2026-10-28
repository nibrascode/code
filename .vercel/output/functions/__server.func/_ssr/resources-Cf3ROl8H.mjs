import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _t as Route$155 } from "./router-Da_pLWIk.mjs";
import { n as LibraryIndex } from "./library-page-C46BmQQi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-Cf3ROl8H.js
var import_jsx_runtime = require_jsx_runtime();
function ResourcesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryIndex, {
		section: "resources",
		rows: Route$155.useLoaderData().privacy
	});
}
//#endregion
export { ResourcesIndex as component };
