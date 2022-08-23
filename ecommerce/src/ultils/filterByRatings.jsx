export const filterByRatings = (Data,One,Two,Three,Four,Five) => {
    const newData = []
    if (One){ 
   let newList =   Data.filter((items)=>items.rating >= "1")
    newData.push(...newList)
    }
    if (Two){ 
        let newList =   Data.filter((items)=>items.rating >="2")
         newData.push(...newList)
         }
        
       
    


    if (Three){ 
        let newList =   Data.filter((items)=>items.rating >= "3")
         newData.push(...newList)
         }
        
         
    
    if (Four){ 
        let newList =   Data.filter((items)=>items.rating >= "4")
         newData.push(...newList)
         }
         if (Five){ 
            let newList =   Data.filter((items)=>items.rating >= "5")
             newData.push(...newList)
             }
        

    return newData.length===0 ?Data :newData
 
}
