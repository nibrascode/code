import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

export function installSections(lang: Lang): ProgrammingSection[] {
  const all: Record<Lang, ProgrammingSection[]> = {
    az: [
      {
        id: "install",
        title: "APK telefona necə qurulur?",
        blocks: [
          {
            paragraphs: [
              "APK-nı qurmaq onu mağazaya qoymaq deyil. Fayl telefonda açılır, telefon icazə istəyir, sonra tətbiq siyahıya düşür. Mağaza bu addımı sənin yerinə gizlədir. Öz yığdığın və ya saytdan endirdiyin faylda addımı özün görürsən.",
              "Hər .apk ilə bitən fayl qurulmur. Yarımçıq endirmə, başqa adlı sənəd və başqa imza ilə yığılmış yeniləmə telefonu dayandırır. Əvvəl faylın haradan gəldiyini bil, sonra aç.",
            ],
          },
          {
            heading: "Qurmazdan əvvəl",
            paragraphs: [
              "Yalnız öz yığdığın, öz saytından və ya müəllifin öz səhifəsindən gələn faylı aç. Mesajda gəzən, adı məşhur tətbiqə bənzəyən və heç bir səhifəsi olmayan APK başqa proqram ola bilər. Adın içində apk yazılması təhlükəsizlik demək deyil.",
              "Nibras Studio-nun verdiyi fayl yoxlama üçündür. Onu öz telefonuna qurub düyməni sınamaq olar. Mağaza buraxılışı deyil. Qurulanda telefon «naməlum tətbiq» deyə bilər. Bu, faylın Play-dən gəlmədiyini bildirir.",
              "Quraşdırma pəncərəsi tətbiqin istəyə biləcəyi icazələri göstərir. Siyahını oxu. Qeyd tətbiqi kamera, rehber və yer istəyirsə, faylı bağla. Öz düzəltdiyin tətbiqdə isə bu siyahı sənin manifestdə yazdığındır.",
            ],
          },
          {
            heading: "Addımlar",
            ordered: true,
            paragraphs: ["Android 8 və sonrakı telefonlarda icazə ümumi düymə deyil. Faylı açan hər tətbiqə ayrı icazə verilir. Chrome-a vermək Fayllar tətbiqinə keçmir."],
            list: [
              "Faylı tam endir. Ölçü sıfırdırsa və ya gözlədiyindən çox kiçikdirsə, endirmə bitməyib. Həmin faylı sil və yenidən götür.",
              "Endirmələr qovluğundan və ya fayl tətbiqindən .apk faylına bas. Brauzerin altındakı bitmiş endirməyə basmaq da olar.",
              "Telefon «bu mənbədən quraşdırma bağlıdır» desə, açılan ayara keç. Həmin tətbiqin yanında «naməlum tətbiqləri quraşdır» və ya buna bənzər sətri aç. Geri qayıdıb faylı yenidən bas.",
              "Köhnə Android-də yol başqadır. Ayarlar, təhlükəsizlik, naməlum mənbələr. Qurulandan sonra həmin sətri yenidən bağla.",
              "İcazə siyahısını oxu. Razısansa Quraşdır bas. Bitəndə Aç görünür.",
              "Eyni tətbiq artıq telefonda varsa və imza uyğundursa, düymə Yenilə olur. Paket adı eyni, imza eyni, versionCode isə böyük olmalıdır.",
              "Aç və əsas düyməni bir dəfə bas. Ağ ekran və ya dərhal bağlanma quraşdırmanın yox, içinın işləmədiyini göstərir.",
              "İcazəni işin bitməsindən sonra bağlaya bilərsən. Ayarlarda həmin brauzerin və ya fayl tətbiqinin naməlum quraşdırma sətrini söndür. Artıq qurulmuş tətbiq silinmir.",
            ],
          },
          {
            heading: "Markaya görə fərq",
            paragraphs: [
              "Təmiz Android-də yol qısadır. Faylı açanda telefon özü icazə səhifəsinə aparır. Pixel və bəzi Nokia telefonları belədir.",
              "Samsung-da Ayarlar, Təhlükəsizlik və məxfilik, naməlum tətbiqləri quraşdır. Bəzi modellərdə Avtomatik əngəl və ya tətbiq mühafizəsi faylı kəsir. Xəbərdarlığı oxu. Öz yığdığın fayldırsa, yalnız bu dəfəyə icazə ver, mühafizəni həmişəlik söndürmə.",
              "Xiaomi, Redmi və Poco-da icazə çox vaxt Ayarlar, Məxfilik, xüsusi icazələr, naməlum tətbiqlər yolundadır. Əlavə olaraq Təhlükəsizlik tətbiqi faylı skan edir və quraşdırmanı saxlayır. Skan bitəndə yenidən Quraşdır basmaq lazım gəlir. Kompüterdən kabel ilə atırsansa, tərtibatçı seçimlərində USB ilə quraşdırma da açıq olmalıdır.",
              "Huawei və Honor-da Ayarlar, Təhlükəsizlik, daha çox ayar, naməlum mənbələrdən quraşdırma. Bəzi modellərdə xarici mənbəni kəsən rejim var. AppGallery-dən gəlməyən fayl üçün həmin rejimi yalnız bu quraşdırmaya aç, sonra bağla.",
            ],
          },
          {
            heading: "Nəyə diqqət et",
            list: [
              "Play Protect xəbərdarlıq göstərə bilər. Öz test faylını tanımır. Mətni oxu. Tanımadığın müəllifin faylını «hər halda quraşdır» ilə keçmə.",
              "Uşaq hesabı və iş profili quraşdırmanı kəsə bilər. Belə telefonda adi istifadəçi icazəsi bəs etmir.",
              "Faylı quran tətbiq ilə icazə verdiyin tətbiq eyni olmalıdır. Telegram-dan açırsansa, icazə Telegram üçündür. Sonra Fayllar-dan açırsansa, icazəni bir də Fayllar üçün ver.",
              "Quraşdırma bitəndə tətbiq menyuda görünür. Görünmürsə, axtarışa paket adını və ya ekrandakı başlığı yaz. Bəzən qovluğun içinə düşür.",
              "Silmək ayarlardan və ya ikonu basıb saxlamaqla olur. Silinəndə tətbiqin içində saxladığı sətir də gedə bilər.",
            ],
            paragraphs: [
              "Bu yol mağaza yoxlamasını əvəz etmir. Dostuna test faylını belə verirsan, o da eyni addımları görür. Hamıya açıq yayım üçün Play və ya AppGallery lazımdır.",
            ],
          },
        ],
      },
      {
        id: "errors",
        title: "Qurulmayan və açılmayan APK",
        blocks: [
          {
            paragraphs: [
              "Telefon çox vaxt qısa bir cümlə göstərir. Həmin cümlənin altında bir neçə səbəb ola bilər. Əvvəl faylın özünə bax, sonra telefonda duran köhnə nüsxəyə, axırda telefonun növünə. Səhv yeri silib yenidən qurmaq bəzən köhnə məlumatı da silir. Buna görə səbəbi ayır.",
            ],
          },
          {
            heading: "Paket təhlil olunmadı",
            paragraphs: [
              "«Paket təhlil edilərkən xəta oldu» və ya «fayl etibarlı paket deyil» yarımçıq və ya başqa fayl deməkdir. Brauzer səhifəni .apk adı ilə saxlayıb. Ölçü bir neçə kilobaytdırsa, içində proqram yox, mətn var.",
              "Faylı sil. Saytı və ya Studio-nu yenidən aç və endirmənin faizinin bitməsini gözlə. Şəbəkə kəsilibsə, qırıq fayl qalır. Zip-i APK adlandırıb göndərmək də bu xətanı verir. APK ayrıca yığılır, zip onun xammalıdır.",
            ],
          },
          {
            heading: "İmza uyğun gəlmir",
            paragraphs: [
              "«Paket mövcud paketlə ziddiyyət təşkil edir» və ya «imzalar uyğun gəlmir» o deməkdir ki, telefonda eyni adda tətbiq var, amma bu fayl başqa açarla yığılır. Telefon köhnənin üstünə başqa açarın faylını qoymur.",
              "İki çıxış yolu var. Köhnə tətbiqi silib yenisini qur. Bu, içindəki saxlanmış sətiri aparır. Və ya yeni faylı köhnə açarla yenidən yığ. Test üçün bir dəfə debug açarı, mağaza üçün başqa açar işlədibsənsə, telefon onları eyni tətbiq saymır. Nibras Studio-nun debug faylı ilə öz release açarını qarışdırmaq bu xətanı verir.",
            ],
          },
          {
            heading: "Versiya köhnədir",
            paragraphs: [
              "«Versiya aşağı düşə bilməz» və ya yeniləmə düyməsinin əvəzinə xəta gəlirsə, yeni faylın versionCode-u telefonda duran nüsxədən kiçikdir və ya eynidir. Telefon geriyə getmir.",
              "build.gradle içində versionCode-u böyüt, yenidən yığ və həmin yeni faylı qur. Ədədi böyütmədən faylın adını dəyişmək kifayət etmir. Köhnəni silmək də qurur, amma istifadəçinin məlumatı gedir. Öz test telefonunda silmək olar. Başqasının telefonunda ədədi böyüt.",
            ],
          },
          {
            heading: "Telefon uyğun deyil",
            paragraphs: [
              "«Bu versiya cihazınızla uyğun deyil» və ya quraşdırma düyməsi passivdirsə, tətbiqin minSdk-si telefonun Androidindən yüksəkdir. Köhnə telefon yeni hədəfi açmır. Əksinə, çox köhnə hədəfli faylı yeni Android özü kəsə bilər.",
              "İkinci səbəb prosessor uyğunsuzluğudur. Yalnız bir növ telefon üçün yığılmış split fayl başqa telefonda açılmır. Tam APK və ya həmin telefonun növünə uyğun fayl lazımdır. AAB-ni birbaşa telefona atmaq olmur. Əvvəl onu APK-ya çevirmək lazımdır. Mağaza bu çevirməni özü edir, əl ilə quraşdırma isə APK istəyir.",
            ],
          },
          {
            heading: "Yaddaş və test faylı",
            paragraphs: [
              "«Yaddaş kifayət deyil» açıq səbəbdir. Şəkilləri və lazımsız tətbiqi sil, sonra yenidən bas. Faylın özü böyükdürsə, quraşdırma üçün faylın ölçüsündən artıq boş yer lazımdır, çünki telefon onu açıb köçürür.",
              "«Yalnız test üçündür» Android Studio-nun bəzi yoxlama yığımlarında olur. Həmin fayl mağaza və adi quraşdırma üçün deyil. Release yığım götür. Nibras Studio-nun debug APK-sı bu cümlə ilə gəlmir, onu adi yolla qurmaq olar. Android Studio-nun testOnly bayrağı isə fayl tətbiqindən quraşdırmanı dayandırır.",
            ],
          },
          {
            heading: "Play Protect və mühafizə kəsdi",
            paragraphs: [
              "Quraşdırma düyməsi görünür, sonra «zərərli tətbiq» və ya mühafizə pəncərəsi gəlir. Tanımadığın faylda bu xəbərdarlığı keçmə. Öz yığdığın test faylında mətn sənin paket adını demirsə, faylı qarışdırmısan.",
              "Öz faylındırsa, həmin pəncərədə yalnız bu quraşdırmaya yol ver. Mühafizəni bütün telefon üçün söndürmə. Xiaomi və Samsung skanı bitmədən düyməni basmaq xətanı təkrarlayır. Skanın bitməsini gözlə.",
              "İş profili, ailə nəzarəti və bəzi şirkət telefonları xarici faylı bütünlüklə kəsir. Belə cihazda ayar sənin əlində olmaya bilər. Şəxsi telefonunda yoxla.",
            ],
          },
          {
            heading: "Quruldu, amma açılmır",
            paragraphs: [
              "İkon görünür, basanda ağ ekran qalır və ya tətbiq dərhal bağlanır. Bu, artıq quraşdırma xətası deyil. İçindəki səhifə, icazə və ya kitabxana işləmir.",
            ],
            list: [
              "Veb tətbiq ünvandan açılırsa, interneti yoxla. Ünvan səhvdirsə, ekran boş qalır. Zipin içinə qoyulmuş səhifə ünvansız da açılmalıdır.",
              "Huawei və Google xidməti olmayan telefonda Google giriş, xəritə və ya Play bildirişi açılışı çökdürə bilər. Həmin hissəni gizlət və ya telefonda olmayan xidməti çağırma.",
              "İcazə rədd edilibsə, düymə ölür. Ayarlardan tətbiqin icazəsinə gir və kameranı və ya bildirişi aç.",
              "Köhnə qırıq məlumat qalıbsa, tətbiqin yaddaşını təmizlə. Silib eyni açarla yenidən qurmaq da olar. Başqa açarla qurmaq imza xətasına qayıdır.",
              "Yalnız səndə açılır, başqasında yoxdursa, sən emulatorun və ya öz Android versiyanın fərqinə baxmırsan. Bir köhnə və bir yeni telefonda yoxla.",
            ],
          },
          {
            heading: "Sıranı belə yoxla",
            ordered: true,
            paragraphs: ["Bir neçə səbəb üst-üstə düşəndə əvvəl faylı, sonra köhnə nüsxəni, axırda telefonu dəyiş."],
            list: [
              "Faylın ölçüsünə bax. Çox kiçikdirsə, yenidən endir.",
              "Telefonda eyni tətbiq varsa, imza və versionCode-u yoxla. Uyğunsuzdursa, sil və ya ədədi böyüdüb eyni açarla yığ.",
              "Telefonun Android versiyası tətbiqin istədiyindən aşağıdırsa, başqa telefon və ya aşağı minSdk lazımdır.",
              "Boş yerə bax. Sonra mühafizə pəncərəsini oxu, mühafizəni həmişəlik söndürmə.",
              "Qurulub açılmırsa, interneti, icazəni və Google xidmətini ayır. Ağ ekran çox vaxt səhv ünvandır.",
            ],
          },
        ],
      },
    ],
    en: [
      {
        id: "install",
        title: "How do you install an APK on a phone?",
        blocks: [
          {
            paragraphs: [
              "Installing an APK is not the same as putting it in a store. The file opens on the phone, the phone asks for permission, and then the app appears in the list. A store hides this step for you. With a file you built or downloaded from a site, you see the step yourself.",
              "Not every file that ends in .apk installs. A half download, a document with the wrong name, and an update built with another signature stop the phone. Know where the file came from before you open it.",
            ],
          },
          {
            heading: "Before you install",
            paragraphs: [
              "Open only a file you built, or one that came from your own site or the author's own page. An APK walking around in a message, with a name that looks like a famous app and no page of its own, can be another program. The letters apk in the name do not mean it is safe.",
              "The file from Nibras Studio is for a test. You can install it on your own phone and try the button. It is not a store release. The phone may say unknown app. That only means the file did not come from Play.",
              "The install window shows the permissions the app may ask. Read the list. If a notes app asks for the camera, contacts, and location, close the file. In an app you built yourself, this list is what you wrote in the manifest.",
            ],
          },
          {
            heading: "Steps",
            ordered: true,
            paragraphs: ["On Android 8 and later the permission is not one global switch. Each app that opens the file needs its own permission. Allowing Chrome does not allow the Files app."],
            list: [
              "Download the file fully. If the size is zero or much smaller than you expected, the download did not finish. Delete that file and take it again.",
              "Tap the .apk file from the Downloads folder or the files app. Tapping the finished download under the browser also works.",
              "If the phone says install from this source is blocked, go to the setting that opens. Turn on install unknown apps for that app, or the line that means the same. Come back and tap the file again.",
              "On old Android the path is different. Settings, security, unknown sources. After it installs, turn that line off again.",
              "Read the permission list. If you agree, tap Install. When it finishes, Open appears.",
              "If the same app is already on the phone and the signature matches, the button says Update. The package name must be the same, the signature the same, and versionCode higher.",
              "Open it and press the main button once. A white screen or an immediate close means the inside is not working, not that the install failed.",
              "You can turn the permission off after the job. In settings, switch off unknown install for that browser or files app. The app already installed stays.",
            ],
          },
          {
            heading: "The difference by brand",
            paragraphs: [
              "On plain Android the path is short. When you open the file, the phone takes you to the permission page itself. Pixel and some Nokia phones work this way.",
              "On Samsung the path is Settings, Security and privacy, install unknown apps. On some models Auto Blocker or app protection cuts the file. Read the warning. If it is a file you built, allow only this time. Do not turn protection off forever.",
              "On Xiaomi, Redmi, and Poco the permission is often under Settings, Privacy, special permissions, unknown apps. The Security app also scans the file and holds the install. When the scan ends you may have to tap Install again. If you send it from a computer by cable, install via USB must also be on in developer options.",
              "On Huawei and Honor the path is Settings, Security, more settings, install from unknown sources. Some models have a mode that cuts an outside source. For a file that did not come from AppGallery, open that mode only for this install, then close it.",
            ],
          },
          {
            heading: "What to watch",
            list: [
              "Play Protect may show a warning. It does not know your test file. Read the text. Do not pass an unknown author's file with install anyway.",
              "A child account and a work profile can block the install. On such a phone a normal user permission is not enough.",
              "The app that opens the file and the app you allowed must be the same. If you open it from Telegram, the permission is for Telegram. If you then open it from Files, allow Files too.",
              "When the install ends, the app appears in the menu. If you do not see it, search the package name or the title on the screen. It sometimes falls inside a folder.",
              "You remove it from settings or by holding the icon. When it is removed, a line the app saved inside can go too.",
            ],
            paragraphs: [
              "This path does not replace a store review. If you hand a test file to a friend, they see the same steps. A release for everyone needs Play or AppGallery.",
            ],
          },
        ],
      },
      {
        id: "errors",
        title: "An APK that will not install or will not open",
        blocks: [
          {
            paragraphs: [
              "The phone usually shows one short sentence. Several causes can sit under that sentence. Look at the file first, then at the old copy on the phone, and at the kind of phone last. Deleting the wrong place and installing again can also delete old data. Separate the cause first.",
            ],
          },
          {
            heading: "The package could not be parsed",
            paragraphs: [
              "\"There was a problem parsing the package\" or \"the file is not a valid package\" means a half file or another file. The browser saved a page under the name .apk. If the size is a few kilobytes, the inside is text, not a program.",
              "Delete the file. Open the site or Studio again and wait until the download percent finishes. If the network dropped, a broken file stays. Renaming a zip to APK also gives this error. An APK is built separately. A zip is its raw material.",
            ],
          },
          {
            heading: "The signature does not match",
            paragraphs: [
              "\"The package conflicts with an existing package\" or \"the signatures do not match\" means an app with the same name is already on the phone, but this file was built with another key. The phone will not put another key's file on top of the old one.",
              "There are two ways out. Delete the old app and install the new one. That takes the saved line inside. Or build the new file again with the old key. If you used a debug key once for a test and another key for the store, the phone does not treat them as the same app. Mixing the Nibras Studio debug file with your own release key gives this error.",
            ],
          },
          {
            heading: "The version is older",
            paragraphs: [
              "If it says the version cannot go down, or an error comes instead of the update button, the new file's versionCode is smaller than the copy on the phone, or it is the same. The phone does not go backward.",
              "Raise versionCode in build.gradle, build again, and install that new file. Changing the file name without raising the number is not enough. Deleting the old one also installs, but the person's data goes. On your own test phone you can delete. On someone else's phone, raise the number.",
            ],
          },
          {
            heading: "The phone is not compatible",
            paragraphs: [
              "If it says this version is not compatible with your device, or the install button is dead, the app's minSdk is higher than the phone's Android. An old phone does not open a new target. The other way around, a very old target can be cut by a new Android itself.",
              "The second cause is the processor. A split file built for only one kind of phone does not open on another. You need a full APK, or a file that matches that phone. You cannot drop an AAB straight onto a phone. It has to become an APK first. The store does that conversion itself. A hand install wants an APK.",
            ],
          },
          {
            heading: "Storage and a test file",
            paragraphs: [
              "\"Not enough storage\" is a plain cause. Delete pictures and an app you do not need, then tap again. If the file itself is large, the install needs more free space than the file's size, because the phone opens it and copies it.",
              "\"Test only\" happens on some check builds from Android Studio. That file is not for a store or a normal install. Take a release build. The debug APK from Nibras Studio does not come with this sentence. You can install it the normal way. Android Studio's testOnly flag does stop an install from the files app.",
            ],
          },
          {
            heading: "Play Protect or a guard blocked it",
            paragraphs: [
              "The install button shows, then a harmful-app window or a guard window comes. Do not pass that warning on a file you do not know. If the text does not name your package on a test file you built, you mixed up the file.",
              "If it is your file, allow only this install in that window. Do not turn the guard off for the whole phone. On Xiaomi and Samsung, tapping the button before the scan ends repeats the error. Wait until the scan finishes.",
              "A work profile, family control, and some company phones cut an outside file completely. On such a device the setting may not be in your hands. Try it on your own phone.",
            ],
          },
          {
            heading: "It installed, but it will not open",
            paragraphs: [
              "The icon is there. You tap it and a white screen stays, or the app closes at once. This is no longer an install error. The page, the permission, or a library inside is not working.",
            ],
            list: [
              "If a web app opens from an address, check the internet. If the address is wrong, the screen stays empty. A page put inside the zip should open without an address.",
              "On a Huawei phone and on a phone without Google services, Google sign-in, maps, or a Play notification can crash the open. Hide that part, or do not call a service the phone does not have.",
              "If a permission was denied, the button dies. Go to the app's permission in settings and turn on the camera or notifications.",
              "If broken old data is left, clear the app's storage. You can also delete it and install again with the same key. Installing with another key returns to the signature error.",
              "If it opens only for you and not for someone else, you are not looking at the difference in the emulator or in your own Android version. Try one old phone and one new phone.",
            ],
          },
          {
            heading: "Check in this order",
            ordered: true,
            paragraphs: ["When several causes sit together, change the file first, then the old copy, and the phone last."],
            list: [
              "Look at the file size. If it is far too small, download it again.",
              "If the same app is on the phone, check the signature and versionCode. If they do not match, delete it, or raise the number and build with the same key.",
              "If the phone's Android is lower than the app asks, you need another phone or a lower minSdk.",
              "Look at free space. Then read the guard window. Do not turn the guard off forever.",
              "If it installed and will not open, separate the internet, the permission, and Google services. A white screen is often a wrong address.",
            ],
          },
        ],
      },
    ],
    tr: [
      {
        id: "install",
        title: "APK telefona nasıl kurulur?",
        blocks: [
          {
            paragraphs: [
              "APK kurmak onu mağazaya koymak değildir. Dosya telefonda açılır, telefon izin ister, sonra uygulama listeye düşer. Mağaza bu adımı senin yerine gizler. Kendi derlediğin ya da siteden indirdiğin dosyada adımı kendin görürsün.",
              "apk ile biten her dosya kurulmaz. Yarım indirme, başka adlı belge ve başka imzayla derlenmiş güncelleme telefonu durdurur. Açmadan önce dosyanın nereden geldiğini bil.",
            ],
          },
          {
            heading: "Kurmadan önce",
            paragraphs: [
              "Yalnız kendi derlediğin, kendi sitenden ya da yazarın kendi sayfasından gelen dosyayı aç. Mesajda dolaşan, adı ünlü uygulamaya benzeyen ve hiçbir sayfası olmayan APK başka program olabilir. Adın içinde apk yazması güvenlik demek değildir.",
              "Nibras Studio'nun verdiği dosya yoklama içindir. Onu kendi telefonuna kurup düğmeyi denemek olur. Mağaza sürümü değildir. Kurulunca telefon bilinmeyen uygulama diyebilir. Bu, dosyanın Play'den gelmediğini bildirir.",
              "Kurulum penceresi uygulamanın isteyebileceği izinleri gösterir. Listeyi oku. Not uygulaması kamera, rehber ve konum istiyorsa dosyayı kapat. Kendi düzelttiğin uygulamada bu liste manifestte yazdığındır.",
            ],
          },
          {
            heading: "Adımlar",
            ordered: true,
            paragraphs: ["Android 8 ve sonrasında izin genel düğme değildir. Dosyayı açan her uygulamaya ayrı izin verilir. Chrome'a vermek Dosyalar uygulamasına geçmez."],
            list: [
              "Dosyayı tam indir. Boy sıfırsa ya da beklediğinden çok küçükse indirme bitmemiştir. O dosyayı sil ve yeniden al.",
              "İndirilenler klasöründen ya da dosya uygulamasından apk dosyasına bas. Tarayıcının altındaki bitmiş indirmeye basmak da olur.",
              "Telefon bu kaynaktan kurulum kapalı derse açılan ayara geç. O uygulamanın yanında bilinmeyen uygulamaları kur ya da buna benzer satırı aç. Geri dönüp dosyaya yeniden bas.",
              "Eski Android'de yol başkadır. Ayarlar, güvenlik, bilinmeyen kaynaklar. Kurulduktan sonra o satırı yeniden kapat.",
              "İzin listesini oku. Razıysan Kur bas. Bitince Aç görünür.",
              "Aynı uygulama zaten telefondaysa ve imza uyuyorsa düğme Güncelle olur. Paket adı aynı, imza aynı, versionCode ise büyük olmalıdır.",
              "Aç ve ana düğmeye bir kez bas. Ak ekran ya da hemen kapanma kurulumun değil, içinin çalışmadığını gösterir.",
              "İşi bitince izni kapatabilirsin. Ayarlarda o tarayıcının ya da dosya uygulamasının bilinmeyen kurulum satırını söndür. Kurulu uygulama silinmez.",
            ],
          },
          {
            heading: "Markaya göre fark",
            paragraphs: [
              "Düz Android'de yol kısadır. Dosyayı açınca telefon kendisi izin sayfasına götürür. Pixel ve bazı Nokia telefonları böyledir.",
              "Samsung'da Ayarlar, Güvenlik ve gizlilik, bilinmeyen uygulamaları kur. Bazı modellerde Otomatik engel ya da uygulama koruması dosyayı keser. Uyarıyı oku. Kendi derlediğin dosyaysa yalnız bu kereliğe izin ver, korumayı sonsuza dek kapatma.",
              "Xiaomi, Redmi ve Poco'da izin çoğu zaman Ayarlar, Gizlilik, özel izinler, bilinmeyen uygulamalar yolundadır. Ayrıca Güvenlik uygulaması dosyayı tarar ve kurulumu tutar. Tarama bitince yeniden Kur basmak gerekebilir. Bilgisayardan kabloyla atıyorsan geliştirici seçeneklerinde USB ile kurulum da açık olmalıdır.",
              "Huawei ve Honor'da Ayarlar, Güvenlik, daha fazla ayar, bilinmeyen kaynaklardan kurulum. Bazı modellerde dış kaynağı kesen kip vardır. AppGallery'den gelmeyen dosya için o kipi yalnız bu kuruluma aç, sonra kapat.",
            ],
          },
          {
            heading: "Neye dikkat et",
            list: [
              "Play Protect uyarı gösterebilir. Kendi deneme dosyanı tanımaz. Metni oku. Tanımadığın yazarın dosyasını yine de kur ile geçme.",
              "Çocuk hesabı ve iş profili kurulumu kesebilir. Böyle telefonda olağan kullanıcı izni yetmez.",
              "Dosyayı açan uygulama ile izin verdiğin uygulama aynı olmalıdır. Telegram'dan açıyorsan izin Telegram içindir. Sonra Dosyalar'dan açıyorsan izni bir de Dosyalar için ver.",
              "Kurulum bitince uygulama menüde görünür. Görünmezse aramaya paket adını ya da ekrandaki başlığı yaz. Bazen klasörün içine düşer.",
              "Silmek ayarlardan ya da ikonu basılı tutmakla olur. Silinince uygulamanın içinde sakladığı satır da gidebilir.",
            ],
            paragraphs: [
              "Bu yol mağaza yoklamasının yerine geçmez. Arkadaşına deneme dosyasını böyle verirsen o da aynı adımları görür. Herkese açık yayım için Play ya da AppGallery gerekir.",
            ],
          },
        ],
      },
      {
        id: "errors",
        title: "Kurulmayan ve açılmayan APK",
        blocks: [
          {
            paragraphs: [
              "Telefon çoğu zaman kısa bir cümle gösterir. O cümlenin altında birkaç sebep olabilir. Önce dosyanın kendisine bak, sonra telefonda duran eski kopyaya, en sonda telefonun türüne. Yanlış yeri silip yeniden kurmak bazen eski veriyi de siler. Önce sebebi ayır.",
            ],
          },
          {
            heading: "Paket ayrıştırılamadı",
            paragraphs: [
              "«Paket ayrıştırılırken sorun oluştu» ya da «dosya geçerli paket değil» yarım ya da başka dosya demektir. Tarayıcı sayfayı apk adıyla kaydetmiştir. Boy birkaç kilobaytsa içinde program değil, metin vardır.",
              "Dosyayı sil. Siteyi ya da Studio'yu yeniden aç ve indirmenin yüzdesinin bitmesini bekle. Ağ koptuysa kırık dosya kalır. Zip'i APK diye adlandırmak da bu hatayı verir. APK ayrıca derlenir, zip onun hamıdır.",
            ],
          },
          {
            heading: "İmza uyuşmuyor",
            paragraphs: [
              "«Paket mevcut paketle çakışıyor» ya da «imzalar uyuşmuyor» telefonda aynı adlı uygulama var, ama bu dosya başka anahtarla derlenmiş demektir. Telefon eskisinin üstüne başka anahtarın dosyasını koymaz.",
              "İki çıkış yolu vardır. Eski uygulamayı silip yenisini kur. Bu, içindeki kayıtlı satırı götürür. Ya da yeni dosyayı eski anahtarla yeniden derle. Deneme için bir kez debug anahtarı, mağaza için başka anahtar kullandıysan telefon onları aynı uygulama saymaz. Nibras Studio'nun debug dosyası ile kendi release anahtarını karıştırmak bu hatayı verir.",
            ],
          },
          {
            heading: "Sürüm eski",
            paragraphs: [
              "«Sürüm düşürülemez» diyorsa ya da güncelle düğmesinin yerine hata geliyorsa yeni dosyanın versionCode'u telefondaki kopyadan küçüktür ya da aynıdır. Telefon geri gitmez.",
              "build.gradle içinde versionCode'u büyüt, yeniden derle ve o yeni dosyayı kur. Sayıyı büyütmeden dosyanın adını değiştirmek yetmez. Eskiyi silmek de kurar, ama kişinin verisi gider. Kendi deneme telefonunda silmek olur. Başkasının telefonunda sayıyı büyüt.",
            ],
          },
          {
            heading: "Telefon uygun değil",
            paragraphs: [
              "«Bu sürüm cihazınızla uyumlu değil» diyorsa ya da kur düğmesi pasifse uygulamanın minSdk'si telefonun Android'inden yüksektir. Eski telefon yeni hedefi açmaz. Tersine, çok eski hedefli dosyayı yeni Android kendisi kesebilir.",
              "İkinci sebep işlemci uyumsuzluğudur. Yalnız bir tür telefon için derlenmiş split dosya başka telefonda açılmaz. Tam APK ya da o telefonun türüne uyan dosya gerekir. AAB'yi doğrudan telefona atmak olmaz. Önce onu APK'ya çevirmek gerekir. Mağaza bu çevirmeyi kendi yapar, elle kurulum ise APK ister.",
            ],
          },
          {
            heading: "Depolama ve deneme dosyası",
            paragraphs: [
              "«Yeterli depolama yok» açık sebeptir. Resimleri ve gereksiz uygulamayı sil, sonra yeniden bas. Dosyanın kendisi büyükse kurulum için dosyanın boyundan fazla boş yer gerekir, çünkü telefon onu açıp kopyalar.",
              "«Yalnızca deneme içindir» Android Studio'nun bazı yoklama derlemelerinde olur. O dosya mağaza ve olağan kurulum için değildir. Release derleme al. Nibras Studio'nun debug APK'sı bu cümleyle gelmez, onu olağan yolla kurmak olur. Android Studio'nun testOnly bayrağı ise dosya uygulamasından kurulumu durdurur.",
            ],
          },
          {
            heading: "Play Protect ve koruma kesti",
            paragraphs: [
              "Kur düğmesi görünür, sonra zararlı uygulama ya da koruma penceresi gelir. Tanımadığın dosyada bu uyarıyı geçme. Kendi derlediğin deneme dosyasında metin senin paket adını demiyorsa dosyayı karıştırmışsındır.",
              "Kendi dosyan ise o pencerede yalnız bu kuruluma yol ver. Korumayı bütün telefon için kapatma. Xiaomi ve Samsung'da tarama bitmeden düğmeye basmak hatayı tekrarlar. Taramanın bitmesini bekle.",
              "İş profili, aile denetimi ve bazı şirket telefonları dış dosyayı bütünüyle keser. Böyle cihazda ayar senin elinde olmayabilir. Kendi telefonunda dene.",
            ],
          },
          {
            heading: "Kuruldu, ama açılmıyor",
            paragraphs: [
              "İkon görünür, basınca ak ekran kalır ya da uygulama hemen kapanır. Bu artık kurulum hatası değildir. İçindeki sayfa, izin ya da kütüphane çalışmaz.",
            ],
            list: [
              "Web uygulama adresten açılıyorsa interneti yokla. Adres yanlışsa ekran boş kalır. Zipin içine konmuş sayfa adressiz de açılmalıdır.",
              "Huawei'de ve Google hizmeti olmayan telefonda Google giriş, harita ya da Play bildirimi açılışı çökertebilir. O parçayı gizle ya da telefonda olmayan hizmeti çağırma.",
              "İzin reddedildiyse düğme ölür. Ayarlardan uygulamanın iznine gir ve kamerayı ya da bildirimi aç.",
              "Eski kırık veri kaldıysa uygulamanın belleğini temizle. Silip aynı anahtarla yeniden kurmak da olur. Başka anahtarla kurmak imza hatasına döner.",
              "Yalnız sende açılıyor, başkasında açılmıyorsa emülatörün ya da kendi Android sürümünün farkına bakmıyorsun. Bir eski ve bir yeni telefonda dene.",
            ],
          },
          {
            heading: "Sırayı böyle yokla",
            ordered: true,
            paragraphs: ["Birkaç sebep üst üste gelince önce dosyayı, sonra eski kopyayı, en sonda telefonu değiştir."],
            list: [
              "Dosyanın boyuna bak. Çok küçükse yeniden indir.",
              "Telefonda aynı uygulama varsa imzayı ve versionCode'u yokla. Uyuşmuyorsa sil ya da sayıyı büyütüp aynı anahtarla derle.",
              "Telefonun Android sürümü uygulamanın istediğinden düşükse başka telefon ya da daha düşük minSdk gerekir.",
              "Boş yere bak. Sonra koruma penceresini oku, korumayı sonsuza dek kapatma.",
              "Kurulup açılmıyorsa interneti, izni ve Google hizmetini ayır. Ak ekran çoğu zaman yanlış adrestir.",
            ],
          },
        ],
      },
    ],
    ar: [
      {
        id: "install",
        title: "كيف يُثبَّت APK على الهاتف؟",
        blocks: [
          {
            paragraphs: [
              "تثبيت APK ليس وضعه في المتجر. يُفتح الملف على الهاتف ويطلب الهاتف إذناً ثم يظهر التطبيق في القائمة. المتجر يخفي هذه الخطوة عنك. في ملف جمّعته أو نزّلته من موقع ترى الخطوة بنفسك.",
              "ليس كل ملف ينتهي بـ apk يُثبَّت. التنزيل الناقص والمستند باسم خاطئ والتحديث المجمّع بتوقيع آخر يوقف الهاتف. اعرف من أين جاء الملف قبل أن تفتحه.",
            ],
          },
          {
            heading: "قبل التثبيت",
            paragraphs: [
              "افتح فقط ملفاً جمّعته أو جاء من موقعك أو من صفحة المؤلف نفسه. APK يدور في رسالة واسمه يشبه تطبيقاً مشهوراً ولا صفحة له قد يكون برنامجاً آخر. كتابة apk في الاسم ليست أماناً.",
              "الملف من Nibras Studio للاختبار. يمكن تثبيته على هاتفك وتجربة الزر. ليس إصدار متجر. عند التثبيت قد يقول الهاتف تطبيقاً غير معروف. هذا يعني فقط أن الملف لم يأتِ من Play.",
              "نافذة التثبيت تعرض الصلاحيات التي قد يطلبها التطبيق. اقرأ القائمة. إذا طلب تطبيق ملاحظات الكاميرا وجهات الاتصال والمكان فأغلق الملف. في تطبيق أعددته بنفسك هذه القائمة هي ما كتبته في الـ manifest.",
            ],
          },
          {
            heading: "الخطوات",
            ordered: true,
            paragraphs: ["في Android 8 وما بعده الإذن ليس زراً عاماً. كل تطبيق يفتح الملف يحتاج إذنه. السماح لـ Chrome لا ينتقل إلى تطبيق الملفات."],
            list: [
              "نزّل الملف كاملاً. إذا كان الحجم صفراً أو أصغر بكثير مما تنتظر فالتنزيل لم ينتهِ. احذف ذلك الملف وخذه من جديد.",
              "اضغط ملف apk من مجلد التنزيلات أو تطبيق الملفات. الضغط على التنزيل المنتهي تحت المتصفح ينفع أيضاً.",
              "إذا قال الهاتف إن التثبيت من هذا المصدر مغلق فانتقل إلى الإعداد الذي يُفتح. شغّل تثبيت التطبيقات غير المعروفة لذلك التطبيق أو السطر الذي يعني الشيء نفسه. ارجع واضغط الملف من جديد.",
              "في Android القديم الطريق مختلف. الإعدادات ثم الأمان ثم المصادر غير المعروفة. بعد التثبيت أغلق ذلك السطر من جديد.",
              "اقرأ قائمة الصلاحيات. إذا وافقت فاضغط تثبيت. حين ينتهي يظهر فتح.",
              "إذا كان التطبيق نفسه موجوداً على الهاتف والتوقيع متطابقاً فالزر يقول تحديث. يجب أن يكون اسم الحزمة واحداً والتوقيع واحداً وversionCode أكبر.",
              "افتحه واضغط الزر الرئيسي مرة. الشاشة البيضاء أو الإغلاق الفوري يعني أن الداخل لا يعمل لا أن التثبيت فشل.",
              "يمكنك إغلاق الإذن بعد انتهاء العمل. في الإعدادات أطفئ التثبيت غير المعروف لذلك المتصفح أو تطبيق الملفات. التطبيق المثبَّت يبقى.",
            ],
          },
          {
            heading: "الفرق حسب الماركة",
            paragraphs: [
              "في Android النظيف الطريق قصير. حين تفتح الملف يأخذك الهاتف نفسه إلى صفحة الإذن. هواتف Pixel وبعض Nokia هكذا.",
              "في Samsung الطريق الإعدادات ثم الأمان والخصوصية ثم تثبيت التطبيقات غير المعروفة. في بعض الموديلات القاطع التلقائي أو حماية التطبيق تقطع الملف. اقرأ التحذير. إذا كان ملفاً جمّعته فاسمح هذه المرة فقط ولا تطفئ الحماية إلى الأبد.",
              "في Xiaomi وRedmi وPoco الإذن غالباً في الإعدادات ثم الخصوصية ثم الأذونات الخاصة ثم التطبيقات غير المعروفة. تطبيق الأمان يفحص الملف أيضاً ويمسك التثبيت. حين ينتهي الفحص قد يلزم الضغط على تثبيت من جديد. إذا أرسلته من الحاسوب بكبل فيجب أن يكون التثبيت عبر USB مفتوحاً في خيارات المطوّر.",
              "في Huawei وHonor الطريق الإعدادات ثم الأمان ثم مزيد من الإعدادات ثم التثبيت من مصادر غير معروفة. بعض الموديلات فيها وضع يقطع المصدر الخارجي. لملف لم يأتِ من AppGallery افتح ذلك الوضع لهذا التثبيت فقط ثم أغلقه.",
            ],
          },
          {
            heading: "إلى ماذا تنتبه",
            list: [
              "قد يُظهر Play Protect تحذيراً. هو لا يعرف ملف الاختبار. اقرأ النص. لا تمرّر ملف مؤلف لا تعرفه بـ «ثبّت على أي حال».",
              "حساب الطفل وملف العمل قد يقطعان التثبيت. في مثل هذا الهاتف إذن المستخدم العادي لا يكفي.",
              "التطبيق الذي يفتح الملف والتطبيق الذي سمحت له يجب أن يكونا واحداً. إذا فتحته من Telegram فالإذن لـ Telegram. إذا فتحته بعدها من الملفات فأعطِ الإذن للملفات أيضاً.",
              "حين ينتهي التثبيت يظهر التطبيق في القائمة. إذا لم تره فابحث عن اسم الحزمة أو العنوان على الشاشة. أحياناً يقع داخل مجلد.",
              "الحذف من الإعدادات أو بالضغط المطوّل على الأيقونة. حين يُحذف قد يذهب أيضاً السطر الذي حفظه التطبيق في الداخل.",
            ],
            paragraphs: [
              "هذا الطريق لا يحل محل مراجعة المتجر. إذا أعطيت صديقاً ملف اختبار فهو يرى الخطوات نفسها. النشر للجميع يحتاج Play أو AppGallery.",
            ],
          },
        ],
      },
      {
        id: "errors",
        title: "APK لا يُثبَّت أو لا يُفتح",
        blocks: [
          {
            paragraphs: [
              "الهاتف غالباً يُظهر جملة قصيرة. تحت تلك الجملة قد تكون عدة أسباب. انظر إلى الملف أولاً ثم إلى النسخة القديمة على الهاتف وفي الأخير إلى نوع الهاتف. حذف المكان الخطأ وإعادة التثبيت قد يحذف البيانات القديمة أيضاً. افصل السبب أولاً.",
            ],
          },
          {
            heading: "تعذّر تحليل الحزمة",
            paragraphs: [
              "«حدثت مشكلة أثناء تحليل الحزمة» أو «الملف ليس حزمة صالحة» يعني ملفاً ناقصاً أو ملفاً آخر. المتصفح حفظ صفحة باسم apk. إذا كان الحجم بضعة كيلوبايت فالداخل نص لا برنامج.",
              "احذف الملف. افتح الموقع أو Studio من جديد وانتظر حتى تنتهي نسبة التنزيل. إذا انقطعت الشبكة يبقى ملف مكسور. تسمية zip باسم APK تعطي هذا الخطأ أيضاً. APK يُجمَّع وحده وzip مادته الخام.",
            ],
          },
          {
            heading: "التوقيع غير متطابق",
            paragraphs: [
              "«الحزمة تتعارض مع حزمة موجودة» أو «التوقيعات غير متطابقة» يعني أن تطبيقاً بالاسم نفسه موجود على الهاتف لكن هذا الملف جُمّع بمفتاح آخر. الهاتف لا يضع ملف مفتاح آخر فوق القديم.",
              "هناك مخرجان. احذف التطبيق القديم وثبّت الجديد. هذا يأخذ السطر المحفوظ في الداخل. أو أعد تجميع الملف الجديد بالمفتاح القديم. إذا استعملت مفتاح تجريب مرة ومفتاحاً آخر للمتجر فالهاتف لا يحسبهما تطبيقاً واحداً. خلط ملف التجريب من Nibras Studio مع مفتاح الإصدار يعطي هذا الخطأ.",
            ],
          },
          {
            heading: "الإصدار أقدم",
            paragraphs: [
              "إذا قال إن الإصدار لا يمكن أن ينزل أو جاء خطأ بدل زر التحديث فـ versionCode في الملف الجديد أصغر من النسخة على الهاتف أو مساوٍ لها. الهاتف لا يرجع إلى الخلف.",
              "كبّر versionCode في build.gradle وأعد التجميع وثبّت ذلك الملف الجديد. تغيير اسم الملف بلا تكبير العدد لا يكفي. حذف القديم يثبّت أيضاً لكن بيانات الشخص تذهب. على هاتف الاختبار يمكن الحذف. على هاتف غيرك كبّر العدد.",
            ],
          },
          {
            heading: "الهاتف غير متوافق",
            paragraphs: [
              "إذا قال إن هذا الإصدار غير متوافق مع جهازك أو كان زر التثبيت خامداً فـ minSdk أعلى من Android الهاتف. الهاتف القديم لا يفتح هدفاً جديداً. والعكس، الملف ذا الهدف القديم جداً قد يقطعه Android الجديد نفسه.",
              "السبب الثاني المعالج. ملف split جُمّع لنوع واحد من الهواتف لا يُفتح على آخر. يلزم APK كامل أو ملف يطابق ذلك الهاتف. لا يمكن رمي AAB مباشرة على الهاتف. يجب أن يصير APK أولاً. المتجر يقوم بهذا التحويل. التثبيت باليد يريد APK.",
            ],
          },
          {
            heading: "التخزين وملف الاختبار",
            paragraphs: [
              "«التخزين غير كافٍ» سبب واضح. احذف الصور وتطبيقاً لا تحتاجه ثم اضغط من جديد. إذا كان الملف نفسه كبيراً فالتثبيت يحتاج فراغاً أكبر من حجم الملف لأن الهاتف يفتحه وينسخه.",
              "«للاختبار فقط» يحدث في بعض تجميعات الفحص من Android Studio. ذلك الملف ليس للمتجر ولا للتثبيت العادي. خذ تجميع إصدار. APK التجريبي من Nibras Studio لا يأتي بهذه الجملة ويمكن تثبيته بالطريق العادي. علم testOnly في Android Studio يوقف التثبيت من تطبيق الملفات.",
            ],
          },
          {
            heading: "Play Protect أو الحماية قطعت",
            paragraphs: [
              "يظهر زر التثبيت ثم تأتي نافذة تطبيق ضار أو نافذة حماية. لا تجاوز هذا التحذير في ملف لا تعرفه. إذا كان النص لا يذكر اسم حزمتك في ملف اختبار جمّعته فقد خلطت الملف.",
              "إذا كان ملفك فاسمح لهذا التثبيت فقط في تلك النافذة. لا تطفئ الحماية لكل الهاتف. في Xiaomi وSamsung الضغط قبل انتهاء الفحص يكرّر الخطأ. انتظر انتهاء الفحص.",
              "ملف العمل ورقابة العائلة وبعض هواتف الشركات تقطع الملف الخارجي بالكامل. في مثل هذا الجهاز قد لا يكون الإعداد في يدك. جرّب على هاتفك.",
            ],
          },
          {
            heading: "ثُبِّت لكنه لا يُفتح",
            paragraphs: [
              "الأيقونة ظاهرة. تضغط فتبقى شاشة بيضاء أو يُغلق التطبيق فوراً. هذا لم يعد خطأ تثبيت. الصفحة أو الصلاحية أو مكتبة في الداخل لا تعمل.",
            ],
            list: [
              "إذا كان تطبيق الويب يُفتح من عنوان فافحص الإنترنت. إذا كان العنوان خطأ تبقى الشاشة فارغة. الصفحة الموضوعة داخل zip يجب أن تُفتح بلا عنوان.",
              "على Huawei وعلى هاتف بلا خدمات Google قد يُسقط الدخول بـ Google أو الخرائط أو إشعار Play عملية الفتح. أخفِ ذلك الجزء أو لا تستدعِ خدمة ليست على الهاتف.",
              "إذا رُفضت الصلاحية يموت الزر. ادخل إلى صلاحية التطبيق من الإعدادات وافتح الكاميرا أو الإشعار.",
              "إذا بقيت بيانات قديمة مكسورة فامسح ذاكرة التطبيق. يمكن أيضاً حذفه وإعادة تثبيته بالمفتاح نفسه. التثبيت بمفتاح آخر يعود إلى خطأ التوقيع.",
              "إذا فُتح عندك فقط لا عند غيرك فأنت لا تنظر إلى فرق المحاكي أو إصدار Android. جرّب هاتفاً قديماً وهاتفاً جديداً.",
            ],
          },
          {
            heading: "افحص بهذا الترتيب",
            ordered: true,
            paragraphs: ["حين تجتمع عدة أسباب غيّر الملف أولاً ثم النسخة القديمة وفي الأخير الهاتف."],
            list: [
              "انظر إلى حجم الملف. إذا كان صغيراً جداً فنزّله من جديد.",
              "إذا كان التطبيق نفسه على الهاتف فافحص التوقيع وversionCode. إذا لم يتطابقا فاحذف أو كبّر العدد وجمّع بالمفتاح نفسه.",
              "إذا كان Android الهاتف أقل مما يطلب التطبيق فيلزم هاتف آخر أو minSdk أقل.",
              "انظر إلى الفراغ. ثم اقرأ نافذة الحماية ولا تطفئها إلى الأبد.",
              "إذا ثُبّت ولم يُفتح فافصل الإنترنت والصلاحية وخدمات Google. الشاشة البيضاء غالباً عنوان خطأ.",
            ],
          },
        ],
      },
    ],
    ru: [
      {
        id: "install",
        title: "Как установить APK на телефон?",
        blocks: [
          {
            paragraphs: [
              "Установить APK — не значит положить его в магазин. Файл открывается на телефоне, телефон просит разрешение, потом приложение появляется в списке. Магазин прячет этот шаг за тебя. У файла, который ты собрал или скачал с сайта, шаг виден тебе.",
              "Не каждый файл, который кончается на apk, ставится. Недокачанный файл, документ с чужим именем и обновление, собранное другой подписью, останавливают телефон. Прежде чем открыть, узнай, откуда файл.",
            ],
          },
          {
            heading: "Перед установкой",
            paragraphs: [
              "Открывай только файл, который собрал сам, или который пришёл с твоего сайта либо со страницы самого автора. APK, который ходит в сообщении, с именем похожим на известное приложение и без своей страницы, может быть другой программой. Буквы apk в имени не значат безопасность.",
              "Файл от Nibras Studio нужен для проверки. Его можно поставить на свой телефон и нажать кнопку. Это не выпуск магазина. При установке телефон может сказать «неизвестное приложение». Это лишь значит, что файл пришёл не из Play.",
              "Окно установки показывает разрешения, которые приложение может спросить. Прочитай список. Если приложение заметок просит камеру, контакты и место, закрой файл. В приложении, которое собрал сам, этот список — то, что ты написал в манифесте.",
            ],
          },
          {
            heading: "Шаги",
            ordered: true,
            paragraphs: ["На Android 8 и новее разрешение — не один общий переключатель. Каждому приложению, которое открывает файл, нужно своё. Разрешение для Chrome не переходит на приложение «Файлы»."],
            list: [
              "Скачай файл до конца. Если размер ноль или намного меньше, чем ты ждал, загрузка не кончилась. Удали этот файл и возьми снова.",
              "Нажми файл apk из папки загрузок или из приложения файлов. Нажатие готовой загрузки под браузером тоже работает.",
              "Если телефон говорит, что установка из этого источника закрыта, перейди в настройку, которая открылась. Включи установку неизвестных приложений для этого приложения или строку с тем же смыслом. Вернись и нажми файл снова.",
              "На старом Android путь другой. Настройки, безопасность, неизвестные источники. После установки закрой эту строку снова.",
              "Прочитай список разрешений. Если согласен, нажми Установить. Когда кончится, появится Открыть.",
              "Если то же приложение уже есть на телефоне и подпись совпадает, кнопка говорит Обновить. Имя пакета должно быть тем же, подпись той же, а versionCode больше.",
              "Открой и один раз нажми главную кнопку. Белый экран или мгновенное закрытие значит, что не работает нутро, а не что установка сорвалась.",
              "После дела разрешение можно выключить. В настройках погаси неизвестную установку у этого браузера или приложения файлов. Уже поставленное приложение не исчезнет.",
            ],
          },
          {
            heading: "Разница по марке",
            paragraphs: [
              "На чистом Android путь короткий. Когда открываешь файл, телефон сам ведёт на страницу разрешения. Так устроены Pixel и часть телефонов Nokia.",
              "На Samsung путь: Настройки, Безопасность и конфиденциальность, установка неизвестных приложений. На части моделей автоблокировка или защита приложений режет файл. Прочитай предупреждение. Если это файл, который собрал сам, разреши только этот раз. Не выключай защиту навсегда.",
              "На Xiaomi, Redmi и Poco разрешение часто лежит в Настройках, Конфиденциальность, особые разрешения, неизвестные приложения. Приложение Безопасность ещё сканирует файл и держит установку. Когда скан кончится, Установить иногда нужно нажать снова. Если кидаешь с компьютера по кабелю, в параметрах разработчика также должна быть включена установка по USB.",
              "На Huawei и Honor путь: Настройки, Безопасность, ещё настройки, установка из неизвестных источников. На части моделей есть режим, который режет внешний источник. Для файла не из AppGallery открой этот режим только на эту установку, потом закрой.",
            ],
          },
          {
            heading: "На что смотреть",
            list: [
              "Play Protect может показать предупреждение. Он не знает твой тестовый файл. Прочитай текст. Файл неизвестного автора не проводи через «всё равно установить».",
              "Детский аккаунт и рабочий профиль могут отрезать установку. На таком телефоне обычного разрешения пользователя мало.",
              "Приложение, которое открывает файл, и приложение, которому ты разрешил, должны быть одним. Если открываешь из Telegram, разрешение для Telegram. Если потом открываешь из Файлов, дай разрешение и Файлам.",
              "Когда установка кончается, приложение видно в меню. Если не видно, поищи имя пакета или заголовок с экрана. Иногда оно падает внутрь папки.",
              "Удаление — из настроек или долгим нажатием на значок. Когда удалишь, строка, которую приложение хранило внутри, тоже может уйти.",
            ],
            paragraphs: [
              "Этот путь не заменяет проверку магазина. Если отдаёшь тестовый файл другу, он видит те же шаги. Выпуск для всех требует Play или AppGallery.",
            ],
          },
        ],
      },
      {
        id: "errors",
        title: "APK, который не ставится и не открывается",
        blocks: [
          {
            paragraphs: [
              "Телефон обычно показывает одну короткую фразу. Под ней может сидеть несколько причин. Сначала смотри на сам файл, потом на старую копию на телефоне, в конце на вид телефона. Удалить не то место и поставить снова иногда стирает и старые данные. Сначала отдели причину.",
            ],
          },
          {
            heading: "Пакет не разобран",
            paragraphs: [
              "«При анализе пакета произошла ошибка» или «файл не является допустимым пакетом» значит недокачанный или другой файл. Браузер сохранил страницу под именем apk. Если размер несколько килобайт, внутри текст, а не программа.",
              "Удали файл. Открой сайт или Studio снова и дождись, пока процент загрузки дойдёт до конца. Если сеть оборвалась, остаётся битый файл. Переименовать zip в APK даёт ту же ошибку. APK собирается отдельно, zip — его сырьё.",
            ],
          },
          {
            heading: "Подпись не совпадает",
            paragraphs: [
              "«Пакет конфликтует с уже установленным» или «подписи не совпадают» значит, что на телефоне уже есть приложение с тем же именем, но этот файл собран другим ключом. Телефон не кладёт файл другого ключа поверх старого.",
              "Выхода два. Удалить старое приложение и поставить новое. Это уносит сохранённую внутри строку. Либо собрать новый файл снова старым ключом. Если для проверки один раз брал debug-ключ, а для магазина другой, телефон не считает их одним приложением. Смешать debug-файл Nibras Studio со своим release-ключом даёт эту ошибку.",
            ],
          },
          {
            heading: "Версия старее",
            paragraphs: [
              "Если написано, что версию нельзя понизить, или вместо кнопки обновления приходит ошибка, versionCode нового файла меньше копии на телефоне или равен ей. Телефон назад не идёт.",
              "Подними versionCode в build.gradle, собери снова и поставь этот новый файл. Сменить имя файла, не подняв число, недостаточно. Удаление старого тоже ставит, но данные человека уходят. На своём тестовом телефоне удалить можно. На чужом поднимай число.",
            ],
          },
          {
            heading: "Телефон не подходит",
            paragraphs: [
              "Если написано, что эта версия несовместима с устройством, или кнопка установки немая, minSdk приложения выше Android телефона. Старый телефон не открывает новую цель. Наоборот, файл с очень старой целью новый Android может отрезать сам.",
              "Вторая причина — процессор. Split-файл, собранный только под один вид телефона, на другом не открывается. Нужен полный APK или файл под этот телефон. Бросить AAB прямо на телефон нельзя. Сначала он должен стать APK. Магазин делает это сам. Ручная установка хочет APK.",
            ],
          },
          {
            heading: "Память и тестовый файл",
            paragraphs: [
              "«Недостаточно памяти» — ясная причина. Удали снимки и ненужное приложение, потом нажми снова. Если сам файл большой, для установки нужно больше свободного места, чем размер файла, потому что телефон открывает его и копирует.",
              "«Только для теста» бывает на части проверочных сборок Android Studio. Этот файл не для магазина и не для обычной установки. Возьми сборку release. Debug APK от Nibras Studio с этой фразой не приходит, его можно ставить обычным путём. Флаг testOnly в Android Studio останавливает установку из приложения файлов.",
            ],
          },
          {
            heading: "Play Protect и защита отрезали",
            paragraphs: [
              "Кнопка установки видна, потом приходит окно вредного приложения или окно защиты. На файле, которого не знаешь, это предупреждение не обходи. Если на тестовом файле, который собрал сам, текст не называет твой пакет, ты перепутал файл.",
              "Если это твой файл, в том окне разреши только эту установку. Не выключай защиту на весь телефон. На Xiaomi и Samsung нажатие до конца скана повторяет ошибку. Дождись конца скана.",
              "Рабочий профиль, семейный контроль и часть корпоративных телефонов режут внешний файл целиком. На таком устройстве настройка может быть не в твоих руках. Проверь на своём телефоне.",
            ],
          },
          {
            heading: "Поставилось, но не открывается",
            paragraphs: [
              "Значок есть. Нажимаешь — остаётся белый экран, или приложение сразу закрывается. Это уже не ошибка установки. Не работает страница, разрешение или библиотека внутри.",
            ],
            list: [
              "Если веб-приложение открывается с адреса, проверь интернет. Если адрес неверный, экран пустой. Страница, положенная внутрь zip, должна открываться и без адреса.",
              "На Huawei и на телефоне без служб Google вход через Google, карты или уведомление Play могут уронить открытие. Спрячь эту часть или не вызывай службу, которой на телефоне нет.",
              "Если разрешение отклонено, кнопка мертва. Зайди в разрешение приложения в настройках и включи камеру или уведомления.",
              "Если остались старые битые данные, очисти память приложения. Можно также удалить и поставить снова тем же ключом. Установка другим ключом возвращает ошибку подписи.",
              "Если открывается только у тебя и не у другого, ты не смотришь на разницу эмулятора или своей версии Android. Проверь один старый и один новый телефон.",
            ],
          },
          {
            heading: "Проверяй в таком порядке",
            ordered: true,
            paragraphs: ["Когда несколько причин лежат вместе, сначала меняй файл, потом старую копию, в конце телефон."],
            list: [
              "Посмотри размер файла. Если он слишком мал, скачай снова.",
              "Если то же приложение есть на телефоне, проверь подпись и versionCode. Если не совпадают, удали или подними число и собери тем же ключом.",
              "Если Android телефона ниже, чем просит приложение, нужен другой телефон или более низкий minSdk.",
              "Посмотри свободное место. Потом прочитай окно защиты и не выключай её навсегда.",
              "Если поставилось и не открывается, раздели интернет, разрешение и службы Google. Белый экран часто значит неверный адрес.",
            ],
          },
        ],
      },
    ],
  };
  return all[lang];
}
