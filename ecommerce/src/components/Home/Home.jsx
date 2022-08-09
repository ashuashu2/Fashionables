import React, { useEffect, useState } from "react";
import "../Home/Home.css"
import  leftbanner from "../images/leftbanner.webp";
import  banner2  from "../images/banner2.png";
import  banner3  from "../images/banner3.webp";
import  banner5 from "../images/banner5.webp";
import  banner61  from "../images/banner61.jpg";
import  banner4  from "../images/banner4.jpg";
import  allshoppingbanner from "../images/allshoppingbanner.jpeg";
// import  banner7  from "../images/banner7.jpg";
import  banner8  from "../images/banner8.webp";
// import  banner9 from "../images/banner9.jpg";
import  mensbanner  from "../images/mensbanner.webp";
import  womenbanner from "../images/womenbanner.webp";



function Home (){
    const [allImage,setAllImage]=useState(0)

    const [image,setImage]=useState([banner2,banner4,banner3,banner61,banner5])







useEffect(()=>{
    setInterval(() => {
        setAllImage((allImage=>allImage>3?0:allImage+1))
        
    }, 2000);
},[])






    return ( 
        <>  <div className="slider-container">

                <div>
                    <img width={850} height={550} className="left-banner"   src={leftbanner} alt="" />
                    <button className="left-banner-button" >Explore Collection</button>
                </div>

                <div>
                    <img width={500} height={550} src={image[allImage]} alt="" />

                </div>
        </div>


        <div>  <img className="banner8"  width={850} height={550} src={banner8} alt="" /> </div>






        <div className="men-women-container" >
            <div >
                 <img  className="men-banner" width={650} height={550} src={mensbanner} alt="" /> 
                 <button className="men-shop-now-button"> Shop Now</button>
            </div>
            <div >
                 <img  className="women-banner" width={650} height={550} src={womenbanner} alt="" /> 
                 <button className="women-shop-now-button" > Shop Now</button>
            </div>
            
        </div>
        <div > <img width={400} height={400} src={allshoppingbanner} alt="" /> </div>










</>

        

    )
}
export {Home}