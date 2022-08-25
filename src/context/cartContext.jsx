import { createContext, useContext, useReducer } from "react";
import {cartReducer} from "../ultils/cartReducer"

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartState,cartDispatch] = useReducer(cartReducer,{cart:[]})
    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => useContext(CartContext)
 export {CartProvider,useCart};