import Services from "../models/ServicesSchema.js";

export const addService = async (req, res) => {
  const { title, description } = req.body;
  try {
    const service = new Services({
      title,
      description,
    });

    await service.save();
    res
      .status(200)
      .json({ success: true, message: "Service added successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error, try again" });
  }
};

export const deleteService = async (req, res) => {
  const id = req.params.id;

  try {
    const service = await Services.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete service" });
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json({
      success: true,
      message: "Services found",
      data: services,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
