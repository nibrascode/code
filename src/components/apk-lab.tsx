import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

const COPY: Record<
  Lang,
  {
    shots: string;
    edit: string;
    name: string;
    line: string;
    button: string;
    files: string;
    filesNote: string;
    download: string;
    zip: string;
    zipNote: string;
    picked: string;
    studio: string;
    caps: [string, string, string, string, string];
  }
> = {
  az: {
    shots: "Qara ekranda nümunələr",
    edit: "Yazını dəyiş",
    name: "Tətbiqin adı",
    line: "Birinci sətir",
    button: "Düymənin yazısı",
    files: "Hazır tətbiq faylları",
    filesNote: "Bu zipin kökündə index.html durur. Yanında css və js qovluqları var. Onu olduğu kimi Studio-ya vermək olar.",
    download: "Qeyd zipini endir",
    zip: "Öz zipini seç",
    zipNote: "Zip seçilən kimi Nibras Studio özü açılır.",
    picked: "Studio açıldı",
    studio: "Nibras Studio-nu aç",
    caps: ["Veb qeyd", "Sayğac", "Səhifə içində", "Üç kart", "İnkişaf etmiş"],
  },
  en: {
    shots: "Samples on a black screen",
    edit: "Change the words",
    name: "App name",
    line: "First line",
    button: "Button text",
    files: "Ready app files",
    filesNote: "index.html stands at the root of this zip. The css and js folders sit beside it. You can give it to Studio as it is.",
    download: "Download the notes zip",
    zip: "Choose your own zip",
    zipNote: "Nibras Studio opens by itself as soon as you choose the zip.",
    picked: "Studio opened",
    studio: "Open Nibras Studio",
    caps: ["Web notes", "Counter", "Page inside", "Three cards", "Advanced"],
  },
  tr: {
    shots: "Kara ekranda örnekler",
    edit: "Yazıyı değiştir",
    name: "Uygulamanın adı",
    line: "İlk satır",
    button: "Düğmenin yazısı",
    files: "Hazır uygulama dosyaları",
    filesNote: "Bu zipin kökünde index.html durur. Yanında css ve js klasörleri vardır. Olduğu gibi Studio'ya verilebilir.",
    download: "Not zipini indir",
    zip: "Kendi zipini seç",
    zipNote: "Zip seçilir seçilmez Nibras Studio kendi açılır.",
    picked: "Studio açıldı",
    studio: "Nibras Studio'yu aç",
    caps: ["Web not", "Sayaç", "Sayfa içinde", "Üç kart", "Gelişmiş"],
  },
  ar: {
    shots: "أمثلة على شاشة سوداء",
    edit: "غيّر الكتابة",
    name: "اسم التطبيق",
    line: "السطر الأول",
    button: "كتابة الزر",
    files: "ملفات تطبيق جاهزة",
    filesNote: "index.html يقف في جذر هذا الـ zip. بجانبه مجلدا css وjs. يمكن إعطاؤه إلى Studio كما هو.",
    download: "تنزيل zip الملاحظات",
    zip: "اختر zip الخاص بك",
    zipNote: "يفتح Nibras Studio وحده فور اختيار الـ zip.",
    picked: "فُتح Studio",
    studio: "افتح Nibras Studio",
    caps: ["ملاحظة ويب", "عدّاد", "صفحة في الداخل", "ثلاث بطاقات", "متقدّم"],
  },
  ru: {
    shots: "Примеры на чёрном экране",
    edit: "Измени текст",
    name: "Имя приложения",
    line: "Первая строка",
    button: "Текст кнопки",
    files: "Готовые файлы приложения",
    filesNote: "В корне этого zip стоит index.html. Рядом папки css и js. Его можно отдать Studio как есть.",
    download: "Скачать zip заметок",
    zip: "Выбери свой zip",
    zipNote: "Nibras Studio открывается сам, как только выбран zip.",
    picked: "Studio открылся",
    studio: "Открыть Nibras Studio",
    caps: ["Веб-заметки", "Счётчик", "Страница внутри", "Три карточки", "Развитый"],
  },
};

const SHOTS = [
  { src: "/apk/inkisaf.jpg", alt: "İnkişaf etmiş" },
  { src: "/apk/qeyd.jpg", alt: "Qeyd" },
  { src: "/apk/saygac.jpg", alt: "Sayğac" },
  { src: "/apk/sehife.jpg", alt: "Səhifə" },
  { src: "/apk/kartlar.jpg", alt: "Kartlar" },
];

export function ApkLab() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const [name, setName] = useState(lang === "en" ? "Note" : lang === "tr" ? "Not" : lang === "ru" ? "Заметка" : lang === "ar" ? "ملاحظة" : "Qeyd");
  const [line, setLine] = useState(
    lang === "en" ? "Write one line today." : lang === "tr" ? "Bugün bir satır yaz." : lang === "ru" ? "Напиши сегодня одну строку." : lang === "ar" ? "اكتب سطراً اليوم." : "Bu gün bir sətir yaz.",
  );
  const [button, setButton] = useState(lang === "en" ? "Save" : lang === "tr" ? "Kaydet" : lang === "ru" ? "Сохранить" : lang === "ar" ? "احفظ" : "Saxla");
  const [zipName, setZipName] = useState("");

  function openStudio(file: File | undefined) {
    if (!file) return;
    setZipName(file.name);
    const opened = window.open("https://studio.nibrascode.com/studio", "_blank", "noopener,noreferrer");
    if (!opened) window.location.assign("https://studio.nibrascode.com/studio");
  }

  return (
    <div className="apk-lab">
      <h2>{copy.shots}</h2>
      <div className="apk-shots">
        {SHOTS.map((shot, index) => (
          <figure key={shot.src}>
            <img src={shot.src} alt={copy.caps[index]} />
            <figcaption>{copy.caps[index]}</figcaption>
          </figure>
        ))}
      </div>

      <h2>{copy.edit}</h2>
      <div className="apk-edit">
        <form className="apk-fields" onSubmit={(event) => event.preventDefault()}>
          <label>
            {copy.name}
            <input value={name} maxLength={24} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            {copy.line}
            <input value={line} maxLength={80} onChange={(event) => setLine(event.target.value)} />
          </label>
          <label>
            {copy.button}
            <input value={button} maxLength={18} onChange={(event) => setButton(event.target.value)} />
          </label>
        </form>
        <div className="apk-stage" aria-hidden="true">
          <div className="apk-phone">
            <p>{name || " "}</p>
            <span>{line || " "}</span>
            <b>{button || " "}</b>
          </div>
        </div>
      </div>

      <h2>{copy.files}</h2>
      <p>{copy.filesNote}</p>
      <p>
        <a className="apk-down" href="/apk/nibras-qeyd.zip" download>
          {copy.download}
        </a>
      </p>

      <h2>{copy.zip}</h2>
      <p>{copy.zipNote}</p>
      <label className="apk-file">
        <input
          type="file"
          accept=".zip,application/zip"
          onChange={(event) => openStudio(event.target.files?.[0])}
        />
      </label>
      {zipName ? (
        <div className="apk-next">
          <p>
            {copy.picked}: {zipName}
          </p>
          <a href="https://studio.nibrascode.com/" target="_blank" rel="noopener noreferrer">
            {copy.studio}
          </a>
        </div>
      ) : null}
    </div>
  );
}
