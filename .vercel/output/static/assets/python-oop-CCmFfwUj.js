import{a as e,i as t,r as n,t as r}from"./dsl-BE-ZZbsl.js";var i=[t(`class`,[`Sinif və obyekt`,`Classes and objects`,`Sınıf ve nesne`,`الصنف والكائن`,`Класс и объект`],n(`Sinif obyektin layihəsidir, obyekt isə həmin layihədən yaradılan konkret nüsxədir. Məsələn, «Hesab» sinfindən hər müştəri üçün ayrı obyekt yaranır. __init__ metodu obyekt yaranarkən işləyir, self isə obyektin özüdür.`,`A class is a blueprint and an object is a concrete instance built from it. For example, the Account class produces a separate object for each customer. The __init__ method runs when an object is created, and self is the object itself.`,`Sınıf nesnenin planıdır, nesne ise bu plandan üretilen somut örnektir. Örneğin Hesap sınıfından her müşteri için ayrı nesne oluşur. __init__ metodu nesne oluşurken çalışır, self ise nesnenin kendisidir.`,`الصنف مخطط والكائن نسخة فعلية مبنية منه. فمثلًا ينتج الصنف Account كائنًا مستقلًا لكل عميل. تعمل الدالة __init__ عند إنشاء الكائن، و self هو الكائن نفسه.`,`Класс — это чертёж, а объект — конкретный экземпляр, созданный по нему. Например, из класса Account получается отдельный объект для каждого клиента. Метод __init__ срабатывает при создании объекта, а self — это сам объект.`),r(`class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def show(self):
        print(f"{self.owner}: {self.balance} AZN")

a = Account("Rena", 50)
a.deposit(25)
a.show()   # Rena: 75 AZN`),e([`Dəyişənlər (atributlar) obyektin vəziyyətini saxlayır.`,`Attributes hold the state of the object.`,`Öznitelikler nesnenin durumunu saklar.`,`تحفظ السمات حالة الكائن.`,`Атрибуты хранят состояние объекта.`],[`Metodlar obyektin edə biləcəyi işlərdir.`,`Methods are what the object can do.`,`Metotlar nesnenin yapabildiği işlerdir.`,`الطرائق هي ما يستطيع الكائن فعله.`,`Методы — это то, что объект умеет делать.`])),t(`inherit`,[`Varislik`,`Inheritance`,`Kalıtım`,`الوراثة`,`Наследование`],n(`Varislik yeni sinfin mövcud sinfin imkanlarını götürməsinə imkan verir. Alt sinif ana sinfin metodlarını alır, istəsə onları dəyişir (override) və ya super() ilə ana sinfi çağırır.`,`Inheritance lets a new class take over what an existing class offers. The subclass gets the parent's methods, may override them, or call the parent through super().`,`Kalıtım, yeni bir sınıfın var olan sınıfın olanaklarını devralmasını sağlar. Alt sınıf ana sınıfın metotlarını alır, isterse değiştirir (override) veya super() ile ana sınıfı çağırır.`,`تتيح الوراثة لصنف جديد أن يأخذ ما يقدمه صنف قائم. يرث الصنف الفرعي طرائق الأب ويمكنه تجاوزها أو استدعاء الأب عبر super().`,`Наследование позволяет новому классу взять возможности существующего. Подкласс получает методы родителя, может их переопределить или вызвать родителя через super().`),r(`class Account:
    def __init__(self, owner, balance=0):
        self.owner, self.balance = owner, balance

class SavingsAccount(Account):
    def __init__(self, owner, balance=0, rate=0.05):
        super().__init__(owner, balance)
        self.rate = rate

    def add_interest(self):
        self.balance *= 1 + self.rate

s = SavingsAccount("Tural", 200)
s.add_interest()
print(s.balance)   # 210.0`)),t(`special`,[`Xüsusi metodlar və xəbərdarlıq`,`Special methods and a caution`,`Özel metotlar ve bir uyarı`,`الطرائق الخاصة وتنبيه`,`Специальные методы и предупреждение`],n(`__str__ obyektin print ilə necə göstəriləcəyini təyin edir, __len__ len() ilə işləməyi təmin edir. İkiqat alt xətt dilin xüsusi mexanizmlərini işarələyir.`,`__str__ decides how an object looks when printed, and __len__ makes it work with len(). Double underscores mark special language hooks.`,`__str__ nesnenin print ile nasıl görüneceğini belirler, __len__ len() ile çalışmasını sağlar. Çift alt çizgi dilin özel kancalarını işaretler.`,`تحدد __str__ شكل الكائن عند الطباعة، وتجعل __len__ الكائن يعمل مع len(). والشرطتان السفليتان المزدوجتان تدلان على آليات خاصة في اللغة.`,`__str__ определяет, как объект выглядит при печати, а __len__ позволяет использовать len(). Двойные подчёркивания обозначают особые механизмы языка.`),r(`class Playlist:
    def __init__(self, songs):
        self.songs = songs
    def __len__(self):
        return len(self.songs)
    def __str__(self):
        return "Playlist: " + ", ".join(self.songs)

p = Playlist(["A", "B"])
print(p, len(p))`),n(`Tövsiyə: hər şeyi sinifə çevirmək lazım deyil. Sadə hesablama üçün funksiya kifayətdir; sinif isə vəziyyət və davranış birlikdə lazım olanda faydalıdır.`,`Advice: not everything needs to be a class. A function is enough for a simple calculation; a class pays off when state and behaviour belong together.`,`Öneri: her şeyi sınıfa çevirmek gerekmez. Basit bir hesap için fonksiyon yeterlidir; sınıf, durum ve davranış birlikte gerektiğinde işe yarar.`,`نصيحة: ليس كل شيء بحاجة إلى صنف. تكفي دالة لحساب بسيط، أما الصنف فيفيد عندما تتلازم الحالة والسلوك.`,`Совет: не всё нужно превращать в класс. Для простого вычисления достаточно функции; класс оправдан, когда состояние и поведение связаны.`))];export{i as default};