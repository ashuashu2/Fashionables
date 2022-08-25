import "../productStore/productListing.css"

import { Filter } from "./filter"
import { Store } from "./store"

function ProductListing(){
    return(
        <div>

            <div className="bigger-div">
                <div className="filter-div"><Filter  /></div>
                <div className=" store-div " ><Store /></div>
            
          
            </div>
         
        </div>
    )
}
export{ProductListing}