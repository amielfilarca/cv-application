import React, { useState } from "react";
import BackSvg from "../BackSvg";
import styles from "./Skills.module.css";

export default function Skills({ info, setInfo, nextStep, prevStep }) {
  const [skills, setSkills] = useState(info.skills);

  const submit = (e) => e.preventDefault();

  const back = () => prevStep();

  const next = () => {
    let isValid = true;

    if (!skills || skills.trim() === "") {
      isValid = false;
    }

    if (isValid) {
      setInfo((prevState) => ({ ...prevState, skills }));
    }

    nextStep();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSkills(value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={back}>
            <BackSvg />
          </button>
          <h1 className={styles.title}>Skills</h1>
        </div>
        <p className={styles.helper}>List your skills, separated by a comma.</p>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="skills">
            Skills
          </label>
          <textarea
            className={styles.input}
            onChange={handleChange}
            type="text"
            id="skills"
            name="skills"
            placeholder={
              "(eg. SEO, Public Speaking, Negotiation, Teamwork, Decision Making, Research & Strategy, Emotional Intelligence, Outbound Marketing, Email Marketing, Google Analytics, Sales & Marketing)"
            }
            defaultValue={skills}
            rows={5}
          />
        </div>
        <button className={styles.nextBtn} onClick={next}>
          Continue
        </button>
      </form>
    </div>
  );
}
