import express from "express";
import { addFaq, deleteFaq, getFaqs } from "../Controllers/faqController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", getFaqs);
router.post("/add", addFaq);
router.delete("/delete/:id", deleteFaq);

export default router;
