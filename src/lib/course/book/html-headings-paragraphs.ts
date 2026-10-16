import { C, P, S, U } from "../dsl";

export default [
  S("headings", ["Başlıqlar h1–h6", "Headings h1–h6", "Başlıklar h1–h6", "العناوين h1–h6", "Заголовки h1–h6"],
    P("HTML altı səviyyəli başlıq verir: <h1> ən vacib, <h6> ən az vacibdir. Başlıqlar sənədin plan kimi quruluşunu yaradır, ona görə həm oxucular, həm ekran oxuyucuları, həm də axtarış sistemləri onlardan istifadə edir.",
      "HTML offers six heading levels: <h1> is the most important and <h6> the least. Headings give the document an outline, so readers, screen readers and search engines all rely on them.",
      "HTML altı başlık düzeyi sunar: <h1> en önemli, <h6> en az önemlidir. Başlıklar belgeye bir taslak yapısı verir; okurlar, ekran okuyucular ve arama motorları bunlardan yararlanır.",
      "يوفر HTML ستة مستويات للعناوين: <h1> الأهم و<h6> الأقل أهمية. تمنح العناوين المستند هيكلًا يشبه المخطط، فيعتمد عليها القرّاء وقارئات الشاشة ومحركات البحث.",
      "В HTML шесть уровней заголовков: <h1> — самый важный, <h6> — наименее важный. Заголовки задают структуру документа, поэтому на них опираются читатели, экранные дикторы и поисковики."),
    C(`<h1>Azərbaycan şəhərləri</h1>
<h2>Bakı</h2>
<h3>Tarixi mərkəz</h3>
<h2>Şəki</h2>`),
    U(["Səhifədə bir <h1> olsun.", "Use one <h1> per page.", "Sayfada bir <h1> olsun.", "اجعل في الصفحة <h1> واحدًا.", "Используйте один <h1> на страницу."],
      ["Səviyyələri atlama: h2-dən sonra h4 yox, h3 gəlsin.", "Do not skip levels: after h2 comes h3, not h4.", "Düzeyleri atlama: h2'den sonra h4 değil h3 gelsin.", "لا تقفز بين المستويات: بعد h2 يأتي h3 لا h4.", "Не пропускайте уровни: после h2 идёт h3, а не h4."],
      ["Başlığı yalnız ölçü üçün seçmə; ölçünü CSS verir.", "Do not pick a heading only for its size; CSS controls size.", "Başlığı yalnızca boyutu için seçme; boyutu CSS belirler.", "لا تختر العنوان لحجمه فقط؛ فالحجم من شأن CSS.", "Не выбирайте заголовок ради размера: размер задаёт CSS."])),
  S("paragraphs", ["Abzaslar", "Paragraphs", "Paragraflar", "الفقرات", "Абзацы"],
    P("Mətn <p> elementi ilə abzaslara bölünür. Brauzer abzaslar arasında boşluq qoyur. Sətri məcburi kəsmək lazım olanda (şeir, ünvan) <br> işlədilir; mövzu dəyişikliyini isə <hr> ayırır.",
      "Text is divided into paragraphs with the <p> element, and the browser leaves space between them. When a line must break by force (a poem, an address) use <br>; a change of topic can be marked with <hr>.",
      "Metin <p> elemanıyla paragraflara bölünür; tarayıcı aralarına boşluk koyar. Satırın zorla bölünmesi gerektiğinde (şiir, adres) <br>, konu değişimi için ise <hr> kullanılır.",
      "يُقسَّم النص إلى فقرات بالعنصر <p> ويترك المتصفح مسافة بينها. وحين يلزم قطع السطر قسرًا (شعر أو عنوان) يُستخدم <br>، ويفصل <hr> بين الموضوعات.",
      "Текст делится на абзацы элементом <p>, браузер оставляет между ними отступ. Когда строку нужно оборвать принудительно (стихи, адрес), используют <br>, а смену темы отмечает <hr>."),
    C(`<p>İlk abzas bir fikri izah edir.</p>
<p>İkinci abzas yeni fikirdir.</p>
<p>Nibras Code<br>Bakı, Azərbaycan</p>
<hr>`),
    P("Çoxlu boşluq lazımdırsa boş abzas yaratma; CSS-də margin və padding işlət. Uzun sitat üçün <blockquote>, kod üçün <code> və <pre> var.",
      "If you need extra space do not create empty paragraphs; use margin and padding in CSS. For a long quotation there is <blockquote>, and for code <code> and <pre>.",
      "Fazladan boşluk gerekiyorsa boş paragraf oluşturma; CSS'te margin ve padding kullan. Uzun alıntı için <blockquote>, kod için <code> ve <pre> vardır.",
      "إذا احتجت مسافة إضافية فلا تنشئ فقرات فارغة بل استخدم margin وpadding في CSS. وللاقتباس الطويل يوجد <blockquote> وللكود <code> و<pre>.",
      "Если нужен дополнительный отступ, не создавайте пустые абзацы: используйте margin и padding в CSS. Для длинной цитаты есть <blockquote>, для кода — <code> и <pre>.")),
] ;
