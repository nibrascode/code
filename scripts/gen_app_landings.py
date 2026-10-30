#!/usr/bin/env python3
"""Generates colorful per-language landing pages public/<dir>/[<lang>/]index.html for each app.
Content comes only from src/lib/i18n.ts + src/lib/apps.ts (dumped to JSON by scripts/dump_apps.ts)."""
import json, html, os, sys, colorsys
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(sys.argv[1]))
LANGS = ["az", "en", "tr", "ru", "ar"]
DIR = {"nibras-arabic": "nibrasarabic", "nibras-docs": "nibrasdocs", "nibras-plans": "nibrasplans", "nibras-note": "nibrasnote",
       "nibras-scan": "nibrasscan", "nibras-pdf": "nibraspdf", "nibras-qr": "nibrasqr", "nibras-office": "nibrasoffice",
       "majmu-al-fatawa": "majmualfatawa"}
PRIV = {"nibras-pdf", "nibras-note", "nibras-plans", "nibras-scan", "nibras-qr", "nibras-arabic", "nibras-docs", "nibras-office", "majmu-al-fatawa"}
UI = {
 "az": dict(app="Tətbiq səhifəsi", play="Google Play-dən yüklə", huawei="AppGallery", feat="Əsas imkanlar", about="Haqqında", shots="Ekran görüntüləri", priv="Məxfilik siyasəti", all="Bütün tətbiqlər", web="Veb versiyanı aç", note="Mağaza linki hazır olanda burada görünəcək."),
 "en": dict(app="App page", play="Get it on Google Play", huawei="AppGallery", feat="Key features", about="About", shots="Screenshots", priv="Privacy policy", all="All apps", web="Open the web version", note="The store link will appear here when it is ready."),
 "tr": dict(app="Uygulama sayfası", play="Google Play’den indir", huawei="AppGallery", feat="Öne çıkan özellikler", about="Hakkında", shots="Ekran görüntüleri", priv="Gizlilik politikası", all="Tüm uygulamalar", web="Web sürümünü aç", note="Mağaza bağlantısı hazır olduğunda burada görünecek."),
 "ru": dict(app="Страница приложения", play="Скачать в Google Play", huawei="AppGallery", feat="Возможности", about="О приложении", shots="Скриншоты", priv="Политика конфиденциальности", all="Все приложения", web="Открыть веб-версию", note="Ссылка на магазин появится здесь, когда будет готова."),
 "ar": dict(app="صفحة التطبيق", play="احصل عليه من Google Play", huawei="AppGallery", feat="أبرز الميزات", about="حول التطبيق", shots="لقطات الشاشة", priv="سياسة الخصوصية", all="كل التطبيقات", web="افتح النسخة على الويب", note="سيظهر رابط المتجر هنا عندما يكون جاهزًا."),
}
EMO = ["✨", "⚡", "🔒", "🧩", "🎯", "📚", "🖊️", "📤"]
def accent(icon):
    p = os.path.join(ROOT, "public", icon.lstrip("/"))
    im = Image.open(p).convert("RGB").resize((48, 48))
    best, score = (47, 140, 255), -1
    for c in im.getdata():
        h, s, v = colorsys.rgb_to_hsv(*[x / 255 for x in c])
        sc = s * v
        if sc > score: best, score = c, sc
    h, s, v = colorsys.rgb_to_hsv(*[x / 255 for x in best])
    a = tuple(int(x * 255) for x in colorsys.hsv_to_rgb(h, max(s, .6), max(v, .85)))
    b = tuple(int(x * 255) for x in colorsys.hsv_to_rgb((h + .12) % 1, max(s, .55), max(v, .8)))
    return "#%02x%02x%02x" % a, "#%02x%02x%02x" % b
def app_href(slug, l): return f"/apps/{slug}" if l == "az" else f"/{l}/apps/{slug}"
def land_href(d, l): return f"/{d}/" if l == "az" else f"/{d}/{l}/"
e = html.escape
for a in data["apps"]:
    slug = a["slug"]
    if slug not in DIR: continue
    d = DIR[slug]; c1, c2 = accent(a["icon"])
    for l in LANGS:
        t = a["t"][l]; u = UI[l]; rtl = l == "ar"
        langs = "".join(f'<a class="pill{" on" if x == l else ""}" href="{land_href(d, x)}" hreflang="{x}">{x.upper()}</a>' for x in LANGS)
        alt = "".join(f'<link rel="alternate" hreflang="{x}" href="https://nibrascode.com{land_href(d, x)}">' for x in LANGS)
        cta = ""
        if a["play"]: cta += f'<a class="btn main" href="{e(a["play"])}" target="_blank" rel="noopener">▶ {e(u["play"])}</a>'
        if a.get("huawei"): cta += f'<a class="btn" href="{e(a["huawei"])}" target="_blank" rel="noopener">{e(u["huawei"])}</a>'
        if slug == "nibras-qr": cta += f'<a class="btn" href="{"/qr" if l == "az" else "/" + l + "/qr"}">{e(u["web"])}</a>'
        cta += f'<a class="btn{"" if a["play"] else " main"}" href="{app_href(slug, l)}">{e(u["app"])} →</a>'
        cards = "".join(f'<div class="card"><div class="ic">{EMO[i % len(EMO)]}</div><h3>{e(f)}</h3></div>' for i, f in enumerate(t["features"]))
        shots = ""
        if a["shots"]:
            shots = f'<h2>{e(u["shots"])}</h2><div class="shots">' + "".join(f'<img loading="lazy" src="{s}" alt="">' for s in a["shots"]) + "</div>"
        priv = f' · <a href="/privacy/{slug}">{e(u["priv"])}</a>' if slug in PRIV else ""
        doc = f'''<!doctype html><html lang="{l}" dir="{"rtl" if rtl else "ltr"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(a["name"])} — {e(t["lead"])}</title><meta name="description" content="{e(t["body"][:300])}">
<link rel="canonical" href="https://nibrascode.com{land_href(d, l)}">{alt}
<link rel="icon" href="{a["icon"]}"><link rel="stylesheet" href="/nibrasnova/style.css"><link rel="stylesheet" href="/nibrasnova/landing.css">
<style>:root{{--cyan:{c1};--violet:{c2};--blue:{c1}}}</style></head>
<body class="{l}"><div class="wrap"><nav><a class="brand" href="{land_href(d, l)}"><img src="{a["icon"]}" alt="">{e(a["name"])}</a>
<div class="links"><a class="pill" href="{app_href(slug, l)}">{e(u["app"])}</a><a class="pill" href="{"/apps" if l == "az" else "/" + l + "/apps"}">{e(u["all"])}</a><a class="pill" href="https://nibrascode.com{"" if l == "az" else "/" + l}">nibrascode.com</a>{langs}</div></nav>
<header class="hero"><img src="{a["icon"]}" alt="{e(a["name"])}"><h1 dir="auto">{e(a["name"])}</h1><p class="sub lead">{e(t["lead"])}</p>
<div class="cta">{cta}</div>{"" if a["play"] else f'<p class="note">{e(u["note"])}</p>'}</header>
<h2>{e(u["feat"])}</h2><div class="grid">{cards}</div>
<h2>{e(u["about"])}</h2><div class="doc"><p>{e(t["body"])}</p></div>{shots}
<footer>© 2026 Nibras Code · <a href="{app_href(slug, l)}">{e(u["app"])}</a>{priv} · <a href="mailto:nibrascode@gmail.com">nibrascode@gmail.com</a> · <a href="https://nibrascode.com">nibrascode.com</a></footer>
</div></body></html>'''
        out = os.path.join(ROOT, "public", d, "" if l == "az" else l); os.makedirs(out, exist_ok=True)
        open(os.path.join(out, "index.html"), "w").write(doc)
    print(slug, "->", "/" + d + "/", c1, c2)
