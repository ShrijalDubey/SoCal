import React from "react";
import StyleSheet from "../styles/Profile.module.css";
import pfp from "../assets/pfp.png";

export default function Profile() {
  return (
    <div className={StyleSheet.main}>
      <div className={StyleSheet.container}>
        <img
          src={pfp}
          alt="Profile Picture"
          className={StyleSheet.profilePic}
        />
        <h2 className={StyleSheet.username}>Shrijal Dubey</h2>
      </div>

      <div className={StyleSheet.section}>
        <h3 className={StyleSheet.sectionTitle}>Personal Information</h3>

        <div className={StyleSheet.row}>
          <span>Age</span>
          <span>20</span>
        </div>

        <div className={StyleSheet.row}>
          <span>Gender</span>
          <span>Male</span>
        </div>

        <div className={StyleSheet.row}>
          <span>Height</span>
          <span>180 cm</span>
        </div>

        <div className={StyleSheet.row}>
          <span>Weight</span>
          <span>80 kg</span>
        </div>

        <div className={StyleSheet.row}>
          <span>Goal</span>
          <span>Lose Weight</span>
        </div>

        <div className={StyleSheet.row}>
          <span>Email</span>
          <span>shrijal@example.com</span>
        </div>

        <button className={StyleSheet.editButton}>
          Edit Personal Info
        </button>
      </div>

      <div className={StyleSheet.section}>
        <h3 className={StyleSheet.sectionTitle}>Calorie Target</h3>

        <div className={StyleSheet.row}>
          <span>Daily Goal</span>
          <span>2,000 cal</span>
        </div>

        <button className={StyleSheet.editButton}>
          Edit Calorie Goal
        </button>
      </div>
    </div>
  );
}
