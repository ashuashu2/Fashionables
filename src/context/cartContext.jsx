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
    
    
    const [cartState,cartDispatch] = useReducer(cartReducer,{cart:(getDataFromLocalStorage1()),TotlePrice:(getTotlePrice()),Discount:(getDiscount()),OrignalPrice:(getOrignalPrice())})

    useEffect(() => {
        localStorage.setItem("Cart",JSON.stringify(cartState.cart))
        localStorage.setItem("TotlePrice",cartState.TotlePrice)
        localStorage.setItem("Discount",cartState.Discount)
        localStorage.setItem("OrignalPrice",cartState.OrignalPrice)



      }, [cartState])
 
    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => useContext(CartContext)
 export {CartProvider,useCart};