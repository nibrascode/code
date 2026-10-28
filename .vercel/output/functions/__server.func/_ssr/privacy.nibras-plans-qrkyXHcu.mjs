import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { bt as Route$159 } from "./router-Da_pLWIk.mjs";
import { t as AppPrivacyView } from "./app-privacy-BKW7NNSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-plans-qrkyXHcu.js
var import_jsx_runtime = require_jsx_runtime();
function NibrasPlansPrivacyPage() {
	const { privacy } = Route$159.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug: "nibras-plans",
		rows: privacy
	});
}
//#endregion
export { NibrasPlansPrivacyPage as component };
