import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { f as Route$15 } from "./_ssr/router-LMiSfxE3.mjs";
import { t as AppPrivacyView } from "./_ssr/app-privacy-DeC_3tlB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D1ZbBXXC.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyByApp() {
	const { slug } = Route$15.useParams();
	const { privacy } = Route$15.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug,
		rows: privacy
	});
}
//#endregion
export { PrivacyByApp as component };
