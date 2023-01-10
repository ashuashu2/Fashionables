import React, { useEffect, useState } from "react";

import "../Home/Home.css"

import banner3 from "../images/banner3.webp";
import banner5 from "../images/banner5.webp";
import banner9 from "../images/banner9.jpg";
import banner4 from "../images/banner4.jpg";
import banner7 from "../images/banner7.jpg";

import shopforbanner from "../images/shopforbanner.jpg";
import shopforbanner2 from "../images/shopforbanner2.jpg";
import homedivbanner1 from "../images/homedivbanner1.webp";
import homedivbanner2 from "../images/homedivbanner2.webp";
import homedivbanner3 from "../images/homedivbanner3.webp";
import homedivbanner4 from "../images/homedivbanner4.webp";
import homedivbanner5 from "../images/homedivbanner5.jpg";
import {BsHeadset} from "react-icons/bs"
import {MdLocalShipping} from "react-icons/md"
import {FaMoneyCheckAlt} from "react-icons/fa"
import { Link} from "react-router-dom";




function Home (){
const [allImage,setAllImage]=useState(0)

const [image,setImage]=useState([banner5,banner7,banner3,banner4,banner9])







useEffect(()=>{
setInterval(() => {
setAllImage((allImage=>allImage>3?0:allImage+1))

}, 1500);
},[])
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])





return (
<div>
    <div className="sliders-container">


        <div className="banner-div">
            <img className="slider-images"  src={image[allImage]} alt="" />
            <Link to="/ProductListing"><button className="left-banner-button">Explore Collection</button></Link>



        </div>
    </div>

    
    <div className="categorys-div">
        <h2 className="col59">PASSION FOR FASHION</h2>
        <h1 className="col60">Shop By Categories</h1>
    </div>






    <div className="men-women-container">
        <div className="men-banner-div">
            <img className="men-banner" src={shopforbanner} alt="" />
            <Link to="/Men"><button className="men-shop-now-button"> Shop For Men</button> </Link>
        </div>
        <div className="women-banner-div">
            <img className="women-banner" src={shopforbanner2} alt="" />
            <Link to="./Women"><button className="women-shop-now-button"> Shop For Women</button>
            </Link>

        </div>
        
        </div>

    <div className="trending-items-div" >
        <h1 className="trending-items"> Trending Items </h1>
    </div>




    <div className="homedivbanner-main-div">
        <div className="homedivbanner-div">
            <img className="homedivbanner" width={550} height={350} src={homedivbanner1} alt="" />
            <button className="homedivbanner-button"> Add To Cart </button>
        </div>
        <div className="homedivbanner-div homedivbanner-div2">
            <img className="homedivbanner" width={550} height={350} src={homedivbanner3} alt="" />
            <button className="homedivbanner-button"> Add To Cart </button>
        </div>
        <div className="homedivbanner-div homedivbanner-div3">
            <img className="homedivbanner" width={550} height={350} src={homedivbanner5} alt="" />
            <button className="homedivbanner-button"> Add To Cart </button>
        </div>
        <div className="homedivbanner-div homedivbanner-div2">
            <img className="homedivbanner" width={550} height={350} src={homedivbanner4} alt="" />
            <button className="homedivbanner-button"> Add To Cart </button>
        </div>
        <div className="homedivbanner-div homedivbanner-div5">
            <img className="homedivbanner       homedivbanner-div5-image" width={550} height={350} src={homedivbanner2} alt="" />
            <button className="homedivbanner-button homedivbanner-div5-button"> Add To Cart </button>
        </div>


        
    </div>



    <div className="category-div">
        <h2 className="col59">LETS SHOP</h2>
        <h1 className="col60">New Arrivals</h1>
    </div>





    <div className="policy-div">
        <div className="policies">
            <div className="icons">
                <MdLocalShipping />
            </div>
            <div>
                <h1 className="policy-div-text">Free Shipping</h1>
                <h3 className="policy-div-text">On All Order Over Rs.3000</h3>
            </div>


        </div>
        <div className="lines"></div>
        <div className="policies">
            <div className="icons">
                <BsHeadset />
            </div>
            <div>
                <h1 className="policy-div-text"> Dedicated Support</h1>
                <h3 className="policy-div-text">Quick Response 24/7</h3>
            </div>

        </div>
        <div className="lines"></div>
        <div className="policies">

            <div className="icons">
                <FaMoneyCheckAlt />
            </div>
            <div>
                <h1 className="policy-div-text">Money-back Guarantee</h1>
                <h3 className="policy-div-text">Worry-free Shopping</h3>
            </div>


        </div>

    </div>








</div>



)
}
export {Home}