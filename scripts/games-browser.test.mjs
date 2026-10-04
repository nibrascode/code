// content/games/*.html oyunlarını həqiqi (headless) Chrome-da açıb JS xətası olmadığını və əsas oyun axınının işlədiyini yoxlayır.
// Chrome yoxdursa (CHROME_BIN / google-chrome / chromium) testlər keçilir.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "content/games");
const chrome = [process.env.CHROME_BIN, "google-chrome", "google-chrome-stable", "chromium", "chromium-browser"].filter(Boolean)
  .find((b) => spawnSync(b, ["--version"], { encoding: "utf8" }).status === 0);

// headless Chrome virtual vaxtda rAF-i irəli aparmır: testdə rAF 16ms-lik setTimeout ilə əvəz olunur (oyun kodu toxunulmaz)
const HOOK = `<script>window.requestAnimationFrame=function(cb){return setTimeout(function(){cb(performance.now())},16)};addEventListener('error',function(e){console.error('JSERR '+e.message+' @'+e.lineno)});addEventListener('unhandledrejection',function(e){console.error('JSERR promise '+e.reason)});</script>`;
const HELP = `
const K = (k) => dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }));
const KU = (k) => dispatchEvent(new KeyboardEvent('keyup', { key: k, bubbles: true }));
const PE = (el, type, x = 0, y = 0, pt = 'touch') => el.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y, pointerType: pt }));
const OUT = (o) => console.log('RESULT ' + JSON.stringify(o));
`;

// ad -> { ms: virtual vaxt, run: səhifədə işləyən kod, ok: nəticə yoxlaması }
const SCEN = {
  ilan: {
    ms: 12000,
    run: `
setTimeout(() => { food = { x: snake[0].x + 1, y: snake[0].y }; }, 50);
setTimeout(() => { K('ArrowDown'); }, 600);
setTimeout(() => { window.R1 = { score, len: snake.length, y: snake[0].y }; }, 900);
document.querySelector('.pad [data-d=l]').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
setTimeout(() => OUT({ ...window.R1, over }), 5000);
setTimeout(() => { document.getElementById('re').click(); OUT({ after: over, len: snake.length, score }); }, 5500);
`,
    ok: (r) => r[0].score >= 1 && r[0].len >= 4 && r[0].y > 10 && r[0].over === true && r[1].after === false && r[1].score === 0,
  },
  xox: {
    ms: 20000,
    run: `
const cs = [...document.querySelectorAll('.cell')];
let n = 0;
const t = setInterval(() => {
  if (over) { clearInterval(t); OUT({ over, msg: document.getElementById('msg').textContent, hard: level, xwins: wins.X }); document.getElementById('re').click(); setTimeout(() => OUT({ again: b.filter(Boolean).length }), 800); return; }
  const f = cs.find((c) => !c.textContent); if (f && !busy) f.click(); n++;
}, 450);
`,
    ok: (r) => r[0].over === true && r[0].msg.length > 3 && r[0].xwins === 0 && r[1].again <= 1,
  },
  "yaddas-kartlari": {
    ms: 20000,
    run: `
const cards = [...document.querySelectorAll('.card')], by = {};
cards.forEach((c) => (by[c.dataset.v] ||= []).push(c));
let i = 0; const vals = Object.values(by);
const t = setInterval(() => { if (i >= vals.length) { clearInterval(t); OUT({ found, moves, msg: document.getElementById('msg').textContent }); return; } vals[i][0].click(); vals[i][1].click(); i++; }, 300);
`,
    ok: (r) => r[0].found === 8 && r[0].moves === 8 && /Əla/.test(r[0].msg),
  },
  "qus-ucusu": {
    ms: 30000,
    run: `
PE(document.getElementById('c'), 'pointerdown');
const t = setInterval(() => { if (state === 'play' && bird.y > 270 && bird.v > 0) K(' '); }, 16);
setTimeout(() => OUT({ state, pipes: pipes.length, frame }), 6000);
setTimeout(() => { clearInterval(t); OUT({ state, score }); }, 25000);
`,
    ok: (r) => ['play', 'dead'].includes(r[0].state) && r[0].frame > 100 && ['play', 'dead'].includes(r[1].state),
  },
  "pinq-ponq": {
    ms: 30000,
    run: `
PE(document.getElementById('c'), 'pointerdown', 10, 10);
let hits = 0, lv = 0;
setInterval(() => { me.y = ball.y - PH / 2; if (ball.vx * lv < 0) hits++; lv = ball.vx; }, 16);
setTimeout(() => OUT({ state, hits, sa, sb, bx: Number.isFinite(ball.x) }), 20000);
`,
    ok: (r) => ['play', 'ready', 'over'].includes(r[0].state) && r[0].hits >= 2 && r[0].bx,
  },
  "kerpic-qirma": {
    ms: 40000,
    run: `
K(' ');
setInterval(() => { pad.x = ball.x - pad.w / 2; if (state === 'ready') K(' '); }, 16);
setTimeout(() => OUT({ score, lives, level, state }), 30000);
`,
    ok: (r) => r[0].score >= 30 && r[0].state !== 'over',
  },
  2048: {
    ms: 15000,
    run: `
const ks = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
let n = 0; const t = setInterval(() => { K(ks[Math.random() * 4 | 0]); if (++n > 500) { clearInterval(t);
  const vals = g.flat(); OUT({ score, over, pow: vals.every((v) => v === 0 || (v & (v - 1)) === 0), sum: vals.reduce((a, b) => a + b, 0), shown: document.querySelectorAll('.t').length }); } }, 10);
`,
    ok: (r) => r[0].pow && r[0].sum > 0 && r[0].shown === 16 && (r[0].score > 0 || r[0].over),
  },
  "mina-axtaran": {
    ms: 8000,
    run: `
reveal(40);
const t1 = { opened, started };
toggle(0); const f1 = flags;
toggle(0);
cells.forEach((c, i) => { if (!c.mine) reveal(i); });
OUT({ t1, f1, msg: document.getElementById('msg').textContent, over });
document.getElementById('re').click();
reveal(0); const m = cells.findIndex((c) => c.mine); reveal(m);
OUT({ lose: document.getElementById('msg').textContent, bombs: document.body.textContent.includes('💣') });
`,
    ok: (r) => r[0].t1.opened >= 1 && r[0].t1.started && r[0].f1 === 1 && /Təbrik/.test(r[0].msg) && r[0].over && /partladı/.test(r[1].lose),
  },
  "kostebek-vur": {
    ms: 45000,
    run: `
document.getElementById('go').click();
setInterval(() => { document.querySelectorAll('.hole.up').forEach((h) => { if (h.state === 'mole') PE(h, 'pointerdown'); }); }, 60);
setTimeout(() => OUT({ score, running, left }), 20000);
setTimeout(() => OUT({ score, running, msg: document.getElementById('msg').textContent }), 36000);
`,
    ok: (r) => r[0].running && r[0].score >= 3 && r[1].running === false && /Vaxt bitdi/.test(r[1].msg),
  },
  "sonsuz-qacis": {
    ms: 30000,
    run: `
K(' ');
setInterval(() => { if (state === 'play' && p.on && obs.some((o) => o.x - (p.x + p.w) < 70 + speed * 4 && o.x > p.x - 10)) K(' '); }, 16);
setTimeout(() => OUT({ state, score: Math.floor(score), obs: obs.length }), 20000);
`,
    ok: (r) => r[0].state === 'play' && r[0].score > 5,
  },
};

function runPage(html, ms) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "game-"));
  const file = path.join(tmp, "t.html");
  fs.writeFileSync(file, html);
  const r = spawnSync(chrome, ["--headless=new", "--no-sandbox", "--disable-gpu", `--user-data-dir=${tmp}/p`, "--enable-logging=stderr", "--v=0",
    `--virtual-time-budget=${ms}`, "--window-size=420,800", "--dump-dom", "file://" + file], { encoding: "utf8", timeout: 120000 });
  fs.rmSync(tmp, { recursive: true, force: true });
  const lines = (r.stderr || "").split("\n").filter((l) => l.includes(":CONSOLE"));
  return lines.map((l) => ({ level: /:(INFO|WARNING|ERROR):CONSOLE/.exec(l)?.[1], text: l.replace(/^.*?:CONSOLE[^\]]*\]\s*/, "") }));
}

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".html")).sort();

test("hər oyun üçün brauzer ssenarisi var", () => {
  assert.deepEqual(files.map((f) => f.slice(0, -5)).sort(), Object.keys(SCEN).sort());
});

for (const f of files) {
  const slug = f.slice(0, -5);
  test(`brauzer: ${slug} xətasız açılır və işləyir`, { skip: !chrome && "Chrome tapılmadı", timeout: 150000 }, () => {
    const src = fs.readFileSync(path.join(DIR, f), "utf8");
    assert.match(src, /<meta name="viewport"/);
    assert.ok(!/yarat/i.test(src), "yarat sözü olmamalıdır");
    assert.ok(!src.includes("```"));
    const sc = SCEN[slug];
    const html = src.replace("<head>", "<head>" + HOOK).replace("</body>", `<script>${HELP}\n${sc.run}</script></body>`);
    const logs = runPage(html, sc.ms);
    const errs = logs.filter((l) => l.level === "ERROR" || /JSERR|Uncaught/.test(l.text));
    assert.deepEqual(errs, [], "JS xətaları: " + JSON.stringify(errs));
    const res = logs.map((l) => /^"RESULT (.*)", source: /.exec(l.text)).filter(Boolean).map((m) => JSON.parse(m[1]));
    assert.ok(res.length >= 1, "nəticə yoxdur: " + JSON.stringify(logs));
    assert.ok(sc.ok(res), "ssenari uğursuz: " + JSON.stringify(res));
  });
}
