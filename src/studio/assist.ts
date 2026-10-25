/** Offline code assistant: snippets, checks, fixes, explanations, docs and ideas. Pure functions, no network, no AI. */
export type F = { name: string; content: string };
export type Finding = { level: "error" | "warn" | "info"; file: string; line?: number; msg: string };
type L = "az" | "en" | "tr" | "ar" | "ru";
const pick = (l: string, m: Record<L, string>) => m[(l in m ? l : "en") as L];

const ext = (n: string) => n.toLowerCase().split(".").pop() ?? "";
const lineOf = (src: string, idx: number) => src.slice(0, idx).split("\n").length;

// ---------- Kod yaz: snippets ----------
export type Snippet = { id: string; label: Record<L, string>; kind: "html" | "css" | "js"; code: string };
export const SNIPPETS: Snippet[] = [
  { id: "nav", kind: "html", label: { az: "Naviqasiya menyusu", en: "Navigation bar", tr: "Gezinme menüsü", ar: "شريط تنقل", ru: "Навигация" }, code: `<nav class="nav">\n  <a class="brand" href="#">Logo</a>\n  <a href="#about">Haqqında</a>\n  <a href="#contact">Əlaqə</a>\n</nav>` },
  { id: "card", kind: "html", label: { az: "Kart", en: "Card", tr: "Kart", ar: "بطاقة", ru: "Карточка" }, code: `<article class="card">\n  <h2>Başlıq</h2>\n  <p>Qısa təsvir.</p>\n  <button>Ətraflı</button>\n</article>` },
  { id: "form", kind: "html", label: { az: "Əlaqə forması", en: "Contact form", tr: "İletişim formu", ar: "نموذج تواصل", ru: "Форма связи" }, code: `<form id="contact">\n  <label>Ad <input name="name" required></label>\n  <label>E-poçt <input name="email" type="email" required></label>\n  <label>Mesaj <textarea name="msg" rows="4"></textarea></label>\n  <button type="submit">Göndər</button>\n</form>` },
  { id: "grid", kind: "css", label: { az: "Uyğunlaşan şəbəkə", en: "Responsive grid", tr: "Esnek ızgara", ar: "شبكة مرنة", ru: "Адаптивная сетка" }, code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}` },
  { id: "dark", kind: "css", label: { az: "Qaranlıq rejim", en: "Dark mode", tr: "Karanlık mod", ar: "الوضع الداكن", ru: "Тёмная тема" }, code: `@media (prefers-color-scheme: dark) {\n  body { background: #0b1020; color: #f1f4ff; }\n}` },
  { id: "navcss", kind: "css", label: { az: "Menyu stili", en: "Nav styles", tr: "Menü stili", ar: "تنسيق القائمة", ru: "Стили меню" }, code: `.nav { display: flex; gap: 16px; align-items: center; padding: 12px 16px; }\n.nav .brand { font-weight: 700; margin-inline-end: auto; }\n.nav a { color: inherit; text-decoration: none; }` },
  { id: "todo", kind: "js", label: { az: "Yadda qalan siyahı", en: "Saved list (localStorage)", tr: "Kayıtlı liste", ar: "قائمة محفوظة", ru: "Сохраняемый список" }, code: `const KEY = "items";\nconst items = JSON.parse(localStorage.getItem(KEY) || "[]");\nfunction add(text) {\n  items.push({ text, done: false });\n  localStorage.setItem(KEY, JSON.stringify(items));\n}` },
  { id: "submit", kind: "js", label: { az: "Formanı yoxla", en: "Form handler", tr: "Form işleyici", ar: "معالجة النموذج", ru: "Обработка формы" }, code: `document.getElementById("contact")?.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const data = Object.fromEntries(new FormData(e.target));\n  console.log("form", data);\n});` },
  { id: "toggle", kind: "js", label: { az: "Rejim düyməsi", en: "Theme toggle", tr: "Tema düğmesi", ar: "زر السمة", ru: "Переключатель темы" }, code: `const btn = document.createElement("button");\nbtn.textContent = "🌓";\nbtn.onclick = () => document.body.classList.toggle("dark");\ndocument.body.append(btn);` },
];

/** Insert a snippet into the right file: HTML before </body>, CSS/JS appended. Returns new file list and target name. */
export function insertSnippet(files: F[], s: Snippet, active: string): { files: F[]; target: string } {
  const want = s.kind === "html" ? /\.html?$/i : s.kind === "css" ? /\.css$/i : /\.m?js$/i;
  const target = want.test(active) ? active : files.find((f) => want.test(f.name))?.name ?? (s.kind === "html" ? "index.html" : s.kind === "css" ? "style.css" : "script.js");
  const exists = files.some((f) => f.name === target);
  const next = exists ? files.map((f) => {
    if (f.name !== target) return f;
    if (s.kind === "html" && /<\/body>/i.test(f.content)) {
      const i = f.content.search(/\n?\s*<script[^>]*src=|<\/body>/i);
      return { ...f, content: f.content.slice(0, i) + "\n  " + s.code.replace(/\n/g, "\n  ") + f.content.slice(i) };
    }
    return { ...f, content: f.content.replace(/\s*$/, "\n\n") + s.code + "\n" };
  }) : [...files, { name: target, content: s.code + "\n" }];
  return { files: next, target };
}

// ---------- Təhlil et: checks ----------
const VOID = new Set("area base br col embed hr img input link meta param source track wbr".split(" "));
export function analyze(files: F[], lang: string): Finding[] {
  const out: Finding[] = [];
  const names = new Set(files.map((f) => f.name.toLowerCase()));
  for (const f of files) {
    const e = ext(f.name), src = f.content;
    if (e === "html" || e === "htm") {
      if (!/<!doctype html>/i.test(src)) out.push({ level: "warn", file: f.name, line: 1, msg: pick(lang, { az: "<!doctype html> yoxdur", en: "Missing <!doctype html>", tr: "<!doctype html> yok", ar: "ينقص ‎<!doctype html>", ru: "Нет <!doctype html>" }) });
      if (!/<meta[^>]+name=["']viewport/i.test(src)) out.push({ level: "warn", file: f.name, msg: pick(lang, { az: "viewport meta yoxdur — telefonda kiçik görünəcək", en: "No viewport meta — page will look tiny on phones", tr: "viewport meta yok — telefonda küçük görünür", ar: "لا يوجد ‎meta viewport‎ — ستبدو الصفحة صغيرة على الهاتف", ru: "Нет meta viewport — на телефоне будет мелко" }) });
      if (!/<title>[^<]+<\/title>/i.test(src)) out.push({ level: "warn", file: f.name, msg: pick(lang, { az: "<title> boşdur və ya yoxdur", en: "Empty or missing <title>", tr: "<title> boş veya yok", ar: "‏<title> فارغ أو مفقود", ru: "Пустой или нет <title>" }) });
      if (!/<html[^>]+lang=/i.test(src)) out.push({ level: "info", file: f.name, msg: pick(lang, { az: "<html lang> göstərilməyib", en: "<html> has no lang", tr: "<html> lang yok", ar: "‏<html> بلا ‎lang", ru: "У <html> нет lang" }) });
      for (const m of src.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/gi)) out.push({ level: "warn", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: "Şəkildə alt yoxdur", en: "Image without alt text", tr: "Görselde alt yok", ar: "صورة بلا نص بديل ‎alt", ru: "Картинка без alt" }) });
      const ids = new Map<string, number>();
      for (const m of src.matchAll(/\sid=["']([^"']+)["']/g)) { if (ids.has(m[1])) out.push({ level: "error", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: `Təkrar id: "${m[1]}"`, en: `Duplicate id "${m[1]}"`, tr: `Tekrarlanan id "${m[1]}"`, ar: `معرّف مكرر "${m[1]}"`, ru: `Повтор id "${m[1]}"` }) }); ids.set(m[1], 1); }
      for (const m of src.matchAll(/<(?:link[^>]+href|script[^>]+src)=["'](?!https?:|\/\/|data:)([^"'#?]+)["']/gi)) if (!names.has(m[1].replace(/^\.?\//, "").toLowerCase())) out.push({ level: "error", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: `"${m[1]}" faylı layihədə yoxdur`, en: `"${m[1]}" is not in the project`, tr: `"${m[1]}" projede yok`, ar: `الملف "${m[1]}" غير موجود في المشروع`, ru: `Файла "${m[1]}" нет в проекте` }) });
      // tag balance
      const stack: { t: string; i: number }[] = [];
      const body = src.replace(/<!--[\s\S]*?-->/g, (x) => " ".repeat(x.length)).replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, (x) => x.replace(/>[\s\S]*</, (y) => ">" + " ".repeat(y.length - 2) + "<"));
      for (const m of body.matchAll(/<\/?([a-zA-Z][\w-]*)\b[^>]*?(\/?)>/g)) {
        const t = m[1].toLowerCase();
        if (VOID.has(t) || m[2] === "/" || t === "!doctype") continue;
        if (m[0][1] !== "/") stack.push({ t, i: m.index! });
        else {
          const k = stack.map((s) => s.t).lastIndexOf(t);
          if (k < 0) out.push({ level: "error", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: `Artıq bağlanış teqi </${t}>`, en: `Stray closing tag </${t}>`, tr: `Fazla kapanış </${t}>`, ar: `وسم إغلاق زائد ‎</${t}>`, ru: `Лишний закрывающий </${t}>` }) });
          else { for (const s of stack.splice(k)) if (s.t !== t && !/^(p|li|td|tr|th|option)$/.test(s.t)) out.push({ level: "error", file: f.name, line: lineOf(src, s.i), msg: pick(lang, { az: `<${s.t}> bağlanmayıb`, en: `<${s.t}> is not closed`, tr: `<${s.t}> kapatılmamış`, ar: `‏<${s.t}> غير مغلق`, ru: `<${s.t}> не закрыт` }) }); }
        }
      }
      for (const s of stack) if (!/^(p|li|td|tr|th|option|html|head|body)$/.test(s.t)) out.push({ level: "error", file: f.name, line: lineOf(src, s.i), msg: pick(lang, { az: `<${s.t}> bağlanmayıb`, en: `<${s.t}> is not closed`, tr: `<${s.t}> kapatılmamış`, ar: `‏<${s.t}> غير مغلق`, ru: `<${s.t}> не закрыт` }) });
    }
    if (e === "css") {
      let d = 0; src.split("\n").forEach((ln, i) => { for (const ch of ln.replace(/\/\*.*?\*\//g, "")) { if (ch === "{") d++; if (ch === "}") { d--; if (d < 0) { out.push({ level: "error", file: f.name, line: i + 1, msg: pick(lang, { az: "Artıq }", en: "Extra }", tr: "Fazla }", ar: "‏} زائد", ru: "Лишняя }" }) }); d = 0; } } } });
      if (d > 0) out.push({ level: "error", file: f.name, msg: pick(lang, { az: `${d} blok bağlanmayıb (})`, en: `${d} block(s) not closed (})`, tr: `${d} blok kapanmamış`, ar: `${d} كتلة غير مغلقة`, ru: `Не закрыто блоков: ${d}` }) });
      for (const m of src.matchAll(/^\s*([a-z-]+)\s*:\s*[^;{}]+$/gm)) if (!/[{,]\s*$/.test(m[0])) out.push({ level: "warn", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: `"${m[1]}" sonunda ; yoxdur`, en: `Missing ; after "${m[1]}"`, tr: `"${m[1]}" sonrası ; yok`, ar: `ينقص ; بعد "${m[1]}"`, ru: `Нет ; после "${m[1]}"` }) });
      if (!/@media/.test(src) && src.length > 200) out.push({ level: "info", file: f.name, msg: pick(lang, { az: "@media yoxdur — telefona uyğunlaşma yoxlanmayıb", en: "No @media queries — responsiveness not handled", tr: "@media yok — mobil uyum yok", ar: "لا توجد ‎@media‎ — التجاوب غير معالج", ru: "Нет @media — адаптивности нет" }) });
    }
    if (e === "js" || e === "mjs") {
      try { new Function(src); } catch (err) {
        const m = String((err as Error).message);
        out.push({ level: "error", file: f.name, msg: pick(lang, { az: "Sintaksis xətası: ", en: "Syntax error: ", tr: "Söz dizimi hatası: ", ar: "خطأ في الصياغة: ", ru: "Синтаксическая ошибка: " }) + m });
      }
      const logs = (src.match(/console\.log\(/g) ?? []).length;
      if (logs > 3) out.push({ level: "info", file: f.name, msg: pick(lang, { az: `${logs} console.log — dərc etməzdən əvvəl azaldın`, en: `${logs} console.log calls — trim before publishing`, tr: `${logs} console.log — yayından önce azaltın`, ar: `${logs} من ‎console.log‎ — قلّلها قبل النشر`, ru: `${logs} console.log — уберите перед публикацией` }) });
      for (const m of src.matchAll(/\bvar\s+\w+/g)) { out.push({ level: "info", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: "var əvəzinə let/const istifadə edin", en: "Use let/const instead of var", tr: "var yerine let/const kullanın", ar: "استخدم ‎let/const‎ بدل ‎var", ru: "Используйте let/const вместо var" }) }); break; }
      for (const m of src.matchAll(/getElementById\(["']([^"']+)["']\)/g)) {
        const html = files.filter((x) => /\.html?$/i.test(x.name)).map((x) => x.content).join("\n");
        if (html && !new RegExp(`id=["']${m[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`).test(html) && !new RegExp(`\\.id\\s*=\\s*["']${m[1]}["']`).test(src)) out.push({ level: "warn", file: f.name, line: lineOf(src, m.index!), msg: pick(lang, { az: `HTML-də id="${m[1]}" yoxdur`, en: `No element with id="${m[1]}" in HTML`, tr: `HTML'de id="${m[1]}" yok`, ar: `لا يوجد عنصر ‎id="${m[1]}"‎ في HTML`, ru: `В HTML нет id="${m[1]}"` }) });
      }
    }
  }
  return out;
}

// ---------- Düzəliş et: fixes ----------
export function fixAll(files: F[]): { files: F[]; changes: string[] } {
  const changes: string[] = [];
  const next = files.map((f) => {
    const e = ext(f.name);
    let s = f.content.replace(/[ \t]+$/gm, "");
    if (e === "html" || e === "htm") {
      if (!/<!doctype html>/i.test(s)) { s = "<!doctype html>\n" + s; changes.push(`${f.name}: <!doctype html>`); }
      if (/<head[^>]*>/i.test(s) && !/<meta[^>]+charset/i.test(s)) { s = s.replace(/<head[^>]*>/i, (m) => `${m}\n  <meta charset="utf-8">`); changes.push(`${f.name}: charset`); }
      if (/<head[^>]*>/i.test(s) && !/name=["']viewport/i.test(s)) { s = s.replace(/<head[^>]*>/i, (m) => `${m}\n  <meta name="viewport" content="width=device-width, initial-scale=1">`); changes.push(`${f.name}: viewport`); }
      const n0 = s; s = s.replace(/<img\b(?![^>]*\balt=)([^>]*)>/gi, '<img alt=""$1>'); if (s !== n0) changes.push(`${f.name}: alt=""`);
      s = indentHtml(s);
    } else if (e === "css" || e === "js" || e === "mjs" || e === "json") {
      if (e === "css") { const n1 = s; s = s.replace(/^(\s*[a-z-]+\s*:\s*[^;{}\n]+?)\s*$/gm, (m, a) => (/[{,]$/.test(a) ? m : a + ";")); if (s !== n1) changes.push(`${f.name}: ;`); }
      s = reindent(s);
    }
    s = s.replace(/\n{3,}/g, "\n\n");
    if (!s.endsWith("\n")) s += "\n";
    if (s !== f.content && !changes.some((c) => c.startsWith(f.name))) changes.push(`${f.name}: format`);
    return { ...f, content: s };
  });
  return { files: next, changes };
}
function reindent(src: string) {
  let depth = 0;
  return src.split("\n").map((raw) => {
    const line = raw.trim();
    if (!line) return "";
    const lead = /^[}\])]/.test(line) ? 1 : 0;
    const out = "  ".repeat(Math.max(0, depth - lead)) + line;
    const clean = line.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "").replace(/\/\/.*$/, "");
    depth = Math.max(0, depth + (clean.match(/[{[(]/g) ?? []).length - (clean.match(/[}\])]/g) ?? []).length);
    return out;
  }).join("\n");
}
function indentHtml(src: string) {
  let depth = 0;
  let raw = false;
  return src.split("\n").map((r) => {
    const line = r.trim();
    if (!line) return "";
    if (raw) { if (/<\/(script|style)>/i.test(line)) raw = false; else return r; }
    const closesFirst = /^<\//.test(line) ? 1 : 0;
    const out = "  ".repeat(Math.max(0, depth - closesFirst)) + line;
    const opens = [...line.matchAll(/<([a-zA-Z][\w-]*)\b[^>]*?(\/?)>/g)].filter((m) => !VOID.has(m[1].toLowerCase()) && m[2] !== "/" && !/^(html|head|body)$/i.test(m[1])).length;
    const closes = [...line.matchAll(/<\/([a-zA-Z][\w-]*)>/g)].filter((m) => !/^(html|head|body)$/i.test(m[1])).length;
    depth = Math.max(0, depth + opens - closes);
    if (/<(script|style)\b[^>]*>(?![\s\S]*<\/\1>)/i.test(line)) raw = true;
    return out;
  }).join("\n");
}

// ---------- İzah et: built-in reference ----------
type Doc = Record<"az" | "en", string>;
const HTML_DOC: Record<string, Doc> = {
  html: { az: "Sənədin kökü; lang dili bildirir.", en: "Document root; lang sets the language." },
  head: { az: "Görünməyən məlumat: başlıq, meta, stil linkləri.", en: "Invisible info: title, meta, stylesheet links." },
  meta: { az: "Səhifə haqqında məlumat (kodlaşma, viewport, təsvir).", en: "Page metadata (charset, viewport, description)." },
  title: { az: "Brauzer tabında görünən ad.", en: "Name shown in the browser tab." },
  link: { az: "Xarici resurs qoşur, adətən CSS faylı.", en: "Connects an external resource, usually CSS." },
  body: { az: "Səhifədə görünən bütün məzmun.", en: "All visible page content." },
  h1: { az: "Ən əsas başlıq; səhifədə bir dənə olmalıdır.", en: "Main heading; use one per page." },
  h2: { az: "Bölmə başlığı.", en: "Section heading." },
  p: { az: "Mətn abzası.", en: "Paragraph of text." },
  a: { az: "Keçid; href hara getdiyini göstərir.", en: "Link; href is the destination." },
  img: { az: "Şəkil; src ünvan, alt təsvir (əlçatanlıq üçün).", en: "Image; src is the file, alt describes it." },
  button: { az: "Basıla bilən düymə; JS ilə hadisə qoşulur.", en: "Clickable button; JS attaches events." },
  div: { az: "Ümumi blok konteyner.", en: "Generic block container." },
  span: { az: "Sətir içi konteyner.", en: "Generic inline container." },
  ul: { az: "Nöqtəli siyahı; elementləri li-dir.", en: "Bulleted list of li items." },
  li: { az: "Siyahı elementi.", en: "List item." },
  form: { az: "Forma; daxil edilən məlumatı toplayır.", en: "Form collecting user input." },
  input: { az: "Daxiletmə sahəsi; type növünü seçir.", en: "Input field; type selects the kind." },
  label: { az: "Sahənin adı; kliklə sahəni fokuslayır.", en: "Field caption; clicking focuses the field." },
  textarea: { az: "Çoxsətirli mətn sahəsi.", en: "Multi-line text field." },
  script: { az: "JavaScript qoşur; adətən body-nin sonunda.", en: "Loads JavaScript; usually at end of body." },
  nav: { az: "Naviqasiya keçidləri bölməsi.", en: "Section with navigation links." },
  header: { az: "Səhifənin və ya bölmənin yuxarı hissəsi.", en: "Top part of a page or section." },
  footer: { az: "Aşağı hissə: müəllif, keçidlər.", en: "Bottom part: credits, links." },
  section: { az: "Mövzu bölməsi.", en: "Thematic section." },
  article: { az: "Müstəqil məzmun bloku (kart, yazı).", en: "Self-contained content (card, post)." },
  main: { az: "Səhifənin əsas məzmunu.", en: "Main content of the page." },
};
const CSS_DOC: Record<string, Doc> = {
  "font-family": { az: "Şrift ailəsi.", en: "Font family." }, padding: { az: "Daxili boşluq.", en: "Inner spacing." }, margin: { az: "Xarici boşluq.", en: "Outer spacing." },
  background: { az: "Fon rəngi və ya şəkli.", en: "Background colour or image." }, color: { az: "Mətn rəngi.", en: "Text colour." }, border: { az: "Çərçivə.", en: "Border." },
  "border-radius": { az: "Künclərin yuvarlaqlığı.", en: "Corner rounding." }, "font-size": { az: "Şrift ölçüsü.", en: "Font size." }, display: { az: "Görünmə növü: block, flex, grid…", en: "Layout type: block, flex, grid…" },
  gap: { az: "Flex/grid elementləri arasında boşluq.", en: "Space between flex/grid items." }, "grid-template-columns": { az: "Grid sütunları.", en: "Grid columns." }, width: { az: "En.", en: "Width." }, height: { az: "Hündürlük.", en: "Height." },
  "align-items": { az: "Elementləri çarpaz oxda düzür.", en: "Aligns items on the cross axis." }, "justify-content": { az: "Elementləri əsas oxda paylayır.", en: "Distributes items on the main axis." }, cursor: { az: "Siçan göstəricisinin forması.", en: "Mouse pointer shape." },
  transition: { az: "Dəyişikliklərin animasiyası.", en: "Animates property changes." }, "box-shadow": { az: "Kölgə.", en: "Shadow." }, "text-align": { az: "Mətnin düzülməsi.", en: "Text alignment." },
};
const JS_DOC: Record<string, Doc> = {
  "getElementById": { az: "id-yə görə elementi tapır.", en: "Finds an element by id." }, "querySelector": { az: "CSS seçiciyə görə ilk elementi tapır.", en: "Finds the first element matching a CSS selector." },
  "addEventListener": { az: "Hadisəyə (click, submit…) funksiya qoşur.", en: "Runs a function on an event (click, submit…)." }, "textContent": { az: "Elementin mətni.", en: "An element's text." },
  "console.log": { az: "Konsola yazır — yoxlama üçün.", en: "Prints to the console for debugging." }, "localStorage": { az: "Brauzerdə məlumat saxlayır.", en: "Stores data in the browser." },
  "fetch": { az: "Şəbəkədən məlumat alır.", en: "Requests data over the network." }, "let": { az: "Dəyişə bilən dəyişən.", en: "A variable that can change." }, "const": { az: "Dəyişməyən bağlama.", en: "A binding that does not change." },
  "function": { az: "Təkrar istifadə olunan kod bloku.", en: "Reusable block of code." }, "=>": { az: "Qısa funksiya yazılışı.", en: "Short function syntax." }, "classList": { az: "Elementin class-larını idarə edir.", en: "Manages an element's classes." },
  "setTimeout": { az: "Kodu gecikmə ilə işə salır.", en: "Runs code after a delay." }, "JSON": { az: "Obyekti mətnə və geri çevirir.", en: "Converts objects to text and back." },
};
export function explain(file: F, lang: string): { title: string; items: { k: string; v: string }[] } {
  const l: "az" | "en" = lang === "az" ? "az" : "en";
  const e = ext(file.name);
  const items: { k: string; v: string }[] = [];
  const seen = new Set<string>();
  const add = (k: string, d?: Doc) => { if (d && !seen.has(k)) { seen.add(k); items.push({ k, v: d[l] }); } };
  if (e === "html" || e === "htm") for (const m of file.content.matchAll(/<([a-z][\w-]*)/gi)) add(`<${m[1].toLowerCase()}>`, HTML_DOC[m[1].toLowerCase()]);
  else if (e === "css") for (const m of file.content.matchAll(/([a-z-]+)\s*:/g)) add(m[1], CSS_DOC[m[1]]);
  else if (e === "js" || e === "mjs") for (const k of Object.keys(JS_DOC)) if (file.content.includes(k)) add(k, JS_DOC[k]);
  const lines = file.content.split("\n").length;
  const title = pick(lang, { az: `${file.name}: ${lines} sətir, ${items.length} anlayış`, en: `${file.name}: ${lines} lines, ${items.length} concepts`, tr: `${file.name}: ${lines} satır, ${items.length} kavram`, ar: `${file.name}: ${lines} سطراً، ${items.length} مفهوماً`, ru: `${file.name}: ${lines} строк, понятий: ${items.length}` });
  return { title, items };
}

// ---------- Sənədləşmə ----------
export function readme(name: string, files: F[], lang: string): string {
  const fns = files.filter((f) => /\.m?js$/i.test(f.name)).flatMap((f) => [...f.content.matchAll(/function\s+(\w+)\s*\(([^)]*)\)|(?:const|let)\s+(\w+)\s*=\s*(?:async\s*)?\(([^)]*)\)\s*=>/g)].map((m) => `- \`${m[1] ?? m[3]}(${(m[2] ?? m[4] ?? "").trim()})\` — ${f.name}`));
  const ids = [...new Set(files.filter((f) => /\.html?$/i.test(f.name)).flatMap((f) => [...f.content.matchAll(/\sid=["']([^"']+)["']/g)].map((m) => m[1])))];
  const H = (az: string, en: string) => (lang === "az" ? az : en);
  return [
    `# ${name}`,
    "",
    H("Nibras Studio-da hazırlanmış statik veb layihə.", "A static web project made in Nibras Studio."),
    "",
    `## ${H("Fayllar", "Files")}`,
    ...files.map((f) => `- \`${f.name}\` — ${f.content.split("\n").length} ${H("sətir", "lines")}`),
    "",
    ...(fns.length ? [`## ${H("Funksiyalar", "Functions")}`, ...fns, ""] : []),
    ...(ids.length ? [`## ${H("Elementlər (id)", "Elements (id)")}`, ids.map((i) => `\`#${i}\``).join(", "), ""] : []),
    `## ${H("İşə salmaq", "Run")}`,
    H("`index.html` faylını brauzerdə açın və ya Nibras Studio-da «İşə sal» basın.", "Open `index.html` in a browser, or press Run in Nibras Studio."),
    "",
  ].join("\n");
}

// ---------- İdeya ver ----------
export type Idea = { text: string; snippet?: string };
export function ideas(files: F[], lang: string): Idea[] {
  const all = files.map((f) => f.content).join("\n");
  const css = files.filter((f) => /\.css$/i.test(f.name)).map((f) => f.content).join("\n");
  const out: Idea[] = [];
  const t = (m: Record<L, string>) => pick(lang, m);
  if (!/prefers-color-scheme|\.dark\b/.test(all)) out.push({ text: t({ az: "Qaranlıq rejim əlavə et", en: "Add a dark mode", tr: "Karanlık mod ekle", ar: "أضف الوضع الداكن", ru: "Добавьте тёмную тему" }), snippet: "dark" });
  if (!/@media/.test(css)) out.push({ text: t({ az: "Telefon üçün uyğunlaşan şəbəkə", en: "Make the layout responsive", tr: "Düzeni mobil uyumlu yap", ar: "اجعل التخطيط متجاوباً", ru: "Сделайте адаптивную сетку" }), snippet: "grid" });
  if (!/<nav\b/i.test(all)) out.push({ text: t({ az: "Yuxarıya menyu qoy", en: "Add a navigation bar", tr: "Üste menü ekle", ar: "أضف شريط تنقل", ru: "Добавьте меню" }), snippet: "nav" });
  if (!/localStorage/.test(all)) out.push({ text: t({ az: "Məlumatı brauzerdə yadda saxla", en: "Remember data with localStorage", tr: "Veriyi tarayıcıda sakla", ar: "احفظ البيانات في المتصفح", ru: "Сохраняйте данные в localStorage" }), snippet: "todo" });
  if (!/<form\b/i.test(all)) out.push({ text: t({ az: "Əlaqə forması əlavə et", en: "Add a contact form", tr: "İletişim formu ekle", ar: "أضف نموذج تواصل", ru: "Добавьте форму связи" }), snippet: "form" });
  if (!/<article|class="card"/i.test(all)) out.push({ text: t({ az: "Məhsul/xidmət kartları", en: "Show items as cards", tr: "Öğeleri kart olarak göster", ar: "اعرض العناصر كبطاقات", ru: "Покажите элементы карточками" }), snippet: "card" });
  out.push({ text: t({ az: "Hazır olanda: Dərc et → Android APK", en: "When ready: Publish → Android APK", tr: "Hazır olunca: Yayınla → Android APK", ar: "عند الجاهزية: نشر ← APK لأندرويد", ru: "Когда готово: Опубликовать → Android APK" }) });
  return out;
}
