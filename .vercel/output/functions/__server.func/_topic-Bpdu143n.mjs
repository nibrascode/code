import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { p as Route$14 } from "./_ssr/router-cbdsvDLy.mjs";
import { n as LibraryTopicPage } from "./_ssr/library-page-D560u2MB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-Bpdu143n.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const { topic, privacy } = Route$14.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "guides",
		topic,
		rows: privacy
	});
}
//#endregion
export { TopicRoute as component };
