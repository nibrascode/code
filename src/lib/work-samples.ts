import type { Lang } from "@/lib/i18n";

type Text = Record<Lang, string>;

function text(az: string, en: string, tr: string, ar: string, ru: string): Text {
  return { az, en, tr, ar, ru };
}

export type WorkSample = { title: Text; note: Text; code: string };

const GRADE_NOTE = text(
  "Dörd tələbənin balları ortalanır, keçən sayılır və ən yüksək orta yazılır. Faylı saxla və altdakı əmrlə işlət. Rəqəmlər nümunədir.",
  "Four students' scores are averaged, the passes are counted, and the highest average is printed. Save the file and run the command below. The numbers are a sample.",
  "Dört öğrencinin notu ortalanır, geçen sayılır ve en yüksek ortalama yazılır. Dosyayı kaydet ve alttaki komutla çalıştır. Sayılar örnektir.",
  "تُحسب معدلات أربع طلاب، ويُعدّ الناجح، ويُطبع أعلى معدل. احفظ الملف وشغّله بالأمر في الأسفل. الأرقام نموذج.",
  "Считаются средние четырёх студентов, число сдавших и самый высокий средний. Сохрани файл и запусти командой ниже. Числа — образец.",
);

const GRADE_TITLE = text("İşlək nümunə", "A working sample", "Çalışan örnek", "مثال يعمل", "Рабочий пример");

export const WORK_SAMPLES: Record<string, WorkSample> = {
  python: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: python3 bal.py`,
      `${GRADE_NOTE.en} Command: python3 grade.py`,
      `${GRADE_NOTE.tr} Komut: python3 bal.py`,
      `${GRADE_NOTE.ar} الأمر: python3 grade.py`,
      `${GRADE_NOTE.ru} Команда: python3 grade.py`,
    ),
    code: `students = [
    {"name": "Aysel", "scores": [78, 84, 91]},
    {"name": "Murad", "scores": [42, 55, 48]},
    {"name": "Nigar", "scores": [90, 88, 95]},
    {"name": "Rauf", "scores": [61, 58, 70]},
]

PASS_MARK = 60


def average(scores):
    if not scores:
        return 0.0
    return sum(scores) / len(scores)


def label(avg):
    return "Keçdi" if avg >= PASS_MARK else "Qaldı"


rows = []
for student in students:
    avg = round(average(student["scores"]), 1)
    rows.append({"name": student["name"], "avg": avg, "label": label(avg)})

print(f"{'Ad':<12} {'Orta':>6}  Nəticə")
print("-" * 28)
passed = 0
for row in rows:
    print(f"{row['name']:<12} {row['avg']:>6}  {row['label']}")
    if row["label"] == "Keçdi":
        passed += 1

top = max(rows, key=lambda row: row["avg"])
print("-" * 28)
print(f"Keçən: {passed} / {len(rows)}")
print(f"Ən yüksək: {top['name']} ({top['avg']})")
`,
  },
  javascript: {
    title: GRADE_TITLE,
    note: text(
      "Qeyd dəftəri bir HTML fayldadır. Əlavə et, sil və cəmi say. Səhifəni bağlayıb açanda siyahı qalır, çünki localStorage-dadır. Faylı .html kimi saxla və brauzerdə aç.",
      "The notebook is one HTML file. Add, delete, and count. The list stays after you close the page, because it sits in localStorage. Save it as .html and open it in the browser.",
      "Not defteri bir HTML dosyasındadır. Ekle, sil ve say. Sayfayı kapatıp açınca liste kalır, çünkü localStorage içindedir. Dosyayı .html diye kaydet ve tarayıcıda aç.",
      "المفكرة في ملف HTML واحد. أضف واحذف وعدّ. تبقى القائمة بعد إغلاق الصفحة لأنها في localStorage. احفظه كـ .html وافتحه في المتصفح.",
      "Блокнот — один HTML-файл. Добавь, удали и посчитай. Список остаётся после закрытия, потому что лежит в localStorage. Сохрани как .html и открой в браузере.",
    ),
    code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Qeyd dəftəri</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #0f172a; color: #e2e8f0; }
    main { max-width: 560px; margin: 32px auto; padding: 0 16px; }
    form { display: flex; gap: 8px; }
    input { flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #334155; background: #020617; color: inherit; }
    button { border: 0; border-radius: 8px; padding: 10px 14px; background: #0284c7; color: #fff; font-weight: 700; }
    li { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid #1e293b; }
    li button { background: transparent; color: #fca5a5; }
  </style>
</head>
<body>
<main>
  <h1>Qeyd dəftəri</h1>
  <p id="count">0 qeyd</p>
  <form id="form">
    <input id="text" type="text" maxlength="120" placeholder="Yeni qeyd">
    <button type="submit">Əlavə et</button>
  </form>
  <ul id="list"></ul>
</main>
<script>
  const KEY = "nibras-notes";
  const form = document.getElementById("form");
  const text = document.getElementById("text");
  const list = document.getElementById("list");
  const count = document.getElementById("count");

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(saved) ? saved.filter((item) => typeof item === "string") : [];
    } catch {
      return [];
    }
  }

  let notes = load();

  function save() {
    localStorage.setItem(KEY, JSON.stringify(notes));
  }

  function draw() {
    list.innerHTML = "";
    notes.forEach((note, index) => {
      const item = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = note;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Sil";
      remove.addEventListener("click", () => {
        notes.splice(index, 1);
        save();
        draw();
      });
      item.append(span, remove);
      list.append(item);
    });
    count.textContent = notes.length + " qeyd";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = text.value.trim();
    if (!value) return;
    notes.push(value);
    text.value = "";
    save();
    draw();
  });

  draw();
</script>
</body>
</html>
`,
  },
  "html-css": {
    title: GRADE_TITLE,
    note: text(
      "Bir səhifəlik saytdır: menyu, üç kart, forma və telefon üçün bir sütun. Göndər düyməsi səhifəni yeniləmir, yazılan adı altda göstərir. Faylı .html kimi saxla və aç.",
      "A one-page site: a menu, three cards, a form, and one column on a phone. Send does not reload the page. It shows the name you wrote. Save it as .html and open it.",
      "Tek sayfalık sitedir: menü, üç kart, form ve telefonda tek sütun. Gönder sayfayı yenilemez, yazılan adı altta gösterir. Dosyayı .html diye kaydet ve aç.",
      "موقع من صفحة واحدة: قائمة وثلاث بطاقات ونموذج وعمود واحد على الهاتف. الإرسال لا يعيد تحميل الصفحة، بل يُظهر الاسم المكتوب. احفظه كـ .html وافتحه.",
      "Сайт из одной страницы: меню, три карточки, форма и одна колонка на телефоне. Отправка не перезагружает страницу, а показывает написанное имя. Сохрани как .html и открой.",
    ),
    code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nümunə səhifə</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; color: #0f172a; }
    header { display: flex; justify-content: space-between; align-items: center; padding: 16px 28px; background: #0f172a; color: #fff; }
    header a { color: #cbd5e1; margin-left: 16px; text-decoration: none; }
    .hero { padding: 48px 28px; background: #e0f2fe; }
    .wrap { max-width: 960px; margin: 0 auto; padding: 28px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
    form { display: grid; gap: 10px; max-width: 420px; margin-top: 18px; }
    input { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; font: inherit; }
    button { border: 0; border-radius: 8px; padding: 10px 14px; background: #0284c7; color: #fff; font-weight: 700; }
    footer { padding: 18px 28px; color: #64748b; }
    @media (max-width: 700px) {
      .grid { grid-template-columns: 1fr; }
      header { flex-direction: column; align-items: flex-start; gap: 8px; }
    }
  </style>
</head>
<body>
<header>
  <strong>Nümunə səhifə</strong>
  <nav>
    <a href="#isler">İşlər</a>
    <a href="#yazi">Yaz</a>
  </nav>
</header>
<section class="hero">
  <h1>Böyük nümunə</h1>
  <p>Menyu, kartlar və forma bir fayldadır.</p>
</section>
<div class="wrap">
  <div class="grid" id="isler">
    <article class="card"><h2>PDF</h2><p>Fayl brauzerdə oxunur.</p></article>
    <article class="card"><h2>QR</h2><p>Mətn kodun içinə düşür.</p></article>
    <article class="card"><h2>Qeyd</h2><p>Siyahı səhifənin özündə qalır.</p></article>
  </div>
  <form id="yazi">
    <label>Ad <input id="name" type="text" maxlength="40" required></label>
    <button type="submit">Göndər</button>
    <p id="out"></p>
  </form>
</div>
<footer>Nümunə. Hesab açılmır.</footer>
<script>
  const form = document.getElementById("yazi");
  const name = document.getElementById("name");
  const out = document.getElementById("out");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = name.value.trim();
    out.textContent = value ? "Salam, " + value : "";
  });
</script>
</body>
</html>
`,
  },
  sql: {
    title: GRADE_TITLE,
    note: text(
      "İki cədvəl, dörd tələbə və ballar. Sorğu ortanı sayır və yalnız keçənləri sıralayır. SQLite-da işləyir: sqlite3 bal.db < bal.sql",
      "Two tables, four students, and scores. The query counts the average and lists only those who passed. It runs in SQLite: sqlite3 grade.db < grade.sql",
      "İki tablo, dört öğrenci ve notlar. Sorgu ortalamayı sayar ve yalnız geçenleri sıralar. SQLite içinde çalışır: sqlite3 bal.db < bal.sql",
      "جدولان وأربعة طلاب ودرجات. الاستعلام يحسب المعدل ويرتب الناجحين فقط. يعمل في SQLite: sqlite3 grade.db < grade.sql",
      "Две таблицы, четыре студента и оценки. Запрос считает среднее и сортирует только сдавших. Работает в SQLite: sqlite3 grade.db < grade.sql",
    ),
    code: `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  student_id INTEGER NOT NULL,
  subject TEXT NOT NULL,
  points INTEGER NOT NULL
);

INSERT INTO students (id, name) VALUES
  (1, 'Aysel'),
  (2, 'Murad'),
  (3, 'Nigar'),
  (4, 'Rauf');

INSERT INTO scores (student_id, subject, points) VALUES
  (1, 'Python', 78), (1, 'SQL', 84), (1, 'HTML', 91),
  (2, 'Python', 42), (2, 'SQL', 55), (2, 'HTML', 48),
  (3, 'Python', 90), (3, 'SQL', 88), (3, 'HTML', 95),
  (4, 'Python', 61), (4, 'SQL', 58), (4, 'HTML', 70);

SELECT
  students.name,
  ROUND(AVG(scores.points), 1) AS average_points,
  COUNT(scores.id) AS exams
FROM students
JOIN scores ON scores.student_id = students.id
GROUP BY students.id
HAVING AVG(scores.points) >= 60
ORDER BY average_points DESC;
`,
  },
  java: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: javac GradeBook.java && java GradeBook`,
      `${GRADE_NOTE.en} Command: javac GradeBook.java && java GradeBook`,
      `${GRADE_NOTE.tr} Komut: javac GradeBook.java && java GradeBook`,
      `${GRADE_NOTE.ar} الأمر: javac GradeBook.java && java GradeBook`,
      `${GRADE_NOTE.ru} Команда: javac GradeBook.java && java GradeBook`,
    ),
    code: `public class GradeBook {
    static class Student {
        final String name;
        final int[] scores;

        Student(String name, int[] scores) {
            this.name = name;
            this.scores = scores;
        }

        double average() {
            if (scores.length == 0) return 0;
            int sum = 0;
            for (int score : scores) sum += score;
            return (double) sum / scores.length;
        }
    }

    public static void main(String[] args) {
        Student[] students = {
            new Student("Aysel", new int[] {78, 84, 91}),
            new Student("Murad", new int[] {42, 55, 48}),
            new Student("Nigar", new int[] {90, 88, 95}),
            new Student("Rauf", new int[] {61, 58, 70})
        };
        int passed = 0;
        Student top = students[0];
        System.out.printf("%-12s %6s  %s%n", "Ad", "Orta", "Nəticə");
        for (Student student : students) {
            double avg = student.average();
            String label = avg >= 60 ? "Keçdi" : "Qaldı";
            if (avg >= 60) passed++;
            if (avg > top.average()) top = student;
            System.out.printf("%-12s %6.1f  %s%n", student.name, avg, label);
        }
        System.out.println("Keçən: " + passed + " / " + students.length);
        System.out.printf("Ən yüksək: %s (%.1f)%n", top.name, top.average());
    }
}
`,
  },
  csharp: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: dotnet new console -n Bal && faylı Program.cs-ə qoy && dotnet run`,
      `${GRADE_NOTE.en} Command: put this in Program.cs of a console project, then dotnet run`,
      `${GRADE_NOTE.tr} Komut: bunu konsol projesinin Program.cs dosyasına koy, sonra dotnet run`,
      `${GRADE_NOTE.ar} الأمر: ضع هذا في Program.cs لمشروع وحدة تحكم، ثم dotnet run`,
      `${GRADE_NOTE.ru} Команда: положи это в Program.cs консольного проекта, затем dotnet run`,
    ),
    code: `using System.Linq;

var students = new (string Name, int[] Scores)[]
{
    ("Aysel", new[] { 78, 84, 91 }),
    ("Murad", new[] { 42, 55, 48 }),
    ("Nigar", new[] { 90, 88, 95 }),
    ("Rauf", new[] { 61, 58, 70 }),
};

double Average(int[] scores) => scores.Length == 0 ? 0 : scores.Average();

Console.WriteLine("{0,-12} {1,6}  {2}", "Ad", "Orta", "Nəticə");
var passed = 0;
var top = students[0];
foreach (var student in students)
{
    var avg = Average(student.Scores);
    var label = avg >= 60 ? "Keçdi" : "Qaldı";
    if (avg >= 60) passed++;
    if (avg > Average(top.Scores)) top = student;
    Console.WriteLine("{0,-12} {1,6:0.0}  {2}", student.Name, avg, label);
}

Console.WriteLine($"Keçən: {passed} / {students.Length}");
Console.WriteLine($"Ən yüksək: {top.Name} ({Average(top.Scores):0.0})");
`,
  },
  typescript: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: npx tsx bal.ts`,
      `${GRADE_NOTE.en} Command: npx tsx grade.ts`,
      `${GRADE_NOTE.tr} Komut: npx tsx bal.ts`,
      `${GRADE_NOTE.ar} الأمر: npx tsx grade.ts`,
      `${GRADE_NOTE.ru} Команда: npx tsx grade.ts`,
    ),
    code: `type Student = { name: string; scores: number[] };

const students: Student[] = [
  { name: "Aysel", scores: [78, 84, 91] },
  { name: "Murad", scores: [42, 55, 48] },
  { name: "Nigar", scores: [90, 88, 95] },
  { name: "Rauf", scores: [61, 58, 70] },
];

const PASS_MARK = 60;

function average(scores: number[]): number {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

type Row = { name: string; avg: number; label: "Keçdi" | "Qaldı" };

const rows: Row[] = students.map((student) => {
  const avg = Math.round(average(student.scores) * 10) / 10;
  return { name: student.name, avg, label: avg >= PASS_MARK ? "Keçdi" : "Qaldı" };
});

console.log("Ad           Orta  Nəticə");
let passed = 0;
for (const row of rows) {
  console.log(row.name.padEnd(12), String(row.avg).padStart(6), " ", row.label);
  if (row.label === "Keçdi") passed += 1;
}

const top = rows.reduce((best, row) => (row.avg > best.avg ? row : best));
console.log("Keçən:", passed, "/", rows.length);
console.log("Ən yüksək:", top.name, "(" + top.avg + ")");
`,
  },
  nodejs: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: node bal.js`,
      `${GRADE_NOTE.en} Command: node grade.js`,
      `${GRADE_NOTE.tr} Komut: node bal.js`,
      `${GRADE_NOTE.ar} الأمر: node grade.js`,
      `${GRADE_NOTE.ru} Команда: node grade.js`,
    ),
    code: `const students = [
  { name: "Aysel", scores: [78, 84, 91] },
  { name: "Murad", scores: [42, 55, 48] },
  { name: "Nigar", scores: [90, 88, 95] },
  { name: "Rauf", scores: [61, 58, 70] },
];

function average(scores) {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

const rows = students.map((student) => {
  const avg = Math.round(average(student.scores) * 10) / 10;
  return { name: student.name, avg, label: avg >= 60 ? "Keçdi" : "Qaldı" };
});

console.log("Ad           Orta  Nəticə");
let passed = 0;
for (const row of rows) {
  console.log(row.name.padEnd(12), String(row.avg).padStart(6), row.label);
  if (row.label === "Keçdi") passed += 1;
}

const top = rows.reduce((best, row) => (row.avg > best.avg ? row : best));
console.log("Keçən:", passed + " / " + rows.length);
console.log("Ən yüksək:", top.name + " (" + top.avg + ")");
`,
  },
  go: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: go run bal.go`,
      `${GRADE_NOTE.en} Command: go run grade.go`,
      `${GRADE_NOTE.tr} Komut: go run bal.go`,
      `${GRADE_NOTE.ar} الأمر: go run grade.go`,
      `${GRADE_NOTE.ru} Команда: go run grade.go`,
    ),
    code: `package main

import "fmt"

type student struct {
	name   string
	scores []int
}

func average(scores []int) float64 {
	if len(scores) == 0 {
		return 0
	}
	sum := 0
	for _, score := range scores {
		sum += score
	}
	return float64(sum) / float64(len(scores))
}

func main() {
	students := []student{
		{"Aysel", []int{78, 84, 91}},
		{"Murad", []int{42, 55, 48}},
		{"Nigar", []int{90, 88, 95}},
		{"Rauf", []int{61, 58, 70}},
	}
	fmt.Printf("%-12s %6s  %s\\n", "Ad", "Orta", "Nəticə")
	passed := 0
	top := students[0]
	for _, item := range students {
		avg := average(item.scores)
		label := "Qaldı"
		if avg >= 60 {
			label = "Keçdi"
			passed++
		}
		if avg > average(top.scores) {
			top = item
		}
		fmt.Printf("%-12s %6.1f  %s\\n", item.name, avg, label)
	}
	fmt.Printf("Keçən: %d / %d\\n", passed, len(students))
	fmt.Printf("Ən yüksək: %s (%.1f)\\n", top.name, average(top.scores))
}
`,
  },
  php: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: php bal.php`,
      `${GRADE_NOTE.en} Command: php grade.php`,
      `${GRADE_NOTE.tr} Komut: php bal.php`,
      `${GRADE_NOTE.ar} الأمر: php grade.php`,
      `${GRADE_NOTE.ru} Команда: php grade.php`,
    ),
    code: `<?php
$students = [
    ["name" => "Aysel", "scores" => [78, 84, 91]],
    ["name" => "Murad", "scores" => [42, 55, 48]],
    ["name" => "Nigar", "scores" => [90, 88, 95]],
    ["name" => "Rauf", "scores" => [61, 58, 70]],
];

function average(array $scores): float {
    if (count($scores) === 0) return 0;
    return array_sum($scores) / count($scores);
}

echo "Ad            Orta  Nəticə\\n";
$passed = 0;
$top = $students[0];
foreach ($students as $student) {
    $avg = average($student["scores"]);
    $label = $avg >= 60 ? "Keçdi" : "Qaldı";
    if ($avg >= 60) $passed++;
    if ($avg > average($top["scores"])) $top = $student;
    printf("%-12s %6.1f  %s\\n", $student["name"], $avg, $label);
}
echo "Keçən: $passed / " . count($students) . "\\n";
printf("Ən yüksək: %s (%.1f)\\n", $top["name"], average($top["scores"]));
`,
  },
  kotlin: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: kotlinc bal.kt -include-runtime -d bal.jar && java -jar bal.jar`,
      `${GRADE_NOTE.en} Command: kotlinc grade.kt -include-runtime -d grade.jar && java -jar grade.jar`,
      `${GRADE_NOTE.tr} Komut: kotlinc bal.kt -include-runtime -d bal.jar && java -jar bal.jar`,
      `${GRADE_NOTE.ar} الأمر: kotlinc grade.kt -include-runtime -d grade.jar && java -jar grade.jar`,
      `${GRADE_NOTE.ru} Команда: kotlinc grade.kt -include-runtime -d grade.jar && java -jar grade.jar`,
    ),
    code: `data class Student(val name: String, val scores: List<Int>) {
    fun average(): Double = if (scores.isEmpty()) 0.0 else scores.average()
}

fun main() {
    val students = listOf(
        Student("Aysel", listOf(78, 84, 91)),
        Student("Murad", listOf(42, 55, 48)),
        Student("Nigar", listOf(90, 88, 95)),
        Student("Rauf", listOf(61, 58, 70)),
    )
    println("Ad            Orta  Nəticə")
    var passed = 0
    var top = students.first()
    for (student in students) {
        val avg = student.average()
        val label = if (avg >= 60) "Keçdi" else "Qaldı"
        if (avg >= 60) passed++
        if (avg > top.average()) top = student
        println("%-12s %6.1f  %s".format(student.name, avg, label))
    }
    println("Keçən: $passed / \${students.size}")
    println("Ən yüksək: \${top.name} (\${"%.1f".format(top.average())})")
}
`,
  },
  rust: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: rustc bal.rs -o bal && ./bal`,
      `${GRADE_NOTE.en} Command: rustc grade.rs -o grade && ./grade`,
      `${GRADE_NOTE.tr} Komut: rustc bal.rs -o bal && ./bal`,
      `${GRADE_NOTE.ar} الأمر: rustc grade.rs -o grade && ./grade`,
      `${GRADE_NOTE.ru} Команда: rustc grade.rs -o grade && ./grade`,
    ),
    code: `struct Student {
    name: &'static str,
    scores: &'static [i32],
}

fn average(scores: &[i32]) -> f64 {
    if scores.is_empty() {
        return 0.0;
    }
    let sum: i32 = scores.iter().sum();
    sum as f64 / scores.len() as f64
}

fn main() {
    let students = [
        Student { name: "Aysel", scores: &[78, 84, 91] },
        Student { name: "Murad", scores: &[42, 55, 48] },
        Student { name: "Nigar", scores: &[90, 88, 95] },
        Student { name: "Rauf", scores: &[61, 58, 70] },
    ];
    println!("{:<12} {:>6}  Nəticə", "Ad", "Orta");
    let mut passed = 0;
    let mut top = &students[0];
    for student in &students {
        let avg = average(student.scores);
        let label = if avg >= 60.0 { "Keçdi" } else { "Qaldı" };
        if avg >= 60.0 {
            passed += 1;
        }
        if avg > average(top.scores) {
            top = student;
        }
        println!("{:<12} {:>6.1}  {}", student.name, avg, label);
    }
    println!("Keçən: {} / {}", passed, students.len());
    println!("Ən yüksək: {} ({:.1})", top.name, average(top.scores));
}
`,
  },
  cpp: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: g++ bal.cpp -o bal && ./bal`,
      `${GRADE_NOTE.en} Command: g++ grade.cpp -o grade && ./grade`,
      `${GRADE_NOTE.tr} Komut: g++ bal.cpp -o bal && ./bal`,
      `${GRADE_NOTE.ar} الأمر: g++ grade.cpp -o grade && ./grade`,
      `${GRADE_NOTE.ru} Команда: g++ grade.cpp -o grade && ./grade`,
    ),
    code: `#include <iostream>
#include <iomanip>
#include <string>
#include <vector>

struct Student {
    std::string name;
    std::vector<int> scores;
};

double average(const std::vector<int>& scores) {
    if (scores.empty()) return 0;
    int sum = 0;
    for (int score : scores) sum += score;
    return static_cast<double>(sum) / scores.size();
}

int main() {
    std::vector<Student> students = {
        {"Aysel", {78, 84, 91}},
        {"Murad", {42, 55, 48}},
        {"Nigar", {90, 88, 95}},
        {"Rauf", {61, 58, 70}},
    };
    std::cout << std::fixed << std::setprecision(1);
    std::cout << "Ad            Orta  Nəticə\\n";
    int passed = 0;
    const Student* top = &students.front();
    for (const Student& student : students) {
        double avg = average(student.scores);
        const char* label = avg >= 60 ? "Keçdi" : "Qaldı";
        if (avg >= 60) passed++;
        if (avg > average(top->scores)) top = &student;
        std::cout << student.name << "  " << avg << "  " << label << "\\n";
    }
    std::cout << "Keçən: " << passed << " / " << students.size() << "\\n";
    std::cout << "Ən yüksək: " << top->name << "\\n";
    return 0;
}
`,
  },
  c: {
    title: GRADE_TITLE,
    note: text(
      `${GRADE_NOTE.az} Əmr: gcc bal.c -o bal && ./bal`,
      `${GRADE_NOTE.en} Command: gcc grade.c -o grade && ./grade`,
      `${GRADE_NOTE.tr} Komut: gcc bal.c -o bal && ./bal`,
      `${GRADE_NOTE.ar} الأمر: gcc grade.c -o grade && ./grade`,
      `${GRADE_NOTE.ru} Команда: gcc grade.c -o grade && ./grade`,
    ),
    code: `#include <stdio.h>

typedef struct {
    const char *name;
    int scores[3];
} Student;

double average(const int scores[3]) {
    return (scores[0] + scores[1] + scores[2]) / 3.0;
}

int main(void) {
    Student students[] = {
        {"Aysel", {78, 84, 91}},
        {"Murad", {42, 55, 48}},
        {"Nigar", {90, 88, 95}},
        {"Rauf", {61, 58, 70}},
    };
    int count = 4;
    int passed = 0;
    int top = 0;
    printf("%-12s %6s  %s\\n", "Ad", "Orta", "Nəticə");
    for (int i = 0; i < count; i++) {
        double avg = average(students[i].scores);
        const char *label = avg >= 60 ? "Keçdi" : "Qaldı";
        if (avg >= 60) passed++;
        if (avg > average(students[top].scores)) top = i;
        printf("%-12s %6.1f  %s\\n", students[i].name, avg, label);
    }
    printf("Keçən: %d / %d\\n", passed, count);
    printf("Ən yüksək: %s (%.1f)\\n", students[top].name, average(students[top].scores));
    return 0;
}
`,
  },
  bash: {
    title: GRADE_TITLE,
    note: text(
      "Qovluqdakı faylları sonluğuna görə sayır. Heç nə silmir. Əmr: bash say.sh .",
      "Counts files in a folder by their ending. It deletes nothing. Command: bash count.sh .",
      "Klasördeki dosyaları sonuna göre sayar. Hiçbir şey silmez. Komut: bash say.sh .",
      "يعدّ الملفات في مجلد حسب لاحقتها. لا يحذف شيئاً. الأمر: bash count.sh .",
      "Считает файлы в папке по окончанию. Ничего не удаляет. Команда: bash count.sh .",
    ),
    code: `#!/usr/bin/env bash
set -euo pipefail

dir="\${1:-.}"
if [[ ! -d "$dir" ]]; then
  echo "Qovluq yoxdur: $dir" >&2
  exit 1
fi

echo "Qovluq: $dir"
find "$dir" -type f -printf '%f\\n' | awk '
{
  total++
  n = split($0, parts, ".")
  end = (n > 1 ? parts[n] : "(sonluq yox)")
  ends[end]++
}
END {
  printf "Fayl: %d\\n", total + 0
  for (end in ends) printf "%6d  %s\\n", ends[end], end
}
'
`,
  },
  react: {
    title: GRADE_TITLE,
    note: text(
      "React qurulmadan bir HTML faylda işləyir. Siyahıya ad əlavə olunur və silinir. Faylı .html kimi saxla və brauzerdə aç. İnternet lazımdır, çünki React CDN-dən gəlir.",
      "React runs in one HTML file, without a project setup. A name is added to the list and removed. Save it as .html and open it in the browser. The internet is needed, because React comes from a CDN.",
      "React proje kurmadan bir HTML dosyada çalışır. Listeye ad eklenir ve silinir. Dosyayı .html diye kaydet ve tarayıcıda aç. İnternet gerekir, çünkü React CDN'den gelir.",
      "يعمل React في ملف HTML واحد بلا إعداد مشروع. يُضاف اسم إلى القائمة ويُحذف. احفظه كـ .html وافتحه في المتصفح. يلزم الإنترنت لأن React يأتي من CDN.",
      "React работает в одном HTML-файле, без настройки проекта. Имя добавляется в список и удаляется. Сохрани как .html и открой в браузере. Нужен интернет, потому что React берётся с CDN.",
    ),
    code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>React siyahı</title>
</head>
<body>
<div id="root"></div>
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@18.3.1",
    "react-dom/client": "https://esm.sh/react-dom@18.3.1/client"
  }
}
</script>
<script type="module">
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const start = ["Python", "SQL", "HTML"];

function App() {
  const [items, setItems] = useState(start);
  const [text, setText] = useState("");

  function add(event) {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems([...items, value]);
    setText("");
  }

  function remove(index) {
    setItems(items.filter((_, itemIndex) => itemIndex !== index));
  }

  return React.createElement(
    "main",
    null,
    React.createElement("h1", null, "React siyahı"),
    React.createElement("p", null, items.length + " sətir"),
    React.createElement(
      "form",
      { onSubmit: add },
      React.createElement("input", {
        value: text,
        onChange: (event) => setText(event.target.value),
        placeholder: "Yeni sətir",
      }),
      React.createElement("button", { type: "submit" }, "Əlavə et"),
    ),
    React.createElement(
      "ul",
      null,
      items.map((item, index) =>
        React.createElement(
          "li",
          { key: index },
          item,
          " ",
          React.createElement(
            "button",
            { type: "button", onClick: () => remove(index) },
            "Sil",
          ),
        ),
      ),
    ),
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
</script>
</body>
</html>
`,
  },
};

export const LARGE_GAME = {
  title: text("Böyük oyun", "A large game", "Büyük oyun", "لعبة كبيرة", "Большая игра"),
  note: text(
    "Beş sual, xal və yenidən başla. Düz cavab 10 xal gətirir. Sual bitəndə düymələr bağlanır. Bütün səhifə bir fayldadır. .html kimi saxla və aç.",
    "Five questions, a score, and a restart. A right answer brings 10 points. When the questions end, the buttons close. The whole page is one file. Save it as .html and open it.",
    "Beş soru, puan ve yeniden başla. Doğru cevap 10 puan getirir. Sorular bitince düğmeler kapanır. Bütün sayfa bir dosyadır. .html diye kaydet ve aç.",
    "خمسة أسئلة ونقاط وابدأ من جديد. الجواب الصحيح يجلب 10 نقاط. حين تنتهي الأسئلة تُغلق الأزرار. الصفحة كلها ملف واحد. احفظه كـ .html وافتحه.",
    "Пять вопросов, счёт и начать заново. Верный ответ даёт 10 очков. Когда вопросы кончаются, кнопки закрываются. Вся страница — один файл. Сохрани как .html и открой.",
  ),
  code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Quiz</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #e2e8f0; margin: 0; }
    main { max-width: 560px; margin: 32px auto; padding: 0 16px; }
    button { margin: 6px 6px 0 0; padding: 10px 14px; border: 0; border-radius: 8px; background: #0284c7; color: #fff; }
  </style>
</head>
<body>
<main>
  <p>Xal: <b id="score">0</b></p>
  <h1 id="ask"></h1>
  <div id="choices"></div>
  <p id="out"></p>
  <button type="button" id="again">Yenidən</button>
</main>
<script>
  const quiz = [
    { q: "Python nədir?", options: ["Brauzer", "Proqramlaşdırma dili", "Şəkil formatı"], answer: 1 },
    { q: "HTML nə üçündür?", options: ["Səhifənin quruluşu", "Cədvəlin parolu", "Telefonun batareyası"], answer: 0 },
    { q: "SQL nəyə sual verir?", options: ["Ekranın rənginə", "Klaviaturaya", "Verilənlərə"], answer: 2 },
    { q: "Bash nədir?", options: ["Şəkil redaktoru", "Əmr dili", "Cədvəl proqramı"], answer: 1 },
    { q: "CSS nəyi deyir?", options: ["Faylın parolunu", "Telefonun nömrəsini", "Səhifənin görünüşünü"], answer: 2 },
  ];
  let index = 0;
  let score = 0;
  const ask = document.getElementById("ask");
  const choices = document.getElementById("choices");
  const out = document.getElementById("out");
  const scoreNode = document.getElementById("score");

  function show() {
    choices.innerHTML = "";
    out.textContent = "";
    if (index >= quiz.length) {
      ask.textContent = "Bitdi";
      out.textContent = "Xal: " + score + " / " + (quiz.length * 10);
      return;
    }
    const item = quiz[index];
    ask.textContent = item.q;
    item.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => pick(optionIndex));
      choices.append(button);
    });
  }

  function pick(optionIndex) {
    const item = quiz[index];
    if (!item) return;
    if (optionIndex === item.answer) {
      score += 10;
      out.textContent = "Düzdür";
    } else {
      out.textContent = "Səhv";
    }
    scoreNode.textContent = String(score);
    choices.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    index += 1;
    setTimeout(show, 600);
  }

  document.getElementById("again").addEventListener("click", () => {
    index = 0;
    score = 0;
    scoreNode.textContent = "0";
    show();
  });

  show();
</script>
</body>
</html>
`,
};

export const LARGE_APP = {
  title: text("Böyük tətbiq", "A large app", "Büyük uygulama", "تطبيق كبير", "Большое приложение"),
  note: text(
    "Gəlir və xərc siyahısıdır. Məbləğ ədəd deyilsə əlavə olunmur. Cəm ayrıca yazılır. Səhifə bağlananda siyahı qalır. Faylı .html kimi saxla və aç.",
    "A list of income and expense. If the amount is not a number, it is not added. The total is written apart. The list stays when the page closes. Save the file as .html and open it.",
    "Gelir ve gider listesidir. Tutar sayı değilse eklenmez. Toplam ayrı yazılır. Sayfa kapanınca liste kalır. Dosyayı .html diye kaydet ve aç.",
    "قائمة دخل ومصروف. إذا لم يكن المبلغ رقماً لا يُضاف. المجموع يُكتب وحده. تبقى القائمة حين تُغلق الصفحة. احفظ الملف كـ .html وافتحه.",
    "Список дохода и расхода. Если сумма не число, она не добавляется. Итог пишется отдельно. Список остаётся, когда страница закрывается. Сохрани файл как .html и открой.",
  ),
  code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Kassa</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; color: #0f172a; }
    main { max-width: 640px; margin: 28px auto; padding: 0 16px; }
    form { display: grid; grid-template-columns: 1fr 120px 140px auto; gap: 8px; }
    input, select { padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; font: inherit; }
    button { border: 0; border-radius: 8px; padding: 10px 12px; background: #0f766e; color: #fff; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    td { padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
    .out { color: #b91c1c; }
    @media (max-width: 700px) { form { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
<main>
  <h1>Kassa</h1>
  <p>Qalıq: <b id="total">0</b></p>
  <form id="form">
    <input id="title" type="text" maxlength="80" placeholder="Ad" required>
    <input id="amount" type="number" step="0.01" placeholder="Məbləğ" required>
    <select id="kind">
      <option value="in">Gəlir</option>
      <option value="out">Xərc</option>
    </select>
    <button type="submit">Əlavə et</button>
  </form>
  <table>
    <tbody id="rows"></tbody>
  </table>
</main>
<script>
  const KEY = "nibras-cash";
  const form = document.getElementById("form");
  const rows = document.getElementById("rows");
  const total = document.getElementById("total");

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  }

  let items = load().filter((item) => item && typeof item.title === "string" && typeof item.amount === "number");

  function money(value) {
    return value.toFixed(2);
  }

  function balance() {
    return items.reduce((sum, item) => sum + (item.kind === "out" ? -item.amount : item.amount), 0);
  }

  function draw() {
    rows.innerHTML = "";
    items.forEach((item, index) => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      name.textContent = item.title;
      const amount = document.createElement("td");
      amount.textContent = (item.kind === "out" ? "-" : "+") + money(item.amount);
      amount.className = item.kind === "out" ? "out" : "";
      const remove = document.createElement("td");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Sil";
      button.addEventListener("click", () => {
        items.splice(index, 1);
        localStorage.setItem(KEY, JSON.stringify(items));
        draw();
      });
      remove.append(button);
      row.append(name, amount, remove);
      rows.append(row);
    });
    total.textContent = money(balance());
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const kind = document.getElementById("kind").value;
    if (!title || !Number.isFinite(amount) || amount <= 0) return;
    items.push({ title, amount, kind });
    localStorage.setItem(KEY, JSON.stringify(items));
    form.reset();
    draw();
  });

  draw();
</script>
</body>
</html>
`,
};
