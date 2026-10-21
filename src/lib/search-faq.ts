import type { Lang } from "@/lib/i18n";

export const SEARCH_FAQ: Record<"/erase" | "/image" | "/soz-sayi" | "/faiz" | "/wifi" | "/seo", { title: Record<Lang, string>; items: Record<Lang, { q: string; a: string }[]> }> = {
  "/erase": {
    title: { az: "Suallar", en: "Questions", tr: "Sorular", ar: "أسئلة", ru: "Вопросы" },
    items: {
      az: [
        { q: "Şəkil fon silmək pulsuzdur?", a: "Bəli. Hesab açılmır və ödəniş yoxdur." },
        { q: "Fon silinəndə şəkil hara gedir?", a: "Şəkil serverə yüklənmir. Fon bu cihazda silinir." },
        { q: "Nəticə hansı formatda olur?", a: "PNG, JPG və ya WebP yükləmək olur. Şəffaf fon üçün PNG seçin." },
        { q: "Əl ilə düzəltmək olur?", a: "Bəli. Kənarı fırça ilə düzəltmək və başqa fon qoymaq olur." },
      ],
      en: [
        { q: "Is removing a background free?", a: "Yes. There is no account and no payment." },
        { q: "Where does the photo go?", a: "The photo is not uploaded. The background is removed on this device." },
        { q: "Which format is the result?", a: "You can download PNG, JPG, or WebP. Choose PNG for a transparent background." },
        { q: "Can I fix the edge?", a: "Yes. You can correct the edge with a brush and place another background." },
      ],
      tr: [
        { q: "Arka plan silmek ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
        { q: "Fotoğraf nereye gider?", a: "Fotoğraf yüklenmez. Arka plan bu cihazda silinir." },
        { q: "Sonuç hangi formatta?", a: "PNG, JPG veya WebP indirilir. Şeffaf fon için PNG seçin." },
        { q: "Kenarı elle düzeltmek olur mu?", a: "Evet. Kenarı fırçayla düzeltmek ve başka fon koymak olur." },
      ],
      ar: [
        { q: "هل إزالة الخلفية مجانية؟", a: "نعم. لا حساب ولا دفع." },
        { q: "أين تذهب الصورة؟", a: "لا تُرفع الصورة. تُزال الخلفية على هذا الجهاز." },
        { q: "ما صيغة النتيجة؟", a: "يمكن تنزيل PNG أو JPG أو WebP. اختر PNG لخلفية شفافة." },
        { q: "هل أصلح الحافة بيدي؟", a: "نعم. يمكن إصلاح الحافة بالفرشاة ووضع خلفية أخرى." },
      ],
      ru: [
        { q: "Удалить фон бесплатно?", a: "Да. Аккаунта и оплаты нет." },
        { q: "Куда уходит фото?", a: "Фото не загружается. Фон убирается на этом устройстве." },
        { q: "В каком формате результат?", a: "Можно скачать PNG, JPG или WebP. Для прозрачного фона выберите PNG." },
        { q: "Можно поправить край?", a: "Да. Край можно поправить кистью и поставить другой фон." },
      ],
    },
  },
  "/image": {
    title: { az: "Suallar", en: "Questions", tr: "Sorular", ar: "أسئلة", ru: "Вопросы" },
    items: {
      az: [
        { q: "Şəkil sıxmaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
        { q: "Şəkil serverə gedir?", a: "Xeyr. Sıxma bu brauzerdə gedir." },
        { q: "Keyfiyyət necə seçilir?", a: "Sürgü ilə kiçik fayl və daha aydın şəkil arasında seçim edilir." },
        { q: "Hansı şəkillər olur?", a: "JPG, PNG və WebP açılır. Nəticə JPG olur." },
      ],
      en: [
        { q: "Is compressing a photo free?", a: "Yes. There is no account and no payment." },
        { q: "Does the photo go to a server?", a: "No. Compressing runs in this browser." },
        { q: "How do I choose the quality?", a: "The slider picks between a smaller file and a clearer photo." },
        { q: "Which photos work?", a: "JPG, PNG, and WebP open. The result is a JPG." },
      ],
      tr: [
        { q: "Fotoğraf sıkıştırmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
        { q: "Fotoğraf sunucuya gider mi?", a: "Hayır. Sıkıştırma bu tarayıcıda olur." },
        { q: "Kalite nasıl seçilir?", a: "Kaydırıcı küçük dosya ile daha net fotoğraf arasında seçim yapar." },
        { q: "Hangi fotoğraflar olur?", a: "JPG, PNG ve WebP açılır. Sonuç JPG olur." },
      ],
      ar: [
        { q: "هل ضغط الصورة مجاني؟", a: "نعم. لا حساب ولا دفع." },
        { q: "هل تذهب الصورة إلى خادم؟", a: "لا. الضغط يجري في هذا المتصفح." },
        { q: "كيف أختار الجودة؟", a: "المؤشر يختار بين ملف أصغر وصورة أوضح." },
        { q: "أي الصور تعمل؟", a: "تُفتح JPG وPNG وWebP. النتيجة JPG." },
      ],
      ru: [
        { q: "Сжать фото бесплатно?", a: "Да. Аккаунта и оплаты нет." },
        { q: "Фото уходит на сервер?", a: "Нет. Сжатие идёт в этом браузере." },
        { q: "Как выбрать качество?", a: "Ползунок выбирает между меньшим файлом и более ясным фото." },
        { q: "Какие фото подходят?", a: "Открываются JPG, PNG и WebP. Результат — JPG." },
      ],
    },
  },
  "/soz-sayi": {
    title: { az: "Suallar", en: "Questions", tr: "Sorular", ar: "أسئلة", ru: "Вопросы" },
    items: {
      az: [
        { q: "Söz saymaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
        { q: "Mətn serverə gedir?", a: "Xeyr. Sayma bu brauzerdə gedir." },
        { q: "Söz necə sayılır?", a: "Boşluqla ayrılan hər hissə bir sözdür." },
        { q: "Boşluq hərf sayılır?", a: "Hərf sayında bəli. Boşluqsuz sayda yox." },
      ],
      en: [
        { q: "Is a word count free?", a: "Yes. There is no account and no payment." },
        { q: "Does the text go to a server?", a: "No. The count runs in this browser." },
        { q: "How is a word counted?", a: "Each part separated by a space is one word." },
        { q: "Does a space count as a character?", a: "Yes in the character count. No in the count without spaces." },
      ],
      tr: [
        { q: "Söz saymak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
        { q: "Metin sunucuya gider mi?", a: "Hayır. Sayma bu tarayıcıda olur." },
        { q: "Söz nasıl sayılır?", a: "Boşlukla ayrılan her parça bir sözdür." },
        { q: "Boşluk harf sayılır mı?", a: "Harf sayısında evet. Boşluksuz sayıda hayır." },
      ],
      ar: [
        { q: "هل عدّ الكلمات مجاني؟", a: "نعم. لا حساب ولا دفع." },
        { q: "هل يذهب النص إلى خادم؟", a: "لا. العدّ يجري في هذا المتصفح." },
        { q: "كيف تُعدّ الكلمة؟", a: "كل جزء يفصله فراغ هو كلمة." },
        { q: "هل يُحسب الفراغ حرفاً؟", a: "نعم في عدّ الحروف. لا في العدّ بلا فراغ." },
      ],
      ru: [
        { q: "Посчитать слова бесплатно?", a: "Да. Аккаунта и оплаты нет." },
        { q: "Текст уходит на сервер?", a: "Нет. Подсчёт идёт в этом браузере." },
        { q: "Как считается слово?", a: "Каждая часть через пробел — одно слово." },
        { q: "Пробел считается буквой?", a: "В счёте букв да. В счёте без пробелов нет." },
      ],
    },
  },
  "/faiz": {
    title: { az: "Suallar", en: "Questions", tr: "Sorular", ar: "أسئلة", ru: "Вопросы" },
    items: {
      az: [
        { q: "Faiz hesablamaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
        { q: "15 faiz 200 nədir?", a: "30. Faiz ədədə vurulur və 100-ə bölünür." },
        { q: "30, 200-ün neçə faizidir?", a: "15 faiz. Kiçik ədəd böyüyə bölünür və 100-ə vurulur." },
        { q: "Rəqəmlər saxlanılır?", a: "Xeyr. Hesab bu səhifədə qalır." },
      ],
      en: [
        { q: "Is calculating a percent free?", a: "Yes. There is no account and no payment." },
        { q: "What is 15 percent of 200?", a: "30. The percent is multiplied by the number and divided by 100." },
        { q: "What percent is 30 of 200?", a: "15 percent. The smaller number is divided by the larger one and multiplied by 100." },
        { q: "Are the numbers stored?", a: "No. The calculation stays on this page." },
      ],
      tr: [
        { q: "Yüzde hesaplamak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
        { q: "200'ün yüzde 15'i nedir?", a: "30. Yüzde sayıya çarpılır ve 100'e bölünür." },
        { q: "30, 200'ün yüzde kaçı?", a: "Yüzde 15. Küçük sayı büyüğe bölünür ve 100 ile çarpılır." },
        { q: "Sayılar saklanır mı?", a: "Hayır. Hesap bu sayfada kalır." },
      ],
      ar: [
        { q: "هل حساب النسبة مجاني؟", a: "نعم. لا حساب ولا دفع." },
        { q: "كم يساوي 15 بالمئة من 200؟", a: "30. تُضرب النسبة في العدد وتُقسم على 100." },
        { q: "30 كم بالمئة من 200؟", a: "15 بالمئة. يُقسم العدد الأصغر على الأكبر ويُضرب في 100." },
        { q: "هل تُحفظ الأرقام؟", a: "لا. يبقى الحساب في هذه الصفحة." },
      ],
      ru: [
        { q: "Посчитать процент бесплатно?", a: "Да. Аккаунта и оплаты нет." },
        { q: "Сколько будет 15 процентов от 200?", a: "30. Процент умножается на число и делится на 100." },
        { q: "Сколько процентов 30 от 200?", a: "15 процентов. Меньшее число делится на большее и умножается на 100." },
        { q: "Числа сохраняются?", a: "Нет. Расчёт остаётся на этой странице." },
      ],
    },
  },
  "/wifi": {
    title: { az: "Suallar", en: "Questions", tr: "Sorular", ar: "أسئلة", ru: "Вопросы" },
    items: {
      az: [
        { q: "Wi-Fi QR pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
        { q: "Şifrə serverə gedir?", a: "Xeyr. QR kod bu brauzerdə yaranır." },
        { q: "Telefon necə qoşulur?", a: "Kameranı QR koda tut. Şəbəkə adı və şifrə özü dolur." },
        { q: "Şifrəsiz şəbəkə olur?", a: "Bəli. Qorumanı şifrəsiz seç." },
      ],
      en: [
        { q: "Is a Wi-Fi QR free?", a: "Yes. There is no account and no payment." },
        { q: "Does the password go to a server?", a: "No. The QR code is made in this browser." },
        { q: "How does a phone join?", a: "Point the camera at the QR code. The network name and password fill in." },
        { q: "Can the network have no password?", a: "Yes. Set the security to no password." },
      ],
      tr: [
        { q: "Wi-Fi QR ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
        { q: "Şifre sunucuya gider mi?", a: "Hayır. QR kod bu tarayıcıda oluşur." },
        { q: "Telefon nasıl bağlanır?", a: "Kamerayı QR koda tut. Ağ adı ve şifre kendiliğinden dolar." },
        { q: "Şifresiz ağ olur mu?", a: "Evet. Korumayı şifresiz seç." },
      ],
      ar: [
        { q: "هل رمز Wi-Fi مجاني؟", a: "نعم. لا حساب ولا دفع." },
        { q: "هل تذهب كلمة المرور إلى خادم؟", a: "لا. يُصنع رمز QR في هذا المتصفح." },
        { q: "كيف يتصل الهاتف؟", a: "وجّه الكاميرا إلى الرمز. يمتلئ اسم الشبكة وكلمة المرور وحدهما." },
        { q: "هل تعمل شبكة بلا كلمة مرور؟", a: "نعم. اجعل الحماية بلا كلمة مرور." },
      ],
      ru: [
        { q: "Wi-Fi QR бесплатно?", a: "Да. Аккаунта и оплаты нет." },
        { q: "Пароль уходит на сервер?", a: "Нет. QR-код создаётся в этом браузере." },
        { q: "Как телефон подключается?", a: "Наведите камеру на QR-код. Имя сети и пароль заполнятся сами." },
        { q: "Сеть без пароля подходит?", a: "Да. Поставьте защиту «без пароля»." },
      ],
    },
  },
  "/seo": {
    title: { az: "Suallar", en: "Questions", tr: "Sorular", ar: "أسئلة", ru: "Вопросы" },
    items: {
      az: [
        { q: "Nə yoxlanılır?", a: "Bir səhifənin title, description, canonical, H1, robots.txt və sitemap vəziyyəti." },
        { q: "Bütün sayt gəzilirmi?", a: "Xeyr. Yalnız yazdığın ünvan və onun robots.txt, sitemap faylı açılır." },
        { q: "Ünvan saxlanılırmı?", a: "Xeyr. Nəticə bazaya yazılmır." },
      ],
      en: [
        { q: "What is checked?", a: "The title, description, canonical, H1, robots.txt and sitemap of one page." },
        { q: "Is the whole site crawled?", a: "No. Only the address you enter, plus its robots.txt and sitemap file, is opened." },
        { q: "Is the address stored?", a: "No. The result is not written to a database." },
      ],
      tr: [
        { q: "Ne bakılır?", a: "Bir sayfanın title, description, canonical, H1, robots.txt ve sitemap durumu." },
        { q: "Tüm site gezilir mi?", a: "Hayır. Yalnız yazdığın adres ile onun robots.txt ve sitemap dosyası açılır." },
        { q: "Adres saklanır mı?", a: "Hayır. Sonuç veri tabanına yazılmaz." },
      ],
      ar: [
        { q: "ماذا يُفحص؟", a: "العنوان والوصف والرابط الأساسي وH1 وrobots.txt وsitemap لصفحة واحدة." },
        { q: "هل يُمسح الموقع كله؟", a: "لا. يُفتح العنوان الذي تكتبه مع robots.txt وملف sitemap فقط." },
        { q: "هل يُحفظ العنوان؟", a: "لا. لا تُكتب النتيجة في قاعدة بيانات." },
      ],
      ru: [
        { q: "Что проверяется?", a: "Title, description, canonical, H1, robots.txt и sitemap одной страницы." },
        { q: "Обходится весь сайт?", a: "Нет. Открывается только введённый адрес и его robots.txt с файлом sitemap." },
        { q: "Адрес сохраняется?", a: "Нет. Результат не пишется в базу." },
      ],
    },
  },
};
