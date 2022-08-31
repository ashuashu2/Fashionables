import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

function RequiresAuth({children}){

    const location = useLocation();
  const { isLoggedIn } = useAuth()

    return isLoggedIn ? (
        children
      ) : (
        <Navigate to="/Login" state={{ from: location }} replace />
      )
    
}
export { RequiresAuth}