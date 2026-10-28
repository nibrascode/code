import{a as e,i as t,r as n,t as r}from"./dsl-BE-ZZbsl.js";var i=[t(`try`,[`try və except`,`try and except`,`try ve except`,`try و except`,`try и except`],n(`İstisna proqram işləyərkən baş verən xətadır. Onu tutmasan proqram dayanır. try blokunda riskli kodu yaz, except-də nə edəcəyini göstər. Mümkün qədər konkret xəta tipini tut.`,`An exception is an error raised while the program runs. If you do not catch it the program stops. Put risky code in try and say in except what to do. Catch the most specific error type you can.`,`İstisna, program çalışırken oluşan hatadır. Yakalamazsan program durur. Riskli kodu try içine yaz, except'te ne yapılacağını belirt. Mümkün olduğunca belirli hata tipini yakala.`,`الاستثناء خطأ يقع أثناء تشغيل البرنامج، وإن لم تلتقطه توقف البرنامج. ضع الكود الخطِر في try واكتب في except ما يجب فعله. والتقط أدق نوع خطأ ممكن.`,`Исключение — это ошибка, возникающая во время работы. Если её не перехватить, программа остановится. Рискованный код помещают в try, а в except описывают реакцию. Перехватывайте как можно более конкретный тип.`),r(`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

print(safe_divide(10, 2))   # 5.0
print(safe_divide(1, 0))    # None`)),t(`else-finally`,[`else və finally`,`else and finally`,`else ve finally`,`else و finally`,`else и finally`],n(`else yalnız xəta olmayanda işləyir. finally isə xəta olsa da olmasa da icra olunur və təmizlik işləri (faylı bağlamaq kimi) üçün yaxşıdır.`,`else runs only when there was no error. finally runs either way and suits clean-up work such as closing a file.`,`else yalnızca hata olmadığında çalışır. finally ise hata olsa da olmasa da çalışır ve dosyayı kapatmak gibi temizlik işleri için uygundur.`,`تعمل else فقط إذا لم يقع خطأ، أما finally فتعمل في الحالتين وتناسب أعمال التنظيف مثل إغلاق ملف.`,`else выполняется только при отсутствии ошибки. finally срабатывает в любом случае и подходит для уборки, например закрытия файла.`),r(`try:
    value = int("42")
except ValueError:
    print("not a number")
else:
    print("parsed", value)
finally:
    print("done")`)),t(`raise`,[`Öz xətanı qaldırmaq`,`Raising your own errors`,`Kendi hatanı fırlatmak`,`إطلاق أخطائك الخاصة`,`Собственные ошибки`],n(`Funksiyaya yanlış qiymət gəlirsə, raise ilə aydın mesajlı xəta qaldır. Daha dəqiq olması üçün öz xəta sinfini də yarada bilərsən.`,`If a function receives a bad value, use raise to signal a clear error. For more precision you can define your own error class.`,`Fonksiyona yanlış değer gelirse raise ile net mesajlı bir hata fırlat. Daha kesin olması için kendi hata sınıfını da tanımlayabilirsin.`,`إذا تلقت الدالة قيمة سيئة فأطلق خطأً برسالة واضحة باستخدام raise. وللمزيد من الدقة يمكنك تعريف صنف خطأ خاص بك.`,`Если функция получила неверное значение, вызовите raise с понятным сообщением. Для точности можно создать собственный класс ошибки.`),r(`class NegativeAmount(Exception):
    pass

def withdraw(balance, amount):
    if amount < 0:
        raise NegativeAmount("amount must be positive")
    return balance - amount

try:
    withdraw(50, -5)
except NegativeAmount as err:
    print("Error:", err)`),e([`Çılpaq except: yazma, xətaları gizlədir.`,`Avoid a bare except:, it hides bugs.`,`Çıplak except: yazma, hataları gizler.`,`تجنّب except: المجردة فهي تخفي الأخطاء.`,`Не пишите голый except: — он скрывает баги.`]))];export{i as default};