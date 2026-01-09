import styles from "../styles/FoodLog.module.css";

const FoodLog = () => {
  const meals = [
    {
      name: "Halwa",
      quantity: 1,
      calories: 250,
      unit: "bowl",
    },
    {
      name: "Dal",
      quantity: 1,
      calories: 150,
      unit: "bowl",
    },
    {
      name: "Roti",
      quantity: 1,
      calories: 120,
      unit: "piece",
    },
    {
      name: "Halwa",
      quantity: 1,
      calories: 250,
      unit: "bowl",
    },
    {
      name: "Dal",
      quantity: 1,
      calories: 150,
      unit: "bowl",
    },
    {
      name: "Roti",
      quantity: 1,
      calories: 120,
      unit: "piece",
    },
    {
      name: "Halwa",
      quantity: 1,
      calories: 250,
      unit: "bowl",
    },
    {
      name: "Dal",
      quantity: 1,
      calories: 150,
      unit: "bowl",
    },
    {
      name: "Roti",
      quantity: 1,
      calories: 120,
      unit: "piece",
    },
    {
      name: "Halwa",
      quantity: 1,
      calories: 250,
      unit: "bowl",
    },
    {
      name: "Dal",
      quantity: 1,
      calories: 150,
      unit: "bowl",
    },
    {
      name: "Roti",
      quantity: 1,
      calories: 120,
      unit: "piece",
    },
    {
      name: "Halwa",
      quantity: 1,
      calories: 250,
      unit: "bowl",
    },
    {
      name: "Dal",
      quantity: 1,
      calories: 150,
      unit: "bowl",
    },
    {
      name: "Roti",
      quantity: 1,
      calories: 120,
      unit: "piece",
    },
    {
      name: "Halwa",
      quantity: 1,
      calories: 250,
      unit: "bowl",
    },
    {
      name: "Dal",
      quantity: 1,
      calories: 150,
      unit: "bowl",
    },
    {
      name: "Roti",
      quantity: 1,
      calories: 120,
      unit: "piece",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>TODAY'S MEALS</span>
        <span className={styles.count}>({meals.length} items)</span>
      </div>
      {meals.map((meal, index) => (
        <div key={index} className={styles.card}>
          <div>
            <div className={styles.mealName}>
              {meal.name} <span className={styles.qty}>× {meal.quantity}</span>
            </div>
            <div className={styles.subText}>
              {meal.calories} cal/{meal.unit}
            </div>
          </div>

          <div className={styles.right}>
            <span className={styles.calories}>
              {meal.calories} cal
            </span>
            <button className={styles.remove}>×</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodLog;
