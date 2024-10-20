import { Link, useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { toast } from "react-toastify";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    appointmentDate: "",
    reason: "",
  });

  console.log(bookingData);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleDate = (date) => {
    setBookingData({ ...bookingData, appointmentDate: date });
  };

  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const disabledDate = (current) => {
    // Can not select days before today and today
    const daysAvailable = doctor.timeSlots.map(
      (availableDay) => availableDay.day
    );
    const daysAsNum = daysAvailable.map((day) => {
      switch (day) {
        case "sunday":
          return 0;
        case "monday":
          return 1;
        case "tuesday":
          return 2;
        case "wednesday":
          return 3;
        case "thursday":
          return 4;
        case "friday":
          return 5;
        case "saturday":
          return 6;
      }
    });
    return (
      (current && current < dayjs().endOf("day")) ||
      (current.$W && !daysAsNum.includes(current.$W))
    );
  };

  const bookingHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[700px] mx-auto rounded-lg shadow-md md:p-10 md:pt-0">
        <div className="flex justify-between items-center">
          <h3 className="text-headingColor text-[40px] leading-9 font-bold mb-10">
            <span className="text-primaryColor">Booking</span>
          </h3>
          <Link to={`/doctors/${id}`} className="mb-10">
            <button className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4">
              Back
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-5 mb-5">
          <figure className="max-w-[200px] max-h-[200px] overflow-hidden">
            <img src={doctor?.photo} className="w-full" />
          </figure>

          <div>
            <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
              {doctor?.specialization}
            </span>
            <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
              {doctor?.name}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <p className="text__para mt-0 font-semibold">Booking Price: </p>
              <span className="text-[16px] leading-7 lg:text-[20px] lg-leading-8 text-darkerColor font-bold">
                RS {doctor?.ticketPrice}
              </span>
            </div>
          </div>
        </div>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <div className="flex items-center gap-3">
              <DatePicker
                value={bookingData.appointmentDate}
                onChange={handleDate}
                name="appointmentDate"
                className="w-1/2 px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md"
                disabledDate={disabledDate}
              />
              {bookingData.appointmentDate && <p className="">Hello</p>}
            </div>
          </div>

          <div className="mt-[30px]">
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
              Reason for Appointment
            </h3>

            <textarea
              className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
              rows="5"
              placeholder="What can we help you out with.."
              value={bookingData.reason}
              onChange={(e) =>
                setBookingData({ ...bookingData, reason: e.target.value })
              }
            ></textarea>
          </div>

          <div className="mt-7">
            <button
              onClick={bookingHandler}
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? (
                <SyncLoader size={10} color="#ffffff" />
              ) : (
                "Proceed with Booking"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
