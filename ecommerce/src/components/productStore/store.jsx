import "../productStore/store.css"
import { useStore } from "../../context/storeContext"
import { useCart } from "../../context/cartContext"

import { AiOutlineHeart } from "react-icons/ai";

import { useFilter } from "../../context/filterContext";

import { filterBySearch } from "../../ultils/searchFilter";
import { filterByColor } from "../../ultils/filterByColor";
import { filterByPrice } from "../../ultils/filterByPrice";
import { filterByCategory } from "../../ultils/filterByCategory";
import { filterByIdealFor } from "../../ultils/filterByIdealFor";
import { filterByDiscounts } from "../../ultils/filterByDiscounts";
import { filterByRatings } from "../../ultils/filterByRatings";
import { filterBySort } from "../../ultils/sortBy";
import { useWishlist } from "../../context/wishlistContext";
import { Link} from "react-router-dom";





function Store ( ){
    const {storeData}=useStore()
    const {state,dispatch} = useFilter()
    const {cartDispatch} = useCart()
    const {WishlistDispatch} = useWishlist()



  
 


 


    
const filterDataBySortBy = filterBySort(storeData,state.sortBy)
  const filterDataByColor= filterByColor(filterDataBySortBy,state.color)
  const filterDataBySearch = filterBySearch(filterDataByColor,state.Search)
  const filterDataByPrice = filterByPrice(filterDataBySearch,state.Price)
  const filterDataByCategory = filterByCategory(filterDataByPrice,state.Category)
  const filterDataByIdealFor = filterByIdealFor(filterDataByCategory,state.IdealFor.Men,state.IdealFor.Women)
  const filterDataByDiscount = filterByDiscounts(filterDataByIdealFor,state.Discounts.Ten,state.Discounts.Twenty,state.Discounts.Thirty,state.Discounts.Fourty,state.Discounts.Fifty);
  const filterDataByRatings = filterByRatings(filterDataByDiscount,state.Ratings.One,state.Ratings.Two,state.Ratings.Three,state.Ratings.Four,state.Ratings.Five);

   const finalFilterData = filterDataByRatings


  


    return(
        <div >


<div  >
            <select name="PRICE"  className="selection-box" onChange = {(e)=> dispatch({type:"SORT_BY",payload: e.target.value})}>
                <option checked value="DEFAULT">Default</option>
                <option value="PRICE_HIGH_TO_LOW">Price: High To Low</option>
                <option value="PRICE_LOW_TO_HIGH">Price:Low To High</option>
                <option value="RATING_HIGH_TO_LOW">Rating: High To Low</option>
                <option value="RATING_LOW_TO_HIGH">Rating:Low To High</option>
            </select>
        </div>

     

        
           <div className="products-div" >
             { finalFilterData.map((user,{id}) =>
           <div key={id} >
            <div>
        <div className="image"> <img   height={300} width={300} src={user.img} alt="" /> </div>
        <div>{user.newArrival && <span>NEW</span>}</div>
        <div>{`${user.rating}/${user.count}`}</div>
        <div> { <AiOutlineHeart />} </div>
     
    </div>
            <div > {user.name} </div>
            <div> {user.description} </div>
            <div>
            <div> {user.price} </div>
            <div> {user.originalPrice} </div>
            <div> {user.discount} </div>

            </div>
            <Link to={`/ProductDetail/${user.id}`}>view detils</Link>
            
            <div><button   onClick={() =>cartDispatch({type: "ADD_TO_CART",payload: user,})}>add to cart</button></div>



            <div><button  onClick={() =>WishlistDispatch({type: "ADD_TO_WISHLIST",payload: user,})}>ADD_TO_WISHLIST </button></div>
            </div>

            )} </div>

        </div>
    )

    
  





}
export {Store}