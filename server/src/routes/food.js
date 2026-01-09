router.post("/log", auth, async (req, res) => {
  const { foodText, calories, protein, carbs, fat } = req.body;

  await FoodLog.create({
    userId: req.user.id,
    foodText,
    calories,
    protein,
    carbs,
    fat
  });

  res.json({ message: "Logged" });
});
