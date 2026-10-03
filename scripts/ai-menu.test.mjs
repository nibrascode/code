// Nibras AI: «Söhbətlər» mətn etiketi əvəzinə hamburger (☰) düyməsi — panel açır/bağlayır, klaviatura, Escape, overlay, RTL, yerelləşdirilmiş ad.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HTML = readFileSync(join(ROOT, "public/ai/index.html"), "utf8");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function boot({ lang, dir, width } = {}) {
  let html = HTML;
  if (lang) html = html.replace('<html lang="az">', `<html lang="${lang}"${dir ? ` dir="${dir}"` : ""}>`);
  const dom = new JSDOM(html, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      w.TextEncoder = TextEncoder;
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") return out(200, { reply: "Cavab: " + JSON.parse(init.body).message });
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const w = dom.window;
  const d = w.document;
  const $ = (s) => d.querySelector(s);
  const say = async (t) => { $("#inp").value = t; $("#btn").click(); await wait(120); };
  const open = () => $("#drawer").classList.contains("on");
  const key = (k, target = d) => target.dispatchEvent(new w.KeyboardEvent("keydown", { key: k, bubbles: true }));
  return { w, d, $, say, open, key };
}

test("fayl: ai.html və ai/index.html eynidir; mətn etiketi yoxdur, hamburger düyməsi var", () => {
  assert.equal(readFileSync(join(ROOT, "public/ai.html"), "utf8"), HTML);
  assert.doesNotMatch(HTML, /<button class="home" id="menu"/);
  assert.match(HTML, /<button class="menu" id="menu" type="button"/);
});

test("düymə: ☰ ikonu (3 üfüqi xətt), mətn yox, aria-label/aria-controls/aria-expanded, fokuslana bilər", { skip }, () => {
  const p = boot();
  const b = p.$("#menu");
  assert.equal(b.tagName, "BUTTON");
  assert.equal(b.type, "button");
  assert.equal(b.textContent.trim(), "", "mətn etiketi yoxdur");
  assert.equal(b.getAttribute("aria-label"), "Söhbətlər");
  assert.equal(b.getAttribute("aria-controls"), "drawer");
  assert.equal(b.getAttribute("aria-expanded"), "false");
  assert.ok(b.tabIndex >= 0, "klaviatura ilə fokuslanır");
  const path = b.querySelector("svg path");
  assert.ok(path && (path.getAttribute("d").match(/M/g) || []).length === 3, "3 xətt");
  assert.equal(b.querySelector("svg").getAttribute("aria-hidden"), "true");
  assert.equal(p.$("#drawer").getAttribute("aria-hidden"), "true");
  assert.equal(p.open(), false, "ilkin bağlıdır");
  b.focus();
  assert.equal(p.d.activeElement, b);
  p.w.close();
});

test("açıb-bağlama: klik ilə aç/bağla; aria-expanded; fokus panelə keçir və bağlananda düyməyə qayıdır", { skip }, () => {
  const p = boot();
  p.$("#menu").click();
  assert.ok(p.open());
  assert.equal(p.$("#menu").getAttribute("aria-expanded"), "true");
  assert.equal(p.$("#drawer").getAttribute("aria-hidden"), "false");
  assert.ok(p.$("#scrim").classList.contains("on"));
  assert.equal(p.d.activeElement, p.$("#dclose"));
  p.$("#menu").click(); // yenidən klik: bağlanır
  assert.ok(!p.open());
  assert.equal(p.$("#menu").getAttribute("aria-expanded"), "false");
  assert.ok(!p.$("#scrim").classList.contains("on"));
  // bağlama düyməsi
  p.$("#menu").click();
  p.$("#dclose").click();
  assert.ok(!p.open());
  assert.equal(p.d.activeElement, p.$("#menu"));
  p.w.close();
});

test("bağlanma: Escape, overlay klik, söhbət seçimi, yeni söhbət", { skip }, async () => {
  const p = boot();
  p.$("#menu").click();
  p.key("Escape");
  assert.ok(!p.open(), "Escape");
  assert.equal(p.d.activeElement, p.$("#menu"), "Escape-dən sonra fokus düyməyə qayıdır");
  p.$("#menu").click();
  p.$("#scrim").click();
  assert.ok(!p.open(), "overlay");
  await p.say("birinci söhbət");
  p.$("#menu").click();
  p.$("#newchat").click();
  assert.ok(!p.open(), "yeni söhbət");
  await p.say("ikinci söhbət");
  p.$("#menu").click();
  const items = p.d.querySelectorAll("#dlist .dopen");
  assert.equal(items.length, 2);
  items[1].click();
  await wait(60);
  assert.ok(!p.open(), "söhbət seçiləndə panel bağlanır");
  assert.match(p.$("#msgs").textContent, /birinci söhbət/);
  p.w.close();
});

test("söhbətlərin saxlanması pozulmur: siyahı, açma, silmə hamburger panelindən işləyir", { skip }, async () => {
  const p = boot();
  await p.say("saxlanan söhbət");
  p.$("#menu").click();
  assert.match(p.$("#dlist").textContent, /saxlanan söhbət/);
  assert.ok(JSON.parse(p.w.localStorage.getItem(Object.keys(p.w.localStorage).find((k) => /chat/i.test(k)))) !== null);
  p.$("#dlist .ddel").click();
  p.$("#dlist .ddel").click();
  await wait(30);
  assert.match(p.$("#dlist").textContent, /Hələ söhbət yoxdur/);
  p.w.close();
});

test("yerelləşdirmə: aria-label az/tr/en/ru/ar", { skip }, () => {
  const want = { az: "Söhbətlər", tr: "Sohbetler", en: "Chats", ru: "Чаты", ar: "المحادثات" };
  for (const [lang, label] of Object.entries(want)) {
    const p = boot({ lang });
    assert.equal(p.$("#menu").getAttribute("aria-label"), label, lang);
    assert.equal(p.$("#menu").getAttribute("title"), label, lang);
    assert.equal(p.$("#drawer").getAttribute("aria-label"), label, lang);
    p.w.close();
  }
});

test("panel düymənin yanından (sağdan) açılır; RTL-də soldan; düymə işləyir", { skip }, () => {
  assert.match(HTML, /\.drawer \{\s*position: fixed; top: 0; right: 0;[\s\S]*?transform: translateX\(102%\)/);
  assert.match(HTML, /html\[dir="rtl"\] \.drawer \{[^}]*left: 0;[^}]*translateX\(-102%\)/);
  assert.match(HTML, /html\[dir="rtl"\] \.drawer\.on \{ transform: none; \}/);
  const p = boot({ lang: "ar", dir: "rtl" });
  assert.equal(p.d.documentElement.getAttribute("dir"), "rtl");
  p.$("#menu").click();
  assert.ok(p.open());
  p.key("Escape");
  assert.ok(!p.open());
  p.w.close();
});

test("düzülüş: ☰ düyməsi başlığın sağ kənarında (.meta-nın sonunda), brenddən sonra; 38px dairəvi, fokus halqası var", () => {
  const header = HTML.match(/<header class="top">([\s\S]*?)<\/header>/)[1];
  const lead = header.match(/<div class="lead">([\s\S]*?)<\/a>\s*<\/div>/)[1];
  assert.doesNotMatch(lead, /id="menu"/, "başlanğıcda deyil");
  const meta = header.slice(header.indexOf('<div class="meta">'));
  assert.ok(meta.includes('id="menu"'));
  assert.ok(meta.indexOf('id="prem"') < meta.indexOf('id="menu"'), "premium düyməsindən sonra, ən sonda");
  assert.equal((meta.match(/<button/g) || []).length, 2);
  assert.ok(header.indexOf('class="brand"') < header.indexOf('id="menu"'));
  assert.match(HTML, /\.menu \{[^}]*width: 38px; height: 38px;/);
  assert.match(HTML, /\.menu:focus-visible/);
  assert.match(HTML, /\.top \{[^}]*justify-content: space-between;/);
});

test("mobil: başlıq eni 320px-də düymələr sığır (flex, sıxılmır): .meta flex:none, brend ellipsis ilə kiçilir", () => {
  assert.match(HTML, /\.meta \{[^}]*display: flex;[^}]*gap: 8px;/);
  assert.match(HTML, /\.brand \{[^}]*min-width: 0;/);
  assert.match(HTML, /\.menu \{[^}]*flex: none;/);
});
