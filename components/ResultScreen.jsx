import { format } from "@/i18n/format";
import { rankFor, scoreRound } from "@/lib/quiz";
import { compareToChallenge, sharePath } from "@/lib/share";
import ShareBox from "./ShareBox";
import styles from "./ResultScreen.module.css";

/** The verdict: how the round scored, and the rank that score earns. */
export default function ResultScreen({ dict, round, answers, challenge }) {
  const score = scoreRound(round, answers);
  const total = round.length;
  const rank = dict.ranks[rankFor(score, total)];

  return (
    <div className={styles.body}>
      <p className={`${styles.score} t-display`}>
        {format(dict.result.scoreLine, { score, total })}
      </p>
      {challenge ? (
        <p className={`${styles.versus} t-body-sm`}>
          {format(dict.result.versus[compareToChallenge({ score, total }, challenge)], {
            mine: score,
            theirs: challenge.score,
          })}
        </p>
      ) : null}
      <h2 className="t-headline-xl">{rank.title}</h2>
      <p className={`${styles.note} t-body-lg`}>{rank.note}</p>

      <ShareBox
        copy={dict.result.share}
        path={sharePath({ score, total })}
        text={format(dict.result.share.text, { score, total, rank: rank.title })}
      />
    </div>
  );
}
