import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

const WEB = `qeyd/
  index.html
  css/app.css
  js/app.js
  img/icon.png`;

const NATIVE = `app/src/main/
  AndroidManifest.xml
  java/com/example/qeyd/MainActivity.kt
  res/layout/activity_main.xml
  res/mipmap-hdpi/ic_launcher.png`;

const CAP = `www/
  index.html
capacitor.config.json
android/app/src/main/
  AndroidManifest.xml`;

const FLUTTER = `lib/main.dart
pubspec.yaml
android/app/src/main/
  AndroidManifest.xml`;

export function apkSections(lang: Lang): ProgrammingSection[] {
  const pages: Record<Lang, ProgrammingSection[]> = {
    az: [
      {
        id: "what",
        title: "APK nədir?",
        blocks: [
          {
            paragraphs: [
              "APK Android telefonun quraşdırdığı fayldır. İçində ekran, şəkil, yazı və tətbiqin işləməsi üçün lazım olan kod durur. Mağaza bu faylı çox vaxt sənin yerinə açır. Faylı özün saxlayıb açanda telefon əlavə icazə istəyə bilər.",
              "APK proqramlaşdırma dili deyil. O, hazırlanmış tətbiqin paketidir. Eyni tətbiqin içi Kotlin, Java, Flutter və ya sadəcə bir veb səhifə ola bilər. Çöldən hamısı .apk adı ilə bitir.",
              "Tanımadığın səhifədən gələn APK tətbiqin əsl nüsxəsi olmaya bilər. Öz saytından və ya öz zipindən yığdığın fayl başqadır. Adın içində apk yazılması faylın təhlükəsiz olduğunu göstərmir.",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "APK necə düzəldilir?",
        blocks: [
          {
            paragraphs: [
              "Əvvəl tətbiqin nə edəcəyi yazılır. Sonra ekran qurulur. Sonra həmin ekran fayllara çevrilir. Axırda bir proqram bu faylları bir APK-ya yığır. Telefon həmin bir faylı quraşdırır.",
              "Ən qısa yol veb səhifədir. index.html olan bir zip götürülür və Nibras Studio onu APK-ya çevirir. Android Studio, hesab və kod dərsliyi bu yol üçün lazım deyil. Səhifə telefonda tətbiq pəncərəsində açılır.",
              "Daha böyük yol telefonda özü işləyən proqram yazmaqdır. Onda qovluqlar, manifest və imza addımı gəlir. APK yenə sonda bir fayldır, amma ora çatmaq üçün daha çox alət lazımdır.",
            ],
          },
        ],
      },
      {
        id: "tools",
        title: "Nələr lazımdır?",
        blocks: [
          {
            paragraphs: [
              "Hər növ eyni aləti istəmir. Saytı tətbiqə çevirirsənsə, brauzer, bir mətn redaktoru və zip kifayətdir. Telefonun özü yoxlamadır. Yığımı Nibras Studio görür.",
              "Kotlin və ya Java ilə native tətbiq üçün Android Studio, JDK və Android SDK lazımdır. Gradle paketi yığır. Capacitor üçün Node və npm də gəlir, çünki səhifə əvvəl veb qovluğunda durur, sonra android qovluğuna keçir. Flutter üçün ayrıca Flutter SDK lazımdır.",
            ],
            list: [
              "Veb APK: redaktor, brauzer, zip, Nibras Studio",
              "Native: Android Studio, JDK, Android SDK, Gradle",
              "Capacitor: Node, npm, Android SDK, android qovluğu",
              "Flutter: Flutter SDK, android qovluğu",
            ],
          },
        ],
      },
      {
        id: "stages",
        title: "Düzəltmə mərhələləri",
        blocks: [
          {
            paragraphs: [
              "Mərhələni atlamaq sonda boş tətbiq verir. Əvvəl bir ekranı bitir, sonra ikincini əlavə et. Hər mərhələnin öz faylı var.",
            ],
            ordered: true,
            list: [
              "İşi bir cümlə ilə yaz: tətbiq nəyi saxlayır və ya nəyi göstərir.",
              "Ekranı kağızda və ya bu səhifədəki qara nümunədə gör. Başlıq, sətir və düymə bəs edir.",
              "Faylları növün qovluğuna qoy. Veb üçün index.html kökdə durmalıdır.",
              "Öz kompüterində aç. Veb səhifəni brauzerdə, native tətbiqi isə emulator və ya telefonda yoxla.",
              "APK-nı yığ. Veb zipdirsə, Studio-ya ver. Native-dirsə, Gradle assemble çağırır.",
              "Telefonda quraşdır və düyməni bas. İşləməyən yazını düzəlt, yenidən yığ.",
            ],
          },
        ],
      },
      {
        id: "types",
        title: "APK növləri",
        blocks: [
          {
            heading: "Veb APK",
            paragraphs: [
              "Bu, saytın telefon pəncərəsinə qoyulmasıdır. İçəri HTML, CSS və JavaScript-dir. Serverdə işləyən Python burada özü açılmır. Zipin kökündə index.html olmalıdır. css və js qovluqları onun yanındadır. Şəkil img qovluğuna düşür. Nibras Studio bu zipi və ya saytın ünvanını alır, ad, ikon və paket adı seçilir, APK yığılır.",
            ],
            code: WEB,
            after: ["Hazır nümunə bu quruluşdadır. Aşağıdan zipi endir, yazını dəyişmək istəsən index.html-ə bax, sonra Studio-ya ver."],
          },
          {
            heading: "Native APK",
            paragraphs: [
              "Kotlin və ya Java ilə yazılır. Ekran res/layout içindəki xml faylındadır. Düymənin işi java və ya kotlin faylındadır. İkon mipmap qovluqlarındadır. AndroidManifest.xml tətbiqin adını, paketini və açılış ekranını deyir. Android Studio bu qovluqları özü açır. Yığım Gradle ilə gedir. Bu növ kamera, sensor və telefonda dərin iş üçün seçilir. Kiçik bir qeyd səhifəsi üçün ağırdır.",
            ],
            code: NATIVE,
            after: ["app/src/main xəttini yadda saxla. Manifest, ekran və ikon həmin xəttin altındadır."],
          },
          {
            heading: "Capacitor APK",
            paragraphs: [
              "Səhifə www qovluğunda qalır. capacitor.config.json saytın tətbiqə necə girəcəyini deyir. android qovluğu native qabıqdır. Əvvəl səhifəni www-də bitir, sonra capacitor android qovluğunu yeniləyir, APK isə həmin android layihəsindən yığılır. Node və Android SDK ikisi də lazımdır. Bu, veb APK-dan bir addım artıqdır: telefona öz plagini ilə toxunmaq olar.",
            ],
            code: CAP,
            after: ["www saytdır. android qabıqdır. Birini dəyişib o birini unutmaq köhnə ekranı telefona qoyur."],
          },
          {
            heading: "Flutter APK",
            paragraphs: [
              "Ekran lib/main.dart içində Dart dili ilə yazılır. pubspec.yaml paketlərin siyahısıdır. android qovluğu yenə qabıqdır, amma səhifəni HTML saxlamır. Flutter özü ekranı çəkir. SDK qurulmadan layihə açılmır. Qovluq az görünür, amma alət ayrıca öyrənilir.",
            ],
            code: FLUTTER,
            after: ["lib ekranın özüdür. android yalnız telefonun qabığıdır. APK flutter build apk ilə çıxır."],
          },
        ],
      },
    ],
    en: [],
    tr: [],
    ar: [],
    ru: [],
  };

  const en: ProgrammingSection[] = [
    {
      id: "what",
      title: "What is an APK?",
      blocks: [
        {
          paragraphs: [
            "An APK is the file an Android phone installs. Inside it sit the screen, the pictures, the words, and the code the app needs to run. A store usually opens this file for you. If you save and open it yourself, the phone may ask for an extra permission.",
            "An APK is not a programming language. It is the package of a finished app. The inside can be Kotlin, Java, Flutter, or only a web page. From the outside they all end in .apk.",
            "An APK from a page you do not know may not be the real copy of the app. A file you build from your own site or your own zip is different. The letters apk in the name do not show that the file is safe.",
          ],
        },
      ],
    },
    {
      id: "how",
      title: "How is an APK made?",
      blocks: [
        {
          paragraphs: [
            "First you write what the app will do. Then you build the screen. Then that screen becomes files. At the end a program packs those files into one APK. The phone installs that one file.",
            "The short path is a web page. A zip that contains index.html is given to Nibras Studio, and Studio turns it into an APK. Android Studio, an account, and a coding course are not required for this path. The page opens in an app window on the phone.",
            "The longer path is a program that runs on the phone itself. Then folders, a manifest, and a signing step appear. The APK is still one file at the end, but more tools are needed to reach it.",
          ],
        },
      ],
    },
    {
      id: "tools",
      title: "What do you need?",
      blocks: [
        {
          paragraphs: [
            "Not every kind asks for the same tool. If you turn a site into an app, a browser, a text editor, and a zip are enough. The phone itself is the check. Nibras Studio does the build.",
            "A native app in Kotlin or Java needs Android Studio, a JDK, and the Android SDK. Gradle packs the file. Capacitor also needs Node and npm, because the page first lives in a web folder and then moves into the android folder. Flutter needs its own Flutter SDK.",
          ],
          list: [
            "Web APK: an editor, a browser, a zip, Nibras Studio",
            "Native: Android Studio, JDK, Android SDK, Gradle",
            "Capacitor: Node, npm, Android SDK, the android folder",
            "Flutter: the Flutter SDK, the android folder",
          ],
        },
      ],
    },
    {
      id: "stages",
      title: "The building stages",
      blocks: [
        {
          paragraphs: ["Skipping a stage gives an empty app at the end. Finish one screen, then add the second. Each stage has its own file."],
          ordered: true,
          list: [
            "Write the job in one sentence: what the app keeps or what it shows.",
            "See the screen on paper or on the black sample on this page. A title, a line, and a button are enough.",
            "Put the files in that kind's folder. For the web, index.html has to stand at the root.",
            "Open it on your own computer. Check a web page in the browser, and a native app in an emulator or on a phone.",
            "Build the APK. If it is a web zip, give it to Studio. If it is native, Gradle calls assemble.",
            "Install it on the phone and press the button. Fix the line that failed, then build again.",
          ],
        },
      ],
    },
    {
      id: "types",
      title: "Kinds of APK",
      blocks: [
        {
          heading: "Web APK",
          paragraphs: [
            "This puts a site into a phone window. The inside is HTML, CSS, and JavaScript. Python that runs on a server does not open here by itself. index.html must be at the root of the zip. The css and js folders stand beside it. A picture falls into img. Nibras Studio takes this zip or the site address, you choose the name, the icon, and the package name, and the APK is built.",
          ],
          code: WEB,
          after: ["The ready sample has this shape. Download the zip below, open index.html if you want to change a line, then give it to Studio."],
        },
        {
          heading: "Native APK",
          paragraphs: [
            "It is written in Kotlin or Java. The screen is the xml file in res/layout. The button's work is in the java or kotlin file. The icon is in the mipmap folders. AndroidManifest.xml says the app name, the package, and the opening screen. Android Studio opens these folders itself. The build goes through Gradle. This kind is chosen for the camera, a sensor, and deep work on the phone. It is heavy for a small notes page.",
          ],
          code: NATIVE,
          after: ["Remember the line app/src/main. The manifest, the screen, and the icon sit under that line."],
        },
        {
          heading: "Capacitor APK",
          paragraphs: [
            "The page stays in the www folder. capacitor.config.json says how the site enters the app. The android folder is the native shell. Finish the page in www first, then Capacitor refreshes the android folder, and the APK is built from that android project. Node and the Android SDK are both needed. This is one step past a web APK: you can touch the phone through your own plugin.",
          ],
          code: CAP,
          after: ["www is the site. android is the shell. Changing one and forgetting the other puts the old screen on the phone."],
        },
        {
          heading: "Flutter APK",
          paragraphs: [
            "The screen is written in the Dart language inside lib/main.dart. pubspec.yaml is the list of packages. The android folder is still the shell, but HTML does not hold the page. Flutter draws the screen itself. The project does not open until the SDK is installed. The folders look few, but the tool is learned on its own.",
          ],
          code: FLUTTER,
          after: ["lib is the screen itself. android is only the phone's shell. The APK comes out with flutter build apk."],
        },
      ],
    },
  ];

  const tr: ProgrammingSection[] = [
    {
      id: "what",
      title: "APK nedir?",
      blocks: [
        {
          paragraphs: [
            "APK, Android telefonun kurduğu dosyadır. İçinde ekran, resim, yazı ve uygulamanın çalışması için gereken kod durur. Mağaza bu dosyayı çoğu zaman senin yerine açar. Dosyayı kendin kaydedip açınca telefon ek izin isteyebilir.",
            "APK bir programlama dili değildir. O, bitmiş uygulamanın paketidir. İçi Kotlin, Java, Flutter ya da yalnız bir web sayfası olabilir. Dışarıdan hepsi .apk ile biter.",
            "Tanımadığın bir sayfadan gelen APK uygulamanın gerçek kopyası olmayabilir. Kendi sitenden veya kendi zipinden derlediğin dosya başkadır. Adın içinde apk yazması dosyanın güvenli olduğunu göstermez.",
          ],
        },
      ],
    },
    {
      id: "how",
      title: "APK nasıl yapılır?",
      blocks: [
        {
          paragraphs: [
            "Önce uygulamanın ne yapacağı yazılır. Sonra ekran kurulur. Sonra o ekran dosyaya döner. En sonda bir program bu dosyaları bir APK'ya toplar. Telefon o tek dosyayı kurar.",
            "En kısa yol web sayfasıdır. index.html bulunan bir zip Nibras Studio'ya verilir ve Studio onu APK'ya çevirir. Bu yol için Android Studio, hesap ve kod dersi gerekmez. Sayfa telefonda bir uygulama penceresinde açılır.",
            "Daha uzun yol telefonun kendisinde çalışan bir program yazmaktır. O zaman klasörler, manifest ve imza adımı gelir. APK yine sonda bir dosyadır, ama oraya varmak için daha çok araç gerekir.",
          ],
        },
      ],
    },
    {
      id: "tools",
      title: "Neler gerekir?",
      blocks: [
        {
          paragraphs: [
            "Her tür aynı aracı istemez. Siteyi uygulamaya çeviriyorsan tarayıcı, bir metin düzenleyici ve zip yeter. Telefonun kendisi yoklamadır. Derlemeyi Nibras Studio görür.",
            "Kotlin veya Java ile native uygulama için Android Studio, JDK ve Android SDK gerekir. Paketi Gradle toplar. Capacitor için Node ve npm de gelir, çünkü sayfa önce web klasöründedir, sonra android klasörüne geçer. Flutter için ayrı Flutter SDK gerekir.",
          ],
          list: [
            "Web APK: düzenleyici, tarayıcı, zip, Nibras Studio",
            "Native: Android Studio, JDK, Android SDK, Gradle",
            "Capacitor: Node, npm, Android SDK, android klasörü",
            "Flutter: Flutter SDK, android klasörü",
          ],
        },
      ],
    },
    {
      id: "stages",
      title: "Yapma aşamaları",
      blocks: [
        {
          paragraphs: ["Aşamayı atlamak sonda boş uygulama verir. Önce bir ekranı bitir, sonra ikincisini ekle. Her aşamanın kendi dosyası vardır."],
          ordered: true,
          list: [
            "İşi bir cümleyle yaz: uygulama neyi tutar veya neyi gösterir.",
            "Ekranı kâğıtta veya bu sayfadaki kara örnekte gör. Başlık, satır ve düğme yeter.",
            "Dosyaları türün klasörüne koy. Web için index.html kökte durmalıdır.",
            "Kendi bilgisayarında aç. Web sayfasını tarayıcıda, native uygulamayı emülatörde veya telefonda yokla.",
            "APK'yı derle. Web zip ise Studio'ya ver. Native ise Gradle assemble çağırır.",
            "Telefonda kur ve düğmeye bas. Çalışmayan yazıyı düzelt, yeniden derle.",
          ],
        },
      ],
    },
    {
      id: "types",
      title: "APK türleri",
      blocks: [
        {
          heading: "Web APK",
          paragraphs: [
            "Bu, sitenin telefon penceresine konmasıdır. İçi HTML, CSS ve JavaScript'tir. Sunucuda çalışan Python burada kendi açılmaz. Zipin kökünde index.html olmalıdır. css ve js klasörleri onun yanındadır. Resim img klasörüne düşer. Nibras Studio bu zipi veya sitenin adresini alır, ad, ikon ve paket adı seçilir, APK derlenir.",
          ],
          code: WEB,
          after: ["Hazır örnek bu düzendedir. Aşağıdan zipi indir, yazıyı değiştirmek istersen index.html'e bak, sonra Studio'ya ver."],
        },
        {
          heading: "Native APK",
          paragraphs: [
            "Kotlin veya Java ile yazılır. Ekran res/layout içindeki xml dosyasındadır. Düğmenin işi java veya kotlin dosyasındadır. İkon mipmap klasörlerindedir. AndroidManifest.xml uygulamanın adını, paketini ve açılış ekranını söyler. Android Studio bu klasörleri kendi açar. Derleme Gradle ile gider. Bu tür kamera, sensör ve telefonda derin iş için seçilir. Küçük bir not sayfası için ağırdır.",
          ],
          code: NATIVE,
          after: ["app/src/main satırını hatırla. Manifest, ekran ve ikon o satırın altındadır."],
        },
        {
          heading: "Capacitor APK",
          paragraphs: [
            "Sayfa www klasöründe kalır. capacitor.config.json sitenin uygulamaya nasıl gireceğini söyler. android klasörü native kabuktur. Önce sayfayı www'de bitir, sonra Capacitor android klasörünü yeniler, APK ise o android projesinden derlenir. Node ve Android SDK ikisi de gerekir. Bu, web APK'dan bir adım fazladır: telefona kendi eklentinle dokunulabilir.",
          ],
          code: CAP,
          after: ["www sitedir. android kabuktur. Birini değiştirip ötekini unutmak eski ekranı telefona koyar."],
        },
        {
          heading: "Flutter APK",
          paragraphs: [
            "Ekran lib/main.dart içinde Dart diliyle yazılır. pubspec.yaml paketlerin listesidir. android klasörü yine kabuktur, ama sayfayı HTML tutmaz. Flutter ekranı kendi çizer. SDK kurulmadan proje açılmaz. Klasör az görünür, ama araç ayrıca öğrenilir.",
          ],
          code: FLUTTER,
          after: ["lib ekranın kendisidir. android yalnız telefonun kabuğudur. APK flutter build apk ile çıkar."],
        },
      ],
    },
  ];

  const ar: ProgrammingSection[] = [
    {
      id: "what",
      title: "ما هو APK؟",
      blocks: [
        {
          paragraphs: [
            "APK هو الملف الذي يثبّته هاتف Android. بداخله الشاشة والصور والكتابة والكود الذي يحتاجه التطبيق ليعمل. المتجر يفتح هذا الملف غالباً عنك. إذا حفظته وفتحته بنفسك فقد يطلب الهاتف صلاحية إضافية.",
            "APK ليست لغة برمجة. هي حزمة التطبيق الجاهز. الداخل قد يكون Kotlin أو Java أو Flutter أو صفحة ويب فقط. من الخارج كلها تنتهي بـ .apk.",
            "قد لا يكون APK القادم من صفحة لا تعرفها النسخة الحقيقية للتطبيق. الملف الذي تجمعه من موقعك أو من zip خاص بك شيء آخر. كتابة apk في الاسم لا تدل على أن الملف آمن.",
          ],
        },
      ],
    },
    {
      id: "how",
      title: "كيف يُصنع APK؟",
      blocks: [
        {
          paragraphs: [
            "أولاً يُكتب ماذا سيفعل التطبيق. ثم تُبنى الشاشة. ثم تصير تلك الشاشة ملفات. في الأخير يجمع برنامج هذه الملفات في APK واحد. الهاتف يثبّت ذلك الملف الواحد.",
            "أقصر طريق هو صفحة ويب. يُعطى zip فيه index.html إلى Nibras Studio وهو يحوّله إلى APK. Android Studio والحساب ودرس الكود ليست لازمة لهذا الطريق. الصفحة تُفتح في نافذة تطبيق على الهاتف.",
            "الطريق الأطول هو برنامج يعمل على الهاتف نفسه. عندها تأتي المجلدات وmanifest وخطوة التوقيع. APK ما زال ملفاً واحداً في الأخير، لكن الوصول إليه يحتاج أدوات أكثر.",
          ],
        },
      ],
    },
    {
      id: "tools",
      title: "ماذا يلزم؟",
      blocks: [
        {
          paragraphs: [
            "ليس كل نوع يطلب الأداة نفسها. إذا حوّلت موقعاً إلى تطبيق فمتصفح ومحرر نص وzip تكفي. الهاتف نفسه هو الفحص. Nibras Studio يقوم بالجمع.",
            "التطبيق الأصلي بـ Kotlin أو Java يحتاج Android Studio وJDK وAndroid SDK. Gradle يجمع الحزمة. Capacitor يحتاج Node وnpm أيضاً لأن الصفحة تقف أولاً في مجلد الويب ثم تنتقل إلى مجلد android. Flutter يحتاج Flutter SDK الخاص به.",
          ],
          list: [
            "APK الويب: محرر، متصفح، zip، Nibras Studio",
            "الأصلي: Android Studio وJDK وAndroid SDK وGradle",
            "Capacitor: Node وnpm وAndroid SDK ومجلد android",
            "Flutter: Flutter SDK ومجلد android",
          ],
        },
      ],
    },
    {
      id: "stages",
      title: "مراحل الصنع",
      blocks: [
        {
          paragraphs: ["تخطي مرحلة يعطي تطبيقاً فارغاً في الأخير. أنهِ شاشة واحدة ثم أضف الثانية. لكل مرحلة ملفها."],
          ordered: true,
          list: [
            "اكتب العمل في جملة: ماذا يحفظ التطبيق أو ماذا يُظهر.",
            "انظر إلى الشاشة على ورق أو في المثال الأسود في هذه الصفحة. عنوان وسطر وزر تكفي.",
            "ضع الملفات في مجلد ذلك النوع. للويب يجب أن يقف index.html في الجذر.",
            "افتحه على حاسوبك. افحص صفحة الويب في المتصفح والتطبيق الأصلي في المحاكي أو على الهاتف.",
            "اجمع APK. إذا كان zip ويب فأعطه إلى Studio. إذا كان أصلياً فـ Gradle يستدعي assemble.",
            "ثبّته على الهاتف واضغط الزر. أصلح الكتابة التي لم تعمل ثم اجمع مرة أخرى.",
          ],
        },
      ],
    },
    {
      id: "types",
      title: "أنواع APK",
      blocks: [
        {
          heading: "APK الويب",
          paragraphs: [
            "هذا وضع الموقع في نافذة الهاتف. الداخل HTML وCSS وجافاسكريبت. Python الذي يعمل على الخادم لا يُفتح هنا بنفسه. index.html يجب أن يكون في جذر الـ zip. مجلدا css وjs يقفان بجانبه. الصورة تقع في img. يأخذ Nibras Studio هذا الـ zip أو عنوان الموقع، ويُختار الاسم والأيقونة واسم الحزمة، ويُجمع APK.",
          ],
          code: WEB,
          after: ["المثال الجاهز بهذا الشكل. نزّل الـ zip من الأسفل، وافتح index.html إذا أردت تغيير سطر، ثم أعطه إلى Studio."],
        },
        {
          heading: "APK الأصلي",
          paragraphs: [
            "يُكتب بـ Kotlin أو Java. الشاشة هي ملف xml داخل res/layout. عمل الزر في ملف java أو kotlin. الأيقونة في مجلدات mipmap. AndroidManifest.xml يقول اسم التطبيق والحزمة وشاشة الفتح. Android Studio يفتح هذه المجلدات بنفسه. الجمع يجري عبر Gradle. هذا النوع يُختار للكاميرا والمستشعر والعمل العميق على الهاتف. هو ثقيل لصفحة ملاحظات صغيرة.",
          ],
          code: NATIVE,
          after: ["تذكر سطر app/src/main. الـ manifest والشاشة والأيقونة تقف تحت ذلك السطر."],
        },
        {
          heading: "APK Capacitor",
          paragraphs: [
            "الصفحة تبقى في مجلد www. capacitor.config.json يقول كيف يدخل الموقع إلى التطبيق. مجلد android هو القشرة الأصلية. أنهِ الصفحة في www أولاً، ثم يحدّث Capacitor مجلد android، ويُجمع APK من مشروع android ذلك. Node وAndroid SDK كلاهما لازمان. هذا خطوة بعد APK الويب: يمكن لمس الهاتف بإضافتك.",
          ],
          code: CAP,
          after: ["www هو الموقع. android هو القشرة. تغيير واحد ونسيان الآخر يضع الشاشة القديمة على الهاتف."],
        },
        {
          heading: "APK Flutter",
          paragraphs: [
            "الشاشة تُكتب بلغة Dart داخل lib/main.dart. pubspec.yaml قائمة الحزم. مجلد android ما زال القشرة، لكن HTML لا يمسك الصفحة. Flutter يرسم الشاشة بنفسه. المشروع لا يُفتح قبل تثبيت SDK. المجلدات تبدو قليلة لكن الأداة تُتعلّم وحدها.",
          ],
          code: FLUTTER,
          after: ["lib هو الشاشة نفسها. android قشرة الهاتف فقط. APK يخرج بـ flutter build apk."],
        },
      ],
    },
  ];

  const ru: ProgrammingSection[] = [
    {
      id: "what",
      title: "Что такое APK?",
      blocks: [
        {
          paragraphs: [
            "APK — файл, который ставит телефон Android. Внутри экран, картинки, текст и код, который нужен приложению, чтобы работать. Магазин обычно открывает этот файл за тебя. Если сохранить и открыть его самому, телефон может спросить дополнительное разрешение.",
            "APK — не язык программирования. Это пакет готового приложения. Внутри может быть Kotlin, Java, Flutter или только веб-страница. Снаружи все заканчиваются на .apk.",
            "APK с незнакомой страницы может не быть настоящей копией приложения. Файл, который ты собираешь из своего сайта или своего zip, — другое. Буквы apk в имени не показывают, что файл безопасен.",
          ],
        },
      ],
    },
    {
      id: "how",
      title: "Как делают APK?",
      blocks: [
        {
          paragraphs: [
            "Сначала пишут, что приложение будет делать. Потом собирают экран. Потом этот экран становится файлами. В конце программа упаковывает эти файлы в один APK. Телефон ставит этот один файл.",
            "Короткий путь — веб-страница. Zip, в котором есть index.html, отдают Nibras Studio, и Studio превращает его в APK. Android Studio, аккаунт и курс кода для этого пути не нужны. Страница открывается в окне приложения на телефоне.",
            "Длинный путь — программа, которая работает на самом телефоне. Тогда появляются папки, манифест и шаг подписи. APK в конце всё равно один файл, но чтобы до него дойти, нужно больше инструментов.",
          ],
        },
      ],
    },
    {
      id: "tools",
      title: "Что нужно?",
      blocks: [
        {
          paragraphs: [
            "Не каждый вид просит один и тот же инструмент. Если превращаешь сайт в приложение, хватает браузера, текстового редактора и zip. Сам телефон — проверка. Сборку делает Nibras Studio.",
            "Нативное приложение на Kotlin или Java требует Android Studio, JDK и Android SDK. Пакет собирает Gradle. Capacitor нужен ещё Node и npm, потому что страница сначала стоит в веб-папке, потом переходит в папку android. Flutter нужен свой Flutter SDK.",
          ],
          list: [
            "Веб-APK: редактор, браузер, zip, Nibras Studio",
            "Нативный: Android Studio, JDK, Android SDK, Gradle",
            "Capacitor: Node, npm, Android SDK, папка android",
            "Flutter: Flutter SDK, папка android",
          ],
        },
      ],
    },
    {
      id: "stages",
      title: "Этапы сборки",
      blocks: [
        {
          paragraphs: ["Пропуск этапа даёт в конце пустое приложение. Сначала закончи один экран, потом добавь второй. У каждого этапа свой файл."],
          ordered: true,
          list: [
            "Напиши работу одной фразой: что приложение хранит или что показывает.",
            "Увидь экран на бумаге или на чёрном примере этой страницы. Заголовка, строки и кнопки хватает.",
            "Положи файлы в папку этого вида. Для веба index.html должен стоять в корне.",
            "Открой на своём компьютере. Веб-страницу проверь в браузере, нативное приложение — в эмуляторе или на телефоне.",
            "Собери APK. Если это веб-zip, отдай его Studio. Если нативный, Gradle вызывает assemble.",
            "Поставь на телефон и нажми кнопку. Поправь строку, которая не сработала, и собери снова.",
          ],
        },
      ],
    },
    {
      id: "types",
      title: "Виды APK",
      blocks: [
        {
          heading: "Веб-APK",
          paragraphs: [
            "Это помещение сайта в окно телефона. Внутри HTML, CSS и JavaScript. Python, который работает на сервере, здесь сам не открывается. index.html должен быть в корне zip. Папки css и js стоят рядом. Картинка падает в img. Nibras Studio берёт этот zip или адрес сайта, выбираются имя, значок и имя пакета, и APK собирается.",
          ],
          code: WEB,
          after: ["Готовый пример устроен так. Скачай zip ниже, открой index.html, если хочешь сменить строку, и отдай его Studio."],
        },
        {
          heading: "Нативный APK",
          paragraphs: [
            "Пишется на Kotlin или Java. Экран — это xml-файл в res/layout. Работа кнопки — в файле java или kotlin. Значок — в папках mipmap. AndroidManifest.xml говорит имя приложения, пакет и экран открытия. Android Studio сам открывает эти папки. Сборка идёт через Gradle. Этот вид берут для камеры, датчика и глубокой работы на телефоне. Для маленькой страницы заметок он тяжёл.",
          ],
          code: NATIVE,
          after: ["Запомни строку app/src/main. Манифест, экран и значок стоят под этой строкой."],
        },
        {
          heading: "APK Capacitor",
          paragraphs: [
            "Страница остаётся в папке www. capacitor.config.json говорит, как сайт входит в приложение. Папка android — нативная оболочка. Сначала закончи страницу в www, потом Capacitor обновляет папку android, а APK собирается из этого android-проекта. Нужны и Node, и Android SDK. Это на шаг дальше веб-APK: телефон можно трогать своим плагином.",
          ],
          code: CAP,
          after: ["www — это сайт. android — оболочка. Изменить одно и забыть другое — положить на телефон старый экран."],
        },
        {
          heading: "APK Flutter",
          paragraphs: [
            "Экран пишется на языке Dart внутри lib/main.dart. pubspec.yaml — список пакетов. Папка android всё ещё оболочка, но страницу держит не HTML. Flutter рисует экран сам. Проект не открывается, пока не поставлен SDK. Папок кажется мало, но инструмент учат отдельно.",
          ],
          code: FLUTTER,
          after: ["lib — это сам экран. android — только оболочка телефона. APK выходит командой flutter build apk."],
        },
      ],
    },
  ];

  pages.en = en;
  pages.tr = tr;
  pages.ar = ar;
  pages.ru = ru;
  return pages[lang];
}
