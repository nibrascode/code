import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { u as Route$10 } from "./_ssr/router-BICY2qhT.mjs";
import { i as PythonArticle, n as LibraryTopicPage } from "./_ssr/library-page-BpSb6Pqj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-BK8KwFF8.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const { topic, privacy } = Route$10.useLoaderData();
	if (topic.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, { privacy });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "programming",
		topic
	});
}
//#endregion
export { TopicRoute as component };
