import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,

  age: Number,
  heightCm: Number,
  weightKg: Number,
  gender: String,
  activityLevel: String,
  goal: String,

  calorieGoal: Number
});

export default mongoose.model("User", userSchema);
