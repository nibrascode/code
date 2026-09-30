import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { f as Route$13 } from "./_ssr/router-BsTzU6cm.mjs";
import { t as AppPrivacyView } from "./_ssr/app-privacy-Dw3VW4Pn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DokNVjQw.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyByApp() {
	const { slug } = Route$13.useParams();
	const { privacy } = Route$13.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug,
		rows: privacy
	});
}
//#endregion
export { PrivacyByApp as component };
