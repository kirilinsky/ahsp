"use client";

import { useCallback, useEffect, useState } from "react";
import { pickRound, QUIZ_LENGTH } from "@/data/questions";
import { format } from "@/i18n/format";
import {
  defaultValueFor,
  isAnswered,
  nextStage,
  rankFor,
  scoreRound,
} from "@/lib/quiz";
import LocaleSwitch from "./LocaleSwitch";
import ThemeToggle from "./ThemeToggle";
import TrailProgress from "./TrailProgress";
import QuestionScreen from "./QuestionScreen";
import styles from "./DinoQuiz.module.css";

// Single source of truth for colour lives in app/tokens.css. This mirror
// exists only for inline styles (slider gradients) a CSS module cannot express.
export const TOKENS = {
  accent: "var(--accent)",
  accentWarm: "var(--accent-warm)",
  correct: "var(--status-correct)",
  wrong: "var(--status-wrong)",
  surfaceSunken: "var(--bg-surface-sunken)",
};

const EMPTY_RUN = { round: null, answers: {}, index: 0, revealed: false };

export default function DinoQuiz({ dict, locale }) {
  const [stage, setStage] = useState("cover");
  const [run, setRun] = useState(EMPTY_RUN);

  // The round is drawn on the client at start: doing it during render would
  // desync server and client markup, and a locale refresh would reshuffle it.
  const start = useCallback(() => {
    const round = pickRound();
    setRun({
      round,
      answers: Object.fromEntries(
        round.map((q) => [q.id, defaultValueFor(q)])
      ),
      index: 0,
      revealed: false,
    });
    setStage("quiz");
  }, []);

  const restart = useCallback(() => {
    setRun(EMPTY_RUN);
    setStage("cover");
  }, []);

  const answer = useCallback((id, value) => {
    setRun((prev) =>
      prev.revealed ? prev : { ...prev, answers: { ...prev.answers, [id]: value } }
    );
  }, []);

  // computed outside the updater: a state setter must stay side-effect free,
  // or StrictMode's double invocation runs the stage change twice
  const advance = useCallback(() => {
    if (!run.round) return;
    const next = nextStage({
      index: run.index,
      revealed: run.revealed,
      total: run.round.length,
    });
    if (next.done) {
      setStage("result");
      return;
    }
    setRun((prev) => ({ ...prev, index: next.index, revealed: next.revealed }));
  }, [run]);

  const { round, answers, index, revealed } = run;
  const question = round?.[index];
  const canAdvance =
    !!question && (revealed || isAnswered(question, answers[question.id]));

  // Enter carries the run forward, so a whole round is playable from the
  // keyboard. Buttons and the locale select handle Enter themselves.
  useEffect(() => {
    if (stage !== "quiz" || !canAdvance) return undefined;

    function onKeyDown(event) {
      if (event.key !== "Enter" || event.metaKey || event.ctrlKey) return;
      const tag = event.target?.tagName;
      if (tag === "BUTTON" || tag === "SELECT") return;
      event.preventDefault();
      advance();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [stage, canAdvance, advance]);
  const progressLabel = format(dict.ui.progress, {
    current: index + 1,
    total: round?.length ?? QUIZ_LENGTH,
  });

  return (
    <main className={styles.root}>
      <div className={styles.sheet}>
        <header className={styles.topbar}>
          <span className={`${styles.brand} t-label-sm`}>AHSP</span>
          <ThemeToggle label={dict.ui.theme} />
        </header>

        {stage === "cover" ? (
          <section className={`${styles.card} ${styles.cover}`}>
            <p className={`${styles.kicker} t-label-sm`}>{dict.cover.kicker}</p>
            <h1 className={`${styles.title} t-display`}>{dict.cover.title}</h1>
            <p className={`${styles.subtitle} t-body-lg`}>
              {dict.cover.subtitle}
            </p>
            <button type="button" className={styles.cta} onClick={start}>
              {dict.cover.start}
            </button>
            <p className={`${styles.meta} t-label-md`}>{dict.cover.meta}</p>
          </section>
        ) : null}

        {stage === "quiz" && question ? (
          <section className={styles.card}>
            <TrailProgress
              total={round.length}
              index={index}
              label={progressLabel}
            />
            <p className={`${styles.kicker} t-label-sm`}>{progressLabel}</p>

            <QuestionScreen
              question={question}
              copy={dict.questions[question.id]}
              dict={dict}
              value={answers[question.id]}
              revealed={revealed}
              onAnswer={(value) => answer(question.id, value)}
            />

            <button
              type="button"
              className={styles.cta}
              disabled={!canAdvance}
              onClick={advance}
            >
              {!revealed
                ? dict.ui.check
                : index + 1 >= round.length
                  ? dict.ui.seeResult
                  : dict.ui.next}
            </button>
          </section>
        ) : null}

        {stage === "result" && round ? (
          <ResultScreen dict={dict} round={round} answers={answers} onRestart={restart} />
        ) : null}

        <footer className={styles.footer}>
          {/* the package exposes no aria-label, so wrap it to name the select */}
          <label className={styles.footerField}>
            <span className={`${styles.footerNote} t-label-sm`}>
              {dict.ui.language}
            </span>
            <LocaleSwitch initialLocale={locale} />
          </label>
        </footer>
      </div>
    </main>
  );
}

function ResultScreen({ dict, round, answers, onRestart }) {
  const score = scoreRound(round, answers);
  const rank = dict.ranks[rankFor(score, round.length)];

  return (
    <section className={`${styles.card} ${styles.cover}`}>
      <p className={`${styles.kicker} t-label-sm`}>{dict.result.kicker}</p>
      <p className={`${styles.score} t-display`}>
        {format(dict.result.scoreLine, { score, total: round.length })}
      </p>
      <h2 className="t-headline-xl">{rank.title}</h2>
      <p className={`${styles.subtitle} t-body-lg`}>{rank.note}</p>
      <button type="button" className={styles.cta} onClick={onRestart}>
        {dict.result.restart}
      </button>
    </section>
  );
}
