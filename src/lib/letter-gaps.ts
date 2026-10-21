import type { Lang } from "@/lib/i18n";

type Piece = { title: string; lead: string; points: readonly string[]; note?: string };

const L = (az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> => ({ az, en, tr, ar, ru });

function piece(
  title: Record<Lang, string>,
  lead: Record<Lang, string>,
  points: Record<Lang, readonly string[]>,
  note?: Record<Lang, string>,
): Record<Lang, Piece> {
  return {
    az: { title: title.az, lead: lead.az, points: points.az, note: note?.az },
    en: { title: title.en, lead: lead.en, points: points.en, note: note?.en },
    tr: { title: title.tr, lead: lead.tr, points: points.tr, note: note?.tr },
    ar: { title: title.ar, lead: lead.ar, points: points.ar, note: note?.ar },
    ru: { title: title.ru, lead: lead.ru, points: points.ru, note: note?.ru },
  };
}

export const LETTER_GAPS = [
  {
    slug: "etme",
    code: `def duzelt(metn: str) -> str:
    return metn.encode("cp1252").decode("utf-8")

print(duzelt("Ã¶dÉ™yici"))
`,
    piece: piece(
      L(
        "ödəyici sözü ödÉ™yici olur",
        "ödəyici turns into ödÉ™yici",
        "ödəyici sözcüğü ödÉ™yici olur",
        "كلمة ödəyici تصير ödÉ™yici",
        "Слово ödəyici становится ödÉ™yici",
      ),
      L(
        "UTF-8-də `ə` iki baytdır: `C9 99`. Windows-1252 bu baytları hərf kimi oxuyur: `C9` `É`, `99` isə `™` olur. Ona görə `ə` ekranda `É™` kimi görünür. `ö` eyni yolla `Ã¶` olur. `ödəyici` beləcə `Ã¶dÉ™yici` yazılır.\n\nTürk səhifələri `ş`, `ğ`, `ı` üçün cədvəl verir. `É™` o cədvəldə yoxdur, çünki türkcədə `ə` yoxdur.\n\nHərf artıq `?` olubsa, bu kod onu qaytarmır. Bayt itib.",
        "In UTF-8, `ə` is two bytes: `C9 99`. Windows-1252 reads those bytes as letters: `C9` is `É`, and `99` is `™`. So `ə` shows as `É™`. The same path turns `ö` into `Ã¶`. `ödəyici` is then written `Ã¶dÉ™yici`.\n\nTurkish pages give a table for `ş`, `ğ`, and `ı`. `É™` is not in that table, because Turkish has no `ə`.\n\nIf the letter is already `?`, this code cannot bring it back. The byte is gone.",
        "UTF-8'de `ə` iki bayttır: `C9 99`. Windows-1252 bu baytları harf gibi okur: `C9` `É`, `99` ise `™` olur. Bu yüzden `ə` ekranda `É™` görünür. `ö` aynı yolla `Ã¶` olur. `ödəyici` böylece `Ã¶dÉ™yici` yazılır.\n\nTürkçe sayfalar `ş`, `ğ`, `ı` için tablo verir. `É™` o tabloda yoktur, çünkü Türkçede `ə` yoktur.\n\nHarf çoktan `?` olduysa bu kod onu geri getirmez. Bayt gitmiştir.",
        "في UTF-8 حرف `ə` بايتان: `C9 99`. يقرأ Windows-1252 هذين البايتين كحرفين: `C9` هو `É` و`99` هو `™`. لذلك يظهر `ə` كـ `É™`. وبالطريقة نفسها يصير `ö` هو `Ã¶`. فتُكتب `ödəyici` هكذا: `Ã¶dÉ™yici`.\n\nصفحات التركية تعطي جدولًا لـ `ş` و`ğ` و`ı`. و`É™` ليس في ذلك الجدول لأن التركية بلا `ə`.\n\nإذا صار الحرف `?` فهذا الرمز لا يُرجعه. البايت ذهب.",
        "В UTF-8 буква `ə` — это два байта: `C9 99`. Windows-1252 читает их как буквы: `C9` это `É`, а `99` это `™`. Поэтому `ə` на экране выглядит как `É™`. Тем же путём `ö` становится `Ã¶`. Слово `ödəyici` записывается как `Ã¶dÉ™yici`.\n\nТурецкие страницы дают таблицу для `ş`, `ğ` и `ı`. `É™` в той таблице нет, потому что в турецком нет `ə`.\n\nЕсли буква уже стала `?`, этот код её не вернёт. Байт потерян.",
      ),
      {
        az: [
          "Kodu olduğu kimi işlət: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` yenidən `ödəyici` olur.",
          "`É™` görəndə əvəzləmə cədvəli axtarma. Bu, `ə` hərfinin Windows-1252 ilə səhv oxunuşudur.",
          "`ş`, `ğ`, `ı` üçün türk cədvəli `É™`-ni düzəltmir. `ə` o cədvəldə yoxdur.",
          "Kod xəta atırsa, mətndə artıq `cp1252` baytı olmayan işarə var. Həmin yeri əl ilə yaz.",
          "Hərf `?` olubsa, bayt itib. Mətni mənbədən yenidən götür.",
        ],
        en: [
          "Use the code as it is: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` becomes `ödəyici` again.",
          "When you see `É™`, do not look for a replacement table. That is `ə` read wrongly as Windows-1252.",
          "A Turkish table for `ş`, `ğ`, and `ı` does not fix `É™`. `ə` is not in that table.",
          "If the code throws, the text already has a mark that is not a `cp1252` byte. Type that place by hand.",
          "If the letter is `?`, the byte is gone. Take the text from the source again.",
        ],
        tr: [
          "Kodu olduğu gibi kullan: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` yeniden `ödəyici` olur.",
          "`É™` görünce değiştirme tablosu arama. Bu, `ə` harfinin Windows-1252 ile yanlış okunuşudur.",
          "`ş`, `ğ`, `ı` için Türkçe tablo `É™` düzeltmez. `ə` o tabloda yoktur.",
          "Kod hata verirse metinde artık `cp1252` baytı olmayan bir işaret vardır. O yeri elle yaz.",
          "Harf `?` olduysa bayt gitmiştir. Metni kaynaktan yeniden al.",
        ],
        ar: [
          "استعمل الرمز كما هو: `metn.encode(\"cp1252\").decode(\"utf-8\")`. تعود `Ã¶dÉ™yici` إلى `ödəyici`.",
          "إذا رأيت `É™` فلا تبحث عن جدول استبدال. هذا `ə` قُرئ خطأ كـ Windows-1252.",
          "جدول تركي لـ `ş` و`ğ` و`ı` لا يصلح `É™`. حرف `ə` ليس في ذلك الجدول.",
          "إذا رمى الرمز خطأ ففي النص علامة لم تعد بايت `cp1252`. اكتب ذلك الموضع بيدك.",
          "إذا صار الحرف `?` فقد ذهب البايت. خذ النص من المصدر من جديد.",
        ],
        ru: [
          "Используй код как есть: `metn.encode(\"cp1252\").decode(\"utf-8\")`. `Ã¶dÉ™yici` снова становится `ödəyici`.",
          "Увидев `É™`, не ищи таблицу замен. Это буква `ə`, неверно прочитанная как Windows-1252.",
          "Турецкая таблица для `ş`, `ğ` и `ı` не чинит `É™`. Буквы `ə` в той таблице нет.",
          "Если код бросает ошибку, в тексте уже есть знак, который не байт `cp1252`. Это место напиши рукой.",
          "Если буква стала `?`, байт потерян. Возьми текст из источника заново.",
        ],
      },
      L(
        "Düzəlmiş mətni yenidən `utf-8` saxla. Eyni faylı bir daha `cp1252` kimi oxuma.",
        "Save the fixed text as `utf-8` again. Do not read the same file as `cp1252` a second time.",
        "Düzelmiş metni yeniden `utf-8` kaydet. Aynı dosyayı bir daha `cp1252` gibi okuma.",
        "احفظ النص المُصلح من جديد كـ `utf-8`. لا تقرأ الملف نفسه مرة ثانية كـ `cp1252`.",
        "Исправленный текст снова сохрани как `utf-8`. Тот же файл второй раз как `cp1252` не читай.",
      ),
    ),
  },
  {
    slug: "csharp-e",
    code: `using System.Text;

Console.OutputEncoding = Encoding.UTF8;
File.WriteAllText("metn.txt", "Azərbaycan", new UTF8Encoding(encoderShouldEmitUTF8Identifier: true));
`,
    piece: piece(
      L(
        "C#-də ə hərfi sual işarəsi olur",
        "In C# the letter ə becomes a question mark",
        "C#'ta ə harfi soru işareti olur",
        "في C# يصير حرف ə علامة سؤال",
        "В C# буква ə становится вопросительным знаком",
      ),
      L(
        "Azərbaycan Windows-unda köhnə mətn cədvəli çox vaxt `1254`-dür. Bu, türk cədvəlidir. İçində `ü`, `ö`, `ş`, `ğ`, `ç`, `ı` var. `ə` yoxdur. `Encoding.GetEncoding(1254)` həmin hərfi saxlaya bilmir və yerinə `?` qoyur.\n\nFaylı və konsolu UTF-8 et. `1254` yazma.",
        "On Azerbaijani Windows the old text table is often `1254`. That is the Turkish table. It has `ü`, `ö`, `ş`, `ğ`, `ç`, and `ı`. It does not have `ə`. `Encoding.GetEncoding(1254)` cannot store that letter and puts `?` in its place.\n\nMake the file and the console UTF-8. Do not write `1254`.",
        "Azerbaycan Windows'unda eski metin tablosu çoğu zaman `1254`'tür. Bu, Türkçe tablodur. İçinde `ü`, `ö`, `ş`, `ğ`, `ç`, `ı` vardır. `ə` yoktur. `Encoding.GetEncoding(1254)` o harfi saklayamaz ve yerine `?` koyar.\n\nDosyayı ve konsolu UTF-8 yap. `1254` yazma.",
        "في Windows الأذربيجاني جدول النص القديم غالبًا `1254`. هذا جدول تركي. فيه `ü` و`ö` و`ş` و`ğ` و`ç` و`ı`. ليس فيه `ə`. و`Encoding.GetEncoding(1254)` لا يستطيع حفظ ذلك الحرف ويضع `?` مكانه.\n\nاجعل الملف والطرفية UTF-8. لا تكتب `1254`.",
        "На азербайджанском Windows старая таблица текста часто `1254`. Это турецкая таблица. В ней есть `ü`, `ö`, `ş`, `ğ`, `ç` и `ı`. Буквы `ə` нет. `Encoding.GetEncoding(1254)` не может её сохранить и ставит `?`.\n\nСделай файл и консоль UTF-8. Не пиши `1254`.",
      ),
      {
        az: [
          "Faylı belə yaz: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
          "`Encoding.GetEncoding(1254)` və `Encoding.Default` yazma. Orada `ə` yoxdur.",
          "Konsolda kvadrat görürsənsə, əvvəl `Console.OutputEncoding = Encoding.UTF8` qoy.",
          "Köhnə `csc` mənbəni sistem cədvəli ilə oxuyur. `.cs` faylını UTF-8 BOM ilə saxla.",
          "Hərf artıq `?` olubsa, kod onu qaytarmır. Mətni yenidən yaz.",
        ],
        en: [
          "Write the file like this: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
          "Do not write `Encoding.GetEncoding(1254)` or `Encoding.Default`. `ə` is not there.",
          "If the console shows a square, first set `Console.OutputEncoding = Encoding.UTF8`.",
          "An old `csc` reads the source with the system table. Save the `.cs` file as UTF-8 with a BOM.",
          "If the letter is already `?`, code cannot bring it back. Write the text again.",
        ],
        tr: [
          "Dosyayı şöyle yaz: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
          "`Encoding.GetEncoding(1254)` ve `Encoding.Default` yazma. Orada `ə` yoktur.",
          "Konsolda kare görüyorsan önce `Console.OutputEncoding = Encoding.UTF8` koy.",
          "Eski `csc` kaynağı sistem tablosuyla okur. `.cs` dosyasını UTF-8 BOM ile kaydet.",
          "Harf çoktan `?` olduysa kod onu geri getirmez. Metni yeniden yaz.",
        ],
        ar: [
          "اكتب الملف هكذا: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
          "لا تكتب `Encoding.GetEncoding(1254)` ولا `Encoding.Default`. حرف `ə` ليس هناك.",
          "إذا ظهرت مربع في الطرفية فضع أولًا `Console.OutputEncoding = Encoding.UTF8`.",
          "`csc` القديم يقرأ المصدر بجدول النظام. احفظ ملف `.cs` كـ UTF-8 مع BOM.",
          "إذا صار الحرف `?` فالرمز لا يُرجعه. اكتب النص من جديد.",
        ],
        ru: [
          "Пиши файл так: `File.WriteAllText(\"metn.txt\", \"Azərbaycan\", new UTF8Encoding(true))`.",
          "Не пиши `Encoding.GetEncoding(1254)` и `Encoding.Default`. Буквы `ə` там нет.",
          "Если в консоли квадрат, сначала поставь `Console.OutputEncoding = Encoding.UTF8`.",
          "Старый `csc` читает исходник системной таблицей. Сохрани файл `.cs` как UTF-8 с BOM.",
          "Если буква уже `?`, код её не вернёт. Напиши текст заново.",
        ],
      },
    ),
  },
  {
    slug: "whatsapp-excel",
    code: `from pathlib import Path
import csv

text = Path("sohbet.txt").read_text(encoding="utf-8")
rows = []
for line in text.splitlines():
    if " - " not in line or ": " not in line:
        continue
    left, message = line.split(": ", 1)
    when, name = left.split(" - ", 1)
    rows.append((when, name, message))

with open("sohbet.csv", "w", newline="", encoding="utf-8-sig") as fayl:
    writer = csv.writer(fayl)
    writer.writerow(["tarix", "ad", "mesaj"])
    writer.writerows(rows)
`,
    piece: piece(
      L(
        "WhatsApp söhbəti Excel-də ə hərfi pozulur",
        "A WhatsApp chat breaks ə in Excel",
        "WhatsApp sohbeti Excel'de ə harfini bozar",
        "دردشة WhatsApp تُفسد حرف ə في Excel",
        "Переписка WhatsApp ломает ə в Excel",
      ),
      L(
        "Azərbaycan telefonundan çıxan söhbət belə bir sətirdir: `12.10.2026, 14:05 - Əli: salam`. Fayl UTF-8-dir. Excel onu iki dəfə basanda sistem cədvəli ilə açır. Orada `ə` yoxdur, hərf `?` və ya başqa işarə olur.\n\n`.txt` faylını Excel-ə birbaşa açma. Əvvəl CSV yaz və əvvəlində BOM qoy.",
        "A chat exported from an Azerbaijani phone is a line like this: `12.10.2026, 14:05 - Əli: salam`. The file is UTF-8. When you double-click it, Excel opens it with the system table. That table has no `ə`, so the letter becomes `?` or another mark.\n\nDo not open the `.txt` straight in Excel. Write a CSV first and put a BOM at the start.",
        "Azerbaycan telefonundan çıkan sohbet şöyle bir satırdır: `12.10.2026, 14:05 - Əli: salam`. Dosya UTF-8'dir. Excel'e çift tıklayınca sistem tablosuyla açar. Orada `ə` yoktur, harf `?` ya da başka bir işaret olur.\n\n`.txt` dosyasını Excel'e doğrudan açma. Önce CSV yaz ve başına BOM koy.",
        "الدردشة الخارجة من هاتف أذربيجاني سطر كهذا: `12.10.2026, 14:05 - Əli: salam`. الملف UTF-8. حين تفتحه بنقرتين يفتحه Excel بجدول النظام. ليس فيه `ə`، فيصير الحرف `?` أو علامة أخرى.\n\nلا تفتح ملف `.txt` في Excel مباشرة. اكتب CSV أولًا وضع BOM في أوله.",
        "Переписка с азербайджанского телефона — это строка вроде `12.10.2026, 14:05 - Əli: salam`. Файл в UTF-8. Если открыть его двойным щелчком, Excel читает системной таблицей. Буквы `ə` там нет, и она становится `?` или другим знаком.\n\nНе открывай `.txt` прямо в Excel. Сначала запиши CSV и поставь BOM в начало.",
      ),
      {
        az: [
          "Söhbəti mediasız ixrac et. Çıxan `.txt` faylını UTF-8 kimi oxu.",
          "CSV-ni `encoding=\"utf-8-sig\"` ilə yaz. Excel onda `ə` hərfinı görür.",
          "Sətir `tarix - ad: mesaj` formasındadır. Tarixdə nöqtə və ya kəsir ola bilər. Onu tarixə çevirmə, mətn saxla.",
          "Media sətri və sistem sətri `:` daşımır. Kod onları keçir.",
          "`.txt` faylını Excel-ə sürükləmə. Hərf orada pozulur.",
        ],
        en: [
          "Export the chat without media. Read the `.txt` that comes out as UTF-8.",
          "Write the CSV with `encoding=\"utf-8-sig\"`. Excel then sees the letter `ə`.",
          "A line looks like `date - name: message`. The date may use a dot or a slash. Do not turn it into a date. Keep it as text.",
          "A media line and a system line have no `:`. The code skips them.",
          "Do not drag the `.txt` into Excel. The letter breaks there.",
        ],
        tr: [
          "Sohbeti mediasız dışa aktar. Çıkan `.txt` dosyasını UTF-8 olarak oku.",
          "CSV'yi `encoding=\"utf-8-sig\"` ile yaz. Excel o zaman `ə` harfini görür.",
          "Satır `tarih - ad: mesaj` biçimindedir. Tarihte nokta ya da kesir olabilir. Onu tarihe çevirme, metin tut.",
          "Medya satırı ve sistem satırı `:` taşımaz. Kod onları atlar.",
          "`.txt` dosyasını Excel'e sürükleme. Harf orada bozulur.",
        ],
        ar: [
          "صدّر الدردشة بلا وسائط. اقرأ ملف `.txt` الخارج كـ UTF-8.",
          "اكتب CSV بـ `encoding=\"utf-8-sig\"`. عندها يرى Excel حرف `ə`.",
          "السطر على شكل `تاريخ - اسم: رسالة`. قد يكون في التاريخ نقطة أو شرطة مائلة. لا تحوّله إلى تاريخ. أبقه نصًا.",
          "سطر الوسائط وسطر النظام بلا `:`. الرمز يتخطاهما.",
          "لا تسحب ملف `.txt` إلى Excel. الحرف يفسد هناك.",
        ],
        ru: [
          "Выгрузи переписку без медиа. Вышедший `.txt` читай как UTF-8.",
          "Пиши CSV с `encoding=\"utf-8-sig\"`. Тогда Excel видит букву `ə`.",
          "Строка имеет вид `дата - имя: сообщение`. В дате может быть точка или дробь. Не превращай её в дату, оставь текстом.",
          "Строка медиа и системная строка не содержат `:`. Код их пропускает.",
          "Не перетаскивай `.txt` в Excel. Буква там ломается.",
        ],
      },
    ),
  },
  {
    slug: "pdf-e",
    code: `from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

pdfmetrics.registerFont(TTFont("Arial", r"C:\\Windows\\Fonts\\arial.ttf"))
fayl = canvas.Canvas("sened.pdf")
fayl.setFont("Arial", 14)
fayl.drawString(40, 800, "Azərbaycan")
fayl.save()
`,
    piece: piece(
      L(
        "PDF-də ə hərfi kvadrat olur",
        "In a PDF the letter ə becomes a square",
        "PDF'de ə harfi kare olur",
        "في PDF يصير حرف ə مربعًا",
        "В PDF буква ə становится квадратом",
      ),
      L(
        "Kvadrat o deməkdir ki, şriftin içində `ə` yoxdur və ya PDF şrifti fayla basdırmayıb. Oxuyucu hərfi tapa bilmir, yerinə boş qutu qoyur.\n\nHelvetica, bir çox köhnə PDF şriftləri və bəzək şriftləri `ə` daşımır. Arial, Calibri, Times New Roman və Noto Sans daşıyır.\n\nKvadrat artıq PDF-in içindədirsə, başqa oxuyucu onu düzəltmir. Şrifti dəyişib faylı yenidən yaz.",
        "A square means the font has no `ə`, or the PDF did not embed the font. The reader cannot find the letter and puts an empty box in its place.\n\nHelvetica, many old PDF fonts, and decorative fonts do not carry `ə`. Arial, Calibri, Times New Roman, and Noto Sans do.\n\nIf the square is already inside the PDF, another reader will not fix it. Change the font and write the file again.",
        "Kare, şriftin içinde `ə` olmadığı ya da PDF'in şrifti dosyaya gömmediği demektir. Okuyucu harfi bulamaz, yerine boş kutu koyar.\n\nHelvetica, birçok eski PDF şrifti ve süs şriftleri `ə` taşımaz. Arial, Calibri, Times New Roman ve Noto Sans taşır.\n\nKare çoktan PDF'in içindeyse başka okuyucu onu düzeltmez. Şrifti değiştirip dosyayı yeniden yaz.",
        "المربع يعني أن الخط بلا `ə`، أو أن PDF لم يُضمّن الخط. القارئ لا يجد الحرف ويضع صندوقًا فارغًا مكانه.\n\nHelvetica وكثير من خطوط PDF القديمة وخطوط الزينة لا تحمل `ə`. أما Arial وCalibri وTimes New Roman وNoto Sans فتحملها.\n\nإذا كان المربع داخل PDF أصلًا فقارئ آخر لا يصلحه. غيّر الخط واكتب الملف من جديد.",
        "Квадрат значит, что в шрифте нет `ə` или PDF не встроил шрифт. Читалка не находит букву и ставит пустую коробку.\n\nHelvetica, многие старые PDF-шрифты и декоративные шрифты не содержат `ə`. Arial, Calibri, Times New Roman и Noto Sans содержат.\n\nЕсли квадрат уже внутри PDF, другая читалка его не исправит. Смени шрифт и запиши файл заново.",
      ),
      {
        az: [
          "Python-da hazır Helvetica işlətmə. Arial və ya Noto Sans qeyd et və fayla basdır.",
          "Word-da Fayl, Seçimlər, Saxla bölməsində şriftləri fayla basdırmağı aç. Sonra PDF yaz.",
          "LibreOffice-də PDF ixracında standart şriftləri basdır. Əks halda başqa kompüterdə kvadrat qalır.",
          "Bəzək şrifti `ə` daşımır. Başlığı onda saxla, mətni Arial et.",
          "Kvadrat olan köhnə PDF-i oxuyucu düzəltmir. Mənbəni yenidən ixrac et.",
        ],
        en: [
          "In Python do not use the built-in Helvetica. Register Arial or Noto Sans and embed it.",
          "In Word, under File, Options, Save, turn on embedding fonts in the file. Then write the PDF.",
          "In LibreOffice, embed the standard fonts when you export a PDF. Otherwise the square stays on another computer.",
          "A decorative font does not carry `ə`. Keep the title in it and set the text to Arial.",
          "A reader does not fix an old PDF that already has squares. Export the source again.",
        ],
        tr: [
          "Python'da hazır Helvetica kullanma. Arial ya da Noto Sans kaydet ve dosyaya göm.",
          "Word'da Dosya, Seçenekler, Kaydet bölümünde fontları dosyaya gömmeyi aç. Sonra PDF yaz.",
          "LibreOffice'de PDF dışa aktarırken standart fontları göm. Yoksa başka bilgisayarda kare kalır.",
          "Süs fontu `ə` taşımaz. Başlığı onda tut, metni Arial yap.",
          "Kare olan eski PDF'i okuyucu düzeltmez. Kaynağı yeniden dışa aktar.",
        ],
        ar: [
          "في Python لا تستعمل Helvetica الجاهز. سجّل Arial أو Noto Sans وضمّنه في الملف.",
          "في Word، من ملف ثم خيارات ثم حفظ، فعّل تضمين الخطوط في الملف. ثم اكتب PDF.",
          "في LibreOffice ضمّن الخطوط القياسية عند تصدير PDF. وإلا يبقى المربع على حاسوب آخر.",
          "خط الزينة لا يحمل `ə`. أبقِ العنوان به واجعل النص Arial.",
          "القارئ لا يصلح PDF قديمًا فيه مربعات. صدّر المصدر من جديد.",
        ],
        ru: [
          "В Python не бери встроенную Helvetica. Зарегистрируй Arial или Noto Sans и встрой в файл.",
          "В Word: Файл, Параметры, Сохранение — включи встраивание шрифтов в файл. Потом запиши PDF.",
          "В LibreOffice при экспорте PDF встрой стандартные шрифты. Иначе квадрат останется на другом компьютере.",
          "Декоративный шрифт не содержит `ə`. Заголовок оставь в нём, текст поставь Arial.",
          "Читалка не чинит старый PDF, где квадраты уже есть. Экспортируй источник заново.",
        ],
      },
    ),
  },
  {
    slug: "mysql-e",
    code: `import pymysql

baglanti = pymysql.connect(
    host="127.0.0.1",
    user="root",
    password="",
    database="magaza",
    charset="utf8mb4",
)
`,
    piece: piece(
      L(
        "MySQL-də ə hərfi sual işarəsi olur",
        "In MySQL the letter ə becomes a question mark",
        "MySQL'de ə harfi soru işareti olur",
        "في MySQL يصير حرف ə علامة سؤال",
        "В MySQL буква ə становится вопросительным знаком",
      ),
      L(
        "`ə` iki baytdır. Köhnə `utf8` onu saxlaya bilir. Pozulma çox vaxt bağlantıdandır: proqram mətni `latin1` kimi göndərir, sütun da `latin1`-dirsə hərf `?` olur.\n\nBazanı və bağlantını `utf8mb4` et. `latin1` yazma. Hərf artıq `?` olubsa, cədvəli dəyişmək onu qaytarmır.",
        "`ə` is two bytes. The old `utf8` can store it. The break usually comes from the connection: the program sends the text as `latin1`, and if the column is `latin1` too, the letter becomes `?`.\n\nMake the database and the connection `utf8mb4`. Do not write `latin1`. If the letter is already `?`, changing the table does not bring it back.",
        "`ə` iki bayttır. Eski `utf8` onu saklayabilir. Bozulma çoğu zaman bağlantıdandır: program metni `latin1` gibi gönderir, sütun da `latin1` ise harf `?` olur.\n\nVeritabanını ve bağlantıyı `utf8mb4` yap. `latin1` yazma. Harf çoktan `?` olduysa tabloyu değiştirmek onu geri getirmez.",
        "`ə` بايتان. الـ `utf8` القديم يستطيع حفظه. الفساد غالبًا من الاتصال: البرنامج يرسل النص كـ `latin1`، وإذا كان العمود `latin1` أيضًا صار الحرف `?`.\n\nاجعل القاعدة والاتصال `utf8mb4`. لا تكتب `latin1`. إذا صار الحرف `?` فتغيير الجدول لا يُرجعه.",
        "`ə` — это два байта. Старый `utf8` может её хранить. Поломка обычно из соединения: программа шлёт текст как `latin1`, и если столбец тоже `latin1`, буква становится `?`.\n\nСделай базу и соединение `utf8mb4`. Не пиши `latin1`. Если буква уже `?`, смена таблицы её не вернёт.",
      ),
      {
        az: [
          "Bazanı belə aç: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
          "Python-da `charset=\"utf8mb4\"` yaz. `charset=\"latin1\"` və boş charset `ə` hərfinı `?` edir.",
          "Köhnə sütun `latin1`-dirsə, əvvəl mətni ixrac et, sonra sütunu `utf8mb4` elə. Əks ardıcıllıq `?` saxlayır.",
          "`SET NAMES utf8mb4` bağlantı üçündür. Artıq yazılmış `?` simvolunu dəyişmir.",
          "Sıralama üçün MySQL 8-də `utf8mb4_az_0900_ai_ci` var. Adında `az` olan cədvəl `ə` hərfinı `e` ilə bir saymır.",
        ],
        en: [
          "Open the database like this: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
          "In Python write `charset=\"utf8mb4\"`. `charset=\"latin1\"` and an empty charset turn `ə` into `?`.",
          "If an old column is `latin1`, export the text first, then make the column `utf8mb4`. The other order keeps `?`.",
          "`SET NAMES utf8mb4` is for the connection. It does not change a `?` that is already stored.",
          "For sorting, MySQL 8 has `utf8mb4_az_0900_ai_ci`. A collation whose name contains `az` does not treat `ə` as `e`.",
        ],
        tr: [
          "Veritabanını şöyle aç: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
          "Python'da `charset=\"utf8mb4\"` yaz. `charset=\"latin1\"` ve boş charset `ə` harfini `?` yapar.",
          "Eski sütun `latin1` ise önce metni dışa aktar, sonra sütunu `utf8mb4` yap. Ters sıra `?` saklar.",
          "`SET NAMES utf8mb4` bağlantı içindir. Çoktan yazılmış `?` simgesini değiştirmez.",
          "Sıralama için MySQL 8'de `utf8mb4_az_0900_ai_ci` vardır. Adında `az` olan sıralama `ə` harfini `e` ile bir saymaz.",
        ],
        ar: [
          "افتح القاعدة هكذا: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
          "في Python اكتب `charset=\"utf8mb4\"`. و`charset=\"latin1\"` والترميز الفارغ يجعلان `ə` يصير `?`.",
          "إذا كان العمود القديم `latin1` فصدّر النص أولًا ثم اجعل العمود `utf8mb4`. الترتيب العكسي يُبقي `?`.",
          "`SET NAMES utf8mb4` للاتصال. لا يغيّر رمز `?` المكتوب أصلًا.",
          "للترتيب في MySQL 8 يوجد `utf8mb4_az_0900_ai_ci`. الترتيب الذي في اسمه `az` لا يعدّ `ə` كـ `e`.",
        ],
        ru: [
          "Открой базу так: `CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`.",
          "В Python пиши `charset=\"utf8mb4\"`. `charset=\"latin1\"` и пустая кодировка превращают `ə` в `?`.",
          "Если старый столбец `latin1`, сначала выгрузи текст, потом сделай столбец `utf8mb4`. Обратный порядок оставляет `?`.",
          "`SET NAMES utf8mb4` для соединения. Уже записанный знак `?` он не меняет.",
          "Для сортировки в MySQL 8 есть `utf8mb4_az_0900_ai_ci`. Сопоставление, в имени которого есть `az`, не считает `ə` буквой `e`.",
        ],
      },
    ),
  },
  {
    slug: "sms-e",
    code: `XUSUSI = set("əƏöÖüÜğĞşŞçÇıİ")

def hisseler(metn: str) -> int:
    ucs = any(h in XUSUSI for h in metn)
    n = len(metn.encode("utf-16-le")) // 2
    if not ucs:
        return 1 if n <= 160 else (n + 152) // 153
    return 1 if n <= 70 else (n + 66) // 67

print(hisseler("a" * 100))
print(hisseler("ə" + "a" * 99))
`,
    piece: piece(
      L(
        "SMS-də ə hərfi mesajı 70 simvola endirir",
        "In an SMS the letter ə cuts the message to 70 characters",
        "SMS'te ə harfi mesajı 70 karaktere indirir",
        "في الرسالة القصيرة حرف ə يُنزل الرسالة إلى 70 رمزًا",
        "В SMS буква ə укорачивает сообщение до 70 знаков",
      ),
      L(
        "Sadə latın hərfləri bir SMS-ə 160 simvol sığdırır. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç` və ya `ı` o cədvəldə yoxdur. Bir dənəsi bütün mesajı başqa cədvələ keçirir: limit 70 olur. Uzun mesajda hissələr 67 simvoldan bölünür.\n\nTürk operator cədvəli `ö`, `ü`, `ğ`, `ş`, `ç`, `ı` saxlaya bilər. `ə` orada da yoxdur. Əksər göndəriş qapıları türk cədvəlini açmır, ona görə bu hərflərin hamısı 70-ə salır.\n\nHərfi `e` ilə əvəz etmək sözü dəyişir. `əl` və `el` eyni deyil. Sayını əvvəl hesabla.",
        "Plain Latin letters fit 160 characters in one SMS. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç`, and `ı` are not in that table. One of them moves the whole message to another table: the limit becomes 70. In a long message the parts split at 67 characters.\n\nThe Turkish operator table can hold `ö`, `ü`, `ğ`, `ş`, `ç`, and `ı`. `ə` is not there either. Most sending gates do not turn on the Turkish table, so all of these letters drop the message to 70.\n\nReplacing the letter with `e` changes the word. `əl` and `el` are not the same. Count first.",
        "Düz Latin harfleri bir SMS'e 160 karakter sığdırır. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç` ya da `ı` o tabloda yoktur. Bir tanesi bütün mesajı başka tabloya geçirir: sınır 70 olur. Uzun mesajda parçalar 67 karakterden bölünür.\n\nTürk operatör tablosu `ö`, `ü`, `ğ`, `ş`, `ç`, `ı` tutabilir. `ə` orada da yoktur. Çoğu gönderim kapısı Türkçe tabloyu açmaz, onun için bu harflerin hepsi 70'e düşürür.\n\nHarfi `e` ile değiştirmek sözü değiştirir. `əl` ile `el` aynı değildir. Önce say.",
        "الحروف اللاتينية البسيطة تسع 160 رمزًا في رسالة واحدة. `ə` و`ö` و`ü` و`ğ` و`ş` و`ç` و`ı` ليست في ذلك الجدول. واحد منها ينقل الرسالة كلها إلى جدول آخر: يصير الحد 70. في الرسالة الطويلة تُقسم الأجزاء عند 67 رمزًا.\n\nجدول المشغّل التركي قد يحفظ `ö` و`ü` و`ğ` و`ş` و`ç` و`ı`. و`ə` ليست هناك أيضًا. أكثر بوابات الإرسال لا تفتح الجدول التركي، لذلك كل هذه الحروف تُنزل الرسالة إلى 70.\n\nاستبدال الحرف بـ `e` يغيّر الكلمة. `əl` و`el` ليستا واحدًا. احسب أولًا.",
        "Простые латинские буквы вмещают 160 знаков в одну SMS. `ə`, `ö`, `ü`, `ğ`, `ş`, `ç` и `ı` в той таблице нет. Одной хватает, чтобы всё сообщение перешло в другую таблицу: предел становится 70. В длинном сообщении части делятся по 67 знаков.\n\nТурецкая таблица оператора может держать `ö`, `ü`, `ğ`, `ş`, `ç` и `ı`. Буквы `ə` нет и там. Большинство шлюзов турецкую таблицу не включают, поэтому все эти буквы сбрасывают сообщение на 70.\n\nЗамена буквы на `e` меняет слово. `əl` и `el` — не одно и то же. Сначала посчитай.",
      ),
      {
        az: [
          "Kod iki rəqəm yazır. `a` yüz dəfə bir hissədir. Əvvəlində `ə` olanda eyni yüz simvol iki hissədir.",
          "`ə` tək başına kifayətdir. Qalan hərflər latın olsa da mesaj 70-ə keçir.",
          "71 simvol iki hissədir. Sonrakı bölgü 67-dən gedir: 134-ə qədər iki hissə, 135 üç hissədir.",
          "Emoji də 70-ə salır və bəzən iki yer tutur. Bu sayğac onu ayrıca saymır.",
          "Hərfi silmək mətnin mənasını dəyişir. Göndərişdən əvvəl hissə sayını gör.",
        ],
        en: [
          "The code prints two numbers. One hundred `a` characters are one part. The same hundred characters with `ə` in front are two parts.",
          "`ə` alone is enough. The message goes to 70 even if the other letters are Latin.",
          "71 characters are two parts. After that the split is 67: up to 134 is two parts, 135 is three.",
          "An emoji also drops the message to 70 and sometimes takes two places. This counter does not count that separately.",
          "Removing the letter changes the meaning. See the part count before you send.",
        ],
        tr: [
          "Kod iki sayı yazar. Yüz tane `a` bir parçadır. Başına `ə` gelince aynı yüz karakter iki parçadır.",
          "`ə` tek başına yeter. Diğer harfler Latin olsa da mesaj 70'e geçer.",
          "71 karakter iki parçadır. Sonraki bölünme 67'dendir: 134'e kadar iki parça, 135 üç parçadır.",
          "Emoji de 70'e düşürür ve bazen iki yer tutar. Bu sayaç onu ayrı saymaz.",
          "Harfi silmek metnin anlamını değiştirir. Göndermeden önce parça sayısını gör.",
        ],
        ar: [
          "الرمز يطبع رقمين. مئة `a` جزء واحد. إذا جاءت `ə` في الأول فنفس المئة رمز جزءان.",
          "`ə` وحدها تكفي. الرسالة تنتقل إلى 70 ولو كانت بقية الحروف لاتينية.",
          "71 رمزًا جزءان. التقسيم بعده عند 67: حتى 134 جزءان، و135 ثلاثة.",
          "الرموز التعبيرية تُنزل الرسالة إلى 70 أيضًا وقد تأخذ مكانين. هذا العدّاد لا يحسب ذلك على حدة.",
          "حذف الحرف يغيّر المعنى. انظر عدد الأجزاء قبل الإرسال.",
        ],
        ru: [
          "Код печатает два числа. Сто букв `a` — это одна часть. Те же сто знаков с `ə` впереди — две части.",
          "Одной `ə` достаточно. Сообщение уходит на 70, даже если остальные буквы латинские.",
          "71 знак — это две части. Дальше деление по 67: до 134 две части, 135 — три.",
          "Эмодзи тоже сбрасывает сообщение на 70 и иногда занимает два места. Этот счётчик это отдельно не считает.",
          "Убирать букву — менять смысл. Перед отправкой посмотри число частей.",
        ],
      },
    ),
  },
  {
    slug: "java-e",
    code: `import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

byte[] bom = new byte[] {(byte) 0xEF, (byte) 0xBB, (byte) 0xBF};
byte[] metn = "ad\\nAzərbaycan\\n".getBytes(StandardCharsets.UTF_8);
byte[] fayl = new byte[bom.length + metn.length];
System.arraycopy(bom, 0, fayl, 0, bom.length);
System.arraycopy(metn, 0, fayl, bom.length, metn.length);
Files.write(Path.of("metn.csv"), fayl);
`,
    piece: piece(
      L(
        "Java-da Excel üçün ə hərfi pozulur",
        "In Java the letter ə breaks for Excel",
        "Java'da Excel için ə harfi bozulur",
        "في Java يفسد حرف ə من أجل Excel",
        "В Java буква ə портится для Excel",
      ),
      L(
        "`FileWriter` faylı sistem cədvəli ilə yazır. Azərbaycan Windows-unda bu, çox vaxt `Cp1254`-dür. Orada `ə` yoxdur, hərf `?` olur.\n\n`Files.writeString` UTF-8 yazır, amma əvvələ üç bayt qoymur. Excel həmin faylı yenə sistem cədvəli ilə aça bilər. `ödəyici` o zaman `ödÉ™yici` kimi görünür.\n\nƏvvələ `EF BB BF` qoy. `Cp1254` yazma.",
        "`FileWriter` writes the file with the system table. On Azerbaijani Windows that is often `Cp1254`. `ə` is not there, so the letter becomes `?`.\n\n`Files.writeString` writes UTF-8, but it does not put three bytes at the start. Excel can still open that file with the system table. `ödəyici` then looks like `ödÉ™yici`.\n\nPut `EF BB BF` at the start. Do not write `Cp1254`.",
        "`FileWriter` dosyayı sistem tablosuyla yazar. Azerbaycan Windows'unda bu çoğu zaman `Cp1254`'tür. Orada `ə` yoktur, harf `?` olur.\n\n`Files.writeString` UTF-8 yazar ama başa üç bayt koymaz. Excel o dosyayı yine sistem tablosuyla açabilir. `ödəyici` o zaman `ödÉ™yici` gibi görünür.\n\nBaşa `EF BB BF` koy. `Cp1254` yazma.",
        "`FileWriter` يكتب الملف بجدول النظام. في Windows الأذربيجاني هذا غالبًا `Cp1254`. ليس فيه `ə`، فيصير الحرف `?`.\n\n`Files.writeString` يكتب UTF-8 لكنه لا يضع ثلاث بايتات في الأول. قد يفتح Excel ذلك الملف بجدول النظام أيضًا. فتبدو `ödəyici` كـ `ödÉ™yici`.\n\nضع `EF BB BF` في الأول. لا تكتب `Cp1254`.",
        "`FileWriter` пишет файл системной таблицей. На азербайджанском Windows это часто `Cp1254`. Буквы `ə` там нет, и она становится `?`.\n\n`Files.writeString` пишет UTF-8, но не ставит три байта в начало. Excel всё равно может открыть тот файл системной таблицей. Тогда `ödəyici` выглядит как `ödÉ™yici`.\n\nПоставь в начало `EF BB BF`. Не пиши `Cp1254`.",
      ),
      {
        az: [
          "CSV-ni yuxarıdakı üç baytla yaz. Excel `ə` hərfinı görür.",
          "`new FileWriter(\"metn.csv\")` yazma. Cədvəli özü seçir və `ə` itib.",
          "`Cp1254` və `windows-1254` hərfı saxlamır. UTF-8-dən başqa cədvəl seçmə.",
          "`Files.writeString` BOM qoymur. Brauzer üçün bəsdir, Excel üçün yox.",
          "Faylda hərf artıq `?` olubsa, Java onu qaytarmır. Mətni yenidən yaz.",
        ],
        en: [
          "Write the CSV with the three bytes above. Excel then sees `ə`.",
          "Do not write `new FileWriter(\"metn.csv\")`. It picks the table itself and `ə` is lost.",
          "`Cp1254` and `windows-1254` do not store the letter. Do not pick a table other than UTF-8.",
          "`Files.writeString` does not add a BOM. That is enough for a browser, not for Excel.",
          "If the letter in the file is already `?`, Java cannot bring it back. Write the text again.",
        ],
        tr: [
          "CSV'yi yukarıdaki üç baytla yaz. Excel o zaman `ə` harfini görür.",
          "`new FileWriter(\"metn.csv\")` yazma. Tabloyu kendi seçer ve `ə` gider.",
          "`Cp1254` ve `windows-1254` harfi saklamaz. UTF-8 dışında tablo seçme.",
          "`Files.writeString` BOM koymaz. Tarayıcı için yeter, Excel için yetmez.",
          "Dosyada harf çoktan `?` olduysa Java onu geri getirmez. Metni yeniden yaz.",
        ],
        ar: [
          "اكتب CSV بالبايتات الثلاث أعلاه. عندها يرى Excel حرف `ə`.",
          "لا تكتب `new FileWriter(\"metn.csv\")`. هو يختار الجدول بنفسه و`ə` تضيع.",
          "`Cp1254` و`windows-1254` لا يحفظان الحرف. لا تختر جدولًا غير UTF-8.",
          "`Files.writeString` لا يضع BOM. يكفي للمتصفح لا لـ Excel.",
          "إذا صار الحرف في الملف `?` فـ Java لا تُرجعه. اكتب النص من جديد.",
        ],
        ru: [
          "Пиши CSV с тремя байтами выше. Тогда Excel видит `ə`.",
          "Не пиши `new FileWriter(\"metn.csv\")`. Он сам выбирает таблицу, и `ə` теряется.",
          "`Cp1254` и `windows-1254` букву не хранят. Не выбирай таблицу кроме UTF-8.",
          "`Files.writeString` не ставит BOM. Для браузера хватает, для Excel нет.",
          "Если буква в файле уже `?`, Java её не вернёт. Напиши текст заново.",
        ],
      },
    ),
  },
  {
    slug: "php-e",
    code: `<?php
header("Content-Type: text/html; charset=utf-8");
$baglanti = new PDO(
    "mysql:host=127.0.0.1;dbname=magaza;charset=utf8mb4",
    "root",
    ""
);
echo "Azərbaycan";
`,
    piece: piece(
      L(
        "PHP-də ə hərfi sual işarəsi olur",
        "In PHP the letter ə becomes a question mark",
        "PHP'de ə harfi soru işareti olur",
        "في PHP يصير حرف ə علامة سؤال",
        "В PHP буква ə становится вопросительным знаком",
      ),
      L(
        "İki yer ayrıdır. Səhifə brauzerə nə göndərdiyini deməlidir. Baza bağlantısı isə mətni necə yazdığını.\n\nBaşlıq yoxdursa brauzer səhifəni sistem cədvəli ilə oxuya bilər. Bağlantıda `charset` yoxdursa MySQL mətni `latin1` saya bilər. Hər iki yolda `ə` `?` olur.\n\nFaylın özü də UTF-8 saxlanmalıdır. PHP başlığı faylın içindəki baytı düzəltmir.",
        "Two places are separate. The page has to say what it sends to the browser. The database connection has to say how it writes the text.\n\nWithout the header the browser may read the page with the system table. Without `charset` on the connection MySQL may treat the text as `latin1`. On both paths `ə` becomes `?`.\n\nThe file itself must be saved as UTF-8. A PHP header does not repair the bytes inside the file.",
        "İki yer ayrıdır. Sayfa tarayıcıya ne gönderdiğini söylemeli. Veritabanı bağlantısı ise metni nasıl yazdığını.\n\nBaşlık yoksa tarayıcı sayfayı sistem tablosuyla okuyabilir. Bağlantıda `charset` yoksa MySQL metni `latin1` sayabilir. İki yolda da `ə` `?` olur.\n\nDosyanın kendisi de UTF-8 kaydedilmelidir. PHP başlığı dosyanın içindeki baytı düzeltmez.",
        "المكانان منفصلان. الصفحة يجب أن تقول ماذا ترسل إلى المتصفح. واتصال القاعدة يقول كيف يُكتب النص.\n\nبلا الترويسة قد يقرأ المتصفح الصفحة بجدول النظام. وبلا `charset` في الاتصال قد تعدّ MySQL النص `latin1`. في الطريقين يصير `ə` هو `?`.\n\nالملف نفسه يجب أن يُحفظ UTF-8. ترويسة PHP لا تصلح البايت داخل الملف.",
        "Два места разные. Страница должна сказать, что она шлёт браузеру. Соединение с базой — как оно пишет текст.\n\nБез заголовка браузер может прочитать страницу системной таблицей. Без `charset` в соединении MySQL может счесть текст `latin1`. На обоих путях `ə` становится `?`.\n\nСам файл тоже надо сохранить в UTF-8. Заголовок PHP не чинит байт внутри файла.",
      ),
      {
        az: [
          "Hər səhifənin əvvəlində `header(\"Content-Type: text/html; charset=utf-8\")` olsun.",
          "PDO sətrində `charset=utf8mb4` yaz. `charset` olmayan DSN `ə` hərfinı `?` edə bilər.",
          "`mysqli` işlədirsən, bağlantıdan sonra `mysqli_set_charset($baglanti, \"utf8mb4\")` çağır.",
          "`.php` faylını UTF-8 saxla. Redaktor ANSI seçibsə, hərf fayla düşməmiş olur.",
          "Cədvəldə hərf artıq `?` olubsa, başlığı dəyişmək onu qaytarmır. Sətri yenidən yaz.",
        ],
        en: [
          "At the start of each page put `header(\"Content-Type: text/html; charset=utf-8\")`.",
          "In the PDO string write `charset=utf8mb4`. A DSN without `charset` can turn `ə` into `?`.",
          "If you use `mysqli`, after connecting call `mysqli_set_charset($baglanti, \"utf8mb4\")`.",
          "Save the `.php` file as UTF-8. If the editor picked ANSI, the letter never entered the file.",
          "If the letter in the table is already `?`, changing the header does not bring it back. Write the row again.",
        ],
        tr: [
          "Her sayfanın başında `header(\"Content-Type: text/html; charset=utf-8\")` olsun.",
          "PDO satırında `charset=utf8mb4` yaz. `charset` olmayan DSN `ə` harfini `?` yapabilir.",
          "`mysqli` kullanıyorsan bağlantıdan sonra `mysqli_set_charset($baglanti, \"utf8mb4\")` çağır.",
          "`.php` dosyasını UTF-8 kaydet. Düzenleyici ANSI seçtiyse harf dosyaya hiç girmez.",
          "Tabloda harf çoktan `?` olduysa başlığı değiştirmek onu geri getirmez. Satırı yeniden yaz.",
        ],
        ar: [
          "في أول كل صفحة ضع `header(\"Content-Type: text/html; charset=utf-8\")`.",
          "في سطر PDO اكتب `charset=utf8mb4`. سلسلة بلا `charset` قد تجعل `ə` تصير `?`.",
          "إذا استعملت `mysqli` فبعد الاتصال استدعِ `mysqli_set_charset($baglanti, \"utf8mb4\")`.",
          "احفظ ملف `.php` كـ UTF-8. إذا اختار المحرر ANSI فالحرف لم يدخل الملف أصلًا.",
          "إذا صار الحرف في الجدول `?` فتغيير الترويسة لا يُرجعه. اكتب الصف من جديد.",
        ],
        ru: [
          "В начале каждой страницы поставь `header(\"Content-Type: text/html; charset=utf-8\")`.",
          "В строке PDO напиши `charset=utf8mb4`. DSN без `charset` может превратить `ə` в `?`.",
          "Если используешь `mysqli`, после соединения вызови `mysqli_set_charset($baglanti, \"utf8mb4\")`.",
          "Сохрани файл `.php` как UTF-8. Если редактор выбрал ANSI, буква в файл так и не попала.",
          "Если буква в таблице уже `?`, смена заголовка её не вернёт. Запиши строку заново.",
        ],
      },
    ),
  },
  {
    slug: "android-e",
    code: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="olke">Azərbaycan</string>
</resources>
`,
    piece: piece(
      L(
        "Android-də ə hərfi sual işarəsi olur",
        "On Android the letter ə becomes a question mark",
        "Android'de ə harfi soru işareti olur",
        "في Android يصير حرف ə علامة سؤال",
        "На Android буква ə становится вопросительным знаком",
      ),
      L(
        "Mətn `res/values-az/strings.xml` içində durur. Fayl UTF-8 deyilsə, `ə` ya yığılma zamanı xəta verir, ya da telefonda `?` olur.\n\nHərfi kodla gizlətmək məcburi deyil. Fayl düz saxlanıbsa, sözün özü yazılır. Redaktor hərfi saxlaya bilmirsə, yerinə `\\u0259` qoymaq olar. Bu, eyni hərfdir.",
        "The text lives in `res/values-az/strings.xml`. If the file is not UTF-8, `ə` either fails the build or shows as `?` on the phone.\n\nYou do not have to hide the letter in an escape. If the file is saved correctly, the word itself is written. If the editor cannot store the letter, you can put `\\u0259` in its place. That is the same letter.",
        "Metin `res/values-az/strings.xml` içindedir. Dosya UTF-8 değilse `ə` ya derleme sırasında hata verir ya da telefonda `?` olur.\n\nHarfi kodla gizlemek zorunlu değildir. Dosya doğru kaydedildiyse sözün kendisi yazılır. Düzenleyici harfi saklayamıyorsa yerine `\\u0259` konabilir. Bu, aynı harftir.",
        "النص في `res/values-az/strings.xml`. إذا لم يكن الملف UTF-8 فـ `ə` إما تُفشل البناء أو تظهر `?` على الهاتف.\n\nليس واجبًا إخفاء الحرف برمز. إذا حُفظ الملف صحيحًا تُكتب الكلمة نفسها. إذا لم يستطع المحرر حفظ الحرف فضع `\\u0259` مكانه. هذا الحرف نفسه.",
        "Текст лежит в `res/values-az/strings.xml`. Если файл не UTF-8, `ə` либо ломает сборку, либо на телефоне становится `?`.\n\nПрятать букву в код не обязательно. Если файл сохранён верно, пишется само слово. Если редактор не может сохранить букву, на её место можно поставить `\\u0259`. Это та же буква.",
      ),
      {
        az: [
          "Faylı `res/values-az/strings.xml` qoy. Birinci sətir `encoding=\"utf-8\"` olsun.",
          "Notepad ANSI seçibsə, Android Studio-da faylı UTF-8 kimi yenidən saxla.",
          "`encoding=\"windows-1254\"` yazma. O cədvəl `ə` daşımır.",
          "Redaktor hərfi qəbul etmirsə, sözün içində `\\u0259` yaz. Ekranda yenə `ə` görünür.",
          "Tətbiq artıq qurulubsa və hərf `?`-dirsə, mətn paketə səhv düşüb. Faylı düzəldib yenidən qur.",
        ],
        en: [
          "Put the file at `res/values-az/strings.xml`. The first line should be `encoding=\"utf-8\"`.",
          "If Notepad picked ANSI, save the file again as UTF-8 in Android Studio.",
          "Do not write `encoding=\"windows-1254\"`. That table does not carry `ə`.",
          "If the editor will not take the letter, write `\\u0259` inside the word. The screen still shows `ə`.",
          "If the app is already installed and the letter is `?`, the text went into the package wrong. Fix the file and build again.",
        ],
        tr: [
          "Dosyayı `res/values-az/strings.xml` koy. İlk satır `encoding=\"utf-8\"` olsun.",
          "Notepad ANSI seçtiyse dosyayı Android Studio'da yeniden UTF-8 kaydet.",
          "`encoding=\"windows-1254\"` yazma. O tablo `ə` taşımaz.",
          "Düzenleyici harfi kabul etmiyorsa sözün içinde `\\u0259` yaz. Ekranda yine `ə` görünür.",
          "Uygulama kurulmuşsa ve harf `?` ise metin pakete yanlış düşmüştür. Dosyayı düzeltip yeniden derle.",
        ],
        ar: [
          "ضع الملف في `res/values-az/strings.xml`. السطر الأول يكون `encoding=\"utf-8\"`.",
          "إذا اختار Notepad‏ ANSI فاحفظ الملف من جديد كـ UTF-8 في Android Studio.",
          "لا تكتب `encoding=\"windows-1254\"`. ذلك الجدول لا يحمل `ə`.",
          "إذا رفض المحرر الحرف فاكتب `\\u0259` داخل الكلمة. الشاشة تُظهر `ə` أيضًا.",
          "إذا كان التطبيق مثبّتًا والحرف `?` فقد دخل النص الحزمة خطأ. أصلح الملف وابنِ من جديد.",
        ],
        ru: [
          "Положи файл в `res/values-az/strings.xml`. Первая строка пусть будет `encoding=\"utf-8\"`.",
          "Если Блокнот выбрал ANSI, сохрани файл заново как UTF-8 в Android Studio.",
          "Не пиши `encoding=\"windows-1254\"`. Та таблица не содержит `ə`.",
          "Если редактор не принимает букву, напиши внутри слова `\\u0259`. На экране всё равно будет `ə`.",
          "Если приложение уже стоит и буква `?`, текст попал в пакет неверно. Исправь файл и собери снова.",
        ],
      },
    ),
  },
  {
    slug: "qr-e",
    code: `import segno

segno.make("Azərbaycan", encoding="utf-8").save("kod.png", scale=8)
`,
    piece: piece(
      L(
        "QR kod ə hərfinı qəbul etmir",
        "A QR code will not take the letter ə",
        "QR kod ə harfini kabul etmiyor",
        "رمز QR لا يقبل حرف ə",
        "QR-код не принимает букву ə",
      ),
      L(
        "Köhnə QR kitabxanası mətni `latin-1` ilə yazır. `ə` o cədvəldə yoxdur. Kitabxana ya xəta atır (`latin-1 codec can't encode`), ya da hərfin yerinə `?` qoyur.\n\nUTF-8 bayt rejimi hərfi saxlayır. Şəkil düzdürsə və köhnə oxuyucu `É™` göstərirsə, oxuyucu baytı səhv cədvəllə açır. İndiki telefon kamerası UTF-8 oxuyur.",
        "An old QR library writes the text as `latin-1`. `ə` is not in that table. The library either throws (`latin-1 codec can't encode`) or puts `?` in place of the letter.\n\nUTF-8 byte mode keeps the letter. If the picture is right and an old scanner shows `É™`, the scanner is opening the bytes with the wrong table. A current phone camera reads UTF-8.",
        "Eski bir QR kitaplığı metni `latin-1` ile yazar. `ə` o tabloda yoktur. Kitaplık ya hata verir (`latin-1 codec can't encode`) ya da harfin yerine `?` koyar.\n\nUTF-8 bayt kipi harfi saklar. Resim doğruysa ve eski okuyucu `É™` gösteriyorsa okuyucu baytı yanlış tabloyla açıyordur. Günümüz telefon kamerası UTF-8 okur.",
        "مكتبة QR قديمة تكتب النص بـ `latin-1`. حرف `ə` ليس في ذلك الجدول. المكتبة إما ترمي خطأ (`latin-1 codec can't encode`) أو تضع `?` مكان الحرف.\n\nوضع بايت UTF-8 يحفظ الحرف. إذا كانت الصورة صحيحة وأظهر قارئ قديم `É™` فالقارئ يفتح البايت بالجدول الخطأ. كاميرا الهاتف الحالية تقرأ UTF-8.",
        "Старая библиотека QR пишет текст как `latin-1`. Буквы `ə` в той таблице нет. Библиотека либо бросает ошибку (`latin-1 codec can't encode`), либо ставит `?` вместо буквы.\n\nБайтовый режим UTF-8 букву сохраняет. Если картинка верна, а старый сканер показывает `É™`, сканер открывает байты не той таблицей. Камера нынешнего телефона читает UTF-8.",
      ),
      {
        az: [
          "`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` hərfi şəklin içinə qoyur.",
          "`latin-1 codec can't encode` görsən, kitabxana `ə` qəbul etmir. Hərfi silmə, kitabxananı dəyiş.",
          "Mətndə hərf əvəzinə `?` varsa, şəkil artıq xarabdır. UTF-8 ilə yenidən yarat.",
          "Köhnə skaner `É™` göstərirsə, şəkil pozulmayıb. Skaner baytı səhv oxuyur.",
          "Linkin içindəki `ə` ünvanın hissəsidir. Onu da UTF-8 saxla, `e` ilə əvəz etmə.",
        ],
        en: [
          "`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` puts the letter inside the picture.",
          "If you see `latin-1 codec can't encode`, the library will not take `ə`. Do not delete the letter. Change the library.",
          "If the text has `?` instead of the letter, the picture is already broken. Make it again in UTF-8.",
          "If an old scanner shows `É™`, the picture is not broken. The scanner is reading the bytes wrong.",
          "An `ə` inside a link is part of the address. Keep that as UTF-8 too. Do not replace it with `e`.",
        ],
        tr: [
          "`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` harfi resmin içine koyar.",
          "`latin-1 codec can't encode` görürsen kitaplık `ə` kabul etmiyor. Harfi silme, kitaplığı değiştir.",
          "Metinde harf yerine `?` varsa resim çoktan bozuktur. UTF-8 ile yeniden üret.",
          "Eski tarayıcı `É™` gösteriyorsa resim bozulmamıştır. Tarayıcı baytı yanlış okur.",
          "Bağlantının içindeki `ə` adresin parçasıdır. Onu da UTF-8 tut, `e` ile değiştirme.",
        ],
        ar: [
          "`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` يضع الحرف داخل الصورة.",
          "إذا رأيت `latin-1 codec can't encode` فالمكتبة لا تقبل `ə`. لا تحذف الحرف. غيّر المكتبة.",
          "إذا كان في النص `?` بدل الحرف فالصورة فاسدة أصلًا. أعد صنعها بـ UTF-8.",
          "إذا أظهر ماسح قديم `É™` فالصورة ليست فاسدة. الماسح يقرأ البايت خطأ.",
          "`ə` داخل الرابط جزء من العنوان. أبقها UTF-8 أيضًا ولا تستبدلها بـ `e`.",
        ],
        ru: [
          "`segno.make(\"Azərbaycan\", encoding=\"utf-8\")` кладёт букву внутрь картинки.",
          "Если видишь `latin-1 codec can't encode`, библиотека не принимает `ə`. Букву не удаляй, смени библиотеку.",
          "Если в тексте вместо буквы `?`, картинка уже испорчена. Создай её заново в UTF-8.",
          "Если старый сканер показывает `É™`, картинка не испорчена. Сканер неверно читает байты.",
          "`ə` внутри ссылки — часть адреса. Её тоже держи в UTF-8 и не заменяй на `e`.",
        ],
      },
    ),
  },
  {
    slug: "iban",
    code: `NUMUNE = "AZ84NABZ00000000137010002944"
# Eyni nümunədir. Yalnız son rəqəm dəyişib. Hesab deyil.
POZUK = "AZ84NABZ00000000137010002945"

def qaliq(iban: str) -> int:
    metn = iban.replace(" ", "").upper()
    if not (len(metn) == 28 and metn.startswith("AZ")):
        raise ValueError("format")
    kecmis = metn[4:] + metn[:4]
    reqem = "".join(str(ord(h) - 55) if h.isalpha() else h for h in kecmis)
    return int(reqem) % 97

print(qaliq(NUMUNE))
print(qaliq(POZUK))
`,
    piece: piece(
      L(
        "Azərbaycan IBAN nümunəsi necə yoxlanır",
        "How to check the Azerbaijan IBAN sample",
        "Azerbaycan IBAN örneği nasıl yoklanır",
        "كيف يُفحص نموذج IBAN لأذربيجان",
        "Как проверяется образец IBAN Азербайджана",
      ),
      L(
        "Səhifədə bir nömrə var: `AZ84NABZ00000000137010002944`. Bu, Mərkəzi Bankın qaydasındakı hesablama nümunəsidir. Hesab deyil. Pul göndərilmir.\n\nİkinci sətir həmin nümunənin özüdür, yalnız son rəqəm dəyişib. O da hesab deyil.\n\nNümunə 28 simvoldur. `AZ` ölkədir. Sonrakı iki rəqəm nəzarətdir. Sonra dörd hərf gəlir. Qalan 20 simvol hesab yeridir. Qısa olanda əvvəlinə sıfır yazılır.\n\nYoxlama ISO 7064 qaydası ilədir, MOD 97-10. İlk dörd simvol sona keçir. Hərf rəqəm olur: `A` 10-dur, `Z` 35-dir. Alınan ədəd 97-yə bölünür. Qalıq 1-dirsə nəzarət rəqəmi düzdür. Bu, hesabın var olduğunu göstərmir.",
        "There is one number on this page: `AZ84NABZ00000000137010002944`. It is the calculation sample in the Central Bank's rule. It is not an account. No money is sent to it.\n\nThe second line is that same sample with only the last digit changed. That is not an account either.\n\nThe sample is 28 characters. `AZ` is the country. The next two digits are the check. Then come four letters. The remaining 20 characters are the account place. If it is short, zeros are written at the front.\n\nThe check follows ISO 7064, MOD 97-10. The first four characters move to the end. A letter becomes a number: `A` is 10, `Z` is 35. The resulting number is divided by 97. If the remainder is 1, the check digits are right. This does not show that an account exists.",
        "Sayfada bir numara var: `AZ84NABZ00000000137010002944`. Bu, Merkez Bankası kuralındaki hesaplama örneğidir. Hesap değildir. Para gönderilmez.\n\nİkinci satır aynı örneğin kendisidir, yalnızca son rakam değişmiştir. O da hesap değildir.\n\nÖrnek 28 simvoldur. `AZ` ülkedir. Sonraki iki rakam denetimdir. Sonra dört harf gelir. Kalan 20 simvol hesap yeridir. Kısa olunca başına sıfır yazılır.\n\nYoklama ISO 7064 kuralıyadır, MOD 97-10. İlk dört simvol sona geçer. Harf rakam olur: `A` 10'dur, `Z` 35'tir. Çıkan sayı 97'ye bölünür. Kalan 1 ise denetim rakamı doğrudur. Bu, hesabın var olduğunu göstermez.",
        "في الصفحة رقم واحد: `AZ84NABZ00000000137010002944`. هذا مثال الحساب المنشور في قاعدة البنك المركزي. ليس حسابًا. لا يُرسل إليه مال.\n\nالسطر الثاني هو النموذج نفسه، وتغيّر فيه الرقم الأخير فقط. وهو ليس حسابًا أيضًا.\n\nالنموذج 28 رمزًا. `AZ` هي البلد. الرقمان التاليان للتحقق. ثم تأتي أربعة أحرف. والرموز العشرون الباقية مكان الحساب. إذا قصُر يُكتب صفر في أوله.\n\nالفحص بقاعدة ISO 7064، أي MOD 97-10. الرموز الأربعة الأولى تنتقل إلى الآخر. الحرف يصير رقمًا: `A` هو 10، و`Z` هو 35. العدد الناتج يُقسم على 97. إذا كان الباقي 1 فأرقام التحقق صحيحة. هذا لا يُظهر أن الحساب موجود.",
        "На странице один номер: `AZ84NABZ00000000137010002944`. Это образец расчёта из правила Центрального банка. Это не счёт. Деньги на него не отправляют.\n\nВторая строка — тот же образец, изменена только последняя цифра. Это тоже не счёт.\n\nОбразец из 28 знаков. `AZ` — страна. Следующие две цифры — контроль. Потом идут четыре буквы. Остальные 20 знаков — место счёта. Если оно короткое, спереди пишут нули.\n\nПроверка по ISO 7064, MOD 97-10. Первые четыре знака уходят в конец. Буква становится числом: `A` это 10, `Z` это 35. Полученное число делят на 97. Если остаток 1, контрольные цифры верны. Это не показывает, что счёт существует.",
      ),
      {
        az: [
          "Kod əvvəl `1` yazır. Nümunənin nəzarət rəqəmi düzdür.",
          "İkinci rəqəm `28`-dir. Son simvol dəyişəndə qalıq 1 olmur. Səhv tutmaq üçün bu bəsdir.",
          "Nümunənin ortasındakı dörd hərf də nümunənin hissəsidir. Heç kimə köçürmə ünvanı deyil.",
          "Öz proqramında öz nömrəni yoxlaya bilərsən. Həmin nömrəni səhifəyə, çata və nümunəyə yazma.",
          "Qalıq 1 olsa belə bankdan yoxlamadan böyük məbləğ göndərmə. Forma düz ola bilər, hesab bağlı ola bilər.",
        ],
        en: [
          "The code first prints `1`. The sample's check digits are right.",
          "The second number is `28`. When the last character changes, the remainder is not 1. That is enough to catch a typo.",
          "The four letters in the middle of the sample are part of the sample. They are not an address to pay anyone.",
          "In your own program you can check your own number. Do not write that number on a page, in a chat, or into the sample.",
          "Even if the remainder is 1, do not send a large amount without checking with the bank. The form can be right and the account can be closed.",
        ],
        tr: [
          "Kod önce `1` yazar. Örneğin denetim rakamı doğrudur.",
          "İkinci sayı `28`'dir. Son simvol değişince kalan 1 olmaz. Yanlışı tutmak için bu yeter.",
          "Örneğin ortasındaki dört harf de örneğin parçasıdır. Kimseye aktarma adresi değildir.",
          "Kendi programında kendi numaranı yoklayabilirsin. O numarayı sayfaya, sohbete ve örneğe yazma.",
          "Kalan 1 olsa bile bankadan yoklamadan büyük tutar gönderme. Biçim doğru olabilir, hesap kapalı olabilir.",
        ],
        ar: [
          "الرمز يطبع `1` أولًا. أرقام التحقق في النموذج صحيحة.",
          "الرقم الثاني `28`. حين يتغيّر الرمز الأخير لا يكون الباقي 1. هذا يكفي لالتقاط الخطأ.",
          "الأحرف الأربعة في وسط النموذج جزء من النموذج. ليست عنوانًا لتحويل إلى أحد.",
          "في برنامجك يمكنك فحص رقمك. لا تكتب ذلك الرقم في صفحة ولا في محادثة ولا في النموذج.",
          "حتى لو كان الباقي 1 فلا ترسل مبلغًا كبيرًا بلا فحص من البنك. قد يصح الشكل ويكون الحساب مغلقًا.",
        ],
        ru: [
          "Код сначала печатает `1`. Контрольные цифры образца верны.",
          "Второе число — `28`. Когда последний знак меняется, остаток не 1. Этого хватает, чтобы поймать опечатку.",
          "Четыре буквы в середине образца — часть образца. Это не адрес, чтобы кому-то переводить.",
          "В своей программе можно проверить свой номер. Этот номер не пиши на страницу, в чат и в образец.",
          "Даже если остаток 1, не отправляй крупную сумму без проверки в банке. Форма может быть верной, а счёт закрыт.",
        ],
      },
    ),
  },
  {
    slug: "voen",
    code: `def forma(voen: str) -> str:
    metn = voen.replace(" ", "")
    if not (len(metn) == 10 and metn.isdigit()):
        raise ValueError("10 reqem")
    son = metn[9]
    if son == "1":
        return "huquqi"
    if son == "2":
        return "fiziki"
    raise ValueError("status")

# Verilməmiş nömrələrdir. Yalnız son rəqəmi göstərir.
print(forma("0000000001"))
print(forma("0000000002"))
`,
    piece: piece(
      L(
        "VÖEN-in doqquzuncu rəqəmi hesablanmır",
        "The ninth digit of a VÖEN cannot be calculated",
        "VÖEN'in dokuzuncu rakamı hesaplanmaz",
        "الرقم التاسع في VÖEN لا يُحسب",
        "Девятую цифру VÖEN посчитать нельзя",
      ),
      L(
        "Vergi uçotu qaydası VÖEN-i on rəqəm sayır. İlk iki rəqəm ərazidir. Sonrakı altı rəqəm sıra nömrəsidir. Doqquzuncu rəqəmi vergi proqramı xüsusi alqoritmlə qoyur. Onuncu rəqəm statusdur.\n\nAlqoritm dərc olunmayıb. Proqram doqquzuncu rəqəmi düzəldə bilməz və onu yoxlaya da bilməz. Uydurma düstur yazmaq olmaz.\n\nSəhifədəki `0000000001` və `0000000002` verilmiş nömrə deyil. Heç kimin VÖEN-i deyil. Yalnız son rəqəmin yerini göstərir: `1` hüquqi şəxs, `2` fiziki şəxs.\n\nBəzi səhifələr eyni on rəqəmi 2+5+1+2 bölür və son iki rəqəmi status sayır. Qayda belə bölmür. Status bir rəqəmdir, onuncudur.",
        "The tax registration rule counts a VÖEN as ten digits. The first two digits are the territory. The next six digits are the serial number. The tax program sets the ninth digit with a special algorithm. The tenth digit is the status.\n\nThe algorithm is not published. A program cannot repair the ninth digit and cannot check it either. Do not write an invented formula.\n\n`0000000001` and `0000000002` on this page are not issued numbers. They are nobody's VÖEN. They only show the place of the last digit: `1` is a legal person, `2` is a natural person.\n\nSome pages split the same ten digits as 2+5+1+2 and treat the last two digits as the status. The rule does not split it that way. The status is one digit, the tenth.",
        "Vergi kayıt kuralı VÖEN'i on rakam sayar. İlk iki rakam bölgedir. Sonraki altı rakam sıra numarasıdır. Dokuzuncu rakamı vergi programı özel bir algoritmayla koyar. Onuncu rakam statüdür.\n\nAlgoritma yayımlanmamıştır. Program dokuzuncu rakamı düzeltemez ve onu yoklayamaz da. Uydurma formül yazılmaz.\n\nSayfadaki `0000000001` ve `0000000002` verilmiş numara değildir. Kimsenin VÖEN'i değildir. Yalnız son rakamın yerini gösterir: `1` tüzel kişi, `2` gerçek kişi.\n\nBazı sayfalar aynı on rakamı 2+5+1+2 böler ve son iki rakamı statü sayar. Kural böyle bölmez. Statü bir rakamdır, onuncusudur.",
        "قاعدة التسجيل الضريبي تعدّ VÖEN عشرة أرقام. الرقمان الأولان للمنطقة. والأرقام الستة التالية رقم تسلسلي. برنامج الضريبة يضع الرقم التاسع بخوارزمية خاصة. الرقم العاشر هو الصفة.\n\nالخوارزمية غير منشورة. البرنامج لا يستطيع إصلاح الرقم التاسع ولا فحصه. لا تُكتب معادلة مخترعة.\n\n`0000000001` و`0000000002` في هذه الصفحة ليسا رقمين صادرين. ليسا VÖEN لأحد. هما يُظهران مكان الرقم الأخير فقط: `1` شخص اعتباري، و`2` شخص طبيعي.\n\nبعض الصفحات تقسم العشرة نفسها 2+5+1+2 وتعدّ الرقمين الأخيرين صفة. القاعدة لا تقسم هكذا. الصفة رقم واحد، وهو العاشر.",
        "Правило налогового учёта считает VÖEN десятью цифрами. Первые две цифры — территория. Следующие шесть — порядковый номер. Девятую цифру налоговая программа ставит особым алгоритмом. Десятая цифра — статус.\n\nАлгоритм не опубликован. Программа не может починить девятую цифру и не может её проверить. Выдуманную формулу писать нельзя.\n\n`0000000001` и `0000000002` на этой странице — не выданные номера. Это ничей VÖEN. Они только показывают место последней цифры: `1` — юридическое лицо, `2` — физическое лицо.\n\nНекоторые страницы делят те же десять цифр как 2+5+1+2 и считают статусом две последние цифры. Правило так не делит. Статус — одна цифра, десятая.",
      ),
      {
        az: [
          "Kod `huquqi`, sonra `fiziki` yazır. Hər ikisi formadır. Nömrə verilməyib.",
          "Doqquz rəqəm və hərf `10 reqem` xətası verir. VÖEN-də hərf olmur.",
          "Son rəqəm `1` və `2`-dən başqadırsa, `status` xətası verir. Doqquzuncu rəqəm bu yoxlamada iştirak etmir.",
          "FİN başqa nömrədir. Yeddi işarədir və hərf ola bilər. Onu VÖEN yerinə yazma.",
          "Forma düz olsa da ödəyici aktiv olmaya bilər. Bunu vergi xidmətinin açıq axtarışı göstərir. Real VÖEN-i bu səhifəyə yazma.",
        ],
        en: [
          "The code prints `huquqi`, then `fiziki`. Both are only the form. The numbers were not issued.",
          "Nine digits or a letter raise `10 reqem`. A VÖEN has no letter.",
          "If the last digit is not `1` or `2`, the code raises `status`. The ninth digit takes no part in this check.",
          "A FİN is a different number. It has seven characters and may include a letter. Do not write it in place of a VÖEN.",
          "The form can be right and the taxpayer can still be inactive. The tax service's open search shows that. Do not write a real VÖEN on this page.",
        ],
        tr: [
          "Kod `huquqi`, sonra `fiziki` yazar. İkisi de yalnızca biçimdir. Numara verilmemiştir.",
          "Dokuz rakam ve harf `10 reqem` hatası verir. VÖEN'de harf olmaz.",
          "Son rakam `1` ve `2` dışında ise `status` hatası verir. Dokuzuncu rakam bu yoklamaya katılmaz.",
          "FİN başka bir numaradır. Yedi işarettir ve harf olabilir. Onu VÖEN yerine yazma.",
          "Biçim doğru olsa da mükellef aktif olmayabilir. Bunu vergi hizmetinin açık araması gösterir. Gerçek VÖEN'i bu sayfaya yazma.",
        ],
        ar: [
          "الرمز يطبع `huquqi` ثم `fiziki`. كلاهما شكل فقط. الرقمان لم يُصدرا.",
          "تسعة أرقام أو حرف يُعطي خطأ `10 reqem`. ليس في VÖEN حرف.",
          "إذا لم يكن الرقم الأخير `1` أو `2` فالرمز يُعطي خطأ `status`. الرقم التاسع لا يدخل في هذا الفحص.",
          "FİN رقم آخر. هو سبعة رموز وقد فيه حرف. لا تكتبه مكان VÖEN.",
          "قد يصح الشكل ويبقى المكلف غير نشط. بحث مصلحة الضرائب المفتوح يُظهر ذلك. لا تكتب VÖEN حقيقيًا في هذه الصفحة.",
        ],
        ru: [
          "Код печатает `huquqi`, потом `fiziki`. Оба ответа только про форму. Номера не выдавались.",
          "Девять цифр и буква дают ошибку `10 reqem`. В VÖEN буквы нет.",
          "Если последняя цифра не `1` и не `2`, код даёт ошибку `status`. Девятая цифра в этой проверке не участвует.",
          "FİN — другой номер. В нём семь знаков, и буква допустима. Не пиши его вместо VÖEN.",
          "Форма может быть верной, а плательщик неактивным. Это показывает открытый поиск налоговой. Настоящий VÖEN на эту страницу не пиши.",
        ],
      },
    ),
  },
] as const;
