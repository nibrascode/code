import { i as S, n as N, r as P, t as C } from "./dsl-0GJBPSOD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/html-basic-syntax-BiSbLtVP.js
var html_basic_syntax_default = [
	S("element", [
		"Element, teq və atribut",
		"Elements, tags and attributes",
		"Eleman, etiket ve öznitelik",
		"العنصر والوسم والسمة",
		"Элемент, тег и атрибут"
	], P("HTML səhifənin hissələrini teqlərlə işarələyir. Element açılış teqindən, məzmundan və bağlanış teqindən ibarətdir: <p>Salam</p>. Teq brauzerə «bu mətn abzasdır» deyir.", "HTML marks up the parts of a page with tags. An element is an opening tag, content and a closing tag: <p>Hello</p>. The tag tells the browser “this text is a paragraph”.", "HTML, sayfanın parçalarını etiketlerle işaretler. Bir eleman açılış etiketi, içerik ve kapanış etiketinden oluşur: <p>Merhaba</p>. Etiket tarayıcıya «bu metin bir paragraftır» der.", "تعلّم HTML أجزاء الصفحة بالوسوم. يتكون العنصر من وسم فتح ومحتوى ووسم إغلاق: <p>مرحبًا</p>. ويخبر الوسم المتصفح أن «هذا النص فقرة».", "HTML размечает части страницы тегами. Элемент состоит из открывающего тега, содержимого и закрывающего тега: <p>Привет</p>. Тег сообщает браузеру: «этот текст — абзац»."), P("Atribut elementə əlavə məlumat verir və açılış teqində ad=\"qiymət\" şəklində yazılır. Bəzi elementlər boşdur və bağlanış teqi olmur: <img>, <br>, <hr>, <input>.", "An attribute gives an element extra information and is written in the opening tag as name=\"value\". Some elements are empty and have no closing tag: <img>, <br>, <hr>, <input>.", "Öznitelik elemana ek bilgi verir ve açılış etiketinde ad=\"değer\" biçiminde yazılır. Bazı elemanlar boştur ve kapanış etiketi yoktur: <img>, <br>, <hr>, <input>.", "تعطي السمة العنصر معلومات إضافية وتُكتب في وسم الفتح بالشكل name=\"value\". وبعض العناصر فارغة بلا وسم إغلاق: <img> و<br> و<hr> و<input>.", "Атрибут добавляет элементу сведения и записывается в открывающем теге как имя=\"значение\". Некоторые элементы пустые и не имеют закрывающего тега: <img>, <br>, <hr>, <input>."), C(`<p class="note" lang="en">Hello, <strong>world</strong>!</p>
<img src="logo.png" alt="Company logo">
<a href="https://example.com" target="_blank">Open</a>`)),
	S("skeleton", [
		"Səhifənin skeleti",
		"The page skeleton",
		"Sayfa iskeleti",
		"هيكل الصفحة",
		"Каркас страницы"
	], P("Hər HTML sənədi eyni skeletə malikdir: doctype, html, head və body. head-də səhifə haqqında məlumat (başlıq, kodlaşdırma) olur, body-də isə istifadəçinin gördüyü hər şey.", "Every HTML document has the same skeleton: doctype, html, head and body. The head holds information about the page (title, encoding) and the body holds everything the visitor sees.", "Her HTML belgesi aynı iskelete sahiptir: doctype, html, head ve body. head'de sayfa hakkında bilgi (başlık, karakter kodlaması), body'de ise ziyaretçinin gördüğü her şey bulunur.", "لكل مستند HTML الهيكل نفسه: doctype وhtml وhead وbody. يحوي head معلومات عن الصفحة (العنوان والترميز) ويحوي body كل ما يراه الزائر.", "У каждого HTML-документа один и тот же каркас: doctype, html, head и body. В head — сведения о странице (заголовок, кодировка), в body — всё, что видит посетитель."), C(`<!DOCTYPE html>
<html lang="az">
  <head>
    <meta charset="utf-8">
    <title>İlk səhifəm</title>
  </head>
  <body>
    <h1>Salam, dünya!</h1>
    <p>Bu, mənim ilk səhifəmdir.</p>
  </body>
</html>`)),
	S("rules", [
		"Yazı qaydaları",
		"Writing rules",
		"Yazım kuralları",
		"قواعد الكتابة",
		"Правила записи"
	], N([
		"Teqləri düzgün iç-içə qoy: <p><em>…</em></p>, <p><em>…</p></em> yox.",
		"Nest tags properly: <p><em>…</em></p>, not <p><em>…</p></em>.",
		"Etiketleri düzgün iç içe koy: <p><em>…</em></p>, <p><em>…</p></em> değil.",
		"عشّش الوسوم بشكل صحيح: <p><em>…</em></p> وليس <p><em>…</p></em>.",
		"Вкладывайте теги правильно: <p><em>…</em></p>, а не <p><em>…</p></em>."
	], [
		"Atribut qiymətlərini dırnaqda yaz.",
		"Put attribute values in quotes.",
		"Öznitelik değerlerini tırnak içinde yaz.",
		"ضع قيم السمات بين علامات اقتباس.",
		"Значения атрибутов берите в кавычки."
	], [
		"Teq adlarını kiçik hərflə yaz.",
		"Write tag names in lowercase.",
		"Etiket adlarını küçük harfle yaz.",
		"اكتب أسماء الوسوم بأحرف صغيرة.",
		"Имена тегов пишите строчными."
	], [
		"< və & işarələrini mətndə &lt; və &amp; ilə yaz.",
		"Write < and & in text as &lt; and &amp;.",
		"Metinde < ve & işaretlerini &lt; ve &amp; olarak yaz.",
		"اكتب < و& في النص هكذا &lt; و&amp;.",
		"В тексте < и & записывайте как &lt; и &amp;."
	]), P("Şərh <!-- ... --> arasında yazılır və ekranda görünmür. Boşluqlar və sətir keçidləri brauzer tərəfindən bir boşluğa çevrilir; ona görə sətir keçmək üçün <br> yox, ayrı abzas işlət.", "A comment is written between <!-- ... --> and is not shown. The browser collapses spaces and line breaks into a single space, so use separate paragraphs instead of piling up <br>.", "Yorum <!-- ... --> arasında yazılır ve ekranda görünmez. Tarayıcı boşlukları ve satır sonlarını tek boşluğa indirir; bu yüzden <br> yığmak yerine ayrı paragraflar kullan.", "يُكتب التعليق بين <!-- ... --> ولا يظهر. يختزل المتصفح المسافات وفواصل الأسطر إلى مسافة واحدة، لذا استخدم فقرات منفصلة بدل تكديس <br>.", "Комментарий пишется между <!-- ... --> и не отображается. Браузер сводит пробелы и переносы строк к одному пробелу, поэтому вместо груды <br> используйте отдельные абзацы."))
];
//#endregion
export { html_basic_syntax_default as default };
