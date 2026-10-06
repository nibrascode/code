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
  return [...all[lang], rejectSection(lang)];
}

function rejectSection(lang: Lang): ProgrammingSection {
  const sections: Record<Lang, ProgrammingSection> = {
    az: {
      id: "reject",
      title: "Hansı hallarda tətbiq təsdiqlənməyə bilər?",
      blocks: [
        {
          paragraphs: [
            "Mağaza faylı açıldığı üçün yox, qaydaya uyğun olmadığı üçün rədd edə bilər. Rədd həmişə hesabı bağlamır. Cavabda səbəb yazılır. Onu düzəldib eyni paket adı və daha böyük versionCode ilə yenidən göndərmək olar. Eyni səhvi ikinci dəfə göndərmək yoxlamanı uzadır. Yanıltmaq isə hesabı riskə qoyur.",
            "Play və Huawei eyni sözü işlətmir, amma rəddin kökü oxşardır. Səhifə yalan danışır, tətbiq açılmır, icazə izah olunmur və ya fayl mağazanın istədiyi yığım deyil. Aşağıdakı hallar ən çox rast gələnlərdir.",
          ],
        },
        {
          heading: "Səhifə tətbiqlə uyğun gəlmir",
          paragraphs: [
            "Yoxlayan əvvəl mağaza səhifəsinə baxır, sonra tətbiqi açır. İkisi eyni işi demirsə, rədd gəlir. Ekran şəkli başqa proqramdan kəsilibsə, ikon başqa markanın işarəsidirsə və ya mətndə olmayan düymə vəd olunursa, səhifə yalan sayılır.",
          ],
          list: [
            "Qısa və uzun mətn boşdur, başqa tətbiqdən köçürülüb və ya yalnız açar söz yığınıdır.",
            "Ekran şəkilləri tətbiqin öz ekranı deyil. Ölçü səhvdir və ya şəkil bulanıqdır.",
            "Adda «rəsmi», «ən yaxşı» və ya başqa şirkətin adı var, sən həmin şirkət deyilsən.",
            "Məxfilik ünvanı açılmır, boş səhifədir və ya tətbiqin yığdığı məlumatı demir.",
            "Dil qarışıqdır. Səhifə bir dildədir, tətbiqin içi başqa dildədir və yoxlayan işi başa düşmür.",
            "Kateqoriya səhvdir. Oyun alət kimi, uşaq tətbiqi isə böyük üçün kimi yazılır.",
          ],
        },
        {
          heading: "Tətbiq açılmır və ya boşdur",
          paragraphs: [
            "Yoxlayan bir neçə dəqiqə içində əsas işi görməlidir. İlk ekranda çökən, ağ qalan və ya düyməsi heç nə etməyən fayl təsdiqlənmir. Sənin telefonunda açılması bəs etmir. Onların test cihazında da açılmalıdır.",
          ],
          list: [
            "Açılışda xəta verir və ya dərhal bağlanır.",
            "Giriş istəyir, amma yoxlayan üçün test adı və şifrəsi qeyddə yazılmayıb. Öz hesabın olmadan içəri baxa bilmir.",
            "Server sönükdür. Siyahı boşdur, şəkil gəlmir və səhifə dayanır.",
            "Düymə basılanda heç bir cavab yoxdur. Forma göndərilmir.",
            "İcazə sorğusu əsassızdır. Kamera istəyirsən, amma kameradan istifadə edən ekran yoxdur.",
          ],
        },
        {
          heading: "Yalnız sayt pəncərəsidir",
          paragraphs: [
            "Google Play sadəcə bir saytı pəncərəyə qoyan tətbiqi tez-tez rədd edir. İçində bildiriş, telefonda saxlanan iş, kamera və ya səhifədən artıq bir düymə yoxdursa, yoxlayan bunu ayrıca tətbiq saymaya bilər. Saytın ünvanını brauzerdə açmaq eyni işi görürsə, mağaza faylı artıq sayır.",
            "Huawei də boş pəncərəni və açılmayan ünvanı rədd edə bilər. Saytın özü doludursa və telefonda işləyirsə, şans daha yüksəkdir, amma zəmanət deyil. Nibras Studio-nun debug APK-sı bu yoxlamaya göndərilmir. Mağazaya release yığım lazımdır.",
            "Pəncərəni tətbiq etmək istəyirsənsə, ən azı bir telefon işi əlavə et. Son açılan səhifəni saxla, bildiriş göndər və ya kameradan bir şəkil al. Bunu etmədən göndərmək rədd riskini böyüdür.",
          ],
        },
        {
          heading: "Məlumat, reklam və pul",
          paragraphs: [
            "Forma ilə tətbiqin içi üst-üstə düşməlidir. Data safety anketində «heç nə yığmıram» deyib hesab və reklam nömrəsi saxlamaq rədd səbəbidir. Məxfilik səhifəsi həmin siyahını açıq yazmalıdır.",
          ],
          list: [
            "Rəqəmsal mal mağazanın öz ödənişindən keçmir. Play üçün Play Billing, Huawei üçün onun tətbiq içi ödənişi gözlənilir.",
            "Abunə gizlidir. Qiymət və nə vaxt yeniləndiyi düymənin yanında yoxdur.",
            "Reklam bağlanmır, sistem xəbərdarlığı kimi görünür və ya əsas düymənin üstünü örtür.",
            "Uşaqlar üçün deyirsən, amma böyüklər üçün reklam və alış var. Yaş qrupu səhv seçilib.",
            "İzləmə razılığı soruşulmur, halbuki reklam şəbəkəsi bunu istəyir.",
          ],
        },
        {
          heading: "Başqasının adı və faylın özü",
          paragraphs: [
            "Sənə aid olmayan ad, ikon, musiqi, şəkil və ya mətn təsdiqi dayandırır. Başqa tətbiqin ekranını öz adına qoymaq həm rədd, həm də hesab riskidir. Öz ekranını çək.",
          ],
          list: [
            "Debug imza. Mağaza yoxlama açarını son buraxılış kimi qəbul etmir.",
            "Köhnə targetSdk. 31 avqust 2026-dan telefon tətbiqi API 36 hədəfləməlidir. Aşağı hədəf faylı geri qaytarır.",
            "Yeniləmədə versionCode böyümür və ya paket adı əvvəlki faylla uyğun gəlmir.",
            "Açar əvvəlki release ilə eyni deyil. Mağaza bunu yeni tətbiq və ya pozulmuş yeniləmə sayır.",
            "Huawei-də Google kitabxanası açılışı çökdürür. Xəritə, Google giriş və ya Play bildirişi olmayan telefonda boş və ya qapalı ekran qalır.",
          ],
        },
        {
          heading: "Rədd gələndə nə etməli",
          paragraphs: [
            "Hesabatı axıra qədər oxu. Çox vaxt bir sətir deyil, bir neçə bənd olur. Hamısını düzəlt, birini buraxıb yenidən göndərmə. Ekran şəklini tətbiqin özündən yenə çək. Məxfilik səhifəsini telefonda və kompüterdə açılıb-açılmadığını yoxla. Test hesabını qeyd sahəsinə yaz.",
            "Düzəlişdən sonra öz telefonunda və bir başqa telefonda aç. Huawei üçündürsə, Google-suz cihazda və ya bulud testində aç. Sonra daha böyük versionCode ilə göndər. Üç dəfə eyni səbəblə qayıdırsa, mətnini qısalt və vəd etdiyin işi tətbiqdən çıxar. Olmayan düyməni səhifədə saxlamaq növbəti rəddi gətirir.",
          ],
        },
      ],
    },
    en: {
      id: "reject",
      title: "When can an app be refused?",
      blocks: [
        {
          paragraphs: [
            "A store can refuse a file not because it opened, but because it does not follow the rule. A refusal does not always close the account. The reply writes the reason. You can fix it and send again with the same package name and a higher versionCode. Sending the same mistake twice makes the review longer. Misleading the store puts the account at risk.",
            "Play and Huawei do not use the same words, but the root is similar. The page lies, the app does not open, a permission is not explained, or the file is not the build the store asked for. The cases below are the ones that happen most.",
          ],
        },
        {
          heading: "The page does not match the app",
          paragraphs: [
            "The reviewer looks at the store page first, then opens the app. If the two do not describe the same job, a refusal comes. A screenshot cut from another program, an icon that is another brand's mark, or a button promised in the text but missing in the app makes the page a lie.",
          ],
          list: [
            "The short and long text are empty, copied from another app, or only a pile of keywords.",
            "The screenshots are not the app's own screen. The size is wrong or the picture is blurry.",
            "The name says official, best, or another company's name, and you are not that company.",
            "The privacy address does not open, the page is empty, or it does not say what the app collects.",
            "The language is mixed. The page is in one language, the inside of the app is in another, and the reviewer cannot follow the job.",
            "The category is wrong. A game is filed as a tool, or a children's app is filed as one for adults.",
          ],
        },
        {
          heading: "The app does not open, or it is empty",
          paragraphs: [
            "The reviewer should see the main job within a few minutes. A file that crashes on the first screen, stays white, or has a button that does nothing is not approved. Opening on your phone is not enough. It has to open on their test device too.",
          ],
          list: [
            "It errors on open or closes at once.",
            "It asks for a login, but a test name and password are not written in the notes. They cannot look inside without your account.",
            "The server is down. The list is empty, the picture does not arrive, and the page stops.",
            "A press on the button gets no answer. The form is not sent.",
            "The permission request has no reason. You ask for the camera, but no screen uses it.",
          ],
        },
        {
          heading: "It is only a window onto a site",
          paragraphs: [
            "Google Play often refuses an app that only puts a site in a window. If there is no notification, no job saved on the phone, no camera, and no button beyond the page, the reviewer may not count it as its own app. If opening the site's address in a browser does the same job, the store treats the file as extra.",
            "Huawei can also refuse an empty window and an address that does not open. If the site itself is full and works on a phone, the chance is higher, but it is not a promise. The debug APK from Nibras Studio is not sent to this review. The store needs a release build.",
            "If you want the window to become an app, add at least one phone job. Save the last opened page, send a notification, or take one picture from the camera. Sending it without that raises the chance of a refusal.",
          ],
        },
        {
          heading: "Data, ads, and money",
          paragraphs: [
            "The form and the inside of the app must match. Saying \"I collect nothing\" on the data safety form while the app keeps an account and an ad number is a reason for refusal. The privacy page must write that list in the open.",
          ],
          list: [
            "A digital good does not pass through the store's own payment. Play expects Play Billing. Huawei expects its in-app payment.",
            "The subscription is hidden. The price and the renewal are not next to the button.",
            "An ad cannot be closed, looks like a system warning, or covers the main button.",
            "You say it is for children, but there are adult ads and purchases. The age group is wrong.",
            "Tracking consent is not asked, while the ad network requires it.",
          ],
        },
        {
          heading: "Someone else's name, and the file itself",
          paragraphs: [
            "A name, icon, song, picture, or text that is not yours stops approval. Putting another app's screen under your name is both a refusal and a risk to the account. Shoot your own screen.",
          ],
          list: [
            "A debug signature. The store does not take a test key as the final release.",
            "An old targetSdk. From 31 August 2026 a phone app must target API 36. A lower target sends the file back.",
            "On an update versionCode does not rise, or the package name does not match the previous file.",
            "The key is not the same as the previous release. The store treats this as a new app or a broken update.",
            "On Huawei a Google library crashes the open. A phone without maps, Google sign-in, or Play notifications is left with an empty or closed screen.",
          ],
        },
        {
          heading: "What to do when a refusal comes",
          paragraphs: [
            "Read the report to the end. It is often several points, not one line. Fix all of them. Do not leave one and send again. Shoot the screenshot from the app again. Open the privacy page on a phone and on a computer. Write the test account in the notes field.",
            "After the fix, open it on your phone and on one other phone. If it is for Huawei, open it on a device without Google or in the cloud test. Then send it with a higher versionCode. If it comes back three times for the same reason, shorten the text and remove the job you promised but the app does not do. Keeping a missing button on the page brings the next refusal.",
          ],
        },
      ],
    },
    tr: {
      id: "reject",
      title: "Uygulama hangi hallerde onaylanmayabilir?",
      blocks: [
        {
          paragraphs: [
            "Mağaza dosyayı açıldığı için değil, kurala uymadığı için reddedebilir. Ret her zaman hesabı kapatmaz. Yanıtta sebep yazar. Onu düzeltip aynı paket adı ve daha büyük versionCode ile yeniden göndermek olur. Aynı hatayı ikinci kez göndermek incelemeyi uzatır. Yanıltmak ise hesabı riske koyar.",
            "Play ve Huawei aynı sözü kullanmaz, ama reddin kökü benzerdir. Sayfa yalan söyler, uygulama açılmaz, izin açıklanmaz ya da dosya mağazanın istediği derleme değildir. Aşağıdaki haller en sık görülenlerdir.",
          ],
        },
        {
          heading: "Sayfa uygulamayla uyuşmaz",
          paragraphs: [
            "İnceleyen önce mağaza sayfasına bakar, sonra uygulamayı açar. İkisi aynı işi demiyorsa ret gelir. Ekran görüntüsü başka programdan kesildiyse, ikon başka markanın işaretiyse ya da metinde olmayan düğme vadeliyorsa sayfa yalan sayılır.",
          ],
          list: [
            "Kısa ve uzun metin boştur, başka uygulamadan kopyalanmıştır ya da yalnız anahtar söz yığınıdır.",
            "Ekran görüntüleri uygulamanın kendi ekranı değildir. Ölçü yanlıştır ya da resim bulanıktır.",
            "Adında resmi, en iyi ya da başka şirketin adı vardır, sen o şirket değilsin.",
            "Gizlilik adresi açılmaz, sayfa boştur ya da uygulamanın topladığı veriyi söylemez.",
            "Dil karışıktır. Sayfa bir dildedir, uygulamanın içi başka dildedir ve inceleyen işi anlamaz.",
            "Kategori yanlıştır. Oyun araç gibi, çocuk uygulaması ise büyükler için gibi yazılır.",
          ],
        },
        {
          heading: "Uygulama açılmaz ya da boştur",
          paragraphs: [
            "İnceleyen birkaç dakika içinde ana işi görmelidir. İlk ekranda çöken, ak kalan ya da düğmesi hiçbir şey yapmayan dosya onaylanmaz. Senin telefonunda açılması yetmez. Onların test cihazında da açılmalıdır.",
          ],
          list: [
            "Açılışta hata verir ya da hemen kapanır.",
            "Giriş ister, ama inceleyen için deneme adı ve parolası notta yazılmamıştır. Kendi hesabın olmadan içeri bakamaz.",
            "Sunucu kapalıdır. Liste boştur, resim gelmez ve sayfa durur.",
            "Düğmeye basılınca hiçbir cevap yoktur. Form gönderilmez.",
            "İzin isteği gerekçesizdir. Kamera istersin, ama kamerayı kullanan ekran yoktur.",
          ],
        },
        {
          heading: "Yalnızca site penceresidir",
          paragraphs: [
            "Google Play yalnızca bir siteyi pencereye koyan uygulamayı sık sık reddeder. İçinde bildirim, telefonda saklanan iş, kamera ya da sayfadan fazla bir düğme yoksa inceleyen bunu ayrı uygulama saymayabilir. Sitenin adresini tarayıcıda açmak aynı işi görüyorsa mağaza dosyayı fazla sayar.",
            "Huawei de boş pencereyi ve açılmayan adresi reddedebilir. Sitenin kendisi doluysa ve telefonda çalışıyorsa şans daha yüksektir, ama söz değildir. Nibras Studio'nun debug APK'sı bu incelemeye gönderilmez. Mağazaya release derleme gerekir.",
            "Pencereyi uygulama yapmak istiyorsan en az bir telefon işi ekle. Son açılan sayfayı sakla, bildirim gönder ya da kameradan bir resim al. Bunu etmeden göndermek ret riskini büyütür.",
          ],
        },
        {
          heading: "Veri, reklam ve para",
          paragraphs: [
            "Form ile uygulamanın içi üst üste gelmelidir. Data safety anketinde «hiçbir şey toplamıyorum» deyip hesap ve reklam numarası saklamak ret sebebidir. Gizlilik sayfası o listeyi açık yazmalıdır.",
          ],
          list: [
            "Sayısal mal mağazanın kendi ödemesinden geçmez. Play için Play Billing, Huawei için onun uygulama içi ödemesi beklenir.",
            "Abonelik gizlidir. Fiyat ve ne zaman yenilendiği düğmenin yanında yoktur.",
            "Reklam kapanmaz, sistem uyarısı gibi görünür ya da ana düğmenin üstünü örter.",
            "Çocuklar için dersin, ama büyükler için reklam ve alış vardır. Yaş grubu yanlış seçilmiştir.",
            "İzleme onayı sorulmaz, oysa reklam ağı bunu ister.",
          ],
        },
        {
          heading: "Başkasının adı ve dosyanın kendisi",
          paragraphs: [
            "Sana ait olmayan ad, ikon, müzik, resim ya da metin onayı durdurur. Başka uygulamanın ekranını kendi adına koymak hem ret hem hesap riskidir. Kendi ekranını çek.",
          ],
          list: [
            "Debug imza. Mağaza yoklama anahtarını son sürüm olarak kabul etmez.",
            "Eski targetSdk. 31 Ağustos 2026'dan telefon uygulaması API 36 hedeflemelidir. Düşük hedef dosyayı geri çevirir.",
            "Güncellemede versionCode büyümez ya da paket adı önceki dosyayla uyuşmaz.",
            "Anahtar önceki release ile aynı değildir. Mağaza bunu yeni uygulama ya da bozuk güncelleme sayar.",
            "Huawei'de Google kütüphanesi açılışı çökertir. Harita, Google girişi ya da Play bildirimi olmayan telefonda boş ya da kapalı ekran kalır.",
          ],
        },
        {
          heading: "Ret gelince ne yapmalı",
          paragraphs: [
            "Raporu sonuna kadar oku. Çoğu zaman bir satır değil, birkaç maddedir. Hepsini düzelt, birini bırakıp yeniden gönderme. Ekran görüntüsünü uygulamanın kendisinden yeniden çek. Gizlilik sayfasının telefonda ve bilgisayarda açıldığını yokla. Deneme hesabını not alanına yaz.",
            "Düzeltmeden sonra kendi telefonunda ve bir başka telefonda aç. Huawei içinse Google'suz cihazda ya da bulut testinde aç. Sonra daha büyük versionCode ile gönder. Üç kez aynı sebeple dönerse metnini kısalt ve vadettiğin ama uygulamanın yapmadığı işi çıkar. Olmayan düğmeyi sayfada tutmak sonraki reddi getirir.",
          ],
        },
      ],
    },
    ar: {
      id: "reject",
      title: "في أي حال قد لا يُوافَق على التطبيق؟",
      blocks: [
        {
          paragraphs: [
            "المتجر قد يرفض الملف لا لأنه فُتح بل لأنه لا يتبع القاعدة. الرفض لا يغلق الحساب دائماً. الرد يكتب السبب. يمكن إصلاحه وإعادة الإرسال باسم الحزمة نفسه وversionCode أكبر. إرسال الخطأ نفسه مرة ثانية يطيل المراجعة. التضليل يضع الحساب في خطر.",
            "Play وHuawei لا يستعملان الكلمة نفسها، لكن جذر الرفض متشابه. الصفحة تكذب أو التطبيق لا يُفتح أو الصلاحية غير مشروحة أو الملف ليس التجميع الذي طلبه المتجر. الحالات أدناه هي الأكثر.",
          ],
        },
        {
          heading: "الصفحة لا تطابق التطبيق",
          paragraphs: [
            "المراجع ينظر إلى صفحة المتجر أولاً ثم يفتح التطبيق. إذا لم يصفا العمل نفسه يأتي الرفض. لقطة مقصوصة من برنامج آخر أو أيقونة هي علامة ماركة أخرى أو زر موعود في النص وليس في التطبيق تجعل الصفحة كذباً.",
          ],
          list: [
            "النص القصير والطويل فارغان أو منسوخان من تطبيق آخر أو مجرد كومة كلمات مفتاح.",
            "لقطات الشاشة ليست شاشة التطبيق نفسه. المقاس خطأ أو الصورة مشوشة.",
            "في الاسم «رسمي» أو «الأفضل» أو اسم شركة أخرى وأنت لست تلك الشركة.",
            "عنوان الخصوصية لا يُفتح أو الصفحة فارغة أو لا تقول ماذا يجمع التطبيق.",
            "اللغة مختلطة. الصفحة بلغة وداخل التطبيق بلغة أخرى والمراجع لا يفهم العمل.",
            "الفئة خطأ. اللعبة تُكتب كأداة وتطبيق الأطفال كأنه للكبار.",
          ],
        },
        {
          heading: "التطبيق لا يُفتح أو فارغ",
          paragraphs: [
            "يجب أن يرى المراجع العمل الرئيسي خلال دقائق. الملف الذي يسقط في الشاشة الأولى أو يبقى أبيض أو زرّه لا يفعل شيئاً لا يُوافَق عليه. فتحه على هاتفك لا يكفي. يجب أن يُفتح على جهاز الاختبار عندهم أيضاً.",
          ],
          list: [
            "يعطي خطأ عند الفتح أو يُغلق فوراً.",
            "يطلب دخولاً لكن اسم التجربة وكلمة المرور غير مكتوبين في الملاحظة. لا يستطيع النظر إلى الداخل بلا حسابك.",
            "الخادم مطفأ. القائمة فارغة والصورة لا تأتي والصفحة تقف.",
            "الضغط على الزر بلا جواب. النموذج لا يُرسل.",
            "طلب الصلاحية بلا سبب. تطلب الكاميرا ولا توجد شاشة تستعملها.",
          ],
        },
        {
          heading: "مجرد نافذة موقع",
          paragraphs: [
            "Google Play غالباً يرفض تطبيقاً يضع موقعاً في نافذة فقط. إذا لم يكن فيه إشعار ولا عمل محفوظ على الهاتف ولا كاميرا ولا زر زائد على الصفحة فقد لا يحسبه المراجع تطبيقاً مستقلاً. إذا كان فتح عنوان الموقع في المتصفح يؤدي العمل نفسه فالمتجر يعدّ الملف زيادة.",
            "Huawei أيضاً قد يرفض النافذة الفارغة والعنوان الذي لا يُفتح. إذا كان الموقع نفسه مليئاً ويعمل على الهاتف فالفرصة أعلى لكنها ليست وعداً. ملف APK التجريبي من Nibras Studio لا يُرسل إلى هذه المراجعة. المتجر يحتاج تجميع إصدار.",
            "إذا أردت أن تصير النافذة تطبيقاً فأضف عملاً واحداً على الأقل للهاتف. احفظ آخر صفحة فُتحت أو أرسل إشعاراً أو خذ صورة واحدة من الكاميرا. الإرسال بلا ذلك يكبّر خطر الرفض.",
          ],
        },
        {
          heading: "البيانات والإعلان والمال",
          paragraphs: [
            "النموذج وداخل التطبيق يجب أن يتطابقا. قول «لا أجمع شيئاً» في نموذج سلامة البيانات مع حفظ حساب ورقم إعلان سبب رفض. صفحة الخصوصية يجب أن تكتب تلك القائمة علناً.",
          ],
          list: [
            "السلعة الرقمية لا تمر بدفع المتجر نفسه. Play ينتظر Play Billing وHuawei ينتظر دفعه الداخلي.",
            "الاشتراك مخفي. السعر وموعد التجدد ليسا بجانب الزر.",
            "الإعلان لا يُغلق أو يبدو كتحذير النظام أو يغطّي الزر الرئيسي.",
            "تقول إنه للأطفال وفيه إعلان وشراء للكبار. فئة العمر مختارة خطأ.",
            "موافقة التتبع لا تُسأل بينما شبكة الإعلان تطلبها.",
          ],
        },
        {
          heading: "اسم غيرك والملف نفسه",
          paragraphs: [
            "اسم أو أيقونة أو موسيقى أو صورة أو نص ليس لك يوقف الموافقة. وضع شاشة تطبيق آخر باسمك رفض وخطر على الحساب. صوّر شاشتك.",
          ],
          list: [
            "توقيع تجريبي. المتجر لا يقبل مفتاح الاختبار كإصدار أخير.",
            "targetSdk قديم. من 31 أغسطس 2026 تطبيق الهاتف يجب أن يستهدف API 36. الهدف الأدنى يعيد الملف.",
            "في التحديث versionCode لا يكبر أو اسم الحزمة لا يطابق الملف السابق.",
            "المفتاح ليس هو مفتاح الإصدار السابق. المتجر يحسب هذا تطبيقاً جديداً أو تحديثاً مكسوراً.",
            "على Huawei مكتبة Google تُسقط الفتح. الهاتف بلا خرائط أو دخول Google أو إشعارات Play يبقى بشاشة فارغة أو مغلقة.",
          ],
        },
        {
          heading: "ماذا تفعل حين يأتي الرفض",
          paragraphs: [
            "اقرأ التقرير حتى آخره. غالباً عدة بنود لا سطر واحد. أصلحها كلها ولا تترك واحداً وتعيد الإرسال. صوّر لقطة الشاشة من التطبيق من جديد. افتح صفحة الخصوصية على الهاتف وعلى الحاسوب. اكتب حساب التجربة في حقل الملاحظة.",
            "بعد الإصلاح افتحه على هاتفك وعلى هاتف آخر. إذا كان لـ Huawei فافتحه على جهاز بلا Google أو في الاختبار السحابي. ثم أرسله مع versionCode أكبر. إذا عاد ثلاث مرات للسبب نفسه فقصّر النص واحذف العمل الذي وعدته والتطبيق لا يفعله. إبقاء زر غير موجود في الصفحة يأتي بالرفض التالي.",
          ],
        },
      ],
    },
    ru: {
      id: "reject",
      title: "В каких случаях приложение могут не одобрить?",
      blocks: [
        {
          paragraphs: [
            "Магазин может отказать не потому, что файл открылся, а потому что он не следует правилу. Отказ не всегда закрывает аккаунт. В ответе пишут причину. Её можно исправить и отправить снова с тем же именем пакета и большим versionCode. Вторая отправка той же ошибки удлиняет проверку. Обман ставит аккаунт под риск.",
            "Play и Huawei не говорят одними словами, но корень отказа похож. Страница лжёт, приложение не открывается, разрешение не объяснено или файл — не та сборка, которую просил магазин. Ниже случаи, которые встречаются чаще всего.",
          ],
        },
        {
          heading: "Страница не совпадает с приложением",
          paragraphs: [
            "Проверяющий сначала смотрит страницу магазина, потом открывает приложение. Если они не говорят об одной работе, приходит отказ. Снимок, вырезанный из другой программы, значок чужой марки или кнопка, обещанная в тексте и отсутствующая в приложении, делают страницу ложью.",
          ],
          list: [
            "Короткий и длинный текст пустые, скопированы из другого приложения или это только куча ключевых слов.",
            "Снимки экрана — не экран самого приложения. Размер неверный или картинка мутная.",
            "В имени есть «официальное», «лучшее» или имя чужой компании, а ты не эта компания.",
            "Адрес политики не открывается, страница пустая или не говорит, что приложение собирает.",
            "Язык смешан. Страница на одном языке, внутри приложения другой, и проверяющий не понимает работу.",
            "Категория неверная. Игра записана как инструмент, а детское приложение — как для взрослых.",
          ],
        },
        {
          heading: "Приложение не открывается или пустое",
          paragraphs: [
            "Проверяющий должен увидеть главную работу за несколько минут. Файл, который падает на первом экране, остаётся белым или имеет кнопку, которая ничего не делает, не одобряют. Открытия на твоём телефоне мало. Он должен открыться и на их тестовом устройстве.",
          ],
          list: [
            "При открытии даёт ошибку или сразу закрывается.",
            "Просит вход, но пробное имя и пароль не написаны в заметке. Без твоего аккаунта внутрь не заглянуть.",
            "Сервер выключен. Список пуст, картинка не приходит, страница стоит.",
            "Нажатие на кнопку не даёт ответа. Форма не уходит.",
            "Запрос разрешения без причины. Просишь камеру, а экрана, который ею пользуется, нет.",
          ],
        },
        {
          heading: "Это только окно сайта",
          paragraphs: [
            "Google Play часто отказывает приложению, которое лишь кладёт сайт в окно. Если нет уведомления, работы, сохранённой на телефоне, камеры и кнопки сверх страницы, проверяющий может не счесть это отдельным приложением. Если открыть адрес сайта в браузере — та же работа, магазин считает файл лишним.",
            "Huawei тоже может отказать пустому окну и адресу, который не открывается. Если сам сайт полный и работает на телефоне, шанс выше, но это не обещание. Debug APK от Nibras Studio на эту проверку не отправляют. Магазину нужна сборка release.",
            "Если хочешь сделать из окна приложение, добавь хотя бы одну телефонную работу. Сохрани последнюю открытую страницу, пошли уведомление или возьми одну картинку с камеры. Отправка без этого повышает шанс отказа.",
          ],
        },
        {
          heading: "Данные, реклама и деньги",
          paragraphs: [
            "Форма и нутро приложения должны совпасть. Фраза «ничего не собираю» в анкете безопасности данных при сохранённом аккаунте и номере рекламы — причина отказа. Страница политики должна написать этот список открыто.",
          ],
          list: [
            "Цифровой товар не проходит через оплату самого магазина. Play ждёт Play Billing, Huawei — свою внутреннюю оплату.",
            "Подписка спрятана. Цена и срок обновления не стоят рядом с кнопкой.",
            "Рекламу нельзя закрыть, она выглядит как системное предупреждение или закрывает главную кнопку.",
            "Пишешь, что для детей, а внутри взрослая реклама и покупки. Возрастная группа выбрана неверно.",
            "Согласие на слежение не спрашивают, хотя рекламная сеть этого требует.",
          ],
        },
        {
          heading: "Чужое имя и сам файл",
          paragraphs: [
            "Чужое имя, значок, музыка, картинка или текст останавливают одобрение. Положить экран чужого приложения под своё имя — и отказ, и риск для аккаунта. Сними свой экран.",
          ],
          list: [
            "Отладочная подпись. Магазин не берёт тестовый ключ как окончательный выпуск.",
            "Старый targetSdk. С 31 августа 2026 приложение для телефона должно целиться в API 36. Более низкая цель возвращает файл.",
            "В обновлении versionCode не растёт или имя пакета не совпадает с прошлым файлом.",
            "Ключ не тот, что у прошлого release. Магазин считает это новым приложением или сломанным обновлением.",
            "На Huawei библиотека Google роняет открытие. Телефон без карт, входа Google или уведомлений Play остаётся с пустым или закрытым экраном.",
          ],
        },
        {
          heading: "Что делать, когда пришёл отказ",
          paragraphs: [
            "Дочитай отчёт до конца. Часто это несколько пунктов, а не одна строка. Исправь все. Не оставляй один и не отправляй снова. Сними экран заново из самого приложения. Открой страницу политики на телефоне и на компьютере. Напиши тестовый аккаунт в поле заметки.",
            "После правки открой на своём телефоне и ещё на одном. Если это для Huawei, открой на устройстве без Google или в облачном тесте. Потом отправь с большим versionCode. Если три раза возвращается по той же причине, укороти текст и убери работу, которую обещал, а приложение не делает. Кнопка, которой нет, оставленная на странице, приносит следующий отказ.",
          ],
        },
      ],
    },
  };
  return sections[lang];
}
