import  emptycart from "../images/emptycart.png";
import { Link} from "react-router-dom";
import "../Cart/cart.css"



function EmptyCart() {
    return(
        <div className="emprt-cart-main-div">
            <div className="empty-caty-div3"><img className="empty-cart-image"  src={emptycart} alt="" /></div>
            <Link to="/ProductListing" className="empty-caty-button" ><button  className="empty-cart-button1">Explore all collection</button></Link>
            

        </div>
    )
    
}
export {EmptyCart}