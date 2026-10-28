import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { W as Route$46, vn as ImageToolPage, yn as isImageTool } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.image_._tool-CCT62d68.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function Page() {
	const { tool } = Route$46.useParams();
	return isImageTool(tool) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageToolPage, { tool }) : null;
};
//#endregion
export { SplitComponent as component };
