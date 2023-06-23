import mongoose from "mongoose";
// Define the schema for the quote model
export const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  emotion: {
    type: String,
    required: true,
  },
});

// Create the Quote model
export default mongoose.model.quotes ||
  mongoose.model("Quote", quoteSchema, "quotes");
