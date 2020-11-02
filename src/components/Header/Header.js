import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>CV Application</h1>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
