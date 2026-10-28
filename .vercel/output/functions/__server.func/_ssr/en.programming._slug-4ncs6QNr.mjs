import { i as isCourseHub, r as hubFor } from "./meta-Bb3__USb.mjs";
import { X as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { R as Route$39 } from "./router-Da_pLWIk.mjs";
import { a as PythonArticle, i as ProgrammingArticle, t as CodeSamplePage } from "./library-page-C46BmQQi.mjs";
import { n as CourseLesson, t as CourseHub } from "./course-page-KvwwJm5L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.programming._slug-4ncs6QNr.js
var import_jsx_runtime = require_jsx_runtime();
function LocaleRoute() {
	const { page, privacy, sample, course } = Route$39.useLoaderData();
	if (sample) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeSamplePage, { slug: sample });
	if (course) {
		const kind = hubFor(course.slug);
		return isCourseHub(course.slug) && kind ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseHub, { kind }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseLesson, {
			slug: course.slug,
			sections: course.sections
		});
	}
	if (!page) throw notFound();
	if (page.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, {
		privacy,
		title: page.title,
		sections: page.sections,
		bakedLang: "en"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		slug: page.slug,
		title: page.title,
		sections: page.sections
	});
}
//#endregion
export { LocaleRoute as component };
