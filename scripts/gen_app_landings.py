#!/usr/bin/env python3
"""Builds SEO landing pages public/<dir>/[<lang>/]index.html for every Nibras app, and the
landing block in public/sitemap.xml. Facts come only from site sources:
src/lib/i18n.ts, src/lib/apps.ts, src/data/play-facts.json, src/lib/*-privacy.ts,
src/lib/nibras-pdf-about.ts (dumped by `npx tsx scripts/dump_apps.ts > /tmp/apps.json`)
and the Nova feature cards in scripts/landing/nova_src.html.
Usage: python3 scripts/gen_app_landings.py /tmp/apps.json"""
import json, html, os, re, sys, colorsys
from PIL import Image
from bs4 import BeautifulSoup
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "landing"))
from landing_copy import UI, WHO, CATEGORY  # noqa
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://nibrascode.com"
data = json.load(open(sys.argv[1]))
LANGS = ["az", "en", "tr", "ru", "ar"]
DIR = {"nibras-arabic": "nibrasarabic", "nibras-docs": "nibrasdocs", "nibras-plans": "nibrasplans", "nibras-note": "nibrasnote",
       "nibras-scan": "nibrasscan", "nibras-pdf": "nibraspdf", "nibras-qr": "nibrasqr", "nibras-office": "nibrasoffice",
       "majmu-al-fatawa": "majmualfatawa", "nibras-nova": "nibrasnova"}
ORDER = ["nibras-arabic", "nibras-pdf", "nibras-qr", "nibras-office", "majmu-al-fatawa", "nibras-scan", "nibras-note", "nibras-nova", "nibras-plans", "nibras-docs"]
PRIV_PAGE = {"nibras-pdf", "nibras-note", "nibras-plans", "nibras-scan", "nibras-qr", "nibras-arabic", "nibras-docs", "nibras-nova"}
# Extra facts not in play-facts.json: Nova build (versionName 1.0.2, minSdk 24 = Android 7.0, internal testing).
EXTRA = {"nibras-nova": {"version": "1.0.2", "minAndroid": "7.0", "status": "test"},
         # minSdk from each app's repo (nibrascode/pdfeditor 26, qr/scan/note/plans 24)
         "nibras-office": {"minAndroid": "8.0"}, "nibras-qr": {"minAndroid": "7.0"}, "nibras-scan": {"minAndroid": "7.0"},
         "nibras-note": {"minAndroid": "7.0"}, "nibras-plans": {"minAndroid": "7.0"}}
OFFLINE = {"nibras-office": lambda t: t["body"], "majmu-al-fatawa": lambda t: t["features"][0], "nibras-qr": lambda t: t["features"][1]}
EMO = ["✨", "⚡", "🔒", "🧩", "🎯", "📚", "🖊️", "📤", "🗂️", "🔍", "🖼️", "🛡️"]
e = html.escape
apps = {a["slug"]: a for a in data["apps"]}
facts = data["facts"]

def accent(icon):
    im = Image.open(os.path.join(ROOT, "public", icon.lstrip("/"))).convert("RGB").resize((48, 48))
    best, score = (47, 140, 255), -1
    for c in im.getdata():
        h, s, v = colorsys.rgb_to_hsv(*[x / 255 for x in c])
        if s * v > score: best, score = c, s * v
    h, s, v = colorsys.rgb_to_hsv(*[x / 255 for x in best])
    f = lambda hh, ss, vv: "#%02x%02x%02x" % tuple(int(x * 255) for x in colorsys.hsv_to_rgb(hh, ss, vv))
    return f(h, max(s, .6), max(v, .85)), f((h + .12) % 1, max(s, .55), max(v, .8))
def app_href(slug, l): return f"/apps/{slug}" if l == "az" else f"/{l}/apps/{slug}"
def land_href(slug, l): return f"/{DIR[slug]}/" if l == "az" else f"/{DIR[slug]}/{l}/"

def privacy_sections(slug, l):
    p = apps[slug]["privacy"]
    if not p: return []
    if "paragraphs" in p: p = {"az": p}  # nibras-arabic policy exists in az only
    if l not in p: return []
    out, cur = [], None
    for x in p[l]["paragraphs"]:
        if re.match(r"^\d+\.\s", x) and len(x) < 90:
            cur = [re.sub(r"^\d+\.\s*", "", x), []]; out.append(cur)
        elif cur is not None: cur[1].append(x)
    skip = re.compile(r"contact|əlaqə|iletişim|контакт|اتصال|تواصل|change|dəyiş|değişik|изменен|تغيير|children|uşaq|çocuk|дет|أطفال|controller|sorumlu|оператор|المسؤول", re.I)
    return [(h, " ".join(b)) for h, b in out if b and not skip.search(h)][:8]

def nova_groups():
    s = BeautifulSoup(open(os.path.join(ROOT, "scripts/landing/nova_src.html")), "html.parser")
    g = []
    for h in s.find_all("h2"):
        sib = h.find_next_sibling()
        tx = lambda el, l: el.find(attrs={"data-lang": l}).get_text(" ", strip=True) if el and el.find(attrs={"data-lang": l}) else ""
        if sib.name == "div" and "grid" in (sib.get("class") or []):
            cards = [{"ic": c.select_one(".ic").get_text(strip=True), "h": c.find("h3"), "p": c.find("p")} for c in sib.select(".card")]
            g.append({"title": {l: tx(h, l) for l in LANGS}, "cards": [{"ic": c["ic"], **{l: (tx(c["h"], l), tx(c["p"], l)) for l in LANGS}} for c in cards]})
        else:
            g.append({"title": {l: tx(h, l) for l in LANGS}, "para": {l: tx(sib, l) for l in LANGS}})
    return g
NOVA = nova_groups()

def features(slug, l):
    """[(group_title or None, [(icon, title, desc)])], plus intro/outro text."""
    t = apps[slug]["t"][l]
    if slug == "nibras-pdf":
        ab = data["pdfAbout"][l]
        return [(None, [(EMO[i % len(EMO)], x["t"], x["d"]) for i, x in enumerate(ab["tools"])])], ab["intro"], ab.get("outro", "")
    if slug == "nibras-nova":
        gs, extra = [], []
        for g in NOVA:
            if "cards" in g: gs.append((g["title"][l], [(c["ic"], c[l][0], c[l][1]) for c in g["cards"]]))
            else: extra.append((g["title"][l], g["para"][l]))
        return gs, None, extra
    return [(None, [(EMO[i % len(EMO)], f, "") for i, f in enumerate(t["features"])])], None, ""

def info(slug):
    f = dict(facts.get(slug, {})); f.update(EXTRA.get(slug, {}))
    play = f.get("playUrl") if f.get("listed") else None
    st = "play" if play else f.get("status", "prep")
    return f, play, st

# old /nibrasnova/?lang=xx links -> per-language page
LEGACY = '<script>(function(){var q=new URLSearchParams(location.search).get("lang");if(q&&["en","tr","ru","ar"].indexOf(q)>=0)location.replace("/nibrasnova/"+q+"/")})()</script>'
def page(slug, l, c1, c2):
    a = apps[slug]; n = a["name"]; t = a["t"][l]; u = UI[l]; f, play, st = info(slug)
    fmt = lambda k, **kw: u[k].format(n=n, **kw)
    groups, intro, outro = features(slug, l)
    feat_titles = [x[1] for g in groups for x in g[1]]
    psec = privacy_sections(slug, l)
    # FAQ (answers are restatements of the texts on this page)
    faq = [(fmt("q_what"), f"{t['lead']} {t['body']}"),
           (fmt("q_can"), "; ".join(feat_titles[:12]) + ".")]
    free = fmt("a_free") + (u["a_free_qr"].format(x=t["features"][2]) if slug == "nibras-qr" else "")
    faq.append((fmt("q_who"), WHO[slug][l]))
    faq.append((fmt("q_free"), free))
    if slug in OFFLINE: faq.append((fmt("q_off"), OFFLINE[slug](t)))
    if psec: faq.append((fmt("q_priv"), psec[0][1]))
    if f.get("minAndroid"): faq.append((fmt("q_android"), u["a_android"].format(n=n, v=f["minAndroid"])))
    faq.append((fmt("q_dl"), u["a_dl_play"].format(n=n, u=play) if play else fmt("a_dl_soon")))
    if len(psec) > 2: faq.append((psec[2][0] + " — " + n, psec[2][1]))
    faq.append((fmt("q_dev"), fmt("a_dev")))
    faq = faq[:8]
    title = f"{n} — {t['lead']}"[:70] + u["title_tail"]
    desc = (t["body"] if len(t["body"]) > 60 else f"{t['lead']} {t['body']}")
    desc = (desc[:150].rsplit(" ", 1)[0] + "…") if len(desc) > 155 else desc
    canon = SITE + land_href(slug, l); img = SITE + a["icon"]
    alt = "".join(f'<link rel="alternate" hreflang="{x}" href="{SITE + land_href(slug, x)}">' for x in LANGS) + f'<link rel="alternate" hreflang="x-default" href="{SITE + land_href(slug, "az")}">'
    sw = {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": n, "operatingSystem": "Android" + (f" {f['minAndroid']}+" if f.get("minAndroid") else ""),
          "applicationCategory": CATEGORY[slug], "description": desc, "url": canon, "image": img, "inLanguage": l,
          "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}, "author": {"@type": "Organization", "name": "Nibras Code", "url": SITE}}
    if f.get("version"): sw["softwareVersion"] = f["version"]
    if play: sw["installUrl"] = play; sw["downloadUrl"] = play; sw["sameAs"] = [play]
    if a["shots"]: sw["screenshot"] = [SITE + s for s in a["shots"]]
    fq = {"@context": "https://schema.org", "@type": "FAQPage", "inLanguage": l, "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": ans}} for q, ans in faq]}
    bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Nibras Code", "item": SITE + ("" if l == "az" else "/" + l)},
        {"@type": "ListItem", "position": 2, "name": u["all"], "item": SITE + ("/apps" if l == "az" else f"/{l}/apps")},
        {"@type": "ListItem", "position": 3, "name": n, "item": canon}]}
    ld = "".join(f'<script type="application/ld+json">{json.dumps(x, ensure_ascii=False).replace("</", "<\\/")}</script>' for x in (sw, fq, bc))
    langs = "".join(f'<a class="pill{" on" if x == l else ""}" href="{land_href(slug, x)}" hreflang="{x}" lang="{x}">{x.upper()}</a>' for x in LANGS)
    cta = f'<a class="btn main" href="{e(play)}" target="_blank" rel="noopener">▶ {e(u["play"])}</a>' if play else ""
    if slug == "nibras-qr": cta += f'<a class="btn" href="{"/qr" if l == "az" else "/" + l + "/qr"}">{e(u["web"])}</a>'
    cta += f'<a class="btn{"" if play else " main"}" href="{app_href(slug, l)}">{e(u["app"])} →</a>'
    chips = [u["free"], "Android" + (f" {f['minAndroid']}+" if f.get("minAndroid") else "")]
    if f.get("version"): chips.append("v" + f["version"])
    chips.append({"play": u["st_play"], "test": u["st_test"], "prep": u["st_prep"]}[st])
    H = []
    H.append(f'<section class="sec"><h2>{e(fmt("about"))}</h2><div class="doc lead2"><p>{e(t["body"])}</p>' + (f"<p>{e(intro)}</p>" if intro else "") + "</div></section>")
    fs = f'<section class="sec"><h2>{e(fmt("feat"))}</h2>'
    for gt, items in groups:
        if gt: fs += f'<h3 class="gh">{e(gt)}</h3>'
        hx = "h4" if gt else "h3"
        fs += '<div class="grid">' + "".join(f'<article class="card"><div class="ic" aria-hidden="true">{ic}</div><{hx}>{e(ti)}</{hx}>' + (f"<p>{e(d)}</p>" if d else "") + "</article>" for ic, ti, d in items) + "</div>"
    if isinstance(outro, list):
        for h, p in outro: fs += f'<h3 class="gh">{e(h)}</h3><div class="doc"><p>{e(p)}</p></div>'
    elif outro: fs += f'<div class="doc mt"><p>{e(outro)}</p></div>'
    H.append(fs + "</section>")
    if a["shots"]:
        H.append(f'<section class="sec"><h2>{e(u["shots"])}</h2><div class="shots">' + "".join(f'<img loading="lazy" src="{s}" alt="{e(n)} — {e(u["shots"])} {i + 1}" width="236" height="420">' for i, s in enumerate(a["shots"])) + "</div></section>")
    steps = [fmt("s_install_play") if play else fmt("s_install_soon"), u["s_open"].format(f=", ".join(feat_titles[:4]))]
    if psec: steps.append(u["s_priv"])
    H.append(f'<section class="sec two"><div class="doc"><h2>{e(u["who"])}</h2><p>{e(WHO[slug][l])}</p></div><div class="doc"><h2>{e(u["how"])}</h2><ol class="steps">' + "".join(f"<li>{e(s)}</li>" for s in steps) + "</ol></div></section>")
    rows = [(u["platform"], "Android"), (u["price"], u["free"]), (u["dev"], "Nibras Code"), (u["status"], chips[-1])]
    if f.get("minAndroid"): rows.insert(1, (u["minand"], f"Android {f['minAndroid']}+"))
    if f.get("version"): rows.insert(2, (u["ver"], f["version"]))
    if f.get("updated"): rows.append((u["upd"], f["updated"]))
    H.append(f'<section class="sec"><h2>{e(u["req"])}</h2><div class="doc"><table>' + "".join(f"<tr><th scope=\"row\">{e(k)}</th><td>{e(v)}</td></tr>" for k, v in rows) + "</table></div></section>")
    if psec:
        H.append(f'<section class="sec"><h2>{e(u["privh"])}</h2><div class="grid wide">' + "".join(f'<article class="card"><div class="ic" aria-hidden="true">🔒</div><h3>{e(h)}</h3><p>{e(p)}</p></article>' for h, p in psec) + "</div>" + (f'<p class="mt"><a class="btn" href="/privacy/{slug}">{e(u["fullpriv"])} →</a></p>' if slug in PRIV_PAGE else "") + "</section>")
    H.append(f'<section class="sec"><h2>{e(u["faq"])}</h2><div class="faq">' + "".join(f"<details{' open' if i == 0 else ''}><summary><h3>{e(q)}</h3></summary><p>{e(ans)}</p></details>" for i, (q, ans) in enumerate(faq)) + "</div></section>")
    rel = [s for s in ORDER if s != slug]
    H.append(f'<section class="sec"><h2>{e(u["rel"])}</h2><div class="grid rel">' + "".join(f'<a class="card relc" href="{land_href(s, l)}"><img src="{apps[s]["icon"]}" alt="{e(apps[s]["name"])}" width="48" height="48" loading="lazy"><span><strong>{e(apps[s]["name"])}</strong><small>{e(apps[s]["t"][l]["lead"])}</small></span></a>' for s in rel) + "</div></section>")
    return f'''<!doctype html><html lang="{l}" dir="{"rtl" if l == "ar" else "ltr"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title><meta name="description" content="{e(desc)}"><meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="{canon}">{alt}
<meta property="og:type" content="website"><meta property="og:site_name" content="Nibras Code"><meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}"><meta property="og:url" content="{canon}"><meta property="og:image" content="{img}"><meta property="og:image:alt" content="{e(n)}"><meta property="og:locale" content="{ {"az":"az_AZ","en":"en_US","tr":"tr_TR","ru":"ru_RU","ar":"ar_AR"}[l] }">
<meta name="twitter:card" content="summary"><meta name="twitter:title" content="{e(title)}"><meta name="twitter:description" content="{e(desc)}"><meta name="twitter:image" content="{img}">
<link rel="icon" href="{a["icon"]}"><link rel="stylesheet" href="/nibrasnova/style.css"><link rel="stylesheet" href="/nibrasnova/landing.css">
<style>:root{{--cyan:{c1};--violet:{c2};--blue:{c1}}}</style>{ld}{LEGACY if (slug == "nibras-nova" and l == "az") else ""}</head>
<body class="{l}"><div class="wrap"><nav aria-label="Nibras"><a class="brand" href="{land_href(slug, l)}"><img src="{a["icon"]}" alt="{e(n)}" width="44" height="44">{e(n)}</a>
<div class="links"><a class="pill" href="{app_href(slug, l)}">{e(u["app"])}</a><a class="pill" href="{"/apps" if l == "az" else "/" + l + "/apps"}">{e(u["all"])}</a><a class="pill" href="{SITE}{"" if l == "az" else "/" + l}">nibrascode.com</a>{langs}</div></nav>
<main><header class="hero"><img src="{a["icon"]}" alt="{e(n)}" width="120" height="120"><h1>{e(n)}</h1><p class="sub lead">{e(t["lead"])}</p>
<ul class="chips">{"".join(f"<li>{e(c)}</li>" for c in chips)}</ul><div class="cta">{cta}</div></header>
{"".join(H)}</main>
<footer>© 2026 Nibras Code · <a href="{app_href(slug, l)}">{e(n)}</a>{f' · <a href="/privacy/{slug}">{e(u["priv"])}</a>' if slug in PRIV_PAGE else ""} · <a href="mailto:nibrascode@gmail.com">nibrascode@gmail.com</a> · <a href="{SITE}">nibrascode.com</a></footer>
</div></body></html>'''

sm = []
for slug in ORDER:
    c1, c2 = accent(apps[slug]["icon"]) if slug != "nibras-nova" else ("#38d6ff", "#9b5cff")
    for l in LANGS:
        out = os.path.join(ROOT, "public", DIR[slug], "" if l == "az" else l); os.makedirs(out, exist_ok=True)
        open(os.path.join(out, "index.html"), "w").write(page(slug, l, c1, c2))
        links = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{x}" href="{SITE + land_href(slug, x)}"/>' for x in LANGS)
        links += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE + land_href(slug, "az")}"/>'
        sm.append(f"  <url>\n    <loc>{SITE + land_href(slug, l)}</loc>\n    <lastmod>2026-10-31</lastmod>{links}\n  </url>")
    if slug == "nibras-nova":  # old az alias dir from the first version -> canonical az page
        os.makedirs(os.path.join(ROOT, "public/nibrasnova/az"), exist_ok=True)
        open(os.path.join(ROOT, "public/nibrasnova/az/index.html"), "w").write(page(slug, "az", c1, c2))
    print(slug, "->", land_href(slug, "az"))
p = os.path.join(ROOT, "public/sitemap.xml"); s = open(p).read()
s = re.sub(r"\n?  <!-- landings:start -->.*?<!-- landings:end -->", "", s, flags=re.S)
s = s.replace("</urlset>", "  <!-- landings:start -->\n" + "\n".join(sm) + "\n  <!-- landings:end -->\n</urlset>")
open(p, "w").write(s)
