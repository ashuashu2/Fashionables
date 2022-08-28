import { Link } from "react-router-dom"

function Eror404 (){
    return(
        <div> 
       <h1 style={{fontSize :"5rem"}}>  <span style={{color :"Red"}}>Opps!</span>  Page Not Found</h1>
       <p style={{fontSize :"2rem"}}>You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.</p>
       <Link to="./" ><button style={{ cursor:"pointer", fontSize :"2rem",backgroundColor:"black",color:"white",fontWeight:"bolder"}}> Back To Home </button> </Link>  
   </div>
    )
}
export {Eror404}