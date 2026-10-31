import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

type TestId =
  | "colors"
  | "dead"
  | "burn"
  | "touch"
  | "multi"
  | "rear"
  | "front"
  | "torch"
  | "focus"
  | "mic"
  | "ear"
  | "speaker"
  | "vibe"
  | "gyro"
  | "accel"
  | "sensors"
  | "wifi"
  | "bt"
  | "gps"
  | "net"
  | "battery"
  | "charge"
  | "storage"
  | "screen"
  | "device"
  | "force"
  | "stylus"
  | "bio"
  | "nfc"
  | "keys"
  | "light"
  | "magnet"
  | "near";

type Copy = {
  title: string;
  lead: string;
  test: string;
  board: string;
  close: string;
  back: string;
  missing: string;
  denied: string;
  names: Record<TestId, string>;
  colorHint: string;
  deadHint: string;
  burnHint: string;
  touchHint: string;
  touchDone: string;
  multiNow: string;
  multiMax: string;
  camHint: string;
  torchOn: string;
  torchOff: string;
  torchNo: string;
  focusHint: string;
  focusNo: string;
  focusTry: string;
  micHint: string;
  earHint: string;
  speaker: string;
  speakerPlay: string;
  speakerStop: string;
  vibe: string;
  vibeNo: string;
  vibeGo: string;
  motionAsk: string;
  motionNo: string;
  sensorsNone: string;
  sensorsSeen: string;
  wifiHint: string;
  online: string;
  offline: string;
  btYes: string;
  btNo: string;
  btAsk: string;
  gpsAsk: string;
  gpsGot: string;
  gpsNo: string;
  netHint: string;
  batLevel: string;
  batCharge: string;
  batYes: string;
  batNo: string;
  batTemp: string;
  batVolt: string;
  batNoApi: string;
  batNoTemp: string;
  batNoVolt: string;
  batLive: string;
  batCycles: string;
  batEmpty: string;
  batHot: string;
  batDrop: string;
  batStarted: string;
  batStopped: string;
  batNote: string;
  unknown: string;
};

const COPY: Record<Lang, Copy> = {
  az: {
    title: "Telefon",
    lead: "Bu səhifə tutduğun telefonu brauzerdə yoxlayır. Test düyməsi yoxlama lövhəsini açır.",
    test: "Test",
    board: "Tam telefon yoxlaması",
    close: "Bağla",
    back: "Geri",
    missing: "Bu brauzer həmin hissəni səhifəyə vermir.",
    denied: "İcazə verilmədi.",
    names: {
      colors: "Ekran rəngləri",
      dead: "Ölü piksel",
      burn: "Ekran yanıqı",
      touch: "Toxunma",
      multi: "Multi-touch",
      rear: "Arxa kamera",
      front: "Ön kamera",
      torch: "Fənər",
      focus: "Fokus",
      mic: "Mikrofon",
      ear: "Qulaq dinamiki",
      speaker: "Əsas dinamik",
      vibe: "Vibrasiya",
      gyro: "Giroskop",
      accel: "Akselerometr",
      sensors: "Digər sensorlar",
      wifi: "Wi-Fi",
      bt: "Bluetooth",
      gps: "GPS",
      net: "Şəbəkə",
      battery: "Batareya",
      charge: "Şarj",
      storage: "Yaddaş",
      screen: "Ekran ölçüsü",
      device: "Prosessor",
      force: "Basma gücü",
      stylus: "Qələm",
      bio: "Barmaq izi",
      nfc: "NFC",
      keys: "Düymələr",
      light: "İşıq",
      magnet: "Maqnit",
      near: "Yaxınlıq",
    },
    colorHint: "Ekrana toxun, rəng dəyişsin. Ləkə və ya yanlış rəng görürsənsə, o sahəni yadda saxla.",
    deadHint: "Qara, ağ, qırmızı, yaşıl və göy ekrana bax. Bir nöqtə dəyişmirsə, o, ölü və ya ilişmiş piksel ola bilər. Səhifə pikseli özü görmür.",
    burnHint: "Düz boz ekran. Köhnə şəkil kölgəsi görünürsə, bu, yanıq əlaməti ola bilər. Səhifə bunu ölçmür, sən baxırsan.",
    touchHint: "Barmağı bütün xanalardan keçir. Kənarlar da daxil olmalıdır.",
    touchDone: "Örtülən",
    multiNow: "İndi",
    multiMax: "Ən çox",
    camHint: "Şəkil bu səhifədə qalır, serverə getmir.",
    torchOn: "Fənəri söndür",
    torchOff: "Fənəri yandır",
    torchNo: "Bu telefon və ya brauzer fənəri səhifəyə vermədi.",
    focusHint: "Önizləməyə bax. Fokus siyahısı brauzerin verdiyi rejimlərdir.",
    focusNo: "Fokus rejimi verilməyib.",
    focusTry: "Ortaya fokus",
    micHint: "Danış. Zolaq tərpənirsə, mikrofon səs verir.",
    earHint: "Sayt qulaq dinamikini ayrıca seçə bilmir. Səs media kanalından gedir. Qulağına tutub ayrıca yoxlamaq olmur.",
    speaker: "Qısa səs əsas dinamikdən, media səsi ilə gedir.",
    speakerPlay: "Səs ver",
    speakerStop: "Dayandır",
    vibe: "İki qısa titrəmə getməlidir. iPhone-da sayt çox vaxt titrədə bilmir.",
    vibeNo: "Bu brauzer titrətməni dəstəkləmir.",
    vibeGo: "Titrət",
    motionAsk: "Sensor üçün icazə ver",
    motionNo: "Hərəkət sensoru gəlmədi.",
    sensorsNone: "Əlavə sensor açılmadı. İşıq, maqnit və yaxınlıq çox telefonda səhifəyə bağlanmır.",
    sensorsSeen: "Açılan sensorlar",
    wifiHint: "Brauzer çox vaxt yalnız bağlantı növünü deyir, Wi-Fi düyməsinin açıq olub-olmadığını yox.",
    online: "Şəbəkə var",
    offline: "Şəbəkə yoxdur",
    btYes: "Bluetooth bu brauzerdə soruşula bilər.",
    btNo: "Bluetooth səhifəyə açıq deyil.",
    btAsk: "Yoxla",
    gpsAsk: "Mövqeyi soruş",
    gpsGot: "Mövqe gəldi. Dəqiqlik",
    gpsNo: "Mövqe gəlmədi.",
    netHint: "Bu, radio adı deyil. Brauzerin gördüyü bağlantıdır.",
    batLevel: "Faiz",
    batCharge: "Şarj",
    batYes: "şarjdadır",
    batNo: "şarjda deyil",
    batTemp: "Temperatur",
    batVolt: "Gərginlik",
    batNoApi: "Bu brauzer batareya məlumatı vermir. Faiz, temperatur və gərginlik burada görünməyəcək.",
    batNoTemp: "Sistem temperatur vermir. Qızma xəbərdarlığı verilə bilmir.",
    batNoVolt: "Sistem gərginlik vermir.",
    batLive: "Bu açılışda dəyişiklik",
    batCycles: "Şarj dövrü",
    batEmpty: "Hələ qeyd yoxdur. Səhifəni şarj zamanı açıq saxla.",
    batHot: "Temperatur yüksək görünür. Bu, laboratoriya ölçümü deyil.",
    batDrop: "Şarjda olmayan halda faiz qısa vaxtda azalıb.",
    batStarted: "Şarj başladı",
    batStopped: "Şarj dayandı",
    batNote:
      "Vacib: bütün telefonlar batareyanın real tutumunu və sağlamlığını proqramlara göstərmir. Göstərici varsa belə, onu dəqiq laboratoriya ölçümü kimi qəbul etmək olmaz.",
    unknown: "məlum deyil",
  },
  en: {
    title: "Phone",
    lead: "This page checks the phone in your hand, inside the browser. The Test button opens the check board.",
    test: "Test",
    board: "Full phone check",
    close: "Close",
    back: "Back",
    missing: "This browser does not give that part to the page.",
    denied: "Permission was denied.",
    names: {
      colors: "Screen colors",
      dead: "Dead pixel",
      burn: "Screen burn",
      touch: "Touch",
      multi: "Multi-touch",
      rear: "Rear camera",
      front: "Front camera",
      torch: "Flashlight",
      focus: "Focus",
      mic: "Microphone",
      ear: "Earpiece",
      speaker: "Main speaker",
      vibe: "Vibration",
      gyro: "Gyroscope",
      accel: "Accelerometer",
      sensors: "Other sensors",
      wifi: "Wi-Fi",
      bt: "Bluetooth",
      gps: "GPS",
      net: "Network",
      battery: "Battery",
      charge: "Charging",
      storage: "Storage",
      screen: "Screen size",
      device: "Processor",
      force: "Press force",
      stylus: "Stylus",
      bio: "Fingerprint",
      nfc: "NFC",
      keys: "Buttons",
      light: "Light",
      magnet: "Magnet",
      near: "Proximity",
    },
    colorHint: "Tap the screen to change color. If a patch stays wrong, remember that spot.",
    deadHint: "Look at black, white, red, green and blue. A dot that never changes may be a dead or stuck pixel. The page cannot see pixels itself.",
    burnHint: "A flat gray screen. A ghost of an old image can be burn-in. The page does not measure it. You look.",
    touchHint: "Drag a finger across every cell, including the edges.",
    touchDone: "Covered",
    multiNow: "Now",
    multiMax: "Most",
    camHint: "The picture stays on this page. It is not uploaded.",
    torchOn: "Turn flashlight off",
    torchOff: "Turn flashlight on",
    torchNo: "This phone or browser did not give the flashlight to the page.",
    focusHint: "Watch the preview. The focus list is only what the browser reported.",
    focusNo: "No focus mode was given.",
    focusTry: "Focus center",
    micHint: "Speak. If the bar moves, the microphone is sending sound.",
    earHint: "The site cannot select the earpiece. Sound goes through the media channel. It cannot be checked at the ear separately.",
    speaker: "A short tone plays from the main media speaker.",
    speakerPlay: "Play",
    speakerStop: "Stop",
    vibe: "Two short pulses should fire. On an iPhone the page often cannot vibrate.",
    vibeNo: "This browser does not support vibration.",
    vibeGo: "Vibrate",
    motionAsk: "Allow the sensor",
    motionNo: "No motion sensor arrived.",
    sensorsNone: "No extra sensor opened. Light, magnet and proximity are closed to pages on most phones.",
    sensorsSeen: "Sensors that opened",
    wifiHint: "The browser usually reports the connection type, not whether the Wi-Fi switch is on.",
    online: "Network is up",
    offline: "Network is down",
    btYes: "Bluetooth can be asked from this browser.",
    btNo: "Bluetooth is not open to the page.",
    btAsk: "Check",
    gpsAsk: "Ask for location",
    gpsGot: "Location arrived. Accuracy",
    gpsNo: "Location did not arrive.",
    netHint: "This is not a radio name. It is the connection the browser sees.",
    batLevel: "Level",
    batCharge: "Charging",
    batYes: "charging",
    batNo: "not charging",
    batTemp: "Temperature",
    batVolt: "Voltage",
    batNoApi: "This browser does not give battery data. Level, temperature and voltage will not appear here.",
    batNoTemp: "The system gave no temperature. An overheating warning cannot be made.",
    batNoVolt: "The system gave no voltage.",
    batLive: "Changes this visit",
    batCycles: "Charge cycles",
    batEmpty: "No record yet. Keep the page open while charging.",
    batHot: "Temperature looks high. This is not a lab measurement.",
    batDrop: "The level fell quickly while not charging.",
    batStarted: "Charging started",
    batStopped: "Charging stopped",
    batNote:
      "Important: not every phone shows real battery capacity or health to apps. Even if a figure appears, it is not a precise laboratory measurement.",
    unknown: "unknown",
  },
  tr: {
    title: "Telefon",
    lead: "Bu sayfa elindeki telefonu tarayıcıda yoklar. Test düğmesi yoklama tahtasını açar.",
    test: "Test",
    board: "Tam telefon yoklaması",
    close: "Kapat",
    back: "Geri",
    missing: "Bu tarayıcı o parçayı sayfaya vermiyor.",
    denied: "İzin verilmedi.",
    names: {
      colors: "Ekran renkleri",
      dead: "Ölü piksel",
      burn: "Ekran yanığı",
      touch: "Dokunma",
      multi: "Multi-touch",
      rear: "Arka kamera",
      front: "Ön kamera",
      torch: "Fener",
      focus: "Odak",
      mic: "Mikrofon",
      ear: "Kulaklık hoparlörü",
      speaker: "Ana hoparlör",
      vibe: "Titreşim",
      gyro: "Jiroskop",
      accel: "İvmeölçer",
      sensors: "Diğer sensörler",
      wifi: "Wi-Fi",
      bt: "Bluetooth",
      gps: "GPS",
      net: "Ağ",
      battery: "Pil",
      charge: "Şarj",
      storage: "Depolama",
      screen: "Ekran ölçüsü",
      device: "İşlemci",
      force: "Basış gücü",
      stylus: "Kalem",
      bio: "Parmak izi",
      nfc: "NFC",
      keys: "Tuşlar",
      light: "Işık",
      magnet: "Mıknatıs",
      near: "Yakınlık",
    },
    colorHint: "Ekrana dokun, renk değişsin. Yanlış kalan leke varsa o yeri aklında tut.",
    deadHint: "Siyah, beyaz, kırmızı, yeşil ve maviye bak. Değişmeyen nokta ölü veya takılı piksel olabilir. Sayfa pikseli kendisi görmez.",
    burnHint: "Düz gri ekran. Eski görüntünün gölgesi yanık belirtisi olabilir. Sayfa ölçmez, sen bakarsın.",
    touchHint: "Parmağını kenarlar dahil bütün kutulardan geçir.",
    touchDone: "Kapanan",
    multiNow: "Şimdi",
    multiMax: "En çok",
    camHint: "Görüntü bu sayfada kalır, sunucuya gitmez.",
    torchOn: "Feneri kapat",
    torchOff: "Feneri aç",
    torchNo: "Bu telefon veya tarayıcı feneri sayfaya vermedi.",
    focusHint: "Önizlemeye bak. Odak listesi tarayıcının verdiği kiplerdir.",
    focusNo: "Odak kipi verilmedi.",
    focusTry: "Ortaya odak",
    micHint: "Konuş. Çubuk kıpırdarsa mikrofon ses veriyor.",
    earHint: "Site kulaklık hoparlörünü ayrı seçemez. Ses medya kanalından gelir. Kulağa tutup ayrıca bakılamaz.",
    speaker: "Kısa ses ana hoparlörden, medya sesiyle gelir.",
    speakerPlay: "Ses ver",
    speakerStop: "Durdur",
    vibe: "İki kısa titreşim gitmeli. iPhone'da sayfa çoğu zaman titretmez.",
    vibeNo: "Bu tarayıcı titreşimi desteklemiyor.",
    vibeGo: "Titret",
    motionAsk: "Sensöre izin ver",
    motionNo: "Hareket sensörü gelmedi.",
    sensorsNone: "Ek sensör açılmadı. Işık, mıknatıs ve yakınlık çoğu telefonda sayfaya kapalıdır.",
    sensorsSeen: "Açılan sensörler",
    wifiHint: "Tarayıcı çoğu zaman yalnızca bağlantı türünü söyler, Wi-Fi anahtarını değil.",
    online: "Ağ var",
    offline: "Ağ yok",
    btYes: "Bluetooth bu tarayıcıda sorulabilir.",
    btNo: "Bluetooth sayfaya açık değil.",
    btAsk: "Bak",
    gpsAsk: "Konum sor",
    gpsGot: "Konum geldi. Doğruluk",
    gpsNo: "Konum gelmedi.",
    netHint: "Bu radyo adı değil. Tarayıcının gördüğü bağlantıdır.",
    batLevel: "Yüzde",
    batCharge: "Şarj",
    batYes: "şarjda",
    batNo: "şarjda değil",
    batTemp: "Sıcaklık",
    batVolt: "Gerilim",
    batNoApi: "Bu tarayıcı pil bilgisi vermiyor. Yüzde, sıcaklık ve gerilim burada görünmez.",
    batNoTemp: "Sistem sıcaklık vermiyor. Aşırı ısınma uyarısı verilemez.",
    batNoVolt: "Sistem gerilim vermiyor.",
    batLive: "Bu açılıştaki değişim",
    batCycles: "Şarj döngüsü",
    batEmpty: "Henüz kayıt yok. Sayfayı şarjdayken açık tut.",
    batHot: "Sıcaklık yüksek görünüyor. Bu laboratuvar ölçümü değil.",
    batDrop: "Şarjda değilken yüzde kısa sürede düştü.",
    batStarted: "Şarj başladı",
    batStopped: "Şarj durdu",
    batNote:
      "Önemli: her telefon pilin gerçek kapasitesini ve sağlığını uygulamalara göstermez. Bir sayı görünse bile onu kesin laboratuvar ölçümü sayma.",
    unknown: "bilinmiyor",
  },
  ar: {
    title: "الهاتف",
    lead: "تفحص هذه الصفحة الهاتف الذي في يدك داخل المتصفح. زر الاختبار يفتح لوحة الفحص.",
    test: "اختبار",
    board: "فحص كامل للهاتف",
    close: "إغلاق",
    back: "رجوع",
    missing: "هذا المتصفح لا يعطي هذا الجزء للصفحة.",
    denied: "رُفض الإذن.",
    names: {
      colors: "ألوان الشاشة",
      dead: "بكسل ميت",
      burn: "احتراق الشاشة",
      touch: "اللمس",
      multi: "لمس متعدد",
      rear: "الكاميرا الخلفية",
      front: "الكاميرا الأمامية",
      torch: "الفلاش",
      focus: "التركيز",
      mic: "الميكروفون",
      ear: "سماعة الأذن",
      speaker: "السماعة الرئيسية",
      vibe: "الاهتزاز",
      gyro: "الجيروسكوب",
      accel: "مقياس التسارع",
      sensors: "حساسات أخرى",
      wifi: "واي فاي",
      bt: "بلوتوث",
      gps: "تحديد الموقع",
      net: "الشبكة",
      battery: "البطارية",
      charge: "الشحن",
      storage: "التخزين",
      screen: "مقاس الشاشة",
      device: "المعالج",
      force: "قوة الضغط",
      stylus: "القلم",
      bio: "البصمة",
      nfc: "NFC",
      keys: "الأزرار",
      light: "الضوء",
      magnet: "المغناطيس",
      near: "القرب",
    },
    colorHint: "المس الشاشة ليتغير اللون. إذا بقيت بقعة خاطئة فاحفظ مكانها.",
    deadHint: "انظر إلى الأسود والأبيض والأحمر والأخضر والأزرق. نقطة لا تتغير قد تكون بكسلًا ميتًا. الصفحة لا ترى البكسل بنفسها.",
    burnHint: "شاشة رمادية مسطحة. ظل صورة قديمة قد يكون احتراقًا. الصفحة لا تقيسه، أنت تنظر.",
    touchHint: "مرّر الإصبع على كل الخانات، بما فيها الحواف.",
    touchDone: "المغطى",
    multiNow: "الآن",
    multiMax: "الأكثر",
    camHint: "تبقى الصورة في هذه الصفحة ولا تُرفع.",
    torchOn: "أطفئ الفلاش",
    torchOff: "شغّل الفلاش",
    torchNo: "هذا الهاتف أو المتصفح لم يعطِ الفلاش للصفحة.",
    focusHint: "انظر إلى المعاينة. قائمة التركيز هي ما أبلغ عنه المتصفح فقط.",
    focusNo: "لم يُعطَ وضع التركيز.",
    focusTry: "ركّز على الوسط",
    micHint: "تكلم. إذا تحرك الشريط فالميكروفون يرسل صوتًا.",
    earHint: "لا يستطيع الموقع اختيار سماعة الأذن. يخرج الصوت من قناة الوسائط ولا يمكن فحص الأذن وحدها.",
    speaker: "نغمة قصيرة من السماعة الرئيسية عبر صوت الوسائط.",
    speakerPlay: "تشغيل",
    speakerStop: "إيقاف",
    vibe: "يجب أن تأتي نبضتان قصيرتان. في آيفون غالبًا لا تهتز الصفحة.",
    vibeNo: "هذا المتصفح لا يدعم الاهتزاز.",
    vibeGo: "اهتز",
    motionAsk: "اسمح للحساس",
    motionNo: "لم يصل حساس الحركة.",
    sensorsNone: "لم يُفتح حساس إضافي. الضوء والمغناطيس والقرب مغلقان أمام الصفحة في أغلب الهواتف.",
    sensorsSeen: "الحساسات التي فُتحت",
    wifiHint: "يخبر المتصفح غالبًا بنوع الاتصال لا بحالة مفتاح الواي فاي.",
    online: "الشبكة تعمل",
    offline: "لا شبكة",
    btYes: "يمكن سؤال البلوتوث من هذا المتصفح.",
    btNo: "البلوتوث غير متاح للصفحة.",
    btAsk: "افحص",
    gpsAsk: "اطلب الموقع",
    gpsGot: "وصل الموقع. الدقة",
    gpsNo: "لم يصل الموقع.",
    netHint: "هذا ليس اسم الراديو. إنه الاتصال الذي يراه المتصفح.",
    batLevel: "النسبة",
    batCharge: "الشحن",
    batYes: "يشحن",
    batNo: "لا يشحن",
    batTemp: "الحرارة",
    batVolt: "الجهد",
    batNoApi: "هذا المتصفح لا يعطي بيانات البطارية. لن تظهر النسبة ولا الحرارة ولا الجهد.",
    batNoTemp: "النظام لم يعطِ حرارة. لا يمكن تحذير السخونة الزائدة.",
    batNoVolt: "النظام لم يعطِ جهدًا.",
    batLive: "التغير في هذه الزيارة",
    batCycles: "دورات الشحن",
    batEmpty: "لا سجل بعد. أبقِ الصفحة مفتوحة أثناء الشحن.",
    batHot: "تبدو الحرارة مرتفعة. هذا ليس قياس مختبر.",
    batDrop: "هبطت النسبة بسرعة دون شحن.",
    batStarted: "بدأ الشحن",
    batStopped: "توقف الشحن",
    batNote:
      "مهم: ليست كل الهواتف تُظهر سعة البطارية الحقيقية أو صحتها للتطبيقات. حتى إن ظهر رقم فلا يُعد قياسًا مخبريًا دقيقًا.",
    unknown: "غير معروف",
  },
  ru: {
    title: "Телефон",
    lead: "Эта страница проверяет телефон в руке, внутри браузера. Кнопка «Тест» открывает доску проверки.",
    test: "Тест",
    board: "Полная проверка телефона",
    close: "Закрыть",
    back: "Назад",
    missing: "Этот браузер не отдаёт эту часть странице.",
    denied: "Разрешение не дано.",
    names: {
      colors: "Цвета экрана",
      dead: "Битый пиксель",
      burn: "Выгорание",
      touch: "Касание",
      multi: "Мультитач",
      rear: "Задняя камера",
      front: "Передняя камера",
      torch: "Фонарик",
      focus: "Фокус",
      mic: "Микрофон",
      ear: "Разговорный динамик",
      speaker: "Основной динамик",
      vibe: "Вибрация",
      gyro: "Гироскоп",
      accel: "Акселерометр",
      sensors: "Другие датчики",
      wifi: "Wi-Fi",
      bt: "Bluetooth",
      gps: "GPS",
      net: "Сеть",
      battery: "Батарея",
      charge: "Зарядка",
      storage: "Память",
      screen: "Размер экрана",
      device: "Процессор",
      force: "Сила нажатия",
      stylus: "Стилус",
      bio: "Отпечаток",
      nfc: "NFC",
      keys: "Кнопки",
      light: "Свет",
      magnet: "Магнит",
      near: "Приближение",
    },
    colorHint: "Нажмите на экран, чтобы сменить цвет. Если пятно остаётся чужим, запомните место.",
    deadHint: "Смотрите чёрный, белый, красный, зелёный и синий. Точка, которая не меняется, может быть битым пикселем. Страница сама пиксели не видит.",
    burnHint: "Ровный серый экран. Тень старой картинки может быть выгоранием. Страница это не измеряет. Смотрите вы.",
    touchHint: "Проведите пальцем по всем клеткам, включая края.",
    touchDone: "Закрыто",
    multiNow: "Сейчас",
    multiMax: "Максимум",
    camHint: "Картинка остаётся на странице и не загружается.",
    torchOn: "Выключить фонарик",
    torchOff: "Включить фонарик",
    torchNo: "Этот телефон или браузер не отдал фонарик странице.",
    focusHint: "Смотрите превью. Список фокуса — только то, что сообщил браузер.",
    focusNo: "Режим фокуса не дан.",
    focusTry: "Фокус в центр",
    micHint: "Говорите. Если полоска двигается, микрофон отдаёт звук.",
    earHint: "Сайт не может выбрать разговорный динамик. Звук идёт по медиаканалу. Отдельно у уха проверить нельзя.",
    speaker: "Короткий звук идёт из основного динамика, громкостью медиа.",
    speakerPlay: "Звук",
    speakerStop: "Стоп",
    vibe: "Должны прийти два коротких импульса. На iPhone страница часто не вибрирует.",
    vibeNo: "Этот браузер не поддерживает вибрацию.",
    vibeGo: "Вибрация",
    motionAsk: "Разрешить датчик",
    motionNo: "Датчик движения не пришёл.",
    sensorsNone: "Дополнительный датчик не открылся. Свет, магнит и приближение на большинстве телефонов закрыты для страницы.",
    sensorsSeen: "Открывшиеся датчики",
    wifiHint: "Браузер обычно сообщает тип соединения, а не положение переключателя Wi-Fi.",
    online: "Сеть есть",
    offline: "Сети нет",
    btYes: "Bluetooth можно спросить из этого браузера.",
    btNo: "Bluetooth странице недоступен.",
    btAsk: "Проверить",
    gpsAsk: "Запросить место",
    gpsGot: "Место пришло. Точность",
    gpsNo: "Место не пришло.",
    netHint: "Это не имя радио. Это соединение, которое видит браузер.",
    batLevel: "Процент",
    batCharge: "Зарядка",
    batYes: "заряжается",
    batNo: "не заряжается",
    batTemp: "Температура",
    batVolt: "Напряжение",
    batNoApi: "Этот браузер не даёт данные батареи. Процент, температура и напряжение здесь не появятся.",
    batNoTemp: "Система не дала температуру. Предупреждение о перегреве сделать нельзя.",
    batNoVolt: "Система не дала напряжение.",
    batLive: "Изменения за этот визит",
    batCycles: "Циклы зарядки",
    batEmpty: "Записей ещё нет. Держите страницу открытой во время зарядки.",
    batHot: "Температура выглядит высокой. Это не лабораторное измерение.",
    batDrop: "Процент быстро упал без зарядки.",
    batStarted: "Зарядка началась",
    batStopped: "Зарядка остановилась",
    batNote:
      "Важно: не каждый телефон показывает приложениям реальную ёмкость и здоровье батареи. Даже если цифра есть, это не точное лабораторное измерение.",
    unknown: "неизвестно",
  },
};

const ORDER: TestId[] = [
  "colors",
  "dead",
  "burn",
  "touch",
  "multi",
  "rear",
  "front",
  "torch",
  "focus",
  "mic",
  "ear",
  "speaker",
  "vibe",
  "gyro",
  "accel",
  "sensors",
  "wifi",
  "bt",
  "gps",
  "net",
  "battery",
  "charge",
  "storage",
  "screen",
  "device",
  "force",
  "stylus",
  "bio",
  "nfc",
  "keys",
  "light",
  "magnet",
  "near",
];

const COLORS = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#808080", "#ffff00", "#00ffff", "#ff00ff"];

const STORE_KEY = "nibras-telefon-battery";

type Sample = { t: number; level: number; charging: boolean; temp: number | null; voltage: number | null };
type Cycle = { t: number; kind: "started" | "stopped"; level: number };
type Store = { samples: Sample[]; cycles: Cycle[] };

function emptyStore(): Store {
  return { samples: [], cycles: [] };
}

function readStore(): Store {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "");
    if (!raw || !Array.isArray(raw.samples) || !Array.isArray(raw.cycles)) return emptyStore();
    return { samples: raw.samples.slice(-80), cycles: raw.cycles.slice(-24) };
  } catch {
    return emptyStore();
  }
}

function writeStore(store: Store) {
  localStorage.setItem(STORE_KEY, JSON.stringify({ samples: store.samples.slice(-80), cycles: store.cycles.slice(-24) }));
}

type BatteryLike = EventTarget & {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
};

function extraNumber(battery: BatteryLike, key: string): number | null {
  const value = (battery as unknown as Record<string, unknown>)[key];
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function asCelsius(value: number | null): number | null {
  if (value == null) return null;
  if (value > 100) return value / 10;
  return value;
}

function stopStream(stream: MediaStream | null) {
  stream?.getTracks().forEach((track) => track.stop());
}

function PhoneIcon({ id }: { id: TestId }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (id === "colors" || id === "dead" || id === "burn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" {...common} />
        <path d="M4 15h16" {...common} />
      </svg>
    );
  }
  if (id === "touch" || id === "multi") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11V6.5a1.5 1.5 0 0 1 3 0V12" {...common} />
        <path d="M12 11.5V8a1.5 1.5 0 0 1 3 0v5" {...common} />
        <path d="M9 12.5 7.2 10.8a1.4 1.4 0 0 0-2 .1L8 16.5A5 5 0 0 0 13 19h2.2A3.8 3.8 0 0 0 19 15.2V11a1.5 1.5 0 0 0-3 0" {...common} />
      </svg>
    );
  }
  if (id === "rear" || id === "front" || id === "focus" || id === "torch") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 6h2l1.2-1.5h3.6L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" {...common} />
        <circle cx="12" cy="13" r="3" {...common} />
      </svg>
    );
  }
  if (id === "mic") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="9" y="4" width="6" height="10" rx="3" {...common} />
        <path d="M7 11a5 5 0 0 0 10 0M12 16v3" {...common} />
      </svg>
    );
  }
  if (id === "speaker" || id === "ear") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 10v4h3l5 4V6L8 10H5z" {...common} />
        <path d="M16 9.5a3.5 3.5 0 0 1 0 5" {...common} />
      </svg>
    );
  }
  if (id === "battery") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="8" width="16" height="8" rx="1.5" {...common} />
        <path d="M19 11h2v2h-2" {...common} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" {...common} />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" {...common} />
    </svg>
  );
}

function ColorTest({ copy, kind, onBack }: { copy: Copy; kind: "colors" | "dead" | "burn"; onBack: () => void }) {
  const [step, setStep] = useState(kind === "burn" ? 5 : 0);
  const hint = kind === "dead" ? copy.deadHint : kind === "burn" ? copy.burnHint : copy.colorHint;
  const background = kind === "burn" ? "#808080" : COLORS[step % COLORS.length];
  const ink = background === "#000000" || background === "#0000ff" || background === "#ff0000" ? "#fff" : "#111";
  return (
    <div className="phone-fill" style={{ background, color: ink }} onClick={() => setStep((value) => value + 1)}>
      <button type="button" className="phone-back" onClick={(event) => { event.stopPropagation(); onBack(); }}>
        {copy.back}
      </button>
      <p>{hint}</p>
    </div>
  );
}

function TouchTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const cols = 10;
  const rows = 16;
  const [seen, setSeen] = useState<boolean[]>(() => Array(cols * rows).fill(false));
  function mark(event: PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = Math.min(cols - 1, Math.max(0, Math.floor(((event.clientX - box.left) / box.width) * cols)));
    const y = Math.min(rows - 1, Math.max(0, Math.floor(((event.clientY - box.top) / box.height) * rows)));
    const index = y * cols + x;
    setSeen((current) => {
      if (current[index]) return current;
      const next = current.slice();
      next[index] = true;
      return next;
    });
  }
  const covered = seen.filter(Boolean).length;
  return (
    <div
      className="phone-fill phone-touch"
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        mark(event);
      }}
      onPointerMove={(event) => {
        if (event.buttons || event.pointerType === "touch") mark(event);
      }}
    >
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <p className="phone-float">{copy.touchHint} {copy.touchDone}: {Math.round((covered / seen.length) * 100)}%</p>
      <div className="phone-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {seen.map((on, index) => <i key={index} className={on ? "is-on" : ""} />)}
      </div>
    </div>
  );
}

function MultiTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const { lang } = useI18n();
  const [now, setNow] = useState(0);
  const [max, setMax] = useState(0);
  const ids = useRef(new Set<number>());
  function sync(event: PointerEvent<HTMLDivElement>, add: boolean) {
    if (add) ids.current.add(event.pointerId);
    else ids.current.delete(event.pointerId);
    const count = ids.current.size;
    setNow(count);
    setMax((value) => Math.max(value, count));
  }
  return (
    <div
      className="phone-fill phone-multi"
      onPointerDown={(event) => sync(event, true)}
      onPointerUp={(event) => sync(event, false)}
      onPointerCancel={(event) => sync(event, false)}
    >
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <strong>{copy.multiNow}: {now}</strong>
      <span>{copy.multiMax}: {max}</span>
      <span>{capLabel[lang]}: {typeof navigator === "undefined" ? "—" : navigator.maxTouchPoints || "—"}</span>
    </div>
  );
}

function CameraTest({ copy, facing, torch, focus, onBack }: { copy: Copy; facing: "user" | "environment"; torch?: boolean; focus?: boolean; onBack: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState("");
  const [lit, setLit] = useState(false);
  const [canTorch, setCanTorch] = useState(false);
  const [modes, setModes] = useState("");
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    let live = true;
    const video = videoRef.current;
    const devices = navigator.mediaDevices;
    if (!devices) {
      setError(copy.missing);
      return;
    }
    devices
      .getUserMedia({ video: { facingMode: facing }, audio: false })
      .then((stream) => {
        if (!live) {
          stopStream(stream);
          return;
        }
        streamRef.current = stream;
        if (video) {
          video.srcObject = stream;
          void video.play().catch(() => undefined);
        }
        const track = stream.getVideoTracks()[0];
        const caps = track?.getCapabilities?.() as { torch?: boolean; focusMode?: string[] } | undefined;
        setCanTorch(Boolean(caps?.torch));
        setModes(caps?.focusMode?.join(", ") || "");
      })
      .catch(() => {
        if (live) setError(copy.denied);
      });
    return () => {
      live = false;
      stopStream(streamRef.current);
      streamRef.current = null;
    };
  }, [facing, copy.denied, copy.missing]);

  async function toggleTorch() {
    const track = streamRef.current?.getVideoTracks()[0];
    if (!track || !canTorch) return;
    const next = !lit;
    try {
      await track.applyConstraints({ advanced: [{ torch: next }] } as MediaTrackConstraints);
      setLit(next);
    } catch {
      setCanTorch(false);
    }
  }

  async function focusCenter() {
    const track = streamRef.current?.getVideoTracks()[0];
    if (!track) return;
    try {
      await track.applyConstraints({ advanced: [{ pointsOfInterest: [{ x: 0.5, y: 0.5 }] }] } as MediaTrackConstraints);
    } catch {
      setModes("");
    }
  }

  return (
    <div className="phone-fill phone-cam">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <video ref={videoRef} playsInline muted />
      <div className="phone-cam-note">
        <p>{error || copy.camHint}</p>
        {torch ? (
          canTorch ? <button type="button" onClick={() => void toggleTorch()}>{lit ? copy.torchOn : copy.torchOff}</button> : <p>{copy.torchNo}</p>
        ) : null}
        {focus ? (
          <>
            <p>{modes ? `${copy.focusHint} ${modes}` : copy.focusNo}</p>
            {modes ? <button type="button" onClick={() => void focusCenter()}>{copy.focusTry}</button> : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

function MicTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const [level, setLevel] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    let live = true;
    let stream: MediaStream | null = null;
    let audio: AudioContext | null = null;
    let frame = 0;
    const devices = navigator.mediaDevices;
    if (!devices) {
      setError(copy.missing);
      return;
    }
    devices
      .getUserMedia({ audio: true, video: false })
      .then((next) => {
        if (!live) {
          stopStream(next);
          return;
        }
        stream = next;
        audio = new AudioContext();
        const source = audio.createMediaStreamSource(next);
        const analyser = audio.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        const data = new Uint8Array(analyser.fftSize);
        const tick = () => {
          if (!live) return;
          analyser.getByteTimeDomainData(data);
          let sum = 0;
          for (const value of data) {
            const centered = (value - 128) / 128;
            sum += centered * centered;
          }
          setLevel(Math.min(100, Math.round(Math.sqrt(sum / data.length) * 220)));
          frame = requestAnimationFrame(tick);
        };
        tick();
      })
      .catch(() => {
        if (live) setError(copy.denied);
      });
    return () => {
      live = false;
      cancelAnimationFrame(frame);
      stopStream(stream);
      void audio?.close();
    };
  }, [copy.denied, copy.missing]);
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.mic}</h2>
      <p>{error || copy.micHint}</p>
      <div className="phone-meter"><span style={{ width: `${level}%` }} /></div>
    </div>
  );
}

function SpeakerTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const audio = useRef<AudioContext | null>(null);
  const [on, setOn] = useState(false);
  function stop() {
    void audio.current?.close();
    audio.current = null;
    setOn(false);
  }
  function play() {
    stop();
    const ctx = new AudioContext();
    audio.current = ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 440;
    gain.gain.value = 0.08;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setOn(true);
  }
  useEffect(() => () => void audio.current?.close(), []);
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.speaker}</h2>
      <p>{copy.speaker}</p>
      <button type="button" className="phone-action" onClick={on ? stop : play}>{on ? copy.speakerStop : copy.speakerPlay}</button>
    </div>
  );
}

function EarTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.ear}</h2>
      <p>{copy.earHint}</p>
    </div>
  );
}

function VibeTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const ok = typeof navigator !== "undefined" && "vibrate" in navigator;
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.vibe}</h2>
      <p>{ok ? copy.vibe : copy.vibeNo}</p>
      {ok ? <button type="button" className="phone-action" onClick={() => navigator.vibrate([180, 90, 180])}>{copy.vibeGo}</button> : null}
    </div>
  );
}

function MotionTest({ copy, kind, onBack }: { copy: Copy; kind: "gyro" | "accel"; onBack: () => void }) {
  const [text, setText] = useState("");
  const [needAsk, setNeedAsk] = useState(false);
  useEffect(() => {
    const motion = DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> };
    const orient = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
    if (motion.requestPermission || orient.requestPermission) setNeedAsk(true);
  }, []);
  useEffect(() => {
    if (needAsk) return;
    function onOrient(event: DeviceOrientationEvent) {
      if (kind !== "gyro") return;
      setText(`α ${event.alpha?.toFixed(0) ?? "—"}  β ${event.beta?.toFixed(0) ?? "—"}  γ ${event.gamma?.toFixed(0) ?? "—"}`);
    }
    function onMotion(event: DeviceMotionEvent) {
      if (kind !== "accel") return;
      const acc = event.accelerationIncludingGravity;
      if (!acc) return;
      setText(`x ${acc.x?.toFixed(2) ?? "—"}  y ${acc.y?.toFixed(2) ?? "—"}  z ${acc.z?.toFixed(2) ?? "—"}`);
    }
    window.addEventListener("deviceorientation", onOrient);
    window.addEventListener("devicemotion", onMotion);
    const timer = window.setTimeout(() => setText((value) => value || copy.motionNo), 2500);
    return () => {
      window.removeEventListener("deviceorientation", onOrient);
      window.removeEventListener("devicemotion", onMotion);
      window.clearTimeout(timer);
    };
  }, [kind, needAsk, copy.motionNo]);
  async function ask() {
    const motion = DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> };
    const orient = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
    try {
      await motion.requestPermission?.();
      await orient.requestPermission?.();
      setNeedAsk(false);
    } catch {
      setText(copy.denied);
    }
  }
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names[kind]}</h2>
      {needAsk ? <button type="button" className="phone-action" onClick={() => void ask()}>{copy.motionAsk}</button> : <p className="phone-readout">{text || "…"}</p>}
    </div>
  );
}

function SensorTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const [found, setFound] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let live = true;
    const opened: string[] = [];
    const sensors: EventTarget[] = [];
    const names = ["Accelerometer", "Gyroscope", "LinearAccelerationSensor", "GravitySensor", "Magnetometer", "AmbientLightSensor", "AbsoluteOrientationSensor"] as const;
    const win = window as unknown as Record<string, new (opts?: { frequency: number }) => EventTarget & { start: () => void }>;
    for (const name of names) {
      const Ctor = win[name];
      if (!Ctor) continue;
      try {
        const sensor = new Ctor({ frequency: 10 });
        sensor.addEventListener("reading", () => {
          if (!opened.includes(name)) {
            opened.push(name);
            if (live) setFound(opened.slice());
          }
        });
        sensor.start();
        sensors.push(sensor);
      } catch {
        /* sensor exists but is blocked */
      }
    }
    const timer = window.setTimeout(() => { if (live) setDone(true); }, 1800);
    return () => {
      live = false;
      window.clearTimeout(timer);
      for (const sensor of sensors) {
        const stop = (sensor as { stop?: () => void }).stop;
        stop?.();
      }
    };
  }, []);
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.sensors}</h2>
      {found.length ? <p>{copy.sensorsSeen}: {found.join(", ")}</p> : <p>{done ? copy.sensorsNone : "…"}</p>}
    </div>
  );
}

function connectionInfo() {
  const nav = navigator as Navigator & { connection?: { type?: string; effectiveType?: string; downlink?: number; rtt?: number; saveData?: boolean } };
  return nav.connection;
}

function WifiTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const link = connectionInfo();
  const type = link?.type || copy.unknown;
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.wifi}</h2>
      <p>{navigator.onLine ? copy.online : copy.offline}</p>
      <p>{copy.wifiHint}</p>
      <p className="phone-readout">{type}{link?.effectiveType ? ` · ${link.effectiveType}` : ""}</p>
    </div>
  );
}

function BtTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const [text, setText] = useState("");
  const bluetooth = (navigator as Navigator & { bluetooth?: { getAvailability?: () => Promise<boolean> } }).bluetooth;
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.bt}</h2>
      {bluetooth?.getAvailability ? (
        <button type="button" className="phone-action" onClick={() => void bluetooth.getAvailability!().then((yes) => setText(yes ? copy.btYes : copy.btNo)).catch(() => setText(copy.missing))}>{copy.btAsk}</button>
      ) : <p>{copy.missing}</p>}
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function GpsTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const [text, setText] = useState("");
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.gps}</h2>
      {"geolocation" in navigator ? (
        <button
          type="button"
          className="phone-action"
          onClick={() => navigator.geolocation.getCurrentPosition(
            (pos) => setText(`${copy.gpsGot}: ${Math.round(pos.coords.accuracy)} m`),
            () => setText(copy.gpsNo),
            { enableHighAccuracy: true, timeout: 12000 },
          )}
        >
          {copy.gpsAsk}
        </button>
      ) : <p>{copy.missing}</p>}
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function NetTest({ copy, onBack }: { copy: Copy; onBack: () => void }) {
  const link = connectionInfo();
  const parts = [
    navigator.onLine ? copy.online : copy.offline,
    link?.effectiveType,
    link?.downlink != null ? `${link.downlink} Mb/s` : "",
    link?.rtt != null ? `${link.rtt} ms` : "",
  ].filter(Boolean);
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.net}</h2>
      <p>{copy.netHint}</p>
      <p className="phone-readout">{parts.join(" · ") || copy.unknown}</p>
    </div>
  );
}

function BatteryTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const storeRef = useRef<Store>(emptyStore());
  const [store, setStore] = useState<Store>(emptyStore);
  const [now, setNow] = useState<Sample | null>(null);
  const [api, setApi] = useState<"wait" | "yes" | "no">("wait");
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const initial = readStore();
    storeRef.current = initial;
    setStore(initial);
    const getter = (navigator as Navigator & { getBattery?: () => Promise<BatteryLike> }).getBattery;
    if (!getter) {
      setApi("no");
      return;
    }
    let live = true;
    let battery: BatteryLike | null = null;
    const remember = () => {
      if (!battery) return;
      const temp = asCelsius(extraNumber(battery, "temperature"));
      const voltage = extraNumber(battery, "voltage");
      const sample: Sample = { t: Date.now(), level: battery.level, charging: battery.charging, temp, voltage };
      setNow(sample);
      const current = storeRef.current;
      const prev = current.samples[current.samples.length - 1];
      const samples = !prev || sample.t - prev.t > 20000 || prev.level !== sample.level || prev.charging !== sample.charging
        ? [...current.samples, sample].slice(-80)
        : current.samples;
      let cycles = current.cycles;
      if (prev && prev.charging !== sample.charging) {
        cycles = [...cycles, { t: sample.t, kind: sample.charging ? "started" : "stopped", level: sample.level }].slice(-24);
      }
      const recent = samples.filter((item) => sample.t - item.t < 8 * 60 * 1000 && !item.charging);
      const oldest = recent[0];
      setDrop(Boolean(oldest && !sample.charging && oldest.level - sample.level >= 0.03));
      const next = { samples, cycles };
      storeRef.current = next;
      writeStore(next);
      setStore(next);
    };
    void getter().then((bat) => {
      if (!live) return;
      battery = bat;
      setApi("yes");
      remember();
      bat.addEventListener("chargingchange", remember);
      bat.addEventListener("levelchange", remember);
    }).catch(() => { if (live) setApi("no"); });
    const timer = window.setInterval(remember, 20000);
    return () => {
      live = false;
      window.clearInterval(timer);
      battery?.removeEventListener("chargingchange", remember);
      battery?.removeEventListener("levelchange", remember);
    };
  }, []);

  const hot = now?.temp != null && now.temp >= 45;
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{copy.names.battery}</h2>
      {api === "no" ? <p>{copy.batNoApi}</p> : null}
      {now ? (
        <ul className="phone-facts">
          <li>{copy.batLevel}: {Math.round(now.level * 100)}%</li>
          <li>{copy.batCharge}: {now.charging ? copy.batYes : copy.batNo}</li>
          <li>{copy.batTemp}: {now.temp == null ? copy.batNoTemp : `${now.temp.toFixed(1)} °C`}</li>
          <li>{copy.batVolt}: {now.voltage == null ? copy.batNoVolt : String(now.voltage)}</li>
        </ul>
      ) : null}
      {hot ? <p className="phone-warn">{copy.batHot}</p> : null}
      {drop ? <p className="phone-warn">{copy.batDrop}</p> : null}
      <h3>{copy.batLive}</h3>
      {store.samples.length === 0 ? <p>{copy.batEmpty}</p> : (
        <ul className="phone-log">
          {store.samples.slice(-8).map((item) => (
            <li key={item.t}>{new Date(item.t).toLocaleString(lang)} · {Math.round(item.level * 100)}% · {item.charging ? copy.batYes : copy.batNo}</li>
          ))}
        </ul>
      )}
      <h3>{copy.batCycles}</h3>
      {store.cycles.length === 0 ? <p>{copy.batEmpty}</p> : (
        <ul className="phone-log">
          {store.cycles.slice(-8).map((item) => (
            <li key={`${item.t}-${item.kind}`}>{new Date(item.t).toLocaleString(lang)} · {item.kind === "started" ? copy.batStarted : copy.batStopped} · {Math.round(item.level * 100)}%</li>
          ))}
        </ul>
      )}
      <p className="phone-note">{copy.batNote}</p>
    </div>
  );
}

const capLabel: Record<Lang, string> = {
  az: "Telefonun bildirdiyi hədd",
  en: "Reported limit",
  tr: "Telefonun bildirdiği sınır",
  ar: "الحد الذي يبلغه الهاتف",
  ru: "Предел по данным телефона",
};

const NOTE: Record<Lang, Record<"storage" | "screen" | "force" | "forceNo" | "stylus" | "stylusYes" | "stylusWait" | "bio" | "bioYes" | "bioNo" | "nfc" | "nfcYes" | "nfcNo" | "nfcRead" | "keys" | "keysWait" | "charge" | "device" | "light" | "magnet" | "near" | "used" | "quota" | "cores" | "ram" | "gpu" | "hz" | "timeLeft" | "timeDrain" | "mb", string>> = {
  az: {
    storage: "Bu, sayt üçün ayrılan yerdir. Telefonun bütün yaddaşı deyil.",
    screen: "Ölçü, sıxlıq və bir saniyəlik kadr sayı. Yenilənmə dəqiq laboratoriya rəqəmi deyil.",
    force: "Barmağı basıb saxla. Rəqəm dəyişmirsə, telefon səhifəyə basma gücünü vermir.",
    forceNo: "Basma gücü gəlmədi.",
    stylus: "Qələmi ekrana toxundur. Barmaq toxunuşu qələm sayılmır.",
    stylusYes: "Qələm göründü.",
    stylusWait: "Hələ qələm toxunuşu yoxdur.",
    bio: "Bu, yalnız brauzerin barmaq izi və ya üz kilidi ola biləcəyini deməsidir. Sensor açılmır və hesab yazılmır.",
    bioYes: "Platforma yoxlaması bu brauzerdə mümkün görünür.",
    bioNo: "Platforma yoxlaması görünmür.",
    nfc: "NFC çox brauzerdə səhifəyə bağlıdır. Düymə yalnız bu səhifə oxuya bilirsə işləyir.",
    nfcYes: "NFC oxumaq üçün API var.",
    nfcNo: "NFC API yoxdur.",
    nfcRead: "Etiketi yaxınlaşdır",
    keys: "Səs və güc düyməsi adətən səhifəyə çatmır. Çatan düymənin adı burada yazılır.",
    keysWait: "Hələ düymə gəlməyib.",
    charge: "Şarja tax və çıxar. Vaxt rəqəmi brauzer vermirsə «məlum deyil» yazılır.",
    device: "Nüvə sayı və yaddaş brauzerin təxmini rəqəmidir. Video kartın adı da qısaldılmış ola bilər.",
    light: "İşıq sensoru səhifəyə açıqdırsa lüks göstərilir.",
    magnet: "Maqnit sensoru səhifəyə açıqdırsa üç ox göstərilir.",
    near: "Yaxınlıq sensoru əksər telefonda səhifəyə bağlanır.",
    used: "İşlənən",
    quota: "Ayrılan",
    cores: "Nüvə",
    ram: "Yaddaş",
    gpu: "Video kart",
    hz: "təxmini kadr",
    timeLeft: "Dolana qədər",
    timeDrain: "Boşalana qədər",
    mb: "MB",
  },
  en: {
    storage: "This is space set aside for the site, not the whole phone storage.",
    screen: "Size, density and frames in one second. The refresh figure is not a lab number.",
    force: "Press and hold. If the number never changes, the phone is not giving pressure to the page.",
    forceNo: "No press force arrived.",
    stylus: "Touch the screen with a pen. A finger is not a stylus.",
    stylusYes: "A stylus was seen.",
    stylusWait: "No stylus touch yet.",
    bio: "This only says the browser thinks a fingerprint or face check may exist. The sensor is not opened and nothing is saved.",
    bioYes: "A platform check looks possible in this browser.",
    bioNo: "No platform check is visible.",
    nfc: "NFC is closed to the page in many browsers. The button works only if this page can read.",
    nfcYes: "An NFC reading API is present.",
    nfcNo: "No NFC API.",
    nfcRead: "Hold a tag near",
    keys: "Volume and power usually never reach the page. A key that does arrive is named here.",
    keysWait: "No key yet.",
    charge: "Plug the charger in and out. If the browser gives no time, it says unknown.",
    device: "Core count and memory are the browser’s rough figures. The graphics name may be shortened.",
    light: "Lux is shown only if the light sensor is open to the page.",
    magnet: "Three axes are shown only if the magnet sensor is open to the page.",
    near: "The proximity sensor is closed to the page on most phones.",
    used: "Used",
    quota: "Allowed",
    cores: "Cores",
    ram: "Memory",
    gpu: "Graphics",
    hz: "approx. frames",
    timeLeft: "Until full",
    timeDrain: "Until empty",
    mb: "MB",
  },
  tr: {
    storage: "Bu, site için ayrılan yerdir. Telefonun bütün deposu değildir.",
    screen: "Ölçü, yoğunluk ve bir saniyedeki kare. Yenileme laboratuvar sayısı değildir.",
    force: "Basılı tut. Sayı değişmiyorsa telefon basış gücünü sayfaya vermiyor.",
    forceNo: "Basış gücü gelmedi.",
    stylus: "Kalemi ekrana değdir. Parmak kalem sayılmaz.",
    stylusYes: "Kalem göründü.",
    stylusWait: "Henüz kalem dokunuşu yok.",
    bio: "Bu yalnızca tarayıcının parmak izi veya yüz kontrolü olabileceğini söylemesidir. Sensör açılmaz, bir şey kaydedilmez.",
    bioYes: "Platforma kontrolü bu tarayıcıda mümkün görünüyor.",
    bioNo: "Platforma kontrolü görünmüyor.",
    nfc: "NFC birçok tarayıcıda sayfaya kapalıdır. Düğme ancak bu sayfa okuyabilirse çalışır.",
    nfcYes: "NFC okuma API’si var.",
    nfcNo: "NFC API yok.",
    nfcRead: "Etiketi yaklaştır",
    keys: "Ses ve güç tuşu genelde sayfaya ulaşmaz. Ulaşan tuşun adı burada yazılır.",
    keysWait: "Henüz tuş gelmedi.",
    charge: "Şarjı tak ve çıkar. Tarayıcı süre vermezse «bilinmiyor» yazar.",
    device: "Çekirdek ve bellek tarayıcının kaba sayısıdır. Ekran kartı adı kısaltılmış olabilir.",
    light: "Işık sensörü sayfaya açıksa lüks gösterilir.",
    magnet: "Mıknatıs sensörü sayfaya açıksa üç eksen gösterilir.",
    near: "Yakınlık sensörü çoğu telefonda sayfaya kapalıdır.",
    used: "Kullanılan",
    quota: "Ayrılan",
    cores: "Çekirdek",
    ram: "Bellek",
    gpu: "Ekran kartı",
    hz: "yaklaşık kare",
    timeLeft: "Dolana kadar",
    timeDrain: "Boşalana kadar",
    mb: "MB",
  },
  ar: {
    storage: "هذه مساحة مخصصة للموقع، وليست تخزين الهاتف كله.",
    screen: "المقاس والكثافة وعدد الإطارات في ثانية. رقم التحديث ليس قياس مختبر.",
    force: "اضغط وأبقِ. إذا لم يتغير الرقم فالهاتف لا يعطي قوة الضغط للصفحة.",
    forceNo: "لم تصل قوة الضغط.",
    stylus: "المس الشاشة بالقلم. الإصبع ليس قلمًا.",
    stylusYes: "ظهر القلم.",
    stylusWait: "لا لمسة قلم بعد.",
    bio: "هذا يعني فقط أن المتصفح يرى إمكانية فحص بالبصمة أو الوجه. لا يُفتح الحساس ولا يُحفظ شيء.",
    bioYes: "يبدو فحص المنصة ممكنًا في هذا المتصفح.",
    bioNo: "لا يظهر فحص منصة.",
    nfc: "NFC مغلق أمام الصفحة في كثير من المتصفحات. الزر يعمل فقط إذا استطاعت هذه الصفحة القراءة.",
    nfcYes: "واجهة قراءة NFC موجودة.",
    nfcNo: "لا واجهة NFC.",
    nfcRead: "قرّب البطاقة",
    keys: "زر الصوت والطاقة غالبًا لا يصلان إلى الصفحة. الزر الذي يصل يُكتب اسمه هنا.",
    keysWait: "لا زر بعد.",
    charge: "أوصل الشاحن وافصله. إن لم يعطِ المتصفح وقتًا يُكتب «غير معروف».",
    device: "عدد الأنوية والذاكرة رقم تقريبي من المتصفح. قد يكون اسم الرسوم مختصرًا.",
    light: "تظهر اللوكس فقط إذا كان حساس الضوء مفتوحًا للصفحة.",
    magnet: "تظهر المحاور الثلاثة فقط إذا كان حساس المغناطيس مفتوحًا للصفحة.",
    near: "حساس القرب مغلق أمام الصفحة في أغلب الهواتف.",
    used: "المستخدم",
    quota: "المتاح",
    cores: "الأنوية",
    ram: "الذاكرة",
    gpu: "الرسوم",
    hz: "إطار تقريبي",
    timeLeft: "حتى الامتلاء",
    timeDrain: "حتى الفراغ",
    mb: "MB",
  },
  ru: {
    storage: "Это место, отведённое сайту, а не вся память телефона.",
    screen: "Размер, плотность и кадры за секунду. Частота обновления — не лабораторная цифра.",
    force: "Нажмите и держите. Если число не меняется, телефон не отдаёт силу нажатия странице.",
    forceNo: "Сила нажатия не пришла.",
    stylus: "Коснитесь экрана пером. Палец — не стилус.",
    stylusYes: "Стилус увиден.",
    stylusWait: "Касания стилусом ещё нет.",
    bio: "Это лишь сообщение браузера, что проверка отпечатком или лицом может быть. Датчик не открывается и ничего не сохраняется.",
    bioYes: "Проверка платформы в этом браузере выглядит возможной.",
    bioNo: "Проверка платформы не видна.",
    nfc: "NFC закрыт для страницы во многих браузерах. Кнопка работает, только если эта страница умеет читать.",
    nfcYes: "API чтения NFC есть.",
    nfcNo: "API NFC нет.",
    nfcRead: "Поднесите метку",
    keys: "Громкость и питание обычно не доходят до страницы. Имя дошедшей кнопки пишется здесь.",
    keysWait: "Кнопки ещё не было.",
    charge: "Подключите и отключите зарядку. Если браузер не дал время, будет «неизвестно».",
    device: "Число ядер и память — грубые цифры браузера. Имя видеокарты может быть укорочено.",
    light: "Люксы показываются, только если датчик света открыт странице.",
    magnet: "Три оси показываются, только если магнитный датчик открыт странице.",
    near: "Датчик приближения на большинстве телефонов закрыт для страницы.",
    used: "Занято",
    quota: "Отведено",
    cores: "Ядра",
    ram: "Память",
    gpu: "Графика",
    hz: "прибл. кадров",
    timeLeft: "До полной",
    timeDrain: "До пустой",
    mb: "МБ",
  },
};

function mb(bytes: number) {
  return Math.round(bytes / (1024 * 1024));
}

function minutes(seconds: number, unknown: string) {
  if (!Number.isFinite(seconds) || seconds < 0) return unknown;
  return `${Math.round(seconds / 60)} min`;
}

function Shell({ copy, title, onBack, children }: { copy: Copy; title: string; onBack: () => void; children: ReactNode }) {
  return (
    <div className="phone-panel">
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function StorageTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [text, setText] = useState(copy.missing);
  useEffect(() => {
    const storage = navigator.storage;
    if (!storage?.estimate) return;
    void storage.estimate().then((est) => {
      const used = est.usage == null ? copy.unknown : `${mb(est.usage)} ${note.mb}`;
      const quota = est.quota == null ? copy.unknown : `${mb(est.quota)} ${note.mb}`;
      setText(`${note.used}: ${used} · ${note.quota}: ${quota}`);
    }).catch(() => setText(copy.missing));
  }, [copy.missing, copy.unknown, note.mb, note.quota, note.used]);
  return <Shell copy={copy} title={copy.names.storage} onBack={onBack}><p>{note.storage}</p><p className="phone-readout">{text}</p></Shell>;
}

function ScreenTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [hz, setHz] = useState(0);
  useEffect(() => {
    let frames = 0;
    let start = 0;
    let id = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      frames += 1;
      if (now - start < 1000) id = requestAnimationFrame(tick);
      else setHz(frames);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  const gamut = window.matchMedia("(color-gamut: p3)").matches ? "P3" : "sRGB";
  return (
    <Shell copy={copy} title={copy.names.screen} onBack={onBack}>
      <p>{note.screen}</p>
      <p className="phone-readout">
        {screen.width}×{screen.height} · {window.devicePixelRatio}× · {screen.colorDepth} bit · {gamut}
        {hz ? ` · ${hz} ${note.hz}` : ""}
        {screen.orientation?.type ? ` · ${screen.orientation.type}` : ""}
      </p>
    </Shell>
  );
}

function ForceTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [value, setValue] = useState(0);
  const [top, setTop] = useState(0);
  function read(event: PointerEvent<HTMLDivElement>) {
    const pressure = event.pressure > 0 && event.pressure < 1 ? event.pressure : 0;
    setValue(pressure);
    setTop((old) => Math.max(old, pressure));
  }
  return (
    <div className="phone-fill phone-multi" onPointerDown={read} onPointerMove={read}>
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <p>{note.force}</p>
      <strong>{Math.round(value * 100)}</strong>
      <span>{copy.multiMax}: {Math.round(top * 100)}</span>
      {top === 0 ? <span>{note.forceNo}</span> : null}
    </div>
  );
}

function StylusTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [kind, setKind] = useState("");
  return (
    <div className="phone-fill phone-multi" onPointerDown={(event) => setKind(event.pointerType)}>
      <button type="button" className="phone-back" onClick={onBack}>{copy.back}</button>
      <p>{note.stylus}</p>
      <strong>{kind === "pen" ? note.stylusYes : kind || note.stylusWait}</strong>
    </div>
  );
}

function BioTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [text, setText] = useState("…");
  useEffect(() => {
    const pub = window.PublicKeyCredential;
    if (!pub?.isUserVerifyingPlatformAuthenticatorAvailable) {
      setText(copy.missing);
      return;
    }
    void pub.isUserVerifyingPlatformAuthenticatorAvailable().then((yes) => setText(yes ? note.bioYes : note.bioNo)).catch(() => setText(copy.missing));
  }, [copy.missing, note.bioNo, note.bioYes]);
  return <Shell copy={copy} title={copy.names.bio} onBack={onBack}><p>{note.bio}</p><p>{text}</p></Shell>;
}

function NfcTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [text, setText] = useState("");
  const has = typeof window !== "undefined" && "NDEFReader" in window;
  async function readTag() {
    const Ctor = (window as unknown as { NDEFReader?: new () => { scan: () => Promise<void> } }).NDEFReader;
    if (!Ctor) return;
    try {
      const reader = new Ctor();
      await reader.scan();
      setText(note.nfcRead);
    } catch {
      setText(copy.denied);
    }
  }
  return (
    <Shell copy={copy} title={copy.names.nfc} onBack={onBack}>
      <p>{note.nfc}</p>
      <p>{has ? note.nfcYes : note.nfcNo}</p>
      {has ? <button type="button" className="phone-action" onClick={() => void readTag()}>{note.nfcRead}</button> : null}
      {text ? <p>{text}</p> : null}
    </Shell>
  );
}

function KeysTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [key, setKey] = useState("");
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => setKey(event.key);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <Shell copy={copy} title={copy.names.keys} onBack={onBack}><p>{note.keys}</p><p className="phone-readout">{key || note.keysWait}</p></Shell>;
}

function ChargeTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const [text, setText] = useState(copy.missing);
  useEffect(() => {
    const getter = (navigator as Navigator & { getBattery?: () => Promise<BatteryLike> }).getBattery;
    if (!getter) return;
    let live = true;
    let battery: BatteryLike | null = null;
    const paint = () => {
      if (!battery) return;
      setText(`${battery.charging ? copy.batYes : copy.batNo} · ${Math.round(battery.level * 100)}% · ${note.timeLeft}: ${minutes(battery.chargingTime, copy.unknown)} · ${note.timeDrain}: ${minutes(battery.dischargingTime, copy.unknown)}`);
    };
    void getter().then((bat) => {
      if (!live) return;
      battery = bat;
      paint();
      bat.addEventListener("chargingchange", paint);
      bat.addEventListener("levelchange", paint);
    }).catch(() => { if (live) setText(copy.missing); });
    return () => {
      live = false;
      battery?.removeEventListener("chargingchange", paint);
      battery?.removeEventListener("levelchange", paint);
    };
  }, [copy.batNo, copy.batYes, copy.missing, copy.unknown, note.timeDrain, note.timeLeft]);
  return <Shell copy={copy} title={copy.names.charge} onBack={onBack}><p>{note.charge}</p><p className="phone-readout">{text}</p></Shell>;
}

function DeviceTest({ copy, lang, onBack }: { copy: Copy; lang: Lang; onBack: () => void }) {
  const note = NOTE[lang];
  const cores = navigator.hardwareConcurrency || copy.unknown;
  const ram = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  let gpu = copy.unknown;
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    if (gl && info) gpu = gl.getParameter(info.UNMASKED_RENDERER_WEBGL) || copy.unknown;
  } catch {
    gpu = copy.unknown;
  }
  return (
    <Shell copy={copy} title={copy.names.device} onBack={onBack}>
      <p>{note.device}</p>
      <ul className="phone-facts">
        <li>{note.cores}: {cores}</li>
        <li>{note.ram}: {ram ? `${ram} GB` : copy.unknown}</li>
        <li>{note.gpu}: {gpu}</li>
      </ul>
    </Shell>
  );
}

function NamedSensor({ copy, lang, kind, onBack }: { copy: Copy; lang: Lang; kind: "light" | "magnet" | "near"; onBack: () => void }) {
  const note = NOTE[lang];
  const [text, setText] = useState("…");
  useEffect(() => {
    const name = kind === "light" ? "AmbientLightSensor" : kind === "magnet" ? "Magnetometer" : "ProximitySensor";
    const Ctor = (window as unknown as Record<string, new (opts?: { frequency: number }) => EventTarget & { start: () => void; stop: () => void; illuminance?: number; x?: number; y?: number; z?: number; distance?: number; near?: boolean }> )[name];
    if (!Ctor) {
      setText(copy.missing);
      return;
    }
    let sensor: { stop: () => void } | null = null;
    try {
      const next = new Ctor({ frequency: 8 });
      sensor = next;
      next.addEventListener("reading", () => {
        if (kind === "light") setText(`${next.illuminance ?? "—"} lx`);
        else if (kind === "magnet") setText(`x ${next.x?.toFixed(1) ?? "—"}  y ${next.y?.toFixed(1) ?? "—"}  z ${next.z?.toFixed(1) ?? "—"}`);
        else setText(next.near ? "near" : `${next.distance ?? "—"}`);
      });
      next.addEventListener("error", () => setText(copy.missing));
      next.start();
    } catch {
      setText(copy.missing);
    }
    return () => sensor?.stop();
  }, [copy.missing, kind]);
  const hint = kind === "light" ? note.light : kind === "magnet" ? note.magnet : note.near;
  return <Shell copy={copy} title={copy.names[kind]} onBack={onBack}><p>{hint}</p><p className="phone-readout">{text}</p></Shell>;
}

export function PhoneLab() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const [mode, setMode] = useState<"home" | "board" | TestId>("home");

  if (mode === "home") {
    return (
      <main className="phone-home">
        <h1>{copy.title}</h1>
        <p>{copy.lead}</p>
        <button type="button" className="phone-test" onClick={() => setMode("board")}>{copy.test}</button>
      </main>
    );
  }

  if (mode !== "board") {
    const back = () => setMode("board");
    if (mode === "colors" || mode === "dead" || mode === "burn") return <ColorTest copy={copy} kind={mode} onBack={back} />;
    if (mode === "touch") return <TouchTest copy={copy} onBack={back} />;
    if (mode === "multi") return <MultiTest copy={copy} onBack={back} />;
    if (mode === "rear") return <CameraTest copy={copy} facing="environment" onBack={back} />;
    if (mode === "front") return <CameraTest copy={copy} facing="user" onBack={back} />;
    if (mode === "torch") return <CameraTest copy={copy} facing="environment" torch onBack={back} />;
    if (mode === "focus") return <CameraTest copy={copy} facing="environment" focus onBack={back} />;
    if (mode === "mic") return <MicTest copy={copy} onBack={back} />;
    if (mode === "ear") return <EarTest copy={copy} onBack={back} />;
    if (mode === "speaker") return <SpeakerTest copy={copy} onBack={back} />;
    if (mode === "vibe") return <VibeTest copy={copy} onBack={back} />;
    if (mode === "gyro" || mode === "accel") return <MotionTest copy={copy} kind={mode} onBack={back} />;
    if (mode === "sensors") return <SensorTest copy={copy} onBack={back} />;
    if (mode === "wifi") return <WifiTest copy={copy} onBack={back} />;
    if (mode === "bt") return <BtTest copy={copy} onBack={back} />;
    if (mode === "gps") return <GpsTest copy={copy} onBack={back} />;
    if (mode === "net") return <NetTest copy={copy} onBack={back} />;
    if (mode === "charge") return <ChargeTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "storage") return <StorageTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "screen") return <ScreenTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "device") return <DeviceTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "force") return <ForceTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "stylus") return <StylusTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "bio") return <BioTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "nfc") return <NfcTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "keys") return <KeysTest copy={copy} lang={lang} onBack={back} />;
    if (mode === "light" || mode === "magnet" || mode === "near") return <NamedSensor copy={copy} lang={lang} kind={mode} onBack={back} />;
    return <BatteryTest copy={copy} lang={lang} onBack={back} />;
  }

  return (
    <div className="phone-sheet">
      <header>
        <strong>{copy.board}</strong>
        <button type="button" onClick={() => setMode("home")}>{copy.close}</button>
      </header>
      <div className="phone-board">
        {ORDER.map((id) => (
          <button key={id} type="button" onClick={() => setMode(id)}>
            <PhoneIcon id={id} />
            <span>{copy.names[id]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
