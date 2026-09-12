// The question bank. Copy lives in the dictionaries, keyed by id — this file
// holds only the shape and the answers, so translations never fork the data.
//
// slider / timeline answers are graded with a tolerance ratio (±20% by
// default): the quiz is about the order of magnitude, not the exact number.

export const DEFAULT_TOLERANCE = 0.2;

export const QUESTION_BANK = [
  // ── size ──────────────────────────────────────────────────────────
  {
    id: "titanosaur-egg",
    type: "slider",
    theme: "size",
    unit: "cm",
    min: 5,
    max: 100,
    step: 1,
    answer: 30,
  },
  {
    id: "stego-brain",
    type: "slider",
    theme: "size",
    unit: "g",
    min: 10,
    max: 2000,
    step: 10,
    answer: 80,
  },
  {
    id: "velociraptor-weight",
    type: "slider",
    theme: "size",
    unit: "kg",
    min: 5,
    max: 300,
    step: 5,
    answer: 15,
  },
  {
    id: "trex-arm-lift",
    type: "slider",
    theme: "size",
    unit: "kg",
    min: 10,
    max: 500,
    step: 10,
    answer: 200,
  },
  {
    id: "smallest-dino",
    type: "slider",
    theme: "size",
    unit: "cm",
    min: 10,
    max: 200,
    step: 2,
    answer: 34,
  },

  // ── deep time ─────────────────────────────────────────────────────
  {
    id: "trex-timeline",
    type: "timeline",
    theme: "time",
    unit: "Ma",
    min: 0,
    max: 250,
    step: 1,
    answer: 67,
    pinned: true,
    // the track carries geological bands; only a "years ago" scale can
    eras: true,
  },
  {
    id: "dino-era-length",
    type: "slider",
    theme: "time",
    unit: "Myr",
    // upper bound pushed out so the midpoint start is not already a free point
    min: 20,
    max: 400,
    step: 5,
    answer: 165,
  },
  {
    id: "spino-trex",
    type: "bool",
    theme: "time",
    answer: false,
  },

  // ── classification ────────────────────────────────────────────────
  {
    id: "versus-cassowary",
    type: "versus",
    theme: "classification",
    answer: "A",
  },
  {
    id: "versus-ichthyosaur",
    type: "versus",
    theme: "classification",
    answer: "A",
  },
  {
    id: "versus-dunkleosteus",
    type: "versus",
    theme: "classification",
    answer: "A",
  },
  {
    id: "versus-terrorbird",
    type: "versus",
    theme: "classification",
    answer: "A",
  },
  {
    id: "versus-dimetrodon",
    type: "versus",
    theme: "classification",
    answer: "B",
  },
  {
    id: "versus-pterosaur",
    type: "versus",
    theme: "classification",
    answer: "B",
  },
  {
    id: "pterodactyl",
    type: "mc",
    theme: "classification",
    options: ["any", "genus", "synonym", "invented"],
    answer: "genus",
  },
  {
    id: "biggest",
    type: "mc",
    theme: "classification",
    options: ["argentinosaurus", "trex", "brachiosaurus", "spinosaurus"],
    answer: "argentinosaurus",
  },
  {
    id: "color",
    type: "mc",
    theme: "classification",
    options: ["nothing", "some", "allGreen", "everyone"],
    answer: "some",
  },

  // ── habitat & biology ─────────────────────────────────────────────
  {
    id: "stego-second-brain",
    type: "bool",
    theme: "biology",
    answer: false,
  },
  {
    id: "polar-dinos",
    type: "bool",
    theme: "habitat",
    answer: true,
  },
];

export const QUIZ_LENGTH = 8;

// Position trex-timeline lands on once the round is assembled (0-based).
const PINNED_SLOT = 1;

// Guaranteed shape of a round; the 8th slot is a coin flip between a
// slider and a bool, so the rhythm varies without ever going lopsided.
const TYPE_QUOTAS = { versus: 2, slider: 2, mc: 1, bool: 1 };
const FLEX_TYPES = ["slider", "bool"];

function shuffle(items, random) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function takeByType(pool, type, count, random) {
  const picked = shuffle(
    pool.filter((q) => q.type === type),
    random
  ).slice(0, count);
  return picked;
}

/**
 * Builds one round: the pinned timeline question plus a quota-balanced
 * random draw from the bank. Call it on the client at quiz start — running
 * it during render would desync server and client markup.
 */
export function pickRound(random = Math.random) {
  const pinned = QUESTION_BANK.filter((q) => q.pinned);
  let pool = QUESTION_BANK.filter((q) => !q.pinned);
  const picked = [];

  const flexType = FLEX_TYPES[Math.floor(random() * FLEX_TYPES.length)];
  const quotas = { ...TYPE_QUOTAS, [flexType]: TYPE_QUOTAS[flexType] + 1 };

  for (const [type, count] of Object.entries(quotas)) {
    const taken = takeByType(pool, type, count, random);
    picked.push(...taken);
    pool = pool.filter((q) => !taken.includes(q));
  }

  // Top up if the bank ever runs short for a type.
  const shortfall = QUIZ_LENGTH - pinned.length - picked.length;
  if (shortfall > 0) picked.push(...shuffle(pool, random).slice(0, shortfall));

  const round = shuffle(picked, random);
  round.splice(PINNED_SLOT, 0, ...pinned);
  return round.slice(0, QUIZ_LENGTH);
}
