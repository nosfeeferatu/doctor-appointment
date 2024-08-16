import { formatDate } from "../../utils/formatDate";

// import React from "react";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px]">
            Gavin Livero
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur
          sint quos eaque eveniet nobis eos dolor explicabo quia aut
          accusantium, doloremque officiis iusto sequi quod maiores voluptates!
          Velit, dignissimos perspiciatis architecto fugiat aliquam illo totam
          voluptatibus eveniet praesentium laboriosam quis explicabo! Cum,
          repellendus natus. Temporibus reiciendis maiores delectus placeat.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("07-10-2014")} - {formatDate("09-10-2015")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Post Doc. in Rapid Surgery Techniques
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              His Higness Kim Jong-Il Institute of Medicine,Pyongyang.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("04-04-2010")} - {formatDate("07-11-2011")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Post Doc. in Rapid Surgery Techniques
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              His Higness Kim Jong-Il Institute of Medicine,Pyongyang.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColortext-[15px] leading-6 font-semibold">
              {formatDate("07-10-2010")} - {formatDate("09-10-2015")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              His Higness Kim Jong-Il Institute of Medicine,Pyongyang.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColortext-[15px] leading-6 font-semibold">
              {formatDate("07-10-2010")} - {formatDate("09-10-2015")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Jr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              His Higness Kim Jong-Il Institute of Medicine,Pyongyang.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
