import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { U as Route$44 } from "./router-Da_pLWIk.mjs";
import { n as SearchTopic } from "./search-pages-RDcG11zB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.movzu._slug-DZPGWi2G.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { kind, lang, item } = Route$44.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTopic, {
		kind,
		lang,
		slug: item.slug
	});
}
//#endregion
export { Page as component };
