import test from "node:test";
import assert from "node:assert/strict";
import { resolveLang, msgs, eraseReply, LANGS } from "../api/_lang.js";
import { qrReply } from "../api/_tools.js";

test("selected UI language always wins; query detection only without lang", () => {
  assert.equal(resolveLang("كيف أصنع QR للواي فاي", "az"), "az");
  assert.equal(resolveLang("How do I make a QR code", "ru"), "ru");
  assert.equal(resolveLang("qr", "tr"), "tr");
  assert.equal(resolveLang("كيف أصنع QR للواي فاي", ""), "ar");
  assert.equal(resolveLang("Как сделать QR-код", undefined), "ru");
  assert.equal(resolveLang("How do I make a QR code", ""), "en");
  assert.equal(resolveLang("QR kod necə düzəldilir", ""), "az");
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

test("short queries: detection without lang, all 5 languages", () => {
  const cases = [["QR made", "en"], ["make QR", "en"], ["generate QR code", "en"], ["qr yarat", "az"], ["qr hazırla", "az"], ["qr oluştur", "tr"], ["karekod yap", "tr"], ["انشئ qr", "ar"], ["создать qr", "ru"], ["qr", "az"]];
  for (const [q, want] of cases) assert.equal(resolveLang(q, ""), want, q);
});
test("QR reply follows the selected language, not the query", () => {
  assert.match(qrReply("QR made", [], resolveLang("QR made", "az")), /QR xidməti açıqdır/);
  assert.match(qrReply("QR made", [], resolveLang("QR made", "")), /The QR service is open/);
});
test("erase help in az", () => {
  assert.match(eraseReply("fonu necə silim", "az"), /fonunu silir/);
});
