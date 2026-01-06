import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String },
    calories: { type: Number },
    quantity: { type: Number }
  },
  { _id: false }
);

const entrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    foodText: {
      type: String
    },
    totalCalories: {
      type: Number,
      required: true
    },
    items: {
      type: [itemSchema],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model("Entry", entrySchema);
