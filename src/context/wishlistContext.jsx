import { createContext, useContext, useEffect, useReducer } from "react";
import {wishlistReducer} from "../ultils/wishlistReducer"

const WishlistContext = createContext()

const WishlistProvider = ({children}) =>{

    function getDataFromLocalStorage2(){
        const getData = localStorage.getItem("WishList")
        return getData ? JSON.parse(getData):[]
    }

    const [WishlistState,WishlistDispatch] = useReducer(wishlistReducer,{Wishlist:getDataFromLocalStorage2()})

    useEffect(() => {
        localStorage.setItem("WishList",JSON.stringify(WishlistState.Wishlist))
      }, [WishlistState])
      
      
      


    return (
        <WishlistContext.Provider value={{WishlistState,WishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}
const useWishlist = () => useContext(WishlistContext)
 export {WishlistProvider,useWishlist};