import Messages from "../models/MessageSchema.js";

export const createMessage = async (req, res) => {
  const newMessage = new Messages(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json({
      success: true,
      message: "Message submitted",
      data: savedMessage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Messages.find({});
    res
      .status(200)
      .json({ success: true, message: "Successful", data: messages });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getSingleMessage = async (req, res) => {
  const id = req.params.id;

  try {
    const messages = await Messages.findById(id);
    res
      .status(200)
      .json({ success: true, message: "Successful", data: messages });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
