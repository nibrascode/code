import type { ProgrammingSection } from "@/lib/programming";

export const PYTHON_TR: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "Python nedir?",
    blocks: [
      {
        paragraphs: [
          "Python, sade ve okunabilir sözdizimiyle bilinen popüler bir programlama dilidir. Hem yeni başlayanlar hem de profesyonel yazılımcılar tarafından birçok farklı alanda kullanılır.",
          "Python, yüksek seviyeli ve genel amaçlı bir programlama dilidir. Görece sade sözdizimi, kodların okunmasını ve anlaşılmasını kolaylaştırır.",
          "Python; web geliştirme, yapay zekâ, makine öğrenmesi, veri analizi, otomasyon ve bilimsel hesaplamalar gibi birçok alanda kullanılır.",
          "Python için çok sayıda kütüphane ve framework bulunur. Bunlar dilin farklı projelerde kullanılmasını kolaylaştırır.",
        ],
      },
      {
        heading: "Kısaca",
        paragraphs: [
          "Python, okunabilir sözdizimi ve geniş kullanım alanıyla öne çıkan çok amaçlı bir programlama dilidir.",
        ],
      },
    ],
  },
  {
    id: "istifade",
    title: "Python ne için kullanılır?",
    blocks: [
      { paragraphs: ["Python birçok farklı yazılım alanında kullanılabilir."] },
      {
        heading: "Web geliştirme",
        paragraphs: [
          "Python ile web sitelerinin ve web uygulamalarının sunucu tarafı geliştirilebilir. Django ve Flask bu amaçla kullanılan framework'ler arasındadır.",
        ],
      },
      {
        heading: "Yapay zekâ",
        paragraphs: [
          "Python, yapay zekâ ve makine öğrenmesi projelerinde yaygın olarak kullanılır. Veri işleme ve model geliştirme için birçok kütüphane bulunur.",
        ],
      },
      {
        heading: "Veri analizi",
        paragraphs: [
          "Python, büyük miktardaki verilerin işlenmesi, analiz edilmesi ve görselleştirilmesi için kullanılabilir.",
        ],
      },
      {
        heading: "Otomasyon",
        paragraphs: [
          "Dosyaların işlenmesi ve tekrarlanan işlemlerin otomatikleştirilmesi için Python scriptleri kullanılabilir.",
        ],
      },
      {
        heading: "Eğitim",
        paragraphs: ["Okunabilir sözdizimi sayesinde Python, programlama öğretiminde de yaygın olarak kullanılır."],
      },
      {
        heading: "Kısaca",
        paragraphs: [
          "Python; web geliştirme, yapay zekâ, veri analizi, otomasyon ve programlama eğitimi gibi alanlarda kullanılır.",
        ],
      },
    ],
  },
  {
    id: "ne-etmek",
    title: "Python ile neler yapılabilir?",
    blocks: [
      {
        paragraphs: [
          "Python ile küçük scriptlerden büyük yazılım projelerine kadar birçok farklı çalışma yapılabilir.",
          "Python ile:",
        ],
        list: [
          "Web uygulamaları geliştirilebilir.",
          "Otomasyon scriptleri yazılabilir.",
          "Veriler analiz edilebilir.",
          "Yapay zekâ projeleri geliştirilebilir.",
          "Dosyalar otomatik olarak işlenebilir.",
          "API'lerle çalışılabilir.",
          "Hesaplamalar yapılabilir.",
          "Basit oyunlar ve programlar geliştirilebilir.",
          "Bilimsel ve teknik projeler hazırlanabilir.",
        ],
      },
      {
        heading: "Basit örnek",
        code: 'name = "Nibras Code"\nprint("Merhaba,", name)',
        after: ["Bu kod bir değişkende bulunan değeri kullanarak ekrana mesaj yazdırır."],
      },
      {
        heading: "Kısaca",
        paragraphs: [
          "Python, farklı yazılım ve otomasyon projelerinde kullanılabilen genel amaçlı bir programlama dilidir.",
        ],
      },
    ],
  },
  {
    id: "oyrenmek",
    title: "Python öğrenmek zor mu?",
    blocks: [
      {
        paragraphs: [
          "Python, sade ve okunabilir sözdizimi nedeniyle programlamaya yeni başlayan kişiler tarafından sıkça tercih edilir.",
          "Ancak Python'un tamamını ileri seviyede öğrenmek zaman ve pratik gerektirir. Değişkenler, koşullar, döngüler, fonksiyonlar, veri yapıları ve nesne yönelimli programlama gibi konuların öğrenilmesi gerekir.",
        ],
      },
      {
        heading: "Python öğrenmeye nasıl başlanır?",
        paragraphs: ["Başlangıç için şu sırayı takip edebilirsiniz:"],
        list: [
          "Temel Python sözdizimini öğrenin.",
          "Değişkenleri ve veri türlerini öğrenin.",
          "Koşulları ve döngüleri öğrenin.",
          "Fonksiyonları öğrenin.",
          "Listeler, sözlükler ve veri yapılarını öğrenin.",
          "Küçük projeler geliştirin.",
          "İlgi alanınıza uygun kütüphaneleri öğrenin.",
        ],
        ordered: true,
      },
      { paragraphs: ["Programlama öğrenirken düzenli olarak kod yazmak önemlidir."] },
      {
        heading: "Kısaca",
        paragraphs: [
          "Python başlangıç için uygun bir dil olabilir. Ancak iyi bir seviyeye ulaşmak için düzenli çalışma ve pratik gerekir.",
        ],
      },
    ],
  },
  {
    id: "ustunluk",
    title: "Python'un avantajları ve dezavantajları",
    blocks: [
      {
        paragraphs: ["Her programlama dilinde olduğu gibi Python'un da avantajları ve bazı sınırlamaları vardır."],
      },
      {
        heading: "Avantajları",
        list: [
          "Okunabilir sözdizimi: Python kodları genellikle kolay okunabilir ve yazılabilir.",
          "Geniş kullanım alanı: Web geliştirmeden yapay zekâya kadar birçok alanda kullanılabilir.",
          "Büyük ekosistem: Farklı amaçlar için çok sayıda kütüphane ve framework bulunur.",
          "Geniş topluluk: Çok sayıda eğitim kaynağı, dokümantasyon ve örnek bulunabilir.",
          "Platformlar arası kullanım: Python farklı işletim sistemlerinde kullanılabilir.",
        ],
      },
      {
        heading: "Dezavantajları",
        paragraphs: [
          "Python her proje için en uygun seçenek olmayabilir. Çok yüksek performansın veya sınırlı sistem kaynaklarının önemli olduğu bazı projelerde başka programlama dilleri tercih edilebilir.",
          "Bazı durumlarda Python programları derlenmiş dillerle yazılan programlardan daha yavaş çalışabilir.",
        ],
      },
      {
        heading: "Kısaca",
        paragraphs: ["Python'un avantajları ve sınırlamaları projenin ihtiyaçlarına göre değerlendirilmelidir."],
      },
    ],
  },
  {
    id: "sintaksis",
    title: "Python sözdizimi ve temel kavramlar",
    blocks: [
      { paragraphs: ["Python öğrenmeye başlarken bazı temel programlama kavramlarını bilmek gerekir."] },
      {
        heading: "Değişkenler",
        paragraphs: ["Değişkenler veri saklamak için kullanılır."],
        code: 'name = "Mahir"\nage = 25',
      },
      {
        heading: "Koşullar",
        paragraphs: ['"if" yapısı belirli bir koşula göre kod çalıştırmayı sağlar.'],
        code: 'age = 20\n\nif age >= 18:\n    print("Yetişkin")',
      },
      {
        heading: "Döngüler",
        paragraphs: ["Döngüler belirli işlemlerin tekrar edilmesini sağlar."],
        code: "for i in range(5):\n    print(i)",
      },
      {
        heading: "Fonksiyonlar",
        paragraphs: ["Fonksiyonlar tekrar kullanılabilen kod bloklarıdır."],
        code: 'def greet(name):\n    print("Merhaba,", name)\n\ngreet("Nibras Code")',
      },
      {
        paragraphs: [
          "Python öğrenirken değişkenler, veri türleri, koşullar, döngüler, fonksiyonlar ve veri yapılarına özellikle dikkat edilmelidir.",
        ],
      },
    ],
  },
  {
    id: "numuneler",
    title: "Python kod örnekleri",
    blocks: [
      { paragraphs: ["Pratik kod örnekleri Python'un temel yapısını anlamaya yardımcı olabilir."] },
      { heading: "Ekrana metin yazdırma", code: 'print("Merhaba Dünya!")' },
      { heading: "İki sayıyı toplama", code: "a = 10\nb = 5\n\nresult = a + b\nprint(result)" },
      {
        heading: "Koşul kullanımı",
        code: 'score = 85\n\nif score >= 50:\n    print("Başarılı")\nelse:\n    print("Başarısız")',
      },
      { heading: "Döngü örneği", code: "for i in range(1, 6):\n    print(i)" },
      { heading: "Basit fonksiyon", code: "def add(a, b):\n    return a + b\n\nprint(add(10, 20))" },
      { paragraphs: ["Bu örnekler Python sözdizimine başlangıç seviyesinde alışmak için kullanılabilir."] },
    ],
  },
  {
    id: "islek",
    title: "Çalışan örnekler",
    blocks: [
      {
        paragraphs: [
          "Yukarıdaki satırlar bir şeyi gösterir. Buradaki örnekler küçük bir işi baştan sona götürür. Her birini olduğu gibi çalıştırabilirsin. Önce sonuca bak, sonra sayıyı ya da adı değiştirip yeniden çalıştır.",
        ],
      },
      {
        heading: "Listeden adları yazdırmak",
        paragraphs: [
          "Birkaç ad bir yerde durur. Bu yere liste denir. for her adı sırayla alır ve ekrana yazar. Listeye ad eklersen döngü onu da yazar. Her ad için ayrı print yazmak gerekmez.",
        ],
        code: 'adlar = ["Aysel", "Murad", "Nigar"]\nfor ad in adlar:\n    print("Merhaba,", ad)',
        after: ["Çıktı üç satırdır: Merhaba, Aysel, sonra Murad, sonra Nigar."],
      },
      {
        heading: "Bir öğrenciyi hatırlamak",
        paragraphs: [
          "Sözlük bir şeyin birkaç özelliğini tutar. Burada ad ve not bir yerdedir. Anahtarı yazarsın, değer gelir. Not 50 veya daha çoksa Geçti yazılır. 50'den az olunca bu koşul bir şey yazmaz. Bunu görmek için notu 40 yap.",
        ],
        code: 'ogrenci = {"ad": "Aysel", "not": 85}\nprint(ogrenci["ad"])\nif ogrenci["not"] >= 50:\n    print("Geçti")',
        after: ["Önce Aysel gelir, sonra Geçti. Anahtarı yanlış yazarsan Python o adı bulmaz."],
      },
      {
        heading: "Ortalama notu bulmak",
        paragraphs: [
          "Notlar listededir. toplam sıfırdan başlar ve her not onun üstüne gelir. Sonda toplam, sayıya bölünür. len listede kaç sayı olduğunu söyler. 70, 80 ve 90'ın ortalaması 80'dir. Dördüncü not eklersen bölen de kendiliğinden değişir.",
        ],
        code: "notlar = [70, 80, 90]\ntoplam = 0\nfor notu in notlar:\n    toplam = toplam + notu\nortalama = toplam / len(notlar)\nprint(ortalama)",
        after: ["Ekranda 80.0 görünür. Bu örnek sayıyı yuvarlamaz."],
      },
      {
        heading: "Geçti mi kontrolünü fonksiyona vermek",
        paragraphs: [
          "Aynı kontrolü iki yere yazmak yerine bir fonksiyon yazılır. O, notu alır ve bir söz döndürür. return sözü fonksiyondan çıkarır. Alttaki print fonksiyonu çağırır ve gelen sözü gösterir. Kural değişince yalnız fonksiyonun içini değiştirirsin.",
        ],
        code: 'def gecti(notu):\n    if notu >= 50:\n        return "Geçti"\n    return "Kaldı"\n\nprint(gecti(40))\nprint(gecti(75))',
        after: ["Önce Kaldı, sonra Geçti çıkar. 50'nin kendisi geçti sayılır, çünkü koşul büyük veya eşittir."],
      },
    ],
  },
  {
    id: "suallar",
    title: "Python hakkında sık sorulan sorular",
    blocks: [
      {
        heading: "Python nedir?",
        paragraphs: [
          "Python, farklı yazılımlar geliştirmek ve çeşitli programlama görevlerini gerçekleştirmek için kullanılan genel amaçlı bir programlama dilidir.",
        ],
      },
      {
        heading: "Python ne için kullanılır?",
        paragraphs: [
          "Python; web geliştirme, yapay zekâ, makine öğrenmesi, veri analizi, otomasyon ve bilimsel hesaplamalar gibi alanlarda kullanılır.",
        ],
      },
      {
        heading: "Python öğrenmek zor mu?",
        paragraphs: [
          "Python'un sözdizimi görece sade ve okunabilirdir. Bu nedenle yeni başlayanlar için uygun olabilir. İleri seviyeye ulaşmak için düzenli pratik gerekir.",
        ],
      },
      {
        heading: "Python ücretsiz mi?",
        paragraphs: ["Evet. Python açık kaynaklı bir yazılımdır ve dilin kendisi ücretsiz olarak kullanılabilir."],
      },
      {
        heading: "Python ile web sitesi yapılabilir mi?",
        paragraphs: ["Evet. Python ile web sitelerinin ve web uygulamalarının sunucu tarafı geliştirilebilir."],
      },
      {
        heading: "Python yapay zekâ için kullanılır mı?",
        paragraphs: ["Evet. Python, yapay zekâ ve makine öğrenmesi projelerinde yaygın olarak kullanılır."],
      },
      {
        heading: "Python ile mobil uygulama yapılabilir mi?",
        paragraphs: [
          "Evet, Python ile mobil uygulama geliştirmek için çeşitli araçlar bulunmaktadır. Bununla birlikte Android ve iOS geliştirmede başka diller ve teknolojiler de yaygın olarak kullanılır.",
        ],
      },
      {
        heading: "Python ve JavaScript aynı mı?",
        paragraphs: ["Hayır. Python ve JavaScript farklı programlama dilleridir."],
      },
      {
        heading: "Python yeni başlayanlar için uygun mu?",
        paragraphs: [
          "Evet. Görece sade ve okunabilir sözdizimi Python'u programlamaya başlayanlar arasında popüler bir seçenek haline getirmiştir.",
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "Python ve JavaScript Arasındaki Fark",
    blocks: [
      {
        paragraphs: [
          "Python ve JavaScript yaygın olarak kullanılan programlama dilleridir, ancak kullanım alanları genellikle farklıdır. Python; yapay zekâ, veri analizi, otomasyon ve backend geliştirmede yaygın olarak kullanılır. JavaScript ise özellikle etkileşimli web siteleri ve frontend uygulamaları geliştirmek için kullanılır. Node.js gibi teknolojiler sayesinde backend geliştirmede de kullanılabilir.",
        ],
      },
    ],
  },
  {
    id: "java",
    title: "Python ve Java Arasındaki Fark",
    blocks: [
      {
        paragraphs: [
          "Python ve Java farklı amaçlarla kullanılan popüler programlama dilleridir. Python, basit ve okunabilir söz dizimiyle öne çıkar ve yapay zekâ, veri analizi, otomasyon ve backend geliştirmede yaygın olarak kullanılır. Java ise büyük yazılım sistemleri, backend hizmetleri, kurumsal uygulamalar ve farklı platformlarda çalışan yazılımların geliştirilmesinde sıkça kullanılır.",
        ],
      },
    ],
  },
];
