import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Route$14 } from "./router-DKwsBi9E.mjs";
import { t as AppPrivacyView } from "./app-privacy-DeC_3tlB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-pdf-D9KchOeB.js
var import_jsx_runtime = require_jsx_runtime();
function NibrasPdfPrivacyPage() {
	const { privacy } = Route$14.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug: "nibras-pdf",
		rows: privacy
	});
}
//#endregion
export { NibrasPdfPrivacyPage as component };
