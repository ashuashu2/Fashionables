import { createContext, useContext, useReducer } from "react";
import {wishlistReducer} from "../ultils/wishlistReducer"

const WishlistContext = createContext()

const WishlistProvider = ({children}) =>{
    const [WishlistState,WishlistDispatch] = useReducer(wishlistReducer,{Wishlist:[]})
    return (
        <WishlistContext.Provider value={{WishlistState,WishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}
const useWishlist = () => useContext(WishlistContext)
 export {WishlistProvider,useWishlist};