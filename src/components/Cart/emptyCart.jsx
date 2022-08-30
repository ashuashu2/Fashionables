import  emptycart from "../images/emptycart.png";
import { Link} from "react-router-dom";



function EmptyCart() {
    return(
        <div>
            <div><img style={{marginTop:5}}  height={400} width={600} src={emptycart} alt="" /></div>
            <Link to="/ProductListing" ><button style={{width: 200}} className="card-button">Explore all collection</button></Link>
            

        </div>
    )
    
}
export {EmptyCart}