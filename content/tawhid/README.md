# التوحيد (Tövhid)

- `ar.txt` — ərəbcə mətn (mənbə: «التلخيص المفيد في مقرر: توحيد ۱ - عقد ۳۰۰۱», إعداد وتنسيق الطالب عبد الرحمن بن إبراهيم صويلح).
- `az.txt` — Azərbaycan dilinə tərcümə (1–11-ci mövzular; istifadəçinin son tərcüməsi, mətn dəyişdirilmədən).

Qeyd: mətn PDF-dən köçürülüb və sətir-sətir düzəliş edilib (məs. ﷻ və ﷺ işarələri bərpa olunub, bəzi simvol xətaları və "الواو والصاد والفاء" kimi ifadələr düzəldilib). Dini istifadədən əvvəl əsl mənbə ilə tutuşdurmaq lazımdır.

## Nibras AI-da hazır cavab (AI-siz)

Bu mətndəki suallar `api/_tawhid.js` ilə hazır cavab kimi verilir (`api/chat.js`-də `tawhidReply`, `cannedReply`-dən əvvəl).

- `meta.mjs` — hər giriş (sual / alt bölmə): ərəbcə və azərbaycanca mətnin harada olduğu, açar söz qrupları və təbii sual ifadələri (`trig`).
- `node scripts/build-tawhid.mjs` — `ar.txt` + `az.txt` + `meta.mjs`-dən `api/_tawhid/entries.js` yaradır (əl ilə dəyişməyin).
- Yeni tərcümə gələndə: `az.txt`-ə eyni formatda əlavə edin («Üçüncü mövzu: ...» və «Sual N: ...» sətirləri), `meta.mjs`-də həmin giriş üçün `az: null` əvəzinə `az: { q: N }` yazın (qismən tərcümə üçün `partial: true`, tam olanda silin), sonra skripti və `node --test scripts/tawhid.test.mjs` işlədin. Tərcümə mətni olduğu kimi (dəyişdirilmədən) göstərilir.
