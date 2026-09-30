const verbsData = [
  {
    "id": 1,
    "arabic": "كَتَبَ",
    "meaning": "yazmaq",
    "forms": {
      "past": {
        "arabic": "كَتَبَ",
        "translation": "yazdı",
        "examples": [
          {
            "arabic": "هُوَ كَتَبَ أَمْسِ.",
            "translation": "O, dün yazdı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْتُبُ",
        "translation": "yazır",
        "examples": [
          {
            "arabic": "هُوَ يَكْتُبُ الآنَ.",
            "translation": "O, indi yazır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُكْتُبْ",
        "translation": "yaz!",
        "examples": [
          {
            "arabic": "اُكْتُبْ.",
            "translation": "yaz!"
          }
        ]
      }
    }
  },
  {
    "id": 2,
    "arabic": "قَرَأَ",
    "meaning": "oxumaq",
    "forms": {
      "past": {
        "arabic": "قَرَأَ",
        "translation": "oxudu",
        "examples": [
          {
            "arabic": "هُوَ قَرَأَ أَمْسِ.",
            "translation": "O, dün oxudu."
          }
        ]
      },
      "present": {
        "arabic": "يَقْرَأُ",
        "translation": "oxuyur",
        "examples": [
          {
            "arabic": "هُوَ يَقْرَأُ الآنَ.",
            "translation": "O, indi oxuyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْرَأْ",
        "translation": "oxu!",
        "examples": [
          {
            "arabic": "اِقْرَأْ.",
            "translation": "oxu!"
          }
        ]
      }
    }
  },
  {
    "id": 3,
    "arabic": "ذَهَبَ",
    "meaning": "getmək",
    "forms": {
      "past": {
        "arabic": "ذَهَبَ",
        "translation": "getdi",
        "examples": [
          {
            "arabic": "هُوَ ذَهَبَ أَمْسِ.",
            "translation": "O, dün getdı."
          }
        ]
      },
      "present": {
        "arabic": "يَذْهَبُ",
        "translation": "gedir",
        "examples": [
          {
            "arabic": "هُوَ يَذْهَبُ الآنَ.",
            "translation": "O, indi getır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِذْهَبْ",
        "translation": "get!",
        "examples": [
          {
            "arabic": "اِذْهَبْ.",
            "translation": "get!"
          }
        ]
      }
    }
  },
  {
    "id": 4,
    "arabic": "أَكَلَ",
    "meaning": "yemək",
    "forms": {
      "past": {
        "arabic": "أَكَلَ",
        "translation": "yedi",
        "examples": [
          {
            "arabic": "هُوَ أَكَلَ أَمْسِ.",
            "translation": "O, dün yedı."
          }
        ]
      },
      "present": {
        "arabic": "يَأْكُلُ",
        "translation": "yeyir",
        "examples": [
          {
            "arabic": "هُوَ يَأْكُلُ الآنَ.",
            "translation": "O, indi yeır."
          }
        ]
      },
      "imperative": {
        "arabic": "كُلْ",
        "translation": "ye!",
        "examples": [
          {
            "arabic": "كُلْ.",
            "translation": "ye!"
          }
        ]
      }
    }
  },
  {
    "id": 5,
    "arabic": "شَرِبَ",
    "meaning": "içmək",
    "forms": {
      "past": {
        "arabic": "شَرِبَ",
        "translation": "içdi",
        "examples": [
          {
            "arabic": "هُوَ شَرِبَ أَمْسِ.",
            "translation": "O, dün içdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْرَبُ",
        "translation": "içir",
        "examples": [
          {
            "arabic": "هُوَ يَشْرَبُ الآنَ.",
            "translation": "O, indi içir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْرَبْ",
        "translation": "iç!",
        "examples": [
          {
            "arabic": "اِشْرَبْ.",
            "translation": "iç!"
          }
        ]
      }
    }
  },
  {
    "id": 6,
    "arabic": "فَهِمَ",
    "meaning": "anlamaq",
    "forms": {
      "past": {
        "arabic": "فَهِمَ",
        "translation": "anladı",
        "examples": [
          {
            "arabic": "هُوَ فَهِمَ أَمْسِ.",
            "translation": "O, dün anladı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْهَمُ",
        "translation": "anlayır",
        "examples": [
          {
            "arabic": "هُوَ يَفْهَمُ الآنَ.",
            "translation": "O, indi anlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْهَمْ",
        "translation": "anla!",
        "examples": [
          {
            "arabic": "اِفْهَمْ.",
            "translation": "anla!"
          }
        ]
      }
    }
  },
  {
    "id": 7,
    "arabic": "حَفِظَ",
    "meaning": "əzbərləmək",
    "forms": {
      "past": {
        "arabic": "حَفِظَ",
        "translation": "əzbərlədi",
        "examples": [
          {
            "arabic": "هُوَ حَفِظَ أَمْسِ.",
            "translation": "O, dün əzbərlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْفَظُ",
        "translation": "əzbərləyir",
        "examples": [
          {
            "arabic": "هُوَ يَحْفَظُ الآنَ.",
            "translation": "O, indi əzbərləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْفَظْ",
        "translation": "əzbərlə!",
        "examples": [
          {
            "arabic": "اِحْفَظْ.",
            "translation": "əzbərlə!"
          }
        ]
      }
    }
  },
  {
    "id": 8,
    "arabic": "عَمِلَ",
    "meaning": "işləmək",
    "forms": {
      "past": {
        "arabic": "عَمِلَ",
        "translation": "işlədi",
        "examples": [
          {
            "arabic": "هُوَ عَمِلَ أَمْسِ.",
            "translation": "O, dün işlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْمَلُ",
        "translation": "işləyir",
        "examples": [
          {
            "arabic": "هُوَ يَعْمَلُ الآنَ.",
            "translation": "O, indi işləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْمَلْ",
        "translation": "işlə!",
        "examples": [
          {
            "arabic": "اِعْمَلْ.",
            "translation": "işlə!"
          }
        ]
      }
    }
  },
  {
    "id": 9,
    "arabic": "دَرَسَ",
    "meaning": "öyrənmək, dərs oxumaq",
    "forms": {
      "past": {
        "arabic": "دَرَسَ",
        "translation": "öyrəndi",
        "examples": [
          {
            "arabic": "هُوَ دَرَسَ أَمْسِ.",
            "translation": "O, dün öyrənməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْرُسُ",
        "translation": "öyrənir",
        "examples": [
          {
            "arabic": "هُوَ يَدْرُسُ الآنَ.",
            "translation": "O, indi öyrənməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُدْرُسْ",
        "translation": "öyrən!",
        "examples": [
          {
            "arabic": "اُدْرُسْ.",
            "translation": "öyrənmək!"
          }
        ]
      }
    }
  },
  {
    "id": 10,
    "arabic": "نَظَرَ",
    "meaning": "baxmaq",
    "forms": {
      "past": {
        "arabic": "نَظَرَ",
        "translation": "baxdı",
        "examples": [
          {
            "arabic": "هُوَ نَظَرَ أَمْسِ.",
            "translation": "O, dün baxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْظُرُ",
        "translation": "baxır",
        "examples": [
          {
            "arabic": "هُوَ يَنْظُرُ الآنَ.",
            "translation": "O, indi baxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْظُرْ",
        "translation": "bax!",
        "examples": [
          {
            "arabic": "اُنْظُرْ.",
            "translation": "bax!"
          }
        ]
      }
    }
  },
  {
    "id": 11,
    "arabic": "سَمِعَ",
    "meaning": "eşitmək",
    "forms": {
      "past": {
        "arabic": "سَمِعَ",
        "translation": "eşitdi",
        "examples": [
          {
            "arabic": "هُوَ سَمِعَ أَمْسِ.",
            "translation": "O, dün eşitdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْمَعُ",
        "translation": "eşidir",
        "examples": [
          {
            "arabic": "هُوَ يَسْمَعُ الآنَ.",
            "translation": "O, indi eşitir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْمَعْ",
        "translation": "eşit!",
        "examples": [
          {
            "arabic": "اِسْمَعْ.",
            "translation": "eşit!"
          }
        ]
      }
    }
  },
  {
    "id": 12,
    "arabic": "قَالَ",
    "meaning": "demək",
    "forms": {
      "past": {
        "arabic": "قَالَ",
        "translation": "dedi",
        "examples": [
          {
            "arabic": "هُوَ قَالَ أَمْسِ.",
            "translation": "O, dün dedı."
          }
        ]
      },
      "present": {
        "arabic": "يَقُولُ",
        "translation": "deyir",
        "examples": [
          {
            "arabic": "هُوَ يَقُولُ الآنَ.",
            "translation": "O, indi deır."
          }
        ]
      },
      "imperative": {
        "arabic": "قُلْ",
        "translation": "de!",
        "examples": [
          {
            "arabic": "قُلْ.",
            "translation": "de!"
          }
        ]
      }
    }
  },
  {
    "id": 13,
    "arabic": "فَعَلَ",
    "meaning": "etmək",
    "forms": {
      "past": {
        "arabic": "فَعَلَ",
        "translation": "etdi",
        "examples": [
          {
            "arabic": "هُوَ فَعَلَ أَمْسِ.",
            "translation": "O, dün etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْعَلُ",
        "translation": "edir",
        "examples": [
          {
            "arabic": "هُوَ يَفْعَلُ الآنَ.",
            "translation": "O, indi etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْعَلْ",
        "translation": "et!",
        "examples": [
          {
            "arabic": "اِفْعَلْ.",
            "translation": "et!"
          }
        ]
      }
    }
  },
  {
    "id": 14,
    "arabic": "أَخَذَ",
    "meaning": "almaq, götürmək",
    "forms": {
      "past": {
        "arabic": "أَخَذَ",
        "translation": "aldı",
        "examples": [
          {
            "arabic": "هُوَ أَخَذَ أَمْسِ.",
            "translation": "O, dün almaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَأْخُذُ",
        "translation": "alır",
        "examples": [
          {
            "arabic": "هُوَ يَأْخُذُ الآنَ.",
            "translation": "O, indi almaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "خُذْ",
        "translation": "al!",
        "examples": [
          {
            "arabic": "خُذْ.",
            "translation": "almaq!"
          }
        ]
      }
    }
  },
  {
    "id": 15,
    "arabic": "جَاءَ",
    "meaning": "gəlmək",
    "forms": {
      "past": {
        "arabic": "جَاءَ",
        "translation": "gəldi",
        "examples": [
          {
            "arabic": "هُوَ جَاءَ أَمْسِ.",
            "translation": "O, dün gəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَجِيءُ",
        "translation": "gəlir",
        "examples": [
          {
            "arabic": "هُوَ يَجِيءُ الآنَ.",
            "translation": "O, indi gəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "جِئْ",
        "translation": "gəl!",
        "examples": [
          {
            "arabic": "جِئْ.",
            "translation": "gəl!"
          }
        ]
      }
    }
  },
  {
    "id": 16,
    "arabic": "خَرَجَ",
    "meaning": "çıxmaq",
    "forms": {
      "past": {
        "arabic": "خَرَجَ",
        "translation": "çıxdı",
        "examples": [
          {
            "arabic": "هُوَ خَرَجَ أَمْسِ.",
            "translation": "O, dün çıxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْرُجُ",
        "translation": "çıxır",
        "examples": [
          {
            "arabic": "هُوَ يَخْرُجُ الآنَ.",
            "translation": "O, indi çıxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُخْرُجْ",
        "translation": "çıx!",
        "examples": [
          {
            "arabic": "اُخْرُجْ.",
            "translation": "çıx!"
          }
        ]
      }
    }
  },
  {
    "id": 17,
    "arabic": "دَخَلَ",
    "meaning": "girmək",
    "forms": {
      "past": {
        "arabic": "دَخَلَ",
        "translation": "girdi",
        "examples": [
          {
            "arabic": "هُوَ دَخَلَ أَمْسِ.",
            "translation": "O, dün girdi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْخُلُ",
        "translation": "girir",
        "examples": [
          {
            "arabic": "هُوَ يَدْخُلُ الآنَ.",
            "translation": "O, indi girir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُدْخُلْ",
        "translation": "gir!",
        "examples": [
          {
            "arabic": "اُدْخُلْ.",
            "translation": "gir!"
          }
        ]
      }
    }
  },
  {
    "id": 18,
    "arabic": "جَلَسَ",
    "meaning": "oturmaq",
    "forms": {
      "past": {
        "arabic": "جَلَسَ",
        "translation": "oturdu",
        "examples": [
          {
            "arabic": "هُوَ جَلَسَ أَمْسِ.",
            "translation": "O, dün oturdu."
          }
        ]
      },
      "present": {
        "arabic": "يَجْلِسُ",
        "translation": "oturur",
        "examples": [
          {
            "arabic": "هُوَ يَجْلِسُ الآنَ.",
            "translation": "O, indi oturur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْلِسْ",
        "translation": "otur!",
        "examples": [
          {
            "arabic": "اِجْلِسْ.",
            "translation": "otur!"
          }
        ]
      }
    }
  },
  {
    "id": 19,
    "arabic": "قَامَ",
    "meaning": "qalxmaq, durmaq",
    "forms": {
      "past": {
        "arabic": "قَامَ",
        "translation": "qalxdı",
        "examples": [
          {
            "arabic": "هُوَ قَامَ أَمْسِ.",
            "translation": "O, dün qalxmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقُومُ",
        "translation": "qalxır",
        "examples": [
          {
            "arabic": "هُوَ يَقُومُ الآنَ.",
            "translation": "O, indi qalxmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "قُمْ",
        "translation": "qalx!",
        "examples": [
          {
            "arabic": "قُمْ.",
            "translation": "qalxmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 20,
    "arabic": "رَجَعَ",
    "meaning": "qayıtmaq",
    "forms": {
      "past": {
        "arabic": "رَجَعَ",
        "translation": "qayıtdı",
        "examples": [
          {
            "arabic": "هُوَ رَجَعَ أَمْسِ.",
            "translation": "O, dün qayıtdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْجِعُ",
        "translation": "qayıdır",
        "examples": [
          {
            "arabic": "هُوَ يَرْجِعُ الآنَ.",
            "translation": "O, indi qayıtır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْجِعْ",
        "translation": "qayıt!",
        "examples": [
          {
            "arabic": "اِرْجِعْ.",
            "translation": "qayıt!"
          }
        ]
      }
    }
  },
  {
    "id": 21,
    "arabic": "وَصَلَ",
    "meaning": "çatmaq, gəlib çatmaq",
    "forms": {
      "past": {
        "arabic": "وَصَلَ",
        "translation": "çatdı",
        "examples": [
          {
            "arabic": "هُوَ وَصَلَ أَمْسِ.",
            "translation": "O, dün çatmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَصِلُ",
        "translation": "çatır",
        "examples": [
          {
            "arabic": "هُوَ يَصِلُ الآنَ.",
            "translation": "O, indi çatmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "صِلْ",
        "translation": "çat!",
        "examples": [
          {
            "arabic": "صِلْ.",
            "translation": "çatmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 22,
    "arabic": "سَافَرَ",
    "meaning": "səyahət etmək",
    "forms": {
      "past": {
        "arabic": "سَافَرَ",
        "translation": "səyahət etdi",
        "examples": [
          {
            "arabic": "هُوَ سَافَرَ أَمْسِ.",
            "translation": "O, dün səyahət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَافِرُ",
        "translation": "səyahət edir",
        "examples": [
          {
            "arabic": "هُوَ يُسَافِرُ الآنَ.",
            "translation": "O, indi səyahət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَافِرْ",
        "translation": "səyahət et!",
        "examples": [
          {
            "arabic": "سَافِرْ.",
            "translation": "səyahət et!"
          }
        ]
      }
    }
  },
  {
    "id": 23,
    "arabic": "نَامَ",
    "meaning": "yatmaq",
    "forms": {
      "past": {
        "arabic": "نَامَ",
        "translation": "yatdı",
        "examples": [
          {
            "arabic": "هُوَ نَامَ أَمْسِ.",
            "translation": "O, dün yatdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنَامُ",
        "translation": "yatır",
        "examples": [
          {
            "arabic": "هُوَ يَنَامُ الآنَ.",
            "translation": "O, indi yatır."
          }
        ]
      },
      "imperative": {
        "arabic": "نَمْ",
        "translation": "yat!",
        "examples": [
          {
            "arabic": "نَمْ.",
            "translation": "yat!"
          }
        ]
      }
    }
  },
  {
    "id": 24,
    "arabic": "صَحَا",
    "meaning": "oyanmaq",
    "forms": {
      "past": {
        "arabic": "صَحَا",
        "translation": "oyandı",
        "examples": [
          {
            "arabic": "هُوَ صَحَا أَمْسِ.",
            "translation": "O, dün oyandı."
          }
        ]
      },
      "present": {
        "arabic": "يَصْحُو",
        "translation": "oyanır",
        "examples": [
          {
            "arabic": "هُوَ يَصْحُو الآنَ.",
            "translation": "O, indi oyanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْحُ",
        "translation": "oyan!",
        "examples": [
          {
            "arabic": "اِصْحُ.",
            "translation": "oyan!"
          }
        ]
      }
    }
  },
  {
    "id": 25,
    "arabic": "مَشَى",
    "meaning": "yerimək",
    "forms": {
      "past": {
        "arabic": "مَشَى",
        "translation": "yeridi",
        "examples": [
          {
            "arabic": "هُوَ مَشَى أَمْسِ.",
            "translation": "O, dün yeridi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْشِي",
        "translation": "yeriyir",
        "examples": [
          {
            "arabic": "هُوَ يَمْشِي الآنَ.",
            "translation": "O, indi yeriyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْشِ",
        "translation": "yeri!",
        "examples": [
          {
            "arabic": "اِمْشِ.",
            "translation": "yeri!"
          }
        ]
      }
    }
  },
  {
    "id": 26,
    "arabic": "رَكِبَ",
    "meaning": "minmək",
    "forms": {
      "past": {
        "arabic": "رَكِبَ",
        "translation": "mindi",
        "examples": [
          {
            "arabic": "هُوَ رَكِبَ أَمْسِ.",
            "translation": "O, dün mindi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْكَبُ",
        "translation": "minir",
        "examples": [
          {
            "arabic": "هُوَ يَرْكَبُ الآنَ.",
            "translation": "O, indi minir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْكَبْ",
        "translation": "min!",
        "examples": [
          {
            "arabic": "اِرْكَبْ.",
            "translation": "min!"
          }
        ]
      }
    }
  },
  {
    "id": 27,
    "arabic": "نَزَلَ",
    "meaning": "enmək, düşmək",
    "forms": {
      "past": {
        "arabic": "نَزَلَ",
        "translation": "endi",
        "examples": [
          {
            "arabic": "هُوَ نَزَلَ أَمْسِ.",
            "translation": "O, dün enməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْزِلُ",
        "translation": "enir",
        "examples": [
          {
            "arabic": "هُوَ يَنْزِلُ الآنَ.",
            "translation": "O, indi enməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْزِلْ",
        "translation": "en!",
        "examples": [
          {
            "arabic": "اِنْزِلْ.",
            "translation": "enmək!"
          }
        ]
      }
    }
  },
  {
    "id": 28,
    "arabic": "فَتَحَ",
    "meaning": "açmaq",
    "forms": {
      "past": {
        "arabic": "فَتَحَ",
        "translation": "açdı",
        "examples": [
          {
            "arabic": "هُوَ فَتَحَ أَمْسِ.",
            "translation": "O, dün açdı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْتَحُ",
        "translation": "açır",
        "examples": [
          {
            "arabic": "هُوَ يَفْتَحُ الآنَ.",
            "translation": "O, indi açır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْتَحْ",
        "translation": "aç!",
        "examples": [
          {
            "arabic": "اِفْتَحْ.",
            "translation": "aç!"
          }
        ]
      }
    }
  },
  {
    "id": 29,
    "arabic": "جَلَدَ",
    "meaning": "qamçılamaq, dözmək",
    "forms": {
      "past": {
        "arabic": "جَلَدَ",
        "translation": "qamçıladı",
        "examples": [
          {
            "arabic": "هُوَ جَلَدَ أَمْسِ.",
            "translation": "O, dünən qamçıladı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْلِدُ",
        "translation": "qamçılayır",
        "examples": [
          {
            "arabic": "هُوَ يَجْلِدُ الآنَ.",
            "translation": "O, indi qamçılayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْلِدْ",
        "translation": "qamçıla!",
        "examples": [
          {
            "arabic": "اِجْلِدْ.",
            "translation": "qamçıla!"
          }
        ]
      }
    }
  },
  {
    "id": 30,
    "arabic": "غَسَلَ",
    "meaning": "yumaq",
    "forms": {
      "past": {
        "arabic": "غَسَلَ",
        "translation": "yudu",
        "examples": [
          {
            "arabic": "هُوَ غَسَلَ أَمْسِ.",
            "translation": "O, dün yudu."
          }
        ]
      },
      "present": {
        "arabic": "يَغْسِلُ",
        "translation": "yuyur",
        "examples": [
          {
            "arabic": "هُوَ يَغْسِلُ الآنَ.",
            "translation": "O, indi yuyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْسِلْ",
        "translation": "yu!",
        "examples": [
          {
            "arabic": "اِغْسِلْ.",
            "translation": "yu!"
          }
        ]
      }
    }
  },
  {
    "id": 31,
    "arabic": "لَبِسَ",
    "meaning": "geyinmək",
    "forms": {
      "past": {
        "arabic": "لَبِسَ",
        "translation": "geyindi",
        "examples": [
          {
            "arabic": "هُوَ لَبِسَ أَمْسِ.",
            "translation": "O, dün geyindi."
          }
        ]
      },
      "present": {
        "arabic": "يَلْبَسُ",
        "translation": "geyinir",
        "examples": [
          {
            "arabic": "هُوَ يَلْبَسُ الآنَ.",
            "translation": "O, indi geyinir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْبَسْ",
        "translation": "geyin!",
        "examples": [
          {
            "arabic": "اِلْبَسْ.",
            "translation": "geyin!"
          }
        ]
      }
    }
  },
  {
    "id": 32,
    "arabic": "خَلَعَ",
    "meaning": "çıxarmaq (paltarı)",
    "forms": {
      "past": {
        "arabic": "خَلَعَ",
        "translation": "çıxardı",
        "examples": [
          {
            "arabic": "هُوَ خَلَعَ أَمْسِ.",
            "translation": "O, dün çıxarmaq (paltarı)dı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْلَعُ",
        "translation": "çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يَخْلَعُ الآنَ.",
            "translation": "O, indi çıxarmaq (paltarı)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْلَعْ",
        "translation": "çıxar!",
        "examples": [
          {
            "arabic": "اِخْلَعْ.",
            "translation": "çıxarmaq (paltarı)!"
          }
        ]
      }
    }
  },
  {
    "id": 33,
    "arabic": "لَعِبَ",
    "meaning": "oynamaq",
    "forms": {
      "past": {
        "arabic": "لَعِبَ",
        "translation": "oynadı",
        "examples": [
          {
            "arabic": "هُوَ لَعِبَ أَمْسِ.",
            "translation": "O, dün oynadı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْعَبُ",
        "translation": "oynayır",
        "examples": [
          {
            "arabic": "هُوَ يَلْعَبُ الآنَ.",
            "translation": "O, indi oynayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْعَبْ",
        "translation": "oyna!",
        "examples": [
          {
            "arabic": "اِلْعَبْ.",
            "translation": "oyna!"
          }
        ]
      }
    }
  },
  {
    "id": 34,
    "arabic": "رَسَمَ",
    "meaning": "çəkmək (rəsm)",
    "forms": {
      "past": {
        "arabic": "رَسَمَ",
        "translation": "çəkdi",
        "examples": [
          {
            "arabic": "هُوَ رَسَمَ أَمْسِ.",
            "translation": "O, dün çəkmək (rəsm)di."
          }
        ]
      },
      "present": {
        "arabic": "يَرْسُمُ",
        "translation": "çəkir",
        "examples": [
          {
            "arabic": "هُوَ يَرْسُمُ الآنَ.",
            "translation": "O, indi çəkmək (rəsm)ir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْسُمْ",
        "translation": "çək!",
        "examples": [
          {
            "arabic": "اُرْسُمْ.",
            "translation": "çəkmək (rəsm)!"
          }
        ]
      }
    }
  },
  {
    "id": 35,
    "arabic": "طَبَخَ",
    "meaning": "bişirmək",
    "forms": {
      "past": {
        "arabic": "طَبَخَ",
        "translation": "bişirdi",
        "examples": [
          {
            "arabic": "هُوَ طَبَخَ أَمْسِ.",
            "translation": "O, dün bişirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَطْبُخُ",
        "translation": "bişirir",
        "examples": [
          {
            "arabic": "هُوَ يَطْبُخُ الآنَ.",
            "translation": "O, indi bişirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُطْبُخْ",
        "translation": "bişir!",
        "examples": [
          {
            "arabic": "اُطْبُخْ.",
            "translation": "bişir!"
          }
        ]
      }
    }
  },
  {
    "id": 36,
    "arabic": "نَظَّفَ",
    "meaning": "təmizləmək",
    "forms": {
      "past": {
        "arabic": "نَظَّفَ",
        "translation": "təmizlədi",
        "examples": [
          {
            "arabic": "هُوَ نَظَّفَ أَمْسِ.",
            "translation": "O, dün təmizlədi."
          }
        ]
      },
      "present": {
        "arabic": "يُنَظِّفُ",
        "translation": "təmizləyir",
        "examples": [
          {
            "arabic": "هُوَ يُنَظِّفُ الآنَ.",
            "translation": "O, indi təmizləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "نَظِّفْ",
        "translation": "təmizlə!",
        "examples": [
          {
            "arabic": "نَظِّفْ.",
            "translation": "təmizlə!"
          }
        ]
      }
    }
  },
  {
    "id": 37,
    "arabic": "صَلَّى",
    "meaning": "namaz qılmaq",
    "forms": {
      "past": {
        "arabic": "صَلَّى",
        "translation": "namaz qıldı",
        "examples": [
          {
            "arabic": "هُوَ صَلَّى أَمْسِ.",
            "translation": "O, dün namaz qıldı."
          }
        ]
      },
      "present": {
        "arabic": "يُصَلِّي",
        "translation": "namaz qılır",
        "examples": [
          {
            "arabic": "هُوَ يُصَلِّي الآنَ.",
            "translation": "O, indi namaz qılır."
          }
        ]
      },
      "imperative": {
        "arabic": "صَلِّ",
        "translation": "namaz qıl!",
        "examples": [
          {
            "arabic": "صَلِّ.",
            "translation": "namaz qıl!"
          }
        ]
      }
    }
  },
  {
    "id": 38,
    "arabic": "صَامَ",
    "meaning": "oruc tutmaq",
    "forms": {
      "past": {
        "arabic": "صَامَ",
        "translation": "oruc tutdu",
        "examples": [
          {
            "arabic": "هُوَ صَامَ أَمْسِ.",
            "translation": "O, dün oruc tutdu."
          }
        ]
      },
      "present": {
        "arabic": "يَصُومُ",
        "translation": "oruc tutur",
        "examples": [
          {
            "arabic": "هُوَ يَصُومُ الآنَ.",
            "translation": "O, indi oruc tutur."
          }
        ]
      },
      "imperative": {
        "arabic": "صُمْ",
        "translation": "oruc tut!",
        "examples": [
          {
            "arabic": "صُمْ.",
            "translation": "oruc tut!"
          }
        ]
      }
    }
  },
  {
    "id": 39,
    "arabic": "حَجَّ",
    "meaning": "həccə getmək",
    "forms": {
      "past": {
        "arabic": "حَجَّ",
        "translation": "həcc etdi",
        "examples": [
          {
            "arabic": "هُوَ حَجَّ أَمْسِ.",
            "translation": "O, dün həccə getdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحُجُّ",
        "translation": "həcc edir",
        "examples": [
          {
            "arabic": "هُوَ يَحُجُّ الآنَ.",
            "translation": "O, indi həccə getir."
          }
        ]
      },
      "imperative": {
        "arabic": "حُجَّ",
        "translation": "həcc et!",
        "examples": [
          {
            "arabic": "حُجَّ.",
            "translation": "həccə get!"
          }
        ]
      }
    }
  },
  {
    "id": 40,
    "arabic": "عَادَ",
    "meaning": "qayıtmaq, geri dönmək",
    "forms": {
      "past": {
        "arabic": "عَادَ",
        "translation": "qayıtdı",
        "examples": [
          {
            "arabic": "هُوَ عَادَ أَمْسِ.",
            "translation": "O, dün qayıtmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعُودُ",
        "translation": "qayıdır",
        "examples": [
          {
            "arabic": "هُوَ يَعُودُ الآنَ.",
            "translation": "O, indi qayıtmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "عُدْ",
        "translation": "qayıt!",
        "examples": [
          {
            "arabic": "عُدْ.",
            "translation": "qayıtmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 41,
    "arabic": "اِشْتَرَى",
    "meaning": "almaq (satın almaq)",
    "forms": {
      "past": {
        "arabic": "اِشْتَرَى",
        "translation": "aldı",
        "examples": [
          {
            "arabic": "هُوَ اِشْتَرَى أَمْسِ.",
            "translation": "O, dün almaq (satın almaq)dı."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتَرِي",
        "translation": "alır",
        "examples": [
          {
            "arabic": "هُوَ يَشْتَرِي الآنَ.",
            "translation": "O, indi almaq (satın almaq)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْتَرِ",
        "translation": "al!",
        "examples": [
          {
            "arabic": "اِشْتَرِ.",
            "translation": "almaq (satın almaq)!"
          }
        ]
      }
    }
  },
  {
    "id": 42,
    "arabic": "بَاعَ",
    "meaning": "satmaq",
    "forms": {
      "past": {
        "arabic": "بَاعَ",
        "translation": "satdı",
        "examples": [
          {
            "arabic": "هُوَ بَاعَ أَمْسِ.",
            "translation": "O, dün satdı."
          }
        ]
      },
      "present": {
        "arabic": "يَبِيعُ",
        "translation": "satır",
        "examples": [
          {
            "arabic": "هُوَ يَبِيعُ الآنَ.",
            "translation": "O, indi satır."
          }
        ]
      },
      "imperative": {
        "arabic": "بِعْ",
        "translation": "sat!",
        "examples": [
          {
            "arabic": "بِعْ.",
            "translation": "sat!"
          }
        ]
      }
    }
  },
  {
    "id": 43,
    "arabic": "دَفَعَ",
    "meaning": "ödəmək",
    "forms": {
      "past": {
        "arabic": "دَفَعَ",
        "translation": "ödədi",
        "examples": [
          {
            "arabic": "هُوَ دَفَعَ أَمْسِ.",
            "translation": "O, dün ödədi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْفَعُ",
        "translation": "ödəyir",
        "examples": [
          {
            "arabic": "هُوَ يَدْفَعُ الآنَ.",
            "translation": "O, indi ödəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدْفَعْ",
        "translation": "ödə!",
        "examples": [
          {
            "arabic": "اِدْفَعْ.",
            "translation": "ödə!"
          }
        ]
      }
    }
  },
  {
    "id": 44,
    "arabic": "سَبَقَ",
    "meaning": "qabaqlamaq, ötmək",
    "forms": {
      "past": {
        "arabic": "سَبَقَ",
        "translation": "qabaqladı",
        "examples": [
          {
            "arabic": "هُوَ سَبَقَ أَمْسِ.",
            "translation": "O, dünən qabaqladı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْبِقُ",
        "translation": "qabaqlayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْبِقُ الآنَ.",
            "translation": "O, indi qabaqlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْبِقْ",
        "translation": "qabaqla!",
        "examples": [
          {
            "arabic": "اِسْبِقْ.",
            "translation": "qabaqla!"
          }
        ]
      }
    }
  },
  {
    "id": 45,
    "arabic": "تَكَلَّمَ",
    "meaning": "danışmaq",
    "forms": {
      "past": {
        "arabic": "تَكَلَّمَ",
        "translation": "danışdı",
        "examples": [
          {
            "arabic": "هُوَ تَكَلَّمَ أَمْسِ.",
            "translation": "O, dün danışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَكَلَّمُ",
        "translation": "danışır",
        "examples": [
          {
            "arabic": "هُوَ يَتَكَلَّمُ الآنَ.",
            "translation": "O, indi danışır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَكَلَّمْ",
        "translation": "danış!",
        "examples": [
          {
            "arabic": "تَكَلَّمْ.",
            "translation": "danış!"
          }
        ]
      }
    }
  },
  {
    "id": 46,
    "arabic": "سَكَتَ",
    "meaning": "susmaq",
    "forms": {
      "past": {
        "arabic": "سَكَتَ",
        "translation": "susdu",
        "examples": [
          {
            "arabic": "هُوَ سَكَتَ أَمْسِ.",
            "translation": "O, dün susdu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْكُتُ",
        "translation": "susur",
        "examples": [
          {
            "arabic": "هُوَ يَسْكُتُ الآنَ.",
            "translation": "O, indi susur."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْكُتْ",
        "translation": "sus!",
        "examples": [
          {
            "arabic": "اُسْكُتْ.",
            "translation": "sus!"
          }
        ]
      }
    }
  },
  {
    "id": 47,
    "arabic": "سَأَلَ",
    "meaning": "soruşmaq",
    "forms": {
      "past": {
        "arabic": "سَأَلَ",
        "translation": "soruşdu",
        "examples": [
          {
            "arabic": "هُوَ سَأَلَ أَمْسِ.",
            "translation": "O, dün soruşdu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْأَلُ",
        "translation": "soruşur",
        "examples": [
          {
            "arabic": "هُوَ يَسْأَلُ الآنَ.",
            "translation": "O, indi soruşur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْأَلْ",
        "translation": "soruş!",
        "examples": [
          {
            "arabic": "اِسْأَلْ.",
            "translation": "soruş!"
          }
        ]
      }
    }
  },
  {
    "id": 48,
    "arabic": "أَجَابَ",
    "meaning": "cavab vermək",
    "forms": {
      "past": {
        "arabic": "أَجَابَ",
        "translation": "cavab verdi",
        "examples": [
          {
            "arabic": "هُوَ أَجَابَ أَمْسِ.",
            "translation": "O, dün cavab verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُجِيبُ",
        "translation": "cavab verir",
        "examples": [
          {
            "arabic": "هُوَ يُجِيبُ الآنَ.",
            "translation": "O, indi cavab verır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَجِبْ",
        "translation": "cavab ver!",
        "examples": [
          {
            "arabic": "أَجِبْ.",
            "translation": "cavab ver!"
          }
        ]
      }
    }
  },
  {
    "id": 49,
    "arabic": "بَكَى",
    "meaning": "ağlamaq",
    "forms": {
      "past": {
        "arabic": "بَكَى",
        "translation": "ağladı",
        "examples": [
          {
            "arabic": "هُوَ بَكَى أَمْسِ.",
            "translation": "O, dün ağladı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْكِي",
        "translation": "ağlayır",
        "examples": [
          {
            "arabic": "هُوَ يَبْكِي الآنَ.",
            "translation": "O, indi ağlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْكِ",
        "translation": "ağla!",
        "examples": [
          {
            "arabic": "اِبْكِ.",
            "translation": "ağla!"
          }
        ]
      }
    }
  },
  {
    "id": 50,
    "arabic": "ضَحِكَ",
    "meaning": "gülmək",
    "forms": {
      "past": {
        "arabic": "ضَحِكَ",
        "translation": "güldü",
        "examples": [
          {
            "arabic": "هُوَ ضَحِكَ أَمْسِ.",
            "translation": "O, dün güldü."
          }
        ]
      },
      "present": {
        "arabic": "يَضْحَكُ",
        "translation": "gülür",
        "examples": [
          {
            "arabic": "هُوَ يَضْحَكُ الآنَ.",
            "translation": "O, indi gülür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِضْحَكْ",
        "translation": "gül!",
        "examples": [
          {
            "arabic": "اِضْحَكْ.",
            "translation": "gül!"
          }
        ]
      }
    }
  },
  {
    "id": 51,
    "arabic": "خَشَعَ",
    "meaning": "təvazökar olmaq, qəlbi yumşalmaq",
    "forms": {
      "past": {
        "arabic": "خَشَعَ",
        "translation": "xüşu etdi",
        "examples": [
          {
            "arabic": "هُوَ خَشَعَ أَمْسِ.",
            "translation": "O, dün təvazökar olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْشَعُ",
        "translation": "xüşu edir",
        "examples": [
          {
            "arabic": "هُوَ يَخْشَعُ الآنَ.",
            "translation": "O, indi təvazökar olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْشَعْ",
        "translation": "xüşu et!",
        "examples": [
          {
            "arabic": "اِخْشَعْ.",
            "translation": "təvazökar olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 52,
    "arabic": "صَدَقَ",
    "meaning": "doğru danışmaq",
    "forms": {
      "past": {
        "arabic": "صَدَقَ",
        "translation": "doğru danışdı",
        "examples": [
          {
            "arabic": "هُوَ صَدَقَ أَمْسِ.",
            "translation": "O, dün doğru danışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَصْدُقُ",
        "translation": "doğru danışır",
        "examples": [
          {
            "arabic": "هُوَ يَصْدُقُ الآنَ.",
            "translation": "O, indi doğru danışır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُصْدُقْ",
        "translation": "doğru danış!",
        "examples": [
          {
            "arabic": "اُصْدُقْ.",
            "translation": "doğru danış!"
          }
        ]
      }
    }
  },
  {
    "id": 53,
    "arabic": "كَذَبَ",
    "meaning": "yalan danışmaq",
    "forms": {
      "past": {
        "arabic": "كَذَبَ",
        "translation": "yalan danışdı",
        "examples": [
          {
            "arabic": "هُوَ كَذَبَ أَمْسِ.",
            "translation": "O, dün yalan danışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْذِبُ",
        "translation": "yalan danışır",
        "examples": [
          {
            "arabic": "هُوَ يَكْذِبُ الآنَ.",
            "translation": "O, indi yalan danışır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَكْذِبْ",
        "translation": "yalan danışma!",
        "examples": [
          {
            "arabic": "لَا تَكْذِبْ.",
            "translation": "yalan danış!"
          }
        ]
      }
    }
  },
  {
    "id": 54,
    "arabic": "صَبَرَ",
    "meaning": "səbir etmək",
    "forms": {
      "past": {
        "arabic": "صَبَرَ",
        "translation": "səbir etdi",
        "examples": [
          {
            "arabic": "هُوَ صَبَرَ أَمْسِ.",
            "translation": "O, dün səbir etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصْبِرُ",
        "translation": "səbir edir",
        "examples": [
          {
            "arabic": "هُوَ يَصْبِرُ الآنَ.",
            "translation": "O, indi səbir etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْبِرْ",
        "translation": "səbir et!",
        "examples": [
          {
            "arabic": "اِصْبِرْ.",
            "translation": "səbir et!"
          }
        ]
      }
    }
  },
  {
    "id": 55,
    "arabic": "شَكَرَ",
    "meaning": "şükr etmək",
    "forms": {
      "past": {
        "arabic": "شَكَرَ",
        "translation": "şükr etdi",
        "examples": [
          {
            "arabic": "هُوَ شَكَرَ أَمْسِ.",
            "translation": "O, dün şükr etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَشْكُرُ",
        "translation": "şükr edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْكُرُ الآنَ.",
            "translation": "O, indi şükr etür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُشْكُرْ",
        "translation": "şükr et!",
        "examples": [
          {
            "arabic": "اُشْكُرْ.",
            "translation": "şükr et!"
          }
        ]
      }
    }
  },
  {
    "id": 56,
    "arabic": "ذَكَرَ",
    "meaning": "zikr etmək, xatırlamaq",
    "forms": {
      "past": {
        "arabic": "ذَكَرَ",
        "translation": "zikr etdi",
        "examples": [
          {
            "arabic": "هُوَ ذَكَرَ أَمْسِ.",
            "translation": "O, dün zikr etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَذْكُرُ",
        "translation": "zikr edir",
        "examples": [
          {
            "arabic": "هُوَ يَذْكُرُ الآنَ.",
            "translation": "O, indi zikr etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُذْكُرْ",
        "translation": "zikr et!",
        "examples": [
          {
            "arabic": "اُذْكُرْ.",
            "translation": "zikr etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 57,
    "arabic": "دَعَا",
    "meaning": "dua etmək, çağırmaq",
    "forms": {
      "past": {
        "arabic": "دَعَا",
        "translation": "dua etdi",
        "examples": [
          {
            "arabic": "هُوَ دَعَا أَمْسِ.",
            "translation": "O, dün dua etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْعُو",
        "translation": "dua edir",
        "examples": [
          {
            "arabic": "هُوَ يَدْعُو الآنَ.",
            "translation": "O, indi dua etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُدْعُ",
        "translation": "dua et!",
        "examples": [
          {
            "arabic": "اُدْعُ.",
            "translation": "dua etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 58,
    "arabic": "تَابَ",
    "meaning": "tövbə etmək",
    "forms": {
      "past": {
        "arabic": "تَابَ",
        "translation": "tövbə etdi",
        "examples": [
          {
            "arabic": "هُوَ تَابَ أَمْسِ.",
            "translation": "O, dün tövbə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتُوبُ",
        "translation": "tövbə edir",
        "examples": [
          {
            "arabic": "هُوَ يَتُوبُ الآنَ.",
            "translation": "O, indi tövbə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "تُبْ",
        "translation": "tövbə et!",
        "examples": [
          {
            "arabic": "تُبْ.",
            "translation": "tövbə et!"
          }
        ]
      }
    }
  },
  {
    "id": 59,
    "arabic": "نَحَتَ",
    "meaning": "oymaq, heykəl yonmaq",
    "forms": {
      "past": {
        "arabic": "نَحَتَ",
        "translation": "oydu",
        "examples": [
          {
            "arabic": "هُوَ نَحَتَ أَمْسِ.",
            "translation": "O, dünən oydu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْحِتُ",
        "translation": "oyur",
        "examples": [
          {
            "arabic": "هُوَ يَنْحِتُ الآنَ.",
            "translation": "O, indi oyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْحِتْ",
        "translation": "oy!",
        "examples": [
          {
            "arabic": "اِنْحِتْ.",
            "translation": "oy!"
          }
        ]
      }
    }
  },
  {
    "id": 60,
    "arabic": "تَوَضَّأَ",
    "meaning": "dəstəmaz almaq",
    "forms": {
      "past": {
        "arabic": "تَوَضَّأَ",
        "translation": "dəstəmaz aldı",
        "examples": [
          {
            "arabic": "هُوَ تَوَضَّأَ أَمْسِ.",
            "translation": "O, dün dəstəmaz aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَضَّأُ",
        "translation": "dəstəmaz alır",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَضَّأُ الآنَ.",
            "translation": "O, indi dəstəmaz alır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَضَّأْ",
        "translation": "dəstəmaz al!",
        "examples": [
          {
            "arabic": "تَوَضَّأْ.",
            "translation": "dəstəmaz al!"
          }
        ]
      }
    }
  },
  {
    "id": 61,
    "arabic": "سَجَدَ",
    "meaning": "səcdə etmək",
    "forms": {
      "past": {
        "arabic": "سَجَدَ",
        "translation": "səcdə etdi",
        "examples": [
          {
            "arabic": "هُوَ سَجَدَ أَمْسِ.",
            "translation": "O, dün səcdə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْجُدُ",
        "translation": "səcdə edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْجُدُ الآنَ.",
            "translation": "O, indi səcdə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْجُدْ",
        "translation": "səcdə et!",
        "examples": [
          {
            "arabic": "اُسْجُدْ.",
            "translation": "səcdə et!"
          }
        ]
      }
    }
  },
  {
    "id": 62,
    "arabic": "رَكَعَ",
    "meaning": "rüku etmək",
    "forms": {
      "past": {
        "arabic": "رَكَعَ",
        "translation": "rüku etdi",
        "examples": [
          {
            "arabic": "هُوَ رَكَعَ أَمْسِ.",
            "translation": "O, dün rüku etdu."
          }
        ]
      },
      "present": {
        "arabic": "يَرْكَعُ",
        "translation": "rüku edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْكَعُ الآنَ.",
            "translation": "O, indi rüku etur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْكَعْ",
        "translation": "rüku et!",
        "examples": [
          {
            "arabic": "اِرْكَعْ.",
            "translation": "rüku et!"
          }
        ]
      }
    }
  },
  {
    "id": 63,
    "arabic": "قَرَأَ القُرْآنَ",
    "meaning": "Quran oxumaq",
    "forms": {
      "past": {
        "arabic": "قَرَأَ القُرْآنَ",
        "translation": "Quran oxudu",
        "examples": [
          {
            "arabic": "هُوَ قَرَأَ القُرْآنَ أَمْسِ.",
            "translation": "O, dün Quran oxudu."
          }
        ]
      },
      "present": {
        "arabic": "يَقْرَأُ القُرْآنَ",
        "translation": "Quran oxuyur",
        "examples": [
          {
            "arabic": "هُوَ يَقْرَأُ القُرْآنَ الآنَ.",
            "translation": "O, indi Quran oxuyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْرَأِ القُرْآنَ",
        "translation": "Quran oxu!",
        "examples": [
          {
            "arabic": "اِقْرَأِ القُرْآنَ.",
            "translation": "Quran oxu!"
          }
        ]
      }
    }
  },
  {
    "id": 64,
    "arabic": "تَدَبَّرَ",
    "meaning": "təfəkkür etmək",
    "forms": {
      "past": {
        "arabic": "تَدَبَّرَ",
        "translation": "təfəkkür etdi",
        "examples": [
          {
            "arabic": "هُوَ تَدَبَّرَ أَمْسِ.",
            "translation": "O, dün təfəkkür etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَدَبَّرُ",
        "translation": "təfəkkür edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَدَبَّرُ الآنَ.",
            "translation": "O, indi təfəkkür etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَدَبَّرْ",
        "translation": "təfəkkür et!",
        "examples": [
          {
            "arabic": "تَدَبَّرْ.",
            "translation": "təfəkkür et!"
          }
        ]
      }
    }
  },
  {
    "id": 65,
    "arabic": "تَعَلَّمَ",
    "meaning": "öyrənmək",
    "forms": {
      "past": {
        "arabic": "تَعَلَّمَ",
        "translation": "öyrəndi",
        "examples": [
          {
            "arabic": "هُوَ تَعَلَّمَ أَمْسِ.",
            "translation": "O, dün öyrəndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَعَلَّمُ",
        "translation": "öyrənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَعَلَّمُ الآنَ.",
            "translation": "O, indi öyrənir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَعَلَّمْ",
        "translation": "öyrən!",
        "examples": [
          {
            "arabic": "تَعَلَّمْ.",
            "translation": "öyrən!"
          }
        ]
      }
    }
  },
  {
    "id": 66,
    "arabic": "عَلَّمَ",
    "meaning": "öyrətmək",
    "forms": {
      "past": {
        "arabic": "عَلَّمَ",
        "translation": "öyrətdi",
        "examples": [
          {
            "arabic": "هُوَ عَلَّمَ أَمْسِ.",
            "translation": "O, dün öyrətdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَلِّمُ",
        "translation": "öyrədir",
        "examples": [
          {
            "arabic": "هُوَ يُعَلِّمُ الآنَ.",
            "translation": "O, indi öyrətir."
          }
        ]
      },
      "imperative": {
        "arabic": "عَلِّمْ",
        "translation": "öyrət!",
        "examples": [
          {
            "arabic": "عَلِّمْ.",
            "translation": "öyrət!"
          }
        ]
      }
    }
  },
  {
    "id": 67,
    "arabic": "غَرَسَ",
    "meaning": "əkmək, basdırmaq",
    "forms": {
      "past": {
        "arabic": "غَرَسَ",
        "translation": "əkdi",
        "examples": [
          {
            "arabic": "هُوَ غَرَسَ أَمْسِ.",
            "translation": "O, dünən əkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَغْرِسُ",
        "translation": "əkir",
        "examples": [
          {
            "arabic": "هُوَ يَغْرِسُ الآنَ.",
            "translation": "O, indi əkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْرِسْ",
        "translation": "ək!",
        "examples": [
          {
            "arabic": "اِغْرِسْ.",
            "translation": "ək!"
          }
        ]
      }
    }
  },
  {
    "id": 68,
    "arabic": "نَصَحَ",
    "meaning": "nəsihət etmək",
    "forms": {
      "past": {
        "arabic": "نَصَحَ",
        "translation": "nəsihət etdi",
        "examples": [
          {
            "arabic": "هُوَ نَصَحَ أَمْسِ.",
            "translation": "O, dün nəsihət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْصَحُ",
        "translation": "nəsihət edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْصَحُ الآنَ.",
            "translation": "O, indi nəsihət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْصَحْ",
        "translation": "nəsihət et!",
        "examples": [
          {
            "arabic": "اِنْصَحْ.",
            "translation": "nəsihət et!"
          }
        ]
      }
    }
  },
  {
    "id": 69,
    "arabic": "زَارَ",
    "meaning": "ziyarət etmək",
    "forms": {
      "past": {
        "arabic": "زَارَ",
        "translation": "ziyarət etdi",
        "examples": [
          {
            "arabic": "هُوَ زَارَ أَمْسِ.",
            "translation": "O, dün ziyarət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَزُورُ",
        "translation": "ziyarət edir",
        "examples": [
          {
            "arabic": "هُوَ يَزُورُ الآنَ.",
            "translation": "O, indi ziyarət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "زُرْ",
        "translation": "ziyarət et!",
        "examples": [
          {
            "arabic": "زُرْ.",
            "translation": "ziyarət et!"
          }
        ]
      }
    }
  },
  {
    "id": 70,
    "arabic": "سَاعَدَ",
    "meaning": "kömək etmək",
    "forms": {
      "past": {
        "arabic": "سَاعَدَ",
        "translation": "kömək etdi",
        "examples": [
          {
            "arabic": "هُوَ سَاعَدَ أَمْسِ.",
            "translation": "O, dün kömək etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَاعِدُ",
        "translation": "kömək edir",
        "examples": [
          {
            "arabic": "هُوَ يُسَاعِدُ الآنَ.",
            "translation": "O, indi kömək etir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَاعِدْ",
        "translation": "kömək et!",
        "examples": [
          {
            "arabic": "سَاعِدْ.",
            "translation": "kömək et!"
          }
        ]
      }
    }
  },
  {
    "id": 71,
    "arabic": "تَصَدَّقَ",
    "meaning": "sədəqə vermək",
    "forms": {
      "past": {
        "arabic": "تَصَدَّقَ",
        "translation": "sədəqə verdi",
        "examples": [
          {
            "arabic": "هُوَ تَصَدَّقَ أَمْسِ.",
            "translation": "O, dün sədəqə verdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَصَدَّقُ",
        "translation": "sədəqə verir",
        "examples": [
          {
            "arabic": "هُوَ يَتَصَدَّقُ الآنَ.",
            "translation": "O, indi sədəqə verir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَصَدَّقْ",
        "translation": "sədəqə ver!",
        "examples": [
          {
            "arabic": "تَصَدَّقْ.",
            "translation": "sədəqə ver!"
          }
        ]
      }
    }
  },
  {
    "id": 72,
    "arabic": "أَنْفَقَ",
    "meaning": "xərcləmək (Allah yolunda)",
    "forms": {
      "past": {
        "arabic": "أَنْفَقَ",
        "translation": "xərclədi",
        "examples": [
          {
            "arabic": "هُوَ أَنْفَقَ أَمْسِ.",
            "translation": "O, dün xərcləmək (Allah yolunda)dı."
          }
        ]
      },
      "present": {
        "arabic": "يُنْفِقُ",
        "translation": "xərcləyir",
        "examples": [
          {
            "arabic": "هُوَ يُنْفِقُ الآنَ.",
            "translation": "O, indi xərcləmək (Allah yolunda)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْفِقْ",
        "translation": "xərclə!",
        "examples": [
          {
            "arabic": "أَنْفِقْ.",
            "translation": "xərcləmək (Allah yolunda)!"
          }
        ]
      }
    }
  },
  {
    "id": 73,
    "arabic": "صَامَ تَطَوُّعًا",
    "meaning": "könüllü oruc tutmaq",
    "forms": {
      "past": {
        "arabic": "صَامَ تَطَوُّعًا",
        "translation": "könüllü oruc tutdu",
        "examples": [
          {
            "arabic": "هُوَ صَامَ تَطَوُّعًا أَمْسِ.",
            "translation": "O, dün könüllü oruc tutdu."
          }
        ]
      },
      "present": {
        "arabic": "يَصُومُ تَطَوُّعًا",
        "translation": "könüllü oruc tutur",
        "examples": [
          {
            "arabic": "هُوَ يَصُومُ تَطَوُّعًا الآنَ.",
            "translation": "O, indi könüllü oruc tutur."
          }
        ]
      },
      "imperative": {
        "arabic": "صُمْ تَطَوُّعًا",
        "translation": "könüllü oruc tut!",
        "examples": [
          {
            "arabic": "صُمْ تَطَوُّعًا.",
            "translation": "könüllü oruc tut!"
          }
        ]
      }
    }
  },
  {
    "id": 74,
    "arabic": "مَرِضَ",
    "meaning": "xəstələnmək",
    "forms": {
      "past": {
        "arabic": "مَرِضَ",
        "translation": "xəstələndi",
        "examples": [
          {
            "arabic": "هُوَ مَرِضَ أَمْسِ.",
            "translation": "O, dünən xəstələndi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْرَضُ",
        "translation": "xəstələnir",
        "examples": [
          {
            "arabic": "هُوَ يَمْرَضُ الآنَ.",
            "translation": "O, indi xəstələnir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْرَضْ",
        "translation": "xəstələn!",
        "examples": [
          {
            "arabic": "اِمْرَضْ.",
            "translation": "xəstələn!"
          }
        ]
      }
    }
  },
  {
    "id": 75,
    "arabic": "اِجْتَنَبَ",
    "meaning": "çəkinmək, uzaq durmaq",
    "forms": {
      "past": {
        "arabic": "اِجْتَنَبَ",
        "translation": "uzaq durdu",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَنَبَ أَمْسِ.",
            "translation": "O, dün çəkinməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَنِبُ",
        "translation": "uzaq durur",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَنِبُ الآنَ.",
            "translation": "O, indi çəkinməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَنِبْ",
        "translation": "uzaq dur!",
        "examples": [
          {
            "arabic": "اِجْتَنِبْ.",
            "translation": "çəkinmək!"
          }
        ]
      }
    }
  },
  {
    "id": 76,
    "arabic": "أَمَرَ",
    "meaning": "əmr etmək",
    "forms": {
      "past": {
        "arabic": "أَمَرَ",
        "translation": "əmr etdi",
        "examples": [
          {
            "arabic": "هُوَ أَمَرَ أَمْسِ.",
            "translation": "O, dün əmr etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَأْمُرُ",
        "translation": "əmr edir",
        "examples": [
          {
            "arabic": "هُوَ يَأْمُرُ الآنَ.",
            "translation": "O, indi əmr etir."
          }
        ]
      },
      "imperative": {
        "arabic": "مُرْ",
        "translation": "əmr et!",
        "examples": [
          {
            "arabic": "مُرْ.",
            "translation": "əmr et!"
          }
        ]
      }
    }
  },
  {
    "id": 77,
    "arabic": "نَهَى",
    "meaning": "qadağan etmək",
    "forms": {
      "past": {
        "arabic": "نَهَى",
        "translation": "qadağan etdi",
        "examples": [
          {
            "arabic": "هُوَ نَهَى أَمْسِ.",
            "translation": "O, dün qadağan etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْهَى",
        "translation": "qadağan edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْهَى الآنَ.",
            "translation": "O, indi qadağan etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْهَ",
        "translation": "qadağan et!",
        "examples": [
          {
            "arabic": "اِنْهَ.",
            "translation": "qadağan et!"
          }
        ]
      }
    }
  },
  {
    "id": 78,
    "arabic": "وَعَدَ",
    "meaning": "vəd etmək, söz vermək",
    "forms": {
      "past": {
        "arabic": "وَعَدَ",
        "translation": "vəd etdi",
        "examples": [
          {
            "arabic": "هُوَ وَعَدَ أَمْسِ.",
            "translation": "O, dün vəd etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعِدُ",
        "translation": "vəd edir",
        "examples": [
          {
            "arabic": "هُوَ يَعِدُ الآنَ.",
            "translation": "O, indi vəd etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "عِدْ",
        "translation": "vəd et!",
        "examples": [
          {
            "arabic": "عِدْ.",
            "translation": "vəd etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 79,
    "arabic": "حَلَفَ",
    "meaning": "and içmək",
    "forms": {
      "past": {
        "arabic": "حَلَفَ",
        "translation": "and içdi",
        "examples": [
          {
            "arabic": "هُوَ حَلَفَ أَمْسِ.",
            "translation": "O, dün and içdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْلِفُ",
        "translation": "and içir",
        "examples": [
          {
            "arabic": "هُوَ يَحْلِفُ الآنَ.",
            "translation": "O, indi and içir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْلِفْ",
        "translation": "and iç!",
        "examples": [
          {
            "arabic": "اِحْلِفْ.",
            "translation": "and iç!"
          }
        ]
      }
    }
  },
  {
    "id": 80,
    "arabic": "أَوْفَى",
    "meaning": "vəfa etmək, yerinə yetirmək",
    "forms": {
      "past": {
        "arabic": "أَوْفَى",
        "translation": "vəfa etdi",
        "examples": [
          {
            "arabic": "هُوَ أَوْفَى أَمْسِ.",
            "translation": "O, dün vəfa etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُوفِي",
        "translation": "vəfa edir",
        "examples": [
          {
            "arabic": "هُوَ يُوفِي الآنَ.",
            "translation": "O, indi vəfa etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَوْفِ",
        "translation": "vəfa et!",
        "examples": [
          {
            "arabic": "أَوْفِ.",
            "translation": "vəfa etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 81,
    "arabic": "بَشَّرَ",
    "meaning": "müjdələmək",
    "forms": {
      "past": {
        "arabic": "بَشَّرَ",
        "translation": "müjdələdi",
        "examples": [
          {
            "arabic": "هُوَ بَشَّرَ أَمْسِ.",
            "translation": "O, dün müjdələdi."
          }
        ]
      },
      "present": {
        "arabic": "يُبَشِّرُ",
        "translation": "müjdələyir",
        "examples": [
          {
            "arabic": "هُوَ يُبَشِّرُ الآنَ.",
            "translation": "O, indi müjdələyir."
          }
        ]
      },
      "imperative": {
        "arabic": "بَشِّرْ",
        "translation": "müjdələ!",
        "examples": [
          {
            "arabic": "بَشِّرْ.",
            "translation": "müjdələ!"
          }
        ]
      }
    }
  },
  {
    "id": 82,
    "arabic": "حَذَّرَ",
    "meaning": "xəbərdarlıq etmək",
    "forms": {
      "past": {
        "arabic": "حَذَّرَ",
        "translation": "xəbərdarlıq etdi",
        "examples": [
          {
            "arabic": "هُوَ حَذَّرَ أَمْسِ.",
            "translation": "O, dün xəbərdarlıq etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُحَذِّرُ",
        "translation": "xəbərdarlıq edir",
        "examples": [
          {
            "arabic": "هُوَ يُحَذِّرُ الآنَ.",
            "translation": "O, indi xəbərdarlıq etır."
          }
        ]
      },
      "imperative": {
        "arabic": "حَذِّرْ",
        "translation": "xəbərdarlıq et!",
        "examples": [
          {
            "arabic": "حَذِّرْ.",
            "translation": "xəbərdarlıq et!"
          }
        ]
      }
    }
  },
  {
    "id": 83,
    "arabic": "شَفَعَ",
    "meaning": "şəfaət etmək",
    "forms": {
      "past": {
        "arabic": "شَفَعَ",
        "translation": "şəfaət etdi",
        "examples": [
          {
            "arabic": "هُوَ شَفَعَ أَمْسِ.",
            "translation": "O, dün şəfaət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْفَعُ",
        "translation": "şəfaət edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْفَعُ الآنَ.",
            "translation": "O, indi şəfaət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْفَعْ",
        "translation": "şəfaət et!",
        "examples": [
          {
            "arabic": "اِشْفَعْ.",
            "translation": "şəfaət et!"
          }
        ]
      }
    }
  },
  {
    "id": 84,
    "arabic": "تَوَكَّلَ",
    "meaning": "təvəkkül etmək",
    "forms": {
      "past": {
        "arabic": "تَوَكَّلَ",
        "translation": "təvəkkül etdi",
        "examples": [
          {
            "arabic": "هُوَ تَوَكَّلَ أَمْسِ.",
            "translation": "O, dün təvəkkül etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَكَّلُ",
        "translation": "təvəkkül edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَكَّلُ الآنَ.",
            "translation": "O, indi təvəkkül etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَكَّلْ",
        "translation": "təvəkkül et!",
        "examples": [
          {
            "arabic": "تَوَكَّلْ.",
            "translation": "təvəkkül et!"
          }
        ]
      }
    }
  },
  {
    "id": 85,
    "arabic": "رَضِيَ",
    "meaning": "razı olmaq",
    "forms": {
      "past": {
        "arabic": "رَضِيَ",
        "translation": "razı oldu",
        "examples": [
          {
            "arabic": "هُوَ رَضِيَ أَمْسِ.",
            "translation": "O, dün razı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَرْضَى",
        "translation": "razı olur",
        "examples": [
          {
            "arabic": "هُوَ يَرْضَى الآنَ.",
            "translation": "O, indi razı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْضَ",
        "translation": "razı ol!",
        "examples": [
          {
            "arabic": "اِرْضَ.",
            "translation": "razı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 86,
    "arabic": "أَطَاعَ",
    "meaning": "itaət etmək",
    "forms": {
      "past": {
        "arabic": "أَطَاعَ",
        "translation": "itaət etdi",
        "examples": [
          {
            "arabic": "هُوَ أَطَاعَ أَمْسِ.",
            "translation": "O, dün itaət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُطِيعُ",
        "translation": "itaət edir",
        "examples": [
          {
            "arabic": "هُوَ يُطِيعُ الآنَ.",
            "translation": "O, indi itaət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَطِعْ",
        "translation": "itaət et!",
        "examples": [
          {
            "arabic": "أَطِعْ.",
            "translation": "itaət et!"
          }
        ]
      }
    }
  },
  {
    "id": 87,
    "arabic": "عَصَى",
    "meaning": "asi olmaq, itaətsizlik etmək",
    "forms": {
      "past": {
        "arabic": "عَصَى",
        "translation": "asi oldu",
        "examples": [
          {
            "arabic": "هُوَ عَصَى أَمْسِ.",
            "translation": "O, dün asi olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْصِي",
        "translation": "asi olur",
        "examples": [
          {
            "arabic": "هُوَ يَعْصِي الآنَ.",
            "translation": "O, indi asi olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَعْصِ",
        "translation": "asi olma!",
        "examples": [
          {
            "arabic": "لَا تَعْصِ.",
            "translation": "asi olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 88,
    "arabic": "خَافَ",
    "meaning": "qorxmaq",
    "forms": {
      "past": {
        "arabic": "خَافَ",
        "translation": "qorxdu",
        "examples": [
          {
            "arabic": "هُوَ خَافَ أَمْسِ.",
            "translation": "O, dün qorxdu."
          }
        ]
      },
      "present": {
        "arabic": "يَخَافُ",
        "translation": "qorxur",
        "examples": [
          {
            "arabic": "هُوَ يَخَافُ الآنَ.",
            "translation": "O, indi qorxur."
          }
        ]
      },
      "imperative": {
        "arabic": "خَفْ",
        "translation": "qorx!",
        "examples": [
          {
            "arabic": "خَفْ.",
            "translation": "qorx!"
          }
        ]
      }
    }
  },
  {
    "id": 89,
    "arabic": "رَجَا",
    "meaning": "ümid etmək",
    "forms": {
      "past": {
        "arabic": "رَجَا",
        "translation": "ümid etdi",
        "examples": [
          {
            "arabic": "هُوَ رَجَا أَمْسِ.",
            "translation": "O, dün ümid etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْجُو",
        "translation": "ümid edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْجُو الآنَ.",
            "translation": "O, indi ümid etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْجُ",
        "translation": "ümid et!",
        "examples": [
          {
            "arabic": "اِرْجُ.",
            "translation": "ümid et!"
          }
        ]
      }
    }
  },
  {
    "id": 90,
    "arabic": "أَحَبَّ",
    "meaning": "sevmək",
    "forms": {
      "past": {
        "arabic": "أَحَبَّ",
        "translation": "sevdi",
        "examples": [
          {
            "arabic": "هُوَ أَحَبَّ أَمْسِ.",
            "translation": "O, dün sevdı."
          }
        ]
      },
      "present": {
        "arabic": "يُحِبُّ",
        "translation": "sevir",
        "examples": [
          {
            "arabic": "هُوَ يُحِبُّ الآنَ.",
            "translation": "O, indi sevır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَحِبَّ",
        "translation": "sev!",
        "examples": [
          {
            "arabic": "أَحِبَّ.",
            "translation": "sev!"
          }
        ]
      }
    }
  },
  {
    "id": 91,
    "arabic": "كَرِهَ",
    "meaning": "ikrah etmək, xoşlamamaq",
    "forms": {
      "past": {
        "arabic": "كَرِهَ",
        "translation": "xoşlamadı",
        "examples": [
          {
            "arabic": "هُوَ كَرِهَ أَمْسِ.",
            "translation": "O, dün ikrah etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْرَهُ",
        "translation": "xoşlamır",
        "examples": [
          {
            "arabic": "هُوَ يَكْرَهُ الآنَ.",
            "translation": "O, indi ikrah etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْرَهْ",
        "translation": "xoşlama!",
        "examples": [
          {
            "arabic": "اِكْرَهْ.",
            "translation": "ikrah etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 92,
    "arabic": "عَاهَدَ",
    "meaning": "əhd etmək, sözləşmək",
    "forms": {
      "past": {
        "arabic": "عَاهَدَ",
        "translation": "əhd etdi",
        "examples": [
          {
            "arabic": "هُوَ عَاهَدَ أَمْسِ.",
            "translation": "O, dün əhd etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَاهِدُ",
        "translation": "əhd edir",
        "examples": [
          {
            "arabic": "هُوَ يُعَاهِدُ الآنَ.",
            "translation": "O, indi əhd etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "عَاهِدْ",
        "translation": "əhd et!",
        "examples": [
          {
            "arabic": "عَاهِدْ.",
            "translation": "əhd etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 93,
    "arabic": "اِسْتَعَانَ",
    "meaning": "kömək istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَانَ",
        "translation": "kömək istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَانَ أَمْسِ.",
            "translation": "O, dün kömək istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِينُ",
        "translation": "kömək istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِينُ الآنَ.",
            "translation": "O, indi kömək istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِنْ",
        "translation": "kömək istə!",
        "examples": [
          {
            "arabic": "اِسْتَعِنْ.",
            "translation": "kömək istə!"
          }
        ]
      }
    }
  },
  {
    "id": 94,
    "arabic": "اِجْتَهَدَ",
    "meaning": "səy göstərmək",
    "forms": {
      "past": {
        "arabic": "اِجْتَهَدَ",
        "translation": "səy göstərdi",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَهَدَ أَمْسِ.",
            "translation": "O, dün səy göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَهِدُ",
        "translation": "səy göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَهِدُ الآنَ.",
            "translation": "O, indi səy göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَهِدْ",
        "translation": "səy göstər!",
        "examples": [
          {
            "arabic": "اِجْتَهِدْ.",
            "translation": "səy göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 95,
    "arabic": "تَوَسَّلَ",
    "meaning": "vəsail etmək, yaxınlaşmaq",
    "forms": {
      "past": {
        "arabic": "تَوَسَّلَ",
        "translation": "vəsail etdi",
        "examples": [
          {
            "arabic": "هُوَ تَوَسَّلَ أَمْسِ.",
            "translation": "O, dün vəsail etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَسَّلُ",
        "translation": "vəsail edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَسَّلُ الآنَ.",
            "translation": "O, indi vəsail etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَسَّلْ",
        "translation": "vəsail et!",
        "examples": [
          {
            "arabic": "تَوَسَّلْ.",
            "translation": "vəsail etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 96,
    "arabic": "خَشِيَ",
    "meaning": "qorxmaq, ehtiramla qorxmaq",
    "forms": {
      "past": {
        "arabic": "خَشِيَ",
        "translation": "qorxdu",
        "examples": [
          {
            "arabic": "هُوَ خَشِيَ أَمْسِ.",
            "translation": "O, dün qorxmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْشَى",
        "translation": "qorxur",
        "examples": [
          {
            "arabic": "هُوَ يَخْشَى الآنَ.",
            "translation": "O, indi qorxmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْشَ",
        "translation": "qorx!",
        "examples": [
          {
            "arabic": "اِخْشَ.",
            "translation": "qorxmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 97,
    "arabic": "اِلْتَزَمَ",
    "meaning": "bağlı qalmaq, riayət etmək",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ",
        "translation": "riayət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ أَمْسِ.",
            "translation": "O, dün bağlı qalmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ",
        "translation": "riayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ الآنَ.",
            "translation": "O, indi bağlı qalmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ",
        "translation": "riayət et!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ.",
            "translation": "bağlı qalmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 98,
    "arabic": "اِسْتَقَامَ",
    "meaning": "düz yolda olmaq, istiqamət sahibi olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَامَ",
        "translation": "düz yolda oldu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَامَ أَمْسِ.",
            "translation": "O, dün düz yolda olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِيمُ",
        "translation": "düz yolda olur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِيمُ الآنَ.",
            "translation": "O, indi düz yolda olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِمْ",
        "translation": "düz yolda ol!",
        "examples": [
          {
            "arabic": "اِسْتَقِمْ.",
            "translation": "düz yolda olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 99,
    "arabic": "هَبَطَ",
    "meaning": "enmək",
    "forms": {
      "past": {
        "arabic": "هَبَطَ",
        "translation": "endi",
        "examples": [
          {
            "arabic": "هُوَ هَبَطَ أَمْسِ.",
            "translation": "O, dünən endi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْبِطُ",
        "translation": "enir",
        "examples": [
          {
            "arabic": "هُوَ يَهْبِطُ الآنَ.",
            "translation": "O, indi enir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْبِطْ",
        "translation": "en!",
        "examples": [
          {
            "arabic": "اِهْبِطْ.",
            "translation": "en!"
          }
        ]
      }
    }
  },
  {
    "id": 100,
    "arabic": "قَرَعَ",
    "meaning": "döymək, zəng çalmaq",
    "forms": {
      "past": {
        "arabic": "قَرَعَ",
        "translation": "döydü",
        "examples": [
          {
            "arabic": "هُوَ قَرَعَ أَمْسِ.",
            "translation": "O, dünən döydü."
          }
        ]
      },
      "present": {
        "arabic": "يَقْرَعُ",
        "translation": "döyür",
        "examples": [
          {
            "arabic": "هُوَ يَقْرَعُ الآنَ.",
            "translation": "O, indi döyür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْرَعْ",
        "translation": "döy!",
        "examples": [
          {
            "arabic": "اِقْرَعْ.",
            "translation": "döy!"
          }
        ]
      }
    }
  },
  {
    "id": 101,
    "arabic": "تَزَوَّجَ",
    "meaning": "evlənmək",
    "forms": {
      "past": {
        "arabic": "تَزَوَّجَ",
        "translation": "evləndi",
        "examples": [
          {
            "arabic": "هُوَ تَزَوَّجَ أَمْسِ.",
            "translation": "O, dün evləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَزَوَّجُ",
        "translation": "evlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَزَوَّجُ الآنَ.",
            "translation": "O, indi evlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَزَوَّجْ",
        "translation": "evlən!",
        "examples": [
          {
            "arabic": "تَزَوَّجْ.",
            "translation": "evlən!"
          }
        ]
      }
    }
  },
  {
    "id": 102,
    "arabic": "طَلَّقَ",
    "meaning": "boşamaq",
    "forms": {
      "past": {
        "arabic": "طَلَّقَ",
        "translation": "boşadı",
        "examples": [
          {
            "arabic": "هُوَ طَلَّقَ أَمْسِ.",
            "translation": "O, dün boşadı."
          }
        ]
      },
      "present": {
        "arabic": "يُطَلِّقُ",
        "translation": "boşayır",
        "examples": [
          {
            "arabic": "هُوَ يُطَلِّقُ الآنَ.",
            "translation": "O, indi boşayır."
          }
        ]
      },
      "imperative": {
        "arabic": "طَلِّقْ",
        "translation": "boşa!",
        "examples": [
          {
            "arabic": "طَلِّقْ.",
            "translation": "boşa!"
          }
        ]
      }
    }
  },
  {
    "id": 103,
    "arabic": "رَبَّى",
    "meaning": "tərbiyə etmək",
    "forms": {
      "past": {
        "arabic": "رَبَّى",
        "translation": "tərbiyə etdi",
        "examples": [
          {
            "arabic": "هُوَ رَبَّى أَمْسِ.",
            "translation": "O, dün tərbiyə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرَبِّي",
        "translation": "tərbiyə edir",
        "examples": [
          {
            "arabic": "هُوَ يُرَبِّي الآنَ.",
            "translation": "O, indi tərbiyə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "رَبِّ",
        "translation": "tərbiyə et!",
        "examples": [
          {
            "arabic": "رَبِّ.",
            "translation": "tərbiyə et!"
          }
        ]
      }
    }
  },
  {
    "id": 104,
    "arabic": "حَضَرَ",
    "meaning": "iştirak etmək, hazır olmaq",
    "forms": {
      "past": {
        "arabic": "حَضَرَ",
        "translation": "iştirak etdi",
        "examples": [
          {
            "arabic": "هُوَ حَضَرَ أَمْسِ.",
            "translation": "O, dün iştirak etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْضُرُ",
        "translation": "iştirak edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْضُرُ الآنَ.",
            "translation": "O, indi iştirak etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْضُرْ",
        "translation": "iştirak et!",
        "examples": [
          {
            "arabic": "اُحْضُرْ.",
            "translation": "iştirak etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 105,
    "arabic": "غَابَ",
    "meaning": "qeyb olmaq, iştirak etməmək",
    "forms": {
      "past": {
        "arabic": "غَابَ",
        "translation": "qatılmadı",
        "examples": [
          {
            "arabic": "هُوَ غَابَ أَمْسِ.",
            "translation": "O, dün qeyb olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَغِيبُ",
        "translation": "qatılmır",
        "examples": [
          {
            "arabic": "هُوَ يَغِيبُ الآنَ.",
            "translation": "O, indi qeyb olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَغِبْ",
        "translation": "qalma, iştirak et!",
        "examples": [
          {
            "arabic": "لَا تَغِبْ.",
            "translation": "qeyb olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 106,
    "arabic": "طَرَقَ",
    "meaning": "döymək, yol açmaq",
    "forms": {
      "past": {
        "arabic": "طَرَقَ",
        "translation": "döydü",
        "examples": [
          {
            "arabic": "هُوَ طَرَقَ أَمْسِ.",
            "translation": "O, dünən döydü."
          }
        ]
      },
      "present": {
        "arabic": "يَطْرُقُ",
        "translation": "döyür",
        "examples": [
          {
            "arabic": "هُوَ يَطْرُقُ الآنَ.",
            "translation": "O, indi döyür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُطْرُقْ",
        "translation": "döy!",
        "examples": [
          {
            "arabic": "اُطْرُقْ.",
            "translation": "döy!"
          }
        ]
      }
    }
  },
  {
    "id": 107,
    "arabic": "غَلَقَ",
    "meaning": "bağlamaq",
    "forms": {
      "past": {
        "arabic": "غَلَقَ",
        "translation": "bağladı",
        "examples": [
          {
            "arabic": "هُوَ غَلَقَ أَمْسِ.",
            "translation": "O, dünən bağladı."
          }
        ]
      },
      "present": {
        "arabic": "يَغْلِقُ",
        "translation": "bağlayır",
        "examples": [
          {
            "arabic": "هُوَ يَغْلِقُ الآنَ.",
            "translation": "O, indi bağlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْلِقْ",
        "translation": "bağla!",
        "examples": [
          {
            "arabic": "اِغْلِقْ.",
            "translation": "bağla!"
          }
        ]
      }
    }
  },
  {
    "id": 108,
    "arabic": "حَكَمَ",
    "meaning": "hökm etmək, idarə etmək",
    "forms": {
      "past": {
        "arabic": "حَكَمَ",
        "translation": "hökm etdi",
        "examples": [
          {
            "arabic": "هُوَ حَكَمَ أَمْسِ.",
            "translation": "O, dün hökm etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْكُمُ",
        "translation": "hökm edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْكُمُ الآنَ.",
            "translation": "O, indi hökm etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْكُمْ",
        "translation": "hökm et!",
        "examples": [
          {
            "arabic": "اُحْكُمْ.",
            "translation": "hökm etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 109,
    "arabic": "فَتَلَ",
    "meaning": "burmaq, hörmək",
    "forms": {
      "past": {
        "arabic": "فَتَلَ",
        "translation": "burdu",
        "examples": [
          {
            "arabic": "هُوَ فَتَلَ أَمْسِ.",
            "translation": "O, dünən burdu."
          }
        ]
      },
      "present": {
        "arabic": "يَفْتِلُ",
        "translation": "burur",
        "examples": [
          {
            "arabic": "هُوَ يَفْتِلُ الآنَ.",
            "translation": "O, indi burur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْتِلْ",
        "translation": "bur!",
        "examples": [
          {
            "arabic": "اِفْتِلْ.",
            "translation": "bur!"
          }
        ]
      }
    }
  },
  {
    "id": 110,
    "arabic": "سَاهَمَ",
    "meaning": "iştirak etmək, pay almaq",
    "forms": {
      "past": {
        "arabic": "سَاهَمَ",
        "translation": "pay aldı",
        "examples": [
          {
            "arabic": "هُوَ سَاهَمَ أَمْسِ.",
            "translation": "O, dün iştirak etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَاهِمُ",
        "translation": "iştirak edir",
        "examples": [
          {
            "arabic": "هُوَ يُسَاهِمُ الآنَ.",
            "translation": "O, indi iştirak etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَاهِمْ",
        "translation": "iştirak et!",
        "examples": [
          {
            "arabic": "سَاهِمْ.",
            "translation": "iştirak etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 111,
    "arabic": "بَادَرَ",
    "meaning": "təşəbbüs göstərmək, önə keçmək",
    "forms": {
      "past": {
        "arabic": "بَادَرَ",
        "translation": "təşəbbüs etdi",
        "examples": [
          {
            "arabic": "هُوَ بَادَرَ أَمْسِ.",
            "translation": "O, dün təşəbbüs göstərməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُبَادِرُ",
        "translation": "təşəbbüs edir",
        "examples": [
          {
            "arabic": "هُوَ يُبَادِرُ الآنَ.",
            "translation": "O, indi təşəbbüs göstərməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "بَادِرْ",
        "translation": "tələs!",
        "examples": [
          {
            "arabic": "بَادِرْ.",
            "translation": "təşəbbüs göstərmək!"
          }
        ]
      }
    }
  },
  {
    "id": 112,
    "arabic": "تَأَخَّرَ",
    "meaning": "gecikmək",
    "forms": {
      "past": {
        "arabic": "تَأَخَّرَ",
        "translation": "gecikdi",
        "examples": [
          {
            "arabic": "هُوَ تَأَخَّرَ أَمْسِ.",
            "translation": "O, dün gecikdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَخَّرُ",
        "translation": "gecikir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَخَّرُ الآنَ.",
            "translation": "O, indi gecikir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَتَأَخَّرْ",
        "translation": "gecikmə!",
        "examples": [
          {
            "arabic": "لَا تَتَأَخَّرْ.",
            "translation": "gecik!"
          }
        ]
      }
    }
  },
  {
    "id": 113,
    "arabic": "تَقَدَّمَ",
    "meaning": "irəli getmək, tərəqqi etmək",
    "forms": {
      "past": {
        "arabic": "تَقَدَّمَ",
        "translation": "irəli getdi",
        "examples": [
          {
            "arabic": "هُوَ تَقَدَّمَ أَمْسِ.",
            "translation": "O, dün irəli getməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَقَدَّمُ",
        "translation": "irəli gedir",
        "examples": [
          {
            "arabic": "هُوَ يَتَقَدَّمُ الآنَ.",
            "translation": "O, indi irəli getməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَقَدَّمْ",
        "translation": "irəli get!",
        "examples": [
          {
            "arabic": "تَقَدَّمْ.",
            "translation": "irəli getmək!"
          }
        ]
      }
    }
  },
  {
    "id": 114,
    "arabic": "حَرَصَ",
    "meaning": "həris olmaq, can atmaq",
    "forms": {
      "past": {
        "arabic": "حَرَصَ",
        "translation": "can atdı",
        "examples": [
          {
            "arabic": "هُوَ حَرَصَ أَمْسِ.",
            "translation": "O, dün həris olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْرِصُ",
        "translation": "can atır",
        "examples": [
          {
            "arabic": "هُوَ يَحْرِصُ الآنَ.",
            "translation": "O, indi həris olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْرِصْ",
        "translation": "can at!",
        "examples": [
          {
            "arabic": "اِحْرِصْ.",
            "translation": "həris olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 115,
    "arabic": "اِهْتَمَّ",
    "meaning": "maraqlanmaq, diqqət yetirmək",
    "forms": {
      "past": {
        "arabic": "اِهْتَمَّ",
        "translation": "diqqət yetirdi",
        "examples": [
          {
            "arabic": "هُوَ اِهْتَمَّ أَمْسِ.",
            "translation": "O, dün maraqlanmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْتَمُّ",
        "translation": "diqqət yetirir",
        "examples": [
          {
            "arabic": "هُوَ يَهْتَمُّ الآنَ.",
            "translation": "O, indi maraqlanmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْتَمَّ",
        "translation": "diqqət yetir!",
        "examples": [
          {
            "arabic": "اِهْتَمَّ.",
            "translation": "maraqlanmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 116,
    "arabic": "تَأَدَّبَ",
    "meaning": "ədəb öyrənmək, ədəbli olmaq",
    "forms": {
      "past": {
        "arabic": "تَأَدَّبَ",
        "translation": "ədəbləndi",
        "examples": [
          {
            "arabic": "هُوَ تَأَدَّبَ أَمْسِ.",
            "translation": "O, dün ədəb öyrənməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَدَّبُ",
        "translation": "ədəblənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَدَّبُ الآنَ.",
            "translation": "O, indi ədəb öyrənməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَدَّبْ",
        "translation": "ədəbli ol!",
        "examples": [
          {
            "arabic": "تَأَدَّبْ.",
            "translation": "ədəb öyrənmək!"
          }
        ]
      }
    }
  },
  {
    "id": 117,
    "arabic": "شَجَّعَ",
    "meaning": "təşviq etmək, ruhlandırmaq",
    "forms": {
      "past": {
        "arabic": "شَجَّعَ",
        "translation": "təşviq etdi",
        "examples": [
          {
            "arabic": "هُوَ شَجَّعَ أَمْسِ.",
            "translation": "O, dün təşviq etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُشَجِّعُ",
        "translation": "təşviq edir",
        "examples": [
          {
            "arabic": "هُوَ يُشَجِّعُ الآنَ.",
            "translation": "O, indi təşviq etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "شَجِّعْ",
        "translation": "təşviq et!",
        "examples": [
          {
            "arabic": "شَجِّعْ.",
            "translation": "təşviq etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 118,
    "arabic": "حَثَّ",
    "meaning": "təşviq etmək, həvəsləndirmək",
    "forms": {
      "past": {
        "arabic": "حَثَّ",
        "translation": "təşviq etdi",
        "examples": [
          {
            "arabic": "هُوَ حَثَّ أَمْسِ.",
            "translation": "O, dün təşviq etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحُثُّ",
        "translation": "təşviq edir",
        "examples": [
          {
            "arabic": "هُوَ يَحُثُّ الآنَ.",
            "translation": "O, indi təşviq etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "حُثَّ",
        "translation": "təşviq et!",
        "examples": [
          {
            "arabic": "حُثَّ.",
            "translation": "təşviq etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 119,
    "arabic": "ذَبَحَ",
    "meaning": "kəsmək, qurban kəsmək",
    "forms": {
      "past": {
        "arabic": "ذَبَحَ",
        "translation": "kəsdi",
        "examples": [
          {
            "arabic": "هُوَ ذَبَحَ أَمْسِ.",
            "translation": "O, dün kəsməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَذْبَحُ",
        "translation": "kəsir",
        "examples": [
          {
            "arabic": "هُوَ يَذْبَحُ الآنَ.",
            "translation": "O, indi kəsməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِذْبَحْ",
        "translation": "kəs!",
        "examples": [
          {
            "arabic": "اِذْبَحْ.",
            "translation": "kəsmək!"
          }
        ]
      }
    }
  },
  {
    "id": 120,
    "arabic": "عَقَّ",
    "meaning": "valideynə asi olmaq (əks mənada)",
    "forms": {
      "past": {
        "arabic": "عَقَّ",
        "translation": "asi oldu",
        "examples": [
          {
            "arabic": "هُوَ عَقَّ أَمْسِ.",
            "translation": "O, dün valideynə asi olmaq (əks mənada)dı."
          }
        ]
      },
      "present": {
        "arabic": "يَعُقُّ",
        "translation": "asi olur",
        "examples": [
          {
            "arabic": "هُوَ يَعُقُّ الآنَ.",
            "translation": "O, indi valideynə asi olmaq (əks mənada)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَعُقَّ",
        "translation": "asi olma!",
        "examples": [
          {
            "arabic": "لَا تَعُقَّ.",
            "translation": "valideynə asi olmaq (əks mənada)!"
          }
        ]
      }
    }
  },
  {
    "id": 121,
    "arabic": "وَقَّرَ",
    "meaning": "ehtiram etmək, hörmət göstərmək",
    "forms": {
      "past": {
        "arabic": "وَقَّرَ",
        "translation": "hörmət etdi",
        "examples": [
          {
            "arabic": "هُوَ وَقَّرَ أَمْسِ.",
            "translation": "O, dün ehtiram etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُوَقِّرُ",
        "translation": "hörmət edir",
        "examples": [
          {
            "arabic": "هُوَ يُوَقِّرُ الآنَ.",
            "translation": "O, indi ehtiram etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "وَقِّرْ",
        "translation": "hörmət et!",
        "examples": [
          {
            "arabic": "وَقِّرْ.",
            "translation": "ehtiram etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 122,
    "arabic": "اِحْتَرَمَ",
    "meaning": "ehtiram etmək, sayğı göstərmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَرَمَ",
        "translation": "sayğı göstərdi",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَرَمَ أَمْسِ.",
            "translation": "O, dün ehtiram etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَرِمُ",
        "translation": "sayğı göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَرِمُ الآنَ.",
            "translation": "O, indi ehtiram etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَرِمْ",
        "translation": "hörmət et!",
        "examples": [
          {
            "arabic": "اِحْتَرِمْ.",
            "translation": "ehtiram etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 123,
    "arabic": "أَكْرَمَ",
    "meaning": "ehtiram etmək, ikram göstərmək",
    "forms": {
      "past": {
        "arabic": "أَكْرَمَ",
        "translation": "ikram etdi",
        "examples": [
          {
            "arabic": "هُوَ أَكْرَمَ أَمْسِ.",
            "translation": "O, dün ehtiram etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُكْرِمُ",
        "translation": "ikram edir",
        "examples": [
          {
            "arabic": "هُوَ يُكْرِمُ الآنَ.",
            "translation": "O, indi ehtiram etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَكْرِمْ",
        "translation": "ikram et!",
        "examples": [
          {
            "arabic": "أَكْرِمْ.",
            "translation": "ehtiram etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 124,
    "arabic": "عَجَنَ",
    "meaning": "yoğurmaq",
    "forms": {
      "past": {
        "arabic": "عَجَنَ",
        "translation": "yoğurdu",
        "examples": [
          {
            "arabic": "هُوَ عَجَنَ أَمْسِ.",
            "translation": "O, dünən yoğurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَعْجِنُ",
        "translation": "yoğurur",
        "examples": [
          {
            "arabic": "هُوَ يَعْجِنُ الآنَ.",
            "translation": "O, indi yoğurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْجِنْ",
        "translation": "yoğur!",
        "examples": [
          {
            "arabic": "اِعْجِنْ.",
            "translation": "yoğur!"
          }
        ]
      }
    }
  },
  {
    "id": 125,
    "arabic": "صَاحَبَ",
    "meaning": "yoldaş olmaq, dostluq etmək",
    "forms": {
      "past": {
        "arabic": "صَاحَبَ",
        "translation": "yoldaş oldu",
        "examples": [
          {
            "arabic": "هُوَ صَاحَبَ أَمْسِ.",
            "translation": "O, dün yoldaş olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُصَاحِبُ",
        "translation": "yoldaş olur",
        "examples": [
          {
            "arabic": "هُوَ يُصَاحِبُ الآنَ.",
            "translation": "O, indi yoldaş olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "صَاحِبْ",
        "translation": "yoldaş ol!",
        "examples": [
          {
            "arabic": "صَاحِبْ.",
            "translation": "yoldaş olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 126,
    "arabic": "قَطَنَ",
    "meaning": "məskunlaşmaq, yaşamaq",
    "forms": {
      "past": {
        "arabic": "قَطَنَ",
        "translation": "məskunlaşdı",
        "examples": [
          {
            "arabic": "هُوَ قَطَنَ أَمْسِ.",
            "translation": "O, dünən məskunlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْطُنُ",
        "translation": "məskunlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَقْطُنُ الآنَ.",
            "translation": "O, indi məskunlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْطُنْ",
        "translation": "məskunlaş!",
        "examples": [
          {
            "arabic": "اِقْطُنْ.",
            "translation": "məskunlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 127,
    "arabic": "تَفَرَّقَ",
    "meaning": "dağılmaq, ayrılmaq",
    "forms": {
      "past": {
        "arabic": "تَفَرَّقَ",
        "translation": "dağıldı",
        "examples": [
          {
            "arabic": "هُوَ تَفَرَّقَ أَمْسِ.",
            "translation": "O, dün dağılmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَرَّقُ",
        "translation": "dağılır",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَرَّقُ الآنَ.",
            "translation": "O, indi dağılmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَتَفَرَّقْ",
        "translation": "dağılma!",
        "examples": [
          {
            "arabic": "لَا تَتَفَرَّقْ.",
            "translation": "dağılmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 128,
    "arabic": "تَعَاوَنَ",
    "meaning": "əməkdaşlıq etmək, bir-birinə kömək etmək",
    "forms": {
      "past": {
        "arabic": "تَعَاوَنَ",
        "translation": "əməkdaşlıq etdi",
        "examples": [
          {
            "arabic": "هُوَ تَعَاوَنَ أَمْسِ.",
            "translation": "O, dün əməkdaşlıq etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَعَاوَنُ",
        "translation": "əməkdaşlıq edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَعَاوَنُ الآنَ.",
            "translation": "O, indi əməkdaşlıq etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَعَاوَنْ",
        "translation": "əməkdaşlıq et!",
        "examples": [
          {
            "arabic": "تَعَاوَنْ.",
            "translation": "əməkdaşlıq etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 129,
    "arabic": "اِفْتَرَقَ",
    "meaning": "ayrılmaq, ayrı düşmək",
    "forms": {
      "past": {
        "arabic": "اِفْتَرَقَ",
        "translation": "ayrıldı",
        "examples": [
          {
            "arabic": "هُوَ اِفْتَرَقَ أَمْسِ.",
            "translation": "O, dün ayrılmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْتَرِقُ",
        "translation": "ayrılır",
        "examples": [
          {
            "arabic": "هُوَ يَفْتَرِقُ الآنَ.",
            "translation": "O, indi ayrılmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَفْتَرِقْ",
        "translation": "ayrılma!",
        "examples": [
          {
            "arabic": "لَا تَفْتَرِقْ.",
            "translation": "ayrılmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 130,
    "arabic": "كَنَسَ",
    "meaning": "süpürmək",
    "forms": {
      "past": {
        "arabic": "كَنَسَ",
        "translation": "süpürdü",
        "examples": [
          {
            "arabic": "هُوَ كَنَسَ أَمْسِ.",
            "translation": "O, dünən süpürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَكْنُسُ",
        "translation": "süpürür",
        "examples": [
          {
            "arabic": "هُوَ يَكْنُسُ الآنَ.",
            "translation": "O, indi süpürür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُكْنُسْ",
        "translation": "süpür!",
        "examples": [
          {
            "arabic": "اُكْنُسْ.",
            "translation": "süpür!"
          }
        ]
      }
    }
  },
  {
    "id": 131,
    "arabic": "اِخْتَصَمَ",
    "meaning": "mübahisə etmək, çəkişmək",
    "forms": {
      "past": {
        "arabic": "اِخْتَصَمَ",
        "translation": "mübahisə etdi",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَصَمَ أَمْسِ.",
            "translation": "O, dün mübahisə etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَصِمُ",
        "translation": "mübahisə edir",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَصِمُ الآنَ.",
            "translation": "O, indi mübahisə etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَخْتَصِمْ",
        "translation": "mübahisə etmə!",
        "examples": [
          {
            "arabic": "لَا تَخْتَصِمْ.",
            "translation": "mübahisə etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 132,
    "arabic": "اِسْتَشَارَ",
    "meaning": "məsləhət almaq, məşvərət etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَشَارَ",
        "translation": "məsləhət aldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَشَارَ أَمْسِ.",
            "translation": "O, dün məsləhət almaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَشِيرُ",
        "translation": "məsləhət alır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَشِيرُ الآنَ.",
            "translation": "O, indi məsləhət almaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَشِرْ",
        "translation": "məsləhət al!",
        "examples": [
          {
            "arabic": "اِسْتَشِرْ.",
            "translation": "məsləhət almaq!"
          }
        ]
      }
    }
  },
  {
    "id": 133,
    "arabic": "أَشَارَ",
    "meaning": "işarə etmək, göstərmək",
    "forms": {
      "past": {
        "arabic": "أَشَارَ",
        "translation": "işarə etdi",
        "examples": [
          {
            "arabic": "هُوَ أَشَارَ أَمْسِ.",
            "translation": "O, dün işarə etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُشِيرُ",
        "translation": "işarə edir",
        "examples": [
          {
            "arabic": "هُوَ يُشِيرُ الآنَ.",
            "translation": "O, indi işarə etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَشِرْ",
        "translation": "işarə et!",
        "examples": [
          {
            "arabic": "أَشِرْ.",
            "translation": "işarə etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 134,
    "arabic": "غَرِقَ",
    "meaning": "batmaq, boğulmaq",
    "forms": {
      "past": {
        "arabic": "غَرِقَ",
        "translation": "batdı",
        "examples": [
          {
            "arabic": "هُوَ غَرِقَ أَمْسِ.",
            "translation": "O, dünən batdı."
          }
        ]
      },
      "present": {
        "arabic": "يَغْرَقُ",
        "translation": "batır",
        "examples": [
          {
            "arabic": "هُوَ يَغْرَقُ الآنَ.",
            "translation": "O, indi batır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْرَقْ",
        "translation": "bat!",
        "examples": [
          {
            "arabic": "اِغْرَقْ.",
            "translation": "bat!"
          }
        ]
      }
    }
  },
  {
    "id": 135,
    "arabic": "وَدَّعَ",
    "meaning": "vidalaşmaq, uğurlamaq",
    "forms": {
      "past": {
        "arabic": "وَدَّعَ",
        "translation": "vidalaşdı",
        "examples": [
          {
            "arabic": "هُوَ وَدَّعَ أَمْسِ.",
            "translation": "O, dün vidalaşmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوَدِّعُ",
        "translation": "vidalaşır",
        "examples": [
          {
            "arabic": "هُوَ يُوَدِّعُ الآنَ.",
            "translation": "O, indi vidalaşmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "وَدِّعْ",
        "translation": "vidalaş!",
        "examples": [
          {
            "arabic": "وَدِّعْ.",
            "translation": "vidalaşmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 136,
    "arabic": "اِسْتَأْذَنَ",
    "meaning": "icazə istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَأْذَنَ",
        "translation": "icazə istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَأْذَنَ أَمْسِ.",
            "translation": "O, dün icazə istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَأْذِنُ",
        "translation": "icazə istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَأْذِنُ الآنَ.",
            "translation": "O, indi icazə istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَأْذِنْ",
        "translation": "icazə istə!",
        "examples": [
          {
            "arabic": "اِسْتَأْذِنْ.",
            "translation": "icazə istə!"
          }
        ]
      }
    }
  },
  {
    "id": 137,
    "arabic": "سَلَّمَ",
    "meaning": "salam vermək, təslim etmək",
    "forms": {
      "past": {
        "arabic": "سَلَّمَ",
        "translation": "salam verdi",
        "examples": [
          {
            "arabic": "هُوَ سَلَّمَ أَمْسِ.",
            "translation": "O, dün salam verməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَلِّمُ",
        "translation": "salam verir",
        "examples": [
          {
            "arabic": "هُوَ يُسَلِّمُ الآنَ.",
            "translation": "O, indi salam verməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَلِّمْ",
        "translation": "salam ver!",
        "examples": [
          {
            "arabic": "سَلِّمْ.",
            "translation": "salam vermək!"
          }
        ]
      }
    }
  },
  {
    "id": 138,
    "arabic": "قَطَرَ",
    "meaning": "damcılamaq, damcılatmaq",
    "forms": {
      "past": {
        "arabic": "قَطَرَ",
        "translation": "damcıladı",
        "examples": [
          {
            "arabic": "هُوَ قَطَرَ أَمْسِ.",
            "translation": "O, dünən damcıladı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْطُرُ",
        "translation": "damcılayır",
        "examples": [
          {
            "arabic": "هُوَ يَقْطُرُ الآنَ.",
            "translation": "O, indi damcılayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُقْطُرْ",
        "translation": "damcılat!",
        "examples": [
          {
            "arabic": "اُقْطُرْ.",
            "translation": "damcılat!"
          }
        ]
      }
    }
  },
  {
    "id": 139,
    "arabic": "عَانَقَ",
    "meaning": "qucaqlaşmaq",
    "forms": {
      "past": {
        "arabic": "عَانَقَ",
        "translation": "qucaqlaşdı",
        "examples": [
          {
            "arabic": "هُوَ عَانَقَ أَمْسِ.",
            "translation": "O, dün qucaqlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعَانِقُ",
        "translation": "qucaqlaşır",
        "examples": [
          {
            "arabic": "هُوَ يُعَانِقُ الآنَ.",
            "translation": "O, indi qucaqlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "عَانِقْ",
        "translation": "qucaqlaş!",
        "examples": [
          {
            "arabic": "عَانِقْ.",
            "translation": "qucaqlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 140,
    "arabic": "اِسْتَضَافَ",
    "meaning": "qonaq etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَضَافَ",
        "translation": "qonaq etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَضَافَ أَمْسِ.",
            "translation": "O, dün qonaq etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَضِيفُ",
        "translation": "qonaq edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَضِيفُ الآنَ.",
            "translation": "O, indi qonaq etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَضِفْ",
        "translation": "qonaq et!",
        "examples": [
          {
            "arabic": "اِسْتَضِفْ.",
            "translation": "qonaq et!"
          }
        ]
      }
    }
  },
  {
    "id": 141,
    "arabic": "أَطْعَمَ",
    "meaning": "yedirtmək, yemək vermək",
    "forms": {
      "past": {
        "arabic": "أَطْعَمَ",
        "translation": "yedirtdi",
        "examples": [
          {
            "arabic": "هُوَ أَطْعَمَ أَمْسِ.",
            "translation": "O, dün yedirtməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُطْعِمُ",
        "translation": "yedirdir",
        "examples": [
          {
            "arabic": "هُوَ يُطْعِمُ الآنَ.",
            "translation": "O, indi yedirtməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَطْعِمْ",
        "translation": "yedirt!",
        "examples": [
          {
            "arabic": "أَطْعِمْ.",
            "translation": "yedirtmək!"
          }
        ]
      }
    }
  },
  {
    "id": 142,
    "arabic": "سَقَى",
    "meaning": "su vermək, içirtmək",
    "forms": {
      "past": {
        "arabic": "سَقَى",
        "translation": "su verdi",
        "examples": [
          {
            "arabic": "هُوَ سَقَى أَمْسِ.",
            "translation": "O, dün su verməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْقِي",
        "translation": "su verir",
        "examples": [
          {
            "arabic": "هُوَ يَسْقِي الآنَ.",
            "translation": "O, indi su verməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْقِ",
        "translation": "su ver!",
        "examples": [
          {
            "arabic": "اِسْقِ.",
            "translation": "su vermək!"
          }
        ]
      }
    }
  },
  {
    "id": 143,
    "arabic": "اِشْتَغَلَ",
    "meaning": "məşğul olmaq, işləmək",
    "forms": {
      "past": {
        "arabic": "اِشْتَغَلَ",
        "translation": "məşğul oldu",
        "examples": [
          {
            "arabic": "هُوَ اِشْتَغَلَ أَمْسِ.",
            "translation": "O, dün məşğul olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتَغِلُ",
        "translation": "məşğul olur",
        "examples": [
          {
            "arabic": "هُوَ يَشْتَغِلُ الآنَ.",
            "translation": "O, indi məşğul olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْتَغِلْ",
        "translation": "məşğul ol!",
        "examples": [
          {
            "arabic": "اِشْتَغِلْ.",
            "translation": "məşğul olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 144,
    "arabic": "اِسْتَمَرَّ فِي العِبَادَةِ",
    "meaning": "ibadətdə davamlı olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمَرَّ فِي العِبَادَةِ",
        "translation": "ibadətə davam etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمَرَّ فِي العِبَادَةِ أَمْسِ.",
            "translation": "O, dün ibadətdə davamlı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمِرُّ فِي العِبَادَةِ",
        "translation": "ibadətə davam edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمِرُّ فِي العِبَادَةِ الآنَ.",
            "translation": "O, indi ibadətdə davamlı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمِرَّ فِي العِبَادَةِ",
        "translation": "ibadətə davam et!",
        "examples": [
          {
            "arabic": "اِسْتَمِرَّ فِي العِبَادَةِ.",
            "translation": "ibadətdə davamlı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 145,
    "arabic": "سَلَخَ",
    "meaning": "dərisini soymaq",
    "forms": {
      "past": {
        "arabic": "سَلَخَ",
        "translation": "dərisini soydu",
        "examples": [
          {
            "arabic": "هُوَ سَلَخَ أَمْسِ.",
            "translation": "O, dünən dərisini soydu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْلَخُ",
        "translation": "dərisini soyur",
        "examples": [
          {
            "arabic": "هُوَ يَسْلَخُ الآنَ.",
            "translation": "O, indi dərisini soyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْلَخْ",
        "translation": "dərisini soy!",
        "examples": [
          {
            "arabic": "اِسْلَخْ.",
            "translation": "dərisini soy!"
          }
        ]
      }
    }
  },
  {
    "id": 146,
    "arabic": "تَرَكَ",
    "meaning": "tərk etmək, buraxmaq",
    "forms": {
      "past": {
        "arabic": "تَرَكَ",
        "translation": "tərk etdi",
        "examples": [
          {
            "arabic": "هُوَ تَرَكَ أَمْسِ.",
            "translation": "O, dün tərk etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتْرُكُ",
        "translation": "tərk edir",
        "examples": [
          {
            "arabic": "هُوَ يَتْرُكُ الآنَ.",
            "translation": "O, indi tərk etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُتْرُكْ",
        "translation": "tərk et!",
        "examples": [
          {
            "arabic": "اُتْرُكْ.",
            "translation": "tərk etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 147,
    "arabic": "صَاحَ",
    "meaning": "çığırmaq, səsləmək",
    "forms": {
      "past": {
        "arabic": "صَاحَ",
        "translation": "səslədi",
        "examples": [
          {
            "arabic": "هُوَ صَاحَ أَمْسِ.",
            "translation": "O, dün çığırmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَصِيحُ",
        "translation": "səsləyir",
        "examples": [
          {
            "arabic": "هُوَ يَصِيحُ الآنَ.",
            "translation": "O, indi çığırmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "صِحْ",
        "translation": "səslə!",
        "examples": [
          {
            "arabic": "صِحْ.",
            "translation": "çığırmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 148,
    "arabic": "هَمَسَ",
    "meaning": "pıçıldamaq, astaca danışmaq",
    "forms": {
      "past": {
        "arabic": "هَمَسَ",
        "translation": "pıçıldadı",
        "examples": [
          {
            "arabic": "هُوَ هَمَسَ أَمْسِ.",
            "translation": "O, dün pıçıldamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْمِسُ",
        "translation": "pıçıldayır",
        "examples": [
          {
            "arabic": "هُوَ يَهْمِسُ الآنَ.",
            "translation": "O, indi pıçıldamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْمِسْ",
        "translation": "pıçılda!",
        "examples": [
          {
            "arabic": "اِهْمِسْ.",
            "translation": "pıçıldamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 149,
    "arabic": "نَادَى",
    "meaning": "çağırmaq, səsləmək",
    "forms": {
      "past": {
        "arabic": "نَادَى",
        "translation": "çağırdı",
        "examples": [
          {
            "arabic": "هُوَ نَادَى أَمْسِ.",
            "translation": "O, dün çağırmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُنَادِي",
        "translation": "çağırır",
        "examples": [
          {
            "arabic": "هُوَ يُنَادِي الآنَ.",
            "translation": "O, indi çağırmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "نَادِ",
        "translation": "çağır!",
        "examples": [
          {
            "arabic": "نَادِ.",
            "translation": "çağırmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 150,
    "arabic": "رَدَّ",
    "meaning": "cavab vermək, geri qaytarmaq",
    "forms": {
      "past": {
        "arabic": "رَدَّ",
        "translation": "cavab verdi",
        "examples": [
          {
            "arabic": "هُوَ رَدَّ أَمْسِ.",
            "translation": "O, dünən cavab verdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرُدُّ",
        "translation": "cavab verir",
        "examples": [
          {
            "arabic": "هُوَ يَرُدُّ الآنَ.",
            "translation": "O, indi cavab verməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "رُدَّ",
        "translation": "cavab ver!",
        "examples": [
          {
            "arabic": "رُدَّ.",
            "translation": "cavab vermək!"
          }
        ]
      }
    }
  },
  {
    "id": 151,
    "arabic": "أَنْذَرَ",
    "meaning": "xəbərdarlıq etmək, qorxutmaq",
    "forms": {
      "past": {
        "arabic": "أَنْذَرَ",
        "translation": "xəbərdarlıq etdi",
        "examples": [
          {
            "arabic": "هُوَ أَنْذَرَ أَمْسِ.",
            "translation": "O, dün xəbərdarlıq etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُنْذِرُ",
        "translation": "xəbərdarlıq edir",
        "examples": [
          {
            "arabic": "هُوَ يُنْذِرُ الآنَ.",
            "translation": "O, indi xəbərdarlıq etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْذِرْ",
        "translation": "xəbərdarlıq et!",
        "examples": [
          {
            "arabic": "أَنْذِرْ.",
            "translation": "xəbərdarlıq etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 152,
    "arabic": "بَلَّغَ",
    "meaning": "çatdırmaq, təbliğ etmək",
    "forms": {
      "past": {
        "arabic": "بَلَّغَ",
        "translation": "çatdırdı",
        "examples": [
          {
            "arabic": "هُوَ بَلَّغَ أَمْسِ.",
            "translation": "O, dün çatdırmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبَلِّغُ",
        "translation": "çatdırır",
        "examples": [
          {
            "arabic": "هُوَ يُبَلِّغُ الآنَ.",
            "translation": "O, indi çatdırmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "بَلِّغْ",
        "translation": "çatdır!",
        "examples": [
          {
            "arabic": "بَلِّغْ.",
            "translation": "çatdırmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 153,
    "arabic": "تَدَاوَلَ",
    "meaning": "müzakirə etmək, danışmaq",
    "forms": {
      "past": {
        "arabic": "تَدَاوَلَ",
        "translation": "müzakirə etdi",
        "examples": [
          {
            "arabic": "هُوَ تَدَاوَلَ أَمْسِ.",
            "translation": "O, dün müzakirə etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَدَاوَلُ",
        "translation": "müzakirə edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَدَاوَلُ الآنَ.",
            "translation": "O, indi müzakirə etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَدَاوَلْ",
        "translation": "müzakirə et!",
        "examples": [
          {
            "arabic": "تَدَاوَلْ.",
            "translation": "müzakirə etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 154,
    "arabic": "اِسْتَدَلَّ",
    "meaning": "dəlil gətirmək, sübut etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَدَلَّ",
        "translation": "dəlil gətirdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَدَلَّ أَمْسِ.",
            "translation": "O, dün dəlil gətirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَدِلُّ",
        "translation": "dəlil gətirir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَدِلُّ الآنَ.",
            "translation": "O, indi dəlil gətirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَدِلَّ",
        "translation": "dəlil gətir!",
        "examples": [
          {
            "arabic": "اِسْتَدِلَّ.",
            "translation": "dəlil gətirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 155,
    "arabic": "خَبَطَ",
    "meaning": "vurmaq, qarışdırmaq",
    "forms": {
      "past": {
        "arabic": "خَبَطَ",
        "translation": "vurdu",
        "examples": [
          {
            "arabic": "هُوَ خَبَطَ أَمْسِ.",
            "translation": "O, dünən vurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَخْبِطُ",
        "translation": "vurur",
        "examples": [
          {
            "arabic": "هُوَ يَخْبِطُ الآنَ.",
            "translation": "O, indi vurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْبِطْ",
        "translation": "vur!",
        "examples": [
          {
            "arabic": "اِخْبِطْ.",
            "translation": "vur!"
          }
        ]
      }
    }
  },
  {
    "id": 156,
    "arabic": "تَسَاءَلَ",
    "meaning": "soruşmaq, sual vermək",
    "forms": {
      "past": {
        "arabic": "تَسَاءَلَ",
        "translation": "soruşdu",
        "examples": [
          {
            "arabic": "هُوَ تَسَاءَلَ أَمْسِ.",
            "translation": "O, dün soruşmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَسَاءَلُ",
        "translation": "soruşur",
        "examples": [
          {
            "arabic": "هُوَ يَتَسَاءَلُ الآنَ.",
            "translation": "O, indi soruşmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَسَاءَلْ",
        "translation": "soruş!",
        "examples": [
          {
            "arabic": "تَسَاءَلْ.",
            "translation": "soruşmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 157,
    "arabic": "اِسْتَفْسَرَ",
    "meaning": "izah istəmək, aydınlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَفْسَرَ",
        "translation": "izah istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَفْسَرَ أَمْسِ.",
            "translation": "O, dün izah istəməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَفْسِرُ",
        "translation": "izah istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَفْسِرُ الآنَ.",
            "translation": "O, indi izah istəməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَفْسِرْ",
        "translation": "izah istə!",
        "examples": [
          {
            "arabic": "اِسْتَفْسِرْ.",
            "translation": "izah istəmək!"
          }
        ]
      }
    }
  },
  {
    "id": 158,
    "arabic": "رَكَنَ",
    "meaning": "söykənmək, kənara çəkilmək",
    "forms": {
      "past": {
        "arabic": "رَكَنَ",
        "translation": "söykəndi",
        "examples": [
          {
            "arabic": "هُوَ رَكَنَ أَمْسِ.",
            "translation": "O, dünən söykəndi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْكَنُ",
        "translation": "söykənir",
        "examples": [
          {
            "arabic": "هُوَ يَرْكَنُ الآنَ.",
            "translation": "O, indi söykənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْكَنْ",
        "translation": "söykən!",
        "examples": [
          {
            "arabic": "اِرْكَنْ.",
            "translation": "söykən!"
          }
        ]
      }
    }
  },
  {
    "id": 159,
    "arabic": "جَزَعَ",
    "meaning": "sarsılmaq, təşvişə düşmək",
    "forms": {
      "past": {
        "arabic": "جَزَعَ",
        "translation": "sarsıldı",
        "examples": [
          {
            "arabic": "هُوَ جَزَعَ أَمْسِ.",
            "translation": "O, dünən sarsıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْزَعُ",
        "translation": "sarsılır",
        "examples": [
          {
            "arabic": "هُوَ يَجْزَعُ الآنَ.",
            "translation": "O, indi sarsılır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْزَعْ",
        "translation": "sarsıl!",
        "examples": [
          {
            "arabic": "اِجْزَعْ.",
            "translation": "sarsıl!"
          }
        ]
      }
    }
  },
  {
    "id": 160,
    "arabic": "كَفَرَ",
    "meaning": "inkar etmək, küfr etmək",
    "forms": {
      "past": {
        "arabic": "كَفَرَ",
        "translation": "inkar etdi",
        "examples": [
          {
            "arabic": "هُوَ كَفَرَ أَمْسِ.",
            "translation": "O, dün inkar etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْفُرُ",
        "translation": "inkar edir",
        "examples": [
          {
            "arabic": "هُوَ يَكْفُرُ الآنَ.",
            "translation": "O, indi inkar etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَكْفُرْ",
        "translation": "inkar etmə!",
        "examples": [
          {
            "arabic": "لَا تَكْفُرْ.",
            "translation": "inkar etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 161,
    "arabic": "آمَنَ",
    "meaning": "iman gətirmək",
    "forms": {
      "past": {
        "arabic": "آمَنَ",
        "translation": "iman gətirdi",
        "examples": [
          {
            "arabic": "هُوَ آمَنَ أَمْسِ.",
            "translation": "O, dün iman gətirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤْمِنُ",
        "translation": "iman gətirir",
        "examples": [
          {
            "arabic": "هُوَ يُؤْمِنُ الآنَ.",
            "translation": "O, indi iman gətirir."
          }
        ]
      },
      "imperative": {
        "arabic": "آمِنْ",
        "translation": "iman gətir!",
        "examples": [
          {
            "arabic": "آمِنْ.",
            "translation": "iman gətir!"
          }
        ]
      }
    }
  },
  {
    "id": 162,
    "arabic": "أَشْرَكَ",
    "meaning": "şirk qoşmaq",
    "forms": {
      "past": {
        "arabic": "أَشْرَكَ",
        "translation": "şirk qoşdu",
        "examples": [
          {
            "arabic": "هُوَ أَشْرَكَ أَمْسِ.",
            "translation": "O, dün şirk qoşdu."
          }
        ]
      },
      "present": {
        "arabic": "يُشْرِكُ",
        "translation": "şirk qoşur",
        "examples": [
          {
            "arabic": "هُوَ يُشْرِكُ الآنَ.",
            "translation": "O, indi şirk qoşur."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تُشْرِكْ",
        "translation": "şirk qoşma!",
        "examples": [
          {
            "arabic": "لَا تُشْرِكْ.",
            "translation": "şirk qoş!"
          }
        ]
      }
    }
  },
  {
    "id": 163,
    "arabic": "تَوَحَّدَ",
    "meaning": "təvhid etmək, birliyini tanımaq",
    "forms": {
      "past": {
        "arabic": "تَوَحَّدَ",
        "translation": "təvhid etdi",
        "examples": [
          {
            "arabic": "هُوَ تَوَحَّدَ أَمْسِ.",
            "translation": "O, dün təvhid etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَحَّدُ",
        "translation": "təvhid edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَحَّدُ الآنَ.",
            "translation": "O, indi təvhid etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَحَّدْ",
        "translation": "təvhid et!",
        "examples": [
          {
            "arabic": "تَوَحَّدْ.",
            "translation": "təvhid etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 164,
    "arabic": "اِخْتَلَفَ",
    "meaning": "ixtilaf etmək, fərqli olmaq",
    "forms": {
      "past": {
        "arabic": "اِخْتَلَفَ",
        "translation": "ixtilaf etdi",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَلَفَ أَمْسِ.",
            "translation": "O, dün ixtilaf etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَلِفُ",
        "translation": "ixtilaf edir",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَلِفُ الآنَ.",
            "translation": "O, indi ixtilaf etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَخْتَلِفْ",
        "translation": "ixtilaf etmə!",
        "examples": [
          {
            "arabic": "لَا تَخْتَلِفْ.",
            "translation": "ixtilaf etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 165,
    "arabic": "اِتَّفَقَ",
    "meaning": "razılaşmaq, ittifaq etmək",
    "forms": {
      "past": {
        "arabic": "اِتَّفَقَ",
        "translation": "razılaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِتَّفَقَ أَمْسِ.",
            "translation": "O, dün razılaşmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّفِقُ",
        "translation": "razılaşır",
        "examples": [
          {
            "arabic": "هُوَ يَتَّفِقُ الآنَ.",
            "translation": "O, indi razılaşmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّفِقْ",
        "translation": "razılaş!",
        "examples": [
          {
            "arabic": "اِتَّفِقْ.",
            "translation": "razılaşmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 166,
    "arabic": "هَجَرَ",
    "meaning": "tərk etmək, uzaqlaşmaq",
    "forms": {
      "past": {
        "arabic": "هَجَرَ",
        "translation": "tərk etdi",
        "examples": [
          {
            "arabic": "هُوَ هَجَرَ أَمْسِ.",
            "translation": "O, dünən tərk etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْجُرُ",
        "translation": "tərk edir",
        "examples": [
          {
            "arabic": "هُوَ يَهْجُرُ الآنَ.",
            "translation": "O, indi tərk edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُهْجُرْ",
        "translation": "tərk et!",
        "examples": [
          {
            "arabic": "اُهْجُرْ.",
            "translation": "tərk et!"
          }
        ]
      }
    }
  },
  {
    "id": 167,
    "arabic": "ثَبَّتَ",
    "meaning": "möhkəmləndirmək, sabitləşdirmək",
    "forms": {
      "past": {
        "arabic": "ثَبَّتَ",
        "translation": "möhkəmləndirdi",
        "examples": [
          {
            "arabic": "هُوَ ثَبَّتَ أَمْسِ.",
            "translation": "O, dün möhkəmləndirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُثَبِّتُ",
        "translation": "möhkəmləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُثَبِّتُ الآنَ.",
            "translation": "O, indi möhkəmləndirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "ثَبِّتْ",
        "translation": "möhkəmləndir!",
        "examples": [
          {
            "arabic": "ثَبِّتْ.",
            "translation": "möhkəmləndirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 168,
    "arabic": "اِهْتَدَى",
    "meaning": "hidayət olmaq, doğru yolu tapmaq",
    "forms": {
      "past": {
        "arabic": "اِهْتَدَى",
        "translation": "hidayət oldu",
        "examples": [
          {
            "arabic": "هُوَ اِهْتَدَى أَمْسِ.",
            "translation": "O, dün hidayət olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْتَدِي",
        "translation": "hidayət olur",
        "examples": [
          {
            "arabic": "هُوَ يَهْتَدِي الآنَ.",
            "translation": "O, indi hidayət olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْتَدِ",
        "translation": "hidayət ol!",
        "examples": [
          {
            "arabic": "اِهْتَدِ.",
            "translation": "hidayət olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 169,
    "arabic": "ضَلَّ",
    "meaning": "zəlalətə düşmək, yoldan çıxmaq",
    "forms": {
      "past": {
        "arabic": "ضَلَّ",
        "translation": "zəlalətə düşdü",
        "examples": [
          {
            "arabic": "هُوَ ضَلَّ أَمْسِ.",
            "translation": "O, dün zəlalətə düşməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَضِلُّ",
        "translation": "zəlalətə düşür",
        "examples": [
          {
            "arabic": "هُوَ يَضِلُّ الآنَ.",
            "translation": "O, indi zəlalətə düşməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَضِلَّ",
        "translation": "zəlalətə düşmə!",
        "examples": [
          {
            "arabic": "لَا تَضِلَّ.",
            "translation": "zəlalətə düşmək!"
          }
        ]
      }
    }
  },
  {
    "id": 170,
    "arabic": "غَفَرَ",
    "meaning": "bağışlamaq",
    "forms": {
      "past": {
        "arabic": "غَفَرَ",
        "translation": "bağışladı",
        "examples": [
          {
            "arabic": "هُوَ غَفَرَ أَمْسِ.",
            "translation": "O, dün bağışladı."
          }
        ]
      },
      "present": {
        "arabic": "يَغْفِرُ",
        "translation": "bağışlayır",
        "examples": [
          {
            "arabic": "هُوَ يَغْفِرُ الآنَ.",
            "translation": "O, indi bağışlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْفِرْ",
        "translation": "bağışla!",
        "examples": [
          {
            "arabic": "اِغْفِرْ.",
            "translation": "bağışla!"
          }
        ]
      }
    }
  },
  {
    "id": 171,
    "arabic": "عَفَا",
    "meaning": "əfv etmək",
    "forms": {
      "past": {
        "arabic": "عَفَا",
        "translation": "əfv etdi",
        "examples": [
          {
            "arabic": "هُوَ عَفَا أَمْسِ.",
            "translation": "O, dün əfv etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْفُو",
        "translation": "əfv edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْفُو الآنَ.",
            "translation": "O, indi əfv etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْفُ",
        "translation": "əfv et!",
        "examples": [
          {
            "arabic": "اِعْفُ.",
            "translation": "əfv et!"
          }
        ]
      }
    }
  },
  {
    "id": 172,
    "arabic": "صَفَحَ",
    "meaning": "üz döndərmək, bağışlamaq",
    "forms": {
      "past": {
        "arabic": "صَفَحَ",
        "translation": "bağışladı",
        "examples": [
          {
            "arabic": "هُوَ صَفَحَ أَمْسِ.",
            "translation": "O, dün üz döndərməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصْفَحُ",
        "translation": "bağışlayır",
        "examples": [
          {
            "arabic": "هُوَ يَصْفَحُ الآنَ.",
            "translation": "O, indi üz döndərməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْفَحْ",
        "translation": "bağışla!",
        "examples": [
          {
            "arabic": "اِصْفَحْ.",
            "translation": "üz döndərmək!"
          }
        ]
      }
    }
  },
  {
    "id": 173,
    "arabic": "اِعْتَذَرَ",
    "meaning": "üzr istəmək",
    "forms": {
      "past": {
        "arabic": "اِعْتَذَرَ",
        "translation": "üzr istədi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَذَرَ أَمْسِ.",
            "translation": "O, dün üzr istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَذِرُ",
        "translation": "üzr istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَذِرُ الآنَ.",
            "translation": "O, indi üzr istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَذِرْ",
        "translation": "üzr istə!",
        "examples": [
          {
            "arabic": "اِعْتَذِرْ.",
            "translation": "üzr istə!"
          }
        ]
      }
    }
  },
  {
    "id": 174,
    "arabic": "دَفَنَ",
    "meaning": "dəfn etmək",
    "forms": {
      "past": {
        "arabic": "دَفَنَ",
        "translation": "dəfn etdi",
        "examples": [
          {
            "arabic": "هُوَ دَفَنَ أَمْسِ.",
            "translation": "O, dünən dəfn etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْفِنُ",
        "translation": "dəfn edir",
        "examples": [
          {
            "arabic": "هُوَ يَدْفِنُ الآنَ.",
            "translation": "O, indi dəfn edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدْفِنْ",
        "translation": "dəfn et!",
        "examples": [
          {
            "arabic": "اِدْفِنْ.",
            "translation": "dəfn et!"
          }
        ]
      }
    }
  },
  {
    "id": 175,
    "arabic": "عَزَّى",
    "meaning": "başsağlığı vermək",
    "forms": {
      "past": {
        "arabic": "عَزَّى",
        "translation": "başsağlığı verdi",
        "examples": [
          {
            "arabic": "هُوَ عَزَّى أَمْسِ.",
            "translation": "O, dün başsağlığı verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعَزِّي",
        "translation": "başsağlığı verir",
        "examples": [
          {
            "arabic": "هُوَ يُعَزِّي الآنَ.",
            "translation": "O, indi başsağlığı verır."
          }
        ]
      },
      "imperative": {
        "arabic": "عَزِّ",
        "translation": "başsağlığı ver!",
        "examples": [
          {
            "arabic": "عَزِّ.",
            "translation": "başsağlığı ver!"
          }
        ]
      }
    }
  },
  {
    "id": 176,
    "arabic": "عَادَ",
    "meaning": "xəstəni ziyarət etmək",
    "forms": {
      "past": {
        "arabic": "عَادَ",
        "translation": "ziyarət etdi",
        "examples": [
          {
            "arabic": "هُوَ عَادَ أَمْسِ.",
            "translation": "O, dün xəstəni ziyarət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعُودُ",
        "translation": "ziyarət edir",
        "examples": [
          {
            "arabic": "هُوَ يَعُودُ الآنَ.",
            "translation": "O, indi xəstəni ziyarət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "عُدْ",
        "translation": "ziyarət et!",
        "examples": [
          {
            "arabic": "عُدْ.",
            "translation": "xəstəni ziyarət et!"
          }
        ]
      }
    }
  },
  {
    "id": 177,
    "arabic": "عَمَّرَ",
    "meaning": "tikmək, abadlaşdırmaq, uzun ömür yaşamaq",
    "forms": {
      "past": {
        "arabic": "عَمَّرَ",
        "translation": "tikdi",
        "examples": [
          {
            "arabic": "هُوَ عَمَّرَ أَمْسِ.",
            "translation": "O, dün tikməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَمِّرُ",
        "translation": "tikinti aparır, abadlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُعَمِّرُ الآنَ.",
            "translation": "O, indi tikinti aparır."
          }
        ]
      },
      "imperative": {
        "arabic": "عَمِّرْ",
        "translation": "tik, abadlaşdır!",
        "examples": [
          {
            "arabic": "عَمِّرْ.",
            "translation": "tikmək!"
          }
        ]
      }
    }
  },
  {
    "id": 178,
    "arabic": "هَدَمَ",
    "meaning": "uçurmaq, sökmək",
    "forms": {
      "past": {
        "arabic": "هَدَمَ",
        "translation": "uçurdu",
        "examples": [
          {
            "arabic": "هُوَ هَدَمَ أَمْسِ.",
            "translation": "O, dün uçurmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْدِمُ",
        "translation": "uçurur",
        "examples": [
          {
            "arabic": "هُوَ يَهْدِمُ الآنَ.",
            "translation": "O, indi uçurmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْدِمْ",
        "translation": "uçur!",
        "examples": [
          {
            "arabic": "اِهْدِمْ.",
            "translation": "uçurmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 179,
    "arabic": "بَنَى",
    "meaning": "tikmək, qurmaq",
    "forms": {
      "past": {
        "arabic": "بَنَى",
        "translation": "tikdi",
        "examples": [
          {
            "arabic": "هُوَ بَنَى أَمْسِ.",
            "translation": "O, dün tikməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَبْنِي",
        "translation": "tikinti aparır",
        "examples": [
          {
            "arabic": "هُوَ يَبْنِي الآنَ.",
            "translation": "O, indi tikinti aparır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْنِ",
        "translation": "tik!",
        "examples": [
          {
            "arabic": "اِبْنِ.",
            "translation": "tikmək!"
          }
        ]
      }
    }
  },
  {
    "id": 180,
    "arabic": "نَقَضَ",
    "meaning": "pozmaq, sökmək",
    "forms": {
      "past": {
        "arabic": "نَقَضَ",
        "translation": "pozdu",
        "examples": [
          {
            "arabic": "هُوَ نَقَضَ أَمْسِ.",
            "translation": "O, dün pozmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقُضُ",
        "translation": "pozur",
        "examples": [
          {
            "arabic": "هُوَ يَنْقُضُ الآنَ.",
            "translation": "O, indi pozmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَنْقُضْ",
        "translation": "pozma!",
        "examples": [
          {
            "arabic": "لَا تَنْقُضْ.",
            "translation": "pozmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 181,
    "arabic": "أَخْلَفَ",
    "meaning": "vədinə xilaf çıxmaq, sözünü tutmamaq",
    "forms": {
      "past": {
        "arabic": "أَخْلَفَ",
        "translation": "xilaf çıxdı",
        "examples": [
          {
            "arabic": "هُوَ أَخْلَفَ أَمْسِ.",
            "translation": "O, dün vədinə xilaf çıxmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُخْلِفُ",
        "translation": "xilaf çıxır",
        "examples": [
          {
            "arabic": "هُوَ يُخْلِفُ الآنَ.",
            "translation": "O, indi vədinə xilaf çıxmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تُخْلِفْ",
        "translation": "xilaf çıxma!",
        "examples": [
          {
            "arabic": "لَا تُخْلِفْ.",
            "translation": "vədinə xilaf çıxmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 182,
    "arabic": "اِسْتَقْرَضَ",
    "meaning": "borc almaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقْرَضَ",
        "translation": "borc aldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقْرَضَ أَمْسِ.",
            "translation": "O, dün borc aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقْرِضُ",
        "translation": "borc alır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقْرِضُ الآنَ.",
            "translation": "O, indi borc alır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقْرِضْ",
        "translation": "borc al!",
        "examples": [
          {
            "arabic": "اِسْتَقْرِضْ.",
            "translation": "borc al!"
          }
        ]
      }
    }
  },
  {
    "id": 183,
    "arabic": "أَقْرَضَ",
    "meaning": "borc vermək",
    "forms": {
      "past": {
        "arabic": "أَقْرَضَ",
        "translation": "borc verdi",
        "examples": [
          {
            "arabic": "هُوَ أَقْرَضَ أَمْسِ.",
            "translation": "O, dün borc verdu."
          }
        ]
      },
      "present": {
        "arabic": "يُقْرِضُ",
        "translation": "borc verir",
        "examples": [
          {
            "arabic": "هُوَ يُقْرِضُ الآنَ.",
            "translation": "O, indi borc verur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَقْرِضْ",
        "translation": "borc ver!",
        "examples": [
          {
            "arabic": "أَقْرِضْ.",
            "translation": "borc ver!"
          }
        ]
      }
    }
  },
  {
    "id": 184,
    "arabic": "وَفَّى",
    "meaning": "ödəmək, tam yerinə yetirmək",
    "forms": {
      "past": {
        "arabic": "وَفَّى",
        "translation": "ödədi",
        "examples": [
          {
            "arabic": "هُوَ وَفَّى أَمْسِ.",
            "translation": "O, dün ödəməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُوَفِّي",
        "translation": "ödəyir",
        "examples": [
          {
            "arabic": "هُوَ يُوَفِّي الآنَ.",
            "translation": "O, indi ödəməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "وَفِّ",
        "translation": "ödə!",
        "examples": [
          {
            "arabic": "وَفِّ.",
            "translation": "ödəmək!"
          }
        ]
      }
    }
  },
  {
    "id": 185,
    "arabic": "اِتَّجَرَ",
    "meaning": "ticarət etmək",
    "forms": {
      "past": {
        "arabic": "اِتَّجَرَ",
        "translation": "ticarət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِتَّجَرَ أَمْسِ.",
            "translation": "O, dün ticarət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّجِرُ",
        "translation": "ticarət edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَّجِرُ الآنَ.",
            "translation": "O, indi ticarət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّجِرْ",
        "translation": "ticarət et!",
        "examples": [
          {
            "arabic": "اِتَّجِرْ.",
            "translation": "ticarət et!"
          }
        ]
      }
    }
  },
  {
    "id": 186,
    "arabic": "غَشَّ",
    "meaning": "aldatmaq, fırıldaq etmək",
    "forms": {
      "past": {
        "arabic": "غَشَّ",
        "translation": "aldatdı",
        "examples": [
          {
            "arabic": "هُوَ غَشَّ أَمْسِ.",
            "translation": "O, dün aldatmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَغُشُّ",
        "translation": "aldadır",
        "examples": [
          {
            "arabic": "هُوَ يَغُشُّ الآنَ.",
            "translation": "O, indi aldatmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَغُشَّ",
        "translation": "aldatma!",
        "examples": [
          {
            "arabic": "لَا تَغُشَّ.",
            "translation": "aldatmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 187,
    "arabic": "وَكَّلَ",
    "meaning": "vəkil etmək, tapşırmaq",
    "forms": {
      "past": {
        "arabic": "وَكَّلَ",
        "translation": "vəkil etdi",
        "examples": [
          {
            "arabic": "هُوَ وَكَّلَ أَمْسِ.",
            "translation": "O, dün vəkil etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُوَكِّلُ",
        "translation": "vəkil edir",
        "examples": [
          {
            "arabic": "هُوَ يُوَكِّلُ الآنَ.",
            "translation": "O, indi vəkil etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "وَكِّلْ",
        "translation": "vəkil et!",
        "examples": [
          {
            "arabic": "وَكِّلْ.",
            "translation": "vəkil etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 188,
    "arabic": "تَوَكَّلَ عَلَى اللَّهِ",
    "meaning": "Allaha təvəkkül etmək",
    "forms": {
      "past": {
        "arabic": "تَوَكَّلَ عَلَى اللَّهِ",
        "translation": "Allaha təvəkkül etdi",
        "examples": [
          {
            "arabic": "هُوَ تَوَكَّلَ عَلَى اللَّهِ أَمْسِ.",
            "translation": "O, dün Allaha təvəkkül etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَكَّلُ عَلَى اللَّهِ",
        "translation": "Allaha təvəkkül edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَكَّلُ عَلَى اللَّهِ الآنَ.",
            "translation": "O, indi Allaha təvəkkül etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَكَّلْ عَلَى اللَّهِ",
        "translation": "Allaha təvəkkül et!",
        "examples": [
          {
            "arabic": "تَوَكَّلْ عَلَى اللَّهِ.",
            "translation": "Allaha təvəkkül et!"
          }
        ]
      }
    }
  },
  {
    "id": 189,
    "arabic": "اِسْتَأْجَرَ",
    "meaning": "kirayə götürmək, işə almaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَأْجَرَ",
        "translation": "kirayə götürdü",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَأْجَرَ أَمْسِ.",
            "translation": "O, dün kirayə götürməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَأْجِرُ",
        "translation": "kirayə götürür",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَأْجِرُ الآنَ.",
            "translation": "O, indi kirayə götürməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَأْجِرْ",
        "translation": "kirayə götür!",
        "examples": [
          {
            "arabic": "اِسْتَأْجِرْ.",
            "translation": "kirayə götürmək!"
          }
        ]
      }
    }
  },
  {
    "id": 190,
    "arabic": "أَجَّرَ",
    "meaning": "kirayə vermək",
    "forms": {
      "past": {
        "arabic": "أَجَّرَ",
        "translation": "kirayə verdi",
        "examples": [
          {
            "arabic": "هُوَ أَجَّرَ أَمْسِ.",
            "translation": "O, dün kirayə verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَجِّرُ",
        "translation": "kirayə verir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَجِّرُ الآنَ.",
            "translation": "O, indi kirayə verir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَجِّرْ",
        "translation": "kirayə ver!",
        "examples": [
          {
            "arabic": "أَجِّرْ.",
            "translation": "kirayə ver!"
          }
        ]
      }
    }
  },
  {
    "id": 191,
    "arabic": "اِسْتَثْمَرَ",
    "meaning": "sərmayə qoymaq, istifadə etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَثْمَرَ",
        "translation": "sərmayə qoydu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَثْمَرَ أَمْسِ.",
            "translation": "O, dün sərmayə qoymaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَثْمِرُ",
        "translation": "sərmayə qoyur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَثْمِرُ الآنَ.",
            "translation": "O, indi sərmayə qoymaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَثْمِرْ",
        "translation": "sərmayə qoy!",
        "examples": [
          {
            "arabic": "اِسْتَثْمِرْ.",
            "translation": "sərmayə qoymaq!"
          }
        ]
      }
    }
  },
  {
    "id": 192,
    "arabic": "اِدَّخَرَ",
    "meaning": "yığmaq, qənaət etmək",
    "forms": {
      "past": {
        "arabic": "اِدَّخَرَ",
        "translation": "yığdı",
        "examples": [
          {
            "arabic": "هُوَ اِدَّخَرَ أَمْسِ.",
            "translation": "O, dün yığmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَدَّخِرُ",
        "translation": "yığır",
        "examples": [
          {
            "arabic": "هُوَ يَدَّخِرُ الآنَ.",
            "translation": "O, indi yığmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدَّخِرْ",
        "translation": "yığ!",
        "examples": [
          {
            "arabic": "اِدَّخِرْ.",
            "translation": "yığmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 193,
    "arabic": "اِسْتَغْلَى",
    "meaning": "bahalı saymaq, baha qiymətləndirmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَغْلَى",
        "translation": "bahalı saydı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَغْلَى أَمْسِ.",
            "translation": "O, dün bahalı saymaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَغْلِي",
        "translation": "bahalı sayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَغْلِي الآنَ.",
            "translation": "O, indi bahalı saymaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَسْتَغْلِ",
        "translation": "bahalı sayma!",
        "examples": [
          {
            "arabic": "لَا تَسْتَغْلِ.",
            "translation": "bahalı saymaq!"
          }
        ]
      }
    }
  },
  {
    "id": 194,
    "arabic": "حَرَثَ",
    "meaning": "şumlamaq",
    "forms": {
      "past": {
        "arabic": "حَرَثَ",
        "translation": "şumladı",
        "examples": [
          {
            "arabic": "هُوَ حَرَثَ أَمْسِ.",
            "translation": "O, dünən şumladı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْرُثُ",
        "translation": "şumlayır",
        "examples": [
          {
            "arabic": "هُوَ يَحْرُثُ الآنَ.",
            "translation": "O, indi şumlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْرُثْ",
        "translation": "şumla!",
        "examples": [
          {
            "arabic": "اُحْرُثْ.",
            "translation": "şumla!"
          }
        ]
      }
    }
  },
  {
    "id": 195,
    "arabic": "اِسْتَحْيَا",
    "meaning": "utanmaq, həya etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَحْيَا",
        "translation": "utandı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَحْيَا أَمْسِ.",
            "translation": "O, dün utanmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَحْيِي",
        "translation": "utanır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَحْيِي الآنَ.",
            "translation": "O, indi utanmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَحْيِ",
        "translation": "utan!",
        "examples": [
          {
            "arabic": "اِسْتَحْيِ.",
            "translation": "utanmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 196,
    "arabic": "اِحْتَشَمَ",
    "meaning": "həyalı olmaq, örtünmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَشَمَ",
        "translation": "həyalı oldu",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَشَمَ أَمْسِ.",
            "translation": "O, dün həyalı olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَشِمُ",
        "translation": "həyalı olur",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَشِمُ الآنَ.",
            "translation": "O, indi həyalı olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَشِمْ",
        "translation": "həyalı ol!",
        "examples": [
          {
            "arabic": "اِحْتَشِمْ.",
            "translation": "həyalı olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 197,
    "arabic": "اِتَّقَى",
    "meaning": "təqvalı olmaq, qorunmaq",
    "forms": {
      "past": {
        "arabic": "اِتَّقَى",
        "translation": "təqvalı oldu",
        "examples": [
          {
            "arabic": "هُوَ اِتَّقَى أَمْسِ.",
            "translation": "O, dün təqvalı olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّقِي",
        "translation": "təqvalı olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَّقِي الآنَ.",
            "translation": "O, indi təqvalı olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّقِ",
        "translation": "təqvalı ol!",
        "examples": [
          {
            "arabic": "اِتَّقِ.",
            "translation": "təqvalı olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 198,
    "arabic": "اِسْتَخَارَ",
    "meaning": "xeyir diləmək (istixarə etmək)",
    "forms": {
      "past": {
        "arabic": "اِسْتَخَارَ",
        "translation": "istixarə etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَخَارَ أَمْسِ.",
            "translation": "O, dün xeyir diləmək (istixarə etmək)di."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَخِيرُ",
        "translation": "istixarə edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَخِيرُ الآنَ.",
            "translation": "O, indi xeyir diləmək (istixarə etmək)ir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَخِرْ",
        "translation": "istixarə et!",
        "examples": [
          {
            "arabic": "اِسْتَخِرْ.",
            "translation": "xeyir diləmək (istixarə etmək)!"
          }
        ]
      }
    }
  },
  {
    "id": 199,
    "arabic": "اِسْتَقَامَ عَلَى الحَقِّ",
    "meaning": "haqq üzərində sabit qalmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَامَ عَلَى الحَقِّ",
        "translation": "haqqda sabit qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَامَ عَلَى الحَقِّ أَمْسِ.",
            "translation": "O, dün haqq üzərində sabit qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِيمُ عَلَى الحَقِّ",
        "translation": "haqqda sabit qalır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِيمُ عَلَى الحَقِّ الآنَ.",
            "translation": "O, indi haqq üzərində sabit qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِمْ عَلَى الحَقِّ",
        "translation": "haqqda sabit qal!",
        "examples": [
          {
            "arabic": "اِسْتَقِمْ عَلَى الحَقِّ.",
            "translation": "haqq üzərində sabit qal!"
          }
        ]
      }
    }
  },
  {
    "id": 200,
    "arabic": "اِخْتَارَ",
    "meaning": "seçmək",
    "forms": {
      "past": {
        "arabic": "اِخْتَارَ",
        "translation": "seçdi",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَارَ أَمْسِ.",
            "translation": "O, dün seçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَارُ",
        "translation": "seçir",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَارُ الآنَ.",
            "translation": "O, indi seçır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْتَرْ",
        "translation": "seç!",
        "examples": [
          {
            "arabic": "اِخْتَرْ.",
            "translation": "seç!"
          }
        ]
      }
    }
  },
  {
    "id": 201,
    "arabic": "تَزَكَّى",
    "meaning": "təmizlənmək, zəkat vermək",
    "forms": {
      "past": {
        "arabic": "تَزَكَّى",
        "translation": "təmizləndi",
        "examples": [
          {
            "arabic": "هُوَ تَزَكَّى أَمْسِ.",
            "translation": "O, dün təmizlənməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَزَكَّى",
        "translation": "təmizlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَزَكَّى الآنَ.",
            "translation": "O, indi təmizlənməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَزَكَّ",
        "translation": "təmizlən!",
        "examples": [
          {
            "arabic": "تَزَكَّ.",
            "translation": "təmizlənmək!"
          }
        ]
      }
    }
  },
  {
    "id": 202,
    "arabic": "اِسْتَغْنَى",
    "meaning": "ehtiyacsız olmaq, qənaət etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَغْنَى",
        "translation": "ehtiyacsız oldu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَغْنَى أَمْسِ.",
            "translation": "O, dün ehtiyacsız olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَغْنِي",
        "translation": "ehtiyacsız olur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَغْنِي الآنَ.",
            "translation": "O, indi ehtiyacsız olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَغْنِ",
        "translation": "ehtiyacsız ol!",
        "examples": [
          {
            "arabic": "اِسْتَغْنِ.",
            "translation": "ehtiyacsız olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 203,
    "arabic": "اِفْتَقَرَ",
    "meaning": "kasıblaşmaq, ehtiyac duymaq",
    "forms": {
      "past": {
        "arabic": "اِفْتَقَرَ",
        "translation": "kasıblaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِفْتَقَرَ أَمْسِ.",
            "translation": "O, dün kasıblaşmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْتَقِرُ",
        "translation": "kasıblaşır",
        "examples": [
          {
            "arabic": "هُوَ يَفْتَقِرُ الآنَ.",
            "translation": "O, indi kasıblaşmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْتَقِرْ",
        "translation": "ehtiyac duy!",
        "examples": [
          {
            "arabic": "اِفْتَقِرْ.",
            "translation": "kasıblaşmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 204,
    "arabic": "اِسْتَغَاثَ",
    "meaning": "yardım istəmək (Allahdan)",
    "forms": {
      "past": {
        "arabic": "اِسْتَغَاثَ",
        "translation": "yardım istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَغَاثَ أَمْسِ.",
            "translation": "O, dün yardım istəmək (Allahdan)dı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَغِيثُ",
        "translation": "yardım istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَغِيثُ الآنَ.",
            "translation": "O, indi yardım istəmək (Allahdan)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَغِثْ",
        "translation": "yardım istə!",
        "examples": [
          {
            "arabic": "اِسْتَغِثْ.",
            "translation": "yardım istəmək (Allahdan)!"
          }
        ]
      }
    }
  },
  {
    "id": 205,
    "arabic": "اِسْتَجَارَ",
    "meaning": "sığınmaq, himayə istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَجَارَ",
        "translation": "sığındı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَجَارَ أَمْسِ.",
            "translation": "O, dün sığınmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَجِيرُ",
        "translation": "sığınır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَجِيرُ الآنَ.",
            "translation": "O, indi sığınmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَجِرْ",
        "translation": "sığın!",
        "examples": [
          {
            "arabic": "اِسْتَجِرْ.",
            "translation": "sığınmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 206,
    "arabic": "اِعْتَصَمَ",
    "meaning": "sarılmaq, möhkəm yapışmaq",
    "forms": {
      "past": {
        "arabic": "اِعْتَصَمَ",
        "translation": "sarıldı",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَصَمَ أَمْسِ.",
            "translation": "O, dün sarılmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَصِمُ",
        "translation": "sarılır",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَصِمُ الآنَ.",
            "translation": "O, indi sarılmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَصِمْ",
        "translation": "sarıl!",
        "examples": [
          {
            "arabic": "اِعْتَصِمْ.",
            "translation": "sarılmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 207,
    "arabic": "تَوَاضَعَ",
    "meaning": "təvazökar olmaq",
    "forms": {
      "past": {
        "arabic": "تَوَاضَعَ",
        "translation": "təvazökar oldu",
        "examples": [
          {
            "arabic": "هُوَ تَوَاضَعَ أَمْسِ.",
            "translation": "O, dün təvazökar oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَاضَعُ",
        "translation": "təvazökar olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَاضَعُ الآنَ.",
            "translation": "O, indi təvazökar olur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَاضَعْ",
        "translation": "təvazökar ol!",
        "examples": [
          {
            "arabic": "تَوَاضَعْ.",
            "translation": "təvazökar ol!"
          }
        ]
      }
    }
  },
  {
    "id": 208,
    "arabic": "تَكَبَّرَ",
    "meaning": "təkəbbürlənmək",
    "forms": {
      "past": {
        "arabic": "تَكَبَّرَ",
        "translation": "təkəbbürləndi",
        "examples": [
          {
            "arabic": "هُوَ تَكَبَّرَ أَمْسِ.",
            "translation": "O, dün təkəbbürləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَكَبَّرُ",
        "translation": "təkəbbürlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَكَبَّرُ الآنَ.",
            "translation": "O, indi təkəbbürlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَتَكَبَّرْ",
        "translation": "təkəbbürlənmə!",
        "examples": [
          {
            "arabic": "لَا تَتَكَبَّرْ.",
            "translation": "təkəbbürlən!"
          }
        ]
      }
    }
  },
  {
    "id": 209,
    "arabic": "اِخْتَالَ",
    "meaning": "lovğalanmaq, özünü bəyənmək",
    "forms": {
      "past": {
        "arabic": "اِخْتَالَ",
        "translation": "lovğalandı",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَالَ أَمْسِ.",
            "translation": "O, dün lovğalanmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَالُ",
        "translation": "lovğalanır",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَالُ الآنَ.",
            "translation": "O, indi lovğalanmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَخْتَالْ",
        "translation": "lovğalanma!",
        "examples": [
          {
            "arabic": "لَا تَخْتَالْ.",
            "translation": "lovğalanmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 210,
    "arabic": "اِفْتَخَرَ",
    "meaning": "fəxr etmək, qürur hissi",
    "forms": {
      "past": {
        "arabic": "اِفْتَخَرَ",
        "translation": "fəxr etdi",
        "examples": [
          {
            "arabic": "هُوَ اِفْتَخَرَ أَمْسِ.",
            "translation": "O, dün fəxr etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَفْتَخِرُ",
        "translation": "fəxr edir",
        "examples": [
          {
            "arabic": "هُوَ يَفْتَخِرُ الآنَ.",
            "translation": "O, indi fəxr etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْتَخِرْ",
        "translation": "fəxr et!",
        "examples": [
          {
            "arabic": "اِفْتَخِرْ.",
            "translation": "fəxr etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 211,
    "arabic": "قَشَرَ",
    "meaning": "qabığını soymaq",
    "forms": {
      "past": {
        "arabic": "قَشَرَ",
        "translation": "qabığını soydu",
        "examples": [
          {
            "arabic": "هُوَ قَشَرَ أَمْسِ.",
            "translation": "O, dünən qabığını soydu."
          }
        ]
      },
      "present": {
        "arabic": "يَقْشِرُ",
        "translation": "qabığını soyur",
        "examples": [
          {
            "arabic": "هُوَ يَقْشِرُ الآنَ.",
            "translation": "O, indi qabığını soyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْشِرْ",
        "translation": "qabığını soy!",
        "examples": [
          {
            "arabic": "اِقْشِرْ.",
            "translation": "qabığını soy!"
          }
        ]
      }
    }
  },
  {
    "id": 212,
    "arabic": "سَرَقَ",
    "meaning": "oğurlamaq",
    "forms": {
      "past": {
        "arabic": "سَرَقَ",
        "translation": "oğurladı",
        "examples": [
          {
            "arabic": "هُوَ سَرَقَ أَمْسِ.",
            "translation": "O, dünən oğurladı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْرِقُ",
        "translation": "oğurlayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْرِقُ الآنَ.",
            "translation": "O, indi oğurlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْرِقْ",
        "translation": "oğurla!",
        "examples": [
          {
            "arabic": "اِسْرِقْ.",
            "translation": "oğurla!"
          }
        ]
      }
    }
  },
  {
    "id": 213,
    "arabic": "أَنْكَرَ",
    "meaning": "inkar etmək, rədd etmək",
    "forms": {
      "past": {
        "arabic": "أَنْكَرَ",
        "translation": "inkar etdi",
        "examples": [
          {
            "arabic": "هُوَ أَنْكَرَ أَمْسِ.",
            "translation": "O, dün inkar etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُنْكِرُ",
        "translation": "inkar edir",
        "examples": [
          {
            "arabic": "هُوَ يُنْكِرُ الآنَ.",
            "translation": "O, indi inkar etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْكِرْ",
        "translation": "rədd et!",
        "examples": [
          {
            "arabic": "أَنْكِرْ.",
            "translation": "inkar etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 214,
    "arabic": "أَقَرَّ",
    "meaning": "etiraf etmək, qəbul etmək",
    "forms": {
      "past": {
        "arabic": "أَقَرَّ",
        "translation": "etiraf etdi",
        "examples": [
          {
            "arabic": "هُوَ أَقَرَّ أَمْسِ.",
            "translation": "O, dün etiraf etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقِرُّ",
        "translation": "etiraf edir",
        "examples": [
          {
            "arabic": "هُوَ يُقِرُّ الآنَ.",
            "translation": "O, indi etiraf etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَقِرَّ",
        "translation": "etiraf et!",
        "examples": [
          {
            "arabic": "أَقِرَّ.",
            "translation": "etiraf etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 215,
    "arabic": "شَهِدَ",
    "meaning": "şahidlik etmək",
    "forms": {
      "past": {
        "arabic": "شَهِدَ",
        "translation": "şahidlik etdi",
        "examples": [
          {
            "arabic": "هُوَ شَهِدَ أَمْسِ.",
            "translation": "O, dün şahidlik etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْهَدُ",
        "translation": "şahidlik edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْهَدُ الآنَ.",
            "translation": "O, indi şahidlik etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْهَدْ",
        "translation": "şahidlik et!",
        "examples": [
          {
            "arabic": "اِشْهَدْ.",
            "translation": "şahidlik et!"
          }
        ]
      }
    }
  },
  {
    "id": 216,
    "arabic": "حَكَى",
    "meaning": "danışmaq, nəql etmək",
    "forms": {
      "past": {
        "arabic": "حَكَى",
        "translation": "danışdı",
        "examples": [
          {
            "arabic": "هُوَ حَكَى أَمْسِ.",
            "translation": "O, dün danışmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْكِي",
        "translation": "danışır",
        "examples": [
          {
            "arabic": "هُوَ يَحْكِي الآنَ.",
            "translation": "O, indi danışmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْكِ",
        "translation": "danış!",
        "examples": [
          {
            "arabic": "اِحْكِ.",
            "translation": "danışmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 217,
    "arabic": "قَصَّ",
    "meaning": "hekayə danışmaq",
    "forms": {
      "past": {
        "arabic": "قَصَّ",
        "translation": "hekayə danışdı",
        "examples": [
          {
            "arabic": "هُوَ قَصَّ أَمْسِ.",
            "translation": "O, dün hekayə danışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقُصُّ",
        "translation": "hekayə danışır",
        "examples": [
          {
            "arabic": "هُوَ يَقُصُّ الآنَ.",
            "translation": "O, indi hekayə danışır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُقْصُصْ",
        "translation": "hekayə danış!",
        "examples": [
          {
            "arabic": "اُقْصُصْ.",
            "translation": "hekayə danış!"
          }
        ]
      }
    }
  },
  {
    "id": 218,
    "arabic": "أَوْجَزَ",
    "meaning": "qısa danışmaq, icmal etmək",
    "forms": {
      "past": {
        "arabic": "أَوْجَزَ",
        "translation": "qısa danışdı",
        "examples": [
          {
            "arabic": "هُوَ أَوْجَزَ أَمْسِ.",
            "translation": "O, dün qısa danışmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوجِزُ",
        "translation": "qısa danışır",
        "examples": [
          {
            "arabic": "هُوَ يُوجِزُ الآنَ.",
            "translation": "O, indi qısa danışmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَوْجِزْ",
        "translation": "qısa danış!",
        "examples": [
          {
            "arabic": "أَوْجِزْ.",
            "translation": "qısa danışmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 219,
    "arabic": "أَطَالَ",
    "meaning": "uzatmaq, uzun danışmaq",
    "forms": {
      "past": {
        "arabic": "أَطَالَ",
        "translation": "uzatdı",
        "examples": [
          {
            "arabic": "هُوَ أَطَالَ أَمْسِ.",
            "translation": "O, dün uzatmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُطِيلُ",
        "translation": "uzadır",
        "examples": [
          {
            "arabic": "هُوَ يُطِيلُ الآنَ.",
            "translation": "O, indi uzatmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تُطِلْ",
        "translation": "uzatma!",
        "examples": [
          {
            "arabic": "لَا تُطِلْ.",
            "translation": "uzatmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 220,
    "arabic": "أَنْصَتَ",
    "meaning": "diqqətlə dinləmək",
    "forms": {
      "past": {
        "arabic": "أَنْصَتَ",
        "translation": "diqqətlə dinlədi",
        "examples": [
          {
            "arabic": "هُوَ أَنْصَتَ أَمْسِ.",
            "translation": "O, dün diqqətlə dinlədi."
          }
        ]
      },
      "present": {
        "arabic": "يُنْصِتُ",
        "translation": "diqqətlə dinləyir",
        "examples": [
          {
            "arabic": "هُوَ يُنْصِتُ الآنَ.",
            "translation": "O, indi diqqətlə dinləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْصِتْ",
        "translation": "diqqətlə dinlə!",
        "examples": [
          {
            "arabic": "أَنْصِتْ.",
            "translation": "diqqətlə dinlə!"
          }
        ]
      }
    }
  },
  {
    "id": 221,
    "arabic": "اِلْتَفَتَ",
    "meaning": "dönmək, yönəlmək",
    "forms": {
      "past": {
        "arabic": "اِلْتَفَتَ",
        "translation": "döndü",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَفَتَ أَمْسِ.",
            "translation": "O, dün dönməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَفِتُ",
        "translation": "dönür",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَفِتُ الآنَ.",
            "translation": "O, indi dönməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَفِتْ",
        "translation": "dön!",
        "examples": [
          {
            "arabic": "اِلْتَفِتْ.",
            "translation": "dönmək!"
          }
        ]
      }
    }
  },
  {
    "id": 222,
    "arabic": "صَبَغَ",
    "meaning": "boyamaq",
    "forms": {
      "past": {
        "arabic": "صَبَغَ",
        "translation": "boyadı",
        "examples": [
          {
            "arabic": "هُوَ صَبَغَ أَمْسِ.",
            "translation": "O, dünən boyadı."
          }
        ]
      },
      "present": {
        "arabic": "يَصْبُغُ",
        "translation": "boyayır",
        "examples": [
          {
            "arabic": "هُوَ يَصْبُغُ الآنَ.",
            "translation": "O, indi boyayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْبُغْ",
        "translation": "boya!",
        "examples": [
          {
            "arabic": "اِصْبُغْ.",
            "translation": "boya!"
          }
        ]
      }
    }
  },
  {
    "id": 223,
    "arabic": "اِعْتَزَلَ",
    "meaning": "kənara çəkilmək, təcrid olmaq",
    "forms": {
      "past": {
        "arabic": "اِعْتَزَلَ",
        "translation": "kənara çəkildi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَزَلَ أَمْسِ.",
            "translation": "O, dün kənara çəkilməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَزِلُ",
        "translation": "kənara çəkilir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَزِلُ الآنَ.",
            "translation": "O, indi kənara çəkilməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَزِلْ",
        "translation": "kənara çəkil!",
        "examples": [
          {
            "arabic": "اِعْتَزِلْ.",
            "translation": "kənara çəkilmək!"
          }
        ]
      }
    }
  },
  {
    "id": 224,
    "arabic": "فَرَشَ",
    "meaning": "sərmək, yaymaq",
    "forms": {
      "past": {
        "arabic": "فَرَشَ",
        "translation": "sərdi",
        "examples": [
          {
            "arabic": "هُوَ فَرَشَ أَمْسِ.",
            "translation": "O, dünən sərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَفْرُشُ",
        "translation": "sərir",
        "examples": [
          {
            "arabic": "هُوَ يَفْرُشُ الآنَ.",
            "translation": "O, indi sərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْرُشْ",
        "translation": "sər!",
        "examples": [
          {
            "arabic": "اِفْرُشْ.",
            "translation": "sər!"
          }
        ]
      }
    }
  },
  {
    "id": 225,
    "arabic": "اِجْتَنَبَ",
    "meaning": "uzaq durmaq, çəkinmək",
    "forms": {
      "past": {
        "arabic": "اِجْتَنَبَ",
        "translation": "uzaq durdu",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَنَبَ أَمْسِ.",
            "translation": "O, dün uzaq durmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَنِبُ",
        "translation": "uzaq durur",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَنِبُ الآنَ.",
            "translation": "O, indi uzaq durmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَنِبْ",
        "translation": "uzaq dur!",
        "examples": [
          {
            "arabic": "اِجْتَنِبْ.",
            "translation": "uzaq durmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 226,
    "arabic": "اِلْتَزَمَ",
    "meaning": "riayət etmək, bağlı qalmaq",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ",
        "translation": "riayət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ أَمْسِ.",
            "translation": "O, dün riayət etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ",
        "translation": "riayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ الآنَ.",
            "translation": "O, indi riayət etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ",
        "translation": "riayət et!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ.",
            "translation": "riayət etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 227,
    "arabic": "اِسْتَمْسَكَ",
    "meaning": "sarılmaq, tutmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمْسَكَ",
        "translation": "sarldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمْسَكَ أَمْسِ.",
            "translation": "O, dün sarılmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمْسِكُ",
        "translation": "sarılır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمْسِكُ الآنَ.",
            "translation": "O, indi sarılmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمْسِكْ",
        "translation": "sarıl!",
        "examples": [
          {
            "arabic": "اِسْتَمْسِكْ.",
            "translation": "sarılmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 228,
    "arabic": "أَدْرَكَ",
    "meaning": "çatmaq, yetişmək, anlamaq",
    "forms": {
      "past": {
        "arabic": "أَدْرَكَ",
        "translation": "çatdı, anladı",
        "examples": [
          {
            "arabic": "هُوَ أَدْرَكَ أَمْسِ.",
            "translation": "O, dün çatmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُدْرِكُ",
        "translation": "çatır, anlayır",
        "examples": [
          {
            "arabic": "هُوَ يُدْرِكُ الآنَ.",
            "translation": "O, indi çatmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَدْرِكْ",
        "translation": "çat, anla!",
        "examples": [
          {
            "arabic": "أَدْرِكْ.",
            "translation": "çatmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 229,
    "arabic": "بَلَغَ",
    "meaning": "çatmaq, yetkin olmaq",
    "forms": {
      "past": {
        "arabic": "بَلَغَ",
        "translation": "çatdı, yetkin oldu",
        "examples": [
          {
            "arabic": "هُوَ بَلَغَ أَمْسِ.",
            "translation": "O, dünən çatdı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْلُغُ",
        "translation": "çatır",
        "examples": [
          {
            "arabic": "هُوَ يَبْلُغُ الآنَ.",
            "translation": "O, indi çatır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْلُغْ",
        "translation": "çat!",
        "examples": [
          {
            "arabic": "اِبْلُغْ.",
            "translation": "çat!"
          }
        ]
      }
    }
  },
  {
    "id": 230,
    "arabic": "نَضِجَ",
    "meaning": "yetişmək, yetkinləşmək",
    "forms": {
      "past": {
        "arabic": "نَضِجَ",
        "translation": "yetişdi",
        "examples": [
          {
            "arabic": "هُوَ نَضِجَ أَمْسِ.",
            "translation": "O, dün yetişməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْضَجُ",
        "translation": "yetişir",
        "examples": [
          {
            "arabic": "هُوَ يَنْضَجُ الآنَ.",
            "translation": "O, indi yetişməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْضَجْ",
        "translation": "yetiş!",
        "examples": [
          {
            "arabic": "اِنْضَجْ.",
            "translation": "yetişmək!"
          }
        ]
      }
    }
  },
  {
    "id": 231,
    "arabic": "نَمَا",
    "meaning": "böyümək, inkişaf etmək",
    "forms": {
      "past": {
        "arabic": "نَمَا",
        "translation": "böyüdü",
        "examples": [
          {
            "arabic": "هُوَ نَمَا أَمْسِ.",
            "translation": "O, dün böyüməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْمُو",
        "translation": "böyüyür",
        "examples": [
          {
            "arabic": "هُوَ يَنْمُو الآنَ.",
            "translation": "O, indi böyüməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْمُ",
        "translation": "böyü!",
        "examples": [
          {
            "arabic": "اِنْمُ.",
            "translation": "böyümək!"
          }
        ]
      }
    }
  },
  {
    "id": 232,
    "arabic": "اِزْدَادَ",
    "meaning": "artmaq, çoxalmaq",
    "forms": {
      "past": {
        "arabic": "اِزْدَادَ",
        "translation": "artdı",
        "examples": [
          {
            "arabic": "هُوَ اِزْدَادَ أَمْسِ.",
            "translation": "O, dün artmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَزْدَادُ",
        "translation": "artır",
        "examples": [
          {
            "arabic": "هُوَ يَزْدَادُ الآنَ.",
            "translation": "O, indi artmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِزْدَدْ",
        "translation": "artır!",
        "examples": [
          {
            "arabic": "اِزْدَدْ.",
            "translation": "artmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 233,
    "arabic": "نَقَصَ",
    "meaning": "azalmaq, əskilmək",
    "forms": {
      "past": {
        "arabic": "نَقَصَ",
        "translation": "azaldı",
        "examples": [
          {
            "arabic": "هُوَ نَقَصَ أَمْسِ.",
            "translation": "O, dün azalmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقُصُ",
        "translation": "azalır",
        "examples": [
          {
            "arabic": "هُوَ يَنْقُصُ الآنَ.",
            "translation": "O, indi azalmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَنْقُصْ",
        "translation": "azalma!",
        "examples": [
          {
            "arabic": "لَا تَنْقُصْ.",
            "translation": "azalma!"
          }
        ]
      }
    }
  },
  {
    "id": 234,
    "arabic": "كَمَلَ",
    "meaning": "tamamlanmaq, tam olmaq",
    "forms": {
      "past": {
        "arabic": "كَمَلَ",
        "translation": "tamamlandı",
        "examples": [
          {
            "arabic": "هُوَ كَمَلَ أَمْسِ.",
            "translation": "O, dün tamamlanmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْمُلُ",
        "translation": "tamamlanır",
        "examples": [
          {
            "arabic": "هُوَ يَكْمُلُ الآنَ.",
            "translation": "O, indi tamamlanmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْمُلْ",
        "translation": "tamamlan!",
        "examples": [
          {
            "arabic": "اِكْمُلْ.",
            "translation": "tamamlan!"
          }
        ]
      }
    }
  },
  {
    "id": 235,
    "arabic": "زَادَ",
    "meaning": "artırmaq",
    "forms": {
      "past": {
        "arabic": "زَادَ",
        "translation": "artırdı",
        "examples": [
          {
            "arabic": "هُوَ زَادَ أَمْسِ.",
            "translation": "O, dün artırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَزِيدُ",
        "translation": "artırır",
        "examples": [
          {
            "arabic": "هُوَ يَزِيدُ الآنَ.",
            "translation": "O, indi artırır."
          }
        ]
      },
      "imperative": {
        "arabic": "زِدْ",
        "translation": "artır!",
        "examples": [
          {
            "arabic": "زِدْ.",
            "translation": "artır!"
          }
        ]
      }
    }
  },
  {
    "id": 236,
    "arabic": "حَسُنَ",
    "meaning": "gözəl olmaq",
    "forms": {
      "past": {
        "arabic": "حَسُنَ",
        "translation": "gözəl oldu",
        "examples": [
          {
            "arabic": "هُوَ حَسُنَ أَمْسِ.",
            "translation": "O, dün gözəl oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَحْسُنُ",
        "translation": "gözəl olur",
        "examples": [
          {
            "arabic": "هُوَ يَحْسُنُ الآنَ.",
            "translation": "O, indi gözəl olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْسُنْ",
        "translation": "gözəl ol!",
        "examples": [
          {
            "arabic": "اُحْسُنْ.",
            "translation": "gözəl ol!"
          }
        ]
      }
    }
  },
  {
    "id": 237,
    "arabic": "قَبُحَ",
    "meaning": "çirkin olmaq",
    "forms": {
      "past": {
        "arabic": "قَبُحَ",
        "translation": "çirkin oldu",
        "examples": [
          {
            "arabic": "هُوَ قَبُحَ أَمْسِ.",
            "translation": "O, dün çirkin oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَقْبُحُ",
        "translation": "çirkin olur",
        "examples": [
          {
            "arabic": "هُوَ يَقْبُحُ الآنَ.",
            "translation": "O, indi çirkin olur."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَقْبُحْ",
        "translation": "çirkin olma!",
        "examples": [
          {
            "arabic": "لَا تَقْبُحْ.",
            "translation": "çirkin ol!"
          }
        ]
      }
    }
  },
  {
    "id": 238,
    "arabic": "صَحَّ",
    "meaning": "doğru olmaq, səhih olmaq",
    "forms": {
      "past": {
        "arabic": "صَحَّ",
        "translation": "doğru oldu",
        "examples": [
          {
            "arabic": "هُوَ صَحَّ أَمْسِ.",
            "translation": "O, dün doğru olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَصِحُّ",
        "translation": "doğru olur",
        "examples": [
          {
            "arabic": "هُوَ يَصِحُّ الآنَ.",
            "translation": "O, indi doğru olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْحَحْ",
        "translation": "doğru ol!",
        "examples": [
          {
            "arabic": "اِصْحَحْ.",
            "translation": "doğru ol!"
          }
        ]
      }
    }
  },
  {
    "id": 239,
    "arabic": "بَطَلَ",
    "meaning": "batil olmaq, puç olmaq",
    "forms": {
      "past": {
        "arabic": "بَطَلَ",
        "translation": "batil oldu",
        "examples": [
          {
            "arabic": "هُوَ بَطَلَ أَمْسِ.",
            "translation": "O, dün batil olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْطُلُ",
        "translation": "batil olur",
        "examples": [
          {
            "arabic": "هُوَ يَبْطُلُ الآنَ.",
            "translation": "O, indi batil olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْطُلْ",
        "translation": "batil ol!",
        "examples": [
          {
            "arabic": "اِبْطُلْ.",
            "translation": "batil ol!"
          }
        ]
      }
    }
  },
  {
    "id": 240,
    "arabic": "ثَبَتَ",
    "meaning": "sabit olmaq, sübut olmaq",
    "forms": {
      "past": {
        "arabic": "ثَبَتَ",
        "translation": "sabit oldu",
        "examples": [
          {
            "arabic": "هُوَ ثَبَتَ أَمْسِ.",
            "translation": "O, dün sabit olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَثْبُتُ",
        "translation": "sabit olur",
        "examples": [
          {
            "arabic": "هُوَ يَثْبُتُ الآنَ.",
            "translation": "O, indi sabit olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُثْبُتْ",
        "translation": "sabit ol!",
        "examples": [
          {
            "arabic": "اُثْبُتْ.",
            "translation": "sabit olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 241,
    "arabic": "حَقَّ",
    "meaning": "haqq olmaq, doğru olmaq",
    "forms": {
      "past": {
        "arabic": "حَقَّ",
        "translation": "haqq oldu",
        "examples": [
          {
            "arabic": "هُوَ حَقَّ أَمْسِ.",
            "translation": "O, dün haqq olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحِقُّ",
        "translation": "haqq olur",
        "examples": [
          {
            "arabic": "هُوَ يَحِقُّ الآنَ.",
            "translation": "O, indi haqq olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "حُقَّ",
        "translation": "haqqı yerinə yetir!",
        "examples": [
          {
            "arabic": "حُقَّ.",
            "translation": "haqq olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 242,
    "arabic": "اِسْتَحَقَّ",
    "meaning": "haqq etmək, layiq olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَحَقَّ",
        "translation": "haqq etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَحَقَّ أَمْسِ.",
            "translation": "O, dün haqq etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَحِقُّ",
        "translation": "haqq edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَحِقُّ الآنَ.",
            "translation": "O, indi haqq etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَحِقَّ",
        "translation": "haqq et!",
        "examples": [
          {
            "arabic": "اِسْتَحِقَّ.",
            "translation": "haqq etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 243,
    "arabic": "كَبَسَ",
    "meaning": "basmaq, presləmək",
    "forms": {
      "past": {
        "arabic": "كَبَسَ",
        "translation": "basdı",
        "examples": [
          {
            "arabic": "هُوَ كَبَسَ أَمْسِ.",
            "translation": "O, dünən basdı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْبِسُ",
        "translation": "basır",
        "examples": [
          {
            "arabic": "هُوَ يَكْبِسُ الآنَ.",
            "translation": "O, indi basır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْبِسْ",
        "translation": "bas!",
        "examples": [
          {
            "arabic": "اِكْبِسْ.",
            "translation": "bas!"
          }
        ]
      }
    }
  },
  {
    "id": 244,
    "arabic": "رَبَحَ",
    "meaning": "qazanmaq, gəlir götürmək",
    "forms": {
      "past": {
        "arabic": "رَبَحَ",
        "translation": "qazandı",
        "examples": [
          {
            "arabic": "هُوَ رَبَحَ أَمْسِ.",
            "translation": "O, dünən qazandı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْبَحُ",
        "translation": "qazanır",
        "examples": [
          {
            "arabic": "هُوَ يَرْبَحُ الآنَ.",
            "translation": "O, indi qazanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْبَحْ",
        "translation": "qazan!",
        "examples": [
          {
            "arabic": "اِرْبَحْ.",
            "translation": "qazan!"
          }
        ]
      }
    }
  },
  {
    "id": 245,
    "arabic": "طَمْأَنَ",
    "meaning": "rahatlatmaq, sakitləşdirmək",
    "forms": {
      "past": {
        "arabic": "طَمْأَنَ",
        "translation": "rahatlatdı",
        "examples": [
          {
            "arabic": "هُوَ طَمْأَنَ أَمْسِ.",
            "translation": "O, dünən rahatlatdı."
          }
        ]
      },
      "present": {
        "arabic": "يُطَمْئِنُ",
        "translation": "rahatladır",
        "examples": [
          {
            "arabic": "هُوَ يُطَمْئِنُ الآنَ.",
            "translation": "O, indi rahatladır."
          }
        ]
      },
      "imperative": {
        "arabic": "طَمْئِنْ",
        "translation": "rahatlat!",
        "examples": [
          {
            "arabic": "طَمْئِنْ.",
            "translation": "rahatlat!"
          }
        ]
      }
    }
  },
  {
    "id": 246,
    "arabic": "قَلِقَ",
    "meaning": "narahat olmaq, təlaşa düşmək",
    "forms": {
      "past": {
        "arabic": "قَلِقَ",
        "translation": "narahat oldu",
        "examples": [
          {
            "arabic": "هُوَ قَلِقَ أَمْسِ.",
            "translation": "O, dün narahat olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْلَقُ",
        "translation": "narahat olur",
        "examples": [
          {
            "arabic": "هُوَ يَقْلَقُ الآنَ.",
            "translation": "O, indi narahat olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَقْلَقْ",
        "translation": "narahat olma!",
        "examples": [
          {
            "arabic": "لَا تَقْلَقْ.",
            "translation": "narahat olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 247,
    "arabic": "فَرِحَ",
    "meaning": "sevinmək",
    "forms": {
      "past": {
        "arabic": "فَرِحَ",
        "translation": "sevindi",
        "examples": [
          {
            "arabic": "هُوَ فَرِحَ أَمْسِ.",
            "translation": "O, dün sevindi."
          }
        ]
      },
      "present": {
        "arabic": "يَفْرَحُ",
        "translation": "sevinir",
        "examples": [
          {
            "arabic": "هُوَ يَفْرَحُ الآنَ.",
            "translation": "O, indi sevinir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْرَحْ",
        "translation": "sevin!",
        "examples": [
          {
            "arabic": "اِفْرَحْ.",
            "translation": "sevin!"
          }
        ]
      }
    }
  },
  {
    "id": 248,
    "arabic": "حَزِنَ",
    "meaning": "kədərlənmək",
    "forms": {
      "past": {
        "arabic": "حَزِنَ",
        "translation": "kədərləndi",
        "examples": [
          {
            "arabic": "هُوَ حَزِنَ أَمْسِ.",
            "translation": "O, dün kədərləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْزَنُ",
        "translation": "kədərlənir",
        "examples": [
          {
            "arabic": "هُوَ يَحْزَنُ الآنَ.",
            "translation": "O, indi kədərlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَحْزَنْ",
        "translation": "kədərlənmə!",
        "examples": [
          {
            "arabic": "لَا تَحْزَنْ.",
            "translation": "kədərlən!"
          }
        ]
      }
    }
  },
  {
    "id": 249,
    "arabic": "اِشْتَاقَ",
    "meaning": "həsrət qalmaq, arzulamaq",
    "forms": {
      "past": {
        "arabic": "اِشْتَاقَ",
        "translation": "həsrət qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِشْتَاقَ أَمْسِ.",
            "translation": "O, dün həsrət qalmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتَاقُ",
        "translation": "həsrət qalır",
        "examples": [
          {
            "arabic": "هُوَ يَشْتَاقُ الآنَ.",
            "translation": "O, indi həsrət qalmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْتَقْ",
        "translation": "həsrət qal!",
        "examples": [
          {
            "arabic": "اِشْتَقْ.",
            "translation": "həsrət qalmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 250,
    "arabic": "اِطْمَأَنَّ",
    "meaning": "rahatlamaq, sakit olmaq",
    "forms": {
      "past": {
        "arabic": "اِطْمَأَنَّ",
        "translation": "rahatladı",
        "examples": [
          {
            "arabic": "هُوَ اِطْمَأَنَّ أَمْسِ.",
            "translation": "O, dün rahatlamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَطْمَئِنُّ",
        "translation": "rahatlayır",
        "examples": [
          {
            "arabic": "هُوَ يَطْمَئِنُّ الآنَ.",
            "translation": "O, indi rahatlamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْمَئِنَّ",
        "translation": "rahat ol!",
        "examples": [
          {
            "arabic": "اِطْمَئِنَّ.",
            "translation": "rahatlamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 251,
    "arabic": "اِسْتَيْقَظَ",
    "meaning": "oyanmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَيْقَظَ",
        "translation": "oyandı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَيْقَظَ أَمْسِ.",
            "translation": "O, dün oyandı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَيْقِظُ",
        "translation": "oyanır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَيْقِظُ الآنَ.",
            "translation": "O, indi oyanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَيْقِظْ",
        "translation": "oyan!",
        "examples": [
          {
            "arabic": "اِسْتَيْقِظْ.",
            "translation": "oyan!"
          }
        ]
      }
    }
  },
  {
    "id": 252,
    "arabic": "لَعِقَ",
    "meaning": "yalamaq",
    "forms": {
      "past": {
        "arabic": "لَعِقَ",
        "translation": "yaladı",
        "examples": [
          {
            "arabic": "هُوَ لَعِقَ أَمْسِ.",
            "translation": "O, dünən yaladı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْعَقُ",
        "translation": "yalayır",
        "examples": [
          {
            "arabic": "هُوَ يَلْعَقُ الآنَ.",
            "translation": "O, indi yalayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْعَقْ",
        "translation": "yala!",
        "examples": [
          {
            "arabic": "اِلْعَقْ.",
            "translation": "yala!"
          }
        ]
      }
    }
  },
  {
    "id": 253,
    "arabic": "تَيَمَّمَ",
    "meaning": "təyəmmüm etmək",
    "forms": {
      "past": {
        "arabic": "تَيَمَّمَ",
        "translation": "təyəmmüm etdi",
        "examples": [
          {
            "arabic": "هُوَ تَيَمَّمَ أَمْسِ.",
            "translation": "O, dün təyəmmüm etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَيَمَّمُ",
        "translation": "təyəmmüm edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَيَمَّمُ الآنَ.",
            "translation": "O, indi təyəmmüm etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَيَمَّمْ",
        "translation": "təyəmmüm et!",
        "examples": [
          {
            "arabic": "تَيَمَّمْ.",
            "translation": "təyəmmüm et!"
          }
        ]
      }
    }
  },
  {
    "id": 254,
    "arabic": "اِسْتَقْبَلَ القِبْلَةَ",
    "meaning": "qibləyə yönəlmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَقْبَلَ القِبْلَةَ",
        "translation": "qibləyə yönəldi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقْبَلَ القِبْلَةَ أَمْسِ.",
            "translation": "O, dün qibləyə yönəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقْبِلُ القِبْلَةَ",
        "translation": "qibləyə yönəlir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقْبِلُ القِبْلَةَ الآنَ.",
            "translation": "O, indi qibləyə yönəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقْبِلِ القِبْلَةَ",
        "translation": "qibləyə yönəl!",
        "examples": [
          {
            "arabic": "اِسْتَقْبِلِ القِبْلَةَ.",
            "translation": "qibləyə yönəl!"
          }
        ]
      }
    }
  },
  {
    "id": 255,
    "arabic": "أَذَّنَ",
    "meaning": "azan vermək",
    "forms": {
      "past": {
        "arabic": "أَذَّنَ",
        "translation": "azan verdi",
        "examples": [
          {
            "arabic": "هُوَ أَذَّنَ أَمْسِ.",
            "translation": "O, dün azan verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَذِّنُ",
        "translation": "azan verir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَذِّنُ الآنَ.",
            "translation": "O, indi azan verır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَذِّنْ",
        "translation": "azan ver!",
        "examples": [
          {
            "arabic": "أَذِّنْ.",
            "translation": "azan ver!"
          }
        ]
      }
    }
  },
  {
    "id": 256,
    "arabic": "أَقَامَ",
    "meaning": "iqamə vermək, namazı başlatmaq",
    "forms": {
      "past": {
        "arabic": "أَقَامَ",
        "translation": "iqamə verdi",
        "examples": [
          {
            "arabic": "هُوَ أَقَامَ أَمْسِ.",
            "translation": "O, dün iqamə verməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقِيمُ",
        "translation": "iqamə verir",
        "examples": [
          {
            "arabic": "هُوَ يُقِيمُ الآنَ.",
            "translation": "O, indi iqamə verməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَقِمْ",
        "translation": "iqamə ver!",
        "examples": [
          {
            "arabic": "أَقِمْ.",
            "translation": "iqamə vermək!"
          }
        ]
      }
    }
  },
  {
    "id": 257,
    "arabic": "اِقْتَدَى",
    "meaning": "uymaq, tabe olmaq (imama)",
    "forms": {
      "past": {
        "arabic": "اِقْتَدَى",
        "translation": "uydı",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَدَى أَمْسِ.",
            "translation": "O, dün uymaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَدِي",
        "translation": "uyur",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَدِي الآنَ.",
            "translation": "O, indi uymaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَدِ",
        "translation": "uy!",
        "examples": [
          {
            "arabic": "اِقْتَدِ.",
            "translation": "uymaq!"
          }
        ]
      }
    }
  },
  {
    "id": 258,
    "arabic": "اِسْتَمَعَ إِلَى الخُطْبَةِ",
    "meaning": "xütbəni dinləmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَمَعَ إِلَى الخُطْبَةِ",
        "translation": "xütbəni dinlədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمَعَ إِلَى الخُطْبَةِ أَمْسِ.",
            "translation": "O, dün xütbəni dinlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمِعُ إِلَى الخُطْبَةِ",
        "translation": "xütbəni dinləyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمِعُ إِلَى الخُطْبَةِ الآنَ.",
            "translation": "O, indi xütbəni dinləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمِعْ إِلَى الخُطْبَةِ",
        "translation": "xütbəni dinlə!",
        "examples": [
          {
            "arabic": "اِسْتَمِعْ إِلَى الخُطْبَةِ.",
            "translation": "xütbəni dinlə!"
          }
        ]
      }
    }
  },
  {
    "id": 259,
    "arabic": "صَلَّى الجُمُعَةَ",
    "meaning": "cümə namazı qılmaq",
    "forms": {
      "past": {
        "arabic": "صَلَّى الجُمُعَةَ",
        "translation": "cümə namazını qıldı",
        "examples": [
          {
            "arabic": "هُوَ صَلَّى الجُمُعَةَ أَمْسِ.",
            "translation": "O, dün cümə namazı qıldı."
          }
        ]
      },
      "present": {
        "arabic": "يُصَلِّي الجُمُعَةَ",
        "translation": "cümə namazı qılır",
        "examples": [
          {
            "arabic": "هُوَ يُصَلِّي الجُمُعَةَ الآنَ.",
            "translation": "O, indi cümə namazı qılır."
          }
        ]
      },
      "imperative": {
        "arabic": "صَلِّ الجُمُعَةَ",
        "translation": "cümə namazını qıl!",
        "examples": [
          {
            "arabic": "صَلِّ الجُمُعَةَ.",
            "translation": "cümə namazı qıl!"
          }
        ]
      }
    }
  },
  {
    "id": 260,
    "arabic": "اِعْتَكَفَ",
    "meaning": "etikaf etmək, məsciddə qalmaq",
    "forms": {
      "past": {
        "arabic": "اِعْتَكَفَ",
        "translation": "etikaf etdi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَكَفَ أَمْسِ.",
            "translation": "O, dün etikaf etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَكِفُ",
        "translation": "etikaf edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَكِفُ الآنَ.",
            "translation": "O, indi etikaf etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَكِفْ",
        "translation": "etikaf et!",
        "examples": [
          {
            "arabic": "اِعْتَكِفْ.",
            "translation": "etikaf etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 261,
    "arabic": "أَفْطَرَ",
    "meaning": "iftar etmək, orucu açmaq",
    "forms": {
      "past": {
        "arabic": "أَفْطَرَ",
        "translation": "iftar etdi",
        "examples": [
          {
            "arabic": "هُوَ أَفْطَرَ أَمْسِ.",
            "translation": "O, dün iftar etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُفْطِرُ",
        "translation": "iftar edir",
        "examples": [
          {
            "arabic": "هُوَ يُفْطِرُ الآنَ.",
            "translation": "O, indi iftar etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفْطِرْ",
        "translation": "iftar et!",
        "examples": [
          {
            "arabic": "أَفْطِرْ.",
            "translation": "iftar etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 262,
    "arabic": "تَسَحَّرَ",
    "meaning": "səhər yeməyi yemək (sübhə yaxın)",
    "forms": {
      "past": {
        "arabic": "تَسَحَّرَ",
        "translation": "səhər yeməyi yedi",
        "examples": [
          {
            "arabic": "هُوَ سَحَرَ أَمْسِ.",
            "translation": "O, dün səhər yeməyi yemək (sübhə yaxın)dı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَسَحَّرُ",
        "translation": "səhər yeməyi yeyir",
        "examples": [
          {
            "arabic": "هُوَ يَتَسَحَّرُ الآنَ.",
            "translation": "O, indi səhər yeməyi yemək (sübhə yaxın)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَسَحَّرْ",
        "translation": "səhər yeməyi ye!",
        "examples": [
          {
            "arabic": "تَسَحَّرْ.",
            "translation": "səhər yeməyi yemək (sübhə yaxın)!"
          }
        ]
      }
    }
  },
  {
    "id": 263,
    "arabic": "زَكَّى",
    "meaning": "zəkat vermək, təmizləmək",
    "forms": {
      "past": {
        "arabic": "زَكَّى",
        "translation": "zəkat verdi",
        "examples": [
          {
            "arabic": "هُوَ زَكَّى أَمْسِ.",
            "translation": "O, dün zəkat verməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُزَكِّي",
        "translation": "zəkat verir",
        "examples": [
          {
            "arabic": "هُوَ يُزَكِّي الآنَ.",
            "translation": "O, indi zəkat verməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "زَكِّ",
        "translation": "zəkat ver!",
        "examples": [
          {
            "arabic": "زَكِّ.",
            "translation": "zəkat vermək!"
          }
        ]
      }
    }
  },
  {
    "id": 264,
    "arabic": "صَدَّقَ",
    "meaning": "təsdiq etmək, doğrulamaq",
    "forms": {
      "past": {
        "arabic": "صَدَّقَ",
        "translation": "təsdiq etdi",
        "examples": [
          {
            "arabic": "هُوَ صَدَّقَ أَمْسِ.",
            "translation": "O, dün təsdiq etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُصَدِّقُ",
        "translation": "təsdiq edir",
        "examples": [
          {
            "arabic": "هُوَ يُصَدِّقُ الآنَ.",
            "translation": "O, indi təsdiq etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "صَدِّقْ",
        "translation": "təsdiq et!",
        "examples": [
          {
            "arabic": "صَدِّقْ.",
            "translation": "təsdiq etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 265,
    "arabic": "كَذَّبَ",
    "meaning": "yalançı saymaq, inkar etmək",
    "forms": {
      "past": {
        "arabic": "كَذَّبَ",
        "translation": "yalançı saydı",
        "examples": [
          {
            "arabic": "هُوَ كَذَّبَ أَمْسِ.",
            "translation": "O, dün yalançı saymaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُكَذِّبُ",
        "translation": "yalançı sayır",
        "examples": [
          {
            "arabic": "هُوَ يُكَذِّبُ الآنَ.",
            "translation": "O, indi yalançı saymaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تُكَذِّبْ",
        "translation": "yalançı sayma!",
        "examples": [
          {
            "arabic": "لَا تُكَذِّبْ.",
            "translation": "yalançı saymaq!"
          }
        ]
      }
    }
  },
  {
    "id": 266,
    "arabic": "اِسْتَهْزَأَ",
    "meaning": "istehza etmək, lağ etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَهْزَأَ",
        "translation": "istehza etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَهْزَأَ أَمْسِ.",
            "translation": "O, dün istehza etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَهْزِئُ",
        "translation": "istehza edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَهْزِئُ الآنَ.",
            "translation": "O, indi istehza etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَسْتَهْزِئْ",
        "translation": "istehza etmə!",
        "examples": [
          {
            "arabic": "لَا تَسْتَهْزِئْ.",
            "translation": "istehza etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 267,
    "arabic": "سَبَّ",
    "meaning": "söymək, təhqir etmək",
    "forms": {
      "past": {
        "arabic": "سَبَّ",
        "translation": "söydü",
        "examples": [
          {
            "arabic": "هُوَ سَبَّ أَمْسِ.",
            "translation": "O, dün söyməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسُبُّ",
        "translation": "söyür",
        "examples": [
          {
            "arabic": "هُوَ يَسُبُّ الآنَ.",
            "translation": "O, indi söyməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَسُبَّ",
        "translation": "söymə!",
        "examples": [
          {
            "arabic": "لَا تَسُبَّ.",
            "translation": "söymək!"
          }
        ]
      }
    }
  },
  {
    "id": 268,
    "arabic": "شَتَمَ",
    "meaning": "təhqir etmək, söymək",
    "forms": {
      "past": {
        "arabic": "شَتَمَ",
        "translation": "təhqir etdi",
        "examples": [
          {
            "arabic": "هُوَ شَتَمَ أَمْسِ.",
            "translation": "O, dün təhqir etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتُمُ",
        "translation": "təhqir edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْتُمُ الآنَ.",
            "translation": "O, indi təhqir etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَشْتُمْ",
        "translation": "təhqir etmə!",
        "examples": [
          {
            "arabic": "لَا تَشْتُمْ.",
            "translation": "təhqir etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 269,
    "arabic": "اِغْتَابَ",
    "meaning": "qeybət etmək",
    "forms": {
      "past": {
        "arabic": "اِغْتَابَ",
        "translation": "qeybət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِغْتَابَ أَمْسِ.",
            "translation": "O, dün qeybət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَغْتَابُ",
        "translation": "qeybət edir",
        "examples": [
          {
            "arabic": "هُوَ يَغْتَابُ الآنَ.",
            "translation": "O, indi qeybət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَغْتَبْ",
        "translation": "qeybət etmə!",
        "examples": [
          {
            "arabic": "لَا تَغْتَبْ.",
            "translation": "qeybət et!"
          }
        ]
      }
    }
  },
  {
    "id": 270,
    "arabic": "نَمَّ",
    "meaning": "söz gəzdirmək, xəbərçilik etmək",
    "forms": {
      "past": {
        "arabic": "نَمَّ",
        "translation": "söz gəzdirdi",
        "examples": [
          {
            "arabic": "هُوَ نَمَّ أَمْسِ.",
            "translation": "O, dün söz gəzdirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنُمُّ",
        "translation": "söz gəzdirir",
        "examples": [
          {
            "arabic": "هُوَ يَنُمُّ الآنَ.",
            "translation": "O, indi söz gəzdirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَنُمَّ",
        "translation": "söz gəzdirmə!",
        "examples": [
          {
            "arabic": "لَا تَنُمَّ.",
            "translation": "söz gəzdirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 271,
    "arabic": "حَسَدَ",
    "meaning": "həsəd aparmaq, paxıllıq etmək",
    "forms": {
      "past": {
        "arabic": "حَسَدَ",
        "translation": "həsəd apardı",
        "examples": [
          {
            "arabic": "هُوَ حَسَدَ أَمْسِ.",
            "translation": "O, dün həsəd aparmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْسُدُ",
        "translation": "həsəd aparır",
        "examples": [
          {
            "arabic": "هُوَ يَحْسُدُ الآنَ.",
            "translation": "O, indi həsəd aparmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَحْسُدْ",
        "translation": "həsəd aparma!",
        "examples": [
          {
            "arabic": "لَا تَحْسُدْ.",
            "translation": "həsəd aparmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 272,
    "arabic": "حَقَدَ",
    "meaning": "kin saxlamaq, qərəz bəsləmək",
    "forms": {
      "past": {
        "arabic": "حَقَدَ",
        "translation": "kin saxladı",
        "examples": [
          {
            "arabic": "هُوَ حَقَدَ أَمْسِ.",
            "translation": "O, dün kin saxlamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْقِدُ",
        "translation": "kin saxlayır",
        "examples": [
          {
            "arabic": "هُوَ يَحْقِدُ الآنَ.",
            "translation": "O, indi kin saxlamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَحْقِدْ",
        "translation": "kin saxlama!",
        "examples": [
          {
            "arabic": "لَا تَحْقِدْ.",
            "translation": "kin saxlamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 273,
    "arabic": "غَضِبَ",
    "meaning": "qəzəblənmək",
    "forms": {
      "past": {
        "arabic": "غَضِبَ",
        "translation": "qəzəbləndi",
        "examples": [
          {
            "arabic": "هُوَ غَضِبَ أَمْسِ.",
            "translation": "O, dün qəzəbləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَغْضَبُ",
        "translation": "qəzəblənir",
        "examples": [
          {
            "arabic": "هُوَ يَغْضَبُ الآنَ.",
            "translation": "O, indi qəzəblənir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَغْضَبْ",
        "translation": "qəzəblənmə!",
        "examples": [
          {
            "arabic": "لَا تَغْضَبْ.",
            "translation": "qəzəblən!"
          }
        ]
      }
    }
  },
  {
    "id": 274,
    "arabic": "اِنْتَقَمَ",
    "meaning": "intiqam almaq",
    "forms": {
      "past": {
        "arabic": "اِنْتَقَمَ",
        "translation": "intiqam aldı",
        "examples": [
          {
            "arabic": "هُوَ اِنْتَقَمَ أَمْسِ.",
            "translation": "O, dün intiqam aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْتَقِمُ",
        "translation": "intiqam alır",
        "examples": [
          {
            "arabic": "هُوَ يَنْتَقِمُ الآنَ.",
            "translation": "O, indi intiqam alır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَنْتَقِمْ",
        "translation": "intiqam alma!",
        "examples": [
          {
            "arabic": "لَا تَنْتَقِمْ.",
            "translation": "intiqam al!"
          }
        ]
      }
    }
  },
  {
    "id": 275,
    "arabic": "عَاقَبَ",
    "meaning": "cəzalandırmaq",
    "forms": {
      "past": {
        "arabic": "عَاقَبَ",
        "translation": "cəzalandırdı",
        "examples": [
          {
            "arabic": "هُوَ عَاقَبَ أَمْسِ.",
            "translation": "O, dün cəzalandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعَاقِبُ",
        "translation": "cəzalandırır",
        "examples": [
          {
            "arabic": "هُوَ يُعَاقِبُ الآنَ.",
            "translation": "O, indi cəzalandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "عَاقِبْ",
        "translation": "cəzalandır!",
        "examples": [
          {
            "arabic": "عَاقِبْ.",
            "translation": "cəzalandır!"
          }
        ]
      }
    }
  },
  {
    "id": 276,
    "arabic": "أَثَابَ",
    "meaning": "mükafatlandırmaq",
    "forms": {
      "past": {
        "arabic": "أَثَابَ",
        "translation": "mükafatlandırdı",
        "examples": [
          {
            "arabic": "هُوَ أَثَابَ أَمْسِ.",
            "translation": "O, dün mükafatlandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُثِيبُ",
        "translation": "mükafatlandırır",
        "examples": [
          {
            "arabic": "هُوَ يُثِيبُ الآنَ.",
            "translation": "O, indi mükafatlandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَثِبْ",
        "translation": "mükafatlandır!",
        "examples": [
          {
            "arabic": "أَثِبْ.",
            "translation": "mükafatlandır!"
          }
        ]
      }
    }
  },
  {
    "id": 277,
    "arabic": "اِعْتَدَى",
    "meaning": "təcavüz etmək, həddi aşmaq",
    "forms": {
      "past": {
        "arabic": "اِعْتَدَى",
        "translation": "təcavüz etdi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَدَى أَمْسِ.",
            "translation": "O, dün təcavüz etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَدِي",
        "translation": "təcavüz edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَدِي الآنَ.",
            "translation": "O, indi təcavüz etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَعْتَدِ",
        "translation": "təcavüz etmə!",
        "examples": [
          {
            "arabic": "لَا تَعْتَدِ.",
            "translation": "təcavüz etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 278,
    "arabic": "ظَلَمَ",
    "meaning": "zülm etmək",
    "forms": {
      "past": {
        "arabic": "ظَلَمَ",
        "translation": "zülm etdi",
        "examples": [
          {
            "arabic": "هُوَ ظَلَمَ أَمْسِ.",
            "translation": "O, dün zülm etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَظْلِمُ",
        "translation": "zülm edir",
        "examples": [
          {
            "arabic": "هُوَ يَظْلِمُ الآنَ.",
            "translation": "O, indi zülm etür."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَظْلِمْ",
        "translation": "zülm etmə!",
        "examples": [
          {
            "arabic": "لَا تَظْلِمْ.",
            "translation": "zülm et!"
          }
        ]
      }
    }
  },
  {
    "id": 279,
    "arabic": "رَحِمَ",
    "meaning": "rəhm etmək, mərhəmət göstərmək",
    "forms": {
      "past": {
        "arabic": "رَحِمَ",
        "translation": "rəhm etdi",
        "examples": [
          {
            "arabic": "هُوَ رَحِمَ أَمْسِ.",
            "translation": "O, dün rəhm etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْحَمُ",
        "translation": "rəhm edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْحَمُ الآنَ.",
            "translation": "O, indi rəhm etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْحَمْ",
        "translation": "rəhm et!",
        "examples": [
          {
            "arabic": "اِرْحَمْ.",
            "translation": "rəhm etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 280,
    "arabic": "قَسَا",
    "meaning": "sərt olmaq, daşlaşmaq (qəlb)",
    "forms": {
      "past": {
        "arabic": "قَسَا",
        "translation": "sərt oldu",
        "examples": [
          {
            "arabic": "هُوَ قَسَا أَمْسِ.",
            "translation": "O, dün sərt olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْسُو",
        "translation": "sərt olur",
        "examples": [
          {
            "arabic": "هُوَ يَقْسُو الآنَ.",
            "translation": "O, indi sərt olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَا تَقْسُ",
        "translation": "sərt olma!",
        "examples": [
          {
            "arabic": "لَا تَقْسُ.",
            "translation": "sərt olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 281,
    "arabic": "حَافَظَ عَلَى الصَّلَاةِ",
    "meaning": "namazı qorumaq",
    "forms": {
      "past": {
        "arabic": "حَافَظَ عَلَى الصَّلَاةِ",
        "translation": "namazı qorudu",
        "examples": [
          {
            "arabic": "هُوَ حَافَظَ عَلَى الصَّلَاةِ أَمْسِ.",
            "translation": "O, dün namazı qorudu."
          }
        ]
      },
      "present": {
        "arabic": "يُحَافِظُ عَلَى الصَّلَاةِ",
        "translation": "namazı qoruyur",
        "examples": [
          {
            "arabic": "هُوَ يُحَافِظُ عَلَى الصَّلَاةِ الآنَ.",
            "translation": "O, indi namazı qoruyur."
          }
        ]
      },
      "imperative": {
        "arabic": "حَافِظْ عَلَى الصَّلَاةِ",
        "translation": "namazı qoru!",
        "examples": [
          {
            "arabic": "حَافِظْ عَلَى الصَّلَاةِ.",
            "translation": "namazı qoru!"
          }
        ]
      }
    }
  },
  {
    "id": 282,
    "arabic": "أَدَّى",
    "meaning": "yerinə yetirmək, ödəmək",
    "forms": {
      "past": {
        "arabic": "أَدَّى",
        "translation": "yerinə yetirdi",
        "examples": [
          {
            "arabic": "هُوَ أَدَّى أَمْسِ.",
            "translation": "O, dün yerinə yetirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَدِّي",
        "translation": "yerinə yetirir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَدِّي الآنَ.",
            "translation": "O, indi yerinə yetirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَدِّ",
        "translation": "yerinə yetir!",
        "examples": [
          {
            "arabic": "أَدِّ.",
            "translation": "yerinə yetirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 283,
    "arabic": "اِلْتَزَمَ بِالآدَابِ",
    "meaning": "ədəblərə riayət etmək",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ بِالآدَابِ",
        "translation": "ədəblərə riayət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ بِالآدَابِ أَمْسِ.",
            "translation": "O, dün ədəblərə riayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ بِالآدَابِ",
        "translation": "ədəblərə riayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ بِالآدَابِ الآنَ.",
            "translation": "O, indi ədəblərə riayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ بِالآدَابِ",
        "translation": "ədəblərə riayət et!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ بِالآدَابِ.",
            "translation": "ədəblərə riayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 284,
    "arabic": "اِسْتَأْذَنَ فِي الدُّخُولِ",
    "meaning": "girmək üçün icazə istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَأْذَنَ فِي الدُّخُولِ",
        "translation": "girmək üçün icazə istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَأْذَنَ فِي الدُّخُولِ أَمْسِ.",
            "translation": "O, dün girmək üçün icazə istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَأْذِنُ فِي الدُّخُولِ",
        "translation": "girmək üçün icazə istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَأْذِنُ فِي الدُّخُولِ الآنَ.",
            "translation": "O, indi girmək üçün icazə istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَأْذِنْ فِي الدُّخُولِ",
        "translation": "girmək üçün icazə istə!",
        "examples": [
          {
            "arabic": "اِسْتَأْذِنْ فِي الدُّخُولِ.",
            "translation": "girmək üçün icazə istə!"
          }
        ]
      }
    }
  },
  {
    "id": 285,
    "arabic": "اِسْتَقْبَلَ الضَّيْفَ",
    "meaning": "qonağı qarşılamaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقْبَلَ الضَّيْفَ",
        "translation": "qonağı qarşıladı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقْبَلَ الضَّيْفَ أَمْسِ.",
            "translation": "O, dün qonağı qarşıladı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقْبِلُ الضَّيْفَ",
        "translation": "qonağı qarşılayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقْبِلُ الضَّيْفَ الآنَ.",
            "translation": "O, indi qonağı qarşılayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقْبِلِ الضَّيْفَ",
        "translation": "qonağı qarşıla!",
        "examples": [
          {
            "arabic": "اِسْتَقْبِلِ الضَّيْفَ.",
            "translation": "qonağı qarşıla!"
          }
        ]
      }
    }
  },
  {
    "id": 286,
    "arabic": "أَكْرَمَ الضَّيْفَ",
    "meaning": "qonağa ikram etmək",
    "forms": {
      "past": {
        "arabic": "أَكْرَمَ الضَّيْفَ",
        "translation": "qonağa ikram etdi",
        "examples": [
          {
            "arabic": "هُوَ أَكْرَمَ الضَّيْفَ أَمْسِ.",
            "translation": "O, dün qonağa ikram etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُكْرِمُ الضَّيْفَ",
        "translation": "qonağa ikram edir",
        "examples": [
          {
            "arabic": "هُوَ يُكْرِمُ الضَّيْفَ الآنَ.",
            "translation": "O, indi qonağa ikram etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَكْرِمِ الضَّيْفَ",
        "translation": "qonağa ikram et!",
        "examples": [
          {
            "arabic": "أَكْرِمِ الضَّيْفَ.",
            "translation": "qonağa ikram et!"
          }
        ]
      }
    }
  },
  {
    "id": 287,
    "arabic": "اِسْتَقَرَّ",
    "meaning": "yerləşmək, sabit olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَرَّ",
        "translation": "yerləşdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَرَّ أَمْسِ.",
            "translation": "O, dün yerləşməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِرُّ",
        "translation": "yerləşir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِرُّ الآنَ.",
            "translation": "O, indi yerləşməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِرَّ",
        "translation": "yerləş!",
        "examples": [
          {
            "arabic": "اِسْتَقِرَّ.",
            "translation": "yerləşmək!"
          }
        ]
      }
    }
  },
  {
    "id": 288,
    "arabic": "اِسْتَعَدَّ",
    "meaning": "hazırlaşmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَدَّ",
        "translation": "hazırlaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَدَّ أَمْسِ.",
            "translation": "O, dün hazırlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِدُّ",
        "translation": "hazırlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِدُّ الآنَ.",
            "translation": "O, indi hazırlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِدَّ",
        "translation": "hazırlaş!",
        "examples": [
          {
            "arabic": "اِسْتَعِدَّ.",
            "translation": "hazırlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 289,
    "arabic": "اِسْتَرَاحَ",
    "meaning": "istirahət etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَرَاحَ",
        "translation": "istirahət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَرَاحَ أَمْسِ.",
            "translation": "O, dün istirahət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَرِيحُ",
        "translation": "istirahət edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَرِيحُ الآنَ.",
            "translation": "O, indi istirahət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَرِحْ",
        "translation": "istirahət et!",
        "examples": [
          {
            "arabic": "اِسْتَرِحْ.",
            "translation": "istirahət et!"
          }
        ]
      }
    }
  },
  {
    "id": 290,
    "arabic": "تَرَوَّى",
    "meaning": "düşünmək, tələsməmək",
    "forms": {
      "past": {
        "arabic": "تَرَوَّى",
        "translation": "düşündü",
        "examples": [
          {
            "arabic": "هُوَ تَرَوَّى أَمْسِ.",
            "translation": "O, dün düşünməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَرَوَّى",
        "translation": "düşünür",
        "examples": [
          {
            "arabic": "هُوَ يَتَرَوَّى الآنَ.",
            "translation": "O, indi düşünməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَرَوَّ",
        "translation": "düşün!",
        "examples": [
          {
            "arabic": "تَرَوَّ.",
            "translation": "düşünmək!"
          }
        ]
      }
    }
  },
  {
    "id": 291,
    "arabic": "تَأَمَّلَ",
    "meaning": "düşünmək, təfəkkür etmək",
    "forms": {
      "past": {
        "arabic": "تَأَمَّلَ",
        "translation": "təfəkkür etdi",
        "examples": [
          {
            "arabic": "هُوَ تَأَمَّلَ أَمْسِ.",
            "translation": "O, dün düşünməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَمَّلُ",
        "translation": "təfəkkür edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَمَّلُ الآنَ.",
            "translation": "O, indi düşünməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَمَّلْ",
        "translation": "təfəkkür et!",
        "examples": [
          {
            "arabic": "تَأَمَّلْ.",
            "translation": "düşünmək!"
          }
        ]
      }
    }
  },
  {
    "id": 292,
    "arabic": "تَفَكَّرَ",
    "meaning": "fikirləşmək, dərin düşünmək",
    "forms": {
      "past": {
        "arabic": "تَفَكَّرَ",
        "translation": "fikirləşdi",
        "examples": [
          {
            "arabic": "هُوَ تَفَكَّرَ أَمْسِ.",
            "translation": "O, dün fikirləşməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَكَّرُ",
        "translation": "fikirləşir",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَكَّرُ الآنَ.",
            "translation": "O, indi fikirləşməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَفَكَّرْ",
        "translation": "fikirləş!",
        "examples": [
          {
            "arabic": "تَفَكَّرْ.",
            "translation": "fikirləşmək!"
          }
        ]
      }
    }
  },
  {
    "id": 293,
    "arabic": "اِتَّعَظَ",
    "meaning": "ibrət almaq, öyüd almaq",
    "forms": {
      "past": {
        "arabic": "اِتَّعَظَ",
        "translation": "ibrət aldı",
        "examples": [
          {
            "arabic": "هُوَ اِتَّعَظَ أَمْسِ.",
            "translation": "O, dün ibrət almaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّعِظُ",
        "translation": "ibrət alır",
        "examples": [
          {
            "arabic": "هُوَ يَتَّعِظُ الآنَ.",
            "translation": "O, indi ibrət almaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّعِظْ",
        "translation": "ibrət al!",
        "examples": [
          {
            "arabic": "اِتَّعِظْ.",
            "translation": "ibrət almaq!"
          }
        ]
      }
    }
  },
  {
    "id": 294,
    "arabic": "اِسْتَفَادَ",
    "meaning": "faydalanmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَفَادَ",
        "translation": "faydalandı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَفَادَ أَمْسِ.",
            "translation": "O, dün faydalandı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَفِيدُ",
        "translation": "faydalanır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَفِيدُ الآنَ.",
            "translation": "O, indi faydalanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَفِدْ",
        "translation": "faydalan!",
        "examples": [
          {
            "arabic": "اِسْتَفِدْ.",
            "translation": "faydalan!"
          }
        ]
      }
    }
  },
  {
    "id": 295,
    "arabic": "أَفَادَ",
    "meaning": "fayda vermək, məlumat vermək",
    "forms": {
      "past": {
        "arabic": "أَفَادَ",
        "translation": "fayda verdi",
        "examples": [
          {
            "arabic": "هُوَ أَفَادَ أَمْسِ.",
            "translation": "O, dün fayda verməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُفِيدُ",
        "translation": "fayda verir",
        "examples": [
          {
            "arabic": "هُوَ يُفِيدُ الآنَ.",
            "translation": "O, indi fayda verməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفِدْ",
        "translation": "fayda ver!",
        "examples": [
          {
            "arabic": "أَفِدْ.",
            "translation": "fayda vermək!"
          }
        ]
      }
    }
  },
  {
    "id": 296,
    "arabic": "اِسْتَفْسَرَ عَنِ الحُكْمِ",
    "meaning": "hökm barədə soruşmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَفْسَرَ عَنِ الحُكْمِ",
        "translation": "hökm barədə soruşdu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَفْسَرَ عَنِ الحُكْمِ أَمْسِ.",
            "translation": "O, dün hökm barədə soruşdu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَفْسِرُ عَنِ الحُكْمِ",
        "translation": "hökm barədə soruşur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَفْسِرُ عَنِ الحُكْمِ الآنَ.",
            "translation": "O, indi hökm barədə soruşur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَفْسِرْ عَنِ الحُكْمِ",
        "translation": "hökm barədə soruş!",
        "examples": [
          {
            "arabic": "اِسْتَفْسِرْ عَنِ الحُكْمِ.",
            "translation": "hökm barədə soruş!"
          }
        ]
      }
    }
  },
  {
    "id": 297,
    "arabic": "اِجْتَهَدَ فِي العِبَادَةِ",
    "meaning": "ibadətdə səy göstərmək",
    "forms": {
      "past": {
        "arabic": "اِجْتَهَدَ فِي العِبَادَةِ",
        "translation": "ibadətdə səy göstərdi",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَهَدَ فِي العِبَادَةِ أَمْسِ.",
            "translation": "O, dün ibadətdə səy göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَهِدُ فِي العِبَادَةِ",
        "translation": "ibadətdə səy göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَهِدُ فِي العِبَادَةِ الآنَ.",
            "translation": "O, indi ibadətdə səy göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَهِدْ فِي العِبَادَةِ",
        "translation": "ibadətdə səy göstər!",
        "examples": [
          {
            "arabic": "اِجْتَهِدْ فِي العِبَادَةِ.",
            "translation": "ibadətdə səy göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 298,
    "arabic": "اِسْتَمَرَّ فِي الطَّاعَةِ",
    "meaning": "itaətdə davamlı olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمَرَّ فِي الطَّاعَةِ",
        "translation": "itaətdə davam etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمَرَّ فِي الطَّاعَةِ أَمْسِ.",
            "translation": "O, dün itaətdə davamlı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمِرُّ فِي الطَّاعَةِ",
        "translation": "itaətdə davam edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمِرُّ فِي الطَّاعَةِ الآنَ.",
            "translation": "O, indi itaətdə davamlı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمِرَّ فِي الطَّاعَةِ",
        "translation": "itaətdə davam et!",
        "examples": [
          {
            "arabic": "اِسْتَمِرَّ فِي الطَّاعَةِ.",
            "translation": "itaətdə davamlı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 299,
    "arabic": "اِنْقَطَعَ عَنِ المَعْصِيَةِ",
    "meaning": "günahdan çəkinmək, tərk etmək",
    "forms": {
      "past": {
        "arabic": "اِنْقَطَعَ عَنِ المَعْصِيَةِ",
        "translation": "günahdan çəkindi",
        "examples": [
          {
            "arabic": "هُوَ اِنْقَطَعَ عَنِ المَعْصِيَةِ أَمْسِ.",
            "translation": "O, dün günahdan çəkinməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقَطِعُ عَنِ المَعْصِيَةِ",
        "translation": "günahdan çəkinir",
        "examples": [
          {
            "arabic": "هُوَ يَنْقَطِعُ عَنِ المَعْصِيَةِ الآنَ.",
            "translation": "O, indi günahdan çəkinməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْقَطِعْ عَنِ المَعْصِيَةِ",
        "translation": "günahdan çəkin!",
        "examples": [
          {
            "arabic": "اِنْقَطِعْ عَنِ المَعْصِيَةِ.",
            "translation": "günahdan çəkinmək!"
          }
        ]
      }
    }
  },
  {
    "id": 300,
    "arabic": "اِلْتَزَمَ بِالطَّاعَةِ",
    "meaning": "itaətə bağlı qalmaq",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ بِالطَّاعَةِ أَمْسِ.",
            "translation": "O, dün itaətə bağlı qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qalır",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ بِالطَّاعَةِ الآنَ.",
            "translation": "O, indi itaətə bağlı qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qal!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ بِالطَّاعَةِ.",
            "translation": "itaətə bağlı qal!"
          }
        ]
      }
    }
  },
  {
    "id": 301,
    "arabic": "اِسْتَعَاذَ",
    "meaning": "sığınmaq (Allaha)",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَاذَ",
        "translation": "sığındı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَاذَ أَمْسِ.",
            "translation": "O, dün sığınmaq (Allaha)dı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِيذُ",
        "translation": "sığınır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِيذُ الآنَ.",
            "translation": "O, indi sığınmaq (Allaha)ır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِذْ",
        "translation": "sığın!",
        "examples": [
          {
            "arabic": "اِسْتَعِذْ.",
            "translation": "sığınmaq (Allaha)!"
          }
        ]
      }
    }
  },
  {
    "id": 302,
    "arabic": "تَعَوَّذَ",
    "meaning": "sığınmaq, qorunma istəmək",
    "forms": {
      "past": {
        "arabic": "تَعَوَّذَ",
        "translation": "sığındı",
        "examples": [
          {
            "arabic": "هُوَ تَعَوَّذَ أَمْسِ.",
            "translation": "O, dün sığınmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَعَوَّذُ",
        "translation": "sığınır",
        "examples": [
          {
            "arabic": "هُوَ يَتَعَوَّذُ الآنَ.",
            "translation": "O, indi sığınmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَعَوَّذْ",
        "translation": "sığın!",
        "examples": [
          {
            "arabic": "تَعَوَّذْ.",
            "translation": "sığınmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 303,
    "arabic": "اِسْتَغْفَرَ اللَّهَ",
    "meaning": "Allahdan bağışlanma istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَغْفَرَ اللَّهَ",
        "translation": "Allahdan bağışlanma istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَغْفَرَ اللَّهَ أَمْسِ.",
            "translation": "O, dün Allahdan bağışlanma istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَغْفِرُ اللَّهَ",
        "translation": "Allahdan bağışlanma istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَغْفِرُ اللَّهَ الآنَ.",
            "translation": "O, indi Allahdan bağışlanma istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَغْفِرِ اللَّهَ",
        "translation": "Allahdan bağışlanma istə!",
        "examples": [
          {
            "arabic": "اِسْتَغْفِرِ اللَّهَ.",
            "translation": "Allahdan bağışlanma istə!"
          }
        ]
      }
    }
  },
  {
    "id": 304,
    "arabic": "دَعَا اللَّهَ",
    "meaning": "Allaha dua etmək",
    "forms": {
      "past": {
        "arabic": "دَعَا اللَّهَ",
        "translation": "Allaha dua etdi",
        "examples": [
          {
            "arabic": "هُوَ دَعَا اللَّهَ أَمْسِ.",
            "translation": "O, dün Allaha dua etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَدْعُو اللَّهَ",
        "translation": "Allaha dua edir",
        "examples": [
          {
            "arabic": "هُوَ يَدْعُو اللَّهَ الآنَ.",
            "translation": "O, indi Allaha dua etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُدْعُ اللَّهَ",
        "translation": "Allaha dua et!",
        "examples": [
          {
            "arabic": "اُدْعُ اللَّهَ.",
            "translation": "Allaha dua et!"
          }
        ]
      }
    }
  },
  {
    "id": 305,
    "arabic": "ذَكَرَ اللَّهَ",
    "meaning": "Allahı zikr etmək",
    "forms": {
      "past": {
        "arabic": "ذَكَرَ اللَّهَ",
        "translation": "Allahı zikr etdi",
        "examples": [
          {
            "arabic": "هُوَ ذَكَرَ اللَّهَ أَمْسِ.",
            "translation": "O, dün Allahı zikr etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَذْكُرُ اللَّهَ",
        "translation": "Allahı zikr edir",
        "examples": [
          {
            "arabic": "هُوَ يَذْكُرُ اللَّهَ الآنَ.",
            "translation": "O, indi Allahı zikr etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُذْكُرِ اللَّهَ",
        "translation": "Allahı zikr et!",
        "examples": [
          {
            "arabic": "اُذْكُرِ اللَّهَ.",
            "translation": "Allahı zikr et!"
          }
        ]
      }
    }
  },
  {
    "id": 306,
    "arabic": "سَبَّحَ",
    "meaning": "təsbih etmək, Allahı təqdis etmək",
    "forms": {
      "past": {
        "arabic": "سَبَّحَ",
        "translation": "təsbih etdi",
        "examples": [
          {
            "arabic": "هُوَ سَبَّحَ أَمْسِ.",
            "translation": "O, dün təsbih etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَبِّحُ",
        "translation": "təsbih edir",
        "examples": [
          {
            "arabic": "هُوَ يُسَبِّحُ الآنَ.",
            "translation": "O, indi təsbih etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَبِّحْ",
        "translation": "təsbih et!",
        "examples": [
          {
            "arabic": "سَبِّحْ.",
            "translation": "təsbih etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 307,
    "arabic": "حَمِدَ",
    "meaning": "həmd etmək, şükr etmək",
    "forms": {
      "past": {
        "arabic": "حَمِدَ",
        "translation": "həmd etdi",
        "examples": [
          {
            "arabic": "هُوَ حَمِدَ أَمْسِ.",
            "translation": "O, dün həmd etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْمَدُ",
        "translation": "həmd edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْمَدُ الآنَ.",
            "translation": "O, indi həmd etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْمَدِ اللَّهَ",
        "translation": "Allaha həmd et!",
        "examples": [
          {
            "arabic": "اِحْمَدِ اللَّهَ.",
            "translation": "həmd etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 308,
    "arabic": "كَبَّرَ",
    "meaning": "təkbir gətirmək, Allahı uca tutmaq",
    "forms": {
      "past": {
        "arabic": "كَبَّرَ",
        "translation": "təkbir gətirdi",
        "examples": [
          {
            "arabic": "هُوَ كَبَّرَ أَمْسِ.",
            "translation": "O, dün təkbir gətirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُكَبِّرُ",
        "translation": "təkbir gətirir",
        "examples": [
          {
            "arabic": "هُوَ يُكَبِّرُ الآنَ.",
            "translation": "O, indi təkbir gətirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "كَبِّرْ",
        "translation": "təkbir gətir!",
        "examples": [
          {
            "arabic": "كَبِّرْ.",
            "translation": "təkbir gətirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 309,
    "arabic": "هَلَّلَ",
    "meaning": "lə ilahə illəllah demək",
    "forms": {
      "past": {
        "arabic": "هَلَّلَ",
        "translation": "lə ilahə illəllah dedi",
        "examples": [
          {
            "arabic": "هُوَ هَلَّلَ أَمْسِ.",
            "translation": "O, dün lə ilahə illəllah dedı."
          }
        ]
      },
      "present": {
        "arabic": "يُهَلِّلُ",
        "translation": "lə ilahə illəllah deyir",
        "examples": [
          {
            "arabic": "هُوَ يُهَلِّلُ الآنَ.",
            "translation": "O, indi lə ilahə illəllah deır."
          }
        ]
      },
      "imperative": {
        "arabic": "هَلِّلْ",
        "translation": "lə ilahə illəllah de!",
        "examples": [
          {
            "arabic": "هَلِّلْ.",
            "translation": "lə ilahə illəllah de!"
          }
        ]
      }
    }
  },
  {
    "id": 310,
    "arabic": "اِسْتَعَاذَ بِاللَّهِ",
    "meaning": "Allaha sığınmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَاذَ بِاللَّهِ",
        "translation": "Allaha sığındı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَاذَ بِاللَّهِ أَمْسِ.",
            "translation": "O, dün Allaha sığındı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِيذُ بِاللَّهِ",
        "translation": "Allaha sığınır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِيذُ بِاللَّهِ الآنَ.",
            "translation": "O, indi Allaha sığınır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِذْ بِاللَّهِ",
        "translation": "Allaha sığın!",
        "examples": [
          {
            "arabic": "اِسْتَعِذْ بِاللَّهِ.",
            "translation": "Allaha sığın!"
          }
        ]
      }
    }
  },
  {
    "id": 311,
    "arabic": "اِسْتَغَاثَ بِاللَّهِ",
    "meaning": "Allahdan yardım istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَغَاثَ بِاللَّهِ",
        "translation": "Allahdan yardım istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَغَاثَ بِاللَّهِ أَمْسِ.",
            "translation": "O, dün Allahdan yardım istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَغِيثُ بِاللَّهِ",
        "translation": "Allahdan yardım istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَغِيثُ بِاللَّهِ الآنَ.",
            "translation": "O, indi Allahdan yardım istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَغِثْ بِاللَّهِ",
        "translation": "Allahdan yardım istə!",
        "examples": [
          {
            "arabic": "اِسْتَغِثْ بِاللَّهِ.",
            "translation": "Allahdan yardım istə!"
          }
        ]
      }
    }
  },
  {
    "id": 312,
    "arabic": "تَوَكَّلَ عَلَى اللَّهِ",
    "meaning": "Allaha təvəkkül et",
    "forms": {
      "past": {
        "arabic": "تَوَكَّلَ عَلَى اللَّهِ",
        "translation": "Allaha təvəkkül etdi",
        "examples": [
          {
            "arabic": "هُوَ تَوَكَّلَ عَلَى اللَّهِ أَمْسِ.",
            "translation": "O, dün Allaha təvəkkül etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَكَّلُ عَلَى اللَّهِ",
        "translation": "Allaha təvəkkül edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَكَّلُ عَلَى اللَّهِ الآنَ.",
            "translation": "O, indi Allaha təvəkkül etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَكَّلْ عَلَى اللَّهِ",
        "translation": "Allaha təvəkkül et!",
        "examples": [
          {
            "arabic": "تَوَكَّلْ عَلَى اللَّهِ.",
            "translation": "Allaha təvəkkül et!"
          }
        ]
      }
    }
  },
  {
    "id": 313,
    "arabic": "اِعْتَصَمَ بِاللَّهِ",
    "meaning": "Allahdan yapış, Ona sarıl",
    "forms": {
      "past": {
        "arabic": "اِعْتَصَمَ بِاللَّهِ",
        "translation": "Allaha sarıldı",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَصَمَ بِاللَّهِ أَمْسِ.",
            "translation": "O, dün Allahdan yapışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَصِمُ بِاللَّهِ",
        "translation": "Allaha sarılır",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَصِمُ بِاللَّهِ الآنَ.",
            "translation": "O, indi Allahdan yapışır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَصِمْ بِاللَّهِ",
        "translation": "Allaha sarıl!",
        "examples": [
          {
            "arabic": "اِعْتَصِمْ بِاللَّهِ.",
            "translation": "Allahdan yapış!"
          }
        ]
      }
    }
  },
  {
    "id": 314,
    "arabic": "اِسْتَمْسَكَ بِالحَقِّ",
    "meaning": "haqqa sarılmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمْسَكَ بِالحَقِّ",
        "translation": "haqqa sarıldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمْسَكَ بِالحَقِّ أَمْسِ.",
            "translation": "O, dün haqqa sarıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمْسِكُ بِالحَقِّ",
        "translation": "haqqa sarılır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمْسِكُ بِالحَقِّ الآنَ.",
            "translation": "O, indi haqqa sarılır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمْسِكْ بِالحَقِّ",
        "translation": "haqqa sarıl!",
        "examples": [
          {
            "arabic": "اِسْتَمْسِكْ بِالحَقِّ.",
            "translation": "haqqa sarıl!"
          }
        ]
      }
    }
  },
  {
    "id": 315,
    "arabic": "اِلْتَزَمَ بِالسُّنَّةِ",
    "meaning": "sünnəyə bağlı qalmaq",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ بِالسُّنَّةِ",
        "translation": "sünnəyə bağlı qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ بِالسُّنَّةِ أَمْسِ.",
            "translation": "O, dün sünnəyə bağlı qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ بِالسُّنَّةِ",
        "translation": "sünnəyə bağlı qalır",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ بِالسُّنَّةِ الآنَ.",
            "translation": "O, indi sünnəyə bağlı qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ بِالسُّنَّةِ",
        "translation": "sünnəyə bağlı qal!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ بِالسُّنَّةِ.",
            "translation": "sünnəyə bağlı qal!"
          }
        ]
      }
    }
  },
  {
    "id": 316,
    "arabic": "اِتَّبَعَ",
    "meaning": "tabe olmaq, izləmək",
    "forms": {
      "past": {
        "arabic": "اِتَّبَعَ",
        "translation": "tabe oldu",
        "examples": [
          {
            "arabic": "هُوَ اِتَّبَعَ أَمْسِ.",
            "translation": "O, dün tabe olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّبِعُ",
        "translation": "tabe olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَّبِعُ الآنَ.",
            "translation": "O, indi tabe olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّبِعْ",
        "translation": "tabe ol!",
        "examples": [
          {
            "arabic": "اِتَّبِعْ.",
            "translation": "tabe olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 317,
    "arabic": "اِلْتَزَمَ بِالطَّاعَةِ",
    "meaning": "itaətə bağlı qalmaq",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ بِالطَّاعَةِ أَمْسِ.",
            "translation": "O, dün itaətə bağlı qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qalır",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ بِالطَّاعَةِ الآنَ.",
            "translation": "O, indi itaətə bağlı qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qal!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ بِالطَّاعَةِ.",
            "translation": "itaətə bağlı qal!"
          }
        ]
      }
    }
  },
  {
    "id": 318,
    "arabic": "اِنْقَادَ لِلْحَقِّ",
    "meaning": "haqqa tabe olmaq",
    "forms": {
      "past": {
        "arabic": "اِنْقَادَ لِلْحَقِّ",
        "translation": "haqqa tabe oldu",
        "examples": [
          {
            "arabic": "هُوَ اِنْقَادَ لِلْحَقِّ أَمْسِ.",
            "translation": "O, dün haqqa tabe oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقَادُ لِلْحَقِّ",
        "translation": "haqqa tabe olur",
        "examples": [
          {
            "arabic": "هُوَ يَنْقَادُ لِلْحَقِّ الآنَ.",
            "translation": "O, indi haqqa tabe olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْقَدْ لِلْحَقِّ",
        "translation": "haqqa tabe ol!",
        "examples": [
          {
            "arabic": "اِنْقَدْ لِلْحَقِّ.",
            "translation": "haqqa tabe ol!"
          }
        ]
      }
    }
  },
  {
    "id": 319,
    "arabic": "خَضَعَ",
    "meaning": "itaət etmək, boyun əymək",
    "forms": {
      "past": {
        "arabic": "خَضَعَ",
        "translation": "boyun əydi",
        "examples": [
          {
            "arabic": "هُوَ خَضَعَ أَمْسِ.",
            "translation": "O, dün itaət etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْضَعُ",
        "translation": "boyun əyir",
        "examples": [
          {
            "arabic": "هُوَ يَخْضَعُ الآنَ.",
            "translation": "O, indi itaət etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْضَعْ",
        "translation": "boyun əy!",
        "examples": [
          {
            "arabic": "اِخْضَعْ.",
            "translation": "itaət etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 320,
    "arabic": "اِسْتَسْلَمَ",
    "meaning": "təslim olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَسْلَمَ",
        "translation": "təslim oldu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَسْلَمَ أَمْسِ.",
            "translation": "O, dün təslim oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَسْلِمُ",
        "translation": "təslim olur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَسْلِمُ الآنَ.",
            "translation": "O, indi təslim olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَسْلِمْ",
        "translation": "təslim ol!",
        "examples": [
          {
            "arabic": "اِسْتَسْلِمْ.",
            "translation": "təslim ol!"
          }
        ]
      }
    }
  },
  {
    "id": 321,
    "arabic": "رَضِيَ بِقَضَاءِ اللَّهِ",
    "meaning": "Allahın qəzasına razı olmaq",
    "forms": {
      "past": {
        "arabic": "رَضِيَ بِقَضَاءِ اللَّهِ",
        "translation": "Allahın qəzasına razı oldu",
        "examples": [
          {
            "arabic": "هُوَ رَضِيَ بِقَضَاءِ اللَّهِ أَمْسِ.",
            "translation": "O, dün Allahın qəzasına razı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَرْضَى بِقَضَاءِ اللَّهِ",
        "translation": "Allahın qəzasına razı olur",
        "examples": [
          {
            "arabic": "هُوَ يَرْضَى بِقَضَاءِ اللَّهِ الآنَ.",
            "translation": "O, indi Allahın qəzasına razı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْضَ بِقَضَاءِ اللَّهِ",
        "translation": "Allahın qəzasına razı ol!",
        "examples": [
          {
            "arabic": "اِرْضَ بِقَضَاءِ اللَّهِ.",
            "translation": "Allahın qəzasına razı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 322,
    "arabic": "صَبَرَ عَلَى البَلَاءِ",
    "meaning": "bəlaya səbir etmək",
    "forms": {
      "past": {
        "arabic": "صَبَرَ عَلَى البَلَاءِ",
        "translation": "bəlaya səbir etdi",
        "examples": [
          {
            "arabic": "هُوَ صَبَرَ عَلَى البَلَاءِ أَمْسِ.",
            "translation": "O, dün bəlaya səbir etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصْبِرُ عَلَى البَلَاءِ",
        "translation": "bəlaya səbir edir",
        "examples": [
          {
            "arabic": "هُوَ يَصْبِرُ عَلَى البَلَاءِ الآنَ.",
            "translation": "O, indi bəlaya səbir etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْبِرْ عَلَى البَلَاءِ",
        "translation": "bəlaya səbir et!",
        "examples": [
          {
            "arabic": "اِصْبِرْ عَلَى البَلَاءِ.",
            "translation": "bəlaya səbir et!"
          }
        ]
      }
    }
  },
  {
    "id": 323,
    "arabic": "شَكَرَ اللَّهَ عَلَى نِعَمِهِ",
    "meaning": "Allahın nemətlərinə şükr etmək",
    "forms": {
      "past": {
        "arabic": "شَكَرَ اللَّهَ عَلَى نِعَمِهِ",
        "translation": "Allahın nemətlərinə şükr etdi",
        "examples": [
          {
            "arabic": "هُوَ شَكَرَ اللَّهَ عَلَى نِعَمِهِ أَمْسِ.",
            "translation": "O, dün Allahın nemətlərinə şükr etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَشْكُرُ اللَّهَ عَلَى نِعَمِهِ",
        "translation": "Allahın nemətlərinə şükr edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْكُرُ اللَّهَ عَلَى نِعَمِهِ الآنَ.",
            "translation": "O, indi Allahın nemətlərinə şükr etür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُشْكُرِ اللَّهَ عَلَى نِعَمِهِ",
        "translation": "Allahın nemətlərinə şükr et!",
        "examples": [
          {
            "arabic": "اُشْكُرِ اللَّهَ عَلَى نِعَمِهِ.",
            "translation": "Allahın nemətlərinə şükr et!"
          }
        ]
      }
    }
  },
  {
    "id": 324,
    "arabic": "اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ",
    "meaning": "müsibət zamanı istirca etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ",
        "translation": "müsibətdə istirca etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ أَمْسِ.",
            "translation": "O, dün müsibət zamanı istirca etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَرْجِعُ عِنْدَ المُصِيبَةِ",
        "translation": "müsibətdə istirca edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَرْجِعُ عِنْدَ المُصِيبَةِ الآنَ.",
            "translation": "O, indi müsibət zamanı istirca etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَرْجِعْ عِنْدَ المُصِيبَةِ",
        "translation": "müsibətdə istirca et!",
        "examples": [
          {
            "arabic": "اِسْتَرْجِعْ عِنْدَ المُصِيبَةِ.",
            "translation": "müsibət zamanı istirca et!"
          }
        ]
      }
    }
  },
  {
    "id": 325,
    "arabic": "عَزَّى فِي المُصِيبَةِ",
    "meaning": "müsibətdə başsağlığı vermək",
    "forms": {
      "past": {
        "arabic": "عَزَّى فِي المُصِيبَةِ",
        "translation": "başsağlığı verdi",
        "examples": [
          {
            "arabic": "هُوَ عَزَّى فِي المُصِيبَةِ أَمْسِ.",
            "translation": "O, dün müsibətdə başsağlığı verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعَزِّي فِي المُصِيبَةِ",
        "translation": "başsağlığı verir",
        "examples": [
          {
            "arabic": "هُوَ يُعَزِّي فِي المُصِيبَةِ الآنَ.",
            "translation": "O, indi müsibətdə başsağlığı verır."
          }
        ]
      },
      "imperative": {
        "arabic": "عَزِّ فِي المُصِيبَةِ",
        "translation": "başsağlığı ver!",
        "examples": [
          {
            "arabic": "عَزِّ فِي المُصِيبَةِ.",
            "translation": "müsibətdə başsağlığı ver!"
          }
        ]
      }
    }
  },
  {
    "id": 326,
    "arabic": "عَادَ المَرِيضَ",
    "meaning": "xəstəni ziyarət etmək",
    "forms": {
      "past": {
        "arabic": "عَادَ المَرِيضَ",
        "translation": "xəstəni ziyarət etdi",
        "examples": [
          {
            "arabic": "هُوَ عَادَ المَرِيضَ أَمْسِ.",
            "translation": "O, dün xəstəni ziyarət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعُودُ المَرِيضَ",
        "translation": "xəstəni ziyarət edir",
        "examples": [
          {
            "arabic": "هُوَ يَعُودُ المَرِيضَ الآنَ.",
            "translation": "O, indi xəstəni ziyarət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "عُدِ المَرِيضَ",
        "translation": "xəstəni ziyarət et!",
        "examples": [
          {
            "arabic": "عُدِ المَرِيضَ.",
            "translation": "xəstəni ziyarət et!"
          }
        ]
      }
    }
  },
  {
    "id": 327,
    "arabic": "اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ",
    "meaning": "zalımların sonundan ibrət almaq",
    "forms": {
      "past": {
        "arabic": "اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ",
        "translation": "zalımların sonundan ibrət aldı",
        "examples": [
          {
            "arabic": "هُوَ اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ أَمْسِ.",
            "translation": "O, dün zalımların sonundan ibrət aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّعِظُ بِمَصَارِعِ الظَّالِمِينَ",
        "translation": "zalımların sonundan ibrət alır",
        "examples": [
          {
            "arabic": "هُوَ يَتَّعِظُ بِمَصَارِعِ الظَّالِمِينَ الآنَ.",
            "translation": "O, indi zalımların sonundan ibrət alır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّعِظْ بِمَصَارِعِ الظَّالِمِينَ",
        "translation": "zalımların sonundan ibrət al!",
        "examples": [
          {
            "arabic": "اِتَّعِظْ بِمَصَارِعِ الظَّالِمِينَ.",
            "translation": "zalımların sonundan ibrət al!"
          }
        ]
      }
    }
  },
  {
    "id": 328,
    "arabic": "تَفَكَّرَ فِي خَلْقِ اللَّهِ",
    "meaning": "Allahın yaratdıqlarında təfəkkür etmək",
    "forms": {
      "past": {
        "arabic": "تَفَكَّرَ فِي خَلْقِ اللَّهِ",
        "translation": "Allahın yaratdıqlarında təfəkkür etdi",
        "examples": [
          {
            "arabic": "هُوَ تَفَكَّرَ فِي خَلْقِ اللَّهِ أَمْسِ.",
            "translation": "O, dün Allahın yaratdıqlarında təfəkkür etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَكَّرُ فِي خَلْقِ اللَّهِ",
        "translation": "Allahın yaratdıqlarında təfəkkür edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَكَّرُ فِي خَلْقِ اللَّهِ الآنَ.",
            "translation": "O, indi Allahın yaratdıqlarında təfəkkür etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَفَكَّرْ فِي خَلْقِ اللَّهِ",
        "translation": "Allahın yaratdıqlarında təfəkkür et!",
        "examples": [
          {
            "arabic": "تَفَكَّرْ فِي خَلْقِ اللَّهِ.",
            "translation": "Allahın yaratdıqlarında təfəkkür et!"
          }
        ]
      }
    }
  },
  {
    "id": 329,
    "arabic": "تَأَمَّلَ فِي القُرْآنِ",
    "meaning": "Quranda təfəkkür etmək",
    "forms": {
      "past": {
        "arabic": "تَأَمَّلَ فِي القُرْآنِ",
        "translation": "Quranda təfəkkür etdi",
        "examples": [
          {
            "arabic": "هُوَ تَأَمَّلَ فِي القُرْآنِ أَمْسِ.",
            "translation": "O, dün Quranda təfəkkür etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَمَّلُ فِي القُرْآنِ",
        "translation": "Quranda təfəkkür edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَمَّلُ فِي القُرْآنِ الآنَ.",
            "translation": "O, indi Quranda təfəkkür etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَمَّلْ فِي القُرْآنِ",
        "translation": "Quranda təfəkkür et!",
        "examples": [
          {
            "arabic": "تَأَمَّلْ فِي القُرْآنِ.",
            "translation": "Quranda təfəkkür et!"
          }
        ]
      }
    }
  },
  {
    "id": 330,
    "arabic": "اِسْتَفَادَ مِنَ العِلْمِ",
    "meaning": "elmdən faydalanmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَفَادَ مِنَ العِلْمِ",
        "translation": "elmdən faydalandı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَفَادَ مِنَ العِلْمِ أَمْسِ.",
            "translation": "O, dün elmdən faydalandı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَفِيدُ مِنَ العِلْمِ",
        "translation": "elmdən faydalanır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَفِيدُ مِنَ العِلْمِ الآنَ.",
            "translation": "O, indi elmdən faydalanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَفِدْ مِنَ العِلْمِ",
        "translation": "elmdən faydalan!",
        "examples": [
          {
            "arabic": "اِسْتَفِدْ مِنَ العِلْمِ.",
            "translation": "elmdən faydalan!"
          }
        ]
      }
    }
  },
  {
    "id": 331,
    "arabic": "أَفَادَ غَيْرَهُ",
    "meaning": "başqasına fayda vermək",
    "forms": {
      "past": {
        "arabic": "أَفَادَ غَيْرَهُ",
        "translation": "başqasına fayda verdi",
        "examples": [
          {
            "arabic": "هُوَ أَفَادَ غَيْرَهُ أَمْسِ.",
            "translation": "O, dün başqasına fayda verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُفِيدُ غَيْرَهُ",
        "translation": "başqasına fayda verir",
        "examples": [
          {
            "arabic": "هُوَ يُفِيدُ غَيْرَهُ الآنَ.",
            "translation": "O, indi başqasına fayda verır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفِدْ غَيْرَكَ",
        "translation": "başqasına fayda ver!",
        "examples": [
          {
            "arabic": "أَفِدْ غَيْرَكَ.",
            "translation": "başqasına fayda ver!"
          }
        ]
      }
    }
  },
  {
    "id": 332,
    "arabic": "اِسْتَفْسَرَ عَنِ الحُكْمِ",
    "meaning": "hökm barədə soruşmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَفْسَرَ عَنِ الحُكْمِ",
        "translation": "hökm barədə soruşdu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَفْسَرَ عَنِ الحُكْمِ أَمْسِ.",
            "translation": "O, dün hökm barədə soruşdu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَفْسِرُ عَنِ الحُكْمِ",
        "translation": "hökm barədə soruşur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَفْسِرُ عَنِ الحُكْمِ الآنَ.",
            "translation": "O, indi hökm barədə soruşur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَفْسِرْ عَنِ الحُكْمِ",
        "translation": "hökm barədə soruş!",
        "examples": [
          {
            "arabic": "اِسْتَفْسِرْ عَنِ الحُكْمِ.",
            "translation": "hökm barədə soruş!"
          }
        ]
      }
    }
  },
  {
    "id": 333,
    "arabic": "اِجْتَهَدَ فِي العِبَادَةِ",
    "meaning": "ibadətdə səy göstərmək",
    "forms": {
      "past": {
        "arabic": "اِجْتَهَدَ فِي العِبَادَةِ",
        "translation": "ibadətdə səy göstərdi",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَهَدَ فِي العِبَادَةِ أَمْسِ.",
            "translation": "O, dün ibadətdə səy göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَهِدُ فِي العِبَادَةِ",
        "translation": "ibadətdə səy göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَهِدُ فِي العِبَادَةِ الآنَ.",
            "translation": "O, indi ibadətdə səy göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَهِدْ فِي العِبَادَةِ",
        "translation": "ibadətdə səy göstər!",
        "examples": [
          {
            "arabic": "اِجْتَهِدْ فِي العِبَادَةِ.",
            "translation": "ibadətdə səy göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 334,
    "arabic": "اِسْتَمَرَّ فِي الطَّاعَةِ",
    "meaning": "itaətdə davamlı olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمَرَّ فِي الطَّاعَةِ",
        "translation": "itaətdə davam etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمَرَّ فِي الطَّاعَةِ أَمْسِ.",
            "translation": "O, dün itaətdə davamlı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمِرُّ فِي الطَّاعَةِ",
        "translation": "itaətdə davam edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمِرُّ فِي الطَّاعَةِ الآنَ.",
            "translation": "O, indi itaətdə davamlı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمِرَّ فِي الطَّاعَةِ",
        "translation": "itaətdə davam et!",
        "examples": [
          {
            "arabic": "اِسْتَمِرَّ فِي الطَّاعَةِ.",
            "translation": "itaətdə davamlı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 335,
    "arabic": "اِنْقَطَعَ عَنِ المَعْصِيَةِ",
    "meaning": "günahdan çəkinmək",
    "forms": {
      "past": {
        "arabic": "اِنْقَطَعَ عَنِ المَعْصِيَةِ",
        "translation": "günahdan çəkindi",
        "examples": [
          {
            "arabic": "هُوَ اِنْقَطَعَ عَنِ المَعْصِيَةِ أَمْسِ.",
            "translation": "O, dün günahdan çəkindi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقَطِعُ عَنِ المَعْصِيَةِ",
        "translation": "günahdan çəkinir",
        "examples": [
          {
            "arabic": "هُوَ يَنْقَطِعُ عَنِ المَعْصِيَةِ الآنَ.",
            "translation": "O, indi günahdan çəkinir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْقَطِعْ عَنِ المَعْصِيَةِ",
        "translation": "günahdan çəkin!",
        "examples": [
          {
            "arabic": "اِنْقَطِعْ عَنِ المَعْصِيَةِ.",
            "translation": "günahdan çəkin!"
          }
        ]
      }
    }
  },
  {
    "id": 336,
    "arabic": "اِلْتَزَمَ بِالطَّاعَةِ",
    "meaning": "itaətə bağlı qalmaq",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ بِالطَّاعَةِ أَمْسِ.",
            "translation": "O, dün itaətə bağlı qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qalır",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ بِالطَّاعَةِ الآنَ.",
            "translation": "O, indi itaətə bağlı qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ بِالطَّاعَةِ",
        "translation": "itaətə bağlı qal!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ بِالطَّاعَةِ.",
            "translation": "itaətə bağlı qal!"
          }
        ]
      }
    }
  },
  {
    "id": 337,
    "arabic": "اِسْتَمْسَكَ بِالعَقِيدَةِ",
    "meaning": "əqidəyə sarılmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمْسَكَ بِالعَقِيدَةِ",
        "translation": "əqidəyə sarıldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمْسَكَ بِالعَقِيدَةِ أَمْسِ.",
            "translation": "O, dün əqidəyə sarıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمْسِكُ بِالعَقِيدَةِ",
        "translation": "əqidəyə sarılır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمْسِكُ بِالعَقِيدَةِ الآنَ.",
            "translation": "O, indi əqidəyə sarılır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمْسِكْ بِالعَقِيدَةِ",
        "translation": "əqidəyə sarıl!",
        "examples": [
          {
            "arabic": "اِسْتَمْسِكْ بِالعَقِيدَةِ.",
            "translation": "əqidəyə sarıl!"
          }
        ]
      }
    }
  },
  {
    "id": 338,
    "arabic": "اِتَّبَعَ السُّنَّةَ",
    "meaning": "sünnəyə tabe olmaq",
    "forms": {
      "past": {
        "arabic": "اِتَّبَعَ السُّنَّةَ",
        "translation": "sünnəyə tabe oldu",
        "examples": [
          {
            "arabic": "هُوَ اِتَّبَعَ السُّنَّةَ أَمْسِ.",
            "translation": "O, dün sünnəyə tabe oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّبِعُ السُّنَّةَ",
        "translation": "sünnəyə tabe olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَّبِعُ السُّنَّةَ الآنَ.",
            "translation": "O, indi sünnəyə tabe olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّبِعِ السُّنَّةَ",
        "translation": "sünnəyə tabe ol!",
        "examples": [
          {
            "arabic": "اِتَّبِعِ السُّنَّةَ.",
            "translation": "sünnəyə tabe ol!"
          }
        ]
      }
    }
  },
  {
    "id": 339,
    "arabic": "اِسْتَقَامَ عَلَى الحَقِّ",
    "meaning": "haqq üzərində sabit qalmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَامَ عَلَى الحَقِّ",
        "translation": "haqqda sabit qaldı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَامَ عَلَى الحَقِّ أَمْسِ.",
            "translation": "O, dün haqq üzərində sabit qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِيمُ عَلَى الحَقِّ",
        "translation": "haqqda sabit qalır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِيمُ عَلَى الحَقِّ الآنَ.",
            "translation": "O, indi haqq üzərində sabit qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِمْ عَلَى الحَقِّ",
        "translation": "haqqda sabit qal!",
        "examples": [
          {
            "arabic": "اِسْتَقِمْ عَلَى الحَقِّ.",
            "translation": "haqq üzərində sabit qal!"
          }
        ]
      }
    }
  },
  {
    "id": 340,
    "arabic": "اِخْتَارَ مَا يُرْضِي اللَّهَ",
    "meaning": "Allahı razı salanı seçmək",
    "forms": {
      "past": {
        "arabic": "اِخْتَارَ مَا يُرْضِي اللَّهَ",
        "translation": "Allahı razı salanı seçdi",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَارَ مَا يُرْضِي اللَّهَ أَمْسِ.",
            "translation": "O, dün Allahı razı salanı seçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَارُ مَا يُرْضِي اللَّهَ",
        "translation": "Allahı razı salanı seçir",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَارُ مَا يُرْضِي اللَّهَ الآنَ.",
            "translation": "O, indi Allahı razı salanı seçır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْتَرْ مَا يُرْضِي اللَّهَ",
        "translation": "Allahı razı salanı seç!",
        "examples": [
          {
            "arabic": "اِخْتَرْ مَا يُرْضِي اللَّهَ.",
            "translation": "Allahı razı salanı seç!"
          }
        ]
      }
    }
  },
  {
    "id": 341,
    "arabic": "اِجْتَنَبَ الشُّبُهَاتِ",
    "meaning": "şübhəli şeylərdən uzaq durmaq",
    "forms": {
      "past": {
        "arabic": "اِجْتَنَبَ الشُّبُهَاتِ",
        "translation": "şübhəli şeylərdən uzaq durdu",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَنَبَ الشُّبُهَاتِ أَمْسِ.",
            "translation": "O, dün şübhəli şeylərdən uzaq durdu."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَنِبُ الشُّبُهَاتِ",
        "translation": "şübhəli şeylərdən uzaq durur",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَنِبُ الشُّبُهَاتِ الآنَ.",
            "translation": "O, indi şübhəli şeylərdən uzaq durur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَنِبِ الشُّبُهَاتِ",
        "translation": "şübhəli şeylərdən uzaq dur!",
        "examples": [
          {
            "arabic": "اِجْتَنِبِ الشُّبُهَاتِ.",
            "translation": "şübhəli şeylərdən uzaq dur!"
          }
        ]
      }
    }
  },
  {
    "id": 342,
    "arabic": "اِلْتَزَمَ بِآدَابِ الإِسْلَامِ",
    "meaning": "İslam ədəblərinə riayət etmək",
    "forms": {
      "past": {
        "arabic": "اِلْتَزَمَ بِآدَابِ الإِسْلَامِ",
        "translation": "İslam ədəblərinə riayət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَزَمَ بِآدَابِ الإِسْلَامِ أَمْسِ.",
            "translation": "O, dün İslam ədəblərinə riayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَزِمُ بِآدَابِ الإِسْلَامِ",
        "translation": "İslam ədəblərinə riayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَزِمُ بِآدَابِ الإِسْلَامِ الآنَ.",
            "translation": "O, indi İslam ədəblərinə riayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَزِمْ بِآدَابِ الإِسْلَامِ",
        "translation": "İslam ədəblərinə riayət et!",
        "examples": [
          {
            "arabic": "اِلْتَزِمْ بِآدَابِ الإِسْلَامِ.",
            "translation": "İslam ədəblərinə riayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 343,
    "arabic": "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ",
    "meaning": "girməzdən əvvəl icazə istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ",
        "translation": "girməzdən əvvəl icazə istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَأْذَنَ قَبْلَ الدُّخُولِ أَمْسِ.",
            "translation": "O, dün girməzdən əvvəl icazə istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَأْذِنُ قَبْلَ الدُّخُولِ",
        "translation": "girməzdən əvvəl icazə istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَأْذِنُ قَبْلَ الدُّخُولِ الآنَ.",
            "translation": "O, indi girməzdən əvvəl icazə istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَأْذِنْ قَبْلَ الدُّخُولِ",
        "translation": "girməzdən əvvəl icazə istə!",
        "examples": [
          {
            "arabic": "اِسْتَأْذِنْ قَبْلَ الدُّخُولِ.",
            "translation": "girməzdən əvvəl icazə istə!"
          }
        ]
      }
    }
  },
  {
    "id": 344,
    "arabic": "اِسْتَقْبَلَ الضَّيْفَ",
    "meaning": "qonağı qarşılamaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقْبَلَ الضَّيْفَ",
        "translation": "qonağı qarşıladı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقْبَلَ الضَّيْفَ أَمْسِ.",
            "translation": "O, dün qonağı qarşıladı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقْبِلُ الضَّيْفَ",
        "translation": "qonağı qarşılayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقْبِلُ الضَّيْفَ الآنَ.",
            "translation": "O, indi qonağı qarşılayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقْبِلِ الضَّيْفَ",
        "translation": "qonağı qarşıla!",
        "examples": [
          {
            "arabic": "اِسْتَقْبِلِ الضَّيْفَ.",
            "translation": "qonağı qarşıla!"
          }
        ]
      }
    }
  },
  {
    "id": 345,
    "arabic": "أَكْرَمَ الضَّيْفَ",
    "meaning": "qonağa ikram etmək",
    "forms": {
      "past": {
        "arabic": "أَكْرَمَ الضَّيْفَ",
        "translation": "qonağa ikram etdi",
        "examples": [
          {
            "arabic": "هُوَ أَكْرَمَ الضَّيْفَ أَمْسِ.",
            "translation": "O, dün qonağa ikram etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُكْرِمُ الضَّيْفَ",
        "translation": "qonağa ikram edir",
        "examples": [
          {
            "arabic": "هُوَ يُكْرِمُ الضَّيْفَ الآنَ.",
            "translation": "O, indi qonağa ikram etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَكْرِمِ الضَّيْفَ",
        "translation": "qonağa ikram et!",
        "examples": [
          {
            "arabic": "أَكْرِمِ الضَّيْفَ.",
            "translation": "qonağa ikram et!"
          }
        ]
      }
    }
  },
  {
    "id": 346,
    "arabic": "اِسْتَقَرَّ فِي المَكَانِ",
    "meaning": "yerləşmək, sabit olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَرَّ فِي المَكَانِ",
        "translation": "yerləşdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَرَّ فِي المَكَانِ أَمْسِ.",
            "translation": "O, dün yerləşməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِرُّ فِي المَكَانِ",
        "translation": "yerləşir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِرُّ فِي المَكَانِ الآنَ.",
            "translation": "O, indi yerləşməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِرَّ فِي المَكَانِ",
        "translation": "yerləş!",
        "examples": [
          {
            "arabic": "اِسْتَقِرَّ فِي المَكَانِ.",
            "translation": "yerləşmək!"
          }
        ]
      }
    }
  },
  {
    "id": 347,
    "arabic": "اِسْتَعَدَّ لِلصَّلَاةِ",
    "meaning": "namaza hazırlaşmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَدَّ لِلصَّلَاةِ",
        "translation": "namaza hazırlaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَدَّ لِلصَّلَاةِ أَمْسِ.",
            "translation": "O, dün namaza hazırlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِدُّ لِلصَّلَاةِ",
        "translation": "namaza hazırlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِدُّ لِلصَّلَاةِ الآنَ.",
            "translation": "O, indi namaza hazırlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِدَّ لِلصَّلَاةِ",
        "translation": "namaza hazırlaş!",
        "examples": [
          {
            "arabic": "اِسْتَعِدَّ لِلصَّلَاةِ.",
            "translation": "namaza hazırlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 348,
    "arabic": "اِسْتَرَاحَ بَعْدَ العَمَلِ",
    "meaning": "işdən sonra istirahət etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَرَاحَ بَعْدَ العَمَلِ",
        "translation": "işdən sonra istirahət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَرَاحَ بَعْدَ العَمَلِ أَمْسِ.",
            "translation": "O, dün işdən sonra istirahət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَرِيحُ بَعْدَ العَمَلِ",
        "translation": "işdən sonra istirahət edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَرِيحُ بَعْدَ العَمَلِ الآنَ.",
            "translation": "O, indi işdən sonra istirahət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَرِحْ بَعْدَ العَمَلِ",
        "translation": "işdən sonra istirahət et!",
        "examples": [
          {
            "arabic": "اِسْتَرِحْ بَعْدَ العَمَلِ.",
            "translation": "işdən sonra istirahət et!"
          }
        ]
      }
    }
  },
  {
    "id": 349,
    "arabic": "تَرَوَّى فِي الأَمْرِ",
    "meaning": "işdə tələsməmək, düşünmək",
    "forms": {
      "past": {
        "arabic": "تَرَوَّى فِي الأَمْرِ",
        "translation": "işdə düşündü",
        "examples": [
          {
            "arabic": "هُوَ تَرَوَّى فِي الأَمْرِ أَمْسِ.",
            "translation": "O, dün işdə tələsməməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَرَوَّى فِي الأَمْرِ",
        "translation": "işdə düşünür",
        "examples": [
          {
            "arabic": "هُوَ يَتَرَوَّى فِي الأَمْرِ الآنَ.",
            "translation": "O, indi işdə tələsməməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَرَوَّ فِي الأَمْرِ",
        "translation": "işdə düşün!",
        "examples": [
          {
            "arabic": "تَرَوَّ فِي الأَمْرِ.",
            "translation": "işdə tələsməmək!"
          }
        ]
      }
    }
  },
  {
    "id": 350,
    "arabic": "تَأَمَّلَ فِي خَلْقِ اللَّهِ",
    "meaning": "Allahın yaratdıqlarında təfəkkür etmək",
    "forms": {
      "past": {
        "arabic": "تَأَمَّلَ فِي خَلْقِ اللَّهِ",
        "translation": "Allahın yaratdıqlarında təfəkkür etdi",
        "examples": [
          {
            "arabic": "هُوَ تَأَمَّلَ فِي خَلْقِ اللَّهِ أَمْسِ.",
            "translation": "O, dün Allahın yaratdıqlarında təfəkkür etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَمَّلُ فِي خَلْقِ اللَّهِ",
        "translation": "Allahın yaratdıqlarında təfəkkür edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَمَّلُ فِي خَلْقِ اللَّهِ الآنَ.",
            "translation": "O, indi Allahın yaratdıqlarında təfəkkür etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَمَّلْ فِي خَلْقِ اللَّهِ",
        "translation": "Allahın yaratdıqlarında təfəkkür et!",
        "examples": [
          {
            "arabic": "تَأَمَّلْ فِي خَلْقِ اللَّهِ.",
            "translation": "Allahın yaratdıqlarında təfəkkür et!"
          }
        ]
      }
    }
  },
  {
    "id": 351,
    "arabic": "بَحَثَ",
    "meaning": "axtarmaq",
    "forms": {
      "past": {
        "arabic": "بَحَثَ",
        "translation": "axtardı",
        "examples": [
          {
            "arabic": "هُوَ بَحَثَ أَمْسِ.",
            "translation": "O, dün axtardı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْحَثُ",
        "translation": "axtarır",
        "examples": [
          {
            "arabic": "هُوَ يَبْحَثُ الآنَ.",
            "translation": "O, indi axtarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْحَثْ",
        "translation": "axtar!",
        "examples": [
          {
            "arabic": "اِبْحَثْ.",
            "translation": "axtar!"
          }
        ]
      }
    }
  },
  {
    "id": 352,
    "arabic": "عَرَفَ",
    "meaning": "tanımaq",
    "forms": {
      "past": {
        "arabic": "عَرَفَ",
        "translation": "tanıdı",
        "examples": [
          {
            "arabic": "هُوَ عَرَفَ أَمْسِ.",
            "translation": "O, dün tanıdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْرِفُ",
        "translation": "tanıyır",
        "examples": [
          {
            "arabic": "هُوَ يَعْرِفُ الآنَ.",
            "translation": "O, indi tanıyır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْرِفْ",
        "translation": "tanı!",
        "examples": [
          {
            "arabic": "اِعْرِفْ.",
            "translation": "tanı!"
          }
        ]
      }
    }
  },
  {
    "id": 353,
    "arabic": "وَقَفَ",
    "meaning": "dayanmaq",
    "forms": {
      "past": {
        "arabic": "وَقَفَ",
        "translation": "dayandı",
        "examples": [
          {
            "arabic": "هُوَ وَقَفَ أَمْسِ.",
            "translation": "O, dün dayandı."
          }
        ]
      },
      "present": {
        "arabic": "يَقِفُ",
        "translation": "dayanır",
        "examples": [
          {
            "arabic": "هُوَ يَقِفُ الآنَ.",
            "translation": "O, indi dayanır."
          }
        ]
      },
      "imperative": {
        "arabic": "قِفْ",
        "translation": "dayan!",
        "examples": [
          {
            "arabic": "قِفْ.",
            "translation": "dayan!"
          }
        ]
      }
    }
  },
  {
    "id": 354,
    "arabic": "رَكَضَ",
    "meaning": "qaçmaq",
    "forms": {
      "past": {
        "arabic": "رَكَضَ",
        "translation": "qaçdı",
        "examples": [
          {
            "arabic": "هُوَ رَكَضَ أَمْسِ.",
            "translation": "O, dün qaçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْكُضُ",
        "translation": "qaçır",
        "examples": [
          {
            "arabic": "هُوَ يَرْكُضُ الآنَ.",
            "translation": "O, indi qaçır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْكُضْ",
        "translation": "qaç!",
        "examples": [
          {
            "arabic": "اُرْكُضْ.",
            "translation": "qaç!"
          }
        ]
      }
    }
  },
  {
    "id": 355,
    "arabic": "عَاشَ",
    "meaning": "yaşamaq",
    "forms": {
      "past": {
        "arabic": "عَاشَ",
        "translation": "yaşadı",
        "examples": [
          {
            "arabic": "هُوَ عَاشَ أَمْسِ.",
            "translation": "O, dün yaşadı."
          }
        ]
      },
      "present": {
        "arabic": "يَعِيشُ",
        "translation": "yaşayır",
        "examples": [
          {
            "arabic": "هُوَ يَعِيشُ الآنَ.",
            "translation": "O, indi yaşayır."
          }
        ]
      },
      "imperative": {
        "arabic": "عِشْ",
        "translation": "yaşa!",
        "examples": [
          {
            "arabic": "عِشْ.",
            "translation": "yaşa!"
          }
        ]
      }
    }
  },
  {
    "id": 356,
    "arabic": "مَاتَ",
    "meaning": "ölmək",
    "forms": {
      "past": {
        "arabic": "مَاتَ",
        "translation": "öldü",
        "examples": [
          {
            "arabic": "هُوَ مَاتَ أَمْسِ.",
            "translation": "O, dün öldü."
          }
        ]
      },
      "present": {
        "arabic": "يَمُوتُ",
        "translation": "ölür",
        "examples": [
          {
            "arabic": "هُوَ يَمُوتُ الآنَ.",
            "translation": "O, indi ölür."
          }
        ]
      },
      "imperative": {
        "arabic": "مُتْ",
        "translation": "öl!",
        "examples": [
          {
            "arabic": "مُتْ.",
            "translation": "öl!"
          }
        ]
      }
    }
  },
  {
    "id": 357,
    "arabic": "وُلِدَ",
    "meaning": "doğulmaq",
    "forms": {
      "past": {
        "arabic": "وُلِدَ",
        "translation": "doğuldu",
        "examples": [
          {
            "arabic": "هُوَ وُلِدَ أَمْسِ.",
            "translation": "O, dün doğuldu."
          }
        ]
      },
      "present": {
        "arabic": "يُولَدُ",
        "translation": "doğulur",
        "examples": [
          {
            "arabic": "هُوَ يُولَدُ الآنَ.",
            "translation": "O, indi doğulur."
          }
        ]
      },
      "imperative": {
        "arabic": "—",
        "translation": "doğul!",
        "examples": [
          {
            "arabic": "—",
            "translation": "—"
          }
        ]
      }
    }
  },
  {
    "id": 358,
    "arabic": "اِبْتَسَمَ",
    "meaning": "gülümsəmək",
    "forms": {
      "past": {
        "arabic": "اِبْتَسَمَ",
        "translation": "gülümsədi",
        "examples": [
          {
            "arabic": "هُوَ اِبْتَسَمَ أَمْسِ.",
            "translation": "O, dün gülümsədi."
          }
        ]
      },
      "present": {
        "arabic": "يَبْتَسِمُ",
        "translation": "gülümsəyir",
        "examples": [
          {
            "arabic": "هُوَ يَبْتَسِمُ الآنَ.",
            "translation": "O, indi gülümsəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْتَسِمْ",
        "translation": "gülümsə!",
        "examples": [
          {
            "arabic": "اِبْتَسِمْ.",
            "translation": "gülümsə!"
          }
        ]
      }
    }
  },
  {
    "id": 359,
    "arabic": "أَمِنَ",
    "meaning": "əmin olmaq",
    "forms": {
      "past": {
        "arabic": "أَمِنَ",
        "translation": "əmin oldu",
        "examples": [
          {
            "arabic": "هُوَ أَمِنَ أَمْسِ.",
            "translation": "O, dün əmin oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَأْمَنُ",
        "translation": "əmin olur",
        "examples": [
          {
            "arabic": "هُوَ يَأْمَنُ الآنَ.",
            "translation": "O, indi əmin olur."
          }
        ]
      },
      "imperative": {
        "arabic": "ائْمَنْ",
        "translation": "əmin ol!",
        "examples": [
          {
            "arabic": "ائْمَنْ.",
            "translation": "əmin ol!"
          }
        ]
      }
    }
  },
  {
    "id": 360,
    "arabic": "أَحَبَّ",
    "meaning": "sevmək",
    "forms": {
      "past": {
        "arabic": "أَحَبَّ",
        "translation": "sevdi",
        "examples": [
          {
            "arabic": "هُوَ أَحَبَّ أَمْسِ.",
            "translation": "O, dün sevdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحِبُّ",
        "translation": "sevir",
        "examples": [
          {
            "arabic": "هُوَ يُحِبُّ الآنَ.",
            "translation": "O, indi sevir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَحْبِبْ",
        "translation": "sev!",
        "examples": [
          {
            "arabic": "أَحْبِبْ.",
            "translation": "sev!"
          }
        ]
      }
    }
  },
  {
    "id": 361,
    "arabic": "رَغِبَ",
    "meaning": "istəmək",
    "forms": {
      "past": {
        "arabic": "رَغِبَ",
        "translation": "istədi",
        "examples": [
          {
            "arabic": "هُوَ رَغِبَ أَمْسِ.",
            "translation": "O, dün istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْغَبُ",
        "translation": "istəyir",
        "examples": [
          {
            "arabic": "هُوَ يَرْغَبُ الآنَ.",
            "translation": "O, indi istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْغَبْ",
        "translation": "istə!",
        "examples": [
          {
            "arabic": "اِرْغَبْ.",
            "translation": "istə!"
          }
        ]
      }
    }
  },
  {
    "id": 362,
    "arabic": "طَلَبَ",
    "meaning": "istəmək, tələb etmək",
    "forms": {
      "past": {
        "arabic": "طَلَبَ",
        "translation": "istədi / tələb etdi",
        "examples": [
          {
            "arabic": "هُوَ طَلَبَ أَمْسِ.",
            "translation": "O, dün istədi / tələb etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَطْلُبُ",
        "translation": "istəyir / tələb edir",
        "examples": [
          {
            "arabic": "هُوَ يَطْلُبُ الآنَ.",
            "translation": "O, indi istəyir / tələb edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُطْلُبْ",
        "translation": "istə! / tələb et!",
        "examples": [
          {
            "arabic": "اُطْلُبْ.",
            "translation": "istə! / tələb et!"
          }
        ]
      }
    }
  },
  {
    "id": 363,
    "arabic": "أَرَادَ",
    "meaning": "istəmək",
    "forms": {
      "past": {
        "arabic": "أَرَادَ",
        "translation": "istədi",
        "examples": [
          {
            "arabic": "هُوَ أَرَادَ أَمْسِ.",
            "translation": "O, dün istədi."
          }
        ]
      },
      "present": {
        "arabic": "يُرِيدُ",
        "translation": "istəyir",
        "examples": [
          {
            "arabic": "هُوَ يُرِيدُ الآنَ.",
            "translation": "O, indi istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَرِدْ",
        "translation": "istə!",
        "examples": [
          {
            "arabic": "أَرِدْ.",
            "translation": "istə!"
          }
        ]
      }
    }
  },
  {
    "id": 364,
    "arabic": "اِحْتَاجَ",
    "meaning": "ehtiyac duymaq",
    "forms": {
      "past": {
        "arabic": "اِحْتَاجَ",
        "translation": "ehtiyac duydu",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَاجَ أَمْسِ.",
            "translation": "O, dün ehtiyac duydu."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَاجُ",
        "translation": "ehtiyac duyur",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَاجُ الآنَ.",
            "translation": "O, indi ehtiyac duyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَجْ",
        "translation": "ehtiyac duy!",
        "examples": [
          {
            "arabic": "اِحْتَجْ.",
            "translation": "ehtiyac duy!"
          }
        ]
      }
    }
  },
  {
    "id": 365,
    "arabic": "اِسْتَطَاعَ",
    "meaning": "bacarmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَطَاعَ",
        "translation": "bacardı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَطَاعَ أَمْسِ.",
            "translation": "O, dün bacardı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَطِيعُ",
        "translation": "bacarır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَطِيعُ الآنَ.",
            "translation": "O, indi bacarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَطِعْ",
        "translation": "bacar!",
        "examples": [
          {
            "arabic": "اِسْتَطِعْ.",
            "translation": "bacar!"
          }
        ]
      }
    }
  },
  {
    "id": 366,
    "arabic": "قَدَرَ",
    "meaning": "bacarmaq",
    "forms": {
      "past": {
        "arabic": "قَدَرَ",
        "translation": "bacardı",
        "examples": [
          {
            "arabic": "هُوَ قَدَرَ أَمْسِ.",
            "translation": "O, dün bacardı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْدِرُ",
        "translation": "bacarır",
        "examples": [
          {
            "arabic": "هُوَ يَقْدِرُ الآنَ.",
            "translation": "O, indi bacarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْدِرْ",
        "translation": "bacar!",
        "examples": [
          {
            "arabic": "اِقْدِرْ.",
            "translation": "bacar!"
          }
        ]
      }
    }
  },
  {
    "id": 367,
    "arabic": "حَاوَلَ",
    "meaning": "cəhd etmək",
    "forms": {
      "past": {
        "arabic": "حَاوَلَ",
        "translation": "cəhd etdi",
        "examples": [
          {
            "arabic": "هُوَ حَاوَلَ أَمْسِ.",
            "translation": "O, dün cəhd etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحَاوِلُ",
        "translation": "cəhd edir",
        "examples": [
          {
            "arabic": "هُوَ يُحَاوِلُ الآنَ.",
            "translation": "O, indi cəhd edir."
          }
        ]
      },
      "imperative": {
        "arabic": "حَاوِلْ",
        "translation": "cəhd et!",
        "examples": [
          {
            "arabic": "حَاوِلْ.",
            "translation": "cəhd et!"
          }
        ]
      }
    }
  },
  {
    "id": 368,
    "arabic": "نَجَحَ",
    "meaning": "uğur qazanmaq",
    "forms": {
      "past": {
        "arabic": "نَجَحَ",
        "translation": "uğur qazandı",
        "examples": [
          {
            "arabic": "هُوَ نَجَحَ أَمْسِ.",
            "translation": "O, dün uğur qazandı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْجَحُ",
        "translation": "uğur qazanır",
        "examples": [
          {
            "arabic": "هُوَ يَنْجَحُ الآنَ.",
            "translation": "O, indi uğur qazanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْجَحْ",
        "translation": "uğur qazan!",
        "examples": [
          {
            "arabic": "اِنْجَحْ.",
            "translation": "uğur qazan!"
          }
        ]
      }
    }
  },
  {
    "id": 369,
    "arabic": "فَشِلَ",
    "meaning": "uğursuz olmaq",
    "forms": {
      "past": {
        "arabic": "فَشِلَ",
        "translation": "uğursuz oldu",
        "examples": [
          {
            "arabic": "هُوَ فَشِلَ أَمْسِ.",
            "translation": "O, dün uğursuz oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَفْشَلُ",
        "translation": "uğursuz olur",
        "examples": [
          {
            "arabic": "هُوَ يَفْشَلُ الآنَ.",
            "translation": "O, indi uğursuz olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْشَلْ",
        "translation": "uğursuz ol!",
        "examples": [
          {
            "arabic": "اِفْشَلْ.",
            "translation": "uğursuz ol!"
          }
        ]
      }
    }
  },
  {
    "id": 370,
    "arabic": "رَبِحَ",
    "meaning": "qazanmaq",
    "forms": {
      "past": {
        "arabic": "رَبِحَ",
        "translation": "qazandı",
        "examples": [
          {
            "arabic": "هُوَ رَبِحَ أَمْسِ.",
            "translation": "O, dün qazandı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْبَحُ",
        "translation": "qazanır",
        "examples": [
          {
            "arabic": "هُوَ يَرْبَحُ الآنَ.",
            "translation": "O, indi qazanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْبَحْ",
        "translation": "qazan!",
        "examples": [
          {
            "arabic": "اِرْبَحْ.",
            "translation": "qazan!"
          }
        ]
      }
    }
  },
  {
    "id": 371,
    "arabic": "خَسِرَ",
    "meaning": "itirmək, uduzmaq",
    "forms": {
      "past": {
        "arabic": "خَسِرَ",
        "translation": "uduzdu",
        "examples": [
          {
            "arabic": "هُوَ خَسِرَ أَمْسِ.",
            "translation": "O, dünən uduzdu."
          }
        ]
      },
      "present": {
        "arabic": "يَخْسَرُ",
        "translation": "uduzur",
        "examples": [
          {
            "arabic": "هُوَ يَخْسَرُ الآنَ.",
            "translation": "O, indi uduzur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْسَرْ",
        "translation": "uduz!",
        "examples": [
          {
            "arabic": "اِخْسَرْ.",
            "translation": "uduz!"
          }
        ]
      }
    }
  },
  {
    "id": 372,
    "arabic": "فَازَ",
    "meaning": "qalib gəlmək",
    "forms": {
      "past": {
        "arabic": "فَازَ",
        "translation": "qalib gəldi",
        "examples": [
          {
            "arabic": "هُوَ فَازَ أَمْسِ.",
            "translation": "O, dün qalib gəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَفُوزُ",
        "translation": "qalib gəlir",
        "examples": [
          {
            "arabic": "هُوَ يَفُوزُ الآنَ.",
            "translation": "O, indi qalib gəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "فُزْ",
        "translation": "qalib gəl!",
        "examples": [
          {
            "arabic": "فُزْ.",
            "translation": "qalib gəl!"
          }
        ]
      }
    }
  },
  {
    "id": 373,
    "arabic": "خَرَجَ",
    "meaning": "çıxmaq",
    "forms": {
      "past": {
        "arabic": "خَرَجَ",
        "translation": "çıxtı",
        "examples": [
          {
            "arabic": "هُوَ خَرِجَ أَمْسِ.",
            "translation": "O, dün çıxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْرُجُ",
        "translation": "çıxır",
        "examples": [
          {
            "arabic": "هُوَ يَخْرُجُ الآنَ.",
            "translation": "O, indi çıxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُخْرُجْ",
        "translation": "çıx!",
        "examples": [
          {
            "arabic": "اُخْرُجْ.",
            "translation": "çıx!"
          }
        ]
      }
    }
  },
  {
    "id": 374,
    "arabic": "وَدَّعَ",
    "meaning": "yola salmaq",
    "forms": {
      "past": {
        "arabic": "وَدَّعَ",
        "translation": "yola saldı",
        "examples": [
          {
            "arabic": "هُوَ وَدَّعَ أَمْسِ.",
            "translation": "O, dün yola saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُوَدِّعُ",
        "translation": "yola salır",
        "examples": [
          {
            "arabic": "هُوَ يُوَدِّعُ الآنَ.",
            "translation": "O, indi yola salır."
          }
        ]
      },
      "imperative": {
        "arabic": "وَدِّعْ",
        "translation": "yola sal!",
        "examples": [
          {
            "arabic": "وَدِّعْ.",
            "translation": "yola sal!"
          }
        ]
      }
    }
  },
  {
    "id": 375,
    "arabic": "رَحَّبَ",
    "meaning": "xoş qarşılamaq",
    "forms": {
      "past": {
        "arabic": "رَحَّبَ",
        "translation": "xoş qarşıladı",
        "examples": [
          {
            "arabic": "هُوَ رَحَّبَ أَمْسِ.",
            "translation": "O, dün xoş qarşıladı."
          }
        ]
      },
      "present": {
        "arabic": "يُرَحِّبُ",
        "translation": "xoş qarşılayır",
        "examples": [
          {
            "arabic": "هُوَ يُرَحِّبُ الآنَ.",
            "translation": "O, indi xoş qarşılayır."
          }
        ]
      },
      "imperative": {
        "arabic": "رَحِّبْ",
        "translation": "xoş qarşıla!",
        "examples": [
          {
            "arabic": "رَحِّبْ.",
            "translation": "xoş qarşıla!"
          }
        ]
      }
    }
  },
  {
    "id": 376,
    "arabic": "اِنْضَمَّ",
    "meaning": "qoşulmaq",
    "forms": {
      "past": {
        "arabic": "اِنْضَمَّ",
        "translation": "qoşuldu",
        "examples": [
          {
            "arabic": "هُوَ اِنْضَمَّ أَمْسِ.",
            "translation": "O, dün qoşuldu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْضَمُّ",
        "translation": "qoşulur",
        "examples": [
          {
            "arabic": "هُوَ يَنْضَمُّ الآنَ.",
            "translation": "O, indi qoşulur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْضَمَّ",
        "translation": "qoşul!",
        "examples": [
          {
            "arabic": "اِنْضَمَّ.",
            "translation": "qoşul!"
          }
        ]
      }
    }
  },
  {
    "id": 377,
    "arabic": "غَادَرَ",
    "meaning": "tərk etmək",
    "forms": {
      "past": {
        "arabic": "غَادَرَ",
        "translation": "tərk etdi",
        "examples": [
          {
            "arabic": "هُوَ غَادَرَ أَمْسِ.",
            "translation": "O, dün tərk etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُغَادِرُ",
        "translation": "tərk edir",
        "examples": [
          {
            "arabic": "هُوَ يُغَادِرُ الآنَ.",
            "translation": "O, indi tərk edir."
          }
        ]
      },
      "imperative": {
        "arabic": "غَادِرْ",
        "translation": "tərk et!",
        "examples": [
          {
            "arabic": "غَادِرْ.",
            "translation": "tərk et!"
          }
        ]
      }
    }
  },
  {
    "id": 378,
    "arabic": "بَقِيَ",
    "meaning": "qalmaq",
    "forms": {
      "past": {
        "arabic": "بَقِيَ",
        "translation": "qaldı",
        "examples": [
          {
            "arabic": "هُوَ بَقِيَ أَمْسِ.",
            "translation": "O, dün qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْقَى",
        "translation": "qalır",
        "examples": [
          {
            "arabic": "هُوَ يَبْقَى الآنَ.",
            "translation": "O, indi qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْقَ",
        "translation": "qal!",
        "examples": [
          {
            "arabic": "اِبْقَ.",
            "translation": "qal!"
          }
        ]
      }
    }
  },
  {
    "id": 379,
    "arabic": "مَكُثَ",
    "meaning": "qalmaq",
    "forms": {
      "past": {
        "arabic": "مَكُثَ",
        "translation": "qaldı",
        "examples": [
          {
            "arabic": "هُوَ مَكُثَ أَمْسِ.",
            "translation": "O, dün qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَمْكُثُ",
        "translation": "qalır",
        "examples": [
          {
            "arabic": "هُوَ يَمْكُثُ الآنَ.",
            "translation": "O, indi qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُمْكُثْ",
        "translation": "qal!",
        "examples": [
          {
            "arabic": "اُمْكُثْ.",
            "translation": "qal!"
          }
        ]
      }
    }
  },
  {
    "id": 380,
    "arabic": "اِقْتَرَبَ",
    "meaning": "yaxınlaşmaq",
    "forms": {
      "past": {
        "arabic": "اِقْتَرَبَ",
        "translation": "yaxınlaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَرَبَ أَمْسِ.",
            "translation": "O, dün yaxınlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَرِبُ",
        "translation": "yaxınlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَرِبُ الآنَ.",
            "translation": "O, indi yaxınlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَرِبْ",
        "translation": "yaxınlaş!",
        "examples": [
          {
            "arabic": "اِقْتَرِبْ.",
            "translation": "yaxınlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 381,
    "arabic": "مَلَحَ",
    "meaning": "duzlamaq",
    "forms": {
      "past": {
        "arabic": "مَلَحَ",
        "translation": "duzladı",
        "examples": [
          {
            "arabic": "هُوَ مَلَحَ أَمْسِ.",
            "translation": "O, dünən duzladı."
          }
        ]
      },
      "present": {
        "arabic": "يَمْلَحُ",
        "translation": "duzlayır",
        "examples": [
          {
            "arabic": "هُوَ يَمْلَحُ الآنَ.",
            "translation": "O, indi duzlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْلَحْ",
        "translation": "duzla!",
        "examples": [
          {
            "arabic": "اِمْلَحْ.",
            "translation": "duzla!"
          }
        ]
      }
    }
  },
  {
    "id": 382,
    "arabic": "تَقَدَّمَ",
    "meaning": "irəliləmək",
    "forms": {
      "past": {
        "arabic": "تَقَدَّمَ",
        "translation": "irəlilədi",
        "examples": [
          {
            "arabic": "هُوَ تَقَدَّمَ أَمْسِ.",
            "translation": "O, dün irəlilədi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَقَدَّمُ",
        "translation": "irəliləyir",
        "examples": [
          {
            "arabic": "هُوَ يَتَقَدَّمُ الآنَ.",
            "translation": "O, indi irəliləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَقَدَّمْ",
        "translation": "irəlilə!",
        "examples": [
          {
            "arabic": "تَقَدَّمْ.",
            "translation": "irəlilə!"
          }
        ]
      }
    }
  },
  {
    "id": 383,
    "arabic": "تَأَخَّرَ",
    "meaning": "gecikmək",
    "forms": {
      "past": {
        "arabic": "تَأَخَّرَ",
        "translation": "gecikti",
        "examples": [
          {
            "arabic": "هُوَ تَأَخَّرَ أَمْسِ.",
            "translation": "O, dün gecikdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَخَّرُ",
        "translation": "gecikir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَخَّرُ الآنَ.",
            "translation": "O, indi gecikir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَخَّرْ",
        "translation": "gecik!",
        "examples": [
          {
            "arabic": "تَأَخَّرْ.",
            "translation": "gecik!"
          }
        ]
      }
    }
  },
  {
    "id": 384,
    "arabic": "سَرَّعَ",
    "meaning": "sürətləndirmək",
    "forms": {
      "past": {
        "arabic": "سَرَّعَ",
        "translation": "sürətləndirdi",
        "examples": [
          {
            "arabic": "هُوَ سَرَعَ أَمْسِ.",
            "translation": "O, dün sürətləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَرِّعُ",
        "translation": "sürətləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُسَرِّعُ الآنَ.",
            "translation": "O, indi sürətləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَرِّعْ",
        "translation": "sürətləndir!",
        "examples": [
          {
            "arabic": "سَرِّعْ.",
            "translation": "sürətləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 385,
    "arabic": "أَبْطَأَ",
    "meaning": "yavaşlatmaq",
    "forms": {
      "past": {
        "arabic": "أَبْطَأَ",
        "translation": "yavaşlatdı",
        "examples": [
          {
            "arabic": "هُوَ أَبْطَأَ أَمْسِ.",
            "translation": "O, dün yavaşlatdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبْطِئُ",
        "translation": "yavaşlatır",
        "examples": [
          {
            "arabic": "هُوَ يُبْطِئُ الآنَ.",
            "translation": "O, indi yavaşlatır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَبْطِئْ",
        "translation": "yavaşlat!",
        "examples": [
          {
            "arabic": "أَبْطِئْ.",
            "translation": "yavaşlat!"
          }
        ]
      }
    }
  },
  {
    "id": 386,
    "arabic": "تَوَقَّفَ",
    "meaning": "dayanmaq",
    "forms": {
      "past": {
        "arabic": "تَوَقَّفَ",
        "translation": "dayanda",
        "examples": [
          {
            "arabic": "هُوَ تَوَقَّفَ أَمْسِ.",
            "translation": "O, dün dayandı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَقَّفُ",
        "translation": "dayanır",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَقَّفُ الآنَ.",
            "translation": "O, indi dayanır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَقَّفْ",
        "translation": "dayan!",
        "examples": [
          {
            "arabic": "تَوَقَّفْ.",
            "translation": "dayan!"
          }
        ]
      }
    }
  },
  {
    "id": 387,
    "arabic": "اِسْتَمَرَّ",
    "meaning": "davam etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَمَرَّ",
        "translation": "davam etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمَرَّ أَمْسِ.",
            "translation": "O, dün davam etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمِرُّ",
        "translation": "davam edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمِرُّ الآنَ.",
            "translation": "O, indi davam edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمِرَّ",
        "translation": "davam et!",
        "examples": [
          {
            "arabic": "اِسْتَمِرَّ.",
            "translation": "davam et!"
          }
        ]
      }
    }
  },
  {
    "id": 388,
    "arabic": "بَدَأَ",
    "meaning": "başlamaq",
    "forms": {
      "past": {
        "arabic": "بَدَأَ",
        "translation": "başladı",
        "examples": [
          {
            "arabic": "هُوَ بَدَأَ أَمْسِ.",
            "translation": "O, dün başladı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْدَأُ",
        "translation": "başlayır",
        "examples": [
          {
            "arabic": "هُوَ يَبْدَأُ الآنَ.",
            "translation": "O, indi başlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْدَأْ",
        "translation": "başla!",
        "examples": [
          {
            "arabic": "اِبْدَأْ.",
            "translation": "başla!"
          }
        ]
      }
    }
  },
  {
    "id": 389,
    "arabic": "اِنْتَهَى",
    "meaning": "bitmək",
    "forms": {
      "past": {
        "arabic": "اِنْتَهَى",
        "translation": "bitti",
        "examples": [
          {
            "arabic": "هُوَ اِنْتَهَى أَمْسِ.",
            "translation": "O, dün bitdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْتَهِي",
        "translation": "bitir",
        "examples": [
          {
            "arabic": "هُوَ يَنْتَهِي الآنَ.",
            "translation": "O, indi bitir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْتَهِ",
        "translation": "bit!",
        "examples": [
          {
            "arabic": "اِنْتَهِ.",
            "translation": "bit!"
          }
        ]
      }
    }
  },
  {
    "id": 390,
    "arabic": "حَصَرَ",
    "meaning": "məhdudlaşdırmaq, saymaq",
    "forms": {
      "past": {
        "arabic": "حَصَرَ",
        "translation": "məhdudlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ حَصَرَ أَمْسِ.",
            "translation": "O, dünən məhdudlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْصُرُ",
        "translation": "məhdudlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يَحْصُرُ الآنَ.",
            "translation": "O, indi məhdudlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْصُرْ",
        "translation": "məhdudlaşdır!",
        "examples": [
          {
            "arabic": "اُحْصُرْ.",
            "translation": "məhdudlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 391,
    "arabic": "أَنْهَى",
    "meaning": "sona çatdırmaq",
    "forms": {
      "past": {
        "arabic": "أَنْهَى",
        "translation": "sona çatdırdı",
        "examples": [
          {
            "arabic": "هُوَ أَنْهَى أَمْسِ.",
            "translation": "O, dün sona çatdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُنْهِي",
        "translation": "sona çatdırır",
        "examples": [
          {
            "arabic": "هُوَ يُنْهِي الآنَ.",
            "translation": "O, indi sona çatdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْهِ",
        "translation": "sona çatdır!",
        "examples": [
          {
            "arabic": "أَنْهِ.",
            "translation": "sona çatdır!"
          }
        ]
      }
    }
  },
  {
    "id": 392,
    "arabic": "أَعَادَ",
    "meaning": "yenidən etmək",
    "forms": {
      "past": {
        "arabic": "أَعَادَ",
        "translation": "yenidən etdi",
        "examples": [
          {
            "arabic": "هُوَ أَعَادَ أَمْسِ.",
            "translation": "O, dün yenidən etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعِيدُ",
        "translation": "yenidən edir",
        "examples": [
          {
            "arabic": "هُوَ يُعِيدُ الآنَ.",
            "translation": "O, indi yenidən edir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعِدْ",
        "translation": "yenidən et!",
        "examples": [
          {
            "arabic": "أَعِدْ.",
            "translation": "yenidən et!"
          }
        ]
      }
    }
  },
  {
    "id": 393,
    "arabic": "كَرَّرَ",
    "meaning": "təkrarlamaq",
    "forms": {
      "past": {
        "arabic": "كَرَّرَ",
        "translation": "təkrarladı",
        "examples": [
          {
            "arabic": "هُوَ كَرَّرَ أَمْسِ.",
            "translation": "O, dün təkrarladı."
          }
        ]
      },
      "present": {
        "arabic": "يُكَرِّرُ",
        "translation": "təkrarlayır",
        "examples": [
          {
            "arabic": "هُوَ يُكَرِّرُ الآنَ.",
            "translation": "O, indi təkrarlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "كَرِّرْ",
        "translation": "təkrarla!",
        "examples": [
          {
            "arabic": "كَرِّرْ.",
            "translation": "təkrarla!"
          }
        ]
      }
    }
  },
  {
    "id": 394,
    "arabic": "غَيَّرَ",
    "meaning": "dəyişmək",
    "forms": {
      "past": {
        "arabic": "غَيَّرَ",
        "translation": "dəyişti",
        "examples": [
          {
            "arabic": "هُوَ غَيَّرَ أَمْسِ.",
            "translation": "O, dün dəyişdi."
          }
        ]
      },
      "present": {
        "arabic": "يُغَيِّرُ",
        "translation": "dəyişir",
        "examples": [
          {
            "arabic": "هُوَ يُغَيِّرُ الآنَ.",
            "translation": "O, indi dəyişir."
          }
        ]
      },
      "imperative": {
        "arabic": "غَيِّرْ",
        "translation": "dəyiş!",
        "examples": [
          {
            "arabic": "غَيِّرْ.",
            "translation": "dəyiş!"
          }
        ]
      }
    }
  },
  {
    "id": 395,
    "arabic": "بَدَّلَ",
    "meaning": "əvəz etmək",
    "forms": {
      "past": {
        "arabic": "بَدَّلَ",
        "translation": "əvəz etdi",
        "examples": [
          {
            "arabic": "هُوَ بَدَّلَ أَمْسِ.",
            "translation": "O, dün əvəz etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُبَدِّلُ",
        "translation": "əvəz edir",
        "examples": [
          {
            "arabic": "هُوَ يُبَدِّلُ الآنَ.",
            "translation": "O, indi əvəz edir."
          }
        ]
      },
      "imperative": {
        "arabic": "بَدِّلْ",
        "translation": "əvəz et!",
        "examples": [
          {
            "arabic": "بَدِّلْ.",
            "translation": "əvəz et!"
          }
        ]
      }
    }
  },
  {
    "id": 396,
    "arabic": "قَرَّرَ",
    "meaning": "qərar vermək",
    "forms": {
      "past": {
        "arabic": "قَرَّرَ",
        "translation": "qərar verdi",
        "examples": [
          {
            "arabic": "هُوَ قَرَّرَ أَمْسِ.",
            "translation": "O, dün qərar verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَرِّرُ",
        "translation": "qərar verir",
        "examples": [
          {
            "arabic": "هُوَ يُقَرِّرُ الآنَ.",
            "translation": "O, indi qərar verir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَرِّرْ",
        "translation": "qərar ver!",
        "examples": [
          {
            "arabic": "قَرِّرْ.",
            "translation": "qərar ver!"
          }
        ]
      }
    }
  },
  {
    "id": 397,
    "arabic": "اِخْتَبَرَ",
    "meaning": "sınamaq",
    "forms": {
      "past": {
        "arabic": "اِخْتَبَرَ",
        "translation": "sınadı",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَبَرَ أَمْسِ.",
            "translation": "O, dün sınadı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَبِرُ",
        "translation": "sınayır",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَبِرُ الآنَ.",
            "translation": "O, indi sınayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْتَبِرْ",
        "translation": "sına!",
        "examples": [
          {
            "arabic": "اِخْتَبِرْ.",
            "translation": "sına!"
          }
        ]
      }
    }
  },
  {
    "id": 398,
    "arabic": "جَرَّبَ",
    "meaning": "sınaqdan keçirmək",
    "forms": {
      "past": {
        "arabic": "جَرَّبَ",
        "translation": "sınaqdan keçirdi",
        "examples": [
          {
            "arabic": "هُوَ جَرَّبَ أَمْسِ.",
            "translation": "O, dün sınaqdan keçirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُجَرِّبُ",
        "translation": "sınaqdan keçirir",
        "examples": [
          {
            "arabic": "هُوَ يُجَرِّبُ الآنَ.",
            "translation": "O, indi sınaqdan keçirir."
          }
        ]
      },
      "imperative": {
        "arabic": "جَرِّبْ",
        "translation": "sınaqdan keçir!",
        "examples": [
          {
            "arabic": "جَرِّبْ.",
            "translation": "sınaqdan keçir!"
          }
        ]
      }
    }
  },
  {
    "id": 399,
    "arabic": "صَرَخَ",
    "meaning": "qışqırmaq",
    "forms": {
      "past": {
        "arabic": "صَرَخَ",
        "translation": "qışqırdı",
        "examples": [
          {
            "arabic": "هُوَ صَرَخَ أَمْسِ.",
            "translation": "O, dünən qışqırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَصْرُخُ",
        "translation": "qışqırır",
        "examples": [
          {
            "arabic": "هُوَ يَصْرُخُ الآنَ.",
            "translation": "O, indi qışqırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُصْرُخْ",
        "translation": "qışqır!",
        "examples": [
          {
            "arabic": "اُصْرُخْ.",
            "translation": "qışqır!"
          }
        ]
      }
    }
  },
  {
    "id": 400,
    "arabic": "قَطَفَ",
    "meaning": "dərmək, qoparmaq",
    "forms": {
      "past": {
        "arabic": "قَطَفَ",
        "translation": "dərdi",
        "examples": [
          {
            "arabic": "هُوَ قَطَفَ أَمْسِ.",
            "translation": "O, dünən dərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْطِفُ",
        "translation": "dərir",
        "examples": [
          {
            "arabic": "هُوَ يَقْطِفُ الآنَ.",
            "translation": "O, indi dərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْطِفْ",
        "translation": "dər!",
        "examples": [
          {
            "arabic": "اِقْطِفْ.",
            "translation": "dər!"
          }
        ]
      }
    }
  },
  {
    "id": 401,
    "arabic": "نَفَعَ",
    "meaning": "fayda vermək",
    "forms": {
      "past": {
        "arabic": "نَفَعَ",
        "translation": "fayda verdi",
        "examples": [
          {
            "arabic": "هُوَ نَفَعَ أَمْسِ.",
            "translation": "O, dün fayda verdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْفَعُ",
        "translation": "fayda verir",
        "examples": [
          {
            "arabic": "هُوَ يَنْفَعُ الآنَ.",
            "translation": "O, indi fayda verir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْفَعْ",
        "translation": "fayda ver!",
        "examples": [
          {
            "arabic": "اِنْفَعْ.",
            "translation": "fayda ver!"
          }
        ]
      }
    }
  },
  {
    "id": 402,
    "arabic": "ضَرَّ",
    "meaning": "zərər vermək",
    "forms": {
      "past": {
        "arabic": "ضَرَّ",
        "translation": "zərər verdi",
        "examples": [
          {
            "arabic": "هُوَ ضَرَّ أَمْسِ.",
            "translation": "O, dün zərər verdi."
          }
        ]
      },
      "present": {
        "arabic": "يَضُرُّ",
        "translation": "zərər verir",
        "examples": [
          {
            "arabic": "هُوَ يَضُرُّ الآنَ.",
            "translation": "O, indi zərər verir."
          }
        ]
      },
      "imperative": {
        "arabic": "ضُرَّ",
        "translation": "zərər ver!",
        "examples": [
          {
            "arabic": "ضُرَّ.",
            "translation": "zərər ver!"
          }
        ]
      }
    }
  },
  {
    "id": 403,
    "arabic": "شَرَحَ",
    "meaning": "izah etmək",
    "forms": {
      "past": {
        "arabic": "شَرَحَ",
        "translation": "izah etdi",
        "examples": [
          {
            "arabic": "هُوَ شَرَحَ أَمْسِ.",
            "translation": "O, dün izah etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَشْرَحُ",
        "translation": "izah edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْرَحُ الآنَ.",
            "translation": "O, indi izah etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْرَحْ",
        "translation": "izah et!",
        "examples": [
          {
            "arabic": "اِشْرَحْ.",
            "translation": "izah et!"
          }
        ]
      }
    }
  },
  {
    "id": 404,
    "arabic": "فَسَّرَ",
    "meaning": "təfsir etmək, izah etmək",
    "forms": {
      "past": {
        "arabic": "فَسَّرَ",
        "translation": "təfsir etdi / izah etdi",
        "examples": [
          {
            "arabic": "هُوَ فَسَّرَ أَمْسِ.",
            "translation": "O, dünən təfsir etdi / izah etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُفَسِّرُ",
        "translation": "təfsir edir / izah edir",
        "examples": [
          {
            "arabic": "هُوَ يُفَسِّرُ الآنَ.",
            "translation": "O, indi təfsir edir / izah edir."
          }
        ]
      },
      "imperative": {
        "arabic": "فَسِّرْ",
        "translation": "təfsir et! / izah et!",
        "examples": [
          {
            "arabic": "فَسِّرْ.",
            "translation": "təfsir et! / izah et!"
          }
        ]
      }
    }
  },
  {
    "id": 405,
    "arabic": "وَضَّحَ",
    "meaning": "aydınlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "وَضَّحَ",
        "translation": "aydınlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ وَضَّحَ أَمْسِ.",
            "translation": "O, dün aydınlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوَضِّحُ",
        "translation": "aydınlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُوَضِّحُ الآنَ.",
            "translation": "O, indi aydınlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "وَضِّحْ",
        "translation": "aydınlaşdır!",
        "examples": [
          {
            "arabic": "وَضِّحْ.",
            "translation": "aydınlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 406,
    "arabic": "نَسِيَ",
    "meaning": "unutmaq",
    "forms": {
      "past": {
        "arabic": "نَسِيَ",
        "translation": "unuttu",
        "examples": [
          {
            "arabic": "هُوَ نَسِيَ أَمْسِ.",
            "translation": "O, dün unutdu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْسَى",
        "translation": "unutur",
        "examples": [
          {
            "arabic": "هُوَ يَنْسَى الآنَ.",
            "translation": "O, indi unutur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْسَ",
        "translation": "unut!",
        "examples": [
          {
            "arabic": "اِنْسَ.",
            "translation": "unut!"
          }
        ]
      }
    }
  },
  {
    "id": 407,
    "arabic": "حَصَلَ",
    "meaning": "əldə etmək, baş vermək",
    "forms": {
      "past": {
        "arabic": "حَصَلَ",
        "translation": "əldə etdi",
        "examples": [
          {
            "arabic": "هُوَ حَصَلَ أَمْسِ.",
            "translation": "O, dünən əldə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْصُلُ",
        "translation": "əldə edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْصُلُ الآنَ.",
            "translation": "O, indi əldə edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْصُلْ",
        "translation": "əldə et!",
        "examples": [
          {
            "arabic": "اُحْصُلْ.",
            "translation": "əldə et!"
          }
        ]
      }
    }
  },
  {
    "id": 408,
    "arabic": "اِنْتَبَهَ",
    "meaning": "diqqət etmək",
    "forms": {
      "past": {
        "arabic": "اِنْتَبَهَ",
        "translation": "diqqət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِنْتَبَهَ أَمْسِ.",
            "translation": "O, dün diqqət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْتَبِهُ",
        "translation": "diqqət edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْتَبِهُ الآنَ.",
            "translation": "O, indi diqqət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْتَبِهْ",
        "translation": "diqqət et!",
        "examples": [
          {
            "arabic": "اِنْتَبِهْ.",
            "translation": "diqqət et!"
          }
        ]
      }
    }
  },
  {
    "id": 409,
    "arabic": "رَكَّزَ",
    "meaning": "cəmləmək",
    "forms": {
      "past": {
        "arabic": "رَكَّزَ",
        "translation": "cəmlədi",
        "examples": [
          {
            "arabic": "هُوَ رَكَّزَ أَمْسِ.",
            "translation": "O, dün cəmlədi."
          }
        ]
      },
      "present": {
        "arabic": "يُرَكِّزُ",
        "translation": "cəmləyir",
        "examples": [
          {
            "arabic": "هُوَ يُرَكِّزُ الآنَ.",
            "translation": "O, indi cəmləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "رَكِّزْ",
        "translation": "cəmlə!",
        "examples": [
          {
            "arabic": "رَكِّزْ.",
            "translation": "cəmlə!"
          }
        ]
      }
    }
  },
  {
    "id": 410,
    "arabic": "فَكَّرَ",
    "meaning": "düşünmək",
    "forms": {
      "past": {
        "arabic": "فَكَّرَ",
        "translation": "düşündü",
        "examples": [
          {
            "arabic": "هُوَ فَكَّرَ أَمْسِ.",
            "translation": "O, dün düşündü."
          }
        ]
      },
      "present": {
        "arabic": "يُفَكِّرُ",
        "translation": "düşünür",
        "examples": [
          {
            "arabic": "هُوَ يُفَكِّرُ الآنَ.",
            "translation": "O, indi düşünür."
          }
        ]
      },
      "imperative": {
        "arabic": "فَكِّرْ",
        "translation": "düşün!",
        "examples": [
          {
            "arabic": "فَكِّرْ.",
            "translation": "düşün!"
          }
        ]
      }
    }
  },
  {
    "id": 411,
    "arabic": "تَأَمَّلَ",
    "meaning": "düşünüb-daşınmaq",
    "forms": {
      "past": {
        "arabic": "تَأَمَّلَ",
        "translation": "düşünüb-daşındı",
        "examples": [
          {
            "arabic": "هُوَ تَأَمَّلَ أَمْسِ.",
            "translation": "O, dün düşünüb-daşındı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَمَّلُ",
        "translation": "düşünüb-daşınır",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَمَّلُ الآنَ.",
            "translation": "O, indi düşünüb-daşınır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَمَّلْ",
        "translation": "düşünüb-daşın!",
        "examples": [
          {
            "arabic": "تَأَمَّلْ.",
            "translation": "düşünüb-daşın!"
          }
        ]
      }
    }
  },
  {
    "id": 412,
    "arabic": "تَخَيَّلَ",
    "meaning": "xəyal etmək",
    "forms": {
      "past": {
        "arabic": "تَخَيَّلَ",
        "translation": "xəyal etdi",
        "examples": [
          {
            "arabic": "هُوَ تَخَيَّلَ أَمْسِ.",
            "translation": "O, dün xəyal etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَخَيَّلُ",
        "translation": "xəyal edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَخَيَّلُ الآنَ.",
            "translation": "O, indi xəyal etır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَخَيَّلْ",
        "translation": "xəyal et!",
        "examples": [
          {
            "arabic": "تَخَيَّلْ.",
            "translation": "xəyal et!"
          }
        ]
      }
    }
  },
  {
    "id": 413,
    "arabic": "تَوَقَّعَ",
    "meaning": "gözləmək",
    "forms": {
      "past": {
        "arabic": "تَوَقَّعَ",
        "translation": "gözlədi",
        "examples": [
          {
            "arabic": "هُوَ تَوَقَّعَ أَمْسِ.",
            "translation": "O, dün gözlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَقَّعُ",
        "translation": "gözləyir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَقَّعُ الآنَ.",
            "translation": "O, indi gözləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَقَّعْ",
        "translation": "gözlə!",
        "examples": [
          {
            "arabic": "تَوَقَّعْ.",
            "translation": "gözlə!"
          }
        ]
      }
    }
  },
  {
    "id": 414,
    "arabic": "ذَرَعَ",
    "meaning": "ölçmək, addımlamaq",
    "forms": {
      "past": {
        "arabic": "ذَرَعَ",
        "translation": "ölçdü",
        "examples": [
          {
            "arabic": "هُوَ ذَرَعَ أَمْسِ.",
            "translation": "O, dünən ölçdü."
          }
        ]
      },
      "present": {
        "arabic": "يَذْرَعُ",
        "translation": "ölçür",
        "examples": [
          {
            "arabic": "هُوَ يَذْرَعُ الآنَ.",
            "translation": "O, indi ölçür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِذْرَعْ",
        "translation": "ölç!",
        "examples": [
          {
            "arabic": "اِذْرَعْ.",
            "translation": "ölç!"
          }
        ]
      }
    }
  },
  {
    "id": 415,
    "arabic": "ظَنَّ",
    "meaning": "zənn etmək",
    "forms": {
      "past": {
        "arabic": "ظَنَّ",
        "translation": "zənn etdi",
        "examples": [
          {
            "arabic": "هُوَ ظَنَّ أَمْسِ.",
            "translation": "O, dün zənn etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَظُنُّ",
        "translation": "zənn edir",
        "examples": [
          {
            "arabic": "هُوَ يَظُنُّ الآنَ.",
            "translation": "O, indi zənn etir."
          }
        ]
      },
      "imperative": {
        "arabic": "ظُنَّ",
        "translation": "zənn et!",
        "examples": [
          {
            "arabic": "ظُنَّ.",
            "translation": "zənn et!"
          }
        ]
      }
    }
  },
  {
    "id": 416,
    "arabic": "شَكَّ",
    "meaning": "şübhələnmək",
    "forms": {
      "past": {
        "arabic": "شَكَّ",
        "translation": "şübhələndi",
        "examples": [
          {
            "arabic": "هُوَ شَكَّ أَمْسِ.",
            "translation": "O, dün şübhələndi."
          }
        ]
      },
      "present": {
        "arabic": "يَشُكُّ",
        "translation": "şübhələnir",
        "examples": [
          {
            "arabic": "هُوَ يَشُكُّ الآنَ.",
            "translation": "O, indi şübhələnir."
          }
        ]
      },
      "imperative": {
        "arabic": "شُكَّ",
        "translation": "şübhələn!",
        "examples": [
          {
            "arabic": "شُكَّ.",
            "translation": "şübhələn!"
          }
        ]
      }
    }
  },
  {
    "id": 417,
    "arabic": "تَأَكَّدَ",
    "meaning": "əmin olmaq",
    "forms": {
      "past": {
        "arabic": "تَأَكَّدَ",
        "translation": "əmin oldu",
        "examples": [
          {
            "arabic": "هُوَ تَأَكَّدَ أَمْسِ.",
            "translation": "O, dün əmin oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَكَّدُ",
        "translation": "əmin olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَكَّدُ الآنَ.",
            "translation": "O, indi əmin olur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَكَّدْ",
        "translation": "əmin ol!",
        "examples": [
          {
            "arabic": "تَأَكَّدْ.",
            "translation": "əmin ol!"
          }
        ]
      }
    }
  },
  {
    "id": 418,
    "arabic": "تَحَقَّقَ",
    "meaning": "yoxlamaq, gerçəkləşmək",
    "forms": {
      "past": {
        "arabic": "تَحَقَّقَ",
        "translation": "gerçəkləşdi / yoxlanıldı",
        "examples": [
          {
            "arabic": "هُوَ تَحَقَّقَ أَمْسِ.",
            "translation": "O, dünən gerçəkləşdi / yoxlanıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَقَّقُ",
        "translation": "gerçəkləşir / yoxlanılır",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَقَّقُ الآنَ.",
            "translation": "O, indi gerçəkləşir / yoxlanılır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَقَّقْ",
        "translation": "gerçəkləş! / yoxlan!",
        "examples": [
          {
            "arabic": "تَحَقَّقْ.",
            "translation": "gerçəkləş! / yoxlan!"
          }
        ]
      }
    }
  },
  {
    "id": 419,
    "arabic": "جَرَفَ",
    "meaning": "süpürüb aparmaq, yuyub aparmaq",
    "forms": {
      "past": {
        "arabic": "جَرَفَ",
        "translation": "süpürüb apardı",
        "examples": [
          {
            "arabic": "هُوَ جَرَفَ أَمْسِ.",
            "translation": "O, dünən süpürüb apardı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْرِفُ",
        "translation": "süpürüb aparır",
        "examples": [
          {
            "arabic": "هُوَ يَجْرِفُ الآنَ.",
            "translation": "O, indi süpürüb aparır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْرِفْ",
        "translation": "süpürüb apar!",
        "examples": [
          {
            "arabic": "اِجْرِفْ.",
            "translation": "süpürüb apar!"
          }
        ]
      }
    }
  },
  {
    "id": 420,
    "arabic": "خَرَقَ",
    "meaning": "deşmək, cırmaq",
    "forms": {
      "past": {
        "arabic": "خَرَقَ",
        "translation": "deşdi",
        "examples": [
          {
            "arabic": "هُوَ خَرَقَ أَمْسِ.",
            "translation": "O, dünən deşdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْرِقُ",
        "translation": "deşir",
        "examples": [
          {
            "arabic": "هُوَ يَخْرِقُ الآنَ.",
            "translation": "O, indi deşir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْرِقْ",
        "translation": "deş!",
        "examples": [
          {
            "arabic": "اِخْرِقْ.",
            "translation": "deş!"
          }
        ]
      }
    }
  },
  {
    "id": 421,
    "arabic": "ثَقَبَ",
    "meaning": "deşmək, dəlik açmaq",
    "forms": {
      "past": {
        "arabic": "ثَقَبَ",
        "translation": "deldi",
        "examples": [
          {
            "arabic": "هُوَ ثَقَبَ أَمْسِ.",
            "translation": "O, dünən dəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَثْقُبُ",
        "translation": "dəlir",
        "examples": [
          {
            "arabic": "هُوَ يَثْقُبُ الآنَ.",
            "translation": "O, indi dəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِثْقُبْ",
        "translation": "del!",
        "examples": [
          {
            "arabic": "اِثْقُبْ.",
            "translation": "del!"
          }
        ]
      }
    }
  },
  {
    "id": 422,
    "arabic": "دَرَّبَ",
    "meaning": "məşq etdirmək",
    "forms": {
      "past": {
        "arabic": "دَرَّبَ",
        "translation": "məşq etdirdi",
        "examples": [
          {
            "arabic": "هُوَ دَرَّبَ أَمْسِ.",
            "translation": "O, dün məşq etdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُدَرِّبُ",
        "translation": "məşq etdirir",
        "examples": [
          {
            "arabic": "هُوَ يُدَرِّبُ الآنَ.",
            "translation": "O, indi məşq etdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "دَرِّبْ",
        "translation": "məşq etdir!",
        "examples": [
          {
            "arabic": "دَرِّبْ.",
            "translation": "məşq etdir!"
          }
        ]
      }
    }
  },
  {
    "id": 423,
    "arabic": "تَدَرَّبَ",
    "meaning": "məşq etmək",
    "forms": {
      "past": {
        "arabic": "تَدَرَّبَ",
        "translation": "məşq etdi",
        "examples": [
          {
            "arabic": "هُوَ تَدَرَّبَ أَمْسِ.",
            "translation": "O, dün məşq etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَدَرَّبُ",
        "translation": "məşq edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَدَرَّبُ الآنَ.",
            "translation": "O, indi məşq etir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَدَرَّبْ",
        "translation": "məşq et!",
        "examples": [
          {
            "arabic": "تَدَرَّبْ.",
            "translation": "məşq et!"
          }
        ]
      }
    }
  },
  {
    "id": 424,
    "arabic": "تَحَدَّثَ",
    "meaning": "danışmaq",
    "forms": {
      "past": {
        "arabic": "تَحَدَّثَ",
        "translation": "danıştı",
        "examples": [
          {
            "arabic": "هُوَ تَحَدَّثَ أَمْسِ.",
            "translation": "O, dün danışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَدَّثُ",
        "translation": "danışır",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَدَّثُ الآنَ.",
            "translation": "O, indi danışır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَدَّثْ",
        "translation": "danış!",
        "examples": [
          {
            "arabic": "تَحَدَّثْ.",
            "translation": "danış!"
          }
        ]
      }
    }
  },
  {
    "id": 425,
    "arabic": "تَكَلَّمَ",
    "meaning": "danışmaq",
    "forms": {
      "past": {
        "arabic": "تَكَلَّمَ",
        "translation": "danıştı",
        "examples": [
          {
            "arabic": "هُوَ تَكَلَّمَ أَمْسِ.",
            "translation": "O, dün danışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَكَلَّمُ",
        "translation": "danışır",
        "examples": [
          {
            "arabic": "هُوَ يَتَكَلَّمُ الآنَ.",
            "translation": "O, indi danışır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَكَلَّمْ",
        "translation": "danış!",
        "examples": [
          {
            "arabic": "تَكَلَّمْ.",
            "translation": "danış!"
          }
        ]
      }
    }
  },
  {
    "id": 426,
    "arabic": "صَمَتَ",
    "meaning": "susmaq",
    "forms": {
      "past": {
        "arabic": "صَمَتَ",
        "translation": "sustu",
        "examples": [
          {
            "arabic": "هُوَ صَمَتَ أَمْسِ.",
            "translation": "O, dün susdu."
          }
        ]
      },
      "present": {
        "arabic": "يَصْمُتُ",
        "translation": "susur",
        "examples": [
          {
            "arabic": "هُوَ يَصْمُتُ الآنَ.",
            "translation": "O, indi susur."
          }
        ]
      },
      "imperative": {
        "arabic": "اُصْمُتْ",
        "translation": "sus!",
        "examples": [
          {
            "arabic": "اُصْمُتْ.",
            "translation": "sus!"
          }
        ]
      }
    }
  },
  {
    "id": 427,
    "arabic": "سَمَّى",
    "meaning": "adlandırmaq",
    "forms": {
      "past": {
        "arabic": "سَمَّى",
        "translation": "adlandırdı",
        "examples": [
          {
            "arabic": "هُوَ سَمَّى أَمْسِ.",
            "translation": "O, dün adlandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُسَمِّي",
        "translation": "adlandırır",
        "examples": [
          {
            "arabic": "هُوَ يُسَمِّي الآنَ.",
            "translation": "O, indi adlandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "سَمِّ",
        "translation": "adlandır!",
        "examples": [
          {
            "arabic": "سَمِّ.",
            "translation": "adlandır!"
          }
        ]
      }
    }
  },
  {
    "id": 428,
    "arabic": "أَخْبَرَ",
    "meaning": "xəbər vermək",
    "forms": {
      "past": {
        "arabic": "أَخْبَرَ",
        "translation": "xəbər verdi",
        "examples": [
          {
            "arabic": "هُوَ أَخْبَرَ أَمْسِ.",
            "translation": "O, dün xəbər verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُخْبِرُ",
        "translation": "xəbər verir",
        "examples": [
          {
            "arabic": "هُوَ يُخْبِرُ الآنَ.",
            "translation": "O, indi xəbər verir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَخْبِرْ",
        "translation": "xəbər ver!",
        "examples": [
          {
            "arabic": "أَخْبِرْ.",
            "translation": "xəbər ver!"
          }
        ]
      }
    }
  },
  {
    "id": 429,
    "arabic": "أَعْلَنَ",
    "meaning": "elan etmək",
    "forms": {
      "past": {
        "arabic": "أَعْلَنَ",
        "translation": "elan etdi",
        "examples": [
          {
            "arabic": "هُوَ أَعْلَنَ أَمْسِ.",
            "translation": "O, dün elan etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعْلِنُ",
        "translation": "elan edir",
        "examples": [
          {
            "arabic": "هُوَ يُعْلِنُ الآنَ.",
            "translation": "O, indi elan etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعْلِنْ",
        "translation": "elan et!",
        "examples": [
          {
            "arabic": "أَعْلِنْ.",
            "translation": "elan et!"
          }
        ]
      }
    }
  },
  {
    "id": 430,
    "arabic": "ذَاعَ",
    "meaning": "yayılmaq",
    "forms": {
      "past": {
        "arabic": "ذَاعَ",
        "translation": "yayıldı",
        "examples": [
          {
            "arabic": "هُوَ ذَاعَ أَمْسِ.",
            "translation": "O, dün yayıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَذِيعُ",
        "translation": "yayılır",
        "examples": [
          {
            "arabic": "هُوَ يَذِيعُ الآنَ.",
            "translation": "O, indi yayılır."
          }
        ]
      },
      "imperative": {
        "arabic": "ذِعْ",
        "translation": "yayıl!",
        "examples": [
          {
            "arabic": "ذِعْ.",
            "translation": "yayıl!"
          }
        ]
      }
    }
  },
  {
    "id": 431,
    "arabic": "نَشَرَ",
    "meaning": "yaymaq",
    "forms": {
      "past": {
        "arabic": "نَشَرَ",
        "translation": "yayıldı",
        "examples": [
          {
            "arabic": "هُوَ نَشَرَ أَمْسِ.",
            "translation": "O, dün yaydı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْشُرُ",
        "translation": "yayır",
        "examples": [
          {
            "arabic": "هُوَ يَنْشُرُ الآنَ.",
            "translation": "O, indi yayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْشُرْ",
        "translation": "yay!",
        "examples": [
          {
            "arabic": "اُنْشُرْ.",
            "translation": "yay!"
          }
        ]
      }
    }
  },
  {
    "id": 432,
    "arabic": "حَشَرَ",
    "meaning": "toplamaq, bir yerə yığmaq",
    "forms": {
      "past": {
        "arabic": "حَشَرَ",
        "translation": "topladı",
        "examples": [
          {
            "arabic": "هُوَ حَشَرَ أَمْسِ.",
            "translation": "O, dünən topladı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْشُرُ",
        "translation": "toplayır",
        "examples": [
          {
            "arabic": "هُوَ يَحْشُرُ الآنَ.",
            "translation": "O, indi toplayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْشُرْ",
        "translation": "topla!",
        "examples": [
          {
            "arabic": "اُحْشُرْ.",
            "translation": "topla!"
          }
        ]
      }
    }
  },
  {
    "id": 433,
    "arabic": "أَرْسَلَ",
    "meaning": "göndərmək",
    "forms": {
      "past": {
        "arabic": "أَرْسَلَ",
        "translation": "göndərdi",
        "examples": [
          {
            "arabic": "هُوَ أَرْسَلَ أَمْسِ.",
            "translation": "O, dün göndərdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرْسِلُ",
        "translation": "göndərir",
        "examples": [
          {
            "arabic": "هُوَ يُرْسِلُ الآنَ.",
            "translation": "O, indi göndərir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَرْسِلْ",
        "translation": "göndər!",
        "examples": [
          {
            "arabic": "أَرْسِلْ.",
            "translation": "göndər!"
          }
        ]
      }
    }
  },
  {
    "id": 434,
    "arabic": "اِسْتَلَمَ",
    "meaning": "qəbul etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَلَمَ",
        "translation": "qəbul etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَلَمَ أَمْسِ.",
            "translation": "O, dün qəbul etdu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَلِمُ",
        "translation": "qəbul edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَلِمُ الآنَ.",
            "translation": "O, indi qəbul etur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَلِمْ",
        "translation": "qəbul et!",
        "examples": [
          {
            "arabic": "اِسْتَلِمْ.",
            "translation": "qəbul et!"
          }
        ]
      }
    }
  },
  {
    "id": 435,
    "arabic": "تَلَقَّى",
    "meaning": "almaq, qəbul etmək",
    "forms": {
      "past": {
        "arabic": "تَلَقَّى",
        "translation": "aldı / qəbul etdi",
        "examples": [
          {
            "arabic": "هُوَ تَلَقَّى أَمْسِ.",
            "translation": "O, dün almaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَلَقَّى",
        "translation": "alır / qəbul edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَلَقَّى الآنَ.",
            "translation": "O, indi almaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَلَقَّ",
        "translation": "al! / qəbul et!",
        "examples": [
          {
            "arabic": "تَلَقَّ.",
            "translation": "almaq!"
          }
        ]
      }
    }
  },
  {
    "id": 436,
    "arabic": "اِتَّصَلَ",
    "meaning": "əlaqə saxlamaq",
    "forms": {
      "past": {
        "arabic": "اِتَّصَلَ",
        "translation": "əlaqə saxladı",
        "examples": [
          {
            "arabic": "هُوَ اِتَّصَلَ أَمْسِ.",
            "translation": "O, dün əlaqə saxladı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّصِلُ",
        "translation": "əlaqə saxlayır",
        "examples": [
          {
            "arabic": "هُوَ يَتَّصِلُ الآنَ.",
            "translation": "O, indi əlaqə saxlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّصِلْ",
        "translation": "əlaqə saxla!",
        "examples": [
          {
            "arabic": "اِتَّصِلْ.",
            "translation": "əlaqə saxla!"
          }
        ]
      }
    }
  },
  {
    "id": 437,
    "arabic": "رَدَّ",
    "meaning": "qaytarmaq, cavab vermək",
    "forms": {
      "past": {
        "arabic": "رَدَّ",
        "translation": "qaytardı / cavab verdi",
        "examples": [
          {
            "arabic": "هُوَ رَدَّ أَمْسِ.",
            "translation": "O, dün qaytarmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرُدُّ",
        "translation": "qaytarır / cavab verir",
        "examples": [
          {
            "arabic": "هُوَ يَرُدُّ الآنَ.",
            "translation": "O, indi qaytarmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "رُدَّ",
        "translation": "qaytar! / cavab ver!",
        "examples": [
          {
            "arabic": "رُدَّ.",
            "translation": "qaytarmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 438,
    "arabic": "أَعْطَى",
    "meaning": "vermək",
    "forms": {
      "past": {
        "arabic": "أَعْطَى",
        "translation": "verdi",
        "examples": [
          {
            "arabic": "هُوَ أَعْطَى أَمْسِ.",
            "translation": "O, dün verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعْطِي",
        "translation": "verir",
        "examples": [
          {
            "arabic": "هُوَ يُعْطِي الآنَ.",
            "translation": "O, indi verir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعْطِ",
        "translation": "ver!",
        "examples": [
          {
            "arabic": "أَعْطِ.",
            "translation": "ver!"
          }
        ]
      }
    }
  },
  {
    "id": 439,
    "arabic": "مَنَحَ",
    "meaning": "bəxş etmək",
    "forms": {
      "past": {
        "arabic": "مَنَحَ",
        "translation": "bəxş etdi",
        "examples": [
          {
            "arabic": "هُوَ مَنَحَ أَمْسِ.",
            "translation": "O, dün bəxş etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْنَحُ",
        "translation": "bəxş edir",
        "examples": [
          {
            "arabic": "هُوَ يَمْنَحُ الآنَ.",
            "translation": "O, indi bəxş etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْنَحْ",
        "translation": "bəxş et!",
        "examples": [
          {
            "arabic": "اِمْنَحْ.",
            "translation": "bəxş et!"
          }
        ]
      }
    }
  },
  {
    "id": 440,
    "arabic": "قَدَّمَ",
    "meaning": "təqdim etmək",
    "forms": {
      "past": {
        "arabic": "قَدَّمَ",
        "translation": "təqdim etdi",
        "examples": [
          {
            "arabic": "هُوَ قَدَّمَ أَمْسِ.",
            "translation": "O, dün təqdim etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَدِّمُ",
        "translation": "təqdim edir",
        "examples": [
          {
            "arabic": "هُوَ يُقَدِّمُ الآنَ.",
            "translation": "O, indi təqdim etir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَدِّمْ",
        "translation": "təqdim et!",
        "examples": [
          {
            "arabic": "قَدِّمْ.",
            "translation": "təqdim et!"
          }
        ]
      }
    }
  },
  {
    "id": 441,
    "arabic": "أَخَّرَ",
    "meaning": "gecikdirmək",
    "forms": {
      "past": {
        "arabic": "أَخَّرَ",
        "translation": "gecikdirdi",
        "examples": [
          {
            "arabic": "هُوَ أَخَّرَ أَمْسِ.",
            "translation": "O, dün gecikdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَخِّرُ",
        "translation": "gecikdirir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَخِّرُ الآنَ.",
            "translation": "O, indi gecikdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَخِّرْ",
        "translation": "gecikdir!",
        "examples": [
          {
            "arabic": "أَخِّرْ.",
            "translation": "gecikdir!"
          }
        ]
      }
    }
  },
  {
    "id": 442,
    "arabic": "وَضَعَ",
    "meaning": "qoymaq",
    "forms": {
      "past": {
        "arabic": "وَضَعَ",
        "translation": "qoydu",
        "examples": [
          {
            "arabic": "هُوَ وَضَعَ أَمْسِ.",
            "translation": "O, dün qoydu."
          }
        ]
      },
      "present": {
        "arabic": "يَضَعُ",
        "translation": "qoyur",
        "examples": [
          {
            "arabic": "هُوَ يَضَعُ الآنَ.",
            "translation": "O, indi qoyur."
          }
        ]
      },
      "imperative": {
        "arabic": "ضَعْ",
        "translation": "qoy!",
        "examples": [
          {
            "arabic": "ضَعْ.",
            "translation": "qoy!"
          }
        ]
      }
    }
  },
  {
    "id": 443,
    "arabic": "رَفَعَ",
    "meaning": "qaldırmaq",
    "forms": {
      "past": {
        "arabic": "رَفَعَ",
        "translation": "qaldırdı",
        "examples": [
          {
            "arabic": "هُوَ رَفَعَ أَمْسِ.",
            "translation": "O, dün qaldırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْفَعُ",
        "translation": "qaldırır",
        "examples": [
          {
            "arabic": "هُوَ يَرْفَعُ الآنَ.",
            "translation": "O, indi qaldırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْفَعْ",
        "translation": "qaldır!",
        "examples": [
          {
            "arabic": "اِرْفَعْ.",
            "translation": "qaldır!"
          }
        ]
      }
    }
  },
  {
    "id": 444,
    "arabic": "خَفَضَ",
    "meaning": "endirmək",
    "forms": {
      "past": {
        "arabic": "خَفَضَ",
        "translation": "endirdi",
        "examples": [
          {
            "arabic": "هُوَ خَفَضَ أَمْسِ.",
            "translation": "O, dün endirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْفِضُ",
        "translation": "endirir",
        "examples": [
          {
            "arabic": "هُوَ يَخْفِضُ الآنَ.",
            "translation": "O, indi endirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْفِضْ",
        "translation": "endir!",
        "examples": [
          {
            "arabic": "اِخْفِضْ.",
            "translation": "endir!"
          }
        ]
      }
    }
  },
  {
    "id": 445,
    "arabic": "حَمَلَ",
    "meaning": "daşımaq",
    "forms": {
      "past": {
        "arabic": "حَمَلَ",
        "translation": "daşıdı",
        "examples": [
          {
            "arabic": "هُوَ حَمَلَ أَمْسِ.",
            "translation": "O, dün daşıdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْمِلُ",
        "translation": "daşıyır",
        "examples": [
          {
            "arabic": "هُوَ يَحْمِلُ الآنَ.",
            "translation": "O, indi daşıyır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْمِلْ",
        "translation": "daşı!",
        "examples": [
          {
            "arabic": "اِحْمِلْ.",
            "translation": "daşı!"
          }
        ]
      }
    }
  },
  {
    "id": 446,
    "arabic": "فَصَلَ",
    "meaning": "ayırmaq",
    "forms": {
      "past": {
        "arabic": "فَصَلَ",
        "translation": "ayırdı",
        "examples": [
          {
            "arabic": "هُوَ فَصَلَ أَمْسِ.",
            "translation": "O, dün ayırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْصِلُ",
        "translation": "ayırır",
        "examples": [
          {
            "arabic": "هُوَ يَفْصِلُ الآنَ.",
            "translation": "O, indi ayırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْصِلْ",
        "translation": "ayır!",
        "examples": [
          {
            "arabic": "اِفْصِلْ.",
            "translation": "ayır!"
          }
        ]
      }
    }
  },
  {
    "id": 447,
    "arabic": "رَبَطَ",
    "meaning": "bağlamaq",
    "forms": {
      "past": {
        "arabic": "رَبَطَ",
        "translation": "bağladı",
        "examples": [
          {
            "arabic": "هُوَ رَبَطَ أَمْسِ.",
            "translation": "O, dün bağladı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْبِطُ",
        "translation": "bağlayır",
        "examples": [
          {
            "arabic": "هُوَ يَرْبِطُ الآنَ.",
            "translation": "O, indi bağlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْبِطْ",
        "translation": "bağla!",
        "examples": [
          {
            "arabic": "اِرْبِطْ.",
            "translation": "bağla!"
          }
        ]
      }
    }
  },
  {
    "id": 448,
    "arabic": "حَلَّ",
    "meaning": "həll etmək",
    "forms": {
      "past": {
        "arabic": "حَلَّ",
        "translation": "həll etdi",
        "examples": [
          {
            "arabic": "هُوَ حَلَّ أَمْسِ.",
            "translation": "O, dün həll etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحُلُّ",
        "translation": "həll edir",
        "examples": [
          {
            "arabic": "هُوَ يَحُلُّ الآنَ.",
            "translation": "O, indi həll etir."
          }
        ]
      },
      "imperative": {
        "arabic": "حُلَّ",
        "translation": "həll et!",
        "examples": [
          {
            "arabic": "حُلَّ.",
            "translation": "həll et!"
          }
        ]
      }
    }
  },
  {
    "id": 449,
    "arabic": "عَقَدَ",
    "meaning": "bağlamaq, müqavilə bağlamaq",
    "forms": {
      "past": {
        "arabic": "عَقَدَ",
        "translation": "bağladı / müqavilə bağladı",
        "examples": [
          {
            "arabic": "هُوَ عَقَدَ أَمْسِ.",
            "translation": "O, dün bağlamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْقِدُ",
        "translation": "bağlayır / müqavilə bağlayır",
        "examples": [
          {
            "arabic": "هُوَ يَعْقِدُ الآنَ.",
            "translation": "O, indi bağlamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْقِدْ",
        "translation": "bağla! / müqavilə bağla!",
        "examples": [
          {
            "arabic": "اِعْقِدْ.",
            "translation": "bağlamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 450,
    "arabic": "فَكَّ",
    "meaning": "açmaq, çözmək",
    "forms": {
      "past": {
        "arabic": "فَكَّ",
        "translation": "açdı / çözdü",
        "examples": [
          {
            "arabic": "هُوَ فَكَّ أَمْسِ.",
            "translation": "O, dünən açdı / çözdu."
          }
        ]
      },
      "present": {
        "arabic": "يَفُكُّ",
        "translation": "açır / çözür",
        "examples": [
          {
            "arabic": "هُوَ يَفُكُّ الآنَ.",
            "translation": "O, indi açır / çözür."
          }
        ]
      },
      "imperative": {
        "arabic": "فُكَّ",
        "translation": "aç! / çöz!",
        "examples": [
          {
            "arabic": "فُكَّ.",
            "translation": "aç! / çöz!"
          }
        ]
      }
    }
  },
  {
    "id": 451,
    "arabic": "قَطَعَ",
    "meaning": "kəsmək",
    "forms": {
      "past": {
        "arabic": "قَطَعَ",
        "translation": "kəstə",
        "examples": [
          {
            "arabic": "هُوَ قَطَعَ أَمْسِ.",
            "translation": "O, dün kəsdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْطَعُ",
        "translation": "kəsir",
        "examples": [
          {
            "arabic": "هُوَ يَقْطَعُ الآنَ.",
            "translation": "O, indi kəsir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْطَعْ",
        "translation": "kəs!",
        "examples": [
          {
            "arabic": "اِقْطَعْ.",
            "translation": "kəs!"
          }
        ]
      }
    }
  },
  {
    "id": 452,
    "arabic": "كَسَرَ",
    "meaning": "sındırmaq",
    "forms": {
      "past": {
        "arabic": "كَسَرَ",
        "translation": "sındırdı",
        "examples": [
          {
            "arabic": "هُوَ كَسَرَ أَمْسِ.",
            "translation": "O, dün sındırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْسِرُ",
        "translation": "sındırır",
        "examples": [
          {
            "arabic": "هُوَ يَكْسِرُ الآنَ.",
            "translation": "O, indi sındırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْسِرْ",
        "translation": "sındır!",
        "examples": [
          {
            "arabic": "اِكْسِرْ.",
            "translation": "sındır!"
          }
        ]
      }
    }
  },
  {
    "id": 453,
    "arabic": "كَسَبَ",
    "meaning": "qazanmaq",
    "forms": {
      "past": {
        "arabic": "كَسَبَ",
        "translation": "qazanda",
        "examples": [
          {
            "arabic": "هُوَ كَسَبَ أَمْسِ.",
            "translation": "O, dün qazandı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْسِبُ",
        "translation": "qazanır",
        "examples": [
          {
            "arabic": "هُوَ يَكْسِبُ الآنَ.",
            "translation": "O, indi qazanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْسِبْ",
        "translation": "qazan!",
        "examples": [
          {
            "arabic": "اِكْسِبْ.",
            "translation": "qazan!"
          }
        ]
      }
    }
  },
  {
    "id": 454,
    "arabic": "خَلَقَ",
    "meaning": "yaratmaq",
    "forms": {
      "past": {
        "arabic": "خَلَقَ",
        "translation": "yaratta",
        "examples": [
          {
            "arabic": "هُوَ خَلَقَ أَمْسِ.",
            "translation": "O, dün yaratdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْلُقُ",
        "translation": "yaratır",
        "examples": [
          {
            "arabic": "هُوَ يَخْلُقُ الآنَ.",
            "translation": "O, indi yaratır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُخْلُقْ",
        "translation": "yarat!",
        "examples": [
          {
            "arabic": "اُخْلُقْ.",
            "translation": "yarat!"
          }
        ]
      }
    }
  },
  {
    "id": 455,
    "arabic": "صَنَعَ",
    "meaning": "hazırlamaq, düzəltmək",
    "forms": {
      "past": {
        "arabic": "صَنَعَ",
        "translation": "hazırladı / düzəltdi",
        "examples": [
          {
            "arabic": "هُوَ صَنَعَ أَمْسِ.",
            "translation": "O, dünən hazırladı / düzəltdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصْنَعُ",
        "translation": "hazırlayır / düzəldir",
        "examples": [
          {
            "arabic": "هُوَ يَصْنَعُ الآنَ.",
            "translation": "O, indi hazırlayır / düzəldir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْنَعْ",
        "translation": "hazırla! / düzəlt!",
        "examples": [
          {
            "arabic": "اِصْنَعْ.",
            "translation": "hazırla! / düzəlt!"
          }
        ]
      }
    }
  },
  {
    "id": 456,
    "arabic": "أَنْجَزَ",
    "meaning": "yerinə yetirmək",
    "forms": {
      "past": {
        "arabic": "أَنْجَزَ",
        "translation": "yerinə yetirdi",
        "examples": [
          {
            "arabic": "هُوَ أَنْجَزَ أَمْسِ.",
            "translation": "O, dün yerinə yetirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُنْجِزُ",
        "translation": "yerinə yetirir",
        "examples": [
          {
            "arabic": "هُوَ يُنْجِزُ الآنَ.",
            "translation": "O, indi yerinə yetirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْجِزْ",
        "translation": "yerinə yetir!",
        "examples": [
          {
            "arabic": "أَنْجِزْ.",
            "translation": "yerinə yetir!"
          }
        ]
      }
    }
  },
  {
    "id": 457,
    "arabic": "نَفَّذَ",
    "meaning": "icra etmək",
    "forms": {
      "past": {
        "arabic": "نَفَّذَ",
        "translation": "icra etdi",
        "examples": [
          {
            "arabic": "هُوَ نَفَّذَ أَمْسِ.",
            "translation": "O, dün icra etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُنَفِّذُ",
        "translation": "icra edir",
        "examples": [
          {
            "arabic": "هُوَ يُنَفِّذُ الآنَ.",
            "translation": "O, indi icra etır."
          }
        ]
      },
      "imperative": {
        "arabic": "نَفِّذْ",
        "translation": "icra et!",
        "examples": [
          {
            "arabic": "نَفِّذْ.",
            "translation": "icra et!"
          }
        ]
      }
    }
  },
  {
    "id": 458,
    "arabic": "طَبَّقَ",
    "meaning": "tətbiq etmək",
    "forms": {
      "past": {
        "arabic": "طَبَّقَ",
        "translation": "tətbiq etdi",
        "examples": [
          {
            "arabic": "هُوَ طَبَّقَ أَمْسِ.",
            "translation": "O, dün tətbiq etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُطَبِّقُ",
        "translation": "tətbiq edir",
        "examples": [
          {
            "arabic": "هُوَ يُطَبِّقُ الآنَ.",
            "translation": "O, indi tətbiq etir."
          }
        ]
      },
      "imperative": {
        "arabic": "طَبِّقْ",
        "translation": "tətbiq et!",
        "examples": [
          {
            "arabic": "طَبِّقْ.",
            "translation": "tətbiq et!"
          }
        ]
      }
    }
  },
  {
    "id": 459,
    "arabic": "اِسْتَعَدَّ",
    "meaning": "hazırlaşmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَدَّ",
        "translation": "hazırlaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَدَّ أَمْسِ.",
            "translation": "O, dün hazırlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِدُّ",
        "translation": "hazırlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِدُّ الآنَ.",
            "translation": "O, indi hazırlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِدَّ",
        "translation": "hazırlaş!",
        "examples": [
          {
            "arabic": "اِسْتَعِدَّ.",
            "translation": "hazırlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 460,
    "arabic": "جَهَّزَ",
    "meaning": "hazırlamaq",
    "forms": {
      "past": {
        "arabic": "جَهَّزَ",
        "translation": "hazırlada",
        "examples": [
          {
            "arabic": "هُوَ جَهَّزَ أَمْسِ.",
            "translation": "O, dün hazırladı."
          }
        ]
      },
      "present": {
        "arabic": "يُجَهِّزُ",
        "translation": "hazırlayır",
        "examples": [
          {
            "arabic": "هُوَ يُجَهِّزُ الآنَ.",
            "translation": "O, indi hazırlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "جَهِّزْ",
        "translation": "hazırla!",
        "examples": [
          {
            "arabic": "جَهِّزْ.",
            "translation": "hazırla!"
          }
        ]
      }
    }
  },
  {
    "id": 461,
    "arabic": "حَشَدَ",
    "meaning": "toplamaq, səfərbər etmək",
    "forms": {
      "past": {
        "arabic": "حَشَدَ",
        "translation": "topladı",
        "examples": [
          {
            "arabic": "هُوَ حَشَدَ أَمْسِ.",
            "translation": "O, dünən topladı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْشُدُ",
        "translation": "toplayır",
        "examples": [
          {
            "arabic": "هُوَ يَحْشُدُ الآنَ.",
            "translation": "O, indi toplayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْشُدْ",
        "translation": "topla!",
        "examples": [
          {
            "arabic": "اُحْشُدْ.",
            "translation": "topla!"
          }
        ]
      }
    }
  },
  {
    "id": 462,
    "arabic": "أَعَدَّ",
    "meaning": "hazırlamaq",
    "forms": {
      "past": {
        "arabic": "أَعَدَّ",
        "translation": "hazırlada",
        "examples": [
          {
            "arabic": "هُوَ أَعَدَّ أَمْسِ.",
            "translation": "O, dün hazırladı."
          }
        ]
      },
      "present": {
        "arabic": "يُعِدُّ",
        "translation": "hazırlayır",
        "examples": [
          {
            "arabic": "هُوَ يُعِدُّ الآنَ.",
            "translation": "O, indi hazırlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعِدَّ",
        "translation": "hazırla!",
        "examples": [
          {
            "arabic": "أَعِدَّ.",
            "translation": "hazırla!"
          }
        ]
      }
    }
  },
  {
    "id": 463,
    "arabic": "نَظَّمَ",
    "meaning": "təşkil etmək",
    "forms": {
      "past": {
        "arabic": "نَظَّمَ",
        "translation": "təşkil etdi",
        "examples": [
          {
            "arabic": "هُوَ نَظَّمَ أَمْسِ.",
            "translation": "O, dün təşkil etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُنَظِّمُ",
        "translation": "təşkil edir",
        "examples": [
          {
            "arabic": "هُوَ يُنَظِّمُ الآنَ.",
            "translation": "O, indi təşkil etir."
          }
        ]
      },
      "imperative": {
        "arabic": "نَظِّمْ",
        "translation": "təşkil et!",
        "examples": [
          {
            "arabic": "نَظِّمْ.",
            "translation": "təşkil et!"
          }
        ]
      }
    }
  },
  {
    "id": 464,
    "arabic": "رَتَّبَ",
    "meaning": "sıralamaq, səliqəyə salmaq",
    "forms": {
      "past": {
        "arabic": "رَتَّبَ",
        "translation": "sıraladı / səliqəyə saldı",
        "examples": [
          {
            "arabic": "هُوَ رَتَّبَ أَمْسِ.",
            "translation": "O, dünən sıraladı / səliqəyə saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُرَتِّبُ",
        "translation": "sıralayır / səliqəyə salır",
        "examples": [
          {
            "arabic": "هُوَ يُرَتِّبُ الآنَ.",
            "translation": "O, indi sıralayır / səliqəyə salır."
          }
        ]
      },
      "imperative": {
        "arabic": "رَتِّبْ",
        "translation": "sırala! / səliqəyə sal!",
        "examples": [
          {
            "arabic": "رَتِّبْ.",
            "translation": "sırala! / səliqəyə sal!"
          }
        ]
      }
    }
  },
  {
    "id": 465,
    "arabic": "نَظَفَ",
    "meaning": "təmizləmək",
    "forms": {
      "past": {
        "arabic": "نَظَفَ",
        "translation": "təmizlədi",
        "examples": [
          {
            "arabic": "هُوَ نَظَفَ أَمْسِ.",
            "translation": "O, dün təmizlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْظُفُ",
        "translation": "təmizləir",
        "examples": [
          {
            "arabic": "هُوَ يَنْظُفُ الآنَ.",
            "translation": "O, indi təmizləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْظُفْ",
        "translation": "təmizlə!",
        "examples": [
          {
            "arabic": "اُنْظُفْ.",
            "translation": "təmizlə!"
          }
        ]
      }
    }
  },
  {
    "id": 466,
    "arabic": "زَجَرَ",
    "meaning": "danlamaq, çəkindirmək",
    "forms": {
      "past": {
        "arabic": "زَجَرَ",
        "translation": "danladı",
        "examples": [
          {
            "arabic": "هُوَ زَجَرَ أَمْسِ.",
            "translation": "O, dünən danladı."
          }
        ]
      },
      "present": {
        "arabic": "يَزْجُرُ",
        "translation": "danlayır",
        "examples": [
          {
            "arabic": "هُوَ يَزْجُرُ الآنَ.",
            "translation": "O, indi danlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُزْجُرْ",
        "translation": "danla!",
        "examples": [
          {
            "arabic": "اُزْجُرْ.",
            "translation": "danla!"
          }
        ]
      }
    }
  },
  {
    "id": 467,
    "arabic": "مَسَحَ",
    "meaning": "silmək",
    "forms": {
      "past": {
        "arabic": "مَسَحَ",
        "translation": "sildi",
        "examples": [
          {
            "arabic": "هُوَ مَسَحَ أَمْسِ.",
            "translation": "O, dün sildi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْسَحُ",
        "translation": "silir",
        "examples": [
          {
            "arabic": "هُوَ يَمْسَحُ الآنَ.",
            "translation": "O, indi silir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْسَحْ",
        "translation": "sil!",
        "examples": [
          {
            "arabic": "اِمْسَحْ.",
            "translation": "sil!"
          }
        ]
      }
    }
  },
  {
    "id": 468,
    "arabic": "كَنسَ",
    "meaning": "süpürmək",
    "forms": {
      "past": {
        "arabic": "كَنسَ",
        "translation": "süpürdü",
        "examples": [
          {
            "arabic": "هُوَ كَنسَ أَمْسِ.",
            "translation": "O, dün süpürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَكْنُسُ",
        "translation": "süpürür",
        "examples": [
          {
            "arabic": "هُوَ يَكْنُسُ الآنَ.",
            "translation": "O, indi süpürür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُكْنُسْ",
        "translation": "süpür!",
        "examples": [
          {
            "arabic": "اُكْنُسْ.",
            "translation": "süpür!"
          }
        ]
      }
    }
  },
  {
    "id": 469,
    "arabic": "طَهَا",
    "meaning": "bişirmək",
    "forms": {
      "past": {
        "arabic": "طَهَا",
        "translation": "bişirdi",
        "examples": [
          {
            "arabic": "هُوَ طَهَا أَمْسِ.",
            "translation": "O, dün bişirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَطْهُو",
        "translation": "bişirir",
        "examples": [
          {
            "arabic": "هُوَ يَطْهُو الآنَ.",
            "translation": "O, indi bişirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْهُ",
        "translation": "bişir!",
        "examples": [
          {
            "arabic": "اِطْهُ.",
            "translation": "bişir!"
          }
        ]
      }
    }
  },
  {
    "id": 470,
    "arabic": "قَلَى",
    "meaning": "qızartmaq",
    "forms": {
      "past": {
        "arabic": "قَلَى",
        "translation": "qızartdı",
        "examples": [
          {
            "arabic": "هُوَ قَلَى أَمْسِ.",
            "translation": "O, dün qızartdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْلِي",
        "translation": "qızartır",
        "examples": [
          {
            "arabic": "هُوَ يَقْلِي الآنَ.",
            "translation": "O, indi qızartır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْلِ",
        "translation": "qızart!",
        "examples": [
          {
            "arabic": "اِقْلِ.",
            "translation": "qızart!"
          }
        ]
      }
    }
  },
  {
    "id": 471,
    "arabic": "شَوَى",
    "meaning": "qril etmək",
    "forms": {
      "past": {
        "arabic": "شَوَى",
        "translation": "qril etdi",
        "examples": [
          {
            "arabic": "هُوَ شَوَى أَمْسِ.",
            "translation": "O, dün qril etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْوِي",
        "translation": "qril edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْوِي الآنَ.",
            "translation": "O, indi qril etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْوِ",
        "translation": "qril et!",
        "examples": [
          {
            "arabic": "اِشْوِ.",
            "translation": "qril et!"
          }
        ]
      }
    }
  },
  {
    "id": 472,
    "arabic": "خَبَزَ",
    "meaning": "bişirmək",
    "forms": {
      "past": {
        "arabic": "خَبَزَ",
        "translation": "bişirdi",
        "examples": [
          {
            "arabic": "هُوَ خَبَزَ أَمْسِ.",
            "translation": "O, dün bişirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْبِزُ",
        "translation": "bişirir",
        "examples": [
          {
            "arabic": "هُوَ يَخْبِزُ الآنَ.",
            "translation": "O, indi bişirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْبِزْ",
        "translation": "bişir!",
        "examples": [
          {
            "arabic": "اِخْبِزْ.",
            "translation": "bişir!"
          }
        ]
      }
    }
  },
  {
    "id": 473,
    "arabic": "ذَاقَ",
    "meaning": "dadmaq",
    "forms": {
      "past": {
        "arabic": "ذَاقَ",
        "translation": "dadda",
        "examples": [
          {
            "arabic": "هُوَ ذَاقَ أَمْسِ.",
            "translation": "O, dün daddı."
          }
        ]
      },
      "present": {
        "arabic": "يَذُوقُ",
        "translation": "dadır",
        "examples": [
          {
            "arabic": "هُوَ يَذُوقُ الآنَ.",
            "translation": "O, indi dadır."
          }
        ]
      },
      "imperative": {
        "arabic": "ذُقْ",
        "translation": "dad!",
        "examples": [
          {
            "arabic": "ذُقْ.",
            "translation": "dad!"
          }
        ]
      }
    }
  },
  {
    "id": 474,
    "arabic": "مَضَغَ",
    "meaning": "çeynəmək",
    "forms": {
      "past": {
        "arabic": "مَضَغَ",
        "translation": "çeynədi",
        "examples": [
          {
            "arabic": "هُوَ مَضَغَ أَمْسِ.",
            "translation": "O, dün çeynədi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْضَغُ",
        "translation": "çeynəyir",
        "examples": [
          {
            "arabic": "هُوَ يَمْضَغُ الآنَ.",
            "translation": "O, indi çeynəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْضَغْ",
        "translation": "çeynə!",
        "examples": [
          {
            "arabic": "اِمْضَغْ.",
            "translation": "çeynə!"
          }
        ]
      }
    }
  },
  {
    "id": 475,
    "arabic": "بَلَعَ",
    "meaning": "udmaq",
    "forms": {
      "past": {
        "arabic": "بَلَعَ",
        "translation": "uddu",
        "examples": [
          {
            "arabic": "هُوَ بَلَعَ أَمْسِ.",
            "translation": "O, dün uddu."
          }
        ]
      },
      "present": {
        "arabic": "يَبْلَعُ",
        "translation": "udur",
        "examples": [
          {
            "arabic": "هُوَ يَبْلَعُ الآنَ.",
            "translation": "O, indi udur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْلَعْ",
        "translation": "ud!",
        "examples": [
          {
            "arabic": "اِبْلَعْ.",
            "translation": "ud!"
          }
        ]
      }
    }
  },
  {
    "id": 476,
    "arabic": "جَاعَ",
    "meaning": "acmaq",
    "forms": {
      "past": {
        "arabic": "جَاعَ",
        "translation": "acdı",
        "examples": [
          {
            "arabic": "هُوَ جَاعَ أَمْسِ.",
            "translation": "O, dün acdı."
          }
        ]
      },
      "present": {
        "arabic": "يَجُوعُ",
        "translation": "acır",
        "examples": [
          {
            "arabic": "هُوَ يَجُوعُ الآنَ.",
            "translation": "O, indi acır."
          }
        ]
      },
      "imperative": {
        "arabic": "جُعْ",
        "translation": "ac!",
        "examples": [
          {
            "arabic": "جُعْ.",
            "translation": "ac!"
          }
        ]
      }
    }
  },
  {
    "id": 477,
    "arabic": "عَطِشَ",
    "meaning": "susamaq",
    "forms": {
      "past": {
        "arabic": "عَطِشَ",
        "translation": "susada",
        "examples": [
          {
            "arabic": "هُوَ عَطِشَ أَمْسِ.",
            "translation": "O, dün susadı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْطَشُ",
        "translation": "susayır",
        "examples": [
          {
            "arabic": "هُوَ يَعْطَشُ الآنَ.",
            "translation": "O, indi susayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْطَشْ",
        "translation": "susa!",
        "examples": [
          {
            "arabic": "اِعْطَشْ.",
            "translation": "susa!"
          }
        ]
      }
    }
  },
  {
    "id": 478,
    "arabic": "شَبِعَ",
    "meaning": "doymaq",
    "forms": {
      "past": {
        "arabic": "شَبِعَ",
        "translation": "doydu",
        "examples": [
          {
            "arabic": "هُوَ شَبِعَ أَمْسِ.",
            "translation": "O, dün doydu."
          }
        ]
      },
      "present": {
        "arabic": "يَشْبَعُ",
        "translation": "doyur",
        "examples": [
          {
            "arabic": "هُوَ يَشْبَعُ الآنَ.",
            "translation": "O, indi doyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْبَعْ",
        "translation": "doy!",
        "examples": [
          {
            "arabic": "اِشْبَعْ.",
            "translation": "doy!"
          }
        ]
      }
    }
  },
  {
    "id": 479,
    "arabic": "غَلَى",
    "meaning": "qaynamaq",
    "forms": {
      "past": {
        "arabic": "غَلَى",
        "translation": "qaynadı",
        "examples": [
          {
            "arabic": "هُوَ غَلَى أَمْسِ.",
            "translation": "O, dün qaynadı."
          }
        ]
      },
      "present": {
        "arabic": "يَغْلِي",
        "translation": "qaynayır",
        "examples": [
          {
            "arabic": "هُوَ يَغْلِي الآنَ.",
            "translation": "O, indi qaynayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْلِ",
        "translation": "qayna!",
        "examples": [
          {
            "arabic": "اِغْلِ.",
            "translation": "qayna!"
          }
        ]
      }
    }
  },
  {
    "id": 480,
    "arabic": "سَكَبَ",
    "meaning": "tökmək",
    "forms": {
      "past": {
        "arabic": "سَكَبَ",
        "translation": "töktü",
        "examples": [
          {
            "arabic": "هُوَ سَكَبَ أَمْسِ.",
            "translation": "O, dün tökdü."
          }
        ]
      },
      "present": {
        "arabic": "يَسْكُبُ",
        "translation": "tökür",
        "examples": [
          {
            "arabic": "هُوَ يَسْكُبُ الآنَ.",
            "translation": "O, indi tökür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْكُبْ",
        "translation": "tök!",
        "examples": [
          {
            "arabic": "اُسْكُبْ.",
            "translation": "tök!"
          }
        ]
      }
    }
  },
  {
    "id": 481,
    "arabic": "مَلَأَ",
    "meaning": "doldurmaq",
    "forms": {
      "past": {
        "arabic": "مَلَأَ",
        "translation": "doldurdu",
        "examples": [
          {
            "arabic": "هُوَ مَلَأَ أَمْسِ.",
            "translation": "O, dün doldurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَمْلَأُ",
        "translation": "doldurur",
        "examples": [
          {
            "arabic": "هُوَ يَمْلَأُ الآنَ.",
            "translation": "O, indi doldurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْلَأْ",
        "translation": "doldur!",
        "examples": [
          {
            "arabic": "اِمْلَأْ.",
            "translation": "doldur!"
          }
        ]
      }
    }
  },
  {
    "id": 482,
    "arabic": "بَسَطَ",
    "meaning": "yaymaq, açmaq",
    "forms": {
      "past": {
        "arabic": "بَسَطَ",
        "translation": "yaydı",
        "examples": [
          {
            "arabic": "هُوَ بَسَطَ أَمْسِ.",
            "translation": "O, dünən yaydı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْسُطُ",
        "translation": "yayır",
        "examples": [
          {
            "arabic": "هُوَ يَبْسُطُ الآنَ.",
            "translation": "O, indi yayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُبْسُطْ",
        "translation": "yay!",
        "examples": [
          {
            "arabic": "اُبْسُطْ.",
            "translation": "yay!"
          }
        ]
      }
    }
  },
  {
    "id": 483,
    "arabic": "حَفَرَ",
    "meaning": "qazmaq",
    "forms": {
      "past": {
        "arabic": "حَفَرَ",
        "translation": "qazda",
        "examples": [
          {
            "arabic": "هُوَ حَفَرَ أَمْسِ.",
            "translation": "O, dün qazdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْفِرُ",
        "translation": "qazır",
        "examples": [
          {
            "arabic": "هُوَ يَحْفِرُ الآنَ.",
            "translation": "O, indi qazır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْفِرْ",
        "translation": "qaz!",
        "examples": [
          {
            "arabic": "اِحْفِرْ.",
            "translation": "qaz!"
          }
        ]
      }
    }
  },
  {
    "id": 484,
    "arabic": "زَرَعَ",
    "meaning": "əkmək",
    "forms": {
      "past": {
        "arabic": "زَرَعَ",
        "translation": "əktə",
        "examples": [
          {
            "arabic": "هُوَ زَرَعَ أَمْسِ.",
            "translation": "O, dün əkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَزْرَعُ",
        "translation": "əkir",
        "examples": [
          {
            "arabic": "هُوَ يَزْرَعُ الآنَ.",
            "translation": "O, indi əkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِزْرَعْ",
        "translation": "ək!",
        "examples": [
          {
            "arabic": "اِزْرَعْ.",
            "translation": "ək!"
          }
        ]
      }
    }
  },
  {
    "id": 485,
    "arabic": "حَصَدَ",
    "meaning": "biçmək",
    "forms": {
      "past": {
        "arabic": "حَصَدَ",
        "translation": "biçti",
        "examples": [
          {
            "arabic": "هُوَ حَصَدَ أَمْسِ.",
            "translation": "O, dün biçdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْصُدُ",
        "translation": "biçir",
        "examples": [
          {
            "arabic": "هُوَ يَحْصُدُ الآنَ.",
            "translation": "O, indi biçir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْصُدْ",
        "translation": "biç!",
        "examples": [
          {
            "arabic": "اُحْصُدْ.",
            "translation": "biç!"
          }
        ]
      }
    }
  },
  {
    "id": 486,
    "arabic": "سَكَنَ",
    "meaning": "yaşamaq, məskunlaşmaq",
    "forms": {
      "past": {
        "arabic": "سَكَنَ",
        "translation": "yaşadı / məskunlaşdı",
        "examples": [
          {
            "arabic": "هُوَ سَكَنَ أَمْسِ.",
            "translation": "O, dün yaşamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْكُنُ",
        "translation": "yaşayır / məskunlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَسْكُنُ الآنَ.",
            "translation": "O, indi yaşamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْكُنْ",
        "translation": "yaşa! / məskunlaş!",
        "examples": [
          {
            "arabic": "اُسْكُنْ.",
            "translation": "yaşamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 487,
    "arabic": "صَلَحَ",
    "meaning": "yaxşı olmaq",
    "forms": {
      "past": {
        "arabic": "صَلَحَ",
        "translation": "yaxşı oldu",
        "examples": [
          {
            "arabic": "هُوَ صَلَحَ أَمْسِ.",
            "translation": "O, dün yaxşı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَصْلُحُ",
        "translation": "yaxşı olur",
        "examples": [
          {
            "arabic": "هُوَ يَصْلُحُ الآنَ.",
            "translation": "O, indi yaxşı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْلُحْ",
        "translation": "yaxşı ol!",
        "examples": [
          {
            "arabic": "اِصْلُحْ.",
            "translation": "yaxşı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 488,
    "arabic": "أَفْسَدَ",
    "meaning": "korlamaq",
    "forms": {
      "past": {
        "arabic": "أَفْسَدَ",
        "translation": "korladı",
        "examples": [
          {
            "arabic": "هُوَ أَفْسَدَ أَمْسِ.",
            "translation": "O, dün korladı."
          }
        ]
      },
      "present": {
        "arabic": "يُفْسِدُ",
        "translation": "korlayır",
        "examples": [
          {
            "arabic": "هُوَ يُفْسِدُ الآنَ.",
            "translation": "O, indi korlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفْسِدْ",
        "translation": "korla!",
        "examples": [
          {
            "arabic": "أَفْسِدْ.",
            "translation": "korla!"
          }
        ]
      }
    }
  },
  {
    "id": 489,
    "arabic": "كَانَ",
    "meaning": "olmaq",
    "forms": {
      "past": {
        "arabic": "كَانَ",
        "translation": "oldu",
        "examples": [
          {
            "arabic": "هُوَ كَانَ أَمْسِ.",
            "translation": "O, dün oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَكُونُ",
        "translation": "olur",
        "examples": [
          {
            "arabic": "هُوَ يَكُونُ الآنَ.",
            "translation": "O, indi olur."
          }
        ]
      },
      "imperative": {
        "arabic": "كُنْ",
        "translation": "ol!",
        "examples": [
          {
            "arabic": "كُنْ.",
            "translation": "ol!"
          }
        ]
      }
    }
  },
  {
    "id": 490,
    "arabic": "صَارَ",
    "meaning": "çevrilmək, olmaq",
    "forms": {
      "past": {
        "arabic": "صَارَ",
        "translation": "çevrildi, oldu",
        "examples": [
          {
            "arabic": "هُوَ صَارَ أَمْسِ.",
            "translation": "O, dün çevrilməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصِيرُ",
        "translation": "çevrilir, olur",
        "examples": [
          {
            "arabic": "هُوَ يَصِيرُ الآنَ.",
            "translation": "O, indi çevrilməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "صِرْ",
        "translation": "çevril, ol!",
        "examples": [
          {
            "arabic": "صِرْ.",
            "translation": "çevrilmək!"
          }
        ]
      }
    }
  },
  {
    "id": 491,
    "arabic": "أَصْبَحَ",
    "meaning": "olmaq, səhər olmaq",
    "forms": {
      "past": {
        "arabic": "أَصْبَحَ",
        "translation": "oldu, səhər oldu",
        "examples": [
          {
            "arabic": "هُوَ أَصْبَحَ أَمْسِ.",
            "translation": "O, dün olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُصْبِحُ",
        "translation": "olur, səhər olur",
        "examples": [
          {
            "arabic": "هُوَ يُصْبِحُ الآنَ.",
            "translation": "O, indi olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَصْبِحْ",
        "translation": "ol, səhər ol!",
        "examples": [
          {
            "arabic": "أَصْبِحْ.",
            "translation": "olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 492,
    "arabic": "أَمْسَى",
    "meaning": "axşam olmaq",
    "forms": {
      "past": {
        "arabic": "أَمْسَى",
        "translation": "axşam oldu",
        "examples": [
          {
            "arabic": "هُوَ أَمْسَى أَمْسِ.",
            "translation": "O, dün axşam oldu."
          }
        ]
      },
      "present": {
        "arabic": "يُمْسِي",
        "translation": "axşam olur",
        "examples": [
          {
            "arabic": "هُوَ يُمْسِي الآنَ.",
            "translation": "O, indi axşam olur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَمْسِ",
        "translation": "axşam ol!",
        "examples": [
          {
            "arabic": "أَمْسِ.",
            "translation": "axşam ol!"
          }
        ]
      }
    }
  },
  {
    "id": 493,
    "arabic": "ظَلَّ",
    "meaning": "davam etmək",
    "forms": {
      "past": {
        "arabic": "ظَلَّ",
        "translation": "davam etdi",
        "examples": [
          {
            "arabic": "هُوَ ظَلَّ أَمْسِ.",
            "translation": "O, dün davam etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَظَلُّ",
        "translation": "davam edir",
        "examples": [
          {
            "arabic": "هُوَ يَظَلُّ الآنَ.",
            "translation": "O, indi davam etır."
          }
        ]
      },
      "imperative": {
        "arabic": "ظَلَّ",
        "translation": "davam et!",
        "examples": [
          {
            "arabic": "ظَلَّ.",
            "translation": "davam et!"
          }
        ]
      }
    }
  },
  {
    "id": 494,
    "arabic": "بَاتَ",
    "meaning": "gecələmək",
    "forms": {
      "past": {
        "arabic": "بَاتَ",
        "translation": "gecələdi",
        "examples": [
          {
            "arabic": "هُوَ بَاتَ أَمْسِ.",
            "translation": "O, dün gecələdi."
          }
        ]
      },
      "present": {
        "arabic": "يَبِيتُ",
        "translation": "gecələir",
        "examples": [
          {
            "arabic": "هُوَ يَبِيتُ الآنَ.",
            "translation": "O, indi gecələyir."
          }
        ]
      },
      "imperative": {
        "arabic": "بِتْ",
        "translation": "gecələ!",
        "examples": [
          {
            "arabic": "بِتْ.",
            "translation": "gecələ!"
          }
        ]
      }
    }
  },
  {
    "id": 495,
    "arabic": "لَيْسَ",
    "meaning": "olmamaq",
    "forms": {
      "past": {
        "arabic": "لَيْسَ",
        "translation": "olmada",
        "examples": [
          {
            "arabic": "هُوَ لَيْسَ أَمْسِ.",
            "translation": "O, dün olmadı."
          }
        ]
      },
      "present": {
        "arabic": "لَيْسَ",
        "translation": "olmaır",
        "examples": [
          {
            "arabic": "هُوَ لَيْسَ الآنَ.",
            "translation": "O, indi olmayır."
          }
        ]
      },
      "imperative": {
        "arabic": "—",
        "translation": "olma!",
        "examples": [
          {
            "arabic": "—",
            "translation": "—"
          }
        ]
      }
    }
  },
  {
    "id": 496,
    "arabic": "وَجَدَ",
    "meaning": "tapmaq",
    "forms": {
      "past": {
        "arabic": "وَجَدَ",
        "translation": "tapta",
        "examples": [
          {
            "arabic": "هُوَ وَجَدَ أَمْسِ.",
            "translation": "O, dün tapdı."
          }
        ]
      },
      "present": {
        "arabic": "يَجِدُ",
        "translation": "tapır",
        "examples": [
          {
            "arabic": "هُوَ يَجِدُ الآنَ.",
            "translation": "O, indi tapır."
          }
        ]
      },
      "imperative": {
        "arabic": "جِدْ",
        "translation": "tap!",
        "examples": [
          {
            "arabic": "جِدْ.",
            "translation": "tap!"
          }
        ]
      }
    }
  },
  {
    "id": 497,
    "arabic": "فَقَدَ",
    "meaning": "itirmək",
    "forms": {
      "past": {
        "arabic": "فَقَدَ",
        "translation": "itirdi",
        "examples": [
          {
            "arabic": "هُوَ فَقَدَ أَمْسِ.",
            "translation": "O, dün itirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَفْقِدُ",
        "translation": "itirir",
        "examples": [
          {
            "arabic": "هُوَ يَفْقِدُ الآنَ.",
            "translation": "O, indi itirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْقِدْ",
        "translation": "itir!",
        "examples": [
          {
            "arabic": "اِفْقِدْ.",
            "translation": "itir!"
          }
        ]
      }
    }
  },
  {
    "id": 498,
    "arabic": "ضَاعَ",
    "meaning": "itməy",
    "forms": {
      "past": {
        "arabic": "ضَاعَ",
        "translation": "itməy",
        "examples": [
          {
            "arabic": "هُوَ ضَاعَ أَمْسِ.",
            "translation": "O, dün itməydi."
          }
        ]
      },
      "present": {
        "arabic": "يَضِيعُ",
        "translation": "itməy",
        "examples": [
          {
            "arabic": "هُوَ يَضِيعُ الآنَ.",
            "translation": "O, indi itməyir."
          }
        ]
      },
      "imperative": {
        "arabic": "ضِعْ",
        "translation": "itməy",
        "examples": [
          {
            "arabic": "ضِعْ.",
            "translation": "itməy!"
          }
        ]
      }
    }
  },
  {
    "id": 499,
    "arabic": "نَضَجَ",
    "meaning": "yetişmək, bişmək",
    "forms": {
      "past": {
        "arabic": "نَضَجَ",
        "translation": "yetişdi",
        "examples": [
          {
            "arabic": "هُوَ نَضَجَ أَمْسِ.",
            "translation": "O, dünən yetişdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْضَجُ",
        "translation": "yetişir",
        "examples": [
          {
            "arabic": "هُوَ يَنْضَجُ الآنَ.",
            "translation": "O, indi yetişir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْضَجْ",
        "translation": "yetiş!",
        "examples": [
          {
            "arabic": "اِنْضَجْ.",
            "translation": "yetiş!"
          }
        ]
      }
    }
  },
  {
    "id": 500,
    "arabic": "حَمَى",
    "meaning": "qorumaq",
    "forms": {
      "past": {
        "arabic": "حَمَى",
        "translation": "qorudu",
        "examples": [
          {
            "arabic": "هُوَ حَمَى أَمْسِ.",
            "translation": "O, dün qorudu."
          }
        ]
      },
      "present": {
        "arabic": "يَحْمِي",
        "translation": "qoruyur",
        "examples": [
          {
            "arabic": "هُوَ يَحْمِي الآنَ.",
            "translation": "O, indi qoruyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْمِ",
        "translation": "qoru!",
        "examples": [
          {
            "arabic": "اِحْمِ.",
            "translation": "qoru!"
          }
        ]
      }
    }
  },
  {
    "id": 501,
    "arabic": "حَرَسَ",
    "meaning": "mühafizə etmək",
    "forms": {
      "past": {
        "arabic": "حَرَسَ",
        "translation": "mühafizə etdi",
        "examples": [
          {
            "arabic": "هُوَ حَرَسَ أَمْسِ.",
            "translation": "O, dün mühafizə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْرُسُ",
        "translation": "mühafizə edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْرُسُ الآنَ.",
            "translation": "O, indi mühafizə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْرُسْ",
        "translation": "mühafizə et!",
        "examples": [
          {
            "arabic": "اُحْرُسْ.",
            "translation": "mühafizə et!"
          }
        ]
      }
    }
  },
  {
    "id": 502,
    "arabic": "مَنَعَ",
    "meaning": "mane olmaq",
    "forms": {
      "past": {
        "arabic": "مَنَعَ",
        "translation": "mane oldu",
        "examples": [
          {
            "arabic": "هُوَ مَنَعَ أَمْسِ.",
            "translation": "O, dün mane oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَمْنَعُ",
        "translation": "mane olur",
        "examples": [
          {
            "arabic": "هُوَ يَمْنَعُ الآنَ.",
            "translation": "O, indi mane olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْنَعْ",
        "translation": "mane ol!",
        "examples": [
          {
            "arabic": "اِمْنَعْ.",
            "translation": "mane ol!"
          }
        ]
      }
    }
  },
  {
    "id": 503,
    "arabic": "سَمَحَ",
    "meaning": "icazə vermək",
    "forms": {
      "past": {
        "arabic": "سَمَحَ",
        "translation": "icazə verdi",
        "examples": [
          {
            "arabic": "هُوَ سَمَحَ أَمْسِ.",
            "translation": "O, dün icazə verdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْمَحُ",
        "translation": "icazə verir",
        "examples": [
          {
            "arabic": "هُوَ يَسْمَحُ الآنَ.",
            "translation": "O, indi icazə verir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْمَحْ",
        "translation": "icazə ver!",
        "examples": [
          {
            "arabic": "اِسْمَحْ.",
            "translation": "icazə ver!"
          }
        ]
      }
    }
  },
  {
    "id": 504,
    "arabic": "رَفَضَ",
    "meaning": "rədd etmək",
    "forms": {
      "past": {
        "arabic": "رَفَضَ",
        "translation": "rədd etdi",
        "examples": [
          {
            "arabic": "هُوَ رَفَضَ أَمْسِ.",
            "translation": "O, dün rədd etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْفُضُ",
        "translation": "rədd edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْفُضُ الآنَ.",
            "translation": "O, indi rədd etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْفُضْ",
        "translation": "rədd et!",
        "examples": [
          {
            "arabic": "اِرْفُضْ.",
            "translation": "rədd et!"
          }
        ]
      }
    }
  },
  {
    "id": 505,
    "arabic": "قَبِلَ",
    "meaning": "qəbul etmək",
    "forms": {
      "past": {
        "arabic": "قَبِلَ",
        "translation": "qəbul etdi",
        "examples": [
          {
            "arabic": "هُوَ قَبِلَ أَمْسِ.",
            "translation": "O, dün qəbul etdu."
          }
        ]
      },
      "present": {
        "arabic": "يَقْبَلُ",
        "translation": "qəbul edir",
        "examples": [
          {
            "arabic": "هُوَ يَقْبَلُ الآنَ.",
            "translation": "O, indi qəbul etur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْبَلْ",
        "translation": "qəbul et!",
        "examples": [
          {
            "arabic": "اِقْبَلْ.",
            "translation": "qəbul et!"
          }
        ]
      }
    }
  },
  {
    "id": 506,
    "arabic": "وَافَقَ",
    "meaning": "razılaşmaq",
    "forms": {
      "past": {
        "arabic": "وَافَقَ",
        "translation": "razılaşdı",
        "examples": [
          {
            "arabic": "هُوَ وَافَقَ أَمْسِ.",
            "translation": "O, dün razılaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوَافِقُ",
        "translation": "razılaşır",
        "examples": [
          {
            "arabic": "هُوَ يُوَافِقُ الآنَ.",
            "translation": "O, indi razılaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "وَافِقْ",
        "translation": "razılaş!",
        "examples": [
          {
            "arabic": "وَافِقْ.",
            "translation": "razılaş!"
          }
        ]
      }
    }
  },
  {
    "id": 507,
    "arabic": "اِتَّفَقَ",
    "meaning": "razılaşmaq",
    "forms": {
      "past": {
        "arabic": "اِتَّفَقَ",
        "translation": "razılaşdı",
        "examples": [
          {
            "arabic": "هُوَ اِتَّفَقَ أَمْسِ.",
            "translation": "O, dün razılaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّفِقُ",
        "translation": "razılaşır",
        "examples": [
          {
            "arabic": "هُوَ يَتَّفِقُ الآنَ.",
            "translation": "O, indi razılaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّفِقْ",
        "translation": "razılaş!",
        "examples": [
          {
            "arabic": "اِتَّفِقْ.",
            "translation": "razılaş!"
          }
        ]
      }
    }
  },
  {
    "id": 508,
    "arabic": "تَنَافَسَ",
    "meaning": "rəqabət aparmaq",
    "forms": {
      "past": {
        "arabic": "تَنَافَسَ",
        "translation": "rəqabət apardı",
        "examples": [
          {
            "arabic": "هُوَ تَنَافَسَ أَمْسِ.",
            "translation": "O, dün rəqabət apardı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَنَافَسُ",
        "translation": "rəqabət aparır",
        "examples": [
          {
            "arabic": "هُوَ يَتَنَافَسُ الآنَ.",
            "translation": "O, indi rəqabət aparır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَنَافَسْ",
        "translation": "rəqabət apar!",
        "examples": [
          {
            "arabic": "تَنَافَسْ.",
            "translation": "rəqabət apar!"
          }
        ]
      }
    }
  },
  {
    "id": 509,
    "arabic": "طَرَزَ",
    "meaning": "naxış tikmək",
    "forms": {
      "past": {
        "arabic": "طَرَزَ",
        "translation": "naxış tikdi",
        "examples": [
          {
            "arabic": "هُوَ طَرَزَ أَمْسِ.",
            "translation": "O, dünən naxış tikdi."
          }
        ]
      },
      "present": {
        "arabic": "يَطْرُزُ",
        "translation": "naxış tikir",
        "examples": [
          {
            "arabic": "هُوَ يَطْرُزُ الآنَ.",
            "translation": "O, indi naxış tikir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُطْرُزْ",
        "translation": "naxış tik!",
        "examples": [
          {
            "arabic": "اُطْرُزْ.",
            "translation": "naxış tik!"
          }
        ]
      }
    }
  },
  {
    "id": 510,
    "arabic": "تَشَاجَرَ",
    "meaning": "dalaşmaq",
    "forms": {
      "past": {
        "arabic": "تَشَاجَرَ",
        "translation": "dalaşdı",
        "examples": [
          {
            "arabic": "هُوَ تَشَاجَرَ أَمْسِ.",
            "translation": "O, dün dalaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَشَاجَرُ",
        "translation": "dalaşır",
        "examples": [
          {
            "arabic": "هُوَ يَتَشَاجَرُ الآنَ.",
            "translation": "O, indi dalaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَشَاجَرْ",
        "translation": "dalaş!",
        "examples": [
          {
            "arabic": "تَشَاجَرْ.",
            "translation": "dalaş!"
          }
        ]
      }
    }
  },
  {
    "id": 511,
    "arabic": "مَدَحَ",
    "meaning": "tərifləmək",
    "forms": {
      "past": {
        "arabic": "مَدَحَ",
        "translation": "təriflədi",
        "examples": [
          {
            "arabic": "هُوَ مَدَحَ أَمْسِ.",
            "translation": "O, dün təriflədi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْدَحُ",
        "translation": "tərifləyir",
        "examples": [
          {
            "arabic": "هُوَ يَمْدَحُ الآنَ.",
            "translation": "O, indi tərifləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْدَحْ",
        "translation": "təriflə!",
        "examples": [
          {
            "arabic": "اِمْدَحْ.",
            "translation": "təriflə!"
          }
        ]
      }
    }
  },
  {
    "id": 512,
    "arabic": "ذَمَّ",
    "meaning": "pisləmək",
    "forms": {
      "past": {
        "arabic": "ذَمَّ",
        "translation": "pislədi",
        "examples": [
          {
            "arabic": "هُوَ ذَمَّ أَمْسِ.",
            "translation": "O, dün pislədi."
          }
        ]
      },
      "present": {
        "arabic": "يَذُمُّ",
        "translation": "pisləyir",
        "examples": [
          {
            "arabic": "هُوَ يَذُمُّ الآنَ.",
            "translation": "O, indi pisləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "ذُمَّ",
        "translation": "pislə!",
        "examples": [
          {
            "arabic": "ذُمَّ.",
            "translation": "pislə!"
          }
        ]
      }
    }
  },
  {
    "id": 513,
    "arabic": "لَامَ",
    "meaning": "qınamaq",
    "forms": {
      "past": {
        "arabic": "لَامَ",
        "translation": "qınadı",
        "examples": [
          {
            "arabic": "هُوَ لَامَ أَمْسِ.",
            "translation": "O, dün qınadı."
          }
        ]
      },
      "present": {
        "arabic": "يَلُومُ",
        "translation": "qınayır",
        "examples": [
          {
            "arabic": "هُوَ يَلُومُ الآنَ.",
            "translation": "O, indi qınayır."
          }
        ]
      },
      "imperative": {
        "arabic": "لُمْ",
        "translation": "qına!",
        "examples": [
          {
            "arabic": "لُمْ.",
            "translation": "qına!"
          }
        ]
      }
    }
  },
  {
    "id": 514,
    "arabic": "شَرَدَ",
    "meaning": "qaçmaq, azmaq",
    "forms": {
      "past": {
        "arabic": "شَرَدَ",
        "translation": "qaçdı",
        "examples": [
          {
            "arabic": "هُوَ شَرَدَ أَمْسِ.",
            "translation": "O, dünən qaçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَشْرُدُ",
        "translation": "qaçır",
        "examples": [
          {
            "arabic": "هُوَ يَشْرُدُ الآنَ.",
            "translation": "O, indi qaçır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُشْرُدْ",
        "translation": "qaç!",
        "examples": [
          {
            "arabic": "اُشْرُدْ.",
            "translation": "qaç!"
          }
        ]
      }
    }
  },
  {
    "id": 515,
    "arabic": "صَدَمَ",
    "meaning": "toqquşmaq, vurmaq",
    "forms": {
      "past": {
        "arabic": "صَدَمَ",
        "translation": "toqquşdu",
        "examples": [
          {
            "arabic": "هُوَ صَدَمَ أَمْسِ.",
            "translation": "O, dünən toqquşdu."
          }
        ]
      },
      "present": {
        "arabic": "يَصْدِمُ",
        "translation": "toqquşur",
        "examples": [
          {
            "arabic": "هُوَ يَصْدِمُ الآنَ.",
            "translation": "O, indi toqquşur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْدِمْ",
        "translation": "toqquş!",
        "examples": [
          {
            "arabic": "اِصْدِمْ.",
            "translation": "toqquş!"
          }
        ]
      }
    }
  },
  {
    "id": 516,
    "arabic": "أَكَّدَ",
    "meaning": "təsdiqləmək",
    "forms": {
      "past": {
        "arabic": "أَكَّدَ",
        "translation": "təsdiqlədi",
        "examples": [
          {
            "arabic": "هُوَ أَكَّدَ أَمْسِ.",
            "translation": "O, dün təsdiqlədi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَكِّدُ",
        "translation": "təsdiqləyir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَكِّدُ الآنَ.",
            "translation": "O, indi təsdiqləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَكِّدْ",
        "translation": "təsdiqlə!",
        "examples": [
          {
            "arabic": "أَكِّدْ.",
            "translation": "təsdiqlə!"
          }
        ]
      }
    }
  },
  {
    "id": 517,
    "arabic": "اِحْتَفَلَ",
    "meaning": "bayram etmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَفَلَ",
        "translation": "bayram etdi",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَفَلَ أَمْسِ.",
            "translation": "O, dün bayram etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَفِلُ",
        "translation": "bayram edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَفِلُ الآنَ.",
            "translation": "O, indi bayram etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَفِلْ",
        "translation": "bayram et!",
        "examples": [
          {
            "arabic": "اِحْتَفِلْ.",
            "translation": "bayram et!"
          }
        ]
      }
    }
  },
  {
    "id": 518,
    "arabic": "هَنَّأَ",
    "meaning": "təbrik etmək",
    "forms": {
      "past": {
        "arabic": "هَنَّأَ",
        "translation": "təbrik etdi",
        "examples": [
          {
            "arabic": "هُوَ هَنَّأَ أَمْسِ.",
            "translation": "O, dün təbrik etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُهَنِّئُ",
        "translation": "təbrik edir",
        "examples": [
          {
            "arabic": "هُوَ يُهَنِّئُ الآنَ.",
            "translation": "O, indi təbrik etir."
          }
        ]
      },
      "imperative": {
        "arabic": "هَنِّئْ",
        "translation": "təbrik et!",
        "examples": [
          {
            "arabic": "هَنِّئْ.",
            "translation": "təbrik et!"
          }
        ]
      }
    }
  },
  {
    "id": 519,
    "arabic": "عَزَّى",
    "meaning": "başsağlığı vermək",
    "forms": {
      "past": {
        "arabic": "عَزَّى",
        "translation": "başsağlığı verdi",
        "examples": [
          {
            "arabic": "هُوَ عَزَّى أَمْسِ.",
            "translation": "O, dün başsağlığı verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَزِّي",
        "translation": "başsağlığı verir",
        "examples": [
          {
            "arabic": "هُوَ يُعَزِّي الآنَ.",
            "translation": "O, indi başsağlığı verir."
          }
        ]
      },
      "imperative": {
        "arabic": "عَزِّ",
        "translation": "başsağlığı ver!",
        "examples": [
          {
            "arabic": "عَزِّ.",
            "translation": "başsağlığı ver!"
          }
        ]
      }
    }
  },
  {
    "id": 520,
    "arabic": "قَبَضَ",
    "meaning": "tutmaq, almaq",
    "forms": {
      "past": {
        "arabic": "قَبَضَ",
        "translation": "tutdu / aldı",
        "examples": [
          {
            "arabic": "هُوَ قَبَضَ أَمْسِ.",
            "translation": "O, dün tutmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْبِضُ",
        "translation": "tutur / alır",
        "examples": [
          {
            "arabic": "هُوَ يَقْبِضُ الآنَ.",
            "translation": "O, indi tutmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْبِضْ",
        "translation": "tut! / al!",
        "examples": [
          {
            "arabic": "اِقْبِضْ.",
            "translation": "tutmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 521,
    "arabic": "دَخَّرَ",
    "meaning": "yığmaq, qənaət etmək",
    "forms": {
      "past": {
        "arabic": "دَخَّرَ",
        "translation": "yığdı / qənaət etdi",
        "examples": [
          {
            "arabic": "هُوَ دَخَّرَ أَمْسِ.",
            "translation": "O, dün yığmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُدَخِّرُ",
        "translation": "yığır / qənaət edir",
        "examples": [
          {
            "arabic": "هُوَ يُدَخِّرُ الآنَ.",
            "translation": "O, indi yığmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "دَخِّرْ",
        "translation": "yığ! / qənaət et!",
        "examples": [
          {
            "arabic": "دَخِّرْ.",
            "translation": "yığmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 522,
    "arabic": "اِدَّخَرَ",
    "meaning": "yığmaq",
    "forms": {
      "past": {
        "arabic": "اِدَّخَرَ",
        "translation": "yığdı",
        "examples": [
          {
            "arabic": "هُوَ اِدَّخَرَ أَمْسِ.",
            "translation": "O, dün yığdı."
          }
        ]
      },
      "present": {
        "arabic": "يَدَّخِرُ",
        "translation": "yığır",
        "examples": [
          {
            "arabic": "هُوَ يَدَّخِرُ الآنَ.",
            "translation": "O, indi yığır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدَّخِرْ",
        "translation": "yığ!",
        "examples": [
          {
            "arabic": "اِدَّخِرْ.",
            "translation": "yığ!"
          }
        ]
      }
    }
  },
  {
    "id": 523,
    "arabic": "أَجَّرَ",
    "meaning": "icarəyə vermək",
    "forms": {
      "past": {
        "arabic": "أَجَّرَ",
        "translation": "icarəyə verdi",
        "examples": [
          {
            "arabic": "هُوَ أَجَّرَ أَمْسِ.",
            "translation": "O, dün icarəyə verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَجِّرُ",
        "translation": "icarəyə verir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَجِّرُ الآنَ.",
            "translation": "O, indi icarəyə verir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَجِّرْ",
        "translation": "icarəyə ver!",
        "examples": [
          {
            "arabic": "أَجِّرْ.",
            "translation": "icarəyə ver!"
          }
        ]
      }
    }
  },
  {
    "id": 524,
    "arabic": "اِقْتَرَضَ",
    "meaning": "borc almaq",
    "forms": {
      "past": {
        "arabic": "اِقْتَرَضَ",
        "translation": "borc aldı",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَرَضَ أَمْسِ.",
            "translation": "O, dün borc aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَرِضُ",
        "translation": "borc alır",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَرِضُ الآنَ.",
            "translation": "O, indi borc alır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَرِضْ",
        "translation": "borc al!",
        "examples": [
          {
            "arabic": "اِقْتَرِضْ.",
            "translation": "borc al!"
          }
        ]
      }
    }
  },
  {
    "id": 525,
    "arabic": "ضَغَطَ",
    "meaning": "basmaq, təzyiq göstərmək",
    "forms": {
      "past": {
        "arabic": "ضَغَطَ",
        "translation": "basdı",
        "examples": [
          {
            "arabic": "هُوَ ضَغَطَ أَمْسِ.",
            "translation": "O, dünən basdı."
          }
        ]
      },
      "present": {
        "arabic": "يَضْغَطُ",
        "translation": "basır",
        "examples": [
          {
            "arabic": "هُوَ يَضْغَطُ الآنَ.",
            "translation": "O, indi basır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِضْغَطْ",
        "translation": "bas!",
        "examples": [
          {
            "arabic": "اِضْغَطْ.",
            "translation": "bas!"
          }
        ]
      }
    }
  },
  {
    "id": 526,
    "arabic": "تَوَظَّفَ",
    "meaning": "işə düzəlmək",
    "forms": {
      "past": {
        "arabic": "تَوَظَّفَ",
        "translation": "işə düzəldi",
        "examples": [
          {
            "arabic": "هُوَ تَوَظَّفَ أَمْسِ.",
            "translation": "O, dün işə düzəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَظَّفُ",
        "translation": "işə düzəlir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَظَّفُ الآنَ.",
            "translation": "O, indi işə düzəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَظَّفْ",
        "translation": "işə düzəl!",
        "examples": [
          {
            "arabic": "تَوَظَّفْ.",
            "translation": "işə düzəl!"
          }
        ]
      }
    }
  },
  {
    "id": 527,
    "arabic": "وَظَّفَ",
    "meaning": "işə götürmək",
    "forms": {
      "past": {
        "arabic": "وَظَّفَ",
        "translation": "işə götürdü",
        "examples": [
          {
            "arabic": "هُوَ وَظَّفَ أَمْسِ.",
            "translation": "O, dün işə götürdü."
          }
        ]
      },
      "present": {
        "arabic": "يُوَظِّفُ",
        "translation": "işə götürür",
        "examples": [
          {
            "arabic": "هُوَ يُوَظِّفُ الآنَ.",
            "translation": "O, indi işə götürür."
          }
        ]
      },
      "imperative": {
        "arabic": "وَظِّفْ",
        "translation": "işə götür!",
        "examples": [
          {
            "arabic": "وَظِّفْ.",
            "translation": "işə götür!"
          }
        ]
      }
    }
  },
  {
    "id": 528,
    "arabic": "أَدَارَ",
    "meaning": "idarə etmək",
    "forms": {
      "past": {
        "arabic": "أَدَارَ",
        "translation": "idarə etdi",
        "examples": [
          {
            "arabic": "هُوَ أَدَارَ أَمْسِ.",
            "translation": "O, dün idarə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُدِيرُ",
        "translation": "idarə edir",
        "examples": [
          {
            "arabic": "هُوَ يُدِيرُ الآنَ.",
            "translation": "O, indi idarə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَدِرْ",
        "translation": "idarə et!",
        "examples": [
          {
            "arabic": "أَدِرْ.",
            "translation": "idarə et!"
          }
        ]
      }
    }
  },
  {
    "id": 529,
    "arabic": "قَادَ",
    "meaning": "idarə etmək, sürmək",
    "forms": {
      "past": {
        "arabic": "قَادَ",
        "translation": "idarə etdi / sürdü",
        "examples": [
          {
            "arabic": "هُوَ قَادَ أَمْسِ.",
            "translation": "O, dün idarə etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقُودُ",
        "translation": "idarə edir / sürür",
        "examples": [
          {
            "arabic": "هُوَ يَقُودُ الآنَ.",
            "translation": "O, indi idarə etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "قُدْ",
        "translation": "idarə et! / sür!",
        "examples": [
          {
            "arabic": "قُدْ.",
            "translation": "idarə etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 530,
    "arabic": "سَاقَ",
    "meaning": "sürmək",
    "forms": {
      "past": {
        "arabic": "سَاقَ",
        "translation": "sürdü",
        "examples": [
          {
            "arabic": "هُوَ سَاقَ أَمْسِ.",
            "translation": "O, dün sürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَسُوقُ",
        "translation": "sürür",
        "examples": [
          {
            "arabic": "هُوَ يَسُوقُ الآنَ.",
            "translation": "O, indi sürür."
          }
        ]
      },
      "imperative": {
        "arabic": "سُقْ",
        "translation": "sür!",
        "examples": [
          {
            "arabic": "سُقْ.",
            "translation": "sür!"
          }
        ]
      }
    }
  },
  {
    "id": 531,
    "arabic": "صَعِدَ",
    "meaning": "qalxmaq",
    "forms": {
      "past": {
        "arabic": "صَعِدَ",
        "translation": "qalxdı",
        "examples": [
          {
            "arabic": "هُوَ صَعِدَ أَمْسِ.",
            "translation": "O, dün qalxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَصْعَدُ",
        "translation": "qalxır",
        "examples": [
          {
            "arabic": "هُوَ يَصْعَدُ الآنَ.",
            "translation": "O, indi qalxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْعَدْ",
        "translation": "qalx!",
        "examples": [
          {
            "arabic": "اِصْعَدْ.",
            "translation": "qalx!"
          }
        ]
      }
    }
  },
  {
    "id": 532,
    "arabic": "عَبَرَ",
    "meaning": "keçmək",
    "forms": {
      "past": {
        "arabic": "عَبَرَ",
        "translation": "keçdi",
        "examples": [
          {
            "arabic": "هُوَ عَبَرَ أَمْسِ.",
            "translation": "O, dün keçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْبُرُ",
        "translation": "keçir",
        "examples": [
          {
            "arabic": "هُوَ يَعْبُرُ الآنَ.",
            "translation": "O, indi keçir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُعْبُرْ",
        "translation": "keç!",
        "examples": [
          {
            "arabic": "اُعْبُرْ.",
            "translation": "keç!"
          }
        ]
      }
    }
  },
  {
    "id": 533,
    "arabic": "مَرَّ",
    "meaning": "keçmək",
    "forms": {
      "past": {
        "arabic": "مَرَّ",
        "translation": "keçdi",
        "examples": [
          {
            "arabic": "هُوَ مَرَّ أَمْسِ.",
            "translation": "O, dün keçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَمُرُّ",
        "translation": "keçir",
        "examples": [
          {
            "arabic": "هُوَ يَمُرُّ الآنَ.",
            "translation": "O, indi keçir."
          }
        ]
      },
      "imperative": {
        "arabic": "مُرَّ",
        "translation": "keç!",
        "examples": [
          {
            "arabic": "مُرَّ.",
            "translation": "keç!"
          }
        ]
      }
    }
  },
  {
    "id": 534,
    "arabic": "تَجَاوَزَ",
    "meaning": "aşmaq, keçmək",
    "forms": {
      "past": {
        "arabic": "تَجَاوَزَ",
        "translation": "aşdı / keçdi",
        "examples": [
          {
            "arabic": "هُوَ تَجَاوَزَ أَمْسِ.",
            "translation": "O, dün aşmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَجَاوَزُ",
        "translation": "aşır / keçir",
        "examples": [
          {
            "arabic": "هُوَ يَتَجَاوَزُ الآنَ.",
            "translation": "O, indi aşmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَجَاوَزْ",
        "translation": "aş! / keç!",
        "examples": [
          {
            "arabic": "تَجَاوَزْ.",
            "translation": "aşmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 535,
    "arabic": "تَحَرَّكَ",
    "meaning": "hərəkət etmək",
    "forms": {
      "past": {
        "arabic": "تَحَرَّكَ",
        "translation": "hərəkət etdi",
        "examples": [
          {
            "arabic": "هُوَ تَحَرَّكَ أَمْسِ.",
            "translation": "O, dün hərəkət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَرَّكُ",
        "translation": "hərəkət edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَرَّكُ الآنَ.",
            "translation": "O, indi hərəkət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَرَّكْ",
        "translation": "hərəkət et!",
        "examples": [
          {
            "arabic": "تَحَرَّكْ.",
            "translation": "hərəkət et!"
          }
        ]
      }
    }
  },
  {
    "id": 536,
    "arabic": "حَرَّكَ",
    "meaning": "hərəkət etdirmək",
    "forms": {
      "past": {
        "arabic": "حَرَّكَ",
        "translation": "hərəkət etdirdi",
        "examples": [
          {
            "arabic": "هُوَ حَرَّكَ أَمْسِ.",
            "translation": "O, dün hərəkət etdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحَرِّكُ",
        "translation": "hərəkət etdirir",
        "examples": [
          {
            "arabic": "هُوَ يُحَرِّكُ الآنَ.",
            "translation": "O, indi hərəkət etdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "حَرِّكْ",
        "translation": "hərəkət etdir!",
        "examples": [
          {
            "arabic": "حَرِّكْ.",
            "translation": "hərəkət etdir!"
          }
        ]
      }
    }
  },
  {
    "id": 537,
    "arabic": "سَحَبَ",
    "meaning": "çəkmək",
    "forms": {
      "past": {
        "arabic": "سَحَبَ",
        "translation": "çəkdi",
        "examples": [
          {
            "arabic": "هُوَ سَحَبَ أَمْسِ.",
            "translation": "O, dün çəkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْحَبُ",
        "translation": "çəkir",
        "examples": [
          {
            "arabic": "هُوَ يَسْحَبُ الآنَ.",
            "translation": "O, indi çəkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْحَبْ",
        "translation": "çək!",
        "examples": [
          {
            "arabic": "اِسْحَبْ.",
            "translation": "çək!"
          }
        ]
      }
    }
  },
  {
    "id": 538,
    "arabic": "رَمَى",
    "meaning": "atmaq",
    "forms": {
      "past": {
        "arabic": "رَمَى",
        "translation": "atdı",
        "examples": [
          {
            "arabic": "هُوَ رَمَى أَمْسِ.",
            "translation": "O, dün atdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْمِي",
        "translation": "atır",
        "examples": [
          {
            "arabic": "هُوَ يَرْمِي الآنَ.",
            "translation": "O, indi atır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْمِ",
        "translation": "at!",
        "examples": [
          {
            "arabic": "اِرْمِ.",
            "translation": "at!"
          }
        ]
      }
    }
  },
  {
    "id": 539,
    "arabic": "أَلْقَى",
    "meaning": "atmaq, söyləmək",
    "forms": {
      "past": {
        "arabic": "أَلْقَى",
        "translation": "atdı / söylədi",
        "examples": [
          {
            "arabic": "هُوَ أَلْقَى أَمْسِ.",
            "translation": "O, dün atmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُلْقِي",
        "translation": "atır / söyləyir",
        "examples": [
          {
            "arabic": "هُوَ يُلْقِي الآنَ.",
            "translation": "O, indi atmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَلْقِ",
        "translation": "at! / söylə!",
        "examples": [
          {
            "arabic": "أَلْقِ.",
            "translation": "atmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 540,
    "arabic": "رَكَلَ",
    "meaning": "təpik vurmaq",
    "forms": {
      "past": {
        "arabic": "رَكَلَ",
        "translation": "təpik vurdu",
        "examples": [
          {
            "arabic": "هُوَ رَكَلَ أَمْسِ.",
            "translation": "O, dün təpik vurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَرْكُلُ",
        "translation": "təpik vurur",
        "examples": [
          {
            "arabic": "هُوَ يَرْكُلُ الآنَ.",
            "translation": "O, indi təpik vurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْكُلْ",
        "translation": "təpik vur!",
        "examples": [
          {
            "arabic": "اُرْكُلْ.",
            "translation": "təpik vur!"
          }
        ]
      }
    }
  },
  {
    "id": 541,
    "arabic": "ضَرَبَ",
    "meaning": "vurmaq",
    "forms": {
      "past": {
        "arabic": "ضَرَبَ",
        "translation": "vurdu",
        "examples": [
          {
            "arabic": "هُوَ ضَرَبَ أَمْسِ.",
            "translation": "O, dün vurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَضْرِبُ",
        "translation": "vurur",
        "examples": [
          {
            "arabic": "هُوَ يَضْرِبُ الآنَ.",
            "translation": "O, indi vurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِضْرِبْ",
        "translation": "vur!",
        "examples": [
          {
            "arabic": "اِضْرِبْ.",
            "translation": "vur!"
          }
        ]
      }
    }
  },
  {
    "id": 542,
    "arabic": "لَمَسَ",
    "meaning": "toxunmaq",
    "forms": {
      "past": {
        "arabic": "لَمَسَ",
        "translation": "toxundu",
        "examples": [
          {
            "arabic": "هُوَ لَمَسَ أَمْسِ.",
            "translation": "O, dün toxundu."
          }
        ]
      },
      "present": {
        "arabic": "يَلْمِسُ",
        "translation": "toxunur",
        "examples": [
          {
            "arabic": "هُوَ يَلْمِسُ الآنَ.",
            "translation": "O, indi toxunur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْمِسْ",
        "translation": "toxun!",
        "examples": [
          {
            "arabic": "اِلْمِسْ.",
            "translation": "toxun!"
          }
        ]
      }
    }
  },
  {
    "id": 543,
    "arabic": "أَمْسَكَ",
    "meaning": "tutmaq",
    "forms": {
      "past": {
        "arabic": "أَمْسَكَ",
        "translation": "tuttu",
        "examples": [
          {
            "arabic": "هُوَ أَمْسَكَ أَمْسِ.",
            "translation": "O, dün tutdu."
          }
        ]
      },
      "present": {
        "arabic": "يُمْسِكُ",
        "translation": "tutur",
        "examples": [
          {
            "arabic": "هُوَ يُمْسِكُ الآنَ.",
            "translation": "O, indi tutur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَمْسِكْ",
        "translation": "tut!",
        "examples": [
          {
            "arabic": "أَمْسِكْ.",
            "translation": "tut!"
          }
        ]
      }
    }
  },
  {
    "id": 544,
    "arabic": "مَلَكَ",
    "meaning": "sahib olmaq",
    "forms": {
      "past": {
        "arabic": "مَلَكَ",
        "translation": "sahib oldu",
        "examples": [
          {
            "arabic": "هُوَ مَلَكَ أَمْسِ.",
            "translation": "O, dün sahib oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَمْلِكُ",
        "translation": "sahib olur",
        "examples": [
          {
            "arabic": "هُوَ يَمْلِكُ الآنَ.",
            "translation": "O, indi sahib olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْلِكْ",
        "translation": "sahib ol!",
        "examples": [
          {
            "arabic": "اِمْلِكْ.",
            "translation": "sahib ol!"
          }
        ]
      }
    }
  },
  {
    "id": 545,
    "arabic": "عَصَرَ",
    "meaning": "sıxmaq, şirəsini çıxarmaq",
    "forms": {
      "past": {
        "arabic": "عَصَرَ",
        "translation": "sıxdı",
        "examples": [
          {
            "arabic": "هُوَ عَصَرَ أَمْسِ.",
            "translation": "O, dünən sıxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْصِرُ",
        "translation": "sıxır",
        "examples": [
          {
            "arabic": "هُوَ يَعْصِرُ الآنَ.",
            "translation": "O, indi sıxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْصِرْ",
        "translation": "sıx!",
        "examples": [
          {
            "arabic": "اِعْصِرْ.",
            "translation": "sıx!"
          }
        ]
      }
    }
  },
  {
    "id": 546,
    "arabic": "اِسْتَحَقَّ",
    "meaning": "layiq olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَحَقَّ",
        "translation": "layiq oldu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَحَقَّ أَمْسِ.",
            "translation": "O, dün layiq oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَحِقُّ",
        "translation": "layiq olur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَحِقُّ الآنَ.",
            "translation": "O, indi layiq olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَحِقَّ",
        "translation": "layiq ol!",
        "examples": [
          {
            "arabic": "اِسْتَحِقَّ.",
            "translation": "layiq ol!"
          }
        ]
      }
    }
  },
  {
    "id": 547,
    "arabic": "اِسْتَفْتَى",
    "meaning": "fətva istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَفْتَى",
        "translation": "fətva istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَفْتَى أَمْسِ.",
            "translation": "O, dün fətva istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَفْتِي",
        "translation": "fətva istəir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَفْتِي الآنَ.",
            "translation": "O, indi fətva istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَفْتِ",
        "translation": "fətva istə!",
        "examples": [
          {
            "arabic": "اِسْتَفْتِ.",
            "translation": "fətva istə!"
          }
        ]
      }
    }
  },
  {
    "id": 548,
    "arabic": "صَلَّى",
    "meaning": "namaz qılmaq",
    "forms": {
      "past": {
        "arabic": "صَلَّى",
        "translation": "namaz qıldı",
        "examples": [
          {
            "arabic": "هُوَ صَلَّى أَمْسِ.",
            "translation": "O, dün namaz qıldı."
          }
        ]
      },
      "present": {
        "arabic": "يُصَلِّي",
        "translation": "namaz qılır",
        "examples": [
          {
            "arabic": "هُوَ يُصَلِّي الآنَ.",
            "translation": "O, indi namaz qılır."
          }
        ]
      },
      "imperative": {
        "arabic": "صَلِّ",
        "translation": "namaz qıl!",
        "examples": [
          {
            "arabic": "صَلِّ.",
            "translation": "namaz qıl!"
          }
        ]
      }
    }
  },
  {
    "id": 549,
    "arabic": "غَمَسَ",
    "meaning": "batırmaq, daldırmaq",
    "forms": {
      "past": {
        "arabic": "غَمَسَ",
        "translation": "batırdı",
        "examples": [
          {
            "arabic": "هُوَ غَمَسَ أَمْسِ.",
            "translation": "O, dünən batırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَغْمِسُ",
        "translation": "batırır",
        "examples": [
          {
            "arabic": "هُوَ يَغْمِسُ الآنَ.",
            "translation": "O, indi batırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْمِسْ",
        "translation": "batır!",
        "examples": [
          {
            "arabic": "اِغْمِسْ.",
            "translation": "batır!"
          }
        ]
      }
    }
  },
  {
    "id": 550,
    "arabic": "زَكَّى",
    "meaning": "təmizləmək, zəkat vermək",
    "forms": {
      "past": {
        "arabic": "زَكَّى",
        "translation": "təmizlədi / zəkat verdi",
        "examples": [
          {
            "arabic": "هُوَ زَكَّى أَمْسِ.",
            "translation": "O, dün təmizləməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُزَكِّي",
        "translation": "təmizləyir / zəkat verir",
        "examples": [
          {
            "arabic": "هُوَ يُزَكِّي الآنَ.",
            "translation": "O, indi təmizləməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "زَكِّ",
        "translation": "təmizlə! / zəkat ver!",
        "examples": [
          {
            "arabic": "زَكِّ.",
            "translation": "təmizləmək!"
          }
        ]
      }
    }
  },
  {
    "id": 551,
    "arabic": "هَدَى",
    "meaning": "hidayət etmək",
    "forms": {
      "past": {
        "arabic": "هَدَى",
        "translation": "hidayət etdi",
        "examples": [
          {
            "arabic": "هُوَ هَدَى أَمْسِ.",
            "translation": "O, dün hidayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْدِي",
        "translation": "hidayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَهْدِي الآنَ.",
            "translation": "O, indi hidayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْدِ",
        "translation": "hidayət et!",
        "examples": [
          {
            "arabic": "اِهْدِ.",
            "translation": "hidayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 552,
    "arabic": "أَرْشَدَ",
    "meaning": "doğru yol göstərmək",
    "forms": {
      "past": {
        "arabic": "أَرْشَدَ",
        "translation": "doğru yol göstərdi",
        "examples": [
          {
            "arabic": "هُوَ أَرْشَدَ أَمْسِ.",
            "translation": "O, dün doğru yol göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرْشِدُ",
        "translation": "doğru yol göstərir",
        "examples": [
          {
            "arabic": "هُوَ يُرْشِدُ الآنَ.",
            "translation": "O, indi doğru yol göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَرْشِدْ",
        "translation": "doğru yol göstər!",
        "examples": [
          {
            "arabic": "أَرْشِدْ.",
            "translation": "doğru yol göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 553,
    "arabic": "نَصَرَ",
    "meaning": "kömək etmək, qalib etdirmək",
    "forms": {
      "past": {
        "arabic": "نَصَرَ",
        "translation": "kömək etdi / qalib gətirdi",
        "examples": [
          {
            "arabic": "هُوَ نَصَرَ أَمْسِ.",
            "translation": "O, dün kömək etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْصُرُ",
        "translation": "kömək edir / qalib gətirir",
        "examples": [
          {
            "arabic": "هُوَ يَنْصُرُ الآنَ.",
            "translation": "O, indi kömək etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْصُرْ",
        "translation": "kömək et! / qalib gətir!",
        "examples": [
          {
            "arabic": "اُنْصُرْ.",
            "translation": "kömək etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 554,
    "arabic": "شَحَذَ",
    "meaning": "itiləmək",
    "forms": {
      "past": {
        "arabic": "شَحَذَ",
        "translation": "itilədi",
        "examples": [
          {
            "arabic": "هُوَ شَحَذَ أَمْسِ.",
            "translation": "O, dünən itilədi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْحَذُ",
        "translation": "itiləyir",
        "examples": [
          {
            "arabic": "هُوَ يَشْحَذُ الآنَ.",
            "translation": "O, indi itiləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْحَذْ",
        "translation": "itilə!",
        "examples": [
          {
            "arabic": "اِشْحَذْ.",
            "translation": "itilə!"
          }
        ]
      }
    }
  },
  {
    "id": 555,
    "arabic": "حَارَبَ",
    "meaning": "müharibə etmək",
    "forms": {
      "past": {
        "arabic": "حَارَبَ",
        "translation": "müharibə etdi",
        "examples": [
          {
            "arabic": "هُوَ حَارَبَ أَمْسِ.",
            "translation": "O, dün müharibə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحَارِبُ",
        "translation": "müharibə edir",
        "examples": [
          {
            "arabic": "هُوَ يُحَارِبُ الآنَ.",
            "translation": "O, indi müharibə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "حَارِبْ",
        "translation": "müharibə et!",
        "examples": [
          {
            "arabic": "حَارِبْ.",
            "translation": "müharibə et!"
          }
        ]
      }
    }
  },
  {
    "id": 556,
    "arabic": "اِنْهَزَمَ",
    "meaning": "məğlub olmaq",
    "forms": {
      "past": {
        "arabic": "اِنْهَزَمَ",
        "translation": "məğlub oldu",
        "examples": [
          {
            "arabic": "هُوَ اِنْهَزَمَ أَمْسِ.",
            "translation": "O, dün məğlub oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْهَزِمُ",
        "translation": "məğlub olur",
        "examples": [
          {
            "arabic": "هُوَ يَنْهَزِمُ الآنَ.",
            "translation": "O, indi məğlub olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْهَزِمْ",
        "translation": "məğlub ol!",
        "examples": [
          {
            "arabic": "اِنْهَزِمْ.",
            "translation": "məğlub ol!"
          }
        ]
      }
    }
  },
  {
    "id": 557,
    "arabic": "قَتَلَ",
    "meaning": "öldürmək",
    "forms": {
      "past": {
        "arabic": "قَتَلَ",
        "translation": "öldürdü",
        "examples": [
          {
            "arabic": "هُوَ قَتَلَ أَمْسِ.",
            "translation": "O, dün öldürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتُلُ",
        "translation": "öldürür",
        "examples": [
          {
            "arabic": "هُوَ يَقْتُلُ الآنَ.",
            "translation": "O, indi öldürür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُقْتُلْ",
        "translation": "öldür!",
        "examples": [
          {
            "arabic": "اُقْتُلْ.",
            "translation": "öldür!"
          }
        ]
      }
    }
  },
  {
    "id": 558,
    "arabic": "أَسَرَ",
    "meaning": "əsir almaq",
    "forms": {
      "past": {
        "arabic": "أَسَرَ",
        "translation": "əsir aldı",
        "examples": [
          {
            "arabic": "هُوَ أَسَرَ أَمْسِ.",
            "translation": "O, dün əsir aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَأْسِرُ",
        "translation": "əsir alır",
        "examples": [
          {
            "arabic": "هُوَ يَأْسِرُ الآنَ.",
            "translation": "O, indi əsir alır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِأْسِرْ",
        "translation": "əsir al!",
        "examples": [
          {
            "arabic": "اِأْسِرْ.",
            "translation": "əsir al!"
          }
        ]
      }
    }
  },
  {
    "id": 559,
    "arabic": "أَطْلَقَ",
    "meaning": "azad etmək, buraxmaq",
    "forms": {
      "past": {
        "arabic": "أَطْلَقَ",
        "translation": "azad etdi / buraxdı",
        "examples": [
          {
            "arabic": "هُوَ أَطْلَقَ أَمْسِ.",
            "translation": "O, dün azad etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُطْلِقُ",
        "translation": "azad edir / buraxır",
        "examples": [
          {
            "arabic": "هُوَ يُطْلِقُ الآنَ.",
            "translation": "O, indi azad etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَطْلِقْ",
        "translation": "azad et! / burax!",
        "examples": [
          {
            "arabic": "أَطْلِقْ.",
            "translation": "azad etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 560,
    "arabic": "حَرَّرَ",
    "meaning": "azad etmək",
    "forms": {
      "past": {
        "arabic": "حَرَّرَ",
        "translation": "azad etdi",
        "examples": [
          {
            "arabic": "هُوَ حَرَّرَ أَمْسِ.",
            "translation": "O, dün azad etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُحَرِّرُ",
        "translation": "azad edir",
        "examples": [
          {
            "arabic": "هُوَ يُحَرِّرُ الآنَ.",
            "translation": "O, indi azad etır."
          }
        ]
      },
      "imperative": {
        "arabic": "حَرِّرْ",
        "translation": "azad et!",
        "examples": [
          {
            "arabic": "حَرِّرْ.",
            "translation": "azad et!"
          }
        ]
      }
    }
  },
  {
    "id": 561,
    "arabic": "اِحْتَلَّ",
    "meaning": "işğal etmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَلَّ",
        "translation": "işğal etdi",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَلَّ أَمْسِ.",
            "translation": "O, dün işğal etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَلُّ",
        "translation": "işğal edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَلُّ الآنَ.",
            "translation": "O, indi işğal etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَلَّ",
        "translation": "işğal et!",
        "examples": [
          {
            "arabic": "اِحْتَلَّ.",
            "translation": "işğal et!"
          }
        ]
      }
    }
  },
  {
    "id": 562,
    "arabic": "هَرَبَ",
    "meaning": "qaçmaq",
    "forms": {
      "past": {
        "arabic": "هَرَبَ",
        "translation": "qaçdı",
        "examples": [
          {
            "arabic": "هُوَ هَرَبَ أَمْسِ.",
            "translation": "O, dün qaçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْرُبُ",
        "translation": "qaçır",
        "examples": [
          {
            "arabic": "هُوَ يَهْرُبُ الآنَ.",
            "translation": "O, indi qaçır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْرُبْ",
        "translation": "qaç!",
        "examples": [
          {
            "arabic": "اِهْرُبْ.",
            "translation": "qaç!"
          }
        ]
      }
    }
  },
  {
    "id": 563,
    "arabic": "طَارَدَ",
    "meaning": "təqib etmək",
    "forms": {
      "past": {
        "arabic": "طَارَدَ",
        "translation": "təqib etdi",
        "examples": [
          {
            "arabic": "هُوَ طَارَدَ أَمْسِ.",
            "translation": "O, dün təqib etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُطَارِدُ",
        "translation": "təqib edir",
        "examples": [
          {
            "arabic": "هُوَ يُطَارِدُ الآنَ.",
            "translation": "O, indi təqib etir."
          }
        ]
      },
      "imperative": {
        "arabic": "طَارِدْ",
        "translation": "təqib et!",
        "examples": [
          {
            "arabic": "طَارِدْ.",
            "translation": "təqib et!"
          }
        ]
      }
    }
  },
  {
    "id": 564,
    "arabic": "تَبِعَ",
    "meaning": "izləmək",
    "forms": {
      "past": {
        "arabic": "تَبِعَ",
        "translation": "izlədi",
        "examples": [
          {
            "arabic": "هُوَ تَبِعَ أَمْسِ.",
            "translation": "O, dün izlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَتْبَعُ",
        "translation": "izləyir",
        "examples": [
          {
            "arabic": "هُوَ يَتْبَعُ الآنَ.",
            "translation": "O, indi izləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتْبَعْ",
        "translation": "izlə!",
        "examples": [
          {
            "arabic": "اِتْبَعْ.",
            "translation": "izlə!"
          }
        ]
      }
    }
  },
  {
    "id": 565,
    "arabic": "غَرَزَ",
    "meaning": "batırmaq, sancmaq",
    "forms": {
      "past": {
        "arabic": "غَرَزَ",
        "translation": "batırdı",
        "examples": [
          {
            "arabic": "هُوَ غَرَزَ أَمْسِ.",
            "translation": "O, dünən batırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَغْرِزُ",
        "translation": "batırır",
        "examples": [
          {
            "arabic": "هُوَ يَغْرِزُ الآنَ.",
            "translation": "O, indi batırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْرِزْ",
        "translation": "batır!",
        "examples": [
          {
            "arabic": "اِغْرِزْ.",
            "translation": "batır!"
          }
        ]
      }
    }
  },
  {
    "id": 566,
    "arabic": "فَرَزَ",
    "meaning": "ayırmaq, çeşidləmək",
    "forms": {
      "past": {
        "arabic": "فَرَزَ",
        "translation": "ayırdı",
        "examples": [
          {
            "arabic": "هُوَ فَرَزَ أَمْسِ.",
            "translation": "O, dünən ayırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْرِزُ",
        "translation": "ayırır",
        "examples": [
          {
            "arabic": "هُوَ يَفْرِزُ الآنَ.",
            "translation": "O, indi ayırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْرِزْ",
        "translation": "ayır!",
        "examples": [
          {
            "arabic": "اِفْرِزْ.",
            "translation": "ayır!"
          }
        ]
      }
    }
  },
  {
    "id": 567,
    "arabic": "قَصَدَ",
    "meaning": "niyyət etmək, yönəlmək",
    "forms": {
      "past": {
        "arabic": "قَصَدَ",
        "translation": "niyyət etdi / yönəldi",
        "examples": [
          {
            "arabic": "هُوَ قَصَدَ أَمْسِ.",
            "translation": "O, dün niyyət etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْصِدُ",
        "translation": "niyyət edir / yönəlir",
        "examples": [
          {
            "arabic": "هُوَ يَقْصِدُ الآنَ.",
            "translation": "O, indi niyyət etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْصِدْ",
        "translation": "niyyət et! / yönəl!",
        "examples": [
          {
            "arabic": "اِقْصِدْ.",
            "translation": "niyyət etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 568,
    "arabic": "تَوَجَّهَ",
    "meaning": "yönəlmək",
    "forms": {
      "past": {
        "arabic": "تَوَجَّهَ",
        "translation": "yönəldi",
        "examples": [
          {
            "arabic": "هُوَ تَوَجَّهَ أَمْسِ.",
            "translation": "O, dün yönəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَجَّهُ",
        "translation": "yönəlir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَجَّهُ الآنَ.",
            "translation": "O, indi yönəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَجَّهْ",
        "translation": "yönəl!",
        "examples": [
          {
            "arabic": "تَوَجَّهْ.",
            "translation": "yönəl!"
          }
        ]
      }
    }
  },
  {
    "id": 569,
    "arabic": "وَجَّهَ",
    "meaning": "yönəltmək",
    "forms": {
      "past": {
        "arabic": "وَجَّهَ",
        "translation": "yönəltdi",
        "examples": [
          {
            "arabic": "هُوَ وَجَّهَ أَمْسِ.",
            "translation": "O, dün yönəltdi."
          }
        ]
      },
      "present": {
        "arabic": "يُوَجِّهُ",
        "translation": "yönəltir",
        "examples": [
          {
            "arabic": "هُوَ يُوَجِّهُ الآنَ.",
            "translation": "O, indi yönəltir."
          }
        ]
      },
      "imperative": {
        "arabic": "وَجِّهْ",
        "translation": "yönəlt!",
        "examples": [
          {
            "arabic": "وَجِّهْ.",
            "translation": "yönəlt!"
          }
        ]
      }
    }
  },
  {
    "id": 570,
    "arabic": "بَرَعَ",
    "meaning": "fərqlənmək, ustalaşmaq",
    "forms": {
      "past": {
        "arabic": "بَرَعَ",
        "translation": "fərqləndi",
        "examples": [
          {
            "arabic": "هُوَ بَرَعَ أَمْسِ.",
            "translation": "O, dünən fərqləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَبْرَعُ",
        "translation": "fərqlənir",
        "examples": [
          {
            "arabic": "هُوَ يَبْرَعُ الآنَ.",
            "translation": "O, indi fərqlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْرَعْ",
        "translation": "fərqlən!",
        "examples": [
          {
            "arabic": "اِبْرَعْ.",
            "translation": "fərqlən!"
          }
        ]
      }
    }
  },
  {
    "id": 571,
    "arabic": "لَقِيَ",
    "meaning": "qarşılaşmaq",
    "forms": {
      "past": {
        "arabic": "لَقِيَ",
        "translation": "qarşılaşdı",
        "examples": [
          {
            "arabic": "هُوَ لَقِيَ أَمْسِ.",
            "translation": "O, dün qarşılaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْقَى",
        "translation": "qarşılaşır",
        "examples": [
          {
            "arabic": "هُوَ يَلْقَى الآنَ.",
            "translation": "O, indi qarşılaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْقَ",
        "translation": "qarşılaş!",
        "examples": [
          {
            "arabic": "اِلْقَ.",
            "translation": "qarşılaş!"
          }
        ]
      }
    }
  },
  {
    "id": 572,
    "arabic": "لَاقَى",
    "meaning": "qarşılaşmaq",
    "forms": {
      "past": {
        "arabic": "لَاقَى",
        "translation": "qarşılaşdı",
        "examples": [
          {
            "arabic": "هُوَ لَاقَى أَمْسِ.",
            "translation": "O, dün qarşılaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يُلَاقِي",
        "translation": "qarşılaşır",
        "examples": [
          {
            "arabic": "هُوَ يُلَاقِي الآنَ.",
            "translation": "O, indi qarşılaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَاقِ",
        "translation": "qarşılaş!",
        "examples": [
          {
            "arabic": "لَاقِ.",
            "translation": "qarşılaş!"
          }
        ]
      }
    }
  },
  {
    "id": 573,
    "arabic": "صَادَفَ",
    "meaning": "rast gəlmək",
    "forms": {
      "past": {
        "arabic": "صَادَفَ",
        "translation": "rast gəldi",
        "examples": [
          {
            "arabic": "هُوَ صَادَفَ أَمْسِ.",
            "translation": "O, dün rast gəldi."
          }
        ]
      },
      "present": {
        "arabic": "يُصَادِفُ",
        "translation": "rast gəlir",
        "examples": [
          {
            "arabic": "هُوَ يُصَادِفُ الآنَ.",
            "translation": "O, indi rast gəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "صَادِفْ",
        "translation": "rast gəl!",
        "examples": [
          {
            "arabic": "صَادِفْ.",
            "translation": "rast gəl!"
          }
        ]
      }
    }
  },
  {
    "id": 574,
    "arabic": "ضَيَّفَ",
    "meaning": "qonaq etmək",
    "forms": {
      "past": {
        "arabic": "ضَيَّفَ",
        "translation": "qonaq etdi",
        "examples": [
          {
            "arabic": "هُوَ ضَيَّفَ أَمْسِ.",
            "translation": "O, dün qonaq etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُضَيِّفُ",
        "translation": "qonaq edir",
        "examples": [
          {
            "arabic": "هُوَ يُضَيِّفُ الآنَ.",
            "translation": "O, indi qonaq etır."
          }
        ]
      },
      "imperative": {
        "arabic": "ضَيِّفْ",
        "translation": "qonaq et!",
        "examples": [
          {
            "arabic": "ضَيِّفْ.",
            "translation": "qonaq et!"
          }
        ]
      }
    }
  },
  {
    "id": 575,
    "arabic": "أَذِنَ",
    "meaning": "icazə vermək",
    "forms": {
      "past": {
        "arabic": "أَذِنَ",
        "translation": "icazə verdi",
        "examples": [
          {
            "arabic": "هُوَ أَذِنَ أَمْسِ.",
            "translation": "O, dün icazə verdi."
          }
        ]
      },
      "present": {
        "arabic": "يَأْذَنُ",
        "translation": "icazə verir",
        "examples": [
          {
            "arabic": "هُوَ يَأْذَنُ الآنَ.",
            "translation": "O, indi icazə verir."
          }
        ]
      },
      "imperative": {
        "arabic": "ائْذَنْ",
        "translation": "icazə ver!",
        "examples": [
          {
            "arabic": "ائْذَنْ.",
            "translation": "icazə ver!"
          }
        ]
      }
    }
  },
  {
    "id": 576,
    "arabic": "شَكَا",
    "meaning": "şikayət etmək",
    "forms": {
      "past": {
        "arabic": "شَكَا",
        "translation": "şikayət etdi",
        "examples": [
          {
            "arabic": "هُوَ شَكَا أَمْسِ.",
            "translation": "O, dün şikayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْكُو",
        "translation": "şikayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْكُو الآنَ.",
            "translation": "O, indi şikayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْكُ",
        "translation": "şikayət et!",
        "examples": [
          {
            "arabic": "اِشْكُ.",
            "translation": "şikayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 577,
    "arabic": "اِشْتَكَى",
    "meaning": "şikayət etmək",
    "forms": {
      "past": {
        "arabic": "اِشْتَكَى",
        "translation": "şikayət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِشْتَكَى أَمْسِ.",
            "translation": "O, dün şikayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتَكِي",
        "translation": "şikayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْتَكِي الآنَ.",
            "translation": "O, indi şikayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْتَكِ",
        "translation": "şikayət et!",
        "examples": [
          {
            "arabic": "اِشْتَكِ.",
            "translation": "şikayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 578,
    "arabic": "عَانَى",
    "meaning": "əziyyət çəkmək",
    "forms": {
      "past": {
        "arabic": "عَانَى",
        "translation": "əziyyət çəkdi",
        "examples": [
          {
            "arabic": "هُوَ عَانَى أَمْسِ.",
            "translation": "O, dün əziyyət çəkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَانِي",
        "translation": "əziyyət çəkir",
        "examples": [
          {
            "arabic": "هُوَ يُعَانِي الآنَ.",
            "translation": "O, indi əziyyət çəkir."
          }
        ]
      },
      "imperative": {
        "arabic": "عَانِ",
        "translation": "əziyyət çək!",
        "examples": [
          {
            "arabic": "عَانِ.",
            "translation": "əziyyət çək!"
          }
        ]
      }
    }
  },
  {
    "id": 579,
    "arabic": "دَعَكَ",
    "meaning": "sürtmək",
    "forms": {
      "past": {
        "arabic": "دَعَكَ",
        "translation": "sürtdü",
        "examples": [
          {
            "arabic": "هُوَ دَعَكَ أَمْسِ.",
            "translation": "O, dünən sürtdü."
          }
        ]
      },
      "present": {
        "arabic": "يَدْعَكُ",
        "translation": "sürtür",
        "examples": [
          {
            "arabic": "هُوَ يَدْعَكُ الآنَ.",
            "translation": "O, indi sürtür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدْعَكْ",
        "translation": "sürt!",
        "examples": [
          {
            "arabic": "اِدْعَكْ.",
            "translation": "sürt!"
          }
        ]
      }
    }
  },
  {
    "id": 580,
    "arabic": "حَلِمَ",
    "meaning": "yuxu görmək",
    "forms": {
      "past": {
        "arabic": "حَلِمَ",
        "translation": "yuxu gördü",
        "examples": [
          {
            "arabic": "هُوَ حَلِمَ أَمْسِ.",
            "translation": "O, dünən yuxu gördü."
          }
        ]
      },
      "present": {
        "arabic": "يَحْلُمُ",
        "translation": "yuxu görür",
        "examples": [
          {
            "arabic": "هُوَ يَحْلُمُ الآنَ.",
            "translation": "O, indi yuxu görür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْلُمْ",
        "translation": "yuxu gör!",
        "examples": [
          {
            "arabic": "اِحْلُمْ.",
            "translation": "yuxu gör!"
          }
        ]
      }
    }
  },
  {
    "id": 581,
    "arabic": "اِنْتَظَمَ",
    "meaning": "nizamlanmaq",
    "forms": {
      "past": {
        "arabic": "اِنْتَظَمَ",
        "translation": "nizamlandı",
        "examples": [
          {
            "arabic": "هُوَ اِنْتَظَمَ أَمْسِ.",
            "translation": "O, dün nizamlandı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْتَظِمُ",
        "translation": "nizamlanır",
        "examples": [
          {
            "arabic": "هُوَ يَنْتَظِمُ الآنَ.",
            "translation": "O, indi nizamlanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْتَظِمْ",
        "translation": "nizamlan!",
        "examples": [
          {
            "arabic": "اِنْتَظِمْ.",
            "translation": "nizamlan!"
          }
        ]
      }
    }
  },
  {
    "id": 582,
    "arabic": "اِسْتَأْنَفَ",
    "meaning": "yenidən başlamaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَأْنَفَ",
        "translation": "yenidən başladı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَأْنَفَ أَمْسِ.",
            "translation": "O, dün yenidən başladı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَأْنِفُ",
        "translation": "yenidən başlayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَأْنِفُ الآنَ.",
            "translation": "O, indi yenidən başlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَأْنِفْ",
        "translation": "yenidən başla!",
        "examples": [
          {
            "arabic": "اِسْتَأْنِفْ.",
            "translation": "yenidən başla!"
          }
        ]
      }
    }
  },
  {
    "id": 583,
    "arabic": "شَاوَرَ",
    "meaning": "məsləhətləşmək",
    "forms": {
      "past": {
        "arabic": "شَاوَرَ",
        "translation": "məsləhətləşdi",
        "examples": [
          {
            "arabic": "هُوَ شَاوَرَ أَمْسِ.",
            "translation": "O, dün məsləhətləşdi."
          }
        ]
      },
      "present": {
        "arabic": "يُشَاوِرُ",
        "translation": "məsləhətləşir",
        "examples": [
          {
            "arabic": "هُوَ يُشَاوِرُ الآنَ.",
            "translation": "O, indi məsləhətləşir."
          }
        ]
      },
      "imperative": {
        "arabic": "شَاوِرْ",
        "translation": "məsləhətləş!",
        "examples": [
          {
            "arabic": "شَاوِرْ.",
            "translation": "məsləhətləş!"
          }
        ]
      }
    }
  },
  {
    "id": 584,
    "arabic": "اِسْتَجَابَ",
    "meaning": "cavab vermək",
    "forms": {
      "past": {
        "arabic": "اِسْتَجَابَ",
        "translation": "cavab verdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَجَابَ أَمْسِ.",
            "translation": "O, dün cavab verdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَجِيبُ",
        "translation": "cavab verir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَجِيبُ الآنَ.",
            "translation": "O, indi cavab verir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَجِبْ",
        "translation": "cavab ver!",
        "examples": [
          {
            "arabic": "اِسْتَجِبْ.",
            "translation": "cavab ver!"
          }
        ]
      }
    }
  },
  {
    "id": 585,
    "arabic": "حَلَبَ",
    "meaning": "sağmaq",
    "forms": {
      "past": {
        "arabic": "حَلَبَ",
        "translation": "sağdı",
        "examples": [
          {
            "arabic": "هُوَ حَلَبَ أَمْسِ.",
            "translation": "O, dünən sağdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْلُبُ",
        "translation": "sağır",
        "examples": [
          {
            "arabic": "هُوَ يَحْلُبُ الآنَ.",
            "translation": "O, indi sağır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْلُبْ",
        "translation": "sağ!",
        "examples": [
          {
            "arabic": "اُحْلُبْ.",
            "translation": "sağ!"
          }
        ]
      }
    }
  },
  {
    "id": 586,
    "arabic": "هَرَسَ",
    "meaning": "əzərək əzmək",
    "forms": {
      "past": {
        "arabic": "هَرَسَ",
        "translation": "əzdi",
        "examples": [
          {
            "arabic": "هُوَ هَرَسَ أَمْسِ.",
            "translation": "O, dünən əzdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْرِسُ",
        "translation": "əzər",
        "examples": [
          {
            "arabic": "هُوَ يَهْرِسُ الآنَ.",
            "translation": "O, indi əzərək əzir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْرِسْ",
        "translation": "əz!",
        "examples": [
          {
            "arabic": "اِهْرِسْ.",
            "translation": "əz!"
          }
        ]
      }
    }
  },
  {
    "id": 587,
    "arabic": "أَضَافَ",
    "meaning": "əlavə etmək",
    "forms": {
      "past": {
        "arabic": "أَضَافَ",
        "translation": "əlavə etdi",
        "examples": [
          {
            "arabic": "هُوَ أَضَافَ أَمْسِ.",
            "translation": "O, dün əlavə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُضِيفُ",
        "translation": "əlavə edir",
        "examples": [
          {
            "arabic": "هُوَ يُضِيفُ الآنَ.",
            "translation": "O, indi əlavə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَضِفْ",
        "translation": "əlavə et!",
        "examples": [
          {
            "arabic": "أَضِفْ.",
            "translation": "əlavə et!"
          }
        ]
      }
    }
  },
  {
    "id": 588,
    "arabic": "حَذَفَ",
    "meaning": "silmək",
    "forms": {
      "past": {
        "arabic": "حَذَفَ",
        "translation": "sildi",
        "examples": [
          {
            "arabic": "هُوَ حَذَفَ أَمْسِ.",
            "translation": "O, dün sildi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْذِفُ",
        "translation": "silir",
        "examples": [
          {
            "arabic": "هُوَ يَحْذِفُ الآنَ.",
            "translation": "O, indi silir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْذِفْ",
        "translation": "sil!",
        "examples": [
          {
            "arabic": "اِحْذِفْ.",
            "translation": "sil!"
          }
        ]
      }
    }
  },
  {
    "id": 589,
    "arabic": "نَقَلَ",
    "meaning": "köçürmək, nəql etmək",
    "forms": {
      "past": {
        "arabic": "نَقَلَ",
        "translation": "köçürdü / nəql etdi",
        "examples": [
          {
            "arabic": "هُوَ نَقَلَ أَمْسِ.",
            "translation": "O, dün köçürməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقُلُ",
        "translation": "köçürür / nəql edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْقُلُ الآنَ.",
            "translation": "O, indi köçürməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْقُلْ",
        "translation": "köçür! / nəql et!",
        "examples": [
          {
            "arabic": "اُنْقُلْ.",
            "translation": "köçürmək!"
          }
        ]
      }
    }
  },
  {
    "id": 590,
    "arabic": "نَقَشَ",
    "meaning": "oymaq, həkk etmək",
    "forms": {
      "past": {
        "arabic": "نَقَشَ",
        "translation": "oydu / həkk etdi",
        "examples": [
          {
            "arabic": "هُوَ نَقَشَ أَمْسِ.",
            "translation": "O, dünən oydu / həkk etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقُشُ",
        "translation": "oyur / həkk edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْقُشُ الآنَ.",
            "translation": "O, indi oymaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْقُشْ",
        "translation": "oy! / həkk et!",
        "examples": [
          {
            "arabic": "اُنْقُشْ.",
            "translation": "oymaq!"
          }
        ]
      }
    }
  },
  {
    "id": 591,
    "arabic": "صَوَّرَ",
    "meaning": "şəkil çəkmək",
    "forms": {
      "past": {
        "arabic": "صَوَّرَ",
        "translation": "şəkil çəkdi",
        "examples": [
          {
            "arabic": "هُوَ صَوَّرَ أَمْسِ.",
            "translation": "O, dün şəkil çəkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُصَوِّرُ",
        "translation": "şəkil çəkir",
        "examples": [
          {
            "arabic": "هُوَ يُصَوِّرُ الآنَ.",
            "translation": "O, indi şəkil çəkir."
          }
        ]
      },
      "imperative": {
        "arabic": "صَوِّرْ",
        "translation": "şəkil çək!",
        "examples": [
          {
            "arabic": "صَوِّرْ.",
            "translation": "şəkil çək!"
          }
        ]
      }
    }
  },
  {
    "id": 592,
    "arabic": "وَصَفَ",
    "meaning": "təsvir etmək",
    "forms": {
      "past": {
        "arabic": "وَصَفَ",
        "translation": "təsvir etdi",
        "examples": [
          {
            "arabic": "هُوَ وَصَفَ أَمْسِ.",
            "translation": "O, dün təsvir etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصِفُ",
        "translation": "təsvir edir",
        "examples": [
          {
            "arabic": "هُوَ يَصِفُ الآنَ.",
            "translation": "O, indi təsvir etir."
          }
        ]
      },
      "imperative": {
        "arabic": "صِفْ",
        "translation": "təsvir et!",
        "examples": [
          {
            "arabic": "صِفْ.",
            "translation": "təsvir et!"
          }
        ]
      }
    }
  },
  {
    "id": 593,
    "arabic": "قَارَنَ",
    "meaning": "müqayisə etmək",
    "forms": {
      "past": {
        "arabic": "قَارَنَ",
        "translation": "müqayisə etdi",
        "examples": [
          {
            "arabic": "هُوَ قَارَنَ أَمْسِ.",
            "translation": "O, dün müqayisə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَارِنُ",
        "translation": "müqayisə edir",
        "examples": [
          {
            "arabic": "هُوَ يُقَارِنُ الآنَ.",
            "translation": "O, indi müqayisə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَارِنْ",
        "translation": "müqayisə et!",
        "examples": [
          {
            "arabic": "قَارِنْ.",
            "translation": "müqayisə et!"
          }
        ]
      }
    }
  },
  {
    "id": 594,
    "arabic": "شَبَّهَ",
    "meaning": "bənzətmək",
    "forms": {
      "past": {
        "arabic": "شَبَّهَ",
        "translation": "bənzətdi",
        "examples": [
          {
            "arabic": "هُوَ شَبَّهَ أَمْسِ.",
            "translation": "O, dün bənzətdi."
          }
        ]
      },
      "present": {
        "arabic": "يُشَبِّهُ",
        "translation": "bənzətir",
        "examples": [
          {
            "arabic": "هُوَ يُشَبِّهُ الآنَ.",
            "translation": "O, indi bənzətir."
          }
        ]
      },
      "imperative": {
        "arabic": "شَبِّهْ",
        "translation": "bənzət!",
        "examples": [
          {
            "arabic": "شَبِّهْ.",
            "translation": "bənzət!"
          }
        ]
      }
    }
  },
  {
    "id": 595,
    "arabic": "مَيَّزَ",
    "meaning": "fərqləndirmək",
    "forms": {
      "past": {
        "arabic": "مَيَّزَ",
        "translation": "fərqləndirdi",
        "examples": [
          {
            "arabic": "هُوَ مَيَّزَ أَمْسِ.",
            "translation": "O, dün fərqləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُمَيِّزُ",
        "translation": "fərqləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُمَيِّزُ الآنَ.",
            "translation": "O, indi fərqləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "مَيِّزْ",
        "translation": "fərqləndir!",
        "examples": [
          {
            "arabic": "مَيِّزْ.",
            "translation": "fərqləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 596,
    "arabic": "فَرَّقَ",
    "meaning": "ayırmaq",
    "forms": {
      "past": {
        "arabic": "فَرَّقَ",
        "translation": "ayırdı",
        "examples": [
          {
            "arabic": "هُوَ فَرَّقَ أَمْسِ.",
            "translation": "O, dün ayırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُفَرِّقُ",
        "translation": "ayırır",
        "examples": [
          {
            "arabic": "هُوَ يُفَرِّقُ الآنَ.",
            "translation": "O, indi ayırır."
          }
        ]
      },
      "imperative": {
        "arabic": "فَرِّقْ",
        "translation": "ayır!",
        "examples": [
          {
            "arabic": "فَرِّقْ.",
            "translation": "ayır!"
          }
        ]
      }
    }
  },
  {
    "id": 597,
    "arabic": "جَمَعَ",
    "meaning": "toplamaq",
    "forms": {
      "past": {
        "arabic": "جَمَعَ",
        "translation": "topladı",
        "examples": [
          {
            "arabic": "هُوَ جَمَعَ أَمْسِ.",
            "translation": "O, dün topladı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْمَعُ",
        "translation": "toplayır",
        "examples": [
          {
            "arabic": "هُوَ يَجْمَعُ الآنَ.",
            "translation": "O, indi toplayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْمَعْ",
        "translation": "topla!",
        "examples": [
          {
            "arabic": "اِجْمَعْ.",
            "translation": "topla!"
          }
        ]
      }
    }
  },
  {
    "id": 598,
    "arabic": "مَرَحَ",
    "meaning": "şənlənmək",
    "forms": {
      "past": {
        "arabic": "مَرَحَ",
        "translation": "şənləndi",
        "examples": [
          {
            "arabic": "هُوَ مَرَحَ أَمْسِ.",
            "translation": "O, dünən şənləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْرَحُ",
        "translation": "şənlənir",
        "examples": [
          {
            "arabic": "هُوَ يَمْرَحُ الآنَ.",
            "translation": "O, indi şənlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْرَحْ",
        "translation": "şənlən!",
        "examples": [
          {
            "arabic": "اِمْرَحْ.",
            "translation": "şənlən!"
          }
        ]
      }
    }
  },
  {
    "id": 599,
    "arabic": "وَزَّعَ",
    "meaning": "paylamaq",
    "forms": {
      "past": {
        "arabic": "وَزَّعَ",
        "translation": "payladı",
        "examples": [
          {
            "arabic": "هُوَ وَزَّعَ أَمْسِ.",
            "translation": "O, dün payladı."
          }
        ]
      },
      "present": {
        "arabic": "يُوَزِّعُ",
        "translation": "paylayır",
        "examples": [
          {
            "arabic": "هُوَ يُوَزِّعُ الآنَ.",
            "translation": "O, indi paylayır."
          }
        ]
      },
      "imperative": {
        "arabic": "وَزِّعْ",
        "translation": "payla!",
        "examples": [
          {
            "arabic": "وَزِّعْ.",
            "translation": "payla!"
          }
        ]
      }
    }
  },
  {
    "id": 600,
    "arabic": "قَسَمَ",
    "meaning": "bölmək",
    "forms": {
      "past": {
        "arabic": "قَسَمَ",
        "translation": "böldü",
        "examples": [
          {
            "arabic": "هُوَ قَسَمَ أَمْسِ.",
            "translation": "O, dün böldü."
          }
        ]
      },
      "present": {
        "arabic": "يَقْسِمُ",
        "translation": "bölür",
        "examples": [
          {
            "arabic": "هُوَ يَقْسِمُ الآنَ.",
            "translation": "O, indi bölür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْسِمْ",
        "translation": "böl!",
        "examples": [
          {
            "arabic": "اِقْسِمْ.",
            "translation": "böl!"
          }
        ]
      }
    }
  },
  {
    "id": 601,
    "arabic": "نَبَضَ",
    "meaning": "döyünmək",
    "forms": {
      "past": {
        "arabic": "نَبَضَ",
        "translation": "döyündü",
        "examples": [
          {
            "arabic": "هُوَ نَبَضَ أَمْسِ.",
            "translation": "O, dünən döyündü."
          }
        ]
      },
      "present": {
        "arabic": "يَنْبِضُ",
        "translation": "döyünür",
        "examples": [
          {
            "arabic": "هُوَ يَنْبِضُ الآنَ.",
            "translation": "O, indi döyünür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْبِضْ",
        "translation": "döyün!",
        "examples": [
          {
            "arabic": "اِنْبِضْ.",
            "translation": "döyün!"
          }
        ]
      }
    }
  },
  {
    "id": 602,
    "arabic": "حَسَبَ",
    "meaning": "hesablamaq",
    "forms": {
      "past": {
        "arabic": "حَسَبَ",
        "translation": "hesablada",
        "examples": [
          {
            "arabic": "هُوَ حَسَبَ أَمْسِ.",
            "translation": "O, dün hesabladı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْسِبُ",
        "translation": "hesablaır",
        "examples": [
          {
            "arabic": "هُوَ يَحْسِبُ الآنَ.",
            "translation": "O, indi hesablayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْسِبْ",
        "translation": "hesabla!",
        "examples": [
          {
            "arabic": "اِحْسِبْ.",
            "translation": "hesabla!"
          }
        ]
      }
    }
  },
  {
    "id": 603,
    "arabic": "عَدَّ",
    "meaning": "saymaq",
    "forms": {
      "past": {
        "arabic": "عَدَّ",
        "translation": "sayda",
        "examples": [
          {
            "arabic": "هُوَ عَدَّ أَمْسِ.",
            "translation": "O, dün saydı."
          }
        ]
      },
      "present": {
        "arabic": "يَعُدُّ",
        "translation": "sayır",
        "examples": [
          {
            "arabic": "هُوَ يَعُدُّ الآنَ.",
            "translation": "O, indi sayır."
          }
        ]
      },
      "imperative": {
        "arabic": "عُدَّ",
        "translation": "say!",
        "examples": [
          {
            "arabic": "عُدَّ.",
            "translation": "say!"
          }
        ]
      }
    }
  },
  {
    "id": 604,
    "arabic": "قَاسَ",
    "meaning": "ölçmək",
    "forms": {
      "past": {
        "arabic": "قَاسَ",
        "translation": "ölçtü",
        "examples": [
          {
            "arabic": "هُوَ قَاسَ أَمْسِ.",
            "translation": "O, dün ölçdü."
          }
        ]
      },
      "present": {
        "arabic": "يَقِيسُ",
        "translation": "ölçür",
        "examples": [
          {
            "arabic": "هُوَ يَقِيسُ الآنَ.",
            "translation": "O, indi ölçür."
          }
        ]
      },
      "imperative": {
        "arabic": "قِسْ",
        "translation": "ölç!",
        "examples": [
          {
            "arabic": "قِسْ.",
            "translation": "ölç!"
          }
        ]
      }
    }
  },
  {
    "id": 605,
    "arabic": "زَيَّدَ",
    "meaning": "artırmaq",
    "forms": {
      "past": {
        "arabic": "زَيَّدَ",
        "translation": "artırdı",
        "examples": [
          {
            "arabic": "هُوَ زَيَّدَ أَمْسِ.",
            "translation": "O, dün artırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُزَيِّدُ",
        "translation": "artırır",
        "examples": [
          {
            "arabic": "هُوَ يُزَيِّدُ الآنَ.",
            "translation": "O, indi artırır."
          }
        ]
      },
      "imperative": {
        "arabic": "زَيِّدْ",
        "translation": "artır!",
        "examples": [
          {
            "arabic": "زَيِّدْ.",
            "translation": "artır!"
          }
        ]
      }
    }
  },
  {
    "id": 606,
    "arabic": "نَفَخَ",
    "meaning": "üfürmək",
    "forms": {
      "past": {
        "arabic": "نَفَخَ",
        "translation": "üfürdü",
        "examples": [
          {
            "arabic": "هُوَ نَفَخَ أَمْسِ.",
            "translation": "O, dünən üfürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَنْفُخُ",
        "translation": "üfürür",
        "examples": [
          {
            "arabic": "هُوَ يَنْفُخُ الآنَ.",
            "translation": "O, indi üfürür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْفُخْ",
        "translation": "üfür!",
        "examples": [
          {
            "arabic": "اُنْفُخْ.",
            "translation": "üfür!"
          }
        ]
      }
    }
  },
  {
    "id": 607,
    "arabic": "كَثُرَ",
    "meaning": "çoxalmaq",
    "forms": {
      "past": {
        "arabic": "كَثُرَ",
        "translation": "çoxalda",
        "examples": [
          {
            "arabic": "هُوَ كَثُرَ أَمْسِ.",
            "translation": "O, dün çoxaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْثُرُ",
        "translation": "çoxalır",
        "examples": [
          {
            "arabic": "هُوَ يَكْثُرُ الآنَ.",
            "translation": "O, indi çoxalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُكْثُرْ",
        "translation": "çoxal!",
        "examples": [
          {
            "arabic": "اُكْثُرْ.",
            "translation": "çoxal!"
          }
        ]
      }
    }
  },
  {
    "id": 608,
    "arabic": "قَلَّ",
    "meaning": "azalmaq",
    "forms": {
      "past": {
        "arabic": "قَلَّ",
        "translation": "azalda",
        "examples": [
          {
            "arabic": "هُوَ قَلَّ أَمْسِ.",
            "translation": "O, dün azaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَقِلُّ",
        "translation": "azalır",
        "examples": [
          {
            "arabic": "هُوَ يَقِلُّ الآنَ.",
            "translation": "O, indi azalır."
          }
        ]
      },
      "imperative": {
        "arabic": "قِلَّ",
        "translation": "azal!",
        "examples": [
          {
            "arabic": "قِلَّ.",
            "translation": "azal!"
          }
        ]
      }
    }
  },
  {
    "id": 609,
    "arabic": "اِسْتَوْعَبَ",
    "meaning": "tam qavramaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَوْعَبَ",
        "translation": "tam qavrada",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَوْعَبَ أَمْسِ.",
            "translation": "O, dün tam qavradı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَوْعِبُ",
        "translation": "tam qavraır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَوْعِبُ الآنَ.",
            "translation": "O, indi tam qavrayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَوْعِبْ",
        "translation": "tam qavra!",
        "examples": [
          {
            "arabic": "اِسْتَوْعِبْ.",
            "translation": "tam qavra!"
          }
        ]
      }
    }
  },
  {
    "id": 610,
    "arabic": "اِسْتَنْتَجَ",
    "meaning": "nəticə çıxarmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَنْتَجَ",
        "translation": "nəticə çıxarda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَنْتَجَ أَمْسِ.",
            "translation": "O, dün nəticə çıxardı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَنْتِجُ",
        "translation": "nəticə çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَنْتِجُ الآنَ.",
            "translation": "O, indi nəticə çıxarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَنْتِجْ",
        "translation": "nəticə çıxar!",
        "examples": [
          {
            "arabic": "اِسْتَنْتِجْ.",
            "translation": "nəticə çıxar!"
          }
        ]
      }
    }
  },
  {
    "id": 611,
    "arabic": "اِسْتَخْلَصَ",
    "meaning": "çıxarmaq, nəticə əldə etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَخْلَصَ",
        "translation": "çıxardı, nəticə əldə etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَخْلَصَ أَمْسِ.",
            "translation": "O, dün çıxarmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَخْلِصُ",
        "translation": "çıxarır, nəticə əldə edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَخْلِصُ الآنَ.",
            "translation": "O, indi çıxarmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَخْلِصْ",
        "translation": "çıxar, nəticə əldə et!",
        "examples": [
          {
            "arabic": "اِسْتَخْلِصْ.",
            "translation": "çıxarmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 612,
    "arabic": "اِسْتَثْنَى",
    "meaning": "istisna etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَثْنَى",
        "translation": "istisna etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَثْنَى أَمْسِ.",
            "translation": "O, dün istisna etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَثْنِي",
        "translation": "istisna edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَثْنِي الآنَ.",
            "translation": "O, indi istisna etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَثْنِ",
        "translation": "istisna et!",
        "examples": [
          {
            "arabic": "اِسْتَثْنِ.",
            "translation": "istisna et!"
          }
        ]
      }
    }
  },
  {
    "id": 613,
    "arabic": "اِعْتَمَدَ",
    "meaning": "əsaslanmaq",
    "forms": {
      "past": {
        "arabic": "اِعْتَمَدَ",
        "translation": "əsaslanda",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَمَدَ أَمْسِ.",
            "translation": "O, dün əsaslandı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَمِدُ",
        "translation": "əsaslanır",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَمِدُ الآنَ.",
            "translation": "O, indi əsaslanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَمِدْ",
        "translation": "əsaslan!",
        "examples": [
          {
            "arabic": "اِعْتَمِدْ.",
            "translation": "əsaslan!"
          }
        ]
      }
    }
  },
  {
    "id": 614,
    "arabic": "اِسْتَنَدَ",
    "meaning": "əsaslanmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَنَدَ",
        "translation": "əsaslanda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَنَدَ أَمْسِ.",
            "translation": "O, dün əsaslandı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَنِدُ",
        "translation": "əsaslanır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَنِدُ الآنَ.",
            "translation": "O, indi əsaslanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَنِدْ",
        "translation": "əsaslan!",
        "examples": [
          {
            "arabic": "اِسْتَنِدْ.",
            "translation": "əsaslan!"
          }
        ]
      }
    }
  },
  {
    "id": 615,
    "arabic": "اِقْتَرَحَ",
    "meaning": "təklif etmək",
    "forms": {
      "past": {
        "arabic": "اِقْتَرَحَ",
        "translation": "təklif etdi",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَرَحَ أَمْسِ.",
            "translation": "O, dün təklif etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَرِحُ",
        "translation": "təklif edir",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَرِحُ الآنَ.",
            "translation": "O, indi təklif etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَرِحْ",
        "translation": "təklif et!",
        "examples": [
          {
            "arabic": "اِقْتَرِحْ.",
            "translation": "təklif et!"
          }
        ]
      }
    }
  },
  {
    "id": 616,
    "arabic": "عَرَضَ",
    "meaning": "təqdim etmək",
    "forms": {
      "past": {
        "arabic": "عَرَضَ",
        "translation": "təqdim etdi",
        "examples": [
          {
            "arabic": "هُوَ عَرَضَ أَمْسِ.",
            "translation": "O, dün təqdim etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْرِضُ",
        "translation": "təqdim edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْرِضُ الآنَ.",
            "translation": "O, indi təqdim etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْرِضْ",
        "translation": "təqdim et!",
        "examples": [
          {
            "arabic": "اِعْرِضْ.",
            "translation": "təqdim et!"
          }
        ]
      }
    }
  },
  {
    "id": 617,
    "arabic": "طَوَّرَ",
    "meaning": "inkişaf etdirmək",
    "forms": {
      "past": {
        "arabic": "طَوَّرَ",
        "translation": "inkişaf etdirdi",
        "examples": [
          {
            "arabic": "هُوَ طَوَّرَ أَمْسِ.",
            "translation": "O, dün inkişaf etdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُطَوِّرُ",
        "translation": "inkişaf etdirir",
        "examples": [
          {
            "arabic": "هُوَ يُطَوِّرُ الآنَ.",
            "translation": "O, indi inkişaf etdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "طَوِّرْ",
        "translation": "inkişaf etdir!",
        "examples": [
          {
            "arabic": "طَوِّرْ.",
            "translation": "inkişaf etdir!"
          }
        ]
      }
    }
  },
  {
    "id": 618,
    "arabic": "تَطَوَّرَ",
    "meaning": "inkişaf etmək",
    "forms": {
      "past": {
        "arabic": "تَطَوَّرَ",
        "translation": "inkişaf etdi",
        "examples": [
          {
            "arabic": "هُوَ تَطَوَّرَ أَمْسِ.",
            "translation": "O, dün inkişaf etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَطَوَّرُ",
        "translation": "inkişaf edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَطَوَّرُ الآنَ.",
            "translation": "O, indi inkişaf etır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَطَوَّرْ",
        "translation": "inkişaf et!",
        "examples": [
          {
            "arabic": "تَطَوَّرْ.",
            "translation": "inkişaf et!"
          }
        ]
      }
    }
  },
  {
    "id": 619,
    "arabic": "نَقَرَ",
    "meaning": "taqqıldatmaq, dimdikləmək",
    "forms": {
      "past": {
        "arabic": "نَقَرَ",
        "translation": "taqqıldatdı",
        "examples": [
          {
            "arabic": "هُوَ نَقَرَ أَمْسِ.",
            "translation": "O, dünən taqqıldatdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقُرُ",
        "translation": "taqqıldadır",
        "examples": [
          {
            "arabic": "هُوَ يَنْقُرُ الآنَ.",
            "translation": "O, indi taqqıldadır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُنْقُرْ",
        "translation": "taqqıldat!",
        "examples": [
          {
            "arabic": "اُنْقُرْ.",
            "translation": "taqqıldat!"
          }
        ]
      }
    }
  },
  {
    "id": 620,
    "arabic": "خَفَقَ",
    "meaning": "çırpınmaq, döyünmək",
    "forms": {
      "past": {
        "arabic": "خَفَقَ",
        "translation": "çırpındı",
        "examples": [
          {
            "arabic": "هُوَ خَفَقَ أَمْسِ.",
            "translation": "O, dünən çırpındı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْفِقُ",
        "translation": "çırpınır",
        "examples": [
          {
            "arabic": "هُوَ يَخْفِقُ الآنَ.",
            "translation": "O, indi çırpınır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْفِقْ",
        "translation": "çırpın!",
        "examples": [
          {
            "arabic": "اِخْفِقْ.",
            "translation": "çırpın!"
          }
        ]
      }
    }
  },
  {
    "id": 621,
    "arabic": "نَمَّى",
    "meaning": "inkişaf etdirmək",
    "forms": {
      "past": {
        "arabic": "نَمَّى",
        "translation": "inkişaf etdirdi",
        "examples": [
          {
            "arabic": "هُوَ نَمَّى أَمْسِ.",
            "translation": "O, dün inkişaf etdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُنَمِّي",
        "translation": "inkişaf etdirir",
        "examples": [
          {
            "arabic": "هُوَ يُنَمِّي الآنَ.",
            "translation": "O, indi inkişaf etdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "نَمِّ",
        "translation": "inkişaf etdir!",
        "examples": [
          {
            "arabic": "نَمِّ.",
            "translation": "inkişaf etdir!"
          }
        ]
      }
    }
  },
  {
    "id": 622,
    "arabic": "رَبَّى",
    "meaning": "tərbiyə etmək",
    "forms": {
      "past": {
        "arabic": "رَبَّى",
        "translation": "tərbiyə etdi",
        "examples": [
          {
            "arabic": "هُوَ رَبَّى أَمْسِ.",
            "translation": "O, dün tərbiyə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرَبِّي",
        "translation": "tərbiyə edir",
        "examples": [
          {
            "arabic": "هُوَ يُرَبِّي الآنَ.",
            "translation": "O, indi tərbiyə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "رَبِّ",
        "translation": "tərbiyə et!",
        "examples": [
          {
            "arabic": "رَبِّ.",
            "translation": "tərbiyə et!"
          }
        ]
      }
    }
  },
  {
    "id": 623,
    "arabic": "تَرَبَّى",
    "meaning": "böyümək, tərbiyə almaq",
    "forms": {
      "past": {
        "arabic": "تَرَبَّى",
        "translation": "böyümək, tərbiyə alda",
        "examples": [
          {
            "arabic": "هُوَ تَرَبَّى أَمْسِ.",
            "translation": "O, dün böyüməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَرَبَّى",
        "translation": "böyümək, tərbiyə alır",
        "examples": [
          {
            "arabic": "هُوَ يَتَرَبَّى الآنَ.",
            "translation": "O, indi böyüməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَرَبَّ",
        "translation": "böyümək, tərbiyə al!",
        "examples": [
          {
            "arabic": "تَرَبَّ.",
            "translation": "böyümək!"
          }
        ]
      }
    }
  },
  {
    "id": 624,
    "arabic": "وَلَّدَ",
    "meaning": "doğurtmaq",
    "forms": {
      "past": {
        "arabic": "وَلَّدَ",
        "translation": "doğurttu",
        "examples": [
          {
            "arabic": "هُوَ وَلَّدَ أَمْسِ.",
            "translation": "O, dün doğurtdu."
          }
        ]
      },
      "present": {
        "arabic": "يُوَلِّدُ",
        "translation": "doğurtur",
        "examples": [
          {
            "arabic": "هُوَ يُوَلِّدُ الآنَ.",
            "translation": "O, indi doğurtur."
          }
        ]
      },
      "imperative": {
        "arabic": "وَلِّدْ",
        "translation": "doğurt!",
        "examples": [
          {
            "arabic": "وَلِّدْ.",
            "translation": "doğurt!"
          }
        ]
      }
    }
  },
  {
    "id": 625,
    "arabic": "أَنْجَبَ",
    "meaning": "övlad sahibi olmaq",
    "forms": {
      "past": {
        "arabic": "أَنْجَبَ",
        "translation": "övlad sahibi oldu",
        "examples": [
          {
            "arabic": "هُوَ أَنْجَبَ أَمْسِ.",
            "translation": "O, dün övlad sahibi oldu."
          }
        ]
      },
      "present": {
        "arabic": "يُنْجِبُ",
        "translation": "övlad sahibi olur",
        "examples": [
          {
            "arabic": "هُوَ يُنْجِبُ الآنَ.",
            "translation": "O, indi övlad sahibi olur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْجِبْ",
        "translation": "övlad sahibi ol!",
        "examples": [
          {
            "arabic": "أَنْجِبْ.",
            "translation": "övlad sahibi ol!"
          }
        ]
      }
    }
  },
  {
    "id": 626,
    "arabic": "تَزَوَّجَ",
    "meaning": "evlənmək",
    "forms": {
      "past": {
        "arabic": "تَزَوَّجَ",
        "translation": "evləndi",
        "examples": [
          {
            "arabic": "هُوَ تَزَوَّجَ أَمْسِ.",
            "translation": "O, dün evləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَزَوَّجُ",
        "translation": "evlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَزَوَّجُ الآنَ.",
            "translation": "O, indi evlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَزَوَّجْ",
        "translation": "evlən!",
        "examples": [
          {
            "arabic": "تَزَوَّجْ.",
            "translation": "evlən!"
          }
        ]
      }
    }
  },
  {
    "id": 627,
    "arabic": "زَوَّجَ",
    "meaning": "evləndirmək",
    "forms": {
      "past": {
        "arabic": "زَوَّجَ",
        "translation": "evləndirdi",
        "examples": [
          {
            "arabic": "هُوَ زَوَّجَ أَمْسِ.",
            "translation": "O, dün evləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُزَوِّجُ",
        "translation": "evləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُزَوِّجُ الآنَ.",
            "translation": "O, indi evləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "زَوِّجْ",
        "translation": "evləndir!",
        "examples": [
          {
            "arabic": "زَوِّجْ.",
            "translation": "evləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 628,
    "arabic": "طَلَّقَ",
    "meaning": "boşamaq",
    "forms": {
      "past": {
        "arabic": "طَلَّقَ",
        "translation": "boşada",
        "examples": [
          {
            "arabic": "هُوَ طَلَّقَ أَمْسِ.",
            "translation": "O, dün boşadı."
          }
        ]
      },
      "present": {
        "arabic": "يُطَلِّقُ",
        "translation": "boşaır",
        "examples": [
          {
            "arabic": "هُوَ يُطَلِّقُ الآنَ.",
            "translation": "O, indi boşayır."
          }
        ]
      },
      "imperative": {
        "arabic": "طَلِّقْ",
        "translation": "boşa!",
        "examples": [
          {
            "arabic": "طَلِّقْ.",
            "translation": "boşa!"
          }
        ]
      }
    }
  },
  {
    "id": 629,
    "arabic": "خَطَبَ",
    "meaning": "xütbə söyləmək, elçi getmək",
    "forms": {
      "past": {
        "arabic": "خَطَبَ",
        "translation": "xütbə söyləmək, elçi g etdi",
        "examples": [
          {
            "arabic": "هُوَ خَطَبَ أَمْسِ.",
            "translation": "O, dün xütbə söyləməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْطُبُ",
        "translation": "xütbə söyləmək, elçi g edir",
        "examples": [
          {
            "arabic": "هُوَ يَخْطُبُ الآنَ.",
            "translation": "O, indi xütbə söyləməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُخْطُبْ",
        "translation": "xütbə söyləmək, elçi g et!",
        "examples": [
          {
            "arabic": "اُخْطُبْ.",
            "translation": "xütbə söyləmək!"
          }
        ]
      }
    }
  },
  {
    "id": 630,
    "arabic": "أَنْقَذَ",
    "meaning": "xilas etmək",
    "forms": {
      "past": {
        "arabic": "أَنْقَذَ",
        "translation": "xilas etdi",
        "examples": [
          {
            "arabic": "هُوَ أَنْقَذَ أَمْسِ.",
            "translation": "O, dün xilas etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُنْقِذُ",
        "translation": "xilas edir",
        "examples": [
          {
            "arabic": "هُوَ يُنْقِذُ الآنَ.",
            "translation": "O, indi xilas etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْقِذْ",
        "translation": "xilas et!",
        "examples": [
          {
            "arabic": "أَنْقِذْ.",
            "translation": "xilas et!"
          }
        ]
      }
    }
  },
  {
    "id": 631,
    "arabic": "نَجَا",
    "meaning": "xilas olmaq",
    "forms": {
      "past": {
        "arabic": "نَجَا",
        "translation": "xilas oldu",
        "examples": [
          {
            "arabic": "هُوَ نَجَا أَمْسِ.",
            "translation": "O, dün xilas oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْجُو",
        "translation": "xilas olur",
        "examples": [
          {
            "arabic": "هُوَ يَنْجُو الآنَ.",
            "translation": "O, indi xilas olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْجُ",
        "translation": "xilas ol!",
        "examples": [
          {
            "arabic": "اِنْجُ.",
            "translation": "xilas ol!"
          }
        ]
      }
    }
  },
  {
    "id": 632,
    "arabic": "أَسْعَدَ",
    "meaning": "xoşbəxt etmək",
    "forms": {
      "past": {
        "arabic": "أَسْعَدَ",
        "translation": "xoşbəxt etdi",
        "examples": [
          {
            "arabic": "هُوَ أَسْعَدَ أَمْسِ.",
            "translation": "O, dün xoşbəxt etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسْعِدُ",
        "translation": "xoşbəxt edir",
        "examples": [
          {
            "arabic": "هُوَ يُسْعِدُ الآنَ.",
            "translation": "O, indi xoşbəxt etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَسْعِدْ",
        "translation": "xoşbəxt et!",
        "examples": [
          {
            "arabic": "أَسْعِدْ.",
            "translation": "xoşbəxt et!"
          }
        ]
      }
    }
  },
  {
    "id": 633,
    "arabic": "فَرَّجَ",
    "meaning": "rahatlatmaq",
    "forms": {
      "past": {
        "arabic": "فَرَّجَ",
        "translation": "rahatlatta",
        "examples": [
          {
            "arabic": "هُوَ فَرَّجَ أَمْسِ.",
            "translation": "O, dün rahatlatdı."
          }
        ]
      },
      "present": {
        "arabic": "يُفَرِّجُ",
        "translation": "rahatlatır",
        "examples": [
          {
            "arabic": "هُوَ يُفَرِّجُ الآنَ.",
            "translation": "O, indi rahatlatır."
          }
        ]
      },
      "imperative": {
        "arabic": "فَرِّجْ",
        "translation": "rahatlat!",
        "examples": [
          {
            "arabic": "فَرِّجْ.",
            "translation": "rahatlat!"
          }
        ]
      }
    }
  },
  {
    "id": 634,
    "arabic": "غَمَرَ",
    "meaning": "örtmək, bürümək",
    "forms": {
      "past": {
        "arabic": "غَمَرَ",
        "translation": "örtdü",
        "examples": [
          {
            "arabic": "هُوَ غَمَرَ أَمْسِ.",
            "translation": "O, dünən örtdü."
          }
        ]
      },
      "present": {
        "arabic": "يَغْمُرُ",
        "translation": "örtür",
        "examples": [
          {
            "arabic": "هُوَ يَغْمُرُ الآنَ.",
            "translation": "O, indi örtür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُغْمُرْ",
        "translation": "ört!",
        "examples": [
          {
            "arabic": "اُغْمُرْ.",
            "translation": "ört!"
          }
        ]
      }
    }
  },
  {
    "id": 635,
    "arabic": "طَمَرَ",
    "meaning": "basdırmaq, gizlətmək",
    "forms": {
      "past": {
        "arabic": "طَمَرَ",
        "translation": "basdırdı",
        "examples": [
          {
            "arabic": "هُوَ طَمَرَ أَمْسِ.",
            "translation": "O, dünən basdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَطْمُرُ",
        "translation": "basdırır",
        "examples": [
          {
            "arabic": "هُوَ يَطْمُرُ الآنَ.",
            "translation": "O, indi basdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُطْمُرْ",
        "translation": "basdır!",
        "examples": [
          {
            "arabic": "اُطْمُرْ.",
            "translation": "basdır!"
          }
        ]
      }
    }
  },
  {
    "id": 636,
    "arabic": "أَخَافَ",
    "meaning": "qorxutmaq",
    "forms": {
      "past": {
        "arabic": "أَخَافَ",
        "translation": "qorxuttu",
        "examples": [
          {
            "arabic": "هُوَ أَخَافَ أَمْسِ.",
            "translation": "O, dün qorxutdu."
          }
        ]
      },
      "present": {
        "arabic": "يُخِيفُ",
        "translation": "qorxutur",
        "examples": [
          {
            "arabic": "هُوَ يُخِيفُ الآنَ.",
            "translation": "O, indi qorxutur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَخِفْ",
        "translation": "qorxut!",
        "examples": [
          {
            "arabic": "أَخِفْ.",
            "translation": "qorxut!"
          }
        ]
      }
    }
  },
  {
    "id": 637,
    "arabic": "هَدَّأَ",
    "meaning": "sakitləşdirmək",
    "forms": {
      "past": {
        "arabic": "هَدَّأَ",
        "translation": "sakitləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ هَدَّأَ أَمْسِ.",
            "translation": "O, dün sakitləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُهَدِّئُ",
        "translation": "sakitləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يُهَدِّئُ الآنَ.",
            "translation": "O, indi sakitləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "هَدِّئْ",
        "translation": "sakitləşdir!",
        "examples": [
          {
            "arabic": "هَدِّئْ.",
            "translation": "sakitləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 638,
    "arabic": "أَحْيَا",
    "meaning": "diriltmək",
    "forms": {
      "past": {
        "arabic": "أَحْيَا",
        "translation": "diriltti",
        "examples": [
          {
            "arabic": "هُوَ أَحْيَا أَمْسِ.",
            "translation": "O, dün diriltdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحْيِي",
        "translation": "diriltir",
        "examples": [
          {
            "arabic": "هُوَ يُحْيِي الآنَ.",
            "translation": "O, indi diriltir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَحْيِ",
        "translation": "dirilt!",
        "examples": [
          {
            "arabic": "أَحْيِ.",
            "translation": "dirilt!"
          }
        ]
      }
    }
  },
  {
    "id": 639,
    "arabic": "أَمَاتَ",
    "meaning": "öldürmək",
    "forms": {
      "past": {
        "arabic": "أَمَاتَ",
        "translation": "öldürdü",
        "examples": [
          {
            "arabic": "هُوَ أَمَاتَ أَمْسِ.",
            "translation": "O, dün öldürdü."
          }
        ]
      },
      "present": {
        "arabic": "يُمِيتُ",
        "translation": "öldürür",
        "examples": [
          {
            "arabic": "هُوَ يُمِيتُ الآنَ.",
            "translation": "O, indi öldürür."
          }
        ]
      },
      "imperative": {
        "arabic": "أَمِتْ",
        "translation": "öldür!",
        "examples": [
          {
            "arabic": "أَمِتْ.",
            "translation": "öldür!"
          }
        ]
      }
    }
  },
  {
    "id": 640,
    "arabic": "أَسْقَى",
    "meaning": "içirtmək",
    "forms": {
      "past": {
        "arabic": "أَسْقَى",
        "translation": "içirtti",
        "examples": [
          {
            "arabic": "هُوَ أَسْقَى أَمْسِ.",
            "translation": "O, dün içirtdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْقِي",
        "translation": "içirtir",
        "examples": [
          {
            "arabic": "هُوَ يَسْقِي الآنَ.",
            "translation": "O, indi içirtir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْقِ",
        "translation": "içirt!",
        "examples": [
          {
            "arabic": "اِسْقِ.",
            "translation": "içirt!"
          }
        ]
      }
    }
  },
  {
    "id": 641,
    "arabic": "دَرَجَ",
    "meaning": "addımlamaq, irəliləmək",
    "forms": {
      "past": {
        "arabic": "دَرَجَ",
        "translation": "addımladı",
        "examples": [
          {
            "arabic": "هُوَ دَرَجَ أَمْسِ.",
            "translation": "O, dünən addımladı."
          }
        ]
      },
      "present": {
        "arabic": "يَدْرُجُ",
        "translation": "addımlayır",
        "examples": [
          {
            "arabic": "هُوَ يَدْرُجُ الآنَ.",
            "translation": "O, indi addımlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُدْرُجْ",
        "translation": "addımla!",
        "examples": [
          {
            "arabic": "اُدْرُجْ.",
            "translation": "addımla!"
          }
        ]
      }
    }
  },
  {
    "id": 642,
    "arabic": "اِرْتَدَى",
    "meaning": "geyinmək",
    "forms": {
      "past": {
        "arabic": "اِرْتَدَى",
        "translation": "geyindi",
        "examples": [
          {
            "arabic": "هُوَ اِرْتَدَى أَمْسِ.",
            "translation": "O, dün geyindi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْتَدِي",
        "translation": "geyinir",
        "examples": [
          {
            "arabic": "هُوَ يَرْتَدِي الآنَ.",
            "translation": "O, indi geyinir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْتَدِ",
        "translation": "geyin!",
        "examples": [
          {
            "arabic": "اِرْتَدِ.",
            "translation": "geyin!"
          }
        ]
      }
    }
  },
  {
    "id": 643,
    "arabic": "اِسْتَحَمَّ",
    "meaning": "çimmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَحَمَّ",
        "translation": "çimdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَحَمَّ أَمْسِ.",
            "translation": "O, dün çimdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَحِمُّ",
        "translation": "çimir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَحِمُّ الآنَ.",
            "translation": "O, indi çimir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَحِمَّ",
        "translation": "çim!",
        "examples": [
          {
            "arabic": "اِسْتَحِمَّ.",
            "translation": "çim!"
          }
        ]
      }
    }
  },
  {
    "id": 644,
    "arabic": "تَنَظَّفَ",
    "meaning": "təmizlənmək",
    "forms": {
      "past": {
        "arabic": "تَنَظَّفَ",
        "translation": "təmizləndi",
        "examples": [
          {
            "arabic": "هُوَ تَنَظَّفَ أَمْسِ.",
            "translation": "O, dün təmizləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَنَظَّفُ",
        "translation": "təmizlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَنَظَّفُ الآنَ.",
            "translation": "O, indi təmizlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَنَظَّفْ",
        "translation": "təmizlən!",
        "examples": [
          {
            "arabic": "تَنَظَّفْ.",
            "translation": "təmizlən!"
          }
        ]
      }
    }
  },
  {
    "id": 645,
    "arabic": "مَشَّطَ",
    "meaning": "daramaq",
    "forms": {
      "past": {
        "arabic": "مَشَّطَ",
        "translation": "darada",
        "examples": [
          {
            "arabic": "هُوَ مَشَّطَ أَمْسِ.",
            "translation": "O, dün daradı."
          }
        ]
      },
      "present": {
        "arabic": "يُمَشِّطُ",
        "translation": "daraır",
        "examples": [
          {
            "arabic": "هُوَ يُمَشِّطُ الآنَ.",
            "translation": "O, indi darayır."
          }
        ]
      },
      "imperative": {
        "arabic": "مَشِّطْ",
        "translation": "dara!",
        "examples": [
          {
            "arabic": "مَشِّطْ.",
            "translation": "dara!"
          }
        ]
      }
    }
  },
  {
    "id": 646,
    "arabic": "حَلَقَ",
    "meaning": "qırxmaq",
    "forms": {
      "past": {
        "arabic": "حَلَقَ",
        "translation": "qırxtı",
        "examples": [
          {
            "arabic": "هُوَ حَلَقَ أَمْسِ.",
            "translation": "O, dün qırxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْلِقُ",
        "translation": "qırxır",
        "examples": [
          {
            "arabic": "هُوَ يَحْلِقُ الآنَ.",
            "translation": "O, indi qırxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْلِقْ",
        "translation": "qırx!",
        "examples": [
          {
            "arabic": "اِحْلِقْ.",
            "translation": "qırx!"
          }
        ]
      }
    }
  },
  {
    "id": 647,
    "arabic": "قَصَّ",
    "meaning": "kəsmək",
    "forms": {
      "past": {
        "arabic": "قَصَّ",
        "translation": "kəstə",
        "examples": [
          {
            "arabic": "هُوَ قَصَّ أَمْسِ.",
            "translation": "O, dün kəsdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقُصُّ",
        "translation": "kəsir",
        "examples": [
          {
            "arabic": "هُوَ يَقُصُّ الآنَ.",
            "translation": "O, indi kəsir."
          }
        ]
      },
      "imperative": {
        "arabic": "قُصَّ",
        "translation": "kəs!",
        "examples": [
          {
            "arabic": "قُصَّ.",
            "translation": "kəs!"
          }
        ]
      }
    }
  },
  {
    "id": 648,
    "arabic": "خَيَّطَ",
    "meaning": "tikmək",
    "forms": {
      "past": {
        "arabic": "خَيَّطَ",
        "translation": "tikti",
        "examples": [
          {
            "arabic": "هُوَ خَيَّطَ أَمْسِ.",
            "translation": "O, dün tikdi."
          }
        ]
      },
      "present": {
        "arabic": "يُخَيِّطُ",
        "translation": "tikir",
        "examples": [
          {
            "arabic": "هُوَ يُخَيِّطُ الآنَ.",
            "translation": "O, indi tikir."
          }
        ]
      },
      "imperative": {
        "arabic": "خَيِّطْ",
        "translation": "tik!",
        "examples": [
          {
            "arabic": "خَيِّطْ.",
            "translation": "tik!"
          }
        ]
      }
    }
  },
  {
    "id": 649,
    "arabic": "نَزَعَ",
    "meaning": "çıxarmaq",
    "forms": {
      "past": {
        "arabic": "نَزَعَ",
        "translation": "çıxarda",
        "examples": [
          {
            "arabic": "هُوَ نَزَعَ أَمْسِ.",
            "translation": "O, dün çıxardı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْزِعُ",
        "translation": "çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يَنْزِعُ الآنَ.",
            "translation": "O, indi çıxarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْزِعْ",
        "translation": "çıxar!",
        "examples": [
          {
            "arabic": "اِنْزِعْ.",
            "translation": "çıxar!"
          }
        ]
      }
    }
  },
  {
    "id": 650,
    "arabic": "اِقْتَلَعَ",
    "meaning": "kökündən çıxarmaq",
    "forms": {
      "past": {
        "arabic": "اِقْتَلَعَ",
        "translation": "kökündən çıxarda",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَلَعَ أَمْسِ.",
            "translation": "O, dün kökündən çıxardı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَلِعُ",
        "translation": "kökündən çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَلِعُ الآنَ.",
            "translation": "O, indi kökündən çıxarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَلِعْ",
        "translation": "kökündən çıxar!",
        "examples": [
          {
            "arabic": "اِقْتَلِعْ.",
            "translation": "kökündən çıxar!"
          }
        ]
      }
    }
  },
  {
    "id": 651,
    "arabic": "خَدَمَ",
    "meaning": "xidmət etmək",
    "forms": {
      "past": {
        "arabic": "خَدَمَ",
        "translation": "xidmət etdi",
        "examples": [
          {
            "arabic": "هُوَ خَدَمَ أَمْسِ.",
            "translation": "O, dünən xidmət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخْدُمُ",
        "translation": "xidmət edir",
        "examples": [
          {
            "arabic": "هُوَ يَخْدُمُ الآنَ.",
            "translation": "O, indi xidmət edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُخْدُمْ",
        "translation": "xidmət et!",
        "examples": [
          {
            "arabic": "اُخْدُمْ.",
            "translation": "xidmət et!"
          }
        ]
      }
    }
  },
  {
    "id": 652,
    "arabic": "دَعَمَ",
    "meaning": "dəstəkləmək",
    "forms": {
      "past": {
        "arabic": "دَعَمَ",
        "translation": "dəstəklədi",
        "examples": [
          {
            "arabic": "هُوَ دَعَمَ أَمْسِ.",
            "translation": "O, dünən dəstəklədi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْعَمُ",
        "translation": "dəstəkləyir",
        "examples": [
          {
            "arabic": "هُوَ يَدْعَمُ الآنَ.",
            "translation": "O, indi dəstəkləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدْعَمْ",
        "translation": "dəstəklə!",
        "examples": [
          {
            "arabic": "اِدْعَمْ.",
            "translation": "dəstəklə!"
          }
        ]
      }
    }
  },
  {
    "id": 653,
    "arabic": "حَرَقَ",
    "meaning": "yandırmaq",
    "forms": {
      "past": {
        "arabic": "حَرَقَ",
        "translation": "yandırdı",
        "examples": [
          {
            "arabic": "هُوَ حَرَقَ أَمْسِ.",
            "translation": "O, dünən yandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْرِقُ",
        "translation": "yandırır",
        "examples": [
          {
            "arabic": "هُوَ يَحْرِقُ الآنَ.",
            "translation": "O, indi yandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْرِقْ",
        "translation": "yandır!",
        "examples": [
          {
            "arabic": "اِحْرِقْ.",
            "translation": "yandır!"
          }
        ]
      }
    }
  },
  {
    "id": 654,
    "arabic": "رَقَصَ",
    "meaning": "rəqs etmək",
    "forms": {
      "past": {
        "arabic": "رَقَصَ",
        "translation": "rəqs etdi",
        "examples": [
          {
            "arabic": "هُوَ رَقَصَ أَمْسِ.",
            "translation": "O, dünən rəqs etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْقُصُ",
        "translation": "rəqs edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْقُصُ الآنَ.",
            "translation": "O, indi rəqs edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْقُصْ",
        "translation": "rəqs et!",
        "examples": [
          {
            "arabic": "اُرْقُصْ.",
            "translation": "rəqs et!"
          }
        ]
      }
    }
  },
  {
    "id": 655,
    "arabic": "أَوْقَفَ",
    "meaning": "dayandırmaq",
    "forms": {
      "past": {
        "arabic": "أَوْقَفَ",
        "translation": "dayandırdı",
        "examples": [
          {
            "arabic": "هُوَ أَوْقَفَ أَمْسِ.",
            "translation": "O, dün dayandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوقِفُ",
        "translation": "dayandırır",
        "examples": [
          {
            "arabic": "هُوَ يُوقِفُ الآنَ.",
            "translation": "O, indi dayandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَوْقِفْ",
        "translation": "dayandır!",
        "examples": [
          {
            "arabic": "أَوْقِفْ.",
            "translation": "dayandır!"
          }
        ]
      }
    }
  },
  {
    "id": 656,
    "arabic": "أَسْرَعَ",
    "meaning": "sürətləndirmək",
    "forms": {
      "past": {
        "arabic": "أَسْرَعَ",
        "translation": "sürətləndirdi",
        "examples": [
          {
            "arabic": "هُوَ أَسْرَعَ أَمْسِ.",
            "translation": "O, dün sürətləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسْرِعُ",
        "translation": "sürətləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُسْرِعُ الآنَ.",
            "translation": "O, indi sürətləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَسْرِعْ",
        "translation": "sürətləndir!",
        "examples": [
          {
            "arabic": "أَسْرِعْ.",
            "translation": "sürətləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 657,
    "arabic": "أَبْعَدَ",
    "meaning": "uzaqlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "أَبْعَدَ",
        "translation": "uzaqlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ أَبْعَدَ أَمْسِ.",
            "translation": "O, dün uzaqlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبْعِدُ",
        "translation": "uzaqlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُبْعِدُ الآنَ.",
            "translation": "O, indi uzaqlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَبْعِدْ",
        "translation": "uzaqlaşdır!",
        "examples": [
          {
            "arabic": "أَبْعِدْ.",
            "translation": "uzaqlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 658,
    "arabic": "قَرَّبَ",
    "meaning": "yaxınlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "قَرَّبَ",
        "translation": "yaxınlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ قَرَّبَ أَمْسِ.",
            "translation": "O, dün yaxınlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُقَرِّبُ",
        "translation": "yaxınlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُقَرِّبُ الآنَ.",
            "translation": "O, indi yaxınlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "قَرِّبْ",
        "translation": "yaxınlaşdır!",
        "examples": [
          {
            "arabic": "قَرِّبْ.",
            "translation": "yaxınlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 659,
    "arabic": "رَافَقَ",
    "meaning": "müşayiət etmək",
    "forms": {
      "past": {
        "arabic": "رَافَقَ",
        "translation": "müşayiət etdi",
        "examples": [
          {
            "arabic": "هُوَ رَافَقَ أَمْسِ.",
            "translation": "O, dün müşayiət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرَافِقُ",
        "translation": "müşayiət edir",
        "examples": [
          {
            "arabic": "هُوَ يُرَافِقُ الآنَ.",
            "translation": "O, indi müşayiət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "رَافِقْ",
        "translation": "müşayiət et!",
        "examples": [
          {
            "arabic": "رَافِقْ.",
            "translation": "müşayiət et!"
          }
        ]
      }
    }
  },
  {
    "id": 660,
    "arabic": "فَارَقَ",
    "meaning": "ayrılmaq",
    "forms": {
      "past": {
        "arabic": "فَارَقَ",
        "translation": "ayrıldı",
        "examples": [
          {
            "arabic": "هُوَ فَارَقَ أَمْسِ.",
            "translation": "O, dün ayrıldı."
          }
        ]
      },
      "present": {
        "arabic": "يُفَارِقُ",
        "translation": "ayrılır",
        "examples": [
          {
            "arabic": "هُوَ يُفَارِقُ الآنَ.",
            "translation": "O, indi ayrılır."
          }
        ]
      },
      "imperative": {
        "arabic": "فَارِقْ",
        "translation": "ayrıl!",
        "examples": [
          {
            "arabic": "فَارِقْ.",
            "translation": "ayrıl!"
          }
        ]
      }
    }
  },
  {
    "id": 661,
    "arabic": "اِلْتَقَى",
    "meaning": "görüşmək",
    "forms": {
      "past": {
        "arabic": "اِلْتَقَى",
        "translation": "görüştü",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَقَى أَمْسِ.",
            "translation": "O, dün görüşdü."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَقِي",
        "translation": "görüşür",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَقِي الآنَ.",
            "translation": "O, indi görüşür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَقِ",
        "translation": "görüş!",
        "examples": [
          {
            "arabic": "اِلْتَقِ.",
            "translation": "görüş!"
          }
        ]
      }
    }
  },
  {
    "id": 662,
    "arabic": "اِجْتَازَ",
    "meaning": "keçmək",
    "forms": {
      "past": {
        "arabic": "اِجْتَازَ",
        "translation": "keçta",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَازَ أَمْسِ.",
            "translation": "O, dün keçdı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَازُ",
        "translation": "keçır",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَازُ الآنَ.",
            "translation": "O, indi keçır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَزْ",
        "translation": "keç!",
        "examples": [
          {
            "arabic": "اِجْتَزْ.",
            "translation": "keç!"
          }
        ]
      }
    }
  },
  {
    "id": 663,
    "arabic": "تَجَنَّبَ",
    "meaning": "qaçınmaq",
    "forms": {
      "past": {
        "arabic": "تَجَنَّبَ",
        "translation": "qaçındı",
        "examples": [
          {
            "arabic": "هُوَ تَجَنَّبَ أَمْسِ.",
            "translation": "O, dün qaçındı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَجَنَّبُ",
        "translation": "qaçınır",
        "examples": [
          {
            "arabic": "هُوَ يَتَجَنَّبُ الآنَ.",
            "translation": "O, indi qaçınır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَجَنَّبْ",
        "translation": "qaçın!",
        "examples": [
          {
            "arabic": "تَجَنَّبْ.",
            "translation": "qaçın!"
          }
        ]
      }
    }
  },
  {
    "id": 664,
    "arabic": "اِسْتَمْتَعَ",
    "meaning": "zövq almaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَمْتَعَ",
        "translation": "zövq alda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَمْتَعَ أَمْسِ.",
            "translation": "O, dün zövq aldı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَمْتِعُ",
        "translation": "zövq alır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَمْتِعُ الآنَ.",
            "translation": "O, indi zövq alır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَمْتِعْ",
        "translation": "zövq al!",
        "examples": [
          {
            "arabic": "اِسْتَمْتِعْ.",
            "translation": "zövq al!"
          }
        ]
      }
    }
  },
  {
    "id": 665,
    "arabic": "رَاحَ",
    "meaning": "getmək",
    "forms": {
      "past": {
        "arabic": "رَاحَ",
        "translation": "g etdi",
        "examples": [
          {
            "arabic": "هُوَ رَاحَ أَمْسِ.",
            "translation": "O, dün getdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرُوحُ",
        "translation": "g edir",
        "examples": [
          {
            "arabic": "هُوَ يَرُوحُ الآنَ.",
            "translation": "O, indi getır."
          }
        ]
      },
      "imperative": {
        "arabic": "رُحْ",
        "translation": "g et!",
        "examples": [
          {
            "arabic": "رُحْ.",
            "translation": "get!"
          }
        ]
      }
    }
  },
  {
    "id": 666,
    "arabic": "اِسْتَعَادَ",
    "meaning": "geri almaq, bərpa etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَعَادَ",
        "translation": "geri almaq, bərpa etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعَادَ أَمْسِ.",
            "translation": "O, dün geri almaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعِيدُ",
        "translation": "geri almaq, bərpa edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعِيدُ الآنَ.",
            "translation": "O, indi geri almaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعِدْ",
        "translation": "geri almaq, bərpa et!",
        "examples": [
          {
            "arabic": "اِسْتَعِدْ.",
            "translation": "geri almaq!"
          }
        ]
      }
    }
  },
  {
    "id": 667,
    "arabic": "أَصْغَى",
    "meaning": "qulaq asmaq",
    "forms": {
      "past": {
        "arabic": "أَصْغَى",
        "translation": "qulaq asta",
        "examples": [
          {
            "arabic": "هُوَ أَصْغَى أَمْسِ.",
            "translation": "O, dün qulaq asdı."
          }
        ]
      },
      "present": {
        "arabic": "يُصْغِي",
        "translation": "qulaq asır",
        "examples": [
          {
            "arabic": "هُوَ يُصْغِي الآنَ.",
            "translation": "O, indi qulaq asır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَصْغِ",
        "translation": "qulaq as!",
        "examples": [
          {
            "arabic": "أَصْغِ.",
            "translation": "qulaq as!"
          }
        ]
      }
    }
  },
  {
    "id": 668,
    "arabic": "فَرَغَ",
    "meaning": "bitirmək, boşalmaq",
    "forms": {
      "past": {
        "arabic": "فَرَغَ",
        "translation": "bitirdi",
        "examples": [
          {
            "arabic": "هُوَ فَرَغَ أَمْسِ.",
            "translation": "O, dünən bitirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَفْرُغُ",
        "translation": "bitirir",
        "examples": [
          {
            "arabic": "هُوَ يَفْرُغُ الآنَ.",
            "translation": "O, indi bitirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْرُغْ",
        "translation": "bitir!",
        "examples": [
          {
            "arabic": "اِفْرُغْ.",
            "translation": "bitir!"
          }
        ]
      }
    }
  },
  {
    "id": 669,
    "arabic": "رَأَى",
    "meaning": "görmək",
    "forms": {
      "past": {
        "arabic": "رَأَى",
        "translation": "gördü",
        "examples": [
          {
            "arabic": "هُوَ رَأَى أَمْسِ.",
            "translation": "O, dün gördü."
          }
        ]
      },
      "present": {
        "arabic": "يَرَى",
        "translation": "görür",
        "examples": [
          {
            "arabic": "هُوَ يَرَى الآنَ.",
            "translation": "O, indi görür."
          }
        ]
      },
      "imperative": {
        "arabic": "رَ",
        "translation": "gör!",
        "examples": [
          {
            "arabic": "رَ.",
            "translation": "gör!"
          }
        ]
      }
    }
  },
  {
    "id": 670,
    "arabic": "رَاقَبَ",
    "meaning": "müşahidə etmək",
    "forms": {
      "past": {
        "arabic": "رَاقَبَ",
        "translation": "müşahidə etdi",
        "examples": [
          {
            "arabic": "هُوَ رَاقَبَ أَمْسِ.",
            "translation": "O, dün müşahidə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرَاقِبُ",
        "translation": "müşahidə edir",
        "examples": [
          {
            "arabic": "هُوَ يُرَاقِبُ الآنَ.",
            "translation": "O, indi müşahidə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "رَاقِبْ",
        "translation": "müşahidə et!",
        "examples": [
          {
            "arabic": "رَاقِبْ.",
            "translation": "müşahidə et!"
          }
        ]
      }
    }
  },
  {
    "id": 671,
    "arabic": "لَاحَظَ",
    "meaning": "fərqinə varmaq",
    "forms": {
      "past": {
        "arabic": "لَاحَظَ",
        "translation": "fərqinə varda",
        "examples": [
          {
            "arabic": "هُوَ لَاحَظَ أَمْسِ.",
            "translation": "O, dün fərqinə vardı."
          }
        ]
      },
      "present": {
        "arabic": "يُلَاحِظُ",
        "translation": "fərqinə varır",
        "examples": [
          {
            "arabic": "هُوَ يُلَاحِظُ الآنَ.",
            "translation": "O, indi fərqinə varır."
          }
        ]
      },
      "imperative": {
        "arabic": "لَاحِظْ",
        "translation": "fərqinə var!",
        "examples": [
          {
            "arabic": "لَاحِظْ.",
            "translation": "fərqinə var!"
          }
        ]
      }
    }
  },
  {
    "id": 672,
    "arabic": "عَثَرَ",
    "meaning": "tapmaq, büdrəmək",
    "forms": {
      "past": {
        "arabic": "عَثَرَ",
        "translation": "tapmaq, büdrədi",
        "examples": [
          {
            "arabic": "هُوَ عَثَرَ أَمْسِ.",
            "translation": "O, dün tapmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْثُرُ",
        "translation": "tapmaq, büdrəir",
        "examples": [
          {
            "arabic": "هُوَ يَعْثُرُ الآنَ.",
            "translation": "O, indi tapmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُعْثُرْ",
        "translation": "tapmaq, büdrə!",
        "examples": [
          {
            "arabic": "اُعْثُرْ.",
            "translation": "tapmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 673,
    "arabic": "فَقَهَ",
    "meaning": "anlamaq",
    "forms": {
      "past": {
        "arabic": "فَقَهَ",
        "translation": "anlada",
        "examples": [
          {
            "arabic": "هُوَ فَقَهَ أَمْسِ.",
            "translation": "O, dün anladı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْقَهُ",
        "translation": "anlaır",
        "examples": [
          {
            "arabic": "هُوَ يَفْقَهُ الآنَ.",
            "translation": "O, indi anlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْقَهْ",
        "translation": "anla!",
        "examples": [
          {
            "arabic": "اِفْقَهْ.",
            "translation": "anla!"
          }
        ]
      }
    }
  },
  {
    "id": 674,
    "arabic": "دَرَى",
    "meaning": "bilmək",
    "forms": {
      "past": {
        "arabic": "دَرَى",
        "translation": "bildi",
        "examples": [
          {
            "arabic": "هُوَ دَرَى أَمْسِ.",
            "translation": "O, dün bildi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْرِي",
        "translation": "bilir",
        "examples": [
          {
            "arabic": "هُوَ يَدْرِي الآنَ.",
            "translation": "O, indi bilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدْرِ",
        "translation": "bil!",
        "examples": [
          {
            "arabic": "اِدْرِ.",
            "translation": "bil!"
          }
        ]
      }
    }
  },
  {
    "id": 675,
    "arabic": "عَلِمَ",
    "meaning": "bilmək",
    "forms": {
      "past": {
        "arabic": "عَلِمَ",
        "translation": "bildi",
        "examples": [
          {
            "arabic": "هُوَ عَلِمَ أَمْسِ.",
            "translation": "O, dün bildi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْلَمُ",
        "translation": "bilir",
        "examples": [
          {
            "arabic": "هُوَ يَعْلَمُ الآنَ.",
            "translation": "O, indi bilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْلَمْ",
        "translation": "bil!",
        "examples": [
          {
            "arabic": "اِعْلَمْ.",
            "translation": "bil!"
          }
        ]
      }
    }
  },
  {
    "id": 676,
    "arabic": "جَهِلَ",
    "meaning": "bilməmək",
    "forms": {
      "past": {
        "arabic": "جَهِلَ",
        "translation": "bilmədi",
        "examples": [
          {
            "arabic": "هُوَ جَهِلَ أَمْسِ.",
            "translation": "O, dün bilmədi."
          }
        ]
      },
      "present": {
        "arabic": "يَجْهَلُ",
        "translation": "bilməir",
        "examples": [
          {
            "arabic": "هُوَ يَجْهَلُ الآنَ.",
            "translation": "O, indi bilməyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْهَلْ",
        "translation": "bilmə!",
        "examples": [
          {
            "arabic": "اِجْهَلْ.",
            "translation": "bilmə!"
          }
        ]
      }
    }
  },
  {
    "id": 677,
    "arabic": "تَجَاهَلَ",
    "meaning": "bilməzliyə vurmaq",
    "forms": {
      "past": {
        "arabic": "تَجَاهَلَ",
        "translation": "bilməzliyə vurdu",
        "examples": [
          {
            "arabic": "هُوَ تَجَاهَلَ أَمْسِ.",
            "translation": "O, dün bilməzliyə vurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَجَاهَلُ",
        "translation": "bilməzliyə vurur",
        "examples": [
          {
            "arabic": "هُوَ يَتَجَاهَلُ الآنَ.",
            "translation": "O, indi bilməzliyə vurur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَجَاهَلْ",
        "translation": "bilməzliyə vur!",
        "examples": [
          {
            "arabic": "تَجَاهَلْ.",
            "translation": "bilməzliyə vur!"
          }
        ]
      }
    }
  },
  {
    "id": 678,
    "arabic": "تَصَوَّرَ",
    "meaning": "təsəvvür etmək",
    "forms": {
      "past": {
        "arabic": "تَصَوَّرَ",
        "translation": "təsəvvür etdi",
        "examples": [
          {
            "arabic": "هُوَ تَصَوَّرَ أَمْسِ.",
            "translation": "O, dün təsəvvür etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَصَوَّرُ",
        "translation": "təsəvvür edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَصَوَّرُ الآنَ.",
            "translation": "O, indi təsəvvür etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَصَوَّرْ",
        "translation": "təsəvvür et!",
        "examples": [
          {
            "arabic": "تَصَوَّرْ.",
            "translation": "təsəvvür et!"
          }
        ]
      }
    }
  },
  {
    "id": 679,
    "arabic": "اِعْتَبَرَ",
    "meaning": "ibrət almaq, hesab etmək",
    "forms": {
      "past": {
        "arabic": "اِعْتَبَرَ",
        "translation": "ibrət almaq, hesab etdi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَبَرَ أَمْسِ.",
            "translation": "O, dün ibrət almaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَبِرُ",
        "translation": "ibrət almaq, hesab edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَبِرُ الآنَ.",
            "translation": "O, indi ibrət almaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَبِرْ",
        "translation": "ibrət almaq, hesab et!",
        "examples": [
          {
            "arabic": "اِعْتَبِرْ.",
            "translation": "ibrət almaq!"
          }
        ]
      }
    }
  },
  {
    "id": 680,
    "arabic": "اِسْتَوْضَحَ",
    "meaning": "aydınlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَوْضَحَ",
        "translation": "aydınlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَوْضَحَ أَمْسِ.",
            "translation": "O, dün aydınlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَوْضِحُ",
        "translation": "aydınlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَوْضِحُ الآنَ.",
            "translation": "O, indi aydınlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَوْضِحْ",
        "translation": "aydınlaşdır!",
        "examples": [
          {
            "arabic": "اِسْتَوْضِحْ.",
            "translation": "aydınlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 681,
    "arabic": "أَنْشَأَ",
    "meaning": "yaratmaq, qurmaq",
    "forms": {
      "past": {
        "arabic": "أَنْشَأَ",
        "translation": "yaratmaq, qurdu",
        "examples": [
          {
            "arabic": "هُوَ أَنْشَأَ أَمْسِ.",
            "translation": "O, dün yaratmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُنْشِئُ",
        "translation": "yaratmaq, qurur",
        "examples": [
          {
            "arabic": "هُوَ يُنْشِئُ الآنَ.",
            "translation": "O, indi yaratmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْشِئْ",
        "translation": "yaratmaq, qur!",
        "examples": [
          {
            "arabic": "أَنْشِئْ.",
            "translation": "yaratmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 682,
    "arabic": "أَسَّسَ",
    "meaning": "əsasını qoymaq",
    "forms": {
      "past": {
        "arabic": "أَسَّسَ",
        "translation": "əsasını qoydu",
        "examples": [
          {
            "arabic": "هُوَ أَسَّسَ أَمْسِ.",
            "translation": "O, dün əsasını qoydu."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَسِّسُ",
        "translation": "əsasını qoyur",
        "examples": [
          {
            "arabic": "هُوَ يُؤَسِّسُ الآنَ.",
            "translation": "O, indi əsasını qoyur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَسِّسْ",
        "translation": "əsasını qoy!",
        "examples": [
          {
            "arabic": "أَسِّسْ.",
            "translation": "əsasını qoy!"
          }
        ]
      }
    }
  },
  {
    "id": 683,
    "arabic": "بَدَعَ",
    "meaning": "yaradıcılıq etmək",
    "forms": {
      "past": {
        "arabic": "بَدَعَ",
        "translation": "yaradıcılıq etdi",
        "examples": [
          {
            "arabic": "هُوَ بَدَعَ أَمْسِ.",
            "translation": "O, dün yaradıcılıq etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْدَعُ",
        "translation": "yaradıcılıq edir",
        "examples": [
          {
            "arabic": "هُوَ يَبْدَعُ الآنَ.",
            "translation": "O, indi yaradıcılıq etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْدَعْ",
        "translation": "yaradıcılıq et!",
        "examples": [
          {
            "arabic": "اِبْدَعْ.",
            "translation": "yaradıcılıq et!"
          }
        ]
      }
    }
  },
  {
    "id": 684,
    "arabic": "اِبْتَكَرَ",
    "meaning": "ixtira etmək",
    "forms": {
      "past": {
        "arabic": "اِبْتَكَرَ",
        "translation": "ixtira etdi",
        "examples": [
          {
            "arabic": "هُوَ اِبْتَكَرَ أَمْسِ.",
            "translation": "O, dün ixtira etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَبْتَكِرُ",
        "translation": "ixtira edir",
        "examples": [
          {
            "arabic": "هُوَ يَبْتَكِرُ الآنَ.",
            "translation": "O, indi ixtira etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْتَكِرْ",
        "translation": "ixtira et!",
        "examples": [
          {
            "arabic": "اِبْتَكِرْ.",
            "translation": "ixtira et!"
          }
        ]
      }
    }
  },
  {
    "id": 685,
    "arabic": "اِخْتَرَعَ",
    "meaning": "ixtira etmək",
    "forms": {
      "past": {
        "arabic": "اِخْتَرَعَ",
        "translation": "ixtira etdi",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَرَعَ أَمْسِ.",
            "translation": "O, dün ixtira etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَرِعُ",
        "translation": "ixtira edir",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَرِعُ الآنَ.",
            "translation": "O, indi ixtira etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْتَرِعْ",
        "translation": "ixtira et!",
        "examples": [
          {
            "arabic": "اِخْتَرِعْ.",
            "translation": "ixtira et!"
          }
        ]
      }
    }
  },
  {
    "id": 686,
    "arabic": "صَمَّمَ",
    "meaning": "dizayn etmək",
    "forms": {
      "past": {
        "arabic": "صَمَّمَ",
        "translation": "dizayn etdi",
        "examples": [
          {
            "arabic": "هُوَ صَمَّمَ أَمْسِ.",
            "translation": "O, dün dizayn etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُصَمِّمُ",
        "translation": "dizayn edir",
        "examples": [
          {
            "arabic": "هُوَ يُصَمِّمُ الآنَ.",
            "translation": "O, indi dizayn etır."
          }
        ]
      },
      "imperative": {
        "arabic": "صَمِّمْ",
        "translation": "dizayn et!",
        "examples": [
          {
            "arabic": "صَمِّمْ.",
            "translation": "dizayn et!"
          }
        ]
      }
    }
  },
  {
    "id": 687,
    "arabic": "بَرْمَجَ",
    "meaning": "proqramlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "بَرْمَجَ",
        "translation": "proqramlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ بَرْمَجَ أَمْسِ.",
            "translation": "O, dün proqramlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبَرْمِجُ",
        "translation": "proqramlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُبَرْمِجُ الآنَ.",
            "translation": "O, indi proqramlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "بَرْمِجْ",
        "translation": "proqramlaşdır!",
        "examples": [
          {
            "arabic": "بَرْمِجْ.",
            "translation": "proqramlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 688,
    "arabic": "شَغَّلَ",
    "meaning": "işə salmaq",
    "forms": {
      "past": {
        "arabic": "شَغَّلَ",
        "translation": "işə salda",
        "examples": [
          {
            "arabic": "هُوَ شَغَّلَ أَمْسِ.",
            "translation": "O, dün işə saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُشَغِّلُ",
        "translation": "işə salır",
        "examples": [
          {
            "arabic": "هُوَ يُشَغِّلُ الآنَ.",
            "translation": "O, indi işə salır."
          }
        ]
      },
      "imperative": {
        "arabic": "شَغِّلْ",
        "translation": "işə sal!",
        "examples": [
          {
            "arabic": "شَغِّلْ.",
            "translation": "işə sal!"
          }
        ]
      }
    }
  },
  {
    "id": 689,
    "arabic": "أَوْقَدَ",
    "meaning": "yandırmaq",
    "forms": {
      "past": {
        "arabic": "أَوْقَدَ",
        "translation": "yandırdı",
        "examples": [
          {
            "arabic": "هُوَ أَوْقَدَ أَمْسِ.",
            "translation": "O, dün yandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوقِدُ",
        "translation": "yandırır",
        "examples": [
          {
            "arabic": "هُوَ يُوقِدُ الآنَ.",
            "translation": "O, indi yandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَوْقِدْ",
        "translation": "yandır!",
        "examples": [
          {
            "arabic": "أَوْقِدْ.",
            "translation": "yandır!"
          }
        ]
      }
    }
  },
  {
    "id": 690,
    "arabic": "أَشْعَلَ",
    "meaning": "alışdırmaq",
    "forms": {
      "past": {
        "arabic": "أَشْعَلَ",
        "translation": "alışdırdı",
        "examples": [
          {
            "arabic": "هُوَ أَشْعَلَ أَمْسِ.",
            "translation": "O, dün alışdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُشْعِلُ",
        "translation": "alışdırır",
        "examples": [
          {
            "arabic": "هُوَ يُشْعِلُ الآنَ.",
            "translation": "O, indi alışdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَشْعِلْ",
        "translation": "alışdır!",
        "examples": [
          {
            "arabic": "أَشْعِلْ.",
            "translation": "alışdır!"
          }
        ]
      }
    }
  },
  {
    "id": 691,
    "arabic": "أَطْفَأَ",
    "meaning": "söndürmək",
    "forms": {
      "past": {
        "arabic": "أَطْفَأَ",
        "translation": "söndürdü",
        "examples": [
          {
            "arabic": "هُوَ أَطْفَأَ أَمْسِ.",
            "translation": "O, dün söndürdü."
          }
        ]
      },
      "present": {
        "arabic": "يُطْفِئُ",
        "translation": "söndürür",
        "examples": [
          {
            "arabic": "هُوَ يُطْفِئُ الآنَ.",
            "translation": "O, indi söndürür."
          }
        ]
      },
      "imperative": {
        "arabic": "أَطْفِئْ",
        "translation": "söndür!",
        "examples": [
          {
            "arabic": "أَطْفِئْ.",
            "translation": "söndür!"
          }
        ]
      }
    }
  },
  {
    "id": 692,
    "arabic": "اِحْتَرَقَ",
    "meaning": "yanmaq",
    "forms": {
      "past": {
        "arabic": "اِحْتَرَقَ",
        "translation": "yanda",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَرَقَ أَمْسِ.",
            "translation": "O, dün yandı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَرِقُ",
        "translation": "yanır",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَرِقُ الآنَ.",
            "translation": "O, indi yanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَرِقْ",
        "translation": "yan!",
        "examples": [
          {
            "arabic": "اِحْتَرِقْ.",
            "translation": "yan!"
          }
        ]
      }
    }
  },
  {
    "id": 693,
    "arabic": "أَحْرَقَ",
    "meaning": "yandırmaq",
    "forms": {
      "past": {
        "arabic": "أَحْرَقَ",
        "translation": "yandırdı",
        "examples": [
          {
            "arabic": "هُوَ أَحْرَقَ أَمْسِ.",
            "translation": "O, dün yandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُحْرِقُ",
        "translation": "yandırır",
        "examples": [
          {
            "arabic": "هُوَ يُحْرِقُ الآنَ.",
            "translation": "O, indi yandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَحْرِقْ",
        "translation": "yandır!",
        "examples": [
          {
            "arabic": "أَحْرِقْ.",
            "translation": "yandır!"
          }
        ]
      }
    }
  },
  {
    "id": 694,
    "arabic": "دَفِئَ",
    "meaning": "isinmək",
    "forms": {
      "past": {
        "arabic": "دَفِئَ",
        "translation": "isindi",
        "examples": [
          {
            "arabic": "هُوَ دَفِئَ أَمْسِ.",
            "translation": "O, dün isindi."
          }
        ]
      },
      "present": {
        "arabic": "يَدْفَأُ",
        "translation": "isinir",
        "examples": [
          {
            "arabic": "هُوَ يَدْفَأُ الآنَ.",
            "translation": "O, indi isinir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدْفَأْ",
        "translation": "isin!",
        "examples": [
          {
            "arabic": "اِدْفَأْ.",
            "translation": "isin!"
          }
        ]
      }
    }
  },
  {
    "id": 695,
    "arabic": "بَرُدَ",
    "meaning": "soyumaq",
    "forms": {
      "past": {
        "arabic": "بَرُدَ",
        "translation": "soyudu",
        "examples": [
          {
            "arabic": "هُوَ بَرُدَ أَمْسِ.",
            "translation": "O, dün soyudu."
          }
        ]
      },
      "present": {
        "arabic": "يَبْرُدُ",
        "translation": "soyuur",
        "examples": [
          {
            "arabic": "هُوَ يَبْرُدُ الآنَ.",
            "translation": "O, indi soyuyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اُبْرُدْ",
        "translation": "soyu!",
        "examples": [
          {
            "arabic": "اُبْرُدْ.",
            "translation": "soyu!"
          }
        ]
      }
    }
  },
  {
    "id": 696,
    "arabic": "سَخُنَ",
    "meaning": "isinmək",
    "forms": {
      "past": {
        "arabic": "سَخُنَ",
        "translation": "isindi",
        "examples": [
          {
            "arabic": "هُوَ سَخُنَ أَمْسِ.",
            "translation": "O, dün isindi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْخُنُ",
        "translation": "isinir",
        "examples": [
          {
            "arabic": "هُوَ يَسْخُنُ الآنَ.",
            "translation": "O, indi isinir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْخُنْ",
        "translation": "isin!",
        "examples": [
          {
            "arabic": "اِسْخُنْ.",
            "translation": "isin!"
          }
        ]
      }
    }
  },
  {
    "id": 697,
    "arabic": "بَرَّدَ",
    "meaning": "soyutmaq",
    "forms": {
      "past": {
        "arabic": "بَرَّدَ",
        "translation": "soyuttu",
        "examples": [
          {
            "arabic": "هُوَ بَرَّدَ أَمْسِ.",
            "translation": "O, dün soyutdu."
          }
        ]
      },
      "present": {
        "arabic": "يُبَرِّدُ",
        "translation": "soyutur",
        "examples": [
          {
            "arabic": "هُوَ يُبَرِّدُ الآنَ.",
            "translation": "O, indi soyutur."
          }
        ]
      },
      "imperative": {
        "arabic": "بَرِّدْ",
        "translation": "soyut!",
        "examples": [
          {
            "arabic": "بَرِّدْ.",
            "translation": "soyut!"
          }
        ]
      }
    }
  },
  {
    "id": 698,
    "arabic": "سَخَّنَ",
    "meaning": "qızdırmaq",
    "forms": {
      "past": {
        "arabic": "سَخَّنَ",
        "translation": "qızdırdı",
        "examples": [
          {
            "arabic": "هُوَ سَخَّنَ أَمْسِ.",
            "translation": "O, dün qızdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُسَخِّنُ",
        "translation": "qızdırır",
        "examples": [
          {
            "arabic": "هُوَ يُسَخِّنُ الآنَ.",
            "translation": "O, indi qızdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "سَخِّنْ",
        "translation": "qızdır!",
        "examples": [
          {
            "arabic": "سَخِّنْ.",
            "translation": "qızdır!"
          }
        ]
      }
    }
  },
  {
    "id": 699,
    "arabic": "ذَابَ",
    "meaning": "ərimək",
    "forms": {
      "past": {
        "arabic": "ذَابَ",
        "translation": "əridi",
        "examples": [
          {
            "arabic": "هُوَ ذَابَ أَمْسِ.",
            "translation": "O, dün əridi."
          }
        ]
      },
      "present": {
        "arabic": "يَذُوبُ",
        "translation": "əriir",
        "examples": [
          {
            "arabic": "هُوَ يَذُوبُ الآنَ.",
            "translation": "O, indi əriyir."
          }
        ]
      },
      "imperative": {
        "arabic": "ذُبْ",
        "translation": "əri!",
        "examples": [
          {
            "arabic": "ذُبْ.",
            "translation": "əri!"
          }
        ]
      }
    }
  },
  {
    "id": 700,
    "arabic": "جَمَدَ",
    "meaning": "donmaq",
    "forms": {
      "past": {
        "arabic": "جَمَدَ",
        "translation": "dondu",
        "examples": [
          {
            "arabic": "هُوَ جَمَدَ أَمْسِ.",
            "translation": "O, dün dondu."
          }
        ]
      },
      "present": {
        "arabic": "يَجْمُدُ",
        "translation": "donur",
        "examples": [
          {
            "arabic": "هُوَ يَجْمُدُ الآنَ.",
            "translation": "O, indi donur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْمُدْ",
        "translation": "don!",
        "examples": [
          {
            "arabic": "اِجْمُدْ.",
            "translation": "don!"
          }
        ]
      }
    }
  },
  {
    "id": 701,
    "arabic": "أَذَابَ",
    "meaning": "əritmək",
    "forms": {
      "past": {
        "arabic": "أَذَابَ",
        "translation": "əritti",
        "examples": [
          {
            "arabic": "هُوَ أَذَابَ أَمْسِ.",
            "translation": "O, dün əritdi."
          }
        ]
      },
      "present": {
        "arabic": "يُذِيبُ",
        "translation": "əritir",
        "examples": [
          {
            "arabic": "هُوَ يُذِيبُ الآنَ.",
            "translation": "O, indi əritir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَذِبْ",
        "translation": "ərit!",
        "examples": [
          {
            "arabic": "أَذِبْ.",
            "translation": "ərit!"
          }
        ]
      }
    }
  },
  {
    "id": 702,
    "arabic": "جَمَّدَ",
    "meaning": "dondurmaq",
    "forms": {
      "past": {
        "arabic": "جَمَّدَ",
        "translation": "dondurdu",
        "examples": [
          {
            "arabic": "هُوَ جَمَّدَ أَمْسِ.",
            "translation": "O, dün dondurdu."
          }
        ]
      },
      "present": {
        "arabic": "يُجَمِّدُ",
        "translation": "dondurur",
        "examples": [
          {
            "arabic": "هُوَ يُجَمِّدُ الآنَ.",
            "translation": "O, indi dondurur."
          }
        ]
      },
      "imperative": {
        "arabic": "جَمِّدْ",
        "translation": "dondur!",
        "examples": [
          {
            "arabic": "جَمِّدْ.",
            "translation": "dondur!"
          }
        ]
      }
    }
  },
  {
    "id": 703,
    "arabic": "نَشَفَ",
    "meaning": "qurumaq",
    "forms": {
      "past": {
        "arabic": "نَشَفَ",
        "translation": "qurudu",
        "examples": [
          {
            "arabic": "هُوَ نَشَفَ أَمْسِ.",
            "translation": "O, dün qurudu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْشَفُ",
        "translation": "quruur",
        "examples": [
          {
            "arabic": "هُوَ يَنْشَفُ الآنَ.",
            "translation": "O, indi quruyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْشَفْ",
        "translation": "quru!",
        "examples": [
          {
            "arabic": "اِنْشَفْ.",
            "translation": "quru!"
          }
        ]
      }
    }
  },
  {
    "id": 704,
    "arabic": "جَفَّ",
    "meaning": "qurumaq",
    "forms": {
      "past": {
        "arabic": "جَفَّ",
        "translation": "qurudu",
        "examples": [
          {
            "arabic": "هُوَ جَفَّ أَمْسِ.",
            "translation": "O, dün qurudu."
          }
        ]
      },
      "present": {
        "arabic": "يَجِفُّ",
        "translation": "quruur",
        "examples": [
          {
            "arabic": "هُوَ يَجِفُّ الآنَ.",
            "translation": "O, indi quruyur."
          }
        ]
      },
      "imperative": {
        "arabic": "جِفَّ",
        "translation": "quru!",
        "examples": [
          {
            "arabic": "جِفَّ.",
            "translation": "quru!"
          }
        ]
      }
    }
  },
  {
    "id": 705,
    "arabic": "بَلَّلَ",
    "meaning": "islatmaq",
    "forms": {
      "past": {
        "arabic": "بَلَّلَ",
        "translation": "islatta",
        "examples": [
          {
            "arabic": "هُوَ بَلَّلَ أَمْسِ.",
            "translation": "O, dün islatdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبَلِّلُ",
        "translation": "islatır",
        "examples": [
          {
            "arabic": "هُوَ يُبَلِّلُ الآنَ.",
            "translation": "O, indi islatır."
          }
        ]
      },
      "imperative": {
        "arabic": "بَلِّلْ",
        "translation": "islat!",
        "examples": [
          {
            "arabic": "بَلِّلْ.",
            "translation": "islat!"
          }
        ]
      }
    }
  },
  {
    "id": 706,
    "arabic": "مَطَرَ",
    "meaning": "yağış yağmaq",
    "forms": {
      "past": {
        "arabic": "مَطَرَ",
        "translation": "yağış yağda",
        "examples": [
          {
            "arabic": "هُوَ مَطَرَ أَمْسِ.",
            "translation": "O, dün yağış yağdı."
          }
        ]
      },
      "present": {
        "arabic": "يُمْطِرُ",
        "translation": "yağış yağır",
        "examples": [
          {
            "arabic": "هُوَ يُمْطِرُ الآنَ.",
            "translation": "O, indi yağış yağır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَمْطِرْ",
        "translation": "yağış yağ!",
        "examples": [
          {
            "arabic": "أَمْطِرْ.",
            "translation": "yağış yağ!"
          }
        ]
      }
    }
  },
  {
    "id": 707,
    "arabic": "هَطَلَ",
    "meaning": "yağmaq",
    "forms": {
      "past": {
        "arabic": "هَطَلَ",
        "translation": "yağda",
        "examples": [
          {
            "arabic": "هُوَ هَطَلَ أَمْسِ.",
            "translation": "O, dün yağdı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْطِلُ",
        "translation": "yağır",
        "examples": [
          {
            "arabic": "هُوَ يَهْطِلُ الآنَ.",
            "translation": "O, indi yağır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْطِلْ",
        "translation": "yağ!",
        "examples": [
          {
            "arabic": "اِهْطِلْ.",
            "translation": "yağ!"
          }
        ]
      }
    }
  },
  {
    "id": 708,
    "arabic": "هَبَّ",
    "meaning": "əsmək",
    "forms": {
      "past": {
        "arabic": "هَبَّ",
        "translation": "əstə",
        "examples": [
          {
            "arabic": "هُوَ هَبَّ أَمْسِ.",
            "translation": "O, dün əsdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهُبُّ",
        "translation": "əsir",
        "examples": [
          {
            "arabic": "هُوَ يَهُبُّ الآنَ.",
            "translation": "O, indi əsir."
          }
        ]
      },
      "imperative": {
        "arabic": "هُبَّ",
        "translation": "əs!",
        "examples": [
          {
            "arabic": "هُبَّ.",
            "translation": "əs!"
          }
        ]
      }
    }
  },
  {
    "id": 709,
    "arabic": "هَدَأَ",
    "meaning": "sakitləşmək",
    "forms": {
      "past": {
        "arabic": "هَدَأَ",
        "translation": "sakitləştə",
        "examples": [
          {
            "arabic": "هُوَ هَدَأَ أَمْسِ.",
            "translation": "O, dün sakitləşdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْدَأُ",
        "translation": "sakitləşir",
        "examples": [
          {
            "arabic": "هُوَ يَهْدَأُ الآنَ.",
            "translation": "O, indi sakitləşir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْدَأْ",
        "translation": "sakitləş!",
        "examples": [
          {
            "arabic": "اِهْدَأْ.",
            "translation": "sakitləş!"
          }
        ]
      }
    }
  },
  {
    "id": 710,
    "arabic": "اِرْتَفَعَ",
    "meaning": "yüksəlmək",
    "forms": {
      "past": {
        "arabic": "اِرْتَفَعَ",
        "translation": "yüksəldi",
        "examples": [
          {
            "arabic": "هُوَ اِرْتَفَعَ أَمْسِ.",
            "translation": "O, dün yüksəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْتَفِعُ",
        "translation": "yüksəlir",
        "examples": [
          {
            "arabic": "هُوَ يَرْتَفِعُ الآنَ.",
            "translation": "O, indi yüksəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْتَفِعْ",
        "translation": "yüksəl!",
        "examples": [
          {
            "arabic": "اِرْتَفِعْ.",
            "translation": "yüksəl!"
          }
        ]
      }
    }
  },
  {
    "id": 711,
    "arabic": "اِنْخَفَضَ",
    "meaning": "azalmaq",
    "forms": {
      "past": {
        "arabic": "اِنْخَفَضَ",
        "translation": "azalda",
        "examples": [
          {
            "arabic": "هُوَ اِنْخَفَضَ أَمْسِ.",
            "translation": "O, dün azaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْخَفِضُ",
        "translation": "azalır",
        "examples": [
          {
            "arabic": "هُوَ يَنْخَفِضُ الآنَ.",
            "translation": "O, indi azalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْخَفِضْ",
        "translation": "azal!",
        "examples": [
          {
            "arabic": "اِنْخَفِضْ.",
            "translation": "azal!"
          }
        ]
      }
    }
  },
  {
    "id": 712,
    "arabic": "اِنْتَقَلَ",
    "meaning": "köçmək",
    "forms": {
      "past": {
        "arabic": "اِنْتَقَلَ",
        "translation": "köçtü",
        "examples": [
          {
            "arabic": "هُوَ اِنْتَقَلَ أَمْسِ.",
            "translation": "O, dün köçdü."
          }
        ]
      },
      "present": {
        "arabic": "يَنْتَقِلُ",
        "translation": "köçür",
        "examples": [
          {
            "arabic": "هُوَ يَنْتَقِلُ الآنَ.",
            "translation": "O, indi köçür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْتَقِلْ",
        "translation": "köç!",
        "examples": [
          {
            "arabic": "اِنْتَقِلْ.",
            "translation": "köç!"
          }
        ]
      }
    }
  },
  {
    "id": 713,
    "arabic": "حَوَّلَ",
    "meaning": "çevirmək",
    "forms": {
      "past": {
        "arabic": "حَوَّلَ",
        "translation": "çevirdi",
        "examples": [
          {
            "arabic": "هُوَ حَوَّلَ أَمْسِ.",
            "translation": "O, dün çevirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحَوِّلُ",
        "translation": "çevirir",
        "examples": [
          {
            "arabic": "هُوَ يُحَوِّلُ الآنَ.",
            "translation": "O, indi çevirir."
          }
        ]
      },
      "imperative": {
        "arabic": "حَوِّلْ",
        "translation": "çevir!",
        "examples": [
          {
            "arabic": "حَوِّلْ.",
            "translation": "çevir!"
          }
        ]
      }
    }
  },
  {
    "id": 714,
    "arabic": "تَحَوَّلَ",
    "meaning": "çevrilmək",
    "forms": {
      "past": {
        "arabic": "تَحَوَّلَ",
        "translation": "çevrildi",
        "examples": [
          {
            "arabic": "هُوَ تَحَوَّلَ أَمْسِ.",
            "translation": "O, dün çevrildi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَوَّلُ",
        "translation": "çevrilir",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَوَّلُ الآنَ.",
            "translation": "O, indi çevrilir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَوَّلْ",
        "translation": "çevril!",
        "examples": [
          {
            "arabic": "تَحَوَّلْ.",
            "translation": "çevril!"
          }
        ]
      }
    }
  },
  {
    "id": 715,
    "arabic": "دَارَ",
    "meaning": "dönmək",
    "forms": {
      "past": {
        "arabic": "دَارَ",
        "translation": "döndü",
        "examples": [
          {
            "arabic": "هُوَ دَارَ أَمْسِ.",
            "translation": "O, dün döndü."
          }
        ]
      },
      "present": {
        "arabic": "يَدُورُ",
        "translation": "dönür",
        "examples": [
          {
            "arabic": "هُوَ يَدُورُ الآنَ.",
            "translation": "O, indi dönür."
          }
        ]
      },
      "imperative": {
        "arabic": "دُرْ",
        "translation": "dön!",
        "examples": [
          {
            "arabic": "دُرْ.",
            "translation": "dön!"
          }
        ]
      }
    }
  },
  {
    "id": 716,
    "arabic": "دَوَّرَ",
    "meaning": "fırlatmaq",
    "forms": {
      "past": {
        "arabic": "دَوَّرَ",
        "translation": "fırlatta",
        "examples": [
          {
            "arabic": "هُوَ دَوَّرَ أَمْسِ.",
            "translation": "O, dün fırlatdı."
          }
        ]
      },
      "present": {
        "arabic": "يُدَوِّرُ",
        "translation": "fırlatır",
        "examples": [
          {
            "arabic": "هُوَ يُدَوِّرُ الآنَ.",
            "translation": "O, indi fırlatır."
          }
        ]
      },
      "imperative": {
        "arabic": "دَوِّرْ",
        "translation": "fırlat!",
        "examples": [
          {
            "arabic": "دَوِّرْ.",
            "translation": "fırlat!"
          }
        ]
      }
    }
  },
  {
    "id": 717,
    "arabic": "اِنْقَلَبَ",
    "meaning": "çevrilmək",
    "forms": {
      "past": {
        "arabic": "اِنْقَلَبَ",
        "translation": "çevrildi",
        "examples": [
          {
            "arabic": "هُوَ اِنْقَلَبَ أَمْسِ.",
            "translation": "O, dün çevrildi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْقَلِبُ",
        "translation": "çevrilir",
        "examples": [
          {
            "arabic": "هُوَ يَنْقَلِبُ الآنَ.",
            "translation": "O, indi çevrilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْقَلِبْ",
        "translation": "çevril!",
        "examples": [
          {
            "arabic": "اِنْقَلِبْ.",
            "translation": "çevril!"
          }
        ]
      }
    }
  },
  {
    "id": 718,
    "arabic": "اِسْتَدَارَ",
    "meaning": "dönmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَدَارَ",
        "translation": "döndü",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَدَارَ أَمْسِ.",
            "translation": "O, dün döndü."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَدِيرُ",
        "translation": "dönür",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَدِيرُ الآنَ.",
            "translation": "O, indi dönür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَدِرْ",
        "translation": "dön!",
        "examples": [
          {
            "arabic": "اِسْتَدِرْ.",
            "translation": "dön!"
          }
        ]
      }
    }
  },
  {
    "id": 719,
    "arabic": "اِتَّجَهَ",
    "meaning": "istiqamətlənmək",
    "forms": {
      "past": {
        "arabic": "اِتَّجَهَ",
        "translation": "istiqamətləndi",
        "examples": [
          {
            "arabic": "هُوَ اِتَّجَهَ أَمْسِ.",
            "translation": "O, dün istiqamətləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّجِهُ",
        "translation": "istiqamətlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَّجِهُ الآنَ.",
            "translation": "O, indi istiqamətlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّجِهْ",
        "translation": "istiqamətlən!",
        "examples": [
          {
            "arabic": "اِتَّجِهْ.",
            "translation": "istiqamətlən!"
          }
        ]
      }
    }
  },
  {
    "id": 720,
    "arabic": "اِسْتَدْعَى",
    "meaning": "çağırmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَدْعَى",
        "translation": "çağırdı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَدْعَى أَمْسِ.",
            "translation": "O, dün çağırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَدْعِي",
        "translation": "çağırır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَدْعِي الآنَ.",
            "translation": "O, indi çağırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَدْعِ",
        "translation": "çağır!",
        "examples": [
          {
            "arabic": "اِسْتَدْعِ.",
            "translation": "çağır!"
          }
        ]
      }
    }
  },
  {
    "id": 721,
    "arabic": "اِسْتَجْوَبَ",
    "meaning": "sorğu-sual etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَجْوَبَ",
        "translation": "sorğu-sual etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَجْوَبَ أَمْسِ.",
            "translation": "O, dün sorğu-sual etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَجْوِبُ",
        "translation": "sorğu-sual edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَجْوِبُ الآنَ.",
            "translation": "O, indi sorğu-sual etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَجْوِبْ",
        "translation": "sorğu-sual et!",
        "examples": [
          {
            "arabic": "اِسْتَجْوِبْ.",
            "translation": "sorğu-sual et!"
          }
        ]
      }
    }
  },
  {
    "id": 722,
    "arabic": "حَقَّقَ",
    "meaning": "həyata keçirmək, araşdırmaq",
    "forms": {
      "past": {
        "arabic": "حَقَّقَ",
        "translation": "həyata keçirmək, araşdırdı",
        "examples": [
          {
            "arabic": "هُوَ حَقَّقَ أَمْسِ.",
            "translation": "O, dün həyata keçirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحَقِّقُ",
        "translation": "həyata keçirmək, araşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُحَقِّقُ الآنَ.",
            "translation": "O, indi həyata keçirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "حَقِّقْ",
        "translation": "həyata keçirmək, araşdır!",
        "examples": [
          {
            "arabic": "حَقِّقْ.",
            "translation": "həyata keçirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 723,
    "arabic": "غَرَفَ",
    "meaning": "çömçə ilə götürmək",
    "forms": {
      "past": {
        "arabic": "غَرَفَ",
        "translation": "çömçə ilə götürdü",
        "examples": [
          {
            "arabic": "هُوَ غَرَفَ أَمْسِ.",
            "translation": "O, dünən çömçə ilə götürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَغْرِفُ",
        "translation": "çömçə ilə götürür",
        "examples": [
          {
            "arabic": "هُوَ يَغْرِفُ الآنَ.",
            "translation": "O, indi çömçə ilə götürür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْرِفْ",
        "translation": "çömçə ilə götür!",
        "examples": [
          {
            "arabic": "اِغْرِفْ.",
            "translation": "çömçə ilə götür!"
          }
        ]
      }
    }
  },
  {
    "id": 724,
    "arabic": "قَاضَى",
    "meaning": "məhkəməyə vermək",
    "forms": {
      "past": {
        "arabic": "قَاضَى",
        "translation": "məhkəməyə verdi",
        "examples": [
          {
            "arabic": "هُوَ قَاضَى أَمْسِ.",
            "translation": "O, dün məhkəməyə verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَاضِي",
        "translation": "məhkəməyə verir",
        "examples": [
          {
            "arabic": "هُوَ يُقَاضِي الآنَ.",
            "translation": "O, indi məhkəməyə verir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَاضِ",
        "translation": "məhkəməyə ver!",
        "examples": [
          {
            "arabic": "قَاضِ.",
            "translation": "məhkəməyə ver!"
          }
        ]
      }
    }
  },
  {
    "id": 725,
    "arabic": "أَدَّى",
    "meaning": "yerinə yetirmək",
    "forms": {
      "past": {
        "arabic": "أَدَّى",
        "translation": "yerinə yetirdi",
        "examples": [
          {
            "arabic": "هُوَ أَدَّى أَمْسِ.",
            "translation": "O, dün yerinə yetirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَدِّي",
        "translation": "yerinə yetirir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَدِّي الآنَ.",
            "translation": "O, indi yerinə yetirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَدِّ",
        "translation": "yerinə yetir!",
        "examples": [
          {
            "arabic": "أَدِّ.",
            "translation": "yerinə yetir!"
          }
        ]
      }
    }
  },
  {
    "id": 726,
    "arabic": "أَلْزَمَ",
    "meaning": "məcbur etmək",
    "forms": {
      "past": {
        "arabic": "أَلْزَمَ",
        "translation": "məcbur etdi",
        "examples": [
          {
            "arabic": "هُوَ أَلْزَمَ أَمْسِ.",
            "translation": "O, dün məcbur etdu."
          }
        ]
      },
      "present": {
        "arabic": "يُلْزِمُ",
        "translation": "məcbur edir",
        "examples": [
          {
            "arabic": "هُوَ يُلْزِمُ الآنَ.",
            "translation": "O, indi məcbur etur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَلْزِمْ",
        "translation": "məcbur et!",
        "examples": [
          {
            "arabic": "أَلْزِمْ.",
            "translation": "məcbur et!"
          }
        ]
      }
    }
  },
  {
    "id": 727,
    "arabic": "خَالَفَ",
    "meaning": "zidd getmək",
    "forms": {
      "past": {
        "arabic": "خَالَفَ",
        "translation": "zidd g etdi",
        "examples": [
          {
            "arabic": "هُوَ خَالَفَ أَمْسِ.",
            "translation": "O, dün zidd getdi."
          }
        ]
      },
      "present": {
        "arabic": "يُخَالِفُ",
        "translation": "zidd g edir",
        "examples": [
          {
            "arabic": "هُوَ يُخَالِفُ الآنَ.",
            "translation": "O, indi zidd getir."
          }
        ]
      },
      "imperative": {
        "arabic": "خَالِفْ",
        "translation": "zidd g et!",
        "examples": [
          {
            "arabic": "خَالِفْ.",
            "translation": "zidd get!"
          }
        ]
      }
    }
  },
  {
    "id": 728,
    "arabic": "اِمْتَثَلَ",
    "meaning": "tabe olmaq",
    "forms": {
      "past": {
        "arabic": "اِمْتَثَلَ",
        "translation": "tabe oldu",
        "examples": [
          {
            "arabic": "هُوَ اِمْتَثَلَ أَمْسِ.",
            "translation": "O, dün tabe oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَمْتَثِلُ",
        "translation": "tabe olur",
        "examples": [
          {
            "arabic": "هُوَ يَمْتَثِلُ الآنَ.",
            "translation": "O, indi tabe olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْتَثِلْ",
        "translation": "tabe ol!",
        "examples": [
          {
            "arabic": "اِمْتَثِلْ.",
            "translation": "tabe ol!"
          }
        ]
      }
    }
  },
  {
    "id": 729,
    "arabic": "حَذَّرَ",
    "meaning": "xəbərdar etmək",
    "forms": {
      "past": {
        "arabic": "حَذَّرَ",
        "translation": "xəbərdar etdi",
        "examples": [
          {
            "arabic": "هُوَ حَذَّرَ أَمْسِ.",
            "translation": "O, dün xəbərdar etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُحَذِّرُ",
        "translation": "xəbərdar edir",
        "examples": [
          {
            "arabic": "هُوَ يُحَذِّرُ الآنَ.",
            "translation": "O, indi xəbərdar etır."
          }
        ]
      },
      "imperative": {
        "arabic": "حَذِّرْ",
        "translation": "xəbərdar et!",
        "examples": [
          {
            "arabic": "حَذِّرْ.",
            "translation": "xəbərdar et!"
          }
        ]
      }
    }
  },
  {
    "id": 730,
    "arabic": "حَذِرَ",
    "meaning": "ehtiyat etmək",
    "forms": {
      "past": {
        "arabic": "حَذِرَ",
        "translation": "ehtiyat etdi",
        "examples": [
          {
            "arabic": "هُوَ حَذِرَ أَمْسِ.",
            "translation": "O, dün ehtiyat etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْذَرُ",
        "translation": "ehtiyat edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْذَرُ الآنَ.",
            "translation": "O, indi ehtiyat etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْذَرْ",
        "translation": "ehtiyat et!",
        "examples": [
          {
            "arabic": "اِحْذَرْ.",
            "translation": "ehtiyat et!"
          }
        ]
      }
    }
  },
  {
    "id": 731,
    "arabic": "تَحَذَّرَ",
    "meaning": "ehtiyatlı olmaq",
    "forms": {
      "past": {
        "arabic": "تَحَذَّرَ",
        "translation": "ehtiyatlı oldu",
        "examples": [
          {
            "arabic": "هُوَ تَحَذَّرَ أَمْسِ.",
            "translation": "O, dün ehtiyatlı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَذَّرُ",
        "translation": "ehtiyatlı olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَذَّرُ الآنَ.",
            "translation": "O, indi ehtiyatlı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَذَّرْ",
        "translation": "ehtiyatlı ol!",
        "examples": [
          {
            "arabic": "تَحَذَّرْ.",
            "translation": "ehtiyatlı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 732,
    "arabic": "اِحْتَاطَ",
    "meaning": "ehtiyat etmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَاطَ",
        "translation": "ehtiyat etdi",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَاطَ أَمْسِ.",
            "translation": "O, dün ehtiyat etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَاطُ",
        "translation": "ehtiyat edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَاطُ الآنَ.",
            "translation": "O, indi ehtiyat etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَطْ",
        "translation": "ehtiyat et!",
        "examples": [
          {
            "arabic": "اِحْتَطْ.",
            "translation": "ehtiyat et!"
          }
        ]
      }
    }
  },
  {
    "id": 733,
    "arabic": "خَطِرَ",
    "meaning": "təhlükəli olmaq",
    "forms": {
      "past": {
        "arabic": "خَطِرَ",
        "translation": "təhlükəli oldu",
        "examples": [
          {
            "arabic": "هُوَ خَطِرَ أَمْسِ.",
            "translation": "O, dün təhlükəli oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَخْطَرُ",
        "translation": "təhlükəli olur",
        "examples": [
          {
            "arabic": "هُوَ يَخْطَرُ الآنَ.",
            "translation": "O, indi təhlükəli olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْطَرْ",
        "translation": "təhlükəli ol!",
        "examples": [
          {
            "arabic": "اِخْطَرْ.",
            "translation": "təhlükəli ol!"
          }
        ]
      }
    }
  },
  {
    "id": 734,
    "arabic": "نَجَّحَ",
    "meaning": "uğur qazandırmaq",
    "forms": {
      "past": {
        "arabic": "نَجَّحَ",
        "translation": "uğur qazandırdı",
        "examples": [
          {
            "arabic": "هُوَ نَجَّحَ أَمْسِ.",
            "translation": "O, dün uğur qazandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُنَجِّحُ",
        "translation": "uğur qazandırır",
        "examples": [
          {
            "arabic": "هُوَ يُنَجِّحُ الآنَ.",
            "translation": "O, indi uğur qazandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "نَجِّحْ",
        "translation": "uğur qazandır!",
        "examples": [
          {
            "arabic": "نَجِّحْ.",
            "translation": "uğur qazandır!"
          }
        ]
      }
    }
  },
  {
    "id": 735,
    "arabic": "سَهَّلَ",
    "meaning": "asanlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "سَهَّلَ",
        "translation": "asanlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ سَهَّلَ أَمْسِ.",
            "translation": "O, dün asanlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُسَهِّلُ",
        "translation": "asanlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُسَهِّلُ الآنَ.",
            "translation": "O, indi asanlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "سَهِّلْ",
        "translation": "asanlaşdır!",
        "examples": [
          {
            "arabic": "سَهِّلْ.",
            "translation": "asanlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 736,
    "arabic": "صَعَّبَ",
    "meaning": "çətinləşdirmək",
    "forms": {
      "past": {
        "arabic": "صَعَّبَ",
        "translation": "çətinləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ صَعَّبَ أَمْسِ.",
            "translation": "O, dün çətinləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُصَعِّبُ",
        "translation": "çətinləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يُصَعِّبُ الآنَ.",
            "translation": "O, indi çətinləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "صَعِّبْ",
        "translation": "çətinləşdir!",
        "examples": [
          {
            "arabic": "صَعِّبْ.",
            "translation": "çətinləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 737,
    "arabic": "اِسْتَسْهَلَ",
    "meaning": "asan saymaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَسْهَلَ",
        "translation": "asan sayda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَسْهَلَ أَمْسِ.",
            "translation": "O, dün asan saydı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَسْهِلُ",
        "translation": "asan sayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَسْهِلُ الآنَ.",
            "translation": "O, indi asan sayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَسْهِلْ",
        "translation": "asan say!",
        "examples": [
          {
            "arabic": "اِسْتَسْهِلْ.",
            "translation": "asan say!"
          }
        ]
      }
    }
  },
  {
    "id": 738,
    "arabic": "اِسْتَصْعَبَ",
    "meaning": "çətin saymaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَصْعَبَ",
        "translation": "çətin sayda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَصْعَبَ أَمْسِ.",
            "translation": "O, dün çətin saydı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَصْعِبُ",
        "translation": "çətin sayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَصْعِبُ الآنَ.",
            "translation": "O, indi çətin sayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَصْعِبْ",
        "translation": "çətin say!",
        "examples": [
          {
            "arabic": "اِسْتَصْعِبْ.",
            "translation": "çətin say!"
          }
        ]
      }
    }
  },
  {
    "id": 739,
    "arabic": "اِقْتَنَعَ",
    "meaning": "inandırıcı qəbul etmək",
    "forms": {
      "past": {
        "arabic": "اِقْتَنَعَ",
        "translation": "inandırıcı qəbul etdi",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَنَعَ أَمْسِ.",
            "translation": "O, dün inandırıcı qəbul etdu."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَنِعُ",
        "translation": "inandırıcı qəbul edir",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَنِعُ الآنَ.",
            "translation": "O, indi inandırıcı qəbul etur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَنِعْ",
        "translation": "inandırıcı qəbul et!",
        "examples": [
          {
            "arabic": "اِقْتَنِعْ.",
            "translation": "inandırıcı qəbul et!"
          }
        ]
      }
    }
  },
  {
    "id": 740,
    "arabic": "أَقْنَعَ",
    "meaning": "inandırmaq",
    "forms": {
      "past": {
        "arabic": "أَقْنَعَ",
        "translation": "inandırdı",
        "examples": [
          {
            "arabic": "هُوَ أَقْنَعَ أَمْسِ.",
            "translation": "O, dün inandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُقْنِعُ",
        "translation": "inandırır",
        "examples": [
          {
            "arabic": "هُوَ يُقْنِعُ الآنَ.",
            "translation": "O, indi inandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَقْنِعْ",
        "translation": "inandır!",
        "examples": [
          {
            "arabic": "أَقْنِعْ.",
            "translation": "inandır!"
          }
        ]
      }
    }
  },
  {
    "id": 741,
    "arabic": "أَثَّرَ",
    "meaning": "təsir etmək",
    "forms": {
      "past": {
        "arabic": "أَثَّرَ",
        "translation": "təsir etdi",
        "examples": [
          {
            "arabic": "هُوَ أَثَّرَ أَمْسِ.",
            "translation": "O, dün təsir etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَثِّرُ",
        "translation": "təsir edir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَثِّرُ الآنَ.",
            "translation": "O, indi təsir etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَثِّرْ",
        "translation": "təsir et!",
        "examples": [
          {
            "arabic": "أَثِّرْ.",
            "translation": "təsir et!"
          }
        ]
      }
    }
  },
  {
    "id": 742,
    "arabic": "تَأَثَّرَ",
    "meaning": "təsirlənmək",
    "forms": {
      "past": {
        "arabic": "تَأَثَّرَ",
        "translation": "təsirləndi",
        "examples": [
          {
            "arabic": "هُوَ تَأَثَّرَ أَمْسِ.",
            "translation": "O, dün təsirləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَأَثَّرُ",
        "translation": "təsirlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَأَثَّرُ الآنَ.",
            "translation": "O, indi təsirlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَأَثَّرْ",
        "translation": "təsirlən!",
        "examples": [
          {
            "arabic": "تَأَثَّرْ.",
            "translation": "təsirlən!"
          }
        ]
      }
    }
  },
  {
    "id": 743,
    "arabic": "اِهْتَمَّ",
    "meaning": "maraq göstərmək",
    "forms": {
      "past": {
        "arabic": "اِهْتَمَّ",
        "translation": "maraq göstərdi",
        "examples": [
          {
            "arabic": "هُوَ اِهْتَمَّ أَمْسِ.",
            "translation": "O, dün maraq göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْتَمُّ",
        "translation": "maraq göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَهْتَمُّ الآنَ.",
            "translation": "O, indi maraq göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْتَمَّ",
        "translation": "maraq göstər!",
        "examples": [
          {
            "arabic": "اِهْتَمَّ.",
            "translation": "maraq göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 744,
    "arabic": "اِعْتَنَى",
    "meaning": "qayğı göstərmək",
    "forms": {
      "past": {
        "arabic": "اِعْتَنَى",
        "translation": "qayğı göstərdi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَنَى أَمْسِ.",
            "translation": "O, dün qayğı göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَنِي",
        "translation": "qayğı göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَنِي الآنَ.",
            "translation": "O, indi qayğı göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَنِ",
        "translation": "qayğı göstər!",
        "examples": [
          {
            "arabic": "اِعْتَنِ.",
            "translation": "qayğı göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 745,
    "arabic": "اِهْتَاجَ",
    "meaning": "həyəcanlanmaq",
    "forms": {
      "past": {
        "arabic": "اِهْتَاجَ",
        "translation": "həyəcanlanda",
        "examples": [
          {
            "arabic": "هُوَ اِهْتَاجَ أَمْسِ.",
            "translation": "O, dün həyəcanlandı."
          }
        ]
      },
      "present": {
        "arabic": "يَهْتَاجُ",
        "translation": "həyəcanlanır",
        "examples": [
          {
            "arabic": "هُوَ يَهْتَاجُ الآنَ.",
            "translation": "O, indi həyəcanlanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْتَجْ",
        "translation": "həyəcanlan!",
        "examples": [
          {
            "arabic": "اِهْتَجْ.",
            "translation": "həyəcanlan!"
          }
        ]
      }
    }
  },
  {
    "id": 746,
    "arabic": "اِنْدَهَشَ",
    "meaning": "heyrətlənmək",
    "forms": {
      "past": {
        "arabic": "اِنْدَهَشَ",
        "translation": "heyrətləndi",
        "examples": [
          {
            "arabic": "هُوَ اِنْدَهَشَ أَمْسِ.",
            "translation": "O, dün heyrətləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْدَهِشُ",
        "translation": "heyrətlənir",
        "examples": [
          {
            "arabic": "هُوَ يَنْدَهِشُ الآنَ.",
            "translation": "O, indi heyrətlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْدَهِشْ",
        "translation": "heyrətlən!",
        "examples": [
          {
            "arabic": "اِنْدَهِشْ.",
            "translation": "heyrətlən!"
          }
        ]
      }
    }
  },
  {
    "id": 747,
    "arabic": "تَفَاجَأَ",
    "meaning": "təəccüblənmək",
    "forms": {
      "past": {
        "arabic": "تَفَاجَأَ",
        "translation": "təəccübləndi",
        "examples": [
          {
            "arabic": "هُوَ تَفَاجَأَ أَمْسِ.",
            "translation": "O, dün təəccübləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَاجَأُ",
        "translation": "təəccüblənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَاجَأُ الآنَ.",
            "translation": "O, indi təəccüblənir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَفَاجَأْ",
        "translation": "təəccüblən!",
        "examples": [
          {
            "arabic": "تَفَاجَأْ.",
            "translation": "təəccüblən!"
          }
        ]
      }
    }
  },
  {
    "id": 748,
    "arabic": "اِسْتَغْرَبَ",
    "meaning": "təəccüblənmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَغْرَبَ",
        "translation": "təəccübləndi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَغْرَبَ أَمْسِ.",
            "translation": "O, dün təəccübləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَغْرِبُ",
        "translation": "təəccüblənir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَغْرِبُ الآنَ.",
            "translation": "O, indi təəccüblənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَغْرِبْ",
        "translation": "təəccüblən!",
        "examples": [
          {
            "arabic": "اِسْتَغْرِبْ.",
            "translation": "təəccüblən!"
          }
        ]
      }
    }
  },
  {
    "id": 749,
    "arabic": "أُعْجِبَ",
    "meaning": "xoşuna gəlmək",
    "forms": {
      "past": {
        "arabic": "أُعْجِبَ",
        "translation": "xoşuna gəldi",
        "examples": [
          {
            "arabic": "هُوَ أُعْجِبَ أَمْسِ.",
            "translation": "O, dün xoşuna gəldi."
          }
        ]
      },
      "present": {
        "arabic": "يُعْجَبُ",
        "translation": "xoşuna gəlir",
        "examples": [
          {
            "arabic": "هُوَ يُعْجَبُ الآنَ.",
            "translation": "O, indi xoşuna gəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "أُعْجَبْ",
        "translation": "xoşuna gəl!",
        "examples": [
          {
            "arabic": "أُعْجَبْ.",
            "translation": "xoşuna gəl!"
          }
        ]
      }
    }
  },
  {
    "id": 750,
    "arabic": "أَعْجَبَ",
    "meaning": "bəyəndirmək",
    "forms": {
      "past": {
        "arabic": "أَعْجَبَ",
        "translation": "bəyəndirdi",
        "examples": [
          {
            "arabic": "هُوَ أَعْجَبَ أَمْسِ.",
            "translation": "O, dün bəyəndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعْجِبُ",
        "translation": "bəyəndirir",
        "examples": [
          {
            "arabic": "هُوَ يُعْجِبُ الآنَ.",
            "translation": "O, indi bəyəndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعْجِبْ",
        "translation": "bəyəndir!",
        "examples": [
          {
            "arabic": "أَعْجِبْ.",
            "translation": "bəyəndir!"
          }
        ]
      }
    }
  },
  {
    "id": 751,
    "arabic": "فَضَّلَ",
    "meaning": "üstün tutmaq",
    "forms": {
      "past": {
        "arabic": "فَضَّلَ",
        "translation": "üstün tuttu",
        "examples": [
          {
            "arabic": "هُوَ فَضَّلَ أَمْسِ.",
            "translation": "O, dün üstün tutdu."
          }
        ]
      },
      "present": {
        "arabic": "يُفَضِّلُ",
        "translation": "üstün tutur",
        "examples": [
          {
            "arabic": "هُوَ يُفَضِّلُ الآنَ.",
            "translation": "O, indi üstün tutur."
          }
        ]
      },
      "imperative": {
        "arabic": "فَضِّلْ",
        "translation": "üstün tut!",
        "examples": [
          {
            "arabic": "فَضِّلْ.",
            "translation": "üstün tut!"
          }
        ]
      }
    }
  },
  {
    "id": 752,
    "arabic": "رَغَّبَ",
    "meaning": "həvəsləndirmək",
    "forms": {
      "past": {
        "arabic": "رَغَّبَ",
        "translation": "həvəsləndirdi",
        "examples": [
          {
            "arabic": "هُوَ رَغَّبَ أَمْسِ.",
            "translation": "O, dün həvəsləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرَغِّبُ",
        "translation": "həvəsləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُرَغِّبُ الآنَ.",
            "translation": "O, indi həvəsləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "رَغِّبْ",
        "translation": "həvəsləndir!",
        "examples": [
          {
            "arabic": "رَغِّبْ.",
            "translation": "həvəsləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 753,
    "arabic": "شَجَّعَ",
    "meaning": "həvəsləndirmək",
    "forms": {
      "past": {
        "arabic": "شَجَّعَ",
        "translation": "həvəsləndirdi",
        "examples": [
          {
            "arabic": "هُوَ شَجَّعَ أَمْسِ.",
            "translation": "O, dün həvəsləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُشَجِّعُ",
        "translation": "həvəsləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُشَجِّعُ الآنَ.",
            "translation": "O, indi həvəsləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "شَجِّعْ",
        "translation": "həvəsləndir!",
        "examples": [
          {
            "arabic": "شَجِّعْ.",
            "translation": "həvəsləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 754,
    "arabic": "ثَبَّطَ",
    "meaning": "ruh düşkünlüyünə salmaq",
    "forms": {
      "past": {
        "arabic": "ثَبَّطَ",
        "translation": "ruh düşkünlüyünə salda",
        "examples": [
          {
            "arabic": "هُوَ ثَبَّطَ أَمْسِ.",
            "translation": "O, dün ruh düşkünlüyünə saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُثَبِّطُ",
        "translation": "ruh düşkünlüyünə salır",
        "examples": [
          {
            "arabic": "هُوَ يُثَبِّطُ الآنَ.",
            "translation": "O, indi ruh düşkünlüyünə salır."
          }
        ]
      },
      "imperative": {
        "arabic": "ثَبِّطْ",
        "translation": "ruh düşkünlüyünə sal!",
        "examples": [
          {
            "arabic": "ثَبِّطْ.",
            "translation": "ruh düşkünlüyünə sal!"
          }
        ]
      }
    }
  },
  {
    "id": 755,
    "arabic": "أَلْهَمَ",
    "meaning": "ilham vermək",
    "forms": {
      "past": {
        "arabic": "أَلْهَمَ",
        "translation": "ilham verda",
        "examples": [
          {
            "arabic": "هُوَ أَلْهَمَ أَمْسِ.",
            "translation": "O, dün ilham verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُلْهِمُ",
        "translation": "ilham verır",
        "examples": [
          {
            "arabic": "هُوَ يُلْهِمُ الآنَ.",
            "translation": "O, indi ilham verır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَلْهِمْ",
        "translation": "ilham ver!",
        "examples": [
          {
            "arabic": "أَلْهِمْ.",
            "translation": "ilham ver!"
          }
        ]
      }
    }
  },
  {
    "id": 756,
    "arabic": "أَلْحَقَ",
    "meaning": "qoşmaq",
    "forms": {
      "past": {
        "arabic": "أَلْحَقَ",
        "translation": "qoştu",
        "examples": [
          {
            "arabic": "هُوَ أَلْحَقَ أَمْسِ.",
            "translation": "O, dün qoşdu."
          }
        ]
      },
      "present": {
        "arabic": "يُلْحِقُ",
        "translation": "qoşur",
        "examples": [
          {
            "arabic": "هُوَ يُلْحِقُ الآنَ.",
            "translation": "O, indi qoşur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَلْحِقْ",
        "translation": "qoş!",
        "examples": [
          {
            "arabic": "أَلْحِقْ.",
            "translation": "qoş!"
          }
        ]
      }
    }
  },
  {
    "id": 757,
    "arabic": "لَاحَقَ",
    "meaning": "təqib etmək",
    "forms": {
      "past": {
        "arabic": "لَاحَقَ",
        "translation": "təqib etdi",
        "examples": [
          {
            "arabic": "هُوَ لَاحَقَ أَمْسِ.",
            "translation": "O, dün təqib etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُلَاحِقُ",
        "translation": "təqib edir",
        "examples": [
          {
            "arabic": "هُوَ يُلَاحِقُ الآنَ.",
            "translation": "O, indi təqib etir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَاحِقْ",
        "translation": "təqib et!",
        "examples": [
          {
            "arabic": "لَاحِقْ.",
            "translation": "təqib et!"
          }
        ]
      }
    }
  },
  {
    "id": 758,
    "arabic": "تَرَقَّبَ",
    "meaning": "gözləmək",
    "forms": {
      "past": {
        "arabic": "تَرَقَّبَ",
        "translation": "gözlədi",
        "examples": [
          {
            "arabic": "هُوَ تَرَقَّبَ أَمْسِ.",
            "translation": "O, dün gözlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَرَقَّبُ",
        "translation": "gözləir",
        "examples": [
          {
            "arabic": "هُوَ يَتَرَقَّبُ الآنَ.",
            "translation": "O, indi gözləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَرَقَّبْ",
        "translation": "gözlə!",
        "examples": [
          {
            "arabic": "تَرَقَّبْ.",
            "translation": "gözlə!"
          }
        ]
      }
    }
  },
  {
    "id": 759,
    "arabic": "رَقَبَ",
    "meaning": "müşahidə etmək",
    "forms": {
      "past": {
        "arabic": "رَقَبَ",
        "translation": "müşahidə etdi",
        "examples": [
          {
            "arabic": "هُوَ رَقَبَ أَمْسِ.",
            "translation": "O, dün müşahidə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْقُبُ",
        "translation": "müşahidə edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْقُبُ الآنَ.",
            "translation": "O, indi müşahidə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْقُبْ",
        "translation": "müşahidə et!",
        "examples": [
          {
            "arabic": "اِرْقُبْ.",
            "translation": "müşahidə et!"
          }
        ]
      }
    }
  },
  {
    "id": 760,
    "arabic": "رَصَدَ",
    "meaning": "izləmək, qeydə almaq",
    "forms": {
      "past": {
        "arabic": "رَصَدَ",
        "translation": "izləmək, qeydə alda",
        "examples": [
          {
            "arabic": "هُوَ رَصَدَ أَمْسِ.",
            "translation": "O, dün izləməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْصُدُ",
        "translation": "izləmək, qeydə alır",
        "examples": [
          {
            "arabic": "هُوَ يَرْصُدُ الآنَ.",
            "translation": "O, indi izləməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْصُدْ",
        "translation": "izləmək, qeydə al!",
        "examples": [
          {
            "arabic": "اُرْصُدْ.",
            "translation": "izləmək!"
          }
        ]
      }
    }
  },
  {
    "id": 761,
    "arabic": "سَجَّلَ",
    "meaning": "qeyd etmək",
    "forms": {
      "past": {
        "arabic": "سَجَّلَ",
        "translation": "qeyd etdi",
        "examples": [
          {
            "arabic": "هُوَ سَجَّلَ أَمْسِ.",
            "translation": "O, dün qeyd etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُسَجِّلُ",
        "translation": "qeyd edir",
        "examples": [
          {
            "arabic": "هُوَ يُسَجِّلُ الآنَ.",
            "translation": "O, indi qeyd etır."
          }
        ]
      },
      "imperative": {
        "arabic": "سَجِّلْ",
        "translation": "qeyd et!",
        "examples": [
          {
            "arabic": "سَجِّلْ.",
            "translation": "qeyd et!"
          }
        ]
      }
    }
  },
  {
    "id": 762,
    "arabic": "سَجَلَ",
    "meaning": "qeyd etmək",
    "forms": {
      "past": {
        "arabic": "سَجَلَ",
        "translation": "qeyd etdi",
        "examples": [
          {
            "arabic": "هُوَ سَجَلَ أَمْسِ.",
            "translation": "O, dün qeyd etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْجُلُ",
        "translation": "qeyd edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْجُلُ الآنَ.",
            "translation": "O, indi qeyd etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْجُلْ",
        "translation": "qeyd et!",
        "examples": [
          {
            "arabic": "اُسْجُلْ.",
            "translation": "qeyd et!"
          }
        ]
      }
    }
  },
  {
    "id": 763,
    "arabic": "كَتَمَ",
    "meaning": "gizlətmək",
    "forms": {
      "past": {
        "arabic": "كَتَمَ",
        "translation": "gizləttə",
        "examples": [
          {
            "arabic": "هُوَ كَتَمَ أَمْسِ.",
            "translation": "O, dün gizlətdi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْتُمُ",
        "translation": "gizlətir",
        "examples": [
          {
            "arabic": "هُوَ يَكْتُمُ الآنَ.",
            "translation": "O, indi gizlətir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُكْتُمْ",
        "translation": "gizlət!",
        "examples": [
          {
            "arabic": "اُكْتُمْ.",
            "translation": "gizlət!"
          }
        ]
      }
    }
  },
  {
    "id": 764,
    "arabic": "أَخْفَى",
    "meaning": "gizlətmək",
    "forms": {
      "past": {
        "arabic": "أَخْفَى",
        "translation": "gizləttə",
        "examples": [
          {
            "arabic": "هُوَ أَخْفَى أَمْسِ.",
            "translation": "O, dün gizlətdi."
          }
        ]
      },
      "present": {
        "arabic": "يُخْفِي",
        "translation": "gizlətir",
        "examples": [
          {
            "arabic": "هُوَ يُخْفِي الآنَ.",
            "translation": "O, indi gizlətir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَخْفِ",
        "translation": "gizlət!",
        "examples": [
          {
            "arabic": "أَخْفِ.",
            "translation": "gizlət!"
          }
        ]
      }
    }
  },
  {
    "id": 765,
    "arabic": "ظَهَرَ",
    "meaning": "görünmək",
    "forms": {
      "past": {
        "arabic": "ظَهَرَ",
        "translation": "göründü",
        "examples": [
          {
            "arabic": "هُوَ ظَهَرَ أَمْسِ.",
            "translation": "O, dün göründü."
          }
        ]
      },
      "present": {
        "arabic": "يَظْهَرُ",
        "translation": "görünür",
        "examples": [
          {
            "arabic": "هُوَ يَظْهَرُ الآنَ.",
            "translation": "O, indi görünür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِظْهَرْ",
        "translation": "görün!",
        "examples": [
          {
            "arabic": "اِظْهَرْ.",
            "translation": "görün!"
          }
        ]
      }
    }
  },
  {
    "id": 766,
    "arabic": "أَظْهَرَ",
    "meaning": "göstərmək",
    "forms": {
      "past": {
        "arabic": "أَظْهَرَ",
        "translation": "göstərdi",
        "examples": [
          {
            "arabic": "هُوَ أَظْهَرَ أَمْسِ.",
            "translation": "O, dün göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يُظْهِرُ",
        "translation": "göstərir",
        "examples": [
          {
            "arabic": "هُوَ يُظْهِرُ الآنَ.",
            "translation": "O, indi göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَظْهِرْ",
        "translation": "göstər!",
        "examples": [
          {
            "arabic": "أَظْهِرْ.",
            "translation": "göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 767,
    "arabic": "بَدَا",
    "meaning": "görünmək",
    "forms": {
      "past": {
        "arabic": "بَدَا",
        "translation": "göründü",
        "examples": [
          {
            "arabic": "هُوَ بَدَا أَمْسِ.",
            "translation": "O, dün göründü."
          }
        ]
      },
      "present": {
        "arabic": "يَبْدُو",
        "translation": "görünür",
        "examples": [
          {
            "arabic": "هُوَ يَبْدُو الآنَ.",
            "translation": "O, indi görünür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُبْدُ",
        "translation": "görün!",
        "examples": [
          {
            "arabic": "اُبْدُ.",
            "translation": "görün!"
          }
        ]
      }
    }
  },
  {
    "id": 768,
    "arabic": "أَبْدَى",
    "meaning": "bildirmək, göstərmək",
    "forms": {
      "past": {
        "arabic": "أَبْدَى",
        "translation": "bildirmək, göstərdi",
        "examples": [
          {
            "arabic": "هُوَ أَبْدَى أَمْسِ.",
            "translation": "O, dün bildirməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُبْدِي",
        "translation": "bildirmək, göstərir",
        "examples": [
          {
            "arabic": "هُوَ يُبْدِي الآنَ.",
            "translation": "O, indi bildirməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَبْدِ",
        "translation": "bildirmək, göstər!",
        "examples": [
          {
            "arabic": "أَبْدِ.",
            "translation": "bildirmək!"
          }
        ]
      }
    }
  },
  {
    "id": 769,
    "arabic": "كَشَفَ",
    "meaning": "açmaq, üzə çıxarmaq",
    "forms": {
      "past": {
        "arabic": "كَشَفَ",
        "translation": "açmaq, üzə çıxarda",
        "examples": [
          {
            "arabic": "هُوَ كَشَفَ أَمْسِ.",
            "translation": "O, dün açmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَكْشِفُ",
        "translation": "açmaq, üzə çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يَكْشِفُ الآنَ.",
            "translation": "O, indi açmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْشِفْ",
        "translation": "açmaq, üzə çıxar!",
        "examples": [
          {
            "arabic": "اِكْشِفْ.",
            "translation": "açmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 770,
    "arabic": "اِنْكَشَفَ",
    "meaning": "üzə çıxmaq",
    "forms": {
      "past": {
        "arabic": "اِنْكَشَفَ",
        "translation": "üzə çıxtı",
        "examples": [
          {
            "arabic": "هُوَ اِنْكَشَفَ أَمْسِ.",
            "translation": "O, dün üzə çıxdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْكَشِفُ",
        "translation": "üzə çıxır",
        "examples": [
          {
            "arabic": "هُوَ يَنْكَشِفُ الآنَ.",
            "translation": "O, indi üzə çıxır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْكَشِفْ",
        "translation": "üzə çıx!",
        "examples": [
          {
            "arabic": "اِنْكَشِفْ.",
            "translation": "üzə çıx!"
          }
        ]
      }
    }
  },
  {
    "id": 771,
    "arabic": "أَنْشَرَ",
    "meaning": "yaymaq",
    "forms": {
      "past": {
        "arabic": "أَنْشَرَ",
        "translation": "yayda",
        "examples": [
          {
            "arabic": "هُوَ أَنْشَرَ أَمْسِ.",
            "translation": "O, dün yaydı."
          }
        ]
      },
      "present": {
        "arabic": "يُنْشِرُ",
        "translation": "yayır",
        "examples": [
          {
            "arabic": "هُوَ يُنْشِرُ الآنَ.",
            "translation": "O, indi yayır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْشِرْ",
        "translation": "yay!",
        "examples": [
          {
            "arabic": "أَنْشِرْ.",
            "translation": "yay!"
          }
        ]
      }
    }
  },
  {
    "id": 772,
    "arabic": "أَرْسَى",
    "meaning": "qərarlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "أَرْسَى",
        "translation": "qərarlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ أَرْسَى أَمْسِ.",
            "translation": "O, dün qərarlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُرْسِي",
        "translation": "qərarlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُرْسِي الآنَ.",
            "translation": "O, indi qərarlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَرْسِ",
        "translation": "qərarlaşdır!",
        "examples": [
          {
            "arabic": "أَرْسِ.",
            "translation": "qərarlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 773,
    "arabic": "اِسْتَقَرَّ",
    "meaning": "sabitləşmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَرَّ",
        "translation": "sabitləştə",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَرَّ أَمْسِ.",
            "translation": "O, dün sabitləşdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِرُّ",
        "translation": "sabitləşir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِرُّ الآنَ.",
            "translation": "O, indi sabitləşir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِرَّ",
        "translation": "sabitləş!",
        "examples": [
          {
            "arabic": "اِسْتَقِرَّ.",
            "translation": "sabitləş!"
          }
        ]
      }
    }
  },
  {
    "id": 774,
    "arabic": "قَرَّ",
    "meaning": "sabit olmaq",
    "forms": {
      "past": {
        "arabic": "قَرَّ",
        "translation": "sabit oldu",
        "examples": [
          {
            "arabic": "هُوَ قَرَّ أَمْسِ.",
            "translation": "O, dün sabit oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَقَرُّ",
        "translation": "sabit olur",
        "examples": [
          {
            "arabic": "هُوَ يَقَرُّ الآنَ.",
            "translation": "O, indi sabit olur."
          }
        ]
      },
      "imperative": {
        "arabic": "قَرَّ",
        "translation": "sabit ol!",
        "examples": [
          {
            "arabic": "قَرَّ.",
            "translation": "sabit ol!"
          }
        ]
      }
    }
  },
  {
    "id": 775,
    "arabic": "اِسْتَوَى",
    "meaning": "bərabər olmaq, düzəlmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَوَى",
        "translation": "bərabər olmaq, düzəldi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَوَى أَمْسِ.",
            "translation": "O, dün bərabər olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَوِي",
        "translation": "bərabər olmaq, düzəlir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَوِي الآنَ.",
            "translation": "O, indi bərabər olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَوِ",
        "translation": "bərabər olmaq, düzəl!",
        "examples": [
          {
            "arabic": "اِسْتَوِ.",
            "translation": "bərabər olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 776,
    "arabic": "سَاوَى",
    "meaning": "bərabərləşdirmək",
    "forms": {
      "past": {
        "arabic": "سَاوَى",
        "translation": "bərabərləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ سَاوَى أَمْسِ.",
            "translation": "O, dün bərabərləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَاوِي",
        "translation": "bərabərləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يُسَاوِي الآنَ.",
            "translation": "O, indi bərabərləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَاوِ",
        "translation": "bərabərləşdir!",
        "examples": [
          {
            "arabic": "سَاوِ.",
            "translation": "bərabərləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 777,
    "arabic": "عَادَلَ",
    "meaning": "bərabərləşdirmək",
    "forms": {
      "past": {
        "arabic": "عَادَلَ",
        "translation": "bərabərləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ عَادَلَ أَمْسِ.",
            "translation": "O, dün bərabərləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَادِلُ",
        "translation": "bərabərləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يُعَادِلُ الآنَ.",
            "translation": "O, indi bərabərləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "عَادِلْ",
        "translation": "bərabərləşdir!",
        "examples": [
          {
            "arabic": "عَادِلْ.",
            "translation": "bərabərləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 778,
    "arabic": "خَفَّ",
    "meaning": "yüngülləşmək",
    "forms": {
      "past": {
        "arabic": "خَفَّ",
        "translation": "yüngülləştə",
        "examples": [
          {
            "arabic": "هُوَ خَفَّ أَمْسِ.",
            "translation": "O, dün yüngülləşdi."
          }
        ]
      },
      "present": {
        "arabic": "يَخِفُّ",
        "translation": "yüngülləşir",
        "examples": [
          {
            "arabic": "هُوَ يَخِفُّ الآنَ.",
            "translation": "O, indi yüngülləşir."
          }
        ]
      },
      "imperative": {
        "arabic": "خِفَّ",
        "translation": "yüngülləş!",
        "examples": [
          {
            "arabic": "خِفَّ.",
            "translation": "yüngülləş!"
          }
        ]
      }
    }
  },
  {
    "id": 779,
    "arabic": "ثَقُلَ",
    "meaning": "ağırlaşmaq",
    "forms": {
      "past": {
        "arabic": "ثَقُلَ",
        "translation": "ağırlaşta",
        "examples": [
          {
            "arabic": "هُوَ ثَقُلَ أَمْسِ.",
            "translation": "O, dün ağırlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَثْقُلُ",
        "translation": "ağırlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَثْقُلُ الآنَ.",
            "translation": "O, indi ağırlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُثْقُلْ",
        "translation": "ağırlaş!",
        "examples": [
          {
            "arabic": "اُثْقُلْ.",
            "translation": "ağırlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 780,
    "arabic": "قَوِيَ",
    "meaning": "güclənmək",
    "forms": {
      "past": {
        "arabic": "قَوِيَ",
        "translation": "gücləndi",
        "examples": [
          {
            "arabic": "هُوَ قَوِيَ أَمْسِ.",
            "translation": "O, dün gücləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْوَى",
        "translation": "güclənir",
        "examples": [
          {
            "arabic": "هُوَ يَقْوَى الآنَ.",
            "translation": "O, indi güclənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْوَ",
        "translation": "güclən!",
        "examples": [
          {
            "arabic": "اِقْوَ.",
            "translation": "güclən!"
          }
        ]
      }
    }
  },
  {
    "id": 781,
    "arabic": "ضَعُفَ",
    "meaning": "zəifləmək",
    "forms": {
      "past": {
        "arabic": "ضَعُفَ",
        "translation": "zəiflədi",
        "examples": [
          {
            "arabic": "هُوَ ضَعُفَ أَمْسِ.",
            "translation": "O, dün zəiflədi."
          }
        ]
      },
      "present": {
        "arabic": "يَضْعُفُ",
        "translation": "zəifləir",
        "examples": [
          {
            "arabic": "هُوَ يَضْعُفُ الآنَ.",
            "translation": "O, indi zəifləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِضْعُفْ",
        "translation": "zəiflə!",
        "examples": [
          {
            "arabic": "اِضْعُفْ.",
            "translation": "zəiflə!"
          }
        ]
      }
    }
  },
  {
    "id": 782,
    "arabic": "قَوَّى",
    "meaning": "gücləndirmək",
    "forms": {
      "past": {
        "arabic": "قَوَّى",
        "translation": "gücləndirdi",
        "examples": [
          {
            "arabic": "هُوَ قَوَّى أَمْسِ.",
            "translation": "O, dün gücləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَوِّي",
        "translation": "gücləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُقَوِّي الآنَ.",
            "translation": "O, indi gücləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَوِّ",
        "translation": "gücləndir!",
        "examples": [
          {
            "arabic": "قَوِّ.",
            "translation": "gücləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 783,
    "arabic": "أَضْعَفَ",
    "meaning": "zəiflətmək",
    "forms": {
      "past": {
        "arabic": "أَضْعَفَ",
        "translation": "zəifləttə",
        "examples": [
          {
            "arabic": "هُوَ أَضْعَفَ أَمْسِ.",
            "translation": "O, dün zəiflətdi."
          }
        ]
      },
      "present": {
        "arabic": "يُضْعِفُ",
        "translation": "zəiflətir",
        "examples": [
          {
            "arabic": "هُوَ يُضْعِفُ الآنَ.",
            "translation": "O, indi zəiflətir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَضْعِفْ",
        "translation": "zəiflət!",
        "examples": [
          {
            "arabic": "أَضْعِفْ.",
            "translation": "zəiflət!"
          }
        ]
      }
    }
  },
  {
    "id": 784,
    "arabic": "اِسْتَخَفَّ",
    "meaning": "yüngül saymaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَخَفَّ",
        "translation": "yüngül sayda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَخَفَّ أَمْسِ.",
            "translation": "O, dün yüngül saydı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَخِفُّ",
        "translation": "yüngül sayır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَخِفُّ الآنَ.",
            "translation": "O, indi yüngül sayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَخِفَّ",
        "translation": "yüngül say!",
        "examples": [
          {
            "arabic": "اِسْتَخِفَّ.",
            "translation": "yüngül say!"
          }
        ]
      }
    }
  },
  {
    "id": 785,
    "arabic": "اِسْتَقْوَى",
    "meaning": "güclənmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَقْوَى",
        "translation": "gücləndi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقْوَى أَمْسِ.",
            "translation": "O, dün gücləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقْوِي",
        "translation": "güclənir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقْوِي الآنَ.",
            "translation": "O, indi güclənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقْوِ",
        "translation": "güclən!",
        "examples": [
          {
            "arabic": "اِسْتَقْوِ.",
            "translation": "güclən!"
          }
        ]
      }
    }
  },
  {
    "id": 786,
    "arabic": "تَضَاعَفَ",
    "meaning": "qatlanmaq",
    "forms": {
      "past": {
        "arabic": "تَضَاعَفَ",
        "translation": "qatlanda",
        "examples": [
          {
            "arabic": "هُوَ تَضَاعَفَ أَمْسِ.",
            "translation": "O, dün qatlandı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَضَاعَفُ",
        "translation": "qatlanır",
        "examples": [
          {
            "arabic": "هُوَ يَتَضَاعَفُ الآنَ.",
            "translation": "O, indi qatlanır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَضَاعَفْ",
        "translation": "qatlan!",
        "examples": [
          {
            "arabic": "تَضَاعَفْ.",
            "translation": "qatlan!"
          }
        ]
      }
    }
  },
  {
    "id": 787,
    "arabic": "تَغَيَّرَ",
    "meaning": "dəyişmək",
    "forms": {
      "past": {
        "arabic": "تَغَيَّرَ",
        "translation": "dəyişti",
        "examples": [
          {
            "arabic": "هُوَ تَغَيَّرَ أَمْسِ.",
            "translation": "O, dün dəyişdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَغَيَّرُ",
        "translation": "dəyişir",
        "examples": [
          {
            "arabic": "هُوَ يَتَغَيَّرُ الآنَ.",
            "translation": "O, indi dəyişir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَغَيَّرْ",
        "translation": "dəyiş!",
        "examples": [
          {
            "arabic": "تَغَيَّرْ.",
            "translation": "dəyiş!"
          }
        ]
      }
    }
  },
  {
    "id": 788,
    "arabic": "اِسْتَبْدَلَ",
    "meaning": "əvəz etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَبْدَلَ",
        "translation": "əvəz etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَبْدَلَ أَمْسِ.",
            "translation": "O, dün əvəz etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَبْدِلُ",
        "translation": "əvəz edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَبْدِلُ الآنَ.",
            "translation": "O, indi əvəz etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَبْدِلْ",
        "translation": "əvəz et!",
        "examples": [
          {
            "arabic": "اِسْتَبْدِلْ.",
            "translation": "əvəz et!"
          }
        ]
      }
    }
  },
  {
    "id": 789,
    "arabic": "جَرَحَ",
    "meaning": "yaralamaq",
    "forms": {
      "past": {
        "arabic": "جَرَحَ",
        "translation": "yaraladı",
        "examples": [
          {
            "arabic": "هُوَ جَرَحَ أَمْسِ.",
            "translation": "O, dünən yaraladı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْرَحُ",
        "translation": "yaralayır",
        "examples": [
          {
            "arabic": "هُوَ يَجْرَحُ الآنَ.",
            "translation": "O, indi yaralayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْرَحْ",
        "translation": "yarala!",
        "examples": [
          {
            "arabic": "اِجْرَحْ.",
            "translation": "yarala!"
          }
        ]
      }
    }
  },
  {
    "id": 790,
    "arabic": "حَضَنَ",
    "meaning": "qucaqlamaq",
    "forms": {
      "past": {
        "arabic": "حَضَنَ",
        "translation": "qucaqladı",
        "examples": [
          {
            "arabic": "هُوَ حَضَنَ أَمْسِ.",
            "translation": "O, dünən qucaqladı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْضُنُ",
        "translation": "qucaqlayır",
        "examples": [
          {
            "arabic": "هُوَ يَحْضُنُ الآنَ.",
            "translation": "O, indi qucaqlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُحْضُنْ",
        "translation": "qucaqla!",
        "examples": [
          {
            "arabic": "اُحْضُنْ.",
            "translation": "qucaqla!"
          }
        ]
      }
    }
  },
  {
    "id": 791,
    "arabic": "غَلَبَ",
    "meaning": "məğlub etmək",
    "forms": {
      "past": {
        "arabic": "غَلَبَ",
        "translation": "məğlub etdi",
        "examples": [
          {
            "arabic": "هُوَ غَلَبَ أَمْسِ.",
            "translation": "O, dünən məğlub etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَغْلِبُ",
        "translation": "məğlub edir",
        "examples": [
          {
            "arabic": "هُوَ يَغْلِبُ الآنَ.",
            "translation": "O, indi məğlub edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْلِبْ",
        "translation": "məğlub et!",
        "examples": [
          {
            "arabic": "اِغْلِبْ.",
            "translation": "məğlub et!"
          }
        ]
      }
    }
  },
  {
    "id": 792,
    "arabic": "تَصَرَّفَ",
    "meaning": "davranmaq",
    "forms": {
      "past": {
        "arabic": "تَصَرَّفَ",
        "translation": "davranda",
        "examples": [
          {
            "arabic": "هُوَ تَصَرَّفَ أَمْسِ.",
            "translation": "O, dün davrandı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَصَرَّفُ",
        "translation": "davranır",
        "examples": [
          {
            "arabic": "هُوَ يَتَصَرَّفُ الآنَ.",
            "translation": "O, indi davranır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَصَرَّفْ",
        "translation": "davran!",
        "examples": [
          {
            "arabic": "تَصَرَّفْ.",
            "translation": "davran!"
          }
        ]
      }
    }
  },
  {
    "id": 793,
    "arabic": "تَحَرَّى",
    "meaning": "araşdırmaq",
    "forms": {
      "past": {
        "arabic": "تَحَرَّى",
        "translation": "araşdırdı",
        "examples": [
          {
            "arabic": "هُوَ تَحَرَّى أَمْسِ.",
            "translation": "O, dün araşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَرَّى",
        "translation": "araşdırır",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَرَّى الآنَ.",
            "translation": "O, indi araşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَرَّ",
        "translation": "araşdır!",
        "examples": [
          {
            "arabic": "تَحَرَّ.",
            "translation": "araşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 794,
    "arabic": "تَفَقَّدَ",
    "meaning": "yoxlamaq",
    "forms": {
      "past": {
        "arabic": "تَفَقَّدَ",
        "translation": "yoxlada",
        "examples": [
          {
            "arabic": "هُوَ تَفَقَّدَ أَمْسِ.",
            "translation": "O, dün yoxladı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَقَّدُ",
        "translation": "yoxlaır",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَقَّدُ الآنَ.",
            "translation": "O, indi yoxlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَفَقَّدْ",
        "translation": "yoxla!",
        "examples": [
          {
            "arabic": "تَفَقَّدْ.",
            "translation": "yoxla!"
          }
        ]
      }
    }
  },
  {
    "id": 795,
    "arabic": "فَحَصَ",
    "meaning": "müayinə etmək, yoxlamaq",
    "forms": {
      "past": {
        "arabic": "فَحَصَ",
        "translation": "müayinə etmək, yoxlada",
        "examples": [
          {
            "arabic": "هُوَ فَحَصَ أَمْسِ.",
            "translation": "O, dün müayinə etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَفْحَصُ",
        "translation": "müayinə etmək, yoxlaır",
        "examples": [
          {
            "arabic": "هُوَ يَفْحَصُ الآنَ.",
            "translation": "O, indi müayinə etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْحَصْ",
        "translation": "müayinə etmək, yoxla!",
        "examples": [
          {
            "arabic": "اِفْحَصْ.",
            "translation": "müayinə etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 796,
    "arabic": "اِخْتَصَرَ",
    "meaning": "qısaltmaq",
    "forms": {
      "past": {
        "arabic": "اِخْتَصَرَ",
        "translation": "qısaltta",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَصَرَ أَمْسِ.",
            "translation": "O, dün qısaltdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَصِرُ",
        "translation": "qısaltır",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَصِرُ الآنَ.",
            "translation": "O, indi qısaltır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْتَصِرْ",
        "translation": "qısalt!",
        "examples": [
          {
            "arabic": "اِخْتَصِرْ.",
            "translation": "qısalt!"
          }
        ]
      }
    }
  },
  {
    "id": 797,
    "arabic": "لَخَّصَ",
    "meaning": "xülasə etmək",
    "forms": {
      "past": {
        "arabic": "لَخَّصَ",
        "translation": "xülasə etdi",
        "examples": [
          {
            "arabic": "هُوَ لَخَّصَ أَمْسِ.",
            "translation": "O, dün xülasə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُلَخِّصُ",
        "translation": "xülasə edir",
        "examples": [
          {
            "arabic": "هُوَ يُلَخِّصُ الآنَ.",
            "translation": "O, indi xülasə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "لَخِّصْ",
        "translation": "xülasə et!",
        "examples": [
          {
            "arabic": "لَخِّصْ.",
            "translation": "xülasə et!"
          }
        ]
      }
    }
  },
  {
    "id": 798,
    "arabic": "فَصَّلَ",
    "meaning": "detallaşdırmaq",
    "forms": {
      "past": {
        "arabic": "فَصَّلَ",
        "translation": "detallaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ فَصَّلَ أَمْسِ.",
            "translation": "O, dün detallaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُفَصِّلُ",
        "translation": "detallaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُفَصِّلُ الآنَ.",
            "translation": "O, indi detallaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "فَصِّلْ",
        "translation": "detallaşdır!",
        "examples": [
          {
            "arabic": "فَصِّلْ.",
            "translation": "detallaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 799,
    "arabic": "صَنَّفَ",
    "meaning": "təsnif etmək",
    "forms": {
      "past": {
        "arabic": "صَنَّفَ",
        "translation": "təsnif etdi",
        "examples": [
          {
            "arabic": "هُوَ صَنَّفَ أَمْسِ.",
            "translation": "O, dün təsnif etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُصَنِّفُ",
        "translation": "təsnif edir",
        "examples": [
          {
            "arabic": "هُوَ يُصَنِّفُ الآنَ.",
            "translation": "O, indi təsnif etir."
          }
        ]
      },
      "imperative": {
        "arabic": "صَنِّفْ",
        "translation": "təsnif et!",
        "examples": [
          {
            "arabic": "صَنِّفْ.",
            "translation": "təsnif et!"
          }
        ]
      }
    }
  },
  {
    "id": 800,
    "arabic": "صَحَّحَ",
    "meaning": "düzəltmək",
    "forms": {
      "past": {
        "arabic": "صَحَّحَ",
        "translation": "düzəlttə",
        "examples": [
          {
            "arabic": "هُوَ صَحَّحَ أَمْسِ.",
            "translation": "O, dün düzəltdi."
          }
        ]
      },
      "present": {
        "arabic": "يُصَحِّحُ",
        "translation": "düzəltir",
        "examples": [
          {
            "arabic": "هُوَ يُصَحِّحُ الآنَ.",
            "translation": "O, indi düzəltir."
          }
        ]
      },
      "imperative": {
        "arabic": "صَحِّحْ",
        "translation": "düzəlt!",
        "examples": [
          {
            "arabic": "صَحِّحْ.",
            "translation": "düzəlt!"
          }
        ]
      }
    }
  },
  {
    "id": 801,
    "arabic": "خَطَّأَ",
    "meaning": "səhv saymaq",
    "forms": {
      "past": {
        "arabic": "خَطَّأَ",
        "translation": "səhv sayda",
        "examples": [
          {
            "arabic": "هُوَ خَطَّأَ أَمْسِ.",
            "translation": "O, dün səhv saydı."
          }
        ]
      },
      "present": {
        "arabic": "يُخَطِّئُ",
        "translation": "səhv sayır",
        "examples": [
          {
            "arabic": "هُوَ يُخَطِّئُ الآنَ.",
            "translation": "O, indi səhv sayır."
          }
        ]
      },
      "imperative": {
        "arabic": "خَطِّئْ",
        "translation": "səhv say!",
        "examples": [
          {
            "arabic": "خَطِّئْ.",
            "translation": "səhv say!"
          }
        ]
      }
    }
  },
  {
    "id": 802,
    "arabic": "أَخْطَأَ",
    "meaning": "səhv etmək",
    "forms": {
      "past": {
        "arabic": "أَخْطَأَ",
        "translation": "səhv etdi",
        "examples": [
          {
            "arabic": "هُوَ أَخْطَأَ أَمْسِ.",
            "translation": "O, dün səhv etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُخْطِئُ",
        "translation": "səhv edir",
        "examples": [
          {
            "arabic": "هُوَ يُخْطِئُ الآنَ.",
            "translation": "O, indi səhv etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَخْطِئْ",
        "translation": "səhv et!",
        "examples": [
          {
            "arabic": "أَخْطِئْ.",
            "translation": "səhv et!"
          }
        ]
      }
    }
  },
  {
    "id": 803,
    "arabic": "أَصَابَ",
    "meaning": "düz tapmaq",
    "forms": {
      "past": {
        "arabic": "أَصَابَ",
        "translation": "düz tapta",
        "examples": [
          {
            "arabic": "هُوَ أَصَابَ أَمْسِ.",
            "translation": "O, dün düz tapdı."
          }
        ]
      },
      "present": {
        "arabic": "يُصِيبُ",
        "translation": "düz tapır",
        "examples": [
          {
            "arabic": "هُوَ يُصِيبُ الآنَ.",
            "translation": "O, indi düz tapır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَصِبْ",
        "translation": "düz tap!",
        "examples": [
          {
            "arabic": "أَصِبْ.",
            "translation": "düz tap!"
          }
        ]
      }
    }
  },
  {
    "id": 804,
    "arabic": "أَخْطَرَ",
    "meaning": "xəbər vermək",
    "forms": {
      "past": {
        "arabic": "أَخْطَرَ",
        "translation": "xəbər verdi",
        "examples": [
          {
            "arabic": "هُوَ أَخْطَرَ أَمْسِ.",
            "translation": "O, dün xəbər verdi."
          }
        ]
      },
      "present": {
        "arabic": "يُخْطِرُ",
        "translation": "xəbər verir",
        "examples": [
          {
            "arabic": "هُوَ يُخْطِرُ الآنَ.",
            "translation": "O, indi xəbər verir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَخْطِرْ",
        "translation": "xəbər ver!",
        "examples": [
          {
            "arabic": "أَخْطِرْ.",
            "translation": "xəbər ver!"
          }
        ]
      }
    }
  },
  {
    "id": 805,
    "arabic": "أَلْغَى",
    "meaning": "ləğv etmək",
    "forms": {
      "past": {
        "arabic": "أَلْغَى",
        "translation": "ləğv etdi",
        "examples": [
          {
            "arabic": "هُوَ أَلْغَى أَمْسِ.",
            "translation": "O, dün ləğv etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُلْغِي",
        "translation": "ləğv edir",
        "examples": [
          {
            "arabic": "هُوَ يُلْغِي الآنَ.",
            "translation": "O, indi ləğv etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَلْغِ",
        "translation": "ləğv et!",
        "examples": [
          {
            "arabic": "أَلْغِ.",
            "translation": "ləğv et!"
          }
        ]
      }
    }
  },
  {
    "id": 806,
    "arabic": "أَجَّلَ",
    "meaning": "təxirə salmaq",
    "forms": {
      "past": {
        "arabic": "أَجَّلَ",
        "translation": "təxirə salda",
        "examples": [
          {
            "arabic": "هُوَ أَجَّلَ أَمْسِ.",
            "translation": "O, dün təxirə saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَجِّلُ",
        "translation": "təxirə salır",
        "examples": [
          {
            "arabic": "هُوَ يُؤَجِّلُ الآنَ.",
            "translation": "O, indi təxirə salır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَجِّلْ",
        "translation": "təxirə sal!",
        "examples": [
          {
            "arabic": "أَجِّلْ.",
            "translation": "təxirə sal!"
          }
        ]
      }
    }
  },
  {
    "id": 807,
    "arabic": "سَرَّ",
    "meaning": "sevindirmək",
    "forms": {
      "past": {
        "arabic": "سَرَّ",
        "translation": "sevindirdi",
        "examples": [
          {
            "arabic": "هُوَ سَرَّ أَمْسِ.",
            "translation": "O, dün sevindirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسُرُّ",
        "translation": "sevindirir",
        "examples": [
          {
            "arabic": "هُوَ يَسُرُّ الآنَ.",
            "translation": "O, indi sevindirir."
          }
        ]
      },
      "imperative": {
        "arabic": "سُرَّ",
        "translation": "sevindir!",
        "examples": [
          {
            "arabic": "سُرَّ.",
            "translation": "sevindir!"
          }
        ]
      }
    }
  },
  {
    "id": 808,
    "arabic": "أَفْرَحَ",
    "meaning": "sevindirmək",
    "forms": {
      "past": {
        "arabic": "أَفْرَحَ",
        "translation": "sevindirdi",
        "examples": [
          {
            "arabic": "هُوَ أَفْرَحَ أَمْسِ.",
            "translation": "O, dün sevindirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُفْرِحُ",
        "translation": "sevindirir",
        "examples": [
          {
            "arabic": "هُوَ يُفْرِحُ الآنَ.",
            "translation": "O, indi sevindirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفْرِحْ",
        "translation": "sevindir!",
        "examples": [
          {
            "arabic": "أَفْرِحْ.",
            "translation": "sevindir!"
          }
        ]
      }
    }
  },
  {
    "id": 809,
    "arabic": "أَسَاءَ",
    "meaning": "pislik etmək",
    "forms": {
      "past": {
        "arabic": "أَسَاءَ",
        "translation": "pislik etdi",
        "examples": [
          {
            "arabic": "هُوَ أَسَاءَ أَمْسِ.",
            "translation": "O, dün pislik etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسِيءُ",
        "translation": "pislik edir",
        "examples": [
          {
            "arabic": "هُوَ يُسِيءُ الآنَ.",
            "translation": "O, indi pislik etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَسِئْ",
        "translation": "pislik et!",
        "examples": [
          {
            "arabic": "أَسِئْ.",
            "translation": "pislik et!"
          }
        ]
      }
    }
  },
  {
    "id": 810,
    "arabic": "أَهَانَ",
    "meaning": "təhqir etmək",
    "forms": {
      "past": {
        "arabic": "أَهَانَ",
        "translation": "təhqir etdi",
        "examples": [
          {
            "arabic": "هُوَ أَهَانَ أَمْسِ.",
            "translation": "O, dün təhqir etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُهِينُ",
        "translation": "təhqir edir",
        "examples": [
          {
            "arabic": "هُوَ يُهِينُ الآنَ.",
            "translation": "O, indi təhqir etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَهِنْ",
        "translation": "təhqir et!",
        "examples": [
          {
            "arabic": "أَهِنْ.",
            "translation": "təhqir et!"
          }
        ]
      }
    }
  },
  {
    "id": 811,
    "arabic": "اِحْتَقَرَ",
    "meaning": "xor görmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَقَرَ",
        "translation": "xor gördü",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَقَرَ أَمْسِ.",
            "translation": "O, dün xor gördü."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَقِرُ",
        "translation": "xor görür",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَقِرُ الآنَ.",
            "translation": "O, indi xor görür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَقِرْ",
        "translation": "xor gör!",
        "examples": [
          {
            "arabic": "اِحْتَقِرْ.",
            "translation": "xor gör!"
          }
        ]
      }
    }
  },
  {
    "id": 812,
    "arabic": "اِسْتَوْدَعَ",
    "meaning": "əmanət etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَوْدَعَ",
        "translation": "əmanət etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَوْدَعَ أَمْسِ.",
            "translation": "O, dün əmanət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَوْدِعُ",
        "translation": "əmanət edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَوْدِعُ الآنَ.",
            "translation": "O, indi əmanət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَوْدِعْ",
        "translation": "əmanət et!",
        "examples": [
          {
            "arabic": "اِسْتَوْدِعْ.",
            "translation": "əmanət et!"
          }
        ]
      }
    }
  },
  {
    "id": 813,
    "arabic": "وَدَعَ",
    "meaning": "yola salmaq",
    "forms": {
      "past": {
        "arabic": "وَدَعَ",
        "translation": "yola saldı",
        "examples": [
          {
            "arabic": "هُوَ وَدَعَ أَمْسِ.",
            "translation": "O, dün yola saldı."
          }
        ]
      },
      "present": {
        "arabic": "يَوْدَعُ",
        "translation": "yola salır",
        "examples": [
          {
            "arabic": "هُوَ يَوْدَعُ الآنَ.",
            "translation": "O, indi yola salır."
          }
        ]
      },
      "imperative": {
        "arabic": "وَدِّعْ",
        "translation": "yola sal!",
        "examples": [
          {
            "arabic": "وَدِّعْ.",
            "translation": "yola sal!"
          }
        ]
      }
    }
  },
  {
    "id": 814,
    "arabic": "فَرِغَ",
    "meaning": "boşalmaq",
    "forms": {
      "past": {
        "arabic": "فَرِغَ",
        "translation": "boşalda",
        "examples": [
          {
            "arabic": "هُوَ فَرِغَ أَمْسِ.",
            "translation": "O, dün boşaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْرُغُ",
        "translation": "boşalır",
        "examples": [
          {
            "arabic": "هُوَ يَفْرُغُ الآنَ.",
            "translation": "O, indi boşalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُفْرُغْ",
        "translation": "boşal!",
        "examples": [
          {
            "arabic": "اُفْرُغْ.",
            "translation": "boşal!"
          }
        ]
      }
    }
  },
  {
    "id": 815,
    "arabic": "اِمْتَلَأَ",
    "meaning": "dolmaq",
    "forms": {
      "past": {
        "arabic": "اِمْتَلَأَ",
        "translation": "doldu",
        "examples": [
          {
            "arabic": "هُوَ اِمْتَلَأَ أَمْسِ.",
            "translation": "O, dün doldu."
          }
        ]
      },
      "present": {
        "arabic": "يَمْتَلِئُ",
        "translation": "dolur",
        "examples": [
          {
            "arabic": "هُوَ يَمْتَلِئُ الآنَ.",
            "translation": "O, indi dolur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْتَلِئْ",
        "translation": "dol!",
        "examples": [
          {
            "arabic": "اِمْتَلِئْ.",
            "translation": "dol!"
          }
        ]
      }
    }
  },
  {
    "id": 816,
    "arabic": "اِمْتَزَجَ",
    "meaning": "qarışmaq",
    "forms": {
      "past": {
        "arabic": "اِمْتَزَجَ",
        "translation": "qarıştı",
        "examples": [
          {
            "arabic": "هُوَ اِمْتَزَجَ أَمْسِ.",
            "translation": "O, dün qarışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَمْتَزِجُ",
        "translation": "qarışır",
        "examples": [
          {
            "arabic": "هُوَ يَمْتَزِجُ الآنَ.",
            "translation": "O, indi qarışır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْتَزِجْ",
        "translation": "qarış!",
        "examples": [
          {
            "arabic": "اِمْتَزِجْ.",
            "translation": "qarış!"
          }
        ]
      }
    }
  },
  {
    "id": 817,
    "arabic": "مَزَجَ",
    "meaning": "qarışdırmaq",
    "forms": {
      "past": {
        "arabic": "مَزَجَ",
        "translation": "qarışdırdı",
        "examples": [
          {
            "arabic": "هُوَ مَزَجَ أَمْسِ.",
            "translation": "O, dün qarışdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَمْزُجُ",
        "translation": "qarışdırır",
        "examples": [
          {
            "arabic": "هُوَ يَمْزُجُ الآنَ.",
            "translation": "O, indi qarışdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْزُجْ",
        "translation": "qarışdır!",
        "examples": [
          {
            "arabic": "اِمْزُجْ.",
            "translation": "qarışdır!"
          }
        ]
      }
    }
  },
  {
    "id": 818,
    "arabic": "خَلَطَ",
    "meaning": "qarışdırmaq",
    "forms": {
      "past": {
        "arabic": "خَلَطَ",
        "translation": "qarışdırdı",
        "examples": [
          {
            "arabic": "هُوَ خَلَطَ أَمْسِ.",
            "translation": "O, dün qarışdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْلِطُ",
        "translation": "qarışdırır",
        "examples": [
          {
            "arabic": "هُوَ يَخْلِطُ الآنَ.",
            "translation": "O, indi qarışdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْلِطْ",
        "translation": "qarışdır!",
        "examples": [
          {
            "arabic": "اِخْلِطْ.",
            "translation": "qarışdır!"
          }
        ]
      }
    }
  },
  {
    "id": 819,
    "arabic": "اِنْفَصَلَ",
    "meaning": "ayrılmaq",
    "forms": {
      "past": {
        "arabic": "اِنْفَصَلَ",
        "translation": "ayrıldı",
        "examples": [
          {
            "arabic": "هُوَ اِنْفَصَلَ أَمْسِ.",
            "translation": "O, dün ayrıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْفَصِلُ",
        "translation": "ayrılır",
        "examples": [
          {
            "arabic": "هُوَ يَنْفَصِلُ الآنَ.",
            "translation": "O, indi ayrılır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْفَصِلْ",
        "translation": "ayrıl!",
        "examples": [
          {
            "arabic": "اِنْفَصِلْ.",
            "translation": "ayrıl!"
          }
        ]
      }
    }
  },
  {
    "id": 820,
    "arabic": "ضَمَّ",
    "meaning": "birləşdirmək",
    "forms": {
      "past": {
        "arabic": "ضَمَّ",
        "translation": "birləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ ضَمَّ أَمْسِ.",
            "translation": "O, dün birləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَضُمُّ",
        "translation": "birləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يَضُمُّ الآنَ.",
            "translation": "O, indi birləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "ضُمَّ",
        "translation": "birləşdir!",
        "examples": [
          {
            "arabic": "ضُمَّ.",
            "translation": "birləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 821,
    "arabic": "تَفَرَّقَ",
    "meaning": "dağılmaq",
    "forms": {
      "past": {
        "arabic": "تَفَرَّقَ",
        "translation": "dağıldı",
        "examples": [
          {
            "arabic": "هُوَ تَفَرَّقَ أَمْسِ.",
            "translation": "O, dün dağıldı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَرَّقُ",
        "translation": "dağılır",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَرَّقُ الآنَ.",
            "translation": "O, indi dağılır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَفَرَّقْ",
        "translation": "dağıl!",
        "examples": [
          {
            "arabic": "تَفَرَّقْ.",
            "translation": "dağıl!"
          }
        ]
      }
    }
  },
  {
    "id": 822,
    "arabic": "تَشَكَّلَ",
    "meaning": "formalaşmaq",
    "forms": {
      "past": {
        "arabic": "تَشَكَّلَ",
        "translation": "formalaşta",
        "examples": [
          {
            "arabic": "هُوَ تَشَكَّلَ أَمْسِ.",
            "translation": "O, dün formalaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَشَكَّلُ",
        "translation": "formalaşır",
        "examples": [
          {
            "arabic": "هُوَ يَتَشَكَّلُ الآنَ.",
            "translation": "O, indi formalaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَشَكَّلْ",
        "translation": "formalaş!",
        "examples": [
          {
            "arabic": "تَشَكَّلْ.",
            "translation": "formalaş!"
          }
        ]
      }
    }
  },
  {
    "id": 823,
    "arabic": "شَكَّلَ",
    "meaning": "formalaşdırmaq",
    "forms": {
      "past": {
        "arabic": "شَكَّلَ",
        "translation": "formalaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ شَكَّلَ أَمْسِ.",
            "translation": "O, dün formalaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُشَكِّلُ",
        "translation": "formalaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُشَكِّلُ الآنَ.",
            "translation": "O, indi formalaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "شَكِّلْ",
        "translation": "formalaşdır!",
        "examples": [
          {
            "arabic": "شَكِّلْ.",
            "translation": "formalaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 824,
    "arabic": "كَشَّفَ",
    "meaning": "aşkara çıxarmaq",
    "forms": {
      "past": {
        "arabic": "كَشَّفَ",
        "translation": "aşkara çıxarda",
        "examples": [
          {
            "arabic": "هُوَ كَشَّفَ أَمْسِ.",
            "translation": "O, dün aşkara çıxardı."
          }
        ]
      },
      "present": {
        "arabic": "يُكَشِّفُ",
        "translation": "aşkara çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يُكَشِّفُ الآنَ.",
            "translation": "O, indi aşkara çıxarır."
          }
        ]
      },
      "imperative": {
        "arabic": "كَشِّفْ",
        "translation": "aşkara çıxar!",
        "examples": [
          {
            "arabic": "كَشِّفْ.",
            "translation": "aşkara çıxar!"
          }
        ]
      }
    }
  },
  {
    "id": 825,
    "arabic": "غَطَّى",
    "meaning": "örtmək",
    "forms": {
      "past": {
        "arabic": "غَطَّى",
        "translation": "örttü",
        "examples": [
          {
            "arabic": "هُوَ غَطَّى أَمْسِ.",
            "translation": "O, dün örtdü."
          }
        ]
      },
      "present": {
        "arabic": "يُغَطِّي",
        "translation": "örtür",
        "examples": [
          {
            "arabic": "هُوَ يُغَطِّي الآنَ.",
            "translation": "O, indi örtür."
          }
        ]
      },
      "imperative": {
        "arabic": "غَطِّ",
        "translation": "ört!",
        "examples": [
          {
            "arabic": "غَطِّ.",
            "translation": "ört!"
          }
        ]
      }
    }
  },
  {
    "id": 826,
    "arabic": "اِنْكَسَرَ",
    "meaning": "sınmaq",
    "forms": {
      "past": {
        "arabic": "اِنْكَسَرَ",
        "translation": "sındı",
        "examples": [
          {
            "arabic": "هُوَ اِنْكَسَرَ أَمْسِ.",
            "translation": "O, dün sındı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْكَسِرُ",
        "translation": "sınır",
        "examples": [
          {
            "arabic": "هُوَ يَنْكَسِرُ الآنَ.",
            "translation": "O, indi sınır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْكَسِرْ",
        "translation": "sın!",
        "examples": [
          {
            "arabic": "اِنْكَسِرْ.",
            "translation": "sın!"
          }
        ]
      }
    }
  },
  {
    "id": 827,
    "arabic": "كَسَّرَ",
    "meaning": "parçalamaq",
    "forms": {
      "past": {
        "arabic": "كَسَّرَ",
        "translation": "parçalada",
        "examples": [
          {
            "arabic": "هُوَ كَسَّرَ أَمْسِ.",
            "translation": "O, dün parçaladı."
          }
        ]
      },
      "present": {
        "arabic": "يُكَسِّرُ",
        "translation": "parçalaır",
        "examples": [
          {
            "arabic": "هُوَ يُكَسِّرُ الآنَ.",
            "translation": "O, indi parçalayır."
          }
        ]
      },
      "imperative": {
        "arabic": "كَسِّرْ",
        "translation": "parçala!",
        "examples": [
          {
            "arabic": "كَسِّرْ.",
            "translation": "parçala!"
          }
        ]
      }
    }
  },
  {
    "id": 828,
    "arabic": "قَطَّعَ",
    "meaning": "doğramaq",
    "forms": {
      "past": {
        "arabic": "قَطَّعَ",
        "translation": "doğrada",
        "examples": [
          {
            "arabic": "هُوَ قَطَّعَ أَمْسِ.",
            "translation": "O, dün doğradı."
          }
        ]
      },
      "present": {
        "arabic": "يُقَطِّعُ",
        "translation": "doğraır",
        "examples": [
          {
            "arabic": "هُوَ يُقَطِّعُ الآنَ.",
            "translation": "O, indi doğrayır."
          }
        ]
      },
      "imperative": {
        "arabic": "قَطِّعْ",
        "translation": "doğra!",
        "examples": [
          {
            "arabic": "قَطِّعْ.",
            "translation": "doğra!"
          }
        ]
      }
    }
  },
  {
    "id": 829,
    "arabic": "أَقْصَدَ",
    "meaning": "qənaət etdirmək",
    "forms": {
      "past": {
        "arabic": "أَقْصَدَ",
        "translation": "qənaət etdirdi",
        "examples": [
          {
            "arabic": "هُوَ أَقْصَدَ أَمْسِ.",
            "translation": "O, dün qənaət etdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقْصِدُ",
        "translation": "qənaət etdirir",
        "examples": [
          {
            "arabic": "هُوَ يُقْصِدُ الآنَ.",
            "translation": "O, indi qənaət etdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَقْصِدْ",
        "translation": "qənaət etdir!",
        "examples": [
          {
            "arabic": "أَقْصِدْ.",
            "translation": "qənaət etdir!"
          }
        ]
      }
    }
  },
  {
    "id": 830,
    "arabic": "اِسْتَقْصَى",
    "meaning": "araşdırmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقْصَى",
        "translation": "araşdırdı",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقْصَى أَمْسِ.",
            "translation": "O, dün araşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقْصِي",
        "translation": "araşdırır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقْصِي الآنَ.",
            "translation": "O, indi araşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقْصِ",
        "translation": "araşdır!",
        "examples": [
          {
            "arabic": "اِسْتَقْصِ.",
            "translation": "araşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 831,
    "arabic": "تَثَبَّتَ",
    "meaning": "dəqiqləşdirmək",
    "forms": {
      "past": {
        "arabic": "تَثَبَّتَ",
        "translation": "dəqiqləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ تَثَبَّتَ أَمْسِ.",
            "translation": "O, dün dəqiqləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَثَبَّتُ",
        "translation": "dəqiqləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يَتَثَبَّتُ الآنَ.",
            "translation": "O, indi dəqiqləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَثَبَّتْ",
        "translation": "dəqiqləşdir!",
        "examples": [
          {
            "arabic": "تَثَبَّتْ.",
            "translation": "dəqiqləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 832,
    "arabic": "ثَبَّتَ",
    "meaning": "sabitləşdirmək",
    "forms": {
      "past": {
        "arabic": "ثَبَّتَ",
        "translation": "sabitləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ ثَبَّتَ أَمْسِ.",
            "translation": "O, dün sabitləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُثَبِّتُ",
        "translation": "sabitləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يُثَبِّتُ الآنَ.",
            "translation": "O, indi sabitləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "ثَبِّتْ",
        "translation": "sabitləşdir!",
        "examples": [
          {
            "arabic": "ثَبِّتْ.",
            "translation": "sabitləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 833,
    "arabic": "اِقْتَرَنَ",
    "meaning": "birləşmək",
    "forms": {
      "past": {
        "arabic": "اِقْتَرَنَ",
        "translation": "birləştə",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَرَنَ أَمْسِ.",
            "translation": "O, dün birləşdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَرِنُ",
        "translation": "birləşir",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَرِنُ الآنَ.",
            "translation": "O, indi birləşir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَرِنْ",
        "translation": "birləş!",
        "examples": [
          {
            "arabic": "اِقْتَرِنْ.",
            "translation": "birləş!"
          }
        ]
      }
    }
  },
  {
    "id": 834,
    "arabic": "اِرْتَبَطَ",
    "meaning": "bağlanmaq",
    "forms": {
      "past": {
        "arabic": "اِرْتَبَطَ",
        "translation": "bağlanda",
        "examples": [
          {
            "arabic": "هُوَ اِرْتَبَطَ أَمْسِ.",
            "translation": "O, dün bağlandı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْتَبِطُ",
        "translation": "bağlanır",
        "examples": [
          {
            "arabic": "هُوَ يَرْتَبِطُ الآنَ.",
            "translation": "O, indi bağlanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْتَبِطْ",
        "translation": "bağlan!",
        "examples": [
          {
            "arabic": "اِرْتَبِطْ.",
            "translation": "bağlan!"
          }
        ]
      }
    }
  },
  {
    "id": 835,
    "arabic": "اِسْتَشْعَرَ",
    "meaning": "hiss etmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَشْعَرَ",
        "translation": "hiss etdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَشْعَرَ أَمْسِ.",
            "translation": "O, dün hiss etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَشْعِرُ",
        "translation": "hiss edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَشْعِرُ الآنَ.",
            "translation": "O, indi hiss etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَشْعِرْ",
        "translation": "hiss et!",
        "examples": [
          {
            "arabic": "اِسْتَشْعِرْ.",
            "translation": "hiss et!"
          }
        ]
      }
    }
  },
  {
    "id": 836,
    "arabic": "شَعَرَ",
    "meaning": "hiss etmək",
    "forms": {
      "past": {
        "arabic": "شَعَرَ",
        "translation": "hiss etdi",
        "examples": [
          {
            "arabic": "هُوَ شَعَرَ أَمْسِ.",
            "translation": "O, dün hiss etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْعُرُ",
        "translation": "hiss edir",
        "examples": [
          {
            "arabic": "هُوَ يَشْعُرُ الآنَ.",
            "translation": "O, indi hiss etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْعُرْ",
        "translation": "hiss et!",
        "examples": [
          {
            "arabic": "اِشْعُرْ.",
            "translation": "hiss et!"
          }
        ]
      }
    }
  },
  {
    "id": 837,
    "arabic": "أَحَسَّ",
    "meaning": "hiss etmək",
    "forms": {
      "past": {
        "arabic": "أَحَسَّ",
        "translation": "hiss etdi",
        "examples": [
          {
            "arabic": "هُوَ أَحَسَّ أَمْسِ.",
            "translation": "O, dün hiss etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحِسُّ",
        "translation": "hiss edir",
        "examples": [
          {
            "arabic": "هُوَ يُحِسُّ الآنَ.",
            "translation": "O, indi hiss etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَحِسَّ",
        "translation": "hiss et!",
        "examples": [
          {
            "arabic": "أَحِسَّ.",
            "translation": "hiss et!"
          }
        ]
      }
    }
  },
  {
    "id": 838,
    "arabic": "لَمَحَ",
    "meaning": "sezmək, görmək",
    "forms": {
      "past": {
        "arabic": "لَمَحَ",
        "translation": "sezmək, gördü",
        "examples": [
          {
            "arabic": "هُوَ لَمَحَ أَمْسِ.",
            "translation": "O, dün sezməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَلْمَحُ",
        "translation": "sezmək, görür",
        "examples": [
          {
            "arabic": "هُوَ يَلْمَحُ الآنَ.",
            "translation": "O, indi sezməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْمَحْ",
        "translation": "sezmək, gör!",
        "examples": [
          {
            "arabic": "اِلْمَحْ.",
            "translation": "sezmək!"
          }
        ]
      }
    }
  },
  {
    "id": 839,
    "arabic": "رَأَفَ",
    "meaning": "rəhm etmək",
    "forms": {
      "past": {
        "arabic": "رَأَفَ",
        "translation": "rəhm etdi",
        "examples": [
          {
            "arabic": "هُوَ رَأَفَ أَمْسِ.",
            "translation": "O, dün rəhm etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْأَفُ",
        "translation": "rəhm edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْأَفُ الآنَ.",
            "translation": "O, indi rəhm etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْأَفْ",
        "translation": "rəhm et!",
        "examples": [
          {
            "arabic": "اِرْأَفْ.",
            "translation": "rəhm et!"
          }
        ]
      }
    }
  },
  {
    "id": 840,
    "arabic": "زَهِدَ",
    "meaning": "zöhd etmək",
    "forms": {
      "past": {
        "arabic": "زَهِدَ",
        "translation": "zöhd etdi",
        "examples": [
          {
            "arabic": "هُوَ زَهِدَ أَمْسِ.",
            "translation": "O, dün zöhd etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَزْهَدُ",
        "translation": "zöhd edir",
        "examples": [
          {
            "arabic": "هُوَ يَزْهَدُ الآنَ.",
            "translation": "O, indi zöhd etür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِزْهَدْ",
        "translation": "zöhd et!",
        "examples": [
          {
            "arabic": "اِزْهَدْ.",
            "translation": "zöhd et!"
          }
        ]
      }
    }
  },
  {
    "id": 841,
    "arabic": "طَمِعَ",
    "meaning": "tamah etmək",
    "forms": {
      "past": {
        "arabic": "طَمِعَ",
        "translation": "tamah etdi",
        "examples": [
          {
            "arabic": "هُوَ طَمِعَ أَمْسِ.",
            "translation": "O, dün tamah etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَطْمَعُ",
        "translation": "tamah edir",
        "examples": [
          {
            "arabic": "هُوَ يَطْمَعُ الآنَ.",
            "translation": "O, indi tamah etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْمَعْ",
        "translation": "tamah et!",
        "examples": [
          {
            "arabic": "اِطْمَعْ.",
            "translation": "tamah et!"
          }
        ]
      }
    }
  },
  {
    "id": 842,
    "arabic": "غَبَطَ",
    "meaning": "qibtə etmək",
    "forms": {
      "past": {
        "arabic": "غَبَطَ",
        "translation": "qibtə etdi",
        "examples": [
          {
            "arabic": "هُوَ غَبَطَ أَمْسِ.",
            "translation": "O, dün qibtə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَغْبِطُ",
        "translation": "qibtə edir",
        "examples": [
          {
            "arabic": "هُوَ يَغْبِطُ الآنَ.",
            "translation": "O, indi qibtə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِغْبِطْ",
        "translation": "qibtə et!",
        "examples": [
          {
            "arabic": "اِغْبِطْ.",
            "translation": "qibtə et!"
          }
        ]
      }
    }
  },
  {
    "id": 843,
    "arabic": "رَهِبَ",
    "meaning": "qorxmaq",
    "forms": {
      "past": {
        "arabic": "رَهِبَ",
        "translation": "qorxtu",
        "examples": [
          {
            "arabic": "هُوَ رَهِبَ أَمْسِ.",
            "translation": "O, dün qorxdu."
          }
        ]
      },
      "present": {
        "arabic": "يَرْهَبُ",
        "translation": "qorxur",
        "examples": [
          {
            "arabic": "هُوَ يَرْهَبُ الآنَ.",
            "translation": "O, indi qorxur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْهَبْ",
        "translation": "qorx!",
        "examples": [
          {
            "arabic": "اِرْهَبْ.",
            "translation": "qorx!"
          }
        ]
      }
    }
  },
  {
    "id": 844,
    "arabic": "أَجَلَّ",
    "meaning": "uca tutmaq",
    "forms": {
      "past": {
        "arabic": "أَجَلَّ",
        "translation": "uca tuttu",
        "examples": [
          {
            "arabic": "هُوَ أَجَلَّ أَمْسِ.",
            "translation": "O, dün uca tutdu."
          }
        ]
      },
      "present": {
        "arabic": "يُجِلُّ",
        "translation": "uca tutur",
        "examples": [
          {
            "arabic": "هُوَ يُجِلُّ الآنَ.",
            "translation": "O, indi uca tutur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَجْلِلْ",
        "translation": "uca tut!",
        "examples": [
          {
            "arabic": "أَجْلِلْ.",
            "translation": "uca tut!"
          }
        ]
      }
    }
  },
  {
    "id": 845,
    "arabic": "عَظَّمَ",
    "meaning": "uca tutmaq",
    "forms": {
      "past": {
        "arabic": "عَظَّمَ",
        "translation": "uca tuttu",
        "examples": [
          {
            "arabic": "هُوَ عَظَّمَ أَمْسِ.",
            "translation": "O, dün uca tutdu."
          }
        ]
      },
      "present": {
        "arabic": "يُعَظِّمُ",
        "translation": "uca tutur",
        "examples": [
          {
            "arabic": "هُوَ يُعَظِّمُ الآنَ.",
            "translation": "O, indi uca tutur."
          }
        ]
      },
      "imperative": {
        "arabic": "عَظِّمْ",
        "translation": "uca tut!",
        "examples": [
          {
            "arabic": "عَظِّمْ.",
            "translation": "uca tut!"
          }
        ]
      }
    }
  },
  {
    "id": 846,
    "arabic": "قَدَّسَ",
    "meaning": "müqəddəs saymaq",
    "forms": {
      "past": {
        "arabic": "قَدَّسَ",
        "translation": "müqəddəs sayda",
        "examples": [
          {
            "arabic": "هُوَ قَدَّسَ أَمْسِ.",
            "translation": "O, dün müqəddəs saydı."
          }
        ]
      },
      "present": {
        "arabic": "يُقَدِّسُ",
        "translation": "müqəddəs sayır",
        "examples": [
          {
            "arabic": "هُوَ يُقَدِّسُ الآنَ.",
            "translation": "O, indi müqəddəs sayır."
          }
        ]
      },
      "imperative": {
        "arabic": "قَدِّسْ",
        "translation": "müqəddəs say!",
        "examples": [
          {
            "arabic": "قَدِّسْ.",
            "translation": "müqəddəs say!"
          }
        ]
      }
    }
  },
  {
    "id": 847,
    "arabic": "عَبَدَ",
    "meaning": "ibadət etmək",
    "forms": {
      "past": {
        "arabic": "عَبَدَ",
        "translation": "ibadət etdi",
        "examples": [
          {
            "arabic": "هُوَ عَبَدَ أَمْسِ.",
            "translation": "O, dün ibadət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْبُدُ",
        "translation": "ibadət edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْبُدُ الآنَ.",
            "translation": "O, indi ibadət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُعْبُدْ",
        "translation": "ibadət et!",
        "examples": [
          {
            "arabic": "اُعْبُدْ.",
            "translation": "ibadət et!"
          }
        ]
      }
    }
  },
  {
    "id": 848,
    "arabic": "سَبَّحَ",
    "meaning": "təsbih etmək",
    "forms": {
      "past": {
        "arabic": "سَبَّحَ",
        "translation": "təsbih etdi",
        "examples": [
          {
            "arabic": "هُوَ سَبَّحَ أَمْسِ.",
            "translation": "O, dün təsbih etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَبِّحُ",
        "translation": "təsbih edir",
        "examples": [
          {
            "arabic": "هُوَ يُسَبِّحُ الآنَ.",
            "translation": "O, indi təsbih etir."
          }
        ]
      },
      "imperative": {
        "arabic": "سَبِّحْ",
        "translation": "təsbih et!",
        "examples": [
          {
            "arabic": "سَبِّحْ.",
            "translation": "təsbih et!"
          }
        ]
      }
    }
  },
  {
    "id": 849,
    "arabic": "تَلَا",
    "meaning": "tilavət etmək",
    "forms": {
      "past": {
        "arabic": "تَلَا",
        "translation": "tilavət etdi",
        "examples": [
          {
            "arabic": "هُوَ تَلَا أَمْسِ.",
            "translation": "O, dün tilavət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتْلُو",
        "translation": "tilavət edir",
        "examples": [
          {
            "arabic": "هُوَ يَتْلُو الآنَ.",
            "translation": "O, indi tilavət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُتْلُ",
        "translation": "tilavət et!",
        "examples": [
          {
            "arabic": "اُتْلُ.",
            "translation": "tilavət et!"
          }
        ]
      }
    }
  },
  {
    "id": 850,
    "arabic": "رَتَّلَ",
    "meaning": "tərtil ilə oxumaq",
    "forms": {
      "past": {
        "arabic": "رَتَّلَ",
        "translation": "tərtil ilə oxudu",
        "examples": [
          {
            "arabic": "هُوَ رَتَّلَ أَمْسِ.",
            "translation": "O, dün tərtil ilə oxudu."
          }
        ]
      },
      "present": {
        "arabic": "يُرَتِّلُ",
        "translation": "tərtil ilə oxuur",
        "examples": [
          {
            "arabic": "هُوَ يُرَتِّلُ الآنَ.",
            "translation": "O, indi tərtil ilə oxuyur."
          }
        ]
      },
      "imperative": {
        "arabic": "رَتِّلْ",
        "translation": "tərtil ilə oxu!",
        "examples": [
          {
            "arabic": "رَتِّلْ.",
            "translation": "tərtil ilə oxu!"
          }
        ]
      }
    }
  },
  {
    "id": 851,
    "arabic": "هَجَمَ",
    "meaning": "hücum etmək",
    "forms": {
      "past": {
        "arabic": "هَجَمَ",
        "translation": "hücum etdi",
        "examples": [
          {
            "arabic": "هُوَ هَجَمَ أَمْسِ.",
            "translation": "O, dünən hücum etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَهْجُمُ",
        "translation": "hücum edir",
        "examples": [
          {
            "arabic": "هُوَ يَهْجُمُ الآنَ.",
            "translation": "O, indi hücum edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُهْجُمْ",
        "translation": "hücum et!",
        "examples": [
          {
            "arabic": "اُهْجُمْ.",
            "translation": "hücum et!"
          }
        ]
      }
    }
  },
  {
    "id": 852,
    "arabic": "بَرَدَ",
    "meaning": "soyumaq",
    "forms": {
      "past": {
        "arabic": "بَرَدَ",
        "translation": "soyudu",
        "examples": [
          {
            "arabic": "هُوَ بَرَدَ أَمْسِ.",
            "translation": "O, dünən soyudu."
          }
        ]
      },
      "present": {
        "arabic": "يَبْرُدُ",
        "translation": "soyuyur",
        "examples": [
          {
            "arabic": "هُوَ يَبْرُدُ الآنَ.",
            "translation": "O, indi soyuyur."
          }
        ]
      },
      "imperative": {
        "arabic": "اُبْرُدْ",
        "translation": "soyuy!",
        "examples": [
          {
            "arabic": "اُبْرُدْ.",
            "translation": "soyuy!"
          }
        ]
      }
    }
  },
  {
    "id": 853,
    "arabic": "تَعِبَ",
    "meaning": "yorulmaq",
    "forms": {
      "past": {
        "arabic": "تَعِبَ",
        "translation": "yoruldu",
        "examples": [
          {
            "arabic": "هُوَ تَعِبَ أَمْسِ.",
            "translation": "O, dünən yoruldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتْعَبُ",
        "translation": "yorulur",
        "examples": [
          {
            "arabic": "هُوَ يَتْعَبُ الآنَ.",
            "translation": "O, indi yorulur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتْعَبْ",
        "translation": "yorul!",
        "examples": [
          {
            "arabic": "اِتْعَبْ.",
            "translation": "yorul!"
          }
        ]
      }
    }
  },
  {
    "id": 854,
    "arabic": "جَادَلَ",
    "meaning": "mübahisə etmək",
    "forms": {
      "past": {
        "arabic": "جَادَلَ",
        "translation": "mübahisə etdi",
        "examples": [
          {
            "arabic": "هُوَ جَادَلَ أَمْسِ.",
            "translation": "O, dün mübahisə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُجَادِلُ",
        "translation": "mübahisə edir",
        "examples": [
          {
            "arabic": "هُوَ يُجَادِلُ الآنَ.",
            "translation": "O, indi mübahisə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "جَادِلْ",
        "translation": "mübahisə et!",
        "examples": [
          {
            "arabic": "جَادِلْ.",
            "translation": "mübahisə et!"
          }
        ]
      }
    }
  },
  {
    "id": 855,
    "arabic": "حَاوَرَ",
    "meaning": "dialoq aparmaq",
    "forms": {
      "past": {
        "arabic": "حَاوَرَ",
        "translation": "dialoq aparda",
        "examples": [
          {
            "arabic": "هُوَ حَاوَرَ أَمْسِ.",
            "translation": "O, dün dialoq apardı."
          }
        ]
      },
      "present": {
        "arabic": "يُحَاوِرُ",
        "translation": "dialoq aparır",
        "examples": [
          {
            "arabic": "هُوَ يُحَاوِرُ الآنَ.",
            "translation": "O, indi dialoq aparır."
          }
        ]
      },
      "imperative": {
        "arabic": "حَاوِرْ",
        "translation": "dialoq apar!",
        "examples": [
          {
            "arabic": "حَاوِرْ.",
            "translation": "dialoq apar!"
          }
        ]
      }
    }
  },
  {
    "id": 856,
    "arabic": "اِسْتَعْجَلَ",
    "meaning": "tələsmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَعْجَلَ",
        "translation": "tələstə",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَعْجَلَ أَمْسِ.",
            "translation": "O, dün tələsdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَعْجِلُ",
        "translation": "tələsir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَعْجِلُ الآنَ.",
            "translation": "O, indi tələsir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَعْجِلْ",
        "translation": "tələs!",
        "examples": [
          {
            "arabic": "اِسْتَعْجِلْ.",
            "translation": "tələs!"
          }
        ]
      }
    }
  },
  {
    "id": 857,
    "arabic": "عَجِلَ",
    "meaning": "tələsmək",
    "forms": {
      "past": {
        "arabic": "عَجِلَ",
        "translation": "tələstə",
        "examples": [
          {
            "arabic": "هُوَ عَجِلَ أَمْسِ.",
            "translation": "O, dün tələsdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْجَلُ",
        "translation": "tələsir",
        "examples": [
          {
            "arabic": "هُوَ يَعْجَلُ الآنَ.",
            "translation": "O, indi tələsir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْجَلْ",
        "translation": "tələs!",
        "examples": [
          {
            "arabic": "اِعْجَلْ.",
            "translation": "tələs!"
          }
        ]
      }
    }
  },
  {
    "id": 858,
    "arabic": "تَمَهَّلَ",
    "meaning": "tələsməmək",
    "forms": {
      "past": {
        "arabic": "تَمَهَّلَ",
        "translation": "tələsmədi",
        "examples": [
          {
            "arabic": "هُوَ تَمَهَّلَ أَمْسِ.",
            "translation": "O, dün tələsmədi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَمَهَّلُ",
        "translation": "tələsməir",
        "examples": [
          {
            "arabic": "هُوَ يَتَمَهَّلُ الآنَ.",
            "translation": "O, indi tələsməyir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَمَهَّلْ",
        "translation": "tələsmə!",
        "examples": [
          {
            "arabic": "تَمَهَّلْ.",
            "translation": "tələsmə!"
          }
        ]
      }
    }
  },
  {
    "id": 859,
    "arabic": "عَجَزَ",
    "meaning": "aciz olmaq",
    "forms": {
      "past": {
        "arabic": "عَجَزَ",
        "translation": "aciz oldu",
        "examples": [
          {
            "arabic": "هُوَ عَجَزَ أَمْسِ.",
            "translation": "O, dünən aciz oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَعْجِزُ",
        "translation": "aciz olur",
        "examples": [
          {
            "arabic": "هُوَ يَعْجِزُ الآنَ.",
            "translation": "O, indi aciz olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْجَزْ",
        "translation": "aciz ol!",
        "examples": [
          {
            "arabic": "اِعْجَزْ.",
            "translation": "aciz ol!"
          }
        ]
      }
    }
  },
  {
    "id": 860,
    "arabic": "صَرَفَ",
    "meaning": "xərcləmək",
    "forms": {
      "past": {
        "arabic": "صَرَفَ",
        "translation": "xərclədi",
        "examples": [
          {
            "arabic": "هُوَ صَرَفَ أَمْسِ.",
            "translation": "O, dünən xərclədi."
          }
        ]
      },
      "present": {
        "arabic": "يَصْرِفُ",
        "translation": "xərcləyir",
        "examples": [
          {
            "arabic": "هُوَ يَصْرِفُ الآنَ.",
            "translation": "O, indi xərcləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْرِفْ",
        "translation": "xərclə!",
        "examples": [
          {
            "arabic": "اِصْرِفْ.",
            "translation": "xərclə!"
          }
        ]
      }
    }
  },
  {
    "id": 861,
    "arabic": "هَلَكَ",
    "meaning": "məhv olmaq, həlak olmaq",
    "forms": {
      "past": {
        "arabic": "هَلَكَ",
        "translation": "həlak oldu",
        "examples": [
          {
            "arabic": "هُوَ هَلَكَ أَمْسِ.",
            "translation": "O, dünən həlak oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَهْلِكُ",
        "translation": "həlak olur",
        "examples": [
          {
            "arabic": "هُوَ يَهْلِكُ الآنَ.",
            "translation": "O, indi həlak olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِهْلِكْ",
        "translation": "həlak ol!",
        "examples": [
          {
            "arabic": "اِهْلِكْ.",
            "translation": "həlak ol!"
          }
        ]
      }
    }
  },
  {
    "id": 862,
    "arabic": "فَتَّشَ",
    "meaning": "axtarıb yoxlamaq",
    "forms": {
      "past": {
        "arabic": "فَتَّشَ",
        "translation": "axtarıb yoxlada",
        "examples": [
          {
            "arabic": "هُوَ فَتَّشَ أَمْسِ.",
            "translation": "O, dün axtarıb yoxladı."
          }
        ]
      },
      "present": {
        "arabic": "يُفَتِّشُ",
        "translation": "axtarıb yoxlaır",
        "examples": [
          {
            "arabic": "هُوَ يُفَتِّشُ الآنَ.",
            "translation": "O, indi axtarıb yoxlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "فَتِّشْ",
        "translation": "axtarıb yoxla!",
        "examples": [
          {
            "arabic": "فَتِّشْ.",
            "translation": "axtarıb yoxla!"
          }
        ]
      }
    }
  },
  {
    "id": 863,
    "arabic": "عَبَسَ",
    "meaning": "qaşqabağını tökmək",
    "forms": {
      "past": {
        "arabic": "عَبَسَ",
        "translation": "qaşqabağını tökdü",
        "examples": [
          {
            "arabic": "هُوَ عَبَسَ أَمْسِ.",
            "translation": "O, dünən qaşqabağını tökdü."
          }
        ]
      },
      "present": {
        "arabic": "يَعْبِسُ",
        "translation": "qaşqabağını tökür",
        "examples": [
          {
            "arabic": "هُوَ يَعْبِسُ الآنَ.",
            "translation": "O, indi qaşqabağını tökür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْبِسْ",
        "translation": "qaşqabağını tök!",
        "examples": [
          {
            "arabic": "اِعْبِسْ.",
            "translation": "qaşqabağını tök!"
          }
        ]
      }
    }
  },
  {
    "id": 864,
    "arabic": "أَقْفَلَ",
    "meaning": "kilidləmək",
    "forms": {
      "past": {
        "arabic": "أَقْفَلَ",
        "translation": "kilidlədi",
        "examples": [
          {
            "arabic": "هُوَ أَقْفَلَ أَمْسِ.",
            "translation": "O, dün kilidlədi."
          }
        ]
      },
      "present": {
        "arabic": "يُقْفِلُ",
        "translation": "kilidləir",
        "examples": [
          {
            "arabic": "هُوَ يُقْفِلُ الآنَ.",
            "translation": "O, indi kilidləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَقْفِلْ",
        "translation": "kilidlə!",
        "examples": [
          {
            "arabic": "أَقْفِلْ.",
            "translation": "kilidlə!"
          }
        ]
      }
    }
  },
  {
    "id": 865,
    "arabic": "قَفَلَ",
    "meaning": "bağlamaq",
    "forms": {
      "past": {
        "arabic": "قَفَلَ",
        "translation": "bağlada",
        "examples": [
          {
            "arabic": "هُوَ قَفَلَ أَمْسِ.",
            "translation": "O, dün bağladı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْفِلُ",
        "translation": "bağlaır",
        "examples": [
          {
            "arabic": "هُوَ يَقْفِلُ الآنَ.",
            "translation": "O, indi bağlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْفِلْ",
        "translation": "bağla!",
        "examples": [
          {
            "arabic": "اِقْفِلْ.",
            "translation": "bağla!"
          }
        ]
      }
    }
  },
  {
    "id": 866,
    "arabic": "قَفَزَ",
    "meaning": "tullanmaq",
    "forms": {
      "past": {
        "arabic": "قَفَزَ",
        "translation": "tullanda",
        "examples": [
          {
            "arabic": "هُوَ قَفَزَ أَمْسِ.",
            "translation": "O, dün tullandı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْفِزُ",
        "translation": "tullanır",
        "examples": [
          {
            "arabic": "هُوَ يَقْفِزُ الآنَ.",
            "translation": "O, indi tullanır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْفِزْ",
        "translation": "tullan!",
        "examples": [
          {
            "arabic": "اِقْفِزْ.",
            "translation": "tullan!"
          }
        ]
      }
    }
  },
  {
    "id": 867,
    "arabic": "نَطَّ",
    "meaning": "tullanmaq",
    "forms": {
      "past": {
        "arabic": "نَطَّ",
        "translation": "tullanda",
        "examples": [
          {
            "arabic": "هُوَ نَطَّ أَمْسِ.",
            "translation": "O, dün tullandı."
          }
        ]
      },
      "present": {
        "arabic": "يَنُطُّ",
        "translation": "tullanır",
        "examples": [
          {
            "arabic": "هُوَ يَنُطُّ الآنَ.",
            "translation": "O, indi tullanır."
          }
        ]
      },
      "imperative": {
        "arabic": "نُطَّ",
        "translation": "tullan!",
        "examples": [
          {
            "arabic": "نُطَّ.",
            "translation": "tullan!"
          }
        ]
      }
    }
  },
  {
    "id": 868,
    "arabic": "سَبَحَ",
    "meaning": "üzmək",
    "forms": {
      "past": {
        "arabic": "سَبَحَ",
        "translation": "üzdü",
        "examples": [
          {
            "arabic": "هُوَ سَبَحَ أَمْسِ.",
            "translation": "O, dün üzdü."
          }
        ]
      },
      "present": {
        "arabic": "يَسْبَحُ",
        "translation": "üzür",
        "examples": [
          {
            "arabic": "هُوَ يَسْبَحُ الآنَ.",
            "translation": "O, indi üzür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْبَحْ",
        "translation": "üz!",
        "examples": [
          {
            "arabic": "اِسْبَحْ.",
            "translation": "üz!"
          }
        ]
      }
    }
  },
  {
    "id": 869,
    "arabic": "غَاصَ",
    "meaning": "dalmaq",
    "forms": {
      "past": {
        "arabic": "غَاصَ",
        "translation": "dalda",
        "examples": [
          {
            "arabic": "هُوَ غَاصَ أَمْسِ.",
            "translation": "O, dün daldı."
          }
        ]
      },
      "present": {
        "arabic": "يَغُوصُ",
        "translation": "dalır",
        "examples": [
          {
            "arabic": "هُوَ يَغُوصُ الآنَ.",
            "translation": "O, indi dalır."
          }
        ]
      },
      "imperative": {
        "arabic": "غُصْ",
        "translation": "dal!",
        "examples": [
          {
            "arabic": "غُصْ.",
            "translation": "dal!"
          }
        ]
      }
    }
  },
  {
    "id": 870,
    "arabic": "تَسَلَّقَ",
    "meaning": "dırmaşmaq",
    "forms": {
      "past": {
        "arabic": "تَسَلَّقَ",
        "translation": "dırmaşta",
        "examples": [
          {
            "arabic": "هُوَ تَسَلَّقَ أَمْسِ.",
            "translation": "O, dün dırmaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَسَلَّقُ",
        "translation": "dırmaşır",
        "examples": [
          {
            "arabic": "هُوَ يَتَسَلَّقُ الآنَ.",
            "translation": "O, indi dırmaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَسَلَّقْ",
        "translation": "dırmaş!",
        "examples": [
          {
            "arabic": "تَسَلَّقْ.",
            "translation": "dırmaş!"
          }
        ]
      }
    }
  },
  {
    "id": 871,
    "arabic": "تَدَحْرَجَ",
    "meaning": "yuvarlanmaq",
    "forms": {
      "past": {
        "arabic": "تَدَحْرَجَ",
        "translation": "yuvarlanda",
        "examples": [
          {
            "arabic": "هُوَ تَدَحْرَجَ أَمْسِ.",
            "translation": "O, dün yuvarlandı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَدَحْرَجُ",
        "translation": "yuvarlanır",
        "examples": [
          {
            "arabic": "هُوَ يَتَدَحْرَجُ الآنَ.",
            "translation": "O, indi yuvarlanır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَدَحْرَجْ",
        "translation": "yuvarlan!",
        "examples": [
          {
            "arabic": "تَدَحْرَجْ.",
            "translation": "yuvarlan!"
          }
        ]
      }
    }
  },
  {
    "id": 872,
    "arabic": "زَحَفَ",
    "meaning": "sürünmək",
    "forms": {
      "past": {
        "arabic": "زَحَفَ",
        "translation": "süründü",
        "examples": [
          {
            "arabic": "هُوَ زَحَفَ أَمْسِ.",
            "translation": "O, dün süründü."
          }
        ]
      },
      "present": {
        "arabic": "يَزْحَفُ",
        "translation": "sürünür",
        "examples": [
          {
            "arabic": "هُوَ يَزْحَفُ الآنَ.",
            "translation": "O, indi sürünür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِزْحَفْ",
        "translation": "sürün!",
        "examples": [
          {
            "arabic": "اِزْحَفْ.",
            "translation": "sürün!"
          }
        ]
      }
    }
  },
  {
    "id": 873,
    "arabic": "زَلَقَ",
    "meaning": "sürüşmək",
    "forms": {
      "past": {
        "arabic": "زَلَقَ",
        "translation": "sürüştü",
        "examples": [
          {
            "arabic": "هُوَ زَلَقَ أَمْسِ.",
            "translation": "O, dün sürüşdü."
          }
        ]
      },
      "present": {
        "arabic": "يَزْلَقُ",
        "translation": "sürüşür",
        "examples": [
          {
            "arabic": "هُوَ يَزْلَقُ الآنَ.",
            "translation": "O, indi sürüşür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِزْلَقْ",
        "translation": "sürüş!",
        "examples": [
          {
            "arabic": "اِزْلَقْ.",
            "translation": "sürüş!"
          }
        ]
      }
    }
  },
  {
    "id": 874,
    "arabic": "سَقَطَ",
    "meaning": "düşmək",
    "forms": {
      "past": {
        "arabic": "سَقَطَ",
        "translation": "düştü",
        "examples": [
          {
            "arabic": "هُوَ سَقَطَ أَمْسِ.",
            "translation": "O, dün düşdü."
          }
        ]
      },
      "present": {
        "arabic": "يَسْقُطُ",
        "translation": "düşür",
        "examples": [
          {
            "arabic": "هُوَ يَسْقُطُ الآنَ.",
            "translation": "O, indi düşür."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْقُطْ",
        "translation": "düş!",
        "examples": [
          {
            "arabic": "اُسْقُطْ.",
            "translation": "düş!"
          }
        ]
      }
    }
  },
  {
    "id": 875,
    "arabic": "أَسْقَطَ",
    "meaning": "saldırmaq, düşürmək",
    "forms": {
      "past": {
        "arabic": "أَسْقَطَ",
        "translation": "saldırmaq, düşürdü",
        "examples": [
          {
            "arabic": "هُوَ أَسْقَطَ أَمْسِ.",
            "translation": "O, dün saldırmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُسْقِطُ",
        "translation": "saldırmaq, düşürür",
        "examples": [
          {
            "arabic": "هُوَ يُسْقِطُ الآنَ.",
            "translation": "O, indi saldırmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَسْقِطْ",
        "translation": "saldırmaq, düşür!",
        "examples": [
          {
            "arabic": "أَسْقِطْ.",
            "translation": "saldırmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 876,
    "arabic": "رَفَسَ",
    "meaning": "təpik atmaq",
    "forms": {
      "past": {
        "arabic": "رَفَسَ",
        "translation": "təpik atta",
        "examples": [
          {
            "arabic": "هُوَ رَفَسَ أَمْسِ.",
            "translation": "O, dün təpik atdı."
          }
        ]
      },
      "present": {
        "arabic": "يَرْفُسُ",
        "translation": "təpik atır",
        "examples": [
          {
            "arabic": "هُوَ يَرْفُسُ الآنَ.",
            "translation": "O, indi təpik atır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْفُسْ",
        "translation": "təpik at!",
        "examples": [
          {
            "arabic": "اُرْفُسْ.",
            "translation": "təpik at!"
          }
        ]
      }
    }
  },
  {
    "id": 877,
    "arabic": "صَفَعَ",
    "meaning": "şillə vurmaq",
    "forms": {
      "past": {
        "arabic": "صَفَعَ",
        "translation": "şillə vurdu",
        "examples": [
          {
            "arabic": "هُوَ صَفَعَ أَمْسِ.",
            "translation": "O, dün şillə vurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَصْفَعُ",
        "translation": "şillə vurur",
        "examples": [
          {
            "arabic": "هُوَ يَصْفَعُ الآنَ.",
            "translation": "O, indi şillə vurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْفَعْ",
        "translation": "şillə vur!",
        "examples": [
          {
            "arabic": "اِصْفَعْ.",
            "translation": "şillə vur!"
          }
        ]
      }
    }
  },
  {
    "id": 878,
    "arabic": "لَكَمَ",
    "meaning": "yumruq vurmaq",
    "forms": {
      "past": {
        "arabic": "لَكَمَ",
        "translation": "yumruq vurdu",
        "examples": [
          {
            "arabic": "هُوَ لَكَمَ أَمْسِ.",
            "translation": "O, dün yumruq vurdu."
          }
        ]
      },
      "present": {
        "arabic": "يَلْكُمُ",
        "translation": "yumruq vurur",
        "examples": [
          {
            "arabic": "هُوَ يَلْكُمُ الآنَ.",
            "translation": "O, indi yumruq vurur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْكُمْ",
        "translation": "yumruq vur!",
        "examples": [
          {
            "arabic": "اِلْكُمْ.",
            "translation": "yumruq vur!"
          }
        ]
      }
    }
  },
  {
    "id": 879,
    "arabic": "عَضَّ",
    "meaning": "dişləmək",
    "forms": {
      "past": {
        "arabic": "عَضَّ",
        "translation": "dişlədi",
        "examples": [
          {
            "arabic": "هُوَ عَضَّ أَمْسِ.",
            "translation": "O, dün dişlədi."
          }
        ]
      },
      "present": {
        "arabic": "يَعَضُّ",
        "translation": "dişləir",
        "examples": [
          {
            "arabic": "هُوَ يَعَضُّ الآنَ.",
            "translation": "O, indi dişləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "عُضَّ",
        "translation": "dişlə!",
        "examples": [
          {
            "arabic": "عُضَّ.",
            "translation": "dişlə!"
          }
        ]
      }
    }
  },
  {
    "id": 880,
    "arabic": "لَدَغَ",
    "meaning": "sancmaq",
    "forms": {
      "past": {
        "arabic": "لَدَغَ",
        "translation": "sancda",
        "examples": [
          {
            "arabic": "هُوَ لَدَغَ أَمْسِ.",
            "translation": "O, dün sancdı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْدَغُ",
        "translation": "sancır",
        "examples": [
          {
            "arabic": "هُوَ يَلْدَغُ الآنَ.",
            "translation": "O, indi sancır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْدَغْ",
        "translation": "sanc!",
        "examples": [
          {
            "arabic": "اِلْدَغْ.",
            "translation": "sanc!"
          }
        ]
      }
    }
  },
  {
    "id": 881,
    "arabic": "لَسَعَ",
    "meaning": "sancmaq",
    "forms": {
      "past": {
        "arabic": "لَسَعَ",
        "translation": "sancda",
        "examples": [
          {
            "arabic": "هُوَ لَسَعَ أَمْسِ.",
            "translation": "O, dün sancdı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْسَعُ",
        "translation": "sancır",
        "examples": [
          {
            "arabic": "هُوَ يَلْسَعُ الآنَ.",
            "translation": "O, indi sancır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْسَعْ",
        "translation": "sanc!",
        "examples": [
          {
            "arabic": "اِلْسَعْ.",
            "translation": "sanc!"
          }
        ]
      }
    }
  },
  {
    "id": 882,
    "arabic": "دَاسَ",
    "meaning": "tapdalamaq",
    "forms": {
      "past": {
        "arabic": "دَاسَ",
        "translation": "tapdalada",
        "examples": [
          {
            "arabic": "هُوَ دَاسَ أَمْسِ.",
            "translation": "O, dün tapdaladı."
          }
        ]
      },
      "present": {
        "arabic": "يَدُوسُ",
        "translation": "tapdalaır",
        "examples": [
          {
            "arabic": "هُوَ يَدُوسُ الآنَ.",
            "translation": "O, indi tapdalayır."
          }
        ]
      },
      "imperative": {
        "arabic": "دُسْ",
        "translation": "tapdala!",
        "examples": [
          {
            "arabic": "دُسْ.",
            "translation": "tapdala!"
          }
        ]
      }
    }
  },
  {
    "id": 883,
    "arabic": "سَحَقَ",
    "meaning": "əzib məhv etmək",
    "forms": {
      "past": {
        "arabic": "سَحَقَ",
        "translation": "əzib məhv etdi",
        "examples": [
          {
            "arabic": "هُوَ سَحَقَ أَمْسِ.",
            "translation": "O, dün əzib məhv etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْحَقُ",
        "translation": "əzib məhv edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْحَقُ الآنَ.",
            "translation": "O, indi əzib məhv etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْحَقْ",
        "translation": "əzib məhv et!",
        "examples": [
          {
            "arabic": "اِسْحَقْ.",
            "translation": "əzib məhv et!"
          }
        ]
      }
    }
  },
  {
    "id": 884,
    "arabic": "طَحَنَ",
    "meaning": "üyütmək",
    "forms": {
      "past": {
        "arabic": "طَحَنَ",
        "translation": "üyüttü",
        "examples": [
          {
            "arabic": "هُوَ طَحَنَ أَمْسِ.",
            "translation": "O, dün üyütdü."
          }
        ]
      },
      "present": {
        "arabic": "يَطْحَنُ",
        "translation": "üyütür",
        "examples": [
          {
            "arabic": "هُوَ يَطْحَنُ الآنَ.",
            "translation": "O, indi üyütür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْحَنْ",
        "translation": "üyüt!",
        "examples": [
          {
            "arabic": "اِطْحَنْ.",
            "translation": "üyüt!"
          }
        ]
      }
    }
  },
  {
    "id": 885,
    "arabic": "طَبَعَ",
    "meaning": "çap etmək",
    "forms": {
      "past": {
        "arabic": "طَبَعَ",
        "translation": "çap etdi",
        "examples": [
          {
            "arabic": "هُوَ طَبَعَ أَمْسِ.",
            "translation": "O, dün çap etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَطْبَعُ",
        "translation": "çap edir",
        "examples": [
          {
            "arabic": "هُوَ يَطْبَعُ الآنَ.",
            "translation": "O, indi çap etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْبَعْ",
        "translation": "çap et!",
        "examples": [
          {
            "arabic": "اِطْبَعْ.",
            "translation": "çap et!"
          }
        ]
      }
    }
  },
  {
    "id": 886,
    "arabic": "نَسَخَ",
    "meaning": "köçürmək",
    "forms": {
      "past": {
        "arabic": "نَسَخَ",
        "translation": "köçürdü",
        "examples": [
          {
            "arabic": "هُوَ نَسَخَ أَمْسِ.",
            "translation": "O, dün köçürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَنْسَخُ",
        "translation": "köçürür",
        "examples": [
          {
            "arabic": "هُوَ يَنْسَخُ الآنَ.",
            "translation": "O, indi köçürür."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْسَخْ",
        "translation": "köçür!",
        "examples": [
          {
            "arabic": "اِنْسَخْ.",
            "translation": "köçür!"
          }
        ]
      }
    }
  },
  {
    "id": 887,
    "arabic": "لَصَقَ",
    "meaning": "yapışdırmaq",
    "forms": {
      "past": {
        "arabic": "لَصَقَ",
        "translation": "yapışdırdı",
        "examples": [
          {
            "arabic": "هُوَ لَصَقَ أَمْسِ.",
            "translation": "O, dün yapışdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْصَقُ",
        "translation": "yapışdırır",
        "examples": [
          {
            "arabic": "هُوَ يَلْصَقُ الآنَ.",
            "translation": "O, indi yapışdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْصَقْ",
        "translation": "yapışdır!",
        "examples": [
          {
            "arabic": "اِلْصَقْ.",
            "translation": "yapışdır!"
          }
        ]
      }
    }
  },
  {
    "id": 888,
    "arabic": "اِلْتَصَقَ",
    "meaning": "yapışmaq",
    "forms": {
      "past": {
        "arabic": "اِلْتَصَقَ",
        "translation": "yapıştı",
        "examples": [
          {
            "arabic": "هُوَ اِلْتَصَقَ أَمْسِ.",
            "translation": "O, dün yapışdı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْتَصِقُ",
        "translation": "yapışır",
        "examples": [
          {
            "arabic": "هُوَ يَلْتَصِقُ الآنَ.",
            "translation": "O, indi yapışır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْتَصِقْ",
        "translation": "yapış!",
        "examples": [
          {
            "arabic": "اِلْتَصِقْ.",
            "translation": "yapış!"
          }
        ]
      }
    }
  },
  {
    "id": 889,
    "arabic": "طَوَى",
    "meaning": "qatlamaq",
    "forms": {
      "past": {
        "arabic": "طَوَى",
        "translation": "qatlada",
        "examples": [
          {
            "arabic": "هُوَ طَوَى أَمْسِ.",
            "translation": "O, dün qatladı."
          }
        ]
      },
      "present": {
        "arabic": "يَطْوِي",
        "translation": "qatlaır",
        "examples": [
          {
            "arabic": "هُوَ يَطْوِي الآنَ.",
            "translation": "O, indi qatlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْوِ",
        "translation": "qatla!",
        "examples": [
          {
            "arabic": "اِطْوِ.",
            "translation": "qatla!"
          }
        ]
      }
    }
  },
  {
    "id": 890,
    "arabic": "طَوَّى",
    "meaning": "qatlamaq",
    "forms": {
      "past": {
        "arabic": "طَوَّى",
        "translation": "qatlada",
        "examples": [
          {
            "arabic": "هُوَ طَوَّى أَمْسِ.",
            "translation": "O, dün qatladı."
          }
        ]
      },
      "present": {
        "arabic": "يُطَوِّي",
        "translation": "qatlaır",
        "examples": [
          {
            "arabic": "هُوَ يُطَوِّي الآنَ.",
            "translation": "O, indi qatlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "طَوِّ",
        "translation": "qatla!",
        "examples": [
          {
            "arabic": "طَوِّ.",
            "translation": "qatla!"
          }
        ]
      }
    }
  },
  {
    "id": 891,
    "arabic": "قَلَبَ",
    "meaning": "çevirmək",
    "forms": {
      "past": {
        "arabic": "قَلَبَ",
        "translation": "çevirdi",
        "examples": [
          {
            "arabic": "هُوَ قَلَبَ أَمْسِ.",
            "translation": "O, dün çevirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْلِبُ",
        "translation": "çevirir",
        "examples": [
          {
            "arabic": "هُوَ يَقْلِبُ الآنَ.",
            "translation": "O, indi çevirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْلِبْ",
        "translation": "çevir!",
        "examples": [
          {
            "arabic": "اِقْلِبْ.",
            "translation": "çevir!"
          }
        ]
      }
    }
  },
  {
    "id": 892,
    "arabic": "قَلَّبَ",
    "meaning": "çevirib baxmaq",
    "forms": {
      "past": {
        "arabic": "قَلَّبَ",
        "translation": "çevirib baxta",
        "examples": [
          {
            "arabic": "هُوَ قَلَّبَ أَمْسِ.",
            "translation": "O, dün çevirib baxdı."
          }
        ]
      },
      "present": {
        "arabic": "يُقَلِّبُ",
        "translation": "çevirib baxır",
        "examples": [
          {
            "arabic": "هُوَ يُقَلِّبُ الآنَ.",
            "translation": "O, indi çevirib baxır."
          }
        ]
      },
      "imperative": {
        "arabic": "قَلِّبْ",
        "translation": "çevirib bax!",
        "examples": [
          {
            "arabic": "قَلِّبْ.",
            "translation": "çevirib bax!"
          }
        ]
      }
    }
  },
  {
    "id": 893,
    "arabic": "بَعُدَ",
    "meaning": "uzaq olmaq",
    "forms": {
      "past": {
        "arabic": "بَعُدَ",
        "translation": "uzaq oldu",
        "examples": [
          {
            "arabic": "هُوَ بَعُدَ أَمْسِ.",
            "translation": "O, dün uzaq oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَبْعُدُ",
        "translation": "uzaq olur",
        "examples": [
          {
            "arabic": "هُوَ يَبْعُدُ الآنَ.",
            "translation": "O, indi uzaq olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِبْعُدْ",
        "translation": "uzaq ol!",
        "examples": [
          {
            "arabic": "اِبْعُدْ.",
            "translation": "uzaq ol!"
          }
        ]
      }
    }
  },
  {
    "id": 894,
    "arabic": "قَصُرَ",
    "meaning": "qısalmaq",
    "forms": {
      "past": {
        "arabic": "قَصُرَ",
        "translation": "qısalda",
        "examples": [
          {
            "arabic": "هُوَ قَصُرَ أَمْسِ.",
            "translation": "O, dün qısaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَقْصُرُ",
        "translation": "qısalır",
        "examples": [
          {
            "arabic": "هُوَ يَقْصُرُ الآنَ.",
            "translation": "O, indi qısalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُقْصُرْ",
        "translation": "qısal!",
        "examples": [
          {
            "arabic": "اُقْصُرْ.",
            "translation": "qısal!"
          }
        ]
      }
    }
  },
  {
    "id": 895,
    "arabic": "طَالَ",
    "meaning": "uzanmaq",
    "forms": {
      "past": {
        "arabic": "طَالَ",
        "translation": "uzanda",
        "examples": [
          {
            "arabic": "هُوَ طَالَ أَمْسِ.",
            "translation": "O, dün uzandı."
          }
        ]
      },
      "present": {
        "arabic": "يَطُولُ",
        "translation": "uzanır",
        "examples": [
          {
            "arabic": "هُوَ يَطُولُ الآنَ.",
            "translation": "O, indi uzanır."
          }
        ]
      },
      "imperative": {
        "arabic": "طُلْ",
        "translation": "uzan!",
        "examples": [
          {
            "arabic": "طُلْ.",
            "translation": "uzan!"
          }
        ]
      }
    }
  },
  {
    "id": 896,
    "arabic": "طَوَّلَ",
    "meaning": "uzatmaq",
    "forms": {
      "past": {
        "arabic": "طَوَّلَ",
        "translation": "uzatta",
        "examples": [
          {
            "arabic": "هُوَ طَوَّلَ أَمْسِ.",
            "translation": "O, dün uzatdı."
          }
        ]
      },
      "present": {
        "arabic": "يُطَوِّلُ",
        "translation": "uzatır",
        "examples": [
          {
            "arabic": "هُوَ يُطَوِّلُ الآنَ.",
            "translation": "O, indi uzatır."
          }
        ]
      },
      "imperative": {
        "arabic": "طَوِّلْ",
        "translation": "uzat!",
        "examples": [
          {
            "arabic": "طَوِّلْ.",
            "translation": "uzat!"
          }
        ]
      }
    }
  },
  {
    "id": 897,
    "arabic": "قَصَّرَ",
    "meaning": "qısaltmaq",
    "forms": {
      "past": {
        "arabic": "قَصَّرَ",
        "translation": "qısaltta",
        "examples": [
          {
            "arabic": "هُوَ قَصَّرَ أَمْسِ.",
            "translation": "O, dün qısaltdı."
          }
        ]
      },
      "present": {
        "arabic": "يُقَصِّرُ",
        "translation": "qısaltır",
        "examples": [
          {
            "arabic": "هُوَ يُقَصِّرُ الآنَ.",
            "translation": "O, indi qısaltır."
          }
        ]
      },
      "imperative": {
        "arabic": "قَصِّرْ",
        "translation": "qısalt!",
        "examples": [
          {
            "arabic": "قَصِّرْ.",
            "translation": "qısalt!"
          }
        ]
      }
    }
  },
  {
    "id": 898,
    "arabic": "عَرَّضَ",
    "meaning": "məruz qoymaq",
    "forms": {
      "past": {
        "arabic": "عَرَّضَ",
        "translation": "məruz qoydu",
        "examples": [
          {
            "arabic": "هُوَ عَرَّضَ أَمْسِ.",
            "translation": "O, dün məruz qoydu."
          }
        ]
      },
      "present": {
        "arabic": "يُعَرِّضُ",
        "translation": "məruz qoyur",
        "examples": [
          {
            "arabic": "هُوَ يُعَرِّضُ الآنَ.",
            "translation": "O, indi məruz qoyur."
          }
        ]
      },
      "imperative": {
        "arabic": "عَرِّضْ",
        "translation": "məruz qoy!",
        "examples": [
          {
            "arabic": "عَرِّضْ.",
            "translation": "məruz qoy!"
          }
        ]
      }
    }
  },
  {
    "id": 899,
    "arabic": "عَرُضَ",
    "meaning": "geniş olmaq",
    "forms": {
      "past": {
        "arabic": "عَرُضَ",
        "translation": "geniş oldu",
        "examples": [
          {
            "arabic": "هُوَ عَرُضَ أَمْسِ.",
            "translation": "O, dün geniş oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَعْرُضُ",
        "translation": "geniş olur",
        "examples": [
          {
            "arabic": "هُوَ يَعْرُضُ الآنَ.",
            "translation": "O, indi geniş olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْرُضْ",
        "translation": "geniş ol!",
        "examples": [
          {
            "arabic": "اِعْرُضْ.",
            "translation": "geniş ol!"
          }
        ]
      }
    }
  },
  {
    "id": 900,
    "arabic": "ضَيَّقَ",
    "meaning": "daraltmaq",
    "forms": {
      "past": {
        "arabic": "ضَيَّقَ",
        "translation": "daraltta",
        "examples": [
          {
            "arabic": "هُوَ ضَيَّقَ أَمْسِ.",
            "translation": "O, dün daraltdı."
          }
        ]
      },
      "present": {
        "arabic": "يُضَيِّقُ",
        "translation": "daraltır",
        "examples": [
          {
            "arabic": "هُوَ يُضَيِّقُ الآنَ.",
            "translation": "O, indi daraltır."
          }
        ]
      },
      "imperative": {
        "arabic": "ضَيِّقْ",
        "translation": "daralt!",
        "examples": [
          {
            "arabic": "ضَيِّقْ.",
            "translation": "daralt!"
          }
        ]
      }
    }
  },
  {
    "id": 901,
    "arabic": "اِتَّسَعَ",
    "meaning": "genişlənmək",
    "forms": {
      "past": {
        "arabic": "اِتَّسَعَ",
        "translation": "genişləndi",
        "examples": [
          {
            "arabic": "هُوَ اِتَّسَعَ أَمْسِ.",
            "translation": "O, dün genişləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّسِعُ",
        "translation": "genişlənir",
        "examples": [
          {
            "arabic": "هُوَ يَتَّسِعُ الآنَ.",
            "translation": "O, indi genişlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّسِعْ",
        "translation": "genişlən!",
        "examples": [
          {
            "arabic": "اِتَّسِعْ.",
            "translation": "genişlən!"
          }
        ]
      }
    }
  },
  {
    "id": 902,
    "arabic": "ضَاقَ",
    "meaning": "dar olmaq",
    "forms": {
      "past": {
        "arabic": "ضَاقَ",
        "translation": "dar oldu",
        "examples": [
          {
            "arabic": "هُوَ ضَاقَ أَمْسِ.",
            "translation": "O, dün dar oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَضِيقُ",
        "translation": "dar olur",
        "examples": [
          {
            "arabic": "هُوَ يَضِيقُ الآنَ.",
            "translation": "O, indi dar olur."
          }
        ]
      },
      "imperative": {
        "arabic": "ضِقْ",
        "translation": "dar ol!",
        "examples": [
          {
            "arabic": "ضِقْ.",
            "translation": "dar ol!"
          }
        ]
      }
    }
  },
  {
    "id": 903,
    "arabic": "اِسْتَوْسَعَ",
    "meaning": "genişləndirmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَوْسَعَ",
        "translation": "genişləndirdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَوْسَعَ أَمْسِ.",
            "translation": "O, dün genişləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَوْسِعُ",
        "translation": "genişləndirir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَوْسِعُ الآنَ.",
            "translation": "O, indi genişləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَوْسِعْ",
        "translation": "genişləndir!",
        "examples": [
          {
            "arabic": "اِسْتَوْسِعْ.",
            "translation": "genişləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 904,
    "arabic": "أَحَاطَ",
    "meaning": "əhatə etmək",
    "forms": {
      "past": {
        "arabic": "أَحَاطَ",
        "translation": "əhatə etdi",
        "examples": [
          {
            "arabic": "هُوَ أَحَاطَ أَمْسِ.",
            "translation": "O, dün əhatə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُحِيطُ",
        "translation": "əhatə edir",
        "examples": [
          {
            "arabic": "هُوَ يُحِيطُ الآنَ.",
            "translation": "O, indi əhatə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَحِطْ",
        "translation": "əhatə et!",
        "examples": [
          {
            "arabic": "أَحِطْ.",
            "translation": "əhatə et!"
          }
        ]
      }
    }
  },
  {
    "id": 905,
    "arabic": "اِنْحَرَفَ",
    "meaning": "dönmək, sapmaq",
    "forms": {
      "past": {
        "arabic": "اِنْحَرَفَ",
        "translation": "dönmək, sapta",
        "examples": [
          {
            "arabic": "هُوَ اِنْحَرَفَ أَمْسِ.",
            "translation": "O, dün dönməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْحَرِفُ",
        "translation": "dönmək, sapır",
        "examples": [
          {
            "arabic": "هُوَ يَنْحَرِفُ الآنَ.",
            "translation": "O, indi dönməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْحَرِفْ",
        "translation": "dönmək, sap!",
        "examples": [
          {
            "arabic": "اِنْحَرِفْ.",
            "translation": "dönmək!"
          }
        ]
      }
    }
  },
  {
    "id": 906,
    "arabic": "اِنْحَنَى",
    "meaning": "əyilmək",
    "forms": {
      "past": {
        "arabic": "اِنْحَنَى",
        "translation": "əyildi",
        "examples": [
          {
            "arabic": "هُوَ اِنْحَنَى أَمْسِ.",
            "translation": "O, dün əyildi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْحَنِي",
        "translation": "əyilir",
        "examples": [
          {
            "arabic": "هُوَ يَنْحَنِي الآنَ.",
            "translation": "O, indi əyilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْحَنِ",
        "translation": "əyil!",
        "examples": [
          {
            "arabic": "اِنْحَنِ.",
            "translation": "əyil!"
          }
        ]
      }
    }
  },
  {
    "id": 907,
    "arabic": "حَنَى",
    "meaning": "əyilmək",
    "forms": {
      "past": {
        "arabic": "حَنَى",
        "translation": "əyildi",
        "examples": [
          {
            "arabic": "هُوَ حَنَى أَمْسِ.",
            "translation": "O, dün əyildi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْنِي",
        "translation": "əyilir",
        "examples": [
          {
            "arabic": "هُوَ يَحْنِي الآنَ.",
            "translation": "O, indi əyilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْنِ",
        "translation": "əyil!",
        "examples": [
          {
            "arabic": "اِحْنِ.",
            "translation": "əyil!"
          }
        ]
      }
    }
  },
  {
    "id": 908,
    "arabic": "هَيَّأَ",
    "meaning": "hazırlamaq",
    "forms": {
      "past": {
        "arabic": "هَيَّأَ",
        "translation": "hazırlada",
        "examples": [
          {
            "arabic": "هُوَ هَيَّأَ أَمْسِ.",
            "translation": "O, dün hazırladı."
          }
        ]
      },
      "present": {
        "arabic": "يُهَيِّئُ",
        "translation": "hazırlaır",
        "examples": [
          {
            "arabic": "هُوَ يُهَيِّئُ الآنَ.",
            "translation": "O, indi hazırlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "هَيِّئْ",
        "translation": "hazırla!",
        "examples": [
          {
            "arabic": "هَيِّئْ.",
            "translation": "hazırla!"
          }
        ]
      }
    }
  },
  {
    "id": 909,
    "arabic": "مَهَّدَ",
    "meaning": "hazırlamaq, zəmin yaratmaq",
    "forms": {
      "past": {
        "arabic": "مَهَّدَ",
        "translation": "hazırlamaq, zəmin yaratta",
        "examples": [
          {
            "arabic": "هُوَ مَهَّدَ أَمْسِ.",
            "translation": "O, dün hazırlamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُمَهِّدُ",
        "translation": "hazırlamaq, zəmin yaratır",
        "examples": [
          {
            "arabic": "هُوَ يُمَهِّدُ الآنَ.",
            "translation": "O, indi hazırlamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "مَهِّدْ",
        "translation": "hazırlamaq, zəmin yarat!",
        "examples": [
          {
            "arabic": "مَهِّدْ.",
            "translation": "hazırlamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 910,
    "arabic": "مَهَرَ",
    "meaning": "bacarıq göstərmək",
    "forms": {
      "past": {
        "arabic": "مَهَرَ",
        "translation": "bacarıq göstərdi",
        "examples": [
          {
            "arabic": "هُوَ مَهَرَ أَمْسِ.",
            "translation": "O, dün bacarıq göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يَمْهَرُ",
        "translation": "bacarıq göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَمْهَرُ الآنَ.",
            "translation": "O, indi bacarıq göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْهَرْ",
        "translation": "bacarıq göstər!",
        "examples": [
          {
            "arabic": "اِمْهَرْ.",
            "translation": "bacarıq göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 911,
    "arabic": "اِحْتَرَفَ",
    "meaning": "peşəkarlaşmaq",
    "forms": {
      "past": {
        "arabic": "اِحْتَرَفَ",
        "translation": "peşəkarlaşta",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَرَفَ أَمْسِ.",
            "translation": "O, dün peşəkarlaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَرِفُ",
        "translation": "peşəkarlaşır",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَرِفُ الآنَ.",
            "translation": "O, indi peşəkarlaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَرِفْ",
        "translation": "peşəkarlaş!",
        "examples": [
          {
            "arabic": "اِحْتَرِفْ.",
            "translation": "peşəkarlaş!"
          }
        ]
      }
    }
  },
  {
    "id": 912,
    "arabic": "تَخَصَّصَ",
    "meaning": "ixtisaslaşmaq",
    "forms": {
      "past": {
        "arabic": "تَخَصَّصَ",
        "translation": "ixtisaslaşta",
        "examples": [
          {
            "arabic": "هُوَ تَخَصَّصَ أَمْسِ.",
            "translation": "O, dün ixtisaslaşdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَخَصَّصُ",
        "translation": "ixtisaslaşır",
        "examples": [
          {
            "arabic": "هُوَ يَتَخَصَّصُ الآنَ.",
            "translation": "O, indi ixtisaslaşır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَخَصَّصْ",
        "translation": "ixtisaslaş!",
        "examples": [
          {
            "arabic": "تَخَصَّصْ.",
            "translation": "ixtisaslaş!"
          }
        ]
      }
    }
  },
  {
    "id": 913,
    "arabic": "خَصَّصَ",
    "meaning": "ayırmaq, təyin etmək",
    "forms": {
      "past": {
        "arabic": "خَصَّصَ",
        "translation": "ayırmaq, təyin etdi",
        "examples": [
          {
            "arabic": "هُوَ خَصَّصَ أَمْسِ.",
            "translation": "O, dün ayırmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يُخَصِّصُ",
        "translation": "ayırmaq, təyin edir",
        "examples": [
          {
            "arabic": "هُوَ يُخَصِّصُ الآنَ.",
            "translation": "O, indi ayırmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "خَصِّصْ",
        "translation": "ayırmaq, təyin et!",
        "examples": [
          {
            "arabic": "خَصِّصْ.",
            "translation": "ayırmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 914,
    "arabic": "عَيَّنَ",
    "meaning": "təyin etmək",
    "forms": {
      "past": {
        "arabic": "عَيَّنَ",
        "translation": "təyin etdi",
        "examples": [
          {
            "arabic": "هُوَ عَيَّنَ أَمْسِ.",
            "translation": "O, dün təyin etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعَيِّنُ",
        "translation": "təyin edir",
        "examples": [
          {
            "arabic": "هُوَ يُعَيِّنُ الآنَ.",
            "translation": "O, indi təyin etir."
          }
        ]
      },
      "imperative": {
        "arabic": "عَيِّنْ",
        "translation": "təyin et!",
        "examples": [
          {
            "arabic": "عَيِّنْ.",
            "translation": "təyin et!"
          }
        ]
      }
    }
  },
  {
    "id": 915,
    "arabic": "تَعَيَّنَ",
    "meaning": "təyin olunmaq, lazım olmaq",
    "forms": {
      "past": {
        "arabic": "تَعَيَّنَ",
        "translation": "təyin olunmaq, lazım oldu",
        "examples": [
          {
            "arabic": "هُوَ تَعَيَّنَ أَمْسِ.",
            "translation": "O, dün təyin olunmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَعَيَّنُ",
        "translation": "təyin olunmaq, lazım olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَعَيَّنُ الآنَ.",
            "translation": "O, indi təyin olunmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَعَيَّنْ",
        "translation": "təyin olunmaq, lazım ol!",
        "examples": [
          {
            "arabic": "تَعَيَّنْ.",
            "translation": "təyin olunmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 916,
    "arabic": "اِخْتَصَّ",
    "meaning": "aid olmaq, ixtisaslaşmaq",
    "forms": {
      "past": {
        "arabic": "اِخْتَصَّ",
        "translation": "aid olmaq, ixtisaslaşta",
        "examples": [
          {
            "arabic": "هُوَ اِخْتَصَّ أَمْسِ.",
            "translation": "O, dün aid olmaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَخْتَصُّ",
        "translation": "aid olmaq, ixtisaslaşır",
        "examples": [
          {
            "arabic": "هُوَ يَخْتَصُّ الآنَ.",
            "translation": "O, indi aid olmaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِخْتَصَّ",
        "translation": "aid olmaq, ixtisaslaş!",
        "examples": [
          {
            "arabic": "اِخْتَصَّ.",
            "translation": "aid olmaq!"
          }
        ]
      }
    }
  },
  {
    "id": 917,
    "arabic": "اِشْتَرَكَ",
    "meaning": "iştirak etmək, abunə olmaq",
    "forms": {
      "past": {
        "arabic": "اِشْتَرَكَ",
        "translation": "iştirak etmək, abunə oldu",
        "examples": [
          {
            "arabic": "هُوَ اِشْتَرَكَ أَمْسِ.",
            "translation": "O, dün iştirak etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتَرِكُ",
        "translation": "iştirak etmək, abunə olur",
        "examples": [
          {
            "arabic": "هُوَ يَشْتَرِكُ الآنَ.",
            "translation": "O, indi iştirak etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْتَرِكْ",
        "translation": "iştirak etmək, abunə ol!",
        "examples": [
          {
            "arabic": "اِشْتَرِكْ.",
            "translation": "iştirak etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 918,
    "arabic": "شَارَكَ",
    "meaning": "iştirak etmək",
    "forms": {
      "past": {
        "arabic": "شَارَكَ",
        "translation": "iştirak etdi",
        "examples": [
          {
            "arabic": "هُوَ شَارَكَ أَمْسِ.",
            "translation": "O, dün iştirak etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُشَارِكُ",
        "translation": "iştirak edir",
        "examples": [
          {
            "arabic": "هُوَ يُشَارِكُ الآنَ.",
            "translation": "O, indi iştirak etır."
          }
        ]
      },
      "imperative": {
        "arabic": "شَارِكْ",
        "translation": "iştirak et!",
        "examples": [
          {
            "arabic": "شَارِكْ.",
            "translation": "iştirak et!"
          }
        ]
      }
    }
  },
  {
    "id": 919,
    "arabic": "اِنْسَحَبَ",
    "meaning": "geri çəkilmək",
    "forms": {
      "past": {
        "arabic": "اِنْسَحَبَ",
        "translation": "geri çəkildi",
        "examples": [
          {
            "arabic": "هُوَ اِنْسَحَبَ أَمْسِ.",
            "translation": "O, dün geri çəkildi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْسَحِبُ",
        "translation": "geri çəkilir",
        "examples": [
          {
            "arabic": "هُوَ يَنْسَحِبُ الآنَ.",
            "translation": "O, indi geri çəkilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْسَحِبْ",
        "translation": "geri çəkil!",
        "examples": [
          {
            "arabic": "اِنْسَحِبْ.",
            "translation": "geri çəkil!"
          }
        ]
      }
    }
  },
  {
    "id": 920,
    "arabic": "صَلَبَ",
    "meaning": "çarmıxa çəkmək",
    "forms": {
      "past": {
        "arabic": "صَلَبَ",
        "translation": "çarmıxa çəkdi",
        "examples": [
          {
            "arabic": "هُوَ صَلَبَ أَمْسِ.",
            "translation": "O, dünən çarmıxa çəkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَصْلُبُ",
        "translation": "çarmıxa çəkir",
        "examples": [
          {
            "arabic": "هُوَ يَصْلُبُ الآنَ.",
            "translation": "O, indi çarmıxa çəkir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْلُبْ",
        "translation": "çarmıxa çək!",
        "examples": [
          {
            "arabic": "اِصْلُبْ.",
            "translation": "çarmıxa çək!"
          }
        ]
      }
    }
  },
  {
    "id": 921,
    "arabic": "تَخَلَّى",
    "meaning": "imtina etmək",
    "forms": {
      "past": {
        "arabic": "تَخَلَّى",
        "translation": "imtina etdi",
        "examples": [
          {
            "arabic": "هُوَ تَخَلَّى أَمْسِ.",
            "translation": "O, dün imtina etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَخَلَّى",
        "translation": "imtina edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَخَلَّى الآنَ.",
            "translation": "O, indi imtina etır."
          }
        ]
      },
      "imperative": {
        "arabic": "تَخَلَّ",
        "translation": "imtina et!",
        "examples": [
          {
            "arabic": "تَخَلَّ.",
            "translation": "imtina et!"
          }
        ]
      }
    }
  },
  {
    "id": 922,
    "arabic": "سَلَقَ",
    "meaning": "qaynatmaq",
    "forms": {
      "past": {
        "arabic": "سَلَقَ",
        "translation": "qaynatdı",
        "examples": [
          {
            "arabic": "هُوَ سَلَقَ أَمْسِ.",
            "translation": "O, dünən qaynatdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْلُقُ",
        "translation": "qaynadır",
        "examples": [
          {
            "arabic": "هُوَ يَسْلُقُ الآنَ.",
            "translation": "O, indi qaynadır."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْلُقْ",
        "translation": "qaynat!",
        "examples": [
          {
            "arabic": "اُسْلُقْ.",
            "translation": "qaynat!"
          }
        ]
      }
    }
  },
  {
    "id": 923,
    "arabic": "تَحَرَّرَ",
    "meaning": "azad olmaq",
    "forms": {
      "past": {
        "arabic": "تَحَرَّرَ",
        "translation": "azad oldu",
        "examples": [
          {
            "arabic": "هُوَ تَحَرَّرَ أَمْسِ.",
            "translation": "O, dün azad oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَحَرَّرُ",
        "translation": "azad olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَحَرَّرُ الآنَ.",
            "translation": "O, indi azad olur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَحَرَّرْ",
        "translation": "azad ol!",
        "examples": [
          {
            "arabic": "تَحَرَّرْ.",
            "translation": "azad ol!"
          }
        ]
      }
    }
  },
  {
    "id": 924,
    "arabic": "اِسْتَقَلَّ",
    "meaning": "müstəqil olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَقَلَّ",
        "translation": "müstəqil oldu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَقَلَّ أَمْسِ.",
            "translation": "O, dün müstəqil oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَقِلُّ",
        "translation": "müstəqil olur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَقِلُّ الآنَ.",
            "translation": "O, indi müstəqil olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَقِلَّ",
        "translation": "müstəqil ol!",
        "examples": [
          {
            "arabic": "اِسْتَقِلَّ.",
            "translation": "müstəqil ol!"
          }
        ]
      }
    }
  },
  {
    "id": 925,
    "arabic": "تَوَكَّلَ",
    "meaning": "təvəkkül etmək",
    "forms": {
      "past": {
        "arabic": "تَوَكَّلَ",
        "translation": "təvəkkül etdi",
        "examples": [
          {
            "arabic": "هُوَ تَوَكَّلَ أَمْسِ.",
            "translation": "O, dün təvəkkül etdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَوَكَّلُ",
        "translation": "təvəkkül edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَوَكَّلُ الآنَ.",
            "translation": "O, indi təvəkkül etür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَوَكَّلْ",
        "translation": "təvəkkül et!",
        "examples": [
          {
            "arabic": "تَوَكَّلْ.",
            "translation": "təvəkkül et!"
          }
        ]
      }
    }
  },
  {
    "id": 926,
    "arabic": "اِسْتَنْجَدَ",
    "meaning": "yardım istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَنْجَدَ",
        "translation": "yardım istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَنْجَدَ أَمْسِ.",
            "translation": "O, dün yardım istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَنْجِدُ",
        "translation": "yardım istəir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَنْجِدُ الآنَ.",
            "translation": "O, indi yardım istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَنْجِدْ",
        "translation": "yardım istə!",
        "examples": [
          {
            "arabic": "اِسْتَنْجِدْ.",
            "translation": "yardım istə!"
          }
        ]
      }
    }
  },
  {
    "id": 927,
    "arabic": "أَغَاثَ",
    "meaning": "yardım etmək",
    "forms": {
      "past": {
        "arabic": "أَغَاثَ",
        "translation": "yardım etdi",
        "examples": [
          {
            "arabic": "هُوَ أَغَاثَ أَمْسِ.",
            "translation": "O, dün yardım etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُغِيثُ",
        "translation": "yardım edir",
        "examples": [
          {
            "arabic": "هُوَ يُغِيثُ الآنَ.",
            "translation": "O, indi yardım etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَغِثْ",
        "translation": "yardım et!",
        "examples": [
          {
            "arabic": "أَغِثْ.",
            "translation": "yardım et!"
          }
        ]
      }
    }
  },
  {
    "id": 928,
    "arabic": "أَعَانَ",
    "meaning": "kömək etmək",
    "forms": {
      "past": {
        "arabic": "أَعَانَ",
        "translation": "kömək etdi",
        "examples": [
          {
            "arabic": "هُوَ أَعَانَ أَمْسِ.",
            "translation": "O, dün kömək etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُعِينُ",
        "translation": "kömək edir",
        "examples": [
          {
            "arabic": "هُوَ يُعِينُ الآنَ.",
            "translation": "O, indi kömək etir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعِنْ",
        "translation": "kömək et!",
        "examples": [
          {
            "arabic": "أَعِنْ.",
            "translation": "kömək et!"
          }
        ]
      }
    }
  },
  {
    "id": 929,
    "arabic": "كَفَلَ",
    "meaning": "himayə etmək",
    "forms": {
      "past": {
        "arabic": "كَفَلَ",
        "translation": "himayə etdi",
        "examples": [
          {
            "arabic": "هُوَ كَفَلَ أَمْسِ.",
            "translation": "O, dün himayə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْفُلُ",
        "translation": "himayə edir",
        "examples": [
          {
            "arabic": "هُوَ يَكْفُلُ الآنَ.",
            "translation": "O, indi himayə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُكْفُلْ",
        "translation": "himayə et!",
        "examples": [
          {
            "arabic": "اُكْفُلْ.",
            "translation": "himayə et!"
          }
        ]
      }
    }
  },
  {
    "id": 930,
    "arabic": "ضَمِنَ",
    "meaning": "zəmanət vermək",
    "forms": {
      "past": {
        "arabic": "ضَمِنَ",
        "translation": "zəmanət verdi",
        "examples": [
          {
            "arabic": "هُوَ ضَمِنَ أَمْسِ.",
            "translation": "O, dün zəmanət verdi."
          }
        ]
      },
      "present": {
        "arabic": "يَضْمَنُ",
        "translation": "zəmanət verir",
        "examples": [
          {
            "arabic": "هُوَ يَضْمَنُ الآنَ.",
            "translation": "O, indi zəmanət verir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِضْمَنْ",
        "translation": "zəmanət ver!",
        "examples": [
          {
            "arabic": "اِضْمَنْ.",
            "translation": "zəmanət ver!"
          }
        ]
      }
    }
  },
  {
    "id": 931,
    "arabic": "كَفَى",
    "meaning": "kifayət etmək",
    "forms": {
      "past": {
        "arabic": "كَفَى",
        "translation": "kifayət etdi",
        "examples": [
          {
            "arabic": "هُوَ كَفَى أَمْسِ.",
            "translation": "O, dün kifayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْفِي",
        "translation": "kifayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَكْفِي الآنَ.",
            "translation": "O, indi kifayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْفِ",
        "translation": "kifayət et!",
        "examples": [
          {
            "arabic": "اِكْفِ.",
            "translation": "kifayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 932,
    "arabic": "اِكْتَفَى",
    "meaning": "kifayətlənmək",
    "forms": {
      "past": {
        "arabic": "اِكْتَفَى",
        "translation": "kifayətləndi",
        "examples": [
          {
            "arabic": "هُوَ اِكْتَفَى أَمْسِ.",
            "translation": "O, dün kifayətləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْتَفِي",
        "translation": "kifayətlənir",
        "examples": [
          {
            "arabic": "هُوَ يَكْتَفِي الآنَ.",
            "translation": "O, indi kifayətlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْتَفِ",
        "translation": "kifayətlən!",
        "examples": [
          {
            "arabic": "اِكْتَفِ.",
            "translation": "kifayətlən!"
          }
        ]
      }
    }
  },
  {
    "id": 933,
    "arabic": "اِضْطَرَّ",
    "meaning": "məcbur olmaq",
    "forms": {
      "past": {
        "arabic": "اِضْطَرَّ",
        "translation": "məcbur oldu",
        "examples": [
          {
            "arabic": "هُوَ اِضْطَرَّ أَمْسِ.",
            "translation": "O, dün məcbur oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَضْطَرُّ",
        "translation": "məcbur olur",
        "examples": [
          {
            "arabic": "هُوَ يَضْطَرُّ الآنَ.",
            "translation": "O, indi məcbur olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِضْطَرَّ",
        "translation": "məcbur ol!",
        "examples": [
          {
            "arabic": "اِضْطَرَّ.",
            "translation": "məcbur ol!"
          }
        ]
      }
    }
  },
  {
    "id": 934,
    "arabic": "أَجْبَرَ",
    "meaning": "məcbur etmək",
    "forms": {
      "past": {
        "arabic": "أَجْبَرَ",
        "translation": "məcbur etdi",
        "examples": [
          {
            "arabic": "هُوَ أَجْبَرَ أَمْسِ.",
            "translation": "O, dün məcbur etdu."
          }
        ]
      },
      "present": {
        "arabic": "يُجْبِرُ",
        "translation": "məcbur edir",
        "examples": [
          {
            "arabic": "هُوَ يُجْبِرُ الآنَ.",
            "translation": "O, indi məcbur etur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَجْبِرْ",
        "translation": "məcbur et!",
        "examples": [
          {
            "arabic": "أَجْبِرْ.",
            "translation": "məcbur et!"
          }
        ]
      }
    }
  },
  {
    "id": 935,
    "arabic": "تَكَلَّفَ",
    "meaning": "öhdəsinə götürmək",
    "forms": {
      "past": {
        "arabic": "تَكَلَّفَ",
        "translation": "öhdəsinə götürdü",
        "examples": [
          {
            "arabic": "هُوَ تَكَلَّفَ أَمْسِ.",
            "translation": "O, dün öhdəsinə götürdü."
          }
        ]
      },
      "present": {
        "arabic": "يَتَكَلَّفُ",
        "translation": "öhdəsinə götürür",
        "examples": [
          {
            "arabic": "هُوَ يَتَكَلَّفُ الآنَ.",
            "translation": "O, indi öhdəsinə götürür."
          }
        ]
      },
      "imperative": {
        "arabic": "تَكَلَّفْ",
        "translation": "öhdəsinə götür!",
        "examples": [
          {
            "arabic": "تَكَلَّفْ.",
            "translation": "öhdəsinə götür!"
          }
        ]
      }
    }
  },
  {
    "id": 936,
    "arabic": "اِسْتَوفَى",
    "meaning": "tamamlamaq, almaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَوفَى",
        "translation": "tamamlamaq, alda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَوفَى أَمْسِ.",
            "translation": "O, dün tamamlamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَوْفِي",
        "translation": "tamamlamaq, alır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَوْفِي الآنَ.",
            "translation": "O, indi tamamlamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَوْفِ",
        "translation": "tamamlamaq, al!",
        "examples": [
          {
            "arabic": "اِسْتَوْفِ.",
            "translation": "tamamlamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 937,
    "arabic": "أَبْطَلَ",
    "meaning": "etibarsız etmək",
    "forms": {
      "past": {
        "arabic": "أَبْطَلَ",
        "translation": "etibarsız etdi",
        "examples": [
          {
            "arabic": "هُوَ أَبْطَلَ أَمْسِ.",
            "translation": "O, dün etibarsız etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبْطِلُ",
        "translation": "etibarsız edir",
        "examples": [
          {
            "arabic": "هُوَ يُبْطِلُ الآنَ.",
            "translation": "O, indi etibarsız etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَبْطِلْ",
        "translation": "etibarsız et!",
        "examples": [
          {
            "arabic": "أَبْطِلْ.",
            "translation": "etibarsız et!"
          }
        ]
      }
    }
  },
  {
    "id": 938,
    "arabic": "نَفَى",
    "meaning": "inkar etmək",
    "forms": {
      "past": {
        "arabic": "نَفَى",
        "translation": "inkar etdi",
        "examples": [
          {
            "arabic": "هُوَ نَفَى أَمْسِ.",
            "translation": "O, dün inkar etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَنْفِي",
        "translation": "inkar edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْفِي الآنَ.",
            "translation": "O, indi inkar etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْفِ",
        "translation": "inkar et!",
        "examples": [
          {
            "arabic": "اِنْفِ.",
            "translation": "inkar et!"
          }
        ]
      }
    }
  },
  {
    "id": 939,
    "arabic": "اِدَّعَى",
    "meaning": "iddia etmək",
    "forms": {
      "past": {
        "arabic": "اِدَّعَى",
        "translation": "iddia etdi",
        "examples": [
          {
            "arabic": "هُوَ اِدَّعَى أَمْسِ.",
            "translation": "O, dün iddia etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَدَّعِي",
        "translation": "iddia edir",
        "examples": [
          {
            "arabic": "هُوَ يَدَّعِي الآنَ.",
            "translation": "O, indi iddia etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِدَّعِ",
        "translation": "iddia et!",
        "examples": [
          {
            "arabic": "اِدَّعِ.",
            "translation": "iddia et!"
          }
        ]
      }
    }
  },
  {
    "id": 940,
    "arabic": "اِتَّهَمَ",
    "meaning": "ittiham etmək",
    "forms": {
      "past": {
        "arabic": "اِتَّهَمَ",
        "translation": "ittiham etdi",
        "examples": [
          {
            "arabic": "هُوَ اِتَّهَمَ أَمْسِ.",
            "translation": "O, dün ittiham etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَتَّهِمُ",
        "translation": "ittiham edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَّهِمُ الآنَ.",
            "translation": "O, indi ittiham etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِتَّهِمْ",
        "translation": "ittiham et!",
        "examples": [
          {
            "arabic": "اِتَّهِمْ.",
            "translation": "ittiham et!"
          }
        ]
      }
    }
  },
  {
    "id": 941,
    "arabic": "بَرَّأَ",
    "meaning": "bəraət qazandırmaq",
    "forms": {
      "past": {
        "arabic": "بَرَّأَ",
        "translation": "bəraət qazandırdı",
        "examples": [
          {
            "arabic": "هُوَ بَرَّأَ أَمْسِ.",
            "translation": "O, dün bəraət qazandırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبَرِّئُ",
        "translation": "bəraət qazandırır",
        "examples": [
          {
            "arabic": "هُوَ يُبَرِّئُ الآنَ.",
            "translation": "O, indi bəraət qazandırır."
          }
        ]
      },
      "imperative": {
        "arabic": "بَرِّئْ",
        "translation": "bəraət qazandır!",
        "examples": [
          {
            "arabic": "بَرِّئْ.",
            "translation": "bəraət qazandır!"
          }
        ]
      }
    }
  },
  {
    "id": 942,
    "arabic": "أَدَانَ",
    "meaning": "məhkum etmək",
    "forms": {
      "past": {
        "arabic": "أَدَانَ",
        "translation": "məhkum etdi",
        "examples": [
          {
            "arabic": "هُوَ أَدَانَ أَمْسِ.",
            "translation": "O, dün məhkum etdu."
          }
        ]
      },
      "present": {
        "arabic": "يُدِينُ",
        "translation": "məhkum edir",
        "examples": [
          {
            "arabic": "هُوَ يُدِينُ الآنَ.",
            "translation": "O, indi məhkum etur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَدِنْ",
        "translation": "məhkum et!",
        "examples": [
          {
            "arabic": "أَدِنْ.",
            "translation": "məhkum et!"
          }
        ]
      }
    }
  },
  {
    "id": 943,
    "arabic": "اِعْتَقَلَ",
    "meaning": "həbs etmək",
    "forms": {
      "past": {
        "arabic": "اِعْتَقَلَ",
        "translation": "həbs etdi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَقَلَ أَمْسِ.",
            "translation": "O, dün həbs etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَقِلُ",
        "translation": "həbs edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَقِلُ الآنَ.",
            "translation": "O, indi həbs etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَقِلْ",
        "translation": "həbs et!",
        "examples": [
          {
            "arabic": "اِعْتَقِلْ.",
            "translation": "həbs et!"
          }
        ]
      }
    }
  },
  {
    "id": 944,
    "arabic": "اِحْتَجَزَ",
    "meaning": "saxlamaq, həbs etmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَجَزَ",
        "translation": "saxlamaq, həbs etdi",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَجَزَ أَمْسِ.",
            "translation": "O, dün saxlamaqdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَجِزُ",
        "translation": "saxlamaq, həbs edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَجِزُ الآنَ.",
            "translation": "O, indi saxlamaqır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَجِزْ",
        "translation": "saxlamaq, həbs et!",
        "examples": [
          {
            "arabic": "اِحْتَجِزْ.",
            "translation": "saxlamaq!"
          }
        ]
      }
    }
  },
  {
    "id": 945,
    "arabic": "أَفْرَجَ",
    "meaning": "azad etmək",
    "forms": {
      "past": {
        "arabic": "أَفْرَجَ",
        "translation": "azad etdi",
        "examples": [
          {
            "arabic": "هُوَ أَفْرَجَ أَمْسِ.",
            "translation": "O, dün azad etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُفْرِجُ",
        "translation": "azad edir",
        "examples": [
          {
            "arabic": "هُوَ يُفْرِجُ الآنَ.",
            "translation": "O, indi azad etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفْرِجْ",
        "translation": "azad et!",
        "examples": [
          {
            "arabic": "أَفْرِجْ.",
            "translation": "azad et!"
          }
        ]
      }
    }
  },
  {
    "id": 946,
    "arabic": "اِحْتَجَّ",
    "meaning": "etiraz etmək",
    "forms": {
      "past": {
        "arabic": "اِحْتَجَّ",
        "translation": "etiraz etdi",
        "examples": [
          {
            "arabic": "هُوَ اِحْتَجَّ أَمْسِ.",
            "translation": "O, dün etiraz etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَحْتَجُّ",
        "translation": "etiraz edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْتَجُّ الآنَ.",
            "translation": "O, indi etiraz etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْتَجَّ",
        "translation": "etiraz et!",
        "examples": [
          {
            "arabic": "اِحْتَجَّ.",
            "translation": "etiraz et!"
          }
        ]
      }
    }
  },
  {
    "id": 947,
    "arabic": "اِعْتَرَضَ",
    "meaning": "etiraz etmək",
    "forms": {
      "past": {
        "arabic": "اِعْتَرَضَ",
        "translation": "etiraz etdi",
        "examples": [
          {
            "arabic": "هُوَ اِعْتَرَضَ أَمْسِ.",
            "translation": "O, dün etiraz etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْتَرِضُ",
        "translation": "etiraz edir",
        "examples": [
          {
            "arabic": "هُوَ يَعْتَرِضُ الآنَ.",
            "translation": "O, indi etiraz etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْتَرِضْ",
        "translation": "etiraz et!",
        "examples": [
          {
            "arabic": "اِعْتَرِضْ.",
            "translation": "etiraz et!"
          }
        ]
      }
    }
  },
  {
    "id": 948,
    "arabic": "تَظَاهَرَ",
    "meaning": "nümayiş etmək, özünü göstərmək",
    "forms": {
      "past": {
        "arabic": "تَظَاهَرَ",
        "translation": "nümayiş etmək, özünü göstərdi",
        "examples": [
          {
            "arabic": "هُوَ تَظَاهَرَ أَمْسِ.",
            "translation": "O, dün nümayiş etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَظَاهَرُ",
        "translation": "nümayiş etmək, özünü göstərir",
        "examples": [
          {
            "arabic": "هُوَ يَتَظَاهَرُ الآنَ.",
            "translation": "O, indi nümayiş etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَظَاهَرْ",
        "translation": "nümayiş etmək, özünü göstər!",
        "examples": [
          {
            "arabic": "تَظَاهَرْ.",
            "translation": "nümayiş etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 949,
    "arabic": "اِجْتَحَجَ",
    "meaning": "etiraz etmək",
    "forms": {
      "past": {
        "arabic": "اِجْتَحَجَ",
        "translation": "etiraz etdi",
        "examples": [
          {
            "arabic": "هُوَ اِجْتَحَجَ أَمْسِ.",
            "translation": "O, dün etiraz etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَجْتَحِجُ",
        "translation": "etiraz edir",
        "examples": [
          {
            "arabic": "هُوَ يَجْتَحِجُ الآنَ.",
            "translation": "O, indi etiraz etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْتَحِجْ",
        "translation": "etiraz et!",
        "examples": [
          {
            "arabic": "اِجْتَحِجْ.",
            "translation": "etiraz et!"
          }
        ]
      }
    }
  },
  {
    "id": 950,
    "arabic": "أَيَّدَ",
    "meaning": "dəstəkləmək",
    "forms": {
      "past": {
        "arabic": "أَيَّدَ",
        "translation": "dəstəklədi",
        "examples": [
          {
            "arabic": "هُوَ أَيَّدَ أَمْسِ.",
            "translation": "O, dün dəstəklədi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَيِّدُ",
        "translation": "dəstəkləir",
        "examples": [
          {
            "arabic": "هُوَ يُؤَيِّدُ الآنَ.",
            "translation": "O, indi dəstəkləyir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَيِّدْ",
        "translation": "dəstəklə!",
        "examples": [
          {
            "arabic": "أَيِّدْ.",
            "translation": "dəstəklə!"
          }
        ]
      }
    }
  },
  {
    "id": 951,
    "arabic": "عَارَضَ",
    "meaning": "qarşı çıxmaq",
    "forms": {
      "past": {
        "arabic": "عَارَضَ",
        "translation": "qarşı çıxtı",
        "examples": [
          {
            "arabic": "هُوَ عَارَضَ أَمْسِ.",
            "translation": "O, dün qarşı çıxdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعَارِضُ",
        "translation": "qarşı çıxır",
        "examples": [
          {
            "arabic": "هُوَ يُعَارِضُ الآنَ.",
            "translation": "O, indi qarşı çıxır."
          }
        ]
      },
      "imperative": {
        "arabic": "عَارِضْ",
        "translation": "qarşı çıx!",
        "examples": [
          {
            "arabic": "عَارِضْ.",
            "translation": "qarşı çıx!"
          }
        ]
      }
    }
  },
  {
    "id": 952,
    "arabic": "اِنْتَقَدَ",
    "meaning": "tənqid etmək",
    "forms": {
      "past": {
        "arabic": "اِنْتَقَدَ",
        "translation": "tənqid etdi",
        "examples": [
          {
            "arabic": "هُوَ اِنْتَقَدَ أَمْسِ.",
            "translation": "O, dün tənqid etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَنْتَقِدُ",
        "translation": "tənqid edir",
        "examples": [
          {
            "arabic": "هُوَ يَنْتَقِدُ الآنَ.",
            "translation": "O, indi tənqid etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْتَقِدْ",
        "translation": "tənqid et!",
        "examples": [
          {
            "arabic": "اِنْتَقِدْ.",
            "translation": "tənqid et!"
          }
        ]
      }
    }
  },
  {
    "id": 953,
    "arabic": "مَدَّ",
    "meaning": "uzatmaq",
    "forms": {
      "past": {
        "arabic": "مَدَّ",
        "translation": "uzatta",
        "examples": [
          {
            "arabic": "هُوَ مَدَّ أَمْسِ.",
            "translation": "O, dün uzatdı."
          }
        ]
      },
      "present": {
        "arabic": "يَمُدُّ",
        "translation": "uzatır",
        "examples": [
          {
            "arabic": "هُوَ يَمُدُّ الآنَ.",
            "translation": "O, indi uzatır."
          }
        ]
      },
      "imperative": {
        "arabic": "مُدَّ",
        "translation": "uzat!",
        "examples": [
          {
            "arabic": "مُدَّ.",
            "translation": "uzat!"
          }
        ]
      }
    }
  },
  {
    "id": 954,
    "arabic": "جَذَبَ",
    "meaning": "cəlb etmək",
    "forms": {
      "past": {
        "arabic": "جَذَبَ",
        "translation": "cəlb etdi",
        "examples": [
          {
            "arabic": "هُوَ جَذَبَ أَمْسِ.",
            "translation": "O, dün cəlb etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَجْذِبُ",
        "translation": "cəlb edir",
        "examples": [
          {
            "arabic": "هُوَ يَجْذِبُ الآنَ.",
            "translation": "O, indi cəlb etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِجْذِبْ",
        "translation": "cəlb et!",
        "examples": [
          {
            "arabic": "اِجْذِبْ.",
            "translation": "cəlb et!"
          }
        ]
      }
    }
  },
  {
    "id": 955,
    "arabic": "جَرَّ",
    "meaning": "dartmaq",
    "forms": {
      "past": {
        "arabic": "جَرَّ",
        "translation": "dartta",
        "examples": [
          {
            "arabic": "هُوَ جَرَّ أَمْسِ.",
            "translation": "O, dün dartdı."
          }
        ]
      },
      "present": {
        "arabic": "يَجُرُّ",
        "translation": "dartır",
        "examples": [
          {
            "arabic": "هُوَ يَجُرُّ الآنَ.",
            "translation": "O, indi dartır."
          }
        ]
      },
      "imperative": {
        "arabic": "جُرَّ",
        "translation": "dart!",
        "examples": [
          {
            "arabic": "جُرَّ.",
            "translation": "dart!"
          }
        ]
      }
    }
  },
  {
    "id": 956,
    "arabic": "وَثِقَ",
    "meaning": "güvənmək",
    "forms": {
      "past": {
        "arabic": "وَثِقَ",
        "translation": "güvəndi",
        "examples": [
          {
            "arabic": "هُوَ وَثِقَ أَمْسِ.",
            "translation": "O, dün güvəndi."
          }
        ]
      },
      "present": {
        "arabic": "يَثِقُ",
        "translation": "güvənir",
        "examples": [
          {
            "arabic": "هُوَ يَثِقُ الآنَ.",
            "translation": "O, indi güvənir."
          }
        ]
      },
      "imperative": {
        "arabic": "ثِقْ",
        "translation": "güvən!",
        "examples": [
          {
            "arabic": "ثِقْ.",
            "translation": "güvən!"
          }
        ]
      }
    }
  },
  {
    "id": 957,
    "arabic": "اِشْتَبَهَ",
    "meaning": "şübhələnmək",
    "forms": {
      "past": {
        "arabic": "اِشْتَبَهَ",
        "translation": "şübhələndi",
        "examples": [
          {
            "arabic": "هُوَ اِشْتَبَهَ أَمْسِ.",
            "translation": "O, dün şübhələndi."
          }
        ]
      },
      "present": {
        "arabic": "يَشْتَبِهُ",
        "translation": "şübhələnir",
        "examples": [
          {
            "arabic": "هُوَ يَشْتَبِهُ الآنَ.",
            "translation": "O, indi şübhələnir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِشْتَبِهْ",
        "translation": "şübhələn!",
        "examples": [
          {
            "arabic": "اِشْتَبِهْ.",
            "translation": "şübhələn!"
          }
        ]
      }
    }
  },
  {
    "id": 958,
    "arabic": "تَبَيَّنَ",
    "meaning": "aydın olmaq",
    "forms": {
      "past": {
        "arabic": "تَبَيَّنَ",
        "translation": "aydın oldu",
        "examples": [
          {
            "arabic": "هُوَ تَبَيَّنَ أَمْسِ.",
            "translation": "O, dün aydın oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَبَيَّنُ",
        "translation": "aydın olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَبَيَّنُ الآنَ.",
            "translation": "O, indi aydın olur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَبَيَّنْ",
        "translation": "aydın ol!",
        "examples": [
          {
            "arabic": "تَبَيَّنْ.",
            "translation": "aydın ol!"
          }
        ]
      }
    }
  },
  {
    "id": 959,
    "arabic": "بَيَّنَ",
    "meaning": "aydınlaşdırmaq",
    "forms": {
      "past": {
        "arabic": "بَيَّنَ",
        "translation": "aydınlaşdırdı",
        "examples": [
          {
            "arabic": "هُوَ بَيَّنَ أَمْسِ.",
            "translation": "O, dün aydınlaşdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يُبَيِّنُ",
        "translation": "aydınlaşdırır",
        "examples": [
          {
            "arabic": "هُوَ يُبَيِّنُ الآنَ.",
            "translation": "O, indi aydınlaşdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "بَيِّنْ",
        "translation": "aydınlaşdır!",
        "examples": [
          {
            "arabic": "بَيِّنْ.",
            "translation": "aydınlaşdır!"
          }
        ]
      }
    }
  },
  {
    "id": 960,
    "arabic": "أَوْضَحَ",
    "meaning": "izah etmək",
    "forms": {
      "past": {
        "arabic": "أَوْضَحَ",
        "translation": "izah etdi",
        "examples": [
          {
            "arabic": "هُوَ أَوْضَحَ أَمْسِ.",
            "translation": "O, dün izah etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُوَضِّحُ",
        "translation": "izah edir",
        "examples": [
          {
            "arabic": "هُوَ يُوَضِّحُ الآنَ.",
            "translation": "O, indi izah etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَوْضِحْ",
        "translation": "izah et!",
        "examples": [
          {
            "arabic": "أَوْضِحْ.",
            "translation": "izah et!"
          }
        ]
      }
    }
  },
  {
    "id": 961,
    "arabic": "تَرْجَمَ",
    "meaning": "tərcümə etmək",
    "forms": {
      "past": {
        "arabic": "تَرْجَمَ",
        "translation": "tərcümə etdi",
        "examples": [
          {
            "arabic": "هُوَ تَرْجَمَ أَمْسِ.",
            "translation": "O, dün tərcümə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُتَرْجِمُ",
        "translation": "tərcümə edir",
        "examples": [
          {
            "arabic": "هُوَ يُتَرْجِمُ الآنَ.",
            "translation": "O, indi tərcümə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَرْجِمْ",
        "translation": "tərcümə et!",
        "examples": [
          {
            "arabic": "تَرْجِمْ.",
            "translation": "tərcümə et!"
          }
        ]
      }
    }
  },
  {
    "id": 962,
    "arabic": "اِقْتَبَسَ",
    "meaning": "sitat gətirmək",
    "forms": {
      "past": {
        "arabic": "اِقْتَبَسَ",
        "translation": "sitat gətirdi",
        "examples": [
          {
            "arabic": "هُوَ اِقْتَبَسَ أَمْسِ.",
            "translation": "O, dün sitat gətirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَقْتَبِسُ",
        "translation": "sitat gətirir",
        "examples": [
          {
            "arabic": "هُوَ يَقْتَبِسُ الآنَ.",
            "translation": "O, indi sitat gətirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِقْتَبِسْ",
        "translation": "sitat gətir!",
        "examples": [
          {
            "arabic": "اِقْتَبِسْ.",
            "translation": "sitat gətir!"
          }
        ]
      }
    }
  },
  {
    "id": 963,
    "arabic": "صَفَرَ",
    "meaning": "fit çalmaq",
    "forms": {
      "past": {
        "arabic": "صَفَرَ",
        "translation": "fit çaldı",
        "examples": [
          {
            "arabic": "هُوَ صَفَرَ أَمْسِ.",
            "translation": "O, dünən fit çaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَصْفِرُ",
        "translation": "fit çalır",
        "examples": [
          {
            "arabic": "هُوَ يَصْفِرُ الآنَ.",
            "translation": "O, indi fit çalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِصْفِرْ",
        "translation": "fit çal!",
        "examples": [
          {
            "arabic": "اِصْفِرْ.",
            "translation": "fit çal!"
          }
        ]
      }
    }
  },
  {
    "id": 964,
    "arabic": "اِسْتَدَلَّ",
    "meaning": "dəlil gətirmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَدَلَّ",
        "translation": "dəlil gətirdi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَدَلَّ أَمْسِ.",
            "translation": "O, dün dəlil gətirdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَدِلُّ",
        "translation": "dəlil gətirir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَدِلُّ الآنَ.",
            "translation": "O, indi dəlil gətirir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَدِلَّ",
        "translation": "dəlil gətir!",
        "examples": [
          {
            "arabic": "اِسْتَدِلَّ.",
            "translation": "dəlil gətir!"
          }
        ]
      }
    }
  },
  {
    "id": 965,
    "arabic": "اِسْتَنْبَطَ",
    "meaning": "nəticə çıxarmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَنْبَطَ",
        "translation": "nəticə çıxarda",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَنْبَطَ أَمْسِ.",
            "translation": "O, dün nəticə çıxardı."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَنْبِطُ",
        "translation": "nəticə çıxarır",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَنْبِطُ الآنَ.",
            "translation": "O, indi nəticə çıxarır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَنْبِطْ",
        "translation": "nəticə çıxar!",
        "examples": [
          {
            "arabic": "اِسْتَنْبِطْ.",
            "translation": "nəticə çıxar!"
          }
        ]
      }
    }
  },
  {
    "id": 966,
    "arabic": "اِسْتَنْصَرَ",
    "meaning": "yardım istəmək",
    "forms": {
      "past": {
        "arabic": "اِسْتَنْصَرَ",
        "translation": "yardım istədi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَنْصَرَ أَمْسِ.",
            "translation": "O, dün yardım istədi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَنْصِرُ",
        "translation": "yardım istəir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَنْصِرُ الآنَ.",
            "translation": "O, indi yardım istəyir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَنْصِرْ",
        "translation": "yardım istə!",
        "examples": [
          {
            "arabic": "اِسْتَنْصِرْ.",
            "translation": "yardım istə!"
          }
        ]
      }
    }
  },
  {
    "id": 967,
    "arabic": "أَفْتَى",
    "meaning": "fətva vermək",
    "forms": {
      "past": {
        "arabic": "أَفْتَى",
        "translation": "fətva verda",
        "examples": [
          {
            "arabic": "هُوَ أَفْتَى أَمْسِ.",
            "translation": "O, dün fətva verdı."
          }
        ]
      },
      "present": {
        "arabic": "يُفْتِي",
        "translation": "fətva verır",
        "examples": [
          {
            "arabic": "هُوَ يُفْتِي الآنَ.",
            "translation": "O, indi fətva verır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَفْتِ",
        "translation": "fətva ver!",
        "examples": [
          {
            "arabic": "أَفْتِ.",
            "translation": "fətva ver!"
          }
        ]
      }
    }
  },
  {
    "id": 968,
    "arabic": "رَوَى",
    "meaning": "rəvayət etmək",
    "forms": {
      "past": {
        "arabic": "رَوَى",
        "translation": "rəvayət etdi",
        "examples": [
          {
            "arabic": "هُوَ رَوَى أَمْسِ.",
            "translation": "O, dün rəvayət etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْوِي",
        "translation": "rəvayət edir",
        "examples": [
          {
            "arabic": "هُوَ يَرْوِي الآنَ.",
            "translation": "O, indi rəvayət etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْوِ",
        "translation": "rəvayət et!",
        "examples": [
          {
            "arabic": "اِرْوِ.",
            "translation": "rəvayət et!"
          }
        ]
      }
    }
  },
  {
    "id": 969,
    "arabic": "سَرَدَ",
    "meaning": "nəql etmək",
    "forms": {
      "past": {
        "arabic": "سَرَدَ",
        "translation": "nəql etdi",
        "examples": [
          {
            "arabic": "هُوَ سَرَدَ أَمْسِ.",
            "translation": "O, dün nəql etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْرُدُ",
        "translation": "nəql edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْرُدُ الآنَ.",
            "translation": "O, indi nəql etir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْرُدْ",
        "translation": "nəql et!",
        "examples": [
          {
            "arabic": "اُسْرُدْ.",
            "translation": "nəql et!"
          }
        ]
      }
    }
  },
  {
    "id": 970,
    "arabic": "أَلَّفَ",
    "meaning": "tərtib etmək, yazmaq",
    "forms": {
      "past": {
        "arabic": "أَلَّفَ",
        "translation": "tərtib etmək, yazda",
        "examples": [
          {
            "arabic": "هُوَ أَلَّفَ أَمْسِ.",
            "translation": "O, dün tərtib etməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يُؤَلِّفُ",
        "translation": "tərtib etmək, yazır",
        "examples": [
          {
            "arabic": "هُوَ يُؤَلِّفُ الآنَ.",
            "translation": "O, indi tərtib etməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَلِّفْ",
        "translation": "tərtib etmək, yaz!",
        "examples": [
          {
            "arabic": "أَلِّفْ.",
            "translation": "tərtib etmək!"
          }
        ]
      }
    }
  },
  {
    "id": 971,
    "arabic": "دَوَّنَ",
    "meaning": "qeyd etmək",
    "forms": {
      "past": {
        "arabic": "دَوَّنَ",
        "translation": "qeyd etdi",
        "examples": [
          {
            "arabic": "هُوَ دَوَّنَ أَمْسِ.",
            "translation": "O, dün qeyd etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُدَوِّنُ",
        "translation": "qeyd edir",
        "examples": [
          {
            "arabic": "هُوَ يُدَوِّنُ الآنَ.",
            "translation": "O, indi qeyd etır."
          }
        ]
      },
      "imperative": {
        "arabic": "دَوِّنْ",
        "translation": "qeyd et!",
        "examples": [
          {
            "arabic": "دَوِّنْ.",
            "translation": "qeyd et!"
          }
        ]
      }
    }
  },
  {
    "id": 972,
    "arabic": "دَقَّقَ",
    "meaning": "dəqiqləşdirmək",
    "forms": {
      "past": {
        "arabic": "دَقَّقَ",
        "translation": "dəqiqləşdirdi",
        "examples": [
          {
            "arabic": "هُوَ دَقَّقَ أَمْسِ.",
            "translation": "O, dün dəqiqləşdirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُدَقِّقُ",
        "translation": "dəqiqləşdirir",
        "examples": [
          {
            "arabic": "هُوَ يُدَقِّقُ الآنَ.",
            "translation": "O, indi dəqiqləşdirir."
          }
        ]
      },
      "imperative": {
        "arabic": "دَقِّقْ",
        "translation": "dəqiqləşdir!",
        "examples": [
          {
            "arabic": "دَقِّقْ.",
            "translation": "dəqiqləşdir!"
          }
        ]
      }
    }
  },
  {
    "id": 973,
    "arabic": "قَيَّمَ",
    "meaning": "qiymətləndirmək",
    "forms": {
      "past": {
        "arabic": "قَيَّمَ",
        "translation": "qiymətləndirdi",
        "examples": [
          {
            "arabic": "هُوَ قَيَّمَ أَمْسِ.",
            "translation": "O, dün qiymətləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَيِّمُ",
        "translation": "qiymətləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُقَيِّمُ الآنَ.",
            "translation": "O, indi qiymətləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَيِّمْ",
        "translation": "qiymətləndir!",
        "examples": [
          {
            "arabic": "قَيِّمْ.",
            "translation": "qiymətləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 974,
    "arabic": "قَدَّرَ",
    "meaning": "qiymətləndirmək",
    "forms": {
      "past": {
        "arabic": "قَدَّرَ",
        "translation": "qiymətləndirdi",
        "examples": [
          {
            "arabic": "هُوَ قَدَّرَ أَمْسِ.",
            "translation": "O, dün qiymətləndirdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَدِّرُ",
        "translation": "qiymətləndirir",
        "examples": [
          {
            "arabic": "هُوَ يُقَدِّرُ الآنَ.",
            "translation": "O, indi qiymətləndirir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَدِّرْ",
        "translation": "qiymətləndir!",
        "examples": [
          {
            "arabic": "قَدِّرْ.",
            "translation": "qiymətləndir!"
          }
        ]
      }
    }
  },
  {
    "id": 975,
    "arabic": "قَيَّسَ",
    "meaning": "müqayisə etmək",
    "forms": {
      "past": {
        "arabic": "قَيَّسَ",
        "translation": "müqayisə etdi",
        "examples": [
          {
            "arabic": "هُوَ قَيَّسَ أَمْسِ.",
            "translation": "O, dün müqayisə etdi."
          }
        ]
      },
      "present": {
        "arabic": "يُقَيِّسُ",
        "translation": "müqayisə edir",
        "examples": [
          {
            "arabic": "هُوَ يُقَيِّسُ الآنَ.",
            "translation": "O, indi müqayisə etir."
          }
        ]
      },
      "imperative": {
        "arabic": "قَيِّسْ",
        "translation": "müqayisə et!",
        "examples": [
          {
            "arabic": "قَيِّسْ.",
            "translation": "müqayisə et!"
          }
        ]
      }
    }
  },
  {
    "id": 976,
    "arabic": "اِمْتَحَنَ",
    "meaning": "imtahan etmək",
    "forms": {
      "past": {
        "arabic": "اِمْتَحَنَ",
        "translation": "imtahan etdi",
        "examples": [
          {
            "arabic": "هُوَ اِمْتَحَنَ أَمْسِ.",
            "translation": "O, dün imtahan etdı."
          }
        ]
      },
      "present": {
        "arabic": "يَمْتَحِنُ",
        "translation": "imtahan edir",
        "examples": [
          {
            "arabic": "هُوَ يَمْتَحِنُ الآنَ.",
            "translation": "O, indi imtahan etır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِمْتَحِنْ",
        "translation": "imtahan et!",
        "examples": [
          {
            "arabic": "اِمْتَحِنْ.",
            "translation": "imtahan et!"
          }
        ]
      }
    }
  },
  {
    "id": 977,
    "arabic": "رَسَبَ",
    "meaning": "imtahandan kəsilmək",
    "forms": {
      "past": {
        "arabic": "رَسَبَ",
        "translation": "imtahandan kəsildi",
        "examples": [
          {
            "arabic": "هُوَ رَسَبَ أَمْسِ.",
            "translation": "O, dün imtahandan kəsildi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْسُبُ",
        "translation": "imtahandan kəsilir",
        "examples": [
          {
            "arabic": "هُوَ يَرْسُبُ الآنَ.",
            "translation": "O, indi imtahandan kəsilir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُرْسُبْ",
        "translation": "imtahandan kəsil!",
        "examples": [
          {
            "arabic": "اُرْسُبْ.",
            "translation": "imtahandan kəsil!"
          }
        ]
      }
    }
  },
  {
    "id": 978,
    "arabic": "حَسَمَ",
    "meaning": "qəti həll etmək",
    "forms": {
      "past": {
        "arabic": "حَسَمَ",
        "translation": "qəti həll etdi",
        "examples": [
          {
            "arabic": "هُوَ حَسَمَ أَمْسِ.",
            "translation": "O, dünən qəti həll etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَحْسِمُ",
        "translation": "qəti həll edir",
        "examples": [
          {
            "arabic": "هُوَ يَحْسِمُ الآنَ.",
            "translation": "O, indi qəti həll edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِحْسِمْ",
        "translation": "qəti həll et!",
        "examples": [
          {
            "arabic": "اِحْسِمْ.",
            "translation": "qəti həll et!"
          }
        ]
      }
    }
  },
  {
    "id": 979,
    "arabic": "فَقِهَ",
    "meaning": "dini dərindən anlamaq",
    "forms": {
      "past": {
        "arabic": "فَقِهَ",
        "translation": "dini dərindən anlada",
        "examples": [
          {
            "arabic": "هُوَ فَقِهَ أَمْسِ.",
            "translation": "O, dün dini dərindən anladı."
          }
        ]
      },
      "present": {
        "arabic": "يَفْقَهُ",
        "translation": "dini dərindən anlaır",
        "examples": [
          {
            "arabic": "هُوَ يَفْقَهُ الآنَ.",
            "translation": "O, indi dini dərindən anlayır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِفْقَهْ",
        "translation": "dini dərindən anla!",
        "examples": [
          {
            "arabic": "اِفْقَهْ.",
            "translation": "dini dərindən anla!"
          }
        ]
      }
    }
  },
  {
    "id": 980,
    "arabic": "اِسْتَظْهَرَ",
    "meaning": "əzbərdən demək",
    "forms": {
      "past": {
        "arabic": "اِسْتَظْهَرَ",
        "translation": "əzbərdən dedi",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَظْهَرَ أَمْسِ.",
            "translation": "O, dün əzbərdən dedi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَظْهِرُ",
        "translation": "əzbərdən deir",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَظْهِرُ الآنَ.",
            "translation": "O, indi əzbərdən deir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَظْهِرْ",
        "translation": "əzbərdən de!",
        "examples": [
          {
            "arabic": "اِسْتَظْهِرْ.",
            "translation": "əzbərdən de!"
          }
        ]
      }
    }
  },
  {
    "id": 981,
    "arabic": "تَلَقَّنَ",
    "meaning": "öyrənmək, təlqin almaq",
    "forms": {
      "past": {
        "arabic": "تَلَقَّنَ",
        "translation": "öyrənmək, təlqin alda",
        "examples": [
          {
            "arabic": "هُوَ تَلَقَّنَ أَمْسِ.",
            "translation": "O, dün öyrənməkdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَلَقَّنُ",
        "translation": "öyrənmək, təlqin alır",
        "examples": [
          {
            "arabic": "هُوَ يَتَلَقَّنُ الآنَ.",
            "translation": "O, indi öyrənməkir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَلَقَّنْ",
        "translation": "öyrənmək, təlqin al!",
        "examples": [
          {
            "arabic": "تَلَقَّنْ.",
            "translation": "öyrənmək!"
          }
        ]
      }
    }
  },
  {
    "id": 982,
    "arabic": "تَمَرَّنَ",
    "meaning": "məşq etmək",
    "forms": {
      "past": {
        "arabic": "تَمَرَّنَ",
        "translation": "məşq etdi",
        "examples": [
          {
            "arabic": "هُوَ تَمَرَّنَ أَمْسِ.",
            "translation": "O, dün məşq etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَتَمَرَّنُ",
        "translation": "məşq edir",
        "examples": [
          {
            "arabic": "هُوَ يَتَمَرَّنُ الآنَ.",
            "translation": "O, indi məşq etir."
          }
        ]
      },
      "imperative": {
        "arabic": "تَمَرَّنْ",
        "translation": "məşq et!",
        "examples": [
          {
            "arabic": "تَمَرَّنْ.",
            "translation": "məşq et!"
          }
        ]
      }
    }
  },
  {
    "id": 983,
    "arabic": "تَفَوَّقَ",
    "meaning": "üstün olmaq",
    "forms": {
      "past": {
        "arabic": "تَفَوَّقَ",
        "translation": "üstün oldu",
        "examples": [
          {
            "arabic": "هُوَ تَفَوَّقَ أَمْسِ.",
            "translation": "O, dün üstün oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَتَفَوَّقُ",
        "translation": "üstün olur",
        "examples": [
          {
            "arabic": "هُوَ يَتَفَوَّقُ الآنَ.",
            "translation": "O, indi üstün olur."
          }
        ]
      },
      "imperative": {
        "arabic": "تَفَوَّقْ",
        "translation": "üstün ol!",
        "examples": [
          {
            "arabic": "تَفَوَّقْ.",
            "translation": "üstün ol!"
          }
        ]
      }
    }
  },
  {
    "id": 984,
    "arabic": "سَجَنَ",
    "meaning": "həbs etmək",
    "forms": {
      "past": {
        "arabic": "سَجَنَ",
        "translation": "həbs etdi",
        "examples": [
          {
            "arabic": "هُوَ سَجَنَ أَمْسِ.",
            "translation": "O, dünən həbs etdi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْجُنُ",
        "translation": "həbs edir",
        "examples": [
          {
            "arabic": "هُوَ يَسْجُنُ الآنَ.",
            "translation": "O, indi həbs edir."
          }
        ]
      },
      "imperative": {
        "arabic": "اُسْجُنْ",
        "translation": "həbs et!",
        "examples": [
          {
            "arabic": "اُسْجُنْ.",
            "translation": "həbs et!"
          }
        ]
      }
    }
  },
  {
    "id": 985,
    "arabic": "سَمِنَ",
    "meaning": "kökəlmək",
    "forms": {
      "past": {
        "arabic": "سَمِنَ",
        "translation": "kökəldi",
        "examples": [
          {
            "arabic": "هُوَ سَمِنَ أَمْسِ.",
            "translation": "O, dünən kökəldi."
          }
        ]
      },
      "present": {
        "arabic": "يَسْمَنُ",
        "translation": "kökəlir",
        "examples": [
          {
            "arabic": "هُوَ يَسْمَنُ الآنَ.",
            "translation": "O, indi kökəlir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْمَنْ",
        "translation": "kökəl!",
        "examples": [
          {
            "arabic": "اِسْمَنْ.",
            "translation": "kökəl!"
          }
        ]
      }
    }
  },
  {
    "id": 986,
    "arabic": "لَبِثَ",
    "meaning": "qalmaq",
    "forms": {
      "past": {
        "arabic": "لَبِثَ",
        "translation": "qaldı",
        "examples": [
          {
            "arabic": "هُوَ لَبِثَ أَمْسِ.",
            "translation": "O, dünən qaldı."
          }
        ]
      },
      "present": {
        "arabic": "يَلْبَثُ",
        "translation": "qalır",
        "examples": [
          {
            "arabic": "هُوَ يَلْبَثُ الآنَ.",
            "translation": "O, indi qalır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِلْبَثْ",
        "translation": "qal!",
        "examples": [
          {
            "arabic": "اِلْبَثْ.",
            "translation": "qal!"
          }
        ]
      }
    }
  },
  {
    "id": 987,
    "arabic": "أَرَى",
    "meaning": "göstərmək",
    "forms": {
      "past": {
        "arabic": "أَرَى",
        "translation": "göstərdi",
        "examples": [
          {
            "arabic": "هُوَ أَرَى أَمْسِ.",
            "translation": "O, dün göstərdi."
          }
        ]
      },
      "present": {
        "arabic": "يُرِي",
        "translation": "göstərir",
        "examples": [
          {
            "arabic": "هُوَ يُرِي الآنَ.",
            "translation": "O, indi göstərir."
          }
        ]
      },
      "imperative": {
        "arabic": "أَرِ",
        "translation": "göstər!",
        "examples": [
          {
            "arabic": "أَرِ.",
            "translation": "göstər!"
          }
        ]
      }
    }
  },
  {
    "id": 988,
    "arabic": "عَطَسَ",
    "meaning": "asqırmaq",
    "forms": {
      "past": {
        "arabic": "عَطَسَ",
        "translation": "asqırdı",
        "examples": [
          {
            "arabic": "هُوَ عَطَسَ أَمْسِ.",
            "translation": "O, dünən asqırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَعْطِسُ",
        "translation": "asqırır",
        "examples": [
          {
            "arabic": "هُوَ يَعْطِسُ الآنَ.",
            "translation": "O, indi asqırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِعْطِسْ",
        "translation": "asqır!",
        "examples": [
          {
            "arabic": "اِعْطِسْ.",
            "translation": "asqır!"
          }
        ]
      }
    }
  },
  {
    "id": 989,
    "arabic": "أَعْلَمَ",
    "meaning": "xəbərdar etmək",
    "forms": {
      "past": {
        "arabic": "أَعْلَمَ",
        "translation": "xəbərdar etdi",
        "examples": [
          {
            "arabic": "هُوَ أَعْلَمَ أَمْسِ.",
            "translation": "O, dün xəbərdar etdı."
          }
        ]
      },
      "present": {
        "arabic": "يُعْلِمُ",
        "translation": "xəbərdar edir",
        "examples": [
          {
            "arabic": "هُوَ يُعْلِمُ الآنَ.",
            "translation": "O, indi xəbərdar etır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَعْلِمْ",
        "translation": "xəbərdar et!",
        "examples": [
          {
            "arabic": "أَعْلِمْ.",
            "translation": "xəbərdar et!"
          }
        ]
      }
    }
  },
  {
    "id": 990,
    "arabic": "زَحَمَ",
    "meaning": "sıxışdırmaq",
    "forms": {
      "past": {
        "arabic": "زَحَمَ",
        "translation": "sıxışdırdı",
        "examples": [
          {
            "arabic": "هُوَ زَحَمَ أَمْسِ.",
            "translation": "O, dünən sıxışdırdı."
          }
        ]
      },
      "present": {
        "arabic": "يَزْحَمُ",
        "translation": "sıxışdırır",
        "examples": [
          {
            "arabic": "هُوَ يَزْحَمُ الآنَ.",
            "translation": "O, indi sıxışdırır."
          }
        ]
      },
      "imperative": {
        "arabic": "اِزْحَمْ",
        "translation": "sıxışdır!",
        "examples": [
          {
            "arabic": "اِزْحَمْ.",
            "translation": "sıxışdır!"
          }
        ]
      }
    }
  },
  {
    "id": 991,
    "arabic": "رَسَخَ",
    "meaning": "möhkəmlənmək",
    "forms": {
      "past": {
        "arabic": "رَسَخَ",
        "translation": "möhkəmləndi",
        "examples": [
          {
            "arabic": "هُوَ رَسَخَ أَمْسِ.",
            "translation": "O, dünən möhkəmləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَرْسُخُ",
        "translation": "möhkəmlənir",
        "examples": [
          {
            "arabic": "هُوَ يَرْسُخُ الآنَ.",
            "translation": "O, indi möhkəmlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِرْسُخْ",
        "translation": "möhkəmlən!",
        "examples": [
          {
            "arabic": "اِرْسُخْ.",
            "translation": "möhkəmlən!"
          }
        ]
      }
    }
  },
  {
    "id": 992,
    "arabic": "أَنْسَى",
    "meaning": "unutdurmaq",
    "forms": {
      "past": {
        "arabic": "أَنْسَى",
        "translation": "unutdurdu",
        "examples": [
          {
            "arabic": "هُوَ أَنْسَى أَمْسِ.",
            "translation": "O, dün unutdurdu."
          }
        ]
      },
      "present": {
        "arabic": "يُنْسِي",
        "translation": "unutdurur",
        "examples": [
          {
            "arabic": "هُوَ يُنْسِي الآنَ.",
            "translation": "O, indi unutdurur."
          }
        ]
      },
      "imperative": {
        "arabic": "أَنْسِ",
        "translation": "unutdur!",
        "examples": [
          {
            "arabic": "أَنْسِ.",
            "translation": "unutdur!"
          }
        ]
      }
    }
  },
  {
    "id": 993,
    "arabic": "نَسَّى",
    "meaning": "unutdurmaq",
    "forms": {
      "past": {
        "arabic": "نَسَّى",
        "translation": "unutdurdu",
        "examples": [
          {
            "arabic": "هُوَ نَسَّى أَمْسِ.",
            "translation": "O, dün unutdurdu."
          }
        ]
      },
      "present": {
        "arabic": "يُنَسِّي",
        "translation": "unutdurur",
        "examples": [
          {
            "arabic": "هُوَ يُنَسِّي الآنَ.",
            "translation": "O, indi unutdurur."
          }
        ]
      },
      "imperative": {
        "arabic": "نَسِّ",
        "translation": "unutdur!",
        "examples": [
          {
            "arabic": "نَسِّ.",
            "translation": "unutdur!"
          }
        ]
      }
    }
  },
  {
    "id": 994,
    "arabic": "أَرْضَى",
    "meaning": "razı salmaq",
    "forms": {
      "past": {
        "arabic": "أَرْضَى",
        "translation": "razı salda",
        "examples": [
          {
            "arabic": "هُوَ أَرْضَى أَمْسِ.",
            "translation": "O, dün razı saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُرْضِي",
        "translation": "razı salır",
        "examples": [
          {
            "arabic": "هُوَ يُرْضِي الآنَ.",
            "translation": "O, indi razı salır."
          }
        ]
      },
      "imperative": {
        "arabic": "أَرْضِ",
        "translation": "razı sal!",
        "examples": [
          {
            "arabic": "أَرْضِ.",
            "translation": "razı sal!"
          }
        ]
      }
    }
  },
  {
    "id": 995,
    "arabic": "رَضَّى",
    "meaning": "razı salmaq",
    "forms": {
      "past": {
        "arabic": "رَضَّى",
        "translation": "razı salda",
        "examples": [
          {
            "arabic": "هُوَ رَضَّى أَمْسِ.",
            "translation": "O, dün razı saldı."
          }
        ]
      },
      "present": {
        "arabic": "يُرَضِّي",
        "translation": "razı salır",
        "examples": [
          {
            "arabic": "هُوَ يُرَضِّي الآنَ.",
            "translation": "O, indi razı salır."
          }
        ]
      },
      "imperative": {
        "arabic": "رَضِّ",
        "translation": "razı sal!",
        "examples": [
          {
            "arabic": "رَضِّ.",
            "translation": "razı sal!"
          }
        ]
      }
    }
  },
  {
    "id": 996,
    "arabic": "اِسْتَاءَ",
    "meaning": "narazı olmaq",
    "forms": {
      "past": {
        "arabic": "اِسْتَاءَ",
        "translation": "narazı oldu",
        "examples": [
          {
            "arabic": "هُوَ اِسْتَاءَ أَمْسِ.",
            "translation": "O, dün narazı oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَسْتَاءُ",
        "translation": "narazı olur",
        "examples": [
          {
            "arabic": "هُوَ يَسْتَاءُ الآنَ.",
            "translation": "O, indi narazı olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِسْتَأْ",
        "translation": "narazı ol!",
        "examples": [
          {
            "arabic": "اِسْتَأْ.",
            "translation": "narazı ol!"
          }
        ]
      }
    }
  },
  {
    "id": 997,
    "arabic": "سُرَّ",
    "meaning": "sevinmək",
    "forms": {
      "past": {
        "arabic": "سُرَّ",
        "translation": "sevindi",
        "examples": [
          {
            "arabic": "هُوَ سُرَّ أَمْسِ.",
            "translation": "O, dün sevindi."
          }
        ]
      },
      "present": {
        "arabic": "يُسَرُّ",
        "translation": "sevinir",
        "examples": [
          {
            "arabic": "هُوَ يُسَرُّ الآنَ.",
            "translation": "O, indi sevinir."
          }
        ]
      },
      "imperative": {
        "arabic": "—",
        "translation": "sevin!",
        "examples": [
          {
            "arabic": "—",
            "translation": "—"
          }
        ]
      }
    }
  },
  {
    "id": 998,
    "arabic": "اِطْمَأَنَّ",
    "meaning": "arxayın olmaq",
    "forms": {
      "past": {
        "arabic": "اِطْمَأَنَّ",
        "translation": "arxayın oldu",
        "examples": [
          {
            "arabic": "هُوَ اِطْمَأَنَّ أَمْسِ.",
            "translation": "O, dün arxayın oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَطْمَئِنُّ",
        "translation": "arxayın olur",
        "examples": [
          {
            "arabic": "هُوَ يَطْمَئِنُّ الآنَ.",
            "translation": "O, indi arxayın olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِطْمَئِنَّ",
        "translation": "arxayın ol!",
        "examples": [
          {
            "arabic": "اِطْمَئِنَّ.",
            "translation": "arxayın ol!"
          }
        ]
      }
    }
  },
  {
    "id": 999,
    "arabic": "اِنْزَعَجَ",
    "meaning": "narahat olmaq",
    "forms": {
      "past": {
        "arabic": "اِنْزَعَجَ",
        "translation": "narahat oldu",
        "examples": [
          {
            "arabic": "هُوَ اِنْزَعَجَ أَمْسِ.",
            "translation": "O, dün narahat oldu."
          }
        ]
      },
      "present": {
        "arabic": "يَنْزَعِجُ",
        "translation": "narahat olur",
        "examples": [
          {
            "arabic": "هُوَ يَنْزَعِجُ الآنَ.",
            "translation": "O, indi narahat olur."
          }
        ]
      },
      "imperative": {
        "arabic": "اِنْزَعِجْ",
        "translation": "narahat ol!",
        "examples": [
          {
            "arabic": "اِنْزَعِجْ.",
            "translation": "narahat ol!"
          }
        ]
      }
    }
  },
  {
    "id": 1000,
    "arabic": "اِكْتَأَبَ",
    "meaning": "kədərlənmək",
    "forms": {
      "past": {
        "arabic": "اِكْتَأَبَ",
        "translation": "kədərləndi",
        "examples": [
          {
            "arabic": "هُوَ اِكْتَأَبَ أَمْسِ.",
            "translation": "O, dün kədərləndi."
          }
        ]
      },
      "present": {
        "arabic": "يَكْتَئِبُ",
        "translation": "kədərlənir",
        "examples": [
          {
            "arabic": "هُوَ يَكْتَئِبُ الآنَ.",
            "translation": "O, indi kədərlənir."
          }
        ]
      },
      "imperative": {
        "arabic": "اِكْتَئِبْ",
        "translation": "kədərlən!",
        "examples": [
          {
            "arabic": "اِكْتَئِبْ.",
            "translation": "kədərlən!"
          }
        ]
      }
    }
  }
];

// Keep the learning IDs stable while replacing the remaining derived-form
// duplicates with unused, sound Form-I verbs.
const nibrasRemainingVerbReplacements = [
  [136, "خَدَشَ", "cızmaq", "cızdı", "يَخْدِشُ", "cızır", "اِخْدِشْ", "cız!"],
  [207, "زَرَقَ", "deşmək", "deşdi", "يَزْرُقُ", "deşir", "اُزْرُقْ", "deş!"],
  [374, "غَرَقَ", "batmaq", "batdı", "يَغْرَقُ", "batır", "اِغْرَقْ", "bat!"],
  [386, "كَشَرَ", "dişlərini göstərmək", "dişlərini göstərdi", "يَكْشِرُ", "dişlərini göstərir", "اِكْشِرْ", "dişlərini göstər!"],
  [624, "مَزَحَ", "zarafat etmək", "zarafat etdi", "يَمْزَحُ", "zarafat edir", "اِمْزَحْ", "zarafat et!"],
  [637, "نَجَسَ", "murdar olmaq", "murdar oldu", "يَنْجُسُ", "murdar olur", "اُنْجُسْ", "murdar ol!"],
  [644, "نَحَرَ", "qurban kəsmək", "qurban kəsdi", "يَنْحَرُ", "qurban kəsir", "اِنْحَرْ", "qurban kəs!"],
  [655, "رَمَقَ", "baxmaq", "baxdı", "يَرْمُقُ", "baxır", "اُرْمُقْ", "bax!"],
  [656, "رَهَنَ", "girov qoymaq", "girov qoydu", "يَرْهَنُ", "girov qoyur", "اِرْهَنْ", "girov qoy!"],
  [657, "شَرَفَ", "şərəfli olmaq", "şərəfli oldu", "يَشْرُفُ", "şərəfli olur", "اُشْرُفْ", "şərəfli ol!"],
  [670, "شَرَطَ", "şərt qoymaq", "şərt qoydu", "يَشْرُطُ", "şərt qoyur", "اِشْرُطْ", "şərt qoy!"],
  [677, "صَمَدَ", "müqavimət göstərmək", "müqavimət göstərdi", "يَصْمُدُ", "müqavimət göstərir", "اُصْمُدْ", "müqavimət göstər!"],
  [679, "ضَمَنَ", "zəmanət vermək", "zəmanət verdi", "يَضْمَنُ", "zəmanət verir", "اِضْمَنْ", "zəmanət ver!"],
  [692, "طَرَبَ", "şənlənmək", "şənləndi", "يَطْرَبُ", "şənlənir", "اِطْرَبْ", "şənlən!"],
  [693, "غَسَقَ", "qaralmaq", "qaraldı", "يَغْسِقُ", "qaralır", "اِغْسِقْ", "qaral!"],
  [697, "فَتَرَ", "səngimək", "səngidi", "يَفْتُرُ", "səngiyir", "اُفْتُرْ", "səng!"],
  [698, "قَلَقَ", "narahat etmək", "narahat etdi", "يَقْلَقُ", "narahat edir", "اِقْلَقْ", "narahat et!"],
  [702, "كَمَدَ", "kədərlənmək", "kədərləndi", "يَكْمَدُ", "kədərlənir", "اِكْمَدْ", "kədərlən!"],
  [710, "نَشَطَ", "fəallaşmaq", "fəallaşdı", "يَنْشَطُ", "fəallaşır", "اِنْشَطْ", "fəallaş!"],
  [711, "هَجَعَ", "yatmaq", "yatdı", "يَهْجَعُ", "yatır", "اِهْجَعْ", "yat!"],
  [712, "بَذَلَ", "sərf etmək", "sərf etdi", "يَبْذُلُ", "sərf edir", "اُبْذُلْ", "sərf et!"],
  [717, "بَشَرَ", "müjdə vermək", "müjdə verdi", "يَبْشِرُ", "müjdə verir", "اِبْشِرْ", "müjdə ver!"],
  [729, "بَصَقَ", "tüpürmək", "tüpürdü", "يَبْصُقُ", "tüpürür", "اُبْصُقْ", "tüpür!"],
  [731, "جَمَحَ", "coşmaq", "coşdu", "يَجْمَحُ", "coşur", "اِجْمَحْ", "coş!"],
  [734, "جَنَحَ", "meyl etmək", "meyl etdi", "يَجْنَحُ", "meyl edir", "اِجْنَحْ", "meyl et!"],
  [752, "جَزَمَ", "qəti qərar vermək", "qəti qərar verdi", "يَجْزِمُ", "qəti qərar verir", "اِجْزِمْ", "qəti qərar ver!"],
  [758, "خَرَبَ", "xarab etmək", "xarab etdi", "يَخْرَبُ", "xarab edir", "اِخْرَبْ", "xarab et!"],
  [761, "رَجَمَ", "daşlamaq", "daşladı", "يَرْجُمُ", "daşlayır", "اُرْجُمْ", "daşla!"],
  [766, "رَحَلَ", "yola düşmək", "yola düşdü", "يَرْحَلُ", "yola düşür", "اِرْحَلْ", "yola düş!"],
  [770, "رَخَصَ", "ucuz olmaq", "ucuz oldu", "يَرْخُصُ", "ucuz olur", "اُرْخُصْ", "ucuz ol!"],
  [771, "رَدَمَ", "doldurmaq", "doldurdu", "يَرْدِمُ", "doldurur", "اِرْدِمْ", "doldur!"],
  [783, "زَعَمَ", "iddia etmək", "iddia etdi", "يَزْعُمُ", "iddia edir", "اِزْعُمْ", "iddia et!"],
  [786, "زَلَجَ", "sürüşmək", "sürüşdü", "يَزْلَجُ", "sürüşür", "اِزْلَجْ", "sürüş!"],
  [792, "سَخِرَ", "lağ etmək", "lağ etdi", "يَسْخَرُ", "lağ edir", "اِسْخَرْ", "lağ et!"],
  [794, "سَطَعَ", "parlamaq", "parladı", "يَسْطَعُ", "parlayır", "اِسْطَعْ", "parla!"],
  [798, "سَطَرَ", "sətirə yazmaq", "sətirə yazdı", "يَسْطُرُ", "sətirə yazır", "اُسْطُرْ", "sətirə yaz!"],
  [804, "سَعَلَ", "öskürmək", "öskürdü", "يَسْعَلُ", "öskürür", "اِسْعَلْ", "öskür!"],
  [808, "سَعَرَ", "alovlandırmaq", "alovlandırdı", "يَسْعَرُ", "alovlandırır", "اِسْعَرْ", "alovlandır!"],
  [812, "سَمَرَ", "gecə söhbət etmək", "gecə söhbət etdi", "يَسْمُرُ", "gecə söhbət edir", "اِسْمُرْ", "gecə söhbət et!"],
  [815, "شَبَعَ", "doymaq", "doydu", "يَشْبَعُ", "doyur", "اِشْبَعْ", "doy!"],
  [816, "شَرَقَ", "şərqdən çıxmaq", "şərqdən çıxdı", "يَشْرُقُ", "şərqdən çıxır", "اُشْرُقْ", "şərqdən çıx!"],
  [819, "شَغَفَ", "vurulmaq", "vuruldu", "يَشْغَفُ", "vurulur", "اِشْغَفْ", "vurul!"],
  [824, "صَفَقَ", "əl çalmaq", "əl çaldı", "يَصْفِقُ", "əl çalır", "اِصْفِقْ", "əl çal!"],
  [826, "ضَبَطَ", "tənzimləmək", "tənzimlədi", "يَضْبِطُ", "tənzimləyir", "اِضْبِطْ", "tənzimlə!"],
  [827, "ضَمَرَ", "arıqlamaq", "arıqladı", "يَضْمُرُ", "arıqlayır", "اِضْمُرْ", "arıqla!"],
  [828, "ضَجَرَ", "bezmək", "bezdı", "يَضْجَرُ", "bezır", "اِضْجَرْ", "bez!"],
  [829, "طَرَحَ", "atmaq", "atdı", "يَطْرَحُ", "atır", "اِطْرَحْ", "at!"],
  [831, "طَعَنَ", "bıçaqlamaq", "bıçaqladı", "يَطْعَنُ", "bıçaqlayır", "اِطْعَنْ", "bıçaqla!"],
  [832, "طَمَعَ", "tamah salmaq", "tamah saldı", "يَطْمَعُ", "tamah salır", "اِطْمَعْ", "tamah sal!"],
  [834, "ظَفَرَ", "qalib gəlmək", "qalib gəldi", "يَظْفَرُ", "qalib gəlir", "اِظْفَرْ", "qalib gəl!"],
  [835, "ظَعَنَ", "köçmək", "köçdü", "يَظْعَنُ", "köçür", "اِظْعَنْ", "köç!"],
  [848, "عَزَمَ", "qərara gəlmək", "qərara gəldi", "يَعْزِمُ", "qərara gəlir", "اِعْزِمْ", "qərara gəl!"],
  [856, "عَطَفَ", "döndərmək", "döndərdi", "يَعْطِفُ", "döndərir", "اِعْطِفْ", "döndər!"],
  [864, "عَقَرَ", "yaralamaq", "yaraladı", "يَعْقِرُ", "yaralayır", "اِعْقِرْ", "yarala!"],
  [870, "عَكَسَ", "əks etdirmək", "əks etdirdi", "يَعْكِسُ", "əks etdirir", "اِعْكِسْ", "əks etdir!"],
  [875, "غَلَظَ", "qalınlaşmaq", "qalınlaşdı", "يَغْلُظُ", "qalınlaşır", "اُغْلُظْ", "qalınlaş!"],
  [888, "غَمَضَ", "gözünü yummaq", "gözünü yumdu", "يَغْمِضُ", "gözünü yumur", "اِغْمِضْ", "gözünü yum!"],
  [892, "غَنَمَ", "qazanmaq", "qazandı", "يَغْنَمُ", "qazanır", "اِغْنَمْ", "qazan!"],
  [897, "غَزَلَ", "əyirmək", "əyirdi", "يَغْزِلُ", "əyirir", "اِغْزِلْ", "əyir!"],
  [898, "فَجَرَ", "sübh açılmaq", "sübh açıldı", "يَفْجُرُ", "sübh açılır", "اُفْجُرْ", "sübh açıl!"],
  [919, "فَصَدَ", "qan almaq", "qan aldı", "يَفْصِدُ", "qan alır", "اِفْصِدْ", "qan al!"],
  [937, "فَصَحَ", "səlis danışmaq", "səlis danışdı", "يَفْصَحُ", "səlis danışır", "اِفْصَحْ", "səlis danış!"],
  [947, "فَضَحَ", "ifşa etmək", "ifşa etdi", "يَفْضَحُ", "ifşa edir", "اِفْضَحْ", "ifşa et!"],
  [948, "فَقَعَ", "partlamaq", "partladı", "يَفْقَعُ", "partlayır", "اِفْقَعْ", "partla!"],
  [951, "فَلَحَ", "uğur qazanmaq", "uğur qazandı", "يَفْلَحُ", "uğur qazanır", "اِفْلَحْ", "uğur qazan!"],
  [966, "قَبَحَ", "çirkin olmaq", "çirkin oldu", "يَقْبُحُ", "çirkin olur", "اُقْبُحْ", "çirkin ol!"],
  [974, "قَرَصَ", "çimdikləmək", "çimdiklədi", "يَقْرِصُ", "çimdikləyir", "اِقْرِصْ", "çimdiklə!"],
  [980, "قَضَمَ", "dişləmək", "dişlədi", "يَقْضِمُ", "dişləyir", "اِقْضِمْ", "dişlə!"],
  [989, "نَبَحَ", "hürmək", "hürdü", "يَنْبَحُ", "hürür", "اِنْبَحْ", "hür!"]
];

function nibrasBuildVerb([id, arabic, meaning, pastTranslation, presentArabic, presentTranslation, imperativeArabic, imperativeTranslation]) {
  return {
    id,
    arabic,
    meaning,
    forms: {
      past: {
        arabic,
        translation: pastTranslation,
        examples: [{ arabic: `هُوَ ${arabic} أَمْسِ.`, translation: `O, dünən ${pastTranslation}.` }]
      },
      present: {
        arabic: presentArabic,
        translation: presentTranslation,
        examples: [{ arabic: `هُوَ ${presentArabic} الآنَ.`, translation: `O, indi ${presentTranslation}.` }]
      },
      imperative: {
        arabic: imperativeArabic,
        translation: imperativeTranslation,
        examples: [{ arabic: `${imperativeArabic}.`, translation: `${imperativeTranslation}` }]
      }
    }
  };
}

// Yeni əsas kök feillər: ilk 50-lik sağlam kök paketi.
// Bu qeydlər mövcud törəmə formaların təkrarını yaratmır.
const nibrasFirstNewRootVerbs = [
  [1001, "بَخِلَ", "xəsislik etmək", "xəsislik etdi", "يَبْخَلُ", "xəsislik edir", "اِبْخَلْ", "xəsislik et!"],
  [1002, "بَرَزَ", "üzə çıxmaq", "üzə çıxdı", "يَبْرُزُ", "üzə çıxır", "اُبْرُزْ", "üzə çıx!"],
  [1003, "بَعَثَ", "göndərmək", "göndərdi", "يَبْعَثُ", "göndərir", "اِبْعَثْ", "göndər!"],
  [1004, "جَبَذَ", "çəkmək", "çəkdi", "يَجْبِذُ", "çəkir", "اِجْبِذْ", "çək!"],
  [1005, "جَلَبَ", "gətirmək", "gətirdi", "يَجْلِبُ", "gətirir", "اِجْلِبْ", "gətir!"],
  [1006, "حَجَبَ", "örtmək", "örtdü", "يَحْجُبُ", "örtür", "اُحْجُبْ", "ört!"],
  [1007, "خَبَرَ", "sınaqdan keçirmək", "sınaqdan keçirdi", "يَخْبُرُ", "sınaqdan keçirir", "اُخْبُرْ", "sınaqdan keçir!"],
  [1008, "خَلَصَ", "saflaşmaq", "saflaşdı", "يَخْلُصُ", "saflaşır", "اُخْلُصْ", "saflaş!"],
  [1009, "خَنَقَ", "boğmaq", "boğdu", "يَخْنُقُ", "boğur", "اُخْنُقْ", "boğ!"],
  [1010, "دَرَكَ", "yaxalamaq", "yaxaladı", "يَدْرُكُ", "yaxalayır", "اُدْرُكْ", "yaxala!"],
  [1011, "شَحَنَ", "yükləmək", "yüklədi", "يَشْحَنُ", "yükləyir", "اِشْحَنْ", "yüklə!"],
  [1012, "طَرَدَ", "qovmaq", "qovdu", "يَطْرُدُ", "qovur", "اُطْرُدْ", "qov!"],
  [1013, "سَلَبَ", "soymaq, məhrum etmək", "soydu, məhrum etdi", "يَسْلُبُ", "soyur, məhrum edir", "اِسْلُبْ", "soy, məhrum et!"],
  [1014, "سَلَكَ", "izləmək", "izlədi", "يَسْلُكُ", "izləyir", "اُسْلُكْ", "izlə!"],
  [1015, "سَنَدَ", "dəstəkləmək", "dəstəklədi", "يَسْنُدُ", "dəstəkləyir", "اُسْنُدْ", "dəstəklə!"],
  [1016, "سَهَرَ", "gecə oyaq qalmaq", "gecə oyaq qaldı", "يَسْهَرُ", "gecə oyaq qalır", "اِسْهَرْ", "gecə oyaq qal!"],
  [1017, "شَعَلَ", "yandırmaq", "yandırdı", "يَشْعَلُ", "yandırır", "اِشْعَلْ", "yandır!"],
  [1018, "شَمَتَ", "başqasının bədbəxtliyinə sevinmək", "başqasının bədbəxtliyinə sevindi", "يَشْمَتُ", "başqasının bədbəxtliyinə sevinir", "اِشْمَتْ", "başqasının bədbəxtliyinə sevin!"],
  [1019, "طَهَرَ", "təmizlənmək", "təmizləndi", "يَطْهُرُ", "təmizlənir", "اُطْهُرْ", "təmizlən!"],
  [1020, "عَرَقَ", "tərləmək", "tərlədi", "يَعْرَقُ", "tərləyir", "اِعْرَقْ", "tərlə!"],
  [1021, "عَزَلَ", "ayırmaq", "ayırdı", "يَعْزِلُ", "ayırır", "اِعْزِلْ", "ayır!"],
  [1022, "عَشِقَ", "vurulmaq, sevmək", "vuruldu, sevdi", "يَعْشَقُ", "vurulur, sevir", "اِعْشَقْ", "vurul, sev!"],
  [1023, "غَلَفَ", "örtmək", "örtdü", "يَغْلِفُ", "örtür", "اِغْلِفْ", "ört!"],
  [1024, "فَخَرَ", "fəxr etmək", "fəxr etdi", "يَفْخَرُ", "fəxr edir", "اِفْخَرْ", "fəxr et!"],
  [1025, "فَسَدَ", "korlanmaq", "korlandı", "يَفْسُدُ", "korlanır", "اُفْسُدْ", "korlan!"],
  [1026, "دَمَجَ", "birləşdirmək", "birləşdirdi", "يَدْمِجُ", "birləşdirir", "اِدْمِجْ", "birləşdir!"],
  [1027, "قَبَرَ", "dəfn etmək", "dəfn etdi", "يَقْبُرُ", "dəfn edir", "اِقْبُرْ", "dəfn et!"],
  [1028, "قَتَرَ", "qənaət etmək", "qənaət etdi", "يَقْتُرُ", "qənaət edir", "اِقْتُرْ", "qənaət et!"],
  [1029, "دَهَنَ", "boyamaq, yağlamaq", "boyadı, yağladı", "يَدْهَنُ", "boyayır, yağlayır", "اِدْهَنْ", "boya, yağla!"],
  [1030, "قَرَفَ", "iyrənmək", "iyrəndi", "يَقْرِفُ", "iyrənir", "اِقْرِفْ", "iyrən!"],
  [1031, "قَشَعَ", "dağıtmaq", "dağıtdı", "يَقْشَعُ", "dağıdır", "اِقْشَعْ", "dağıt!"],
  [1032, "كَدَحَ", "zəhmətlə işləmək", "zəhmətlə işlədi", "يَكْدَحُ", "zəhmətlə işləyir", "اِكْدَحْ", "zəhmətlə işlə!"],
  [1033, "كَنَزَ", "xəzinə toplamaq", "xəzinə topladı", "يَكْنِزُ", "xəzinə toplayır", "اِكْنِزْ", "xəzinə topla!"],
  [1034, "لَبَدَ", "yapışmaq, çökmək", "yapışdı, çökdü", "يَلْبُدُ", "yapışır, çökür", "اِلْبُدْ", "yapış, çökmüş qal!"],
  [1035, "لَحَظَ", "diqqətlə baxmaq", "diqqətlə baxdı", "يَلْحَظُ", "diqqətlə baxır", "اِلْحَظْ", "diqqətlə bax!"],
  [1036, "لَفَظَ", "tələffüz etmək", "tələffüz etdi", "يَلْفِظُ", "tələffüz edir", "اِلْفِظْ", "tələffüz et!"],
  [1037, "لَقَطَ", "yerdən götürmək", "yerdən götürdü", "يَلْقُطُ", "yerdən götürür", "اِلْقُطْ", "yerdən götür!"],
  [1038, "لَمَعَ", "parıldamaq", "parıldadı", "يَلْمَعُ", "parıldayır", "اِلْمَعْ", "parılda!"],
  [1039, "لَهَثَ", "təngnəfəs olmaq", "təngnəfəs oldu", "يَلْهَثُ", "təngnəfəs olur", "اِلْهَثْ", "təngnəfəs ol!"],
  [1040, "مَحَقَ", "silmək, yox etmək", "sildi, yox etdi", "يَمْحَقُ", "silir, yox edir", "اِمْحَقْ", "sil, yox et!"],
  [1041, "فَرَمَ", "qiymək", "qiymə çəkdi", "يَفْرُمُ", "qiymə çəkir", "اُفْرُمْ", "qiymə çək!"],
  [1042, "مَسَخَ", "şəklini dəyişdirmək", "şəklini dəyişdirdi", "يَمْسَخُ", "şəklini dəyişdirir", "اِمْسَخْ", "şəklini dəyişdir!"],
  [1043, "نَبَذَ", "rədd etmək", "rədd etdi", "يَنْبِذُ", "rədd edir", "اِنْبِذْ", "rədd et!"],
  [1044, "نَبَشَ", "qazıb çıxarmaq", "qazıb çıxardı", "يَنْبُشُ", "qazıb çıxarır", "اِنْبِشْ", "qazıb çıxar!"],
  [1045, "نَحَفَ", "arıqlamaq", "arıqladı", "يَنْحَفُ", "arıqlayır", "اِنْحَفْ", "arıqla!"],
  [1046, "نَدَبَ", "yas saxlamaq", "yas saxladı", "يَنْدُبُ", "yas saxlayır", "اُنْدُبْ", "yas saxla!"],
  [1047, "نَدِمَ", "peşman olmaq", "peşman oldu", "يَنْدَمُ", "peşman olur", "اِنْدَمْ", "peşman ol!"],
  [1048, "نَزَحَ", "uzaqlaşmaq", "uzaqlaşdı", "يَنْزَحُ", "uzaqlaşır", "اِنْزَحْ", "uzaqlaş!"],
  [1049, "نَشَقَ", "nəfəsə çəkmək", "nəfəsinə çəkdi", "يَنْشُقُ", "nəfəsinə çəkir", "اِنْشُقْ", "nəfəsinə çək!"],
  [1050, "مَزَقَ", "cırmaq", "cırdı", "يَمْزِقُ", "cırır", "اِمْزِقْ", "cır!"]
];

verbsData.push(...nibrasFirstNewRootVerbs.map(nibrasBuildVerb));

// Növbəti sağlam kök paketi.
const nibrasThirdNewRootVerbs = [
  [1076, "بَقَرَ", "yarmaq", "yardı", "يَبْقُرُ", "yarmış olur", "اُبْقُرْ", "yar!"],
  [1077, "بَهَرَ", "heyrətləndirmək", "heyrətləndirdi", "يَبْهَرُ", "heyrətləndirir", "اِبْهَرْ", "heyrətləndir!"],
  [1078, "بَهَتَ", "çaşdırmaq", "çaşdırdı", "يَبْهَتُ", "çaşdırır", "اِبْهَتْ", "çaşdır!"],
  [1079, "نَبَتَ", "bitmək, cücərmək", "bitdi, cücərdi", "يَنْبُتُ", "bitir, cücərir", "اُنْبُتْ", "bit, cücər!"],
  [1080, "ثَلَمَ", "çatlatmaq, dişini sındırmaq", "çatlatdı, dişini sındırdı", "يَثْلِمُ", "çatladır, dişini sındırır", "اِثْلِمْ", "çatlat, dişini sındır!"],
  [1081, "جَرَسَ", "zəng çalmaq", "zəng çaldı", "يَجْرُسُ", "zəng çalır", "اُجْرُسْ", "zəng çal!"],
  [1082, "جَسَدَ", "cisimləşdirmək", "cisimləşdirdi", "يَجْسُدُ", "cisimləşdirir", "اُجْسُدْ", "cisimləşdir!"],
  [1083, "جَسَرَ", "cəsarət etmək", "cəsarət etdi", "يَجْسُرُ", "cəsarət edir", "اُجْسُرْ", "cəsarət et!"],
  [1084, "جَلَفَ", "qoparmaq, soymaq", "qopardı, soydu", "يَجْلِفُ", "qoparır, soyur", "اِجْلِفْ", "qopar, soy!"],
  [1085, "جَهَرَ", "ucadan demək", "ucadan dedi", "يَجْهَرُ", "ucadan deyir", "اِجْهَرْ", "ucadan de!"],
  [1086, "حَجَرَ", "qadağan etmək", "qadağan etdi", "يَحْجُرُ", "qadağan edir", "اُحْجُرْ", "qadağan et!"],
  [1087, "حَدَرَ", "aşağı enmək", "aşağı endi", "يَحْدُرُ", "aşağı enir", "اُحْدُرْ", "aşağı en!"],
  [1088, "حَطَمَ", "əzib sındırmaq", "əzib sındırdı", "يَحْطِمُ", "əzib sındırır", "اِحْطِمْ", "əzib sındır!"],
  [1089, "خَدَعَ", "aldatmaq", "aldatdı", "يَخْدَعُ", "aldadır", "اِخْدَعْ", "aldat!"],
  [1090, "خَرَسَ", "lal olmaq", "lal oldu", "يَخْرَسُ", "lal olur", "اِخْرَسْ", "lal ol!"],
  [1091, "خَشَنَ", "kobudlaşdırmaq", "kobudlaşdırdı", "يَخْشُنُ", "kobudlaşdırır", "اُخْشُنْ", "kobudlaşdır!"],
  [1092, "خَضَمَ", "dişləmək", "dişlədi", "يَخْضِمُ", "dişləyir", "اِخْضِمْ", "dişlə!"],
  [1093, "خَلَدَ", "qalmaq", "qaldı", "يَخْلُدُ", "qalır", "اُخْلُدْ", "qal!"],
  [1094, "خَمَدَ", "sönmək", "söndü", "يَخْمُدُ", "sönür", "اُخْمُدْ", "sön!"],
  [1095, "خَمَرَ", "örtmək", "örtdü", "يَخْمُرُ", "örtür", "اُخْمُرْ", "ört!"],
  [1096, "دَبَغَ", "dəri aşılamaq", "dəri aşıladı", "يَدْبُغُ", "dəri aşılayır", "اُدْبُغْ", "dəri aşıla!"],
  [1097, "دَحَضَ", "təkzib etmək", "təkzib etdi", "يَدْحَضُ", "təkzib edir", "اِدْحَضْ", "təkzib et!"],
  [1098, "دَحَرَ", "qovub çıxarmaq", "qovub çıxardı", "يَدْحَرُ", "qovub çıxarır", "اِدْحَرْ", "qovub çıxar!"],
  [1099, "دَفَقَ", "axıtmaq", "axıtdı", "يَدْفُقُ", "axıdır", "اُدْفُقْ", "axıt!"],
  [1100, "دَلَكَ", "sürtmək", "sürtdü", "يَدْلُكُ", "sürtür", "اُدْلُكْ", "sürt!"],
  [1101, "دَلَفَ", "irəliləmək", "irəlilədi", "يَدْلِفُ", "irəliləyir", "اِدْلِفْ", "irəlilə!"],
  [1102, "دَمَرَ", "dağıtmaq", "dağıtdı", "يَدْمُرُ", "dağıdır", "اُدْمُرْ", "dağıt!"],
  [1103, "دَمَسَ", "gizlətmək", "gizlətdi", "يَدْمِسُ", "gizlədir", "اِدْمِسْ", "gizlət!"],
  [1104, "دَنَسَ", "çirkləndirmək", "çirkləndirdi", "يَدْنَسُ", "çirkləndirir", "اِدْنَسْ", "çirkləndir!"],
  [1105, "ذَرَفَ", "göz yaşı axıtmaq", "göz yaşı axıtdı", "يَذْرِفُ", "göz yaşı axıdır", "اِذْرِفْ", "göz yaşı axıt!"],
  [1106, "ذَعَرَ", "qorxutmaq", "qorxutdu", "يَذْعَرُ", "qorxudur", "اِذْعَرْ", "qorxut!"],
  [1107, "زَبَدَ", "köpüklənmək", "köpükləndi", "يَزْبُدُ", "köpüklənir", "اُزْبُدْ", "köpüklən!"],
  [1108, "زَمَرَ", "tütək çalmaq", "tütək çaldı", "يَزْمُرُ", "tütək çalır", "اُزْمُرْ", "tütək çal!"],
  [1109, "زَمَنَ", "xroniki olmaq", "xroniki oldu", "يَزْمَنُ", "xroniki olur", "اِزْمَنْ", "xroniki ol!"],
  [1110, "سَجَمَ", "axıtmaq", "axıtdı", "يَسْجُمُ", "axıdır", "اُسْجُمْ", "axıt!"],
  [1111, "سَحَرَ", "sehrləmək", "sehrlədi", "يَسْحَرُ", "sehrləyir", "اِسْحَرْ", "sehrlə!"],
  [1112, "سَرَبَ", "sızmaq, axmaq", "sızdı, axdı", "يَسْرُبُ", "sızır, axır", "اُسْرُبْ", "sız, ax!"],
  [1113, "سَرَحَ", "buraxmaq, sərbəst gəzmək", "buraxdı, sərbəst gəzdi", "يَسْرَحُ", "buraxır, sərbəst gəzir", "اِسْرَحْ", "burax, sərbəst gəz!"],
  [1114, "سَفَكَ", "qan tökmək", "qan tökdü", "يَسْفِكُ", "qan tökür", "اِسْفِكْ", "qan tök!"],
  [1115, "سَنَحَ", "baş vermək, fürsət yaranmaq", "baş verdi, fürsət yarandı", "يَسْنَحُ", "baş verir, fürsət yaranır", "اِسْنَحْ", "baş ver, fürsət yarat!"],
  [1116, "شَحَبَ", "solğunlaşmaq", "solğunlaşdı", "يَشْحَبُ", "solğunlaşır", "اِشْحَبْ", "solğunlaş!"],
  [1117, "شَمَلَ", "əhatə etmək", "əhatə etdi", "يَشْمَلُ", "əhatə edir", "اِشْمَلْ", "əhatə et!"],
  [1118, "شَنَقَ", "asıb öldürmək", "asıb öldürdü", "يَشْنُقُ", "asıb öldürür", "اِشْنُقْ", "asıb öldür!"],
  [1119, "شَهِقَ", "nəfəsi içinə çəkmək", "nəfəsini içinə çəkdi", "يَشْهَقُ", "nəfəsini içinə çəkir", "اِشْهَقْ", "nəfəsini içinə çək!"],
  [1120, "شَهَرَ", "elan etmək, tanıtmaq", "elan etdi, tanıtdı", "يَشْهَرُ", "elan edir, tanıdır", "اِشْهَرْ", "elan et, tanıt!"],
  [1121, "صَهَرَ", "əridib birləşdirmək", "əridib birləşdirdi", "يَصْهَرُ", "əridib birləşdirir", "اِصْهَرْ", "əridib birləşdir!"],
  [1122, "صَهَلَ", "kişnəmək", "kişnədi", "يَصْهَلُ", "kişnəyir", "اِصْهَلْ", "kişnə!"],
  [1123, "ضَمَدَ", "sarğı qoymaq", "sarğı qoydu", "يَضْمِدُ", "sarğı qoyur", "اِضْمِدْ", "sarğı qoy!"],
  [1124, "طَفَحَ", "daşmaq", "daşdı", "يَطْفَحُ", "daşır", "اِطْفَحْ", "daş!"],
  [1125, "طَمَسَ", "silmək, izini yox etmək", "sildi, izini yox etdi", "يَطْمِسُ", "silir, izini yox edir", "اِطْمِسْ", "sil, izini yox et!"]
];

verbsData.push(...nibrasThirdNewRootVerbs.map(nibrasBuildVerb));

// İkinci mərhələ: yeni həmzəli və zəif köklər.
const nibrasSecondNewWeakHamzatedVerbs = [
  [1051, "وَثَبَ", "sıçramaq", "sıçradı", "يَثِبُ", "sıçrayır", "ثِبْ", "sıçra!"],
  [1052, "وَرَدَ", "daxil olmaq, çatmaq", "daxil oldu, çatdı", "يَرِدُ", "daxil olur, çatır", "اِرِدْ", "daxil ol, çat!"],
  [1053, "وَهَنَ", "zəifləmək", "zəiflədi", "يَهِنُ", "zəifləyir", "اِهِنْ", "zəiflə!"],
  [1054, "وَزَنَ", "çəkmək, ölçmək", "çəkdi, ölçdü", "يَزِنُ", "çəkir, ölçür", "زِنْ", "çək, ölç!"],
  [1055, "يَقِظَ", "oyaq olmaq", "oyaq oldu", "يَيْقَظُ", "oyaq olur", "اِيقَظْ", "oyaq ol!"],
  [1056, "حَلَا", "şirin olmaq", "şirin oldu", "يَحْلُو", "şirin olur", "اُحْلُ", "şirin ol!"],
  [1057, "كَوَى", "yandırıb müalicə etmək", "yandırıb müalicə etdi", "يَكْوِي", "yandırıb müalicə edir", "اِكْوِ", "yandırıb müalicə et!"],
  [1058, "لَوَى", "burmaq", "burdu", "يَلْوِي", "burur", "اِلْوِ", "bur!"],
  [1059, "نَوَى", "niyyət etmək", "niyyət etdi", "يَنْوِي", "niyyət edir", "اِنْوِ", "niyyət et!"],
  [1060, "غَزَا", "basqın etmək", "basqın etdi", "يَغْزُو", "basqın edir", "اُغْزُ", "basqın et!"],
  [1061, "دَنَا", "yaxınlaşmaq", "yaxınlaşdı", "يَدْنُو", "yaxınlaşır", "اُدْنُ", "yaxınlaş!"],
  [1062, "قَضَى", "bitirmək, hökm vermək", "bitirdi, hökm verdi", "يَقْضِي", "bitirir, hökm verir", "اِقْضِ", "bitir, hökm ver!"],
  [1063, "سَعَى", "çalışmaq, səy göstərmək", "çalışdı, səy göstərdi", "يَسْعَى", "çalışır, səy göstərir", "اِسْعَ", "çalış, səy göstər!"],
  [1064, "نَشَأَ", "böyümək, yaranmaq", "böyüdü, yarandı", "يَنْشَأُ", "böyüyür, yaranır", "اِنْشَأْ", "böyü, yaran!"],
  [1065, "لَجَأَ", "sığınmaq", "sığındı", "يَلْجَأُ", "sığınır", "اِلْجَأْ", "sığın!"],
  [1066, "سَئِمَ", "bezmək", "bezdi", "يَسْأَمُ", "bezir", "اِسْأَمْ", "bez!"],
  [1067, "ظَمِئَ", "susamaq", "susadı", "يَظْمَأُ", "susayır", "اِظْمَأْ", "susa!"],
  [1068, "جَزَأَ", "bölmək", "böldü", "يَجْزَأُ", "bölür", "اِجْزَأْ", "böl!"],
  [1069, "بَرِئَ", "sağalmaq, azad olmaq", "sağaldı, azad oldu", "يَبْرَأُ", "sağalır, azad olur", "اِبْرَأْ", "sağal, azad ol!"],
  [1070, "خَطِئَ", "səhv etmək", "səhv etdi", "يَخْطَأُ", "səhv edir", "اِخْطَأْ", "səhv et!"],
  [1071, "لَؤُمَ", "alçaq xasiyyətli olmaq", "alçaq xasiyyətli oldu", "يَلْؤُمُ", "alçaq xasiyyətli olur", "اُلْؤُمْ", "alçaq xasiyyətli ol!"],
  [1072, "جَرُؤَ", "cəsarət etmək", "cəsarət etdi", "يَجْرُؤُ", "cəsarət edir", "اِجْرُؤْ", "cəsarət et!"],
  [1073, "أَسِفَ", "təəssüflənmək", "təəssüfləndi", "يَأْسَفُ", "təəssüflənir", "اِئْسَفْ", "təəssüflən!"],
  [1074, "أَمِلَ", "ümid etmək", "ümid etdi", "يَأْمَلُ", "ümid edir", "اِئْمَلْ", "ümid et!"],
  [1075, "نَأَى", "uzaqlaşmaq", "uzaqlaşdı", "يَنْأَى", "uzaqlaşır", "اِنْأَ", "uzaqlaş!"]
];

verbsData.push(...nibrasSecondNewWeakHamzatedVerbs.map(nibrasBuildVerb));

for (const replacement of nibrasRemainingVerbReplacements) {
  const target = verbsData.find(verb => verb.id === replacement[0]);
  if (target) Object.assign(target, nibrasBuildVerb(replacement));
}

// Form tərcümələrində məsdər qalıqları və avtomatik şəkilçi xətaları üçün
// təsdiqlənmiş düzəlişlər. Nümunələr də eyni tərcümədən yenidən qurulur.
const nibrasFormTranslationCorrections = {
  490: { past: 'çevrildi, oldu', present: 'çevrilir, olur', imperative: 'çevril, ol!' },
  491: { past: 'oldu, səhər oldu', present: 'olur, səhər olur', imperative: 'ol, səhər ol!' },
  611: { past: 'çıxardı, nəticə əldə etdi', present: 'çıxarır, nəticə əldə edir', imperative: 'çıxar, nəticə əldə et!' },
  623: { past: 'böyüdü, tərbiyə aldı', present: 'böyüyür, tərbiyə alır', imperative: 'böyü, tərbiyə al!' },
  629: { past: 'xütbə söylədi, elçi getdi', present: 'xütbə söyləyir, elçi gedir', imperative: 'xütbə söylə, elçi get!' },
  666: { past: 'geri aldı, bərpa etdi', present: 'geri alır, bərpa edir', imperative: 'geri al, bərpa et!' },
  672: { past: 'tapdı, büdrədi', present: 'tapır, büdrəyir', imperative: 'tap, büdrə!' },
  681: { past: 'yaratdı, qurdu', present: 'yaradır, qurur', imperative: 'yarat, qur!' },
  722: { past: 'həyata keçirdi, araşdırdı', present: 'həyata keçirir, araşdırır', imperative: 'həyata keçir, araşdır!' },
  760: { past: 'izlədi, qeydə aldı', present: 'izləyir, qeydə alır', imperative: 'izlə, qeydə al!' },
  768: { past: 'bildirdi, göstərdi', present: 'bildirir, göstərir', imperative: 'bildir, göstər!' },
  769: { past: 'açdı, üzə çıxardı', present: 'açır, üzə çıxarır', imperative: 'aç, üzə çıxar!' },
  775: { past: 'bərabər oldu, düzəldi', present: 'bərabər olur, düzəlir', imperative: 'bərabər ol, düzəl!' },
  795: { past: 'müayinə etdi, yoxladı', present: 'müayinə edir, yoxlayır', imperative: 'müayinə et, yoxla!' },
  838: { past: 'sezdi, gördü', present: 'sezir, görür', imperative: 'sez, gör!' },
  862: { past: 'axtarıb yoxladı', present: 'axtarıb yoxlayır', imperative: 'axtarıb yoxla!' },
  905: { past: 'döndü, sapdı', present: 'dönür, sapır', imperative: 'dön, sap!' },
  909: { past: 'hazırladı, zəmin yaratdı', present: 'hazırlayır, zəmin yaradır', imperative: 'hazırla, zəmin yarat!' },
  913: { past: 'ayırdı, təyin etdi', present: 'ayırır, təyin edir', imperative: 'ayır, təyin et!' },
  915: { past: 'təyin olundu, lazım oldu', present: 'təyin olunur, lazım olur', imperative: 'təyin olun, lazım ol!' },
  916: { past: 'aid oldu, ixtisaslaşdı', present: 'aid olur, ixtisaslaşır', imperative: 'aid ol, ixtisaslaş!' },
  917: { past: 'iştirak etdi, abunə oldu', present: 'iştirak edir, abunə olur', imperative: 'iştirak et, abunə ol!' },
  936: { past: 'tamamladı, aldı', present: 'tamamlayır, alır', imperative: 'tamamla, al!' },
  944: { past: 'saxladı, həbs etdi', present: 'saxlayır, həbs edir', imperative: 'saxla, həbs et!' },
  970: { past: 'tərtib etdi, yazdı', present: 'tərtib edir, yazır', imperative: 'tərtib et, yaz!' },
  981: { past: 'öyrəndi, təlqin aldı', present: 'öyrənir, təlqin alır', imperative: 'öyrən, təlqin al!' }
};

for (const verb of verbsData) {
  const corrections = nibrasFormTranslationCorrections[verb.id];
  if (!corrections) continue;
  for (const [kind, translation] of Object.entries(corrections)) {
    const form = verb.forms?.[kind];
    if (!form) continue;
    form.translation = translation;
    const action = translation.split(',').pop().trim();
    for (const example of form.examples || []) {
      example.translation = kind === 'past'
        ? `O, dünən ${action}.`
        : kind === 'present'
          ? `O, indi ${action}.`
          : action;
    }
  }
}

// Birinci mərhələ: 1–100 aralığındakı törəmə formaları kök qeydləri ilə
// əvəz edirik. Törəmə formanın özü silinmir; uyğun kökün bab metadata-sında
// saxlanılır və istifadəçiyə həmin bab kartında göstərilir.
const nibrasPromotedDerivedBabEntries = [
  { root: 'سفر', bab: 'III', arabic: 'سَافَرَ', meaning: 'səyahət etmək' },
  { root: 'نظف', bab: 'II', arabic: 'نَظَّفَ', meaning: 'təmizləmək' },
  { root: 'صلو', bab: 'II', arabic: 'صَلَّى', meaning: 'namaz qılmaq' },
  { root: 'شري', bab: 'VIII', arabic: 'اِشْتَرَى', meaning: 'almaq (satın almaq)' },
  { root: 'كلم', bab: 'V', arabic: 'تَكَلَّمَ', meaning: 'danışmaq' },
  { root: 'جوب', bab: 'IV', arabic: 'أَجَابَ', meaning: 'cavab vermək' },
  { root: 'وضؤ', bab: 'V', arabic: 'تَوَضَّأَ', meaning: 'dəstəmaz almaq' },
  { root: 'دبر', bab: 'V', arabic: 'تَدَبَّرَ', meaning: 'təfəkkür etmək' },
  { root: 'علم', bab: 'V', arabic: 'تَعَلَّمَ', meaning: 'öyrənmək' },
  { root: 'علم', bab: 'II', arabic: 'عَلَّمَ', meaning: 'öyrətmək' },
  { root: 'سعد', bab: 'III', arabic: 'سَاعَدَ', meaning: 'kömək etmək' },
  { root: 'صدق', bab: 'V', arabic: 'تَصَدَّقَ', meaning: 'sədəqə vermək' },
  { root: 'نفق', bab: 'IV', arabic: 'أَنْفَقَ', meaning: 'xərcləmək (Allah yolunda)' },
  { root: 'جنب', bab: 'VIII', arabic: 'اِجْتَنَبَ', meaning: 'çəkinmək, uzaq durmaq' },
  { root: 'وفي', bab: 'IV', arabic: 'أَوْفَى', meaning: 'vəfa etmək, yerinə yetirmək' },
  { root: 'بشر', bab: 'II', arabic: 'بَشَّرَ', meaning: 'müjdələmək' },
  { root: 'حذر', bab: 'II', arabic: 'حَذَّرَ', meaning: 'xəbərdarlıq etmək' },
  { root: 'وكل', bab: 'V', arabic: 'تَوَكَّلَ', meaning: 'təvəkkül etmək' },
  { root: 'طوع', bab: 'IV', arabic: 'أَطَاعَ', meaning: 'itaət etmək' },
  { root: 'حبب', bab: 'IV', arabic: 'أَحَبَّ', meaning: 'sevmək' },
  { root: 'عهد', bab: 'III', arabic: 'عَاهَدَ', meaning: 'əhd etmək, sözləşmək' },
  { root: 'عون', bab: 'X', arabic: 'اِسْتَعَانَ', meaning: 'kömək istəmək' },
  { root: 'جهد', bab: 'VIII', arabic: 'اِجْتَهَدَ', meaning: 'səy göstərmək' },
  { root: 'وسل', bab: 'V', arabic: 'تَوَسَّلَ', meaning: 'vəsilə etmək, yaxınlaşmaq' },
  { root: 'لزم', bab: 'VIII', arabic: 'اِلْتَزَمَ', meaning: 'bağlı qalmaq, riayət etmək' },
  { root: 'قوم', bab: 'X', arabic: 'اِسْتَقَامَ', meaning: 'düz yolda olmaq, istiqamət sahibi olmaq' },
  { root: 'برز', bab: 'IV', arabic: 'أَبْرَزَ', meaning: 'önə çıxarmaq, göstərmək' },
  { root: 'بعث', bab: 'IV', arabic: 'أَبْعَثَ', meaning: 'göndərmək' },
  { root: 'جلب', bab: 'X', arabic: 'اِسْتَجْلَبَ', meaning: 'cəlb etmək' },
  { root: 'حجب', bab: 'II', arabic: 'حَجَّبَ', meaning: 'örtmək, hicablandırmaq' },
  { root: 'حجب', bab: 'V', arabic: 'تَحَجَّبَ', meaning: 'hicablanmaq, örtünmək' },
  { root: 'حجب', bab: 'VIII', arabic: 'اِحْتَجَبَ', meaning: 'gizlənmək, pərdələnmək' },
  { root: 'خلص', bab: 'II', arabic: 'خَلَّصَ', meaning: 'xilas etmək' },
  { root: 'خلص', bab: 'IV', arabic: 'أَخْلَصَ', meaning: 'səmimi olmaq, həsr etmək' },
  { root: 'خلص', bab: 'V', arabic: 'تَخَلَّصَ', meaning: 'qurtulmaq' },
  { root: 'خنق', bab: 'VIII', arabic: 'اِخْتَنَقَ', meaning: 'boğulmaq' },
  { root: 'درك', bab: 'IV', arabic: 'أَدْرَكَ', meaning: 'dərk etmək, çatmaq' },
  { root: 'درك', bab: 'VI', arabic: 'تَدَارَكَ', meaning: 'düzəltmək, vaxtında çatmaq' },
  { root: 'درك', bab: 'X', arabic: 'اِسْتَدْرَكَ', meaning: 'düzəliş etmək' },
  { root: 'شعل', bab: 'IV', arabic: 'أَشْعَلَ', meaning: 'yandırmaq' },
  { root: 'سند', bab: 'IV', arabic: 'أَسْنَدَ', meaning: 'söykəndirmək, aid etmək' },
  { root: 'سند', bab: 'VIII', arabic: 'اِسْتَنَدَ', meaning: 'söykənmək' },
  { root: 'طهر', bab: 'II', arabic: 'طَهَّرَ', meaning: 'təmizləmək' },
  { root: 'طهر', bab: 'V', arabic: 'تَطَهَّرَ', meaning: 'təmizlənmək' },
  { root: 'فخر', bab: 'III', arabic: 'فَاخَرَ', meaning: 'öyünmək, yarışmaq' },
  { root: 'فخر', bab: 'VIII', arabic: 'اِفْتَخَرَ', meaning: 'fəxr etmək' },
  { root: 'فسد', bab: 'IV', arabic: 'أَفْسَدَ', meaning: 'korlamaq' },
  { root: 'لقط', bab: 'VIII', arabic: 'اِلْتَقَطَ', meaning: 'götürmək, yerdən qaldırmaq' },
  { root: 'ندم', bab: 'II', arabic: 'نَدَّمَ', meaning: 'peşman etmək' },
  { root: 'ندم', bab: 'V', arabic: 'تَنَدَّمَ', meaning: 'peşman olmaq' },
  { root: 'نشق', bab: 'X', arabic: 'اِسْتَنْشَقَ', meaning: 'nəfəsinə çəkmək' }
];

const nibrasFirstHundredRootPromotions = [
  [22, ['سَفَرَ', 'üzə çıxarmaq, açmaq', 'üzə çıxardı / açdı', 'يَسْفِرُ', 'üzə çıxarır / açır', 'اِسْفِرْ', 'üzə çıxar! / aç!']],
  [36, ['نَظُفَ', 'təmiz olmaq', 'təmiz oldu', 'يَنْظُفُ', 'təmiz olur', 'اُنْظُفْ', 'təmiz ol!']],
  [37, ['صَلَا', 'yanmaq, odda qızarmaq', 'yandı / odda qızardı', 'يَصْلَى', 'yanır / odda qızarır', 'اِصْلَ', 'yan!']],
  [41, ['شَرَى', 'satmaq', 'satdı', 'يَشْرِي', 'satır', 'اِشْرِ', 'sat!']],
  [45, ['كَلَمَ', 'yaralamaq', 'yaraladı', 'يَكْلِمُ', 'yaralayır', 'اِكْلِمْ', 'yarala!']],
  [48, ['جَابَ', 'keçmək, yarmaq', 'keçdi / yardı', 'يَجُوبُ', 'keçir / dolaşır', 'جُبْ', 'keç!']],
  [60, ['وَضُؤَ', 'təmiz və gözəl olmaq', 'təmiz və gözəl oldu', 'يَوْضُؤُ', 'təmiz və gözəl olur', 'اِوْضُؤْ', 'təmiz ol!']],
  [64, ['دَبَرَ', 'arxasınca getmək, idarə etmək', 'arxasınca getdi / idarə etdi', 'يَدْبُرُ', 'arxasınca gedir / idarə edir', 'اُدْبُرْ', 'arxasınca get!']],
  [65, 675],
  [66, 675],
  [70, ['سَعِدَ', 'xoşbəxt olmaq', 'xoşbəxt oldu', 'يَسْعَدُ', 'xoşbəxt olur', 'اِسْعَدْ', 'xoşbəxt ol!']],
  [71, 52],
  [72, ['نَفَقَ', 'keçmək, tuneldən keçmək', 'keçdi', 'يَنْفُقُ', 'keçir', 'اُنْفُقْ', 'keç!']],
  [75, ['جَنَبَ', 'yan keçmək, uzaqlaşdırmaq', 'yan keçdi / uzaqlaşdırdı', 'يَجْنُبُ', 'yan keçir / uzaqlaşdırır', 'اِجْنُبْ', 'yan keç!']],
  [80, ['وَفَى', 'vəfa etmək, yerinə yetirmək', 'vəfa etdi', 'يَفِي', 'vəfa edir', 'فِ', 'vəfa et!']],
  [81, 717],
  [82, 730],
  [84, ['وَكَلَ', 'tapşırmaq, həvalə etmək', 'tapşırdı / həvalə etdi', 'يَكِلُ', 'tapşırır / həvalə edir', 'كِلْ', 'tapşır!']],
  [86, ['طَاعَ', 'itaət etmək', 'itaət etdi', 'يَطِيعُ', 'itaət edir', 'أَطِعْ', 'itaət et!']],
  [90, ['حَبَّ', 'sevmək', 'sevdi', 'يَحِبُّ', 'sevir', 'حِبَّ', 'sev!']],
  [92, ['عَهَدَ', 'əhd etmək, öhdəsinə götürmək', 'əhd etdi / öhdəsinə götürdü', 'يَعْهَدُ', 'əhd edir / öhdəsinə götürür', 'اِعْهَدْ', 'əhd et!']],
  [93, ['عَانَ', 'kömək etmək', 'kömək etdi', 'يَعِينُ', 'kömək edir', 'أَعِنْ', 'kömək et!']],
  [94, ['جَهَدَ', 'səy göstərmək', 'səy göstərdi', 'يَجْهَدُ', 'səy göstərir', 'اِجْهَدْ', 'səy göstər!']],
  [95, ['وَسَلَ', 'yaxınlaşmaq, vəsilə etmək', 'yaxınlaşdı / vəsilə etdi', 'يَسِلُ', 'yaxınlaşır / vəsilə edir', 'اِسِلْ', 'yaxınlaş!']],
  [97, ['لَزِمَ', 'bağlı qalmaq', 'bağlı qaldı', 'يَلْزَمُ', 'bağlı qalır', 'اِلْزَمْ', 'bağlı qal!']],
  [98, 19]
];

const nibrasPromotedRootIds = new Set(nibrasFirstHundredRootPromotions.map(([id]) => id));
for (const [targetId, source] of nibrasFirstHundredRootPromotions) {
  const target = verbsData.find(verb => verb.id === targetId);
  if (!target) continue;
  if (typeof source === 'number') {
    const root = verbsData.find(verb => verb.id === source);
    if (root) Object.assign(target, JSON.parse(JSON.stringify(root)), { id: targetId });
  } else {
    Object.assign(target, nibrasBuildVerb([targetId, ...source]));
  }
}

// Kökü artıq ilk 100-ə keçirilmiş qeydlərin sonrakı dublikatlarını yeni,
// ayrıca kök feillərlə dəyişirik. Bu, öyrənmə hovuzunda eyni kökün iki kartını
// saxlamamağa və bütün ID-lərin sayını qorumağa imkan verir.
const nibrasDuplicateRootSlotReplacements = [
  [19, ['قَرُبَ', 'yaxınlaşmaq', 'yaxınlaşdı', 'يَقْرُبُ', 'yaxınlaşır', 'اِقْرُبْ', 'yaxınlaş!']],
  [52, ['كَبُرَ', 'böyük olmaq', 'böyük oldu', 'يَكْبُرُ', 'böyük olur', 'اُكْبُرْ', 'böyük ol!']],
  [66, ['صَغُرَ', 'kiçik olmaq', 'kiçik oldu', 'يَصْغُرُ', 'kiçik olur', 'اِصْغُرْ', 'kiçik ol!']],
  [465, ['عَدَلَ', 'ədalətli olmaq, düzəltmək', 'ədalətli oldu / düzəltdi', 'يَعْدِلُ', 'ədalətli olur / düzəldir', 'اِعْدِلْ', 'ədalətli ol / düzəlt!']],
  [675, ['رَفَقَ', 'mülayim davranmaq', 'mülayim davrandı', 'يَرْفُقُ', 'mülayim davranır', 'اِرْفُقْ', 'mülayim davran!']],
  [717, ['عَجِبَ', 'təəccüblənmək', 'təəccübləndi', 'يَعْجَبُ', 'təəccüblənir', 'اِعْجَبْ', 'təəccüblən!']],
  [730, ['خَجِلَ', 'utanmaq', 'utandı', 'يَخْجَلُ', 'utanır', 'اِخْجَلْ', 'utan!']],
];
for (const [targetId, replacement] of nibrasDuplicateRootSlotReplacements) {
  const target = verbsData.find(verb => verb.id === targetId);
  if (target) Object.assign(target, nibrasBuildVerb([targetId, ...replacement]));
}

// Feil olmayan ifadələr ayrıca kök dərsi kimi saxlanmır. Onların tam
// kontekstini mövcud kök feil nümunələrinə keçiririk.
const nibrasFirstHundredPhraseLinks = [
  [63, 2],
  [73, 38]
];
for (const [phraseId, rootId] of nibrasFirstHundredPhraseLinks) {
  const phrase = verbsData.find(verb => verb.id === phraseId);
  const root = verbsData.find(verb => verb.id === rootId);
  if (!phrase || !root) continue;
  for (const formKey of ['past', 'present', 'imperative']) {
    const phraseForm = phrase.forms?.[formKey];
    const rootForm = root.forms?.[formKey];
    const example = phraseForm?.examples?.[0];
    if (!rootForm || !example) continue;
    rootForm.examples = rootForm.examples || [];
    if (!rootForm.examples.some(item => item.arabic === example.arabic)) {
      rootForm.examples.push({ ...example });
    }
  }
}

// İkinci mərhələ: 101–200 aralığındakı törəmə feil və ifadələr.
const nibrasSecondHundredDerivedBabEntries = [
  { root: 'زوج', bab: 'V', arabic: 'تَزَوَّجَ', meaning: 'evlənmək' },
  { root: 'طلق', bab: 'II', arabic: 'طَلَّقَ', meaning: 'boşamaq' },
  { root: 'ربو', bab: 'II', arabic: 'رَبَّى', meaning: 'tərbiyə etmək' },
  { root: 'سهم', bab: 'III', arabic: 'سَاهَمَ', meaning: 'iştirak etmək, pay almaq' },
  { root: 'بدر', bab: 'III', arabic: 'بَادَرَ', meaning: 'təşəbbüs göstərmək, önə keçmək' },
  { root: 'أخر', bab: 'V', arabic: 'تَأَخَّرَ', meaning: 'gecikmək' },
  { root: 'قدم', bab: 'V', arabic: 'تَقَدَّمَ', meaning: 'irəli getmək, tərəqqi etmək' },
  { root: 'همم', bab: 'VIII', arabic: 'اِهْتَمَّ', meaning: 'maraqlanmaq, diqqət yetirmək' },
  { root: 'أدب', bab: 'V', arabic: 'تَأَدَّبَ', meaning: 'ədəb öyrənmək, ədəbli olmaq' },
  { root: 'شجع', bab: 'II', arabic: 'شَجَّعَ', meaning: 'təşviq etmək, ruhlandırmaq' },
  { root: 'وقر', bab: 'II', arabic: 'وَقَّرَ', meaning: 'ehtiram etmək, hörmət göstərmək' },
  { root: 'حرم', bab: 'VIII', arabic: 'اِحْتَرَمَ', meaning: 'ehtiram etmək, sayğı göstərmək' },
  { root: 'كرم', bab: 'IV', arabic: 'أَكْرَمَ', meaning: 'ehtiram etmək, ikram göstərmək' },
  { root: 'صحب', bab: 'III', arabic: 'صَاحَبَ', meaning: 'yoldaş olmaq, dostluq etmək' },
  { root: 'فرق', bab: 'V', arabic: 'تَفَرَّقَ', meaning: 'dağılmaq, ayrılmaq' },
  { root: 'عون', bab: 'VI', arabic: 'تَعَاوَنَ', meaning: 'əməkdaşlıq etmək, bir-birinə kömək etmək' },
  { root: 'فرق', bab: 'VIII', arabic: 'اِفْتَرَقَ', meaning: 'ayrılmaq, ayrı düşmək' },
  { root: 'خصم', bab: 'VIII', arabic: 'اِخْتَصَمَ', meaning: 'mübahisə etmək, çəkişmək' },
  { root: 'شور', bab: 'X', arabic: 'اِسْتَشَارَ', meaning: 'məsləhət almaq, məşvərət etmək' },
  { root: 'شور', bab: 'IV', arabic: 'أَشَارَ', meaning: 'işarə etmək, göstərmək' },
  { root: 'ودع', bab: 'II', arabic: 'وَدَّعَ', meaning: 'vidalaşmaq, uğurlamaq' },
  { root: 'سلم', bab: 'II', arabic: 'سَلَّمَ', meaning: 'salam vermək, təslim etmək' },
  { root: 'عنق', bab: 'III', arabic: 'عَانَقَ', meaning: 'qucaqlaşmaq' },
  { root: 'ضيف', bab: 'X', arabic: 'اِسْتَضَافَ', meaning: 'qonaq etmək' },
  { root: 'طعم', bab: 'IV', arabic: 'أَطْعَمَ', meaning: 'yedirtmək, yemək vermək' },
  { root: 'شغل', bab: 'VIII', arabic: 'اِشْتَغَلَ', meaning: 'məşğul olmaq, işləmək' },
  { root: 'ندو', bab: 'III', arabic: 'نَادَى', meaning: 'çağırmaq, səsləmək' },
  { root: 'نذر', bab: 'IV', arabic: 'أَنْذَرَ', meaning: 'xəbərdarlıq etmək, qorxutmaq' },
  { root: 'بلغ', bab: 'II', arabic: 'بَلَّغَ', meaning: 'çatdırmaq, təbliğ etmək' },
  { root: 'دول', bab: 'VI', arabic: 'تَدَاوَلَ', meaning: 'müzakirə etmək, danışmaq' },
  { root: 'دلل', bab: 'X', arabic: 'اِسْتَدَلَّ', meaning: 'dəlil gətirmək, sübut etmək' },
  { root: 'سأل', bab: 'VI', arabic: 'تَسَاءَلَ', meaning: 'soruşmaq, sual vermək' },
  { root: 'فسر', bab: 'X', arabic: 'اِسْتَفْسَرَ', meaning: 'izah istəmək, aydınlaşdırmaq' },
  { root: 'شرك', bab: 'IV', arabic: 'أَشْرَكَ', meaning: 'şirk qoşmaq' },
  { root: 'وحد', bab: 'V', arabic: 'تَوَحَّدَ', meaning: 'təvhid etmək, birliyini tanımaq' },
  { root: 'خلف', bab: 'VIII', arabic: 'اِخْتَلَفَ', meaning: 'ixtilaf etmək, fərqli olmaq' },
  { root: 'وفق', bab: 'VIII', arabic: 'اِتَّفَقَ', meaning: 'razılaşmaq, ittifaq etmək' },
  { root: 'ثبت', bab: 'II', arabic: 'ثَبَّتَ', meaning: 'möhkəmləndirmək, sabitləşdirmək' },
  { root: 'هدي', bab: 'VIII', arabic: 'اِهْتَدَى', meaning: 'hidayət olmaq, doğru yolu tapmaq' },
  { root: 'عذر', bab: 'VIII', arabic: 'اِعْتَذَرَ', meaning: 'üzr istəmək' },
  { root: 'عزو', bab: 'II', arabic: 'عَزَّى', meaning: 'başsağlığı vermək' },
  { root: 'عمر', bab: 'II', arabic: 'عَمَّرَ', meaning: 'tikmək, abadlaşdırmaq, uzun ömür yaşatmaq' },
  { root: 'خلف', bab: 'IV', arabic: 'أَخْلَفَ', meaning: 'vədinə xilaf çıxmaq, sözünü tutmamaq' },
  { root: 'قرض', bab: 'X', arabic: 'اِسْتَقْرَضَ', meaning: 'borc almaq' },
  { root: 'قرض', bab: 'IV', arabic: 'أَقْرَضَ', meaning: 'borc vermək' },
  { root: 'وفي', bab: 'II', arabic: 'وَفَّى', meaning: 'ödəmək, tam yerinə yetirmək' },
  { root: 'تجر', bab: 'VIII', arabic: 'اِتَّجَرَ', meaning: 'ticarət etmək' },
  { root: 'وكل', bab: 'II', arabic: 'وَكَّلَ', meaning: 'vəkil etmək, tapşırmaq' },
  { root: 'أجر', bab: 'X', arabic: 'اِسْتَأْجَرَ', meaning: 'kirayə götürmək, işə almaq' },
  { root: 'أجر', bab: 'II', arabic: 'أَجَّرَ', meaning: 'kirayə vermək' },
  { root: 'ثمر', bab: 'X', arabic: 'اِسْتَثْمَرَ', meaning: 'sərmayə qoymaq, istifadə etmək' },
  { root: 'ذخر', bab: 'VIII', arabic: 'اِدَّخَرَ', meaning: 'yığmaq, qənaət etmək' },
  { root: 'غلو', bab: 'X', arabic: 'اِسْتَغْلَى', meaning: 'bahalı saymaq, baha qiymətləndirmək' },
  { root: 'حيي', bab: 'X', arabic: 'اِسْتَحْيَا', meaning: 'utanmaq, həya etmək' },
  { root: 'حشم', bab: 'VIII', arabic: 'اِحْتَشَمَ', meaning: 'həyalı olmaq, örtünmək' },
  { root: 'وقي', bab: 'VIII', arabic: 'اِتَّقَى', meaning: 'təqvalı olmaq, qorunmaq' },
  { root: 'خير', bab: 'X', arabic: 'اِسْتَخَارَ', meaning: 'xeyir diləmək (istixarə etmək)' },
  { root: 'خير', bab: 'VIII', arabic: 'اِخْتَارَ', meaning: 'seçmək' }
];

const nibrasSecondHundredRootPromotions = [
  [101, ['زَوَجَ', 'cütləşdirmək, qoşmaq', 'cütləşdirdi / qoşdu', 'يَزْوِجُ', 'cütləşdirir / qoşur', 'اِزْوِجْ', 'cütləşdir!']],
  [102, ['طَلَقَ', 'azad buraxmaq', 'azad buraxdı', 'يَطْلُقُ', 'azad buraxır', 'اِطْلُقْ', 'azad burax!']],
  [103, ['رَبَا', 'artmaq, böyümək', 'artdı / böyüdü', 'يَرْبُو', 'artır / böyüyür', 'اِرْبُ', 'art!']],
  [110, ['سَهَمَ', 'pay almaq, iştirak etmək', 'pay aldı / iştirak etdi', 'يَسْهَمُ', 'pay alır / iştirak edir', 'اِسْهَمْ', 'iştirak et!']],
  [111, ['بَدَرَ', 'önə keçmək, tələsmək', 'önə keçdi / tələsdi', 'يَبْدُرُ', 'önə keçir / tələsir', 'اُبْدُرْ', 'önə keç!']],
  [112, ['أَخَرَ', 'gecikmək, arxada qalmaq', 'gecikdi', 'يَأْخُرُ', 'gecikir', 'اُؤْخُرْ', 'gecik!']],
  [113, ['قَدِمَ', 'gəlmək, varmaq', 'gəldi / vardı', 'يَقْدَمُ', 'gəlir / varır', 'اِقْدَمْ', 'irəli gəl!']],
  [115, ['هَمَّ', 'niyyət etmək, qayğılanmaq', 'niyyət etdi / qayğılandı', 'يَهُمُّ', 'niyyət edir / qayğılanır', 'هِمَّ', 'niyyət et!']],
  [116, ['أَدُبَ', 'ədəbli olmaq', 'ədəbli oldu', 'يَأْدُبُ', 'ədəbli olur', 'اُؤْدُبْ', 'ədəbli ol!']],
  [117, ['شَجُعَ', 'cəsur olmaq', 'cəsur oldu', 'يَشْجُعُ', 'cəsur olur', 'اُشْجُعْ', 'cəsur ol!']],
  [121, ['وَقُرَ', 'vüqarlı olmaq', 'vüqarlı oldu', 'يَوْقُرُ', 'vüqarlı olur', 'اُوْقُرْ', 'vüqarlı ol!']],
  [122, ['حَرُمَ', 'qadağan olmaq', 'qadağan oldu', 'يَحْرُمُ', 'qadağan olur', 'اُحْرُمْ', 'qadağan ol!']],
  [123, ['كَرُمَ', 'səxavətli olmaq', 'səxavətli oldu', 'يَكْرُمُ', 'səxavətli olur', 'اُكْرُمْ', 'səxavətli ol!']],
  [125, ['صَحِبَ', 'yoldaşlıq etmək', 'yoldaşlıq etdi', 'يَصْحَبُ', 'yoldaşlıq edir', 'اِصْحَبْ', 'yoldaşlıq et!']],
  [127, ['فَرَقَ', 'ayırmaq', 'ayırdı', 'يَفْرُقُ', 'ayırır', 'اُفْرُقْ', 'ayır!']],
  [128, ['حَذِقَ', 'bacarıqlı olmaq', 'bacarıqlı oldu', 'يَحْذَقُ', 'bacarıqlı olur', 'اِحْذَقْ', 'bacarıqlı ol!']],
  [129, ['خَفُتَ', 'zəifləmək, sakitləşmək', 'zəiflədi / sakitləşdi', 'يَخْفُتُ', 'zəifləyir / sakitləşir', 'اِخْفُتْ', 'sakitləş!']],
  [131, ['خَصَمَ', 'mübahisə etmək', 'mübahisə etdi', 'يَخْصِمُ', 'mübahisə edir', 'اِخْصِمْ', 'mübahisə et!']],
  [132, ['شَارَ', 'məsləhətləşmək, işarə etmək', 'məsləhətləşdi / işarə etdi', 'يَشِيرُ', 'məsləhətləşir / işarə edir', 'أَشِرْ', 'işarə et!']],
  [133, ['جَمُلَ', 'gözəl olmaq', 'gözəl oldu', 'يَجْمُلُ', 'gözəl olur', 'اُجْمُلْ', 'gözəl ol!']],
  [135, 813],
  [137, ['سَلِمَ', 'salamat olmaq', 'salamat oldu', 'يَسْلَمُ', 'salamat olur', 'اِسْلَمْ', 'salamat ol!']],
  [139, ['عَنَقَ', 'qucaq açmaq', 'qucaq açdı', 'يَعْنُقُ', 'qucaq açır', 'اِعْنُقْ', 'qucaq aç!']],
  [140, ['ضَافَ', 'qonaq olmaq, qonaq etmək', 'qonaq oldu / qonaq etdi', 'يَضِيفُ', 'qonaq olur / qonaq edir', 'ضِفْ', 'qonaq ol!']],
  [141, ['طَعِمَ', 'dadmaq, yemək', 'dadı / yedi', 'يَطْعَمُ', 'dadır / yeyir', 'اِطْعَمْ', 'dad!']],
  [143, ['شَغَلَ', 'məşğul etmək', 'məşğul etdi', 'يَشْغَلُ', 'məşğul edir', 'اِشْغَلْ', 'məşğul et!']],
  [149, ['نَدَا', 'səxavətli olmaq, nəmlənmək', 'səxavətli oldu / nəmləndi', 'يَنْدُو', 'səxavətli olur / nəmlənir', 'اُنْدُ', 'səxavətli ol!']],
  [151, ['نَذَرَ', 'nəzir etmək, xəbərdar etmək', 'nəzir etdi / xəbərdar etdi', 'يَنْذُرُ', 'nəzir edir / xəbərdar edir', 'اُنْذُرْ', 'xəbərdar et!']],
  [152, 229],
  [153, ['دَالَ', 'növbələşmək, dövr etmək', 'növbələşdi / dövr etdi', 'يَدُولُ', 'növbələşir / dövr edir', 'دُلْ', 'növbələş!']],
  [154, ['دَلَّ', 'dəlalət etmək, göstərmək', 'göstərdi', 'يَدُلُّ', 'göstərir', 'دُلَّ', 'göstər!']],
  [156, 47],
  [157, ['فَسَرَ', 'izah etmək', 'izah etdi', 'يَفْسِرُ', 'izah edir', 'اِفْسِرْ', 'izah et!']],
  [162, ['شَرِكَ', 'şərik olmaq', 'şərik oldu', 'يَشْرَكُ', 'şərik olur', 'اِشْرَكْ', 'şərik ol!']],
  [163, ['وَحَدَ', 'tək olmaq, birləşmək', 'tək oldu / birləşdi', 'يَحِدُ', 'tək olur / birləşir', 'حِدْ', 'tək ol!']],
  [164, ['خَلَفَ', 'ardınca gəlmək, əvəz etmək', 'ardınca gəldi / əvəz etdi', 'يَخْلُفُ', 'ardınca gəlir / əvəz edir', 'اِخْلُفْ', 'əvəz et!']],
  [165, ['وَفَقَ', 'uyğun gəlmək', 'uyğun gəldi', 'يَفِقُ', 'uyğun gəlir', 'فِقْ', 'uyğun gəl!']],
  [167, 240],
  [168, 551],
  [173, ['عَذَرَ', 'üzrlü saymaq', 'üzrlü saydı', 'يَعْذِرُ', 'üzrlü sayır', 'اِعْذِرْ', 'üzrlü say!']],
  [175, ['عَزَا', 'aid etmək, təsəlli vermək', 'aid etdi / təsəlli verdi', 'يَعْزُو', 'aid edir / təsəlli verir', 'اِعْزُ', 'aid et!']],
  [177, ['عَمَرَ', 'abadlaşdırmaq, məskunlaşdırmaq', 'abadlaşdırdı / məskunlaşdırdı', 'يَعْمُرُ', 'abadlaşdırır / məskunlaşdırır', 'اُعْمُرْ', 'abadlaşdır!']],
  [181, ['ظَرُفَ', 'zərif və bacarıqlı olmaq', 'zərif və bacarıqlı oldu', 'يَظْرُفُ', 'zərif və bacarıqlı olur', 'اِظْرُفْ', 'zərif ol!']],
  [182, ['قَرَضَ', 'kəsmək, borc vermək', 'kəsdi / borc verdi', 'يَقْرِضُ', 'kəsir / borc verir', 'اِقْرِضْ', 'borc ver!']],
  [183, ['بَطُؤَ', 'yavaş olmaq', 'yavaş oldu', 'يَبْطُؤُ', 'yavaş olur', 'اِبْطُؤْ', 'yavaş ol!']],
  [184, ['وَرِثَ', 'miras almaq', 'miras aldı', 'يَرِثُ', 'miras alır', 'اِرِثْ', 'miras al!']],
  [185, ['تَجَرَ', 'ticarət etmək', 'ticarət etdi', 'يَتْجُرُ', 'ticarət edir', 'اِتْجُرْ', 'ticarət et!']],
  [187, ['جَمُدَ', 'möhkəm və donuq olmaq', 'möhkəm və donuq oldu', 'يَجْمُدُ', 'möhkəm və donuq olur', 'اُجْمُدْ', 'möhkəm ol!']],
  [189, ['أَجَرَ', 'icarəyə vermək, mükafatlandırmaq', 'icarəyə verdi / mükafatlandırdı', 'يَأْجُرُ', 'icarəyə verir / mükafatlandırır', 'آجِرْ', 'icarəyə ver!']],
  [190, ['وَرَعَ', 'pəhrizkar olmaq, çəkinmək', 'pəhrizkar oldu / çəkindi', 'يَرَعُ', 'pəhrizkar olur / çəkinir', 'اِرَعْ', 'çəkin!']],
  [191, ['ثَمَرَ', 'bəhrə vermək', 'bəhrə verdi', 'يَثْمُرُ', 'bəhrə verir', 'اُثْمُرْ', 'bəhrə ver!']],
  [192, ['ذَخَرَ', 'yığmaq, saxlamaq', 'yığdı / saxladı', 'يَذْخَرُ', 'yığır / saxlayır', 'اِذْخَرْ', 'yığ!']],
  [193, 479],
  [195, ['حَيِيَ', 'utanmaq, həyalı olmaq', 'utandı / həyalı oldu', 'يَحْيَا', 'utanır / həyalı olur', 'اِحْيَ', 'həyalı ol!']],
  [196, ['حَشِمَ', 'utanmaq, həya etmək', 'utandı / həya etdi', 'يَحْشَمُ', 'utanır / həya edir', 'اِحْشَمْ', 'həya et!']],
  [197, ['وَقَى', 'qorumaq', 'qorudu', 'يَقِي', 'qoruyur', 'قِ', 'qoru!']],
  [198, ['خَارَ', 'seçmək, xeyir diləmək', 'seçdi / xeyir dilədi', 'يَخِيرُ', 'seçir / xeyir diləyir', 'خِرْ', 'seç!']],
  [200, ['وَهَبَ', 'hədiyyə etmək, bağışlamaq', 'hədiyyə etdi / bağışladı', 'يَهَبُ', 'hədiyyə edir / bağışlayır', 'هَبْ', 'hədiyyə et!']]
];

for (const [targetId] of nibrasSecondHundredRootPromotions) {
  nibrasPromotedRootIds.add(targetId);
}
for (const [targetId, source] of nibrasSecondHundredRootPromotions) {
  const target = verbsData.find(verb => verb.id === targetId);
  if (!target) continue;
  if (typeof source === 'number') {
    const root = verbsData.find(verb => verb.id === source);
    if (root) Object.assign(target, JSON.parse(JSON.stringify(root)), { id: targetId });
  } else {
    Object.assign(target, nibrasBuildVerb([targetId, ...source]));
  }
}
nibrasPromotedDerivedBabEntries.push(...nibrasSecondHundredDerivedBabEntries);

// Bab köçürülməsi nəticəsində eyni kökün sonrakı dublikatlarını ayrıca köklərlə
// dəyişirik. Mövcud kök qeydi ilk uyğun ID-də saxlanılır.
const nibrasSecondHundredDuplicateRootSlotReplacements = [
  [47, ['وَجِلَ', 'qorxmaq', 'qorxdu', 'يَوْجَلُ', 'qorxur', 'اِوْجَلْ', 'qorx!']],
  [229, ['نَبَغَ', 'üstün olmaq, parlaqlaşmaq', 'üstün oldu / parlaqlaşdı', 'يَنْبُغُ', 'üstün olur / parlaqlaşır', 'اِنْبُغْ', 'üstün ol!']],
  [240, ['رَشَدَ', 'doğru yol tapmaq', 'doğru yol tapdı', 'يَرْشُدُ', 'doğru yol tapır', 'اِرْشُدْ', 'doğru yol tap!']],
  [479, ['عَذُبَ', 'şirin və xoş olmaq', 'şirin və xoş oldu', 'يَعْذُبُ', 'şirin və xoş olur', 'اُعْذُبْ', 'şirin ol!']],
  [551, ['خَبُثَ', 'pis olmaq', 'pis oldu', 'يَخْبُثُ', 'pis olur', 'اُخْبُثْ', 'pis ol!']],
  [813, ['فَطِنَ', 'zirək olmaq', 'zirək oldu', 'يَفْطَنُ', 'zirək olur', 'اِفْطَنْ', 'zirək ol!']],
];
for (const [targetId, replacement] of nibrasSecondHundredDuplicateRootSlotReplacements) {
  const target = verbsData.find(verb => verb.id === targetId);
  if (target) Object.assign(target, nibrasBuildVerb([targetId, ...replacement]));
}

const nibrasSecondHundredPhraseLinks = [
  [144, 533],
  [188, 84],
  [199, 98]
];
for (const [phraseId, rootId] of nibrasSecondHundredPhraseLinks) {
  const phrase = verbsData.find(verb => verb.id === phraseId);
  const root = verbsData.find(verb => verb.id === rootId);
  if (!phrase || !root) continue;
  for (const formKey of ['past', 'present', 'imperative']) {
    const phraseForm = phrase.forms?.[formKey];
    const rootForm = root.forms?.[formKey];
    const example = phraseForm?.examples?.[0];
    if (!rootForm || !example) continue;
    rootForm.examples = rootForm.examples || [];
    if (!rootForm.examples.some(item => item.arabic === example.arabic)) {
      rootForm.examples.push({ ...example });
    }
  }
}

// Təmizlənmiş arxiv: əsas dərsdə və mövcud kökün Bab panelində görünməyən
// yetim törəmə/ifadə qeydləri saxlanılmır. Yeni feillər sonrakı ID-lərlə əlavə
// edilə bilər; bu siyahı yalnız hazırkı köhnə qeydlərə aiddir.
const nibrasRetiredDerivedVerbIds = new Set([
  208, 210, 214, 219, 223, 225, 226, 228, 232, 242, 250, 251, 256, 262, 264,
  265, 269, 287, 288, 289, 290, 306, 308, 316, 320, 365, 380, 382, 389, 391,
  392, 397, 404, 418, 425, 428, 434, 435, 436, 440, 488, 506, 507, 519, 521,
  522, 524, 528, 539, 546, 548, 552, 559, 561, 563, 572, 574, 577, 583, 584,
  587, 591, 596, 605, 611, 614, 621, 622, 623, 626, 627, 628, 632, 636, 638,
  639, 640, 642, 658, 659, 660, 661, 663, 666, 671, 678, 688, 690, 701, 716,
  718, 720, 721, 724, 726, 727, 749, 750, 753, 768, 777, 782, 785, 801, 802,
  806, 821, 890, 896, 900, 906, 914, 915, 917, 918, 925, 928, 932, 936, 939,
  941, 973, 975, 992, 993, 994, 995, 998
]);

// Törəmə formalar ayrıca feil kimi çıxarılır, amma Bab paneli üçün minimal
// məlumat kimi saxlanılır.
const nibrasRetiredDerivedBabRecords = verbsData
  .filter(verb => nibrasRetiredDerivedVerbIds.has(verb.id))
  .map(verb => ({
    id: verb.id,
    arabic: verb.arabic,
    meaning: verb.meaning,
    forms: { past: { arabic: verb.forms?.past?.arabic || verb.arabic } }
  }));

for (let index = verbsData.length - 1; index >= 0; index -= 1) {
  if (nibrasRetiredDerivedVerbIds.has(verbsData[index].id)) {
    verbsData.splice(index, 1);
  }
}

const nibrasRetiredHiddenVerbIds = new Set([
  63, 73, 144, 188, 199, 201, 202, 203, 204, 205, 206, 209, 213, 218, 220,
  221, 227, 249, 253, 254, 255, 257, 258, 259, 260, 261, 263, 266, 274, 275,
  276, 277, 281, 282, 283, 284, 285, 286, 291, 292, 293, 294, 295, 296, 297,
  298, 299, 300, 301, 302, 303, 304, 305, 309, 310, 311, 312, 313, 314, 315,
  317, 318, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333,
  334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348,
  349, 350, 358, 360, 363, 364, 367, 375, 376, 377, 383, 384, 385, 387, 393,
  394, 395, 396, 398, 405, 408, 409, 410, 411, 412, 413, 417, 422, 423, 424,
  427, 429, 433, 438, 441, 456, 457, 458, 459, 460, 462, 463, 464, 491, 492,
  508, 510, 516, 517, 518, 523, 526, 527, 534, 535, 536, 543, 547, 550, 555,
  556, 560, 568, 569, 573, 578, 581, 582, 593, 594, 595, 599, 609, 610, 612,
  613, 615, 617, 618, 625, 630, 633, 643, 645, 648, 650, 662, 664, 667, 680,
  681, 682, 684, 685, 686, 689, 691, 705, 713, 714, 719, 722, 725, 728, 732,
  735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 751,
  754, 755, 756, 757, 764, 772, 773, 775, 776, 784, 787, 788, 793, 796, 797,
  799, 800, 803, 805, 809, 810, 811, 822, 823, 825, 830, 833, 837, 844, 845,
  846, 850, 854, 855, 858, 862, 871, 901, 903, 904, 905, 908, 909, 911, 912,
  913, 916, 921, 923, 924, 926, 927, 933, 934, 935, 940, 942, 943, 944, 945,
  946, 949, 950, 952, 957, 958, 959, 960, 961, 962, 964, 965, 967, 970, 971,
  972, 976, 981, 982, 983, 996, 999, 1000
]);

for (let index = verbsData.length - 1; index >= 0; index -= 1) {
  if (nibrasRetiredHiddenVerbIds.has(verbsData[index].id)) {
    verbsData.splice(index, 1);
  }
}

// Son yoxlama: kök hərəkəsi, tərcümə və nümunə cümlələri.
// Əvvəlki paketlər bəzi feilləri yenidən yazdığı üçün düzəliş ən sonda tətbiq olunur.
const nibrasFinalVerbAudit = {
  19: { imperativeArabic: "اُقْرُبْ" },
  60: { imperativeArabic: "اُوْضُؤْ" },
  66: { imperativeArabic: "اُصْغُرْ" },
  105: { imperative: "qaib olma!" },
  159: { arabic: "جَزِعَ" },
  189: { imperativeArabic: "اُؤْجُرْ" },
  238: { imperativeArabic: "صِحَّ" },
  244: { arabic: "رَبِحَ" },
  373: { past: "çıxdı" },
  374: { arabic: "غَرِقَ" },
  451: { past: "kəsdi" },
  453: { past: "qazandı" },
  454: { past: "yaratdı" },
  468: { arabic: "كَنَسَ" },
  473: { past: "daddı" },
  477: { past: "susadı" },
  483: { past: "qazdı" },
  484: { past: "əkdi" },
  494: { present: "gecələyir" },
  495: { meaning: "deyil (inkar)", past: "deyil idi", present: "deyil", imperative: "—", imperativeArabic: "—" },
  496: { past: "tapdı" },
  498: { meaning: "itmək", past: "itdi", present: "itir", imperative: "it!" },
  580: { arabic: "حَلَمَ", imperativeArabic: "اُحْلُمْ" },
  586: { present: "əzir" },
  602: { past: "hesabladı", present: "hesablayır" },
  603: { past: "saydı" },
  607: { past: "çoxaldı" },
  608: { past: "azaldı" },
  647: { past: "kəsdi" },
  649: { past: "çıxardı" },
  665: { past: "getdi", present: "gedir", imperative: "get!" },
  673: { arabic: "فَقِهَ", past: "anladı", present: "anlayır", imperative: "anla!" },
  676: { present: "bilməyir" },
  679: { arabic: "ضَمِنَ" },
  692: { arabic: "طَرِبَ" },
  698: {
    arabic: "لَحِقَ",
    meaning: "yetişmək, çatmaq",
    past: "yetişdi",
    presentArabic: "يَلْحَقُ",
    present: "yetişir",
    imperativeArabic: "اِلْحَقْ",
    imperative: "yetiş!"
  },
  699: { present: "əriyir" },
  702: { arabic: "كَمِدَ" },
  703: { arabic: "نَشِفَ", present: "quruyur" },
  704: { present: "quruyur" },
  695: { present: "soyuyur" },
  706: {
    past: "yağış yağdı",
    presentArabic: "يَمْطُرُ",
    present: "yağış yağır",
    imperativeArabic: "اُمْطُرْ",
    imperative: "yağış yağ!"
  },
  707: { past: "yağdı" },
  708: { past: "əsdi" },
  709: { past: "sakitləşdi" },
  710: { arabic: "نَشِطَ" },
  763: { past: "gizlətdi" },
  778: { past: "yüngülləşdi" },
  779: { past: "ağırlaşdı" },
  781: { present: "zəifləyir" },
  814: { presentArabic: "يَفْرَغُ", imperativeArabic: "اِفْرَغْ", past: "boşaldı" },
  815: { arabic: "شَبِعَ" },
  828: { arabic: "ضَجِرَ", past: "bezdi", present: "bezir" },
  832: { arabic: "أَطْمَعَ", presentArabic: "يُطْمِعُ", imperativeArabic: "أَطْمِعْ" },
  857: { past: "tələsdi" },
  859: { imperativeArabic: "اِعْجِزْ" },
  865: { past: "bağladı", present: "bağlayır" },
  866: { past: "tullandı" },
  867: { past: "tullandı" },
  869: { past: "daldı" },
  876: { past: "təpik atdı" },
  879: { present: "dişləyir" },
  880: { past: "sancdı" },
  881: { past: "sancdı" },
  882: { past: "tapdaladı", present: "tapdalayır" },
  889: { past: "qatladı", present: "qatlayır" },
  894: { past: "qısaldı" },
  895: { past: "uzandı" },
  937: { presentArabic: "يَفْصُحُ", imperativeArabic: "اُفْصُحْ" },
  953: { past: "uzatdı" },
  955: { past: "dartdı" },
  966: { arabic: "قَبُحَ" },
  979: { past: "dini dərindən anladı", present: "dini dərindən anlayır" },
  1018: { arabic: "شَمِتَ" },
  1020: { arabic: "عَرِقَ" },
  1044: { imperativeArabic: "اُنْبُشْ" },
  1045: { presentArabic: "يَنْحُفُ", imperativeArabic: "اُنْحُفْ" },
  1076: { present: "yarır" },
  1090: { arabic: "خَرِسَ" },
  1104: {
    arabic: "دَنِسَ",
    meaning: "çirklənmək",
    past: "çirkləndi",
    present: "çirklənir",
    imperative: "çirklən!"
  },
  1109: { arabic: "زَمِنَ" },
  1116: { presentArabic: "يَشْحُبُ", imperativeArabic: "اُشْحُبْ" }
};

for (const verb of verbsData) {
  const fix = nibrasFinalVerbAudit[verb.id];
  if (!fix) continue;
  if (fix.arabic) {
    verb.arabic = fix.arabic;
    if (verb.forms?.past) verb.forms.past.arabic = fix.arabic;
  }
  if (fix.meaning) verb.meaning = fix.meaning;
  if (fix.past && verb.forms?.past) verb.forms.past.translation = fix.past;
  if (fix.presentArabic && verb.forms?.present) verb.forms.present.arabic = fix.presentArabic;
  if (fix.present && verb.forms?.present) verb.forms.present.translation = fix.present;
  if (fix.imperativeArabic && verb.forms?.imperative) verb.forms.imperative.arabic = fix.imperativeArabic;
  if (fix.imperative && verb.forms?.imperative) verb.forms.imperative.translation = fix.imperative;
}

// يَفْعُلُ qəlibinin əmri اُفْعُلْ-dir. اِ prefiksi yalnız a/i qəlibində qalır.
function nibrasImperfectStemVowel(arabic) {
  const DIAC = /[\u064B-\u0652\u0670]/;
  const SUKUN = "\u0652";
  const SHADDA = "\u0651";
  const vowels = [];
  const s = arabic || "";
  for (let i = 0; i < s.length; i += 1) {
    if (DIAC.test(s[i])) continue;
    let vow = "";
    for (let j = i + 1; j < s.length && DIAC.test(s[j]); j += 1) {
      if (s[j] === SUKUN || s[j] === SHADDA) continue;
      if (!vow) vow = s[j];
    }
    if (vow) vowels.push(vow);
  }
  if (vowels.length >= 2) return vowels[1];
  return "";
}

for (const verb of verbsData) {
  const present = verb.forms?.present?.arabic || "";
  const imperative = verb.forms?.imperative;
  if (!imperative?.arabic) continue;
  if (nibrasImperfectStemVowel(present) !== "\u064F") continue;
  if (!imperative.arabic.startsWith("\u0627\u0650")) continue;
  imperative.arabic = "\u0627\u064F" + imperative.arabic.slice(2);
}

for (const verb of verbsData) {
  for (const [kind, prefix] of [["past", "O, dün "], ["present", "O, indi "]]) {
    const form = verb.forms?.[kind];
    const sample = form?.examples?.[0];
    if (!form?.translation || !sample) continue;
    const drill = kind === "past"
      ? /^هُوَ \S+ أَمْسِ\.$/u
      : /^هُوَ \S+ الآنَ\.$/u;
    if (!drill.test(sample.arabic)) continue;
    sample.arabic = kind === "past"
      ? `هُوَ ${form.arabic} أَمْسِ.`
      : `هُوَ ${form.arabic} الآنَ.`;
    sample.translation = `${prefix}${form.translation}.`;
  }
  const imperative = verb.forms?.imperative;
  const sample = imperative?.examples?.[0];
  if (!imperative?.translation || !sample) continue;
  if (/^\S+\.$/u.test(sample.arabic) || /^لَا\s+\S+\.$/u.test(sample.arabic)) {
    sample.arabic = `${imperative.arabic}.`;
    sample.translation = imperative.translation;
  }
}
