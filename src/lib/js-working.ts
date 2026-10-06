import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

const CODE = {
  names: `const names = ["Aysel", "Murad", "Nigar"];
for (const name of names) {
  console.log("Salam, " + name);
}`,
  student: `const student = { name: "Aysel", score: 85 };
console.log(student.name);
if (student.score >= 50) {
  console.log("Keçdi");
}`,
  average: `const scores = [70, 80, 90];
let total = 0;
for (const score of scores) {
  total = total + score;
}
const average = total / scores.length;
console.log(average);`,
  button: `const button = document.querySelector("button");
button.addEventListener("click", function () {
  button.textContent = "Basıldı";
});`,
};

function section(title: string, intro: string, blocks: ProgrammingSection["blocks"]): ProgrammingSection {
  return { id: "islek", title, blocks: [{ paragraphs: [intro] }, ...(blocks ?? [])] };
}

export function jsWorking(lang: Lang): ProgrammingSection {
  if (lang === "en") {
    return section(
      "Working examples",
      "The short lines above show one idea. These examples carry a small job from the start to the end. Open the browser console, paste the code, and press Enter. Then change a name or a number and run it again.",
      [
        {
          heading: "Write names from a list",
          paragraphs: [
            "Several names stand in one list. for takes each name in turn and writes it. If you add a name, the loop writes that too. You do not write a separate line for every name.",
          ],
          code: CODE.names,
          after: ["Three lines appear: Salam, Aysel, then Murad, then Nigar."],
        },
        {
          heading: "Remember one student",
          paragraphs: [
            "An object keeps several facts about one thing. The name and the score stay together. You write the key after a dot, and the value comes back. If the score is 50 or more, Keçdi is written. Set the score to 40 and that line stays silent.",
          ],
          code: CODE.student,
          after: ["Aysel comes first, then Keçdi. A wrong key gives undefined, not a guess."],
        },
        {
          heading: "Find the average",
          paragraphs: [
            "total starts at zero and each score is added. At the end the total is divided by how many numbers are in the list. The average of 70, 80, and 90 is 80. Add a fourth score and the divisor changes by itself.",
          ],
          code: CODE.average,
          after: ["80 appears. This example does not round the number."],
        },
        {
          heading: "Change a button when it is pressed",
          paragraphs: [
            "This is the job JavaScript is known for. querySelector finds the first button on the page. addEventListener waits for a click. When the click comes, the button's text becomes Basıldı. If the page has no button, querySelector returns nothing and the next line fails. Put a button in the HTML first.",
          ],
          code: CODE.button,
          after: ["Before the click the button keeps its old text. After the click only the text changes. The page does not reload."],
        },
      ],
    );
  }
  if (lang === "tr") {
    return section(
      "Çalışan örnekler",
      "Yukarıdaki kısa satırlar bir şeyi gösterir. Bu örnekler küçük bir işi baştan sona götürür. Tarayıcının konsolunu aç, kodu yapıştır ve Enter'a bas. Sonra bir adı veya sayıyı değiştirip yeniden çalıştır.",
      [
        {
          heading: "Listeden adları yazdırmak",
          paragraphs: [
            "Birkaç ad bir listededir. for her adı sırayla alır ve yazar. Listeye ad eklersen döngü onu da yazar. Her ad için ayrı satır yazmak gerekmez.",
          ],
          code: CODE.names,
          after: ["Üç satır çıkar: Salam, Aysel, sonra Murad, sonra Nigar."],
        },
        {
          heading: "Bir öğrenciyi hatırlamak",
          paragraphs: [
            "Nesne bir şeyin birkaç özelliğini tutar. Ad ve not bir yerdedir. Noktadan sonra anahtarı yazarsın, değer gelir. Not 50 veya daha çoksa Keçdi yazılır. Notu 40 yaparsan o satır susar.",
          ],
          code: CODE.student,
          after: ["Önce Aysel gelir, sonra Keçdi. Yanlış anahtar tahmin değil, undefined verir."],
        },
        {
          heading: "Ortalamayı bulmak",
          paragraphs: [
            "total sıfırdan başlar ve her not eklenir. Sonda toplam, listedeki sayıya bölünür. 70, 80 ve 90'ın ortalaması 80'dir. Dördüncü notu eklersen bölen kendiliğinden değişir.",
          ],
          code: CODE.average,
          after: ["80 görünür. Bu örnek sayıyı yuvarlamaz."],
        },
        {
          heading: "Düğmeye basılınca yazıyı değiştirmek",
          paragraphs: [
            "JavaScript'in bilinen işi budur. querySelector sayfadaki ilk düğmeyi bulur. addEventListener tıklamayı bekler. Tıklama gelince düğmenin yazısı Basıldı olur. Sayfada düğme yoksa querySelector boş döner ve sonraki satır kırılır. Önce HTML'e bir düğme koy.",
          ],
          code: CODE.button,
          after: ["Tıklamadan önce düğme eski yazısını tutar. Tıklamadan sonra yalnız yazı değişir. Sayfa yenilenmez."],
        },
      ],
    );
  }
  if (lang === "ar") {
    return section(
      "أمثلة تعمل",
      "الأسطر القصيرة أعلاه تُظهر فكرة واحدة. هذه الأمثلة تسير بعمل صغير من أوله إلى آخره. افتح كونسول المتصفح والصق الكود واضغط Enter. ثم غيّر اسماً أو رقماً وشغّله مرة أخرى.",
      [
        {
          heading: "كتابة الأسماء من قائمة",
          paragraphs: [
            "عدة أسماء في قائمة واحدة. for يأخذ كل اسم بالدور ويكتبه. إذا أضفت اسماً فالحلقة تكتبه أيضاً. لا يلزم سطر منفصل لكل اسم.",
          ],
          code: CODE.names,
          after: ["تخرج ثلاث أسطر: Salam, Aysel ثم Murad ثم Nigar."],
        },
        {
          heading: "تذكر طالب واحد",
          paragraphs: [
            "الكائن يحفظ عدة صفات لشيء واحد. الاسم والدرجة معاً. تكتب المفتاح بعد النقطة فتأتي القيمة. إذا كانت الدرجة 50 أو أكثر يُكتب Keçdi. اجعل الدرجة 40 فيسكت ذلك السطر.",
          ],
          code: CODE.student,
          after: ["أولاً Aysel ثم Keçdi. المفتاح الخطأ لا يخمّن، بل يعطي undefined."],
        },
        {
          heading: "إيجاد المتوسط",
          paragraphs: [
            "total يبدأ من صفر وكل درجة تُضاف. في الأخير يُقسم المجموع على عدد الأرقام في القائمة. متوسط 70 و80 و90 هو 80. إذا أضفت درجة رابعة فالمقسوم عليه يتغير وحده.",
          ],
          code: CODE.average,
          after: ["يظهر 80. هذا المثال لا يقرّب الرقم."],
        },
        {
          heading: "تغيير نص الزر عند الضغط",
          paragraphs: [
            "هذا هو العمل الذي تُعرف به جافاسكريبت. querySelector يجد أول زر في الصفحة. addEventListener ينتظر الضغط. حين يأتي الضغط يصير نص الزر Basıldı. إذا لم يوجد زر فـ querySelector يرجع فراغاً والسطر التالي ينكسر. ضع زراً في HTML أولاً.",
          ],
          code: CODE.button,
          after: ["قبل الضغط يبقى النص القديم. بعد الضغط يتغير النص فقط. الصفحة لا تُعاد تحميلها."],
        },
      ],
    );
  }
  if (lang === "ru") {
    return section(
      "Рабочие примеры",
      "Короткие строки выше показывают одну мысль. Эти примеры ведут маленькую работу от начала до конца. Открой консоль браузера, вставь код и нажми Enter. Потом смени имя или число и запусти снова.",
      [
        {
          heading: "Вывести имена из списка",
          paragraphs: [
            "Несколько имён стоят в одном списке. for берёт каждое имя по очереди и пишет его. Если добавить имя, цикл напишет и его. Отдельная строка на каждое имя не нужна.",
          ],
          code: CODE.names,
          after: ["Выходят три строки: Salam, Aysel, потом Murad, потом Nigar."],
        },
        {
          heading: "Запомнить одного ученика",
          paragraphs: [
            "Объект хранит несколько фактов об одном предмете. Имя и балл стоят вместе. Пишешь ключ после точки — приходит значение. Если балл 50 или больше, пишется Keçdi. Поставь 40, и эта строка промолчит.",
          ],
          code: CODE.student,
          after: ["Сначала Aysel, потом Keçdi. Неверный ключ не угадывает, он даёт undefined."],
        },
        {
          heading: "Найти среднее",
          paragraphs: [
            "total начинается с нуля, и каждый балл прибавляется. В конце сумма делится на количество чисел в списке. Среднее 70, 80 и 90 — это 80. Добавь четвёртый балл, и делитель изменится сам.",
          ],
          code: CODE.average,
          after: ["Появляется 80. Этот пример число не округляет."],
        },
        {
          heading: "Сменить текст кнопки по нажатию",
          paragraphs: [
            "Это работа, которой известен JavaScript. querySelector находит первую кнопку на странице. addEventListener ждёт нажатие. Когда нажатие приходит, текст кнопки становится Basıldı. Если кнопки нет, querySelector возвращает пустоту и следующая строка ломается. Сначала положи кнопку в HTML.",
          ],
          code: CODE.button,
          after: ["До нажатия у кнопки старый текст. После нажатия меняется только текст. Страница не перезагружается."],
        },
      ],
    );
  }
  return section(
    "İşlək nümunələr",
    "Yuxarıdakı qısa sətirlər bir şeyi göstərir. Buradakı nümunələr kiçik bir işi başdan sona aparır. Brauzerin konsolunu aç, kodu yapışdır və Enter bas. Sonra adı və ya rəqəmi dəyişib yenidən işə sal.",
    [
      {
        heading: "Siyahıdan adları yazdırmaq",
        paragraphs: [
          "Bir neçə ad bir siyahıda durur. for hər adı növbə ilə götürür və yazır. Siyahıya ad əlavə etsən, dövr onu da yazacaq. Hər ad üçün ayrı sətir yazmaq lazım deyil.",
        ],
        code: CODE.names,
        after: ["Üç sətir çıxır: Salam, Aysel, sonra Murad, sonra Nigar."],
      },
      {
        heading: "Bir tələbəni yadda saxlamaq",
        paragraphs: [
          "Obyekt bir şeyin bir neçə xüsusiyyətini saxlayır. Ad və bal bir yerdədir. Nöqtədən sonra açarı yazırsan, qiymət gəlir. Bal 50 və ya çoxdursa, Keçdi yazılır. Balı 40 etsən, o sətir susur.",
        ],
        code: CODE.student,
        after: ["Əvvəl Aysel çıxır, sonra Keçdi. Açarı səhv yazsan, JavaScript təxmin etmir, undefined qaytarır."],
      },
      {
        heading: "Orta balı tapmaq",
        paragraphs: [
          "total sıfırdan başlayır və hər bal əlavə olunur. Sonda cəm siyahıdakı sayına bölünür. 70, 80 və 90-ın ortası 80-dir. Dördüncü balı əlavə etsən, bölən özü dəyişir.",
        ],
        code: CODE.average,
        after: ["80 görünür. Bu nümunə ədədi yuvarlaqlaşdırmır."],
      },
      {
        heading: "Düyməyə basılanda yazını dəyişmək",
        paragraphs: [
          "JavaScript-in tanınan işi budur. querySelector səhifədəki ilk düyməni tapır. addEventListener basılmanı gözləyir. Basılma gələndə düymənin yazısı Basıldı olur. Səhifədə düymə yoxdursa, querySelector boş qaytarır və növbəti sətir qırılır. Əvvəl HTML-ə bir düymə qoy.",
        ],
        code: CODE.button,
        after: ["Basılmadan əvvəl düymə köhnə yazısını saxlayır. Basılandan sonra yalnız yazı dəyişir. Səhifə yenidən yüklənmir."],
      },
    ],
  );
}
