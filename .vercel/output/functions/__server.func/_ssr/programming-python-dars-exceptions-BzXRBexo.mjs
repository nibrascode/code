//#region node_modules/.nitro/vite/services/ssr/assets/programming-python-dars-exceptions-BzXRBexo.js
var az = {
	"about": ["İstisnalar proqramın icrası zamanı baş verən səhvlərdir. Onlar avtomatik olaraq proqramın dayanmasına səbəb olur, lakin try‑except blokları ilə tutularaq idarə oluna bilər. Bu, kodun gözlənilməz hallarda da işləməsini təmin edir və istifadəçiyə daha aydın mesajlar göstərməyə imkan verir.", "Try bloku riskli əməliyyatları, məsələn, fayl oxumaq və ya bölmə əməliyyatı, saxlayır. Əgər bu blokda istisna atılarsa, uyğun except bloku işə düşür. Else bloku yalnız heç bir istisna baş vermədikdə icra olunur, finally bloku isə həmişə, istisna olsun ya olmasın, icra edilir və təmizləmə işləri üçün uyğundur."],
	"steps": [
		"Riskli kodu try blokuna yerləşdir.",
		"Gözlənilən istisna növünü except blokunda tut.",
		"Heç bir istisna baş vermədikdə icra olunacaq kodu else blokuna əlavə et.",
		"Resursları bağlamaq və ya təmizləmək üçün finally blokundan istifadə et."
	],
	"uses": [
		"Fayl açıb oxuyarkən, fayl bağlanmasını finally ilə təmin etmək.",
		"İstifadəçi daxil etdiyi ədədi int‑ə çevirmək və səhv olduqda mesaj göstərmək.",
		"Şəbəkə sorğusunun uğursuzluğunu tutaraq alternativ yol təklif etmək.",
		"Özəl səhv sinifi yaradaraq funksiyaların giriş parametrlərini yoxlamaq."
	],
	"faq": [
		["Try‑except blokunun məqsədi nədir?", "Try‑except blokunun məqsədi proqramın icrası zamanı baş verə biləcək istisna halları tutmaq, onları emal etmək və proqramın gözlənilmədən dayanmasının qarşısını almaqdır."],
		["Else bloku nə vaxt işə düşür?", "Else bloku yalnız try blokunda heç bir istisna atılmadıqda icra olunur; bu, uğurlu icra nəticəsində əlavə əməliyyatları yerinə yetirmək üçün istifadə olunur."],
		["Finally blokunun əsas rolu nədir?", "Finally bloku istisna baş versə də, versə də, həmişə icra olunur; adətən fayl, şəbəkə və ya verilənlər bazası bağlantılarını bağlamaq kimi təmizləmə işləri üçün istifadə edilir."]
	]
};
var en = {
	"about": ["Exceptions are errors that occur while a program runs. If they are not caught, the program stops. By wrapping risky code in a try‑except block you can intercept these errors, keep the program alive, and present clearer messages to the user.", "The try block contains the code that may raise an exception. If an exception of the specified type occurs, the matching except block runs. An else block runs only when no exception was raised, while a finally block always runs and is ideal for cleanup such as closing files or releasing resources."],
	"steps": [
		"Place the risky code inside a try block.",
		"Add an except clause for the specific exception you expect.",
		"Optionally add an else clause for code that should run only if no exception occurs.",
		"Use a finally clause for cleanup actions that must run regardless of success or failure."
	],
	"uses": [
		"Close a file in a finally block after reading or writing.",
		"Convert user input to an integer and handle ValueError gracefully.",
		"Retry a network request when a timeout exception is caught.",
		"Raise a custom exception to signal invalid function arguments."
	],
	"faq": [
		["What is the purpose of a try‑except block?", "A try‑except block lets you catch runtime errors, handle them in a controlled way, and prevent the whole program from terminating unexpectedly."],
		["When does the else clause execute?", "The else clause runs only if the try block completes without raising any exception, allowing you to execute code that depends on successful execution."],
		["Why use a finally clause?", "A finally clause always runs, whether an exception occurred or not, making it the right place for cleanup tasks such as closing files, sockets, or releasing locks."]
	]
};
var ru = {
	"about": ["Исключения — это ошибки, возникающие во время выполнения программы. Если их не обработать, программа завершается. Поместив потенциально опасный код в блок try‑except, можно перехватить исключение, сохранить работу программы и вывести пользователю понятное сообщение.", "Блок try содержит код, который может вызвать исключение. При возникновении указанного типа исключения выполняется соответствующий блок except. Блок else исполняется только если исключения не было, а finally выполняется всегда и подходит для очистки ресурсов, например, закрытия файлов."],
	"steps": [
		"Поместите рискованный код в блок try.",
		"Добавьте блок except для конкретного типа исключения.",
		"При необходимости добавьте блок else, который выполнится только при отсутствии исключений.",
		"Используйте блок finally для действий очистки, которые должны выполниться в любом случае."
	],
	"uses": [
		"Закрывать файл в finally после чтения или записи.",
		"Обрабатывать ValueError при преобразовании ввода пользователя в число.",
		"Повторять сетевой запрос, если произошёл тайм‑аут.",
		"Поднимать собственное исключение для проверки аргументов функции."
	],
	"faq": [
		["Для чего нужен блок try‑except?", "Блок try‑except позволяет перехватывать ошибки во время выполнения, обрабатывать их и предотвращать аварийное завершение программы."],
		["Когда выполняется блок else?", "Блок else исполняется только если в блоке try не возникло ни одного исключения, т.е. код завершился успешно."],
		["Зачем нужен блок finally?", "Блок finally гарантированно выполняется независимо от того, возникло исключение или нет, и используется для освобождения ресурсов, закрытия файлов и т.п."]
	]
};
var ar = {
	"about": ["الاستثناءات هي الأخطاء التي تحدث أثناء تشغيل البرنامج. إذا لم يتم التقاطها، يتوقف البرنامج. بوضع الكود المعرض للمخاطر داخل كتلة try‑except يمكن اعتراض هذه الأخطاء، إبقاء البرنامج يعمل، وإظهار رسائل واضحة للمستخدم.", "تحتوي كتلة try على الكود الذي قد يرفع استثناءً. إذا حدث استثناء من النوع المحدد، يتم تنفيذ كتلة except المطابقة. كتلة else تُنفَّذ فقط عندما لا يحدث أي استثناء، بينما كتلة finally تُنفَّذ دائمًا وتُستَخدم عادةً لتنظيف الموارد مثل إغلاق الملفات."],
	"steps": [
		"ضع الكود المعرض للمخاطر داخل كتلة try.",
		"أضف عبارة except للنوع المحدد من الاستثناءات.",
		"يمكن إضافة كتلة else لتشغيل كود عندما لا يحدث استثناء.",
		"استخدم كتلة finally لأعمال التنظيف التي يجب أن تُنفَّذ مهما كان الوضع."
	],
	"uses": [
		"إغلاق ملف في كتلة finally بعد القراءة أو الكتابة.",
		"تحويل إدخال المستخدم إلى عدد صحيح ومعالجة ValueError.",
		"إعادة محاولة طلب شبكة عند حدوث استثناء مهلة.",
		"رفع استثناء مخصص للإشارة إلى قيم غير صالحة في الدوال."
	],
	"faq": [
		["ما هدف كتلة try‑except؟", "تمكنك كتلة try‑except من التقاط الأخطاء أثناء التنفيذ، معالجتها بطريقة منظمة، ومنع توقف البرنامج بشكل غير متوقع."],
		["متى يتم تنفيذ كتلة else؟", "تُنفَّذ كتلة else فقط إذا انتهت كتلة try دون رفع أي استثناء، أي عندما ينجح الكود بالكامل."],
		["لماذا نستخدم كتلة finally؟", "تُنفَّذ كتلة finally دائمًا، سواء حدث استثناء أم لا، وتُستَخدم عادةً لأعمال التنظيف مثل إغلاق الملفات أو تحرير الموارد."]
	]
};
var tr = {
	"about": ["İstisnalar, program çalışırken ortaya çıkan hatalardır. Yakalanmazlarsa program durur. Riskli kodu try‑except bloğuna alarak bu hataları yakalayabilir, programın çalışmasını sürdürebilir ve kullanıcıya daha anlaşılır mesajlar gösterebilirsiniz.", "Try bloğu, istisna oluşturabilecek kodu içerir. Belirtilen tipte bir istisna oluşursa ilgili except bloğu çalışır. Else bloğu yalnızca hiç istisna oluşmadığında çalışır, finally bloğu ise her zaman çalışır ve dosya kapatma gibi temizlik işlemleri için uygundur."],
	"steps": [
		"Riskli kodu try bloğuna yerleştir.",
		"Beklenen istisna tipine uygun bir except ekle.",
		"İstisna oluşmadığında çalışacak kodu else bloğuna koy (isteğe bağlı).",
		"Her durumda çalışması gereken temizlik kodunu finally bloğuna ekle."
	],
	"uses": [
		"Dosya okuma/yazma sonrası dosyayı finally içinde kapatmak.",
		"Kullanıcı girdisini tam sayıya çevirirken ValueError'ı yakalamak.",
		"Zaman aşımı istisnası alındığında ağ isteğini yeniden denemek.",
		"Geçersiz argümanları işaret etmek için özel bir istisna yükseltmek."
	],
	"faq": [
		["Try‑except bloğunun amacı nedir?", "Try‑except bloğu, çalışma zamanında oluşan hataları yakalayarak kontrol altına almanızı ve programın beklenmedik şekilde sonlanmasını önlemenizi sağlar."],
		["Else bloğu ne zaman çalışır?", "Else bloğu, try bloğunda hiç istisna oluşmadığında çalışır; yani kod sorunsuz tamamlandığında ek işlemler yapmak için kullanılır."],
		["Finally bloğu neden kullanılır?", "Finally bloğu, istisna oluşsa da olmasa da her zaman çalışır ve dosya, ağ bağlantısı gibi kaynakların serbest bırakılması gibi temizlik görevleri için idealdir."]
	]
};
var programming_python_dars_exceptions_default = {
	az,
	en,
	ru,
	ar,
	tr
};
//#endregion
export { ar, az, programming_python_dars_exceptions_default as default, en, ru, tr };
