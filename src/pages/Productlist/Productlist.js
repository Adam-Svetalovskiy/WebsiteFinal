/** @format */

import { useContext, useEffect, useState } from "react";
import "./Productlist.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Productlist = () => {
  
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    
    const response = await axios.get("/api/getdata/:id");
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
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$ {item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Productlist;
