import React, { createContext, useContext} from "react";
import { useEffect, useState } from "react"

import axios from "axios"



const StoreContext = createContext()







const StoreProvider = ({ children }) => {


    const[storeData,setStoreData] = useState([])
    useEffect(() => {
        return (async function () {
          const response = await axios.get("/api/products");
          setStoreData(response.data.products);
          
        })();
      }, []);

    return (<StoreContext.Provider value={{storeData,setStoreData}}>
      {children}
      </StoreContext.Provider>)
};



const useStore = () => useContext(StoreContext);

export { useStore, StoreProvider };