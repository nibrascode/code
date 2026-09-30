//#region node_modules/.nitro/vite/services/ssr/assets/library-BCi3Gzk5.js
var LIBRARY = {
	resources: {
		title: "nav_resources",
		topics: [
			{
				slug: "pdf",
				label: "res_pdf"
			},
			{
				slug: "ereb-dili",
				label: "res_arabic"
			},
			{
				slug: "android",
				label: "res_android"
			},
			{
				slug: "fayl-aletleri",
				label: "res_files"
			},
			{
				slug: "tehsil",
				label: "res_edu"
			},
			{
				slug: "senedler",
				label: "res_docs"
			}
		]
	},
	guides: {
		title: "nav_guides",
		topics: [
			{
				slug: "pdf",
				label: "guide_pdf"
			},
			{
				slug: "android",
				label: "guide_android"
			},
			{
				slug: "ereb-dili",
				label: "guide_arabic"
			}
		]
	},
	programming: {
		title: "nav_programming",
		topics: [
			{
				slug: "python",
				label: "prog_python"
			},
			{
				slug: "javascript",
				label: "prog_javascript"
			},
			{
				slug: "java",
				label: "prog_java"
			},
			{
				slug: "csharp",
				label: "prog_csharp"
			},
			{
				slug: "typescript",
				label: "prog_typescript"
			},
			{
				slug: "html-css",
				label: "prog_html"
			},
			{
				slug: "sql",
				label: "prog_sql"
			}
		]
	}
};
function findTopic(section, slug) {
	return LIBRARY[section].topics.find((topic) => topic.slug === slug) ?? null;
}
//#endregion
export { findTopic as n, LIBRARY as t };
