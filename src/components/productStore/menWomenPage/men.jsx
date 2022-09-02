import { useStore } from "../../../context/storeContext";
import { IoMdCart } from "react-icons/io";

import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MenWomenFilter } from "./MenWomenFilter";
import { useCart } from "../../../context/cartContext";
import { useWishlist } from "../../../context/wishlistContext";
import {Link} from "react-router-dom"

import { filterBySearch } from "../../../ultils/searchFilter";
import { filterByColor } from "../../../ultils/filterByColor";
import { filterByPrice } from "../../../ultils/filterByPrice";
import { filterByCategory } from "../../../ultils/filterByCategory";
import { filterByIdealFor } from "../../../ultils/filterByIdealFor";
import { filterByDiscounts } from "../../../ultils/filterByDiscounts";
import { filterByRatings } from "../../../ultils/filterByRatings";
import { filterBySort } from "../../../ultils/sortBy";
import { useFilter } from "../../../context/filterContext";


 
function MenClothes(){
    const {storeData} = useStore()
    const { cartState,cartDispatch} = useCart()
    const {state,dispatch} = useFilter()

    const {WishlistDispatch,WishlistState} = useWishlist()

    function findMen(storeData) {
        return storeData.filter((item)=>item.idealFor==="Men")

        
    }
    const product = findMen(storeData);

        
const filterDataBySortBy = filterBySort(product,state.sortBy)
const filterDataByColor= filterByColor(filterDataBySortBy,state.color)
const filterDataBySearch = filterBySearch(filterDataByColor,state.Search)
const filterDataByPrice = filterByPrice(filterDataBySearch,state.Price)
const filterDataByCategory = filterByCategory(filterDataByPrice,state.Category)
const filterDataByIdealFor = filterByIdealFor(filterDataByCategory,state.IdealFor.Men,state.IdealFor.Women)
const filterDataByDiscount = filterByDiscounts(filterDataByIdealFor,state.Discounts.Ten,state.Discounts.Twenty,state.Discounts.Thirty,state.Discounts.Fourty,state.Discounts.Fifty);
const filterDataByRatings = filterByRatings(filterDataByDiscount,state.Ratings.One,state.Ratings.Two,state.Ratings.Three,state.Ratings.Four,state.Ratings.Five);

 const finalFilterData = filterDataByRatings






 
    
    return(
        <div>
            <div className="sort-div"  >
            <select name="PRICE"  className="selection-box" onChange = {(e)=> dispatch({type:"SORT_BY",payload: e.target.value})}>
                <option  value="DEFAULT">Default</option>
                <option value="PRICE_HIGH_TO_LOW">Price: High To Low</option>
                <option value="PRICE_LOW_TO_HIGH">Price:Low To High</option>
                <option value="RATING_HIGH_TO_LOW">Rating: High To Low</option>
                <option value="RATING_LOW_TO_HIGH">Rating:Low To High</option>
            </select>
        </div>

            <div className="bigger-div">
                <div className="filter-div"  style={{width: "17%"}}  ><MenWomenFilter /> </div>
                <div>
                <div className="products-div" >
             { finalFilterData.map((user,{id}) =>
           <div key={id} className="card-div" >
    <div> 
        <div  className="image-div" > <img className="image"   height={300} width={270} src={user.img} alt="" />

        <div className="heart-div">

        <div>{WishlistState.Wishlist.some((p)=>p.id === user.id)? ( <Link to="/Wishlist"><button className="card-button"> <BsFillHeartFill /></button> </Link>  ) : (
                        <div  onClick={() =>{ WishlistDispatch({type: "ADD_TO_WISHLIST",payload: user,}); toast.success("Added To WishList !")  }}> { <AiOutlineHeart />} </div>

        )  }</div>




         </div>
        
        <div className="new-badge">{user.newArrival && <span>NEW</span>}</div>
        <div className="rating-div">{`★${user.rating }/${user.count}`}</div>
         </div>
        <div>
    </div>
            <h4 className="name-heading"> {user.name} </h4>
            <h5 className="description"> {user.description1} </h5>
            <div className="price-div">
            <div className="price-content price1"> RS.{user.price } </div>
            <div className="price-content price2"> {user.originalPrice} </div>
            <div className="price-content discount"> ({user.discount}%) </div>
    </div>
    <div className="button-div">


        <div>{cartState.cart.some((p)=>p.id === user.id)? ( <Link to="/Cart"><button className="card-button"> <IoMdCart/>Go to cart </button> </Link>  ) : (
            <button  className="card-button"  onClick={() =>{
                cartDispatch({type: "ADD_TO_CART",payload: user,});
                toast.success(" Added To Cart !");
              }}> <IoMdCart/>Add To cart</button>
        )  }</div>







       
            <Link to={`/ProductDetail/${user.id}`}> <button className="card-button"> view detils</button> </Link>

            </div>
    </div>
            
            
            
            
            



            </div>

            )} </div>
                </div>
            
          
            </div>
         
         
        </div>
    )

}
export {MenClothes}