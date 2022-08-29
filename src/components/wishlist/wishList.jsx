import { useWishlist } from "../../context/wishlistContext"
import "../wishlist/wishList.css"
import {Link} from "react-router-dom"

import { TiDeleteOutline } from "react-icons/ti";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../../context/cartContext";



function WishList(){

    const { cartState,cartDispatch} = useCart()

    const {WishlistDispatch} = useWishlist()
 

    const {WishlistState: { Wishlist }}  = useWishlist()

    return (

        <div>
            <div  className="big-container">
                {Wishlist.map((user) => (  
                   <div className="small-container">  
                    <div className="wishlist-container">
                    <div><img height={200} width={150} src={user.img} alt="" /> </div>
                    <div> 
        <div>
                  <h4> {user.name} </h4>
                  <div>{user.description1}</div>

                  <div>


                    <div>
                        <div className="Price-container"  >
                      <div className="Price-content"> RS.{user.price } </div>
                     <div className="Price-content"> {user.originalPrice} </div>
                     <div className="Price-content"> ({user.discount}%) </div>
                     </div>
                     <Link to={`/ProductDetail/${user.id}`}> <button className="card-button" style={{margin:"2rem"}}> view detils</button> </Link>
                     

                    </div>
                    
           
        <div>{cartState.cart.some((p)=>p.id === user.id)? ( <Link to="/Cart"><button className="card-button"> <IoMdCart/>Go to cart </button> </Link>  ) : (
            <button  className="card-button"  onClick={() =>cartDispatch({type: "ADD_TO_CART",payload: user,})}> <IoMdCart/>Add To Cart</button>
        )  }</div>
                  </div>

            
        </div>
                    </div>
                    
                    <div className="x-buttons"> <button onClick={() =>WishlistDispatch({type: "REMOVE_FROM_WISHLIST",payload: user,})}><TiDeleteOutline /></button> </div>
                    </div>
                    </div>
                    
                ))}
                
            </div>
        </div>







        
        // <div>



        //     <div > 
        //         <div >
        //             <div>
                         
        //         {Wishlist.map((Wishlist)=>( 
        // <div >
        //     <div > 
        //               <div> <img height={200} width={150} src={Wishlist.img} alt="" /> </div>
        //               <div>
        //               <h4> {Wishlist.name} </h4>
        //               <div>{Wishlist.description1}</div>
        //  <div className="Price-container"  >
        //     <div className="Price-content"> RS.{Wishlist.price } </div>
        //     <div className="Price-content"> {Wishlist.originalPrice} </div>
        //     <div className="Price-content"> ({Wishlist.discount}) </div>
        // </div>
        //     </div>
                      
        //               <div > <small >Delivery by <span>{Wishlist.Date}</span> |  Free <span className="free-delivery"> ₹40</span>  </small></div>

        //      </div>
        //      <button onClick={() =>WishlistDispatch({type: "REMOVE_FROM_WISHLIST",payload: Wishlist,})}><TiDeleteOutline /></button>


        // </div>


        //         ))}
           

        //             </div>
        //         </div>

        //     </div>

        // </div>
    )
}
export {WishList}