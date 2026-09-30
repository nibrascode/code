import { c as PDF_LOCALE_PAIRS, l as RESURSLAR, p as findRuResource } from "./programming-DszT4X9x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-admin-B6I6iYIF.js
var EXTRA_RESOURCES = [
	page("ereb-dili", [
		"Ərəb dili",
		"Arabic",
		"Arapça",
		"العربية",
		"Арабский язык"
	]),
	page("android", [
		"Android",
		"Android",
		"Android",
		"أندرويد",
		"Android"
	]),
	page("fayl-aletleri", [
		"Fayl alətləri",
		"File tools",
		"Dosya araçları",
		"أدوات الملفات",
		"Файловые инструменты"
	]),
	page("tehsil", [
		"Təhsil",
		"Education",
		"Eğitim",
		"تعليم",
		"Обучение"
	]),
	page("senedler", [
		"Sənədlər",
		"Documents",
		"Belgeler",
		"مستندات",
		"Документы"
	])
];
var GUIDES = [
	page("pdf", [
		"PDF necə...",
		"How to PDF...",
		"PDF nasıl...",
		"كيف PDF...",
		"Как PDF..."
	]),
	page("android", [
		"Android-də necə...",
		"How to on Android...",
		"Android'de nasıl...",
		"كيف على أندرويد...",
		"Как на Android..."
	]),
	page("ereb-dili", [
		"Ərəb dili necə...",
		"How to Arabic...",
		"Arapça nasıl...",
		"كيف العربية...",
		"Как арабский..."
	])
];
function page(id, titles, body = {}) {
	return {
		id,
		titles: {
			az: titles[0],
			en: titles[1],
			tr: titles[2],
			ar: titles[3],
			ru: titles[4]
		},
		body
	};
}
function textOf(paragraphs, steps) {
	const parts = [...paragraphs];
	if (steps?.length) parts.push(steps.map((step, index) => `${index + 1}. ${step}`).join("\n"));
	return parts.join("\n\n");
}
function ruText(azSlug) {
	const pair = PDF_LOCALE_PAIRS.find((item) => item.az === azSlug);
	const page = pair ? findRuResource(pair.ru) : null;
	return page ? textOf(page.paragraphs, page.steps) : "";
}
var LIB_GROUPS = {
	resurs: {
		label: "Resurslar",
		pages: [...RESURSLAR.map((item) => page(item.slug, [
			item.title,
			item.seo.en.title.replace(/ — Nibras Code$/, ""),
			item.seo.tr.title.replace(/ — Nibras Code$/, ""),
			item.seo.ar.title.replace(/ — Nibras Code$/, ""),
			item.seo.ru.title.replace(/ — Nibras Code$/, "")
		], {
			az: textOf(item.paragraphs, item.steps),
			ru: ruText(item.slug)
		})), ...EXTRA_RESOURCES]
	},
	guide: {
		label: "Bələdçilər",
		pages: GUIDES
	}
};
function libSlug(group, id) {
	return `lib-${group}-${id}`;
}
function libId(slug, group) {
	const prefix = `lib-${group}-`;
	return slug.startsWith(prefix) ? slug.slice(prefix.length) : "";
}
function libDefaults(group, id, lang) {
	const known = LIB_GROUPS[group].pages.find((item) => item.id === id);
	return {
		title: known?.titles[lang] ?? "",
		body: known?.body[lang] ?? ""
	};
}
function savedLib(group, id, lang, rows) {
	return rows.find((row) => row.slug === libSlug(group, id) && row.lang === lang) ?? null;
}
function libParagraphs(body) {
	return body.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
}
function libItems(group, rows) {
	const ids = LIB_GROUPS[group].pages.map((item) => item.id);
	for (const row of rows) {
		const id = libId(row.slug, group);
		if (id && !ids.includes(id)) ids.push(id);
	}
	return ids.map((id) => {
		const known = LIB_GROUPS[group].pages.find((item) => item.id === id);
		return {
			id,
			title: rows.find((item) => libId(item.slug, group) === id && item.lang === "az")?.title.trim() || known?.titles.az || id,
			custom: !known
		};
	});
}
//#endregion
export { libSlug as a, libParagraphs as i, libDefaults as n, savedLib as o, libItems as r, LIB_GROUPS as t };
