import { createContext, useContext, useEffect, useReducer } from "react";
import {cartReducer} from "../ultils/cartReducer"

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const cartFromLocalStorage= JSON.parse(localStorage.getItem('cart') || '[]' )
    
    
    const [cartState,cartDispatch] = useReducer(cartReducer,{cart:[cartFromLocalStorage]})
    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cartState))
        
      
       
      
    }, [cartState])
    console.log(JSON.parse(localStorage.getItem( "cart")))
    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => useContext(CartContext)
 export {CartProvider,useCart};