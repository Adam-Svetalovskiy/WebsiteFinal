/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import ProductPage1 from '../ProductPages/Hiking/ProductPage1';
import { useContext, useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Product = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("/api/getvalues/1");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    
    fetchData();
     // eslint-disable-next-line 
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="container mt-5">
         <div className="row">
          <div className="card" key={index}>
          <a href="{/productpage1}"> <img src={item.image}  className="img-thumbnail rounded" /></a>
         < a href="{/productpage2}"> <img src={item.image}  className="img-thumbnail rounded" /></a>
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>{item.catagory}</p>
            <p className="lead mb-4">Price: £{item.price}</p>
            <button className="btn btn-primary mb-4" onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
            
          </div>
          </div>
          
          </div>
          
        );
      })}
      
    </div>
  );
};

export default Product;
