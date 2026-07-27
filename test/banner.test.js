const test = require("node:test");
const assert = require("node:assert/strict");
const { isGueltig } = require("../.eleventy.js");

const heute = new Date(2026, 6, 27); // 27. Juli 2026 (fixer Referenzpunkt)

test("gueltig_bis in der Zukunft -> true", () => {
  assert.equal(isGueltig("2026-08-01", heute), true);
});

test("gueltig_bis ist heute (inklusiv) -> true", () => {
  assert.equal(isGueltig("2026-07-27", heute), true);
});

test("gueltig_bis war gestern -> false", () => {
  assert.equal(isGueltig("2026-07-26", heute), false);
});

test("leerer String -> false", () => {
  assert.equal(isGueltig("", heute), false);
});

test("undefined -> false", () => {
  assert.equal(isGueltig(undefined, heute), false);
});

test("kein Datumsformat -> false", () => {
  assert.equal(isGueltig("nicht-heute", heute), false);
});

test("Monat außerhalb 1-12 -> false", () => {
  assert.equal(isGueltig("2026-13-01", heute), false);
});
