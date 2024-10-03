import { useState } from "react";
import DisplayFAQ from "./DisplayFAQ";
import AddFAQ from "./AddFAQ";

const FAQData = () => {
  const [addForm, setAddForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5">
          FAQ
        </h2>

        <button
          onClick={() => setAddForm(!addForm)}
          className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5"
        >
          {addForm ? "Back" : "Add"}
        </button>
      </div>
      {addForm ? <AddFAQ setAddForm={setAddForm} /> : <DisplayFAQ />}
    </div>
  );
};

export default FAQData;
