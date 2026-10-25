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
    "Əvvəl işini seç. Aşağıda bütün alətlər durur. Burada yalnız ilk addım görünür.",
    "Pick the job first. Every tool is listed below. Only the first step is shown here.",
    "Önce işi seç. Bütün araçlar aşağıdadır. Burada yalnız ilk adım görünür.",
    "اختر العمل أولاً. كل الأدوات في الأسفل. هنا تظهر الخطوة الأولى فقط.",
    "Сначала выбери дело. Все инструменты ниже. Здесь виден только первый шаг.",
  ),
  file: L("Faylla işləyirəm", "I work with a file", "Dosyayla çalışıyorum", "أعمل مع ملف", "Работаю с файлом"),
  fileLead: L(
    "PDF, QR və şəkil artıq işləyir.",
    "PDF, QR, and images already work.",
    "PDF, QR ve görsel şimdiden çalışır.",
    "PDF وQR والصورة تعمل الآن.",
    "PDF, QR и картинка уже работают.",
  ),
  code: L("Kod yazıram", "I write code", "Kod yazıyorum", "أكتب كوداً", "Пишу код"),
  codeLead: L(
    "JSON, formatter və dərslər bir yerdədir.",
    "JSON, a formatter, and the lessons sit together.",
    "JSON, düzenleyici ve dersler bir arada.",
    "JSON والتنسيق والدروس في مكان واحد.",
    "JSON, форматтер и уроки в одном месте.",
  ),
  learn: L("Öyrənirəm", "I am learning", "Öğreniyorum", "أتعلّم", "Учусь"),
  learnLead: L(
    "Dərslər və tez-tez verilən suallar.",
    "Lessons and the questions people ask.",
    "Dersler ve sık sorulan sorular.",
    "الدروس والأسئلة الشائعة.",
    "Уроки и частые вопросы.",
  ),
  ready: L("Hazırdır", "Ready", "Hazır", "جاهز", "Готово"),
  readyLead: L(
    "Bunları indi aça bilərsən.",
    "You can open these now.",
    "Bunları şimdi açabilirsin.",
    "يمكنك فتح هذه الآن.",
    "Это можно открыть сейчас.",
  ),
  later: L("Hazırlanır", "In preparation", "Hazırlanıyor", "قيد الإعداد", "Готовится"),
  laterLead: L(
    "Mağaza linki yoxdur və yükləmə düyməsi də yoxdur.",
    "There is no store link and no download button.",
    "Mağaza bağlantısı yok, indirme düğmesi de yok.",
    "لا يوجد رابط متجر ولا زر تنزيل.",
    "Нет ссылки магазина и нет кнопки загрузки.",
  ),
  list: L("Alət siyahısı", "Tool list", "Araç listesi", "قائمة الأدوات", "Список инструментов"),
  see: L("Səhifəyə bax", "Open the page", "Sayfaya bak", "افتح الصفحة", "Открыть страницу"),
  chains: L("Birlikdə işləyir", "They work together", "Birlikte çalışır", "تعمل معاً", "Работают вместе"),
  chainLead: L(
    "Fərq alətlərin sayı deyil. Biri bitəndə növbəti açılır.",
    "The difference is not the number of tools. When one ends, the next opens.",
    "Fark araç sayısı değil. Biri bitince sonraki açılır.",
    "الفرق ليس عدد الأدوات. حين تنتهي واحدة تُفتح التالية.",
    "Разница не в числе инструментов. Когда один кончается, открывается следующий.",
  ),
};

function name(id: ToolId, lang: Lang) {
  return TOOLS.find((tool) => tool.id === id)!.label[lang];
}

export function StartDesk({ lang }: { lang: Lang }) {
  const pdf = localeHref(lang, "/pdf");
  const doors = [
    {
      title: COPY.file[lang],
      lead: COPY.fileLead[lang],
      links: [
        [pdf, "PDF"],
        [localeHref(lang, "/qr"), "QR"],
        [localeHref(lang, "/image"), lang === "az" ? "Şəkil" : lang === "tr" ? "Görsel" : lang === "ar" ? "صورة" : lang === "ru" ? "Картинка" : "Image"],
      ],
    },
    {
      title: COPY.code[lang],
      lead: COPY.codeLead[lang],
      links: [
        [localeHref(lang, "/workspace"), "Workspace"],
        [localeHref(lang, "/doctor"), "Site Doctor"],
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
        [localeHref(lang, "/programming"), lang === "az" ? "Programming" : "Programming"],
        [faqPath(lang), "FAQ"],
      ],
    },
  ] as const;
  const ready = [
    [localeHref(lang, "/apps/nibras-arabic"), "Nibras Arabic"],
    [localeHref(lang, "/apps/nibras-qr"), "Nibras QR"],
    [localeHref(lang, "/ai"), "Nibras AI"],
    ["#xidmet-siyahisi", COPY.list[lang]],
  ] as const;
  const later = [
    [localeHref(lang, "/apps/nibras-pdf"), "Nibras PDF"],
    [localeHref(lang, "/apps/nibras-docs"), "Nibras Docs"],
    [localeHref(lang, "/apps/nibras-plans"), "Nibras Plans"],
  ] as const;
  const chains = [
    [
      [localeHref(lang, "/pdf/pdf-ocr"), lang === "az" ? "PDF-dən mətn" : lang === "tr" ? "PDF'den metin" : lang === "ar" ? "من PDF إلى نص" : lang === "ru" ? "PDF в текст" : "PDF to text"],
      [toolPath(lang, "count"), name("count", lang)],
      [toolPath(lang, "qr"), name("qr", lang)],
    ],
    [
      [toolPath(lang, "json"), "JSON"],
      [toolPath(lang, "sha256"), "SHA-256"],
      [toolPath(lang, "base64"), "Base64"],
    ],
    [
      [toolPath(lang, "html"), name("html", lang)],
      [toolPath(lang, "css"), name("css", lang)],
      [toolPath(lang, "js"), name("js", lang)],
    ],
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
        {ready.map(([href, label]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <h3>{COPY.later[lang]}</h3>
      <p>{COPY.laterLead[lang]}</p>
      <ul className="start-row is-later">
        {later.map(([href, label]) => (
          <li key={href}>
            <a href={href}>
              {label}
              <span className="start-badge">{COPY.later[lang]}</span>
              <span className="start-see">{COPY.see[lang]}</span>
            </a>
          </li>
        ))}
      </ul>
      <h3>{COPY.chains[lang]}</h3>
      <p>{COPY.chainLead[lang]}</p>
      {chains.map((steps) => (
        <ol key={steps[0][0]} className="start-chain">
          {steps.map(([href, label], index) => (
            <li key={href}>
              <a href={href}>
                <span>{index + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      ))}
    </section>
  );
}
