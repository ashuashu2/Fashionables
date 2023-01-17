import  emptywishlist from "../images/emptywishlist.png";
import { Link} from "react-router-dom";
import "../wishlist/wishList.css"



function EmptyWishlist() {
    return(
        <div>
            <div>
                <img src={emptywishlist} alt="" />


            </div>
            <Link to="/ProductListing" ><button  className="empty-wishlist-button">Explore all collection</button></Link>



        </div>
    )
    
}
export {EmptyWishlist}