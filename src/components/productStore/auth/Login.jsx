
import { Link,  useLocation, useNavigate } from "react-router-dom";
import LoginPage  from "../../images/LoginPage.jpg"
import blackimage  from "../../images/blackimage.jpg"

import "../auth/Auth.css"
import { useAuth } from "../../../context/authContext";




function Login (){
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return(
        <div  style={{display:"flex"}}>
           <div className=" images-div">
             <div className="one-div"> 
                <img    className="black-image" height={450} width={400} src={blackimage}alt="" />
            <img  className="main-image"  height={300} width={450} src={LoginPage}alt="" />
             </div>
            



           </div>
           
           
           
           <div className="content-divs">
            <div className="login-text-div">
                
                 <h1 className="login-text">Login.</h1>
           <p className="para">Enter your Credentials to access your account</p>
            </div>
            <div className="upper-button-div">
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
                Login With Google
              </button>
              <button className="facebook-button"  > <span
                  style={{
                    margin: "0.7rem",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                >
                  f
                </span>{" "}  Login With Facebook </button>

            </div>
            
            
              <hr />
              <div className="details-container"> 

              <h4 className="email-text" >Email</h4>
              <input className="email-input" type="text" placeholder="xyz@yui.com " name="" id="" />
              <h4 className="password-text"> Enter Your Password</h4>
              <input className="password-input" type="text" placeholder="Enter Your Password"  name="" id="" />
              <div className="forgot" >Forgot Password?</div>
              <div className="login-button-div" >
                <button className="login-button">Login</button>
                <button className="guest-button" onClick={() => {setIsLoggedIn((isLoggedIn) => !isLoggedIn);navigate(location.state.from.pathname);}}>Login As Guest</button>
              </div>

              <p className="signup-text"> Not a member ?  <Link to="/Signup">Signup </Link>  </p>
              </div>
          
           
           

           </div>
        </div>
    )
}
export {Login}