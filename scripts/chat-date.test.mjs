import test from "node:test";
import assert from "node:assert/strict";
import { bakuNow, dateDirective, stripCutoff } from "../api/_lang.js";

test("date directive uses Asia/Baku time and forbids cutoff talk", () => {
  const d = new Date("2026-10-17T21:30:00Z"); // 01:30 next day in Baku
  assert.match(bakuNow(d), /Sunday, 18 October 2026, 01:30/);
  const t = dateDirective(d);
  assert.match(t, /2026/);
  assert.match(t, /knowledge cutoff/);
  assert.match(t, /bilik həddi/);
});
test("stripCutoff removes knowledge-cutoff sentences in 5 languages", () => {
  const cases = [
    ["Mənim biliyim 2024-ə qədərdir. Paris Fransanın paytaxtıdır.", /Paris/, /2024/],
    ["My knowledge cutoff is 2024. Paris is the capital of France.", /Paris/, /cutoff|2024/],
    ["As of my training data up to 2023, I can't say. Paris is the capital.", /Paris/, /2023/],
    ["Bilgim 2024 yılına kadar. Paris Fransa'nın başkentidir.", /Paris/, /2024/],
    ["Мои знания ограничены 2024 годом. Париж — столица Франции.", /Париж/, /2024/],
    ["معرفتي تنتهي عند عام 2024. باريس عاصمة فرنسا.", /باريس/, /2024/],
  ];
  for (const [inp, keep, gone] of cases) {
    const out = stripCutoff(inp);
    assert.match(out, keep, inp);
    assert.doesNotMatch(out, gone, inp);
  }
});
test("stripCutoff leaves normal text and years alone", () => {
  assert.equal(stripCutoff("Azərbaycan 1991-ci ildə müstəqil oldu. Oyun 2024 üçün yazılıb."), "Azərbaycan 1991-ci ildə müstəqil oldu. Oyun 2024 üçün yazılıb.");
  assert.equal(stripCutoff("Hello"), "Hello");
});
