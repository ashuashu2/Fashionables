import logo from "../images/logo.jpg"
import "../Nav/Nav.css"
import { Link,NavLink} from "react-router-dom";


function PlainNav (){
return (
    <div className="plain-nav-container" >
        <img  className="Nav-logo Nav-left-side-content  " src={logo} alt="" />
                <h1 style={{ fontWeight:"bolder" }} className="plain-nav"> <NavLink className="plain-nav-NavLink" to="./" > <span className="plain-nav-f-text" >F</span><span >ashionables.com</span> </NavLink>  </h1>
    </div>
)
}
export {PlainNav}