import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Route$11 } from "./router-CNZmy78B.mjs";
import { t as LibraryIndex } from "./library-page-JowfKLbx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-CiISi4uA.js
var import_jsx_runtime = require_jsx_runtime();
function ResourcesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryIndex, {
		section: "resources",
		rows: Route$11.useLoaderData().privacy
	});
}
//#endregion
export { ResourcesIndex as component };
