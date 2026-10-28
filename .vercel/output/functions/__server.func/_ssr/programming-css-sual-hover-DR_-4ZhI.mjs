//#region node_modules/.nitro/vite/services/ssr/assets/programming-css-sual-hover-DR_-4ZhI.js
var az = {
	"about": ["Veb səhifələrdə mətn ölçüsünü və kursor üzərinə gələndə rəng dəyişikliyini tənzimləmək üçün CSS istifadə olunur. Ölçü mətnin böyüklüyünü və ya qutunun enini müəyyən edir, rəng isə elementin görünüşünü formalaşdırır. Bu iki xassə bir-birindən ayrı işləyir: biri yer tutur, digəri isə rəngləyir.", "Veb-dizaynerlər elementlərin interaktivliyini artırmaq istədikdə bu üsula ehtiyac duyurlar. Kursor elementi üzərinə gələndə işləyən psevdo-sinif vasitəsilə düymələr və keçidlər kliklənə bilən hiss olunur. Kursor kənarlaşanda isə əvvəlki rəng bərpa olunur, bu da istifadəçi təcrübəsini yaxşılaşdırır."],
	"steps": [
		"Mətnin ölçüsünü dəyişmək üçün font-size xassəsindən istifadə edin.",
		"Qutunun enini məhdudlaşdırmaq üçün width xassəsini daxil edin.",
		"Kursor üzərə gələndə baş verən dəyişikliklər üçün :hover psevdo-sinfini yazın.",
		"Əsas rəngin həmişə oxunaqlı olmasını təmin edin."
	],
	"uses": [
		"Sayt daxilindəki keçidlərin üzərinə kursor gələndə rəngini ağ etmək üçün istifadə olunur.",
		"Başlıqların və mətnlərin ölçüsünü piksel ilə dəqiq tənzimləmək üçün tətbiq edilir.",
		"Düymələrin interaktivliyini artıraraq onların kliklənə bilən olduğunu göstərmək üçün yazılır.",
		"Mətn qutularının enini məhdudlaşdıraraq sətrin səliqəli şəkildə aşağı düşməsini təmin edir."
	],
	"faq": [
		[":hover həmişə görünür?", "Xeyr, yalnız kursor elementin üzərində olduqda görünür. Kursor kənarlaşdıqda köhnə rəng avtomatik olaraq geri qayıdır."],
		["font-size xassəsi harada yazılır?", "font-size xassəsi selektorun daxilində yazılır, məsələn, h1 { font-size: 28px; } şəklində təyin edilir."],
		["Telefonlarda hover effekti necə işləyir?", "Telefonda barmaq toxunan zaman qısa müddətə görünə bilər. Buna görə əsas rəng həmişə hover olmadan da oxunaqlı qalmalıdır."]
	]
};
var en = {
	"about": ["CSS size and hover properties allow you to change text dimensions and switch colors when the pointer is over an element. Font size controls how big the text appears, while width sets the box dimensions. Size is completely separate from color, where one takes physical space and the other paints the appearance.", "People need these features when designing interactive web pages where buttons and links must feel clickable. The hover state activates only while the pointer rests on the element, returning to the original color once the pointer leaves. This provides clear visual feedback to users navigating the interface."],
	"steps": [
		"Set the text dimensions using the font-size property inside a CSS selector.",
		"Define the box width using the width property to limit the container size.",
		"Add the :hover pseudo-class to style the element when the pointer moves over it.",
		"Ensure the base text color remains readable even without the hover effect."
	],
	"uses": [
		"Changing navigation link colors when a mouse pointer moves over them.",
		"Controlling heading dimensions and container widths for better layout structure.",
		"Making buttons feel responsive and clickable by altering their visual state.",
		"Limiting box width so text wraps neatly to the next line."
	],
	"faq": [
		["Is :hover always visible?", "No. It is only visible while the pointer is on the element. When the pointer leaves, the old color returns."],
		["Where does font-size go?", "It goes inside a CSS selector, such as h1 { font-size: 28px; }."],
		["Is there hover on a phone?", "It may show briefly while a finger holds. The main color should stay readable without hover."]
	]
};
var ru = {
	"about": ["Свойства размера и наведения в CSS позволяют изменять размер текста и цвет элемента при наведении указателя мыши. Размер шрифта определяет крупноту текста, а ширина ограничивает размер блока. Размер отделен от цвета: одно занимает пространство, а другое раскрашивает элемент.", "Эти приемы необходимы при создании интерактивных веб-страниц, где ссылки и кнопки должны реагировать на действия пользователя. Состояние наведения работает только тогда, когда указатель находится на элементе, а при уходе возвращает прежний цвет, создавая ощущение кликабельности."],
	"steps": [
		"Задайте размер текста с помощью свойства font-size внутри селектора.",
		"Ограничьте ширину блока с помощью свойства width.",
		"Добавьте псевдокласс :hover для стилизации элемента при наведении указателя.",
		"Убедитесь, что основной цвет остается читаемым без эффекта наведения."
	],
	"uses": [
		"Изменение цвета текстовых ссылок при наведении на них указателя мыши.",
		"Управление размером заголовков и шириной блоков для структурирования контента.",
		"Придание кнопкам интерактивности, чтобы они выглядели кликабельными.",
		"Ограничение ширины блока для автоматического переноса длинного текста на новую строку."
	],
	"faq": [
		["Всегда ли виден :hover?", "Нет. Только пока указатель находится на элементе. Когда указатель уходит, возвращается прежний цвет."],
		["Куда пишется font-size?", "Внутрь селектора, например: h1 { font-size: 28px; }."],
		["Есть ли наведение на телефоне?", "Оно может отображаться кратко при удержании пальца. Основной цвет должен оставаться читаемым без наведения."]
	]
};
var ar = {
	"about": ["تتيح لك خصائص الحجم والمرور في سي إس إس تغيير حجم النص وتبديل اللون عند توجيه المؤشر فوق العنصر. يحدد حجم الخط كبر النص بينما يحدد العرض حجم الصندوق. الحجم منفصل تماماً عن اللون، حيث يأخذ أحدهما مساحة بينما يلون الآخر المظهر.", "يحتاج الأشخاص إلى هذه الميزات عند تصميم صفحات ويب تفاعلية حيث يجب أن تبدو الأرانب والأزرار قابلة للنقر. تتفعل حالة المرور فقط أثناء استقرار المؤشر على العنصر وتعود إلى اللون القديم عند المغادرة، مما يوفر استجابة مرئية واضحة."],
	"steps": [
		"حدد حجم النص باستخدام خاصية font-size داخل محدد سي إس إس.",
		"قم بتحديد عرض الصندوق باستخدام خاصية width لتقييد حجم الحاوية.",
		"أضف فئة التمرير الجزئية :hover لتنسيق العنصر عند مرور المؤشر فوقه.",
		"تأكد من أن لون النص الأساسي يظل مقروءاً حتى بدون تأثير المرور."
	],
	"uses": [
		"تغيير ألوان روابط التنقل عند تحريك مؤشر الفأرة فوقها.",
		"التحكم في أبعاد العناوين وعروض الحاويات لتحسين بنية التخطيط.",
		"جعل الأزرار تبدو تفاعلية وقابلة للنقر عن طريق تغيير حالتها البصرية.",
		"تقييد عرض الصندوق بحيث ينلت النص بشكل مرتب إلى السطر التالي."
	],
	"faq": [
		["هل :hover مرئي دائماً؟", "لا. فقط بينما يكون المؤشر على العنصر. عندما يغادر المؤشر، يعود اللون القديم."],
		["أين يتم وضع font-size؟", "يتم وضعه داخل المحدد، مثل: h1 { font-size: 28px; }."],
		["هل يوجد تمرير على الهاتف؟", "قد يظهر لفترة وجيزة أثناء الضغط بالإصبع. يجب أن يبقى اللون الرئيسي مقروءاً بدون تمرير."]
	]
};
var tr = {
	"about": ["CSS boyut ve hover özellikleri, işaretçi bir öğenin üzerindeyken metin boyutunu değiştirmenize ve renk değiştirmenize olanak tanır. Yazı tipi boyutu metnin ne kadar büyük olduğunu belirlerken, genişlik kutu boyutunu sınırlar. Boyut renkten ayrıdır: biri yer kaplar, diğeri boyar.", "İnsanlar, düğmelerin ve bağlantıların tıklanabilir hissettirmesi gereken interaktif web sayfaları tasarlarken bu özelliklere ihtiyaç duyar. Hover durumu yalnızca işaretçi öğenin üzerindeyken çalışır ve işaretçi ayrıldığında eski renk geri döner, bu da kullanıcılara görsel geri bildirim sağlar."],
	"steps": [
		"Bir seçici içinde font-size özelliğini kullanarak metin boyutunu ayarlayın.",
		"Kutu boyutunu sınırlamak için width özelliğini kullanarak genişliği tanımlayın.",
		"İşaretçi üzerine geldiğinde öğeyi biçimlendirmek için :hover sözde sınıfını ekleyin.",
		"Hover efekti olmadan bile temel metin renginin okunabilir kalmasını sağlayın."
	],
	"uses": [
		"Fare işaretçisi üzerlerine geldiğinde bağlantı renklerini değiştirmek için kullanılır.",
		"Daha iyi bir düzen yapısı için başlık boyutlarını ve kutu genişliklerini kontrol eder.",
		"Görsel durumlarını değiştirerek düğmelerin tıklanabilir hissetmesini sağlar.",
		"Metnin alt satıra düzgün bir şekilde kayması için kutu genişliğini sınırlar."
	],
	"faq": [
		[":hover her zaman görünür mü?", "Hayır. Yalnızca işaretçi öğenin üzerindeyken görünür. İşaretçi ayrıldığında eski renk geri döner."],
		["font-size nereye yazılır?", "Bir seçicinin içine yazılır, örneğin: h1 { font-size: 28px; }."],
		["Telefonda hover var mı?", "Parmak basılı tutulduğunda kısa süreliğine görünebilir. Ana renk hover olmadan da okunabilir kalmalıdır."]
	]
};
var programming_css_sual_hover_default = {
	az,
	en,
	ru,
	ar,
	tr
};
//#endregion
export { ar, az, programming_css_sual_hover_default as default, en, ru, tr };
