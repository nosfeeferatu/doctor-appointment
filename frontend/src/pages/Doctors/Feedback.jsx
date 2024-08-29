// import React from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";

const Feedback = () => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (1)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Mohammed Naseef bin Mashood
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("08-16-2024")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Punched me after treatment, now I'm back in hospital 10/10
                experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
