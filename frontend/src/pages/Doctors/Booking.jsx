import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

const Booking = () => {
  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[700px] mx-auto rounded-lg shadow-md md:p-10 md:pt-4">
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
          </div>
        </div>
        <form
          className="py-4 md:py-0"
          // onSubmit={submitHandler}
        >
          <div className="mb-5"></div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              //   value={formData.password}
              //   onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              {/* {loading ? <SyncLoader size={10} color="#ffffff" /> : "Login"} */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
