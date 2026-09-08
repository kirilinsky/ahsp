"use client";

import { useState } from "react";
import LocaleSwitch from "./LocaleSwitch";
import styles from "./DinoQuiz.module.css";

export const COLORS = {
  ink: "#14110e",
  panel: "#1c1813",
  panelSoft: "#231e18",
  line: "#3a332b",
  bone: "#e8dfd2",
  boneDim: "#8a7f70",
  teal: "#4fb3a0",
  rust: "#c4643a",
  amber: "#d9a441",
};

const CSS_VARS = {
  "--ink": COLORS.ink,
  "--panel": COLORS.panel,
  "--panelSoft": COLORS.panelSoft,
  "--line": COLORS.line,
  "--bone": COLORS.bone,
  "--boneDim": COLORS.boneDim,
  "--teal": COLORS.teal,
  "--rust": COLORS.rust,
  "--amber": COLORS.amber,
};

export default function DinoQuiz({ dict, locale }) {
  const [stage, setStage] = useState("cover");

  return (
    <main className={styles.root} style={CSS_VARS}>
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
