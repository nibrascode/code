import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as Route$25 } from "./router-Da_pLWIk.mjs";
import { n as CompareTopic } from "./learn-pages-DXykNAXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.muqayise._slug-BXArPRp9.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { lang, item } = Route$25.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareTopic, {
		lang,
		slug: item.slug
	});
}
//#endregion
export { Page as component };
