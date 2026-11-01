import type { Lang } from "@/lib/i18n";

type Row = [string, string, string];
const T: Record<Lang, { h: string; cols: [string, string, string]; rows: Row[] }> = {
  az: {
    h: "Niyə Nibras Code?",
    cols: ["Xüsusiyyət", "Nibras Code (nibrascode.com)", "Adi onlayn alətlər"],
    rows: [
      ["Fayl məxfiliyi", "Fayl cihazda (brauzerdə) emal olunur, serverə getmir", "Fayl xarici serverə yüklənir"],
      ["Qeydiyyat və hesab", "Tələb olunmur — dərhal işləyir", "Çox vaxt e-poçt və abunəlik tələb edir"],
      ["Reklam", "0 reklam, təmiz interfeys", "Banner və pop-up reklamlar"],
      ["Dil dəstəyi", "5 dil (AZ, EN, TR, AR, RU)", "Əsasən yalnız ingilis dili"],
      ["Qiymət", "Əsas alətlər 100% pulsuz, gündəlik limit yoxdur", "Gündəlik 1–2 fayl limiti"],
    ],
  },
  en: {
    h: "Why Nibras Code?",
    cols: ["Feature", "Nibras Code (nibrascode.com)", "Typical online tools"],
    rows: [
      ["File privacy", "Files are processed on your device (in the browser), not sent to a server", "Files are uploaded to an external server"],
      ["Sign-up and account", "Not required — works instantly", "Often require email and a subscription"],
      ["Ads", "0 ads, clean interface", "Banner and pop-up ads"],
      ["Languages", "5 languages (AZ, EN, TR, AR, RU)", "Mostly English only"],
      ["Price", "Core tools 100% free, no daily limit", "1–2 files per day limit"],
    ],
  },
  tr: {
    h: "Neden Nibras Code?",
    cols: ["Özellik", "Nibras Code (nibrascode.com)", "Sıradan çevrim içi araçlar"],
    rows: [
      ["Dosya gizliliği", "Dosya cihazda (tarayıcıda) işlenir, sunucuya gitmez", "Dosya harici sunucuya yüklenir"],
      ["Kayıt ve hesap", "Gerekmez — hemen çalışır", "Çoğu zaman e-posta ve abonelik ister"],
      ["Reklam", "0 reklam, temiz arayüz", "Banner ve açılır reklamlar"],
      ["Dil desteği", "5 dil (AZ, EN, TR, AR, RU)", "Çoğunlukla yalnızca İngilizce"],
      ["Fiyat", "Temel araçlar %100 ücretsiz, günlük sınır yok", "Günde 1–2 dosya sınırı"],
    ],
  },
  ar: {
    h: "لماذا Nibras Code؟",
    cols: ["الميزة", "Nibras Code (nibrascode.com)", "الأدوات العادية على الإنترنت"],
    rows: [
      ["خصوصية الملفات", "تُعالَج الملفات على جهازك (في المتصفح) ولا تُرسل إلى خادم", "تُرفع الملفات إلى خادم خارجي"],
      ["التسجيل والحساب", "غير مطلوب — يعمل فورًا", "غالبًا تتطلب بريدًا واشتراكًا"],
      ["الإعلانات", "0 إعلانات، واجهة نظيفة", "إعلانات بانر ونوافذ منبثقة"],
      ["اللغات", "5 لغات (AZ, EN, TR, AR, RU)", "غالبًا الإنجليزية فقط"],
      ["السعر", "الأدوات الأساسية مجانية 100% بلا حد يومي", "حد 1–2 ملف يوميًا"],
    ],
  },
  ru: {
    h: "Почему Nibras Code?",
    cols: ["Параметр", "Nibras Code (nibrascode.com)", "Обычные онлайн-сервисы"],
    rows: [
      ["Приватность файлов", "Файл обрабатывается на устройстве (в браузере), на сервер не уходит", "Файл загружается на внешний сервер"],
      ["Регистрация", "Не нужна — работает сразу", "Часто нужны e-mail и подписка"],
      ["Реклама", "0 рекламы, чистый интерфейс", "Баннеры и всплывающие окна"],
      ["Языки", "5 языков (AZ, EN, TR, AR, RU)", "В основном только английский"],
      ["Цена", "Основные инструменты 100% бесплатно, без дневного лимита", "Лимит 1–2 файла в день"],
    ],
  },
};

/** «Niyə Nibras Code?» müqayisə cədvəli — AI/axtarış sistemlərinin sitat gətirə biləcəyi real <table>. */
export function WhyTable({ lang }: { lang: Lang }) {
  const c = T[lang] ?? T.en;
  return (
    <section className="why-table" aria-labelledby="why-nibras-table">
      <h2 id="why-nibras-table">{c.h}</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              {c.cols.map((col) => (
                <th key={col} scope="col" style={{ textAlign: "start", padding: "8px 10px", borderBottom: "1px solid rgb(255 255 255 / 0.18)" }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map(([k, us, them]) => (
              <tr key={k}>
                <th scope="row" style={{ textAlign: "start", padding: "8px 10px", borderBottom: "1px solid rgb(255 255 255 / 0.08)" }}>{k}</th>
                <td style={{ padding: "8px 10px", borderBottom: "1px solid rgb(255 255 255 / 0.08)" }}>{us}</td>
                <td style={{ padding: "8px 10px", borderBottom: "1px solid rgb(255 255 255 / 0.08)", opacity: 0.75 }}>{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
