import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Route$4 } from "./_ssr/router-DbS9gEQ6.mjs";
import { n as LibraryTopicPage } from "./_ssr/library-page-BS1iq3wA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-Dib9NzvD.js
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
