import { DataGrid } from "@mui/x-data-grid";
import useFetchData from "../../hooks/useFetchData";
import { AiOutlineEye } from "react-icons/ai";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorsData = () => {
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
      headerName: "Approval Status",
      renderCell: ({ row }) => (
        <p
          className="inline-block rounded leading-9 px-2 capitalize font-semibold text-[#334155]"
          style={
            row.isApproved === "approved"
              ? { background: "#22c55e" }
              : { background: "#FEB60D" }
          }
        >
          {row.isApproved}
        </p>
      ),
      flex: 1,
    },
    {
      headerName: "Actions",
      renderCell: ({ row }) => (
        <div className=" p-4 rounded-full text-[18px] cursor-pointer">
          <AiOutlineEye />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5">
        Doctor Data
      </h2>
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

export default DoctorsData;
