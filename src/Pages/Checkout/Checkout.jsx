import { useState } from "react"
import { EmptyCart } from "../../components/Cart/emptyCart"
import { useCart } from "../../context/cartContext"
import { AddressModal } from "../AdressModal/AdressModal"
import "../Checkout/Checkout.css"
import { BiEditAlt } from 'react-icons/bi';

const Checkout = () => {
    const {cartState: { cart,TotlePrice,Discount ,OrignalPrice}} = useCart()
    const [ showModal , setShowModal ] = useState (false)
    const [newAdd, setNewAdd] = useState({
        FirstName: "Ashutosh",
        LastName: "Birthare",
        Address: "Jaat Moholla ",
        City: "Guna",
        Pincode : 473001,
        MobileNumber: 9179910419,
      });




    const EditClickHandler = () =>{
        setShowModal(true)
    }
    

    return (
      <div className="checkout-page-container"> 
      <div className="address-modal-div"> { showModal ? <AddressModal setShowModal={setShowModal} setNewAdd={setNewAdd} /> : "" } </div>

        {cart.length < 1 ? ( <EmptyCart/> ) : (
            <div className="checkout-page-small-div">
                
                <h2 className="order-detail">Order Details</h2>
                <hr />
                <div className="order-detail-name-div">
                    <h2 className="order-detail-name">Name Of Products</h2>
                    <h2 className="order-detail-quantity"> Quantity </h2>
                </div>
                <div className="order-detail-items-div" > { cart.map((item)=>(
                    <div className="order-detail-items-div2"> 
                        <li className="order-detail-item-name"> { ` ${item.name}${item.description1} ` } </li>
                    <li className="order-detail-item-qty">{item.qty}</li>
                    </div>
                    
                )) } 
                </div>
                <hr />
                <div className="checkout-page-price-div">
                    <h2 className="checkout-page-price-detail"> Price Details </h2> 
                    <hr />
                    <h5 className="checkout-page-orignal-price checkout-prices" >Orignal Price <span className="checkout-page-span-text"> {OrignalPrice} </span> </h5>
                    <h5 className="checkout-page-discount-price checkout-prices" >Discounts On Price <span className="checkout-page-span-text checkout-span-discount"> -{Discount} </span> </h5>
                    <h5 className="checkout-page-coupon checkout-prices" >Coupon Discount <span className="checkout-page-span-text"> Applied </span>  </h5>
                    <h5 className="checkout-page-delivery checkout-prices" >Delivery <span className="checkout-page-span-text"> Free </span> </h5>
                    <hr />
                    
                    <h4 className="checkout-page-final-price checkout-prices" >Final Price <span className="checkout-page-span-text">{TotlePrice} </span> </h4>

                </div>
                <hr />
                <div className="checkout-page-address-div">
                <h2 className="checkout-page-deliver-address"> Delivery Address </h2>
                <hr />
                <div className=" edit-icon-div"> <h5 className=" adresses-content address-name"> {`${newAdd.FirstName}   ${newAdd.LastName}`}</h5> <span  onClick={EditClickHandler} className=" edit-icon-button"> {<BiEditAlt />}</span> </div>
               
                <h5 className=" adresses-content ">{newAdd.Address}  </h5>
                <h5 className=" adresses-content ">{`${newAdd.City}    ${newAdd.Pincode}`} </h5>
                <h5 className=" adresses-content ">{newAdd.MobileNumber} </h5>


                

                </div>
                <div className="checkout-page-pay-button-div"><button className="checkout-page-pay-button"> Place Order </button></div>
                

             </div>
        )  }

      </div>
    )
}
export { Checkout }