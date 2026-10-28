import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { ot as Route$63 } from "./router-Da_pLWIk.mjs";
import { t as FaqTopic } from "./faq-page-BhSWnOss.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ar.faq._slug-7dOlKyHI.js
var import_jsx_runtime = require_jsx_runtime();
function TopicPage() {
	const { page, item } = Route$63.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqTopic, {
		page,
		item
	});
}
//#endregion
export { TopicPage as component };
