import { DEFAULT_TOLERANCE, QUIZ_LENGTH } from "../data/questions.js";

const NUMERIC_TYPES = new Set(["slider", "timeline"]);

/** Where a numeric question's slider starts: the middle of its range. */
export function defaultValueFor(question) {
  if (!NUMERIC_TYPES.has(question.type)) return null;
  const step = question.step || 1;
  const mid = (question.min + question.max) / 2;
  return Math.round(mid / step) * step;
}

/** The band a numeric answer counts as correct in (±20% of the truth). */
export function toleranceRange(question) {
  const ratio = question.tolerance ?? DEFAULT_TOLERANCE;
  const slack = Math.abs(question.answer) * ratio;
  return {
    min: Math.max(question.min, question.answer - slack),
    max: Math.min(question.max, question.answer + slack),
  };
}

/**
 * A question counts as answered once a value is committed. Numeric questions
 * always hold one (the slider starts mid-range), so the UI tracks a separate
 * touched flag for them.
 */
export function isAnswered(question, value) {
  return value !== null && value !== undefined;
}

export function isCorrect(question, value) {
  if (value === null || value === undefined) return false;

  switch (question.type) {
    case "versus":
      return value === question.answer;
    case "bool":
      return value === question.answer;
    case "mc":
      return value === question.answer;
    case "slider":
    case "timeline": {
      const { min, max } = toleranceRange(question);
      return value >= min && value <= max;
    }
    default:
      return false;
  }
}

/** How far off a numeric guess was, as a share of the true answer. */
export function relativeError(question, value) {
  if (!NUMERIC_TYPES.has(question.type) || value === null) return null;
  if (question.answer === 0) return null;
  return Math.abs(value - question.answer) / Math.abs(question.answer);
}

export function scoreRound(round, answers) {
  return round.reduce(
    (score, question) => score + (isCorrect(question, answers[question.id]) ? 1 : 0),
    0
  );
}

// Ranks are keyed by the share of the round answered correctly, so changing
// QUIZ_LENGTH never silently breaks the ladder.
const RANKS = [
  { key: "filmSchool", minShare: 0 },
  { key: "giftShop", minShare: 0.35 },
  { key: "fieldAssistant", minShare: 0.6 },
  { key: "curator", minShare: 0.85 },
  { key: "palaeontologist", minShare: 1 },
];

export function rankFor(score, total = QUIZ_LENGTH) {
  if (!total) return RANKS[0].key;
  const share = score / total;
  let rank = RANKS[0];
  for (const candidate of RANKS) {
    if (share >= candidate.minShare) rank = candidate;
  }
  return rank.key;
}

/** Advance the run: reveal the answer first, then move on. */
export function nextStage({ index, revealed, total }) {
  if (!revealed) return { index, revealed: true, done: false };
  if (index + 1 >= total) return { index, revealed: true, done: true };
  return { index: index + 1, revealed: false, done: false };
}
