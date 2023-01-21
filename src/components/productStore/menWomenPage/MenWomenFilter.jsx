import React from "react";
import { useFilter } from "../../../context/filterContext";
import "../menWomenPage/MenWomenFilter.css"





function MenWomenFilter(){
  const { state,dispatch} = useFilter()
 


    return(
      <div className="filter-main-div" >
        <div className="filter-small-div">


          <h1 className="filters-text"> Filters</h1>
          <fieldset className="clear-button-feildset" >
      
       <button className="clear-button" onClick={()=>dispatch({type:"CLEAR"})} > Clear All Filters </button>
      </fieldset>


      <hr />

      <fieldset>
      <legend>
       Search
        </legend>
       <input value={state.Search} placeholder="Search your Products" onChange={(ev)=>dispatch({type:"SEARCH",payload:ev.target.value})} ></input>
        
          
       
           <div>
             
             
             
           </div>
       

    </fieldset>
    <hr />





    <div className="Price-div">
      <h1>Price</h1>
      <datalist>
        <option value="1000" label="1k"></option>
        <option value="2000" label="2k"></option>
        <option value="3000" label="3k"></option>
        <option value="4000" label="4k"></option>
        <option value="5000" label="5k"></option>
      </datalist>
      <input
        type="range"
        name=""
        class="slider-container"
        step="1000"
        min="1000"
        max="5000"
        value={state.Price}
        onChange={(e) =>
          dispatch({ type: "PRICE", price_value: e.target.value })
        }
      />
    </div>

<hr />


<fieldset className="category-div2">
  <legend>CATEGORY</legend>

  <lable className="category-options">
        
        <input   type="radio"
         onChange={()=>dispatch({type:"CATEGORY",payload:"Shirts"})}
         checked={state.Category==="Shirts"}
          ></input>
        Shirts</lable>
      <lable className="category-options">
          <input  type="radio"
           onChange={()=>dispatch({type:"CATEGORY",payload:"Tshirt"})}
         checked={state.Category==="Tshirt"}
         ></input>Tshirts</lable>
           <lable  className="category-options">
        
        <input type="radio"
         onChange={()=>dispatch({type:"CATEGORY",payload:"Top"})}
         checked={state.Category==="Top"}
          ></input>
        Top</lable>
      <lable className="category-options">
          <input  type="radio"
           onChange={()=>dispatch({type:"CATEGORY",payload:"Dresses"})}
         checked={state.Category==="Dresses"}
         ></input>Dresses</lable>

</fieldset>


<hr />


<fieldset className="idealFor-div">

  <legend>Ideal For</legend>

  <lable className="idealFor-options">
      <input type="checkbox"
       onChange={() => {dispatch({ type:"MEN" })}}
              />
          Men
      </lable>
      <lable className="idealFor-options">
          <input type="checkBox"
           onChange={()=>dispatch({type:"WOMEN"})}
           ></input>Women</lable>


</fieldset>


<hr />

<fieldset className="color-div">

<legend>COLOR</legend>

<lable className="color-options">
  <input type="radio"
   onChange={() => {dispatch({ type:"COLOR" , payload :"Black" })}}
   checked={state.color==="Black"}
          />
      BLACK
  </lable>
  <lable className="color-options">
      <input type="radio"
       onChange={()=>dispatch({type:"COLOR" , payload :"White"})}
   checked={state.color==="White"}

       ></input>WHITE</lable>


</fieldset>

<hr />





<fieldset className="discount-div">
      <legend>DISCOUNT</legend>
        <lable className="discount-options">
        
          
            <input
                
                type="checkbox"
                
                onChange={() => {
                  dispatch({ type: "TEN" });
                }}
              />
         above 10%</lable>



        <lable className="discount-options"><input type="checkBox" onChange={()=>dispatch({type:"TWENTY"})}
      
           ></input>above 20%</lable>
           <lable className="discount-options">
        
          
        <input
            
            type="checkbox"
         
            onChange={() => {
              dispatch({ type: "THIRTY" });
            }}
          />
      above 30%</lable>


    <lable className="discount-options">
      <input type="checkBox"
       onChange={()=>dispatch({type:"FOURTY"})}></input>above 40%</lable>

<lable className="discount-options">
  <input type="checkBox"
onChange={()=>dispatch({type:"FIFTY"})}
   
       ></input>above 50%</lable>
          
       

    </fieldset>


    <hr />



    <fieldset className="ratings-div">
      <legend>RATINGS</legend>
        <lable className="ratings-options">
        
          
            <input
                
                type="checkbox"
                
                onChange={() => {
                  dispatch({ type: "FIVE" });
                }}
              />
         5★ & above</lable>



        <lable className="ratings-options"><input type="checkBox" onChange={()=>dispatch({type:"FOUR"})}
      
           ></input>4★ & above</lable>
           <lable className="ratings-options">
        
          
        <input
            
            type="checkbox"
         
            onChange={() => {
              dispatch({ type: "THREE" });
            }}
          />
      3★ & above</lable>


    <lable className="ratings-options">
      <input type="checkBox"
       onChange={()=>dispatch({type:"TWO"})}></input>2★ & above</lable>

<lable className="ratings-options">
  <input type="checkBox"
onChange={()=>dispatch({type:"ONE"})}
   
       ></input>1★ & above</lable>
          
       

    </fieldset>


    <hr />

    </div>
      </div>
  )
}
export {MenWomenFilter }