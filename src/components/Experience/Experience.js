import React, { useState } from "react";
import styles from "./Experience.module.css";
import BackSvg from "../BackSvg";

export default function Experience({ info, setInfo, nextStep, prevStep }) {
  const [experience, setExperience] = useState({});

  const [savedTasks, setSavedTasks] = useState([]);

  const submit = (e) => e.preventDefault();

  const back = () => prevStep();

  const next = () => {
    let isValid = true;

    if (Object.keys(experience).length < 1) {
      isValid = false;
    }

    for (const [key, value] of Object.entries(experience)) {
      if (!value || value.trim() === "") {
        isValid = false;
      }
    }

    if (isValid) {
      const oldExp = info.experience;
      const currExperience = experience;
      if (savedTasks.length < 1) {
        currExperience.task = [experience.task];
      } else {
        currExperience.task = [...savedTasks, currExperience.task];
      }
      oldExp.push(currExperience);
      setInfo((prevState) => {
        return { ...prevState, experience: oldExp };
      });
    }

    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({ ...prevState, [name]: value }));
  };

  const add = () => {
    let isValid = true;

    if (Object.keys(experience).length < 1) {
      isValid = false;
    }

    for (const [key, value] of Object.entries(experience)) {
      if (!value || value.trim() === "") {
        isValid = false;
      }
    }

    if (isValid) {
      const oldExp = info.experience;
      const currExperience = experience;
      if (savedTasks.length < 1) {
        currExperience.task = [experience.task];
      } else {
        currExperience.task = [...savedTasks, currExperience.task];
      }
      oldExp.push(currExperience);
      setInfo((prevState) => {
        return { ...prevState, experience: oldExp };
      });
      reset();
    }
  };

  const reset = () => {
    document.getElementById("form").reset();
    setSavedTasks([]);
    setExperience({});
  };

  const addTask = () => {
    let isValid = true;

    if (!experience.task || experience.task.trim() === "") {
      isValid = false;
    }

    if (isValid) {
      setSavedTasks((prevState) => [...prevState, experience.task]);
      setExperience((prevState) => ({ ...prevState, task: "" }));
      document.getElementById("task").value = "";
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit} id="form">
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={back}>
            <BackSvg />
          </button>
          <h1 className={styles.title}>
            {info.experience.length === 0
              ? "Experience"
              : `Experience #${info.experience.length + 1}`}
          </h1>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="company">
            Company name
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="company"
            name="company"
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="position">
            Position title
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="position"
            name="position"
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="task">
            Task
          </label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            id="task"
            name="task"
            onBlur={handleChange}
          />
          <button className={styles.addTaskBtn} onClick={addTask}>
            Add another task
          </button>
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
            onBlur={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <p className={styles.label}>Date</p>
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
