import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

function section(title: string, intro: string, blocks: ProgrammingSection["blocks"]): ProgrammingSection {
  return { id: "islek", title, blocks: [{ paragraphs: [intro] }, ...(blocks ?? [])] };
}

const GREETING = `function Greeting({ name }) {
  return <p>Salam, {name}</p>;
}`;

const COUNTER = `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`;

const LIST = `const names = ["Aysel", "Murad"];

function NameList() {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}`;

const SCORE = `function Score({ score }) {
  return <p>{score >= 50 ? "Keçdi" : "Qaldı"}</p>;
}`;

export function reactWorking(lang: Lang): ProgrammingSection {
  if (lang === "en") {
    return section(
      "Working examples",
      "The function above only returns a heading. These four show the ideas people actually use: a value from outside, a number that changes, a list, and a sentence that depends on a score. The browser does not run JSX as it is written. A build tool turns it into JavaScript. useState comes from React, so the file needs the import that your project already shows.",
      [
        {
          heading: "A sentence that takes a name",
          paragraphs: [
            "Greeting is a component. The name inside the braces is a prop: it comes from whoever uses the component. The component does not invent the name. {name} drops that value into the sentence. If the parent passes Aysel, the screen says Salam, Aysel. Change the prop and the sentence changes. The function itself stays the same.",
          ],
          code: GREETING,
          after: ["One component can be used for many names. You do not copy the paragraph for each person."],
        },
        {
          heading: "A button that counts",
          paragraphs: [
            "count is state. It starts at 0. setCount is the only way to give it a new number. The button shows the current number. onClick runs when the person presses. count + 1 does not change count by itself. setCount tells React the new value, and React draws the button again. Writing count = count + 1 skips React, and the screen stays on the old number.",
          ],
          code: COUNTER,
          after: ["Each press shows the next number: 0, then 1, then 2. The page does not reload."],
        },
        {
          heading: "A list from an array",
          paragraphs: [
            "names is ordinary data. map walks each name and returns a li. React needs key so it knows which row is which when the list later changes. Here the name itself is the key, and that is fine only because the two names are different. An empty array draws no rows. Add Nigar to the array and a third row appears without a new line of HTML.",
          ],
          code: LIST,
          after: ["The screen shows two items: Aysel and Murad. The ul is the list. The data is not written inside the tags one by one."],
        },
        {
          heading: "A sentence that depends on the score",
          paragraphs: [
            "score arrives as a prop, like the name above. The question mark picks one of two words. If the score is 50 or more, the paragraph says Keçdi. Otherwise it says Qaldı. 50 itself passes, because the check is greater than or equal. This is still one component. The decision sits in the JavaScript expression, not in a separate HTML file.",
          ],
          code: SCORE,
          after: ["Score 85 shows Keçdi. Score 40 shows Qaldı. The component does not store the score. The caller does."],
        },
      ],
    );
  }
  if (lang === "tr") {
    return section(
      "Çalışan örnekler",
      "Yukarıdaki fonksiyon yalnız bir başlık döndürür. Bu dördü gerçekten kullanılan fikirleri gösterir: dışarıdan gelen değer, değişen sayı, liste ve nota göre değişen cümle. Tarayıcı JSX'i yazıldığı gibi çalıştırmaz. Derleme aracı onu JavaScript'e çevirir. useState React'ten gelir, bu yüzden dosyada projenin zaten gösterdiği import olmalıdır.",
      [
        {
          heading: "Ad alan bir cümle",
          paragraphs: [
            "Greeting bir bileşendir. Süslü parantez içindeki name bir prop'tur: bileşeni kullanan kişiden gelir. Bileşen adı kendi uydurmaz. {name} o değeri cümlenin içine koyar. Üst parça Aysel verirse ekran Salam, Aysel der. Prop değişince cümle değişir. Fonksiyonun kendisi aynı kalır.",
          ],
          code: GREETING,
          after: ["Bir bileşen birçok ad için kullanılabilir. Her kişi için paragrafı kopyalamazsın."],
        },
        {
          heading: "Sayan bir düğme",
          paragraphs: [
            "count state'tir. 0'dan başlar. Ona yeni sayı vermenin yolu setCount'tur. Düğme o anki sayıyı gösterir. onClick kişi basınca çalışır. count + 1 count'u kendi değiştirmez. setCount React'e yeni değeri söyler ve React düğmeyi yeniden çizer. count = count + 1 yazmak React'i atlar, ekran eski sayıda kalır.",
          ],
          code: COUNTER,
          after: ["Her basış sonraki sayıyı gösterir: 0, sonra 1, sonra 2. Sayfa yenilenmez."],
        },
        {
          heading: "Diziden liste",
          paragraphs: [
            "names olağan veridir. map her adı dolaşır ve bir li döndürür. React key ister ki liste sonra değişince hangi satırın hangisi olduğunu bilsin. Burada adın kendisi anahtardır ve bu yalnız iki ad farklı olduğu için uygundur. Boş dizi satır çizmez. Diziye Nigar eklersen üçüncü satır yeni bir HTML satırı olmadan gelir.",
          ],
          code: LIST,
          after: ["Ekranda iki öğe görünür: Aysel ve Murad. ul listedir. Veri etiketlerin içine teker teker yazılmamıştır."],
        },
        {
          heading: "Nota göre değişen cümle",
          paragraphs: [
            "score yukarıdaki ad gibi prop olarak gelir. Soru işareti iki sözden birini seçer. Not 50 veya daha çoksa paragraf Keçdi der. Değilse Qaldı der. 50'nin kendisi geçer, çünkü koşul büyük veya eşittir. Bu hâlâ bir bileşendir. Karar JavaScript ifadesinin içindedir, ayrı bir HTML dosyasında değil.",
          ],
          code: SCORE,
          after: ["85 Keçdi gösterir. 40 Qaldı gösterir. Bileşen notu saklamaz. Çağıran saklar."],
        },
      ],
    );
  }
  if (lang === "ar") {
    return section(
      "أمثلة تعمل",
      "الدالة أعلاه تُرجع عنواناً فقط. هذه الأربعة تُظهر الأفكار التي تُستعمل فعلاً: قيمة من الخارج، ورقم يتغير، وقائمة، وجملة تعتمد على الدرجة. المتصفح لا يشغّل JSX كما هو مكتوب. أداة البناء تحوّله إلى JavaScript. useState يأتي من React، لذلك الملف يحتاج الاستيراد الذي يظهره مشروعك أصلاً.",
      [
        {
          heading: "جملة تأخذ اسماً",
          paragraphs: [
            "Greeting مكوّن. name داخل القوسين prop: يأتي ممن يستعمل المكوّن. المكوّن لا يخترع الاسم. {name} يضع تلك القيمة في الجملة. إذا مرّر الأب Aysel فالشاشة تقول Salam, Aysel. إذا تغير الـ prop تتغير الجملة. الدالة نفسها تبقى.",
          ],
          code: GREETING,
          after: ["مكوّن واحد يُستعمل لأسماء كثيرة. لا تنسخ الفقرة لكل شخص."],
        },
        {
          heading: "زر يعدّ",
          paragraphs: [
            "count هو state. يبدأ من 0. الطريق الوحيد لإعطائه رقماً جديداً هو setCount. الزر يُظهر الرقم الحالي. onClick يعمل حين يضغط الإنسان. count + 1 لا يغيّر count بنفسه. setCount يخبر React بالقيمة الجديدة وReact يرسم الزر مرة أخرى. كتابة count = count + 1 تتجاوز React وتبقى الشاشة على الرقم القديم.",
          ],
          code: COUNTER,
          after: ["كل ضغطة تُظهر الرقم التالي: 0 ثم 1 ثم 2. الصفحة لا تُعاد تحميلها."],
        },
        {
          heading: "قائمة من مصفوفة",
          paragraphs: [
            "names بيانات عادية. map يمر على كل اسم ويرجع li. React يحتاج key كي يعرف أي صف هو أي صف حين تتغير القائمة لاحقاً. هنا الاسم نفسه هو المفتاح وهذا مناسب فقط لأن الاسمين مختلفان. المصفوفة الفارغة لا ترسم صفاً. أضف Nigar إلى المصفوفة فيظهر صف ثالث بلا سطر HTML جديد.",
          ],
          code: LIST,
          after: ["الشاشة تُظهر عنصرين: Aysel وMurad. ul هي القائمة. البيانات ليست مكتوبة داخل الوسوم واحداً واحداً."],
        },
        {
          heading: "جملة تعتمد على الدرجة",
          paragraphs: [
            "score يصل كـ prop مثل الاسم أعلاه. علامة السؤال تختار إحدى كلمتين. إذا كانت الدرجة 50 أو أكثر فالفقرة تقول Keçdi. وإلا تقول Qaldı. الخمسون نفسها نجاح لأن الشرط أكبر أو يساوي. هذا ما زال مكوّناً واحداً. القرار داخل تعبير JavaScript لا في ملف HTML منفصل.",
          ],
          code: SCORE,
          after: ["الدرجة 85 تُظهر Keçdi. الدرجة 40 تُظهر Qaldı. المكوّن لا يخزّن الدرجة. المستدعي يخزّنها."],
        },
      ],
    );
  }
  if (lang === "ru") {
    return section(
      "Рабочие примеры",
      "Функция выше возвращает только заголовок. Эти четыре показывают то, чем пользуются на деле: значение снаружи, меняющееся число, список и фразу, которая зависит от балла. Браузер не запускает JSX как написано. Сборщик превращает его в JavaScript. useState приходит из React, поэтому в файле нужен тот import, который проект уже показывает.",
      [
        {
          heading: "Фраза, которая берёт имя",
          paragraphs: [
            "Greeting — это компонент. name в фигурных скобках — prop: оно приходит от того, кто использует компонент. Компонент сам имя не выдумывает. {name} вставляет это значение в фразу. Если родитель передаёт Aysel, экран говорит Salam, Aysel. Сменился prop — сменилась фраза. Сама функция остаётся той же.",
          ],
          code: GREETING,
          after: ["Один компонент можно использовать для многих имён. Абзац для каждого человека не копируют."],
        },
        {
          heading: "Кнопка, которая считает",
          paragraphs: [
            "count — это state. Он начинается с 0. Новый номер ему даёт только setCount. Кнопка показывает текущее число. onClick срабатывает, когда человек нажимает. count + 1 само count не меняет. setCount говорит React новое значение, и React рисует кнопку снова. Запись count = count + 1 обходит React, и экран остаётся на старом числе.",
          ],
          code: COUNTER,
          after: ["Каждое нажатие показывает следующее число: 0, потом 1, потом 2. Страница не перезагружается."],
        },
        {
          heading: "Список из массива",
          paragraphs: [
            "names — обычные данные. map проходит каждое имя и возвращает li. React нужен key, чтобы знать, какая строка какая, когда список потом изменится. Здесь ключ — само имя, и это годится только потому, что два имени разные. Пустой массив не рисует строк. Добавь в массив Nigar — третья строка появится без новой строки HTML.",
          ],
          code: LIST,
          after: ["На экране два пункта: Aysel и Murad. ul — это список. Данные не написаны в тегах по одному."],
        },
        {
          heading: "Фраза, которая зависит от балла",
          paragraphs: [
            "score приходит как prop, как имя выше. Знак вопроса выбирает одно из двух слов. Если балл 50 или больше, абзац говорит Keçdi. Иначе Qaldı. Сама 50 проходит, потому что проверка — больше или равно. Это всё ещё один компонент. Решение стоит в выражении JavaScript, а не в отдельном файле HTML.",
          ],
          code: SCORE,
          after: ["Балл 85 показывает Keçdi. Балл 40 показывает Qaldı. Компонент балл не хранит. Его хранит тот, кто вызвал."],
        },
      ],
    );
  }
  return section(
    "İşlək nümunələr",
    "Yuxarıdakı funksiya yalnız başlıq qaytarır. Bu dördü həqiqətən işlənən fikirləri göstərir: xaricdən gələn qiymət, dəyişən ədəd, siyahı və bala görə dəyişən cümlə. Brauzer JSX-i yazıldığı kimi işlətmir. Quruluş aləti onu JavaScript-ə çevirir. useState React-dən gəlir, ona görə faylda layihənin artıq göstərdiyi import olmalıdır.",
    [
      {
        heading: "Ad alan cümlə",
        paragraphs: [
          "Greeting komponentdir. Mötərizədəki name prop-dur: onu komponenti işlədən verir. Komponent adı özü uydurmur. {name} həmin qiyməti cümlənin içinə qoyur. Üst hissə Aysel verirsə, ekran Salam, Aysel deyir. Prop dəyişəndə cümlə dəyişir. Funksiyanın özü eyni qalır.",
        ],
        code: GREETING,
        after: ["Bir komponent çox ad üçün işlənə bilər. Hər adam üçün abzası kopyalamırsan."],
      },
      {
        heading: "Sayan düymə",
        paragraphs: [
          "count state-dir. 0-dan başlayır. Ona yeni ədəd verməyin yolu setCount-dur. Düymə həmin anki ədədi göstərir. onClick adam basanda işləyir. count + 1 count-u özü dəyişmir. setCount React-ə yeni qiyməti deyir və React düyməni yenidən çəkir. count = count + 1 yazmaq React-i keçir, ekran köhnə ədəddə qalır.",
        ],
        code: COUNTER,
        after: ["Hər basış növbəti ədədi göstərir: 0, sonra 1, sonra 2. Səhifə yenilənmir."],
      },
      {
        heading: "Siyahıdan massiv",
        paragraphs: [
          "names adi məlumatdır. map hər adı gəzir və bir li qaytarır. React key istəyir ki, siyahı sonra dəyişəndə hansı sətrin hansı olduğunu bilsin. Burada adın özü açardır və bu yalnız iki ad fərqli olduğu üçün uyğundur. Boş massiv sətir çəkmir. Massivə Nigar əlavə etsən, üçüncü sətir yeni HTML sətri olmadan gəlir.",
        ],
        code: LIST,
        after: ["Ekranda iki bənd görünür: Aysel və Murad. ul siyahıdır. Məlumat teqlərin içinə bir-bir yazılmayıb."],
      },
      {
        heading: "Bala görə dəyişən cümlə",
        paragraphs: [
          "score yuxarıdakı ad kimi prop kimi gəlir. Sual işarəsi iki sözdən birini seçir. Bal 50 və ya çoxdursa, abzas Keçdi deyir. Yoxsa Qaldı deyir. 50-nin özü keçir, çünki şərt böyük və ya bərabərdir. Bu hələ bir komponentdir. Qərar JavaScript ifadəsinin içindədir, ayrı HTML faylında deyil.",
        ],
        code: SCORE,
        after: ["85 Keçdi göstərir. 40 Qaldı göstərir. Komponent balı saxlamır. Çağıran saxlayır."],
      },
    ],
  );
}
