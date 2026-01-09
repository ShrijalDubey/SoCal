import styles from "../styles/CaloriesChart.module.css";

const CaloriesCard = () => {
  const consumed = 1200;
  const goal = 2000;

  const remaining = goal - consumed;
  const progressPercent = Math.min((consumed / goal) * 100, 100);

  return (
    <div className={styles.main}>
    <div className={styles.card}>
      <div className={styles.center}>
        <h1 className={styles.calories}>
          {consumed} <span className={styles.unit}>cal</span>
        </h1>
        <p className={styles.subtitle}>consumed today</p>
      </div>

      <div className={styles.progressBg}>
        <div
          className={styles.progressFill}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className={styles.footer}>
        <span className={styles.goal}>
          Goal: {goal.toLocaleString()} cal
        </span>
        <span className={styles.remaining}>
          {remaining} remaining
        </span>
      </div>
    </div>
    </div>
  );
};

export default CaloriesCard;
