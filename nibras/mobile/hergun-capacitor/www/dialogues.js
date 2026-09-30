// dialogues.js — Müəllim-Şagird Dərs Dialoqları (ID: 1 – 186)
// Mövzu: Ərəb Dili Qrammatika Məşqləri (İşarə əvəzlikləri, Hərfi-cərlər, Sifətlər, Cəm, Müsənna, Əvəzliklər, Laysa, İzafə, Feili-Madi/Müzari)

const dialoguesData = [
    {
        id: 1,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.", translation: "Allahın salamı, rəhməti və bərəkəti üzərinizə olsun." },
            { arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.", translation: "Və əleykum salam, Allahın rəhməti və bərəkəti sizin də üzərinizə olsun." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "هَلْ هٰذَا كِتَابٌ؟", translation: "Bu, kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ.", translation: "Bəli, bu, kitabdır." }
        ]
    },
    {
        id: 2,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا مَكْتَبٌ.", translation: "Bu, masadır." },
            { arabic: "هَلْ هٰذَا مَكْتَبٌ؟", translation: "Bu, masadırmı?" },
            { arabic: "نَعَمْ، هٰذَا مَكْتَبٌ.", translation: "Bəli, bu, masadır." }
        ]
    },
    {
        id: 3,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا وَلَدٌ.", translation: "Bu, oğlandır." },
            { arabic: "هَلْ هٰذَا وَلَدٌ؟", translation: "Bu, oğlandırmı?" },
            { arabic: "نَعَمْ، هٰذَا وَلَدٌ.", translation: "Bəli, bu, oğlandır." }
        ]
    },
    {
        id: 4,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ هٰذَا كِتَابٌ جَدِيدٌ؟", translation: "Bu, yeni kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bəli, bu, yeni kitabdır." }
        ]
    },
    {
        id: 5,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "مَاذَا نَقُولُ مَعَ «كِتَابٌ»؟", translation: "\"Kitab\" sözü ilə nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا كِتَابٌ».", translation: "\"Bu, kitabdır\" deyirik." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ «كِتَابٌ» مُذَكَّرٌ.", translation: "Çünki \"kitab\" müzəkkərdir (kişi cinsindədir)." }
        ]
    },
    {
        id: 6,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "هَلْ «قَلَمٌ» مُذَكَّرٌ؟", translation: "\"Qələm\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ، «قَلَمٌ» مُذَكَّرٌ.", translation: "Bəli, \"qələm\" müzəkkərdir." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا قَلَمٌ».", translation: "\"Bu, qələmdir\" deyirik." }
        ]
    },
    {
        id: 7,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "هَلْ نَقُولُ: «هٰذَا كِتَابٌ»؟", translation: "\"Bu, kitabdır\" deyirikmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ نَقُولُ: «هٰذِهِ كِتَابٌ»؟", translation: "\"Həzihi kitabun\" deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Bəs nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا كِتَابٌ».", translation: "\"Bu, kitabdır\" deyirik." }
        ]
    },
    {
        id: 8,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." },
            { arabic: "هَلْ «بَابٌ» مُذَكَّرٌ؟", translation: "\"Qapı\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ، «بَابٌ» مُذَكَّرٌ.", translation: "Bəli, \"qapı\" müzəkkərdir." },
            { arabic: "مَاذَا نَقُولُ مَعَهُ؟", translation: "Onunla nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا بَابٌ».", translation: "\"Bu, qapıdır\" deyirik." }
        ]
    },
    {
        id: 9,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كُرْسِيٌّ.", translation: "Bu, stuldur." },
            { arabic: "هَلْ «كُرْسِيٌّ» مُذَكَّرٌ؟", translation: "\"Stul\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ، «كُرْسِيٌّ» مُذَكَّرٌ.", translation: "Bəli, \"stul\" müzəkkərdir." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا كُرْسِيٌّ».", translation: "\"Bu, stuldur\" deyirik." }
        ]
    },
    {
        id: 10,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ: «قَلَمٌ»؟", translation: "\"Qələm\" üçün nə deyirik?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "مَاذَا نَقُولُ: «بَيْتٌ»؟", translation: "\"Ev\" üçün nə deyirik?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "مَاذَا نَقُولُ: «بَابٌ»؟", translation: "\"Qapı\" üçün nə deyirik?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." }
        ]
    },
    {
        id: 11,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." }
        ]
    },
    {
        id: 12,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "هَلْ هٰذَا كِتَابٌ؟", translation: "Bu, kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ.", translation: "Bəli, bu, kitabdır." },
            { arabic: "هَلْ هٰذَا قَلَمٌ؟", translation: "Bu, qələmdirmi?" },
            { arabic: "نَعَمْ، هٰذَا قَلَمٌ.", translation: "Bəli, bu, qələmdir." },
            { arabic: "هَلْ هٰذَا بَيْتٌ؟", translation: "Bu, evdirmi?" },
            { arabic: "نَعَمْ، هٰذَا بَيْتٌ.", translation: "Bəli, bu, evdir." }
        ]
    },
    {
        id: 13,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "كِتَابٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "\"Kitab\" müzəkkərdir (kişi cinsi), yoxsa müənnəs (qadın cinsi)?" },
            { arabic: "مُذَكَّرٌ.", translation: "Müzəkkərdir." },
            { arabic: "قَلَمٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "\"Qələm\" müzəkkərdir, yoxsa müənnəs?" },
            { arabic: "مُذَكَّرٌ.", translation: "Müzəkkərdir." },
            { arabic: "بَيْتٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "\"Ev\" müzəkkərdir, yoxsa müənnəs?" },
            { arabic: "مُذَكَّرٌ.", translation: "Müzəkkərdir." }
        ]
    },
    {
        id: 14,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا الْقَاعِدَةُ؟", translation: "Qayda nədir?" },
            { arabic: "نَقُولُ: «هٰذَا» مَعَ الِاسْمِ الْمُذَكَّرِ.", translation: "Müzəkkər (kişi cinsində olan) isimlə \"هٰذَا\" (həzə - bu) işlədirik." },
            { arabic: "مِثْلَ مَاذَا؟", translation: "Məsələn nə kimi?" },
            { arabic: "مِثْلَ: «هٰذَا كِتَابٌ».", translation: "Məsələn: \"Bu, kitabdır\"." },
            { arabic: "وَمِثْلَ مَاذَا؟", translation: "Və daha nə kimi?" },
            { arabic: "«هٰذَا قَلَمٌ».", translation: "\"Bu, qələmdir\"." },
            { arabic: "وَمِثْلَ مَاذَا؟", translation: "Və daha nə kimi?" },
            { arabic: "«هٰذَا بَيْتٌ».", translation: "\"Bu, evdir\"." }
        ]
    },
    {
        id: 15,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "هَلِ الْكِتَابُ فِي الْبَيْتِ؟", translation: "Kitab evdədirmi?" },
            { arabic: "نَعَمْ، الْكِتَابُ فِي الْبَيْتِ.", translation: "Bəli, kitab evdədir." }
        ]
    },
    {
        id: 16,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "هَلِ الْقَلَمُ عَلَى الْمَكْتَبِ؟", translation: "Qələm masanın üzərindədirmi?" },
            { arabic: "نَعَمْ، الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Bəli, qələm masanın üzərindədir." }
        ]
    },
    {
        id: 17,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كُرْسِيٌّ.", translation: "Bu, stuldur." },
            { arabic: "أَيْنَ الْكُرْسِيُّ؟", translation: "Stul haradadır?" },
            { arabic: "الْكُرْسِيُّ فِي الْفَصْلِ.", translation: "Stul sinifdədir." },
            { arabic: "هَلِ الْكُرْسِيُّ فِي الْفَصْلِ؟", translation: "Stul sinifdədirmi?" },
            { arabic: "نَعَمْ، الْكُرْسِيُّ فِي الْفَصْلِ.", translation: "Bəli, stul sinifdədir." }
        ]
    },
    {
        id: 18,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا؟", translation: "Bu haradandır?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." },
            { arabic: "هَلْ هٰذَا مِنَ الْبَيْتِ؟", translation: "Bu, evdəndirmi?" },
            { arabic: "نَعَمْ، هٰذَا مِنَ الْبَيْتِ.", translation: "Bəli, bu, evdəndir." }
        ]
    },
    {
        id: 19,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "إِلَى أَيْنَ هٰذَا؟", translation: "Bu harayadır?" },
            { arabic: "هٰذَا إِلَى الْبَيْتِ.", translation: "Bu, evədir (evə tərəfdir)." },
            { arabic: "هَلْ هٰذَا إِلَى الْبَيْتِ؟", translation: "Bu, evədirmi?" },
            { arabic: "نَعَمْ، هٰذَا إِلَى الْبَيْتِ.", translation: "Bəli, bu, evədir." }
        ]
    },
    {
        id: 20,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ عَلَى الطَّاوِلَةِ.", translation: "Kitab masanın üzərindədir." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «الْكِتَابُ عَلَى الطَّاوِلَةِ».", translation: "\"Kitab masanın üzərindədir\" deyirik." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər (sözönü) hansıdır?" },
            { arabic: "«عَلَى».", translation: "\"عَلَى\" (üzərində)." }
        ]
    },
    {
        id: 21,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ فِي الْحَقِيبَةِ.", translation: "Qələm çantadadır." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər hansıdır?" },
            { arabic: "«فِي».", translation: "\"فِي\" (içində / -da, -də)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "«الْقَلَمُ فِي الْحَقِيبَةِ».", translation: "\"Qələm çantadadır\"." }
        ]
    },
    {
        id: 22,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا الْكِتَابُ؟", translation: "Bu kitab haradandır?" },
            { arabic: "هٰذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ.", translation: "Bu kitab kitabxanadandır." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər hansıdır?" },
            { arabic: "«مِنْ».", translation: "\"مِنْ\" (-dan, -dən)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "«هٰذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ».", translation: "\"Bu kitab kitabxanadandır\"." }
        ]
    },
    {
        id: 23,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْفَصْلِ.", translation: "Sinifə gedirəm." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər hansıdır?" },
            { arabic: "«إِلَى».", translation: "\"إِلَى\" (-a, -ə / tərəf)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "«أَذْهَبُ إِلَى الْفَصْلِ».", translation: "\"Sinifə gedirəm\"." }
        ]
    },
    {
        id: 24,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "وَأَيْنَ الْقَلَمُ؟", translation: "Bəs qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "مِنْ أَيْنَ الْكِتَابُ؟", translation: "Kitab haradandır?" },
            { arabic: "الْكِتَابُ مِنَ الْمَكْتَبَةِ.", translation: "Kitab kitabxanadandır." },
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْفَصْلِ.", translation: "Sinifə gedirəm." }
        ]
    },
    {
        id: 25,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "مَا مَعْنَى «فِي»؟", translation: "\"فِي\" nə məna verir?" },
            { arabic: "«فِي» لِلْمَكَانِ.", translation: "\"فِي\" məkan bildirmək üçündür (-da, -də / içində)." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." }
        ]
    },
    {
        id: 26,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "مَا مَعْنَى «عَلَى»؟", translation: "\"عَلَى\" nə məna verir?" },
            { arabic: "«عَلَى» لِشَيْءٍ فَوْقَ شَيْءٍ.", translation: "\"عَلَى\" bir şeyin başqa bir şeyin üzərində olduğunu bildirir." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." }
        ]
    },
    {
        id: 27,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا؟", translation: "Bu haradandır?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." },
            { arabic: "مَا مَعْنَى «مِنْ»؟", translation: "\"مِنْ\" nə məna verir?" },
            { arabic: "«مِنْ» لِبِدَايَةِ الشَّيْءِ.", translation: "\"مِنْ\" bir şeyin başlanğıcını bildirir (-dan, -dən)." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." }
        ]
    },
    {
        id: 28,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." },
            { arabic: "مَا مَعْنَى «إِلَى»؟", translation: "\"إِلَى\" nə məna verir?" },
            { arabic: "«إِلَى» لِلذَّهَابِ إِلَى مَكَانٍ.", translation: "\"إِلَى\" bir məkana getməyi bildirir (-a, -ə)." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." }
        ]
    },
    {
        id: 29,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "كَمْ حَرْفَ جَرٍّ تَعَلَّمْنَا؟", translation: "Neçə hərfi-cər (sözönü) öyrəndik?" },
            { arabic: "أَرْبَعَةً.", translation: "Dörd." },
            { arabic: "مَا هِيَ؟", translation: "Hansılardır?" },
            { arabic: "«فِي، عَلَى، مِنْ، إِلَى».", translation: "\"فِي, عَلَى, مِنْ, إِلَى\"." },
            { arabic: "جَيِّدٌ.", translation: "Yaxşı." }
        ]
    },
    {
        id: 30,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ؟ «الْكِتَابُ ... الْحَقِيبَةِ»؟", translation: "Nə deyirik? \"الْكِتَابُ ... الْحَقِيبَةِ\"?" },
            { arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", translation: "Kitab çantadadır (الْكِتَابُ فِي الْحَقِيبَةِ)." },
            { arabic: "لِمَاذَا «فِي»؟", translation: "Niyə \"فِي\"?" },
            { arabic: "لِأَنَّ الْكِتَابَ دَاخِلَ الْحَقِيبَةِ.", translation: "Çünki kitab çantanın içindədir." }
        ]
    },
    {
        id: 31,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ؟ «الْقَلَمُ ... الطَّاوِلَةِ»؟", translation: "Nə deyirik? \"الْقَلَمُ ... الطَّاوِلَةِ\"?" },
            { arabic: "الْقَلَمُ عَلَى الطَّاوِلَةِ.", translation: "Qələm masanın üzərindədir (الْقَلَمُ عَلَى الطَّاوِلَةِ)." },
            { arabic: "لِمَاذَا «عَلَى»؟", translation: "Niyə \"عَلَى\"?" },
            { arabic: "لِأَنَّ الْقَلَمَ فَوْقَ الطَّاوِلَةِ.", translation: "Çünki qələm masanın üstündədir." }
        ]
    },
    {
        id: 32,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ؟ «ذَهَبْتُ ... الْبَيْتِ»؟", translation: "Nə deyirik? \"ذَهَبْتُ ... الْبَيْتِ\"?" },
            { arabic: "ذَهَبْتُ مِنَ الْبَيْتِ.", translation: "Evdən çıxdım / getdim (ذَهَبْتُ مِنَ الْبَيْتِ)." },
            { arabic: "مَاذَا نَقُولُ لِلْجِهَةِ؟", translation: "İstiqamət üçün nə deyirik?" },
            { arabic: "ذَهَبْتُ إِلَى الْمَسْجِدِ.", translation: "Məscidə getdim (ذَهَبْتُ إِلَى الْمَسْجِدِ)." }
        ]
    },
    {
        id: 33,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "هَلْ «فِي» حَرْفُ جَرٍّ؟", translation: "\"فِي\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «عَلَى» حَرْفُ جَرٍّ؟", translation: "\"عَلَى\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «مِنْ» حَرْفُ جَرٍّ؟", translation: "\"مِنْ\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «إِلَى» حَرْفُ جَرٍّ؟", translation: "\"إِلَى\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 34,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَا حُرُوفُ الْجَرِّ الَّتِي تَعَلَّمْنَاهَا؟", translation: "Öyrəndiyimiz hərfi-cərlər hansılardır?" },
            { arabic: "«فِي، عَلَى، مِنْ، إِلَى».", translation: "\"فِي, عَلَى, مِنْ, إِلَى\"." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Və nə deyirik?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Və nə deyirik?" },
            { arabic: "ذَهَبْتُ إِلَى الْمَسْجِدِ.", translation: "Məscidə getdim." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Və nə deyirik?" },
            { arabic: "جِئْتُ مِنَ الْبَيْتِ.", translation: "Evdən gəldim." }
        ]
    },
    {
        id: 35,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", translation: "Kitab çantadadır." },
            { arabic: "هَلِ الْحَقِيبَةُ عَلَى الطَّاوِلَةِ؟", translation: "Çanta masanın üzərindədirmi?" },
            { arabic: "نَعَمْ، الْحَقِيبَةُ عَلَى الطَّاوِلَةِ.", translation: "Bəli, çanta masanın üzərindədir." }
        ]
    },
    {
        id: 36,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ فِي الْحَقِيبَةِ.", translation: "Qələm çantadadır." },
            { arabic: "هَلِ الْقَلَمُ عَلَى الطَّاوِلَةِ؟", translation: "Qələm masanın üzərindədirmi?" },
            { arabic: "لَا، الْقَلَمُ فِي الْحَقِيبَةِ.", translation: "Xeyr, qələm çantadadır." }
        ]
    },
    {
        id: 37,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا مَفْتَاحٌ.", translation: "Bu, açardır." },
            { arabic: "أَيْنَ الْمِفْتَاحُ؟", translation: "Açar haradadır?" },
            { arabic: "الْمِفْتَاحُ عَلَى الطَّاوِلَةِ.", translation: "Açar masanın üzərindədir." },
            { arabic: "هَلِ الْمِفْتَاحُ فِي الْحَقِيبَةِ؟", translation: "Açar çantadadırmı?" },
            { arabic: "لَا، الْمِفْتَاحُ عَلَى الطَّاوِلَةِ.", translation: "Xeyr, açar masanın üzərindədir." }
        ]
    },
    {
        id: 38,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا؟", translation: "Bu haradandır?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." },
            { arabic: "هَلْ هٰذَا مِنَ الْفَصْلِ؟", translation: "Bu, sinifdəndirmi?" },
            { arabic: "لَا، هٰذَا مِنَ الْبَيْتِ.", translation: "Xeyr, bu, evdəndir." }
        ]
    },
    {
        id: 39,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." },
            { arabic: "هَلْ تَذْهَبُ إِلَى الْبَيْتِ؟", translation: "Evə gedirsənmi?" },
            { arabic: "لَا، أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Xeyr, məscidə gedirəm." }
        ]
    },
    {
        id: 40,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْفَصْلِ.", translation: "Kitab sinifdədir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "أَيْنَ الْمُعَلِّمُ؟", translation: "Müəllim haradadır?" },
            { arabic: "الْمُعَلِّمُ فِي الْفَصْلِ.", translation: "Müəllim sinifdədir." }
        ]
    },
    {
        id: 41,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "هَلْ هٰذَا قَلَمٌ؟", translation: "Bu, qələmdirmi?" },
            { arabic: "نَعَمْ، هٰذَا قَلَمٌ.", translation: "Bəli, bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْكِتَابِ.", translation: "Qələm kitabın üzərindədir." },
            { arabic: "هَلِ الْكِتَابُ عَلَى الطَّاوِلَةِ؟", translation: "Kitab masanın üzərindədirmi?" },
            { arabic: "نَعَمْ، الْكِتَابُ عَلَى الطَّاوِلَةِ.", translation: "Bəli, kitab masanın üzərindədir." }
        ]
    },
    {
        id: 42,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا مَكْتَبٌ.", translation: "Bu, masadır." },
            { arabic: "مَاذَا عَلَى الْمَكْتَبِ؟", translation: "Masanın üzərində nə var?" },
            { arabic: "الْكِتَابُ عَلَى الْمَكْتَبِ.", translation: "Kitab masanın üzərindədir." },
            { arabic: "وَأَيْنَ الْقَلَمُ؟", translation: "Bəs qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْكِتَابِ.", translation: "Qələm kitabın üzərindədir." }
        ]
    },
    {
        id: 43,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مِنْ أَيْنَ جِئْتَ؟", translation: "Haradan gəldin?" },
            { arabic: "جِئْتُ مِنَ الْبَيْتِ.", translation: "Evdən gəldim." },
            { arabic: "وَإِلَى أَيْنَ تَذْهَبُ؟", translation: "Bəs haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." },
            { arabic: "هَلْ تَذْهَبُ إِلَى الْفَصْلِ؟", translation: "Sinifə gedirsənmi?" },
            { arabic: "لَا، أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Xeyr, məscidə gedirəm." }
        ]
    },
    {
        id: 44,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", translation: "Kitab çantadadır." },
            { arabic: "وَأَيْنَ الْحَقِيبَةُ؟", translation: "Bəs çanta haradadır?" },
            { arabic: "الْحَقِيبَةُ عَلَى الْكُرْسِيِّ.", translation: "Çanta stulun üzərindədir." },
            { arabic: "مِنْ أَيْنَ جَاءَتِ الْحَقِيبَةُ؟", translation: "Çanta haradan gəldi?" },
            { arabic: "جَاءَتْ مِنَ الْبَيْتِ.", translation: "Evdən gəldi." },
            { arabic: "وَإِلَى أَيْنَ تَذْهَبُ الْحَقِيبَةُ؟", translation: "Bəs çanta haraya gedir?" },
            { arabic: "تَذْهَبُ إِلَى الْفَصْلِ.", translation: "Sinifə gedir." }
        ]
    },
    {
        id: 45,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ هُوَ جَدِيدٌ؟", translation: "O, yenidirmi?" },
            { arabic: "نَعَمْ، هُوَ جَدِيدٌ.", translation: "Bəli, o, yenidir." }
        ]
    },
    {
        id: 46,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ كَبِيرٌ.", translation: "Bu, böyük evdir." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هُوَ كَبِيرٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 47,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ جَمِيلٌ.", translation: "Bu, gözəl evdir." },
            { arabic: "هَلْ هُوَ جَمِيلٌ؟", translation: "O, gözəldirmi?" },
            { arabic: "نَعَمْ، هُوَ جَمِيلٌ.", translation: "Bəli, o, gözəldir." }
        ]
    },
    {
        id: 48,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir? (və ya Bu kimdir?)" },
            { arabic: "هٰذَا وَلَدٌ صَغِيرٌ.", translation: "Bu, balaca oğlandır." },
            { arabic: "هَلْ هُوَ صَغِيرٌ؟", translation: "O, balacadırmı?" },
            { arabic: "نَعَمْ، هُوَ صَغِيرٌ.", translation: "Bəli, o, balacadır." }
        ]
    },
    {
        id: 49,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "هَلْ هِيَ سَيَّارَةٌ؟", translation: "O, maşındırmı?" },
            { arabic: "نَعَمْ، هِيَ سَيَّارَةٌ.", translation: "Bəli, o, maşındır." }
        ]
    },
    {
        id: 50,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ مَدْرَسَةٌ.", translation: "Bu, məktəbdir." },
            { arabic: "هَلْ هِيَ مَدْرَسَةٌ؟", translation: "O, məktəbdirmi?" },
            { arabic: "نَعَمْ، هِيَ مَدْرَسَةٌ.", translation: "Bəli, o, məktəbdir." }
        ]
    },
    {
        id: 51,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ كَبِيرَةٌ.", translation: "Bu, böyük çantadır." },
            { arabic: "هَلْ هِيَ كَبِيرَةٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هِيَ كَبِيرَةٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 52,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ شَجَرَةٌ كَبِيرَةٌ.", translation: "Bu, böyük ağacdır." },
            { arabic: "هَلْ هِيَ كَبِيرَةٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هِيَ كَبِيرَةٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 53,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "مَا «جَدِيدٌ»؟", translation: "\"Yeni\" nədir?" },
            { arabic: "«جَدِيدٌ» صِفَةٌ.", translation: "\"Yeni\" sifətdir." },
            { arabic: "صِفَةُ مَاذَا؟", translation: "Nəyin sifətidir?" },
            { arabic: "صِفَةُ «كِتَابٍ».", translation: "\"Kitab\"ın sifətidir." }
        ]
    },
    {
        id: 54,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "أَيْنَ الصِّفَةُ فِي «بَيْتٌ كَبِيرٌ»؟", translation: "\"بَيْتٌ كَبِيرٌ\" (böyük ev) ifadəsində sifət haradadır?" },
            { arabic: "«كَبِيرٌ» صِفَةٌ.", translation: "\"كَبِيرٌ\" (böyük) sifətdir." },
            { arabic: "أَيْنَ الِاسْمُ؟", translation: "İsim haradadır?" },
            { arabic: "«بَيْتٌ» هُوَ الِاسْمُ.", translation: "\"بَيْتٌ\" (ev) isimdir." },
            { arabic: "أَيْنَ الصِّفَةُ؟", translation: "Sifət haradadır?" },
            { arabic: "«كَبِيرٌ» بَعْدَ الِاسْمِ.", translation: "\"كَبِيرٌ\" (böyük) isimdən sonradır." }
        ]
    },
    {
        id: 55,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ: «كِتَابٌ جَدِيدٌ» أَمْ «جَدِيدٌ كِتَابٌ»؟", translation: "Hansını deyirik: \"كِتَابٌ جَدِيدٌ\", yoxsa \"جَدِيدٌ كِتَابٌ\"?" },
            { arabic: "نَقُولُ: «كِتَابٌ جَدِيدٌ».", translation: "\"كِتَابٌ جَدِيدٌ\" deyirik." },
            { arabic: "أَيْنَ الصِّفَةُ؟", translation: "Sifət haradadır?" },
            { arabic: "بَعْدَ الِاسْمِ.", translation: "İsimdən sonradır." }
        ]
    },
    {
        id: 56,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ.", translation: "Bu, yeni maşındır." },
            { arabic: "مَا صِفَةُ «سَيَّارَةٌ»؟", translation: "\"Maşın\" sözünün sifəti nədir?" },
            { arabic: "«جَدِيدَةٌ».", translation: "\"جَدِيدَةٌ\" (yeni)." },
            { arabic: "هَلْ نَقُولُ «جَدِيدٌ»؟", translation: "\"جَدِيدٌ\" deyirikmi?" },
            { arabic: "لَا، نَقُولُ «جَدِيدَةٌ».", translation: "Xeyr, \"جَدِيدَةٌ\" deyirik." }
        ]
    },
    {
        id: 57,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ كَبِيرٌ.", translation: "Bu, böyük evdir." },
            { arabic: "هَلْ نَقُولُ «بَيْتٌ كَبِيرَةٌ»؟", translation: "\"بَيْتٌ كَبِيرَةٌ\" deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «بَيْتٌ كَبِيرٌ».", translation: "\"بَيْتٌ كَبِيرٌ\" deyirik." }
        ]
    },
    {
        id: 58,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ كَبِيرَةٌ.", translation: "Bu, böyük çantadır." },
            { arabic: "هَلْ نَقُولُ «حَقِيبَةٌ كَبِيرٌ»؟", translation: "\"حَقِيبَةٌ كَبِيرٌ\" deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «حَقِيبَةٌ كَبِيرَةٌ».", translation: "\"حَقِيبَةٌ كَبِيرَةٌ\" deyirik." }
        ]
    },
    {
        id: 59,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ «كِتَابٌ» مُذَكَّرٌ؟", translation: "\"Kitab\" müzəkkərdirmi (kişi cinsindədir)?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «جَدِيدٌ» مُذَكَّرٌ؟", translation: "\"Yeni\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "إِذَنْ؟", translation: "Deməli?" },
            { arabic: "الصِّفَةُ تُوَافِقُ الِاسْمَ.", translation: "Sifət ismə uyğunlaşır." }
        ]
    },
    {
        id: 60,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ.", translation: "Bu, yeni maşındır." },
            { arabic: "هَلْ «سَيَّارَةٌ» مُؤَنَّثٌ؟", translation: "\"Maşın\" müənnəsdirmi (qadın cinsindədir)?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «جَدِيدَةٌ» مُؤَنَّثٌ؟", translation: "\"Yeni\" müənnəsdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "إِذَنْ؟", translation: "Deməli?" },
            { arabic: "الصِّفَةُ تُوَافِقُ الِاسْمَ.", translation: "Sifət ismə uyğunlaşır." }
        ]
    },
    {
        id: 61,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا صِفَةُ «وَلَدٌ»؟", translation: "\"Oğlan\" sözünün sifəti nədir?" },
            { arabic: "صَغِيرٌ.", translation: "Balaca (صَغِيرٌ)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "وَلَدٌ صَغِيرٌ.", translation: "Balaca oğlan (وَلَدٌ صَغِيرٌ)." },
            { arabic: "وَمَا صِفَةُ «بِنْتٌ»؟", translation: "Bəs \"qız\" sözünün sifəti nədir?" },
            { arabic: "صَغِيرَةٌ.", translation: "Balaca (صَغِيرَةٌ)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "بِنْتٌ صَغِيرَةٌ.", translation: "Balaca qız (بِنْتٌ صَغِيرَةٌ)." }
        ]
    },
    {
        id: 62,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا الْقَاعِدَةُ؟", translation: "Qayda nədir?" },
            { arabic: "الصِّفَةُ تَأْتِي بَعْدَ الِاسْمِ.", translation: "Sifət ismdən sonra gəlir." },
            { arabic: "وَمَاذَا تَفْعَلُ الصِّفَةُ؟", translation: "Bəs sifət nə edir?" },
            { arabic: "تَصِفُ الِاسْمَ.", translation: "İsmi təsvir edir." },
            { arabic: "هَلْ تُوَافِقُ الصِّفَةُ الِاسْمَ؟", translation: "Sifət ismə uyğunlaşdırmı?" },
            { arabic: "نَعَمْ، تُوَافِقُهُ فِي التَّذْكِيرِ وَالتَّأْنِيثِ.", translation: "Bəli, cins baxımından (müzəkkərlik və müənnəslikdə) ismə uyğunlaşır." }
        ]
    },
    {
        id: 63,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هُوَ كَبِيرٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 64,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ جَمِيلٌ.", translation: "Bu, gözəl evdir." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "لَا، هُوَ صَغِيرٌ.", translation: "Xeyr, o, kiçikdir." }
        ]
    },
    {
        id: 65,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ صَغِيرٌ.", translation: "Bu, kiçik qələmdir." },
            { arabic: "هَلْ هُوَ جَدِيدٌ؟", translation: "O, yenidirmi?" },
            { arabic: "لَا، هُوَ قَدِيمٌ.", translation: "Xeyr, o, köhnədir." }
        ]
    },
    {
        id: 66,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ قَدِيمٌ.", translation: "Bu, köhnə qapıdır." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هُوَ كَبِيرٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 67,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ مَدْرَسَةٌ كَبِيرَةٌ.", translation: "Bu, böyük məktəbdir." },
            { arabic: "هَلْ هِيَ جَمِيلَةٌ؟", translation: "O, gözəldirmi?" },
            { arabic: "نَعَمْ، هِيَ جَمِيلَةٌ.", translation: "Bəli, o, gözəldir." }
        ]
    },
    {
        id: 68,
        title: "İsmin Cəmi (Plural Formaları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "مَا جَمْعُ كِتَابٍ؟", translation: "Kitab sözünün cəmi nədir?" },
            { arabic: "جَمْعُ كِتَابٍ: كُتُبٌ.", translation: "Kitab sözünün cəmi kitablardır." },
            { arabic: "هَلْ هٰذِهِ كُتُبٌ؟", translation: "Bunlar kitablardırmı?" },
            { arabic: "نَعَمْ، هٰذِهِ كُتُبٌ.", translation: "Bəli, bunlar kitablardır." }
        ]
    },
    {
        id: 69,
        title: "İsmin Cəmi (Plural Formaları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "مَا جَمْعُ بَيْتٍ؟", translation: "Ev sözünün cəmi nədir?" },
            { arabic: "جَمْعُ بَيْتٍ: بُيُوتٌ.", translation: "Ev sözünün cəmi evlərdir." },
            { arabic: "هَلْ هٰذِهِ بُيُوتٌ؟", translation: "Bunlar evlərdirmi?" },
            { arabic: "نَعَمْ، هٰذِهِ بُيُوتٌ.", translation: "Bəli, bunlar evlərdir." }
        ]
    },
    {
        id: 70,
        title: "İsmin Cəmi (Plural Formaları)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ غُرْفَةٌ.", translation: "Bu, otaqdır." },
            { arabic: "مَا جَمْعُ غُرْفَةٍ؟", translation: "Otaq sözünün cəmi nədir?" },
            { arabic: "جَمْعُ غُرْفَةٍ: غُرَفٌ.", translation: "Otaq sözünün cəmi otaqlardır." },
            { arabic: "هَلْ هٰذِهِ غُرَفٌ؟", translation: "Bunlar otaqlardırmı?" },
            { arabic: "نَعَمْ، هٰذِهِ غُرَفٌ.", translation: "Bəli, bunlar otaqlardır." }
        ]
    },
    {
        id: 71,
        title: "İsmin Cəmi (Plural Formaları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كُرْسِيٌّ.", translation: "Bu, stuldur." },
            { arabic: "مَا جَمْعُ كُرْسِيٍّ؟", translation: "Stul sözünün cəmi nədir?" },
            { arabic: "جَمْعُ كُرْسِيٍّ: كَرَاسِيُّ.", translation: "Stul sözünün cəmi stullardır." },
            { arabic: "هَلْ هٰذِهِ كَرَاسِيُّ؟", translation: "Bunlar stullardırmı?" },
            { arabic: "نَعَمْ، هٰذِهِ كَرَاسِيُّ.", translation: "Bəli, bunlar stullardır." }
        ]
    },
    {
        id: 72,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ كُتُبٌ.", translation: "Bunlar kitablardır." },
            { arabic: "لِمَاذَا نَقُولُ «هٰذِهِ»؟", translation: "Niyə həzihi deyirik?" },
            { arabic: "لِأَنَّ «كُتُبٌ» جَمْعٌ لِغَيْرِ الْعَاقِلِ.", translation: "Çünki kitablar cansız varlıqların cəmidir." },
            { arabic: "هَلْ «كُتُبٌ» مُؤَنَّثٌ؟", translation: "Kitablar qadın cinsindədir?" },
            { arabic: "نَعَمْ، جَمْعُ غَيْرِ الْعَاقِلِ يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Bəli, cansız varlıqların cəmi tək qadın cinsi kimi qəbul olunur." }
        ]
    },
    {
        id: 73,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ أَقْلَامٌ.", translation: "Bunlar qələmlərdir." },
            { arabic: "أَقْلَامٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "Qələmlər kişi cinsindədir, yoxsa qadın cinsində?" },
            { arabic: "أَقْلَامٌ جَمْعٌ لِغَيْرِ الْعَاقِلِ.", translation: "Qələmlər cansız varlıqların cəmidir." },
            { arabic: "وَجَمْعُ غَيْرِ الْعَاقِلِ يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Cansız varlıqların cəmi isə tək qadın cinsi kimi qəbul olunur." }
        ]
    },
    {
        id: 74,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ بُيُوتٌ.", translation: "Bunlar evlərdir." },
            { arabic: "هَلِ الْبُيُوتُ عَاقِلَةٌ؟", translation: "Evlər ağıl sahibidir?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "إِذَنْ كَيْفَ نُعَامِلُهَا؟", translation: "Onda onlarla necə davranırıq?" },
            { arabic: "نُعَامِلُ جَمْعَ غَيْرِ الْعَاقِلِ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Cansız varlıqların cəmi ilə tək qadın cinsi kimi davranırıq." }
        ]
    },
    {
        id: 75,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "وَمَا هٰذِهِ؟", translation: "Bəs bunlar nədir?" },
            { arabic: "هٰذِهِ سَيَّارَاتٌ.", translation: "Bunlar maşınlardır." },
            { arabic: "لِمَاذَا «هٰذِهِ»؟", translation: "Niyə həzihi?" },
            { arabic: "لِأَنَّ السَّيَّارَاتِ غَيْرُ عَاقِلَةٍ.", translation: "Çünki maşınlar cansız varlıqlardır." },
            { arabic: "وَمَاذَا نَقُولُ عَنْ جَمْعِ غَيْرِ الْعَاقِلِ؟", translation: "Bəs cansız varlıqların cəmi haqqında nə deyirik?" },
            { arabic: "نَقُولُ: هُوَ كَالْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Deyirik ki, o, tək qadın cinsi kimidir." }
        ]
    },
    {
        id: 76,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَنْ هٰذَا؟", translation: "Bu kimdir?" },
            { arabic: "هٰذَا رَجُلٌ.", translation: "Bu, kişidir." },
            { arabic: "مَنْ هٰؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هٰؤُلَاءِ رِجَالٌ.", translation: "Bunlar kişilərdir." },
            { arabic: "لِمَاذَا نَقُولُ «هٰؤُلَاءِ»؟", translation: "Niyə həuləi deyirik?" },
            { arabic: "لِأَنَّ الرِّجَالَ عَاقِلُونَ.", translation: "Çünki kişilər ağıl sahibidirlər." },
            { arabic: "وَهَلْ نَقُولُ «هٰذِهِ رِجَالٌ»؟", translation: "Bəs həzihi kişilər deyirikmi?" },
            { arabic: "لَا، نَقُولُ: هٰؤُلَاءِ رِجَالٌ.", translation: "Xeyr, həuləi kişilər deyirik." }
        ]
    },
    {
        id: 77,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." },
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ أَبْوَابٌ.", translation: "Bunlar qapılardır." },
            { arabic: "الْبَابُ مُذَكَّرٌ، أَلَيْسَ كَذٰلِك؟", translation: "Qapı kişi cinsidir, elə deyilmi?" },
            { arabic: "بَلَى.", translation: "Bəli." },
            { arabic: "فَلِمَاذَا قُلْنَا «هٰذِهِ»؟", translation: "Bəs niyə həzihi dedik?" },
            { arabic: "لِأَنَّ «أَبْوَابٌ» جَمْعٌ لِغَيْرِ الْعَاقِلِ.", translation: "Çünki qapılar cansız varlıqların cəmidir." }
        ]
    },
    {
        id: 78,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ غُرْفَةٌ.", translation: "Bu, otaqdır." },
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ غُرَفٌ.", translation: "Bunlar otaqlardır." },
            { arabic: "هَلْ «غُرَفٌ» مُفْرَدٌ؟", translation: "Otaqlar təkdir?" },
            { arabic: "لَا، هُوَ جَمْعٌ.", translation: "Xeyr, cəmdir." },
            { arabic: "هَلْ هُوَ جَمْعُ عَاقِلٍ؟", translation: "Ağıl sahibi olan cəmdir?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "إِذَنْ كَيْفَ نُعَامِلُهُ؟", translation: "Onda onunla necə davranırıq?" },
            { arabic: "نُعَامِلُهُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Tək qadın cinsi kimi davranırıq." }
        ]
    },
    {
        id: 79,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَنْ هٰذِهِ؟", translation: "Bu kimdir?" },
            { arabic: "هٰذِهِ بِنْتٌ.", translation: "Bu, qızdır." },
            { arabic: "مَنْ هٰؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هٰؤُلَاءِ بَنَاتٌ.", translation: "Bunlar qızlardır." },
            { arabic: "لِمَاذَا «هٰؤُلَاءِ»؟", translation: "Niyə həuləi?" },
            { arabic: "لِأَنَّ الْبَنَاتِ عَاقِلَاتٌ.", translation: "Çünki qızlar ağıl sahibidirlər." },
            { arabic: "وَمَا جَمْعُ غَيْرِ الْعَاقِلِ؟", translation: "Bəs cansız varlıqların cəmi necə qəbul edilir?" },
            { arabic: "يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Tək qadın cinsi kimi qəbul olunur." }
        ]
    },
    {
        id: 80,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كُرْسِيٌّ.", translation: "Bu, stuldur." },
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ كَرَاسِيُّ.", translation: "Bunlar stullardır." },
            { arabic: "هَلْ الْكَرَاسِيُّ عَاقِلَةٌ؟", translation: "Stullar ağıl sahibidir?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "إِذَنْ نَقُولُ: «هٰذِهِ كَرَاسِيُّ»؟", translation: "Onda həzihi stullar deyirik?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "لِأَنَّ جَمْعَ غَيْرِ الْعَاقِلِ يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Çünki cansız varlıqların cəmi tək qadın cinsi kimi qəbul olunur." }
        ]
    },
    {
        id: 81,
        title: "Qeyri-Əqli Cəmin Qaydası (Tək Qadın Cinsi Kimi)",
        dialogue: [
            { arabic: "مَا الْقَاعِدَةُ؟", translation: "Qayda nədir?" },
            { arabic: "جَمْعُ الْعَاقِلِ نُعَامِلُهُ عَلَى حَسَبِ الْجِنْسِ.", translation: "Ağıl sahibi olan cəmlə cinsinə görə davranırıq." },
            { arabic: "وَجَمْعُ غَيْرِ الْعَاقِلِ؟", translation: "Bəs cansız varlıqların cəmi ilə?" },
            { arabic: "نُعَامِلُهُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Onu tək qadın cinsi kimi qəbul edirik." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "هٰذِهِ كُتُبٌ. هٰذِهِ أَقْلَامٌ. هٰذِهِ بُيُوتٌ. هٰذِهِ سَيَّارَاتٌ.", translation: "Bunlar kitablardır. Bunlar qələmlərdir. Bunlar evlərdir. Bunlar maşınlardır." }
        ]
    },
    {
        id: 82,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "وَمَا ذٰلِكَ؟", translation: "Bəs o nədir?" },
            { arabic: "ذٰلِكَ كِتَابٌ قَدِيمٌ.", translation: "O, köhnə kitabdır." },
            { arabic: "أَيُّهُمَا قَرِيبٌ؟", translation: "Hansı yaxındır?" },
            { arabic: "هٰذَا قَرِيبٌ.", translation: "Bu yaxındır." },
            { arabic: "وَأَيُّهُمَا بَعِيدٌ؟", translation: "Bəs hansı uzaqdır?" },
            { arabic: "ذٰلِكَ بَعِيدٌ.", translation: "O uzaqdır." },
            { arabic: "وَمَا جَمْعُ كِتَابٍ؟", translation: "Kitab sözünün cəmi nədir?" },
            { arabic: "كُتُبٌ.", translation: "Kitablar." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Bəs nə deyirik?" },
            { arabic: "هٰذِهِ كُتُبٌ جَدِيدَةٌ.", translation: "Bunlar yeni kitablardır." }
        ]
    },
    {
        id: 83,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ جَمِيلَةٌ.", translation: "Bu, gözəl maşındır." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs o nədir?" },
            { arabic: "تِلْكَ سَيَّارَةٌ قَدِيمَةٌ.", translation: "O, köhnə maşındır." },
            { arabic: "أَيُّهُمَا جَدِيدَةٌ؟", translation: "Hansı yenidir?" },
            { arabic: "هٰذِهِ جَدِيدَةٌ.", translation: "Bu yenidir." },
            { arabic: "وَمَا جَمْعُ سَيَّارَةٍ؟", translation: "Maşın sözünün cəmi nədir?" },
            { arabic: "سَيَّارَاتٌ.", translation: "Maşınlar." },
            { arabic: "هَلْ نَقُولُ: «هٰذِهِ سَيَّارَاتٌ جَمِيلَاتٌ»؟", translation: "Bunlar gözəl maşınlardır deyərkən sifəti də cəmdə deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "هٰذِهِ سَيَّارَاتٌ جَمِيلَةٌ.", translation: "Bunlar gözəl maşınlardır." }
        ]
    },
    {
        id: 84,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا ذٰلِكَ؟", translation: "O nədir?" },
            { arabic: "ذٰلِكَ بَيْتٌ كَبِيرٌ.", translation: "O, böyük evdir." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs onlar nədir?" },
            { arabic: "تِلْكَ بُيُوتٌ كَبِيرَةٌ.", translation: "Onlar böyük evlərdir." },
            { arabic: "لِمَاذَا قُلْنَا «كَبِيرَةٌ»؟", translation: "Niyə tək qadın cinsində böyük dedik?" },
            { arabic: "لِأَنَّ «بُيُوتٌ» جَمْعٌ لِغَيْرِ الْعَاقِلِ.", translation: "Çünki evlər cansız varlıqların cəmidir." },
            { arabic: "وَكَيْفَ نُعَامِلُ جَمْعَ غَيْرِ الْعَاقِلِ؟", translation: "Bəs cansız varlıqların cəmi ilə necə davranırıq?" },
            { arabic: "نُعَامِلُهُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Tək qadın cinsi kimi davranırıq." },
            { arabic: "إِذَنْ؟", translation: "Deməli?" },
            { arabic: "تِلْكَ بُيُوتٌ كَبِيرَةٌ.", translation: "Onlar böyük evlərdir." }
        ]
    },
    {
        id: 85,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ صَغِيرٌ.", translation: "Bu, kiçik qələmdir." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs onlar nədir?" },
            { arabic: "تِلْكَ أَقْلَامٌ صَغِيرَةٌ.", translation: "Onlar kiçik qələmlərdir." },
            { arabic: "هَلْ الْأَقْلَامُ عَاقِلَةٌ؟", translation: "Qələmlər ağıl sahibidir?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "إِذَنْ لِمَاذَا قُلْنَا «صَغِيرَةٌ»؟", translation: "Onda niyə tək qadın cinsində kiçik dedik?" },
            { arabic: "لِأَنَّ الْأَقْلَامَ جَمْعٌ لِغَيْرِ الْعَاقِلِ.", translation: "Çünki qələmlər cansız varlıqların cəmidir." },
            { arabic: "وَهَلْ الْقَلَمُ صَغِيرٌ؟", translation: "Bəs qələm kiçikdir?" },
            { arabic: "نَعَمْ، الْقَلَمُ صَغِيرٌ.", translation: "Bəli, qələm kiçikdir." }
        ]
    },
    {
        id: 86,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَنْ هٰذَا؟", translation: "Bu kimdir?" },
            { arabic: "هٰذَا مُعَلِّمٌ.", translation: "Bu, müəllimdir." },
            { arabic: "وَمَنْ أُولَئِكَ؟", translation: "Bəs onlar kimdir?" },
            { arabic: "أُولَئِكَ مُعَلِّمُونَ.", translation: "Onlar müəllimlərdir." },
            { arabic: "هَلْ أُولَئِكَ قَرِيبُونَ؟", translation: "Onlar yaxındırlar?" },
            { arabic: "لَا، أُولَئِكَ بَعِيدُونَ.", translation: "Xeyr, onlar uzaqdadırlar." },
            { arabic: "هَلْ «مُعَلِّمُونَ» جَمْعُ عَاقِلٍ؟", translation: "Müəllimlər ağıl sahibi cəmdir?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "إِذَنْ هَلْ نَقُولُ «أُولَئِكَ مُعَلِّمُونَ جَدِيدَةٌ»؟", translation: "Onda onlar yeni müəllimlərdir deyəndə tək qadın cinsi işlədirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "أُولَئِكَ مُعَلِّمُونَ جُدُدٌ.", translation: "Onlar yeni müəllimlərdir." }
        ]
    },
    {
        id: 87,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ كَبِيرَةٌ.", translation: "Bu, böyük çantadır." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs onlar nədir?" },
            { arabic: "تِلْكَ حَقَائِبُ كَبِيرَةٌ.", translation: "Onlar böyük çantalardır." },
            { arabic: "هَلْ «حَقَائِبُ» مُفْرَدٌ؟", translation: "Çantalar təkdir?" },
            { arabic: "لَا، هِيَ جَمْعٌ.", translation: "Xeyr, cəmdir." },
            { arabic: "هَلْ هِيَ لِلْعَاقِلِ؟", translation: "Ağıl sahibi üçündür?" },
            { arabic: "لَا، لِغَيْرِ الْعَاقِلِ.", translation: "Xeyr, cansız varlıq üçündür." },
            { arabic: "إِذَنْ كَيْفَ نَقُولُ الصِّفَةَ؟", translation: "Onda sifəti necə deyirik?" },
            { arabic: "نَقُولُ: كَبِيرَةٌ.", translation: "Tək qadın cinsində böyük deyirik." }
        ]
    },
    {
        id: 88,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا ذٰلِكَ؟", translation: "O nədir?" },
            { arabic: "ذٰلِكَ بَابٌ قَدِيمٌ.", translation: "O, köhnə qapıdır." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs onlar nədir?" },
            { arabic: "تِلْكَ أَبْوَابٌ قَدِيمَةٌ.", translation: "Onlar köhnə qapılardır." },
            { arabic: "لِمَاذَا «تِلْكَ»؟", translation: "Niyə tilkə?" },
            { arabic: "لِأَنَّ الْأَبْوَابَ جَمْعٌ لِغَيْرِ الْعَاقِلِ وَهِيَ بَعِيدَةٌ.", translation: "Çünki qapılar cansız varlıqların cəmidir və uzaqdadır." },
            { arabic: "وَلِمَاذَا «قَدِيمَةٌ»؟", translation: "Bəs niyə tək qadın cinsində köhnə dedik?" },
            { arabic: "لِأَنَّ الصِّفَةَ مَعَ جَمْعِ غَيْرِ الْعَاقِلِ تَكُونُ مُؤَنَّثَةً مُفْرَدَةً.", translation: "Çünki cansız varlıqların cəmi ilə sifət tək qadın cinsində olur." }
        ]
    },
    {
        id: 89,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَنْ هٰؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هٰؤُلَاءِ أَوْلَادٌ صِغَارٌ.", translation: "Bunlar balaca uşaqlardır." },
            { arabic: "وَمَنْ أُولَئِكَ؟", translation: "Bəs onlar kimdir?" },
            { arabic: "أُولَئِكَ أَوْلَادٌ كِبَارٌ.", translation: "Onlar böyük uşaqlardır." },
            { arabic: "هَلْ الْأَوْلَادُ عَاقِلُونَ؟", translation: "Uşaqlar ağıl sahibidirlər?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "إِذَنْ هَلْ الصِّفَةُ مُؤَنَّثَةٌ؟", translation: "Onda sifət qadın cinsində olur?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ الْجَمْعَ لِلْعَاقِلِ يُوَافِقُ الصِّفَةَ.", translation: "Çünki ağıl sahibi olan cəm olduqda sifət cəmlə uyğunlaşır." }
        ]
    },
    {
        id: 90,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ غُرْفَةٌ جَمِيلَةٌ.", translation: "Bu, gözəl otaqdır." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs onlar nədir?" },
            { arabic: "تِلْكَ غُرَفٌ جَمِيلَةٌ.", translation: "Onlar gözəl otaqlardır." },
            { arabic: "هَلْ «غُرَفٌ» عَاقِلَةٌ؟", translation: "Otaqlar ağıl sahibidir?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "فَلِمَاذَا نَقُولُ «جَمِيلَةٌ»؟", translation: "Bəs niyə tək qadın cinsində gözəl deyirik?" },
            { arabic: "لِأَنَّ جَمْعَ غَيْرِ الْعَاقِلِ يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Çünki cansız varlıqların cəmi tək qadın cinsi kimi qəbul olunur." },
            { arabic: "وَلِمَاذَا «تِلْكَ»؟", translation: "Bəs niyə tilkə?" },
            { arabic: "لِأَنَّ الْغُرَفَ بَعِيدَةٌ.", translation: "Çünki otaqlar uzaqdadır." }
        ]
    },
    {
        id: 91,
        title: "Yaxın/Uzaq İşarə Əvəzlikləri və Cəm Sifəti",
        dialogue: [
            { arabic: "مَا الْفَرْقُ بَيْنَ هٰذَا وَذٰلِكَ؟", translation: "Həzə ilə zalikə arasında nə fərq var?" },
            { arabic: "هٰذَا لِلْقَرِيبِ، وَذٰلِكَ لِلْبَعِيدِ.", translation: "Həzə yaxın üçün, zalikə uzaq üçündür." },
            { arabic: "وَمَا الْفَرْقُ بَيْنَ هٰذِهِ وَتِلْكَ؟", translation: "Bəs həzihi ilə tilkə arasında nə fərq var?" },
            { arabic: "هٰذِهِ لِلْقَرِيبِ، وَتِلْكَ لِلْبَعِيدِ.", translation: "Həzihi yaxın üçün, tilkə uzaq üçündür." },
            { arabic: "وَمَاذَا نَقُولُ لِلْجَمْعِ الْعَاقِلِ؟", translation: "Bəs ağıl sahibi olan cəm üçün nə deyirik?" },
            { arabic: "هٰؤُلَاءِ لِلْقَرِيبِ، وَأُولَئِكَ لِلْبَعِيدِ.", translation: "Yaxın üçün həuləi, uzaq üçün uləikə." },
            { arabic: "وَمَاذَا عَنْ جَمْعِ غَيْرِ الْعَاقِلِ؟", translation: "Bəs cansız varlıqların cəmi üçün nə deyirik?" },
            { arabic: "نَقُولُ: هٰذِهِ لِلْقَرِيبِ، وَتِلْكَ لِلْبَعِيدِ.", translation: "Yaxın üçün həzihi, uzaq üçün tilkə deyirik." },
            { arabic: "وَكَيْفَ تَكُونُ صِفَتُهُ؟", translation: "Bəs onun sifəti necə olur?" },
            { arabic: "تَكُونُ مُؤَنَّثَةً مُفْرَدَةً.", translation: "Tək qadın cinsində olur." },
            { arabic: "مِثَالًا؟", translation: "Məsələn?" },
            { arabic: "هٰذِهِ كُتُبٌ جَدِيدَةٌ، وَتِلْكَ بُيُوتٌ كَبِيرَةٌ.", translation: "Bunlar yeni kitablardır və onlar böyük evlərdir." }
        ]
    },
    {
        id: 92,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "وَمَا هٰذَا؟", translation: "Bəs bu nədir?" },
            { arabic: "هٰذَا الْكِتَابُ.", translation: "Bu, məhz o kitabdır." },
            { arabic: "مَا الْفَرْقُ بَيْنَ «كِتَابٌ» وَ«الْكِتَابُ»؟", translation: "Kitabun ilə Əl-kitab arasında nə fərq var?" },
            { arabic: "«كِتَابٌ» نَكِرَةٌ، وَ«الْكِتَابُ» مَعْرِفَةٌ.", translation: "Kitabun qeyri-müəyyəndir, Əl-kitab isə müəyyəndir." },
            { arabic: "وَلِمَاذَا وَضَعْنَا «الـ»؟", translation: "Bəs niyə əl artıqdıq?" },
            { arabic: "لِأَنَّنَا نُرِيدُ كِتَابًا مُعَيَّنًا.", translation: "Çünki biz müəyyən bir kitabı nəzərdə tuturuq." }
        ]
    },
    {
        id: 93,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "هَلِ الْبَيْتُ كَبِيرٌ؟", translation: "Ev böyükdür?" },
            { arabic: "نَعَمْ، الْبَيْتُ كَبِيرٌ.", translation: "Bəli, ev böyükdür." },
            { arabic: "لِمَاذَا قُلْنَا «بَيْتٌ» أَوَّلًا، ثُمَّ قُلْنَا «الْبَيْتُ»؟", translation: "Niyə əvvəl ev, sonra o ev dedik?" },
            { arabic: "لِأَنَّنَا فِي الْجُمْلَةِ الْأُولَى نَذْكُرُ بَيْتًا غَيْرَ مُعَيَّنٍ، وَفِي الثَّانِيَةِ نَتَكَلَّمُ عَنْ بَيْتٍ مُعَيَّنٍ.", translation: "Çünki birinci cümlədə müəyyən olmayan bir evdən danışırıq, ikincidə isə konkret bir evdən danışırıq." }
        ]
    },
    {
        id: 94,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "وَهَلِ السَّيَّارَةُ جَدِيدَةٌ؟", translation: "Bəs maşın yenidir?" },
            { arabic: "نَعَمْ، السَّيَّارَةُ جَدِيدَةٌ.", translation: "Bəli, maşın yenidir." },
            { arabic: "أَيْنَ «الـ»؟", translation: "Əl hara getdi?" },
            { arabic: "فِي أَوَّلِ كَلِمَةِ «السَّيَّارَةِ».", translation: "Əs-səyyaratu sözünün əvvəlindədir." },
            { arabic: "وَهَلْ نَقُولُ «الْسَّيَّارَةُ»؟", translation: "Bəs Əl-səyyaratu deyirik?" },
            { arabic: "لَا، نَقُولُ «السَّيَّارَةُ».", translation: "Xeyr, Əs-səyyaratu deyirik." }
        ]
    },
    {
        id: 95,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ جَدِيدٌ.", translation: "Bu, yeni qələmdir." },
            { arabic: "وَإِذَا كُنْتُ أَعْرِفُ الْقَلَمَ، فَمَاذَا نَقُولُ؟", translation: "Bəs qələmi tanıyıramsa, nə deyirik?" },
            { arabic: "نَقُولُ: هٰذَا الْقَلَمُ الْجَدِيدُ.", translation: "Bu, həmin yeni qələmdir deyirik." },
            { arabic: "لِمَاذَا أَضَفْنَا «الـ» إِلَى «جَدِيدٌ» أَيْضًا؟", translation: "Niyə yeni sözünə də əl artırdıq?" },
            { arabic: "لِأَنَّ الصِّفَةَ تَتْبَعُ الْمَوْصُوفَ فِي التَّعْرِيفِ وَالتَّنْكِيرِ.", translation: "Çünki sifət müəyyənlikdə və qeyri-müəyyənlikdə təyin etdiyi ismə tabe olur." }
        ]
    },
    {
        id: 96,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا تِلْكَ؟", translation: "O nədir?" },
            { arabic: "تِلْكَ حَقِيبَةٌ كَبِيرَةٌ.", translation: "O, böyük çantadır." },
            { arabic: "هَلِ الْحَقِيبَةُ الْكَبِيرَةُ جَدِيدَةٌ؟", translation: "Böyük çanta yenidir?" },
            { arabic: "نَعَمْ، الْحَقِيبَةُ الْكَبِيرَةُ جَدِيدَةٌ.", translation: "Bəli, böyük çanta yenidir." },
            { arabic: "مَاذَا حَدَثَ لِـ«كَبِيرَةٌ»؟", translation: "Böyük sözünə nə oldu?" },
            { arabic: "صَارَتْ «الْكَبِيرَةُ».", translation: "Müəyyən formaya keçdi." },
            { arabic: "وَلِمَاذَا؟", translation: "Bəs niyə?" },
            { arabic: "لِأَنَّ «الْحَقِيبَةَ» مَعْرِفَةٌ.", translation: "Çünki çanta sözü müəyyəndir." }
        ]
    },
    {
        id: 97,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bunlar nədir?" },
            { arabic: "هٰذِهِ كُتُبٌ جَدِيدَةٌ.", translation: "Bunlar yeni kitablardır." },
            { arabic: "هَلْ هٰذِهِ الْكُتُبُ الْجَدِيدَةُ؟", translation: "Bunlar həmin yeni kitablardır?" },
            { arabic: "نَعَمْ، هٰذِهِ الْكُتُبُ الْجَدِيدَةُ.", translation: "Bəli, bunlar həmin yeni kitablardır." },
            { arabic: "لِمَاذَا قُلْنَا «هٰذِهِ» مَعَ «كُتُبٍ»؟", translation: "Niyə kitablar sözü ilə həzihi dedik?" },
            { arabic: "لِأَنَّ «كُتُبٌ» جَمْعُ غَيْرِ الْعَاقِلِ.", translation: "Çünki kitablar cansız varlıqların cəmidir." },
            { arabic: "وَكَيْفَ نُعَامِلُهُ؟", translation: "Bəs onunla necə davranırıq?" },
            { arabic: "نُعَامِلُهُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Tək qadın cinsi kimi davranırıq." }
        ]
    },
    {
        id: 98,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا تِلْكَ؟", translation: "Onlar nədir?" },
            { arabic: "تِلْكَ أَبْوَابٌ قَدِيمَةٌ.", translation: "Onlar köhnə qapılardır." },
            { arabic: "هَلْ نَقُولُ «أَبْوَابٌ قَدِيمُونَ»؟", translation: "Bəs köhnə sözünü cəmdə deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ «أَبْوَابٌ» جَمْعُ غَيْرِ الْعَاقِلِ.", translation: "Çünki qapılar cansız varlıqların cəmidir." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Bəs nə deyirik?" },
            { arabic: "نَقُولُ: أَبْوَابٌ قَدِيمَةٌ.", translation: "Tək qadın cinsində köhnə qapılar deyirik." }
        ]
    },
    {
        id: 99,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَنْ هٰؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هٰؤُلَاءِ مُعَلِّمُونَ جُدُدٌ.", translation: "Bunlar yeni müəllimlərdir." },
            { arabic: "وَمَنْ أُولَئِكَ؟", translation: "Bəs onlar kimdir?" },
            { arabic: "أُولَئِكَ مُعَلِّمُونَ قُدَمَاءُ.", translation: "Onlar köhnə müəllimlərdir." },
            { arabic: "لِمَاذَا قُلْنَا «جُدُدٌ» وَ«قُدَمَاءُ»؟", translation: "Niyə sifətləri cəmdə dedik?" },
            { arabic: "لِأَنَّ «مُعَلِّمُونَ» جَمْعُ عَاقِلٍ، وَالصِّفَةُ تُوَافِقُهُ.", translation: "Çünki müəllimlər insan cəmidir və sifət də ona uyğunlaşır." }
        ]
    },
    {
        id: 100,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "هٰذَا كِتَابٌ. هَلْ هٰذَا الْكِتَابُ جَدِيدٌ؟", translation: "Bu, kitabdır. Bu kitab yenidir?" },
            { arabic: "نَعَمْ، هٰذَا الْكِتَابُ جَدِيدٌ.", translation: "Bəli, bu kitab yenidir." },
            { arabic: "وَهٰذِهِ حَقِيبَةٌ. هَلْ هٰذِهِ الْحَقِيبَةُ كَبِيرَةٌ؟", translation: "Bəs bu, çantadır. Bu çanta böyükdür?" },
            { arabic: "نَعَمْ، هٰذِهِ الْحَقِيبَةُ كَبِيرَةٌ.", translation: "Bəli, bu çanta böyükdür." },
            { arabic: "مَاذَا تَعَلَّمْنَا الْيَوْمَ؟", translation: "Bu gün nə öyrəndik?" },
            { arabic: "تَعَلَّمْنَا «الـ».", translation: "Əl şəkilçisini öyrəndik." },
            { arabic: "وَمَاذَا تَفْعَلُ «الـ»؟", translation: "Bəs əl nə edir?" },
            { arabic: "تُعَرِّفُ الِاسْمَ.", translation: "İsmi müəyyən edir." }
        ]
    },
    {
        id: 101,
        title: "Əl - Müəyyənlik Artikli",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "وَإِذَا كُنَّا نَعْرِفُهُ؟", translation: "Bəs onu tanıyırıqsa?" },
            { arabic: "هٰذَا الْكِتَابُ.", translation: "Bu, həmin kitabdır." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs o nədir?" },
            { arabic: "تِلْكَ حَقِيبَةٌ.", translation: "O, çantadır." },
            { arabic: "وَإِذَا كُنَّا نَعْرِفُهَا؟", translation: "Bəs onu tanıyırıqsa?" },
            { arabic: "تِلْكَ الْحَقِيبَةُ.", translation: "O, həmin çantadır." },
            { arabic: "وَمَا هٰذِهِ؟", translation: "Bəs bunlar nədir?" },
            { arabic: "هٰذِهِ كُتُبٌ جَدِيدَةٌ.", translation: "Bunlar yeni kitablardır." },
            { arabic: "وَإِذَا كُنَّا نَعْرِفُهَا؟", translation: "Bəs onları tanıyırıqsa?" },
            { arabic: "هٰذِهِ الْكُتُبُ الْجَدِيدَةُ.", translation: "Bunlar həmin yeni kitablardır." },
            { arabic: "مُمْتَازٌ! مَاذَا تَعَلَّمْتَ؟", translation: "Əla! Nə öyrəndin?" },
            { arabic: "تَعَلَّمْتُ أَنَّ «الـ» تُعَرِّفُ الِاسْمَ، وَأَنَّ الصِّفَةَ تَتْبَعُ الِاسْمَ فِي التَّعْرِيفِ وَالتَّنْكِيرِ.", translation: "Öyrəndim ki, əl şəkilçisi ismi müəyyən edir və sifət də müəyyənlikdə və qeyri-müəyyənlikdə ismə tabe olur." }
        ]
    },
    {
        id: 102,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "أَنْظُرْ إِلَى السَّبُّورَةِ.", translation: "Lövhəyə bax." },
            { arabic: "حَسَنًا.", translation: "Yaxşı." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "وَمَا هٰذَا؟", translation: "Bəs bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ آخَرُ.", translation: "Bu da başqa bir kitabdır." },
            { arabic: "وَالْآنَ، مَا هٰذَانِ؟", translation: "İndi isə, bu ikisi nədir?" },
            { arabic: "هٰذَا كِتَابَانِ.", translation: "Bu, iki kitabdır." },
            { arabic: "أَخْطَأْتَ!", translation: "Səhv etdin!" },
            { arabic: "أَيْنَ الْخَطَأُ؟", translation: "Səhv haradadır?" },
            { arabic: "نَقُولُ: هَذَانِ كِتَابَانِ.", translation: "Deyirik ki, bu ikisi iki kitabdır." },
            { arabic: "فَهِمْتُ! لِلِاثْنَيْنِ نَقُولُ: هَذَانِ.", translation: "Anladım! İki şey üçün həzani deyirik." }
        ]
    },
    {
        id: 103,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "وَإِذَا كَانَ عِنْدَنَا قَلَمَانِ؟", translation: "Bəs iki qələmimiz olsa?" },
            { arabic: "هَذَانِ قَلَمَانِ.", translation: "Bu ikisi iki qələmdir." },
            { arabic: "وَإِذَا كَانَ عِنْدَنَا ثَلَاثَةُ أَقْلَامٍ؟", translation: "Bəs üç qələmimiz olsa?" },
            { arabic: "هٰذِهِ أَقْلَامٌ.", translation: "Bunlar qələmlərdir." },
            { arabic: "لِمَاذَا قُلْنَا «هٰذِهِ»؟", translation: "Niyə həzihi dedik?" },
            { arabic: "لِأَنَّ «أَقْلَامٌ» جَمْعُ غَيْرِ الْعَاقِلِ.", translation: "Çünki qələmlər cansız varlıqların cəmidir." },
            { arabic: "مُمْتَازٌ!", translation: "Əla!" }
        ]
    },
    {
        id: 104,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "سَأَسْأَلُكَ، وَأَنْتَ أَجِبْ بِسُرْعَةٍ!", translation: "Sənə sual verəcəyəm, sən də tez cavab ver!" },
            { arabic: "حَسَنًا!", translation: "Yaxşı!" },
            { arabic: "شَيْءٌ وَاحِدٌ: كِتَابٌ. مَاذَا نَقُولُ؟", translation: "Tək bir şey, kitab. Nə deyirik?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "شَيْئَانِ: كِتَابٌ وَكِتَابٌ.", translation: "İki şey, kitab və kitab." },
            { arabic: "هَذَانِ كِتَابَانِ.", translation: "Bu ikisi iki kitabdır." },
            { arabic: "ثَلَاثَةُ كُتُبٍ.", translation: "Üç kitab." },
            { arabic: "هٰذِهِ كُتُبٌ.", translation: "Bunlar kitablardır." },
            { arabic: "أَحْسَنْتَ!", translation: "Afərin!" }
        ]
    },
    {
        id: 105,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "وَمَا هَاتَانِ؟", translation: "Bəs bu ikisi nədir?" },
            { arabic: "هَاتَانِ سَيَّارَتَانِ.", translation: "Bu ikisi iki maşındır." },
            { arabic: "مَاذَا حَدَثَ لِـ«هٰذِهِ»؟", translation: "Həzihi sözünə nə oldu?" },
            { arabic: "صَارَتْ «هَاتَانِ»؛ لِأَنَّ السَّيَّارَةَ مُفْرَدٌ مُؤَنَّثٌ، وَالسَّيَّارَتَانِ مُثَنًّى مُؤَنَّثٌ.", translation: "Hətani oldu. Çünki maşın tək qadın cinsidir, iki maşın isə ikili qadın cinsidir." },
            { arabic: "وَالْمُذَكَّرُ؟", translation: "Bəs kişi cinsi?" },
            { arabic: "هَذَا لِلْمُفْرَدِ، وَهَذَانِ لِلْمُثَنَّى.", translation: "Tək üçün həzə, ikili üçün həzani işlənir." }
        ]
    },
    {
        id: 106,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "اِخْتَرْ: «هٰذَا» أَمْ «هَذَانِ».", translation: "Seç, həzə, yoxsa həzani." },
            { arabic: "حَسَنًا.", translation: "Yaxşı." },
            { arabic: "ــــــ وَلَدٌ.", translation: "... oğlan." },
            { arabic: "هٰذَا وَلَدٌ.", translation: "Bu, oğlandır." },
            { arabic: "ــــــ وَلَدَانِ.", translation: "... iki oğlan." },
            { arabic: "هَذَانِ وَلَدَانِ.", translation: "Bu ikisi iki oğlandır." },
            { arabic: "ــــــ بَيْتٌ.", translation: "... ev." },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "ــــــ بَيْتَانِ.", translation: "... iki ev." },
            { arabic: "هَذَانِ بَيْتَانِ.", translation: "Bu ikisi iki evdir." }
        ]
    },
    {
        id: 107,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "لِمَاذَا نَقُولُ «هَذَانِ كِتَابَانِ»؟", translation: "Niyə iki kitab üçün həzani deyirik?" },
            { arabic: "لِأَنَّ عِنْدَنَا كِتَابَيْنِ.", translation: "Çünki göstərdiyimiz iki dənədir." },
            { arabic: "وَإِذَا كَانَ كِتَابًا وَاحِدًا؟", translation: "Bəs tək bir kitab olsa?" },
            { arabic: "نَقُولُ: هٰذَا كِتَابٌ.", translation: "Deyirik ki, bu, kitabdır." },
            { arabic: "وَإِذَا كَانَتْ حَقِيبَتَيْنِ؟", translation: "Bəs iki çanta olsa?" },
            { arabic: "نَقُولُ: هَاتَانِ حَقِيبَتَانِ.", translation: "Deyirik ki, bu ikisi iki çantadır." },
            { arabic: "إِذًا عِنْدَنَا: مُفْرَدٌ وَمُثَنًّى وَجَمْعٌ.", translation: "Deməli bizdə tək, ikili və cəm formaları var." },
            { arabic: "نَعَمْ، أَحْسَنْتَ!", translation: "Bəli, afərin!" }
        ]
    },
    {
        id: 108,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "هٰذَا الْكِتَابُ.", translation: "Bu, kitabdır." },
            { arabic: "وَأَيْنَ الْكِتَابَانِ؟", translation: "Bəs iki kitab haradadır?" },
            { arabic: "هَذَانِ الْكِتَابَانِ.", translation: "Bu ikisi iki kitabdır." },
            { arabic: "وَأَيْنَ الْكُتُبُ؟", translation: "Bəs kitablar haradadır?" },
            { arabic: "هٰذِهِ الْكُتُبُ.", translation: "Bunlar kitablardır." },
            { arabic: "مَا الْفَرْقُ؟", translation: "Fərq nədir?" },
            { arabic: "كِتَابٌ وَاحِدٌ: هٰذَا، وَكِتَابَانِ: هَذَانِ، وَكُتُبٌ: هٰذِهِ.", translation: "Tək kitab üçün həzə, iki kitab üçün həzani, kitablar üçün isə həzihi işlənir." }
        ]
    },
    {
        id: 109,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "مَاذَا تُرِيدُ؟", translation: "Nə istəyirsən?" },
            { arabic: "أُرِيدُ قَلَمًا.", translation: "Bir qələm istəyirəm." },
            { arabic: "هٰذَا قَلَمٌ جَيِّدٌ.", translation: "Bu, yaxşı qələmdir." },
            { arabic: "أُرِيدُ قَلَمَيْنِ.", translation: "İki qələm istəyirəm." },
            { arabic: "هَذَانِ قَلَمَانِ جَيِّدَانِ.", translation: "Bu ikisi iki yaxşı qələmdir." },
            { arabic: "وَلِمَاذَا قُلْتَ «جَيِّدَانِ»؟", translation: "Bəs niyə yaxşı sözünü də ikili formada dedin?" },
            { arabic: "لِأَنَّ الصِّفَةَ تَتْبَعُ الْمَوْصُوفَ.", translation: "Çünki sifət təyin etdiyi ismə tabe olur." },
            { arabic: "إِذًا الْمُثَنَّى لَهُ صِفَةٌ مُثَنًّى أَيْضًا؟", translation: "Deməli ikili ismin sifəti də ikili olur?" },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 110,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "هَذَانِ سَيَّارَتَانِ.", translation: "Bu ikisi iki maşındır deyərkən həzani işlətdim." },
            { arabic: "لَا، هٰذَا خَطَأٌ.", translation: "Xeyr, bu səhvdir." },
            { arabic: "كَيْفَ نَقُولُ؟", translation: "Necə deyirik?" },
            { arabic: "نَقُولُ: هَاتَانِ سَيَّارَتَانِ.", translation: "Deyirik ki, bu ikisi iki maşındır, amma hətani ilə." },
            { arabic: "وَلِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ «سَيَّارَةٌ» مُؤَنَّثٌ.", translation: "Çünki maşın qadın cinsindədir." },
            { arabic: "وَإِذَا قُلْتُ: هَذَانِ قَلَمَانِ؟", translation: "Bəs iki qələm üçün həzani desəm?" },
            { arabic: "صَحِيحٌ؛ لِأَنَّ «قَلَمٌ» مُذَكَّرٌ.", translation: "Düzdür, çünki qələm kişi cinsindədir." }
        ]
    },
    {
        id: 111,
        title: "Müsənna (İkilik Forması)",
        dialogue: [
            { arabic: "مَاذَا تَعَلَّمْنَا؟", translation: "Nələr öyrəndik?" },
            { arabic: "تَعَلَّمْنَا أَنَّ «هٰذَا» لِلْمُفْرَدِ الْمُذَكَّرِ.", translation: "Öyrəndik ki, həzə tək kişi cinsi üçündür." },
            { arabic: "وَ«هٰذِهِ»؟", translation: "Bəs həzihi?" },
            { arabic: "لِلْمُفْرَدِ الْمُؤَنَّثِ، وَجَمْعِ غَيْرِ الْعَاقِلِ.", translation: "Tək qadın cinsi və cansız varlıqların cəmi üçündür." },
            { arabic: "وَ«هَذَانِ»؟", translation: "Bəs həzani?" },
            { arabic: "لِلْمُثَنَّى الْمُذَكَّرِ.", translation: "İkili kişi cinsi üçündür." },
            { arabic: "وَ«هَاتَانِ»؟", translation: "Bəs hətani?" },
            { arabic: "لِلْمُثَنَّى الْمُؤَنَّثِ.", translation: "İkili qadın cinsi üçündür." },
            { arabic: "وَمَاذَا عَنْ «الـ»؟", translation: "Bəs əl şəkilçisi haqqında nə deyə bilərsən?" },
            { arabic: "«الـ» تُعَرِّفُ الِاسْمَ.", translation: "Əl şəkilçisi ismi müəyyən edir." },
            { arabic: "وَالصِّفَةُ؟", translation: "Bəs sifət?" },
            { arabic: "الصِّفَةُ تَتْبَعُ الِاسْمَ فِي التَّذْكِيرِ وَالتَّأْنِيثِ، وَالْإِفْرَادِ وَالتَّثْنِيَةِ وَالْجَمْعِ.", translation: "Sifət ismə cinsdə, təklikdə, ikilikdə və cəmlikdə tabe olur." },
            { arabic: "مُمْتَازٌ!", translation: "Əla!" }
        ]
    },
    {
        id: 112,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "وَمَا هَذَانِ؟", translation: "Bəs bu ikisi nədir?" },
            { arabic: "هَذَانِ كِتَابَانِ جَدِيدَانِ.", translation: "Bu ikisi iki yeni kitabdır." },
            { arabic: "لِمَاذَا قُلْتَ «جَدِيدَانِ»؟", translation: "Niyə yeni sözünü də ikili dedin?" },
            { arabic: "لِأَنَّ «كِتَابَانِ» مُثَنًّى.", translation: "Çünki iki kitab sözü ikilidir." },
            { arabic: "أَحْسَنْتَ! الصِّفَةُ تَتْبَعُ الْمَوْصُوفَ.", translation: "Afərin! Sifət təyin etdiyi ismə tabe olur." }
        ]
    },
    {
        id: 113,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "هَذَانِ قَلَمَانِ جَدِيدٌ.", translation: "Bu ikisi iki yeni qələmdir deyəndə sifəti tək dedilər." },
            { arabic: "هُنَا خَطَأٌ.", translation: "Burada səhv var." },
            { arabic: "مَا الْخَطَأُ؟", translation: "Səhv nədir?" },
            { arabic: "«قَلَمَانِ» مُثَنًّى، فَمَاذَا نَقُولُ؟", translation: "İki qələm sözü ikilidir, bəs nə deyirik?" },
            { arabic: "نَقُولُ: هَذَانِ قَلَمَانِ جَدِيدَانِ.", translation: "Deyirik ki, bu ikisi iki yeni qələmdir." },
            { arabic: "صَحِيحٌ.", translation: "Düzdür." }
        ]
    },
    {
        id: 114,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "وَاحِدٌ أَمْ اثْنَانِ؟", translation: "Bir, yoxsa iki?" },
            { arabic: "اثْنَانِ.", translation: "İki." },
            { arabic: "كِتَابٌ أَمْ كِتَابَانِ؟", translation: "Kitab, yoxsa iki kitab?" },
            { arabic: "كِتَابَانِ.", translation: "İki kitab." },
            { arabic: "جَدِيدٌ أَمْ جَدِيدَانِ؟", translation: "Yeni, yoxsa iki yeni?" },
            { arabic: "جَدِيدَانِ.", translation: "İki yeni." },
            { arabic: "وَمَا الْجُمْلَةُ؟", translation: "Bəs cümlə necədir?" },
            { arabic: "هَذَانِ كِتَابَانِ جَدِيدَانِ.", translation: "Bu ikisi iki yeni kitabdır." }
        ]
    },
    {
        id: 115,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "مَا هَاتَانِ؟", translation: "Bu ikisi nədir?" },
            { arabic: "هَاتَانِ حَقِيبَتَانِ.", translation: "Bu ikisi iki çantadır." },
            { arabic: "هَلْ هُمَا جَدِيدَتَانِ؟", translation: "Onlar yenidir?" },
            { arabic: "نَعَمْ، هُمَا جَدِيدَتَانِ.", translation: "Bəli, onlar yenidir." },
            { arabic: "لِمَاذَا قُلْنَا «جَدِيدَتَانِ» وَلَمْ نَقُلْ «جَدِيدَانِ»؟", translation: "Niyə yeni sözünü qadın cinsində ikili dedik?" },
            { arabic: "لِأَنَّ «حَقِيبَةٌ» مُؤَنَّثٌ.", translation: "Çünki çanta qadın cinsindədir." },
            { arabic: "وَهِيَ مُثَنًّى أَيْضًا.", translation: "Həm də ikilidir." },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 116,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ كَبِيرٌ.", translation: "Bu, böyük qapıdır." },
            { arabic: "وَمَا هَذَانِ؟", translation: "Bəs bu ikisi nədir?" },
            { arabic: "هَذَانِ بَابَانِ كَبِيرَانِ.", translation: "Bu ikisi iki böyük qapıdır." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs o nədir?" },
            { arabic: "تِلْكَ غُرْفَةٌ جَمِيلَةٌ.", translation: "O, gözəl otaqdır." },
            { arabic: "وَمَا هَاتَانِ؟", translation: "Bəs bu ikisi nədir?" },
            { arabic: "هَاتَانِ غُرْفَتَانِ جَمِيلَتَانِ.", translation: "Bu ikisi iki gözəl otaqdır." }
        ]
    },
    {
        id: 117,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "لِمَاذَا نَقُولُ «هَذَانِ»؟", translation: "Niyə həzani deyirik?" },
            { arabic: "لِأَنَّ الْمُشَارَ إِلَيْهِ اثْنَانِ.", translation: "Çünki göstərilən şey iki dənədir." },
            { arabic: "وَإِذَا كَانَ وَاحِدًا؟", translation: "Bəs tək olsa?" },
            { arabic: "نَقُولُ: هٰذَا.", translation: "Deyirik ki, bu." },
            { arabic: "وَإِذَا كَانُوا ثَلَاثَةً؟", translation: "Bəs üç dənə olsalar?" },
            { arabic: "نَقُولُ: هٰؤُلَاءِ إِذَا كَانُوا مِنَ الْعَاقِلِينَ، وَهٰذِهِ إِذَا كَانُوا مِنْ غَيْرِ الْعَاقِلِينَ.", translation: "Ağıl sahibidirlərsə həuləi, cansız varlıqdırlarsa həzihi deyirik." }
        ]
    },
    {
        id: 118,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابَانِ؟", translation: "İki kitab haradadır?" },
            { arabic: "هُمَا عَلَى الْمَكْتَبِ.", translation: "Onlar masanın üzərindədir." },
            { arabic: "هَلِ الْكِتَابَانِ جَدِيدَانِ؟", translation: "İki kitab yenidir?" },
            { arabic: "نَعَمْ، الْكِتَابَانِ جَدِيدَانِ.", translation: "Bəli, iki kitab yenidir." },
            { arabic: "وَأَيْنَ الْحَقِيبَتَانِ؟", translation: "Bəs iki çanta haradadır?" },
            { arabic: "هُمَا هُنَا.", translation: "Onlar buradadır." },
            { arabic: "هَلِ الْحَقِيبَتَانِ كَبِيرَتَانِ؟", translation: "İki çanta böyükdür?" },
            { arabic: "نَعَمْ، الْحَقِيبَتَانِ كَبِيرَتَانِ.", translation: "Bəli, iki çanta böyükdür." }
        ]
    },
    {
        id: 119,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "مَا هَذَانِ؟", translation: "Bu ikisi nədir?" },
            { arabic: "هَذَانِ قَلَمَانِ.", translation: "Bu ikisi iki qələmdir." },
            { arabic: "وَمَا ذَانِكَ؟", translation: "Bəs o ikisi nədir?" },
            { arabic: "ذَانِكَ قَلَمَانِ.", translation: "O ikisi iki qələmdir." },
            { arabic: "هَلْ هُمَا قَرِيبَانِ؟", translation: "Onlar yaxındır?" },
            { arabic: "لَا، هُمَا بَعِيدَانِ.", translation: "Xeyr, onlar uzaqdadır." },
            { arabic: "إِذًا «هَذَانِ» لِلْقَرِيبِ، وَ«ذَانِكَ» لِلْبَعِيدِ؟", translation: "Deməli həzani yaxın üçün, zanikə isə uzaq üçündür?" },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 120,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "مَا هَاتَانِ؟", translation: "Bu ikisi nədir?" },
            { arabic: "هَاتَانِ سَاعَتَانِ.", translation: "Bu ikisi iki saatdır." },
            { arabic: "هَلِ السَّاعَتَانِ جَدِيدَتَانِ؟", translation: "İki saat yenidir?" },
            { arabic: "نَعَمْ، السَّاعَتَانِ جَدِيدَتَانِ.", translation: "Bəli, iki saat yenidir." },
            { arabic: "وَإِذَا كَانَتِ السَّاعَتَانِ بَعِيدَتَيْنِ؟", translation: "Bəs iki saat uzaqda olsa?" },
            { arabic: "تَانِكَ سَاعَتَانِ بَعِيدَتَانِ.", translation: "O ikisi iki uzaq saatdır." },
            { arabic: "أَحْسَنْتَ.", translation: "Afərin." }
        ]
    },
    {
        id: 121,
        title: "Müsənnada Sifət Uzlaşması",
        dialogue: [
            { arabic: "عِنْدِي لَكَ تَحَدٍّ.", translation: "Sənin üçün bir sınağım var." },
            { arabic: "أَنَا مُسْتَعِدٌّ!", translation: "Mən hazıram!" },
            { arabic: "كِتَابٌ وَاحِدٌ.", translation: "Tək bir kitab." },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "كِتَابَانِ.", translation: "İki kitab." },
            { arabic: "هَذَانِ كِتَابَانِ.", translation: "Bu ikisi iki kitabdır." },
            { arabic: "كِتَابَانِ جَدِيدَانِ.", translation: "İki yeni kitab." },
            { arabic: "هَذَانِ كِتَابَانِ جَدِيدَانِ.", translation: "Bu ikisi iki yeni kitabdır." },
            { arabic: "حَقِيبَتَانِ جَدِيدَتَانِ.", translation: "İki yeni çanta." },
            { arabic: "هَاتَانِ حَقِيبَتَانِ جَدِيدَتَانِ.", translation: "Bu ikisi iki yeni çantadır." },
            { arabic: "مُمْتَازٌ! لَقَدْ فَهِمْتَ الْمُثَنَّى وَالصِّفَةَ مَعَهُ.", translation: "Əla! İkili formanı və onunla sifəti tam anladın." }
        ]
    },
    {
        id: 122,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "مَنْ هَذَا؟", translation: "Bu kimdir?" },
            { arabic: "هَذَا طَالِبٌ.", translation: "Bu, tələbədir." },
            { arabic: "وَمَنْ هَذَانِ؟", translation: "Bəs bu ikisi kimdir?" },
            { arabic: "هَذَانِ طَالِبَانِ.", translation: "Bu ikisi iki tələbədir." },
            { arabic: "هَلِ الطَّالِبَانِ مُجْتَهِدَانِ؟", translation: "İki tələbə çalışqandır?" },
            { arabic: "نَعَمْ، الطَّالِبَانِ مُجْتَهِدَانِ.", translation: "Bəli, iki tələbə çalışqandır." },
            { arabic: "وَمَنْ هَؤُلَاءِ؟", translation: "Bəs bunlar kimdir?" },
            { arabic: "هَؤُلَاءِ طُلَّابٌ مُجْتَهِدُونَ.", translation: "Bunlar çalışqan tələbələrdir." }
        ]
    },
    {
        id: 123,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "أَيْنَ قَلَمُكَ؟", translation: "Qələmin haradadır?" },
            { arabic: "هٰذَا قَلَمِي.", translation: "Bu, mənim qələmimdir." },
            { arabic: "وَأَيْنَ قَلَمَاكَ؟", translation: "Bəs iki qələmin haradadır?" },
            { arabic: "هَذَانِ قَلَمَايَ.", translation: "Bu ikisi mənim iki qələmimdir." },
            { arabic: "لِمَاذَا قُلْتَ «قَلَمَايَ» وَلَمْ تَقُلْ «قَلَمَانِ»؟", translation: "Niyə iki qələmim dedin?" },
            { arabic: "لِأَنَّ الْقَلَمَيْنِ لِي.", translation: "Çünki iki qələm mənimdir." },
            { arabic: "أَحْسَنْتَ.", translation: "Afərin." }
        ]
    },
    {
        id: 124,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "أَيُّهُمَا صَحِيحٌ؟", translation: "Hansı düzdür?" },
            { arabic: "مَاذَا؟", translation: "Nə?" },
            { arabic: "«هَذَانِ كِتَابَانِ جَدِيدٌ» أَمْ «هَذَانِ كِتَابَانِ جَدِيدَانِ»؟", translation: "Bu ikisi iki yeni kitabdır deyəndə sifəti tək, yoxsa ikili demək düzdür?" },
            { arabic: "الثَّانِيَةُ صَحِيحَةٌ.", translation: "İkinci variant düzdür." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ الصِّفَةَ تَتْبَعُ الْمَوْصُوفَ فِي التَّثْنِيَةِ.", translation: "Çünki sifət ikilikdə təyin etdiyi ismə tabe olur." },
            { arabic: "مُمْتَازٌ.", translation: "Əla." }
        ]
    },
    {
        id: 125,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "مَا هَذَانِ؟", translation: "Bu ikisi nədir?" },
            { arabic: "هَذَانِ كِتَابَانِ.", translation: "Bu ikisi iki kitabdır." },
            { arabic: "هَلْ هُمَا جَدِيدَانِ؟", translation: "Onlar yenidir?" },
            { arabic: "لَا، هُمَا قَدِيمَانِ.", translation: "Xeyr, onlar köhnədir." },
            { arabic: "وَمَا تِلْكَ؟", translation: "Bəs o nədir?" },
            { arabic: "تِلْكَ حَقِيبَةٌ كَبِيرَةٌ.", translation: "O, böyük çantadır." },
            { arabic: "وَمَا هَاتَانِ؟", translation: "Bəs bu ikisi nədir?" },
            { arabic: "هَاتَانِ حَقِيبَتَانِ صَغِيرَتَانِ.", translation: "Bu ikisi iki kiçik çantadır." }
        ]
    },
    {
        id: 126,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "لِمَاذَا نَقُولُ: «هَذَانِ طَالِبَانِ»؟", translation: "Niyə bu ikisi iki tələbədir deyirik?" },
            { arabic: "لِأَنَّ عِنْدَنَا طَالِبَيْنِ.", translation: "Çünki iki tələbəmiz var." },
            { arabic: "وَ«هَذَانِ طَالِبَانِ مُجْتَهِدَانِ»؟", translation: "Bəs bu ikisi iki çalışqan tələbədir?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "لِمَاذَا «مُجْتَهِدَانِ»؟", translation: "Niyə çalışqan sözünü də ikili dedik?" },
            { arabic: "لِأَنَّ «طَالِبَانِ» مُثَنًّى، فَالصِّفَةُ أَيْضًا مُثَنًّى.", translation: "Çünki iki tələbə sözü ikilidir, sifət də ikili olur." },
            { arabic: "فَهِمْتُ.", translation: "Anladım." }
        ]
    },
    {
        id: 127,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "وَاحِدٌ: مَا هَذَا؟", translation: "Bir, bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "اثْنَانِ: مَا هَذَانِ؟", translation: "İki, bu ikisi nədir?" },
            { arabic: "هَذَانِ بَيْتَانِ.", translation: "Bu ikisi iki evdir." },
            { arabic: "ثَلَاثَةٌ: مَا هَذِهِ؟", translation: "Üç, bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "أَرْبَعَةٌ: مَا هَاتَانِ؟", translation: "Dörd, bu ikisi nədir?" },
            { arabic: "هَاتَانِ سَيَّارَتَانِ.", translation: "Bu ikisi iki maşındır." },
            { arabic: "خَمْسَةٌ: مَا هَذِهِ؟", translation: "Beş, bunlar nədir?" },
            { arabic: "هٰذِهِ سَيَّارَاتٌ.", translation: "Bunlar maşınlardır." }
        ]
    },
    {
        id: 128,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "مَنْ هَذَا؟", translation: "Bu kimdir?" },
            { arabic: "هَذَا مُدَرِّسٌ.", translation: "Bu, müəllimdir." },
            { arabic: "وَمَنْ هَذَانِ؟", translation: "Bəs bu ikisi kimdir?" },
            { arabic: "هَذَانِ مُدَرِّسَانِ.", translation: "Bu ikisi iki müəllimdir." },
            { arabic: "هَلْ هُمَا جَدِيدَانِ؟", translation: "Onlar yenidir?" },
            { arabic: "نَعَمْ، هُمَا مُدَرِّسَانِ جَدِيدَانِ.", translation: "Bəli, onlar iki yeni müəllimdir." },
            { arabic: "وَمَنْ أُولَئِكَ؟", translation: "Bəs onlar kimdir?" },
            { arabic: "أُولَئِكَ مُدَرِّسُونَ قُدَمَاءُ.", translation: "Onlar köhnə müəllimlərdir." }
        ]
    },
    {
        id: 129,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "مَا هَاتَانِ؟", translation: "Bu ikisi nədir?" },
            { arabic: "هَاتَانِ سَاعَتَانِ.", translation: "Bu ikisi iki saatdır." },
            { arabic: "هَلِ السَّاعَتَانِ جَدِيدَتَانِ؟", translation: "İki saat yenidir?" },
            { arabic: "نَعَمْ، السَّاعَتَانِ جَدِيدَتَانِ.", translation: "Bəli, iki saat yenidir." },
            { arabic: "وَهَلِ السَّاعَتَانِ غَالِيَتَانِ؟", translation: "Bəs iki saat bahalıdır?" },
            { arabic: "لَا، هُمَا رَخِيصَتَانِ.", translation: "Xeyr, onlar ucuzdur." },
            { arabic: "إِذًا الصِّفَةُ تَتْبَعُ الِاسْمَ؟", translation: "Deməli sifət ismə tabe olur?" },
            { arabic: "نَعَمْ، فِي التَّذْكِيرِ وَالتَّأْنِيثِ وَالتَّثْنِيَةِ أَيْضًا.", translation: "Bəli, kişi və qadın cinsində, həm də ikilikdə." }
        ]
    },
    {
        id: 130,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "صَحِّحْ هَذِهِ الْجُمْلَةَ: «هَاتَانِ سَيَّارَتَانِ جَدِيدَانِ».", translation: "Bu cümləni düzəlt: Bu ikisi iki yeni maşındır cümləsində yeni sözünü kişi cinsində dedilər." },
            { arabic: "هَاتَانِ سَيَّارَتَانِ جَدِيدَتَانِ.", translation: "Bu ikisi iki yeni maşındır deyərkən qadın cinsində deyirik." },
            { arabic: "وَلِمَاذَا؟", translation: "Bəs niyə?" },
            { arabic: "لِأَنَّ «سَيَّارَةٌ» مُؤَنَّثٌ، فَنَقُولُ «جَدِيدَتَانِ».", translation: "Çünki maşın qadın cinsindədir." },
            { arabic: "وَمَاذَا نَقُولُ مَعَ «قَلَمَانِ»؟", translation: "Bəs iki qələm ilə nə deyirik?" },
            { arabic: "قَلَمَانِ جَدِيدَانِ.", translation: "İki yeni qələm deyirik." }
        ]
    },
    {
        id: 131,
        title: "Müsənna və Cəmdə Təkrar Məşqləri",
        dialogue: [
            { arabic: "أَنَا أَقُولُ كَلِمَةً، وَأَنْتَ تَصْنَعُ جُمْلَةً.", translation: "Mən bir söz deyəcəyəm, sən isə cümlə quracaqsan." },
            { arabic: "هَيَّا!", translation: "Gəl başlayaq!" },
            { arabic: "كِتَابٌ.", translation: "Kitab." },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "كِتَابَانِ.", translation: "İki kitab." },
            { arabic: "هَذَانِ كِتَابَانِ جَدِيدَانِ.", translation: "Bu ikisi iki yeni kitabdır." },
            { arabic: "سَيَّارَةٌ.", translation: "Maşın." },
            { arabic: "هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ.", translation: "Bu, yeni maşındır." },
            { arabic: "سَيَّارَتَانِ.", translation: "İki maşın." },
            { arabic: "هَاتَانِ سَيَّارَتَانِ جَدِيدَتَانِ.", translation: "Bu ikisi iki yeni maşındır." },
            { arabic: "كُتُبٌ.", translation: "Kitablar." },
            { arabic: "هٰذِهِ كُتُبٌ جَدِيدَةٌ.", translation: "Bunlar yeni kitablardır." },
            { arabic: "مُمْتَازٌ! أَنْتَ الْآنَ تَعْرِفُ الْمُفْرَدَ وَالْمُثَنَّى وَالْجَمْعَ، وَتَعْرِفُ كَيْفَ تُوَافِقُ الصِّفَةُ الِاسْمَ.", translation: "Əla! İndi sən tək, ikili və cəm formalarını bilirsən və sifətin ismə necə uyğunlaşdığını anlayırsan." }
        ]
    },
    {
        id: 132,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "مَنْ هٰذَا؟", translation: "Bu kimdir?" },
            { arabic: "هٰذَا أَحْمَدُ.", translation: "Bu, Əhməddir." },
            { arabic: "وَمَنْ هُوَ؟", translation: "Bəs o kimdir?" },
            { arabic: "هُوَ طَالِبٌ.", translation: "O, tələbədir." },
            { arabic: "هَلْ هُوَ مُجْتَهِدٌ؟", translation: "O çalışqandır?" },
            { arabic: "نَعَمْ، هُوَ مُجْتَهِدٌ.", translation: "Bəli, o çalışqandır." },
            { arabic: "إِذًا، مَاذَا نَقُولُ عَنْ الرَّجُلِ أَوِ الْوَلَدِ؟", translation: "Onda kişi və ya oğlan haqqında nə deyirik?" },
            { arabic: "نَقُولُ: هُوَ.", translation: "O deyirik." }
        ]
    },
    {
        id: 133,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "مَنْ هٰذِهِ؟", translation: "Bu kimdir?" },
            { arabic: "هٰذِهِ سَارَةُ.", translation: "Bu, Saradır." },
            { arabic: "وَمَنْ هِيَ؟", translation: "Bəs o kimdir?" },
            { arabic: "هِيَ طَالِبَةٌ.", translation: "O, tələbədir." },
            { arabic: "هَلْ هِيَ مُجْتَهِدَةٌ؟", translation: "O çalışqandır?" },
            { arabic: "نَعَمْ، هِيَ مُجْتَهِدَةٌ.", translation: "Bəli, o çalışqandır." },
            { arabic: "لِمَاذَا قُلْنَا «هِيَ»؟", translation: "Niyə o dedik?" },
            { arabic: "لِأَنَّهَا أُنْثَى.", translation: "Çünki o qadındır." }
        ]
    },
    {
        id: 134,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "مَنْ هَذَانِ؟", translation: "Bu ikisi kimdir?" },
            { arabic: "هَذَانِ طَالِبَانِ.", translation: "Bu ikisi iki tələbədir." },
            { arabic: "وَمَنْ هُمَا؟", translation: "Bəs o ikisi kimdir?" },
            { arabic: "هُمَا أَحْمَدُ وَخَالِدٌ.", translation: "O ikisi Əhməd və Xaliddir." },
            { arabic: "هَلْ هُمَا مُجْتَهِدَانِ؟", translation: "O ikisi çalışqandır?" },
            { arabic: "نَعَمْ، هُمَا مُجْتَهِدَانِ.", translation: "Bəli, o ikisi çalışqandır." },
            { arabic: "وَإِذَا كَانَتْ طَالِبَتَيْنِ؟", translation: "Bəs iki qız tələbə olsa?" },
            { arabic: "هُمَا طَالِبَتَانِ مُجْتَهِدَتَانِ.", translation: "O ikisi iki çalışqan qız tələbədir." }
        ]
    },
    {
        id: 135,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "مَنْ هَؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هَؤُلَاءِ طُلَّابٌ.", translation: "Bunlar tələbələrdir." },
            { arabic: "وَمَنْ هُمْ؟", translation: "Bəs onlar kimdir?" },
            { arabic: "هُمْ أَحْمَدُ وَخَالِدٌ وَمُحَمَّدٌ.", translation: "Onlar Əhməd, Xalid və Məhəmməddir." },
            { arabic: "هَلْ هُمْ مُجْتَهِدُونَ؟", translation: "Onlar çalışqandırlar?" },
            { arabic: "نَعَمْ، هُمْ مُجْتَهِدُونَ.", translation: "Bəli, onlar çalışqandırlar." },
            { arabic: "لِمَاذَا قُلْنَا «هُمْ»؟", translation: "Niyə onlar dedik?" },
            { arabic: "لِأَنَّهُمْ جَمْعٌ مِنَ الذُّكُورِ.", translation: "Çünki onlar kişi cəmidir." }
        ]
    },
    {
        id: 136,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "مَنْ هَؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هَؤُلَاءِ طَالِبَاتٌ.", translation: "Bunlar qız tələbələrdir." },
            { arabic: "وَمَنْ هُنَّ؟", translation: "Bəs onlar kimdir?" },
            { arabic: "هُنَّ سَارَةُ وَمَرْيَمُ وَهِنْدٌ.", translation: "Onlar Sara, Məryəm və Hinddir." },
            { arabic: "هَلْ هُنَّ مُجْتَهِدَاتٌ؟", translation: "Onlar çalışqandırlar?" },
            { arabic: "نَعَمْ، هُنَّ مُجْتَهِدَاتٌ.", translation: "Bəli, onlar çalışqandırlar." },
            { arabic: "إِذًا «هُنَّ» لِمَنْ؟", translation: "Deməli qadın cəmi üçün onlar işlədirik?" },
            { arabic: "لِجَمْعِ الْإِنَاثِ.", translation: "Bəli, qadın cəmi üçündür." }
        ]
    },
    {
        id: 137,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "وَاحِدٌ مُذَكَّرٌ. مَا الضَّمِيرُ؟", translation: "Tək kişi cinsi üçün hansı əvəzlik işlənir?" },
            { arabic: "هُوَ.", translation: "O." },
            { arabic: "وَاحِدٌ مُؤَنَّثٌ؟", translation: "Tək qadın cinsi üçün?" },
            { arabic: "هِيَ.", translation: "O." },
            { arabic: "اثْنَانِ؟", translation: "İki nəfər üçün?" },
            { arabic: "هُمَا.", translation: "O ikisi." },
            { arabic: "جَمْعُ الذُّكُورِ؟", translation: "Kişi cəmi üçün?" },
            { arabic: "هُمْ.", translation: "Onlar." },
            { arabic: "جَمْعُ الْإِنَاثِ؟", translation: "Qadın cəmi üçün?" },
            { arabic: "هُنَّ.", translation: "Onlar." },
            { arabic: "مُمْتَازٌ!", translation: "Əla!" }
        ]
    },
    {
        id: 138,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "هُوَ عَلَى الْمَكْتَبِ.", translation: "O, masanın üzərindədir." },
            { arabic: "وَأَيْنَ الْحَقِيبَةُ؟", translation: "Bəs çanta haradadır?" },
            { arabic: "هِيَ تَحْتَ الْكُرْسِيِّ.", translation: "O, stulun altındadır." },
            { arabic: "وَأَيْنَ الْكِتَابَانِ؟", translation: "Bəs iki kitab haradadır?" },
            { arabic: "هُمَا فِي الْحَقِيبَةِ.", translation: "O ikisi çantadadır." },
            { arabic: "وَأَيْنَ الْكُتُبُ؟", translation: "Bəs kitablar haradadır?" },
            { arabic: "هِيَ عَلَى الطَّاوِلَةِ.", translation: "Onlar masanın üzərindədir." },
            { arabic: "لِمَاذَا قُلْتَ «هِيَ» مَعَ «الْكُتُبِ»؟", translation: "Niyə kitablar üçün tək qadın cinsi əvəzliyi dedin?" },
            { arabic: "لِأَنَّ الْكُتُبَ جَمْعُ غَيْرِ الْعَاقِلِ، وَهُوَ يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ.", translation: "Çünki kitablar cansız varlıqların cəmidir və tək qadın cinsi kimi qəbul olunur." }
        ]
    },
    {
        id: 139,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "هَؤُلَاءِ طَالِبَاتٌ. هَلْ نَقُولُ: «هُمْ مُجْتَهِدُونَ»؟", translation: "Bunlar qız tələbələrdir. Onlar çalışqandır deyərkən kişi cəmi işlədərik?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "هُنَّ مُجْتَهِدَاتٌ.", translation: "Onlar çalışqandırlar deyirik, qadın cəmində." },
            { arabic: "وَهَؤُلَاءِ طُلَّابٌ؟", translation: "Bəs bunlar tələbələrdir dedikdə?" },
            { arabic: "هُمْ مُجْتَهِدُونَ.", translation: "Onlar çalışqandırlar deyirik, kişi cəmində." },
            { arabic: "أَحْسَنْتَ.", translation: "Afərin." }
        ]
    },
    {
        id: 140,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "طَالِبٌ.", translation: "Tələbə." },
            { arabic: "هُوَ طَالِبٌ.", translation: "O, tələbədir." },
            { arabic: "طَالِبَانِ.", translation: "İki tələbə." },
            { arabic: "هُمَا طَالِبَانِ.", translation: "O ikisi iki tələbədir." },
            { arabic: "طُلَّابٌ.", translation: "Tələbələr." },
            { arabic: "هُمْ طُلَّابٌ.", translation: "Onlar tələbələrdir." },
            { arabic: "طَالِبَةٌ.", translation: "Qız tələbə." },
            { arabic: "هِيَ طَالِبَةٌ.", translation: "O, qız tələbədir." },
            { arabic: "طَالِبَتَانِ.", translation: "İki qız tələbə." },
            { arabic: "هُمَا طَالِبَتَانِ.", translation: "O ikisi iki qız tələbədir." },
            { arabic: "طَالِبَاتٌ.", translation: "Qız tələbələr." },
            { arabic: "هُنَّ طَالِبَاتٌ.", translation: "Onlar qız tələbələrdir." }
        ]
    },
    {
        id: 141,
        title: "Şəxs Əvəzlikləri (Huwa, Hiya, Huma, Hum, Hunna)",
        dialogue: [
            { arabic: "سَأَسْأَلُكَ سِتَّةَ أَسْئِلَةٍ.", translation: "Sənə altı sual verəcəyəm." },
            { arabic: "أَنَا مُسْتَعِدٌّ!", translation: "Mən hazıram!" },
            { arabic: "أَحْمَدُ؟", translation: "Əhməd?" },
            { arabic: "هُوَ طَالِبٌ.", translation: "O, tələbədir." },
            { arabic: "فَاطِمَةُ؟", translation: "Fatimə?" },
            { arabic: "هِيَ طَالِبَةٌ.", translation: "O, qız tələbədir." },
            { arabic: "أَحْمَدُ وَخَالِدٌ؟", translation: "Əhməd və Xalid?" },
            { arabic: "هُمَا طَالِبَانِ.", translation: "O ikisi iki tələbədir." },
            { arabic: "سَارَةُ وَفَاطِمَةُ؟", translation: "Sara və Fatimə?" },
            { arabic: "هُمَا طَالِبَتَانِ.", translation: "O ikisi iki qız tələbədir." },
            { arabic: "أَحْمَدُ وَخَالِدٌ وَمُحَمَّدٌ؟", translation: "Əhməd, Xalid və Məhəmməd?" },
            { arabic: "هُمْ طُلَّابٌ.", translation: "Onlar tələbələrdir." },
            { arabic: "سَارَةُ وَفَاطِمَةُ وَمَرْيَمُ؟", translation: "Sara, Fatimə və Məryəm?" },
            { arabic: "هُنَّ طَالِبَاتٌ.", translation: "Onlar qız tələbələrdir." },
            { arabic: "مُمْتَازٌ! الْآنَ تَسْتَطِيعُ أَنْ تُشِيرَ إِلَى الشَّخْصِ وَتَتَكَلَّمَ عَنْهُ بِالضَّمِيرِ الْمُنَاسِبِ.", translation: "Əla! İndi sən şəxsə işarə edə və onun haqqında uyğun əvəzliklə danışa bilərsən." }
        ]
    },
    {
        id: 142,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ هٰذَا كِتَابٌ جَدِيدٌ؟", translation: "Bu, yeni kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bəli, bu, yeni kitabdır." },
            { arabic: "وَإِذَا كَانَ الْجَوَابُ لَيْسَ نَعَمْ؟", translation: "Bəs cavab bəli olmasa?" },
            { arabic: "نَقُولُ: لَا.", translation: "Xeyr deyirik." },
            { arabic: "إِذًا، مَاذَا نَضَعُ فِي أَوَّلِ السُّؤَالِ؟", translation: "Onda sualın əvvəlinə nə qoyuruq?" },
            { arabic: "نَضَعُ «هَلْ».", translation: "Mı, mi, mu, mü sual ədatını qoyuruq." },
            { arabic: "أَحْسَنْتَ.", translation: "Afərin." }
        ]
    },
    {
        id: 143,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "مَنْ هَذَا؟", translation: "Bu kimdir?" },
            { arabic: "هٰذَا مُحَمَّدٌ.", translation: "Bu, Məhəmməddir." },
            { arabic: "هَلْ هُوَ طَالِبٌ؟", translation: "O tələbədirmi?" },
            { arabic: "نَعَمْ، هُوَ طَالِبٌ.", translation: "Bəli, o tələbədir." },
            { arabic: "هَلْ هُوَ مُدَرِّسٌ؟", translation: "O müəllimdirmi?" },
            { arabic: "لَا، هُوَ طَالِبٌ.", translation: "Xeyr, o tələbədir." },
            { arabic: "هَلْ هُوَ مُجْتَهِدٌ؟", translation: "O çalışqandırır?" },
            { arabic: "نَعَمْ، هُوَ مُجْتَهِدٌ.", translation: "Bəli, o çalışqandır." }
        ]
    },
    {
        id: 144,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "مَنْ هٰذِهِ؟", translation: "Bu kimdir?" },
            { arabic: "هٰذِهِ سَارَةُ.", translation: "Bu, Saradır." },
            { arabic: "هَلْ هِيَ طَالِبَةٌ؟", translation: "O qız tələbədirmi?" },
            { arabic: "نَعَمْ، هِيَ طَالِبَةٌ.", translation: "Bəli, o qız tələbədir." },
            { arabic: "هَلْ هِيَ مُدَرِّسَةٌ؟", translation: "O müəllimədirmi?" },
            { arabic: "لَا، هِيَ طَالِبَةٌ.", translation: "Xeyr, o qız tələbədir." },
            { arabic: "هَلْ هِيَ مُجْتَهِدَةٌ؟", translation: "O çalışqandırır?" },
            { arabic: "نَعَمْ، هِيَ مُجْتَهِدَةٌ.", translation: "Bəli, o çalışqandır." }
        ]
    },
    {
        id: 145,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "مَنْ هَذَانِ؟", translation: "Bu ikisi kimdir?" },
            { arabic: "هَذَانِ طَالِبَانِ.", translation: "Bu ikisi iki tələbədir." },
            { arabic: "هَلْ هُمَا مُجْتَهِدَانِ؟", translation: "O ikisi çalışqandırmı?" },
            { arabic: "نَعَمْ، هُمَا مُجْتَهِدَانِ.", translation: "Bəli, o ikisi çalışqandır." },
            { arabic: "هَلْ هُمَا مُدَرِّسَانِ؟", translation: "O ikisi müəllimdirmi?" },
            { arabic: "لَا، هُمَا طَالِبَانِ.", translation: "Xeyr, o ikisi iki tələbədir." },
            { arabic: "هَلْ هُمَا جَدِيدَانِ؟", translation: "O ikisi yenidirmi?" },
            { arabic: "نَعَمْ، هُمَا جَدِيدَانِ.", translation: "Bəli, o ikisi yenidir." }
        ]
    },
    {
        id: 146,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "هَلْ هُوَ جَدِيدٌ؟", translation: "O yenidirmi?" },
            { arabic: "نَعَمْ، هُوَ جَدِيدٌ.", translation: "Bəli, o yenidir." },
            { arabic: "وَمَا هَذِهِ؟", translation: "Bəs bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ.", translation: "Bu, çantadır." },
            { arabic: "هَلْ هِيَ كَبِيرَةٌ؟", translation: "O böyükdürmü?" },
            { arabic: "لَا، هِيَ صَغِيرَةٌ.", translation: "Xeyr, o kiçikdir." },
            { arabic: "وَمَا هَذِهِ؟", translation: "Bəs bunlar nədir?" },
            { arabic: "هٰذِهِ كُتُبٌ.", translation: "Bunlar kitablardır." },
            { arabic: "هَلْ هِيَ جَدِيدَةٌ؟", translation: "Onlar yenidirmi?" },
            { arabic: "نَعَمْ، هِيَ جَدِيدَةٌ.", translation: "Bəli, onlar yenidir." }
        ]
    },
    {
        id: 147,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "يَا مُدَرِّسُ، لِمَاذَا نَقُولُ: «هِيَ جَدِيدَةٌ» مَعَ «الْكُتُبِ»؟", translation: "Müəllim, niyə kitablar üçün onlar yenidir deyərkən tək qadın cinsi işlədirik?" },
            { arabic: "مَا رَأْيُكَ؟", translation: "Səncə niyə?" },
            { arabic: "لِأَنَّ «الْكُتُبَ» جَمْعُ غَيْرِ الْعَاقِلِ؟", translation: "Çünki kitablar cansız varlıqların cəmidir?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "وَجَمْعُ غَيْرِ الْعَاقِلِ يُعَامَلُ مُعَامَلَةَ الْمُؤَنَّثِ الْمُفْرَدِ؟", translation: "Cansız varlıqların cəmi də tək qadın cinsi kimi qəbul olunur?" },
            { arabic: "صَحِيحٌ جِدًّا.", translation: "Tamamilə doğrudur." },
            { arabic: "إِذًا نَقُولُ: «هِيَ جَدِيدَةٌ» وَلَا نَقُولُ: «هُمْ جُدُدٌ».", translation: "Deməli o yenidir deyirik, insan cəmi kimi demirik." },
            { arabic: "أَحْسَنْتَ.", translation: "Afərin." }
        ]
    },
    {
        id: 148,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "مَنْ هَؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هَؤُلَاءِ مُدَرِّسُونَ.", translation: "Bunlar müəllimlərdir." },
            { arabic: "هَلْ هُمْ جُدُدٌ؟", translation: "Onlar yenidirlərmi?" },
            { arabic: "نَعَمْ، هُمْ مُدَرِّسُونَ جُدُدٌ.", translation: "Bəli, onlar yeni müəllimlərdir." },
            { arabic: "وَمَنْ هَؤُلَاءِ؟", translation: "Bəs bunlar kimdir?" },
            { arabic: "هَؤُلَاءِ طَالِبَاتٌ.", translation: "Bunlar qız tələbələrdir." },
            { arabic: "هَلْ هُنَّ مُجْتَهِدَاتٌ؟", translation: "Onlar çalışqandırlarmı?" },
            { arabic: "نَعَمْ، هُنَّ مُجْتَهِدَاتٌ.", translation: "Bəli, onlar çalışqandırlar." },
            { arabic: "مَاذَا نَسْتَعْمِلُ مَعَ الْجَمْعِ؟", translation: "Cəm üçün nə işlədirik?" },
            { arabic: "هُمْ لِلذُّكُورِ، وَهُنَّ لِلْإِنَاثِ.", translation: "Kişilər üçün onlar, qadınlar üçün onlar işlədirik." }
        ]
    },
    {
        id: 149,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "هَلْ هُوَ طَالِبَةٌ؟", translation: "O kişidirmi əvəzinə o qız tələbədirmi desək?" },
            { arabic: "لَا، هِيَ طَالِبَةٌ.", translation: "Xeyr, o qız tələbədirmi deyirik." },
            { arabic: "هَلْ هِيَ طَالِبٌ؟", translation: "O qadındırsa o oğlan tələbədirmi deyirik?" },
            { arabic: "لَا، هُوَ طَالِبٌ.", translation: "Xeyr, o oğlan tələbədirmi deyirik." },
            { arabic: "هَلْ هُمْ طَالِبَاتٌ؟", translation: "Onlar kişilərdirsə onlar qız tələbələrdirmi deyirik?" },
            { arabic: "لَا، هُنَّ طَالِبَاتٌ.", translation: "Xeyr, onlar qız tələbələrdirmi deyirik." },
            { arabic: "هَلْ هُنَّ طُلَّابٌ؟", translation: "Onlar qadınlardırlarsa onlar oğlan tələbələrdirmi deyirik?" },
            { arabic: "لَا، هُمْ طُلَّابٌ.", translation: "Xeyr, onlar oğlan tələbələrdirmi deyirik." },
            { arabic: "مُمْتَازٌ!", translation: "Əla!" }
        ]
    },
    {
        id: 150,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "هَلْ هٰذَا الْكِتَابُ جَدِيدٌ؟", translation: "Bu kitab yenidirmi?" },
            { arabic: "نَعَمْ، هُوَ جَدِيدٌ.", translation: "Bəli, o yenidir." },
            { arabic: "هَلْ هٰذَانِ الْكِتَابَانِ جَدِيدَانِ؟", translation: "Bu iki kitab yenidirmi?" },
            { arabic: "لَا، هُمَا قَدِيمَانِ.", translation: "Xeyr, o ikisi köhnədir." },
            { arabic: "هَلْ هٰذِهِ الْحَقِيبَةُ كَبِيرَةٌ؟", translation: "Bu çanta böyükdürmü?" },
            { arabic: "نَعَمْ، هِيَ كَبِيرَةٌ.", translation: "Bəli, o böyükdür." },
            { arabic: "هَلْ هَذِهِ الْكُتُبُ جَدِيدَةٌ؟", translation: "Bu kitablar yenidirmi?" },
            { arabic: "نَعَمْ، هِيَ جَدِيدَةٌ.", translation: "Bəli, onlar yenidir." }
        ]
    },
    {
        id: 151,
        title: "Hal Sual Ədatı ilə Suallar",
        dialogue: [
            { arabic: "الْآنَ أَنَا أَسْأَلُ، وَأَنْتَ تُجِيبُ بِجُمْلَةٍ كَامِلَةٍ.", translation: "İndi mən soruşacağam, sən tam cümlə ilə cavab verəcəksən." },
            { arabic: "حَسَنًا.", translation: "Yaxşı." },
            { arabic: "هَلْ هٰذَا بَيْتٌ كَبِيرٌ؟", translation: "Bu, böyük evdirmi?" },
            { arabic: "نَعَمْ، هٰذَا بَيْتٌ كَبِيرٌ.", translation: "Bəli, bu, böyük evdir." },
            { arabic: "هَلْ هَذَانِ بَيْتَانِ صَغِيرَانِ؟", translation: "Bu ikisi iki kiçik evdirmi?" },
            { arabic: "لَا، هُمَا بَيْتَانِ كَبِيرَانِ.", translation: "Xeyr, o ikisi iki böyük evdir." },
            { arabic: "هَلْ هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ؟", translation: "Bu, yeni maşındırmı?" },
            { arabic: "نَعَمْ، هِيَ سَيَّارَةٌ جَدِيدَةٌ.", translation: "Bəli, o, yeni maşındır." },
            { arabic: "هَلْ هَؤُلَاءِ طُلَّابٌ مُجْتَهِدُونَ؟", translation: "Bunlar çalışqan tələbələrdirmi?" },
            { arabic: "نَعَمْ، هُمْ طُلَّابٌ مُجْتَهِدُونَ.", translation: "Bəli, onlar çalışqan tələbələrdir." },
            { arabic: "هَلْ هَؤُلَاءِ طَالِبَاتٌ مُجْتَهِدَاتٌ؟", translation: "Bunlar çalışqan qız tələbələrdirmi?" },
            { arabic: "نَعَمْ، هُنَّ طَالِبَاتٌ مُجْتَهِدَاتٌ.", translation: "Bəli, onlar çalışqan qız tələbələrdir." },
            { arabic: "مُمْتَازٌ! الْآنَ تَعْرِفُ كَيْفَ تَسْأَلُ بِـ«هَلْ» وَكَيْفَ تُجِيبُ بِـ«نَعَمْ» وَ«لَا».", translation: "Əla! İndi sual verməyi və bəli, xeyr ilə cavab verməyi bilirsən." }
        ]
    },
    {
        id: 152,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "هَلْ هُوَ كِتَابٌ؟", translation: "O kitabdır?" },
            { arabic: "لَا، هُوَ لَيْسَ كِتَابًا، هُوَ قَلَمٌ.", translation: "Xeyr, o kitab deyil, o qələmdir." },
            { arabic: "مَاذَا قُلْتَ؟", translation: "Nə dedin?" },
            { arabic: "قُلْتُ: «هُوَ لَيْسَ كِتَابًا».", translation: "Dedim ki, o kitab deyil." },
            { arabic: "وَمَاذَا تَعْنِي «لَيْسَ»؟", translation: "Bəs inkar sözü nə deməkdir?" },
            { arabic: "تَعْنِي: «لَيْسَ كَذَا».", translation: "Deyil deməkdir." }
        ]
    },
    {
        id: 153,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ.", translation: "Bu, çantadır." },
            { arabic: "هَلْ هِيَ كِتَابٌ؟", translation: "O kitabdır?" },
            { arabic: "لَا، هِيَ لَيْسَتْ كِتَابًا.", translation: "Xeyr, o kitab deyil." },
            { arabic: "وَمَاذَا هِيَ؟", translation: "Bəs o nədir?" },
            { arabic: "هِيَ حَقِيبَةٌ.", translation: "O, çantadır." },
            { arabic: "لِمَاذَا قُلْنَا «لَيْسَتْ»؟", translation: "Niyə qadın cinsində deyil dedik?" },
            { arabic: "لِأَنَّ الْمُبْتَدَأَ مُؤَنَّثٌ.", translation: "Çünki mübtəda qadın cinsindədir." }
        ]
    },
    {
        id: 154,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "هٰذِهِ قَلَمٌ.", translation: "Bu çantadır deyərkən kişi cinsində bu dedilər." },
            { arabic: "هُنَا خَطَأٌ.", translation: "Burada səhv var." },
            { arabic: "مَا الْخَطَأُ؟", translation: "Səhv nədir?" },
            { arabic: "«قَلَمٌ» مُذَكَّرٌ، فَمَاذَا نَقُولُ؟", translation: "Qələm kişi cinsindədir, nə deyirik?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir deyirik." },
            { arabic: "وَإِذَا أَرَدْتَ النَّفْيَ؟", translation: "Bəs inkar etmək istəsən?" },
            { arabic: "هٰذَا لَيْسَ كِتَابًا، بَلْ هُوَ قَلَمٌ.", translation: "Bu kitab deyil, əksinə qələmdir deyirik." },
            { arabic: "جَيِّدٌ.", translation: "Yaxşı." }
        ]
    },
    {
        id: 155,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ هُوَ صَغِيرٌ؟", translation: "O kiçikdir?" },
            { arabic: "لَا، هُوَ لَيْسَ صَغِيرًا.", translation: "Xeyr, o kiçik deyil." },
            { arabic: "كَيْفَ هُوَ؟", translation: "Necədir?" },
            { arabic: "هُوَ كَبِيرٌ.", translation: "O böyükdür." },
            { arabic: "وَإِذَا كَانَ الْبَيْتُ قَدِيمًا؟", translation: "Bəs ev köhnə olsa?" },
            { arabic: "هُوَ لَيْسَ جَدِيدًا، هُوَ قَدِيمٌ.", translation: "O yeni deyil, o köhnədir." }
        ]
    },
    {
        id: 156,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "هَلْ هِيَ جَدِيدَةٌ؟", translation: "O yenidir?" },
            { arabic: "لَا، هِيَ لَيْسَتْ جَدِيدَةً.", translation: "Xeyr, o yeni deyil." },
            { arabic: "هَلْ هِيَ قَدِيمَةٌ؟", translation: "O köhnədir?" },
            { arabic: "نَعَمْ، هِيَ قَدِيمَةٌ.", translation: "Bəli, o köhnədir." },
            { arabic: "إِذًا نَقُولُ: «هُوَ لَيْسَ» لِلْمُذَكَّرِ، وَ«هِيَ لَيْسَتْ» لِلْمُؤَنَّثِ؟", translation: "Deməli kişi cinsi üçün deyil, qadın cinsi üçün deyil formaları fərqlənir?" },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 157,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "مَا هَذَانِ؟", translation: "Bu ikisi nədir?" },
            { arabic: "هَذَانِ كِتَابَانِ.", translation: "Bu ikisi iki kitabdır." },
            { arabic: "هَلْ هُمَا جَدِيدَانِ؟", translation: "O ikisi yenidir?" },
            { arabic: "لَا، هُمَا لَيْسَا جَدِيدَيْنِ.", translation: "Xeyr, o ikisi yeni deyil." },
            { arabic: "بَلْ هُمَا؟", translation: "Əksinə onlar necədir?" },
            { arabic: "هُمَا قَدِيمَانِ.", translation: "O ikisi köhnədir." },
            { arabic: "وَإِذَا كَانَتْ حَقِيبَتَيْنِ؟", translation: "Bəs iki çanta olsa?" },
            { arabic: "هُمَا لَيْسَتَا كَبِيرَتَيْنِ.", translation: "O ikisi böyük deyil." }
        ]
    },
    {
        id: 158,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "مَنْ هَؤُلَاءِ؟", translation: "Bunlar kimdir?" },
            { arabic: "هَؤُلَاءِ طُلَّابٌ.", translation: "Bunlar tələbələrdir." },
            { arabic: "هَلْ هُمْ مُدَرِّسُونَ؟", translation: "Onlar müəllimlərdir?" },
            { arabic: "لَا، هُمْ لَيْسُوا مُدَرِّسِينَ.", translation: "Xeyr, onlar müəllim deyillər." },
            { arabic: "مَنْ هُمْ؟", translation: "Onlar kimdir?" },
            { arabic: "هُمْ طُلَّابٌ.", translation: "Onlar tələbələrdir." },
            { arabic: "وَهَؤُلَاءِ طَالِبَاتٌ؟", translation: "Bəs bunlar qız tələbələrdir?" },
            { arabic: "نَعَمْ، هُنَّ طَالِبَاتٌ.", translation: "Bəli, onlar qız tələbələrdir." },
            { arabic: "هَلْ هُنَّ مُدَرِّسَاتٌ؟", translation: "Onlar müəllimələrdir?" },
            { arabic: "لَا، هُنَّ لَسْنَ مُدَرِّسَاتٍ.", translation: "Xeyr, onlar müəllimə deyillər." }
        ]
    },
    {
        id: 159,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "مَاذَا تُرِيدُ؟", translation: "Nə istəyirsiniz?" },
            { arabic: "أُرِيدُ خُبْزًا.", translation: "Çörək istəyirəm." },
            { arabic: "هٰذَا خُبْزٌ جَدِيدٌ.", translation: "Bu, təzə çörəkdir." },
            { arabic: "هَلْ هُوَ سَاخِنٌ؟", translation: "O istidir?" },
            { arabic: "لَا، هُوَ لَيْسَ سَاخِنًا.", translation: "Xeyr, o isti deyil." },
            { arabic: "وَهٰذِهِ الشُّورْبَةُ؟", translation: "Bəs bu şorba?" },
            { arabic: "هِيَ سَاخِنَةٌ.", translation: "O istidir." },
            { arabic: "إِذًا أُرِيدُ الشُّورْبَةَ.", translation: "Onda şorba istəyirəm." },
            { arabic: "حَسَنًا.", translation: "Yaxşı." }
        ]
    },
    {
        id: 160,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "يَا مُدَرِّسُ، لِمَاذَا نَقُولُ «لَيْسَ» مَعَ «هُوَ»، وَ«لَيْسَتْ» مَعَ «هِيَ»؟", translation: "Müəllim, niyə o deyərkən deyil sözü müxtəlif formalar alır?" },
            { arabic: "لِأَنَّ «لَيْسَ» تُوَافِقُ الْمُبْتَدَأَ فِي التَّذْكِيرِ وَالتَّأْنِيثِ.", translation: "Çünki deyil feil oxşarı mübtədaya kişi və qadın cinsində uyğunlaşır." },
            { arabic: "وَمَعَ «هُمَا»؟", translation: "Bəs iki nəfər olduqda?" },
            { arabic: "نَقُولُ «لَيْسَا» لِلْمُثَنَّى الْمُذَكَّرِ، وَ«لَيْسَتَا» لِلْمُثَنَّى الْمُؤَنَّثِ.", translation: "İki kişi üçün o ikisi deyil, iki qadın üçün o ikisi deyil deyirik." },
            { arabic: "وَمَعَ «هُمْ»؟", translation: "Bəs kişi cəmi ilə?" },
            { arabic: "«لَيْسُوا».", translation: "Onlar deyillər deyirik." },
            { arabic: "وَمَعَ «هُنَّ»؟", translation: "Bəs qadın cəmi ilə?" },
            { arabic: "«لَسْنَ».", translation: "Onlar deyillər deyirik." }
        ]
    },
    {
        id: 161,
        title: "Laysa - İnkar Qaydası",
        dialogue: [
            { arabic: "سَأَقُولُ جُمْلَةً، وَأَنْتَ انْفِهَا.", translation: "Mən cümlə deyəcəyəm, sən isə onu inkar et." },
            { arabic: "هَيَّا!", translation: "Gəl başlayaq!" },
            { arabic: "هٰذَا قَلَمٌ جَدِيدٌ.", translation: "Bu, yeni qələmdir." },
            { arabic: "هٰذَا لَيْسَ قَلَمًا جَدِيدًا.", translation: "Bu, yeni qələm deyil." },
            { arabic: "هٰذِهِ حَقِيبَةٌ كَبِيرَةٌ.", translation: "Bu, böyük çantadır." },
            { arabic: "هٰذِهِ لَيْسَتْ حَقِيبَةً كَبِيرَةً.", translation: "Bu, böyük çanta deyil." },
            { arabic: "هَذَانِ كِتَابَانِ جَدِيدَانِ.", translation: "Bu ikisi iki yeni kitabdır." },
            { arabic: "هَذَانِ لَيْسَا كِتَابَيْنِ جَدِيدَيْنِ.", translation: "Bu ikisi iki yeni kitab deyil." },
            { arabic: "هَؤُلَاءِ طُلَّابٌ مُجْتَهِدُونَ.", translation: "Bunlar çalışqan tələbələrdir." },
            { arabic: "هَؤُلَاءِ لَيْسُوا طُلَّابًا مُجْتَهِدِينَ.", translation: "Bunlar çalışqan tələbələr deyillər." },
            { arabic: "مُمْتَازٌ! الْآنَ عَرَفْتَ كَيْفَ تَسْتَعْمِلُ «لَيْسَ» لِلنَّفْيِ.", translation: "Əla! İndi inkar etməyi öyrəndin." }
        ]
    },
    {
        id: 162,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "مَاذَا عِنْدَكَ؟", translation: "Səndə nə var?" },
            { arabic: "عِنْدِي كِتَابٌ.", translation: "Məndə kitab var." },
            { arabic: "مَاذَا تَعْنِي «عِنْدِي»؟", translation: "«عِنْدِي» nə deməkdir?" },
            { arabic: "«عِنْدِي» تَعْنِي أَنَّ شَيْئًا مَوْجُودٌ مَعِي أَوْ أَمْلِكُهُ.", translation: "«عِنْدِي» o deməkdir ki, bir şey mənim yanımdadır və ya mənim mülkiyyətimdədir." },
            { arabic: "إِذَنْ، إِذَا كَانَ الْكِتَابُ مَعَكَ، مَاذَا تَقُولُ؟", translation: "Elə isə, əgər kitab sənin yanındadırsa, nə deyirsən?" },
            { arabic: "أَقُولُ: عِنْدِي كِتَابٌ.", translation: "Deyirəm ki: Mənim kitabım var (عِنْدِي كِتَابٌ)." },
            { arabic: "وَإِذَا كَانَ الْكِتَابُ مَعَ أَحْمَدَ؟", translation: "Bəs kitab Əhmədin yanındadırsa?" },
            { arabic: "أَقُولُ: عِنْدَ أَحْمَدَ كِتَابٌ.", translation: "Deyirəm ki: Əhmədin kitabı var (عِنْدَ أَحْمَدَ كِتَابٌ)." }
        ]
    },
    {
        id: 163,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "مَاذَا عِنْدَكَ؟", translation: "Səndə nə var?" },
            { arabic: "عِنْدِي قَلَمٌ.", translation: "Məndə qələm var." },
            { arabic: "وَمَاذَا عِنْدَهُ؟", translation: "Bəs onda (kişi) nə var?" },
            { arabic: "عِنْدَهُ دَفْتَرٌ.", translation: "Onda dəftər var." },
            { arabic: "مَاذَا نَقُولُ لِلْمُذَكَّرِ: «عِنْدَـ» مَاذَا؟", translation: "Kişi cinsi üçün «عِنْدَـ» sözünə nə artırıb deyirik?" },
            { arabic: "نَقُولُ: عِنْدَهُ.", translation: "Deyirik: عِنْدَهُ (Onda var)." },
            { arabic: "وَمَاذَا نَقُولُ لِلْمُؤَنَّثِ؟", translation: "Bəs qadın cinsi üçün nə deyirik?" },
            { arabic: "نَقُولُ: عِنْدَهَا.", translation: "Deyirik: عِنْدَهَا (Onda var)." },
            { arabic: "إِذَنْ، إِذَا كَانَتِ الْحَقِيبَةُ مَعَ فَاطِمَةَ، مَاذَا نَقُولُ؟", translation: "Elə isə, əgər çanta Fatimədədirilərsə, nə deyirik?" },
            { arabic: "عِنْدَهَا حَقِيبَةٌ.", translation: "Onda çanta var (عِنْدَهَا حَقِيبَةٌ)." }
        ]
    },
    {
        id: 164,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "هٰذَا كِتَابٌ. كِتَابُ مَنْ؟", translation: "Bu kitabdır. Kimin kitabıdır?" },
            { arabic: "كِتَابُ الطَّالِبِ.", translation: "Tələbənin kitabı." },
            { arabic: "مَاذَا نُسَمِّي «كِتَابُ الطَّالِبِ»؟", translation: "«كِتَابُ الطَّالِبِ» tərkibini necə adlandırırıq?" },
            { arabic: "الإِضَافَةَ.", translation: "İzafə (الإِضَافَةَ)." },
            { arabic: "كَمْ اسْمًا عِنْدَنَا فِي الإِضَافَةِ؟", translation: "İzafədə neçə ismimiz var?" },
            { arabic: "عِنْدَنَا اسْمَانِ.", translation: "İki ismimiz var." },
            { arabic: "مَا الِاسْمُ الْأَوَّلُ؟", translation: "Birinci isim hansıdır?" },
            { arabic: "كِتَابُ.", translation: "«كِتَابُ»." },
            { arabic: "وَمَا الِاسْمُ الثَّانِي؟", translation: "Bəs ikinci isim hansıdır?" },
            { arabic: "الطَّالِبِ.", translation: "«الطَّالِبِ»." },
            { arabic: "إِذَنْ، مَنْ صَاحِبُ الْكِتَابِ؟", translation: "Elə isə, kitabın sahibi kimdir?" },
            { arabic: "الطَّالِبُ.", translation: "Tələbə." }
        ]
    },
    {
        id: 165,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "هٰذَا بَابٌ. كَيْفَ نَقُولُ: بَابُ الْفَصْلِ؟", translation: "Bu qapıdır. \"Sinfin qapısı\" necə deyirik?" },
            { arabic: "بَابُ الْفَصْلِ.", translation: "بَابُ الْفَصْلِ (Sinfin qapısı)." },
            { arabic: "أَيْنَ «الـ» فِي «بَابُ»؟", translation: "«بَابُ» sözündə «الـ» artikli haradadır?" },
            { arabic: "لَا تُوجَدُ.", translation: "Yoxdur." },
            { arabic: "وَأَيْنَ التَّنْوِينُ فِي «بَابُ»؟", translation: "Bəs «بَابُ» sözündə tənvin haradadır?" },
            { arabic: "لَا يُوجَدُ.", translation: "Yoxdur." },
            { arabic: "لِمَاذَا لَا نَقُولُ «بَابٌ الْفَصْلِ»؟", translation: "Niyə «بَابٌ الْفَصْلِ» demirik?" },
            { arabic: "لِأَنَّ «بَابُ» مُضَافٌ، وَالْمُضَافُ لَا يَقْبَلُ التَّنْوِينَ.", translation: "Çünki «بَابُ» müzafdır və müzaf tənvin qəbul etmir." },
            { arabic: "وَهَلْ نَقُولُ «الْبَابُ الْفَصْلِ»؟", translation: "Bəs «الْبَابُ الْفَصْلِ» deyirikmi?" },
            { arabic: "لَا، فِي الإِضَافَةِ نَقُولُ: بَابُ الْفَصْلِ.", translation: "Xeyr, izafədə deyirik: بَابُ الْفَصْلِ." }
        ]
    },
    {
        id: 166,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "انْظُرْ: قَلَمُ الْمُدَرِّسِ. مَا «قَلَمُ»؟", translation: "Bax: قَلَمُ الْمُدَرِّسِ (Müəllimin qələmi). «قَلَمُ» nədir?" },
            { arabic: "هُوَ الِاسْمُ الْأَوَّلُ.", translation: "O, birinci isimdir." },
            { arabic: "وَمَاذَا نُسَمِّيهِ فِي الإِضَافَةِ؟", translation: "Bəs izafədə onu necə adlandırırıq?" },
            { arabic: "الْمُضَافَ.", translation: "Müzaf (الْمُضَافَ)." },
            { arabic: "وَمَا «الْمُدَرِّسِ»؟", translation: "Bəs «الْمُدَرِّسِ» nədir?" },
            { arabic: "هُوَ الِاسْمُ الثَّانِيُ.", translation: "O, ikinci isimdir." },
            { arabic: "وَمَاذَا نُسَمِّيهِ؟", translation: "Bəs onu necə adlandırırıq?" },
            { arabic: "الْمُضَافَ إِلَيْهِ.", translation: "Müzafun ileyh (الْمُضَافَ إِلَيْهِ)." },
            { arabic: "وَمَا حَرَكَةُ آخِرِ الْمُضَافِ إِلَيْهِ؟", translation: "Bəs müzafun ileyhin sonunun hərəkəsi nədir?" },
            { arabic: "الْكَسْرَةُ.", translation: "Kəsrədir." },
            { arabic: "إِذَنْ، كَيْفَ نَقُولُ؟", translation: "Elə isə, necə deyirik?" },
            { arabic: "قَلَمُ الْمُدَرِّسِ.", translation: "قَلَمُ الْمُدَرِّسِ (Müəllimin qələmi)." }
        ]
    },
    {
        id: 167,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "هَلْ عِنْدَكَ مِفْتَاحٌ؟", translation: "Səndə açar var?" },
            { arabic: "نَعَمْ، عِنْدِي مِفْتَاحٌ.", translation: "Bəli, məndə açar var." },
            { arabic: "مِفْتَاحُ مَاذَا؟", translation: "Nəyin açarı?" },
            { arabic: "مِفْتَاحُ الْبَابِ.", translation: "Qapının açarı (مِفْتَاحُ الْبَابِ)." },
            { arabic: "لِمَاذَا قُلْنَا «الْبَابِ» بِالْكَسْرَةِ؟", translation: "Niyə «الْبَابِ» sözünü kəsrə ilə dedik?" },
            { arabic: "لِأَنَّهُ الْمُضَافُ إِلَيْهِ.", translation: "Çünki o, müzafun ileyhdir." },
            { arabic: "وَمَاذَا نَقُولُ إِذَا كَانَ الْمِفْتَاحُ لِلْبَيْتِ؟", translation: "Bəs açar evin açarı olsaydı nə deyərdik?" },
            { arabic: "مِفْتَاحُ الْبَيْتِ.", translation: "Evin açarı (مِفْتَاحُ الْبَيْتِ)." },
            { arabic: "وَإِذَا كَانَ لِلْغُرْفَةِ؟", translation: "Bəs otağın açarı olsaydı?" },
            { arabic: "مِفْتَاحُ الْغُرْفَةِ.", translation: "Otağın açarı (مِفْتَاحُ الْغُرْفَةِ)." }
        ]
    },
    {
        id: 168,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "عِنْدِي كِتَابٌ. هَلْ نَقُولُ: «كِتَابُ الطَّالِبِ»؟", translation: "Məndə kitab var. «كِتَابُ الطَّالِبِ» (Tələbənin kitabı) deyirikmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ نَقُولُ: «كِتَابٌ الطَّالِبِ»؟", translation: "Bəs «كِتَابٌ الطَّالِبِ» deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ «كِتَابَ» مُضَافٌ، وَالْمُضَافُ لَا يَكُونُ مُنَوَّنًا.", translation: "Çünki «كِتَابُ» müzafdır və müzaf tənvinli olmur." },
            { arabic: "وَمَاذَا نَقُولُ لِصَاحِبِ الْكِتَابِ؟", translation: "Bəs kitabın sahibinə necə deyirik?" },
            { arabic: "الطَّالِبُ.", translation: "الطَّالِبُ (Tələbə)." },
            { arabic: "إِذَنْ؟", translation: "Elə isə?" },
            { arabic: "كِتَابُ الطَّالِبِ.", translation: "كِتَابُ الطَّالِبِ (Tələbənin kitabı)." }
        ]
    },
    {
        id: 169,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "مَاذَا عِنْدَ فَاطِمَةَ؟", translation: "Fatimədə nə var?" },
            { arabic: "عِنْدَهَا حَقِيبَةٌ.", translation: "Onda çanta var." },
            { arabic: "حَقِيبَةُ مَنْ؟", translation: "Kimin çantası?" },
            { arabic: "حَقِيبَةُ فَاطِمَةَ.", translation: "Fatimənin çantası (حَقِيبَةُ فَاطِمَةَ)." },
            { arabic: "هَلْ «فَاطِمَةَ» مَجْرُورَةٌ بِالْكَسْرَةِ؟", translation: "«فَاطِمَةَ» sözü kəsrə ilə məcrurdurmu?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ «فَاطِمَةَ» اسْمٌ مَمْنُوعٌ مِنَ الصَّرْفِ.", translation: "Çünki «فَاطِمَةَ» qeyri-munsərif (مَمْنُوعٌ مِنَ الصَّرْفِ) ismidir." },
            { arabic: "وَمَاذَا نَتَعَلَّمُ مِنْ ذٰلِكَ؟", translation: "Bundan nə öyrənirik?" },
            { arabic: "نَتَعَلَّمُ أَنَّ الْمُضَافَ إِلَيْهِ مَجْرُورٌ، وَلَكِنْ عَلَامَةَ الْجَرِّ قَدْ تَكُونُ الْكَسْرَةَ أَوْ غَيْرَهَا.", translation: "Öyrənirik ki, müzafun ileyh məcrurdur, lakin cər əlaməti kəsrə də ola bilər, başqa şey də." }
        ]
    },
    {
        id: 170,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "سَنُرَاجِعُ. مَاذَا عِنْدَكَ؟", translation: "Təkrar edəcəyik. Səndə nə var?" },
            { arabic: "عِنْدِي كِتَابٌ.", translation: "Məndə kitab var." },
            { arabic: "كِتَابُ مَنْ؟", translation: "Kimin kitabı?" },
            { arabic: "كِتَابُ الطَّالِبِ.", translation: "Tələbənin kitabı." },
            { arabic: "مَا الْمُضَافُ؟", translation: "Müzaf hansıdır?" },
            { arabic: "«كِتَابُ».", translation: "«كِتَابُ»." },
            { arabic: "وَمَا الْمُضَافُ إِلَيْهِ؟", translation: "Bəs müzafun ileyh hansıdır?" },
            { arabic: "«الطَّالِبِ».", translation: "«الطَّالِبِ»." },
            { arabic: "هَلْ الْمُضَافُ مَنَوَّنٌ؟", translation: "Müzaf tənvinlidirmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "هَلْ الْمُضَافُ إِلَيْهِ مَجْرُورٌ؟", translation: "Müzafun ileyh məcrurdurmu?" },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 171,
        title: "İzafə (Mülkiyyət Tərkibi) və 'Onda Var' (Ind)",
        dialogue: [
            { arabic: "الْآنَ اخْتِبَارٌ صَغِيرٌ. مَاذَا عِنْدَكَ؟", translation: "İndi kiçik bir sınaq. Səndə nə var?" },
            { arabic: "عِنْدِي قَلَمٌ.", translation: "Məndə qələm var." },
            { arabic: "قَلَمُ مَنْ؟", translation: "Kimin qələmi?" },
            { arabic: "قَلَمُ الْمُدَرِّسِ.", translation: "Müəllimin qələmi." },
            { arabic: "مَا الْقَاعِدَةُ الْأُولَى؟", translation: "Birinci qayda nədir?" },
            { arabic: "نَقُولُ: عِنْدِي، عِنْدَكَ، عِنْدَهُ، عِنْدَهَا لِلدَّلَالَةِ عَلَى وُجُودِ شَيْءٍ مَعَ شَخْصٍ.", translation: "Bir şeyin şəxsin yanında olduğunu bildirmək üçün: عِنْدِي، عِنْدَكَ، عِنْدَهُ، عِنْدَهَا deyirik." },
            { arabic: "وَمَا الْقَاعِدَةُ الثَّانِيَةُ؟", translation: "Bəs ikinci qayda nədir?" },
            { arabic: "نَسْتَعْمِلُ الإِضَافَةَ لِرَبْطِ اسْمَيْنِ، مِثْلَ: قَلَمُ الْمُدَرِّسِ.", translation: "İki ismi bir-birinə bağlamaq üçün izafədən istifadə edirik, məsələn: قَلَمُ الْمُدَرِّسِ." },
            { arabic: "وَمَا الْقَاعِدَةُ الثَّالِثَةُ؟", translation: "Bəs üçüncü qayda nədir?" },
            { arabic: "الْمُضَافُ لَا يَأْتِي مَعَهُ التَّنْوِينُ، وَالْمُضَافُ إِلَيْهِ يَكُونُ مَجْرُورًا.", translation: "Müzafla birlikdə tənvin gəlmir, müzafun ileyh isə məcrur olur." },
            { arabic: "أَحْسَنْتَ! الآنَ أَنْتَ تَسْتَطِيعُ أَنْ تَقُولَ: «عِنْدِي كِتَابُ الطَّالِبِ».", translation: "Afərin! İndi sən «عِنْدِي كِتَابُ الطَّالِبِ» deyə bilərsən." },
            { arabic: "نَعَمْ، عِنْدِي كِتَابُ الطَّالِبِ.", translation: "Bəli, məndə tələbənin kitabı var." }
        ]
    },
    {
        id: 172,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "مَاذَا فَعَلَ أَحْمَدُ؟", translation: "Əhməd nə etdi?" },
            { arabic: "قَرَأَ الْكِتَابَ.", translation: "Kitabı oxudu." },
            { arabic: "مَنْ قَرَأَ؟", translation: "Kim oxudu?" },
            { arabic: "هُوَ قَرَأَ.", translation: "O oxudu." },
            { arabic: "مَاذَا نُسَمِّي «قَرَأَ»؟", translation: "«قَرَأَ» sözünü necə adlandırırıq?" },
            { arabic: "فِعْلًا مَاضِيًا.", translation: "Feili-madi (keçmiş zaman feili)." },
            { arabic: "لِمَاذَا نَقُولُ «قَرَأَ»؟", translation: "Niyə «قَرَأَ» deyirik?" },
            { arabic: "لِأَنَّ الْفِعْلَ حَدَثَ فِي الْمَاضِي.", translation: "Çünki iş keçmişdə baş verib." },
            { arabic: "إِذَنْ، مَاذَا فَعَلَ أَحْمَدُ؟", translation: "Elə isə, Əhməd nə etdi?" },
            { arabic: "قَرَأَ.", translation: "Oxudu." }
        ]
    },
    {
        id: 173,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "أَحْمَدُ قَرَأَ. وَمَاذَا فَعَلَتْ فَاطِمَةُ؟", translation: "Əhməd oxudu. Bəs Fatimə nə etdi?" },
            { arabic: "قَرَأَتْ الْكِتَابَ.", translation: "Kitabı oxudu." },
            { arabic: "مَا الْفَرْقُ بَيْنَ «قَرَأَ» وَ«قَرَأَتْ»؟", translation: "«قَرَأَ» ilə «قَرَأَتْ» arasındakı fərq nədir?" },
            { arabic: "«قَرَأَ» لِلْمُذَكَّرِ، وَ«قَرَأَتْ» لِلْمُؤَنَّثِ.", translation: "«قَرَأَ» kişi cinsi üçün, «قَرَأَتْ» isə qadın cinsi üçündür." },
            { arabic: "أَيْنَ زَادَتِ التَّاءُ؟", translation: "\"Tə\" hərfi harada artırıldı?" },
            { arabic: "فِي آخِرِ الْفِعْلِ.", translation: "Feilin sonunda." },
            { arabic: "إِذَنْ، إِذَا قُلْنَا «هِيَ»، مَاذَا نَقُولُ؟", translation: "Elə isə, «هِيَ» (O - qadın) desək, nə deyirik?" },
            { arabic: "هِيَ قَرَأَتْ.", translation: "O oxudu (هِيَ قَرَأَتْ)." },
            { arabic: "وَإِذَا قُلْنَا «هُوَ»؟", translation: "Bəs «هُوَ» (O - kişi) desək?" },
            { arabic: "هُوَ قَرَأَ.", translation: "O oxudu (هُوَ قَرَأَ)." }
        ]
    },
    {
        id: 174,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "أَنَا قَرَأْتُ الْكِتَابَ. مَاذَا تَلَاحِظُ؟", translation: "Mən kitabı oxudum (أَنَا قَرَأْتُ). Nə müşahidə edirsən?" },
            { arabic: "زَادَتْ «تُ» فِي آخِرِ الْفِعْلِ.", translation: "Feilin sonunda «تُ» artırıldı." },
            { arabic: "صَحِيحٌ. «قَرَأَ» لِمَنْ؟", translation: "Doğrudur. «قَرَأَ» kim üçündür?" },
            { arabic: "لِهُوَ.", translation: "«هُوَ» (O) üçün." },
            { arabic: "وَ«قَرَأْتُ» لِمَنْ؟", translation: "Bəs «قَرَأْتُ» kim üçündür?" },
            { arabic: "لِأَنَا.", translation: "«أَنَا» (Mən) üçün." },
            { arabic: "إِذَنْ، كَيْفَ نَقُولُ: أَنَا ذَهَبَ؟", translation: "Elə isə, \"أَنَا ذَهَبَ\" deyə bilərikmi?" },
            { arabic: "لَا نَقُولُ «أَنَا ذَهَبَ».", translation: "\"أَنَا ذَهَبَ\" demirik." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Bəs nə deyirik?" },
            { arabic: "نَقُولُ: أَنَا ذَهَبْتُ.", translation: "Deyirik ki: Mən getdim (أَنَا ذَهَبْتُ)." },
            { arabic: "أَحْسَنْتَ.", translation: "Afərin." }
        ]
    },
    {
        id: 175,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "أَنْتَ قَرَأْتَ الْكِتَابَ. مَاذَا أَضَفْنَا؟", translation: "Sən kitabı oxudun (أَنْتَ قَرَأْتَ). Nə əlavə etdik?" },
            { arabic: "أَضَفْنَا «تَ».", translation: "«تَ» əlavə etdik." },
            { arabic: "وَإِذَا كُنْتِ أَنْتِ الْمُخَاطَبَةَ، مَاذَا نَقُولُ؟", translation: "Bəs müraciət olunan qadındırsa (أَنْتِ), nə deyirik?" },
            { arabic: "أَنَا قَرَأْتُ، وَأَنْتِ قَرَأْتِ.", translation: "Mən oxudum (أَنَا قَرَأْتُ), sən oxudun (أَنْتِ قَرَأْتِ)." },
            { arabic: "مَا الْفَرْقُ بَيْنَ «قَرَأْتَ» وَ«قَرَأْتِ»؟", translation: "«قَرَأْتَ» ilə «قَرَأْتِ» arasındakı fərq nədir?" },
            { arabic: "«قَرَأْتَ» لِأَنْتَ، وَ«قَرَأْتِ» لِأَنْتِ.", translation: "«قَرَأْتَ» «أَنْتَ» (sən - kişi) üçün, «قَرَأْتِ» isə «أَنْتِ» (sən - qadın) üçündür." },
            { arabic: "وَمَا الَّذِي يُبَيِّنُ الْفَرْقَ؟", translation: "Bəs fərqi nə göstərir?" },
            { arabic: "الْفَتْحَةُ فِي «تَ»، وَالْكَسْرَةُ فِي «تِ».", translation: "«تَ»-dəki fəthə və «تِ»-dəki kəsrə." }
        ]
    },
    {
        id: 176,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "سَنُرَاجِعُ الْآنَ. أَحْمَدُ فِي الْأَمْسِ كَتَبَ. مَاذَا نَقُولُ؟", translation: "İndi təkrar edəcəyik. Əhməd dünən yazdı. Nə deyirik?" },
            { arabic: "هُوَ كَتَبَ.", translation: "O yazdı (هُوَ كَتَبَ)." },
            { arabic: "فَاطِمَةُ؟", translation: "Fatimə?" },
            { arabic: "هِيَ كَتَبَتْ.", translation: "O yazdı (هِيَ كَتَبَتْ)." },
            { arabic: "أَنَا؟", translation: "Mən?" },
            { arabic: "أَنَا كَتَبْتُ.", translation: "Mən yazdım (أَنَا كَتَبْتُ)." },
            { arabic: "أَنْتَ؟", translation: "Sən (kişi)?" },
            { arabic: "أَنْتَ كَتَبْتَ.", translation: "Sən yazdın (أَنْتَ كَتَبْتَ)." },
            { arabic: "أَنْتِ؟", translation: "Sən (qadın)?" },
            { arabic: "أَنْتِ كَتَبْتِ.", translation: "Sən yazdın (أَنْتِ كَتَبْتِ)." },
            { arabic: "إِذَنْ، هَلْ يَبْقَى الْفِعْلُ الْمَاضِي كَمَا هُوَ مَعَ جَمِيعِ الْأَشْخَاصِ؟", translation: "Elə isə, keçmiş zaman feili bütün şəxslərdə olduğu kimi qalırmı?" },
            { arabic: "لَا، يَتَغَيَّرُ آخِرُهُ بِحَسَبِ الشَّخْصِ.", translation: "Xeyr, şəxsə görə sonu dəyişir." }
        ]
    },
    {
        id: 177,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "أَنَا كَتَبْتُ، وَأَنْتَ مَاذَا فَعَلْتَ؟", translation: "Mən yazdım, bəs sən nə etdin?" },
            { arabic: "أَنَا كَتَبْتُ.", translation: "Mən yazdım." },
            { arabic: "لَا، أَنَا أَسْأَلُكَ عَنْ نَفْسِكَ. مَاذَا تَقُولُ؟", translation: "Xeyr, mən səndən özün haqqında soruşuram. Nə deyirsən?" },
            { arabic: "أَنَا كَتَبْتُ.", translation: "Mən yazdım." },
            { arabic: "جَيِّدٌ. وَأَنَا مَاذَا أَقُولُ؟", translation: "Yaxşı. Bəs mən nə deyirəm?" },
            { arabic: "أَنْتَ كَتَبْتَ.", translation: "Sən yazdın (أَنْتَ كَتَبْتَ)." },
            { arabic: "إِذَنْ، مَا الْفَرْقُ بَيْنَ «كَتَبْتُ» وَ«كَتَبْتَ»؟", translation: "Elə isə, «كَتَبْتُ» ilə «كَتَبْتَ» arasındakı fərq nədir?" },
            { arabic: "«كَتَبْتُ» لِأَنَا، وَ«كَتَبْتَ» لِأَنْتَ.", translation: "«كَتَبْتُ» «أَنَا» (mən) üçün, «كَتَبْتَ» isə «أَنْتَ» (sən) üçündür." }
        ]
    },
    {
        id: 178,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "مَاذَا فَعَلَ الطَّالِبَانِ؟", translation: "İki tələbə nə etdi?" },
            { arabic: "كَتَبَا.", translation: "Yazdılar (كَتَبَا - iki nəfər)." },
            { arabic: "لِمَاذَا قُلْنَا «كَتَبَا»؟", translation: "Niyə «كَتَبَا» dedik?" },
            { arabic: "لِأَنَّ الْفَاعِلَ اثْنَانِ.", translation: "Çünki subyekt (fəal) iki nəfərdir." },
            { arabic: "مَاذَا نُضِيفُ إِلَى «كَتَبَ»؟", translation: "«كَتَبَ» sözünə nə əlavə edirik?" },
            { arabic: "نُضِيفُ «ا» فِي آخِرِهِ.", translation: "Sonuna əlif «ا» əlavə edirik." },
            { arabic: "إِذَنْ، «هُمَا» لِلْمُذَكَّرِ مَاذَا يَفْعَلَانِ فِي الْمَاضِي؟", translation: "Elə isə, kişi cinsi üçün «هُمَا» (o ikisi) keçmiş zamand nə edir?" },
            { arabic: "هُمَا كَتَبَا.", translation: "O ikisi yazdı (هُمَا كَتَبَا)." }
        ]
    },
    {
        id: 179,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "مَاذَا فَعَلَتِ الطَّالِبَتَانِ؟", translation: "İki qadın tələbə nə etdi?" },
            { arabic: "كَتَبَتَا.", translation: "Yazdılar (كَتَبَتَا - iki qadın)." },
            { arabic: "مَا الْفَرْقُ بَيْنَ «كَتَبَا» وَ«كَتَبَتَا»؟", translation: "«كَتَبَا» ilə «كَتَبَتَا» arasındakı fərq nədir?" },
            { arabic: "«كَتَبَا» لِلْمُذَكَّرَيْنِ، وَ«كَتَبَتَا» لِلْمُؤَنَّثَتَيْنِ.", translation: "«كَتَبَا» iki kişi üçündür, «كَتَبَتَا» isə iki qadın üçündür." },
            { arabic: "مَاذَا أَضَفْنَا إِلَى «كَتَبَتْ»؟", translation: "«كَتَبَتْ» feilinə nə əlavə etdik?" },
            { arabic: "أَضَفْنَا «ا».", translation: "Əlif «ا» əlavə etdik." },
            { arabic: "إِذَنْ، كَيْفَ نَقُولُ: «هُمَا ذَهَبَ»؟", translation: "Elə isə, \"O ikisi getdi\" (kişi) necə deyirik?" },
            { arabic: "هُمَا ذَهَبَا.", translation: "O ikisi getdi (هُمَا ذَهَبَا)." }
        ]
    },
    {
        id: 180,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "مَاذَا فَعَلَ الطُّلَّابُ؟", translation: "Tələbələr nə etdilər?" },
            { arabic: "كَتَبُوا.", translation: "Yazdılar (كَتَبُوا)." },
            { arabic: "لِمَاذَا قُلْنَا «كَتَبُوا» وَلَمْ نَقُلْ «كَتَبَ»؟", translation: "Niyə «كَتَبُوا» dedik, «كَتَبَ» demədik?" },
            { arabic: "لِأَنَّ «هُمْ» جَمْعٌ لِلْمُذَكَّرِ.", translation: "Çünki «هُمْ» (onlar) kişi cinsi üçün cəmdir." },
            { arabic: "مَاذَا زَادَ فِي آخِرِ الْفِعْلِ؟", translation: "Feilin sonunda nə artdı?" },
            { arabic: "زَادَتْ «وَاوٌ وَأَلِفٌ».", translation: "Vav və əlif («وا») artdı." },
            { arabic: "إِذَنْ، كَيْفَ نَقُولُ: هُمْ ذَهَبَ؟", translation: "Elə isə, \"Onlar getdilər\" necə deyirik?" },
            { arabic: "هُمْ ذَهَبُوا.", translation: "Onlar getdilər (هُمْ ذَهَبُوا)." }
        ]
    },
    {
        id: 181,
        title: "Feili-Madi (Keçmiş Zaman) - Şəxs Uzlaşması",
        dialogue: [
            { arabic: "وَالطَّالِبَاتُ، مَاذَا فَعَلْنَ؟", translation: "Bəs qadın tələbələr nə etdilər?" },
            { arabic: "كَتَبْنَ.", translation: "Yazdılar (كَتَبْنَ)." },
            { arabic: "لِمَاذَا قُلْنَا «كَتَبْنَ»؟", translation: "Niyə «كَتَبْنَ» dedik?" },
            { arabic: "لِأَنَّ «هُنَّ» جَمْعٌ لِلْمُؤَنَّثِ.", translation: "Çünki «هُنَّ» (onlar) qadın cinsi üçün cəmdir." },
            { arabic: "إِذَنْ، مَا نِهَايَةُ الْفِعْلِ مَعَ «هُنَّ»؟", translation: "Elə isə, «هُنَّ» ilə feilin sonluğu nədir?" },
            { arabic: "«نَ».", translation: "«نَ» (nun)." },
            { arabic: "أَعْطِنِي الْخَمْسَةَ بِالتَّرْتِيبِ.", translation: "Mənə sırayla 5 formanı de." },
            { arabic: "هُوَ كَتَبَ، هِيَ كَتَبَتْ، أَنَا كَتَبْتُ، أَنْتَ كَتَبْتَ، أَنْتِ كَتَبْتِ.", translation: "O yazdı (هُوَ كَتَبَ), o yazdı (هِيَ كَتَبَتْ), mən yazdım (أَنَا كَتَبْتُ), sən yazdın (أَنْتَ كَتَبْتَ), sən yazdın (أَنْتِ كَتَبْتِ)." }
        ]
    },
    {
        id: 182,
        title: "Feili-Müzari (İndiki-Gələcək Zaman)",
        dialogue: [
            { arabic: "مَاذَا يَفْعَلُ أَحْمَدُ الآنَ؟", translation: "Əhməd indi nə edir?" },
            { arabic: "يَقْرَأُ الْكِتَابَ.", translation: "Kitabı oxuyur." },
            { arabic: "مَاذَا نُسَمِّي «يَقْرَأُ»؟", translation: "«يَقْرَأُ» sözünü necə adlandırırıq?" },
            { arabic: "فِعْلًا مُضَارِعًا.", translation: "Feili-müzari (indiki-gələcək zaman feili)." },
            { arabic: "لِمَاذَا نَقُولُ «يَقْرَأُ» وَلَا نَقُولُ «قَرَأَ»؟", translation: "Niyə «قَرَأَ» demirik, «يَقْرَأُ» deyirik?" },
            { arabic: "لِأَنَّ «يَقْرَأُ» يَدُلُّ عَلَى الْحَالِ أَوِ الِاسْتِقْبَالِ، أَمَّا «قَرَأَ» فَيَدُلُّ عَلَى الْمَاضِي.", translation: "Çünki «يَقْرَأُ» indiki və ya gələcək zamana dəlalət edir, «قَرَأَ» isə keçmiş zamana dəlalət edir." },
            { arabic: "إِذَنْ، مَاذَا يَفْعَلُ أَحْمَدُ؟", translation: "Elə isə, Əhməd nə edir?" },
            { arabic: "هُوَ يَقْرَأُ.", translation: "O oxuyur (هُوَ يَقْرَأُ)." }
        ]
    },
    {
        id: 183,
        title: "Feili-Müzari (İndiki-Gələcək Zaman)",
        dialogue: [
            { arabic: "أَحْمَدُ يَقْرَأُ. وَفَاطِمَةُ، مَاذَا تَفْعَلُ؟", translation: "Əhməd oxuyur. Bəs Fatimə nə edir?" },
            { arabic: "هِيَ تَقْرَأُ.", translation: "O oxuyur (هِيَ تَقْرَأُ)." },
            { arabic: "مَاذَا تَلَاحِظُ؟", translation: "Nə müşahidə edirsən?" },
            { arabic: "قُلْنَا «يَقْرَأُ» مَعَ «هُوَ»، وَقُلْنَا «تَقْرَأُ» مَعَ «هِيَ».", translation: "«هُوَ» ilə «يَقْرَأُ» dedik, «هِيَ» ilə isə «تَقْرَأُ» dedik." },
            { arabic: "مَاذَا تَغَيَّرَ فِي أَوَّلِ الْفِعْلِ؟", translation: "Feilin əvvəlində nə dəyişdi?" },
            { arabic: "تَغَيَّرَ حَرْفُ الْمُضَارَعَةِ مِنَ «يـ» إِلَى «تـ».", translation: "Muzari hərfi «يـ»-dən «تـ»-yə dəyişdi." },
            { arabic: "أَحْسَنْتَ. إِذَنْ: هُوَ؟", translation: "Afərin. Elə isə: O (kişi)?" },
            { arabic: "هُوَ يَقْرَأُ.", translation: "O oxuyur (هُوَ يَقْرَأُ)." },
            { arabic: "هِيَ؟", translation: "O (qadın)?" },
            { arabic: "هِيَ تَقْرَأُ.", translation: "O oxuyur (هِيَ تَقْرَأُ)." }
        ]
    },
    {
        id: 184,
        title: "Feili-Müzari (İndiki-Gələcək Zaman)",
        dialogue: [
            { arabic: "أَنَا أَقْرَأُ الْكِتَابَ. مَاذَا تَلَاحِظُ؟", translation: "Mən kitabı oxuyuram (أَنَا أَقْرَأُ). Nə müşahidə edirsən?" },
            { arabic: "قُلْتَ «أَقْرَأُ».", translation: "Dediniz «أَقْرَأُ»." },
            { arabic: "صَحِيحٌ. مَعَ «أَنَا» نَقُولُ «أَقْرَأُ». وَمَعَ «أَنْتَ»؟", translation: "Doğrudur. «أَنَا» (mən) ilə «أَقْرَأُ» deyirik. Bəs «أَنْتَ» (sən - kişi) ilə?" },
            { arabic: "أَنْتَ تَقْرَأُ.", translation: "Sən oxuyursan (أَنْتَ تَقْرَأُ)." },
            { arabic: "وَمَعَ «أَنْتِ»؟", translation: "Bəs «أَنْتِ» (sən - qadın) ilə?" },
            { arabic: "أَنْتِ تَقْرَئِينَ.", translation: "Sən oxuyursan (أَنْتِ تَقْرَئِينَ)." },
            { arabic: "لِمَاذَا قُلْنَا «تَقْرَئِينَ»؟", translation: "Niyə «تَقْرَئِينَ» dedik?" },
            { arabic: "لِأَنَّ الْفِعْلَ الْمُضَارِعَ مَعَ «أَنْتِ» يَنْتَهِي بِـ«ينَ».", translation: "Çünki «أَنْتِ» ilə indiki zaman feili «ينَ» ilə bitir." },
            { arabic: "إِذَنْ، مَاذَا تَفْعَلِينَ؟", translation: "Elə isə, sən nə edirsən?" },
            { arabic: "أَقْرَأُ الْكِتَابَ.", translation: "Kitabı oxuyuram." }
        ]
    },
    {
        id: 185,
        title: "Feili-Müzari (İndiki-Gələcək Zaman)",
        dialogue: [
            { arabic: "مَاذَا يَفْعَلُ الطَّالِبَانِ؟", translation: "İki tələbə nə edir?" },
            { arabic: "هُمَا يَقْرَآنِ.", translation: "O ikisi oxuyur (هُمَا يَقْرَآنِ)." },
            { arabic: "وَمَاذَا يَفْعَلُ الطُّلَّابُ؟", translation: "Bəs tələbələr nə edirlər?" },
            { arabic: "هُمْ يَقْرَؤُونَ.", translation: "Onlar oxuyurlar (هُمْ يَقْرَؤُونَ)." },
            { arabic: "مَا الْفَرْقُ بَيْنَ «يَقْرَآنِ» وَ«يَقْرَؤُونَ»؟", translation: "«يَقْرَآنِ» ilə «يَقْرَؤُونَ» arasındakı fərq nədir?" },
            { arabic: "«يَقْرَآنِ» لِلْمُثَنَّى، وَ«يَقْرَؤُونَ» لِجَمْعِ الْمُذَكَّرِ.", translation: "«يَقْرَآنِ» təsniyə (iki nəfər) üçün, «يَقْرَؤُونَ» isə kişi cinsi cəmi üçündür." },
            { arabic: "وَهُنَّ؟", translation: "Bəs onlar (qadınlar)?" },
            { arabic: "هُنَّ يَقْرَأْنَ.", translation: "Onlar oxuyurlar (هُنَّ يَقْرَأْنَ)." },
            { arabic: "إِذَنْ، هَلْ يَتَغَيَّرُ الْفِعْلُ الْمُضَارِعُ بِحَسَبِ الشَّخْصِ؟", translation: "Elə isə, indiki zaman feili şəxsə görə dəyişirmi?" },
            { arabic: "نَعَمْ، يَتَغَيَّرُ بِحَسَبِ الشَّخْصِ وَالْعَدَدِ وَالْجِنْسِ.", translation: "Bəli, şəxsə, saya və cinsə görə dəyişir." }
        ]
    },
    {
        id: 186,
        title: "Feili-Müzari (İndiki-Gələcək Zaman)",
        dialogue: [
            { arabic: "سَنُرَاجِعُ. هُوَ؟", translation: "Təkrar edəcəyik. O (kişi)?" },
            { arabic: "هُوَ يَكْتُبُ.", translation: "O yazır (هُوَ يَكْتُبُ)." },
            { arabic: "هِيَ؟", translation: "O (qadın)?" },
            { arabic: "هِيَ تَكْتُبُ.", translation: "O yazır (هِيَ تَكْتُبُ)." },
            { arabic: "أَنَا؟", translation: "Mən?" },
            { arabic: "أَنَا أَكْتُبُ.", translation: "Mən yazıram (أَنَا أَكْتُبُ)." },
            { arabic: "أَنْتَ؟", translation: "Sən (kişi)?" },
            { arabic: "أَنْتَ تَكْتُبُ.", translation: "Sən yazırsan (أَنْتَ تَكْتُبُ)." },
            { arabic: "أَنْتِ؟", translation: "Sən (qadın)?" },
            { arabic: "أَنْتِ تَكْتُبِينَ.", translation: "Sən yazırsan (أَنْتِ تَكْتُبِينَ)." },
            { arabic: "مَا الْفَرْقُ بَيْنَ «كَتَبَ» وَ«يَكْتُبُ»؟", translation: "«كَتَبَ» ilə «يَكْتُبُ» arasındakı fərq nədir?" },
            { arabic: "«كَتَبَ» فِعْلٌ مَاضٍ، وَ«يَكْتُبُ» فِعْلٌ مُضَارِعٌ.", translation: "«كَتَبَ» keçmiş zaman (madi) feilidir, «يَكْتُبُ» isə indiki zaman (müzari) feilidir." },
            { arabic: "وَمَاذَا يَدُلُّ الْفِعْلُ الْمُضَارِعُ؟", translation: "Bəs indiki zaman feili nəyə dəlalət edir?" },
            { arabic: "يَدُلُّ عَلَى الْحَالِ أَوِ الِاسْتِقْبَالِ.", translation: "İndiki və ya gələcək zamana dəlalət edir." }
        ]
    }
];
