import type { Lang } from "@/lib/i18n";

const PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export const GAME_VERSION = "v1.0.0";

type Copy = Record<Lang, string>;

export type GameSlug = "x-o" | "soz";

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
    az: "Nibras Code oyunları. İlk oyun X-O, versiya v1.0.0.",
    en: "Nibras Code games. The first game is tic-tac-toe, version v1.0.0.",
    tr: "Nibras Code oyunları. İlk oyun XOX, sürüm v1.0.0.",
    ar: "ألعاب Nibras Code. اللعبة الأولى إكس أو، الإصدار v1.0.0.",
    ru: "Игры Nibras Code. Первая игра — крестики-нолики, версия v1.0.0.",
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
