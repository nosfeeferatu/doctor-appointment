import Faq from "../models/FaqSchema.js";

export const addFaq = async (req, res) => {
  const { question, content } = req.body;
  try {
    const faq = new Faq({
      question,
      content,
    });

    await faq.save();
    res.status(200).json({ success: true, message: "FAQ added successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error, try again" });
  }
};

export const deleteFaq = async (req, res) => {
  const id = req.params.id;

  try {
    const faq = await Faq.findByIdAndDelete(id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete FAQ" });
  }
};

export const getFaqs = async (req, res) => {
  try {
    const faq = await Faq.find();
    res.status(200).json({
      success: true,
      message: "FAQ found",
      data: faq,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
