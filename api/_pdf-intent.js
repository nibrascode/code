// Nibras AI × Nibras PDF. Server side of the PDF tools in chat.
// The server only CHOOSES the tool (intent detection, no model call) and returns a small `pdfAction`;
// the browser runs it (public/pdf-assets/runner/runner.js) so files never leave the device.
// PDF_TOOLS doubles as the function-calling schema if a model-driven choice is ever added.

export const PDF_TOOLS = {
  "pdf-image": { needs: "pdf", description: "Convert PDF pages to PNG/JPG images (ZIP)", params: ["format"] },
  "extract-text": { needs: "pdf", description: "Extract text from a PDF (automatic OCR for scans); copy, TXT, DOCX", params: ["forceOcr"] },
  ocr: { needs: "pdf|image", description: "OCR a scanned PDF or an image", params: [] },
  "pdf-word": { needs: "pdf", description: "Convert PDF to Word (DOCX)", params: [] },
  "word-pdf": { needs: "docx", description: "Convert DOCX to PDF", params: [] },
  "image-pdf": { needs: "image", description: "Images to one PDF", params: [] },
  merge: { needs: "pdf+", description: "Merge several PDFs", params: [] },
  split: { needs: "pdf", description: "Split a PDF into single pages (ZIP)", params: [] },
  "extract-pages": { needs: "pdf", description: "Keep only the given pages", params: ["range"] },
  "delete-pages": { needs: "pdf", description: "Remove the given pages", params: ["range"] },
  compress: { needs: "pdf", description: "Reduce PDF size", params: ["mode"] },
  rotate: { needs: "pdf", description: "Rotate pages", params: ["angle", "range"] },
  watermark: { needs: "pdf", description: "Add a text watermark", params: ["text", "range"] },
  protect: { needs: "pdf", description: "Password-protect a PDF (password asked in the browser)", params: [] },
  unlock: { needs: "pdf", description: "Remove a PDF password (password asked in the browser)", params: [] },
};

const LANGS = ["az", "en", "tr", "ar", "ru"];
const SITE = "https://nibrascode.com";
const norm = (s) => String(s || "").toLowerCase().normalize("NFC").replace(/[\u064B-\u065F\u0640]/g, "").replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x660));

// word stems per language group (az/tr/en/ru/ar mixed on purpose: users mix languages)
const R = {
  pdf: /\bpdf\b|\.pdf|пдф|بي دي اف|بي دي إف/i,
  docx: /\bdocx?\b|\bword\b|ворд|ورد/i,
  how: /^\s*(?:necə|nece|nasıl|nasil|how\b|как\b|كيف|what is|nədir|nedir|что такое|ما هو)/i,
  unlock: /(?:parol|şifr|sifr|password|пароль|парол|كلمة)[^.!?\n]{0,40}(?:sil|aç\b|ac\b|çıxar|cixar|götür|gotur|qaldır|qaldir|kaldır|kaldir|remove|unlock|decrypt|break|снять|убрать|сними|удал|إزالة|ازالة|فك|إلغاء|الغاء|احذف)|(?:sil|aç\b|çıxar|qaldır|kaldır|remove|unlock|decrypt|сними|убери|сними|удали|فك|ازل|أزل)[^.!?\n]{0,25}(?:parol|şifr|sifr|password|пароль|парол|كلمة)|\bunlock\b|\bdecrypt\b|расшифр/i,
  protect: /(?:parol|şifr|sifr|password|пароль|парол|كلمة\s*(?:المرور|سر))[^.!?\n]{0,40}(?:qoy|təyin|teyin|əlavə|elave|et\b|set|add|protect|encrypt|koru|ekle|belirle|поставь|защит|добав|установ|зашифр|حماية|احم|أضف|اضف|تشفير|ضع)|(?:qoru|qoruyun|protect|encrypt|şifrele|sifrele|koru|защити|зашифруй|احم|شفر)\b/i,
  watermark: /watermark|su\s*nişan|su\s*nisan|filigran|водян|علامة\s*مائية|علامه\s*مائيه/i,
  merge: /birləşdir|birlesdir|birleşdir|birlestir|\bmerge\b|combine|\bjoin\b|объедин|склей|соедин|دمج|ادمج|ضم\b/i,
  extractPages: /(?:səhifə|sehife|page|pages|sayfa|страниц|стр\.|صفح)[^.!?\n]{0,30}(?:çıxar|cixar|ayır|ayir|ayrı|extract|keep|save|saxla|çıkar|cikar|kaydet|извлек|достань|оставь|вытащи|استخرج|استخراج|احتفظ)|(?:çıxar|cixar|extract|keep|çıkar|извлек|достань|вытащи|استخرج|احتفظ)[^.!?\n]{0,30}(?:səhifə|sehife|page|sayfa|страниц|стр\.|صفح)/i,
  deletePages: /(?:səhifə|sehife|page|pages|sayfa|страниц|стр\.|صفح)[^.!?\n]{0,30}(?:sil\b|silin|delete|remove|kaldır|kaldir|удал|убер|احذف|حذف|ازل|أزل)|(?:sil\b|delete|remove|kaldır|kaldir|удали|убери|احذف|حذف|أزل)[^.!?\n]{0,30}(?:səhifə|sehife|page|sayfa|страниц|стр\.|صفح)/i,
  split: /\bböl\b|\bbol\b|bölün|ayır\b|ayir\b|\bsplit\b|separate pages|bölmek|\bböl|раздел|разбей|раздели|تقسيم|قسم|فصل/i,
  compress: /sıxışdır|sixisdir|sıxışdırma|kiçilt|kicilt|ölçü.{0,10}azalt|\bcompress|reduce\s+(?:the\s+)?(?:file\s+)?size|make.{0,12}smaller|sıkıştır|sikistir|küçült|kucult|сожми|сжать|сжим|уменьш|ضغط|اضغط|تصغير|صغر/i,
  rotate: /rotate|döndər|dondər|dondur|döndür|fırlat|firlat|çevir[^.!?\n]{0,20}(?:sola|sağa|saga|sol\b|sag\b|dərəcə|derece|90|180|270)|поверн|перевер|تدوير|أدر|ادر|دوّر|دور/i,
  text: /mətn|metn|\btext|metin|текст|نص|نصوص/i,
  grab: /çıxar|cixar|oxu\b|oxut|\bread\b|extract|\bget\b|copy|kopyala|\bal\b|çıkar|cikar|извлек|достань|получи|прочитай|скопир|استخرج|استخراج|انسخ|اقرأ|اقرا/i,
  ocr: /\bocr\b|skan\w*\s*oxu|tanı|tani|recogni[sz]e|распозна|تعرف|التعرف/i,
  scanned: /skan|scan|taranmış|taranmis|скан|ممسوح|مسح ضوئي/i,
  image: /şəkil|sekil|shekil|image|picture|photo|\bjpe?g\b|\bpng\b|görsel|gorsel|resim|fotoğraf|fotograf|картин|изображ|фото|صور/i,
  toPdf: /pdf\s*(?:-?(?:ə|e|a|ya|ye|yə)|\b)|в\s*pdf|الى\s*pdf|إلى\s*pdf|to\s*pdf|into\s*pdf|make\s*(?:a\s*)?pdf|pdf\s*(?:et|düzəlt|yap|yarat|çevir|qur)/i,
  toWord: /\bword\b|\bdocx\b|ворд|ورد/i,
};

function parseRange(raw) {
  const m = norm(raw).replace(/[–—−]/g, "-");
  const first = m.match(/(?:ilk|first|ilk\s+olan|первые|первых|الأولى|اول)\s+(\d{1,3})\s*(?:səhifə|sehife|page|sayfa|страниц|стр|صفح)?/u);
  if (first) return `1-${first[1]}`;
  if (/(?:ilk|first|первая|первую|первой|الأولى|الاولى)\s*(?:səhifə|sehife|page|sayfa|страниц\p{L}*|صفح\p{L}*)/u.test(m)) return "1";
  if (/(?:son|last|последн\p{L}+|الأخيرة|الاخيرة)\s*(?:səhifə|sehife|page|sayfa|страниц\p{L}*|صفح\p{L}*)/u.test(m)) return "last";
  const lead = m.match(/(?:səhifə\p{L}*|sehife\p{L}*|pages?|sayfa\p{L}*|страниц\p{L}*|стр\.?|صفح\p{L}*|\bp\.)\s*[:#]?\s*(\d{1,4}(?:\s*-\s*\d{1,4})?(?:\s*(?:,|;|،|and|və|ve|и|و)\s*\d{1,4}(?:\s*-\s*\d{1,4})?)*)/u);
  const trail = m.match(/(\d{1,4}(?:\s*-\s*\d{1,4})?(?:\s*(?:,|;|،|and|və|ve|и|و)\s*\d{1,4}(?:\s*-\s*\d{1,4})?)*)\s*(?:-?(?:ci|cı|cu|cü|inci|ıncı|nci|ncı|nd|rd|th|st))?\s*(?:səhifə|sehife|page|pages|sayfa|страниц|стр\.?|صفح)/u);
  const got = (lead || trail)?.[1];
  if (!got) return null;
  return got.replace(/\s*(?:,|;|،|and|və|ve|и|و)\s*/g, ",").replace(/\s+/g, "");
}

function parseParams(tool, message) {
  const m = norm(message);
  const p = {};
  if (tool === "extract-pages" || tool === "delete-pages" || tool === "rotate" || tool === "watermark") {
    const r = parseRange(message);
    if (r && r !== "last") p.range = r;
  }
  if (tool === "rotate") {
    if (/\b270\b|sola\b|\bsol\b|left|counter|против|влево|налево|يسار|اليسار/.test(m)) p.angle = 270;
    else if (/\b180\b|ters|upside|flip|перевер|عكس|half/.test(m)) p.angle = 180;
    else p.angle = 90;
  }
  if (tool === "pdf-image") p.format = /\bjpe?g\b|\bjpg\b/.test(m) ? "jpeg" : "png";
  if (tool === "compress") p.mode = /yüngül|yungul|hafif|light|лёгк|легк|خفيف/.test(m) ? "light" : "strong";
  if (tool === "watermark") {
    const q = String(message).match(/["“”«»„']([^"“”«»„']{1,60})["“”«»„']/) || String(message).match(/(?:watermark|su\s*nişanı?|filigran|водян\w+\s+знак|علامة\s*مائية)\s*[:\-–]\s*([^\n]{1,60})$/i);
    if (q) p.text = q[1].trim();
  }
  if (tool === "extract-text" && R.scanned.test(m)) p.forceOcr = false;
  return p;
}

function detect(message, files) {
  const m = norm(message);
  // what the message is about: files attached to it, else everything the chat remembers
  const scope = files.some((f) => f.attached) ? files.filter((f) => f.attached) : files;
  const has = { pdf: scope.some((f) => f.kind === "pdf"), image: scope.some((f) => f.kind === "image"), docx: scope.some((f) => f.kind === "docx") };
  const pdfWord = R.pdf.test(m);
  if (R.unlock.test(m)) return "unlock";
  if (R.protect.test(m)) return "protect";
  if (R.watermark.test(m)) return "watermark";
  if (R.merge.test(m) && (pdfWord || has.pdf)) return "merge";
  if (R.extractPages.test(m)) return "extract-pages";
  if (R.deletePages.test(m)) return "delete-pages";
  if (R.compress.test(m) && (pdfWord || has.pdf)) return "compress";
  if (R.rotate.test(m) && (pdfWord || has.pdf)) return "rotate";
  if (R.split.test(m) && (pdfWord || has.pdf)) return "split";
  if (has.docx && !has.pdf && (R.toPdf.test(m) || pdfWord)) return "word-pdf";
  if ((has.pdf || pdfWord) && R.toWord.test(m)) return has.docx && !has.pdf ? "word-pdf" : "pdf-word";
  if (R.ocr.test(m) && (has.pdf || has.image || pdfWord)) return "ocr";
  if (R.text.test(m) && R.grab.test(m) && (has.pdf || has.image || pdfWord)) return has.pdf || pdfWord ? "extract-text" : "ocr";
  if (has.image && !has.pdf && (pdfWord || R.toPdf.test(m))) return "image-pdf";
  if ((has.pdf || pdfWord) && R.image.test(m)) return "pdf-image";
  return null;
}

function pickTargets(tool, files) {
  const need = PDF_TOOLS[tool].needs;
  const ids = (arr) => arr.map((f) => f.id);
  const last = (arr) => arr.slice(-1);
  const att = files.filter((f) => f.attached);
  const of = (arr, k) => arr.filter((f) => f.kind === k);
  if (need === "pdf+") return ids(of(att, "pdf").length >= 2 ? of(att, "pdf") : of(files, "pdf"));
  if (need === "image") return ids(of(att, "image").length ? of(att, "image") : of(files, "image"));
  if (need === "docx") return ids(last(of(att, "docx").length ? of(att, "docx") : of(files, "docx")));
  if (need === "pdf|image") {
    if (of(att, "pdf").length) return ids(last(of(att, "pdf")));
    if (of(att, "image").length) return ids(of(att, "image"));
    if (of(files, "pdf").length) return ids(last(of(files, "pdf")));
    return ids(of(files, "image"));
  }
  return ids(last(of(att, "pdf").length ? of(att, "pdf") : of(files, "pdf")));
}

const SAY = {
  "pdf-image": { az: "PDF səhifələrini şəkillərə çevirirəm…", en: "Converting the PDF pages to images…", tr: "PDF sayfalarını görsellere dönüştürüyorum…", ar: "أحوّل صفحات PDF إلى صور…", ru: "Превращаю страницы PDF в изображения…" },
  "extract-text": { az: "Mətni çıxarıram (skan səhifələrdə avtomatik OCR)…", en: "Extracting the text (automatic OCR on scanned pages)…", tr: "Metni çıkarıyorum (taranmış sayfalarda otomatik OCR)…", ar: "أستخرج النص (OCR تلقائي للصفحات الممسوحة)…", ru: "Извлекаю текст (автоматический OCR для сканов)…" },
  ocr: { az: "OCR ilə mətni tanıyıram…", en: "Recognizing the text with OCR…", tr: "OCR ile metni tanıyorum…", ar: "أتعرّف على النص بـ OCR…", ru: "Распознаю текст через OCR…" },
  "pdf-word": { az: "PDF-i Word (DOCX) formatına çevirirəm…", en: "Converting the PDF to Word (DOCX)…", tr: "PDF'yi Word (DOCX) biçimine dönüştürüyorum…", ar: "أحوّل PDF إلى Word (DOCX)…", ru: "Конвертирую PDF в Word (DOCX)…" },
  "word-pdf": { az: "DOCX-i PDF-ə çevirirəm…", en: "Converting the DOCX to PDF…", tr: "DOCX'i PDF'ye dönüştürüyorum…", ar: "أحوّل DOCX إلى PDF…", ru: "Конвертирую DOCX в PDF…" },
  "image-pdf": { az: "Şəkilləri bir PDF-də toplayıram…", en: "Putting the images into one PDF…", tr: "Görselleri tek PDF'de topluyorum…", ar: "أجمع الصور في ملف PDF واحد…", ru: "Собираю изображения в один PDF…" },
  merge: { az: "PDF-ləri birləşdirirəm…", en: "Merging the PDFs…", tr: "PDF'leri birleştiriyorum…", ar: "أدمج ملفات PDF…", ru: "Объединяю PDF…" },
  split: { az: "PDF-i səhifələrə bölürəm…", en: "Splitting the PDF into pages…", tr: "PDF'yi sayfalara bölüyorum…", ar: "أقسّم PDF إلى صفحات…", ru: "Разделяю PDF на страницы…" },
  "extract-pages": { az: "Seçilmiş səhifələri ayırıram…", en: "Extracting the selected pages…", tr: "Seçilen sayfaları ayırıyorum…", ar: "أستخرج الصفحات المحددة…", ru: "Извлекаю выбранные страницы…" },
  "delete-pages": { az: "Seçilmiş səhifələri silirəm…", en: "Removing the selected pages…", tr: "Seçilen sayfaları siliyorum…", ar: "أحذف الصفحات المحددة…", ru: "Удаляю выбранные страницы…" },
  compress: { az: "PDF-i sıxışdırıram…", en: "Compressing the PDF…", tr: "PDF'yi sıkıştırıyorum…", ar: "أضغط PDF…", ru: "Сжимаю PDF…" },
  rotate: { az: "Səhifələri döndərirəm…", en: "Rotating the pages…", tr: "Sayfaları döndürüyorum…", ar: "أدوّر الصفحات…", ru: "Поворачиваю страницы…" },
  watermark: { az: "Su nişanı əlavə edirəm…", en: "Adding the watermark…", tr: "Filigran ekliyorum…", ar: "أضيف العلامة المائية…", ru: "Добавляю водяной знак…" },
  protect: { az: "PDF-i parolla qoruyacağam. Parolu aşağıdakı kartda yazın: o söhbətə və serverə getmir.", en: "I will password-protect the PDF. Enter the password in the card below: it never goes to the chat or the server.", tr: "PDF'yi parolayla koruyacağım. Parolu aşağıdaki kartta yazın: sohbete ve sunucuya gitmez.", ar: "سأحمي PDF بكلمة مرور. اكتبها في البطاقة أدناه: لا تُرسل إلى المحادثة ولا إلى الخادم.", ru: "Защищу PDF паролем. Введите пароль в карточке ниже: он не попадёт ни в чат, ни на сервер." },
  unlock: { az: "PDF-in parolunu götürürəm. Parolu aşağıdakı kartda yazın: o serverə getmir.", en: "I will remove the PDF password. Enter it in the card below: it never goes to the server.", tr: "PDF parolasını kaldıracağım. Parolu aşağıdaki kartta yazın: sunucuya gitmez.", ar: "سأزيل كلمة مرور PDF. اكتبها في البطاقة أدناه: لا تُرسل إلى الخادم.", ru: "Сниму пароль с PDF. Введите его в карточке ниже: он не уходит на сервер." },
};
const DONE = { az: "Hazırdır. Fayl cihazınızda işləndi, heç yerə yüklənmədi.", en: "Done. The file was processed on your device and not uploaded.", tr: "Hazır. Dosya cihazınızda işlendi, hiçbir yere yüklenmedi.", ar: "تم. عولج الملف على جهازك ولم يُرفع إلى أي مكان.", ru: "Готово. Файл обработан на вашем устройстве и никуда не загружался." };
const NEED = {
  az: (what) => `Bunun üçün ${what} lazımdır. Əlavə düyməsi (📎) ilə faylı seçin və ya bura sürüşdürün, sonra yenə yazın.`,
  en: (what) => `I need ${what} for that. Use the attach button (📎) or drop the file here, then ask again.`,
  tr: (what) => `Bunun için ${what} gerekli. Ekle düğmesiyle (📎) dosyayı seçin veya buraya sürükleyin, sonra tekrar yazın.`,
  ar: (what) => `أحتاج ${what} لذلك. استخدم زر الإرفاق (📎) أو اسحب الملف إلى هنا ثم اكتب طلبك مجدداً.`,
  ru: (what) => `Для этого нужен ${what}. Нажмите скрепку (📎) или перетащите файл сюда, затем повторите запрос.`,
};
const WHAT = {
  pdf: { az: "PDF fayl", en: "a PDF file", tr: "bir PDF dosyası", ar: "ملف PDF", ru: "PDF-файл" },
  "pdf+": { az: "ən az iki PDF fayl", en: "at least two PDF files", tr: "en az iki PDF dosyası", ar: "ملفا PDF على الأقل", ru: "минимум два PDF-файла" },
  image: { az: "şəkil", en: "an image", tr: "bir görsel", ar: "صورة", ru: "изображение" },
  docx: { az: "DOCX fayl", en: "a DOCX file", tr: "bir DOCX dosyası", ar: "ملف DOCX", ru: "файл DOCX" },
  "pdf|image": { az: "PDF və ya şəkil", en: "a PDF or an image", tr: "bir PDF veya görsel", ar: "ملف PDF أو صورة", ru: "PDF или изображение" },
};
const ASK_RANGE = {
  az: "Hansı səhifələr? Məsələn: «2-4, 7 səhifələri».",
  en: "Which pages? For example: “pages 2-4, 7”.",
  tr: "Hangi sayfalar? Örneğin: “2-4, 7. sayfalar”.",
  ar: "أي صفحات؟ مثال: «الصفحات 2-4، 7».",
  ru: "Какие страницы? Например: «страницы 2-4, 7».",
};
const MENU = {
  az: "Faylı aldım. Nə etməyi istəyirsiniz? Məsələn:\n• PDF-i şəkillərə çevir (PNG/JPG)\n• Mətni çıxar (skanda avtomatik OCR) və ya Word-ə çevir\n• Birləşdir / böl / 2-4 səhifələri çıxar / səhifələri sil\n• Sıxışdır / döndər / su nişanı əlavə et\n• Parol qoy və ya parolu götür\n• Şəkilləri PDF-ə çevir",
  en: "Got your file. What would you like to do? For example:\n• Convert the PDF to images (PNG/JPG)\n• Extract the text (automatic OCR on scans) or convert to Word\n• Merge / split / extract pages 2-4 / delete pages\n• Compress / rotate / add a watermark\n• Add or remove a password\n• Turn images into a PDF",
  tr: "Dosyayı aldım. Ne yapmak istersiniz? Örneğin:\n• PDF'yi görsellere dönüştür (PNG/JPG)\n• Metni çıkar (taramada otomatik OCR) veya Word'e çevir\n• Birleştir / böl / 2-4. sayfaları çıkar / sayfaları sil\n• Sıkıştır / döndür / filigran ekle\n• Parola ekle veya kaldır\n• Görselleri PDF'ye çevir",
  ar: "استلمت الملف. ماذا تريد أن أفعل؟ مثلاً:\n• تحويل PDF إلى صور (PNG/JPG)\n• استخراج النص (OCR تلقائي للمسح) أو التحويل إلى Word\n• دمج / تقسيم / استخراج الصفحات 2-4 / حذف صفحات\n• ضغط / تدوير / إضافة علامة مائية\n• إضافة كلمة مرور أو إزالتها\n• تحويل الصور إلى PDF",
  ru: "Файл получен. Что сделать? Например:\n• Превратить PDF в изображения (PNG/JPG)\n• Извлечь текст (на сканах автоматический OCR) или в Word\n• Объединить / разделить / извлечь страницы 2-4 / удалить страницы\n• Сжать / повернуть / добавить водяной знак\n• Поставить или снять пароль\n• Собрать изображения в PDF",
};
const TOOL_SLUG = { "pdf-image": "pdf-image", "extract-text": "pdf-ocr", ocr: "ocr", "pdf-word": "pdf-word", "word-pdf": "word-pdf", "image-pdf": "image-pdf", merge: "merge", split: "split", "extract-pages": "extract-pages", "delete-pages": "pages", compress: "compress", rotate: "rotate", watermark: "watermark", protect: "protect", unlock: "" };
const pagePath = (lang, tool) => `${SITE}${lang === "az" ? "" : `/${lang}`}/pdf${TOOL_SLUG[tool] ? `/${TOOL_SLUG[tool]}` : ""}`;

function cleanFiles(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((f) => f && typeof f.id === "string" && /^[\w-]{1,40}$/.test(f.id) && ["pdf", "image", "docx"].includes(f.kind))
    .slice(0, 30)
    .map((f) => ({ id: f.id, kind: f.kind, name: String(f.name || "").slice(0, 120), attached: f.attached === true }));
}

/** Returns null (not a PDF request) or { reply, pdfAction?, needFile?, lang }. */
export function pdfIntent(message, rawFiles, lang) {
  const L = LANGS.includes(lang) ? lang : "az";
  const files = cleanFiles(rawFiles);
  const attached = files.filter((f) => f.attached);
  const m = norm(message);
  if (!files.length && (R.how.test(m) || !R.pdf.test(m))) return null;
  const tool = detect(message, files);
  if (!tool) {
    // a file was just attached but the message names no tool: offer the menu (only for this message's attachments)
    if (attached.some((f) => f.kind === "pdf" || f.kind === "docx") && m.length < 80) return { reply: MENU[L], lang: L };
    return null;
  }
  if (!files.length && R.how.test(m)) return null;
  const def = PDF_TOOLS[tool];
  const targets = pickTargets(tool, files);
  const need = def.needs;
  const okTargets = need === "pdf+" ? targets.length >= 2 : targets.length >= 1;
  if (!okTargets) {
    return { reply: `${NEED[L](WHAT[need][L])}\n${pagePath(L, tool)}`, needFile: need, lang: L };
  }
  const params = parseParams(tool, message);
  if ((tool === "extract-pages" || tool === "delete-pages") && !params.range) {
    return { reply: ASK_RANGE[L], lang: L };
  }
  return {
    reply: SAY[tool][L],
    done: DONE[L],
    pdfAction: { tool, params, targets, lang: L },
    lang: L,
  };
}
