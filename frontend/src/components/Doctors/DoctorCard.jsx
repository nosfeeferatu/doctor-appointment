/* eslint-disable react/prop-types */
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    averageRating,
    totalRating,
    photo,
    specialization,
    experiences,
  } = doctor;
  return (
    <div className="p-4 lg:p-7 doctor-card-bg rounded-[30px]">
      <div className="overflow-hidden aspect-square rounded-full">
        <img src={photo} className="w-full" />
      </div>
      <Link
        to={`/doctors/${doctor._id}`}
        className="text-whiteColor flex justify-center items-center gap-2 btn"
      >
        <h2 className="text-[25px] md:text-[16px] lg:text-[20px] font-light">
          {name}
        </h2>
        <BsArrowRight />
      </Link>
      <div className="mt-2 lg:mt-4 text-center">
        {experiences[0]?.hospital && (
          <p className=" text-whiteColor py-1 px-2 lg:px-6 text-[14px] leading-4 lg:text-[16px] lg:leading-7 font-light">
            At {experiences[0]?.hospital}
          </p>
        )}
        <p className="text-[24px] leading-6 font-[400] text-whiteColor">
          {specialization}
        </p>
      </div>
      <div className="mt-[18px] lg:mt-8 flex items-center justify-between">
        <div>
          {/* <h3 className="text-[14px] leading-7 lg:text-[16px] lg:leading-[30px] font-light text-lighterColor">
            +{totalPatients} patients
          </h3> */}
        </div>
        <div>
          <div className="flex items-center gap-[6px]">
            <span className="flex items-center gap-1 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-light text-lighterColor">
              <img src={starIcon} className="w-3 pb-1" />
              {averageRating}
            </span>
            <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-light text-lighterColor">
              ({totalRating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
