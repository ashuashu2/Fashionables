import React from "react";
import logo from "../images/logo.jpg"
import "../Nav/Nav.css"
import { IoMdCart } from "react-icons/io";
import {AiFillHeart  } from "react-icons/ai";
import {CgProfile } from "react-icons/cg";
import { Link,NavLink} from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";










 function Navbar (){
  const {cartState: { cart }}  = useCart()
  const {WishlistState: { Wishlist }}  = useWishlist()

  const getActiveStyle = ({ isActive }) =>({
    

    fontWeight: isActive ? "bolder" : "",
   

    
  })


    return (
        <div className="Nav-container">
          
            <div className="Nav-left-side">
                <img  className="Nav-logo Nav-left-side-content" src={logo} alt="" />
                <h1 className="Nav-left-side-content heading"> <NavLink className="NavLink" style={getActiveStyle} to="./" > <span className="f-text" >F</span><span className="heading-text">ashionables.com</span> </NavLink>  </h1>
                <h2 className="Nav-left-side-content "  id="women-text">  <NavLink className="NavLink" style={getActiveStyle} to="./Women"><span className="heading-text">Women</span> </NavLink></h2>
                <h2 className="Nav-left-side-content  "   id="men-text"> <NavLink className="NavLink" style={getActiveStyle} to="./Men"><span className="heading-text">Men</span></NavLink></h2>
            </div>
            

            <div className="Nav-right-side" >
            <NavLink className="NavLink" style={getActiveStyle} to="./Cart" >
            <div className="cart-icon-div">
                <h4 className="Nav-right-side-content" ><IoMdCart size="3rem" /> <span className="cart-icon-counter">{cart.length}</span>  </h4>
                <h4 className=" icon-text" >Cart</h4>
             
               

              </div>
            </NavLink>

            <NavLink className="NavLink" style={getActiveStyle} to="./WishList" > 
            <div className="wishlist-icon-div">
                <h4 className="Nav-right-side-content icon "> <AiFillHeart /><span className="wishlist-icon-counter"> {Wishlist.length}</span></h4>
                <h4 className=" icon-text"> Wishlist </h4>
              </div> </NavLink>

              
              
              <div>
                <h4 className="Nav-right-side-content icon"> <CgProfile /> </h4>
                <h4 className=" icon-text"> Profile </h4>
              </div>


          
            </div>


           

            </div>
            

       
    )


 }


 export {Navbar}