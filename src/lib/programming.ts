import type { Lang } from "@/lib/i18n";
import { apkSections } from "@/lib/apk-guide";
import { csharpSections } from "@/lib/csharp-sections";
import { javaSections } from "@/lib/java-sections";
import { javascriptSections } from "@/lib/javascript-sections";
import { htmlCssSections } from "@/lib/html-css-sections";
import { sqlSections } from "@/lib/sql-sections";
import { typescriptSections } from "@/lib/typescript-sections";
import { ALL_STACK } from "@/lib/stack-all";
import { withStackWorking } from "@/lib/stack-working";

type Seo = { title: string; description: string; keywords: string };

export type ProgrammingBlock = {
  heading?: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  ordered?: boolean;
  code?: string;
  after?: readonly string[];
};

export type ProgrammingSection = {
  id: string;
  title: string;
  blocks?: readonly ProgrammingBlock[];
};

export type ProgrammingPage = {
  slug: string;
  title: string;
  sections?: readonly ProgrammingSection[];
  seo: Record<Lang, Seo>;
};

function seo(az: Seo, en: Seo, tr: Seo, ar: Seo, ru: Seo): Record<Lang, Seo> {
  return { az, en, tr, ar, ru };
}

export const PROGRAMMING: readonly ProgrammingPage[] = [
  {
    slug: "python",
    title: "Python nədir? İstifadə sahələri və üstünlükləri",
    sections: [
      {
        id: "nedir",
        title: "📌 Python nədir?",
        blocks: [
          {
            paragraphs: [
              "Python sadə və oxunaqlı sintaksisə malik, geniş istifadə olunan proqramlaşdırma dilidir. Həm proqramlaşdırmaya yeni başlayanlar, həm də peşəkar proqramçılar Python-dan müxtəlif layihələrdə istifadə edirlər.",
              "Python-un əsas üstünlüklərindən biri kodunun nisbətən asan oxunmasıdır. Buna görə proqramlaşdırmanı öyrənməyə başlayan insanlar üçün də uyğun seçimlərdən biridir.",
              "Python müxtəlif sahələrdə istifadə olunur. Bunlara web proqramlaşdırma, süni intellekt, Machine Learning, məlumat analizi, avtomatlaşdırma və elmi hesablamalar daxildir.",
              "Python çoxsaylı kitabxana və framework-lərə malikdir. Bu isə müxtəlif layihələr üçün hazır alətlərdən istifadə etməyə imkan verir.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python çoxməqsədli proqramlaşdırma dilidir və sadə sintaksisi, geniş istifadə sahəsi və böyük kitabxana ekosistemi ilə tanınır.",
            ],
          },
        ],
      },
      {
        id: "istifade",
        title: "💻 Python nə üçün istifadə olunur?",
        blocks: [
          {
            paragraphs: [
              "Python müxtəlif proqramlaşdırma və texnologiya sahələrində istifadə olunur. Dilin geniş kitabxana ekosistemi müxtəlif layihələrin hazırlanmasını asanlaşdırır.",
            ],
          },
          {
            heading: "Web proqramlaşdırma",
            paragraphs: [
              "Python ilə web saytların və web tətbiqlərinin server tərəfi hazırlana bilər. Django və Flask kimi framework-lər bu məqsədlə istifadə olunur.",
            ],
          },
          {
            heading: "Süni intellekt",
            paragraphs: [
              "Python süni intellekt və Machine Learning layihələrində geniş istifadə edilir. Məlumatların emalı və modellərin hazırlanması üçün çoxsaylı kitabxanalar mövcuddur.",
            ],
          },
          {
            heading: "Məlumat analizi",
            paragraphs: [
              "Python böyük həcmdə məlumatların işlənməsi, analiz edilməsi və vizuallaşdırılmasında istifadə olunur.",
            ],
          },
          {
            heading: "Avtomatlaşdırma",
            paragraphs: [
              "Təkrarlanan işləri avtomatlaşdırmaq üçün Python skriptlərindən istifadə etmək mümkündür. Faylların idarə edilməsi və məlumatların emalı buna nümunədir.",
            ],
          },
          {
            heading: "Təhsil",
            paragraphs: [
              "Python sadə sintaksisinə görə proqramlaşdırmanın əsaslarını öyrənmək üçün də geniş istifadə olunur.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python əsasən web proqramlaşdırma, süni intellekt, məlumat analizi, avtomatlaşdırma və təhsil kimi sahələrdə istifadə edilir.",
            ],
          },
        ],
      },
      {
        id: "ne-etmek",
        title: "🎯 Python ilə nə etmək olar?",
        blocks: [
          {
            paragraphs: [
              "Python ilə sadə proqramlardan tutmuş mürəkkəb proqram təminatı layihələrinə qədər müxtəlif işlər görmək mümkündür.",
              "Python istifadə edərək:",
            ],
            list: [
              "Web tətbiqləri hazırlamaq",
              "Avtomatlaşdırma skriptləri yazmaq",
              "Məlumatları analiz etmək",
              "Süni intellekt layihələri hazırlamaq",
              "Faylları avtomatik idarə etmək",
              "API-lərlə işləmək",
              "Hesablamalar aparmaq",
              "Sadə oyun və proqramlar hazırlamaq",
              "Elmi və texniki layihələr üzərində işləmək mümkündür.",
            ],
          },
          {
            paragraphs: [
              "Python-un imkanları böyük ölçüdə istifadə olunan kitabxanalardan və framework-lərdən asılıdır.",
            ],
          },
          {
            heading: "Sadə nümunə",
            code: 'ad = "Nibras Code"\nprint("Salam,", ad)',
            after: ["Bu kod dəyişəndə saxlanılan məlumatı ekrana çıxarır."],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python yalnız bir sahə üçün deyil. Müxtəlif proqramlaşdırma, məlumat və avtomatlaşdırma layihələrində istifadə edilə bilən çoxməqsədli dildir.",
            ],
          },
        ],
      },
      {
        id: "oyrenmek",
        title: "📚 Python öyrənmək çətindirmi?",
        blocks: [
          {
            paragraphs: [
              "Python proqramlaşdırmaya yeni başlayan insanların tez-tez seçdiyi dillərdən biridir. Bunun əsas səbəblərindən biri sintaksisinin oxunaqlı və nisbətən sadə olmasıdır.",
              "Lakin Python-un sadə başlanğıca malik olması onun tamamilə asan olduğu demək deyil. Daha mürəkkəb proqramlar hazırlamaq üçün dəyişənlər, şərtlər, dövrlər, funksiyalar, obyekt yönümlü proqramlaşdırma və digər anlayışları öyrənmək lazımdır.",
            ],
          },
          {
            heading: "Python öyrənməyə necə başlamaq olar?",
            paragraphs: ["Başlanğıc üçün aşağıdakı ardıcıllıq faydalı ola bilər:"],
            list: [
              "Python-un əsas sintaksisini öyrənmək",
              "Dəyişənlər və məlumat tipləri ilə işləmək",
              "\"if\", \"for\" və \"while\" kimi strukturları öyrənmək",
              "Funksiyalar hazırlamaq",
              "Siyahılar və lüğətlər kimi məlumat strukturlarını öyrənmək",
              "Kiçik layihələr hazırlamaq",
              "Daha sonra seçilən sahəyə uyğun kitabxanaları öyrənmək",
            ],
            ordered: true,
          },
          {
            paragraphs: [
              "Ən yaxşı nəticə yalnız nəzəri məlumat oxumaqla deyil, kod yazaraq və praktika edərək əldə edilir.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python başlanğıc üçün münasib dillərdən biri ola bilər. Ancaq yaxşı proqramçı olmaq üçün davamlı öyrənmək və praktika etmək lazımdır.",
            ],
          },
        ],
      },
      {
        id: "ustunluk",
        title: "⚖️ Python-un üstünlükləri və çatışmazlıqları",
        blocks: [
          {
            paragraphs: [
              "Hər proqramlaşdırma dilində olduğu kimi Python-un da üstün və məhdud tərəfləri var. Dil seçərkən layihənin məqsədini nəzərə almaq vacibdir.",
            ],
          },
          {
            heading: "Python-un üstünlükləri",
            list: [
              "Sadə sintaksis: Kodun oxunması və yazılması nisbətən rahatdır.",
              "Geniş istifadə sahəsi: Web proqramlaşdırmadan süni intellektə qədər müxtəlif sahələrdə istifadə olunur.",
              "Böyük kitabxana ekosistemi: Müxtəlif məqsədlər üçün çoxsaylı kitabxanalar mövcuddur.",
              "Geniş icma: Python haqqında çoxlu tədris materialları və nümunələr tapmaq mümkündür.",
              "Platformalararası istifadə: Python müxtəlif əməliyyat sistemlərində işlədilə bilər.",
            ],
          },
          {
            heading: "Python-un çatışmazlıqları",
            paragraphs: [
              "Python bütün layihələr üçün ən uyğun seçim olmaya bilər. Bəzi yüksək performans tələb edən və resurs məhdudiyyətlərinin vacib olduğu layihələrdə başqa proqramlaşdırma dillərinə üstünlük verilə bilər.",
              "Bundan əlavə, Python proqramlarının bəzi hallarda kompilyasiya edilmiş dillərlə müqayisədə daha aşağı icra sürəti ola bilər.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python-un üstünlükləri və məhdudiyyətləri layihənin məqsədindən asılı olaraq fərqli əhəmiyyət daşıyır.",
            ],
          },
        ],
      },
      {
        id: "sintaksis",
        title: "🔤 Python sintaksisi və əsas anlayışlar",
        blocks: [
          {
            paragraphs: [
              "Python-un sintaksisi kodun oxunaqlı olmasına xüsusi diqqət yetirir. Proqramlaşdırmaya başlayan zaman bir neçə əsas anlayışı öyrənmək kifayətdir.",
            ],
          },
          {
            heading: "Dəyişənlər",
            paragraphs: ["Dəyişən məlumatı yadda saxlamaq üçün istifadə olunur:"],
            code: 'ad = "Mahir"\nyas = 25',
          },
          {
            heading: "Şərt",
            paragraphs: ["Müəyyən şərtə əsasən fərqli kodların işlədilməsi üçün \"if\" istifadə olunur:"],
            code: 'yas = 20\n\nif yas >= 18:\n    print("Yetkin")',
          },
          {
            heading: "Dövr",
            paragraphs: ["Eyni əməliyyatı bir neçə dəfə yerinə yetirmək üçün dövrlərdən istifadə edilir:"],
            code: "for i in range(5):\n    print(i)",
          },
          {
            heading: "Funksiya",
            paragraphs: ["Təkrar istifadə edilə bilən kod hissələri funksiyalar vasitəsilə yaradılır:"],
            code: 'def salamla(ad):\n    print("Salam,", ad)\n\nsalamla("Nibras Code")',
          },
          {
            paragraphs: [
              "Python-da dəyişənlər, məlumat tipləri, şərtlər, dövrlər, funksiyalar və məlumat strukturları əsas öyrənilməli mövzulardandır.",
            ],
          },
        ],
      },
      {
        id: "numuneler",
        title: "🧩 Sadə Python kod nümunələri",
        blocks: [
          {
            paragraphs: [
              "Python öyrənərkən kiçik kod nümunələri ilə praktika etmək əsas anlayışları daha yaxşı başa düşməyə kömək edə bilər.",
            ],
          },
          {
            heading: "Ekrana mətn çıxarmaq",
            code: 'print("Salam, dünya!")',
          },
          {
            heading: "İki ədədi toplamaq",
            code: "a = 10\nb = 5\n\nnetice = a + b\nprint(netice)",
          },
          {
            heading: "Şərtdən istifadə",
            code: 'bal = 85\n\nif bal >= 50:\n    print("Keçdiniz")\nelse:\n    print("Keçmədiniz")',
          },
          {
            heading: "Dövr nümunəsi",
            code: "for i in range(1, 6):\n    print(i)",
          },
          {
            heading: "Sadə funksiya",
            code: "def topla(a, b):\n    return a + b\n\nprint(topla(10, 20))",
          },
          {
            paragraphs: [
              "Bu nümunələr Python sintaksisinin əsaslarını anlamaq üçün başlanğıc səviyyəsində istifadə edilə bilər.",
              "Daha mürəkkəb layihələr hazırlamaq üçün məlumat strukturları, fayllarla işləmə, modullar və kitabxanalar kimi mövzuları da öyrənmək lazımdır.",
            ],
          },
        ],
      },
      {
        id: "islek",
        title: "🧪 İşlək nümunələr",
        blocks: [
          {
            paragraphs: [
              "Yuxarıdakı sətirlər bir şeyi göstərir. Buradakı nümunələr isə kiçik bir işi başdan sona aparır. Hər birini olduğu kimi terminalda işə salmaq olar. Əvvəl nəticəyə bax, sonra rəqəmi və adı dəyişib yenidən işə sal.",
            ],
          },
          {
            heading: "Siyahıdan adları çıxarmaq",
            paragraphs: [
              "Bir neçə ad bir yerdə durur. Bu yerə siyahı deyilir. for hər adı növbə ilə götürür və ekrana yazır. Siyahıya ad əlavə etsən, dövr onu da yazacaq. Əl ilə hər ad üçün ayrı print yazmaq lazım deyil.",
            ],
            code: 'adlar = ["Aysel", "Murad", "Nigar"]\nfor ad in adlar:\n    print("Salam,", ad)',
            after: ["Çıxış üç sətirdir: Salam, Aysel və sonra Murad, sonra Nigar."],
          },
          {
            heading: "Bir tələbəni yadda saxlamaq",
            paragraphs: [
              "Lüğət bir şeyin bir neçə xüsusiyyətini saxlayır. Burada ad və bal bir yerdədir. Açarı yazırsan, qiyməti gəlir. Bal 50 və ya çoxdursa, keçdi yazılır. 50-dən az olanda bu şərt işləmir və heç nə çıxmır. Bunu görmək üçün balı 40 et.",
            ],
            code: 'telebe = {"ad": "Aysel", "bal": 85}\nprint(telebe["ad"])\nif telebe["bal"] >= 50:\n    print("Keçdi")',
            after: ["Əvvəl Aysel çıxır, sonra Keçdi. Açarı səhv yazsan, Python həmin adı tapmır."],
          },
          {
            heading: "Orta balı hesablamaq",
            paragraphs: [
              "Ballar siyahıdadır. cem sıfırdan başlayır və hər balın üstünə gəlir. Sonda cəmi sayına bölürük. len siyahıda neçə ədəd olduğunu deyir. 70, 80 və 90-ın ortası 80-dir. Siyahıya dördüncü bal əlavə etsən, bölən də özü dəyişir.",
            ],
            code: "ballar = [70, 80, 90]\ncem = 0\nfor bal in ballar:\n    cem = cem + bal\norta = cem / len(ballar)\nprint(orta)",
            after: ["Ekranda 80.0 görünür. Tam ədəd istəsən, bölmədən əvvəl cəmi yuvarlaqlaşdırmaq lazımdır. Bu nümunədə yuvarlaq yoxdur."],
          },
          {
            heading: "Keçib-keçməməyi funksiyaya vermək",
            paragraphs: [
              "Eyni yoxlamanı iki yerdə yazmaq əvəzinə bir funksiya yazılır. O, balı alır və söz qaytarır. return sözü funksiyadan çıxarır. Aşağıdakı print funksiyanı çağırır və gələn sözü göstərir. Qaydanı dəyişmək lazım olanda yalnız funksiyanın içini dəyişirsən.",
            ],
            code: 'def kecdi(bal):\n    if bal >= 50:\n        return "Keçdi"\n    return "Qaldı"\n\nprint(kecdi(40))\nprint(kecdi(75))',
            after: ["Əvvəl Qaldı, sonra Keçdi çıxır. 50-nin özü keçdi sayılır, çünki şərt böyük və ya bərabərdir."],
          },
        ],
      },
      {
        id: "suallar",
        title: "❓ Tez-tez verilən suallar",
        blocks: [
          {
            heading: "Python nədir?",
            paragraphs: [
              "Python müxtəlif proqram təminatlarının hazırlanmasında istifadə olunan, geniş imkanlara malik proqramlaşdırma dilidir.",
            ],
          },
          {
            heading: "Python nə üçün istifadə olunur?",
            paragraphs: [
              "Python web proqramlaşdırma, süni intellekt, məlumat analizi, avtomatlaşdırma, elmi hesablamalar və digər sahələrdə istifadə olunur.",
            ],
          },
          {
            heading: "Python öyrənmək çətindirmi?",
            paragraphs: [
              "Python-un sintaksisi nisbətən sadə və oxunaqlıdır. Buna görə yeni başlayanlar üçün uyğun proqramlaşdırma dillərindən biri hesab olunur. Yaxşı səviyyəyə çatmaq üçün isə davamlı praktika lazımdır.",
            ],
          },
          {
            heading: "Python pulsuzdur?",
            paragraphs: ["Bəli. Python açıq mənbəli və pulsuz istifadə edilə bilən proqramlaşdırma dilidir."],
          },
          {
            heading: "Python ilə web sayt hazırlamaq olar?",
            paragraphs: [
              "Bəli. Python ilə web tətbiqlərinin server tərəfini hazırlamaq mümkündür. Django və Flask kimi framework-lər bunun üçün istifadə olunur.",
            ],
          },
          {
            heading: "Python ilə süni intellekt hazırlamaq olar?",
            paragraphs: ["Bəli. Python süni intellekt və Machine Learning layihələrində geniş istifadə olunur."],
          },
          {
            heading: "Python ilə mobil tətbiq hazırlamaq olar?",
            paragraphs: [
              "Bəli, Python ilə mobil tətbiqlər hazırlamaq üçün müxtəlif vasitələr mövcuddur. Lakin Android və iOS üçün əsas mobil inkişafda başqa dillər və texnologiyalar da geniş istifadə edilir.",
            ],
          },
          {
            heading: "Python və JavaScript eynidirmi?",
            paragraphs: [
              "Xeyr. Python və JavaScript fərqli proqramlaşdırma dilləridir və müxtəlif sintaksisə və xüsusiyyətlərə malikdir.",
            ],
          },
          {
            heading: "Python yeni başlayanlar üçün uyğundurmu?",
            paragraphs: [
              "Bəli. Sadə və oxunaqlı sintaksisi Python-u proqramlaşdırmaya başlamaq üçün məşhur seçimlərdən birinə çevirir.",
            ],
          },
        ],
      },
      {
        id: "javascript",
        title: "Python və JavaScript arasındakı fərq",
        blocks: [
          {
            paragraphs: [
              "Python və JavaScript hər ikisi geniş istifadə olunan proqramlaşdırma dilləridir, lakin əsas istifadə sahələri fərqlidir. Python daha çox süni intellekt, məlumat analizi, avtomatlaşdırma və backend proqramlaşdırmada istifadə olunur. JavaScript isə əsasən veb səhifələrin interaktivliyini təmin etmək və frontend proqramlaşdırma üçün istifadə edilir. JavaScript backend üçün də Node.js vasitəsilə istifadə oluna bilər.",
            ],
          },
        ],
      },
      {
        id: "java",
        title: "Python və Java arasındakı fərq",
        blocks: [
          {
            paragraphs: [
              "Python və Java müxtəlif məqsədlər üçün istifadə olunan məşhur proqramlaşdırma dilləridir. Python sadə və oxunaqlı sintaksisə malikdir və süni intellekt, məlumat analizi, avtomatlaşdırma və backend proqramlaşdırmada geniş istifadə olunur. Java isə böyük proqram sistemləri, backend xidmətləri, müəssisə proqramları və müxtəlif platformalarda işləyən tətbiqlərin hazırlanmasında geniş istifadə edilir.",
            ],
          },
        ],
      },
    ],
    seo: seo(
      {
        title: "Python nədir? İstifadə sahələri və üstünlükləri — Nibras Code",
        description: "Python proqramlaşdırma dili harada işlədilir, nə üçün seçilir və hansı işlərə uyğundur.",
        keywords: "Python nədir, Python istifadə sahələri, Python və JavaScript fərqi, Python və Java fərqi",
      },
      {
        title: "What is Python? Uses and advantages — Nibras Code",
        description: "What the Python programming language is used for, and why people choose it.",
        keywords: "what is Python, Python vs JavaScript, Python vs Java, Python programming language",
      },
      {
        title: "Python nedir? Kullanım alanları ve avantajları — Nibras Code",
        description: "Python programlama dili nerede kullanılır ve neden tercih edilir.",
        keywords: "Python nedir, Python JavaScript farkı, Python Java farkı, Python programlama",
      },
      {
        title: "ما هي بايثون؟ استخداماتها ومزاياها — Nibras Code",
        description: "ما هي لغة Python وأين تُستخدم ولماذا يختارها الناس.",
        keywords: "ما هي بايثون, الفرق بين Python وJavaScript, الفرق بين Python وJava",
      },
      {
        title: "Что такое Python? Области применения и преимущества — Nibras Code",
        description: "Где используют язык Python, почему его выбирают и для каких задач он подходит.",
        keywords: "что такое Python, разница Python и JavaScript, разница Python и Java",
      },
    ),
  },
  {
    slug: "javascript",
    title: "JavaScript nədir? Nə üçün istifadə olunur?",
    sections: javascriptSections("az"),
    seo: seo(
      {
        title: "JavaScript nədir? Nə üçün istifadə olunur? — Nibras Code",
        description: "JavaScript nə üçündür: səhifə, brauzer və proqram tərəfi.",
        keywords: "JavaScript nədir, JavaScript nə üçün lazımdır, JavaScript proqramlaşdırma",
      },
      {
        title: "What is JavaScript and what is it used for? — Nibras Code",
        description: "What JavaScript is for, in the browser and beyond the page.",
        keywords: "what is JavaScript, JavaScript uses, JavaScript programming",
      },
      {
        title: "JavaScript nedir? Ne için kullanılır? — Nibras Code",
        description: "JavaScript ne işe yarar: sayfa, tarayıcı ve uygulamanın diğer yüzü.",
        keywords: "JavaScript nedir, JavaScript ne için kullanılır, JavaScript programlama",
      },
      {
        title: "ما هي جافاسكريبت ولماذا تُستخدم؟ — Nibras Code",
        description: "ما دور JavaScript في الصفحة والمتصفح وخارجها.",
        keywords: "ما هي جافاسكريبت, استخدامات JavaScript, برمجة JavaScript",
      },
      {
        title: "Что такое JavaScript и зачем он нужен? — Nibras Code",
        description: "Зачем нужен JavaScript: страница, браузер и логика приложения.",
        keywords: "что такое JavaScript, зачем нужен JavaScript, программирование JavaScript",
      },
    ),
  },
  {
    slug: "java",
    title: "Java nədir?",
    sections: javaSections("az"),
    seo: seo(
      {
        title: "Java nədir? Android və proqramlaşdırmada istifadəsi — Nibras Code",
        description: "Java dünyada geniş istifadə olunan, obyekt yönümlü və platformadan asılı olmayan proqramlaşdırma dilidir.",
        keywords: "Java nədir, Java Android, Java proqramlaşdırma",
      },
      {
        title: "What is Java? Its use in Android and programming — Nibras Code",
        description: "What Java is, and where it sits in Android apps and other software.",
        keywords: "what is Java, Java for Android, Java programming language",
      },
      {
        title: "Java nedir? Android ve programlamada kullanımı — Nibras Code",
        description: "Java dili ve Android uygulamaları ile diğer yazılımlardaki yeri.",
        keywords: "Java nedir, Java Android, Java programlama",
      },
      {
        title: "ما هي جافا؟ استخدامها في أندرويد والبرمجة — Nibras Code",
        description: "ما هي Java وأين تُستخدم في تطبيقات أندرويد والبرامج الأخرى.",
        keywords: "ما هي جافا, Java لأندرويد, لغة Java",
      },
      {
        title: "Что такое Java? Применение в Android и программировании — Nibras Code",
        description: "Что такое Java и где её используют в приложениях Android и других программах.",
        keywords: "что такое Java, Java для Android, язык Java",
      },
    ),
  },
  {
    slug: "csharp",
    title: "C# proqramlaşdırma dili",
    sections: csharpSections("az"),
    seo: seo(
      {
        title: "C# nədir? İstifadə sahələri və xüsusiyyətləri — Nibras Code",
        description: "C# dili: harada işlədilir və əsas xüsusiyyətləri nədir.",
        keywords: "C# nədir, C# istifadə sahələri, C# proqramlaşdırma",
      },
      {
        title: "What is C#? Uses and characteristics — Nibras Code",
        description: "Where the C# language is used and what defines it.",
        keywords: "what is C#, C# uses, C# programming language",
      },
      {
        title: "C# nedir? Kullanım alanları ve özellikleri — Nibras Code",
        description: "C# dili nerede kullanılır ve temel özellikleri nelerdir.",
        keywords: "C# nedir, C# kullanım alanları, C# programlama",
      },
      {
        title: "ما هي C#؟ استخداماتها وخصائصها — Nibras Code",
        description: "أين تُستخدم لغة C#، وما الذي يميزها في تطبيقات سطح المكتب والويب.",
        keywords: "ما هي C#, استخدامات C#, برمجة C#",
      },
      {
        title: "Что такое C#? Области применения и особенности — Nibras Code",
        description: "Где используют язык C# и чем он отличается в настольных и веб-приложениях.",
        keywords: "что такое C#, применение C#, язык C#",
      },
    ),
  },
  {
    slug: "typescript",
    title: "TypeScript nədir? JavaScript-dən fərqi",
    sections: typescriptSections("az"),
    seo: seo(
      {
        title: "TypeScript nədir? JavaScript-dən fərqi — Nibras Code",
        description: "TypeScript nədir və JavaScript-dən hansı fərqi var.",
        keywords: "TypeScript nədir, TypeScript və JavaScript, TypeScript fərqi",
      },
      {
        title: "What is TypeScript? How it differs from JavaScript — Nibras Code",
        description: "What TypeScript adds, and how it differs from JavaScript.",
        keywords: "what is TypeScript, TypeScript vs JavaScript, TypeScript difference",
      },
      {
        title: "TypeScript nedir? JavaScript'ten farkı — Nibras Code",
        description: "TypeScript nedir ve JavaScript'ten farkı nedir.",
        keywords: "TypeScript nedir, TypeScript JavaScript farkı, TypeScript programlama",
      },
      {
        title: "ما هو TypeScript؟ اختلافه عن JavaScript — Nibras Code",
        description: "ما هو TypeScript وبماذا يختلف عن JavaScript.",
        keywords: "ما هو TypeScript, الفرق بين TypeScript وJavaScript",
      },
      {
        title: "Что такое TypeScript? Отличие от JavaScript — Nibras Code",
        description: "Что такое TypeScript и чем он отличается от JavaScript.",
        keywords: "что такое TypeScript, TypeScript и JavaScript, отличие TypeScript",
      },
    ),
  },
  {
    slug: "html-css",
    title: "HTML və CSS nədir?",
    sections: htmlCssSections("az"),
    seo: seo(
      {
        title: "HTML və CSS nədir? — Nibras Code",
        description: "HTML səhifənin quruluşunu, CSS isə onun görünüşünü və düzülüşünü verir.",
        keywords: "HTML nədir, CSS nədir, HTML və CSS",
      },
      {
        title: "What are HTML and CSS? — Nibras Code",
        description: "HTML and CSS: the structure of a page and how it looks.",
        keywords: "what is HTML, what is CSS, HTML and CSS",
      },
      {
        title: "HTML ve CSS nedir? — Nibras Code",
        description: "HTML ve CSS: sayfanın yapısı ve görünümü.",
        keywords: "HTML nedir, CSS nedir, HTML ve CSS",
      },
      {
        title: "ما هما HTML وCSS؟ — Nibras Code",
        description: "HTML وCSS: بنية الصفحة ومظهرها.",
        keywords: "ما هو HTML, ما هو CSS, HTML وCSS",
      },
      {
        title: "Что такое HTML и CSS? — Nibras Code",
        description: "HTML и CSS: структура страницы и её вид.",
        keywords: "что такое HTML, что такое CSS, HTML и CSS",
      },
    ),
  },
  {
    slug: "sql",
    title: "SQL nədir?",
    sections: sqlSections("az"),
    seo: seo(
      {
        title: "SQL nədir? — Nibras Code",
        description: "SQL verilənlər bazasından məlumat sorğulamaq və onu dəyişmək üçün dildir.",
        keywords: "SQL nədir, SQL sorğu, SQL verilənlər bazası",
      },
      {
        title: "What is SQL? — Nibras Code",
        description: "SQL is the language used to query and work with data.",
        keywords: "what is SQL, SQL query, SQL database",
      },
      {
        title: "SQL nedir? — Nibras Code",
        description: "SQL, verilerle sorgu ve işlem dilidir.",
        keywords: "SQL nedir, SQL sorgu, SQL veritabanı",
      },
      {
        title: "ما هو SQL؟ — Nibras Code",
        description: "SQL لغة للاستعلام عن البيانات والتعامل معها.",
        keywords: "ما هو SQL, استعلام SQL, قاعدة بيانات SQL",
      },
      {
        title: "Что такое SQL? — Nibras Code",
        description: "SQL — язык запросов и работы с данными.",
        keywords: "что такое SQL, запрос SQL, база данных SQL",
      },
    ),
  },
  {
    slug: "apk-hazirla",
    title: "APK hazırla: öz tətbiqini telefona qoy",
    sections: apkSections("az"),
    seo: seo(
      {
        title: "APK hazırla: öz tətbiqini telefona qoy — Nibras Code",
        description: "APK nədir, necə düzəldilir, hansı qovluq lazımdır və hazır zip necə Nibras Studio-ya verilir.",
        keywords: "APK hazırlamaq, APK nədir, APK necə düzəldilir, Android APK",
      },
      {
        title: "Build an APK: put your own app on the phone — Nibras Code",
        description: "What an APK is, how it is built, which folders you need, and how a ready zip goes to Nibras Studio.",
        keywords: "how to make an APK, what is an APK, build an Android APK",
      },
      {
        title: "APK hazırla: kendi uygulamanı telefona koy — Nibras Code",
        description: "APK nedir, nasıl yapılır, hangi klasör gerekir ve hazır zip Nibras Studio'ya nasıl verilir.",
        keywords: "APK yapmak, APK nedir, APK nasıl yapılır, Android APK",
      },
      {
        title: "اصنع APK: ضع تطبيقك على الهاتف — Nibras Code",
        description: "ما هو APK وكيف يُصنع وأي مجلد يلزم وكيف يُعطى zip الجاهز إلى Nibras Studio.",
        keywords: "صنع APK, ما هو APK, كيف أصنع APK, Android APK",
      },
      {
        title: "Собери APK: поставь своё приложение на телефон — Nibras Code",
        description: "Что такое APK, как его собирают, какие папки нужны и как готовый zip отдают в Nibras Studio.",
        keywords: "как сделать APK, что такое APK, собрать Android APK",
      },
    ),
  },
  ...ALL_STACK.map((item) => ({
    slug: item.slug,
    title: item.title.az,
    sections: withStackWorking(item.slug, "az", item.sections.az),
    seo: seo(
      { title: `${item.title.az} — Nibras Code`, description: item.description.az, keywords: item.keywords.az },
      { title: `${item.title.en} — Nibras Code`, description: item.description.en, keywords: item.keywords.en },
      { title: `${item.title.tr} — Nibras Code`, description: item.description.tr, keywords: item.keywords.tr },
      { title: `${item.title.ar} — Nibras Code`, description: item.description.ar, keywords: item.keywords.ar },
      { title: `${item.title.ru} — Nibras Code`, description: item.description.ru, keywords: item.keywords.ru },
    ),
  })),
];

export function findProgramming(slug: string) {
  return PROGRAMMING.find((page) => page.slug === slug) ?? null;
}
