import test from "node:test";
import assert from "node:assert/strict";
import { NEEDLE, REPLACEMENT, patchSource } from "./patch-imgly-threads.mjs";

test("imgly thread patch forces one thread when not isolated", () => {
  const next = patchSource(`before\n${NEEDLE}\nafter`);
  assert.equal(next.includes(NEEDLE), false);
  assert.equal(next.includes(REPLACEMENT), true);
  assert.equal(patchSource(next), next);
});

test("imgly thread patch leaves unrelated source alone", () => {
  assert.equal(patchSource("no match"), "no match");
});
