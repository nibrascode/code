import { a as U, i as S, r as P, t as C } from "./dsl-0GJBPSOD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/html-images-C8mWj8aj.js
var html_images_default = [
	S("img", [
		"img elementi və alt mətni",
		"The img element and alt text",
		"img elemanı ve alt metni",
		"العنصر img والنص البديل",
		"Элемент img и alt-текст"
	], P("Şəkil boş <img> elementi ilə əlavə olunur: src faylı, alt isə şəkil görünmədikdə və ya ekran oxuyucusu üçün mətn təsvirini bildirir. Dekorativ şəkildə alt=\"\" boş qalır.", "An image is added with the empty <img> element: src is the file and alt is the text description for when the image is not visible or for screen readers. For a purely decorative image leave alt=\"\" empty.", "Görsel boş <img> elemanıyla eklenir: src dosyayı, alt ise görsel görünmediğinde veya ekran okuyucular için metin açıklamasını belirtir. Salt süs görselde alt=\"\" boş bırakılır.", "تُضاف الصورة بالعنصر الفارغ <img>: تحدد src الملف وتحدد alt وصفًا نصيًا يُستخدم عند تعذر ظهور الصورة أو لقارئات الشاشة. وفي الصور الزخرفية تُترك alt=\"\" فارغة.", "Изображение добавляют пустым элементом <img>: src — файл, alt — текстовое описание на случай, если картинка не видна, и для экранных дикторов. У чисто декоративной картинки alt=\"\" оставляют пустым."), C(`<img src="images/bridge.jpg"
     alt="Evening view of a stone bridge over a river"
     width="640" height="400">`), U([
		"Alt qısa və mənalı olsun, «şəkil» sözü ilə başlamasın.",
		"Keep alt short and meaningful; do not begin with “image of”.",
		"Alt kısa ve anlamlı olsun, «görsel» sözüyle başlamasın.",
		"اجعل alt قصيرًا ومفيدًا ولا تبدأه بكلمة «صورة».",
		"Alt должен быть коротким и содержательным, без слов «картинка»."
	], [
		"width və height yazmaq səhifənin yüklənərkən atlamasının qarşısını alır.",
		"Setting width and height stops the page from jumping while it loads.",
		"width ve height yazmak sayfanın yüklenirken sıçramasını önler.",
		"تحديد width وheight يمنع قفز الصفحة أثناء التحميل.",
		"Указание width и height предотвращает «прыжки» страницы при загрузке."
	])),
	S("formats", [
		"Formatlar və yüngül şəkillər",
		"Formats and light images",
		"Biçimler ve hafif görseller",
		"الصيغ والصور الخفيفة",
		"Форматы и лёгкие изображения"
	], P("Fotoşəkillər üçün JPEG və ya WebP, şəffaflıq lazım olan loqo üçün PNG, çox sadə çertyojlar üçün SVG uyğundur. Böyük faylları yükləməzdən əvvəl kiçilt. loading=\"lazy\" ekranda görünməyən şəkillərin gec yüklənməsini təmin edir.", "JPEG or WebP suit photos, PNG suits logos needing transparency, and SVG suits simple drawings. Shrink large files before uploading. loading=\"lazy\" delays images that are off-screen.", "Fotoğraflar için JPEG veya WebP, şeffaflık gereken logolar için PNG, çok basit çizimler için SVG uygundur. Büyük dosyaları yüklemeden önce küçült. loading=\"lazy\" ekranda görünmeyen görsellerin geç yüklenmesini sağlar.", "يناسب JPEG أو WebP الصور الفوتوغرافية، وPNG الشعارات التي تحتاج شفافية، وSVG الرسوم البسيطة. صغّر الملفات الكبيرة قبل رفعها. ويؤجل loading=\"lazy\" تحميل الصور غير الظاهرة.", "Для фотографий подходят JPEG или WebP, для логотипов с прозрачностью — PNG, для простых рисунков — SVG. Уменьшайте большие файлы перед загрузкой. loading=\"lazy\" откладывает загрузку изображений вне экрана."), C(`<img src="photo.webp" alt="Mountain village" loading="lazy" width="800" height="500">`)),
	S("figure", [
		"figure və figcaption",
		"figure and figcaption",
		"figure ve figcaption",
		"figure وfigcaption",
		"figure и figcaption"
	], P("Şəkli izahlı yazı ilə birlikdə göstərmək üçün <figure> və <figcaption> işlət. Beləcə yazı şəklə məntiqi olaraq bağlanır. Fərqli ölçülü ekranlar üçün <picture> ilə müxtəlif mənbələr vermək olar.", "To show an image with a caption use <figure> and <figcaption>; the caption becomes logically tied to the image. For different screen sizes, <picture> can offer several sources.", "Görseli açıklamasıyla göstermek için <figure> ve <figcaption> kullan; böylece yazı görsele mantıksal olarak bağlanır. Farklı ekran boyutları için <picture> ile birden çok kaynak verilebilir.", "لعرض صورة مع تعليقها استخدم <figure> و<figcaption> فيرتبط التعليق بالصورة منطقيًا. ولأحجام الشاشات المختلفة يمكن لـ <picture> تقديم عدة مصادر.", "Чтобы показать изображение с подписью, используйте <figure> и <figcaption>: подпись логически связывается с картинкой. Для экранов разного размера <picture> позволяет задать несколько источников."), C(`<figure>
  <img src="map.png" alt="Map of the old town">
  <figcaption>Fig. 1 — The old town and its main gates.</figcaption>
</figure>

<picture>
  <source media="(min-width: 800px)" srcset="wide.webp">
  <img src="narrow.webp" alt="Harbour at sunrise">
</picture>`))
];
//#endregion
export { html_images_default as default };
