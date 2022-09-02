import { useWishlist } from "../../context/wishlistContext"
import "../wishlist/wishList.css"
import {Link} from "react-router-dom"

import { TiDeleteOutline } from "react-icons/ti";
import { IoMdCart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "../../context/cartContext";



function WishList(){

    const { cartState,cartDispatch} = useCart()

    const {WishlistDispatch} = useWishlist()
 

    const {WishlistState: { Wishlist }}  = useWishlist()

    
    function removerhandler(user){
        WishlistDispatch({type: "REMOVE_FROM_WISHLIST",payload: user,});
        toast.success(" Removed From Wishlist !");
                
                

    }

    return (

        <div>
            <div  className="big-container">
                {Wishlist.map((user) => (  
                   <div className="small-container">  
                    <div key={user.id} className="wishlist-container">
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
                    
           
        <div className="button-divs">{cartState.cart.some((p)=>p.id === user.id)? ( <Link to="/Cart"><button className="card-button"> <IoMdCart/>Go to cart </button> </Link>  ) : (
            <button  className="card-button"  onClick={() =>{
                cartDispatch({type: "ADD_TO_CART",payload: user,});
                toast.success(" Added To Cart !");
              }}> <IoMdCart/>Add To Cart</button>
        )  }</div>
                  </div>

            
        </div>
                    </div>
                    
                    {/* <div className="x-buttons"> <button onClick={() =>{WishlistDispatch({type: "REMOVE_FROM_WISHLIST",payload: user,});
                    toast.success(" Removed From Wishlist !");
                
                }}><TiDeleteOutline /></button> </div> */}
                <div>
                    {<div className="x-buttons"> <button onClick={()=>removerhandler(user)}><TiDeleteOutline /></button> </div> }

                </div>
                    </div>
                    </div>
                    
                ))}
                
            </div>
        </div>







        
    )
}
export {WishList}