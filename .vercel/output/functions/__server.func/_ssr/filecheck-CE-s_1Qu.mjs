import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Dn as FileSearch, Pn as FileDown, R as ShieldCheck, Zn as Copy, n as X, pn as GitCompare, sr as CircleCheck, v as TriangleAlert, y as Trash2, yn as FolderOpen } from "../_libs/lucide-react.mjs";
import { r as ToolsLegalLinks } from "./tools-legal-BYzcrNbU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/filecheck-CE-s_1Qu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var en = {
	title: "Nibras File Check",
	lead: "See what a file really is, get its SHA-256 / SHA-1 / SHA-512, verify a checksum and compare two files. Files never leave your browser.",
	s1: "Pick",
	s1d: "files stay on device",
	s2: "Identify",
	s2d: "magic bytes · MIME",
	s3: "Hash",
	s3d: "SHA-1 · 256 · 512",
	s4: "Verify",
	s4d: "checksum · compare · report",
	pick: "Choose files",
	drop: "or drop them here",
	algos: "Algorithms",
	files: "Files",
	total: "Total size",
	mismatches: "Type mismatches",
	verified: "Hashes verified",
	failed: "Hash mismatches",
	name: "Name",
	size: "Size",
	modified: "Last modified",
	mime: "Browser MIME",
	real: "Real type",
	ext: "Extension",
	extOk: "matches",
	extBad: "does not match the real type",
	extNone: "no extension",
	extUnknown: "cannot tell",
	hashing: "Hashing…",
	cancel: "Cancel",
	remove: "Remove",
	expected: "Expected hash",
	expectedPh: "Paste a SHA-1, SHA-256 or SHA-512 hash",
	match: "Match",
	noMatch: "No match",
	md5: "MD5 is not supported by Web Crypto; use SHA-256.",
	badLen: "Not a SHA-1/256/512 length",
	details: "Details",
	dims: "Dimensions",
	pages: "Pages",
	pdfVer: "PDF version",
	entries: "ZIP entries",
	checksums: "Checksum list (optional)",
	checksumsPh: "Paste lines like: <hash>  filename (sha256sum output)",
	compare: "Compare two files",
	a: "File A",
	b: "File B",
	run: "Compare",
	equal: "Identical — every byte matches.",
	differ: "Different. First difference at byte offset {o} (0x{h}).",
	sizeDiff: "Sizes differ.",
	sameHash: "Hashes",
	choose: "Choose…",
	report: "Verification report",
	txt: "TXT",
	json: "JSON",
	pdf: "PDF",
	empty: "No files yet.",
	local: "Nothing is uploaded: reading and hashing happen only in this tab.",
	copy: "Copy",
	copied: "Copied",
	clearAll: "Clear all",
	big: "Large file: streaming hash",
	progress: "Progress"
};
var FL = {
	en,
	az: {
		...en,
		lead: "Faylın əslində nə olduğunu gör, SHA-256 / SHA-1 / SHA-512 al, checksum-u yoxla və iki faylı müqayisə et. Fayllar brauzerdən çıxmır.",
		s1: "Seç",
		s1d: "fayl cihazda qalır",
		s2: "Tanı",
		s2d: "magic bayt · MIME",
		s3: "Hash",
		s4: "Yoxla",
		s4d: "checksum · müqayisə · hesabat",
		pick: "Fayl seç",
		drop: "və ya bura at",
		algos: "Alqoritmlər",
		files: "Fayllar",
		total: "Ümumi ölçü",
		mismatches: "Tip uyğunsuzluğu",
		verified: "Təsdiqlənən hash",
		failed: "Uyğun gəlməyən hash",
		name: "Ad",
		size: "Ölçü",
		modified: "Son dəyişiklik",
		mime: "Brauzer MIME",
		real: "Əsl tip",
		ext: "Uzantı",
		extOk: "uyğundur",
		extBad: "əsl tipə uyğun deyil",
		extNone: "uzantı yoxdur",
		extUnknown: "bilinmir",
		hashing: "Hesablanır…",
		cancel: "Ləğv et",
		remove: "Sil",
		expected: "Gözlənilən hash",
		expectedPh: "SHA-1, SHA-256 və ya SHA-512 yapışdır",
		match: "Uyğundur",
		noMatch: "Uyğun deyil",
		md5: "MD5 Web Crypto-da yoxdur; SHA-256 istifadə et.",
		badLen: "SHA-1/256/512 uzunluğu deyil",
		details: "Təfərrüat",
		dims: "Ölçülər",
		pages: "Səhifə",
		pdfVer: "PDF versiyası",
		entries: "ZIP faylları",
		checksums: "Checksum siyahısı (istəyə görə)",
		checksumsPh: "Belə sətirlər yapışdır: <hash>  fayl_adı",
		compare: "İki faylı müqayisə et",
		a: "Fayl A",
		b: "Fayl B",
		run: "Müqayisə et",
		equal: "Eynidir — bütün baytlar üst-üstə düşür.",
		differ: "Fərqlidir. İlk fərq {o} bayt ofsetindədir (0x{h}).",
		sizeDiff: "Ölçülər fərqlidir.",
		choose: "Seç…",
		report: "Yoxlama hesabatı",
		empty: "Hələ fayl yoxdur.",
		local: "Heç nə yüklənmir: oxuma və hash yalnız bu pəncərədə olur.",
		copy: "Kopyala",
		copied: "Kopyalandı",
		clearAll: "Hamısını təmizlə",
		big: "Böyük fayl: axınla hash",
		progress: "Gediş"
	},
	tr: {
		...en,
		lead: "Dosyanın gerçekte ne olduğunu görün, SHA-256 / SHA-1 / SHA-512 alın, sağlama toplamını doğrulayın ve iki dosyayı karşılaştırın. Dosyalar tarayıcıdan çıkmaz.",
		s1: "Seç",
		s1d: "dosya cihazda kalır",
		s2: "Tanı",
		s2d: "sihirli bayt · MIME",
		s4: "Doğrula",
		s4d: "sağlama · karşılaştır · rapor",
		pick: "Dosya seç",
		drop: "veya buraya bırakın",
		algos: "Algoritmalar",
		files: "Dosyalar",
		total: "Toplam boyut",
		mismatches: "Tür uyumsuzluğu",
		verified: "Doğrulanan hash",
		failed: "Uyuşmayan hash",
		name: "Ad",
		size: "Boyut",
		modified: "Son değişiklik",
		mime: "Tarayıcı MIME",
		real: "Gerçek tür",
		ext: "Uzantı",
		extOk: "uyumlu",
		extBad: "gerçek türle uyuşmuyor",
		extNone: "uzantı yok",
		extUnknown: "belirlenemedi",
		hashing: "Hesaplanıyor…",
		cancel: "İptal",
		remove: "Kaldır",
		expected: "Beklenen hash",
		expectedPh: "SHA-1, SHA-256 veya SHA-512 yapıştırın",
		match: "Eşleşiyor",
		noMatch: "Eşleşmiyor",
		md5: "MD5 Web Crypto'da yok; SHA-256 kullanın.",
		badLen: "SHA-1/256/512 uzunluğu değil",
		details: "Ayrıntılar",
		dims: "Boyutlar",
		pages: "Sayfa",
		pdfVer: "PDF sürümü",
		entries: "ZIP girdileri",
		checksums: "Sağlama listesi (isteğe bağlı)",
		checksumsPh: "Şu biçimde satırlar: <hash>  dosya_adı",
		compare: "İki dosyayı karşılaştır",
		a: "Dosya A",
		b: "Dosya B",
		run: "Karşılaştır",
		equal: "Aynı — tüm baytlar eşleşiyor.",
		differ: "Farklı. İlk fark {o}. bayt ofsetinde (0x{h}).",
		sizeDiff: "Boyutlar farklı.",
		choose: "Seç…",
		report: "Doğrulama raporu",
		empty: "Henüz dosya yok.",
		local: "Hiçbir şey yüklenmez: okuma ve hash yalnızca bu sekmede yapılır.",
		copy: "Kopyala",
		copied: "Kopyalandı",
		clearAll: "Tümünü temizle",
		big: "Büyük dosya: akışlı hash",
		progress: "İlerleme"
	},
	ar: {
		...en,
		lead: "اعرف حقيقة الملف، واحصل على SHA-256 / SHA-1 / SHA-512، وتحقق من المجموع الاختباري وقارن ملفين. لا تغادر الملفات متصفحك.",
		s1: "اختر",
		s1d: "يبقى الملف على جهازك",
		s2: "تعرّف",
		s2d: "البايتات السحرية · MIME",
		s3: "التجزئة",
		s4: "تحقق",
		s4d: "مجموع · مقارنة · تقرير",
		pick: "اختر ملفات",
		drop: "أو أسقطها هنا",
		algos: "الخوارزميات",
		files: "الملفات",
		total: "الحجم الكلي",
		mismatches: "عدم تطابق النوع",
		verified: "تجزئات مطابقة",
		failed: "تجزئات غير مطابقة",
		name: "الاسم",
		size: "الحجم",
		modified: "آخر تعديل",
		mime: "MIME المتصفح",
		real: "النوع الحقيقي",
		ext: "الامتداد",
		extOk: "مطابق",
		extBad: "لا يطابق النوع الحقيقي",
		extNone: "بلا امتداد",
		extUnknown: "غير معروف",
		hashing: "جارٍ الحساب…",
		cancel: "إلغاء",
		remove: "إزالة",
		expected: "التجزئة المتوقعة",
		expectedPh: "الصق SHA-1 أو SHA-256 أو SHA-512",
		match: "مطابق",
		noMatch: "غير مطابق",
		md5: "MD5 غير مدعوم في Web Crypto؛ استخدم SHA-256.",
		badLen: "ليس بطول SHA-1/256/512",
		details: "التفاصيل",
		dims: "الأبعاد",
		pages: "الصفحات",
		pdfVer: "إصدار PDF",
		entries: "عناصر ZIP",
		checksums: "قائمة المجاميع (اختياري)",
		checksumsPh: "الصق أسطراً مثل: <hash>  اسم_الملف",
		compare: "قارن ملفين",
		a: "الملف A",
		b: "الملف B",
		run: "قارن",
		equal: "متطابقان — كل البايتات متساوية.",
		differ: "مختلفان. أول اختلاف عند البايت {o} (0x{h}).",
		sizeDiff: "الحجمان مختلفان.",
		choose: "اختر…",
		report: "تقرير التحقق",
		empty: "لا ملفات بعد.",
		local: "لا يُرفع شيء: القراءة والتجزئة تتم في هذا التبويب فقط.",
		copy: "نسخ",
		copied: "تم النسخ",
		clearAll: "مسح الكل",
		big: "ملف كبير: تجزئة متدفقة",
		progress: "التقدم"
	},
	ru: {
		...en,
		lead: "Узнайте настоящий тип файла, получите SHA-256 / SHA-1 / SHA-512, проверьте контрольную сумму и сравните два файла. Файлы не покидают браузер.",
		s1: "Выбор",
		s1d: "файл остаётся на устройстве",
		s2: "Тип",
		s2d: "сигнатура · MIME",
		s3: "Хеш",
		s4: "Проверка",
		s4d: "сумма · сравнение · отчёт",
		pick: "Выбрать файлы",
		drop: "или перетащите сюда",
		algos: "Алгоритмы",
		files: "Файлы",
		total: "Общий размер",
		mismatches: "Несовпадение типа",
		verified: "Хеш совпал",
		failed: "Хеш не совпал",
		name: "Имя",
		size: "Размер",
		modified: "Изменён",
		mime: "MIME браузера",
		real: "Настоящий тип",
		ext: "Расширение",
		extOk: "совпадает",
		extBad: "не соответствует настоящему типу",
		extNone: "нет расширения",
		extUnknown: "не определить",
		hashing: "Считаем…",
		cancel: "Отмена",
		remove: "Убрать",
		expected: "Ожидаемый хеш",
		expectedPh: "Вставьте SHA-1, SHA-256 или SHA-512",
		match: "Совпадает",
		noMatch: "Не совпадает",
		md5: "MD5 нет в Web Crypto; используйте SHA-256.",
		badLen: "Не длина SHA-1/256/512",
		details: "Подробности",
		dims: "Размеры",
		pages: "Страниц",
		pdfVer: "Версия PDF",
		entries: "Файлов в ZIP",
		checksums: "Список сумм (необязательно)",
		checksumsPh: "Строки вида: <hash>  имя_файла (вывод sha256sum)",
		compare: "Сравнить два файла",
		a: "Файл A",
		b: "Файл B",
		run: "Сравнить",
		equal: "Идентичны — все байты совпадают.",
		differ: "Различаются. Первое отличие на смещении {o} (0x{h}).",
		sizeDiff: "Размеры разные.",
		choose: "Выбрать…",
		report: "Отчёт о проверке",
		empty: "Файлов пока нет.",
		local: "Ничего не загружается: чтение и хеширование идут только в этой вкладке.",
		copy: "Копировать",
		copied: "Скопировано",
		clearAll: "Очистить всё",
		big: "Большой файл: потоковый хеш",
		progress: "Ход"
	}
};
var D = (kind, label, mime, exts) => ({
	kind,
	label,
	mime,
	exts
});
var T = {
	png: D("png", "PNG image", "image/png", ["png"]),
	jpg: D("jpg", "JPEG image", "image/jpeg", [
		"jpg",
		"jpeg",
		"jfif",
		"jpe"
	]),
	gif: D("gif", "GIF image", "image/gif", ["gif"]),
	webp: D("webp", "WebP image", "image/webp", ["webp"]),
	bmp: D("bmp", "BMP image", "image/bmp", ["bmp", "dib"]),
	ico: D("ico", "Icon", "image/x-icon", ["ico", "cur"]),
	tiff: D("tiff", "TIFF image", "image/tiff", [
		"tif",
		"tiff",
		"dng",
		"nef",
		"cr2"
	]),
	heic: D("heic", "HEIC/HEIF image", "image/heic", ["heic", "heif"]),
	avif: D("avif", "AVIF image", "image/avif", ["avif"]),
	psd: D("psd", "Photoshop document", "image/vnd.adobe.photoshop", ["psd"]),
	svg: D("svg", "SVG image", "image/svg+xml", ["svg"]),
	pdf: D("pdf", "PDF document", "application/pdf", ["pdf", "ai"]),
	zip: D("zip", "ZIP archive", "application/zip", ["zip"]),
	docx: D("docx", "Word document (DOCX)", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", [
		"docx",
		"docm",
		"dotx"
	]),
	xlsx: D("xlsx", "Excel workbook (XLSX)", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", [
		"xlsx",
		"xlsm",
		"xltx"
	]),
	pptx: D("pptx", "PowerPoint (PPTX)", "application/vnd.openxmlformats-officedocument.presentationml.presentation", [
		"pptx",
		"pptm",
		"ppsx"
	]),
	odf: D("odf", "OpenDocument file", "application/vnd.oasis.opendocument", [
		"odt",
		"ods",
		"odp",
		"odg"
	]),
	epub: D("epub", "EPUB book", "application/epub+zip", ["epub"]),
	apk: D("apk", "Android app (APK)", "application/vnd.android.package-archive", [
		"apk",
		"aab",
		"apks",
		"xapk"
	]),
	jar: D("jar", "Java archive (JAR)", "application/java-archive", [
		"jar",
		"war",
		"ear"
	]),
	ole: D("ole", "Old Office file (DOC/XLS/PPT/MSI)", "application/x-ole-storage", [
		"doc",
		"xls",
		"ppt",
		"msi",
		"msg",
		"dot",
		"xlt",
		"pps"
	]),
	rar: D("rar", "RAR archive", "application/vnd.rar", ["rar"]),
	sevenz: D("7z", "7-Zip archive", "application/x-7z-compressed", ["7z"]),
	gz: D("gz", "GZIP archive", "application/gzip", ["gz", "tgz"]),
	bz2: D("bz2", "BZIP2 archive", "application/x-bzip2", ["bz2", "tbz2"]),
	xz: D("xz", "XZ archive", "application/x-xz", ["xz", "txz"]),
	tar: D("tar", "TAR archive", "application/x-tar", ["tar"]),
	mp3: D("mp3", "MP3 audio", "audio/mpeg", ["mp3"]),
	wav: D("wav", "WAV audio", "audio/wav", ["wav"]),
	ogg: D("ogg", "Ogg media", "audio/ogg", [
		"ogg",
		"oga",
		"ogv",
		"opus"
	]),
	flac: D("flac", "FLAC audio", "audio/flac", ["flac"]),
	mp4: D("mp4", "MP4 / QuickTime video", "video/mp4", [
		"mp4",
		"m4v",
		"m4a",
		"mov",
		"3gp",
		"3g2",
		"m4b"
	]),
	mkv: D("mkv", "Matroska / WebM", "video/x-matroska", [
		"mkv",
		"webm",
		"mka"
	]),
	avi: D("avi", "AVI video", "video/x-msvideo", ["avi"]),
	exe: D("exe", "Windows program (EXE/DLL)", "application/vnd.microsoft.portable-executable", [
		"exe",
		"dll",
		"sys",
		"scr",
		"com",
		"efi",
		"ocx",
		"cpl"
	]),
	elf: D("elf", "Linux program (ELF)", "application/x-elf", [
		"",
		"so",
		"o",
		"elf",
		"bin",
		"run"
	]),
	macho: D("macho", "macOS program (Mach-O)", "application/x-mach-binary", [
		"",
		"dylib",
		"bundle"
	]),
	classfile: D("class", "Java class / universal binary", "application/java-vm", ["class", ""]),
	dex: D("dex", "Android DEX", "application/x-dex", ["dex"]),
	wasm: D("wasm", "WebAssembly", "application/wasm", ["wasm"]),
	sqlite: D("sqlite", "SQLite database", "application/vnd.sqlite3", [
		"sqlite",
		"sqlite3",
		"db",
		"db3"
	]),
	rtf: D("rtf", "Rich Text (RTF)", "application/rtf", ["rtf"]),
	ps: D("ps", "PostScript", "application/postscript", ["ps", "eps"]),
	woff: D("woff", "WOFF font", "font/woff", ["woff"]),
	woff2: D("woff2", "WOFF2 font", "font/woff2", ["woff2"]),
	ttf: D("ttf", "TrueType font", "font/ttf", ["ttf", "ttc"]),
	otf: D("otf", "OpenType font", "font/otf", ["otf"]),
	html: D("html", "HTML page", "text/html", [
		"html",
		"htm",
		"xhtml"
	]),
	xml: D("xml", "XML document", "application/xml", [
		"xml",
		"svg",
		"plist",
		"xsd",
		"rss",
		"kml",
		"gpx",
		"xlf",
		"csproj",
		"config",
		"resx"
	]),
	json: D("json", "JSON", "application/json", [
		"json",
		"geojson",
		"map",
		"webmanifest",
		"ipynb",
		"har",
		"lock"
	]),
	text: D("text", "Plain text", "text/plain", []),
	empty: D("empty", "Empty file", "", []),
	unknown: D("unknown", "Unknown binary", "application/octet-stream", [])
};
var TEXT_EXTS = [
	"txt",
	"md",
	"csv",
	"tsv",
	"log",
	"ini",
	"cfg",
	"conf",
	"yml",
	"yaml",
	"toml",
	"js",
	"mjs",
	"cjs",
	"ts",
	"tsx",
	"jsx",
	"css",
	"scss",
	"less",
	"py",
	"rb",
	"php",
	"java",
	"kt",
	"kts",
	"swift",
	"c",
	"h",
	"cpp",
	"hpp",
	"cs",
	"go",
	"rs",
	"sh",
	"bat",
	"ps1",
	"sql",
	"srt",
	"vtt",
	"env",
	"gradle",
	"properties",
	"dart",
	"lua",
	"r",
	"pl",
	"vue",
	"svelte",
	"tex",
	"bib",
	"gitignore",
	"dockerfile",
	"makefile",
	"json",
	"xml",
	"html",
	"htm",
	"svg",
	"rtf",
	"ics",
	"vcf",
	"eml",
	"pem",
	"crt",
	"key",
	"asc",
	"rst",
	"adoc",
	"jsonl",
	"ndjson"
];
var at = (b, o, sig) => sig.every((v, i) => b[o + i] === v);
var ascii = (b, o, s) => [...s].every((ch, i) => b[o + i] === ch.charCodeAt(0));
/** Detects the real file type from the first bytes (head) and, for ZIPs, entry names. */
function sniff(head, size, zipNames) {
	const b = head;
	if (!size) return T.empty;
	if (at(b, 0, [
		137,
		80,
		78,
		71,
		13,
		10,
		26,
		10
	])) return T.png;
	if (at(b, 0, [
		255,
		216,
		255
	])) return T.jpg;
	if (ascii(b, 0, "GIF87a") || ascii(b, 0, "GIF89a")) return T.gif;
	if (ascii(b, 0, "RIFF") && ascii(b, 8, "WEBP")) return T.webp;
	if (ascii(b, 0, "RIFF") && ascii(b, 8, "WAVE")) return T.wav;
	if (ascii(b, 0, "RIFF") && ascii(b, 8, "AVI ")) return T.avi;
	if (ascii(b, 4, "ftyp")) {
		const brand = String.fromCharCode(...b.slice(8, 12));
		if (/^(heic|heix|hevc|heim|heis|mif1|msf1)$/.test(brand)) return T.heic;
		if (/^avi[fs]$/.test(brand)) return T.avif;
		return T.mp4;
	}
	if (ascii(b, 0, "%PDF-")) return T.pdf;
	if (at(b, 0, [
		80,
		75,
		3,
		4
	]) || at(b, 0, [
		80,
		75,
		5,
		6
	])) {
		const n = zipNames ?? [];
		if (n.includes("mimetype") && n.some((x) => x.startsWith("META-INF/container.xml"))) return T.epub;
		if (n.includes("AndroidManifest.xml") || n.includes("base/manifest/AndroidManifest.xml") || n.includes("toc.pb")) return T.apk;
		if (n.some((x) => x.startsWith("word/"))) return T.docx;
		if (n.some((x) => x.startsWith("xl/"))) return T.xlsx;
		if (n.some((x) => x.startsWith("ppt/"))) return T.pptx;
		if (n.includes("mimetype") && n.includes("content.xml")) return T.odf;
		if (n.includes("META-INF/MANIFEST.MF")) return T.jar;
		return T.zip;
	}
	if (at(b, 0, [
		208,
		207,
		17,
		224,
		161,
		177,
		26,
		225
	])) return T.ole;
	if (ascii(b, 0, "Rar!\x07")) return T.rar;
	if (at(b, 0, [
		55,
		122,
		188,
		175,
		39,
		28
	])) return T.sevenz;
	if (at(b, 0, [31, 139])) return T.gz;
	if (ascii(b, 0, "BZh")) return T.bz2;
	if (at(b, 0, [
		253,
		55,
		122,
		88,
		90,
		0
	])) return T.xz;
	if (b.length > 262 && ascii(b, 257, "ustar")) return T.tar;
	if (ascii(b, 0, "ID3") || b[0] === 255 && (b[1] & 224) === 224 && (b[1] & 6) !== 0) return T.mp3;
	if (ascii(b, 0, "OggS")) return T.ogg;
	if (ascii(b, 0, "fLaC")) return T.flac;
	if (at(b, 0, [
		26,
		69,
		223,
		163
	])) return T.mkv;
	if (ascii(b, 0, "MZ")) return T.exe;
	if (at(b, 0, [
		127,
		69,
		76,
		70
	])) return T.elf;
	if (at(b, 0, [
		254,
		237,
		250,
		206
	]) || at(b, 0, [
		254,
		237,
		250,
		207
	]) || at(b, 0, [
		206,
		250,
		237,
		254
	]) || at(b, 0, [
		207,
		250,
		237,
		254
	])) return T.macho;
	if (at(b, 0, [
		202,
		254,
		186,
		190
	])) return T.classfile;
	if (ascii(b, 0, "dex\n")) return T.dex;
	if (at(b, 0, [
		0,
		97,
		115,
		109
	])) return T.wasm;
	if (ascii(b, 0, "SQLite format 3\0")) return T.sqlite;
	if (ascii(b, 0, "8BPS")) return T.psd;
	if (ascii(b, 0, "wOFF")) return T.woff;
	if (ascii(b, 0, "wOF2")) return T.woff2;
	if (at(b, 0, [
		0,
		1,
		0,
		0,
		0
	]) || ascii(b, 0, "ttcf") || ascii(b, 0, "true")) return T.ttf;
	if (ascii(b, 0, "OTTO")) return T.otf;
	if (at(b, 0, [
		0,
		0,
		1,
		0
	]) && b[4] > 0) return T.ico;
	if (ascii(b, 0, "II*\0") || ascii(b, 0, "MM\0*")) return T.tiff;
	if (ascii(b, 0, "BM") && b.length > 14 && b[14] >= 12 && b[14] <= 124 && b[15] === 0) return T.bmp;
	if (ascii(b, 0, "{\\rtf")) return T.rtf;
	if (ascii(b, 0, "%!PS")) return T.ps;
	const sample = b.slice(0, 4096);
	if (!sample.includes(0)) {
		let s = "";
		try {
			s = new TextDecoder("utf-8", { fatal: true }).decode(sample.length === 4096 ? trimUtf8(sample) : sample);
		} catch {
			return T.unknown;
		}
		const st = s.replace(/^\uFEFF/, "").trimStart().slice(0, 400).toLowerCase();
		if (st.startsWith("<!doctype html") || st.startsWith("<html")) return T.html;
		if (st.startsWith("<svg") || st.startsWith("<?xml") && st.includes("<svg")) return T.svg;
		if (st.startsWith("<?xml") || /^<[a-z][\w:-]*[\s>]/.test(st)) return T.xml;
		if (/^[{[]/.test(st)) {
			try {
				if (sample.length === size) {
					JSON.parse(s);
					return T.json;
				}
			} catch {
				return T.text;
			}
			return T.json;
		}
		return T.text;
	}
	if (b[0] === 255 && b[1] === 254 || b[0] === 254 && b[1] === 255) return {
		...T.text,
		label: "Text (UTF-16)"
	};
	return T.unknown;
}
function trimUtf8(b) {
	let e = b.length;
	let i = e - 1, n = 0;
	while (i >= 0 && n < 4 && (b[i] & 192) === 128) {
		i--;
		n++;
	}
	if (i >= 0 && b[i] >= 192) e = i;
	return b.slice(0, e);
}
function extOf(name) {
	const m = name.toLowerCase().match(/\.([a-z0-9]{1,12})$/);
	return m ? m[1] : "";
}
/** "ok" when the extension fits, "mismatch" when it clearly does not, "unknown" when we cannot tell. */
function extVerdict(d, name) {
	const e = extOf(name);
	if (d.kind === "empty" || d.kind === "unknown") return "unknown";
	if (d.kind === "text") return !e || TEXT_EXTS.includes(e) ? "ok" : "mismatch";
	if ([
		"json",
		"xml",
		"html",
		"svg"
	].includes(d.kind)) return d.exts.includes(e) || TEXT_EXTS.includes(e) ? "ok" : "mismatch";
	if (!e) return d.exts.includes("") ? "ok" : "none";
	if (d.exts.includes(e)) return "ok";
	if (d.kind === "zip" && [
		"zip",
		"cbz",
		"xpi",
		"crx",
		"kmz",
		"sketch",
		"nupkg",
		"vsix",
		"whl",
		"ipa",
		"aar",
		"3mf",
		"usdz"
	].includes(e)) return "ok";
	return "mismatch";
}
/** Reads ZIP entry names from the central directory (returns null when it is not easy). */
async function zipInfo(f) {
	const tailLen = Math.min(f.size, 65557);
	const tail = new Uint8Array(await f.slice(f.size - tailLen).arrayBuffer());
	let p = -1;
	for (let i = tail.length - 22; i >= 0; i--) if (tail[i] === 80 && tail[i + 1] === 75 && tail[i + 2] === 5 && tail[i + 3] === 6) {
		p = i;
		break;
	}
	if (p < 0) return null;
	const dv = new DataView(tail.buffer, tail.byteOffset);
	let count = dv.getUint16(p + 10, true), cdSize = dv.getUint32(p + 12, true), cdOff = dv.getUint32(p + 16, true);
	if (count === 65535 || cdOff === 4294967295) {
		const lp = p - 20;
		if (lp >= 0 && dv.getUint32(lp, true) === 117853008) {
			const off = Number(dv.getBigUint64(lp + 8, true));
			const z = new DataView(await f.slice(off, off + 56).arrayBuffer());
			if (z.getUint32(0, true) === 101075792) {
				count = Number(z.getBigUint64(32, true));
				cdSize = Number(z.getBigUint64(40, true));
				cdOff = Number(z.getBigUint64(48, true));
			}
		}
	}
	const names = [];
	if (cdSize > 0 && cdSize < 16e6 && cdOff + cdSize <= f.size) {
		const cd = new Uint8Array(await f.slice(cdOff, cdOff + cdSize).arrayBuffer());
		const v = new DataView(cd.buffer);
		const dec = new TextDecoder();
		for (let i = 0; i + 46 <= cd.length && names.length < 2e5;) {
			if (v.getUint32(i, true) !== 33639248) break;
			const n = v.getUint16(i + 28, true), x = v.getUint16(i + 30, true), c = v.getUint16(i + 32, true);
			names.push(dec.decode(cd.slice(i + 46, i + 46 + n)));
			i += 46 + n + x + c;
		}
	}
	return {
		count,
		names
	};
}
var CHUNK = 4194304;
var WEBCRYPTO_MAX = 268435456;
var hex = (buf) => [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join("");
/** Hashes a file in chunks with progress. Web Crypto for files up to 256 MB, streaming WASM above that. */
async function hashFile(f, algos, onProgress, cancelled) {
	const out = {};
	if (f.size <= WEBCRYPTO_MAX) {
		const all = new Uint8Array(f.size);
		for (let o = 0; o < f.size; o += CHUNK) {
			if (cancelled()) throw new Error("cancel");
			all.set(new Uint8Array(await f.slice(o, o + CHUNK).arrayBuffer()), o);
			onProgress(Math.min(.95, (o + CHUNK) / Math.max(1, f.size) * .95));
		}
		for (const a of algos) out[a] = hex(await crypto.subtle.digest(a, all));
		onProgress(1);
		return out;
	}
	const hw = await import("../_libs/hash-wasm.mjs").then((n) => n.t);
	const hs = await Promise.all(algos.map((a) => a === "SHA-1" ? hw.createSHA1() : a === "SHA-256" ? hw.createSHA256() : hw.createSHA512()));
	hs.forEach((h) => h.init());
	for (let o = 0; o < f.size; o += CHUNK) {
		if (cancelled()) throw new Error("cancel");
		const c = new Uint8Array(await f.slice(o, o + CHUNK).arrayBuffer());
		hs.forEach((h) => h.update(c));
		onProgress(Math.min(1, (o + CHUNK) / f.size));
	}
	algos.forEach((a, i) => {
		out[a] = hs[i].digest("hex");
	});
	onProgress(1);
	return out;
}
/** Byte-by-byte comparison; returns the first differing offset or -1 when equal. */
async function compareFiles(a, b, onProgress) {
	const n = Math.min(a.size, b.size);
	for (let o = 0; o < n; o += CHUNK) {
		const [x, y] = await Promise.all([a.slice(o, o + CHUNK).arrayBuffer(), b.slice(o, o + CHUNK).arrayBuffer()]).then((r) => r.map((v) => new Uint8Array(v)));
		for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return {
			equal: false,
			offset: o + i,
			sizeDiff: a.size !== b.size
		};
		onProgress(Math.min(1, (o + CHUNK) / Math.max(1, n)));
	}
	onProgress(1);
	return a.size === b.size ? {
		equal: true,
		offset: -1,
		sizeDiff: false
	} : {
		equal: false,
		offset: n,
		sizeDiff: true
	};
}
function algoForHash(h) {
	const l = h.length;
	return l === 40 ? "SHA-1" : l === 64 ? "SHA-256" : l === 128 ? "SHA-512" : l === 32 ? "MD5" : null;
}
/** Parses "hash  filename" lines (sha256sum style) and plain hashes. */
function parseChecksums(text) {
	const map = /* @__PURE__ */ new Map();
	const loose = [];
	for (const line of text.split(/\r?\n/)) {
		const s = line.trim();
		if (!s) continue;
		let m = s.match(/^([a-f0-9]{32,128})\s+\*?(.+)$/i);
		if (m) {
			map.set(m[2].trim().replace(/^\.\//, ""), m[1].toLowerCase());
			continue;
		}
		m = s.match(/^SHA(?:1|256|512)\s*\((.+)\)\s*=\s*([a-f0-9]+)$/i);
		if (m) {
			map.set(m[1].trim(), m[2].toLowerCase());
			continue;
		}
		m = s.match(/^([a-f0-9]{32,128})$/i);
		if (m) loose.push(m[1].toLowerCase());
	}
	return {
		map,
		loose
	};
}
async function pdfInfo(f) {
	const version = new TextDecoder().decode(new Uint8Array(await f.slice(0, 16).arrayBuffer())).match(/%PDF-(\d\.\d)/)?.[1] ?? "?";
	if (f.size > 15e7) return {
		version,
		pages: null
	};
	try {
		const { pageCount } = await import("./engine-CPnj4rN2.mjs");
		return {
			version,
			pages: await pageCount(new Uint8Array(await f.arrayBuffer()))
		};
	} catch {
		try {
			return {
				version,
				pages: (new TextDecoder("latin1").decode(new Uint8Array(await f.arrayBuffer())).match(/\/Type\s*\/Page(?![s\w])/g) ?? []).length || null
			};
		} catch {
			return {
				version,
				pages: null
			};
		}
	}
}
async function imageSize(f) {
	try {
		const bm = await createImageBitmap(f);
		const r = {
			w: bm.width,
			h: bm.height
		};
		bm.close();
		return r;
	} catch {
		return await new Promise((res) => {
			const u = URL.createObjectURL(f);
			const im = new Image();
			im.onload = () => {
				res({
					w: im.naturalWidth,
					h: im.naturalHeight
				});
				URL.revokeObjectURL(u);
			};
			im.onerror = () => {
				res(null);
				URL.revokeObjectURL(u);
			};
			im.src = u;
		});
	}
}
/** Nibras File Check: identify, hash, verify and compare files locally. */
var ALGOS = [
	"SHA-256",
	"SHA-1",
	"SHA-512"
];
var fmt = (n) => n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(1)} KB` : n < 1073741824 ? `${(n / 1048576).toFixed(2)} MB` : `${(n / 1073741824).toFixed(2)} GB`;
var rid = () => Math.random().toString(36).slice(2, 9);
function FileCheckPage() {
	const { lang } = useI18n();
	const t = FL[lang] ?? FL.en;
	const [items, setItems] = (0, import_react.useState)([]);
	const [algos, setAlgos] = (0, import_react.useState)(/* @__PURE__ */ new Set(["SHA-256"]));
	const [sums, setSums] = (0, import_react.useState)("");
	const [ca, setCa] = (0, import_react.useState)("");
	const [cb, setCb] = (0, import_react.useState)("");
	const [cmp, setCmp] = (0, import_react.useState)(null);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const cancelled = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		if (!note) return;
		const id = setTimeout(() => setNote(""), 2e3);
		return () => clearTimeout(id);
	}, [note]);
	const upd = (id, p) => setItems((l) => l.map((x) => x.id === id ? {
		...x,
		...typeof p === "function" ? p(x) : p
	} : x));
	const analyzeOne = async (it, as) => {
		const f = it.file;
		try {
			const head = new Uint8Array(await f.slice(0, 4096).arrayBuffer());
			let z = null;
			if (head[0] === 80 && head[1] === 75) z = await zipInfo(f).catch(() => null);
			const det = sniff(head, f.size, z?.names);
			const extra = {};
			if (z) extra.entries = z.count;
			if ([
				"png",
				"jpg",
				"gif",
				"webp",
				"bmp",
				"ico",
				"avif",
				"svg"
			].includes(det.kind)) {
				const d = await imageSize(f);
				if (d) extra.dims = `${d.w} × ${d.h}`;
			}
			if (det.kind === "pdf") {
				const p = await pdfInfo(f);
				extra.pages = p.pages;
				extra.pdfVer = p.version;
			}
			upd(it.id, {
				det,
				verdict: extVerdict(det, f.name),
				extra
			});
			await runHash(it.id, f, as);
		} catch (e) {
			upd(it.id, {
				busy: false,
				error: String(e.message || e)
			});
		}
	};
	const runHash = async (id, f, as) => {
		if (!as.length) {
			upd(id, {
				busy: false,
				progress: 1
			});
			return;
		}
		cancelled.current.delete(id);
		upd(id, {
			busy: true,
			progress: 0
		});
		try {
			const h = await hashFile(f, as, (p) => upd(id, { progress: p }), () => cancelled.current.has(id));
			upd(id, (x) => ({
				busy: false,
				hashes: {
					...x.hashes,
					...h
				},
				progress: 1
			}));
		} catch (e) {
			upd(id, {
				busy: false,
				error: e.message === "cancel" ? t.cancel : String(e)
			});
		}
	};
	const add = (fl) => {
		if (!fl) return;
		const list = [...fl].slice(0, 100).map((file) => ({
			id: rid(),
			file,
			hashes: {},
			progress: 0,
			busy: true,
			extra: {},
			expected: ""
		}));
		setItems((l) => [...l, ...list]);
		(async () => {
			for (const it of list) await analyzeOne(it, [...algos]);
		})();
	};
	const toggleAlgo = (a) => {
		const next = new Set(algos);
		if (next.has(a)) next.delete(a);
		else next.add(a);
		if (!next.size) return;
		setAlgos(next);
		if (!next.has(a)) return;
		(async () => {
			for (const it of items) if (!it.hashes[a] && !it.busy) await runHash(it.id, it.file, [a]);
		})();
	};
	const sumMap = (0, import_react.useMemo)(() => parseChecksums(sums), [sums]);
	const expectedOf = (it) => it.expected.trim().toLowerCase().replace(/\s+/g, "") || sumMap.map.get(it.file.name) || "";
	const verifyOf = (it) => {
		const e = expectedOf(it);
		if (!e) {
			const hit = sumMap.loose.find((h) => Object.values(it.hashes).includes(h));
			return hit ? {
				ok: true,
				algo: algoForHash(hit)
			} : null;
		}
		const a = algoForHash(e);
		if (!a) return {
			ok: false,
			algo: "?",
			note: t.badLen
		};
		if (a === "MD5") return {
			ok: false,
			algo: "MD5",
			note: t.md5
		};
		const have = it.hashes[a];
		if (!have) return null;
		return {
			ok: have === e,
			algo: a
		};
	};
	(0, import_react.useEffect)(() => {
		for (const it of items) {
			const a = algoForHash(expectedOf(it));
			if (a && a !== "MD5" && !it.hashes[a] && !it.busy && it.det) runHash(it.id, it.file, [a]);
		}
	}, [items, sums]);
	const stats = (0, import_react.useMemo)(() => ({
		n: items.length,
		size: items.reduce((s, i) => s + i.file.size, 0),
		mis: items.filter((i) => i.verdict === "mismatch").length,
		ok: items.filter((i) => verifyOf(i)?.ok).length,
		bad: items.filter((i) => {
			const v = verifyOf(i);
			return v && !v.ok;
		}).length
	}), [items, sums]);
	const runCompare = async () => {
		const A = items.find((i) => i.id === ca)?.file, B = items.find((i) => i.id === cb)?.file;
		if (!A || !B) return;
		setCmp({
			busy: true,
			p: 0
		});
		const res = await compareFiles(A, B, (p) => setCmp((c) => c ? {
			...c,
			p
		} : c));
		setCmp({
			busy: false,
			p: 1,
			res
		});
	};
	const report = () => {
		const now = /* @__PURE__ */ new Date();
		const rows = items.map((i) => ({
			name: i.file.name,
			size: i.file.size,
			lastModified: new Date(i.file.lastModified).toISOString(),
			browserMime: i.file.type || null,
			realType: i.det?.label ?? null,
			realMime: i.det?.mime || null,
			extension: extOf(i.file.name) || null,
			extensionCheck: i.verdict ?? null,
			...i.extra,
			hashes: i.hashes,
			expected: expectedOf(i) || null,
			verified: verifyOf(i)?.ok ?? null
		}));
		const A = items.find((i) => i.id === ca), B = items.find((i) => i.id === cb);
		const comparison = cmp?.res && A && B ? {
			a: A.file.name,
			b: B.file.name,
			identical: cmp.res.equal,
			firstDifferenceOffset: cmp.res.equal ? null : cmp.res.offset,
			sizesDiffer: cmp.res.sizeDiff
		} : null;
		return {
			tool: "Nibras File Check",
			generated: now.toISOString(),
			note: "Computed locally in the browser; files were not uploaded.",
			files: rows,
			comparison
		};
	};
	const reportText = () => {
		const r = report();
		const L = [
			`${t.report} — Nibras File Check`,
			`${r.generated}`,
			r.note,
			""
		];
		for (const f of r.files) {
			L.push(`■ ${f.name}`, `  ${t.size}: ${fmt(f.size)} (${f.size} B)`, `  ${t.modified}: ${f.lastModified}`, `  ${t.mime}: ${f.browserMime ?? "—"}`, `  ${t.real}: ${f.realType ?? "—"}${f.realMime ? ` (${f.realMime})` : ""}`, `  ${t.ext}: .${f.extension ?? ""} → ${f.extensionCheck === "ok" ? t.extOk : f.extensionCheck === "mismatch" ? t.extBad : f.extensionCheck === "none" ? t.extNone : t.extUnknown}`);
			if (f.dims) L.push(`  ${t.dims}: ${f.dims}`);
			if (f.pages !== void 0) L.push(`  ${t.pages}: ${f.pages ?? "?"} · ${t.pdfVer}: ${f.pdfVer}`);
			if (f.entries !== void 0) L.push(`  ${t.entries}: ${f.entries}`);
			for (const [a, h] of Object.entries(f.hashes)) L.push(`  ${a}: ${h}`);
			if (f.expected) L.push(`  ${t.expected}: ${f.expected} → ${f.verified ? t.match : t.noMatch}`);
			L.push("");
		}
		if (r.comparison) L.push(`${t.compare}: ${r.comparison.a} ↔ ${r.comparison.b}`, `  ${r.comparison.identical ? t.equal : t.differ.replace("{o}", String(r.comparison.firstDifferenceOffset)).replace("{h}", (r.comparison.firstDifferenceOffset ?? 0).toString(16))}`);
		return L.join("\n");
	};
	const dl = (b, name) => {
		const u = URL.createObjectURL(b);
		const a = document.createElement("a");
		a.href = u;
		a.download = name;
		a.click();
		setTimeout(() => URL.revokeObjectURL(u), 1e3);
	};
	const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const exportPdf = async () => {
		const { textToPdf } = await import("./engine-CPnj4rN2.mjs");
		const bytes = await textToPdf(reportText(), {
			size: "a4",
			fontSize: 9,
			align: lang === "ar" ? "right" : "left",
			bold: false,
			margin: 36,
			pageNumbers: true,
			title: "Nibras File Check"
		});
		dl(new Blob([bytes], { type: "application/pdf" }), `file-check-${stamp}.pdf`);
	};
	const copy = (s) => {
		navigator.clipboard?.writeText(s);
		setNote(t.copied);
	};
	const card = "rounded-2xl border border-[#3a5ba8]/40 bg-[#0f1d3d]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";
	const steps = [
		[t.s1, t.s1d],
		[t.s2, t.s2d],
		[t.s3, t.s3d],
		[t.s4, t.s4d]
	];
	const filled = [
		items.length > 0,
		items.some((i) => i.det),
		items.some((i) => Object.keys(i.hashes).length),
		stats.ok + stats.bad > 0 || !!cmp?.res
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-[1400px] px-3 pt-20 pb-12 md:px-5 md:pt-24",
		dir: lang === "ar" ? "rtl" : "ltr",
		"data-testid": "filecheck",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-[#3a5ba8]/30 bg-[#0a1630] p-4 md:p-6",
			style: {
				backgroundImage: "linear-gradient(rgba(90,130,220,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(90,130,220,.08) 1px,transparent 1px)",
				backgroundSize: "24px 24px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-[#8fb0ff]",
					children: "FILE · CHECK · BLUEPRINT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-1 flex items-center gap-2 font-display text-2xl font-bold md:text-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSearch, { className: "size-7 text-[#8fb0ff]" }),
						" ",
						t.title
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-sm text-[#b7c6ea]",
					children: t.lead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid grid-cols-2 gap-2 md:grid-cols-4",
					"data-testid": "fc-steps",
					children: steps.map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: card + " relative p-3 " + (filled[i] ? "border-[#6b8cff]" : ""),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-[#8fb0ff]",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-[15px]",
								children: a
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-[#8da3d6]",
								children: b
							}),
							filled[i] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "absolute end-3 top-3 size-4 text-emerald-300" }) : null
						]
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 lg:grid-cols-[1fr_300px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: card + " flex cursor-pointer flex-col items-center justify-center gap-1 border-dashed p-6 text-center " + (drag ? "border-[#8fb0ff] bg-[#16306a]" : ""),
								onDragOver: (e) => {
									e.preventDefault();
									setDrag(true);
								},
								onDragLeave: () => setDrag(false),
								onDrop: (e) => {
									e.preventDefault();
									setDrag(false);
									add(e.dataTransfer.files);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-7 text-[#8fb0ff]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.pick }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-[#8da3d6]",
										children: t.drop
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										multiple: true,
										className: "sr-only",
										onChange: (e) => {
											add(e.target.files);
											e.target.value = "";
										},
										"data-testid": "fc-input"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 text-[12.5px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[#8da3d6]",
										children: [t.algos, ":"]
									}),
									ALGOS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 font-mono " + (algos.has(a) ? "border-[#6b8cff] bg-[#2a4aa0]/40" : "border-white/10"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											className: "accent-[#6b8cff]",
											checked: algos.has(a),
											onChange: () => toggleAlgo(a),
											"data-testid": `fc-algo-${a}`
										}), a]
									}, a)),
									items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "ms-auto inline-flex h-8 items-center gap-1 rounded-lg border border-white/10 px-2.5 text-red-300",
										onClick: () => {
											items.forEach((i) => cancelled.current.add(i.id));
											setItems([]);
											setCmp(null);
											setCa("");
											setCb("");
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), t.clearAll]
									}) : null
								]
							}),
							items.length ? items.map((it) => {
								const v = verifyOf(it);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: card + " p-3",
									"data-testid": "fc-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "block break-all",
													children: it.file.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-[#8da3d6]",
													children: [
														fmt(it.file.size),
														" · ",
														t.modified,
														": ",
														new Date(it.file.lastModified).toLocaleString()
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "rounded p-1 text-[#8da3d6] hover:bg-white/10",
												onClick: () => {
													cancelled.current.add(it.id);
													setItems((l) => l.filter((x) => x.id !== it.id));
												},
												"aria-label": t.remove,
												title: t.remove,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-2 grid gap-x-4 gap-y-1 text-[12.5px] sm:grid-cols-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
														className: "inline text-[#8da3d6]",
														children: [t.real, ": "]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "inline font-semibold",
														"data-testid": "fc-real",
														children: it.det?.label ?? "…"
													}),
													it.det?.mime ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ms-1 font-mono text-[11px] text-[#8da3d6]",
														children: it.det.mime
													}) : null
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
													className: "inline text-[#8da3d6]",
													children: [t.mime, ": "]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "inline font-mono text-[12px]",
													children: it.file.type || "—"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "sm:col-span-2",
													"data-testid": "fc-ext",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
														className: "inline text-[#8da3d6]",
														children: [t.ext, ": "]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
														className: "inline",
														children: [
															".",
															extOf(it.file.name) || "—",
															" ",
															it.verdict === "mismatch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "ms-1 inline-flex items-center gap-1 rounded bg-amber-500/20 px-1.5 text-amber-200",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3.5" }), t.extBad]
															}) : it.verdict === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "ms-1 text-emerald-300",
																children: ["✓ ", t.extOk]
															}) : it.verdict === "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "ms-1 text-[#8da3d6]",
																children: t.extNone
															}) : it.verdict ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "ms-1 text-[#8da3d6]",
																children: t.extUnknown
															}) : null
														]
													})]
												}),
												it.extra.dims ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
													className: "inline text-[#8da3d6]",
													children: [t.dims, ": "]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "inline",
													"data-testid": "fc-dims",
													children: it.extra.dims
												})] }) : null,
												it.extra.pdfVer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-testid": "fc-pdf",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
															className: "inline text-[#8da3d6]",
															children: [t.pages, ": "]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
															className: "inline",
															children: it.extra.pages ?? "?"
														}),
														" · ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
															className: "inline text-[#8da3d6]",
															children: [t.pdfVer, ": "]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
															className: "inline",
															children: it.extra.pdfVer
														})
													]
												}) : null,
												it.extra.entries !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
													className: "inline text-[#8da3d6]",
													children: [t.entries, ": "]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "inline",
													"data-testid": "fc-zip",
													children: it.extra.entries
												})] }) : null
											]
										}),
										it.busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-[11px] text-[#8da3d6]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t.hashing, it.file.size > 268435456 ? ` · ${t.big}` : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													Math.round(it.progress * 100),
													"% ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														className: "ms-2 underline",
														onClick: () => cancelled.current.add(it.id),
														children: t.cancel
													})
												] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 h-1.5 overflow-hidden rounded bg-white/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full bg-[#6b8cff] transition-all",
													style: { width: `${it.progress * 100}%` },
													"data-testid": "fc-progress"
												})
											})]
										}) : null,
										it.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-red-300",
											children: it.error
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 space-y-1",
											children: ALGOS.filter((a) => it.hashes[a]).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 rounded-lg bg-black/25 px-2 py-1 text-[11.5px]",
												dir: "ltr",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-16 shrink-0 font-mono text-[#8fb0ff]",
														children: a
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
														className: "min-w-0 flex-1 break-all font-mono text-[#dfe7ff]",
														"data-testid": `fc-hash-${a}`,
														children: it.hashes[a]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														className: "rounded p-1 hover:bg-white/10",
														onClick: () => copy(it.hashes[a]),
														"aria-label": t.copy,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
													})
												]
											}, a))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "h-8 min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-2 font-mono text-[11.5px] outline-none focus:border-[#6b8cff]",
												placeholder: t.expectedPh,
												value: it.expected,
												onChange: (e) => upd(it.id, { expected: e.target.value }),
												dir: "ltr",
												"aria-label": t.expected,
												"data-testid": "fc-expected"
											}), v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold " + (v.ok ? "bg-emerald-500/20 text-emerald-200" : "bg-red-500/20 text-red-200"),
												"data-testid": "fc-verify",
												children: [v.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" }), v.note ?? `${v.algo}: ${v.ok ? t.match : t.noMatch}`]
											}) : null]
										})
									]
								}, it.id);
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: card + " p-6 text-center text-sm text-[#8da3d6]",
								children: t.empty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: card + " p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-semibold",
									children: t.checksums
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "mt-1 h-20 w-full rounded-lg border border-white/10 bg-black/30 p-2 font-mono text-[11.5px] outline-none",
									placeholder: t.checksumsPh,
									value: sums,
									onChange: (e) => setSums(e.target.value),
									dir: "ltr",
									"data-testid": "fc-sums"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: card + " p-3",
								"data-testid": "fc-compare",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "flex items-center gap-1.5 text-sm font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "size-4 text-[#8fb0ff]" }),
											" ",
											t.compare
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid gap-2 sm:grid-cols-[1fr_1fr_auto]",
										children: [[[
											ca,
											setCa,
											t.a
										], [
											cb,
											setCb,
											t.b
										]].map(([val, set, lab], k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "h-9 min-w-0 rounded-lg border border-white/10 bg-[#0a1630] px-2 text-[13px]",
											value: val,
											onChange: (e) => {
												set(e.target.value);
												setCmp(null);
											},
											"aria-label": lab,
											"data-testid": `fc-cmp-${k ? "b" : "a"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: "",
												children: [
													lab,
													": ",
													t.choose
												]
											}), items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: i.id,
												children: i.file.name
											}, i.id))]
										}, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "h-9 rounded-lg bg-[#3b63ff] px-4 text-[13px] font-semibold text-white disabled:opacity-40",
											disabled: !ca || !cb || ca === cb || cmp?.busy,
											onClick: () => void runCompare(),
											"data-testid": "fc-cmp-run",
											children: t.run
										})]
									}),
									cmp?.busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 overflow-hidden rounded bg-white/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-[#6b8cff]",
											style: { width: `${cmp.p * 100}%` }
										})
									}) : null,
									cmp?.res ? (() => {
										const A = items.find((i) => i.id === ca), B = items.find((i) => i.id === cb);
										const same = ALGOS.filter((a) => A.hashes[a] && B.hashes[a]);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 rounded-lg p-2 text-[12.5px] " + (cmp.res.equal ? "bg-emerald-500/15 text-emerald-100" : "bg-amber-500/15 text-amber-100"),
											"data-testid": "fc-cmp-res",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-semibold",
												children: [cmp.res.equal ? t.equal : t.differ.replace("{o}", cmp.res.offset.toLocaleString()).replace("{h}", cmp.res.offset.toString(16)), cmp.res.sizeDiff ? ` ${t.sizeDiff} (${fmt(A.file.size)} / ${fmt(B.file.size)})` : ""]
											}), same.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-mono text-[11px]",
												dir: "ltr",
												children: [
													a,
													": ",
													A.hashes[a] === B.hashes[a] ? "=" : "≠"
												]
											}, a))]
										});
									})() : null
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: card + " p-4",
								"data-testid": "fc-stats",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-semibold",
										children: t.files
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10.5px] tracking-wider text-[#8da3d6]",
										children: "LOCAL · SHA · MAGIC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 divide-y divide-white/10 text-[13px]",
										children: [
											[
												"#6b8cff",
												t.files,
												String(stats.n)
											],
											[
												"#8fb0ff",
												t.total,
												fmt(stats.size)
											],
											[
												"#fbbf24",
												t.mismatches,
												String(stats.mis)
											],
											[
												"#34d399",
												t.verified,
												String(stats.ok)
											],
											[
												"#f87171",
												t.failed,
												String(stats.bad)
											]
										].map(([c, k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2 py-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "size-2 rounded-full",
													style: { background: c }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex-1",
													children: k
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "text-lg",
													children: v
												})
											]
										}, k))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: card + " p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-semibold",
										children: t.report
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#6b8cff]/50 px-3 text-[13px] disabled:opacity-40",
												disabled: !items.length,
												onClick: () => dl(new Blob([reportText()], { type: "text/plain" }), `file-check-${stamp}.txt`),
												"data-testid": "fc-txt",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), " TXT"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#6b8cff]/50 px-3 text-[13px] disabled:opacity-40",
												disabled: !items.length,
												onClick: () => dl(new Blob([JSON.stringify(report(), null, 2)], { type: "application/json" }), `file-check-${stamp}.json`),
												"data-testid": "fc-json",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), " JSON"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#6b8cff]/50 px-3 text-[13px] disabled:opacity-40",
												disabled: !items.length,
												onClick: () => void exportPdf(),
												"data-testid": "fc-pdfdl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), " PDF"]
											})
										]
									}),
									note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-emerald-300",
										role: "status",
										children: note
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-1 text-[11.5px] text-[#8da3d6]",
								children: t.local
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "mt-6 border-t border-white/10 pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsLegalLinks, {})
		})]
	});
}
//#endregion
export { FileCheckPage as t };
