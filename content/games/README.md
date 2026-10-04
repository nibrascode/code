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

## Mövcud oyunlar (16)
İlan, XOX, Yaddaş kartları, Quş uçuşu, Pinq-Ponq, Kərpic qırma, 2048, Mina axtaran, Köstəbək vur, Sonsuz qaçış, Dan yerinə qədər, Bakı gecəsi, Qala keşikçisi, Neon Drive, Neon Void, Neon Breakout (son altısı istifadəçinin öz oyunlarıdır, olduğu kimi; Google Fonts linki var, şrift olmasa da işləyir).
Hamısı tək fayl, kənar kitabxanasız, AZ interfeys, kompüter + toxunma. Brauzer yoxlaması: `node --test scripts/games-browser.test.mjs` (headless Chrome varsa işləyir).
