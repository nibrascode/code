import { i as S, r as P, t as C } from "./dsl-0GJBPSOD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/python-control-flow-C0-TrPpu.js
var python_control_flow_default = [
	S("if", [
		"if / elif / else",
		"if / elif / else",
		"if / elif / else",
		"if / elif / else",
		"if / elif / else"
	], P("if proqrama qərar vermək imkanı verir. Şərt doğrudursa, girintili blok işləyir. Bir neçə hal varsa elif, qalan hamısı üçün else işlədilir; yalnız ilk doğru şərtin bloku icra olunur.", "if lets a program make decisions. When the condition is true the indented block runs. For several cases use elif, and else for everything left over; only the first true branch is executed.", "if, programın karar vermesini sağlar. Koşul doğruysa girintili blok çalışır. Birden çok durum için elif, geri kalanlar için else kullanılır; yalnızca ilk doğru koşulun bloğu çalışır.", "تتيح if للبرنامج اتخاذ القرار. إذا تحقق الشرط نُفّذت الكتلة المُزاحة. وللحالات المتعددة نستخدم elif ولكل ما تبقّى else؛ ولا تُنفَّذ إلا أول كتلة شرطها صحيح.", "if позволяет программе принимать решения. Если условие истинно, выполняется блок с отступом. Для нескольких случаев используйте elif, для всего остального — else; выполняется только первая истинная ветка."), C("score = 73\nif score >= 90:\n    grade = \"A\"\nelif score >= 70:\n    grade = \"B\"\nelif score >= 50:\n    grade = \"C\"\nelse:\n    grade = \"F\"\nprint(grade)   # B"), P("Boş mətn, 0, boş siyahı və None şərtdə «yalan» sayılır; qalan qiymətlər «doğru». Bu, if items: kimi qısa yoxlamalara imkan verir.", "An empty string, 0, an empty list and None count as “false” in a condition; other values count as “true”. This allows short checks such as if items:.", "Boş metin, 0, boş liste ve None koşulda «yanlış» sayılır; diğer değerler «doğru». Bu, if items: gibi kısa denetimlere olanak verir.", "النص الفارغ والصفر والقائمة الفارغة وNone تُعدّ «خطأ» في الشرط وما عداها «صواب». وهذا يتيح فحوصًا مختصرة مثل if items:.", "Пустая строка, 0, пустой список и None в условии считаются «ложью», остальное — «истиной». Это позволяет писать короткие проверки вроде if items:.")),
	S("while", [
		"while dövrü",
		"The while loop",
		"while döngüsü",
		"حلقة while",
		"Цикл while"
	], P("while şərt doğru olduğu müddətdə bloku təkrarlayır. Şərtə təsir edən nəsə dəyişməlidir, yoxsa dövr sonsuz olar. break dövrü dərhal dayandırır, continue isə növbəti təkrara keçir.", "while repeats its block as long as the condition is true. Something inside must change the condition, otherwise the loop never ends. break stops the loop at once and continue jumps to the next round.", "while, koşul doğru olduğu sürece bloğu tekrarlar. Koşulu etkileyen bir şey değişmelidir, yoksa döngü sonsuz olur. break döngüyü hemen durdurur, continue sonraki tura geçer.", "تكرّر while كتلتها ما دام الشرط صحيحًا. يجب أن يتغير شيء يؤثر في الشرط وإلا صارت الحلقة لا نهائية. توقف break الحلقة فورًا وتنتقل continue إلى الدورة التالية.", "while повторяет блок, пока условие истинно. Внутри что-то должно менять условие, иначе цикл бесконечен. break сразу прерывает цикл, а continue переходит к следующему витку."), C("balance = 100\nyears = 0\nwhile balance < 200:\n    balance *= 1.07      # +7% per year\n    years += 1\nprint(years, round(balance, 2))")),
	S("for", [
		"for dövrü və range()",
		"The for loop and range()",
		"for döngüsü ve range()",
		"حلقة for ودالة range()",
		"Цикл for и range()"
	], P("for ardıcıllığın hər elementini növbə ilə götürür. Müəyyən sayda təkrar lazımdırsa, range() işlət: range(5) 0-dan 4-ə qədər, range(2, 8, 2) isə 2, 4, 6 verir.", "for takes each element of a sequence in turn. When you need a set number of repeats, use range(): range(5) gives 0 to 4, and range(2, 8, 2) gives 2, 4, 6.", "for, bir dizinin her öğesini sırayla alır. Belirli sayıda tekrar gerekiyorsa range() kullan: range(5) 0'dan 4'e, range(2, 8, 2) ise 2, 4, 6 verir.", "تأخذ for كل عنصر في المتسلسلة بالتتابع. وعند الحاجة إلى عدد محدد من التكرارات استخدم range(): فـ range(5) تعطي 0 إلى 4 وrange(2, 8, 2) تعطي 2 و4 و6.", "for по очереди берёт каждый элемент последовательности. Если нужно заданное число повторов, используйте range(): range(5) даёт 0…4, а range(2, 8, 2) — 2, 4, 6."), C("for fruit in [\"apple\", \"plum\", \"fig\"]:\n    print(fruit.upper())\n\nfor i in range(1, 4):\n    print(i, \"squared is\", i * i)\n\nfor idx, ch in enumerate(\"abc\"):\n    print(idx, ch)"), P("Dövrlər bir-birinin içində ola bilər. for-un sonuna else əlavə etsən, o yalnız dövr break olmadan bitəndə işləyir; bu, axtarış məsələlərində rahatdır.", "Loops can be nested. An else attached to a for runs only when the loop finishes without break, which is handy in search tasks.", "Döngüler iç içe olabilir. for'un sonuna else eklersen yalnızca döngü break olmadan bittiğinde çalışır; bu, arama işlerinde kullanışlıdır.", "يمكن تداخل الحلقات. وإذا أضفت else إلى for فلن تعمل إلا إذا انتهت الحلقة دون break، وهذا مفيد في مسائل البحث.", "Циклы можно вкладывать друг в друга. Блок else у for выполняется, только если цикл завершился без break, — удобно в задачах поиска."), C("for n in range(2, 20):\n    for d in range(2, n):\n        if n % d == 0:\n            break\n    else:\n        print(n, \"is prime\")"))
];
//#endregion
export { python_control_flow_default as default };
