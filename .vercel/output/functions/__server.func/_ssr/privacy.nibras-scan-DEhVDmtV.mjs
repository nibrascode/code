import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { yt as Route$158 } from "./router-Da_pLWIk.mjs";
import { t as AppPrivacyView } from "./app-privacy-BKW7NNSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-scan-DEhVDmtV.js
var import_jsx_runtime = require_jsx_runtime();
function NibrasScanPrivacyPage() {
	const { privacy } = Route$158.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug: "nibras-scan",
		rows: privacy
	});
}
//#endregion
export { NibrasScanPrivacyPage as component };
