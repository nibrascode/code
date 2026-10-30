import { AlertTriangle, Bot, Clock, Globe, HardDrive, Image as ImageIcon, Lock, Mail, Scale, Server, ShieldCheck, Trash2 } from "lucide-react";
import { InfoCard, InfoCards } from "@/components/info-card";
import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import type { Lang } from "@/lib/i18n";

const LEAD: Record<Lang, string> = {
  az: "Əsas sayt və Nibras AI burada izah olunur. Tətbiqlərin siyasəti aşağıdakı keçidlərdədir.",
  en: "The main site and Nibras AI are explained here. App policies are in the links below.",
  tr: "Ana site ve Nibras AI burada anlatılır. Uygulama politikaları aşağıdaki bağlantılardadır.",
  ar: "الموقع الرئيسي وNibras AI مذكوران هنا. سياسات التطبيقات في الروابط أدناه.",
  ru: "Основной сайт и Nibras AI описаны здесь. Политики приложений — по ссылкам ниже.",
};

const SITE: Record<Lang, { title: string; body: string[] }> = {
  az: {
    title: "Əsas sayt",
    body: [
      "nibrascode.com açıq səhifələrdir. Hesab tələb olunmur.",
      "Brauzer dil seçimini və bəzi alət nəticələrini öz yaddaşında saxlaya bilər. Bu məlumat bizə göndərilmir.",
      "Əlaqə üçün yazılan məktub yalnız cavab vermək üçün oxunur. Başqa məqsədlə saxlanmır.",
      "Sayt Google Analytics ilə anonim ziyarət statistikası toplayır (səhifə, ölkə, cihaz növü); bunun üçün brauzerdə cookie yaradıla bilər. Faylların özü bu xidmətə getmir.",
      "Server tələb edən alətlər var: Site Doctor və SEO yoxlama daxil etdiyin linki, Xəta köməkçisi və səhifə köməkçisi yazdığın mətni serverə (və AI xidmətinə) göndərir. PDF, şəkil, video, səs və QR alətləri faylı brauzerdə emal edir.",
    ],
  },
  en: {
    title: "Main site",
    body: [
      "nibrascode.com is a set of open pages. No account is required.",
      "The browser may keep the language choice and some tool results in its own storage. That data is not sent to us.",
      "A message sent for contact is read only to reply. It is not kept for another purpose.",
      "The site collects anonymous visit statistics with Google Analytics (page, country, device type); a cookie may be set in the browser for this. Your files themselves never go to that service.",
      "Some tools do need the server: Site Doctor and the SEO check send the link you enter, and the Error helper and page assistant send the text you type to the server (and an AI service). PDF, image, video, audio and QR tools process files in the browser.",
    ],
  },
  tr: {
    title: "Ana site",
    body: [
      "nibrascode.com açık sayfalardır. Hesap gerekmez.",
      "Tarayıcı dil seçimini ve bazı araç sonuçlarını kendi belleğinde tutabilir. Bu veri bize gönderilmez.",
      "İletişim için yazılan mesaj yalnızca cevap vermek için okunur. Başka amaçla saklanmaz.",
      "Site, Google Analytics ile anonim ziyaret istatistiği toplar (sayfa, ülke, cihaz türü); bunun için tarayıcıda çerez oluşturulabilir. Dosyaların kendisi bu hizmete gitmez.",
      "Sunucu gerektiren araçlar vardır: Site Doctor ve SEO kontrolü girdiğin bağlantıyı, Hata yardımcısı ve sayfa yardımcısı yazdığın metni sunucuya (ve bir yapay zeka hizmetine) gönderir. PDF, görsel, video, ses ve QR araçları dosyayı tarayıcıda işler.",
    ],
  },
  ar: {
    title: "الموقع الرئيسي",
    body: [
      "nibrascode.com صفحات مفتوحة. لا يلزم حساب.",
      "قد يحفظ المتصفح اختيار اللغة وبعض نتائج الأدوات في ذاكرته. لا تُرسل هذه البيانات إلينا.",
      "الرسالة المرسلة للتواصل تُقرأ فقط للرد. لا تُحفظ لغرض آخر.",
      "يجمع الموقع إحصاءات زيارات مجهولة الهوية عبر Google Analytics (الصفحة والبلد ونوع الجهاز)، وقد يُنشأ ملف تعريف ارتباط لذلك. ملفاتك نفسها لا تذهب إلى هذه الخدمة.",
      "بعض الأدوات تحتاج الخادم: Site Doctor وفحص SEO يرسلان الرابط الذي تدخله، ومساعد الأخطاء ومساعد الصفحة يرسلان النص الذي تكتبه إلى الخادم (وإلى خدمة ذكاء اصطناعي). أدوات PDF والصور والفيديو والصوت وQR تعالج الملفات داخل المتصفح.",
    ],
  },
  ru: {
    title: "Основной сайт",
    body: [
      "nibrascode.com — открытые страницы. Учётная запись не нужна.",
      "Браузер может хранить выбор языка и некоторые результаты инструментов у себя. Эти данные нам не отправляются.",
      "Письмо для связи читается только для ответа. Для другой цели оно не хранится.",
      "Сайт собирает анонимную статистику посещений через Google Analytics (страница, страна, тип устройства); для этого в браузере может создаваться cookie. Сами файлы в этот сервис не попадают.",
      "Некоторым инструментам нужен сервер: Site Doctor и SEO-проверка отправляют введённую ссылку, а помощник по ошибкам и помощник страницы — введённый текст на сервер (и в ИИ-сервис). Инструменты PDF, изображений, видео, аудио и QR обрабатывают файлы в браузере.",
    ],
  },
};

const AI: Record<Lang, { title: string; body: string[] }> = {
  az: {
    title: "Nibras AI",
    body: [
      "Nibras AI Nibras Code-un ayrıca köməkçisidir: nibrascode.com/ai. Burada sual vermək, fikir almaq, kod yazmaq və şəkil hazırlamaq və ya düzəltmək olur. Hesab açılmır. Ad, e-poçt və telefon istənmir.",
      "Söhbət bu brauzerin yaddaşında 24 saat qalır, sonra silinir. Söhbəti özün də silə bilərsən. Bu brauzer üçün təsadüfi nömrə də burada saxlanır. Bu nömrə adın deyil, yalnız eyni cihazı tanımaq üçündür. Dil seçimi də bu brauzerdə qalır.",
      "Cavab iki yolla gəlir. Hazır mənbə varsa model çağırılmır: Quran ayəsi, təfsir, hədis, lüğət, Wikidata faktı və saytın öz alətləri. Bu halda mesajın mətni serverdə saxlanmır. Qalan sual əvvəl Nibras Code serverinə, oradan xarici süni intellekt xidmətinə gedir: xAI, Groq, Google Gemini, DeepSeek, Mistral, Cerebras və ya OpenRouter (hansı əlçatandırsa). Şəkil yaratmaq üçün təsvir Pollinations xidmətinə gedir. Onlar mətni yalnız cavab hazırlamaq üçün oxuyur.",
      "Biz bu mətni reklama vermirik və öz modelimizi öyrətmək üçün saxlamırıq. Server söhbəti qəbul edirsə, eyni mətn həmin cihaz nömrəsi ilə orada da ən çox 24 saat qalır, sonra siyahıdan düşür. Sayğac yalnız hadisənin növünü göndərir, yazdığın cümləni yox. Brauzerdə izləmə bağlıdırsa sayğac getmir.",
      "Şəkil göndərilsə, şəkil də modelə gedir. Göndərilməzdən əvvəl ən uzun tərəfi 1024 pikselə endirilir. Format PNG, JPG və ya WEBP olur. Bir mesaj 800 simvoldan uzundursa, server artığını kəsir. Modelə gedən sual gündə 40-dır. Hazır cavablar bu saya düşmür.",
      "Nibras AI həkim, hüquqşünas və rəsmi dini hökm deyil. Cavabı yoxlamadan qərar vermə. Şifrə, kart nömrəsi, şəxsiyyət vəsiqəsi və gizli sənəd yazma. Uşaq və ya başqasının gizli məlumatı bu səhifəyə aid deyil.",
      "Silinməni gözləmək istəmirsənsə, saytın brauzerdə saxladığı məlumatı özün təmizləyə bilərsən. Serverdə qalan mətn üçün nibrascode@gmail.com ünvanına yaz. Məktub yalnız bu istəyə cavab vermək üçün oxunur.",
    ],
  },
  en: {
    title: "Nibras AI",
    body: [
      "Nibras AI is Nibras Code’s separate assistant at nibrascode.com/ai. You can ask a question, take an idea, write code, and make or edit an image. No account is opened. A name, an email, and a phone number are not asked.",
      "A chat stays in this browser’s storage for 24 hours, then it is deleted. You can delete a chat yourself. A random number for this browser is also kept here. That number is not your name. It only recognizes the same device. The language choice stays in this browser too.",
      "An answer comes in two ways. If a ready source exists, no model is called: a Quran verse, tafsir, hadith, a word meaning, a Wikidata fact, and the site’s own tools. In that case the message text is not kept on the server. The remaining question goes first to the Nibras Code server, then to an external AI service: xAI, Groq, Google Gemini, DeepSeek, Mistral, Cerebras or OpenRouter (whichever is available). For image generation, the prompt goes to the Pollinations service. They read the text only to prepare an answer.",
      "We do not give this text to ads and we do not keep it to train our own model. If the server accepts the chat, the same text stays there with that device number for at most 24 hours, then it drops off the list. The counter sends only the kind of event, not the sentence you wrote. If tracking is off in the browser, the counter does not go.",
      "If an image is sent, the image goes to the model too. Before it is sent, the long side is reduced to 1024 pixels. The format is PNG, JPG, or WEBP. If one message is longer than 800 characters, the server cuts the rest. A question that reaches a model is limited to 40 a day. Ready answers do not use that count.",
      "Nibras AI is not a doctor, a lawyer, or an official religious ruling. Do not decide before you check the answer. Do not write a password, a card number, an identity document, or a private file. A child, or someone else’s private information, does not belong on this page.",
      "If you do not want to wait for deletion, you can clear what this site keeps in the browser yourself. For text still on the server, write to nibrascode@gmail.com. The letter is read only to answer that request.",
    ],
  },
  tr: {
    title: "Nibras AI",
    body: [
      "Nibras AI, Nibras Code’un ayrı yardımcısıdır: nibrascode.com/ai. Burada soru sorulur, fikir alınır, kod yazılır ve görsel hazırlanır veya düzeltilir. Hesap açılmaz. Ad, e-posta ve telefon istenmez.",
      "Sohbet bu tarayıcının belleğinde 24 saat kalır, sonra silinir. Sohbeti kendin de silebilirsin. Bu tarayıcı için rastgele bir numara da burada tutulur. Bu numara adın değildir, yalnız aynı cihazı tanımak içindir. Dil seçimi de bu tarayıcıda kalır.",
      "Cevap iki yolla gelir. Hazır kaynak varsa model çağrılmaz: Kuran ayeti, tefsir, hadis, sözlük, Wikidata faktı ve sitenin kendi araçları. Bu durumda mesajın metni sunucuda saklanmaz. Kalan soru önce Nibras Code sunucusuna, oradan dış bir yapay zeka hizmetine gider: xAI, Groq, Google Gemini, DeepSeek, Mistral, Cerebras veya OpenRouter (hangisi erişilebilirse). Görsel üretmek için açıklama Pollinations hizmetine gider. Onlar metni yalnız cevap hazırlamak için okur.",
      "Bu metni reklama vermeyiz ve kendi modelimizi eğitmek için saklamayız. Sunucu sohbeti kabul ederse aynı metin o cihaz numarasıyla orada en çok 24 saat kalır, sonra listeden düşer. Sayacı yalnız olayın türünü gönderir, yazdığın cümleyi değil. Tarayıcıda izleme kapalıysa sayacı gitmez.",
      "Görsel gönderilirse görsel de modele gider. Gönderilmeden önce uzun kenarı 1024 piksele indirilir. Biçim PNG, JPG veya WEBP olur. Bir mesaj 800 karakterden uzunsa sunucu fazlasını keser. Modele giden soru günde 40’tır. Hazır cevaplar bu sayıya düşmez.",
      "Nibras AI hekim, hukukçu ve resmî dinî hüküm değildir. Cevabı kontrol etmeden karar verme. Şifre, kart numarası, kimlik belgesi ve gizli dosya yazma. Çocuk veya başkasının gizli bilgisi bu sayfaya ait değildir.",
      "Silinmeyi beklemek istemezsen sitenin tarayıcıda tuttuğu veriyi kendin temizleyebilirsin. Sunucuda kalan metin için nibrascode@gmail.com adresine yaz. Mektup yalnız bu isteğe cevap vermek için okunur.",
    ],
  },
  ar: {
    title: "Nibras AI",
    body: [
      "Nibras AI مساعد منفصل لـ Nibras Code: nibrascode.com/ai. هنا يُطرح سؤال وتُؤخذ فكرة ويُكتب كود وتُجهَّز صورة أو تُعدَّل. لا يُفتح حساب. لا يُطلب اسم ولا بريد ولا هاتف.",
      "تبقى المحادثة في ذاكرة هذا المتصفح 24 ساعة ثم تُحذف. يمكنك حذف المحادثة بنفسك. يُحفظ هنا أيضًا رقم عشوائي لهذا المتصفح. هذا الرقم ليس اسمك، بل لمعرفة الجهاز نفسه. يبقى اختيار اللغة في هذا المتصفح أيضًا.",
      "يأتي الجواب من طريقين. إذا وُجد مصدر جاهز لا يُستدعى نموذج: آية القرآن والتفسير والحديث ومعنى الكلمة وحقيقة من ويكي بيانات وأدوات الموقع نفسه. في هذه الحال لا يُحفظ نص الرسالة على الخادم. السؤال الباقي يذهب أولًا إلى خادم Nibras Code ثم إلى خدمة ذكاء اصطناعي خارجية: xAI أو Groq أو Google Gemini أو DeepSeek أو Mistral أو Cerebras أو OpenRouter (حسب المتاح). لتوليد الصور يذهب الوصف إلى خدمة Pollinations. يقرأون النص فقط لإعداد الجواب.",
      "لا نعطي هذا النص للإعلان ولا نحفظه لتدريب نموذجنا. إذا قبل الخادم المحادثة يبقى النص نفسه برقم ذلك الجهاز 24 ساعة على الأكثر ثم يسقط من القائمة. العداد يرسل نوع الحدث فقط لا الجملة التي كتبتها. إذا كان التتبع مغلقًا في المتصفح لا يذهب العداد.",
      "إذا أُرسلت صورة تذهب الصورة أيضًا إلى النموذج. قبل الإرسال يُقصَر أطول ضلع إلى 1024 بكسل. الصيغة PNG أو JPG أو WEBP. إذا زادت رسالة عن 800 حرف يقطع الخادم الباقي. السؤال الذي يصل إلى نموذج محدود بأربعين في اليوم. الأجوبة الجاهزة لا تدخل في هذا العدد.",
      "Nibras AI ليس طبيبًا ولا محاميًا ولا حكمًا دينيًا رسميًا. لا تقرر قبل مراجعة الجواب. لا تكتب كلمة سر أو رقم بطاقة أو وثيقة هوية أو ملفًا سريًا. الطفل ومعلومة غيره السرية لا مكان لهما هنا.",
      "إن لم ترد انتظار الحذف يمكنك مسح ما يحفظه الموقع في المتصفح بنفسك. للنص الباقي على الخادم اكتب إلى nibrascode@gmail.com. تُقرأ الرسالة فقط للرد على هذا الطلب.",
    ],
  },
  ru: {
    title: "Nibras AI",
    body: [
      "Nibras AI — отдельный помощник Nibras Code: nibrascode.com/ai. Здесь можно задать вопрос, взять идею, написать код и сделать или поправить картинку. Счёт не открывается. Имя, почта и телефон не спрашиваются.",
      "Разговор остаётся в памяти этого браузера 24 часа, затем удаляется. Разговор можно удалить самому. Случайный номер этого браузера тоже хранится здесь. Этот номер — не имя. Он только узнаёт то же устройство. Выбор языка тоже остаётся в этом браузере.",
      "Ответ приходит двумя путями. Если есть готовый источник, модель не вызывается: аят Корана, тафсир, хадис, значение слова, факт из Викиданных и собственные инструменты сайта. Тогда текст сообщения на сервере не хранится. Остальной вопрос сначала идёт на сервер Nibras Code, затем во внешний сервис ИИ: xAI, Groq, Google Gemini, DeepSeek, Mistral, Cerebras или OpenRouter (что доступно). Для создания изображений описание уходит в сервис Pollinations. Они читают текст только чтобы подготовить ответ.",
      "Мы не отдаём этот текст рекламе и не храним его, чтобы учить свою модель. Если сервер принимает разговор, тот же текст с номером этого устройства остаётся там не больше 24 часов, затем выпадает из списка. Счётчик шлёт только вид события, не написанное предложение. Если в браузере слежение выключено, счётчик не уходит.",
      "Если отправлена картинка, она тоже идёт к модели. Перед отправкой длинная сторона уменьшается до 1024 пикселей. Формат PNG, JPG или WEBP. Если сообщение длиннее 800 знаков, сервер отрезает остальное. Вопрос, который доходит до модели, ограничен сорока в день. Готовые ответы в этот счёт не входят.",
      "Nibras AI — не врач, не юрист и не официальное религиозное решение. Не решай, пока не проверишь ответ. Не пиши пароль, номер карты, удостоверение и тайный документ. Ребёнок и чужая тайна этой странице не принадлежат.",
      "Если не хочешь ждать удаления, можешь сам очистить то, что сайт хранит в браузере. О тексте, который ещё на сервере, напиши на nibrascode@gmail.com. Письмо читается только чтобы ответить на эту просьбу.",
    ],
  },
};

const APPS = [
  ["nibras-arabic", "Nibras Arabic"],
  ["nibras-pdf", "Nibras PDF"],
  ["nibras-qr", "Nibras QR"],
  ["nibras-scan", "Nibras Scan"],
  ["nibras-note", "Nibras Note"],
  ["nibras-nova", "Nibras Nova"],
  ["nibras-docs", "Nibras Docs"],
  ["nibras-plans", "Nibras Plans"],
] as const;

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = useI18n();
  const path = useRouterState({ select: (state) => state.location.pathname });
  if (path.replace(/\/$/, "") !== "/privacy") return <Outlet />;

  return (
    <main className="why-page privacy-page">
      <h1>{t("privacy_btn")}</h1>
      <p className="why-lead">{LEAD[lang]}</p>
      <h2 className="info-section-title">{SITE[lang].title}</h2>
      <InfoCards>
        {SITE[lang].body.map((line, i) => (
          <InfoCard key={line} icon={[Globe, HardDrive, Mail][i] ?? Globe}>
            <p>{line}</p>
          </InfoCard>
        ))}
      </InfoCards>
      <h2 className="info-section-title">{AI[lang].title}</h2>
      <InfoCards>
        {AI[lang].body.map((line, i) => (
          <InfoCard key={line} icon={[Bot, Clock, Server, Lock, ImageIcon, AlertTriangle, Trash2][i] ?? Bot}>
            <p>{line}</p>
          </InfoCard>
        ))}
      </InfoCards>
      <InfoCards>
        {APPS.map(([slug, name]) => (
          <InfoCard key={slug} icon={ShieldCheck} muted={t("privacy_btn")} title={name} href={localeHref(lang, `/privacy/${slug}`)} />
        ))}
        <InfoCard icon={Scale} muted={t("privacy_btn")} href={localeHref(lang, "/tools-legal")} title={({az:"Studio, Workspace, Learn, Site Doctor, Error Help və digər alətlər — məxfilik və şərtlər",en:"Privacy and terms for Studio, Workspace, Learn, Site Doctor, Error Help and other tools",tr:"Studio, Workspace, Learn, Site Doctor, Error Help ve diğer araçlar — gizlilik ve koşullar",ar:"الخصوصية والشروط لـ Studio وWorkspace وLearn وSite Doctor وError Help وأدوات أخرى",ru:"Конфиденциальность и условия для Studio, Workspace, Learn, Site Doctor, Error Help и других инструментов"} as Record<string,string>)[lang] ?? "Privacy and terms for Studio, Workspace, Learn, Site Doctor, Error Help and other tools"} />
      </InfoCards>
    </main>
  );
}
