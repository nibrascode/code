import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

const KEYTOOL = `keytool -genkeypair -v \\
  -keystore qeyd.keystore \\
  -alias qeyd \\
  -keyalg RSA \\
  -keysize 2048 \\
  -validity 10000`;

const GRADLE = `// app/build.gradle  — şifrəni repoya yazma
signingConfigs {
    release {
        storeFile file("qeyd.keystore")
        storePassword "ACARIN"
        keyAlias "qeyd"
        keyPassword "ACARIN"
    }
}`;

export function identitySections(lang: Lang): ProgrammingSection[] {
  const all: Record<Lang, ProgrammingSection[]> = {
    az: [
      {
        id: "name-icon",
        title: "İkon, ad və paket adı",
        blocks: [
          {
            paragraphs: [
              "Tətbiqin üç adı var və onlar eyni işi görmür. Ekranın altındakı qısa ad adamın gördüyüdür. Mağaza səhifəsindəki ad daha uzun ola bilər. Paket adı isə adamın oxuduğu söz deyil. Telefon və mağaza tətbiqi bununla tanıyır. Birini dəyişmək o birini özü dəyişmir.",
              "İkon da ayrıdır. Telefonun menyusundakı şəkil ilə mağazanın 512 ölçülü şəkli eyni rəsm ola bilər, amma ayrı fayldır. Başqasının nişanını və ya məşhur tətbiqin adını götürmək həm rədd, həm də sənin tətbiqin sayılmır.",
            ],
          },
          {
            heading: "Ekranın altındakı ad",
            paragraphs: [
              "Bu ad ikonun altında görünür. Uzun olsa, telefon kəsir. İki və ya üç qısa söz bəs edir. «Mənim ən yaxşı qeyd tətbiqim» menyuda sığmır.",
              "Native layihədə ad res/values/strings.xml içində app_name sətrində durur. AndroidManifest.xml onu android:label=\"@string/app_name\" ilə çağırır. Sözü birbaşa manifestə yazmaq da olar, amma sonra hər dildə ayrı sətir saxlamaq çətinləşir. Başqa dil üçün res/values-tr və res/values-ru qovluğunda eyni app_name təkrarlanır.",
              "Nibras Studio yığımda ad soruşur. Həmin ad pəncərənin başlığına düşür. Saytın içindəki böyük başlıq isə index.html-də qalır. İkisini eyni etmək istəyirsənsə, həm Studio-dakı adı, həm də səhifədəki başlığı dəyiş.",
              "Mağaza adı ayrıca formadadır. Orada bir az uzun yaza bilərsən, amma içində olmayan işi vəd etmə. Menyudakı ad «Qeyd», mağazadakı ad «Qeyd — gündəlik sətir» ola bilər. Paket adı heç birində görünməyə bilər.",
            ],
          },
          {
            heading: "İkon",
            paragraphs: [
              "Telefon şəkli bir ölçüdə saxlamır. Eyni rəsmin bir neçə ölçüsü qovluqlara düzülür. Biri çatışmasa, telefon böyük şəkli kiçildir və ikon bulanıq görünür.",
            ],
            list: [
              "mipmap-mdpi içində 48×48",
              "mipmap-hdpi içində 72×72",
              "mipmap-xhdpi içində 96×96",
              "mipmap-xxhdpi içində 144×144",
              "mipmap-xxxhdpi içində 192×192",
              "Mağaza üçün ayrıca 512×512 PNG. Bu, telefon qovluğuna yox, mağaza formasına qoyulur.",
            ],
            after: [
              "Yeni layihədə ikon çox vaxt dairə və ya yumru kvadrat içində kəsilir. Yazını və vacib xətti kənara qoyma. Ortada bir işarə qalsın. Kənardakı hərf kəsilir.",
              "Faylın adı adətən ic_launcher.png olur. Dairəvi ikon ayrıca ic_launcher_round.png ola bilər. Android Studio-nun Image Asset pəncərəsi bu ölçüləri bir şəkildən özü düzəldir. Əl ilə yalnız bir qovluğa böyük şəkil atmaq kifayət etmir.",
              "Veb APK-da Nibras Studio ikonu yığım addımında alır. Saytın favicon-u həmişə telefon ikonu olmur. Studio-ya verdiyin şəkil kvadrat olsun və kənarında başqa markanın işarəsi olmasın.",
            ],
          },
          {
            heading: "Paket adı",
            paragraphs: [
              "Paket adı tətbiqin daimi nömrəsidir. Adam onu menyuda görməyə bilər, amma telefon iki faylın eyni tətbiq olub-olmadığını bununla bilir. Adətən tərs domen yazılır: az.studio.qeyd. Hər parça kiçik hərfdir. Boşluq, böyük hərf və defis olmaz. Rəqəm parçanın əvvəlində durmur.",
              "Yeri layihənin növünə görə dəyişir. Native və Flutter üçün app/build.gradle içində applicationId sətridir. Capacitor üçün capacitor.config içindəki appId həmin sətirlə eyni olmalıdır. Manifestin köhnə package sətri bəzi layihələrdə qalır. applicationId fərqlidirsə, telefon applicationId-ə baxır.",
              "com.example və com.test ilə mağazaya getmə. Bu, nümunə adıdır. Öz domenin yoxdursa, sabit bir ad seç və onu hər yerdə eyni yaz: az.adın.qeyd. İlk yükləmədən sonra Play və AppGallery bu adı dəyişdirməyə qoymur.",
              "Adı dəyişmək yeni tətbiq açır. Köhnə telefonda köhnə paket qalır, yenisi yanında durur. Yeniləmə keçmir. İçindəki saxlanmış sətir köhnə tətbiqdə qalır. Buna görə adı lap əvvəl, ilk release-dən qabaq qərarlaşdır.",
            ],
          },
          {
            heading: "Nəyi qarışdırma",
            list: [
              "Menyu adını dəyişmək paketi dəyişmir. Yalnız söz dəyişir və yeniləmə eyni tətbiqin üstünə keçir.",
              "Paketi dəyişmək menyu adını özü düzəltmir. İki ayrı işdir.",
              "İkonu dəyişmək açarı dəyişmir. Eyni açarla yeni ikonlu fayl köhnənin yerinə keçir.",
              "Mağaza adı ilə menyu adı eyni olmaya bilər. Yalan olmayan qısa fərq normaldır.",
              "Başqa tətbiqin ikonunu və paketini köçürmək sənin tətbiqin etmir. Mağaza rədd edir, telefon isə imza uyğun gəlməyəndə qurmur.",
            ],
            paragraphs: ["Üçünü bir kağıza yaz: menyu adı, paket adı, açarın harada durduğu. İlk AAB-dən sonra paket kağızdan dəyişmir."],
          },
        ],
      },
      {
        id: "keystore",
        title: "Açar necə yaradılır?",
        blocks: [
          {
            paragraphs: [
              "Açar tətbiqin imzasıdır. Faylı bu açarla bağlayırsan. Telefon və mağaza növbəti faylda eyni açarı axtarır. Eyni paket, eyni açar və daha böyük versionCode varsa, köhnə tətbiq yenilənir. Açar başqadırsa, telefon bunu başqa müəllif sayır və üstünə qoymaz.",
              "Açar bir parol deyil. Keystore adlı fayldır, içində bir və ya bir neçə açar durur. Hər açarın ləqəbi, yəni alias-ı var. Həm faylın parolu, həm də açarın parolu soruşulur. İkisini də itirsən, fayl əlində olsa da aça bilməzsən.",
            ],
          },
          {
            heading: "Əmrlə yaratmaq",
            paragraphs: [
              "Kompüterdə Java qurulubsa, keytool əmri açarı yaradır. Layihənin yanında boş bir qovluq aç və açarı ora qoy. Layihənin Git qovluğuna qoyma. Əmr soruşanda ad, təşkilat və şəhər yazılır. Bilmədiyin sətri boş buraxmaq olar. Parolu terminalın ekranında saxlama.",
            ],
            code: KEYTOOL,
            after: [
              "qeyd.keystore faylın özüdür. qeyd ləqəbdir. 2048 ölçülü RSA bugünkü yığım üçün kifayətdir. 10000 gün uzun müddətdir. Qısa müddət seçsən, açar köhnəlir və yeniləmə dayanır. Əmr bitəndə faylı iki yerdə saxla: birini öz diskində, birini ayrı bir yaddaşda.",
              "Nə yaratdığını görmək üçün keytool -list -v -keystore qeyd.keystore yaz. Parolu soruşur və sertifikatın barmaq izini göstərir. Google giriş və ya xəritə qoşanda həmin barmaq izi lazım ola bilər. Onu da açarla birlikdə saxla.",
            ],
          },
          {
            heading: "Yığıma bağlamaq",
            paragraphs: [
              "Açar faylı tək duranda APK imzalanmır. Release yığım onu çağırmalıdır. Android Studio-da Generate Signed Bundle və ya Generate Signed APK pəncərəsi faylı, ləqəbi və parolu soruşur. Yolu yadda saxlamaq olar, parolu isə hər kəsin gördüyü fayla yazmaq olmaz.",
              "Gradle ilə bağlayanda parolu layihənin içinə düz mətn qoyma. Ayrıca bir faylda saxla və həmin faylı Git-ə əlavə etmə. Nümunə yalnız yerini göstərir. ACARIN yazan yeri öz parolunla dəyiş, faylı isə anbardan kənarda saxla.",
            ],
            code: GRADLE,
            after: [
              "Sonra release yığım bu konfiqurasiyanı çağırır. ./gradlew bundleRelease AAB verir. ./gradlew assembleRelease APK verir. Debug yığım bu açarı işlətmir. O, kompüterin öz debug açarı ilə bağlanır.",
            ],
          },
          {
            heading: "Debug açarı başqadır",
            paragraphs: [
              "Android Studio ilk yoxlamada sənin açarını istəmir. Kompüterdə gizli bir debug.keystora var. Həmin açarla qurulan fayl yalnız sənin maşınındakı yoxlamaya bənzəyir. Başqa kompüterin debug açarı fərqlidir. Buna görə bir kompüterdə qurduğun debug faylın üstünə o biri kompüterin debug faylı keçmir və imza xətası verir.",
              "Nibras Studio-nun APK-sı da debug imzalıdır. Onu dostun telefonunda sınamaq olar. Play və AppGallery həmin faylı son buraxılış kimi qəbul etmir. Mağazaya gedən ilk fayldan etibarən öz release açarın olmalıdır. Bir dəfə debug ilə mağazaya çıxmaq olmur.",
            ],
          },
          {
            heading: "Harada saxlanır və itəndə nə olur",
            paragraphs: [
              "Açarı layihə qovluğunda, poçtda və ümumi diskdə saxlama. Ayrıca yaddaşda və yalnız sənin açdığın yerdə dursun. Parolu açarın yanındakı açıq mətn faylına yazma. Parolu başqa yerdə saxla. İkisini bir yerdə itirmək asandır, bir yerdə oğurlamaq da asandır.",
              "Öz imzaladığın APK-nın açarı itibsə, həmin tətbiqin üstünə yenisini qoya bilməzsən. Köhnəni silib yeni paket adı ilə başlamaq olar. Mağazadakı köhnə səhifə və istifadəçinin məlumatı yeni tətbiqə keçmir.",
              "Play App Signing-də iki açar ola bilər. Yükləmə açarı səndədir, mağazanın imza açarı Google-dadır. Yükləmə açarını itirsən, Play Console-dan sıfırlama istəmək olar. Bu, bir neçə gün çəkə bilər. Mağazanın öz imza açarını itirmək sənin əlinə deyil, onu Google saxlayır. Bu xidmətə qoşulmadan, açarı yalnız səndə olan köhnə tətbiqdə itki son olur.",
              "Huawei-də APK-nı özün imzalayırsansa, eyni qayda var. Açarı itirsən, AppGallery-dəki həmin tətbiqin yeniləməsi dayanır. AAB seçib Huawei-nin imza xidmətinə qoşulmusansa, son imza onlardadır. Yenə də yüklədiyin faylın açarını saxla, çünki növbəti yükləmə onu istəyə bilər.",
            ],
          },
        ],
      },
    ],
    en: [
      {
        id: "name-icon",
        title: "Icon, name, and package name",
        blocks: [
          {
            paragraphs: [
              "An app has three names, and they do not do the same job. The short name under the icon is what a person sees. The name on the store page can be longer. The package name is not a word a person reads. The phone and the store recognize the app by it. Changing one does not change the others by itself.",
              "The icon is separate too. The picture in the phone menu and the store's 512 picture can be the same drawing, but they are different files. Taking someone else's mark, or a famous app's name, is both a refusal and not your app.",
            ],
          },
          {
            heading: "The name under the icon",
            paragraphs: [
              "This name shows under the icon. If it is long, the phone cuts it. Two or three short words are enough. \"My best notes app of all\" does not fit the menu.",
              "In a native project the name stands in the app_name line inside res/values/strings.xml. AndroidManifest.xml calls it with android:label=\"@string/app_name\". You can write the word straight into the manifest, but then a separate line for each language gets harder. For another language the same app_name is repeated in res/values-tr and res/values-ru.",
              "Nibras Studio asks for a name during the build. That name falls on the window title. The large title inside the site stays in index.html. If you want both to match, change the name in Studio and the title on the page.",
              "The store name is a separate form. You can write a little longer there, but do not promise a job the inside does not do. The menu name can be \"Note\" and the store name \"Note — a daily line\". The package name may show in neither.",
            ],
          },
          {
            heading: "The icon",
            paragraphs: ["The phone does not keep the picture in one size. Several sizes of the same drawing are laid into folders. If one is missing, the phone shrinks a large picture and the icon looks blurry."],
            list: [
              "48×48 inside mipmap-mdpi",
              "72×72 inside mipmap-hdpi",
              "96×96 inside mipmap-xhdpi",
              "144×144 inside mipmap-xxhdpi",
              "192×192 inside mipmap-xxxhdpi",
              "A separate 512×512 PNG for the store. This goes on the store form, not into the phone folder.",
            ],
            after: [
              "In a new project the icon is often cut into a circle or a rounded square. Do not put writing or an important line at the edge. Leave one mark in the middle. A letter at the edge gets cut.",
              "The file is usually named ic_launcher.png. A round icon can be a separate ic_launcher_round.png. Android Studio's Image Asset window makes these sizes from one picture. Dropping one large picture into a single folder by hand is not enough.",
              "For a web APK, Nibras Studio takes the icon at the build step. The site's favicon is not always the phone icon. The picture you give Studio should be square, and it should not carry another brand's mark at the edge.",
            ],
          },
          {
            heading: "The package name",
            paragraphs: [
              "The package name is the app's permanent number. A person may not see it in the menu, but the phone uses it to know whether two files are the same app. It is usually written as a reversed domain: az.studio.note. Every piece is lowercase. No space, no capital letter, and no hyphen. A digit does not stand at the start of a piece.",
              "The place changes with the kind of project. For native and Flutter it is the applicationId line in app/build.gradle. For Capacitor the appId inside capacitor.config must match that line. An old package line in the manifest remains in some projects. If applicationId is different, the phone looks at applicationId.",
              "Do not go to a store with com.example or com.test. That is a sample name. If you have no domain, pick a stable name and write it the same everywhere: az.yourname.note. After the first upload, Play and AppGallery do not let this name change.",
              "Changing the name opens a new app. The old package stays on the old phone, and the new one stands beside it. The update does not cross. A line saved inside stays in the old app. Decide the name at the start, before the first release.",
            ],
          },
          {
            heading: "What not to mix up",
            list: [
              "Changing the menu name does not change the package. Only the word changes, and the update lands on the same app.",
              "Changing the package does not fix the menu name by itself. They are two jobs.",
              "Changing the icon does not change the key. A file with a new icon, signed with the same key, replaces the old one.",
              "The store name and the menu name do not have to match. A short difference that is not a lie is normal.",
              "Copying another app's icon and package does not make it yours. The store refuses it, and the phone will not install it when the signature does not match.",
            ],
            paragraphs: ["Write the three on one sheet: the menu name, the package name, and where the key sits. After the first AAB, the package does not change from that sheet."],
          },
        ],
      },
      {
        id: "keystore",
        title: "How do you create the key?",
        blocks: [
          {
            paragraphs: [
              "The key is the app's signature. You close the file with this key. The phone and the store look for the same key on the next file. If the package is the same, the key is the same, and versionCode is higher, the old app updates. If the key is different, the phone treats it as another author and will not put it on top.",
              "A key is not one password. It is a file called a keystore, and one or more keys sit inside it. Each key has a nickname, the alias. The file's password and the key's password are both asked. Lose both and you cannot open the file even if it is in your hand.",
            ],
          },
          {
            heading: "Create it with a command",
            paragraphs: [
              "If Java is on the computer, the keytool command creates the key. Open an empty folder beside the project and put the key there. Do not put it in the project's Git folder. When the command asks, you write a name, an organization, and a city. A line you do not know can stay empty. Do not keep the password on the terminal screen.",
            ],
            code: KEYTOOL,
            after: [
              "qeyd.keystore is the file itself. qeyd is the alias. RSA at 2048 is enough for a build today. 10000 days is a long time. If you pick a short time, the key grows old and the update stops. When the command ends, keep the file in two places: one on your own disk, one on a separate drive.",
              "To see what you created, run keytool -list -v -keystore qeyd.keystore. It asks for the password and shows the certificate fingerprint. If you connect Google sign-in or a map later, that fingerprint can be needed. Keep it with the key.",
            ],
          },
          {
            heading: "Tie it to the build",
            paragraphs: [
              "A key file sitting alone does not sign the APK. The release build has to call it. In Android Studio, Generate Signed Bundle or Generate Signed APK asks for the file, the alias, and the password. The path can be remembered. The password must not be written into a file everyone can see.",
              "When you tie it with Gradle, do not put the password in the project as plain text. Keep it in a separate file and do not add that file to Git. The sample only shows the place. Replace ACARIN with your own password, and keep the file outside the repository.",
            ],
            code: GRADLE,
            after: [
              "The release build then calls this configuration. ./gradlew bundleRelease gives an AAB. ./gradlew assembleRelease gives an APK. The debug build does not use this key. It is closed with the computer's own debug key.",
            ],
          },
          {
            heading: "The debug key is different",
            paragraphs: [
              "Android Studio does not ask for your key on the first check. There is a hidden debug.keystore on the computer. A file built with that key only resembles a check on your machine. Another computer's debug key is different. That is why a debug file from one computer does not land on a debug file from the other, and you get a signature error.",
              "The APK from Nibras Studio is debug-signed too. A friend can try it on a phone. Play and AppGallery do not take that file as the final release. From the first file that goes to a store, you need your own release key. You cannot ship to a store once on the debug key.",
            ],
          },
          {
            heading: "Where it is kept, and what happens if it is lost",
            paragraphs: [
              "Do not keep the key in the project folder, in email, or on a shared disk. It should sit on a separate drive and in a place only you open. Do not write the password in an open text file next to the key. Keep the password somewhere else. Losing both in one place is easy, and so is having both stolen from one place.",
              "If the key of an APK you signed yourself is lost, you cannot put a new file on that app. You can delete the old one and start with a new package name. The old store page and the person's data do not cross to the new app.",
              "Play App Signing can mean two keys. The upload key is with you. The store's signing key is with Google. If you lose the upload key, you can ask for a reset from Play Console. That can take a few days. Losing the store's own signing key is not in your hands. Google keeps it. On an old app that never joined this service, where the key was only yours, the loss is final.",
              "On Huawei, if you sign the APK yourself, the same rule holds. Lose the key and the update of that app on AppGallery stops. If you chose an AAB and joined Huawei's signing service, the final signature is with them. Still keep the key of the file you upload, because the next upload can ask for it.",
            ],
          },
        ],
      },
    ],
    tr: [
      {
        id: "name-icon",
        title: "İkon, ad ve paket adı",
        blocks: [
          {
            paragraphs: [
              "Uygulamanın üç adı vardır ve aynı işi görmezler. İkonun altındaki kısa ad kişinin gördüğüdür. Mağaza sayfasındaki ad daha uzun olabilir. Paket adı ise kişinin okuduğu söz değildir. Telefon ve mağaza uygulamayı bununla tanır. Birini değiştirmek ötekini kendi değiştirmez.",
              "İkon da ayrıdır. Telefon menüsündeki resim ile mağazanın 512 ölçülü resmi aynı çizim olabilir, ama ayrı dosyadır. Başkasının işaretini ya da ünlü uygulamanın adını almak hem ret hem de senin uygulaman sayılmaz.",
            ],
          },
          {
            heading: "İkonun altındaki ad",
            paragraphs: [
              "Bu ad ikonun altında görünür. Uzunsa telefon keser. İki ya da üç kısa söz yeter. «Benim en iyi not uygulamam» menüye sığmaz.",
              "Native projede ad res/values/strings.xml içinde app_name satırında durur. AndroidManifest.xml onu android:label=\"@string/app_name\" ile çağırır. Sözü doğrudan manifeste yazmak da olur, ama sonra her dilde ayrı satır tutmak zorlaşır. Başka dil için res/values-tr ve res/values-ru klasöründe aynı app_name tekrarlanır.",
              "Nibras Studio derlemede ad sorar. O ad pencerenin başlığına düşer. Sitenin içindeki büyük başlık ise index.html'de kalır. İkisini aynı yapmak istiyorsan hem Studio'daki adı hem sayfadaki başlığı değiştir.",
              "Mağaza adı ayrı formdadır. Orada biraz uzun yazabilirsin, ama içinde olmayan işi vadetme. Menüdeki ad «Not», mağazadaki ad «Not — günlük satır» olabilir. Paket adı hiçbirinde görünmeyebilir.",
            ],
          },
          {
            heading: "İkon",
            paragraphs: ["Telefon resmi tek ölçüde saklamaz. Aynı çizimin birkaç ölçüsü klasörlere dizilir. Biri eksikse telefon büyük resmi küçültür ve ikon bulanık görünür."],
            list: [
              "mipmap-mdpi içinde 48×48",
              "mipmap-hdpi içinde 72×72",
              "mipmap-xhdpi içinde 96×96",
              "mipmap-xxhdpi içinde 144×144",
              "mipmap-xxxhdpi içinde 192×192",
              "Mağaza için ayrı 512×512 PNG. Bu, telefon klasörüne değil, mağaza formasına konur.",
            ],
            after: [
              "Yeni projede ikon çoğu zaman daire ya da yuvarlak kare içinde kesilir. Yazıyı ve önemli çizgiyi kenara koyma. Ortada bir işaret kalsın. Kenardaki harf kesilir.",
              "Dosyanın adı genellikle ic_launcher.png olur. Yuvarlak ikon ayrı ic_launcher_round.png olabilir. Android Studio'nun Image Asset penceresi bu ölçüleri bir resimden kendi düzeltir. Elle yalnız bir klasöre büyük resim atmak yetmez.",
              "Web APK'da Nibras Studio ikonu derleme adımında alır. Sitenin favicon'u her zaman telefon ikonu olmaz. Studio'ya verdiğin resim kare olsun ve kenarında başka markanın işareti olmasın.",
            ],
          },
          {
            heading: "Paket adı",
            paragraphs: [
              "Paket adı uygulamanın kalıcı numarasıdır. Kişi onu menüde görmeyebilir, ama telefon iki dosyanın aynı uygulama olup olmadığını bununla bilir. Genellikle ters alan adı yazılır: az.studio.not. Her parça küçük harftir. Boşluk, büyük harf ve tire olmaz. Rakam parçanın başında durmaz.",
              "Yeri projenin türüne göre değişir. Native ve Flutter için app/build.gradle içinde applicationId satırıdır. Capacitor için capacitor.config içindeki appId o satırla aynı olmalıdır. Manifestin eski package satırı bazı projelerde kalır. applicationId farklıysa telefon applicationId'ye bakar.",
              "com.example ve com.test ile mağazaya gitme. Bu, örnek addır. Kendi alan adın yoksa sabit bir ad seç ve her yerde aynı yaz: az.adın.not. İlk yüklemeden sonra Play ve AppGallery bu adı değiştirmeye bırakmaz.",
              "Adı değiştirmek yeni uygulama açar. Eski telefonda eski paket kalır, yenisi yanında durur. Güncelleme geçmez. İçinde saklanan satır eski uygulamada kalır. Bu yüzden adı ta başta, ilk release'den önce kararlaştır.",
            ],
          },
          {
            heading: "Neyi karıştırma",
            list: [
              "Menü adını değiştirmek paketi değiştirmez. Yalnız söz değişir ve güncelleme aynı uygulamanın üstüne geçer.",
              "Paketi değiştirmek menü adını kendi düzeltmez. İki ayrı iştir.",
              "İkonu değiştirmek anahtarı değiştirmez. Aynı anahtarla yeni ikonlu dosya eskisinin yerine geçer.",
              "Mağaza adı ile menü adı aynı olmayabilir. Yalan olmayan kısa fark normaldir.",
              "Başka uygulamanın ikonunu ve paketini kopyalamak onu senin uygulaman yapmaz. Mağaza reddeder, telefon ise imza uyuşmayınca kurmaz.",
            ],
            paragraphs: ["Üçünü bir kâğıda yaz: menü adı, paket adı, anahtarın nerede durduğu. İlk AAB'den sonra paket kâğıttan değişmez."],
          },
        ],
      },
      {
        id: "keystore",
        title: "Anahtar nasıl oluşturulur?",
        blocks: [
          {
            paragraphs: [
              "Anahtar uygulamanın imzasıdır. Dosyayı bu anahtarla kapatırsın. Telefon ve mağaza sonraki dosyada aynı anahtarı arar. Aynı paket, aynı anahtar ve daha büyük versionCode varsa eski uygulama güncellenir. Anahtar başkaysa telefon bunu başka yazar sayar ve üstüne koymaz.",
              "Anahtar tek parola değildir. Keystore adlı dosyadır, içinde bir ya da birkaç anahtar durur. Her anahtarın takma adı, yani alias'ı vardır. Hem dosyanın parolası hem anahtarın parolası sorulur. İkisini de kaybedersen dosya elinde olsa da açamazsın.",
            ],
          },
          {
            heading: "Komutla oluşturmak",
            paragraphs: [
              "Bilgisayarda Java kuruluysa keytool komutu anahtarı oluşturur. Projenin yanında boş bir klasör aç ve anahtarı oraya koy. Projenin Git klasörüne koyma. Komut sorunca ad, kuruluş ve şehir yazılır. Bilmediğin satırı boş bırakmak olur. Parolayı terminalin ekranında saklama.",
            ],
            code: KEYTOOL,
            after: [
              "qeyd.keystore dosyanın kendisidir. qeyd takma addır. 2048 boyutlu RSA bugünkü derleme için yeter. 10000 gün uzun süredir. Kısa süre seçersen anahtar eskir ve güncelleme durur. Komut bitince dosyayı iki yerde sakla: birini kendi diskinde, birini ayrı bir bellekte.",
              "Ne oluşturduğunu görmek için keytool -list -v -keystore qeyd.keystore yaz. Parolayı sorar ve sertifikanın parmak izini gösterir. Google giriş ya da harita bağlayınca o parmak izi gerekebilir. Onu da anahtarla birlikte sakla.",
            ],
          },
          {
            heading: "Derlemeye bağlamak",
            paragraphs: [
              "Anahtar dosyası tek durunca APK imzalanmaz. Release derleme onu çağırmalıdır. Android Studio'da Generate Signed Bundle ya da Generate Signed APK penceresi dosyayı, takma adı ve parolayı sorar. Yolu hatırlamak olur, parolayı ise herkesin gördüğü dosyaya yazmak olmaz.",
              "Gradle ile bağlarken parolayı projenin içine düz metin koyma. Ayrı bir dosyada sakla ve o dosyayı Git'e ekleme. Örnek yalnız yerini gösterir. ACARIN yazan yeri kendi parolanla değiştir, dosyayı ise deponun dışında sakla.",
            ],
            code: GRADLE,
            after: [
              "Sonra release derleme bu yapılandırmayı çağırır. ./gradlew bundleRelease AAB verir. ./gradlew assembleRelease APK verir. Debug derleme bu anahtarı kullanmaz. O, bilgisayarın kendi debug anahtarıyla kapanır.",
            ],
          },
          {
            heading: "Debug anahtarı başkadır",
            paragraphs: [
              "Android Studio ilk yoklamada senin anahtarını istemez. Bilgisayarda gizli bir debug.keystore vardır. O anahtarla kurulan dosya yalnız senin makinedeki yoklamaya benzer. Başka bilgisayarın debug anahtarı farklıdır. Bu yüzden bir bilgisayarda kurduğun debug dosyanın üstüne öteki bilgisayarın debug dosyası geçmez ve imza hatası verir.",
              "Nibras Studio'nun APK'sı da debug imzalıdır. Onu arkadaşının telefonunda denemek olur. Play ve AppGallery o dosyayı son sürüm olarak kabul etmez. Mağazaya giden ilk dosyadan itibaren kendi release anahtarın olmalıdır. Bir kez debug ile mağazaya çıkmak olmaz.",
            ],
          },
          {
            heading: "Nerede saklanır ve kaybolunca ne olur",
            paragraphs: [
              "Anahtarı proje klasöründe, postada ve ortak diskte saklama. Ayrı bellekte ve yalnız senin açtığın yerde dursun. Parolayı anahtarın yanındaki açık metin dosyasına yazma. Parolayı başka yerde sakla. İkisini bir yerde kaybetmek kolaydır, bir yerde çaldırmak da kolaydır.",
              "Kendi imzaladığın APK'nın anahtarı kaybolduysa o uygulamanın üstüne yenisini koyamazsın. Eskiyi silip yeni paket adıyla başlamak olur. Mağazadaki eski sayfa ve kullanıcının verisi yeni uygulamaya geçmez.",
              "Play App Signing'de iki anahtar olabilir. Yükleme anahtarı sendedir, mağazanın imza anahtarı Google'dadır. Yükleme anahtarını kaybedersen Play Console'dan sıfırlama istemek olur. Bu birkaç gün sürebilir. Mağazanın kendi imza anahtarını kaybetmek senin elinde değildir, onu Google saklar. Bu hizmete katılmadan, anahtarı yalnız sende olan eski uygulamada kayıp sondur.",
              "Huawei'de APK'yı kendin imzalıyorsan aynı kural vardır. Anahtarı kaybedersen AppGallery'deki o uygulamanın güncellemesi durur. AAB seçip Huawei'nin imza hizmetine katıldıysan son imza onlardadır. Yine de yüklediğin dosyanın anahtarını sakla, çünkü sonraki yükleme onu isteyebilir.",
            ],
          },
        ],
      },
    ],
    ar: [
      {
        id: "name-icon",
        title: "الأيقونة والاسم واسم الحزمة",
        blocks: [
          {
            paragraphs: [
              "للتطبيق ثلاثة أسماء وهي لا تؤدي العمل نفسه. الاسم القصير تحت الأيقونة هو ما يراه الشخص. الاسم في صفحة المتجر يمكن أن يكون أطول. اسم الحزمة ليس كلمة يقرأها الشخص. الهاتف والمتجر يتعرّفان على التطبيق به. تغيير واحد لا يغيّر الآخرين وحده.",
              "الأيقونة منفصلة أيضاً. صورة قائمة الهاتف وصورة المتجر بقياس 512 قد تكونان الرسم نفسه لكنهما ملفان. أخذ علامة غيرك أو اسم تطبيق مشهور رفض وليس تطبيقك.",
            ],
          },
          {
            heading: "الاسم تحت الأيقونة",
            paragraphs: [
              "هذا الاسم يظهر تحت الأيقونة. إذا طال يقطعه الهاتف. كلمتان أو ثلاث قصيرة تكفي. «أفضل تطبيق ملاحظات عندي» لا يتسع في القائمة.",
              "في المشروع الأصلي يقف الاسم في سطر app_name داخل res/values/strings.xml. يستدعيه AndroidManifest.xml بـ android:label=\"@string/app_name\". يمكن كتابة الكلمة مباشرة في الـ manifest، لكن إبقاء سطر لكل لغة يصير أصعب. للغة أخرى يُكرَّر app_name نفسه في مجلدي res/values-tr وres/values-ru.",
              "Nibras Studio يسأل عن الاسم أثناء الجمع. ذلك الاسم يقع على عنوان النافذة. العنوان الكبير داخل الموقع يبقى في index.html. إذا أردت أن يتطابقا فغيّر الاسم في Studio وعنوان الصفحة.",
              "اسم المتجر في نموذج منفصل. يمكن أن تكتب أطول قليلاً هناك، لكن لا تعد بعمل لا يفعله الداخل. اسم القائمة قد يكون «ملاحظة» واسم المتجر «ملاحظة — سطر يومي». اسم الحزمة قد لا يظهر في أي منهما.",
            ],
          },
          {
            heading: "الأيقونة",
            paragraphs: ["الهاتف لا يحفظ الصورة بمقاس واحد. عدة مقاسات للرسم نفسه تُصف في مجلدات. إذا نقص أحدها فالهاتف يصغّر الصورة الكبيرة وتبدو الأيقونة مشوشة."],
            list: [
              "48×48 داخل mipmap-mdpi",
              "72×72 داخل mipmap-hdpi",
              "96×96 داخل mipmap-xhdpi",
              "144×144 داخل mipmap-xxhdpi",
              "192×192 داخل mipmap-xxxhdpi",
              "PNG منفصل 512×512 للمتجر. هذا يُوضع في نموذج المتجر لا في مجلد الهاتف.",
            ],
            after: [
              "في المشروع الجديد غالباً تُقص الأيقونة داخل دائرة أو مربع مستدير. لا تضع الكتابة والخط المهم على الحافة. تبقى علامة واحدة في الوسط. الحرف على الحافة يُقص.",
              "اسم الملف عادة ic_launcher.png. الأيقونة المستديرة قد تكون ic_launcher_round.png منفصلة. نافذة Image Asset في Android Studio تصنع هذه المقاسات من صورة واحدة. رمي صورة كبيرة باليد في مجلد واحد لا يكفي.",
              "في APK الويب يأخذ Nibras Studio الأيقونة في خطوة الجمع. أيقونة الموقع الصغيرة ليست دائماً أيقونة الهاتف. الصورة التي تعطيها لـ Studio تكون مربعة ولا تحمل علامة ماركة أخرى على الحافة.",
            ],
          },
          {
            heading: "اسم الحزمة",
            paragraphs: [
              "اسم الحزمة هو رقم التطبيق الدائم. قد لا يراه الشخص في القائمة، لكن الهاتف يعرف به هل الملفان التطبيق نفسه. يُكتب عادة كنطاق مقلوب: az.studio.note. كل قطعة أحرف صغيرة. لا فراغ ولا حرف كبير ولا شرطة. الرقم لا يقف في أول القطعة.",
              "المكان يتغير حسب نوع المشروع. للأصلي وFlutter هو سطر applicationId في app/build.gradle. لـ Capacitor يجب أن يطابق appId داخل capacitor.config ذلك السطر. سطر package القديم في الـ manifest يبقى في بعض المشاريع. إذا اختلف applicationId فالهاتف ينظر إلى applicationId.",
              "لا تذهب إلى المتجر بـ com.example أو com.test. هذا اسم مثال. إذا لم يكن لك نطاق فاختر اسماً ثابتاً واكتبه نفسه في كل مكان: az.yourname.note. بعد أول رفع لا يسمح Play وAppGallery بتغيير هذا الاسم.",
              "تغيير الاسم يفتح تطبيقاً جديداً. الحزمة القديمة تبقى على الهاتف القديم والجديدة تقف بجانبها. التحديث لا يعبر. السطر المحفوظ في الداخل يبقى في التطبيق القديم. لذلك قرّر الاسم في البداية قبل أول إصدار.",
            ],
          },
          {
            heading: "ماذا لا تخلط",
            list: [
              "تغيير اسم القائمة لا يغيّر الحزمة. تتغير الكلمة فقط ويأتي التحديث فوق التطبيق نفسه.",
              "تغيير الحزمة لا يصلح اسم القائمة وحده. هما عملان.",
              "تغيير الأيقونة لا يغيّر المفتاح. ملف بأيقونة جديدة موقّع بالمفتاح نفسه يحل محل القديم.",
              "اسم المتجر واسم القائمة قد لا يتطابقان. فرق قصير ليس كذباً أمر عادي.",
              "نسخ أيقونة تطبيق آخر وحزمته لا يجعله تطبيقك. المتجر يرفض والهاتف لا يثبّت حين لا يتطابق التوقيع.",
            ],
            paragraphs: ["اكتب الثلاثة على ورقة: اسم القائمة واسم الحزمة وأين يقف المفتاح. بعد أول AAB لا تتغير الحزمة عن تلك الورقة."],
          },
        ],
      },
      {
        id: "keystore",
        title: "كيف يُنشأ المفتاح؟",
        blocks: [
          {
            paragraphs: [
              "المفتاح هو توقيع التطبيق. تغلق الملف بهذا المفتاح. الهاتف والمتجر يبحثان عن المفتاح نفسه في الملف التالي. إذا كانت الحزمة واحدة والمفتاح واحداً وversionCode أكبر فالتطبيق القديم يتحدّث. إذا كان المفتاح غيره فالهاتف يحسبه مؤلفاً آخر ولا يضعه فوق القديم.",
              "المفتاح ليس كلمة مرور واحدة. هو ملف اسمه keystore وفيه مفتاح أو أكثر. لكل مفتاح لقب أي alias. تُسأل كلمة مرور الملف وكلمة مرور المفتاح. إذا ضاعت الاثنتان فلن تفتح الملف ولو كان في يدك.",
            ],
          },
          {
            heading: "إنشاؤه بأمر",
            paragraphs: [
              "إذا كانت Java على الحاسوب فأمر keytool ينشئ المفتاح. افتح مجلداً فارغاً بجانب المشروع وضع المفتاح هناك. لا تضعه في مجلد Git للمشروع. حين يسأل الأمر تُكتب الاسم والمؤسسة والمدينة. السطر الذي لا تعرفه يمكن أن يبقى فارغاً. لا تُبقِ كلمة المرور على شاشة الطرفية.",
            ],
            code: KEYTOOL,
            after: [
              "qeyd.keystore هو الملف نفسه. qeyd هو اللقب. RSA بمقاس 2048 يكفي لجمع اليوم. 10000 يوم مدة طويلة. إذا اخترت مدة قصيرة يهرم المفتاح ويتوقف التحديث. حين ينتهي الأمر احفظ الملف في مكانين: واحد على قرصك وواحد على ذاكرة منفصلة.",
              "لترى ماذا أنشأت اكتب keytool -list -v -keystore qeyd.keystore. يسأل كلمة المرور ويُظهر بصمة الشهادة. إذا وصلت دخول Google أو خريطة لاحقاً فقد تلزم تلك البصمة. احفظها مع المفتاح.",
            ],
          },
          {
            heading: "ربطه بالجمع",
            paragraphs: [
              "ملف المفتاح وحده لا يوقّع APK. يجب أن يستدعيه جمع الإصدار. في Android Studio تسأل نافذة Generate Signed Bundle أو Generate Signed APK عن الملف واللقب وكلمة المرور. يمكن تذكّر المسار. لا تُكتب كلمة المرور في ملف يراه الجميع.",
              "حين تربطه بـ Gradle لا تضع كلمة المرور داخل المشروع كنص مكشوف. احفظها في ملف منفصل ولا تضف ذلك الملف إلى Git. المثال يُظهر المكان فقط. بدّل مكان ACARIN بكلمة مرورك واحفظ الملف خارج المستودع.",
            ],
            code: GRADLE,
            after: [
              "ثم يستدعي جمع الإصدار هذا الإعداد. ./gradlew bundleRelease يعطي AAB. ./gradlew assembleRelease يعطي APK. جمع التجريب لا يستعمل هذا المفتاح. هو يُغلق بمفتاح التجريب الخاص بالحاسوب.",
            ],
          },
          {
            heading: "مفتاح التجريب غيره",
            paragraphs: [
              "Android Studio لا يطلب مفتاحك في أول فحص. على الحاسوب keystore تجريبي مخفي. الملف المجمّع بذلك المفتاح يشبه الفحص على جهازك فقط. مفتاح التجريب في حاسوب آخر مختلف. لذلك ملف التجريب من حاسوب لا يعلو ملف التجريب من الآخر ويعطي خطأ توقيع.",
              "APK من Nibras Studio موقّع توقيعاً تجريبياً أيضاً. يمكن لصديق تجربته على الهاتف. Play وAppGallery لا يقبلان ذلك الملف كإصدار أخير. من أول ملف يذهب إلى المتجر يلزم مفتاح الإصدار الخاص بك. لا يمكن الخروج إلى المتجر مرة بمفتاح التجريب.",
            ],
          },
          {
            heading: "أين يُحفظ وماذا يحدث إذا ضاع",
            paragraphs: [
              "لا تحفظ المفتاح في مجلد المشروع ولا في البريد ولا على قرص مشترك. يقف على ذاكرة منفصلة وفي مكان تفتحه أنت فقط. لا تكتب كلمة المرور في ملف نص مكشوف بجانب المفتاح. احفظ كلمة المرور في مكان آخر. ضياع الاثنين في مكان واحد سهل وسرقتهما من مكان واحد سهلة أيضاً.",
              "إذا ضاع مفتاح APK وقّعته بنفسك فلن تستطيع وضع ملف جديد فوق ذلك التطبيق. يمكن حذف القديم والبدء باسم حزمة جديد. صفحة المتجر القديمة وبيانات الشخص لا تنتقلان إلى التطبيق الجديد.",
              "في Play App Signing قد يكون مفتاحان. مفتاح الرفع عندك ومفتاح توقيع المتجر عند Google. إذا ضاع مفتاح الرفع يمكن طلب إعادة ضبط من Play Console. هذا قد يأخذ أياماً. ضياع مفتاح توقيع المتجر نفسه ليس في يدك، فـ Google يحفظه. في تطبيق قديم لم ينضم إلى هذه الخدمة وكان المفتاح عندك وحدك تكون الخسارة نهائية.",
              "في Huawei إذا وقّعت APK بنفسك فالقاعدة نفسها. إذا ضاع المفتاح يتوقف تحديث ذلك التطبيق في AppGallery. إذا اخترت AAB وانضممت إلى خدمة التوقيع من Huawei فالتوقيع الأخير عندهم. مع ذلك احفظ مفتاح الملف الذي ترفعه لأن الرفع التالي قد يطلبه.",
            ],
          },
        ],
      },
    ],
    ru: [
      {
        id: "name-icon",
        title: "Значок, имя и имя пакета",
        blocks: [
          {
            paragraphs: [
              "У приложения три имени, и они делают не одну работу. Короткое имя под значком — то, что видит человек. Имя на странице магазина может быть длиннее. Имя пакета — не слово, которое человек читает. Телефон и магазин узнают приложение по нему. Изменить одно не меняет остальные само.",
              "Значок тоже отдельно. Картинка в меню телефона и картинка магазина 512 могут быть одним рисунком, но это разные файлы. Взять чужой знак или имя известного приложения — и отказ, и не твоё приложение.",
            ],
          },
          {
            heading: "Имя под значком",
            paragraphs: [
              "Это имя видно под значком. Если оно длинное, телефон обрезает. Хватает двух или трёх коротких слов. «Моё самое лучшее приложение заметок» в меню не помещается.",
              "В нативном проекте имя стоит в строке app_name внутри res/values/strings.xml. AndroidManifest.xml зовёт его через android:label=\"@string/app_name\". Слово можно вписать прямо в манифест, но потом отдельная строка для каждого языка становится труднее. Для другого языка тот же app_name повторяется в папках res/values-tr и res/values-ru.",
              "Nibras Studio спрашивает имя при сборке. Это имя падает в заголовок окна. Крупный заголовок внутри сайта остаётся в index.html. Если хочешь, чтобы оба совпали, поменяй имя в Studio и заголовок на странице.",
              "Имя магазина — отдельная форма. Там можно написать чуть длиннее, но не обещай работу, которой нет внутри. Имя в меню может быть «Заметка», имя в магазине — «Заметка — дневная строка». Имени пакета может не быть ни там, ни там.",
            ],
          },
          {
            heading: "Значок",
            paragraphs: ["Телефон не хранит картинку в одном размере. Несколько размеров одного рисунка раскладываются по папкам. Если одного нет, телефон уменьшает большую картинку, и значок выглядит мутным."],
            list: [
              "48×48 внутри mipmap-mdpi",
              "72×72 внутри mipmap-hdpi",
              "96×96 внутри mipmap-xhdpi",
              "144×144 внутри mipmap-xxhdpi",
              "192×192 внутри mipmap-xxxhdpi",
              "Отдельный PNG 512×512 для магазина. Он кладётся в форму магазина, а не в папку телефона.",
            ],
            after: [
              "В новом проекте значок часто обрезается в круг или скруглённый квадрат. Не клади текст и важную линию на край. В середине пусть останется один знак. Буква на краю срежется.",
              "Файл обычно называется ic_launcher.png. Круглый значок может быть отдельным ic_launcher_round.png. Окно Image Asset в Android Studio само делает эти размеры из одной картинки. Вручную бросить одну большую картинку в одну папку недостаточно.",
              "В веб-APK Nibras Studio берёт значок на шаге сборки. Маленький значок сайта не всегда значок телефона. Картинка, которую отдаёшь Studio, должна быть квадратной, и на краю не должно быть знака чужой марки.",
            ],
          },
          {
            heading: "Имя пакета",
            paragraphs: [
              "Имя пакета — постоянный номер приложения. Человек может не видеть его в меню, но телефон по нему знает, один ли это приложение у двух файлов. Обычно пишут обратный домен: az.studio.note. Каждый кусок — строчные буквы. Без пробела, без заглавной и без дефиса. Цифра не стоит в начале куска.",
              "Место меняется от вида проекта. Для нативного и Flutter это строка applicationId в app/build.gradle. Для Capacitor appId внутри capacitor.config должен совпасть с этой строкой. Старая строка package в манифесте остаётся в части проектов. Если applicationId другой, телефон смотрит на applicationId.",
              "Не ходи в магазин с com.example или com.test. Это пример имени. Если своего домена нет, выбери устойчивое имя и пиши его везде одинаково: az.tvoyoimya.note. После первой загрузки Play и AppGallery не дают это имя менять.",
              "Смена имени открывает новое приложение. Старый пакет остаётся на старом телефоне, новый стоит рядом. Обновление не переходит. Строка, сохранённая внутри, остаётся в старом приложении. Поэтому имя решают в самом начале, до первого release.",
            ],
          },
          {
            heading: "Что не путать",
            list: [
              "Смена имени в меню не меняет пакет. Меняется только слово, и обновление ложится на то же приложение.",
              "Смена пакета сама не чинит имя в меню. Это две работы.",
              "Смена значка не меняет ключ. Файл с новым значком, подписанный тем же ключом, встаёт на место старого.",
              "Имя магазина и имя меню могут не совпадать. Короткая разница, которая не ложь, нормальна.",
              "Скопировать значок и пакет чужого приложения не делает его твоим. Магазин отказывает, а телефон не ставит, когда подпись не совпадает.",
            ],
            paragraphs: ["Запиши три вещи на один лист: имя меню, имя пакета и где лежит ключ. После первого AAB пакет с этого листа не меняется."],
          },
        ],
      },
      {
        id: "keystore",
        title: "Как создать ключ?",
        blocks: [
          {
            paragraphs: [
              "Ключ — это подпись приложения. Файл закрываешь этим ключом. Телефон и магазин ищут тот же ключ в следующем файле. Если пакет тот же, ключ тот же и versionCode больше, старое приложение обновляется. Если ключ другой, телефон считает это другим автором и сверху не кладёт.",
              "Ключ — это не один пароль. Это файл под именем keystore, внутри один или несколько ключей. У каждого ключа есть прозвище, alias. Спрашивают и пароль файла, и пароль ключа. Потеряешь оба — не откроешь файл, даже если он в руке.",
            ],
          },
          {
            heading: "Создать командой",
            paragraphs: [
              "Если на компьютере стоит Java, команда keytool создаёт ключ. Открой пустую папку рядом с проектом и положи ключ туда. В Git-папку проекта не клади. Когда команда спрашивает, пишут имя, организацию и город. Строку, которой не знаешь, можно оставить пустой. Пароль на экране терминала не оставляй.",
            ],
            code: KEYTOOL,
            after: [
              "qeyd.keystore — сам файл. qeyd — прозвище. RSA размером 2048 хватает для сегодняшней сборки. 10000 дней — долгий срок. Если выбрать короткий, ключ устареет и обновление встанет. Когда команда кончится, храни файл в двух местах: одно на своём диске, другое на отдельном накопителе.",
              "Чтобы увидеть, что создалось, напиши keytool -list -v -keystore qeyd.keystore. Он спросит пароль и покажет отпечаток сертификата. Если позже подключишь вход Google или карту, этот отпечаток может понадобиться. Храни его вместе с ключом.",
            ],
          },
          {
            heading: "Привязать к сборке",
            paragraphs: [
              "Файл ключа сам по себе APK не подписывает. Сборка release должна его вызвать. В Android Studio окно Generate Signed Bundle или Generate Signed APK спрашивает файл, прозвище и пароль. Путь можно запомнить. Пароль нельзя писать в файл, который видят все.",
              "Когда связываешь через Gradle, не клади пароль в проект открытым текстом. Храни его в отдельном файле и не добавляй этот файл в Git. Пример только показывает место. Замени ACARIN своим паролем, а файл держи вне хранилища.",
            ],
            code: GRADLE,
            after: [
              "Потом сборка release вызывает эту настройку. ./gradlew bundleRelease даёт AAB. ./gradlew assembleRelease даёт APK. Сборка debug этот ключ не использует. Она закрывается своим debug-ключом компьютера.",
            ],
          },
          {
            heading: "Debug-ключ другой",
            paragraphs: [
              "Android Studio при первой проверке твой ключ не просит. На компьютере есть скрытый debug.keystore. Файл, собранный тем ключом, похож только на проверку на твоей машине. Debug-ключ другого компьютера другой. Поэтому debug-файл с одного компьютера не ложится на debug-файл с другого, и выходит ошибка подписи.",
              "APK от Nibras Studio тоже подписан debug-подписью. Друг может попробовать его на телефоне. Play и AppGallery не берут этот файл как окончательный выпуск. С первого файла, который идёт в магазин, нужен свой release-ключ. Один раз выйти в магазин на debug-ключе нельзя.",
            ],
          },
          {
            heading: "Где хранится и что будет, если потеряется",
            paragraphs: [
              "Не храни ключ в папке проекта, в почте и на общем диске. Он должен лежать на отдельном накопителе и в месте, которое открываешь только ты. Не пиши пароль в открытый текстовый файл рядом с ключом. Пароль храни в другом месте. Потерять оба в одном месте легко, и украсть оба из одного места тоже легко.",
              "Если ключ APK, который подписал сам, потерян, новый файл поверх этого приложения не положить. Можно удалить старое и начать с новым именем пакета. Старая страница магазина и данные человека в новое приложение не переходят.",
              "В Play App Signing могут быть два ключа. Ключ загрузки у тебя, ключ подписи магазина у Google. Если потеряешь ключ загрузки, можно попросить сброс в Play Console. Это может занять несколько дней. Потеря собственного ключа подписи магазина не в твоих руках, его хранит Google. У старого приложения, которое не входило в эту службу и чей ключ был только у тебя, потеря окончательна.",
              "На Huawei, если APK подписываешь сам, правило то же. Потеряешь ключ — обновление этого приложения в AppGallery встанет. Если выбрал AAB и вошёл в службу подписи Huawei, последняя подпись у них. Всё равно храни ключ файла, который загружаешь, потому что следующая загрузка может его спросить.",
            ],
          },
        ],
      },
    ],
  };
  return all[lang];
}
