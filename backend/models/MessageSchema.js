import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true, maxLength: 150 },
  message: { type: String, required: true },
});

export default mongoose.model("Messages", MessageSchema);
