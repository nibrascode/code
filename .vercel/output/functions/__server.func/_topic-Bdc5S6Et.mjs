import { i as isCourseHub, r as hubFor } from "./_ssr/meta-Bb3__USb.mjs";
import { X as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { vt as Route$156 } from "./_ssr/router-Da_pLWIk.mjs";
import { a as PythonArticle, r as LibraryTopicPage, t as CodeSamplePage } from "./_ssr/library-page-C46BmQQi.mjs";
import { n as CourseLesson, t as CourseHub } from "./_ssr/course-page-KvwwJm5L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-Bdc5S6Et.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const { topic, privacy, sample, course, article } = Route$156.useLoaderData();
	if (sample) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeSamplePage, { slug: sample });
	if (course) {
		const kind = hubFor(course.slug);
		return isCourseHub(course.slug) && kind ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseHub, { kind }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseLesson, {
			slug: course.slug,
			sections: course.sections
		});
	}
	if (article?.slug === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PythonArticle, {
		privacy,
		title: article.title,
		sections: article.sections,
		bakedLang: "az"
	});
	if (!topic) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "programming",
		topic,
		rows: privacy,
		article
	});
}
//#endregion
export { TopicRoute as component };
