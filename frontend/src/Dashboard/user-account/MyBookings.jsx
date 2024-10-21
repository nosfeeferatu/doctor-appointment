// import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { formatDate } from "../../utils/formatDate";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log(appointments);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (index) =>
        index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
    },
    {
      field: "doctor.name",
      headerName: "Doctor",
      renderCell: ({ row }) => <p className="capitalize">{row.doctor.name}</p>,
      flex: 1,
    },

    {
      field: "appointmentDate",
      headerName: "Date",
      renderCell: ({ row }) => (
        <p className="capitalize">{formatDate(row.appointmentDate)}</p>
      ),
      flex: 1,
    },
    {
      field: "reason",
      headerName: "Reason",
      renderCell: ({ row }) => <p>{row.reason}</p>,
      flex: 1.5,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   renderCell: ({ row }) => (
    //     <p
    //       className="inline-block rounded leading-9 px-2 capitalize font-semibold text-[#334155]"
    //       style={
    //         row.deletedAt === null
    //           ? row.isApproved === "approved"
    //             ? { background: "#22c55e" }
    //             : { background: "#FEB60D" }
    //           : { background: "#dc2626", color: "#F2F0EF" }
    //       }
    //     >
    //       {row.deletedAt === null ? row.isApproved : "Account Deleted"}
    //     </p>
    //   ),
    //   flex: 1,
    // },
    {
      headerName: "Actions",
      renderCell: ({ row }) => (
        <button
          // onClick={() => {
          //   setView(true);
          //   setDocID(row._id);
          // }}
          className=" p-4 rounded-full text-[18px] cursor-pointer"
        >
          <AiOutlineEye />
        </button>
      ),
    },
  ];

  return (
    <div className="mt-5">
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <DataGrid
          autoHeight
          columns={columns}
          rows={appointments}
          getRowId={(row) => row._id}
          sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
        />
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
