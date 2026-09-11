import styles from "./FactBox.module.css";

/** The payoff: shown only after an answer is revealed. */
export default function FactBox({ correct, label, children }) {
  return (
    <aside className={styles.box} data-correct={correct ? "yes" : "no"}>
      <p className={`${styles.label} t-label-sm`}>{label}</p>
      <p className={styles.text}>{children}</p>
    </aside>
  );
}
