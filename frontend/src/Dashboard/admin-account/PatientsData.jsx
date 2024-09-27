import { DataGrid } from "@mui/x-data-grid";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const PatientsData = () => {
  const { data: users, loading, error } = useFetchData(`${BASE_URL}/users`);

  return (
    <div>
      Patient
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      <DataGrid
        autoHeight
        columns={[
          { field: "id" },
          { field: "name", flex: 1 },
          { field: "email", flex: 1 },
          { field: "bloodType", flex: 1 },
        ]}
        rows={users}
        getRowId={(row) => row._id}
        sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
      />
    </div>
  );
};

export default PatientsData;
