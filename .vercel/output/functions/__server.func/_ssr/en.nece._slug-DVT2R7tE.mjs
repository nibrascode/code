import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { V as Route$42 } from "./router-Da_pLWIk.mjs";
import { n as SearchTopic } from "./search-pages-RDcG11zB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.nece._slug-DVT2R7tE.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { kind, lang, item } = Route$42.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTopic, {
		kind,
		lang,
		slug: item.slug
	});
}
//#endregion
export { Page as component };
