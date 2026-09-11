"use client";

import styles from "./ChoiceQuestion.module.css";

const KEY_HINTS = ["A", "B", "C", "D"];

/**
 * One control for every pick-one question type. `bool`, `versus` and `mc`
 * differ only in how their options are built, so they share these tiles.
 */
export default function ChoiceQuestion({
  options,
  value,
  answer,
  revealed,
  onChange,
}) {
  return (
    <div
      className={styles.options}
      data-count={options.length}
      role="radiogroup"
    >
      {options.map((option, i) => {
        const selected = value === option.value;
        const correct = option.value === answer;
        const state = !revealed
          ? selected
            ? "selected"
            : "idle"
          : correct
            ? "correct"
            : selected
              ? "wrong"
              : "muted";

        return (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={revealed}
            data-state={state}
            className={styles.tile}
            onClick={() => onChange(option.value)}
          >
            <span className={styles.token} aria-hidden="true" />
            <span className={styles.label}>{option.label}</span>
            {KEY_HINTS[i] ? (
              <span className={styles.hint} aria-hidden="true">
                {KEY_HINTS[i]}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export { KEY_HINTS };
