// Nibras — 100 miqdar və 100 sıra sayı.
const CARDINAL_ONES_MASC = {
    1: 'وَاحِدٌ', 2: 'اِثْنَانِ', 3: 'ثَلَاثَةٌ', 4: 'أَرْبَعَةٌ',
    5: 'خَمْسَةٌ', 6: 'سِتَّةٌ', 7: 'سَبْعَةٌ', 8: 'ثَمَانِيَةٌ',
    9: 'تِسْعَةٌ', 10: 'عَشَرَةٌ'
};
const CARDINAL_ONES_FEM = {
    1: 'وَاحِدَةٌ', 2: 'اِثْنَتَانِ', 3: 'ثَلَاثٌ', 4: 'أَرْبَعٌ',
    5: 'خَمْسٌ', 6: 'سِتٌّ', 7: 'سَبْعٌ', 8: 'ثَمَانٍ',
    9: 'تِسْعٌ', 10: 'عَشْرٌ'
};
const CARDINAL_TEENS_MASC = {
    11: 'أَحَدَ عَشَرَ', 12: 'اِثْنَا عَشَرَ', 13: 'ثَلَاثَةَ عَشَرَ',
    14: 'أَرْبَعَةَ عَشَرَ', 15: 'خَمْسَةَ عَشَرَ', 16: 'سِتَّةَ عَشَرَ',
    17: 'سَبْعَةَ عَشَرَ', 18: 'ثَمَانِيَةَ عَشَرَ', 19: 'تِسْعَةَ عَشَرَ'
};
const CARDINAL_TEENS_FEM = {
    11: 'إِحْدَى عَشْرَةَ', 12: 'اِثْنَتَا عَشْرَةَ', 13: 'ثَلَاثَ عَشْرَةَ',
    14: 'أَرْبَعَ عَشْرَةَ', 15: 'خَمْسَ عَشْرَةَ', 16: 'سِتَّ عَشْرَةَ',
    17: 'سَبْعَ عَشْرَةَ', 18: 'ثَمَانِيَ عَشْرَةَ', 19: 'تِسْعَ عَشْرَةَ'
};
const CARDINAL_TENS = {
    20: 'عِشْرُونَ', 30: 'ثَلَاثُونَ', 40: 'أَرْبَعُونَ',
    50: 'خَمْسُونَ', 60: 'سِتُّونَ', 70: 'سَبْعُونَ',
    80: 'ثَمَانُونَ', 90: 'تِسْعُونَ'
};

function getCardinalForm(value, gender) {
    const ones = gender === 'feminine' ? CARDINAL_ONES_FEM : CARDINAL_ONES_MASC;
    if (value === 100) return 'مِائَةٌ';
    if (value <= 10) return ones[value];
    if (value <= 19) return gender === 'feminine'
        ? CARDINAL_TEENS_FEM[value]
        : CARDINAL_TEENS_MASC[value];
    const tens = Math.floor(value / 10) * 10;
    if (value % 10 === 0) return CARDINAL_TENS[tens];
    return `${ones[value % 10]} وَ${CARDINAL_TENS[tens]}`;
}

function getCardinalExample(value, gender) {
    const form = getCardinalForm(value, gender);
    if (value === 1) {
        return gender === 'feminine'
            ? { arabic: 'عِنْدِي سَيَّارَةٌ وَاحِدَةٌ.', translation: 'Məndə bir maşın var.' }
            : { arabic: 'عِنْدِي كِتَابٌ وَاحِدٌ.', translation: 'Məndə bir kitab var.' };
    }
    if (value === 2) {
        return gender === 'feminine'
            ? { arabic: 'عِنْدِي سَيَّارَتَانِ.', translation: 'Məndə iki maşın var.' }
            : { arabic: 'عِنْدِي كِتَابَانِ.', translation: 'Məndə iki kitab var.' };
    }
    if (value >= 3 && value <= 10) {
        return gender === 'feminine'
            ? { arabic: `عِنْدِي ${form} سَيَّارَاتٍ.`, translation: `Məndə ${value} maşın var.` }
            : { arabic: `عِنْدِي ${form} كُتُبٍ.`, translation: `Məndə ${value} kitab var.` };
    }
    if (value === 100) {
        return gender === 'feminine'
            ? { arabic: 'عِنْدِي مِائَةُ سَيَّارَةٍ.', translation: 'Məndə yüz maşın var.' }
            : { arabic: 'عِنْدِي مِائَةُ كِتَابٍ.', translation: 'Məndə yüz kitab var.' };
    }
    return gender === 'feminine'
        ? { arabic: `عِنْدِي ${form} سَيَّارَةً.`, translation: `Məndə ${value} maşın var.` }
        : { arabic: `عِنْدِي ${form} كِتَابًا.`, translation: `Məndə ${value} kitab var.` };
}

const ORDINAL_MASC = {
    1: 'الْأَوَّلُ', 2: 'الثَّانِي', 3: 'الثَّالِثُ', 4: 'الرَّابِعُ',
    5: 'الْخَامِسُ', 6: 'السَّادِسُ', 7: 'السَّابِعُ', 8: 'الثَّامِنُ',
    9: 'التَّاسِعُ', 10: 'الْعَاشِرُ'
};
const ORDINAL_FEM = {
    1: 'الْأُولَى', 2: 'الثَّانِيَةُ', 3: 'الثَّالِثَةُ', 4: 'الرَّابِعَةُ',
    5: 'الْخَامِسَةُ', 6: 'السَّادِسَةُ', 7: 'السَّابِعَةُ',
    8: 'الثَّامِنَةُ', 9: 'التَّاسِعَةُ', 10: 'الْعَاشِرَةُ'
};
const ORDINAL_TEENS_MASC = {
    11: 'الْحَادِيَ عَشَرَ', 12: 'الثَّانِيَ عَشَرَ', 13: 'الثَّالِثَ عَشَرَ',
    14: 'الرَّابِعَ عَشَرَ', 15: 'الْخَامِسَ عَشَرَ', 16: 'السَّادِسَ عَشَرَ',
    17: 'السَّابِعَ عَشَرَ', 18: 'الثَّامِنَ عَشَرَ', 19: 'التَّاسِعَ عَشَرَ'
};
const ORDINAL_TEENS_FEM = {
    11: 'الْحَادِيَةَ عَشْرَةَ', 12: 'الثَّانِيَةَ عَشْرَةَ',
    13: 'الثَّالِثَةَ عَشْرَةَ', 14: 'الرَّابِعَةَ عَشْرَةَ',
    15: 'الْخَامِسَةَ عَشْرَةَ', 16: 'السَّادِسَةَ عَشْرَةَ',
    17: 'السَّابِعَةَ عَشْرَةَ', 18: 'الثَّامِنَةَ عَشْرَةَ',
    19: 'التَّاسِعَةَ عَشْرَةَ'
};
const ORDINAL_TENS = {
    20: 'الْعِشْرُونَ', 30: 'الثَّلَاثُونَ', 40: 'الْأَرْبَعُونَ',
    50: 'الْخَمْسُونَ', 60: 'السِّتُّونَ', 70: 'السَّبْعُونَ',
    80: 'الثَّمَانُونَ', 90: 'التِّسْعُونَ'
};
const ORDINAL_TENS_FEM = {
    20: 'الْعِشْرُونَ', 30: 'الثَّلَاثُونَ', 40: 'الْأَرْبَعُونَ',
    50: 'الْخَمْسُونَ', 60: 'السِّتُّونَ', 70: 'السَّبْعُونَ',
    80: 'الثَّمَانُونَ', 90: 'التِّسْعُونَ'
};

function getOrdinalForm(value, gender) {
    if (value === 100) return 'الْمِائَةُ';
    const ones = gender === 'feminine' ? ORDINAL_FEM : ORDINAL_MASC;
    if (value <= 10) return ones[value];
    if (value <= 19) return gender === 'feminine'
        ? ORDINAL_TEENS_FEM[value]
        : ORDINAL_TEENS_MASC[value];
    const tens = Math.floor(value / 10) * 10;
    if (value % 10 === 0) return (gender === 'feminine' ? ORDINAL_TENS_FEM : ORDINAL_TENS)[tens];
    const one = gender === 'feminine'
        ? { 1: 'الْحَادِيَةُ', 2: 'الثَّانِيَةُ', 3: 'الثَّالِثَةُ', 4: 'الرَّابِعَةُ', 5: 'الْخَامِسَةُ', 6: 'السَّادِسَةُ', 7: 'السَّابِعَةُ', 8: 'الثَّامِنَةُ', 9: 'التَّاسِعَةُ' }[value % 10]
        : { 1: 'الْحَادِي', 2: 'الثَّانِي', 3: 'الثَّالِث', 4: 'الرَّابِع', 5: 'الْخَامِس', 6: 'السَّادِس', 7: 'السَّابِع', 8: 'الثَّامِن', 9: 'التَّاسِع' }[value % 10];
    return `${one} وَ${ORDINAL_TENS[tens]}`;
}

const cardinalNumbersData = Array.from({ length: 100 }, (_, index) => {
    const value = index + 1;
    const masculine = getCardinalForm(value, 'masculine');
    const feminine = getCardinalForm(value, 'feminine');
    return {
        id: 3001 + index,
        value,
        arabic: masculine,
        feminine,
        meaning: String(value),
        category: 'say',
        numberType: 'miqdar',
        examples: [
            getCardinalExample(value, 'masculine'),
            getCardinalExample(value, 'feminine')
        ]
    };
});

const ordinalNumbersData = Array.from({ length: 100 }, (_, index) => {
    const value = index + 1;
    const masculine = getOrdinalForm(value, 'masculine');
    const feminine = getOrdinalForm(value, 'feminine');
    return {
        id: 4001 + index,
        value,
        arabic: masculine,
        feminine,
        meaning: `${value}-ci / ${value}-cı`,
        category: 'say',
        numberType: 'sira',
        examples: [
            { arabic: `هُوَ الطَّالِبُ ${masculine}.`, translation: `O (kişi), ${value}-ci tələbədir.` },
            { arabic: `هِيَ الطَّالِبَةُ ${feminine}.`, translation: `O (qadın), ${value}-ci tələbədir.` }
        ]
    };
});

const numbersData = [...cardinalNumbersData, ...ordinalNumbersData];