function cartReducer(cartState,action){
    switch (action.type) {
        case "ADD_TO_CART":
        
                 
                  return { ...cartState, cart: [...cartState.cart, { ...action.payload }],
                  TotlePrice : cartState.TotlePrice + Number(action.payload.price),
                  OrignalPrice : cartState.OrignalPrice + Number(action.payload.originalPrice),
                  Discount : cartState.Discount + Number(action.payload.discountPrice)
                };
                 
            
            case "REMOVE_FROM_CART":
                return {
                  ...cartState,
                  cart: cartState.cart.filter((c) => c.id !== action.payload.id),
                  TotlePrice : cartState.TotlePrice - Number(action.payload.price),
                  OrignalPrice : cartState.OrignalPrice - Number(action.payload.originalPrice),
                  Discount : cartState.Discount - Number(action.payload.discountPrice)
                };
        default:
            return cartState;
    }
}
export {cartReducer}