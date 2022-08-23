export const filterByDiscounts = (Data,Ten,Twenty,Thirty,Fourty,Fifty) => {
    const newData = []
    if (Ten){ 
   let newList =   Data.filter((items)=>items.discount >= "10")
    newData.push(...newList)
    }
    if (Twenty){ 
        let newList =   Data.filter((items)=>items.discount >="20")
         newData.push(...newList)
         }
        
       
    


    if (Thirty){ 
        let newList =   Data.filter((items)=>items.discount >= "30")
         newData.push(...newList)
         }
        
         
    
    if (Fourty){ 
        let newList =   Data.filter((items)=>items.discount >= "40")
         newData.push(...newList)
         }
         if (Fifty){ 
            let newList =   Data.filter((items)=>items.discount >= "50")
             newData.push(...newList)
             }
        

    return newData.length===0 ?Data :newData
 
}
