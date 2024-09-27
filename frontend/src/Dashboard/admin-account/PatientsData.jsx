import { DataGrid } from "@mui/x-data-grid";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const PatientsData = () => {
  const { data: users, loading, error } = useFetchData(`${BASE_URL}/users`);

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
      )}
    </div>
  );
};

export default PatientsData;
