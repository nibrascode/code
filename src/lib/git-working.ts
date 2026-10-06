import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

function section(title: string, intro: string, blocks: ProgrammingSection["blocks"]): ProgrammingSection {
  return { id: "islek", title, blocks: [{ paragraphs: [intro] }, ...(blocks ?? [])] };
}

const ONE = `git status
git add note.txt
git commit -m "Add the note"`;

const DIFF = `git diff`;

const LOG = `git log --oneline`;

const PUSH = `git push
git pull`;

export function gitWorking(lang: Lang): ProgrammingSection {
  if (lang === "en") {
    return section(
      "Working examples",
      "The three lines above save everything at once. These examples do a smaller job and say what the screen should show. Run them in a folder that is already a Git project. If git status says this is not a repository, the folder has not been started with git init.",
      [
        {
          heading: "Save one file, not the whole folder",
          paragraphs: [
            "status lists what changed and what Git is not following yet. add note.txt chooses only that file for the next save. Other changed files stay out. commit writes the point. The text in quotes is the message. It should say what you did, not just update. If you write git add . instead, every change in the folder goes into the same point.",
          ],
          code: ONE,
          after: ["After the commit, git status says the working tree is clean. note.txt is in the history. A second file you did not add is not."],
        },
        {
          heading: "See the changed lines before you save",
          paragraphs: [
            "diff shows the difference between the file now and the last commit. A line that starts with + was added. A line that starts with - was removed. This is not a commit. Nothing is saved yet. If you changed nothing, the command prints nothing. Read this before add, so you do not save a password or a half-written line by mistake.",
          ],
          code: DIFF,
          after: ["The screen is a comparison, not a new point in history. Closing the terminal does not undo the edit in the file."],
        },
        {
          heading: "Read the history in short lines",
          paragraphs: [
            "log lists the commits. --oneline puts each one on a single line. The latest commit is at the top. The short word at the start is the id. You use that id when you need to look at an old point. The message is the text you wrote in commit. If the messages are all 'update', the list does not tell you what changed.",
          ],
          code: LOG,
          after: ["You see one line per save. The top line is the last commit. Older ones sit under it."],
        },
        {
          heading: "Send your step, and take someone else's",
          paragraphs: [
            "push sends the commits on your computer to the address you connected, often GitHub. pull brings commits that are on that address but not on your machine. They are not the same command. push does not download a teammate's new work. pull does not upload yours. If pull stops and talks about a conflict, the same line was changed in both places. Git does not choose the right line. You do.",
          ],
          code: PUSH,
          after: ["After a clean push, the site has your latest commit. After a clean pull, your folder has the commits that were only on the site."],
        },
      ],
    );
  }
  if (lang === "tr") {
    return section(
      "Çalışan örnekler",
      "Yukarıdaki üç satır her şeyi birden kaydeder. Bu örnekler daha küçük bir iş yapar ve ekranda ne görünmesi gerektiğini söyler. Bunları zaten Git projesi olan bir klasörde çalıştır. git status bunun depo olmadığını söylüyorsa klasör git init ile başlatılmamıştır.",
      [
        {
          heading: "Bütün klasörü değil, bir dosyayı kaydetmek",
          paragraphs: [
            "status neyin değiştiğini ve Git'in henüz izlemediğini listeler. add note.txt sonraki kayıt için yalnız o dosyayı seçer. Diğer değişen dosyalar dışarıda kalır. commit noktayı yazar. Tırnaktaki yazı mesajdır. Ne yaptığını söylemelidir, yalnız update değil. git add . yazarsan klasördeki her değişiklik aynı noktaya girer.",
          ],
          code: ONE,
          after: ["Commit'ten sonra git status çalışma alanının temiz olduğunu söyler. note.txt tarihtedir. Eklemediğin ikinci dosya yoktur."],
        },
        {
          heading: "Kaydetmeden önce değişen satırları görmek",
          paragraphs: [
            "diff dosyanın şimdiki hali ile son commit arasındaki farkı gösterir. + ile başlayan satır eklendi. - ile başlayan satır silindi. Bu bir commit değildir. Henüz hiçbir şey kaydolmaz. Hiçbir şey değişmediysen komut hiçbir şey yazmaz. add'den önce bunu oku ki parolayı veya yarım satırı yanlışlıkla kaydetmeyesin.",
          ],
          code: DIFF,
          after: ["Ekran bir karşılaştırmadır, tarihte yeni bir nokta değildir. Terminali kapatmak dosyadaki değişikliği geri almaz."],
        },
        {
          heading: "Geçmişi kısa satırlarda okumak",
          paragraphs: [
            "log commit'leri listeler. --oneline her birini tek satıra koyar. En yeni commit üsttedir. Baştaki kısa söz id'dir. Eski bir noktaya bakmak gerektiğinde o id'yi kullanırsın. Mesaj, commit'te yazdığın yazıdır. Mesajların hepsi update ise liste ne değiştiğini söylemez.",
          ],
          code: LOG,
          after: ["Her kayıt için bir satır görürsün. Üst satır son commit'tir. Eskiler onun altında durur."],
        },
        {
          heading: "Kendi adımını göndermek ve başkasınınkini almak",
          paragraphs: [
            "push bilgisayarındaki commit'leri bağladığın adrese gönderir, çoğu zaman GitHub'a. pull o adreste olup senin makinede olmayan commit'leri getirir. Aynı komut değildir. push takım arkadaşının yeni işini indirmez. pull seninkini yüklemez. pull durur ve çakışmadan konuşursa aynı satır iki yerde değişmiştir. Git doğru satırı seçmez. Sen seçersin.",
          ],
          code: PUSH,
          after: ["Temiz bir push'tan sonra sitede senin son commit'in vardır. Temiz bir pull'dan sonra klasöründe yalnız sitede olan commit'ler vardır."],
        },
      ],
    );
  }
  if (lang === "ar") {
    return section(
      "أمثلة تعمل",
      "الأسطر الثلاثة أعلاه تحفظ كل شيء دفعة واحدة. هذه الأمثلة تعمل عملاً أصغر وتقول ماذا يجب أن يظهر على الشاشة. شغّلها في مجلد هو أصلاً مشروع Git. إذا قال git status إن هذا ليس مستودعاً فالمجلد لم يُبدأ بـ git init.",
      [
        {
          heading: "حفظ ملف واحد لا المجلد كله",
          paragraphs: [
            "status يسرد ما تغيّر وما لم يتابعه Git بعد. add note.txt يختار ذلك الملف فقط للحفظ التالي. الملفات الأخرى المتغيرة تبقى خارجاً. commit يكتب النقطة. النص بين التنصيص هو الرسالة. يجب أن يقول ماذا فعلت لا كلمة update فقط. إذا كتبت git add . فكل تغيير في المجلد يدخل النقطة نفسها.",
          ],
          code: ONE,
          after: ["بعد الـ commit يقول git status إن مجلد العمل نظيف. note.txt في التاريخ. الملف الثاني الذي لم تضفه ليس فيه."],
        },
        {
          heading: "رؤية الأسطر المتغيرة قبل الحفظ",
          paragraphs: [
            "diff يُظهر الفرق بين الملف الآن وآخر commit. السطر الذي يبدأ بـ + أُضيف. السطر الذي يبدأ بـ - حُذف. هذا ليس commit. لا شيء يُحفظ بعد. إذا لم يتغير شيء فالأمر لا يطبع شيئاً. اقرأ هذا قبل add كي لا تحفظ كلمة مرور أو سطراً ناقصاً بالخطأ.",
          ],
          code: DIFF,
          after: ["الشاشة مقارنة لا نقطة جديدة في التاريخ. إغلاق الطرفية لا يرجع التعديل في الملف."],
        },
        {
          heading: "قراءة التاريخ في أسطر قصيرة",
          paragraphs: [
            "log يسرد الـ commit. --oneline يضع كل واحد في سطر واحد. أحدث commit في الأعلى. الكلمة القصيرة في البداية هي المعرّف. تستعمله حين تحتاج أن تنظر إلى نقطة قديمة. الرسالة هي النص الذي كتبته في commit. إذا كانت كل الرسائل update فالقائمة لا تقول ماذا تغيّر.",
          ],
          code: LOG,
          after: ["ترى سطراً لكل حفظ. السطر الأعلى هو آخر commit. الأقدم تقف تحته."],
        },
        {
          heading: "إرسال خطوتك وأخذ خطوة غيرك",
          paragraphs: [
            "push يرسل الـ commit التي على حاسوبك إلى العنوان الذي ربطته، غالباً GitHub. pull يجلب الـ commit التي على ذلك العنوان وليست على جهازك. ليسا الأمر نفسه. push لا ينزّل عمل زميلك الجديد. pull لا يرفع عملك. إذا توقف pull وتحدث عن تعارض فالسطر نفسه تغيّر في المكانين. Git لا يختار السطر الصحيح. أنت تختاره.",
          ],
          code: PUSH,
          after: ["بعد push نظيف يكون آخر commit عندك على الموقع. بعد pull نظيف يكون في مجلدك ما كان على الموقع فقط."],
        },
      ],
    );
  }
  if (lang === "ru") {
    return section(
      "Рабочие примеры",
      "Три строки выше сохраняют всё сразу. Эти примеры делают меньшую работу и говорят, что должно появиться на экране. Запускай их в папке, которая уже является проектом Git. Если git status говорит, что это не репозиторий, папка не начата через git init.",
      [
        {
          heading: "Сохранить один файл, а не всю папку",
          paragraphs: [
            "status перечисляет, что изменилось и за чем Git ещё не следит. add note.txt выбирает для следующего сохранения только этот файл. Другие изменённые файлы остаются снаружи. commit записывает точку. Текст в кавычках — сообщение. Оно должно говорить, что ты сделал, а не просто update. Если напишешь git add ., каждое изменение в папке попадёт в ту же точку.",
          ],
          code: ONE,
          after: ["После commit git status говорит, что рабочее дерево чистое. note.txt в истории. Второго файла, который ты не добавил, там нет."],
        },
        {
          heading: "Увидеть изменённые строки до сохранения",
          paragraphs: [
            "diff показывает разницу между файлом сейчас и последним commit. Строка, которая начинается с +, добавлена. Строка с - удалена. Это не commit. Пока ничего не сохранено. Если ничего не менялось, команда ничего не печатает. Прочитай это до add, чтобы не сохранить пароль или недописанную строку по ошибке.",
          ],
          code: DIFF,
          after: ["Экран — это сравнение, а не новая точка в истории. Закрыть терминал — не отменить правку в файле."],
        },
        {
          heading: "Прочитать историю короткими строками",
          paragraphs: [
            "log перечисляет commit. --oneline кладёт каждый в одну строку. Самый новый commit сверху. Короткое слово в начале — это id. Его используют, когда нужно посмотреть старую точку. Сообщение — текст, который ты написал в commit. Если все сообщения update, список не говорит, что изменилось.",
          ],
          code: LOG,
          after: ["Видна одна строка на каждое сохранение. Верхняя строка — последний commit. Более старые стоят под ней."],
        },
        {
          heading: "Отправить свой шаг и взять чужой",
          paragraphs: [
            "push отправляет commit с твоего компьютера на адрес, который ты связал, часто на GitHub. pull приносит commit, которые есть на том адресе, но нет на твоей машине. Это не одна команда. push не скачивает новую работу товарища. pull не загружает твою. Если pull останавливается и говорит о конфликте, одна строка изменена в обоих местах. Git сам верную строку не выбирает. Выбираешь ты.",
          ],
          code: PUSH,
          after: ["После чистого push на сайте есть твой последний commit. После чистого pull в папке есть commit, которые были только на сайте."],
        },
      ],
    );
  }
  return section(
    "İşlək nümunələr",
    "Yuxarıdakı üç sətir hər şeyi bir yerdə saxlayır. Bu nümunələr daha kiçik iş görür və ekranda nə görünməli olduğunu deyir. Onları artıq Git layihəsi olan qovluqda işə sal. git status bunun anbar olmadığını desə, qovluq git init ilə başlamayıb.",
    [
      {
        heading: "Bütün qovluğu yox, bir faylı saxlamaq",
        paragraphs: [
          "status nəyin dəyişdiyini və Git-in hələ izləmədiyini sayır. add note.txt növbəti saxlama üçün yalnız o faylı seçir. Başqa dəyişən fayllar kənarda qalır. commit nöqtəni yazır. Dırnaqdakı yazı mesajdır. Nə etdiyini deməlidir, təkcə update yox. git add . yazsan, qovluqdakı hər dəyişiklik eyni nöqtəyə girir.",
        ],
        code: ONE,
        after: ["Commit-dən sonra git status iş yerinin təmiz olduğunu deyir. note.txt tarixdədir. Əlavə etmədiyin ikinci fayl yoxdur."],
      },
      {
        heading: "Saxlamadan əvvəl dəyişən sətirləri görmək",
        paragraphs: [
          "diff faylın indiki halı ilə son commit arasındakı fərqi göstərir. + ilə başlayan sətir əlavə olunub. - ilə başlayan sətir silinib. Bu commit deyil. Hələ heç nə saxlanmır. Heç nə dəyişməyibsə, əmr heç nə yazmır. add-dən əvvəl bunu oxu ki, şifrəni və ya yarım sətri səhvən saxlamayasın.",
        ],
        code: DIFF,
        after: ["Ekran müqayisədir, tarixdə yeni nöqtə deyil. Terminalı bağlamaq fayldakı dəyişikliyi geri almır."],
      },
      {
        heading: "Tarixi qısa sətirlərdə oxumaq",
        paragraphs: [
          "log commit-ləri sayır. --oneline hər birini bir sətrə qoyur. Ən yeni commit yuxarıdadır. Başdakı qısa söz id-dir. Köhnə nöqtəyə baxmaq lazım olanda həmin id-ni işlədirsən. Mesaj commit-də yazdığın mətndir. Mesajların hamısı update-dirsə, siyahı nəyin dəyişdiyini demir.",
        ],
        code: LOG,
        after: ["Hər saxlama üçün bir sətir görürsən. Üst sətir son commit-dir. Köhnələr onun altında durur."],
      },
      {
        heading: "Öz addımını göndərmək və başqasınınkını götürmək",
        paragraphs: [
          "push kompüterindəki commit-ləri bağladığın ünvana göndərir, çox vaxt GitHub-a. pull həmin ünvanda olub sənin maşınında olmayan commit-ləri gətirir. Eyni əmr deyil. push yoldaşının yeni işini endirmir. pull səninikini yükləmir. pull dayanıb münaqişədən danışırsa, eyni sətir iki yerdə dəyişib. Git düzgün sətri seçmir. Sən seçirsən.",
        ],
        code: PUSH,
        after: ["Təmiz push-dan sonra saytda sənin son commit-in var. Təmiz pull-dan sonra qovluğunda yalnız saytda olan commit-lər var."],
      },
    ],
  );
}
