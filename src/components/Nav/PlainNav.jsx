import logo from "../images/logo.jpg"
import { Link,NavLink} from "react-router-dom";


function PlainNav (){
return (
    <div style={{display:"flex"}} >
        <img  className="Nav-logo Nav-left-side-content" src={logo} alt="" />
                <h1 className="Nav-left-side-content heading"> <NavLink className="NavLink" to="./" > <span className="f-text" >F</span><span className="heading-text">ashionables.com</span> </NavLink>  </h1>
    </div>
)
}
export {PlainNav}