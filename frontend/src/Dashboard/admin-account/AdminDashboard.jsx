import { useState } from "react";
// import userImg from "../../assets/images/doctor-img01.png";

import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";

import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import PatientsData from "./PatientsData";
import ServicesData from "./Services/ServicesData";
import DoctorsData from "./Doctors/DoctorsData";
import FAQData from "./Faq/FAQData";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MessageData from "./Messages/MessageData";

const AdminDashboard = () => {
  const [tab, setTab] = useState("doctors");
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <section>
      <div className="max-w-[1400px] px-5 mx-auto">
        {loading && <Loading />}

        {error && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div>
                <span className="lg:hidden">
                  <BiMenu className="w-6 h-6 cursor-pointer" />
                  <div className="text-center">
                    <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                      {userData.name}
                    </h3>
                    <p className="text-textColor text-[15px] leading-6 font-medium">
                      {userData.email}
                    </p>
                  </div>
                </span>
                <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
                  <div className="text-center my-4">
                    <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                      {userData.name}
                    </h3>
                    <p className="text-textColor text-[15px] leading-6 font-medium">
                      {userData.email}
                    </p>
                  </div>
                  <button
                    onClick={() => setTab("doctors")}
                    className={`${
                      tab === "doctors"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-transparent text-headingColor"
                    } w-full btn mt-0 rounded-md`}
                  >
                    Doctors
                  </button>

                  <button
                    onClick={() => setTab("patients")}
                    className={`${
                      tab === "patients"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-transparent text-headingColor"
                    } w-full btn mt-0 rounded-md`}
                  >
                    Patients
                  </button>

                  <button
                    onClick={() => setTab("services")}
                    className={`${
                      tab === "services"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-transparent text-headingColor"
                    } w-full btn mt-0 rounded-md`}
                  >
                    Services
                  </button>

                  <button
                    onClick={() => setTab("faq")}
                    className={`${
                      tab === "faq"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-transparent text-headingColor"
                    } w-full btn mt-0 rounded-md`}
                  >
                    FAQ
                  </button>

                  <button
                    onClick={() => setTab("messages")}
                    className={`${
                      tab === "messages"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-transparent text-headingColor"
                    } w-full btn mt-0 rounded-md`}
                  >
                    Messages
                  </button>

                  <div className="mt-[100px] w-full">
                    <button
                      onClick={handleLogout}
                      className="w-full bg-[#181A1E] text-white p-3 text-[16px] leading-7 rounded-md"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
              {/* <Tabs tab={tab} setTab={setTab} /> */}
            </div>

            <div className="lg:col-span-2 md:px=[30px]">
              {tab == "doctors" && <DoctorsData />}
              {tab == "patients" && <PatientsData />}
              {tab == "services" && <ServicesData />}
              {tab == "faq" && <FAQData />}
              {tab == "messages" && <MessageData />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
