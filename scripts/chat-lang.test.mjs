import test from "node:test";
import assert from "node:assert/strict";
import { resolveLang, msgs, eraseReply, LANGS } from "../api/_lang.js";
import { qrReply } from "../api/_tools.js";

test("query language wins, else UI language", () => {
  assert.equal(resolveLang("كيف أصنع QR للواي فاي", "az"), "ar");
  assert.equal(resolveLang("Как сделать QR-код", "en"), "ru");
  assert.equal(resolveLang("How do I make a QR code", "az"), "en");
  assert.equal(resolveLang("QR kod necə düzəldilir", "en"), "az");
  assert.equal(resolveLang("QR kod nedir", "tr"), "tr");
  assert.equal(resolveLang("QR nasıl yapılır", "az"), "tr");
  assert.equal(resolveLang("qr", "ru"), "ru");
  assert.equal(resolveLang("qr", ""), "az");
});
test("all message packs have the same keys", () => {
  const keys = Object.keys(msgs("az")).sort();
  for (const l of LANGS) assert.deepEqual(Object.keys(msgs(l)).sort(), keys);
});
test("qr and erase replies follow language", () => {
  assert.match(qrReply("qr", [], "ru"), /Сервис QR/);
  assert.match(qrReply("qr", [], "ar"), /خدمة QR/);
  assert.match(qrReply("wifi qr", [], "tr"), /Wi-Fi için/);
  assert.match(qrReply("QR for https://example.com", [], "en"), /^::qrimg::/);
  assert.match(eraseReply("how to remove background", "en"), /Nibras Erase removes/);
  assert.match(eraseReply("Как убрать фон", "ru"), /убирает фон/);
});
