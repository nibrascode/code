import type { Lang } from "@/lib/i18n";

const PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export const GAME_VERSION = "v1.0.0";

type Copy = Record<Lang, string>;

export type GameSlug = "x-o" | "soz" | "ilan" | "kosmos" | "qala" | "neon" | "tetris" | "2048";

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
      az: "Üç eyni işarə qalibdir. İki nəfər, ya da kompüter.",
      en: "Three matching marks win. Two people, or the computer.",
      tr: "Üç aynı işaret kazanır. İki kişi ya da bilgisayar.",
      ar: "ثلاث علامات متشابهة تربح. شخصان، أو الحاسوب.",
      ru: "Три одинаковых знака побеждают. Два человека или компьютер.",
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
      az: "Azərbaycan sözünü tap. Dörd, beş, altı və ya yeddi hərf.",
      en: "Find the Azerbaijani word. Four, five, six, or seven letters.",
      tr: "Azerbaycan sözünü bul. Dört, beş, altı ya da yedi harf.",
      ar: "جد الكلمة الأذربيجانية. أربعة أو خمسة أو ستة أو سبعة أحرف.",
      ru: "Найди азербайджанское слово. Четыре, пять, шесть или семь букв.",
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
      az: "Yeməyi ye, uzan. Divara və özünə toxunma.",
      en: "Eat, grow, and do not hit the wall or yourself.",
      tr: "Yemi ye, uzan. Duvara ve kendine değme.",
      ar: "كُلْ وتقدّم. لا تلمس الجدار ولا نفسك.",
      ru: "Ешь и расти. Не врежься в стену и в себя.",
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
      az: "Dalğaları məhv et. Hər beşinci dalğa bosdur.",
      en: "Clear the waves. Every fifth wave is a boss.",
      tr: "Dalgaları yok et. Her beşinci dalga bosstur.",
      ar: "أزل الموجات. كل موجة خامسة زعيم.",
      ru: "Сбивай волны. Каждая пятая — босс.",
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
      az: "Yola qüllə qur. Qızıl topla, qalanı qoru.",
      en: "Build towers beside the road. Gather gold and hold the fortress.",
      tr: "Yola kule kur. Altın topla, kaleyi koru.",
      ar: "ابنِ أبراجًا على الطريق. اجمع الذهب واحمِ القلعة.",
      ru: "Строй башни у дороги. Собирай золото и держи крепость.",
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
      az: "Topu idarə et, kərpicləri sındır.",
      en: "Steer the ball and break the bricks.",
      tr: "Topu yönet, tuğlaları kır.",
      ar: "وجّه الكرة وحطّم الطوب.",
      ru: "Веди мяч и разбивай кирпичи.",
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
      az: "Sətirləri doldur. Hər on xətt yeni səviyyədir.",
      en: "Fill the rows. Every ten lines is a new level.",
      tr: "Satırları doldur. Her on satır yeni seviye.",
      ar: "املأ الصفوف. كل عشرة خطوط مستوى جديد.",
      ru: "Заполняй ряды. Каждые десять линий — новый уровень.",
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
      az: "Eyni rəqəmləri birləşdir. 2048-ə çat.",
      en: "Merge matching numbers. Reach 2048.",
      tr: "Aynı sayıları birleştir. 2048'e ulaş.",
      ar: "ادمج الأرقام المتشابهة. اوصل إلى 2048.",
      ru: "Соединяй одинаковые числа. Доберись до 2048.",
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
    az: "Nibras Code oyunları. X-O, Söz, İlan, Kosmos, Qala, Neon, Tetris və 2048. Versiya v1.0.0.",
    en: "Nibras Code games. Tic-tac-toe, Söz, Snake, Kosmos, Fortress, Neon, Tetris, and 2048. Version v1.0.0.",
    tr: "Nibras Code oyunları. XOX, Söz, Yılan, Kosmos, Kale, Neon, Tetris ve 2048. Sürüm v1.0.0.",
    ar: "ألعاب Nibras Code. إكس أو، وكلمة، والأفعى، والفضاء، والقلعة، ونيون، وتتريس، و2048. الإصدار v1.0.0.",
    ru: "Игры Nibras Code. Крестики-нолики, Слово, Змейка, Космос, Крепость, Неон, Тетрис и 2048. Версия v1.0.0.",
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
  return slug ? `${base}/${slug}` : base;
}

export function gameBySlug(slug: string) {
  return GAMES.find((game) => game.slug === slug) ?? null;
}

export function gameSeo(pathname: string, lang: Lang) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
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
