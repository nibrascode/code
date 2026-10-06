import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

export type StackPage = {
  slug: string;
  name: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  keywords: Record<Lang, string>;
  sections: Record<Lang, ProgrammingSection[]>;
};

export function t(az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> {
  return { az, en, tr, ar, ru };
}

export function lines(
  az: readonly string[],
  en: readonly string[],
  tr: readonly string[],
  ar: readonly string[],
  ru: readonly string[],
): Record<Lang, readonly string[]> {
  return { az, en, tr, ar, ru };
}

const LANGS = ["az", "en", "tr", "ar", "ru"] as const;

function titles(name: string) {
  return {
    what: t(`${name} nədir?`, `What is ${name}?`, `${name} nedir?`, `ما هو ${name}؟`, `Что такое ${name}?`),
    uses: t(
      `${name} nə üçün istifadə olunur?`,
      `What is ${name} used for?`,
      `${name} ne için kullanılır?`,
      `فيمَ يُستخدم ${name}؟`,
      `Для чего нужен ${name}?`,
    ),
    can: t(
      `${name} ilə nə etmək olar?`,
      `What can you do with ${name}?`,
      `${name} ile ne yapılabilir?`,
      `ماذا يمكن فعله باستخدام ${name}؟`,
      `Что можно делать с ${name}?`,
    ),
    hard: t(
      `${name} öyrənmək çətindirmi?`,
      `Is ${name} hard to learn?`,
      `${name} öğrenmek zor mu?`,
      `هل تعلم ${name} صعب؟`,
      `Сложно ли освоить ${name}?`,
    ),
    balance: t("Üstünlükləri və məhdudiyyətləri", "Advantages and limits", "Avantajları ve sınırları", "المزايا والحدود", "Плюсы и ограничения"),
    ideas: t("Əsas anlayışlar", "Basic ideas", "Temel kavramlar", "أفكار أساسية", "Основные понятия"),
    sample: t("Qısa nümunə", "A short example", "Kısa örnek", "مثال قصير", "Короткий пример"),
    faq: t("Tez-tez verilən suallar", "Common questions", "Sık sorulan sorular", "أسئلة شائعة", "Частые вопросы"),
  };
}

type Copy = {
  what: Record<Lang, string>;
  uses: Record<Lang, string>;
  useList: Record<Lang, readonly string[]>;
  can: Record<Lang, string>;
  hard: Record<Lang, string>;
  balance: Record<Lang, string>;
  ideas: Record<Lang, string>;
  ideaList: Record<Lang, readonly string[]>;
  sample: Record<Lang, string>;
  code: string;
  faq: Record<Lang, readonly string[]>;
};

export function topic(
  slug: string,
  name: string,
  title: Record<Lang, string>,
  description: Record<Lang, string>,
  keywords: Record<Lang, string>,
  copy: Copy,
): StackPage {
  const head = titles(name);
  const sections = {} as Record<Lang, ProgrammingSection[]>;
  for (const lang of LANGS) {
    sections[lang] = [
      { id: "what", title: head.what[lang], blocks: [{ paragraphs: [copy.what[lang]] }] },
      { id: "uses", title: head.uses[lang], blocks: [{ paragraphs: [copy.uses[lang]], list: copy.useList[lang] }] },
      { id: "can", title: head.can[lang], blocks: [{ paragraphs: [copy.can[lang]] }] },
      { id: "hard", title: head.hard[lang], blocks: [{ paragraphs: [copy.hard[lang]] }] },
      { id: "balance", title: head.balance[lang], blocks: [{ paragraphs: [copy.balance[lang]] }] },
      { id: "ideas", title: head.ideas[lang], blocks: [{ paragraphs: [copy.ideas[lang]], list: copy.ideaList[lang] }] },
      { id: "sample", title: head.sample[lang], blocks: [{ paragraphs: [copy.sample[lang]], code: copy.code }] },
      { id: "faq", title: head.faq[lang], blocks: [{ list: copy.faq[lang] }] },
    ];
  }
  return { slug, name, title, description, keywords, sections };
}

export const STACK_PAGES: readonly StackPage[] = [
  topic(
    "go",
    "Go",
    t("Go nədir?", "What is Go?", "Go nedir?", "ما هي لغة Go؟", "Что такое Go?"),
    t(
      "Go Google-un sadə sintaksisli, kompilyasiya olunan dilidir. Server, əmr sətri və bulud alətləri üçün seçilir.",
      "Go is a compiled language from Google with a small syntax. It is used for servers, command-line tools, and cloud software.",
      "Go, Google’ın sade sözdizimli derlenen dilidir. Sunucu, komut satırı ve bulut araçları için seçilir.",
      "Go لغة مُصرَّفة من Google بقواعد صغيرة. تُستخدم للخوادم وأدوات سطر الأوامر وبرمجيات السحابة.",
      "Go — компилируемый язык Google с коротким синтаксисом. Его берут для серверов, утилит и облачных программ.",
    ),
    t(
      "Go dili, Golang, Go proqramlaşdırma, Go server",
      "Go language, Golang, Go programming, Go server",
      "Go dili, Golang, Go programlama, Go sunucu",
      "لغة Go, Golang, برمجة Go, خادم Go",
      "язык Go, Golang, программирование на Go, сервер Go",
    ),
    {
      what: t(
        "Go 2009-cu ildə Google-da açıqlanıb. Kod qısa qalır, proqram isə bir fayl kimi yığılır və ayrıca quraşdırılmış dil mühiti olmadan işləyə bilir. Yaddaş yığımı var, sinif və irsiyyət isə yoxdur. Eyni anda çox iş görmək üçün goroutine və channel var.",
        "Go was released at Google in 2009. The code stays short, and the program builds into one file that can run without a separate language runtime. It has garbage collection, but not classes or inheritance. Goroutines and channels are how it does many tasks at once.",
        "Go 2009’da Google’da açıldı. Kod kısa kalır, program ayrı bir dil ortamı kurmadan çalışan tek dosyaya derlenir. Çöp toplama vardır, sınıf ve kalıtım yoktur. Aynı anda çok iş için goroutine ve channel kullanılır.",
        "ظهرت Go عام 2009 في Google. يبقى الكود قصيراً، ويُبنى البرنامج ملفاً واحداً يعمل بلا بيئة لغة منفصلة. فيها جمع قمامة، وليس فيها أصناف أو وراثة. تُنجز العمل المتوازي عبر goroutine وchannel.",
        "Go открыли в Google в 2009 году. Код короткий, программа собирается в один файл и может работать без отдельной среды языка. Сборщик мусора есть, классов и наследования нет. Параллельная работа идёт через goroutine и channel.",
      ),
      uses: t(
        "Go şəbəkə və alət yazanda seçilir. Docker və Kubernetes-in böyük hissəsi Go ilə yazılıb.",
        "Go is chosen for network services and tools. Large parts of Docker and Kubernetes are written in Go.",
        "Go, ağ hizmeti ve araç yazarken seçilir. Docker ve Kubernetes’in büyük kısmı Go ile yazılmıştır.",
        "تُختار Go لخدمات الشبكة والأدوات. أجزاء كبيرة من Docker وKubernetes مكتوبة بـ Go.",
        "Go выбирают для сетевых служб и утилит. Большие части Docker и Kubernetes написаны на Go.",
      ),
      useList: lines(
        ["HTTP API və mikroservis", "Əmr sətri proqramı", "Fayl və şəbəkə aləti", "Bulud və konteyner layihəsi"],
        ["HTTP API and microservice", "Command-line program", "File and network tool", "Cloud and container project"],
        ["HTTP API ve mikroservis", "Komut satırı programı", "Dosya ve ağ aracı", "Bulut ve konteyner projesi"],
        ["واجهة HTTP وخدمة صغيرة", "برنامج سطر أوامر", "أداة ملفات وشبكة", "مشروع سحابة وحاويات"],
        ["HTTP API и микросервис", "Программа командной строки", "Утилита для файлов и сети", "Облачный и контейнерный проект"],
      ),
      can: t(
        "Go ilə sürətli veb xidmət, arxa plan işi və bir maşından digərinə eyni cür daşınan alət yazılır. Standart kitabxanada HTTP server, JSON və test aləti var. C-dəki kimi əl ilə yaddaş azad etmək lazım deyil.",
        "With Go you write a fast web service, a background job, and a tool that moves from one machine to another the same way. The standard library has an HTTP server, JSON, and a test tool. You do not free memory by hand as in C.",
        "Go ile hızlı web hizmeti, arka plan işi ve bir makineden diğerine aynı taşınan araç yazılır. Standart kütüphanede HTTP sunucu, JSON ve test aracı vardır. Belleği C’deki gibi elle boşaltmak gerekmez.",
        "بـ Go تكتب خدمة ويب سريعة وعملاً في الخلفية وأداة تنتقل من جهاز إلى آخر بالطريقة نفسها. المكتبة القياسية فيها خادم HTTP وJSON وأداة اختبار. لا تحرّر الذاكرة يدوياً كما في C.",
        "На Go пишут быстрый веб-сервис, фоновую задачу и утилиту, которая одинаково переносится с машины на машину. В стандартной библиотеке есть HTTP-сервер, JSON и тесты. Память не освобождают руками, как в C.",
      ),
      hard: t(
        "Sintaksis kiçikdir, ona görə ilk proqram tez alınır. Çətin yer generic-lər, xəta yoxlamasının təkrarı və pointer-dir. Java qədər çərçivə yoxdur: bir çox şeyi özün yazırsan və ya kiçik kitabxana seçirsən.",
        "The syntax is small, so a first program comes quickly. The harder parts are generics, repeated error checks, and pointers. There is not a framework as large as in Java: you write more yourself or pick a small library.",
        "Sözdizimi küçüktür, ilk program çabuk çıkar. Zor yerler generic, yinelenen hata kontrolü ve pointer’dır. Java’daki kadar büyük çatı yoktur: çoğunu kendin yazarsın ya da küçük kütüphane seçersin.",
        "القواعد صغيرة، لذا يخرج البرنامج الأول سريعاً. الصعب هو generic وتكرار فحص الخطأ والمؤشرات. لا يوجد إطار بحجم Java: تكتب أكثر بنفسك أو تختار مكتبة صغيرة.",
        "Синтаксис маленький, первая программа получается быстро. Труднее дженерики, повторные проверки ошибок и указатели. Фреймворка размером с Java нет: больше пишешь сам или берёшь маленькую библиотеку.",
      ),
      balance: t(
        "Üstünlük: bir fayllıq proqram, aydın xəta və güclü paralel iş. Məhdudiyyət: qısa masaüstü pəncərə kitabxanası zəifdir, GUI və mobil tətbiq üçün birinci seçim deyil. İfadə bəzən Java və ya Kotlin-dən uzun görünür, çünki xəta hər addımda yoxlanır.",
        "Advantage: a single-file program, clear errors, and strong parallel work. Limit: the desktop window libraries are thin, so it is not the first choice for a GUI or a mobile app. A line can look longer than Java or Kotlin because an error is checked at each step.",
        "Avantaj: tek dosyalık program, açık hata ve güçlü paralel iş. Sınır: masaüstü pencere kütüphanesi zayıftır, GUI ve mobil uygulama için ilk seçim değildir. Hata her adımda bakıldığı için satır bazen Java veya Kotlin’den uzun durur.",
        "الميزة: برنامج بملف واحد وأخطاء واضحة وعمل متوازٍ قوي. الحد: مكتبات نوافذ سطح المكتب ضعيفة، فليست الخيار الأول لواجهة أو تطبيق هاتف. قد يبدو السطر أطول من Java أو Kotlin لأن الخطأ يُفحص في كل خطوة.",
        "Плюс: программа из одного файла, ясные ошибки и сильная параллельность. Ограничение: оконные библиотеки тонкие, это не первый выбор для GUI и мобильного приложения. Строка иногда длиннее, чем в Java или Kotlin, потому что ошибку проверяют на каждом шаге.",
      ),
      ideas: t(
        "Go-da paket, funksiya və struct əsasdır. Xəta çox vaxt ayrıca qaytarılan dəyərdir, istisna zənciri deyil.",
        "In Go a package, a function, and a struct are the base. An error is usually a returned value, not a chain of exceptions.",
        "Go’da temel paket, fonksiyon ve struct’tır. Hata çoğu zaman ayrı dönen değerdir, istisna zinciri değildir.",
        "في Go الأساس هو الحزمة والدالة وstruct. الخطأ غالباً قيمة مُعادة، وليس سلسلة استثناءات.",
        "В Go основа — пакет, функция и struct. Ошибка обычно отдельное возвращаемое значение, а не цепочка исключений.",
      ),
      ideaList: lines(
        ["go.mod asılılıqları saxlayır", "goroutine yüngül paralel işdir", "channel işlər arasında məlumat daşıyır", "gofmt kodu eyni görkəmə salır"],
        ["go.mod stores dependencies", "A goroutine is a light parallel task", "A channel carries data between tasks", "gofmt makes the code look the same"],
        ["go.mod bağımlılıkları tutar", "goroutine hafif paralel iştir", "channel işler arasında veri taşır", "gofmt kodu aynı görünüme sokar"],
        ["go.mod يحفظ الاعتماديات", "goroutine عمل متوازٍ خفيف", "channel ينقل البيانات بين الأعمال", "gofmt يوحّد شكل الكود"],
        ["go.mod хранит зависимости", "goroutine — лёгкая параллельная задача", "channel несёт данные между задачами", "gofmt приводит код к одному виду"],
      ),
      sample: t(
        "Bu proqram terminala bir sətir yazır. Faylın adı main.go olanda əmri go run main.go ilə işlətmək olar.",
        "This program writes one line to the terminal. If the file is main.go, run it with go run main.go.",
        "Bu program terminale bir satır yazar. Dosya adı main.go ise komut go run main.go olur.",
        "هذا البرنامج يكتب سطراً في الطرفية. إذا كان اسم الملف main.go فالأمر go run main.go.",
        "Эта программа пишет одну строку в терминал. Если файл называется main.go, её запускают командой go run main.go.",
      ),
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello")
}`,
      faq: lines(
        [
          "Go və Golang eyni dildir? Bəli. Rəsmi ad Go-dur, axtarışda Golang da işlənir.",
          "Go Java-nı əvəz edir? Hər yerdə yox. Şəbəkə xidmətində tez-tez, Android tətbiqində yox.",
          "Go öyrənmək üçün əvvəl C lazımdır? Xeyr. C yaddaşı əl ilə idarə edir, Go yox.",
        ],
        [
          "Are Go and Golang the same language? Yes. The official name is Go. Golang is the search name.",
          "Does Go replace Java? Not everywhere. Often for a network service, not for an Android app.",
          "Do you need C before Go? No. C manages memory by hand. Go does not.",
        ],
        [
          "Go ve Golang aynı dil mi? Evet. Resmi ad Go’dur, aramada Golang da kullanılır.",
          "Go, Java’nın yerine mi geçer? Her yerde değil. Ağ hizmetinde sık, Android uygulamasında hayır.",
          "Go için önce C gerekir mi? Hayır. C belleği elle yönetir, Go yönetmez.",
        ],
        [
          "هل Go وGolang اللغة نفسها؟ نعم. الاسم الرسمي Go، وفي البحث يُستخدم Golang أيضاً.",
          "هل تستبدل Go لغة Java؟ ليس في كل مكان. كثيراً في خدمة الشبكة، لا في تطبيق Android.",
          "هل يلزم C قبل Go؟ لا. C تدير الذاكرة يدوياً، وGo لا تفعل.",
        ],
        [
          "Go и Golang — один язык? Да. Официальное имя Go, в поиске ещё пишут Golang.",
          "Go заменяет Java? Не везде. Часто в сетевой службе, не в приложении Android.",
          "Нужен ли C до Go? Нет. C управляет памятью вручную, Go нет.",
        ],
      ),
    },
  ),
];

export function stackSections(slug: string, lang: Lang) {
  return STACK_PAGES.find((item) => item.slug === slug)?.sections[lang] ?? [];
}
