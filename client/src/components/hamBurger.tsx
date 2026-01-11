import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/hamBurger.module.css";

type Props = {
  onClose: () => void;
};

export default function hamBurger({ onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/profile" onClick={onClose}>Profile</Link>
        <Link to="/calculator" onClick={onClose}>BMI & Calories</Link>
        <Link to="/history" onClick={onClose}>History</Link>
      </div>
    </div>
  );
}
