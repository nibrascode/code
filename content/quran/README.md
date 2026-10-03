# Quran mətni (Tanzil)

`quran-uthmani.xml` — Tanzil Project-dən (https://tanzil.net/) gələn Quran mətni, **olduğu kimi** (başlıq: Tanzil Quran Text (Simple, Version 1.1), CC BY 3.0).
Mətni dəyişmək qadağandır. Mənbə (Tanzil Project) göstərilməli və tanzil.net-ə link verilməlidir.

Generasiya: `node scripts/build-quran.mjs` → `api/_quran/quran.js` (AYAS[s-1][a-1], BISMILLAH, SURA_NAMES_AR) və `api/_quran/TANZIL-NOTICE.txt`.
Nibras AI-da ayə mətni yalnız bu məlumatdan götürülür: `api/_ayah.js` (axtarış `ayahReply`, AI cavabının düzəldilməsi `finalizeAi`).
Surə adları və yazılışlar: `api/_quran/suras.js`. Testlər: `node scripts/quran-full.test.mjs`.
