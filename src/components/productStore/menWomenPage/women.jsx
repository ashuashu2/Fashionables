import { useStore } from "../../../context/storeContext";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "../../../context/cartContext";
import { BsFillHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../menWomenPage/menWomenPage.css"
import { useWishlist } from "../../../context/wishlistContext";
import { MenWomenFilter } from "./MenWomenFilter";
import { filterBySearch } from "../../../ultils/searchFilter";
import { filterByColor } from "../../../ultils/filterByColor";
import { filterByPrice } from "../../../ultils/filterByPrice";
import { filterByCategory } from "../../../ultils/filterByCategory";
import { filterByIdealFor } from "../../../ultils/filterByIdealFor";
import { filterByDiscounts } from "../../../ultils/filterByDiscounts";
import { filterByRatings } from "../../../ultils/filterByRatings";
import { filterBySort } from "../../../ultils/sortBy";
import { useFilter } from "../../../context/filterContext";
import {Link} from "react-router-dom"
import { useAuth } from "../../../context/authContext";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";


import { useEffect,useState } from "react";


function WomenClothes(){
const [ isOpen ,setIsOpen ] = useState(false)

const {storeData} = useStore()
const {cartDispatch,cartState} = useCart()
const {WishlistDispatch,WishlistState} = useWishlist()
const {state,dispatch} = useFilter()
const { isLoggedIn } = useAuth()

const hamburgerHandler2=()=>{
    setIsOpen(!isOpen)
     }


useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


function AddtoCartHandler(user){
if(isLoggedIn.login){
cartDispatch({type: "ADD_TO_CART",payload: user,});
toast.success(" Added To Cart !")

}
else
{
toast.error(" please login first!")

}




}

function AddtoWishlistHandler(user){
if(isLoggedIn.login){
WishlistDispatch({type: "ADD_TO_WISHLIST",payload: user,});
toast.success("Added To WishList!")

}
else
{
toast.error(" please login first!")

}




}

function findWomen(storeData) {
return storeData.filter((item)=>item.idealFor==="Women")


}
const product = findWomen(storeData);


const filterDataBySortBy = filterBySort(product,state.sortBy)
const filterDataByColor= filterByColor(filterDataBySortBy,state.color)
const filterDataBySearch = filterBySearch(filterDataByColor,state.Search)
const filterDataByPrice = filterByPrice(filterDataBySearch,state.Price)
const filterDataByCategory = filterByCategory(filterDataByPrice,state.Category)
const filterDataByIdealFor = filterByIdealFor(filterDataByCategory,state.IdealFor.Men,state.IdealFor.Women)
const filterDataByDiscount =
filterByDiscounts(filterDataByIdealFor,state.Discounts.Ten,state.Discounts.Twenty,state.Discounts.Thirty,state.Discounts.Fourty,state.Discounts.Fifty);
const filterDataByRatings =
filterByRatings(filterDataByDiscount,state.Ratings.One,state.Ratings.Two,state.Ratings.Three,state.Ratings.Four,state.Ratings.Five);

const finalFilterData = filterDataByRatings




return(
<div>
    <div className="sort-div2">
        <select name="PRICE" className="selection-box2" onChange={(e)=> dispatch({type:"SORT_BY",payload:
            e.target.value})}>
            <option value="DEFAULT">Default</option>
            <option value="PRICE_HIGH_TO_LOW">Price: High To Low</option>
            <option value="PRICE_LOW_TO_HIGH">Price:Low To High</option>
            <option value="RATING_HIGH_TO_LOW">Rating: High To Low</option>
            <option value="RATING_LOW_TO_HIGH">Rating:Low To High</option>
        </select>
        <div className="hamburger2">
                    {  isOpen ?
                     <div onClick={hamburgerHandler2} >
                         <h1 className="cross-icon"> <ImCross /> </h1>
                    </div> :
                    <div onClick={hamburgerHandler2} >
                        <h1><GiHamburgerMenu />
                        </h1>
                    </div> }
     </div>
    </div>
    <div className="bigger-div2">
        <div className={isOpen ?  "men-women-filter-div2" : "men-women-filter-div"} >
            <MenWomenFilter />
        </div>
        <div className= "products-main-div">
            <div className="products-div">
                { finalFilterData.map((user,{id}) =>
                <div key={id} className="card-div">
                    <div className="card-div2">


                        <div className="image-div">
                            <Link to={`/ProductDetail/${user.id}`}> <img className="image" 
                                src={user.img} alt="" />
                            </Link>



                            <div className="heart-div">

                                <div>{WishlistState.Wishlist.some((p)=>p.id === user.id)? (
                                    <Link to="/Wishlist"><button className="card-button">
                                        <BsFillHeartFill /></button> </Link> ) : (
                                    <div onClick={()=>{ AddtoWishlistHandler(user) }}> {
                                        <AiOutlineHeart />} </div>

                                    ) }</div>




                            </div>


                            <div className="new-badge">{user.newArrival && <span>NEW</span>}</div>
                            <div className="rating-div">{`${user.rating }★/${user.count}`}</div>
                        </div>

                    </div>
                    <div className="details-div">
                        <div className="details2-div">
                            <h4 className="name-heading"> {user.name} </h4>
                            <h5 className="description"> {user.description1} </h5>
                            <div className="price-div">
                                <div className="price-content price1"> RS.{user.price } </div>
                                <div className="price-content price2"> {user.originalPrice} </div>
                                <div className="price-content discount"> ({user.discount}%) </div>
                            </div>
                            <div> </div>


                        </div>


                    </div>
                    <div className="button-div">
                        <div>{cartState.cart.some((p)=>p.id === user.id)? (
                            <Link to="/Cart"><button className="card2-button"> Go to cart </button> </Link> ) : (


                            <button className="card2-button" onClick={()=>{AddtoCartHandler(user)}}> Add To
                                Cart</button>
                            )

                            }</div>

                    </div>






                </div>

                )}




            </div>
        </div>


    </div>


</div>
)

}
export {WomenClothes}