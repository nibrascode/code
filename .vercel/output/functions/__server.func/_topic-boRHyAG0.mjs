import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { p as Route$16 } from "./_ssr/router-LMiSfxE3.mjs";
import { n as LibraryTopicPage } from "./_ssr/library-page-DGfdsBQB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-boRHyAG0.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const { topic, privacy } = Route$16.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "guides",
		topic,
		rows: privacy
	});
}
//#endregion
export { TopicRoute as component };
