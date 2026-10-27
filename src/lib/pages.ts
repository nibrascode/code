import { translations, type Lang, type TKey } from "@/lib/i18n";
import type { StudioPrivacyRow } from "@/lib/studio";

export type AboutCopy = {
  eyebrow: string;
  title: string;
  intro: string[];
  approachTitle: string;
  approach: string[];
  success: string;
  verse: string;
  verseTr: string;
};

export type UnutmaCopy = {
  eyebrow: string;
  title: string;
  verse: string;
  notes: string[];
};

function lines(text: string) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function defaultAbout(lang: Lang): AboutCopy {
  const text = translations[lang];
  return {
    eyebrow: text.who_btn,
    title: text.who_h,
    intro: [text.who_p1, text.who_p2, text.who_p3, text.who_p4, text.who_p5],
    approachTitle: text.who_approach,
    approach: [text.who_a1, text.who_a2, text.who_a3, text.who_a4],
    success: text.who_success,
    verse: text.who_verse,
    verseTr: text.who_verse_tr,
  };
}

const FOUNDER: Record<Lang, { title: string; body: string[] }> = {
  az: {
    title: "Nibras Code-un sahibi və qurucusu",
    body: [
      "Nibras Code-un arxasında texnologiyanı yalnız kod yazmaq vasitəsi deyil, insanlara fayda vermək üçün bir imkan kimi görən müstəqil bir proqram təminatı həvəskarı dayanır.",
      "Özünü ön plana çıxarmaqdansa, hazırladığı layihələr və təqdim etdiyi faydalı həllərlə tanınmağa üstünlük verir. Onun yanaşması sadədir: gündəlik ehtiyacları anlamaq, lazımsız mürəkkəbliyi aradan qaldırmaq və texnologiyanı hər kəs üçün daha əlçatan etmək.",
      "Nibras Code fərdi təşəbbüs əsasında inkişaf etdirilir. Layihənin əsas istiqaməti PDF alətləri, sənəd idarəetməsi, QR kod xidmətləri və gündəlik istifadə üçün nəzərdə tutulan digər faydalı tətbiqlərin hazırlanmasıdır.",
      "Bu layihənin arxasındakı düşüncə yalnız proqram təminatı hazırlamaqla məhdudlaşmır. Məqsəd insanların vaxtına qənaət edən, istifadəsi rahat və mümkün qədər münasib qiymətlərlə əlçatan olan rəqəmsal həllər təqdim etməkdir.",
      "Onun üçün əsas məsələ adının tanınması deyil, gördüyü işin insanlara fayda verməsidir.",
    ],
  },
  en: {
    title: "Owner and founder of Nibras Code",
    body: [
      "Behind Nibras Code is an independent software enthusiast who sees technology not only as a way to write code, but as a way to help people.",
      "Rather than putting himself forward, he prefers to be known by the projects he builds and the useful solutions he offers. His approach is simple: understand everyday needs, remove needless complexity, and make technology more reachable for everyone.",
      "Nibras Code is developed as a personal effort. Its main direction is PDF tools, document handling, QR code services, and other useful apps meant for daily use.",
      "The idea behind this project is not limited to making software. The aim is to offer digital tools that save people’s time, are comfortable to use, and stay as affordable as possible.",
      "For him, the main point is not that his name be known, but that the work helps people.",
    ],
  },
  tr: {
    title: "Nibras Code’un sahibi ve kurucusu",
    body: [
      "Nibras Code’un arkasında, teknolojiyi yalnızca kod yazma aracı değil, insanlara fayda vermek için bir imkân olarak gören bağımsız bir yazılım meraklısı vardır.",
      "Kendini öne çıkarmaktansa, hazırladığı projeler ve sunduğu faydalı çözümlerle tanınmayı tercih eder. Yaklaşımı basittir: günlük ihtiyaçları anlamak, gereksiz karmaşıklığı kaldırmak ve teknolojiyi herkes için daha erişilebilir yapmak.",
      "Nibras Code bireysel bir girişim olarak geliştirilir. Projenin ana yönü PDF araçları, belge yönetimi, QR kod hizmetleri ve günlük kullanım için diğer faydalı uygulamalardır.",
      "Bu projenin arkasındaki düşünce yalnızca yazılım yapmakla sınırlı değildir. Amaç, insanların zamanından tasarruf eden, kullanımı rahat ve mümkün olduğunca uygun fiyatlı dijital çözümler sunmaktır.",
      "Onun için asıl mesele adının tanınması değil, yaptığı işin insanlara fayda vermesidir.",
    ],
  },
  ar: {
    title: "صاحب Nibras Code ومؤسسه",
    body: [
      "خلف Nibras Code هاوٍ مستقل للبرمجيات يرى التقنية ليست مجرد وسيلة لكتابة الكود، بل فرصة لنفع الناس.",
      "وهو يفضّل أن يُعرف بمشاريعه والحلول المفيدة التي يقدّمها، لا بتقديم نفسه. منهجه بسيط: فهم الحاجات اليومية، وإزالة التعقيد غير اللازم، وجعل التقنية أقرب إلى الجميع.",
      "يُطوَّر Nibras Code بمبادرة فردية. اتجاهه الأساسي أدوات PDF وإدارة المستندات وخدمات رموز QR وتطبيقات مفيدة أخرى للاستعمال اليومي.",
      "الفكرة وراء هذا المشروع لا تقتصر على صنع البرمجيات. الهدف تقديم حلول رقمية توفّر وقت الناس، ويسهل استعمالها، وتبقى في متناول اليد بقدر الإمكان.",
      "المهم عنده ليس أن يُعرف اسمه، بل أن ينفع عمله الناس.",
    ],
  },
  ru: {
    title: "Владелец и основатель Nibras Code",
    body: [
      "За Nibras Code стоит независимый энтузиаст программного обеспечения, который видит технологию не только как способ писать код, а как возможность приносить пользу людям.",
      "Он предпочитает, чтобы его узнавали по проектам и полезным решениям, а не по тому, что он выставляет себя вперёд. Подход простой: понять повседневные нужды, убрать лишнюю сложность и сделать технологию доступнее для каждого.",
      "Nibras Code развивается как личная инициатива. Основное направление — инструменты PDF, работа с документами, сервисы QR-кодов и другие полезные приложения для каждого дня.",
      "Мысль за этим проектом не сводится только к созданию программ. Цель — давать цифровые решения, которые берегут время людей, удобны в использовании и остаются по возможности доступными по цене.",
      "Для него главное не то, чтобы знали его имя, а то, чтобы работа приносила людям пользу.",
    ],
  },
};

export function founderCopy(lang: Lang) {
  return FOUNDER[lang];
}

export function defaultUnutma(lang: Lang): UnutmaCopy {
  const text = translations[lang];
  const notes = Array.from({ length: 12 }, (_, index) => text[`remind_${index + 1}` as TKey]);
  return {
    eyebrow: text.remind_btn,
    title: text.remind_h,
    verse: text.remind_verse,
    notes,
  };
}

export function aboutFromRow(row: StudioPrivacyRow | undefined, lang: Lang): AboutCopy {
  if (!row) return defaultAbout(lang);
  try {
    const data = JSON.parse(row.body) as Partial<AboutCopy>;
    const base = defaultAbout(lang);
    return {
      ...base,
      ...data,
      title: data.title || row.title || base.title,
      intro: Array.isArray(data.intro) ? data.intro.map((item) => item.trim()).filter(Boolean) : base.intro,
      approach: Array.isArray(data.approach)
        ? data.approach.map((item) => item.trim()).filter(Boolean)
        : base.approach,
    };
  } catch {
    return defaultAbout(lang);
  }
}

export function unutmaFromRow(row: StudioPrivacyRow | undefined, lang: Lang): UnutmaCopy {
  if (!row) return defaultUnutma(lang);
  try {
    const data = JSON.parse(row.body) as Partial<UnutmaCopy>;
    const base = defaultUnutma(lang);
    return {
      ...base,
      ...data,
      title: data.title || row.title || base.title,
      notes: Array.isArray(data.notes) ? data.notes.map((item) => item.trim()).filter(Boolean) : base.notes,
    };
  } catch {
    return defaultUnutma(lang);
  }
}

export function aboutBody(copy: AboutCopy) {
  return JSON.stringify(copy);
}

export function unutmaBody(copy: UnutmaCopy) {
  return JSON.stringify({ ...copy, notes: copy.notes.map((item) => item.trim()).filter(Boolean) });
}

export { lines };
