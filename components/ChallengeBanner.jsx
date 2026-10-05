import { format } from "@/i18n/format";
import { rankFor } from "@/lib/quiz";
import styles from "./ChallengeBanner.module.css";

/** Shown on the cover when the visit came through someone's shared result. */
export default function ChallengeBanner({ dict, challenge }) {
  const { score, total } = challenge;
  const rank = dict.ranks[rankFor(score, total)];

  return (
    <p className={`${styles.banner} t-body-sm`}>
      {format(dict.cover.challenge, { score, total, rank: rank.title })}
    </p>
  );
}
