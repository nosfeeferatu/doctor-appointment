import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  content: { type: String, required: true, maxLength: 250 },
});

export default mongoose.model("Faq", FaqSchema);
