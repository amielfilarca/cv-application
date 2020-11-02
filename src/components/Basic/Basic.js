import React, { useState } from "react";
import styles from "./Basic.module.css";

export default function Basic({ info, setInfo, nextStep }) {
  const [basicInfo, setBasicInfo] = useState(info.basicInfo);

  const submit = (e) => e.preventDefault();

  const next = () => {
    let isValid = true;

    for (const [key, value] of Object.entries(basicInfo)) {
      if (!value || value.trim() === "") {
        if (key !== "website") {
          isValid = false;
        }
      }
    }

    if (isValid) {
      setInfo((prevState) => ({ ...prevState, basicInfo }));
    }

    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>
        <h1 className={styles.title}>Basic Information</h1>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="What is your full name?"
            defaultValue={basicInfo.name}
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="What is your email address?"
            defaultValue={basicInfo.email}
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            placeholder="What is your phone number?"
            defaultValue={basicInfo.phone}
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="location"
            name="location"
            placeholder="Where are you located?"
            defaultValue={basicInfo.location}
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="website">
            Website (optional)
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="website"
            name="website"
            placeholder="Link to your website"
            defaultValue={basicInfo.website}
            onBlur={handleChange}
          />
        </div>
        <button className={styles.nextBtn} onClick={next}>
          Continue
        </button>
      </form>
    </div>
  );
}
