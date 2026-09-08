"use client";

import { useState } from "react";
import LocaleSwitch from "./LocaleSwitch";
import styles from "./DinoQuiz.module.css";

// Single source of truth for color lives in app/tokens.css.
// This mirror exists only for inline styles (gradients, canvas fills)
// that cannot be expressed in a CSS module.
export const TOKENS = {
  canvas: "var(--bg-canvas)",
  surface: "var(--bg-surface)",
  surfaceRaised: "var(--bg-surface-raised)",
  borderSubtle: "var(--border-subtle)",
  borderStrong: "var(--border-strong)",
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textMuted: "var(--text-muted)",
  accent: "var(--accent)",
  correct: "var(--status-correct)",
  wrong: "var(--status-wrong)",
};

export default function DinoQuiz({ dict, locale }) {
  const [stage, setStage] = useState("cover");

  return (
    <main className={styles.root}>
      <div className={styles.sheet}>
        <header className={styles.topbar}>
          <span className={styles.brand}>AHSP</span>
          <LocaleSwitch initialLocale={locale} />
        </header>

        {stage === "cover" ? (
          <section className={styles.cover}>
            <p className={styles.kicker}>{dict.cover.kicker}</p>
            <h1 className={styles.title}>{dict.cover.title}</h1>
            <p className={styles.subtitle}>{dict.cover.subtitle}</p>
            <button
              type="button"
              className={styles.cta}
              onClick={() => setStage("quiz")}
            >
              {dict.cover.start}
            </button>
            <p className={styles.meta}>{dict.cover.meta}</p>
          </section>
        ) : (
          <section className={styles.cover}>
            <p className={styles.kicker}>{dict.ui.question} — TODO</p>
            <button
              type="button"
              className={styles.cta}
              onClick={() => setStage("cover")}
            >
              {dict.ui.restart}
            </button>
          </section>
        )}
      </div>
    </main>
  );
}
