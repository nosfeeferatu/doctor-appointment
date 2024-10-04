import express from "express";
import {
  createMessage,
  getAllMessages,
  getSingleMessage,
} from "../Controllers/messageController.js";

const router = express.Router();

router.route("/").post(createMessage).get(getAllMessages);
router.get("/:id", getSingleMessage);

export default router;
