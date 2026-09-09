"use client";

import { useState } from "react";
import { QUIZ_LENGTH } from "@/data/questions";
import { format } from "@/i18n/format";
import TrailProgress from "./TrailProgress";
import LocaleSwitch from "./LocaleSwitch";
import ThemeToggle from "./ThemeToggle";
import styles from "./DinoQuiz.module.css";

// Single source of truth for colour lives in app/tokens.css.
// This mirror exists only for inline styles (slider gradients, canvas fills)
// that a CSS module cannot express.
export const TOKENS = {
  canvas: "var(--bg-canvas)",
  surface: "var(--bg-surface)",
  surfaceSunken: "var(--bg-surface-sunken)",
  borderSubtle: "var(--border-subtle)",
  borderStrong: "var(--border-strong)",
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  accent: "var(--accent)",
  accentWarm: "var(--accent-warm)",
  correct: "var(--status-correct)",
  wrong: "var(--status-wrong)",
  highlight: "var(--highlight)",
};

export default function DinoQuiz({ dict, locale }) {
  const [stage, setStage] = useState("cover");
  // temporary: drives the trail preview until the question screens land
  const [index, setIndex] = useState(0);

  const progressLabel = format(dict.ui.progress, {
    current: index + 1,
    total: QUIZ_LENGTH,
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
            <p className={`${styles.subtitle} t-body-lg`}>{dict.cover.subtitle}</p>
            <button
              type="button"
              className={styles.cta}
              onClick={() => setStage("quiz")}
            >
              {dict.cover.start}
            </button>
            <p className={`${styles.meta} t-label-md`}>{dict.cover.meta}</p>
          </section>
        ) : (
          <section className={`${styles.card} ${styles.cover}`}>
            <TrailProgress
              total={QUIZ_LENGTH}
              index={index}
              label={progressLabel}
            />
            <p className={`${styles.kicker} t-label-sm`}>{progressLabel}</p>
            <div className={styles.previewNav}>
              <button
                type="button"
                className={styles.cta}
                onClick={() => setIndex((i) => Math.min(i + 1, QUIZ_LENGTH - 1))}
              >
                {dict.ui.next}
              </button>
              <button
                type="button"
                className={styles.cta}
                onClick={() => {
                  setIndex(0);
                  setStage("cover");
                }}
              >
                {dict.ui.restart}
              </button>
            </div>
          </section>
        )}
        <footer className={styles.footer}>
          {/* the package exposes no aria-label, so wrap it to name the select */}
          <label className={styles.footerField}>
            <span className={`${styles.footerNote} t-label-sm`}>{dict.ui.language}</span>
            <LocaleSwitch initialLocale={locale} />
          </label>
        </footer>
      </div>
    </main>
  );
}
