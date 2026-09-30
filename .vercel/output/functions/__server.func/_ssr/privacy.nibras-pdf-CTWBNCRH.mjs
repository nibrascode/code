import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Route$12 } from "./router-C7jubh50.mjs";
import { t as AppPrivacyView } from "./app-privacy-C3jZHXRz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-pdf-CTWBNCRH.js
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
