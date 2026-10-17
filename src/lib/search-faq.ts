import type { Lang } from "@/lib/i18n";

export const SEARCH_FAQ: Record<"/erase" | "/image", { title: Record<Lang, string>; items: Record<Lang, { q: string; a: string }[]> }> = {
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
};
