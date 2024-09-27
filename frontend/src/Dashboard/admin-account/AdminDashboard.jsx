import { useState } from "react";
// import userImg from "../../assets/images/doctor-img01.png";

import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";

import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import Tabs from "./Tabs";
import DoctorsData from "./DoctorsData";

const AdminDashboard = () => {
  const [tab, setTab] = useState("doctors");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData, "userdata");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loading />}

        {error && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
              </div>
              <Tabs tab={tab} setTab={setTab} />
            </div>

            <div className="lg:col-span-2 md:px=[30px]">
              {tab == "doctors" && <DoctorsData />}
              {/* {tab == "settings" && <Profile user={userData} />} */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
