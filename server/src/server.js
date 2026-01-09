import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cron from "node-cron";
import summarizeDay from "./cron/summarizeDay.js";
import authRoutes from "./routes/auth.routes.js";
import foodRoutes from "./routes/food.routes.js";
import historyRoutes from "./routes/history.routes.js";




const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/history", historyRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

// Run summary every day at 00:05
cron.schedule("5 0 * * *", summarizeDay);

app.listen(5000, () => console.log("Server running"));
