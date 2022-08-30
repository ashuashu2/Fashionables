import  emptywishlist from "../images/emptywishlist.png";
import { Link} from "react-router-dom";



function EmptyWishlist() {
    return(
        <div>
            <div>
                <img  height={400} width={600} src={emptywishlist} alt="" />


            </div>
            <Link to="/ProductListing" ><button style={{width: 200}} className="card-button">Explore all collection</button></Link>



        </div>
    )
    
}
export {EmptyWishlist}