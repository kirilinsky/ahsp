"use client";

import PawPrint from "./PawPrint";
import styles from "./TrailProgress.module.css";

/**
 * The excavation trail: one theropod print per question, filling in left to
 * right. Prints alternate above and below the centre line and face the
 * direction of travel, so it reads as a walk rather than a row of icons.
 */
export default function TrailProgress({ total, index, label }) {
  return (
    <div
      className={styles.trail}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={index + 1}
      aria-label={label}
    >
      <ol className={styles.steps}>
        {Array.from({ length: total }, (_, i) => {
          const state = i < index ? "walked" : i === index ? "current" : "ahead";
          return (
            <li key={i} className={styles.step} data-state={state}>
              <PawPrint className={styles.print} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
