import { n as localizeSection, t as delocalizeSection } from "./section-slugs-C1KQkil1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-pages-DC4DCEux.js
var APK_ERROR_INDEX = [
	["gradle-sync-failed", {
		"az": ["Gradle sync alınmadı", "Gradle layihənin asılılıqlarını yükləyə bilməyib."],
		"en": ["Gradle sync failed", "Gradle could not download the project's dependencies."],
		"tr": ["Gradle sync başarısız", "Gradle projenin bağımlılıklarını indiremedi."],
		"ar": ["فشل Gradle sync", "لم يستطع Gradle تنزيل اعتماديات المشروع."],
		"ru": ["Gradle sync не удался", "Gradle не смог скачать зависимости проекта."]
	}],
	["could-not-resolve-dependency", {
		"az": ["Asılılıq tapılmadı (Could not resolve)", "Gradle adı verilən kitabxananı heç bir repozitoriyada tapmayıb."],
		"en": ["Could not resolve a dependency", "Gradle could not find the named library in any repository."],
		"tr": ["Bağımlılık çözülemedi (Could not resolve)", "Gradle adı verilen kütüphaneyi hiçbir depoda bulamadı."],
		"ar": ["تعذّر حل الاعتمادية (Could not resolve)", "لم يجد Gradle المكتبة المذكورة في أي مستودع."],
		"ru": ["Не удалось разрешить зависимость (Could not resolve)", "Gradle не нашёл названную библиотеку ни в одном репозитории."]
	}],
	["duplicate-class", {
		"az": ["Duplicate class xətası", "Eyni sinif iki ayrı kitabxananın içində var."],
		"en": ["Duplicate class error", "The same class exists inside two libraries."],
		"tr": ["Duplicate class hatası", "Aynı sınıf iki ayrı kütüphanenin içinde var."],
		"ar": ["خطأ Duplicate class", "الصنف نفسه موجود داخل مكتبتين مختلفتين."],
		"ru": ["Ошибка Duplicate class", "Один и тот же класс есть в двух разных библиотеках."]
	}],
	["manifest-merger-failed", {
		"az": ["Manifest merger failed", "Layihənin və kitabxanaların AndroidManifest fayllarında eyni atribut fərqli dəyərlə yazılıb."],
		"en": ["Manifest merger failed", "The AndroidManifest files of the app and its libraries set the same attribute to different values."],
		"tr": ["Manifest merger failed", "Uygulamanın ve kütüphanelerin AndroidManifest dosyalarında aynı öznitelik farklı değerle yazılmış."],
		"ar": ["Manifest merger failed", "ملفات AndroidManifest للتطبيق وللمكتبات تضع السمة نفسها بقيم مختلفة."],
		"ru": ["Manifest merger failed", "В AndroidManifest приложения и библиотек один атрибут задан разными значениями."]
	}],
	["dex-method-limit-multidex", {
		"az": ["Dex limiti: 65536 metod", "Bir dex faylına ən çox 65536 metod sığır."],
		"en": ["Dex limit: 65536 methods", "One dex file can hold at most 65,536 methods."],
		"tr": ["Dex sınırı: 65536 metot", "Bir dex dosyasına en çok 65.536 metot sığar."],
		"ar": ["حد Dex: ‏65536 دالة", "يتسع ملف dex الواحد لـ 65,536 دالة على الأكثر."],
		"ru": ["Лимит dex: 65536 методов", "В один dex-файл помещается не больше 65 536 методов."]
	}],
	["r8-missing-class", {
		"az": ["R8: Missing class", "R8 kodu kiçildəndə bir sinfə istinad görür, amma sinif tapılmır."],
		"en": ["R8: Missing class", "While shrinking, R8 sees a reference to a class that is not there."],
		"tr": ["R8: Missing class", "R8 kodu küçültürken var olmayan bir sınıfa referans görür."],
		"ar": ["R8: Missing class", "عند التقليص يرى R8 إشارة إلى صنف غير موجود."],
		"ru": ["R8: Missing class", "При сжатии R8 видит ссылку на класс, которого нет."]
	}],
	["java-version-mismatch", {
		"az": ["JDK versiyası uyğun gəlmir", "Gradle və ya Android Gradle Plugin başqa JDK tələb edir."],
		"en": ["JDK version mismatch", "Gradle or the Android Gradle Plugin needs a different JDK."],
		"tr": ["JDK sürümü uyumsuz", "Gradle ya da Android Gradle Plugin başka bir JDK ister."],
		"ar": ["عدم توافق إصدار JDK", "يحتاج Gradle أو Android Gradle Plugin إلى JDK مختلف."],
		"ru": ["Несовместимая версия JDK", "Gradle или Android Gradle Plugin требует другой JDK."]
	}],
	["sdk-location-not-found", {
		"az": ["SDK location not found", "Gradle Android SDK-nın harada durduğunu bilmir."],
		"en": ["SDK location not found", "Gradle does not know where the Android SDK is."],
		"tr": ["SDK location not found", "Gradle Android SDK'nın nerede durduğunu bilmiyor."],
		"ar": ["SDK location not found", "لا يعرف Gradle أين يوجد Android SDK."],
		"ru": ["SDK location not found", "Gradle не знает, где лежит Android SDK."]
	}],
	["minsdk-conflict", {
		"az": ["minSdkVersion toqquşması", "Kitabxana tətbiqdən daha yeni Android tələb edir."],
		"en": ["minSdkVersion conflict", "A library needs a newer Android than your app allows."],
		"tr": ["minSdkVersion çakışması", "Kütüphane uygulamadan daha yeni bir Android ister."],
		"ar": ["تعارض minSdkVersion", "مكتبة تحتاج Android أحدث مما يسمح به تطبيقك."],
		"ru": ["Конфликт minSdkVersion", "Библиотеке нужен более новый Android, чем допускает приложение."]
	}],
	["compilesdk-too-low", {
		"az": ["compileSdk çox aşağıdır", "Yeni kitabxana daha yeni Android API-ləri ilə yığılıb."],
		"en": ["compileSdk is too low", "A newer library was built against newer Android APIs."],
		"tr": ["compileSdk çok düşük", "Yeni kütüphane daha yeni Android API'leriyle derlenmiş."],
		"ar": ["قيمة compileSdk منخفضة جدًا", "بُنيت مكتبة أحدث على واجهات Android أحدث."],
		"ru": ["compileSdk слишком низкий", "Новая библиотека собрана с более новыми API Android."]
	}],
	["eas-build-gradle-failed", {
		"az": ["EAS build: Gradle xətası", "EAS buludda qurarkən «Run gradlew» mərhələsində qırılır."],
		"en": ["EAS build: Gradle failure", "The build breaks in the \"Run gradlew\" phase on the EAS cloud."],
		"tr": ["EAS build: Gradle hatası", "EAS bulutta derlerken «Run gradlew» aşamasında kırılır."],
		"ar": ["EAS build: فشل Gradle", "ينكسر البناء في مرحلة «Run gradlew» على سحابة EAS."],
		"ru": ["EAS build: ошибка Gradle", "Сборка падает на этапе «Run gradlew» в облаке EAS."]
	}],
	["expo-prebuild-error", {
		"az": ["expo prebuild xətası", "`prebuild` app.json-dakı plaginləri icra edərkən qırılır."],
		"en": ["expo prebuild error", "`prebuild` breaks while running the plugins from app.json."],
		"tr": ["expo prebuild hatası", "`prebuild` app.json'daki eklentileri çalıştırırken kırılır."],
		"ar": ["خطأ expo prebuild", "ينكسر `prebuild` أثناء تشغيل الإضافات المذكورة في app.json."],
		"ru": ["Ошибка expo prebuild", "`prebuild` падает при выполнении плагинов из app.json."]
	}],
	["metro-unable-to-resolve-module", {
		"az": ["Metro: Unable to resolve module", "Metro bundler import edilən faylı və ya paketi tapa bilmir."],
		"en": ["Metro: Unable to resolve module", "The Metro bundler cannot find the imported file or package."],
		"tr": ["Metro: Unable to resolve module", "Metro bundler içe aktarılan dosyayı ya da paketi bulamıyor."],
		"ar": ["Metro: Unable to resolve module", "لا يجد Metro bundler الملف أو الحزمة المستوردة."],
		"ru": ["Metro: Unable to resolve module", "Metro bundler не находит импортируемый файл или пакет."]
	}],
	["hermes-release-js-error", {
		"az": ["Hermes: yalnız release-də JS xətası", "Debug-da işləyən tətbiq release-də qırılır."],
		"en": ["Hermes: JS error only in release", "An app that works in debug breaks in release."],
		"tr": ["Hermes: yalnızca release'te JS hatası", "Debug'da çalışan uygulama release'te kırılır."],
		"ar": ["Hermes: خطأ JS في release فقط", "يعمل التطبيق في debug وينكسر في release."],
		"ru": ["Hermes: ошибка JS только в release", "Приложение работает в debug и падает в release."]
	}],
	["rn-release-white-screen", {
		"az": ["Release-də ağ ekran", "Tətbiq açılır, amma ekran boş qalır."],
		"en": ["White screen in release", "The app opens but the screen stays blank."],
		"tr": ["Release'te beyaz ekran", "Uygulama açılır ama ekran boş kalır."],
		"ar": ["شاشة بيضاء في release", "يفتح التطبيق لكن تبقى الشاشة فارغة."],
		"ru": ["Белый экран в release", "Приложение открывается, но экран пустой."]
	}],
	["rn-red-screen-metro-connect", {
		"az": ["Qırmızı ekran: Metro-ya qoşulmur", "Debug tətbiqi inkişaf serverinə (Metro) çata bilmir."],
		"en": ["Red screen: cannot reach Metro", "The debug app cannot reach the development server (Metro)."],
		"tr": ["Kırmızı ekran: Metro'ya bağlanamıyor", "Debug uygulaması geliştirme sunucusuna (Metro) ulaşamıyor."],
		"ar": ["شاشة حمراء: لا يتصل بـ Metro", "لا يصل تطبيق debug إلى خادم التطوير (Metro)."],
		"ru": ["Красный экран: нет связи с Metro", "Debug-приложение не может связаться с сервером разработки (Metro)."]
	}],
	["expo-sdk-mismatch", {
		"az": ["Expo SDK versiyası uyğun gəlmir", "Layihənin SDK-sı, Expo Go və ya paketlərin versiyaları bir-birinə uyğun deyil."],
		"en": ["Expo SDK mismatch", "The project's SDK, Expo Go, or package versions do not match."],
		"tr": ["Expo SDK uyumsuzluğu", "Projenin SDK'sı, Expo Go ya da paket sürümleri birbirine uymuyor."],
		"ar": ["عدم توافق إصدار Expo SDK", "لا تتوافق نسخة SDK للمشروع مع Expo Go أو مع إصدارات الحزم."],
		"ru": ["Несовпадение версий Expo SDK", "SDK проекта, Expo Go или версии пакетов не совпадают."]
	}],
	["capacitor-sync-error", {
		"az": ["Capacitor sync xətası", "`cap sync` veb faylları Android layihəsinə köçürə bilmir."],
		"en": ["Capacitor sync error", "`cap sync` cannot copy the web files into the Android project."],
		"tr": ["Capacitor sync hatası", "`cap sync` web dosyalarını Android projesine kopyalayamıyor."],
		"ar": ["خطأ Capacitor sync", "لا يستطيع `cap sync` نسخ ملفات الويب إلى مشروع Android."],
		"ru": ["Ошибка Capacitor sync", "`cap sync` не может скопировать веб-файлы в Android-проект."]
	}],
	["capacitor-white-screen", {
		"az": ["Capacitor: ağ ekran", "WebView index.html-i açır, amma JS və CSS faylları yolun səhvi səbəbindən yüklənmir və ya ilk skript xəta verir."],
		"en": ["Capacitor: white screen", "The WebView opens index.html, but JS and CSS files fail to load because of wrong paths, or the first script throws."],
		"tr": ["Capacitor: beyaz ekran", "WebView index.html'i açar ama yol hatası yüzünden JS ve CSS dosyaları yüklenmez ya da ilk betik hata verir."],
		"ar": ["Capacitor: شاشة بيضاء", "يفتح WebView ملف index.html لكن ملفات JS وCSS لا تُحمَّل بسبب مسارات خاطئة أو يرمي أول سكربت خطأ."],
		"ru": ["Capacitor: белый экран", "WebView открывает index.html, но JS и CSS не загружаются из-за неверных путей или первый скрипт падает."]
	}],
	["eas-credentials-keystore", {
		"az": ["EAS: keystore və credentials xətası", "Qeyri-interaktiv rejimdə EAS-ın istifadə edəcəyi imza açarı yoxdur."],
		"en": ["EAS: keystore and credentials error", "In non-interactive mode EAS has no signing key to use."],
		"tr": ["EAS: keystore ve credentials hatası", "Etkileşimsiz modda EAS'ın kullanacağı imza anahtarı yok."],
		"ar": ["EAS: خطأ keystore وcredentials", "في الوضع غير التفاعلي لا يملك EAS مفتاح توقيع يستخدمه."],
		"ru": ["EAS: ошибка keystore и credentials", "В неинтерактивном режиме у EAS нет ключа подписи."]
	}],
	["keystore-was-tampered", {
		"az": ["Keystore tampered / parol yanlış", "Keystore faylı açılmır."],
		"en": ["Keystore was tampered with / wrong password", "The keystore will not open."],
		"tr": ["Keystore tampered / parola yanlış", "Keystore dosyası açılmıyor."],
		"ar": ["Keystore tampered / كلمة المرور خاطئة", "لا يُفتح ملف keystore."],
		"ru": ["Keystore tampered / неверный пароль", "Keystore не открывается."]
	}],
	["wrong-key-alias-or-password", {
		"az": ["Açar alias və ya parolu səhvdir", "Keystore açılır, lakin göstərilən alias tapılmır və ya açarın parolu keystore parolundan fərqlidir."],
		"en": ["Wrong key alias or password", "The keystore opens, but the given alias is not found, or the key password differs from the keystore password."],
		"tr": ["Anahtar alias'ı ya da parolası yanlış", "Keystore açılıyor ama verilen alias bulunamıyor ya da anahtar parolası keystore parolasından farklı."],
		"ar": ["اسم alias أو كلمة مرور المفتاح خاطئة", "يُفتح keystore لكن لا يُعثر على alias المعطى أو أن كلمة مرور المفتاح تختلف عن كلمة مرور keystore."],
		"ru": ["Неверный alias или пароль ключа", "Keystore открывается, но указанный alias не найден или пароль ключа отличается от пароля keystore."]
	}],
	["play-upload-key-mismatch", {
		"az": ["Play: səhv açarla imzalanıb", "Play Console yüklənən AAB-nin sertifikatının əvvəl qeydə alınmış upload açarına uyğun olmadığını deyir."],
		"en": ["Play: signed with the wrong key", "Play Console says the certificate of the uploaded AAB does not match the upload key registered earlier."],
		"tr": ["Play: yanlış anahtarla imzalanmış", "Play Console yüklenen AAB'nin sertifikasının daha önce kayıtlı upload anahtarıyla uyuşmadığını söylüyor."],
		"ar": ["Play: التوقيع بمفتاح خاطئ", "تقول Play Console إن شهادة AAB المرفوع لا تطابق مفتاح الرفع المسجل سابقًا."],
		"ru": ["Play: подписано не тем ключом", "Play Console сообщает, что сертификат загруженного AAB не совпадает с ранее зарегистрированным upload-ключом."]
	}],
	["install-failed-update-incompatible", {
		"az": ["INSTALL_FAILED_UPDATE_INCOMPATIBLE", "Telefonda eyni paket adlı tətbiq başqa imza ilə quraşdırılıb."],
		"en": ["INSTALL_FAILED_UPDATE_INCOMPATIBLE", "An app with the same package name is installed on the phone with a different signature."],
		"tr": ["INSTALL_FAILED_UPDATE_INCOMPATIBLE", "Telefonda aynı paket adlı uygulama farklı imzayla kurulu."],
		"ar": ["INSTALL_FAILED_UPDATE_INCOMPATIBLE", "على الهاتف تطبيق بالاسم نفسه مثبّت بتوقيع مختلف."],
		"ru": ["INSTALL_FAILED_UPDATE_INCOMPATIBLE", "На телефоне установлено приложение с тем же именем пакета, но с другой подписью."]
	}],
	["install-failed-version-downgrade", {
		"az": ["INSTALL_FAILED_VERSION_DOWNGRADE", "Quraşdırdığın APK-nın `versionCode` dəyəri telefondakından kiçikdir."],
		"en": ["INSTALL_FAILED_VERSION_DOWNGRADE", "The `versionCode` of the APK you install is lower than the one on the phone."],
		"tr": ["INSTALL_FAILED_VERSION_DOWNGRADE", "Kurduğun APK'nın `versionCode` değeri telefondakinden küçük."],
		"ar": ["INSTALL_FAILED_VERSION_DOWNGRADE", "قيمة `versionCode` في APK الذي تثبّته أقل من الموجودة على الهاتف."],
		"ru": ["INSTALL_FAILED_VERSION_DOWNGRADE", "`versionCode` устанавливаемого APK ниже, чем на телефоне."]
	}],
	["install-failed-insufficient-storage", {
		"az": ["INSTALL_FAILED_INSUFFICIENT_STORAGE", "Telefonun yaddaşında quraşdırma üçün kifayət qədər yer yoxdur."],
		"en": ["INSTALL_FAILED_INSUFFICIENT_STORAGE", "The phone does not have enough storage to install."],
		"tr": ["INSTALL_FAILED_INSUFFICIENT_STORAGE", "Telefonun belleğinde kurulum için yeterli yer yok."],
		"ar": ["INSTALL_FAILED_INSUFFICIENT_STORAGE", "لا توجد مساحة كافية على الهاتف للتثبيت."],
		"ru": ["INSTALL_FAILED_INSUFFICIENT_STORAGE", "На телефоне мало места для установки."]
	}],
	["install-failed-no-matching-abis", {
		"az": ["INSTALL_FAILED_NO_MATCHING_ABIS", "APK-dakı native kitabxanalar (.so) telefonun prosessor arxitekturasına uyğun deyil."],
		"en": ["INSTALL_FAILED_NO_MATCHING_ABIS", "The native libraries (.so) in the APK do not match the phone's processor architecture."],
		"tr": ["INSTALL_FAILED_NO_MATCHING_ABIS", "APK'daki native kütüphaneler (.so) telefonun işlemci mimarisine uymuyor."],
		"ar": ["INSTALL_FAILED_NO_MATCHING_ABIS", "المكتبات الأصلية (.so) في APK لا توافق معمارية معالج الهاتف."],
		"ru": ["INSTALL_FAILED_NO_MATCHING_ABIS", "Нативные библиотеки (.so) в APK не подходят архитектуре процессора телефона."]
	}],
	["install-parse-failed", {
		"az": ["Paketi təhlil etmə xətası (Parse error)", "Android APK-nı oxuya bilmir: fayl yarımçıq yüklənib, imzalanmayıb, manifest zədəlidir və ya telefonun Android versiyası `minSdk`-dan aşağıdır."],
		"en": ["Parse error (problem parsing the package)", "Android cannot read the APK: the file was downloaded partly, it is unsigned, the manifest is damaged, or the phone's Android version is below `minSdk`."],
		"tr": ["Parse hatası (paket ayrıştırılamadı)", "Android APK'yı okuyamıyor: dosya yarım inmiş, imzasız, manifest bozuk ya da telefonun Android sürümü `minSdk`'nın altında."],
		"ar": ["خطأ في تحليل الحزمة (Parse error)", "لا يستطيع Android قراءة APK: الملف نُزّل جزئيًا أو غير موقّع أو المانيفست تالف أو إصدار Android في الهاتف أقل من `minSdk`."],
		"ru": ["Ошибка разбора пакета (Parse error)", "Android не может прочитать APK: файл скачан не полностью, не подписан, манифест повреждён или версия Android телефона ниже `minSdk`."]
	}],
	["app-not-installed", {
		"az": ["«App not installed» xətası", "Telefon quraşdırmanı rədd edir, amma səbəbi yazmır."],
		"en": ["\"App not installed\" error", "The phone refuses the install but does not say why."],
		"tr": ["«App not installed» hatası", "Telefon kurulumu reddeder ama nedenini yazmaz."],
		"ar": ["خطأ «App not installed»", "يرفض الهاتف التثبيت دون ذكر السبب."],
		"ru": ["Ошибка «App not installed»", "Телефон отказывает в установке, но не объясняет причину."]
	}],
	["aab-install-bundletool", {
		"az": ["AAB faylını telefona qurmaq", "AAB yalnız Play üçündür, telefona birbaşa quraşdırılmır."],
		"en": ["Installing an AAB file on a phone", "An AAB is meant for Play and cannot be installed on a phone directly."],
		"tr": ["AAB dosyasını telefona kurmak", "AAB yalnızca Play içindir, telefona doğrudan kurulmaz."],
		"ar": ["تثبيت ملف AAB على الهاتف", "ملف AAB مخصص لـ Play ولا يُثبَّت على الهاتف مباشرة."],
		"ru": ["Установка AAB-файла на телефон", "AAB предназначен для Play и не ставится на телефон напрямую."]
	}],
	["adb-device-unauthorized", {
		"az": ["adb: cihaz «unauthorized»", "Telefon bu kompüterə USB sazlama icazəsi verməyib."],
		"en": ["adb: device \"unauthorized\"", "The phone has not granted USB debugging permission to this computer."],
		"tr": ["adb: cihaz «unauthorized»", "Telefon bu bilgisayara USB hata ayıklama izni vermemiş."],
		"ar": ["adb: الجهاز «unauthorized»", "لم يمنح الهاتف إذن تصحيح USB لهذا الحاسوب."],
		"ru": ["adb: устройство «unauthorized»", "Телефон не дал этому компьютеру разрешение на отладку по USB."]
	}],
	["adb-device-not-found", {
		"az": ["adb: cihaz tapılmır", "Kompüter telefonu görmür."],
		"en": ["adb: device not found", "The computer does not see the phone."],
		"tr": ["adb: cihaz bulunamıyor", "Bilgisayar telefonu görmüyor."],
		"ar": ["adb: الجهاز غير موجود", "لا يرى الحاسوب الهاتف."],
		"ru": ["adb: устройство не найдено", "Компьютер не видит телефон."]
	}],
	["adb-server-version-mismatch", {
		"az": ["adb server versiyası uyğun gəlmir", "Kompüterdə bir neçə adb nüsxəsi var."],
		"en": ["adb server version mismatch", "The computer has several copies of adb."],
		"tr": ["adb server sürüm uyumsuzluğu", "Bilgisayarda birden çok adb kopyası var."],
		"ar": ["عدم تطابق إصدار خادم adb", "على الحاسوب عدة نسخ من adb."],
		"ru": ["Несовпадение версии сервера adb", "На компьютере несколько копий adb."]
	}],
	["activity-not-found-launcher", {
		"az": ["Activity class does not exist", "Başladılacaq ekran sinfi APK-da tapılmır."],
		"en": ["Activity class does not exist", "The screen class to start cannot be found in the APK."],
		"tr": ["Activity class does not exist", "Başlatılacak ekran sınıfı APK'da bulunamıyor."],
		"ar": ["Activity class does not exist", "لا يُعثر على صنف الشاشة المراد تشغيلها داخل APK."],
		"ru": ["Activity class does not exist", "Класс запускаемого экрана не найден в APK."]
	}],
	["play-target-api-level", {
		"az": ["Play: targetSdk səviyyəsi aşağıdır", "Google Play yeni və yenilənən tətbiqlərdən müəyyən minimum `targetSdk` tələb edir."],
		"en": ["Play: targetSdk level too low", "Google Play requires a minimum `targetSdk` for new and updated apps."],
		"tr": ["Play: targetSdk seviyesi düşük", "Google Play yeni ve güncellenen uygulamalardan belirli bir minimum `targetSdk` ister."],
		"ar": ["Play: مستوى targetSdk منخفض", "يشترط Google Play حدًا أدنى لـ `targetSdk` للتطبيقات الجديدة والمحدَّثة."],
		"ru": ["Play: слишком низкий targetSdk", "Google Play требует минимальный `targetSdk` для новых и обновляемых приложений."]
	}],
	["play-permissions-policy-rejection", {
		"az": ["Play: icazə siyasəti rədd etdi", "Tətbiq həssas icazə (SMS, bütün fayllar, fon məkanı) istəyir, lakin Play siyasətinin icazə verdiyi hallardan birinə uyğun deyil."],
		"en": ["Play: permissions policy rejection", "The app asks for a sensitive permission (SMS, all files, background location) but does not match any case the Play policy allows."],
		"tr": ["Play: izin politikası reddi", "Uygulama hassas izin (SMS, tüm dosyalar, arka plan konumu) istiyor ama Play politikasının izin verdiği durumlardan birine uymuyor."],
		"ar": ["Play: رفض بسبب سياسة الأذونات", "يطلب التطبيق إذنًا حساسًا (SMS أو كل الملفات أو الموقع في الخلفية) لكنه لا يطابق أي حالة تسمح بها سياسة Play."],
		"ru": ["Play: отклонение по политике разрешений", "Приложение запрашивает чувствительное разрешение (SMS, все файлы, фоновая геолокация), но не подпадает ни под один разрешённый политикой Play случай."]
	}],
	["play-64bit-requirement", {
		"az": ["Play: 64-bit tələbi", "Tətbiqdə yalnız 32-bit native kitabxanalar var."],
		"en": ["Play: 64-bit requirement", "The app contains only 32-bit native libraries."],
		"tr": ["Play: 64-bit şartı", "Uygulamada yalnız 32-bit native kütüphaneler var."],
		"ar": ["Play: شرط 64-bit", "يحوي التطبيق مكتبات أصلية 32-bit فقط."],
		"ru": ["Play: требование 64-bit", "В приложении только 32-битные нативные библиотеки."]
	}],
	["play-version-code-used", {
		"az": ["Play: versionCode artıq istifadə olunub", "Eyni `versionCode` ilə AAB əvvəl yüklənib (hətta rədd olunmuş və ya qaralama olsa da)."],
		"en": ["Play: versionCode already used", "An AAB with the same `versionCode` was uploaded before (even a rejected or draft one)."],
		"tr": ["Play: versionCode zaten kullanılmış", "Aynı `versionCode` ile daha önce AAB yüklenmiş (reddedilmiş ya da taslak olsa bile)."],
		"ar": ["Play: versionCode مستخدم من قبل", "رُفع AAB بالـ `versionCode` نفسه من قبل (حتى لو رُفض أو كان مسودة)."],
		"ru": ["Play: versionCode уже использован", "AAB с таким `versionCode` уже загружали (даже отклонённый или черновик)."]
	}],
	["runtime-classnotfound-nosuchmethod", {
		"az": ["ClassNotFound / NoSuchMethod çökməsi", "İş vaxtı sinif və ya metod tapılmır."],
		"en": ["ClassNotFound / NoSuchMethod crash", "A class or method is missing at runtime."],
		"tr": ["ClassNotFound / NoSuchMethod çökmesi", "Çalışma anında sınıf ya da metot bulunamıyor."],
		"ar": ["انهيار ClassNotFound / NoSuchMethod", "صنف أو دالة مفقودة وقت التشغيل."],
		"ru": ["Краш ClassNotFound / NoSuchMethod", "Во время работы не находится класс или метод."]
	}],
	["runtime-outofmemory", {
		"az": ["OutOfMemoryError çökməsi", "Tətbiq cihazın verdiyi yaddaş həddini aşır."],
		"en": ["OutOfMemoryError crash", "The app exceeds the memory limit the device gives it."],
		"tr": ["OutOfMemoryError çökmesi", "Uygulama cihazın verdiği bellek sınırını aşıyor."],
		"ar": ["انهيار OutOfMemoryError", "يتجاوز التطبيق حد الذاكرة الذي يمنحه الجهاز."],
		"ru": ["Краш OutOfMemoryError", "Приложение превышает лимит памяти, выданный устройством."]
	}],
	["cleartext-not-permitted", {
		"az": ["CLEARTEXT communication not permitted", "Android 9 və yuxarıda `http://` sorğuları standart olaraq bloklanır."],
		"en": ["CLEARTEXT communication not permitted", "From Android 9 up, `http://` requests are blocked by default."],
		"tr": ["CLEARTEXT communication not permitted", "Android 9 ve üstünde `http://` istekleri varsayılan olarak engellenir."],
		"ar": ["CLEARTEXT communication not permitted", "من Android 9 فما فوق تُحظر طلبات `http://` افتراضيًا."],
		"ru": ["CLEARTEXT communication not permitted", "Начиная с Android 9 запросы `http://` по умолчанию блокируются."]
	}],
	["security-exception-permission-denied", {
		"az": ["SecurityException: icazə verilməyib", "Kod icazə tələb edən əməliyyatı çağırır, amma ya manifestdə icazə yoxdur, ya da istifadəçi iş vaxtında icazə verməyib."],
		"en": ["SecurityException: permission denied", "The code calls an operation that needs a permission, but either the manifest lacks it or the user did not grant it at runtime."],
		"tr": ["SecurityException: izin verilmedi", "Kod izin gerektiren bir işlemi çağırıyor ama manifestte izin yok ya da kullanıcı çalışma anında izin vermedi."],
		"ar": ["SecurityException: الإذن مرفوض", "تستدعي الشيفرة عملية تحتاج إذنًا لكن المانيفست لا يحويه أو لم يمنحه المستخدم وقت التشغيل."],
		"ru": ["SecurityException: разрешение отклонено", "Код вызывает операцию, требующую разрешения, но в манифесте его нет или пользователь не выдал его во время работы."]
	}]
];
var L$1 = (az, en, tr, ar, ru) => ({
	az,
	en,
	tr,
	ar,
	ru
});
function piece$1(title, lead, points, note) {
	return {
		az: {
			title: title.az,
			lead: lead.az,
			points: points.az,
			note: note?.az
		},
		en: {
			title: title.en,
			lead: lead.en,
			points: points.en,
			note: note?.en
		},
		tr: {
			title: title.tr,
			lead: lead.tr,
			points: points.tr,
			note: note?.tr
		},
		ar: {
			title: title.ar,
			lead: lead.ar,
			points: points.ar,
			note: note?.ar
		},
		ru: {
			title: title.ru,
			lead: lead.ru,
			points: points.ru,
			note: note?.ru
		}
	};
}
var LETTER_GAPS = [
	{
		slug: "etme",
		code: `def duzelt(metn: str) -> str:
    return metn.encode("cp1252").decode("utf-8")

print(duzelt("Ã¶dÉ™yici"))
`,
		piece: piece$1(L$1("ödəyici sözü ödÉ™yici olur", "ödəyici turns into ödÉ™yici", "ödəyici sözcüğü ödÉ™yici olur", "كلمة ödəyici تصير ödÉ™yici", "Слово ödəyici становится ödÉ™yici"), L$1("UTF-8-də `ə` iki baytdır: `C9 99`. Windows-1252 bu baytları hərf kimi oxuyur: `C9` `É`, `99` isə `™` olur. Ona görə `ə` ekranda `É™` kimi görünür. `ö` eyni yolla `Ã¶` olur. `ödəyici` beləcə `Ã¶dÉ™yici` yazılır.\n\nTürk səhifələri `ş`, `ğ`, `ı` üçün cədvəl verir. `É™` o cədvəldə yoxdur, çünki türkcədə `ə` yoxdur.\n\nHərf artıq `?` olubsa, bu kod onu qaytarmır. Bayt itib.", "In UTF-8, `ə` is two bytes: `C9 99`. Windows-1252 reads those bytes as letters: `C9` is `É`, and `99` is `™`. So `ə` shows as `É™`. The same path turns `ö` into `Ã¶`. `ödəyici` is then written `Ã¶dÉ™yici`.\n\nTurkish pages give a table for `ş`, `ğ`, and `ı`. `É™` is not in that table, because Turkish has no `ə`.\n\nIf the letter is already `?`, this code cannot bring it back. The byte is gone.", "UTF-8'de `ə` iki bayttır: `C9 99`. Windows-1252 bu baytları harf gibi okur: `C9` `É`, `99` ise `™` olur. Bu yüzden `ə` ekranda `É™` görünür. `ö` aynı yolla `Ã¶` olur. `ödəyici` böylece `Ã¶dÉ™yici` yazılır.\n\nTürkçe sayfalar `ş`, `ğ`, `ı` için tablo verir. `É™` o tabloda yoktur, çünkü Türkçede `ə` yoktur.\n\nHarf çoktan `?` olduysa bu kod onu geri getirmez. Bayt gitmiştir.", "في UTF-8 حرف `ə` بايتان: `C9 99`. يقرأ Windows-1252 هذين البايتين كحرفين: `C9` هو `É` و`99` هو `™`. لذلك يظهر `ə` كـ `É™`. وبالطريقة نفسها يصير `ö` هو `Ã¶`. فتُكتب `ödəyici` هكذا: `Ã¶dÉ™yici`.\n\nصفحات التركية تعطي جدولًا لـ `ş` و`ğ` و`ı`. و`É™` ليس في ذلك الجدول لأن التركية بلا `ə`.\n\nإذا صار الحرف `?` فهذا الرمز لا يُرجعه. البايت ذهب.", "В UTF-8 буква `ə` — это два байта: `C9 99`. Windows-1252 читает их как буквы: `C9` это `É`, а `99` это `™`. Поэтому `ə` на экране выглядит как `É™`. Тем же путём `ö` становится `Ã¶`. Слово `ödəyici` записывается как `Ã¶dÉ™yici`.\n\nТурецкие страницы дают таблицу для `ş`, `ğ` и `ı`. `É™` в той таблице нет, потому что в турецком нет `ə`.\n\nЕсли буква уже стала `?`, этот код её не вернёт. Байт потерян."), {
			az: [
				"Kodu olduğu kimi işlət: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` yenidən `ödəyici` olur.",
				"`É™` görəndə əvəzləmə cədvəli axtarma. Bu, `ə` hərfinin Windows-1252 ilə səhv oxunuşudur.",
				"`ş`, `ğ`, `ı` üçün türk cədvəli `É™`-ni düzəltmir. `ə` o cədvəldə yoxdur.",
				"Kod xəta atırsa, mətndə artıq `cp1252` baytı olmayan işarə var. Həmin yeri əl ilə yaz.",
				"Hərf `?` olubsa, bayt itib. Mətni mənbədən yenidən götür."
			],
			en: [
				"Use the code as it is: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` becomes `ödəyici` again.",
				"When you see `É™`, do not look for a replacement table. That is `ə` read wrongly as Windows-1252.",
				"A Turkish table for `ş`, `ğ`, and `ı` does not fix `É™`. `ə` is not in that table.",
				"If the code throws, the text already has a mark that is not a `cp1252` byte. Type that place by hand.",
				"If the letter is `?`, the byte is gone. Take the text from the source again."
			],
			tr: [
				"Kodu olduğu gibi kullan: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` yeniden `ödəyici` olur.",
				"`É™` görünce değiştirme tablosu arama. Bu, `ə` harfinin Windows-1252 ile yanlış okunuşudur.",
				"`ş`, `ğ`, `ı` için Türkçe tablo `É™` düzeltmez. `ə` o tabloda yoktur.",
				"Kod hata verirse metinde artık `cp1252` baytı olmayan bir işaret vardır. O yeri elle yaz.",
				"Harf `?` olduysa bayt gitmiştir. Metni kaynaktan yeniden al."
			],
			ar: [
				"استعمل الرمز كما هو: `metn.encode(\"cp1252\").decode(\"utf-8\")`. تعود `Ã¶dÉ™yici` إلى `ödəyici`.",
				"إذا رأيت `É™` فلا تبحث عن جدول استبدال. هذا `ə` قُرئ خطأ كـ Windows-1252.",
				"جدول تركي لـ `ş` و`ğ` و`ı` لا يصلح `É™`. حرف `ə` ليس في ذلك الجدول.",
				"إذا رمى الرمز خطأ ففي النص علامة لم تعد بايت `cp1252`. اكتب ذلك الموضع بيدك.",
				"إذا صار الحرف `?` فقد ذهب البايت. خذ النص من المصدر من جديد."
			],
			ru: [
				"Используй код как есть: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` снова становится `ödəyici`.",
				"Увидев `É™`, не ищи таблицу замен. Это буква `ə`, неверно прочитанная как Windows-1252.",
				"Турецкая таблица для `ş`, `ğ` и `ı` не чинит `É™`. Буквы `ə` в той таблице нет.",
				"Если код бросает ошибку, в тексте уже есть знак, который не байт `cp1252`. Это место напиши рукой.",
				"Если буква стала `?`, байт потерян. Возьми текст из источника заново."
			]
		}, L$1("Düzəlmiş mətni yenidən `utf-8` saxla. Eyni faylı bir daha `cp1252` kimi oxuma.", "Save the fixed text as `utf-8` again. Do not read the same file as `cp1252` a second time.", "Düzelmiş metni yeniden `utf-8` kaydet. Aynı dosyayı bir daha `cp1252` gibi okuma.", "احفظ النص المُصلح من جديد كـ `utf-8`. لا تقرأ الملف نفسه مرة ثانية كـ `cp1252`.", "Исправленный текст снова сохрани как `utf-8`. Тот же файл второй раз как `cp1252` не читай."))
	},
	{
		slug: "csharp-e",
		code: `using System.Text;

Console.OutputEncoding = Encoding.UTF8;
File.WriteAllText("metn.txt", "Azərbaycan", new UTF8Encoding(encoderShouldEmitUTF8Identifier: true));
`,
		piece: piece$1(L$1("C#-də ə hərfi sual işarəsi olur", "In C# the letter ə becomes a question mark", "C#'ta ə harfi soru işareti olur", "في C# يصير حرف ə علامة سؤال", "В C# буква ə становится вопросительным знаком"), L$1("Azərbaycan Windows-unda köhnə mətn cədvəli çox vaxt `1254`-dür. Bu, türk cədvəlidir. İçində `ü`, `ö`, `ş`, `ğ`, `ç`, `ı` var. `ə` yoxdur. `Encoding.GetEncoding(1254)` həmin hərfi saxlaya bilmir və yerinə `?` qoyur.\n\nFaylı və konsolu UTF-8 et. `1254` yazma.", "On Azerbaijani Windows the old text table is often `1254`. That is the Turkish table. It has `ü`, `ö`, `ş`, `ğ`, `ç`, and `ı`. It does not have `ə`. `Encoding.GetEncoding(1254)` cannot store that letter and puts `?` in its place.\n\nMake the file and the console UTF-8. Do not write `1254`.", "Azerbaycan Windows'unda eski metin tablosu çoğu zaman `1254`'tür. Bu, Türkçe tablodur. İçinde `ü`, `ö`, `ş`, `ğ`, `ç`, `ı` vardır. `ə` yoktur. `Encoding.GetEncoding(1254)` o harfi saklayamaz ve yerine `?` koyar.\n\nDosyayı ve konsolu UTF-8 yap. `1254` yazma.", "في Windows الأذربيجاني جدول النص القديم غالبًا `1254`. هذا جدول تركي. فيه `ü` و`ö` و`ş` و`ğ` و`ç` و`ı`. ليس فيه `ə`. و`Encoding.GetEncoding(1254)` لا يستطيع حفظ ذلك الحرف ويضع `?` مكانه.\n\nاجعل الملف والطرفية UTF-8. لا تكتب `1254`.", "На азербайджанском Windows старая таблица текста часто `1254`. Это турецкая таблица. В ней есть `ü`, `ö`, `ş`, `ğ`, `ç` и `ı`. Буквы `ə` нет. `Encoding.GetEncoding(1254)` не может её сохранить и ставит `?`.\n\nСделай файл и консоль UTF-8. Не пиши `1254`."), {
			az: [
				"Faylı belə yaz: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
				"`Encoding.GetEncoding(1254)` və `Encoding.Default` yazma. Orada `ə` yoxdur.",
				"Konsolda kvadrat görürsənsə, əvvəl `Console.OutputEncoding = Encoding.UTF8` qoy.",
				"Köhnə `csc` mənbəni sistem cədvəli ilə oxuyur. `.cs` faylını UTF-8 BOM ilə saxla.",
				"Hərf artıq `?` olubsa, kod onu qaytarmır. Mətni yenidən yaz."
			],
			en: [
				"Write the file like this: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
				"Do not write `Encoding.GetEncoding(1254)` or `Encoding.Default`. `ə` is not there.",
				"If the console shows a square, first set `Console.OutputEncoding = Encoding.UTF8`.",
				"An old `csc` reads the source with the system table. Save the `.cs` file as UTF-8 with a BOM.",
				"If the letter is already `?`, code cannot bring it back. Write the text again."
			],
			tr: [
				"Dosyayı şöyle yaz: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
				"`Encoding.GetEncoding(1254)` ve `Encoding.Default` yazma. Orada `ə` yoktur.",
				"Konsolda kare görüyorsan önce `Console.OutputEncoding = Encoding.UTF8` koy.",
				"Eski `csc` kaynağı sistem tablosuyla okur. `.cs` dosyasını UTF-8 BOM ile kaydet.",
				"Harf çoktan `?` olduysa kod onu geri getirmez. Metni yeniden yaz."
			],
			ar: [
				"اكتب الملف هكذا: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
				"لا تكتب `Encoding.GetEncoding(1254)` ولا `Encoding.Default`. حرف `ə` ليس هناك.",
				"إذا ظهرت مربع في الطرفية فضع أولًا `Console.OutputEncoding = Encoding.UTF8`.",
				"`csc` القديم يقرأ المصدر بجدول النظام. احفظ ملف `.cs` كـ UTF-8 مع BOM.",
				"إذا صار الحرف `?` فالرمز لا يُرجعه. اكتب النص من جديد."
			],
			ru: [
				"Пиши файл так: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
				"Не пиши `Encoding.GetEncoding(1254)` и `Encoding.Default`. Буквы `ə` там нет.",
				"Если в консоли квадрат, сначала поставь `Console.OutputEncoding = Encoding.UTF8`.",
				"Старый `csc` читает исходник системной таблицей. Сохрани файл `.cs` как UTF-8 с BOM.",
				"Если буква уже `?`, код её не вернёт. Напиши текст заново."
			]
		})
	},
	{
		slug: "whatsapp-excel",
		code: `from pathlib import Path
import csv

text = Path("sohbet.txt").read_text(encoding="utf-8")
rows = []
for line in text.splitlines():
    if " - " not in line or ": " not in line:
        continue
    left, message = line.split(": ", 1)
    when, name = left.split(" - ", 1)
    rows.append((when, name, message))

with open("sohbet.csv", "w", newline="", encoding="utf-8-sig") as fayl:
    writer = csv.writer(fayl)
    writer.writerow(["tarix", "ad", "mesaj"])
    writer.writerows(rows)
`,
		piece: piece$1(L$1("WhatsApp söhbəti Excel-də ə hərfi pozulur", "A WhatsApp chat breaks ə in Excel", "WhatsApp sohbeti Excel'de ə harfini bozar", "دردشة WhatsApp تُفسد حرف ə في Excel", "Переписка WhatsApp ломает ə в Excel"), L$1("Azərbaycan telefonundan çıxan söhbət belə bir sətirdir: `12.10.2026, 14:05 - Əli: salam`. Fayl UTF-8-dir. Excel onu iki dəfə basanda sistem cədvəli ilə açır. Orada `ə` yoxdur, hərf `?` və ya başqa işarə olur.\n\n`.txt` faylını Excel-ə birbaşa açma. Əvvəl CSV yaz və əvvəlində BOM qoy.", "A chat exported from an Azerbaijani phone is a line like this: `12.10.2026, 14:05 - Əli: salam`. The file is UTF-8. When you double-click it, Excel opens it with the system table. That table has no `ə`, so the letter becomes `?` or another mark.\n\nDo not open the `.txt` straight in Excel. Write a CSV first and put a BOM at the start.", "Azerbaycan telefonundan çıkan sohbet şöyle bir satırdır: `12.10.2026, 14:05 - Əli: salam`. Dosya UTF-8'dir. Excel'e çift tıklayınca sistem tablosuyla açar. Orada `ə` yoktur, harf `?` ya da başka bir işaret olur.\n\n`.txt` dosyasını Excel'e doğrudan açma. Önce CSV yaz ve başına BOM koy.", "الدردشة الخارجة من هاتف أذربيجاني سطر كهذا: `12.10.2026, 14:05 - Əli: salam`. الملف UTF-8. حين تفتحه بنقرتين يفتحه Excel بجدول النظام. ليس فيه `ə`، فيصير الحرف `?` أو علامة أخرى.\n\nلا تفتح ملف `.txt` في Excel مباشرة. اكتب CSV أولًا وضع BOM في أوله.", "Переписка с азербайджанского телефона — это строка вроде `12.10.2026, 14:05 - Əli: salam`. Файл в UTF-8. Если открыть его двойным щелчком, Excel читает системной таблицей. Буквы `ə` там нет, и она становится `?` или другим знаком.\n\nНе открывай `.txt` прямо в Excel. Сначала запиши CSV и поставь BOM в начало."), {
			az: [
				"Söhbəti mediasız ixrac et. Çıxan `.txt` faylını UTF-8 kimi oxu.",
				"CSV-ni `encoding=\"utf-8-sig\"` ilə yaz. Excel onda `ə` hərfinı görür.",
				"Sətir `tarix - ad: mesaj` formasındadır. Tarixdə nöqtə və ya kəsir ola bilər. Onu tarixə çevirmə, mətn saxla.",
				"Media sətri və sistem sətri `:` daşımır. Kod onları keçir.",
				"`.txt` faylını Excel-ə sürükləmə. Hərf orada pozulur."
			],
			en: [
				"Export the chat without media. Read the `.txt` that comes out as UTF-8.",
				"Write the CSV with `encoding=\"utf-8-sig\"`. Excel then sees the letter `ə`.",
				"A line looks like `date - name: message`. The date may use a dot or a slash. Do not turn it into a date. Keep it as text.",
				"A media line and a system line have no `:`. The code skips them.",
				"Do not drag the `.txt` into Excel. The letter breaks there."
			],
			tr: [
				"Sohbeti mediasız dışa aktar. Çıkan `.txt` dosyasını UTF-8 olarak oku.",
				"CSV'yi `encoding=\"utf-8-sig\"` ile yaz. Excel o zaman `ə` harfini görür.",
				"Satır `tarih - ad: mesaj` biçimindedir. Tarihte nokta ya da kesir olabilir. Onu tarihe çevirme, metin tut.",
				"Medya satırı ve sistem satırı `:` taşımaz. Kod onları atlar.",
				"`.txt` dosyasını Excel'e sürükleme. Harf orada bozulur."
			],
			ar: [
				"صدّر الدردشة بلا وسائط. اقرأ ملف `.txt` الخارج كـ UTF-8.",
				"اكتب CSV بـ `encoding=\"utf-8-sig\"`. عندها يرى Excel حرف `ə`.",
				"السطر على شكل `تاريخ - اسم: رسالة`. قد يكون في التاريخ نقطة أو شرطة مائلة. لا تحوّله إلى تاريخ. أبقه نصًا.",
				"سطر الوسائط وسطر النظام بلا `:`. الرمز يتخطاهما.",
				"لا تسحب ملف `.txt` إلى Excel. الحرف يفسد هناك."
			],
			ru: [
				"Выгрузи переписку без медиа. Вышедший `.txt` читай как UTF-8.",
				"Пиши CSV с `encoding=\"utf-8-sig\"`. Тогда Excel видит букву `ə`.",
				"Строка имеет вид `дата - имя: сообщение`. В дате может быть точка или дробь. Не превращай её в дату, оставь текстом.",
				"Строка медиа и системная строка не содержат `:`. Код их пропускает.",
				"Не перетаскивай `.txt` в Excel. Буква там ломается."
			]
		})
	},
	{
		slug: "pdf-e",
		code: `from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

pdfmetrics.registerFont(TTFont("Arial", r"C:\\Windows\\Fonts\\arial.ttf"))
fayl = canvas.Canvas("sened.pdf")
fayl.setFont("Arial", 14)
fayl.drawString(40, 800, "Azərbaycan")
fayl.save()
`,
		piece: piece$1(L$1("PDF-də ə hərfi kvadrat olur", "In a PDF the letter ə becomes a square", "PDF'de ə harfi kare olur", "في PDF يصير حرف ə مربعًا", "В PDF буква ə становится квадратом"), L$1("Kvadrat o deməkdir ki, şriftin içində `ə` yoxdur və ya PDF şrifti fayla basdırmayıb. Oxuyucu hərfi tapa bilmir, yerinə boş qutu qoyur.\n\nHelvetica, bir çox köhnə PDF şriftləri və bəzək şriftləri `ə` daşımır. Arial, Calibri, Times New Roman və Noto Sans daşıyır.\n\nKvadrat artıq PDF-in içindədirsə, başqa oxuyucu onu düzəltmir. Şrifti dəyişib faylı yenidən yaz.", "A square means the font has no `ə`, or the PDF did not embed the font. The reader cannot find the letter and puts an empty box in its place.\n\nHelvetica, many old PDF fonts, and decorative fonts do not carry `ə`. Arial, Calibri, Times New Roman, and Noto Sans do.\n\nIf the square is already inside the PDF, another reader will not fix it. Change the font and write the file again.", "Kare, şriftin içinde `ə` olmadığı ya da PDF'in şrifti dosyaya gömmediği demektir. Okuyucu harfi bulamaz, yerine boş kutu koyar.\n\nHelvetica, birçok eski PDF şrifti ve süs şriftleri `ə` taşımaz. Arial, Calibri, Times New Roman ve Noto Sans taşır.\n\nKare çoktan PDF'in içindeyse başka okuyucu onu düzeltmez. Şrifti değiştirip dosyayı yeniden yaz.", "المربع يعني أن الخط بلا `ə`، أو أن PDF لم يُضمّن الخط. القارئ لا يجد الحرف ويضع صندوقًا فارغًا مكانه.\n\nHelvetica وكثير من خطوط PDF القديمة وخطوط الزينة لا تحمل `ə`. أما Arial وCalibri وTimes New Roman وNoto Sans فتحملها.\n\nإذا كان المربع داخل PDF أصلًا فقارئ آخر لا يصلحه. غيّر الخط واكتب الملف من جديد.", "Квадрат значит, что в шрифте нет `ə` или PDF не встроил шрифт. Читалка не находит букву и ставит пустую коробку.\n\nHelvetica, многие старые PDF-шрифты и декоративные шрифты не содержат `ə`. Arial, Calibri, Times New Roman и Noto Sans содержат.\n\nЕсли квадрат уже внутри PDF, другая читалка его не исправит. Смени шрифт и запиши файл заново."), {
			az: [
				"Python-da hazır Helvetica işlətmə. Arial və ya Noto Sans qeyd et və fayla basdır.",
				"Word-da Fayl, Seçimlər, Saxla bölməsində şriftləri fayla basdırmağı aç. Sonra PDF yaz.",
				"LibreOffice-də PDF ixracında standart şriftləri basdır. Əks halda başqa kompüterdə kvadrat qalır.",
				"Bəzək şrifti `ə` daşımır. Başlığı onda saxla, mətni Arial et.",
				"Kvadrat olan köhnə PDF-i oxuyucu düzəltmir. Mənbəni yenidən ixrac et."
			],
			en: [
				"In Python do not use the built-in Helvetica. Register Arial or Noto Sans and embed it.",
				"In Word, under File, Options, Save, turn on embedding fonts in the file. Then write the PDF.",
				"In LibreOffice, embed the standard fonts when you export a PDF. Otherwise the square stays on another computer.",
				"A decorative font does not carry `ə`. Keep the title in it and set the text to Arial.",
				"A reader does not fix an old PDF that already has squares. Export the source again."
			],
			tr: [
				"Python'da hazır Helvetica kullanma. Arial ya da Noto Sans kaydet ve dosyaya göm.",
				"Word'da Dosya, Seçenekler, Kaydet bölümünde fontları dosyaya gömmeyi aç. Sonra PDF yaz.",
				"LibreOffice'de PDF dışa aktarırken standart fontları göm. Yoksa başka bilgisayarda kare kalır.",
				"Süs fontu `ə` taşımaz. Başlığı onda tut, metni Arial yap.",
				"Kare olan eski PDF'i okuyucu düzeltmez. Kaynağı yeniden dışa aktar."
			],
			ar: [
				"في Python لا تستعمل Helvetica الجاهز. سجّل Arial أو Noto Sans وضمّنه في الملف.",
				"في Word، من ملف ثم خيارات ثم حفظ، فعّل تضمين الخطوط في الملف. ثم اكتب PDF.",
				"في LibreOffice ضمّن الخطوط القياسية عند تصدير PDF. وإلا يبقى المربع على حاسوب آخر.",
				"خط الزينة لا يحمل `ə`. أبقِ العنوان به واجعل النص Arial.",
				"القارئ لا يصلح PDF قديمًا فيه مربعات. صدّر المصدر من جديد."
			],
			ru: [
				"В Python не бери встроенную Helvetica. Зарегистрируй Arial или Noto Sans и встрой в файл.",
				"В Word: Файл, Параметры, Сохранение — включи встраивание шрифтов в файл. Потом запиши PDF.",
				"В LibreOffice при экспорте PDF встрой стандартные шрифты. Иначе квадрат останется на другом компьютере.",
				"Декоративный шрифт не содержит `ə`. Заголовок оставь в нём, текст поставь Arial.",
				"Читалка не чинит старый PDF, где квадраты уже есть. Экспортируй источник заново."
			]
		})
	},
	{
		slug: "mysql-e",
		code: `import pymysql

baglanti = pymysql.connect(
    host="127.0.0.1",
    user="root",
    password="",
    database="magaza",
    charset="utf8mb4",
)
`,
		piece: piece$1(L$1("MySQL-də ə hərfi sual işarəsi olur", "In MySQL the letter ə becomes a question mark", "MySQL'de ə harfi soru işareti olur", "في MySQL يصير حرف ə علامة سؤال", "В MySQL буква ə становится вопросительным знаком"), L$1("`ə` iki baytdır. Köhnə `utf8` onu saxlaya bilir. Pozulma çox vaxt bağlantıdandır: proqram mətni `latin1` kimi göndərir, sütun da `latin1`-dirsə hərf `?` olur.\n\nBazanı və bağlantını `utf8mb4` et. `latin1` yazma. Hərf artıq `?` olubsa, cədvəli dəyişmək onu qaytarmır.", "`ə` is two bytes. The old `utf8` can store it. The break usually comes from the connection: the program sends the text as `latin1`, and if the column is `latin1` too, the letter becomes `?`.\n\nMake the database and the connection `utf8mb4`. Do not write `latin1`. If the letter is already `?`, changing the table does not bring it back.", "`ə` iki bayttır. Eski `utf8` onu saklayabilir. Bozulma çoğu zaman bağlantıdandır: program metni `latin1` gibi gönderir, sütun da `latin1` ise harf `?` olur.\n\nVeritabanını ve bağlantıyı `utf8mb4` yap. `latin1` yazma. Harf çoktan `?` olduysa tabloyu değiştirmek onu geri getirmez.", "`ə` بايتان. الـ `utf8` القديم يستطيع حفظه. الفساد غالبًا من الاتصال: البرنامج يرسل النص كـ `latin1`، وإذا كان العمود `latin1` أيضًا صار الحرف `?`.\n\nاجعل القاعدة والاتصال `utf8mb4`. لا تكتب `latin1`. إذا صار الحرف `?` فتغيير الجدول لا يُرجعه.", "`ə` — это два байта. Старый `utf8` может её хранить. Поломка обычно из соединения: программа шлёт текст как `latin1`, и если столбец тоже `latin1`, буква становится `?`.\n\nСделай базу и соединение `utf8mb4`. Не пиши `latin1`. Если буква уже `?`, смена таблицы её не вернёт."), {
			az: [
				"Bazanı belə aç: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
				"Python-da `charset=\"utf8mb4\"` yaz. `charset=\"latin1\"` və boş charset `ə` hərfinı `?` edir.",
				"Köhnə sütun `latin1`-dirsə, əvvəl mətni ixrac et, sonra sütunu `utf8mb4` elə. Əks ardıcıllıq `?` saxlayır.",
				"`SET NAMES utf8mb4` bağlantı üçündür. Artıq yazılmış `?` simvolunu dəyişmir.",
				"Sıralama üçün MySQL 8-də `utf8mb4_az_0900_ai_ci` var. Adında `az` olan cədvəl `ə` hərfinı `e` ilə bir saymır."
			],
			en: [
				"Open the database like this: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
				"In Python write `charset=\"utf8mb4\"`. `charset=\"latin1\"` and an empty charset turn `ə` into `?`.",
				"If an old column is `latin1`, export the text first, then make the column `utf8mb4`. The other order keeps `?`.",
				"`SET NAMES utf8mb4` is for the connection. It does not change a `?` that is already stored.",
				"For sorting, MySQL 8 has `utf8mb4_az_0900_ai_ci`. A collation whose name contains `az` does not treat `ə` as `e`."
			],
			tr: [
				"Veritabanını şöyle aç: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
				"Python'da `charset=\"utf8mb4\"` yaz. `charset=\"latin1\"` ve boş charset `ə` harfini `?` yapar.",
				"Eski sütun `latin1` ise önce metni dışa aktar, sonra sütunu `utf8mb4` yap. Ters sıra `?` saklar.",
				"`SET NAMES utf8mb4` bağlantı içindir. Çoktan yazılmış `?` simgesini değiştirmez.",
				"Sıralama için MySQL 8'de `utf8mb4_az_0900_ai_ci` vardır. Adında `az` olan sıralama `ə` harfini `e` ile bir saymaz."
			],
			ar: [
				"افتح القاعدة هكذا: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
				"في Python اكتب `charset=\"utf8mb4\"`. و`charset=\"latin1\"` والترميز الفارغ يجعلان `ə` يصير `?`.",
				"إذا كان العمود القديم `latin1` فصدّر النص أولًا ثم اجعل العمود `utf8mb4`. الترتيب العكسي يُبقي `?`.",
				"`SET NAMES utf8mb4` للاتصال. لا يغيّر رمز `?` المكتوب أصلًا.",
				"للترتيب في MySQL 8 يوجد `utf8mb4_az_0900_ai_ci`. الترتيب الذي في اسمه `az` لا يعدّ `ə` كـ `e`."
			],
			ru: [
				"Открой базу так: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
				"В Python пиши `charset=\"utf8mb4\"`. `charset=\"latin1\"` и пустая кодировка превращают `ə` в `?`.",
				"Если старый столбец `latin1`, сначала выгрузи текст, потом сделай столбец `utf8mb4`. Обратный порядок оставляет `?`.",
				"`SET NAMES utf8mb4` для соединения. Уже записанный знак `?` он не меняет.",
				"Для сортировки в MySQL 8 есть `utf8mb4_az_0900_ai_ci`. Сопоставление, в имени которого есть `az`, не считает `ə` буквой `e`."
			]
		})
	},
	{
		slug: "sms-e",
		code: `XUSUSI = set("əƏöÖüÜğĞşŞçÇıİ")

def hisseler(metn: str) -> int:
    ucs = any(h in XUSUSI for h in metn)
    n = len(metn.encode("utf-16-le")) // 2
    if not ucs:
        return 1 if n <= 160 else (n + 152) // 153
    return 1 if n <= 70 else (n + 66) // 67

print(hisseler("a" * 100))
print(hisseler("ə" + "a" * 99))
`,
		piece: piece$1(L$1("SMS-də ə hərfi mesajı 70 simvola endirir", "In an SMS the letter ə cuts the message to 70 characters", "SMS'te ə harfi mesajı 70 karaktere indirir", "في الرسالة القصيرة حرف ə يُنزل الرسالة إلى 70 رمزًا", "В SMS буква ə укорачивает сообщение до 70 знаков"), L$1("Sadə latın hərfləri bir SMS-ə 160 simvol sığdırır. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç` və ya `ı` o cədvəldə yoxdur. Bir dənəsi bütün mesajı başqa cədvələ keçirir: limit 70 olur. Uzun mesajda hissələr 67 simvoldan bölünür.\n\nTürk operator cədvəli `ö`, `ü`, `ğ`, `ş`, `ç`, `ı` saxlaya bilər. `ə` orada da yoxdur. Əksər göndəriş qapıları türk cədvəlini açmır, ona görə bu hərflərin hamısı 70-ə salır.\n\nHərfi `e` ilə əvəz etmək sözü dəyişir. `əl` və `el` eyni deyil. Sayını əvvəl hesabla.", "Plain Latin letters fit 160 characters in one SMS. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç`, and `ı` are not in that table. One of them moves the whole message to another table: the limit becomes 70. In a long message the parts split at 67 characters.\n\nThe Turkish operator table can hold `ö`, `ü`, `ğ`, `ş`, `ç`, and `ı`. `ə` is not there either. Most sending gates do not turn on the Turkish table, so all of these letters drop the message to 70.\n\nReplacing the letter with `e` changes the word. `əl` and `el` are not the same. Count first.", "Düz Latin harfleri bir SMS'e 160 karakter sığdırır. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç` ya da `ı` o tabloda yoktur. Bir tanesi bütün mesajı başka tabloya geçirir: sınır 70 olur. Uzun mesajda parçalar 67 karakterden bölünür.\n\nTürk operatör tablosu `ö`, `ü`, `ğ`, `ş`, `ç`, `ı` tutabilir. `ə` orada da yoktur. Çoğu gönderim kapısı Türkçe tabloyu açmaz, onun için bu harflerin hepsi 70'e düşürür.\n\nHarfi `e` ile değiştirmek sözü değiştirir. `əl` ile `el` aynı değildir. Önce say.", "الحروف اللاتينية البسيطة تسع 160 رمزًا في رسالة واحدة. `ə` و`ö` و`ü` و`ğ` و`ş` و`ç` و`ı` ليست في ذلك الجدول. واحد منها ينقل الرسالة كلها إلى جدول آخر: يصير الحد 70. في الرسالة الطويلة تُقسم الأجزاء عند 67 رمزًا.\n\nجدول المشغّل التركي قد يحفظ `ö` و`ü` و`ğ` و`ş` و`ç` و`ı`. و`ə` ليست هناك أيضًا. أكثر بوابات الإرسال لا تفتح الجدول التركي، لذلك كل هذه الحروف تُنزل الرسالة إلى 70.\n\nاستبدال الحرف بـ `e` يغيّر الكلمة. `əl` و`el` ليستا واحدًا. احسب أولًا.", "Простые латинские буквы вмещают 160 знаков в одну SMS. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç` и `ı` в той таблице нет. Одной хватает, чтобы всё сообщение перешло в другую таблицу: предел становится 70. В длинном сообщении части делятся по 67 знаков.\n\nТурецкая таблица оператора может держать `ö`, `ü`, `ğ`, `ş`, `ç` и `ı`. Буквы `ə` нет и там. Большинство шлюзов турецкую таблицу не включают, поэтому все эти буквы сбрасывают сообщение на 70.\n\nЗамена буквы на `e` меняет слово. `əl` и `el` — не одно и то же. Сначала посчитай."), {
			az: [
				"Kod iki rəqəm yazır. `a` yüz dəfə bir hissədir. Əvvəlində `ə` olanda eyni yüz simvol iki hissədir.",
				"`ə` tək başına kifayətdir. Qalan hərflər latın olsa da mesaj 70-ə keçir.",
				"71 simvol iki hissədir. Sonrakı bölgü 67-dən gedir: 134-ə qədər iki hissə, 135 üç hissədir.",
				"Emoji də 70-ə salır və bəzən iki yer tutur. Bu sayğac onu ayrıca saymır.",
				"Hərfi silmək mətnin mənasını dəyişir. Göndərişdən əvvəl hissə sayını gör."
			],
			en: [
				"The code prints two numbers. One hundred `a` characters are one part. The same hundred characters with `ə` in front are two parts.",
				"`ə` alone is enough. The message goes to 70 even if the other letters are Latin.",
				"71 characters are two parts. After that the split is 67: up to 134 is two parts, 135 is three.",
				"An emoji also drops the message to 70 and sometimes takes two places. This counter does not count that separately.",
				"Removing the letter changes the meaning. See the part count before you send."
			],
			tr: [
				"Kod iki sayı yazar. Yüz tane `a` bir parçadır. Başına `ə` gelince aynı yüz karakter iki parçadır.",
				"`ə` tek başına yeter. Diğer harfler Latin olsa da mesaj 70'e geçer.",
				"71 karakter iki parçadır. Sonraki bölünme 67'dendir: 134'e kadar iki parça, 135 üç parçadır.",
				"Emoji de 70'e düşürür ve bazen iki yer tutar. Bu sayaç onu ayrı saymaz.",
				"Harfi silmek metnin anlamını değiştirir. Göndermeden önce parça sayısını gör."
			],
			ar: [
				"الرمز يطبع رقمين. مئة `a` جزء واحد. إذا جاءت `ə` في الأول فنفس المئة رمز جزءان.",
				"`ə` وحدها تكفي. الرسالة تنتقل إلى 70 ولو كانت بقية الحروف لاتينية.",
				"71 رمزًا جزءان. التقسيم بعده عند 67: حتى 134 جزءان، و135 ثلاثة.",
				"الرموز التعبيرية تُنزل الرسالة إلى 70 أيضًا وقد تأخذ مكانين. هذا العدّاد لا يحسب ذلك على حدة.",
				"حذف الحرف يغيّر المعنى. انظر عدد الأجزاء قبل الإرسال."
			],
			ru: [
				"Код печатает два числа. Сто букв `a` — это одна часть. Те же сто знаков с `ə` впереди — две части.",
				"Одной `ə` достаточно. Сообщение уходит на 70, даже если остальные буквы латинские.",
				"71 знак — это две части. Дальше деление по 67: до 134 две части, 135 — три.",
				"Эмодзи тоже сбрасывает сообщение на 70 и иногда занимает два места. Этот счётчик это отдельно не считает.",
				"Убирать букву — менять смысл. Перед отправкой посмотри число частей."
			]
		})
	},
	{
		slug: "java-e",
		code: `import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

byte[] bom = new byte[] {(byte) 0xEF, (byte) 0xBB, (byte) 0xBF};
byte[] metn = "ad\\nAzərbaycan\\n".getBytes(StandardCharsets.UTF_8);
byte[] fayl = new byte[bom.length + metn.length];
System.arraycopy(bom, 0, fayl, 0, bom.length);
System.arraycopy(metn, 0, fayl, bom.length, metn.length);
Files.write(Path.of("metn.csv"), fayl);
`,
		piece: piece$1(L$1("Java-da Excel üçün ə hərfi pozulur", "In Java the letter ə breaks for Excel", "Java'da Excel için ə harfi bozulur", "في Java يفسد حرف ə من أجل Excel", "В Java буква ə портится для Excel"), L$1("`FileWriter` faylı sistem cədvəli ilə yazır. Azərbaycan Windows-unda bu, çox vaxt `Cp1254`-dür. Orada `ə` yoxdur, hərf `?` olur.\n\n`Files.writeString` UTF-8 yazır, amma əvvələ üç bayt qoymur. Excel həmin faylı yenə sistem cədvəli ilə aça bilər. `ödəyici` o zaman `ödÉ™yici` kimi görünür.\n\nƏvvələ `EF BB BF` qoy. `Cp1254` yazma.", "`FileWriter` writes the file with the system table. On Azerbaijani Windows that is often `Cp1254`. `ə` is not there, so the letter becomes `?`.\n\n`Files.writeString` writes UTF-8, but it does not put three bytes at the start. Excel can still open that file with the system table. `ödəyici` then looks like `ödÉ™yici`.\n\nPut `EF BB BF` at the start. Do not write `Cp1254`.", "`FileWriter` dosyayı sistem tablosuyla yazar. Azerbaycan Windows'unda bu çoğu zaman `Cp1254`'tür. Orada `ə` yoktur, harf `?` olur.\n\n`Files.writeString` UTF-8 yazar ama başa üç bayt koymaz. Excel o dosyayı yine sistem tablosuyla açabilir. `ödəyici` o zaman `ödÉ™yici` gibi görünür.\n\nBaşa `EF BB BF` koy. `Cp1254` yazma.", "`FileWriter` يكتب الملف بجدول النظام. في Windows الأذربيجاني هذا غالبًا `Cp1254`. ليس فيه `ə`، فيصير الحرف `?`.\n\n`Files.writeString` يكتب UTF-8 لكنه لا يضع ثلاث بايتات في الأول. قد يفتح Excel ذلك الملف بجدول النظام أيضًا. فتبدو `ödəyici` كـ `ödÉ™yici`.\n\nضع `EF BB BF` في الأول. لا تكتب `Cp1254`.", "`FileWriter` пишет файл системной таблицей. На азербайджанском Windows это часто `Cp1254`. Буквы `ə` там нет, и она становится `?`.\n\n`Files.writeString` пишет UTF-8, но не ставит три байта в начало. Excel всё равно может открыть тот файл системной таблицей. Тогда `ödəyici` выглядит как `ödÉ™yici`.\n\nПоставь в начало `EF BB BF`. Не пиши `Cp1254`."), {
			az: [
				"CSV-ni yuxarıdakı üç baytla yaz. Excel `ə` hərfinı görür.",
				"`new FileWriter(\"metn.csv\")` yazma. Cədvəli özü seçir və `ə` itib.",
				"`Cp1254` və `windows-1254` hərfı saxlamır. UTF-8-dən başqa cədvəl seçmə.",
				"`Files.writeString` BOM qoymur. Brauzer üçün bəsdir, Excel üçün yox.",
				"Faylda hərf artıq `?` olubsa, Java onu qaytarmır. Mətni yenidən yaz."
			],
			en: [
				"Write the CSV with the three bytes above. Excel then sees `ə`.",
				"Do not write `new FileWriter(\"metn.csv\")`. It picks the table itself and `ə` is lost.",
				"`Cp1254` and `windows-1254` do not store the letter. Do not pick a table other than UTF-8.",
				"`Files.writeString` does not add a BOM. That is enough for a browser, not for Excel.",
				"If the letter in the file is already `?`, Java cannot bring it back. Write the text again."
			],
			tr: [
				"CSV'yi yukarıdaki üç baytla yaz. Excel o zaman `ə` harfini görür.",
				"`new FileWriter(\"metn.csv\")` yazma. Tabloyu kendi seçer ve `ə` gider.",
				"`Cp1254` ve `windows-1254` harfi saklamaz. UTF-8 dışında tablo seçme.",
				"`Files.writeString` BOM koymaz. Tarayıcı için yeter, Excel için yetmez.",
				"Dosyada harf çoktan `?` olduysa Java onu geri getirmez. Metni yeniden yaz."
			],
			ar: [
				"اكتب CSV بالبايتات الثلاث أعلاه. عندها يرى Excel حرف `ə`.",
				"لا تكتب `new FileWriter(\"metn.csv\")`. هو يختار الجدول بنفسه و`ə` تضيع.",
				"`Cp1254` و`windows-1254` لا يحفظان الحرف. لا تختر جدولًا غير UTF-8.",
				"`Files.writeString` لا يضع BOM. يكفي للمتصفح لا لـ Excel.",
				"إذا صار الحرف في الملف `?` فـ Java لا تُرجعه. اكتب النص من جديد."
			],
			ru: [
				"Пиши CSV с тремя байтами выше. Тогда Excel видит `ə`.",
				"Не пиши `new FileWriter(\"metn.csv\")`. Он сам выбирает таблицу, и `ə` теряется.",
				"`Cp1254` и `windows-1254` букву не хранят. Не выбирай таблицу кроме UTF-8.",
				"`Files.writeString` не ставит BOM. Для браузера хватает, для Excel нет.",
				"Если буква в файле уже `?`, Java её не вернёт. Напиши текст заново."
			]
		})
	},
	{
		slug: "php-e",
		code: `<?php
header("Content-Type: text/html; charset=utf-8");
$baglanti = new PDO(
    "mysql:host=127.0.0.1;dbname=magaza;charset=utf8mb4",
    "root",
    ""
);
echo "Azərbaycan";
`,
		piece: piece$1(L$1("PHP-də ə hərfi sual işarəsi olur", "In PHP the letter ə becomes a question mark", "PHP'de ə harfi soru işareti olur", "في PHP يصير حرف ə علامة سؤال", "В PHP буква ə становится вопросительным знаком"), L$1("İki yer ayrıdır. Səhifə brauzerə nə göndərdiyini deməlidir. Baza bağlantısı isə mətni necə yazdığını.\n\nBaşlıq yoxdursa brauzer səhifəni sistem cədvəli ilə oxuya bilər. Bağlantıda `charset` yoxdursa MySQL mətni `latin1` saya bilər. Hər iki yolda `ə` `?` olur.\n\nFaylın özü də UTF-8 saxlanmalıdır. PHP başlığı faylın içindəki baytı düzəltmir.", "Two places are separate. The page has to say what it sends to the browser. The database connection has to say how it writes the text.\n\nWithout the header the browser may read the page with the system table. Without `charset` on the connection MySQL may treat the text as `latin1`. On both paths `ə` becomes `?`.\n\nThe file itself must be saved as UTF-8. A PHP header does not repair the bytes inside the file.", "İki yer ayrıdır. Sayfa tarayıcıya ne gönderdiğini söylemeli. Veritabanı bağlantısı ise metni nasıl yazdığını.\n\nBaşlık yoksa tarayıcı sayfayı sistem tablosuyla okuyabilir. Bağlantıda `charset` yoksa MySQL metni `latin1` sayabilir. İki yolda da `ə` `?` olur.\n\nDosyanın kendisi de UTF-8 kaydedilmelidir. PHP başlığı dosyanın içindeki baytı düzeltmez.", "المكانان منفصلان. الصفحة يجب أن تقول ماذا ترسل إلى المتصفح. واتصال القاعدة يقول كيف يُكتب النص.\n\nبلا الترويسة قد يقرأ المتصفح الصفحة بجدول النظام. وبلا `charset` في الاتصال قد تعدّ MySQL النص `latin1`. في الطريقين يصير `ə` هو `?`.\n\nالملف نفسه يجب أن يُحفظ UTF-8. ترويسة PHP لا تصلح البايت داخل الملف.", "Два места разные. Страница должна сказать, что она шлёт браузеру. Соединение с базой — как оно пишет текст.\n\nБез заголовка браузер может прочитать страницу системной таблицей. Без `charset` в соединении MySQL может счесть текст `latin1`. На обоих путях `ə` становится `?`.\n\nСам файл тоже надо сохранить в UTF-8. Заголовок PHP не чинит байт внутри файла."), {
			az: [
				"Hər səhifənin əvvəlində `header(\"Content-Type: text/html; charset=utf-8\")` olsun.",
				"PDO sətrində `charset=utf8mb4` yaz. `charset` olmayan DSN `ə` hərfinı `?` edə bilər.",
				"`mysqli` işlədirsən, bağlantıdan sonra `mysqli_set_charset($baglanti, \"utf8mb4\")` çağır.",
				"`.php` faylını UTF-8 saxla. Redaktor ANSI seçibsə, hərf fayla düşməmiş olur.",
				"Cədvəldə hərf artıq `?` olubsa, başlığı dəyişmək onu qaytarmır. Sətri yenidən yaz."
			],
			en: [
				"At the start of each page put `header(\"Content-Type: text/html; charset=utf-8\")`.",
				"In the PDO string write `charset=utf8mb4`. A DSN without `charset` can turn `ə` into `?`.",
				"If you use `mysqli`, after connecting call `mysqli_set_charset($baglanti, \"utf8mb4\")`.",
				"Save the `.php` file as UTF-8. If the editor picked ANSI, the letter never entered the file.",
				"If the letter in the table is already `?`, changing the header does not bring it back. Write the row again."
			],
			tr: [
				"Her sayfanın başında `header(\"Content-Type: text/html; charset=utf-8\")` olsun.",
				"PDO satırında `charset=utf8mb4` yaz. `charset` olmayan DSN `ə` harfini `?` yapabilir.",
				"`mysqli` kullanıyorsan bağlantıdan sonra `mysqli_set_charset($baglanti, \"utf8mb4\")` çağır.",
				"`.php` dosyasını UTF-8 kaydet. Düzenleyici ANSI seçtiyse harf dosyaya hiç girmez.",
				"Tabloda harf çoktan `?` olduysa başlığı değiştirmek onu geri getirmez. Satırı yeniden yaz."
			],
			ar: [
				"في أول كل صفحة ضع `header(\"Content-Type: text/html; charset=utf-8\")`.",
				"في سطر PDO اكتب `charset=utf8mb4`. سلسلة بلا `charset` قد تجعل `ə` تصير `?`.",
				"إذا استعملت `mysqli` فبعد الاتصال استدعِ `mysqli_set_charset($baglanti, \"utf8mb4\")`.",
				"احفظ ملف `.php` كـ UTF-8. إذا اختار المحرر ANSI فالحرف لم يدخل الملف أصلًا.",
				"إذا صار الحرف في الجدول `?` فتغيير الترويسة لا يُرجعه. اكتب الصف من جديد."
			],
			ru: [
				"В начале каждой страницы поставь `header(\"Content-Type: text/html; charset=utf-8\")`.",
				"В строке PDO напиши `charset=utf8mb4`. DSN без `charset` может превратить `ə` в `?`.",
				"Если используешь `mysqli`, после соединения вызови `mysqli_set_charset($baglanti, \"utf8mb4\")`.",
				"Сохрани файл `.php` как UTF-8. Если редактор выбрал ANSI, буква в файл так и не попала.",
				"Если буква в таблице уже `?`, смена заголовка её не вернёт. Запиши строку заново."
			]
		})
	},
	{
		slug: "android-e",
		code: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="olke">Azərbaycan</string>
</resources>
`,
		piece: piece$1(L$1("Android-də ə hərfi sual işarəsi olur", "On Android the letter ə becomes a question mark", "Android'de ə harfi soru işareti olur", "في Android يصير حرف ə علامة سؤال", "На Android буква ə становится вопросительным знаком"), L$1("Mətn `res/values-az/strings.xml` içində durur. Fayl UTF-8 deyilsə, `ə` ya yığılma zamanı xəta verir, ya da telefonda `?` olur.\n\nHərfi kodla gizlətmək məcburi deyil. Fayl düz saxlanıbsa, sözün özü yazılır. Redaktor hərfi saxlaya bilmirsə, yerinə `\\u0259` qoymaq olar. Bu, eyni hərfdir.", "The text lives in `res/values-az/strings.xml`. If the file is not UTF-8, `ə` either fails the build or shows as `?` on the phone.\n\nYou do not have to hide the letter in an escape. If the file is saved correctly, the word itself is written. If the editor cannot store the letter, you can put `\\u0259` in its place. That is the same letter.", "Metin `res/values-az/strings.xml` içindedir. Dosya UTF-8 değilse `ə` ya derleme sırasında hata verir ya da telefonda `?` olur.\n\nHarfi kodla gizlemek zorunlu değildir. Dosya doğru kaydedildiyse sözün kendisi yazılır. Düzenleyici harfi saklayamıyorsa yerine `\\u0259` konabilir. Bu, aynı harftir.", "النص في `res/values-az/strings.xml`. إذا لم يكن الملف UTF-8 فـ `ə` إما تُفشل البناء أو تظهر `?` على الهاتف.\n\nليس واجبًا إخفاء الحرف برمز. إذا حُفظ الملف صحيحًا تُكتب الكلمة نفسها. إذا لم يستطع المحرر حفظ الحرف فضع `\\u0259` مكانه. هذا الحرف نفسه.", "Текст лежит в `res/values-az/strings.xml`. Если файл не UTF-8, `ə` либо ломает сборку, либо на телефоне становится `?`.\n\nПрятать букву в код не обязательно. Если файл сохранён верно, пишется само слово. Если редактор не может сохранить букву, на её место можно поставить `\\u0259`. Это та же буква."), {
			az: [
				"Faylı `res/values-az/strings.xml` qoy. Birinci sətir `encoding=\"utf-8\"` olsun.",
				"Notepad ANSI seçibsə, Android Studio-da faylı UTF-8 kimi yenidən saxla.",
				"`encoding=\"windows-1254\"` yazma. O cədvəl `ə` daşımır.",
				"Redaktor hərfi qəbul etmirsə, sözün içində `\\u0259` yaz. Ekranda yenə `ə` görünür.",
				"Tətbiq artıq qurulubsa və hərf `?`-dirsə, mətn paketə səhv düşüb. Faylı düzəldib yenidən qur."
			],
			en: [
				"Put the file at `res/values-az/strings.xml`. The first line should be `encoding=\"utf-8\"`.",
				"If Notepad picked ANSI, save the file again as UTF-8 in Android Studio.",
				"Do not write `encoding=\"windows-1254\"`. That table does not carry `ə`.",
				"If the editor will not take the letter, write `\\u0259` inside the word. The screen still shows `ə`.",
				"If the app is already installed and the letter is `?`, the text went into the package wrong. Fix the file and build again."
			],
			tr: [
				"Dosyayı `res/values-az/strings.xml` koy. İlk satır `encoding=\"utf-8\"` olsun.",
				"Notepad ANSI seçtiyse dosyayı Android Studio'da yeniden UTF-8 kaydet.",
				"`encoding=\"windows-1254\"` yazma. O tablo `ə` taşımaz.",
				"Düzenleyici harfi kabul etmiyorsa sözün içinde `\\u0259` yaz. Ekranda yine `ə` görünür.",
				"Uygulama kurulmuşsa ve harf `?` ise metin pakete yanlış düşmüştür. Dosyayı düzeltip yeniden derle."
			],
			ar: [
				"ضع الملف في `res/values-az/strings.xml`. السطر الأول يكون `encoding=\"utf-8\"`.",
				"إذا اختار Notepad‏ ANSI فاحفظ الملف من جديد كـ UTF-8 في Android Studio.",
				"لا تكتب `encoding=\"windows-1254\"`. ذلك الجدول لا يحمل `ə`.",
				"إذا رفض المحرر الحرف فاكتب `\\u0259` داخل الكلمة. الشاشة تُظهر `ə` أيضًا.",
				"إذا كان التطبيق مثبّتًا والحرف `?` فقد دخل النص الحزمة خطأ. أصلح الملف وابنِ من جديد."
			],
			ru: [
				"Положи файл в `res/values-az/strings.xml`. Первая строка пусть будет `encoding=\"utf-8\"`.",
				"Если Блокнот выбрал ANSI, сохрани файл заново как UTF-8 в Android Studio.",
				"Не пиши `encoding=\"windows-1254\"`. Та таблица не содержит `ə`.",
				"Если редактор не принимает букву, напиши внутри слова `\\u0259`. На экране всё равно будет `ə`.",
				"Если приложение уже стоит и буква `?`, текст попал в пакет неверно. Исправь файл и собери снова."
			]
		})
	},
	{
		slug: "qr-e",
		code: `import segno

segno.make("Azərbaycan", encoding="utf-8").save("kod.png", scale=8)
`,
		piece: piece$1(L$1("QR kod ə hərfinı qəbul etmir", "A QR code will not take the letter ə", "QR kod ə harfini kabul etmiyor", "رمز QR لا يقبل حرف ə", "QR-код не принимает букву ə"), L$1("Köhnə QR kitabxanası mətni `latin-1` ilə yazır. `ə` o cədvəldə yoxdur. Kitabxana ya xəta atır (`latin-1 codec can't encode`), ya da hərfin yerinə `?` qoyur.\n\nUTF-8 bayt rejimi hərfi saxlayır. Şəkil düzdürsə və köhnə oxuyucu `É™` göstərirsə, oxuyucu baytı səhv cədvəllə açır. İndiki telefon kamerası UTF-8 oxuyur.", "An old QR library writes the text as `latin-1`. `ə` is not in that table. The library either throws (`latin-1 codec can't encode`) or puts `?` in place of the letter.\n\nUTF-8 byte mode keeps the letter. If the picture is right and an old scanner shows `É™`, the scanner is opening the bytes with the wrong table. A current phone camera reads UTF-8.", "Eski bir QR kitaplığı metni `latin-1` ile yazar. `ə` o tabloda yoktur. Kitaplık ya hata verir (`latin-1 codec can't encode`) ya da harfin yerine `?` koyar.\n\nUTF-8 bayt kipi harfi saklar. Resim doğruysa ve eski okuyucu `É™` gösteriyorsa okuyucu baytı yanlış tabloyla açıyordur. Günümüz telefon kamerası UTF-8 okur.", "مكتبة QR قديمة تكتب النص بـ `latin-1`. حرف `ə` ليس في ذلك الجدول. المكتبة إما ترمي خطأ (`latin-1 codec can't encode`) أو تضع `?` مكان الحرف.\n\nوضع بايت UTF-8 يحفظ الحرف. إذا كانت الصورة صحيحة وأظهر قارئ قديم `É™` فالقارئ يفتح البايت بالجدول الخطأ. كاميرا الهاتف الحالية تقرأ UTF-8.", "Старая библиотека QR пишет текст как `latin-1`. Буквы `ə` в той таблице нет. Библиотека либо бросает ошибку (`latin-1 codec can't encode`), либо ставит `?` вместо буквы.\n\nБайтовый режим UTF-8 букву сохраняет. Если картинка верна, а старый сканер показывает `É™`, сканер открывает байты не той таблицей. Камера нынешнего телефона читает UTF-8."), {
			az: [
				"`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` hərfi şəklin içinə qoyur.",
				"`latin-1 codec can't encode` görsən, kitabxana `ə` qəbul etmir. Hərfi silmə, kitabxananı dəyiş.",
				"Mətndə hərf əvəzinə `?` varsa, şəkil artıq xarabdır. UTF-8 ilə yenidən yarat.",
				"Köhnə skaner `É™` göstərirsə, şəkil pozulmayıb. Skaner baytı səhv oxuyur.",
				"Linkin içindəki `ə` ünvanın hissəsidir. Onu da UTF-8 saxla, `e` ilə əvəz etmə."
			],
			en: [
				"`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` puts the letter inside the picture.",
				"If you see `latin-1 codec can't encode`, the library will not take `ə`. Do not delete the letter. Change the library.",
				"If the text has `?` instead of the letter, the picture is already broken. Make it again in UTF-8.",
				"If an old scanner shows `É™`, the picture is not broken. The scanner is reading the bytes wrong.",
				"An `ə` inside a link is part of the address. Keep that as UTF-8 too. Do not replace it with `e`."
			],
			tr: [
				"`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` harfi resmin içine koyar.",
				"`latin-1 codec can't encode` görürsen kitaplık `ə` kabul etmiyor. Harfi silme, kitaplığı değiştir.",
				"Metinde harf yerine `?` varsa resim çoktan bozuktur. UTF-8 ile yeniden üret.",
				"Eski tarayıcı `É™` gösteriyorsa resim bozulmamıştır. Tarayıcı baytı yanlış okur.",
				"Bağlantının içindeki `ə` adresin parçasıdır. Onu da UTF-8 tut, `e` ile değiştirme."
			],
			ar: [
				"`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` يضع الحرف داخل الصورة.",
				"إذا رأيت `latin-1 codec can't encode` فالمكتبة لا تقبل `ə`. لا تحذف الحرف. غيّر المكتبة.",
				"إذا كان في النص `?` بدل الحرف فالصورة فاسدة أصلًا. أعد صنعها بـ UTF-8.",
				"إذا أظهر ماسح قديم `É™` فالصورة ليست فاسدة. الماسح يقرأ البايت خطأ.",
				"`ə` داخل الرابط جزء من العنوان. أبقها UTF-8 أيضًا ولا تستبدلها بـ `e`."
			],
			ru: [
				"`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` кладёт букву внутрь картинки.",
				"Если видишь `latin-1 codec can't encode`, библиотека не принимает `ə`. Букву не удаляй, смени библиотеку.",
				"Если в тексте вместо буквы `?`, картинка уже испорчена. Создай её заново в UTF-8.",
				"Если старый сканер показывает `É™`, картинка не испорчена. Сканер неверно читает байты.",
				"`ə` внутри ссылки — часть адреса. Её тоже держи в UTF-8 и не заменяй на `e`."
			]
		})
	},
	{
		slug: "iban",
		code: `NUMUNE = "AZ84NABZ00000000137010002944"
# Eyni nümunədir. Yalnız son rəqəm dəyişib. Hesab deyil.
POZUK = "AZ84NABZ00000000137010002945"

def qaliq(iban: str) -> int:
    metn = iban.replace(" ", "").upper()
    if not (len(metn) == 28 and metn.startswith("AZ")):
        raise ValueError("format")
    kecmis = metn[4:] + metn[:4]
    reqem = "".join(str(ord(h) - 55) if h.isalpha() else h for h in kecmis)
    return int(reqem) % 97

print(qaliq(NUMUNE))
print(qaliq(POZUK))
`,
		piece: piece$1(L$1("Azərbaycan IBAN nümunəsi necə yoxlanır", "How to check the Azerbaijan IBAN sample", "Azerbaycan IBAN örneği nasıl yoklanır", "كيف يُفحص نموذج IBAN لأذربيجان", "Как проверяется образец IBAN Азербайджана"), L$1("Səhifədə bir nömrə var: `AZ84NABZ00000000137010002944`. Bu, Mərkəzi Bankın qaydasındakı hesablama nümunəsidir. Hesab deyil. Pul göndərilmir.\n\nİkinci sətir həmin nümunənin özüdür, yalnız son rəqəm dəyişib. O da hesab deyil.\n\nNümunə 28 simvoldur. `AZ` ölkədir. Sonrakı iki rəqəm nəzarətdir. Sonra dörd hərf gəlir. Qalan 20 simvol hesab yeridir. Qısa olanda əvvəlinə sıfır yazılır.\n\nYoxlama ISO 7064 qaydası ilədir, MOD 97-10. İlk dörd simvol sona keçir. Hərf rəqəm olur: `A` 10-dur, `Z` 35-dir. Alınan ədəd 97-yə bölünür. Qalıq 1-dirsə nəzarət rəqəmi düzdür. Bu, hesabın var olduğunu göstərmir.", "There is one number on this page: `AZ84NABZ00000000137010002944`. It is the calculation sample in the Central Bank's rule. It is not an account. No money is sent to it.\n\nThe second line is that same sample with only the last digit changed. That is not an account either.\n\nThe sample is 28 characters. `AZ` is the country. The next two digits are the check. Then come four letters. The remaining 20 characters are the account place. If it is short, zeros are written at the front.\n\nThe check follows ISO 7064, MOD 97-10. The first four characters move to the end. A letter becomes a number: `A` is 10, `Z` is 35. The resulting number is divided by 97. If the remainder is 1, the check digits are right. This does not show that an account exists.", "Sayfada bir numara var: `AZ84NABZ00000000137010002944`. Bu, Merkez Bankası kuralındaki hesaplama örneğidir. Hesap değildir. Para gönderilmez.\n\nİkinci satır aynı örneğin kendisidir, yalnızca son rakam değişmiştir. O da hesap değildir.\n\nÖrnek 28 simvoldur. `AZ` ülkedir. Sonraki iki rakam denetimdir. Sonra dört harf gelir. Kalan 20 simvol hesap yeridir. Kısa olunca başına sıfır yazılır.\n\nYoklama ISO 7064 kuralıyadır, MOD 97-10. İlk dört simvol sona geçer. Harf rakam olur: `A` 10'dur, `Z` 35'tir. Çıkan sayı 97'ye bölünür. Kalan 1 ise denetim rakamı doğrudur. Bu, hesabın var olduğunu göstermez.", "في الصفحة رقم واحد: `AZ84NABZ00000000137010002944`. هذا مثال الحساب المنشور في قاعدة البنك المركزي. ليس حسابًا. لا يُرسل إليه مال.\n\nالسطر الثاني هو النموذج نفسه، وتغيّر فيه الرقم الأخير فقط. وهو ليس حسابًا أيضًا.\n\nالنموذج 28 رمزًا. `AZ` هي البلد. الرقمان التاليان للتحقق. ثم تأتي أربعة أحرف. والرموز العشرون الباقية مكان الحساب. إذا قصُر يُكتب صفر في أوله.\n\nالفحص بقاعدة ISO 7064، أي MOD 97-10. الرموز الأربعة الأولى تنتقل إلى الآخر. الحرف يصير رقمًا: `A` هو 10، و`Z` هو 35. العدد الناتج يُقسم على 97. إذا كان الباقي 1 فأرقام التحقق صحيحة. هذا لا يُظهر أن الحساب موجود.", "На странице один номер: `AZ84NABZ00000000137010002944`. Это образец расчёта из правила Центрального банка. Это не счёт. Деньги на него не отправляют.\n\nВторая строка — тот же образец, изменена только последняя цифра. Это тоже не счёт.\n\nОбразец из 28 знаков. `AZ` — страна. Следующие две цифры — контроль. Потом идут четыре буквы. Остальные 20 знаков — место счёта. Если оно короткое, спереди пишут нули.\n\nПроверка по ISO 7064, MOD 97-10. Первые четыре знака уходят в конец. Буква становится числом: `A` это 10, `Z` это 35. Полученное число делят на 97. Если остаток 1, контрольные цифры верны. Это не показывает, что счёт существует."), {
			az: [
				"Kod əvvəl `1` yazır. Nümunənin nəzarət rəqəmi düzdür.",
				"İkinci rəqəm `28`-dir. Son simvol dəyişəndə qalıq 1 olmur. Səhv tutmaq üçün bu bəsdir.",
				"Nümunənin ortasındakı dörd hərf də nümunənin hissəsidir. Heç kimə köçürmə ünvanı deyil.",
				"Öz proqramında öz nömrəni yoxlaya bilərsən. Həmin nömrəni səhifəyə, çata və nümunəyə yazma.",
				"Qalıq 1 olsa belə bankdan yoxlamadan böyük məbləğ göndərmə. Forma düz ola bilər, hesab bağlı ola bilər."
			],
			en: [
				"The code first prints `1`. The sample's check digits are right.",
				"The second number is `28`. When the last character changes, the remainder is not 1. That is enough to catch a typo.",
				"The four letters in the middle of the sample are part of the sample. They are not an address to pay anyone.",
				"In your own program you can check your own number. Do not write that number on a page, in a chat, or into the sample.",
				"Even if the remainder is 1, do not send a large amount without checking with the bank. The form can be right and the account can be closed."
			],
			tr: [
				"Kod önce `1` yazar. Örneğin denetim rakamı doğrudur.",
				"İkinci sayı `28`'dir. Son simvol değişince kalan 1 olmaz. Yanlışı tutmak için bu yeter.",
				"Örneğin ortasındaki dört harf de örneğin parçasıdır. Kimseye aktarma adresi değildir.",
				"Kendi programında kendi numaranı yoklayabilirsin. O numarayı sayfaya, sohbete ve örneğe yazma.",
				"Kalan 1 olsa bile bankadan yoklamadan büyük tutar gönderme. Biçim doğru olabilir, hesap kapalı olabilir."
			],
			ar: [
				"الرمز يطبع `1` أولًا. أرقام التحقق في النموذج صحيحة.",
				"الرقم الثاني `28`. حين يتغيّر الرمز الأخير لا يكون الباقي 1. هذا يكفي لالتقاط الخطأ.",
				"الأحرف الأربعة في وسط النموذج جزء من النموذج. ليست عنوانًا لتحويل إلى أحد.",
				"في برنامجك يمكنك فحص رقمك. لا تكتب ذلك الرقم في صفحة ولا في محادثة ولا في النموذج.",
				"حتى لو كان الباقي 1 فلا ترسل مبلغًا كبيرًا بلا فحص من البنك. قد يصح الشكل ويكون الحساب مغلقًا."
			],
			ru: [
				"Код сначала печатает `1`. Контрольные цифры образца верны.",
				"Второе число — `28`. Когда последний знак меняется, остаток не 1. Этого хватает, чтобы поймать опечатку.",
				"Четыре буквы в середине образца — часть образца. Это не адрес, чтобы кому-то переводить.",
				"В своей программе можно проверить свой номер. Этот номер не пиши на страницу, в чат и в образец.",
				"Даже если остаток 1, не отправляй крупную сумму без проверки в банке. Форма может быть верной, а счёт закрыт."
			]
		})
	},
	{
		slug: "voen",
		code: `def forma(voen: str) -> str:
    metn = voen.replace(" ", "")
    if not (len(metn) == 10 and metn.isdigit()):
        raise ValueError("10 reqem")
    son = metn[9]
    if son == "1":
        return "huquqi"
    if son == "2":
        return "fiziki"
    raise ValueError("status")

# Verilməmiş nömrələrdir. Yalnız son rəqəmi göstərir.
print(forma("0000000001"))
print(forma("0000000002"))
`,
		piece: piece$1(L$1("VÖEN-in doqquzuncu rəqəmi hesablanmır", "The ninth digit of a VÖEN cannot be calculated", "VÖEN'in dokuzuncu rakamı hesaplanmaz", "الرقم التاسع في VÖEN لا يُحسب", "Девятую цифру VÖEN посчитать нельзя"), L$1("Vergi uçotu qaydası VÖEN-i on rəqəm sayır. İlk iki rəqəm ərazidir. Sonrakı altı rəqəm sıra nömrəsidir. Doqquzuncu rəqəmi vergi proqramı xüsusi alqoritmlə qoyur. Onuncu rəqəm statusdur.\n\nAlqoritm dərc olunmayıb. Proqram doqquzuncu rəqəmi düzəldə bilməz və onu yoxlaya da bilməz. Uydurma düstur yazmaq olmaz.\n\nSəhifədəki `0000000001` və `0000000002` verilmiş nömrə deyil. Heç kimin VÖEN-i deyil. Yalnız son rəqəmin yerini göstərir: `1` hüquqi şəxs, `2` fiziki şəxs.\n\nBəzi səhifələr eyni on rəqəmi 2+5+1+2 bölür və son iki rəqəmi status sayır. Qayda belə bölmür. Status bir rəqəmdir, onuncudur.", "The tax registration rule counts a VÖEN as ten digits. The first two digits are the territory. The next six digits are the serial number. The tax program sets the ninth digit with a special algorithm. The tenth digit is the status.\n\nThe algorithm is not published. A program cannot repair the ninth digit and cannot check it either. Do not write an invented formula.\n\n`0000000001` and `0000000002` on this page are not issued numbers. They are nobody's VÖEN. They only show the place of the last digit: `1` is a legal person, `2` is a natural person.\n\nSome pages split the same ten digits as 2+5+1+2 and treat the last two digits as the status. The rule does not split it that way. The status is one digit, the tenth.", "Vergi kayıt kuralı VÖEN'i on rakam sayar. İlk iki rakam bölgedir. Sonraki altı rakam sıra numarasıdır. Dokuzuncu rakamı vergi programı özel bir algoritmayla koyar. Onuncu rakam statüdür.\n\nAlgoritma yayımlanmamıştır. Program dokuzuncu rakamı düzeltemez ve onu yoklayamaz da. Uydurma formül yazılmaz.\n\nSayfadaki `0000000001` ve `0000000002` verilmiş numara değildir. Kimsenin VÖEN'i değildir. Yalnız son rakamın yerini gösterir: `1` tüzel kişi, `2` gerçek kişi.\n\nBazı sayfalar aynı on rakamı 2+5+1+2 böler ve son iki rakamı statü sayar. Kural böyle bölmez. Statü bir rakamdır, onuncusudur.", "قاعدة التسجيل الضريبي تعدّ VÖEN عشرة أرقام. الرقمان الأولان للمنطقة. والأرقام الستة التالية رقم تسلسلي. برنامج الضريبة يضع الرقم التاسع بخوارزمية خاصة. الرقم العاشر هو الصفة.\n\nالخوارزمية غير منشورة. البرنامج لا يستطيع إصلاح الرقم التاسع ولا فحصه. لا تُكتب معادلة مخترعة.\n\n`0000000001` و`0000000002` في هذه الصفحة ليسا رقمين صادرين. ليسا VÖEN لأحد. هما يُظهران مكان الرقم الأخير فقط: `1` شخص اعتباري، و`2` شخص طبيعي.\n\nبعض الصفحات تقسم العشرة نفسها 2+5+1+2 وتعدّ الرقمين الأخيرين صفة. القاعدة لا تقسم هكذا. الصفة رقم واحد، وهو العاشر.", "Правило налогового учёта считает VÖEN десятью цифрами. Первые две цифры — территория. Следующие шесть — порядковый номер. Девятую цифру налоговая программа ставит особым алгоритмом. Десятая цифра — статус.\n\nАлгоритм не опубликован. Программа не может починить девятую цифру и не может её проверить. Выдуманную формулу писать нельзя.\n\n`0000000001` и `0000000002` на этой странице — не выданные номера. Это ничей VÖEN. Они только показывают место последней цифры: `1` — юридическое лицо, `2` — физическое лицо.\n\nНекоторые страницы делят те же десять цифр как 2+5+1+2 и считают статусом две последние цифры. Правило так не делит. Статус — одна цифра, десятая."), {
			az: [
				"Kod `huquqi`, sonra `fiziki` yazır. Hər ikisi formadır. Nömrə verilməyib.",
				"Doqquz rəqəm və hərf `10 reqem` xətası verir. VÖEN-də hərf olmur.",
				"Son rəqəm `1` və `2`-dən başqadırsa, `status` xətası verir. Doqquzuncu rəqəm bu yoxlamada iştirak etmir.",
				"FİN başqa nömrədir. Yeddi işarədir və hərf ola bilər. Onu VÖEN yerinə yazma.",
				"Forma düz olsa da ödəyici aktiv olmaya bilər. Bunu vergi xidmətinin açıq axtarışı göstərir. Real VÖEN-i bu səhifəyə yazma."
			],
			en: [
				"The code prints `huquqi`, then `fiziki`. Both are only the form. The numbers were not issued.",
				"Nine digits or a letter raise `10 reqem`. A VÖEN has no letter.",
				"If the last digit is not `1` or `2`, the code raises `status`. The ninth digit takes no part in this check.",
				"A FİN is a different number. It has seven characters and may include a letter. Do not write it in place of a VÖEN.",
				"The form can be right and the taxpayer can still be inactive. The tax service's open search shows that. Do not write a real VÖEN on this page."
			],
			tr: [
				"Kod `huquqi`, sonra `fiziki` yazar. İkisi de yalnızca biçimdir. Numara verilmemiştir.",
				"Dokuz rakam ve harf `10 reqem` hatası verir. VÖEN'de harf olmaz.",
				"Son rakam `1` ve `2` dışında ise `status` hatası verir. Dokuzuncu rakam bu yoklamaya katılmaz.",
				"FİN başka bir numaradır. Yedi işarettir ve harf olabilir. Onu VÖEN yerine yazma.",
				"Biçim doğru olsa da mükellef aktif olmayabilir. Bunu vergi hizmetinin açık araması gösterir. Gerçek VÖEN'i bu sayfaya yazma."
			],
			ar: [
				"الرمز يطبع `huquqi` ثم `fiziki`. كلاهما شكل فقط. الرقمان لم يُصدرا.",
				"تسعة أرقام أو حرف يُعطي خطأ `10 reqem`. ليس في VÖEN حرف.",
				"إذا لم يكن الرقم الأخير `1` أو `2` فالرمز يُعطي خطأ `status`. الرقم التاسع لا يدخل في هذا الفحص.",
				"FİN رقم آخر. هو سبعة رموز وقد فيه حرف. لا تكتبه مكان VÖEN.",
				"قد يصح الشكل ويبقى المكلف غير نشط. بحث مصلحة الضرائب المفتوح يُظهر ذلك. لا تكتب VÖEN حقيقيًا في هذه الصفحة."
			],
			ru: [
				"Код печатает `huquqi`, потом `fiziki`. Оба ответа только про форму. Номера не выдавались.",
				"Девять цифр и буква дают ошибку `10 reqem`. В VÖEN буквы нет.",
				"Если последняя цифра не `1` и не `2`, код даёт ошибку `status`. Девятая цифра в этой проверке не участвует.",
				"FİN — другой номер. В нём семь знаков, и буква допустима. Не пиши его вместо VÖEN.",
				"Форма может быть верной, а плательщик неактивным. Это показывает открытый поиск налоговой. Настоящий VÖEN на эту страницу не пиши."
			]
		})
	}
];
/** Search-demand guides added Oct 2026: PDF→Word, phone PDF signing, free AI chats. */
var EXTRA_HOWS = [
	{
		slug: "pdf-word-cevirmek",
		links: [
			{
				"path": "/pdf/pdf-word",
				"label": {
					"az": "PDF-dən Word",
					"en": "PDF to Word",
					"tr": "PDF'den Word",
					"ar": "من PDF إلى Word",
					"ru": "PDF в Word"
				}
			},
			{
				"path": "/pdf/pdf-ocr",
				"label": {
					"az": "PDF OCR",
					"en": "PDF OCR",
					"tr": "PDF OCR",
					"ar": "PDF OCR",
					"ru": "PDF OCR"
				}
			},
			{
				"path": "/apps/nibras-pdf",
				"label": {
					"az": "Nibras PDF tətbiqi",
					"en": "Nibras PDF app",
					"tr": "Nibras PDF uygulaması",
					"ar": "تطبيق Nibras PDF",
					"ru": "Приложение Nibras PDF"
				}
			}
		],
		piece: {
			az: {
				title: "PDF-i Word-a pulsuz necə çevirmək olar",
				lead: "PDF faylını Word (DOCX) sənədinə pulsuz çevirmək üçün proqram qurmaq və hesab açmaq lazım deyil. Nibras Code saytındakı «PDF-dən Word» aləti faylı birbaşa brauzerdə oxuyur və DOCX faylı hazırlayır. Fayl serverə göndərilmir, iş sizin telefonunuzda və ya kompüterinizdə gedir.\n\nAlət PDF-dəki mətni və sətir keçidlərini Word-a köçürür. Şəkillər, cədvəllər və mürəkkəb düzülüş köçürülmür. Yəni nəticə redaktə etmək üçün təmiz mətndir, orijinalın eyni surəti deyil. Skan edilmiş PDF-də (şəkil kimi səhifələrdə) mətn qatı yoxdur. Belə halda alət OCR, yəni şəkildən mətn tanıma işə salır. OCR Azərbaycan, ingilis, rus, türk və ərəb mətnlərini tanıyır, amma pis skanda səhv hərf ola bilər.",
				points: [
					"1-ci addım: nibrascode.com/pdf/pdf-word səhifəsini açın.",
					"2-ci addım: PDF faylını seçin. Parol varsa, alət parolu soruşur.",
					"3-cü addım: çevirmə bitəndə DOCX düyməsinə basıb faylı endirin.",
					"4-cü addım: faylı Word, Google Docs və ya WPS-də açıb düzülüşü yoxlayın.",
					"Yalnız mətn lazımdırsa, «PDF-dən mətn» aləti TXT verir.",
					"Telefonda tez-tez işləyirsinizsə, Nibras PDF Android tətbiqində də PDF-dən Word və digər alətlər var."
				],
				note: "Rəsmi sənəddə (müqavilə, arayış) çevirmədən sonra rəqəmləri, adları və tarixləri orijinalla mütləq tutuşdurun. OCR ilə çıxan mətndə «ə», «ı», «ğ» kimi hərflər bəzən səhv tanınır."
			},
			en: {
				title: "How to convert PDF to Word for free",
				lead: "You do not need to install software or open an account to turn a PDF into a Word (DOCX) file. The PDF to Word tool on Nibras Code reads the file right in your browser and builds a DOCX file. The file is not sent to a server; the work happens on your phone or computer.\n\nThe tool moves the text and line breaks into Word. Images, tables and complex layout are not carried over. The result is clean text for editing, not an exact copy of the original. A scanned PDF (pages that are pictures) has no text layer, so the tool runs OCR, text recognition from images. OCR reads Azerbaijani, English, Russian, Turkish and Arabic, but a poor scan can produce wrong letters.",
				points: [
					"Step 1: open nibrascode.com/en/pdf/pdf-word.",
					"Step 2: choose the PDF. If it has a password, the tool asks for it.",
					"Step 3: when conversion ends, press DOCX and download the file.",
					"Step 4: open it in Word, Google Docs or WPS and check the layout.",
					"If you only need text, the PDF to text tool gives a TXT file.",
					"If you work on your phone a lot, the Nibras PDF Android app has PDF to Word and other tools too."
				],
				note: "For official papers (contracts, certificates) always compare numbers, names and dates with the original after converting. OCR text can misread letters such as «ə», «ı» or «ğ»."
			},
			tr: {
				title: "PDF'i Word'e ücretsiz nasıl çevirirsiniz",
				lead: "PDF dosyasını Word (DOCX) belgesine çevirmek için program kurmanız veya hesap açmanız gerekmez. Nibras Code'daki «PDF'den Word» aracı dosyayı doğrudan tarayıcıda okur ve DOCX dosyası hazırlar. Dosya sunucuya gönderilmez.\n\nAraç metni ve satır sonlarını aktarır. Resimler, tablolar ve karmaşık düzen aktarılmaz. Taranmış PDF'de araç OCR (resimden metin tanıma) kullanır.",
				points: [
					"nibrascode.com/tr/pdf/pdf-word sayfasını açın.",
					"PDF dosyasını seçin.",
					"DOCX düğmesine basıp indirin.",
					"Word veya Google Docs'ta açıp kontrol edin."
				],
				note: "Resmî belgelerde sayıları, adları ve tarihleri orijinalle karşılaştırın."
			},
			ar: {
				title: "كيف تحوّل PDF إلى Word مجانًا",
				lead: "لا تحتاج إلى تثبيت برنامج أو فتح حساب لتحويل PDF إلى ملف Word (DOCX). أداة «من PDF إلى Word» في Nibras Code تقرأ الملف داخل المتصفح وتصنع ملف DOCX، ولا يُرسل الملف إلى خادم.\n\nتنقل الأداة النص وفواصل الأسطر فقط. الصور والجداول والتنسيق المعقد لا تُنقل. في PDF الممسوح ضوئيًا تستخدم الأداة OCR للتعرف على النص من الصورة.",
				points: [
					"افتح nibrascode.com/ar/pdf/pdf-word.",
					"اختر ملف PDF.",
					"اضغط DOCX ونزّل الملف.",
					"افتحه في Word أو Google Docs وراجع التنسيق."
				],
				note: "في الأوراق الرسمية قارن الأرقام والأسماء والتواريخ بالأصل."
			},
			ru: {
				title: "Как бесплатно перевести PDF в Word",
				lead: "Чтобы превратить PDF в файл Word (DOCX), не нужно ставить программу или заводить аккаунт. Инструмент «PDF в Word» на Nibras Code читает файл прямо в браузере и собирает DOCX. Файл не отправляется на сервер.\n\nПереносятся текст и переносы строк. Картинки, таблицы и сложная вёрстка не переносятся. Для сканов инструмент включает OCR — распознавание текста с изображения.",
				points: [
					"Откройте nibrascode.com/ru/pdf/pdf-word.",
					"Выберите PDF.",
					"Нажмите DOCX и скачайте файл.",
					"Откройте в Word или Google Docs и проверьте вёрстку."
				],
				note: "В официальных документах сверяйте цифры, имена и даты с оригиналом."
			}
		}
	},
	{
		slug: "telefonda-pdf-imzalamaq",
		links: [
			{
				"path": "/pdf/sign",
				"label": {
					"az": "PDF imzala",
					"en": "Sign PDF",
					"tr": "PDF imzala",
					"ar": "توقيع PDF",
					"ru": "Подписать PDF"
				}
			},
			{
				"path": "/pdf/protect",
				"label": {
					"az": "PDF parol",
					"en": "Password protect PDF",
					"tr": "PDF şifre",
					"ar": "كلمة مرور PDF",
					"ru": "Пароль на PDF"
				}
			},
			{
				"path": "/apps/nibras-pdf",
				"label": {
					"az": "Nibras PDF tətbiqi",
					"en": "Nibras PDF app",
					"tr": "Nibras PDF uygulaması",
					"ar": "تطبيق Nibras PDF",
					"ru": "Приложение Nibras PDF"
				}
			}
		],
		piece: {
			az: {
				title: "Telefonda PDF necə imzalanır və doldurulur",
				lead: "Telefonda PDF-ə imza qoymaq üçün çap edib skan etmək lazım deyil. Nibras Code saytındakı «PDF imzala» aləti brauzerdə işləyir: imzanızı barmağınızla ekranda çəkirsiniz, sonra səhifəyə toxunub imzanı istədiyiniz yerə qoyursunuz. Fayl serverə yüklənmir, imzalanmış PDF telefonunuzda hazırlanır.\n\nBu, çəkilmiş imzanın şəkil kimi səhifəyə qoyulmasıdır. Hüquqi qüvvəsi olan elektron imza deyil. Azərbaycanda dövlət qurumları və bir çox şirkət gücləndirilmiş elektron imza (məsələn ASAN İmza və ya Elektron imza kartı) tələb edə bilər. Sənədi kimə göndərirsinizsə, hansı imzanı qəbul etdiyini əvvəlcədən soruşun.",
				points: [
					"1-ci addım: telefonda nibrascode.com/pdf/sign səhifəsini açın.",
					"2-ci addım: PDF faylını seçin.",
					"3-cü addım: imzanı barmaqla çəkin. Alınmasa, «Sil» basıb yenidən çəkin.",
					"4-cü addım: səhifə nömrəsini seçin, imza ölçüsünü tənzimləyin və səhifəyə toxunun.",
					"5-ci addım: imzalanmış PDF-i endirin və açıb yoxlayın.",
					"Formda doldurulacaq xanalar varsa, onları Adobe Acrobat Reader və ya Google Drive-ın PDF baxıcısı kimi form doldurmağı dəstəkləyən proqramda doldurun, sonra imzalayın."
				],
				note: "İmzanı sənəd tam doldurulandan sonra qoyun. Lazımdırsa, sonra «PDF parol» aləti ilə fayla parol qoya bilərsiniz."
			},
			en: {
				title: "How to sign and fill a PDF on your phone",
				lead: "You do not need to print and scan to sign a PDF on your phone. The Sign PDF tool on Nibras Code works in the browser: you draw your signature with a finger on the screen, then tap the page to place it where you want. The file is not uploaded; the signed PDF is built on your phone.\n\nThis places a drawn signature on the page as a picture. It is not a legally qualified electronic signature. In Azerbaijan, government offices and many companies may require a qualified e-signature such as ASAN İmza or an e-signature card. Ask the receiver which signature they accept before you send.",
				points: [
					"Step 1: on your phone, open nibrascode.com/en/pdf/sign.",
					"Step 2: choose the PDF.",
					"Step 3: draw your signature with a finger. If it looks wrong, press Erase and draw again.",
					"Step 4: pick the page, adjust the signature size and tap the page.",
					"Step 5: download the signed PDF and open it to check.",
					"If the form has fillable fields, fill them in an app that supports PDF forms, such as Adobe Acrobat Reader or the Google Drive PDF viewer, then sign."
				],
				note: "Sign after the document is fully filled. If needed, add a password afterwards with the Password protect PDF tool."
			},
			tr: {
				title: "Telefonda PDF nasıl imzalanır ve doldurulur",
				lead: "Telefonda PDF imzalamak için yazdırıp taramanız gerekmez. Nibras Code'daki «PDF imzala» aracı tarayıcıda çalışır: imzanızı parmakla çizer, sayfaya dokunarak yerleştirirsiniz. Dosya yüklenmez.\n\nBu, çizilmiş imzanın resim olarak eklenmesidir; nitelikli elektronik imza değildir.",
				points: [
					"nibrascode.com/tr/pdf/sign sayfasını açın.",
					"PDF'i seçin ve imzanızı çizin.",
					"Sayfaya dokunup imzayı yerleştirin.",
					"İmzalı PDF'i indirin."
				],
				note: "Doldurulabilir alanları önce PDF formlarını destekleyen bir uygulamada doldurun."
			},
			ar: {
				title: "كيف توقّع ملف PDF وتملؤه على الهاتف",
				lead: "لا تحتاج إلى الطباعة والمسح لتوقيع PDF على الهاتف. أداة «توقيع PDF» في Nibras Code تعمل في المتصفح: ترسم توقيعك بإصبعك ثم تضغط على الصفحة لوضعه. لا يُرفع الملف.\n\nهذا توقيع مرسوم يوضع كصورة، وليس توقيعًا إلكترونيًا معتمدًا قانونيًا.",
				points: [
					"افتح nibrascode.com/ar/pdf/sign.",
					"اختر الملف وارسم توقيعك.",
					"اضغط على الصفحة لوضع التوقيع.",
					"نزّل الملف الموقّع."
				],
				note: "املأ الحقول أولًا في تطبيق يدعم نماذج PDF ثم وقّع."
			},
			ru: {
				title: "Как подписать и заполнить PDF на телефоне",
				lead: "Чтобы подписать PDF на телефоне, не нужно печатать и сканировать. Инструмент «Подписать PDF» на Nibras Code работает в браузере: рисуете подпись пальцем и касанием ставите её на страницу. Файл не загружается.\n\nЭто нарисованная подпись в виде картинки, а не квалифицированная электронная подпись.",
				points: [
					"Откройте nibrascode.com/ru/pdf/sign.",
					"Выберите PDF и нарисуйте подпись.",
					"Коснитесь страницы, чтобы поставить подпись.",
					"Скачайте подписанный PDF."
				],
				note: "Заполняемые поля сначала заполните в приложении с поддержкой PDF-форм."
			}
		}
	},
	...[
		{
			"slug": "pdf-hecmini-kicilmek",
			"links": [
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
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF faylın həcmini necə kiçiltmək olar",
					"lead": "Sayt «fayl çox böyükdür» deyir? PDF-i kiçiltmək olar. Proqram qurmaq lazım deyil.\n\nNibras Code-un «PDF sıx» aləti brauzerdə işləyir. Fayl heç yerə yüklənmir.\n\nİki rejim var. Yüngül rejim faylın içini təmizləyir, mətn olduğu kimi qalır. Güclü rejim səhifələri şəkil kimi yenidən yığır. Fayl xeyli kiçilir, amma mətn seçilə bilmir.",
					"points": [
						"nibrascode.com/pdf/compress səhifəsini açın.",
						"PDF faylını seçin.",
						"Əvvəl yüngül rejimi sınayın.",
						"Bəs etməsə, güclü rejimə keçin.",
						"Yeni faylı endirin. Alət köhnə və yeni ölçünü göstərir."
					],
					"note": "Fayl onsuz da yığcamdırsa, kiçilməyə bilər. Bu halda alət orijinalı saxlayır."
				},
				"en": {
					"title": "How to reduce PDF file size",
					"lead": "A site says «file too large»? You can shrink the PDF. No install needed.\n\nThe Nibras Code Compress PDF tool runs in your browser. The file is not uploaded.\n\nThere are two modes. Light mode cleans up the file and keeps the text. Strong mode rebuilds pages as images. The file gets much smaller, but text can no longer be selected.",
					"points": [
						"Open nibrascode.com/en/pdf/compress.",
						"Choose the PDF.",
						"Try light mode first.",
						"If that is not enough, switch to strong mode.",
						"Download the new file. The tool shows the old and new size."
					],
					"note": "If the file is already compact, it may not shrink. Then the tool keeps the original."
				},
				"tr": {
					"title": "PDF dosya boyutu nasıl küçültülür",
					"lead": "PDF'i tarayıcıda küçültebilirsiniz. Dosya yüklenmez.\n\nHafif mod metni korur. Güçlü mod sayfaları resim yapar, metin seçilemez.",
					"points": [
						"nibrascode.com/tr/pdf/compress açın.",
						"PDF seçin.",
						"Önce hafif modu deneyin.",
						"Dosyayı indirin."
					],
					"note": "Dosya zaten küçükse küçülmeyebilir."
				},
				"ar": {
					"title": "كيف تصغّر حجم ملف PDF",
					"lead": "يمكنك تصغير PDF داخل المتصفح. لا يُرفع الملف.\n\nالوضع الخفيف يحفظ النص. الوضع القوي يحوّل الصفحات إلى صور فلا يمكن تحديد النص.",
					"points": [
						"افتح nibrascode.com/ar/pdf/compress.",
						"اختر الملف.",
						"جرّب الوضع الخفيف أولًا.",
						"نزّل الملف."
					],
					"note": "إذا كان الملف صغيرًا أصلًا فقد لا يصغر."
				},
				"ru": {
					"title": "Как уменьшить размер PDF",
					"lead": "PDF можно сжать прямо в браузере. Файл не загружается.\n\nЛёгкий режим сохраняет текст. Сильный превращает страницы в картинки, текст нельзя выделить.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/compress.",
						"Выберите PDF.",
						"Сначала попробуйте лёгкий режим.",
						"Скачайте файл."
					],
					"note": "Если файл уже компактный, он может не уменьшиться."
				}
			}
		},
		{
			"slug": "sekli-pdf-cevirmek",
			"links": [
				{
					"path": "/pdf/image-pdf",
					"label": {
						"az": "JPG-dən PDF",
						"en": "JPG to PDF",
						"tr": "JPG'den PDF",
						"ar": "من JPG إلى PDF",
						"ru": "JPG в PDF"
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
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Şəkli PDF-ə necə çevirmək olar (telefonda)",
					"lead": "Sənədin, vəsiqənin və ya qəbzin şəklini PDF etmək lazımdır? Telefonda bir neçə saniyəyə olur.\n\n«JPG-dən PDF» aləti JPG və PNG şəkilləri bir PDF faylına yığır. Hamısı brauzerdə gedir, şəkillər yüklənmir.",
					"points": [
						"nibrascode.com/pdf/image-pdf səhifəsini açın.",
						"Şəkilləri seçin. Bir neçəsini birdən seçmək olar.",
						"Sıranı yoxlayın.",
						"PDF-i endirin."
					],
					"note": "Şəkli çəkəndə işıqlı yerdə, düz yuxarıdan çəkin. Kölgə və əyri kadr oxunmanı çətinləşdirir."
				},
				"en": {
					"title": "How to turn a photo into a PDF on your phone",
					"lead": "Need a PDF of a document, ID or receipt photo? On a phone it takes seconds.\n\nThe JPG to PDF tool puts JPG and PNG pictures into one PDF. It all runs in the browser, and the pictures are not uploaded.",
					"points": [
						"Open nibrascode.com/en/pdf/image-pdf.",
						"Choose the pictures. You can pick several at once.",
						"Check the order.",
						"Download the PDF."
					],
					"note": "Take the photo in good light, straight from above. Shadows and tilted shots are harder to read."
				},
				"tr": {
					"title": "Telefonda resmi PDF'e çevirme",
					"lead": "JPG ve PNG resimleri tek PDF yapın. Tarayıcıda çalışır, resimler yüklenmez.",
					"points": [
						"nibrascode.com/tr/pdf/image-pdf açın.",
						"Resimleri seçin.",
						"Sırayı kontrol edin.",
						"PDF'i indirin."
					],
					"note": "Işıklı yerde, düz çekin."
				},
				"ar": {
					"title": "تحويل الصورة إلى PDF على الهاتف",
					"lead": "اجمع صور JPG وPNG في ملف PDF واحد داخل المتصفح، دون رفع الصور.",
					"points": [
						"افتح nibrascode.com/ar/pdf/image-pdf.",
						"اختر الصور.",
						"راجع الترتيب.",
						"نزّل الملف."
					],
					"note": "صوّر في ضوء جيد ومن الأعلى مباشرة."
				},
				"ru": {
					"title": "Как превратить фото в PDF на телефоне",
					"lead": "Соберите JPG и PNG в один PDF прямо в браузере. Фото не загружаются.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/image-pdf.",
						"Выберите фото.",
						"Проверьте порядок.",
						"Скачайте PDF."
					],
					"note": "Снимайте при хорошем свете, ровно сверху."
				}
			}
		},
		{
			"slug": "skandan-metn-cixarmaq",
			"links": [
				{
					"path": "/pdf/pdf-ocr",
					"label": {
						"az": "PDF OCR",
						"en": "PDF OCR",
						"tr": "PDF OCR",
						"ar": "PDF OCR",
						"ru": "PDF OCR"
					}
				},
				{
					"path": "/pdf/pdf-word",
					"label": {
						"az": "PDF-dən Word",
						"en": "PDF to Word",
						"tr": "PDF'den Word",
						"ar": "من PDF إلى Word",
						"ru": "PDF в Word"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Skan edilmiş sənəddən mətni necə çıxarmaq olar (OCR)",
					"lead": "Skan və ya şəkil olan səhifədə mətni kopyalamaq olmur. Çünki orada mətn yox, şəkil var.\n\nOCR şəkildəki hərfləri tanıyıb mətnə çevirir. Nibras Code-un OCR aləti bunu brauzerdə, telefonunuzda və ya kompüterinizdə edir. Fayl serverə getmir.\n\nAzərbaycan, ingilis, rus, türk və ərəb dillərini tanıyır.",
					"points": [
						"nibrascode.com/pdf/pdf-ocr səhifəsini açın.",
						"Skan PDF-i və ya şəkli seçin.",
						"Tanıma bitənə qədər gözləyin. İlk dəfə dil faylları yüklənir.",
						"Mətni kopyalayın və ya TXT/DOCX kimi endirin."
					],
					"note": "Alət etibarlılıq faizini göstərir. Faiz aşağıdırsa, «ə», «ı», «ğ» kimi hərfləri yoxlayın."
				},
				"en": {
					"title": "How to get text from a scanned document (OCR)",
					"lead": "On a scan or photo you cannot copy text. The page is a picture, not text.\n\nOCR reads the letters in the picture and turns them into text. The Nibras Code OCR tool does this in your browser, on your phone or computer. The file does not go to a server.\n\nIt reads Azerbaijani, English, Russian, Turkish and Arabic.",
					"points": [
						"Open nibrascode.com/en/pdf/pdf-ocr.",
						"Choose a scanned PDF or a picture.",
						"Wait for recognition. The first time, language files load.",
						"Copy the text or download it as TXT/DOCX."
					],
					"note": "The tool shows a confidence percent. If it is low, check letters such as «ə», «ı» and «ğ»."
				},
				"tr": {
					"title": "Taranmış belgeden metin çıkarma (OCR)",
					"lead": "OCR resimdeki harfleri metne çevirir. Araç tarayıcıda çalışır, dosya yüklenmez.",
					"points": [
						"nibrascode.com/tr/pdf/pdf-ocr açın.",
						"PDF veya resim seçin.",
						"Bekleyin.",
						"Metni kopyalayın veya indirin."
					],
					"note": "Güven yüzdesi düşükse metni kontrol edin."
				},
				"ar": {
					"title": "استخراج النص من مستند ممسوح (OCR)",
					"lead": "OCR يقرأ الحروف في الصورة ويحوّلها إلى نص. تعمل الأداة في المتصفح ولا يُرفع الملف، وتدعم العربية.",
					"points": [
						"افتح nibrascode.com/ar/pdf/pdf-ocr.",
						"اختر PDF أو صورة.",
						"انتظر التعرف.",
						"انسخ النص أو نزّله."
					],
					"note": "إذا كانت نسبة الثقة منخفضة فراجع النص."
				},
				"ru": {
					"title": "Как достать текст из скана (OCR)",
					"lead": "OCR распознаёт буквы на картинке и делает из них текст. Работает в браузере, файл не загружается.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/pdf-ocr.",
						"Выберите PDF или фото.",
						"Подождите.",
						"Скопируйте или скачайте текст."
					],
					"note": "При низкой уверенности проверьте текст."
				}
			}
		},
		{
			"slug": "pdf-parol-qoymaq",
			"links": [
				{
					"path": "/pdf/protect",
					"label": {
						"az": "PDF parol",
						"en": "Password protect PDF",
						"tr": "PDF şifre",
						"ar": "كلمة مرور PDF",
						"ru": "Пароль на PDF"
					}
				},
				{
					"path": "/pdf/sign",
					"label": {
						"az": "PDF imzala",
						"en": "Sign PDF",
						"tr": "PDF imzala",
						"ar": "توقيع PDF",
						"ru": "Подписать PDF"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-ə necə parol qoymaq olar",
					"lead": "Maaş vərəqəsi, bank çıxarışı və ya şəxsi sənəd göndərirsiniz? Parol qoyun. Faylı yalnız parolu bilən açacaq.\n\n«PDF parol» aləti faylı AES-128 ilə şifrələyir. İş brauzerdə gedir, fayl və parol heç yerə göndərilmir.",
					"points": [
						"nibrascode.com/pdf/protect səhifəsini açın.",
						"PDF faylını seçin.",
						"Parolu yazın.",
						"Qorunan PDF-i endirin."
					],
					"note": "Parolu yadda saxlayın. Unutsanız, bərpa etmək olmur. Parolu faylla eyni mesajda göndərməyin."
				},
				"en": {
					"title": "How to put a password on a PDF",
					"lead": "Sending a payslip, bank statement or personal paper? Add a password. Only someone who knows it can open the file.\n\nThe Password protect PDF tool encrypts the file with AES-128. It runs in the browser; the file and password are not sent anywhere.",
					"points": [
						"Open nibrascode.com/en/pdf/protect.",
						"Choose the PDF.",
						"Type the password.",
						"Download the protected PDF."
					],
					"note": "Keep the password. If you forget it, it cannot be recovered. Do not send the password in the same message as the file."
				},
				"tr": {
					"title": "PDF'e şifre nasıl konur",
					"lead": "Araç dosyayı AES-128 ile şifreler. Tarayıcıda çalışır, dosya ve şifre gönderilmez.",
					"points": [
						"nibrascode.com/tr/pdf/protect açın.",
						"PDF seçin.",
						"Şifre yazın.",
						"İndirin."
					],
					"note": "Şifreyi unutursanız kurtarılamaz."
				},
				"ar": {
					"title": "كيف تضع كلمة مرور على PDF",
					"lead": "تشفّر الأداة الملف بـ AES-128 داخل المتصفح، ولا يُرسل الملف أو كلمة المرور.",
					"points": [
						"افتح nibrascode.com/ar/pdf/protect.",
						"اختر الملف.",
						"اكتب كلمة المرور.",
						"نزّل الملف."
					],
					"note": "إذا نسيت كلمة المرور فلا يمكن استرجاعها."
				},
				"ru": {
					"title": "Как поставить пароль на PDF",
					"lead": "Инструмент шифрует файл AES-128 в браузере. Файл и пароль никуда не отправляются.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/protect.",
						"Выберите PDF.",
						"Введите пароль.",
						"Скачайте файл."
					],
					"note": "Забытый пароль восстановить нельзя."
				}
			}
		},
		{
			"slug": "pdf-birlesdirmek",
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
					"path": "/pdf/image-pdf",
					"label": {
						"az": "JPG-dən PDF",
						"en": "JPG to PDF",
						"tr": "JPG'den PDF",
						"ar": "من JPG إلى PDF",
						"ru": "JPG в PDF"
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
					"title": "Bir neçə PDF-i necə birləşdirmək olar",
					"lead": "Müraciət üçün vəsiqə, diplom və arayışı bir fayl kimi göndərmək lazımdır? PDF-ləri birləşdirin.\n\n«PDF birləşdir» aləti faylları brauzerdə bir PDF-ə yığır. Heç nə yüklənmir, hesab lazım deyil.",
					"points": [
						"nibrascode.com/pdf/merge səhifəsini açın.",
						"PDF faylları seçin.",
						"Sıranı istədiyiniz kimi düzün.",
						"Birləşmiş faylı endirin."
					],
					"note": "Şəkilləriniz də varsa, əvvəl «JPG-dən PDF» ilə onları PDF edin, sonra birləşdirin. Fayl böyük çıxsa, «PDF sıx» ilə kiçildin."
				},
				"en": {
					"title": "How to merge several PDFs",
					"lead": "Need to send an ID, diploma and certificate as one file? Merge the PDFs.\n\nThe Merge PDF tool joins files into one PDF in the browser. Nothing is uploaded and no account is needed.",
					"points": [
						"Open nibrascode.com/en/pdf/merge.",
						"Choose the PDF files.",
						"Put them in the order you want.",
						"Download the merged file."
					],
					"note": "Have photos too? Turn them into a PDF with JPG to PDF first, then merge. If the result is big, shrink it with Compress PDF."
				},
				"tr": {
					"title": "Birden fazla PDF nasıl birleştirilir",
					"lead": "Araç dosyaları tarayıcıda tek PDF yapar. Yükleme yok, hesap yok.",
					"points": [
						"nibrascode.com/tr/pdf/merge açın.",
						"Dosyaları seçin.",
						"Sıralayın.",
						"İndirin."
					],
					"note": "Büyük çıkarsa PDF sıkıştır aracını kullanın."
				},
				"ar": {
					"title": "كيف تدمج عدة ملفات PDF",
					"lead": "تجمع الأداة الملفات في PDF واحد داخل المتصفح، دون رفع ودون حساب.",
					"points": [
						"افتح nibrascode.com/ar/pdf/merge.",
						"اختر الملفات.",
						"رتّبها.",
						"نزّل الملف."
					],
					"note": "إذا كبر الملف فاستخدم أداة الضغط."
				},
				"ru": {
					"title": "Как объединить несколько PDF",
					"lead": "Инструмент собирает файлы в один PDF прямо в браузере. Без загрузки и аккаунта.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/merge.",
						"Выберите файлы.",
						"Расставьте порядок.",
						"Скачайте результат."
					],
					"note": "Если файл большой, сожмите его."
				}
			}
		},
		{
			"slug": "wifi-qr-kod",
			"links": [{
				"path": "/wifi",
				"label": {
					"az": "Wi-Fi QR",
					"en": "Wi-Fi QR",
					"tr": "Wi-Fi QR",
					"ar": "Wi-Fi QR",
					"ru": "Wi-Fi QR"
				}
			}, {
				"path": "/qr",
				"label": {
					"az": "QR kod",
					"en": "QR code",
					"tr": "QR kod",
					"ar": "رمز QR",
					"ru": "QR-код"
				}
			}],
			"piece": {
				"az": {
					"title": "Wi-Fi şifrəsini QR kodla necə paylaşmaq olar",
					"lead": "Qonaq gəlib, Wi-Fi şifrəsini soruşur? Uzun şifrəni diktə etmək əvəzinə QR kod göstərin.\n\nNibras Code-un Wi-Fi QR aləti şəbəkə adını və şifrəni QR koda çevirir. Kod brauzerdə yaranır, şifrə heç yerə göndərilmir.",
					"points": [
						"nibrascode.com/wifi səhifəsini açın.",
						"Şəbəkə adını yazın.",
						"Şifrəni yazın və qorunma növünü seçin: WPA, WEP və ya şifrəsiz.",
						"QR kodu endirin, çap edin və ya ekranda göstərin.",
						"Qonaq telefon kamerası ilə skan edib qoşulur."
					],
					"note": "Şəbəkə adını hərfi-hərfinə yazın. Böyük-kiçik hərf fərqi qoşulmanı pozur."
				},
				"en": {
					"title": "How to share Wi-Fi with a QR code",
					"lead": "A guest asks for the Wi-Fi password? Show a QR code instead of spelling out a long password.\n\nThe Nibras Code Wi-Fi QR tool turns the network name and password into a QR code. The code is made in the browser; the password is not sent anywhere.",
					"points": [
						"Open nibrascode.com/en/wifi.",
						"Type the network name.",
						"Type the password and choose the security: WPA, WEP or none.",
						"Download, print or show the QR code.",
						"The guest scans it with the phone camera and joins."
					],
					"note": "Type the network name exactly. Upper and lower case matter."
				},
				"tr": {
					"title": "Wi-Fi şifresini QR kodla paylaşma",
					"lead": "Ağ adı ve şifreyi QR koda çevirin. Kod tarayıcıda oluşur, şifre gönderilmez.",
					"points": [
						"nibrascode.com/tr/wifi açın.",
						"Ağ adı ve şifreyi yazın.",
						"Koruma türünü seçin.",
						"QR'ı gösterin."
					],
					"note": "Ağ adını aynen yazın."
				},
				"ar": {
					"title": "مشاركة Wi-Fi برمز QR",
					"lead": "حوّل اسم الشبكة وكلمة المرور إلى رمز QR داخل المتصفح، ولا تُرسل كلمة المرور.",
					"points": [
						"افتح nibrascode.com/ar/wifi.",
						"اكتب اسم الشبكة وكلمة المرور.",
						"اختر نوع الحماية.",
						"اعرض الرمز."
					],
					"note": "اكتب اسم الشبكة كما هو تمامًا."
				},
				"ru": {
					"title": "Как поделиться Wi-Fi через QR-код",
					"lead": "Имя сети и пароль превращаются в QR-код прямо в браузере. Пароль никуда не уходит.",
					"points": [
						"Откройте nibrascode.com/ru/wifi.",
						"Введите имя сети и пароль.",
						"Выберите защиту.",
						"Покажите QR-код."
					],
					"note": "Имя сети вводите точно, с учётом регистра."
				}
			}
		},
		{
			"slug": "telefonda-python",
			"links": [
				{
					"path": "/nece/python-ilk-proqram",
					"label": {
						"az": "İlk Python proqramı",
						"en": "First Python program",
						"tr": "İlk Python programı",
						"ar": "أول برنامج Python",
						"ru": "Первая программа Python"
					}
				},
				{
					"path": "/programming/javascript-sual-termux",
					"label": {
						"az": "Termux bələdçisi",
						"en": "Termux guide",
						"tr": "Termux rehberi",
						"ar": "دليل Termux",
						"ru": "Гайд по Termux"
					}
				},
				{
					"path": "/programming",
					"label": {
						"az": "Proqramlaşdırma dərsləri",
						"en": "Programming lessons",
						"tr": "Programlama dersleri",
						"ar": "دروس البرمجة",
						"ru": "Уроки программирования"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Python-u telefonda necə işlətmək olar",
					"lead": "Kompüter yoxdur? Python-u Android telefonda da öyrənmək olar.\n\nƏn rahat yol Termux tətbiqidir. Termux telefonda Linux terminalı açır. Ora Python qurulur və kodu birbaşa işlədirsiniz.\n\nTermux-u F-Droid və ya rəsmi GitHub səhifəsindən yükləyin. Termux layihəsi bu iki mənbəni tövsiyə edir.",
					"points": [
						"Termux-u açın və `pkg update` yazın.",
						"`pkg install python` ilə Python qurun.",
						"`python --version` ilə yoxlayın.",
						"`nano salam.py` ilə fayl açın və `print(\"Salam\")` yazın.",
						"`python salam.py` ilə işə salın."
					],
					"note": "Termux-da ekran klaviaturası kiçikdir. Uzun kod üçün Bluetooth klaviatura işinizi asanlaşdırır."
				},
				"en": {
					"title": "How to run Python on your phone",
					"lead": "No computer? You can learn Python on an Android phone too.\n\nThe easiest way is the Termux app. Termux opens a Linux terminal on the phone. You install Python there and run code directly.\n\nGet Termux from F-Droid or its official GitHub page. The Termux project recommends these two sources.",
					"points": [
						"Open Termux and type `pkg update`.",
						"Install Python with `pkg install python`.",
						"Check with `python --version`.",
						"Open a file with `nano hello.py` and write `print(\"Hello\")`.",
						"Run it with `python hello.py`."
					],
					"note": "The on-screen keyboard in Termux is small. A Bluetooth keyboard helps with longer code."
				},
				"tr": {
					"title": "Telefonda Python nasıl çalıştırılır",
					"lead": "Android'de Termux uygulamasıyla Python kurulabilir. Termux'u F-Droid'den indirin.",
					"points": [
						"`pkg update` yazın.",
						"`pkg install python` ile kurun.",
						"`python --version` ile kontrol edin.",
						"`python dosya.py` ile çalıştırın."
					],
					"note": "Uzun kod için Bluetooth klavye kullanın."
				},
				"ar": {
					"title": "كيف تشغّل Python على الهاتف",
					"lead": "على أندرويد يمكن تثبيت Python عبر تطبيق Termux. نزّل Termux من F-Droid.",
					"points": [
						"اكتب `pkg update`.",
						"ثبّت بـ `pkg install python`.",
						"تحقق بـ `python --version`.",
						"شغّل بـ `python file.py`."
					],
					"note": "لوحة مفاتيح بلوتوث تسهّل الكود الطويل."
				},
				"ru": {
					"title": "Как запустить Python на телефоне",
					"lead": "На Android Python ставится через приложение Termux. Качайте Termux с F-Droid.",
					"points": [
						"Наберите `pkg update`.",
						"Установите `pkg install python`.",
						"Проверьте `python --version`.",
						"Запустите `python file.py`."
					],
					"note": "Для длинного кода удобна Bluetooth-клавиатура."
				}
			}
		}
	],
	...[
		{
			"slug": "pdf-bolmek",
			"links": [
				{
					"path": "/pdf/split",
					"label": {
						"az": "PDF böl",
						"en": "Split PDF",
						"tr": "PDF böl",
						"ar": "تقسيم PDF",
						"ru": "Разделить PDF"
					}
				},
				{
					"path": "/pdf/extract-pages",
					"label": {
						"az": "Səhifə seç və çıxar",
						"en": "Extract pages",
						"tr": "Sayfa çıkar",
						"ar": "استخراج صفحات",
						"ru": "Извлечь страницы"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF faylı necə bölmək olar",
					"lead": "Böyük PDF-dən yalnız bir neçə səhifə lazımdır? Və ya faylı hissələrə ayırıb ayrı-ayrı göndərmək istəyirsiniz? PDF-i bölün.\n\nNibras Code-un «PDF böl» aləti brauzerdə işləyir. Fayl serverə yüklənmir, hesab lazım deyil.\n\nDörd yol var. Seçilmiş səhifələrdən bir fayl düzəltmək. Hər N səhifədən bir fayl. Hər səhifəni ayrıca fayl etmək. Və öz aralıqlarınızı yazıb ayrı fayllar almaq.",
					"points": [
						"nibrascode.com/pdf/split səhifəsini açın.",
						"PDF faylını seçin.",
						"Bölmə yolunu seçin. Səhifələri «2, 5-7» kimi yaza və ya kiçik şəkillərə toxuna bilərsiniz.",
						"«Başla» düyməsini basın. Alət özü işə düşmür.",
						"Faylı endirin. Bir neçə fayl çıxsa, hamısını ZIP kimi yükləmək olar."
					],
					"note": "Yalnız bir neçə səhifə lazımdırsa, «Səhifə seç və çıxar» aləti də rahatdır."
				},
				"en": {
					"title": "How to split a PDF file",
					"lead": "Need only a few pages from a big PDF? Or want to cut a file into parts and send them separately? Split the PDF.\n\nThe Nibras Code Split PDF tool runs in your browser. The file is not uploaded to a server, and no account is needed.\n\nThere are four ways. Make one file from selected pages. One file every N pages. Every page as its own file. Or type your own ranges and get separate files.",
					"points": [
						"Open nibrascode.com/en/pdf/split.",
						"Choose the PDF.",
						"Pick a split mode. Type pages like «2, 5-7» or tap the small page previews.",
						"Press Start. Nothing runs on its own.",
						"Download the result. If there are several files, you can get them all as a ZIP."
					],
					"note": "If you only need a few pages, the Extract pages tool is handy too."
				},
				"tr": {
					"title": "PDF dosyası nasıl bölünür",
					"lead": "PDF'i tarayıcıda bölün. Dosya yüklenmez, hesap gerekmez.\n\nSeçilen sayfalar, her N sayfada bir, her sayfa ayrı veya özel aralıklar seçilebilir.",
					"points": [
						"nibrascode.com/tr/pdf/split açın.",
						"PDF seçin.",
						"Bölme yolunu seçin.",
						"«Başla»ya basın ve indirin."
					],
					"note": "Birden fazla dosya çıkarsa ZIP olarak indirilir."
				},
				"ar": {
					"title": "كيف تقسّم ملف PDF",
					"lead": "قسّم PDF داخل المتصفح دون رفع الملف ودون حساب.\n\nيمكنك اختيار صفحات محددة، أو ملف كل N صفحات، أو كل صفحة وحدها، أو نطاقات خاصة.",
					"points": [
						"افتح nibrascode.com/ar/pdf/split.",
						"اختر الملف.",
						"اختر طريقة التقسيم.",
						"اضغط «ابدأ» ثم نزّل."
					],
					"note": "إذا خرجت عدة ملفات فتُنزَّل في ملف ZIP."
				},
				"ru": {
					"title": "Как разделить PDF-файл",
					"lead": "Разделите PDF прямо в браузере. Файл не загружается, аккаунт не нужен.\n\nМожно выбрать страницы, файл каждые N страниц, каждую страницу отдельно или свои диапазоны.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/split.",
						"Выберите PDF.",
						"Выберите способ.",
						"Нажмите «Старт» и скачайте."
					],
					"note": "Несколько файлов скачиваются одним ZIP."
				}
			}
		},
		{
			"slug": "pdf-den-sekil",
			"links": [
				{
					"path": "/pdf/pdf-image",
					"label": {
						"az": "PDF-dən şəkil",
						"en": "PDF to image",
						"tr": "PDF'den resim",
						"ar": "من PDF إلى صورة",
						"ru": "PDF в картинку"
					}
				},
				{
					"path": "/pdf/image-pdf",
					"label": {
						"az": "Şəkildən PDF",
						"en": "JPG to PDF",
						"tr": "Resimden PDF",
						"ar": "من صورة إلى PDF",
						"ru": "Картинки в PDF"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-dən şəkil (JPG, PNG) necə çıxarmaq olar",
					"lead": "PDF səhifəsini sosial şəbəkədə paylaşmaq, mesajda göndərmək və ya təqdimata qoymaq lazımdır? Səhifəni şəkil kimi saxlayın.\n\n«PDF-dən şəkil» aləti hər səhifəni ayrıca şəkil edir. JPG və ya PNG seçə bilərsiniz.\n\nHər şey brauzerdə gedir. PDF heç yerə göndərilmir.",
					"points": [
						"nibrascode.com/pdf/pdf-image səhifəsini açın.",
						"PDF faylını seçin.",
						"Formatı seçin: JPG və ya PNG.",
						"Başladın və gözləyin. Səhifə çoxdursa, bir az vaxt alır.",
						"Şəkilləri bir ZIP faylında endirin."
					],
					"note": "JPG faylı adətən daha kiçik olur. Kiçik yazılar daha aydın görünsün deyirsinizsə, PNG seçin."
				},
				"en": {
					"title": "How to save PDF pages as images (JPG, PNG)",
					"lead": "Need to share a PDF page on social media, send it in a chat or put it in slides? Save the page as a picture.\n\nThe PDF to image tool turns each page into its own picture. You can choose JPG or PNG.\n\nEverything runs in the browser. The PDF is not sent anywhere.",
					"points": [
						"Open nibrascode.com/en/pdf/pdf-image.",
						"Choose the PDF.",
						"Pick the format: JPG or PNG.",
						"Start and wait. Many pages take a little longer.",
						"Download the pictures in one ZIP file."
					],
					"note": "JPG files are usually smaller. If you want small text to stay crisp, choose PNG."
				},
				"tr": {
					"title": "PDF'den resim (JPG, PNG) nasıl çıkarılır",
					"lead": "Her sayfa ayrı bir resim olur. JPG veya PNG seçin. Tarayıcıda çalışır, PDF gönderilmez.",
					"points": [
						"nibrascode.com/tr/pdf/pdf-image açın.",
						"PDF seçin.",
						"JPG veya PNG seçin.",
						"Resimleri ZIP olarak indirin."
					],
					"note": "Küçük yazılar için PNG daha net olur."
				},
				"ar": {
					"title": "كيف تحفظ صفحات PDF كصور (JPG، PNG)",
					"lead": "تتحول كل صفحة إلى صورة مستقلة بصيغة JPG أو PNG، داخل المتصفح ودون إرسال الملف.",
					"points": [
						"افتح nibrascode.com/ar/pdf/pdf-image.",
						"اختر الملف.",
						"اختر JPG أو PNG.",
						"نزّل الصور في ملف ZIP."
					],
					"note": "PNG أوضح للنص الصغير."
				},
				"ru": {
					"title": "Как сохранить страницы PDF как картинки (JPG, PNG)",
					"lead": "Каждая страница становится отдельной картинкой JPG или PNG. Всё в браузере, PDF никуда не уходит.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/pdf-image.",
						"Выберите PDF.",
						"Выберите JPG или PNG.",
						"Скачайте картинки в ZIP."
					],
					"note": "Для мелкого текста PNG чётче."
				}
			}
		},
		{
			"slug": "pdf-su-nisani",
			"links": [
				{
					"path": "/pdf/watermark",
					"label": {
						"az": "Su nişanı",
						"en": "Watermark PDF",
						"tr": "Filigran",
						"ar": "علامة مائية",
						"ru": "Водяной знак"
					}
				},
				{
					"path": "/pdf/protect",
					"label": {
						"az": "PDF parol",
						"en": "Password protect PDF",
						"tr": "PDF şifre",
						"ar": "كلمة مرور PDF",
						"ru": "Пароль на PDF"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-ə su nişanı necə qoymaq olar",
					"lead": "Sənədi başqasına göndərirsiniz, amma onun sizə aid olduğu görünsün istəyirsiniz? Su nişanı qoyun. Məsələn «NÜMUNƏ», «SURƏT» və ya adınız.\n\n«Su nişanı» aləti PDF səhifələrinə yazı əlavə edir. Yazının yerini 9 nöqtədən seçirsiniz: künclər, kənarlar və ya mərkəz.\n\nAlət brauzerdə işləyir. Fayl serverə getmir.",
					"points": [
						"nibrascode.com/pdf/watermark səhifəsini açın.",
						"PDF faylını seçin.",
						"Su nişanının mətnini yazın.",
						"Yerini seçin.",
						"Lazımdırsa, yalnız bəzi səhifələri yazın, məsələn «1-3».",
						"Yeni faylı endirin."
					],
					"note": "Ərəb hərfləri ilə yazılmış su nişanı da dəstəklənir. Su nişanı faylı qorumur, sadəcə işarələyir. Qorumaq üçün parol qoyun."
				},
				"en": {
					"title": "How to add a watermark to a PDF",
					"lead": "Sending a document but want it to show it is yours? Add a watermark, such as «SAMPLE», «COPY» or your name.\n\nThe Watermark tool adds text to PDF pages. You pick the spot from 9 positions: corners, edges or center.\n\nThe tool runs in your browser. The file does not go to a server.",
					"points": [
						"Open nibrascode.com/en/pdf/watermark.",
						"Choose the PDF.",
						"Type the watermark text.",
						"Pick the position.",
						"If needed, type only some pages, for example «1-3».",
						"Download the new file."
					],
					"note": "Arabic-script watermarks work too. A watermark marks the file but does not lock it. To lock it, add a password."
				},
				"tr": {
					"title": "PDF'e filigran nasıl eklenir",
					"lead": "Sayfalara yazı ekleyin ve 9 konumdan birini seçin. Tarayıcıda çalışır, dosya gönderilmez.",
					"points": [
						"nibrascode.com/tr/pdf/watermark açın.",
						"PDF seçin.",
						"Metni yazın ve konumu seçin.",
						"İndirin."
					],
					"note": "Filigran dosyayı kilitlemez; bunun için şifre koyun."
				},
				"ar": {
					"title": "كيف تضع علامة مائية على PDF",
					"lead": "أضف نصًا إلى الصفحات واختر أحد 9 مواضع. تعمل الأداة في المتصفح، والنص العربي مدعوم.",
					"points": [
						"افتح nibrascode.com/ar/pdf/watermark.",
						"اختر الملف.",
						"اكتب النص واختر الموضع.",
						"نزّل الملف."
					],
					"note": "العلامة المائية لا تقفل الملف؛ لذلك استخدم كلمة مرور."
				},
				"ru": {
					"title": "Как добавить водяной знак в PDF",
					"lead": "Добавьте текст на страницы и выберите одно из 9 мест. Работает в браузере, файл не отправляется.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/watermark.",
						"Выберите PDF.",
						"Введите текст и место.",
						"Скачайте файл."
					],
					"note": "Водяной знак не запирает файл — для этого поставьте пароль."
				}
			}
		},
		{
			"slug": "pdf-sehife-cevirmek",
			"links": [
				{
					"path": "/pdf/rotate",
					"label": {
						"az": "PDF döndər",
						"en": "Rotate PDF",
						"tr": "PDF döndür",
						"ar": "تدوير PDF",
						"ru": "Повернуть PDF"
					}
				},
				{
					"path": "/pdf/pages",
					"label": {
						"az": "Səhifələri idarə et",
						"en": "Organize pages",
						"tr": "Sayfaları düzenle",
						"ar": "تنظيم الصفحات",
						"ru": "Упорядочить страницы"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF səhifəsini necə döndərmək (çevirmək) olar",
					"lead": "Skan etdiyiniz sənəd yan və ya tərs çıxıb? Oxumaq üçün telefonu fırlatmağa ehtiyac yoxdur. Səhifəni döndərin.\n\n«PDF döndər» aləti səhifələri sola 90°, sağa 90° və ya 180° döndərir. Hamısını və ya yalnız seçdiyiniz səhifələri.\n\nAlət brauzerdə işləyir, fayl yüklənmir.",
					"points": [
						"nibrascode.com/pdf/rotate səhifəsini açın.",
						"PDF faylını seçin.",
						"İstiqaməti seçin: sola 90°, sağa 90° və ya 180°.",
						"Yalnız bəzi səhifələr lazımdırsa, «2, 4-6» kimi yazın. Boş qalsa, hamısı döndərilir.",
						"Yeni faylı endirin."
					],
					"note": "Fərqli səhifələr fərqli tərəfə əyridirsə, aləti bir neçə dəfə işlədin: hər dəfə öz səhifələri üçün."
				},
				"en": {
					"title": "How to rotate a PDF page",
					"lead": "Did a scanned document come out sideways or upside down? No need to turn your phone to read it. Rotate the page.\n\nThe Rotate PDF tool turns pages 90° left, 90° right or 180°. All pages or only the ones you pick.\n\nThe tool runs in your browser, and the file is not uploaded.",
					"points": [
						"Open nibrascode.com/en/pdf/rotate.",
						"Choose the PDF.",
						"Pick the direction: 90° left, 90° right or 180°.",
						"For only some pages, type «2, 4-6». Leave it empty to rotate all.",
						"Download the new file."
					],
					"note": "If different pages lean different ways, run the tool a few times, each time for its own pages."
				},
				"tr": {
					"title": "PDF sayfası nasıl döndürülür",
					"lead": "Sayfaları sola 90°, sağa 90° veya 180° döndürün. Tüm sayfalar veya seçtikleriniz. Dosya yüklenmez.",
					"points": [
						"nibrascode.com/tr/pdf/rotate açın.",
						"PDF seçin.",
						"Yönü seçin.",
						"İndirin."
					],
					"note": "Sayfa aralığı boşsa tümü döner."
				},
				"ar": {
					"title": "كيف تدير صفحة PDF",
					"lead": "أدر الصفحات 90° يسارًا أو يمينًا أو 180°، كلها أو المختارة فقط. لا يُرفع الملف.",
					"points": [
						"افتح nibrascode.com/ar/pdf/rotate.",
						"اختر الملف.",
						"اختر الاتجاه.",
						"نزّل الملف."
					],
					"note": "إذا تُرك النطاق فارغًا تُدار كل الصفحات."
				},
				"ru": {
					"title": "Как повернуть страницу PDF",
					"lead": "Поворачивайте страницы на 90° влево, вправо или на 180° — все или выбранные. Файл не загружается.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/rotate.",
						"Выберите PDF.",
						"Выберите направление.",
						"Скачайте файл."
					],
					"note": "Если диапазон пуст, поворачиваются все страницы."
				}
			}
		},
		{
			"slug": "pdf-sehife-cixarmaq",
			"links": [
				{
					"path": "/pdf/extract-pages",
					"label": {
						"az": "Səhifə seç və çıxar",
						"en": "Extract pages",
						"tr": "Sayfa seç ve çıkar",
						"ar": "استخراج صفحات",
						"ru": "Извлечь страницы"
					}
				},
				{
					"path": "/pdf/split",
					"label": {
						"az": "PDF böl",
						"en": "Split PDF",
						"tr": "PDF böl",
						"ar": "تقسيم PDF",
						"ru": "Разделить PDF"
					}
				},
				{
					"path": "/pdf/pages",
					"label": {
						"az": "Səhifələri idarə et",
						"en": "Organize pages",
						"tr": "Sayfaları düzenle",
						"ar": "تنظيم الصفحات",
						"ru": "Упорядочить страницы"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-dən lazım olan səhifələri necə çıxarmaq olar",
					"lead": "50 səhifəlik sənəddən yalnız 3 səhifə lazımdır? Hamısını göndərmək əvəzinə həmin səhifələri ayrıca fayl edin.\n\n«Səhifə seç və çıxar» aləti səhifələrin kiçik şəkillərini göstərir. Lazım olanlara toxunursunuz, alət onlardan yeni PDF düzəldir.\n\nHər şey brauzerdə gedir. Fayl yüklənmir.",
					"points": [
						"nibrascode.com/pdf/extract-pages səhifəsini açın.",
						"PDF faylını seçin.",
						"Lazım olan səhifələrə toxunun.",
						"Başladın.",
						"Yeni PDF-i endirin."
					],
					"note": "Əksinə, bəzi səhifələri silmək və ya sırasını dəyişmək istəyirsinizsə, «Səhifələri idarə et» alətinə keçin."
				},
				"en": {
					"title": "How to extract pages from a PDF",
					"lead": "Need only 3 pages from a 50-page document? Instead of sending it all, make those pages a separate file.\n\nThe Extract pages tool shows small previews of the pages. Tap the ones you need, and the tool makes a new PDF from them.\n\nEverything runs in the browser. The file is not uploaded.",
					"points": [
						"Open nibrascode.com/en/pdf/extract-pages.",
						"Choose the PDF.",
						"Tap the pages you need.",
						"Start.",
						"Download the new PDF."
					],
					"note": "Want to delete some pages or change the order instead? Use the Organize pages tool."
				},
				"tr": {
					"title": "PDF'den sayfa nasıl çıkarılır",
					"lead": "Sayfa önizlemelerine dokunun, seçtiklerinizden yeni PDF oluşur. Dosya yüklenmez.",
					"points": [
						"nibrascode.com/tr/pdf/extract-pages açın.",
						"PDF seçin.",
						"Sayfalara dokunun.",
						"Yeni PDF'i indirin."
					],
					"note": "Silmek veya sıralamak için Sayfaları düzenle aracını kullanın."
				},
				"ar": {
					"title": "كيف تستخرج صفحات من PDF",
					"lead": "اضغط على معاينات الصفحات المطلوبة، فتصنع الأداة منها PDF جديدًا داخل المتصفح.",
					"points": [
						"افتح nibrascode.com/ar/pdf/extract-pages.",
						"اختر الملف.",
						"اضغط على الصفحات.",
						"نزّل الملف الجديد."
					],
					"note": "للحذف أو تغيير الترتيب استخدم أداة تنظيم الصفحات."
				},
				"ru": {
					"title": "Как извлечь страницы из PDF",
					"lead": "Нажмите на превью нужных страниц — из них получится новый PDF. Всё в браузере.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/extract-pages.",
						"Выберите PDF.",
						"Отметьте страницы.",
						"Скачайте новый PDF."
					],
					"note": "Чтобы удалить или переставить страницы, используйте «Упорядочить страницы»."
				}
			}
		},
		{
			"slug": "word-pdf-cevirmek",
			"links": [
				{
					"path": "/pdf/word-pdf",
					"label": {
						"az": "Word-dan PDF",
						"en": "Word to PDF",
						"tr": "Word'den PDF",
						"ar": "من Word إلى PDF",
						"ru": "Word в PDF"
					}
				},
				{
					"path": "/pdf/pdf-word",
					"label": {
						"az": "PDF-dən Word",
						"en": "PDF to Word",
						"tr": "PDF'den Word",
						"ar": "من PDF إلى Word",
						"ru": "PDF в Word"
					}
				},
				{
					"path": "/pdf/write-pdf",
					"label": {
						"az": "Sadə PDF düzəlt",
						"en": "Simple PDF editor",
						"tr": "Basit PDF",
						"ar": "PDF بسيط",
						"ru": "Простой PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Word faylını PDF-ə necə çevirmək olar",
					"lead": "Word sənədini PDF kimi göndərmək lazımdır, amma kompüterdə Word yoxdur? Bunu telefonda da etmək olar.\n\n«Word-dan PDF» aləti DOCX faylının mətnini götürüb A4 PDF düzəldir. Səhifələrə nömrə də qoyulur. Hamısı brauzerdə gedir, fayl yüklənmir.\n\nBir şeyi bilin: alət yalnız mətni köçürür. Şəkillər, cədvəllər və xüsusi düzülüş saxlanmır.",
					"points": [
						"nibrascode.com/pdf/word-pdf səhifəsini açın.",
						"DOCX faylını seçin. Köhnə .doc formatı qəbul edilmir.",
						"Başladın.",
						"PDF-i endirin və yoxlayın."
					],
					"note": "Sənəddə şəkil və cədvəl çoxdursa, onu Word və ya Google Docs-da açıb «PDF kimi saxla» ilə çıxarmaq daha düzgündür."
				},
				"en": {
					"title": "How to convert a Word file to PDF",
					"lead": "Need to send a Word document as a PDF, but no Word on your computer? You can do it on a phone too.\n\nThe Word to PDF tool takes the text of a DOCX file and makes an A4 PDF. Pages get numbers too. It all runs in the browser, and the file is not uploaded.\n\nKnow one thing: the tool moves only the text. Pictures, tables and special layout are not kept.",
					"points": [
						"Open nibrascode.com/en/pdf/word-pdf.",
						"Choose the DOCX file. The old .doc format is not accepted.",
						"Start.",
						"Download the PDF and check it."
					],
					"note": "If the document has many pictures and tables, open it in Word or Google Docs and use «Save as PDF» instead."
				},
				"tr": {
					"title": "Word dosyası PDF'e nasıl çevrilir",
					"lead": "DOCX metni A4 PDF olur, sayfa numaraları eklenir. Tarayıcıda çalışır.\n\nYalnızca metin aktarılır; resim, tablo ve düzen korunmaz.",
					"points": [
						"nibrascode.com/tr/pdf/word-pdf açın.",
						"DOCX seçin.",
						"Başlatın.",
						"PDF'i indirin."
					],
					"note": "Resimli belgeler için Word'de «PDF olarak kaydet» kullanın."
				},
				"ar": {
					"title": "كيف تحوّل ملف Word إلى PDF",
					"lead": "يتحول نص ملف DOCX إلى PDF بحجم A4 مع ترقيم الصفحات، داخل المتصفح.\n\nيُنقل النص فقط؛ الصور والجداول والتنسيق لا تُحفظ.",
					"points": [
						"افتح nibrascode.com/ar/pdf/word-pdf.",
						"اختر ملف DOCX.",
						"ابدأ.",
						"نزّل PDF."
					],
					"note": "للمستندات المليئة بالصور استخدم «حفظ كـ PDF» في Word."
				},
				"ru": {
					"title": "Как перевести Word в PDF",
					"lead": "Текст файла DOCX превращается в PDF формата A4 с номерами страниц. Всё в браузере.\n\nПереносится только текст: картинки, таблицы и вёрстка не сохраняются.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/word-pdf.",
						"Выберите DOCX.",
						"Запустите.",
						"Скачайте PDF."
					],
					"note": "Для документов с картинками используйте «Сохранить как PDF» в Word."
				}
			}
		},
		{
			"slug": "sekil-fonu-silmek",
			"links": [
				{
					"path": "/erase",
					"label": {
						"az": "Şəkil fon sil",
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
				},
				{
					"path": "/pdf/image-pdf",
					"label": {
						"az": "Şəkildən PDF",
						"en": "JPG to PDF",
						"tr": "Resimden PDF",
						"ar": "من صورة إلى PDF",
						"ru": "Картинки в PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Şəklin fonunu necə silmək olar",
					"lead": "Sənəd şəkli, profil şəkli və ya məhsul fotosu üçün təmiz fon lazımdır? Fonu silmək bir neçə addımdır.\n\nNibras Erase aləti fonu cihazınızda silir. Şəkil Nibras Code serverinə yüklənmir. İlk dəfə model faylı cihaza endirilə bilər, sonra iş daha tez gedir.\n\nFonu sildikdən sonra rəngli və ya bulanıq fon, kölgə əlavə etmək, dairə profil düzəltmək olar. Kənarları fırça ilə əl ilə düzəldə bilərsiniz.",
					"points": [
						"nibrascode.com/erase səhifəsini açın.",
						"Şəkli seçin.",
						"Keyfiyyəti seçin və fonu silin.",
						"Kənarda artıq və ya əskik yer varsa, fırça ilə düzəldin.",
						"Lazımdırsa, yeni fon rəngi seçin.",
						"Formatı seçin və endirin: şəffaf fon üçün PNG, kiçik fayl üçün JPG və ya WebP."
					],
					"note": "Fonla insan arasında rəng fərqi çox olanda nəticə daha təmiz çıxır."
				},
				"en": {
					"title": "How to remove a photo background",
					"lead": "Need a clean background for an ID photo, profile picture or product shot? Removing the background takes a few steps.\n\nThe Nibras Erase tool removes the background on your device. The photo is not uploaded to the Nibras Code server. The first time, a model file may download to your device; after that it is quicker.\n\nAfter removing it, you can add a color or blurred background, a shadow, or make a round profile picture. You can fix edges by hand with a brush.",
					"points": [
						"Open nibrascode.com/en/erase.",
						"Choose the photo.",
						"Pick the quality and remove the background.",
						"If edges have extra or missing bits, fix them with the brush.",
						"If needed, pick a new background color.",
						"Choose a format and download: PNG for a transparent background, JPG or WebP for a smaller file."
					],
					"note": "The result is cleaner when the person and the background have very different colors."
				},
				"tr": {
					"title": "Fotoğraf arka planı nasıl silinir",
					"lead": "Nibras Erase arka planı cihazınızda siler, fotoğraf sunucuya yüklenmez. Renkli veya bulanık fon, gölge eklenebilir.",
					"points": [
						"nibrascode.com/tr/erase açın.",
						"Fotoğraf seçin.",
						"Arka planı silin.",
						"Kenarları fırçayla düzeltin.",
						"PNG, JPG veya WebP indirin."
					],
					"note": "Şeffaf fon için PNG seçin."
				},
				"ar": {
					"title": "كيف تحذف خلفية الصورة",
					"lead": "تحذف أداة Nibras Erase الخلفية على جهازك، ولا تُرفع الصورة إلى الخادم. يمكن إضافة لون أو ضباب أو ظل.",
					"points": [
						"افتح nibrascode.com/ar/erase.",
						"اختر الصورة.",
						"احذف الخلفية.",
						"أصلح الحواف بالفرشاة.",
						"نزّل PNG أو JPG أو WebP."
					],
					"note": "للخلفية الشفافة اختر PNG."
				},
				"ru": {
					"title": "Как удалить фон с фото",
					"lead": "Nibras Erase убирает фон на вашем устройстве, фото не загружается на сервер. Можно добавить цвет, размытие или тень.",
					"points": [
						"Откройте nibrascode.com/ru/erase.",
						"Выберите фото.",
						"Удалите фон.",
						"Поправьте края кистью.",
						"Скачайте PNG, JPG или WebP."
					],
					"note": "Для прозрачного фона выберите PNG."
				}
			}
		},
		{
			"slug": "qr-kod-hazirlamaq",
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
						"ar": "Wi-Fi QR",
						"ru": "Wi-Fi QR"
					}
				},
				{
					"path": "/apps/nibras-qr",
					"label": {
						"az": "Nibras QR tətbiqi",
						"en": "Nibras QR app",
						"tr": "Nibras QR uygulaması",
						"ar": "تطبيق Nibras QR",
						"ru": "Приложение Nibras QR"
					}
				}
			],
			"piece": {
				"az": {
					"title": "QR kodu necə hazırlamaq olar",
					"lead": "Sayt linkini, telefon nömrənizi və ya Wi-Fi şifrəsini insanlara tez çatdırmaq istəyirsiniz? QR kod hazırlayın. Kamera ilə skan edən dərhal açır.\n\nNibras QR aləti bir neçə növ QR kodu dəstəkləyir: link, mətn, telefon, e-poçt, WhatsApp, Wi-Fi, vizit kartı (vCard), yer, SMS, tədbir və tətbiq.\n\nKodun rəngini və görünüşünü dəyişə, sonra PNG, JPG və ya SVG kimi endirə bilərsiniz.",
					"points": [
						"nibrascode.com/qr səhifəsini açın.",
						"QR növünü seçin, məsələn «link».",
						"Məlumatı yazın.",
						"İstəsəniz, rəngi və dizaynı dəyişin.",
						"Endirin: çap üçün SVG və ya PNG, mesaj üçün JPG."
					],
					"note": "Çap etməzdən əvvəl kodu öz telefonunuzla skan edib yoxlayın. Açıq fonda tünd kod ən yaxşı oxunur."
				},
				"en": {
					"title": "How to make a QR code",
					"lead": "Want to get a website link, your phone number or Wi-Fi password to people fast? Make a QR code. Anyone who scans it with a camera opens it right away.\n\nThe Nibras QR tool supports several QR types: link, text, phone, email, WhatsApp, Wi-Fi, business card (vCard), location, SMS, event and app.\n\nYou can change the code's colors and style, then download it as PNG, JPG or SVG.",
					"points": [
						"Open nibrascode.com/en/qr.",
						"Pick a QR type, for example «link».",
						"Type the details.",
						"If you like, change the color and design.",
						"Download: SVG or PNG for print, JPG for chat."
					],
					"note": "Before printing, scan the code with your own phone to check it. A dark code on a light background reads best."
				},
				"tr": {
					"title": "QR kod nasıl hazırlanır",
					"lead": "Link, metin, telefon, e-posta, WhatsApp, Wi-Fi, vCard, konum, SMS, etkinlik ve uygulama türleri var. PNG, JPG veya SVG indirin.",
					"points": [
						"nibrascode.com/tr/qr açın.",
						"Türü seçin.",
						"Bilgiyi yazın.",
						"İndirin."
					],
					"note": "Basmadan önce telefonla tarayıp deneyin."
				},
				"ar": {
					"title": "كيف تصنع رمز QR",
					"lead": "تتوفر أنواع: رابط، نص، هاتف، بريد، WhatsApp، Wi-Fi، بطاقة vCard، موقع، SMS، حدث، تطبيق. نزّل PNG أو JPG أو SVG.",
					"points": [
						"افتح nibrascode.com/ar/qr.",
						"اختر النوع.",
						"اكتب البيانات.",
						"نزّل الرمز."
					],
					"note": "امسح الرمز بهاتفك قبل الطباعة."
				},
				"ru": {
					"title": "Как сделать QR-код",
					"lead": "Есть типы: ссылка, текст, телефон, e-mail, WhatsApp, Wi-Fi, визитка vCard, место, SMS, событие, приложение. Скачайте PNG, JPG или SVG.",
					"points": [
						"Откройте nibrascode.com/ru/qr.",
						"Выберите тип.",
						"Введите данные.",
						"Скачайте код."
					],
					"note": "Перед печатью проверьте код своим телефоном."
				}
			}
		},
		{
			"slug": "sekli-kiciltmek",
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
						"az": "Şəkil fon sil",
						"en": "Remove background",
						"tr": "Arka plan sil",
						"ar": "حذف الخلفية",
						"ru": "Удалить фон"
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
					"title": "Şəklin həcmini necə kiçiltmək olar",
					"lead": "Sayt «şəkil çox böyükdür» deyir? Və ya mesajla göndərmək çox çəkir? Şəkli kiçildin.\n\n«Şəkil sıx» aləti JPG, PNG və WebP şəkilləri qəbul edir. Keyfiyyət sürgüsü ilə ölçünü özünüz seçirsiniz. Əvvəlki və sonrakı ölçü ekranda görünür.\n\nŞəkil brauzerdən çıxmır. Hesab lazım deyil.",
					"points": [
						"nibrascode.com/image səhifəsini açın.",
						"Şəkli seçin.",
						"Keyfiyyət sürgüsünü çəkin. Aşağı keyfiyyət daha kiçik fayl deməkdir.",
						"«Əvvəl» və «Sonra» ölçülərini müqayisə edin.",
						"Yeni şəkli endirin."
					],
					"note": "Nəticə JPG olur. Çox böyük şəkillər uzun tərəfdə 2400 piksələ qədər kiçildilir. Şəffaf fon lazımdırsa, PNG-ni olduğu kimi saxlayın."
				},
				"en": {
					"title": "How to reduce a photo's file size",
					"lead": "A site says «image too large»? Or a photo takes too long to send? Make it smaller.\n\nThe Compress photo tool accepts JPG, PNG and WebP. You choose the size with a quality slider. The before and after sizes show on screen.\n\nThe photo stays in your browser. No account is needed.",
					"points": [
						"Open nibrascode.com/en/image.",
						"Choose the photo.",
						"Move the quality slider. Lower quality means a smaller file.",
						"Compare the Before and After sizes.",
						"Download the new photo."
					],
					"note": "The result is a JPG. Very large photos are scaled down to 2400 pixels on the long side. If you need a transparent background, keep the PNG as it is."
				},
				"tr": {
					"title": "Fotoğraf boyutu nasıl küçültülür",
					"lead": "JPG, PNG veya WebP seçin, kalite kaydırıcısıyla boyutu ayarlayın. Fotoğraf tarayıcıdan çıkmaz.",
					"points": [
						"nibrascode.com/tr/image açın.",
						"Fotoğraf seçin.",
						"Kaliteyi ayarlayın.",
						"İndirin."
					],
					"note": "Sonuç JPG olur."
				},
				"ar": {
					"title": "كيف تصغّر حجم الصورة",
					"lead": "اختر JPG أو PNG أو WebP واضبط الحجم بشريط الجودة. الصورة تبقى في المتصفح.",
					"points": [
						"افتح nibrascode.com/ar/image.",
						"اختر الصورة.",
						"اضبط الجودة.",
						"نزّل الصورة."
					],
					"note": "النتيجة بصيغة JPG."
				},
				"ru": {
					"title": "Как уменьшить размер фото",
					"lead": "Выберите JPG, PNG или WebP и настройте размер ползунком качества. Фото остаётся в браузере.",
					"points": [
						"Откройте nibrascode.com/ru/image.",
						"Выберите фото.",
						"Настройте качество.",
						"Скачайте."
					],
					"note": "Результат сохраняется в JPG."
				}
			}
		},
		{
			"slug": "pdf-sehife-nomresi",
			"links": [
				{
					"path": "/pdf/page-numbers",
					"label": {
						"az": "Səhifə nömrəsi qoy",
						"en": "Add page numbers",
						"tr": "Sayfa numarası ekle",
						"ar": "ترقيم الصفحات",
						"ru": "Номера страниц"
					}
				},
				{
					"path": "/pdf/write-pdf",
					"label": {
						"az": "Sadə PDF düzəlt",
						"en": "Simple PDF editor",
						"tr": "Basit PDF",
						"ar": "PDF بسيط",
						"ru": "Простой PDF"
					}
				},
				{
					"path": "/pdf/pages",
					"label": {
						"az": "Səhifələri idarə et",
						"en": "Organize pages",
						"tr": "Sayfaları düzenle",
						"ar": "تنظيم الصفحات",
						"ru": "Упорядочить страницы"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-də səhifə nömrəsi necə qoyulur",
					"lead": "Referat, ərizə və ya hesabatda səhifə nömrəsi oxucunun işini asanlaşdırır.\n\nHazır PDF-ə nömrə qoymaq üçün «Səhifə nömrəsi qoy» alətini açın. PDF-i seçirsiniz, bir neçə ayar edirsiniz və nömrəli faylı endirirsiniz.\n\nÜz qabığını nömrəsiz saxlamaq olar. İlk rəqəmi də özünüz seçirsiniz. Fayl serverə getmir, iş brauzerdə gedir.",
					"points": [
						"nibrascode.com/pdf/page-numbers səhifəsini açın və PDF-i seçin.",
						"«Hansı səhifədən başlasın»: üz qabığı nömrəsiz qalsın deyə 2 yazın.",
						"«İlk rəqəm»: nömrələnən ilk səhifədə görünən rəqəm, məsələn 1 və ya 5.",
						"«Yer»: yuxarı və ya aşağı, sol, orta və ya sağ.",
						"Görünüşü seçin: 1, 1 / N və ya - 1 -. Lazımdırsa şrift ölçüsünü və kənardan məsafəni dəyişin.",
						"«Başla» düyməsini basın və nömrəli PDF-i endirin."
					],
					"note": "Parollu PDF əvvəlcə açılmalıdır. Nömrə səhifənin üstünə yazılır, ona görə həmin yerdə mətn varsa, başqa yer seçin. Yeni sənəd yazırsınızsa, «Sadə PDF düzəlt» alətində də nömrə qutusu var."
				},
				"en": {
					"title": "How to add page numbers to a PDF",
					"lead": "Page numbers make essays, applications and reports easier to read.\n\nTo number a finished PDF, open the Add page numbers tool. You choose the PDF, set a few options and download the numbered file.\n\nYou can leave the cover unnumbered and pick the first number yourself. The file does not go to a server; it all runs in the browser.",
					"points": [
						"Open nibrascode.com/en/pdf/page-numbers and choose the PDF.",
						"«Start on page»: set 2 to keep the cover unnumbered.",
						"«First number»: the number on the first numbered page, for example 1 or 5.",
						"«Position»: top or bottom, left, center or right.",
						"Pick a format: 1, 1 / N or - 1 -. Change font size and distance from the edge if needed.",
						"Press Start and download the numbered PDF."
					],
					"note": "A password-protected PDF must be unlocked first. Numbers are drawn on top of the page, so if text sits there, pick another position. If you are writing a new document, the Simple PDF editor also has a page-numbers box."
				},
				"tr": {
					"title": "PDF'e sayfa numarası nasıl eklenir",
					"lead": "Hazır PDF'e numara eklemek için «Sayfa numarası ekle» aracını açın.\n\nBaşlangıç sayfasını, ilk sayıyı ve konumu siz seçersiniz. Dosya tarayıcıda kalır.",
					"points": [
						"nibrascode.com/tr/pdf/page-numbers açın ve PDF'i seçin.",
						"Kapak numarasız kalsın diye «Başlangıç sayfası»na 2 yazın.",
						"«İlk sayı»yı seçin, örneğin 1 veya 5.",
						"Konumu seçin: üst veya alt, sol, orta veya sağ.",
						"Biçimi seçin: 1, 1 / N veya - 1 -. Sonra indirin."
					],
					"note": "Şifreli PDF önce açılmalıdır."
				},
				"ar": {
					"title": "كيف تضيف أرقام الصفحات إلى PDF",
					"lead": "لترقيم ملف PDF جاهز افتح أداة «ترقيم الصفحات».\n\nتختار صفحة البداية والرقم الأول والموضع. يبقى الملف في المتصفح.",
					"points": [
						"افتح nibrascode.com/ar/pdf/page-numbers واختر الملف.",
						"اكتب 2 في «البدء من الصفحة» لترك الغلاف بلا رقم.",
						"اختر «الرقم الأول»، مثل 1 أو 5.",
						"اختر الموضع: أعلى أو أسفل، يسار أو وسط أو يمين.",
						"اختر الشكل: 1 أو 1 / N أو - 1 -، ثم نزّل الملف."
					],
					"note": "يجب فتح ملف PDF المحمي بكلمة مرور أولاً."
				},
				"ru": {
					"title": "Как добавить номера страниц в PDF",
					"lead": "Чтобы пронумеровать готовый PDF, откройте инструмент «Номера страниц».\n\nВы выбираете первую страницу, начальное число и место. Файл остаётся в браузере.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/page-numbers и выберите PDF.",
						"Укажите «Начать со страницы» 2, чтобы обложка осталась без номера.",
						"Выберите «Первое число», например 1 или 5.",
						"Выберите место: сверху или снизу, слева, по центру или справа.",
						"Выберите вид: 1, 1 / N или - 1 -, затем скачайте."
					],
					"note": "PDF с паролем сначала нужно открыть."
				}
			}
		}
	],
	...[
		{
			"slug": "pdf-parol-acmaq",
			"links": [
				{
					"path": "/pdf/unlock",
					"label": {
						"az": "PDF parolunu aç",
						"en": "Unlock PDF",
						"tr": "PDF kilidini aç",
						"ar": "فتح قفل PDF",
						"ru": "Снять пароль с PDF"
					}
				},
				{
					"path": "/pdf/protect",
					"label": {
						"az": "PDF-ə parol qoy",
						"en": "Protect PDF",
						"tr": "PDF'e parola koy",
						"ar": "حماية PDF",
						"ru": "Защитить PDF"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-in parolu necə götürülür",
					"lead": "Parollu PDF-i hər dəfə açanda parol yazmaq yorur.\n\n«PDF parolunu aç» aləti parolsuz nüsxə hazırlayır. Bunun üçün parolu bilməlisiniz.\n\nAlət parolu sındırmır və ya tapmır. Fayl serverə getmir, iş brauzerdə gedir.",
					"points": [
						"nibrascode.com/pdf/unlock səhifəsini açın.",
						"Parollu PDF-i seçin.",
						"Parolu yazın və «Aç» basın.",
						"«Başla» basın və parolsuz nüsxəni endirin."
					],
					"note": "Parolu bilmirsinizsə, fayl açılmır. Başqasının faylının parolunu götürməyin. Əsl fayl dəyişmir, yeni nüsxə endirilir."
				},
				"en": {
					"title": "How to remove a password from a PDF",
					"lead": "Typing a password every time you open a PDF gets tiring.\n\nThe Unlock PDF tool saves a copy without the password. You need to know the password for this.\n\nThe tool does not crack or guess passwords. The file stays in your browser.",
					"points": [
						"Open nibrascode.com/en/pdf/unlock.",
						"Choose the protected PDF.",
						"Type the password and press Unlock.",
						"Press Start and download the unlocked copy."
					],
					"note": "If you don't know the password, the file won't open. Only unlock files you are allowed to. The original stays unchanged."
				},
				"tr": {
					"title": "PDF şifresi nasıl kaldırılır",
					"lead": "«PDF kilidini aç» aracı şifresiz bir kopya kaydeder. Şifreyi bilmeniz gerekir.\n\nAraç şifre kırmaz. Dosya tarayıcıda kalır.",
					"points": [
						"nibrascode.com/tr/pdf/unlock açın.",
						"Şifreli PDF'i seçin.",
						"Şifreyi yazın, «Aç» ve sonra «Başla»ya basın.",
						"Şifresiz kopyayı indirin."
					],
					"note": "Şifreyi bilmiyorsanız dosya açılmaz."
				},
				"ar": {
					"title": "كيف تزيل كلمة المرور من PDF",
					"lead": "أداة فتح قفل PDF تحفظ نسخة بلا كلمة مرور، بشرط أن تعرف كلمة المرور.\n\nالأداة لا تكسر كلمات المرور. يبقى الملف في المتصفح.",
					"points": [
						"افتح nibrascode.com/ar/pdf/unlock.",
						"اختر ملف PDF المحمي.",
						"اكتب كلمة المرور ثم اضغط فتح ثم ابدأ.",
						"نزّل النسخة بلا كلمة مرور."
					],
					"note": "إن لم تعرف كلمة المرور فلن يُفتح الملف."
				},
				"ru": {
					"title": "Как снять пароль с PDF",
					"lead": "Инструмент «Снять пароль» сохраняет копию без пароля. Пароль нужно знать.\n\nИнструмент не взламывает пароли. Файл остаётся в браузере.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/unlock.",
						"Выберите PDF с паролем.",
						"Введите пароль, нажмите «Открыть», затем «Начать».",
						"Скачайте копию без пароля."
					],
					"note": "Без пароля файл не откроется."
				}
			}
		},
		{
			"slug": "pdf-kesmek",
			"links": [
				{
					"path": "/pdf/crop",
					"label": {
						"az": "PDF kəs",
						"en": "Crop PDF",
						"tr": "PDF kırp",
						"ar": "قص PDF",
						"ru": "Обрезать PDF"
					}
				},
				{
					"path": "/pdf/pages",
					"label": {
						"az": "Səhifələri idarə et",
						"en": "Organize pages",
						"tr": "Sayfaları düzenle",
						"ar": "تنظيم الصفحات",
						"ru": "Упорядочить страницы"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF səhifəsinin kənarı necə kəsilir",
					"lead": "Skan edilmiş PDF-də çox vaxt geniş ağ və ya qara kənar olur.\n\n«PDF kəs» aləti yuxarı, aşağı, sol və sağ kənarı millimetrlə kəsir.\n\nBütün səhifələri və ya seçdiyiniz aralığı kəsə bilərsiniz. Fayl brauzerdə qalır.",
					"points": [
						"nibrascode.com/pdf/crop səhifəsini açın və PDF-i seçin.",
						"Yuxarı, sağ, aşağı və sol kənarı mm ilə yazın.",
						"«Hamısı» və ya «Aralıq» seçin, məsələn 1-3.",
						"«Başla» basın və endirin."
					],
					"note": "Kəsilən hissə gizlənir, amma faylın içində qala bilər. Gizli məlumatı silmək üçün «Mətn üstünü qarat» alətindən istifadə edin."
				},
				"en": {
					"title": "How to crop a PDF",
					"lead": "Scanned PDFs often have wide white or black margins.\n\nCrop PDF trims the top, bottom, left and right edges in millimetres.\n\nYou can crop all pages or a range. The file stays in your browser.",
					"points": [
						"Open nibrascode.com/en/pdf/crop and choose the PDF.",
						"Enter top, right, bottom and left in mm.",
						"Choose All or a Range, for example 1-3.",
						"Press Start and download."
					],
					"note": "The cut part is hidden but may stay inside the file. To remove private content, use Redact PDF."
				},
				"tr": {
					"title": "PDF nasıl kırpılır",
					"lead": "«PDF kırp» aracı kenarları milimetre ile keser. Tüm sayfalar veya bir aralık seçilebilir.",
					"points": [
						"nibrascode.com/tr/pdf/crop açın, PDF'i seçin.",
						"Kenarları mm olarak yazın.",
						"Tümü veya aralık seçin.",
						"Başlat ve indirin."
					],
					"note": "Kesilen kısım gizlenir ama dosyada kalabilir."
				},
				"ar": {
					"title": "كيف تقص صفحات PDF",
					"lead": "أداة قص PDF تقص الحواف بالمليمتر لكل الصفحات أو لنطاق محدد.",
					"points": [
						"افتح nibrascode.com/ar/pdf/crop واختر الملف.",
						"اكتب الحواف بالمليمتر.",
						"اختر الكل أو نطاقاً.",
						"ابدأ ونزّل الملف."
					],
					"note": "الجزء المقصوص يُخفى لكنه قد يبقى داخل الملف."
				},
				"ru": {
					"title": "Как обрезать PDF",
					"lead": "Инструмент «Обрезать PDF» срезает поля в миллиметрах на всех страницах или в диапазоне.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/crop и выберите PDF.",
						"Укажите поля в мм.",
						"Выберите все страницы или диапазон.",
						"Нажмите «Начать» и скачайте."
					],
					"note": "Обрезанная часть скрыта, но может остаться в файле."
				}
			}
		},
		{
			"slug": "pdf-boz-etmek",
			"links": [
				{
					"path": "/pdf/grayscale",
					"label": {
						"az": "PDF-i boz et",
						"en": "Grayscale PDF",
						"tr": "PDF'i gri yap",
						"ar": "PDF رمادي",
						"ru": "PDF в оттенки серого"
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
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF necə ağ-qara (boz) edilir",
					"lead": "Rəngli PDF-i ağ-qara printerdə çap etmək və ya rəngi götürmək lazım ola bilər.\n\n«PDF-i boz et» aləti hər səhifəni boz rəngə çevirir.\n\nSəhifələr şəkil kimi yenidən qurulur. Ona görə sonra mətn seçilmir və kopyalanmır.",
					"points": [
						"nibrascode.com/pdf/grayscale səhifəsini açın.",
						"PDF-i seçin.",
						"Keyfiyyəti seçin: kiçik fayl, orta və ya aydın.",
						"«Başla» basın və endirin."
					],
					"note": "Mətn seçmək lazımdırsa, əsl faylı saxlayın. Yüksək keyfiyyət faylı böyüdür. Fayl serverə getmir."
				},
				"en": {
					"title": "How to make a PDF grayscale",
					"lead": "You may need to print a color PDF in black and white or drop the color.\n\nGrayscale PDF turns every page gray.\n\nPages are rebuilt as images, so text can't be selected or copied afterwards.",
					"points": [
						"Open nibrascode.com/en/pdf/grayscale.",
						"Choose the PDF.",
						"Pick quality: small file, medium or sharp.",
						"Press Start and download."
					],
					"note": "Keep the original if you need selectable text. Higher quality means a bigger file. The file stays in your browser."
				},
				"tr": {
					"title": "PDF nasıl gri yapılır",
					"lead": "«PDF'i gri yap» her sayfayı griye çevirir. Sayfalar görüntü olarak yeniden kurulur; metin seçilemez.",
					"points": [
						"nibrascode.com/tr/pdf/grayscale açın.",
						"PDF'i seçin.",
						"Kaliteyi seçin.",
						"Başlat ve indirin."
					],
					"note": "Seçilebilir metin gerekiyorsa orijinali saklayın."
				},
				"ar": {
					"title": "كيف تحوّل PDF إلى رمادي",
					"lead": "الأداة تحوّل كل صفحة إلى الرمادي. تُعاد الصفحات كصور فلا يمكن تحديد النص بعدها.",
					"points": [
						"افتح nibrascode.com/ar/pdf/grayscale.",
						"اختر الملف.",
						"اختر الجودة.",
						"ابدأ ونزّل."
					],
					"note": "احتفظ بالأصل إن احتجت نصاً قابلاً للتحديد."
				},
				"ru": {
					"title": "Как сделать PDF чёрно-белым",
					"lead": "Инструмент переводит каждую страницу в оттенки серого. Страницы становятся изображениями: текст не выделяется.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/grayscale.",
						"Выберите PDF.",
						"Выберите качество.",
						"Нажмите «Начать» и скачайте."
					],
					"note": "Сохраните оригинал, если нужен выделяемый текст."
				}
			}
		},
		{
			"slug": "excel-pdf-cevirmek",
			"links": [
				{
					"path": "/pdf/excel-pdf",
					"label": {
						"az": "Excel/CSV-dən PDF",
						"en": "Excel/CSV to PDF",
						"tr": "Excel/CSV'den PDF",
						"ar": "من Excel/CSV إلى PDF",
						"ru": "Excel/CSV в PDF"
					}
				},
				{
					"path": "/pdf/word-pdf",
					"label": {
						"az": "Word-dan PDF",
						"en": "Word to PDF",
						"tr": "Word'den PDF",
						"ar": "من Word إلى PDF",
						"ru": "Word в PDF"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Excel və ya CSV cədvəli PDF-ə necə çevrilir",
					"lead": "Cədvəli göndərmək və ya çap etmək üçün PDF daha rahatdır.\n\n«Excel/CSV-dən PDF» aləti XLSX və CSV faylını cədvəl kimi PDF edir.\n\nYalnız xana dəyərləri köçür. Formul, rəng və qrafik köçmür.",
					"points": [
						"nibrascode.com/pdf/excel-pdf səhifəsini açın.",
						"XLSX və ya CSV faylı seçin.",
						"Vərəqi, başlıq sətrini və səhifə istiqamətini seçin.",
						"«Başla» basın və PDF-i endirin."
					],
					"note": "Köhnə .xls dəstəklənmir: əvvəl XLSX kimi saxlayın. Formulların nəticəsi faylda saxlanıbsa, o görünür. Fayl brauzerdə qalır."
				},
				"en": {
					"title": "How to convert Excel or CSV to PDF",
					"lead": "A PDF is easier to send or print than a spreadsheet.\n\nExcel/CSV to PDF turns an XLSX or CSV file into a table PDF.\n\nOnly cell values are copied. Formulas, colors and charts are not.",
					"points": [
						"Open nibrascode.com/en/pdf/excel-pdf.",
						"Choose an XLSX or CSV file.",
						"Pick the sheet, header row and orientation.",
						"Press Start and download the PDF."
					],
					"note": "Old .xls is not supported: save as XLSX first. The file stays in your browser."
				},
				"tr": {
					"title": "Excel veya CSV PDF'e nasıl çevrilir",
					"lead": "Araç XLSX ve CSV dosyasını tablo PDF'ine çevirir. Yalnız hücre değerleri aktarılır; formül, renk ve grafik aktarılmaz.",
					"points": [
						"nibrascode.com/tr/pdf/excel-pdf açın.",
						"XLSX veya CSV seçin.",
						"Sayfa, başlık ve yönü seçin.",
						"Başlat ve indirin."
					],
					"note": "Eski .xls desteklenmez."
				},
				"ar": {
					"title": "كيف تحوّل Excel أو CSV إلى PDF",
					"lead": "الأداة تحوّل ملف XLSX أو CSV إلى جدول PDF. تُنقل قيم الخلايا فقط، لا الصيغ ولا الألوان ولا الرسوم.",
					"points": [
						"افتح nibrascode.com/ar/pdf/excel-pdf.",
						"اختر ملف XLSX أو CSV.",
						"اختر الورقة وصف العناوين والاتجاه.",
						"ابدأ ونزّل."
					],
					"note": "صيغة .xls القديمة غير مدعومة."
				},
				"ru": {
					"title": "Как перевести Excel или CSV в PDF",
					"lead": "Инструмент превращает XLSX или CSV в таблицу PDF. Переносятся только значения ячеек: без формул, цветов и диаграмм.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/excel-pdf.",
						"Выберите XLSX или CSV.",
						"Выберите лист, строку заголовков и ориентацию.",
						"Нажмите «Начать» и скачайте."
					],
					"note": "Старый .xls не поддерживается."
				}
			}
		},
		{
			"slug": "pdf-metn-qaraltmaq",
			"links": [
				{
					"path": "/pdf/redact",
					"label": {
						"az": "Mətn üstünü qarat",
						"en": "Redact PDF",
						"tr": "PDF karart",
						"ar": "تعتيم PDF",
						"ru": "Скрыть текст в PDF"
					}
				},
				{
					"path": "/pdf/protect",
					"label": {
						"az": "PDF-ə parol qoy",
						"en": "Protect PDF",
						"tr": "PDF'e parola koy",
						"ar": "حماية PDF",
						"ru": "Защитить PDF"
					}
				},
				{
					"path": "/apps/nibras-pdf",
					"label": {
						"az": "Nibras PDF tətbiqi",
						"en": "Nibras PDF app",
						"tr": "Nibras PDF uygulaması",
						"ar": "تطبيق Nibras PDF",
						"ru": "Приложение Nibras PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "PDF-də mətnin üstü necə qaraldılır",
					"lead": "PDF göndərməzdən əvvəl telefon, ünvan və ya kart nömrəsini gizlətmək istəyə bilərsiniz.\n\n«Mətn üstünü qarat» alətində səhifədə həmin yerin üstünə qara qutu çəkirsiniz.\n\n«Səhifəni şəkil et» seçimi açıq olanda qutunun altındakı mətn həmin səhifədən silinir.",
					"points": [
						"nibrascode.com/pdf/redact səhifəsini açın və PDF-i seçin.",
						"Səhifəni seçin və gizlənəcək yerin üstündə qutu dartın.",
						"«Qutulu səhifəni şəkil et» seçimini açıq saxlayın.",
						"«Başla» basın, endirin və nəticəni yoxlayın."
					],
					"note": "Bu sadə alətdir, hüquqi səviyyədə təsdiqlənmiş silmə deyil. Şəkil edilən səhifədə mətn seçilmir. Seçim bağlıdırsa, yalnız üstü örtülür və mətn kopyalana bilər."
				},
				"en": {
					"title": "How to redact text in a PDF",
					"lead": "Before sending a PDF you may want to hide a phone number, address or card number.\n\nIn Redact PDF you drag a black box over that spot.\n\nWith «Flatten» on, the text under the box is removed from that page.",
					"points": [
						"Open nibrascode.com/en/pdf/redact and choose the PDF.",
						"Pick the page and drag a box over what to hide.",
						"Keep «Flatten boxed pages» on.",
						"Press Start, download and check the result."
					],
					"note": "This is a simple tool, not certified legal-grade redaction. Flattened pages lose selectable text. With flatten off, text is only covered and can still be copied."
				},
				"tr": {
					"title": "PDF'te metin nasıl karartılır",
					"lead": "Gizlenecek yerin üstüne siyah kutu çizin. «Düzleştir» açıkken kutunun altındaki metin o sayfadan silinir.",
					"points": [
						"nibrascode.com/tr/pdf/redact açın, PDF'i seçin.",
						"Sayfada kutu sürükleyin.",
						"Düzleştirme seçeneğini açık tutun.",
						"Başlat, indirin ve kontrol edin."
					],
					"note": "Basit bir araçtır, hukuki düzeyde sertifikalı karartma değildir."
				},
				"ar": {
					"title": "كيف تعتّم نصاً في PDF",
					"lead": "ارسم مربعاً أسود فوق ما تريد إخفاءه. عند تفعيل خيار التسطيح يُحذف النص تحت المربع من تلك الصفحة.",
					"points": [
						"افتح nibrascode.com/ar/pdf/redact واختر الملف.",
						"اسحب مربعاً فوق النص.",
						"أبقِ خيار التسطيح مفعلاً.",
						"ابدأ ونزّل وتحقق من النتيجة."
					],
					"note": "أداة بسيطة وليست تعتيماً قانونياً معتمداً."
				},
				"ru": {
					"title": "Как скрыть текст в PDF",
					"lead": "Нарисуйте чёрный прямоугольник поверх нужного места. При включённом сведении текст под ним удаляется со страницы.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/redact и выберите PDF.",
						"Протяните рамку поверх текста.",
						"Оставьте сведение страницы включённым.",
						"Нажмите «Начать», скачайте и проверьте."
					],
					"note": "Это простой инструмент, не сертифицированное юридическое редактирование."
				}
			}
		},
		{
			"slug": "hesab-faktura-pdf",
			"links": [
				{
					"path": "/pdf/invoice",
					"label": {
						"az": "Hesab-faktura PDF",
						"en": "Invoice PDF",
						"tr": "Fatura PDF",
						"ar": "فاتورة PDF",
						"ru": "Счёт PDF"
					}
				},
				{
					"path": "/pdf/write-pdf",
					"label": {
						"az": "Sadə PDF düzəlt",
						"en": "Simple PDF editor",
						"tr": "Basit PDF",
						"ar": "PDF بسيط",
						"ru": "Простой PDF"
					}
				},
				{
					"path": "/vcard",
					"label": {
						"az": "Vizit QR",
						"en": "Contact QR",
						"tr": "Kartvizit QR",
						"ar": "QR جهة اتصال",
						"ru": "QR визитки"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Hesab-faktura PDF necə hazırlanır",
					"lead": "Kiçik iş və ya fərdi xidmət üçün sadə hesab-faktura lazım ola bilər.\n\n«Hesab-faktura PDF» alətində satıcını, alıcını və malları yazırsınız. Cəm, vergi və yekun özü hesablanır.\n\nNəticə səliqəli PDF-dir. Rəsmi e-qaimə deyil.",
					"points": [
						"nibrascode.com/pdf/invoice səhifəsini açın.",
						"Nömrə, tarix, valyuta, satıcı və alıcını yazın.",
						"Mal və ya xidmətləri, say və qiyməti əlavə edin. Lazımdırsa vergi % yazın.",
						"«Başla» basın və PDF-i endirin."
					],
					"note": "Bu sadə PDF fakturadır, vergi orqanının rəsmi e-qaiməsi deyil. Forma yalnız bu brauzerdə saxlanır, serverə getmir."
				},
				"en": {
					"title": "How to make an invoice PDF",
					"lead": "A small business or freelancer often needs a simple invoice.\n\nIn Invoice PDF you enter the seller, buyer and items. Subtotal, tax and total are calculated for you.\n\nThe result is a clean PDF. It is not an official e-invoice.",
					"points": [
						"Open nibrascode.com/en/pdf/invoice.",
						"Enter number, date, currency, seller and buyer.",
						"Add items with quantity and price; add tax % if needed.",
						"Press Start and download the PDF."
					],
					"note": "This is a simple PDF invoice, not an official tax e-invoice. The form is saved only in this browser."
				},
				"tr": {
					"title": "Fatura PDF nasıl hazırlanır",
					"lead": "Satıcı, alıcı ve kalemleri yazın; ara toplam, vergi ve toplam hesaplanır. Sonuç düzgün bir PDF'tir, resmi e-fatura değildir.",
					"points": [
						"nibrascode.com/tr/pdf/invoice açın.",
						"Numara, tarih, para birimi, satıcı ve alıcıyı yazın.",
						"Kalemleri ve vergi %'sini ekleyin.",
						"Başlat ve indirin."
					],
					"note": "Resmi e-fatura değildir."
				},
				"ar": {
					"title": "كيف تُعدّ فاتورة PDF",
					"lead": "اكتب البائع والمشتري والبنود، ويُحسب المجموع والضريبة تلقائياً. الناتج PDF مرتب وليس فاتورة إلكترونية رسمية.",
					"points": [
						"افتح nibrascode.com/ar/pdf/invoice.",
						"اكتب الرقم والتاريخ والعملة والبائع والمشتري.",
						"أضف البنود ونسبة الضريبة.",
						"ابدأ ونزّل."
					],
					"note": "ليست فاتورة إلكترونية رسمية."
				},
				"ru": {
					"title": "Как сделать счёт в PDF",
					"lead": "Укажите продавца, покупателя и позиции — сумма, налог и итог считаются сами. Это аккуратный PDF, а не официальный электронный счёт-фактура.",
					"points": [
						"Откройте nibrascode.com/ru/pdf/invoice.",
						"Укажите номер, дату, валюту, продавца и покупателя.",
						"Добавьте позиции и налог %.",
						"Нажмите «Начать» и скачайте."
					],
					"note": "Не является официальным электронным счётом-фактурой."
				}
			}
		},
		{
			"slug": "sekil-olcusu-deyismek",
			"links": [
				{
					"path": "/image/resize",
					"label": {
						"az": "Şəkil ölçüsünü dəyiş",
						"en": "Resize image",
						"tr": "Resim boyutlandır",
						"ar": "تغيير حجم الصورة",
						"ru": "Изменить размер фото"
					}
				},
				{
					"path": "/image/compress",
					"label": {
						"az": "Şəkli sıx",
						"en": "Compress image",
						"tr": "Resim sıkıştır",
						"ar": "ضغط الصورة",
						"ru": "Сжать фото"
					}
				},
				{
					"path": "/image/edit",
					"label": {
						"az": "Kəs / çevir",
						"en": "Crop / rotate",
						"tr": "Kırp / döndür",
						"ar": "قص / تدوير",
						"ru": "Обрезать / повернуть"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Şəklin ölçüsü necə dəyişdirilir",
					"lead": "Sayt, ərizə və ya sosial şəbəkə çox vaxt müəyyən ölçüdə şəkil istəyir.\n\n«Şəkil ölçüsünü dəyiş» alətində eni və hündürlüyü piksellə və ya faizlə yazırsınız.\n\nNisbəti qorusanız, şəkil uzanmır. Bir neçə şəkli birlikdə edib ZIP kimi endirmək olar.",
					"points": [
						"nibrascode.com/image/resize səhifəsini açın.",
						"Bir və ya bir neçə şəkil seçin.",
						"En və hündürlüyü (px) və ya faizi yazın. «Nisbəti qoru» açıq qalsın.",
						"Lazımdırsa formatı seçin və endirin."
					],
					"note": "Kiçik şəkli böyütmək aydınlıq qatmır. HEIC brauzer açırsa işləyir; açmırsa, telefonda JPG kimi paylaşın. Şəkillər brauzerdə qalır."
				},
				"en": {
					"title": "How to resize an image",
					"lead": "Websites, forms and social apps often want a certain image size.\n\nIn Resize image you set width and height in pixels or as a percent.\n\nKeep the ratio and the photo won't stretch. Several photos can be done at once and downloaded as a ZIP.",
					"points": [
						"Open nibrascode.com/en/image/resize.",
						"Choose one or more photos.",
						"Enter width and height (px) or a percent. Keep «Keep ratio» on.",
						"Pick a format if needed and download."
					],
					"note": "Enlarging a small photo doesn't add detail. HEIC works only if your browser opens it. Photos stay in your browser."
				},
				"tr": {
					"title": "Resim boyutu nasıl değiştirilir",
					"lead": "Genişlik ve yüksekliği piksel veya yüzde olarak girin. Oranı korursanız resim esnemez.",
					"points": [
						"nibrascode.com/tr/image/resize açın.",
						"Fotoğraf seçin.",
						"Boyutu veya yüzdeyi girin.",
						"İndirin."
					],
					"note": "HEIC yalnızca tarayıcı açabiliyorsa çalışır."
				},
				"ar": {
					"title": "كيف تغيّر حجم صورة",
					"lead": "أدخل العرض والارتفاع بالبكسل أو بالنسبة. مع حفظ التناسب لا تتمدد الصورة.",
					"points": [
						"افتح nibrascode.com/ar/image/resize.",
						"اختر الصور.",
						"أدخل المقاس أو النسبة.",
						"نزّل."
					],
					"note": "صيغة HEIC تعمل فقط إن فتحها المتصفح."
				},
				"ru": {
					"title": "Как изменить размер фото",
					"lead": "Укажите ширину и высоту в пикселях или процентах. С сохранением пропорций фото не растянется.",
					"points": [
						"Откройте nibrascode.com/ru/image/resize.",
						"Выберите фото.",
						"Укажите размер или процент.",
						"Скачайте."
					],
					"note": "HEIC работает, только если браузер его открывает."
				}
			}
		},
		{
			"slug": "sekil-formati-cevirmek",
			"links": [
				{
					"path": "/image/convert",
					"label": {
						"az": "Şəkil formatını çevir",
						"en": "Convert image",
						"tr": "Resim dönüştür",
						"ar": "تحويل الصورة",
						"ru": "Конвертировать фото"
					}
				},
				{
					"path": "/image/resize",
					"label": {
						"az": "Şəkil ölçüsünü dəyiş",
						"en": "Resize image",
						"tr": "Resim boyutlandır",
						"ar": "تغيير حجم الصورة",
						"ru": "Изменить размер фото"
					}
				},
				{
					"path": "/pdf/image-pdf",
					"label": {
						"az": "Şəkildən PDF",
						"en": "Image to PDF",
						"tr": "Resimden PDF",
						"ar": "من صورة إلى PDF",
						"ru": "Фото в PDF"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Şəkil formatı necə çevrilir (PNG, JPG, WebP)",
					"lead": "Bəzi saytlar yalnız JPG qəbul edir, bəziləri isə WebP ilə daha tez açılır.\n\n«Şəkil formatını çevir» aləti şəkli JPG, PNG və ya WebP edir.\n\nJPG və WebP üçün keyfiyyəti seçmək olar. Bir neçə şəkli ZIP kimi endirə bilərsiniz.",
					"points": [
						"nibrascode.com/image/convert səhifəsini açın.",
						"Şəkilləri seçin.",
						"Formatı seçin: JPG, PNG və ya WebP. Lazımdırsa keyfiyyəti dəyişin.",
						"Endirin və ya «Hamısını yüklə (ZIP)» basın."
					],
					"note": "JPG şəffaflığı saxlamır: fon ağ olur. HEIC brauzer açırsa çevrilir; çıxış formatı kimi HEIC yoxdur. Şəkillər brauzerdə qalır."
				},
				"en": {
					"title": "How to convert image format (PNG, JPG, WebP)",
					"lead": "Some sites accept only JPG; WebP loads faster on the web.\n\nConvert image turns a photo into JPG, PNG or WebP.\n\nFor JPG and WebP you can set quality. Several photos can be downloaded as a ZIP.",
					"points": [
						"Open nibrascode.com/en/image/convert.",
						"Choose photos.",
						"Pick JPG, PNG or WebP and adjust quality if needed.",
						"Download, or press Download all (ZIP)."
					],
					"note": "JPG has no transparency: the background becomes white. HEIC input works only if your browser opens it; HEIC is not an output. Photos stay in your browser."
				},
				"tr": {
					"title": "Resim biçimi nasıl dönüştürülür",
					"lead": "Araç fotoğrafı JPG, PNG veya WebP yapar. Birden çok dosya ZIP olarak indirilebilir.",
					"points": [
						"nibrascode.com/tr/image/convert açın.",
						"Fotoğrafları seçin.",
						"Biçimi seçin.",
						"İndirin."
					],
					"note": "JPG şeffaflık tutmaz. HEIC yalnızca tarayıcı açabiliyorsa çalışır."
				},
				"ar": {
					"title": "كيف تحوّل صيغة الصورة",
					"lead": "الأداة تحوّل الصورة إلى JPG أو PNG أو WebP، ويمكن تنزيل عدة صور كملف ZIP.",
					"points": [
						"افتح nibrascode.com/ar/image/convert.",
						"اختر الصور.",
						"اختر الصيغة.",
						"نزّل."
					],
					"note": "JPG بلا شفافية. HEIC يعمل فقط إن فتحه المتصفح."
				},
				"ru": {
					"title": "Как сменить формат фото",
					"lead": "Инструмент переводит фото в JPG, PNG или WebP; несколько файлов можно скачать ZIP-архивом.",
					"points": [
						"Откройте nibrascode.com/ru/image/convert.",
						"Выберите фото.",
						"Выберите формат.",
						"Скачайте."
					],
					"note": "JPG без прозрачности. HEIC работает, только если браузер его открывает."
				}
			}
		},
		{
			"slug": "vizit-qr-kod",
			"links": [
				{
					"path": "/qr",
					"label": {
						"az": "QR kod (Kontakt növü)",
						"en": "QR code (Contact type)",
						"tr": "QR kod (Kişi türü)",
						"ar": "رمز QR (نوع جهة اتصال)",
						"ru": "QR-код (тип «Контакт»)"
					}
				},
				{
					"path": "/vcard",
					"label": {
						"az": "Qısa vizit QR forması",
						"en": "Quick contact QR form",
						"tr": "Hızlı kartvizit QR",
						"ar": "نموذج QR سريع",
						"ru": "Быстрая форма QR визитки"
					}
				},
				{
					"path": "/apps/nibras-qr",
					"label": {
						"az": "Nibras QR tətbiqi",
						"en": "Nibras QR app",
						"tr": "Nibras QR uygulaması",
						"ar": "تطبيق Nibras QR",
						"ru": "Приложение Nibras QR"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Vizit kartı üçün QR kod necə hazırlanır",
					"lead": "Vizit QR-i skan edən şəxs adınızı, telefonunuzu və emailinizi bir toxunuşla kontaktlara saxlayır.\n\nSaytın QR bölməsində növ kimi «Kontakt» seçin. Ad, telefon, email, şirkət və saytı yazın.\n\nQR dərhal görünür. Rəngini dəyişib PNG və ya SVG kimi endirə bilərsiniz.",
					"points": [
						"nibrascode.com/qr səhifəsini açın.",
						"Növlərdən «Kontakt» seçin (Wi-Fi yox).",
						"Ad, telefon, email, şirkət və saytı yazın.",
						"QR-i endirin və vizit kartına və ya imzaya qoyun."
					],
					"note": "Məlumat çox olanda QR sıxlaşır və çətin skan olunur: qeydi qısa saxlayın. Çapdan əvvəl telefonla yoxlayın. Daha sadə forma və .vcf fayl lazımdırsa, nibrascode.com/vcard da var."
				},
				"en": {
					"title": "How to make a QR code for a business card",
					"lead": "Whoever scans a contact QR can save your name, phone and email in one tap.\n\nIn the site's QR section, choose the «Contact» type. Enter name, phone, email, company and website.\n\nThe QR appears right away. You can change its colors and download it.",
					"points": [
						"Open nibrascode.com/en/qr.",
						"Choose the «Contact» type (not Wi-Fi).",
						"Enter name, phone, email, company and website.",
						"Download the QR and put it on your card or signature."
					],
					"note": "Too much data makes the QR dense and hard to scan: keep notes short. Test with a phone before printing. For a simpler form with a .vcf file, there is also nibrascode.com/en/vcard."
				},
				"tr": {
					"title": "Kartvizit için QR kod nasıl hazırlanır",
					"lead": "Sitenin QR bölümünde «Kişi» türünü seçin; ad, telefon ve e-posta yazın. Tarayan kişi bilgileri rehberine kaydeder.",
					"points": [
						"nibrascode.com/tr/qr açın.",
						"«Kişi» türünü seçin.",
						"Bilgileri yazın.",
						"QR'ı indirin."
					],
					"note": "Basmadan önce telefonla test edin. Daha basit form: nibrascode.com/tr/vcard."
				},
				"ar": {
					"title": "كيف تُعدّ رمز QR لبطاقة العمل",
					"lead": "في قسم QR بالموقع اختر نوع «جهة اتصال» واكتب الاسم والهاتف والبريد. من يمسح الرمز يحفظ بياناتك.",
					"points": [
						"افتح nibrascode.com/ar/qr.",
						"اختر نوع جهة اتصال.",
						"اكتب البيانات.",
						"نزّل الرمز."
					],
					"note": "جرّبه بالهاتف قبل الطباعة. نموذج أبسط: nibrascode.com/ar/vcard."
				},
				"ru": {
					"title": "Как сделать QR-код для визитки",
					"lead": "В разделе QR на сайте выберите тип «Контакт» и укажите имя, телефон и email. Отсканировав код, человек сохранит контакт.",
					"points": [
						"Откройте nibrascode.com/ru/qr.",
						"Выберите тип «Контакт».",
						"Заполните данные.",
						"Скачайте QR."
					],
					"note": "Проверьте телефоном перед печатью. Упрощённая форма: nibrascode.com/ru/vcard."
				}
			}
		},
		{
			"slug": "zip-sixmaq-acmaq",
			"links": [
				{
					"path": "/zip",
					"label": {
						"az": "ZIP sıx / aç",
						"en": "ZIP / unzip",
						"tr": "ZIP yap / aç",
						"ar": "ضغط / فك ZIP",
						"ru": "ZIP: сжать / открыть"
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
					"path": "/image/compress",
					"label": {
						"az": "Şəkli sıx",
						"en": "Compress image",
						"tr": "Resim sıkıştır",
						"ar": "ضغط الصورة",
						"ru": "Сжать фото"
					}
				}
			],
			"piece": {
				"az": {
					"title": "Faylları ZIP-ə necə yığmaq və ZIP-i necə açmaq olar",
					"lead": "Çox faylı bir dəfəyə göndərmək üçün ZIP rahatdır.\n\nZIP alətində faylları seçib bir arxivə yığırsınız. «ZIP-i aç» hissəsində isə arxivdəki faylları tək-tək və ya hamısını endirirsiniz.\n\nHər şey brauzerdə gedir, fayllar serverə getmir.",
					"points": [
						"nibrascode.com/zip səhifəsini açın.",
						"Yığmaq üçün: faylları seçin, arxiv adını və sıxma növünü seçin, «ZIP hazırla» basın.",
						"Açmaq üçün: «ZIP-i aç» seçin və ZIP faylı seçin.",
						"Lazım olan faylı və ya hamısını endirin."
					],
					"note": "Parollu ZIP, RAR və 7z açılmır. JPG, MP4, PDF kimi artıq sıxılmış fayllar ZIP-də çox kiçilmir."
				},
				"en": {
					"title": "How to zip files and open a ZIP",
					"lead": "A ZIP makes it easy to send many files at once.\n\nIn the ZIP tool you pick files and pack them into one archive. In Open a ZIP you download files one by one or all of them.\n\nEverything runs in the browser; files don't go to a server.",
					"points": [
						"Open nibrascode.com/en/zip.",
						"To pack: choose files, set the archive name and compression, press Make ZIP.",
						"To open: choose Open a ZIP and pick the ZIP file.",
						"Download one file or all of them."
					],
					"note": "Password ZIP, RAR and 7z are not supported. Already-compressed files like JPG, MP4 and PDF barely shrink."
				},
				"tr": {
					"title": "Dosyalar nasıl ZIP yapılır ve ZIP nasıl açılır",
					"lead": "Dosyaları seçip tek arşive toplayın veya bir ZIP'i açıp dosyaları indirin. Her şey tarayıcıda olur.",
					"points": [
						"nibrascode.com/tr/zip açın.",
						"Dosyaları seçip «ZIP hazırla»ya basın.",
						"Açmak için ZIP dosyasını seçin.",
						"Dosyaları indirin."
					],
					"note": "Parolalı ZIP, RAR ve 7z desteklenmez."
				},
				"ar": {
					"title": "كيف تضغط الملفات بصيغة ZIP وتفتحها",
					"lead": "اختر الملفات واجمعها في أرشيف واحد، أو افتح ملف ZIP ونزّل محتواه. كل شيء في المتصفح.",
					"points": [
						"افتح nibrascode.com/ar/zip.",
						"اختر الملفات واضغط إعداد ZIP.",
						"للفتح اختر ملف ZIP.",
						"نزّل الملفات."
					],
					"note": "لا يُدعم ZIP بكلمة مرور ولا RAR و7z."
				},
				"ru": {
					"title": "Как сжать файлы в ZIP и открыть ZIP",
					"lead": "Выберите файлы и соберите их в архив или откройте ZIP и скачайте содержимое. Всё работает в браузере.",
					"points": [
						"Откройте nibrascode.com/ru/zip.",
						"Выберите файлы и нажмите «Собрать ZIP».",
						"Чтобы открыть, выберите ZIP-файл.",
						"Скачайте файлы."
					],
					"note": "ZIP с паролем, RAR и 7z не поддерживаются."
				}
			}
		}
	]
];
var EXTRA_TOPICS = [{
	slug: "pulsuz-chatgpt-alternativleri",
	links: [{
		"path": "/ai",
		"label": {
			"az": "Nibras AI",
			"en": "Nibras AI",
			"tr": "Nibras AI",
			"ar": "Nibras AI",
			"ru": "Nibras AI"
		}
	}, {
		"path": "/movzu/prompt-nedir",
		"label": {
			"az": "Prompt nədir?",
			"en": "What is a prompt?",
			"tr": "Prompt nedir?",
			"ar": "ما هو prompt؟",
			"ru": "Что такое prompt?"
		}
	}],
	piece: {
		az: {
			title: "ChatGPT-yə pulsuz alternativlər: Azərbaycan dilində işləyən AI söhbətləri",
			lead: "ChatGPT-nin pulsuz planı var, amma limitə çatanda və ya başqa üslub lazım olanda digər pulsuz süni intellekt söhbətlərinə baxmaq olar. Aşağıdakıların hamısında Azərbaycan dilində yazmaq olur. Cavabın keyfiyyəti modeldən və mövzudan asılıdır, ona görə eyni sualı iki yerdə yoxlamaq faydalıdır.\n\nPulsuz planların limitləri və modelləri tez-tez dəyişir. Bu səhifə ümumi istiqamət verir. Dəqiq limiti hər xidmətin öz saytında yoxlayın.",
			points: [
				"Google Gemini (gemini.google.com): Google hesabı ilə pulsuzdur, Azərbaycan dilini rəsmi dəstəkləyən dillər siyahısındadır.",
				"Microsoft Copilot (copilot.microsoft.com): pulsuz, Microsoft hesabı ilə daha çox imkan açılır.",
				"Claude (claude.ai): pulsuz planı var, uzun mətn və kod izahında güclüdür, gündəlik limiti azdır.",
				"DeepSeek (chat.deepseek.com): pulsuz, xüsusilə riyaziyyat və kodda istifadə olunur.",
				"Nibras AI (nibrascode.com/ai): bu saytın öz söhbətidir, hesabsız və pulsuzdur. Açıq pulsuz modellərlə işləyir, gündəlik limiti var. Proqramlaşdırma və sayt alətləri ilə bağlı suallar üçün nəzərdə tutulub."
			],
			note: "Heç bir AI söhbətinə şifrə, kart nömrəsi və ya şəxsiyyət vəsiqəsi məlumatı yazmayın. Rəqəm, tarix və qanunla bağlı cavabları başqa mənbədən yoxlayın."
		},
		en: {
			title: "Free ChatGPT alternatives that work in Azerbaijani",
			lead: "ChatGPT has a free plan, but when you hit the limit or want a different style you can try other free AI chats. You can write in Azerbaijani in all of the ones below. Answer quality depends on the model and the topic, so it helps to ask the same question in two places.\n\nFree plan limits and models change often. This page gives a general direction; check the exact limit on each service's own site.",
			points: [
				"Google Gemini (gemini.google.com): free with a Google account; Azerbaijani is on its list of supported languages.",
				"Microsoft Copilot (copilot.microsoft.com): free; a Microsoft account unlocks more.",
				"Claude (claude.ai): has a free plan, strong at long text and code explanation, low daily limit.",
				"DeepSeek (chat.deepseek.com): free, often used for math and code.",
				"Nibras AI (nibrascode.com/ai): this site's own chat, free and without an account. It runs on open free models and has a daily limit. It is meant for programming and site-tool questions."
			],
			note: "Never type passwords, card numbers or ID details into any AI chat. Check answers about numbers, dates and laws against another source."
		},
		tr: {
			title: "ChatGPT'ye ücretsiz alternatifler: Azerbaycanca çalışan yapay zeka sohbetleri",
			lead: "ChatGPT'nin ücretsiz planı var, ama limit dolunca başka ücretsiz sohbetler denenebilir. Aşağıdakilerin hepsinde Azerbaycanca yazılabilir. Limitler sık değişir.",
			points: [
				"Google Gemini: Google hesabıyla ücretsiz.",
				"Microsoft Copilot: ücretsiz.",
				"Claude: ücretsiz planı var, günlük limiti düşük.",
				"DeepSeek: ücretsiz.",
				"Nibras AI (nibrascode.com/ai): bu sitenin kendi sohbeti, hesapsız ve ücretsiz, günlük limiti var."
			],
			note: "Şifre ve kart bilgisi yazmayın. Önemli cevapları kontrol edin."
		},
		ar: {
			title: "بدائل مجانية لـ ChatGPT تعمل باللغة الأذربيجانية",
			lead: "لدى ChatGPT خطة مجانية، لكن عند بلوغ الحد يمكن تجربة محادثات ذكاء اصطناعي مجانية أخرى. الحدود تتغير كثيرًا.",
			points: [
				"Google Gemini: مجاني بحساب Google.",
				"Microsoft Copilot: مجاني.",
				"Claude: له خطة مجانية بحد يومي منخفض.",
				"DeepSeek: مجاني.",
				"Nibras AI (nibrascode.com/ai): محادثة هذا الموقع، مجانية وبلا حساب، ولها حد يومي."
			],
			note: "لا تكتب كلمات المرور أو أرقام البطاقات. تحقق من الإجابات المهمة."
		},
		ru: {
			title: "Бесплатные альтернативы ChatGPT, которые понимают азербайджанский",
			lead: "У ChatGPT есть бесплатный план, но когда лимит закончился, можно попробовать другие бесплатные ИИ-чаты. Лимиты часто меняются.",
			points: [
				"Google Gemini: бесплатно с аккаунтом Google.",
				"Microsoft Copilot: бесплатно.",
				"Claude: есть бесплатный план с небольшим дневным лимитом.",
				"DeepSeek: бесплатно.",
				"Nibras AI (nibrascode.com/ai): чат этого сайта, бесплатно и без аккаунта, есть дневной лимит."
			],
			note: "Не вводите пароли и номера карт. Проверяйте важные ответы."
		}
	}
}, ...[
	{
		"slug": "prompt-numuneleri",
		"links": [{
			"path": "/movzu/prompt-nedir",
			"label": {
				"az": "Prompt nədir?",
				"en": "What is a prompt?",
				"tr": "Prompt nedir?",
				"ar": "ما هو prompt؟",
				"ru": "Что такое prompt?"
			}
		}, {
			"path": "/ai",
			"label": {
				"az": "Nibras AI",
				"en": "Nibras AI",
				"tr": "Nibras AI",
				"ar": "Nibras AI",
				"ru": "Nibras AI"
			}
		}],
		"piece": {
			"az": {
				"title": "Prompt necə yazılır: Azərbaycan dilində nümunələr",
				"lead": "AI-dan yaxşı cavab almaq üçün sualı düzgün yazmaq lazımdır. Buna prompt deyilir.\n\nYaxşı prompt üç şey deyir: nə lazımdır, kimin üçündür, hansı formada olsun. Qısa və aydın olsun.\n\nAşağıdakı nümunələri kopyalayıb öz mövzunuza uyğunlaşdırın.",
				"points": [
					"Məktub: «İş yerinə 3 günlük məzuniyyət üçün qısa, rəsmi ərizə yaz. Tarix: 10–12 noyabr.»",
					"İzah: «Fotosintezi 10 yaşlı uşağa 5 cümlə ilə izah et.»",
					"Kod: «Bu Python kodunda xəta haradadır? Səbəbini sadə dillə de.» (kodu altına yapışdırın)",
					"Tərcümə: «Bu mətni rəsmi ingilis dilinə tərcümə et, mənasını dəyişmə.»",
					"Plan: «Referat üçün 5 bölməli plan təklif et. Mövzu: Bakının tarixi.»",
					"Yoxlama: «Bu mətndə qrammatik səhvləri tap və düzəlt.»"
				],
				"note": "Cavab bəyənmədinizsə, yenidən soruşun: «daha qısa», «daha sadə», «cədvəl kimi» deyin. Şəxsi məlumat yazmayın."
			},
			"en": {
				"title": "How to write a prompt: examples in Azerbaijani",
				"lead": "To get a good answer from AI, write the request well. That request is called a prompt.\n\nA good prompt says three things: what you need, who it is for, and what form it should take. Keep it short and clear.\n\nCopy the examples below and adapt them to your topic.",
				"points": [
					"Letter: «Write a short formal request for 3 days of leave. Dates: 10–12 November.»",
					"Explain: «Explain photosynthesis to a 10-year-old in 5 sentences.»",
					"Code: «Where is the bug in this Python code? Say why in simple words.» (paste the code below)",
					"Translate: «Translate this text into formal English without changing the meaning.»",
					"Plan: «Suggest a 5-part outline for an essay on the history of Baku.»",
					"Check: «Find and fix grammar mistakes in this text.»"
				],
				"note": "Not happy with the answer? Ask again: say «shorter», «simpler» or «as a table». Do not type personal data."
			},
			"tr": {
				"title": "Prompt nasıl yazılır: örnekler",
				"lead": "İyi prompt üç şey söyler: ne lazım, kimin için, hangi biçimde.",
				"points": [
					"«3 günlük izin için kısa resmi dilekçe yaz.»",
					"«Fotosentezi 10 yaşındaki çocuğa 5 cümleyle anlat.»",
					"«Bu Python kodunda hata nerede?»",
					"«Bu metindeki dil bilgisi hatalarını düzelt.»"
				],
				"note": "Beğenmezseniz «daha kısa» veya «tablo olarak» deyin."
			},
			"ar": {
				"title": "كيف تكتب prompt: أمثلة",
				"lead": "الـ prompt الجيد يقول: ماذا تحتاج، ولمن، وبأي شكل.",
				"points": [
					"«اكتب طلب إجازة رسميًا قصيرًا لمدة 3 أيام.»",
					"«اشرح التمثيل الضوئي لطفل في 5 جمل.»",
					"«أين الخطأ في كود Python هذا؟»",
					"«صحّح الأخطاء اللغوية في هذا النص.»"
				],
				"note": "إذا لم يعجبك الجواب فقل «أقصر» أو «كجدول»."
			},
			"ru": {
				"title": "Как писать prompt: примеры",
				"lead": "Хороший prompt говорит: что нужно, для кого и в каком виде.",
				"points": [
					"«Напиши короткое заявление на 3 дня отпуска.»",
					"«Объясни фотосинтез ребёнку 10 лет в 5 предложениях.»",
					"«Где ошибка в этом коде Python?»",
					"«Исправь грамматические ошибки в тексте.»"
				],
				"note": "Не понравилось — попросите «короче» или «таблицей»."
			}
		}
	},
	{
		"slug": "ai-ile-kod-oyrenmek",
		"links": [
			{
				"path": "/programming",
				"label": {
					"az": "Proqramlaşdırma dərsləri",
					"en": "Programming lessons",
					"tr": "Programlama dersleri",
					"ar": "دروس البرمجة",
					"ru": "Уроки программирования"
				}
			},
			{
				"path": "/nece/python-ilk-proqram",
				"label": {
					"az": "İlk Python proqramı",
					"en": "First Python program",
					"tr": "İlk Python programı",
					"ar": "أول برنامج Python",
					"ru": "Первая программа Python"
				}
			},
			{
				"path": "/ai",
				"label": {
					"az": "Nibras AI",
					"en": "Nibras AI",
					"tr": "Nibras AI",
					"ar": "Nibras AI",
					"ru": "Nibras AI"
				}
			}
		],
		"piece": {
			"az": {
				"title": "Süni intellektlə kod öyrənmək: başlanğıc üçün yol",
				"lead": "AI kod öyrənməyi asanlaşdırır. Amma kodu sizin yerinizə yazdırmaq sizi öyrətmir.\n\nAI-ı müəllim kimi işlədin. Kodu özünüz yazın. İlişəndə soruşun: «niyə işləmir?», «bu sətir nə edir?».\n\nBelə öyrənəndə bilik yerində qalır.",
				"points": [
					"Bir dil seçin. Başlanğıc üçün Python və ya JavaScript uyğundur.",
					"Hər gün kiçik tapşırıq edin: kalkulyator, siyahı, sual-cavab oyunu.",
					"Xəta çıxanda xəta mətnini AI-a yapışdırıb səbəbini soruşun.",
					"Hazır kodu kopyalamazdan əvvəl hər sətri izah etməsini istəyin.",
					"Öyrəndiyinizi öz sözlərinizlə yazın."
				],
				"note": "AI səhv kod da verə bilər. Kodu həmişə işlədib yoxlayın."
			},
			"en": {
				"title": "Learning to code with AI: a path for beginners",
				"lead": "AI makes learning to code easier. But letting it write the code for you does not teach you.\n\nUse AI as a teacher. Write the code yourself. When stuck, ask: «why does this fail?», «what does this line do?».\n\nLearning this way makes it stick.",
				"points": [
					"Pick one language. Python or JavaScript suits beginners.",
					"Do a small task every day: a calculator, a list, a quiz game.",
					"When an error shows up, paste the error text into the AI and ask why.",
					"Before copying ready code, ask it to explain each line.",
					"Write what you learned in your own words."
				],
				"note": "AI can give wrong code too. Always run and test it."
			},
			"tr": {
				"title": "Yapay zekayla kod öğrenmek",
				"lead": "AI'yı öğretmen gibi kullanın. Kodu kendiniz yazın, takılınca sorun.",
				"points": [
					"Bir dil seçin: Python veya JavaScript.",
					"Her gün küçük görev yapın.",
					"Hata metnini AI'ya sorun.",
					"Her satırı açıklamasını isteyin."
				],
				"note": "AI yanlış kod da verebilir, test edin."
			},
			"ar": {
				"title": "تعلّم البرمجة بالذكاء الاصطناعي",
				"lead": "استخدم الذكاء الاصطناعي كمعلّم. اكتب الكود بنفسك واسأل حين تتوقف.",
				"points": [
					"اختر لغة: Python أو JavaScript.",
					"نفّذ مهمة صغيرة كل يوم.",
					"الصق نص الخطأ واسأل عن السبب.",
					"اطلب شرح كل سطر."
				],
				"note": "قد يعطي كودًا خاطئًا، فجرّبه دائمًا."
			},
			"ru": {
				"title": "Учиться программировать с ИИ",
				"lead": "Используйте ИИ как учителя. Пишите код сами, спрашивайте, когда застряли.",
				"points": [
					"Выберите язык: Python или JavaScript.",
					"Каждый день маленькая задача.",
					"Вставьте текст ошибки и спросите причину.",
					"Просите объяснить каждую строку."
				],
				"note": "ИИ может ошибаться — всегда проверяйте код."
			}
		}
	},
	{
		"slug": "ereb-dili-baslangic",
		"links": [{
			"path": "/apps/nibras-arabic",
			"label": {
				"az": "Nibras Arabic tətbiqi",
				"en": "Nibras Arabic app",
				"tr": "Nibras Arabic uygulaması",
				"ar": "تطبيق Nibras Arabic",
				"ru": "Приложение Nibras Arabic"
			}
		}],
		"piece": {
			"az": {
				"title": "Ərəb dilini öyrənməyə haradan başlamaq",
				"lead": "Ərəb dili çətin görünür, amma düzgün sıra ilə addım-addım gedir.\n\nƏvvəl 28 hərfi və yazılışı öyrənin. Sonra ən çox işlənən sözlərə keçin. Qrammatikanı ən sonda, sözlər tanış olandan sonra götürün.\n\nGündə 15–20 dəqiqə, fasiləsiz həftəlik saatlardan yaxşıdır.",
				"points": [
					"Hərflər: 28 hərfi və sözün əvvəlində, ortasında, sonunda necə yazıldığını öyrənin.",
					"Sözlər: gündəlik fel, isim və sifətlərlə başlayın.",
					"Dialoqlar: qısa danışıq nümunələrini səsli oxuyun.",
					"Fellər: keçmiş, indiki zaman və əmr formasını öyrənin.",
					"Təkrar: kartlarla hər gün qısa təkrar edin."
				],
				"note": "Nibras Arabic tətbiqi Azərbaycan dilində danışanlar üçündür: 28 hərf yazı məşqi, 704 fel, 200 isim, 100 sifət və 186 dialoq. Material cihazda saxlanılır, internetsiz də təkrar etmək olur."
			},
			"en": {
				"title": "Where to start learning Arabic",
				"lead": "Arabic looks hard, but in the right order it goes step by step.\n\nFirst learn the 28 letters and how they are written. Then move to the most common words. Leave grammar for later, once words feel familiar.\n\n15–20 minutes a day beats a few long sessions a week.",
				"points": [
					"Letters: learn the 28 letters and their start, middle and end forms.",
					"Words: start with everyday verbs, nouns and adjectives.",
					"Dialogues: read short conversations out loud.",
					"Verbs: learn past, present and imperative forms.",
					"Review: do short daily review with cards."
				],
				"note": "The Nibras Arabic app is made for Azerbaijani speakers: writing practice for 28 letters, 704 verbs, 200 nouns, 100 adjectives and 186 dialogues. Content is kept on the device, so you can review offline."
			},
			"tr": {
				"title": "Arapça öğrenmeye nereden başlanır",
				"lead": "Önce 28 harf, sonra sık kelimeler, en son dil bilgisi.",
				"points": [
					"28 harfi ve yazılışını öğrenin.",
					"Günlük fiil ve isimlerle başlayın.",
					"Kısa diyalogları sesli okuyun.",
					"Her gün kartlarla tekrar edin."
				],
				"note": "Nibras Arabic uygulamasında 704 fiil ve 186 diyalog var."
			},
			"ar": {
				"title": "من أين تبدأ تعلّم العربية",
				"lead": "ابدأ بالحروف الثمانية والعشرين، ثم الكلمات الشائعة، ثم القواعد.",
				"points": [
					"تعلّم الحروف وأشكالها.",
					"ابدأ بالأفعال والأسماء اليومية.",
					"اقرأ حوارات قصيرة بصوت عال.",
					"راجع يوميًا بالبطاقات."
				],
				"note": "تطبيق Nibras Arabic موجّه للناطقين بالأذربيجانية."
			},
			"ru": {
				"title": "С чего начать изучать арабский",
				"lead": "Сначала 28 букв, потом частые слова, грамматика — позже.",
				"points": [
					"Выучите буквы и их формы.",
					"Начните с повседневных глаголов и существительных.",
					"Читайте короткие диалоги вслух.",
					"Повторяйте каждый день по карточкам."
				],
				"note": "В приложении Nibras Arabic 704 глагола и 186 диалогов."
			}
		}
	}
]];
var TOOL_LANDINGS = [
	{
		"slug": "fon-sil-pulsuz",
		"links": [{
			"path": "/erase",
			"label": {
				"az": "Fon sil",
				"en": "Remove background",
				"tr": "Arka plan sil",
				"ar": "حذف الخلفية",
				"ru": "Удалить фон"
			}
		}, {
			"path": "/image",
			"label": {
				"az": "Şəkil sıx",
				"en": "Compress photo",
				"tr": "Fotoğraf sıkıştır",
				"ar": "ضغط الصورة",
				"ru": "Сжать фото"
			}
		}],
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
		"links": [{
			"path": "/image",
			"label": {
				"az": "Şəkil sıx",
				"en": "Compress photo",
				"tr": "Fotoğraf sıkıştır",
				"ar": "ضغط الصورة",
				"ru": "Сжать фото"
			}
		}, {
			"path": "/erase",
			"label": {
				"az": "Fon sil",
				"en": "Remove background",
				"tr": "Arka plan sil",
				"ar": "حذف الخلفية",
				"ru": "Удалить фон"
			}
		}],
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
		"links": [{
			"path": "/faiz",
			"label": {
				"az": "Faiz hesabla",
				"en": "Percent calculator",
				"tr": "Yüzde hesapla",
				"ar": "حاسبة النسبة",
				"ru": "Посчитать процент"
			}
		}],
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
var PROBLEM_PAGES = [
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
		"links": [{
			"path": "/qr",
			"label": {
				"az": "QR kod",
				"en": "QR code",
				"tr": "QR kod",
				"ar": "رمز QR",
				"ru": "QR-код"
			}
		}, {
			"path": "/wifi",
			"label": {
				"az": "Wi-Fi QR",
				"en": "Wi-Fi QR",
				"tr": "Wi-Fi QR",
				"ar": "QR للواي فاي",
				"ru": "Wi-Fi QR"
			}
		}],
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
var L = (az, en, tr, ar, ru) => ({
	az,
	en,
	tr,
	ar,
	ru
});
function piece(title, lead, points, note) {
	return {
		az: {
			title: title.az,
			lead: lead.az,
			points: points.az,
			note: note?.az
		},
		en: {
			title: title.en,
			lead: lead.en,
			points: points.en,
			note: note?.en
		},
		tr: {
			title: title.tr,
			lead: lead.tr,
			points: points.tr,
			note: note?.tr
		},
		ar: {
			title: title.ar,
			lead: lead.ar,
			points: points.ar,
			note: note?.ar
		},
		ru: {
			title: title.ru,
			lead: lead.ru,
			points: points.ru,
			note: note?.ru
		}
	};
}
var WORDS = [
	{
		slug: "api-nedir",
		piece: piece(L("API nədir?", "What is an API?", "API nedir?", "ما هي API؟", "Что такое API?"), L("API bir proqramın başqa proqrama hazır qapıdan cavab verməsidir. O proqramın içini yazmırsan. Ünvana sorğu göndərirsən, cavab alırsan.", "An API is a ready door where one program answers another. You do not write the inside of that program. You send a request to an address and get an answer.", "API, bir programın başka bir programa hazır kapıdan cevap vermesidir. O programın içini yazmazsın. Adrese istek gönderir, cevap alırsın.", "API باب جاهز يجيب فيه برنامج على برنامج آخر. لا تكتب داخل ذلك البرنامج. ترسل طلبًا إلى عنوان وتأخذ الجواب.", "API — это готовая дверь, через которую одна программа отвечает другой. Внутрь той программы ты не пишешь. Отправляешь запрос по адресу и получаешь ответ."), {
			az: [
				"Sorğu gedir, cavab gəlir. Cavab çox vaxt JSON olur.",
				"Hava, məzənnə və tərcümə belə qapılardan oxunur.",
				"Açar istəyən qapı qeydiyyat tələb edir. Açarsız qapı birbaşa açılır."
			],
			en: [
				"A request goes out and an answer comes back. The answer is often JSON.",
				"Weather, exchange rates, and translation are read through doors like this.",
				"A door that asks for a key needs registration. A door without a key opens directly."
			],
			tr: [
				"İstek gider, cevap gelir. Cevap çoğu zaman JSON olur.",
				"Hava, kur ve çeviri böyle kapılardan okunur.",
				"Anahtar isteyen kapı kayıt ister. Anahtarsız kapı doğrudan açılır."
			],
			ar: [
				"يذهب الطلب ويأتي الجواب. والجواب غالبًا JSON.",
				"الطقس وسعر الصرف والترجمة تُقرأ من أبواب كهذه.",
				"الباب الذي يطلب مفتاحًا يحتاج تسجيلًا. الباب بلا مفتاح يُفتح مباشرة."
			],
			ru: [
				"Уходит запрос, приходит ответ. Ответ часто бывает JSON.",
				"Погода, курс и перевод читаются через такие двери.",
				"Дверь с ключом просит регистрацию. Дверь без ключа открывается сразу."
			]
		}, L("Hava saytı öz stansiyasını sənə vermir. Ünvana şəhərin adını göndərirsən, o temperaturu qaytarır. Açarsız ünvanı hər kəs çağıra bilər. Açarlı ünvan sənin adını soruşur.", "A weather site does not hand you its station. You send a city name to an address, and it returns the temperature. An address without a key can be called by anyone. An address with a key asks who you are.", "Hava sitesi kendi istasyonunu sana vermez. Adrese şehrin adını gönderirsin, o sıcaklığı döndürür. Anahtarsız adresi herkes çağırabilir. Anahtarlı adres senin adını sorar.", "موقع الطقس لا يعطيك محطته. ترسل اسم المدينة إلى عنوان فيعيد الحرارة. العنوان بلا مفتاح يستطيع أي أحد أن يناديه. العنوان بمفتاح يسأل عن اسمك.", "Сайт погоды не отдаёт тебе свою станцию. Ты отправляешь имя города по адресу, он возвращает температуру. Адрес без ключа может вызвать кто угодно. Адрес с ключом спрашивает, кто ты."))
	},
	{
		slug: "deyisen-nedir",
		piece: piece(L("Dəyişən nədir?", "What is a variable?", "Değişken nedir?", "ما هو المتغير؟", "Что такое переменная?"), L("Dəyişən məlumatın adıdır. Ad qalır, içindəki qiymət dəyişə bilər.", "A variable is the name of a piece of data. The name stays, and the value inside can change.", "Değişken, bir bilginin adıdır. Ad kalır, içindeki değer değişebilir.", "المتغير اسم لمعلومة. الاسم يبقى، والقيمة التي بداخله يمكن أن تتغير.", "Переменная — это имя данных. Имя остаётся, а значение внутри может меняться."), {
			az: [
				"`seher = \"Bakı\"` yazanda adın içində Bakı durur.",
				"Sonra `seher = \"Gəncə\"` desən, köhnə qiymət gedir.",
				"Adı bir dəfə qoyursan, sonra həmin adla oxuyursan."
			],
			en: [
				"`city = \"Baku\"` stores Baku under that name.",
				"Later `city = \"Ganja\"` replaces the old value.",
				"You choose the name once, then read it by that name."
			],
			tr: [
				"`sehir = \"Bakü\"` yazınca adın içinde Bakü durur.",
				"Sonra `sehir = \"Gence\"` dersen eski değer gider.",
				"Adı bir kez koyarsın, sonra o adla okursun."
			],
			ar: [
				"`seher = \"Bakı\"` يضع باكو داخل الاسم.",
				"ثم `seher = \"Ganja\"` يذهب بالقيمة القديمة.",
				"تضع الاسم مرة، ثم تقرأ به."
			],
			ru: [
				"`seher = \"Bakı\"` хранит Баку под этим именем.",
				"Потом `seher = \"Ganja\"` убирает старое значение.",
				"Имя задаёшь один раз и дальше читаешь по нему."
			]
		}, L("Dəyişən qutu kimidir. Adı qutunun üstündə yazılır, qiymət içində durur. Eyni ada ikinci dəfə yazanda köhnə qiymət silinir. Adın içində boşluq olmur.", "A variable is like a box. The name is written on the box, and the value sits inside. Writing to the same name again removes the old value. The name has no space inside it.", "Değişken kutu gibidir. Adı kutunun üstüne yazılır, değer içinde durur. Aynı ada ikinci kez yazınca eski değer silinir. Adın içinde boşluk olmaz.", "المتغير مثل صندوق. الاسم يُكتب على الصندوق، والقيمة تقف في الداخل. الكتابة على الاسم نفسه مرة ثانية تمسح القيمة القديمة. لا فراغ داخل الاسم.", "Переменная похожа на коробку. Имя написано на коробке, значение лежит внутри. Вторая запись в то же имя стирает старое значение. Внутри имени пробела нет."))
	},
	{
		slug: "funksiya-nedir",
		piece: piece(L("Funksiya nədir?", "What is a function?", "Fonksiyon nedir?", "ما هي الدالة؟", "Что такое функция?"), L("Funksiya bir işin adıdır. Adı çağıranda həmin iş yenidən görülür. Eyni kodu hər yerdə təkrar yazmırsan.", "A function is the name of a job. When you call the name, that job runs again. You do not copy the same code everywhere.", "Fonksiyon bir işin adıdır. Adı çağırınca o iş yeniden yapılır. Aynı kodu her yere kopyalamazsın.", "الدالة اسم لعمل. حين تنادي الاسم يُعاد ذلك العمل. لا تنسخ الرمز نفسه في كل مكان.", "Функция — это имя одного дела. Когда зовёшь имя, дело выполняется снова. Один и тот же код не копируешь везде."), {
			az: [
				"İçinə məlumat verə bilərsən. Məsələn şəhərin adı.",
				"İş bitəndə nəticə qaytara bilər. Məsələn saat.",
				"Adı aydın olanda kod da oxunur."
			],
			en: [
				"You can pass data in, such as a city name.",
				"When the job ends it can return a result, such as the time.",
				"A clear name makes the code readable."
			],
			tr: [
				"İçine bilgi verebilirsin. Örneğin şehrin adı.",
				"İş bitince sonuç döndürebilir. Örneğin saat.",
				"Adı açık olunca kod da okunur."
			],
			ar: [
				"يمكن أن تدخل معلومة، مثل اسم المدينة.",
				"حين ينتهي العمل يمكن أن يُرجع نتيجة، مثل الساعة.",
				"إذا كان الاسم واضحًا صار الرمز مقروءًا."
			],
			ru: [
				"Внутрь можно передать данные, например имя города.",
				"В конце дело может вернуть результат, например время.",
				"Понятное имя делает код читаемым."
			]
		}, L("`salam()` hər çağırılanda eyni cümləni yazır. İçinə ad versən, cümlə həmin adla dəyişir. Funksiya özü işləmir. Onu çağıran sətir işlədir.", "`hello()` writes the same sentence every time you call it. If you pass a name in, the sentence changes with that name. A function does not run by itself. The line that calls it runs it.", "`merhaba()` her çağrıda aynı cümleyi yazar. İçine ad verirsen cümle o adla değişir. Fonksiyon kendi çalışmaz. Onu çağıran satır çalıştırır.", "`salam()` يكتب الجملة نفسها كلما ناديته. إذا أدخلت اسمًا تغيّرت الجملة بذلك الاسم. الدالة لا تعمل وحدها. السطر الذي يناديها هو الذي يشغّلها.", "`salam()` пишет одну и ту же фразу при каждом вызове. Если передать имя, фраза меняется с этим именем. Функция сама не работает. Её запускает строка, которая её зовёт."))
	},
	{
		slug: "dongu-nedir",
		piece: piece(L("Döngü nədir?", "What is a loop?", "Döngü nedir?", "ما هي الحلقة؟", "Что такое цикл?"), L("Döngü eyni işi siyahı bitənə qədər, ya da şərt düz olanda, təkrar edir.", "A loop repeats the same job until a list ends, or while a condition stays true.", "Döngü aynı işi liste bitene kadar ya da koşul doğru olduğu sürece tekrarlar.", "الحلقة تكرر العمل نفسه حتى تنتهي القائمة، أو ما دام الشرط صحيحًا.", "Цикл повторяет одно дело, пока список не кончится или пока условие верно."), {
			az: [
				"On şəhərin havasını əl ilə tək-tək yazmırsan. Siyahını gəzirsən.",
				"Şərt heç bitməsə, döngü də bitmir. Buna sonsuz döngü deyirlər.",
				"`for` siyahını gəzir. `while` şərtə baxır."
			],
			en: [
				"You do not type the weather of ten cities by hand. You walk the list.",
				"If the condition never ends, the loop never ends. That is an infinite loop.",
				"`for` walks a list. `while` watches a condition."
			],
			tr: [
				"On şehrin havasını elle tek tek yazmazsın. Listeyi gezersin.",
				"Koşul hiç bitmezse döngü de bitmez. Buna sonsuz döngü denir.",
				"`for` listeyi gezer. `while` koşula bakar."
			],
			ar: [
				"لا تكتب طقس عشر مدن بيدك واحدة واحدة. تمشي على القائمة.",
				"إذا لم ينتهِ الشرط لم تنتهِ الحلقة. وهذا يُسمى حلقة لا نهائية.",
				"`for` يمشي على القائمة. `while` ينظر إلى الشرط."
			],
			ru: [
				"Погоду десяти городов не пишешь руками по одной. Проходишь список.",
				"Если условие не кончается, не кончается и цикл. Это бесконечный цикл.",
				"`for` идёт по списку. `while` смотрит на условие."
			]
		}, L("Üç şəhərin siyahısını `for` ilə gəzəndə eyni sətir üç dəfə işləyir. `while` şərt yalan olanda dayanır. Şərti dəyişməsən, proqram orada qalır.", "When `for` walks a list of three cities, the same line runs three times. `while` stops when the condition is false. If you never change the condition, the program stays there.", "Üç şehrin listesini `for` ile gezince aynı satır üç kez çalışır. `while` koşul yanlış olunca durur. Koşulu değiştirmezsen program orada kalır.", "حين يمشي `for` على قائمة من ثلاث مدن يعمل السطر نفسه ثلاث مرات. `while` يقف حين يكون الشرط خطأ. إذا لم تغيّر الشرط يبقى البرنامج هناك.", "Когда `for` проходит список из трёх городов, одна и та же строка выполняется три раза. `while` останавливается, когда условие ложно. Если условие не менять, программа остаётся там."))
	},
	{
		slug: "html-nedir",
		piece: piece(L("HTML nədir?", "What is HTML?", "HTML nedir?", "ما هو HTML؟", "Что такое HTML?"), L("HTML səhifənin quruluşudur. Başlıq, abzas və düymə harada durur, onu HTML deyir. Rəngi CSS, hərəkəti JavaScript verir.", "HTML is the structure of a page. It says where the heading, paragraph, and button sit. CSS gives the color, and JavaScript gives the motion.", "HTML sayfanın kuruluşudur. Başlık, paragraf ve düğme nerede durur, onu HTML söyler. Rengi CSS, hareketi JavaScript verir.", "HTML هو بنية الصفحة. هو الذي يقول أين يقف العنوان والفقرة والزر. اللون من CSS، والحركة من JavaScript.", "HTML — это устройство страницы. Он говорит, где стоят заголовок, абзац и кнопка. Цвет даёт CSS, движение даёт JavaScript."), {
			az: [
				"Hər açılan teq bağlanır. `<p>` abzası `</p>` ilə bitir.",
				"Səhifə `<html>` ilə başlayır. Görünən hissə `<body>` içindədir.",
				"Brauzer HTML-i oxuyur və səhifəni qurur."
			],
			en: [
				"An opened tag is closed. A `<p>` paragraph ends with `</p>`.",
				"The page starts with `<html>`. The visible part is inside `<body>`.",
				"The browser reads the HTML and builds the page."
			],
			tr: [
				"Açılan etiket kapanır. `<p>` paragrafı `</p>` ile biter.",
				"Sayfa `<html>` ile başlar. Görünen kısım `<body>` içindedir.",
				"Tarayıcı HTML'i okur ve sayfayı kurar."
			],
			ar: [
				"الوسم الذي يُفتح يُغلق. فقرة `<p>` تنتهي بـ `</p>`.",
				"الصفحة تبدأ بـ `<html>`. الجزء الظاهر داخل `<body>`.",
				"المتصفح يقرأ HTML ويبني الصفحة."
			],
			ru: [
				"Открытый тег закрывается. Абзац `<p>` кончается `</p>`.",
				"Страница начинается с `<html>`. Видимая часть внутри `<body>`.",
				"Браузер читает HTML и собирает страницу."
			]
		}, L("Boş bir faylda `<h1>` başlıq, `<p>` abzasdır. Brauzer teqi görməyincə yazını adi mətn sayır. Teq bağlanmasa, sonrakı yazı da həmin teqin içində qalır.", "In an empty file `<h1>` is a heading and `<p>` is a paragraph. Until the browser sees a tag, it treats the words as plain text. If a tag is not closed, the text after it stays inside that tag.", "Boş bir dosyada `<h1>` başlık, `<p>` paragraftır. Tarayıcı etiketi görmeyince yazıyı düz metin sayar. Etiket kapanmazsa sonraki yazı da o etiketin içinde kalır.", "في ملف فارغ `<h1>` عنوان و`<p>` فقرة. ما لم يرَ المتصفح وسمًا يعدّ الكلام نصًا عاديًا. إذا لم يُغلق الوسم يبقى الكلام الذي بعده داخله.", "В пустом файле `<h1>` — заголовок, `<p>` — абзац. Пока браузер не видит тег, он считает слова обычным текстом. Если тег не закрыт, следующий текст остаётся внутри него."))
	},
	{
		slug: "css-nedir",
		piece: piece(L("CSS nədir?", "What is CSS?", "CSS nedir?", "ما هو CSS؟", "Что такое CSS?"), L("CSS səhifənin görünüşüdür. Rəng, ölçü, ara və düzülüş buradadır. Yazının özü HTML-də qalır.", "CSS is how the page looks. Color, size, space, and layout live here. The words themselves stay in HTML.", "CSS sayfanın görünüşüdür. Renk, boyut, boşluk ve diziliş buradadır. Yazının kendisi HTML'de kalır.", "CSS هو شكل الصفحة. اللون والحجم والمسافة والترتيب هنا. الكلام نفسه يبقى في HTML.", "CSS — это вид страницы. Цвет, размер, промежуток и раскладка живут здесь. Сами слова остаются в HTML."), {
			az: [
				"`p { color: #111 }` abzasın rəngini dəyişir.",
				"Eyni qayda bir çox yerə tətbiq olunur.",
				"Telefonda və geniş ekranda ayrı düzülüş vermək olar."
			],
			en: [
				"`p { color: #111 }` changes the paragraph color.",
				"The same rule can apply in many places.",
				"A phone and a wide screen can have different layouts."
			],
			tr: [
				"`p { color: #111 }` paragrafın rengini değiştirir.",
				"Aynı kural birçok yere uygulanır.",
				"Telefonda ve geniş ekranda ayrı diziliş verilebilir."
			],
			ar: [
				"`p { color: #111 }` يغيّر لون الفقرة.",
				"القاعدة نفسها تُطبق في مواضع كثيرة.",
				"يمكن أن يختلف الترتيب بين الهاتف والشاشة الواسعة."
			],
			ru: [
				"`p { color: #111 }` меняет цвет абзаца.",
				"Одно правило применяется во многих местах.",
				"На телефоне и на широком экране раскладка может быть разной."
			]
		}, L("HTML yazını deyir, CSS onun rəngini və yerini. `body { margin: 0 }` səhifənin kənar boşluğunu silir. CSS olmadan səhifə ağ fonda qara yazı kimi açılır.", "HTML says the words. CSS says their color and place. `body { margin: 0 }` removes the page's outer gap. Without CSS the page opens as black text on a white background.", "HTML yazıyı söyler, CSS onun rengini ve yerini. `body { margin: 0 }` sayfanın kenar boşluğunu siler. CSS olmadan sayfa beyaz fonda siyah yazı gibi açılır.", "HTML يقول الكلام، وCSS يقول لونه ومكانه. `body { margin: 0 }` يزيل فراغ حافة الصفحة. بلا CSS تُفتح الصفحة كنص أسود على خلفية بيضاء.", "HTML говорит слова, CSS — их цвет и место. `body { margin: 0 }` убирает внешний промежуток страницы. Без CSS страница открывается чёрным текстом на белом фоне."))
	},
	{
		slug: "javascript-nedir",
		piece: piece(L("JavaScript nədir?", "What is JavaScript?", "JavaScript nedir?", "ما هو JavaScript؟", "Что такое JavaScript?"), L("JavaScript səhifəyə hərəkət verir. Düyməyə basılanda, siyahı dəyişəndə və məlumat gələndə işləyən kod budur.", "JavaScript gives a page its motion. It is the code that runs when a button is pressed, a list changes, or data arrives.", "JavaScript sayfaya hareket verir. Düğmeye basılınca, liste değişince ve veri gelince çalışan kod budur.", "JavaScript يعطي الصفحة حركتها. هو الرمز الذي يعمل حين يُضغط الزر أو تتغير القائمة أو تصل البيانات.", "JavaScript даёт странице движение. Это код, который работает, когда нажата кнопка, меняется список или приходят данные."), {
			az: [
				"Brauzerdə işləyir. Ayrıca proqram quraşdırmaq şərt deyil.",
				"Serverdə də işləyə bilər. Buna Node deyirlər.",
				"HTML quruluşdur, CSS görünüşdür, JavaScript hərəkətdir."
			],
			en: [
				"It runs in the browser. You do not have to install a separate program.",
				"It can also run on a server. That is called Node.",
				"HTML is structure, CSS is appearance, JavaScript is motion."
			],
			tr: [
				"Tarayıcıda çalışır. Ayrı program kurmak şart değildir.",
				"Sunucuda da çalışabilir. Buna Node denir.",
				"HTML kuruluş, CSS görünüş, JavaScript harekettir."
			],
			ar: [
				"يعمل في المتصفح. لا يلزم تثبيت برنامج منفصل.",
				"يمكن أن يعمل على الخادم أيضًا. وهذا يُسمى Node.",
				"HTML بنية، وCSS شكل، وJavaScript حركة."
			],
			ru: [
				"Работает в браузере. Отдельную программу ставить не обязательно.",
				"Может работать и на сервере. Это называют Node.",
				"HTML — устройство, CSS — вид, JavaScript — движение."
			]
		}, L("Düyməyə `click` bağlayanda basış sayını artıra bilərsən. JavaScript söndürüləndə düymə görünür, amma iş görmür. Səhifənin quruluşu yenə HTML-də qalır.", "When you bind `click` to a button, you can count the presses. If JavaScript is turned off, the button is still visible, but it does no work. The structure of the page still stays in HTML.", "Düğmeye `click` bağlayınca basış sayısını artırabilirsin. JavaScript kapanınca düğme görünür, ama iş görmez. Sayfanın kuruluşu yine HTML'de kalır.", "حين تربط `click` بزر تستطيع عدّ الضغطات. إذا أُوقف JavaScript يبقى الزر ظاهرًا لكنه لا يعمل. بنية الصفحة تبقى في HTML.", "Если привязать `click` к кнопке, можно считать нажатия. Когда JavaScript выключен, кнопка видна, но ничего не делает. Устройство страницы всё равно остаётся в HTML."))
	},
	{
		slug: "python-nedir",
		piece: piece(L("Python nədir?", "What is Python?", "Python nedir?", "ما هو Python؟", "Что такое Python?"), L("Python oxunaqlı yazılan proqramlaşdırma dilidir. Kiçik proqram, hesab və məlumat işi buradan başlaya bilər.", "Python is a programming language written to be readable. A small program, a calculation, and data work can start here.", "Python okunaklı yazılan bir programlama dilidir. Küçük program, hesap ve veri işi buradan başlayabilir.", "Python لغة برمجة تُكتب لتُقرأ. البرنامج الصغير والحساب وعمل البيانات يمكن أن يبدأ من هنا.", "Python — язык программирования, который пишут так, чтобы его было легко читать. Маленькая программа, расчёт и работа с данными могут начаться отсюда."), {
			az: [
				"Sətirin sonuna nöqtəli vergül qoymursan. Blok boşluqla ayrılır.",
				"`print(\"Salam\")` mətni ekrana yazır.",
				"Telefon tətbiqi üçün adətən Java və ya Kotlin seçilir. Python öyrənməyə və serverə uyğundur."
			],
			en: [
				"You do not put a semicolon at the end of a line. A block is set apart by spaces.",
				"`print(\"Hello\")` writes the text on the screen.",
				"A phone app is usually written in Java or Kotlin. Python fits learning and the server."
			],
			tr: [
				"Satır sonuna noktalı virgül koymazsın. Blok boşlukla ayrılır.",
				"`print(\"Merhaba\")` metni ekrana yazar.",
				"Telefon uygulaması için genellikle Java veya Kotlin seçilir. Python öğrenmeye ve sunucuya uyar."
			],
			ar: [
				"لا تضع فاصلة منقوطة في آخر السطر. الكتلة تُفصل بالمسافة.",
				"`print(\"Salam\")` يكتب النص على الشاشة.",
				"تطبيق الهاتف يُكتب غالبًا بـ Java أو Kotlin. Python يصلح للتعلم وللخادم."
			],
			ru: [
				"В конце строки точку с запятой не ставишь. Блок отделяется пробелами.",
				"`print(\"Salam\")` пишет текст на экран.",
				"Приложение для телефона обычно пишут на Java или Kotlin. Python подходит для учёбы и для сервера."
			]
		}, L("`print(2 + 3)` ekrana 5 yazır. Sətirin əvvəlindəki boşluq bloku göstərir. Boşluğu səhv qoysan, proqram dayanır. Nöqtəli vergül lazım deyil.", "`print(2 + 3)` writes 5 on the screen. The space at the start of a line marks a block. Put the space wrong and the program stops. A semicolon is not needed.", "`print(2 + 3)` ekrana 5 yazar. Satırın başındaki boşluk bloğu gösterir. Boşluğu yanlış koyarsan program durur. Noktalı virgül gerekmez.", "`print(2 + 3)` يكتب 5 على الشاشة. الفراغ في أول السطر يبيّن الكتلة. إذا وضعت الفراغ خطأ يتوقف البرنامج. الفاصلة المنقوطة ليست لازمة.", "`print(2 + 3)` пишет 5 на экран. Пробел в начале строки показывает блок. Поставишь пробел неверно — программа остановится. Точка с запятой не нужна."))
	},
	{
		slug: "alqoritm-nedir",
		piece: piece(L("Alqoritm nədir?", "What is an algorithm?", "Algoritma nedir?", "ما هي الخوارزمية؟", "Что такое алгоритм?"), L("Alqoritm işin ardıcıllığıdır. Əvvəl nə, sonra nə olacağı yazılır. Dil dəyişsə də, ardıcıllıq eyni qala bilər.", "An algorithm is the order of a job. It says what happens first and what happens next. The language can change, and the order can stay the same.", "Algoritma işin sırasıdır. Önce ne, sonra ne olacağı yazılır. Dil değişse de sıra aynı kalabilir.", "الخوارزمية ترتيب العمل. يُكتب ما يحدث أولًا وما يحدث بعده. اللغة قد تتغير والترتيب يبقى.", "Алгоритм — это порядок дела. Пишется, что сначала и что потом. Язык может смениться, а порядок остаться тем же."), {
			az: [
				"Aydın addımdır. \"Bir az bax\" alqoritm deyil.",
				"Eyni giriş eyni nəticə verməlidir.",
				"Kod alqoritmin bir dildə yazılmış halıdır."
			],
			en: [
				"It is a clear step. \"Look a bit\" is not an algorithm.",
				"The same input should give the same result.",
				"Code is an algorithm written in one language."
			],
			tr: [
				"Açık bir adımdır. \"Biraz bak\" algoritma değildir.",
				"Aynı giriş aynı sonucu vermelidir.",
				"Kod, algoritmanın bir dilde yazılmış halıdır."
			],
			ar: [
				"هي خطوة واضحة. «انظر قليلًا» ليست خوارزمية.",
				"المدخل نفسه ينبغي أن يعطي النتيجة نفسها.",
				"الرمز هو الخوارزمية مكتوبة بلغة واحدة."
			],
			ru: [
				"Это ясный шаг. «Посмотри немного» — не алгоритм.",
				"Один и тот же вход должен дать один и тот же результат.",
				"Код — это алгоритм, записанный на одном языке."
			]
		}, L("Çay dəmləmək də alqoritmdir: suyu qaynat, stəkanı qoy, dəmlə, süz. Kod bunu bir dildə yazır. Addım qarışıqdırsa, kod da qarışıq çıxır.", "Making tea is an algorithm too: boil the water, put the cup, brew, pour. Code writes that in one language. If the step is muddy, the code comes out muddy.", "Çay demlemek de algoritmadır: suyu kaynat, bardağı koy, demle, süz. Kod bunu bir dilde yazar. Adım karışıksa kod da karışık çıkar.", "إعداد الشاي خوارزمية أيضًا: اغلِ الماء، ضع الكأس، انقع، صُبّ. الرمز يكتب ذلك بلغة واحدة. إذا كانت الخطوة غامضة خرج الرمز غامضًا.", "Заварка чая тоже алгоритм: вскипяти воду, поставь стакан, завари, процеди. Код записывает это на одном языке. Если шаг мутный, код тоже выходит мутным."))
	},
	{
		slug: "json-nedir",
		piece: piece(L("JSON nədir?", "What is JSON?", "JSON nedir?", "ما هو JSON؟", "Что такое JSON?"), L("JSON proqramların bir-birinə məlumat ötürdüyü sadə mətndir. Açarı və qiyməti olur.", "JSON is simple text that programs use to pass data to each other. It has a key and a value.", "JSON, programların birbirine veri ilettiği sade metindir. Anahtarı ve değeri olur.", "JSON نص بسيط تتبادل به البرامج البيانات. فيه مفتاح وقيمة.", "JSON — это простой текст, которым программы передают друг другу данные. У него есть ключ и значение."), {
			az: [
				"Mətn dırnaq içindədir. Rəqəm dırnaqsızdır.",
				"Siyahı `[ ]` ilə, cütlük `{ }` ilə yazılır.",
				"Hava və məzənnə cavabı çox vaxt JSON olur."
			],
			en: [
				"Text is inside quotes. A number has no quotes.",
				"A list is written with `[ ]`, and a pair with `{ }`.",
				"A weather or exchange-rate answer is often JSON."
			],
			tr: [
				"Metin tırnak içindedir. Sayı tırnaksızdır.",
				"Liste `[ ]` ile, çift `{ }` ile yazılır.",
				"Hava ve kur cevabı çoğu zaman JSON olur."
			],
			ar: [
				"النص داخل علامات اقتباس. الرقم بلا اقتباس.",
				"القائمة تُكتب بـ `[ ]`، والزوج بـ `{ }`.",
				"جواب الطقس أو سعر الصرف غالبًا JSON."
			],
			ru: [
				"Текст стоит в кавычках. Число без кавычек.",
				"Список пишется через `[ ]`, пара через `{ }`.",
				"Ответ о погоде или курсе часто бывает JSON."
			]
		}, L("`{\"seher\":\"Bakı\"}` bir cütlükdür. Açar `seher`, qiymət `Bakı`. Vergül unudulsa, proqram mətni qəbul etmir. JSON səhifəni çəkmir, yalnız məlumatı daşıyır.", "`{\"city\":\"Baku\"}` is one pair. The key is `city`, the value is `Baku`. If a comma is missing, the program rejects the text. JSON does not draw the page. It only carries the data.", "`{\"sehir\":\"Bakü\"}` bir çifttir. Anahtar `sehir`, değer `Bakü`. Virgül unutulursa program metni kabul etmez. JSON sayfayı çizmez, yalnız veriyi taşır.", "`{\"seher\":\"Bakı\"}` زوج واحد. المفتاح `seher` والقيمة `Bakı`. إذا نُسيت الفاصلة رفض البرنامج النص. JSON لا يرسم الصفحة. يحمل البيانات فقط.", "`{\"seher\":\"Bakı\"}` — это одна пара. Ключ `seher`, значение `Bakı`. Если запятая забыта, программа не принимает текст. JSON страницу не рисует. Он только несёт данные."))
	}
];
var BASE_ERRORS = [
	{
		slug: "emr-taninmir",
		piece: piece(L("python daxili və ya xarici əmr deyil", "python is not recognized", "python iç veya dış komut değil", "python ليس أمرًا داخليًا أو خارجيًا", "python не является внутренней или внешней командой"), L("Windows bu cümləni `python`, `node`, `npm`, `java`, `dotnet` və ya `psql` tapmayanda yazır. İngilis ekranda belədir: `'python' is not recognized as an internal or external command, operable program or batch file.` Azərbaycan dilində Windows bunu belə göstərir: `daxili və ya xarici əmr, icra edilə bilən proqram və ya toplu fayl kimi tanınmır.`\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.", "Windows writes this when it cannot find `python`, `node`, `npm`, `java`, `dotnet`, or `psql`. The English line is: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nDo not change everything at once. Check the cause in order.", "Windows bu cümleyi `python`, `node`, `npm`, `java`, `dotnet` veya `psql` bulamayınca yazar. İngilizce ekranda şöyle durur: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.", "يكتب Windows هذه الجملة حين لا يجد `python` أو `node` أو `npm` أو `java` أو `dotnet` أو `psql`. في الشاشة الإنجليزية: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.", "Windows пишет это, когда не находит `python`, `node`, `npm`, `java`, `dotnet` или `psql`. Английская строка такая: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nНе меняй всё сразу. Проверяй причину по порядку."), {
			az: [
				"Əvvəl `py --version` yaz. Cavab gəlirsə Python durur, `python` sözü tapılmır. İşə `py` ilə davam et.",
				"`python` yazanda Microsoft Store açılırsa, Başlatda `Manage app execution aliases` axtar. `python.exe` və `python3.exe` söndür. Terminalı bağla, yenisini aç. Proqramı silmə.",
				"`where.exe python` yaz. Birinci sətir `WindowsApps` olmamalıdır.",
				"Qovluq adında ə, ö, ü, ı, ş, ğ, ç varsa, məsələn `C:\\Users\\Əli`, pip və npm yolu qəbul etməyə bilər. Layihəni `C:\\dev` kimi latın hərfli qovluğa qoy. Windows istifadəçi adını dəyişmə.",
				"Eyni cümlə `node`, `npm`, `java`, `dotnet` və `psql` üçündür. Əmr dəyişir, dayanma eynidir."
			],
			en: [
				"First type `py --version`. If an answer comes, Python is there and the word `python` is not found. Continue with `py`.",
				"If `python` opens the Microsoft Store, search Start for `Manage app execution aliases`. Turn off `python.exe` and `python3.exe`. Close the terminal and open a new one. Do not uninstall the program.",
				"Type `where.exe python`. The first line should not be `WindowsApps`.",
				"If a folder name has ə, ö, ü, ı, ş, ğ, or ç, such as `C:\\Users\\Əli`, pip and npm may refuse the path. Put the project in a Latin-letter folder such as `C:\\dev`. Do not rename the Windows user.",
				"The same sentence is for `node`, `npm`, `java`, `dotnet`, and `psql`. The command changes. The stop is the same."
			],
			tr: [
				"Önce `py --version` yaz. Cevap geliyorsa Python duruyor, `python` sözü bulunmuyor. İşe `py` ile devam et.",
				"`python` yazınca Microsoft Store açılıyorsa Başlat’ta `Manage app execution aliases` ara. `python.exe` ve `python3.exe` kapat. Terminali kapat, yenisini aç. Programı silme.",
				"`where.exe python` yaz. İlk satır `WindowsApps` olmamalı.",
				"Klasör adında ə, ö, ü, ı, ş, ğ, ç varsa, örneğin `C:\\Users\\Əli`, pip ve npm yolu kabul etmeyebilir. Projeyi `C:\\dev` gibi Latin harfli klasöre koy. Windows kullanıcı adını değiştirme.",
				"Aynı cümle `node`, `npm`, `java`, `dotnet` ve `psql` içindir. Komut değişir, durma aynıdır."
			],
			ar: [
				"اكتب أولًا `py --version`. إذا جاء جواب فـ Python موجود والكلمة `python` غير موجودة. أكمل بـ `py`.",
				"إذا فتح `python` متجر Microsoft فابحث في ابدأ عن `Manage app execution aliases`. أوقف `python.exe` و`python3.exe`. أغلق الطرفية وافتح واحدة جديدة. لا تحذف البرنامج.",
				"اكتب `where.exe python`. السطر الأول يجب ألا يكون `WindowsApps`.",
				"إذا كان في اسم المجلد ə أو ö أو ü أو ı أو ş أو ğ أو ç، مثل `C:\\Users\\Əli`، فقد يرفض pip وnpm المسار. ضع المشروع في مجلد بحروف لاتينية مثل `C:\\dev`. لا تغيّر اسم مستخدم Windows.",
				"الجملة نفسها لـ `node` و`npm` و`java` و`dotnet` و`psql`. الأمر يتغير والتوقف نفسه."
			],
			ru: [
				"Сначала напиши `py --version`. Если ответ есть, Python стоит, а слово `python` не находится. Продолжай через `py`.",
				"Если `python` открывает Microsoft Store, в Пуске найди `Manage app execution aliases`. Выключи `python.exe` и `python3.exe`. Закрой терминал и открой новый. Программу не удаляй.",
				"Напиши `where.exe python`. Первая строка не должна быть `WindowsApps`.",
				"Если в имени папки есть ə, ö, ü, ı, ş, ğ или ç, например `C:\\Users\\Əli`, pip и npm могут не принять путь. Положи проект в папку латиницей, например `C:\\dev`. Имя пользователя Windows не переименовывай.",
				"Та же фраза для `node`, `npm`, `java`, `dotnet` и `psql`. Команда другая, остановка та же."
			]
		}, L("PATH-ə bir neçə qovluğu bir anda yapışdırma. Əvvəl `py --version`.", "Do not paste several folders into PATH at once. First run `py --version`.", "PATH’e birkaç klasörü bir anda yapıştırma. Önce `py --version`.", "لا تلصق عدة مجلدات في PATH دفعة واحدة. أولًا `py --version`.", "Не вставляй в PATH несколько папок сразу. Сначала `py --version`."))
	},
	{
		slug: "e-herfi",
		code: `import sys
sys.stdout.reconfigure(encoding="utf-8")

print("Azərbaycan")

with open("metn.txt", "w", encoding="utf-8") as fayl:
    fayl.write("Azərbaycan\\n")
`,
		piece: piece(L("Konsolda ə hərfi kvadrat olur", "The letter ə shows as a square", "Konsolda ə harfi kare olur", "حرف ə يظهر مربعًا في الطرفية", "Буква ə в консоли становится квадратом"), L("Python dayanırsa ekranda bu sətir olur: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` hərfi `ə`-dir. Böyük `Ə` də eyni yerdədir. Proqram işləyib ekranda kvadrat və ya `?` qalırsa, hərf gedib, şrift onu çəkmir. Bu, iki ayrı dayanmadır.\n\nTürk səhifələri `cp1254` yazır. Python-un bu cədvəlində ü, ö, ş, ğ, ç, ı var. ə yoxdur. Ona görə həmin təlimat bu hərfi düzəltmir.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.", "If Python stops, the screen says: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` is the letter `ə`. Capital `Ə` is in the same place. If the program runs and the screen shows a square or `?`, the letter went out and the font cannot draw it. Those are two different stops.\n\nTurkish pages say `cp1254`. Python's table has ü, ö, ş, ğ, ç, and ı. It does not have ə. That guide does not fix this letter.\n\nDo not change everything at once. Check the cause in order.", "Python duruyorsa ekranda bu satır olur: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` harfi `ə`-dir. Büyük `Ə` de aynı yerdedir. Program çalışıp ekranda kare ya da `?` kalıyorsa harf gitmiş, yazı tipi onu çizmiyordur. Bu, iki ayrı durmadır.\n\nTürkçe sayfalar `cp1254` yazar. Python'un bu tablosunda ü, ö, ş, ğ, ç, ı vardır. ə yoktur. O yüzden o anlatım bu harfi düzeltmez.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.", "إذا توقف Python فالشاشة تكتب: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` هو الحرف `ə`. الحرف الكبير `Ə` في الموضع نفسه. إذا عمل البرنامج وبقي على الشاشة مربع أو `?` فالحرف خرج والخط لا يرسمه. هذان توقفان مختلفان.\n\nصفحات التركية تكتب `cp1254`. جدول Python فيه ü وö وş وğ وç وı. ليس فيه ə. لذلك ذلك الشرح لا يصلح هذا الحرف.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.", "Если Python останавливается, на экране строка: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` — это буква `ə`. Заглавная `Ə` там же. Если программа работает, а на экране квадрат или `?`, буква ушла, а шрифт её не рисует. Это две разные остановки.\n\nТурецкие страницы пишут `cp1254`. В таблице Python есть ü, ö, ş, ğ, ç и ı. Буквы ə там нет. Поэтому то руководство эту букву не чинит.\n\nНе меняй всё сразу. Проверяй причину по порядку."), {
			az: [
				"Faylı UTF-8 saxla. VS Code-un aşağı küncündə UTF-8 yazılmalıdır. Notepad-də «Unicode» UTF-16-dır, onu seçmə.",
				"Fayla yazırsansa sətir belə olsun: `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. `encoding` yazmasan Windows türk cədvəlini götürür və ə düşür.",
				"Xəta proqramı dayandırırsa `errors=\"ignore\"` və `cp1254` yazma. Birincisi ə-ni silir. Ikincisində ə yoxdur. Proqramın əvvəlində `sys.stdout.reconfigure(encoding=\"utf-8\")` yaz, sonra `print(\"Azərbaycan\")`.",
				"Proqram işləyir, hərf kvadratdırsa kodu dəyişmə. Terminalın şriftini Cascadia Mono və ya Consolas et.",
				"`chcp 65001` yalnız açıq pəncərəni UTF-8 edir. Pəncərə bağlananda köhnə səhifə qayıdır."
			],
			en: [
				"Save the file as UTF-8. The bottom corner of VS Code should say UTF-8. In Notepad, Unicode means UTF-16. Do not pick that.",
				"If you write to a file, the line should be `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. Without `encoding`, Windows takes the Turkish table and ə is dropped.",
				"If the error stops the program, do not write `errors=\"ignore\"` or `cp1254`. The first deletes ə. The second has no ə. At the start of the program write `sys.stdout.reconfigure(encoding=\"utf-8\")`, then `print(\"Azərbaycan\")`.",
				"If the program runs and the letter is a square, do not change the code. Set the terminal font to Cascadia Mono or Consolas.",
				"`chcp 65001` makes only the open window UTF-8. When the window closes, the old page comes back."
			],
			tr: [
				"Dosyayı UTF-8 kaydet. VS Code'un alt köşesinde UTF-8 yazmalı. Notepad'de «Unicode» UTF-16'dır, onu seçme.",
				"Dosyaya yazıyorsan satır şöyle olsun: `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. `encoding` yazmazsan Windows Türkçe tabloyu alır ve ə düşer.",
				"Hata programı durduruyorsa `errors=\"ignore\"` ve `cp1254` yazma. Birincisi ə'yi siler. Ikincisinde ə yoktur. Programın başında `sys.stdout.reconfigure(encoding=\"utf-8\")` yaz, sonra `print(\"Azərbaycan\")`.",
				"Program çalışıyor, harf kareyse kodu değiştirme. Terminalin yazı tipini Cascadia Mono ya da Consolas yap.",
				"`chcp 65001` yalnız açık pencereyi UTF-8 yapar. Pencere kapanınca eski sayfa geri gelir."
			],
			ar: [
				"احفظ الملف UTF-8. يجب أن تكتب زاوية VS Code السفلى UTF-8. في Notepad كلمة Unicode تعني UTF-16. لا تخترها.",
				"إذا كنت تكتب إلى ملف فالسطر يكون `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. بلا `encoding` يأخذ Windows الجدول التركي ويسقط ə.",
				"إذا أوقف الخطأ البرنامج فلا تكتب `errors=\"ignore\"` ولا `cp1254`. الأول يحذف ə. والثاني لا يحتوي ə. في أول البرنامج اكتب `sys.stdout.reconfigure(encoding=\"utf-8\")` ثم `print(\"Azərbaycan\")`.",
				"إذا عمل البرنامج والحرف مربع فلا تغيّر الكود. اجعل خط الطرفية Cascadia Mono أو Consolas.",
				"`chcp 65001` يجعل النافذة المفتوحة فقط UTF-8. حين تُغلق النافذة تعود الصفحة القديمة."
			],
			ru: [
				"Сохрани файл как UTF-8. В нижнем углу VS Code должно быть написано UTF-8. В Блокноте «Unicode» — это UTF-16, его не выбирай.",
				"Если пишешь в файл, строка такая: `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. Без `encoding` Windows берёт турецкую таблицу и ə пропадает.",
				"Если ошибка останавливает программу, не пиши `errors=\"ignore\"` и `cp1254`. Первое удаляет ə. Во втором ə нет. В начале программы напиши `sys.stdout.reconfigure(encoding=\"utf-8\")`, потом `print(\"Azərbaycan\")`.",
				"Если программа работает, а буква квадрат, код не меняй. Поставь в терминале шрифт Cascadia Mono или Consolas.",
				"`chcp 65001` делает UTF-8 только открытое окно. Когда окно закроется, старая страница вернётся."
			]
		}, L("æ hərfi ə deyil. Türk cədvəlindəki işarəni ə-nin yerinə qoyma.", "The letter æ is not ə. Do not put the mark from the Turkish table in its place.", "æ harfi ə değildir. Türkçe tablodaki işareti onun yerine koyma.", "حرف æ ليس ə. لا تضع علامة الجدول التركي مكانه.", "Буква æ — это не ə. Не ставь знак из турецкой таблицы на её место."))
	},
	{
		slug: "excel-e",
		code: `with open("metn.csv", "w", newline="", encoding="utf-8-sig") as fayl:
    fayl.write("ad\\nAzərbaycan\\n")
`,
		piece: piece(L("Excel-də ə hərfi pozulur", "Excel breaks the letter ə", "Excel'de ə harfi bozulur", "Excel يُفسد حرف ə", "Excel портит букву ə"), L("Excel BOM-suz UTF-8 faylı sistem cədvəli ilə aça bilər. Azərbaycan Windows-unda bu, türk cədvəlidir: `cp1254`. Orada ü, ö, ş, ğ, ç, ı var. ə yoxdur. Ona görə hərf `?` və ya başqa işarə olur.\n\n`utf-8` başqa proqram üçün düzgündür. Excel üçün yetmir. `utf-8-sig` əvvələ üç bayt qoyur və Excel faylı UTF-8 oxuyur.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.", "Excel can open a UTF-8 file that has no BOM with the system table. On Azerbaijani Windows that table is the Turkish one, `cp1254`. It has ü, ö, ş, ğ, ç, and ı. It does not have ə. The letter becomes `?` or another mark.\n\n`utf-8` is right for other programs. It is not enough for Excel. `utf-8-sig` puts three bytes at the start, and Excel reads the file as UTF-8.\n\nDo not change everything at once. Check the cause in order.", "Excel, BOM'suz UTF-8 dosyayı sistem tablosuyla açabilir. Azerbaycan Windows'unda bu tablo Türkçe tablodur: `cp1254`. Orada ü, ö, ş, ğ, ç, ı vardır. ə yoktur. Harf `?` ya da başka bir işaret olur.\n\n`utf-8` başka program için doğrudur. Excel için yetmez. `utf-8-sig` başa üç bayt koyar ve Excel dosyayı UTF-8 okur.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.", "قد يفتح Excel ملف UTF-8 بلا BOM بجدول النظام. في Windows الأذربيجاني هذا الجدول تركي: `cp1254`. فيه ü وö وş وğ وç وı. ليس فيه ə. فيصير الحرف `?` أو علامة أخرى.\n\n`utf-8` صحيح لبرنامج آخر. لا يكفي Excel. `utf-8-sig` يضع ثلاث بايتات في الأول ويقرأ Excel الملف UTF-8.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.", "Excel может открыть UTF-8 без BOM системной таблицей. На азербайджанском Windows это турецкая таблица, `cp1254`. В ней есть ü, ö, ş, ğ, ç и ı. Буквы ə нет. Буква становится `?` или другим знаком.\n\n`utf-8` верен для другой программы. Для Excel его мало. `utf-8-sig` ставит три байта в начало, и Excel читает файл как UTF-8.\n\nНе меняй всё сразу. Проверяй причину по порядку."), {
			az: [
				"Faylı belə yaz: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
				"`encoding=\"utf-8\"` Notepad və brauzer üçün kifayətdir. Excel onu başqa cədvəllə aça bilər.",
				"`cp1254` yazma. Bu cədvəldə ə yoxdur.",
				"Köhnə faylda ə artıq `?` olubsa, kod hərfi qaytarmır. Mətni yenidən yaz.",
				"`newline=\"\"` boş sətir üçündür. Ə hərfinə təsir etmir."
			],
			en: [
				"Write the file like this: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
				"`encoding=\"utf-8\"` is enough for Notepad and a browser. Excel may open it with another table.",
				"Do not write `cp1254`. That table has no ə.",
				"If ə is already `?` in the old file, code cannot bring the letter back. Write the text again.",
				"`newline=\"\"` is for the blank row. It does not change the letter ə."
			],
			tr: [
				"Dosyayı şöyle yaz: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
				"`encoding=\"utf-8\"` Notepad ve tarayıcı için yeter. Excel onu başka tabloyla açabilir.",
				"`cp1254` yazma. Bu tabloda ə yoktur.",
				"Eski dosyada ə çoktan `?` olduysa kod harfi geri getirmez. Metni yeniden yaz.",
				"`newline=\"\"` boş satır içindir. ə harfine etkisi yoktur."
			],
			ar: [
				"اكتب الملف هكذا: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
				"`encoding=\"utf-8\"` يكفي لـ Notepad والمتصفح. قد يفتحه Excel بجدول آخر.",
				"لا تكتب `cp1254`. هذا الجدول لا يحتوي ə.",
				"إذا صار ə في الملف القديم `?` فالكود لا يُرجع الحرف. اكتب النص من جديد.",
				"`newline=\"\"` للسطر الفارغ. لا يغيّر حرف ə."
			],
			ru: [
				"Пиши файл так: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
				"`encoding=\"utf-8\"` хватает для Блокнота и браузера. Excel может открыть его другой таблицей.",
				"Не пиши `cp1254`. В этой таблице нет ə.",
				"Если в старом файле ə уже стало `?`, код букву не вернёт. Напиши текст заново.",
				"`newline=\"\"` нужен из-за пустой строки. На букву ə он не влияет."
			]
		}, L("Bu, konsoldakı kvadrat deyil. Konsolda hərf kvadratdırsa, kodu dəyişmə. Şrifti dəyiş.", "This is not the square in the console. If the letter is a square there, do not change the code. Change the font.", "Bu, konsoldaki kare değildir. Konsolda harf kareyse kodu değiştirme. Yazı tipini değiştir.", "هذا ليس المربع في الطرفية. إذا كان الحرف مربعًا هناك فلا تغيّر الكود. غيّر الخط.", "Это не квадрат в консоли. Если там буква квадрат, код не меняй. Меняй шрифт."))
	},
	{
		slug: "html-e",
		code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <title>Səhifə</title>
</head>
<body>
  <p>Azərbaycan</p>
</body>
</html>
`,
		piece: piece(L("Səhifədə ə hərfi sual işarəsi olur", "The letter ə becomes a question mark on the page", "Sayfada ə harfi soru işareti olur", "حرف ə يصير علامة استفهام في الصفحة", "Буква ə на странице становится вопросом"), L("Brauzer faylın kodunu bilmirsə, `ə` hərfi `?` və ya qəribə işarə olur. `lang=\"az\"` hərfi düzəltmir. Düzəldən sətir `<meta charset=\"UTF-8\">`-dir. Faylın özü də UTF-8 saxlanmalıdır.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.", "If the browser does not know the file's encoding, the letter `ə` becomes `?` or a strange mark. `lang=\"az\"` does not fix the letter. The line that does is `<meta charset=\"UTF-8\">`. The file itself must be saved as UTF-8.\n\nDo not change everything at once. Check the cause in order.", "Tarayıcı dosyanın kodunu bilmiyorsa `ə` harfi `?` ya da garip bir işaret olur. `lang=\"az\"` harfi düzeltmez. Düzelten satır `<meta charset=\"UTF-8\">` satırıdır. Dosyanın kendisi de UTF-8 kaydedilmelidir.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.", "إذا لم يعرف المتصفح ترميز الملف فحرف `ə` يصير `?` أو علامة غريبة. `lang=\"az\"` لا يصلح الحرف. السطر الذي يصلحه هو `<meta charset=\"UTF-8\">`. الملف نفسه يجب أن يُحفظ UTF-8.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.", "Если браузер не знает кодировку файла, буква `ə` становится `?` или странным знаком. `lang=\"az\"` букву не чинит. Чинющая строка — `<meta charset=\"UTF-8\">`. Сам файл тоже надо сохранить как UTF-8.\n\nНе меняй всё сразу. Проверяй причину по порядку."), {
			az: [
				"`<head>` içində ilk sətirlərdən biri bu olsun: `<meta charset=\"UTF-8\">`.",
				"VS Code-un aşağı küncündə UTF-8 yazılmalıdır. Notepad-də «Unicode» UTF-16-dır, onu seçmə.",
				"`lang=\"az\"` səhifənin dilini adlandırır. Hərfi saxlamır.",
				"Fayl ANSI və ya `cp1254` ilə saxlanıbsa, ə artıq içində yoxdur. UTF-8-ə keç və hərfi yenidən yaz.",
				"Server `Content-Type` içində başqa kod göndərirsə, o, meta sətirindən öndə durur. Statik səhifədə meta kifayətdir."
			],
			en: [
				"One of the first lines inside `<head>` should be `<meta charset=\"UTF-8\">`.",
				"The bottom corner of VS Code should say UTF-8. In Notepad, Unicode means UTF-16. Do not pick that.",
				"`lang=\"az\"` names the language of the page. It does not store the letter.",
				"If the file was saved as ANSI or `cp1254`, ə is already gone. Switch to UTF-8 and type the letter again.",
				"If the server sends another encoding in `Content-Type`, that comes before the meta line. On a static page, meta is enough."
			],
			tr: [
				"`<head>` içinde ilk satırlardan biri bu olsun: `<meta charset=\"UTF-8\">`.",
				"VS Code'un alt köşesinde UTF-8 yazmalı. Notepad'de «Unicode» UTF-16'dır, onu seçme.",
				"`lang=\"az\"` sayfanın dilini adlandırır. Harfi saklamaz.",
				"Dosya ANSI ya da `cp1254` ile kaydedildiyse ə çoktan içinde yoktur. UTF-8'e geç ve harfi yeniden yaz.",
				"Sunucu `Content-Type` içinde başka kod gönderiyorsa o, meta satırından önce gelir. Statik sayfada meta yeter."
			],
			ar: [
				"أحد أول الأسطر داخل `<head>` يكون `<meta charset=\"UTF-8\">`.",
				"يجب أن تكتب زاوية VS Code السفلى UTF-8. في Notepad كلمة Unicode تعني UTF-16. لا تخترها.",
				"`lang=\"az\"` يسمّي لغة الصفحة. لا يحفظ الحرف.",
				"إذا حُفظ الملف ANSI أو `cp1254` فـ ə لم يعد داخله. انتقل إلى UTF-8 واكتب الحرف من جديد.",
				"إذا أرسل الخادم ترميزًا آخر في `Content-Type` فهو يسبق سطر meta. في صفحة ثابتة يكفي meta."
			],
			ru: [
				"Одной из первых строк внутри `<head>` должна быть `<meta charset=\"UTF-8\">`.",
				"В нижнем углу VS Code должно быть написано UTF-8. В Блокноте «Unicode» — это UTF-16, его не выбирай.",
				"`lang=\"az\"` называет язык страницы. Букву он не хранит.",
				"Если файл сохранён как ANSI или `cp1254`, ə внутри уже нет. Перейди на UTF-8 и напиши букву заново.",
				"Если сервер шлёт другую кодировку в `Content-Type`, она стоит раньше строки meta. На статической странице хватает meta."
			]
		}, L("Excel CSV başqa fayldır. Orada `utf-8` yetmir, `utf-8-sig` lazımdır. HTML-də `sig` yazılmır.", "An Excel CSV is a different file. There `utf-8` is not enough, and `utf-8-sig` is needed. HTML does not use `sig`.", "Excel CSV başka bir dosyadır. Orada `utf-8` yetmez, `utf-8-sig` gerekir. HTML'de `sig` yazılmaz.", "ملف CSV في Excel ملف آخر. هناك `utf-8` لا يكفي ويلزم `utf-8-sig`. في HTML لا يُكتب `sig`.", "CSV для Excel — другой файл. Там `utf-8` мало, нужен `utf-8-sig`. В HTML `sig` не пишется."))
	},
	{
		slug: "excel-sutun",
		code: `import csv

with open("metn.csv", "w", newline="", encoding="utf-8-sig") as fayl:
    csv.writer(fayl, delimiter=";").writerows([
        ["ad", "qiymet"],
        ["Azərbaycan", "1,50"],
    ])
`,
		piece: piece(L("Excel CSV-ni bir sütun açır", "Excel opens the CSV as one column", "Excel CSV'yi tek sütun açar", "Excel يفتح CSV عمودًا واحدًا", "Excel открывает CSV одним столбцом"), L("Excel bütün sətri bir xanada göstərirsə, hərf pozulmayıb. Ayırıcı uyğun gəlmir. Azərbaycan qurulumu vergülü onluq kəsr sayır, ona görə sütun ayırıcısı adətən nöqtəli vergüldür. Fayldakı vergülü Excel ayırıcı saymır.\n\nBu, `ə` hərfinin pozulması deyil. Hərf də pozulursa, fayl həm `utf-8-sig`, həm də `;` ilə yazılmalıdır.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.", "If Excel shows the whole row in one cell, the letter is not broken. The separator does not match. An Azerbaijani setup treats the comma as a decimal mark, so the column separator is usually a semicolon. Excel does not treat a comma in the file as a separator.\n\nThis is not the letter `ə` breaking. If the letter is also broken, the file needs both `utf-8-sig` and `;`.\n\nDo not change everything at once. Check the cause in order.", "Excel bütün satırı bir hücrede gösteriyorsa harf bozulmamıştır. Ayırıcı uymuyordur. Azerbaycan kurulumu virgülü ondalık sayar, bu yüzden sütun ayırıcısı genellikle noktalı virgüldür. Dosyadaki virgülü Excel ayırıcı saymaz.\n\nBu, `ə` harfinin bozulması değildir. Harf de bozuluyorsa dosya hem `utf-8-sig` hem `;` ile yazılmalıdır.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.", "إذا أظهر Excel الصف كله في خلية واحدة فالحرف لم يفسد. الفاصل غير مطابق. إعداد أذربيجان يعدّ الفاصلة علامة عشرية، لذلك فاصل الأعمدة عادة فاصلة منقوطة. Excel لا يعدّ الفاصلة في الملف فاصلًا.\n\nهذا ليس فساد حرف `ə`. إذا فسد الحرف أيضًا فيجب أن يُكتب الملف بـ `utf-8-sig` وبـ `;` معًا.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.", "Если Excel показывает всю строку в одной ячейке, буква не испорчена. Разделитель не тот. Азербайджанская настройка считает запятую десятичным знаком, поэтому разделитель столбцов обычно точка с запятой. Запятую в файле Excel разделителем не считает.\n\nЭто не порча буквы `ə`. Если буква тоже портится, файл надо писать и с `utf-8-sig`, и с `;`.\n\nНе меняй всё сразу. Проверяй причину по порядку."), {
			az: [
				"Excel-də boş xanaya `=1,5` yaz. Ədəd olursa ayırıcın `;`-dir. `=1.5` ədəd olursa ayırıcın vergüldür.",
				"Python-da sətir belə olsun: `csv.writer(fayl, delimiter=\";\")`. Fayl `utf-8-sig` və `newline=\"\"` ilə açılmalıdır.",
				"Ayırıcını yoxlamadan bütün vergüldə `;` etmə. Ədədin içindəki vergül onluq kəsrdir, sütun deyil.",
				"Köhnə faylı Excel-in içində bölmə. Faylı kodla yenidən yaz.",
				"Başqa proqram vergül istəyirsə, Excel üçün yazdığın `;` orada bir sütun qoyar. İki fayl lazımdırsa, ayırıcını qarışdırma."
			],
			en: [
				"In a blank Excel cell type `=1,5`. If it becomes a number, your separator is `;`. If `=1.5` becomes a number, your separator is a comma.",
				"In Python the line should be `csv.writer(fayl, delimiter=\";\")`. Open the file with `utf-8-sig` and `newline=\"\"`.",
				"Do not turn every comma into `;` before you check the separator. A comma inside a number is the decimal mark, not a column.",
				"Do not split the old file inside Excel. Write the file again from code.",
				"If another program wants commas, the `;` you wrote for Excel becomes one column there. If you need two files, do not mix the separators."
			],
			tr: [
				"Excel'de boş hücreye `=1,5` yaz. Sayı oluyorsa ayırıcın `;`dir. `=1.5` sayı oluyorsa ayırıcın virgüldür.",
				"Python'da satır şöyle olsun: `csv.writer(fayl, delimiter=\";\")`. Dosya `utf-8-sig` ve `newline=\"\"` ile açılmalıdır.",
				"Ayırıcıyı yoklamadan her virgülü `;` yapma. Sayının içindeki virgül ondalıktır, sütun değil.",
				"Eski dosyayı Excel'in içinde bölme. Dosyayı kodla yeniden yaz.",
				"Başka program virgül istiyorsa, Excel için yazdığın `;` orada tek sütun olur. İki dosya gerekiyorsa ayırıcıyı karıştırma."
			],
			ar: [
				"في خلية Excel فارغة اكتب `=1,5`. إذا صار عددًا فالفاصل عندك `;`. إذا صار `=1.5` عددًا فالفاصل فاصلة.",
				"في Python السطر يكون `csv.writer(fayl, delimiter=\";\")`. يُفتح الملف بـ `utf-8-sig` و`newline=\"\"`.",
				"لا تحوّل كل فاصلة إلى `;` قبل أن تفحص الفاصل. الفاصلة داخل العدد علامة عشرية وليست عمودًا.",
				"لا تقسّم الملف القديم داخل Excel. اكتب الملف من الكود من جديد.",
				"إذا أراد برنامج آخر فاصلة فإن `;` التي كتبتها لـ Excel تصير هناك عمودًا واحدًا. إذا لزم ملفان فلا تخلط الفاصلين."
			],
			ru: [
				"В пустой ячейке Excel напиши `=1,5`. Если это число, разделитель у тебя `;`. Если числом становится `=1.5`, разделитель — запятая.",
				"В Python строка такая: `csv.writer(fayl, delimiter=\";\")`. Файл открывай с `utf-8-sig` и `newline=\"\"`.",
				"Не меняй все запятые на `;`, пока не проверил разделитель. Запятая внутри числа — десятичный знак, не столбец.",
				"Не дели старый файл внутри Excel. Запиши файл из кода заново.",
				"Если другая программа ждёт запятые, твой `;` для Excel станет там одним столбцом. Если нужны два файла, разделители не мешай."
			]
		}, L("Hərf `?` olursa, ayırıcını dəyişmə. O, `utf-8-sig` səhifəsidir.", "If the letter is `?`, do not change the separator. That is the `utf-8-sig` page.", "Harf `?` oluyorsa ayırıcıyı değiştirme. O, `utf-8-sig` sayfasıdır.", "إذا صار الحرف `?` فلا تغيّر الفاصل. تلك صفحة `utf-8-sig`.", "Если буква стала `?`, разделитель не меняй. Это страница `utf-8-sig`."))
	},
	{
		slug: "ps-skript",
		code: `py -m venv .venv
.venv\\Scripts\\activate.bat
`,
		piece: piece(L("PowerShell skripti işə salmır", "PowerShell will not run the script", "PowerShell betiği çalıştırmıyor", "PowerShell لا يشغّل السكربت", "PowerShell не запускает скрипт"), L("PowerShell bu cümləni yazır: `cannot be loaded because running scripts is disabled on this system.` Virtual mühitin `Activate.ps1` faylı skriptdir. Buna görə PowerShell onu saxlayır. Əmr sətrindəki `activate.bat` skript deyil, o, işləyir.\n\nBütün kompüter üçün qadağanı götürmə. Səbəbi sıra ilə yoxla.", "PowerShell writes: `cannot be loaded because running scripts is disabled on this system.` A virtual environment's `Activate.ps1` file is a script, so PowerShell stops it. `activate.bat` in Command Prompt is not that script, and it runs.\n\nDo not lift the block for the whole computer. Check the cause in order.", "PowerShell bu cümleyi yazar: `cannot be loaded because running scripts is disabled on this system.` Sanal ortamın `Activate.ps1` dosyası betiktir. Bu yüzden PowerShell onu durdurur. Komut istemindeki `activate.bat` o betik değildir, o çalışır.\n\nBütün bilgisayar için yasağı kaldırma. Nedeni sırayla yokla.", "يكتب PowerShell: `cannot be loaded because running scripts is disabled on this system.` ملف `Activate.ps1` في البيئة الافتراضية سكربت، لذلك يوقفه PowerShell. `activate.bat` في موجّه الأوامر ليس ذلك السكربت، وهو يعمل.\n\nلا ترفع المنع عن الكمبيوتر كله. افحص السبب بالترتيب.", "PowerShell пишет: `cannot be loaded because running scripts is disabled on this system.` Файл `Activate.ps1` виртуальной среды — скрипт, поэтому PowerShell его останавливает. `activate.bat` в командной строке — не этот скрипт, и он запускается.\n\nНе снимай запрет на весь компьютер. Проверяй причину по порядку."), {
			az: [
				"Əmr sətrində layihə qovluğunda `.venv\\Scripts\\activate.bat` yaz. Sətirdə `(.venv)` görünürsə, mühit açıqdır. PowerShell-i dəyişmə.",
				"PowerShell-də qalmaq istəyirsənsə, yalnız öz istifadəçin üçün: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. Pəncərəni bağla, yenisini aç, sonra `.venv\\Scripts\\Activate.ps1`.",
				"`Unrestricted` və `LocalMachine` yazma. Bu, bütün kompüterdə başqa skriptləri də açır.",
				"`MachinePolicy` sətri `Restricted` qalırsa, istifadəçi əmri onu keçmir. O pəncərədə `activate.bat` ilə davam et.",
				"Eyni cümlə başqa `.ps1` faylı üçündür. Faylın adı dəyişir, dayanma eynidir."
			],
			en: [
				"In Command Prompt, in the project folder, run `.venv\\Scripts\\activate.bat`. If the line shows `(.venv)`, the environment is on. Do not change PowerShell.",
				"If you want to stay in PowerShell, for your user only: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. Close the window, open a new one, then run `.venv\\Scripts\\Activate.ps1`.",
				"Do not write `Unrestricted` or `LocalMachine`. That opens other scripts on the whole computer.",
				"If the `MachinePolicy` line stays `Restricted`, a user command does not pass it. Continue with `activate.bat` in that window.",
				"The same sentence is for another `.ps1` file. The file name changes. The stop is the same."
			],
			tr: [
				"Komut isteminde proje klasöründe `.venv\\Scripts\\activate.bat` yaz. Satırda `(.venv)` görünüyorsa ortam açıktır. PowerShell'i değiştirme.",
				"PowerShell'de kalmak istiyorsan yalnız kendi kullanıcın için: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. Pencereyi kapat, yenisini aç, sonra `.venv\\Scripts\\Activate.ps1`.",
				"`Unrestricted` ve `LocalMachine` yazma. Bu, bütün bilgisayarda başka betikleri de açar.",
				"`MachinePolicy` satırı `Restricted` kalıyorsa kullanıcı komutu onu geçmez. O pencerede `activate.bat` ile devam et.",
				"Aynı cümle başka bir `.ps1` dosyası içindir. Dosya adı değişir, durma aynıdır."
			],
			ar: [
				"في موجّه الأوامر داخل مجلد المشروع اكتب `.venv\\Scripts\\activate.bat`. إذا ظهر `(.venv)` في السطر فالبيئة مفتوحة. لا تغيّر PowerShell.",
				"إذا أردت البقاء في PowerShell فللمستخدم فقط: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. أغلق النافذة وافتح جديدة ثم `.venv\\Scripts\\Activate.ps1`.",
				"لا تكتب `Unrestricted` ولا `LocalMachine`. هذا يفتح سكربتات أخرى على الكمبيوتر كله.",
				"إذا بقي سطر `MachinePolicy` على `Restricted` فأمر المستخدم لا يجاوزه. تابع في تلك النافذة بـ `activate.bat`.",
				"الجملة نفسها لملف `.ps1` آخر. اسم الملف يتغيّر والتوقف هو نفسه."
			],
			ru: [
				"В командной строке в папке проекта напиши `.venv\\Scripts\\activate.bat`. Если в строке видно `(.venv)`, среда включена. PowerShell не меняй.",
				"Если хочешь остаться в PowerShell, только для своего пользователя: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. Закрой окно, открой новое, потом `.venv\\Scripts\\Activate.ps1`.",
				"Не пиши `Unrestricted` и `LocalMachine`. Это открывает другие скрипты на всём компьютере.",
				"Если строка `MachinePolicy` остаётся `Restricted`, команда пользователя её не обходит. Продолжай в том окне через `activate.bat`.",
				"Та же фраза для другого файла `.ps1`. Имя файла другое, остановка та же."
			]
		}, L("`Bypass` yazma. Bir dəfəlik iş üçün əmr sətrindəki `activate.bat` kifayətdir.", "Do not write `Bypass`. For one job, `activate.bat` in Command Prompt is enough.", "`Bypass` yazma. Bir kerelik iş için komut istemindeki `activate.bat` yeter.", "لا تكتب `Bypass`. لعمل مرة واحدة يكفي `activate.bat` في موجّه الأوامر.", "Не пиши `Bypass`. Для одного раза хватает `activate.bat` в командной строке."))
	},
	{
		slug: "json-e",
		code: `import json

metn = json.dumps({"olke": "Azərbaycan"}, ensure_ascii=False)
with open("metn.json", "w", encoding="utf-8") as fayl:
    fayl.write(metn)
`,
		piece: piece(L("JSON-da ə hərfi \\u0259 olur", "In JSON the letter ə becomes \\u0259", "JSON'da ə harfi \\u0259 olur", "في JSON يصير حرف ə‏ \\u0259", "В JSON буква ə становится \\u0259"), L("Bu, pozulma deyil. `json.dumps` susmaya görə `ə` hərfinı `\\u0259` yazır. Bu, eyni hərfin kodudur. Proqram faylı oxuyanda yenidən `ə` alır.\n\nHərfi faylda özün görmək istəyirsənsə, `ensure_ascii=False` yaz və faylı `utf-8` saxla. `cp1254` yazma. O cədvəldə ə yoxdur.\n\nHamısını bir anda dəyişmə.", "This is not corruption. By default `json.dumps` writes the letter `ə` as `\\u0259`. That is the code of the same letter. When a program reads the file, it gets `ə` again.\n\nIf you want to see the letter in the file, write `ensure_ascii=False` and save the file as `utf-8`. Do not write `cp1254`. That table has no ə.\n\nDo not change everything at once.", "Bu, bozulma değildir. `json.dumps` varsayılan olarak `ə` harfini `\\u0259` yazar. Bu, aynı harfin kodudur. Program dosyayı okuyunca yeniden `ə` alır.\n\nHarfi dosyada kendin görmek istiyorsan `ensure_ascii=False` yaz ve dosyayı `utf-8` kaydet. `cp1254` yazma. O tabloda ə yoktur.\n\nHepsini bir anda değiştirme.", "هذا ليس فسادًا. `json.dumps` يكتب حرف `ə` افتراضيًا `\\u0259`. هذا رمز الحرف نفسه. حين يقرأ البرنامج الملف يأخذ `ə` من جديد.\n\nإذا أردت أن ترى الحرف في الملف فاكتب `ensure_ascii=False` واحفظ الملف `utf-8`. لا تكتب `cp1254`. ذلك الجدول لا يحتوي ə.\n\nلا تغيّر كل شيء دفعة واحدة.", "Это не порча. `json.dumps` по умолчанию пишет букву `ə` как `\\u0259`. Это код той же буквы. Когда программа читает файл, она снова получает `ə`.\n\nЕсли хочешь видеть букву в файле, напиши `ensure_ascii=False` и сохрани файл как `utf-8`. Не пиши `cp1254`. В той таблице нет ə.\n\nНе меняй всё сразу."), {
			az: [
				"Fayldakı `\\u0259` proqram üçün `ə`-dir. Onu əl ilə silmə.",
				"Hərfi görmək istəyirsənsə: `json.dumps(melumat, ensure_ascii=False)`.",
				"Fayla yazanda `encoding=\"utf-8\"` qoy. `encoding` yazmasan Windows türk cədvəlini götürə bilər və ə düşər.",
				"Excel CSV üçündür `utf-8-sig`. JSON üçün `sig` yazılmır.",
				"`ensure_ascii=True` səhv deyil. Şəbəkə və köhnə alət üçün `\\u0259` etibarlı qalır."
			],
			en: [
				"`\\u0259` in the file is `ə` for a program. Do not delete it by hand.",
				"If you want to see the letter: `json.dumps(melumat, ensure_ascii=False)`.",
				"When you write the file, set `encoding=\"utf-8\"`. Without `encoding`, Windows may take the Turkish table and drop ə.",
				"`utf-8-sig` is for an Excel CSV. JSON does not use `sig`.",
				"`ensure_ascii=True` is not a mistake. For the network and an old tool, `\\u0259` stays safe."
			],
			tr: [
				"Dosyadaki `\\u0259` program için `ə`-dir. Onu elle silme.",
				"Harfi görmek istiyorsan: `json.dumps(melumat, ensure_ascii=False)`.",
				"Dosyaya yazarken `encoding=\"utf-8\"` koy. `encoding` yazmazsan Windows Türkçe tabloyu alabilir ve ə düşer.",
				"Excel CSV içindir `utf-8-sig`. JSON için `sig` yazılmaz.",
				"`ensure_ascii=True` yanlış değildir. Ağ ve eski araç için `\\u0259` güvenli kalır."
			],
			ar: [
				"`\\u0259` في الملف هو `ə` للبرنامج. لا تحذفه يدويًا.",
				"إذا أردت رؤية الحرف: `json.dumps(melumat, ensure_ascii=False)`.",
				"عند الكتابة إلى الملف ضع `encoding=\"utf-8\"`. بلا `encoding` قد يأخذ Windows الجدول التركي ويسقط ə.",
				"`utf-8-sig` لملف CSV في Excel. في JSON لا يُكتب `sig`.",
				"`ensure_ascii=True` ليس خطأ. للشبكة والأداة القديمة يبقى `\\u0259` سليمًا."
			],
			ru: [
				"`\\u0259` в файле для программы — это `ə`. Не стирай его руками.",
				"Если хочешь видеть букву: `json.dumps(melumat, ensure_ascii=False)`.",
				"Когда пишешь файл, ставь `encoding=\"utf-8\"`. Без `encoding` Windows может взять турецкую таблицу и ə пропадёт.",
				"`utf-8-sig` — для CSV в Excel. В JSON `sig` не пишется.",
				"`ensure_ascii=True` — не ошибка. Для сети и старой программы `\\u0259` остаётся надёжным."
			]
		}, L("`\\u0259` hərfi pozulmuş `ə` deyil. Eyni hərfin yazılışıdır.", "`\\u0259` is not a broken `ə`. It is another way to write the same letter.", "`\\u0259` bozulmuş `ə` değildir. Aynı harfin yazılışıdır.", "`\\u0259` ليس حرف `ə` فاسدًا. هو كتابة أخرى للحرف نفسه.", "`\\u0259` — это не испорченная `ə`. Это другая запись той же буквы."))
	},
	{
		slug: "apk-qurulmur",
		piece: piece(L("APK qurulmur", "APK will not install", "APK kurulmuyor", "APK لا يُثبَّت", "APK не устанавливается"), L("Telefon `App not installed` və ya `There was a problem parsing the package` yazırsa, APK qurulmur. Bu iki cümlə eyni dayanmanın iki adıdır: fayl ya açılmır, ya da telefon onu qəbul etmir.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla. Birincisi düzələndə növbətiyə keçmə.", "If the phone says `App not installed` or `There was a problem parsing the package`, the APK will not install. Those two sentences are two names for the same stop: the file does not open, or the phone will not take it.\n\nDo not change everything at once. Check the cause in order.", "Telefon `App not installed` ya da `There was a problem parsing the package` yazıyorsa APK kurulmuyor. Bu iki cümle aynı durmanın iki adıdır: dosya ya açılmaz, ya da telefon onu kabul etmez.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.", "إذا كتب الهاتف `App not installed` أو `There was a problem parsing the package` فـ APK لا يُثبَّت. الجملتان اسمان للتوقف نفسه: الملف لا يُفتح أو الهاتف لا يقبله.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.", "Если телефон пишет `App not installed` или `There was a problem parsing the package`, APK не устанавливается. Это два имени одной остановки: файл не открывается или телефон его не принимает.\n\nНе меняй всё сразу. Проверяй причину по порядку."), {
			az: [
				"Fayl yarım enibsə, quruluş başlamır. Köhnə nüsxəni sil, linki yenidən aç, endirmə bitəndən sonra qur.",
				"Ad `.apk.apk` və ya `.zip` qalıbsa, telefon paketi oxumur. Sonluq tək `.apk` olmalıdır.",
				"Naməlum mənbə bağlı ola bilər. Samsung: Parametrlər → Təhlükəsizlik və məxfilik → Naməlum tətbiqləri qur → faylı açan proqrama icazə. Xiaomi: Parametrlər → Tətbiqlər → Naməlum mənbələr → həmin proqram.",
				"Eyni tətbiq artıq durursa və imza fərqlidirsə, yenisi üstünə keçmir. Əvvəl köhnəni sil. İçindəki məlumat gedir.",
				"Play-dən gələn tətbiqin üstünə başqa açarla imzalanmış APK qurulmur. Bu, faylın yolda kəsilməsi deyil."
			],
			en: [
				"If the file stopped halfway, installation does not start. Delete that copy, open the link again, and install only after the download finishes.",
				"If the name is `.apk.apk` or still `.zip`, the phone cannot read the package. The ending should be a single `.apk`.",
				"Unknown sources may be off. Samsung: Settings, Security and privacy, Install unknown apps, then allow the app that opens the file. Xiaomi: Settings, Apps, Unknown sources, then that same app.",
				"If the same app is already installed with a different signature, the new one will not go on top. Remove the old one first. The data inside goes away.",
				"An APK signed with another key will not install over an app from Play. That is not a file cut off on the way."
			],
			tr: [
				"Dosya yarım indiyse kurulum başlamaz. Eski kopyayı sil, bağlantıyı yeniden aç, indirme bitince kur.",
				"Ad `.apk.apk` ya da `.zip` kaldıysa telefon paketi okumaz. Son tek `.apk` olmalıdır.",
				"Bilinmeyen kaynak kapalı olabilir. Samsung: Ayarlar → Güvenlik ve gizlilik → Bilinmeyen uygulamaları yükle → dosyayı açan programa izin. Xiaomi: Ayarlar → Uygulamalar → Bilinmeyen kaynaklar → o program.",
				"Aynı uygulama duruyorsa ve imza farklıysa yenisi üstüne geçmez. Önce eskiyi sil. İçindeki veri gider.",
				"Play'den gelen uygulamanın üstüne başka anahtarla imzalanmış APK kurulmaz. Bu, dosyanın yolda kesilmesi değildir."
			],
			ar: [
				"إذا انقطع الملف فلا يبدأ التثبيت. احذف النسخة القديمة وافتح الرابط من جديد وثبّت بعد اكتمال التنزيل.",
				"إذا بقي الاسم `.apk.apk` أو `.zip` فالهاتف لا يقرأ الحزمة. اللاحقة يجب أن تكون `.apk` واحدة.",
				"قد يكون المصدر المجهول مغلقًا. Samsung: الإعدادات، الأمان والخصوصية، تثبيت تطبيقات مجهولة، ثم اسمح للبرنامج الذي يفتح الملف. Xiaomi: الإعدادات، التطبيقات، مصادر مجهولة، ثم ذلك البرنامج.",
				"إذا كان التطبيق نفسه مثبتًا بتوقيع مختلف فالجديد لا يركب فوقه. احذف القديم أولًا. بيانات الداخل تذهب.",
				"لا يُثبَّت APK موقَّع بمفتاح آخر فوق تطبيق من Play. هذا ليس قطع الملف في الطريق."
			],
			ru: [
				"Если файл скачался не до конца, установка не начинается. Удали ту копию, открой ссылку снова и ставь только после конца загрузки.",
				"Если имя `.apk.apk` или всё ещё `.zip`, телефон не читает пакет. Окончание должно быть одним `.apk`.",
				"Неизвестный источник может быть закрыт. Samsung: Настройки, Безопасность и конфиденциальность, Установка неизвестных приложений, разреши программе, которая открывает файл. Xiaomi: Настройки, Приложения, Неизвестные источники, та же программа.",
				"Если то же приложение уже стоит с другой подписью, новое поверх не ляжет. Сначала удали старое. Данные внутри уйдут.",
				"APK с другим ключом не ставится поверх приложения из Play. Это не обрыв файла по дороге."
			]
		}, L("`parsing the package` ekranda qalırsa, fayl APK deyil və ya yolda kəsilib. Adını dəyişib saxlama. Yenidən endir.", "If `parsing the package` stays on the screen, the file is not an APK or it was cut off. Do not save it under a new name. Download it again.", "`parsing the package` ekranda kalıyorsa dosya APK değildir ya da yolda kesilmiştir. Adını değiştirip saklama. Yeniden indir.", "إذا بقيت `parsing the package` على الشاشة فالملف ليس APK أو انقطع. لا تحفظه باسم جديد. أعد التنزيل.", "Если на экране остаётся `parsing the package`, файл не APK или оборвался. Не сохраняй его под новым именем. Скачай снова."))
	},
	{
		slug: "parse-error",
		piece: piece(L("Parse error nədir?", "What is a parse error?", "Parse error nedir?", "ما هو parse error؟", "Что такое parse error?"), L("Parse error telefonun APK-nı oxuya bilməməsidir. Paket açılmayıb, ona görə quruluş da başlamır.", "A parse error means the phone cannot read the APK. The package did not open, so installation does not start.", "Parse error, telefonun APK'yı okuyamamasıdır. Paket açılmamış, onun için kurulum da başlamaz.", "parse error يعني أن الهاتف لا يستطيع قراءة APK. الحزمة لم تُفتح، لذلك لا يبدأ التثبيت.", "Parse error значит, что телефон не может прочитать APK. Пакет не открылся, поэтому установка не начинается."), {
			az: [
				"Fayl tam enməyib və ya adı dəyişəndə korlanıb.",
				"APK deyil, ZIP və ya başqa fayl ola bilər. Sonluq `.apk` olmalıdır.",
				"Android versiyası paketin tələbindən köhnədirsə, bəzi telefonlar bunu da belə göstərir."
			],
			en: [
				"The file did not download fully, or it broke when the name was changed.",
				"It may be a ZIP or another file, not an APK. The ending should be `.apk`.",
				"If Android is older than the package requires, some phones show that as a parse error too."
			],
			tr: [
				"Dosya tam inmemiş ya da adı değişirken bozulmuştur.",
				"APK değil, ZIP veya başka dosya olabilir. Sonu `.apk` olmalıdır.",
				"Android sürümü paketin istediğinden eskiyse bazı telefonlar bunu da böyle gösterir."
			],
			ar: [
				"الملف لم ينزل كاملًا أو تلف حين تغيّر اسمه.",
				"قد يكون ZIP أو ملفًا آخر، لا APK. اللاحقة يجب أن تكون `.apk`.",
				"إذا كان إصدار Android أقدم مما تطلبه الحزمة، بعض الهواتف تُظهر ذلك كـ parse error أيضًا."
			],
			ru: [
				"Файл скачался не целиком или сломался, когда меняли имя.",
				"Это может быть ZIP или другой файл, не APK. Окончание должно быть `.apk`.",
				"Если Android старее, чем требует пакет, некоторые телефоны показывают и это как parse error."
			]
		}, L("İçini əl ilə dəyişmisənsə, quruluş pozula bilər. Faylı yenidən yığ.", "If the inside was edited by hand, the package can break. Build the file again.", "İçini elle değiştirdiysen kuruluş bozulabilir. Dosyayı yeniden derle.", "إذا غيّرت الداخل بيدك فقد تفسد الحزمة. أعد بناء الملف.", "Если внутри правили руками, пакет может сломаться. Собери файл заново."))
	},
	{
		slug: "keystore-itdi",
		piece: piece(L("Keystore itdi", "The keystore is lost", "Keystore kayboldu", "ضاع ملف keystore", "Потерян keystore"), L("Keystore tətbiqin imza açarıdır. O itəndə eyni tətbiqin yeni versiyasını köhnəsinin üstünə qura bilmirsən.", "A keystore is the app's signing key. When it is lost, you cannot install a new version over the old one of the same app.", "Keystore uygulamanın imza anahtarıdır. O kaybolunca aynı uygulamanın yeni sürümünü eskisinin üstüne kuramazsın.", "keystore هو مفتاح توقيع التطبيق. إذا ضاع لا تستطيع تثبيت نسخة جديدة فوق القديمة للتطبيق نفسه.", "Keystore — это ключ подписи приложения. Если он потерян, новую версию того же приложения поверх старой не поставить."), {
			az: [
				"Yeni keystore ilə yeni paket adı açmaq olar. Bu, köhnə tətbiqin davamı sayılmır.",
				"Play-də açar itibsə, Google-un açar bərpası var. Qəbul olunacağı qəti deyil.",
				"Açar faylını və parolu paketdən ayrı yerdə saxla."
			],
			en: [
				"You can open a new package name with a new keystore. That is not a continuation of the old app.",
				"If the key is lost on Play, Google has a key reset. Acceptance is not guaranteed.",
				"Keep the key file and the password apart from the package."
			],
			tr: [
				"Yeni keystore ile yeni paket adı açılabilir. Bu, eski uygulamanın devamı sayılmaz.",
				"Play'de anahtar kaybolduysa Google'un anahtar kurtarması vardır. Kabul edileceği kesin değildir.",
				"Anahtar dosyasını ve parolayı paketten ayrı yerde sakla."
			],
			ar: [
				"يمكن فتح اسم حزمة جديد بـ keystore جديد. وهذا لا يُعد استمرارًا للتطبيق القديم.",
				"إذا ضاع المفتاح على Play ف لدى Google استعادة للمفتاح. القبول ليس مضمونًا.",
				"احفظ ملف المفتاح وكلمة السر في مكان منفصل عن الحزمة."
			],
			ru: [
				"С новым keystore можно открыть новое имя пакета. Это не продолжение старого приложения.",
				"Если ключ потерян в Play, у Google есть сброс ключа. Что его примут, не обещано.",
				"Файл ключа и пароль храни отдельно от пакета."
			]
		}, L("Parol yaddadır, fayl yoxdursa, parol faylı qaytarmır.", "If you remember the password but the file is gone, the password does not bring the file back.", "Parola akılda olsa da dosya yoksa parola dosyayı geri getirmez.", "إذا كانت كلمة السر في الذاكرة والملف غير موجود، فالكلمة لا تُرجع الملف.", "Пароль в памяти не возвращает файл, если самого файла нет."))
	},
	{
		slug: "imza-uygun-deyil",
		piece: piece(L("İmzalar uyğun gəlmir", "The signatures do not match", "İmzalar uyuşmuyor", "التواقيع غير متطابقة", "Подписи не совпадают"), L("Telefonda duran tətbiqlə yeni APK ayrı açarla imzalanıb. Android bunu eyni tətbiqin davamı saymır.", "The app on the phone and the new APK were signed with different keys. Android does not treat that as the next version of the same app.", "Telefonda duran uygulama ile yeni APK ayrı anahtarla imzalanmıştır. Android bunu aynı uygulamanın devamı saymaz.", "التطبيق الذي على الهاتف وAPK الجديد وُقّعا بمفتاحين مختلفين. Android لا يعدّ ذلك استمرارًا للتطبيق نفسه.", "Приложение на телефоне и новый APK подписаны разными ключами. Android не считает это продолжением того же приложения."), {
			az: [
				"Köhnə tətbiqi silib yenisini qurmaq olar. İçindəki məlumat gedir.",
				"Yeniləmə istəyirsənsə, ilk açarın faylı və parolu lazımdır.",
				"Sınaq imzası ilə qurulmuş tətbiqin üstünə yayın imzası keçmir."
			],
			en: [
				"You can remove the old app and install the new one. The data inside goes away.",
				"If you want an update, you need the first key file and its password.",
				"A release signature does not replace a test signature on the installed app."
			],
			tr: [
				"Eski uygulamayı silip yenisini kurabilirsin. İçindeki veri gider.",
				"Güncelleme istiyorsan ilk anahtarın dosyası ve parolası gerekir.",
				"Deneme imzasıyla kurulmuş uygulamanın üstüne yayın imzası geçmez."
			],
			ar: [
				"يمكن حذف التطبيق القديم وتثبيت الجديد. بيانات الداخل تذهب.",
				"إذا أردت تحديثًا فأنت تحتاج ملف المفتاح الأول وكلمة سره.",
				"توقيع النشر لا يركب فوق تطبيق ثُبّت بتوقيع التجربة."
			],
			ru: [
				"Можно удалить старое приложение и поставить новое. Данные внутри уйдут.",
				"Если нужно обновление, нужен файл первого ключа и его пароль.",
				"Подпись выпуска не ложится поверх приложения, поставленного пробной подписью."
			]
		})
	},
	{
		slug: "paket-adi-xetasi",
		piece: piece(L("Paket adı xətası", "Package name error", "Paket adı hatası", "خطأ في اسم الحزمة", "Ошибка имени пакета"), L("Paket adı tətbiqin daimi adıdır. Böyük hərf, boşluq və Azərbaycan hərfi olmaz.", "The package name is the app's permanent name. It cannot contain a capital letter, a space, or an Azerbaijani letter.", "Paket adı uygulamanın kalıcı adıdır. Büyük harf, boşluk ve Azerbaycan harfi olmaz.", "اسم الحزمة هو الاسم الدائم للتطبيق. لا يقبل حرفًا كبيرًا ولا مسافة ولا حرفًا أذريًا.", "Имя пакета — постоянное имя приложения. Большая буква, пробел и азербайджанская буква не подходят."), {
			az: [
				"Düz forması `com.ad.soz` kimidir. Hər hissə hərf ilə başlayır.",
				"Play-ə çıxandan sonra bu ad dəyişmir.",
				"Eyni ad başqa imza ilə artıq durursa, telefon «artıq mövcuddur» deyir."
			],
			en: [
				"A correct form looks like `com.ad.soz`. Each part starts with a letter.",
				"After the app is on Play, this name does not change.",
				"If the same name is already installed with another signature, the phone says it already exists."
			],
			tr: [
				"Doğru biçim `com.ad.soz` gibidir. Her parça harfle başlar.",
				"Play'e çıktıktan sonra bu ad değişmez.",
				"Aynı ad başka imzayla zaten duruyorsa telefon «zaten var» der."
			],
			ar: [
				"الشكل الصحيح مثل `com.ad.soz`. كل جزء يبدأ بحرف.",
				"بعد الخروج على Play لا يتغير هذا الاسم.",
				"إذا كان الاسم نفسه مثبتًا بتوقيع آخر يقول الهاتف إنه موجود من قبل."
			],
			ru: [
				"Верный вид такой: `com.ad.soz`. Каждая часть начинается с буквы.",
				"После выхода в Play это имя не меняется.",
				"Если то же имя уже стоит с другой подписью, телефон говорит, что оно уже есть."
			]
		})
	},
	{
		slug: "apk-fayli-zedelenib",
		piece: piece(L("APK faylı zədələnib", "The APK file is damaged", "APK dosyası bozuldu", "ملف APK تالف", "Файл APK повреждён"), L("Fayl yolda kəsilib və ya içindən bir hissə silinib. Telefon paketi aça bilmir.", "The file was cut off on the way, or a part inside it was removed. The phone cannot open the package.", "Dosya yolda kesilmiş ya da içinden bir parça silinmiştir. Telefon paketi açamaz.", "الملف انقطع في الطريق أو حُذف جزء من داخله. الهاتف لا يستطيع فتح الحزمة.", "Файл оборвался по дороге или внутри удалили часть. Телефон не может открыть пакет."), {
			az: [
				"Endirməni yenidən et. Köhnə linkdən gələn fayl yarımçıq ola bilər.",
				"ZIP-in adını `.apk` etmək kifayət etmir. İç quruluş düz olmalıdır.",
				"`META-INF` silinibsə, imza da gedib. Faylı yenidən imzala."
			],
			en: [
				"Download it again. A file from an old link can be incomplete.",
				"Renaming a ZIP to `.apk` is not enough. The inside structure has to be right.",
				"If `META-INF` was deleted, the signature went with it. Sign the file again."
			],
			tr: [
				"İndirmeyi yeniden yap. Eski bağlantıdan gelen dosya yarım olabilir.",
				"ZIP'in adını `.apk` yapmak yetmez. İç kuruluş doğru olmalıdır.",
				"`META-INF` silindiyse imza da gitmiştir. Dosyayı yeniden imzala."
			],
			ar: [
				"أعد التنزيل. الملف الذي يأتي من رابط قديم قد يكون ناقصًا.",
				"تغيير اسم ZIP إلى `.apk` لا يكفي. بنية الداخل يجب أن تكون صحيحة.",
				"إذا حُذف `META-INF` فقد ذهب التوقيع معه. وقّع الملف من جديد."
			],
			ru: [
				"Скачай ещё раз. Файл со старой ссылки может быть неполным.",
				"Переименовать ZIP в `.apk` недостаточно. Внутреннее устройство должно быть верным.",
				"Если удалён `META-INF`, подпись ушла вместе с ним. Подпиши файл снова."
			]
		})
	},
	{
		slug: "play-protect-bloklayir",
		piece: piece(L("Play Protect bloklayır", "Blocked by Play Protect", "Play Protect engelliyor", "Play Protect يحظر التطبيق", "Play Protect блокирует"), L("Ekranda `Blocked by Play Protect` və ya `Harmful app blocked` durursa, Play Protect quruluşu saxlayır. Azərbaycan dilində bu, «Play Protect bloklayır» kimi görünür. Naməlum imza da bura düşə bilər. Bu, faylın həmişə virus olduğu demək deyil.\n\nTanımadığın saytdan gələn faylı qurma. Mesaj bəzən düz çıxır. Tanıdığın fayldırsa, əvvəl «hər halda qur» yolunu yoxla. Skanı bağlamaq son addımdır və iş bitəndə geri açılır.", "If the screen says `Blocked by Play Protect` or `Harmful app blocked`, Play Protect is holding the install. An unknown signature can land there too. That does not always mean the file is a virus.\n\nDo not install a file from a site you do not know. The warning is sometimes right. If you know the file, try Install anyway first. Turning the scan off is the last step, and you turn it back on when you are done.", "Ekranda `Blocked by Play Protect` ya da `Harmful app blocked` duruyorsa Play Protect kurulumu tutuyor. Bilinmeyen imza da buraya düşebilir. Bu, dosyanın her zaman virüs olduğu anlamına gelmez.\n\nTanımadığın siteden gelen dosyayı kurma. Uyarı bazen doğrudur. Dosyayı tanıyorsan önce «yine de kur» yolunu yokla. Taramayı kapatmak son adımdır ve iş bitince geri açılır.", "إذا ظهر `Blocked by Play Protect` أو `Harmful app blocked` فـ Play Protect يمسك التثبيت. التوقيع المجهول قد يقع هناك أيضًا. وهذا لا يعني دائمًا أن الملف فيروس.\n\nلا تثبّت ملفًا من موقع لا تعرفه. التحذير يكون صحيحًا أحيانًا. إذا كنت تعرف الملف فجرّب «ثبّت على أي حال» أولًا. إيقاف الفحص هو الخطوة الأخيرة، وتُعيد تشغيله حين تنتهي.", "Если на экране `Blocked by Play Protect` или `Harmful app blocked`, Play Protect держит установку. Неизвестная подпись тоже может туда попасть. Это не всегда значит, что файл — вирус.\n\nФайл с незнакомого сайта не ставь. Предупреждение иногда верное. Если файл знакомый, сначала попробуй «всё равно установить». Выключать проверку — последний шаг, и когда закончишь, включи её обратно."), {
			az: [
				"Quruluş pəncərəsində «Ətraflı» və ya `Install anyway` açılır. Oradan davam etmək olur. Düymə yoxdursa, bu, sərt blokdur.",
				"Play Store-u aç, yuxarıdakı hesab şəklindən Play Protect-ə keç, dişli işarədən quraşdırma skanını bağla. Faylı qur, sonra skanı geri aç.",
				"Samsung-da eyni yol Play Store-un içindədir. Təhlükəsizlik menyusu Play Protect-i əvəz etmir.",
				"Xiaomi-də Təhlükəsizlik proqramı öz skanını da saxlaya bilər. Play Protect-i bağlamaq o skanı açmır. Faylı orada da yoxla.",
				"Skanı həmişəlik söndürmək telefonu açıq qoyur. Bir fayl üçün bağla, iş bitəndə aç."
			],
			en: [
				"The install window may show More details, or `Install anyway`. You can continue from there. If the button is missing, the block is hard.",
				"Open Play Store, go to Play Protect from the account picture at the top, and turn off the install scan from the gear. Install the file, then turn the scan back on.",
				"On a Samsung the same path is inside Play Store. The security menu does not replace Play Protect.",
				"On a Xiaomi the Security app can keep its own scan. Turning Play Protect off does not open that scan. Check the file there too.",
				"Leaving the scan off for good leaves the phone open. Turn it off for one file, then turn it on again."
			],
			tr: [
				"Kurulum penceresinde «Ayrıntılar» ya da `Install anyway` açılır. Oradan devam edilebilir. Düğme yoksa bu sert bir bloktur.",
				"Play Store'u aç, üstteki hesap resminden Play Protect'e geç, dişli işaretten kurulum taramasını kapat. Dosyayı kur, sonra taramayı geri aç.",
				"Samsung'da aynı yol Play Store'un içindedir. Güvenlik menüsü Play Protect'in yerini tutmaz.",
				"Xiaomi'de Güvenlik programı kendi taramasını da tutabilir. Play Protect'i kapatmak o taramayı açmaz. Dosyayı orada da yokla.",
				"Taramayı sürekli kapalı bırakmak telefonu açıkta bırakır. Bir dosya için kapat, iş bitince aç."
			],
			ar: [
				"قد تظهر في نافذة التثبيت «مزيد من التفاصيل» أو `Install anyway`. يمكن المتابعة من هناك. إذا غاب الزر فالحظر صارم.",
				"افتح Play Store، ادخل Play Protect من صورة الحساب في الأعلى، وأوقف فحص التثبيت من الترس. ثبّت الملف ثم أعد الفحص.",
				"في Samsung الطريق نفسه داخل Play Store. قائمة الأمان لا تغني عن Play Protect.",
				"في Xiaomi قد يُبقي تطبيق الأمان فحصه. إيقاف Play Protect لا يفتح ذلك الفحص. افحص الملف هناك أيضًا.",
				"ترك الفحص مغلقًا دائمًا يُبقي الهاتف مكشوفًا. أغلقه لملف واحد ثم أعد تشغيله."
			],
			ru: [
				"В окне установки может быть «подробнее» или `Install anyway`. Оттуда можно продолжить. Если кнопки нет, блок жёсткий.",
				"Открой Play Store, зайди в Play Protect с картинки аккаунта сверху и выключи проверку установки через шестерёнку. Поставь файл и включи проверку обратно.",
				"На Samsung тот же путь внутри Play Store. Меню безопасности не заменяет Play Protect.",
				"На Xiaomi приложение «Безопасность» может держать свою проверку. Выключение Play Protect её не открывает. Проверь файл и там.",
				"Держать проверку выключенной постоянно оставляет телефон открытым. Выключи на один файл и включи снова."
			]
		}, L("Faylı kim göndərib, onu tanımırsansa, skanı bağlama.", "If you do not know who sent the file, do not turn the scan off.", "Dosyayı kimin gönderdiğini tanımıyorsan taramayı kapatma.", "إذا كنت لا تعرف من أرسل الملف فلا توقف الفحص.", "Если не знаешь, кто прислал файл, проверку не выключай."))
	},
	{
		slug: "paket-etibarsizdir",
		piece: piece(L("Paket etibarsızdır", "Package appears to be invalid", "Paket geçersiz", "الحزمة غير صالحة", "Пакет недействителен"), L("Ekranda `App not installed as package appears to be invalid` durursa, telefon faylı APK kimi qəbul etmir. Azərbaycan dilində bu, «paket etibarsızdır» kimi çıxır. Quruluş başlamır, çünki paket açılmır.\n\nEyni cümlə bir neçə səbəbdən çıxır. Sıra belədir: yarım fayl, səhv sonluq, köhnə imza, Android 14 və 15-in köhnə paketi rədd etməsi.", "If the screen says `App not installed as package appears to be invalid`, the phone will not take the file as an APK. Installation does not start, because the package does not open.\n\nThe same sentence comes from more than one cause. The order is: a half file, a wrong ending, an old signature, and Android 14 or 15 rejecting an old package.", "Ekranda `App not installed as package appears to be invalid` duruyorsa telefon dosyayı APK olarak kabul etmez. Kurulum başlamaz, çünkü paket açılmaz.\n\nAynı cümle birden çok nedenden çıkar. Sıra şöyledir: yarım dosya, yanlış son, eski imza ve Android 14 ile 15'in eski paketi reddetmesi.", "إذا ظهر `App not installed as package appears to be invalid` فالهاتف لا يقبل الملف كـ APK. لا يبدأ التثبيت لأن الحزمة لا تُفتح.\n\nالجملة نفسها تخرج من أكثر من سبب. الترتيب: ملف ناقص، لاحقة خاطئة، توقيع قديم، ورفض Android 14 و15 لحزمة قديمة.", "Если на экране `App not installed as package appears to be invalid`, телефон не принимает файл как APK. Установка не начинается, потому что пакет не открывается.\n\nТа же фраза выходит из нескольких причин. Порядок такой: неполный файл, неверное окончание, старая подпись и отказ Android 14 и 15 от старого пакета."), {
			az: [
				"Fayl yarım enib və ya WhatsApp-dan göndəriləndə sıxılıb. Köhnə nüsxəni sil, yenidən endir, bitməmiş faylı qurma.",
				"Ad `.apk.apk`, `.zip` və ya `.xapk` qalıbsa, bu səhifənin sözü çıxır. Tək APK-nın sonluğu `.apk` olmalıdır. XAPK-nı adını dəyişməklə APK etmək olmaz.",
				"Telefonda eyni tətbiqin başqa imzası durursa, paket etibarsız sayılır. Samsung və Xiaomi-də köhnəni silmədən yenisi keçmir. Siləndə məlumat gedir.",
				"Android 14 və 15 bəzi köhnə paketləri etibarsız sayır. Paketi indiki alətlə yenidən yığmaq lazımdır. Telefonu köhnəltmək bunu düzəltmir.",
				"Xiaomi-də fayl «Yükləmələr»də başqa adla durursa, quraşdırıcı onu açmır. Fayl menecerindən orijinal ada toxun."
			],
			en: [
				"The file stopped halfway, or it was compressed when sent from WhatsApp. Delete the old copy and download it again. Do not install a file that has not finished.",
				"If the name is still `.apk.apk`, `.zip`, or `.xapk`, this sentence appears. A single APK must end in `.apk`. Renaming an XAPK does not make it an APK.",
				"If another signature of the same app is already on the phone, the package is treated as invalid. On Samsung and Xiaomi the new one does not replace the old until you remove it. The data goes away.",
				"Android 14 and 15 treat some old packages as invalid. The package has to be built again with a current tool. Making the phone older does not fix it.",
				"On a Xiaomi, if the file sits in Downloads under another name, the installer will not open it. Tap the original name from the file manager."
			],
			tr: [
				"Dosya yarım inmiş ya da WhatsApp'tan gönderilirken sıkışmıştır. Eski kopyayı sil, yeniden indir, bitmemiş dosyayı kurma.",
				"Ad `.apk.apk`, `.zip` ya da `.xapk` kaldıysa bu sayfanın sözü çıkar. Tek APK'nın sonu `.apk` olmalıdır. XAPK'nın adını değiştirmek onu APK yapmaz.",
				"Telefonda aynı uygulamanın başka imzası duruyorsa paket geçersiz sayılır. Samsung ve Xiaomi'de eskiyi silmeden yenisi geçmez. Silince veri gider.",
				"Android 14 ve 15 bazı eski paketleri geçersiz sayar. Paketi güncel araçla yeniden derlemek gerekir. Telefonu eskitmek bunu düzeltmez.",
				"Xiaomi'de dosya İndirilenler'de başka adla duruyorsa kurucu onu açmaz. Dosya yöneticisinden orijinal ada dokun."
			],
			ar: [
				"الملف انقطع أو ضُغط حين أُرسل من WhatsApp. احذف النسخة القديمة وأعد التنزيل ولا تثبّت ملفًا لم يكتمل.",
				"إذا بقي الاسم `.apk.apk` أو `.zip` أو `.xapk` ظهرت جملة هذه الصفحة. APK الواحد يجب أن ينتهي بـ `.apk`. تغيير اسم XAPK لا يجعله APK.",
				"إذا كان توقيع آخر للتطبيق نفسه على الهاتف تُعد الحزمة غير صالحة. في Samsung وXiaomi لا يمر الجديد قبل حذف القديم. البيانات تذهب.",
				"يعدّ Android 14 و15 بعض الحزم القديمة غير صالحة. يجب إعادة بناء الحزمة بأداة حالية. جعل الهاتف أقدم لا يصلح ذلك.",
				"في Xiaomi إذا وقف الملف في التنزيلات باسم آخر فالمثبّت لا يفتحه. المس الاسم الأصلي من مدير الملفات."
			],
			ru: [
				"Файл скачался не до конца или сжался, когда его слали из WhatsApp. Удали старую копию и скачай снова. Не ставь файл, который не докачался.",
				"Если имя всё ещё `.apk.apk`, `.zip` или `.xapk`, выходит фраза этой страницы. Один APK должен кончаться на `.apk`. Переименовать XAPK в APK нельзя.",
				"Если на телефоне уже стоит другая подпись того же приложения, пакет считается недействительным. На Samsung и Xiaomi новое не встанет, пока не удалишь старое. Данные уйдут.",
				"Android 14 и 15 считают некоторые старые пакеты недействительными. Пакет надо собрать заново текущим инструментом. Сделать телефон старее это не чинит.",
				"На Xiaomi, если файл лежит в «Загрузках» под другим именем, установщик его не откроет. Нажми исходное имя из диспетчера файлов."
			]
		}, L("Eyni söz faylın içindəki siyahı pozulanda da çıxır. İçini əl ilə dəyişmisənsə, faylı yenidən yığ.", "The same words also appear when the list inside the file is broken. If you edited the inside by hand, build the file again.", "Aynı söz, dosyanın içindeki liste bozulunca da çıkar. İçini elle değiştirdiysen dosyayı yeniden derle.", "الكلام نفسه يظهر أيضًا حين تفسد القائمة داخل الملف. إذا غيّرت الداخل بيدك فأعد بناء الملف.", "Те же слова выходят и когда список внутри файла сломан. Если правил внутри руками, собери файл заново."))
	},
	{
		slug: "yaddas-catmir",
		piece: piece(L("Yaddaş çatmır", "Not enough storage", "Depolama yetmiyor", "لا توجد مساحة كافية", "Не хватает памяти"), L("Ekranda `Not enough storage space` və ya `Insufficient storage` durursa, APK kiçik olsa da qurulmur. Azərbaycan dilində telefon «yaddaş çatmır» və ya «kifayət qədər yer yoxdur» deyir. Quruluş üçün boş yer fayldan böyük olmalıdır.\n\nTəmizləyici proqramın göstərdiyi rəqəm quraşdırıcının gördüyü yer deyil. Samsung və Xiaomi-də yeri Parametrlərdən yoxla.", "If the screen says `Not enough storage space` or `Insufficient storage`, the APK will not install even when the file is small. The free space has to be larger than the file.\n\nThe number in a cleaner app is not the space the installer sees. On Samsung and Xiaomi, check the space from Settings.", "Ekranda `Not enough storage space` ya da `Insufficient storage` duruyorsa APK küçük olsa da kurulmaz. Kurulum için boş alan dosyadan büyük olmalıdır.\n\nTemizleyici programın gösterdiği sayı kurucunun gördüğü yer değildir. Samsung ve Xiaomi'de yeri Ayarlardan yokla.", "إذا ظهر `Not enough storage space` أو `Insufficient storage` فـ APK لا يُثبَّت ولو كان الملف صغيرًا. المساحة الفارغة يجب أن تكون أكبر من الملف.\n\nالرقم في تطبيق التنظيف ليس المساحة التي يراها المثبّت. في Samsung وXiaomi افحص المساحة من الإعدادات.", "Если на экране `Not enough storage space` или `Insufficient storage`, APK не ставится, даже если файл маленький. Свободного места должно быть больше, чем файл.\n\nЧисло в программе очистки — не то место, которое видит установщик. На Samsung и Xiaomi смотри место в Настройках."), {
			az: [
				"Samsung: Parametrlər → Cihaza qulluq → Yaddaş. Keşi təmizlə, lazımsız video və köhnə APK-nı sil.",
				"Xiaomi: Parametrlər → Yaddaş. Təmizləyicinin «boşaldıla bilər» rəqəmi quruluş üçün sayılmır. Daxili yaddaşda boş yer qalmalıdır.",
				"Fayl yaddaş kartındadırsa, onu daxili yaddaşa köçür, oradan qur. Kartın özündən quruluş tez-tez dayanır.",
				"100 meqabaytlıq tətbiq üçün bir neçə yüz meqabayt boş yer saxla. Quruluş faylı açır və müvəqqəti nüsxə saxlayır.",
				"«Yaddaş doludur» bəzən yanlış çıxır. Telefonu söndürüb yandır, Parametrlərdəki rəqəmə bir də bax."
			],
			en: [
				"Samsung: Settings, Device care, Storage. Clear the cache and remove spare video and old APK files.",
				"Xiaomi: Settings, Storage. The cleaner's «can be freed» number does not count for installation. Free space has to remain on internal storage.",
				"If the file is on a memory card, move it to internal storage and install it from there. Installing from the card often stops.",
				"Keep a few hundred megabytes free for a 100 megabyte app. Installation opens the file and keeps a temporary copy.",
				"\"Storage full\" is sometimes wrong. Turn the phone off and on, then look at the number in Settings again."
			],
			tr: [
				"Samsung: Ayarlar → Cihaz bakımı → Depolama. Önbelleği temizle, gereksiz video ve eski APK'yı sil.",
				"Xiaomi: Ayarlar → Depolama. Temizleyicinin «boşaltılabilir» sayısı kurulum için sayılmaz. Dahili depoda boş alan kalmalıdır.",
				"Dosya hafıza kartındaysa onu dahili depoya taşı, oradan kur. Kartın kendisinden kurulum sık durur.",
				"100 megabaytlık uygulama için birkaç yüz megabayt boş alan bırak. Kurulum dosyayı açar ve geçici kopya tutar.",
				"«Depolama dolu» bazen yanlış çıkar. Telefonu kapatıp aç, Ayarlardaki sayıya bir daha bak."
			],
			ar: [
				"Samsung: الإعدادات، العناية بالجهاز، التخزين. امسح الذاكرة المؤقتة واحذف الفيديو الزائد وملفات APK القديمة.",
				"Xiaomi: الإعدادات، التخزين. رقم «يمكن تفريغه» في المنظف لا يُحسب للتثبيت. يجب أن تبقى مساحة فارغة في التخزين الداخلي.",
				"إذا كان الملف على بطاقة الذاكرة فانقله إلى التخزين الداخلي وثبّته من هناك. التثبيت من البطاقة يتوقف كثيرًا.",
				"اترك بضع مئات من الميغابايت فارغة لتطبيق حجمه 100 ميغابايت. التثبيت يفتح الملف ويبقي نسخة مؤقتة.",
				"«التخزين ممتلئ» يخرج خطأ أحيانًا. أطفئ الهاتف ثم شغّله وانظر إلى الرقم في الإعدادات مرة أخرى."
			],
			ru: [
				"Samsung: Настройки, Обслуживание устройства, Память. Очисти кэш и удали лишнее видео и старые APK.",
				"Xiaomi: Настройки, Память. Число «можно освободить» в очистке для установки не считается. Свободное место должно остаться во внутренней памяти.",
				"Если файл на карте памяти, перенеси его во внутреннюю память и ставь оттуда. Установка с карты часто останавливается.",
				"Для приложения в 100 мегабайт оставь свободными несколько сотен. Установка открывает файл и держит временную копию.",
				"«Память заполнена» иногда врёт. Выключи телефон и включи, потом ещё раз посмотри число в Настройках."
			]
		})
	},
	{
		slug: "telefon-uygun-deyil",
		piece: piece(L("Telefon uyğun deyil", "App not compatible with your device", "Uygulama cihazla uyumlu değil", "التطبيق غير متوافق مع جهازك", "Приложение не совместимо с устройством"), L("Ekranda `This app isn't compatible with your device` və ya `App not compatible with your device` durursa, paket bu telefon üçün yığılmayıb. Azərbaycan dilində bu, «telefon uyğun deyil» və ya «bu tətbiq cihazınızla uyğun deyil» kimi çıxır.\n\nXiaomi-də HyperOS, Samsung-da One UI bu qaydanı dəyişmir. Sayılan, altındakı Android rəqəmi və prosessorun 32 ya da 64 bit olmasıdır.", "If the screen says `This app isn't compatible with your device` or `App not compatible with your device`, the package was not built for this phone.\n\nHyperOS on a Xiaomi and One UI on a Samsung do not change the rule. What counts is the Android number under that name, and whether the processor is 32 or 64 bit.", "Ekranda `This app isn't compatible with your device` ya da `App not compatible with your device` duruyorsa paket bu telefon için derlenmemiştir.\n\nXiaomi'de HyperOS, Samsung'da One UI bu kuralı değiştirmez. Sayılan, altındaki Android sayısı ve işlemcinin 32 ya da 64 bit olmasıdır.", "إذا ظهر `This app isn't compatible with your device` أو `App not compatible with your device` فالحزمة لم تُبنَ لهذا الهاتف.\n\nHyperOS في Xiaomi وOne UI في Samsung لا يغيّران القاعدة. ما يُحسب هو رقم Android تحت ذلك الاسم، وهل المعالج 32 بت أم 64.", "Если на экране `This app isn't compatible with your device` или `App not compatible with your device`, пакет собран не для этого телефона.\n\nHyperOS на Xiaomi и One UI на Samsung правило не меняют. Считается число Android под этим именем и то, 32 или 64 бита у процессора."), {
			az: [
				"Android rəqəmi Parametrlər → Telefon haqqında bölməsindədir. Samsung-da «Proqram məlumatı», Xiaomi-də «Telefon haqqında» və ya «Cihazım».",
				"Paket Android 8 istəyirsə, Android 7 olan telefon onu qurmur. Qabığın adı köhnə rəqəmi yeni etmir.",
				"32 bitlik telefon 64 bitlik paketi açmır. Əksinə də olur. Faylın adı `arm64` və ya `armeabi` daşıyırsa, bu, prosesoru göstərir.",
				"Planşet üçün yığılmış paket bəzi telefonlarda uyğun sayılmır. Telefon üçün ayrıca paket lazımdır.",
				"Play-də «cihazınız uyğun deyil» durursa, kənar APK də eyni səbəbdən dayanır. Başqa fayl axtarmaq versiyanı dəyişmir."
			],
			en: [
				"The Android number is under Settings, About phone. On Samsung that is Software information. On Xiaomi it is About phone, or My device.",
				"If the package wants Android 8, a phone on Android 7 will not install it. The skin's name does not make an old number new.",
				"A 32-bit phone will not open a 64-bit package. The other way happens too. If the file name carries `arm64` or `armeabi`, that names the processor.",
				"A package built for a tablet is not treated as compatible on some phones. A phone needs its own package.",
				"If Play says your device is not compatible, a side-loaded APK stops for the same reason. Looking for another file does not change the version."
			],
			tr: [
				"Android sayısı Ayarlar → Telefon hakkında bölümündedir. Samsung'da «Yazılım bilgisi», Xiaomi'de «Telefon hakkında» ya da «Cihazım».",
				"Paket Android 8 istiyorsa Android 7 olan telefon onu kurmaz. Kabuğun adı eski sayıyı yeni yapmaz.",
				"32 bitlik telefon 64 bitlik paketi açmaz. Tersi de olur. Dosya adı `arm64` ya da `armeabi` taşıyorsa bu, işlemciyi gösterir.",
				"Tablet için derlenmiş paket bazı telefonlarda uyumlu sayılmaz. Telefon için ayrı paket gerekir.",
				"Play'de «cihazınız uyumlu değil» duruyorsa dış APK da aynı nedenle durur. Başka dosya aramak sürümü değiştirmez."
			],
			ar: [
				"رقم Android في الإعدادات، حول الهاتف. في Samsung «معلومات البرنامج»، وفي Xiaomi «حول الهاتف» أو «جهازي».",
				"إذا طلبت الحزمة Android 8 فهاتف على Android 7 لن يثبّتها. اسم الواجهة لا يجعل الرقم القديم جديدًا.",
				"هاتف 32 بت لا يفتح حزمة 64 بت. والعكس يقع أيضًا. إذا حمل اسم الملف `arm64` أو `armeabi` فهذا يسمي المعالج.",
				"الحزمة المبنية للوحة لا تُعد متوافقة على بعض الهواتف. الهاتف يحتاج حزمته.",
				"إذا قال Play إن جهازك غير متوافق فـ APK من الخارج يتوقف للسبب نفسه. البحث عن ملف آخر لا يغيّر الإصدار."
			],
			ru: [
				"Число Android лежит в Настройках, в разделе о телефоне. На Samsung это «О программе», на Xiaomi «О телефоне» или «Моё устройство».",
				"Если пакет хочет Android 8, телефон на Android 7 его не поставит. Имя оболочки не делает старое число новым.",
				"32-битный телефон не откроет 64-битный пакет. Бывает и наоборот. Если в имени файла есть `arm64` или `armeabi`, это называет процессор.",
				"Пакет, собранный для планшета, на некоторых телефонах не считается подходящим. Телефону нужен свой пакет.",
				"Если Play пишет, что устройство не подходит, чужой APK останавливается по той же причине. Искать другой файл версию не меняет."
			]
		})
	},
	{
		slug: "kohne-versiya-qurulmur",
		piece: piece(L("Köhnə versiya qurulmur", "An older version will not install", "Eski sürüm kurulmuyor", "النسخة الأقدم لا تُثبَّت", "Старая версия не устанавливается"), L("Telefonda daha yeni versiya durursa, Android köhnə APK-nı onun üstünə qoymur. Buna versiyanın geri düşməsi deyirlər.", "If a newer version is already on the phone, Android will not put an older APK over it. People call that a version downgrade.", "Telefonda daha yeni sürüm duruyorsa Android eski APK'yı onun üstüne koymaz. Buna sürümün geri düşmesi denir.", "إذا كانت نسخة أحدث على الهاتف، لا يضع Android ملف APK أقدم فوقها. يُسمّى ذلك خفض الإصدار.", "Если на телефоне уже стоит более новая версия, Android не кладёт старый APK поверх неё. Это называют откатом версии."), {
			az: [
				"Yeni versiyanı saxlamaq istəyirsənsə, köhnə faylı qurma.",
				"Köhnəyə qayıtmaq lazımdırsa, əvvəl tətbiqi sil. İçindəki məlumat gedir.",
				"Sayılan rəqəm ekrandakı 1.2 adı deyil. Paketin içindəki versiya kodudur."
			],
			en: [
				"If you want to keep the newer version, do not install the old file.",
				"If you need to go back, remove the app first. The data inside goes away.",
				"The number that counts is not the 1.2 name on the screen. It is the version code inside the package."
			],
			tr: [
				"Yeni sürümü tutmak istiyorsan eski dosyayı kurma.",
				"Eskiye dönmek gerekiyorsa önce uygulamayı sil. İçindeki veri gider.",
				"Sayılan sayı ekrandaki 1.2 adı değildir. Paketin içindeki sürüm kodudur."
			],
			ar: [
				"إذا أردت إبقاء النسخة الأحدث فلا تثبّت الملف القديم.",
				"إذا لزم الرجوع فاحذف التطبيق أولًا. بيانات الداخل تذهب.",
				"الرقم الذي يُحسب ليس اسم 1.2 على الشاشة. هو رمز الإصدار داخل الحزمة."
			],
			ru: [
				"Если хочешь оставить новую версию, старый файл не ставь.",
				"Если нужно вернуться назад, сначала удали приложение. Данные внутри уйдут.",
				"Считается не имя 1.2 на экране, а код версии внутри пакета."
			]
		}, L("Play-dən gələn tətbiqi silib kənar APK qoyanda alış və hesab içəridə qalmaya bilər.", "If you remove an app that came from Play and put a side-loaded APK in its place, purchases and the account may not stay inside.", "Play'den gelen uygulamayı silip yerine dış APK koyunca satın alma ve hesap içeride kalmayabilir.", "إذا حذفت تطبيقًا جاء من Play ووضعت APK من الخارج فقد لا تبقى المشتريات والحساب في الداخل.", "Если удалить приложение из Play и поставить чужой APK, покупки и аккаунт внутри могут не остаться."))
	},
	{
		slug: "xapk-qurulmur",
		piece: piece(L("XAPK qurulmur", "XAPK will not install", "XAPK kurulmuyor", "XAPK لا يُثبَّت", "XAPK не устанавливается"), L("XAPK, APKS və split APK bir neçə parçalı paketdir. Telefonun adi quraşdırıcısı onu tək APK kimi açmır, ona görə XAPK qurulmur.\n\nAdını `.apk` etmək işləmir. İçində əsas paket və əlavə parçalar var. Samsung-un Fayllarım proqramı və Xiaomi-nin fayl meneceri arxivi açıb bir parçanı qura bilər. Tətbiq açılır və dərhal bağlanır.", "XAPK, APKS, and a split APK are a package in several pieces. The phone's ordinary installer will not open that as one APK, so the XAPK will not install.\n\nRenaming it to `.apk` does not work. Inside are the main package and extra pieces. Samsung My Files and the Xiaomi file manager can open the archive and install one piece. The app opens and closes at once.", "XAPK, APKS ve split APK birkaç parçalı pakettir. Telefonun sıradan kurucusu onu tek APK gibi açmaz, onun için XAPK kurulmuyor.\n\nAdını `.apk` yapmak işe yaramaz. İçinde ana paket ve ek parçalar vardır. Samsung'un Dosyalarım programı ve Xiaomi'nin dosya yöneticisi arşivi açıp bir parçayı kurabilir. Uygulama açılır ve hemen kapanır.", "XAPK وAPKS وsplit APK حزمة من عدة قطع. مثبّت الهاتف العادي لا يفتحها كـ APK واحد، لذلك XAPK لا يُثبَّت.\n\nتغيير الاسم إلى `.apk` لا ينفع. في الداخل الحزمة الأساسية وقطع إضافية. ملفات Samsung ومدير ملفات Xiaomi قد يفتحان الأرشيف ويثبّتان قطعة واحدة. التطبيق يُفتح ويُغلق فورًا.", "XAPK, APKS и split APK — это пакет из нескольких частей. Обычный установщик телефона не откроет его как один APK, поэтому XAPK не устанавливается.\n\nПереименовать его в `.apk` не помогает. Внутри основной пакет и дополнительные части. «Мои файлы» на Samsung и диспетчер файлов Xiaomi могут открыть архив и поставить одну часть. Приложение откроется и сразу закроется."), {
			az: [
				"`.xapk` və ya `.apks` sonluğunu `.apk` etmək paketi düzəltmir. Telefon yenə də bir parça görür.",
				"Parçaları birləşdirən quraşdırıcı ilə bütün hissələri bir yerdə qur. Bir parçanı tək qursan, tətbiq açılıb bağlanır.",
				"Samsung Fayllarım və Xiaomi fayl meneceri arxivi özü quraşdırmır. Onlar faylı açır. Quruluş ayrıca proqramın işidir.",
				"OBB və ya data qovluğu oyunun içindədirsə, tək APK oyunu açmır. Həmin qovluq da öz yerinə keçməlidir.",
				"Play özü də parçalı paket göndərir. Kənardan gələn XAPK həmin parçaların bir faylda yığımıdır."
			],
			en: [
				"Changing `.xapk` or `.apks` to `.apk` does not fix the package. The phone still sees one piece.",
				"Install every part together with an installer that joins the pieces. If you install only one piece, the app opens and closes.",
				"Samsung My Files and the Xiaomi file manager do not install the archive themselves. They open the file. Installation is another app's job.",
				"If an OBB or data folder sits inside a game, the APK alone will not open the game. That folder has to go to its own place too.",
				"Play itself sends split packages. An XAPK from outside is those pieces gathered into one file."
			],
			tr: [
				"`.xapk` ya da `.apks` sonunu `.apk` yapmak paketi düzeltmez. Telefon yine bir parça görür.",
				"Parçaları birleştiren kurucu ile bütün parçaları birlikte kur. Bir parçayı tek kurarsan uygulama açılır ve kapanır.",
				"Samsung Dosyalarım ve Xiaomi dosya yöneticisi arşivi kendisi kurmaz. Onlar dosyayı açar. Kurulum ayrı programın işidir.",
				"OBB ya da data klasörü oyunun içindeyse tek APK oyunu açmaz. O klasör de kendi yerine geçmelidir.",
				"Play da parçalı paket gönderir. Dışarıdan gelen XAPK o parçaların bir dosyada toplanmış halıdır."
			],
			ar: [
				"تغيير لاحقة `.xapk` أو `.apks` إلى `.apk` لا يصلح الحزمة. الهاتف ما زال يرى قطعة واحدة.",
				"ثبّت كل الأجزاء معًا بمثبّت يجمعها. إذا ثبّتت قطعة واحدة فالتطبيق يُفتح ويُغلق.",
				"ملفات Samsung ومدير ملفات Xiaomi لا يثبّتان الأرشيف بنفسيهما. هما يفتحان الملف. التثبيت عمل برنامج آخر.",
				"إذا كان مجلد OBB أو data داخل اللعبة فـ APK وحده لا يفتح اللعبة. ذلك المجلد يجب أن يذهب إلى مكانه أيضًا.",
				"Play نفسه يرسل حزمًا مقسومة. XAPK الآتي من الخارج هو تلك القطع مجموعة في ملف واحد."
			],
			ru: [
				"Сменить окончание `.xapk` или `.apks` на `.apk` пакет не чинит. Телефон всё равно видит одну часть.",
				"Ставь все части вместе установщиком, который их склеивает. Если поставить одну часть, приложение откроется и закроется.",
				"«Мои файлы» на Samsung и диспетчер файлов Xiaomi сами архив не ставят. Они открывают файл. Установка — дело другой программы.",
				"Если внутри игры лежит папка OBB или data, один APK игру не откроет. Эта папка тоже должна лечь на своё место.",
				"Play сам шлёт пакеты по частям. XAPK со стороны — это те части, собранные в один файл."
			]
		})
	}
];
var LANGS = [
	"az",
	"en",
	"tr",
	"ar",
	"ru"
];
var APK_ITEMS = APK_ERROR_INDEX.map(([slug, t]) => ({
	slug,
	lazy: true,
	piece: Object.fromEntries(LANGS.map((l) => [l, {
		title: t[l][0],
		lead: t[l][1],
		points: []
	}]))
}));
var ERRORS = [
	...BASE_ERRORS,
	...PROBLEM_PAGES,
	...LETTER_GAPS,
	...APK_ITEMS
];
/** Lazy chunk with the full text of the Android/Expo/Play error pages. */
async function loadApkBody(slug) {
	const { APK_ERRORS } = await import("./apk-errors-data-D0DIb-AK.mjs");
	return APK_ERRORS.find((e) => e.slug === slug) ?? null;
}
var TOPICS = [
	{
		slug: "chatgpt-nedir",
		piece: piece(L("ChatGPT nədir?", "What is ChatGPT?", "ChatGPT nedir?", "ما هو ChatGPT؟", "Что такое ChatGPT?"), L("ChatGPT söhbət proqramıdır. Sən yazırsan, o cavab yazır. Mətn, kod, tərcümə və sadə izah üçün işlədilir. Adamlar bu il onun adını çox axtarır, çünki həm saytda, həm telefonda ayrıca durur.\n\nOnu OpenAI hazırlayır. Pulsuz tərəfi var, ödənişli tərəfi də. Hansı modelin açıq olduğu və gündə neçə sual verə bildiyin vaxtaşırı dəyişir. Düymənin adı sabah eyni olmaya bilər.\n\nSənin kompüterindəki faylı özü açmır. Yapışdırdığın və ya özün yüklədiyin mətni görür. Şifrə, kart nömrəsi və gizli açar ora getməməlidir.\n\nCavab həmişə düz olmur. Rəqəm, tarix, qanun və kod səhv çıxa bilər. Əmin səslənəndə də yanılır. Vacib şeyi başqa yerdən yoxla. Kodu işə salmadan qəbul etmə.", "ChatGPT is a chat program. You write, and it writes back. People use it for text, code, translation, and a plain explanation. They search its name a lot this year because it stands on its own, both on the web and on the phone.\n\nOpenAI makes it. There is a free side and a paid side. Which model is open, and how many questions you can ask in a day, changes from time to time. The name on a button may not be the same tomorrow.\n\nIt does not open a file on your computer by itself. It sees the text you paste or upload yourself. A password, a card number, and a private key should not go there.\n\nThe answer is not always right. A number, a date, a law, and a piece of code can come out wrong. It can sound sure and still be wrong. Check an important fact somewhere else. Do not accept code before you run it.", "ChatGPT bir sohbet programıdır. Sen yazarsın, o cevap yazar. Metin, kod, çeviri ve sade açıklama için kullanılır. İnsanlar bu yıl adını çok arar, çünkü hem sitede hem telefonda ayrı durur.\n\nOnu OpenAI hazırlar. Ücretsiz tarafı vardır, ücretli tarafı da. Hangi modelin açık olduğu ve günde kaç soru sorabildiğin zaman zaman değişir. Düğmenin adı yarın aynı olmayabilir.\n\nBilgisayarındaki dosyayı kendisi açmaz. Yapıştırdığın veya kendin yüklediğin metni görür. Şifre, kart numarası ve gizli anahtar oraya gitmemelidir.\n\nCevap her zaman doğru değildir. Sayı, tarih, yasa ve kod yanlış çıkabilir. Emin seslendiğinde de yanılır. Önemli bir şeyi başka yerden kontrol et. Kodu çalıştırmadan kabul etme.", "ChatGPT برنامج محادثة. تكتب فيكتب الجواب. يُستخدم للنص والرمز والترجمة والشرح البسيط. يبحث الناس عن اسمه كثيرًا هذا العام لأنه يقف وحده، على الويب وعلى الهاتف.\n\nتصنعه OpenAI. له جانب مجاني وجانب مدفوع. أي نموذج مفتوح، وكم سؤالًا تستطيع أن تسأل في اليوم، يتغير من وقت إلى وقت. اسم الزر قد لا يبقى نفسه غدًا.\n\nلا يفتح ملفًا على حاسوبك بنفسه. يرى النص الذي تلصقه أو ترفعه أنت. كلمة السر ورقم البطاقة والمفتاح السري لا ينبغي أن تذهب إلى هناك.\n\nالجواب ليس صحيحًا دائمًا. قد يخرج الرقم أو التاريخ أو القانون أو الرمز خطأ. قد يبدو واثقًا ويخطئ مع ذلك. افحص الأمر المهم من مكان آخر. لا تقبل الرمز قبل أن تشغّله.", "ChatGPT — это программа для разговора. Ты пишешь, она отвечает. Ею пользуются для текста, кода, перевода и простого объяснения. В этом году имя ищут часто, потому что она стоит отдельно и на сайте, и на телефоне.\n\nЕё делает OpenAI. Есть бесплатная сторона и платная. Какая модель открыта и сколько вопросов можно задать за день, время от времени меняется. Надпись на кнопке завтра может быть другой.\n\nФайл на твоём компьютере она сама не открывает. Она видит текст, который ты вставил или сам загрузил. Пароль, номер карты и секретный ключ туда уходить не должны.\n\nОтвет не всегда верный. Число, дата, закон и код могут выйти неправильно. Она может звучать уверенно и всё равно ошибиться. Важное проверь в другом месте. Не принимай код, пока не запустишь его."), {
			az: [
				"Açıq «bunu izah et» əvəzinə dili, uzunluğu və əlindəki mətni yaz.",
				"Kodu sətir-sətir izah etdir, sonra özün oxu.",
				"Şəkil də göndərmək olur. Yenə də yazdığın söz cavabı yönəldir.",
				"Tarixçə sənin hesabındadır. Başqasının hesabı sənin söhbətini görmür.",
				"Tərcümə üçün işləyir, amma ad, rəqəm və atalar sözü səhv düşə bilər.",
				"Hazır kodu layihəyə yapışdırmazdan əvvəl bir dəfə işlət."
			],
			en: [
				"Instead of a bare \"explain this\", write the language, the length, and the text you already have.",
				"Ask it to explain the code line by line, then read it yourself.",
				"You can send a picture too. The words you write still steer the answer.",
				"The history sits in your account. Someone else's account does not see your chat.",
				"It works for translation, but a name, a number, and a saying can land wrong.",
				"Run generated code once before you paste it into a project."
			],
			tr: [
				"Boş «bunu açıkla» yerine dili, uzunluğu ve elindeki metni yaz.",
				"Kodu satır satır açıklat, sonra kendin oku.",
				"Resim de göndermek olur. Yine de yazdığın söz cevabı yönlendirir.",
				"Geçmiş senin hesabındadır. Başkasının hesabı senin sohbetini görmez.",
				"Çeviri için çalışır, ama ad, sayı ve deyim yanlış düşebilir.",
				"Üretilen kodu projeye yapıştırmadan önce bir kez çalıştır."
			],
			ar: [
				"بدل «اشرح هذا» العاري اكتب اللغة والطول والنص الذي تحت يدك.",
				"اطلب شرح الرمز سطرًا سطرًا، ثم اقرأه أنت.",
				"تستطيع إرسال صورة أيضًا. والكلمات التي تكتبها ما زالت توجّه الجواب.",
				"السجل في حسابك. حساب غيرك لا يرى محادثتك.",
				"يصلح للترجمة، لكن الاسم والرقم والمثل قد يقع خطأ.",
				"شغّل الرمز المولَّد مرة قبل أن تلصقه في مشروع."
			],
			ru: [
				"Вместо голого «объясни это» напиши язык, длину и текст, который уже есть.",
				"Попроси объяснить код по строкам, потом прочитай сам.",
				"Картинку тоже можно отправить. Слова, которые ты пишешь, всё равно ведут ответ.",
				"История лежит в твоём аккаунте. Чужой аккаунт твой разговор не видит.",
				"Для перевода годится, но имя, число и поговорка могут лечь неверно.",
				"Запусти готовый код один раз, прежде чем вставлять его в проект."
			]
		}, L("Nibras AI bu saytın öz söhbətidir. ChatGPT deyil. Sual eyni cür verilir, model və limit ayrıdır.", "Nibras AI is this site's own chat. It is not ChatGPT. You can ask in the same way, but the model and the limit are separate.", "Nibras AI bu sitenin kendi sohbetidir. ChatGPT değildir. Soru aynı biçimde verilir, model ve limit ayrıdır.", "Nibras AI محادثة هذا الموقع. ليست ChatGPT. السؤال يُعطى بالطريقة نفسها، لكن النموذج والحد منفصلان.", "Nibras AI — это разговор этого сайта. Это не ChatGPT. Спрашивать можно так же, но модель и лимит другие."))
	},
	{
		slug: "gemini-nedir",
		piece: piece(L("Gemini nədir?", "What is Gemini?", "Gemini nedir?", "ما هو Gemini؟", "Что такое Gemini?"), L("Gemini Google-un söhbət proqramıdır. ChatGPT ilə eyni işi görür: sual yazırsan, cavab gəlir. Mətn, şəkil və səs qəbul edə bilir.\n\nAxtarışın, Gmail-in və Android-in yanında durur. Buna görə adamlar proqramın adını yox, «Gemini» sözünün özünü axtarır. Ad bir çox dildə yazılır, mənası dəyişmir.\n\nGoogle hesabınla açılır. Pulsuz tərəfi və ödənişli tərəfi var. Limit və içindəki model dəyişə bilər. Bir həftə gördüyün düymə o biri həftə olmayabilir.\n\nCavabı axtarış nəticəsi kimi qəbul etmə. Mənbə göstərməyə bilər və ya göstərdiyi səhifə sualına uymaya bilər. Rəqəm, tarix və kod üçün yenə yoxlama lazımdır.", "Gemini is Google's chat program. It does the same job as ChatGPT: you write a question and an answer comes back. It can take text, a picture, and a voice.\n\nIt sits beside Search, Gmail, and Android. That is why people search the word Gemini itself, not only the idea of the program. The name is written in many languages. The meaning does not change.\n\nIt opens with your Google account. There is a free side and a paid side. The limit and the model inside can change. A button you saw one week may be gone the next.\n\nDo not take the answer as a search result. It may show no source, or the page it shows may not match the question. A number, a date, and code still need a check.", "Gemini, Google'ın sohbet programıdır. ChatGPT ile aynı işi görür: soru yazarsın, cevap gelir. Metin, resim ve ses alabilir.\n\nAramanın, Gmail'in ve Android'in yanında durur. Bu yüzden insanlar programın fikrini değil, Gemini sözünün kendisini arar. Ad birçok dilde yazılır, anlamı değişmez.\n\nGoogle hesabınla açılır. Ücretsiz tarafı ve ücretli tarafı vardır. Limit ve içindeki model değişebilir. Bir hafta gördüğün düğme öteki hafta olmayabilir.\n\nCevabı arama sonucu gibi kabul etme. Kaynak göstermeyebilir ya da gösterdiği sayfa soruya uymayabilir. Sayı, tarih ve kod için yine kontrol gerekir.", "Gemini برنامج محادثة Google. يؤدي عمل ChatGPT نفسه: تكتب سؤالًا فيأتي الجواب. يستطيع أن يأخذ نصًا وصورة وصوتًا.\n\nيقف بجانب البحث وGmail وAndroid. لذلك يبحث الناس عن كلمة Gemini نفسها، لا عن فكرة البرنامج فقط. يُكتب الاسم بلغات كثيرة، والمعنى لا يتغير.\n\nيُفتح بحساب Google. له جانب مجاني وجانب مدفوع. الحد والنموذج في الداخل يمكن أن يتغيرا. الزر الذي رأيته في أسبوع قد لا يكون في الأسبوع التالي.\n\nلا تأخذ الجواب كنتيجة بحث. قد لا يُظهر مصدرًا، أو الصفحة التي يُظهرها قد لا توافق السؤال. الرقم والتاريخ والرمز ما زالت تحتاج فحصًا.", "Gemini — это программа Google для разговора. Она делает ту же работу, что ChatGPT: пишешь вопрос, приходит ответ. Умеет принять текст, картинку и голос.\n\nОна стоит рядом с Поиском, Gmail и Android. Поэтому люди ищут само слово Gemini, а не только идею программы. Имя пишут на многих языках, смысл не меняется.\n\nОткрывается аккаунтом Google. Есть бесплатная сторона и платная. Лимит и модель внутри могут меняться. Кнопка, которую ты видел на одной неделе, на следующей может пропасть.\n\nНе принимай ответ за результат поиска. Источника может не быть, или показанная страница может не подходить к вопросу. Число, дата и код всё равно надо проверять."), {
			az: [
				"Android telefonda və brauzerdə eyni hesabla açılır.",
				"Gmail və Diskdəki faylı yalnız sən icazə verəndə görür. İcazəni bağlamaq olar.",
				"Şəkil göndərib «bunun içində nə var» deyə bilərsən. Yenə də yoxla.",
				"Tərcümə və qısa izah üçün rahatdır. Qanun və tibb cavabını son söz sayma.",
				"ChatGPT-nin hesabı Gemini-də açılmır. Hər birinin öz girişi var.",
				"Kod nümunəsi versə, onu öz layihəndə işlət və səhvi özün gör."
			],
			en: [
				"On an Android phone and in the browser it opens with the same account.",
				"It sees a file in Gmail or Drive only when you allow it. You can close that permission.",
				"You can send a picture and ask what is in it. Check the answer anyway.",
				"It is comfortable for translation and a short explanation. Do not treat a law or a medical answer as the last word.",
				"A ChatGPT account does not open Gemini. Each one has its own sign-in.",
				"If it gives a code sample, run it in your own project and see the mistake yourself."
			],
			tr: [
				"Android telefonda ve tarayıcıda aynı hesapla açılır.",
				"Gmail ve Drive'daki dosyayı yalnız sen izin verince görür. İzni kapatmak olur.",
				"Resim gönderip «bunun içinde ne var» diyebilirsin. Yine de kontrol et.",
				"Çeviri ve kısa açıklama için rahattır. Yasa ve tıp cevabını son söz sayma.",
				"ChatGPT hesabı Gemini'de açılmaz. Her birinin kendi girişi vardır.",
				"Kod örneği verirse onu kendi projende çalıştır ve hatayı kendin gör."
			],
			ar: [
				"على هاتف Android وفي المتصفح يُفتح بالحساب نفسه.",
				"يرى ملفًا في Gmail أو Drive فقط حين تسمح. تستطيع إغلاق الإذن.",
				"تستطيع إرسال صورة وتسأل ماذا فيها. افحص الجواب مع ذلك.",
				"مريح للترجمة والشرح القصير. لا تجعل جواب القانون أو الطب الكلمة الأخيرة.",
				"حساب ChatGPT لا يفتح Gemini. لكل واحد دخوله.",
				"إذا أعطى مثال رمز فشغّله في مشروعك ورَ الخطأ بنفسك."
			],
			ru: [
				"На телефоне Android и в браузере открывается тем же аккаунтом.",
				"Файл в Gmail или на Диске видит только когда ты разрешишь. Разрешение можно закрыть.",
				"Можно отправить картинку и спросить, что внутри. Ответ всё равно проверь.",
				"Для перевода и короткого объяснения удобен. Ответ про закон или медицину не считай последним словом.",
				"Аккаунт ChatGPT в Gemini не открывается. У каждого свой вход.",
				"Если даст пример кода, запусти его в своём проекте и увидь ошибку сам."
			]
		})
	},
	{
		slug: "claude-nedir",
		piece: piece(L("Claude nədir?", "What is Claude?", "Claude nedir?", "ما هو Claude؟", "Что такое Claude?"), L("Claude Anthropic-in söhbət proqramıdır. Adamlar onu ChatGPT və Gemini-nin yanında axtarır. Üçünün işi eynidir: sən yazırsan, model cavab yazır.\n\nUzun mətni bir yerdə oxutmaq və kodu izah etdirmək üçün seçirlər. Qısa sual üçün də işləyir. Fərq adın arxasındakı şirkətdə və həmin həftə açıq olan modeldədir.\n\nHesabı ayrıdır. ChatGPT-yə və ya Google-a girdiyin üçün Claude açılmır. Pulsuz tərəfi və ödənişli tərəfi var. Limit dolanda cavab dayanır və ya qısalır.\n\nBu da yanılır. Uzun cavab düz səslənə bilər və ortasında bir fakt səhv ola bilər. Müqavilə, qanun və tibb mətnini olduğu kimi qəbul etmə. Kodu oxu.", "Claude is Anthropic's chat program. People search for it next to ChatGPT and Gemini. The job of all three is the same: you write, and a model writes back.\n\nPeople pick it to have a long text read in one place and to have code explained. It works for a short question too. The difference is the company behind the name and the model that is open that week.\n\nThe account is separate. Signing in to ChatGPT or Google does not open Claude. There is a free side and a paid side. When the limit is full, the answer stops or gets shorter.\n\nThis one is wrong too. A long answer can sound right and still hold one false fact in the middle. Do not take a contract, a law, or a medical text as it stands. Read the code.", "Claude, Anthropic'in sohbet programıdır. İnsanlar onu ChatGPT ve Gemini'nin yanında arar. Üçünün işi aynıdır: sen yazarsın, model cevap yazar.\n\nUzun metni bir yerde okutmak ve kodu açıklatmak için seçerler. Kısa soru için de çalışır. Fark, adın arkasındaki şirkette ve o hafta açık olan modeldedir.\n\nHesabı ayrıdır. ChatGPT'ye veya Google'a girdiğin için Claude açılmaz. Ücretsiz tarafı ve ücretli tarafı vardır. Limit dolunca cevap durur ya da kısalır.\n\nBu da yanılır. Uzun cevap doğru gelebilir ve ortasında bir olgu yanlış olabilir. Sözleşme, yasa ve tıp metnini olduğu gibi kabul etme. Kodu oku.", "Claude برنامج محادثة Anthropic. يبحث الناس عنه بجانب ChatGPT وGemini. عمل الثلاثة واحد: تكتب فيكتب النموذج الجواب.\n\nيختارونه ليُقرأ نص طويل في مكان واحد وليُشرح الرمز. يعمل للسؤال القصير أيضًا. الفرق في الشركة خلف الاسم وفي النموذج المفتوح ذلك الأسبوع.\n\nالحساب منفصل. الدخول إلى ChatGPT أو Google لا يفتح Claude. له جانب مجاني وجانب مدفوع. حين يمتلئ الحد يتوقف الجواب أو يقصر.\n\nهذا أيضًا يخطئ. قد يبدو الجواب الطويل صحيحًا وفي وسطه حقيقة خاطئة. لا تأخذ عقدًا أو قانونًا أو نصًا طبيًا كما هو. اقرأ الرمز.", "Claude — это программа Anthropic для разговора. Её ищут рядом с ChatGPT и Gemini. Работа у всех трёх одна: ты пишешь, модель отвечает.\n\nЕё выбирают, чтобы длинный текст прочитали в одном месте и чтобы объяснили код. Для короткого вопроса тоже годится. Разница в компании за именем и в модели, которая открыта на этой неделе.\n\nАккаунт отдельный. Вход в ChatGPT или Google не открывает Claude. Есть бесплатная сторона и платная. Когда лимит полон, ответ останавливается или становится короче.\n\nЭта тоже ошибается. Длинный ответ может звучать верно, а в середине один факт будет неверным. Договор, закон и медицинский текст не принимай как есть. Читай код."), {
			az: [
				"Üç addan birini seçmək üçün əvvəl birini öyrəş. Hamısını bir gündə qarışdırma.",
				"Uzun mətni hissə-hissə ver. Bir dəfəyə yapışdırılan çox böyük mətn kəsilə bilər.",
				"«Üç cümlə» və ya «bir siyahı» desən, cavab o ölçüdə gəlir.",
				"Kod üçün faylın adını və nəyin sınmadığını yaz. Tək «düzəlt» azdır.",
				"Şirkət sənədlərini və müştəri adlarını yapışdırma.",
				"Cavabın altını yoxlamaq sənin işindir. Model öz səhvini həmişə demir."
			],
			en: [
				"To pick one of the three names, get used to one first. Do not mix all of them on the same day.",
				"Give a long text in parts. A very large paste in one go can be cut off.",
				"If you say \"three sentences\" or \"one list\", the answer comes in that size.",
				"For code, write the file name and what failed. A bare \"fix it\" is too little.",
				"Do not paste company documents or customer names.",
				"Checking the bottom of the answer is your job. The model does not always say its own mistake."
			],
			tr: [
				"Üç addan birini seçmek için önce birine alış. Hepsini bir günde karıştırma.",
				"Uzun metni parça parça ver. Bir kerede yapıştırılan çok büyük metin kesilebilir.",
				"«Üç cümle» ya da «bir liste» dersen cevap o ölçüde gelir.",
				"Kod için dosyanın adını ve neyin bozulduğunu yaz. Tek «düzelt» azdır.",
				"Şirket belgelerini ve müşteri adlarını yapıştırma.",
				"Cevabın altını kontrol etmek senin işindir. Model kendi hatasını her zaman söylemez."
			],
			ar: [
				"لكي تختار واحدًا من الأسماء الثلاثة تعوّد على واحد أولًا. لا تخلطها كلها في يوم واحد.",
				"أعطِ النص الطويل أجزاء. النص الكبير جدًا الذي يُلصق دفعة واحدة قد يُقطع.",
				"إذا قلت «ثلاث جمل» أو «قائمة واحدة» جاء الجواب بذلك القياس.",
				"للرمز اكتب اسم الملف وما الذي فشل. «أصلح» وحدها قليلة.",
				"لا تلصق وثائق الشركة ولا أسماء الزبائن.",
				"فحص أسفل الجواب عملك. النموذج لا يقول خطأه دائمًا."
			],
			ru: [
				"Чтобы выбрать одно из трёх имён, сначала привыкни к одному. Не мешай все три в один день.",
				"Длинный текст давай частями. Очень большая вставка за один раз может обрезаться.",
				"Если скажешь «три предложения» или «один список», ответ придёт в этом размере.",
				"Для кода напиши имя файла и что сломалось. Одного «исправь» мало.",
				"Не вставляй документы компании и имена клиентов.",
				"Проверить низ ответа — твоя работа. Модель не всегда говорит о своей ошибке."
			]
		})
	},
	{
		slug: "prompt-nedir",
		piece: piece(L("Prompt nədir?", "What is a prompt?", "Prompt nedir?", "ما هو prompt؟", "Что такое prompt?"), L("Prompt modelə göndərdiyin yazıdır. Sual da odu, tapşırıq da, yapışdırdığın kod da. Model sənin baxdığın səhifəni görmür. Yalnız bu yazını görür.\n\nQısa və boş sətir qeyri-müəyyən cavab gətirir. «Bunu izah et» desən, model nəyi, kimə və nə qədər izah edəcəyini özü seçir. Sən deməsən, uzun və ya sənin dilində olmayan cavab gələ bilər.\n\nDüz prompt üç şeyi deyir: nə istəyirsən, hansı dildə, nə qədər. Əlində nümunə varsa, onu da yaz. Nümunəyə yaxın cavab gəlir.\n\nBir dəfəyə hər şeyi yığma. Əvvəl qısa cavab al, sonra «bunu qısalt» və ya «ikinci addımı aç» de. Söhbət belə düzəlir.", "A prompt is the text you send to a model. It can be a question, a task, or code you paste. The model does not see the page you are looking at. It sees only this text.\n\nA short, empty line brings a vague answer. If you say \"explain this\", the model chooses what to explain, to whom, and how long. If you do not say, the answer may be long or not in your language.\n\nA straight prompt says three things: what you want, in which language, and how long. If you have an example, write that too. The answer comes closer to the example.\n\nDo not pile everything into one go. Get a short answer first, then say \"make this shorter\" or \"open the second step\". A chat is built that way.", "Prompt, modele gönderdiğin yazıdır. Soru da odur, görev de, yapıştırdığın kod da. Model baktığın sayfayı görmez. Yalnız bu yazıyı görür.\n\nKısa ve boş satır belirsiz cevap getirir. «Bunu açıkla» dersen model neyi, kime ve ne kadar açıklayacağını kendi seçer. Sen söylemezsen cevap uzun ya da senin dilinde olmayabilir.\n\nDüz prompt üç şeyi söyler: ne istiyorsun, hangi dilde, ne kadar. Elinde örnek varsa onu da yaz. Cevap örneğe yakın gelir.\n\nBir kerede her şeyi yığma. Önce kısa cevap al, sonra «bunu kısalt» ya da «ikinci adımı aç» de. Sohbet böyle kurulur.", "Prompt هو النص الذي ترسله إلى النموذج. قد يكون سؤالًا أو مهمة أو رمزًا تلصقه. النموذج لا يرى الصفحة التي تنظر إليها. يرى هذا النص فقط.\n\nالسطر القصير الفارغ يأتي بجواب غامض. إذا قلت «اشرح هذا» يختار النموذج ماذا يشرح ولمن وكم. إذا لم تقل قد يأتي الجواب طويلًا أو بغير لغتك.\n\nالـ prompt المستقيم يقول ثلاثة أشياء: ماذا تريد، وبأي لغة، وكم. إذا كان عندك مثال فاكتبه أيضًا. يقترب الجواب من المثال.\n\nلا تكدّس كل شيء دفعة واحدة. خذ جوابًا قصيرًا أولًا، ثم قل «قصّر هذا» أو «افتح الخطوة الثانية». هكذا تُبنى المحادثة.", "Prompt — это текст, который ты отправляешь модели. Это и вопрос, и задание, и код, который ты вставил. Модель не видит страницу, на которую ты смотришь. Она видит только этот текст.\n\nКороткая пустая строка приносит расплывчатый ответ. Если сказать «объясни это», модель сама выберет, что объяснять, кому и как долго. Если не скажешь, ответ может быть длинным или не на твоём языке.\n\nПрямой prompt говорит три вещи: чего ты хочешь, на каком языке и какой длины. Если есть пример, напиши и его. Ответ придёт ближе к примеру.\n\nНе складывай всё за один раз. Сначала получи короткий ответ, потом скажи «сделай короче» или «открой второй шаг». Разговор строится так."), {
			az: [
				"«Bu Python kodunu üç cümlə ilə izah et» — «bunu izah et»dən düz işləyir.",
				"Cavabın içində nə olmasın, onu da yaz. Məsələn: giriş sözü yazma.",
				"Kod səhvini göstər: səhv mətni, gözlədiyin nəticə, olan nəticə.",
				"Şifrəni, açarı və başqasının şəxsi mətnini qoyma.",
				"Birinci cavab səhvdirsə, hamısını silib yenidən başlama. Səhv yeri göstər.",
				"Eyni promptu başqa modelə versən, cavab eyni olmaya bilər. Yoxlama yenə səndədir."
			],
			en: [
				"\"Explain this Python code in three sentences\" works better than \"explain this\".",
				"Also write what should not be in the answer. For example: do not write an introduction.",
				"Show a code mistake as the error text, the result you expected, and the result you got.",
				"Do not put in a password, a key, or someone else's private text.",
				"If the first answer is wrong, do not delete everything and start over. Point at the wrong place.",
				"If you give the same prompt to another model, the answer may not be the same. The check is still yours."
			],
			tr: [
				"«Bu Python kodunu üç cümleyle açıkla», «bunu açıkla»dan düzgün çalışır.",
				"Cevabın içinde ne olmasın, onu da yaz. Örneğin: giriş yazma.",
				"Kod hatasını göster: hata metni, beklediğin sonuç, olan sonuç.",
				"Şifreyi, anahtarı ve başkasının özel metnini koyma.",
				"İlk cevap yanlışsa her şeyi silip yeniden başlama. Yanlış yeri göster.",
				"Aynı promptu başka modele verirsen cevap aynı olmayabilir. Kontrol yine sendedir."
			],
			ar: [
				"«اشرح رمز Python هذا في ثلاث جمل» يعمل أفضل من «اشرح هذا».",
				"اكتب أيضًا ما لا ينبغي أن يكون في الجواب. مثلًا: لا تكتب مقدمة.",
				"أظهر خطأ الرمز: نص الخطأ، والنتيجة التي توقعتها، والنتيجة التي حصلت عليها.",
				"لا تضع كلمة السر ولا المفتاح ولا نصًا خاصًا لغيرك.",
				"إذا كان الجواب الأول خطأ فلا تحذف كل شيء وتبدأ من جديد. أشر إلى مكان الخطأ.",
				"إذا أعطيت الـ prompt نفسه لنموذج آخر فقد لا يكون الجواب نفسه. الفحص ما زال عليك."
			],
			ru: [
				"«Объясни этот код Python тремя предложениями» работает точнее, чем «объясни это».",
				"Напиши и чего в ответе быть не должно. Например: не пиши вступление.",
				"Ошибку кода покажи так: текст ошибки, результат, которого ждал, и результат, который вышел.",
				"Не клади пароль, ключ и чужой личный текст.",
				"Если первый ответ неверный, не стирай всё и не начинай заново. Покажи место ошибки.",
				"Если тот же prompt дать другой модели, ответ может быть другим. Проверка всё равно на тебе."
			]
		}, L("Model sənin ekranını görmür. Görməsini istəyirsənsə, mətnin özünü yaz.", "The model does not see your screen. If you want it to see the text, write the text itself.", "Model ekranını görmez. Görmesini istiyorsan metnin kendisini yaz.", "النموذج لا يرى شاشتك. إذا أردت أن يرى النص فاكتب النص نفسه.", "Модель не видит твой экран. Если хочешь, чтобы она увидела текст, напиши сам текст."))
	},
	{
		slug: "ai-ile-tetbiq",
		piece: piece(L("Süni intellektlə tətbiq hazırlamaq", "Making an app with AI", "Yapay zeka ile uygulama yapmak", "صنع تطبيق بالذكاء الاصطناعي", "Сделать приложение с ИИ"), L("2026-da bir cümlə Android tətbiqinin başlanğıcı ola bilir. Alətə nə istədiyini yazırsan, o sənə layihə qaytarır. Bu, mağazaya hazır tətbiq deyil. Bu, başlanğıcdır.\n\nİçində yenə kod durur. Kod Kotlin ola bilər. Səhifəni APK-ya yığmaq da ola bilər. İkisi eyni şey deyil. Səhifəni paketləmək dil öyrənmək demək deyil. Öz ekranını və düyməni yazanda Java və ya Kotlin gəlir.\n\nModel düyməni yarımçıq, icazəni artıq və ya mətni sənin dilində olmayan qoya bilər. Real telefonda açmadan «hazırdır» demə. Boş ekran, sınan düymə və əskik icazə burada görünür.\n\nMağazaya çıxarmaq ayrı işdir. Ad, ikon, paket adı və imza səndə qalır. Paket adı sonradan dəyişmir. İmza itəndə yeniləmə də itir. Süni intellekt bu qaydaları ləğv etmir.", "In 2026 one sentence can start an Android app. You write what you want, and the tool returns a project. That is not an app ready for the store. It is a start.\n\nThere is still code inside. The code may be Kotlin. It may also be a page packed into an APK. Those are not the same thing. Packing a page is not learning a language. When you write your own screen and button, Java or Kotlin comes in.\n\nA model can leave a button half done, a permission too wide, or text that is not in your language. Do not say it is ready before you open it on a real phone. An empty screen, a broken button, and a missing permission show up there.\n\nPutting it in the store is a separate job. The name, the icon, the package name, and the signature stay with you. The package name does not change later. If the signature is lost, the update is lost too. AI does not cancel these rules.", "2026'da bir cümle bir Android uygulamasının başlangıcı olabilir. Araca ne istediğini yazarsın, o sana bir proje verir. Bu, mağazaya hazır uygulama değildir. Bu, başlangıçtır.\n\nİçinde yine kod durur. Kod Kotlin olabilir. Sayfayı APK'ya paketlemek de olabilir. İkisi aynı şey değildir. Sayfayı paketlemek dil öğrenmek demek değildir. Kendi ekranını ve düğmeni yazınca Java veya Kotlin gelir.\n\nModel düğmeyi yarım, izni fazla ya da metni senin dilinde olmayan koyabilir. Gerçek telefonda açmadan «hazır» deme. Boş ekran, kırık düğme ve eksik izin burada görünür.\n\nMağazaya çıkarmak ayrı iştir. Ad, simge, paket adı ve imza sende kalır. Paket adı sonradan değişmez. İmza kaybolunca güncelleme de kaybolur. Yapay zeka bu kuralları kaldırmaz.", "في 2026 يمكن لجملة واحدة أن تبدأ تطبيق Android. تكتب للأداة ماذا تريد فترد عليك بمشروع. هذا ليس تطبيقًا جاهزًا للمتجر. هذه بداية.\n\nفي الداخل ما زال هناك رمز. قد يكون الرمز Kotlin. وقد يكون صفحة تُجمع في APK. ليسا الشيء نفسه. جمع الصفحة ليس تعلم لغة. حين تكتب شاشتك وزرّك يأتي Java أو Kotlin.\n\nقد يترك النموذج الزر نصف تام، أو الإذن أوسع من اللازم، أو النص بغير لغتك. لا تقل إنه جاهز قبل أن تفتحه على هاتف حقيقي. الشاشة الفارغة والزر المكسور والإذن الناقص تظهر هناك.\n\nإخراجه إلى المتجر عمل منفصل. الاسم والأيقونة واسم الحزمة والتوقيع تبقى عندك. اسم الحزمة لا يتغير بعد ذلك. إذا ضاع التوقيع ضاع التحديث أيضًا. الذكاء الاصطناعي لا يلغي هذه القواعد.", "В 2026 одно предложение может начать приложение Android. Пишешь инструменту, чего хочешь, и он возвращает проект. Это не приложение, готовое для магазина. Это начало.\n\nВнутри всё ещё код. Код может быть на Kotlin. Это может быть и страница, собранная в APK. Это не одно и то же. Собрать страницу — не выучить язык. Когда пишешь свой экран и кнопку, приходят Java или Kotlin.\n\nМодель может оставить кнопку недоделанной, разрешение слишком широким или текст не на твоём языке. Не говори «готово», пока не откроешь на настоящем телефоне. Пустой экран, сломанная кнопка и недостающее разрешение видны там.\n\nВыход в магазин — отдельная работа. Имя, значок, имя пакета и подпись остаются на тебе. Имя пакета потом не меняется. Если подпись потеряна, обновление тоже потеряно. ИИ эти правила не отменяет."), {
			az: [
				"Əvvəl bir ekran istə. «Hər şeyi olan tətbiq» boş və qarışıq layihə gətirir.",
				"Layihəni aç, düyməni bas, geri qayıt. Bunu telefonda et, yalnız şəkildə yox.",
				"İcazə siyahısını oxu. Lazım olmayan kameranı və kontaktı sil.",
				"Paket adı `com.ad.soz` kimi olsun. Hissə hərf ilə başlasın.",
				"İmzanı saxla. Başqa kompüterdə yeniləmə üçün həmin fayl lazımdır.",
				"Quruluş dayananda səbəb çox vaxt eynidir: parse error, imza və ya paket adı.",
				"Mağaza tətbiqi rədd edə bilər. Yarım ekran və başqasının adı buna kifayət edir."
			],
			en: [
				"Ask for one screen first. \"An app that has everything\" brings an empty, mixed project.",
				"Open the project, press the button, go back. Do this on a phone, not only in a picture.",
				"Read the permission list. Remove the camera and the contacts if you do not need them.",
				"Let the package name look like `com.ad.soz`. Each part should start with a letter.",
				"Keep the signature. The same file is needed for an update on another computer.",
				"When installation stops, the cause is often the same: parse error, signature, or package name.",
				"The store can reject the app. A half screen and someone else's name are enough for that."
			],
			tr: [
				"Önce bir ekran iste. «Her şeyi olan uygulama» boş ve karışık proje getirir.",
				"Projeyi aç, düğmeye bas, geri dön. Bunu telefonda yap, yalnız resimde değil.",
				"İzin listesini oku. Gerekmeyen kamerayı ve kişileri sil.",
				"Paket adı `com.ad.soz` gibi olsun. Parça harfle başlasın.",
				"İmzayı sakla. Başka bilgisayarda güncelleme için aynı dosya gerekir.",
				"Kurulum durunca sebep çoğu zaman aynıdır: parse error, imza ya da paket adı.",
				"Mağaza uygulamayı reddedebilir. Yarım ekran ve başkasının adı buna yeter."
			],
			ar: [
				"اطلب شاشة واحدة أولًا. «تطبيق فيه كل شيء» يأتي بمشروع فارغ ومختلط.",
				"افتح المشروع واضغط الزر وارجع. افعل هذا على الهاتف، لا في الصورة فقط.",
				"اقرأ قائمة الأذونات. احذف الكاميرا وجهات الاتصال إذا لم تحتجها.",
				"ليكن اسم الحزمة مثل `com.ad.soz`. كل جزء يبدأ بحرف.",
				"احفظ التوقيع. الملف نفسه يلزم للتحديث على حاسوب آخر.",
				"حين يتوقف التثبيت يكون السبب غالبًا نفسه: parse error أو التوقيع أو اسم الحزمة.",
				"قد يرفض المتجر التطبيق. شاشة نصف تامة واسم غيرك يكفيان لذلك."
			],
			ru: [
				"Сначала попроси один экран. «Приложение, в котором всё» приносит пустой и смешанный проект.",
				"Открой проект, нажми кнопку, вернись назад. Сделай это на телефоне, а не только на картинке.",
				"Прочитай список разрешений. Убери камеру и контакты, если они не нужны.",
				"Пусть имя пакета будет как `com.ad.soz`. Каждая часть начинается с буквы.",
				"Храни подпись. Тот же файл нужен для обновления на другом компьютере.",
				"Когда установка останавливается, причина часто одна: parse error, подпись или имя пакета.",
				"Магазин может отклонить приложение. Недоделанного экрана и чужого имени для этого хватает."
			]
		}, L("APK xətaları bu yolda da eynidir: qurulmur, parse error, imza və paket adı.", "The APK errors are the same on this road: it will not install, parse error, signature, and package name.", "APK hataları bu yolda da aynıdır: kurulmuyor, parse error, imza ve paket adı.", "أخطاء APK هي نفسها في هذا الطريق: لا يُثبَّت، وparse error، والتوقيع، واسم الحزمة.", "Ошибки APK на этой дороге те же: не устанавливается, parse error, подпись и имя пакета."))
	},
	{
		slug: "gpt-6",
		piece: piece(L("GPT-6 cavabın içinə qrafik qoyur", "GPT-6 puts a chart inside the answer", "GPT-6 cevabın içine grafik koyar", "GPT-6 يضع رسمًا داخل الجواب", "GPT-6 кладёт график внутрь ответа"), L("7 oktyabr 2026-da OpenAI GPT-6-nı ChatGPT-nin söhbət bölməsinə buraxmağa başlayıb. Yeni hissənin adı Intelligent UI-dir. Cavab təkcə abzas olmaya bilər. İçində qrafik, basılan düymə, forma və kiçik alət, məsələn kalkulyator, dayana bilər.\n\nModel sualın formasına baxır. Müqayisə yan-yana düşə bilər. İzah şəkil ilə gedə bilər. Düz mətn daha yaxşıdırsa, mətn qalır.\n\nÖdənişli söhbət planlarında model GPT-6 Sol-dur və 7 oktyabrdan açılır. Pulsuz və Go planında model GPT-6 Luna-dır və 8 oktyabrdan açılır. Hər hesabda eyni gün görünmür.\n\nQrafikin içindəki rəqəm mənbə deyil. Düyməni basmaq hesabı yoxlamır. Vacib rəqəmi başqa yerdən yoxla.", "On 7 October 2026 OpenAI started releasing GPT-6 into ChatGPT's chat tab. The new part is called Intelligent UI. An answer may not be only a paragraph. A chart, a button you can press, a form, and a small tool, such as a calculator, can stand inside it.\n\nThe model looks at the shape of the question. A comparison can sit side by side. An explanation can go with a picture. If plain text is better, the text stays.\n\nOn the paid chat plans the model is GPT-6 Sol, and it opens from 7 October. On the free plan and Go the model is GPT-6 Luna, and it opens from 8 October. It does not show up on every account on the same day.\n\nA number inside the chart is not a source. Pressing the button does not check the account. Check an important number somewhere else.", "7 Ekim 2026'da OpenAI, GPT-6'yı ChatGPT'nin sohbet bölümüne bırakmaya başladı. Yeni parçanın adı Intelligent UI'dir. Cevap yalnızca paragraf olmayabilir. İçinde grafik, basılan düğme, form ve küçük bir araç, örneğin hesap makinesi, durabilir.\n\nModel sorunun biçimine bakar. Karşılaştırma yan yana düşebilir. Açıklama resimle gidebilir. Düz metin daha iyiyse metin kalır.\n\nÜcretli sohbet planlarında model GPT-6 Sol'dur ve 7 Ekim'den açılır. Ücretsiz ve Go planında model GPT-6 Luna'dır ve 8 Ekim'den açılır. Her hesapta aynı gün görünmez.\n\nGrafiğin içindeki sayı kaynak değildir. Düğmeye basmak hesabı yoklamaz. Önemli sayıyı başka yerden kontrol et.", "في 7 أكتوبر 2026 بدأت OpenAI إطلاق GPT-6 في قسم المحادثة في ChatGPT. اسم الجزء الجديد Intelligent UI. قد لا يكون الجواب فقرة فقط. قد يقف داخله رسم وزر يُضغط ونموذج وأداة صغيرة، مثل آلة حاسبة.\n\nينظر النموذج إلى شكل السؤال. قد تقع المقارنة جنبًا إلى جنب. وقد يمضي الشرح مع صورة. إذا كان النص البسيط أفضل بقي النص.\n\nفي خطط المحادثة المدفوعة النموذج هو GPT-6 Sol ويُفتح من 7 أكتوبر. في الخطة المجانية وGo النموذج هو GPT-6 Luna ويُفتح من 8 أكتوبر. لا يظهر في كل حساب في اليوم نفسه.\n\nالرقم داخل الرسم ليس مصدرًا. ضغط الزر لا يفحص الحساب. افحص الرقم المهم من مكان آخر.", "7 октября 2026 OpenAI начала выпускать GPT-6 во вкладку разговора ChatGPT. Новая часть называется Intelligent UI. Ответ может быть не только абзацем. Внутри могут стоять график, кнопка, форма и маленький инструмент, например калькулятор.\n\nМодель смотрит на форму вопроса. Сравнение может лечь рядом. Объяснение может идти с картинкой. Если лучше простой текст, текст остаётся.\n\nНа платных планах разговора модель — GPT-6 Sol, она открывается с 7 октября. На бесплатном плане и Go модель — GPT-6 Luna, она открывается с 8 октября. Не на каждом аккаунте это видно в один день.\n\nЧисло внутри графика — не источник. Нажатие кнопки не проверяет счёт. Важное число проверь в другом месте."), {
			az: [
				"Söhbət bölməsindədir. Başqa bölmədə köhnə model qala bilər.",
				"Pulsuz planda Sol axtarma. Orada Luna-dır.",
				"Qrafik çıxmırsa, hesabına hələ düşməyib. Eyni sualı sabah yenidən ver.",
				"Kalkulyatorun nəticəsini özün də hesabla. Bir düymə rəqəmi düz etmir.",
				"Şifrəni və kartı formanın içinə yazma. Forma da söhbətin hissəsidir.",
				"Nibras AI bu deyil. Bu saytın söhbəti ayrıdır."
			],
			en: [
				"It is in the chat tab. Another tab can still hold the old model.",
				"Do not look for Sol on the free plan. There it is Luna.",
				"If no chart comes out, it has not reached your account yet. Ask the same question again tomorrow.",
				"Calculate the calculator's result yourself too. A button does not make a number right.",
				"Do not type a password or a card into the form. The form is part of the chat too.",
				"Nibras AI is not this. This site's chat is separate."
			],
			tr: [
				"Sohbet bölümündedir. Başka bölümde eski model kalabilir.",
				"Ücretsiz planda Sol arama. Orada Luna'dır.",
				"Grafik çıkmıyorsa hesabına daha düşmemiştir. Aynı soruyu yarın yeniden ver.",
				"Hesap makinesinin sonucunu kendin de hesapla. Bir düğme sayıyı doğru yapmaz.",
				"Şifreyi ve kartı formanın içine yazma. Forma da sohbetin parçasıdır.",
				"Nibras AI bu değildir. Bu sitenin sohbeti ayrıdır."
			],
			ar: [
				"هو في قسم المحادثة. قد يبقى النموذج القديم في قسم آخر.",
				"لا تبحث عن Sol في الخطة المجانية. هناك Luna.",
				"إذا لم يخرج رسم فلم يصل إلى حسابك بعد. أعطِ السؤال نفسه غدًا من جديد.",
				"احسب نتيجة الآلة الحاسبة بنفسك أيضًا. الزر لا يجعل الرقم صحيحًا.",
				"لا تكتب كلمة السر ولا البطاقة داخل النموذج. النموذج جزء من المحادثة أيضًا.",
				"Nibras AI ليس هذا. محادثة هذا الموقع منفصلة."
			],
			ru: [
				"Это во вкладке разговора. В другой вкладке может остаться старая модель.",
				"На бесплатном плане не ищи Sol. Там Luna.",
				"Если график не вышел, до твоей учётной записи ещё не дошло. Задай тот же вопрос завтра.",
				"Результат калькулятора посчитай и сам. Кнопка не делает число верным.",
				"Не пиши пароль и карту внутрь формы. Форма тоже часть разговора.",
				"Nibras AI — это не то. Разговор этого сайта отдельный."
			]
		})
	},
	{
		slug: "gemini-qrafik",
		piece: piece(L("Gemini cavabın içinə qrafik qoyur", "Gemini puts a chart inside the answer", "Gemini cevabın içine grafik koyar", "Gemini يضع رسمًا داخل الجواب", "Gemini кладёт график внутрь ответа"), L("Gemini sualı təkcə mətnlə qaytarmaya bilər. Söhbətin içində qrafik, sürgü və işlək model dayana bilər. Molekul fırlatmaq və ya bir hərəkəti sürgü ilə dəyişmək bu qəbildəndir. Google bunu Gemini tətbiqinin içinə qoyub.\n\n«İzah et» əvəzinə «göstər» demək vizualı çağırır. Model seçimi varsa, vizual çox vaxt Pro tərəfdədir. Düymənin adı dəyişə bilər.\n\n13 oktyabr 2026-da Gemini 4 Argon AI Pro və Ultra üçün açılıb. O, daha düz cavab və tapşırıq üçündür. Qrafikin adı Argon deyil. Qrafik söhbətin içindəki vizualdır.\n\n19 oktyabr 2026-dan söhbətdə qurulan interaktiv tətbiqi Google Sites-də qaralama səhifəyə köçürmək olur. Bu, söhbətin özü deyil. Ayrı səhifədir.\n\nSürgünün göstərdiyi rəqəm ölçü deyil. Öz rəqəmini yoxla. Bəzi təhsil hesablarında vizual açılmaya bilər.", "Gemini may not return a question as text only. A chart, a slider, and a working model can stand inside the chat. Turning a molecule, or changing a motion with a slider, is that kind of answer. Google put this inside the Gemini app.\n\nSaying \"show\" instead of \"explain\" calls the visual. If there is a model choice, the visual is often on the Pro side. The name on the button can change.\n\nOn 13 October 2026 Gemini 4 Argon opened for AI Pro and Ultra. That one is for a more direct answer and for tasks. The chart is not named Argon. The chart is the visual inside the chat.\n\nFrom 19 October 2026 an interactive app built in the chat can be moved to a draft page on Google Sites. That is not the chat itself. It is a separate page.\n\nThe number a slider shows is not a measurement. Check your own number. On some education accounts the visual may not open.", "Gemini bir soruyu yalnızca metinle döndürmeyebilir. Sohbetin içinde grafik, sürgü ve çalışan bir model durabilir. Molekül döndürmek ya da bir hareketi sürgüyle değiştirmek bu cinstendir. Google bunu Gemini uygulamasının içine koymuştur.\n\n«Açıkla» yerine «göster» demek görseli çağırır. Model seçimi varsa görsel çoğu zaman Pro tarafındadır. Düğmenin adı değişebilir.\n\n13 Ekim 2026'da Gemini 4 Argon, AI Pro ve Ultra için açıldı. O, daha düz cevap ve görev içindir. Grafiğin adı Argon değildir. Grafik sohbetin içindeki görseldir.\n\n19 Ekim 2026'dan sohbette kurulan interaktif uygulamayı Google Sites'te bir taslak sayfaya taşımak olur. Bu, sohbetin kendisi değildir. Ayrı sayfadır.\n\nSürgünün gösterdiği sayı ölçü değildir. Kendi sayını kontrol et. Bazı eğitim hesaplarında görsel açılmayabilir.", "قد لا يرد Gemini على السؤال بنص فقط. قد يقف داخل المحادثة رسم ومنزلق ونموذج يعمل. تدوير جزيء أو تغيير حركة بالمنزلق من هذا النوع. وضعت Google هذا داخل تطبيق Gemini.\n\nقول «أظهر» بدل «اشرح» يستدعي الصورة. إذا كان هناك اختيار نموذج فالصورة غالبًا في جانب Pro. اسم الزر قد يتغير.\n\nفي 13 أكتوبر 2026 فُتح Gemini 4 Argon لـ AI Pro وUltra. ذلك للجواب المباشر وللمهام. الرسم لا اسمه Argon. الرسم هو الصورة داخل المحادثة.\n\nمن 19 أكتوبر 2026 يمكن نقل تطبيق تفاعلي بُني في المحادثة إلى مسودة صفحة في Google Sites. هذه ليست المحادثة نفسها. إنها صفحة منفصلة.\n\nالرقم الذي يُظهره المنزلق ليس قياسًا. افحص رقمك. في بعض حسابات التعليم قد لا تُفتح الصورة.", "Gemini может вернуть вопрос не только текстом. Внутри разговора могут стоять график, ползунок и работающая модель. Повернуть молекулу или изменить движение ползунком — ответ такого рода. Google положила это внутрь приложения Gemini.\n\nСказать «покажи» вместо «объясни» вызывает картинку. Если есть выбор модели, картинка чаще на стороне Pro. Надпись на кнопке может смениться.\n\n13 октября 2026 открылся Gemini 4 Argon для AI Pro и Ultra. Он для более прямого ответа и для задач. График не называется Argon. График — это картинка внутри разговора.\n\nС 19 октября 2026 интерактивное приложение, собранное в разговоре, можно перенести в черновик страницы на Google Sites. Это не сам разговор. Это отдельная страница.\n\nЧисло, которое показывает ползунок, — не измерение. Проверь своё число. На некоторых учебных аккаунтах картинка может не открыться."), {
			az: [
				"«Bunu qrafiklə göstər» yaz. Tək «nədir» çox vaxt mətn qaytarır.",
				"Sürgünü tərpətmək yeni ölçü götürmür. Sənin yazdığın başlanğıc rəqəmlə oynayır.",
				"Argon düyməsini qrafik düyməsi sayma. O, başqa modeldir və hər hesabda yoxdur.",
				"Sites-ə köçürmə söhbəti silmir. Qaralama səhifə ayrıca durur.",
				"ChatGPT hesabı Gemini-ni açmır. Google hesabı lazımdır.",
				"Şəklin altındakı izahı da oxu. Şəkil düz, cümlə səhv ola bilər."
			],
			en: [
				"Write \"show this as a chart\". A bare \"what is it\" often returns text.",
				"Moving the slider does not take a new measurement. It plays with the starting number you wrote.",
				"Do not treat the Argon button as the chart button. That is another model, and it is not on every account.",
				"Moving it to Sites does not delete the chat. The draft page stands apart.",
				"A ChatGPT account does not open Gemini. A Google account is needed.",
				"Read the line under the picture too. The picture can be right and the sentence wrong."
			],
			tr: [
				"«Bunu grafikle göster» yaz. Tek «nedir» çoğu zaman metin döndürür.",
				"Sürgüyü oynatmak yeni ölçü almaz. Senin yazdığın başlangıç sayısıyla oynar.",
				"Argon düğmesini grafik düğmesi sayma. O, başka modeldir ve her hesapta yoktur.",
				"Sites'e taşımak sohbeti silmez. Taslak sayfa ayrı durur.",
				"ChatGPT hesabı Gemini'yi açmaz. Google hesabı gerekir.",
				"Resmin altındaki açıklamayı da oku. Resim doğru, cümle yanlış olabilir."
			],
			ar: [
				"اكتب «أظهر هذا برسم». «ما هو» وحدها غالبًا ترد بنص.",
				"تحريك المنزلق لا يأخذ قياسًا جديدًا. يلعب بالرقم الأول الذي كتبته.",
				"لا تعدّ زر Argon زر الرسم. ذلك نموذج آخر وليس في كل حساب.",
				"النقل إلى Sites لا يحذف المحادثة. مسودة الصفحة تقف وحدها.",
				"حساب ChatGPT لا يفتح Gemini. يلزم حساب Google.",
				"اقرأ السطر تحت الصورة أيضًا. قد تصح الصورة وتخطئ الجملة."
			],
			ru: [
				"Напиши «покажи это графиком». Голое «что это» часто возвращает текст.",
				"Двигать ползунок — не снять новое измерение. Он играет с начальным числом, которое ты написал.",
				"Не считай кнопку Argon кнопкой графика. Это другая модель, и её нет на каждом аккаунте.",
				"Перенос на Sites не стирает разговор. Черновик страницы стоит отдельно.",
				"Аккаунт ChatGPT не открывает Gemini. Нужен аккаунт Google.",
				"Прочитай и строку под картинкой. Картинка может быть верной, а предложение нет."
			]
		})
	},
	{
		slug: "claude-artifact",
		piece: piece(L("Claude qrafiki söhbətin yanına qoyur", "Claude puts the chart beside the chat", "Claude grafiği sohbetin yanına koyar", "Claude يضع الرسم بجانب المحادثة", "Claude кладёт график рядом с разговором"), L("Claude böyük cavabı söhbətin içinə tökməyə bilər. Onu yan paneldə açır. Anthropic buna artifact deyir. Panelin içində sənəd, sxem, lövhə və ya kiçik interaktiv alət dura bilər.\n\nBu, ChatGPT-nin Intelligent UI-i deyil. Orada qrafik cavabın içindədir. Burada qrafik mətnin yanındadır. Sən paneli redaktə edə və sonra qayıda bilərsən. Kim görə bilər, plandan asılıdır.\n\n16 sentyabr 2026-dan əvvəl söhbətdə düzəldilmiş artifact köhnə sayılır. Onlar açılır. Həmin köhnə növdən yenisini düzəltmək olmur. Saytda və masaüstü proqramda yeni artifact yenə düzəlir.\n\nClaude Code seansı ayrıca canlı səhifəyə çıxara bilər. Bu, söhbət qabarcığı deyil. Ünvanı olan səhifədir.\n\nPaneldəki alət də yanılır. Cəmi və tarixi özün yoxla.", "Claude may not pour a large answer into the chat. It opens it in a side panel. Anthropic calls that an artifact. A document, a diagram, a board, or a small interactive tool can stand inside the panel.\n\nThis is not ChatGPT's Intelligent UI. There the chart is inside the answer. Here the chart is beside the text. You can edit the panel and come back later. Who can see it depends on the plan.\n\nAn artifact made in a chat before 16 September 2026 counts as old. Those still open. You cannot make a new one of that old kind. On the site and in the desktop app a new artifact is still made.\n\nA Claude Code session can also publish a live page. That is not a chat bubble. It is a page with an address.\n\nThe tool in the panel is wrong too. Check a total and a date yourself.", "Claude büyük bir cevabı sohbetin içine dökmeyebilir. Onu yan panelde açar. Anthropic buna artifact der. Panelin içinde belge, şema, pano ya da küçük bir interaktif araç durabilir.\n\nBu, ChatGPT'nin Intelligent UI'i değildir. Orada grafik cevabın içindedir. Burada grafik metnin yanındadır. Paneli düzenleyebilir ve sonra dönebilirsin. Kim görebilir, plana bağlıdır.\n\n16 Eylül 2026'dan önce sohbette yapılmış artifact eski sayılır. Onlar açılır. O eski türden yenisini yapmak olmaz. Sitede ve masaüstü programda yeni artifact yine yapılır.\n\nClaude Code oturumu ayrıca canlı bir sayfa çıkarabilir. Bu, sohbet balonu değildir. Adresi olan bir sayfadır.\n\nPaneldeki araç da yanılır. Toplamı ve tarihi kendin kontrol et.", "قد لا يصب Claude الجواب الكبير داخل المحادثة. يفتحه في لوحة جانبية. تسمي Anthropic هذا artifact. قد يقف داخل اللوحة مستند أو مخطط أو لوحة أو أداة تفاعلية صغيرة.\n\nهذا ليس Intelligent UI في ChatGPT. هناك الرسم داخل الجواب. هنا الرسم بجانب النص. تستطيع تعديل اللوحة والعودة لاحقًا. من يراها يعتمد على الخطة.\n\nالـ artifact الذي صُنع في محادثة قبل 16 سبتمبر 2026 يُعد قديمًا. تلك تُفتح. لا يمكن صنع جديد من ذلك النوع القديم. على الموقع وفي برنامج سطح المكتب ما زال يُصنع artifact جديد.\n\nجلسة Claude Code تستطيع أيضًا إخراج صفحة حية. هذه ليست فقاعة محادثة. إنها صفحة لها عنوان.\n\nالأداة في اللوحة تخطئ أيضًا. افحص المجموع والتاريخ بنفسك.", "Claude может не вылить большой ответ в разговор. Он открывает его в боковой панели. Anthropic называет это artifact. В панели могут стоять документ, схема, доска или маленький интерактивный инструмент.\n\nЭто не Intelligent UI у ChatGPT. Там график внутри ответа. Здесь график рядом с текстом. Панель можно править и вернуться позже. Кто её видит, зависит от плана.\n\nArtifact, сделанный в разговоре до 16 сентября 2026, считается старым. Они открываются. Новый того старого вида сделать нельзя. На сайте и в программе для стола новый artifact всё ещё делается.\n\nСессия Claude Code может ещё выложить живую страницу. Это не пузырь разговора. Это страница с адресом.\n\nИнструмент в панели тоже ошибается. Сумму и дату проверь сам."), {
			az: [
				"«Bunu yan paneldə qrafik et» de. Tək «yaz» mətn qaytara bilər.",
				"Köhnə söhbətdəki panel açılırsa, onu yeni növdən sayma.",
				"Paylaşma düyməsi hər planda eyni deyil. Açılmırsa, plan buna icazə vermir.",
				"Claude Code səhifəsi söhbəti əvəz etmir. İkisinin ünvanı ayrıdır.",
				"ChatGPT və Google girişi Claude-u açmır.",
				"Paneldəki cəmi kalkulyatorla bir daha yoxla."
			],
			en: [
				"Say \"make this a chart in the side panel\". A bare \"write\" can return text.",
				"If a panel in an old chat opens, do not count it as the new kind.",
				"The share button is not the same on every plan. If it does not open, the plan does not allow it.",
				"A Claude Code page does not replace the chat. The two addresses are separate.",
				"A ChatGPT or Google sign-in does not open Claude.",
				"Check a total in the panel again with a calculator."
			],
			tr: [
				"«Bunu yan panelde grafik yap» de. Tek «yaz» metin döndürebilir.",
				"Eski sohbetteki panel açılırsa onu yeni türden sayma.",
				"Paylaşma düğmesi her planda aynı değildir. Açılmıyorsa plan buna izin vermez.",
				"Claude Code sayfası sohbetin yerine geçmez. İkisinin adresi ayrıdır.",
				"ChatGPT ve Google girişi Claude'u açmaz.",
				"Paneldeki toplamı hesap makinesiyle bir daha kontrol et."
			],
			ar: [
				"قل «اجعل هذا رسمًا في اللوحة الجانبية». «اكتب» وحدها قد ترد بنص.",
				"إذا فُتحت لوحة في محادثة قديمة فلا تعدّها من النوع الجديد.",
				"زر المشاركة ليس نفسه في كل خطة. إذا لم يُفتح فالخطة لا تسمح.",
				"صفحة Claude Code لا تحل محل المحادثة. العنوانان منفصلان.",
				"دخول ChatGPT أو Google لا يفتح Claude.",
				"افحص المجموع في اللوحة مرة أخرى بآلة حاسبة."
			],
			ru: [
				"Скажи «сделай это графиком в боковой панели». Голое «напиши» может вернуть текст.",
				"Если панель в старом разговоре открывается, не считай её новым видом.",
				"Кнопка «поделиться» не одна и та же на каждом плане. Если не открывается, план этого не разрешает.",
				"Страница Claude Code не заменяет разговор. Адреса разные.",
				"Вход через ChatGPT или Google не открывает Claude.",
				"Сумму в панели проверь ещё раз калькулятором."
			]
		})
	}
];
var HOWS = [
	{
		slug: "ilk-html",
		piece: piece(L("İlk HTML səhifə", "The first HTML page", "İlk HTML sayfası", "أول صفحة HTML", "Первая страница HTML"), L("İlk səhifə bir fayldır. Adı `index.html` olsun. Brauzer onu özü açır. Əvvəl çərçivə, kitabxana və sayt qurucusu lazım deyil.\n\nFaylın içində üç yer durur. `html` hamısını tutur. `head` səhifənin adını saxlayır. `body` adamın gördüyüdür. Görünən yazını `body` içinə qoy.\n\nFaylı saxla və üzərinə iki dəfə bas. Brauzer açılır. Yazı görünürsə, səhifə hazırdır. Rəng və düzülüş sonra gəlir. O, CSS-dir.", "The first page is one file. Name it `index.html`. The browser opens it by itself. You do not need a framework, a library, or a site builder first.\n\nThree places stand inside the file. `html` holds all of it. `head` keeps the name of the page. `body` is what the person sees. Put the visible text inside `body`.\n\nSave the file and press it twice. The browser opens. If the text shows, the page is ready. Color and layout come later. That is CSS.", "İlk sayfa bir dosyadır. Adı `index.html` olsun. Tarayıcı onu kendi açar. Önce çerçeve, kitaplık ve site kurucu gerekmez.\n\nDosyanın içinde üç yer durur. `html` hepsini tutar. `head` sayfanın adını saklar. `body` insanın gördüğüdür. Görünen yazıyı `body` içine koy.\n\nDosyayı kaydet ve üzerine iki kez bas. Tarayıcı açılır. Yazı görünüyorsa sayfa hazırdır. Renk ve diziliş sonra gelir. O, CSS'tir.", "الصفحة الأولى ملف واحد. سمّه `index.html`. المتصفح يفتحه بنفسه. لا تحتاج إطارًا ولا مكتبة ولا بانٍ مواقع أولًا.\n\nفي داخل الملف ثلاثة مواضع. `html` يمسك الكل. `head` يحفظ اسم الصفحة. `body` هو ما يراه الشخص. ضع النص الظاهر داخل `body`.\n\nاحفظ الملف واضغطه مرتين. يفتح المتصفح. إذا ظهر النص فالصفحة جاهزة. اللون والترتيب يأتيان بعد ذلك. ذلك CSS.", "Первая страница — это один файл. Назови его `index.html`. Браузер открывает его сам. Сначала не нужны каркас, библиотека и конструктор сайтов.\n\nВнутри файла три места. `html` держит всё. `head` хранит имя страницы. `body` — это то, что видит человек. Видимый текст клади внутрь `body`.\n\nСохрани файл и нажми на него дважды. Откроется браузер. Если текст виден, страница готова. Цвет и раскладка приходят потом. Это CSS."), {
			az: [
				"Faylı masaüstündə saxla ki, tapa biləsən.",
				"`<h1>Salam</h1>` başlıqdır. `<p>Bu ilk səhifədir.</p>` abzasdır.",
				"Faylın sonu `.html` olmalıdır. `.txt` brauzerdə kod kimi açılır.",
				"Şəkil eyni qovluqda durursa, `img` onun adını göstərir.",
				"Düymə qoymaq olar. İş görməsi üçün JavaScript lazımdır.",
				"Hazır şablonu kopyalama. Əvvəl bu üç sətri özün yaz."
			],
			en: [
				"Save the file on the desktop so you can find it.",
				"`<h1>Hello</h1>` is a heading. `<p>This is the first page.</p>` is a paragraph.",
				"The file must end in `.html`. A `.txt` file opens as code in the browser.",
				"If a picture sits in the same folder, `img` points at its name.",
				"You can put a button. It needs JavaScript before it does work.",
				"Do not copy a ready template. Write these three lines yourself first."
			],
			tr: [
				"Dosyayı masaüstüne kaydet ki bulabilesin.",
				"`<h1>Merhaba</h1>` başlıktır. `<p>Bu ilk sayfadır.</p>` paragraftır.",
				"Dosyanın sonu `.html` olmalıdır. `.txt` tarayıcıda kod gibi açılır.",
				"Resim aynı klasörde duruyorsa `img` onun adını gösterir.",
				"Düğme koymak olur. İş görmesi için JavaScript gerekir.",
				"Hazır şablonu kopyalama. Önce bu üç satırı kendin yaz."
			],
			ar: [
				"احفظ الملف على سطح المكتب كي تجده.",
				"`<h1>مرحبا</h1>` عنوان. `<p>هذه أول صفحة.</p>` فقرة.",
				"يجب أن ينتهي الملف بـ `.html`. ملف `.txt` يُفتح كرمز في المتصفح.",
				"إذا وقفت الصورة في المجلد نفسه فإن `img` يشير إلى اسمها.",
				"تستطيع وضع زر. يحتاج JavaScript قبل أن يعمل.",
				"لا تنسخ قالبًا جاهزًا. اكتب هذه الأسطر الثلاثة بنفسك أولًا."
			],
			ru: [
				"Сохрани файл на рабочем столе, чтобы найти его.",
				"`<h1>Салам</h1>` — это заголовок. `<p>Это первая страница.</p>` — абзац.",
				"Файл должен кончаться на `.html`. `.txt` открывается в браузере как код.",
				"Если картинка лежит в той же папке, `img` показывает её имя.",
				"Кнопку поставить можно. Чтобы она работала, нужен JavaScript.",
				"Не копируй готовый шаблон. Сначала напиши эти три строки сам."
			]
		}, L("Səhifə açılmırsa, faylın adının sonuna bax. `.html` deyilsə, brauzer onu səhifə saymır.", "If the page does not open, look at the end of the file name. If it is not `.html`, the browser does not treat it as a page.", "Sayfa açılmıyorsa dosya adının sonuna bak. `.html` değilse tarayıcı onu sayfa saymaz.", "إذا لم تُفتح الصفحة فانظر إلى آخر اسم الملف. إذا لم يكن `.html` فالمتصفح لا يعدّه صفحة.", "Если страница не открывается, посмотри на конец имени файла. Если это не `.html`, браузер не считает его страницей."))
	},
	{
		slug: "python-ilk-proqram",
		piece: piece(L("Python-da ilk proqram", "The first Python program", "Python'da ilk program", "أول برنامج Python", "Первая программа на Python"), L("İlk proqram bir sətirdir. Faylın adı `salam.py` olsun. İçində `print(\"Salam\")` yaz. Bu, ekrana Salam çıxarır.\n\nPython kompüterdə quraşdırılmalıdır. python.org-dan götür. Qurandan sonra terminalı aç. Faylın durduğu qovluğa keç və `python salam.py` yaz.\n\n`python` tapılmırsa, quraşdırma yolu əlavə etməyib. Qurucunu yenidən aç və yolu əlavə etməyi seç. Başqa redaktor lazım deyil. Bir mətn faylı kifayətdir.", "The first program is one line. Name the file `salam.py`. Inside it write `print(\"Hello\")`. That prints Hello on the screen.\n\nPython has to be installed on the computer. Take it from python.org. After it is installed, open the terminal. Go to the folder where the file sits and write `python salam.py`.\n\nIf `python` is not found, the install did not add the path. Open the installer again and choose to add the path. You do not need another editor. One text file is enough.", "İlk program bir satırdır. Dosyanın adı `salam.py` olsun. İçine `print(\"Merhaba\")` yaz. Bu, ekrana Merhaba basar.\n\nPython bilgisayara kurulmalıdır. python.org'dan al. Kurulunca terminali aç. Dosyanın durduğu klasöre geç ve `python salam.py` yaz.\n\n`python` bulunmazsa kurulum yolu eklememiştir. Kurucuyu yeniden aç ve yolu eklemeyi seç. Başka düzenleyici gerekmez. Bir metin dosyası yeter.", "البرنامج الأول سطر واحد. سمّ الملف `salam.py`. اكتب داخله `print(\"مرحبا\")`. هذا يطبع مرحبا على الشاشة.\n\nيجب تثبيت Python على الحاسوب. خذه من python.org. بعد التثبيت افتح الطرفية. اذهب إلى المجلد الذي فيه الملف واكتب `python salam.py`.\n\nإذا لم يُوجد `python` فالتثبيت لم يُضف المسار. افتح المثبّت من جديد واختر إضافة المسار. لا تحتاج محررًا آخر. ملف نص واحد يكفي.", "Первая программа — одна строка. Назови файл `salam.py`. Внутри напиши `print(\"Салам\")`. Это выводит Салам на экран.\n\nPython надо установить на компьютер. Возьми его с python.org. После установки открой терминал. Перейди в папку, где лежит файл, и напиши `python salam.py`.\n\nЕсли `python` не находится, установка не добавила путь. Открой установщик снова и выбери добавить путь. Другой редактор не нужен. Хватает одного текстового файла."), {
			az: [
				"Windows-da əmr `py salam.py` da ola bilər.",
				"Faylın sonu `.py` olmalıdır. `.txt` işləməz.",
				"Dırnaq düz olmalıdır: `\"Salam\"`. Əyri dırnaq səhv sayılır.",
				"İkinci sətir `ad = \"Nibras\"` ola bilər. Sonra `print(ad)`.",
				"Səhv çıxsa, son sətri oxu. Orada sətrin nömrəsi yazılır.",
				"Böyük layihə açma. Bir fayl işləyənə qədər orada qal."
			],
			en: [
				"On Windows the command can also be `py salam.py`.",
				"The file must end in `.py`. A `.txt` file will not run.",
				"The quote must be straight: `\"Hello\"`. A curved quote counts as a mistake.",
				"The second line can be `name = \"Nibras\"`. Then `print(name)`.",
				"If an error comes out, read the last line. The line number is written there.",
				"Do not open a big project. Stay with one file until it runs."
			],
			tr: [
				"Windows'ta komut `py salam.py` da olabilir.",
				"Dosyanın sonu `.py` olmalıdır. `.txt` çalışmaz.",
				"Tırnak düz olmalıdır: `\"Merhaba\"`. Eğri tırnak hata sayılır.",
				"İkinci satır `ad = \"Nibras\"` olabilir. Sonra `print(ad)`.",
				"Hata çıkarsa son satırı oku. Orada satırın numarası yazar.",
				"Büyük proje açma. Bir dosya çalışana kadar orada kal."
			],
			ar: [
				"في Windows قد يكون الأمر `py salam.py` أيضًا.",
				"يجب أن ينتهي الملف بـ `.py`. ملف `.txt` لا يعمل.",
				"علامة التنصيص يجب أن تكون مستقيمة: `\"مرحبا\"`. العلامة المنحنية تُعد خطأ.",
				"السطر الثاني يمكن أن يكون `ad = \"Nibras\"`. ثم `print(ad)`.",
				"إذا خرج خطأ فاقرأ السطر الأخير. رقم السطر مكتوب هناك.",
				"لا تفتح مشروعًا كبيرًا. ابقَ في ملف واحد حتى يعمل."
			],
			ru: [
				"В Windows команда может быть и `py salam.py`.",
				"Файл должен кончаться на `.py`. `.txt` не запустится.",
				"Кавычка должна быть прямой: `\"Салам\"`. Кривая кавычка считается ошибкой.",
				"Вторая строка может быть `ad = \"Nibras\"`. Потом `print(ad)`.",
				"Если вышла ошибка, прочитай последнюю строку. Там написан номер строки.",
				"Не открывай большой проект. Останься на одном файле, пока он не заработает."
			]
		}, L("Proqram heç nə yazmırsa, `print` yoxdur. Python faylı özü pəncərə açmır.", "If the program writes nothing, there is no `print`. A Python file does not open a window by itself.", "Program hiçbir şey yazmıyorsa `print` yoktur. Python dosyası kendi pencere açmaz.", "إذا لم يكتب البرنامج شيئًا فلا يوجد `print`. ملف Python لا يفتح نافذة بنفسه.", "Если программа ничего не пишет, нет `print`. Файл Python сам окно не открывает."))
	},
	{
		slug: "play-console",
		piece: piece(L("Play Console hesabı necə açılır", "How to open a Play Console account", "Play Console hesabı nasıl açılır", "كيف يُفتح حساب Play Console", "Как открыть аккаунт Play Console"), L("Play Console tətbiqi mağazaya göndərdiyin saytdır. Ünvanı `play.google.com/console` olmalıdır. Başqa saytdakı oxşar forma pul istəməməlidir.\n\nGoogle hesabın olmalıdır. Console açılınca sayt bir dəfəlik ödəniş göstərir. Məbləğ səhifənin özündə yazılır. Ödəniş tətbiqi dərc etmir. Yalnız hesabı açır.\n\nÖdənişdən sonra ad, ünvan və əlaqə soruşulur. Bəzən kimlik də istənir. Hesab açılan kimi tətbiq çıxmır. İmzalı APK, məxfilik ünvanı, ikon və telefon şəkilləri hələ səndədir.", "Play Console is the site where you send an app to the store. The address must be `play.google.com/console`. A similar form on another site should not ask you for money.\n\nYou need a Google account. When Console opens, the site shows a one-time payment. The amount is written on that page. The payment does not publish the app. It only opens the account.\n\nAfter the payment it asks for a name, an address, and a contact. Sometimes it also asks for an identity. The app does not come out the moment the account opens. A signed APK, a privacy address, an icon, and phone pictures are still yours to add.", "Play Console, uygulamayı mağazaya gönderdiğin sitedir. Adresi `play.google.com/console` olmalıdır. Başka sitedeki benzer form para istememelidir.\n\nGoogle hesabın olmalıdır. Console açılınca site bir kerelik ödeme gösterir. Tutar sayfanın kendisinde yazar. Ödeme uygulamayı yayınlamaz. Yalnızca hesabı açar.\n\nÖdemeden sonra ad, adres ve iletişim sorulur. Bazen kimlik de istenir. Hesap açılır açılmaz uygulama çıkmaz. İmzalı APK, gizlilik adresi, simge ve telefon resimleri hâlâ sendedir.", "Play Console هو الموقع الذي ترسل منه التطبيق إلى المتجر. يجب أن يكون العنوان `play.google.com/console`. نموذج شبيه على موقع آخر لا ينبغي أن يطلب منك مالًا.\n\nتحتاج حساب Google. حين يُفتح Console يُظهر الموقع دفعة واحدة. المبلغ مكتوب في تلك الصفحة. الدفعة لا تنشر التطبيق. تفتح الحساب فقط.\n\nبعد الدفعة يسأل عن اسم وعنوان واتصال. أحيانًا يطلب هوية أيضًا. التطبيق لا يخرج لحظة فتح الحساب. APK الموقَّع وعنوان الخصوصية والأيقونة وصور الهاتف ما زالت عليك.", "Play Console — это сайт, с которого ты отправляешь приложение в магазин. Адрес должен быть `play.google.com/console`. Похожая форма на другом сайте не должна просить у тебя деньги.\n\nНужен аккаунт Google. Когда Console открывается, сайт показывает разовую оплату. Сумма написана на той странице. Оплата не публикует приложение. Она только открывает аккаунт.\n\nПосле оплаты спрашивают имя, адрес и связь. Иногда просят и удостоверение. Приложение не выходит в миг открытия аккаунта. Подписанный APK, адрес конфиденциальности, значок и снимки телефона всё ещё на тебе."), {
			az: [
				"Ünvan `play.google.com` deyilsə, kartı yazma.",
				"Bir dəfəlik ödəniş hər tətbiq üçün təkrarlanmır. Hesab üçündür.",
				"Ödənişi başqasının hesabı ilə etsən, tətbiq onun adına düşür.",
				"Hazır APK-n yoxdursa, hesabı açmaq tələsmə.",
				"Məxfilik səhifəsinin ünvanı açılmalıdır. Boş səhifə tətbiqi saxlaya bilər.",
				"Şəkilləri tətbiqin öz ekranından çək. Başqa tətbiqin şəklini qoyma."
			],
			en: [
				"If the address is not `play.google.com`, do not type the card.",
				"The one-time payment is not repeated for every app. It is for the account.",
				"If you pay with someone else's account, the app lands in that name.",
				"If you do not have a finished APK yet, do not rush to open the account.",
				"The privacy page address has to open. An empty page can hold the app back.",
				"Take the pictures from the app's own screen. Do not put another app's picture."
			],
			tr: [
				"Adres `play.google.com` değilse kartı yazma.",
				"Bir kerelik ödeme her uygulama için tekrarlanmaz. Hesap içindir.",
				"Ödemeyi başkasının hesabıyla yaparsan uygulama onun adına düşer.",
				"Hazır APK'n yoksa hesabı açmaya acele etme.",
				"Gizlilik sayfasının adresi açılmalıdır. Boş sayfa uygulamayı tutabilir.",
				"Resimleri uygulamanın kendi ekranından çek. Başka uygulamanın resmini koyma."
			],
			ar: [
				"إذا لم يكن العنوان `play.google.com` فلا تكتب البطاقة.",
				"الدفعة الواحدة لا تتكرر لكل تطبيق. هي للحساب.",
				"إذا دفعت بحساب غيرك وقع التطبيق باسمه.",
				"إذا لم يكن عندك APK جاهز فلا تستعجل فتح الحساب.",
				"يجب أن يُفتح عنوان صفحة الخصوصية. الصفحة الفارغة قد تُبقي التطبيق.",
				"صوّر من شاشة التطبيق نفسه. لا تضع صورة تطبيق آخر."
			],
			ru: [
				"Если адрес не `play.google.com`, карту не пиши.",
				"Разовая оплата не повторяется для каждого приложения. Она для аккаунта.",
				"Если платишь чужим аккаунтом, приложение падает на его имя.",
				"Если готового APK ещё нет, не спеши открывать аккаунт.",
				"Адрес страницы конфиденциальности должен открываться. Пустая страница может задержать приложение.",
				"Снимки снимай с экрана самого приложения. Чужой снимок не ставь."
			]
		}, L("Hesab açılması tətbiqin qəbul olması demək deyil. İmzalı fayl və səhifə hələ yoxlanılır.", "An open account does not mean the app is accepted. The signed file and the page are still checked.", "Hesabın açılması uygulamanın kabul edilmesi demek değildir. İmzalı dosya ve sayfa hâlâ kontrol edilir.", "فتح الحساب لا يعني قبول التطبيق. الملف الموقَّع والصفحة ما زالا يُفحصان.", "Открытый аккаунт не значит, что приложение принято. Подписанный файл и страница ещё проверяются."))
	}
];
var SEARCH = {
	soz: {
		kind: "soz",
		heading: L("Proqramlaşdırma sözləri", "Programming words", "Programlama sözleri", "كلمات البرمجة", "Слова программирования"),
		intro: L("Axtarışda ən çox soruşulan sözlərin qısa izahı. Hər sözün öz səhifəsi var.", "Short explanations of the words people search for most. Each word has its own page.", "Aramada en çok sorulan sözlerin kısa açıklaması. Her sözün kendi sayfası var.", "شرح قصير للكلمات التي تُبحث أكثر. لكل كلمة صفحتها.", "Короткое объяснение слов, которые ищут чаще всего. У каждого слова своя страница."),
		title: L("Proqramlaşdırma sözləri — API, dəyişən, funksiya", "Programming words — API, variable, function", "Programlama sözleri — API, değişken, fonksiyon", "كلمات البرمجة — API والمتغير والدالة", "Слова программирования — API, переменная, функция"),
		description: L("API nədir, dəyişən nədir, funksiya nədir, döngü, HTML, CSS, JavaScript, Python, alqoritm və JSON. Qısa izah.", "What is an API, a variable, a function, a loop, HTML, CSS, JavaScript, Python, an algorithm, and JSON. Short explanations.", "API nedir, değişken nedir, fonksiyon nedir, döngü, HTML, CSS, JavaScript, Python, algoritma ve JSON. Kısa açıklama.", "ما هي API والمتغير والدالة والحلقة وHTML وCSS وJavaScript وPython والخوارزمية وJSON. شرح قصير.", "Что такое API, переменная, функция, цикл, HTML, CSS, JavaScript, Python, алгоритм и JSON. Коротко."),
		items: WORDS
	},
	xeta: {
		kind: "xeta",
		heading: L("APK xətaları", "APK errors", "APK hataları", "أخطاء APK", "Ошибки APK"),
		intro: L("Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console və iş vaxtı xətaları: səbəb, addım-addım həll, əmrlər və qarşısının alınması. Quruluş dayananda telefonun göstərdiyi xətalar. Son vaxtlar axtarılanlar da buradadır: Play Protect, etibarsız paket, yaddaş, uyğunsuz telefon, köhnə versiya və XAPK.", "Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console and runtime errors: cause, step-by-step fix, commands and prevention. The errors a phone shows when installation stops. What people have been searching for lately is here too: Play Protect, an invalid package, storage, an incompatible phone, an older version, and XAPK.", "Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console ve çalışma anı hataları: neden, adım adım çözüm, komutlar ve önlem. Kurulum durunca telefonun gösterdiği hatalar. Son zamanlar arananlar da burada: Play Protect, geçersiz paket, depolama, uyumsuz telefon, eski sürüm ve XAPK.", "أخطاء Android وGradle وExpo وReact Native وEAS وCapacitor وkeystore وadb وPlay Console ووقت التشغيل: السبب والحل خطوة بخطوة والأوامر والوقاية. الأخطاء التي يظهرها الهاتف حين يتوقف التثبيت. ما يُبحث عنه مؤخرًا هنا أيضًا: Play Protect والحزمة غير الصالحة والمساحة والهاتف غير المتوافق والنسخة الأقدم وXAPK.", "Ошибки Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console и времени выполнения: причина, решение по шагам, команды и профилактика. Ошибки, которые телефон показывает, когда установка останавливается. То, что ищут в последнее время, тоже здесь: Play Protect, недействительный пакет, память, неподходящий телефон, старая версия и XAPK."),
		title: L("APK xətaları — qurulmur, Play Protect, XAPK", "APK errors — will not install, Play Protect, XAPK", "APK hataları — kurulmuyor, Play Protect, XAPK", "أخطاء APK — لا يُثبَّت، Play Protect، XAPK", "Ошибки APK — не устанавливается, Play Protect, XAPK"),
		description: L("APK qurulmur, Play Protect bloklayır, paket etibarsızdır, yaddaş çatmır, telefon uyğun deyil, köhnə versiya və XAPK qurulmur. Nə etmək lazımdır.", "APK will not install, Play Protect blocks it, the package is invalid, storage is full, the phone is not compatible, an older version and XAPK will not install. What to do.", "APK kurulmuyor, Play Protect engelliyor, paket geçersiz, depolama yetmiyor, telefon uyumsuz, eski sürüm ve XAPK kurulmuyor. Ne yapmalı.", "APK لا يُثبَّت، وPlay Protect يحظره، والحزمة غير صالحة، والمساحة لا تكفي، والهاتف غير متوافق، والنسخة الأقدم وXAPK لا يُثبَّتان. ماذا يُفعل.", "APK не устанавливается, Play Protect блокирует, пакет недействителен, не хватает памяти, телефон не подходит, старая версия и XAPK не ставятся. Что делать."),
		items: ERRORS
	},
	movzu: {
		kind: "movzu",
		heading: L("Süni intellekt", "Artificial intelligence", "Yapay zeka", "الذكاء الاصطناعي", "Искусственный интеллект"),
		intro: L("Süni intellekt burada söhbət proqramı deməkdir. Sən yazırsan, model cavab yazır. ChatGPT, Gemini və Claude üç ayrı proqramdır. Birinin hesabı o birini açmır. Prompt modelə göndərdiyin yazıdır. Qrafik, düymə və panel cavabın içinə və ya yanına düşə bilər, amma içindəki rəqəm mənbə deyil. Nibras AI bu saytın öz söhbətidir, onların heç biri deyil.", "Artificial intelligence here means a chat program. You write, and a model writes back. ChatGPT, Gemini, and Claude are three separate programs. One account does not open the others. A prompt is the text you send to the model. A chart, a button, and a panel can sit inside the answer or beside it, but a number inside is not a source. Nibras AI is this site's own chat. It is none of those.", "Yapay zeka burada sohbet programı demektir. Sen yazarsın, model cevap yazar. ChatGPT, Gemini ve Claude üç ayrı programdır. Birinin hesabı diğerini açmaz. Prompt modele gönderdiğin yazıdır. Grafik, düğme ve panel cevabın içine ya da yanına düşebilir, ama içindeki sayı kaynak değildir. Nibras AI bu sitenin kendi sohbetidir, onların hiçbiri değildir.", "الذكاء الاصطناعي هنا يعني برنامج محادثة. تكتب فيكتب النموذج الجواب. ChatGPT وGemini وClaude ثلاثة برامج منفصلة. حساب واحد لا يفتح البقية. الـ prompt هو النص الذي ترسله إلى النموذج. قد يقع الرسم والزر واللوحة داخل الجواب أو بجانبه، لكن الرقم في الداخل ليس مصدرًا. Nibras AI محادثة هذا الموقع، وليس أيًا من تلك.", "Искусственный интеллект здесь — программа для разговора. Ты пишешь, модель отвечает. ChatGPT, Gemini и Claude — три отдельные программы. Один аккаунт не открывает остальные. Prompt — текст, который ты отправляешь модели. График, кнопка и панель могут стоять внутри ответа или рядом, но число внутри — не источник. Nibras AI — разговор этого сайта, и это не они."),
		title: L("Süni intellekt — ChatGPT, Gemini, Claude, prompt", "Artificial intelligence — ChatGPT, Gemini, Claude, prompt", "Yapay zeka — ChatGPT, Gemini, Claude, prompt", "الذكاء الاصطناعي — ChatGPT وGemini وClaude وprompt", "Искусственный интеллект — ChatGPT, Gemini, Claude, prompt"),
		description: L("ChatGPT nədir, Gemini nədir, Claude nədir, prompt nədir və süni intellektlə tətbiq hazırlamaq. GPT-6 qrafiki, Gemini vizualı və Claude paneli.", "What is ChatGPT, Gemini, and Claude, what is a prompt, and making an app with AI. A GPT-6 chart, a Gemini visual, and a Claude panel.", "ChatGPT nedir, Gemini nedir, Claude nedir, prompt nedir ve yapay zeka ile uygulama yapmak. GPT-6 grafiği, Gemini görseli ve Claude paneli.", "ما هو ChatGPT وGemini وClaude، وما هو prompt، وصنع تطبيق بالذكاء الاصطناعي. رسم GPT-6 وصورة Gemini ولوحة Claude.", "Что такое ChatGPT, Gemini и Claude, что такое prompt и как сделать приложение с ИИ. График GPT-6, картинка Gemini и панель Claude."),
		items: [...TOPICS, ...EXTRA_TOPICS]
	},
	nece: {
		kind: "nece",
		heading: L("Necə", "How to start", "Nasıl", "كيف", "Как начать"),
		intro: L("İlk səhifə, ilk Python proqramı və Play Console hesabı. Hər biri öz addımları ilə.", "The first page, the first Python program, and a Play Console account. Each one with its own steps.", "İlk sayfa, ilk Python programı ve Play Console hesabı. Her biri kendi adımlarıyla.", "الصفحة الأولى وبرنامج Python الأول وحساب Play Console. كل واحد بخطواته.", "Первая страница, первая программа Python и аккаунт Play Console. У каждого свои шаги."),
		title: L("Necə — ilk HTML, ilk Python, Play Console", "How to start — first HTML, first Python, Play Console", "Nasıl — ilk HTML, ilk Python, Play Console", "كيف — أول HTML وأول Python وPlay Console", "Как начать — первый HTML, первый Python, Play Console"),
		description: L("İlk HTML səhifəni necə yazmaq, Python-da ilk proqramı necə işə salmaq və Play Console hesabını necə açmaq olar.", "How to write a first HTML page, run a first Python program, and open a Play Console account.", "İlk HTML sayfası nasıl yazılır, Python'da ilk program nasıl çalıştırılır ve Play Console hesabı nasıl açılır.", "كيف تُكتب أول صفحة HTML، وكيف يُشغَّل أول برنامج Python، وكيف يُفتح حساب Play Console.", "Как написать первую страницу HTML, запустить первую программу Python и открыть аккаунт Play Console."),
		items: [
			...TOOL_LANDINGS,
			...HOWS,
			...EXTRA_HOWS
		]
	}
};
var LANG_PREFIX = {
	az: "",
	en: "/en",
	tr: "/tr",
	ar: "/ar",
	ru: "/ru"
};
function searchPath(lang, kind) {
	return localizeSection(`${LANG_PREFIX[lang]}/${kind}`);
}
function searchTopicPath(lang, kind, slug) {
	return localizeSection(`${LANG_PREFIX[lang]}/${kind}/${slug}`);
}
function searchFromPath(pathname) {
	const match = delocalizeSection(pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname).match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta|movzu|nece)$/);
	if (!match) return null;
	const lang = match[1] ?? "az";
	const kind = match[2];
	return {
		lang,
		kind,
		section: SEARCH[kind]
	};
}
function searchTopicFromPath(pathname) {
	const match = delocalizeSection(pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname).match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta|movzu|nece)\/([^/]+)$/);
	if (!match) return null;
	const lang = match[1] ?? "az";
	const kind = match[2];
	const section = SEARCH[kind];
	const item = section.items.find((entry) => entry.slug === match[3]);
	if (!item) return null;
	return {
		lang,
		kind,
		section,
		item,
		piece: item.piece[lang]
	};
}
//#endregion
export { searchPath as a, searchFromPath as i, TOOL_LANDINGS as n, searchTopicFromPath as o, loadApkBody as r, searchTopicPath as s, SEARCH as t };
