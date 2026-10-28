import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { nt as Route$58 } from "./router-Da_pLWIk.mjs";
import { n as CompareTopic } from "./learn-pages-DXykNAXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ar.muqayise._slug-I5fexZnr.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { lang, item } = Route$58.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareTopic, {
		lang,
		slug: item.slug
	});
}
//#endregion
export { Page as component };
