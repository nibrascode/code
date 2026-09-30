import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as Route$10 } from "./_ssr/router-fULI7LCk.mjs";
import { n as LibraryTopicPage } from "./_ssr/library-page-C381UYqV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-B95PDICb.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const topic = Route$10.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "programming",
		topic
	});
}
//#endregion
export { TopicRoute as component };
