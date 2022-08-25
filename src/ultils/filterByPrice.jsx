export const filterByPrice = (Data,Price) => {
    return Data.filter((items)=>items.price >= Price)
 
}
