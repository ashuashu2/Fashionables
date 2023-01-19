import React from "react";
import SignupPage  from "../../images/SignupPage.jpg"
import blackimage  from "../../images/blackimage.jpg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

import "../auth/Auth.css"





function Signup(){
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
const navigate  = useNavigate()



const handleChange =(event)=>{
  if (event.target.checked) {
    setIsChecked(true);
  } else {
    setIsChecked(false);
  } 
}


const signupHandler =async()=>{
  const data ={
    firstName :firstName,
    lastName:lastName,
    email:email ,
    password: password,


  }
  if(isChecked === true){
     if( firstName.length >= 1 && lastName.length >= 1 && email.length >= 1 && password.length >= 1 ) {
      
      try {
      const response = await axios.post("/api/auth/signup", data)
   localStorage.setItem("token", response.data.encodedToken)
   navigate("/Login")
   toast.success("Signup Successfull You Can Login Now")
     
   } catch (error) {
   toast.error("Signup Failed Please Try Again After Some Times  ")
   }
  }else{
    toast.error("please fill all the Credentials ")
   }
  }else{
    setIsChecked("👆 Please indicate that you accept the Terms and Conditions")

  }

 
}



    return (
        <div  style={{display:"flex"}}>
        <div className=" images-div">
          <div className="one-div"> 
             <img    className="black-image" src={blackimage}alt="" />
         <img  className="main-image"   src={SignupPage}alt="" />
          </div>
         



        </div>
        
        
        
        <div className="content-divs">
        <div className="login-text-div">
                
                <h1 className="login-text">Signup.</h1>
          <p className="para">Enter your Credentials to create your account</p>
           </div>
           <div className="upper-button-div">
            <button className="gmail-button">
                <span className="upper-button-span"
                
                >
                  G+
                </span>{" "}
                Signup With Google
              </button>
              <button className="facebook-button"  > <span className="upper-button-span"
               
                >
                  f
                </span>{" "}  Signup With Facebook </button>

            </div>
         
         
           <hr />
           <div className="details-container"> 
           <div className="para2">Fill Your Details Here 👇</div>
           <hr />

 
           <h4 className="password-text"> First Name</h4>
           <input className="password-input" type="text"  onChange={(e) => setFirstName(e.target.value)} placeholder="Enter Your Name"  name="" id="" />
           <h4 className="password-text"> Last Name</h4>
           <input  className="password-input" type="text" placeholder="Enter Your Last Name"   name="" id=""  onChange={(e) => setLastName(e.target.value)} />
           <h4 className="password-text"> Enter Your Email </h4>
           <input className="password-input" type="text" placeholder="Enter Your Email"  name="" id=""   onChange={(e) => setEmail(e.target.value)}  />
           <h4 className="password-text"> Create Password</h4>
          
           <input className="password-input" type="text" placeholder="Enter Your Password"  name="" id=""  onChange={(e) => setPassword(e.target.value)}  />

           <div style={{display:"flex"}}>
             <input   value={isChecked}
          onChange={handleChange} type="checkbox"  name="" id="" />
           <p>Yes, I agree to all the Terms, Privacy policy</p>
           </div>
           <p className="ischecked-text"> {isChecked} </p>
          

           
           <div className="login-button-div" >
             <button className="login-button" onClick = {() => signupHandler()}>Ragister</button>
             
           </div>

           <p className="signup-text"> Already a member ?  <Link to="/Login">Login </Link>  </p>
           </div>
       
        
        

        </div>
     </div>
    )
}
export {Signup}