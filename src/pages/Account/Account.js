//import React, { Fragment } from 'react';
import React, {useState,Fragment} from "react";
import "./Account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { useNavigate } from "react-router-dom";



function Account (){
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("/api/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

  const login = (e) => {
    e.preventDefault();
    Axios.post("/api/login", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
    
      }else{
        window.localStorage.setItem('email', response.data.email)
        window.localStorage.setItem('employee', response.data.employee)
        window.localStorage.setItem('admin', response.data.admin)
        setLoginStatus(response.data.email);
        navigate("/product") 
      }
    })
  }

    return(<Fragment>
  
   <section className="container">
      <div className="loginForm">
        <form>
          <h4>Login Here</h4>
          <label htmlFor="email">Email Address*</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required />
         <label htmlFor="password">Password*</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className="button" type="submit" onClick={login} value="Login" />
       
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
        </form>
      </div>
    </section>

      <section className="container">

      <div className="loginForm">
        <form>
          <h4>Register Here</h4>
          <label htmlFor="email">Email Address*</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required />
          <label htmlFor="username">Username*</label>
          <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required />
          <label htmlFor="password">Password*</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className="button" type="submit" onClick={register} value="Create an account" />
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
        </form>
      </div>
    </section>
    
  
    </Fragment>

    )
}

export default Account;
