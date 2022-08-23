function wishlistReducer(WishlistState,action){
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return { ...WishlistState, Wishlist: [...WishlistState.Wishlist, { ...action.payload }] };
            
            case "REMOVE_FROM_WISHLIST":
                return {
                  ...WishlistState,
                  Wishlist: WishlistState.Wishlist.filter((c) => c.id !== action.payload.id),
                };
        default:
            return WishlistState;
    }
}
export {wishlistReducer}