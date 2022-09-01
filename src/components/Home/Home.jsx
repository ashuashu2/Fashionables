import React, { useEffect, useState } from "react";

import "../Home/Home.css"
import  leftbanner from "../images/leftbanner.webp";
import  banner2  from "../images/banner2.png";
import  banner3  from "../images/banner3.webp";
import  banner5 from "../images/banner5.webp";
import  banner9  from "../images/banner9.jpg";
import  banner4  from "../images/banner4.jpg";
import  allshoppingbanner from "../images/allshoppingbanner.jpeg";
import  banner8  from "../images/banner8.webp";
import  mensbanner  from "../images/mensbanner.webp";
import  womenbanner from "../images/womenbanner.webp";
import {BsHeadset} from "react-icons/bs"
import {MdLocalShipping} from "react-icons/md"
import {FaMoneyCheckAlt} from "react-icons/fa"
import { Link} from "react-router-dom";




function Home (){
    const [allImage,setAllImage]=useState(0)

    const [image,setImage]=useState([banner5,banner4,banner3,banner9])







useEffect(()=>{
    setInterval(() => {
        setAllImage((allImage=>allImage>2?0:allImage+1))
        
    }, 1500);
},[])






    return ( 
        <div  >
          <div className="sliders-container"> 

               
                <div className="banner-div">
                    <img className="slider-images" width={1300} height={550} src={image[allImage]} alt="" />
                    <Link to="/ProductListing" ><button className="left-banner-button" >Explore Collection</button></Link>

                   

                </div>
        </div>


      

        <div>  <img className="banner8"  width={550} height={350} src={banner8} alt="" /> </div>

        <div className="category-div">
            <h2 className="col59">PASSION FOR FASHION</h2>
            <h1 className="col60">Shop By Categories</h1>
        </div>






        <div className="men-women-container" >


        <div className="explore-banner-div"> 
            <img className="explore-banner"   width={600} height={500} src={allshoppingbanner} alt="" />
            <Link to="/ProductListing" ><button className="explore-button">Explore all collection</button></Link>
            
    
        </div>
            <div className="men-banner-div">
                 <img className="men-banner"  width={500} height={300} src={mensbanner} alt="" /> 
                 <Link to="./Men"><button className="men-shop-now-button"> Shop For Men</button> </Link>
                 
            </div>
            <div className="women-banner-div">
                 <img  className="women-banner" width={500} height={300} src={womenbanner} alt="" /> 
                 <Link to="./Women"><button className="women-shop-now-button" > Shop For Women</button>
 </Link>
            </div>
        
         </div>


         <div className="category-div">
            <h2 className="col59">LETS SHOP</h2>
            <h1 className="col60">New Arrivals</h1>
        </div>





        <div className="policy-div">
            <div className="policies">
                <div className="icons"> <MdLocalShipping /> </div>
                <div><h1>Free Shipping</h1>
                <h3>On All Order Over Rs.3000</h3></div>
                

            </div>
            <div  className="lines"></div>
            <div  className="policies">
                <div className="icons"><BsHeadset /> </div>
                <div>
                <h1>  Dedicated Support</h1>
                <h3>Quick Response 24/7</h3>
                </div>
               
            </div>
            <div  className="lines"></div>
            <div  className="policies">

                <div className="icons"> <FaMoneyCheckAlt /></div>
                <div><h1>Money-back Guarantee</h1>
                <h3>Worry-free Shopping</h3></div>
                

            </div>
            
        </div>








</div>

        

    )
}
export {Home}