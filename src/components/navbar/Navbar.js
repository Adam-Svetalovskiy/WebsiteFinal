/** @format */

import "./Navbar.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  return (



    <nav className="navbar">
        
    <nav className="navbar">
           <img src="default.svg" className="brand-logo" alt=""/>
           <div className="nav-items">
               <div className="search">
               <div className="input-container">
<input type="text" name="text" className="input" placeholder="search..."/>
<span className="icon"> 
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
</span>
</div>
      
           </div>
       </div>
       </nav>





<ul className="links-container">
<li> <NavLink className="link" to="/"> Home </NavLink></li>
<li> <NavLink className="link" to="/product"> Shop </NavLink></li>
<div className="dropdown">
<select className="link" onChange={(e) => { navigate(e.target.value) }}>
  <option value="">Categories</option>
  
  <option value="/climbing">Climbing</option>
  <option value="/football">Football</option>
  <option value="/running">Running</option>
  <option value="/tennis">Tennis</option>
  <option value="/hiking">Hiking</option>
</select>

</div>
<li> <NavLink className="link" to="/about"> About </NavLink></li>
<li> <NavLink className="link" to="/contact"> Contact </NavLink></li>
<li> <NavLink className="link" to="/admin"> Admin </NavLink></li>
<li> <NavLink className="link" to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> </NavLink></li>
<li> <NavLink className="link" to="/account"> <FontAwesomeIcon icon={faUser} /> </NavLink></li>
        

</ul>

</nav>
  );
};

export default Navbar;
