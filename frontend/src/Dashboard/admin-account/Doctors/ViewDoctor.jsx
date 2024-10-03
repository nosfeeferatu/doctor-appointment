import Loader from "../../../components/Loader/Loading";
import Error from "../../../components/Error/Error";
import { BASE_URL, token } from "../../../config";
import starIcon from "../../../assets/images/Star.png";
import DoctorAbout from "../../../pages/Doctors/DoctorAbout";
import useFetchData from "../../../hooks/useFetchData";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import SyncLoader from "react-spinners/SyncLoader";

// eslint-disable-next-line react/prop-types
const ViewDoctor = ({ docID }) => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/${docID}`);
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const approveDoctor = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      // eslint-disable-next-line react/prop-types
      const res = await fetch(`${BASE_URL}/doctors/approve/${data._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      setLoader(false);
      setOpen(false);
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
      setLoader(false);
      setOpen(false);
    }
    navigate(0);
  };

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
                <button
                  onClick={() => setOpen(true)}
                  className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5"
                >
                  Approve
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Approval"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Have all the details been clearly added?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            disabled={loader}
            className=" text-primaryColor bg-white hover:bg-lighterColor text-[18px] leading-8 rounded-lg px-4 py-1"
            onClick={approveDoctor}
          >
            {loader ? <SyncLoader size={10} color="#ffffff" /> : "Yes"}
          </button>
          <button
            className=" bg-primaryColor text-white hover:bg-lighterColor hover:text-primaryColor text-[18px] leading-8 rounded-lg px-4 py-1"
            onClick={handleClose}
            autoFocus
            disabled={loader}
          >
            No
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewDoctor;
