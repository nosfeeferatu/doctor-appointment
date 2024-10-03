import express from "express";
import {
  addService,
  deleteService,
  getServices,
} from "../Controllers/servicesController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", getServices);
router.post("/add", addService);
router.delete("/delete/:id", deleteService);

export default router;
