import React, { useState } from "react";
import styles from "./Education.module.css";
import BackSvg from "../BackSvg";

export default function Education({ info, setInfo, nextStep, prevStep }) {
  const [education, setEducation] = useState({});

  const submit = (e) => e.preventDefault();

  const back = () => prevStep();

  const next = () => {
    let isValid = true;

    if (Object.keys(education).length < 1) {
      isValid = false;
    }

    for (const [key, value] of Object.entries(education)) {
      if (!value || value.trim() === "") {
        isValid = false;
      }
    }

    if (isValid) {
      const oldEdu = info.education;
      oldEdu.push(education);
      setInfo((prevState) => {
        return { ...prevState, education: oldEdu };
      });
    }

    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevState) => ({ ...prevState, [name]: value }));
  };

  const add = () => {
    let isValid = true;

    if (Object.keys(education).length < 1) {
      isValid = false;
    }

    for (const [key, value] of Object.entries(education)) {
      if (!value || value.trim() === "") {
        isValid = false;
      }
    }

    if (isValid) {
      const oldEdu = info.education;
      oldEdu.push(education);
      setInfo((prevState) => {
        return { ...prevState, education: oldEdu };
      });
      reset();
    }
  };

  const reset = () => {
    document.getElementById("form").reset();
    setEducation({});
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit} id="form">
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={back}>
            <BackSvg />
          </button>
          <h1 className={styles.title}>
            {info.education.length === 0
              ? "Education"
              : `Education #${info.education.length + 1}`}
          </h1>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="course">
            Title of Study
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="course"
            name="course"
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="school">
            School name
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="school"
            name="school"
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <p className={styles.label}>Date of Study</p>
          <div className={styles.formItem}>
            <label className={styles.label} htmlFor="fromDate">
              From
            </label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              id="fromDate"
              name="fromDate"
              placeholder="MM/YYYY"
              onBlur={handleChange}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.label} htmlFor="untilDate">
              Until
            </label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              id="untilDate"
              name="untilDate"
              placeholder="MM/YYYY"
              onBlur={handleChange}
            />
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
