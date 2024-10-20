import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    const appointmentDetails = req.body;
    // Get Currently Booked Doctor
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // create stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_SITE_URL}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: doctor.ticketPrice * 100,
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    // create new booking
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      appointmentDate: appointmentDetails.appointmentDate,
      reason: appointmentDetails.reason,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
    });

    const savedBooking = await booking.save();
    await Doctor.findByIdAndUpdate(doctor._id, {
      $push: { appointments: savedBooking._id },
    });
    await User.findByIdAndUpdate(user._id, {
      $push: { appointments: savedBooking._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Successfully paid", session });
  } catch (err) {
    console.log(err);

    res
      .status(500)
      .json({ success: false, message: "Error creating checkout session" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res
      .status(200)
      .json({ success: true, message: "Successful", data: bookings });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
