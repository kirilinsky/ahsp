import { format } from "@/i18n/format";
import { rankFor, scoreRound } from "@/lib/quiz";
import styles from "./ResultScreen.module.css";

/** The verdict: how the round scored, and the rank that score earns. */
export default function ResultScreen({ dict, round, answers }) {
  const score = scoreRound(round, answers);
  const rank = dict.ranks[rankFor(score, round.length)];

  return (
    <div className={styles.body}>
      <p className={`${styles.score} t-display`}>
        {format(dict.result.scoreLine, { score, total: round.length })}
      </p>
      <h2 className="t-headline-xl">{rank.title}</h2>
      <p className={`${styles.note} t-body-lg`}>{rank.note}</p>
    </div>
  );
}
