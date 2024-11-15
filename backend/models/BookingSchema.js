import mongoose from "mongoose";
import { type } from "os";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
    },
    reason: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
    // Timeslot availability
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
