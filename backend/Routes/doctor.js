import express from "express";
import {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorProfile,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

// Nested Route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;
