import { d as articlesForTopic } from "./_ssr/ru-resources-BOxHqTS-.mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./_ssr/i18n-context-BAcGBjAs.mjs";
import { En as FileText } from "./_libs/lucide-react.mjs";
import { Ln as InfoCard, M as Route$32, Rn as InfoCards, zn as splitSentences } from "./_ssr/router-Da_pLWIk.mjs";
import { r as LibraryTopicPage } from "./_ssr/library-page-C46BmQQi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-D9y27yXu.js
var import_jsx_runtime = require_jsx_runtime();
var MORE = {
	az: "Bu bölmədəki yazılar",
	en: "Articles in this section",
	tr: "Bu bölümdeki yazılar",
	ar: "مقالات هذا القسم",
	ru: "Статьи в этом разделе"
};
function TopicRoute() {
	const { topic, privacy } = Route$32.useLoaderData();
	const { lang } = useI18n();
	const articles = articlesForTopic(topic.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "resources",
		topic,
		rows: privacy
	}), articles.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-guide",
			lang,
			dir: lang === "ar" ? "rtl" : "ltr",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: MORE[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: articles.flatMap((article) => {
				const href = `${lang === "az" ? "" : `/${lang}`}/resources/${article.topic}/${article.slug}`;
				const text = [article.description[lang], article.paragraphs[lang][0]].filter(Boolean).join(" ");
				return splitSentences(text).map((sentence, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: FileText,
					title: article.title[lang],
					href,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sentence })
				}, `${article.slug}-${i}`));
			}) })]
		})
	}) : null] });
}
//#endregion
export { TopicRoute as component };
