/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { title, description } = item;
  return (
    <div className="bg-gradient-to-r from-[#00327E] to-[#609BF3] p-1 text-center">
      <div className="bg-white h-full py-[30px] px-3 lg:px-5 flex flex-col justify-between">
        <h2 className="text-[30px] leading-9 text-headingColor">{title}</h2>
        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
          {description}
        </p>

        <div className="">
          <Link to="/doctors" className=" ">
            <button className="btn">Request an Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
