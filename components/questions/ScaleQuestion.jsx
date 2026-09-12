"use client";

import { format } from "@/i18n/format";
import { toleranceRange } from "@/lib/quiz";
import styles from "./ScaleQuestion.module.css";

// Geological bands, in millions of years ago. Only a "years ago" scale can
// carry them, so the question opts in with `eras: true`.
const ERAS = [
  { key: "cenozoic", from: 0, to: 66 },
  { key: "cretaceous", from: 66, to: 145 },
  { key: "jurassic", from: 145, to: 201 },
  { key: "triassic", from: 201, to: 252 },
];

/**
 * Fossil scale: a native range input dressed as a field measuring tool, so
 * keyboard and screen-reader behaviour comes for free.
 */
export default function ScaleQuestion({
  question,
  dict,
  label: promptLabel,
  value,
  revealed,
  onChange,
}) {
  const { min, max, step, unit } = question;
  const span = max - min;
  const pct = (n) => ((Math.min(max, Math.max(min, n)) - min) / span) * 100;
  const label = (n) => format(dict.units[unit], { value: n });

  const band = toleranceRange(question);

  return (
    <div className={styles.scale}>
      <div className={styles.trackArea}>
        {/* the value rides above the thumb in an amber field tag */}
        <output className={styles.bubble} style={{ left: `${pct(value)}%` }}>
          {label(value)}
        </output>

        <div className={styles.track} aria-hidden="true">
          {question.eras
            ? ERAS.map((era) => {
                const from = Math.max(min, era.from);
                const to = Math.min(max, era.to);
                if (to <= from) return null;
                return (
                  <span
                    key={era.key}
                    className={styles.era}
                    data-era={era.key}
                    style={{
                      left: `${pct(from)}%`,
                      width: `${pct(to) - pct(from)}%`,
                    }}
                  />
                );
              })
            : null}

          {revealed ? (
            <>
              <span
                className={styles.band}
                style={{
                  left: `${pct(band.min)}%`,
                  width: `${pct(band.max) - pct(band.min)}%`,
                }}
              />
              <span
                className={styles.truth}
                style={{ left: `${pct(question.answer)}%` }}
              />
            </>
          ) : null}
        </div>

        <input
          type="range"
          className={styles.input}
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={revealed}
          aria-label={promptLabel}
          aria-valuetext={label(value)}
          onChange={(event) => onChange(Number(event.target.value))}
        />
      </div>

      {question.eras ? (
        <ol className={styles.eraLabels} aria-hidden="true">
          {ERAS.map((era) => {
            const from = Math.max(min, era.from);
            const to = Math.min(max, era.to);
            if (to <= from) return null;
            return (
              <li
                key={era.key}
                className="t-label-sm"
                style={{
                  left: `${pct(from)}%`,
                  width: `${pct(to) - pct(from)}%`,
                }}
              >
                <span>{dict.eras[era.key]}</span>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className={styles.ends}>
          <span className="t-label-md">{label(min)}</span>
          <span className="t-label-md">{label(max)}</span>
        </div>
      )}

      {revealed ? (
        <p className={`${styles.readout} t-label-md`}>
          {dict.ui.yourAnswer}: {label(value)} · {dict.ui.correctAnswer}:{" "}
          {label(question.answer)}
        </p>
      ) : null}
    </div>
  );
}
