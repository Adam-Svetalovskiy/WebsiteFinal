import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product() {

    const { productId } = useParams()
    const [data, setData] = useState([]);

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState(0);


    const fetchData = async () => {

        const response = await axios.get(`/api/getdata/${productId}`);
        setData(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchData()
    }, []);

    const handleClick = async (e) => {
        e.preventDefault()
        const response = await axios.post(`/api/updateProduct/${productId}`, {
            image, name, stock
        })
        setData({...data,stock})
    };

    return !data ? (<div></div>) : (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={data.image} alt="Shoes" className="productInfoImg" />
                        <span className="productName">{data.name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{data.id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">price:</span>
                            <span className="productInfoValue">{data.price}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">stock:</span>
                            <span className="productInfoValue">{data.stock}</span>
                        </div>
                    </div>
                </div>
            </div>
            {!window.localStorage.getItem("employee") ? ("") :<div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        {/* <label>Name</label>
                        <input type="text" value={name} placeholder="Nike" onChange={e => setName(e.target.value)} /> */}
                        <label>Stock</label>
                        <input type="text" value={stock} placeholder="45" onChange={e => setStock(Number(e.target.value))} />
                        {/* <label>Price</label>
                        <input type="text" value={price} placeholder="99.99" onChange={e => setPrice(e.target.value)} />
                        <label>Active</label>
                        <select name="active" value={active} id="active" onChange={e => setActive(e.target.value === "true" ? true : false)} >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select> */}
                    </div>
                    {/* <div className="productFormRight">
                        <div className="productUpload">
                        <label>Image </label>
                        <input type="text" value={image} id="image" onChange={e => setImage(e.target.value)} />
                        <img src={data.image} alt="Shoes" className="productUploadImg"/>
                        </div>
                    </div> */}
                    <button className="productButton" onClick={handleClick}>Update</button>

                </form>
            </div>}
        </div>
    );
}
