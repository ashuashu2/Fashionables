function cartReducer(cartState,action){
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...cartState, cart: [...cartState.cart, { ...action.payload }] };
            
            case "REMOVE_FROM_CART":
                return {
                  ...cartState,
                  cart: cartState.cart.filter((c) => c.id !== action.payload.id),
                };
        default:
            return cartState;
    }
}
export {cartReducer}