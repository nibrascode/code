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
] as const;
