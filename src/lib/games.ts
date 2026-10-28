import { delocalizeSection, localizeSection } from "@/lib/section-slugs";
import type { Lang } from "@/lib/i18n";

const PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export const GAME_VERSION = "v1.0.0";

type Copy = Record<Lang, string>;

export type GameSlug = "x-o" | "soz" | "ilan" | "kosmos" | "qala" | "neon" | "tetris" | "2048" | "meyve";

export const GAMES: readonly { slug: GameSlug; name: Copy; blurb: Copy }[] = [
  {
    slug: "x-o",
    name: {
      az: "X-O",
      en: "Tic-tac-toe",
      tr: "XOX",
      ar: "إكس أو",
      ru: "Крестики-нолики",
    },
    blurb: {
      az: "Üç eyni işarə qalibdir. İki nəfər, ya da kompüter. Hücrəyə bas. X və O növbə ilə gedir. Kompüter rejimində sən X-sən.",
      en: "Three matching marks win. Two people, or the computer. Tap a cell. X and O take turns. Against the computer you are X.",
      tr: "Üç aynı işaret kazanır. İki kişi ya da bilgisayar. Hücreye bas. X ve O sırayla gider. Bilgisayara karşı sen X'sin.",
      ar: "ثلاث علامات متشابهة تربح. شخصان، أو الحاسوب. اضغط الخانة. X وO يلعبان بالتناوب. أمام الحاسوب أنت X.",
      ru: "Три одинаковых знака побеждают. Два человека или компьютер. Нажми клетку. X и O ходят по очереди. Против компьютера ты X.",
    },
  },
  {
    slug: "soz",
    name: {
      az: "Söz",
      en: "Söz",
      tr: "Söz",
      ar: "كلمة",
      ru: "Слово",
    },
    blurb: {
      az: "Azərbaycan sözünü tap. Dörd, beş, altı və ya yeddi hərf. Sözü yazıb yoxla. Yaşıl hərf yerindədir, sarı hərf sözdədir, boz yoxdur.",
      en: "Find the Azerbaijani word. Four, five, six, or seven letters. Write the word and check it. Green is in the right place, yellow is in the word, gray is absent.",
      tr: "Azerbaycan sözünü bul. Dört, beş, altı ya da yedi harf. Sözü yazıp kontrol et. Yeşil harf yerindedir, sarı harf sözdedir, gri yoktur.",
      ar: "جد الكلمة الأذربيجانية. أربعة أو خمسة أو ستة أو سبعة أحرف. اكتب الكلمة وافحصها. الأخضر في مكانه، والأصفر في الكلمة، والرمادي غير موجود.",
      ru: "Найди азербайджанское слово. Четыре, пять, шесть или семь букв. Напиши слово и проверь. Зелёная буква на месте, жёлтая есть в слове, серой нет.",
    },
  },
  {
    slug: "ilan",
    name: {
      az: "İlan",
      en: "Snake",
      tr: "Yılan",
      ar: "الأفعى",
      ru: "Змейка",
    },
    blurb: {
      az: "Yeməyi ye, uzan. Divara və özünə toxunma. Oxlarla və ya barmağı sürüşdürərək istiqaməti dəyiş. Yeməyi yedikcə ilan uzanır.",
      en: "Eat, grow, and do not hit the wall or yourself. Change direction with the arrows or a swipe. The snake grows each time it eats.",
      tr: "Yemi ye, uzan. Duvara ve kendine değme. Oklarla ya da parmağını kaydırarak yön değiştir. Yemi yedikçe yılan uzar.",
      ar: "كُلْ وتقدّم. لا تلمس الجدار ولا نفسك. غيّر الاتجاه بالأسهم أو بسحب الإصبع. الأفعى تطول كلما أكلت.",
      ru: "Ешь и расти. Не врежься в стену и в себя. Направление меняют стрелки или жест. Змея растёт, когда ест.",
    },
  },
  {
    slug: "kosmos",
    name: {
      az: "Kosmos",
      en: "Kosmos",
      tr: "Kosmos",
      ar: "الفضاء",
      ru: "Космос",
    },
    blurb: {
      az: "Dalğaları məhv et. Hər beşinci dalğa bosdur. Gəmini sola və sağa apar, atəş aç. Dalğadakı hədəfləri vur.",
      en: "Clear the waves. Every fifth wave is a boss. Move the ship left and right, and fire. Hit the targets in the wave.",
      tr: "Dalgaları yok et. Her beşinci dalga bosstur. Gemiyi sola ve sağa götür, ateş et. Dalgadaki hedefleri vur.",
      ar: "أزل الموجات. كل موجة خامسة زعيم. حرّك السفينة يمينًا ويسارًا وأطلق. اضرب الأهداف في الموجة.",
      ru: "Сбивай волны. Каждая пятая — босс. Веди корабль влево и вправо и стреляй. Попадай по целям волны.",
    },
  },
  {
    slug: "qala",
    name: {
      az: "Qala",
      en: "Fortress",
      tr: "Kale",
      ar: "القلعة",
      ru: "Крепость",
    },
    blurb: {
      az: "Yola qüllə qur. Qızıl topla, qalanı qoru. Düşmən keçəndə qüllə atəş açır. Qızıl yeni qüllə üçündür.",
      en: "Build towers beside the road. Gather gold and hold the fortress. A tower fires when an enemy passes. Gold is for the next tower.",
      tr: "Yola kule kur. Altın topla, kaleyi koru. Düşman geçince kule ateş eder. Altın yeni kule içindir.",
      ar: "ابنِ أبراجًا على الطريق. اجمع الذهب واحمِ القلعة. البرج يطلق حين يمر العدو. الذهب للبرج التالي.",
      ru: "Строй башни у дороги. Собирай золото и держи крепость. Башня стреляет, когда враг проходит. Золото нужно для следующей башни.",
    },
  },
  {
    slug: "neon",
    name: {
      az: "Neon",
      en: "Neon",
      tr: "Neon",
      ar: "نيون",
      ru: "Неон",
    },
    blurb: {
      az: "Topu idarə et, kərpicləri sındır. Lövhəni sola və sağa apar. Top aşağı düşsə, həyat gedir.",
      en: "Steer the ball and break the bricks. Move the paddle left and right. If the ball falls, a life is gone.",
      tr: "Topu yönet, tuğlaları kır. Tahtayı sola ve sağa götür. Top aşağı düşerse can gider.",
      ar: "وجّه الكرة وحطّم الطوب. حرّك اللوح يمينًا ويسارًا. إذا سقطت الكرة ذهبت حياة.",
      ru: "Веди мяч и разбивай кирпичи. Двигай площадку влево и вправо. Если мяч упал, жизнь уходит.",
    },
  },
  {
    slug: "tetris",
    name: {
      az: "Tetris",
      en: "Tetris",
      tr: "Tetris",
      ar: "تتريس",
      ru: "Тетрис",
    },
    blurb: {
      az: "Sətirləri doldur. Hər on xətt yeni səviyyədir. Fiquru sola, sağa və aşağı apar, fırlat. Tam sətir silinir.",
      en: "Fill the rows. Every ten lines is a new level. Move the piece left, right, and down, and rotate it. A full row disappears.",
      tr: "Satırları doldur. Her on satır yeni seviye. Parçayı sola, sağa ve aşağı götür, döndür. Tam satır silinir.",
      ar: "املأ الصفوف. كل عشرة خطوط مستوى جديد. حرّك القطعة يمينًا ويسارًا وأسفل ودوّرها. الصف الكامل يختفي.",
      ru: "Заполняй ряды. Каждые десять линий — новый уровень. Веди фигуру влево, вправо и вниз и поворачивай. Полный ряд исчезает.",
    },
  },
  {
    slug: "2048",
    name: {
      az: "2048",
      en: "2048",
      tr: "2048",
      ar: "2048",
      ru: "2048",
    },
    blurb: {
      az: "Eyni rəqəmləri birləşdir. 2048-ə çat. Barmağını və ya oxu bir tərəfə çək. İki eyni rəqəm birləşib cəmini verir.",
      en: "Merge matching numbers. Reach 2048. Swipe or press an arrow. Two matching numbers join and become their sum.",
      tr: "Aynı sayıları birleştir. 2048'e ulaş. Parmağını ya da oku bir yana çek. İki aynı sayı birleşip toplamını verir.",
      ar: "ادمج الأرقام المتشابهة. اوصل إلى 2048. اسحب أو اضغط سهمًا. رقمان متشابهان يتحدان ويصبحان مجموعهما.",
      ru: "Соединяй одинаковые числа. Доберись до 2048. Проведи пальцем или нажми стрелку. Два одинаковых числа сливаются в сумму.",
    },
  },
  {
    slug: "meyve",
    name: {
      az: "Meyvə",
      en: "Fruit",
      tr: "Meyve",
      ar: "فاكهة",
      ru: "Фрукты",
    },
    blurb: {
      az: "Barmağını sürüşdür, meyvələri kəs. Bombaya toxunma. Kəsilən meyvə xal gətirir. Bomba oyunu bitirir.",
      en: "Swipe to slice the fruit. Do not touch the bomb. A sliced fruit gives points. A bomb ends the game.",
      tr: "Parmağını kaydır, meyveleri kes. Bombaya dokunma. Kesilen meyve puan getirir. Bomba oyunu bitirir.",
      ar: "اسحب لتقطع الفاكهة. لا تلمس القنبلة. الفاكهة المقطوعة تعطي نقاطًا. القنبلة تنهي اللعبة.",
      ru: "Проведи пальцем и режь фрукты. Бомбу не трогай. Разрезанный фрукт даёт очки. Бомба кончает игру.",
    },
  },
];

export const GAME_COPY = {
  heading: { az: "Oyunlar", en: "Games", tr: "Oyunlar", ar: "ألعاب", ru: "Игры" },
  lead: {
    az: "Eyni telefonda. Qeydiyyat yoxdur.",
    en: "On the same phone. No account.",
    tr: "Aynı telefonda. Kayıt yok.",
    ar: "على الهاتف نفسه. بلا حساب.",
    ru: "На одном телефоне. Без аккаунта.",
  },
  indexTitle: {
    az: "Oyunlar — Nibras Code",
    en: "Games — Nibras Code",
    tr: "Oyunlar — Nibras Code",
    ar: "ألعاب — Nibras Code",
    ru: "Игры — Nibras Code",
  },
  indexDescription: {
    az: "Nibras Code oyunları. X-O, Söz, İlan, Kosmos, Qala, Neon, Tetris, 2048 və Meyvə. Versiya v1.0.0.",
    en: "Nibras Code games. Tic-tac-toe, Söz, Snake, Kosmos, Fortress, Neon, Tetris, 2048, and Fruit. Version v1.0.0.",
    tr: "Nibras Code oyunları. XOX, Söz, Yılan, Kosmos, Kale, Neon, Tetris, 2048 ve Meyve. Sürüm v1.0.0.",
    ar: "ألعاب Nibras Code. إكس أو، وكلمة، والأفعى، والفضاء، والقلعة، ونيون، وتتريس، و2048، والفاكهة. الإصدار v1.0.0.",
    ru: "Игры Nibras Code. Крестики-нолики, Слово, Змейка, Космос, Крепость, Неон, Тетрис, 2048 и Фрукты. Версия v1.0.0.",
  },
  two: { az: "İki nəfər", en: "Two people", tr: "İki kişi", ar: "شخصان", ru: "Два человека" },
  cpu: { az: "Kompüter", en: "Computer", tr: "Bilgisayar", ar: "الحاسوب", ru: "Компьютер" },
  xTurn: { az: "X gedişindədir", en: "X to move", tr: "Sıra X'te", ar: "دور X", ru: "Ход X" },
  oTurn: { az: "O gedişindədir", en: "O to move", tr: "Sıra O'da", ar: "دور O", ru: "Ход O" },
  xWin: { az: "X qalibdir", en: "X wins", tr: "X kazandı", ar: "X يفوز", ru: "Победил X" },
  oWin: { az: "O qalibdir", en: "O wins", tr: "O kazandı", ar: "O يفوز", ru: "Победил O" },
  draw: { az: "Heç-heçə", en: "Draw", tr: "Berabere", ar: "تعادل", ru: "Ничья" },
  again: { az: "Yeni oyun", en: "New game", tr: "Yeni oyun", ar: "لعبة جديدة", ru: "Новая игра" },
  clear: { az: "Hesabı sil", en: "Clear score", tr: "Skoru sil", ar: "امسح النقاط", ru: "Сбросить счёт" },
  you: { az: "Sən X-sən. Kompüter O-dur.", en: "You are X. The computer is O.", tr: "Sen X'sin. Bilgisayar O.", ar: "أنت X. الحاسوب O.", ru: "Ты X. Компьютер — O." },
  back: { az: "Oyunlar", en: "Games", tr: "Oyunlar", ar: "الألعاب", ru: "Игры" },
} as const;

export function gamePath(lang: Lang, slug?: string) {
  const base = `${PREFIX[lang]}/oyun`;
  return localizeSection(slug ? `${base}/${slug}` : base);
}

export function gameBySlug(slug: string) {
  return GAMES.find((game) => game.slug === slug) ?? null;
}

export function gameSeo(pathname: string, lang: Lang) {
  const path = delocalizeSection(pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname);
  const match = path.match(/^\/(?:(?:en|tr|ar|ru)\/)?oyun(?:\/([a-z0-9-]+))?$/);
  if (!match) return null;
  if (!match[1]) {
    return {
      title: GAME_COPY.indexTitle[lang],
      description: GAME_COPY.indexDescription[lang],
      keywords: GAME_COPY.heading[lang],
    };
  }
  const game = gameBySlug(match[1]);
  if (!game) return null;
  return {
    title: `${game.name[lang]} ${GAME_VERSION} — Nibras Code`,
    description: game.blurb[lang],
    keywords: `${game.name[lang]}, ${GAME_VERSION}`,
  };
}
