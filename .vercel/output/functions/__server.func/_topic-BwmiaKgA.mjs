import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Route$4 } from "./_ssr/router-DghMRicM.mjs";
import { n as LibraryTopicPage } from "./_ssr/library-page-DD9_r1pf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-BwmiaKgA.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const { topic, privacy } = Route$4.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "resources",
		topic,
		rows: privacy
	});
}
//#endregion
export { TopicRoute as component };
