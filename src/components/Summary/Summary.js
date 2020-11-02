import React, { useState } from "react";
import styles from "./Summary.module.css";
import BackSvg from "../BackSvg";

export default function Summary({ info, setInfo, nextStep, prevStep }) {
  const [summary, setSummary] = useState(info.summary);

  const submit = (e) => e.preventDefault();

  const back = () => prevStep();

  const next = () => {
    let isValid = true;

    for (const [key, value] of Object.entries(summary)) {
      if (!value || value.trim() === "") {
        isValid = false;
      }
    }

    if (isValid) {
      setInfo((prevState) => ({ ...prevState, summary }));
    }

    nextStep();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSummary(value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={back}>
            <BackSvg />
          </button>
          <h1 className={styles.title}>Summary</h1>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="position">
            Position
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="position"
            name="position"
            placeholder="What position are you applying to?"
            onBlur={handleChange}
            defaultValue={summary.position}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="summary">
            About yourself
          </label>
          <textarea
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="summary"
            name="summary"
            placeholder="Tell us about yourself"
            onBlur={handleChange}
            rows={5}
            defaultValue={summary.summary}
          />
        </div>
        <button className={styles.nextBtn} onClick={next}>
          Continue
        </button>
      </form>
    </div>
  );
}
