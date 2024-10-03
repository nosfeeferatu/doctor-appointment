import Loader from "../../../components/Loader/Loading";
import Error from "../../../components/Error/Error";
import { BASE_URL } from "../../../config";
import starIcon from "../../../assets/images/Star.png";
import DoctorAbout from "../../../pages/Doctors/DoctorAbout";
import useFetchData from "../../../hooks/useFetchData";

// eslint-disable-next-line react/prop-types
const ViewDoctor = ({ docID }) => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/${docID}`);

  return (
    <div className="py-5 mx-auto">
      {loading && !error && <Loader />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <div className="lg:col-span-2">
            <div>
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <figure className="max-w-[200px] max-h-[200px]">
                    {data?.photo ? (
                      <img src={data?.photo} alt="" className="w-full" />
                    ) : (
                      <h2 className="text-textColor">No Image added</h2>
                    )}
                  </figure>

                  <div>
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                      {data.specialization
                        ? data.specialization
                        : "No Specialization added"}
                    </span>
                    <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                      {data.name}
                    </h3>
                    <h3 className="text-[16px] leading-9 mt-[-1rem] mb-2 text-textColor">
                      {data.email}
                    </h3>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold ">
                        <img src={starIcon} alt="" />
                        {data.averageRating}
                      </span>
                      <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                        ({data.totalRating})
                      </span>
                    </div>

                    {data?.bio ? (
                      <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                        {data?.bio}
                      </p>
                    ) : (
                      <h2 className="text-textColor">No Bio added</h2>
                    )}
                  </div>
                </div>
                <DoctorAbout
                  name={data.name}
                  about={data.about}
                  qualifications={data.qualifications}
                  experiences={data.experiences}
                />
              </div>
            </div>

            {data.isApproved === "pending" && (
              <div className="flex gap-2">
                <button className=" bg-red-600 text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5">
                  Reject
                </button>
                <button className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5">
                  Approve
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDoctor;
