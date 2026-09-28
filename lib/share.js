// A shared result travels as plain query params. Only score and total go in:
// the rank is derived, so a hand-edited link can never pair a score with the
// wrong rank. Forging the score itself is harmless — it only brags.

const MAX_TOTAL = 50;

export function sharePath({ score, total }) {
  return `/?${new URLSearchParams({ score, total })}`;
}

// Number() alone is too forgiving: "" → 0, "0x3" → 3, "3e0" → 3.
function toCount(raw) {
  return typeof raw === "string" && /^\d{1,3}$/.test(raw) ? Number(raw) : null;
}

/** Reads a shared result back out of searchParams; null if absent or bogus. */
export function parseSharedResult(params) {
  const score = toCount(params?.score);
  const total = toCount(params?.total);

  if (score === null || total === null) return null;
  if (total < 1 || total > MAX_TOTAL) return null;
  if (score < 0 || score > total) return null;

  return { score, total };
}
