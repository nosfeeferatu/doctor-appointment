import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, maxLength: 150 },
});

export default mongoose.model("Services", ServicesSchema);
