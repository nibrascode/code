import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";
import { installSections } from "@/lib/apk-install";
import { storeSections } from "@/lib/apk-stores";

const FOLDERS = `Qeyd/
  settings.gradle
  build.gradle
  gradle.properties
  gradlew
  gradle/wrapper/
  app/
    build.gradle
    src/main/
      AndroidManifest.xml
      java/az/studio/qeyd/
        MainActivity.kt
        SiyahiEkran.kt
        QeydEkran.kt
        GirisEkran.kt
      res/layout/
      res/values/
      res/mipmap-hdpi/
      assets/
  server/          (ayrı ünvanda)`;

export function apkAdvanced(lang: Lang): ProgrammingSection[] {
  const all: Record<Lang, ProgrammingSection[]> = {
    az: [
      {
        id: "inside",
        title: "APK-nın içində nə dayanır?",
        blocks: [
          {
            paragraphs: [
              "APK əslində başqa adlı bir arxivdir. Adı .apk ilə bitir, amma içi qovluq və fayllardan ibarətdir. Telefon həmin bir faylı açır, imzanı yoxlayır, sonra içindəki proqramı işə salır. İçini dəyişib yenidən bağlamaq tətbiqi sənin etmir. İmza pozulur və telefon faylı rədd edir.",
              "Çöldən iki APK eyni görünə bilər. Biri içində bir səhifə saxlayır, o biri isə çox ekran, şəkil və kitabxana. Ölçü yazının uzunluğundan yox, şəkillərdən və əlavə olunmuş alətlərdən böyüyür.",
            ],
            list: [
              "AndroidManifest.xml tətbiqin adını, paketini, açılış ekranını və istəyə biləcəyi icazələri deyir.",
              "classes.dex telefonun işlətdiyi proqramdır. Kotlin və Java yığılanda buna çevrilir. Veb APK-da öz məntiqi az olur, səhifə ayrıca durur.",
              "res qovluğu şəkil, yazı və ekran düzümünü saxlayır.",
              "resources.arsc hansı adın hansı şəkilə və yazıya bağlandığını deyən cədvəldir.",
              "META-INF imzadır. İçəridə bir fayl dəyişsə və imza yenilənməsə, quraşdırma dayanır.",
              "Veb APK-da saytın özü assets və ya buna bənzər qovluqda durur. Pəncərə həmin faylları açır.",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "İcazələr nə üçündür?",
        blocks: [
          {
            paragraphs: [
              "APK telefonda durur deyə kamera, rehber və ya yer öz-özünə açılmır. Manifest yalnız tətbiqin nə istəyə biləcəyini yazır. Adam razılığı çox vaxt həmin ekran ilk dəfə açılınca verir. Razılıq yoxdursa, həmin iş getmir, tətbiqin qalanı isə qala bilər.",
              "Yalnız ekranın işlətdiyini istə. Qeyd tətbiqinə mikrofon lazım deyil. Xəritə yer istəyir. Serverlə danışan ekran internet istəyir. Artıq icazə adamı qorxudur və mağaza baxışında da sual doğurur.",
              "Veb APK saytı açırsa, internet lazımdır. Kamera öz-özünə gəlmir. Həm qabıq, həm səhifə kameranı istəməli, adam da razı olmalıdır. İcazəni ilk açılışa yox, kameranın durduğu ekrana saxla.",
            ],
          },
        ],
      },
      {
        id: "sign",
        title: "Debug, release və AAB",
        blocks: [
          {
            paragraphs: [
              "Debug APK yoxlama üçündür. Nibras Studio-nun yığdığı APK debug imzalıdır. Onu öz telefonuna quraşdırıb düyməni sınamaq olar. Mağaza bu faylı adətən son buraxılış kimi qəbul etmir. Dostuna test üçün vermək olar, telefon isə tanınmayan mənbə barədə xəbərdarlıq göstərə bilər.",
              "Release APK sənin öz açarınla imzalanır. Həmin açar növbəti yeniləmənin səndən gəldiyini göstərir. Açarı itirsən, eyni tətbiqin üstünə yenisini qoya bilməzsən. Yeni paket adı başqa tətbiq sayılır və köhnəsinin yanında ayrıca durur.",
              "versionCode tam ədəddir. Hər yeni faylda bu ədəd böyüməlidir. versionName adamın gördüyü addır, məsələn 1.2. Ədəd artmasa, telefon yenini köhnənin yerinə qoymur.",
              "AAB mağazanın çox vaxt istədiyi bağlamadır. APK telefonun quraşdırdığı fayldır. Mağaza AAB-ni telefonun növünə görə kiçik APK-lara bölə bilər. Özün birbaşa quraşdırırsansa, əlində APK olmalıdır.",
            ],
          },
        ],
      },
      {
        id: "advanced",
        title: "İnkişaf etmiş APK nədir?",
        blocks: [
          {
            paragraphs: [
              "Sadə APK bir ekrandır. Bir sətri telefonda saxlayır. Adamın kim olduğunu bilmir. Bağlayıb açanda sətir yerindədir və bu bəs edir. Qeyd, sayğac və bir düyməlik səhifə bu növdür. Onu bir gündə yığmaq olar.",
              "İnkişaf etmiş APK çox ekrandır. Hesab var. Məlumat başqa telefonda da görünməlidir. Siyahı internetdən gəlir. Şəkil göndərilir. Tətbiq bağlı olanda bildiriş gələ bilər. İki adam eyni dəyişikliyi görür. Bu artıq bir faylın içinə sıxılmış səhifə deyil. Telefon, server və saxlanan məlumat birlikdə işləyir.",
              "İnkişaf etmiş tətbiq birinci gün böyük başlamır. Əvvəl sadə ekran bitir. Sonra ikinci ekran gəlir. Sonra saxlama serverə keçir. Sonra giriş. Hamısını ilk gündə yazmaq boş qabıq verir: düymələr var, iş yoxdur.",
              "Veb yolunda çətin hissə çox vaxt saytın özüdür. Giriş, siyahı və server saytda olur. APK yalnız pəncərədir. Nibras Studio həmin saytı tətbiqə çevirə bilər. Kameranın, faylın və arxa planda işin səhifədən dərin olması lazımdırsa, native və ya Flutter seçilir. Pəncərə bəs edirsə, ikinci proqram yazmaq vaxt itkisidir.",
            ],
          },
        ],
      },
      {
        id: "advanced-how",
        title: "İnkişaf etmiş APK necə düzəldilir?",
        blocks: [
          {
            paragraphs: [
              "Böyük tətbiq bir cümlə ilə başlamır. «Hər şeyi edən proqram» yazısı heç bir ekranı bitirmir. Əvvəl işi kiçik cümlələrə böl. Məsələn: adam girir, öz qeydlərini görür, birini əlavə edir, həmin qeyd ikinci telefonda da görünür. Bu dörd cümlə dörd işdir. Hər birinin ekranı və faylı var.",
            ],
            ordered: true,
            list: [
              "Ekranları ayır. Siyahı, bir qeydin içi, yazma forması və giriş. Hər ekranın bir işi olsun.",
              "Məlumatın yerini seç. Yalnız bu telefona lazım olan sətir telefonda qala bilər. Başqa telefon görməlidirsə, server lazımdır.",
              "Telefon serverə qısa sorğu göndərir. Server məlumat qaytarır. Baza APK-nın içində durmur.",
              "Şifrəni və gizli açarı koda yazma. APK-nı açan adam onu oxuya bilər. Server yoxlayır, telefon yalnız icazə nişanı saxlayır.",
              "Giriş ayrı ekrandır. Server nişan verir. Nişan şifrənin özü deyil.",
              "İcazəni işin durduğu ekrana qoy. Kamera kamera ekranında istənilir, birinci açılışda yox.",
              "İnternet kəsiləndə nəyin açıq qalacağına qərar ver. Son siyahının surəti görünə bilər. Yeni yazı gözləyib sonra gedə bilər. Bunu düşünməsən, ekran sadəcə dayanır.",
              "Dar telefonda yoxla. Sənin ekranına sığan düymə başqa telefonda kənara çıxa bilər.",
              "versionCode-u artır. Köhnə release ilə eyni açarla imzala. Paket adı eyni qalmalıdır.",
              "Mağaza səhifəsi APK-dan ayrıdır. Ad, şəkillər, qısa mətn və məxfilik ünvanı faylın özündə bitmir.",
            ],
          },
          {
            heading: "Gradle qovluqları",
            paragraphs: [
              "Sadə tətbiqdə bir ekran activity_main içində durur. İnkişaf etmiş layihədə hər ekranın öz faylı olur və Gradle onları bir APK-ya yığır. Kökdə settings.gradle hansı modulun olduğunu deyir, adətən app. build.gradle yığımın qaydasıdır. gradle/wrapper və gradlew Gradle-ın özünü layihə ilə birlikdə saxlayır ki, başqa kompüterdə eyni versiya işləsin. gradle.properties kiçik ayarlardır.",
              "Əsas kod app qovluğundadır. app/build.gradle kitabxanaları və SDK versiyasını yazır. src/main/java altında paket qovluqları durur: siyahı, bir qeydin içi və giriş ayrı fayllardır. res/layout ekranın düzümüdür, res/mipmap ikondur, assets içinə qoyulan səhifə və ya şriftdir. app/build və .gradle qovluqları yığım zamanı özü yaranır. Onları əlinlə yazmırsan və Git-ə qoymursan.",
              "Server qovluğu telefon layihəsinin içində olmaya bilər. O, başqa ünvanda işləyir. APK yalnız ona sorğu göndərir. Aşağıdakı qara ekran bu qovluqların verdiyi tətbiqdir: siyahı, şəkil yeri və alt menyu.",
            ],
            code: FOLDERS,
            after: [
              "Əvvəl bir ekranı telefonda gör. Sonra ikincini əlavə et. Serveri lap sonda, ikinci telefon eyni sətri görməlidirsə, bağla. Tərsinə başlasan, düyməsiz bir baza və boş bir APK qalır.",
            ],
          },
        ],
      },
      {
        id: "fresh",
        title: "Yeniləmə və tez-tez verilən suallar",
        blocks: [
          {
            paragraphs: [
              "Telefon köhnə tətbiqi ancaq üç şey üst-üstə düşəndə əvəz edir. Paket adı eyni olmalıdır. İmza eyni açardan gəlməlidir. versionCode böyük olmalıdır. Biri çatışmırsa, yeni fayl ya qurulmur, ya da köhnəsinin yanında ikinci tətbiq kimi durur.",
              "Öz tətbiqini qur. Başqasının APK-sını açıb içinə öz ekranını qoymaq sənin tətbiqin olmur. İmza pozulur, fayl qurulmur və o proqram sənə aid deyil.",
            ],
          },
          {
            heading: "APK ilə AAB eynidirmi?",
            paragraphs: ["Xeyr. APK telefonun açdığı fayldır. AAB mağazaya verilən bağlamadır. Mağaza onu telefona uyğun APK-ya çevirə bilər."],
          },
          {
            heading: "APK iPhone-da açılır?",
            paragraphs: ["Xeyr. iPhone başqa fayl və başqa qayda istifadə edir. Android üçün yığılan APK orada qurulmur."],
          },
          {
            heading: "Fayl niyə böyükdür?",
            paragraphs: ["Ekrandakı bir cümlə faylı böyütmür. Şəkillər, şriftlər və əlavə kitabxanalar böyüdür. Lazım olmayan şəkli içəri qoyma."],
          },
          {
            heading: "Veb APK internetsiz işləyir?",
            paragraphs: ["Zipin içinə qoyduğun səhifə telefonda qalır və aça bilər. Ünvandan yüklənən səhifə isə internet istəyir. Şəkil də çöldən gəlirsə, şəbəkə kəsiləndə boş qalır."],
          },
          {
            heading: "Debug faylı mağazaya qoyulur?",
            paragraphs: ["Xeyr. O, yoxlama üçündür. Mağaza üçün release imzası, böyüyən versiya və çox vaxt AAB lazımdır."],
          },
        ],
      },
    ],
    en: [
      {
        id: "inside",
        title: "What is inside an APK?",
        blocks: [
          {
            paragraphs: [
              "An APK is an archive with another name. The name ends in .apk, but the inside is folders and files. The phone opens that one file, checks the signature, then runs the program inside. Changing the inside and packing it again does not make the app yours. The signature breaks and the phone refuses the file.",
              "Two APKs can look the same from the outside. One holds a page. The other holds many screens, pictures, and libraries. The size grows from pictures and added tools, not from the length of a sentence.",
            ],
            list: [
              "AndroidManifest.xml says the app name, the package, the opening screen, and the permissions it may ask for.",
              "classes.dex is the program the phone runs. Kotlin and Java become this when they are built. A web APK has less of its own logic. The page stands separately.",
              "The res folder holds pictures, words, and screen layout.",
              "resources.arsc is the table that ties a name to a picture and a line of text.",
              "META-INF is the signature. If a file inside changes and the signature is not made again, install stops.",
              "In a web APK the site itself stands in assets or a folder like it. The window opens those files.",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "What are permissions for?",
        blocks: [
          {
            paragraphs: [
              "The camera, the contacts, and the location do not open just because an APK is on the phone. The manifest only lists what the app may ask. The person usually agrees the first time that screen opens. Without a yes, that job does not run. The rest of the app can stay.",
              "Ask only for what the screen uses. A notes app does not need the microphone. A map needs location. A screen that talks to a server needs the internet. An extra permission frightens the person and raises a question in a store review.",
              "A web APK that opens your site needs the internet. The camera does not arrive by itself. The shell and the page both have to ask, and the person has to agree. Keep the permission on the camera screen, not on the first open.",
            ],
          },
        ],
      },
      {
        id: "sign",
        title: "Debug, release, and AAB",
        blocks: [
          {
            paragraphs: [
              "A debug APK is for a test. The APK that Nibras Studio builds is debug-signed. You can install it on your own phone and try the button. A store usually will not take this file as the final release. You can hand it to a friend for a test. The phone may warn about an unknown source.",
              "A release APK is signed with your own key. That key shows that the next update came from you. Lose the key and you cannot put a new file on top of the same app. A new package name counts as another app and stands beside the old one.",
              "versionCode is a whole number. Each new file must raise it. versionName is the name a person sees, such as 1.2. If the number does not rise, the phone does not replace the old file.",
              "An AAB is the bundle a store often wants. An APK is the file the phone installs. The store can split an AAB into smaller APKs for each kind of phone. If you install it yourself, you need an APK in your hand.",
            ],
          },
        ],
      },
      {
        id: "advanced",
        title: "What is an advanced APK?",
        blocks: [
          {
            paragraphs: [
              "A simple APK is one screen. It keeps a line on the phone. It does not know who the person is. Close it and open it, and the line is still there. That is enough. A note, a counter, and a one-button page are this kind. You can build one in a day.",
              "An advanced APK has many screens. There is an account. The data has to appear on another phone. A list comes from the internet. A picture is sent. A notification can arrive while the app is closed. Two people see the same change. This is no longer a page squeezed into a file. The phone, a server, and stored data work together.",
              "An advanced app does not start big on the first day. The simple screen is finished first. Then a second screen arrives. Then saving moves to a server. Then login. Writing all of it on day one gives an empty shell: buttons, and no job.",
              "On the web path the hard part is often the site itself. Login, the list, and the server live on the site. The APK is only the window. Nibras Studio can turn that site into an app. Choose native or Flutter when the camera, the files, or background work must go deeper than a page. If a window is enough, a second program wastes time.",
            ],
          },
        ],
      },
      {
        id: "advanced-how",
        title: "How do you build an advanced APK?",
        blocks: [
          {
            paragraphs: [
              "A large app does not start with one sentence. The words \"a program that does everything\" finish no screen. Split the job into small sentences. For example: a person signs in, sees their notes, adds one, and that note appears on a second phone. Those are four jobs. Each one has a screen and a file.",
            ],
            ordered: true,
            list: [
              "Separate the screens. A list, the inside of one note, a writing form, and login. Give each screen one job.",
              "Choose where the data sits. A line that only this phone needs can stay on the phone. If another phone must see it, you need a server.",
              "The phone sends a short request. The server returns data. The database does not sit inside the APK.",
              "Do not write a password or a secret key into the code. A person who opens the APK can read it. The server checks. The phone keeps only a permit token.",
              "Login is its own screen. The server gives a token. The token is not the password itself.",
              "Put the permission on the screen that does the job. The camera is asked on the camera screen, not on the first open.",
              "Decide what stays open when the internet drops. A copy of the last list can show. A new line can wait and leave later. If you do not plan this, the screen simply stops.",
              "Test on a narrow phone. A button that fits your screen can fall off another phone.",
              "Raise versionCode. Sign with the same key as the old release. The package name must stay the same.",
              "The store page is separate from the APK. The name, the pictures, the short text, and the privacy address do not end inside the file.",
            ],
          },
          {
            heading: "Gradle folders",
            paragraphs: [
              "In a simple app one screen stands in activity_main. In an advanced project each screen has its own file, and Gradle packs them into one APK. At the root, settings.gradle says which module exists, usually app. build.gradle is the rule of the build. gradle/wrapper and gradlew keep Gradle itself with the project, so another computer uses the same version. gradle.properties holds small settings.",
              "The real code sits in the app folder. app/build.gradle writes the libraries and the SDK version. Under src/main/java the package folders stand: the list, the inside of one note, and login are separate files. res/layout is the screen arrangement, res/mipmap is the icon, and assets is a page or a font you put inside. The app/build and .gradle folders appear by themselves during the build. You do not write them by hand and you do not put them in Git.",
              "The server folder may not sit inside the phone project. It runs at another address. The APK only sends it a request. The black screen below is the app these folders produce: a list, a place for a picture, and a bottom menu.",
            ],
            code: FOLDERS,
            after: [
              "See one screen on a phone first. Then add the second. Connect the server at the end, and only if a second phone must see the same line. Start the other way and you keep a database with no button and an empty APK.",
            ],
          },
        ],
      },
      {
        id: "fresh",
        title: "Updates and common questions",
        blocks: [
          {
            paragraphs: [
              "The phone replaces the old app only when three things match. The package name is the same. The signature comes from the same key. versionCode is higher. If one is missing, the new file either does not install, or it stands beside the old one as a second app.",
              "Build your own app. Opening someone else's APK and putting your screen inside it does not make it yours. The signature breaks, the file does not install, and that program is not yours.",
            ],
          },
          { heading: "Are APK and AAB the same?", paragraphs: ["No. An APK is the file the phone opens. An AAB is the bundle you give a store. The store can turn it into an APK that fits the phone."] },
          { heading: "Does an APK open on an iPhone?", paragraphs: ["No. An iPhone uses another file and another rule. An APK built for Android does not install there."] },
          { heading: "Why is the file large?", paragraphs: ["One sentence on the screen does not grow the file. Pictures, fonts, and extra libraries do. Do not put a picture inside if you do not need it."] },
          { heading: "Does a web APK work offline?", paragraphs: ["A page you put inside the zip stays on the phone and can open. A page that loads from an address needs the internet. If a picture also comes from outside, it stays empty when the network drops."] },
          { heading: "Does a debug file go to a store?", paragraphs: ["No. It is for a test. A store wants a release signature, a rising version, and often an AAB."] },
        ],
      },
    ],
    tr: [
      {
        id: "inside",
        title: "APK'nın içinde ne durur?",
        blocks: [
          {
            paragraphs: [
              "APK aslında başka adlı bir arşivdir. Adı .apk ile biter, ama içi klasör ve dosyalardan oluşur. Telefon o tek dosyayı açar, imzayı yoklar, sonra içindeki programı çalıştırır. İçini değiştirip yeniden kapatmak uygulamayı senin yapmaz. İmza bozulur ve telefon dosyayı reddeder.",
              "Dışarıdan iki APK aynı görünebilir. Biri içinde bir sayfa tutar, öteki çok ekran, resim ve kütüphane. Boy yazının uzunluğundan değil, resimlerden ve eklenen araçlardan büyür.",
            ],
            list: [
              "AndroidManifest.xml uygulamanın adını, paketini, açılış ekranını ve isteyebileceği izinleri söyler.",
              "classes.dex telefonun çalıştırdığı programdır. Kotlin ve Java derlenince buna döner. Web APK'da kendi mantığı azdır, sayfa ayrıca durur.",
              "res klasörü resim, yazı ve ekran düzenini tutar.",
              "resources.arsc hangi adın hangi resme ve yazıya bağlandığını söyleyen tablodur.",
              "META-INF imzadır. İçerde bir dosya değişir ve imza yenilenmezse kurulum durur.",
              "Web APK'da sitenin kendisi assets ya da buna benzer bir klasörde durur. Pencere o dosyaları açar.",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "İzinler ne içindir?",
        blocks: [
          {
            paragraphs: [
              "APK telefonda duruyor diye kamera, rehber ya da konum kendiliğinden açılmaz. Manifest yalnız uygulamanın ne isteyebileceğini yazar. Kişi onayı çoğu zaman o ekran ilk kez açılınca verir. Onay yoksa o iş gitmez, uygulamanın kalanı kalabilir.",
              "Yalnız ekranın kullandığını iste. Not uygulamasına mikrofon gerekmez. Harita konum ister. Sunucuyla konuşan ekran internet ister. Fazla izin kişiyi korkutur ve mağaza bakışında da soru doğurur.",
              "Web APK siteyi açıyorsa internet gerekir. Kamera kendiliğinden gelmez. Hem kabuk hem sayfa kamerayı istemeli, kişi de onaylamalıdır. İzni ilk açılışa değil, kameranın durduğu ekrana bırak.",
            ],
          },
        ],
      },
      {
        id: "sign",
        title: "Debug, release ve AAB",
        blocks: [
          {
            paragraphs: [
              "Debug APK yoklama içindir. Nibras Studio'nun derlediği APK debug imzalıdır. Onu kendi telefonuna kurup düğmeyi denemek olur. Mağaza bu dosyayı genellikle son sürüm olarak kabul etmez. Arkadaşına deneme için vermek olur, telefon ise tanınmayan kaynak uyarısı gösterebilir.",
              "Release APK senin kendi anahtarınla imzalanır. O anahtar sonraki güncellemenin senden geldiğini gösterir. Anahtarı kaybedersen aynı uygulamanın üstüne yenisini koyamazsın. Yeni paket adı başka uygulama sayılır ve eskisinin yanında ayrı durur.",
              "versionCode tam sayıdır. Her yeni dosyada bu sayı büyümeli. versionName kişinin gördüğü addır, örneğin 1.2. Sayı artmazsa telefon yenisini eskinin yerine koymaz.",
              "AAB mağazanın çoğu zaman istediği pakettir. APK telefonun kurduğu dosyadır. Mağaza AAB'yi telefonun türüne göre küçük APK'lara bölebilir. Kendin doğrudan kuruyorsan elinde APK olmalıdır.",
            ],
          },
        ],
      },
      {
        id: "advanced",
        title: "Gelişmiş APK nedir?",
        blocks: [
          {
            paragraphs: [
              "Basit APK bir ekrandır. Bir satırı telefonda tutar. Kişinin kim olduğunu bilmez. Kapatıp açınca satır yerindedir ve bu yeter. Not, sayaç ve bir düğmelik sayfa bu türdür. Onu bir günde derlemek olur.",
              "Gelişmiş APK çok ekrandır. Hesap vardır. Veri başka telefonda da görünmelidir. Liste internetten gelir. Resim gönderilir. Uygulama kapalıyken bildirim gelebilir. İki kişi aynı değişikliği görür. Bu artık bir dosyanın içine sıkışmış sayfa değildir. Telefon, sunucu ve saklanan veri birlikte çalışır.",
              "Gelişmiş uygulama ilk gün büyük başlamaz. Önce basit ekran biter. Sonra ikinci ekran gelir. Sonra kayıt sunucuya geçer. Sonra giriş. Hepsini ilk gün yazmak boş kabuk verir: düğmeler vardır, iş yoktur.",
              "Web yolunda zor kısım çoğu zaman sitenin kendisidir. Giriş, liste ve sunucu sitededir. APK yalnız penceredir. Nibras Studio o siteyi uygulamaya çevirebilir. Kameranın, dosyanın ve arka planda işin sayfadan derin olması gerekiyorsa native ya da Flutter seçilir. Pencere yetiyorsa ikinci program yazmak vakit kaybıdır.",
            ],
          },
        ],
      },
      {
        id: "advanced-how",
        title: "Gelişmiş APK nasıl yapılır?",
        blocks: [
          {
            paragraphs: [
              "Büyük uygulama bir cümleyle başlamaz. «Her şeyi yapan program» yazısı hiçbir ekranı bitirmez. Önce işi küçük cümlelere böl. Örneğin: kişi girer, kendi notlarını görür, birini ekler, o not ikinci telefonda da görünür. Bu dört cümle dört iştir. Her birinin ekranı ve dosyası vardır.",
            ],
            ordered: true,
            list: [
              "Ekranları ayır. Liste, bir notun içi, yazma formu ve giriş. Her ekranın bir işi olsun.",
              "Verinin yerini seç. Yalnız bu telefona lazım olan satır telefonda kalabilir. Başka telefon görmeliyse sunucu gerekir.",
              "Telefon sunucuya kısa sorgu gönderir. Sunucu veri döndürür. Veritabanı APK'nın içinde durmaz.",
              "Parolayı ve gizli anahtarı koda yazma. APK'yı açan kişi onu okuyabilir. Sunucu yoklar, telefon yalnız izin nişanı saklar.",
              "Giriş ayrı ekrandır. Sunucu nişan verir. Nişan parolanın kendisi değildir.",
              "İzni işin durduğu ekrana koy. Kamera kamera ekranında istenir, ilk açılışta değil.",
              "İnternet kesilince neyin açık kalacağına karar ver. Son listenin kopyası görünebilir. Yeni yazı bekleyip sonra gidebilir. Bunu düşünmezsen ekran yalnızca durur.",
              "Dar telefonda yokla. Senin ekranına sığan düğme başka telefonda kenara çıkabilir.",
              "versionCode'u yükselt. Eski release ile aynı anahtarla imzala. Paket adı aynı kalmalıdır.",
              "Mağaza sayfası APK'dan ayrıdır. Ad, resimler, kısa metin ve gizlilik adresi dosyanın kendisinde bitmez.",
            ],
          },
          {
            heading: "Gradle klasörleri",
            paragraphs: [
              "Basit uygulamada bir ekran activity_main içinde durur. Gelişmiş projede her ekranın kendi dosyası olur ve Gradle onları bir APK'ya toplar. Kökte settings.gradle hangi modülün olduğunu söyler, genellikle app. build.gradle derlemenin kuralıdır. gradle/wrapper ve gradlew Gradle'ın kendisini projeyle birlikte tutar ki başka bilgisayarda aynı sürüm çalışsın. gradle.properties küçük ayarlardır.",
              "Asıl kod app klasöründedir. app/build.gradle kütüphaneleri ve SDK sürümünü yazar. src/main/java altında paket klasörleri durur: liste, bir notun içi ve giriş ayrı dosyalardır. res/layout ekranın düzenidir, res/mipmap ikondur, assets içine konan sayfa ya da yazı tipidir. app/build ve .gradle klasörleri derleme sırasında kendi oluşur. Onları elle yazmazsın ve Git'e koymazsın.",
              "Sunucu klasörü telefon projesinin içinde olmayabilir. O, başka adreste çalışır. APK yalnız ona sorgu gönderir. Aşağıdaki kara ekran bu klasörlerin verdiği uygulamadır: liste, resim yeri ve alt menü.",
            ],
            code: FOLDERS,
            after: [
              "Önce bir ekranı telefonda gör. Sonra ikincisini ekle. Sunucuyu en sonda, ikinci telefon aynı satırı görmeliyse bağla. Tersine başlarsan düğmesiz bir veritabanı ve boş bir APK kalır.",
            ],
          },
        ],
      },
      {
        id: "fresh",
        title: "Güncelleme ve sık sorulan sorular",
        blocks: [
          {
            paragraphs: [
              "Telefon eski uygulamayı ancak üç şey üst üste gelince değiştirir. Paket adı aynı olmalıdır. İmza aynı anahtardan gelmelidir. versionCode büyük olmalıdır. Biri eksikse yeni dosya ya kurulmaz ya da eskisinin yanında ikinci uygulama gibi durur.",
              "Kendi uygulamanı kur. Başkasının APK'sını açıp içine kendi ekranını koymak onu senin uygulaman yapmaz. İmza bozulur, dosya kurulmaz ve o program sana ait değildir.",
            ],
          },
          { heading: "APK ile AAB aynı mı?", paragraphs: ["Hayır. APK telefonun açtığı dosyadır. AAB mağazaya verilen pakettir. Mağaza onu telefona uygun APK'ya çevirebilir."] },
          { heading: "APK iPhone'da açılır mı?", paragraphs: ["Hayır. iPhone başka dosya ve başka kural kullanır. Android için derlenen APK orada kurulmaz."] },
          { heading: "Dosya neden büyüktür?", paragraphs: ["Ekrandaki bir cümle dosyayı büyütmez. Resimler, yazı tipleri ve ek kütüphaneler büyütür. Gerekmeyen resmi içeri koyma."] },
          { heading: "Web APK internetsiz çalışır mı?", paragraphs: ["Zipin içine koyduğun sayfa telefonda kalır ve açılabilir. Adresten yüklenen sayfa ise internet ister. Resim de dışarıdan geliyorsa ağ kesilince boş kalır."] },
          { heading: "Debug dosyası mağazaya konur mu?", paragraphs: ["Hayır. O, yoklama içindir. Mağaza için release imzası, yükselen sürüm ve çoğu zaman AAB gerekir."] },
        ],
      },
    ],
    ar: [
      {
        id: "inside",
        title: "ماذا يقف داخل APK؟",
        blocks: [
          {
            paragraphs: [
              "APK في الحقيقة أرشيف باسم آخر. الاسم ينتهي بـ .apk لكن الداخل مجلدات وملفات. الهاتف يفتح ذلك الملف الواحد ويفحص التوقيع ثم يشغّل البرنامج الذي بداخله. تغيير الداخل وإغلاقه من جديد لا يجعل التطبيق لك. ينكسر التوقيع ويرفض الهاتف الملف.",
              "قد يبدو ملفان APK متشابهين من الخارج. أحدهما يمسك صفحة والآخر يمسك شاشات كثيرة وصوراً ومكتبات. الحجم يكبر من الصور والأدوات المضافة لا من طول الجملة.",
            ],
            list: [
              "AndroidManifest.xml يقول اسم التطبيق والحزمة وشاشة الفتح والصلاحيات التي قد يطلبها.",
              "classes.dex هو البرنامج الذي يشغّله الهاتف. Kotlin وJava يصيران هذا عند الجمع. في APK الويب المنطق الخاص أقل والصفحة تقف وحدها.",
              "مجلد res يمسك الصور والكتابة وترتيب الشاشة.",
              "resources.arsc جدول يقول أي اسم مربوط بأي صورة وكتابة.",
              "META-INF هو التوقيع. إذا تغيّر ملف في الداخل ولم يُجدَّد التوقيع يتوقف التثبيت.",
              "في APK الويب يقف الموقع نفسه في assets أو مجلد يشبهه. النافذة تفتح تلك الملفات.",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "لماذا الصلاحيات؟",
        blocks: [
          {
            paragraphs: [
              "وجود APK على الهاتف لا يفتح الكاميرا ولا جهات الاتصال ولا المكان وحده. الـ manifest يكتب فقط ماذا قد يطلب التطبيق. الشخص يعطي الموافقة غالباً حين تُفتح تلك الشاشة أول مرة. بلا موافقة ذلك العمل لا يمضي وباقي التطبيق قد يبقى.",
              "اطلب فقط ما تستعمله الشاشة. تطبيق الملاحظات لا يحتاج الميكروفون. الخريطة تحتاج المكان. الشاشة التي تكلّم الخادم تحتاج الإنترنت. الصلاحية الزائدة تخيف الشخص وتثير سؤالاً في مراجعة المتجر.",
              "إذا فتح APK الويب موقعك فالإنترنت لازم. الكاميرا لا تأتي وحدها. يجب أن يطلبها الغلاف والصفحة معاً وأن يوافق الشخص. اترك الصلاحية على شاشة الكاميرا لا في أول فتح.",
            ],
          },
        ],
      },
      {
        id: "sign",
        title: "Debug وrelease وAAB",
        blocks: [
          {
            paragraphs: [
              "APK التجريبي للاختبار. ملف APK الذي يجمعه Nibras Studio موقّع توقيعاً تجريبياً. يمكن تثبيته على هاتفك وتجربة الزر. المتجر عادة لا يقبل هذا الملف كإصدار أخير. يمكن إعطاؤه لصديق للاختبار وقد يُظهر الهاتف تحذيراً عن مصدر غير معروف.",
              "APK الإصدار يُوقَّع بمفتاحك. ذلك المفتاح يُظهر أن التحديث التالي جاء منك. إذا ضاع المفتاح لا تستطيع وضع ملف جديد فوق التطبيق نفسه. اسم حزمة جديد يُحسب تطبيقاً آخر ويقف بجانب القديم.",
              "versionCode عدد صحيح. يجب أن يكبر في كل ملف جديد. versionName هو الاسم الذي يراه الإنسان مثل 1.2. إذا لم يكبر العدد فالهاتف لا يضع الجديد مكان القديم.",
              "AAB هو الحزمة التي يريدها المتجر غالباً. APK هو الملف الذي يثبّته الهاتف. المتجر قد يقسم AAB إلى ملفات APK صغيرة حسب نوع الهاتف. إذا ثبّت بنفسك فيجب أن يكون في يدك APK.",
            ],
          },
        ],
      },
      {
        id: "advanced",
        title: "ما هو APK المتقدّم؟",
        blocks: [
          {
            paragraphs: [
              "APK البسيط شاشة واحدة. يحفظ سطراً على الهاتف. لا يعرف من الشخص. إذا أغلقته وفتحته فالسطر في مكانه وهذا يكفي. الملاحظة والعدّاد وصفحة الزر الواحد من هذا النوع. يمكن جمعه في يوم.",
              "APK المتقدّم شاشات كثيرة. فيه حساب. البيانات يجب أن تظهر على هاتف آخر. القائمة تأتي من الإنترنت. تُرسل صورة. قد يصل إشعار والتطبيق مغلق. شخصان يريان التغيير نفسه. هذا لم يعد صفحة مضغوطة في ملف. الهاتف والخادم والبيانات المحفوظة تعمل معاً.",
              "التطبيق المتقدّم لا يبدأ كبيراً في اليوم الأول. تنتهي الشاشة البسيطة أولاً. ثم تأتي شاشة ثانية. ثم ينتقل الحفظ إلى الخادم. ثم الدخول. كتابة كل هذا في اليوم الأول يعطي قشرة فارغة: أزرار بلا عمل.",
              "في طريق الويب الجزء الصعب غالباً هو الموقع نفسه. الدخول والقائمة والخادم على الموقع. APK مجرد نافذة. يستطيع Nibras Studio تحويل ذلك الموقع إلى تطبيق. يُختار الأصلي أو Flutter حين يجب أن تكون الكاميرا والملفات والعمل في الخلفية أعمق من صفحة. إذا كفت النافذة فكتابة برنامج ثانٍ ضياع وقت.",
            ],
          },
        ],
      },
      {
        id: "advanced-how",
        title: "كيف يُصنع APK المتقدّم؟",
        blocks: [
          {
            paragraphs: [
              "التطبيق الكبير لا يبدأ بجملة واحدة. عبارة «برنامج يفعل كل شيء» لا تنهي أي شاشة. قسّم العمل إلى جمل صغيرة. مثلاً: يدخل الشخص ويرى ملاحظاته ويضيف واحدة وتظهر تلك الملاحظة على هاتف ثانٍ. هذه أربع جمل وأربعة أعمال. لكل واحد شاشته وملفه.",
            ],
            ordered: true,
            list: [
              "افصل الشاشات. قائمة وداخل ملاحظة ونموذج كتابة ودخول. لكل شاشة عمل واحد.",
              "اختر مكان البيانات. السطر الذي يحتاجه هذا الهاتف فقط يمكن أن يبقى عليه. إذا وجب أن يراه هاتف آخر فيلزم خادم.",
              "الهاتف يرسل طلباً قصيراً إلى الخادم. الخادم يرجع بيانات. القاعدة لا تقف داخل APK.",
              "لا تكتب كلمة المرور ولا المفتاح السري في الكود. من يفتح APK يستطيع قراءته. الخادم يفحص والهاتف يحفظ علامة الإذن فقط.",
              "الدخول شاشة وحدها. الخادم يعطي علامة. العلامة ليست كلمة المرور نفسها.",
              "ضع الصلاحية على الشاشة التي تقوم بالعمل. الكاميرا تُطلب في شاشة الكاميرا لا في أول فتح.",
              "قرّر ماذا يبقى مفتوحاً حين ينقطع الإنترنت. قد تظهر نسخة آخر قائمة. الكتابة الجديدة قد تنتظر ثم تذهب. إذا لم تفكر في هذا فالشاشة تقف فقط.",
              "افحص على هاتف ضيق. الزر الذي يتسع لشاشتك قد يخرج على هاتف آخر.",
              "ارفع versionCode. وقّع بالمفتاح نفسه الذي للإصدار القديم. اسم الحزمة يجب أن يبقى.",
              "صفحة المتجر منفصلة عن APK. الاسم والصور والنص القصير وعنوان الخصوصية لا تنتهي داخل الملف.",
            ],
          },
          {
            heading: "مجلدات Gradle",
            paragraphs: [
              "في التطبيق البسيط تقف شاشة واحدة داخل activity_main. في المشروع المتقدّم لكل شاشة ملفها ويجمعها Gradle في APK واحد. في الجذر يقول settings.gradle أي وحدة موجودة، عادة app. build.gradle قاعدة الجمع. gradle/wrapper وgradlew يبقيان Gradle نفسه مع المشروع كي تعمل النسخة نفسها على حاسوب آخر. gradle.properties إعدادات صغيرة.",
              "الكود الحقيقي في مجلد app. app/build.gradle يكتب المكتبات وإصدار SDK. تحت src/main/java تقف مجلدات الحزمة: القائمة وداخل الملاحظة والدخول ملفات منفصلة. res/layout ترتيب الشاشة وres/mipmap الأيقونة وassets صفحة أو خط تضعه في الداخل. مجلدا app/build و.gradle يظهران وحدهما أثناء الجمع. لا تكتبهما باليد ولا تضعهما في Git.",
              "مجلد الخادم قد لا يقف داخل مشروع الهاتف. هو يعمل على عنوان آخر. APK يرسل إليه طلباً فقط. الشاشة السوداء في الأسفل هي التطبيق الذي تعطيه هذه المجلدات: قائمة ومكان للصورة وقائمة سفلية.",
            ],
            code: FOLDERS,
            after: [
              "انظر إلى شاشة واحدة على الهاتف أولاً. ثم أضف الثانية. اربط الخادم في الأخير وفقط إذا وجب أن يرى الهاتف الثاني السطر نفسه. إذا بدأت بالعكس تبقى قاعدة بلا زر وAPK فارغ.",
            ],
          },
        ],
      },
      {
        id: "fresh",
        title: "التحديث والأسئلة الشائعة",
        blocks: [
          {
            paragraphs: [
              "الهاتف يستبدل التطبيق القديم فقط حين تجتمع ثلاثة أشياء. اسم الحزمة واحد. التوقيع من المفتاح نفسه. versionCode أكبر. إذا نقص واحد فالملف الجديد إما لا يُثبَّت أو يقف بجانب القديم كتطبيق ثانٍ.",
              "ابنِ تطبيقك. فتح APK غيرك ووضع شاشتك داخله لا يجعله تطبيقك. ينكسر التوقيع ولا يُثبَّت الملف وذلك البرنامج ليس لك.",
            ],
          },
          { heading: "هل APK وAAB الشيء نفسه؟", paragraphs: ["لا. APK هو الملف الذي يفتحه الهاتف. AAB حزمة تُعطى للمتجر. المتجر قد يحوّلها إلى APK يناسب الهاتف."] },
          { heading: "هل يُفتح APK على iPhone؟", paragraphs: ["لا. iPhone يستعمل ملفاً آخر وقاعدة أخرى. APK المجمّع لأندرويد لا يُثبَّت هناك."] },
          { heading: "لماذا الملف كبير؟", paragraphs: ["جملة واحدة على الشاشة لا تكبّر الملف. الصور والخطوط والمكتبات الإضافية تكبّره. لا تضع صورة في الداخل إذا لم تحتجها."] },
          { heading: "هل يعمل APK الويب بلا إنترنت؟", paragraphs: ["الصفحة التي وضعتها داخل الـ zip تبقى على الهاتف ويمكن أن تُفتح. الصفحة التي تُحمَّل من عنوان تحتاج الإنترنت. إذا جاءت الصورة من الخارج أيضاً تبقى فارغة حين تنقطع الشبكة."] },
          { heading: "هل يُوضع ملف debug في المتجر؟", paragraphs: ["لا. هو للاختبار. المتجر يريد توقيع إصدار ونسخة تكبر وغالباً AAB."] },
        ],
      },
    ],
    ru: [
      {
        id: "inside",
        title: "Что лежит внутри APK?",
        blocks: [
          {
            paragraphs: [
              "APK на самом деле архив с другим именем. Имя кончается на .apk, но внутри папки и файлы. Телефон открывает этот один файл, проверяет подпись и потом запускает программу внутри. Изменить нутро и закрыть снова не делает приложение твоим. Подпись ломается, и телефон отклоняет файл.",
              "Снаружи два APK могут выглядеть одинаково. Один держит страницу, другой — много экранов, картинок и библиотек. Размер растёт от картинок и добавленных инструментов, а не от длины фразы.",
            ],
            list: [
              "AndroidManifest.xml говорит имя приложения, пакет, экран открытия и разрешения, которые оно может спросить.",
              "classes.dex — программа, которую запускает телефон. Kotlin и Java при сборке становятся этим. В веб-APK своей логики меньше, страница стоит отдельно.",
              "Папка res хранит картинки, текст и раскладку экрана.",
              "resources.arsc — таблица, которая связывает имя с картинкой и строкой.",
              "META-INF — это подпись. Если файл внутри изменился и подпись не обновлена, установка останавливается.",
              "В веб-APK сам сайт стоит в assets или похожей папке. Окно открывает эти файлы.",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "Зачем разрешения?",
        blocks: [
          {
            paragraphs: [
              "Камера, контакты и место не открываются только потому, что APK лежит на телефоне. Манифест лишь пишет, что приложение может спросить. Человек обычно соглашается, когда этот экран открывается первый раз. Без согласия эта работа не идёт, остальное приложение может остаться.",
              "Проси только то, чем пользуется экран. Приложению заметок микрофон не нужен. Карте нужно место. Экрану, который говорит с сервером, нужен интернет. Лишнее разрешение пугает человека и вызывает вопрос при проверке магазина.",
              "Если веб-APK открывает твой сайт, нужен интернет. Камера сама не приходит. И оболочка, и страница должны её спросить, и человек должен согласиться. Оставь разрешение на экране камеры, а не на первом открытии.",
            ],
          },
        ],
      },
      {
        id: "sign",
        title: "Debug, release и AAB",
        blocks: [
          {
            paragraphs: [
              "Debug APK нужен для проверки. APK, который собирает Nibras Studio, подписан отладочной подписью. Его можно поставить на свой телефон и нажать кнопку. Магазин обычно не берёт этот файл как окончательный выпуск. Другу для теста отдать можно, телефон может предупредить о неизвестном источнике.",
              "Release APK подписывается твоим ключом. Этот ключ показывает, что следующее обновление пришло от тебя. Потеряешь ключ — не сможешь положить новый файл поверх того же приложения. Новое имя пакета считается другим приложением и стоит рядом со старым.",
              "versionCode — целое число. В каждом новом файле оно должно вырасти. versionName — имя, которое видит человек, например 1.2. Если число не выросло, телефон не ставит новый файл на место старого.",
              "AAB — пакет, который магазин часто хочет. APK — файл, который ставит телефон. Магазин может разрезать AAB на маленькие APK под вид телефона. Если ставишь сам, в руках должен быть APK.",
            ],
          },
        ],
      },
      {
        id: "advanced",
        title: "Что такое развитый APK?",
        blocks: [
          {
            paragraphs: [
              "Простой APK — это один экран. Он хранит строку на телефоне. Он не знает, кто человек. Закрой и открой — строка на месте, и этого хватает. Заметка, счётчик и страница с одной кнопкой такого вида. Его можно собрать за день.",
              "Развитый APK — это много экранов. Есть учётная запись. Данные должны быть видны и на другом телефоне. Список приходит из интернета. Картинка отправляется. Уведомление может прийти, когда приложение закрыто. Двое видят одно изменение. Это уже не страница, сжатая в файл. Телефон, сервер и сохранённые данные работают вместе.",
              "Развитое приложение не начинается большим в первый день. Сначала заканчивается простой экран. Потом приходит второй. Потом сохранение переходит на сервер. Потом вход. Написать всё это в первый день — получить пустую оболочку: кнопки есть, работы нет.",
              "На веб-пути трудная часть часто сам сайт. Вход, список и сервер живут на сайте. APK — только окно. Nibras Studio может превратить этот сайт в приложение. Native или Flutter выбирают, когда камера, файлы и фоновая работа должны быть глубже страницы. Если окна хватает, вторая программа — потеря времени.",
            ],
          },
        ],
      },
      {
        id: "advanced-how",
        title: "Как собирают развитый APK?",
        blocks: [
          {
            paragraphs: [
              "Большое приложение не начинается одной фразой. Слова «программа, которая делает всё» не заканчивают ни один экран. Раздели работу на короткие фразы. Например: человек входит, видит свои заметки, добавляет одну, и эта заметка видна на втором телефоне. Это четыре фразы и четыре работы. У каждой свой экран и свой файл.",
            ],
            ordered: true,
            list: [
              "Раздели экраны. Список, внутренность одной заметки, форма записи и вход. У каждого экрана одна работа.",
              "Выбери, где лежат данные. Строка, которая нужна только этому телефону, может остаться на нём. Если её должен видеть другой телефон, нужен сервер.",
              "Телефон шлёт серверу короткий запрос. Сервер возвращает данные. База не лежит внутри APK.",
              "Не пиши пароль и тайный ключ в код. Человек, который откроет APK, сможет это прочитать. Проверяет сервер. Телефон хранит только знак разрешения.",
              "Вход — отдельный экран. Сервер даёт знак. Знак — это не сам пароль.",
              "Положи разрешение на экран, где работа. Камеру спрашивают на экране камеры, не при первом открытии.",
              "Реши, что остаётся открытым, когда интернет пропал. Может показаться копия последнего списка. Новая запись может подождать и уйти позже. Если этого не продумать, экран просто встанет.",
              "Проверь на узком телефоне. Кнопка, которая помещается на твоём экране, может вылезти на другом.",
              "Подними versionCode. Подпиши тем же ключом, что и старый release. Имя пакета должно остаться тем же.",
              "Страница магазина отдельно от APK. Имя, картинки, короткий текст и адрес политики не кончаются внутри файла.",
            ],
          },
          {
            heading: "Папки Gradle",
            paragraphs: [
              "В простом приложении один экран стоит в activity_main. В развитом проекте у каждого экрана свой файл, и Gradle собирает их в один APK. В корне settings.gradle говорит, какой модуль есть, обычно app. build.gradle — правило сборки. gradle/wrapper и gradlew держат сам Gradle вместе с проектом, чтобы на другом компьютере работала та же версия. gradle.properties — мелкие настройки.",
              "Настоящий код лежит в папке app. app/build.gradle пишет библиотеки и версию SDK. Под src/main/java стоят папки пакета: список, внутренность заметки и вход — отдельные файлы. res/layout — раскладка экрана, res/mipmap — значок, assets — страница или шрифт, который кладут внутрь. Папки app/build и .gradle появляются сами во время сборки. Их не пишут руками и не кладут в Git.",
              "Папка сервера может не стоять внутри проекта телефона. Она работает по другому адресу. APK только шлёт ей запрос. Чёрный экран ниже — приложение, которое дают эти папки: список, место для картинки и нижнее меню.",
            ],
            code: FOLDERS,
            after: [
              "Сначала увидь один экран на телефоне. Потом добавь второй. Сервер подключай в конце и только если второй телефон должен видеть ту же строку. Начнёшь наоборот — останется база без кнопки и пустой APK.",
            ],
          },
        ],
      },
      {
        id: "fresh",
        title: "Обновление и частые вопросы",
        blocks: [
          {
            paragraphs: [
              "Телефон заменяет старое приложение, только когда сходятся три вещи. Имя пакета одно. Подпись от того же ключа. versionCode больше. Если одного нет, новый файл либо не ставится, либо стоит рядом со старым как второе приложение.",
              "Собирай своё приложение. Открыть чужой APK и положить внутрь свой экран не делает его твоим. Подпись ломается, файл не ставится, и эта программа не твоя.",
            ],
          },
          { heading: "APK и AAB — одно и то же?", paragraphs: ["Нет. APK — файл, который открывает телефон. AAB — пакет, который отдают магазину. Магазин может превратить его в APK под телефон."] },
          { heading: "APK открывается на iPhone?", paragraphs: ["Нет. iPhone использует другой файл и другое правило. APK, собранный для Android, там не ставится."] },
          { heading: "Почему файл большой?", paragraphs: ["Одна фраза на экране файл не растит. Растят картинки, шрифты и лишние библиотеки. Не клади внутрь картинку, которая не нужна."] },
          { heading: "Веб-APK работает без интернета?", paragraphs: ["Страница, которую ты положил в zip, остаётся на телефоне и может открыться. Страница, которая грузится с адреса, хочет интернет. Если картинка тоже приходит снаружи, при обрыве сети она пустая."] },
          { heading: "Debug-файл кладут в магазин?", paragraphs: ["Нет. Он для проверки. Магазину нужна подпись release, растущая версия и часто AAB."] },
        ],
      },
    ],
  };
  return [...all[lang], ...installSections(lang), moneySection(lang), ...storeSections(lang)];
}

function moneySection(lang: Lang): ProgrammingSection {
  const sections: Record<Lang, ProgrammingSection> = {
    az: {
      id: "money",
      title: "Mobil tətbiqdən pul necə qazanılır?",
      blocks: [
        {
          paragraphs: [
            "Pul tətbiqin içində özü yaranmır. Əvvəl adamın işinə yarayan bir ekran olmalıdır. Sonra o işin bir hissəsini ödənişli edirsən və ya reklam göstərirsən. Boş tətbiqə ödəniş düyməsi qoymaq pul gətirmir. Adam səbəbi görmürsə, basmır.",
            "Qazanc adətən az başlayır. Əvvəl on nəfər tətbiqi açıb işini bitirməlidir. Sonra ödəniş və ya reklam əlavə olunur. İlk gündə reklam şəbəkəsi, mağaza hesabı və bank qoşmaq olar, amma gələn pul istifadəçidən asılıdır.",
          ],
        },
        {
          heading: "Pullu yollar",
          paragraphs: [
            "Bir neçə düz yol var. Hamısını eyni vaxtda doldurmaq ekranı korlayır. Birini seç, işlədiyini gör, sonra ikincini əlavə et.",
          ],
          list: [
            "Ödənişli quraşdırma. Adam tətbiqi mağazadan alanda bir dəfə ödəyir. Kiçik və bitmiş alət üçün uyğundur.",
            "Tətbiqin içində bir dəfəlik alış. Əlavə səhifə, reklamsız rejim və ya bir paket. Rəqəmsal mal mağazada satılırsa, mağazanın öz ödənişindən keçməlidir.",
            "Abunə. Hər ay və ya hər il yenilənir. Adam nə vaxt bitəcəyini və necə dayandıracağını görməlidir.",
            "Reklam. Baner ekranın kənarında durur. Tam ekran reklam işin arasını kəsməməlidir. Mükafatlı reklamda adam özü baxır və qarşılığında bir şey alır.",
            "Öz xidmətin. Tətbiq saytının pəncərəsidir. Dərs, yer bronu və ya səndən kənarda görülən iş saytda ödənilə bilər. Tətbiqin içində sərf olunan rəqəmsal mal üçün mağaza çox vaxt öz ödənişini istəyir.",
          ],
        },
        {
          heading: "Nəyi qoşmalısan",
          paragraphs: [
            "Pulun sənə çatması üçün tətbiqdən kənar hesablar da lazımdır. Onlar APK-nın qovluğunda durmur. Sən saytda qeydiyyatdan keçirsən, tətbiq isə həmin hesabın nömrəsini saxlayır.",
          ],
          list: [
            "Mağaza hesabı. Google Play-ə çıxarmaq üçün Play Console lazımdır. Açılışında bir dəfəlik ödəniş olur.",
            "Satıcı profili və bank. Mağaza pulu hara köçürəcəyini bilməlidir. Vergi məlumatı da soruşulur.",
            "Rəqəmsal alış üçün Play Billing. Tətbiqin içinə kitabxana qoşulur. Qiymət mağazada məhsul kimi açılır, kodun içinə gizli qiymət yazılmır.",
            "Reklam üçün reklam şəbəkəsinin hesabı. Tətbiqə reklam vahidinin nömrəsi verilir. Avropa istifadəçisi varsa, razılıq pəncərəsi də lazımdır.",
            "Məxfilik səhifəsi. Nə yığdığını, reklam və ödənişi bir ünvanda yaz. Mağaza həmin ünvanı istəyir.",
            "Yoxlama istifadəçisi. Öz kartınla ilk alış etmə. Mağazanın lisenziya yoxlayıcısı saxta ödənişlə düyməni sınamağa imkan verir.",
          ],
          after: [
            "Nibras Studio-nun debug APK-sı yoxlama üçündür. Onunla mağaza ödənişi açılmır. Saytın özündə ödəniş varsa, pəncərə həmin səhifəni aça bilər. Mağazaya qoyanda isə release imza, böyüyən versiya və mağazanın qaydası lazımdır.",
          ],
        },
        {
          heading: "Nəyə diqqət etməlisən",
          paragraphs: [
            "Mağaza satışın bir hissəsini özündə saxlayır, qalanı sənə keçir. Dəqiq pay mağazanın öz səhifəsində yazılır və dəyişə bilər. Gələn məbləğdən vergini öz ölkənin qaydası ilə hesablamaq lazımdır.",
          ],
          list: [
            "Qiyməti gizlətmə. Düymənin yanında məbləğ və müddət görünsün. Abunədə nə vaxt yeniləndiyi yazılsın.",
            "Dayandırma çətin olmasın. Adam abunəni mağazanın abunə səhifəsindən bağlaya bilməlidir.",
            "Reklam sistem düyməsi kimi görünməsin. Bağlamaq işarəsi kiçik və yalançı olmasın. Ekranın əsas düyməsinin üstünü örtmə.",
            "Uşaqlara xüsusi qayda var. Uşaq tətbiqində reklam və alış daha sərt yoxlanılır. Yaşını bilmirsənsə, uşaq üçün hazırlamış kimi doldurma.",
            "Sənə aid olmayan malı satma. Başqasının kursunu, musiqisini və ya şəklini öz adına ödənişli etmə.",
            "Gizli açarı və ödəniş sirrini APK-nın içinə yazma. Onu açan adam oxuya bilər. Yoxlama serverdə qalsın.",
            "İlk pulu vəd etmə. Reklamın gəliri göstərişdən asılıdır. Heç kim açmırsa, şəbəkə də ödəmir.",
            "Qaydanı pozan tətbiqin hesabı bağlana bilər. Yanıltıcı düymə, gizli abunə və işləməyən ödəniş buna aiddir.",
          ],
        },
      ],
    },
    en: {
      id: "money",
      title: "How can a mobile app earn money?",
      blocks: [
        {
          paragraphs: [
            "Money does not appear inside the app by itself. First there must be a screen that does a job for a person. Then you charge for a part of that job, or you show an ad. A pay button on an empty app brings nothing. If the person does not see a reason, they do not press it.",
            "The income usually starts small. First ten people should open the app and finish their job. Then you add a payment or an ad. You can connect a store account, an ad network, and a bank on the first day, but the money still depends on users.",
          ],
        },
        {
          heading: "Ways to charge",
          paragraphs: ["There are a few straight paths. Filling all of them at once ruins the screen. Pick one, see that it works, then add the second."],
          list: [
            "A paid install. The person pays once when they take the app from the store. This fits a small finished tool.",
            "A one-time purchase inside the app. An extra page, a mode without ads, or a pack. If the digital good is sold in the store, it has to pass through the store's own payment.",
            "A subscription. It renews every month or every year. The person should see when it ends and how to stop it.",
            "Ads. A banner stands at the edge of the screen. A full-screen ad should not cut through the job. In a rewarded ad the person chooses to watch and gets something in return.",
            "Your own service. The app is a window onto the site. A lesson, a booking, or work done outside the phone can be paid on the site. For a digital good used inside the app, the store often wants its own payment.",
          ],
        },
        {
          heading: "What you have to connect",
          paragraphs: [
            "For the money to reach you, accounts outside the app are needed too. They do not sit in the APK folder. You register on a site, and the app keeps that account's number.",
          ],
          list: [
            "A store account. To ship on Google Play you need Play Console. Opening it has a one-time fee.",
            "A merchant profile and a bank. The store has to know where to send the money. It also asks for tax information.",
            "Play Billing for a digital purchase. A library is connected inside the app. The price is opened as a product in the store. You do not hide the price in the code.",
            "An ad network account for ads. The app is given the ad unit number. If a user is in Europe, a consent window is needed too.",
            "A privacy page. Write what you collect, and mention ads and payment, at one address. The store asks for that address.",
            "A test user. Do not make the first purchase with your own card. The store's license tester lets you try the button with a fake payment.",
          ],
          after: [
            "The debug APK from Nibras Studio is for a test. Store payment does not open with it. If the site itself has payment, the window can open that page. Putting it in a store still needs a release signature, a rising version, and the store's rule.",
          ],
        },
        {
          heading: "What to watch",
          paragraphs: [
            "The store keeps a part of the sale and the rest comes to you. The exact share is written on the store's own page and can change. Tax on the amount that arrives is counted by your own country's rule.",
          ],
          list: [
            "Do not hide the price. The amount and the period should show next to the button. A subscription should say when it renews.",
            "Stopping should not be hard. The person should be able to close the subscription from the store's subscription page.",
            "An ad should not look like a system button. The close mark should not be tiny or fake. Do not cover the screen's main button.",
            "Children have a stricter rule. Ads and purchases in a children's app are checked more tightly. If you do not know the age, do not fill the app as if it were made for children.",
            "Do not sell a good that is not yours. Do not put someone else's course, music, or picture behind your own pay button.",
            "Do not write a secret key or a payment secret inside the APK. A person who opens it can read that. Leave the check on the server.",
            "Do not promise the first money. Ad income depends on views. If nobody opens the app, the network does not pay either.",
            "An app that breaks the rule can lose the account. A misleading button, a hidden subscription, and a payment that does not work belong here.",
          ],
        },
      ],
    },
    tr: {
      id: "money",
      title: "Mobil uygulamadan nasıl para kazanılır?",
      blocks: [
        {
          paragraphs: [
            "Para uygulamanın içinde kendi oluşmaz. Önce kişinin işine yarayan bir ekran olmalıdır. Sonra o işin bir kısmını ücretli yaparsın ya da reklam gösterirsin. Boş uygulamaya ödeme düğmesi koymak para getirmez. Kişi sebebi görmezse basmaz.",
            "Kazanç genellikle az başlar. Önce on kişi uygulamayı açıp işini bitirmelidir. Sonra ödeme ya da reklam eklenir. İlk gün reklam ağı, mağaza hesabı ve banka bağlanabilir, ama gelen para kullanıcıya bağlıdır.",
          ],
        },
        {
          heading: "Ücretli yollar",
          paragraphs: ["Birkaç düz yol vardır. Hepsini aynı anda doldurmak ekranı bozar. Birini seç, çalıştığını gör, sonra ikincisini ekle."],
          list: [
            "Ücretli kurulum. Kişi uygulamayı mağazadan alınca bir kez öder. Küçük ve bitmiş araç için uygundur.",
            "Uygulamanın içinde bir kerelik alış. Ek sayfa, reklamsız kip ya da bir paket. Sayısal mal mağazada satılıyorsa mağazanın kendi ödemesinden geçmelidir.",
            "Abonelik. Her ay ya da her yıl yenilenir. Kişi ne zaman biteceğini ve nasıl durduracağını görmelidir.",
            "Reklam. Şerit ekranın kenarında durur. Tam ekran reklam işin arasını kesmemelidir. Ödüllü reklamda kişi kendi bakar ve karşılığında bir şey alır.",
            "Kendi hizmetin. Uygulama sitenin penceresidir. Ders, yer ayırtma ya da telefondan uzakta görülen iş sitede ödenebilir. Uygulamanın içinde tüketilen sayısal mal için mağaza çoğu zaman kendi ödemesini ister.",
          ],
        },
        {
          heading: "Neyi bağlamalısın",
          paragraphs: [
            "Paranın sana ulaşması için uygulamanın dışında hesaplar da gerekir. Onlar APK klasöründe durmaz. Sen sitede kayıt olursun, uygulama ise o hesabın numarasını saklar.",
          ],
          list: [
            "Mağaza hesabı. Google Play'e çıkmak için Play Console gerekir. Açılışında bir kerelik ücret olur.",
            "Satıcı profili ve banka. Mağaza parayı nereye göndereceğini bilmelidir. Vergi bilgisi de sorulur.",
            "Sayısal alış için Play Billing. Uygulamanın içine kütüphane bağlanır. Fiyat mağazada ürün olarak açılır, kodun içine gizli fiyat yazılmaz.",
            "Reklam için reklam ağının hesabı. Uygulamaya reklam biriminin numarası verilir. Avrupa kullanıcısı varsa onay penceresi de gerekir.",
            "Gizlilik sayfası. Ne topladığını, reklamı ve ödemeyi bir adreste yaz. Mağaza o adresi ister.",
            "Deneme kullanıcısı. İlk alışı kendi kartınla yapma. Mağazanın lisans denemesi sahte ödemeyle düğmeyi sınamaya izin verir.",
          ],
          after: [
            "Nibras Studio'nun debug APK'sı yoklama içindir. Onunla mağaza ödemesi açılmaz. Sitenin kendisinde ödeme varsa pencere o sayfayı açabilir. Mağazaya koyunca ise release imza, yükselen sürüm ve mağazanın kuralı gerekir.",
          ],
        },
        {
          heading: "Neye dikkat etmelisin",
          paragraphs: [
            "Mağaza satışın bir kısmını kendinde tutar, kalanı sana geçer. Kesin pay mağazanın kendi sayfasında yazar ve değişebilir. Gelen tutarın vergisini kendi ülkenin kuralıyla hesaplamak gerekir.",
          ],
          list: [
            "Fiyatı gizleme. Düğmenin yanında tutar ve süre görünsün. Abonelikte ne zaman yenilendiği yazılsın.",
            "Durdurmak zor olmasın. Kişi aboneliği mağazanın abonelik sayfasından kapatabilmelidir.",
            "Reklam sistem düğmesi gibi görünmesin. Kapatma işareti küçük ve sahte olmasın. Ekranın ana düğmesinin üstünü örtme.",
            "Çocuklar için ayrı kural vardır. Çocuk uygulamasında reklam ve alış daha sıkı yoklanır. Yaşını bilmiyorsan çocuk için yapılmış gibi doldurma.",
            "Sana ait olmayan malı satma. Başkasının dersini, müziğini ya da resmini kendi adına ücretli etme.",
            "Gizli anahtarı ve ödeme sırrını APK'nın içine yazma. Onu açan kişi okuyabilir. Yoklama sunucuda kalsın.",
            "İlk parayı vadetme. Reklamın geliri gösterime bağlıdır. Kimse açmıyorsa ağ da ödemez.",
            "Kuralı bozan uygulamanın hesabı kapanabilir. Yanıltıcı düğme, gizli abonelik ve çalışmayan ödeme buna girer.",
          ],
        },
      ],
    },
    ar: {
      id: "money",
      title: "كيف يُكسب المال من تطبيق الهاتف؟",
      blocks: [
        {
          paragraphs: [
            "المال لا يظهر داخل التطبيق وحده. أولاً يجب أن تكون هناك شاشة تنفع الشخص. ثم تجعل جزءاً من ذلك العمل مدفوعاً أو تعرض إعلاناً. زر دفع على تطبيق فارغ لا يأتي بمال. إذا لم يرَ الشخص سبباً فلن يضغط.",
            "الكسب يبدأ عادة قليلاً. أولاً يجب أن يفتح عشرة أشخاص التطبيق وينهوا عملهم. ثم يُضاف الدفع أو الإعلان. يمكن ربط شبكة إعلان وحساب متجر وبنك في اليوم الأول، لكن المال الآتي يعتمد على المستخدم.",
          ],
        },
        {
          heading: "طرق الدفع",
          paragraphs: ["هناك بضع طرق مستقيمة. ملؤها كلها معاً يفسد الشاشة. اختر واحدة وانظر أنها تعمل ثم أضف الثانية."],
          list: [
            "تثبيت مدفوع. يدفع الشخص مرة حين يأخذ التطبيق من المتجر. هذا يناسب أداة صغيرة جاهزة.",
            "شراء لمرة واحدة داخل التطبيق. صفحة إضافية أو وضع بلا إعلان أو حزمة. إذا بِيعت السلعة الرقمية في المتجر فيجب أن تمر بدفع المتجر نفسه.",
            "اشتراك. يتجدد كل شهر أو كل سنة. يجب أن يرى الشخص متى ينتهي وكيف يوقفه.",
            "إعلان. الشريط يقف في طرف الشاشة. الإعلان بملء الشاشة لا ينبغي أن يقطع العمل. في الإعلان المكافأ الشخص يختار أن يشاهد ويأخذ شيئاً في المقابل.",
            "خدمتك أنت. التطبيق نافذة الموقع. الدرس أو الحجز أو العمل الذي يُنجز خارج الهاتف يمكن دفعه على الموقع. للسلعة الرقمية التي تُستهلك داخل التطبيق غالباً ما يريد المتجر دفعه الخاص.",
          ],
        },
        {
          heading: "ماذا يجب أن تربط",
          paragraphs: [
            "كي يصل المال إليك يلزم حسابات خارج التطبيق أيضاً. هي لا تقف في مجلد APK. أنت تسجّل على موقع والتطبيق يحفظ رقم ذلك الحساب.",
          ],
          list: [
            "حساب متجر. للخروج على Google Play يلزم Play Console. في فتحه رسم لمرة واحدة.",
            "ملف بائع وبنك. يجب أن يعرف المتجر أين يرسل المال. ويسأل عن معلومات الضريبة أيضاً.",
            "Play Billing للشراء الرقمي. تُربط مكتبة داخل التطبيق. يُفتح السعر كمنتج في المتجر ولا يُكتب سعر خفي في الكود.",
            "حساب شبكة إعلان للإعلانات. يُعطى التطبيق رقم وحدة الإعلان. إذا كان المستخدم في أوروبا فلزم نافذة موافقة أيضاً.",
            "صفحة خصوصية. اكتب ماذا تجمع واذكر الإعلان والدفع في عنوان واحد. المتجر يطلب ذلك العنوان.",
            "مستخدم تجربة. لا تجعل أول شراء ببطاقتك. مُجرِّب الترخيص في المتجر يسمح بتجربة الزر بدفع غير حقيقي.",
          ],
          after: [
            "ملف APK التجريبي من Nibras Studio للاختبار. دفع المتجر لا يُفتح به. إذا كان في الموقع نفسه دفع فتستطيع النافذة فتح تلك الصفحة. وضعه في المتجر ما زال يحتاج توقيع إصدار ونسخة تكبر وقاعدة المتجر.",
          ],
        },
        {
          heading: "إلى ماذا تنتبه",
          paragraphs: [
            "المتجر يُبقي جزءاً من البيع والباقي يأتي إليك. الحصة الدقيقة مكتوبة في صفحة المتجر نفسه وقد تتغير. ضريبة المبلغ الذي يصل تُحسب بقاعدة بلدك.",
          ],
          list: [
            "لا تخفِ السعر. يظهر المبلغ والمدة بجانب الزر. في الاشتراك يُكتب متى يتجدد.",
            "الإيقاف لا يكون صعباً. يجب أن يستطيع الشخص إغلاق الاشتراك من صفحة اشتراكات المتجر.",
            "الإعلان لا يبدو كزر النظام. علامة الإغلاق لا تكون صغيرة ولا كاذبة. لا تغطِ الزر الرئيسي للشاشة.",
            "للأطفال قاعدة أشد. الإعلان والشراء في تطبيق الأطفال يُفحصان بشدة أكبر. إذا كنت لا تعرف العمر فلا تملأ التطبيق كأنه صُنع للأطفال.",
            "لا تبع سلعة ليست لك. لا تجعل درس غيرك أو موسيقاه أو صورته مدفوعة باسمك.",
            "لا تكتب المفتاح السري ولا سر الدفع داخل APK. من يفتحه يستطيع القراءة. اترك الفحص على الخادم.",
            "لا تعد بأول مال. دخل الإعلان يعتمد على المشاهدات. إذا لم يفتح أحد فالشبكة لا تدفع أيضاً.",
            "التطبيق الذي يخالف القاعدة قد يُغلق حسابه. الزر المضلِّل والاشتراك المخفي والدفع الذي لا يعمل من هذا.",
          ],
        },
      ],
    },
    ru: {
      id: "money",
      title: "Как заработать на мобильном приложении?",
      blocks: [
        {
          paragraphs: [
            "Деньги сами внутри приложения не появляются. Сначала должен быть экран, который делает дело для человека. Потом ты берёшь плату за часть этой работы или показываешь рекламу. Кнопка оплаты на пустом приложении денег не приносит. Если человек не видит причины, он не нажимает.",
            "Доход обычно начинается с малого. Сначала десять человек должны открыть приложение и закончить своё дело. Потом добавляется оплата или реклама. Сеть рекламы, аккаунт магазина и банк можно подключить в первый день, но пришедшие деньги зависят от пользователей.",
          ],
        },
        {
          heading: "Платные пути",
          paragraphs: ["Есть несколько прямых путей. Заполнить все сразу портит экран. Выбери один, увидь, что он работает, потом добавь второй."],
          list: [
            "Платная установка. Человек платит один раз, когда берёт приложение из магазина. Это подходит маленькому готовому инструменту.",
            "Разовая покупка внутри приложения. Дополнительная страница, режим без рекламы или набор. Если цифровой товар продаётся в магазине, он должен пройти через оплату самого магазина.",
            "Подписка. Она обновляется каждый месяц или каждый год. Человек должен видеть, когда она кончается и как её остановить.",
            "Реклама. Полоса стоит у края экрана. Реклама на весь экран не должна резать дело. В рекламе с наградой человек сам смотрит и получает что-то взамен.",
            "Своя услуга. Приложение — окно сайта. Урок, бронь или работа вне телефона могут оплачиваться на сайте. За цифровой товар, который тратится внутри приложения, магазин часто хочет свою оплату.",
          ],
        },
        {
          heading: "Что нужно подключить",
          paragraphs: [
            "Чтобы деньги дошли до тебя, нужны и аккаунты вне приложения. Они не лежат в папке APK. Ты регистрируешься на сайте, а приложение хранит номер этого аккаунта.",
          ],
          list: [
            "Аккаунт магазина. Чтобы выйти в Google Play, нужен Play Console. При открытии есть разовый взнос.",
            "Профиль продавца и банк. Магазин должен знать, куда слать деньги. Спрашивают и налоговые сведения.",
            "Play Billing для цифровой покупки. Внутрь приложения подключается библиотека. Цена открывается как товар в магазине, скрытую цену в код не пишут.",
            "Аккаунт рекламной сети для рекламы. Приложению дают номер рекламного блока. Если пользователь в Европе, нужно и окно согласия.",
            "Страница политики. На одном адресе напиши, что собираешь, и упомяни рекламу и оплату. Магазин просит этот адрес.",
            "Тестовый пользователь. Первую покупку не делай своей картой. Проверка лицензии магазина даёт нажать кнопку поддельной оплатой.",
          ],
          after: [
            "Debug APK от Nibras Studio нужен для проверки. Оплата магазина им не открывается. Если оплата есть на самом сайте, окно может открыть ту страницу. Чтобы положить в магазин, всё равно нужны подпись release, растущая версия и правило магазина.",
          ],
        },
        {
          heading: "На что смотреть",
          paragraphs: [
            "Магазин оставляет себе часть продажи, остальное приходит тебе. Точная доля написана на странице самого магазина и может меняться. Налог с пришедшей суммы считают по правилу своей страны.",
          ],
          list: [
            "Не прячь цену. Сумма и срок должны быть видны рядом с кнопкой. У подписки должно быть написано, когда она обновляется.",
            "Остановка не должна быть трудной. Человек должен закрыть подписку со страницы подписок магазина.",
            "Реклама не должна выглядеть как системная кнопка. Знак закрытия не должен быть крошечным или фальшивым. Не закрывай главную кнопку экрана.",
            "Для детей правило строже. Рекламу и покупки в детском приложении проверяют жёстче. Если не знаешь возраст, не заполняй приложение так, будто оно сделано для детей.",
            "Не продавай чужое. Не ставь чужой курс, музыку или картинку за свою кнопку оплаты.",
            "Не пиши тайный ключ и секрет оплаты внутрь APK. Человек, который откроет файл, сможет это прочитать. Проверку оставь на сервере.",
            "Не обещай первые деньги. Доход рекламы зависит от показов. Если никто не открывает, сеть тоже не платит.",
            "Приложение, которое ломает правило, может потерять аккаунт. Сюда входят обманная кнопка, скрытая подписка и оплата, которая не работает.",
          ],
        },
      ],
    },
  };
  return sections[lang];
}
