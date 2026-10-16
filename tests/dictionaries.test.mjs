// en.js is the source of truth; every other locale must carry the same keys
// and the same {placeholders}. i18n/index.js falls back to English for a
// missing key at runtime, so a gap would ship silently as English text —
// this is where it gets caught instead.
import { test } from "node:test";
import assert from "node:assert/strict";
import { LOCALE_CODES } from "../i18n/config.js";
import { QUESTION_BANK, QUIZ_LENGTH } from "../data/questions.js";
import { rankFor } from "../lib/quiz.js";

const load = async (code) =>
  (await import(`../i18n/dictionaries/${code}.js`)).default;

const flatten = (node, prefix = "") =>
  Object.entries(node).flatMap(([key, value]) =>
    value && typeof value === "object"
      ? flatten(value, `${prefix}${key}.`)
      : [[`${prefix}${key}`, value]]
  );

const placeholders = (text) =>
  [...String(text).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

const en = new Map(flatten(await load("en")));

for (const code of LOCALE_CODES.filter((c) => c !== "en")) {
  test(`${code} has every key en has, and nothing else`, async () => {
    const dict = new Map(flatten(await load(code)));
    assert.deepEqual(
      [...en.keys()].filter((k) => !dict.has(k)),
      [],
      "missing"
    );
    assert.deepEqual([...dict.keys()].filter((k) => !en.has(k)), [], "extra");
  });

  test(`${code} keeps every {placeholder} en uses`, async () => {
    const dict = new Map(flatten(await load(code)));
    for (const [key, text] of en) {
      if (!dict.has(key)) continue;
      assert.deepEqual(placeholders(dict.get(key)), placeholders(text), key);
    }
  });
}

test("en has copy for every question in the bank", async () => {
  const dict = await load("en");
  for (const q of QUESTION_BANK) {
    const copy = dict.questions[q.id];
    assert.ok(copy?.prompt && copy?.fact, `${q.id}: prompt and fact`);
    if (q.type === "versus") assert.ok(copy.optionA && copy.optionB, q.id);
    if (q.type === "mc") {
      assert.deepEqual(Object.keys(copy.options).sort(), [...q.options].sort(), q.id);
    }
    if (q.unit) assert.ok(dict.units[q.unit], `${q.id}: unit ${q.unit}`);
  }
});

test("every rank the ladder can award has copy", async () => {
  const dict = await load("en");
  for (let score = 0; score <= QUIZ_LENGTH; score++) {
    const key = rankFor(score, QUIZ_LENGTH);
    assert.ok(dict.ranks[key]?.title && dict.ranks[key]?.note, `${score} → ${key}`);
  }
});
