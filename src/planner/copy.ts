import type { Lang } from "@/lib/i18n";
import { PLANNER_MARKUP } from "./markup";

type Row = [string, string, string, string, string];

const ORDER: Lang[] = ["az", "en", "tr", "ar", "ru"];

function cell(row: Row, lang: Lang) {
  return row[ORDER.indexOf(lang)];
}

const CHROME: Row[] = [
  ["Evin ölçüsünü seç. Materialın sayı və qiyməti özü hesablanır.", "Enter the house size. Material counts and prices are calculated for you.", "Ev ölçüsünü seç. Malzeme adedi ve fiyatı kendiliğinden hesaplanır.", "اختر مقاس البيت. يُحسب عدد المواد وسعرها وحدهما.", "Введите размеры дома. Количество и цена материалов считаются сами."],
  ["Son layihəyə davam et", "Continue last project", "Son projeye devam et", "تابع آخر مشروع", "Продолжить последний проект"],
  ["Rəqəmi dəyişən kimi qiymət yenilənir", "The price updates as you change a number", "Rakam değişince fiyat yenilenir", "يتحدّث السعر كلما غيّرت رقماً", "Цена обновляется, как только меняется число"],
  ["Evin eni və otaq sayı", "Width and room count", "Evin eni ve oda sayısı", "عرض البيت وعدد الغرف", "Ширина дома и число комнат"],
  ["Material və məbləğ", "Materials and total", "Malzeme ve tutar", "المواد والمبلغ", "Материалы и сумма"],
  ["Barmağınla fırlat. Addım seçəndə ev o mərhələyə qədər tikilir.", "Drag to rotate. The house builds up to the step you pick.", "Parmağınla döndür. Adım seçilince ev o aşamaya kadar kurulur.", "أدر بإصبعك. عند اختيار الخطوة يُبنى البيت حتى تلك المرحلة.", "Крутите пальцем. Дом строится до выбранного шага."],
  ["Divara toxun — qapı və ya pəncərə qoy. Sonra tutub yerini dəyiş.", "Tap a wall to place a door or window. Then drag it.", "Duvara dokun — kapı veya pencere koy. Sonra tutup yerini değiştir.", "المس الجدار لوضع باب أو نافذة. ثم اسحب لتغيير المكان.", "Коснитесь стены — поставьте дверь или окно. Потом перетащите."],
  ["İşarəni götürsən, həmin sətir cəmdən çıxır. Qiyməti öz bazarına görə yaz.", "Uncheck a row to drop it from the total. Type the price for your market.", "İşareti kaldırırsan o satır toplamdan çıkar. Fiyatı kendi pazarına göre yaz.", "أزل العلامة ليخرج السطر من المجموع. اكتب السعر حسب سوقك.", "Снимите галочку — строка выйдет из суммы. Цену пишите по своему рынку."],
  ["Qapı və pəncərə divar materialından çıxılır. Layihə bu telefonda yadda qalır.", "Doors and windows are subtracted from the wall material. The project stays on this phone.", "Kapı ve pencere duvar malzemesinden düşülür. Proje bu telefonda kalır.", "يُخصم الباب والنافذة من مادة الجدار. يبقى المشروع على هذا الهاتف.", "Двери и окна вычитаются из материала стены. Проект остаётся на этом телефоне."],
  ["4. Material və qiymət", "4. Materials and price", "4. Malzeme ve fiyat", "4. المواد والسعر", "4. Материалы и цена"],
  ["Əsas giriş qapısı", "Main entrance", "Ana giriş kapısı", "باب المدخل الرئيسي", "Главная входная дверь"],
  ["510 mm — iki kərpic", "510 mm — two bricks", "510 mm — iki tuğla", "510 مم — طوبتان", "510 мм — два кирпича"],
  ["120 mm — nazik", "120 mm — thin", "120 mm — ince", "120 مم — رقيق", "120 мм — тонкая"],
  ["250 mm — adi", "250 mm — standard", "250 mm — normal", "250 مم — عادي", "250 мм — обычная"],
  ["380 mm — qalın", "380 mm — thick", "380 mm — kalın", "380 مم — سميك", "380 мм — толстая"],
  ["Divar qalınlığı", "Wall thickness", "Duvar kalınlığı", "سُمك الجدار", "Толщина стены"],
  ["1 ədədin qiyməti, AZN", "Price per piece, AZN", "1 adet fiyatı, AZN", "سعر القطعة، AZN", "Цена 1 штуки, AZN"],
  ["Ehtiyat, 1.1 = 10%", "Extra, 1.1 = 10%", "Pay, 1.1 = %10", "احتياط، 1.1 = 10%", "Запас, 1.1 = 10%"],
  ["Bu adıma qədər", "Up to this step", "Bu adıma kadar", "حتى هذه الخطوة", "До этого шага"],
  ["Kiçik ev · 8×5", "Small house · 8×5", "Küçük ev · 8×5", "بيت صغير · 8×5", "Маленький дом · 8×5"],
  ["Orta ev · 10×6", "Medium house · 10×6", "Orta ev · 10×6", "بيت متوسط · 10×6", "Средний дом · 10×6"],
  ["Böyük ev · 12×9", "Large house · 12×9", "Büyük ev · 12×9", "بيت كبير · 12×9", "Большой дом · 12×9"],
  ["Tikinti forması", "Building type", "Yapı biçimi", "شكل البناء", "Тип постройки"],
  ["Tikinti addımı", "Building step", "Yapı adımı", "خطوة البناء", "Шаг стройки"],
  ["Hündürlük, mm", "Height, mm", "Yükseklik, mm", "الارتفاع، مم", "Высота, мм"],
  ["Hündürlük, m", "Height, m", "Yükseklik, m", "الارتفاع، م", "Высота, м"],
  ["Uzunluq, mm", "Length, mm", "Uzunluk, mm", "الطول، مم", "Длина, мм"],
  ["Uzunluq, m", "Length, m", "Uzunluk, m", "الطول، م", "Длина, м"],
  ["Qapı və pəncərə", "Doors and windows", "Kapı ve pencere", "الباب والنافذة", "Дверь и окно"],
  ["Neçə otaq", "How many rooms", "Kaç oda", "كم غرفة", "Сколько комнат"],
  ["Hazır ölçü", "Standard size", "Hazır ölçü", "مقاس جاهز", "Готовый размер"],
  ["Tikiş, mm", "Joint, mm", "Derz, mm", "الفاصل، مم", "Шов, мм"],
  ["1 m²-ə litr", "Litres per m²", "1 m²'ye litre", "لتر لكل م²", "Литров на м²"],
  ["1 m²-ə kq", "kg per m²", "1 m²'ye kg", "كغ لكل م²", "кг на м²"],
  ["1 litr, AZN", "1 litre, AZN", "1 litre, AZN", "1 لتر، AZN", "1 литр, AZN"],
  ["1 kq, AZN", "1 kg, AZN", "1 kg, AZN", "1 كغ، AZN", "1 кг, AZN"],
  ["1 m², AZN", "1 m², AZN", "1 m², AZN", "1 م²، AZN", "1 м², AZN"],
  ["Ölçünü yaz", "Enter the size", "Ölçüyü yaz", "اكتب المقاس", "Введите размер"],
  ["Özüm yazım", "Custom", "Kendim yazayım", "أكتب بنفسي", "Свой размер"],
  ["məs. 300", "e.g. 300", "ör. 300", "مثلاً 300", "напр. 300"],
  ["← Geri", "← Back", "← Geri", "← رجوع", "← Назад"],
  ["1. Ölçü", "1. Size", "1. Ölçü", "1. المقاس", "1. Размер"],
  ["2. Model", "2. Model", "2. Model", "2. النموذج", "2. Модель"],
  ["2. Plan", "2. Plan", "2. Plan", "2. المخطط", "2. План"],
  ["3. Plan", "3. Plan", "3. Plan", "3. المخطط", "3. План"],
  ["3. Qiymət", "3. Price", "3. Fiyat", "3. السعر", "3. Цена"],
  ["5/5 · Dam", "5/5 · Roof", "5/5 · Çatı", "5/5 · السقف", "5/5 · Крыша"],
  ["Çap et", "Print", "Yazdır", "اطبع", "Печать"],
  ["Kopyala", "Copy", "Kopyala", "انسخ", "Копировать"],
  ["Başla", "Start", "Başla", "ابدأ", "Начать"],
  ["Smeta", "Estimate", "Keşif", "التقدير", "Смета"],
  ["Cəmi", "Total", "Toplam", "المجموع", "Итого"],
  ["Təməl", "Foundation", "Temel", "الأساس", "Фундамент"],
  ["Suvaq", "Plaster", "Sıva", "اللياسة", "Штукатурка"],
  ["Döşəmə", "Floor", "Döşeme", "الأرضية", "Пол"],
  ["Sement", "Cement", "Çimento", "إسمنت", "Цемент"],
  ["Pəncərə", "Window", "Pencere", "نافذة", "Окно"],
  ["Giriş", "Entrance", "Giriş", "مدخل", "Вход"],
  ["Divar", "Wall", "Duvar", "جدار", "Стена"],
  ["Qapı", "Door", "Kapı", "باب", "Дверь"],
  ["Otaq", "Rooms", "Odalar", "غرف", "Комнаты"],
  ["Boya", "Paint", "Boya", "دهان", "Краска"],
  ["Günəş", "Sun", "Güneş", "شمس", "Солнце"],
  ["Axşam", "Evening", "Akşam", "مساء", "Вечер"],
  ["Gecə", "Night", "Gece", "ليل", "Ночь"],
  ["Böyüt", "Zoom in", "Büyüt", "كبّر", "Ближе"],
  ["Kiçilt", "Zoom out", "Küçült", "صغّر", "Дальше"],
  ["Dam", "Roof", "Çatı", "سقف", "Крыша"],
  ["Gün", "Day", "Gün", "نهار", "День"],
  ["Qar", "Snow", "Kar", "ثلج", "Снег"],
  ["Qoy", "Place", "Koy", "ضع", "Поставить"],
  ["Sil", "Delete", "Sil", "احذف", "Удалить"],
  ["Bağla", "Close", "Kapat", "أغلق", "Закрыть"],
  ["Azərbaycan — Kərpic hörgü", "Azerbaijan — Brickwork", "Azerbaycan — Tuğla duvar", "أذربيجان — بناء طوب", "Азербайджан — Кирпичная кладка"],
  ["Hündürlük:", "Height:", "Yükseklik:", "الارتفاع:", "Высота:"],
  ["Uzunluq:", "Length:", "Uzunluk:", "الطول:", "Длина:"],
  ["En:", "Width:", "En:", "العرض:", "Ширина:"],
  ["En, m", "Width, m", "En, m", "العرض، م", "Ширина, м"],
];

const COUNTRY: Record<string, Row> = {
  Azərbaycan: ["Azərbaycan", "Azerbaijan", "Azerbaycan", "أذربيجان", "Азербайджан"],
  Türkiyə: ["Türkiyə", "Turkey", "Türkiye", "تركيا", "Турция"],
  Almaniya: ["Almaniya", "Germany", "Almanya", "ألمانيا", "Германия"],
  "Böyük Britaniya": ["Böyük Britaniya", "United Kingdom", "Birleşik Krallık", "بريطانيا", "Великобритания"],
  ABŞ: ["ABŞ", "United States", "ABD", "الولايات المتحدة", "США"],
  Avstraliya: ["Avstraliya", "Australia", "Avustralya", "أستراليا", "Австралия"],
  Hindistan: ["Hindistan", "India", "Hindistan", "الهند", "Индия"],
  Çin: ["Çin", "China", "Çin", "الصين", "Китай"],
  İran: ["İran", "Iran", "İran", "إيران", "Иран"],
  Misir: ["Misir", "Egypt", "Mısır", "مصر", "Египет"],
  Fransa: ["Fransa", "France", "Fransa", "فرنسا", "Франция"],
  "BƏƏ və Körfəz": ["BƏƏ və Körfəz", "UAE and the Gulf", "BAE ve Körfez", "الإمارات والخليج", "ОАЭ и Залив"],
};

const UNIT_TITLE: Record<string, Row> = {
  adi: ["Adi kərpic", "Common brick", "Normal tuğla", "طوب عادي", "Обычный кирпич"],
  birbucaq: ["Birbuçaqlı kərpic", "One-and-a-half brick", "Bir buçuk tuğla", "طوب بسمك ونصف", "Полуторный кирпич"],
  ikiqat: ["İkiqat kərpic", "Double brick", "Çift tuğla", "طوب مزدوج", "Двойной кирпич"],
  silikat: ["Silikat kərpic", "Sand-lime brick", "Silikat tuğla", "طوب سيليكات", "Силикатный кирпич"],
  bos: ["Deşikli kərpic", "Hollow brick", "Delikli tuğla", "طوب مفرّغ", "Пустотелый кирпич"],
  qazbeton: ["Qazbeton blok", "Aerated block", "Gazbeton blok", "بلوك خرسانة خلوية", "Газобетонный блок"],
  "tr-harman": ["Harman kərpici", "Handmade brick", "Harman tuğlası", "طوب يدوي", "Кирпич ручной формовки"],
  "tr-delik": ["Deşikli kərpic", "Perforated brick", "Delikli tuğla", "طوب مثقوب", "Дырчатый кирпич"],
  "tr-bims": ["Bims blok", "Pumice block", "Bims blok", "بلوك خفّان", "Пемзоблок"],
  "tr-gaz": ["Qazbeton", "Aerated concrete", "Gazbeton", "خرسانة خلوية", "Газобетон"],
  "de-nf": ["Normal kərpic", "Standard brick", "Normal tuğla", "طوب قياسي", "Стандартный кирпич"],
  "de-df": ["Nazik kərpic", "Thin brick", "İnce tuğla", "طوب رقيق", "Тонкий кирпич"],
  uk: ["Standart kərpic", "Standard brick", "Standart tuğla", "طوب قياسي", "Стандартный кирпич"],
  "us-brick": ["Modul kərpic", "Modular brick", "Modüler tuğla", "طوب معياري", "Модульный кирпич"],
  "us-cmu": ["Beton blok", "Concrete block", "Beton blok", "بلوك خرساني", "Бетонный блок"],
  au: ["Standart kərpic", "Standard brick", "Standart tuğla", "طوب قياسي", "Стандартный кирпич"],
  in: ["Modul kərpic", "Modular brick", "Modüler tuğla", "طوب معياري", "Модульный кирпич"],
  cn: ["Standart kərpic", "Standard brick", "Standart tuğla", "طوب قياسي", "Стандартный кирпич"],
  ir: ["Sıxılmış kərpic", "Pressed brick", "Sıkıştırılmış tuğla", "طوب مضغوط", "Прессованный кирпич"],
  eg: ["Qırmızı kərpic", "Red brick", "Kırmızı tuğla", "طوب أحمر", "Красный кирпич"],
  "fr-brique": ["Kərpic", "Brick", "Tuğla", "طوب", "Кирпич"],
  "fr-parpaing": ["Beton blok", "Concrete block", "Beton blok", "بلوك خرساني", "Бетонный блок"],
  gulf: ["Beton blok", "Concrete block", "Beton blok", "بلوك خرساني", "Бетонный блок"],
};

const FORM_TITLE: Record<string, Row> = {
  "az-brick": ["Kərpic hörgü", "Brickwork", "Tuğla duvar", "بناء طوب", "Кирпичная кладка"],
  "az-qaz": ["Qazbeton", "Aerated concrete", "Gazbeton", "خرسانة خلوية", "Газобетон"],
  "tr-karkas": ["Beton karkas", "Concrete frame", "Betonarme karkas", "هيكل خرساني", "Бетонный каркас"],
  "de-ziegel": ["Dik dam", "Steep roof", "Dik çatı", "سقف حاد", "Крутая крыша"],
  "uk-cavity": ["İkiqat divar", "Cavity wall", "Boşluklu duvar", "جدار مزدوج", "Двойная стена"],
  "us-wood": ["Taxta karkas", "Wood frame", "Ahşap karkas", "هيكل خشبي", "Деревянный каркас"],
  "au-veneer": ["Kərpic üzlük", "Brick veneer", "Tuğla kaplama", "كسوة طوب", "Кирпичная облицовка"],
  "fr-parpaing": ["Beton blok", "Concrete block", "Beton blok", "بلوك خرساني", "Бетонный блок"],
  "in-rcc": ["Beton karkas", "Concrete frame", "Betonarme", "هيكل خرساني", "Бетонный каркас"],
  "eg-flat": ["Düz dam", "Flat roof", "Düz çatı", "سقف مسطح", "Плоская крыша"],
  "gulf-block": ["Beton blok", "Concrete block", "Beton blok", "بلوك خرساني", "Бетонный блок"],
  "cn-brick": ["Kərpic-beton", "Brick and concrete", "Tuğla-beton", "طوب وخرسانة", "Кирпич и бетон"],
  "ir-brick": ["Kərpic hörgü", "Brickwork", "Tuğla duvar", "بناء طوب", "Кирпичная кладка"],
};

const FORM_NOTE: Record<string, Row> = {
  "az-brick": ["Daşıyıcı kərpic divar, kirəmit dam.", "Load-bearing brick wall, tile roof.", "Taşıyıcı tuğla duvar, kiremit çatı.", "جدار طوب حامل، سقف قرميد.", "Несущая кирпичная стена, черепичная крыша."],
  "az-qaz": ["Blok divar, kirəmit dam.", "Block wall, tile roof.", "Blok duvar, kiremit çatı.", "جدار بلوك، سقف قرميد.", "Стена из блоков, черепичная крыша."],
  "tr-karkas": ["Beton sütun, arası tuğla. Kirəmit dam.", "Concrete columns, brick infill. Tile roof.", "Beton kolon, arası tuğla. Kiremit çatı.", "أعمدة خرسانية وبينها طوب. سقف قرميد.", "Бетонные колонны, заполнение кирпичом. Черепичная крыша."],
  "de-ziegel": ["Kərpic hörgü, dik kirəmit dam.", "Brickwork, steep tile roof.", "Tuğla duvar, dik kiremit çatı.", "بناء طوب، سقف قرميد حاد.", "Кирпичная кладка, крутая черепичная крыша."],
  "uk-cavity": ["Çöldə kərpic, içəridə blok, arada boşluq.", "Brick outside, block inside, a gap between.", "Dışta tuğla, içte blok, arada boşluk.", "طوب من الخارج وبلوك من الداخل وبينهما فراغ.", "Снаружи кирпич, внутри блок, между ними зазор."],
  "us-wood": ["Dirəklər 40 sm aralı. Üstü şingl dam.", "Studs 40 cm apart. Shingle roof.", "Dikmeler 40 cm arayla. Şıngıl çatı.", "قوائم كل 40 سم. سقف ألواح.", "Стойки через 40 см. Гонтовая крыша."],
  "au-veneer": ["İçəridə taxta, çöldə bir sıra kərpic.", "Timber inside, one row of brick outside.", "İçte ahşap, dışta bir sıra tuğla.", "خشب من الداخل وصف طوب من الخارج.", "Внутри дерево, снаружи один ряд кирпича."],
  "fr-parpaing": ["Blok hörülür, üstü suvaq. Kirəmit dam.", "Blockwork, then plaster. Tile roof.", "Blok örülür, üstü sıva. Kiremit çatı.", "بلوك ثم لياسة. سقف قرميد.", "Кладка из блоков, затем штукатурка. Черепичная крыша."],
  "in-rcc": ["Beton sütun, arası kərpic. Düz dam.", "Concrete columns, brick infill. Flat roof.", "Beton kolon, arası tuğla. Düz çatı.", "أعمدة خرسانية وبينها طوب. سقف مسطح.", "Бетонные колонны, заполнение кирпичом. Плоская крыша."],
  "eg-flat": ["Qırmızı kərpic, beton düz dam.", "Red brick, flat concrete roof.", "Kırmızı tuğla, beton düz çatı.", "طوب أحمر وسقف خرساني مسطح.", "Красный кирпич, плоская бетонная крыша."],
  "gulf-block": ["Blok divar, düz dam, alçaq parapet.", "Block wall, flat roof, low parapet.", "Blok duvar, düz çatı, alçak parapet.", "جدار بلوك وسقف مسطح وحاجز منخفض.", "Стена из блоков, плоская крыша, низкий парапет."],
  "cn-brick": ["Kərpic və beton. Az mailli dam.", "Brick and concrete. Low-slope roof.", "Tuğla ve beton. Az eğimli çatı.", "طوب وخرسانة. سقف قليل الميل.", "Кирпич и бетон. Кровля с малым уклоном."],
  "ir-brick": ["Kərpic divar, az mailli dam.", "Brick wall, low-slope roof.", "Tuğla duvar, az eğimli çatı.", "جدار طوب وسقف قليل الميل.", "Кирпичная стена, кровля с малым уклоном."],
};

const STAGE: { name: Row; short: Row; blurb: Row }[] = [
  {
    name: ["1. Təməl", "1. Foundation", "1. Temel", "1. الأساس", "1. Фундамент"],
    short: ["Təməl", "Foundation", "Temel", "الأساس", "Фундамент"],
    blurb: ["Yalnız beton əsas görünür.", "Only the concrete base shows.", "Yalnız beton taban görünür.", "يظهر الأساس الخرساني فقط.", "Видно только бетонное основание."],
  },
  {
    name: ["2. Divar", "2. Wall", "2. Duvar", "2. الجدار", "2. Стена"],
    short: ["Divar", "Wall", "Duvar", "الجدار", "Стена"],
    blurb: ["Divarlar hörülür. Material xərci buradan başlayır.", "Walls go up. Material cost starts here.", "Duvarlar örülür. Malzeme gideri buradan başlar.", "تُبنى الجدران. تكلفة المادة تبدأ من هنا.", "Стены кладутся. Расход материала начинается здесь."],
  },
  {
    name: ["3. Otaq", "3. Rooms", "3. Odalar", "3. الغرف", "3. Комнаты"],
    short: ["Otaq", "Rooms", "Odalar", "الغرف", "Комнаты"],
    blurb: ["Dam yoxdur. Otaqlar yuxarıdan görünür.", "No roof. Rooms are visible from above.", "Çatı yok. Odalar yukarıdan görünür.", "لا سقف. الغرف تظهر من الأعلى.", "Крыши нет. Комнаты видны сверху."],
  },
  {
    name: ["4. Suvaq", "4. Plaster", "4. Sıva", "4. اللياسة", "4. Штукатурка"],
    short: ["Suvaq", "Plaster", "Sıva", "اللياسة", "Штукатурка"],
    blurb: ["Divar suvanır, döşəmə hazırlanır. Dam hələ açıqdır.", "Walls are plastered and the floor is prepared. The roof is still open.", "Duvar sıvanır, döşeme hazırlanır. Çatı hâlâ açık.", "يُليّس الجدار وتُجهّز الأرضية. السقف ما زال مفتوحاً.", "Стена штукатурится, пол готовится. Крыша ещё открыта."],
  },
  {
    name: ["5. Dam", "5. Roof", "5. Çatı", "5. السقف", "5. Крыша"],
    short: ["Dam", "Roof", "Çatı", "السقف", "Крыша"],
    blurb: ["Dam bağlanır. Aşağıdakı məbləğ tam smetadır.", "The roof closes. The amount below is the full estimate.", "Çatı kapanır. Aşağıdaki tutar tam keşiftir.", "يُغلق السقف. المبلغ أدناه هو التقدير الكامل.", "Крыша закрывается. Сумма ниже — полная смета."],
  },
];

const WALL: Record<string, Row> = {
  "ext-N": ["Arxa divar", "Back wall", "Arka duvar", "الجدار الخلفي", "Задняя стена"],
  "ext-S": ["Ön divar", "Front wall", "Ön duvar", "الجدار الأمامي", "Передняя стена"],
  "ext-E": ["Sağ divar", "Right wall", "Sağ duvar", "الجدار الأيمن", "Правая стена"],
  "ext-W": ["Sol divar", "Left wall", "Sol duvar", "الجدار الأيسر", "Левая стена"],
  room: ["Otaq bölməsi", "Room divider", "Oda bölmesi", "فاصل الغرفة", "Перегородка"],
};

function replacePhrase(html: string, from: string, to: string) {
  const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "gu"), () => to);
}

function langNav(lang: Lang) {
  const links = ORDER.map((code) => {
    const href = code === "az" ? "/planner" : `/${code}/planner`;
    const current = code === lang ? ' aria-current="page"' : "";
    const label = code === "ar" ? "عربي" : code.toUpperCase();
    return `<a href="${href}" lang="${code}"${current}>${label}</a>`;
  }).join("");
  return `<nav class="planner-langs" aria-label="Language">${links}</nav>`;
}

export function plannerMarkup(lang: Lang) {
  let html = PLANNER_MARKUP.replace(`<div class="home-actions">`, `${langNav(lang)}<div class="home-actions">`);
  if (lang === "az") return html;
  const rows = [...CHROME].sort((a, b) => b[0].length - a[0].length);
  for (const row of rows) html = replacePhrase(html, row[0], cell(row, lang));
  return html;
}

const LOCALE: Record<Lang, string> = {
  az: "az-AZ",
  en: "en-GB",
  tr: "tr-TR",
  ar: "ar",
  ru: "ru-RU",
};

export function plannerCopy(lang: Lang) {
  const say = (row: Row) => cell(row, lang);
  const named = (table: Record<string, Row>, id: string, fallback: string) => (table[id] ? say(table[id]) : fallback);
  return {
    locale: LOCALE[lang],
    country: (name: string) => named(COUNTRY, name, name),
    unitTitle: (id: string, fallback: string) => named(UNIT_TITLE, id, fallback),
    formTitle: (id: string, fallback: string) => named(FORM_TITLE, id, fallback),
    formNote: (id: string, fallback: string) => named(FORM_NOTE, id, fallback),
    stages: STAGE.map((stage) => ({ name: say(stage.name), short: say(stage.short), blurb: say(stage.blurb) })),
    noteFoundation: say([" Təməl xərci bu smetada yoxdur.", " Foundation cost is not in this estimate.", " Temel gideri bu keşifte yok.", " تكلفة الأساس ليست في هذا التقدير.", " Расход на фундамент в эту смету не входит."]),
    noteRoof: say([" Dam ayrıca qiymətlənməyib.", " The roof is not priced separately.", " Çatı ayrıca fiyatlanmadı.", " السقف لم يُسعّر وحده.", " Крыша отдельно не оценена."]),
    upTo: say(["Bu mərhələyə qədər", "Up to this stage", "Bu aşamaya kadar", "حتى هذه المرحلة", "До этого этапа"]),
    customUnit: say(["Fərdi ölçü (özün yaz)", "Custom size (type your own)", "Özel ölçü (kendin yaz)", "مقاس خاص (اكتب بنفسك)", "Свой размер (впишите)"]),
    customSizeHint: say(["Ölçünü millimetrlə özün yaz.", "Enter the size in millimetres.", "Ölçüyü milimetreyle kendin yaz.", "اكتب المقاس بالمليمتر.", "Впишите размер в миллиметрах."]),
    unitNote: (country: string, local: string, wall: number) =>
      say([
        `${country}: buna ${local} deyirlər. Divar adətən ${wall} mm olur.`,
        `${country}: locally called ${local}. A wall is usually ${wall} mm.`,
        `${country}: yerelde adı ${local}. Duvar genelde ${wall} mm olur.`,
        `${country}: يُسمّى محلياً ${local}. سُمك الجدار عادة ${wall} مم.`,
        `${country}: местное название — ${local}. Стена обычно ${wall} мм.`,
      ]),
    localName: say(["yerli adı", "local name", "yerel adı", "الاسم المحلي", "местное название"]),
    piecePrice: say(["1 ədədin qiyməti, AZN", "Price per piece, AZN", "1 adet fiyatı, AZN", "سعر القطعة، AZN", "Цена 1 штуки, AZN"]),
    studPrice: say(["1 dirəyin qiyməti, AZN", "Price of one stud, AZN", "1 dikmenin fiyatı, AZN", "سعر القائم، AZN", "Цена 1 стойки, AZN"]),
    element: say(["element", "piece", "parça", "قطعة", "элемент"]),
    studLine: (boards: string) =>
      say([
        `Dirək — ${boards} əd (40 sm aralı)`,
        `Studs — ${boards} pcs (40 cm apart)`,
        `Dikme — ${boards} adet (40 cm arayla)`,
        `قوائم — ${boards} قطعة (كل 40 سم)`,
        `Стойки — ${boards} шт. (шаг 40 см)`,
      ]),
    pieceLine: (piece: string, count: string, layers: number) =>
      say([
        `${piece} — ${count} əd (${layers} sıra)`,
        `${piece} — ${count} pcs (${layers} courses)`,
        `${piece} — ${count} adet (${layers} sıra)`,
        `${piece} — ${count} قطعة (${layers} صف)`,
        `${piece} — ${count} шт. (${layers} ряд.)`,
      ]),
    cementLine: (qty: number) => say([`Sement — ${qty} kg`, `Cement — ${qty} kg`, `Çimento — ${qty} kg`, `إسمنت — ${qty} كغ`, `Цемент — ${qty} кг`]),
    paintLine: (qty: number) => say([`Boya — ${qty} litr`, `Paint — ${qty} L`, `Boya — ${qty} litre`, `دهان — ${qty} لتر`, `Краска — ${qty} л`]),
    floorLine: (qty: number) => say([`Kafel/laminat — ${qty} m²`, `Tile/laminate — ${qty} m²`, `Fayans/laminat — ${qty} m²`, `بلاط/لامينيت — ${qty} م²`, `Плитка/ламинат — ${qty} м²`]),
    wallChip: (area: string) => say([`Divar ${area} m²`, `Wall ${area} m²`, `Duvar ${area} m²`, `جدار ${area} م²`, `Стена ${area} м²`]),
    floorChip: (area: string) => say([`Döşəmə ${area} m²`, `Floor ${area} m²`, `Döşeme ${area} m²`, `أرضية ${area} م²`, `Пол ${area} м²`]),
    openChip: (area: string) => say([`Açılış −${area} m²`, `Openings −${area} m²`, `Boşluk −${area} m²`, `فتحات −${area} م²`, `Проёмы −${area} м²`]),
    noOpen: say(["Açılış yoxdur", "No openings", "Boşluk yok", "لا فتحات", "Проёмов нет"]),
    dims: (length: number, width: number, height: number, rooms: number) =>
      say([
        `Uzunluq: <b>${length}</b> m · En: <b>${width}</b> m · Hündürlük: <b>${height}</b> m · Otaq: <b>${rooms}</b>`,
        `Length: <b>${length}</b> m · Width: <b>${width}</b> m · Height: <b>${height}</b> m · Rooms: <b>${rooms}</b>`,
        `Uzunluk: <b>${length}</b> m · En: <b>${width}</b> m · Yükseklik: <b>${height}</b> m · Oda: <b>${rooms}</b>`,
        `الطول: <b>${length}</b> م · العرض: <b>${width}</b> م · الارتفاع: <b>${height}</b> م · الغرف: <b>${rooms}</b>`,
        `Длина: <b>${length}</b> м · Ширина: <b>${width}</b> м · Высота: <b>${height}</b> м · Комнаты: <b>${rooms}</b>`,
      ]),
    wall: (id: string) => named(WALL, id, say(WALL.room)),
    room: (n: number) => say([`Otaq ${n}`, `Room ${n}`, `Oda ${n}`, `غرفة ${n}`, `Комната ${n}`]),
    copied: say(["Kopyalandı", "Copied", "Kopyalandı", "تم النسخ", "Скопировано"]),
    estimateTitle: say(["Nibras smeta", "Nibras estimate", "Nibras keşif", "تقدير Nibras", "Смета Nibras"]),
  };
}
