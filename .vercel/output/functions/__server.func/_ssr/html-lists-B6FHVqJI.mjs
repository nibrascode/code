import { i as S, r as P, t as C } from "./dsl-0GJBPSOD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/html-lists-B6FHVqJI.js
var html_lists_default = [
	S("ul-ol", [
		"Nömrəsiz və nömrəli siyahılar",
		"Unordered and ordered lists",
		"Sırasız ve sıralı listeler",
		"القوائم غير المرتبة والمرتبة",
		"Маркированные и нумерованные списки"
	], P("Elementlərin sırası vacib deyilsə <ul> (işarəli), vacibdirsə <ol> (nömrəli) işlət. Hər bənd <li> elementidir. <ol>-un start və reversed atributları var.", "When the order of items does not matter use <ul> (bulleted); when it does, use <ol> (numbered). Each item is an <li> element. <ol> has the start and reversed attributes.", "Öğelerin sırası önemli değilse <ul> (işaretli), önemliyse <ol> (numaralı) kullan. Her madde bir <li> elemanıdır. <ol>'un start ve reversed öznitelikleri vardır.", "إذا لم يكن ترتيب العناصر مهمًا فاستخدم <ul> (نقطية) وإن كان مهمًا فاستخدم <ol> (مرقّمة). وكل بند عنصر <li>. وللقائمة <ol> السمتان start وreversed.", "Если порядок пунктов неважен, берите <ul> (маркированный), если важен — <ol> (нумерованный). Каждый пункт — элемент <li>. У <ol> есть атрибуты start и reversed."), C(`<h3>Shopping</h3>
<ul>
  <li>Bread</li>
  <li>Cheese</li>
  <li>Tomatoes</li>
</ul>

<h3>Tea in 3 steps</h3>
<ol>
  <li>Boil water</li>
  <li>Add tea</li>
  <li>Wait five minutes</li>
</ol>`)),
	S("nested", [
		"İç-içə siyahılar",
		"Nested lists",
		"İç içe listeler",
		"القوائم المتداخلة",
		"Вложенные списки"
	], P("Alt siyahı <li>-nin içinə, onun bağlanış teqindən əvvəl yerləşdirilir. Düzgün quruluş menyu və məzmun cədvəlləri üçün əsasdır.", "A sub-list goes inside an <li>, before that item's closing tag. This structure is the basis of menus and tables of contents.", "Alt liste, <li> içine ve o maddenin kapanış etiketinden önce yerleştirilir. Doğru yapı menüler ve içindekiler için temeldir.", "تُوضع القائمة الفرعية داخل <li> قبل وسم إغلاق ذلك البند. وهذا البناء أساس القوائم وجداول المحتويات.", "Вложенный список помещают внутрь <li>, до закрывающего тега этого пункта. Такая структура — основа меню и оглавлений."), C(`<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`)),
	S("dl", [
		"Təsvir siyahısı",
		"Description lists",
		"Açıklama listeleri",
		"قوائم الوصف",
		"Списки описаний"
	], P("Termin–izah cütləri üçün <dl> var: <dt> termini, <dd> onun izahını bildirir. Lüğət və xüsusiyyət siyahıları üçün əlverişlidir.", "For term–explanation pairs there is <dl>: <dt> is the term and <dd> its explanation. It suits glossaries and property lists.", "Terim–açıklama çiftleri için <dl> vardır: <dt> terimi, <dd> açıklamasını belirtir. Sözlük ve özellik listeleri için uygundur.", "لأزواج المصطلح–الشرح يوجد <dl>: يمثل <dt> المصطلح و<dd> شرحه. وهو مناسب للمسارد وقوائم الخصائص.", "Для пар «термин — пояснение» есть <dl>: <dt> — термин, <dd> — его объяснение. Подходит для глоссариев и списков свойств."), C(`<dl>
  <dt>HTML</dt>
  <dd>The language that structures a page.</dd>
  <dt>CSS</dt>
  <dd>The language that styles it.</dd>
</dl>`))
];
//#endregion
export { html_lists_default as default };
