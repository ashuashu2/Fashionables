import { createContext, useContext, useEffect, useReducer } from "react";
import {cartReducer} from "../ultils/cartReducer"

const CartContext = createContext()

const CartProvider = ({children}) =>{
    function getDataFromLocalStorage1(){
        const getData = localStorage.getItem("Cart")
        return getData ? JSON.parse(getData):[]
    }

    
    
    const [cartState,cartDispatch] = useReducer(cartReducer,{cart:(getDataFromLocalStorage1()),TotlePrice:0,Discount:0 ,OrignalPrice:0})

    useEffect(() => {
        localStorage.setItem("Cart",JSON.stringify(cartState.cart))
      }, [cartState])
 
    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => useContext(CartContext)
 export {CartProvider,useCart};