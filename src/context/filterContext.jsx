import { createContext, useContext, useReducer } from "react";
import {reducerFunction} from "../ultils/filterReducer"

const FilterContext = createContext()

const FilterProvider = ({children})=>{

    
    const [state,dispatch]=useReducer(reducerFunction,{
    sortBy:"RATING_LOW_TO_HIGH",
    Price:100,
    Search:"",
    color:"",
    Category :"",
    IdealFor:{Men: false,Women:false},
    Discounts:{Ten:false,Twenty:false,Thirty:false,Fourty:false,Fifty:false},
    Ratings:{One:false,Two:false,Three:false,Four:false,Five:false}


})


    return (<FilterContext.Provider value={{state,dispatch}} >
            {children}
            </FilterContext.Provider>
    )


}



const useFilter =()=> useContext(FilterContext)
export {FilterProvider,useFilter}