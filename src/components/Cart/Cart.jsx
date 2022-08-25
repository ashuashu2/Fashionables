import React from "react";
import { useCart } from "../../context/cartContext";
function Cart (){

    const {cartState: { cart }}  = useCart()
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map((prod)=>( 
                    <div> 
                        <h1>{prod.name}</h1>
                    <h1>{prod.price}</h1>
                    <h1>{prod.description}</h1>
                    </div>
                   


                ))}
            </div>

        </div>
    )
}
export {Cart}