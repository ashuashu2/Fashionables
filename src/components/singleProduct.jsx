import React from "react";
import { Link } from "react-router-dom";
import "../../src/components/singleProduct.css"

import { useCart } from "../context/cartContext";
import { useWishlist } from "../context/wishlistContext";


export function ProductCard( {
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
  <div className="single-product-div">
    <div className="single-product-image-div "> <img className="single-product-image" src={img} alt="" /> </div>
    <div className="single-product-detail">
      <p className=" name">{name}</p>
      <p className=" description1">{description}</p>

      <div className="col-36 ">
        <h2 className="priceMain">Rs{price}</h2>
        <h2 className="orignal-price">Rs{originalPrice}</h2>
        <h3 className="discounts">{discount}% off</h3>
      </div>
      <div className=" single-product-rating-div">
        <div className=" single-product-rating">{`${rating }★/${count}`}</div>
        <h5 className="reviews"> 20K ratings and 500 reviews</h5>
      </div>

      <div className="offers-div">
        <h6 style={{ fontWeight: "bolder" }}> Available offers</h6>
        <div className="offers-div2"> <span class="green-sale-emoji"><img
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /></span>
        </div>
        <p className="offers-div-para">
          Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023 <span className=" know-more"> Know More </span> </p>
        <div className="offers-div2"> <span class="green-sale-emoji"><img
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /></span>
        </div>
        <p className="offers-div-para">
          Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* <span className=" know-more"> Know More </span> </p>
        <div className="offers-div2"> <span class="green-sale-emoji"><img
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /></span>
        </div>
        <p className="offers-div-para">
          Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and
          above <span className=" know-more"> Know More </span></p>
        <div className="offers-div2"> <span class="green-sale-emoji"><img
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /></span>
        </div>
        <p className="offers-div-para">
          Bank Offer5% Cashback on Flipkart Axis Bank Card <span className=" know-more"> Know More </span></p>

      </div>
      <div className=" buttons-div">
        <div className="buttons-div2">
          <div >{cartState.cart.some((p)=>p.id === id)? (
            <Link to="/Cart"><button className="single-product-button"> Go to cart </button> </Link> ) : (
            <button className="single-product-button" onClick={()=>cartDispatch({type: "ADD_TO_CART",payload: {
              id,
              name,
              price,
              originalPrice,

              description,

              img,discount,
              rating,count
              },})}>Add To Cart</button>
            ) }</div>
        </div>


        <div className="single-product-wishlist-div buttons-div2">
          <div>{WishlistState.Wishlist.some((p)=>p.id === id)? (
            <Link to="/Wishlist"><button className="single-product-button"> GO TO WISHLIST </button> </Link> ) : (
            <button className="single-product-button" style={{cursor:"pointer"   }} onClick={()=>WishlistDispatch({type:
              "ADD_TO_WISHLIST",payload:{
              id,
              name,
              price,
              originalPrice,

              description,

              img,discount,
              rating,count
              },})}>Add To Wishlist</button>

            ) }</div>
        </div>
      </div>
    </div>
  </div>
</div>

);
}