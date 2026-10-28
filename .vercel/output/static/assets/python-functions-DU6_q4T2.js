import{i as e,r as t,t as n}from"./dsl-BE-ZZbsl.js";var r=[e(`define`,[`Funksiyanı təyin etmək`,`Defining a function`,`Fonksiyon tanımlamak`,`تعريف دالة`,`Определение функции`],t(`Funksiya adı olan kod parçasıdır; bir dəfə yazıb dəfələrlə çağırırsan. def ilə təyin olunur, mötərizədə parametrlər yazılır, nəticə return ilə qaytarılır. return olmasa funksiya None qaytarır.`,`A function is a named piece of code: write it once, call it many times. It is defined with def, parameters go in parentheses, and the result comes back with return. Without return a function gives back None.`,`Fonksiyon, adı olan bir kod parçasıdır; bir kez yazar, defalarca çağırırsın. def ile tanımlanır, parametreler parantez içine yazılır, sonuç return ile döner. return yoksa fonksiyon None döndürür.`,`الدالة مقطع كود له اسم: تكتبه مرة وتستدعيه مرات. تُعرَّف بـ def وتوضع المعاملات بين قوسين وتُعاد النتيجة بـ return. وبدون return تعيد الدالة None.`,`Функция — это именованный фрагмент кода: пишете один раз, вызываете много раз. Она объявляется через def, параметры идут в скобках, результат возвращается через return. Без return функция вернёт None.`),n(`def area(width, height):
    return width * height

print(area(4, 5))        # 20
room = area(3.5, 2)
print(room)              # 7.0`),t(`Funksiyanın ilk sətri kimi mətn yazsan, bu docstring olur və help(area) ilə oxunur. Yaxşı funksiya bir iş görür və adı bu işi deyir.`,`A string placed as the first line of a function is a docstring and shows up in help(area). A good function does one job and its name says which.`,`Fonksiyonun ilk satırına metin yazarsan bu docstring olur ve help(area) ile okunur. İyi bir fonksiyon tek iş yapar ve adı bu işi söyler.`,`إذا كتبت نصًا في أول سطر من الدالة فهو docstring ويظهر عبر help(area). الدالة الجيدة تؤدي مهمة واحدة واسمها يدل عليها.`,`Строка в первой строке функции — это docstring, она видна через help(area). Хорошая функция делает одно дело, и её имя говорит какое.`),n(`def is_adult(age):
    """Return True if age is 18 or more."""
    return age >= 18`)),e(`params`,[`Parametrlər`,`Parameters`,`Parametreler`,`المعاملات`,`Параметры`],t(`Parametrə ilkin qiymət vermək olar; onda çağırışda onu yazmaq məcburi deyil. Arqumentləri sıra ilə və ya adla ötürə bilərsən.`,`A parameter can have a default value, so the caller may leave it out. Arguments can be passed by position or by name.`,`Bir parametreye varsayılan değer verilebilir; o zaman çağrıda yazmak zorunlu değildir. Argümanları sırayla veya adıyla iletebilirsin.`,`يمكن إعطاء المعامل قيمة افتراضية فلا يلزم كتابته عند الاستدعاء. وتُمرَّر الوسائط بالترتيب أو بالاسم.`,`Параметру можно задать значение по умолчанию, тогда при вызове его можно не указывать. Аргументы передают по позиции или по имени.`),n(`def greet(name, greeting="Hello", mark="!"):
    return f"{greeting}, {name}{mark}"

print(greet("Leyla"))
print(greet("Leyla", mark="?"))
print(greet(greeting="Salam", name="Kamran"))`),t(`Sayı bilinməyən arqumentlər üçün *args (mövqeli) və **kwargs (adlı) var. Diqqət: ilkin qiymət kimi boş list [] yazma; o, çağırışlar arasında paylaşılır. Əvəzinə None yaz və funksiyanın içində yeni list yarat.`,`For an unknown number of arguments there are *args (positional) and **kwargs (named). Beware: do not use an empty list [] as a default; it is shared between calls. Use None and create a new list inside the function.`,`Sayısı belirsiz argümanlar için *args (konumsal) ve **kwargs (adlı) vardır. Dikkat: varsayılan değer olarak boş liste [] yazma; çağrılar arasında paylaşılır. Bunun yerine None yaz ve fonksiyon içinde yeni liste oluştur.`,`للوسائط غير المعروفة العدد هناك *args (موضعية) و**kwargs (مسمّاة). احذر: لا تضع قائمة فارغة [] قيمة افتراضية لأنها تُشارَك بين الاستدعاءات؛ ضع None وأنشئ قائمة جديدة داخل الدالة.`,`Для неизвестного числа аргументов есть *args (позиционные) и **kwargs (именованные). Осторожно: не используйте пустой список [] как значение по умолчанию — он общий для всех вызовов. Берите None и создавайте список внутри функции.`),n(`def total(*numbers):
    return sum(numbers)

def add_tag(tag, bucket=None):
    if bucket is None:
        bucket = []
    bucket.append(tag)
    return bucket

print(total(1, 2, 3, 4))   # 10
print(add_tag("a"), add_tag("b"))   # ['a'] ['b']`)),e(`scope`,[`Dəyişənin görünmə sahəsi`,`Variable scope`,`Değişkenin görünürlük alanı`,`نطاق المتغير`,`Область видимости`],t(`Funksiyanın içində yaradılan dəyişən lokaldır və kənarda görünmür. Kənardakı (qlobal) dəyişəni oxumaq olar, amma dəyişmək üçün global sözü lazımdır. Praktikada qlobal dəyişəndən qaçmaq və lazım olanı parametrlə ötürmək daha yaxşıdır.`,`A variable created inside a function is local and invisible outside. A global variable can be read inside, but changing it requires the global keyword. In practice it is better to avoid globals and pass what you need as parameters.`,`Fonksiyon içinde oluşturulan değişken yereldir ve dışarıdan görünmez. Dıştaki (global) değişken okunabilir, ama değiştirmek için global sözcüğü gerekir. Pratikte global değişkenden kaçınıp gerekeni parametreyle iletmek daha iyidir.`,`المتغير المنشأ داخل الدالة محلي ولا يُرى خارجها. يمكن قراءة المتغير العام داخلها لكن تغييره يحتاج الكلمة global. والأفضل عمليًا تجنب المتغيرات العامة وتمرير ما تحتاجه عبر المعاملات.`,`Переменная, созданная внутри функции, локальна и снаружи не видна. Глобальную переменную можно читать внутри, а чтобы менять — нужно слово global. На практике лучше избегать глобальных переменных и передавать нужное через параметры.`),n(`rate = 0.18

def with_tax(price):
    tax = price * rate      # reads the global
    return price + tax

print(with_tax(100))
# print(tax)  -> NameError: tax exists only inside the function`))];export{r as default};