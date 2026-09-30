import { a as findProgramming, d as findProgrammingLocale } from "./programming-DszT4X9x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lessons-BvAObg-d.js
var LESSON_PREFIX = "lesson-python-";
var PYTHON_LESSONS = [
	{
		id: "nedir",
		titles: {
			az: "Python nədir?",
			en: "What is Python?",
			tr: "Python nedir?",
			ar: "ما هي بايثون؟",
			ru: "Что такое Python?"
		}
	},
	{
		id: "istifade",
		titles: {
			az: "Python nə üçün istifadə olunur?",
			en: "What is Python used for?",
			tr: "Python ne için kullanılır?",
			ar: "لماذا تُستخدم بايثون؟",
			ru: "Для чего используется Python?"
		}
	},
	{
		id: "oyrenmek",
		titles: {
			az: "Python necə öyrənilir?",
			en: "How do you learn Python?",
			tr: "Python nasıl öğrenilir?",
			ar: "كيف تُتعلَّم بايثون؟",
			ru: "Как изучают Python?"
		}
	},
	{
		id: "ne-etmek",
		titles: {
			az: "Python ilə nə etmək olar?",
			en: "What can you do with Python?",
			tr: "Python ile ne yapılabilir?",
			ar: "ماذا يمكن أن تفعل ببايثون؟",
			ru: "Что можно делать с Python?"
		}
	},
	{
		id: "javascript",
		titles: {
			az: "Python və JavaScript fərqi",
			en: "Python vs JavaScript",
			tr: "Python ve JavaScript farkı",
			ar: "الفرق بين بايثون وجافاسكريبت",
			ru: "Разница Python и JavaScript"
		}
	},
	{
		id: "java",
		titles: {
			az: "Python və Java fərqi",
			en: "Python vs Java",
			tr: "Python ve Java farkı",
			ar: "الفرق بين بايثون وجافا",
			ru: "Разница Python и Java"
		}
	},
	{
		id: "numuneler",
		titles: {
			az: "Python kod nümunələri",
			en: "Python code examples",
			tr: "Python kod örnekleri",
			ar: "أمثلة كود بايثون",
			ru: "Примеры кода Python"
		}
	},
	{
		id: "ustunluk",
		titles: {
			az: "Python-un üstünlükləri və çatışmazlıqları",
			en: "Advantages and limitations of Python",
			tr: "Python'un avantajları ve eksileri",
			ar: "مزايا بايثون وعيوبها",
			ru: "Преимущества и недостатки Python"
		}
	}
];
function lessonSlug(id) {
	return `${LESSON_PREFIX}${id}`;
}
function lessonId(slug) {
	return slug.startsWith("lesson-python-") ? slug.slice(14) : "";
}
function slugifyLesson(value) {
	const map = {
		ə: "e",
		ı: "i",
		ö: "o",
		ü: "u",
		ş: "s",
		ç: "c",
		ğ: "g",
		á: "a",
		é: "e",
		í: "i",
		ó: "o",
		ú: "u"
	};
	return value.trim().toLowerCase().replace(/[əıöüşçğáéíóú]/g, (char) => map[char] ?? char).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "sehife";
}
function pythonSections(lang, rows) {
	const saved = rows.filter((row) => row.slug.startsWith(LESSON_PREFIX));
	const azBaked = findProgramming("python")?.sections ?? [];
	const baked = lang === "az" ? azBaked : findProgrammingLocale(lang, "python")?.sections ?? [];
	const ids = [
		...PYTHON_LESSONS.map((item) => item.id),
		...azBaked.map((item) => item.id),
		...baked.map((item) => item.id)
	];
	for (const row of saved) {
		const id = lessonId(row.slug);
		if (id && !ids.includes(id)) ids.push(id);
	}
	const unique = [...new Set(ids)];
	unique.sort((a, b) => lessonSort(a, saved) - lessonSort(b, saved) || a.localeCompare(b));
	return unique.flatMap((id) => {
		const known = PYTHON_LESSONS.find((item) => item.id === id);
		const source = baked.find((item) => item.id === id);
		const row = saved.find((item) => lessonId(item.slug) === id && item.lang === lang);
		const title = row?.title.trim() || source?.title || known?.titles[lang] || known?.titles.az || id;
		const body = row?.body.trim() ?? "";
		if (body) {
			const paragraphs = body.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
			return [{
				id,
				title,
				blocks: paragraphs.length ? [{ paragraphs }] : void 0
			}];
		}
		if (source?.blocks?.length) return [{
			id,
			title: source.title,
			blocks: source.blocks
		}];
		if (!known && !source) return [];
		return [{
			id,
			title
		}];
	});
}
function lessonSort(id, rows) {
	const known = PYTHON_LESSONS.findIndex((item) => item.id === id);
	if (known >= 0) return known;
	const row = rows.find((item) => lessonId(item.slug) === id);
	const order = Number(row?.updated_label);
	return Number.isFinite(order) && order > 0 ? order : 500;
}
//#endregion
export { slugifyLesson as i, lessonSlug as n, pythonSections as r, PYTHON_LESSONS as t };
