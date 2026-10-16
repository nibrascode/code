import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { PageAssistant } from "@/components/page-assistant";
import { EraseTool } from "@/erase/erase-tool";

const TITLE = {
  az: "Nibras Erase",
  en: "Nibras Erase",
  tr: "Nibras Erase",
  ar: "Nibras Erase",
  ru: "Nibras Erase",
} as const;

const LEAD = {
  az: "Fon sil, öz şəklini fon qoy, dairə profil düzəlt, əl ilə düzəlt. PNG, JPG və ya WebP. Pulsuz, brauzerdə.",
  en: "Remove the background, add a color or blur, a shadow, then download PNG, JPG or WebP. Free, in your browser.",
  tr: "Arka planı sil, renk veya bulanık fon koy, gölge ekle, PNG, JPG veya WebP indir. Ücretsiz, tarayıcıda.",
  ar: "أزل الخلفية، أضف لوناً أو ضباباً وظلاً، ثم نزّل PNG أو JPG أو WebP. مجاناً في المتصفح.",
  ru: "Уберите фон, поставьте цвет или размытие, тень, скачайте PNG, JPG или WebP. Бесплатно, в браузере.",
} as const;

const INFO = {
  az: {
    key: "Məxfilik və məlumat",
    close: "Bağla",
    privacy: "Məxfilik siyasəti",
    about: "Tətbiq məlumatı",
    privacyBody: [
      "Bu siyasət Nibras Erase tətbiqinə aiddir. Versiya V 1.0.0. Hazırlayan Nibras Code. Əlaqə: nibrascode@gmail.com. Ünvan: https://nibrascode.com/erase/privacy",
      "Şəkil Nibras Code serverinə yüklənmir. Fonun silinməsi cihazınızda gedir. İlk dəfə dəqiq model faylı cihaza endirilə bilər. O yükləmə model üçündür, şəkliniz həmin sorğuya qoyulmur.",
      "Ad, e-poçt, telefon, hesab, əlaqələr, dəqiq yer, reklam kimliyi və ödəniş məlumatı toplanmır. Hesab, reklam izləyicisi və analitik SDK yoxdur. Məlumat satılmır.",
      "İcazə yalnız fayl seçimi üçündür: şəkli açmaq və nəticəni saxlamaq. Kamera, mikrofon, əlaqə və yer istənmir.",
      "Tətbiq 13 yaşdan kiçik uşaqlara yönəlmir. Uşaqlardan bilərəkdən şəxsi məlumat toplanmır.",
      "Siyasət dəyişəndə https://nibrascode.com/erase/privacy yenilənir. Sual: nibrascode@gmail.com. Yenilənmə: 14 oktyabr 2026.",
    ],
    aboutBody: [
      "Ad: Nibras Erase. Versiya: V 1.0.0. Nibras Code.",
      "Nə edir: fonu silir, rəng və ya bulanıq fon qoyur, kölgə və dairə profil düzəldir, kənarı fırça ilə düzəldir. Nəticə PNG, JPG və ya WebP olur.",
      "Necə işlədilir: şəkli seçin, keyfiyyəti seçin, fonu silin, lazımdırsa əl ilə kənarı düzəldin, formatı seçin və yükləyin.",
      "Şəkil cihazdan çıxmır. Model ilk dəfə endiriləndən sonra növbəti şəkillər internetsiz də işlənə bilər.",
      "Bu tətbiq şəkil sıxmır. Sıxmaq və çevirmək Nibras Image tətbiqindədir. Hesab, ödəniş və reklam yoxdur. Pulsuzdur.",
      "Dəstək: nibrascode@gmail.com. Məxfilik: https://nibrascode.com/erase/privacy",
    ],
  },
  en: {
    key: "Privacy and about",
    close: "Close",
    privacy: "Privacy policy",
    about: "About this app",
    privacyBody: [
      "This policy covers Nibras Erase, version V 1.0.0, by Nibras Code. Contact: nibrascode@gmail.com. Address: https://nibrascode.com/en/erase/privacy",
      "The photo is not uploaded to a Nibras Code server. Background removal runs on your device. The first time, a model file may download. That download is the model, not your photo.",
      "We do not collect your name, email, phone, account, contacts, precise location, advertising ID, or payment data. There is no account, no ad tracker and no analytics SDK. Data is not sold.",
      "The only permission is a file picker, to open a photo and save the result. Camera, microphone, contacts and location are not requested.",
      "The app is not directed at children under 13. We do not knowingly collect personal information from children.",
      "If this policy changes, https://nibrascode.com/en/erase/privacy is updated. Questions: nibrascode@gmail.com. Updated: 14 October 2026.",
    ],
    aboutBody: [
      "Name: Nibras Erase. Version: V 1.0.0. Nibras Code.",
      "What it does: removes the background, places a color or a blur, a shadow and a circle crop, and lets you fix the edge with a brush. The result is PNG, JPG or WebP.",
      "How to use it: pick a photo, pick the quality, remove the background, fix the edge if you need to, choose the format and download.",
      "The photo stays on the device. After the model has downloaded once, later photos can be processed without the network.",
      "This app does not compress photos. Compressing and converting is Nibras Image. There is no account, no payment and no advertising. It is free.",
      "Support: nibrascode@gmail.com. Privacy: https://nibrascode.com/en/erase/privacy",
    ],
  },
  tr: {
    key: "Gizlilik ve bilgi",
    close: "Kapat",
    privacy: "Gizlilik politikası",
    about: "Uygulama bilgisi",
    privacyBody: [
      "Bu politika Nibras Erase içindir. Sürüm V 1.0.0. Nibras Code. İletişim: nibrascode@gmail.com. Adres: https://nibrascode.com/tr/erase/privacy",
      "Fotoğraf Nibras Code sunucusuna yüklenmez. Arka plan silme cihazda olur. İlk seferde model dosyası inebilir. O indirme modeldir, fotoğrafınız değildir.",
      "Ad, e-posta, telefon, hesap, kişiler, konum, reklam kimliği ve ödeme toplanmaz. Hesap ve reklam izleyici yok. Veri satılmaz.",
      "İzin yalnız dosya seçicisidir. Kamera, mikrofon, kişiler ve konum istenmez.",
      "Uygulama 13 yaş altına yönelik değildir.",
      "Değişiklik olursa https://nibrascode.com/tr/erase/privacy yenilenir. Soru: nibrascode@gmail.com. Güncelleme: 14 Ekim 2026.",
    ],
    aboutBody: [
      "Ad: Nibras Erase. Sürüm: V 1.0.0. Nibras Code.",
      "Arka planı siler, renk veya bulanık fon, gölge ve daire profil koyar, kenarı fırçayla düzeltir. Sonuç PNG, JPG veya WebP.",
      "Fotoğraf seçin, kaliteyi seçin, arka planı silin, gerekirse kenarı düzeltin, biçimi seçip indirin.",
      "Fotoğraf cihazdan çıkmaz. Model bir kez indikten sonra sonraki fotoğraflar internetsiz de işlenebilir.",
      "Bu uygulama fotoğraf sıkıştırmaz. Sıkıştırma Nibras Image içindedir. Hesap, ödeme ve reklam yok.",
      "Destek: nibrascode@gmail.com. Gizlilik: https://nibrascode.com/tr/erase/privacy",
    ],
  },
  ar: {
    key: "الخصوصية والمعلومات",
    close: "إغلاق",
    privacy: "سياسة الخصوصية",
    about: "معلومات التطبيق",
    privacyBody: [
      "هذه السياسة لـ Nibras Erase، الإصدار V 1.0.0، من Nibras Code. التواصل: nibrascode@gmail.com. العنوان: https://nibrascode.com/ar/erase/privacy",
      "الصورة لا تُرفع إلى خادم Nibras Code. إزالة الخلفية تتم على الجهاز. في المرة الأولى قد يُنزَّل ملف نموذج. هذا التنزيل للنموذج وليس لصورتك.",
      "لا نجمع الاسم أو البريد أو الهاتف أو الحساب أو جهات الاتصال أو الموقع أو معرّف الإعلان أو الدفع. لا حساب ولا تتبّع إعلانات. البيانات لا تُباع.",
      "الإذن الوحيد اختيار ملف. لا نطلب الكاميرا ولا الميكروفون ولا جهات الاتصال ولا الموقع.",
      "التطبيق غير موجّه لمن هم دون 13 عاماً.",
      "عند التغيير يُحدَّث https://nibrascode.com/ar/erase/privacy. السؤال: nibrascode@gmail.com. التحديث: 14 أكتوبر 2026.",
    ],
    aboutBody: [
      "الاسم: Nibras Erase. الإصدار: V 1.0.0. Nibras Code.",
      "يزيل الخلفية، ويضع لوناً أو ضباباً وظلاً وقصاً دائرياً، ويتيح إصلاح الحافة بالفرشاة. النتيجة PNG أو JPG أو WebP.",
      "اختر صورة، اختر الجودة، أزل الخلفية، أصلح الحافة إن لزم، اختر الصيغة ثم نزّل.",
      "الصورة تبقى على الجهاز. بعد تنزيل النموذج مرة يمكن معالجة الصور التالية بلا شبكة.",
      "هذا التطبيق لا يضغط الصور. الضغط في Nibras Image. لا حساب ولا دفع ولا إعلان.",
      "الدعم: nibrascode@gmail.com. الخصوصية: https://nibrascode.com/ar/erase/privacy",
    ],
  },
  ru: {
    key: "Конфиденциальность и сведения",
    close: "Закрыть",
    privacy: "Политика конфиденциальности",
    about: "О приложении",
    privacyBody: [
      "Эта политика относится к Nibras Erase, версия V 1.0.0, от Nibras Code. Связь: nibrascode@gmail.com. Адрес: https://nibrascode.com/ru/erase/privacy",
      "Фото не загружается на сервер Nibras Code. Удаление фона идёт на устройстве. В первый раз может скачаться файл модели. Это модель, не ваше фото.",
      "Имя, почта, телефон, аккаунт, контакты, местоположение, рекламный идентификатор и оплата не собираются. Нет аккаунта и рекламного трекера. Данные не продаются.",
      "Разрешение одно: выбор файла. Камера, микрофон, контакты и местоположение не запрашиваются.",
      "Приложение не предназначено для детей младше 13 лет.",
      "При изменении обновляется https://nibrascode.com/ru/erase/privacy. Вопрос: nibrascode@gmail.com. Обновление: 14 октября 2026.",
    ],
    aboutBody: [
      "Имя: Nibras Erase. Версия: V 1.0.0. Nibras Code.",
      "Убирает фон, ставит цвет или размытие, тень и круглую обрезку, даёт поправить край кистью. Результат — PNG, JPG или WebP.",
      "Выберите фото, качество, уберите фон, при необходимости поправьте край, выберите формат и скачайте.",
      "Фото остаётся на устройстве. После одной загрузки модели следующие фото можно обработать без сети.",
      "Это приложение не сжимает фото. Сжатие — в Nibras Image. Нет аккаунта, оплаты и рекламы.",
      "Поддержка: nibrascode@gmail.com. Политика: https://nibrascode.com/ru/erase/privacy",
    ],
  },
} as const;

export function ErasePage() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const copy = INFO[lang] ?? INFO.az;
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-4">
          <img src="/apps/nibras-erase.png" alt="" width={64} height={64} className="size-14 shrink-0 rounded-2xl" />
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{TITLE[lang]}</h1>
            <p className="mt-1 text-sm text-muted">{LEAD[lang]}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-xs font-bold tracking-wide text-amber-200/90">V 1.0.0</span>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-white/20 bg-white/5 text-white"
            aria-label={copy.key}
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="8" cy="15" r="3.2" />
              <path d="M10.8 13.4 20 5.2M16.2 7.4l2.1 2.1M13.8 9.8l2.1 2.1" />
            </svg>
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-end bg-black/70 p-3 sm:place-items-center" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="erase-privacy"
            className="max-h-[86dvh] w-full max-w-xl overflow-auto rounded-2xl border border-amber-200/30 bg-[#0c1220] p-5 text-sm leading-relaxed text-[#e8eeff]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-amber-200">V 1.0.0</span>
              <button type="button" className="text-2xl leading-none" aria-label={copy.close} onClick={() => setOpen(false)}>
                &times;
              </button>
            </div>
            <h2 id="erase-privacy" className="mb-2 text-lg font-bold">{copy.privacy}</h2>
            {copy.privacyBody.map((paragraph) => <p key={paragraph} className="mb-2 text-[#d5def0]">{paragraph}</p>)}
            <h2 className="mb-2 mt-4 text-lg font-bold">{copy.about}</h2>
            {copy.aboutBody.map((paragraph) => <p key={paragraph} className="mb-2 text-[#d5def0]">{paragraph}</p>)}
          </div>
        </div>
      ) : null}
      <EraseTool />
      <PageAssistant topic="erase" />
    </main>
  );
}
