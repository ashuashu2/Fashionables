import { createContext, useContext, useEffect, useReducer } from "react";
import {cartReducer} from "../ultils/cartReducer"

const CartContext = createContext()

const CartProvider = ({children}) =>{
    function getDataFromLocalStorage1(){
        const getData = localStorage.getItem("Cart")
        return getData ? JSON.parse(getData):[]
    }
function getTotlePrice (){

    const TotlePrice = localStorage.getItem("TotlePrice")
    return TotlePrice ? TotlePrice : 0
}
function getDiscount (){

    const Discount = localStorage.getItem("Discount")
    return Discount ? Discount : 0
}
function getOrignalPrice (){

    const OrignalPrice = localStorage.getItem("OrignalPrice")
    return OrignalPrice ? OrignalPrice : 0
}
    
function getQuantity (){

    const Quantity = localStorage.getItem("Quantity")
    return Quantity ? Quantity : 0
}
    
    const [cartState,cartDispatch] = useReducer(cartReducer,{cart:(getDataFromLocalStorage1()),TotlePrice:(getTotlePrice()),Discount:(getDiscount()),OrignalPrice:(getOrignalPrice()),Quantity:(getQuantity())})

    useEffect(() => {
        localStorage.setItem("Cart",JSON.stringify(cartState.cart))
        localStorage.setItem("TotlePrice",cartState.TotlePrice)
        localStorage.setItem("Discount",cartState.Discount)
        localStorage.setItem("OrignalPrice",cartState.OrignalPrice)
        localStorage.setItem("Quantity",cartState.Quantity)




      }, [cartState])
 
    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => useContext(CartContext)
 export {CartProvider,useCart};