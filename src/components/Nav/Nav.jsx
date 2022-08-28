import React from "react";
import logo from "../images/logo.jpg"
import "../Nav/Nav.css"
import { IoMdCart } from "react-icons/io";
import {AiFillHeart  } from "react-icons/ai";
import {CgProfile } from "react-icons/cg";
import { Link} from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";










 function Navbar (){
  const {cartState: { cart }}  = useCart()
  const {WishlistState: { Wishlist }}  = useWishlist()


    return (
        <div className="Nav-container">
            <div className="Nav-left-side">
                <img  className="Nav-logo Nav-left-side-content" src={logo} alt="" />
                <h1 className="Nav-left-side-content heading"> <Link to="./" > <span className="f-text" >F</span><span className="heading-text">ashionables.com</span> </Link>  </h1>
                <h2 className="Nav-left-side-content "  id="women-text">  <Link to="./Women"><span className="heading-text">Women</span> </Link></h2>
                <h2 className="Nav-left-side-content  "   id="men-text"> <Link to="./Men"><span className="heading-text">Men</span></Link></h2>
            </div>
            

            <div className="Nav-right-side" >
            <Link to="./Cart" >
            <div>
                <h4 className="Nav-right-side-content" ><IoMdCart size="3rem" />{cart.length} </h4>
                <h4 className=" icon-text" >Cart</h4>
             
               

              </div>
            </Link>

            <Link to="./WishList" > <div>
                <h4 className="Nav-right-side-content icon "> <AiFillHeart /> {Wishlist.length}</h4>
                <h4 className=" icon-text"> Wishlist </h4>
              </div> </Link>

              
              
              <div>
                <h4 className="Nav-right-side-content icon"> <CgProfile /> </h4>
                <h4 className=" icon-text"> Profile </h4>
              </div>


          
            </div>


           

            </div>
            

       
    )


 }


 export {Navbar}