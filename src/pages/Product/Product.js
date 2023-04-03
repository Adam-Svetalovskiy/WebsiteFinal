/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import {Link} from "react-router-dom";

import { Cartcontext } from "../../context/Context";

const Product = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("/api/getdataall");
    setdata(response.data);
    console.log(response.data);
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
          <div className="container mt-6">
          <div className="row">
          <div className="card" key={index}>
        
          <Link to="/productpage1"> <img src={item.image} alt="" className="img-thumbnail rounded" /></Link>
        
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>{item.catagory}</p>
            <p>{item.Stock}</p>
            <p className="lead mb-4">Price: £{item.price}</p>
            <button className="btn btn-primary mb-4" onClick={() => dispatch({ type: "ADD", payload: item })}>
              Add to cart
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


/*<Link to="/productpage1"> <img src={item.image} alt="" className="img-thumbnail rounded" /></Link>
         <Link to="/productpage2"> <img src={item.image} alt="" className="img-thumbnail rounded" /></Link>
        */