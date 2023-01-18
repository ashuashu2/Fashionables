import { EmptyCart } from "../../components/Cart/emptyCart"
import { useCart } from "../../context/cartContext"
import "../Checkout/Checkout.css"

const Checkout = () => {
    const {cartState: { cart,TotlePrice,Discount ,OrignalPrice}} = useCart()

    return (
      <div className="checkout-page-container"> 
        {cart.length < 1 ? ( <EmptyCart/> ) : (
            <div className="checkout-page-small-div">
                
                <h2 className="order-detail">Order Details</h2>
                <hr />
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
                <h5 className=" adresses-content ">Ashutosh Birthare</h5>
                <h5 className=" adresses-content ">Jaat Moholla  </h5>
                <h5 className=" adresses-content ">Guna 473001</h5>
                <h5 className=" adresses-content ">9179910419</h5>


                

                </div>
                <div className="checkout-page-pay-button-div"><button className="checkout-page-pay-button"> Place Order </button></div>
                

             </div>
        )  }

      </div>
    )
}
export { Checkout }