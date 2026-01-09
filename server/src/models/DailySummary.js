import mongoose from "mongoose";

const dailySummarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  totalCalories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  calorieGoal: Number,
  status: String // under / met / over
});

export default mongoose.model("DailySummary", dailySummarySchema);
