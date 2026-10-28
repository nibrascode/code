import{i as e,r as t,t as n}from"./dsl-BE-ZZbsl.js";var r=[e(`input`,[`İstifadəçidən məlumat almaq`,`Reading from the user`,`Kullanıcıdan veri almak`,`قراءة البيانات من المستخدم`,`Ввод от пользователя`],t(`input() istifadəçinin yazdığı mətni qaytarır; qiymət həmişə str tipindədir. Ədəd lazımdırsa int() və ya float() ilə çevir. Yanlış daxiletmə xəta verə bilər, buna görə try ilə qoru.`,`input() returns what the user typed, always as a str. If you need a number, convert it with int() or float(). A wrong entry can raise an error, so guard it with try.`,`input() kullanıcının yazdığı metni döndürür; değer her zaman str'dir. Sayı gerekiyorsa int() veya float() ile dönüştür. Yanlış girdi hata verebilir, bu yüzden try ile koru.`,`تعيد input() ما كتبه المستخدم وهو دائمًا من النوع str. وإذا احتجت عددًا فحوّله بـ int() أو float(). وقد يسبب الإدخال الخاطئ خطأً لذا احمه بـ try.`,`input() возвращает введённый текст — всегда типа str. Нужно число — преобразуйте через int() или float(). Неверный ввод может вызвать ошибку, поэтому оберните в try.`),n(`raw = input("How many tickets? ")
try:
    n = int(raw)
    print("Total:", n * 8, "AZN")
except ValueError:
    print("Please type a whole number")`)),e(`files`,[`Fayllarla işləmək`,`Working with files`,`Dosyalarla çalışmak`,`العمل مع الملفات`,`Работа с файлами`],t(`Faylı with open(...) ilə aç: blok bitəndə fayl avtomatik bağlanır. Rejimlər: "r" oxu, "w" yaz (köhnəni silir), "a" sona əlavə et. Azərbaycan hərfləri üçün encoding="utf-8" göstər.`,`Open a file with with open(...): it closes automatically when the block ends. Modes: "r" read, "w" write (erases the old content), "a" append. Specify encoding="utf-8" for non-English letters.`,`Dosyayı with open(...) ile aç: blok bitince dosya otomatik kapanır. Modlar: "r" oku, "w" yaz (eskisini siler), "a" sona ekle. Türkçe karakterler için encoding="utf-8" belirt.`,`افتح الملف بـ with open(...) فيُغلق تلقائيًا عند انتهاء الكتلة. الأوضاع: "r" للقراءة و"w" للكتابة (تمسح القديم) و"a" للإلحاق. وحدّد encoding="utf-8" للحروف غير الإنجليزية.`,`Открывайте файл через with open(...): по окончании блока он закроется сам. Режимы: "r" — чтение, "w" — запись (стирает старое), "a" — дозапись. Для не-английских букв укажите encoding="utf-8".`),n(`with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("first\\n")
    f.write("second\\n")

with open("notes.txt", encoding="utf-8") as f:
    for line in f:
        print(line.strip())`)),e(`json`,[`Məlumatı JSON ilə saxlamaq`,`Saving data as JSON`,`Veriyi JSON ile saklamak`,`حفظ البيانات بصيغة JSON`,`Сохранение данных в JSON`],t(`Siyahı və lüğəti fayla yazmağın rahat yolu json modulıdır; nəticə insan tərəfindən də oxunur və başqa dillərlə uyğundur.`,`The json module is a convenient way to write lists and dictionaries to a file; the result is human-readable and compatible with other languages.`,`Liste ve sözlükleri dosyaya yazmanın rahat yolu json modülüdür; sonuç insan tarafından da okunur ve başka dillerle uyumludur.`,`وحدة json طريقة مريحة لكتابة القوائم والقواميس في ملف، والنتيجة مقروءة للبشر ومتوافقة مع لغات أخرى.`,`Модуль json — удобный способ записать списки и словари в файл; результат читаем и совместим с другими языками.`),n(`import json

data = {"user": "Sevda", "scores": [90, 85]}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open("data.json", encoding="utf-8") as f:
    back = json.load(f)
print(back["scores"])`))];export{r as default};