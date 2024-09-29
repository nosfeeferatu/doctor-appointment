import React from "react";

import useFetchData from "../../hooks/useFetchData";
import { AiOutlineEye } from "react-icons/ai";
import { BASE_URL } from "../../config";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DisplayServices = () => {
  const {
    data: services,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/services`);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (index) =>
        index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
    },
    {
      field: "title",
      headerName: "Title",
      renderCell: ({ row }) => <p className="capitalize">{row.title}</p>,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      renderCell: ({ row }) => <p className="capitalize">{row.description}</p>,
      flex: 3,
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
    <>
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      {!loading && !error && (
        <DataGrid
          autoHeight
          columns={columns}
          rows={services}
          getRowId={(row) => row._id}
          sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
        />
      )}
    </>
  );
};

export default DisplayServices;
