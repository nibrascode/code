import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { xt as Route$160 } from "./router-Da_pLWIk.mjs";
import { t as AppPrivacyView } from "./app-privacy-BKW7NNSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-pdf-DXsVy5In.js
var import_jsx_runtime = require_jsx_runtime();
function NibrasPdfPrivacyPage() {
	const { privacy } = Route$160.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug: "nibras-pdf",
		rows: privacy
	});
}
//#endregion
export { NibrasPdfPrivacyPage as component };
