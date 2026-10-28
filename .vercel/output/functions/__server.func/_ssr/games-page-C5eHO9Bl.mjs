import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as GAME_COPY, i as GAMES, m as gamePath, o as GAME_VERSION, p as gameBySlug, x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { un as GameIcon } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/games-page-C5eHO9Bl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SOZ_ANSWERS = {
	4: [
		"adam",
		"ailə",
		"alma",
		"alın",
		"aləm",
		"alət",
		"arpa",
		"arxa",
		"arzu",
		"asan",
		"atlı",
		"atəş",
		"ayaq",
		"açıq",
		"ağac",
		"ağıl",
		"ağır",
		"ağız",
		"baba",
		"bacı",
		"bank",
		"belə",
		"bibi",
		"bina",
		"borc",
		"boya",
		"bürc",
		"bəli",
		"bənd",
		"bərk",
		"cadı",
		"cümə",
		"dana",
		"dayı",
		"dolu",
		"dost",
		"dörd",
		"düyü",
		"dəri",
		"dərs",
		"dərə",
		"dəvə",
		"eyni",
		"fayl",
		"film",
		"gecə",
		"gəmi",
		"hara",
		"hava",
		"himn",
		"hələ",
		"hərf",
		"ilan",
		"indi",
		"inək",
		"ipək",
		"isti",
		"içki",
		"işıq",
		"kart",
		"kino",
		"kükü",
		"küçə",
		"kənd",
		"mavi",
		"meşə",
		"nanə",
		"nard",
		"necə",
		"neçə",
		"niyə",
		"nənə",
		"ocaq",
		"onda",
		"ordu",
		"otaq",
		"oyun",
		"oğul",
		"park",
		"piti",
		"plov",
		"qapı",
		"qara",
		"quyu",
		"quzu",
		"qısa",
		"qənd",
		"rəng",
		"rəqs",
		"saat",
		"sarı",
		"soba",
		"stol",
		"stul",
		"sülh",
		"sərt",
		"turş",
		"təpə",
		"uzun",
		"uşaq",
		"xala",
		"xalq",
		"xətt",
		"yeni",
		"yuxu",
		"çarə",
		"çənə",
		"ölkə",
		"ürək",
		"üzük",
		"üzüm",
		"şair",
		"şeir",
		"şirə",
		"ədəb",
		"ədəd",
		"əgər",
		"əkin",
		"əkiz",
		"ələk",
		"əmir",
		"əməl",
		"ərik",
		"əsir",
		"ətir",
		"ətək"
	],
	5: [
		"abidə",
		"aclıq",
		"allah",
		"almaq",
		"anbar",
		"ancaq",
		"aprel",
		"aptek",
		"armud",
		"artıq",
		"arvad",
		"aslan",
		"atmaq",
		"axşam",
		"ayran",
		"açmaq",
		"aşağı",
		"aşkar",
		"aşpaz",
		"badam",
		"bahar",
		"balıq",
		"banan",
		"bazar",
		"bağça",
		"başqa",
		"beyin",
		"bibər",
		"bilet",
		"bilik",
		"bilək",
		"bitki",
		"boran",
		"boyun",
		"boğaz",
		"budaq",
		"bugün",
		"bulud",
		"burun",
		"buğda",
		"böcək",
		"böyük",
		"bıçaq",
		"bədən",
		"bəlkə",
		"bəzən",
		"cavab",
		"cavan",
		"cihaz",
		"corab",
		"cümlə",
		"daban",
		"dalğa",
		"damar",
		"daraq",
		"demək",
		"divar",
		"dişli",
		"dodaq",
		"dolab",
		"dolma",
		"dovğa",
		"doğru",
		"duman",
		"durna",
		"duzlu",
		"döşək",
		"dükan",
		"dünya",
		"dünən",
		"düymə",
		"düşün",
		"dəmir",
		"dəniz",
		"dərin",
		"dərya",
		"ekran",
		"eynək",
		"fikir",
		"fırça",
		"geniş",
		"gilas",
		"gövdə",
		"gözəl",
		"gümüş",
		"günəş",
		"hakim",
		"hamam",
		"hansı",
		"hesab",
		"heyva",
		"hovuz",
		"həftə",
		"həkim",
		"həmin",
		"həyat",
		"həyət",
		"idman",
		"insan",
		"içmək",
		"kabab",
		"kağız",
		"kirpi",
		"kitab",
		"kiçik",
		"köhnə",
		"körpü",
		"külək",
		"kələm",
		"kəmər",
		"lakin",
		"lampa",
		"lavaş",
		"limon",
		"lövhə",
		"mahnı",
		"manat",
		"maşın",
		"meyvə",
		"moruq",
		"muzey",
		"müdir",
		"nağıl",
		"nöqtə",
		"nəfəs",
		"papaq",
		"payız",
		"pişik",
		"pərdə",
		"qanad",
		"qatar",
		"qatıq",
		"qaçış",
		"qaşıq",
		"qohum",
		"qonşu",
		"qorxu",
		"qoyun",
		"qulaq",
		"qutab",
		"qızıl",
		"qələm",
		"qəpik",
		"qəzet",
		"radio",
		"roman",
		"rəqəm",
		"sahil",
		"sevgi",
		"sinif",
		"siçan",
		"sonra",
		"soyad",
		"soyuq",
		"soğan",
		"səhnə",
		"səhər",
		"sətir",
		"taksi",
		"tarix",
		"tavan",
		"teatr",
		"topuq",
		"toxum",
		"toyuq",
		"turşu",
		"tülkü",
		"təmiz",
		"ulduz",
		"vətən",
		"xalça",
		"xiyar",
		"xurma",
		"xəbər",
		"xəstə",
		"yataq",
		"yaxşı",
		"yağlı",
		"yağış",
		"yemiş",
		"yemək",
		"yumaq",
		"zoğal",
		"çanta",
		"çiyin",
		"çiçək",
		"çörək",
		"çünki",
		"çəkmə",
		"çətin",
		"şaxta",
		"şirin",
		"şorba",
		"şüyüd",
		"şəhər",
		"şəkil",
		"şəkər",
		"əkmək",
		"əlavə",
		"əlcək",
		"əncir",
		"əvvəl"
	],
	6: [
		"aktyor",
		"albalı",
		"ananas",
		"avqust",
		"barmaq",
		"baxmaq",
		"bayquş",
		"bayram",
		"bayraq",
		"baytar",
		"bağban",
		"bilmək",
		"biçmək",
		"boşqab",
		"böyrək",
		"cəfəri",
		"dadmaq",
		"darçın",
		"dekabr",
		"dialoq",
		"diqqət",
		"dovşan",
		"durmaq",
		"döşəmə",
		"dırnaq",
		"dəftər",
		"dəqiqə",
		"dərman",
		"futbol",
		"fındıq",
		"gavalı",
		"getmək",
		"görmək",
		"gözlük",
		"gülmək",
		"gəlmək",
		"gəzmək",
		"hekayə",
		"həmişə",
		"həssas",
		"işıqlı",
		"jurnal",
		"kartof",
		"kiprik",
		"köynək",
		"kəsmək",
		"leysan",
		"mağaza",
		"meydan",
		"milçək",
		"musiqi",
		"möcüzə",
		"məktəb",
		"mətbəx",
		"məğlub",
		"oxumaq",
		"palçıq",
		"pambıq",
		"pendir",
		"qapalı",
		"qardaş",
		"qarpız",
		"qartal",
		"qaçmaq",
		"qiymət",
		"qələbə",
		"reyhan",
		"rəssam",
		"saniyə",
		"saqqal",
		"satıcı",
		"sevinc",
		"sevmək",
		"susmaq",
		"sözlük",
		"sürücü",
		"səhifə",
		"sərhəd",
		"tamaşa",
		"tapmaq",
		"tennis",
		"tutmaq",
		"tələbə",
		"vağzal",
		"vermək",
		"vurmaq",
		"yaddaş",
		"yalnız",
		"yanlış",
		"yarpaq",
		"yatmaq",
		"yazmaq",
		"yazıçı",
		"yumşaq",
		"yuxarı",
		"yüngül",
		"zəngin",
		"çaqqal",
		"çardaq",
		"çaydan",
		"çirkin",
		"çirkli",
		"çıxmaq",
		"çəkmək",
		"çəngəl",
		"ümumən",
		"şagird",
		"şahmat",
		"şalvar",
		"şimşək"
	],
	7: [
		"aktrisa",
		"alışqan",
		"aptekçi",
		"armatur",
		"asılqan",
		"avtobus",
		"azadlıq",
		"ağciyər",
		"ağlamaq",
		"balıqçı",
		"bitərəf",
		"brauzer",
		"böyümək",
		"canavar",
		"cırtdan",
		"cəsarət",
		"dostluq",
		"döyüşçü",
		"düşüncə",
		"dəlilik",
		"dənizçi",
		"dəyirmi",
		"ehtiras",
		"ehtiyac",
		"ehtiyat",
		"endirim",
		"eşitmək",
		"günorta",
		"ildırım",
		"imtahan",
		"istəmək",
		"itirmək",
		"işləmək",
		"kitabça",
		"komanda",
		"konsert",
		"kəpənək",
		"mürəbbə",
		"müəllim",
		"mərtəbə",
		"oturmaq",
		"oxşamaq",
		"oynamaq",
		"paytaxt",
		"pomidor",
		"pəncərə",
		"qalstuk",
		"qalxmaq",
		"qurbağa",
		"stadion",
		"telefon",
		"tısbağa",
		"təyyarə",
		"uduzmaq",
		"yumurta",
		"çarpayı",
		"çiyələk",
		"çörəkçi",
		"çəhrayı",
		"çərçivə",
		"şaftalı",
		"əmioğlu"
	]
};
var SOZ_GUESS = {
	4: [
		"abad",
		"abid",
		"abır",
		"acar",
		"aciz",
		"acıq",
		"adam",
		"adan",
		"adaq",
		"adas",
		"adax",
		"adaş",
		"adda",
		"adil",
		"adla",
		"adlı",
		"adım",
		"adın",
		"adəm",
		"adət",
		"afət",
		"agah",
		"ailə",
		"aktı",
		"alam",
		"alan",
		"alaq",
		"alar",
		"alda",
		"aldı",
		"alib",
		"alim",
		"alma",
		"altı",
		"alıb",
		"alın",
		"alır",
		"aləm",
		"alət",
		"amal",
		"aman",
		"amil",
		"amin",
		"amma",
		"anam",
		"anda",
		"andı",
		"anma",
		"anın",
		"apar",
		"aran",
		"araq",
		"aras",
		"araz",
		"ardı",
		"arpa",
		"arta",
		"arxa",
		"arzu",
		"asan",
		"asar",
		"asta",
		"asın",
		"asır",
		"atam",
		"atan",
		"atdı",
		"atlı",
		"atma",
		"atom",
		"atsa",
		"atıb",
		"atın",
		"atır",
		"atəş",
		"avam",
		"avaz",
		"avro",
		"axan",
		"axıb",
		"axır",
		"ayaq",
		"ayaz",
		"ayda",
		"ayrı",
		"ayıb",
		"ayın",
		"ayıq",
		"azad",
		"azan",
		"açan",
		"açar",
		"açdı",
		"açma",
		"açıb",
		"açıq",
		"açır",
		"ağac",
		"ağla",
		"ağlı",
		"ağrı",
		"ağuş",
		"ağzı",
		"ağıl",
		"ağır",
		"ağız",
		"aşiq",
		"aşıq",
		"aşır",
		"baba",
		"bacı",
		"baha",
		"bakı",
		"bala",
		"balı",
		"bank",
		"barı",
		"batı",
		"baxa",
		"baza",
		"bağa",
		"başa",
		"başı",
		"beli",
		"belə",
		"beyt",
		"bibi",
		"bilə",
		"bina",
		"binə",
		"biri",
		"birə",
		"bizi",
		"bizə",
		"blok",
		"borc",
		"boru",
		"boya",
		"boyu",
		"boşa",
		"budu",
		"buna",
		"bunu",
		"bura",
		"bürc",
		"bəhs",
		"bəla",
		"bəli",
		"bənd",
		"bəni",
		"bəri",
		"bərk",
		"bəxş",
		"bəyi",
		"bəyə",
		"bəzi",
		"cadu",
		"cadı",
		"cana",
		"cani",
		"canı",
		"cari",
		"cibi",
		"cild",
		"cins",
		"cümə",
		"cürə",
		"cüzi",
		"cəhd",
		"cəlb",
		"cəld",
		"cəmi",
		"cəza",
		"daha",
		"dahi",
		"daim",
		"dair",
		"dakı",
		"dala",
		"dalı",
		"dama",
		"damı",
		"dana",
		"dava",
		"dayı",
		"daşa",
		"daşı",
		"dedi",
		"demə",
		"desə",
		"deyə",
		"dibi",
		"dili",
		"dilə",
		"dinc",
		"dini",
		"dinə",
		"diri",
		"disk",
		"diyə",
		"dişi",
		"dolu",
		"dost",
		"dram",
		"duet",
		"dura",
		"duya",
		"dörd",
		"dövr",
		"dözə",
		"düyü",
		"düzü",
		"düşə",
		"dəfn",
		"dəfə",
		"dəki",
		"dəli",
		"dənə",
		"dərc",
		"dərd",
		"dəri",
		"dərk",
		"dərs",
		"dərə",
		"dəvə",
		"edam",
		"edib",
		"edim",
		"edin",
		"edir",
		"edək",
		"edəm",
		"edən",
		"edər",
		"efir",
		"elan",
		"elmi",
		"elmə",
		"emal",
		"emin",
		"enib",
		"eniş",
		"enmə",
		"enən",
		"etdi",
		"etik",
		"etmə",
		"etsə",
		"evdə",
		"evin",
		"eylə",
		"eyni",
		"faiz",
		"faks",
		"fakt",
		"fani",
		"fars",
		"fayl",
		"feli",
		"film",
		"fond",
		"fəal",
		"fəda",
		"fənn",
		"fərd",
		"fərq",
		"fərz",
		"fəth",
		"fəxr",
		"gecə",
		"gedə",
		"geri",
		"girə",
		"guya",
		"görə",
		"göyü",
		"göyə",
		"gözü",
		"gözə",
		"gücü",
		"gücə",
		"günü",
		"günə",
		"gələ",
		"gəmi",
		"gənc",
		"hacı",
		"hadi",
		"hala",
		"halı",
		"hamı",
		"hanı",
		"haqq",
		"hara",
		"hava",
		"heçə",
		"himn",
		"hind",
		"hiss",
		"hökm",
		"həbs",
		"hədd",
		"hədə",
		"həkk",
		"həll",
		"hələ",
		"həmd",
		"hərb",
		"hərf",
		"hərə",
		"həsr",
		"həzm",
		"həzz",
		"icad",
		"icma",
		"icra",
		"idik",
		"idim",
		"idin",
		"ifşa",
		"igid",
		"ikən",
		"ilah",
		"ilan",
		"ildi",
		"ildə",
		"ilin",
		"ilki",
		"illə",
		"imam",
		"iman",
		"imiş",
		"imza",
		"inad",
		"inam",
		"inan",
		"inci",
		"incə",
		"indi",
		"ində",
		"inin",
		"inşa",
		"inək",
		"ipək",
		"irad",
		"iran",
		"iraq",
		"irin",
		"irqi",
		"irsi",
		"isim",
		"ismi",
		"isti",
		"istə",
		"itib",
		"itir",
		"itki",
		"itən",
		"iyev",
		"iynə",
		"iyul",
		"iyun",
		"izah",
		"izin",
		"izni",
		"içib",
		"içir",
		"içki",
		"içən",
		"işdə",
		"işim",
		"işin",
		"işlə",
		"işçi",
		"işıq",
		"janr",
		"kadr",
		"kart",
		"keçi",
		"keçə",
		"kimi",
		"kimə",
		"kino",
		"kipr",
		"kisə",
		"kişi",
		"klip",
		"klub",
		"kodu",
		"kral",
		"kurs",
		"kökü",
		"kökə",
		"küfr",
		"kükü",
		"kürd",
		"kürü",
		"kürə",
		"küçə",
		"kənd",
		"kərə",
		"kəsb",
		"kəsi",
		"kəsə",
		"kəşf",
		"ladı",
		"lalə",
		"lara",
		"ları",
		"litr",
		"llər",
		"lütf",
		"ləkə",
		"ləli",
		"lələ",
		"ləng",
		"ləri",
		"lərə",
		"ləğv",
		"maaş",
		"malı",
		"mane",
		"mart",
		"masa",
		"mavi",
		"maya",
		"maye",
		"mayı",
		"meri",
		"metr",
		"meyl",
		"meşə",
		"mina",
		"mini",
		"minə",
		"məhv",
		"məhz",
		"məna",
		"məni",
		"mənə",
		"mərd",
		"məsh",
		"məst",
		"mətn",
		"məşq",
		"nail",
		"nanə",
		"nard",
		"nası",
		"nazı",
		"nağd",
		"naşı",
		"necə",
		"neft",
		"neçə",
		"nida",
		"nitq",
		"niyə",
		"nura",
		"nuru",
		"növü",
		"nüvə",
		"nədi",
		"nədə",
		"nənə",
		"nəql",
		"nəsr",
		"nəsə",
		"nəvi",
		"nəyi",
		"nəyə",
		"nəşr",
		"ocaq",
		"odlu",
		"odun",
		"odur",
		"ofis",
		"olam",
		"olan",
		"olaq",
		"olar",
		"olay",
		"oldu",
		"olma",
		"olsa",
		"olub",
		"olun",
		"olur",
		"onda",
		"onun",
		"orda",
		"ordu",
		"orta",
		"oruc",
		"otaq",
		"otuz",
		"ovun",
		"oyun",
		"oğlu",
		"oğru",
		"oğul",
		"oğuz",
		"para",
		"park",
		"payı",
		"paşa",
		"peyk",
		"peşə",
		"pisi",
		"piti",
		"plan",
		"plov",
		"poçt",
		"pula",
		"pulu",
		"qaba",
		"qabı",
		"qala",
		"qana",
		"qane",
		"qanı",
		"qapı",
		"qara",
		"qars",
		"qatı",
		"qaya",
		"qaza",
		"qazı",
		"qeyb",
		"qeyd",
		"qida",
		"qoca",
		"qola",
		"qolu",
		"qoya",
		"qoşa",
		"qraf",
		"qram",
		"qrup",
		"quba",
		"qulu",
		"qura",
		"qurd",
		"quru",
		"qutu",
		"quyu",
		"quzu",
		"quşu",
		"qövm",
		"qırx",
		"qısa",
		"qıza",
		"qızı",
		"qəbr",
		"qəbz",
		"qəlb",
		"qənd",
		"qərb",
		"qərq",
		"qəsb",
		"qəsd",
		"qəti",
		"qətl",
		"qəza",
		"rast",
		"razı",
		"real",
		"risk",
		"rola",
		"rolu",
		"roma",
		"rubl",
		"ruha",
		"ruhi",
		"ruhu",
		"ruzi",
		"rədd",
		"rəhm",
		"rəis",
		"rəng",
		"rəqs",
		"rəsm",
		"rəva",
		"rəyi",
		"rəyə",
		"saat",
		"sadə",
		"sahə",
		"sair",
		"sala",
		"sami",
		"sarı",
		"sası",
		"saya",
		"sayt",
		"sayı",
		"sağa",
		"seks",
		"seyr",
		"seçə",
		"sinə",
		"siri",
		"sirr",
		"sizi",
		"sizə",
		"siğə",
		"soba",
		"solo",
		"sona",
		"sonu",
		"stol",
		"stul",
		"sual",
		"suda",
		"sulu",
		"surə",
		"suya",
		"suyu",
		"sövq",
		"sözü",
		"sözə",
		"sübh",
		"südü",
		"sülh",
		"süni",
		"sürü",
		"sürə",
		"sına",
		"sıra",
		"sırf",
		"səbr",
		"sədd",
		"sədr",
		"səhm",
		"səhv",
		"səni",
		"sənə",
		"sərf",
		"sərt",
		"səsi",
		"səsə",
		"tabe",
		"tabu",
		"tale",
		"tamı",
		"tapa",
		"taya",
		"tayı",
		"test",
		"tibb",
		"tikə",
		"tipi",
		"tona",
		"tonu",
		"topu",
		"toru",
		"toya",
		"tura",
		"turu",
		"turş",
		"tusi",
		"tuta",
		"tünd",
		"türk",
		"təki",
		"tənə",
		"təpə",
		"tərk",
		"tərs",
		"təzə",
		"ucuz",
		"udur",
		"usta",
		"uyan",
		"uyub",
		"uzaq",
		"uzun",
		"uçan",
		"uçub",
		"uçuş",
		"uğur",
		"uşaq",
		"vara",
		"vard",
		"vaxt",
		"vdən",
		"verə",
		"vida",
		"viza",
		"vura",
		"vədə",
		"vəfa",
		"vəhy",
		"vəla",
		"vəzi",
		"xain",
		"xala",
		"xalq",
		"xalı",
		"xana",
		"xanı",
		"xaos",
		"xeyr",
		"xoşa",
		"xəlq",
		"xərc",
		"xətt",
		"yada",
		"yana",
		"yand",
		"yanı",
		"yara",
		"yard",
		"yarı",
		"yata",
		"yaxa",
		"yayı",
		"yaza",
		"yazı",
		"yağı",
		"yaşa",
		"yaşı",
		"yeni",
		"yenə",
		"yeri",
		"yerə",
		"yola",
		"yolu",
		"yoxa",
		"yurd",
		"yuxu",
		"yükü",
		"yımı",
		"yığa",
		"yəni",
		"zala",
		"zalı",
		"zidd",
		"zikr",
		"zina",
		"zona",
		"zövq",
		"zülm",
		"zəbt",
		"zəif",
		"zəng",
		"zənn",
		"zərb",
		"zərf",
		"çala",
		"çapa",
		"çapı",
		"çarı",
		"çarə",
		"çata",
		"çaya",
		"çayı",
		"çağı",
		"çinə",
		"çoxu",
		"çölə",
		"çıxa",
		"çəki",
		"çəkə",
		"çənə",
		"öldü",
		"ölkə",
		"ölçü",
		"ölüb",
		"ölüm",
		"ölür",
		"ölən",
		"ömrü",
		"ömür",
		"öncə",
		"öndə",
		"önəm",
		"ötrü",
		"ötüb",
		"ötür",
		"ötən",
		"öyük",
		"özgə",
		"özüm",
		"özün",
		"özəl",
		"ümid",
		"ürək",
		"üstü",
		"üstə",
		"üsul",
		"üzdə",
		"üzrə",
		"üzvü",
		"üzüb",
		"üzük",
		"üzüm",
		"üzün",
		"üzən",
		"üçdə",
		"üçün",
		"şahı",
		"şair",
		"şans",
		"şeir",
		"şeri",
		"şeyi",
		"şeyə",
		"şirk",
		"şirə",
		"ştat",
		"şura",
		"şuşa",
		"şöbə",
		"şüur",
		"şüşə",
		"şəfa",
		"şəki",
		"şəkk",
		"şərh",
		"şəri",
		"şərq",
		"şərt",
		"şəxs",
		"əbəs",
		"əcəb",
		"ədat",
		"ədib",
		"ədəb",
		"ədəd",
		"əfin",
		"əgər",
		"əhli",
		"əkin",
		"əkiz",
		"əksi",
		"əlac",
		"əldə",
		"əlil",
		"əlim",
		"əlin",
		"əlli",
		"əllə",
		"ələk",
		"ələr",
		"əmid",
		"əmim",
		"əmin",
		"əmir",
		"əmri",
		"əmək",
		"əməl",
		"ənin",
		"əqli",
		"ərik",
		"ərin",
		"ərlə",
		"ərəb",
		"əsas",
		"əsil",
		"əsir",
		"əski",
		"əsla",
		"əsli",
		"əsrə",
		"əsəb",
		"əsən",
		"əsər",
		"ətin",
		"ətir",
		"ətli",
		"ətək",
		"əvəz",
		"əyri",
		"əzab",
		"əziz",
		"əzən",
		"əşya"
	],
	5: [
		"abalı",
		"abbas",
		"abbat",
		"abdal",
		"abidə",
		"abort",
		"abunə",
		"abxaz",
		"abzas",
		"acgöz",
		"aclıq",
		"acıca",
		"acılı",
		"adalı",
		"adama",
		"adamı",
		"adanı",
		"adası",
		"addan",
		"addım",
		"addır",
		"adicə",
		"adlar",
		"adlıq",
		"adsız",
		"adımı",
		"adına",
		"adını",
		"adəni",
		"adəti",
		"afina",
		"afişa",
		"aftab",
		"afəti",
		"agent",
		"aktiv",
		"alban",
		"albom",
		"aldım",
		"aldıq",
		"alimi",
		"allah",
		"alman",
		"almaq",
		"almaz",
		"almır",
		"almış",
		"alqış",
		"alsaq",
		"alsın",
		"altay",
		"alver",
		"alçaq",
		"alıcı",
		"alışı",
		"aləmi",
		"aləmə",
		"aləti",
		"amala",
		"amalı",
		"amili",
		"amilə",
		"aməyə",
		"anama",
		"anamı",
		"ananı",
		"anası",
		"anbar",
		"ancaq",
		"andan",
		"andlı",
		"andın",
		"anlam",
		"anlay",
		"anlıq",
		"anmaq",
		"anını",
		"apara",
		"aprel",
		"aptek",
		"arada",
		"aralı",
		"aranı",
		"arası",
		"araya",
		"arağı",
		"armud",
		"artan",
		"artar",
		"artıb",
		"artım",
		"artıq",
		"artır",
		"arvad",
		"arzum",
		"arşın",
		"asiya",
		"aslan",
		"asmaq",
		"astar",
		"asılı",
		"atama",
		"atamı",
		"atana",
		"atası",
		"atdan",
		"atdım",
		"atlar",
		"atmaq",
		"atmır",
		"atmış",
		"atəşi",
		"atəşə",
		"avara",
		"axmaq",
		"axtar",
		"axını",
		"axıra",
		"axırı",
		"axşam",
		"ayağa",
		"ayağı",
		"aydan",
		"aydın",
		"aydır",
		"ayinə",
		"aylar",
		"aylıq",
		"aynur",
		"ayran",
		"ayına",
		"ayını",
		"ayıra",
		"ayırd",
		"ayədə",
		"ayəni",
		"azdan",
		"azdır",
		"azlıq",
		"azmış",
		"azəri",
		"açarı",
		"açmaq",
		"açmış",
		"açığı",
		"ağaca",
		"ağacı",
		"ağası",
		"ağbaş",
		"ağdam",
		"ağdaş",
		"ağgün",
		"ağlar",
		"ağlıq",
		"ağnaq",
		"ağsaç",
		"ağyal",
		"ağıla",
		"ağılı",
		"ağşam",
		"aşağı",
		"aşkar",
		"aşpaz",
		"babın",
		"badam",
		"bahar",
		"bahəm",
		"balam",
		"balet",
		"balla",
		"balta",
		"balıq",
		"banan",
		"banka",
		"bankı",
		"bariz",
		"barış",
		"basıb",
		"basın",
		"batan",
		"batır",
		"baxan",
		"baxaq",
		"baxdı",
		"baxıb",
		"baxım",
		"baxın",
		"baxır",
		"baxış",
		"bayat",
		"bayıl",
		"bayır",
		"bazar",
		"bağli",
		"bağlı",
		"bağrı",
		"bağça",
		"başda",
		"başla",
		"başqa",
		"başçı",
		"başım",
		"başın",
		"beton",
		"beyin",
		"beyni",
		"beşik",
		"bibər",
		"bidət",
		"bildi",
		"bildə",
		"bilet",
		"bilgi",
		"bilib",
		"bilik",
		"bilim",
		"bilin",
		"bilir",
		"bilsə",
		"bilək",
		"bilən",
		"bilər",
		"bircə",
		"birgə",
		"birər",
		"bitib",
		"bitir",
		"bitki",
		"bitən",
		"bizdə",
		"bizik",
		"bizim",
		"bloka",
		"bloku",
		"bomba",
		"boran",
		"borcu",
		"boyda",
		"boyun",
		"boğaz",
		"budaq",
		"budda",
		"budur",
		"bugün",
		"bulaq",
		"bulud",
		"bunda",
		"bunun",
		"burda",
		"burun",
		"buğda",
		"böcək",
		"bölgü",
		"bölgə",
		"bölmə",
		"böyük",
		"büdcə",
		"bütöv",
		"bütün",
		"bıçaq",
		"bədii",
		"bədən",
		"bəlkə",
		"bəlli",
		"bələd",
		"bəndi",
		"bəndə",
		"bənin",
		"bərdə",
		"bərov",
		"bərpa",
		"bəsit",
		"bəxti",
		"bəyan",
		"bəyin",
		"bəylə",
		"bəzən",
		"bəşər",
		"canlı",
		"canım",
		"canın",
		"cavab",
		"cavan",
		"ciddi",
		"cihad",
		"cihaz",
		"cinsi",
		"cizgi",
		"corab",
		"cümlə",
		"cürət",
		"cəbhə",
		"cəfər",
		"cəhdi",
		"cəhət",
		"cəllə",
		"cənab",
		"cənub",
		"cəsur",
		"daban",
		"dadlı",
		"daima",
		"daimi",
		"dairə",
		"daldı",
		"dalğa",
		"dalır",
		"damar",
		"damla",
		"danış",
		"daraq",
		"davam",
		"daxal",
		"daxil",
		"daxma",
		"dayaq",
		"dağın",
		"daşqa",
		"daşın",
		"dedik",
		"dedim",
		"demir",
		"demiş",
		"demək",
		"desin",
		"desək",
		"desəm",
		"deyib",
		"deyil",
		"deyim",
		"deyin",
		"deyir",
		"deyək",
		"deyən",
		"deyər",
		"digər",
		"dildə",
		"dilim",
		"dilin",
		"dilli",
		"dillə",
		"dilər",
		"dində",
		"dinin",
		"dinlə",
		"diqtə",
		"dirək",
		"divan",
		"divar",
		"diyev",
		"dizel",
		"dişli",
		"dodaq",
		"dolab",
		"dolma",
		"dolub",
		"donor",
		"donos",
		"dostu",
		"dovğa",
		"doğan",
		"doğlu",
		"doğma",
		"doğru",
		"doğum",
		"doğur",
		"duası",
		"duman",
		"duran",
		"durar",
		"durdu",
		"durna",
		"durub",
		"durun",
		"durur",
		"durğu",
		"duyan",
		"duydu",
		"duyub",
		"duyum",
		"duyur",
		"duyğu",
		"duzlu",
		"dönüb",
		"dönür",
		"dönüş",
		"dönən",
		"dövrü",
		"dövrə",
		"döyüb",
		"döyür",
		"döyüş",
		"döyən",
		"dözüm",
		"döşək",
		"dükan",
		"dünya",
		"dünən",
		"dürlü",
		"düymə",
		"düzdü",
		"düçar",
		"düşdü",
		"düşmə",
		"düşüb",
		"düşün",
		"düşür",
		"düşən",
		"düşər",
		"dəbdə",
		"dəlil",
		"dəmir",
		"dənin",
		"dəniz",
		"dəqiq",
		"dərdi",
		"dərin",
		"dərki",
		"dərsi",
		"dərya",
		"dəsti",
		"dəstə",
		"dəvət",
		"dəxli",
		"dəydi",
		"dəyib",
		"dəyir",
		"dəyən",
		"dəyər",
		"edilə",
		"edəni",
		"edənə",
		"efirə",
		"ehsan",
		"ekran",
		"eliyə",
		"elmdə",
		"elmin",
		"eləcə",
		"elədi",
		"eləmi",
		"eləmə",
		"eləsi",
		"eləyə",
		"emalı",
		"erkək",
		"erkən",
		"etdik",
		"etdim",
		"etdin",
		"etika",
		"etmir",
		"etmiş",
		"etmək",
		"etməz",
		"etnik",
		"etsin",
		"etsək",
		"evdən",
		"evini",
		"evinə",
		"evlər",
		"eynək",
		"eynən",
		"eşidə",
		"faciə",
		"faizi",
		"faizə",
		"fakta",
		"faktı",
		"fayda",
		"faylı",
		"fikir",
		"fikri",
		"fikrə",
		"filan",
		"filmi",
		"filmə",
		"final",
		"firma",
		"fitri",
		"fizik",
		"fonda",
		"fondu",
		"forma",
		"forum",
		"fırça",
		"fəalı",
		"fəhlə",
		"fənni",
		"fərdi",
		"fərdə",
		"fərqi",
		"fərəc",
		"fəsil",
		"fəsli",
		"fəxri",
		"gedib",
		"gedim",
		"gedin",
		"gedir",
		"gediş",
		"gedək",
		"gedən",
		"gedər",
		"geniş",
		"getdi",
		"getmə",
		"getsə",
		"geyim",
		"geyən",
		"gilas",
		"girdi",
		"girib",
		"girir",
		"giriş",
		"girov",
		"girən",
		"gizli",
		"gördü",
		"görmə",
		"görsə",
		"görüb",
		"görüm",
		"görün",
		"görür",
		"görüş",
		"görək",
		"görəm",
		"görən",
		"görər",
		"götür",
		"gövdə",
		"göydə",
		"göyün",
		"gözlə",
		"gözüm",
		"gözün",
		"gözəl",
		"güclü",
		"güclə",
		"gücüm",
		"gücün",
		"güdür",
		"güllə",
		"gülür",
		"güman",
		"gümüş",
		"günah",
		"gündə",
		"günki",
		"günkü",
		"günlə",
		"günün",
		"günəş",
		"gürcü",
		"güzgü",
		"gəldi",
		"gəlib",
		"gəlim",
		"gəlin",
		"gəlir",
		"gəlmə",
		"gəlsə",
		"gələk",
		"gələn",
		"gələr",
		"gənci",
		"gəncə",
		"gərin",
		"gərov",
		"gərək",
		"gəzib",
		"gəzir",
		"gəzən",
		"hakim",
		"halal",
		"halay",
		"halda",
		"haldı",
		"halla",
		"halın",
		"hamam",
		"haman",
		"hamar",
		"hansı",
		"haqda",
		"haqla",
		"haqlı",
		"haqqa",
		"haqqı",
		"haram",
		"harda",
		"hasil",
		"hazır",
		"hesab",
		"heyva",
		"heyət",
		"hicri",
		"hindu",
		"hissi",
		"hissə",
		"hiylə",
		"hovuz",
		"hökmü",
		"hücum",
		"hüquq",
		"həbsə",
		"həccə",
		"həcmi",
		"həddi",
		"həddə",
		"hədis",
		"hədəf",
		"hədər",
		"həftə",
		"həkim",
		"həlak",
		"həlli",
		"həllə",
		"həmdə",
		"həmin",
		"həmlə",
		"həmən",
		"hərbi",
		"hərbə",
		"həsəd",
		"hətta",
		"həvəs",
		"həyat",
		"həyət",
		"həzin",
		"ibrət",
		"icarə",
		"icazə",
		"iclas",
		"idarə",
		"iddia",
		"ideal",
		"ideya",
		"idimi",
		"idisə",
		"idman",
		"idxal",
		"ifadə",
		"ifası",
		"ifaçı",
		"iflic",
		"ifrat",
		"ikili",
		"ikisi",
		"ikiyə",
		"ikrah",
		"ilahi",
		"ilanı",
		"ildir",
		"ildən",
		"ilham",
		"ilhaq",
		"ilini",
		"ilinə",
		"ilkin",
		"illah",
		"illik",
		"illər",
		"iləsə",
		"imamı",
		"imana",
		"imanı",
		"imkan",
		"inamı",
		"inana",
		"inanc",
		"incik",
		"incil",
		"indən",
		"inkar",
		"insan",
		"intim",
		"iqlim",
		"iradı",
		"iradə",
		"irana",
		"iranı",
		"iraqa",
		"iraqı",
		"irsin",
		"irəli",
		"isanı",
		"isaya",
		"isbat",
		"islah",
		"islam",
		"ismin",
		"isnad",
		"ispan",
		"israf",
		"israr",
		"istan",
		"istək",
		"istər",
		"isveç",
		"itaət",
		"itirə",
		"itkin",
		"ixrac",
		"iyyət",
		"izahı",
		"izini",
		"izinə",
		"izlər",
		"izzət",
		"içini",
		"içinə",
		"içmək",
		"içəri",
		"işarə",
		"işdir",
		"işdən",
		"işini",
		"işinə",
		"işlək",
		"işlər",
		"işsiz",
		"işğal",
		"işığı",
		"janra",
		"janrı",
		"kabab",
		"kabel",
		"kafir",
		"kahin",
		"kaman",
		"kamil",
		"kanal",
		"kartı",
		"kasıb",
		"katib",
		"kağız",
		"keçdi",
		"keçib",
		"keçid",
		"keçin",
		"keçir",
		"keçmə",
		"keçsə",
		"keçək",
		"keçən",
		"keçər",
		"kilsə",
		"kimin",
		"kimlə",
		"kimsə",
		"kimya",
		"kipri",
		"kiprə",
		"kirpi",
		"kitab",
		"kiçik",
		"klipi",
		"kluba",
		"klubu",
		"kobud",
		"kralı",
		"kursu",
		"köhnə",
		"köklü",
		"kölgə",
		"kömür",
		"kömək",
		"könül",
		"körpü",
		"körpə",
		"köçdü",
		"köçüb",
		"köçür",
		"küfrə",
		"külli",
		"külək",
		"küncə",
		"kürsü",
		"kürün",
		"kütlə",
		"kəbin",
		"kədər",
		"kəlmə",
		"kələk",
		"kələm",
		"kəmər",
		"kənar",
		"kəndi",
		"kəndə",
		"kəsdi",
		"kəsdə",
		"kəsib",
		"kəsin",
		"kəsir",
		"kəsən",
		"lakin",
		"lampa",
		"larda",
		"ların",
		"latın",
		"lavaş",
		"layiq",
		"lazim",
		"lazım",
		"laçın",
		"lenin",
		"lentə",
		"lerik",
		"lider",
		"liman",
		"limon",
		"lirik",
		"lisli",
		"litva",
		"liyev",
		"lövhə",
		"lüzum",
		"lüğət",
		"lənət",
		"lərdə",
		"lərin",
		"ləğvi",
		"maaşı",
		"madam",
		"maddi",
		"maddə",
		"mahir",
		"mahnı",
		"malik",
		"malın",
		"manat",
		"maneə",
		"maraq",
		"marka",
		"marşı",
		"matay",
		"matəm",
		"mayda",
		"mayın",
		"maşın",
		"medal",
		"media",
		"mehdi",
		"metal",
		"metod",
		"metro",
		"meyar",
		"meydə",
		"meyli",
		"meyvə",
		"milis",
		"milli",
		"minat",
		"mindi",
		"minib",
		"minik",
		"minir",
		"miras",
		"misal",
		"misir",
		"misli",
		"mobil",
		"model",
		"molla",
		"moruq",
		"motiv",
		"murad",
		"muzey",
		"muğam",
		"muğan",
		"mömin",
		"mövqe",
		"mövzu",
		"müdir",
		"mühit",
		"mühüm",
		"müjdə",
		"mülki",
		"məbəd",
		"mədət",
		"məgər",
		"məhvə",
		"məhəl",
		"məkan",
		"məkkə",
		"məlum",
		"mələk",
		"məmur",
		"mənbə",
		"məncə",
		"məndə",
		"mənfi",
		"mənim",
		"mənsə",
		"mənəm",
		"mənən",
		"məqam",
		"məruz",
		"məsul",
		"məsəl",
		"mətbu",
		"mətin",
		"mətni",
		"məxfi",
		"məyus",
		"məzar",
		"nadan",
		"nadir",
		"nahaq",
		"nahar",
		"namaz",
		"namiq",
		"namus",
		"natiq",
		"nazik",
		"nazir",
		"nağıl",
		"nefti",
		"neftə",
		"nemət",
		"nepal",
		"nicat",
		"nifaq",
		"nigar",
		"nikah",
		"nisbi",
		"nitqi",
		"nişan",
		"nobel",
		"norma",
		"nömrə",
		"nöqtə",
		"növbə",
		"nüfuz",
		"nüsxə",
		"nəcib",
		"nədir",
		"nədən",
		"nəfsi",
		"nəfər",
		"nəfəs",
		"nələr",
		"nənəm",
		"nəqli",
		"nəsib",
		"nəsil",
		"nəsir",
		"nəsli",
		"nəslə",
		"nəsnə",
		"nəyin",
		"nəzir",
		"nəzər",
		"nəşri",
		"obraz",
		"ocağı",
		"oddan",
		"oduna",
		"ofisi",
		"olana",
		"olanı",
		"olası",
		"olaya",
		"olayı",
		"oldum",
		"olduq",
		"olmad",
		"olmal",
		"olmaq",
		"olmas",
		"olmaz",
		"olmur",
		"olmuş",
		"olsam",
		"olsan",
		"olsaq",
		"olsun",
		"oluna",
		"ondan",
		"onlar",
		"onsuz",
		"opera",
		"orada",
		"oranı",
		"oraya",
		"ordan",
		"orden",
		"orqan",
		"ortaq",
		"otağa",
		"otağı",
		"otura",
		"oxucu",
		"oxudu",
		"oxuma",
		"oxuya",
		"oxşar",
		"oyuna",
		"oyunu",
		"oğlan",
		"oğlum",
		"oğlun",
		"paket",
		"papaq",
		"parla",
		"parta",
		"parti",
		"parça",
		"payız",
		"peyda",
		"piano",
		"piket",
		"pillə",
		"pilot",
		"pişik",
		"plana",
		"planı",
		"polis",
		"polşa",
		"pozan",
		"pozur",
		"psixi",
		"pulla",
		"pullu",
		"pulum",
		"pulun",
		"pənah",
		"pərdə",
		"qabaq",
		"qabil",
		"qadir",
		"qadın",
		"qalam",
		"qalan",
		"qalar",
		"qaldı",
		"qalib",
		"qalma",
		"qalsa",
		"qalxa",
		"qalıb",
		"qalın",
		"qalır",
		"qamış",
		"qanad",
		"qanda",
		"qanla",
		"qanlı",
		"qanun",
		"qanın",
		"qarlı",
		"qarın",
		"qarış",
		"qarşı",
		"qarət",
		"qatar",
		"qatda",
		"qatil",
		"qatıq",
		"qatır",
		"qayda",
		"qayğı",
		"qazan",
		"qazax",
		"qazla",
		"qazma",
		"qazın",
		"qaçan",
		"qaçaq",
		"qaçıb",
		"qaçır",
		"qaçış",
		"qaşıq",
		"qeydə",
		"qeyri",
		"qibtə",
		"qisas",
		"qisim",
		"qismi",
		"qiyam",
		"qohum",
		"qolay",
		"qolla",
		"qonaq",
		"qonşu",
		"qorxu",
		"qoyan",
		"qoydu",
		"qoyub",
		"qoyun",
		"qoyur",
		"qoşun",
		"qrant",
		"qrupa",
		"qrupu",
		"qulaq",
		"qulun",
		"quran",
		"quraq",
		"qurdu",
		"qurub",
		"qurum",
		"qurğu",
		"qutab",
		"quşun",
		"qürur",
		"qüvvə",
		"qınaq",
		"qırıb",
		"qızıl",
		"qızım",
		"qızın",
		"qışda",
		"qəbil",
		"qəbir",
		"qəbri",
		"qəbul",
		"qədim",
		"qədəm",
		"qədər",
		"qəfil",
		"qəlbi",
		"qəlib",
		"qələm",
		"qəmli",
		"qəpik",
		"qərar",
		"qərbə",
		"qətli",
		"qətlə",
		"qəzet",
		"qəzzə",
		"qəzəb",
		"radio",
		"rahat",
		"raket",
		"rasim",
		"rayon",
		"rejim",
		"rimli",
		"robot",
		"rolda",
		"rolum",
		"rolun",
		"roman",
		"ruhda",
		"ruhlu",
		"ruhun",
		"rükət",
		"rüsum",
		"rəbbi",
		"rəisi",
		"rəkət",
		"rəmzi",
		"rəngi",
		"rəqib",
		"rəqsi",
		"rəqəm",
		"rəsmi",
		"rəvac",
		"rəydə",
		"rəyin",
		"rəzil",
		"rəşid",
		"saata",
		"saatı",
		"sabah",
		"sabiq",
		"sabit",
		"sabun",
		"sadiq",
		"sahib",
		"sahil",
		"sairə",
		"sakin",
		"sakit",
		"salam",
		"salan",
		"salaq",
		"saldı",
		"saleh",
		"salıb",
		"salın",
		"salır",
		"saman",
		"sanki",
		"saray",
		"satan",
		"satıb",
		"satın",
		"satış",
		"savab",
		"savad",
		"savaş",
		"saxla",
		"saxta",
		"sayan",
		"sayaq",
		"sayca",
		"sayda",
		"saydı",
		"saylı",
		"sayta",
		"saytı",
		"sayğı",
		"sayıb",
		"sayır",
		"saziş",
		"sevda",
		"sevgi",
		"sevir",
		"sevən",
		"seyid",
		"seçdi",
		"seçib",
		"seçim",
		"seçin",
		"seçir",
		"seçki",
		"seçmə",
		"seçən",
		"sibir",
		"sifət",
		"silah",
		"sillə",
		"simli",
		"sinfi",
		"sinif",
		"sirab",
		"sirli",
		"sirri",
		"sitat",
		"sivil",
		"sizdə",
		"sizin",
		"siçan",
		"sonda",
		"sonet",
		"sonra",
		"soraq",
		"sorğu",
		"sovet",
		"soyad",
		"soyuq",
		"soğan",
		"suala",
		"sualı",
		"sudan",
		"sular",
		"surət",
		"susur",
		"susuz",
		"suyun",
		"söylə",
		"söyüb",
		"söyüş",
		"sözdə",
		"sözlə",
		"sözüm",
		"sözün",
		"sübut",
		"süjet",
		"sükut",
		"sülhü",
		"sülhə",
		"sürdü",
		"sürüb",
		"sürür",
		"sürən",
		"sürət",
		"sütun",
		"sınaq",
		"sınıb",
		"səbir",
		"səbri",
		"səbəb",
		"səbət",
		"səcdə",
		"sədri",
		"sədəf",
		"səfir",
		"səfər",
		"səhih",
		"səhnə",
		"səhra",
		"səhvi",
		"səhvə",
		"səhər",
		"səlis",
		"səlli",
		"səndə",
		"sənin",
		"sənəd",
		"sənət",
		"sərgi",
		"sərin",
		"səsim",
		"səsin",
		"səsli",
		"səslə",
		"səthi",
		"sətir",
		"sətri",
		"səylə",
		"tacir",
		"taksi",
		"talan",
		"tamah",
		"tamam",
		"tanrı",
		"tanış",
		"tapan",
		"tapar",
		"tapdı",
		"tapıb",
		"tapır",
		"tarif",
		"tarix",
		"tavan",
		"taxta",
		"taxıl",
		"tayda",
		"tayfa",
		"taylı",
		"teatr",
		"telli",
		"tempi",
		"tezis",
		"tibbi",
		"tikib",
		"tikiş",
		"tipli",
		"tiqad",
		"topuq",
		"toxum",
		"toyuq",
		"trend",
		"turan",
		"turda",
		"turşu",
		"tutan",
		"tutaq",
		"tutdu",
		"tutub",
		"tutun",
		"tutur",
		"tökdü",
		"tövbə",
		"tülkü",
		"türkü",
		"tütün",
		"təala",
		"təalə",
		"təbii",
		"təhər",
		"təkan",
		"təkcə",
		"təkdə",
		"təkid",
		"təkin",
		"təlim",
		"tələb",
		"təmas",
		"təmin",
		"təmir",
		"təmiz",
		"təməl",
		"təqib",
		"tərif",
		"tərsi",
		"tərzi",
		"tərəf",
		"təsir",
		"təsis",
		"təvaf",
		"təyin",
		"təzad",
		"ucuna",
		"ulduz",
		"ustad",
		"uyğun",
		"uğura",
		"uğuru",
		"uşağa",
		"uşağı",
		"vacib",
		"vadar",
		"vahid",
		"valeh",
		"vanın",
		"vaqon",
		"varan",
		"vardı",
		"varis",
		"varlı",
		"varsa",
		"vaxta",
		"vaxtı",
		"verdi",
		"vergi",
		"verib",
		"verim",
		"verin",
		"verir",
		"vermə",
		"versə",
		"verək",
		"verən",
		"verər",
		"villa",
		"virus",
		"vokal",
		"vuran",
		"vuraq",
		"vurar",
		"vurdu",
		"vurma",
		"vurub",
		"vurur",
		"vurğu",
		"vüqar",
		"vədin",
		"vəfat",
		"vəhşi",
		"vəkil",
		"vərəm",
		"vərəq",
		"vətən",
		"vəzir",
		"xadim",
		"xahiş",
		"xalis",
		"xalla",
		"xallı",
		"xalqa",
		"xalqı",
		"xalça",
		"xanım",
		"xanın",
		"xarab",
		"xaric",
		"xatun",
		"xeyir",
		"xeyli",
		"xeyri",
		"xeyrə",
		"xilaf",
		"xilas",
		"xitab",
		"xitam",
		"xiyar",
		"xurma",
		"xörək",
		"xüsus",
		"xırda",
		"xəbər",
		"xələl",
		"xərci",
		"xəstə",
		"xətti",
		"xəttə",
		"xəyal",
		"xəzan",
		"xəzər",
		"yadda",
		"yaddı",
		"yalan",
		"yaman",
		"yanan",
		"yanar",
		"yandı",
		"yanğı",
		"yanıb",
		"yanır",
		"yaqut",
		"yarad",
		"yaran",
		"yarım",
		"yarın",
		"yarış",
		"yasaq",
		"yatan",
		"yataq",
		"yatıb",
		"yatır",
		"yavaş",
		"yavuz",
		"yaxud",
		"yaxın",
		"yaxşı",
		"yayan",
		"yayda",
		"yayıb",
		"yayım",
		"yayın",
		"yazan",
		"yazar",
		"yazdı",
		"yazıb",
		"yazım",
		"yazın",
		"yazıq",
		"yazır",
		"yağan",
		"yağlı",
		"yağış",
		"yaşam",
		"yaşda",
		"yaşla",
		"yaşlı",
		"yaşıl",
		"yaşın",
		"yeddi",
		"yekun",
		"yemir",
		"yemiş",
		"yemək",
		"yerdə",
		"yerim",
		"yerin",
		"yerli",
		"yerlə",
		"yetim",
		"yetir",
		"yeyib",
		"yeyir",
		"yeyək",
		"yeyən",
		"yolda",
		"yolla",
		"yolum",
		"yolun",
		"yoxdu",
		"yoxsa",
		"yumaq",
		"yunan",
		"yunus",
		"yurda",
		"yurdu",
		"yuxar",
		"yuyub",
		"yöndə",
		"yüklü",
		"yürüş",
		"yığma",
		"yığıb",
		"yığım",
		"yığır",
		"yəqin",
		"zabit",
		"zalda",
		"zalım",
		"zaman",
		"zamin",
		"zavod",
		"zibil",
		"zinət",
		"zirvə",
		"ziyan",
		"zorla",
		"zoğal",
		"zövqü",
		"zülal",
		"zülmə",
		"zəfər",
		"zəlil",
		"zəmin",
		"zənci",
		"zəngi",
		"zəngə",
		"zərbə",
		"zərif",
		"zərrə",
		"zərər",
		"çadır",
		"çalan",
		"çalar",
		"çaldı",
		"çalır",
		"çanta",
		"çatan",
		"çatdı",
		"çatsa",
		"çatıb",
		"çatım",
		"çatır",
		"çayın",
		"çağda",
		"çevik",
		"çeçen",
		"çinar",
		"çində",
		"çinin",
		"çinli",
		"çinlə",
		"çiyin",
		"çiçək",
		"çoxlu",
		"çörək",
		"çünki",
		"çıxan",
		"çıxar",
		"çıxdı",
		"çıxsa",
		"çıxıb",
		"çıxın",
		"çıxır",
		"çıxış",
		"çəkdi",
		"çəkib",
		"çəkim",
		"çəkin",
		"çəkir",
		"çəkmə",
		"çəksə",
		"çəkən",
		"çətin",
		"ödəmə",
		"ödəyə",
		"ölmüş",
		"ölmək",
		"ölməz",
		"ölümü",
		"ölümə",
		"ömrün",
		"öndər",
		"önünə",
		"önəmi",
		"örnək",
		"örtük",
		"ötəri",
		"övlad",
		"özümü",
		"özümə",
		"özünü",
		"özünə",
		"ümidi",
		"ümmət",
		"ümumi",
		"ünvan",
		"ürəyi",
		"üslub",
		"üstün",
		"üsula",
		"üsulu",
		"üsyan",
		"üzdən",
		"üzümə",
		"üzünü",
		"üzünə",
		"üzərə",
		"üçünü",
		"şadam",
		"şadıq",
		"şahid",
		"şahin",
		"şahın",
		"şairi",
		"şamil",
		"şanlı",
		"şansı",
		"şaxta",
		"şeydi",
		"şeydə",
		"şeyin",
		"şeylə",
		"şimal",
		"şirin",
		"şorba",
		"ştatı",
		"şumer",
		"şüarı",
		"şübhə",
		"şükür",
		"şüura",
		"şüuru",
		"şüyüd",
		"şəhid",
		"şəhər",
		"şəkil",
		"şəkli",
		"şəklə",
		"şəkər",
		"şənbə",
		"şərab",
		"şərdə",
		"şərhə",
		"şərik",
		"şərin",
		"şərlə",
		"şərqi",
		"şərqə",
		"şərti",
		"şərur",
		"şərəf",
		"şəxsi",
		"şəxsə",
		"əbədi",
		"əcəli",
		"ədatı",
		"ədrin",
		"ədəbi",
		"ədədi",
		"əhali",
		"əhatə",
		"əhval",
		"əklil",
		"əkmək",
		"əkrin",
		"əksər",
		"əlaqə",
		"əlavə",
		"əlbir",
		"əlcək",
		"əldən",
		"əlimi",
		"əlimə",
		"əlini",
		"əlinə",
		"əllər",
		"əmiri",
		"əmisi",
		"əmlak",
		"əmməd",
		"əməli",
		"əmələ",
		"əməyi",
		"əməyə",
		"əncam",
		"əncir",
		"əngəl",
		"ənənə",
		"əqidə",
		"ərazi",
		"ərini",
		"ərinə",
		"ərizə",
		"ərzaq",
		"əsası",
		"əsgər",
		"əslən",
		"əsrdə",
		"əsrin",
		"əsəbi",
		"əsəri",
		"əsərə",
		"ətdən",
		"ətini",
		"ətinə",
		"ətiri",
		"ətraf",
		"əvvəl",
		"əvəzi",
		"əxlaq",
		"əyani",
		"əzaba",
		"əzabı",
		"əzəli"
	],
	6: [
		"abadan",
		"abajur",
		"abasız",
		"abbasi",
		"abqora",
		"abılıq",
		"abırlı",
		"acarca",
		"aclığı",
		"acıdil",
		"acılıq",
		"acımaq",
		"acıqca",
		"acıqla",
		"acıqlı",
		"acıtma",
		"adacıq",
		"adajio",
		"adalar",
		"adamam",
		"adamın",
		"adanın",
		"adaxlı",
		"adbaad",
		"addıma",
		"addımı",
		"adlara",
		"adları",
		"adında",
		"adının",
		"adınız",
		"adənin",
		"adətcə",
		"adətən",
		"affiks",
		"afiyət",
		"afrika",
		"aftafa",
		"afərin",
		"aiddir",
		"ailədə",
		"ailəni",
		"ailəsi",
		"ailəvi",
		"ailəyə",
		"aksiya",
		"aktual",
		"aktyor",
		"alacaq",
		"alanda",
		"alaraq",
		"albalı",
		"albomu",
		"aldığı",
		"alimin",
		"allaha",
		"allahı",
		"almada",
		"almalı",
		"almanı",
		"alması",
		"almağa",
		"almağı",
		"altına",
		"altını",
		"alveri",
		"alınan",
		"alınar",
		"alındı",
		"alınıb",
		"alınır",
		"alıram",
		"alırdı",
		"alırıq",
		"aləmdə",
		"aləmin",
		"amilin",
		"amənin",
		"anadan",
		"analar",
		"analiz",
		"anamın",
		"ananas",
		"ananın",
		"anaraq",
		"andaca",
		"andına",
		"anladı",
		"anlamı",
		"anları",
		"anlaya",
		"anlığa",
		"anonim",
		"anında",
		"aparan",
		"aparaq",
		"aparar",
		"aparat",
		"apardı",
		"aparsa",
		"aparıb",
		"aparın",
		"aparır",
		"arabir",
		"aradan",
		"aralıq",
		"arayış",
		"artist",
		"artımı",
		"artıra",
		"arvadı",
		"arxada",
		"arzunu",
		"arzusu",
		"asanca",
		"asilik",
		"asılıb",
		"atacaq",
		"atalar",
		"atamla",
		"atamın",
		"atanda",
		"atanın",
		"atanız",
		"ataraq",
		"atdığı",
		"atları",
		"atmalı",
		"atması",
		"atmağa",
		"atmağı",
		"atılan",
		"atıldı",
		"atılıb",
		"atılır",
		"atırdı",
		"atışma",
		"avqust",
		"avropa",
		"axirət",
		"axırda",
		"axşama",
		"axşamı",
		"ayadək",
		"ayağın",
		"ayrıca",
		"ayrıla",
		"ayında",
		"ayının",
		"ayıran",
		"ayırdı",
		"ayırıb",
		"ayırın",
		"ayırır",
		"ayələr",
		"ayənin",
		"azacıq",
		"azalıb",
		"azalır",
		"azlığı",
		"açaraq",
		"açarlı",
		"açdığı",
		"açmağa",
		"açmağı",
		"açılan",
		"açıldı",
		"açılıb",
		"açılır",
		"açılış",
		"açıqca",
		"ağaclı",
		"ağacın",
		"ağalıq",
		"ağartı",
		"ağbəxt",
		"ağdama",
		"ağdamı",
		"ağladı",
		"ağlama",
		"ağlaya",
		"ağlıma",
		"ağlına",
		"ağmaya",
		"ağnama",
		"ağrılı",
		"ağrını",
		"ağrısı",
		"ağzına",
		"ağzını",
		"ağüzlü",
		"ağılca",
		"ağılla",
		"ağıllı",
		"ağılın",
		"ağıntı",
		"ağızda",
		"aşaraq",
		"aşkara",
		"aşkarı",
		"aşması",
		"babası",
		"bacısı",
		"bahalı",
		"bakıda",
		"bakını",
		"bakıya",
		"balaca",
		"balası",
		"baldan",
		"balığı",
		"banisi",
		"bankın",
		"barmaq",
		"barışa",
		"barədə",
		"basqın",
		"batili",
		"batumi",
		"baxdım",
		"baxmaq",
		"baxıla",
		"baxışı",
		"bayatı",
		"bayağı",
		"bayquş",
		"bayram",
		"bayraq",
		"bayrağ",
		"baytar",
		"bayıra",
		"bazara",
		"bazarı",
		"bazası",
		"bağban",
		"bağdad",
		"başdan",
		"başlıq",
		"başıma",
		"başımı",
		"başına",
		"başını",
		"belinə",
		"beləcə",
		"beləki",
		"beşiyi",
		"biganə",
		"bildik",
		"bildim",
		"bileti",
		"bilinc",
		"biliyi",
		"biliyə",
		"bilmir",
		"bilmiş",
		"bilmək",
		"bilməz",
		"bilsin",
		"bilsək",
		"biləni",
		"binada",
		"binanı",
		"binası",
		"binaya",
		"binnət",
		"birdir",
		"birdən",
		"biridə",
		"birini",
		"birinə",
		"birisi",
		"birlik",
		"bitmir",
		"bitmiş",
		"bizdən",
		"bizlər",
		"biznes",
		"biçmək",
		"blokun",
		"boldur",
		"bolluq",
		"borclu",
		"borcun",
		"boykot",
		"boyuna",
		"boşluq",
		"boşqab",
		"builki",
		"bundan",
		"bunlar",
		"burada",
		"buranı",
		"burası",
		"buraya",
		"burdan",
		"buxari",
		"böhran",
		"böhtan",
		"bölümü",
		"böyrək",
		"böyüyü",
		"böyüyə",
		"büruzə",
		"bütlər",
		"bəbəyi",
		"bədəni",
		"bədənə",
		"bədəvi",
		"bəhanə",
		"bəlası",
		"bəlaya",
		"bənzər",
		"bəraət",
		"bərbad",
		"bəzisi",
		"bəşəri",
		"camaat",
		"candan",
		"cansız",
		"canına",
		"canını",
		"cavabı",
		"cibinə",
		"cinlər",
		"cinsin",
		"cismən",
		"cədvəl",
		"cəfəri",
		"cəhəti",
		"cəhətə",
		"cəmisi",
		"cənnət",
		"cərimə",
		"cəsədi",
		"cəzası",
		"cəzaya",
		"dadmaq",
		"dalana",
		"dalına",
		"danmaq",
		"danışa",
		"darçın",
		"davamı",
		"daxili",
		"dayana",
		"dayısı",
		"dağlar",
		"dağlıq",
		"dağına",
		"daşlar",
		"daşlıq",
		"daşını",
		"dediyi",
		"dekabr",
		"dekanı",
		"demədi",
		"deməli",
		"deməsi",
		"deməyi",
		"deməyə",
		"deyimi",
		"deyənə",
		"dialoq",
		"dibinə",
		"digəri",
		"dildən",
		"dilimi",
		"dilini",
		"dilinə",
		"dillər",
		"dilədi",
		"diləyi",
		"dindar",
		"dindir",
		"dindən",
		"dinini",
		"dininə",
		"dinlər",
		"diplom",
		"diqqət",
		"dirəyi",
		"diyarı",
		"dizayn",
		"doktor",
		"dolayı",
		"dollar",
		"dolğun",
		"doqquz",
		"dostum",
		"dostun",
		"dovşan",
		"dualar",
		"durana",
		"durmaq",
		"durmağ",
		"durmuş",
		"duruma",
		"durumu",
		"dustaq",
		"duymaq",
		"duymaz",
		"dönmək",
		"dönməz",
		"dönüşü",
		"dövlət",
		"dövrdə",
		"dövrün",
		"döyüşə",
		"döşəmə",
		"dünyan",
		"dünəni",
		"dürüst",
		"düzgün",
		"düzünü",
		"düzələ",
		"düşdüm",
		"düşdün",
		"düşmür",
		"düşmüş",
		"düşmək",
		"düşmən",
		"düşməz",
		"düşsün",
		"düşünə",
		"dırnaq",
		"dəftər",
		"dəfəki",
		"dəmiri",
		"dəndir",
		"dənizi",
		"dənizə",
		"dənəsi",
		"dəqiqi",
		"dəqiqə",
		"dərhal",
		"dəridə",
		"dərini",
		"dərinə",
		"dərisi",
		"dəriyə",
		"dərman",
		"dərviş",
		"dərəcə",
		"dəstək",
		"dəvəti",
		"dəvətə",
		"dəyişə",
		"dəyməz",
		"dəyəri",
		"edildi",
		"edilib",
		"edilir",
		"edilmə",
		"edilsə",
		"edilən",
		"edilər",
		"edincə",
		"edirdi",
		"edirik",
		"edirmi",
		"edirsə",
		"edirəm",
		"edəcək",
		"edəcəm",
		"edələr",
		"edəndə",
		"edənin",
		"edərdi",
		"edərik",
		"edərsə",
		"edərək",
		"edərəm",
		"edəsən",
		"effekt",
		"efirdə",
		"ehtiva",
		"ekipaj",
		"elitar",
		"elmini",
		"elminə",
		"elmlər",
		"elçisi",
		"elədim",
		"elədir",
		"eləmir",
		"eləmək",
		"eləsin",
		"eləyib",
		"eləyir",
		"eləyən",
		"enerji",
		"erməni",
		"ertəsi",
		"etdirə",
		"etdiyi",
		"etibar",
		"etimad",
		"etimal",
		"etiqad",
		"etiraf",
		"etiraz",
		"etmədi",
		"etməli",
		"etməsi",
		"etməsə",
		"etməyi",
		"etməyə",
		"evində",
		"evinin",
		"evləri",
		"eynilə",
		"eyvana",
		"eşidib",
		"eşidir",
		"eşidək",
		"eşidən",
		"eşitdi",
		"faizin",
		"faizlə",
		"faktla",
		"faktor",
		"faktın",
		"fasilə",
		"faşizm",
		"fevral",
		"fikrim",
		"fikrin",
		"fikrət",
		"filmdə",
		"filmin",
		"finala",
		"fincan",
		"finişə",
		"fizika",
		"fiziki",
		"fondun",
		"formal",
		"foruma",
		"forumu",
		"fransa",
		"futbol",
		"fürsət",
		"füzuli",
		"fındıq",
		"fənlər",
		"fərdin",
		"fərhad",
		"fərman",
		"fərqin",
		"fərqli",
		"fəryad",
		"fəzail",
		"gavalı",
		"gecəni",
		"gecəsi",
		"gecəyə",
		"gedişi",
		"gedənə",
		"gedəsi",
		"geridə",
		"geriyə",
		"gerçək",
		"getdik",
		"getdim",
		"getmir",
		"getmiş",
		"getmək",
		"getməz",
		"getsin",
		"geyimi",
		"girmək",
		"girsin",
		"gizlin",
		"guşəsi",
		"gömrük",
		"göndər",
		"gördük",
		"gördüm",
		"görmür",
		"görmüş",
		"görmək",
		"görməz",
		"görsün",
		"görünə",
		"görüşü",
		"görüşə",
		"göstər",
		"götürə",
		"göydən",
		"göylər",
		"gözdən",
		"gözlük",
		"gözlər",
		"gözünü",
		"gözünə",
		"gözəli",
		"gücümə",
		"gücünü",
		"gücünə",
		"gülmək",
		"gülünc",
		"günaha",
		"günahı",
		"gündür",
		"gündüz",
		"gündən",
		"günlük",
		"günlər",
		"gününü",
		"gününə",
		"günəşi",
		"güzəşt",
		"gəldik",
		"gəldim",
		"gəldin",
		"gəliri",
		"gəlişi",
		"gəlmir",
		"gəlmiş",
		"gəlmək",
		"gəlməz",
		"gəlsin",
		"gələni",
		"gələnə",
		"gəmisi",
		"gəncin",
		"gərgin",
		"gərəyi",
		"gətirə",
		"gəzmək",
		"habelə",
		"hacılı",
		"hadisə",
		"hakimi",
		"haldan",
		"haldır",
		"hallar",
		"halına",
		"halını",
		"hamama",
		"hamilə",
		"hamını",
		"hamısı",
		"hamıya",
		"haqdan",
		"haqdır",
		"haqlar",
		"haqqın",
		"haqsız",
		"harada",
		"harasa",
		"haraya",
		"hardan",
		"havada",
		"havası",
		"havaya",
		"havayı",
		"hekayə",
		"hektar",
		"heroin",
		"hesaba",
		"hesabı",
		"heykəl",
		"heyran",
		"heyrət",
		"heyvan",
		"heyəti",
		"hikmət",
		"himayə",
		"hirslə",
		"hissin",
		"hökmün",
		"hökmən",
		"hörmət",
		"hücuma",
		"hücumu",
		"hündür",
		"hüquqa",
		"hüquqi",
		"hüququ",
		"həbsdə",
		"həcmdə",
		"həcmli",
		"həddən",
		"hədisi",
		"hədsiz",
		"hədəfi",
		"hədəfə",
		"hədəsi",
		"həkimi",
		"həkimə",
		"həmişə",
		"həqiqi",
		"hərbçi",
		"hərdən",
		"hərəsi",
		"hərəyə",
		"həsrət",
		"həssas",
		"həvalə",
		"həvəsi",
		"həyata",
		"həyati",
		"həyatı",
		"həzrət",
		"ibadət",
		"ibarət",
		"iclasa",
		"iclası",
		"icması",
		"icrası",
		"icraçı",
		"ideyas",
		"idilər",
		"idmana",
		"idmanı",
		"idxalı",
		"iflasa",
		"ifrata",
		"ikinci",
		"ikiqat",
		"ilaxır",
		"ildəki",
		"ilində",
		"ilinin",
		"iliniz",
		"ilişib",
		"illiyi",
		"illəri",
		"illərə",
		"ilədək",
		"imamın",
		"imanın",
		"imkanı",
		"imtina",
		"imzası",
		"inadla",
		"inamla",
		"inamlı",
		"inamın",
		"inanan",
		"inanıb",
		"inanın",
		"inanır",
		"indeks",
		"indicə",
		"indiki",
		"indisə",
		"indiyə",
		"inkarı",
		"insana",
		"insani",
		"insanı",
		"inşaat",
		"inşası",
		"iranda",
		"iranla",
		"iranlı",
		"iranın",
		"iraqda",
		"iraqla",
		"iraqlı",
		"iraqın",
		"irsini",
		"irəvan",
		"isanın",
		"islama",
		"islami",
		"islamı",
		"israil",
		"istanı",
		"istefa",
		"istədi",
		"istəsə",
		"istəyi",
		"istəyə",
		"itirdi",
		"itirib",
		"itirir",
		"itirən",
		"itkisi",
		"ixracı",
		"ixtira",
		"iyevin",
		"iyirmi",
		"iyrənc",
		"iyulun",
		"iyunda",
		"iyunun",
		"izahat",
		"izləri",
		"izləyə",
		"içində",
		"içkili",
		"içməli",
		"içməyə",
		"işidir",
		"işimiz",
		"işində",
		"işinin",
		"işiylə",
		"işlədə",
		"işləmə",
		"işlənə",
		"işləri",
		"işlərə",
		"işləyə",
		"işçisi",
		"işğala",
		"işğalı",
		"işıqlı",
		"işığın",
		"janrda",
		"jurnal",
		"kamera",
		"kamili",
		"kanada",
		"kanalı",
		"kartla",
		"kartof",
		"kartın",
		"karvan",
		"katibi",
		"katibə",
		"kağıza",
		"kağızı",
		"keçidi",
		"keçinə",
		"keçirə",
		"keçmir",
		"keçmiş",
		"keçmək",
		"keçəni",
		"kimdir",
		"kimdən",
		"kimini",
		"kimisi",
		"kimisə",
		"kimlər",
		"kiməsə",
		"kinayə",
		"kiprdə",
		"kiprik",
		"kiprin",
		"kiprlə",
		"kitaba",
		"kitabi",
		"kitabı",
		"kişini",
		"kişiyə",
		"klipdə",
		"klipin",
		"klubun",
		"komitə",
		"koreya",
		"kosmik",
		"kredit",
		"kritik",
		"kursun",
		"kökdən",
		"kökünü",
		"köməyi",
		"köməyə",
		"kövrək",
		"köynək",
		"köçkün",
		"kürəsi",
		"küçədə",
		"küçəsi",
		"küçəyə",
		"kədəri",
		"kəlamı",
		"kələmə",
		"kəməri",
		"kənara",
		"kənddə",
		"kəndin",
		"kəndli",
		"kəsdən",
		"kəsiyi",
		"kəskin",
		"kəslər",
		"kəsmir",
		"kəsmək",
		"kəsəri",
		"laqeyd",
		"lardan",
		"larını",
		"layihə",
		"lazımi",
		"lazımı",
		"lehinə",
		"leksik",
		"leysan",
		"lideri",
		"liderə",
		"limanı",
		"lüğəti",
		"lərdən",
		"lərini",
		"lərinə",
		"lətifə",
		"ləzzət",
		"maarif",
		"makina",
		"maldan",
		"mallar",
		"malını",
		"manata",
		"manatı",
		"mandat",
		"maralı",
		"marağı",
		"martın",
		"masada",
		"mayada",
		"mağaza",
		"maşına",
		"maşını",
		"medalı",
		"mehman",
		"memarı",
		"meriya",
		"metodu",
		"meyara",
		"meyarı",
		"meydan",
		"meydən",
		"meymun",
		"midiya",
		"miladi",
		"millət",
		"milyon",
		"milçək",
		"minaya",
		"mindən",
		"minlik",
		"minlər",
		"minsin",
		"mirası",
		"miskin",
		"mistik",
		"mitinq",
		"modeli",
		"moskva",
		"murdar",
		"musiqi",
		"muxtar",
		"muğama",
		"muğamı",
		"möcüzə",
		"möhkəm",
		"möhlət",
		"möhtac",
		"mövcud",
		"mövlud",
		"mövsüm",
		"müasir",
		"müavin",
		"müddəa",
		"müddət",
		"müdiri",
		"müdrik",
		"mühiti",
		"mühitə",
		"mümkün",
		"münbit",
		"müsbət",
		"mütləq",
		"müxbir",
		"müşfiq",
		"məbləğ",
		"məbədi",
		"məcazi",
		"məcbur",
		"məclis",
		"mədinə",
		"mədəni",
		"məhbus",
		"məhbəs",
		"məhdud",
		"məhkum",
		"məhrum",
		"məhsul",
		"məişət",
		"məkana",
		"məkanı",
		"məkrli",
		"məktub",
		"məktəb",
		"mələyi",
		"məmnun",
		"məmuru",
		"mənada",
		"mənalı",
		"mənası",
		"məndən",
		"mənsub",
		"məntiq",
		"mənzil",
		"mənəvi",
		"məqalə",
		"məqama",
		"məqamı",
		"məqbul",
		"məqsəd",
		"məramı",
		"mərhum",
		"mərkəz",
		"mərmər",
		"məruzə",
		"məryəm",
		"məsafə",
		"məscid",
		"məskən",
		"məsələ",
		"mətbəx",
		"mətlər",
		"mətnin",
		"məxsus",
		"məzarı",
		"məzmun",
		"məzunu",
		"məzəli",
		"məğlub",
		"məşhur",
		"məşqçi",
		"məşğul",
		"namaza",
		"namazı",
		"naminə",
		"namərd",
		"narazı",
		"naziri",
		"nazirə",
		"neftin",
		"neftlə",
		"neftçi",
		"neməti",
		"neçəsi",
		"nifrət",
		"nikaha",
		"nikahı",
		"nikbin",
		"nistan",
		"nitqdə",
		"niyyət",
		"nizama",
		"nişanı",
		"normal",
		"norveç",
		"novruz",
		"noyabr",
		"nurani",
		"növünü",
		"növünə",
		"nüfuza",
		"nüfuzu",
		"nümunə",
		"nədəni",
		"nəfəri",
		"nəfərə",
		"nəfəsi",
		"nəhəng",
		"nəinki",
		"nəliyi",
		"nələri",
		"nələrə",
		"nənəsi",
		"nənəyə",
		"nərgiz",
		"nəsimi",
		"nəslin",
		"nəticə",
		"nəvəsi",
		"nəyinə",
		"nəyisə",
		"nəyəsə",
		"nəzəri",
		"nəzərə",
		"obrazı",
		"obyekt",
		"ocaqlı",
		"olacad",
		"olacaq",
		"olanda",
		"olanla",
		"olanın",
		"olaram",
		"olaraq",
		"olardı",
		"olarmı",
		"olarsa",
		"olarıq",
		"olasan",
		"olaydı",
		"olayın",
		"olduğu",
		"olmadı",
		"olmalı",
		"olmasa",
		"olması",
		"olmaya",
		"olmağa",
		"olmağı",
		"olubsa",
		"olunan",
		"olunar",
		"olundu",
		"olunma",
		"olunsa",
		"olunub",
		"olunur",
		"oluram",
		"olurdu",
		"olursa",
		"oluruq",
		"ondakı",
		"onlara",
		"onları",
		"onunla",
		"oradan",
		"oranın",
		"ordeni",
		"orduda",
		"ordusu",
		"orduya",
		"orqana",
		"orqanı",
		"ortada",
		"ortaya",
		"ortağı",
		"otaqda",
		"oturan",
		"oturdu",
		"oturub",
		"oturur",
		"oxudum",
		"oxumaq",
		"oxumur",
		"oxumuş",
		"oxunur",
		"oxuyan",
		"oxuyub",
		"oxuyun",
		"oxuyur",
		"oyadır",
		"oynadı",
		"oynaya",
		"oyunda",
		"oğlana",
		"oğlanı",
		"oğluma",
		"oğluna",
		"oğlunu",
		"paketi",
		"paltar",
		"palçıq",
		"pambıq",
		"parisə",
		"parkda",
		"parlaq",
		"passiv",
		"patent",
		"payına",
		"payını",
		"pendir",
		"peşman",
		"pisdir",
		"pislik",
		"piyada",
		"planda",
		"planlı",
		"planın",
		"poetik",
		"polisi",
		"polisə",
		"polyak",
		"pozmaq",
		"proses",
		"puldur",
		"pullar",
		"pulsuz",
		"pulunu",
		"pəhriz",
		"pərviz",
		"qabağa",
		"qabağı",
		"qablar",
		"qadağa",
		"qadına",
		"qadını",
		"qafqaz",
		"qalanı",
		"qalası",
		"qaldım",
		"qaldıq",
		"qalibi",
		"qalmaq",
		"qalmaz",
		"qalmır",
		"qalmış",
		"qalsın",
		"qalxan",
		"qalxdı",
		"qalxıb",
		"qalxır",
		"qalığı",
		"qanadı",
		"qandan",
		"qanlar",
		"qanuna",
		"qanuni",
		"qanunu",
		"qanına",
		"qanını",
		"qapalı",
		"qapıda",
		"qapını",
		"qapısı",
		"qapıya",
		"qaraca",
		"qardaş",
		"qarpız",
		"qartal",
		"qatarı",
		"qatına",
		"qayaya",
		"qaynaq",
		"qaynar",
		"qayıda",
		"qazana",
		"qazanc",
		"qaçmaq",
		"qaçqın",
		"qismən",
		"qismət",
		"qiyabi",
		"qiyamı",
		"qiymət",
		"qlobal",
		"qocanı",
		"qohumu",
		"qonağa",
		"qonağı",
		"qorqud",
		"qoruya",
		"qorxan",
		"qorxar",
		"qorxub",
		"qorxun",
		"qorxut",
		"qoydum",
		"qoymaq",
		"qoymur",
		"qoymuş",
		"qoysun",
		"qoyula",
		"qoşunu",
		"qrafik",
		"qrupun",
		"qubada",
		"qulağı",
		"quldur",
		"qullab",
		"qulluq",
		"qurana",
		"quranı",
		"qurban",
		"qurmaq",
		"qurmuş",
		"qurtar",
		"quruma",
		"qurumu",
		"qüdrət",
		"qüruba",
		"qüvvət",
		"qılmaq",
		"qılınc",
		"qırağa",
		"qırğın",
		"qısaca",
		"qısası",
		"qızdan",
		"qızlar",
		"qızğın",
		"qızılı",
		"qızına",
		"qızını",
		"qəbilə",
		"qəbrin",
		"qəbula",
		"qəbulu",
		"qəbələ",
		"qəddar",
		"qədəri",
		"qəflət",
		"qəlibi",
		"qələbə",
		"qələmi",
		"qələmə",
		"qənaət",
		"qərara",
		"qərarı",
		"qərbin",
		"qəribə",
		"qəsdən",
		"qəsəbə",
		"qətran",
		"qəzanı",
		"qəzası",
		"qəzaya",
		"qəzeti",
		"qəzetə",
		"qəzəbi",
		"rabitə",
		"rahatı",
		"rayona",
		"rayonu",
		"rejimi",
		"rejimə",
		"reklam",
		"rekord",
		"rektor",
		"reyhan",
		"riayət",
		"rifahı",
		"riyazi",
		"rollar",
		"roluna",
		"rolunu",
		"romanı",
		"ruhani",
		"ruhdan",
		"ruhuna",
		"ruhunu",
		"rusiya",
		"ruslan",
		"ruslar",
		"rüsumu",
		"rüşvət",
		"rəbbim",
		"rəbbin",
		"rəftar",
		"rəhbər",
		"rəhmət",
		"rəngdə",
		"rəngin",
		"rəngli",
		"rəqibi",
		"rəqəmi",
		"rəsmən",
		"rəssam",
		"rəsulu",
		"rəyini",
		"rəyinə",
		"rəğbət",
		"rəğmən",
		"saatda",
		"saatın",
		"sabaha",
		"sabahı",
		"sadəcə",
		"saflıq",
		"sahibi",
		"sahədə",
		"sahəni",
		"sahəsi",
		"sahəyə",
		"sakini",
		"salamı",
		"saldım",
		"saldıq",
		"salmaq",
		"salmır",
		"salmış",
		"salonu",
		"salyan",
		"saniyə",
		"saqqal",
		"saqqız",
		"saraya",
		"sarayı",
		"satira",
		"satmaq",
		"satıcı",
		"satışa",
		"satışı",
		"savadı",
		"savayı",
		"savaşı",
		"saymaq",
		"saymır",
		"saysız",
		"sayıla",
		"sayına",
		"sayını",
		"sazişi",
		"sazişə",
		"sağlam",
		"sağlıq",
		"sektor",
		"sement",
		"sevinc",
		"sevmək",
		"seymur",
		"seyyid",
		"seçici",
		"seçimi",
		"seçmiş",
		"seçmək",
		"sifəti",
		"silaha",
		"silahı",
		"silmək",
		"sinfin",
		"sintez",
		"sirdir",
		"sistem",
		"siyahı",
		"siyasi",
		"sizdən",
		"solmaz",
		"sonlar",
		"sonrak",
		"sonsuz",
		"sonuna",
		"sosial",
		"soyadı",
		"spiker",
		"stimul",
		"stolun",
		"sualda",
		"sualla",
		"sualtı",
		"sualın",
		"suları",
		"sultan",
		"suriya",
		"surəsi",
		"surəti",
		"susmaq",
		"suyuna",
		"suyunu",
		"söhbət",
		"sözdür",
		"sözdən",
		"sözlük",
		"sözlər",
		"sözsüz",
		"sözünü",
		"sözünə",
		"sübuta",
		"sübutu",
		"sükanı",
		"sülhün",
		"sürgün",
		"sürmüş",
		"sürmək",
		"sürücü",
		"sürəti",
		"sütunu",
		"sınağa",
		"sırada",
		"sırası",
		"sıravi",
		"sıraya",
		"səadət",
		"səbəbi",
		"səbəbə",
		"sədrin",
		"sədəqə",
		"səfalı",
		"səfiri",
		"səfirə",
		"səfəri",
		"səfərə",
		"səhifə",
		"səhvən",
		"səhəri",
		"səhərə",
		"səkkiz",
		"səlləm",
		"səmavi",
		"səmimi",
		"səmərə",
		"sənaye",
		"səndən",
		"sənədi",
		"sənədə",
		"sənəti",
		"sənətə",
		"sərhəd",
		"sərvət",
		"səsdir",
		"səsini",
		"səsinə",
		"səslər",
		"səylər",
		"səyyar",
		"tabeli",
		"tahirə",
		"taleyi",
		"tamaşa",
		"tanına",
		"tapmaq",
		"tapmış",
		"tarixi",
		"tarixə",
		"tarkan",
		"taxtda",
		"taydan",
		"tayına",
		"teatrı",
		"tehsil",
		"tennis",
		"termin",
		"terror",
		"tezdir",
		"tezdən",
		"tezisi",
		"tiflis",
		"tikili",
		"tikmək",
		"tipinə",
		"tondan",
		"torpaq",
		"toruna",
		"toxumu",
		"turdan",
		"turist",
		"turizm",
		"turuna",
		"tutdum",
		"tutduq",
		"tutmaq",
		"tutmur",
		"tutmuş",
		"tutula",
		"tutumu",
		"türkcə",
		"türkün",
		"türkəm",
		"tüğyan",
		"təbili",
		"təbiət",
		"təbliğ",
		"təbrik",
		"təbriz",
		"təchiz",
		"təcili",
		"təcrid",
		"tədbiq",
		"tədbir",
		"tədqiq",
		"tədris",
		"təfsir",
		"təftiş",
		"təhdid",
		"təhlil",
		"təhqir",
		"təhrif",
		"təhrik",
		"təhsil",
		"təhvil",
		"təkdir",
		"təkidi",
		"təkini",
		"təklif",
		"təkmil",
		"təkrar",
		"təkzib",
		"təlimi",
		"təltif",
		"tələbi",
		"tələbə",
		"təmini",
		"təmiri",
		"təmizə",
		"təmsil",
		"təməli",
		"tənbəl",
		"tənqid",
		"təqaüd",
		"təqdim",
		"təqdir",
		"təqdis",
		"təqlid",
		"təqvim",
		"tərkib",
		"tərtib",
		"tərzdə",
		"tərəfi",
		"tərəfə",
		"təsdiq",
		"təsiri",
		"təslim",
		"təsvir",
		"tətbiq",
		"təxirə",
		"təyini",
		"təzyiq",
		"təzəcə",
		"təşkil",
		"təşrif",
		"təşviq",
		"ucadan",
		"ucadır",
		"ulduzu",
		"ustası",
		"uzadıb",
		"uzadır",
		"uzanan",
		"uzanıb",
		"uzanır",
		"uzaqda",
		"uzatdı",
		"uğurla",
		"uğurlu",
		"uğurun",
		"uşaqdı",
		"uşağın",
		"vacibi",
		"vacibə",
		"vahidi",
		"vallah",
		"vardır",
		"varisi",
		"varlıq",
		"varmaq",
		"varmış",
		"vasitə",
		"vaxtda",
		"vaxtkı",
		"vaxtla",
		"vaxtsa",
		"vaxtım",
		"vaxtın",
		"vağzal",
		"verdik",
		"verdim",
		"verdin",
		"vergül",
		"verici",
		"verilə",
		"vermir",
		"vermiş",
		"vermək",
		"verməz",
		"versin",
		"verənə",
		"vicdan",
		"vurduq",
		"vurmaq",
		"vurmuş",
		"vurğun",
		"vəchlə",
		"vədini",
		"vədinə",
		"vədlər",
		"vəfatı",
		"vəkili",
		"vərdiş",
		"vəsait",
		"vəsilə",
		"vəsiqə",
		"vətəni",
		"vətənə",
		"vəzifə",
		"vəziri",
		"xadimi",
		"xahişi",
		"xalası",
		"xalisə",
		"xalqda",
		"xalqın",
		"xammal",
		"xanıma",
		"xanımı",
		"xarici",
		"xaricə",
		"xatirə",
		"xaçmaz",
		"xidmət",
		"xilası",
		"xocalı",
		"xoşdur",
		"xoşuma",
		"xoşuna",
		"xüsusi",
		"xəbəri",
		"xəbərə",
		"xəlifə",
		"xəritə",
		"xəttin",
		"xəzərə",
		"yaddan",
		"yaddaş",
		"yaddır",
		"yadlar",
		"yadıma",
		"yadına",
		"yalana",
		"yalanı",
		"yalnız",
		"yalqız",
		"yamağı",
		"yanaşı",
		"yandan",
		"yanlış",
		"yanmış",
		"yanvar",
		"yanğın",
		"yanıma",
		"yanına",
		"yarada",
		"yaralı",
		"yarana",
		"yarası",
		"yardım",
		"yarpaq",
		"yarısı",
		"yarışa",
		"yatağı",
		"yatmaq",
		"yatmış",
		"yaxına",
		"yaydan",
		"yaymaq",
		"yayımı",
		"yazarı",
		"yazdım",
		"yazmaq",
		"yazmış",
		"yazıda",
		"yazılı",
		"yazını",
		"yazısı",
		"yazıya",
		"yazıçı",
		"yağlar",
		"yağışı",
		"yaşadı",
		"yaşasa",
		"yaşaya",
		"yaşdan",
		"yaşına",
		"yaşını",
		"yeganə",
		"yekdil",
		"yekunu",
		"yeməyi",
		"yeməyə",
		"yenicə",
		"yenisi",
		"yerdir",
		"yerdən",
		"yeridi",
		"yerimə",
		"yerini",
		"yerinə",
		"yerlik",
		"yerlər",
		"yersiz",
		"yetirə",
		"yetkin",
		"yetmir",
		"yetmiş",
		"yevlax",
		"yiyəsi",
		"yoldan",
		"yoldaş",
		"yoldur",
		"yollar",
		"yoluma",
		"yoluna",
		"yolunu",
		"yormaq",
		"yorğun",
		"yoxdan",
		"yoxdur",
		"yoxsul",
		"yumruq",
		"yumşaq",
		"yurdun",
		"yuvası",
		"yuxarı",
		"yuxuda",
		"yuxuya",
		"yöndən",
		"yönlük",
		"yüklər",
		"yüksək",
		"yükünü",
		"yüngül",
		"yürüşü",
		"yürüşə",
		"yüzdən",
		"yığcam",
		"yığmaq",
		"yəhudi",
		"zabiti",
		"zahiri",
		"zalına",
		"zamana",
		"zamanı",
		"zaminə",
		"zavodu",
		"zeynəb",
		"ziddir",
		"zillət",
		"zindan",
		"ziyadə",
		"ziyalı",
		"ziyana",
		"ziyanı",
		"zolağı",
		"zonası",
		"zülmət",
		"zəhmət",
		"zəngin",
		"zəruri",
		"zərəri",
		"zərərə",
		"çaları",
		"çalmaq",
		"çapdan",
		"çaqqal",
		"çardaq",
		"çarəsi",
		"çatlar",
		"çatmaq",
		"çatmaz",
		"çatmır",
		"çatmış",
		"çaydan",
		"çaylar",
		"çağdaş",
		"çindən",
		"çirkab",
		"çirkin",
		"çirkli",
		"çoxdan",
		"çoxdur",
		"çoxluq",
		"çoxuna",
		"çoxunu",
		"çörəyi",
		"çörəyə",
		"çözmək",
		"çılpaq",
		"çıxana",
		"çıxanı",
		"çıxara",
		"çıxart",
		"çıxası",
		"çıxdım",
		"çıxdıq",
		"çıxmaq",
		"çıxmaz",
		"çıxmır",
		"çıxmış",
		"çıxsın",
		"çıxışı",
		"çəkdik",
		"çəkdim",
		"çəkidə",
		"çəkini",
		"çəkisi",
		"çəkiyə",
		"çəkmir",
		"çəkmiş",
		"çəkmək",
		"çəksin",
		"çəkəni",
		"çəngəl",
		"çənəyə",
		"çətinə",
		"ödəmir",
		"ödəmək",
		"ödəniş",
		"ödəyib",
		"ödəyir",
		"ödəyən",
		"ölkədə",
		"ölkəni",
		"ölkəsi",
		"ölkəyə",
		"ölçüdə",
		"ölçülü",
		"ölüdən",
		"ölülər",
		"ölümlə",
		"ölürük",
		"ömrünü",
		"öncəki",
		"öncəsi",
		"önündə",
		"önəmli",
		"örtüyü",
		"ötürüb",
		"ötürür",
		"ötürən",
		"övladı",
		"öyrənə",
		"özləri",
		"özüdür",
		"özümdə",
		"özümün",
		"özümüz",
		"özündə",
		"özünün",
		"özünüz",
		"ümidim",
		"ümidlə",
		"ümməti",
		"ümmətə",
		"ümumən",
		"ünvana",
		"ünvanı",
		"ürəyim",
		"ürəyin",
		"üslubi",
		"üslubu",
		"üstünü",
		"üstünə",
		"üsulla",
		"üsulun",
		"üzbəüz",
		"üzvlük",
		"üzvlər",
		"üzvünü",
		"üzvünə",
		"üzündə",
		"üzünün",
		"üçüncü",
		"üçünsə",
		"şadlıq",
		"şagird",
		"şahidi",
		"şahlar",
		"şahmat",
		"şairin",
		"şalvar",
		"şamaxı",
		"şanslı",
		"şerlər",
		"şeydir",
		"şeydən",
		"şeylər",
		"şeytan",
		"şifahi",
		"şikəst",
		"şimali",
		"şimşək",
		"şirkət",
		"şirvan",
		"ştatın",
		"şurası",
		"şuşada",
		"şuşanı",
		"şuşaya",
		"şöbədə",
		"şöbəsi",
		"şöbəyə",
		"şöhrət",
		"şövkət",
		"şüurlu",
		"şüurun",
		"şəbəkə",
		"şəfaət",
		"şəffaf",
		"şəhəri",
		"şəhərə",
		"şəkidə",
		"şəkilə",
		"şəklin",
		"şəksiz",
		"şəmkir",
		"şəninə",
		"şərait",
		"şərbət",
		"şərdən",
		"şəriki",
		"şəriət",
		"şərqdə",
		"şərqin",
		"şərtin",
		"şərtlə",
		"şərəfi",
		"şərəfə",
		"şəxsin",
		"şəxslə",
		"şəxsən",
		"əcnəbi",
		"ədalət",
		"ədavət",
		"əfsanə",
		"əhayət",
		"əhlini",
		"əhlinə",
		"əjdaha",
		"əksini",
		"əksinə",
		"əlamət",
		"əleyhi",
		"əlimdə",
		"əlimlə",
		"əlində",
		"əlinin",
		"əliyev",
		"əlləri",
		"ələrin",
		"ələyhi",
		"əmanət",
		"əminik",
		"əminəm",
		"əmlakı",
		"əmrini",
		"əmrinə",
		"əməklə",
		"əməldə",
		"əməlin",
		"əməyin",
		"ərimli",
		"ərinin",
		"əriyib",
		"əriyir",
		"ərsəyə",
		"ərəbcə",
		"əsasda",
		"əsaslı",
		"əsasən",
		"əsgəri",
		"əsilli",
		"əsirdi",
		"əslini",
		"əslinə",
		"əsrdən",
		"əsrlər",
		"əsərdə",
		"əsərin",
		"əsərlə",
		"ətinin",
		"ətirli",
		"ətrafa",
		"ətrafı",
		"əvvəla",
		"əvvəli",
		"əvvələ",
		"əxlaqa",
		"əxlaqi",
		"əxlaqı",
		"əyalət",
		"əzabla",
		"əzilir"
	],
	7: [
		"abadlıq",
		"abidlik",
		"abidəni",
		"abidəsi",
		"abonent",
		"abunəçi",
		"abxazca",
		"abırsız",
		"abşeron",
		"acarlar",
		"acgödən",
		"acgözlü",
		"acizanə",
		"acizlik",
		"acımsov",
		"acımtıl",
		"acından",
		"acınmaq",
		"acıqmaq",
		"acısını",
		"acıtmaq",
		"acıtərə",
		"acışmaq",
		"adaları",
		"adamcıl",
		"adamcıq",
		"adamdan",
		"adamdır",
		"adamlar",
		"adamlıq",
		"adamsız",
		"adamına",
		"adamını",
		"adapter",
		"adasına",
		"adaçayı",
		"adaşlıq",
		"addamaq",
		"addımda",
		"addımın",
		"adekvat",
		"adillik",
		"adlanan",
		"adlanır",
		"adlarla",
		"adların",
		"admiral",
		"adqoydu",
		"adqoyma",
		"advokat",
		"adından",
		"adınızı",
		"adətdir",
		"adətlər",
		"adətsiz",
		"afinada",
		"aforizm",
		"ailədən",
		"ailələr",
		"ailəmiz",
		"ailənin",
		"aktları",
		"aktrisa",
		"alandan",
		"alanlar",
		"alarkən",
		"aldılar",
		"aldıqda",
		"aldığım",
		"aliliyi",
		"alimlik",
		"alimlər",
		"allahla",
		"allahım",
		"allahın",
		"almadan",
		"almamaq",
		"almaqda",
		"almaqla",
		"almasaq",
		"almayan",
		"almayıb",
		"almağın",
		"almışam",
		"almışdı",
		"almışıq",
		"altıncı",
		"altında",
		"alıblar",
		"alınmaz",
		"alınmır",
		"alınmış",
		"alırdım",
		"alırdıq",
		"alırlar",
		"alışqan",
		"aləmini",
		"aləminə",
		"alətlər",
		"amansız",
		"amerika",
		"amildir",
		"amillər",
		"anadolu",
		"anaları",
		"analizi",
		"analoji",
		"analoqu",
		"anasına",
		"anasını",
		"andiçmə",
		"andıran",
		"andırır",
		"anladım",
		"anladır",
		"anlamaq",
		"anlamda",
		"anlaqlı",
		"anlarda",
		"anlayan",
		"anlayıb",
		"anlayır",
		"anlayış",
		"anlaşma",
		"ansambl",
		"aparatı",
		"apardıq",
		"aparmaq",
		"aparmış",
		"aparsaq",
		"aparıcı",
		"aparıla",
		"apreldə",
		"aprelin",
		"aptekçi",
		"araclar",
		"aralıda",
		"arasına",
		"arasını",
		"arayışı",
		"ardıcıl",
		"ardınca",
		"armatur",
		"artacaq",
		"artaraq",
		"artisti",
		"artması",
		"artmağa",
		"artıran",
		"artırar",
		"artırdı",
		"artırıb",
		"artırır",
		"arvadın",
		"arxadan",
		"arxayın",
		"arzular",
		"asandan",
		"asandır",
		"asayişi",
		"asiyada",
		"asılmış",
		"asılqan",
		"atanlar",
		"atanızı",
		"atasına",
		"atasını",
		"atdılar",
		"atmasaq",
		"atmayıb",
		"atıblar",
		"atılmış",
		"atırlar",
		"atəşinə",
		"atəşkəs",
		"avtobus",
		"avtomat",
		"axirətə",
		"axtaran",
		"axtarıb",
		"axtarır",
		"axtarış",
		"axınına",
		"axırına",
		"ayağına",
		"ayağını",
		"aydınca",
		"aylarda",
		"aylarla",
		"ayrılan",
		"ayrılma",
		"ayrılıb",
		"ayrılıq",
		"ayrılır",
		"aysunun",
		"ayından",
		"ayırmaq",
		"ayələri",
		"azaddır",
		"azadlıq",
		"azaldır",
		"azyaşlı",
		"azından",
		"açarlar",
		"açarsız",
		"açmaqla",
		"açıblar",
		"açılmaq",
		"açılmış",
		"açılsın",
		"açılışı",
		"açıqdır",
		"açıqgöz",
		"açıqlıq",
		"açığını",
		"ağaclar",
		"ağaclıq",
		"ağappaq",
		"ağarmaq",
		"ağartma",
		"ağayana",
		"ağbalıq",
		"ağbağır",
		"ağbaşlı",
		"ağbəniz",
		"ağciyər",
		"ağdamlı",
		"ağdamın",
		"ağgünlü",
		"ağlamaq",
		"ağlayan",
		"ağlayır",
		"ağlağan",
		"ağlaşma",
		"ağmatan",
		"ağnamaq",
		"ağndıcı",
		"ağqovaq",
		"ağqızıl",
		"ağrılar",
		"ağrımaq",
		"ağrısız",
		"ağrıyan",
		"ağsaçlı",
		"ağsifət",
		"ağsöyüd",
		"ağtikan",
		"ağtəhər",
		"ağyallı",
		"ağyanız",
		"ağzıbir",
		"ağzıboş",
		"ağzında",
		"ağılsız",
		"ağımsov",
		"ağımtıl",
		"ağırdır",
		"ağırlıq",
		"ağızdan",
		"ağızlıq",
		"ağızucu",
		"aşağıda",
		"aşıladı",
		"bacaran",
		"bacarıq",
		"bacarır",
		"bakıdan",
		"bakının",
		"balansı",
		"balıqçı",
		"balığın",
		"banklar",
		"barmağı",
		"barışıq",
		"basaraq",
		"baxacaq",
		"baxanda",
		"baxaraq",
		"baxmalı",
		"baxması",
		"baxmağa",
		"baxmağı",
		"baxılıb",
		"baxılır",
		"baxıram",
		"baxırdı",
		"baxırıq",
		"baxışda",
		"bayrama",
		"bayramı",
		"bayrağa",
		"bayrağı",
		"bayırda",
		"bazanın",
		"bazarda",
		"bazarın",
		"bağladı",
		"bağlama",
		"bağlaya",
		"bağında",
		"başladı",
		"başları",
		"başlasa",
		"başlaya",
		"başlıca",
		"başlığı",
		"başqanı",
		"başqası",
		"başçısı",
		"başında",
		"başının",
		"başınız",
		"belçika",
		"belədir",
		"beyinin",
		"beyninə",
		"beşikdə",
		"beşinci",
		"bildiri",
		"bildirə",
		"bildiyi",
		"bilgiyə",
		"bilikli",
		"bilinci",
		"bilincə",
		"bilinən",
		"bilirdi",
		"bilirik",
		"bilirəm",
		"biliyin",
		"bilmədi",
		"bilməli",
		"bilməsi",
		"bilməsə",
		"bilməyə",
		"bilyard",
		"biləcək",
		"biləndə",
		"bilərdi",
		"bilərik",
		"bilərin",
		"bilərmi",
		"bilərək",
		"bilərəm",
		"biləsən",
		"binalar",
		"binanın",
		"bioloji",
		"birbaşa",
		"biridir",
		"birimiz",
		"birinci",
		"birində",
		"birinin",
		"biriniz",
		"birliyi",
		"birliyə",
		"birləşə",
		"bitirdi",
		"bitirib",
		"bitirir",
		"bitirən",
		"bitərəf",
		"bizdəki",
		"bizimlə",
		"bizləri",
		"bizlərə",
		"blokuna",
		"borclar",
		"borcunu",
		"borular",
		"bosniya",
		"boynuna",
		"boyunca",
		"boyunda",
		"boşluğu",
		"brauzer",
		"brifinq",
		"bugünkü",
		"bulunan",
		"bulunub",
		"bunlara",
		"bunları",
		"bununla",
		"buradan",
		"buranun",
		"buranın",
		"buraxan",
		"buraxıb",
		"burdaca",
		"buyurar",
		"buyurdu",
		"buyurub",
		"buyurun",
		"buyurur",
		"böhranı",
		"bölgüsü",
		"bölgədə",
		"bölgəsi",
		"bölgəyə",
		"bölmədə",
		"bölməsi",
		"bölündü",
		"bölünüb",
		"bölünür",
		"bölünən",
		"böyümək",
		"böyüyüb",
		"böyüyür",
		"böyüyən",
		"büdcəsi",
		"büdcəyə",
		"bütləri",
		"bütlərə",
		"bədbəxt",
		"bədəndə",
		"bədənin",
		"bəladan",
		"bəlalar",
		"bəlanın",
		"bəndinə",
		"bənzəri",
		"bərabər",
		"bəridir",
		"bərkdən",
		"bərpası",
		"bərəkət",
		"bəxtinə",
		"bəyanat",
		"bəyənib",
		"camaata",
		"camaatı",
		"canavar",
		"canları",
		"cavabın",
		"cibimdə",
		"cinayət",
		"cinlərə",
		"cismani",
		"coğrafi",
		"cümlədə",
		"cümləli",
		"cümləni",
		"cümləsi",
		"cümləyə",
		"cırtdan",
		"cəbhədə",
		"cəbhəyə",
		"cədvəli",
		"cəhalət",
		"cəhdlər",
		"cəlalət",
		"cənnəti",
		"cənnətə",
		"cərəyan",
		"cəsarət",
		"cəzanın",
		"dairədə",
		"dairəsi",
		"dairəvi",
		"dalınca",
		"danışan",
		"danışaq",
		"danışdı",
		"danışıb",
		"danışım",
		"danışın",
		"danışıq",
		"danışır",
		"dastanı",
		"davamlı",
		"daxildə",
		"daxilən",
		"dayanan",
		"dayandı",
		"dayanıb",
		"dayanır",
		"dayının",
		"dağlara",
		"dağları",
		"dağıdır",
		"dağıldı",
		"dağılıb",
		"daşları",
		"daşımaq",
		"daşımır",
		"daşınan",
		"daşınar",
		"daşınır",
		"daşıyan",
		"daşıyır",
		"dedikdə",
		"dedilər",
		"dediniz",
		"dediyim",
		"demirik",
		"demirəm",
		"demişdi",
		"demişəm",
		"demədim",
		"demədən",
		"deməklə",
		"deməsin",
		"deməyib",
		"deməyin",
		"deputat",
		"deyildi",
		"deyilib",
		"deyilik",
		"deyilir",
		"deyilmi",
		"deyilsə",
		"deyiləm",
		"deyilən",
		"deyirdi",
		"deyirik",
		"deyirsə",
		"deyirəm",
		"deyəcək",
		"deyəndə",
		"deyərdi",
		"deyərək",
		"deyəsən",
		"dialoqa",
		"dialoqu",
		"dilidir",
		"dilimiz",
		"dilində",
		"dilinin",
		"dilləri",
		"dillərə",
		"dilənçi",
		"diləyən",
		"dinamik",
		"dinclik",
		"dinimiz",
		"dinində",
		"dininin",
		"dinləri",
		"dinlərə",
		"diplomu",
		"diqqəti",
		"diqqətə",
		"diribaş",
		"dirilib",
		"dirilik",
		"dirənib",
		"diyarın",
		"diyevin",
		"doktoru",
		"dolaşan",
		"dolaşıq",
		"dolaşır",
		"dollara",
		"dolları",
		"doludur",
		"dostlar",
		"dostluq",
		"dostuna",
		"dostunu",
		"doğrusu",
		"doğulan",
		"doğulub",
		"doğulur",
		"doğuran",
		"doğurub",
		"doğurur",
		"duaları",
		"duasını",
		"dumanlı",
		"dunyasi",
		"duracaq",
		"duraraq",
		"durduğu",
		"durması",
		"durmağa",
		"durumda",
		"durumun",
		"dururam",
		"dururdu",
		"dururuq",
		"duyulan",
		"duyulur",
		"duyuram",
		"duyurdu",
		"duyuruq",
		"döndərə",
		"dönməyə",
		"dönəcək",
		"dönəmdə",
		"dövləti",
		"dövlətə",
		"dövranı",
		"dövrdən",
		"dövrlər",
		"dövrünü",
		"dövrünə",
		"döyürdü",
		"döyüşdə",
		"döyüşçü",
		"dözümlü",
		"dünyada",
		"dünyadı",
		"dünyamı",
		"dünyanı",
		"dünyası",
		"dünyaya",
		"dünyəvi",
		"dünənin",
		"dünənki",
		"düyməni",
		"düyməsi",
		"düzündə",
		"düzəldi",
		"düzəlib",
		"düzəlir",
		"düzəliş",
		"düzələn",
		"düşdüyü",
		"düşməli",
		"düşməni",
		"düşmənə",
		"düşməsi",
		"düşməyi",
		"düşməyə",
		"düşülür",
		"düşülən",
		"düşüncə",
		"düşünüb",
		"düşünün",
		"düşünür",
		"düşünən",
		"düşürdü",
		"düşürük",
		"düşürəm",
		"düşəcək",
		"düşəndə",
		"düşərdi",
		"düşərgə",
		"düşərək",
		"dəftəri",
		"dəfədir",
		"dəfədən",
		"dəhlizi",
		"dəhşətə",
		"dəlalət",
		"dəlilik",
		"dənizdə",
		"dənizin",
		"dənizlə",
		"dənizçi",
		"dərbənd",
		"dərdimi",
		"dərdini",
		"dərdinə",
		"dərdlər",
		"dərinin",
		"dərkinə",
		"dərmana",
		"dərmanı",
		"dərslik",
		"dəstəni",
		"dəstəsi",
		"dəstəyi",
		"dəstəyə",
		"dəyirmi",
		"dəyişdi",
		"dəyişib",
		"dəyişir",
		"dəyişən",
		"dəyərli",
		"edibdir",
		"ediblər",
		"edilmir",
		"edilmiş",
		"edilmək",
		"edilməz",
		"edilsin",
		"edirdik",
		"edirdim",
		"edirlər",
		"edirmiş",
		"edirsiz",
		"edirsən",
		"edəcəyi",
		"edəndir",
		"edəndən",
		"edənlər",
		"edərdik",
		"edərdim",
		"edərkən",
		"edərlər",
		"effekti",
		"ehtimal",
		"ehtiram",
		"ehtiras",
		"ehtiyac",
		"ehtiyat",
		"ekoloji",
		"ekranda",
		"ekspert",
		"elanlar",
		"element",
		"elmində",
		"elminin",
		"elmləri",
		"elədiyi",
		"elələri",
		"eləməyə",
		"endirim",
		"estetik",
		"estrada",
		"etdikcə",
		"etdikdə",
		"etdilər",
		"etdiniz",
		"etdirdi",
		"etdirib",
		"etdirir",
		"etdirək",
		"etdirən",
		"etdiyim",
		"etdiyin",
		"etibari",
		"etibarı",
		"etikası",
		"etimadı",
		"etmirdi",
		"etmirik",
		"etmirəm",
		"etmişdi",
		"etmişik",
		"etmişəm",
		"etmədim",
		"etmədən",
		"etməkdə",
		"etməklə",
		"etməmiş",
		"etməmək",
		"etmənin",
		"etmərik",
		"etməsin",
		"etməyib",
		"etməyin",
		"etməyən",
		"etsələr",
		"etsəniz",
		"evimizə",
		"evindən",
		"evinizə",
		"evlilik",
		"evlənib",
		"evlənir",
		"evlənən",
		"evlərdə",
		"evlərin",
		"eynidir",
		"eynilik",
		"eşitdik",
		"eşitdim",
		"eşitmək",
		"faciəli",
		"faciəsi",
		"faizdir",
		"faizdən",
		"faizini",
		"faizinə",
		"faizlik",
		"faizlər",
		"faktdan",
		"faktdır",
		"faktiki",
		"faktlar",
		"faktoru",
		"faktına",
		"faktını",
		"faydalı",
		"faydası",
		"federal",
		"fikirdə",
		"fikirli",
		"fikirlə",
		"fikrimi",
		"fikrini",
		"fikrinə",
		"filminə",
		"filmlər",
		"filosof",
		"firavan",
		"firması",
		"folklor",
		"fondlar",
		"fonetik",
		"fonunda",
		"formada",
		"formalı",
		"forması",
		"formatı",
		"forumda",
		"fransız",
		"frazanı",
		"futbola",
		"futbolu",
		"fəaldır",
		"fəallıq",
		"fəlakət",
		"fəlsəfi",
		"fəlsəfə",
		"fərdlər",
		"fərmanı",
		"fərqini",
		"fərqinə",
		"fərqlər",
		"fəsildə",
		"gecələr",
		"gecənin",
		"gedirdi",
		"gedirik",
		"gedirsə",
		"gedirəm",
		"gedişlə",
		"gedəcək",
		"gedəndə",
		"gedərdi",
		"gedərsə",
		"gedərək",
		"gedərəm",
		"genetik",
		"getdiyi",
		"getmədi",
		"getməli",
		"getməsi",
		"getməsə",
		"getməyi",
		"getməyə",
		"geyimin",
		"geyimli",
		"geyimlə",
		"girməsi",
		"girməyə",
		"girovun",
		"girəndə",
		"gizlədə",
		"göndərə",
		"gördüyü",
		"görkəmi",
		"görmədi",
		"görməli",
		"görməsi",
		"görməsə",
		"görməyi",
		"görməyə",
		"görüldü",
		"görülüb",
		"görülür",
		"görülən",
		"görüncə",
		"göründü",
		"görünsə",
		"görünür",
		"görünüş",
		"görünən",
		"görürdü",
		"görürük",
		"görürəm",
		"görüşdü",
		"görüşdə",
		"görüşüb",
		"görüşün",
		"görüşür",
		"görüşək",
		"görüşən",
		"görəcək",
		"görədir",
		"görəndə",
		"görərik",
		"görəsən",
		"göstərə",
		"götürdü",
		"götürmə",
		"götürüb",
		"götürür",
		"götürək",
		"götürən",
		"göydəki",
		"göyləri",
		"göylərə",
		"gözlədi",
		"gözləmə",
		"gözləri",
		"gözlərə",
		"gözləyə",
		"gözümün",
		"gözündə",
		"gözünün",
		"gözünüz",
		"gözəlin",
		"gözətçi",
		"gücləri",
		"gücündə",
		"gücünün",
		"gülməli",
		"gülməyə",
		"gülürdü",
		"gündüzü",
		"gündüzə",
		"gündəmə",
		"günləri",
		"günlərə",
		"günorta",
		"günüdür",
		"günümüz",
		"günündə",
		"gününün",
		"günədək",
		"günəşin",
		"güzəştə",
		"gəldiyi",
		"gəlincə",
		"gəlinin",
		"gəlinir",
		"gəlinən",
		"gəlirdi",
		"gəlirik",
		"gəlirin",
		"gəlirli",
		"gəlirlə",
		"gəlirmi",
		"gəlirsə",
		"gəlmədi",
		"gəlməli",
		"gəlməsi",
		"gəlməsə",
		"gəlməyi",
		"gəlməyə",
		"gələcək",
		"gələndə",
		"gələrsə",
		"gələrək",
		"gələsən",
		"gənclik",
		"gənclər",
		"gəncədə",
		"gəncəni",
		"gəncəyə",
		"gərəkdi",
		"gərəkli",
		"gətirdi",
		"gətirib",
		"gətirin",
		"gətirir",
		"gətirən",
		"gətirər",
		"gəzirdi",
		"gəzməyə",
		"hakimin",
		"halbuki",
		"hallara",
		"halları",
		"halında",
		"hamıdan",
		"hamımız",
		"hamının",
		"hamınız",
		"hansını",
		"hansısa",
		"haqları",
		"haqqına",
		"haqqını",
		"haqında",
		"haradan",
		"hardasa",
		"harvard",
		"hasilat",
		"havadan",
		"havanın",
		"hazıram",
		"hazırda",
		"hazırki",
		"hazırkı",
		"hazırıq",
		"hesabat",
		"hesabda",
		"hesabla",
		"hesabın",
		"heykəli",
		"heyrətə",
		"heyvana",
		"heyvanı",
		"heyətdə",
		"heyətin",
		"heyətlə",
		"hidayət",
		"hikməti",
		"hissini",
		"hisslər",
		"hissədə",
		"hissəni",
		"hissəsi",
		"hissəyə",
		"holland",
		"hökmdar",
		"hökmran",
		"hökmünü",
		"hökmünə",
		"hökumət",
		"hökümət",
		"hörməti",
		"hörmətə",
		"hüquqda",
		"hüququn",
		"həbsdən",
		"həcmini",
		"həcminə",
		"həddini",
		"həddinə",
		"hədisdə",
		"hədiyyə",
		"həftədə",
		"həftəsi",
		"həftəyə",
		"həkimin",
		"həllini",
		"həllinə",
		"hələlik",
		"həmkarı",
		"həmsədr",
		"həqiqət",
		"hərisdi",
		"hərçənd",
		"hərəkat",
		"hərəkət",
		"hərənin",
		"həvəslə",
		"həyasız",
		"həyatda",
		"həyatla",
		"həyatım",
		"həyatın",
		"həyəcan",
		"həyətdə",
		"həyətin",
		"ibadəti",
		"ibadətə",
		"iblisin",
		"ibtidai",
		"icarəyə",
		"icazəsi",
		"iclasda",
		"iclasın",
		"icmanın",
		"ictimai",
		"idarəni",
		"idarəsi",
		"idarəyə",
		"iddialı",
		"iddiası",
		"ideyanı",
		"ideyası",
		"ideyaya",
		"idmanla",
		"idmançı",
		"idmanın",
		"ifadəli",
		"ifadəni",
		"ifadəsi",
		"ifaçısı",
		"ikisini",
		"ikisinə",
		"ildırım",
		"ilindən",
		"ilkində",
		"illərdi",
		"illərdə",
		"illərin",
		"illərlə",
		"iləllah",
		"imandan",
		"imkanlı",
		"imkanım",
		"imkanın",
		"imtahan",
		"imtiyaz",
		"imzalar",
		"inamını",
		"inandıq",
		"inanmaq",
		"inanmır",
		"incidir",
		"indeksi",
		"indidən",
		"indinin",
		"ingilis",
		"inkişaf",
		"inqilab",
		"insafən",
		"insanda",
		"insanla",
		"insanmı",
		"insanın",
		"intervü",
		"intihar",
		"intiqam",
		"intizam",
		"iqtidar",
		"iradlar",
		"iradını",
		"iradəni",
		"iradəsi",
		"irandan",
		"iraqdan",
		"irsinin",
		"irəlidə",
		"irəliyə",
		"isazadə",
		"islahat",
		"islamda",
		"islamın",
		"israfil",
		"israilə",
		"israrlı",
		"istedad",
		"istehza",
		"istilik",
		"istinad",
		"istisna",
		"istədik",
		"istədim",
		"istəmir",
		"istəmiş",
		"istəmək",
		"istərdi",
		"istərsə",
		"istəsin",
		"istəsək",
		"istəsəm",
		"istəsən",
		"istəyib",
		"istəyim",
		"istəyin",
		"istəyir",
		"istəyən",
		"istəyər",
		"isveçdə",
		"isveçin",
		"isveçrə",
		"italiya",
		"italyan",
		"itirdik",
		"itirmir",
		"itirmiş",
		"itirmək",
		"itkilər",
		"ittifaq",
		"ittiham",
		"ixtisar",
		"ixtisas",
		"ixtiyar",
		"izahına",
		"izahını",
		"izləmək",
		"izləyib",
		"izləyir",
		"izləyən",
		"içindən",
		"içkilər",
		"içəridə",
		"iğtişaş",
		"işarəsi",
		"işgüzar",
		"işgəncə",
		"işimizi",
		"işindən",
		"işinizi",
		"işlədib",
		"işlədim",
		"işlədir",
		"işlədən",
		"işləmir",
		"işləmiş",
		"işləmək",
		"işlənib",
		"işlənir",
		"işlənən",
		"işlərdə",
		"işlərin",
		"işlərlə",
		"işləsin",
		"işləyib",
		"işləyir",
		"işləyən",
		"iştirak",
		"işçilər",
		"işğalçı",
		"işıqdan",
		"işıqsız",
		"işığına",
		"işığını",
		"jurnalı",
		"kadrlar",
		"kapital",
		"kartlar",
		"keçdiyi",
		"keçilir",
		"keçinib",
		"keçirdi",
		"keçirib",
		"keçirik",
		"keçirin",
		"keçirir",
		"keçirək",
		"keçirən",
		"keçmişi",
		"keçmişə",
		"keçmədi",
		"keçməli",
		"keçməsi",
		"keçməyə",
		"keçəcək",
		"keçəndə",
		"keçərdi",
		"keçərək",
		"kifayət",
		"kilsəsi",
		"kimidir",
		"kimilər",
		"kiminlə",
		"kiminsə",
		"kimliyi",
		"kimləri",
		"kimlərə",
		"kimsəni",
		"kimsəyə",
		"kimyası",
		"kimyəvi",
		"kitabda",
		"kitabça",
		"kitabın",
		"kişilər",
		"kişinin",
		"klassik",
		"klipini",
		"klublar",
		"kolbasa",
		"komanda",
		"kompakt",
		"konkret",
		"konsert",
		"koroğlu",
		"kubmetr",
		"kurslar",
		"kursuna",
		"kursunu",
		"kvadrat",
		"kökləri",
		"kökündə",
		"köləlik",
		"köməkçi",
		"köməyim",
		"köməyin",
		"könüllü",
		"körpüsü",
		"kürdlər",
		"kütləni",
		"kütləsi",
		"kütləvi",
		"kədərli",
		"kəlməsi",
		"kəmərin",
		"kənarda",
		"kəndini",
		"kəndinə",
		"kəndlər",
		"kəpənək",
		"kərbəla",
		"kəsildi",
		"kəsilib",
		"kəsilir",
		"kəsilmə",
		"kəsilən",
		"kəsərək",
		"latınca",
		"layiqli",
		"lazımdı",
		"lazımlı",
		"liberal",
		"liderin",
		"limanda",
		"limanın",
		"ləkələr",
		"lələnin",
		"lərinin",
		"ləyaqət",
		"ləzzəti",
		"ləğvini",
		"maaşını",
		"maddədə",
		"maddəni",
		"maddəsi",
		"maddəyə",
		"magistr",
		"mahnını",
		"mahnısı",
		"mahnıya",
		"maliyyə",
		"mallara",
		"malları",
		"manatla",
		"manatın",
		"maraqla",
		"maraqlı",
		"marağın",
		"markalı",
		"markası",
		"masallı",
		"masamız",
		"masanın",
		"mayında",
		"maşında",
		"maşınla",
		"melodik",
		"merinin",
		"metodik",
		"meydana",
		"meydanı",
		"meyilli",
		"meyxana",
		"miladin",
		"milliyə",
		"milləti",
		"millətə",
		"milyard",
		"milyona",
		"milyonu",
		"minimal",
		"minimum",
		"minməsi",
		"miqdarı",
		"misalda",
		"mitinqi",
		"mitinqə",
		"muğamla",
		"mötəbər",
		"mövqedə",
		"mövqeyi",
		"mövqeyə",
		"mövsümü",
		"mövzuda",
		"mövzulu",
		"mövzunu",
		"mövzusu",
		"mövzuya",
		"müalicə",
		"müasiri",
		"müavini",
		"müayinə",
		"mübariz",
		"mübarək",
		"mübtəda",
		"müdafiə",
		"müddəti",
		"müddətə",
		"mühacir",
		"mühitdə",
		"mühitin",
		"mükafat",
		"mülayim",
		"münasib",
		"mürəbbə",
		"müsahib",
		"müsibət",
		"müvafiq",
		"müxalif",
		"müxbiri",
		"müğənni",
		"müşayət",
		"müştəri",
		"müəllif",
		"müəllim",
		"müəyyən",
		"məbləği",
		"məcburi",
		"məclisi",
		"məcraya",
		"mədaxil",
		"məhkəmə",
		"məhsulu",
		"məhşərə",
		"məkanda",
		"məkanın",
		"məkkədə",
		"məkkəni",
		"məkkəyə",
		"məktubu",
		"məktəbi",
		"məktəbə",
		"məlumat",
		"mənalar",
		"mənasız",
		"mənbəyi",
		"mənbəyə",
		"mənfəət",
		"mənimlə",
		"məntiqi",
		"məntiqə",
		"məntəqə",
		"mənzili",
		"mənzilə",
		"mənzərə",
		"mənşəli",
		"mənşəyi",
		"məqamda",
		"məqamın",
		"məqsədi",
		"məqsədə",
		"məramla",
		"mərasim",
		"mərhələ",
		"mərkəzi",
		"mərkəzə",
		"mərtəbə",
		"məscidi",
		"məscidə",
		"məsihçi",
		"məskəni",
		"məsələn",
		"mətbuat",
		"mətləbə",
		"mətninə",
		"mətnlər",
		"məxsusi",
		"məzmunu",
		"məəttəl",
		"nabələd",
		"nalayiq",
		"namazın",
		"namizəd",
		"namuslu",
		"naməlum",
		"narahat",
		"natamam",
		"natəmiz",
		"nazirin",
		"nazirlə",
		"necədir",
		"neftdən",
		"neqativ",
		"nifrəti",
		"nikahın",
		"nikotin",
		"nitqini",
		"niyyəti",
		"nömrəli",
		"nömrəsi",
		"nöqtəsi",
		"növbədə",
		"növbəsi",
		"növbəti",
		"növbəyə",
		"növləri",
		"növlərə",
		"növüdür",
		"növündə",
		"növünün",
		"nüfuzlu",
		"nümayiş",
		"nədənsə",
		"nəfsini",
		"nəfsinə",
		"nəfərik",
		"nəfərin",
		"nəfərlə",
		"nəhayət",
		"nələrin",
		"nələrlə",
		"nənənin",
		"nənəylə",
		"nəsihət",
		"nəsildə",
		"nəslini",
		"nəslinə",
		"nəyinsə",
		"nəzarət",
		"nəzərdə",
		"nəzərlə",
		"nəşrinə",
		"nəşrlər",
		"obrazlı",
		"obrazın",
		"obyekti",
		"oktyabr",
		"olacağı",
		"olandan",
		"olandır",
		"olanlar",
		"olardım",
		"olardın",
		"olardıq",
		"olarkən",
		"olarlar",
		"olarsan",
		"olaydım",
		"olaylar",
		"olayını",
		"oldular",
		"oldunuz",
		"olduqca",
		"olduqda",
		"olduğum",
		"olduğun",
		"olmadan",
		"olmadım",
		"olmamaq",
		"olmamış",
		"olmaqda",
		"olmaqla",
		"olmasam",
		"olmasaq",
		"olmasın",
		"olmayan",
		"olmayıb",
		"olmayın",
		"olmazdı",
		"olmazın",
		"olmağım",
		"olmağın",
		"olmurdu",
		"olmuşam",
		"olmuşdu",
		"olmuşuq",
		"olsalar",
		"olsanız",
		"olsaydı",
		"olublar",
		"olunana",
		"olunanı",
		"olunası",
		"olunmaq",
		"olunmas",
		"olunmaz",
		"olunmur",
		"olunmuş",
		"olunsun",
		"olurdum",
		"olurlar",
		"olursan",
		"ondadır",
		"onillik",
		"onlarda",
		"onlarla",
		"onların",
		"optimal",
		"oradaca",
		"oradakı",
		"ordudan",
		"ordunun",
		"orkestr",
		"orqanın",
		"ortadan",
		"osetiya",
		"osmanlı",
		"otağına",
		"oturmaq",
		"oxucunu",
		"oxuduğu",
		"oxuması",
		"oxumağa",
		"oxumağı",
		"oxşamaq",
		"oxşayan",
		"oxşayır",
		"oynamaq",
		"oynayan",
		"oynayıb",
		"oynayır",
		"oyuncaq",
		"oyundan",
		"oyunlar",
		"oyununu",
		"ozünüzü",
		"oğlanla",
		"oğlanın",
		"oğlunun",
		"oğullar",
		"oğurluq",
		"oğuzlar",
		"paltarı",
		"paradda",
		"paralel",
		"parisdə",
		"partiya",
		"parçası",
		"pasport",
		"paytaxt",
		"payının",
		"pensiya",
		"peşəkar",
		"pilləsi",
		"pisliyi",
		"pisliyə",
		"planlar",
		"planına",
		"planını",
		"plastik",
		"poeması",
		"polisin",
		"polşada",
		"pomidor",
		"postuna",
		"pozitiv",
		"pozması",
		"pozmağa",
		"pozulan",
		"pozulub",
		"pozulur",
		"praktik",
		"praqada",
		"prefiks",
		"prinsip",
		"problem",
		"proqram",
		"prosesi",
		"prosesə",
		"pulları",
		"pulunun",
		"pəncərə",
		"qabaqda",
		"qabarıq",
		"qabları",
		"qadağan",
		"qadınla",
		"qadının",
		"qafqaza",
		"qafqazı",
		"qalacaq",
		"qalanda",
		"qalaraq",
		"qalarsa",
		"qaldıra",
		"qaldığı",
		"qalmadı",
		"qalmalı",
		"qalması",
		"qalmağa",
		"qalstuk",
		"qalxmaq",
		"qalırdı",
		"qalırıq",
		"qamətli",
		"qanunda",
		"qanunla",
		"qanunun",
		"qanında",
		"qanının",
		"qapıdan",
		"qapılar",
		"qapımız",
		"qapının",
		"qarabağ",
		"qaradan",
		"qaradağ",
		"qaralır",
		"qardaşa",
		"qardaşı",
		"qarının",
		"qarışdı",
		"qarışıb",
		"qarışıq",
		"qarşıda",
		"qarşısı",
		"qarşıya",
		"qastrol",
		"qatları",
		"qatılıb",
		"qatında",
		"qatırıq",
		"qayadan",
		"qayanın",
		"qaydada",
		"qaydanı",
		"qaydası",
		"qaydaya",
		"qaynağı",
		"qaytara",
		"qayğını",
		"qayğısı",
		"qayıdan",
		"qayıdıb",
		"qayıdır",
		"qayıtdı",
		"qazanan",
		"qazanar",
		"qazancı",
		"qazanda",
		"qazandı",
		"qazansa",
		"qazanıb",
		"qazanır",
		"qaçaraq",
		"qaçmağa",
		"qaçqını",
		"qeydlər",
		"qeyrəti",
		"qidanın",
		"qismini",
		"qiyamət",
		"qiyməti",
		"qiymətə",
		"qocalar",
		"qocalıb",
		"qocalıq",
		"qocanın",
		"qolları",
		"qolunun",
		"qonağın",
		"qonorar",
		"qorumaq",
		"qorunan",
		"qorunma",
		"qorunub",
		"qorunur",
		"qorusun",
		"qoruyan",
		"qoruyub",
		"qoruyun",
		"qoruyur",
		"qorxmaq",
		"qorxulu",
		"qorxunc",
		"qorxusu",
		"qorxuya",
		"qoyacaq",
		"qoyaraq",
		"qoyduğu",
		"qoymağa",
		"qoynuna",
		"qoyulan",
		"qoyuldu",
		"qoyulsa",
		"qoyulub",
		"qoyulur",
		"qoyuram",
		"qoyurdu",
		"qoşulan",
		"qoşuldu",
		"qoşulma",
		"qoşulub",
		"qoşulur",
		"qruplar",
		"qrupuna",
		"qrupunu",
		"qulları",
		"qulluğu",
		"quranda",
		"quranın",
		"quraraq",
		"qurbanı",
		"qurbağa",
		"qurduğu",
		"qurması",
		"qurmağa",
		"qurtara",
		"qurulan",
		"quruldu",
		"qurulub",
		"qurulur",
		"quruluş",
		"qurumda",
		"qurumla",
		"qurumun",
		"qurumuş",
		"quruyub",
		"qüdrəti",
		"qüvvədə",
		"qüvvəsi",
		"qüvvəyə",
		"qılıncı",
		"qınamaq",
		"qınayan",
		"qınayır",
		"qıraqda",
		"qırmızı",
		"qısılıb",
		"qızları",
		"qızının",
		"qəbahət",
		"qəbrini",
		"qəbrinə",
		"qədrini",
		"qədərki",
		"qəhqəhə",
		"qəlbini",
		"qəlbinə",
		"qələmin",
		"qənaəti",
		"qənaətə",
		"qənimət",
		"qərarla",
		"qərarlı",
		"qərarın",
		"qərəzli",
		"qətlinə",
		"qətnamə",
		"qəzanın",
		"qəzetdə",
		"qəzetin",
		"radikal",
		"radiosu",
		"rahatam",
		"ramazan",
		"rayonda",
		"rayonun",
		"razıdır",
		"razılıq",
		"razıyam",
		"razıyıq",
		"realist",
		"realizə",
		"reallıq",
		"redaktə",
		"regiona",
		"regionu",
		"rejimin",
		"rektoru",
		"rolları",
		"rolunda",
		"rolunun",
		"romanda",
		"romanın",
		"ruhları",
		"ruhunda",
		"ruhunun",
		"rübündə",
		"rəbbini",
		"rəbbinə",
		"rəbiyyə",
		"rəhbəri",
		"rəhbərə",
		"rəhmətə",
		"rəkətli",
		"rənginə",
		"rənglər",
		"rəqabət",
		"rəqibin",
		"rəqəmin",
		"rəqəmli",
		"rəsmini",
		"rəsmisi",
		"rəsulun",
		"rəvayət",
		"rəyasət",
		"rəyinin",
		"rəğbəti",
		"saatdan",
		"saatlıq",
		"saatını",
		"sabunçu",
		"sadədir",
		"sadəlik",
		"sahədir",
		"sahələr",
		"sahənin",
		"sairəni",
		"sakitcə",
		"salacaq",
		"salamat",
		"salanda",
		"salaraq",
		"salavat",
		"saldığı",
		"salması",
		"salmağa",
		"salonda",
		"salınan",
		"salındı",
		"salınıb",
		"salınır",
		"salıram",
		"salırdı",
		"sammiti",
		"sanitar",
		"saqqalı",
		"sarayda",
		"sarayın",
		"sarıdan",
		"satirik",
		"satmağa",
		"satılan",
		"satılıb",
		"satılır",
		"savadlı",
		"saxladı",
		"saxlaya",
		"sayaraq",
		"saydığı",
		"sayılan",
		"sayılır",
		"sayında",
		"sayının",
		"sayıram",
		"sayırdı",
		"sayırıq",
		"sazişin",
		"sektoru",
		"seminar",
		"senator",
		"sevdiyi",
		"sevgisi",
		"sevilən",
		"sevimli",
		"sevinci",
		"sevindi",
		"sevinir",
		"sevirdi",
		"sevirik",
		"sevirəm",
		"sevərdi",
		"seçdiyi",
		"seçildi",
		"seçilib",
		"seçilir",
		"seçilən",
		"seçkidə",
		"seçkini",
		"seçkisi",
		"seçkiyə",
		"seçəcək",
		"seçəndə",
		"sifariş",
		"silahla",
		"silahlı",
		"silahın",
		"silsilə",
		"simvolu",
		"sinanın",
		"sinifdə",
		"sinonim",
		"sintezi",
		"siqaret",
		"sirayət",
		"sirləri",
		"sirrini",
		"sistemi",
		"sistemə",
		"sitayiş",
		"siyasət",
		"sizinlə",
		"sizləri",
		"sizlərə",
		"siğənin",
		"skripka",
		"solisti",
		"sonadək",
		"sonrakı",
		"sonrası",
		"sonraya",
		"sonuncu",
		"sonunda",
		"sonunun",
		"soruşdu",
		"soruşur",
		"soğanın",
		"spikeri",
		"spirtli",
		"sponsor",
		"stadion",
		"statusu",
		"sualdır",
		"suallar",
		"sualına",
		"sualını",
		"subyekt",
		"suların",
		"surənin",
		"surətdə",
		"surətlə",
		"susursa",
		"suyumuz",
		"suyunun",
		"söhbəti",
		"söhbətə",
		"söylədi",
		"söyləyə",
		"söyürdü",
		"sözləri",
		"sözlərə",
		"sözüdür",
		"sözümün",
		"sözündə",
		"sözünün",
		"sözünüz",
		"süfrəsi",
		"sükutla",
		"sürdüyü",
		"sürpriz",
		"sürülüb",
		"sürülən",
		"sürürdü",
		"sürətli",
		"sürətlə",
		"sütunda",
		"sütunun",
		"sınamaq",
		"sınayıb",
		"sıradan",
		"sığorta",
		"səadətə",
		"səbayel",
		"səbirli",
		"səbirlə",
		"səbəblə",
		"səcdəyə",
		"sədaqət",
		"sədləri",
		"sədrini",
		"sədrinə",
		"sədrlik",
		"sədərək",
		"səfirin",
		"səfərdə",
		"səfərin",
		"səfərlə",
		"səhhəti",
		"səhiyyə",
		"səhnədə",
		"səhnəyə",
		"səhrada",
		"səhvlər",
		"səninlə",
		"sənəddə",
		"sənədin",
		"sənədli",
		"sənədlə",
		"sənətdə",
		"sənətin",
		"sənətçi",
		"sərbəst",
		"sərgidə",
		"sərgisi",
		"sərhədi",
		"sərmayə",
		"sərvəti",
		"səsinin",
		"səsiniz",
		"səsləri",
		"səviyyə",
		"səyahət",
		"səyləri",
		"taktika",
		"taktiki",
		"taleyin",
		"tamamən",
		"tanrıya",
		"tanıdan",
		"tanımaq",
		"tanımır",
		"tanınan",
		"tanındı",
		"tanınıb",
		"tanınır",
		"tanıyan",
		"tanıyır",
		"tapacaq",
		"tapança",
		"taparaq",
		"tapmalı",
		"tapması",
		"tapmağa",
		"tapılan",
		"tapıldı",
		"tapılıb",
		"tarixdə",
		"tarixin",
		"tarixli",
		"tarixçi",
		"tarixən",
		"taxtına",
		"tayfası",
		"tayında",
		"teatrda",
		"teatrın",
		"telefon",
		"tenderə",
		"termini",
		"terrora",
		"testdən",
		"texnika",
		"texniki",
		"ticarət",
		"tiflisə",
		"tikanlı",
		"tikdiyi",
		"tikildi",
		"tikilib",
		"tikilir",
		"tikilən",
		"tikinti",
		"tikməyə",
		"tipində",
		"tirajla",
		"torpağa",
		"torpağı",
		"toxunan",
		"toxundu",
		"toxunub",
		"toxunur",
		"tranzit",
		"trilyon",
		"tutacaq",
		"tutalım",
		"tutaraq",
		"tutarlı",
		"tutduğu",
		"tutmadı",
		"tutmalı",
		"tutması",
		"tutmağa",
		"tutmağı",
		"tutulan",
		"tutulsa",
		"tutulub",
		"tutulur",
		"tuturam",
		"tuturdu",
		"tuturuq",
		"tökülür",
		"tökülən",
		"törədib",
		"törədir",
		"törədən",
		"tövbəni",
		"tövsiyə",
		"türkiyə",
		"türklər",
		"türmədə",
		"türməyə",
		"tısbağa",
		"təbiəti",
		"təbliği",
		"təbrizi",
		"təcavüz",
		"təcrübə",
		"tədbiqi",
		"tədbiri",
		"tədbirə",
		"tədqiqi",
		"tədrici",
		"tədrisi",
		"tədrisə",
		"təfriqə",
		"təfsiri",
		"təhlili",
		"təhlükə",
		"təhriki",
		"təhsili",
		"təhsilə",
		"təkidlə",
		"təklifi",
		"təklifə",
		"təkrarı",
		"təlimat",
		"tələbat",
		"tələblə",
		"tələsik",
		"tələsin",
		"tələsir",
		"təmasda",
		"təminat",
		"tənqidi",
		"tənqidə",
		"təntənə",
		"təqsiri",
		"təqvimi",
		"tərbiyə",
		"tərcümə",
		"tərkibi",
		"tərsinə",
		"tərtibi",
		"tərzini",
		"tərzinə",
		"tərəfdə",
		"tərəfin",
		"tərəfli",
		"tərəflə",
		"tərəqqi",
		"təsadüf",
		"təsdiqi",
		"təsirin",
		"təsirli",
		"təsviri",
		"təsəlli",
		"tətbiqi",
		"təxmini",
		"təyinat",
		"təyyarə",
		"təzadlı",
		"təzahür",
		"təzyiqi",
		"təzədən",
		"təzəlik",
		"təşkili",
		"təşvişə",
		"təəccüb",
		"təəssüf",
		"udurlar",
		"udursuz",
		"uduzmaq",
		"ukrayna",
		"ulduzun",
		"unutmaq",
		"uydurma",
		"uzaqdan",
		"uzaqdır",
		"uzatmaq",
		"uzlaşma",
		"uğramış",
		"uğrayan",
		"uğrunda",
		"uğurdur",
		"uğurlar",
		"uğursuz",
		"uğurunu",
		"uşaqdan",
		"uşaqdır",
		"uşaqlar",
		"uşaqlıq",
		"uşağını",
		"valyuta",
		"vararaq",
		"variant",
		"varlığı",
		"varşava",
		"vaxtdan",
		"vaxtdır",
		"vaxtilə",
		"vaxtlar",
		"vaxtını",
		"verdiyi",
		"vergisi",
		"verildi",
		"verilib",
		"verilir",
		"veriliş",
		"verilmə",
		"verilsə",
		"verilən",
		"verirdi",
		"veririk",
		"verirmi",
		"verirsə",
		"verirəm",
		"vermədi",
		"verməli",
		"verməsi",
		"verməsə",
		"verməyi",
		"verməyə",
		"versiya",
		"verəcək",
		"verəcəm",
		"verəndə",
		"verərdi",
		"verərik",
		"verərsə",
		"verərək",
		"verərəm",
		"verəsən",
		"vicdanı",
		"vilayət",
		"virtual",
		"vuracaq",
		"vuraraq",
		"vurduğu",
		"vurması",
		"vurmağa",
		"vurulan",
		"vurulub",
		"vurulur",
		"vururdu",
		"vədləri",
		"vəhdəti",
		"vəkilin",
		"vəkillə",
		"vərdişi",
		"vəsaiti",
		"vəsaitə",
		"vəsatət",
		"vətəndə",
		"vətənim",
		"vətənin",
		"vətənlə",
		"xahişlə",
		"xalisin",
		"xalları",
		"xalqdan",
		"xalqlar",
		"xalqına",
		"xalqını",
		"xanlığı",
		"xanımla",
		"xanımın",
		"xanəndə",
		"xanənin",
		"xaricdə",
		"xeyirdə",
		"xeyirli",
		"xeyirlə",
		"xeyrini",
		"xeyrinə",
		"xidməti",
		"xidmətə",
		"xoldinq",
		"xoşbəxt",
		"xüsusən",
		"xəbərdə",
		"xəbərim",
		"xəbərin",
		"xəbərlə",
		"xərclər",
		"xərçəng",
		"xəsarət",
		"xəstəsi",
		"xəstəyə",
		"xətləri",
		"xəttini",
		"xəttinə",
		"xəyanət",
		"xəzərdə",
		"xəzərin",
		"yabançı",
		"yaddaşa",
		"yaddaşı",
		"yadlara",
		"yadımda",
		"yadında",
		"yalançı",
		"yalanın",
		"yanacaq",
		"yanaşan",
		"yanaşaq",
		"yanaşma",
		"yanaşır",
		"yandıra",
		"yanımda",
		"yanında",
		"yanıram",
		"yanırdı",
		"yaradan",
		"yaradaq",
		"yaradar",
		"yaradıb",
		"yaradın",
		"yaradır",
		"yaramaz",
		"yaranan",
		"yarandı",
		"yaranma",
		"yaransa",
		"yaranıb",
		"yaranın",
		"yaranır",
		"yaraqlı",
		"yararlı",
		"yaratdı",
		"yaraşan",
		"yardıma",
		"yardımı",
		"yarpağı",
		"yarışda",
		"yasamal",
		"yataqda",
		"yatması",
		"yatmağa",
		"yatırdı",
		"yaxında",
		"yaxşısı",
		"yaydığı",
		"yayılan",
		"yayıldı",
		"yayılıb",
		"yayılır",
		"yayımın",
		"yayınan",
		"yayında",
		"yazanda",
		"yazaram",
		"yazaraq",
		"yazdığı",
		"yazmağa",
		"yazmağı",
		"yazıdan",
		"yazılan",
		"yazılar",
		"yazılıb",
		"yazılır",
		"yazımda",
		"yazının",
		"yazıram",
		"yazırdı",
		"yağları",
		"yaşadan",
		"yaşadaq",
		"yaşadım",
		"yaşadır",
		"yaşamaq",
		"yaşamın",
		"yaşamış",
		"yaşanan",
		"yaşasın",
		"yaşayan",
		"yaşayıb",
		"yaşayım",
		"yaşayın",
		"yaşayır",
		"yaşayış",
		"yaşları",
		"yaşımda",
		"yaşında",
		"yaşının",
		"yeməklə",
		"yeməyin",
		"yenidir",
		"yenidən",
		"yenilik",
		"yeraltı",
		"yerdəki",
		"yerevan",
		"yeridir",
		"yerində",
		"yerinin",
		"yeriyir",
		"yeriyən",
		"yerləri",
		"yerlərə",
		"yerləşə",
		"yetirdi",
		"yetirib",
		"yetirin",
		"yetirir",
		"yetirmə",
		"yetirək",
		"yetirən",
		"yetişib",
		"yetişir",
		"yetərli",
		"yeyinti",
		"yeyirik",
		"yiyəlik",
		"yoldaşı",
		"yollara",
		"yolları",
		"yoludur",
		"yolumuz",
		"yolunda",
		"yolunun",
		"yoluxub",
		"yoxlama",
		"yoxluğu",
		"yubiley",
		"yumurta",
		"yumuşaq",
		"yuxudan",
		"yönümdə",
		"yönümlü",
		"yönündə",
		"yönəlib",
		"yönəlik",
		"yönələn",
		"yürüşün",
		"yüzildə",
		"yüzilin",
		"yıxılıb",
		"yığması",
		"yığmaya",
		"yığılan",
		"yığılıb",
		"yığışıb",
		"zabitin",
		"zahirən",
		"zalında",
		"zamanda",
		"zamankı",
		"zamanla",
		"zamansa",
		"zamanın",
		"zavodda",
		"zavodun",
		"ziddinə",
		"zinadan",
		"zindana",
		"zirvəsi",
		"zirvəyə",
		"ziyanlı",
		"ziyanın",
		"ziyarət",
		"zülallı",
		"zırıltı",
		"zəhməti",
		"zəhərli",
		"zəifdir",
		"zəiflik",
		"zəlzələ",
		"zəmanət",
		"zəmində",
		"zəngimə",
		"zəngini",
		"zərbəni",
		"zərbəsi",
		"zərdüşt",
		"zərflik",
		"zərurət",
		"zərərin",
		"zərərli",
		"çalacam",
		"çalması",
		"çalırdı",
		"çalışan",
		"çalışdı",
		"çalışsa",
		"çalışıb",
		"çalışın",
		"çalışır",
		"çarpayı",
		"çarəsiz",
		"çatacaq",
		"çatanda",
		"çatdıra",
		"çatdığı",
		"çatması",
		"çayının",
		"çağında",
		"çağıran",
		"çağırdı",
		"çağırıb",
		"çağırır",
		"çağırış",
		"çevirdi",
		"çevirib",
		"çevirir",
		"çevirən",
		"çevrilə",
		"çeşidli",
		"çiyələk",
		"çoxalıb",
		"çoxalır",
		"çoxları",
		"çoxluğu",
		"çoxunda",
		"çoxunun",
		"çörəkçi",
		"çürümüş",
		"çıxacaq",
		"çıxanda",
		"çıxaran",
		"çıxaraq",
		"çıxarda",
		"çıxardı",
		"çıxarma",
		"çıxarsa",
		"çıxarıb",
		"çıxarır",
		"çıxarış",
		"çıxdığı",
		"çıxmadı",
		"çıxması",
		"çıxmağa",
		"çıxıram",
		"çıxırdı",
		"çıxırıq",
		"çəhrayı",
		"çəkdiyi",
		"çəkildi",
		"çəkilib",
		"çəkilir",
		"çəkiliş",
		"çəkilən",
		"çəkinin",
		"çəkirdi",
		"çəkirik",
		"çəkirəm",
		"çəkmədi",
		"çəkməli",
		"çəkməsi",
		"çəkməyi",
		"çəkməyə",
		"çəkəcək",
		"çəkəndə",
		"çəkənin",
		"çəkərək",
		"çərçivə",
		"ödəməyə",
		"öhdəlik",
		"öldürmə",
		"öldürüb",
		"öldürür",
		"öldürən",
		"ölkədir",
		"ölkədən",
		"ölkələr",
		"ölkəmiz",
		"ölkənin",
		"ölmürük",
		"ölçülür",
		"ölçülər",
		"ölüləri",
		"ölümdən",
		"ölümünü",
		"ölümünə",
		"öləndən",
		"ömrünün",
		"ömürlük",
		"öncədən",
		"öncələr",
		"ötürmək",
		"ötürücü",
		"övladım",
		"övladın",
		"öyrədib",
		"öyrədir",
		"öyrədən",
		"öyrəndi",
		"öyrənib",
		"öyrənin",
		"öyrənir",
		"öyrənmə",
		"öyrənən",
		"öyrətdi",
		"özümdən",
		"özümüzü",
		"özümüzə",
		"özündən",
		"özünüzü",
		"özünüzə",
		"ümidini",
		"ümidinə",
		"ümidlər",
		"ümidvar",
		"ümmətin",
		"ünvanda",
		"ürəkdən",
		"ürəyini",
		"ürəyinə",
		"üslubda",
		"üslubun",
		"üstündə",
		"üstünün",
		"üstəlik",
		"üsullar",
		"üsuluna",
		"üsulunu",
		"üzləşib",
		"üzləşir",
		"üzrədir",
		"üzvlüyü",
		"üzvləri",
		"üzvlərə",
		"üzvüdür",
		"üzvünün",
		"üzümüzə",
		"üzündən",
		"üzərinə",
		"üçündür",
		"şaftalı",
		"şagirdi",
		"şahnamə",
		"şairdim",
		"şairlər",
		"şekspir",
		"şerləri",
		"şeyləri",
		"şeylərə",
		"şeytana",
		"şeytanı",
		"şikayət",
		"şikəstə",
		"şirkəti",
		"şirkətə",
		"şirələr",
		"ştatlar",
		"şuradan",
		"şuranın",
		"şuşanın",
		"şuşasız",
		"şöbənin",
		"şöhrəti",
		"şüarlar",
		"şübhəli",
		"şəhadət",
		"şəhərdə",
		"şəhərin",
		"şəkildə",
		"şəkilli",
		"şəkilçi",
		"şəkinin",
		"şəklini",
		"şəklinə",
		"şəraiti",
		"şəraitə",
		"şərikli",
		"şəriətə",
		"şərtdir",
		"şərtilə",
		"şərtini",
		"şərtinə",
		"şərtlər",
		"şərəfli",
		"şərəflə",
		"şəxslər",
		"əbəsdir",
		"ədaləti",
		"ədalətə",
		"ədatlar",
		"ədatını",
		"ədavəti",
		"ədliyyə",
		"ədəblər",
		"əhalini",
		"əhalisi",
		"əhaliyə",
		"əhatəli",
		"əhlinin",
		"əhvalat",
		"əksərən",
		"əlaməti",
		"əlaqədə",
		"əlaqəli",
		"əlaqəni",
		"əlaqəsi",
		"əlavəsi",
		"əlbəttə",
		"əlildir",
		"əlillik",
		"əlillər",
		"əlimdən",
		"əlindən",
		"əllərin",
		"əlləşən",
		"əmiləri",
		"əmindir",
		"əmioğlu",
		"əmlakın",
		"əməkdar",
		"əməkdaş",
		"əməldir",
		"əməlini",
		"əməlinə",
		"əməllər",
		"əməyini",
		"əməyinə",
		"ənənəni",
		"ənənəsi",
		"ənənəvi",
		"ənənəyə",
		"əqdirdə",
		"ərazidə",
		"ərazini",
		"ərazisi",
		"əraziyə",
		"ərdanın",
		"ərindən",
		"ərizəni",
		"ərizəsi",
		"ərzində",
		"ərəblər",
		"ərəfədə",
		"ərənlər",
		"əsaslar",
		"əsassız",
		"əsasına",
		"əsasını",
		"əsirlər",
		"əslində",
		"əsrlərə",
		"əsərdir",
		"əsərini",
		"əsərinə",
		"əsərlər",
		"ətindən",
		"ətlərin",
		"ətraflı",
		"əvvəlcə",
		"əvvəldə",
		"əvvəlki",
		"əvəzini",
		"əvəzinə",
		"əvəzlik",
		"əvəzsiz",
		"əxlaqlı",
		"əyləncə",
		"əzabdan",
		"əzabını",
		"əziyyət",
		"əzizdir",
		"əzəldən",
		"əzəməti",
		"əşyalar"
	]
};
var LENGTHS = [
	4,
	5,
	6,
	7
];
var KEYS = [
	[
		"q",
		"ü",
		"e",
		"r",
		"t",
		"y",
		"u",
		"i",
		"o",
		"p",
		"ö",
		"ğ"
	],
	[
		"a",
		"s",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l",
		"ı",
		"ə"
	],
	[
		"z",
		"x",
		"c",
		"v",
		"b",
		"n",
		"m",
		"ç",
		"ş"
	]
];
var GUESS = {
	4: new Set(SOZ_GUESS[4]),
	5: new Set(SOZ_GUESS[5]),
	6: new Set(SOZ_GUESS[6]),
	7: new Set(SOZ_GUESS[7])
};
var SAVE_KEY = "nibras-soz-v1";
var COPY$7 = {
	daily: {
		az: "Bu gün",
		en: "Today",
		tr: "Bugün",
		ar: "اليوم",
		ru: "Сегодня"
	},
	free: {
		az: "Sərbəst",
		en: "Free",
		tr: "Serbest",
		ar: "حر",
		ru: "Свободно"
	},
	short: {
		az: "Hərf çatmır",
		en: "Not enough letters",
		tr: "Harf yetmiyor",
		ar: "الأحرف لا تكفي",
		ru: "Мало букв"
	},
	missing: {
		az: "Bu söz siyahıda yoxdur",
		en: "That word is not in the list",
		tr: "Bu söz listede yok",
		ar: "هذه الكلمة ليست في القائمة",
		ru: "Этого слова нет в списке"
	},
	win: {
		az: "Tapdın",
		en: "You found it",
		tr: "Buldun",
		ar: "وجدتها",
		ru: "Нашёл"
	},
	lose: {
		az: "Söz bu idi",
		en: "The word was",
		tr: "Söz şuydu",
		ar: "الكلمة كانت",
		ru: "Слово было"
	},
	again: {
		az: "Yeni söz",
		en: "New word",
		tr: "Yeni söz",
		ar: "كلمة جديدة",
		ru: "Новое слово"
	},
	copy: {
		az: "Nəticəni köçür",
		en: "Copy result",
		tr: "Sonucu kopyala",
		ar: "انسخ النتيجة",
		ru: "Скопировать"
	},
	copied: {
		az: "Köçürüldü",
		en: "Copied",
		tr: "Kopyalandı",
		ar: "نُسخ",
		ru: "Скопировано"
	},
	played: {
		az: "Oyun",
		en: "Played",
		tr: "Oyun",
		ar: "لعبت",
		ru: "Игр"
	},
	wins: {
		az: "Qələbə",
		en: "Won",
		tr: "Galibiyet",
		ar: "فوز",
		ru: "Побед"
	},
	streak: {
		az: "Ardıcıl",
		en: "Streak",
		tr: "Seri",
		ar: "متتالٍ",
		ru: "Подряд"
	},
	rule: {
		az: "Yaşıl yerindədir. Qızılı sözdədir, yeri başqadır. Boz sözdə yoxdur.",
		en: "Green is in place. Gold is in the word, in another place. Gray is not in the word.",
		tr: "Yeşil yerindedir. Altın sözdedir, yeri başkadır. Boz sözde yoktur.",
		ar: "الأخضر في مكانه. الذهبي في الكلمة بمكان آخر. الرمادي ليس في الكلمة.",
		ru: "Зелёная на месте. Золотая есть в слове, но не там. Серой в слове нет."
	}
};
function emptySave() {
	return {
		stats: {},
		daily: {},
		free: {}
	};
}
function readSave() {
	try {
		const raw = localStorage.getItem(SAVE_KEY);
		if (!raw) return emptySave();
		const parsed = JSON.parse(raw);
		return {
			stats: parsed.stats ?? {},
			daily: parsed.daily ?? {},
			free: parsed.free ?? {}
		};
	} catch {
		return emptySave();
	}
}
function writeSave(save) {
	try {
		localStorage.setItem(SAVE_KEY, JSON.stringify(save));
	} catch {}
}
function today() {
	const now = /* @__PURE__ */ new Date();
	const m = String(now.getMonth() + 1).padStart(2, "0");
	const d = String(now.getDate()).padStart(2, "0");
	return `${now.getFullYear()}-${m}-${d}`;
}
function hash(text) {
	let h = 2166136261;
	for (let i = 0; i < text.length; i += 1) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
	return h >>> 0;
}
function dailyWord(len, day) {
	const list = SOZ_ANSWERS[len];
	return list[hash(`${day}:${len}:nibras-soz`) % list.length];
}
function freeWord(len, salt) {
	const list = SOZ_ANSWERS[len];
	return list[hash(`${today()}:${len}:${salt}:${Math.random()}`) % list.length];
}
function marks(guess, secret) {
	const g = [...guess];
	const s = [...secret];
	const out = Array.from({ length: g.length }, () => "no");
	const left = {};
	for (let i = 0; i < s.length; i += 1) if (g[i] === s[i]) out[i] = "yes";
	else left[s[i]] = (left[s[i]] ?? 0) + 1;
	for (let i = 0; i < g.length; i += 1) {
		if (out[i] === "yes") continue;
		if (left[g[i]]) {
			out[i] = "move";
			left[g[i]] -= 1;
		}
	}
	return out;
}
function show(ch) {
	return ch.toLocaleUpperCase("az");
}
function maxRows(len) {
	return len >= 6 ? 7 : 6;
}
function SozGame() {
	const { lang } = useI18n();
	const game = gameBySlug("soz");
	const [len, setLen] = (0, import_react.useState)(5);
	const [mode, setMode] = (0, import_react.useState)("daily");
	const [day] = (0, import_react.useState)(today);
	const [secret, setSecret] = (0, import_react.useState)("");
	const [guesses, setGuesses] = (0, import_react.useState)([]);
	const [row, setRow] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [shake, setShake] = (0, import_react.useState)(false);
	const [stats, setStats] = (0, import_react.useState)({
		n: 0,
		w: 0,
		streak: 0
	});
	const [ready, setReady] = (0, import_react.useState)(false);
	const over = guesses.includes(secret) || guesses.length >= maxRows(len);
	const won = guesses.includes(secret);
	(0, import_react.useEffect)(() => {
		const save = readSave();
		const key = mode === "daily" ? `${day}:${len}` : `free:${len}`;
		const bag = mode === "daily" ? save.daily : save.free;
		let slot = bag[key];
		if (!slot || mode === "free" && slot.done) {
			slot = {
				secret: mode === "daily" ? dailyWord(len, day) : freeWord(len, Date.now()),
				guesses: [],
				done: false
			};
			bag[key] = slot;
			writeSave(save);
		}
		setSecret(slot.secret);
		setGuesses(slot.guesses);
		setRow("");
		setNote("");
		setStats(save.stats[String(len)] ?? {
			n: 0,
			w: 0,
			streak: 0
		});
		setReady(true);
	}, [
		len,
		mode,
		day
	]);
	const keyMark = (0, import_react.useMemo)(() => {
		const rank = {};
		const order = {
			no: 1,
			move: 2,
			yes: 3
		};
		for (const guess of guesses) marks(guess, secret).forEach((mark, i) => {
			const ch = guess[i];
			if (!rank[ch] || order[mark] > order[rank[ch]]) rank[ch] = mark;
		});
		return rank;
	}, [guesses, secret]);
	const persist = (nextGuesses, done) => {
		const save = readSave();
		const key = mode === "daily" ? `${day}:${len}` : `free:${len}`;
		const bag = mode === "daily" ? save.daily : save.free;
		bag[key] = {
			secret,
			guesses: nextGuesses,
			done
		};
		if (done) {
			const prev = save.stats[String(len)] ?? {
				n: 0,
				w: 0,
				streak: 0
			};
			const win = nextGuesses.includes(secret);
			const streak = win ? prev.streak + 1 : 0;
			save.stats[String(len)] = {
				n: prev.n + 1,
				w: prev.w + (win ? 1 : 0),
				streak
			};
			setStats(save.stats[String(len)]);
		}
		writeSave(save);
	};
	const fail = (text) => {
		setNote(text);
		setShake(true);
		window.setTimeout(() => setShake(false), 420);
	};
	const submit = () => {
		if (!ready || over || !secret) return;
		if (row.length !== secret.length) {
			fail(COPY$7.short[lang]);
			return;
		}
		if (!GUESS[len].has(row)) {
			fail(COPY$7.missing[lang]);
			return;
		}
		const next = [...guesses, row];
		setGuesses(next);
		setRow("");
		setNote("");
		const done = next.includes(secret) || next.length >= maxRows(len);
		persist(next, done);
	};
	const type = (ch) => {
		if (!ready || over) return;
		setNote("");
		setRow((prev) => prev.length >= len ? prev : prev + ch);
	};
	const back = () => {
		if (!ready || over) return;
		setRow((prev) => prev.slice(0, -1));
	};
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.metaKey || event.ctrlKey || event.altKey) return;
			if (event.key === "Enter") {
				event.preventDefault();
				submit();
				return;
			}
			if (event.key === "Backspace") {
				event.preventDefault();
				back();
				return;
			}
			const ch = event.key.toLocaleLowerCase("az");
			if ([...ch].length === 1 && GUESS[len] && "abcçdeəfgğhxıijkqlmnoöprsştuüvyz".includes(ch)) type(ch);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	const fresh = () => {
		if (mode !== "free") return;
		const save = readSave();
		const slot = {
			secret: freeWord(len, Date.now()),
			guesses: [],
			done: false
		};
		save.free[`free:${len}`] = slot;
		writeSave(save);
		setSecret(slot.secret);
		setGuesses([]);
		setRow("");
		setNote("");
	};
	const copy = async () => {
		const lines = guesses.map((guess) => marks(guess, secret).map((mark) => mark === "yes" ? "🟩" : mark === "move" ? "🟨" : "⬛").join(""));
		const text = `Söz ${len} ${GAME_VERSION}\n${lines.join("\n")}`;
		try {
			await navigator.clipboard.writeText(text);
			setNote(COPY$7.copied[lang]);
		} catch {
			setNote(text);
		}
	};
	const rows = Math.max(maxRows(len), guesses.length + (over ? 0 : 1));
	const status = won ? COPY$7.win[lang] : over ? `${COPY$7.lose[lang]}: ${show(secret)}` : note;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page soz-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "soz-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: gamePath(lang),
							children: lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "soz-head",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "xo-modes",
						role: "group",
						children: [
							LENGTHS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: len === item ? "is-on" : "",
								onClick: () => setLen(item),
								children: item
							}, item)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: mode === "daily" ? "is-on" : "",
								onClick: () => setMode("daily"),
								children: COPY$7.daily[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: mode === "free" ? "is-on" : "",
								onClick: () => setMode("free"),
								children: COPY$7.free[lang]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "xo-status",
						"aria-live": "polite",
						children: status || COPY$7.rule[lang]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "soz-play",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `soz-board${shake ? " is-shake" : ""}`,
					dir: "ltr",
					children: Array.from({ length: rows }, (_, r) => {
						const guess = guesses[r] ?? (r === guesses.length && !over ? row : "");
						const painted = r < guesses.length ? marks(guesses[r], secret) : [];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "soz-row",
							style: { gridTemplateColumns: `repeat(${len}, minmax(0, 1fr))` },
							children: Array.from({ length: len }, (_, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: painted[c] ? `is-${painted[c]}` : guess[c] ? "is-fill" : "",
								children: guess[c] ? show(guess[c]) : ""
							}, c))
						}, r);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "soz-keys",
					dir: "ltr",
					children: KEYS.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						index === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "is-wide",
							onClick: submit,
							children: lang === "ar" ? "تم" : lang === "ru" ? "Ок" : "OK"
						}) : null,
						line.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: keyMark[ch] ? `is-${keyMark[ch]}` : "",
							onClick: () => type(ch),
							children: show(ch)
						}, ch)),
						index === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "is-wide",
							onClick: back,
							"aria-label": "sil",
							children: "⌫"
						}) : null
					] }, index))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "soz-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "xo-score",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$7.played[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: stats.n })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$7.wins[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: stats.w })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$7.streak[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: stats.streak })] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "xo-actions",
					children: [mode === "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: fresh,
						children: COPY$7.again[lang]
					}) : null, guesses.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: copy,
						children: COPY$7.copy[lang]
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var COLS$3 = 20;
var ROWS$3 = 20;
var BASE_TICK = 150;
var MIN_TICK = 72;
var TICK_STEP = 3;
var BEST_KEY$6 = "nibras-ilan-v1";
var COPY$6 = {
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	speed: {
		az: "Sürət",
		en: "Speed",
		tr: "Hız",
		ar: "السرعة",
		ru: "Скорость"
	},
	food: {
		az: "Yemək",
		en: "Food",
		tr: "Yem",
		ar: "الأكل",
		ru: "Еда"
	},
	start: {
		az: "Başla",
		en: "Start",
		tr: "Başla",
		ar: "ابدأ",
		ru: "Старт"
	},
	resume: {
		az: "Davam et",
		en: "Continue",
		tr: "Devam et",
		ar: "أكمل",
		ru: "Дальше"
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	pause: {
		az: "Pauza",
		en: "Pause",
		tr: "Duraklat",
		ar: "توقف",
		ru: "Пауза"
	},
	over: {
		az: "Oyun bitdi",
		en: "Game over",
		tr: "Oyun bitti",
		ar: "انتهت اللعبة",
		ru: "Игра окончена"
	},
	win: {
		az: "Mükəmməl",
		en: "Perfect",
		tr: "Mükemmel",
		ar: "ممتاز",
		ru: "Идеально"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	lead: {
		az: "Yeməyi ye, uzan. Divara və özünə toxunma. Hər yemək sürəti artırır.",
		en: "Eat, grow, and do not hit the wall or yourself. Each bite gets faster.",
		tr: "Yemi ye, uzan. Duvara ve kendine değme. Her yem hızı artırır.",
		ar: "كُلْ وتقدّم. لا تلمس الجدار ولا نفسك. كل لقمة تزيد السرعة.",
		ru: "Ешь и расти. Не врежься в стену и в себя. Каждый кусок быстрее."
	},
	wait: {
		az: "İlan səni gözləyir.",
		en: "The snake is waiting.",
		tr: "Yılan seni bekliyor.",
		ar: "الأفعى تنتظرك.",
		ru: "Змейка ждёт."
	},
	keys: {
		az: "Oxlar və ya WASD. Boşluq pauzadır.",
		en: "Arrows or WASD. Space pauses.",
		tr: "Oklar ya da WASD. Boşluk duraklatır.",
		ar: "الأسهم أو WASD. المسافة توقف.",
		ru: "Стрелки или WASD. Пробел — пауза."
	}
};
function readBest$6() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY$6) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function IlanGame() {
	const { lang } = useI18n();
	const game = gameBySlug("ilan");
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [hud, setHud] = (0, import_react.useState)({
		score: 0,
		best: 0,
		speed: 1,
		eaten: 0,
		record: false,
		win: false
	});
	const [shake, setShake] = (0, import_react.useState)(false);
	const api = (0, import_react.useRef)({
		start: () => {},
		pause: () => {},
		resume: () => {},
		turn: (_x, _y) => {}
	});
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let W = 0;
		let H = 0;
		let cell = 0;
		const state = {
			mode: "idle",
			snake: [],
			prev: [],
			dir: {
				x: 1,
				y: 0
			},
			queue: [],
			food: {
				x: 0,
				y: 0
			},
			eaten: 0,
			score: 0,
			best: readBest$6(),
			tick: BASE_TICK,
			acc: 0,
			t: 1,
			particles: [],
			flash: 0
		};
		let lastTS = 0;
		let alive = true;
		let actx = null;
		const beep = (freq, dur = .1, type = "sine", vol = .05) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.value = freq;
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const publish = (extra) => {
			setHud({
				score: state.score,
				best: Math.max(state.best, state.score),
				speed: 1 + Math.floor(state.eaten / 5),
				eaten: state.eaten,
				record: false,
				win: false,
				...extra
			});
		};
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			if (!rect.width || !rect.height) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(rect.width * dpr);
			canvas.height = Math.round(rect.height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			W = rect.width;
			H = rect.height;
			cell = W / COLS$3;
		};
		const placeFood = () => {
			const free = [];
			for (let y = 0; y < ROWS$3; y += 1) for (let x = 0; x < COLS$3; x += 1) if (!state.snake.some((part) => part.x === x && part.y === y)) free.push({
				x,
				y
			});
			state.food = free.length ? free[Math.floor(Math.random() * free.length)] : {
				x: -1,
				y: -1
			};
		};
		const reset = () => {
			const cy = Math.floor(ROWS$3 / 2);
			state.snake = [
				{
					x: 8,
					y: cy
				},
				{
					x: 7,
					y: cy
				},
				{
					x: 6,
					y: cy
				}
			];
			state.prev = state.snake.map((part) => ({ ...part }));
			state.dir = {
				x: 1,
				y: 0
			};
			state.queue = [];
			state.eaten = 0;
			state.score = 0;
			state.tick = BASE_TICK;
			state.acc = 0;
			state.t = 1;
			state.particles = [];
			state.flash = 0;
			placeFood();
			publish();
		};
		const roundRect = (x, y, w, h, r) => {
			const radius = Math.min(r, w / 2, h / 2);
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.arcTo(x + w, y, x + w, y + h, radius);
			ctx.arcTo(x + w, y + h, x, y + h, radius);
			ctx.arcTo(x, y + h, x, y, radius);
			ctx.arcTo(x, y, x + w, y, radius);
			ctx.closePath();
		};
		const lerp = (a, b, t) => a + (b - a) * t;
		const segColor = (f) => {
			return `rgb(${Math.round(lerp(110, 13, f))},${Math.round(lerp(231, 148, f))},${Math.round(lerp(183, 136, f))})`;
		};
		const spawn = (px, py) => {
			for (let i = 0; i < 16; i += 1) {
				const angle = Math.random() * Math.PI * 2;
				const speed = 40 + Math.random() * 130;
				state.particles.push({
					x: px,
					y: py,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					life: 1,
					size: cell * (.07 + Math.random() * .1)
				});
			}
		};
		const gameOver = (win = false) => {
			state.mode = "over";
			state.t = 1;
			setMode("over");
			setShake(false);
			requestAnimationFrame(() => setShake(true));
			if (win) {
				beep(660, .1);
				window.setTimeout(() => beep(880, .12), 110);
				window.setTimeout(() => beep(1320, .2), 230);
			} else {
				beep(220, .18, "sawtooth", .06);
				window.setTimeout(() => beep(150, .28, "sawtooth", .05), 130);
			}
			const record = state.score > state.best;
			if (record) {
				state.best = state.score;
				try {
					localStorage.setItem(BEST_KEY$6, String(state.best));
				} catch {}
			}
			publish({
				record,
				win
			});
		};
		const step = () => {
			state.prev = state.snake.map((part) => ({ ...part }));
			if (state.queue.length) state.dir = state.queue.shift();
			const head = {
				x: state.snake[0].x + state.dir.x,
				y: state.snake[0].y + state.dir.y
			};
			if (head.x < 0 || head.y < 0 || head.x >= COLS$3 || head.y >= ROWS$3) {
				gameOver();
				return;
			}
			for (let i = 0; i < state.snake.length - 1; i += 1) if (state.snake[i].x === head.x && state.snake[i].y === head.y) {
				gameOver();
				return;
			}
			state.snake.unshift(head);
			if (head.x === state.food.x && head.y === state.food.y) {
				state.eaten += 1;
				state.score += 10;
				state.tick = Math.max(MIN_TICK, BASE_TICK - state.eaten * TICK_STEP);
				state.flash = 1;
				spawn((state.food.x + .5) * cell, (state.food.y + .5) * cell);
				beep(720, .07, "triangle", .05);
				window.setTimeout(() => beep(1040, .09, "triangle", .045), 60);
				placeFood();
				publish();
				if (state.snake.length >= 400) gameOver(true);
			} else state.snake.pop();
		};
		const draw = () => {
			ctx.clearRect(0, 0, W, H);
			ctx.save();
			ctx.strokeStyle = "rgba(255,255,255,.04)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			for (let i = 1; i < COLS$3; i += 1) {
				const p = Math.round(i * cell) + .5;
				ctx.moveTo(p, 0);
				ctx.lineTo(p, H);
				ctx.moveTo(0, p);
				ctx.lineTo(W, p);
			}
			ctx.stroke();
			ctx.restore();
			if (state.food.x >= 0) {
				const pulse = 1 + Math.sin(performance.now() / 1e3 * 4.2) * .11;
				const cx = (state.food.x + .5) * cell;
				const cy = (state.food.y + .5) * cell;
				const radius = cell * .29 * pulse;
				const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * 1.25);
				glow.addColorStop(0, "rgba(255,209,102,.42)");
				glow.addColorStop(.55, "rgba(255,209,102,.10)");
				glow.addColorStop(1, "rgba(255,209,102,0)");
				ctx.fillStyle = glow;
				ctx.beginPath();
				ctx.arc(cx, cy, cell * 1.25, 0, 7);
				ctx.fill();
				ctx.save();
				ctx.shadowColor = "rgba(255,209,102,.9)";
				ctx.shadowBlur = cell * .9;
				ctx.beginPath();
				ctx.arc(cx, cy, radius, 0, 7);
				ctx.fillStyle = "#ffd166";
				ctx.fill();
				ctx.restore();
				ctx.beginPath();
				ctx.arc(cx - radius * .3, cy - radius * .32, radius * .34, 0, 7);
				ctx.fillStyle = "rgba(255,255,255,.85)";
				ctx.fill();
			}
			const snake = state.snake;
			const t = state.mode === "running" ? state.t : 1;
			const pad = cell * .1;
			const rad = cell * .3;
			for (let i = snake.length - 1; i >= 0; i -= 1) {
				const cur = snake[i];
				const prev = state.prev[i] || state.prev[state.prev.length - 1] || cur;
				const px = lerp(prev.x, cur.x, t) * cell;
				const py = lerp(prev.y, cur.y, t) * cell;
				const f = snake.length > 1 ? i / (snake.length - 1) : 0;
				ctx.fillStyle = segColor(f);
				if (i === 0) {
					ctx.save();
					ctx.shadowColor = "rgba(110,231,183,.85)";
					ctx.shadowBlur = cell * .85;
					roundRect(px + pad * .55, py + pad * .55, cell - pad * 1.1, cell - pad * 1.1, rad);
					ctx.fill();
					ctx.restore();
				} else {
					const shrink = pad * (.15 + f * .5);
					roundRect(px + pad + shrink, py + pad + shrink, cell - (pad + shrink) * 2, cell - (pad + shrink) * 2, rad * (1 - f * .35));
					ctx.fill();
				}
			}
			if (snake[0]) {
				const head = snake[0];
				const prev = state.prev[0] || head;
				const hx = lerp(prev.x, head.x, t) * cell + cell / 2;
				const hy = lerp(prev.y, head.y, t) * cell + cell / 2;
				const perp = {
					x: -state.dir.y,
					y: state.dir.x
				};
				ctx.fillStyle = "#04121a";
				for (const side of [-1, 1]) {
					ctx.beginPath();
					ctx.arc(hx + perp.x * cell * .19 * side + state.dir.x * cell * .15, hy + perp.y * cell * .19 * side + state.dir.y * cell * .15, Math.max(1.4, cell * .085), 0, 7);
					ctx.fill();
				}
			}
			for (const particle of state.particles) {
				ctx.globalAlpha = Math.max(0, particle.life);
				ctx.fillStyle = "#ffd166";
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, 7);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			if (state.flash > 0) {
				ctx.fillStyle = `rgba(255,209,102,${state.flash * .07})`;
				ctx.fillRect(0, 0, W, H);
			}
		};
		const loop = (ts) => {
			if (!alive) return;
			if (!lastTS) lastTS = ts;
			let dt = ts - lastTS;
			lastTS = ts;
			if (dt > 200) dt = 200;
			if (state.mode === "running") {
				state.acc += dt;
				let guard = 0;
				while (state.acc >= state.tick && state.mode === "running" && guard < 6) {
					state.acc -= state.tick;
					step();
					guard += 1;
				}
				state.t = Math.min(1, state.acc / state.tick);
			}
			const k = dt / 1e3;
			for (let i = state.particles.length - 1; i >= 0; i -= 1) {
				const particle = state.particles[i];
				particle.x += particle.vx * k;
				particle.y += particle.vy * k;
				particle.vx *= .94;
				particle.vy *= .94;
				particle.life -= k * 2.1;
				if (particle.life <= 0) state.particles.splice(i, 1);
			}
			if (state.flash > 0) state.flash = Math.max(0, state.flash - k * 3.2);
			draw();
			requestAnimationFrame(loop);
		};
		const start = () => {
			resize();
			reset();
			state.mode = "running";
			lastTS = 0;
			setMode("running");
			setShake(false);
			beep(560, .08);
			window.setTimeout(() => beep(840, .1), 80);
		};
		const pause = () => {
			if (state.mode !== "running") return;
			state.mode = "paused";
			setMode("paused");
			beep(420, .09, "sine", .04);
		};
		const resume = () => {
			if (state.mode !== "paused") return;
			state.mode = "running";
			lastTS = 0;
			setMode("running");
			beep(620, .09, "sine", .04);
		};
		const turn = (x, y) => {
			if (state.mode !== "running") return;
			const last = state.queue.length ? state.queue[state.queue.length - 1] : state.dir;
			if (last.x === -x && last.y === -y) return;
			if (last.x === x && last.y === y) return;
			if (state.queue.length < 2) state.queue.push({
				x,
				y
			});
		};
		api.current = {
			start,
			pause,
			resume,
			turn
		};
		const keys = {
			ArrowUp: {
				x: 0,
				y: -1
			},
			KeyW: {
				x: 0,
				y: -1
			},
			ArrowDown: {
				x: 0,
				y: 1
			},
			KeyS: {
				x: 0,
				y: 1
			},
			ArrowLeft: {
				x: -1,
				y: 0
			},
			KeyA: {
				x: -1,
				y: 0
			},
			ArrowRight: {
				x: 1,
				y: 0
			},
			KeyD: {
				x: 1,
				y: 0
			}
		};
		const onKey = (event) => {
			if (event.code === "Space" || event.code === "Enter") {
				if (state.mode === "idle" || state.mode === "over") {
					event.preventDefault();
					start();
					return;
				}
				if (state.mode === "running" || state.mode === "paused") {
					event.preventDefault();
					state.mode === "running" ? pause() : resume();
					return;
				}
			}
			const dir = keys[event.code];
			if (!dir) return;
			event.preventDefault();
			turn(dir.x, dir.y);
		};
		let touch = null;
		const touchStart = (event) => {
			const point = event.changedTouches[0];
			touch = {
				x: point.clientX,
				y: point.clientY
			};
		};
		const touchEnd = (event) => {
			if (!touch) return;
			const point = event.changedTouches[0];
			const dx = point.clientX - touch.x;
			const dy = point.clientY - touch.y;
			touch = null;
			if (Math.max(Math.abs(dx), Math.abs(dy)) < 22) return;
			if (Math.abs(dx) > Math.abs(dy)) turn(dx > 0 ? 1 : -1, 0);
			else turn(0, dy > 0 ? 1 : -1);
		};
		const onHide = () => {
			if (document.hidden && state.mode === "running") pause();
		};
		const observer = new ResizeObserver(resize);
		observer.observe(canvas);
		resize();
		reset();
		setHud((prev) => ({
			...prev,
			best: state.best
		}));
		window.addEventListener("keydown", onKey);
		canvas.addEventListener("touchstart", touchStart, { passive: true });
		canvas.addEventListener("touchend", touchEnd, { passive: true });
		document.addEventListener("visibilitychange", onHide);
		const frame = requestAnimationFrame(loop);
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("keydown", onKey);
			canvas.removeEventListener("touchstart", touchStart);
			canvas.removeEventListener("touchend", touchEnd);
			document.removeEventListener("visibilitychange", onHide);
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "ilan-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ilan-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ilan-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$6.score[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: hud.score })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$6.best[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: hud.best })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$6.speed[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: hud.speed })] })
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `ilan-board${shake ? " is-shake" : ""}`,
				ref: wrapRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef }),
					mode === "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ilan-pause",
						onClick: () => api.current.pause(),
						"aria-label": COPY$6.pause[lang],
						children: "❚❚"
					}) : null,
					mode !== "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ilan-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ilan-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "paused" ? COPY$6.pause[lang] : mode === "over" ? hud.win ? COPY$6.win[lang] : COPY$6.over[lang] : game.name[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ilan-big",
									children: hud.score
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mode === "paused" ? COPY$6.wait[lang] : COPY$6.lead[lang] }),
								mode === "over" && hud.record ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ilan-rec",
									children: COPY$6.record[lang]
								}) : null,
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "ilan-mini",
									children: [
										COPY$6.food[lang],
										" ",
										hud.eaten,
										" · ",
										COPY$6.best[lang],
										" ",
										hud.best
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ilan-actions",
									children: [mode === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "is-gold",
										onClick: () => api.current.resume(),
										children: COPY$6.resume[lang]
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: mode === "paused" ? "" : "is-gold",
										onClick: () => api.current.start(),
										children: mode === "idle" ? COPY$6.start[lang] : COPY$6.again[lang]
									})]
								})
							]
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ilan-dpad",
				dir: "ltr",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "up",
						onPointerDown: (event) => {
							event.preventDefault();
							api.current.turn(0, -1);
						},
						"aria-label": "up",
						children: "▲"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "left",
						onPointerDown: (event) => {
							event.preventDefault();
							api.current.turn(-1, 0);
						},
						"aria-label": "left",
						children: "◀"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "right",
						onPointerDown: (event) => {
							event.preventDefault();
							api.current.turn(1, 0);
						},
						"aria-label": "right",
						children: "▶"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "down",
						onPointerDown: (event) => {
							event.preventDefault();
							api.current.turn(0, 1);
						},
						"aria-label": "down",
						children: "▼"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY$6.keys[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var VW$3 = 400;
var VH$2 = 600;
var BEST_KEY$5 = "nibras-kosmos-v1";
var TAU$5 = Math.PI * 2;
var COPY$5 = {
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	wave: {
		az: "Dalğa",
		en: "Wave",
		tr: "Dalga",
		ar: "الموجة",
		ru: "Волна"
	},
	lives: {
		az: "Can",
		en: "Lives",
		tr: "Can",
		ar: "الحياة",
		ru: "Жизни"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	gun: {
		az: "Silah",
		en: "Gun",
		tr: "Silah",
		ar: "السلاح",
		ru: "Оружие"
	},
	start: {
		az: "Başla",
		en: "Start",
		tr: "Başla",
		ar: "ابدأ",
		ru: "Старт"
	},
	resume: {
		az: "Davam et",
		en: "Continue",
		tr: "Devam et",
		ar: "أكمل",
		ru: "Дальше"
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	pause: {
		az: "Pauza",
		en: "Pause",
		tr: "Duraklat",
		ar: "توقف",
		ru: "Пауза"
	},
	over: {
		az: "Oyun bitdi",
		en: "Game over",
		tr: "Oyun bitti",
		ar: "انتهت اللعبة",
		ru: "Игра окончена"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	lead: {
		az: "Düşmən dalğalarını məhv et, gücləndirmələri topla. Hər 5-ci dalğa bosdur.",
		en: "Destroy the waves and grab upgrades. Every 5th wave is a boss.",
		tr: "Düşman dalgalarını yok et, güçlendirmeleri topla. Her 5. dalga bosstur.",
		ar: "دمّر الموجات واجمع التعزيزات. كل موجة خامسة زعيم.",
		ru: "Уничтожай волны и бери усиления. Каждая 5-я волна — босс."
	},
	wait: {
		az: "Kosmos səni gözləyir.",
		en: "Space is waiting.",
		tr: "Uzay seni bekliyor.",
		ar: "الفضاء ينتظرك.",
		ru: "Космос ждёт."
	},
	keys: {
		az: "Oxlar və ya WASD. Boşluq pauzadır. Barmaqla sürüşdür.",
		en: "Arrows or WASD. Space pauses. Drag to move.",
		tr: "Oklar ya da WASD. Boşluk duraklatır. Sürükle.",
		ar: "الأسهم أو WASD. المسافة توقف. اسحب للتحريك.",
		ru: "Стрелки или WASD. Пробел — пауза. Тяни пальцем."
	},
	clear: {
		az: "Təmizləndi",
		en: "Cleared",
		tr: "Temizlendi",
		ar: "تم التنظيف",
		ru: "Чисто"
	},
	shield: {
		az: "Qalxan",
		en: "Shield",
		tr: "Kalkan",
		ar: "درع",
		ru: "Щит"
	},
	life: {
		az: "+1 can",
		en: "+1 life",
		tr: "+1 can",
		ar: "+1 حياة",
		ru: "+1 жизнь"
	},
	bomb: {
		az: "Bomba",
		en: "Bomb",
		tr: "Bomba",
		ar: "قنبلة",
		ru: "Бомба"
	},
	boss: {
		az: "Bos",
		en: "Boss",
		tr: "Boss",
		ar: "زعيم",
		ru: "Босс"
	}
};
var rnd = (a, b) => a + Math.random() * (b - a);
var rndi = (a, b) => Math.floor(rnd(a, b + 1));
var clamp$1 = (v, a, b) => v < a ? a : v > b ? b : v;
var lerp$1 = (a, b, t) => a + (b - a) * t;
var hit = (a, b, r) => {
	const br = r + (b.r || 0);
	return (a.x - b.x) ** 2 + (a.y - b.y) ** 2 < br * br;
};
function readBest$5() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY$5) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function rounded$1(ctx, x, y, w, h, r) {
	const radius = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.arcTo(x + w, y, x + w, y + h, radius);
	ctx.arcTo(x + w, y + h, x, y + h, radius);
	ctx.arcTo(x, y + h, x, y, radius);
	ctx.arcTo(x, y, x + w, y, radius);
	ctx.closePath();
}
function KosmosGame() {
	const { lang } = useI18n();
	const game = gameBySlug("kosmos");
	const canvasRef = (0, import_react.useRef)(null);
	const boardRef = (0, import_react.useRef)(null);
	const api = (0, import_react.useRef)({
		start: () => {},
		pause: () => {},
		resume: () => {}
	});
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [score, setScore] = (0, import_react.useState)(0);
	const [wave, setWave] = (0, import_react.useState)(1);
	const [lives, setLives] = (0, import_react.useState)(3);
	const [best, setBest] = (0, import_react.useState)(0);
	const [record, setRecord] = (0, import_react.useState)(false);
	const [weapon, setWeapon] = (0, import_react.useState)(1);
	const [announce, setAnnounce] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const boardEl = boardRef.current;
		if (!canvas || !boardEl) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const G = {
			mode: "idle",
			wave: 0,
			waveState: "intro",
			waveTimer: 0,
			score: 0,
			best: readBest$5(),
			lives: 3,
			shake: 0,
			flash: 0
		};
		const player = {
			x: VW$3 / 2,
			y: 530,
			tx: VW$3 / 2,
			ty: 530,
			r: 13,
			speed: 350,
			fireTimer: 0,
			fireRate: .13,
			weapon: 1,
			shield: 0,
			invuln: 0
		};
		let bullets = [];
		let enemies = [];
		let powerups = [];
		let particles = [];
		let spawnQueue = [];
		const stars = [];
		const keys = {
			left: false,
			right: false,
			up: false,
			down: false
		};
		let dragging = false;
		let alive = true;
		let last = 0;
		let actx = null;
		for (let i = 0; i < 100; i += 1) {
			const layer = rndi(0, 2);
			stars.push({
				x: rnd(0, VW$3),
				y: rnd(0, VH$2),
				r: layer === 0 ? rnd(.4, .9) : layer === 1 ? rnd(.9, 1.5) : rnd(1.5, 2.3),
				sp: layer === 0 ? 25 : layer === 1 ? 55 : 105,
				a: layer === 0 ? .3 : layer === 1 ? .55 : .95,
				tw: rnd(0, TAU$5)
			});
		}
		const sfx = (freq, dur = .08, type = "square", vol = .03) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.setValueAtTime(freq, actx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .6), actx.currentTime + dur);
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const sync = (popRecord = false) => {
			setScore(G.score);
			setWave(Math.max(1, G.wave));
			setLives(G.lives);
			setBest(Math.max(G.best, G.score));
			setWeapon(player.weapon);
			if (popRecord) setRecord(false);
		};
		const say = (kind, level) => {
			setAnnounce({
				kind,
				level,
				n: Date.now()
			});
		};
		const burst = (x, y, color, count = 12, power = 1) => {
			for (let i = 0; i < count; i += 1) {
				const a = Math.random() * TAU$5;
				const sp = rnd(40, 180) * power;
				particles.push({
					x,
					y,
					vx: Math.cos(a) * sp,
					vy: Math.sin(a) * sp,
					life: 1,
					decay: rnd(1.6, 2.8),
					size: rnd(1.5, 3.5) * power,
					color
				});
			}
			if (particles.length > 420) particles.splice(0, particles.length - 420);
		};
		const fit = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(VW$3 * dpr);
			canvas.height = Math.round(VH$2 * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const pickEnemyType = (n) => {
			const r = Math.random();
			if (n <= 2) return r < .8 ? "grunt" : "zigzag";
			if (n <= 4) return r < .5 ? "grunt" : r < .8 ? "zigzag" : "shooter";
			if (n <= 7) return r < .32 ? "grunt" : r < .58 ? "zigzag" : r < .85 ? "shooter" : "tank";
			return r < .24 ? "grunt" : r < .5 ? "zigzag" : r < .76 ? "shooter" : "tank";
		};
		const spawnEnemy = (type, x) => {
			const e = {
				type,
				x,
				baseX: x,
				y: -30,
				vx: 0,
				vy: 0,
				t: 0,
				r: 13,
				hp: 1,
				maxHp: 1,
				fireTimer: rnd(.6, 1.6),
				hoverY: 0,
				phase: rnd(0, TAU$5)
			};
			if (type === "grunt") {
				e.hp = e.maxHp = 1;
				e.vy = 62 + G.wave * 4;
				e.r = 13;
			}
			if (type === "zigzag") {
				e.hp = e.maxHp = 2;
				e.vy = 55 + G.wave * 4;
				e.r = 12;
			}
			if (type === "shooter") {
				e.hp = e.maxHp = 3;
				e.vy = 70;
				e.hoverY = 70 + Math.random() * 110;
				e.r = 14;
			}
			if (type === "tank") {
				e.hp = e.maxHp = 9 + Math.floor(G.wave * .8);
				e.vy = 32;
				e.r = 20;
			}
			if (type === "boss") {
				e.hp = e.maxHp = 55 + Math.floor(G.wave / 5) * 38;
				e.vy = 45;
				e.r = 46;
				e.fireTimer = 1.2;
			}
			enemies.push(e);
		};
		const enemyShoot = (e) => {
			const dx = player.x - e.x;
			const dy = player.y - e.y;
			const d = Math.hypot(dx, dy) || 1;
			bullets.push({
				x: e.x,
				y: e.y + e.r * .5,
				vx: dx / d * 170,
				vy: dy / d * 170,
				r: 4,
				dmg: 1,
				friendly: false,
				life: 4
			});
			sfx(260, .05, "sawtooth", .015);
		};
		const bossAttack = (b) => {
			const n = 7;
			const base = Math.atan2(player.y - b.y, player.x - b.x);
			for (let i = 0; i < n; i += 1) {
				const a = base + (i - 3) * .17;
				bullets.push({
					x: b.x,
					y: b.y + 20,
					vx: Math.cos(a) * 155,
					vy: Math.sin(a) * 155,
					r: 5,
					dmg: 1,
					friendly: false,
					life: 5
				});
			}
			sfx(160, .12, "sawtooth", .025);
		};
		const firePlayer = () => {
			const bs = -580;
			const mk = (x, y, vx, vy) => bullets.push({
				x,
				y,
				vx,
				vy,
				r: 3.5,
				dmg: 1,
				friendly: true,
				life: 2.5
			});
			const lvl = player.weapon;
			if (lvl === 1) mk(player.x, player.y - 16, 0, bs);
			else if (lvl === 2) {
				mk(player.x - 8, player.y - 14, 0, bs);
				mk(player.x + 8, player.y - 14, 0, bs);
			} else if (lvl === 3) {
				mk(player.x, player.y - 17, 0, bs);
				mk(player.x - 10, player.y - 10, -95, bs);
				mk(player.x + 10, player.y - 10, 95, bs);
			} else {
				mk(player.x - 7, player.y - 14, 0, bs);
				mk(player.x + 7, player.y - 14, 0, bs);
				mk(player.x - 13, player.y - 6, -150, bs);
				mk(player.x + 13, player.y - 6, 150, bs);
			}
		};
		const dropPowerup = (x, y, forced) => {
			const roll = Math.random();
			const type = forced ?? (roll < .45 ? "W" : roll < .75 ? "S" : roll < .95 ? "H" : "B");
			powerups.push({
				x,
				y,
				vy: 70,
				r: 13,
				type,
				t: 0
			});
		};
		const killEnemy = (e, index) => {
			enemies.splice(index, 1);
			G.shake = Math.max(G.shake, e.type === "boss" ? 14 : 3);
			const table = {
				grunt: 15,
				zigzag: 20,
				shooter: 30,
				tank: 45,
				boss: 500 + G.wave * 50
			};
			G.score += table[e.type];
			sync(true);
			burst(e.x, e.y, {
				grunt: "#ff5c7a",
				zigzag: "#a78bfa",
				shooter: "#fb923c",
				tank: "#ef4444",
				boss: "#f472b6"
			}[e.type], e.type === "boss" ? 60 : 14, e.type === "boss" ? 2 : 1);
			sfx(e.type === "boss" ? 90 : 220, e.type === "boss" ? .5 : .12, "sawtooth", e.type === "boss" ? .07 : .03);
			if (e.type === "boss") {
				dropPowerup(e.x - 22, e.y, "W");
				dropPowerup(e.x, e.y, "S");
				dropPowerup(e.x + 22, e.y, "H");
				G.flash = .45;
			} else if (Math.random() < (e.type === "tank" ? .35 : .12)) dropPowerup(e.x, e.y);
		};
		const gameOver = () => {
			G.mode = "over";
			setMode("over");
			const isRec = G.score > G.best;
			if (isRec) {
				G.best = G.score;
				try {
					localStorage.setItem(BEST_KEY$5, String(G.best));
				} catch {}
			}
			setRecord(isRec);
			sync();
		};
		const damagePlayer = () => {
			if (player.invuln > 0 || G.mode !== "running") return;
			if (player.shield > 0) {
				player.shield = 0;
				player.invuln = 1;
				burst(player.x, player.y, "#60a5fa", 18, 1.2);
				G.shake = 5;
				sfx(320, .18, "sine", .05);
				return;
			}
			G.lives -= 1;
			player.invuln = 2;
			player.weapon = Math.max(1, player.weapon - 1);
			sync();
			burst(player.x, player.y, "#ff5c7a", 26, 1.4);
			G.shake = 9;
			G.flash = .6;
			sfx(200, .25, "sawtooth", .06);
			bullets = bullets.filter((b) => b.friendly);
			if (G.lives <= 0) gameOver();
		};
		const applyPowerup = (p) => {
			if (p.type === "W") {
				if (player.weapon < 4) {
					player.weapon += 1;
					say("weapon", player.weapon);
					sfx(880, .1, "sine", .04);
					window.setTimeout(() => sfx(1180, .12, "sine", .04), 80);
				} else G.score += 150;
				sync();
			} else if (p.type === "S") {
				player.shield = 1;
				say("shield");
				sfx(520, .12, "sine", .04);
			} else if (p.type === "H") {
				if (G.lives < 5) {
					G.lives += 1;
					say("life");
					sfx(660, .1, "sine", .04);
				} else G.score += 200;
				sync();
			} else {
				bullets = bullets.filter((b) => b.friendly);
				for (let i = enemies.length - 1; i >= 0; i -= 1) {
					enemies[i].hp -= 4;
					burst(enemies[i].x, enemies[i].y, "#ffd166", 6, .8);
					if (enemies[i].hp <= 0) killEnemy(enemies[i], i);
				}
				G.shake = 8;
				G.flash = .5;
				say("bomb");
				sfx(120, .3, "sawtooth", .05);
			}
		};
		const startWave = (n) => {
			G.wave = n;
			G.waveState = "intro";
			G.waveTimer = 1.5;
			spawnQueue = [];
			const isBoss = n % 5 === 0;
			say(isBoss ? "boss" : "wave", n);
			if (isBoss) spawnQueue.push({
				t: .7,
				type: "boss",
				x: VW$3 / 2
			});
			else {
				const count = Math.min(26, 5 + Math.floor(n * 1.6));
				let t = .55;
				for (let i = 0; i < count; i += 1) {
					spawnQueue.push({
						t,
						type: pickEnemyType(n),
						x: rnd(50, 350)
					});
					t += rnd(.25, .52) / (1 + n * .06);
				}
			}
			sync();
		};
		const updateWave = (dt) => {
			if (G.waveState === "intro") {
				G.waveTimer -= dt;
				if (G.waveTimer <= 0) G.waveState = "fight";
				return;
			}
			if (G.waveState === "fight") {
				for (let i = spawnQueue.length - 1; i >= 0; i -= 1) {
					spawnQueue[i].t -= dt;
					if (spawnQueue[i].t <= 0) {
						spawnEnemy(spawnQueue[i].type, spawnQueue[i].x);
						spawnQueue.splice(i, 1);
					}
				}
				if (spawnQueue.length === 0 && enemies.length === 0) {
					G.waveState = "clear";
					G.waveTimer = 1.1;
					G.score += 50;
					sync(true);
					say("clear");
					sfx(660, .1, "sine", .035);
				}
				return;
			}
			G.waveTimer -= dt;
			if (G.waveTimer <= 0) startWave(G.wave + 1);
		};
		const updateEnemies = (dt) => {
			for (let i = enemies.length - 1; i >= 0; i -= 1) {
				const e = enemies[i];
				e.t += dt;
				if (e.type === "grunt") e.y += e.vy * dt;
				else if (e.type === "zigzag") {
					e.y += e.vy * dt;
					e.x = e.baseX + Math.sin(e.t * 3 + e.phase) * 46;
				} else if (e.type === "shooter") {
					if (e.y < e.hoverY) e.y += e.vy * dt;
					else {
						e.x += Math.sin(e.t * 1.6) * 55 * dt;
						e.fireTimer -= dt;
						if (e.fireTimer <= 0) {
							enemyShoot(e);
							e.fireTimer = Math.max(.55, 1.7 - G.wave * .045);
						}
					}
				} else if (e.type === "tank") {
					e.y += e.vy * dt;
					e.x = e.baseX + Math.sin(e.t * .9) * 28;
				} else if (e.y < 95) e.y += e.vy * dt;
				else {
					e.x = VW$3 / 2 + Math.sin(e.t * .75) * (VW$3 / 2 - 78);
					e.fireTimer -= dt;
					if (e.fireTimer <= 0) {
						bossAttack(e);
						e.fireTimer = Math.max(.55, 1.05 - G.wave * .015);
					}
				}
				if (e.y > 660) enemies.splice(i, 1);
			}
		};
		const collide = () => {
			for (let i = bullets.length - 1; i >= 0; i -= 1) {
				const b = bullets[i];
				if (!b.friendly) continue;
				for (let j = enemies.length - 1; j >= 0; j -= 1) {
					const e = enemies[j];
					if (!hit(b, e, b.r)) continue;
					e.hp -= b.dmg;
					burst(b.x, b.y, "#a7f3d0", 3, .5);
					bullets.splice(i, 1);
					if (e.hp <= 0) killEnemy(e, j);
					break;
				}
			}
			for (let i = bullets.length - 1; i >= 0; i -= 1) {
				const b = bullets[i];
				if (b.friendly) continue;
				if (hit(b, player, b.r + player.r)) {
					burst(b.x, b.y, "#ff5c7a", 6, .7);
					bullets.splice(i, 1);
					damagePlayer();
					if (G.mode !== "running") return;
				}
			}
			for (let j = enemies.length - 1; j >= 0; j -= 1) {
				const e = enemies[j];
				if (!hit(e, player, e.r * .8)) continue;
				damagePlayer();
				if (e.type !== "boss") killEnemy(e, j);
				if (G.mode !== "running") return;
			}
		};
		const drawEnemy = (e) => {
			ctx.save();
			ctx.translate(e.x, e.y);
			if (e.type === "grunt") {
				ctx.shadowColor = "#ff5c7a";
				ctx.shadowBlur = 14;
				ctx.fillStyle = "#ff5c7a";
				ctx.beginPath();
				ctx.moveTo(0, 13);
				ctx.lineTo(11, -11);
				ctx.lineTo(0, -5);
				ctx.lineTo(-11, -11);
				ctx.closePath();
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.fillStyle = "rgba(255,255,255,.85)";
				ctx.beginPath();
				ctx.arc(0, 3, 2.6, 0, TAU$5);
				ctx.fill();
			} else if (e.type === "zigzag") {
				ctx.rotate(e.t * 1.6);
				ctx.shadowColor = "#a78bfa";
				ctx.shadowBlur = 14;
				ctx.fillStyle = "#a78bfa";
				ctx.beginPath();
				ctx.moveTo(0, -12);
				ctx.lineTo(12, 0);
				ctx.lineTo(0, 12);
				ctx.lineTo(-12, 0);
				ctx.closePath();
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.fillStyle = "rgba(255,255,255,.85)";
				ctx.beginPath();
				ctx.arc(0, 0, 3, 0, TAU$5);
				ctx.fill();
			} else if (e.type === "shooter") {
				ctx.shadowColor = "#fb923c";
				ctx.shadowBlur = 14;
				ctx.fillStyle = "#fb923c";
				ctx.beginPath();
				for (let i = 0; i < 6; i += 1) {
					const a = i / 6 * TAU$5 - Math.PI / 2;
					const px = Math.cos(a) * 13;
					const py = Math.sin(a) * 13;
					if (i === 0) ctx.moveTo(px, py);
					else ctx.lineTo(px, py);
				}
				ctx.closePath();
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.fillStyle = "rgba(255,255,255,.9)";
				ctx.beginPath();
				ctx.arc(0, 0, 3.6, 0, TAU$5);
				ctx.fill();
			} else if (e.type === "tank") {
				ctx.shadowColor = "#ef4444";
				ctx.shadowBlur = 16;
				const tg = ctx.createLinearGradient(0, -18, 0, 18);
				tg.addColorStop(0, "#fca5a5");
				tg.addColorStop(1, "#b91c1c");
				ctx.fillStyle = tg;
				rounded$1(ctx, -17, -17, 34, 34, 7);
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.strokeStyle = "rgba(255,255,255,.55)";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(-7, 0);
				ctx.lineTo(7, 0);
				ctx.moveTo(0, -7);
				ctx.lineTo(0, 7);
				ctx.stroke();
				if (e.hp < e.maxHp) {
					ctx.fillStyle = "rgba(0,0,0,.5)";
					rounded$1(ctx, -16, -26, 32, 3, 2);
					ctx.fill();
					ctx.fillStyle = "#ef4444";
					rounded$1(ctx, -16, -26, 32 * (e.hp / e.maxHp), 3, 2);
					ctx.fill();
				}
			} else {
				const pulse = 1 + Math.sin(e.t * 2.2) * .04;
				ctx.scale(pulse, pulse);
				ctx.shadowColor = "#f472b6";
				ctx.shadowBlur = 30;
				const bg = ctx.createRadialGradient(0, 0, 6, 0, 0, 48);
				bg.addColorStop(0, "#f9a8d4");
				bg.addColorStop(1, "#be185d");
				ctx.fillStyle = bg;
				ctx.beginPath();
				ctx.moveTo(0, -44);
				ctx.lineTo(46, -10);
				ctx.lineTo(30, 30);
				ctx.lineTo(0, 44);
				ctx.lineTo(-30, 30);
				ctx.lineTo(-46, -10);
				ctx.closePath();
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.fillStyle = "rgba(255,255,255,.92)";
				ctx.beginPath();
				ctx.arc(0, 0, 9, 0, TAU$5);
				ctx.fill();
				ctx.fillStyle = "#f472b6";
				ctx.beginPath();
				ctx.arc(0, 0, 5, 0, TAU$5);
				ctx.fill();
				const hp = Math.max(0, e.hp / e.maxHp);
				ctx.fillStyle = "rgba(0,0,0,.55)";
				rounded$1(ctx, -45, -68, 90, 5, 3);
				ctx.fill();
				ctx.fillStyle = hp > .5 ? "#f472b6" : hp > .25 ? "#fb923c" : "#ef4444";
				rounded$1(ctx, -45, -68, 90 * hp, 5, 3);
				ctx.fill();
			}
			ctx.restore();
		};
		const draw = () => {
			ctx.clearRect(0, 0, VW$3, VH$2);
			ctx.save();
			if (G.shake > 0) ctx.translate(rnd(-1, 1) * G.shake, rnd(-1, 1) * G.shake);
			for (const s of stars) {
				ctx.globalAlpha = s.a * (.75 + Math.sin(s.tw) * .25);
				ctx.fillStyle = "#cfe9ff";
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r, 0, TAU$5);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (const p of powerups) {
				const bob = Math.sin(p.t * 6) * 2;
				const color = p.type === "W" ? "#6ee7b7" : p.type === "S" ? "#60a5fa" : p.type === "H" ? "#ff5c7a" : "#ffd166";
				ctx.save();
				ctx.translate(p.x, p.y + bob);
				ctx.shadowColor = color;
				ctx.shadowBlur = 18;
				ctx.strokeStyle = color;
				ctx.lineWidth = 2;
				rounded$1(ctx, -11, -11, 22, 22, 6);
				ctx.stroke();
				ctx.shadowBlur = 0;
				ctx.fillStyle = `${color}22`;
				rounded$1(ctx, -11, -11, 22, 22, 6);
				ctx.fill();
				ctx.fillStyle = color;
				ctx.font = "800 12px sans-serif";
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(p.type, 0, .5);
				ctx.restore();
			}
			enemies.forEach(drawEnemy);
			for (const b of bullets) {
				ctx.shadowBlur = 12;
				if (b.friendly) {
					ctx.shadowColor = "#a7f3d0";
					ctx.fillStyle = "#d1fae5";
					ctx.beginPath();
					ctx.ellipse(b.x, b.y, b.r * .8, b.r * 1.7, 0, 0, TAU$5);
					ctx.fill();
				} else {
					ctx.shadowColor = "#ff5c7a";
					ctx.fillStyle = "#fecdd3";
					ctx.beginPath();
					ctx.arc(b.x, b.y, b.r, 0, TAU$5);
					ctx.fill();
				}
				ctx.shadowBlur = 0;
			}
			if (!(player.invuln > 0 && Math.floor(player.invuln * 14) % 2 === 0)) {
				ctx.save();
				ctx.translate(player.x, player.y);
				const f = 1 + Math.sin(performance.now() / 40) * .3;
				const fg = ctx.createLinearGradient(0, 9, 0, 30 * f);
				fg.addColorStop(0, "rgba(110,231,183,.95)");
				fg.addColorStop(1, "rgba(34,211,167,0)");
				ctx.fillStyle = fg;
				ctx.beginPath();
				ctx.moveTo(-5, 9);
				ctx.lineTo(5, 9);
				ctx.lineTo(0, 27 * f);
				ctx.closePath();
				ctx.fill();
				ctx.shadowColor = "#6ee7b7";
				ctx.shadowBlur = 18;
				const bg = ctx.createLinearGradient(0, -18, 0, 14);
				bg.addColorStop(0, "#d1fae5");
				bg.addColorStop(1, "#22d3a7");
				ctx.fillStyle = bg;
				ctx.beginPath();
				ctx.moveTo(0, -18);
				ctx.lineTo(13, 10);
				ctx.lineTo(0, 5);
				ctx.lineTo(-13, 10);
				ctx.closePath();
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.fillStyle = "rgba(255,255,255,.9)";
				ctx.beginPath();
				ctx.arc(0, -4, 3.4, 0, TAU$5);
				ctx.fill();
				if (player.shield > 0) {
					ctx.strokeStyle = "rgba(96,165,250,.85)";
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.arc(0, 0, 25, 0, TAU$5);
					ctx.stroke();
				}
				ctx.restore();
			}
			for (const p of particles) {
				ctx.globalAlpha = Math.max(0, p.life);
				ctx.fillStyle = p.color;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size * p.life, 0, TAU$5);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			ctx.restore();
			if (G.flash > 0) {
				ctx.fillStyle = `rgba(255,255,255,${G.flash * .14})`;
				ctx.fillRect(0, 0, VW$3, VH$2);
			}
			if (G.lives === 1 && G.mode === "running") {
				const a = .07 + Math.sin(performance.now() / 220) * .05;
				const g = ctx.createLinearGradient(0, VH$2, 0, 480);
				g.addColorStop(0, `rgba(255,92,122,${a})`);
				g.addColorStop(1, "rgba(255,92,122,0)");
				ctx.fillStyle = g;
				ctx.fillRect(0, 480, VW$3, 120);
			}
		};
		const update = (dt) => {
			let kx = 0;
			let ky = 0;
			if (keys.left) kx -= 1;
			if (keys.right) kx += 1;
			if (keys.up) ky -= 1;
			if (keys.down) ky += 1;
			if (kx || ky) {
				const len = Math.hypot(kx, ky) || 1;
				player.x += kx / len * player.speed * dt;
				player.y += ky / len * player.speed * dt;
				player.tx = player.x;
				player.ty = player.y;
			} else {
				const k = 1 - Math.exp(-20 * dt);
				player.x = lerp$1(player.x, player.tx, k);
				player.y = lerp$1(player.y, player.ty, k);
			}
			player.x = clamp$1(player.x, player.r, VW$3 - player.r);
			player.y = clamp$1(player.y, player.r + 20, VH$2 - player.r);
			player.fireTimer -= dt;
			if (player.fireTimer <= 0) {
				firePlayer();
				player.fireTimer = player.fireRate;
				sfx(1100 + player.weapon * 60, .025, "square", .008);
			}
			if (player.invuln > 0) player.invuln -= dt;
			for (let i = bullets.length - 1; i >= 0; i -= 1) {
				const b = bullets[i];
				b.x += b.vx * dt;
				b.y += b.vy * dt;
				b.life -= dt;
				if (b.life <= 0 || b.y < -20 || b.y > 620 || b.x < -20 || b.x > 420) bullets.splice(i, 1);
			}
			updateEnemies(dt);
			for (let i = powerups.length - 1; i >= 0; i -= 1) {
				const p = powerups[i];
				p.t += dt;
				p.y += p.vy * dt;
				if (p.y > 630) {
					powerups.splice(i, 1);
					continue;
				}
				if (Math.hypot(p.x - player.x, p.y - player.y) < p.r + player.r + 6) {
					applyPowerup(p);
					burst(p.x, p.y, "#ffd166", 10, .9);
					powerups.splice(i, 1);
				}
			}
			for (let i = particles.length - 1; i >= 0; i -= 1) {
				const p = particles[i];
				p.x += p.vx * dt;
				p.y += p.vy * dt;
				p.vx *= 1 - 2.4 * dt;
				p.vy *= 1 - 2.4 * dt;
				p.life -= p.decay * dt;
				if (p.life <= 0) particles.splice(i, 1);
			}
			updateWave(dt);
			collide();
			if (G.shake > 0) G.shake = Math.max(0, G.shake - dt * 30);
			if (G.flash > 0) G.flash = Math.max(0, G.flash - dt * 2.2);
		};
		const loop = (ts) => {
			if (!alive) return;
			if (!last) last = ts;
			let dt = (ts - last) / 1e3;
			last = ts;
			if (dt > .06) dt = .06;
			const speed = G.mode === "paused" ? 0 : 1;
			for (const s of stars) {
				s.y += s.sp * dt * speed;
				s.tw += dt * 2;
				if (s.y > 604) {
					s.y = -4;
					s.x = rnd(0, VW$3);
				}
			}
			if (G.mode === "running") update(dt);
			else if (particles.length) for (let i = particles.length - 1; i >= 0; i -= 1) {
				const p = particles[i];
				p.life -= p.decay * dt;
				if (p.life <= 0) particles.splice(i, 1);
			}
			draw();
			requestAnimationFrame(loop);
		};
		const start = () => {
			bullets = [];
			enemies = [];
			powerups = [];
			particles = [];
			spawnQueue = [];
			G.mode = "running";
			G.score = 0;
			G.lives = 3;
			G.shake = 0;
			G.flash = 0;
			player.x = player.tx = VW$3 / 2;
			player.y = player.ty = 530;
			player.weapon = 1;
			player.shield = 0;
			player.invuln = 1.2;
			player.fireTimer = 0;
			setMode("running");
			setRecord(false);
			setAnnounce(null);
			sync();
			startWave(1);
			sfx(520, .1, "sine", .04);
		};
		const pause = () => {
			if (G.mode !== "running") return;
			G.mode = "paused";
			setMode("paused");
			sfx(400, .1, "sine", .03);
		};
		const resume = () => {
			if (G.mode !== "paused") return;
			G.mode = "running";
			setMode("running");
			sfx(600, .1, "sine", .03);
		};
		api.current = {
			start,
			pause,
			resume
		};
		const keymap = {
			ArrowLeft: "left",
			KeyA: "left",
			ArrowRight: "right",
			KeyD: "right",
			ArrowUp: "up",
			KeyW: "up",
			ArrowDown: "down",
			KeyS: "down"
		};
		const onKey = (event) => {
			if (event.code === "Space" || event.code === "Enter") {
				event.preventDefault();
				if (G.mode === "idle" || G.mode === "over") start();
				else if (G.mode === "running") pause();
				else if (G.mode === "paused") resume();
				return;
			}
			const key = keymap[event.code];
			if (key) {
				event.preventDefault();
				keys[key] = true;
			}
		};
		const onUp = (event) => {
			const key = keymap[event.code];
			if (key) {
				event.preventDefault();
				keys[key] = false;
			}
		};
		const pos = (event) => {
			const rect = boardEl.getBoundingClientRect();
			return {
				x: (event.clientX - rect.left) * (VW$3 / rect.width),
				y: (event.clientY - rect.top) * (VH$2 / rect.height)
			};
		};
		const down = (event) => {
			if (G.mode !== "running") return;
			if (event.target.closest("button")) return;
			dragging = true;
			const p = pos(event);
			player.tx = clamp$1(p.x, player.r, VW$3 - player.r);
			player.ty = clamp$1(p.y - 34, player.r + 10, VH$2 - player.r);
		};
		const move = (event) => {
			if (!dragging || G.mode !== "running") return;
			const p = pos(event);
			player.tx = clamp$1(p.x, player.r, VW$3 - player.r);
			player.ty = clamp$1(p.y - 34, player.r + 10, VH$2 - player.r);
		};
		const up = () => {
			dragging = false;
		};
		const onHide = () => {
			if (document.hidden && G.mode === "running") pause();
		};
		fit();
		setBest(G.best);
		window.addEventListener("keydown", onKey);
		window.addEventListener("keyup", onUp);
		boardEl.addEventListener("pointerdown", down);
		boardEl.addEventListener("pointermove", move);
		boardEl.addEventListener("pointerup", up);
		boardEl.addEventListener("pointercancel", up);
		document.addEventListener("visibilitychange", onHide);
		const frame = requestAnimationFrame(loop);
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("keyup", onUp);
			boardEl.removeEventListener("pointerdown", down);
			boardEl.removeEventListener("pointermove", move);
			boardEl.removeEventListener("pointerup", up);
			boardEl.removeEventListener("pointercancel", up);
			document.removeEventListener("visibilitychange", onHide);
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	const banner = !announce ? "" : announce.kind === "wave" ? `${COPY$5.wave[lang]} ${announce.level}` : announce.kind === "boss" ? COPY$5.boss[lang] : announce.kind === "clear" ? COPY$5.clear[lang] : announce.kind === "weapon" ? `${COPY$5.gun[lang]} ${announce.level}` : announce.kind === "shield" ? COPY$5.shield[lang] : announce.kind === "life" ? COPY$5.life[lang] : COPY$5.bomb[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "kosmos-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "kosmos-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kosmos-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "kosmos-hud",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$5.score[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: score })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$5.wave[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: wave })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$5.lives[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-life",
						children: "♥".repeat(Math.max(0, lives))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "kosmos-board",
				ref: boardRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef }),
					announce ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kosmos-ann",
						children: banner
					}, announce.n) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "kosmos-gun",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COPY$5.gun[lang] }), [
							1,
							2,
							3,
							4
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: n <= weapon ? "is-on" : "" }, n))]
					}),
					mode === "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kosmos-pause",
						onClick: () => api.current.pause(),
						"aria-label": COPY$5.pause[lang],
						children: "❚❚"
					}) : null,
					mode !== "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ilan-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ilan-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "paused" ? COPY$5.pause[lang] : mode === "over" ? record ? COPY$5.record[lang] : COPY$5.over[lang] : game.name[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ilan-big",
									children: score
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mode === "paused" ? COPY$5.wait[lang] : COPY$5.lead[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "ilan-mini",
									children: [
										COPY$5.wave[lang],
										" ",
										wave,
										" · ",
										COPY$5.best[lang],
										" ",
										Math.max(best, score)
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ilan-actions",
									children: [mode === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "is-mint",
										onClick: () => api.current.resume(),
										children: COPY$5.resume[lang]
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: mode === "paused" ? "" : "is-mint",
										onClick: () => api.current.start(),
										children: mode === "idle" ? COPY$5.start[lang] : COPY$5.again[lang]
									})]
								})
							]
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY$5.keys[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var COLS$2 = 8;
var ROWS$2 = 10;
var PATH = [
	[0, 0],
	[1, 0],
	[2, 0],
	[3, 0],
	[4, 0],
	[5, 0],
	[6, 0],
	[6, 1],
	[6, 2],
	[5, 2],
	[4, 2],
	[3, 2],
	[2, 2],
	[1, 2],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 4],
	[2, 4],
	[3, 4],
	[4, 4],
	[5, 4],
	[6, 4],
	[6, 5],
	[6, 6],
	[5, 6],
	[4, 6],
	[3, 6],
	[2, 6],
	[1, 6],
	[0, 6],
	[0, 7],
	[0, 8],
	[1, 8],
	[2, 8],
	[3, 8],
	[4, 8],
	[5, 8],
	[6, 8],
	[7, 8]
];
var PATH_SET = new Set(PATH.map(([x, y]) => `${x},${y}`));
var BEST_KEY$4 = "nibras-qala-v1";
var TAU$4 = Math.PI * 2;
var ENEMY = {
	basic: {
		hp: 30,
		speed: 1.2,
		gold: 8,
		color: "#ef4444",
		radius: 8,
		hpScale: 1.15
	},
	fast: {
		hp: 20,
		speed: 2,
		gold: 10,
		color: "#fbbf24",
		radius: 6,
		hpScale: 1.12
	},
	tank: {
		hp: 120,
		speed: .7,
		gold: 25,
		color: "#a78bfa",
		radius: 11,
		hpScale: 1.18
	},
	boss: {
		hp: 500,
		speed: .55,
		gold: 150,
		color: "#f472b6",
		radius: 17,
		hpScale: 1.25
	}
};
var TOWER = {
	archer: {
		cost: 40,
		damage: 12,
		range: 2.5,
		rate: .5,
		color: "#6ee7b7",
		pSpeed: 22,
		splash: 0,
		slow: 0
	},
	cannon: {
		cost: 80,
		damage: 30,
		range: 2,
		rate: 1.2,
		color: "#fb923c",
		pSpeed: 14,
		splash: 1.3,
		slow: 0
	},
	frost: {
		cost: 60,
		damage: 6,
		range: 2.2,
		rate: .7,
		color: "#60a5fa",
		pSpeed: 18,
		splash: 0,
		slow: .5
	}
};
var COPY$4 = {
	wave: {
		az: "Dalğa",
		en: "Wave",
		tr: "Dalga",
		ar: "الموجة",
		ru: "Волна"
	},
	gold: {
		az: "Qızıl",
		en: "Gold",
		tr: "Altın",
		ar: "الذهب",
		ru: "Золото"
	},
	lives: {
		az: "Can",
		en: "Lives",
		tr: "Can",
		ar: "الحياة",
		ru: "Жизни"
	},
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	start: {
		az: "Başla",
		en: "Start",
		tr: "Başla",
		ar: "ابدأ",
		ru: "Старт"
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	fell: {
		az: "Qala düşdü",
		en: "The keep fell",
		tr: "Kale düştü",
		ar: "سقطت القلعة",
		ru: "Крепость пала"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	lead: {
		az: "Düşmən yolla gəlir. Qızıl topla, qüllə qur, qalanı qoru.",
		en: "Enemies follow the road. Gather gold, build towers, hold the fortress.",
		tr: "Düşman yoldan gelir. Altın topla, kule kur, kaleyi koru.",
		ar: "العدو يسير على الطريق. اجمع الذهب وابنِ الأبراج واحمِ القلعة.",
		ru: "Враг идёт по дороге. Собирай золото, строй башни, держи крепость."
	},
	hint: {
		az: "Qüllə seç, boş xanaya toxun. Qülləyə toxunsa, yüksəlir.",
		en: "Pick a tower, then tap an empty cell. Tap a tower to upgrade it.",
		tr: "Kule seç, boş kareye dokun. Kuleye dokununca yükselir.",
		ar: "اختر برجًا ثم المس خانة فارغة. المس البرج لترقيته.",
		ru: "Выбери башню и нажми пустую клетку. Нажатие на башню улучшает её."
	},
	next: {
		az: "Növbəti dalğa",
		en: "Next wave",
		tr: "Sonraki dalga",
		ar: "الموجة التالية",
		ru: "Следующая волна"
	},
	archer: {
		az: "Oxatan",
		en: "Archer",
		tr: "Okçu",
		ar: "الرامي",
		ru: "Лучник"
	},
	cannon: {
		az: "Top",
		en: "Cannon",
		tr: "Top",
		ar: "المدفع",
		ru: "Пушка"
	},
	frost: {
		az: "Buz",
		en: "Frost",
		tr: "Buz",
		ar: "الجليد",
		ru: "Лёд"
	},
	level: {
		az: "Səviyyə",
		en: "Level",
		tr: "Seviye",
		ar: "المستوى",
		ru: "Уровень"
	},
	path: {
		az: "Yolun üstündə qurmaq olmaz.",
		en: "You cannot build on the road.",
		tr: "Yolun üstüne kurulmaz.",
		ar: "لا يُبنى على الطريق.",
		ru: "На дороге строить нельзя."
	},
	taken: {
		az: "Burada qüllə var.",
		en: "A tower is already here.",
		tr: "Burada kule var.",
		ar: "هنا برج.",
		ru: "Здесь уже башня."
	},
	needGold: {
		az: "Qızıl çatmır.",
		en: "Not enough gold.",
		tr: "Altın yetmiyor.",
		ar: "الذهب لا يكفي.",
		ru: "Не хватает золота."
	},
	max: {
		az: "Maksimum səviyyə.",
		en: "Maximum level.",
		tr: "En yüksek seviye.",
		ar: "أعلى مستوى.",
		ru: "Максимальный уровень."
	},
	clear: {
		az: "Dalğa təmizləndi. +25",
		en: "Wave cleared. +25",
		tr: "Dalga temizlendi. +25",
		ar: "تم تنظيف الموجة. +25",
		ru: "Волна зачищена. +25"
	}
};
function readBest$4() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY$4) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function QalaGame() {
	const { lang } = useI18n();
	const game = gameBySlug("qala");
	const canvasRef = (0, import_react.useRef)(null);
	const boardRef = (0, import_react.useRef)(null);
	const api = (0, import_react.useRef)({
		start: () => {},
		pick: (_type) => {}
	});
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [wave, setWave] = (0, import_react.useState)(0);
	const [gold, setGold] = (0, import_react.useState)(200);
	const [lives, setLives] = (0, import_react.useState)(20);
	const [score, setScore] = (0, import_react.useState)(0);
	const [best, setBest] = (0, import_react.useState)(0);
	const [record, setRecord] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [info, setInfo] = (0, import_react.useState)(null);
	const [toast, setToast] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const boardEl = boardRef.current;
		if (!canvas || !boardEl) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let W = 0;
		let H = 0;
		let cell = 40;
		let offX = 0;
		let offY = 0;
		let pathPx = [];
		let pathLen = 0;
		const state = {
			mode: "idle",
			wave: 0,
			gold: 200,
			lives: 20,
			score: 0,
			best: readBest$4(),
			selected: null,
			towers: [],
			enemies: [],
			shots: [],
			particles: [],
			queue: [],
			between: true,
			delay: 0,
			shake: 0,
			flash: 0
		};
		let alive = true;
		let last = 0;
		let infoShown = "";
		let actx = null;
		const sfx = (freq, dur = .08, type = "sine", vol = .03) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.setValueAtTime(freq, actx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .6), actx.currentTime + dur);
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const sync = () => {
			setWave(state.wave);
			setGold(state.gold);
			setLives(state.lives);
			setScore(state.score);
			setBest(Math.max(state.best, state.score));
			setSelected(state.selected);
		};
		const say = (key, extra) => setToast({
			key,
			n: Date.now(),
			...extra
		});
		const showInfo = (text) => {
			const next = text ?? "";
			if (next === infoShown) return;
			infoShown = next;
			setInfo(text);
		};
		const burst = (x, y, color, count = 8, power = 1) => {
			for (let i = 0; i < count; i += 1) {
				const a = Math.random() * TAU$4;
				const sp = (40 + Math.random() * 120) * power;
				state.particles.push({
					x,
					y,
					vx: Math.cos(a) * sp,
					vy: Math.sin(a) * sp,
					life: 1,
					decay: 1.8 + Math.random() * 1.2,
					size: 1.5 + Math.random() * 2 * power,
					color
				});
			}
			if (state.particles.length > 300) state.particles.splice(0, state.particles.length - 300);
		};
		const layout = () => {
			const rect = boardEl.getBoundingClientRect();
			if (!rect.width || !rect.height) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(rect.width * dpr);
			canvas.height = Math.round(rect.height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			W = rect.width;
			H = rect.height;
			cell = Math.min(W / COLS$2, H / ROWS$2);
			offX = (W - COLS$2 * cell) / 2;
			offY = (H - ROWS$2 * cell) / 2;
			pathPx = PATH.map(([x, y]) => ({
				x: offX + (x + .5) * cell,
				y: offY + (y + .5) * cell
			}));
			pathLen = 0;
			for (let i = 1; i < pathPx.length; i += 1) pathLen += Math.hypot(pathPx[i].x - pathPx[i - 1].x, pathPx[i].y - pathPx[i - 1].y);
			for (const tower of state.towers) {
				tower.x = offX + (tower.gx + .5) * cell;
				tower.y = offY + (tower.gy + .5) * cell;
			}
		};
		const posAt = (d) => {
			let left = d;
			for (let i = 1; i < pathPx.length; i += 1) {
				const a = pathPx[i - 1];
				const b = pathPx[i];
				const seg = Math.hypot(b.x - a.x, b.y - a.y);
				if (left <= seg) {
					const t = seg ? left / seg : 0;
					return {
						x: a.x + (b.x - a.x) * t,
						y: a.y + (b.y - a.y) * t
					};
				}
				left -= seg;
			}
			return pathPx[pathPx.length - 1] || {
				x: 0,
				y: 0
			};
		};
		const killEnemy = (enemy) => {
			const index = state.enemies.indexOf(enemy);
			if (index >= 0) state.enemies.splice(index, 1);
			state.gold += enemy.gold;
			state.score += enemy.gold * 2;
			sync();
			burst(enemy.x, enemy.y, enemy.color, enemy.type === "boss" ? 40 : 12, enemy.type === "boss" ? 2 : 1);
			sfx(enemy.type === "boss" ? 90 : 260, enemy.type === "boss" ? .4 : .1, "sawtooth", enemy.type === "boss" ? .06 : .025);
			if (enemy.type === "boss") {
				state.shake = 10;
				state.flash = .4;
			}
		};
		const gameOver = () => {
			state.mode = "over";
			showInfo(null);
			const isRec = state.score > state.best;
			if (isRec) {
				state.best = state.score;
				try {
					localStorage.setItem(BEST_KEY$4, String(state.best));
				} catch {}
			}
			setRecord(isRec);
			setMode("over");
			sync();
			sfx(200, .3, "sawtooth", .06);
		};
		const spawnEnemy = (type, waveNo) => {
			const base = ENEMY[type];
			const hp = Math.round(base.hp * base.hpScale ** Math.max(0, waveNo - 1));
			const start = pathPx[0] || {
				x: 0,
				y: 0
			};
			state.enemies.push({
				type,
				hp,
				maxHp: hp,
				speed: base.speed * cell,
				gold: base.gold + Math.floor(waveNo * .4),
				color: base.color,
				radius: Math.max(4, base.radius * Math.min(1, cell / 55)),
				dist: 0,
				x: start.x,
				y: start.y,
				slowUntil: 0,
				slowFactor: 1,
				dead: false
			});
		};
		const startWave = () => {
			state.wave += 1;
			state.between = false;
			const w = state.wave;
			const queue = [];
			if (w % 5 === 0) {
				queue.push({
					t: 0,
					type: "boss"
				});
				for (let i = 0; i < 4; i += 1) queue.push({
					t: 1 + i * .6,
					type: "basic"
				});
			} else {
				const count = 5 + w * 2;
				for (let i = 0; i < count; i += 1) {
					let type = "basic";
					if (w >= 3 && Math.random() < .35) type = "fast";
					if (w >= 4 && Math.random() < .18) type = "tank";
					queue.push({
						t: i * .65,
						type
					});
				}
			}
			state.queue = queue;
			sync();
			sfx(520, .1, "sine", .04);
		};
		const place = (gx, gy, type) => {
			if (PATH_SET.has(`${gx},${gy}`)) {
				say("path");
				sfx(220, .1, "square", .02);
				return;
			}
			if (state.towers.some((tower) => tower.gx === gx && tower.gy === gy)) {
				say("taken");
				return;
			}
			const spec = TOWER[type];
			if (state.gold < spec.cost) {
				say("gold");
				sfx(220, .1, "square", .02);
				return;
			}
			state.gold -= spec.cost;
			state.towers.push({
				type,
				gx,
				gy,
				level: 1,
				x: offX + (gx + .5) * cell,
				y: offY + (gy + .5) * cell,
				cooldown: 0,
				angle: -Math.PI / 2,
				damage: spec.damage,
				rangeCells: spec.range,
				color: spec.color
			});
			state.selected = null;
			sync();
			sfx(660, .08, "sine", .04);
			burst(offX + (gx + .5) * cell, offY + (gy + .5) * cell, spec.color, 10, .8);
		};
		const upgrade = (tower) => {
			if (tower.level >= 3) {
				say("max");
				return;
			}
			const cost = Math.round(TOWER[tower.type].cost * (tower.level === 1 ? .6 : 1));
			if (state.gold < cost) {
				say("need", { cost });
				sfx(220, .1, "square", .02);
				return;
			}
			state.gold -= cost;
			tower.level += 1;
			tower.damage *= 1.5;
			tower.rangeCells *= 1.1;
			sync();
			burst(tower.x, tower.y, tower.color, 16, 1);
			say("level", { level: tower.level });
			sfx(880, .1, "sine", .045);
		};
		const hitEnemy = (shot, target) => {
			target.hp -= shot.damage;
			burst(target.x, target.y, shot.color, 5, .7);
			if (shot.splash > 0) {
				for (const enemy of state.enemies) {
					if (enemy === target || enemy.dead) continue;
					const dx = enemy.x - target.x;
					const dy = enemy.y - target.y;
					if (dx * dx + dy * dy <= shot.splash * shot.splash) {
						enemy.hp -= shot.damage * .6;
						burst(enemy.x, enemy.y, shot.color, 3, .6);
					}
				}
				state.shake = Math.max(state.shake, 2);
			}
			if (shot.slow > 0) {
				target.slowUntil = 2;
				target.slowFactor = 1 - shot.slow;
			}
			for (let i = state.enemies.length - 1; i >= 0; i -= 1) {
				const enemy = state.enemies[i];
				if (enemy.hp <= 0 && !enemy.dead) {
					enemy.dead = true;
					killEnemy(enemy);
				}
			}
		};
		const update = (dt) => {
			if (state.between) {
				state.delay -= dt;
				if (state.delay > 0) showInfo(state.delay.toFixed(1));
				else {
					showInfo(null);
					startWave();
				}
			} else {
				for (let i = state.queue.length - 1; i >= 0; i -= 1) {
					state.queue[i].t -= dt;
					if (state.queue[i].t <= 0) {
						spawnEnemy(state.queue[i].type, state.wave);
						state.queue.splice(i, 1);
					}
				}
				if (state.queue.length === 0 && state.enemies.length === 0 && state.mode === "running") {
					state.between = true;
					state.delay = 3.5;
					state.score += 25;
					sync();
					say("clear");
				}
			}
			for (let i = state.enemies.length - 1; i >= 0; i -= 1) {
				const enemy = state.enemies[i];
				enemy.dist += enemy.speed * (enemy.slowUntil > 0 ? enemy.slowFactor : 1) * dt;
				if (enemy.slowUntil > 0) enemy.slowUntil -= dt;
				if (enemy.dist >= pathLen) {
					enemy.dead = true;
					state.enemies.splice(i, 1);
					state.lives -= 1;
					state.shake = 6;
					const end = pathPx[pathPx.length - 1];
					if (end) burst(end.x, end.y, "#ff5c7a", 14, 1.2);
					sfx(180, .25, "sawtooth", .06);
					sync();
					if (state.lives <= 0) {
						gameOver();
						return;
					}
					continue;
				}
				const point = posAt(enemy.dist);
				enemy.x = point.x;
				enemy.y = point.y;
			}
			for (const tower of state.towers) {
				tower.cooldown -= dt;
				if (tower.cooldown > 0) continue;
				let target = null;
				let bestD = Infinity;
				const reach = tower.rangeCells * cell;
				for (const enemy of state.enemies) {
					const d2 = (tower.x - enemy.x) ** 2 + (tower.y - enemy.y) ** 2;
					if (d2 < reach * reach && d2 < bestD) {
						bestD = d2;
						target = enemy;
					}
				}
				if (!target) continue;
				tower.angle = Math.atan2(target.y - tower.y, target.x - tower.x);
				state.shots.push({
					x: tower.x,
					y: tower.y,
					target,
					speed: TOWER[tower.type].pSpeed * cell,
					damage: tower.damage,
					splash: TOWER[tower.type].splash * cell,
					slow: TOWER[tower.type].slow,
					color: tower.color,
					size: tower.type === "cannon" ? 5 : tower.type === "frost" ? 3.5 : 2.5
				});
				tower.cooldown = TOWER[tower.type].rate;
				sfx(tower.type === "cannon" ? 180 : tower.type === "frost" ? 880 : 660, .04, "square", .015);
			}
			for (let i = state.shots.length - 1; i >= 0; i -= 1) {
				const shot = state.shots[i];
				if (shot.target.dead || shot.target.hp <= 0) {
					state.shots.splice(i, 1);
					continue;
				}
				const dx = shot.target.x - shot.x;
				const dy = shot.target.y - shot.y;
				const d = Math.hypot(dx, dy);
				const step = shot.speed * dt;
				if (d <= step + shot.target.radius) {
					hitEnemy(shot, shot.target);
					state.shots.splice(i, 1);
				} else {
					shot.x += dx / d * step;
					shot.y += dy / d * step;
				}
			}
			for (let i = state.particles.length - 1; i >= 0; i -= 1) {
				const bit = state.particles[i];
				bit.x += bit.vx * dt;
				bit.y += bit.vy * dt;
				bit.vx *= 1 - 3 * dt;
				bit.vy *= 1 - 3 * dt;
				bit.life -= bit.decay * dt;
				if (bit.life <= 0) state.particles.splice(i, 1);
			}
			if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 30);
			if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2.2);
		};
		const draw = () => {
			ctx.save();
			if (state.shake > 0) ctx.translate((Math.random() - .5) * state.shake, (Math.random() - .5) * state.shake);
			ctx.fillStyle = "#060a14";
			ctx.fillRect(0, 0, W, H);
			for (let y = 0; y < ROWS$2; y += 1) for (let x = 0; x < COLS$2; x += 1) {
				const px = offX + x * cell;
				const py = offY + y * cell;
				ctx.fillStyle = PATH_SET.has(`${x},${y}`) ? "rgba(255,209,102,.05)" : state.selected ? "rgba(110,231,183,.045)" : "rgba(255,255,255,.018)";
				ctx.fillRect(px, py, cell, cell);
				ctx.strokeStyle = "rgba(255,255,255,.045)";
				ctx.strokeRect(px + .5, py + .5, cell - 1, cell - 1);
			}
			if (pathPx.length > 1) {
				ctx.save();
				ctx.lineJoin = "round";
				ctx.lineCap = "round";
				ctx.strokeStyle = "rgba(0,0,0,.5)";
				ctx.lineWidth = cell * .95;
				ctx.beginPath();
				ctx.moveTo(pathPx[0].x, pathPx[0].y);
				pathPx.forEach((point, index) => {
					if (index) ctx.lineTo(point.x, point.y);
				});
				ctx.stroke();
				ctx.strokeStyle = "rgba(255,209,102,.12)";
				ctx.lineWidth = cell * .72;
				ctx.stroke();
				ctx.strokeStyle = "rgba(255,209,102,.4)";
				ctx.lineWidth = 1.5;
				ctx.setLineDash([5, 7]);
				ctx.stroke();
				ctx.setLineDash([]);
				ctx.fillStyle = "rgba(110,231,183,.7)";
				ctx.beginPath();
				ctx.arc(pathPx[0].x, pathPx[0].y, cell * .18, 0, TAU$4);
				ctx.fill();
				const end = pathPx[pathPx.length - 1];
				ctx.fillStyle = "rgba(255,92,122,.75)";
				ctx.beginPath();
				ctx.arc(end.x, end.y, cell * .2, 0, TAU$4);
				ctx.fill();
				ctx.restore();
			}
			for (const tower of state.towers) {
				const r = cell * .32;
				ctx.fillStyle = "rgba(6,12,22,.85)";
				ctx.beginPath();
				ctx.arc(tower.x, tower.y, r * 1.15, 0, TAU$4);
				ctx.fill();
				ctx.strokeStyle = tower.color;
				ctx.lineWidth = 2.2;
				ctx.beginPath();
				ctx.arc(tower.x, tower.y, r, 0, TAU$4);
				ctx.stroke();
				ctx.fillStyle = tower.color;
				if (tower.type === "cannon") {
					ctx.beginPath();
					ctx.arc(tower.x, tower.y, r * .45, 0, TAU$4);
					ctx.fill();
					ctx.save();
					ctx.translate(tower.x, tower.y);
					ctx.rotate(tower.angle);
					ctx.fillStyle = "#1a1204";
					ctx.fillRect(0, -r * .18, r * .9, r * .36);
					ctx.restore();
				} else if (tower.type === "frost") {
					ctx.beginPath();
					ctx.moveTo(tower.x, tower.y - r * .55);
					ctx.lineTo(tower.x + r * .5, tower.y);
					ctx.lineTo(tower.x, tower.y + r * .55);
					ctx.lineTo(tower.x - r * .5, tower.y);
					ctx.closePath();
					ctx.fill();
				} else {
					ctx.beginPath();
					ctx.moveTo(tower.x, tower.y - r * .55);
					ctx.lineTo(tower.x + r * .48, tower.y + r * .4);
					ctx.lineTo(tower.x - r * .48, tower.y + r * .4);
					ctx.closePath();
					ctx.fill();
				}
				const dot = Math.max(1.6, cell * .05);
				for (let i = 0; i < tower.level; i += 1) {
					ctx.fillStyle = "#fff";
					ctx.beginPath();
					ctx.arc(tower.x - (tower.level - 1) * dot * 2.2 / 2 + i * dot * 2.2, tower.y + r * 1.35, dot, 0, TAU$4);
					ctx.fill();
				}
			}
			for (const enemy of state.enemies) {
				ctx.fillStyle = enemy.color;
				ctx.beginPath();
				ctx.arc(enemy.x, enemy.y, enemy.radius, 0, TAU$4);
				ctx.fill();
				if (enemy.slowUntil > 0) {
					ctx.strokeStyle = "rgba(96,165,250,.85)";
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.arc(enemy.x, enemy.y, enemy.radius + 3, 0, TAU$4);
					ctx.stroke();
				}
				if (enemy.hp < enemy.maxHp) {
					const w = enemy.radius * 2.4;
					const h = Math.max(3, cell * .055);
					const ratio = Math.max(0, enemy.hp / enemy.maxHp);
					ctx.fillStyle = "rgba(0,0,0,.6)";
					ctx.fillRect(enemy.x - w / 2, enemy.y - enemy.radius - h - 3, w, h);
					ctx.fillStyle = ratio > .5 ? "#4ade80" : ratio > .25 ? "#fbbf24" : "#ef4444";
					ctx.fillRect(enemy.x - w / 2, enemy.y - enemy.radius - h - 3, w * ratio, h);
				}
			}
			for (const shot of state.shots) {
				ctx.fillStyle = shot.color;
				ctx.beginPath();
				ctx.arc(shot.x, shot.y, shot.size, 0, TAU$4);
				ctx.fill();
			}
			for (const bit of state.particles) {
				ctx.globalAlpha = Math.max(0, bit.life);
				ctx.fillStyle = bit.color;
				ctx.beginPath();
				ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU$4);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			ctx.restore();
			if (state.flash > 0) {
				ctx.fillStyle = `rgba(255,255,255,${state.flash * .13})`;
				ctx.fillRect(0, 0, W, H);
			}
		};
		const loop = (ts) => {
			if (!alive) return;
			if (!last) last = ts;
			let dt = (ts - last) / 1e3;
			last = ts;
			if (dt > .08) dt = .08;
			if (state.mode === "running") update(dt);
			else for (let i = state.particles.length - 1; i >= 0; i -= 1) {
				state.particles[i].life -= state.particles[i].decay * dt;
				if (state.particles[i].life <= 0) state.particles.splice(i, 1);
			}
			draw();
			requestAnimationFrame(loop);
		};
		const start = () => {
			state.mode = "running";
			state.wave = 0;
			state.gold = 200;
			state.lives = 20;
			state.score = 0;
			state.selected = null;
			state.towers = [];
			state.enemies = [];
			state.shots = [];
			state.particles = [];
			state.queue = [];
			state.between = true;
			state.delay = 2.5;
			state.shake = 0;
			state.flash = 0;
			setMode("running");
			setRecord(false);
			setToast(null);
			showInfo(null);
			sync();
			sfx(520, .1, "sine", .04);
		};
		const pick = (type) => {
			if (state.mode !== "running") return;
			if (state.gold < TOWER[type].cost) {
				say("gold");
				return;
			}
			state.selected = state.selected === type ? null : type;
			setSelected(state.selected);
			sfx(560, .06, "sine", .02);
		};
		api.current = {
			start,
			pick
		};
		const onKey = (event) => {
			if (state.mode === "idle" || state.mode === "over") {
				if (event.code === "Space" || event.code === "Enter") {
					event.preventDefault();
					start();
				}
				return;
			}
			if (event.code === "Digit1") pick("archer");
			if (event.code === "Digit2") pick("cannon");
			if (event.code === "Digit3") pick("frost");
			if (event.code === "Escape") {
				state.selected = null;
				setSelected(null);
			}
		};
		const onPointer = (event) => {
			if (state.mode !== "running") return;
			if (event.target.closest("button")) return;
			const rect = boardEl.getBoundingClientRect();
			const gx = Math.floor((event.clientX - rect.left - offX) / cell);
			const gy = Math.floor((event.clientY - rect.top - offY) / cell);
			if (gx < 0 || gy < 0 || gx >= COLS$2 || gy >= ROWS$2) return;
			const existing = state.towers.find((tower) => tower.gx === gx && tower.gy === gy);
			if (existing) {
				upgrade(existing);
				return;
			}
			if (state.selected) place(gx, gy, state.selected);
		};
		const observer = new ResizeObserver(layout);
		observer.observe(boardEl);
		layout();
		setBest(state.best);
		window.addEventListener("keydown", onKey);
		boardEl.addEventListener("pointerdown", onPointer);
		const frame = requestAnimationFrame(loop);
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("keydown", onKey);
			boardEl.removeEventListener("pointerdown", onPointer);
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	const toastText = !toast ? "" : toast.key === "path" ? COPY$4.path[lang] : toast.key === "taken" ? COPY$4.taken[lang] : toast.key === "gold" ? COPY$4.needGold[lang] : toast.key === "max" ? COPY$4.max[lang] : toast.key === "need" ? `${COPY$4.needGold[lang]} ${toast.cost}` : toast.key === "level" ? `${COPY$4.level[lang]} ${toast.level}` : COPY$4.clear[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "qala-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qala-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kosmos-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "qala-hud",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$4.wave[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: wave })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$4.gold[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-gold",
						children: gold
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$4.lives[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-life",
						children: lives
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$4.score[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: score })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qala-board",
				ref: boardRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef }),
					info ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "qala-info",
						children: [
							COPY$4.next[lang],
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: info })
						]
					}) : null,
					toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "qala-toast",
						children: toastText
					}, toast.n) : null,
					mode !== "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ilan-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ilan-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "over" ? record ? COPY$4.record[lang] : COPY$4.fell[lang] : game.name[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ilan-big",
									children: score
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: COPY$4.lead[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "ilan-mini",
									children: [
										COPY$4.wave[lang],
										" ",
										wave,
										" · ",
										COPY$4.best[lang],
										" ",
										Math.max(best, score)
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ilan-actions",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "is-gold",
										onClick: () => api.current.start(),
										children: mode === "idle" ? COPY$4.start[lang] : COPY$4.again[lang]
									})
								})
							]
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "qala-tools",
				children: [
					"archer",
					"cannon",
					"frost"
				].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `${selected === type ? "is-on" : ""} ${gold < TOWER[type].cost ? "is-off" : ""}`,
					onClick: () => api.current.pick(type),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: COPY$4[type][lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: TOWER[type].cost })]
				}, type))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY$4.hint[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var VW$2 = 480;
var VH$1 = 640;
var COLS$1 = 8;
var ROWS$1 = 6;
var BRICK_LEFT = 20;
var BRICK_TOP = 80;
var BRICK_W = 405 / COLS$1;
var BRICK_H = 28;
var PADDLE_Y = 600;
var PADDLE_H = 12;
var PADDLE_W = 90;
var PADDLE_WIDE = 130;
var BALL_R = 7;
var BASE_SPEED = 380;
var MAX_SPEED = 620;
var ROW_COLORS = [
	"#a78bfa",
	"#60a5fa",
	"#6ee7b7",
	"#ffd166",
	"#fb923c",
	"#ff5c7a"
];
var BEST_KEY$3 = "nibras-neon-v1";
var TAU$3 = Math.PI * 2;
var COPY$3 = {
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	lives: {
		az: "Can",
		en: "Lives",
		tr: "Can",
		ar: "الحياة",
		ru: "Жизни"
	},
	level: {
		az: "Səviyyə",
		en: "Level",
		tr: "Seviye",
		ar: "المستوى",
		ru: "Уровень"
	},
	combo: {
		az: "Kombo",
		en: "Combo",
		tr: "Kombo",
		ar: "سلسلة",
		ru: "Серия"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	start: {
		az: "Başla",
		en: "Start",
		tr: "Başla",
		ar: "ابدأ",
		ru: "Старт"
	},
	resume: {
		az: "Davam et",
		en: "Continue",
		tr: "Devam et",
		ar: "أكمل",
		ru: "Дальше"
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	pause: {
		az: "Pauza",
		en: "Pause",
		tr: "Duraklat",
		ar: "توقف",
		ru: "Пауза"
	},
	over: {
		az: "Oyun bitdi",
		en: "Game over",
		tr: "Oyun bitti",
		ar: "انتهت اللعبة",
		ru: "Игра окончена"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	lead: {
		az: "Topu idarə et, kərpicləri sındır. Kombo qur, gücləndirməni tut.",
		en: "Steer the ball and break every brick. Build a combo and catch upgrades.",
		tr: "Topu yönet, tuğlaları kır. Kombo kur, güçlendirmeyi tut.",
		ar: "وجّه الكرة وحطّم الطوب. ابنِ سلسلة والتقط التعزيز.",
		ru: "Веди мяч и разбей кирпичи. Собирай серию и лови усиления."
	},
	wait: {
		az: "Top səni gözləyir.",
		en: "The ball is waiting.",
		tr: "Top seni bekliyor.",
		ar: "الكرة تنتظرك.",
		ru: "Мяч ждёт."
	},
	hint: {
		az: "Oxlar və ya A D. Boşluq topu buraxır. P pauzadır.",
		en: "Arrows or A D. Space launches. P pauses.",
		tr: "Oklar ya da A D. Boşluk topu bırakır. P duraklatır.",
		ar: "الأسهم أو A D. المسافة تطلق الكرة. P توقف.",
		ru: "Стрелки или A D. Пробел запускает. P — пауза."
	},
	launch: {
		az: "Toxun və ya boşluq",
		en: "Tap or space",
		tr: "Dokun ya da boşluk",
		ar: "المس أو المسافة",
		ru: "Нажми или пробел"
	},
	wide: {
		az: "Geniş pad",
		en: "Wide paddle",
		tr: "Geniş raket",
		ar: "مضرب عريض",
		ru: "Широкая ракетка"
	},
	narrow: {
		az: "Pad daraldı",
		en: "Paddle is narrow again",
		tr: "Raket daraldı",
		ar: "عاد المضرب ضيقًا",
		ru: "Ракетка снова узкая"
	},
	multi: {
		az: "Çox top",
		en: "Multi-ball",
		tr: "Çok top",
		ar: "كرات أكثر",
		ru: "Несколько мячей"
	},
	life: {
		az: "+1 can",
		en: "+1 life",
		tr: "+1 can",
		ar: "+1 حياة",
		ru: "+1 жизнь"
	},
	cleared: {
		az: "Səviyyə təmizləndi",
		en: "Level cleared",
		tr: "Seviye temizlendi",
		ar: "تم تنظيف المستوى",
		ru: "Уровень зачищен"
	}
};
var clamp = (v, a, b) => v < a ? a : v > b ? b : v;
function readBest$3() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY$3) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function rounded(ctx, x, y, w, h, r) {
	const radius = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.arcTo(x + w, y, x + w, y + h, radius);
	ctx.arcTo(x + w, y + h, x, y + h, radius);
	ctx.arcTo(x, y + h, x, y, radius);
	ctx.arcTo(x, y, x + w, y, radius);
	ctx.closePath();
}
function NeonGame() {
	const { lang } = useI18n();
	const game = gameBySlug("neon");
	const canvasRef = (0, import_react.useRef)(null);
	const api = (0, import_react.useRef)({
		start: () => {},
		pause: () => {},
		resume: () => {}
	});
	const launchRef = (0, import_react.useRef)(COPY$3.launch[lang]);
	launchRef.current = COPY$3.launch[lang];
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [score, setScore] = (0, import_react.useState)(0);
	const [lives, setLives] = (0, import_react.useState)(3);
	const [level, setLevel] = (0, import_react.useState)(1);
	const [combo, setCombo] = (0, import_react.useState)(0);
	const [best, setBest] = (0, import_react.useState)(0);
	const [record, setRecord] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const G = {
			mode: "idle",
			score: 0,
			lives: 3,
			level: 1,
			combo: 0,
			best: readBest$3(),
			shake: 0,
			flash: 0,
			clear: 0
		};
		const paddle = {
			x: VW$2 / 2,
			targetX: VW$2 / 2,
			y: PADDLE_Y,
			w: PADDLE_W,
			h: PADDLE_H,
			wideUntil: 0
		};
		let balls = [];
		let bricks = [];
		let drops = [];
		let particles = [];
		let floaters = [];
		const keys = {
			left: false,
			right: false
		};
		let alive = true;
		let last = 0;
		let actx = null;
		const sfx = (freq, dur = .06, type = "square", vol = .02) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.setValueAtTime(freq, actx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .55), actx.currentTime + dur);
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const sync = () => {
			setScore(G.score);
			setLives(G.lives);
			setLevel(G.level);
			setCombo(G.combo);
			setBest(Math.max(G.best, G.score));
		};
		const say = (key, extra) => setToast({
			key,
			n: Date.now(),
			...extra
		});
		const burst = (x, y, color, count = 10, power = 1) => {
			for (let i = 0; i < count; i += 1) {
				const a = Math.random() * TAU$3;
				const sp = (50 + Math.random() * 150) * power;
				particles.push({
					x,
					y,
					vx: Math.cos(a) * sp,
					vy: Math.sin(a) * sp,
					life: 1,
					decay: 1.6 + Math.random() * 1.4,
					size: 1.8 + Math.random() * 2.6 * power,
					color
				});
			}
			if (particles.length > 320) particles.splice(0, particles.length - 320);
		};
		const fit = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(VW$2 * dpr);
			canvas.height = Math.round(VH$1 * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const buildLevel = (levelNo) => {
			bricks = [];
			for (let r = 0; r < ROWS$1; r += 1) for (let c = 0; c < COLS$1; c += 1) {
				const hp = Math.min(5, Math.max(1, Math.ceil((ROWS$1 - r) / 2)) + Math.floor((levelNo - 1) / 2));
				bricks.push({
					x: BRICK_LEFT + c * 55.625,
					y: BRICK_TOP + r * 33,
					w: BRICK_W,
					h: BRICK_H,
					hp,
					maxHp: hp,
					color: ROW_COLORS[r],
					flash: 0
				});
			}
		};
		const spawnBall = () => {
			balls = [{
				x: paddle.x,
				y: paddle.y - BALL_R - 2,
				vx: 0,
				vy: 0,
				radius: BALL_R,
				stuck: true,
				trail: []
			}];
		};
		const launchAll = () => {
			for (const ball of balls) {
				if (!ball.stuck) continue;
				ball.stuck = false;
				const angle = -Math.PI / 2 + (Math.random() - .5) * .5;
				const speed = BASE_SPEED + (G.level - 1) * 18;
				ball.vx = Math.cos(angle) * speed;
				ball.vy = Math.sin(angle) * speed;
			}
			sfx(560, .08, "sine", .035);
		};
		const gameOver = () => {
			G.mode = "over";
			const isRec = G.score > G.best;
			if (isRec) {
				G.best = G.score;
				try {
					localStorage.setItem(BEST_KEY$3, String(G.best));
				} catch {}
			}
			setRecord(isRec);
			setMode("over");
			sync();
			sfx(220, .25, "sawtooth", .05);
		};
		const advance = () => {
			G.level += 1;
			buildLevel(G.level);
			paddle.w = PADDLE_W;
			paddle.wideUntil = 0;
			paddle.x = paddle.targetX = VW$2 / 2;
			drops = [];
			spawnBall();
			G.mode = "playing";
			setMode("playing");
			sync();
		};
		const nextLevel = () => {
			G.mode = "levelclear";
			G.clear = 2;
			const bonus = 200 + G.level * 50;
			G.score += bonus;
			G.flash = .6;
			sync();
			say("clear", {
				bonus,
				level: G.level
			});
			sfx(660, .1, "sine", .04);
		};
		const dropPower = (x, y) => {
			const roll = Math.random() * 100;
			const type = roll < 40 ? "wide" : roll < 80 ? "multi" : "life";
			drops.push({
				x,
				y,
				vy: 130,
				type,
				t: 0
			});
		};
		const applyPower = (drop) => {
			if (drop.type === "wide") {
				paddle.w = PADDLE_WIDE;
				paddle.wideUntil = 10;
				say("wide");
				sfx(880, .1, "sine", .04);
			} else if (drop.type === "multi") {
				const base = balls[0];
				if (base) for (let i = 0; i < 2; i += 1) {
					const angle = -Math.PI / 2 + (Math.random() - .5) * .9;
					const sp = Math.hypot(base.vx, base.vy) || BASE_SPEED;
					balls.push({
						x: base.x,
						y: base.y,
						vx: Math.cos(angle) * sp,
						vy: Math.sin(angle) * sp,
						radius: BALL_R,
						stuck: false,
						trail: []
					});
				}
				say("multi");
				sfx(700, .08, "sine", .04);
			} else {
				G.lives += 1;
				sync();
				say("life");
				sfx(660, .1, "sine", .04);
			}
			burst(drop.x, drop.y, "#ffd166", 10, .9);
		};
		const hitBrick = (brick, index) => {
			brick.hp -= 1;
			brick.flash = .16;
			if (brick.hp > 0) {
				burst(brick.x + brick.w / 2, brick.y + brick.h / 2, brick.color, 4, .7);
				sfx(280, .04, "square", .015);
				return;
			}
			bricks.splice(index, 1);
			G.combo += 1;
			const points = Math.round(10 * (1 + Math.min(G.combo, 30) * .05));
			G.score += points;
			sync();
			burst(brick.x + brick.w / 2, brick.y + brick.h / 2, brick.color, 14);
			floaters.push({
				x: brick.x + brick.w / 2,
				y: brick.y + brick.h / 2,
				text: `+${points}`,
				color: brick.color,
				life: 1,
				vy: -50
			});
			sfx(380 + Math.min(G.combo * 25, 700), .05, "square", .02);
			if (Math.random() < .16) dropPower(brick.x + brick.w / 2, brick.y + brick.h / 2);
			if (bricks.length === 0) nextLevel();
		};
		const ballVsBrick = (ball) => {
			for (let i = bricks.length - 1; i >= 0; i -= 1) {
				const brick = bricks[i];
				if (ball.x + ball.radius < brick.x || ball.x - ball.radius > brick.x + brick.w) continue;
				if (ball.y + ball.radius < brick.y || ball.y - ball.radius > brick.y + brick.h) continue;
				const oL = ball.x + ball.radius - brick.x;
				const oR = brick.x + brick.w - (ball.x - ball.radius);
				const oT = ball.y + ball.radius - brick.y;
				const oB = brick.y + brick.h - (ball.y - ball.radius);
				const m = Math.min(oL, oR, oT, oB);
				if (m === oL) {
					ball.x = brick.x - ball.radius;
					ball.vx = -Math.abs(ball.vx);
				} else if (m === oR) {
					ball.x = brick.x + brick.w + ball.radius;
					ball.vx = Math.abs(ball.vx);
				} else if (m === oT) {
					ball.y = brick.y - ball.radius;
					ball.vy = -Math.abs(ball.vy);
				} else {
					ball.y = brick.y + brick.h + ball.radius;
					ball.vy = Math.abs(ball.vy);
				}
				hitBrick(brick, i);
				return;
			}
		};
		const update = (dt) => {
			if (keys.left) paddle.targetX -= 620 * dt;
			if (keys.right) paddle.targetX += 620 * dt;
			paddle.targetX = clamp(paddle.targetX, paddle.w / 2, VW$2 - paddle.w / 2);
			paddle.x = clamp(paddle.x + (paddle.targetX - paddle.x) * Math.min(1, dt * 20), paddle.w / 2, VW$2 - paddle.w / 2);
			if (paddle.wideUntil > 0) {
				paddle.wideUntil -= dt;
				if (paddle.wideUntil <= 0) {
					paddle.w = PADDLE_W;
					say("narrow");
				}
			}
			for (let i = balls.length - 1; i >= 0; i -= 1) {
				const ball = balls[i];
				if (ball.stuck) {
					ball.x = clamp(paddle.x, ball.radius, VW$2 - ball.radius);
					ball.y = paddle.y - ball.radius - 2;
					continue;
				}
				ball.trail.push({
					x: ball.x,
					y: ball.y
				});
				if (ball.trail.length > 10) ball.trail.shift();
				ball.x += ball.vx * dt;
				ball.y += ball.vy * dt;
				if (ball.x - ball.radius < 0) {
					ball.x = ball.radius;
					ball.vx = Math.abs(ball.vx);
				}
				if (ball.x + ball.radius > VW$2) {
					ball.x = VW$2 - ball.radius;
					ball.vx = -Math.abs(ball.vx);
				}
				if (ball.y - ball.radius < 0) {
					ball.y = ball.radius;
					ball.vy = Math.abs(ball.vy);
				}
				if (ball.y - ball.radius > VH$1) {
					balls.splice(i, 1);
					continue;
				}
				if (ball.vy > 0 && ball.y + ball.radius >= paddle.y && ball.y - ball.radius <= paddle.y + paddle.h && ball.x >= paddle.x - paddle.w / 2 && ball.x <= paddle.x + paddle.w / 2) {
					const angle = (ball.x - paddle.x) / (paddle.w / 2) * (Math.PI / 3);
					const speed = Math.min(MAX_SPEED, Math.hypot(ball.vx, ball.vy) * 1.02);
					ball.vx = Math.sin(angle) * speed;
					ball.vy = -Math.abs(Math.cos(angle) * speed);
					ball.y = paddle.y - ball.radius - 1;
					sfx(680, .04, "sine", .02);
				}
				ballVsBrick(ball);
			}
			if (balls.length === 0 && G.mode === "playing") {
				G.lives -= 1;
				G.combo = 0;
				paddle.w = PADDLE_W;
				paddle.wideUntil = 0;
				G.shake = 5;
				sync();
				if (G.lives <= 0) gameOver();
				else {
					spawnBall();
					sfx(200, .2, "sawtooth", .05);
				}
			}
			for (let i = drops.length - 1; i >= 0; i -= 1) {
				const drop = drops[i];
				drop.t += dt;
				drop.y += drop.vy * dt;
				if (drop.y > 660) {
					drops.splice(i, 1);
					continue;
				}
				if (drop.y + 12 >= paddle.y && drop.y - 12 <= paddle.y + paddle.h && drop.x + 12 >= paddle.x - paddle.w / 2 && drop.x - 12 <= paddle.x + paddle.w / 2) {
					applyPower(drop);
					drops.splice(i, 1);
				}
			}
		};
		const updateFx = (dt) => {
			for (let i = particles.length - 1; i >= 0; i -= 1) {
				const bit = particles[i];
				bit.x += bit.vx * dt;
				bit.y += bit.vy * dt;
				bit.vx *= 1 - 2.6 * dt;
				bit.vy *= 1 - 2.6 * dt;
				bit.life -= bit.decay * dt;
				if (bit.life <= 0) particles.splice(i, 1);
			}
			for (let i = floaters.length - 1; i >= 0; i -= 1) {
				const floater = floaters[i];
				floater.y += floater.vy * dt;
				floater.vy *= 1 - 1.6 * dt;
				floater.life -= dt * 1.4;
				if (floater.life <= 0) floaters.splice(i, 1);
			}
			for (const brick of bricks) if (brick.flash > 0) brick.flash = Math.max(0, brick.flash - dt);
			if (G.shake > 0) G.shake = Math.max(0, G.shake - dt * 30);
			if (G.flash > 0) G.flash = Math.max(0, G.flash - dt * 2.2);
		};
		const draw = () => {
			ctx.save();
			if (G.shake > 0) ctx.translate((Math.random() - .5) * G.shake, (Math.random() - .5) * G.shake);
			ctx.fillStyle = "#060a14";
			ctx.fillRect(0, 0, VW$2, VH$1);
			ctx.strokeStyle = "rgba(255,255,255,.03)";
			ctx.beginPath();
			for (let y = 0; y < VH$1; y += 40) {
				ctx.moveTo(0, y + .5);
				ctx.lineTo(VW$2, y + .5);
			}
			for (let x = 0; x < VW$2; x += 40) {
				ctx.moveTo(x + .5, 0);
				ctx.lineTo(x + .5, VH$1);
			}
			ctx.stroke();
			for (const brick of bricks) {
				ctx.globalAlpha = .4 + brick.hp / brick.maxHp * .6;
				ctx.fillStyle = brick.color;
				rounded(ctx, brick.x, brick.y, brick.w, brick.h, 6);
				ctx.fill();
				ctx.globalAlpha = 1;
				ctx.strokeStyle = brick.color;
				ctx.stroke();
				if (brick.maxHp > 1) {
					ctx.fillStyle = "rgba(0,0,0,.55)";
					ctx.font = "900 12px sans-serif";
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(String(brick.hp), brick.x + brick.w / 2, brick.y + brick.h / 2);
				}
				if (brick.flash > 0) {
					ctx.fillStyle = `rgba(255,255,255,${brick.flash * 4})`;
					rounded(ctx, brick.x, brick.y, brick.w, brick.h, 6);
					ctx.fill();
				}
			}
			for (const drop of drops) {
				const color = drop.type === "wide" ? "#60a5fa" : drop.type === "multi" ? "#a78bfa" : "#ff5c7a";
				ctx.save();
				ctx.translate(drop.x, drop.y + Math.sin(drop.t * 6) * 2);
				ctx.strokeStyle = color;
				ctx.lineWidth = 2;
				rounded(ctx, -11, -11, 22, 22, 6);
				ctx.stroke();
				ctx.fillStyle = color;
				ctx.font = "900 11px sans-serif";
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(drop.type === "wide" ? "↔" : drop.type === "multi" ? "●" : "♥", 0, 1);
				ctx.restore();
			}
			ctx.fillStyle = "#22d3a7";
			rounded(ctx, paddle.x - paddle.w / 2, paddle.y, paddle.w, paddle.h, 6);
			ctx.fill();
			for (const ball of balls) {
				for (let i = 0; i < ball.trail.length; i += 1) {
					ctx.globalAlpha = i / ball.trail.length * .4;
					ctx.fillStyle = "#6ee7b7";
					ctx.beginPath();
					ctx.arc(ball.trail[i].x, ball.trail[i].y, ball.radius * .7, 0, TAU$3);
					ctx.fill();
				}
				ctx.globalAlpha = 1;
				ctx.fillStyle = "#d1fae5";
				ctx.beginPath();
				ctx.arc(ball.x, ball.y, ball.radius, 0, TAU$3);
				ctx.fill();
			}
			for (const bit of particles) {
				ctx.globalAlpha = Math.max(0, bit.life);
				ctx.fillStyle = bit.color;
				ctx.beginPath();
				ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU$3);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (const floater of floaters) {
				ctx.globalAlpha = Math.max(0, floater.life);
				ctx.fillStyle = floater.color;
				ctx.font = "900 14px sans-serif";
				ctx.textAlign = "center";
				ctx.fillText(floater.text, floater.x, floater.y);
			}
			ctx.globalAlpha = 1;
			if (G.mode === "playing" && balls.length && balls.every((ball) => ball.stuck)) {
				ctx.fillStyle = "rgba(255,209,102,.9)";
				ctx.font = "800 13px sans-serif";
				ctx.textAlign = "center";
				ctx.fillText(launchRef.current, VW$2 / 2, paddle.y - 48);
			}
			ctx.restore();
			if (G.flash > 0) {
				ctx.fillStyle = `rgba(255,255,255,${G.flash * .15})`;
				ctx.fillRect(0, 0, VW$2, VH$1);
			}
		};
		const loop = (ts) => {
			if (!alive) return;
			if (!last) last = ts;
			let dt = (ts - last) / 1e3;
			last = ts;
			if (dt > .06) dt = .06;
			if (G.mode === "playing") {
				update(dt);
				updateFx(dt);
			} else if (G.mode === "levelclear") {
				G.clear -= dt;
				updateFx(dt);
				if (G.clear <= 0) advance();
			} else updateFx(dt);
			draw();
			requestAnimationFrame(loop);
		};
		const start = () => {
			G.mode = "playing";
			G.score = 0;
			G.lives = 3;
			G.level = 1;
			G.combo = 0;
			G.shake = 0;
			G.flash = 0;
			G.clear = 0;
			paddle.w = PADDLE_W;
			paddle.wideUntil = 0;
			paddle.x = paddle.targetX = VW$2 / 2;
			particles = [];
			floaters = [];
			drops = [];
			buildLevel(1);
			spawnBall();
			setMode("playing");
			setRecord(false);
			setToast(null);
			sync();
			sfx(520, .1, "sine", .04);
		};
		const pause = () => {
			if (G.mode !== "playing") return;
			G.mode = "paused";
			setMode("paused");
		};
		const resume = () => {
			if (G.mode !== "paused") return;
			G.mode = "playing";
			setMode("playing");
		};
		api.current = {
			start,
			pause,
			resume
		};
		const pointerX = (event) => {
			const rect = canvas.getBoundingClientRect();
			return (event.clientX - rect.left) * (VW$2 / rect.width);
		};
		const down = (event) => {
			if (G.mode !== "playing") return;
			paddle.targetX = paddle.x = clamp(pointerX(event), paddle.w / 2, VW$2 - paddle.w / 2);
			if (balls.length && balls.every((ball) => ball.stuck)) launchAll();
		};
		const move = (event) => {
			if (G.mode !== "playing") return;
			if (event.buttons === 0 && event.pointerType === "mouse") return;
			paddle.targetX = clamp(pointerX(event), paddle.w / 2, VW$2 - paddle.w / 2);
		};
		const onKey = (event) => {
			if (event.code === "Space" || event.code === "Enter") {
				event.preventDefault();
				if (G.mode === "idle" || G.mode === "over") start();
				else if (G.mode === "playing" && balls.every((ball) => ball.stuck)) launchAll();
				else if (G.mode === "paused") resume();
				return;
			}
			if (event.code === "ArrowLeft" || event.code === "KeyA") {
				event.preventDefault();
				keys.left = true;
			}
			if (event.code === "ArrowRight" || event.code === "KeyD") {
				event.preventDefault();
				keys.right = true;
			}
			if (event.code === "KeyP" || event.code === "Escape") {
				if (G.mode === "playing") pause();
				else if (G.mode === "paused") resume();
			}
		};
		const onUp = (event) => {
			if (event.code === "ArrowLeft" || event.code === "KeyA") keys.left = false;
			if (event.code === "ArrowRight" || event.code === "KeyD") keys.right = false;
		};
		const onHide = () => {
			if (document.hidden && G.mode === "playing") pause();
		};
		fit();
		setBest(G.best);
		window.addEventListener("keydown", onKey);
		window.addEventListener("keyup", onUp);
		canvas.addEventListener("pointerdown", down);
		canvas.addEventListener("pointermove", move);
		document.addEventListener("visibilitychange", onHide);
		const frame = requestAnimationFrame(loop);
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("keyup", onUp);
			canvas.removeEventListener("pointerdown", down);
			canvas.removeEventListener("pointermove", move);
			document.removeEventListener("visibilitychange", onHide);
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	const toastText = !toast ? "" : toast.key === "wide" ? COPY$3.wide[lang] : toast.key === "narrow" ? COPY$3.narrow[lang] : toast.key === "multi" ? COPY$3.multi[lang] : toast.key === "life" ? COPY$3.life[lang] : `${COPY$3.cleared[lang]} +${toast.bonus}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "neon-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qala-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kosmos-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "qala-hud",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$3.score[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-gold",
						children: score
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$3.lives[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-life",
						children: "♥".repeat(Math.max(0, lives)) || "0"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$3.level[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: level })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$3.combo[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: combo })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "neon-board",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef }),
					toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "qala-toast",
						children: toastText
					}, toast.n) : null,
					mode === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kosmos-pause",
						onClick: () => api.current.pause(),
						"aria-label": COPY$3.pause[lang],
						children: "❚❚"
					}) : null,
					mode !== "playing" && mode !== "levelclear" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ilan-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ilan-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "paused" ? COPY$3.pause[lang] : mode === "over" ? record ? COPY$3.record[lang] : COPY$3.over[lang] : game.name[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ilan-big",
									children: score
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mode === "paused" ? COPY$3.wait[lang] : COPY$3.lead[lang] }),
								mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "ilan-mini",
									children: [
										COPY$3.level[lang],
										" ",
										level,
										" · ",
										COPY$3.best[lang],
										" ",
										Math.max(best, score)
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ilan-actions",
									children: [mode === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "is-mint",
										onClick: () => api.current.resume(),
										children: COPY$3.resume[lang]
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: mode === "paused" ? "" : "is-mint",
										onClick: () => api.current.start(),
										children: mode === "idle" ? COPY$3.start[lang] : COPY$3.again[lang]
									})]
								})
							]
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY$3.hint[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var COLS = 10;
var ROWS = 20;
var CELL$1 = 30;
var BOARD_W = 300;
var BOARD_H = 600;
var BEST_KEY$2 = "nibras-tetris-v1";
var TAU$2 = Math.PI * 2;
var PIECES = {
	I: {
		color: "#22d3ee",
		glow: "rgba(34,211,238,.8)",
		matrix: [
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				1,
				1,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			]
		]
	},
	O: {
		color: "#ffd166",
		glow: "rgba(255,209,102,.8)",
		matrix: [[1, 1], [1, 1]]
	},
	T: {
		color: "#a78bfa",
		glow: "rgba(167,139,250,.8)",
		matrix: [
			[
				0,
				1,
				0
			],
			[
				1,
				1,
				1
			],
			[
				0,
				0,
				0
			]
		]
	},
	S: {
		color: "#6ee7b7",
		glow: "rgba(110,231,183,.8)",
		matrix: [
			[
				0,
				1,
				1
			],
			[
				1,
				1,
				0
			],
			[
				0,
				0,
				0
			]
		]
	},
	Z: {
		color: "#ff5c7a",
		glow: "rgba(255,92,122,.8)",
		matrix: [
			[
				1,
				1,
				0
			],
			[
				0,
				1,
				1
			],
			[
				0,
				0,
				0
			]
		]
	},
	J: {
		color: "#60a5fa",
		glow: "rgba(96,165,250,.8)",
		matrix: [
			[
				1,
				0,
				0
			],
			[
				1,
				1,
				1
			],
			[
				0,
				0,
				0
			]
		]
	},
	L: {
		color: "#fb923c",
		glow: "rgba(251,146,60,.8)",
		matrix: [
			[
				0,
				0,
				1
			],
			[
				1,
				1,
				1
			],
			[
				0,
				0,
				0
			]
		]
	}
};
var KICKS = {
	"0>1": [
		[0, 0],
		[-1, 0],
		[-1, 1],
		[0, -2],
		[-1, -2]
	],
	"1>0": [
		[0, 0],
		[1, 0],
		[1, -1],
		[0, 2],
		[1, 2]
	],
	"1>2": [
		[0, 0],
		[1, 0],
		[1, -1],
		[0, 2],
		[1, 2]
	],
	"2>1": [
		[0, 0],
		[-1, 0],
		[-1, 1],
		[0, -2],
		[-1, -2]
	],
	"2>3": [
		[0, 0],
		[1, 0],
		[1, 1],
		[0, -2],
		[1, -2]
	],
	"3>2": [
		[0, 0],
		[-1, 0],
		[-1, -1],
		[0, 2],
		[-1, 2]
	],
	"3>0": [
		[0, 0],
		[-1, 0],
		[-1, -1],
		[0, 2],
		[-1, 2]
	],
	"0>3": [
		[0, 0],
		[1, 0],
		[1, 1],
		[0, -2],
		[1, -2]
	]
};
var KICKS_I = {
	"0>1": [
		[0, 0],
		[-2, 0],
		[1, 0],
		[-2, -1],
		[1, 2]
	],
	"1>0": [
		[0, 0],
		[2, 0],
		[-1, 0],
		[2, 1],
		[-1, -2]
	],
	"1>2": [
		[0, 0],
		[-1, 0],
		[2, 0],
		[-1, 2],
		[2, -1]
	],
	"2>1": [
		[0, 0],
		[1, 0],
		[-2, 0],
		[1, -2],
		[-2, 1]
	],
	"2>3": [
		[0, 0],
		[2, 0],
		[-1, 0],
		[2, 1],
		[-1, -2]
	],
	"3>2": [
		[0, 0],
		[-2, 0],
		[1, 0],
		[-2, -1],
		[1, 2]
	],
	"3>0": [
		[0, 0],
		[1, 0],
		[-2, 0],
		[1, -2],
		[-2, 1]
	],
	"0>3": [
		[0, 0],
		[-1, 0],
		[2, 0],
		[-1, 2],
		[2, -1]
	]
};
var COPY$2 = {
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	lines: {
		az: "Xətt",
		en: "Lines",
		tr: "Satır",
		ar: "الخطوط",
		ru: "Линии"
	},
	level: {
		az: "Səviyyə",
		en: "Level",
		tr: "Seviye",
		ar: "المستوى",
		ru: "Уровень"
	},
	combo: {
		az: "Kombo",
		en: "Combo",
		tr: "Kombo",
		ar: "سلسلة",
		ru: "Серия"
	},
	hold: {
		az: "Saxla",
		en: "Hold",
		tr: "Tut",
		ar: "احتفظ",
		ru: "Запас"
	},
	next: {
		az: "Sonrakı",
		en: "Next",
		tr: "Sonraki",
		ar: "التالي",
		ru: "Дальше"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	start: {
		az: "Başla",
		en: "Start",
		tr: "Başla",
		ar: "ابدأ",
		ru: "Старт"
	},
	resume: {
		az: "Davam et",
		en: "Continue",
		tr: "Devam et",
		ar: "أكمل",
		ru: "Дальше"
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	pause: {
		az: "Pauza",
		en: "Pause",
		tr: "Duraklat",
		ar: "توقف",
		ru: "Пауза"
	},
	over: {
		az: "Oyun bitdi",
		en: "Game over",
		tr: "Oyun bitti",
		ar: "انتهت اللعبة",
		ru: "Игра окончена"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	drop: {
		az: "Düş",
		en: "Drop",
		tr: "Düş",
		ar: "أسقط",
		ru: "Сброс"
	},
	lead: {
		az: "Sətirləri doldur. Hər 10 xətt yeni səviyyədir.",
		en: "Fill the rows. Every 10 lines is a new level.",
		tr: "Satırları doldur. Her 10 satır yeni seviye.",
		ar: "املأ الصفوف. كل 10 خطوط مستوى جديد.",
		ru: "Заполняй ряды. Каждые 10 линий — новый уровень."
	},
	wait: {
		az: "Fiqur səni gözləyir.",
		en: "The piece is waiting.",
		tr: "Şekil seni bekliyor.",
		ar: "القطعة تنتظرك.",
		ru: "Фигура ждёт."
	},
	hint: {
		az: "Oxlar hərəkət. Yuxarı fırladır. Boşluq düşürür. C saxlayır.",
		en: "Arrows move. Up rotates. Space drops. C holds.",
		tr: "Oklar hareket. Yukarı döndürür. Boşluk düşürür. C tutar.",
		ar: "الأسهم تحرّك. الأعلى يدوّر. المسافة تُسقط. C يحفظ.",
		ru: "Стрелки двигают. Вверх крутит. Пробел роняет. C прячет."
	}
};
function readBest$2() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY$2) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function clone(matrix) {
	return matrix.map((row) => row.slice());
}
function rotateMatrix(matrix, dir) {
	const n = matrix.length;
	const out = Array.from({ length: n }, () => Array(n).fill(0));
	for (let r = 0; r < n; r += 1) for (let c = 0; c < n; c += 1) out[dir === 1 ? c : n - 1 - c][dir === 1 ? n - 1 - r : r] = matrix[r][c];
	return out;
}
function shade$1(hex, percent) {
	const num = Number.parseInt(hex.replace("#", ""), 16);
	const channel = (value) => Math.max(0, Math.min(255, value + percent));
	const r = channel(num >> 16);
	const g = channel(num >> 8 & 255);
	const b = channel(num & 255);
	return `#${(16777216 + r * 65536 + g * 256 + b).toString(16).slice(1)}`;
}
function TetrisGame() {
	const { lang } = useI18n();
	const game = gameBySlug("tetris");
	const boardRef = (0, import_react.useRef)(null);
	const holdRef = (0, import_react.useRef)(null);
	const nextRef = (0, import_react.useRef)(null);
	const api = (0, import_react.useRef)({
		start: () => {},
		pause: () => {},
		resume: () => {},
		act: (_dir) => {}
	});
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [score, setScore] = (0, import_react.useState)(0);
	const [lines, setLines] = (0, import_react.useState)(0);
	const [level, setLevel] = (0, import_react.useState)(1);
	const [combo, setCombo] = (0, import_react.useState)(0);
	const [best, setBest] = (0, import_react.useState)(0);
	const [record, setRecord] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const boardCanvas = boardRef.current;
		const holdCanvas = holdRef.current;
		const nextCanvas = nextRef.current;
		if (!boardCanvas || !holdCanvas || !nextCanvas) return;
		const bctx = boardCanvas.getContext("2d");
		const hctx = holdCanvas.getContext("2d");
		const nctx = nextCanvas.getContext("2d");
		if (!bctx || !hctx || !nctx) return;
		const G = {
			mode: "idle",
			board: [],
			current: null,
			hold: null,
			holdUsed: false,
			next: [],
			bag: [],
			score: 0,
			lines: 0,
			level: 1,
			combo: 0,
			best: readBest$2(),
			dropInterval: 1e3,
			dropTimer: 0,
			lockTimer: 0,
			lockDelay: 500,
			lockResets: 0,
			particles: [],
			shake: 0,
			flash: 0,
			clearing: null
		};
		let alive = true;
		let last = 0;
		let actx = null;
		const repeats = /* @__PURE__ */ new Map();
		const sfx = (freq, dur = .06, type = "sine", vol = .02) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.setValueAtTime(freq, actx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .55), actx.currentTime + dur);
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const sync = () => {
			setScore(G.score);
			setLines(G.lines);
			setLevel(G.level);
			setCombo(G.combo);
			setBest(Math.max(G.best, G.score));
		};
		const empty = () => Array.from({ length: ROWS }, () => Array(COLS).fill(null));
		const refill = () => {
			const types = [
				"I",
				"O",
				"T",
				"S",
				"Z",
				"J",
				"L"
			];
			for (let i = types.length - 1; i > 0; i -= 1) {
				const j = Math.floor(Math.random() * (i + 1));
				[types[i], types[j]] = [types[j], types[i]];
			}
			G.bag.push(...types);
		};
		const take = () => {
			if (G.bag.length < 2) refill();
			return G.bag.shift();
		};
		const make = (type) => {
			const spec = PIECES[type];
			return {
				type,
				matrix: clone(spec.matrix),
				rotation: 0,
				color: spec.color,
				glow: spec.glow,
				x: Math.floor((COLS - spec.matrix.length) / 2),
				y: -1
			};
		};
		const collides = (piece, dx, dy, matrix = piece.matrix) => {
			for (let r = 0; r < matrix.length; r += 1) for (let c = 0; c < matrix[r].length; c += 1) {
				if (!matrix[r][c]) continue;
				const x = piece.x + c + dx;
				const y = piece.y + r + dy;
				if (x < 0 || x >= COLS || y >= ROWS) return true;
				if (y >= 0 && G.board[y][x]) return true;
			}
			return false;
		};
		const gameOver = () => {
			G.mode = "over";
			const isRec = G.score > G.best;
			if (isRec) {
				G.best = G.score;
				try {
					localStorage.setItem(BEST_KEY$2, String(G.best));
				} catch {}
			}
			setRecord(isRec);
			setMode("over");
			sync();
			sfx(220, .25, "sawtooth", .05);
		};
		const spawn = () => {
			while (G.next.length < 2) G.next.push(take());
			const type = G.next.shift();
			G.next.push(take());
			G.current = make(type);
			G.holdUsed = false;
			if (collides(G.current, 0, 0)) gameOver();
		};
		const move = (dx, dy) => {
			if (G.mode !== "playing" || !G.current) return false;
			if (collides(G.current, dx, dy)) return false;
			G.current.x += dx;
			G.current.y += dy;
			if (dy === 0 && G.lockResets < 15) {
				G.lockTimer = 0;
				G.lockResets += 1;
			}
			return true;
		};
		const rotate = (dir) => {
			if (G.mode !== "playing" || !G.current) return;
			const piece = G.current;
			const from = piece.rotation;
			const to = (from + dir + 4) % 4;
			const matrix = rotateMatrix(piece.matrix, dir);
			const kicks = (piece.type === "I" ? KICKS_I : KICKS)[`${from}>${to}`] || [[0, 0]];
			for (const [kx, ky] of kicks) if (!collides(piece, kx, -ky, matrix)) {
				piece.matrix = matrix;
				piece.rotation = to;
				piece.x += kx;
				piece.y -= ky;
				if (G.lockResets < 15) {
					G.lockTimer = 0;
					G.lockResets += 1;
				}
				sfx(720, .04, "sine", .015);
				return;
			}
		};
		const lock = () => {
			const piece = G.current;
			if (!piece) return;
			for (let r = 0; r < piece.matrix.length; r += 1) for (let c = 0; c < piece.matrix[r].length; c += 1) {
				if (!piece.matrix[r][c]) continue;
				const y = piece.y + r;
				const x = piece.x + c;
				if (y < 0) {
					gameOver();
					return;
				}
				G.board[y][x] = piece.color;
			}
			const full = G.board.map((row, index) => row.every(Boolean) ? index : -1).filter((index) => index >= 0);
			G.current = null;
			G.lockTimer = 0;
			G.lockResets = 0;
			if (!full.length) {
				G.combo = 0;
				sync();
				spawn();
				return;
			}
			G.mode = "clearing";
			setMode("playing");
			G.clearing = {
				rows: full,
				timer: 0,
				duration: 320
			};
			const n = full.length;
			G.score += [
				0,
				100,
				300,
				500,
				800
			][n] * G.level + (G.combo > 0 ? 50 * G.combo * G.level : 0);
			G.lines += n;
			G.combo += 1;
			const nextLevel = Math.floor(G.lines / 10) + 1;
			if (nextLevel > G.level) {
				G.level = nextLevel;
				G.dropInterval = Math.max(80, 1e3 - (G.level - 1) * 80);
				sfx(880, .15, "sine", .04);
			}
			for (const row of full) for (let c = 0; c < COLS; c += 1) {
				const color = G.board[row][c] || "#ffd166";
				const angle = Math.random() * TAU$2;
				const speed = 60 + Math.random() * 150;
				G.particles.push({
					x: c * CELL$1 + CELL$1 / 2,
					y: row * CELL$1 + CELL$1 / 2,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					life: 1,
					decay: 1.6 + Math.random(),
					size: 2,
					color
				});
			}
			G.shake = Math.min(10, 3 + n * 2);
			G.flash = Math.min(.8, .2 + n * .15);
			sync();
			sfx(440 + n * 120, .1, "square", .03);
		};
		const hardDrop = () => {
			if (G.mode !== "playing" || !G.current) return;
			let dropped = 0;
			while (!collides(G.current, 0, 1)) {
				G.current.y += 1;
				dropped += 1;
			}
			G.score += dropped * 2;
			sync();
			lock();
			sfx(280, .08, "square", .03);
			G.shake = 3;
		};
		const softDrop = () => {
			if (!G.current || collides(G.current, 0, 1)) return;
			G.current.y += 1;
			G.score += 1;
			G.dropTimer = 0;
			sync();
		};
		const holdPiece = () => {
			if (G.mode !== "playing" || !G.current || G.holdUsed) return;
			const current = G.current.type;
			if (G.hold) {
				const saved = G.hold;
				G.hold = current;
				G.current = make(saved);
			} else {
				G.hold = current;
				spawn();
			}
			G.holdUsed = true;
			sfx(560, .06, "sine", .025);
		};
		const finishClear = () => {
			const rows = [...G.clearing?.rows || []].sort((a, b) => b - a);
			for (const row of rows) {
				G.board.splice(row, 1);
				G.board.unshift(Array(COLS).fill(null));
			}
			G.clearing = null;
			G.mode = "playing";
			spawn();
		};
		const drawBlock = (ctx, x, y, size, color) => {
			const gradient = ctx.createLinearGradient(x, y, x, y + size);
			gradient.addColorStop(0, color);
			gradient.addColorStop(1, shade$1(color, -30));
			ctx.fillStyle = gradient;
			ctx.fillRect(x + 1, y + 1, size - 2, size - 2);
			ctx.fillStyle = "rgba(255,255,255,.35)";
			ctx.fillRect(x + 3, y + 3, size - 6, 2);
		};
		const drawMini = (ctx, type) => {
			ctx.clearRect(0, 0, 120, 120);
			ctx.fillStyle = "rgba(4,7,14,.45)";
			ctx.fillRect(0, 0, 120, 120);
			if (!type) return;
			const matrix = PIECES[type].matrix;
			let minR = matrix.length;
			let maxR = -1;
			let minC = matrix.length;
			let maxC = -1;
			matrix.forEach((row, r) => row.forEach((cell, c) => {
				if (cell) {
					minR = Math.min(minR, r);
					maxR = Math.max(maxR, r);
					minC = Math.min(minC, c);
					maxC = Math.max(maxC, c);
				}
			}));
			const size = 20;
			const startX = 60 - (maxC - minC + 1) * size / 2;
			const startY = 60 - (maxR - minR + 1) * size / 2;
			for (let r = minR; r <= maxR; r += 1) for (let c = minC; c <= maxC; c += 1) if (matrix[r][c]) drawBlock(ctx, startX + (c - minC) * size, startY + (r - minR) * size, size, PIECES[type].color);
		};
		const ghostY = () => {
			if (!G.current) return 0;
			let y = G.current.y;
			while (!collides(G.current, 0, y - G.current.y + 1)) y += 1;
			return y;
		};
		const draw = () => {
			bctx.fillStyle = "#04070e";
			bctx.fillRect(0, 0, BOARD_W, BOARD_H);
			bctx.strokeStyle = "rgba(255,255,255,.04)";
			bctx.beginPath();
			for (let c = 1; c < COLS; c += 1) {
				bctx.moveTo(c * CELL$1 + .5, 0);
				bctx.lineTo(c * CELL$1 + .5, BOARD_H);
			}
			for (let r = 1; r < ROWS; r += 1) {
				bctx.moveTo(0, r * CELL$1 + .5);
				bctx.lineTo(BOARD_W, r * CELL$1 + .5);
			}
			bctx.stroke();
			for (let r = 0; r < ROWS; r += 1) for (let c = 0; c < COLS; c += 1) {
				const color = G.board[r][c];
				if (!color) continue;
				const clearing = G.clearing?.rows.includes(r);
				bctx.globalAlpha = clearing ? 1 - G.clearing.timer / G.clearing.duration : 1;
				drawBlock(bctx, c * CELL$1, r * CELL$1, CELL$1, color);
			}
			bctx.globalAlpha = 1;
			if (G.current && G.mode === "playing") {
				const piece = G.current;
				const gy = ghostY();
				bctx.strokeStyle = piece.color;
				bctx.globalAlpha = .28;
				piece.matrix.forEach((row, r) => row.forEach((cell, c) => {
					if (cell && gy + r >= 0) bctx.strokeRect((piece.x + c) * CELL$1 + 3, (gy + r) * CELL$1 + 3, 24, 24);
				}));
				bctx.globalAlpha = 1;
				piece.matrix.forEach((row, r) => row.forEach((cell, c) => {
					if (cell && piece.y + r >= 0) drawBlock(bctx, (piece.x + c) * CELL$1, (piece.y + r) * CELL$1, CELL$1, piece.color);
				}));
			}
			for (const bit of G.particles) {
				bctx.globalAlpha = Math.max(0, bit.life);
				bctx.fillStyle = bit.color;
				bctx.beginPath();
				bctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU$2);
				bctx.fill();
			}
			bctx.globalAlpha = 1;
			if (G.flash > 0) {
				bctx.fillStyle = `rgba(255,255,255,${G.flash * .14})`;
				bctx.fillRect(0, 0, BOARD_W, BOARD_H);
			}
			drawMini(hctx, G.hold);
			drawMini(nctx, G.next[0] || null);
			boardCanvas.style.transform = G.shake > 0 ? `translate(${(Math.random() - .5) * G.shake}px, ${(Math.random() - .5) * G.shake}px)` : "";
		};
		const update = (dt) => {
			const sec = dt / 1e3;
			for (let i = G.particles.length - 1; i >= 0; i -= 1) {
				const bit = G.particles[i];
				bit.x += bit.vx * sec;
				bit.y += bit.vy * sec;
				bit.life -= bit.decay * sec;
				if (bit.life <= 0) G.particles.splice(i, 1);
			}
			if (G.shake > 0) G.shake = Math.max(0, G.shake - sec * 30);
			if (G.flash > 0) G.flash = Math.max(0, G.flash - sec * 2.4);
			if (G.mode === "clearing" && G.clearing) {
				G.clearing.timer += dt;
				if (G.clearing.timer >= G.clearing.duration) finishClear();
				return;
			}
			if (G.mode !== "playing" || !G.current) return;
			G.dropTimer += dt;
			if (G.dropTimer >= G.dropInterval) {
				G.dropTimer = 0;
				if (collides(G.current, 0, 1)) G.lockTimer += G.dropInterval;
				else {
					G.current.y += 1;
					G.lockResets = 0;
				}
			}
			if (G.current && collides(G.current, 0, 1)) {
				G.lockTimer += dt;
				if (G.lockTimer >= G.lockDelay) lock();
			} else G.lockTimer = 0;
		};
		const fit = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			boardCanvas.width = BOARD_W * dpr;
			boardCanvas.height = BOARD_H * dpr;
			bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const start = () => {
			G.mode = "playing";
			G.board = empty();
			G.current = null;
			G.hold = null;
			G.holdUsed = false;
			G.next = [];
			G.bag = [];
			G.score = 0;
			G.lines = 0;
			G.level = 1;
			G.combo = 0;
			G.dropInterval = 1e3;
			G.dropTimer = 0;
			G.lockTimer = 0;
			G.lockResets = 0;
			G.particles = [];
			G.shake = 0;
			G.flash = 0;
			G.clearing = null;
			refill();
			spawn();
			setMode("playing");
			setRecord(false);
			sync();
			sfx(520, .1, "sine", .04);
		};
		const pause = () => {
			if (G.mode !== "playing") return;
			G.mode = "paused";
			setMode("paused");
		};
		const resume = () => {
			if (G.mode !== "paused") return;
			G.mode = "playing";
			setMode("playing");
		};
		const act = (dir) => {
			if (dir === "left") move(-1, 0);
			if (dir === "right") move(1, 0);
			if (dir === "rotate") rotate(1);
			if (dir === "soft") softDrop();
			if (dir === "hard") hardDrop();
			if (dir === "hold") holdPiece();
		};
		api.current = {
			start,
			pause,
			resume,
			act
		};
		const onKey = (event) => {
			if (event.code === "Space" || event.code === "Enter") {
				event.preventDefault();
				if (G.mode === "idle" || G.mode === "over") start();
				else if (G.mode === "playing") hardDrop();
				else if (G.mode === "paused") resume();
				return;
			}
			if (G.mode !== "playing") return;
			if (event.code === "ArrowLeft") {
				event.preventDefault();
				move(-1, 0);
			}
			if (event.code === "ArrowRight") {
				event.preventDefault();
				move(1, 0);
			}
			if (event.code === "ArrowDown") {
				event.preventDefault();
				softDrop();
			}
			if (event.code === "ArrowUp" || event.code === "KeyX") {
				event.preventDefault();
				rotate(1);
			}
			if (event.code === "KeyZ") {
				event.preventDefault();
				rotate(-1);
			}
			if (event.code === "KeyC") {
				event.preventDefault();
				holdPiece();
			}
			if (event.code === "KeyP" || event.code === "Escape") {
				event.preventDefault();
				pause();
			}
		};
		const onHide = () => {
			if (document.hidden && G.mode === "playing") pause();
		};
		const press = (event) => {
			const dir = event.currentTarget.dataset.dir;
			if (!dir) return;
			event.preventDefault();
			act(dir);
			if (dir === "left" || dir === "right" || dir === "soft") {
				const timer = window.setInterval(() => act(dir), 90);
				repeats.set(dir, timer);
			}
		};
		const release = (event) => {
			const dir = event.currentTarget.dataset.dir;
			if (!dir) return;
			const timer = repeats.get(dir);
			if (timer) window.clearInterval(timer);
			repeats.delete(dir);
		};
		document.querySelectorAll(".tetris-controls button").forEach((button) => {
			button.addEventListener("pointerdown", press);
			button.addEventListener("pointerup", release);
			button.addEventListener("pointercancel", release);
			button.addEventListener("pointerleave", release);
		});
		fit();
		G.board = empty();
		setBest(G.best);
		window.addEventListener("keydown", onKey);
		document.addEventListener("visibilitychange", onHide);
		const frame = requestAnimationFrame(function loop(ts) {
			if (!alive) return;
			if (!last) last = ts;
			let dt = ts - last;
			last = ts;
			if (dt > 100) dt = 100;
			if (G.mode === "playing" || G.mode === "clearing") update(dt);
			draw();
			requestAnimationFrame(loop);
		});
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			window.removeEventListener("keydown", onKey);
			document.removeEventListener("visibilitychange", onHide);
			repeats.forEach((timer) => window.clearInterval(timer));
			document.querySelectorAll(".tetris-controls button").forEach((button) => {
				button.removeEventListener("pointerdown", press);
				button.removeEventListener("pointerup", release);
				button.removeEventListener("pointercancel", release);
				button.removeEventListener("pointerleave", release);
			});
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "tetris-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qala-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kosmos-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tetris-layout",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tetris-side",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
								ref: holdRef,
								width: 120,
								height: 120,
								"aria-label": COPY$2.hold[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: score }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COPY$2.score[lang] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: lines }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COPY$2.lines[lang] })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tetris-board",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: boardRef }),
							mode === "playing" || mode === "clearing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "kosmos-pause",
								onClick: () => api.current.pause(),
								"aria-label": COPY$2.pause[lang],
								children: "❚❚"
							}) : null,
							mode !== "playing" && mode !== "clearing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ilan-overlay",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ilan-panel",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "paused" ? COPY$2.pause[lang] : mode === "over" ? record ? COPY$2.record[lang] : COPY$2.over[lang] : game.name[lang] }),
										mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "ilan-big",
											children: score
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mode === "paused" ? COPY$2.wait[lang] : COPY$2.lead[lang] }),
										mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "ilan-mini",
											children: [
												COPY$2.lines[lang],
												" ",
												lines,
												" · ",
												COPY$2.level[lang],
												" ",
												level,
												" · ",
												COPY$2.best[lang],
												" ",
												Math.max(best, score)
											]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "ilan-actions",
											children: [mode === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "is-mint",
												onClick: () => api.current.resume(),
												children: COPY$2.resume[lang]
											}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: mode === "paused" ? "" : "is-mint",
												onClick: () => api.current.start(),
												children: mode === "idle" ? COPY$2.start[lang] : COPY$2.again[lang]
											})]
										})
									]
								})
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tetris-side",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
								ref: nextRef,
								width: 120,
								height: 120,
								"aria-label": COPY$2.next[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: level }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COPY$2.level[lang] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: combo }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COPY$2.combo[lang] })] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tetris-controls",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-dir": "left",
						"aria-label": "left",
						children: "◀"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-dir": "rotate",
						"aria-label": "rotate",
						children: "⟳"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-dir": "right",
						"aria-label": "right",
						children: "▶"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-dir": "soft",
						"aria-label": "down",
						children: "▼"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-dir": "hard",
						className: "is-wide",
						children: COPY$2.drop[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-dir": "hold",
						className: "is-wide",
						children: COPY$2.hold[lang]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY$2.hint[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var SIZE = 4;
var VW$1 = 400;
var PAD = 10;
var CELL = 362 / SIZE;
var BEST_KEY$1 = "nibras-2048-v1";
var TAU$1 = Math.PI * 2;
var MOVE_DUR = .14;
var COLORS = {
	2: {
		bg: "#dbeafe",
		bg2: "#bfdbfe",
		text: "#1e40af",
		glow: "rgba(191,219,254,.6)"
	},
	4: {
		bg: "#c7d2fe",
		bg2: "#a5b4fc",
		text: "#312e81",
		glow: "rgba(165,180,252,.6)"
	},
	8: {
		bg: "#67e8f9",
		bg2: "#22d3ee",
		text: "#083344",
		glow: "rgba(34,211,238,.7)"
	},
	16: {
		bg: "#60a5fa",
		bg2: "#3b82f6",
		text: "#ffffff",
		glow: "rgba(59,130,246,.8)"
	},
	32: {
		bg: "#a78bfa",
		bg2: "#8b5cf6",
		text: "#ffffff",
		glow: "rgba(139,92,246,.8)"
	},
	64: {
		bg: "#f472b6",
		bg2: "#ec4899",
		text: "#ffffff",
		glow: "rgba(236,72,153,.85)"
	},
	128: {
		bg: "#fb923c",
		bg2: "#f97316",
		text: "#ffffff",
		glow: "rgba(249,115,22,.9)"
	},
	256: {
		bg: "#f87171",
		bg2: "#ef4444",
		text: "#ffffff",
		glow: "rgba(239,68,68,.95)"
	},
	512: {
		bg: "#fbbf24",
		bg2: "#f59e0b",
		text: "#422006",
		glow: "rgba(245,158,11,1)"
	},
	1024: {
		bg: "#fde047",
		bg2: "#facc15",
		text: "#422006",
		glow: "rgba(250,204,21,1)"
	},
	2048: {
		bg: "#ffffff",
		bg2: "#fef3c7",
		text: "#7c2d12",
		glow: "rgba(255,255,255,1)"
	},
	4096: {
		bg: "#a3e635",
		bg2: "#84cc16",
		text: "#1a2e05",
		glow: "rgba(132,204,22,1)"
	}
};
var COPY$1 = {
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	undo: {
		az: "Geri",
		en: "Undo",
		tr: "Geri",
		ar: "رجوع",
		ru: "Назад"
	},
	fresh: {
		az: "Yeni oyun",
		en: "New game",
		tr: "Yeni oyun",
		ar: "لعبة جديدة",
		ru: "Новая игра"
	},
	over: {
		az: "Oyun bitdi",
		en: "Game over",
		tr: "Oyun bitti",
		ar: "انتهت اللعبة",
		ru: "Игра окончена"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	stuck: {
		az: "Gediş qalmadı.",
		en: "No moves left.",
		tr: "Hamle kalmadı.",
		ar: "لم تبقَ حركة.",
		ru: "Ходов не осталось."
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	hint: {
		az: "Oxlar və ya WASD. Barmaqla sürüşdür.",
		en: "Arrows or WASD. Swipe on the board.",
		tr: "Oklar ya da WASD. Tahtayı kaydır.",
		ar: "الأسهم أو WASD. اسحب اللوحة.",
		ru: "Стрелки или WASD. Свайп по полю."
	}
};
var lerp = (a, b, t) => a + (b - a) * t;
var ease = (t) => 1 - (1 - t) ** 3;
var easeBack = (t) => {
	return 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2;
};
var cellX = (col) => PAD + col * 96.5 + CELL / 2;
var cellY = (row) => PAD + row * 96.5 + CELL / 2;
function readBest$1() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY$1) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function Game2048() {
	const { lang } = useI18n();
	const game = gameBySlug("2048");
	const canvasRef = (0, import_react.useRef)(null);
	const api = (0, import_react.useRef)({
		fresh: () => {},
		undo: () => {}
	});
	const [score, setScore] = (0, import_react.useState)(0);
	const [best, setBest] = (0, import_react.useState)(0);
	const [over, setOver] = (0, import_react.useState)(false);
	const [record, setRecord] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [canUndo, setCanUndo] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const state = {
			grid: Array.from({ length: SIZE }, () => Array(SIZE).fill(0)),
			tiles: [],
			particles: [],
			floaters: [],
			stars: Array.from({ length: 36 }, () => ({
				x: Math.random() * VW$1,
				y: Math.random() * VW$1,
				r: .4 + Math.random() * 1.3,
				a: .08 + Math.random() * .22,
				tw: Math.random() * TAU$1
			})),
			score: 0,
			best: readBest$1(),
			raised: false,
			animating: false,
			animTime: 0,
			over: false,
			won2048: false,
			won4096: false,
			undo: [],
			shake: 0,
			time: 0
		};
		let alive = true;
		let last = 0;
		let touch = null;
		let actx = null;
		const sfx = (freq, dur = .06, type = "sine", vol = .02) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.setValueAtTime(freq, actx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .55), actx.currentTime + dur);
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const sync = () => {
			setScore(state.score);
			setBest(Math.max(state.best, state.score));
			setCanUndo(state.undo.length > 0 && !state.animating);
		};
		const say = (text) => setToast({
			text,
			n: Date.now()
		});
		const paintGrid = () => {
			state.grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
			for (const tile of state.tiles) if (tile.alive) state.grid[tile.row][tile.col] = tile.value;
		};
		const make = (row, col, value) => ({
			value,
			row,
			col,
			x: cellX(col),
			y: cellY(row),
			startX: cellX(col),
			startY: cellY(row),
			tx: cellX(col),
			ty: cellY(row),
			targetRow: row,
			targetCol: col,
			scale: 1,
			popT: 0,
			popIn: 1,
			alive: true,
			pendingValue: 0,
			isMergeTarget: false
		});
		const spawn = () => {
			const empty = [];
			for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) if (!state.grid[r][c]) empty.push({
				r,
				c
			});
			if (!empty.length) return;
			const pos = empty[Math.floor(Math.random() * empty.length)];
			const value = Math.random() < .9 ? 2 : 4;
			const tile = make(pos.r, pos.c, value);
			tile.popIn = 0;
			tile.scale = 0;
			state.tiles.push(tile);
			state.grid[pos.r][pos.c] = value;
		};
		const movesLeft = () => {
			for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) {
				if (!state.grid[r][c]) return true;
				if (r < 3 && state.grid[r][c] === state.grid[r + 1][c]) return true;
				if (c < 3 && state.grid[r][c] === state.grid[r][c + 1]) return true;
			}
			return false;
		};
		const endGame = () => {
			if (!alive) return;
			state.over = true;
			setOver(true);
			setRecord(state.raised && state.score > 0);
			sync();
			sfx(220, .25, "sawtooth", .05);
		};
		const burst = (x, y, color) => {
			for (let i = 0; i < 10; i += 1) {
				const a = Math.random() * TAU$1;
				const sp = 40 + Math.random() * 140;
				state.particles.push({
					x,
					y,
					vx: Math.cos(a) * sp,
					vy: Math.sin(a) * sp,
					life: 1,
					decay: 1.8 + Math.random(),
					size: 2,
					color
				});
			}
		};
		const fresh = () => {
			state.tiles = [];
			state.particles = [];
			state.floaters = [];
			state.score = 0;
			state.raised = false;
			state.animating = false;
			state.over = false;
			state.won2048 = false;
			state.won4096 = false;
			state.undo = [];
			state.grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
			spawn();
			spawn();
			setOver(false);
			setRecord(false);
			setToast(null);
			sync();
			sfx(520, .1, "sine", .04);
		};
		const undo = () => {
			if (state.animating || !state.undo.length) return;
			const snap = state.undo.pop();
			state.grid = snap.values.map((row) => row.slice());
			state.score = snap.score;
			state.over = false;
			state.tiles = [];
			for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) if (state.grid[r][c]) state.tiles.push(make(r, c, state.grid[r][c]));
			setOver(false);
			sync();
			sfx(560, .08, "sine", .03);
		};
		const move = (dir) => {
			if (state.animating || state.over) return;
			const lines = [];
			for (let i = 0; i < SIZE; i += 1) {
				const line = [];
				for (let k = 0; k < SIZE; k += 1) {
					if (dir === "left") line.push({
						r: i,
						c: k
					});
					if (dir === "right") line.push({
						r: i,
						c: 3 - k
					});
					if (dir === "up") line.push({
						r: k,
						c: i
					});
					if (dir === "down") line.push({
						r: 3 - k,
						c: i
					});
				}
				lines.push(line);
			}
			let moved = false;
			let gained = 0;
			for (const tile of state.tiles) {
				tile.targetRow = tile.row;
				tile.targetCol = tile.col;
				tile.isMergeTarget = false;
				tile.pendingValue = 0;
			}
			for (const line of lines) {
				const tiles = line.map((pos) => state.tiles.find((tile) => tile.alive && tile.row === pos.r && tile.col === pos.c)).filter(Boolean);
				let write = 0;
				let i = 0;
				while (i < tiles.length) {
					const cur = tiles[i];
					const next = tiles[i + 1];
					const target = line[write];
					if (next && cur.value === next.value) {
						cur.targetRow = target.r;
						cur.targetCol = target.c;
						cur.isMergeTarget = true;
						cur.pendingValue = cur.value * 2;
						next.targetRow = target.r;
						next.targetCol = target.c;
						next.alive = false;
						gained += cur.value * 2;
						moved = true;
						i += 2;
					} else {
						cur.targetRow = target.r;
						cur.targetCol = target.c;
						if (cur.row !== target.r || cur.col !== target.c) moved = true;
						i += 1;
					}
					write += 1;
				}
			}
			if (!moved) {
				sfx(200, .05, "square", .015);
				return;
			}
			for (const tile of state.tiles) {
				if (!tile.alive) continue;
				tile.startX = tile.x;
				tile.startY = tile.y;
				tile.tx = cellX(tile.targetCol);
				tile.ty = cellY(tile.targetRow);
			}
			state.undo.push({
				values: state.grid.map((row) => row.slice()),
				score: state.score
			});
			if (state.undo.length > 20) state.undo.shift();
			state.score += gained;
			state.animating = true;
			state.animTime = 0;
			sync();
			sfx(620, .05, "sine", .018);
		};
		const finish = () => {
			for (const tile of state.tiles) {
				if (!tile.alive) continue;
				tile.row = tile.targetRow;
				tile.col = tile.targetCol;
				tile.x = tile.tx;
				tile.y = tile.ty;
				if (!tile.isMergeTarget) continue;
				tile.value = tile.pendingValue;
				tile.isMergeTarget = false;
				tile.scale = 1.28;
				tile.popT = 1;
				const color = COLORS[tile.value] || COLORS[4096];
				burst(tile.x, tile.y, color.glow);
				state.floaters.push({
					x: tile.x,
					y: tile.y - 8,
					text: `+${tile.value}`,
					color: color.bg,
					life: 1,
					vy: -60
				});
				sfx(400 + Math.min(1200, Math.log2(tile.value) * 100), .1, "sine", .035);
				if (tile.value === 2048 && !state.won2048) {
					state.won2048 = true;
					state.shake = 8;
					say("2048");
				}
				if (tile.value > 2048 && !state.won4096) {
					state.won4096 = true;
					state.shake = 10;
					say(String(tile.value));
				}
			}
			state.tiles = state.tiles.filter((tile) => tile.alive);
			state.animating = false;
			spawn();
			paintGrid();
			if (state.score > state.best) {
				state.best = state.score;
				state.raised = true;
				try {
					localStorage.setItem(BEST_KEY$1, String(state.best));
				} catch {}
			}
			sync();
			if (!movesLeft()) window.setTimeout(endGame, 280);
		};
		const rounded = (x, y, w, h, r) => {
			const radius = Math.min(r, w / 2, h / 2);
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.arcTo(x + w, y, x + w, y + h, radius);
			ctx.arcTo(x + w, y + h, x, y + h, radius);
			ctx.arcTo(x, y + h, x, y, radius);
			ctx.arcTo(x, y, x + w, y, radius);
			ctx.closePath();
		};
		const draw = () => {
			ctx.save();
			if (state.shake > 0) ctx.translate((Math.random() - .5) * state.shake, (Math.random() - .5) * state.shake);
			ctx.fillStyle = "#04070e";
			ctx.fillRect(0, 0, VW$1, VW$1);
			for (const star of state.stars) {
				ctx.globalAlpha = star.a * (.6 + Math.sin(state.time * 2 + star.tw) * .4);
				ctx.fillStyle = "#cfe9ff";
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.r, 0, TAU$1);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) {
				const x = PAD + c * 96.5;
				const y = PAD + r * 96.5;
				ctx.fillStyle = "rgba(255,255,255,.045)";
				rounded(x, y, CELL, CELL, 12);
				ctx.fill();
			}
			for (const tile of [...state.tiles].sort((a, b) => a.value - b.value)) {
				const colors = COLORS[tile.value] || COLORS[4096];
				const size = CELL * tile.scale;
				if (size < 2) continue;
				const x = tile.x - size / 2;
				const y = tile.y - size / 2;
				const grad = ctx.createLinearGradient(x, y, x, y + size);
				grad.addColorStop(0, colors.bg);
				grad.addColorStop(1, colors.bg2);
				ctx.fillStyle = grad;
				rounded(x, y, size, size, 12);
				ctx.fill();
				const font = (tile.value < 100 ? 42 : tile.value < 1e3 ? 34 : tile.value < 1e4 ? 26 : 22) * tile.scale;
				ctx.fillStyle = colors.text;
				ctx.font = `900 ${font}px sans-serif`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(String(tile.value), tile.x, tile.y + 1);
			}
			for (const bit of state.particles) {
				ctx.globalAlpha = Math.max(0, bit.life);
				ctx.fillStyle = bit.color;
				ctx.beginPath();
				ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU$1);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (const floater of state.floaters) {
				ctx.globalAlpha = Math.max(0, floater.life);
				ctx.fillStyle = floater.color;
				ctx.font = "900 16px sans-serif";
				ctx.textAlign = "center";
				ctx.fillText(floater.text, floater.x, floater.y);
			}
			ctx.globalAlpha = 1;
			ctx.restore();
		};
		const loop = (ts) => {
			if (!alive) return;
			if (!last) last = ts;
			let dt = (ts - last) / 1e3;
			last = ts;
			if (dt > .06) dt = .06;
			state.time += dt;
			if (state.animating) {
				state.animTime += dt;
				const t = Math.min(1, state.animTime / MOVE_DUR);
				const eased = ease(t);
				for (const tile of state.tiles) {
					if (!tile.alive) continue;
					tile.x = lerp(tile.startX, tile.tx, eased);
					tile.y = lerp(tile.startY, tile.ty, eased);
				}
				if (t >= 1) finish();
			}
			for (const tile of state.tiles) {
				if (tile.popT > 0) {
					tile.popT = Math.max(0, tile.popT - dt / .18);
					tile.scale = 1 + tile.popT * .28;
				}
				if (tile.popIn < 1) {
					tile.popIn = Math.min(1, tile.popIn + dt * 5);
					tile.scale = easeBack(tile.popIn);
				}
			}
			for (let i = state.particles.length - 1; i >= 0; i -= 1) {
				const bit = state.particles[i];
				bit.x += bit.vx * dt;
				bit.y += bit.vy * dt;
				bit.life -= bit.decay * dt;
				if (bit.life <= 0) state.particles.splice(i, 1);
			}
			for (let i = state.floaters.length - 1; i >= 0; i -= 1) {
				const floater = state.floaters[i];
				floater.y += floater.vy * dt;
				floater.life -= dt * 1.3;
				if (floater.life <= 0) state.floaters.splice(i, 1);
			}
			if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 30);
			draw();
			requestAnimationFrame(loop);
		};
		const fit = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(VW$1 * dpr);
			canvas.height = Math.round(VW$1 * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const onKey = (event) => {
			if ((event.ctrlKey || event.metaKey) && event.code === "KeyZ") {
				event.preventDefault();
				undo();
				return;
			}
			if (event.code === "KeyR") {
				event.preventDefault();
				fresh();
				return;
			}
			const dir = event.code === "ArrowLeft" || event.code === "KeyA" ? "left" : event.code === "ArrowRight" || event.code === "KeyD" ? "right" : event.code === "ArrowUp" || event.code === "KeyW" ? "up" : event.code === "ArrowDown" || event.code === "KeyS" ? "down" : null;
			if (dir) {
				event.preventDefault();
				move(dir);
			}
		};
		const down = (event) => {
			touch = {
				x: event.clientX,
				y: event.clientY
			};
		};
		const up = (event) => {
			if (!touch) return;
			const dx = event.clientX - touch.x;
			const dy = event.clientY - touch.y;
			touch = null;
			if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
			move(Math.abs(dx) > Math.abs(dy) ? dx > 0 ? "right" : "left" : dy > 0 ? "down" : "up");
		};
		api.current = {
			fresh,
			undo
		};
		fit();
		setBest(state.best);
		fresh();
		window.addEventListener("keydown", onKey);
		canvas.addEventListener("pointerdown", down);
		canvas.addEventListener("pointerup", up);
		canvas.addEventListener("pointercancel", () => {
			touch = null;
		});
		const frame = requestAnimationFrame(loop);
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			window.removeEventListener("keydown", onKey);
			canvas.removeEventListener("pointerdown", down);
			canvas.removeEventListener("pointerup", up);
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "g2048-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qala-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kosmos-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "g2048-hud",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$1.score[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: score })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY$1.best[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "is-gold",
					children: Math.max(best, score)
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "g2048-board",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef }),
					toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "qala-toast",
						children: toast.text
					}, toast.n) : null,
					over ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ilan-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ilan-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: record ? COPY$1.record[lang] : COPY$1.over[lang] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ilan-big",
									children: score
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: COPY$1.stuck[lang] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ilan-actions",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "is-mint",
										onClick: () => api.current.fresh(),
										children: COPY$1.again[lang]
									})
								})
							]
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "g2048-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !canUndo,
					onClick: () => api.current.undo(),
					children: COPY$1.undo[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "is-mint",
					onClick: () => api.current.fresh(),
					children: COPY$1.fresh[lang]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY$1.hint[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var VW = 400;
var VH = 600;
var GRAVITY = 720;
var BEST_KEY = "nibras-meyve-v1";
var TAU = Math.PI * 2;
var FRUITS = [
	{
		emoji: "🍎",
		color: "#ff5c7a",
		glow: "rgba(255,92,122,.8)",
		points: 10
	},
	{
		emoji: "🍊",
		color: "#fb923c",
		glow: "rgba(251,146,60,.8)",
		points: 10
	},
	{
		emoji: "🍋",
		color: "#fbbf24",
		glow: "rgba(251,191,36,.8)",
		points: 10
	},
	{
		emoji: "🍇",
		color: "#a78bfa",
		glow: "rgba(167,139,250,.8)",
		points: 12
	},
	{
		emoji: "🍉",
		color: "#6ee7b7",
		glow: "rgba(110,231,183,.8)",
		points: 15
	},
	{
		emoji: "🍓",
		color: "#f472b6",
		glow: "rgba(244,114,182,.8)",
		points: 12
	},
	{
		emoji: "🥝",
		color: "#84cc16",
		glow: "rgba(132,204,22,.8)",
		points: 12
	}
];
var BOMB = {
	emoji: "💣",
	color: "#ef4444",
	glow: "rgba(239,68,68,.9)",
	points: 0
};
var COPY = {
	score: {
		az: "Xal",
		en: "Score",
		tr: "Puan",
		ar: "النقاط",
		ru: "Счёт"
	},
	lives: {
		az: "Can",
		en: "Lives",
		tr: "Can",
		ar: "الحياة",
		ru: "Жизни"
	},
	combo: {
		az: "Kombo",
		en: "Combo",
		tr: "Kombo",
		ar: "سلسلة",
		ru: "Серия"
	},
	best: {
		az: "Rekord",
		en: "Best",
		tr: "Rekor",
		ar: "الرقم",
		ru: "Рекорд"
	},
	start: {
		az: "Başla",
		en: "Start",
		tr: "Başla",
		ar: "ابدأ",
		ru: "Старт"
	},
	again: {
		az: "Yenidən",
		en: "Again",
		tr: "Yeniden",
		ar: "من جديد",
		ru: "Заново"
	},
	resume: {
		az: "Davam et",
		en: "Continue",
		tr: "Devam et",
		ar: "أكمل",
		ru: "Дальше"
	},
	pause: {
		az: "Pauza",
		en: "Pause",
		tr: "Duraklat",
		ar: "توقف",
		ru: "Пауза"
	},
	over: {
		az: "Oyun bitdi",
		en: "Game over",
		tr: "Oyun bitti",
		ar: "انتهت اللعبة",
		ru: "Игра окончена"
	},
	record: {
		az: "Yeni rekord",
		en: "New record",
		tr: "Yeni rekor",
		ar: "رقم جديد",
		ru: "Новый рекорд"
	},
	max: {
		az: "Ən uzun kombo",
		en: "Best combo",
		tr: "En uzun kombo",
		ar: "أطول سلسلة",
		ru: "Лучшая серия"
	},
	lead: {
		az: "Barmağını sürüşdür, meyvələri kəs. Bombaya toxunma.",
		en: "Swipe through the fruit. Do not touch the bomb.",
		tr: "Parmağını kaydır, meyveleri kes. Bombaya dokunma.",
		ar: "اسحب لتقطع الفاكهة. لا تلمس القنبلة.",
		ru: "Проведи по фруктам. Бомбу не трогай."
	},
	miss: {
		az: "Qaçan meyvə bir can aparır.",
		en: "A missed fruit costs a life.",
		tr: "Kaçan meyve bir can götürür.",
		ar: "الفاكهة الفائتة تأخذ حياة.",
		ru: "Пропущенный фрукт стоит жизнь."
	},
	wait: {
		az: "Meyvələr dayanıb.",
		en: "The fruit is waiting.",
		tr: "Meyveler durdu.",
		ar: "الفاكهة متوقفة.",
		ru: "Фрукты ждут."
	},
	hint: {
		az: "Sürüşdür və kəs. Bombaya toxunma.",
		en: "Swipe to slice. Avoid the bomb.",
		tr: "Kaydır ve kes. Bombaya dokunma.",
		ar: "اسحب واقطع. تجنّب القنبلة.",
		ru: "Режь смахиванием. Бомбу не трогай."
	}
};
var rand = (a, b) => a + Math.random() * (b - a);
function readBest() {
	try {
		return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0;
	} catch {
		return 0;
	}
}
function shade(hex, percent) {
	const num = Number.parseInt(hex.replace("#", ""), 16);
	const channel = (value) => Math.max(0, Math.min(255, value + percent));
	return `#${(16777216 + channel(num >> 16) * 65536 + channel(num >> 8 & 255) * 256 + channel(num & 255)).toString(16).slice(1)}`;
}
function pointSegDist(px, py, x1, y1, x2, y2) {
	const dx = x2 - x1;
	const dy = y2 - y1;
	const len2 = dx * dx + dy * dy;
	if (!len2) return Math.hypot(px - x1, py - y1);
	const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len2));
	return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}
function MeyveGame() {
	const { lang } = useI18n();
	const game = gameBySlug("meyve");
	const canvasRef = (0, import_react.useRef)(null);
	const api = (0, import_react.useRef)({
		start: () => {},
		resume: () => {}
	});
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [score, setScore] = (0, import_react.useState)(0);
	const [lives, setLives] = (0, import_react.useState)(3);
	const [combo, setCombo] = (0, import_react.useState)(0);
	const [best, setBest] = (0, import_react.useState)(0);
	const [maxCombo, setMaxCombo] = (0, import_react.useState)(0);
	const [record, setRecord] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const state = {
			mode: "idle",
			fruits: [],
			trail: [],
			particles: [],
			floaters: [],
			splatters: [],
			ambient: [],
			score: 0,
			lives: 3,
			combo: 0,
			comboTimer: 0,
			maxCombo: 0,
			best: readBest(),
			spawnTimer: 0,
			time: 0,
			shake: 0,
			flash: 0,
			elapsed: 0
		};
		let alive = true;
		let last = 0;
		let down = false;
		let actx = null;
		const timers = /* @__PURE__ */ new Set();
		const later = (fn, ms) => {
			const id = window.setTimeout(() => {
				timers.delete(id);
				if (alive) fn();
			}, ms);
			timers.add(id);
		};
		const sfx = (freq, dur = .06, type = "sine", vol = .02) => {
			try {
				const AC = window.AudioContext || window.webkitAudioContext;
				if (!actx) actx = new AC();
				if (actx.state === "suspended") actx.resume();
				const osc = actx.createOscillator();
				const gain = actx.createGain();
				osc.type = type;
				osc.frequency.setValueAtTime(freq, actx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .55), actx.currentTime + dur);
				gain.gain.setValueAtTime(vol, actx.currentTime);
				gain.gain.exponentialRampToValueAtTime(1e-4, actx.currentTime + dur);
				osc.connect(gain);
				gain.connect(actx.destination);
				osc.start();
				osc.stop(actx.currentTime + dur);
			} catch {}
		};
		const sync = () => {
			setScore(state.score);
			setLives(state.lives);
			setCombo(state.combo);
			setBest(Math.max(state.best, state.score));
			setMaxCombo(state.maxCombo);
		};
		const stars = () => {
			state.ambient = Array.from({ length: 30 }, () => ({
				x: Math.random() * VW,
				y: Math.random() * VH,
				r: .4 + Math.random() * 1.6,
				sp: 4 + Math.random() * 15,
				a: .1 + Math.random() * .3,
				tw: Math.random() * TAU
			}));
		};
		const burst = (x, y, color, count, power) => {
			for (let i = 0; i < count; i += 1) {
				const a = Math.random() * TAU;
				const sp = (80 + Math.random() * 250) * power;
				state.particles.push({
					x,
					y,
					vx: Math.cos(a) * sp,
					vy: Math.sin(a) * sp - 80,
					life: 1,
					decay: 1.8 + Math.random() * 1.4,
					size: 2 + Math.random() * 4 * power,
					color
				});
			}
		};
		const gameOver = () => {
			if (state.mode === "over") return;
			state.mode = "over";
			const isRec = state.score > state.best;
			if (isRec) {
				state.best = state.score;
				try {
					localStorage.setItem(BEST_KEY, String(state.best));
				} catch {}
			}
			setRecord(isRec);
			setMode("over");
			sync();
			sfx(200, .3, "sawtooth", .06);
		};
		const hurt = () => {
			state.lives -= 1;
			state.combo = 0;
			state.comboTimer = 0;
			state.shake = Math.max(state.shake, 4);
			state.flash = Math.max(state.flash, .2);
			sync();
			sfx(260, .15, "sawtooth", .03);
			if (state.lives <= 0) later(gameOver, 160);
		};
		const spawn = () => {
			const bomb = Math.random() < .14;
			const type = bomb ? BOMB : FRUITS[Math.floor(Math.random() * FRUITS.length)];
			const x = Math.random() < .5 ? rand(VW * .08, VW * .4) : rand(VW * .6, VW * .92);
			const targetX = VW * .5 + rand(-60, 60);
			const rise = rand(.6, .8);
			const height = rand(VH * .55, VH * .78);
			state.fruits.push({
				x,
				y: 640,
				vx: (targetX - x) / (rise * 2),
				vy: -Math.sqrt(2 * GRAVITY * height),
				r: bomb ? 26 : 28,
				rotation: rand(0, TAU),
				vrot: rand(-4, 4),
				type,
				isBomb: bomb,
				sliced: false
			});
		};
		const sliced = (fruit) => {
			fruit.sliced = true;
			if (fruit.isBomb) {
				burst(fruit.x, fruit.y, "#ef4444", 40, 1.8);
				burst(fruit.x, fruit.y, "#ffd166", 25, 1.5);
				state.shake = 14;
				state.flash = .8;
				hurt();
				sfx(90, .5, "sawtooth", .08);
				return;
			}
			state.combo += 1;
			state.comboTimer = 1.3;
			if (state.combo > state.maxCombo) state.maxCombo = state.combo;
			const points = fruit.type.points * state.combo;
			state.score += points;
			sync();
			burst(fruit.x, fruit.y, fruit.type.color, 16, 1.2);
			state.splatters.push({
				x: fruit.x,
				y: fruit.y,
				color: fruit.type.color,
				life: 1,
				decay: .32,
				blobs: Array.from({ length: 4 + Math.floor(Math.random() * 3) }, () => ({
					dx: rand(-25, 25),
					dy: rand(-25, 25),
					r: rand(4, 12)
				}))
			});
			state.floaters.push({
				x: fruit.x,
				y: fruit.y - 20,
				text: `+${points}`,
				color: fruit.type.color,
				size: state.combo > 1 ? 22 : 18,
				life: 1,
				vy: -90
			});
			if (state.combo >= 3) state.floaters.push({
				x: fruit.x,
				y: fruit.y - 50,
				text: `×${state.combo}`,
				color: "#ffd166",
				size: 16,
				life: 1,
				vy: -70
			});
			sfx(500 + state.combo * 80, .07, "sine", .03);
			state.shake = Math.max(state.shake, 2);
		};
		const hit = (fruit) => {
			const now = state.elapsed;
			for (let i = 1; i < state.trail.length; i += 1) {
				const a = state.trail[i - 1];
				const b = state.trail[i];
				if (now - b.t > .35) continue;
				if (pointSegDist(fruit.x, fruit.y, a.x, a.y, b.x, b.y) < fruit.r * .85) return true;
			}
			return false;
		};
		const start = () => {
			state.mode = "playing";
			state.fruits = [];
			state.trail = [];
			state.particles = [];
			state.floaters = [];
			state.splatters = [];
			state.score = 0;
			state.lives = 3;
			state.combo = 0;
			state.comboTimer = 0;
			state.maxCombo = 0;
			state.spawnTimer = .6;
			state.elapsed = 0;
			state.shake = 0;
			state.flash = 0;
			stars();
			setMode("playing");
			setRecord(false);
			sync();
			sfx(520, .1, "sine", .04);
		};
		const resume = () => {
			if (state.mode !== "paused") return;
			state.mode = "playing";
			setMode("playing");
		};
		api.current = {
			start,
			resume
		};
		const update = (dt) => {
			if (state.mode !== "playing") return;
			state.elapsed += dt;
			if (state.comboTimer > 0) {
				state.comboTimer -= dt;
				if (state.comboTimer <= 0) {
					state.combo = 0;
					sync();
				}
			}
			state.spawnTimer -= dt;
			if (state.spawnTimer <= 0) {
				const wait = Math.max(.42, 1.05 - state.elapsed * .012);
				const count = state.elapsed > 20 || state.elapsed > 10 && Math.random() < .5 ? 2 : 1;
				for (let i = 0; i < count; i += 1) later(spawn, i * 100);
				state.spawnTimer = wait + rand(-.15, .25);
			}
			for (let i = state.fruits.length - 1; i >= 0; i -= 1) {
				const fruit = state.fruits[i];
				fruit.vy += GRAVITY * dt;
				fruit.x += fruit.vx * dt;
				fruit.y += fruit.vy * dt;
				fruit.rotation += fruit.vrot * dt;
				if (!fruit.sliced && hit(fruit)) sliced(fruit);
				if (fruit.y > 680 && fruit.vy > 0) {
					if (!fruit.isBomb && !fruit.sliced) hurt();
					state.fruits.splice(i, 1);
				}
			}
			while (state.trail.length && state.elapsed - state.trail[0].t > .35) state.trail.shift();
		};
		const draw = () => {
			ctx.save();
			if (state.shake > 0) ctx.translate((Math.random() - .5) * state.shake, (Math.random() - .5) * state.shake);
			ctx.fillStyle = "#04070e";
			ctx.fillRect(0, 0, VW, VH);
			for (const star of state.ambient) {
				ctx.globalAlpha = star.a * (.6 + Math.sin(star.tw) * .4);
				ctx.fillStyle = "#cfe9ff";
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.r, 0, TAU);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (const mark of state.splatters) {
				ctx.globalAlpha = Math.max(0, mark.life * .55);
				ctx.fillStyle = mark.color;
				for (const blob of mark.blobs) {
					ctx.beginPath();
					ctx.arc(mark.x + blob.dx, mark.y + blob.dy, blob.r * mark.life, 0, TAU);
					ctx.fill();
				}
			}
			ctx.globalAlpha = 1;
			for (const fruit of state.fruits) {
				ctx.save();
				ctx.translate(fruit.x, fruit.y);
				ctx.rotate(fruit.rotation);
				const fill = ctx.createRadialGradient(-fruit.r * .3, -fruit.r * .3, 0, 0, 0, fruit.r);
				fill.addColorStop(0, fruit.type.color);
				fill.addColorStop(1, shade(fruit.type.color, -50));
				ctx.fillStyle = fill;
				ctx.beginPath();
				ctx.arc(0, 0, fruit.r, 0, TAU);
				ctx.fill();
				ctx.font = `${Math.round(fruit.r * 1.15)}px sans-serif`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(fruit.type.emoji, 0, 2);
				ctx.restore();
			}
			if (state.trail.length > 1) {
				ctx.lineCap = "round";
				ctx.lineJoin = "round";
				for (let i = 1; i < state.trail.length; i += 1) {
					const age = Math.min(1, (state.elapsed - state.trail[i].t) / .35);
					ctx.strokeStyle = `rgba(255,255,255,${1 - age})`;
					ctx.lineWidth = 4 * (1 - age) + 1;
					ctx.beginPath();
					ctx.moveTo(state.trail[i - 1].x, state.trail[i - 1].y);
					ctx.lineTo(state.trail[i].x, state.trail[i].y);
					ctx.stroke();
				}
			}
			for (const bit of state.particles) {
				ctx.globalAlpha = Math.max(0, bit.life);
				ctx.fillStyle = bit.color;
				ctx.beginPath();
				ctx.arc(bit.x, bit.y, bit.size * bit.life, 0, TAU);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (const floater of state.floaters) {
				ctx.globalAlpha = Math.max(0, floater.life);
				ctx.fillStyle = floater.color;
				ctx.font = `900 ${floater.size}px sans-serif`;
				ctx.textAlign = "center";
				ctx.fillText(floater.text, floater.x, floater.y);
			}
			ctx.globalAlpha = 1;
			ctx.restore();
			if (state.flash > 0) {
				ctx.fillStyle = `rgba(255,255,255,${state.flash * .18})`;
				ctx.fillRect(0, 0, VW, VH);
			}
			if (state.lives === 1 && state.mode === "playing") {
				const wash = ctx.createRadialGradient(VW / 2, VH / 2, VH * .3, VW / 2, VH / 2, VH * .75);
				wash.addColorStop(0, "rgba(255,92,122,0)");
				wash.addColorStop(1, `rgba(255,92,122,${.06 + Math.sin(state.time * 4) * .04})`);
				ctx.fillStyle = wash;
				ctx.fillRect(0, 0, VW, VH);
			}
		};
		const fx = (dt) => {
			state.time += dt;
			for (const star of state.ambient) {
				star.y += star.sp * dt;
				star.tw += dt * 2;
				if (star.y > 604) {
					star.y = -4;
					star.x = Math.random() * VW;
				}
			}
			for (let i = state.particles.length - 1; i >= 0; i -= 1) {
				const bit = state.particles[i];
				bit.x += bit.vx * dt;
				bit.y += bit.vy * dt;
				bit.vy += GRAVITY * .5 * dt;
				bit.life -= bit.decay * dt;
				if (bit.life <= 0) state.particles.splice(i, 1);
			}
			for (let i = state.floaters.length - 1; i >= 0; i -= 1) {
				const floater = state.floaters[i];
				floater.y += floater.vy * dt;
				floater.life -= dt * 1.4;
				if (floater.life <= 0) state.floaters.splice(i, 1);
			}
			for (let i = state.splatters.length - 1; i >= 0; i -= 1) {
				state.splatters[i].life -= state.splatters[i].decay * dt;
				if (state.splatters[i].life <= 0) state.splatters.splice(i, 1);
			}
			if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 35);
			if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2.4);
		};
		const xy = (event) => {
			const rect = canvas.getBoundingClientRect();
			return {
				x: (event.clientX - rect.left) * (VW / rect.width),
				y: (event.clientY - rect.top) * (VH / rect.height)
			};
		};
		const pointerDown = (event) => {
			if (state.mode !== "playing") return;
			down = true;
			const point = xy(event);
			state.trail.push({
				...point,
				t: state.elapsed
			});
		};
		const pointerMove = (event) => {
			if (!down || state.mode !== "playing") return;
			const point = xy(event);
			state.trail.push({
				...point,
				t: state.elapsed
			});
		};
		const pointerUp = () => {
			down = false;
		};
		const onKey = (event) => {
			if (event.code !== "Space" && event.code !== "Enter") return;
			event.preventDefault();
			if (state.mode === "idle" || state.mode === "over") start();
			else if (state.mode === "paused") resume();
		};
		const onHide = () => {
			if (document.hidden && state.mode === "playing") {
				state.mode = "paused";
				down = false;
				setMode("paused");
			}
		};
		const fit = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(VW * dpr);
			canvas.height = Math.round(VH * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		fit();
		stars();
		setBest(state.best);
		window.addEventListener("keydown", onKey);
		document.addEventListener("visibilitychange", onHide);
		canvas.addEventListener("pointerdown", pointerDown);
		canvas.addEventListener("pointermove", pointerMove);
		canvas.addEventListener("pointerup", pointerUp);
		canvas.addEventListener("pointercancel", pointerUp);
		const frame = requestAnimationFrame(function loop(ts) {
			if (!alive) return;
			if (!last) last = ts;
			let dt = (ts - last) / 1e3;
			last = ts;
			if (dt > .06) dt = .06;
			update(dt);
			fx(dt);
			draw();
			requestAnimationFrame(loop);
		});
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			timers.forEach((id) => window.clearTimeout(id));
			window.removeEventListener("keydown", onKey);
			document.removeEventListener("visibilitychange", onHide);
			canvas.removeEventListener("pointerdown", pointerDown);
			canvas.removeEventListener("pointermove", pointerMove);
			canvas.removeEventListener("pointerup", pointerUp);
			canvas.removeEventListener("pointercancel", pointerUp);
		};
	}, []);
	const back = lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "meyve-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qala-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang),
						children: back
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kosmos-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "qala-hud",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY.score[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-gold",
						children: score
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY.lives[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "is-life",
						children: "♥".repeat(Math.max(0, lives)) || "0"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY.combo[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: combo })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: COPY.best[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: Math.max(best, score) })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "meyve-board",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef }), mode !== "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ilan-overlay",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ilan-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "paused" ? COPY.pause[lang] : mode === "over" ? record ? COPY.record[lang] : COPY.over[lang] : game.name[lang] }),
							mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ilan-big",
								children: score
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mode === "paused" ? COPY.wait[lang] : COPY.lead[lang] }),
							mode === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ilan-mini",
								children: COPY.miss[lang]
							}) : null,
							mode === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "ilan-mini",
								children: [
									COPY.max[lang],
									" ",
									maxCombo,
									" · ",
									COPY.best[lang],
									" ",
									Math.max(best, score)
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ilan-actions",
								children: [mode === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "is-mint",
									onClick: () => api.current.resume(),
									children: COPY.resume[lang]
								}) : null, mode !== "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "is-mint",
									onClick: () => api.current.start(),
									children: mode === "idle" ? COPY.start[lang] : COPY.again[lang]
								}) : null]
							})
						]
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ilan-hint",
				children: COPY.hint[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
var LINES = [
	[
		0,
		1,
		2
	],
	[
		3,
		4,
		5
	],
	[
		6,
		7,
		8
	],
	[
		0,
		3,
		6
	],
	[
		1,
		4,
		7
	],
	[
		2,
		5,
		8
	],
	[
		0,
		4,
		8
	],
	[
		2,
		4,
		6
	]
];
var EMPTY = Array.from({ length: 9 }, () => null);
var SCORE_KEY = "nibras-xo-v1";
function lineOf(board) {
	return LINES.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]) ?? null;
}
function ended(board) {
	return lineOf(board) !== null || board.every(Boolean);
}
function scoreEnd(board) {
	const line = lineOf(board);
	if (line) return board[line[0]] === "X" ? 1 : -1;
	if (board.every(Boolean)) return 0;
	return null;
}
function minimax(board, turn) {
	const end = scoreEnd(board);
	if (end !== null) return end;
	let best = turn === "X" ? -2 : 2;
	for (let i = 0; i < 9; i += 1) {
		if (board[i]) continue;
		board[i] = turn;
		const value = minimax(board, turn === "X" ? "O" : "X");
		board[i] = null;
		best = turn === "X" ? Math.max(best, value) : Math.min(best, value);
	}
	return best;
}
function bestMove(board) {
	let best = 2;
	let move = -1;
	for (let i = 0; i < 9; i += 1) {
		if (board[i]) continue;
		board[i] = "O";
		const value = minimax(board, "X");
		board[i] = null;
		if (value < best) {
			best = value;
			move = i;
		}
	}
	return move;
}
function turnOf(board) {
	return board.filter((cell) => cell === "X").length === board.filter((cell) => cell === "O").length ? "X" : "O";
}
function GamesIndexGate() {
	const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
	if (!/\/oyun$/.test(here)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamesIndex, {});
}
function GamesIndex() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "game-icons-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "game-icons-title",
				children: GAME_COPY.heading[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "why-lead",
				children: [
					GAME_COPY.lead[lang],
					" ",
					GAME_COPY.indexDescription[lang]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "game-icon-grid",
				children: GAMES.map((game) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: gamePath(lang, game.slug),
					"aria-label": game.name[lang],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, { slug: game.slug })
				}, game.slug))
			})
		]
	});
}
function TicTacToe() {
	const { lang } = useI18n();
	const game = gameBySlug("x-o");
	const [mode, setMode] = (0, import_react.useState)("two");
	const [board, setBoard] = (0, import_react.useState)(EMPTY);
	const [score, setScore] = (0, import_react.useState)({
		x: 0,
		o: 0,
		draw: 0
	});
	const scored = (0, import_react.useRef)(null);
	const line = lineOf(board);
	const over = ended(board);
	const turn = turnOf(board);
	const win = line ? board[line[0]] : null;
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(SCORE_KEY);
			if (!raw) return;
			const saved = JSON.parse(raw);
			setScore({
				x: saved.x ?? 0,
				o: saved.o ?? 0,
				draw: saved.draw ?? 0
			});
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!over) return;
		const key = board.join("");
		if (scored.current === key) return;
		scored.current = key;
		setScore((prev) => {
			const next = win === "X" ? {
				...prev,
				x: prev.x + 1
			} : win === "O" ? {
				...prev,
				o: prev.o + 1
			} : {
				...prev,
				draw: prev.draw + 1
			};
			try {
				localStorage.setItem(SCORE_KEY, JSON.stringify(next));
			} catch {}
			return next;
		});
	}, [
		over,
		win,
		board
	]);
	(0, import_react.useEffect)(() => {
		if (mode !== "cpu" || turn !== "O" || over) return;
		const id = window.setTimeout(() => {
			setBoard((prev) => {
				if (turnOf(prev) !== "O" || ended(prev)) return prev;
				const move = bestMove(prev.slice());
				if (move < 0) return prev;
				const next = prev.slice();
				next[move] = "O";
				return next;
			});
		}, 160);
		return () => window.clearTimeout(id);
	}, [
		board,
		mode,
		turn,
		over
	]);
	const status = (0, import_react.useMemo)(() => {
		if (win === "X") return GAME_COPY.xWin[lang];
		if (win === "O") return GAME_COPY.oWin[lang];
		if (over) return GAME_COPY.draw[lang];
		return turn === "X" ? GAME_COPY.xTurn[lang] : GAME_COPY.oTurn[lang];
	}, [
		win,
		over,
		turn,
		lang
	]);
	const play = (index) => {
		if (over || board[index]) return;
		if (mode === "cpu" && turn !== "X") return;
		const next = board.slice();
		next[index] = turn;
		setBoard(next);
	};
	const restart = () => {
		scored.current = null;
		setBoard(EMPTY);
	};
	const clearScore = () => {
		const next = {
			x: 0,
			o: 0,
			draw: 0
		};
		setScore(next);
		try {
			localStorage.setItem(SCORE_KEY, JSON.stringify(next));
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page xo-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: gamePath(lang),
					children: GAME_COPY.back[lang]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: game.name[lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "xo-modes",
				role: "group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: mode === "two" ? "is-on" : "",
					onClick: () => {
						setMode("two");
						restart();
					},
					children: GAME_COPY.two[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: mode === "cpu" ? "is-on" : "",
					onClick: () => {
						setMode("cpu");
						restart();
					},
					children: GAME_COPY.cpu[lang]
				})]
			}),
			mode === "cpu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "xo-note",
				children: GAME_COPY.you[lang]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "xo-status",
				"aria-live": "polite",
				children: status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "xo-board",
				dir: "ltr",
				children: board.map((cell, index) => {
					const hot = line?.includes(index) ?? false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: hot ? "is-win" : "",
						disabled: Boolean(cell) || over || mode === "cpu" && turn === "O",
						"aria-label": `${index + 1}${cell ? ` ${cell}` : ""}`,
						onClick: () => play(index),
						children: cell ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cell === "X" ? "is-x" : "is-o",
							children: cell
						}) : null
					}, index);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "xo-score",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "X" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: score.x })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: GAME_COPY.draw[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: score.draw })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "O" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: score.o })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "xo-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: restart,
					children: GAME_COPY.again[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: clearScore,
					children: GAME_COPY.clear[lang]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "game-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "xo-version",
					children: GAME_VERSION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "why-lead",
					children: game.blurb[lang]
				})]
			})
		]
	});
}
function GameScreen({ slug }) {
	if (slug === "soz") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SozGame, {});
	if (slug === "ilan") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IlanGame, {});
	if (slug === "kosmos") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KosmosGame, {});
	if (slug === "qala") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QalaGame, {});
	if (slug === "neon") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeonGame, {});
	if (slug === "tetris") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TetrisGame, {});
	if (slug === "2048") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Game2048, {});
	if (slug === "meyve") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeyveGame, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicTacToe, {});
}
//#endregion
export { GamesIndexGate as n, GameScreen as t };
