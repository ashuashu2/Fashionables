import React from "react";
import axios from "axios";


import { Link,  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import LoginPage  from "../../images/LoginPage.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blackimage  from "../../images/blackimage.jpg"

import "../auth/Auth.css"
import { useAuth } from "../../../context/authContext";




function Login (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const from = location?.state?.from.pathname

    const GuestButtonHandler = () =>{
      setIsLoggedIn(()=>({
        username: "Guest",
        login: true,
                   }));
       toast.success("Login Succesfully");
       navigate(from,{replace:true});
    }


    const loginHandler = async() =>{
      const data ={
        email : email,
        password : password,
      }
      if( email.length >= 1 && password.length >= 1 ){
        try {
          const response = await axios.post("/api/auth/login", data);
          if(response.data.encodedToken){
            setIsLoggedIn(()=>({
              token : response.data.encodedToken,
              username: response.data.foundUser.firstName,
              login: true,
            }))
            toast.success("Login Succesfull")
            
            navigate("/")
    
          }else{
            toast.error("Invalid userId  Password Please Try Again")
          }
          
        } catch (error) {
          toast.error("Login Failed | Something Is Wrong Please Try Again After Some Times  ");
  
  
        }

      }else{
        toast.error("please fill all the Credentials ")
      }

     
    
    };

    return(
        <div className="login-page-main-container" >
           <div className=" images-div">
             <div className="one-div"> 
                <img    className="black-image"  src={blackimage}alt="" />
            <img  className="main-image" src={LoginPage}alt="" />
             </div>
            



           </div>
           
           
           
           <div className="content-divs">
            <div className="login-text-div">
                
                 <h1 className="login-text">Login.</h1>
           <p className="para">Enter your Credentials to access your account</p>
            </div>
            <div className="upper-button-div">
            <button className="gmail-button">
                <span className="upper-button-span"
                
                >
                  G+
                </span>{" "}
                Login With Google
              </button>
              <button className="facebook-button"  > <span className="upper-button-span"
               
                >
                  f
                </span>{" "}  Login With Facebook </button>

            </div>
            
            
              <hr />
              <div className="details-container"> 

              <h4 className="email-text" >Email</h4>
              <input className="email-input" type="text" placeholder="xyz@yui.com " name="" id="" onChange={(e) => setEmail(e.target.value)} />
              <h4 className="password-text"> Enter Your Password</h4>
              <input className="password-input" type="text" placeholder="Enter Your Password"  name="" id=""  onChange={(e) => setPassword(e.target.value)}/>
              <div className="forgot" >Forgot Password?</div>
              <div className="login-button-div" >
                <button className="login-button" onClick={ ()=>loginHandler()}>Login</button>
                <button className="guest-button" onClick={GuestButtonHandler} >Login As Guest</button>
              </div>

              <p className="signup-text"> Not a member ?  <Link to="/Signup">Signup </Link>  </p>
              </div>
          
           
           

           </div>
           
        </div>
        
    )
}
export {Login}