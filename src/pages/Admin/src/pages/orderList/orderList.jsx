import "./orderList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const statusmap = {0: "Processing" , 1 : "Processed", 2 : "Shipped"}

export default function OrderList() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    
    const response = await axios.get("/api/getorders");
    const items = []
    response.data.forEach((item) => {
      if(!items.find((item2)=>item2.orderid === item.orderid)){
        items.push({...item, price:0, orderstatus : statusmap[item.orderstatus]})
      }
      items.find((item2)=>item2.orderid === item.orderid).price += item.price*item.count
    })
    setData(items);
    
    console.log(response.data);
  };

  useEffect(()=>{
    fetchData() 
  },[]);

  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "orderid", headerName: "ID", width: 90 },
    {
      field: "userid",
      headerName: "User",
      width: 160,
    },
    { field: "orderstatus", headerName: "Status", width: 160},
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/editorder/" + params.row.orderid}>
              <button className="productListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (

    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId = {(row) => row.orderid}
      />
    </div>
  );
}
