import express from "express";
import { authenticate } from "./../auth/verifyToken.js";
import {
  getCheckoutSession,
  getAllBookings,
} from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);
router.route("/").get(getAllBookings);
export default router;
