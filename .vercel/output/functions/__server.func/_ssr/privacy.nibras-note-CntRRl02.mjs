import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { St as Route$161 } from "./router-Da_pLWIk.mjs";
import { t as AppPrivacyView } from "./app-privacy-BKW7NNSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy.nibras-note-CntRRl02.js
var import_jsx_runtime = require_jsx_runtime();
function NibrasNotePrivacyPage() {
	const { privacy } = Route$161.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPrivacyView, {
		slug: "nibras-note",
		rows: privacy
	});
}
//#endregion
export { NibrasNotePrivacyPage as component };
