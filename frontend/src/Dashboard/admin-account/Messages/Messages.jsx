import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useFetchData from "../../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import Loading from "../../../components/Loader/Loading";
import Error from "../../../components/Error/Error";
import { AiOutlineEye } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Messages = ({ setView, setMessageID }) => {
  const {
    data: messages,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/message`);
  console.log(messages);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (index) =>
        index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
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
      field: "subject",
      headerName: "Subject",
      renderCell: ({ row }) => <p>{row.subject}</p>,
      flex: 2,
    },
    {
      headerName: "Actions",
      renderCell: ({ row }) => (
        <button
          onClick={() => {
            setView(true);
            setMessageID(row._id);
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
          rows={messages}
          getRowId={(row) => row._id}
          sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
        />
      )}
    </div>
  );
};

export default Messages;
