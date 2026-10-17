import { l5 as t } from "./meta";
import type { OwnPageContent } from "./own-types";

export const OWN_CSS: OwnPageContent = {
  nedir: [
    {
      id: "what",
      title: t("CSS nədir", "What CSS is", "CSS nedir", "ما هو CSS", "Что такое CSS"),
      blocks: [
        {
          paragraphs: [t(
            "HTML səhifənin sözləridir. CSS həmin sözlərin rəngi, ölçüsü və yeridir. Stil style teqinin içində yazılır.",
            "HTML is the words of a page. CSS is the color, size and place of those words. The style is written inside a style tag.",
            "HTML sayfanın sözleridir. CSS o sözlerin rengi, boyutu ve yeridir. Stil style etiketinin içine yazılır.",
            "HTML كلمات الصفحة. CSS هو لونها وحجمها ومكانها. يُكتب التنسيق داخل وسم style.",
            "HTML — слова страницы. CSS — их цвет, размер и место. Стиль пишут внутри тега style.",
          )],
          code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      h1 { color: #2f6bff; }\n      .card {\n        background: #101826;\n        color: white;\n        padding: 16px;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Nibras</h1>\n    <p class="card">This box has a class.</p>\n  </body>\n</html>',
        },
      ],
    },
    {
      id: "class",
      title: t("class və flex", "class and flex", "class ve flex", "class وflex", "class и flex"),
      blocks: [
        {
          paragraphs: [t(
            "class bir ada stil bağlayır. Nöqtə işarəsi class üçündür: .card. flex elementləri yan-yana düzür.",
            "A class ties a style to a name. The dot marks a class: .card. flex places elements side by side.",
            "class bir ada stil bağlar. Nokta class içindir: .card. flex öğeleri yan yana dizer.",
            "class يربط تنسيقاً باسم. النقطة للفئة: .card. flex يضع العناصر جنباً إلى جنب.",
            "class связывает стиль с именем. Точка означает class: .card. flex ставит элементы рядом.",
          )],
          code: '.row {\n  display: flex;\n  gap: 12px;\n}\n.row p {\n  background: #1c2740;\n  color: white;\n  padding: 12px;\n}',
        },
        {
          paragraphs: [t(
            "HTML-də isə belə çağırılır: <div class=\"row\"><p>Bir</p><p>İki</p></div>.",
            "In HTML you call it like this: <div class=\"row\"><p>One</p><p>Two</p></div>.",
            "HTML'de ise şöyle çağrılır: <div class=\"row\"><p>Bir</p><p>İki</p></div>.",
            "في HTML يُستدعى هكذا: <div class=\"row\"><p>واحد</p><p>اثنان</p></div>.",
            "В HTML это вызывается так: <div class=\"row\"><p>Один</p><p>Два</p></div>.",
          )],
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("CSS HTML-i əvəz edir? Xeyr. HTML quruluşdur, CSS görünüşdür.", "Does CSS replace HTML? No. HTML is the structure, CSS is the look.", "CSS HTML'in yerine geçer mi? Hayır. HTML yapı, CSS görünümdür.", "هل يحل CSS محل HTML؟ لا. HTML هو البنية وCSS هو المظهر.", "CSS заменяет HTML? Нет. HTML — структура, CSS — вид."),
            t("class nə üçündür? Eyni stili bir neçə elementə vermək üçün.", "What is a class for? To give the same style to several elements.", "class ne işe yarar? Aynı stili birkaç öğeye vermek için.", "فيم تُستخدم class؟ لإعطاء التنسيق نفسه لعدة عناصر.", "Зачем class? Чтобы дать один стиль нескольким элементам."),
            t("color hara yazılır? Seçicinin içinə: h1 { color: #2f6bff; }.", "Where does color go? Inside a selector: h1 { color: #2f6bff; }.", "color nereye yazılır? Seçicinin içine: h1 { color: #2f6bff; }.", "أين يُكتب color؟ داخل المحدد: h1 { color: #2f6bff; }.", "Куда писать color? Внутрь селектора: h1 { color: #2f6bff; }."),
            t("flex nə edir? Uşaq elementləri bir sətirə, yan-yana qoyur.", "What does flex do? It puts the child elements in one row, side by side.", "flex ne yapar? Alt öğeleri bir satıra, yan yana koyar.", "ماذا يفعل flex؟ يضع العناصر الأبناء في صف واحد جنباً إلى جنب.", "Что делает flex? Ставит дочерние элементы в один ряд, рядом."),
          ],
        },
      ],
    },
  ],
};
