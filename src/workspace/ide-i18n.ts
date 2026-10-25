import type { Lang } from "@/lib/i18n";

const en = {
  design: "Design", code: "Code", previewMode: "Preview", files: "Files", publish: "Publish",
  explorer: "Explorer", search: "Search", settings: "Settings", newFile: "New file", newFolder: "New folder", folderName: "Folder name",
  searchPh: "Search in files", noMatch: "No matches", device: "Device", responsive: "Responsive", desktop: "Desktop", reload: "Reload",
  quick: "Quick actions", ask: "Type a command or text to find…", askHint: "Commands: run · zip · dev · apk · new about.html · line 20 · or any text to search the project. Works offline, no AI.",
  go: "Go", fontSize: "Font size", wrap: "Wrap long lines", autoRun: "Live preview while typing", saved: "Saved in this browser", ln: "Ln", col: "Col",
  close: "Close", unknown: "Not a command — showing search results.", found: "matches", opened: "Opened", live: "Live", console: "Console", clear: "Clear",
  publishDev: "Open live in Nibras Dev", publishApk: "Build Android APK", publishZip: "Download ZIP", template: "Add page", fmt: "Tidy indent",
};
export type IdeCopy = typeof en;

const az: IdeCopy = {
  design: "Dizayn", code: "Kod", previewMode: "Önizləmə", files: "Fayllar", publish: "Dərc et",
  explorer: "Fayllar", search: "Axtar", settings: "Ayarlar", newFile: "Yeni fayl", newFolder: "Yeni qovluq", folderName: "Qovluğun adı",
  searchPh: "Fayllarda axtar", noMatch: "Tapılmadı", device: "Cihaz", responsive: "Uyğunlaşan", desktop: "Kompüter", reload: "Yenilə",
  quick: "Sürətli əmrlər", ask: "Əmr və ya axtarılacaq mətn yazın…", askHint: "Əmrlər: run · zip · dev · apk · new about.html · line 20 · və ya layihədə axtarmaq üçün istənilən mətn. İnternetsiz işləyir, AI yoxdur.",
  go: "Get", fontSize: "Şrift ölçüsü", wrap: "Uzun sətirləri bük", autoRun: "Yazdıqca canlı önizləmə", saved: "Bu brauzerdə saxlanıb", ln: "Sətir", col: "Sütun",
  close: "Bağla", unknown: "Əmr deyil — axtarış nəticələri göstərilir.", found: "nəticə", opened: "Açıldı", live: "Canlı", console: "Konsol", clear: "Təmizlə",
  publishDev: "Nibras Dev-də canlı aç", publishApk: "Android APK düzəlt", publishZip: "ZIP endir", template: "Səhifə əlavə et", fmt: "Girintini düzəlt",
};
const tr: IdeCopy = {
  design: "Tasarım", code: "Kod", previewMode: "Önizleme", files: "Dosyalar", publish: "Yayınla",
  explorer: "Gezgin", search: "Ara", settings: "Ayarlar", newFile: "Yeni dosya", newFolder: "Yeni klasör", folderName: "Klasör adı",
  searchPh: "Dosyalarda ara", noMatch: "Sonuç yok", device: "Cihaz", responsive: "Esnek", desktop: "Masaüstü", reload: "Yenile",
  quick: "Hızlı işlemler", ask: "Komut ya da aranacak metin yazın…", askHint: "Komutlar: run · zip · dev · apk · new about.html · line 20 · ya da projede aramak için herhangi bir metin. Çevrimdışı çalışır, yapay zekâ yok.",
  go: "Git", fontSize: "Yazı boyutu", wrap: "Uzun satırları kaydır", autoRun: "Yazarken canlı önizleme", saved: "Bu tarayıcıda kayıtlı", ln: "Sat", col: "Süt",
  close: "Kapat", unknown: "Komut değil — arama sonuçları gösteriliyor.", found: "sonuç", opened: "Açıldı", live: "Canlı", console: "Konsol", clear: "Temizle",
  publishDev: "Nibras Dev'de canlı aç", publishApk: "Android APK yap", publishZip: "ZIP indir", template: "Sayfa ekle", fmt: "Girintiyi düzelt",
};
const ar: IdeCopy = {
  design: "تصميم", code: "كود", previewMode: "معاينة", files: "الملفات", publish: "نشر",
  explorer: "المستكشف", search: "بحث", settings: "الإعدادات", newFile: "ملف جديد", newFolder: "مجلد جديد", folderName: "اسم المجلد",
  searchPh: "ابحث في الملفات", noMatch: "لا نتائج", device: "الجهاز", responsive: "مرن", desktop: "حاسوب", reload: "تحديث",
  quick: "إجراءات سريعة", ask: "اكتب أمراً أو نصاً للبحث…", askHint: "الأوامر: run · zip · dev · apk · new about.html · line 20 · أو أي نص للبحث في المشروع. يعمل دون اتصال وبلا ذكاء اصطناعي.",
  go: "تنفيذ", fontSize: "حجم الخط", wrap: "لفّ الأسطر الطويلة", autoRun: "معاينة حيّة أثناء الكتابة", saved: "محفوظ في هذا المتصفح", ln: "سطر", col: "عمود",
  close: "إغلاق", unknown: "ليس أمراً — تُعرض نتائج البحث.", found: "نتيجة", opened: "فُتح", live: "مباشر", console: "وحدة التحكم", clear: "مسح",
  publishDev: "افتح مباشرة في Nibras Dev", publishApk: "اصنع APK لأندرويد", publishZip: "تنزيل ZIP", template: "أضف صفحة", fmt: "رتّب المسافات",
};
const ru: IdeCopy = {
  design: "Дизайн", code: "Код", previewMode: "Просмотр", files: "Файлы", publish: "Опубликовать",
  explorer: "Проводник", search: "Поиск", settings: "Настройки", newFile: "Новый файл", newFolder: "Новая папка", folderName: "Имя папки",
  searchPh: "Поиск по файлам", noMatch: "Ничего не найдено", device: "Устройство", responsive: "Адаптивно", desktop: "Компьютер", reload: "Обновить",
  quick: "Быстрые действия", ask: "Команда или текст для поиска…", askHint: "Команды: run · zip · dev · apk · new about.html · line 20 · или любой текст для поиска по проекту. Работает офлайн, без ИИ.",
  go: "Выполнить", fontSize: "Размер шрифта", wrap: "Переносить длинные строки", autoRun: "Живой просмотр при вводе", saved: "Сохранено в этом браузере", ln: "Стр", col: "Кол",
  close: "Закрыть", unknown: "Это не команда — показан поиск.", found: "совпад.", opened: "Открыт", live: "Live", console: "Консоль", clear: "Очистить",
  publishDev: "Открыть в Nibras Dev", publishApk: "Собрать Android APK", publishZip: "Скачать ZIP", template: "Добавить страницу", fmt: "Выровнять отступы",
};

export const IDE: Record<Lang, IdeCopy> = { az, en, tr, ar, ru } as Record<Lang, IdeCopy>;
