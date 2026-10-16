import type { Lang } from "@/lib/i18n";

export type Dict = {
  title: string; lead: string; toolsHeading: string; back: string; appPage: string; privacy: string; privateNote: string;
  pickPdf: string; pickPdfs: string; pickImages: string; pickDocx: string; dropHint: string; add: string; remove: string;
  run: string; working: string; cancel: string; done: string; download: string; downloadZip: string; share: string; copy: string; copied: string; clear: string;
  pages: string; size: string; before: string; after: string; saved: string; larger: string;
  errNotPdf: string; errLocked: string; errFailed: string; errNoFile: string; errNeedTwo: string; errNoSel: string; errPwdShort: string; errPwdMismatch: string;
  errNoText: string; errBadRange: string; errNotDocx: string; errCamera: string; errNoSign: string; errNoImages: string;
  pageSize: string; fit: string; quality: string; qHigh: string; qBalanced: string; qSmall: string; format: string;
  mode: string; modeLight: string; modeStrong: string; modeHint: string;
  rotLeft: string; rotRight: string; rot180: string; pagesScope: string; scopeAll: string; scopeRange: string; rangePlaceholder: string;
  password: string; confirm: string; protectNote: string; wmText: string; wmDefault: string; position: string;
  ocrLang: string; textResult: string; noTextHint: string; page: string;
  drawSign: string; signHint: string; signSize: string; signPage: string; signClear: string;
  camStart: string; capture: string; shots: string; camHint: string; takePhoto: string;
  writePlaceholder: string; docTitle: string; fontSize: string; align: string; left: string; center: string; right: string; bold: string; margins: string; pageNumbers: string;
  batchOp: string; opCompress: string; opRotate: string; opWatermark: string; opSplit: string;
  selectAll: string; selectNone: string; selected: string; deleteMark: string; moveLeft: string; moveRight: string; deleted: string; pagesHint: string; extractHint: string;
  zoom: string; unlock: string; unlockHint: string; wordNote: string; strongNote: string; ocrWorking: string; ocrFirst: string; textOnly: string; nPages: (n: number) => string;
  open: string; restoredDraft: string;
};

const en: Dict = {
  title: "Nibras PDF", lead: "19 PDF tools in your browser: merge, split, compress, convert, sign, protect and more. Free, no account.",
  toolsHeading: "What do you want to do?", back: "All tools", appPage: "Android app", privacy: "Privacy", privateNote: "Files are processed on your device and are not uploaded.",
  pickPdf: "Choose a PDF", pickPdfs: "Choose PDFs", pickImages: "Choose images", pickDocx: "Choose a DOCX file", dropHint: "or drop it here", add: "Add more", remove: "Remove",
  run: "Start", working: "Working…", cancel: "Cancel", done: "Done", download: "Download", downloadZip: "Download all (ZIP)", share: "Share", copy: "Copy", copied: "Copied.", clear: "Clear",
  pages: "pages", size: "Size", before: "Before", after: "After", saved: "Saved", larger: "The result was not smaller, so the original is kept.",
  errNotPdf: "This file is not a valid PDF.", errLocked: "This PDF is password-protected. Remove the password first.", errFailed: "The operation failed. Try another file.", errNoFile: "Choose a file first.", errNeedTwo: "Choose at least two PDFs.",
  errNoSel: "Select at least one page.", errPwdShort: "Use a password of at least 4 characters.", errPwdMismatch: "The passwords do not match.",
  errNoText: "No text was found.", errBadRange: "Invalid page range. Example: 1-3, 5", errNotDocx: "This is not a valid DOCX file.", errCamera: "Camera is not available. Use Choose images instead.", errNoSign: "Draw your signature first.", errNoImages: "Add at least one image.",
  pageSize: "Page size", fit: "Fit to image", quality: "Image quality", qHigh: "High quality", qBalanced: "Balanced", qSmall: "Small file", format: "Format",
  mode: "Method", modeLight: "Light (keeps text)", modeStrong: "Strong (renders pages as images)", modeHint: "Light only re-saves the file. Strong gives much smaller files for scans.",
  rotLeft: "Left 90°", rotRight: "Right 90°", rot180: "180°", pagesScope: "Pages", scopeAll: "All pages", scopeRange: "Selected pages", rangePlaceholder: "1-3, 5",
  password: "Password", confirm: "Repeat password", protectNote: "AES-128 encryption. Keep the password: it cannot be recovered.", wmText: "Watermark text", wmDefault: "NIBRAS PDF", position: "Position",
  ocrLang: "Text language", textResult: "Recognized text", noTextHint: "No selectable text found. Use OCR PDF for scanned files.", page: "Page",
  drawSign: "Draw your signature", signHint: "Click the page to place the signature.", signSize: "Signature size", signPage: "Page", signClear: "Erase",
  camStart: "Open camera", capture: "Capture", shots: "Shots", camHint: "Point the camera at the document and capture each page.", takePhoto: "Take photo",
  writePlaceholder: "Write your text here…", docTitle: "Title (optional)", fontSize: "Font size", align: "Alignment", left: "Left", center: "Center", right: "Right", bold: "Bold", margins: "Margins", pageNumbers: "Page numbers",
  batchOp: "Operation", opCompress: "Compress", opRotate: "Rotate 90°", opWatermark: "Add watermark", opSplit: "Split into pages",
  selectAll: "Select all", selectNone: "Clear selection", selected: "selected", deleteMark: "Delete", moveLeft: "Move earlier", moveRight: "Move later", deleted: "Deleted", pagesHint: "Mark pages to delete and move pages to reorder.", extractHint: "Tap pages to select them.",
  zoom: "Zoom", unlock: "Unlock", unlockHint: "This PDF needs a password.", wordNote: "Text and line breaks are converted. Images and complex layout are not.", strongNote: "Text in the result will not be selectable.",
  ocrWorking: "Recognizing text…", ocrFirst: "The first run loads the language data (a few MB).", textOnly: "Text only: the layout of the DOCX is not reproduced.", nPages: (n) => `${n} pages`,
  open: "Open", restoredDraft: "Draft restored.",
};

const az: Dict = {
  title: "Nibras PDF", lead: "Brauzerdə 19 PDF aləti: birləşdir, böl, sıxışdır, çevir, imzala, qoru və daha çoxu. Pulsuz, hesabsız.",
  toolsHeading: "Nə etmək istəyirsiniz?", back: "Bütün alətlər", appPage: "Android tətbiqi", privacy: "Məxfilik", privateNote: "Fayllar cihazınızda emal olunur və yüklənmir.",
  pickPdf: "PDF seçin", pickPdfs: "PDF-ləri seçin", pickImages: "Şəkilləri seçin", pickDocx: "DOCX faylı seçin", dropHint: "və ya bura buraxın", add: "Əlavə et", remove: "Sil",
  run: "Başla", working: "İşlənir…", cancel: "Ləğv et", done: "Hazırdır", download: "Yüklə", downloadZip: "Hamısını yüklə (ZIP)", share: "Paylaş", copy: "Kopyala", copied: "Kopyalandı.", clear: "Təmizlə",
  pages: "səhifə", size: "Ölçü", before: "Əvvəl", after: "Sonra", saved: "Qənaət", larger: "Nəticə kiçik olmadı, ona görə orijinal saxlanıldı.",
  errNotPdf: "Bu fayl düzgün PDF deyil.", errLocked: "Bu PDF parolla qorunur. Əvvəlcə parolu götürün.", errFailed: "Əməliyyat alınmadı. Başqa fayl yoxlayın.", errNoFile: "Əvvəlcə fayl seçin.", errNeedTwo: "Ən azı iki PDF seçin.",
  errNoSel: "Ən azı bir səhifə seçin.", errPwdShort: "Parol ən azı 4 simvol olsun.", errPwdMismatch: "Parollar eyni deyil.",
  errNoText: "Mətn tapılmadı.", errBadRange: "Səhifə aralığı səhvdir. Nümunə: 1-3, 5", errNotDocx: "Bu düzgün DOCX faylı deyil.", errCamera: "Kamera açılmadı. Əvəzinə «Şəkilləri seçin» istifadə edin.", errNoSign: "Əvvəlcə imzanızı çəkin.", errNoImages: "Ən azı bir şəkil əlavə edin.",
  pageSize: "Səhifə ölçüsü", fit: "Şəklə uyğun", quality: "Şəkil keyfiyyəti", qHigh: "Yüksək keyfiyyət", qBalanced: "Balanslı", qSmall: "Kiçik fayl", format: "Format",
  mode: "Üsul", modeLight: "Yüngül (mətn qalır)", modeStrong: "Güclü (səhifələr şəkil olur)", modeHint: "Yüngül üsul faylı yenidən yazır. Güclü üsul skan fayllarını xeyli kiçildir.",
  rotLeft: "Sola 90°", rotRight: "Sağa 90°", rot180: "180°", pagesScope: "Səhifələr", scopeAll: "Bütün səhifələr", scopeRange: "Seçilmiş səhifələr", rangePlaceholder: "1-3, 5",
  password: "Parol", confirm: "Parolu təkrarlayın", protectNote: "AES-128 şifrələmə. Parolu saxlayın: bərpa olunmur.", wmText: "Watermark mətni", wmDefault: "NIBRAS PDF", position: "Yer",
  ocrLang: "Mətn dili", textResult: "Tanınan mətn", noTextHint: "Seçilə bilən mətn tapılmadı. Skan fayllar üçün «PDF-dən mətn çıxar» istifadə edin.", page: "Səhifə",
  drawSign: "İmzanızı çəkin", signHint: "İmzanı yerləşdirmək üçün səhifəyə toxunun.", signSize: "İmza ölçüsü", signPage: "Səhifə", signClear: "Sil",
  camStart: "Kameranı aç", capture: "Çək", shots: "Çəkilişlər", camHint: "Kameranı sənədə tutun və hər səhifəni çəkin.", takePhoto: "Şəkil çək",
  writePlaceholder: "Mətni bura yazın…", docTitle: "Başlıq (istəyə bağlı)", fontSize: "Şrift ölçüsü", align: "Düzülüş", left: "Sol", center: "Mərkəz", right: "Sağ", bold: "Qalın", margins: "Boşluqlar", pageNumbers: "Səhifə nömrələri",
  batchOp: "Əməliyyat", opCompress: "Sıxışdır", opRotate: "90° döndər", opWatermark: "Watermark əlavə et", opSplit: "Səhifələrə böl",
  selectAll: "Hamısını seç", selectNone: "Seçimi təmizlə", selected: "seçilib", deleteMark: "Sil", moveLeft: "Əvvələ çək", moveRight: "Sonraya çək", deleted: "Silinib", pagesHint: "Silmək üçün səhifəni işarələyin, sıranı düymələrlə dəyişin.", extractHint: "Seçmək üçün səhifələrə toxunun.",
  zoom: "Miqyas", unlock: "Aç", unlockHint: "Bu PDF parol istəyir.", wordNote: "Mətn və sətir keçidləri çevrilir. Şəkillər və mürəkkəb düzülüş çevrilmir.", strongNote: "Nəticədə mətn seçilə bilməyəcək.",
  ocrWorking: "Mətn tanınır…", ocrFirst: "İlk işə salmada dil məlumatı yüklənir (bir neçə MB).", textOnly: "Yalnız mətn: DOCX-in düzülüşü saxlanmır.", nPages: (n) => `${n} səhifə`,
  open: "Aç", restoredDraft: "Qaralama bərpa olundu.",
};

const tr: Dict = {
  title: "Nibras PDF", lead: "Tarayıcıda 19 PDF aracı: birleştir, böl, sıkıştır, dönüştür, imzala, koru ve daha fazlası. Ücretsiz, hesapsız.",
  toolsHeading: "Ne yapmak istiyorsunuz?", back: "Tüm araçlar", appPage: "Android uygulaması", privacy: "Gizlilik", privateNote: "Dosyalar cihazınızda işlenir, yüklenmez.",
  pickPdf: "PDF seçin", pickPdfs: "PDF'leri seçin", pickImages: "Görselleri seçin", pickDocx: "DOCX dosyası seçin", dropHint: "veya buraya bırakın", add: "Ekle", remove: "Kaldır",
  run: "Başlat", working: "İşleniyor…", cancel: "İptal", done: "Hazır", download: "İndir", downloadZip: "Hepsini indir (ZIP)", share: "Paylaş", copy: "Kopyala", copied: "Kopyalandı.", clear: "Temizle",
  pages: "sayfa", size: "Boyut", before: "Önce", after: "Sonra", saved: "Kazanç", larger: "Sonuç daha küçük olmadı, bu yüzden orijinal korundu.",
  errNotPdf: "Bu dosya geçerli bir PDF değil.", errLocked: "Bu PDF parolalı. Önce parolayı kaldırın.", errFailed: "İşlem başarısız. Başka bir dosya deneyin.", errNoFile: "Önce dosya seçin.", errNeedTwo: "En az iki PDF seçin.",
  errNoSel: "En az bir sayfa seçin.", errPwdShort: "Parola en az 4 karakter olmalı.", errPwdMismatch: "Parolalar aynı değil.",
  errNoText: "Metin bulunamadı.", errBadRange: "Sayfa aralığı geçersiz. Örnek: 1-3, 5", errNotDocx: "Bu geçerli bir DOCX dosyası değil.", errCamera: "Kamera açılamadı. Bunun yerine «Görselleri seçin» kullanın.", errNoSign: "Önce imzanızı çizin.", errNoImages: "En az bir görsel ekleyin.",
  pageSize: "Sayfa boyutu", fit: "Görsele uydur", quality: "Görsel kalitesi", qHigh: "Yüksek kalite", qBalanced: "Dengeli", qSmall: "Küçük dosya", format: "Biçim",
  mode: "Yöntem", modeLight: "Hafif (metin kalır)", modeStrong: "Güçlü (sayfalar görsel olur)", modeHint: "Hafif yöntem dosyayı yeniden kaydeder. Güçlü yöntem taranmış dosyaları çok küçültür.",
  rotLeft: "Sola 90°", rotRight: "Sağa 90°", rot180: "180°", pagesScope: "Sayfalar", scopeAll: "Tüm sayfalar", scopeRange: "Seçili sayfalar", rangePlaceholder: "1-3, 5",
  password: "Parola", confirm: "Parolayı tekrarlayın", protectNote: "AES-128 şifreleme. Parolayı saklayın: geri alınamaz.", wmText: "Filigran metni", wmDefault: "NIBRAS PDF", position: "Konum",
  ocrLang: "Metin dili", textResult: "Tanınan metin", noTextHint: "Seçilebilir metin bulunamadı. Taranmış dosyalar için «PDF'den metin çıkar» kullanın.", page: "Sayfa",
  drawSign: "İmzanızı çizin", signHint: "İmzayı yerleştirmek için sayfaya dokunun.", signSize: "İmza boyutu", signPage: "Sayfa", signClear: "Sil",
  camStart: "Kamerayı aç", capture: "Çek", shots: "Çekimler", camHint: "Kamerayı belgeye tutun ve her sayfayı çekin.", takePhoto: "Fotoğraf çek",
  writePlaceholder: "Metninizi buraya yazın…", docTitle: "Başlık (isteğe bağlı)", fontSize: "Yazı boyutu", align: "Hizalama", left: "Sol", center: "Orta", right: "Sağ", bold: "Kalın", margins: "Kenar boşlukları", pageNumbers: "Sayfa numaraları",
  batchOp: "İşlem", opCompress: "Sıkıştır", opRotate: "90° döndür", opWatermark: "Filigran ekle", opSplit: "Sayfalara böl",
  selectAll: "Hepsini seç", selectNone: "Seçimi temizle", selected: "seçili", deleteMark: "Sil", moveLeft: "Öne al", moveRight: "Sona al", deleted: "Silindi", pagesHint: "Silmek için sayfayı işaretleyin, sırayı düğmelerle değiştirin.", extractHint: "Seçmek için sayfalara dokunun.",
  zoom: "Yakınlık", unlock: "Aç", unlockHint: "Bu PDF parola istiyor.", wordNote: "Metin ve satır sonları dönüştürülür. Görseller ve karmaşık düzen dönüştürülmez.", strongNote: "Sonuçtaki metin seçilemez olacak.",
  ocrWorking: "Metin tanınıyor…", ocrFirst: "İlk çalıştırmada dil verisi yüklenir (birkaç MB).", textOnly: "Yalnız metin: DOCX düzeni korunmaz.", nPages: (n) => `${n} sayfa`,
  open: "Aç", restoredDraft: "Taslak geri yüklendi.",
};

const ar: Dict = {
  title: "Nibras PDF", lead: "19 أداة PDF في المتصفح: دمج وتقسيم وضغط وتحويل وتوقيع وحماية والمزيد. مجاناً وبلا حساب.",
  toolsHeading: "ماذا تريد أن تفعل؟", back: "كل الأدوات", appPage: "تطبيق أندرويد", privacy: "الخصوصية", privateNote: "تُعالج الملفات على جهازك ولا تُرفع.",
  pickPdf: "اختر ملف PDF", pickPdfs: "اختر ملفات PDF", pickImages: "اختر الصور", pickDocx: "اختر ملف DOCX", dropHint: "أو أفلته هنا", add: "إضافة", remove: "حذف",
  run: "ابدأ", working: "جارٍ العمل…", cancel: "إلغاء", done: "تم", download: "تنزيل", downloadZip: "تنزيل الكل (ZIP)", share: "مشاركة", copy: "نسخ", copied: "تم النسخ.", clear: "مسح",
  pages: "صفحة", size: "الحجم", before: "قبل", after: "بعد", saved: "التوفير", larger: "لم تصبح النتيجة أصغر، لذا بقي الأصل.",
  errNotPdf: "هذا الملف ليس PDF صالحاً.", errLocked: "هذا PDF محمي بكلمة مرور. أزلها أولاً.", errFailed: "فشلت العملية. جرّب ملفاً آخر.", errNoFile: "اختر ملفاً أولاً.", errNeedTwo: "اختر ملفي PDF على الأقل.",
  errNoSel: "اختر صفحة واحدة على الأقل.", errPwdShort: "يجب ألا تقل كلمة المرور عن 4 أحرف.", errPwdMismatch: "كلمتا المرور غير متطابقتين.",
  errNoText: "لم يُعثر على نص.", errBadRange: "نطاق الصفحات غير صالح. مثال: 1-3, 5", errNotDocx: "هذا ليس ملف DOCX صالحاً.", errCamera: "الكاميرا غير متاحة. استخدم «اختر الصور».", errNoSign: "ارسم توقيعك أولاً.", errNoImages: "أضف صورة واحدة على الأقل.",
  pageSize: "حجم الصفحة", fit: "مطابق للصورة", quality: "جودة الصورة", qHigh: "جودة عالية", qBalanced: "متوازن", qSmall: "ملف صغير", format: "الصيغة",
  mode: "الطريقة", modeLight: "خفيفة (يبقى النص)", modeStrong: "قوية (تتحول الصفحات إلى صور)", modeHint: "الخفيفة تعيد حفظ الملف فقط. القوية تصغّر الملفات الممسوحة كثيراً.",
  rotLeft: "يساراً 90°", rotRight: "يميناً 90°", rot180: "180°", pagesScope: "الصفحات", scopeAll: "كل الصفحات", scopeRange: "صفحات محددة", rangePlaceholder: "1-3, 5",
  password: "كلمة المرور", confirm: "أعد كلمة المرور", protectNote: "تشفير AES-128. احتفظ بكلمة المرور: لا يمكن استرجاعها.", wmText: "نص العلامة المائية", wmDefault: "NIBRAS PDF", position: "الموضع",
  ocrLang: "لغة النص", textResult: "النص المستخرج", noTextHint: "لا يوجد نص قابل للتحديد. استخدم «استخراج النص من PDF» للملفات الممسوحة.", page: "صفحة",
  drawSign: "ارسم توقيعك", signHint: "اضغط على الصفحة لوضع التوقيع.", signSize: "حجم التوقيع", signPage: "صفحة", signClear: "مسح",
  camStart: "افتح الكاميرا", capture: "التقط", shots: "اللقطات", camHint: "وجّه الكاميرا إلى المستند والتقط كل صفحة.", takePhoto: "التقط صورة",
  writePlaceholder: "اكتب نصك هنا…", docTitle: "العنوان (اختياري)", fontSize: "حجم الخط", align: "المحاذاة", left: "يسار", center: "وسط", right: "يمين", bold: "عريض", margins: "الهوامش", pageNumbers: "أرقام الصفحات",
  batchOp: "العملية", opCompress: "ضغط", opRotate: "تدوير 90°", opWatermark: "إضافة علامة مائية", opSplit: "تقسيم إلى صفحات",
  selectAll: "تحديد الكل", selectNone: "إلغاء التحديد", selected: "محدد", deleteMark: "حذف", moveLeft: "قدّم", moveRight: "أخّر", deleted: "محذوفة", pagesHint: "علّم الصفحات لحذفها وغيّر الترتيب بالأزرار.", extractHint: "اضغط على الصفحات لتحديدها.",
  zoom: "تكبير", unlock: "فتح", unlockHint: "هذا PDF يحتاج كلمة مرور.", wordNote: "يُحوَّل النص وفواصل الأسطر. لا تُحوَّل الصور ولا التنسيق المعقد.", strongNote: "لن يكون النص في النتيجة قابلاً للتحديد.",
  ocrWorking: "جارٍ التعرف على النص…", ocrFirst: "التشغيل الأول يحمّل بيانات اللغة (بضعة ميغابايت).", textOnly: "نص فقط: لا يُحفظ تنسيق DOCX.", nPages: (n) => `${n} صفحة`,
  open: "فتح", restoredDraft: "تمت استعادة المسودة.",
};

const ru: Dict = {
  title: "Nibras PDF", lead: "19 PDF-инструментов в браузере: объединить, разделить, сжать, конвертировать, подписать, защитить и другое. Бесплатно, без аккаунта.",
  toolsHeading: "Что вы хотите сделать?", back: "Все инструменты", appPage: "Android-приложение", privacy: "Конфиденциальность", privateNote: "Файлы обрабатываются на вашем устройстве и не загружаются.",
  pickPdf: "Выберите PDF", pickPdfs: "Выберите PDF-файлы", pickImages: "Выберите изображения", pickDocx: "Выберите DOCX", dropHint: "или перетащите сюда", add: "Добавить", remove: "Убрать",
  run: "Начать", working: "Обработка…", cancel: "Отмена", done: "Готово", download: "Скачать", downloadZip: "Скачать всё (ZIP)", share: "Поделиться", copy: "Копировать", copied: "Скопировано.", clear: "Очистить",
  pages: "стр.", size: "Размер", before: "До", after: "После", saved: "Экономия", larger: "Результат не стал меньше, поэтому оставлен оригинал.",
  errNotPdf: "Это не корректный PDF.", errLocked: "PDF защищён паролем. Сначала снимите пароль.", errFailed: "Не удалось выполнить. Попробуйте другой файл.", errNoFile: "Сначала выберите файл.", errNeedTwo: "Выберите минимум два PDF.",
  errNoSel: "Выберите хотя бы одну страницу.", errPwdShort: "Пароль — не менее 4 символов.", errPwdMismatch: "Пароли не совпадают.",
  errNoText: "Текст не найден.", errBadRange: "Неверный диапазон страниц. Пример: 1-3, 5", errNotDocx: "Это не корректный DOCX.", errCamera: "Камера недоступна. Используйте «Выберите изображения».", errNoSign: "Сначала нарисуйте подпись.", errNoImages: "Добавьте хотя бы одно изображение.",
  pageSize: "Размер страницы", fit: "По размеру фото", quality: "Качество изображений", qHigh: "Высокое качество", qBalanced: "Сбалансированно", qSmall: "Малый файл", format: "Формат",
  mode: "Способ", modeLight: "Лёгкий (текст сохраняется)", modeStrong: "Сильный (страницы становятся картинками)", modeHint: "Лёгкий способ лишь пересохраняет файл. Сильный сильно уменьшает сканы.",
  rotLeft: "Влево 90°", rotRight: "Вправо 90°", rot180: "180°", pagesScope: "Страницы", scopeAll: "Все страницы", scopeRange: "Выбранные страницы", rangePlaceholder: "1-3, 5",
  password: "Пароль", confirm: "Повторите пароль", protectNote: "Шифрование AES-128. Сохраните пароль: восстановить его нельзя.", wmText: "Текст водяного знака", wmDefault: "NIBRAS PDF", position: "Положение",
  ocrLang: "Язык текста", textResult: "Распознанный текст", noTextHint: "Выделяемый текст не найден. Для сканов используйте «Текст из PDF (OCR)».", page: "Стр.",
  drawSign: "Нарисуйте подпись", signHint: "Нажмите на страницу, чтобы поставить подпись.", signSize: "Размер подписи", signPage: "Страница", signClear: "Стереть",
  camStart: "Открыть камеру", capture: "Снять", shots: "Снимки", camHint: "Наведите камеру на документ и снимите каждую страницу.", takePhoto: "Сделать фото",
  writePlaceholder: "Напишите текст здесь…", docTitle: "Заголовок (необязательно)", fontSize: "Размер шрифта", align: "Выравнивание", left: "Слева", center: "По центру", right: "Справа", bold: "Жирный", margins: "Поля", pageNumbers: "Номера страниц",
  batchOp: "Операция", opCompress: "Сжать", opRotate: "Повернуть на 90°", opWatermark: "Добавить водяной знак", opSplit: "Разделить на страницы",
  selectAll: "Выбрать все", selectNone: "Снять выбор", selected: "выбрано", deleteMark: "Удалить", moveLeft: "Раньше", moveRight: "Позже", deleted: "Удалено", pagesHint: "Отметьте страницы для удаления и меняйте порядок кнопками.", extractHint: "Нажимайте на страницы, чтобы выбрать.",
  zoom: "Масштаб", unlock: "Открыть", unlockHint: "Этому PDF нужен пароль.", wordNote: "Переносятся текст и разрывы строк. Изображения и сложная вёрстка — нет.", strongNote: "Текст в результате нельзя будет выделить.",
  ocrWorking: "Распознавание текста…", ocrFirst: "При первом запуске загружаются языковые данные (несколько МБ).", textOnly: "Только текст: вёрстка DOCX не сохраняется.", nPages: (n) => `${n} стр.`,
  open: "Открыть", restoredDraft: "Черновик восстановлен.",
};

export const COPY: Record<Lang, Dict> = { az, en, tr, ar, ru };
