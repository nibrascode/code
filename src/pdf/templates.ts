import type { Lang } from "@/lib/i18n";

export type DocTemplate = { id: string; label: Record<Lang, string>; title: Record<Lang, string>; body: Record<Lang, string> };

export const TEMPLATE_LABEL: Record<Lang, string> = {
  az: "Hazır şablonlar", en: "Ready templates", tr: "Hazır şablonlar", ar: "قوالب جاهزة", ru: "Готовые шаблоны",
};

export const DOC_TEMPLATES: DocTemplate[] = [
  {
    id: "ariza",
    label: { az: "Ərizə nümunəsi", en: "Application letter", tr: "Dilekçe örneği", ar: "نموذج طلب", ru: "Образец заявления" },
    title: { az: "ƏRİZƏ", en: "APPLICATION", tr: "DİLEKÇE", ar: "طلب", ru: "ЗАЯВЛЕНИЕ" },
    body: {
      az: "[Təşkilatın adı]\n[Rəhbərin vəzifəsi, adı və soyadı]\n\n[Ünvan] ünvanında yaşayan\n[Adınız, soyadınız, ata adınız]\ntərəfindən\n\nƏRİZƏ\n\nXahiş edirəm, [ərizənin məqsədi: məs. məni 01.11.2026 tarixindən ... vəzifəsinə işə qəbul edəsiniz / mənə ... günlük məzuniyyət verəsiniz].\n\nƏlavə: [sənədlərin siyahısı]\n\nTarix: [gün.ay.il]\nİmza: ____________\n[Adınız, soyadınız]\nTelefon: [nömrə]",
      en: "[Organisation name]\n[Recipient's title and full name]\n\nFrom: [Your full name]\nAddress: [Address]\n\nAPPLICATION\n\nI kindly request [purpose: e.g. to be hired as ... from 1 November 2026 / to be granted ... days of leave].\n\nAttachments: [list of documents]\n\nDate: [dd.mm.yyyy]\nSignature: ____________\n[Your full name]\nPhone: [number]",
      tr: "[Kurumun adı]\n[Yetkilinin unvanı, adı ve soyadı]\n\n[Adres] adresinde ikamet eden\n[Adınız ve soyadınız]\n\nDİLEKÇE\n\n[Dilekçenin konusu: ör. 01.11.2026 tarihinden itibaren ... günlük izin verilmesi] hususunda gereğini saygılarımla arz ederim.\n\nEkler: [belge listesi]\n\nTarih: [gün.ay.yıl]\nİmza: ____________\n[Adınız ve soyadınız]\nTelefon: [numara]",
      ar: "[اسم الجهة]\n[صفة المسؤول واسمه الكامل]\n\nمقدّم من: [اسمك الكامل]\nالعنوان: [العنوان]\n\nطلب\n\nأرجو التكرم بـ [الغرض: مثلاً تعييني في وظيفة ... اعتباراً من 01.11.2026 / منحي إجازة لمدة ... أيام].\n\nالمرفقات: [قائمة الوثائق]\n\nالتاريخ: [يوم.شهر.سنة]\nالتوقيع: ____________\n[اسمك الكامل]\nالهاتف: [الرقم]",
      ru: "[Название организации]\n[Должность и ФИО руководителя]\n\nот [ваше ФИО],\nпроживающего по адресу: [адрес]\n\nЗАЯВЛЕНИЕ\n\nПрошу [цель: напр. принять меня на должность ... с 01.11.2026 / предоставить отпуск на ... дней].\n\nПриложение: [список документов]\n\nДата: [дд.мм.гггг]\nПодпись: ____________\n[ФИО]\nТелефон: [номер]",
    },
  },
  {
    id: "cv",
    label: { az: "Sadə CV", en: "Simple CV", tr: "Basit CV", ar: "سيرة ذاتية بسيطة", ru: "Простое резюме" },
    title: { az: "[Adınız Soyadınız] — CV", en: "[Your Name] — CV", tr: "[Adınız Soyadınız] — CV", ar: "[اسمك] — السيرة الذاتية", ru: "[Имя Фамилия] — резюме" },
    body: {
      az: "Telefon: [nömrə] · E-poçt: [ünvan] · Şəhər: [Bakı]\n\nHAQQIMDA\n[2–3 cümlə: kim olduğunuz, nəyi yaxşı bacardığınız, hansı işi axtardığınız.]\n\nİŞ TƏCRÜBƏSİ\n[Vəzifə] — [Şirkət], [2023 – indi]\n• [Əsas nailiyyət, rəqəmlə]\n• [Gündəlik vəzifə]\n\nTƏHSİL\n[İxtisas] — [Universitet], [2019 – 2023]\n\nBACARIQLAR\n[Excel, Word, satış, müştəri xidməti, ...]\n\nDİLLƏR\nAzərbaycan (ana dili), Rus ([səviyyə]), İngilis ([səviyyə])\n\nSERTİFİKATLAR\n[Ad — il]",
      en: "Phone: [number] · Email: [address] · City: [city]\n\nSUMMARY\n[2–3 sentences: who you are, what you do well, what role you want.]\n\nEXPERIENCE\n[Job title] — [Company], [2023 – present]\n• [Key achievement with a number]\n• [Daily responsibility]\n\nEDUCATION\n[Degree] — [University], [2019 – 2023]\n\nSKILLS\n[Excel, Word, sales, customer service, ...]\n\nLANGUAGES\n[English (native), ...]\n\nCERTIFICATES\n[Name — year]",
      tr: "Telefon: [numara] · E-posta: [adres] · Şehir: [şehir]\n\nHAKKIMDA\n[2–3 cümle: kim olduğunuz, neyi iyi yaptığınız, hangi işi aradığınız.]\n\nİŞ DENEYİMİ\n[Pozisyon] — [Şirket], [2023 – halen]\n• [Sayıyla önemli başarı]\n• [Günlük görev]\n\nEĞİTİM\n[Bölüm] — [Üniversite], [2019 – 2023]\n\nBECERİLER\n[Excel, Word, satış, müşteri hizmetleri, ...]\n\nDİLLER\nTürkçe (ana dil), İngilizce ([seviye])\n\nSERTİFİKALAR\n[Ad — yıl]",
      ar: "الهاتف: [الرقم] · البريد: [العنوان] · المدينة: [المدينة]\n\nنبذة\n[جملتان أو ثلاث: من أنت، ما تتقنه، وأي عمل تبحث عنه.]\n\nالخبرة\n[المسمى الوظيفي] — [الشركة]، [2023 – الآن]\n• [إنجاز رئيسي برقم]\n• [مهمة يومية]\n\nالتعليم\n[التخصص] — [الجامعة]، [2019 – 2023]\n\nالمهارات\n[Excel، Word، المبيعات، خدمة العملاء، ...]\n\nاللغات\nالعربية (الأم)، الإنجليزية ([المستوى])\n\nالشهادات\n[الاسم — السنة]",
      ru: "Телефон: [номер] · Email: [адрес] · Город: [город]\n\nО СЕБЕ\n[2–3 предложения: кто вы, что умеете, какую работу ищете.]\n\nОПЫТ РАБОТЫ\n[Должность] — [Компания], [2023 – н.в.]\n• [Ключевое достижение с цифрой]\n• [Обязанность]\n\nОБРАЗОВАНИЕ\n[Специальность] — [Вуз], [2019 – 2023]\n\nНАВЫКИ\n[Excel, Word, продажи, работа с клиентами, ...]\n\nЯЗЫКИ\nРусский (родной), английский ([уровень])\n\nСЕРТИФИКАТЫ\n[Название — год]",
    },
  },
  {
    id: "izahname",
    label: { az: "İzahnamə", en: "Explanatory note", tr: "Açıklama yazısı", ar: "مذكرة توضيحية", ru: "Объяснительная" },
    title: { az: "İZAHNAMƏ", en: "EXPLANATORY NOTE", tr: "AÇIKLAMA YAZISI", ar: "مذكرة توضيحية", ru: "ОБЪЯСНИТЕЛЬНАЯ ЗАПИСКА" },
    body: {
      az: "[Təşkilatın adı]\n[Rəhbərin vəzifəsi, adı və soyadı]\n\n[Şöbə, vəzifə]\n[Adınız, soyadınız]\ntərəfindən\n\nİZAHNAMƏ\n\n[Tarix] tarixində [nə baş verdi: məs. işə 40 dəqiqə gecikmişəm]. Bunun səbəbi [səbəb: məs. ictimai nəqliyyatda yaranan nasazlıq] olmuşdur.\n\nBaş verənə görə üzr istəyirəm və gələcəkdə təkrarlanmaması üçün [görüləcək tədbir] edəcəyimi bildirirəm.\n\nTarix: [gün.ay.il]\nİmza: ____________",
      en: "[Organisation name]\n[Manager's title and full name]\n\nFrom: [Your full name], [department, position]\n\nEXPLANATORY NOTE\n\nOn [date] [what happened: e.g. I arrived 40 minutes late]. The reason was [reason: e.g. a public transport breakdown].\n\nI apologise and will [measure] so it does not happen again.\n\nDate: [dd.mm.yyyy]\nSignature: ____________",
      tr: "[Kurumun adı]\n[Yöneticinin unvanı, adı ve soyadı]\n\n[Birim, pozisyon]\n[Adınız ve soyadınız]\n\nAÇIKLAMA YAZISI\n\n[Tarih] tarihinde [ne oldu: ör. işe 40 dakika geç kaldım]. Bunun sebebi [sebep] olmuştur.\n\nYaşanan durumdan dolayı özür diler, tekrarlanmaması için [önlem] alacağımı bildiririm.\n\nTarih: [gün.ay.yıl]\nİmza: ____________",
      ar: "[اسم الجهة]\n[صفة المدير واسمه الكامل]\n\nمقدّم من: [اسمك الكامل]، [القسم، الوظيفة]\n\nمذكرة توضيحية\n\nبتاريخ [التاريخ] [ما حدث: مثلاً تأخرت 40 دقيقة عن العمل]. وكان السبب [السبب].\n\nأعتذر عمّا حدث وسأقوم بـ [الإجراء] حتى لا يتكرر.\n\nالتاريخ: [يوم.شهر.سنة]\nالتوقيع: ____________",
      ru: "[Название организации]\n[Должность и ФИО руководителя]\n\nот [ФИО], [отдел, должность]\n\nОБЪЯСНИТЕЛЬНАЯ ЗАПИСКА\n\n[Дата] [что произошло: напр. я опоздал на работу на 40 минут]. Причина: [причина].\n\nПриношу извинения и обязуюсь [мера], чтобы это не повторилось.\n\nДата: [дд.мм.гггг]\nПодпись: ____________",
    },
  },
  {
    id: "qiymet-teklifi",
    label: { az: "Qiymət təklifi", en: "Price quote", tr: "Fiyat teklifi", ar: "عرض سعر", ru: "Коммерческое предложение" },
    title: { az: "QİYMƏT TƏKLİFİ № [001]", en: "PRICE QUOTE No. [001]", tr: "FİYAT TEKLİFİ No. [001]", ar: "عرض سعر رقم [001]", ru: "КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ № [001]" },
    body: {
      az: "Kimdən: [Şirkətin adı], VÖEN [nömrə], [telefon, e-poçt]\nKimə: [Müştərinin adı]\nTarix: [gün.ay.il] · Etibarlıdır: [30 gün]\n\nMəhsul / xidmət — miqdar — vahid qiymət — cəm\n1. [Ad] — [1] — [100 AZN] — [100 AZN]\n2. [Ad] — [2] — [50 AZN] — [100 AZN]\n\nCəmi: [200 AZN]\nƏDV (18%): [36 AZN]\nYekun: [236 AZN]\n\nÇatdırılma müddəti: [5 iş günü]\nÖdəniş şərtləri: [50% avans, 50% təhvildən sonra]\n\nHörmətlə,\n[Adınız, vəzifəniz]\nİmza: ____________",
      en: "From: [Company name], Tax ID [number], [phone, email]\nTo: [Client name]\nDate: [dd.mm.yyyy] · Valid for: [30 days]\n\nItem / service — qty — unit price — total\n1. [Name] — [1] — [100] — [100]\n2. [Name] — [2] — [50] — [100]\n\nSubtotal: [200]\nVAT ([rate]%): [amount]\nTotal: [amount]\n\nDelivery time: [5 business days]\nPayment terms: [50% upfront, 50% on delivery]\n\nKind regards,\n[Your name, title]\nSignature: ____________",
      tr: "Kimden: [Şirket adı], Vergi No [numara], [telefon, e-posta]\nKime: [Müşteri adı]\nTarih: [gün.ay.yıl] · Geçerlilik: [30 gün]\n\nÜrün / hizmet — adet — birim fiyat — toplam\n1. [Ad] — [1] — [100 TL] — [100 TL]\n2. [Ad] — [2] — [50 TL] — [100 TL]\n\nAra toplam: [200 TL]\nKDV (%20): [40 TL]\nGenel toplam: [240 TL]\n\nTeslim süresi: [5 iş günü]\nÖdeme koşulları: [%50 peşin, %50 teslimde]\n\nSaygılarımızla,\n[Adınız, unvanınız]\nİmza: ____________",
      ar: "من: [اسم الشركة]، الرقم الضريبي [الرقم]، [الهاتف، البريد]\nإلى: [اسم العميل]\nالتاريخ: [يوم.شهر.سنة] · صالح لمدة: [30 يوماً]\n\nالمنتج / الخدمة — الكمية — سعر الوحدة — المجموع\n1. [الاسم] — [1] — [100] — [100]\n2. [الاسم] — [2] — [50] — [100]\n\nالمجموع الفرعي: [200]\nالضريبة ([النسبة]%): [المبلغ]\nالإجمالي: [المبلغ]\n\nمدة التسليم: [5 أيام عمل]\nشروط الدفع: [50% مقدماً، 50% عند التسليم]\n\nمع التحية،\n[اسمك، صفتك]\nالتوقيع: ____________",
      ru: "От: [Компания], ИНН [номер], [телефон, email]\nКому: [Клиент]\nДата: [дд.мм.гггг] · Действительно: [30 дней]\n\nТовар / услуга — кол-во — цена — сумма\n1. [Название] — [1] — [100] — [100]\n2. [Название] — [2] — [50] — [100]\n\nИтого: [200]\nНДС ([ставка]%): [сумма]\nВсего к оплате: [сумма]\n\nСрок поставки: [5 рабочих дней]\nУсловия оплаты: [50% предоплата, 50% после поставки]\n\nС уважением,\n[ФИО, должность]\nПодпись: ____________",
    },
  },
];
