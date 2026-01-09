const totals = await FoodLog.aggregate([
  { $match: { userId: req.user._id } },
  {
    $group: {
      _id: null,
      calories: { $sum: "$calories" },
      protein: { $sum: "$protein" },
      carbs: { $sum: "$carbs" },
      fat: { $sum: "$fat" }
    }
  }
]);
