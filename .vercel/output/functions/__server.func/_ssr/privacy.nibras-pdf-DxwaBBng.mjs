import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Route$12 } from "./router-b_2CH-M1.mjs";
import { t as AppPrivacyView } from "./app-privacy-DVwveepM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-pdf-DxwaBBng.js
var import_jsx_runtime = require_jsx_runtime();
function NibrasPdfPrivacyPage() {
	const { privacy } = Route$12.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug: "nibras-pdf",
		rows: privacy
	});
}
//#endregion
export { NibrasPdfPrivacyPage as component };
