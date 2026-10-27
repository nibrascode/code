import type { SearchItem } from "@/lib/search-pages";

// Search landing pages for main tools (nece) and problem-solution pages (xeta).
// Facts match the live tools: no invented features, no metrics.
export const TOOL_LANDINGS: readonly SearchItem[] = [
 {
  "slug": "fon-sil-pulsuz",
  "links": [
   {
    "path": "/erase",
    "label": {
     "az": "Fon sil",
     "en": "Remove background",
     "tr": "Arka plan sil",
     "ar": "حذف الخلفية",
     "ru": "Удалить фон"
    }
   },
   {
    "path": "/image",
    "label": {
     "az": "Şəkil sıx",
     "en": "Compress photo",
     "tr": "Fotoğraf sıkıştır",
     "ar": "ضغط الصورة",
     "ru": "Сжать фото"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "Fon sil — pulsuz, qeydiyyatsız",
    "lead": "Şəklin fonunu bir neçə addımda silin. Hesab açılmır, ödəniş yoxdur.\n\nFon bu cihazda silinir, şəkil Nibras Code serverinə yüklənmir.",
    "points": [
     "nibrascode.com/erase səhifəsini açın.",
     "Şəkli seçin və fonu silin.",
     "Kənarı lazım olsa fırça ilə düzəldin.",
     "PNG (şəffaf fon), JPG və ya WebP kimi endirin."
    ],
    "note": "İlk dəfə model faylı cihaza enə bilər, sonra iş daha tez gedir.",
    "faq": [
     {
      "q": "Fon silmək pulsuzdur?",
      "a": "Bəli. Hesab və ödəniş yoxdur."
     },
     {
      "q": "Şəkil serverə gedir?",
      "a": "Xeyr. Fon bu cihazda silinir."
     },
     {
      "q": "Şəffaf fon üçün hansı format?",
      "a": "PNG seçin."
     },
     {
      "q": "Telefonda işləyir?",
      "a": "Bəli, brauzerdə açılır. Zəif telefonda bir az gec gedə bilər."
     }
    ]
   },
   "en": {
    "title": "Remove background — free, no sign-up",
    "lead": "Remove a photo background in a few steps. No account, no payment.\n\nThe background is removed on this device. The photo is not uploaded to the Nibras Code server.",
    "points": [
     "Open nibrascode.com/en/erase.",
     "Choose the photo and remove the background.",
     "Fix the edge with the brush if needed.",
     "Download as PNG (transparent), JPG, or WebP."
    ],
    "note": "The first time, a model file may download to the device; after that it is quicker.",
    "faq": [
     {
      "q": "Is it free?",
      "a": "Yes. No account and no payment."
     },
     {
      "q": "Does the photo go to a server?",
      "a": "No. The background is removed on this device."
     },
     {
      "q": "Which format keeps transparency?",
      "a": "Choose PNG."
     },
     {
      "q": "Does it work on a phone?",
      "a": "Yes, in the browser. A weak phone may be slower."
     }
    ]
   },
   "tr": {
    "title": "Arka plan sil — ücretsiz, kayıtsız",
    "lead": "Fotoğrafın arka planını birkaç adımda silin. Hesap yok, ödeme yok.\n\nArka plan bu cihazda silinir, fotoğraf Nibras Code sunucusuna yüklenmez.",
    "points": [
     "nibrascode.com/tr/erase sayfasını açın.",
     "Fotoğrafı seçin ve arka planı silin.",
     "Gerekirse kenarı fırçayla düzeltin.",
     "PNG (şeffaf), JPG ya da WebP olarak indirin."
    ],
    "note": "İlk seferde model dosyası cihaza inebilir, sonra iş daha hızlı olur.",
    "faq": [
     {
      "q": "Ücretsiz mi?",
      "a": "Evet. Hesap ve ödeme yoktur."
     },
     {
      "q": "Fotoğraf sunucuya gider mi?",
      "a": "Hayır. Arka plan bu cihazda silinir."
     },
     {
      "q": "Şeffaf arka plan için hangi biçim?",
      "a": "PNG seçin."
     },
     {
      "q": "Telefonda çalışır mı?",
      "a": "Evet, tarayıcıda açılır. Zayıf telefonda biraz yavaş olabilir."
     }
    ]
   },
   "ar": {
    "title": "حذف الخلفية — مجانًا وبلا تسجيل",
    "lead": "احذف خلفية الصورة في خطوات قليلة. لا حساب ولا دفع.\n\nتُحذف الخلفية على هذا الجهاز، ولا تُرفع الصورة إلى خادم Nibras Code.",
    "points": [
     "افتح nibrascode.com/ar/erase.",
     "اختر الصورة واحذف الخلفية.",
     "صحّح الحافة بالفرشاة عند الحاجة.",
     "نزّلها PNG (شفافة) أو JPG أو WebP."
    ],
    "note": "في المرة الأولى قد يُنزَّل ملف النموذج إلى الجهاز، ثم يصبح العمل أسرع.",
    "faq": [
     {
      "q": "هل هو مجاني؟",
      "a": "نعم. لا حساب ولا دفع."
     },
     {
      "q": "هل تذهب الصورة إلى خادم؟",
      "a": "لا. تُحذف الخلفية على هذا الجهاز."
     },
     {
      "q": "أي صيغة للخلفية الشفافة؟",
      "a": "اختر PNG."
     },
     {
      "q": "هل يعمل على الهاتف؟",
      "a": "نعم في المتصفح. قد يكون أبطأ على هاتف ضعيف."
     }
    ]
   },
   "ru": {
    "title": "Удалить фон — бесплатно, без регистрации",
    "lead": "Удалите фон фото за несколько шагов. Без аккаунта и оплаты.\n\nФон удаляется на этом устройстве, фото не загружается на сервер Nibras Code.",
    "points": [
     "Откройте nibrascode.com/ru/erase.",
     "Выберите фото и удалите фон.",
     "При нужде поправьте край кистью.",
     "Скачайте PNG (прозрачный), JPG или WebP."
    ],
    "note": "В первый раз на устройство может скачаться файл модели, потом работа идёт быстрее.",
    "faq": [
     {
      "q": "Это бесплатно?",
      "a": "Да. Без аккаунта и оплаты."
     },
     {
      "q": "Фото уходит на сервер?",
      "a": "Нет. Фон удаляется на этом устройстве."
     },
     {
      "q": "Какой формат для прозрачного фона?",
      "a": "Выберите PNG."
     },
     {
      "q": "Работает на телефоне?",
      "a": "Да, в браузере. На слабом телефоне может быть медленнее."
     }
    ]
   }
  }
 },
 {
  "slug": "sekil-sixmaq-pulsuz",
  "links": [
   {
    "path": "/image",
    "label": {
     "az": "Şəkil sıx",
     "en": "Compress photo",
     "tr": "Fotoğraf sıkıştır",
     "ar": "ضغط الصورة",
     "ru": "Сжать фото"
    }
   },
   {
    "path": "/erase",
    "label": {
     "az": "Fon sil",
     "en": "Remove background",
     "tr": "Arka plan sil",
     "ar": "حذف الخلفية",
     "ru": "Удалить фон"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "Şəkil sıx — pulsuz, qeydiyyatsız",
    "lead": "Şəklin həcmini kiçildin ki, forma, mesaj və ya sayta rahat yüklənsin. Hesab açılmır.\n\nSıxma bu brauzerdə gedir, şəkil serverə getmir.",
    "points": [
     "nibrascode.com/image səhifəsini açın.",
     "JPG, PNG və ya WebP şəkli seçin.",
     "Sürgü ilə keyfiyyəti seçin.",
     "Nəticəni JPG kimi endirin."
    ],
    "note": "Həcm hələ böyükdürsə, keyfiyyəti bir az da endirin.",
    "faq": [
     {
      "q": "Pulsuzdur?",
      "a": "Bəli. Hesab və ödəniş yoxdur."
     },
     {
      "q": "Şəkil serverə gedir?",
      "a": "Xeyr. Sıxma bu brauzerdə gedir."
     },
     {
      "q": "Hansı şəkillər açılır?",
      "a": "JPG, PNG və WebP. Nəticə JPG olur."
     },
     {
      "q": "Keyfiyyət çox düşür?",
      "a": "Sürgü ilə özünüz seçirsiniz: kiçik fayl və ya daha aydın şəkil."
     }
    ]
   },
   "en": {
    "title": "Compress photo — free, no sign-up",
    "lead": "Make a photo smaller so it uploads to a form, a message, or a site. No account.\n\nCompressing runs in this browser; the photo does not go to a server.",
    "points": [
     "Open nibrascode.com/en/image.",
     "Choose a JPG, PNG, or WebP photo.",
     "Pick the quality with the slider.",
     "Download the result as JPG."
    ],
    "note": "If the file is still large, lower the quality a little more.",
    "faq": [
     {
      "q": "Is it free?",
      "a": "Yes. No account and no payment."
     },
     {
      "q": "Does the photo go to a server?",
      "a": "No. Compressing runs in this browser."
     },
     {
      "q": "Which photos open?",
      "a": "JPG, PNG, and WebP. The result is a JPG."
     },
     {
      "q": "Does quality drop a lot?",
      "a": "You choose with the slider: a smaller file or a clearer photo."
     }
    ]
   },
   "tr": {
    "title": "Fotoğraf sıkıştır — ücretsiz, kayıtsız",
    "lead": "Fotoğrafın boyutunu küçültün, form, mesaj ya da siteye rahat yüklensin. Hesap yok.\n\nSıkıştırma bu tarayıcıda olur, fotoğraf sunucuya gitmez.",
    "points": [
     "nibrascode.com/tr/image sayfasını açın.",
     "JPG, PNG ya da WebP fotoğraf seçin.",
     "Kaydırıcıyla kaliteyi seçin.",
     "Sonucu JPG olarak indirin."
    ],
    "note": "Boyut hâlâ büyükse kaliteyi biraz daha düşürün.",
    "faq": [
     {
      "q": "Ücretsiz mi?",
      "a": "Evet. Hesap ve ödeme yoktur."
     },
     {
      "q": "Fotoğraf sunucuya gider mi?",
      "a": "Hayır. Sıkıştırma bu tarayıcıda olur."
     },
     {
      "q": "Hangi fotoğraflar açılır?",
      "a": "JPG, PNG ve WebP. Sonuç JPG olur."
     },
     {
      "q": "Kalite çok düşer mi?",
      "a": "Kaydırıcıyla siz seçersiniz: küçük dosya ya da daha net fotoğraf."
     }
    ]
   },
   "ar": {
    "title": "ضغط الصورة — مجانًا وبلا تسجيل",
    "lead": "صغّر حجم الصورة كي تُرفع إلى نموذج أو رسالة أو موقع. لا حساب.\n\nيجري الضغط في هذا المتصفح ولا تذهب الصورة إلى خادم.",
    "points": [
     "افتح nibrascode.com/ar/image.",
     "اختر صورة JPG أو PNG أو WebP.",
     "اختر الجودة بالمنزلق.",
     "نزّل النتيجة بصيغة JPG."
    ],
    "note": "إذا بقي الحجم كبيرًا فاخفض الجودة قليلًا.",
    "faq": [
     {
      "q": "هل هو مجاني؟",
      "a": "نعم. لا حساب ولا دفع."
     },
     {
      "q": "هل تذهب الصورة إلى خادم؟",
      "a": "لا. يجري الضغط في هذا المتصفح."
     },
     {
      "q": "أي صور تُفتح؟",
      "a": "JPG وPNG وWebP. النتيجة JPG."
     },
     {
      "q": "هل تنخفض الجودة كثيرًا؟",
      "a": "أنت تختار بالمنزلق: ملف أصغر أو صورة أوضح."
     }
    ]
   },
   "ru": {
    "title": "Сжать фото — бесплатно, без регистрации",
    "lead": "Уменьшите размер фото, чтобы оно загрузилось в форму, сообщение или на сайт. Без аккаунта.\n\nСжатие идёт в этом браузере, фото не уходит на сервер.",
    "points": [
     "Откройте nibrascode.com/ru/image.",
     "Выберите фото JPG, PNG или WebP.",
     "Выберите качество ползунком.",
     "Скачайте результат в JPG."
    ],
    "note": "Если файл всё ещё большой, снизьте качество ещё немного.",
    "faq": [
     {
      "q": "Это бесплатно?",
      "a": "Да. Без аккаунта и оплаты."
     },
     {
      "q": "Фото уходит на сервер?",
      "a": "Нет. Сжатие идёт в этом браузере."
     },
     {
      "q": "Какие фото открываются?",
      "a": "JPG, PNG и WebP. Результат — JPG."
     },
     {
      "q": "Сильно ли падает качество?",
      "a": "Вы выбираете ползунком: меньше файл или чётче фото."
     }
    ]
   }
  }
 },
 {
  "slug": "pdf-birlesdir-pulsuz",
  "links": [
   {
    "path": "/pdf/merge",
    "label": {
     "az": "PDF birləşdir",
     "en": "Merge PDF",
     "tr": "PDF birleştir",
     "ar": "دمج PDF",
     "ru": "Объединить PDF"
    }
   },
   {
    "path": "/pdf/compress",
    "label": {
     "az": "PDF sıx",
     "en": "Compress PDF",
     "tr": "PDF sıkıştır",
     "ar": "ضغط PDF",
     "ru": "Сжать PDF"
    }
   },
   {
    "path": "/pdf",
    "label": {
     "az": "Bütün PDF alətləri",
     "en": "All PDF tools",
     "tr": "Tüm PDF araçları",
     "ar": "كل أدوات PDF",
     "ru": "Все инструменты PDF"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "PDF birləşdir — pulsuz, qeydiyyatsız",
    "lead": "Bir neçə PDF-i bir fayla yığın. Hesab açılmır, su nişanı qoyulmur.\n\nFayl brauzerdə işlənir, serverə göndərilmir.",
    "points": [
     "nibrascode.com/pdf/merge səhifəsini açın.",
     "PDF fayllarını seçin.",
     "Sıranı düzəldin.",
     "Birləşdirin və endirin."
    ],
    "note": "Eyni bölmədə PDF bölmək, sıxmaq, çevirmək və imza da var.",
    "faq": [
     {
      "q": "PDF birləşdirmək pulsuzdur?",
      "a": "Bəli. Hesab və ödəniş yoxdur."
     },
     {
      "q": "Fayl serverə gedir?",
      "a": "Xeyr. Fayl brauzerdə işlənir."
     },
     {
      "q": "Sıranı dəyişmək olur?",
      "a": "Bəli, birləşdirmədən əvvəl."
     },
     {
      "q": "Parollu PDF olur?",
      "a": "Əvvəl parolu bilirsinizsə «PDF parolunu aç» ilə açın, sonra birləşdirin."
     }
    ]
   },
   "en": {
    "title": "Merge PDF — free, no sign-up",
    "lead": "Put several PDFs into one file. No account, no watermark.\n\nThe file is processed in the browser and not sent to a server.",
    "points": [
     "Open nibrascode.com/en/pdf/merge.",
     "Choose the PDF files.",
     "Set the order.",
     "Merge and download."
    ],
    "note": "The same section also has split, compress, convert, and sign.",
    "faq": [
     {
      "q": "Is merging free?",
      "a": "Yes. No account and no payment."
     },
     {
      "q": "Does the file go to a server?",
      "a": "No. It is processed in the browser."
     },
     {
      "q": "Can I change the order?",
      "a": "Yes, before merging."
     },
     {
      "q": "What about a password-protected PDF?",
      "a": "If you know the password, open it with Unlock PDF first, then merge."
     }
    ]
   },
   "tr": {
    "title": "PDF birleştir — ücretsiz, kayıtsız",
    "lead": "Birkaç PDF'i tek dosyada toplayın. Hesap yok, filigran yok.\n\nDosya tarayıcıda işlenir, sunucuya gönderilmez.",
    "points": [
     "nibrascode.com/tr/pdf/merge sayfasını açın.",
     "PDF dosyalarını seçin.",
     "Sırayı düzenleyin.",
     "Birleştirin ve indirin."
    ],
    "note": "Aynı bölümde PDF bölme, sıkıştırma, çevirme ve imza da var.",
    "faq": [
     {
      "q": "Ücretsiz mi?",
      "a": "Evet. Hesap ve ödeme yoktur."
     },
     {
      "q": "Dosya sunucuya gider mi?",
      "a": "Hayır. Tarayıcıda işlenir."
     },
     {
      "q": "Sırayı değiştirebilir miyim?",
      "a": "Evet, birleştirmeden önce."
     },
     {
      "q": "Parolalı PDF olur mu?",
      "a": "Parolayı biliyorsanız önce «PDF parolasını aç» ile açın, sonra birleştirin."
     }
    ]
   },
   "ar": {
    "title": "دمج PDF — مجانًا وبلا تسجيل",
    "lead": "اجمع عدة ملفات PDF في ملف واحد. لا حساب ولا علامة مائية.\n\nيُعالَج الملف في المتصفح ولا يُرسل إلى خادم.",
    "points": [
     "افتح nibrascode.com/ar/pdf/merge.",
     "اختر ملفات PDF.",
     "رتّبها.",
     "ادمج ونزّل."
    ],
    "note": "في القسم نفسه تقسيم وضغط وتحويل وتوقيع.",
    "faq": [
     {
      "q": "هل الدمج مجاني؟",
      "a": "نعم. لا حساب ولا دفع."
     },
     {
      "q": "هل يذهب الملف إلى خادم؟",
      "a": "لا. يُعالَج في المتصفح."
     },
     {
      "q": "هل يمكن تغيير الترتيب؟",
      "a": "نعم، قبل الدمج."
     },
     {
      "q": "وماذا عن PDF بكلمة مرور؟",
      "a": "إن كنت تعرفها فافتحه أولًا بأداة فتح كلمة المرور ثم ادمجه."
     }
    ]
   },
   "ru": {
    "title": "Объединить PDF — бесплатно, без регистрации",
    "lead": "Соберите несколько PDF в один файл. Без аккаунта и водяного знака.\n\nФайл обрабатывается в браузере и не отправляется на сервер.",
    "points": [
     "Откройте nibrascode.com/ru/pdf/merge.",
     "Выберите PDF-файлы.",
     "Расставьте порядок.",
     "Объедините и скачайте."
    ],
    "note": "В том же разделе есть разделение, сжатие, конвертация и подпись.",
    "faq": [
     {
      "q": "Это бесплатно?",
      "a": "Да. Без аккаунта и оплаты."
     },
     {
      "q": "Файл уходит на сервер?",
      "a": "Нет. Он обрабатывается в браузере."
     },
     {
      "q": "Можно поменять порядок?",
      "a": "Да, до объединения."
     },
     {
      "q": "А PDF с паролем?",
      "a": "Если знаете пароль, сначала снимите его инструментом «Открыть PDF», потом объединяйте."
     }
    ]
   }
  }
 },
 {
  "slug": "qr-kod-pulsuz",
  "links": [
   {
    "path": "/qr",
    "label": {
     "az": "QR kod",
     "en": "QR code",
     "tr": "QR kod",
     "ar": "رمز QR",
     "ru": "QR-код"
    }
   },
   {
    "path": "/wifi",
    "label": {
     "az": "Wi-Fi QR",
     "en": "Wi-Fi QR",
     "tr": "Wi-Fi QR",
     "ar": "QR للواي فاي",
     "ru": "Wi-Fi QR"
    }
   },
   {
    "path": "/vcard",
    "label": {
     "az": "Vizit QR",
     "en": "vCard QR",
     "tr": "Kartvizit QR",
     "ar": "بطاقة QR",
     "ru": "Визитка QR"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "QR kod düzəlt — pulsuz, qeydiyyatsız",
    "lead": "Link, mətn, Wi-Fi və ya vizit kartını QR koda çevirin. Hesab açılmır.\n\nKodun rəngini dəyişmək və telefonla skan etmək də olur. Loqo və SVG kimi əlavələr Pro-dadır.",
    "points": [
     "nibrascode.com/qr səhifəsini açın.",
     "Növü seçin: link, mətn, Wi-Fi və ya vizit.",
     "Məlumatı yazın, lazım olsa rəngi dəyişin.",
     "PNG kimi endirin və telefonla yoxlayın."
    ],
    "note": "Çapdan əvvəl kodu öz telefonunuzla bir dəfə skan edin.",
    "faq": [
     {
      "q": "QR kod düzəltmək pulsuzdur?",
      "a": "Bəli. Hesab və ödəniş yoxdur."
     },
     {
      "q": "Kodun vaxtı bitir?",
      "a": "Xeyr. Statik QR yazdığınız məlumatı birbaşa saxlayır."
     },
     {
      "q": "Wi-Fi üçün QR olur?",
      "a": "Bəli, ayrıca Wi-Fi QR səhifəsi var."
     },
     {
      "q": "Telefon tətbiqi var?",
      "a": "Nibras QR telefon tətbiqi hələ mağazada deyil. Sayt indi işləyir."
     }
    ]
   },
   "en": {
    "title": "Make a QR code — free, no sign-up",
    "lead": "Turn a link, text, Wi-Fi, or a contact card into a QR code. No account.\n\nYou can also change the color and scan with the phone. Extras like a logo and SVG are in Pro.",
    "points": [
     "Open nibrascode.com/en/qr.",
     "Pick a type: link, text, Wi-Fi, or contact.",
     "Type the data and change the color if needed.",
     "Download PNG and test it with a phone."
    ],
    "note": "Scan the code once with your own phone before printing.",
    "faq": [
     {
      "q": "Is it free?",
      "a": "Yes. No account and no payment."
     },
     {
      "q": "Does the code expire?",
      "a": "No. A static QR holds the data directly."
     },
     {
      "q": "Can I make a Wi-Fi QR?",
      "a": "Yes, there is a separate Wi-Fi QR page."
     },
     {
      "q": "Is there a phone app?",
      "a": "The Nibras QR phone app is not in a store yet. The site works now."
     }
    ]
   },
   "tr": {
    "title": "QR kod yap — ücretsiz, kayıtsız",
    "lead": "Bağlantı, metin, Wi-Fi ya da kartviziti QR koda çevirin. Hesap yok.\n\nKodun rengini değiştirmek ve telefonla taramak da olur. Logo ve SVG gibi ekler Pro'dadır.",
    "points": [
     "nibrascode.com/tr/qr sayfasını açın.",
     "Türü seçin: bağlantı, metin, Wi-Fi ya da kartvizit.",
     "Bilgiyi yazın, gerekirse rengi değiştirin.",
     "PNG indirin ve telefonla deneyin."
    ],
    "note": "Basmadan önce kodu kendi telefonunuzla bir kez tarayın.",
    "faq": [
     {
      "q": "Ücretsiz mi?",
      "a": "Evet. Hesap ve ödeme yoktur."
     },
     {
      "q": "Kodun süresi biter mi?",
      "a": "Hayır. Statik QR bilgiyi doğrudan taşır."
     },
     {
      "q": "Wi-Fi için QR olur mu?",
      "a": "Evet, ayrı bir Wi-Fi QR sayfası var."
     },
     {
      "q": "Telefon uygulaması var mı?",
      "a": "Nibras QR telefon uygulaması henüz mağazada değil. Site şimdi çalışır."
     }
    ]
   },
   "ar": {
    "title": "اصنع رمز QR — مجانًا وبلا تسجيل",
    "lead": "حوّل رابطًا أو نصًا أو Wi-Fi أو بطاقة اتصال إلى رمز QR. لا حساب.\n\nيمكن أيضًا تغيير اللون والمسح بالهاتف. الإضافات مثل الشعار وSVG في Pro.",
    "points": [
     "افتح nibrascode.com/ar/qr.",
     "اختر النوع: رابط أو نص أو Wi-Fi أو بطاقة.",
     "اكتب البيانات وغيّر اللون عند الحاجة.",
     "نزّل PNG وجرّبه بالهاتف."
    ],
    "note": "امسح الرمز مرة بهاتفك قبل الطباعة.",
    "faq": [
     {
      "q": "هل هو مجاني؟",
      "a": "نعم. لا حساب ولا دفع."
     },
     {
      "q": "هل تنتهي صلاحية الرمز؟",
      "a": "لا. رمز QR الثابت يحمل البيانات مباشرة."
     },
     {
      "q": "هل يوجد QR للواي فاي؟",
      "a": "نعم، هناك صفحة Wi-Fi QR منفصلة."
     },
     {
      "q": "هل يوجد تطبيق للهاتف؟",
      "a": "تطبيق Nibras QR ليس في المتجر بعد. الموقع يعمل الآن."
     }
    ]
   },
   "ru": {
    "title": "Сделать QR-код — бесплатно, без регистрации",
    "lead": "Превратите ссылку, текст, Wi-Fi или визитку в QR-код. Без аккаунта.\n\nМожно сменить цвет и сканировать телефоном. Логотип и SVG — в Pro.",
    "points": [
     "Откройте nibrascode.com/ru/qr.",
     "Выберите тип: ссылка, текст, Wi-Fi или визитка.",
     "Введите данные и при нужде смените цвет.",
     "Скачайте PNG и проверьте телефоном."
    ],
    "note": "Перед печатью один раз отсканируйте код своим телефоном.",
    "faq": [
     {
      "q": "Это бесплатно?",
      "a": "Да. Без аккаунта и оплаты."
     },
     {
      "q": "У кода есть срок?",
      "a": "Нет. Статический QR хранит данные напрямую."
     },
     {
      "q": "Можно QR для Wi-Fi?",
      "a": "Да, есть отдельная страница Wi-Fi QR."
     },
     {
      "q": "Есть приложение для телефона?",
      "a": "Приложения Nibras QR пока нет в магазине. Сайт работает сейчас."
     }
    ]
   }
  }
 },
 {
  "slug": "faiz-hesabla-pulsuz",
  "links": [
   {
    "path": "/faiz",
    "label": {
     "az": "Faiz hesabla",
     "en": "Percent calculator",
     "tr": "Yüzde hesapla",
     "ar": "حاسبة النسبة",
     "ru": "Посчитать процент"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "Faiz hesabla — pulsuz, qeydiyyatsız",
    "lead": "Ədədin faizini və bir ədədin digərinin neçə faizi olduğunu hesablayın. Hesab açılmır.\n\nRəqəmlər saxlanmır, hesab bu səhifədə qalır.",
    "points": [
     "nibrascode.com/faiz səhifəsini açın.",
     "Faizi və ədədi yazın.",
     "Və ya iki ədədi yazın ki, neçə faiz olduğunu görəsiniz.",
     "Cavab dərhal görünür."
    ],
    "note": "Nümunə: 200-ün 15 faizi 30-dur.",
    "faq": [
     {
      "q": "Faiz hesablamaq pulsuzdur?",
      "a": "Bəli. Hesab və ödəniş yoxdur."
     },
     {
      "q": "15 faiz 200 nədir?",
      "a": "30. Faiz ədədə vurulur və 100-ə bölünür."
     },
     {
      "q": "30, 200-ün neçə faizidir?",
      "a": "15 faiz."
     },
     {
      "q": "Rəqəmlər saxlanılır?",
      "a": "Xeyr. Hesab bu səhifədə qalır."
     }
    ]
   },
   "en": {
    "title": "Percent calculator — free, no sign-up",
    "lead": "Find a percent of a number, and what percent one number is of another. No account.\n\nNumbers are not stored; the calculation stays on this page.",
    "points": [
     "Open nibrascode.com/en/faiz.",
     "Type the percent and the number.",
     "Or type two numbers to see the percent.",
     "The answer shows at once."
    ],
    "note": "Example: 15 percent of 200 is 30.",
    "faq": [
     {
      "q": "Is it free?",
      "a": "Yes. No account and no payment."
     },
     {
      "q": "What is 15 percent of 200?",
      "a": "30. The percent is multiplied by the number and divided by 100."
     },
     {
      "q": "What percent is 30 of 200?",
      "a": "15 percent."
     },
     {
      "q": "Are numbers stored?",
      "a": "No. The calculation stays on this page."
     }
    ]
   },
   "tr": {
    "title": "Yüzde hesapla — ücretsiz, kayıtsız",
    "lead": "Sayının yüzdesini ve bir sayının diğerinin yüzde kaçı olduğunu hesaplayın. Hesap yok.\n\nSayılar saklanmaz, hesap bu sayfada kalır.",
    "points": [
     "nibrascode.com/tr/faiz sayfasını açın.",
     "Yüzdeyi ve sayıyı yazın.",
     "Ya da iki sayıyı yazıp yüzdesini görün.",
     "Cevap hemen görünür."
    ],
    "note": "Örnek: 200'ün yüzde 15'i 30'dur.",
    "faq": [
     {
      "q": "Ücretsiz mi?",
      "a": "Evet. Hesap ve ödeme yoktur."
     },
     {
      "q": "200'ün yüzde 15'i nedir?",
      "a": "30."
     },
     {
      "q": "30, 200'ün yüzde kaçı?",
      "a": "Yüzde 15."
     },
     {
      "q": "Sayılar saklanır mı?",
      "a": "Hayır. Hesap bu sayfada kalır."
     }
    ]
   },
   "ar": {
    "title": "حاسبة النسبة المئوية — مجانًا وبلا تسجيل",
    "lead": "احسب نسبة من عدد، وكم نسبة عدد من آخر. لا حساب.\n\nلا تُحفظ الأرقام، والحساب يبقى في هذه الصفحة.",
    "points": [
     "افتح nibrascode.com/ar/faiz.",
     "اكتب النسبة والعدد.",
     "أو اكتب عددين لترى النسبة.",
     "يظهر الجواب فورًا."
    ],
    "note": "مثال: 15% من 200 هي 30.",
    "faq": [
     {
      "q": "هل هي مجانية؟",
      "a": "نعم. لا حساب ولا دفع."
     },
     {
      "q": "كم 15% من 200؟",
      "a": "30."
     },
     {
      "q": "كم نسبة 30 من 200؟",
      "a": "15%."
     },
     {
      "q": "هل تُحفظ الأرقام؟",
      "a": "لا. الحساب يبقى في هذه الصفحة."
     }
    ]
   },
   "ru": {
    "title": "Посчитать процент — бесплатно, без регистрации",
    "lead": "Найдите процент от числа и сколько процентов одно число от другого. Без аккаунта.\n\nЧисла не сохраняются, расчёт остаётся на этой странице.",
    "points": [
     "Откройте nibrascode.com/ru/faiz.",
     "Введите процент и число.",
     "Или введите два числа, чтобы увидеть процент.",
     "Ответ видно сразу."
    ],
    "note": "Пример: 15 процентов от 200 — это 30.",
    "faq": [
     {
      "q": "Это бесплатно?",
      "a": "Да. Без аккаунта и оплаты."
     },
     {
      "q": "Сколько 15 процентов от 200?",
      "a": "30."
     },
     {
      "q": "Сколько процентов 30 от 200?",
      "a": "15 процентов."
     },
     {
      "q": "Числа сохраняются?",
      "a": "Нет. Расчёт остаётся на этой странице."
     }
    ]
   }
  }
 }
];

export const PROBLEM_PAGES: readonly SearchItem[] = [
 {
  "slug": "pdf-acilmir",
  "links": [
   {
    "path": "/pdf",
    "label": {
     "az": "PDF alətləri",
     "en": "PDF tools",
     "tr": "PDF araçları",
     "ar": "أدوات PDF",
     "ru": "Инструменты PDF"
    }
   },
   {
    "path": "/pdf/unlock",
    "label": {
     "az": "PDF parolunu aç",
     "en": "Unlock PDF",
     "tr": "PDF parolasını aç",
     "ar": "فتح كلمة مرور PDF",
     "ru": "Снять пароль PDF"
    }
   },
   {
    "path": "/xeta/apk-qurulmur",
    "label": {
     "az": "APK qurulmur",
     "en": "APK will not install",
     "tr": "APK kurulmuyor",
     "ar": "APK لا يُثبَّت",
     "ru": "APK не устанавливается"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "PDF açılmır",
    "lead": "PDF açılmırsa, çox vaxt səbəb fayldır, telefon deyil: yarım enib, parollu olub və ya əslində PDF deyil.\n\nSəbəbi sıra ilə yoxlayın.",
    "points": [
     "Fayl tam enibmi? Ölçüsü 0 KB və ya çox kiçikdirsə, yenidən endirin.",
     "Ad `.pdf` ilə bitirmi? `.pdf.html` və ya `.bin` olubsa, fayl PDF deyil. Mənbədən yenidən alın.",
     "Parol soruşursa, parolu bilirsinizsə «PDF parolunu aç» ilə parolsuz nüsxə çıxarın.",
     "Bir proqramda açılmırsa, brauzerdə açın. Brauzer açırsa, problem proqramdadır.",
     "Messencerdən gələn fayl kəsilə bilər. Göndərəndən e-poçt və ya bulud linki ilə istəyin."
    ],
    "note": "Faylın adını `.pdf` edib saxlamaq onu PDF etmir.",
    "faq": [
     {
      "q": "Telefonda PDF niyə açılmır?",
      "a": "Çox vaxt fayl yarım enib və ya PDF oxuyan proqram yoxdur. Brauzerdə açmağı yoxlayın."
     },
     {
      "q": "PDF parol istəyir, nə edim?",
      "a": "Parolu bilirsinizsə, onu daxil edin və ya parolsuz nüsxə çıxarın. Parolu sındırmaq olmur."
     },
     {
      "q": "«Fayl zədələnib» yazır?",
      "a": "Faylı yenidən endirin və ya göndərəndən yenidən istəyin."
     }
    ]
   },
   "en": {
    "title": "PDF will not open",
    "lead": "When a PDF will not open, the cause is usually the file, not the phone: it downloaded halfway, it has a password, or it is not really a PDF.\n\nCheck the cause in order.",
    "points": [
     "Did the file download fully? If it is 0 KB or very small, download it again.",
     "Does the name end in `.pdf`? If it became `.pdf.html` or `.bin`, it is not a PDF. Get it from the source again.",
     "If it asks for a password and you know it, make a copy without the password with Unlock PDF.",
     "If one app will not open it, try the browser. If the browser opens it, the problem is the app.",
     "A file from a messenger can be cut. Ask the sender for an email or cloud link."
    ],
    "note": "Renaming a file to `.pdf` does not make it a PDF.",
    "faq": [
     {
      "q": "Why will a PDF not open on my phone?",
      "a": "Usually the file downloaded halfway or there is no PDF reader. Try opening it in the browser."
     },
     {
      "q": "The PDF asks for a password. What now?",
      "a": "If you know it, type it or save a copy without it. A password cannot be cracked here."
     },
     {
      "q": "It says the file is damaged?",
      "a": "Download it again or ask the sender to resend it."
     }
    ]
   },
   "tr": {
    "title": "PDF açılmıyor",
    "lead": "PDF açılmıyorsa sebep çoğu zaman dosyadır, telefon değil: yarım inmiş, parolalı ya da aslında PDF değil.\n\nNedeni sırayla yoklayın.",
    "points": [
     "Dosya tam indi mi? Boyutu 0 KB ya da çok küçükse yeniden indirin.",
     "Ad `.pdf` ile bitiyor mu? `.pdf.html` ya da `.bin` olduysa dosya PDF değildir. Kaynaktan yeniden alın.",
     "Parola soruyorsa ve biliyorsanız «PDF parolasını aç» ile parolasız kopya çıkarın.",
     "Bir uygulamada açılmıyorsa tarayıcıda açın. Tarayıcı açıyorsa sorun uygulamadadır.",
     "Mesajlaşmadan gelen dosya kesilebilir. Gönderenden e-posta ya da bulut bağlantısı isteyin."
    ],
    "note": "Dosyanın adını `.pdf` yapmak onu PDF yapmaz.",
    "faq": [
     {
      "q": "Telefonda PDF neden açılmıyor?",
      "a": "Çoğu zaman dosya yarım inmiştir ya da PDF okuyucu yoktur. Tarayıcıda açmayı deneyin."
     },
     {
      "q": "PDF parola istiyor, ne yapayım?",
      "a": "Biliyorsanız girin ya da parolasız kopya çıkarın. Parola kırılamaz."
     },
     {
      "q": "«Dosya bozuk» yazıyor?",
      "a": "Dosyayı yeniden indirin ya da gönderenden tekrar isteyin."
     }
    ]
   },
   "ar": {
    "title": "ملف PDF لا يُفتح",
    "lead": "إذا لم يُفتح PDF فالسبب غالبًا الملف لا الهاتف: نُزّل نصفه، أو عليه كلمة مرور، أو ليس PDF فعلًا.\n\nافحص السبب بالترتيب.",
    "points": [
     "هل اكتمل التنزيل؟ إذا كان الحجم 0 KB أو صغيرًا جدًا فنزّله من جديد.",
     "هل ينتهي الاسم بـ `.pdf`؟ إذا صار `.pdf.html` أو `.bin` فليس PDF. خذه من المصدر من جديد.",
     "إذا طلب كلمة مرور وتعرفها فاحفظ نسخة بلا كلمة مرور بأداة فتح PDF.",
     "إذا لم يفتحه تطبيق فجرّب المتصفح. إذا فتحه المتصفح فالمشكلة في التطبيق.",
     "الملف من تطبيق مراسلة قد يُقطع. اطلب من المرسل رابط بريد أو سحابة."
    ],
    "note": "تغيير اسم الملف إلى `.pdf` لا يجعله PDF.",
    "faq": [
     {
      "q": "لماذا لا يُفتح PDF في الهاتف؟",
      "a": "غالبًا نُزّل نصف الملف أو لا يوجد قارئ PDF. جرّب المتصفح."
     },
     {
      "q": "يطلب PDF كلمة مرور، ماذا أفعل؟",
      "a": "إن كنت تعرفها فأدخلها أو احفظ نسخة بدونها. لا يمكن كسرها."
     },
     {
      "q": "يقول إن الملف تالف؟",
      "a": "نزّله من جديد أو اطلب من المرسل إعادة إرساله."
     }
    ]
   },
   "ru": {
    "title": "PDF не открывается",
    "lead": "Если PDF не открывается, причина обычно в файле, а не в телефоне: он скачался не до конца, у него пароль или это вовсе не PDF.\n\nПроверяйте причину по порядку.",
    "points": [
     "Файл скачался полностью? Если он 0 КБ или очень маленький, скачайте снова.",
     "Имя заканчивается на `.pdf`? Если стало `.pdf.html` или `.bin`, это не PDF. Возьмите его из источника снова.",
     "Если просит пароль и вы его знаете, сохраните копию без пароля инструментом «Снять пароль PDF».",
     "Если одно приложение не открывает, попробуйте браузер. Если браузер открывает, дело в приложении.",
     "Файл из мессенджера может обрезаться. Попросите отправителя ссылку на почту или облако."
    ],
    "note": "Переименование файла в `.pdf` не делает его PDF.",
    "faq": [
     {
      "q": "Почему PDF не открывается на телефоне?",
      "a": "Обычно файл скачался не до конца или нет программы для PDF. Попробуйте браузер."
     },
     {
      "q": "PDF просит пароль. Что делать?",
      "a": "Если знаете — введите или сохраните копию без пароля. Взломать пароль нельзя."
     },
     {
      "q": "Пишет, что файл повреждён?",
      "a": "Скачайте снова или попросите отправителя прислать ещё раз."
     }
    ]
   }
  }
 },
 {
  "slug": "qr-oxunmur",
  "links": [
   {
    "path": "/qr",
    "label": {
     "az": "QR kod",
     "en": "QR code",
     "tr": "QR kod",
     "ar": "رمز QR",
     "ru": "QR-код"
    }
   },
   {
    "path": "/wifi",
    "label": {
     "az": "Wi-Fi QR",
     "en": "Wi-Fi QR",
     "tr": "Wi-Fi QR",
     "ar": "QR للواي فاي",
     "ru": "Wi-Fi QR"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "QR oxunmur",
    "lead": "Kamera QR kodu tutmursa, səbəb çox vaxt işıq, ölçü, kontrast və ya kodun içindəki məlumatdır.\n\nSıra ilə yoxlayın.",
    "points": [
     "Kamera obyektivini silin, işığı artırın, parıltını kənara çəkin.",
     "Telefonu bir az uzaqlaşdırın: kod ekranın təxminən yarısını tutsun.",
     "Kod tünd, fon açıq olmalıdır. Açıq kod tünd fonda bir çox kamerada oxunmur.",
     "Kodun ətrafında boş kənar (sakit zona) qalsın. Kəsilibsə, yenidən çap edin.",
     "Çox uzun link kodu sıxlaşdırır. Qısa link və ya az mətn qoyun.",
     "Wi-Fi QR qoşulmursa, şəbəkə adı və parolu böyük-kiçik hərfə qədər yoxlayın."
    ],
    "note": "Çapdan əvvəl kodu iki fərqli telefonla skan edin.",
    "faq": [
     {
      "q": "QR kod niyə oxunmur?",
      "a": "Ən çox işıq, çox kiçik ölçü, zəif kontrast və ya kəsilmiş kənar səbəb olur."
     },
     {
      "q": "Rəngli QR oxunur?",
      "a": "Bəli, kod tünd və fon açıq qaldıqca."
     },
     {
      "q": "Kamera tətbiqi QR görmür?",
      "a": "Kamerada QR skan ayarını açın və ya brauzerdə skan alətini işlədin."
     }
    ]
   },
   "en": {
    "title": "QR code will not scan",
    "lead": "If the camera will not read a QR code, the cause is usually light, size, contrast, or the data inside the code.\n\nCheck in order.",
    "points": [
     "Wipe the camera lens, add light, move away from glare.",
     "Move the phone back a little: the code should fill about half the screen.",
     "The code should be dark on a light background. A light code on dark often fails.",
     "Keep an empty margin (quiet zone) around the code. If it is cut, print again.",
     "A very long link makes the code dense. Use a short link or less text.",
     "If a Wi-Fi QR will not connect, check the network name and password, including letter case."
    ],
    "note": "Before printing, scan the code with two different phones.",
    "faq": [
     {
      "q": "Why will a QR code not scan?",
      "a": "Most often light, a tiny size, weak contrast, or a cut edge."
     },
     {
      "q": "Does a colored QR work?",
      "a": "Yes, as long as the code is dark and the background is light."
     },
     {
      "q": "The camera app does not see QR?",
      "a": "Turn on QR scanning in the camera settings or use a scanner in the browser."
     }
    ]
   },
   "tr": {
    "title": "QR okunmuyor",
    "lead": "Kamera QR kodu okumuyorsa sebep çoğu zaman ışık, boyut, kontrast ya da kodun içindeki bilgidir.\n\nSırayla yoklayın.",
    "points": [
     "Kamera merceğini silin, ışığı artırın, parlamadan uzaklaşın.",
     "Telefonu biraz uzaklaştırın: kod ekranın yaklaşık yarısını tutsun.",
     "Kod koyu, arka plan açık olmalı. Koyu zeminde açık kod çoğu kamerada okunmaz.",
     "Kodun etrafında boş kenar (sessiz alan) kalsın. Kesildiyse yeniden basın.",
     "Çok uzun bağlantı kodu sıklaştırır. Kısa bağlantı ya da az metin koyun.",
     "Wi-Fi QR bağlanmıyorsa ağ adını ve parolayı büyük-küçük harfe kadar kontrol edin."
    ],
    "note": "Basmadan önce kodu iki farklı telefonla tarayın.",
    "faq": [
     {
      "q": "QR kod neden okunmuyor?",
      "a": "En çok ışık, çok küçük boyut, zayıf kontrast ya da kesik kenar."
     },
     {
      "q": "Renkli QR okunur mu?",
      "a": "Evet, kod koyu ve zemin açık kaldıkça."
     },
     {
      "q": "Kamera uygulaması QR görmüyor?",
      "a": "Kamera ayarlarında QR taramayı açın ya da tarayıcıdaki tarayıcıyı kullanın."
     }
    ]
   },
   "ar": {
    "title": "رمز QR لا يُقرأ",
    "lead": "إذا لم تقرأ الكاميرا رمز QR فالسبب غالبًا الضوء أو الحجم أو التباين أو البيانات داخل الرمز.\n\nافحص بالترتيب.",
    "points": [
     "امسح عدسة الكاميرا وزد الضوء وابتعد عن الانعكاس.",
     "أبعد الهاتف قليلًا: ليملأ الرمز نحو نصف الشاشة.",
     "يجب أن يكون الرمز داكنًا على خلفية فاتحة. الرمز الفاتح على الداكن يفشل غالبًا.",
     "اترك هامشًا فارغًا حول الرمز. إذا قُصّ فاطبعه من جديد.",
     "الرابط الطويل جدًا يجعل الرمز كثيفًا. استخدم رابطًا قصيرًا أو نصًا أقل.",
     "إذا لم يتصل QR الواي فاي فافحص اسم الشبكة وكلمة المرور مع حالة الأحرف."
    ],
    "note": "قبل الطباعة امسح الرمز بهاتفين مختلفين.",
    "faq": [
     {
      "q": "لماذا لا يُقرأ رمز QR؟",
      "a": "غالبًا الضوء أو الحجم الصغير أو التباين الضعيف أو حافة مقصوصة."
     },
     {
      "q": "هل يُقرأ QR الملوّن؟",
      "a": "نعم ما دام الرمز داكنًا والخلفية فاتحة."
     },
     {
      "q": "تطبيق الكاميرا لا يرى QR؟",
      "a": "فعّل مسح QR في إعدادات الكاميرا أو استخدم الماسح في المتصفح."
     }
    ]
   },
   "ru": {
    "title": "QR-код не сканируется",
    "lead": "Если камера не читает QR-код, причина обычно в свете, размере, контрасте или данных внутри кода.\n\nПроверяйте по порядку.",
    "points": [
     "Протрите объектив, добавьте света, уйдите от бликов.",
     "Отодвиньте телефон: код должен занимать около половины экрана.",
     "Код должен быть тёмным на светлом фоне. Светлый код на тёмном часто не читается.",
     "Оставьте пустое поле вокруг кода. Если край обрезан, напечатайте заново.",
     "Очень длинная ссылка делает код плотным. Используйте короткую ссылку или меньше текста.",
     "Если Wi-Fi QR не подключает, проверьте имя сети и пароль с учётом регистра."
    ],
    "note": "Перед печатью отсканируйте код двумя разными телефонами.",
    "faq": [
     {
      "q": "Почему QR-код не сканируется?",
      "a": "Чаще всего свет, слишком малый размер, слабый контраст или обрезанный край."
     },
     {
      "q": "Цветной QR читается?",
      "a": "Да, пока код тёмный, а фон светлый."
     },
     {
      "q": "Камера не видит QR?",
      "a": "Включите сканирование QR в настройках камеры или используйте сканер в браузере."
     }
    ]
   }
  }
 },
 {
  "slug": "sekil-cox-boyukdur",
  "links": [
   {
    "path": "/image",
    "label": {
     "az": "Şəkil sıx",
     "en": "Compress photo",
     "tr": "Fotoğraf sıkıştır",
     "ar": "ضغط الصورة",
     "ru": "Сжать фото"
    }
   },
   {
    "path": "/image/resize",
    "label": {
     "az": "Ölçünü dəyiş",
     "en": "Resize image",
     "tr": "Boyut değiştir",
     "ar": "تغيير المقاس",
     "ru": "Изменить размер"
    }
   },
   {
    "path": "/pdf/compress",
    "label": {
     "az": "PDF sıx",
     "en": "Compress PDF",
     "tr": "PDF sıkıştır",
     "ar": "ضغط PDF",
     "ru": "Сжать PDF"
    }
   }
  ],
  "piece": {
   "az": {
    "title": "Şəkil çox böyükdür",
    "lead": "Forma və ya sayt «fayl çox böyükdür» yazırsa, şəklin həcmini (KB/MB) və ya ölçüsünü (piksel) kiçiltmək lazımdır.\n\nÇox vaxt bir sıxma kifayət edir.",
    "points": [
     "Limiti oxuyun: məsələn 500 KB, 1 MB və ya 1200 piksel.",
     "nibrascode.com/image səhifəsində şəkli seçin.",
     "Keyfiyyət sürgüsünü endirin, həcmi izləyin.",
     "JPG kimi endirin. PNG ekran şəkli JPG-də çox kiçilir.",
     "Hələ böyükdürsə, şəklin ölçüsünü (piksel) kiçildin.",
     "Sənəd PDF-dirsə, «PDF sıx» işlədin."
    ],
    "note": "Telefon kamerası 4–10 MB şəkil çəkir; formalar çox vaxt 1–2 MB qəbul edir.",
    "faq": [
     {
      "q": "Şəkli necə kiçildim?",
      "a": "Şəkil sıx alətində keyfiyyəti endirin və JPG endirin. Pulsuzdur, serverə getmir."
     },
     {
      "q": "Keyfiyyət çox düşəcək?",
      "a": "Ekranda göz çox vaxt fərqi görmür. Sürgü ilə özünüz seçirsiniz."
     },
     {
      "q": "PDF böyükdürsə?",
      "a": "«PDF sıx» alətini işlədin."
     }
    ]
   },
   "en": {
    "title": "Photo is too large",
    "lead": "If a form or site says the file is too large, you need to reduce the file size (KB/MB) or the dimensions (pixels).\n\nOne compression is often enough.",
    "points": [
     "Read the limit: for example 500 KB, 1 MB, or 1200 pixels.",
     "Choose the photo on nibrascode.com/en/image.",
     "Lower the quality slider and watch the size.",
     "Download as JPG. A PNG screenshot shrinks a lot as JPG.",
     "If it is still large, reduce the dimensions (pixels).",
     "If the document is a PDF, use Compress PDF."
    ],
    "note": "Phone cameras take 4–10 MB photos; forms often accept 1–2 MB.",
    "faq": [
     {
      "q": "How do I make a photo smaller?",
      "a": "Lower the quality in Compress photo and download a JPG. Free, and it does not go to a server."
     },
     {
      "q": "Will quality drop a lot?",
      "a": "On screen the eye often sees no difference. You choose with the slider."
     },
     {
      "q": "What if the PDF is large?",
      "a": "Use the Compress PDF tool."
     }
    ]
   },
   "tr": {
    "title": "Fotoğraf çok büyük",
    "lead": "Form ya da site «dosya çok büyük» diyorsa fotoğrafın boyutunu (KB/MB) ya da ölçüsünü (piksel) küçültmek gerekir.\n\nÇoğu zaman bir sıkıştırma yeter.",
    "points": [
     "Sınırı okuyun: örneğin 500 KB, 1 MB ya da 1200 piksel.",
     "nibrascode.com/tr/image sayfasında fotoğrafı seçin.",
     "Kalite kaydırıcısını düşürün, boyutu izleyin.",
     "JPG olarak indirin. PNG ekran görüntüsü JPG'de çok küçülür.",
     "Hâlâ büyükse fotoğrafın ölçüsünü (piksel) küçültün.",
     "Belge PDF ise «PDF sıkıştır» kullanın."
    ],
    "note": "Telefon kameraları 4–10 MB fotoğraf çeker; formlar çoğu zaman 1–2 MB kabul eder.",
    "faq": [
     {
      "q": "Fotoğrafı nasıl küçültürüm?",
      "a": "Fotoğraf sıkıştır aracında kaliteyi düşürüp JPG indirin. Ücretsizdir, sunucuya gitmez."
     },
     {
      "q": "Kalite çok düşer mi?",
      "a": "Ekranda göz çoğu zaman farkı görmez. Kaydırıcıyla siz seçersiniz."
     },
     {
      "q": "PDF büyükse?",
      "a": "«PDF sıkıştır» aracını kullanın."
     }
    ]
   },
   "ar": {
    "title": "الصورة كبيرة جدًا",
    "lead": "إذا قال نموذج أو موقع إن الملف كبير جدًا فعليك تصغير حجم الملف (KB/MB) أو الأبعاد (بكسل).\n\nغالبًا يكفي ضغط واحد.",
    "points": [
     "اقرأ الحد: مثلًا 500 KB أو 1 MB أو 1200 بكسل.",
     "اختر الصورة في nibrascode.com/ar/image.",
     "اخفض منزلق الجودة وراقب الحجم.",
     "نزّلها JPG. لقطة الشاشة PNG تصغر كثيرًا بصيغة JPG.",
     "إذا بقيت كبيرة فصغّر الأبعاد (بكسل).",
     "إذا كان المستند PDF فاستخدم ضغط PDF."
    ],
    "note": "كاميرات الهواتف تلتقط صورًا بحجم 4–10 MB، والنماذج غالبًا تقبل 1–2 MB.",
    "faq": [
     {
      "q": "كيف أصغّر الصورة؟",
      "a": "اخفض الجودة في أداة ضغط الصورة ونزّل JPG. مجاني ولا يذهب إلى خادم."
     },
     {
      "q": "هل تنخفض الجودة كثيرًا؟",
      "a": "على الشاشة غالبًا لا ترى العين فرقًا. أنت تختار بالمنزلق."
     },
     {
      "q": "وإذا كان PDF كبيرًا؟",
      "a": "استخدم أداة ضغط PDF."
     }
    ]
   },
   "ru": {
    "title": "Фото слишком большое",
    "lead": "Если форма или сайт пишет, что файл слишком большой, нужно уменьшить размер файла (КБ/МБ) или разрешение (пиксели).\n\nЧасто хватает одного сжатия.",
    "points": [
     "Прочитайте лимит: например 500 КБ, 1 МБ или 1200 пикселей.",
     "Выберите фото на nibrascode.com/ru/image.",
     "Опустите ползунок качества и следите за размером.",
     "Скачайте в JPG. Скриншот PNG в JPG сильно уменьшается.",
     "Если всё ещё большое, уменьшите разрешение (пиксели).",
     "Если документ — PDF, используйте «Сжать PDF»."
    ],
    "note": "Камеры телефонов снимают фото по 4–10 МБ; формы часто принимают 1–2 МБ.",
    "faq": [
     {
      "q": "Как уменьшить фото?",
      "a": "Снизьте качество в инструменте «Сжать фото» и скачайте JPG. Бесплатно, на сервер не уходит."
     },
     {
      "q": "Сильно ли упадёт качество?",
      "a": "На экране глаз часто не видит разницы. Вы выбираете ползунком."
     },
     {
      "q": "А если большой PDF?",
      "a": "Используйте инструмент «Сжать PDF»."
     }
    ]
   }
  }
 }
];
