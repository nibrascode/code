# Hazır oyunlar (Nibras AI «oyun kodu yaz»)

`oyun kodu yaz`, `write a game code`, `اكتب كود لعبة`, `напиши код игры` kimi sorğulara AI çağırılmır; bu qovluqdakı oyunlardan biri
**olduğu kimi** (bayt-bayt) ```html blokunda qaytarılır, söhbətdəki «Aç» düyməsi onu açır. Hər dəfə fərqli oyun verilir.

## Yeni oyun əlavə etmək
1. HTML faylını `content/games/<slug>.html` kimi at (slug: `a-z`, `0-9`, `-`). Faylı dəyişmə; UTF-8 olmalıdır; içində ``` (üç backtick) olmamalıdır.
2. `node scripts/build-games.mjs` — `api/_games/<slug>.js` yaradılır (Vercel yalnız statik `import()` yollarını paketə qoyur; `.html` birbaşa oxunsa deployda yox olar).
3. `api/_games/index.js` içində massivə bir sətir əlavə et:
   `{ slug: "tetris", title: "Tetris", keywords: ["tetris"], kinds: ["puzzle", "arcade"], load: () => import("./tetris.js") },`
4. `node --test scripts/games.test.mjs` (index ↔ fayl ↔ generated .js uyğunluğunu yoxlayır).

`keywords` — konkret oyun istəyini tanıdan sözlər (az/tr/en/ru/ar); oyunun `title`-ı da avtomatik açar sözdür. `kinds`: `arcade, puzzle, shooter, snake, board, runner, defense, bird`.
.gitattributes bu faylları `-text` saxlayır (CRLF çevrilməsin).

## Gözlənilən 11 oyun üçün hazır sətirlər (fayllar gələndə slug-ları uyğunlaşdır)
```js
{ slug: "tetris", title: "Tetris", keywords: ["tetris"], kinds: ["puzzle", "arcade"], load: () => import("./tetris.js") },
{ slug: "yildiz-savascisi", title: "Yıldız Savaşçısı", keywords: ["yildiz savascisi", "space shooter", "space invaders", "galaga", "uzay", "космический шутер", "لعبة فضاء"], kinds: ["shooter", "arcade"], load: () => import("./yildiz-savascisi.js") },
{ slug: "neon-kirici", title: "Neon Kırıcı", keywords: ["neon kirici", "kirici", "breakout", "arkanoid", "brick", "bricks", "кирпичи", "اركانويد"], kinds: ["arcade"], load: () => import("./neon-kirici.js") },
{ slug: "xox-premium", title: "X • O Premium", keywords: ["xox", "x o", "tic tac toe", "tictactoe", "крестики нолики", "اكس او"], kinds: ["board"], load: () => import("./xox-premium.js") },
{ slug: "neon-yilan", title: "Neon Yılan", keywords: ["ilan", "yilan", "snake", "змейка", "ثعبان", "افعى"], kinds: ["snake", "arcade"], load: () => import("./neon-yilan.js") },
{ slug: "neon-arena", title: "Neon Arena", keywords: ["neon arena", "arena"], kinds: ["shooter", "arcade"], load: () => import("./neon-arena.js") },
{ slug: "qala-mudafiesi", title: "Qala Müdafiəsi", keywords: ["qala mudafiesi", "qala", "tower defense", "tower defence", "kale savunma", "защита башни", "دفاع"], kinds: ["defense"], load: () => import("./qala-mudafiesi.js") },
{ slug: "2048-premium", title: "2048 Premium", keywords: ["2048"], kinds: ["puzzle"], load: () => import("./2048-premium.js") },
{ slug: "ulduz-ovcusu", title: "Ulduz Ovçusu", keywords: ["ulduz ovcusu", "ulduz", "star hunter", "stars", "звезды", "نجوم"], kinds: ["arcade"], load: () => import("./ulduz-ovcusu.js") },
{ slug: "neon-qacis", title: "Neon Qaçış", keywords: ["neon qacis", "qacis", "runner", "endless runner", "раннер", "جري"], kinds: ["runner", "arcade"], load: () => import("./neon-qacis.js") },
{ slug: "flappy-premium", title: "Flappy Premium", keywords: ["flappy", "flappy bird", "quş", "bird", "флаппи"], kinds: ["bird", "arcade"], load: () => import("./flappy-premium.js") },
```
