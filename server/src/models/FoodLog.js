import mongoose from "mongoose";

const foodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foodText: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  loggedAt: { type: Date, default: Date.now }
});

export default mongoose.model("FoodLog", foodLogSchema);
