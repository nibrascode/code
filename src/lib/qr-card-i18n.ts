// Shared by /qr and /erase assistant box. The same dictionary is inlined in public/ai*/index.html (QR_CARD_I18N).
export type QrCardCopy = { title: string; sub: string; go: string; dl: string; open: string; missing: string; bad: string; alt: string; kind: Record<string, string>; f: Record<string, string>; ph: Record<string, string> };
export const QR_CARD_I18N: Record<"az" | "en" | "tr" | "ar" | "ru", QrCardCopy> = {
  "az": {
    "title": "QR xidməti",
    "sub": "Növü seç, xanaları doldur. Boş xana ilə hazırlanmır.",
    "go": "QR hazırla",
    "dl": "Yüklə",
    "open": "QR səhifəsində aç",
    "missing": "{f} boş qala bilməz.",
    "bad": "Bu məlumatla QR hazırlanmır.",
    "alt": "QR kod",
    "kind": {
      "url": "Ünvan",
      "text": "Mətn",
      "phone": "Telefon",
      "email": "E-poçt",
      "whatsapp": "WhatsApp",
      "wifi": "Wi-Fi",
      "vcard": "Vizit",
      "sms": "SMS",
      "location": "Yer",
      "event": "Tədbir",
      "app": "Tətbiq"
    },
    "f": {
      "url": "Ünvan",
      "text": "Mətn",
      "phone": "Telefon",
      "email": "E-poçt",
      "subject": "Mövzu",
      "body": "Mətn",
      "message": "Mesaj",
      "ssid": "Şəbəkə adı",
      "password": "Şifrə",
      "first": "Ad",
      "last": "Soyad",
      "org": "Şirkət",
      "lat": "Enlik",
      "lng": "Uzunluq",
      "evTitle": "Ad",
      "start": "Başlanğıc",
      "place": "Yer"
    },
    "ph": {
      "text": "Yazı"
    }
  },
  "en": {
    "title": "QR service",
    "sub": "Pick a type and fill in the fields. It won't be created with empty fields.",
    "go": "Create QR",
    "dl": "Download",
    "open": "Open on the QR page",
    "missing": "{f} cannot be empty.",
    "bad": "A QR code cannot be made from this data.",
    "alt": "QR code",
    "kind": {
      "url": "Link",
      "text": "Text",
      "phone": "Phone",
      "email": "Email",
      "whatsapp": "WhatsApp",
      "wifi": "Wi-Fi",
      "vcard": "Contact",
      "sms": "SMS",
      "location": "Location",
      "event": "Event",
      "app": "App"
    },
    "f": {
      "url": "Link",
      "text": "Text",
      "phone": "Phone",
      "email": "Email",
      "subject": "Subject",
      "body": "Text",
      "message": "Message",
      "ssid": "Network name",
      "password": "Password",
      "first": "First name",
      "last": "Last name",
      "org": "Company",
      "lat": "Latitude",
      "lng": "Longitude",
      "evTitle": "Title",
      "start": "Start",
      "place": "Place"
    },
    "ph": {
      "text": "Your text"
    }
  },
  "tr": {
    "title": "QR hizmeti",
    "sub": "Türü seç, alanları doldur. Boş alanla hazırlanmaz.",
    "go": "QR oluştur",
    "dl": "İndir",
    "open": "QR sayfasında aç",
    "missing": "{f} boş bırakılamaz.",
    "bad": "Bu bilgiyle QR oluşturulamaz.",
    "alt": "QR kod",
    "kind": {
      "url": "Adres",
      "text": "Metin",
      "phone": "Telefon",
      "email": "E-posta",
      "whatsapp": "WhatsApp",
      "wifi": "Wi-Fi",
      "vcard": "Kartvizit",
      "sms": "SMS",
      "location": "Konum",
      "event": "Etkinlik",
      "app": "Uygulama"
    },
    "f": {
      "url": "Adres",
      "text": "Metin",
      "phone": "Telefon",
      "email": "E-posta",
      "subject": "Konu",
      "body": "Metin",
      "message": "Mesaj",
      "ssid": "Ağ adı",
      "password": "Şifre",
      "first": "Ad",
      "last": "Soyad",
      "org": "Şirket",
      "lat": "Enlem",
      "lng": "Boylam",
      "evTitle": "Ad",
      "start": "Başlangıç",
      "place": "Yer"
    },
    "ph": {
      "text": "Yazı"
    }
  },
  "ar": {
    "title": "خدمة QR",
    "sub": "اختر النوع واملأ الحقول. لا يتم الإنشاء بحقول فارغة.",
    "go": "إنشاء QR",
    "dl": "تنزيل",
    "open": "فتح في صفحة QR",
    "missing": "حقل «{f}» لا يمكن أن يكون فارغاً.",
    "bad": "لا يمكن إنشاء QR بهذه البيانات.",
    "alt": "رمز QR",
    "kind": {
      "url": "رابط",
      "text": "نص",
      "phone": "هاتف",
      "email": "بريد إلكتروني",
      "whatsapp": "WhatsApp",
      "wifi": "Wi-Fi",
      "vcard": "بطاقة",
      "sms": "SMS",
      "location": "موقع",
      "event": "فعالية",
      "app": "تطبيق"
    },
    "f": {
      "url": "الرابط",
      "text": "النص",
      "phone": "الهاتف",
      "email": "البريد الإلكتروني",
      "subject": "الموضوع",
      "body": "النص",
      "message": "الرسالة",
      "ssid": "اسم الشبكة",
      "password": "كلمة المرور",
      "first": "الاسم",
      "last": "اللقب",
      "org": "الشركة",
      "lat": "خط العرض",
      "lng": "خط الطول",
      "evTitle": "العنوان",
      "start": "البداية",
      "place": "المكان"
    },
    "ph": {
      "text": "اكتب النص"
    }
  },
  "ru": {
    "title": "Сервис QR",
    "sub": "Выберите тип и заполните поля. С пустыми полями QR не создаётся.",
    "go": "Создать QR",
    "dl": "Скачать",
    "open": "Открыть на странице QR",
    "missing": "Поле «{f}» не может быть пустым.",
    "bad": "Из этих данных QR создать нельзя.",
    "alt": "QR-код",
    "kind": {
      "url": "Ссылка",
      "text": "Текст",
      "phone": "Телефон",
      "email": "E-mail",
      "whatsapp": "WhatsApp",
      "wifi": "Wi-Fi",
      "vcard": "Визитка",
      "sms": "SMS",
      "location": "Место",
      "event": "Событие",
      "app": "Приложение"
    },
    "f": {
      "url": "Ссылка",
      "text": "Текст",
      "phone": "Телефон",
      "email": "E-mail",
      "subject": "Тема",
      "body": "Текст",
      "message": "Сообщение",
      "ssid": "Имя сети",
      "password": "Пароль",
      "first": "Имя",
      "last": "Фамилия",
      "org": "Компания",
      "lat": "Широта",
      "lng": "Долгота",
      "evTitle": "Название",
      "start": "Начало",
      "place": "Место"
    },
    "ph": {
      "text": "Ваш текст"
    }
  }
};
