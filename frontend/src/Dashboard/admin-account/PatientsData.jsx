import { DataGrid } from "@mui/x-data-grid";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const PatientsData = () => {
  const { data: users, loading, error } = useFetchData(`${BASE_URL}/users`);

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
      field: "bloodType",
      headerName: "Blood Type",
      renderCell: ({ row }) => <p>{row.bloodType}</p>,
      flex: 1,
    },
  ];

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5">
        Patient Data
      </h2>
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      {!loading && !error && (
        <DataGrid
          autoHeight
          columns={columns}
          rows={users}
          getRowId={(row) => row._id}
          sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
        />
      )}
    </div>
  );
};

export default PatientsData;
