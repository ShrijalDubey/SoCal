import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  const { email, password, age, heightCm, weightKg, gender, activityLevel, goal } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  // Calculate calorie goal here or later
  const calorieGoal = 2000; // placeholder

  const user = await User.create({
    email,
    password: hashedPassword,
    age,
    heightCm,
    weightKg,
    gender,
    activityLevel,
    goal,
    calorieGoal
  });

  res.json({ message: "User registered" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
});

export default router;
