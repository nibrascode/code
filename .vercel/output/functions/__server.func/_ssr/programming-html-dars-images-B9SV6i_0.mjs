//#region node_modules/.nitro/vite/services/ssr/assets/programming-html-dars-images-B9SV6i_0.js
var az = {
	"about": ["HTML-də şəkillər boş <img> elementindən istifadə edilərək əlavə edilir. Bu element faylın yerini göstərən src və şəkil görünmədiyi hallar üçün alt mətnini tələb edir. Dekorativ şəkillər üçün alt atributu boş qoyulmalıdır. Səhifənin yüklənməsi zamanı sıçramağı önlemek üçün en və hündürlük dəqiqləşdirilməlidir.", "Şəkillərin düzgün formatı seçmək saytda sürətli yüklənməni təmin edir. Fotoğraflar üçün JPEG və ya WebP, şəffaflıq tələb edən loqolar üçün PNG və sadə çəkilişlər üçün SVG uyğundur. Böyük faylları yükləməzdən əvvəl kiçiltmək və ekran kənarındakı şəkillər üçün loading=\"lazy\" istifadə etmək performans artırır."],
	"steps": [
		"HTML koduna <img> elementini əlavə edin və src atributunda faylın yolunu göstərin.",
		"alt atributuna şəkilin qısa və mənalı təsvirini yazın; dekorativdirsə boş qoyun.",
		"Yüklenmə zamanı səhifənin sıçramasını önlemek üçün width və height dəyərlərini təyin edin.",
		"Şəklə izahat əlavə etmək üçün <figure> və <figcaption> elementlərindən istifadə edin."
	],
	"uses": [
		"Bloq yazılarında mətni bəzəmək və oxucunun diqqətini cəlb etmək üçün fotoğraflar əlavə etmək.",
		"Landing səhifələrində məhsul təsvirlərini göstərmək üçün şəffaflıqlı PNG loqolarından istifadə etmək.",
		"Texniki sənədlərdə prosesləri izah etmək üçün SVG çəkilişlər və diaqramlar yerləşdirmək.",
		"Sürətli yüklənmə üçün böyük fotoğrafları WebP formatına çevirmək və lazy loading tətbiq etmək."
	],
	"faq": [
		["alt atributu nə üçün vacibdir?", "alt mətni ekran oxuyucuları üçün vacibdir və şəkil yüklənmədiyi zaman istifadəçiyə məlumat verir. Bu, səhifənin əlçatanlığını artırır və SEO üçün də faydalıdır."],
		["Şəkil formatı necə seçilməlidir?", "Fotoğraflar üçün JPEG və ya WebP, şəffaflıq tələb edən loqolar üçün PNG və vektor qrafiklər üçün SVG seçilməlidir. Fayl ölçüsünü azaltmaq üçün düzgün format vacibdir."],
		["loading=\"lazy\" necə işləyir?", "Bu atribut ekran kənarındakı şəkillərin yüklənməsini gecikdirir. Bu, ilk yüklənmə sürətini artırır və istifadəçi aşağıya sürüşdürdükdə yalnız görünən şəkillər yüklənir."]
	]
};
var en = {
	"about": ["HTML images are inserted using the empty <img> element, which requires a src attribute for the file path and an alt attribute for text description. The alt text is essential for screen readers and when images fail to load. For purely decorative images, the alt attribute should be left empty. Defining width and height prevents layout shifts during loading.", "Choosing the right format optimizes performance. JPEG or WebP suits photos, PNG is best for logos requiring transparency, and SVG is ideal for simple vector drawings. Large files should be compressed before upload. Using loading=\"lazy\" delays the loading of off-screen images, improving initial page speed and user experience."],
	"steps": [
		"Add the <img> element to your HTML and specify the image file path in the src attribute.",
		"Write a short, meaningful description in the alt attribute; leave it empty if the image is decorative.",
		"Set explicit width and height values to prevent the page layout from jumping while the image loads.",
		"Wrap the image in <figure> and add a <figcaption> to logically associate a caption with the image."
	],
	"uses": [
		"Enhancing blog posts with relevant photographs to support the written content visually.",
		"Displaying product images on e-commerce sites using optimized WebP formats for faster loading.",
		"Creating responsive layouts where <picture> serves different image sources based on screen width.",
		"Improving accessibility by providing accurate alt text for screen reader users navigating the site."
	],
	"faq": [
		["Why is alt text important?", "Alt text provides a text alternative for users who cannot see images, such as those using screen readers. It also displays if the image fails to load, ensuring the content remains understandable."],
		["Which image format should I use?", "Use JPEG or WebP for photographs, PNG for images needing transparency like logos, and SVG for scalable vector graphics. Choosing the right format reduces file size and improves load times."],
		["How does lazy loading work?", "The loading=\"lazy\" attribute tells the browser to defer loading images until they are near the viewport. This reduces initial page weight and speeds up the first render."]
	]
};
var ru = {
	"about": ["Изображения в HTML добавляются с помощью пустого элемента <img>. Атрибут src указывает путь к файлу, а alt содержит текстовое описание для скринридеров или при ошибке загрузки. Для декоративных изображений атрибут alt должен быть пустым. Указание ширины и высоты предотвращает смещение макета страницы во время загрузки.", "Выбор правильного формата оптимизирует производительность. JPEG или WebP подходят для фотографий, PNG — для логотипов с прозрачностью, SVG — для простых векторных рисунков. Большие файлы следует сжимать перед загрузкой. Использование loading=\"lazy\" откладывает загрузку изображений вне экрана, что ускоряет начальную отрисовку страницы."],
	"steps": [
		"Добавьте элемент <img> в HTML и укажите путь к файлу в атрибуте src.",
		"Напишите краткое и осмысленное описание в атрибуте alt; оставьте его пустым для декоративных изображений.",
		"Установите явные значения width и height, чтобы страница не «прыгала» во время загрузки изображения.",
		"Окружите изображение тегами <figure> и <figcaption>, чтобы логически связать подпись с картинкой."
	],
	"uses": [
		"Иллюстрация статей блога с помощью фотографий, дополняющих текстовый контент.",
		"Отображение товаров в интернет-магазинах с использованием оптимизированных форматов WebP.",
		"Создание адаптивных макетов, где <picture> предоставляет разные источники изображений в зависимости от ширины экрана.",
		"Повышение доступности сайта за счет предоставления точного текста alt для пользователей скринридеров."
	],
	"faq": [
		["Зачем нужен атрибут alt?", "Текст alt обеспечивает текстовую альтернативу для пользователей, не видящих изображения, например, использующих скринридеры. Он также отображается, если изображение не загрузилось, сохраняя смысл контента."],
		["Какой формат изображения выбрать?", "Используйте JPEG или WebP для фотографий, PNG для изображений с прозрачностью, таких как логотипы, и SVG для векторной графики. Правильный формат уменьшает размер файла и время загрузки."],
		["Как работает ленивая загрузка?", "Атрибут loading=\"lazy\" указывает браузеру отложить загрузку изображений, пока они не попадут в область видимости. Это снижает начальный вес страницы и ускоряет первую отрисовку."]
	]
};
var ar = {
	"about": ["تُضاف الصور في HTML باستخدام عنصر <img> الفارغ. يتطلب هذا العنصر خاصية src لمسار الملف وخاصية alt لوصف نصي. يُعد نص alt ضروريًا لقارئات الشاشة وعند فشل تحميل الصورة. يجب ترك خاصية alt فارغة للصور الزخرفية. تحديد العرض والارتفاع يمنع انزياح تخطيط الصفحة أثناء التحميل.", "اختيار الصيغة المناسبة يحسن الأداء. يناسب JPEG أو WebP الصور الفوتوغرافية، بينما يناسب PNG الشعارات التي تتطلب شفافية، و SVG للرسميات البسيطة. يجب ضغط الملفات الكبيرة قبل الرفع. استخدام loading=\"lazy\" يؤجل تحميل الصور خارج الشاشة، مما يحسن سرعة الصفحة الأولية."],
	"steps": [
		"أضف عنصر <img> إلى HTML وحدد مسار ملف الصورة في خاصية src.",
		"اكتب وصفًا قصيرًا ومفيدًا في خاصية alt؛ اتركها فارغة إذا كانت الصورة زخرفية.",
		"عيّن قيمًا صريحة للعرض والارتفاع لمنع قفز تخطيط الصفحة أثناء تحميل الصورة.",
		"غلّف الصورة بوسمي <figure> و <figcaption> لربط التسمية المنطقية بالصورة."
	],
	"uses": [
		"تعزيز مقالات المدونات بصور فوتوغرافية تدعم المحتوى النصي بصريًا.",
		"عرض صور المنتجات في المتاجر الإلكترونية باستخدام صيغ WebP المحسنة لتحميل أسرع.",
		"إنشاء تخطيطات متجاوبة حيث يوفر <picture> مصادر صور مختلفة بناءً على عرض الشاشة.",
		"تحسين إمكانية الوصول من خلال توفير نص alt دقيق لمستخدمي قارئات الشاشة."
	],
	"faq": [
		["لماذا نص alt مهم؟", "يوفر نص alt بديلًا نصيًا للمستخدمين الذين لا يمكنهم رؤية الصور، مثل مستخدمي قارئات الشاشة. كما يظهر إذا فشل تحميل الصورة، مما يضمن بقاء المحتوى مفهومًا."],
		["أي صيغة صورة يجب استخدامها؟", "استخدم JPEG أو WebP للصور الفوتوغرافية، و PNG للصور التي تتطلب شفافية مثل الشعارات، و SVG للرسوميات المتجهية. اختيار الصيغة الصحيحة يقلل حجم الملف ويحسن وقت التحميل."],
		["كيف يعمل التحميل الكسول؟", "تخبر الخاصية loading=\"lazy\" المتصفح بتأجيل تحميل الصور حتى تقترب من مجال الرؤية. يقلل هذا من وزن الصفحة الأولي ويسرع العرض الأولي."]
	]
};
var tr = {
	"about": ["HTML'de resimler boş <img> öğesi kullanılarak eklenir. Bu öğe, dosya yolu için src ve metin açıklaması için alt özniteliğini gerektirir. Alt metni ekran okuyucular ve resim yüklenmediğinde önemlidir. Sadece süsleyici resimler için alt özniteliği boş bırakılmalıdır. Genişlik ve yüksekliğin tanımlanması, yükleme sırasında yerleşim kaymalarını önler.", "Doğru formatı seçmek performansı optimize eder. JPEG veya WebP fotoğraflar için uygundur, PNG şeffaflık gerektiren logolar için en iyisidir ve SVG basit vektör çizimleri için idealdir. Büyük dosyalar yüklenmeden önce sıkıştırılmalıdır. loading=\"lazy\" kullanımı, ekran dışındaki resimlerin yüklenmesini geciktirir ve sayfa hızını artırır."],
	"steps": [
		"HTML'nize <img> öğesini ekleyin ve src özniteliğinde resim dosyası yolunu belirtin.",
		"alt özniteliğine kısa ve anlamlı bir açıklama yazın; resim süsleyiciyse boş bırakın.",
		"Sayfa yerleşiminin resim yüklenirken zıplamasını önlemek için açık genişlik ve yükseklik değerleri ayarlayın.",
		"Resmi <figure> ile sarın ve <figcaption> ekleyerek başlığı resme mantıksal olarak bağlayın."
	],
	"uses": [
		"Blog yazılarını görsel olarak destekleyen ilgili fotoğraflarla zenginleştirmek.",
		"E-ticaret sitelerinde daha hızlı yükleme için optimize edilmiş WebP formatlarında ürün görüntüleri göstermek.",
		"Ekran genişliğine göre farklı resim kaynakları sunan <picture> ile duyarlı yerleşimler oluşturmak.",
		"Ekran okuyucu kullanan kullanıcılar için doğru alt metni sağlayarak erişilebilirliği artırmak."
	],
	"faq": [
		["Alt metni neden önemlidir?", "Alt metni, görüntüleri göremeyen kullanıcılar için metin alternatifi sağlar. Ayrıca resim yüklenmezse görüntülenir, bu da içeriğin anlaşılır kalmasını sağlar."],
		["Hangi resim formatını kullanmalıyım?", "Fotoğraflar için JPEG veya WebP, şeffaflık gerektiren logolar için PNG ve ölçeklenebilir vektör grafikler için SVG kullanın. Doğru format dosya boyutunu azaltır."],
		["Tembel yükleme nasıl çalışır?", "loading=\"lazy\" özniteliği, tarayıcıya resimleri görünüm alanına yaklaşana kadar yüklemeyi ertelemesini söyler. Bu, başlangıç sayfa ağırlığını azaltır ve ilk çizimi hızlandırır."]
	]
};
var programming_html_dars_images_default = {
	az,
	en,
	ru,
	ar,
	tr
};
//#endregion
export { ar, az, programming_html_dars_images_default as default, en, ru, tr };
