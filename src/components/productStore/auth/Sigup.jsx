
import { Link, Route, Routes } from "react-router-dom";
import SignupPage  from "../../images/SignupPage.jpg"
import blackimage  from "../../images/blackimage.jpg"

import "../auth/Auth.css"





function Signup(){
    return (
        <div  style={{display:"flex"}}>
        <div className=" images-div">
          <div className="one-div"> 
             <img    className="black-image" height={450} width={400} src={blackimage}alt="" />
         <img  className="main-image"  height={300} width={450} src={SignupPage}alt="" />
          </div>
         



        </div>
        
        
        
        <div className="content-divs">
        <div className="login-text-div">
                
                <h1 className="login-text">Login.</h1>
          <p className="para">Enter your Credentials to create your account</p>
           </div>
         <div>
         <button className="gmail-button">
             <span
               style={{
                 margin: "0.7rem",
                 fontWeight: "bold",
                 fontSize: "1.3rem",
               }}
             >
               G+
             </span>{" "}
             Sign-up With Google
           </button>
           <button className="facebook-button"  > <span
               style={{
                 margin: "0.7rem",
                 fontWeight: "bold",
                 fontSize: "1.3rem",
               }}
             >
               f
             </span>{" "}  Sign-up With Facebook </button>

         </div>
         
         
           <hr />
           <div className="details-container"> 
           <div className="para2">Fill Your Details Here 👇</div>
           <hr />

 
           <h4 className="password-text"> First Name</h4>
           <input className="password-input" type="text" placeholder="Enter Your Name"  name="" id="" />
           <h4 className="password-text"> Last Name</h4>
           <input className="password-input" type="text" placeholder="Enter Your Last Name"  name="" id="" />
           <h4 className="password-text"> Enter Your Email </h4>
           <input className="password-input" type="text" placeholder="Enter Your Email"  name="" id="" />
           <h4 className="password-text"> Create Password</h4>
          
           <input className="password-input" type="text" placeholder="Enter Your Password"  name="" id="" />

           <div style={{display:"flex"}}>
             <input  type="checkbox" name="" id="" />
           <p>Yes, I agree to all the Terms, Privacy policy</p>
           </div>
          

           
           <div className="login-button-div" >
             <button className="login-button">Ragister</button>
             
           </div>

           <p className="signup-text"> Already a member ?  <Link to="/Login">Login </Link>  </p>
           </div>
       
        
        

        </div>
     </div>
    )
}
export {Signup}