// Hazır oyunlar siyahısı («oyun kodu yaz» sorğularına AI-yə getmədən cavab). Yeni oyun əlavə etmək:
//   1) oyunun HTML faylını content/games/<slug>.html kimi at (bayt-bayt olduğu kimi, dəyişmə; içində ``` olmasın);
//   2) node scripts/build-games.mjs  (api/_games/<slug>.js yaranır — Vercel yalnız statik import yollarını paketə qoyur);
//   3) aşağıya BİR sətir əlavə et; scripts/games-browser.test.mjs-ə brauzer ssenarisi yaz.
// Sahələr: slug (fayl adı), title (cavabda görünən ad), keywords (konkret oyun istəyini tanıdan sözlər/ifadələr: az/tr/en/ru/ar),
//          kinds (kateqoriyalar: arcade, puzzle, shooter, snake, board, runner, defense, bird).
export const GAMES = [
  { slug: "ilan", title: "İlan", keywords: ["ilan", "snake", "yilan", "змейка", "змейку", "змейки", "ثعبان", "الثعبان", "حية"], kinds: ["snake", "arcade"], load: () => import("./ilan.js") },
  { slug: "xox", title: "XOX", keywords: ["xox", "tic tac toe", "tictactoe", "крестики нолики", "اكس او", "اكس اوه", "x o"], kinds: ["board", "puzzle"], load: () => import("./xox.js") },
  { slug: "yaddas-kartlari", title: "Yaddaş kartları", keywords: ["yaddas", "yaddas oyunu", "memory", "memory match", "memory game", "hafiza", "hafiza oyunu", "eslestirme", "мемори", "память", "карточки", "ذاكرة", "بطاقات الذاكرة"], kinds: ["puzzle"], load: () => import("./yaddas-kartlari.js") },
  { slug: "qus-ucusu", title: "Quş uçuşu", keywords: ["qus", "kus", "kus ucusu", "ucan kus", "flappy", "flappy bird", "flappybird", "птица", "флэппи", "флаппи", "طائر", "طير", "فلابي"], kinds: ["bird", "arcade"], load: () => import("./qus-ucusu.js") },
  { slug: "pinq-ponq", title: "Pinq-Ponq", keywords: ["pinq ponq", "pinqponq", "pong", "ping pong", "pingpong", "ponq", "tenis", "masa tenisi", "table tennis", "tennis", "понг", "пинг понг", "بونج", "بينغ بونغ"], kinds: ["arcade"], load: () => import("./pinq-ponq.js") },
  { slug: "kerpic-qirma", title: "Kərpic qırma", keywords: ["kerpic", "kirici", "tugla", "tugla kirma", "brick", "bricks", "brick breaker", "breakout", "arkanoid", "арканоид", "кирпичи", "بريك اوت", "اركانويد", "كسر الطوب"], kinds: ["arcade"], load: () => import("./kerpic-qirma.js") },
  { slug: "2048", title: "2048", keywords: ["2048"], kinds: ["puzzle"], load: () => import("./2048.js") },
  { slug: "mina-axtaran", title: "Mina axtaran", keywords: ["mina", "minesweeper", "mine sweeper", "mayin", "mayin tarlasi", "сапер", "минер", "كاسح الغام", "كاسحة الالغام", "الغام"], kinds: ["puzzle"], load: () => import("./mina-axtaran.js") },
  { slug: "kostebek-vur", title: "Köstəbək vur", keywords: ["kostebek", "whack a mole", "whack mole", "whackamole", "mole", "крот", "бей крота", "خلد", "اضرب الخلد"], kinds: ["arcade"], load: () => import("./kostebek-vur.js") },
  { slug: "sonsuz-qacis", title: "Sonsuz qaçış", keywords: ["qacis", "qacma", "sonsuz", "sonsuz kosu", "runner", "endless runner", "dino", "dino oyunu", "dinozavr", "бегалка", "раннер", "динозавр", "бесконечный бег", "جري", "ركض"], kinds: ["runner", "arcade"], load: () => import("./sonsuz-qacis.js") },
];
