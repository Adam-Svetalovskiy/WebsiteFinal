import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios  from "axios";

export default function UserList() {
  
  const [data, setData] = useState([]);

  const fetchData = async () => {
    
    const response = await axios.get("/api/getdata");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(()=>{
    fetchData() 
  },[]);

  const handleDelete = async (id) => {
    axios.post(`/api/deleteUser/${id}`)
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "userid", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "volume",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId = {(row) => row.userid}
      />
    </div>
  );
}
