import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Route$12 } from "./router-DHFRK-V4.mjs";
import { t as AppPrivacyView } from "./app-privacy-Bg3nm8nN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-pdf-Cg2n-Yvx.js
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
