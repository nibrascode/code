import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

export function storeSections(lang: Lang): ProgrammingSection[] {
  const all: Record<Lang, ProgrammingSection[]> = {
    az: [
      {
        id: "play",
        title: "Hazır tətbiqi Play Marketə necə yükləmək olar?",
        blocks: [
          {
            paragraphs: [
              "Play Market Google Play-dir. Telefonun özünə APK atmaq başqa şeydir. Mağazaya çıxarmaq üçün Play Console hesabı, imzalı AAB və doldurulmuş səhifə lazımdır. Nibras Studio-nun debug APK-sı bu yerə getmir. 2021-ci ilin avqustundan yeni tətbiq üçün mağaza APK yox, AAB istəyir. AAB bağlama faylıdır. Mağaza onu telefonun növünə görə kiçik APK-ya çevirir.",
              "İş bir gündə bitmir. Şəxsiyyət yoxlaması, mətn, şəkillər və bəzi hesablarda 14 günlük qapalı test var. Əvvəl faylı düz yığ, sonra səhifəni doldur, axırda nəzərdən keçirməyə göndər.",
            ],
          },
          {
            heading: "Addımlar",
            ordered: true,
            paragraphs: ["Sıra vacibdir. Boş tətbiq açıp şəkil yükləmək olar, amma production düyməsi formalar bitmədən açılmır."],
            list: [
              "Google hesabı ilə Play Console aç. Şəxsi hesabda kimlik sənədi, təşkilat hesabında şirkət sənədi və çox vaxt D-U-N-S nömrəsi soruşulur. Açılışda bir dəfəlik haqq var. Məbləği qeydiyyat səhifəsi göstərir.",
              "Create app bas. Ad, ilkin dil, tətbiq və ya oyun, pulsuz və ya pullu seç. Paket adı ilk AAB ilə bağlanır və sonra dəyişmir. Tətbiqin içindəki applicationId ilə eyni olmalıdır.",
              "Release AAB yığ. Android Studio-da Generate Signed Bundle, ya da layihənin kökündə ./gradlew bundleRelease. Fayl adətən app/build/outputs/bundle/release içində durur. Açarı saxla. İtirsən, eyni tətbiqin üstünə yenisini qoya bilməzsən.",
              "Play App Signing-ə qoşulanda iki açar ola bilər. Yükləmə açarı səndə qalır, mağazanın imza açarı Google-dadır. Yeniləmə hər ikisinin qaydasına uymalıdır. Debug açarı ilə yığılan fayl mağazaya getmir.",
              "31 avqust 2026-dan telefon üçün yeni tətbiq və yeniləmə API 36, yəni Android 16, hədəfləməlidir. Köhnə hədəf faylı qəbul etmir. build.gradle içində targetSdk yazılır.",
              "Mağaza səhifəsini doldur. Qısa mətn, uzun mətn, 512 piksellik ikon, 1024x500 ölçü şəkil, telefonun ekran şəkilləri, kateqoriya və əlaqə e-poçtu. Məxfilik ünvanı açılmalıdır.",
              "Məzmun formalarını bitir. Reklam varmı, hansı məlumat yığılır, yaş anketi, tətbiq kimə üçündür. Uşaq üçündürsə, formalar sərtləşir. Xəbər tətbiqidirsə, ayrıca bəyan var.",
              "Ölkəni və qiyməti seç. Pulsuz qoyub içəridə ödəniş etmək olar. Pulsuzu sonradan pullu quraşdırmaya çevirmək çətin ola bilər.",
              "Əvvəl internal testə qoy. Bu, sənin e-poçt siyahındır və 100 nəfərə qədərdir. Faylın açıldığını burada gör. Bu iz 12 nəfər qaydasına sayılmır.",
              "Sonra closed test. E-poçt siyahısı və ya Google Group. 13 noyabr 2023-də və ya ondan sonra açılmış şəxsi hesab hər yeni tətbiq üçün eyni vaxtda ən azı 12 nəfərin 14 gün ardıcıl qeydiyyatda qalmasını istəyir. Biri çıxsa, onun sayğısı yenidən başlayır. Yeni yığım günü sıfırlamır. Təşkilat hesabı və o tarixdən əvvəlki şəxsi hesab bu divara düşmür.",
              "14 gün bitəndə Dashboard-dan production icazəsi istə. Suallara tətbiqin həqiqi işini yaz. İcazə çox vaxt bir həftəyə qədər çəkir. Open test bu icazədən sonra açılır.",
              "İcazədən sonra production izində AAB-ni göndər. Nəzərdən keçirmə bir neçə gün çəkə bilər. Rədd cavabı səbəbi yazır. Düzəldib daha böyük versionCode ilə yenidən göndər.",
            ],
          },
          {
            heading: "Yeniləmə",
            paragraphs: [
              "Köhnə tətbiqin yerinə yeni fayl ancaq üç şey eyni olanda keçir. Paket adı dəyişməməlidir. İmza əvvəlki release ilə uyğun olmalıdır. versionCode böyük olmalıdır. Başqa adla yeni tətbiq açmaq köhnə istifadəçini daşımır. O, mağazada ikinci proqram kimi durur.",
              "Ekran şəkli tətbiqin özündən olmalıdır. Mətndə olmayan işi vəd etmə. İlk rədd ola bilər. Hesabatı oxu, şəkli və ya mətni düzəlt, yenidən göndər. Hesabı yanıltıcı səhifə və işləməyən ödəniş bağlaya bilər.",
            ],
          },
        ],
      },
      {
        id: "huawei",
        title: "Hazır tətbiqi Huawei AppGallery-yə necə yükləmək olar?",
        blocks: [
          {
            paragraphs: [
              "Huawei-nin mağazası AppGallery-dir. Play Marketdən ayrı hesabdır. Google hesabı orada işləmir. Telefonun özünə atdığın APK da özü mağazaya düşmür. AppGallery Connect-də tətbiq açılır, imzalı fayl yüklənir, səhifə doldurulur və yoxlamaya göndərilir.",
              "Play-ə çıxarmaq Huawei-yə çıxarmaq demək deyil. Eyni paket adı ola bilər, amma iki hesab, iki səhifə və iki yoxlama var. Biri bitəndə o biri özü açılmır.",
            ],
          },
          {
            heading: "Addımlar",
            ordered: true,
            paragraphs: ["Hesab yoxlanmadan fayl yüklənmir. Əvvəl kimliyi bitir, sonra paketi yığ."],
            list: [
              "developer.huawei.com ünvanında Huawei ID aç. Şəxsi və ya şirkət kimi yoxlan. Şəxsi hesabda kimlik sənədi, şirkətdə qeydiyyat sənədi soruşulur. Yoxlama çox vaxt bir və ya iki iş günü çəkir.",
              "AppGallery Connect-də My apps, sonra yeni tətbiq. Platforma Android, cihaz telefon. Ad, ilkin dil, paket adı və kateqoriya yaz. Paket adı ilk yükləmədən sonra dəyişmir və tətbiqin içindəki applicationId ilə eyni olmalıdır.",
              "Faylı seç. APK və AAB ikisi də qəbul oluna bilər. APK-nı öz açarınla imzalayırsan. Bu yolda son imza səndə qalır. AAB seçsən, Huawei-nin App Signing xidmətinə qoşulmalısan və son imzanı onlar saxlayır.",
              "APK yolu belədir. Layihənin android qovluğunda ./gradlew assembleRelease. Fayl app/build/outputs/apk/release içində durur. Açarı itirmə. Növbəti yeniləmə eyni açarla imzalanmalıdır.",
              "versionCode və versionName mağazaya yazdığın versiya ilə üst-üstə düşməlidir. Hər yeni faylda versionCode böyüyür. Eyni ədəd köhnənin yerinə keçmir.",
              "Hər dil üçün ad, qısa izah, uzun izah, ikon və ekran şəkillərini doldur. Şəkillər tətbiqin öz ekranı olsun. Boş və ya başqa proqramdan kəsilmiş şəkil rədd səbəbidir.",
              "Ölkələri, pulsuz və ya pullu olduğunu və məxfilik ünvanını yaz. Yaş dərəcəsini anketlə seç. Tətbiqin içində rəqəmsal mal satırsansa, Huawei-nin öz tətbiq içi ödənişi soruşula bilər.",
              "Göndərməzdən əvvəl Huawei telefonunda və ya AppGallery-nin bulud testində aç. Google-lu emulyator Huawei-də sınır xətanı gizlədir.",
              "Səhifəni yoxlamaya göndər. Bir neçə gün çəkə bilər. Rədd cavabı nəyin əskik olduğunu yazır. Düzəldib eyni paket adı və daha böyük versionCode ilə yenidən göndər. İstəsən yoxlamadan keçəndən dərhal sonra və ya seçdiyin saatda açılsın.",
            ],
          },
          {
            heading: "Google xidməti Huawei-də yoxdur",
            paragraphs: [
              "2019-cu ilin sonundan bir çox Huawei telefonunda Google Play xidməti yoxdur. Google ilə giriş, Google xəritə, Play Billing və Firebase bildirişi həmin telefonlarda açılmır. Bu hissələri gizlət və ya Huawei-nin öz xidməti ilə əvəz et. Yoxlamadan keçən tətbiq telefonda açılıb boş düymə göstərə bilər. Buna görə bulud testi və ya əsl Huawei telefonu lazımdır.",
              "Tətbiq yalnız sənin saytının pəncərəsidirsə və Google kitabxanası çağırmırsa, eyni səhifə AppGallery-də də aça bilər. Yenə də release imzalı APK və ya AAB lazımdır. Nibras Studio-nun debug faylı mağaza faylı deyil.",
              "İki mağaza iki tamaşaçıdır. Play-də olan adam Huawei-də özü səni görmür. Səhifənin mətni, ikonu və məxfilik ünvanı hər mağazada ayrıca doldurulur. Paket adını hər ikisində eyni saxlamaq yeniləməni qarışdırmır, çünki mağazalar bir-birinin imzasını daşımır. Hər mağazada ilk faylın açarını öz yerində saxla.",
            ],
          },
        ],
      },
    ],
    en: [
      {
        id: "play",
        title: "How do you upload a finished app to the Play Store?",
        blocks: [
          {
            paragraphs: [
              "The Play Store is Google Play. Putting an APK on your own phone is a different job. To reach the store you need a Play Console account, a signed AAB, and a filled page. The debug APK from Nibras Studio does not go there. Since August 2021 a new app must be an AAB, not an APK. An AAB is a bundle. The store turns it into a small APK for each kind of phone.",
              "The work does not finish in a day. There is an identity check, text, pictures, and on some accounts a 14-day closed test. Build the file first, fill the page next, and send it for review last.",
            ],
          },
          {
            heading: "Steps",
            ordered: true,
            paragraphs: ["The order matters. You can open an empty app and upload a picture, but the production button stays shut until the forms are done."],
            list: [
              "Open Play Console with a Google account. A personal account is asked for an identity document. An organization account is asked for company papers and often a D-U-N-S number. There is a one-time fee at signup. The amount is on the registration page.",
              "Press Create app. Choose the name, the first language, app or game, free or paid. The package name locks to the first AAB and cannot change later. It must match the applicationId inside the app.",
              "Build a release AAB. In Android Studio use Generate Signed Bundle, or run ./gradlew bundleRelease at the project root. The file usually sits in app/build/outputs/bundle/release. Keep the key. Lose it and you cannot put a new file on the same app.",
              "Play App Signing can mean two keys. The upload key stays with you. The store's signing key stays with Google. An update has to follow both rules. A file built with the debug key does not go to the store.",
              "From 31 August 2026 a new phone app and an update must target API 36, which is Android 16. An older target is refused. targetSdk is written in build.gradle.",
              "Fill the store page. A short text, a long text, a 512-pixel icon, a 1024x500 graphic, phone screenshots, a category, and a contact email. The privacy address must open.",
              "Finish the content forms. Are there ads, what data is collected, the age questionnaire, and who the app is for. If it is for children, the forms get stricter. A news app has its own declaration.",
              "Choose countries and a price. You can stay free and charge inside. Turning a free install into a paid install later can be hard.",
              "Put it on internal testing first. That is your own email list, up to 100 people. See that the file opens. This track does not count toward the 12-person rule.",
              "Then closed testing. An email list or a Google Group. A personal account opened on or after 13 November 2023 must keep at least 12 people opted in at the same time for 14 days in a row, for every new app. If one person leaves, their count starts again. A new build does not reset the days. An organization account, and a personal account from before that date, does not hit this wall.",
              "When the 14 days end, ask for production access from the Dashboard. Write the app's real job in the answers. Access often takes up to a week. Open testing opens after that access.",
              "After access, send the AAB on the production track. Review can take a few days. A rejection writes the reason. Fix it and send again with a higher versionCode.",
            ],
          },
          {
            heading: "Updates",
            paragraphs: [
              "A new file replaces the old app only when three things match. The package name must not change. The signature must match the previous release. versionCode must be higher. Opening a new app under another name does not carry the old users. It stands in the store as a second program.",
              "A screenshot must come from the app itself. Do not promise a job the text does not do. The first rejection can happen. Read the report, fix the picture or the text, and send again. A misleading page and a payment that does not work can close the account.",
            ],
          },
        ],
      },
      {
        id: "huawei",
        title: "How do you upload a finished app to Huawei AppGallery?",
        blocks: [
          {
            paragraphs: [
              "Huawei's store is AppGallery. It is a separate account from the Play Store. A Google account does not work there. An APK you put on your own phone does not appear in the store by itself. You open an app in AppGallery Connect, upload a signed file, fill the page, and send it for review.",
              "Shipping on Play does not ship on Huawei. The package name can be the same, but there are two accounts, two pages, and two reviews. When one finishes, the other does not open by itself.",
            ],
          },
          {
            heading: "Steps",
            ordered: true,
            paragraphs: ["The file cannot be uploaded before the account is verified. Finish the identity first, then build the package."],
            list: [
              "Open a Huawei ID at developer.huawei.com. Verify as a person or a company. A personal account is asked for an identity document. A company is asked for registration papers. The check often takes one or two working days.",
              "In AppGallery Connect open My apps, then a new app. Platform Android, device phone. Write the name, the first language, the package name, and the category. The package name cannot change after the first upload and must match the applicationId inside the app.",
              "Choose the file. Both APK and AAB can be accepted. You sign an APK with your own key. On that path the final signature stays with you. If you choose an AAB, you must join Huawei's App Signing service and they keep the final signature.",
              "The APK path is this. In the project's android folder run ./gradlew assembleRelease. The file sits in app/build/outputs/apk/release. Do not lose the key. The next update must be signed with the same key.",
              "versionCode and versionName must match the version you write in the store. versionCode rises with every new file. The same number does not replace the old one.",
              "For each language fill the name, the short text, the long text, the icon, and the screenshots. The pictures should be the app's own screen. An empty picture, or one cut from another program, is a reason for rejection.",
              "Write the countries, whether it is free or paid, and the privacy address. Pick the age rating with the questionnaire. If you sell a digital good inside the app, Huawei's own in-app payment can be required.",
              "Before you send it, open it on a Huawei phone or in AppGallery's cloud test. An emulator with Google hides the error that stops on Huawei.",
              "Send the page for review. It can take a few days. A rejection writes what is missing. Fix it and send again with the same package name and a higher versionCode. You can choose to open right after review, or at an hour you pick.",
            ],
          },
          {
            heading: "Google services are missing on Huawei",
            paragraphs: [
              "Since late 2019 many Huawei phones have no Google Play services. Google sign-in, Google maps, Play Billing, and Firebase notifications do not open on those phones. Hide those parts or replace them with Huawei's own service. An app that passes review can still open and show an empty button. That is why a cloud test or a real Huawei phone is needed.",
              "If the app is only a window onto your site and it does not call a Google library, the same page can open on AppGallery too. You still need a release-signed APK or AAB. The debug file from Nibras Studio is not a store file.",
              "Two stores are two audiences. A person on Play does not see you on Huawei by themselves. The page text, the icon, and the privacy address are filled separately in each store. Keeping the same package name in both does not mix the updates, because the stores do not carry each other's signature. Keep the first file's key in its own place for each store.",
            ],
          },
        ],
      },
    ],
    tr: [
      {
        id: "play",
        title: "Hazır uygulamayı Play Market'e nasıl yüklersin?",
        blocks: [
          {
            paragraphs: [
              "Play Market Google Play'dir. Telefonun kendine APK atmak başka iştir. Mağazaya çıkmak için Play Console hesabı, imzalı AAB ve doldurulmuş sayfa gerekir. Nibras Studio'nun debug APK'sı oraya gitmez. Ağustos 2021'den beri yeni uygulama için mağaza APK değil, AAB ister. AAB bir paket dosyasıdır. Mağaza onu telefonun türüne göre küçük APK'ya çevirir.",
              "İş bir günde bitmez. Kimlik yoklaması, metin, resimler ve bazı hesaplarda 14 günlük kapalı test vardır. Önce dosyayı düz derle, sonra sayfayı doldur, en sonda incelemeye gönder.",
            ],
          },
          {
            heading: "Adımlar",
            ordered: true,
            paragraphs: ["Sıra önemlidir. Boş uygulama açıp resim yüklemek olur, ama production düğmesi formlar bitmeden açılmaz."],
            list: [
              "Google hesabıyla Play Console aç. Kişisel hesapta kimlik belgesi, kuruluş hesabında şirket belgesi ve çoğu zaman D-U-N-S numarası sorulur. Açılışta bir kerelik ücret vardır. Tutarı kayıt sayfası gösterir.",
              "Create app bas. Ad, ilk dil, uygulama ya da oyun, ücretsiz ya da ücretli seç. Paket adı ilk AAB ile kilitlenir ve sonra değişmez. Uygulamanın içindeki applicationId ile aynı olmalıdır.",
              "Release AAB derle. Android Studio'da Generate Signed Bundle, ya da projenin kökünde ./gradlew bundleRelease. Dosya genellikle app/build/outputs/bundle/release içinde durur. Anahtarı sakla. Kaybedersen aynı uygulamanın üstüne yenisini koyamazsın.",
              "Play App Signing'e katılınca iki anahtar olabilir. Yükleme anahtarı sende kalır, mağazanın imza anahtarı Google'dadır. Güncelleme ikisinin de kuralına uymalıdır. Debug anahtarıyla derlenen dosya mağazaya gitmez.",
              "31 Ağustos 2026'dan sonra telefon için yeni uygulama ve güncelleme API 36, yani Android 16, hedeflemelidir. Eski hedef dosyayı kabul etmez. targetSdk build.gradle içinde yazılır.",
              "Mağaza sayfasını doldur. Kısa metin, uzun metin, 512 piksellik ikon, 1024x500 görsel, telefon ekran görüntüleri, kategori ve iletişim e-postası. Gizlilik adresi açılmalıdır.",
              "İçerik formlarını bitir. Reklam var mı, hangi veri toplanıyor, yaş anketi, uygulama kime. Çocuk içinse formlar sıkılaşır. Haber uygulamasıysa ayrı beyan vardır.",
              "Ülkeyi ve fiyatı seç. Ücretsiz koyup içeride ödeme almak olur. Ücretsizi sonradan ücretli kuruluma çevirmek zor olabilir.",
              "Önce internal teste koy. Bu senin e-posta listendir ve 100 kişiye kadardır. Dosyanın açıldığını burada gör. Bu iz 12 kişi kuralına sayılmaz.",
              "Sonra closed test. E-posta listesi ya da Google Group. 13 Kasım 2023'te ya da sonra açılmış kişisel hesap her yeni uygulama için aynı anda en az 12 kişinin 14 gün aralıksız kayıtta kalmasını ister. Biri çıkarsa onun sayımı yeniden başlar. Yeni derleme günü sıfırlamaz. Kuruluş hesabı ve o tarihten önceki kişisel hesap bu duvara çarpmaz.",
              "14 gün bitince Dashboard'dan production izni iste. Sorulara uygulamanın gerçek işini yaz. İzin çoğu zaman bir haftaya kadar sürer. Open test bu izinden sonra açılır.",
              "İzinden sonra production izinde AAB'yi gönder. İnceleme birkaç gün sürebilir. Ret yanıtı sebebi yazar. Düzeltip daha büyük versionCode ile yeniden gönder.",
            ],
          },
          {
            heading: "Güncelleme",
            paragraphs: [
              "Yeni dosya eski uygulamanın yerine ancak üç şey aynıyken geçer. Paket adı değişmemelidir. İmza önceki release ile uyumlu olmalıdır. versionCode büyük olmalıdır. Başka adla yeni uygulama açmak eski kullanıcıyı taşımaz. O, mağazada ikinci program gibi durur.",
              "Ekran görüntüsü uygulamanın kendisinden olmalıdır. Metinde olmayan işi vadetme. İlk ret olabilir. Raporu oku, resmi ya da metni düzelt, yeniden gönder. Yanıltıcı sayfa ve çalışmayan ödeme hesabı kapatabilir.",
            ],
          },
        ],
      },
      {
        id: "huawei",
        title: "Hazır uygulamayı Huawei AppGallery'ye nasıl yüklersin?",
        blocks: [
          {
            paragraphs: [
              "Huawei'nin mağazası AppGallery'dir. Play Market'ten ayrı hesaptır. Google hesabı orada çalışmaz. Telefonuna attığın APK da kendi kendine mağazaya düşmez. AppGallery Connect'te uygulama açılır, imzalı dosya yüklenir, sayfa doldurulur ve incelemeye gönderilir.",
              "Play'e çıkmak Huawei'ye çıkmak demek değildir. Aynı paket adı olabilir, ama iki hesap, iki sayfa ve iki inceleme vardır. Biri bitince öteki kendi açılmaz.",
            ],
          },
          {
            heading: "Adımlar",
            ordered: true,
            paragraphs: ["Hesap doğrulanmadan dosya yüklenmez. Önce kimliği bitir, sonra paketi derle."],
            list: [
              "developer.huawei.com adresinde Huawei ID aç. Kişi ya da şirket olarak doğrulan. Kişisel hesapta kimlik belgesi, şirkette kayıt belgesi sorulur. Yoklama çoğu zaman bir ya da iki iş günü sürer.",
              "AppGallery Connect'te My apps, sonra yeni uygulama. Platform Android, cihaz telefon. Ad, ilk dil, paket adı ve kategori yaz. Paket adı ilk yüklemeden sonra değişmez ve uygulamanın içindeki applicationId ile aynı olmalıdır.",
              "Dosyayı seç. APK ve AAB ikisi de kabul edilebilir. APK'yı kendi anahtarınla imzalarsın. Bu yolda son imza sende kalır. AAB seçersen Huawei'nin App Signing hizmetine katılmalısın ve son imzayı onlar saklar.",
              "APK yolu şöyledir. Projenin android klasöründe ./gradlew assembleRelease. Dosya app/build/outputs/apk/release içinde durur. Anahtarı kaybetme. Sonraki güncelleme aynı anahtarla imzalanmalıdır.",
              "versionCode ve versionName mağazaya yazdığın sürümle üst üste gelmelidir. Her yeni dosyada versionCode büyür. Aynı sayı eskisinin yerine geçmez.",
              "Her dil için ad, kısa anlatım, uzun anlatım, ikon ve ekran görüntülerini doldur. Resimler uygulamanın kendi ekranı olsun. Boş ya da başka programdan kesilmiş resim ret sebebidir.",
              "Ülkeleri, ücretsiz ya da ücretli olduğunu ve gizlilik adresini yaz. Yaş derecesini anketle seç. Uygulamanın içinde sayısal mal satıyorsan Huawei'nin kendi uygulama içi ödemesi istenebilir.",
              "Göndermeden önce Huawei telefonunda ya da AppGallery'nin bulut testinde aç. Google'lı emülatör Huawei'de duran hatayı gizler.",
              "Sayfayı incelemeye gönder. Birkaç gün sürebilir. Ret yanıtı neyin eksik olduğunu yazar. Düzeltip aynı paket adı ve daha büyük versionCode ile yeniden gönder. İstersen incelemeden geçince hemen ya da seçtiğin saatte açılsın.",
            ],
          },
          {
            heading: "Google hizmeti Huawei'de yoktur",
            paragraphs: [
              "2019'un sonundan beri birçok Huawei telefonunda Google Play hizmeti yoktur. Google ile giriş, Google harita, Play Billing ve Firebase bildirimi o telefonlarda açılmaz. Bu parçaları gizle ya da Huawei'nin kendi hizmetiyle değiştir. İncelemeden geçen uygulama telefonda açılıp boş düğme gösterebilir. Bunun için bulut testi ya da gerçek bir Huawei telefonu gerekir.",
              "Uygulama yalnız sitenin penceresiyse ve Google kütüphanesi çağırmıyorsa, aynı sayfa AppGallery'de de açılabilir. Yine de release imzalı APK ya da AAB gerekir. Nibras Studio'nun debug dosyası mağaza dosyası değildir.",
              "İki mağaza iki izleyicidir. Play'deki kişi Huawei'de seni kendi görmez. Sayfanın metni, ikonu ve gizlilik adresi her mağazada ayrı doldurulur. Paket adını ikisinde de aynı tutmak güncellemeyi karıştırmaz, çünkü mağazalar birbirinin imzasını taşımaz. Her mağazada ilk dosyanın anahtarını kendi yerinde sakla.",
            ],
          },
        ],
      },
    ],
    ar: [
      {
        id: "play",
        title: "كيف ترفع التطبيق الجاهز إلى Play Market؟",
        blocks: [
          {
            paragraphs: [
              "Play Market هو Google Play. وضع APK على هاتفك عمل آخر. للوصول إلى المتجر يلزم حساب Play Console وAAB موقّع وصفحة مملوءة. ملف APK التجريبي من Nibras Studio لا يذهب إلى هناك. منذ أغسطس 2021 التطبيق الجديد يجب أن يكون AAB لا APK. AAB حزمة. المتجر يحوّلها إلى APK صغير حسب نوع الهاتف.",
              "العمل لا ينتهي في يوم. هناك فحص هوية ونص وصور وفي بعض الحسابات اختبار مغلق لمدة 14 يوماً. اجمع الملف أولاً ثم املأ الصفحة وفي الأخير أرسله للمراجعة.",
            ],
          },
          {
            heading: "الخطوات",
            ordered: true,
            paragraphs: ["الترتيب مهم. يمكن فتح تطبيق فارغ ورفع صورة، لكن زر الإنتاج يبقى مغلقاً حتى تنتهي النماذج."],
            list: [
              "افتح Play Console بحساب Google. الحساب الشخصي يُطلب منه وثيقة هوية. حساب المؤسسة يُطلب منه أوراق الشركة وغالباً رقم D-U-N-S. في الفتح رسم لمرة واحدة. المبلغ في صفحة التسجيل.",
              "اضغط Create app. اختر الاسم واللغة الأولى والتطبيق أو اللعبة والمجاني أو المدفوع. اسم الحزمة يُقفل مع أول AAB ولا يتغير بعد ذلك. يجب أن يطابق applicationId داخل التطبيق.",
              "اجمع AAB للإصدار. في Android Studio استعمل Generate Signed Bundle أو نفّذ ./gradlew bundleRelease في جذر المشروع. الملف عادة في app/build/outputs/bundle/release. احفظ المفتاح. إذا ضاع لا تستطيع وضع ملف جديد فوق التطبيق نفسه.",
              "الانضمام إلى Play App Signing قد يعني مفتاحين. مفتاح الرفع يبقى عندك ومفتاح توقيع المتجر عند Google. التحديث يجب أن يتبع قاعدتيهما. الملف المجمّع بمفتاح التجريب لا يذهب إلى المتجر.",
              "من 31 أغسطس 2026 تطبيق الهاتف الجديد والتحديث يجب أن يستهدفا API 36 أي Android 16. الهدف القديم يُرفض. targetSdk يُكتب في build.gradle.",
              "املأ صفحة المتجر. نص قصير ونص طويل وأيقونة 512 ونشرة 1024x500 ولقطات شاشة الهاتف والفئة وبريد التواصل. عنوان الخصوصية يجب أن يُفتح.",
              "أنهِ نماذج المحتوى. هل هناك إعلان وما البيانات التي تُجمع واستبيان العمر ولمن التطبيق. إذا كان للأطفال فالنماذج أشد. تطبيق الأخبار له إقرار خاص.",
              "اختر البلدان والسعر. يمكن أن يبقى مجانياً والدفع في الداخل. تحويل التثبيت المجاني إلى تثبيت مدفوع لاحقاً قد يكون صعباً.",
              "ضعه أولاً في الاختبار الداخلي. هذه قائمة بريدك وحتى 100 شخص. انظر أن الملف يُفتح. هذا المسار لا يُحسب في قاعدة الـ 12.",
              "ثم الاختبار المغلق. قائمة بريد أو Google Group. الحساب الشخصي المفتوح في 13 نوفمبر 2023 أو بعده يجب أن يُبقي 12 شخصاً على الأقل مسجّلين معاً 14 يوماً متتالية لكل تطبيق جديد. إذا خرج أحد يبدأ عدّه من جديد. التجميع الجديد لا يصفّر الأيام. حساب المؤسسة والحساب الشخصي من قبل ذلك التاريخ لا يصطدم بهذا الجدار.",
              "حين تنتهي الـ 14 يوماً اطلب إذن الإنتاج من Dashboard. اكتب عمل التطبيق الحقيقي في الأجوبة. الإذن غالباً يأخذ حتى أسبوع. الاختبار المفتوح يُفتح بعد هذا الإذن.",
              "بعد الإذن أرسل AAB في مسار الإنتاج. المراجعة قد تأخذ أياماً. الرفض يكتب السبب. أصلح وأعد الإرسال مع versionCode أكبر.",
            ],
          },
          {
            heading: "التحديث",
            paragraphs: [
              "الملف الجديد يحل محل التطبيق القديم فقط حين تجتمع ثلاثة أشياء. اسم الحزمة لا يتغير. التوقيع يوافق الإصدار السابق. versionCode أكبر. فتح تطبيق جديد باسم آخر لا ينقل المستخدمين القدامى. هو يقف في المتجر كبرنامج ثانٍ.",
              "لقطة الشاشة يجب أن تكون من التطبيق نفسه. لا تعد بعمل لا يفعله النص. الرفض الأول ممكن. اقرأ التقرير وأصلح الصورة أو النص وأعد الإرسال. الصفحة المضلِّلة والدفع الذي لا يعمل قد يغلقان الحساب.",
            ],
          },
        ],
      },
      {
        id: "huawei",
        title: "كيف ترفع التطبيق الجاهز إلى Huawei AppGallery؟",
        blocks: [
          {
            paragraphs: [
              "متجر Huawei هو AppGallery. حسابه منفصل عن Play Market. حساب Google لا يعمل هناك. APK الذي تضعه على هاتفك لا يسقط وحده في المتجر. يُفتح تطبيق في AppGallery Connect ويُرفع ملف موقّع وتُملأ الصفحة ويُرسل للمراجعة.",
              "الخروج على Play لا يعني الخروج على Huawei. اسم الحزمة قد يكون واحداً، لكن هناك حسابان وصفحتان ومراجعتان. حين ينتهي أحدهما لا يُفتح الآخر وحده.",
            ],
          },
          {
            heading: "الخطوات",
            ordered: true,
            paragraphs: ["لا يُرفع الملف قبل التحقق من الحساب. أنهِ الهوية أولاً ثم اجمع الحزمة."],
            list: [
              "افتح Huawei ID على developer.huawei.com. تحقّق كشخص أو كشركة. الحساب الشخصي يُطلب منه وثيقة هوية والشركة أوراق التسجيل. الفحص غالباً يأخذ يوماً أو يومي عمل.",
              "في AppGallery Connect افتح My apps ثم تطبيقاً جديداً. المنصة Android والجهاز هاتف. اكتب الاسم واللغة الأولى واسم الحزمة والفئة. اسم الحزمة لا يتغير بعد أول رفع ويجب أن يطابق applicationId داخل التطبيق.",
              "اختر الملف. يمكن قبول APK وAAB. توقّع APK بمفتاحك. في هذا الطريق يبقى التوقيع الأخير عندك. إذا اخترت AAB فيجب الانضمام إلى خدمة App Signing من Huawei وهم يحتفظون بالتوقيع الأخير.",
              "طريق APK هكذا. في مجلد android للمشروع نفّذ ./gradlew assembleRelease. الملف في app/build/outputs/apk/release. لا تُضع المفتاح. التحديث التالي يجب أن يُوقَّع بالمفتاح نفسه.",
              "versionCode وversionName يجب أن يطابقا الإصدار الذي تكتبه في المتجر. versionCode يكبر مع كل ملف جديد. العدد نفسه لا يحل محل القديم.",
              "لكل لغة املأ الاسم والشرح القصير والشرح الطويل والأيقونة ولقطات الشاشة. الصور تكون شاشة التطبيق نفسه. الصورة الفارغة أو المقصوصة من برنامج آخر سبب رفض.",
              "اكتب البلدان والمجاني أو المدفوع وعنوان الخصوصية. اختر درجة العمر بالاستبيان. إذا بعت سلعة رقمية داخل التطبيق فقد يُطلب دفع Huawei الداخلي.",
              "قبل الإرسال افتحه على هاتف Huawei أو في اختبار AppGallery السحابي. المحاكي الذي فيه Google يخفي الخطأ الذي يتوقف على Huawei.",
              "أرسل الصفحة للمراجعة. قد يأخذ أياماً. الرفض يكتب ما الناقص. أصلح وأعد الإرسال باسم الحزمة نفسه وversionCode أكبر. يمكن أن يُفتح فور المراجعة أو في ساعة تختارها.",
            ],
          },
          {
            heading: "خدمات Google غير موجودة على Huawei",
            paragraphs: [
              "منذ أواخر 2019 كثير من هواتف Huawei بلا خدمات Google Play. الدخول بـ Google وخرائط Google وPlay Billing وإشعارات Firebase لا تُفتح على تلك الهواتف. أخفِ هذه الأجزاء أو استبدلها بخدمة Huawei. التطبيق الذي يمر المراجعة قد يُفتح ويُظهر زراً فارغاً. لذلك يلزم الاختبار السحابي أو هاتف Huawei حقيقي.",
              "إذا كان التطبيق مجرد نافذة لموقعك ولا يستدعي مكتبة Google فالصفحة نفسها يمكن أن تُفتح على AppGallery أيضاً. ما زلت تحتاج APK أو AAB بتوقيع الإصدار. ملف التجريب من Nibras Studio ليس ملف متجر.",
              "المتجران جمهوران. الشخص على Play لا يراك على Huawei وحده. نص الصفحة والأيقونة وعنوان الخصوصية يُملأ في كل متجر على حدة. إبقاء اسم الحزمة واحداً في الاثنين لا يخلط التحديث لأن المتجرين لا يحملان توقيع بعضهما. احفظ مفتاح أول ملف في مكانه لكل متجر.",
            ],
          },
        ],
      },
    ],
    ru: [
      {
        id: "play",
        title: "Как загрузить готовое приложение в Play Market?",
        blocks: [
          {
            paragraphs: [
              "Play Market — это Google Play. Положить APK на свой телефон — другая работа. Чтобы выйти в магазин, нужны аккаунт Play Console, подписанный AAB и заполненная страница. Debug APK от Nibras Studio туда не идёт. С августа 2021 новое приложение должно быть AAB, а не APK. AAB — это пакет. Магазин превращает его в маленький APK под вид телефона.",
              "Работа не кончается за день. Есть проверка личности, текст, картинки и на части аккаунтов закрытый тест на 14 дней. Сначала собери файл, потом заполни страницу, в конце отправь на проверку.",
            ],
          },
          {
            heading: "Шаги",
            ordered: true,
            paragraphs: ["Порядок важен. Пустое приложение открыть и картинку загрузить можно, но кнопка production не откроется, пока формы не закончены."],
            list: [
              "Открой Play Console с аккаунтом Google. У личного аккаунта просят документ. У аккаунта организации — бумаги компании и часто номер D-U-N-S. При открытии есть разовый взнос. Сумму показывает страница регистрации.",
              "Нажми Create app. Выбери имя, первый язык, приложение или игра, бесплатно или платно. Имя пакета запирается первым AAB и потом не меняется. Оно должно совпасть с applicationId внутри приложения.",
              "Собери release AAB. В Android Studio это Generate Signed Bundle, либо ./gradlew bundleRelease в корне проекта. Файл обычно лежит в app/build/outputs/bundle/release. Храни ключ. Потеряешь — не положишь новый файл поверх того же приложения.",
              "В Play App Signing могут быть два ключа. Ключ загрузки остаётся у тебя, ключ подписи магазина — у Google. Обновление должно следовать обоим правилам. Файл, собранный отладочным ключом, в магазин не идёт.",
              "С 31 августа 2026 новое приложение для телефона и обновление должны целиться в API 36, то есть Android 16. Старую цель не принимают. targetSdk пишется в build.gradle.",
              "Заполни страницу магазина. Короткий текст, длинный текст, значок 512, картинка 1024x500, снимки экрана телефона, категория и почта для связи. Адрес политики должен открываться.",
              "Закончи формы содержания. Есть ли реклама, какие данные собираются, анкета возраста, для кого приложение. Если для детей, формы строже. У новостного приложения отдельное заявление.",
              "Выбери страны и цену. Можно оставить бесплатным и брать оплату внутри. Потом превратить бесплатную установку в платную бывает трудно.",
              "Сначала положи во внутренний тест. Это твой список почты, до 100 человек. Увидь, что файл открывается. Эта дорожка не считается в правиле 12 человек.",
              "Потом закрытый тест. Список почты или Google Group. Личный аккаунт, открытый 13 ноября 2023 или позже, для каждого нового приложения должен держать минимум 12 человек одновременно 14 дней подряд. Если один вышел, его счёт начинается заново. Новая сборка дни не обнуляет. Аккаунт организации и личный аккаунт до этой даты в эту стену не упираются.",
              "Когда 14 дней кончатся, попроси доступ к production с Dashboard. В ответах напиши настоящую работу приложения. Доступ часто занимает до недели. Открытый тест открывается после этого доступа.",
              "После доступа отправь AAB на дорожке production. Проверка может занять несколько дней. Отказ пишет причину. Исправь и отправь снова с большим versionCode.",
            ],
          },
          {
            heading: "Обновление",
            paragraphs: [
              "Новый файл встаёт на место старого приложения, только когда сходятся три вещи. Имя пакета не меняется. Подпись совпадает с прошлым release. versionCode больше. Новое приложение под другим именем старых пользователей не переносит. Оно стоит в магазине второй программой.",
              "Снимок экрана должен быть из самого приложения. Не обещай работу, которой нет в тексте. Первый отказ бывает. Прочитай отчёт, поправь картинку или текст и отправь снова. Обманная страница и оплата, которая не работает, могут закрыть аккаунт.",
            ],
          },
        ],
      },
      {
        id: "huawei",
        title: "Как загрузить готовое приложение в Huawei AppGallery?",
        blocks: [
          {
            paragraphs: [
              "Магазин Huawei — это AppGallery. Это отдельный аккаунт от Play Market. Аккаунт Google там не работает. APK, который ты положил на свой телефон, сам в магазин не падает. В AppGallery Connect открывают приложение, загружают подписанный файл, заполняют страницу и отправляют на проверку.",
              "Выйти в Play не значит выйти в Huawei. Имя пакета может быть тем же, но аккаунтов два, страниц две и проверок две. Когда одно кончается, другое само не открывается.",
            ],
          },
          {
            heading: "Шаги",
            ordered: true,
            paragraphs: ["Файл не загружается, пока аккаунт не проверен. Сначала закончи личность, потом собери пакет."],
            list: [
              "Открой Huawei ID на developer.huawei.com. Проверься как человек или как компания. У личного аккаунта просят документ, у компании — регистрационные бумаги. Проверка часто занимает один или два рабочих дня.",
              "В AppGallery Connect открой My apps, потом новое приложение. Платформа Android, устройство телефон. Напиши имя, первый язык, имя пакета и категорию. Имя пакета после первой загрузки не меняется и должно совпасть с applicationId внутри приложения.",
              "Выбери файл. Можно отдать и APK, и AAB. APK подписываешь своим ключом. На этом пути последняя подпись остаётся у тебя. Если выбираешь AAB, надо войти в службу App Signing от Huawei, и последнюю подпись хранят они.",
              "Путь APK такой. В папке android проекта выполни ./gradlew assembleRelease. Файл лежит в app/build/outputs/apk/release. Ключ не теряй. Следующее обновление должно быть подписано тем же ключом.",
              "versionCode и versionName должны совпасть с версией, которую пишешь в магазине. versionCode растёт с каждым новым файлом. То же число на место старого не встаёт.",
              "Для каждого языка заполни имя, короткий текст, длинный текст, значок и снимки экрана. Картинки должны быть экраном самого приложения. Пустая картинка или вырезанная из другой программы — причина отказа.",
              "Напиши страны, бесплатно или платно, и адрес политики. Возрастной рейтинг выбери анкетой. Если продаёшь цифровой товар внутри приложения, могут потребовать внутреннюю оплату Huawei.",
              "Перед отправкой открой на телефоне Huawei или в облачном тесте AppGallery. Эмулятор с Google прячет ошибку, которая останавливается на Huawei.",
              "Отправь страницу на проверку. Это может занять несколько дней. Отказ пишет, чего не хватает. Исправь и отправь снова с тем же именем пакета и большим versionCode. Можно открыть сразу после проверки или в выбранный час.",
            ],
          },
          {
            heading: "Служб Google на Huawei нет",
            paragraphs: [
              "С конца 2019 на многих телефонах Huawei нет служб Google Play. Вход через Google, карты Google, Play Billing и уведомления Firebase на этих телефонах не открываются. Спрячь эти части или замени службой самой Huawei. Приложение, которое прошло проверку, может открыться и показать пустую кнопку. Поэтому нужен облачный тест или настоящий телефон Huawei.",
              "Если приложение только окно твоего сайта и не вызывает библиотеку Google, та же страница может открыться и в AppGallery. Всё равно нужен APK или AAB с подписью release. Debug-файл от Nibras Studio — не файл магазина.",
              "Два магазина — две аудитории. Человек в Play сам не видит тебя в Huawei. Текст страницы, значок и адрес политики заполняются в каждом магазине отдельно. Одинаковое имя пакета в обоих не смешивает обновления, потому что магазины не носят подпись друг друга. Ключ первого файла храни в своём месте для каждого магазина.",
            ],
          },
        ],
      },
    ],
  };
  return all[lang];
}
