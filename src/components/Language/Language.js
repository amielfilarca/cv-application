import React, { useState } from "react";
import styles from "./Language.module.css";
import BackSvg from "../BackSvg";

export default function Language({ info, setInfo, nextStep, prevStep }) {
  const [language, setLanguage] = useState([]);

  const submit = (e) => e.preventDefault();
  const back = () => prevStep();
  const next = () => {
    nextStep();
  };
  const add = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLanguage((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit} id="form">
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={back}>
            <BackSvg />
          </button>
          <h1 className={styles.title}>
            {info.language.length === 0
              ? "Language"
              : `Language #${info.language.length + 1}`}
          </h1>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="language">
            Language
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="language"
            name="language"
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <p className={styles.label}>Proficiency</p>
          <div className={styles.radio}>
            <input
              className={styles.radioInput}
              type="radio"
              id="nativeProficiency"
              name="proficiency"
              value="Native or Bilingual Proficiency"
              defaultChecked
            />
            <label className={styles.radioLabel} for="nativeProficiency">
              Native or Bilingual Proficiency
            </label>
          </div>
          <div className={styles.radio}>
            <input
              className={styles.radioInput}
              type="radio"
              id="fullProficiency"
              name="proficiency"
              value="Full Professional Proficiency"
            />
            <label className={styles.radioLabel} for="fullProficiency">
              Full Professional Proficiency
            </label>
          </div>
          <div className={styles.radio}>
            <input
              className={styles.radioInput}
              type="radio"
              id="limitedProficiency"
              name="proficiency"
              value="Limited Working Proficiency"
            />
            <label className={styles.radioLabel} for="limitedProficiency">
              Limited Working Proficiency
            </label>
          </div>
        </div>
        <button className={styles.addBtn} onClick={add}>
          Add another
        </button>
        <button className={styles.nextBtn} onClick={next}>
          Continue
        </button>
      </form>
    </div>
  );
}
