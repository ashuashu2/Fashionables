import React from "react";
import { useCart } from "../../context/cartContext";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../Cart/cart.css"
function Cart (){
    const {cartDispatch} = useCart()
 

    const {cartState: { cart,TotlePrice,Discount ,OrignalPrice}}  = useCart()
    
    return (
        <div>



            <div className="main-container"> 
                <div className="items-container">
                    <div>
                         
                {cart.map((cart)=>( 
        <div className="container">
            <div className="cart-item-details"> 
                      <div> <img className="image"   height={150} width={130} src={cart.img} alt="" /> </div>
                      <div>
                      <h4> {cart.name} </h4>
                      <div>{cart.description1}</div>

                      <div>
                        <div className="prices-div" >
            <div className="price-content price1"> RS.{cart.price } </div>
            <div className="price-content price2 "> {cart.originalPrice} </div>
            <div className="price-content discount"> ({cart.discount}%) </div>
        </div>
        <Link to={`/ProductDetail/${cart.id}`}> <button className="card-button" style={{margin:"2rem"}}> view detils</button> </Link>


                      </div>
         
            </div>
                      
                      <div className="deivery-date"> <small >Delivery by <span>{cart.Date}</span> |  Free <span className="free-delivery"> ₹40</span>  </small></div>

             </div>
             <button  className="x-button" onClick={() =>{cartDispatch({type: "REMOVE_FROM_CART",payload: cart,})
            toast.success(" Removed From Cart !");
            }}><TiDeleteOutline /></button>


        </div>


                ))}
           

                    </div>
                </div>












                <div className="items-details">
                    

                    <h1>Price Details</h1>
                    <hr style={{backgroundColor:"white"}} />
                    <h4 className="details-name">Orignal Price <span className="span-div">{OrignalPrice}</span> </h4>
                    <h4 className="details-name">Discounts On Price  <span className="span-div">{Discount}</span></h4>
                    <h4 className="details-name">Coupon Discount <span className="span-div">Applied </span> </h4>
                    <h4 className="details-name">Delivery <span className="span-div"> Free </span></h4>
                    <hr style={{backgroundColor:"white"}} />

                    <h4 className="details-name">Final Price  <span className="span-div">{TotlePrice}</span> </h4>
                    
                    
                    </div>
            </div>






           
           
        </div>
    )
}
export {Cart}