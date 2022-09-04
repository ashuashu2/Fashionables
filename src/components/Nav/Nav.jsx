import React from "react";
import logo from "../images/logo.jpg"
import "../Nav/Nav.css"
import { IoMdCart } from "react-icons/io";
import {AiFillHeart } from "react-icons/ai";
import {CgProfile } from "react-icons/cg";
import { Link,NavLink, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { useAuth } from "../../context/authContext";










function Navbar (){
const {cartState: { cart }} = useCart()
const {WishlistState: { Wishlist }} = useWishlist()
const { isLoggedIn, setIsLoggedIn } = useAuth();
const navigate = useNavigate();
const location = useLocation();


const getActiveStyle = ({ isActive }) =>({


fontWeight: isActive ? "bolder" : "",



})


return (
<div className="Nav-container">

  <div className="Nav-left-side">
    <img className="Nav-logo Nav-left-side-content" src={logo} alt="" />
    <h1 className="Nav-left-side-content heading">
      <NavLink className="NavLink" style={getActiveStyle} to="./"> <span className="f-text">F</span><span
          className="heading-text">ashionables.com</span> </NavLink>
    </h1>
    <h2 className="Nav-left-side-content " id="women-text">
      <NavLink className="NavLink" style={getActiveStyle} to="./Women"><span className="heading-text">Women</span>
      </NavLink>
    </h2>
    <h2 className="Nav-left-side-content  " id="men-text">
      <NavLink className="NavLink" style={getActiveStyle} to="./Men"><span className="heading-text">Men</span></NavLink>
    </h2>
  </div>


  <div className="Nav-right-side">
    <NavLink className="NavLink icon-container " style={getActiveStyle} to="./Cart">
      <div className="cart-icon-div">
        <h4 className="Nav-right-side-content">
          <IoMdCart size="3rem" /> <span className="cart-icon-counter">
            {isLoggedIn?cart.length:cart.length===0}

          </span> </h4>




      </div>
    </NavLink>

    <NavLink className="NavLink icon-container " style={getActiveStyle} to="./WishList">
      <div className="wishlist-icon-div">
        <h4 className="Nav-right-side-content icon wishlist-icon ">
          <AiFillHeart /><span className="wishlist-icon-counter">
            {isLoggedIn?Wishlist.length:Wishlist.length===0}
          </span></h4>

      </div>
    </NavLink>



    <div>
      <h4 className="Nav-right-side-content icon"> Hi!User </h4>




    </div>
    <div className="login-button"  > {isLoggedIn ? (<button className="card-button" onClick={()=> {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        navigate("/");
        toast.success("Logout Succesfully")}}>

        LogOut
      </button>):( <button className="card-button">
        <NavLink style={{color:"black"}} to="./Login" state={{from:location}}>Login</NavLink>
      </button>) } </div>
  </div>




</div>



)


}


export {Navbar}