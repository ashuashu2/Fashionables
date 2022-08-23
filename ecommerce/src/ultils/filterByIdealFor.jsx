export const filterByIdealFor = (Data,Men,Women) => {
    const newData = []
    if (Men){ 
   let newList =   Data.filter((items)=>items.idealFor === "Men")
    newData.push(...newList)
    }
    if (Women){ 
        let newList =   Data.filter((items)=>items.idealFor === "Women")
         newData.push(...newList)
         }
        

    return newData.length===0 ?Data :newData
 
}
