import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineEye } from "react-icons/ai";
import Loading from "../../../components/Loader/Loading";
import Error from "../../../components/Error/Error";
import useFetchData from "../../../hooks/useFetchData";
import { BASE_URL } from "../../../config";

// eslint-disable-next-line react/prop-types
const DisplayDoctors = ({ setView, setDocID }) => {
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/list`);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (index) =>
        index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
    },
    {
      field: "name",
      headerName: "Name",
      renderCell: ({ row }) => <p className="capitalize">{row.name}</p>,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      renderCell: ({ row }) => (
        <a
          className="text-darkerColor hover:underline"
          href={`mailto:${row.email}`}
        >
          {row.email}
        </a>
      ),
      flex: 1,
    },
    {
      field: "averageRating",
      headerName: "Ratings",
      renderCell: ({ row }) => (
        <p className="capitalize">
          {row.averageRating} ({row.totalRating})
        </p>
      ),
    },
    {
      field: "isApproved",
      headerName: "Status",
      renderCell: ({ row }) => (
        <p
          className="inline-block rounded leading-9 px-2 capitalize font-semibold text-[#334155]"
          style={
            row.deletedAt === null
              ? row.isApproved === "approved"
                ? { background: "#22c55e" }
                : { background: "#FEB60D" }
              : { background: "#dc2626", color: "#F2F0EF" }
          }
        >
          {row.deletedAt === null ? row.isApproved : "Account Deleted"}
        </p>
      ),
      flex: 1,
    },
    // {
    //   field: "deletedAt",
    //   headerName: "Active",
    //   renderCell: ({ row }) => (
    //     <p
    //       className="inline-block rounded leading-9 px-2 capitalize font-semibold text-[#334155]"
    //       style={
    //         row.deletedAt === null
    //           ? {}
    //           : { background: "#dc2626", color: "#F2F0EF" }
    //       }
    //     >
    //       {row.deletedAt === null ? "Active" : "Deleted"}
    //     </p>
    //   ),
    // },
    {
      headerName: "Actions",
      renderCell: ({ row }) => (
        <button
          onClick={() => {
            setView(true);
            setDocID(row._id);
          }}
          className=" p-4 rounded-full text-[18px] cursor-pointer"
        >
          <AiOutlineEye />
        </button>
      ),
    },
  ];
  return (
    <div>
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      {!loading && !error && (
        <DataGrid
          autoHeight
          columns={columns}
          rows={doctors}
          getRowId={(row) => row._id}
          sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
        />
      )}
    </div>
  );
};

export default DisplayDoctors;
