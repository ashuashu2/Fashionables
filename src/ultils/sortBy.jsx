const filterBySort = (products,sortBy) => {
    switch (sortBy) {
        case "PRICE_HIGH_TO_LOW":
       return products.sort((a,b) => b.price-a.price)     
        case "PRICE_LOW_TO_HIGH":
            return products.sort((a,b) => a.price-b.price) 
        case "RATING_HIGH_TO_LOW":
          return products.sort((a,b) => b.rating-a.rating)      
        case "RATING_LOW_TO_HIGH":
           return products.sort((a,b) => a.rating-b.rating)  
 
        case "DEFAULT":
            return products
        default:
         return products
    }
 }
 
 export {filterBySort}