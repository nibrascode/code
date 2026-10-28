import type { Lang } from "@/lib/i18n";
import { faqPath } from "@/lib/faq";
import { localeHref } from "@/lib/locale-path";
import { TOOLS, toolPath, type ToolId } from "@/lib/tools";

const L = (az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> => ({
  az,
  en,
  tr,
  ar,
  ru,
});

const COPY = {
  title: L("Haradan başlayım", "Where do I start", "Nereden başlayayım", "من أين أبدأ", "С чего начать"),
  lead: L(
    "Əvvəl işini seç. Aşağıda bütün alətlər durur. Burada hər bölmənin nə iş gördüyü və hara getməli olduğun yazılır.",
    "Pick the job first. Every tool is listed below. Here each section says what it does and where you should go.",
    "Önce işi seç. Bütün araçlar aşağıdadır. Burada her bölümün ne iş gördüğü ve nereye gitmen gerektiği yazılır.",
    "اختر العمل أولاً. كل الأدوات في الأسفل. هنا يُكتب ماذا يفعل كل قسم وإلى أين تذهب.",
    "Сначала выбери дело. Все инструменты ниже. Здесь написано, что делает каждый раздел и куда идти.",
  ),
  file: L("Faylla işləyirəm", "I work with a file", "Dosyayla çalışıyorum", "أعمل مع ملف", "Работаю с файлом"),
  fileLead: L(
    "PDF-i bölmək, birləşdirmək və səhifədəki yazını mətnə çevirmək saytda işləyir. Şəkil təmizlənir. QR ünvanı, Wi-Fi-ni və vizit kartını koda çevirir. Telefonda isə Nibras PDF tətbiqi Google Play-dədir.",
    "Splitting a PDF, merging one, and turning the writing on a page into text already work on the site. An image can be cleaned. QR turns an address, Wi-Fi, or a card into a code. On the phone, the Nibras PDF app is on Google Play.",
    "PDF'i bölmek, birleştirmek ve sayfadaki yazıyı metne çevirmek sitede çalışır. Görsel temizlenir. QR adresi, Wi-Fi'yi ve kartviziti koda çevirir. Telefonda ise Nibras PDF uygulaması Google Play'dedir.",
    "تقسيم PDF ودمجه وتحويل الكتابة في الصفحة إلى نص يعمل في الموقع. الصورة تُنظَّف. QR يحوّل العنوان وWi-Fi والبطاقة إلى رمز. وفي الهاتف تطبيق Nibras PDF موجود في Google Play.",
    "Разделить PDF, склеить и превратить текст на странице в обычный текст уже можно на сайте. Картинку можно почистить. QR переводит адрес, Wi-Fi и визитку в код. А на телефоне приложение Nibras PDF есть в Google Play.",
  ),
  code: L("Kod yazıram", "I write code", "Kod yazıyorum", "أكتب كوداً", "Пишу код"),
  codeLead: L(
    "JSON sətirlərə ayrılır və səhv vergül burada görünür. CSS və JavaScript oxunaqlı olur, amma bu səhifələr kodu işlətmir. Dərslər Python, HTML və başqa mövzunu addım-addım açır. Eyni qapıda Code Studio, Workspace, Site Doctor, File Check, Schema, Shortcuts, Site Mirror və Logic Lab da var. Hər birinin öz səhifəsində nə etdiyi yazılır.",
    "JSON is split onto lines, and a bad comma shows up here. CSS and JavaScript become easier to read, but these pages do not run the code. The lessons open Python, HTML, and other topics step by step. The same door also has Code Studio, Workspace, Site Doctor, File Check, Schema, Shortcuts, Site Mirror, and Logic Lab. Each page says what that one does.",
    "JSON satırlara ayrılır ve hatalı virgül burada görünür. CSS ve JavaScript okunur hale gelir, ama bu sayfalar kodu çalıştırmaz. Dersler Python, HTML ve başka konuyu adım adım açar. Aynı kapıda Code Studio, Workspace, Site Doctor, File Check, Schema, Shortcuts, Site Mirror ve Logic Lab da vardır. Her birinin kendi sayfasında ne yaptığı yazılır.",
    "يُفصل JSON على أسطر وتظهر الفاصلة الخطأ هنا. CSS وJavaScript يصيران أسهل قراءة، لكن هذه الصفحات لا تشغّل الرمز. الدروس تفتح Python وHTML وغيرهما خطوة بخطوة. في الباب نفسه أيضًا Code Studio وWorkspace وSite Doctor وFile Check وSchema وShortcuts وSite Mirror وLogic Lab. كل صفحة تقول ماذا تفعل.",
    "JSON разбивается на строки, и плохая запятая видна здесь. CSS и JavaScript становятся читаемее, но эти страницы код не запускают. Уроки открывают Python, HTML и другие темы шаг за шагом. В той же двери есть Code Studio, Workspace, Site Doctor, File Check, Schema, Shortcuts, Site Mirror и Logic Lab. На своей странице написано, что делает каждая.",
  ),
  learn: L("Öyrənirəm", "I am learning", "Öğreniyorum", "أتعلّم", "Учусь"),
  learnLead: L(
    "Nibras Learn öyrənmə səhifələrini bir yerdə saxlayır. Programming bir mövzunu ayrıca səhifədə izah edir. FAQ isə sayt, tətbiq və yükləmə haqqında artıq verilən sualları cavablayır.",
    "Nibras Learn keeps the learning pages in one place. Programming explains one topic on its own page. The FAQ answers questions already asked about the site, the apps, and downloading.",
    "Nibras Learn öğrenme sayfalarını bir yerde tutar. Programming bir konuyu ayrı sayfada anlatır. FAQ ise site, uygulama ve indirme hakkında sorulmuş soruları cevaplar.",
    "Nibras Learn يُبقي صفحات التعلّم في مكان واحد. Programming يشرح موضوعًا واحدًا في صفحته. FAQ يجيب عن الأسئلة المطروحة عن الموقع والتطبيقات والتنزيل.",
    "Nibras Learn держит учебные страницы в одном месте. Programming объясняет одну тему на своей странице. FAQ отвечает на уже заданные вопросы о сайте, приложениях и загрузке.",
  ),
  ready: L("Hazırdır", "Ready", "Hazır", "جاهز", "Готово"),
  readyLead: L(
    "Bu dördünü indi açmaq olur. Linki olanın mağaza səhifəsi və ya sayt səhifəsi var.",
    "These four can be opened now. Where a link exists, there is a store page or a page on the site.",
    "Bu dördünü şimdi açmak olur. Bağlantısı olanın mağaza sayfası ya da site sayfası vardır.",
    "هذه الأربعة تُفتح الآن. حيث يوجد رابط فهناك صفحة متجر أو صفحة في الموقع.",
    "Эти четыре можно открыть сейчас. Где есть ссылка, там страница магазина или страница сайта.",
  ),
  readyArabic: L(
    "Ərəb dili tətbiqi hazırdır. 704 feil, 200 isim, kart və 28 hərfin yazı məşqi var. Google Play və Huawei-dədir.",
    "The Arabic app is ready. It has 704 verbs, 200 nouns, cards, and writing practice for 28 letters. It is on Google Play and Huawei.",
    "Arapça uygulaması hazırdır. 704 fiil, 200 isim, kart ve 28 harfin yazı alıştırması vardır. Google Play ve Huawei'dedir.",
    "تطبيق العربية جاهز. فيه 704 أفعال و200 اسم وبطاقات وتدريب كتابة 28 حرفًا. هو في Google Play وHuawei.",
    "Приложение арабского готово. В нём 704 глагола, 200 имён, карточки и практика письма 28 букв. Оно в Google Play и Huawei.",
  ),
  readyPdf: L(
    "Nibras PDF hazırdır və Google Play-dədir. PDF-i telefonda açmaq və onunla işləmək üçündür. Saytdakı PDF səhifəsi də açıqdır.",
    "Nibras PDF is ready and on Google Play. It is for opening and working with a PDF on the phone. The PDF page on the site is open too.",
    "Nibras PDF hazırdır ve Google Play'dedir. PDF'i telefonda açmak ve onunla çalışmak içindir. Sitedeki PDF sayfası da açıktır.",
    "Nibras PDF جاهز وفي Google Play. هو لفتح ملف PDF والعمل عليه في الهاتف. صفحة PDF في الموقع مفتوحة أيضًا.",
    "Nibras PDF готов и есть в Google Play. Он для того, чтобы открыть PDF на телефоне и работать с ним. Страница PDF на сайте тоже открыта.",
  ),
  readyAi: L(
    "Nibras AI saytda açıqdır. Sual, kod və şəkil üçün köməkçidir. Ayrı mağaza tətbiqi deyil.",
    "Nibras AI is open on the site. It is an assistant for a question, code, and an image. It is not a separate store app.",
    "Nibras AI sitede açıktır. Soru, kod ve görsel için yardımcıdır. Ayrı bir mağaza uygulaması değildir.",
    "Nibras AI مفتوح في الموقع. مساعد للسؤال والكود والصورة. ليس تطبيق متجر منفصلًا.",
    "Nibras AI открыт на сайте. Это помощник для вопроса, кода и картинки. Это не отдельное приложение магазина.",
  ),
  readyList: L(
    "Aşağıdakı siyahı kod alətləridir. Hər biri bir iş görür: sayır, düzəldir, hash çıxarır və ya mətni çevirir.",
    "The list below is the code tools. Each one does one job: it counts, formats, makes a hash, or converts text.",
    "Aşağıdaki liste kod araçlarıdır. Her biri bir iş görür: sayar, düzenler, hash çıkarır ya da metni çevirir.",
    "القائمة في الأسفل أدوات الكود. كل واحدة تعمل عملاً واحدًا: تعدّ أو تنسّق أو تخرج تجزئة أو تحوّل النص.",
    "Список ниже — инструменты кода. Каждый делает одно дело: считает, оформляет, делает хеш или переводит текст.",
  ),
  later: L("Hazırlanır", "In preparation", "Hazırlanıyor", "قيد الإعداد", "Готовится"),
  laterLead: L(
    "Bu üç tətbiqin mağaza linki yoxdur. Tarix elan olunmayıb. Yükləmə düyməsi göstərilmir. Səhifə yalnız nə olacağını deyir.",
    "These three apps have no store link. No date is announced. A download button is not shown. The page only says what they are meant to be.",
    "Bu üç uygulamanın mağaza bağlantısı yoktur. Tarih açıklanmadı. İndirme düğmesi gösterilmez. Sayfa yalnız ne olacağını söyler.",
    "هذه التطبيقات الثلاثة بلا رابط متجر. لم يُعلن تاريخ. زر التنزيل لا يُعرض. الصفحة تقول فقط ماذا يُراد منها.",
    "У этих трёх приложений нет ссылки магазина. Дата не объявлена. Кнопка загрузки не показывается. Страница только говорит, чем они должны быть.",
  ),
  laterQr: L(
    "Telefon tətbiqi hələ mağazada deyil. Saytdakı QR səhifəsində kod düzəltmək, dizayn etmək və skan etmək artıq olur.",
    "The phone app is not in a store yet. On the QR page of the site you can already make, design, and scan a code.",
    "Telefon uygulaması henüz mağazada değil. Sitedeki QR sayfasında kod yapmak, tasarlamak ve taramak şimdiden olur.",
    "تطبيق الهاتف ليس في المتجر بعد. في صفحة QR في الموقع يمكن الآن صنع الرمز وتصميمه ومسحه.",
    "Приложения для телефона пока нет в магазине. На странице QR сайта уже можно сделать, оформить и сканировать код.",
  ),
  laterDocs: L(
    "Sənəd yazmaq, redaktə etmək və paylaşmaq üçündür. Plan sakit ekrandır, reklam yoxdur. Hələ yükləmək olmur.",
    "It is for writing, editing, and sharing a document. The plan is a quiet screen, with no ads. It cannot be downloaded yet.",
    "Belge yazmak, düzenlemek ve paylaşmak içindir. Plan sakin bir ekrandır, reklam yoktur. Henüz indirilemez.",
    "هو لكتابة مستند وتحريره ومشاركته. الخطة شاشة هادئة بلا إعلانات. لا يمكن تنزيله بعد.",
    "Он для того, чтобы писать, править и делиться документом. План — тихий экран, без рекламы. Скачать его пока нельзя.",
  ),
  laterPlans: L(
    "Plan, cədvəl və hesabat bir yerdə durmalıdır. Planı qurmaq, gedişi izləmək və hesabatı görmək nəzərdə tutulub. Tətbiq hələ yoxdur.",
    "A plan, a sheet, and a report should stay in one place. Building the plan, following the progress, and seeing the report are planned. The app does not exist yet.",
    "Plan, tablo ve rapor bir yerde durmalıdır. Planı kurmak, gidişi izlemek ve raporu görmek planlanır. Uygulama henüz yoktur.",
    "الخطة والجدول والتقرير يجب أن تبقى في مكان واحد. بناء الخطة ومتابعة السير ورؤية التقرير مخططة. التطبيق غير موجود بعد.",
    "План, таблица и отчёт должны быть в одном месте. Собрать план, следить за ходом и видеть отчёт — это задумано. Приложения ещё нет.",
  ),
  see: L("Səhifəyə bax", "Open the page", "Sayfaya bak", "افتح الصفحة", "Открыть страницу"),
  list: L("Alət siyahısı", "Tool list", "Araç listesi", "قائمة الأدوات", "Список инструментов"),
  chains: L("Birlikdə işləyir", "They work together", "Birlikte çalışır", "تعمل معاً", "Работают вместе"),
  chainLead: L(
    "Fərq alətlərin sayı deyil. Biri bitəndə növbəti açılır. Hər zəncir üç hazır addımdır.",
    "The difference is not the number of tools. When one ends, the next opens. Each chain is three steps that already work.",
    "Fark araç sayısı değil. Biri bitince sonraki açılır. Her zincir şimdiden çalışan üç adımdır.",
    "الفرق ليس عدد الأدوات. حين تنتهي واحدة تُفتح التالية. كل سلسلة ثلاث خطوات تعمل الآن.",
    "Разница не в числе инструментов. Когда один кончается, открывается следующий. Каждая цепь — три шага, которые уже работают.",
  ),
  chain1: L("Fayldan paylaşım", "From a file to a share", "Dosyadan paylaşıma", "من ملف إلى مشاركة", "От файла к передаче"),
  chain1Note: L(
    "PDF səhifəsindəki yazını mətnə çevir. Söz sayğacı həmin mətndə neçə söz və simvol olduğunu deyir. QR qısa mətni və ya ünvanı koda çevirir ki, telefonla açılsın.",
    "Turn the writing on a PDF page into text. The word count says how many words and characters are in that text. QR turns a short text or an address into a code a phone can open.",
    "PDF sayfasındaki yazıyı metne çevir. Söz sayacı o metinde kaç söz ve karakter olduğunu söyler. QR kısa metni ya da adresi telefonla açılan koda çevirir.",
    "حوّل الكتابة في صفحة PDF إلى نص. عدّاد الكلمات يقول كم كلمة وحرفًا في ذلك النص. QR يحوّل نصًا قصيرًا أو عنوانًا إلى رمز يفتحه الهاتف.",
    "Преврати текст на странице PDF в обычный текст. Счётчик слов говорит, сколько в нём слов и знаков. QR переводит короткий текст или адрес в код, который открывает телефон.",
  ),
  chain2: L("Kodu yoxla", "Check the code", "Kodu yokla", "افحص الرمز", "Проверь код"),
  chain2Note: L(
    "JSON-u sətirlərə ayır ki, hər sahə görünsün. SHA-256 mətndən 64 simvolluq kod çıxarır. Bu şifrə deyil, eyni mətn həmişə eyni kodu verir. Base64 mətni başqa formaya qoyur, gizlətmir.",
    "Split JSON onto lines so each field is visible. SHA-256 makes a 64-character code from text. It is not a cipher: the same text always gives the same code. Base64 puts text in another form. It does not hide it.",
    "JSON'u satırlara ayır ki her alan görünsün. SHA-256 metinden 64 karakterlik kod çıkarır. Bu şifre değildir, aynı metin her zaman aynı kodu verir. Base64 metni başka biçime koyar, gizlemez.",
    "افصل JSON على أسطر كي يظهر كل حقل. SHA-256 يخرج رمزًا من 64 حرفًا من النص. هذا ليس تشفيرًا: النص نفسه يعطي الرمز نفسه دائمًا. Base64 يضع النص في شكل آخر ولا يخفيه.",
    "Разбей JSON на строки, чтобы было видно каждое поле. SHA-256 делает из текста код из 64 знаков. Это не шифр: тот же текст всегда даёт тот же код. Base64 кладёт текст в другую форму и не прячет его.",
  ),
  chain3: L("Səhifəni oxunaqlı et", "Make a page readable", "Sayfayı okunur yap", "اجعل الصفحة مقروءة", "Сделай страницу читаемой"),
  chain3Note: L(
    "HTML işarəsini mətn kimi göstər ki, səhifə onu teq sanmasın. CSS qaydasını sətirlərə ayır. JavaScript-i də sətirlərə ayır. Heç biri kodu işlətmir, yalnız oxumağı asanlaşdırır.",
    "Show an HTML sign as text so a page does not treat it as a tag. Split a CSS rule onto lines. Split JavaScript onto lines too. None of them runs the code. They only make it easier to read.",
    "HTML işaretini metin gibi göster ki sayfa onu etiket sanmasın. CSS kuralını satırlara ayır. JavaScript'i de satırlara ayır. Hiçbiri kodu çalıştırmaz, yalnız okumayı kolaylaştırır.",
    "اعرض علامة HTML كنص كي لا تحسبها الصفحة وسمًا. افصل قاعدة CSS على أسطر. وافصل JavaScript على أسطر أيضًا. لا واحدة تشغّل الرمز، بل تسهّل القراءة فقط.",
    "Покажи знак HTML как текст, чтобы страница не приняла его за тег. Разбей правило CSS на строки. JavaScript тоже разбей на строки. Ни один не запускает код, только облегчает чтение.",
  ),
};

function name(id: ToolId, lang: Lang) {
  return TOOLS.find((tool) => tool.id === id)!.label[lang];
}

export function StartDesk({ lang }: { lang: Lang }) {
  const doors = [
    {
      title: COPY.file[lang],
      lead: COPY.fileLead[lang],
      links: [
        [localeHref(lang, "/pdf"), "PDF"],
        [localeHref(lang, "/qr"), "QR"],
        [localeHref(lang, "/image"), lang === "az" ? "Şəkil" : lang === "tr" ? "Görsel" : lang === "ar" ? "صورة" : lang === "ru" ? "Картинка" : "Image"],
      ],
    },
    {
      title: COPY.code[lang],
      lead: COPY.codeLead[lang],
      links: [
        [localeHref(lang, "/studio"), "Code Studio"],
        [localeHref(lang, "/workspace"), "Workspace"],
        [localeHref(lang, "/doctor"), "Site Doctor"],
        [localeHref(lang, "/filecheck"), "File Check"],
        [localeHref(lang, "/schema"), "Schema"],
        [localeHref(lang, "/shortcuts"), "Shortcuts"],
        [localeHref(lang, "/mirror"), "Site Mirror"],
        [localeHref(lang, "/learn/logic"), "Logic Lab"],
        [toolPath(lang, "json"), "JSON"],
        [toolPath(lang, "css"), name("css", lang)],
        [localeHref(lang, "/programming"), lang === "az" ? "Dərslər" : lang === "tr" ? "Dersler" : lang === "ar" ? "دروس" : lang === "ru" ? "Уроки" : "Lessons"],
      ],
    },
    {
      title: COPY.learn[lang],
      lead: COPY.learnLead[lang],
      links: [
        [localeHref(lang, "/learn"), "Nibras Learn"],
        [localeHref(lang, "/programming"), "Programming"],
        [faqPath(lang), "FAQ"],
      ],
    },
  ] as const;
  const ready = [
    [localeHref(lang, "/apps/nibras-arabic"), "Nibras Arabic", COPY.readyArabic[lang]],
    [localeHref(lang, "/apps/nibras-pdf"), "Nibras PDF", COPY.readyPdf[lang]],
    [localeHref(lang, "/ai"), "Nibras AI", COPY.readyAi[lang]],
    ["#xidmet-siyahisi", COPY.list[lang], COPY.readyList[lang]],
  ] as const;
  const later = [
    [localeHref(lang, "/apps/nibras-qr"), "Nibras QR", COPY.laterQr[lang]],
    [localeHref(lang, "/apps/nibras-docs"), "Nibras Docs", COPY.laterDocs[lang]],
    [localeHref(lang, "/apps/nibras-plans"), "Nibras Plans", COPY.laterPlans[lang]],
  ] as const;
  const chains = [
    {
      title: COPY.chain1[lang],
      note: COPY.chain1Note[lang],
      steps: [
        [localeHref(lang, "/pdf/pdf-ocr"), lang === "az" ? "PDF-dən mətn" : lang === "tr" ? "PDF'den metin" : lang === "ar" ? "من PDF إلى نص" : lang === "ru" ? "PDF в текст" : "PDF to text"],
        [toolPath(lang, "count"), name("count", lang)],
        [toolPath(lang, "qr"), name("qr", lang)],
      ],
    },
    {
      title: COPY.chain2[lang],
      note: COPY.chain2Note[lang],
      steps: [
        [toolPath(lang, "json"), "JSON"],
        [toolPath(lang, "sha256"), "SHA-256"],
        [toolPath(lang, "base64"), "Base64"],
      ],
    },
    {
      title: COPY.chain3[lang],
      note: COPY.chain3Note[lang],
      steps: [
        [toolPath(lang, "html"), name("html", lang)],
        [toolPath(lang, "css"), name("css", lang)],
        [toolPath(lang, "js"), name("js", lang)],
      ],
    },
  ] as const;

  return (
    <section className="start-desk" aria-labelledby="start-title">
      <h2 id="start-title">{COPY.title[lang]}</h2>
      <p>{COPY.lead[lang]}</p>
      <div className="start-doors">
        {doors.map((door) => (
          <article key={door.title}>
            <h3>{door.title}</h3>
            <p>{door.lead}</p>
            <p className="start-links">
              {door.links.map(([href, label]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>
      <h3>{COPY.ready[lang]}</h3>
      <p>{COPY.readyLead[lang]}</p>
      <ul className="start-row">
        {ready.map(([href, label, text]) => (
          <li key={href}>
            <a href={href}>
              <strong>{label}</strong>
              <span className="start-copy">{text}</span>
            </a>
          </li>
        ))}
      </ul>
      <h3>{COPY.later[lang]}</h3>
      <p>{COPY.laterLead[lang]}</p>
      <ul className="start-row is-later">
        {later.map(([href, label, text]) => (
          <li key={href}>
            <a href={href}>
              <strong>
                {label}
                <span className="start-badge">{COPY.later[lang]}</span>
              </strong>
              <span className="start-copy">{text}</span>
              <span className="start-see">{COPY.see[lang]}</span>
            </a>
          </li>
        ))}
      </ul>
      <h3>{COPY.chains[lang]}</h3>
      <p>{COPY.chainLead[lang]}</p>
      {chains.map((chain) => (
        <article key={chain.title} className="start-chain-block">
          <h3>{chain.title}</h3>
          <p>{chain.note}</p>
          <ol className="start-chain">
            {chain.steps.map(([href, label], index) => (
              <li key={href}>
                <a href={href}>
                  <span>{index + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
}
