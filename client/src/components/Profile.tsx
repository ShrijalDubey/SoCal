import React from "react";
import styles from "../styles/Profile.module.css";
import { FaUser, FaBalanceScale, FaRulerVertical, FaBullseye } from "react-icons/fa";
import pfp from "../assets/pfp.png";

export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={pfp}
          alt="Profile Picture"
          className={styles.profilePic}
        />
        <h2 className={styles.username}>Shrijal Dubey</h2>
      </div>
      <div className={styles.card}>
        <div className={styles.labelRow}>
          <span className={styles.icon}><FaUser /></span>
          <span className={styles.label}>Name</span>
        </div>
        <input
          className={styles.input}
          placeholder="Enter your name"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.card}>
          <span className={styles.labelRow}>Age</span>
          <input className={styles.input} type="number" />
        </div>

        <div className={styles.card}>
          <div className={styles.labelRow}>
            <FaBalanceScale />
            <span className={styles.label}>Weight (kg)</span>
          </div>
          <input className={styles.input} type="number" />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.labelRow}>
          <FaRulerVertical />
          <span className={styles.label}>Height (cm)</span>
        </div>
        <input className={styles.input} type="number" />
      </div>

      <div className={styles.card}>
        <div className={styles.labelRow}>
          <span className={styles.goalIcon}><FaBullseye /></span>
          <span className={styles.label}>Daily Calorie Goal</span>
        </div>
        <input className={styles.input} value="2000" />
      </div>

      <div className={styles.card}>
        <span className={styles.sectionTitle}>Activity Level</span>

        <div className={styles.activityGrid}>
          <button className={styles.activityBtn}>Sedentary</button>
          <button className={styles.activityBtn}>Light</button>
          <button className={`${styles.activityBtn} ${styles.active}`}>
            Moderate
          </button>
          <button className={styles.activityBtn}>Active</button>
          <button className={styles.activityBtn}>Very Active</button>
        </div>
      </div>

      <button className={styles.saveBtn}>
        Save Profile
      </button>
    </div>
  );
}
