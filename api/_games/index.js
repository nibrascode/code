// Hazır oyunlar siyahısı. Yeni oyun əlavə etmək:
//   1) oyunun HTML faylını content/games/<slug>.html kimi at (bayt-bayt olduğu kimi, dəyişmə);
//   2) node scripts/build-games.mjs  (api/_games/<slug>.js yaradılır — Vercel yalnız statik import yollarını paketə qoyur);
//   3) aşağıya BİR sətir əlavə et.
// Sahələr: slug (fayl adı), title (cavabda görünən ad), keywords (konkret oyun istəyini tanıdan sözlər/ifadələr: az/tr/en/ru/ar),
//          kinds (kateqoriyalar: arcade, puzzle, shooter, snake, board, runner, defense, bird).
// Nümunə (mövcud deyil, yalnız format):
//   { slug: "tetris", title: "Tetris", keywords: ["tetris"], kinds: ["puzzle", "arcade"], load: () => import("./tetris.js") },
export const GAMES = [];
