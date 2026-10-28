import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { Ct as Route$162 } from "./_ssr/router-Da_pLWIk.mjs";
import { t as AppPrivacyView } from "./_ssr/app-privacy-BKW7NNSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BD1TlJRe.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyByApp() {
	const { slug } = Route$162.useParams();
	const { privacy } = Route$162.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug,
		rows: privacy
	});
}
//#endregion
export { PrivacyByApp as component };
