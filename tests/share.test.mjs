import { test } from "node:test";
import assert from "node:assert/strict";
import {
  compareToChallenge,
  parseSharedResult,
  sharePath,
} from "../lib/share.js";

const query = (path) => Object.fromEntries(new URL(path, "http://x").searchParams);

test("a share link reads back as the result it was minted from", () => {
  for (const result of [
    { score: 0, total: 8 },
    { score: 6, total: 8 },
    { score: 8, total: 8 },
  ]) {
    assert.deepEqual(parseSharedResult(query(sharePath(result))), result);
  }
});

test("hand-edited or broken links are ignored, not trusted", () => {
  for (const params of [
    {},
    { score: "6" },
    { score: "", total: "8" },
    { score: "0x3", total: "8" },
    { score: "3e0", total: "8" },
    { score: " 3", total: "8" },
    { score: "-1", total: "8" },
    { score: "9", total: "8" },
    { score: "0", total: "0" },
    { score: "1", total: "51" },
    { score: "1000", total: "1000" },
  ]) {
    assert.equal(parseSharedResult(params), null, JSON.stringify(params));
  }
  assert.equal(parseSharedResult(null), null);
});

test("challenge outcome compares shares, so quiz length can change", () => {
  const cases = [
    [7, 8, 6, 8, "won"],
    [6, 8, 6, 8, "tied"],
    [5, 8, 6, 8, "lost"],
    [5, 10, 4, 8, "tied"],
    [6, 10, 5, 8, "lost"],
    [0, 8, 0, 8, "tied"],
  ];
  for (const [score, total, theirs, theirTotal, want] of cases) {
    assert.equal(
      compareToChallenge({ score, total }, { score: theirs, total: theirTotal }),
      want,
      `${score}/${total} vs ${theirs}/${theirTotal}`
    );
  }
});
