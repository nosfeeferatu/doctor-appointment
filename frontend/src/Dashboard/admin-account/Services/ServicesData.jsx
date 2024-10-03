import { useState } from "react";
import DisplayServices from "./DisplayServices";
import AddService from "./AddService";

const ServicesData = () => {
  const [addForm, setAddForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5">
          Services
        </h2>

        <button
          onClick={() => setAddForm(!addForm)}
          className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5"
        >
          {addForm ? "Back" : "Add"}
        </button>
      </div>
      {addForm ? <AddService setAddForm={setAddForm} /> : <DisplayServices />}
    </div>
  );
};

export default ServicesData;
