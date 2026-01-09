import express from "express";
import DailySummary from "../models/DailySummary.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

/* GET DAILY HISTORY */
router.get("/", auth, async (req, res) => {
  const history = await DailySummary
    .find({ userId: req.user._id })
    .sort({ date: -1 });

  res.json(history);
});

export default router;
