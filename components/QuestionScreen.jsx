"use client";

import { useEffect } from "react";
import { isCorrect } from "@/lib/quiz";
import ChoiceQuestion, { KEY_HINTS } from "./questions/ChoiceQuestion";
import ScaleQuestion from "./questions/ScaleQuestion";
import FactBox from "./FactBox";
import styles from "./QuestionScreen.module.css";

/** Builds the option tiles for whichever pick-one type this question is. */
function optionsFor(question, copy, dict) {
  switch (question.type) {
    case "bool":
      return [
        { value: true, label: dict.ui.true },
        { value: false, label: dict.ui.myth },
      ];
    case "versus":
      return [
        { value: "A", label: copy.optionA },
        { value: "B", label: copy.optionB },
      ];
    case "mc":
      return question.options.map((key) => ({
        value: key,
        label: copy.options[key],
      }));
    default:
      return [];
  }
}

export default function QuestionScreen({
  question,
  copy,
  dict,
  value,
  revealed,
  onAnswer,
}) {
  const options = optionsFor(question, copy, dict);
  const correct = isCorrect(question, value);

  // A/B/C/D pick an option while the answer is still open
  useEffect(() => {
    if (revealed || !options.length) return undefined;

    function onKeyDown(event) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const slot = KEY_HINTS.indexOf(event.key.toUpperCase());
      if (slot < 0 || slot >= options.length) return;
      event.preventDefault();
      onAnswer(options[slot].value);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [revealed, options, onAnswer]);

  return (
    <div className={styles.body}>
      <h2 className={`${styles.prompt} t-headline-md`}>{copy.prompt}</h2>

      {copy.description ? (
        <p className={`${styles.description} t-body-sm`}>{copy.description}</p>
      ) : null}

      {options.length ? (
        <ChoiceQuestion
          options={options}
          value={value}
          answer={question.answer}
          revealed={revealed}
          onChange={onAnswer}
        />
      ) : (
        <ScaleQuestion
          question={question}
          dict={dict}
          label={copy.prompt}
          value={value}
          revealed={revealed}
          onChange={onAnswer}
        />
      )}

      {revealed ? (
        <FactBox
          correct={correct}
          label={correct ? dict.ui.correctLabel : dict.ui.wrongLabel}
        >
          {copy.fact}
        </FactBox>
      ) : null}
    </div>
  );
}
