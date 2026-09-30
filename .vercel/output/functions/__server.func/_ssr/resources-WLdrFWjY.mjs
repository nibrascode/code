import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Route$9 } from "./router-qUzH4Rlj.mjs";
import { t as LibraryIndex } from "./library-page-CClTw0f7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-WLdrFWjY.js
var import_jsx_runtime = require_jsx_runtime();
function ResourcesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryIndex, {
		section: "resources",
		rows: Route$9.useLoaderData().privacy
	});
}
//#endregion
export { ResourcesIndex as component };
