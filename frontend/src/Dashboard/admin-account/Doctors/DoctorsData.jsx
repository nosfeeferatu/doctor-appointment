import { useState } from "react";
import DisplayDoctors from "./DisplayDoctors";
import ViewDoctor from "./ViewDoctor";

const DoctorsData = () => {
  const [view, setView] = useState(false);
  const [docID, setDocID] = useState("");

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5">
          Doctor Data
        </h2>
        {view && (
          <button
            onClick={() => setView(false)}
            className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5"
          >
            Back
          </button>
        )}
      </div>
      {view ? (
        <ViewDoctor docID={docID} />
      ) : (
        <DisplayDoctors setView={setView} setDocID={setDocID} />
      )}
    </div>
  );
};

export default DoctorsData;
