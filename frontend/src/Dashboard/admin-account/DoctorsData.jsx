import { DataGrid } from "@mui/x-data-grid";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorsData = () => {
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/list`);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      <DataGrid
        autoHeight
        columns={[
          { field: "id" },
          { field: "name", flex: 1 },
          { field: "isApproved", flex: 1 },
        ]}
        rows={doctors}
        getRowId={(row) => row._id}
        sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
      />
    </div>
  );
};

export default DoctorsData;
