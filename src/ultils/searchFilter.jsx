function filterBySearch(Data,value){
   
    
        if(value){
          return Data.filter(item => item.name.toLowerCase().includes(value) )
          }else{
              return Data
          }
    
      }
export {filterBySearch}