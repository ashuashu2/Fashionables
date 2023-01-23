import { useEffect, useState } from "react"
import "../productStore/productListing.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";


import { Filter } from "./filter"

import { Store } from "./store"

function ProductListing(){
    const [ isHamburger ,setIsHamburger ] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


      const hamburgerHandler=()=>{
  setIsHamburger(!isHamburger)
   }
    return(
        <div >

            <div className="bigger-div">
            <div className="store-page-hamburger">
                    {  isHamburger ?
                     <div onClick={hamburgerHandler} >
                         <h1 className="cross-icon"> <ImCross /> </h1>
                    </div> :
                    <div onClick={hamburgerHandler} >
                        <h1><GiHamburgerMenu />
                        </h1>
                    </div> }
                    </div>
                    <div className="store-page-small-div">
                    <div className={isHamburger ?  "filter-div2" : "filter-div"} ><Filter  /></div>
                    <div className=" store-div" > <Store /> </div>
                    </div>
            
                
                
            
          
            </div>
         
        </div>
    )
}
export{ProductListing}