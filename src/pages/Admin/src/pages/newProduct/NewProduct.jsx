import "./newProduct.css";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");

  const handleClick = async(e) => {
    e.preventDefault()
    await axios.post("/api/addproduct", {
    image,name,stock,description,price: Number(price)
    })
  };

  return window.localStorage.getItem("admin") !== '1' ? (<div className="container">Error: Not An Admin</div>):(
    <div className="newProduct">
      <h3 className="addProductTitle">Create a New Product</h3>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="text" value = {image} id="image" onChange={e => setImage(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" value= {name} placeholder="Nike" onChange={e => setName(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea type="text" value= {description} placeholder="Description" onChange={e => setDesc(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" value = {stock} placeholder="45" onChange={e => setStock(Number(e.target.value))}  />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" value = {price} placeholder="99.99" onChange={e => setPrice(e.target.value)}  />
        </div>
        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
