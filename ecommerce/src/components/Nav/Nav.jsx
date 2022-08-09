import React from "react";
import logo from "../images/logo.jpg"
import "../Nav/Nav.css"
import { IoMdCart } from "react-icons/io";
import {AiFillHeart  } from "react-icons/ai";
import {CgProfile } from "react-icons/cg";








 function Navbar (){
    return (
        <div className="Nav-container">
            <div className="Nav-left-side">
                <img  className="Nav-logo Nav-left-side-content" src={logo} alt="" />
                <h1 className="Nav-left-side-content heading"> <span className="f-text" >F</span>ashionables.com</h1>
                <h2 className="Nav-left-side-content "  id="women-text">Women</h2>
                <h2 className="Nav-left-side-content  "   id="men-text">Men</h2>
            </div>
            

            <div className="Nav-right-side" >
              <div>
                <h4 className="Nav-right-side-content" ><IoMdCart size="3rem" /> </h4>
                <h4 className=" icon-text" >Cart</h4>
              </div>
              <div>
                <h4 className="Nav-right-side-content icon "> <AiFillHeart /> </h4>
                <h4 className=" icon-text"> Wishlist </h4>
              </div>
              <div>
                <h4 className="Nav-right-side-content icon"> <CgProfile /> </h4>
                <h4 className=" icon-text"> Profile </h4>
              </div>


          
            </div>


           

            </div>
            

       
    )


 }


 export {Navbar}