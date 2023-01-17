function cartReducer(cartState,action){
    switch (action.type) {
        case "ADD_TO_CART":
        
                 
                  return { ...cartState, cart: [...cartState.cart, { ...action.payload }],
                  TotlePrice : Number(cartState.TotlePrice) + Number(action.payload.price),
                  OrignalPrice : Number(cartState.OrignalPrice) + Number(action.payload.originalPrice),
                  Discount : Number(cartState.Discount) + Number(action.payload.discountPrice),
                  Quantity : Number(cartState.Quantity) + Number(action.payload.qty)
                };
                 
            
            case "REMOVE_FROM_CART":
                return {
                  ...cartState,
                  cart: cartState.cart.filter((c) => c.id !== action.payload.id),
                  TotlePrice : Number(cartState.TotlePrice) - Number(action.payload.price),
                  OrignalPrice : Number(cartState.OrignalPrice) - Number(action.payload.originalPrice),
                  Discount : Number(cartState.Discount) - Number(action.payload.discountPrice),
                  Quantity : Number(cartState.Quantity) - Number(action.payload.qty)

                };


            case "INCREASE_QUANTITY":
                return {
                  ...cartState,
                  
                  TotlePrice : Number(cartState.TotlePrice) + Number(action.payload.price),
                  OrignalPrice : Number(cartState.OrignalPrice) + Number(action.payload.originalPrice),
                  Discount : Number(cartState.Discount) + Number(action.payload.discountPrice),
                  Quantity : Number(cartState.Quantity) + 1,

                  cart: cartState.cart.map((item) =>
                    item._id === action.payload._id
                      ? { ...item, qty: item.qty + 1 }
                      : item
                  ),
                  
                };
                case "DECREASE_QUANTITY":
                return {
                  ...cartState,
                  
                  TotlePrice : Number(cartState.TotlePrice) - Number(action.payload.price),
                  OrignalPrice : Number(cartState.OrignalPrice) - Number(action.payload.originalPrice),
                  Discount : Number(cartState.Discount) - Number(action.payload.discountPrice),
                  Quantity : Number(cartState.Quantity) - 1,
                  cart: cartState.cart.map((item) =>
                    item._id === action.payload._id
                      ? { ...item, qty: item.qty - 1 }
                      : item
                  ),
                };
        default:
            return cartState;
    }
}
export {cartReducer}