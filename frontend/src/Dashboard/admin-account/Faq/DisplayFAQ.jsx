import { useState } from "react";

import useFetchData from "../../../hooks/useFetchData";
import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "../../../components/Loader/Loading";
import Error from "../../../components/Error/Error";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { BASE_URL, token } from "../../../config";

const DisplayFAQ = () => {
  const { data: services, loading, error } = useFetchData(`${BASE_URL}/faq`);

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [deleteID, setDeleteID] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const deleteFaqItem = async (id) => {
    try {
      setLoader(true);
      const res = await fetch(`${BASE_URL}/faq/delete/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      setLoader(false);
      toast.success(result.message);
      setOpen(false);
    } catch (err) {
      toast.error(err.message);
      setLoader(false);
      setOpen(false);
    }
    navigate(0);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (index) =>
        index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
    },
    {
      field: "question",
      headerName: "Question",
      renderCell: ({ row }) => <p className="capitalize">{row.question}</p>,
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      renderCell: ({ row }) => <p className="capitalize">{row.content}</p>,
      flex: 3,
    },
    {
      headerName: "Actions",
      renderCell: ({ row }) => (
        <button
          onClick={() => {
            setDeleteID(row._id);
            setOpen(true);
          }}
          className=" p-4 rounded-full text-[18px] cursor-pointer"
        >
          <AiOutlineDelete />
        </button>
      ),
    },
  ];
  return (
    <>
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      {!loading && !error && (
        <>
          <DataGrid
            autoHeight
            columns={columns}
            rows={services}
            getRowId={(row) => row._id}
            sx={{ "--DataGrid-overlayHeight": "300px", background: "" }}
          />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This data, once deleted, cannot be recovered. Are you sure you
                want to delete this?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <button
                disabled={loader}
                className=" text-primaryColor bg-white hover:bg-lighterColor text-[18px] leading-8 rounded-lg px-4 py-1"
                onClick={() => deleteFaqItem(deleteID)}
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
        </>
      )}
    </>
  );
};

export default DisplayFAQ;
