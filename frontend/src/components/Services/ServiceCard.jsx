import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  // eslint-disable-next-line react/prop-types
  const { name, desc } = item;
  return (
    <div className="bg-gradient-to-r from-[#00327E] to-[#609BF3] p-1 text-center">
      <div className="bg-white py-[30px] px-3 lg:px-5">
        <h2 className="text-[30px] leading-9 text-headingColor">{name}</h2>
        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
          {desc}
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
