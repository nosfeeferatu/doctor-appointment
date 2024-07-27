import express from "express";
import {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
} from "../Controllers/doctorController.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
