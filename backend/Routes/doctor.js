import express from "express";
import {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorProfile,
  getDoctorsList,
  approveDoctor,
  getMyAppointments
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

// Nested Route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/", getAllDoctors);
router.get("/list", getDoctorsList);
router.get("/:id", getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.put("/approve/:id", authenticate, restrict(["admin"]), approveDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["doctor"]),
  getMyAppointments
);

export default router;
