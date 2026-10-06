import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

function section(title: string, intro: string, blocks: ProgrammingSection["blocks"]): ProgrammingSection {
  return { id: "islek", title, blocks: [{ paragraphs: [intro] }, ...(blocks ?? [])] };
}

const CREATE = `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER
);`;

const INSERT = `INSERT INTO students (id, name, score) VALUES
  (1, 'Aysel', 85),
  (2, 'Murad', 40);`;

const SELECT = `SELECT name, score
FROM students
WHERE score >= 50
ORDER BY score DESC;`;

const UPDATE = `UPDATE students
SET score = 70
WHERE name = 'Murad';

SELECT name, score
FROM students;`;

export function sqlWorking(lang: Lang): ProgrammingSection {
  if (lang === "en") {
    return section(
      "Working examples",
      "The short queries above read one thing. These four build a small table and then use it. Run them in order on an empty database. SQLite is enough. The first makes the table. The second fills two rows. The third keeps one of them. The fourth changes a number.",
      [
        {
          heading: "Make the table",
          paragraphs: [
            "CREATE TABLE makes an empty table named students. id is a whole number and the primary key, so two rows cannot share the same id. name is text and NOT NULL, so a row without a name is refused. score is a whole number and may be empty. This line does not add Aysel or Murad. It only builds the columns.",
          ],
          code: CREATE,
          after: ["After this, the table exists and has zero rows. Run it a second time and the database says the table is already there."],
        },
        {
          heading: "Add two students",
          paragraphs: [
            "INSERT writes rows. The names in parentheses are the columns. The values follow in the same order: id, name, score. Aysel has 85. Murad has 40. A text value sits in quotes. A number does not. If you insert id 1 again, the primary key stops the second copy.",
          ],
          code: INSERT,
          after: ["The table now has two rows. Nothing is printed unless you ask with SELECT."],
        },
        {
          heading: "Keep only a passing score",
          paragraphs: [
            "SELECT chooses columns. WHERE throws away rows that fail the check. 85 stays, 40 does not, because 40 is below 50. ORDER BY score DESC puts the larger score first. DESC means descending. Without WHERE you would see both students. Without ORDER BY the database may return them in any order.",
          ],
          code: SELECT,
          after: ["One row comes back: Aysel, 85. Murad is still in the table. This query only hid him."],
        },
        {
          heading: "Change one score",
          paragraphs: [
            "UPDATE writes a new value into a column that already exists. SET says the new score is 70. WHERE says only the row named Murad changes. The SELECT under it reads the table again so you can see both rows. Forget the WHERE and every student's score becomes 70. That is the usual accident.",
          ],
          code: UPDATE,
          after: ["Murad is now 70. Aysel stays 85. The old 40 is gone, because UPDATE replaces it."],
        },
      ],
    );
  }
  if (lang === "tr") {
    return section(
      "Çalışan örnekler",
      "Yukarıdaki kısa sorgular bir şeyi okur. Bu dördü küçük bir tablo kurar, sonra onu kullanır. Boş bir veritabanında sırayla çalıştır. SQLite yeter. Birincisi tabloyu kurar. İkincisi iki satır yazar. Üçüncüsü birini tutar. Dördüncüsü bir sayıyı değiştirir.",
      [
        {
          heading: "Tabloyu kurmak",
          paragraphs: [
            "CREATE TABLE students adında boş bir tablo kurar. id tam sayıdır ve birincil anahtardır, bu yüzden iki satır aynı id'yi paylaşamaz. name metindir ve NOT NULL'dur, adsız satır kabul edilmez. score tam sayıdır ve boş kalabilir. Bu satır Aysel'i veya Murad'ı eklemez. Yalnız sütunları kurar.",
          ],
          code: CREATE,
          after: ["Bundan sonra tablo vardır ve sıfır satırdır. İkinci kez çalıştırırsan veritabanı tablo zaten var der."],
        },
        {
          heading: "İki öğrenci eklemek",
          paragraphs: [
            "INSERT satır yazar. Parantezdeki adlar sütunlardır. Değerler aynı sırayla gelir: id, name, score. Aysel'in notu 85'tir. Murad'ın notu 40'tır. Metin tırnak içindedir. Sayı tırnaksızdır. id 1'i yeniden eklersen birincil anahtar ikinci kopyayı durdurur.",
          ],
          code: INSERT,
          after: ["Tabloda artık iki satır vardır. SELECT ile sormazsan bir şey yazılmaz."],
        },
        {
          heading: "Yalnız geçen notu tutmak",
          paragraphs: [
            "SELECT sütun seçer. WHERE koşulu geçmeyen satırı atar. 85 kalır, 40 kalmaz, çünkü 40, 50'nin altındadır. ORDER BY score DESC büyük notu üste koyar. DESC azalan demektir. WHERE olmazsa iki öğrenciyi de görürsün. ORDER BY olmazsa veritabanı onları herhangi bir sırada verebilir.",
          ],
          code: SELECT,
          after: ["Bir satır döner: Aysel, 85. Murad tabloda durur. Bu sorgu onu yalnız gizledi."],
        },
        {
          heading: "Bir notu değiştirmek",
          paragraphs: [
            "UPDATE var olan sütuna yeni değer yazar. SET yeni notun 70 olduğunu söyler. WHERE yalnız adı Murad olan satırın değişeceğini söyler. Altındaki SELECT tabloyu yeniden okur, iki satırı da görürsün. WHERE'i unutursan her öğrencinin notu 70 olur. Olağan kaza budur.",
          ],
          code: UPDATE,
          after: ["Murad artık 70'tir. Aysel 85 kalır. Eski 40 gitmiştir, çünkü UPDATE onun yerine yenisini yazar."],
        },
      ],
    );
  }
  if (lang === "ar") {
    return section(
      "أمثلة تعمل",
      "الاستعلامات القصيرة أعلاه تقرأ شيئاً واحداً. هذه الأربعة تبني جدولاً صغيراً ثم تستعمله. شغّلها بالترتيب على قاعدة فارغة. SQLite يكفي. الأول يصنع الجدول. الثاني يكتب سطرين. الثالث يُبقي واحداً. الرابع يغيّر رقماً.",
      [
        {
          heading: "صنع الجدول",
          paragraphs: [
            "CREATE TABLE يصنع جدولاً فارغاً اسمه students. id عدد صحيح ومفتاح أساسي، لذلك سطران لا يتقاسمان id نفسه. name نص وNOT NULL، فالسطر بلا اسم يُرفض. score عدد صحيح وقد يبقى فارغاً. هذا السطر لا يضيف Aysel ولا Murad. هو يبني الأعمدة فقط.",
          ],
          code: CREATE,
          after: ["بعد هذا يوجد الجدول وفيه صفر سطر. إذا شغلته مرة ثانية تقول القاعدة إن الجدول موجود أصلاً."],
        },
        {
          heading: "إضافة طالبين",
          paragraphs: [
            "INSERT يكتب أسطر. الأسماء بين القوسين هي الأعمدة. القيم تأتي بالترتيب نفسه: id ثم name ثم score. درجة Aysel هي 85. درجة Murad هي 40. النص داخل علامات تنصيص. الرقم بلا تنصيص. إذا أدخلت id 1 مرة أخرى فالمفتاح الأساسي يوقف النسخة الثانية.",
          ],
          code: INSERT,
          after: ["في الجدول الآن سطران. لا يُطبع شيء إلا إذا طلبت بـ SELECT."],
        },
        {
          heading: "إبقاء الدرجة الناجحة فقط",
          paragraphs: [
            "SELECT يختار الأعمدة. WHERE يرمي السطر الذي لا يمر الشرط. 85 تبقى و40 لا تبقى لأن 40 تحت 50. ORDER BY score DESC يضع الدرجة الأكبر أولاً. DESC تعني تنازلياً. بلا WHERE ترى الطالبين. بلا ORDER BY قد ترجع القاعدة الأسطر بأي ترتيب.",
          ],
          code: SELECT,
          after: ["يرجع سطر واحد: Aysel و85. Murad ما زال في الجدول. هذا الاستعلام أخفاه فقط."],
        },
        {
          heading: "تغيير درجة واحدة",
          paragraphs: [
            "UPDATE يكتب قيمة جديدة في عمود موجود. SET يقول إن الدرجة الجديدة 70. WHERE يقول إن السطر الذي اسمه Murad وحده يتغير. SELECT تحته يقرأ الجدول مرة أخرى فترى السطرين. إذا نسيت WHERE صارت درجة كل طالب 70. هذا هو الخطأ المعتاد.",
          ],
          code: UPDATE,
          after: ["Murad الآن 70. Aysel تبقى 85. الأربعون القديمة ذهبت لأن UPDATE يضع مكانها الجديد."],
        },
      ],
    );
  }
  if (lang === "ru") {
    return section(
      "Рабочие примеры",
      "Короткие запросы выше читают одно. Эти четыре строят маленькую таблицу и потом её используют. Запусти их по порядку на пустой базе. Хватит SQLite. Первый делает таблицу. Второй пишет две строки. Третий оставляет одну. Четвёртый меняет число.",
      [
        {
          heading: "Сделать таблицу",
          paragraphs: [
            "CREATE TABLE делает пустую таблицу students. id — целое число и первичный ключ, поэтому две строки не делят один id. name — текст и NOT NULL, строка без имени не принимается. score — целое число и может быть пустым. Эта строка не добавляет Aysel и Murad. Она только строит столбцы.",
          ],
          code: CREATE,
          after: ["После этого таблица есть, и в ней ноль строк. Запусти второй раз — база скажет, что таблица уже есть."],
        },
        {
          heading: "Добавить двух учеников",
          paragraphs: [
            "INSERT пишет строки. Имена в скобках — это столбцы. Значения идут в том же порядке: id, name, score. У Aysel 85. У Murad 40. Текст стоит в кавычках. Число без кавычек. Если вставить id 1 ещё раз, первичный ключ остановит вторую копию.",
          ],
          code: INSERT,
          after: ["В таблице теперь две строки. Ничего не печатается, пока не спросишь через SELECT."],
        },
        {
          heading: "Оставить только проходной балл",
          paragraphs: [
            "SELECT выбирает столбцы. WHERE выбрасывает строку, которая не проходит проверку. 85 остаётся, 40 нет, потому что 40 меньше 50. ORDER BY score DESC ставит больший балл первым. DESC значит по убыванию. Без WHERE увидишь обоих. Без ORDER BY база может вернуть их в любом порядке.",
          ],
          code: SELECT,
          after: ["Возвращается одна строка: Aysel, 85. Murad всё ещё в таблице. Этот запрос только спрятал его."],
        },
        {
          heading: "Изменить один балл",
          paragraphs: [
            "UPDATE пишет новое значение в столбец, который уже есть. SET говорит, что новый балл 70. WHERE говорит, что меняется только строка с именем Murad. SELECT под ним читает таблицу снова, и видны обе строки. Забудешь WHERE — балл каждого ученика станет 70. Это обычная ошибка.",
          ],
          code: UPDATE,
          after: ["Murad теперь 70. Aysel остаётся 85. Старые 40 пропали, потому что UPDATE ставит на их место новое."],
        },
      ],
    );
  }
  return section(
    "İşlək nümunələr",
    "Yuxarıdakı qısa sorğular bir şeyi oxuyur. Bu dördü kiçik cədvəl qurur, sonra ondan istifadə edir. Boş bazada sırayla işə sal. SQLite bəs edir. Birincisi cədvəli qurur. İkincisi iki sətir yazır. Üçüncüsü birini saxlayır. Dördüncüsü bir rəqəmi dəyişir.",
    [
      {
        heading: "Cədvəli qurmaq",
        paragraphs: [
          "CREATE TABLE students adlı boş cədvəl yaradır. id tam ədəddir və əsas açardır, ona görə iki sətir eyni id-ni bölüşə bilməz. name mətndir və NOT NULL-dur, adsız sətir qəbul olunmur. score tam ədəddir və boş qala bilər. Bu sətir Aysel-i və ya Murad-ı əlavə etmir. Yalnız sütunları qurur.",
        ],
        code: CREATE,
        after: ["Bundan sonra cədvəl var və içi boşdur. İkinci dəfə işə salsan, baza cədvəl artıq var deyir."],
      },
      {
        heading: "İki tələbə əlavə etmək",
        paragraphs: [
          "INSERT sətir yazır. Mötərizədəki adlar sütunlardır. Qiymətlər eyni sırayla gəlir: id, name, score. Aysel-in balı 85-dir. Murad-ın balı 40-dır. Mətn dırnaqdadır. Rəqəm dırnaqsızdır. id 1-i yenidən əlavə etsən, əsas açar ikinci nüsxəni dayandırır.",
        ],
        code: INSERT,
        after: ["Cədvəldə artıq iki sətir var. SELECT ilə soruşmasan, heç nə yazılmır."],
      },
      {
        heading: "Yalnız keçən balı saxlamaq",
        paragraphs: [
          "SELECT sütun seçir. WHERE şərti keçməyən sətri atır. 85 qalır, 40 qalmır, çünki 40, 50-dən kiçikdir. ORDER BY score DESC böyük balı yuxarı qoyur. DESC azalan deməkdir. WHERE olmasa, hər iki tələbəni görürsən. ORDER BY olmasa, baza onları istənilən sırada qaytara bilər.",
        ],
        code: SELECT,
        after: ["Bir sətir qayıdır: Aysel, 85. Murad cədvəldə durur. Bu sorğu onu yalnız gizlətdi."],
      },
      {
        heading: "Bir balı dəyişmək",
        paragraphs: [
          "UPDATE olan sütuna yeni qiymət yazır. SET yeni balın 70 olduğunu deyir. WHERE yalnız adı Murad olan sətirin dəyişəcəyini deyir. Altındakı SELECT cədvəli yenidən oxuyur, iki sətiri də görürsən. WHERE-i unutsan, hər tələbənin balı 70 olar. Adi qəza budur.",
        ],
        code: UPDATE,
        after: ["Murad artıq 70-dir. Aysel 85 qalır. Köhnə 40 gedib, çünki UPDATE onun yerinə yenisini yazır."],
      },
    ],
  );
}
