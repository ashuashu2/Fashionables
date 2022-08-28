import { useParams } from "react-router-dom"
import { useStore } from "../context/storeContext"
// import { Store } from "./productStore/store"
import {ProductCard} from "./singleProduct"

function ProductDetail() {
    const {storeData} =useStore()
    const {productId} = useParams()
    function findDeatils (storeData,productId){
        return storeData.find((item)=>item.id===productId)
    }
    const product = findDeatils(storeData, productId);
    

    return(
        <div>
      <ProductCard {...product} />
        </div>
    )
    
}
export {ProductDetail}