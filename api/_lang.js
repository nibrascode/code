// Dil seçimi: sualın dili aydın aşkarlanırsa o dildə cavab; qısa/qeyri-müəyyən sualda səhifədə seçilmiş dil (body.lang), yoxsa az.
export const LANGS = ["az", "en", "tr", "ar", "ru"];
export const LANG_NAMES = { az: "Azerbaijani (Azərbaycan dili)", en: "English", tr: "Turkish (Türkçe)", ar: "Arabic (العربية)", ru: "Russian (Русский)" };

export function normLang(v) {
  const s = String(v || "").toLowerCase().slice(0, 2);
  return LANGS.includes(s) ? s : "";
}

// Mətnin dili aydındırsa dil kodu, əks halda "" (qısa/qarışıq Latın mətn)
export function queryLang(text) {
  const t = String(text || "");
  const ar = (t.match(/[\u0600-\u06FF]/g) || []).length;
  const cy = (t.match(/[\u0400-\u04FF]/g) || []).length;
  const lat = (t.match(/[A-Za-zƏəĞğİıÖöŞşÜüÇç]/g) || []).length;
  if (ar && ar >= lat) return "ar";
  if (cy && cy >= lat) return "ru";
  if (/[əƏ]/.test(t)) return "az";
  const q = t.toLowerCase();
  const w = q.replace(/[^\p{L}0-9\s'-]/gu, " ");
  const has = (words) => new RegExp("(?<![\\p{L}])(?:" + words + ")(?![\\p{L}])", "u").test(w);
  const trWords = "nasıl|nedir|yapabilir|lütfen|uygulama|oluştur|oluştur\\p{L}*|yap|yapar mısın|bana|için|değil|merhaba|teşekkür|göster|şifre|karekod|kare kod|üret|olustur|hazırlar mısın";
  const azWords = "yarat|yaradın|yarada|hazırla|hazirla|düzəlt|duzelt|nədir|necə|nece|haqqında|haqqinda|lazımdır|lazimdir|mənə|sayt|üçün|ucun|göstər|goster|olunur|edin";
  const enWords = "make|made|making|create|created|generate|generated|build|how|what|please|show|can|you|the|my|for|with|code|remove|removal|background|photo|image|picture|free|download|scan|scanner|link|text|phone|email|card|business|are|me";
  if (has(azWords)) return "az";
  if (has(trWords)) return "tr";
  if (has(enWords)) return "en";
  return "";
}

export function resolveLang(message, uiLang) {
  return queryLang(message) || normLang(uiLang) || "az";
}

const M = {
  az: {
    post: "Yalnız POST sorğusu qəbul olunur.",
    empty: "Mesaj boş ola bilməz.",
    limit: "Bu gün üçün sual limiti bitdi. Sabah yenidən yaz. Hazır cavabı olan suallar isə bu gün də cavablanır.",
    noAnswer: "İndi cavab alınmadı. Bir az sonra yenidən yoxlayın.",
    server: "Server xətası. Bir az sonra yenidən cəhd edin.",
    qrReady: "QR hazırdır.", qrFor: "{x} üçün QR hazırdır.", qrFill: "{k} üçün xanaları doldur.",
    qrAsk: ["QR xidməti açıqdır. Növü seç, xanaları doldur.", "Ünvan, mətn, telefon, e-poçt, WhatsApp, Wi-Fi, vizit kartı, SMS, yer və ya tədbir.", "Boş xana ilə hazırlanmır. Dolan kimi şəkil və QR səhifəsi açılır."],
    qrExplain: "QR kod bir ünvanı, mətni və ya telefonu kiçik şəklə yığır. Telefon kamerası onu oxuyur.",
    kinds: { whatsapp: "WhatsApp", wifi: "Wi-Fi", vcard: "Vizit kartı", email: "E-poçt", phone: "Telefon", url: "Ünvan", text: "Mətn", qr: "QR" },
    erase: "Nibras Erase şəklin fonunu silir. Şəkli seç, keyfiyyəti seç, fonu sil, lazımdırsa kənarı fırça ilə düzəlt, sonra PNG, JPG və ya WebP yüklə. Şəkil serverə yüklənmir, hamısı brauzerdə gedir. Səhifə: https://www.nibrascode.com/erase",
  },
  en: {
    post: "Only POST requests are accepted.",
    empty: "The message cannot be empty.",
    limit: "Today's question limit is used up. Try again tomorrow. Questions with ready answers still work today.",
    noAnswer: "No answer right now. Please try again in a moment.",
    server: "Server error. Please try again in a moment.",
    qrReady: "Your QR code is ready.", qrFor: "Your QR code for {x} is ready.", qrFill: "Fill in the fields for {k}.",
    qrAsk: ["The QR service is open. Pick a type and fill in the fields.", "Link, text, phone, email, WhatsApp, Wi-Fi, business card, SMS, location or event.", "It will not be created with empty fields. As soon as they are filled, the image and the QR page open."],
    qrExplain: "A QR code packs a link, text or phone number into a small image. A phone camera reads it.",
    kinds: { whatsapp: "WhatsApp", wifi: "Wi-Fi", vcard: "Business card", email: "Email", phone: "Phone", url: "Link", text: "Text", qr: "QR" },
    erase: "Nibras Erase removes the background of a photo. Pick a photo, pick the quality, remove the background, fix the edge with the brush if needed, then download PNG, JPG or WebP. The photo is not uploaded; everything runs in your browser. Page: https://www.nibrascode.com/en/erase",
  },
  tr: {
    post: "Yalnızca POST isteği kabul edilir.",
    empty: "Mesaj boş olamaz.",
    limit: "Bugünkü soru limiti doldu. Yarın tekrar yaz. Hazır cevabı olan sorular bugün de cevaplanır.",
    noAnswer: "Şu anda cevap alınamadı. Biraz sonra tekrar deneyin.",
    server: "Sunucu hatası. Biraz sonra tekrar deneyin.",
    qrReady: "QR kodu hazır.", qrFor: "{x} için QR kodu hazır.", qrFill: "{k} için alanları doldur.",
    qrAsk: ["QR hizmeti açık. Türü seç, alanları doldur.", "Adres, metin, telefon, e-posta, WhatsApp, Wi-Fi, kartvizit, SMS, konum veya etkinlik.", "Boş alanla hazırlanmaz. Dolunca görsel ve QR sayfası açılır."],
    qrExplain: "QR kod bir adresi, metni veya telefonu küçük bir görsele sığdırır. Telefon kamerası onu okur.",
    kinds: { whatsapp: "WhatsApp", wifi: "Wi-Fi", vcard: "Kartvizit", email: "E-posta", phone: "Telefon", url: "Adres", text: "Metin", qr: "QR" },
    erase: "Nibras Erase fotoğrafın arka planını siler. Fotoğrafı seç, kaliteyi seç, arka planı sil, gerekirse kenarı fırçayla düzelt, sonra PNG, JPG veya WebP indir. Fotoğraf sunucuya yüklenmez, her şey tarayıcıda olur. Sayfa: https://www.nibrascode.com/erase",
  },
  ar: {
    post: "يُقبل طلب POST فقط.",
    empty: "لا يمكن أن تكون الرسالة فارغة.",
    limit: "انتهى حد الأسئلة لهذا اليوم. اكتب غداً من جديد. الأسئلة التي لها إجابات جاهزة تُجاب اليوم أيضاً.",
    noAnswer: "لم تصل إجابة الآن. حاول مرة أخرى بعد قليل.",
    server: "خطأ في الخادم. حاول مرة أخرى بعد قليل.",
    qrReady: "رمز QR جاهز.", qrFor: "رمز QR الخاص بـ {x} جاهز.", qrFill: "املأ الحقول الخاصة بـ {k}.",
    qrAsk: ["خدمة QR متاحة. اختر النوع واملأ الحقول.", "رابط، نص، هاتف، بريد إلكتروني، WhatsApp، Wi-Fi، بطاقة عمل، SMS، موقع أو فعالية.", "لا يتم الإنشاء بحقول فارغة. بمجرد ملئها تُفتح الصورة وصفحة QR."],
    qrExplain: "رمز QR يضع رابطاً أو نصاً أو رقم هاتف في صورة صغيرة. تقرؤه كاميرا الهاتف.",
    kinds: { whatsapp: "WhatsApp", wifi: "Wi-Fi", vcard: "بطاقة عمل", email: "بريد إلكتروني", phone: "هاتف", url: "رابط", text: "نص", qr: "QR" },
    erase: "يزيل Nibras Erase خلفية الصورة. اختر الصورة والجودة، ثم أزل الخلفية، وصحّح الحافة بالفرشاة عند الحاجة، ثم نزّل PNG أو JPG أو WebP. لا تُرفع الصورة إلى خادم، كل شيء يتم في المتصفح. الصفحة: https://www.nibrascode.com/ar/erase",
  },
  ru: {
    post: "Принимаются только POST-запросы.",
    empty: "Сообщение не может быть пустым.",
    limit: "Лимит вопросов на сегодня исчерпан. Напишите завтра. На вопросы с готовыми ответами отвечаем и сегодня.",
    noAnswer: "Сейчас ответа нет. Попробуйте ещё раз чуть позже.",
    server: "Ошибка сервера. Попробуйте ещё раз чуть позже.",
    qrReady: "QR-код готов.", qrFor: "QR-код для «{x}» готов.", qrFill: "Заполните поля для {k}.",
    qrAsk: ["Сервис QR открыт. Выберите тип и заполните поля.", "Ссылка, текст, телефон, e-mail, WhatsApp, Wi-Fi, визитка, SMS, место или событие.", "С пустыми полями QR не создаётся. Как только поля заполнены, откроются изображение и страница QR."],
    qrExplain: "QR-код упаковывает ссылку, текст или телефон в маленькое изображение. Его читает камера телефона.",
    kinds: { whatsapp: "WhatsApp", wifi: "Wi-Fi", vcard: "Визитка", email: "E-mail", phone: "Телефон", url: "Ссылка", text: "Текст", qr: "QR" },
    erase: "Nibras Erase убирает фон с фото. Выберите фото и качество, уберите фон, при необходимости поправьте край кистью, затем скачайте PNG, JPG или WebP. Фото не загружается на сервер, всё работает в браузере. Страница: https://www.nibrascode.com/ru/erase",
  },
};

export function msgs(lang) {
  return M[lang] || M.az;
}

// Modelə: cavab dili əmri (sistem sorğusunun sonuna əlavə olunur)
export function langDirective(lang) {
  return ` ƏSAS QAYDA: İstifadəçi ilə söhbətin dili ${LANG_NAMES[lang] || LANG_NAMES.az}. Cavabı yalnız bu dildə yaz (ərəbcə mətn, ayə və ya kod istisna). Reply only in ${LANG_NAMES[lang] || LANG_NAMES.az}.`;
}

export function eraseReply(message, lang) {
  const raw = String(message || "");
  if (!/\berase\b|\bfon\p{L}*|arka\s*plan|arxa\s*fon|background|remove\s*bg|фон|خلفية/iu.test(raw)) return null;
  if (!/sil|remove|delete|erase|çıxar|cixar|kald|убра|удал|удали|أزل|ازل|إزالة|حذف|nibras\s*erase/iu.test(raw)) return null;
  return msgs(lang).erase;
}
