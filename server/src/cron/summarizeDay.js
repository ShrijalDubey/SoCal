import FoodLog from "../models/FoodLog.js";
import DailySummary from "../models/DailySummary.js";
import User from "../models/User.js";

export default async function summarizeDay() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const logs = await FoodLog.aggregate([
    {
      $match: {
        loggedAt: {
          $gte: new Date(yesterday.setHours(0,0,0)),
          $lte: new Date(yesterday.setHours(23,59,59))
        }
      }
    },
    {
      $group: {
        _id: "$userId",
        calories: { $sum: "$calories" },
        protein: { $sum: "$protein" },
        carbs: { $sum: "$carbs" },
        fat: { $sum: "$fat" }
      }
    }
  ]);

  for (const log of logs) {
    const user = await User.findById(log._id);

    const status =
      log.calories < user.calorieGoal - 50
        ? "under"
        : log.calories > user.calorieGoal + 50
        ? "over"
        : "met";

    await DailySummary.create({
      userId: user._id,
      date: yesterday,
      totalCalories: log.calories,
      protein: log.protein,
      carbs: log.carbs,
      fat: log.fat,
      calorieGoal: user.calorieGoal,
      status
    });
  }

  // DELETE OLD LOGS
  await FoodLog.deleteMany({
    loggedAt: { $lt: new Date().setHours(0,0,0) }
  });
}
