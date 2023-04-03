import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import OrderList from "./pages/orderList/orderList";
import EditOrder from "./pages/editOrder/editOrder";

function Admin() {
  return window.localStorage.getItem("employee") !== '1' ? (<div className="container">Error: Not An Employee</div>):(
  
    <div>
      <Topbar />
      <div className="admincontainer">
        <Sidebar />
        <Routes>
          <Route path="" element={<Home></Home>} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="editorder/:orderId" element={<EditOrder />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
