import React from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import "../../src/components/singleProduct.css"

import { useCart } from "../context/cartContext";
import { useWishlist } from "../context/wishlistContext";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

export function ProductCard(  {
  id,
  name,
  price,
  originalPrice,

  description,

  img,discount,
  rating,count
}) {


  const { cartState,cartDispatch} = useCart()
  const {WishlistDispatch,WishlistState} = useWishlist()


  return (
    <div>
      <div className="single-product-div" >
        <div className="single-product-containts"> <img  height={500} width={500}  src={img} alt="" /> </div>
        <div className="single-product-detail">
          <h1 className="single-product-containts name">{name}</h1> 
          <p className="single-product-containts description1">{description}</p>
          <h1 className="single-product-containts priceMain">Rs.{price}</h1>
              <div className="single-product-containts col-36 " >
                 <h2 className="orignal-price">Rs{originalPrice}</h2>
                <h3 className="discounts">{discount}%</h3>
             </div>
             <div className="single-product-containts">{`${rating }★/${count}`}</div>
             <div className="single-product-containts buttons-div">
              <div> <div>{cartState.cart.some((p)=>p.id === id)? ( <Link to="/Cart"><button className="cards-button"> Go to cart </button> </Link>  ) : (
            <button  className="cards-button"  onClick={() =>cartDispatch({type: "ADD_TO_CART",payload: {
              id,
              name,
              price,
              originalPrice,
            
              description,
            
              img,discount,
              rating,count
            },})}>Add To Cart</button>
        )  }</div>
        </div>


              <div className="single-product-containts">   
              <div >{WishlistState.Wishlist.some((p)=>p.id === id)? ( <Link to="/Wishlist"><button className="cards-button"> GO TO WISHLIST </button> </Link>  ) : (
                        <div  className="cards-button" style={{cursor:"pointer"   }} onClick={() =>WishlistDispatch({type: "ADD_TO_WISHLIST",payload:{
                          id,
                          name,
                          price,
                          originalPrice,
                        
                          description,
                        
                          img,discount,
                          rating,count
                        },})}>  ADD TO WISHLIST   </div>

        )  }</div>  </div> 
              </div>
        </div>
      </div>
    </div>

  );
}
