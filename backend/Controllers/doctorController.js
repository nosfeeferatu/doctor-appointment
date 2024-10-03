import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      data: updatedDoctor,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update doctor" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete doctor" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No doctor found" });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: `doctor not found` });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "Profile info successfully retrieved",
      data: { ...rest, appointments },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const getDoctorsList = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find().select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const approveDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const approvedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { isApproved: "approved" },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor approved successfully",
      data: approvedDoctor,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to approve doctor" });
  }
};
