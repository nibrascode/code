//#region node_modules/.nitro/vite/services/ssr/assets/qualityMsg-Kzdn4FXa.js
/** Messages for PDFs whose text layer is missing or unreadable (scans, fonts without ToUnicode). */
var MSG = {
	az: {
		empty: "Bu PDF-də seçilə bilən mətn yoxdur — çox güman skan edilmiş səhifələrdir. Mətni almaq üçün əvvəlcə OCR lazımdır.",
		garbage: "Bu PDF-in mətn qatı oxunmur: şriftdə hərflərin Unicode xəritəsi (ToUnicode) yoxdur və ya xarabdır, ona görə mətn qarışıq çıxır. Düzgün mətn üçün OCR lazımdır və ya PDF-i orijinal fayldan yenidən ixrac edin."
	},
	en: {
		empty: "This PDF has no selectable text — it is most likely scanned pages. OCR is needed to get the text.",
		garbage: "This PDF's text layer is unreadable: its font has no (or a broken) Unicode map (ToUnicode), so the text comes out scrambled. OCR is needed, or re-export the PDF from the original file."
	},
	tr: {
		empty: "Bu PDF'te seçilebilir metin yok — büyük olasılıkla taranmış sayfalar. Metin için OCR gerekir.",
		garbage: "Bu PDF'in metin katmanı okunamıyor: yazı tipinde Unicode eşlemesi (ToUnicode) yok veya bozuk, bu yüzden metin karışık çıkıyor. OCR gerekir ya da PDF'i orijinal dosyadan yeniden dışa aktarın."
	},
	ar: {
		empty: "لا يحتوي هذا الملف على نص قابل للتحديد، والأرجح أنه صفحات ممسوحة ضوئياً. يلزم التعرف الضوئي (OCR) لاستخراج النص.",
		garbage: "طبقة النص في هذا الملف غير مقروءة: الخط لا يحتوي على خريطة Unicode (ToUnicode) أو أنها تالفة، لذلك يخرج النص مشوشاً. يلزم التعرف الضوئي (OCR) أو أعد تصدير الملف من المستند الأصلي."
	},
	ru: {
		empty: "В этом PDF нет выделяемого текста — скорее всего, это сканы. Чтобы получить текст, нужно распознавание (OCR).",
		garbage: "Текстовый слой этого PDF нечитаем: у шрифта нет карты Unicode (ToUnicode) или она повреждена, поэтому текст выходит искажённым. Нужно OCR или повторный экспорт PDF из исходного файла."
	}
};
function qualityMessage(lang, q) {
	if (q === "ok") return "";
	return (MSG[lang] ?? MSG.en)[q];
}
//#endregion
export { qualityMessage };
