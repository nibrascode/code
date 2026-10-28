//#region node_modules/.nitro/vite/services/ssr/assets/programming-html-sual-link-sekil-C_dF_4mf.js
var az = {
	"about": ["Veb-saytlar mətnlərdən ibarət deyil; onlar şəkillər və hiperistinadlar vasitəsilə bir-biri ilə əlaqələnir. HTML dilində başqa səhifələrə keçid etmək üçün istinad ünvanı tələb olunur. Bu ünvan xarici internet səhifələri, daxili fayllar, səhifə daxilindəki müəyyən bölmələr və ya birbaşa elektron poçt ünvanları ola bilər.", "Şəkilləri səhifəyə daxil etmək üçün isə faylın yerini göstərən mənbə və alternativ mətn istifadə edilir. Alternativ mətn təsvirin yüklənmədiyi hallarda və ekran oxuyucularından istifadə edən şəxslər üçün vacibdir. Ölçülərin qabaqcadan təyin edilməsi isə səhifənin yüklənərkən ani olaraq sıçramasının qarşısını alır."],
	"steps": [
		"İstinad üçün a teqindən istifadə edin və ünvanı href atributuna yazın.",
		"Xarici keçidlər üçün mütləq https:// ilə başlayan tam ünvan daxil edin.",
		"Şəkil əlavə etmək üçün img teqindən və mənbəni göstərən src atributundan yararlanın.",
		"Şəkilə təsvir vermək üçün alt atributunu yazın, bəzəkli şəkillər üçün isə boş saxlayın."
	],
	"uses": [
		"Başqa internet saytlarına istinad vermək üçün xarici keçidlər yazılır.",
		"Sayt daxilində digər səhifələrə keçid etmək üçün daxili fayl yolları qeyd olunur.",
		"Səhifə daxilində müəyyən bir hissəyə tez keçid etmək üçün işarələrə istinad edilir.",
		"İstifadəçilərin birbaşa məktub göndərə bilməsi üçün e-poçt ünvanları əlavə edilir."
	],
	"faq": [
		["Xarici linklər üçün nədən istifadə olunmalıdır?", "Başqa sayta gedən hər bir istinad mütləq https:// ilə başlamalıdır ki, brauzer ünvanı düzgün oxusun və təhlükəsiz keçidi təmin etsin."],
		["Şəkil niyə görünməyə bilər?", "Əgər şəkil ekranda görünmürsə, faylın adını, qovluq strukturunu və simvolların böyük-kiçik olmasını yoxlamaq lazımdır."],
		["Alt atributu nə üçündür?", "Bu mətn şəkil yüklənmədikdə və ya görmə məhdudiyyətli şəxslər üçün ekran oxuyucuları işlədikdə təsviri izah etmək məqsədilə yazılır."]
	]
};
var en = {
	"about": ["Web pages rely on hyperlinks and embedded images to connect information and present visual content. In HTML, establishing a connection to another destination requires specifying a precise address. This address can point to an external website starting with https://, a relative path inside your own site, a specific section on the same page, or an email address.", "Displaying visual elements involves pointing to the correct file path while providing a descriptive fallback text. This descriptive text ensures accessibility for screen readers and acts as a placeholder if the graphic fails to load. Defining dimensions beforehand also prevents layout shifting while the page content is loading in the browser."],
	"steps": [
		"Use the anchor element and place the destination address inside the href attribute.",
		"Start any link pointing to an external website with https://.",
		"Add an image using the img element along with the src attribute for the file path.",
		"Provide a description using the alt attribute, leaving it empty only for pure decoration."
	],
	"uses": [
		"Direct visitors to external web pages using absolute https addresses.",
		"Connect pages within the same website through relative file paths.",
		"Jump to a specific section on the current page using anchor identifiers.",
		"Enable direct communication by linking to an email address."
	],
	"faq": [
		["What must external links start with?", "Any link pointing to another website must start with https:// to ensure the browser processes the destination correctly."],
		["Why might an image fail to show?", "If an image does not display, you should check the exact file name, the folder structure, and upper or lower case letters."],
		["When should alt text be left empty?", "You should use alt=\"\" only for pure decoration so screen readers skip purely decorative graphics."]
	]
};
var ru = {
	"about": ["Веб-страницы состоят не только из текста: гиперссылки и изображения связывают информацию воедино. В HTML для перехода на другой адрес используется специальный атрибут. Ссылки могут вести на внешний сайт, начинающийся с https://, на файл внутри вашего собственного сайта, на определенный раздел текущей страницы или на адрес электронной почты.", "Для добавления изображений указывается путь к файлу и текстовое описание. Описание необходимо для программ чтения с экрана и на случай, если графический файл не удается загрузить. Установка ширины и высоты заранее также предотвращает нежелательное смещение макета во время загрузки страницы."],
	"steps": [
		"Используйте тег ссылки и поместите целевой адрес внутрь атрибута href.",
		"Для внешних сайтов обязательно указывайте адрес, начинающийся с https://.",
		"Добавьте изображение с помощью тега img и укажите путь к файлу в атрибуте src.",
		"Задайте текстовое описание в атрибуте alt, оставляя его пустым только для чисто декоративных элементов."
	],
	"uses": [
		"Перенаправление пользователей на другие веб-сайты через внешние ссылки.",
		"Связывание страниц между собой внутри одного сайта с помощью путей к файлам.",
		"Быстрый переход к определенному разделу на той же странице.",
		"Создание ссылок для отправки электронных писем на конкретный адрес."
	],
	"faq": [
		["С чего должны начинаться ссылки на другие сайты?", "Ссылка на внешний ресурс должна обязательно начинаться с https://, чтобы браузер правильно распознал адрес."],
		["Почему картинка может не отображаться?", "Если изображение не показывается, проверьте имя файла, правильность папки, а также регистр букв."],
		["Для чего нужен атрибут alt?", "Он служит текстовым описанием для программ чтения с экрана и отображается в случае сбоя загрузки картинки."]
	]
};
var ar = {
	"about": ["لا تعتمد صفحات الويب على النصوص وحدها، بل تتصل ببعضها عبر الروابط والصور. في لغة HTML، تتطلب إضافة ارتباط عنوان دقيق لتوجيه المستخدم. يمكن أن يكون هذا العنوان موقعاً خارجياً يبدأ بـ https://، أو مسار ملف داخل موقعك، أو قسماً محدداً داخل نفس الصفحة، أو عنوان بريد إلكتروني مباشر.", "يتطلب إدراج الصور تحديد مسار الملف مع توفير وصف نصي بديل. هذا الوصف النصي ضروري للمستخدمين الذين يعتمدون على قارئات الشاشة وللحالات التي لا يظهر فيها العنصر البصري. كما يساعد تحديد العرض والارتفاع مسبقاً في منع قفز الصفحة أثناء التحميل."],
	"steps": [
		"استخدم عنصر الرابط وضع العنوان المستهدف داخل سمة href.",
		"تأكد من أن أي رابط لموقع خارجي يبدأ بـ https://.",
		"أضف صورة باستخدام عنصر img مع سمة src لتحديد مسار الملف.",
		"ضع وصفاً نصياً باستخدام سمة alt، واتركه فارغاً فقط للزينة البحتة."
	],
	"uses": [
		"ربط المستخدمين بمواقع الويب الخارجية عبر عناوين الإنترنت الكاملة.",
		"التنقل بين الصفحات الداخلية ضمن نفس الموقع باستخدام مسارات الملفات.",
		"القفز السريع إلى قسم معين داخل نفس الصفحة باستخدام الرموز.",
		"تسهيل التواصل المباشر من خلال الربط بعنوان البريد الإلكتروني."
	],
	"faq": [
		["بماذا يجب أن تبدأ الروابط الخارجية؟", "يجب أن تبدأ أي وصلة إلى موقع آخر بـ https:// لضمان فهم المتصفح للعنوان بشكل صحيح وتوجيه المستخدم بسلاسة."],
		["لماذا قد لا تعمل الصورة في الصفحة؟", "إذا لم تظهر الصورة، فعليك التحقق من اسم الملف بدقة، ومجلد التخزين، وحالة الأحرف الكبيرة والصغيرة."],
		["متى يتم ترك النص البديل فارغاً؟", "يجب استخدام سمة فارغة alt=\"\" حصرياً للرسومات ذات الطابع الزخرفي البحت لكي تتجاهلها قارئات الشاشة."]
	]
};
var tr = {
	"about": ["Web sayfaları yalnızca metinlerden oluşmaz; bilgiler birbirine bağlantılar ve görseller aracılığıyla bağlanır. HTML dilinde başka bir konuma geçiş yapmak için bir hedef adres gereklidir. Bu adres https:// ile başlayan dış web sitelerini, site içi dosya yollarını, sayfa içindeki belirli bölümleri veya doğrudan e-posta adreslerini içerebilir.", "Görselleri sayfaya eklemek için dosya yolunu gösteren kaynak ve alternatif bir metin kullanılır. Alternatif metin, görselin yüklenmediği durumlarda ve ekran okuyucular kullanan kişiler için hayati önem taşır. Genişlik ve yükseklik değerlerinin önceden ayarlanması ise sayfa yüklenirken aniden kaymasını önler."],
	"steps": [
		"Bağlantı için a etiketini kullanın ve hedef adresi href özniteliğinin içine yazın.",
		"Dış bağlantılar için mutlaka https:// ile başlayan tam bir adres girin.",
		"Görsel eklemek için img etiketinden ve dosya yolunu belirten src özniteliğinden yararlanın.",
		"Görseli tanımlamak için alt özniteliğini kullanın, yalnızca saf süsleme amaçlı öğeler için boş bırakın."
	],
	"uses": [
		"Başka internet sitelerine yönlendirme yapmak için dış bağlantılar eklenir.",
		"Site içindeki diğer sayfalara geçiş sağlamak için dosya yolları kullanılır.",
		"Aynı sayfa içinde belirli bir bölüme hızlıca atlamak için bağlantı işaretleri verilir.",
		"Kullanıcıların doğrudan mesaj gönderebilmesi için e-posta adresleri bağlanır."
	],
	"faq": [
		["Harici bağlantılar ne ile başlamalıdır?", "Başka bir siteye giden her bağlantı, tarayıcının adresi doğru algılaması için mutlaka https:// ile başlamalıdır."],
		["Görsel neden görünmeyebilir?", "Eğer resim ekranda görünmüyorsa dosya adını, klasör yapısını ve harflerin büyük veya küçük olmasını kontrol etmelisiniz."],
		["Alt özniteliği hangi durumlarda boş bırakılır?", "Ekran okuyucuların saf süsleme amaçlı grafikleri atlaması için yalnızca alt=\"\" kullanılmalıdır."]
	]
};
var programming_html_sual_link_sekil_default = {
	az,
	en,
	ru,
	ar,
	tr
};
//#endregion
export { ar, az, programming_html_sual_link_sekil_default as default, en, ru, tr };
