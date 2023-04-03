import { Link } from "react-router-dom";
import "./editOrder.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function EditOrder() {

    const { orderId } = useParams()
    const [status, setStatus] = useState(0);

    const handleClick = async (e) => {
        e.preventDefault()
        const response = await axios.post(`/api/updateorder/${orderId}`, {
            status
        })
    };

    return (
        window.localStorage.getItem("employee") !== "1" ? ("") :
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">Order {orderId}</h1>
                </div>
                <div className="productBottom">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Status</label>
                            <select name="status" value={status} id="status" onChange={e => setStatus(Number(e.target.value))} >
                                <option value="0">Processing</option>
                                <option value="1">Processed</option>
                                <option value="2">Shipped</option>
                            </select>
                        </div>
                        <button className="productButton" onClick={handleClick}>Update</button>
                    </form>
                </div>
            </div>
    );
}
