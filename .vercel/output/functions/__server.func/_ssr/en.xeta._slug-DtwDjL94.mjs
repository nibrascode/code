import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { P as Route$35 } from "./router-Da_pLWIk.mjs";
import { n as SearchTopic } from "./search-pages-RDcG11zB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.xeta._slug-DtwDjL94.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { kind, lang, item, body } = Route$35.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTopic, {
		kind,
		lang,
		slug: item.slug,
		body
	});
}
//#endregion
export { Page as component };
