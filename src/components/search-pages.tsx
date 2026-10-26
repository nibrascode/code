import type { Lang } from "@/lib/i18n";
import { SEARCH, searchPath, searchTopicPath, type SearchKind } from "@/lib/search-pages";
import { localeHref } from "@/lib/locale-path";
import type { ApkError } from "@/lib/apk-errors-types";
import { APK_LABELS } from "@/lib/apk-errors-types";
import { TOOLS, TOOLS_PAGE, pageTools, toolPath } from "@/lib/tools";

const AI_GUIDE: Record<Lang, { h: string; p: string }[]> = {
  az: [
    {
      h: "Haradan başla",
      p: "Əvvəl «Prompt nədir» səhifəsini oxu. Model sənin ekranını görmür, yalnız yazdığın mətni görür. Sonra bir proqram seç: ChatGPT, Gemini və ya Claude. Üçünü eyni gündə qarışdırma. Birinə öyrəş, sonra o birinə bax. Pulsuz alternativlər ayrıca səhifədədir.",
    },
    {
      h: "Üç proqram eyni deyil",
      p: "ChatGPT-ni OpenAI hazırlayır. Gemini Google hesabı ilə açılır və axtarışın, Gmail-in yanında durur. Claude-u Anthropic hazırlayır, uzun mətn və kod izahı üçün seçilir. İş eynidir: sən yazırsan, cavab gəlir. Hesab, limit və həmin həftə açıq olan model ayrıdır. Birinə girmək o birini açmır.",
    },
    {
      h: "Qrafik və düymə",
      p: "GPT-6 cavabın içinə qrafik, düymə və kiçik alət qoya bilər. Gemini söhbətin içinə qrafik və sürgü qoya bilər. Claude böyük cavabı yan paneldə açır, buna artifact deyir. Üçü eyni düymə deyil. Qrafikin içindəki rəqəm mənbə deyil. Sürgünün göstərdiyi ədəd ölçü deyil. Vacib rəqəmi özün yoxla.",
    },
    {
      h: "Tətbiq və bu sayt",
      p: "Süni intellektlə tətbiq hazırlamaq başlanğıcdır, mağazaya hazır məhsul deyil. Ad, ikon, paket adı və imza səndə qalır. Nibras AI isə nibrascode.com/ai ünvanındakı söhbətdir. ChatGPT, Gemini və Claude deyil. Modelə gedən sualın gündəlik limiti var. Hazır cavablar həmin limitə düşmür.",
    },
    {
      h: "Nəyi yazma",
      p: "Şifrə, kart nömrəsi, gizli açar, müştəri adı və şirkət sənədi söhbətə getməməlidir. Forma da söhbətin hissəsidir. Cavab əmin səslənəndə də yanılır. Tarix, qanun, tibb və kod üçün son sözü modelə vermə. Kodu işə salmadan layihəyə yapışdırma.",
    },
  ],
  en: [
    {
      h: "Where to start",
      p: "Read the prompt page first. The model does not see your screen. It sees only the text you write. Then pick one program: ChatGPT, Gemini, or Claude. Do not mix all three on the same day. Get used to one, then look at another. Free alternatives sit on their own page.",
    },
    {
      h: "The three programs are not the same",
      p: "OpenAI makes ChatGPT. Gemini opens with a Google account and stands beside Search and Gmail. Anthropic makes Claude, and people pick it for a long text and for explaining code. The job is the same: you write, and an answer comes. The account, the limit, and the model open that week are separate. Signing in to one does not open the others.",
    },
    {
      h: "A chart and a button",
      p: "GPT-6 can put a chart, a button, and a small tool inside the answer. Gemini can put a chart and a slider inside the chat. Claude opens a large answer in a side panel, and it calls that an artifact. The three are not the same button. A number inside a chart is not a source. The number a slider shows is not a measurement. Check an important number yourself.",
    },
    {
      h: "An app and this site",
      p: "Making an app with AI is a start, not a product ready for the store. The name, the icon, the package name, and the signature stay with you. Nibras AI is the chat at nibrascode.com/ai. It is not ChatGPT, Gemini, or Claude. A question that reaches a model has a daily limit. Ready answers do not use that limit.",
    },
    {
      h: "What not to write",
      p: "A password, a card number, a private key, a customer name, and a company document should not go into the chat. A form is part of the chat too. The answer can sound sure and still be wrong. Do not give a model the last word on a date, a law, medicine, or code. Do not paste code into a project before you run it.",
    },
  ],
  tr: [
    {
      h: "Nereden başla",
      p: "Önce «Prompt nedir» sayfasını oku. Model ekranını görmez, yalnız yazdığın metni görür. Sonra bir program seç: ChatGPT, Gemini ya da Claude. Üçünü aynı günde karıştırma. Birine alış, sonra diğerine bak. Ücretsiz alternatifler ayrı sayfadadır.",
    },
    {
      h: "Üç program aynı değildir",
      p: "ChatGPT'yi OpenAI hazırlar. Gemini Google hesabıyla açılır ve aramanın, Gmail'in yanında durur. Claude'u Anthropic hazırlar, uzun metin ve kod açıklaması için seçilir. İş aynıdır: sen yazarsın, cevap gelir. Hesap, limit ve o hafta açık olan model ayrıdır. Birine girmek diğerini açmaz.",
    },
    {
      h: "Grafik ve düğme",
      p: "GPT-6 cevabın içine grafik, düğme ve küçük araç koyabilir. Gemini sohbetin içine grafik ve sürgü koyabilir. Claude büyük cevabı yan panelde açar, buna artifact der. Üçü aynı düğme değildir. Grafiğin içindeki sayı kaynak değildir. Sürgünün gösterdiği sayı ölçü değildir. Önemli sayıyı kendin kontrol et.",
    },
    {
      h: "Uygulama ve bu site",
      p: "Yapay zeka ile uygulama yapmak başlangıçtır, mağazaya hazır ürün değildir. Ad, simge, paket adı ve imza sende kalır. Nibras AI ise nibrascode.com/ai adresindeki sohbettir. ChatGPT, Gemini ve Claude değildir. Modele giden sorunun günlük limiti vardır. Hazır cevaplar o limite düşmez.",
    },
    {
      h: "Neyi yazma",
      p: "Şifre, kart numarası, gizli anahtar, müşteri adı ve şirket belgesi sohbete gitmemelidir. Form da sohbetin parçasıdır. Cevap emin seslendiğinde de yanılır. Tarih, yasa, tıp ve kod için son sözü modele verme. Kodu çalıştırmadan projeye yapıştırma.",
    },
  ],
  ar: [
    {
      h: "من أين تبدأ",
      p: "اقرأ أولًا صفحة «ما هو prompt». النموذج لا يرى شاشتك، يرى النص الذي تكتبه فقط. ثم اختر برنامجًا واحدًا: ChatGPT أو Gemini أو Claude. لا تخلط الثلاثة في يوم واحد. تعوّد على واحد ثم انظر إلى الآخر. البدائل المجانية في صفحة وحدها.",
    },
    {
      h: "البرامج الثلاثة ليست واحدة",
      p: "OpenAI تصنع ChatGPT. Gemini يُفتح بحساب Google ويقف بجانب البحث وGmail. Anthropic تصنع Claude، ويُختار للنص الطويل وشرح الرمز. العمل واحد: تكتب فيأتي الجواب. الحساب والحد والنموذج المفتوح ذلك الأسبوع منفصلة. الدخول إلى واحد لا يفتح الباقي.",
    },
    {
      h: "الرسم والزر",
      p: "GPT-6 يستطيع أن يضع رسمًا وزرًا وأداة صغيرة داخل الجواب. Gemini يستطيع أن يضع رسمًا ومنزلقًا داخل المحادثة. Claude يفتح الجواب الكبير في لوحة جانبية ويسمي ذلك artifact. الثلاثة ليست الزر نفسه. الرقم داخل الرسم ليس مصدرًا. الرقم الذي يُظهره المنزلق ليس قياسًا. افحص الرقم المهم بنفسك.",
    },
    {
      h: "التطبيق وهذا الموقع",
      p: "صنع تطبيق بالذكاء الاصطناعي بداية، وليس منتجًا جاهزًا للمتجر. الاسم والأيقونة واسم الحزمة والتوقيع تبقى عندك. Nibras AI هي المحادثة على nibrascode.com/ai. ليست ChatGPT ولا Gemini ولا Claude. السؤال الذي يصل إلى نموذج له حد يومي. الأجوبة الجاهزة لا تدخل في ذلك الحد.",
    },
    {
      h: "ماذا لا تكتب",
      p: "كلمة السر ورقم البطاقة والمفتاح السري واسم الزبون ووثيقة الشركة لا ينبغي أن تذهب إلى المحادثة. النموذج جزء من المحادثة أيضًا. قد يبدو الجواب واثقًا ويخطئ مع ذلك. لا تعطِ النموذج الكلمة الأخيرة في التاريخ أو القانون أو الطب أو الرمز. لا تلصق الرمز في مشروع قبل أن تشغّله.",
    },
  ],
  ru: [
    {
      h: "С чего начать",
      p: "Сначала прочитай страницу «Что такое prompt». Модель не видит твой экран, она видит только написанный тобой текст. Потом выбери одну программу: ChatGPT, Gemini или Claude. Не мешай все три в один день. Привыкни к одной, потом смотри другую. Бесплатные замены стоят на отдельной странице.",
    },
    {
      h: "Три программы — не одно и то же",
      p: "ChatGPT делает OpenAI. Gemini открывается аккаунтом Google и стоит рядом с Поиском и Gmail. Claude делает Anthropic, его выбирают для длинного текста и объяснения кода. Работа одна: ты пишешь, приходит ответ. Аккаунт, лимит и модель, открытая на этой неделе, разные. Вход в одну не открывает остальные.",
    },
    {
      h: "График и кнопка",
      p: "GPT-6 может положить график, кнопку и маленький инструмент внутрь ответа. Gemini может положить график и ползунок внутрь разговора. Claude открывает большой ответ в боковой панели и называет это artifact. Это не одна и та же кнопка. Число внутри графика — не источник. Число ползунка — не измерение. Важное число проверь сам.",
    },
    {
      h: "Приложение и этот сайт",
      p: "Сделать приложение с ИИ — это начало, не готовый товар для магазина. Имя, значок, имя пакета и подпись остаются на тебе. Nibras AI — разговор по адресу nibrascode.com/ai. Это не ChatGPT, не Gemini и не Claude. У вопроса, который доходит до модели, есть дневной лимит. Готовые ответы в этот лимит не входят.",
    },
    {
      h: "Чего не писать",
      p: "Пароль, номер карты, секретный ключ, имя клиента и документ компании не должны уходить в разговор. Форма тоже часть разговора. Ответ может звучать уверенно и всё равно быть неверным. Не отдавай модели последнее слово о дате, законе, медицине и коде. Не вставляй код в проект, пока не запустишь его.",
    },
  ],
};

function topicBlurb(lead: string) {
  const first = lead.split(/\n\n+/)[0] ?? "";
  return first.length > 280 ? `${first.slice(0, 277).trim()}…` : first;
}

function Rich({ text }: { text: string }) {
  const parts = text.split(/`([^`]+)`/g);
  return (
    <>
      {parts.map((part, index) => (index % 2 === 1 ? <code key={index}>{part}</code> : <span key={index}>{part}</span>))}
    </>
  );
}

export function SearchIndex({ kind, lang }: { kind: SearchKind; lang: Lang }) {
  const section = SEARCH[kind];
  const other = kind === "soz" ? "xeta" : "soz";
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{section.heading[lang]}</h1>
      <p className="why-lead">{section.intro[lang]}</p>
      {kind === "movzu" ? (
        <div className="prog-sections">
          {AI_GUIDE[lang].map((block) => (
            <section key={block.h}>
              <h2>{block.h}</h2>
              <p>{block.p}</p>
            </section>
          ))}
          <p>
            <a href={localeHref(lang, "/ai")}>Nibras AI</a>
          </p>
        </div>
      ) : null}
      <nav className="faq-links" aria-label={section.heading[lang]}>
        <a href={localeHref(lang, "/programming")}>{lang === "ar" ? "البرمجة" : lang === "ru" ? "Программирование" : lang === "tr" ? "Programlama" : lang === "en" ? "Programming" : "Proqramlaşdırma"}</a>
        <a href={searchPath(lang, other)}>{SEARCH[other].heading[lang]}</a>
      </nav>
      <ul className="lib-list">
        {section.items.map((item) => (
          <li key={item.slug}>
            <a href={searchTopicPath(lang, kind, item.slug)}>{item.piece[lang].title}</a>
            {kind === "movzu" ? <small className="lib-desc">{topicBlurb(item.piece[lang].lead)}</small> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}

export function SearchTopic({
  kind,
  lang,
  slug,
  body,
}: {
  kind: SearchKind;
  lang: Lang;
  slug: string;
  body?: ApkError | null;
}) {
  const section = SEARCH[kind];
  const item = section.items.find((entry) => entry.slug === slug);
  if (!item) return null;
  const text = item.piece[lang];
  const others = section.items.filter((entry) => entry.slug !== slug);
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={searchPath(lang, kind)}>{section.heading[lang]}</a>
      </p>
      <h1>{text.title}</h1>
      {body ? (
        <ApkBody body={body} lang={lang} />
      ) : (
      <div className="why-lead topic-body">
          {text.lead.split(/\n\n+/).map((para) => (
            <p key={para}>
              <Rich text={para} />
            </p>
          ))}
          <ul className="faq-points">
            {text.points.map((point) => (
              <li key={point}>
                <Rich text={point} />
              </li>
            ))}
          </ul>
          {text.note ? (
            <p className="faq-note">
              <Rich text={text.note} />
            </p>
          ) : null}
          {item.code ? <pre dir="ltr">{item.code}</pre> : null}
        </div>
      )}
      {item.links?.length ? (
        <nav className="faq-links" aria-label={text.title}>
          {item.links.map((link) => (
            <a key={link.path} href={localeHref(lang, link.path)}>
              {link.label[lang]}
            </a>
          ))}
        </nav>
      ) : null}
      {pageTools(slug).length ? (
        <div className="prog-fold-body">
          <h2>{TOOLS_PAGE.toolsFor[lang]}</h2>
          <ul className="lib-list">
            {pageTools(slug).map((id) => (
              <li key={id}>
                <a href={toolPath(lang, id)}>{TOOLS.find((tool) => tool.id === id)!.label[lang]}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <ul className="lib-list">
        {others.map((entry) => (
          <li key={entry.slug}>
            <a href={searchTopicPath(lang, kind, entry.slug)}>{entry.piece[lang].title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

function ApkBody({ body, lang }: { body: ApkError; lang: Lang }) {
  const t = body.l[lang];
  const lab = APK_LABELS[lang];
  return (
    <div className="why-lead apk-err">
      <h2>{lab.symptom}</h2>
      <pre dir="ltr">{body.err}</pre>
      <h2>{lab.cause}</h2>
      <p>
        <Rich text={t.cause} />
      </p>
      <h2>{lab.steps}</h2>
      <ol className="faq-points">
        {t.steps.map((step) => (
          <li key={step}>
            <Rich text={step} />
          </li>
        ))}
      </ol>
      <h2>{lab.commands}</h2>
      <pre dir="ltr">{body.cmd}</pre>
      <h2>{lab.prevent}</h2>
      <p>
        <Rich text={t.prevent} />
      </p>
      <p className="faq-note">{lab.author}</p>
    </div>
  );
}
