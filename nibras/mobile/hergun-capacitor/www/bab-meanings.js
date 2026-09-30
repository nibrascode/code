// İstifadəçi tərəfindən təsdiqlənmiş feil babları.
// Siyahıda olmayan bablar qəsdən "bu baba salınmır" kimi göstərilir.
const BAB_MEANING_OVERRIDES = {
    'قَرَأَ': {
        I: { meaning: 'oxudu' },
        _note: 'Bu kökdə həmzə (ء) kök hərfidir və bab qəlibləri üzrə dəyişmir. Qəlibə əlavə olunan ا kök hərfi deyil; bu baba aid təsdiqlənmiş forma kimi qəbul edilmir.'
    },
    'أَكَلَ': {
        I: { meaning: 'yedi' },
        II: { meaning: 'yedirtmək / yemək vermək', arabic: 'أَكَّلَ' },
        III: {
            meaning: null,
            applicable: false,
            arabic: 'آكَلَ',
            note: 'آكَلَ forması bu kök üçün III bab mənası kimi ayrıca lüğət təsdiqi tələb edir; avtomatik məna verilmir və bu baba daxil edilmir.'
        },
        IV: {
            meaning: null,
            applicable: false,
            arabic: 'آكَلَ',
            note: 'آكَلَ yazılışı III babın səthi forması ilə qarışa bildiyi üçün lüğət təsdiqi olmadan IV bab mənası verilmir və bu baba daxil edilmir.'
        },
        _note: 'Bu kökdə yalnız ayrıca təsdiqlənmiş bab mənaları göstərilir. Qalan bablarda mexaniki qəlibdən məna çıxarılmır ki, formalar və mənalar bir-birinə qarışmasın.'
    },
    'كَتَبَ': {
        I: { meaning: 'yazdı' },
        II: { meaning: 'yazdırdı (çoxlu yazdırdı)' },
        III: { meaning: 'yazışdı (kiminləsə)' },
        IV: { meaning: 'yazdırdı (yazmağa məcbur etdi / səbəb oldu)' },
        V: { meaning: 'dəstə şəklində toplandı' },
        VI: { meaning: 'qarşılıqlı yazışdılar' },
        VII: { meaning: 'yazıldı' },
        VIII: { meaning: '(özü üçün) yazdı / qeydiyyatdan keçdi' },
        IX: { meaning: null, applicable: false, note: 'Bu bab bu fel üçün adətən istifadə olunmur; rənglər və qüsurlar üçündür.' },
        X: { meaning: 'yazılmasını istədi / yazdırdı' }
    },
    'ذَهَبَ': {
        I: { meaning: 'getdi' },
        II: { meaning: 'qızılla çəkdi (qızıl suyuna saldı)' },
        III: {
            meaning: null,
            applicable: false,
            note: 'Bu kök III babın فَاعَلَ qəlibinə salınmır; ذَاهَبَ bu fel üçün təsdiqlənmiş feil deyil. ذَاهِبٌ isə I bab ذَهَبَ felinin ism-failidir, III bab feili deyil.'
        },
        IV: { meaning: 'apardı / yox etdi' },
        VII: { meaning: 'gedildi (məchul məna, nadir işlənir)' },
        VIII: { meaning: null, applicable: false },
        _note: 'Bu fel digər bablara salınmır; klassik ərəb dilində bu bablar nadir hallarda məna kəsb edir.'
    },
    'شَرِبَ': {
        I: { meaning: 'içdi' },
        II: { meaning: 'içirtdi / hopdurdu' },
        III: { meaning: 'birlikdə içdi' },
        IV: { meaning: 'içməyə verdi / hopdurdu' },
        V: { meaning: 'canına çəkdi / hopdu (məsələn, suyun torpağa)' },
        VI: { meaning: 'birlikdə içdilər' },
        VIII: { meaning: 'içdi (özü üçün)' },
        X: { meaning: 'içmək istədi' }
    },
    'فَهِمَ': {
        I: { meaning: 'anladı' },
        II: { meaning: 'başa saldı / anlatdı' },
        III: { meaning: 'qarşılıqlı anladı' },
        IV: { meaning: 'başa saldı / bildirdi' },
        V: { meaning: 'anlamağa çalışdı / anlayışla qarşıladı' },
        VI: { meaning: 'qarşılıqlı razılığa gəldilər / bir-birini anladılar' },
        VII: { meaning: 'anlaşıldı' },
        VIII: { meaning: 'anladı' },
        X: { meaning: 'soruşdu / izahını istədi' }
    },
    'حَفِظَ': {
        I: { meaning: 'qorudu / əzbərlədi' },
        II: { meaning: 'əzbərlətdi' },
        III: { meaning: 'qorudu / mühafizə etdi (على sözönü ilə)' },
        IV: { meaning: 'əzbərlətdi / qəzəbləndirdi' },
        V: { meaning: 'ehtiyatlı oldu / qorundu' },
        X: { meaning: 'qorunmasını istədi / əmanət etdi' }
    },
    'عَمِلَ': {
        I: { meaning: 'işlədi / etdi' },
        II: { meaning: 'işlətdi / təyin etdi' },
        III: { meaning: 'davrandı / rəftar etdi' },
        IV: { meaning: 'işə saldı / tətbiq etdi' },
        V: { meaning: 'zəhmət çəkdi (nadir)' },
        VI: { meaning: 'qarşılıqlı iş gördülər / müamilə etdi' },
        VIII: { meaning: 'işlədi / hazırladı' },
        X: { meaning: 'istifadə etdi / işlətdi' }
    },
    'دَرَسَ': {
        I: {
            meaning: 'oxudu / öyrəndi (həmçinin: silindi / yox oldu)',
            detail: 'I babın təsrifləri: دَرَسَ — يَدْرُسُ / تَدْرُسُ — اُدْرُسْ.'
        },
        II: { meaning: 'dərs verdi / öyrətdi' },
        III: { meaning: 'birlikdə oxudu / müzakirə etdi' },
        VI: { meaning: 'qarşılıqlı müzakirə etdilər / öyrəndilər' },
        VIII: { meaning: null, applicable: false, note: 'Bu baba salınmır; اِدَّارَسَ VI babın dəyişmiş forması kimi işlənir.' }
    },
    'نَظَرَ': {
        I: { meaning: 'baxdı' },
        II: { meaning: 'nəzəriyyə qurdu / bənzətdi' },
        III: { meaning: 'mübahisə / müzakirə etdi (nəzəri olaraq)' },
        IV: { meaning: 'möhlət verdi / gözlətdi' },
        V: { meaning: 'gözlədi' },
        VI: { meaning: 'qarşılıqlı baxışdılar / müzakirə etdilər' },
        VII: { meaning: null, applicable: false, note: 'Bu baba bu fel üçün istifadə olunmur; yazılışı اِنَّظَرَ şəklindədir.' },
        VIII: { meaning: 'gözlədi' },
        X: { meaning: 'möhlət istədi' }
    },
    'سَمِعَ': {
        I: { meaning: 'eşitdi' },
        II: { meaning: 'eşitdirdi / səsləndirdi' },
        III: { meaning: 'eşitdirdi (qarşılıqlı)' },
        IV: { meaning: 'eşitdirdi / dinlətdi' },
        V: { meaning: 'qulaq asmağa çalışdı / gizlincə dinlədi' },
        VIII: { meaning: 'dinlədi (diqqətlə qulaq asdı)' },
        X: { meaning: 'diqqətlə dinlədi' }
    },
    'فَعَلَ': {
        I: { meaning: 'etdi' },
        II: { meaning: 'qüvvətli / çoxlu etdi' },
        III: { meaning: 'qarşılıqlı etdi' },
        VII: { meaning: 'təsirləndi / həyəcanlandı' },
        VIII: { meaning: 'uydurdu / yalandan etdi' }
    },
    'خَرَجَ': {
        I: { meaning: 'çıxdı' },
        II: { meaning: 'məzun etdi / təlimləndirdi' },
        III: { meaning: '(oyunda / payda) kənarlaşdı' },
        IV: { meaning: 'çıxartdı' },
        V: { meaning: 'məzun oldu' },
        X: { meaning: 'hasil etdi / çıxarıb əldə etdi' }
    },
    'دَخَلَ': {
        I: { meaning: 'girdi' },
        II: { meaning: 'daxil etdi / soxdu' },
        III: { meaning: 'içinə qarışdı / müdaxilə etdi' },
        IV: { meaning: 'daxil etdi / içəri saldı' },
        V: { meaning: 'müdaxilə etdi / qarışdı' },
        VI: { meaning: 'bir-birinə keçdi / iç-içə girdi' },
        VIII: { meaning: null, applicable: false, note: 'Qəlib qrammatik olaraq düzgündür, lakin bu fel üçün çox nadir işlənir.' }
    },
    'جَلَسَ': {
        I: { meaning: 'oturdu' },
        II: { meaning: 'oturtdu' },
        III: { meaning: 'bir yerdə oturdu (həmsöhbət oldu)' },
        IV: { meaning: 'oturtdu (əmr edərək və ya yer göstərərək)' }
    },
    'جَلَدَ': {
        I: { meaning: 'qamçıladı / dərisini soydu' },
        II: { meaning: 'qamçıladı / kitab cildlədi' },
        V: { meaning: 'səbir göstərdi / dözdü' },
        _note: 'Bu kökdə yalnız lüğəvi olaraq aydın təsdiqlənmiş bab mənaları göstərilir; qalan bablar mexaniki qəlibdən məna çıxarılmadan saxlanılır.'
    },
    'قَرُبَ': {
        I: { meaning: 'yaxınlaşdı' },
        _note: 'Bu kök üçün yalnız I babın kök mənası təsdiqlənib; digər bablar avtomatik məna ilə doldurulmur.'
    },
    'وَصَلَ': {
        I: { meaning: 'çatdı / gəlib çatdı' },
        _note: 'Bu kök üçün yalnız I babın kök mənası təsdiqlənib; digər bablar avtomatik məna ilə doldurulmur.'
    },
    'سَفَرَ': {
        I: { meaning: 'üzə çıxardı / açdı' },
        _note: 'Bu kökdə I babın “üzə çıxarmaq” mənası və III babdakı səyahət mənası ayrıca saxlanılır; digər bablar avtomatik məna ilə doldurulmur.'
    },
    'سَبَقَ': {
        I: { meaning: 'qabaqladı / ötdü' },
        _note: 'Bu kök üçün yalnız I babın kök mənası təsdiqlənib; digər bablar avtomatik məna ilə doldurulmur.'
    },
    'كَلَمَ': {
        I: { meaning: 'yaraladı' },
        _note: 'Bu kökdə I babın “yaralamaq” mənası və V babdakı danışıq mənası ayrıca saxlanılır; digər bablar avtomatik məna ilə doldurulmur.'
    },
    'نَظُفَ': {
        I: { meaning: 'təmiz oldu' },
        _note: 'I bab “təmiz olmaq”, II bab isə ayrıca “təmizləmək” mənasındadır; bu iki məna bir-birinə qarışdırılmır.'
    },
    'خَشَعَ': {
        I: { meaning: 'xüşu etdi' }
    },
    'كَبُرَ': {
        I: { meaning: 'böyük oldu' }
    },
    'صَبَرَ': {
        I: { meaning: 'səbir etdi' }
    },
    'نَحَتَ': {
        I: { meaning: 'oydu' }
    },
    'دَبَرَ': {
        I: { meaning: 'arxasınca getdi / idarə etdi' },
        _note: 'Bu kökdə I babın kök mənası və V babdakı təfəkkür mənası ayrıca saxlanılır.'
    },
    'صَغُرَ': {
        I: { meaning: 'kiçik oldu' }
    },
    'غَرَسَ': {
        I: { meaning: 'əkdi' }
    },
    'سَعِدَ': {
        I: { meaning: 'xoşbəxt oldu' },
        _note: 'Bu kökdə I babın kök mənası və III babdakı kömək mənası ayrıca saxlanılır.'
    },
    'نَفَقَ': {
        I: { meaning: 'tuneldən keçdi' },
        _note: 'Bu kökdə I babın keçmək mənası və IV babdakı xərcləmək mənası ayrıca saxlanılır.'
    },
    'مَرِضَ': {
        I: { meaning: 'xəstələndi' }
    },
    'جَنَبَ': {
        I: { meaning: 'yan keçdi / uzaqlaşdırdı' },
        _note: 'Bu kökdə I babın kök mənası və VIII babdakı uzaq durmaq mənası ayrıca saxlanılır.'
    },
    'أَمَرَ': {
        I: { meaning: 'əmr etdi' }
    },
    'بَشَرَ': {
        I: { meaning: 'müjdə verdi' },
        _note: 'Bu kökdə I babın müjdə vermək mənası və II babdakı müjdələmək mənası ayrıca saxlanılır.'
    },
    'حَذِرَ': {
        I: { meaning: 'ehtiyat etdi' },
        _note: 'Bu kökdə I babın ehtiyat etmək mənası və II babdakı xəbərdarlıq etmək mənası ayrıca saxlanılır.'
    },
    'حَبَّ': {
        I: { meaning: 'sevdi' }
    },
    'عَهَدَ': {
        I: { meaning: 'əhd etdi / öhdəsinə götürdü' },
        _note: 'Bu kökdə I babın kök mənası və III babdakı əhdləşmək mənası ayrıca saxlanılır.'
    },
    'جَهَدَ': {
        I: { meaning: 'səy göstərdi' },
        _note: 'Bu kökdə I babın səy göstərmək mənası və VIII babdakı səy göstərmək mənası lüğəvi formaları ilə ayrıca göstərilir.'
    },
    'لَزِمَ': {
        I: { meaning: 'bağlı qaldı' },
        _note: 'Bu kökdə I babın bağlı qalmaq mənası və VIII babdakı riayət etmək mənası ayrıca saxlanılır.'
    },
    'هَبَطَ': {
        I: { meaning: 'endi' }
    },
    'قَرَعَ': {
        I: { meaning: 'döydü' }
    },
    'زَوَجَ': {
        I: { meaning: 'cütləşdirdi / qoşdu' },
        _note: 'Bu kökdə I babın qoşmaq mənası və V babdakı evlənmək mənası ayrıca saxlanılır.'
    },
    'طَلَقَ': {
        I: { meaning: 'azad buraxdı' },
        _note: 'Bu kökdə I babın azad buraxmaq mənası və II babdakı boşamaq mənası ayrıca saxlanılır.'
    },
    'طَرَقَ': {
        I: { meaning: 'döydü' }
    },
    'غَلَقَ': {
        I: { meaning: 'bağladı' }
    },
    'فَتَلَ': {
        I: { meaning: 'burdu' }
    },
    'سَهَمَ': {
        I: { meaning: 'pay aldı / iştirak etdi' },
        _note: 'Bu kökdə I babın pay almaq mənası və III babdakı iştirak etmək mənası ayrıca saxlanılır.'
    },
    'بَدَرَ': {
        I: { meaning: 'önə keçdi / tələsdi' },
        _note: 'Bu kökdə I babın önə keçmək mənası və III babdakı təşəbbüs göstərmək mənası ayrıca saxlanılır.'
    },
    'قَدِمَ': {
        I: { meaning: 'gəldi / vardı' },
        _note: 'Bu kökdə I babın gəlmək-varmaq mənası və V babdakı irəliləmək mənası ayrıca saxlanılır.'
    },
    'هَمَّ': {
        I: { meaning: 'niyyət etdi / qayğılandı' }
    },
    'أَدُبَ': {
        I: { meaning: 'ədəbli oldu' },
        _note: 'Bu kökdə I babın ədəbli olmaq mənası və V babdakı tərbiyələnmək mənası ayrıca saxlanılır.'
    },
    'شَجُعَ': {
        I: { meaning: 'cəsur oldu' },
        _note: 'Bu kökdə I babın cəsur olmaq mənası və II babdakı cəsarətləndirmək mənası ayrıca saxlanılır.'
    },
    'حَثَّ': {
        I: { meaning: 'təşviq etdi' }
    },
    'عَقَّ': {
        I: { meaning: 'asi oldu' }
    },
    'حَرُمَ': {
        I: { meaning: 'qadağan oldu' },
        _note: 'Bu kökdə I babın qadağan olmaq mənası və VIII babdakı hörmət etmək mənası ayrıca saxlanılır.'
    },
    'كَرُمَ': {
        I: { meaning: 'səxavətli oldu' },
        _note: 'Bu kökdə I babın səxavətli olmaq mənası və IV babdakı səxavətli davranmaq mənası ayrıca saxlanılır.'
    },
    'عَجَنَ': {
        I: { meaning: 'yoğurdu' }
    },
    'صَحِبَ': {
        I: { meaning: 'yoldaşlıq etdi' },
        _note: 'Bu kökdə I babın yoldaşlıq etmək mənası və III babdakı yoldaş olmaq mənası ayrıca saxlanılır.'
    },
    'قَطَنَ': {
        I: { meaning: 'məskunlaşdı' }
    },
    'فَرَقَ': {
        I: { meaning: 'ayırdı' },
        _note: 'Bu kökdə I babın ayırmaq mənası, V babdakı ayrılmaq və VIII babdakı ayrılmaq formaları ayrıca saxlanılır.'
    },
    'حَذِقَ': {
        I: { meaning: 'bacarıqlı oldu' }
    },
    'خَفُتَ': {
        I: { meaning: 'zəiflədi / sakitləşdi' }
    },
    'خَصَمَ': {
        I: { meaning: 'mübahisə etdi' },
        _note: 'Bu kökdə I babın mübahisə etmək mənası və VIII babdakı mübahisə etmək mənası ayrıca saxlanılır.'
    },
    'جَمُلَ': {
        I: { meaning: 'gözəl oldu' }
    },
    'غَرِقَ': {
        I: { meaning: 'batdı' }
    },
    'خَدَشَ': {
        I: { meaning: 'cızdı' }
    },
    'سَلِمَ': {
        I: { meaning: 'salamat oldu' },
        _note: 'Bu kökdə I babın salamat olmaq mənası və II babdakı salamat etmək mənası ayrıca saxlanılır.'
    },
    'قَطَرَ': {
        I: { meaning: 'damcıladı' }
    },
    'عَنَقَ': {
        I: { meaning: 'qucaq açdı' },
        _note: 'Bu kökdə I babın qucaq açmaq mənası və III babdakı qucaqlaşmaq mənası ayrıca saxlanılır.'
    },
    'طَعِمَ': {
        I: { meaning: 'dadı / yedi' },
        _note: 'Bu kökdə I babın dadmaq-yemək mənası və IV babdakı yedirtmək mənası ayrıca saxlanılır.'
    },
    'شَغَلَ': {
        I: { meaning: 'məşğul etdi' },
        _note: 'Bu kökdə I babın məşğul etmək mənası və VIII babdakı məşğul olmaq mənası ayrıca saxlanılır.'
    },
    'سَلَخَ': {
        I: { meaning: 'dərisini soydu' }
    },
    'رَدَّ': {
        I: { meaning: 'cavab verdi' }
    },
    'نَذَرَ': {
        I: { meaning: 'nəzir etdi' },
        _note: 'Bu kökdə I babın nəzir etmək mənası və IV babdakı xəbərdar etmək mənası ayrıca saxlanılır.'
    },
    'دَالَ': {
        I: { meaning: 'növbələşdi / dövr etdi' }
    },
    'دَلَّ': {
        I: { meaning: 'göstərdi' }
    },
    'خَبَطَ': {
        I: { meaning: 'vurdu' }
    },
    'سَأَلَ': {
        I: { meaning: 'soruşdu' },
        _note: 'Bu kökdə I babın soruşmaq mənası və VI babdakı qarşılıqlı soruşmaq mənası ayrıca saxlanılır.'
    },
    'فَسَرَ': {
        I: { meaning: 'izah etdi' },
        _note: 'Bu kökdə I babın izah etmək mənası və X babdakı izah istəmək mənası ayrıca saxlanılır.'
    },
    'رَكَنَ': {
        I: { meaning: 'söykəndi' }
    },
    'جَزَعَ': {
        I: { meaning: 'sarsıldı' }
    },
    'شَرِكَ': {
        I: { meaning: 'şərik oldu' },
        _note: 'Bu kökdə I babın şərik olmaq mənası və IV babdakı şərik qoşmaq mənası ayrıca saxlanılır.'
    },
    'خَلَفَ': {
        I: { meaning: 'ardınca gəldi / əvəz etdi' },
        _note: 'Bu kökdə I babın kök mənası, IV babdakı vədini pozmaq və VIII babdakı ixtilaf etmək mənaları ayrıca saxlanılır.'
    },
    'عَذَرَ': {
        I: { meaning: 'üzrlü saydı' },
        _note: 'Bu kökdə I babın üzrlü saymaq mənası və VIII babdakı üzr istəmək mənası ayrıca saxlanılır.'
    },
    'عَمَرَ': {
        I: { meaning: 'abadlaşdırdı / məskunlaşdırdı' },
        _note: 'Bu kökdə I babın abadlaşdırmaq mənası və II babdakı abadlaşdırmaq mənası lüğəvi formaları ilə ayrıca göstərilir.'
    },
    'ظَرُفَ': {
        I: { meaning: 'zərif və bacarıqlı oldu' }
    },
    'قَرَضَ': {
        I: { meaning: 'kəsdi / borc verdi' },
        _note: 'Bu kökdə I babın kəsmək-borc vermək mənası, IV babdakı borc vermək və X babdakı borc istəmək mənaları ayrıca saxlanılır.'
    },
    'بَطُؤَ': {
        I: { meaning: 'yavaş oldu' }
    },
    'تَجَرَ': {
        I: { meaning: 'ticarət etdi' },
        _note: 'Bu kökdə I babın ticarət etmək mənası və VIII babdakı ticarətlə məşğul olmaq mənası ayrıca saxlanılır.'
    },
    'غَشَّ': {
        I: { meaning: 'aldatdı' }
    },
    'جَمُدَ': {
        I: { meaning: 'möhkəm və donuq oldu' }
    },
    'أَجَرَ': {
        I: { meaning: 'icarəyə verdi / mükafatlandırdı' },
        _note: 'Bu kökdə I babın icarəyə vermək-mükafatlandırmaq mənası, II babdakı kirayəyə vermək və X babdakı kirayəyə götürmək mənaları ayrıca saxlanılır.'
    },
    'ثَمَرَ': {
        I: { meaning: 'bəhrə verdi' },
        _note: 'Bu kökdə I babın bəhrə vermək mənası və X babdakı investisiya etmək mənası ayrıca saxlanılır.'
    },
    'ذَخَرَ': {
        I: { meaning: 'yığdı / saxladı' },
        _note: 'Bu kökdə I babın yığmaq-saxlamaq mənası və VIII babdakı ehtiyat toplamaq mənası ayrıca saxlanılır.'
    },
    'حَشِمَ': {
        I: { meaning: 'utandı / həya etdi' },
        _note: 'Bu kökdə I babın utanmaq mənası və VIII babdakı həyalı davranmaq mənası ayrıca saxlanılır.'
    },
    'رَجَعَ': {
        I: { meaning: 'qayıtdı' },
        II: { meaning: 'qaytardı / təkrar etdi (səsi)' },
        III: { meaning: 'nəzərdən keçirdi / müraciət etdi' },
        IV: { meaning: 'geri qaytardı' },
        VI: { meaning: 'geri çəkildi / fikrindən döndü' },
        VIII: { meaning: 'geri aldı' },
        X: { meaning: 'geri istədi / xatırladı / “İnnə lilləh...” dedi' }
    },
    'رَكِبَ': {
        I: { meaning: 'mindi' },
        II: { meaning: 'quraşdırdı / birləşdirdi' },
        III: { meaning: 'birlikdə mindi / müşayiət etdi' },
        IV: { meaning: 'mindirdi / mindirməyə səbəb oldu' },
        V: { meaning: 'tərkibə düşdü / təşkil olundu' },
        VI: { meaning: 'bir-birinin üstünə mindi / üst-üstə düşdü' },
        VIII: { meaning: 'törətdi (cinayət və ya səhv)' }
    },
    'نَزَلَ': {
        I: { meaning: 'endi / yerləşdi' },
        II: { meaning: 'endirdi / nazil etdi / yüklədi' },
        III: { meaning: 'qarşılaşdı / döyüşdü' },
        IV: { meaning: 'endirdi / aşağı saldı' },
        V: { meaning: 'tədricən endi / nazil oldu' },
        VI: { meaning: 'güzəştə getdi / hüququndan əl çəkdi' },
        X: { meaning: 'endirməyə çalışdı / güzəşt tələb etdi' }
    },
    'فَتَحَ': {
        I: { meaning: 'açdı / fəth etdi' },
        II: { meaning: 'dəfələrlə açdı / çiçəkləndirdi' },
        III: { meaning: 'söhbətə başladı / məsələni açıq şəkildə müzakirə etdi' },
        V: { meaning: 'açıldı / çiçəkləndi' },
        VI: { meaning: 'bir-biri ilə açıq danışdılar' },
        VII: { meaning: 'açıldı' },
        VIII: { meaning: 'açılışını etdi / başlatdı' },
        X: { meaning: 'qələbə istədi / hökm və ya çıxış yolu tələb etdi' }
    },
    'غَسَلَ': {
        I: { meaning: 'yudu' },
        II: { meaning: 'başqasını yudu' },
        V: { meaning: 'özünü yudu' },
        VI: { meaning: 'bir-birini yudu / yuyurmuş kimi davrandı' },
        VII: { meaning: 'yuyuldu' },
        VIII: { meaning: 'çimindi / yuyundu' },
        X: { meaning: 'yuyulmasını istədi' }
    },
    'لَبِسَ': {
        I: { meaning: 'geydi / geyindi' },
        II: { meaning: 'geyindirdi / çaşdırdı' },
        IV: { meaning: 'geyindirdi' },
        V: { meaning: 'qarışdı / bir şeyə bulaşdı' },
        VI: { meaning: 'bir-birinə qarışdı / dolaşıq vəziyyətə düşdü' },
        VIII: { meaning: 'qarışıq və anlaşılmaz oldu' }
    },
    'خَلَعَ': {
        I: { meaning: 'çıxardı / soyundurdu' },
        II: { meaning: 'çıxartdırdı / yerindən qopardı' },
        III: { meaning: 'qarşılıqlı boşandı (xüla yolu ilə)' },
        IV: { meaning: 'çıxarmağa səbəb oldu' },
        VII: { meaning: 'çıxdı / yerindən qopdu' },
        VIII: { meaning: 'xüla yolu ilə boşandı' }
    },
    'لَعِبَ': {
        I: { meaning: 'oynadı' },
        II: { meaning: 'oynatdı' },
        III: { meaning: 'birlikdə oynadı / zarafatlaşdı' },
        IV: { meaning: 'oynamağa vadar etdi' },
        V: { meaning: 'oynadı / bir şeylə oynayıb məsxərəyə qoydu' },
        VI: { meaning: 'bir-biri ilə oynadılar / oynaq davrandılar' }
    },
    'رَسَمَ': {
        I: { meaning: 'çəkdi / rəsm etdi' },
        II: { meaning: 'rəsmi qaydaya saldı / vəzifəyə təyin etdi' },
        III: { meaning: 'məktublaşdı / yazışdı' },
        V: { meaning: 'izlədi / nümunə götürdü' },
        VI: { meaning: 'bir-biri ilə yazışdılar' },
        VIII: { meaning: 'şüurda formalaşdı / təsəvvürdə canlandı' }
    },
    'طَبَخَ': {
        I: { meaning: 'bişirdi' },
        II: { meaning: 'yaxşıca bişirdi / bişirtdi' },
        VII: { meaning: 'bişdi / bişirildi' }
    },
    'دَفَعَ': {
        I: { meaning: 'itələdi / ödədi' },
        II: { meaning: 'ödətirdi / dəfələrlə itələdi' },
        III: { meaning: 'müdafiə etdi' },
        V: { meaning: 'şiddətlə axdı / irəli atıldı' },
        VI: { meaning: 'bir-birini itələdilər' },
        VII: { meaning: 'irəli atıldı / hərəkətə keçdi' }
    },
    'سَكَتَ': {
        I: { meaning: 'susdu' },
        II: { meaning: 'susdurdu' },
        IV: { meaning: 'susdurdu' },
        V: { meaning: 'susdu / məsələ barədə danışmadı' },
        VI: { meaning: 'qarşılıqlı susdular' }
    },
    'ضَحِكَ': {
        I: { meaning: 'güldü' },
        II: { meaning: 'güldürdü' },
        III: { meaning: 'zarafatlaşdı / birinə güldü' },
        IV: { meaning: 'güldürdü' },
        V: { meaning: 'özünü gülməyə vadar etdi / məcburi güldü' },
        VI: { meaning: 'birlikdə güldülər' }
    },
    'صَدَقَ': {
        I: { meaning: 'doğru danışdı / sadiq oldu' },
        II: { meaning: 'təsdiqlədi / doğru saydı' },
        III: { meaning: 'dostlaşdı' },
        V: { meaning: 'sədəqə verdi' },
        VI: { meaning: 'dostlaşdılar / bir-birinə sadiq oldular' }
    },
    'كَذَبَ': {
        I: { meaning: 'yalan danışdı' },
        II: { meaning: 'yalan saydı / təkzib etdi' }
    },
    'شَكَرَ': {
        I: { meaning: 'şükür etdi / təşəkkür etdi' },
        II: { meaning: 'təşəkkürünü bildirdi / şükür etdirdi' },
        V: { meaning: 'təşəkkür etdi' },
        VI: { meaning: 'bir-birinə təşəkkür etdilər' }
    },
    'ذَكَرَ': {
        I: { meaning: 'zikr etdi / xatırladı' },
        II: { meaning: 'xatırlatdı' },
        III: { meaning: 'birlikdə təkrar etdi / müzakirə etdi' },
        IV: { meaning: 'xatırlatdı / yada saldı' },
        V: { meaning: 'xatırladı' },
        VI: { meaning: 'birlikdə xatırladılar / müzakirə etdilər' },
        X: { meaning: 'yada salmağa / xatırlamağa çalışdı' }
    },
    'سَجَدَ': {
        I: { meaning: 'səcdə etdi' },
        II: { meaning: 'səcdə etdirdi' },
        IV: { meaning: 'səcdə etdirdi' },
        V: { meaning: 'ibadət etdi / səcdəyə davam etdi' },
        VI: { meaning: 'birlikdə səcdə etdilər' }
    },
    'رَكَعَ': {
        I: { meaning: 'rüku etdi' },
        II: { meaning: 'rüku etdirdi' },
        IV: { meaning: 'rüku etdirdi' },
        V: { meaning: 'təkrar-təkrar rüku etdi' },
        VI: { meaning: 'birlikdə rüku etdilər' }
    },
    'نَصَحَ': {
        I: { meaning: 'nəsihət etdi / səmimi davrandı' },
        II: { meaning: 'çoxlu nəsihət etdi / məsləhət verdi' },
        III: { meaning: 'səmimi məsləhət verdi / sədaqətlə davrandı' },
        VI: { meaning: 'bir-birinə nəsihət etdilər' },
        VIII: { meaning: 'nəsihət qəbul etdi / ibrət götürdü' },
        X: { meaning: 'məsləhət istədi' }
    },
    'حَلَفَ': {
        I: { meaning: 'and içdi' },
        II: { meaning: 'and içdirdi' },
        III: { meaning: 'ittifaq bağladı / müttəfiq oldu' },
        VI: { meaning: 'ittifaq bağladılar' },
        X: { meaning: 'and içməsini istədi / and içdirdi' }
    },
    'شَفَعَ': {
        I: { meaning: 'şəfaət etdi / vasitəçilik etdi' },
        II: { meaning: 'şəfaət etdi / cütləşdirdi' },
        III: { meaning: 'vasitəçilik etdi' },
        V: { meaning: 'şəfaət istədi' },
        VI: { meaning: 'bir-birinə şəfaət etdilər' },
        X: { meaning: 'şəfaət istədi' }
    },
    'كَرِهَ': {
        I: { meaning: 'xoşlamadı / ikrah etdi' },
        II: { meaning: 'ikrah yaratdı / nifrət etdirdi' },
        IV: { meaning: 'məcbur etdi' },
        V: { meaning: 'xoşlamadı / ikrah göstərdi' },
        VI: { meaning: 'bir-birindən xoşlanmadılar' },
        X: { meaning: 'ikrah etdi / məcbur etməyə çalışdı' }
    },
    'حَضَرَ': {
        I: { meaning: 'iştirak etdi / hazır oldu' },
        II: { meaning: 'hazırladı' },
        III: { meaning: 'iştirak etdi / hazır oldu' },
        IV: { meaning: 'gətirdi / hazır etdi' },
        VIII: { meaning: 'ölüm yatağında oldu / can verdi' },
        X: { meaning: 'çağırdı / yada saldı' }
    },
    'حَكَمَ': {
        I: { meaning: 'hökm etdi / idarə etdi' },
        II: { meaning: 'hakim təyin etdi / qərarı başqasına həvalə etdi' },
        III: { meaning: 'məhkəmə etdi / mühakimə etdi' },
        IV: { meaning: 'möhkəmləndirdi / mükəmməlləşdirdi' },
        V: { meaning: 'nəzarət etdi / hökmranlıq etdi' },
        VI: { meaning: 'məhkəməyə müraciət etdilər' },
        VIII: { meaning: 'arbitraja müraciət etdi' },
        X: { meaning: 'möhkəmləndi / kök saldı' }
    },
    'حَرَصَ': {
        I: { meaning: 'çox istədi / həris oldu' },
        II: { meaning: 'təkid etdi / ehtiyatlı olmağa çağırdı' },
        V: { meaning: 'ehtiyat etdi / özünü qorudu' }
    },
    'ذَبَحَ': {
        I: { meaning: 'kəsdi / qurban kəsdi' },
        II: { meaning: 'çoxlu heyvan kəsdi / kəsdirdi' },
        VI: { meaning: 'bir-birini qırdılar' },
        VII: { meaning: 'kəsildi / qurban kəsildi' }
    },
    'تَرَكَ': {
        I: { meaning: 'tərk etdi / buraxdı' }
    },
    'هَمَسَ': {
        I: { meaning: 'pıçıldadı' },
        II: { meaning: 'pıçıldatdı / asta səslə danışdırdı' },
        III: { meaning: 'kimləsə pıçıldaşdı' },
        V: { meaning: 'pıçıldadı / asta danışdı' },
        VI: { meaning: 'bir-birinə pıçıldadılar' }
    },
    'كَفَرَ': {
        I: { meaning: 'inkar etdi / küfr etdi' },
        II: { meaning: 'kafir elan etdi / kəffarə verdi' },
        III: { meaning: 'inkar etdi / kafir kimi davrandı' },
        VI: { meaning: 'bir-birini kafirlikdə ittiham etdilər' }
    },
    'غَفَرَ': {
        I: { meaning: 'bağışladı / örtdü' },
        II: { meaning: 'çox bağışladı / kəffarə etdirdi' },
        VI: { meaning: 'bir-birini bağışladılar' },
        VII: { meaning: 'bağışlandı' },
        VIII: { meaning: 'bağışlanmış sayıldı / bağışladı' },
        X: { meaning: 'bağışlanma dilədi' }
    },
    'صَفَحَ': {
        I: { meaning: 'əfv etdi / üz çevirdi' },
        III: { meaning: 'əl sıxdı' },
        V: { meaning: 'səhifələri vərəqlədi / nəzərdən keçirdi' },
        VI: { meaning: 'bir-biri ilə əl sıxdılar' },
        X: { meaning: 'əfv istədi' }
    },
    'هَدَمَ': {
        I: { meaning: 'uçurdu / sökdü' },
        II: { meaning: 'tamamilə uçurdu / dağıtdı' },
        V: { meaning: 'uçdu / dağıldı' },
        VII: { meaning: 'uçuldu / dağıldı' }
    },
    'نَقَضَ': {
        I: { meaning: 'pozdu / ləğv etdi' },
        II: { meaning: 'tamamilə sökdü / pozdu' },
        III: { meaning: 'ziddiyyət təşkil etdi' },
        V: { meaning: 'pozuldu / dağılmağa başladı' },
        VI: { meaning: 'bir-birinə zidd oldular' },
        VIII: { meaning: 'pozuldu / ləğv edildi' }
    },
    'شَهِدَ': {
        I: { meaning: 'şahidlik etdi / şahid oldu' },
        II: { meaning: 'şahid etdirdi' },
        III: { meaning: 'müşahidə etdi / birgə şahid oldu' },
        IV: { meaning: 'şahid gətirdi / şahid tutdu' },
        V: { meaning: 'şəhadət gətirdi' },
        X: { meaning: 'şahid çağırdı / şəhid olmağı istədi' }
    },
    'بَلَغَ': {
        I: { meaning: 'çatdı / yetkinləşdi' },
        II: { meaning: 'çatdırdı / təbliğ etdi' },
        III: { meaning: 'şişirtdi / həddi aşdı' },
        IV: { meaning: 'çatdırdı / xəbər verdi' }
    },
    'نَضِجَ': {
        I: { meaning: 'yetişdi / bişdi' },
        II: { meaning: 'yetişdirdi / yaxşıca bişirdi' },
        IV: { meaning: 'yetişdirdi / bişirdi' },
        V: { meaning: 'yetişdi / bişdi' }
    },
    'نَقَصَ': {
        I: { meaning: 'azaldı / əskildi' },
        II: { meaning: 'azaltdı' },
        III: { meaning: 'bazarlıq etdi / qiyməti aşağı salmağa çalışdı' },
        IV: { meaning: 'azaltdı / əskiltdi' },
        V: { meaning: 'azaldı / qüsur axtardı' },
        VI: { meaning: 'qarşılıqlı azaldılar' },
        VIII: { meaning: 'azaldı / dəyərdən salındı' },
        X: { meaning: 'kifayət etmədiyini düşündü / azaltmağı istədi' }
    },
    'كَمَلَ': {
        I: { meaning: 'tamamlandı / kamil oldu' },
        II: { meaning: 'tamamladı' },
        III: { meaning: 'tamamladı / kamilləşdirdi' },
        IV: { meaning: 'tamamladı' },
        V: { meaning: 'tamamlandı / kamilləşdi' },
        VI: { meaning: 'bütövləşdilər / bir-birini tamamladılar' },
        VII: { meaning: 'tamamlandı' },
        VIII: { meaning: 'tamamlandı / bütövləşdi' },
        X: { meaning: 'çatışmayan hissəni tamamladı' }
    },
    'حَسُنَ': {
        I: { meaning: 'gözəl oldu / yaxşılaşdı' },
        II: { meaning: 'gözəlləşdirdi / yaxşılaşdırdı' },
        IV: { meaning: 'yaxşı iş gördü / yaxşılıq etdi' },
        V: { meaning: 'yaxşılaşdı' },
        VI: { meaning: 'bir-birinə yaxşı davrandılar' },
        X: { meaning: 'yaxşı saydı / bəyəndi' }
    },
    'قَبُحَ': {
        I: { meaning: 'çirkin oldu' },
        II: { meaning: 'çirkinləşdirdi / pislədi' },
        X: { meaning: 'çirkin saydı / bəyənmədi' }
    },
    'بَطَلَ': {
        I: { meaning: 'puç oldu / qüvvədən düşdü' },
        II: { meaning: 'qüvvədən saldı / ləğv etdi' },
        III: { meaning: 'mübahisə etdi / batil olduğunu göstərməyə çalışdı' },
        IV: { meaning: 'ləğv etdi / puç etdi' },
        V: { meaning: 'işsiz qaldı / boş dayandı' },
        VI: { meaning: 'bir-birini boşluqda saxladılar' },
        VII: { meaning: 'qüvvədən düşdü / batil oldu' }
    },
    'ثَبَتَ': {
        I: { meaning: 'sabit oldu / təsdiqləndi' },
        II: { meaning: 'möhkəmləndirdi / təsdiqlədi' },
        III: { meaning: 'qarşı durdu / mübarizə apardı' },
        IV: { meaning: 'sübut etdi' },
        V: { meaning: 'dəqiqləşdirdi / ehtiyatla yoxladı' },
        VII: { meaning: 'sabitləndi' },
        X: { meaning: 'təsdiq istədi' }
    },
    'قَلِقَ': {
        I: { meaning: 'narahat oldu' },
        II: { meaning: 'narahat etdi' },
        IV: { meaning: 'narahat etdi' },
        V: { meaning: 'təşvişə düşdü / yerində rahat dayana bilmədi' }
    },
    'فَرِحَ': {
        I: { meaning: 'sevindi' },
        II: { meaning: 'sevindirdi' },
        V: { meaning: 'sevindi' },
        VI: { meaning: 'birlikdə sevindilər' }
    },
    'حَزِنَ': {
        I: { meaning: 'kədərləndi' },
        II: { meaning: 'kədərləndirdi' },
        IV: { meaning: 'kədərləndirdi' },
        V: { meaning: 'kədərləndi / qəm çəkdi' }
    },
    'لَعِقَ': {
        I: { meaning: 'yaladı' }
    },
    'سَبَّ': {
        I: { meaning: 'söydü / təhqir etdi' }
    },
    'قَسَا': {
        I: { meaning: 'sərt oldu' }
    },
    'زَرَقَ': {
        I: { meaning: 'deşdi' }
    },
    'قَشَرَ': {
        I: { meaning: 'qabığını soydu' }
    },
    'سَرَقَ': {
        I: { meaning: 'oğurladı' }
    },
    'قَصَّ': {
        I: { meaning: 'hekayə danışdı' }
    },
    'صَبَغَ': {
        I: { meaning: 'boyadı' }
    },
    'فَرَشَ': {
        I: { meaning: 'sərdi' }
    },
    'نَبَغَ': {
        I: { meaning: 'üstün oldu / parlaqlaşdı' }
    },
    'صَحَّ': {
        I: { meaning: 'doğru oldu / səhih oldu' }
    },
    'رَشَدَ': {
        I: { meaning: 'doğru yol tapdı' }
    },
    'حَقَّ': {
        I: { meaning: 'haqq oldu' }
    },
    'كَبَسَ': {
        I: { meaning: 'basdı' }
    },
    'شَتَمَ': {
        I: { meaning: 'təhqir etdi / söydü' },
        II: { meaning: 'dəfələrlə təhqir etdi' },
        III: { meaning: 'qarşılıqlı söyüşdü' },
        V: { meaning: 'təhqir etdi' },
        VI: { meaning: 'bir-birini təhqir etdilər' }
    },
    'حَسَدَ': {
        I: { meaning: 'həsəd apardı / paxıllıq etdi' },
        V: { meaning: 'həsəd apardı' },
        VI: { meaning: 'bir-birinə həsəd apardılar' }
    },
    'حَقَدَ': {
        I: { meaning: 'kin saxladı' },
        II: { meaning: 'kin yaratdı / kin bəslətdi' },
        V: { meaning: 'kin saxladı' },
        VI: { meaning: 'bir-birinə kin bəslədilər' }
    },
    'غَضِبَ': {
        I: { meaning: 'qəzəbləndi' },
        II: { meaning: 'qəzəbləndirdi' },
        III: { meaning: 'birinə qəzəbləndi / mübahisə etdi' },
        IV: { meaning: 'qəzəbləndirdi' },
        V: { meaning: 'qəzəbləndi' },
        VI: { meaning: 'bir-birinə qəzəbləndilər' }
    },
    'ظَلَمَ': {
        I: { meaning: 'zülm etdi / haqsızlıq etdi' },
        II: { meaning: 'haqsız elan etdi / zülmkar saydı' },
        III: { meaning: 'qarşılıqlı haqsızlıq etdilər' },
        V: { meaning: 'haqsızlıqdan şikayət etdi' },
        VI: { meaning: 'bir-birinə zülm etdilər' },
        VII: { meaning: 'zülmə məruz qaldı' },
        X: { meaning: 'ədalət tələb etdi / haqsızlıqdan şikayətləndi' }
    },
    'رَحِمَ': {
        I: { meaning: 'rəhm etdi / mərhəmət göstərdi' },
        II: { meaning: 'rəhmət dilədi / mərhəmət göstərdi' },
        III: { meaning: 'bir-birinə mərhəmət göstərdilər' },
        V: { meaning: 'rəhmət dilədi' },
        VI: { meaning: 'bir-birinə mərhəmət etdilər' },
        X: { meaning: 'rəhmət istədi' }
    },
    'خَضَعَ': {
        I: { meaning: 'itaət etdi / boyun əydi' },
        II: { meaning: 'tabe etdi / boyun əydirdi' },
        IV: { meaning: 'tabe etdi' },
        V: { meaning: 'təvazö göstərdi / boyun əydi' },
        VI: { meaning: 'bir-birinə təvazö göstərdilər' },
        VII: { meaning: 'tabe edildi / boyun əydi' }
    },
    'حَمِدَ': {
        I: { meaning: 'həmd etdi / təriflədi' }
    },
    'وَقَفَ': {
        I: { meaning: 'dayandı' }
    },
    'عَاشَ': {
        I: { meaning: 'yaşadı' }
    },
    'مَاتَ': {
        I: { meaning: 'öldü' }
    },
    'أَمِنَ': {
        I: { meaning: 'əmin oldu' }
    },
    'فَازَ': {
        I: { meaning: 'qalib gəldi' }
    },
    'رَبِحَ': {
        I: { meaning: 'qazandı / mənfəət götürdü' }
    },
    'غَرَقَ': {
        I: { meaning: 'batdı' }
    },
    'بَقِيَ': {
        I: { meaning: 'qaldı' }
    },
    'مَلَحَ': {
        I: { meaning: 'duzladı' }
    },
    'كَشَرَ': {
        I: { meaning: 'dişlərini göstərdi' }
    },
    'بَدَأَ': {
        I: { meaning: 'başladı' }
    },
    'حَصَرَ': {
        I: { meaning: 'məhdudlaşdırdı' }
    },
    'صَرَخَ': {
        I: { meaning: 'qışqırdı' }
    },
    'قَطَفَ': {
        I: { meaning: 'dərdi' }
    },
    'عَدَلَ': {
        I: { meaning: 'ədalətli oldu / düzəltdi' }
    },
    'عَذُبَ': {
        I: { meaning: 'şirin və xoş oldu' }
    },
    'ضَرَّ': {
        I: { meaning: 'zərər verdi' }
    },
    'نَسِيَ': {
        I: { meaning: 'unutdu' }
    },
    'حَصَلَ': {
        I: { meaning: 'əldə etdi' }
    },
    'ذَرَعَ': {
        I: { meaning: 'ölçdü' }
    },
    'ظَنَّ': {
        I: { meaning: 'zənn etdi' }
    },
    'شَكَّ': {
        I: { meaning: 'şübhələndi' }
    },
    'جَرَفَ': {
        I: { meaning: 'süpürüb apardı' }
    },
    'خَرَقَ': {
        I: { meaning: 'deşdi' }
    },
    'ثَقَبَ': {
        I: { meaning: 'deldi' }
    },
    'ذَاعَ': {
        I: { meaning: 'yayıldı' }
    },
    'حَشَرَ': {
        I: { meaning: 'topladı' }
    },
    'وَضَعَ': {
        I: { meaning: 'qoydu' }
    },
    'حَلَّ': {
        I: { meaning: 'həll etdi' }
    },
    'فَكَّ': {
        I: { meaning: 'açdı / çözdü' }
    },
    'طَرَزَ': {
        I: { meaning: 'naxış tikdi' }
    },
    'ذَمَّ': {
        I: { meaning: 'pislədi' }
    },
    'لَامَ': {
        I: { meaning: 'qınadı' }
    },
    'شَرَدَ': {
        I: { meaning: 'qaçdı' }
    },
    'صَدَمَ': {
        I: { meaning: 'toqquşdu' }
    },
    'قَبَضَ': {
        I: { meaning: 'tutdu / aldı' }
    },
    'ضَغَطَ': {
        I: { meaning: 'basdı' }
    },
    'قَادَ': {
        I: { meaning: 'idarə etdi / sürdü' }
    },
    'سَاقَ': {
        I: { meaning: 'sürdü' }
    },
    'صَعِدَ': {
        I: { meaning: 'qalxdı' }
    },
    'عَبَرَ': {
        I: { meaning: 'keçdi' }
    },
    'مَرَّ': {
        I: { meaning: 'keçdi' }
    },
    'سَحَبَ': {
        I: { meaning: 'çəkdi' }
    },
    'رَمَى': {
        I: { meaning: 'atdı' }
    },
    'رَكَلَ': {
        I: { meaning: 'təpik vurdu' }
    },
    'ضَرَبَ': {
        I: { meaning: 'vurdu' }
    },
    'لَمَسَ': {
        I: { meaning: 'toxundu' }
    },
    'مَلَكَ': {
        I: { meaning: 'sahib oldu' }
    },
    'عَصَرَ': {
        I: { meaning: 'sıxdı' }
    },
    'غَمَسَ': {
        I: { meaning: 'batırdı' }
    },
    'خَبُثَ': {
        I: { meaning: 'pis oldu' }
    },
    'نَصَرَ': {
        I: { meaning: 'kömək etdi / qalib gətirdi' }
    },
    'شَحَذَ': {
        I: { meaning: 'itilədi' }
    },
    'قَتَلَ': {
        I: { meaning: 'öldürdü' }
    },
    'أَسَرَ': {
        I: { meaning: 'əsir aldı' }
    },
    'غَرَزَ': {
        I: { meaning: 'batırdı' }
    },
    'فَرَزَ': {
        I: { meaning: 'ayırdı' }
    },
    'بَرَعَ': {
        I: { meaning: 'fərqləndi' }
    },
    'لَقِيَ': {
        I: { meaning: 'qarşılaşdı' }
    },
    'أَذِنَ': {
        I: { meaning: 'icazə verdi' }
    },
    'شَكَا': {
        I: { meaning: 'şikayət etdi' }
    },
    'دَعَكَ': {
        I: { meaning: 'sürtdü' }
    },
    'حَلَمَ': {
        I: { meaning: 'yuxu gördü' }
    },
    'حَلَبَ': {
        I: { meaning: 'sağdı' }
    },
    'هَرَسَ': {
        I: { meaning: 'əzdi' }
    },
    'وَصَفَ': {
        I: { meaning: 'təsvir etdi' }
    },
    'مَرَحَ': {
        I: { meaning: 'şənləndi' }
    },
    'بَحَثَ': {
        I: { meaning: 'axtardı / araşdırdı' },
        II: { meaning: 'araşdırtdı / axtarmağa vadar etdi' },
        V: { meaning: 'araşdırdı / diqqətlə axtardı' },
        VI: { meaning: 'birlikdə araşdırdılar / müzakirə etdilər' }
    },
    'عَرَفَ': {
        I: { meaning: 'tanıdı / bildi' },
        II: { meaning: 'tanıtdı / tərif verdi' },
        IV: { meaning: 'bildirdi / xəbər verdi' },
        V: { meaning: 'tanış oldu / öyrəndi' },
        VI: { meaning: 'bir-biri ilə tanış oldular' },
        VII: { meaning: 'məlum oldu / tanındı' },
        VIII: { meaning: 'etiraf etdi' },
        X: { meaning: 'tanımağa / öyrənməyə çalışdı' }
    },
    'رَكَضَ': {
        I: { meaning: 'qaçdı' },
        II: { meaning: 'qaçdırdı' },
        IV: { meaning: 'qaçmağa vadar etdi' },
        V: { meaning: 'qaçdı / atılıb-düşdü' },
        VI: { meaning: 'birlikdə qaçdılar' }
    },
    'رَغِبَ': {
        I: { meaning: 'istədi / meyil etdi' },
        II: { meaning: 'həvəsləndirdi / istəməsinə səbəb oldu' },
        III: { meaning: 'arzuladı / maraq göstərdi' },
        V: { meaning: 'istədi / meyil göstərdi' }
    },
    'طَلَبَ': {
        I: { meaning: 'istədi / tələb etdi / axtardı' },
        II: { meaning: 'dəfələrlə tələb etdi' },
        III: { meaning: 'iddia etdi / tələb irəli sürdü' },
        V: { meaning: 'tələb etdi / zəruri oldu' },
        VI: { meaning: 'bir-birindən tələb etdilər' },
        VII: { meaning: 'tələb olundu' },
        X: { meaning: 'istədi / tələb etdi' }
    },
    'قَدَرَ': {
        I: { meaning: 'bacardı / ölçdü / qiymətləndirdi' },
        II: { meaning: 'ölçdü / təqdir etdi' },
        IV: { meaning: 'bacardı / imkan verdi' },
        V: { meaning: 'ölçü götürdü / müəyyənləşdi' },
        VII: { meaning: 'ölçüldü / miqdarı müəyyən edildi' },
        VIII: { meaning: 'gücü çatdı / bacardı' },
        X: { meaning: 'bacarıqlı saydı / ölçü istədi' }
    },
    'نَجَحَ': {
        I: { meaning: 'uğur qazandı' },
        II: { meaning: 'keçirdi / uğur qazanmasına səbəb oldu' },
        IV: { meaning: 'uğur qazandırdı' }
    },
    'فَشِلَ': {
        I: { meaning: 'uğursuz oldu' },
        II: { meaning: 'uğursuzluğa uğratdı' },
        IV: { meaning: 'uğursuz etdi' }
    },
    'رَبِحَ': {
        I: { meaning: 'qazandı / mənfəət götürdü' },
        II: { meaning: 'qazandırdı / mənfəətli etdi' },
        IV: { meaning: 'mənfəət qazandırdı' },
        V: { meaning: 'mənfəət güddü' },
        VI: { meaning: 'birlikdə mənfəət qazandılar' },
        VIII: { meaning: 'qazanc əldə etdi' }
    },
    'خَسِرَ': {
        I: { meaning: 'itirdi / uduzdu' },
        II: { meaning: 'itkiyə uğratdı' },
        III: { meaning: 'itkidə iştirak etdi' },
        IV: { meaning: 'itkiyə saldı' },
        V: { meaning: 'itki çəkdi' },
        VI: { meaning: 'bir-birinə itki verdilər' },
        VII: { meaning: 'itirildi' }
    },
    'مَكُثَ': {
        I: { meaning: 'qaldı / dayandı' },
        II: { meaning: 'saxladı / qalmağa məcbur etdi' },
        IV: { meaning: 'saxladı / qalmasını təmin etdi' },
        V: { meaning: 'gecikdi / bir müddət qaldı' },
        X: { meaning: 'qalmasını istədi' }
    },
    'نَفَعَ': {
        I: { meaning: 'fayda verdi / xeyir gətirdi' },
        II: { meaning: 'faydalı etdi' },
        III: { meaning: 'qarşılıqlı fayda verdi' },
        IV: { meaning: 'fayda verdi / yararlı etdi' },
        V: { meaning: 'fayda götürdü' },
        VI: { meaning: 'bir-birinə fayda verdilər' },
        VIII: { meaning: 'faydalandı / istifadə etdi' }
    },
    'شَرَحَ': {
        I: { meaning: 'izah etdi / açdı' },
        II: { meaning: 'ətraflı izah etdi' },
        IV: { meaning: 'izah etdi / ürəyini açdı' },
        V: { meaning: 'izah etdi / genişləndi' },
        VI: { meaning: 'qarşılıqlı izah etdilər' },
        VII: { meaning: 'izah olundu / ürəyi açıldı' },
        X: { meaning: 'izah istədi' }
    },
    'صَمَتَ': {
        I: { meaning: 'susdu' },
        II: { meaning: 'susdurdu' },
        III: { meaning: 'kimləsə birlikdə susdu' },
        IV: { meaning: 'susdurdu' },
        V: { meaning: 'susdu / danışmaqdan çəkindi' },
        VI: { meaning: 'birlikdə susdular' },
        VII: { meaning: 'susduruldu' },
        X: { meaning: 'susmasını istədi' }
    },
    'نَشَرَ': {
        I: { meaning: 'yaydı / nəşr etdi' },
        II: { meaning: 'geniş yaydı' },
        IV: { meaning: 'yaydı / nəşr etdirdi' },
        V: { meaning: 'yayıldı' },
        VIII: { meaning: 'yayıldı' }
    },
    'مَنَحَ': {
        I: { meaning: 'bəxş etdi / verdi' },
        II: { meaning: 'bəxş etdirdi / payladı' },
        X: { meaning: 'bəxşiş istədi' }
    },
    'رَفَعَ': {
        I: { meaning: 'qaldırdı / yüksəltdi' },
        II: { meaning: 'dəfələrlə qaldırdı / aradan götürdü' },
        III: { meaning: 'məhkəməyə müraciət etdi / mübahisə etdi' },
        IV: { meaning: 'qaldırdı / ucaltdı' },
        V: { meaning: 'ucaldı / çəkindi' },
        VI: { meaning: 'qarşılıqlı məhkəməyə müraciət etdilər' },
        VII: { meaning: 'qaldırıldı' },
        VIII: { meaning: 'yüksəldi' }
    },
    'خَفَضَ': {
        I: { meaning: 'endirdi / azaltdı' },
        II: { meaning: 'dəfələrlə endirdi' },
        IV: { meaning: 'endirdi / aşağı saldı' },
        V: { meaning: 'azaldı / aşağı düşdü' },
        VI: { meaning: 'bir-birini aşağı saldılar' },
        VII: { meaning: 'azaldı / aşağı düşdü' }
    },
    'حَمَلَ': {
        I: { meaning: 'daşıdı / yük götürdü' },
        II: { meaning: 'yüklədi / daşıtdı' },
        IV: { meaning: 'daşıtdı / hamilə etdi' },
        V: { meaning: 'dözdi / yükünü çəkdi' },
        VI: { meaning: 'qərəzli davrandı' },
        VII: { meaning: 'daşındı' },
        VIII: { meaning: 'dözdi / ehtimal etdi' },
        X: { meaning: 'dözməsini istədi' }
    },
    'فَصَلَ': {
        I: { meaning: 'ayırdı / qərar verdi' },
        II: { meaning: 'ətraflı izah etdi / işdən çıxardı' },
        III: { meaning: 'danışıq apardı / bazarlıq etdi' },
        IV: { meaning: 'ayırdı' },
        V: { meaning: 'ayrıldı' },
        VI: { meaning: 'qarşılıqlı bazarlıq etdilər' },
        VII: { meaning: 'ayrıldı' },
        X: { meaning: 'izah istədi' }
    },
    'رَبَطَ': {
        I: { meaning: 'bağladı' },
        II: { meaning: 'möhkəm bağladı' },
        III: { meaning: 'əlaqələndirdi / keşik çəkdi' },
        V: { meaning: 'bağlandı / əlaqə yaratdı' },
        VI: { meaning: 'bir-biri ilə əlaqələndilər' },
        VII: { meaning: 'bağlandı' },
        VIII: { meaning: 'əlaqələndi / bağlı oldu' }
    },
    'عَقَدَ': {
        I: { meaning: 'bağladı / müqavilə bağladı' },
        II: { meaning: 'mürəkkəbləşdirdi / düyünlədi' },
        III: { meaning: 'müqavilə bağladı' },
        IV: { meaning: 'mürəkkəbləşdirdi' },
        V: { meaning: 'mürəkkəbləşdi' },
        VI: { meaning: 'müqavilə bağladılar' },
        VII: { meaning: 'bağlandı / iclas keçirildi' },
        VIII: { meaning: 'etiqad etdi / inandı' },
        X: { meaning: 'çətin saydı / müqavilə istədi' }
    },
    'قَطَعَ': {
        I: { meaning: 'kəsdi / dayandırdı' },
        II: { meaning: 'tikə-tikə kəsdi' },
        III: { meaning: 'boykot etdi / sözünü kəsdi' },
        IV: { meaning: 'kəsməyə səbəb oldu / torpaq bağışladı' },
        V: { meaning: 'parçalandı' },
        VI: { meaning: 'bir-birinin yolunu kəsdilər' },
        VII: { meaning: 'kəsildi / əlaqəsi kəsildi' },
        VIII: { meaning: 'ayırdı / mənimsədi' },
        X: { meaning: 'kəsilməsini istədi / pay tələb etdi' }
    },
    'كَسَرَ': {
        I: { meaning: 'sındırdı' },
        II: { meaning: 'parçaladı / xırdaladı' },
        III: { meaning: 'qarşı çıxdı / müqavimət göstərdi' },
        IV: { meaning: 'sındırdı' },
        V: { meaning: 'sındı / parçalandı' },
        VII: { meaning: 'sındı' }
    },
    'كَسَبَ': {
        I: { meaning: 'qazandı' },
        II: { meaning: 'qazandırdı' },
        III: { meaning: 'qazandı / rəqabət apardı' },
        IV: { meaning: 'qazandırdı' },
        V: { meaning: 'dolandı / qazanc əldə etdi' },
        VI: { meaning: 'birlikdə qazandılar' },
        VII: { meaning: 'qazanıldı' },
        VIII: { meaning: 'əldə etdi' },
        X: { meaning: 'qazanmağa çalışdı' }
    },
    'خَلَقَ': {
        I: { meaning: 'yaratdı' },
        II: { meaning: 'yaratdı / formalaşdırdı' },
        V: { meaning: 'xasiyyət qazandı / formalaşdı' },
        VII: { meaning: 'yaradıldı' },
        VIII: { meaning: 'uydurdu / saxtalaşdırdı' }
    },
    'صَنَعَ': {
        I: { meaning: 'hazırladı / düzəltdi' },
        II: { meaning: 'istehsal etdi' },
        III: { meaning: 'qarşıdurma apardı / rəftar etdi' },
        V: { meaning: 'özünü elə göstərdi / süni davrandı' },
        VI: { meaning: 'qarşılıqlı şəkildə özlərini elə göstərdilər' },
        VII: { meaning: 'hazırlandı' },
        VIII: { meaning: 'seçdi / düzəltdi / uydurdu' },
        X: { meaning: 'hazırlatdı / sifariş verdi' }
    },
    'سَكَبَ': {
        I: { meaning: 'töktü' },
        II: { meaning: 'tökməyə səbəb oldu' },
        IV: { meaning: 'axıtdı / tökdü' },
        V: { meaning: 'töküldü / axdı' },
        VI: { meaning: 'bir-birinə töküldü' },
        VII: { meaning: 'töküldü' }
    },
    'حَفَرَ': {
        I: { meaning: 'qazdı' },
        II: { meaning: 'çox qazdı / qazdırdı' },
        IV: { meaning: 'qazmağa səbəb oldu' },
        V: { meaning: 'oyuq-oyuq oldu / qazıldı' },
        VII: { meaning: 'qazıldı' },
        VIII: { meaning: 'qazdı / qazıntı apardı' }
    },
    'زَرَعَ': {
        I: { meaning: 'əkdi' },
        II: { meaning: 'çoxlu əkdi / əkməyə səbəb oldu' },
        III: { meaning: 'ortaq əkinçilik etdi' },
        VI: { meaning: 'birlikdə əkinçilik etdilər' },
        VII: { meaning: 'əkildi' },
        X: { meaning: 'əkməyi istədi / əkinçi tutdu' }
    },
    'حَصَدَ': {
        I: { meaning: 'biçdi / məhsul yığdı' },
        II: { meaning: 'tamamilə biçdi' },
        VI: { meaning: 'birlikdə məhsul yığdılar' },
        VII: { meaning: 'biçildi / məhsul yığıldı' }
    },
    'سَكَنَ': {
        I: { meaning: 'yaşadı / sakitləşdi' },
        II: { meaning: 'sakitləşdirdi / yerləşdirdi' },
        III: { meaning: 'birlikdə yaşadı' },
        IV: { meaning: 'yerləşdirdi / məskunlaşdırdı' },
        V: { meaning: 'sakitləşdi / məskunlaşdı' },
        VI: { meaning: 'dinc yanaşı yaşadılar' },
        VII: { meaning: 'sakitləşdi' }
    },
    'صَلَحَ': {
        I: { meaning: 'yaxşı oldu / yararlı oldu' },
        II: { meaning: 'düzəltdi / təmir etdi' },
        III: { meaning: 'barışdı / razılaşdı' },
        IV: { meaning: 'islah etdi / düzəltdi' },
        V: { meaning: 'düzəldi / yararlı hala gəldi' },
        VI: { meaning: 'barışdılar' },
        VII: { meaning: 'düzəldi / təmir edildi' },
        VIII: { meaning: 'razılaşdı / barışdı' },
        X: { meaning: 'yararlı saydı / abadlaşdırdı' }
    },
    'فَقَدَ': {
        I: { meaning: 'itirdi' },
        II: { meaning: 'itkiyə uğratdı' },
        IV: { meaning: 'itirməsinə səbəb oldu' },
        V: { meaning: 'yoxladı / axtarıb nəzərdən keçirdi' },
        VI: { meaning: 'bir-birini yoxladılar' },
        VII: { meaning: 'itirildi' },
        VIII: { meaning: 'darıxdı / çatışmazlığını hiss etdi' },
        X: { meaning: 'halını yoxladı / axtardı' }
    },
    'حَرَسَ': {
        I: { meaning: 'qorudu / mühafizə etdi' },
        II: { meaning: 'ciddi şəkildə qorudu' },
        V: { meaning: 'ehtiyat etdi / qorundu' },
        VI: { meaning: 'növbə ilə keşik çəkdilər' },
        VIII: { meaning: 'ehtiyat etdi / özünü qorudu' },
        X: { meaning: 'mühafizəçi istədi' }
    },
    'مَنَعَ': {
        I: { meaning: 'mane oldu / qarşısını aldı' },
        II: { meaning: 'qadağan etdi / əlçatmaz etdi' },
        III: { meaning: 'qarşı çıxdı' },
        V: { meaning: 'imtina etdi / özünü saxladı' },
        VII: { meaning: 'qarşısı alındı' },
        VIII: { meaning: 'çəkinib imtina etdi' }
    },
    'سَمَحَ': {
        I: { meaning: 'icazə verdi / səxavətli oldu' },
        II: { meaning: 'icazə verdi' },
        III: { meaning: 'bağışladı' },
        IV: { meaning: 'icazə verdi / asanlaşdırdı' },
        V: { meaning: 'tolerantlıq göstərdi / güzəşt etdi' },
        VI: { meaning: 'bir-birinə güzəşt etdilər' },
        VII: { meaning: 'icazə verildi' },
        VIII: { meaning: 'icazə və ya üzr istədi' },
        X: { meaning: 'üzr və ya icazə istədi' }
    },
    'رَفَضَ': {
        I: { meaning: 'rədd etdi' },
        II: { meaning: 'rədd edilməsinə səbəb oldu' },
        III: { meaning: 'qarşı çıxdı' },
        V: { meaning: 'imtina etdi' },
        VI: { meaning: 'bir-birini rədd etdilər' },
        VII: { meaning: 'rədd edildi' }
    },
    'قَبِلَ': {
        I: { meaning: 'qəbul etdi' },
        II: { meaning: 'öpüş verdi / qəbul etdirdi' },
        III: { meaning: 'görüşdü / qarşılaşdı' },
        IV: { meaning: 'qəbul etdi / üz tutdu' },
        V: { meaning: 'qəbul etdi / razılaşdı' },
        VI: { meaning: 'qarşılaşdılar' },
        VII: { meaning: 'qəbul edildi' },
        VIII: { meaning: 'qarşıladı / qəbul etdi' },
        X: { meaning: 'qarşıladı / qəbul etdi' }
    },
    'مَدَحَ': {
        I: { meaning: 'təriflədi' },
        II: { meaning: 'çox təriflədi' },
        V: { meaning: 'özünü təriflədi' },
        VI: { meaning: 'bir-birini təriflədilər' },
        VII: { meaning: 'tərifləndi' },
        VIII: { meaning: 'təriflədi' },
        X: { meaning: 'tərif istədi' }
    },
    'هَرَبَ': {
        I: { meaning: 'qaçdı' },
        II: { meaning: 'qaçırdı / gizlicə apardı' },
        III: { meaning: 'qaçdı / yayındı' },
        IV: { meaning: 'qaçmasına səbəb oldu' },
        V: { meaning: 'yayındı / məsuliyyətdən qaçdı' },
        VI: { meaning: 'bir-birindən qaçdılar' },
        VII: { meaning: 'qaçıldı' }
    },
    'تَبِعَ': {
        I: { meaning: 'izlədi / ardınca getdi' },
        II: { meaning: 'izlədi / ardıcıl yoxladı' },
        III: { meaning: 'davam etdirdi / nəzarət etdi' },
        IV: { meaning: 'ardınca getməsinə səbəb oldu / qoşdu' },
        V: { meaning: 'izlədi / araşdırıb izləməyə başladı' },
        VI: { meaning: 'bir-birinin ardınca gəldilər' },
        VIII: { meaning: 'izlədi / tabe oldu' },
        X: { meaning: 'ardınca gətirdi / nəticə verdi' }
    },
    'قَصَدَ': {
        I: { meaning: 'niyyət etdi / yönəldi' },
        II: { meaning: 'qəsdən etdi / istiqamətləndirdi' },
        III: { meaning: 'yönəldi / məqsəd güddü' },
        IV: { meaning: 'niyyət etdi / məqsəd qoydu' },
        V: { meaning: 'qəsdən etdi' },
        VI: { meaning: 'birlikdə məqsəd güddülər' },
        VIII: { meaning: 'qənaət etdi / orta yolu tutdu' },
        X: { meaning: 'məqsəd seçdi / hədəf götürdü' }
    },
    'حَذَفَ': {
        I: { meaning: 'sildi / çıxardı' },
        II: { meaning: 'çoxunu sildi / ixtisar etdi' },
        VII: { meaning: 'silindi' },
        X: { meaning: 'silinməsini istədi' }
    },
    'نَقَلَ': {
        I: { meaning: 'köçürdü / nəql etdi' },
        II: { meaning: 'köçürdü / yaydı' },
        III: { meaning: 'köçürdü / ötürdü' },
        IV: { meaning: 'köçürdü' },
        V: { meaning: 'yerini dəyişdi / köçdü' },
        VI: { meaning: 'bir-birindən nəql etdilər' },
        VIII: { meaning: 'köçdü / ötürüldü' }
    },
    'نَقَشَ': {
        I: { meaning: 'oydu / həkk etdi' },
        II: { meaning: 'naxışladı / bəzədi' },
        V: { meaning: 'bəzəndi / naxışlandı' },
        VI: { meaning: 'müzakirə etdilər' },
        VIII: { meaning: 'həkk olundu / bəzəndi' },
        X: { meaning: 'həkk olunmasını istədi' }
    },
    'جَمَعَ': {
        I: { meaning: 'topladı' },
        II: { meaning: 'birləşdirdi / bir yerə yığdı' },
        III: { meaning: 'əhatə etdi / birləşdi' },
        IV: { meaning: 'yekdilliklə qərar verdi' },
        V: { meaning: 'toplandı' },
        VI: { meaning: 'bir araya gəldilər' },
        VII: { meaning: 'toplandı' },
        VIII: { meaning: 'toplandı / görüşdü' },
        X: { meaning: 'gücünü topladı' }
    },
    'قَسَمَ': {
        I: { meaning: 'böldü' },
        II: { meaning: 'bölüşdürdü' },
        III: { meaning: 'paylaşdı' },
        IV: { meaning: 'and içdi' },
        V: { meaning: 'bölündü' },
        VI: { meaning: 'bölüşdülər' },
        VII: { meaning: 'bölündü' },
        VIII: { meaning: 'bölüşdü' },
        X: { meaning: 'fal və ya püşk istədi' }
    },
    'حَسَبَ': {
        I: { meaning: 'saydı / hesabladı / düşündü' },
        II: { meaning: 'hesabladı / hesab etdi' },
        III: { meaning: 'hesabat aldı / məsuliyyətə cəlb etdi' },
        V: { meaning: 'ehtiyat etdi / nəzərə aldı' },
        VI: { meaning: 'bir-birindən hesab soruşdular' },
        VII: { meaning: 'hesablandı' },
        VIII: { meaning: 'savab umdu / nəzərə aldı' },
        X: { meaning: 'kifayət saydı / hesab istədi' }
    },
    'كَثُرَ': {
        I: { meaning: 'çoxaldı' },
        II: { meaning: 'çoxaltdı / artırdı' },
        III: { meaning: 'çoxluqda rəqabət apardı' },
        IV: { meaning: 'artırdı / çox etdi' },
        V: { meaning: 'çoxaldı' },
        VI: { meaning: 'çoxaldılar / artdılar' },
        X: { meaning: 'çox saydı / çox istədi' }
    },
    'عَرَضَ': {
        I: { meaning: 'təqdim etdi / göstərdi' },
        II: { meaning: 'dəfələrlə təqdim etdi / nümayiş etdirdi' },
        III: { meaning: 'qarşı çıxdı' },
        IV: { meaning: 'üz çevirdi' },
        V: { meaning: 'məruz qaldı / özünü göstərdi' },
        VI: { meaning: 'ziddiyyət təşkil etdilər' },
        VII: { meaning: 'təqdim edildi' },
        VIII: { meaning: 'etiraz etdi' },
        X: { meaning: 'nəzərdən keçirdi / nümayiş etdirdi' }
    },
    'خَطَبَ': {
        I: { meaning: 'xütbə söylədi / elçi getdi' },
        II: { meaning: 'xütbə söylətdi / nişanladı' },
        III: { meaning: 'müraciət etdi / xitab etdi' },
        V: { meaning: 'nişanlandı' },
        VI: { meaning: 'bir-biri ilə danışdılar' },
        VII: { meaning: 'elçilik edildi / xitab olundu' },
        X: { meaning: 'xütbə və ya elçilik istədi' }
    },
    'حَلَقَ': {
        I: { meaning: 'qırxdı / uçdu / dövrə vurdu' },
        II: { meaning: 'uçurdu / yaxşıca qırxdı' },
        IV: { meaning: 'uçmağa və ya qırxmağa səbəb oldu' },
        V: { meaning: 'ətrafına toplandı' },
        VII: { meaning: 'qırxıldı' },
        VIII: { meaning: 'qırxıldı / təraş oldu' }
    },
    'نَزَعَ': {
        I: { meaning: 'çıxardı / dartıb qopardı' },
        II: { meaning: 'dəfələrlə çıxardı / narahat etdi' },
        III: { meaning: 'mübahisə etdi' },
        IV: { meaning: 'çıxardı' },
        V: { meaning: 'parçalandı / dartıldı' },
        VI: { meaning: 'mübahisə etdilər' },
        VIII: { meaning: 'çıxarıb götürdü' },
        X: { meaning: 'çıxarılmasını istədi' }
    },
    'عَثَرَ': {
        I: { meaning: 'büdrədi / tapdı' },
        II: { meaning: 'büdrətdi / büdrəməsinə səbəb oldu' },
        V: { meaning: 'büdrədi' },
        VI: { meaning: 'bir-birinə ilişib büdrədilər' }
    },
    'فَقَهَ': {
        I: { meaning: 'dərindən anladı' },
        II: { meaning: 'öyrətdi / fiqh öyrətdi' },
        III: { meaning: 'anlayışda üstün gəldi' },
        IV: { meaning: 'başa saldı' },
        V: { meaning: 'dini elmləri öyrəndi' },
        X: { meaning: 'izah və ya məna soruşdu' }
    },
    'عَلِمَ': {
        I: { meaning: 'bildi / xəbər tutdu' },
        II: { meaning: 'öyrətdi' },
        IV: { meaning: 'xəbər verdi / bildirdi' },
        V: { meaning: 'öyrəndi' },
        VI: { meaning: 'bilikli görünməyə çalışdı' },
        VII: { meaning: 'məlum oldu' },
        X: { meaning: 'soruşdu / məlumat almaq istədi' }
    },
    'جَهِلَ': {
        I: { meaning: 'bilmədi / cahil oldu' },
        II: { meaning: 'cahil saydı / cahilləşdirdi' },
        III: { meaning: 'cahil kimi davrandı' },
        V: { meaning: 'özünü bilməzliyə vurdu' },
        VI: { meaning: 'bilməzliyə vurdular' },
        VII: { meaning: 'naməlum oldu' },
        X: { meaning: 'cahil saydı / cahil hesab etdi' }
    },
    'بَدَعَ': {
        I: { meaning: 'yenilik etdi / yaratdı' },
        II: { meaning: 'bidətçi elan etdi / yenilik gətirdi' },
        IV: { meaning: 'möhtəşəm yaratdı / mükəmməl iş gördü' },
        V: { meaning: 'bidətə yönəldi' },
        VIII: { meaning: 'yenilik icad etdi' },
        X: { meaning: 'yenilikçi və ya heyrətamiz saydı' }
    },
    'بَرُدَ': {
        I: { meaning: 'soyudu' },
        II: { meaning: 'soyutdu' },
        IV: { meaning: 'soyutdu / tez göndərdi' },
        V: { meaning: 'sərinlədi / özünü soyutdu' },
        VI: { meaning: 'soyuq davrandılar' },
        VII: { meaning: 'soyudu' },
        X: { meaning: 'soyuq saydı / soyutmağı istədi' }
    },
    'سَخُنَ': {
        I: { meaning: 'isindi / qızdı' },
        II: { meaning: 'qızdırdı' },
        IV: { meaning: 'qızdırdı' },
        V: { meaning: 'isindi' }
    },
    'جَمُدَ': {
        I: { meaning: 'dondu' },
        II: { meaning: 'dondurdu' },
        V: { meaning: 'dondu / hərəkətsiz qaldı' },
        VII: { meaning: 'donduruldu / dondu' },
        X: { meaning: 'donmuş saydı / donmasını istədi' }
    },
    'نَشَفَ': {
        I: { meaning: 'qurudu' },
        II: { meaning: 'qurutdu' },
        IV: { meaning: 'qurutdu' },
        V: { meaning: 'qurudu / özünü qurutdu' },
        X: { meaning: 'qurudulmasını istədi' }
    },
    'مَطَرَ': {
        I: { meaning: 'yağış yağdı' },
        II: { meaning: 'yağış yağdırdı / güclü yağış yağdı' },
        IV: { meaning: 'yağış yağdırdı' },
        X: { meaning: 'yağış istədi' }
    },
    'هَطَلَ': {
        I: { meaning: 'şiddətlə yağdı / töküldü' },
        II: { meaning: 'güclü yağdırdı' },
        IV: { meaning: 'yağmağa səbəb oldu' },
        V: { meaning: 'şiddətlə yağdı' },
        X: { meaning: 'yağış istədi' }
    },
    'خَطِرَ': {
        I: { meaning: 'ağlına gəldi / təhlükəli oldu' },
        II: { meaning: 'təhlükəyə atdı / xəbərdar etdi' },
        III: { meaning: 'riskə getdi' },
        IV: { meaning: 'xəbər verdi / bildiriş etdi' },
        VI: { meaning: 'bir-birinin fikrini hiss etdilər' }
    },
    'رَقَبَ': {
        I: { meaning: 'müşahidə etdi / gözlədi' },
        II: { meaning: 'nəzarət etdi / izləməni gücləndirdi' },
        III: { meaning: 'nəzarət etdi' },
        V: { meaning: 'gözlədi / pusquda dayandı' },
        VI: { meaning: 'bir-birini izlədilər' },
        VIII: { meaning: 'gözlədi / intizar çəkdi' }
    },
    'رَصَدَ': {
        I: { meaning: 'izlədi / qeydə aldı' },
        II: { meaning: 'qeydə aldı / vəsait ayırdı' },
        IV: { meaning: 'vəsait ayırdı / hazırladı' },
        V: { meaning: 'pusquda dayandı' },
        VI: { meaning: 'bir-birini izlədilər' },
        VII: { meaning: 'izləndi' },
        VIII: { meaning: 'gözlədi / pusquda dayandı' }
    },
    'كَتَمَ': {
        I: { meaning: 'gizlətdi' },
        II: { meaning: 'dəfələrlə gizlətdi' },
        III: { meaning: 'sirri birlikdə saxladı' },
        V: { meaning: 'gizləndi / sirr saxladı' },
        VI: { meaning: 'bir-birindən sirr gizlətdilər' },
        VII: { meaning: 'gizlədildi / boğuldu' },
        VIII: { meaning: 'gizli qaldı' },
        X: { meaning: 'gizli saxlanmasını istədi' }
    },
    'ظَهَرَ': {
        I: { meaning: 'göründü / üzə çıxdı' },
        II: { meaning: 'üzə çıxardı / göstərdi' },
        III: { meaning: 'dəstək verdi / üstün gəldi' },
        IV: { meaning: 'aşkara çıxardı' },
        VI: { meaning: 'özünü göstərdi / nümayiş etdirdi' },
        VII: { meaning: 'göründü' },
        X: { meaning: 'əzbərlədi / dəlilə əsaslandı' }
    },
    'كَشَفَ': {
        I: { meaning: 'açdı / üzə çıxardı' },
        II: { meaning: 'dəfələrlə aşkara çıxardı' },
        III: { meaning: 'qarşılaşdı / üz-üzə gəldi' },
        IV: { meaning: 'aşkara çıxardı' },
        V: { meaning: 'açıldı / aydınlaşdı' },
        VI: { meaning: 'bir-birinə açıldılar' },
        VII: { meaning: 'aşkara çıxdı' },
        VIII: { meaning: 'kəşf etdi' },
        X: { meaning: 'araşdırdı / kəşf etməyə çalışdı' }
    },
    'ثَقُلَ': {
        I: { meaning: 'ağırlaşdı' },
        II: { meaning: 'ağırlaşdırdı / yük yüklədi' },
        III: { meaning: 'ağır davrandı / ləngidi' },
        IV: { meaning: 'yük etdi / ağırlaşdırdı' },
        V: { meaning: 'ağırlaşdı / ləngidi' },
        X: { meaning: 'ağır saydı' }
    },
    'ضَعُفَ': {
        I: { meaning: 'zəiflədi' },
        II: { meaning: 'zəiflətdi' },
        III: { meaning: 'qat artırdı / çoxaltdı' },
        IV: { meaning: 'zəiflətdi' },
        V: { meaning: 'zəiflədi' },
        VI: { meaning: 'ikiqat artdı' },
        VII: { meaning: 'zəiflədildi' },
        X: { meaning: 'zəif saydı / zəif vəziyyətindən istifadə etdi' }
    },
    'فَحَصَ': {
        I: { meaning: 'müayinə etdi / yoxladı' },
        II: { meaning: 'ətraflı yoxladı' },
        V: { meaning: 'diqqətlə araşdırdı' },
        VI: { meaning: 'bir-birini yoxladılar' },
        VII: { meaning: 'yoxlanıldı' },
        X: { meaning: 'yoxlanılmasını istədi' }
    },
    'فَرِغَ': {
        I: { meaning: 'boşaldı / bitirdi' },
        II: { meaning: 'boşaltdı / ayırdı' },
        IV: { meaning: 'boşaltdı' },
        V: { meaning: 'özünü bir işə həsr etdi' },
        VII: { meaning: 'boşaldı' },
        X: { meaning: 'boşaltdı / xaric etdi' }
    },
    'مَزَجَ': {
        I: { meaning: 'qarışdırdı' },
        II: { meaning: 'yaxşıca qarışdırdı' },
        III: { meaning: 'qarışdı / birləşdi' },
        V: { meaning: 'qarışdı' },
        VI: { meaning: 'bir-birinə qarışdılar' },
        VII: { meaning: 'qarışdırıldı' },
        VIII: { meaning: 'qarışdı / birləşdi' }
    },
    'خَلَطَ': {
        I: { meaning: 'qarışdırdı / çaşdırdı' },
        II: { meaning: 'qarışdırdı / dolaşdırdı' },
        III: { meaning: 'qarışdı / ünsiyyətdə oldu' },
        IV: { meaning: 'çaşdırdı' },
        V: { meaning: 'qarışdı / dolaşıq vəziyyətə düşdü' },
        VI: { meaning: 'bir-birinə qarışdılar' },
        VII: { meaning: 'qarışdırıldı' },
        VIII: { meaning: 'qarışdı / səhv saldı' }
    },
    'شَعَرَ': {
        I: { meaning: 'hiss etdi / duydu' },
        II: { meaning: 'hiss etdirdi / nişan qoydu' },
        III: { meaning: 'şeir yazdı / şair kimi davrandı' },
        IV: { meaning: 'xəbər verdi / hiss etdirdi' },
        V: { meaning: 'dərk etdi / hiss etməyə başladı' },
        X: { meaning: 'duydu / hiss etdi' }
    },
    'لَمَحَ': {
        I: { meaning: 'gözucu gördü / sezdi' },
        II: { meaning: 'işarə etdi / üstüörtülü dedi' },
        IV: { meaning: 'işarə etdi' },
        V: { meaning: 'üstüörtülü işarə etdi' },
        VI: { meaning: 'bir-birinə göz vurdular' },
        VII: { meaning: 'gözə dəydi / sezildi' }
    },
    'زَهِدَ': {
        I: { meaning: 'zöhd etdi / dünyadan üz döndərdi' },
        II: { meaning: 'zöhdə yönəltdi / həvəsdən saldı' },
        V: { meaning: 'zöhd etdi' },
        VI: { meaning: 'bir-birindən və dünyadan üz döndərdilər' }
    },
    'طَمِعَ': {
        I: { meaning: 'tamah saldı / ümid bəslədi' },
        II: { meaning: 'tamahlandırdı / ümid verdi' },
        III: { meaning: 'arzuladı / tamah etdi' },
        IV: { meaning: 'tamahlandırdı' },
        V: { meaning: 'tamah saldı' },
        VI: { meaning: 'bir-birinə tamah saldılar' }
    },
    'غَبَطَ': {
        I: { meaning: 'qibtə etdi / paxıllıq etmədən arzuladı' },
        II: { meaning: 'təbrik etdi / qibtə etdirdi' },
        III: { meaning: 'qibtə etdi' },
        V: { meaning: 'qibtə etdi / sevindi' },
        VI: { meaning: 'bir-birinə qibtə etdilər' }
    },
    'رَهِبَ': {
        I: { meaning: 'qorxdu' },
        II: { meaning: 'qorxutdu' },
        IV: { meaning: 'qorxutdu' },
        V: { meaning: 'ibadətə və zahidliyə yönəldi' },
        VI: { meaning: 'bir-birindən qorxdular' },
        VIII: { meaning: 'qorxuya düşdü' },
        X: { meaning: 'qorxutmağa çalışdı' }
    },
    'عَبَدَ': {
        I: { meaning: 'ibadət etdi / qulluq etdi' },
        II: { meaning: 'qula çevirdi / ibadət etdirdi' },
        V: { meaning: 'ibadətə həsr olundu' },
        VIII: { meaning: 'qul etdi' },
        X: { meaning: 'qula çevirdi / qul kimi istifadə etdi' }
    },
    'عَجِلَ': {
        I: { meaning: 'tələsdi' },
        II: { meaning: 'tələsdirdi / tezləşdirdi' },
        III: { meaning: 'təcili məşğul oldu' },
        IV: { meaning: 'tələsdirdi' },
        V: { meaning: 'tələsdi' },
        X: { meaning: 'tələsdi / tələsilməsini istədi' }
    },
    'قَفَلَ': {
        I: { meaning: 'bağladı / geri qayıtdı' },
        II: { meaning: 'möhkəm bağladı / kilidlədi' },
        IV: { meaning: 'bağladı' },
        V: { meaning: 'kilidləndi' },
        VII: { meaning: 'bağlandı' },
        X: { meaning: 'bağlanmasını istədi' }
    },
    'قَفَزَ': {
        I: { meaning: 'tullandı' },
        II: { meaning: 'tullatdı' },
        IV: { meaning: 'tullanmağa vadar etdi' },
        V: { meaning: 'tullandı' },
        VI: { meaning: 'birlikdə tullandılar' }
    },
    'سَبَحَ': {
        I: { meaning: 'üzdü' },
        II: { meaning: 'üzdürdü / təsbih etdi' },
        III: { meaning: 'birlikdə üzdü' },
        IV: { meaning: 'üzməyə vadar etdi' },
        V: { meaning: 'təsbih etdi' },
        VI: { meaning: 'birlikdə üzdülər' }
    },
    'زَحَفَ': {
        I: { meaning: 'süründü / irəlilədi' },
        II: { meaning: 'süründürdü' },
        IV: { meaning: 'sürünməyə vadar etdi' },
        V: { meaning: 'süründü' },
        VI: { meaning: 'bir-birinə doğru süründülər' }
    },
    'زَلَقَ': {
        I: { meaning: 'sürüşdü' },
        II: { meaning: 'sürüşdürdü / yağladı' },
        IV: { meaning: 'sürüşməsinə səbəb oldu' },
        V: { meaning: 'sürüşdü' },
        VI: { meaning: 'bir-birinə sürtünüb sürüşdülər' },
        VII: { meaning: 'sürüşdü' }
    },
    'سَقَطَ': {
        I: { meaning: 'düşdü' },
        II: { meaning: 'saldı / kəsdi / imtahandan kəsdi' },
        IV: { meaning: 'saldı / ləğv etdi' },
        V: { meaning: 'qüsur axtardı' },
        VI: { meaning: 'bir-birinin ardınca düşdülər' }
    },
    'رَفَسَ': {
        I: { meaning: 'təpiklədi' },
        III: { meaning: 'bir-birinə təpik atdı / güləşdi' },
        VI: { meaning: 'bir-birinə təpik atdılar' }
    },
    'صَفَعَ': {
        I: { meaning: 'şillə vurdu' },
        II: { meaning: 'dəfələrlə şillələdi' },
        VI: { meaning: 'bir-birinə şillə vurdular' },
        VII: { meaning: 'şillə yedi' }
    },
    'لَكَمَ': {
        I: { meaning: 'yumruq vurdu' },
        II: { meaning: 'dəfələrlə yumruqladı' },
        III: { meaning: 'yumruqla döyüşdü / boks etdi' },
        VI: { meaning: 'yumruqla döyüşdülər' },
        VII: { meaning: 'yumruq yedi' }
    },
    'لَدَغَ': {
        I: { meaning: 'sancdı / dişlədi' }
    },
    'لَسَعَ': {
        I: { meaning: 'sancdı' },
        II: { meaning: 'dəfələrlə sancdı / yandırdı' }
    },
    'سَحَقَ': {
        I: { meaning: 'əzdi / toz halına saldı' },
        II: { meaning: 'tamamilə əzdi' },
        VII: { meaning: 'əzildi / məhv edildi' }
    },
    'طَحَنَ': {
        I: { meaning: 'üyütdü' },
        II: { meaning: 'xırdalayıb üyütdü' },
        VI: { meaning: 'bir-biri ilə amansız mübarizə apardılar' },
        VII: { meaning: 'üyüdüldü / əzildi' }
    },
    'طَبَعَ': {
        I: { meaning: 'çap etdi / möhürlədi' },
        II: { meaning: 'normallaşdırdı' },
        V: { meaning: 'xasiyyət qazandı / təbiiləşdi' },
        VII: { meaning: 'çap olundu / yaddaşda həkk olundu' }
    },
    'نَسَخَ': {
        I: { meaning: 'köçürdü / nüsxəsini çıxardı' },
        II: { meaning: 'nüsxələrini çıxardı / köçürtdü' },
        VI: { meaning: 'bir-birini əvəz etdilər' },
        VIII: { meaning: 'köçürdü / nüsxəsini çıxardı' },
        X: { meaning: 'nüsxəsini istədi / köçürtdü' }
    },
    'لَصَقَ': {
        I: { meaning: 'yapışdırdı / yapışdı' },
        II: { meaning: 'yapışdırdı / birləşdirdi' },
        III: { meaning: 'yaxın yapışdı / ayrılmadı' },
        IV: { meaning: 'birləşdirdi / aid etdi' },
        V: { meaning: 'yapışdı / özünü yapışdırdı' },
        VI: { meaning: 'bir-birinə yapışdılar' },
        VII: { meaning: 'yapışdı' },
        VIII: { meaning: 'yapışdı / bitişdi' }
    },
    'قَلَبَ': {
        I: { meaning: 'çevirdi / alt-üst etdi' },
        II: { meaning: 'çevirib yoxladı / dönə-dönə çevirdi' },
        V: { meaning: 'çevrildi / vəziyyətdən-vəziyyətə düşdü' },
        VII: { meaning: 'çevrildi / istiqamətini dəyişdi' }
    },
    'بَعُدَ': {
        I: { meaning: 'uzaq oldu' },
        II: { meaning: 'uzaqlaşdırdı' },
        III: { meaning: 'uzaq saxladı / araladı' },
        IV: { meaning: 'uzaqlaşdırdı / kənarlaşdırdı' },
        V: { meaning: 'uzaqlaşdı' },
        VI: { meaning: 'bir-birindən uzaqlaşdılar' },
        VIII: { meaning: 'uzaqlaşdı / kənar durdu' },
        X: { meaning: 'ehtimaldan uzaq saydı / istisna etdi' }
    },
    'قَصُرَ': {
        I: { meaning: 'qısa oldu / yetərsiz qaldı' },
        II: { meaning: 'qısaltdı / səhlənkarlıq etdi' },
        IV: { meaning: 'çəkinib dayandı' },
        V: { meaning: 'səhlənkarlıq etdi / yetərsiz qaldı' },
        VIII: { meaning: 'özünü məhdudlaşdırdı' },
        X: { meaning: 'qısa və ya yetərsiz saydı' }
    },
    'عَرُضَ': {
        I: { meaning: 'geniş oldu' },
        II: { meaning: 'məruz qoydu / təqdim etdi' },
        III: { meaning: 'qarşı çıxdı / etiraz etdi' },
        IV: { meaning: 'üz döndərdi / imtina etdi' },
        V: { meaning: 'məruz qaldı / qarşılaşdı' },
        VI: { meaning: 'ziddiyyət təşkil etdilər' },
        VIII: { meaning: 'etiraz etdi / qarşı çıxdı' },
        X: { meaning: 'nəzərdən keçirdi / nümayiş etdirdi' }
    },
    'مَهَرَ': {
        I: { meaning: 'bacarıqlı oldu / mehr verdi' },
        V: { meaning: 'bacarıq qazandı' }
    },
    'كَفَلَ': {
        I: { meaning: 'zamin durdu / himayə etdi' },
        II: { meaning: 'zamin təyin etdi / himayə etdirdi' },
        V: { meaning: 'öhdəsinə götürdü / zamin durdu' },
        VI: { meaning: 'bir-birinə dayaq oldular' }
    },
    'ضَمِنَ': {
        I: { meaning: 'zəmanət verdi / təmin etdi' },
        II: { meaning: 'daxil etdi / məsuliyyət yüklədi' },
        V: { meaning: 'özündə ehtiva etdi' },
        VI: { meaning: 'həmrəy oldular' }
    },
    'جَذَبَ': {
        I: { meaning: 'çəkdi / cəlb etdi' },
        II: { meaning: 'cəlb etdi / özünə çəkdi' },
        III: { meaning: 'söhbətə cəlb etdi' },
        VI: { meaning: 'dartışdılar / bir-birinə çəkdilər' },
        VII: { meaning: 'cəlb olundu' },
        VIII: { meaning: 'cəlb etdi / özünə çəkdi' }
    },
    'سَرَدَ': {
        I: { meaning: 'nəql etdi / ardıcıl danışdı' },
        II: { meaning: 'ətraflı və ardıcıl nəql etdi' },
        VI: { meaning: 'bir-birinə nəql etdilər' },
        X: { meaning: 'nəql etməsini istədi' }
    },
    'فَقِهَ': {
        I: { meaning: 'dərindən anladı' },
        II: { meaning: 'başa saldı / fiqh öyrətdi' },
        V: { meaning: 'dini elmləri öyrəndi / dərindən anladı' },
        VI: { meaning: 'özünü bilikli göstərdi' },
        X: { meaning: 'izah istədi' }
    },
    'رَسَبَ': {
        I: { meaning: 'dibə çökdü / imtahandan kəsildi' },
        II: { meaning: 'batırdı / imtahandan kəsdirdi' },
        IV: { meaning: 'batırdı / imtahandan kəsdirdi' },
        V: { meaning: 'çökdü / çöküntü yaratdı' }
    }
};

const BAB_ARABIC_OVERRIDES = {
    'ذَهَبَ:VIII': 'اِذْتَهَبَ',
    'دَرَسَ:VIII': 'اِدْتَرَسَ',
    'نَظَرَ:VII': 'اِنَّظَرَ',
    'نَظَرَ:VIII': 'اِنْتَظَرَ',
    'دَخَلَ:VIII': 'اِدَّخَلَ'
};